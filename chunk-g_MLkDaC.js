import{$i as nb,$n as Xo$1,$t as PT,At as Ke$1,Ba as te,Bi as le,Bo as zse,Bt as MT,C as Bt,Cn as Se$1,Co as xse,Cr as ae,D as Cn$1,Dn as Tr,Dr as b,Dt as KI,E as Cl$1,Ea as re,Eo as yP,Et as KE,F as Dr,Fa as si$1,Fi as kn$1,Fo as zF,Ft as Le$1,Gn as WI,Gt as N,Hn as Vt$1,Hr as dr,Ht as Ms$1,Ii as kr,Io as zd,Ir as ce,It as Lie,J as Fi,Ja as uZ,Ji as mf,Jn as Wn$1,K as Fa$1,Ka as uE,Ki as mb,Kn as Wd$1,Kr as ea$1,Kt as Ne$1,La as sr,Ln as Va$1,Lo as ze,Lt as Ls$1,Mo as yse,Mt as Ko$1,Na as sT,No as yt$1,O as Co$1,Oa as ri$1,Oo as ya$1,Or as bE,Pa as sce,Pi as kl$1,Pr as bv,Pt as LP,Q as G,Qa as un,R as Eb,Ra as tB,Rr as cr,Rt as M,Si as j,So as xn,Sr as ace,St as Jt,Ti as ja$1,To as y,Tr as ao$1,U as F,Va as tl$1,Vr as dce,Vt as Ml,Wi as mI,Wn as W,Wt as Mt$1,Xa as ue,Xn as Wt,Xr as eu,Xt as Oc$1,Ya as ub,Yi as ml$1,Yn as Wo$1,Yt as Nt$1,Z as Fm,Za as ul$1,Zn as X,Zr as f,_a as qP,_r,at as Gt,bi as ie,bo as xce,c as $r$1,ci as hB,cn as QF,cr as Ze,ct as HF,d as A,dn as Qe$1,en as Pa$1,er as Xt,et as GI,f as AT,fa as pe,fn as Qt,fr as _,g as B,gi as hy,gn as Rd$1,gr as _o$1,ha as pt,ht as Ie,ii as g,in as Ps$1,io as ve,j as D,jn as UP,jr as bl$1,jt as Kn$1,ki as js$1,kn as Tt$1,ko as yae,l as $t,li as hE,lo as w,lr as Zn$1,lt as HP,mi as hn,mn as R,mr as _e,n as $I,ni as fse,nn as Pie,no as vae,nr as Xv,oi as gce,on as Pt$1,oo as vo$1,or as Z,p as Ae,pa as pn,pi as hl$1,po as wt$1,qa as uF,qi as mce,qt as Nn$1,r as $d$1,ra as no$1,ri as ft,ro as vce,rt as Gn$1,sa as ol$1,si as gn,sn as Q,so as vse,st as H,t as $F,ta as ni,ti as fe,tn as Pe,u as $y,uo as wae,ur as Zo$1,ut as Hd,v as Ba$1,va as qi,vi as iB,vn as Rn,vo as xae,w as CF,wn as So$1,wt as K,x as Bn$1,xn as Rt$1,xo as xe,xt as Jj,y as Be,yn as Rr,yt as J,za as tb,zn as Ve$1,zo as zs$1,zr as dF,zt as ME}from"./chunk-CpeWzSSw.js";import{n as s,t as r}from"./chunk-DFgPOoGa.js";var Vn=class i{elementRef=f(K);static ɵfac=function(e){return new(e||i)};static ɵdir=Z({type:i,selectors:[[``,`bxButtonIcon`,``]]})};var Fr={text:0,icon:.45,outlined:.45,tonal:.65,filled:1.1};var Vr={primary:1,accent:1,success:1,info:1,warn:1.04,danger:1.1,grayscale:.35};function zr(i,n,e){return Fr[i===`text`?`text`:n?`outlined`:i===`tonal`?`tonal`:i===`icon`?`icon`:`filled`]*Vr[e]}var zo=[`*`];function Bo(i,n){if(i&1&&xe(0,`bx-loading-spinner`,1),i&2){let e=w();R(`size`,e.spinnerSize())(`decorative`,!0)}}var me=class i{bxA11yService=f(Le$1);projectedIcon=ao$1(Vt$1);iconElement=ao$1(Vt$1,{read:K});customIcon=ao$1(Vn);spinnerSize=M(20);isAnimated=g(()=>!this.bxA11yService.isReducedMotion());isDisabled=g(()=>this.disabled()||this.loading());variant=b(`text`);color=b(`primary`);outlined=b(!1);elevated=b(!1);disabled=b(!1,{transform:A});loading=b(!1,{transform:A});interactive=b(!0,{transform:A});surfaceEffects=b(!0,{transform:A});glassiness=b();constructor(){KI(()=>({glassiness:this.glassiness(),emissionStrength:zr(this.variant(),this.outlined(),this.color()),interactive:this.variant()===`text`||!this.interactive()||this.isDisabled()?!1:void 0,emission:this.variant()!==`text`&&this.interactive()&&!this.isDisabled()?this.color()===`primary`||this.color()===`grayscale`?`var(--bx-primary)`:this.color()===`accent`?`var(--bx-accent)`:`var(--bx-text-${this.color()})`:void 0}),()=>this.surfaceEffects()),Gn$1(n=>{let e=this.customIcon()?.elementRef.nativeElement??this.iconElement()?.nativeElement,t=Number(this.projectedIcon()?.size()),r=e?.offsetWidth;if(this.spinnerSize.set(r||(Number.isFinite(t)&&t>0?t:20)),!e||!this.loading())return;let o=e.style.display;e.style.display=`none`,n(()=>{e.style.display=o})})}onClick(n){this.isDisabled()&&(n.preventDefault(),n.stopImmediatePropagation())}static ɵfac=function(e){return new(e||i)};static ɵcmp=G({type:i,selectors:[[`bx-button`],[`button`,`bx-button`,``],[`a`,`bx-button`,``]],contentQueries:function(e,t,r){e&1&&Wn$1(r,t.projectedIcon,Vt$1,5)(r,t.iconElement,Vt$1,5,K)(r,t.customIcon,Vn,5),e&2&&ft(3)},hostVars:14,hostBindings:function(e,t){e&1&&te(`click`,function(o){return t.onClick(o)}),e&2&&(B(`disabled`,t.isDisabled()?!0:null)(`aria-disabled`,t.isDisabled())(`aria-busy`,t.loading()?`true`:null)(`tabindex`,t.isDisabled()?`-1`:null),yP(`bx-btn bx-btn-`+t.variant()+` bx-btn-color-`+t.color()),ae(`bx-btn-is-outlined`,t.outlined())(`bx-btn-is-elevated`,t.elevated())(`bx-btn-animated`,t.isAnimated())(`bx-btn-non-interactive`,!t.interactive()))},inputs:{variant:[1,`variant`],color:[1,`color`],outlined:[1,`outlined`],elevated:[1,`elevated`],disabled:[1,`disabled`],loading:[1,`loading`],interactive:[1,`interactive`],surfaceEffects:[1,`surfaceEffects`],glassiness:[1,`glassiness`]},ngContentSelectors:zo,decls:3,vars:1,consts:[[1,`bx-btn-content-wrapper`],[3,`size`,`decorative`]],template:function(e,t){e&1&&(Ae(),_(0,`span`,0),j(1,Bo,1,2,`bx-loading-spinner`,1),pe(2),D()),e&2&&(y(),F(t.loading()?1:-1))},dependencies:[Ml],styles:[`
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
}`]})};function qo(i,n){i&1&&xe(0,`bx-icon`,1)}function Ho(i,n){i&1&&xe(0,`bx-icon`,2)}var _n=class i{checked=b(!1);indeterminate=b(!1);invalid=b(!1);disabled=b(!1);emissive=b(!1);static ɵfac=function(e){return new(e||i)};static ɵcmp=G({type:i,selectors:[[`bx-checkbox-indicator`]],hostAttrs:[`aria-hidden`,`true`],hostVars:2,hostBindings:function(e,t){e&2&&ae(`is-emissive`,t.emissive())},inputs:{checked:[1,`checked`],indeterminate:[1,`indeterminate`],invalid:[1,`invalid`],disabled:[1,`disabled`],emissive:[1,`emissive`]},decls:3,vars:9,consts:[[`bxSurface`,``,1,`bx-checkbox-box`,3,`bxSurfaceInteractive`,`bxSurfaceEmission`],[`name`,`minus`,`size`,`16`],[`name`,`check`,`size`,`16`]],template:function(e,t){e&1&&(_(0,`span`,0),j(1,qo,1,0,`bx-icon`,1)(2,Ho,1,0,`bx-icon`,2),D()),e&2&&(ae(`is-checked`,t.checked()||t.indeterminate())(`is-invalid`,t.invalid())(`is-disabled`,t.disabled()),R(`bxSurfaceInteractive`,t.emissive())(`bxSurfaceEmission`,t.invalid()?`var(--bx-text-danger)`:`var(--bx-accent)`),y(),F(t.indeterminate()?1:t.checked()?2:-1))},dependencies:[Rt$1,Vt$1],styles:[`
[_nghost-%COMP%] {
  display: inline-flex;
  flex: 0 0 auto;
  vertical-align: middle;
  pointer-events: none;
  border-radius: var(--%NS%bx-rounded-sm);
}
.is-emissive[_nghost-%COMP%] {
  pointer-events: auto;
}
.bx-checkbox-box[_ngcontent-%COMP%] {
  box-sizing: border-box;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  inline-size: var(--%NS%bx-checkbox-size, 1.125rem);
  block-size: var(--%NS%bx-checkbox-size, 1.125rem);
  line-height: 0;
  background-color: var(--%NS%bx-bg-surface);
  border: var(--%NS%bx-border-width, 1px) var(--%NS%bx-border-style, solid) var(--%NS%bx-border-strong);
  border-radius: var(--%NS%bx-rounded-sm);
  color: var(--%NS%bx-text-primary);
  transition-property: border-color;
  transition-duration: calc(0.15s * (1 - var(--%NS%bx-reduced-motion, 0)));
  transition-timing-function: ease;
}
.bx-checkbox-box.is-invalid[_ngcontent-%COMP%] {
  border-color: var(--%NS%bx-border-danger);
  background-color: var(--%NS%bx-bg-danger-subtle);
}
.bx-checkbox-box.is-checked[_ngcontent-%COMP%] {
  background-color: var(--%NS%bx-accent);
  border-color: var(--%NS%bx-accent);
  color: var(--%NS%bx-on-accent);
}
.bx-checkbox-box.is-checked.is-invalid[_ngcontent-%COMP%] {
  background-color: var(--%NS%bx-bg-danger);
  border-color: var(--%NS%bx-border-danger);
}
.bx-checkbox-box[data-bx-surface][_ngcontent-%COMP%] {
  --%NS%bx-glass-shadow: none;
  --%NS%bx-glass-surface: var(--%NS%bx-bg-neutral);
  --%NS%bx-glass-edge: var(--%NS%bx-border-strong);
  --%NS%bx-glass-min-opacity: 0.65;
  border: var(--%NS%bx-border-width, 1px) var(--%NS%bx-border-style, solid) var(--%NS%bx-glass-edge);
  box-sizing: border-box;
  --%NS%bx-glass-text: var(--%NS%bx-text-primary);
}
.bx-checkbox-box[data-bx-surface].is-checked[_ngcontent-%COMP%] {
  --%NS%bx-glass-surface: var(--%NS%bx-accent);
  --%NS%bx-glass-min-opacity: 1;
  --%NS%bx-glass-edge: var(--%NS%bx-border-accent);
  --%NS%bx-glass-text: var(--%NS%bx-on-accent);
}
.bx-checkbox-box[data-bx-surface].is-invalid[_ngcontent-%COMP%] {
  --%NS%bx-glass-surface: var(--%NS%bx-bg-danger-subtle);
  --%NS%bx-glass-edge: var(--%NS%bx-border-danger);
  --%NS%bx-glass-text: var(--%NS%bx-text-danger);
}
.bx-checkbox-box[data-bx-surface][_ngcontent-%COMP%]:not(.is-disabled, .is-invalid) {
  background-image:
    linear-gradient(
      180deg,
      color-mix(in srgb, var(--%NS%bx-border-strong) 24%, var(--%NS%bx-glass-surface)),
      var(--%NS%bx-glass-surface) 55%,
      color-mix(in srgb, var(--%NS%bx-border-strong) 10%, var(--%NS%bx-glass-surface))) !important;
  border-top-color: var(--%NS%bx-border-strong);
  border-bottom-color: var(--%NS%bx-border-default);
}
.bx-checkbox-box[data-bx-surface][_ngcontent-%COMP%]:not(.is-disabled, .is-invalid).is-checked {
  background-image:
    linear-gradient(
      180deg,
      color-mix(in srgb, var(--%NS%bx-color-accent-50) 24%, var(--%NS%bx-accent)),
      var(--%NS%bx-accent) 42%,
      var(--%NS%bx-accent) 65%,
      color-mix(in srgb, var(--%NS%bx-border-accent) 18%, var(--%NS%bx-accent))) !important;
  border-top-color: color-mix(in srgb, var(--%NS%bx-color-accent-100) 60%, var(--%NS%bx-accent));
  border-inline-color: var(--%NS%bx-accent);
  border-bottom-color: var(--%NS%bx-border-accent);
}
.high-contrast[_nghost-%COMP%]   .bx-checkbox-box[data-bx-surface][_ngcontent-%COMP%]:not(.is-disabled, .is-invalid), .high-contrast   [_nghost-%COMP%]   .bx-checkbox-box[data-bx-surface][_ngcontent-%COMP%]:not(.is-disabled, .is-invalid), 
.bx-high-contrast-scope[_nghost-%COMP%]   .bx-checkbox-box[data-bx-surface][_ngcontent-%COMP%]:not(.is-disabled, .is-invalid), .bx-high-contrast-scope   [_nghost-%COMP%]   .bx-checkbox-box[data-bx-surface][_ngcontent-%COMP%]:not(.is-disabled, .is-invalid) {
  background-image: none !important;
  border-color: var(--%NS%bx-glass-edge);
}
@media (forced-colors: active) {
  .bx-checkbox-box[data-bx-surface][_ngcontent-%COMP%]:not(.is-disabled, .is-invalid) {
    background-image: none !important;
    border-color: ButtonText;
  }
}`]})};var Wo=[`*`];var zn=class i{static ɵfac=function(e){return new(e||i)};static ɵcmp=G({type:i,selectors:[[`bx-error`]],hostAttrs:[`aria-live`,`polite`],ngContentSelectors:Wo,decls:1,vars:0,template:function(e,t){e&1&&(Ae(),pe(0))},encapsulation:2})};var jo=[`*`];var Bn=class i{align=b(`start`);static ɵfac=function(e){return new(e||i)};static ɵcmp=G({type:i,selectors:[[`bx-hint`]],hostVars:2,hostBindings:function(e,t){e&2&&_e(`margin-inline-start`,t.align()===`end`?`auto`:null)},inputs:{align:[1,`align`]},ngContentSelectors:jo,decls:1,vars:0,template:function(e,t){e&1&&(Ae(),pe(0))},encapsulation:2})};var qn=new N(`BX_FORM_FIELD_CONTROL`);var $o=[[[``,`bxPrefix`,``]],`*`,[[``,`bxSuffix`,``]],[[`bx-error`]],[[`bx-hint`]]];var Ko=[`[bxPrefix]`,`*`,`[bxSuffix]`,`bx-error`,`bx-hint`];var Zo=[`ngProjectAs`,`bx-error`,5,[`bx-error`]];var Go=[`ngProjectAs`,`bx-hint`,5,[`bx-hint`]];function Xo(i,n){i&1&&(_(0,`span`,11),X(1,`*`),D())}function Uo(i,n){if(i&1&&(_(0,`div`,1)(1,`label`,10),X(2),j(3,Xo,2,0,`span`,11),D()()),i&2){let e=w();y(),B(`for`,e.controlId()),y(),un(``,e.resolvedLabel(),` `),y(),F(e.isRequired()&&!e.hideRequiredMarker()?3:-1)}}function Yo(i,n){i&1&&xe(0,`bx-loading-spinner`,3),i&2&&R(`size`,16)(`decorative`,!0)}function Qo(i,n){if(i&1&&(_(0,`button`,4),xe(1,`bx-icon`,12),D()),i&2){let e=w();R(`bxTooltip`,e.tooltip()),B(`aria-label`,e.resolvedTooltipLabel())}}function Jo(i,n){i&1&&xe(0,`bx-icon`,14)}function ea(i,n){if(i&1&&(_(0,`div`,15),X(1),D()),i&2){let e=n.$implicit;y(),fe(e)}}function na(i,n){if(i&1&&(_(0,`div`,13),j(1,Jo,1,0,`bx-icon`,14),_(2,`div`),$t(3,ea,2,1,`div`,15,ja$1),D()()),i&2){let e=w();ae(`bx-animated`,e.isAnimated()),y(),F(e.messages().length?1:-1),y(2),Wt(e.messages())}}var U=class i{i18n=f(Se$1,{optional:!0});bxA11yService=f(Le$1);nativeElement=f(K).nativeElement;bxGlassLightingService=f(ub);generatedId=`bx-field-${Jt()}`;projectedControl=ao$1(qn);activeControl=g(()=>this.control()??this.projectedControl());controlId=g(()=>this.forId()||this.activeControl()?.controlId()||this.generatedId);resolvedLabel=g(()=>J(this.label()??(this.inline()?void 0:this.activeControl()?.label()),this.i18n));resolvedError=g(()=>J(this.error(),this.i18n));resolvedHint=g(()=>J(this.hint(),this.i18n));resolvedHintEnd=g(()=>J(this.hintEnd(),this.i18n));resolvedTooltipLabel=g(()=>J(this.tooltipLabel(),this.i18n));showErrors=g(()=>!!this.error()||!!this.projectedError()||this.errors().length>0||(this.activeControl()?.showError()??!1));messages=g(()=>this.resolvedError()?[this.resolvedError()]:this.activeControl()?.errorTexts()??this.errors());isRequired=g(()=>this.required()||this.activeControl()?.required());isLoading=g(()=>this.loading()||this.activeControl()?.pending());hideSubscript=g(()=>this.subscriptSizing()===`dynamic`&&!this.showErrors()&&!this.resolvedHint()&&!this.resolvedHintEnd()&&!this.projectedHint());projectedError=ao$1(zn);projectedHint=ao$1(Bn);isAnimated=g(()=>!this.bxA11yService.isReducedMotion());inline=b(!1);control=b(void 0);label=b(void 0);tooltip=b(void 0);tooltipLabel=b(`More information`);error=b(void 0);errors=b([]);hint=b(void 0);hintEnd=b(void 0);required=b(!1);hideRequiredMarker=b(!1);loading=b(!1);showLoadingIndicator=b(!0);forId=b(``);subscriptSizing=b(`fixed`);constructor(){Gn$1(n=>{this.activeControl()?.setDescribedByIds?.([`${this.controlId()}-description`]);let e=this.nativeElement.querySelector(`input,textarea,select,button[role="combobox"]`);if(e){let g=new Set((e.getAttribute(`aria-describedby`)??``).split(` `).filter(Boolean));g.add(`${this.controlId()}-description`),e.setAttribute(`aria-describedby`,[...g].join(` `)),e.setAttribute(`aria-invalid`,String(this.showErrors())),e.setAttribute(`aria-required`,String(!!this.isRequired()))}if(!this.showErrors())return;let t=this.nativeElement.parentElement,r=this.nativeElement.closest(`form, fieldset`)??t,o=this.nativeElement.querySelector(`.bx-field-control > [data-bx-surface]`);if(!r||!o)return;let l=this.bxGlassLightingService.register(r,{element:o,edge:`bottom`,offsetX:.5,offsetY:1,z:32,color:`var(--bx-text-danger)`,intensity:.9,radius:240});n(()=>l.destroy())})}static ɵfac=function(e){return new(e||i)};static ɵcmp=G({type:i,selectors:[[`bx-form-field`]],contentQueries:function(e,t,r){e&1&&Wn$1(r,t.projectedControl,qn,5)(r,t.projectedError,zn,5)(r,t.projectedHint,Bn,5),e&2&&ft(3)},inputs:{inline:[1,`inline`],control:[1,`control`],label:[1,`label`],tooltip:[1,`tooltip`],tooltipLabel:[1,`tooltipLabel`],error:[1,`error`],errors:[1,`errors`],hint:[1,`hint`],hintEnd:[1,`hintEnd`],required:[1,`required`],hideRequiredMarker:[1,`hideRequiredMarker`],loading:[1,`loading`],showLoadingIndicator:[1,`showLoadingIndicator`],forId:[1,`forId`],subscriptSizing:[1,`subscriptSizing`]},ngContentSelectors:Ko,decls:18,vars:17,consts:[[1,`bx-field-wrapper`],[1,`bx-field-header`],[1,`bx-field-control`],[3,`size`,`decorative`],[`type`,`button`,`bxTooltipTouch`,`tap`,`placement`,`top`,1,`bx-field-tooltip-trigger`,3,`bxTooltip`],[1,`bx-field-subscript`,3,`hidden`,`id`],[1,`bx-field-error-projected`,3,`hidden`],[`aria-live`,`polite`,1,`bx-field-error`,3,`bx-animated`],[1,`bx-field-hints`,3,`hidden`],[1,`bx-field-hint-end`],[1,`bx-field-label`],[`aria-hidden`,`true`,1,`bx-field-required`],[`name`,`help-circle`,`size`,`16`],[`aria-live`,`polite`,1,`bx-field-error`],[`name`,`alert-circle`,`size`,`16`],[1,`bx-field-error-text`]],template:function(e,t){e&1&&(Ae($o),_(0,`div`,0),j(1,Uo,4,3,`div`,1),_(2,`div`,2),pe(3),pe(4,1),pe(5,2),j(6,Yo,1,2,`bx-loading-spinner`,3),j(7,Qo,2,2,`button`,4),D(),_(8,`div`,5)(9,`div`,6),pe(10,3,Zo),D(),j(11,na,5,3,`div`,7),_(12,`div`,8)(13,`span`),X(14),D(),pe(15,4,Go),_(16,`span`,9),X(17),D()()()()),e&2&&(ae(`is-invalid`,t.showErrors())(`dynamic-subscript`,t.subscriptSizing()===`dynamic`),B(`data-bx-field-invalid`,t.showErrors()),y(),F(t.resolvedLabel()?1:-1),y(),ae(`bx-field-control-inline`,t.inline()),y(4),F(t.showLoadingIndicator()&&t.isLoading()?6:-1),y(),F(t.tooltip()?7:-1),y(),R(`hidden`,t.hideSubscript())(`id`,t.controlId()+`-description`),y(),R(`hidden`,!t.showErrors()),y(2),F(t.showErrors()&&!t.projectedError()?11:-1),y(),R(`hidden`,t.showErrors()),y(2),fe(t.resolvedHint()),y(3),fe(t.resolvedHintEnd()))},dependencies:[Vt$1,qi,Ml],styles:[`
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
}`]})};var Br={errorPolicy:`touched`,errorMode:`first`,errorMessages:{required:`This field is required.`,email:`Enter a valid email address.`,minLength:({params:i})=>`Enter at least ${i.minLength??i.requiredLength} characters.`,maxLength:({params:i})=>`Enter no more than ${i.maxLength??i.requiredLength} characters.`,min:({params:i})=>`Enter a value of at least ${i.min}.`,max:({params:i})=>`Enter a value of no more than ${i.max}.`,pattern:`Enter a value in the required format.`,parse:`Enter a valid value.`,invalid:`Invalid value.`},appearance:`fill`,floatLabel:`auto`,hideRequiredMarker:!1,subscriptSizing:`fixed`,tooltipOnTruncate:!0};var qr={minlength:`minLength`,maxlength:`maxLength`};function Sn(i,n,e,t){let r$1=qr[i.kind]??i.kind,o=`context`in i?i.context:void 0,l=o!==null&&typeof o==`object`?r({},o):r({},i),g=n[i.kind]??n[r$1],y=i.message??(typeof o==`string`?o:typeof l.message==`string`?l.message:void 0),w=g??y??e[i.kind]??e[r$1]??e.invalid??`Invalid value.`;return J(typeof w==`function`?w({kind:r$1,error:i,params:l}):w,t,l)}var Cn=class i{state=M(r({},Br));settings=this.state.asReadonly();update(n){this.state.update(e=>s(r(r({},e),n),{errorMessages:r(r({},e.errorMessages),n.errorMessages)}))}static ɵfac=function(e){return new(e||i)};static ɵprov=ie({token:i,factory:i.ɵfac,providedIn:`root`})};var We=class i{textAdapter=f(Se$1,{optional:!0});formGroupDirective=f(iB,{optional:!0,skipSelf:!0});ngForm=f(tB,{optional:!0,skipSelf:!0});focusMonitor=f($d$1);formSettingsService=f(Cn);destroyRef=f(Q);nativeElement=f(K).nativeElement;ngControl=f(Tr,{optional:!0,self:!0});generatedId=`bx-field-${Jt()}`;submittedByParent=M(!1);extraDescriptions=M([]);localTouched=M(!1);controlVersion=M(0);currentErrors=g(()=>{if(this.controlVersion(),this.errors().length)return this.errors();let n=this.ngControl?.errors;return n?Object.entries(n).map(([e,t])=>({kind:e,context:t})):[]});keyboardFocused=M(!1);isReadonly=g(()=>this.readonly()||this.readOnly());controlId=g(()=>this.id()??this.generatedId);resolvedLabel=g(()=>J(this.label(),this.textAdapter));resolvedPlaceholder=g(()=>J(this.placeholder(),this.textAdapter));resolvedAppearance=g(()=>this.appearance()??this.formSettingsService.settings().appearance);resolvedFloatLabel=g(()=>this.floatLabel()??this.formSettingsService.settings().floatLabel);resolvedHideRequiredMarker=g(()=>this.hideRequiredMarker()??this.formSettingsService.settings().hideRequiredMarker);resolvedSubscriptSizing=g(()=>this.subscriptSizing()??this.formSettingsService.settings().subscriptSizing);resolvedTooltipOnTruncate=g(()=>this.tooltipOnTruncate()??this.formSettingsService.settings().tooltipOnTruncate??!0);describedBy=g(()=>[...new Set([this.ariaDescribedBy(),`${this.controlId()}-description`,...this.extraDescriptions()].filter(Boolean))].join(` `));effectiveDisabled=g(()=>(this.controlVersion(),this.disabled()||this.ngControl?.disabled===!0));effectiveRequired=g(()=>{this.controlVersion();let n=this.ngControl?.control;return this.required()||!!n?.hasValidator?.(ml$1.required)||!!n?.hasValidator?.(ml$1.requiredTrue)});showError=g(()=>{this.controlVersion();let n={invalid:this.invalid()||this.currentErrors().length>0||!!this.error(),touched:this.ngControl?.touched??(this.touched()||this.localTouched()),dirty:this.ngControl?.dirty??this.dirty(),submitted:this.submitted()||this.submittedByParent(),disabled:this.effectiveDisabled(),pending:this.pending()},e=this.errorPolicy()??this.formSettingsService.settings().errorPolicy;return n.disabled||!n.invalid?!1:typeof e==`function`?e(n):e===`always`||n.submitted||(e===`dirty`?n.dirty:e===`touched`?n.touched:!1)});errorTexts=g(()=>{if(!this.showError())return[];if(this.error())return[J(this.error(),this.textAdapter)];let n=this.errorPriority(),e=[...this.currentErrors()].sort((r,o)=>{let l=n.indexOf(r.kind),g=n.indexOf(o.kind);return(l<0?n.length:l)-(g<0?n.length:g)});return((this.errorMode()??this.formSettingsService.settings().errorMode)===`all`?e:e.slice(0,1)).map(r=>Sn(r,this.errorMessages(),this.formSettingsService.settings().errorMessages,this.textAdapter))});fieldControl;id=b(void 0);label=b(void 0);placeholder=b(void 0);tooltip=b(void 0);hint=b(void 0);hintEnd=b(void 0);error=b(void 0);ariaLabel=b(void 0);ariaLabelledBy=b(void 0);ariaDescribedBy=b(void 0);dataTestId=b(void 0);name=b(``);errors=b([]);invalid=b(!1);pending=b(!1);touched=b(!1);dirty=b(!1);disabled=b(!1,{transform:A});readonly=b(!1,{transform:A});readOnly=b(!1,{transform:A});hidden=b(!1,{transform:A});required=b(!1,{transform:A});loading=b(!1,{transform:A});disabledReasons=b([]);submitted=b(!1);errorMessages=b({});errorPriority=b([]);errorPolicy=b(void 0);errorMode=b(void 0);appearance=b(void 0);floatLabel=b(void 0);hideRequiredMarker=b(void 0);subscriptSizing=b(void 0);tooltipOnTruncate=b(void 0);touch=ze();constructor(){this.fieldControl={controlId:this.controlId,label:this.label,showError:this.showError,errorTexts:this.errorTexts,required:this.effectiveRequired,disabled:this.effectiveDisabled,pending:this.pending,focus:e=>this.focus(e),setDescribedByIds:e=>{this.extraDescriptions().join(` `)!==e.join(` `)&&this.extraDescriptions.set(e)}},Ze(()=>{this.focusMonitor.monitor(this.nativeElement,!0).pipe(mf(this.destroyRef)).subscribe(r=>this.keyboardFocused.set(r===`keyboard`)),this.destroyRef.onDestroy(()=>this.focusMonitor.stopMonitoring(this.nativeElement));let e=this.nativeElement.closest(`form`),t=()=>{this.submittedByParent.set(!0),this.commitPendingValue()};e?.addEventListener(`submit`,t,{capture:!0}),this.destroyRef.onDestroy(()=>e?.removeEventListener(`submit`,t,{capture:!0}))}),(this.formGroupDirective??this.ngForm)?.ngSubmit.pipe(mf(f(Q))).subscribe(()=>{this.submittedByParent.set(!0),this.commitPendingValue()})}ngOnInit(){this.ngControl?.control?.events?.pipe(mf(this.destroyRef)).subscribe(()=>{this.controlVersion.update(e=>e+1)}),this.ngControl?.control?.valueChanges?.pipe(mf(this.destroyRef)).subscribe(()=>this.clearPendingEdit()),(this.formGroupDirective??this.ngForm)?.form.events.pipe(mf(this.destroyRef)).subscribe(e=>{e instanceof bl$1&&this.reset()})}focus(n){this.nativeElement.querySelector(`input:not(:disabled), textarea:not(:disabled), select:not(:disabled), button:not(:disabled)`)?.focus(n)}reset(){this.localTouched.set(!1),this.submittedByParent.set(!1)}markAsTouched(){this.localTouched.set(!0),this.commitPendingValue(`blur`),this.touch.emit()}onControlPointerDown(){this.isReadonly()&&this.keyboardFocused.set(!1)}commitPendingValue(n){}clearPendingEdit(){}static ɵfac=function(e){return new(e||i)};static ɵdir=Z({type:i,hostVars:7,hostBindings:function(e,t){e&1&&te(`pointerdown`,function(){return t.onControlPointerDown()}),e&2&&(Ba$1(`hidden`,t.hidden()),_e(`display`,t.hidden()?`none`:null),ae(`bx-readonly`,t.isReadonly())(`is-keyboard-focused`,t.keyboardFocused()))},inputs:{id:[1,`id`],label:[1,`label`],placeholder:[1,`placeholder`],tooltip:[1,`tooltip`],hint:[1,`hint`],hintEnd:[1,`hintEnd`],error:[1,`error`],ariaLabel:[1,`ariaLabel`],ariaLabelledBy:[1,`ariaLabelledBy`],ariaDescribedBy:[1,`ariaDescribedBy`],dataTestId:[1,`dataTestId`],name:[1,`name`],errors:[1,`errors`],invalid:[1,`invalid`],pending:[1,`pending`],touched:[1,`touched`],dirty:[1,`dirty`],disabled:[1,`disabled`],readonly:[1,`readonly`],readOnly:[1,`readOnly`],hidden:[1,`hidden`],required:[1,`required`],loading:[1,`loading`],disabledReasons:[1,`disabledReasons`],submitted:[1,`submitted`],errorMessages:[1,`errorMessages`],errorPriority:[1,`errorPriority`],errorPolicy:[1,`errorPolicy`],errorMode:[1,`errorMode`],appearance:[1,`appearance`],floatLabel:[1,`floatLabel`],hideRequiredMarker:[1,`hideRequiredMarker`],subscriptSizing:[1,`subscriptSizing`],tooltipOnTruncate:[1,`tooltipOnTruncate`]},outputs:{touch:`touch`}})};var Mn=class i extends We{draft=M(void 0);displayedChecked=g(()=>this.draft()??this.checked());checked=pn(!1);labelPosition=b(`after`);reset(){super.reset(),this.draft.set(void 0)}clearPendingEdit(){this.draft.set(void 0)}commitPendingValue(n){let e=this.draft();e===void 0||n===`blur`&&this.ngControl?.control?.updateOn===`submit`||(this.checked.set(e),this.draft.set(void 0))}onToggle(n){let e=n.target;if(this.disabled()||this.isReadonly()){e.checked=this.checked();return}let t=this.ngControl?.control?.updateOn;t===`blur`||t===`submit`?this.draft.set(e.checked):this.checked.set(e.checked)}onReadonlyClick(n){this.isReadonly()&&n.preventDefault()}onBlur(){this.markAsTouched()}static ɵfac=(()=>{let n;return function(t){return(n||(n=Wo$1(i)))(t||i)}})();static ɵdir=Z({type:i,inputs:{checked:[1,`checked`],labelPosition:[1,`labelPosition`]},outputs:{checked:`checkedChange`},features:[Cn$1]})};var ta=[`*`,[[`bx-error`]],[[`bx-hint`]]];var ia=[`*`,`bx-error`,`bx-hint`];var ra=[`ngProjectAs`,`bx-error`,5,[`bx-error`]];var oa=[`ngProjectAs`,`bx-hint`,5,[`bx-hint`]];function aa(i,n){i&1&&(_(0,`span`,5),X(1,`*`),D())}var Hr=class i extends Mn{indeterminate=pn(!1);clickAction=b(`check-indeterminate`);emissive=b(!0);onToggle(n){if(this.clickAction()===`noop`){n.target.checked=this.displayedChecked(),n.target.indeterminate=this.indeterminate();return}super.onToggle(n),this.clickAction()===`check`&&(n.target.indeterminate=this.indeterminate()),!this.disabled()&&!this.isReadonly()&&this.clickAction()===`check-indeterminate`&&this.indeterminate.set(!1)}static ɵfac=(()=>{let n;return function(t){return(n||(n=Wo$1(i)))(t||i)}})();static ɵcmp=G({type:i,selectors:[[`bx-checkbox`]],inputs:{indeterminate:[1,`indeterminate`],clickAction:[1,`clickAction`],emissive:[1,`emissive`]},outputs:{indeterminate:`indeterminateChange`},features:[Cn$1],ngContentSelectors:ia,decls:10,vars:35,consts:[[3,`control`,`inline`,`tooltip`,`loading`,`hint`,`hintEnd`,`subscriptSizing`,`forId`],[1,`bx-inline-wrapper`],[`type`,`checkbox`,1,`bx-visually-hidden`,3,`click`,`change`,`blur`,`id`,`disabled`,`required`,`checked`,`indeterminate`],[3,`checked`,`indeterminate`,`invalid`,`disabled`,`emissive`],[1,`bx-inline-label`],[`aria-hidden`,`true`,1,`bx-inline-required`]],template:function(e,t){e&1&&(Ae(ta),_(0,`bx-form-field`,0)(1,`label`,1)(2,`input`,2),te(`click`,function(o){return t.onReadonlyClick(o)})(`change`,function(o){return t.onToggle(o)})(`blur`,function(){return t.onBlur()}),D(),xe(3,`bx-checkbox-indicator`,3),_(4,`span`,4),pe(5),X(6),j(7,aa,2,0,`span`,5),D()(),pe(8,1,ra),pe(9,2,oa),D()),e&2&&(R(`control`,t.fieldControl)(`inline`,!0)(`tooltip`,t.tooltip())(`loading`,t.loading())(`hint`,t.hint())(`hintEnd`,t.hintEnd())(`subscriptSizing`,t.resolvedSubscriptSizing())(`forId`,t.controlId()),y(),ae(`is-disabled`,t.disabled())(`is-readonly`,t.isReadonly())(`is-keyboard-focused`,t.keyboardFocused())(`label-before`,t.labelPosition()===`before`),y(),R(`id`,t.controlId())(`disabled`,t.disabled())(`required`,t.effectiveRequired())(`checked`,t.displayedChecked())(`indeterminate`,t.indeterminate()),B(`name`,t.name()||null)(`data-testid`,t.dataTestId())(`aria-label`,t.ariaLabel())(`aria-labelledby`,t.ariaLabelledBy())(`aria-describedby`,t.describedBy())(`aria-invalid`,t.showError())(`aria-readonly`,t.isReadonly()),y(),R(`checked`,t.displayedChecked())(`indeterminate`,t.indeterminate())(`invalid`,t.showError())(`disabled`,t.disabled())(`emissive`,t.emissive()),y(3),un(``,t.resolvedLabel(),` `),y(),F(t.effectiveRequired()&&!t.resolvedHideRequiredMarker()?7:-1))},dependencies:[U,_n],styles:[`
[_nghost-%COMP%] {
  display: block;
}
.bx-visually-hidden[_ngcontent-%COMP%] {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
  border: 0;
}
.bx-inline-wrapper[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: var(--%NS%bx-space-2, 0.5rem);
  cursor: pointer;
  -webkit-user-select: none;
  user-select: none;
  min-height: 1.5rem;
  vertical-align: middle;
}
.bx-inline-wrapper.is-disabled[_ngcontent-%COMP%] {
  opacity: 0.5;
  cursor: not-allowed;
}
.bx-inline-wrapper.is-readonly[_ngcontent-%COMP%]:not(.is-disabled) {
  cursor: default;
}
.bx-inline-label[_ngcontent-%COMP%] {
  font-size: 0.875rem;
  color: var(--%NS%bx-text-primary);
  line-height: 1.5;
}
.bx-inline-required[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-danger);
  margin-left: 0.125rem;
}
.bx-inline-wrapper[_ngcontent-%COMP%]:not(.is-readonly)   input[_ngcontent-%COMP%]:focus-visible    ~ bx-checkbox-indicator[_ngcontent-%COMP%], 
.bx-inline-wrapper.is-readonly.is-keyboard-focused[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus-visible    ~ bx-checkbox-indicator[_ngcontent-%COMP%] {
  outline: 2px solid var(--%NS%bx-border-accent);
  outline-offset: 2px;
}
.bx-inline-wrapper.label-before[_ngcontent-%COMP%]   .bx-inline-label[_ngcontent-%COMP%] {
  order: -1;
}`]})};var Wr=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵcmp=G({type:i,selectors:[[`ng-component`]],hostAttrs:[`cdk-text-field-style-loader`,``],decls:0,vars:0,template:function(t,r){},styles:[`textarea.cdk-textarea-autosize {
  resize: none;
}

textarea.cdk-textarea-autosize-measuring {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: auto !important;
  overflow: hidden !important;
}

textarea.cdk-textarea-autosize-measuring-firefox {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: 0 !important;
}

@keyframes cdk-text-field-autofill-start { /*!*/ }
@keyframes cdk-text-field-autofill-end { /*!*/ }
.cdk-text-field-autofill-monitored:-webkit-autofill {
  animation: cdk-text-field-autofill-start 0s 1ms;
}

.cdk-text-field-autofill-monitored:not(:-webkit-autofill) {
  animation: cdk-text-field-autofill-end 0s 1ms;
}
`],encapsulation:2})}return i})();var sa={passive:!0};var da=(()=>{class i{_platform=f(Gt);_ngZone=f(re);_renderer=f(Nn$1).createRenderer(null,null);_styleLoader=f(Ms$1);_monitoredElements=/* @__PURE__ */ new Map;monitor(e){if(!this._platform.isBrowser)return xn;this._styleLoader.load(Wr);let t=tl$1(e),r=this._monitoredElements.get(t);if(r)return r.subject;let o=new Pe,l=`cdk-text-field-autofilled`,g=w=>{w.animationName===`cdk-text-field-autofill-start`&&!t.classList.contains(l)?(t.classList.add(l),this._ngZone.run(()=>o.next({target:w.target,isAutofilled:!0}))):w.animationName===`cdk-text-field-autofill-end`&&t.classList.contains(l)&&(t.classList.remove(l),this._ngZone.run(()=>o.next({target:w.target,isAutofilled:!1})))},y=this._ngZone.runOutsideAngular(()=>(t.classList.add(`cdk-text-field-autofill-monitored`),this._renderer.listen(t,`animationstart`,g,sa)));return this._monitoredElements.set(t,{subject:o,unlisten:y}),o}stopMonitoring(e){let t=tl$1(e),r=this._monitoredElements.get(t);r&&(r.unlisten(),r.subject.complete(),t.classList.remove(`cdk-text-field-autofill-monitored`),t.classList.remove(`cdk-text-field-autofilled`),this._monitoredElements.delete(t))}ngOnDestroy(){this._monitoredElements.forEach((e,t)=>this.stopMonitoring(t))}static ɵfac=function(t){return new(t||i)};static ɵprov=le({token:i,factory:i.ɵfac})}return i})();var xt=(()=>{class i{_elementRef=f(K);_autofillMonitor=f(da);cdkAutofill=new Ke$1;ngOnInit(){this._autofillMonitor.monitor(this._elementRef).subscribe(e=>this.cdkAutofill.emit(e))}ngOnDestroy(){this._autofillMonitor.stopMonitoring(this._elementRef)}static ɵfac=function(t){return new(t||i)};static ɵdir=Z({type:i,selectors:[[``,`cdkAutofill`,``]],outputs:{cdkAutofill:`cdkAutofill`}})}return i})();var jr=(()=>{class i{_elementRef=f(K);_platform=f(Gt);_ngZone=f(re);_renderer=f(kn$1);_resizeEvents=new Pe;_previousValue;_initialHeight;_destroyed=new Pe;_listenerCleanups;_minRows;_maxRows;_enabled=!0;_previousMinRows=-1;_textareaElement;get minRows(){return this._minRows}set minRows(e){this._minRows=Jj(e),this._setMinHeight()}get maxRows(){return this._maxRows}set maxRows(e){this._maxRows=Jj(e),this._setMaxHeight()}get enabled(){return this._enabled}set enabled(e){this._enabled!==e&&((this._enabled=e)?this.resizeToFitContent(!0):this.reset())}get placeholder(){return this._textareaElement.placeholder}set placeholder(e){this._cachedPlaceholderHeight=void 0,e?this._textareaElement.setAttribute(`placeholder`,e):this._textareaElement.removeAttribute(`placeholder`),this._cacheTextareaPlaceholderHeight()}_cachedLineHeight;_cachedPlaceholderHeight;_document=f(ue);_hasFocus=!1;_isViewInited=!1;constructor(){f(Ms$1).load(Wr),this._textareaElement=this._elementRef.nativeElement}_setMinHeight(){let e=this.minRows&&this._cachedLineHeight?`${this.minRows*this._cachedLineHeight}px`:null;e&&(this._textareaElement.style.minHeight=e)}_setMaxHeight(){let e=this.maxRows&&this._cachedLineHeight?`${this.maxRows*this._cachedLineHeight}px`:null;e&&(this._textareaElement.style.maxHeight=e)}ngAfterViewInit(){this._platform.isBrowser&&(this._initialHeight=this._textareaElement.style.height,this.resizeToFitContent(),this._ngZone.runOutsideAngular(()=>{this._listenerCleanups=[this._renderer.listen(`window`,`resize`,()=>this._resizeEvents.next()),this._renderer.listen(this._textareaElement,`focus`,this._handleFocusEvent),this._renderer.listen(this._textareaElement,`blur`,this._handleFocusEvent)],this._resizeEvents.pipe(ea$1(16)).subscribe(()=>{this._cachedLineHeight=this._cachedPlaceholderHeight=void 0,this.resizeToFitContent(!0)})}),this._isViewInited=!0,this.resizeToFitContent(!0))}ngOnDestroy(){this._listenerCleanups?.forEach(e=>e()),this._resizeEvents.complete(),this._destroyed.next(),this._destroyed.complete()}_cacheTextareaLineHeight(){if(this._cachedLineHeight)return;let e=this._textareaElement.cloneNode(!1),t=e.style;e.rows=1,t.position=`absolute`,t.visibility=`hidden`,t.border=`none`,t.padding=`0`,t.height=``,t.minHeight=``,t.maxHeight=``,t.top=t.bottom=t.left=t.right=`auto`,t.overflow=`hidden`,this._textareaElement.parentNode.appendChild(e),this._cachedLineHeight=e.clientHeight,e.remove(),this._setMinHeight(),this._setMaxHeight()}_measureScrollHeight(){let e=this._textareaElement,t=e.style.marginBottom||``,r=this._platform.FIREFOX,o=this._hasFocus,l=r?`cdk-textarea-autosize-measuring-firefox`:`cdk-textarea-autosize-measuring`;o&&(e.style.marginBottom=`${e.clientHeight}px`),e.classList.add(l);let g=e.scrollHeight-4;return e.classList.remove(l),o&&(e.style.marginBottom=t),g}_cacheTextareaPlaceholderHeight(){if(!this._isViewInited||this._cachedPlaceholderHeight!=null)return;if(!this.placeholder){this._cachedPlaceholderHeight=0;return}let e=this._textareaElement.value;this._textareaElement.value=this._textareaElement.placeholder,this._cachedPlaceholderHeight=this._measureScrollHeight(),this._textareaElement.value=e}_handleFocusEvent=e=>{this._hasFocus=e.type===`focus`};ngDoCheck(){this._platform.isBrowser&&this.resizeToFitContent()}resizeToFitContent(e=!1){if(!this._enabled||(this._cacheTextareaLineHeight(),this._cacheTextareaPlaceholderHeight(),!this._cachedLineHeight))return;let t=this._elementRef.nativeElement,r=t.value;if(!e&&this._minRows===this._previousMinRows&&r===this._previousValue)return;let o=this._measureScrollHeight(),l=Math.max(o,this._cachedPlaceholderHeight||0);t.style.height=`${l}px`,this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame<`u`?requestAnimationFrame(()=>this._scrollToCaretPosition(t)):setTimeout(()=>this._scrollToCaretPosition(t))}),this._previousValue=r,this._previousMinRows=this._minRows}reset(){this._initialHeight!==void 0&&(this._textareaElement.style.height=this._initialHeight)}_noopInputHandler(){}_scrollToCaretPosition(e){let{selectionStart:t,selectionEnd:r}=e;!this._destroyed.isStopped&&this._hasFocus&&e.setSelectionRange(t,r)}static ɵfac=function(t){return new(t||i)};static ɵdir=Z({type:i,selectors:[[`textarea`,`cdkTextareaAutosize`,``]],hostAttrs:[`rows`,`1`,1,`cdk-textarea-autosize`],hostBindings:function(t,r){t&1&&te(`input`,function(){return r._noopInputHandler()})},inputs:{minRows:[0,`cdkAutosizeMinRows`,`minRows`],maxRows:[0,`cdkAutosizeMaxRows`,`maxRows`],enabled:[2,`cdkTextareaAutosize`,`enabled`,A],placeholder:`placeholder`},exportAs:[`cdkTextareaAutosize`]})}return i})();var Xr=Symbol(`FIELD_TREE`);var ri=0;function ca(){return ri}function je(i,n){return(...e)=>{try{return ri=n,i(...e)}finally{ri=0}}}function ua(i){return!i}function $r(i){return i}function Ee(i){return Array.isArray(i)}function yt(i){return(typeof i==`object`||typeof i==`function`)&&i!=null}var Qe=Symbol();var Ot=Symbol();var Wn=class{predicates;fns=[];constructor(n){this.predicates=n}push(n){this.fns.push(Kr(this.predicates,n))}mergeIn(n){let e=this.predicates?n.fns.map(t=>Kr(this.predicates,t)):n.fns;this.fns.push(...e)}hasRules(){return this.fns.length>0}};var _t=class extends Wn{get defaultValue(){return!1}compute(n){return this.fns.some(e=>{let t=e(n);return t&&t!==Ot})}};var Tn=class i extends Wn{ignore;static ignoreNull(n){return new i(n,e=>e===null)}constructor(n,e){super(n),this.ignore=e}get defaultValue(){return[]}compute(n){return this.fns.reduce((e,t)=>{let r=t(n);return r===void 0||r===Ot?e:Ee(r)?[...e,...this.ignore?r.filter(o=>!this.ignore(o)):r]:this.ignore&&this.ignore(r)?e:[...e,r]},[])}};var oi=class extends Tn{constructor(n){super(n,void 0)}};var ai=class extends Wn{key;get defaultValue(){return this.key.reducer.getInitial()}constructor(n,e){super(n),this.key=e}compute(n){if(this.fns.length===0)return this.key.reducer.getInitial();let e=this.key.reducer.getInitial();for(let t=0;t<this.fns.length;t++){let r=this.fns[t](n);r!==Ot&&(e=this.key.reducer.reduce(e,r))}return e}};function Kr(i,n){return i.length===0?n:e=>{for(let t of i){let r=e.stateOf(t.path),o=W(r.structure.pathKeys).length-t.depth;for(let l=0;l<o;l++)r=r.structure.parent;if(!t.fn(r.context))return Ot}return n(e)}}var wn=class{predicates;hidden;disabledReasons;readonly;syncErrors;syncTreeErrors;asyncErrors;metadata=/* @__PURE__ */ new Map;constructor(n){this.predicates=n,this.hidden=new _t(n),this.disabledReasons=new oi(n),this.readonly=new _t(n),this.syncErrors=Tn.ignoreNull(n),this.syncTreeErrors=Tn.ignoreNull(n),this.asyncErrors=Tn.ignoreNull(n)}hasAnyLogic(){return this.hidden.hasRules()||this.disabledReasons.hasRules()||this.readonly.hasRules()||this.syncErrors.hasRules()||this.syncTreeErrors.hasRules()||this.asyncErrors.hasRules()||this.metadata.size>0}hasMetadata(n){return this.metadata.has(n)}hasMetadataKeys(){return this.metadata.size>0}getMetadataKeys(){return this.metadata.keys()}getMetadata(n){return this.metadata.has(n)||this.metadata.set(n,new ai(this.predicates,n)),this.metadata.get(n)}mergeIn(n){this.hidden.mergeIn(n.hidden),this.disabledReasons.mergeIn(n.disabledReasons),this.readonly.mergeIn(n.readonly),this.syncErrors.mergeIn(n.syncErrors),this.syncTreeErrors.mergeIn(n.syncTreeErrors),this.asyncErrors.mergeIn(n.asyncErrors);for(let e of n.getMetadataKeys()){let t=n.metadata.get(e);this.getMetadata(e).mergeIn(t)}}};var St=class{depth;constructor(n){this.depth=n}build(){return new Ct(this,[],0)}};var On=class i extends St{constructor(n){super(n)}current;all=[];addHiddenRule(n){this.getCurrent().addHiddenRule(n)}addDisabledReasonRule(n){this.getCurrent().addDisabledReasonRule(n)}addReadonlyRule(n){this.getCurrent().addReadonlyRule(n)}addSyncErrorRule(n){this.getCurrent().addSyncErrorRule(n)}addSyncTreeErrorRule(n){this.getCurrent().addSyncTreeErrorRule(n)}addAsyncErrorRule(n){this.getCurrent().addAsyncErrorRule(n)}addMetadataRule(n,e){this.getCurrent().addMetadataRule(n,e)}getChild(n){if(n===Qe){let e=this.getCurrent().children;e.size>(e.has(Qe)?1:0)&&(this.current=void 0)}return this.getCurrent().getChild(n)}hasLogic(n){return this===n?!0:this.all.some(({builder:e})=>e.hasLogic(n))}hasRules(){return this.all.length>0}anyChildHasLogic(){return this.all.some(({builder:n})=>n.anyChildHasLogic())}mergeIn(n,e){e?this.all.push({builder:n,predicate:{fn:je(e.fn,this.depth),path:e.path}}):this.all.push({builder:n}),this.current=void 0}getCurrent(){return this.current===void 0&&(this.current=new jn(this.depth),this.all.push({builder:this.current})),this.current}static newRoot(){return new i(0)}};var jn=class extends St{logic=new wn([]);children=/* @__PURE__ */ new Map;constructor(n){super(n)}addHiddenRule(n){this.logic.hidden.push(je(n,this.depth))}addDisabledReasonRule(n){this.logic.disabledReasons.push(je(n,this.depth))}addReadonlyRule(n){this.logic.readonly.push(je(n,this.depth))}addSyncErrorRule(n){this.logic.syncErrors.push(je(n,this.depth))}addSyncTreeErrorRule(n){this.logic.syncTreeErrors.push(je(n,this.depth))}addAsyncErrorRule(n){this.logic.asyncErrors.push(je(n,this.depth))}addMetadataRule(n,e){this.logic.getMetadata(n).push(je(e,this.depth))}getChild(n){return this.children.has(n)||this.children.set(n,new On(this.depth+1)),this.children.get(n)}hasLogic(n){return this===n}hasRules(){return this.logic.hasAnyLogic()||this.children.size>0}anyChildHasLogic(){for(let n of this.children.values())if(n.hasRules())return!0;return!1}};var Ct=class i{builder;predicates;depth;logic;constructor(n,e,t){this.builder=n,this.predicates=e,this.depth=t,this.logic=n?ba(n,e,t):new wn([])}getChild(n){let e=this.builder?Ur(this.builder,n):[];if(e.length===0)return new i(void 0,[],this.depth+1);if(e.length===1){let{builder:t,predicates:r}=e[0];return new i(t,[...this.predicates,...r.map(o=>si(o,this.depth))],this.depth+1)}else return new li(e.map(({builder:r,predicates:o})=>new i(r,[...this.predicates,...o.map(l=>si(l,this.depth))],this.depth+1)))}hasLogic(n){return this.builder?this.builder.hasLogic(n):!1}hasRules(){return this.builder?this.builder.hasRules():!1}anyChildHasLogic(){return this.builder?this.builder.anyChildHasLogic():!1}};var li=class i{all;logic;constructor(n){this.all=n,this.logic=new wn([]);for(let e of n)this.logic.mergeIn(e.logic)}getChild(n){return new i(this.all.flatMap(e=>e.getChild(n)))}hasLogic(n){return this.all.some(e=>e.hasLogic(n))}hasRules(){return this.all.some(n=>n.hasRules())}anyChildHasLogic(){return this.all.some(n=>n.anyChildHasLogic())}};function Ur(i,n){if(i instanceof On)return i.all.flatMap(({builder:e,predicate:t})=>{let r=Ur(e,n);return t?r.map(({builder:o,predicates:l})=>({builder:o,predicates:[...l,t]})):r});if(i instanceof jn)return[...n!==Qe&&i.children.has(Qe)?[{builder:i.getChild(Qe),predicates:[]}]:[],...i.children.has(n)?[{builder:i.getChild(n),predicates:[]}]:[]];throw new H(1909,!1)}function ba(i,n,e){let t=new wn(n);if(i instanceof On){let r=i.all.map(({builder:o,predicate:l})=>new Ct(o,l?[...n,si(l,e)]:n,e));for(let o of r)t.mergeIn(o.logic)}else if(i instanceof jn)t.mergeIn(i.logic);else throw new H(1909,!1);return t}function si(i,n){return s(r({},i),{depth:n})}var Yr=Symbol(`PATH`);var Ce=class i{keys;parent;keyInParent;root;children=/* @__PURE__ */ new Map;fieldPathProxy=new Proxy(this,pa);logicBuilder;constructor(n,e,t,r){this.keys=n,this.parent=t,this.keyInParent=r,this.root=e??this,t||(this.logicBuilder=On.newRoot())}get builder(){return this.logicBuilder?this.logicBuilder:this.parent.builder.getChild(this.keyInParent)}getChild(n){return this.children.has(n)||this.children.set(n,new i([...this.keys,n],this.root,this,n)),this.children.get(n)}mergeIn(n,e){let t=n.compile();this.builder.mergeIn(t.builder,e)}static unwrapFieldPath(n){return n[Yr]}static newRoot(){return new i([],void 0,void 0,void 0)}};var pa={get(i,n){return n===Yr?i:i.getChild(n).fieldPathProxy}};var vt;var Hn=/* @__PURE__ */ new Map;var Mt=class i{schemaFn;constructor(n){this.schemaFn=n}compile(){if(Hn.has(this))return Hn.get(this);let n=Ce.newRoot();Hn.set(this,n);let e=vt;try{vt=n,this.schemaFn(n.fieldPathProxy)}finally{vt=e}return n}static create(n){return n instanceof i?n:new i(n)}static rootCompile(n){try{return Hn.clear(),n===void 0?Ce.newRoot():n instanceof i?n.compile():new i(n).compile()}finally{Hn.clear()}}};function ga(i){return i instanceof Mt||typeof i==`function`}function Je(i){if(vt!==Ce.unwrapFieldPath(i).root)throw new H(1908,!1)}function Ne(i,n,e){return Je(i),Ce.unwrapFieldPath(i).builder.addMetadataRule(n,e),n}var Ve={list(){return{reduce:(i,n)=>n===void 0?i:[...i,n],getInitial:()=>[]}},min(){return{reduce:(i,n)=>i===void 0||n===void 0?i??n:n<i?n:i,getInitial:()=>{}}},max(){return{reduce:(i,n)=>i===void 0||n===void 0?i??n:n>i?n:i,getInitial:()=>{}}},or(){return{reduce:(i,n)=>i||n,getInitial:()=>!1}},and(){return{reduce:(i,n)=>i&&n,getInitial:()=>!0}},override:ma};function ma(i){return{reduce:(n,e)=>e,getInitial:()=>i?.()}}var kt=Symbol(`IS_ASYNC_VALIDATION_RESOURCE`);var $n=class{reducer;create;brand;[kt];constructor(n,e){this.reducer=n,this.create=e}};function Me(i){return new $n(i??Ve.override())}function Qr(i,n){return new $n(n??Ve.override(),i)}function xi(){return Me()}var vi=Me(Ve.or());var yi=xi();var _i=Me(Ve.max());var Si=xi();var Ci=Me(Ve.min());var Mi=Me(Ve.max());var Jr=Me(Ve.min());var eo=Me(Ve.list());function Se(i,n){if(i===n)return!0;if(!i||!n||i.length!==n.length)return!1;for(let e=0;e<i.length;e++)if(!Object.is(i[e],n[e]))return!1;return!0}function ha(i){return i.errors().length>0?`invalid`:i.pending()?`unknown`:`valid`}var di=class{node;constructor(n){this.node=n}rawSyncTreeErrors=g(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.syncTreeErrors.compute(this.node.context),...this.node.structure.parent?.validationState.rawSyncTreeErrors()??[]],{equal:Se});syncErrors=g(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.syncErrors.compute(this.node.context),...this.syncTreeErrors(),...fa(this.node.submitState.submissionErrors())],{equal:Se});syncValid=g(()=>this.shouldSkipValidation()?!0:this.node.structure.reduceChildren(this.syncErrors().length===0,(n,e)=>e&&n.validationState.syncValid(),ua));syncTreeErrors=g(()=>this.rawSyncTreeErrors().filter(n=>n.fieldTree===this.node.fieldTree),{equal:Se});rawAsyncErrors=g(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.asyncErrors.compute(this.node.context),...this.node.structure.parent?.validationState.rawAsyncErrors()??[]],{equal:Se});asyncErrors=g(()=>this.shouldSkipValidation()?[]:this.rawAsyncErrors().filter(n=>n===`pending`||n.fieldTree===this.node.fieldTree),{equal:Se});parseErrors=g(()=>this.node.formFieldBindings().flatMap(n=>n.parseErrors()),{equal:Se});errors=g(()=>[...this.parseErrors(),...this.syncErrors(),...this.asyncErrors().filter(n=>n!==`pending`)],{equal:Se});errorSummary=g(()=>{let n=this.node.structure.reduceChildren(this.errors(),(e,t)=>[...t,...e.errorSummary()]);return W(()=>n.sort(xa)),n},{equal:Se});pending=g(()=>this.node.structure.reduceChildren(this.asyncErrors().includes(`pending`),(n,e)=>e||n.validationState.pending()));status=g(()=>{if(this.shouldSkipValidation())return`valid`;let n=ha(this);return this.node.structure.reduceChildren(n,(e,t)=>t===`invalid`||e.validationState.status()===`invalid`?`invalid`:t===`unknown`||e.validationState.status()===`unknown`?`unknown`:`valid`,e=>e===`invalid`)});valid=g(()=>this.status()===`valid`);invalid=g(()=>this.status()===`invalid`);shouldSkipValidation=g(()=>this.node.hidden()||this.node.disabled()||this.node.readonly()||this.node.structure.isOrphaned())};function fa(i){return i===void 0?[]:Ee(i)?i:[i]}function Zn(i,n){if(Ee(i))for(let e of i)e.fieldTree??=n;else i&&(i.fieldTree??=n);return i}function Zr(i){return i.formField?i.formField.element:i.fieldTree().formFieldBindings().reduce((n,e)=>!n||!e.element?n??e.element:n.compareDocumentPosition(e.element)&Node.DOCUMENT_POSITION_PRECEDING?e.element:n,void 0)}function xa(i,n){let e=Zr(i),t=Zr(n);return e===t?0:e===void 0||t===void 0?e===void 0?1:-1:e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_PRECEDING?1:-1}var Nt=Me();var ci=class{node;cache=/* @__PURE__ */ new WeakMap;constructor(n){this.node=n,this.fieldTreeOf=this.fieldTreeOf.bind(this),this.stateOf=this.stateOf.bind(this)}resolve(n){if(!this.cache.has(n)){let e=g(()=>{let t=Ce.unwrapFieldPath(n),r=this.node,o=ca();for(;o>0||!r.structure.logic.hasLogic(t.root.builder);)if(o--,r=r.structure.parent,r===void 0)throw new H(1900,!1);for(let l of t.keys)if(r=r.structure.getChild(l),r===void 0)throw new H(1901,!1);return r.fieldTree});this.cache.set(n,e)}return this.cache.get(n)()}get fieldTree(){return this.node.fieldProxy}get state(){return this.node}get value(){return this.node.structure.value}get key(){return this.node.structure.keyInParent}get pathKeys(){return this.node.structure.pathKeys}index=g(()=>{let n=this.key();if(!Ee(W(this.node.structure.parent.value)))throw new H(1906,!1);return Number(n)});fieldTreeOf(n){return this.resolve(n)}stateOf(n){return this.resolve(n)()}valueOf=n=>{let e=this.resolve(n)().value();if(e instanceof Fm)throw new H(1907,!1);return e}};var ui=class{node;metadata=/* @__PURE__ */ new Map;constructor(n){this.node=n}runMetadataCreateLifecycle(){if(!this.node.logicNode.logic.hasMetadataKeys())return;let n=Xv();n&&Xo$1(!1);try{W(()=>gn(this.node.structure.injector,()=>{for(let e of this.node.logicNode.logic.getMetadataKeys())if(e.create){let t=this.node.logicNode.logic.getMetadata(e),r=e.create(this.node,g(()=>t.compute(this.node.context)));this.metadata.set(e,r)}}))}finally{n&&Xo$1(!0)}}get(n){if(this.has(n)&&!this.metadata.has(n)){if(n.create)throw new H(1912,!1);let e=this.node.logicNode.logic.getMetadata(n);this.metadata.set(n,g(()=>e.compute(this.node.context)))}return this.metadata.get(n)}has(n){return this.node.logicNode.logic.hasMetadata(n)}};var va={get(i,n,e){if(n===Xr)return!0;let t=i(),r=t.structure.getChild(n);if(r!==void 0)return r.fieldTree;let o=W(t.value);if(Ee(o)){if(n===`length`)return t.value().length;if(n===Symbol.iterator)return()=>(t.value(),Array.prototype[Symbol.iterator].apply(t.fieldTree))}if(yt(o)&&n===Symbol.iterator)return function*(){for(let l in e)yield[l,e[l]]}},getOwnPropertyDescriptor(i,n){let e=W(i().value),t=Reflect.getOwnPropertyDescriptor(e,n);return t&&!t.configurable&&(t.configurable=!0),t},ownKeys(i){let n=W(i().value);return typeof n==`object`&&n!==null?Reflect.ownKeys(n):[]}};function ya(i,n){let e=g(()=>i()[n()]);return e[Mt$1]=i[Mt$1],e.set=t=>{Object.is(W(e),t)||i.update(r=>_a(r,t,n()))},e.update=t=>{e.set(t(W(e)))},e.asReadonly=()=>e,e}function _a(i,n,e){if(Ee(i)){let t=[...i];return t[e]=n,t}else return s(r({},i),{[e]:n})}var Nn=Symbol(``);var no=g(()=>!1);var Tt=class{logic;node;createChildNode;identitySymbol=Symbol();_injector=void 0;_anyChildHasLogic;get injector(){return this._injector??=Ie.create({providers:[],parent:this.fieldManager.injector}),this._injector}constructor(n,e,t){this.logic=n,this.node=e,this.createChildNode=t}children(){this.ensureChildrenMap();let n=this.childrenMap();return n===void 0?[]:Array.from(n.byPropertyKey.values()).map(e=>W(e.reader))}materializedChildren(){let n=this.childrenMap();return n===void 0?[]:Array.from(n.byPropertyKey.values()).map(e=>e.node)}_areChildrenMaterialized(){return W(this.childrenMap)!==void 0}ensureChildrenMap(){this._areChildrenMaterialized()||W(()=>{this.childrenMap.update(n=>this.computeChildrenMap(this.value(),n,!0))})}getChild(n){this.ensureChildrenMap();let e=n.toString(),t=W(this.childrenMap)?.byPropertyKey.get(e)?.reader;return t||(t=this.createReader(e)),t()}reduceChildren(n,e,t){let r=this.childrenMap();if(!r)return n;let o=n;for(let l of r.byPropertyKey.values()){if(t?.(o))break;o=e(W(l.reader),o)}return o}destroy(){this.injector.destroy()}createKeyOrOrphanSignals(n,e,t){if(n===`root`)return{keyInParent:to,isOrphaned:no};let r=this.parent,o=t,l=g(()=>{if(r.structure.isOrphaned())return Nn;let w=r.structure.childrenMap();if(!w)return Nn;let E=w.byPropertyKey.get(o);if(E&&E.node===this.node)return o;if(e===void 0)return Nn;for(let[V,H]of w.byPropertyKey)if(H.node===this.node)return o=V;return Nn}),g$1=g(()=>l()===Nn);return{keyInParent:g(()=>{let w=l();if(w===Nn)throw e===void 0?new H(-1902,!1):new H(1904,!1);return w}),isOrphaned:g$1}}createChildrenMap(){return Va$1({source:this.value,computation:(n,e)=>this.computeChildrenMap(n,e?.value,!1)})}computeChildrenMap(n,e,t){if(!yt(n)||!t&&e===void 0&&!(this._anyChildHasLogic??=this.logic.anyChildHasLogic()))return;e??={byPropertyKey:/* @__PURE__ */ new Map};let r$2,o=Ee(n);e!==void 0&&(o?r$2=Ca(e,n,this.identitySymbol):r$2=Ma(e,n));for(let l of Object.keys(n)){let g,y=n[l];if(y===void 0){e.byPropertyKey.has(l)&&(r$2??=r({},e),r$2.byPropertyKey.delete(l));continue}o&&yt(y)&&!Ee(y)&&(g=y[this.identitySymbol]??=Symbol(``));let w;g&&(e.byTrackingKey?.has(g)||(r$2??=r({},e),r$2.byTrackingKey??=/* @__PURE__ */ new Map,r$2.byTrackingKey.set(g,this.createChildNode(l,g,o))),w=(r$2??e).byTrackingKey.get(g));let E=e.byPropertyKey.get(l);E===void 0?(r$2??=r({},e),r$2.byPropertyKey.set(l,{reader:this.createReader(l),node:w??this.createChildNode(l,g,o)})):w&&w!==E.node&&(r$2??=r({},e),E.node=w)}return r$2??e}createReader(n){return g(()=>this.childrenMap()?.byPropertyKey.get(n)?.node)}};var bi=class extends Tt{fieldManager;value;get parent(){}get root(){return this.node}get pathKeys(){return Sa}get keyInParent(){return to}isOrphaned=no;childrenMap;constructor(n,e,t,r,o){super(e,n,o),this.fieldManager=t,this.value=r,this.childrenMap=this.createChildrenMap()}};var pi=class extends Tt{logic;parent;root;pathKeys;keyInParent;value;childrenMap;isOrphaned;get fieldManager(){return this.root.structure.fieldManager}constructor(n,e,t,r,o,l){super(e,n,l),this.logic=e,this.parent=t,this.root=this.parent.structure.root;let g$2=this.createKeyOrOrphanSignals(`child`,r,o);this.isOrphaned=g$2.isOrphaned,this.keyInParent=g$2.keyInParent,this.pathKeys=g(()=>[...t.structure.pathKeys(),this.keyInParent()]),this.value=ya(this.parent.structure.value,this.keyInParent),this.childrenMap=this.createChildrenMap(),this.fieldManager.structures.add(this)}};var Sa=g(()=>[]);var to=g(()=>{throw new H(1905,!1)});function Ca(i,n,e){let t,r$3=new Set(i.byPropertyKey.keys()),o=i.byTrackingKey&&new Set(i.byTrackingKey.keys());for(let l=0;l<n.length;l++){let g=n[l];r$3.delete(l.toString()),o&&yt(g)&&Object.hasOwn(g,e)&&o.delete(g[e])}if(r$3.size>0){t??=r({},i);for(let l of r$3)t.byPropertyKey.delete(l)}if(o&&o.size>0){t??=r({},i);for(let l of o)t.byTrackingKey.delete(l)}return t}function Ma(i,n){let e;for(let t of i.byPropertyKey.keys())Object.hasOwn(n,t)||(e??=r({},i),e.byPropertyKey.delete(t));return e}var gi=class{node;selfSubmitting=M(!1);submissionErrors;constructor(n){this.node=n,this.submissionErrors=Va$1({source:this.node.structure.value,computation:()=>[]})}submitting=g(()=>this.selfSubmitting()||(this.node.structure.parent?.submitting()??!1))};var Kn=class{structure;validationState;metadataState;nodeState;submitState;fieldAdapter;controlValue;_context=void 0;get context(){return this._context??=new ci(this)}fieldProxy=new Proxy(()=>this,va);pathNode;constructor(n){this.pathNode=n.pathNode,this.fieldAdapter=n.fieldAdapter,this.structure=this.fieldAdapter.createStructure(this,n),this.validationState=this.fieldAdapter.createValidationState(this,n),this.nodeState=this.fieldAdapter.createNodeState(this,n),this.metadataState=new ui(this),this.submitState=new gi(this),this.controlValue=this.controlValueSignal(),this.metadataState.runMetadataCreateLifecycle()}focusBoundControl(n){this.getBindingForFocus()?.focus(n)}getBindingForFocus(){return this.formFieldBindings().filter(e=>e.focus!==void 0).reduce(Gr,void 0)||this.structure.children().map(e=>e.getBindingForFocus()).reduce(Gr,void 0)}pendingSync=Va$1({source:()=>this.value(),computation:(n,e)=>{e?.value?.abort()}});get fieldTree(){return this.fieldProxy}get logicNode(){return this.structure.logic}get value(){return this.structure.value}get keyInParent(){return this.structure.keyInParent}get errors(){return this.validationState.errors}get parseErrors(){return this.validationState.parseErrors}get errorSummary(){return this.validationState.errorSummary}get pending(){return this.validationState.pending}get valid(){return this.validationState.valid}get invalid(){return this.validationState.invalid}get dirty(){return this.nodeState.dirty}get touched(){return this.nodeState.touched}get disabled(){return this.nodeState.disabled}get disabledReasons(){return this.nodeState.disabledReasons}get hidden(){return this.nodeState.hidden}get readonly(){return this.nodeState.readonly}get formFieldBindings(){return this.nodeState.formFieldBindings}get submitting(){return this.submitState.submitting}get name(){return this.nodeState.name}get max(){let n=this.metadata(Si)?.();return n?this.metadata(n):void 0}get maxLength(){return this.metadata(Jr)}get min(){let n=this.metadata(yi)?.();return n?this.metadata(n):void 0}get minLength(){return this.metadata(Mi)}get pattern(){return this.metadata(eo)??Na}get required(){return this.metadata(vi)??Ta}metadata(n){return this.metadataState.get(n)}getError(n){return this.errors().find(e=>e.kind===n)}hasMetadata(n){return this.metadataState.has(n)}markAsTouched(n){this.structure.isOrphaned()||W(()=>{this.markAsTouchedInternal(n),this.flushSync()})}markAsTouchedInternal(n){if(!this.structure.isOrphaned()&&!this.validationState.shouldSkipValidation()&&(this.nodeState.markAsTouched(),!n?.skipDescendants))for(let e of this.structure.children())e.markAsTouchedInternal()}markAsDirty(){this.nodeState.markAsDirty()}markAsPristine(){this.nodeState.markAsPristine()}markAsUntouched(){this.nodeState.markAsUntouched()}reset(n){W(()=>this._reset(n))}_reset(n){this.pendingSync()?.abort(),n!==void 0&&this.value.set(n),this.controlValue.rawSet(this.value()),this.nodeState.markAsUntouched(),this.nodeState.markAsPristine();for(let e of this.formFieldBindings())e.reset();for(let e of this.structure.materializedChildren())e._reset()}reloadValidation(){W(()=>this._reloadValidation())}_reloadValidation(){let n=this.logicNode.logic.getMetadataKeys();for(let e of n)e[kt]&&this.metadata(e).reload?.();for(let e of this.structure.children())e._reloadValidation()}controlValueSignal(){let n=Va$1(this.value);n.rawSet=n.set,n.set=t=>{n.rawSet(t),this.markAsDirty(),this.debounceSync()};let e=n.update;return n.update=t=>{e(t),this.markAsDirty(),this.debounceSync()},n}sync(){this.value.set(this.controlValue())}flushSync(){let n=this.pendingSync();n&&!n.signal.aborted&&(n.abort(),this.sync())}async debounceSync(){let n=W(()=>(this.pendingSync()?.abort(),this.nodeState.debouncer()));if(n){let e=new AbortController,t=n(e.signal);if(t&&(this.pendingSync.set(e),await t,e.signal.aborted))return}this.structure.isOrphaned()||this.sync()}static newRoot(n,e,t,r){return r.newRoot(n,e,t,r)}createStructure(n){return n.kind===`root`?new bi(this,n.logic,n.fieldManager,n.value,this.newChild.bind(this)):new pi(this,n.logic,n.parent,n.identityInParent,n.initialKeyInParent,this.newChild.bind(this))}newChild(n,e,t){let r,o;return t?(r=this.pathNode.getChild(Qe),o=this.structure.logic.getChild(Qe)):(r=this.pathNode.getChild(n),o=this.structure.logic.getChild(n)),this.fieldAdapter.newChild({kind:`child`,parent:this,pathNode:r,logic:o,initialKeyInParent:n,identityInParent:e,fieldAdapter:this.fieldAdapter})}};var Na=g(()=>[]);var Ta=g(()=>!1);function Gr(i,n){return i?n&&i.element.compareDocumentPosition(n.element)&Node.DOCUMENT_POSITION_PRECEDING?n:i:n}var mi=class{node;selfTouched=M(!1);selfDirty=M(!1);markAsTouched(){this.selfTouched.set(!0)}markAsDirty(){this.selfDirty.set(!0)}markAsPristine(){this.selfDirty.set(!1)}markAsUntouched(){this.selfTouched.set(!1)}formFieldBindings=M([]);constructor(n){this.node=n}dirty=g(()=>{let n=this.selfDirty()&&!this.isNonInteractive();return this.node.structure.reduceChildren(n,(e,t)=>t||e.nodeState.dirty(),$r)});touched=g(()=>{let n=this.selfTouched()&&!this.isNonInteractive();return this.node.structure.reduceChildren(n,(e,t)=>t||e.nodeState.touched(),$r)});disabledReasons=g(()=>[...this.node.structure.parent?.nodeState.disabledReasons()??[],...this.node.logicNode.logic.disabledReasons.compute(this.node.context)],{equal:Se});disabled=g(()=>!!this.disabledReasons().length);readonly=g(()=>(this.node.structure.parent?.nodeState.readonly()||this.node.logicNode.logic.readonly.compute(this.node.context))??!1);hidden=g(()=>(this.node.structure.parent?.nodeState.hidden()||this.node.logicNode.logic.hidden.compute(this.node.context))??!1);name=g(()=>{let n=this.node.structure.parent;return n?`${n.name()}.${this.node.structure.keyInParent()}`:this.node.structure.fieldManager.rootName});debouncer=g(()=>{if(this.node.logicNode.logic.hasMetadata(Nt)){let e=this.node.logicNode.logic.getMetadata(Nt).compute(this.node.context);if(e)return t=>e(this.node.context,t)}return this.node.structure.parent?.nodeState.debouncer?.()});isNonInteractive=g(()=>this.hidden()||this.disabled()||this.readonly())};var hi=class{newRoot(n,e,t,r){return new Kn({kind:`root`,fieldManager:n,value:e,pathNode:t,logic:t.builder.build(),fieldAdapter:r})}newChild(n){return new Kn(n)}createNodeState(n){return new mi(n)}createValidationState(n){return new di(n)}createStructure(n,e){return n.createStructure(e)}};var fi=class{injector;rootName;submitOptions;constructor(n,e,t){this.injector=n,this.rootName=e??`${this.injector.get(no$1)}.form${wa++}`,this.submitOptions=t}structures=/* @__PURE__ */ new Set;createFieldManagementEffect(n){ce(()=>{let e=/* @__PURE__ */ new Set;this.markStructuresLive(n,e);for(let t of this.structures)e.has(t)||(this.structures.delete(t),W(()=>t.destroy()))},{injector:this.injector})}markStructuresLive(n,e){e.add(n);for(let t of n.children())this.markStructuresLive(t.structure,e)}};var wa=0;var io=new N(``);function Oa(i){let n,e,t;return i.length===3?[n,e,t]=i:i.length===2?ga(i[1])?[n,e]=i:[n,t]=i:[n]=i,[n,e,t]}function ka(...i){let[n,e,t]=Oa(i),r=t?.injector??f(Ie),o=gn(r,()=>Mt.rootCompile(e)),l=new fi(r,t?.name,t?.submission),g=t?.adapter??new hi,y=Kn.newRoot(l,n,o,g);l.createFieldManagementEffect(y.structure);let{experimentalWebMcpTool:w}=t??{};if(w){let E=gn(r,()=>f(io,{optional:!0}));E&&gn(r,()=>E(y.fieldTree,{name:w.name,description:w.description,annotations:w.annotations}))}return y.fieldTree}async function ro(i,n){let e=W(i);if(W(e.submitState.submitting))return!1;let t=n===void 0?e.structure.root.fieldProxy:i,r={root:e.structure.root.fieldProxy,submitted:i};n=typeof n==`function`?{action:n}:n??e.structure.fieldManager.submitOptions;let o=n?.action;if(!o)throw new H(1915,!1);e.markAsTouched();let l=n?.onInvalid,g=Pa(e,n?.ignoreValidators);try{if(g){e.submitState.selfSubmitting.set(!0);let y=await W(()=>o?.(t,r));return y&&Da(e,y),!y||Ee(y)&&y.length===0}else W(()=>l?.(t,r));return!1}finally{e.submitState.selfSubmitting.set(!1)}}function Pa(i,n){switch(n){case`all`:return!0;case`none`:return W(i.valid);default:return!W(i.invalid)}}function Da(i,n){Ee(n)||(n=[n]);let e=/* @__PURE__ */ new Map;for(let t of n){let r=Zn(t,i.fieldTree),o=r.fieldTree(),l=e.get(o);l||(l=[],e.set(o,l)),l.push(r)}for(let[t,r]of e)t.submitState.submissionErrors.set(r)}var wt=class{kind=`compat`;control;fieldTree;context;message;constructor({context:n,kind:e,control:t}){this.context=n,this.kind=e,this.control=t}};function oo(i){if(i.length===0)return null;let n={};for(let e of i)n[e.kind]=e instanceof wt?e.context:e;return n}function ao(i,n){return i===null?[]:Object.entries(i).map(([e,t])=>new wt({context:t,kind:e,control:n}))}var Ia=new N(``);function ap(i,n){Je(i);let e=Ce.unwrapFieldPath(i),t;typeof n==`function`||typeof n==`string`?t=n:t=n?.when,e.builder.addDisabledReasonRule(r=>{let o=!0;return typeof t==`string`?o=t:t&&(o=t(r)),typeof o==`string`?{fieldTree:r.fieldTree,message:o}:o?{fieldTree:r.fieldTree}:void 0})}function lp(i,n){Je(i);let e=Ce.unwrapFieldPath(i),t=typeof n==`function`?n:n?.when??(()=>!0);e.builder.addReadonlyRule(t)}function Ea(i){let n=i;return typeof n.length==`number`?n.length:n.size}function Re(i,n){return i instanceof Function?i(n):i}function Ii(i){return typeof i==`number`?isNaN(i):i===``||i===!1||i==null}function lo(i){return i===void 0?[]:Array.isArray(i)?i:[i]}function Gn(i,n){Je(i),Ce.unwrapFieldPath(i).builder.addSyncErrorRule(t=>Zn(n(t),t.fieldTree))}function Ra(i){return new Ni(i)}function La(i,n){return new Ti(i,n)}function Aa(i,n){return new wi(i,n)}function Fa(i,n){return new Oi(i,n)}function Va(i){return new ki(i)}var Ke=class{__brand=void 0;kind=``;fieldTree;message;constructor(n){n&&Object.assign(this,n)}};var Ni=class extends Ke{kind=`required`};var Ti=class extends Ke{min;kind=`min`;constructor(n,e){super(e),this.min=n}};var wi=class extends Ke{max;kind=`max`;constructor(n,e){super(e),this.max=n}};var Oi=class extends Ke{minLength;kind=`minLength`;constructor(n,e){super(e),this.minLength=n}};var ki=class extends Ke{kind=`email`};var Pt=class extends Ke{kind=`parse`};var za=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;function sp(i,n){Gn(i,e=>{if(!(n?.when&&!n.when(e))&&!Ii(e.value())&&!za.test(e.value()))return n?.error?Re(n.error,e):Va({message:Re(n?.message,e)})})}function dp(i,n,e){let t=Me();Ne(i,t,r=>{if(!(e?.when&&!e.when(r)))return typeof n==`function`?n(r):n}),Ne(i,Ci,({state:r})=>r.metadata(t)()),Ne(i,Si,()=>Ci),Gn(i,r=>{let o=r.value();if(o===null||Number.isNaN(o))return;let l=r.state.metadata(t)();if(!(l===void 0||Number.isNaN(l))&&o>l)return e?.error?Re(e.error,r):Aa(l,{message:Re(e?.message,r)})})}function cp(i,n,e){let t=Me();Ne(i,t,r=>{if(!(e?.when&&!e.when(r)))return typeof n==`function`?n(r):n}),Ne(i,_i,({state:r})=>r.metadata(t)()),Ne(i,yi,()=>_i),Gn(i,r=>{let o=r.value();if(o===null||Number.isNaN(o))return;let l=r.state.metadata(t)();if(!(l===void 0||Number.isNaN(l))&&o<l)return e?.error?Re(e.error,r):La(l,{message:Re(e?.message,r)})})}function up(i,n,e){let t=Ne(i,Me(),r=>{if(!(e?.when&&!e.when(r)))return typeof n==`number`?n:n(r)});Ne(i,Mi,({state:r})=>r.metadata(t)()),Gn(i,r=>{if(Ii(r.value()))return;let o=r.state.metadata(t)();if(o!==void 0&&Ea(r.value())<o)return e?.error?Re(e.error,r):Fa(o,{message:Re(e?.message,r)})})}function bp(i,n){let e=Ne(i,Me(),t=>n?.when?n.when(t):!0);Ne(i,vi,({state:t})=>t.metadata(e)()),Gn(i,t=>{if(t.state.metadata(e)()&&Ii(t.value()))return n?.error?Re(n.error,t):Ra({message:Re(n?.message,t)})})}function pp(i,n){Je(i);let e=Ce.unwrapFieldPath(i),t=Qr((r,o)=>{if(n.debounce!==void 0){let l=uZ(()=>o(),n.debounce),g$3=g(()=>ME(l));return n.factory(g$3)}return n.factory(o)});t[kt]=!0,Ne(i,t,r=>{let l=r.stateOf(i).validationState;if(!(l.shouldSkipValidation()||!l.syncValid())&&!(n.when&&!n.when(r)))return n.params(r)}),e.builder.addAsyncErrorRule(r=>{let o=r.state.metadata(t),l;switch(o.status()){case`idle`:return;case`loading`:case`reloading`:return`pending`;case`resolved`:case`local`:return o.hasValue()?(l=n.onSuccess(o.value(),r),Zn(l,r.fieldTree)):void 0;case`error`:return l=n.onError(o.error(),r),Zn(l,r.fieldTree)}})}function gp(i,n){Je(i);let e=Ce.unwrapFieldPath(i),t=Ba(n);e.builder.addMetadataRule(Nt,()=>t)}function Ba(i){return typeof i==`function`?i:i===`blur`?Ha():i>0?qa(i):Wa}function qa(i){return(n,e)=>new Promise(t=>{let r,o=()=>{clearTimeout(r),t()};r=setTimeout(()=>{e.removeEventListener(`abort`,o),t()},i),e.addEventListener(`abort`,o,{once:!0})})}function Ha(){return(i,n)=>new Promise(e=>{n.addEventListener(`abort`,()=>e(),{once:!0})})}function Wa(){}function bo(i,n,e){let t=Va$1({source:i,computation:()=>[],equal:Se}),r=l=>{let g=e(l);t.set(lo(g.error)),g.value!==void 0&&n(g.value),t.set(lo(g.error))},o=()=>{t.set([])};return{errors:t.asReadonly(),setRawValue:r,reset:o}}function po(i,n){let{parse:e,format:t}=n,r=bo(i,i.set,e),o=Va$1(()=>t(i())),l=o;l.parseErrors=r.errors;let g=l.set.bind(l),y=f($F,{self:!0,optional:!0});return y&&(y.setParseErrors(r.errors),y.onReset=w=>{r.reset();let E=w!==void 0?w:i();g(t(E))}),l.set=w=>{r.setRawValue(w),g(w)},l.update=w=>{l.set(w(o()))},l}var Pi=class{field;constructor(n){this.field=n}control=this;get value(){return this.field().controlValue()}get valid(){return this.field().valid()}get invalid(){return this.field().invalid()}get pending(){return this.field().pending()}get disabled(){return this.field().disabled()}get enabled(){return!this.field().disabled()}get errors(){return oo(this.field().errors())}get pristine(){return!this.field().dirty()}get dirty(){return this.field().dirty()}get touched(){return this.field().touched()}get untouched(){return!this.field().touched()}get status(){if(this.field().disabled())return`DISABLED`;if(this.field().valid())return`VALID`;if(this.field().invalid())return`INVALID`;if(this.field().pending())return`PENDING`;throw new H(1910,!1)}valueAccessor=null;hasValidator(n){return n===ml$1.required?this.field().required():!1}updateValueAndValidity(){}};var Di={disabled:`disabled`,disabledReasons:`disabledReasons`,dirty:`dirty`,errors:`errors`,hidden:`hidden`,invalid:`invalid`,max:`max`,maxLength:`maxLength`,min:`min`,minLength:`minLength`,name:`name`,pattern:`pattern`,pending:`pending`,readonly:`readonly`,required:`required`,touched:`touched`};var ja=(()=>{let i={};for(let n of Object.keys(Di))i[Di[n]]=n;return i})();function Ei(i,n){return i[ja[n]]?.()}var Ri=Object.values(Di);function Dt(){return{}}function $e(i,n,e){return Object.is(i[n],e)?!1:(i[n]=e,!0)}function $a(i,n,e){let t;if(go(i)&&e.isBadInput(i))return{error:new Pt};switch(i.type){case`checkbox`:return{value:i.checked};case`number`:case`range`:case`datetime-local`:if(t=W(n),typeof t==`number`||t===null)return{value:i.value===``?null:i.valueAsNumber};break;case`date`:case`month`:case`time`:case`week`:if(t=W(n),t===null||t instanceof Date)return{value:i.valueAsDate};if(typeof t==`number`)return{value:i.valueAsNumber}}if(i.tagName===`INPUT`&&i.type===`text`&&(t??=W(n),typeof t==`number`||t===null)){if(i.value===``)return{value:null};let r=Number(i.value);return Number.isNaN(r)?{error:new Pt}:{value:r}}return{value:i.value}}function so(i,n){switch(i.type){case`checkbox`:i.checked=n;return;case`radio`:i.checked=n===i.value;return;case`number`:case`range`:case`datetime-local`:if(typeof n==`number`){co(i,n);return}else if(n===null){i.value=``;return}break;case`date`:case`month`:case`time`:case`week`:if(n===null||n instanceof Date){i.valueAsDate=n;return}else if(typeof n==`number`){co(i,n);return}}if(i.tagName===`INPUT`&&i.type===`text`){if(typeof n==`number`){i.value=isNaN(n)?``:String(n);return}if(n===null){i.value=``;return}}i.value=n}function co(i,n){isNaN(n)?i.value=``:i.valueAsNumber=n}function go(i){return i.tagName===`INPUT`}function Ka(i){return i.type===`date`||i.type===`datetime-local`||i.type===`month`||i.type===`time`||i.type===`week`}function Za(i,n){let e=i.getUTCFullYear(),t=String(i.getUTCMonth()+1).padStart(2,`0`);if(n===`month`)return`${e}-${t}`;return`${e}-${t}-${String(i.getUTCDate()).padStart(2,`0`)}`}function mo(i,n,e){return n instanceof Date&&(i===`min`||i===`max`)&&(e===`date`||e===`month`)?Za(n,e):n}function Ga(i,n){i.listenToCustomControlModel(t=>n.state().controlValue.set(t)),i.listenToCustomControlOutput(`touch`,()=>n.state().markAsTouched()),n.registerAsBinding(i.customControl);let e=Dt();return()=>{let t=n.state(),r=t.controlValue();$e(e,`controlValue`,r)&&i.setCustomControlModelInput(r);for(let o of Ri){let l;if(o===`errors`?l=n.errors():l=Ei(t,o),$e(e,o,l)&&(i.setInputOnDirectives(o,l),n.elementAcceptsNativeProperty(o)&&!i.customControlHasInput(o))){let g=mo(o,l,n.nativeFormElement.type);HF(n.renderer,n.nativeFormElement,o,g)}}}}function Xa(i){return typeof i==`object`&&i!==null}function Ua(i,n){let e=Dt();n.controlValueAccessor.registerOnChange(r=>{e.controlValue=r,n.state().controlValue.set(r)}),n.controlValueAccessor.registerOnTouched(()=>n.state().markAsTouched());let t=n.injector.get(hl$1,null,{optional:!0,self:!0});if(t){let r;for(let y of t)Xa(y)&&y.registerOnValidatorChange&&(r??=M(0),y.registerOnValidatorChange(()=>{r.update(w=>w+1)}));let o=t.map(y=>typeof y==`function`?y:y.validate.bind(y)),l=ml$1.compose(o),g$4=g(()=>{r?.();return ao(l?l(n.interopNgControl.control):null,n.interopNgControl.control)});n.parseErrorsSource.set(g$4)}return n.registerAsBinding({reset:()=>{let r=n.state().value();e.controlValue=r,W(()=>n.controlValueAccessor.writeValue(r))}}),()=>{let r=n.state(),o=r.controlValue();$e(e,`controlValue`,o)&&W(()=>n.controlValueAccessor.writeValue(o));for(let l of Ri){let g=Ei(r,l);if($e(e,l,g)){let y=i.setInputOnDirectives(l,g,l===`name`?Ya:void 0);l===`disabled`&&n.controlValueAccessor.setDisabledState?W(()=>n.controlValueAccessor.setDisabledState(g)):!y&&n.elementAcceptsNativeProperty(l)&&HF(n.renderer,n.nativeFormElement,l,g)}}}}function Ya(i){return i==null}function Qa(i,n,e){if(typeof MutationObserver!=`function`)return;let t=new MutationObserver(r=>{r.some(o=>Ja(o))&&n()});t.observe(i,{attributes:!0,attributeFilter:[`value`],characterData:!0,childList:!0,subtree:!0}),e.onDestroy(()=>t.disconnect())}function Ja(i){if(i.type===`childList`||i.type===`characterData`){if(i.target instanceof Comment)return!1;for(let n of i.addedNodes)if(!(n instanceof Comment))return!0;for(let n of i.removedNodes)if(!(n instanceof Comment))return!0;return!1}return i.type===`attributes`&&i.target instanceof HTMLOptionElement}function el(i,n,e,t){let r=!1,o=n.nativeFormElement,l=bo(()=>n.state().value(),V=>n.state().controlValue.set(V),V=>$a(o,n.state().value,t));e.set(l.errors),n.onReset=()=>{l.reset();let V=n.state().value();E.controlValue=V,so(o,V)};let g=i.nativeElement,y=()=>l.setRawValue(void 0);g.addEventListener(`input`,y);let w=()=>n.state().markAsTouched();g.addEventListener(`blur`,w),n.destroyRef.onDestroy(()=>{g.removeEventListener(`input`,y),g.removeEventListener(`blur`,w)}),go(o)&&Ka(o)&&t.watchValidity(n.destroyRef,o,()=>l.setRawValue(void 0)),n.registerAsBinding(),o.tagName===`SELECT`&&Qa(o,()=>{r&&(o.value=n.state().controlValue())},n.destroyRef);let E=Dt();return()=>{let V=n.state();for(let z of Ri){let fe=Ei(V,z);if($e(E,z,fe)&&(i.setInputOnDirectives(z,fe),n.elementAcceptsNativeProperty(z))){let Te=mo(z,fe,o.type);HF(n.renderer,o,z,Te)}}let H=V.controlValue(),Z=$e(E,`controlValue`,H),ze=o.type===`radio`&&$e(E,`radioValue`,o.value);(Z||ze)&&so(o,H),r=!0}}var ho=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵprov=ie({token:i,factory:e=>nl.ɵfac(e),providedIn:`root`})}return i})();var nl=(()=>{class i extends ho{document=f(ue);cspNonce=f(ya$1,{optional:!0});injectedStyles=/* @__PURE__ */ new WeakMap;watchValidity(e,t,r){let o=t.getRootNode();this.injectedStyles.has(o)||this.injectedStyles.set(o,this.createAnimationStyle(o));let l=g=>{let y=g;(y.animationName===`ng-valid`||y.animationName===`ng-invalid`)&&r()};t.addEventListener(`animationstart`,l),e.onDestroy(()=>{t.removeEventListener(`animationstart`,l)})}isBadInput(e){return e.validity?.badInput??!1}createAnimationStyle(e){let t=this.document.createElement(`style`);return this.cspNonce&&(t.nonce=this.cspNonce),t.textContent=`
      @keyframes ng-valid {}
      @keyframes ng-invalid {}
      input:valid, textarea:valid {
        animation: ng-valid 0.001s;
      }
      input:invalid, textarea:invalid {
        animation: ng-invalid 0.001s;
      }
    `,e.nodeType===9?e.head?.appendChild(t):e.appendChild(t),t}ngOnDestroy(){this.injectedStyles.get(this.document)?.remove()}static ɵfac=(()=>{let e;return function(r){return(e||(e=Wo$1(i)))(r||i)}})();static ɵprov=ie({token:i,factory:i.ɵfac})}return i})();var tl=Symbol();var uo=new N(``);var mp=(()=>{class i{field=b.required({alias:`formField`});state=g(()=>this.field()());renderer=f(kn$1);destroyRef=f(Q);injector=f(Ie);element=f(K).nativeElement;elementIsNativeFormElement=zF(this.element);elementAcceptsTextualValues=Lie(this.element);_elementAcceptsMinMax;nativeFormElement=this.elementIsNativeFormElement?this.element:void 0;focuser=e=>this.element.focus(e);controlValueAccessors=f(Rd$1,{optional:!0,self:!0});config=f(Ia,{optional:!0});validityMonitor=f(ho);parseErrorsSource=M(void 0);_interopNgControl;get interopNgControl(){return this._interopNgControl??=new Pi(this.state)}parseErrors=g(()=>this.parseErrorsSource()?.().map(e=>s(r({},e),{fieldTree:W(this.state).fieldTree,formField:this}))??[],{equal:Se});errors=g(()=>this.state().errors().filter(e=>!e.formField||e.formField===this),{equal:Se});isFieldBinding=!1;resetter=()=>{};parseErrorsResetCallback;setParseErrors(e){this.parseErrorsSource.set(e)}set onReset(e){this.parseErrorsResetCallback=e}get onReset(){return this.parseErrorsResetCallback}get controlValueAccessor(){return!this.controlValueAccessors||this.controlValueAccessors.length===0?this.interopNgControl?.valueAccessor??void 0:QF(this.interopNgControl,this.controlValueAccessors)??void 0}installClassBindingEffect(){let e=Object.entries(this.config?.classes??{}).map(([r,o])=>[r,g(()=>o(this))]);if(e.length===0)return;let t=Dt();Gn$1({write:()=>{if(!this.state().structure.isOrphaned())for(let[r,o]of e){let l=o();$e(t,r,l)&&(l?this.renderer.addClass(this.element,r):this.renderer.removeClass(this.element,r))}}},{injector:this.injector})}focus(e){this.focuser(e)}reset(){this.resetter(),this.parseErrorsResetCallback?.(this.state().value())}registerAsBinding(e){if(this.isFieldBinding)throw new H(1913,!1);this.isFieldBinding=!0,this.installClassBindingEffect(),e?.focus&&(this.focuser=t=>e.focus(t)),e?.reset&&(this.resetter=()=>e.reset()),ce(t=>{let r=this.state();r.nodeState.formFieldBindings.update(o=>[...o,this]),t(()=>{let o=r.nodeState.formFieldBindings().filter(l=>l!==this);r.nodeState.formFieldBindings.set(o),o.length===0&&!r.structure.isOrphaned()&&r.flushSync()})},{injector:this.injector})}[tl];ɵngControlCreate(e){if(!e.hasPassThrough)if(this.controlValueAccessor)this.ɵngControlUpdate=Ua(e,this);else if(e.customControl)this.ɵngControlUpdate=Ga(e,this);else if(this.elementIsNativeFormElement)this.ɵngControlUpdate=el(e,this,this.parseErrorsSource,this.validityMonitor);else throw new H(1914,!1)}ɵngControlUpdate;elementAcceptsNativeProperty(e){if(!this.elementIsNativeFormElement)return!1;switch(e){case`min`:case`max`:return this._elementAcceptsMinMax??=Pie(this.element);case`minLength`:case`maxLength`:return this.elementAcceptsTextualValues;case`disabled`:case`required`:case`readonly`:case`name`:return!0;default:return!1}}static ɵfac=function(t){return new(t||i)};static ɵdir=Z({type:i,selectors:[[``,`formField`,``]],inputs:{field:[1,`formField`,`field`]},exportAs:[`formField`],features:[Qt([{provide:uo,useExisting:i},{provide:Tr,useFactory:()=>f(i).interopNgControl},{provide:$F,useFactory:()=>f(uo,{self:!0})}]),Oc$1(`formField`)]})}return i})();var hp=(()=>{class i{fieldTree=b.required({alias:`formRoot`});onSubmit(e){e.preventDefault(),W(()=>{let t=this.fieldTree();t().structure.fieldManager.submitOptions&&ro(t)})}static ɵfac=function(t){return new(t||i)};static ɵdir=Z({type:i,selectors:[[`form`,`formRoot`,``]],hostAttrs:[`novalidate`,``],hostBindings:function(t,r){t&1&&te(`submit`,function(l){return r.onSubmit(l)})},inputs:{fieldTree:[1,`formRoot`,`fieldTree`]}})}return i})();var se=class i extends We{edit=M(void 0);internalValue=g(()=>{let n=this.edit();return n?n.value:this.value()});value=pn(null);reset(){super.reset(),this.edit.set(void 0)}clearPendingEdit(){this.edit.set(void 0)}updateValue(n){if(this.disabled()||this.isReadonly())return;let e=this.ngControl?.control?.updateOn;e===`blur`||e===`submit`?this.edit.set({value:n}):this.value.set(n)}commitPendingValue(n){let e=this.edit();!e||n===`blur`&&this.ngControl?.control?.updateOn===`submit`||(this.value.set(e.value),this.edit.set(void 0))}static ɵfac=(()=>{let n;return function(t){return(n||(n=Wo$1(i)))(t||i)}})();static ɵdir=Z({type:i,inputs:{value:[1,`value`]},outputs:{value:`valueChange`},features:[Cn$1]})};function Li(i){if(i===void 0||i===``)return;let n=Number(i);return Number.isFinite(n)?n:void 0}var il=[[[``,`bxPrefix`,``]],[[``,`bxSuffix`,``]],[[`bx-error`]],[[`bx-hint`]]];var rl=[`[bxPrefix]`,`[bxSuffix]`,`bx-error`,`bx-hint`];var ol=[`ngProjectAs`,`bx-error`,5,[`bx-error`]];var al=[`ngProjectAs`,`bx-hint`,5,[`bx-hint`]];function ll(i,n){i&1&&(_(0,`span`,9),X(1,`*`),D())}function sl(i,n){if(i&1&&(_(0,`label`,3)(1,`span`,8),X(2),D(),j(3,ll,2,0,`span`,9),D()),i&2){let e=w();B(`for`,e.controlId()),y(2),fe(e.resolvedLabel()),y(),F(e.effectiveRequired()&&!e.resolvedHideRequiredMarker()?3:-1)}}function dl(i,n){if(i&1){let e=wt$1();_(0,`textarea`,10),te(`input`,function(r){Be(e);let o=w();return Ve$1(o.onInput(r))})(`focus`,function(){Be(e);let r=w();return Ve$1(r.onFocus())})(`blur`,function(){Be(e);let r=w();return Ve$1(r.onBlur())})(`compositionstart`,function(){Be(e);let r=w();return Ve$1(r.onCompositionStart())})(`compositionend`,function(r){Be(e);let o=w();return Ve$1(o.onCompositionEnd(r))})(`cdkAutofill`,function(r){Be(e);let o=w();return Ve$1(o.autofilled.set(r.isAutofilled))}),D()}if(i&2){let e=w();R(`required`,e.effectiveRequired())(`disabled`,e.disabled())(`readOnly`,e.isReadonly())(`value`,e.displayedValue())(`spellcheck`,e.spellcheck())(`rows`,e.rows())(`cdkTextareaAutosize`,e.autosize())(`cdkAutosizeMinRows`,e.minRows())(`cdkAutosizeMaxRows`,e.maxRows()),B(`id`,e.controlId())(`name`,e.name()||null)(`data-testid`,e.dataTestId())(`aria-label`,e.ariaLabel())(`aria-labelledby`,e.ariaLabelledBy())(`aria-describedby`,e.describedBy())(`aria-invalid`,e.showError())(`aria-busy`,e.pending()||e.loading())(`autocomplete`,e.autocomplete())(`inputmode`,e.inputmode())(`minlength`,e.minLength())(`maxlength`,e.maxLength())(`placeholder`,e.isFloating()||!e.label()?e.resolvedPlaceholder():``)}}function cl(i,n){if(i&1){let e=wt$1();_(0,`input`,11),te(`input`,function(r){Be(e);let o=w();return Ve$1(o.onInput(r))})(`focus`,function(){Be(e);let r=w();return Ve$1(r.onFocus())})(`blur`,function(){Be(e);let r=w();return Ve$1(r.onBlur())})(`compositionstart`,function(){Be(e);let r=w();return Ve$1(r.onCompositionStart())})(`compositionend`,function(r){Be(e);let o=w();return Ve$1(o.onCompositionEnd(r))})(`cdkAutofill`,function(r){Be(e);let o=w();return Ve$1(o.autofilled.set(r.isAutofilled))}),D()}if(i&2){let e=w();R(`required`,e.effectiveRequired())(`disabled`,e.disabled())(`readOnly`,e.isReadonly())(`value`,e.displayedValue())(`spellcheck`,e.spellcheck())(`type`,e.type()),B(`id`,e.controlId())(`name`,e.name()||null)(`data-testid`,e.dataTestId())(`aria-label`,e.ariaLabel())(`aria-labelledby`,e.ariaLabelledBy())(`aria-describedby`,e.describedBy())(`aria-invalid`,e.showError())(`aria-busy`,e.pending()||e.loading())(`autocomplete`,e.autocomplete())(`inputmode`,e.inputmode())(`minlength`,e.minLength())(`maxlength`,e.maxLength())(`placeholder`,e.isFloating()||!e.label()?e.resolvedPlaceholder():``)(`min`,e.min())(`max`,e.max())(`step`,e.step())(`pattern`,e.pattern()[0]?.source)}}function ul(i,n){if(i&1){let e=wt$1();_(0,`div`,7)(1,`button`,12),te(`pointerdown`,function(r){Be(e);let o=w();return Ve$1(o.startSpin(-1,r))})(`pointerup`,function(){Be(e);let r=w();return Ve$1(r.stopSpin())})(`pointercancel`,function(){Be(e);let r=w();return Ve$1(r.stopSpin())})(`pointerleave`,function(){Be(e);let r=w();return Ve$1(r.stopSpin())})(`click`,function(r){Be(e);let o=w();return r.detail===0&&o.startSpin(-1,r),Ve$1(o.stopSpin())}),xe(2,`bx-icon`,13),D(),_(3,`button`,12),te(`pointerdown`,function(r){Be(e);let o=w();return Ve$1(o.startSpin(1,r))})(`pointerup`,function(){Be(e);let r=w();return Ve$1(r.stopSpin())})(`pointercancel`,function(){Be(e);let r=w();return Ve$1(r.stopSpin())})(`pointerleave`,function(){Be(e);let r=w();return Ve$1(r.stopSpin())})(`click`,function(r){Be(e);let o=w();return r.detail===0&&o.startSpin(1,r),Ve$1(o.stopSpin())}),xe(4,`bx-icon`,14),D()()}if(i&2){let e=w();y(),R(`disabled`,e.isSpinDownDisabled()),B(`aria-label`,e.resolvedDecreaseLabel()),y(2),R(`disabled`,e.isSpinUpDisabled()),B(`aria-label`,e.resolvedIncreaseLabel())}}var fo=class i extends se{i18n=f(Se$1,{optional:!0});editingRaw=M(void 0);badInput=M(!1);labelText=Nt$1(_o$1);labelTruncated=g(()=>this.labelText()?.truncated()??!1);isFocused=M(!1);autofilled=M(!1);rawValue=po(this.value,{parse:n=>{if(this.type()!==`number`)return{value:n};let e=n===``?null:Number(n);return this.badInput()||e!==null&&!Number.isFinite(e)?{error:{kind:`parse`}}:{value:e}},format:n=>n?.toString()??``});displayedValue=g(()=>this.editingRaw()??this.rawValue());isSpinDownDisabled=g(()=>this.disabled()||this.isReadonly()||Number(this.value()??0)<=(this.min()??-1/0));isSpinUpDisabled=g(()=>this.disabled()||this.isReadonly()||Number(this.value()??0)>=(this.max()??1/0));isFloating=g(()=>this.resolvedFloatLabel()===`always`||this.isFocused()||this.autofilled()||!!this.displayedValue()||this.multiline()||[`date`,`time`,`datetime-local`].includes(this.type()));resolvedDecreaseLabel=g(()=>J(this.decreaseLabel(),this.i18n));resolvedIncreaseLabel=g(()=>J(this.increaseLabel(),this.i18n));type=b(`text`);min=b(void 0,{transform:Li});max=b(void 0,{transform:Li});minLength=b(void 0);maxLength=b(void 0);pattern=b([]);step=b(1);autocomplete=b(void 0);inputmode=b(void 0);spellcheck=b(!0);multiline=b(!1);rows=b(3);autosize=b(!0);minRows=b(2);maxRows=b(8);decreaseLabel=b(`Decrease value`);increaseLabel=b(`Increase value`);composing=!1;spinTimeout;spinInterval;constructor(){super(),f(Q).onDestroy(()=>this.stopSpin())}reset(){super.reset(),this.editingRaw.set(void 0),this.badInput.set(!1),this.stopSpin()}startSpin(n,e){e.preventDefault(),!(this.disabled()||this.isReadonly())&&(this.applyStep(n),this.spinTimeout=setTimeout(()=>{this.spinInterval=setInterval(()=>this.applyStep(n),80)},400))}stopSpin(){clearTimeout(this.spinTimeout),clearInterval(this.spinInterval)}clearPendingEdit(){super.clearPendingEdit(),this.editingRaw.set(void 0),this.badInput.set(!1)}onInput(n){if(this.composing||this.disabled()||this.isReadonly())return;let e=n.target;this.badInput.set(e.validity.badInput);let t=this.ngControl?.control?.updateOn;t===`blur`||t===`submit`?this.editingRaw.set(e.value):this.rawValue.set(e.value)}onCompositionStart(){this.composing=!0}onCompositionEnd(n){this.composing=!1,this.onInput(n)}onFocus(){this.isFocused.set(!0)}onBlur(){this.isFocused.set(!1),this.stopSpin(),this.markAsTouched()}commitPendingValue(n){let e=this.editingRaw();e===void 0||n===`blur`&&this.ngControl?.control?.updateOn===`submit`||(this.rawValue.set(e),this.editingRaw.set(void 0))}applyStep(n){let e=Number(this.displayedValue())||0,t=this.step()===`any`?1:Number(this.step()),r=Math.min(this.max()??1/0,Math.max(this.min()??-1/0,Number((e+n*t).toPrecision(12))));this.disabled()||this.isReadonly()||(this.badInput.set(!1),this.rawValue.set(String(r)))}static ɵfac=function(e){return new(e||i)};static ɵcmp=G({type:i,selectors:[[`bx-input-field`]],viewQuery:function(e,t){e&1&&Xt(t.labelText,_o$1,5),e&2&&ft()},inputs:{type:[1,`type`],min:[1,`min`],max:[1,`max`],minLength:[1,`minLength`],maxLength:[1,`maxLength`],pattern:[1,`pattern`],step:[1,`step`],autocomplete:[1,`autocomplete`],inputmode:[1,`inputmode`],spellcheck:[1,`spellcheck`],multiline:[1,`multiline`],rows:[1,`rows`],autosize:[1,`autosize`],minRows:[1,`minRows`],maxRows:[1,`maxRows`],decreaseLabel:[1,`decreaseLabel`],increaseLabel:[1,`increaseLabel`]},features:[Cn$1],ngContentSelectors:rl,decls:13,vars:30,consts:[[3,`control`,`inline`,`tooltip`,`loading`,`hint`,`hintEnd`,`subscriptSizing`,`forId`],[`bxSurface`,``,1,`bx-input-wrapper`],[`bxTooltipTouch`,`longpress`,`placement`,`top`,1,`bx-input-container`,3,`bxTooltip`],[1,`bx-floating-label`],[`cdkAutofill`,``,1,`bx-native-input`,3,`required`,`disabled`,`readOnly`,`value`,`spellcheck`,`rows`,`cdkTextareaAutosize`,`cdkAutosizeMinRows`,`cdkAutosizeMaxRows`],[`cdkAutofill`,``,1,`bx-native-input`,3,`required`,`disabled`,`readOnly`,`value`,`spellcheck`,`type`],[1,`bx-input-actions`],[1,`bx-spinners-group`],[`bxTruncate`,``,1,`bx-input-label-text`],[`aria-hidden`,`true`,1,`bx-field-required`],[`cdkAutofill`,``,1,`bx-native-input`,3,`input`,`focus`,`blur`,`compositionstart`,`compositionend`,`cdkAutofill`,`required`,`disabled`,`readOnly`,`value`,`spellcheck`,`rows`,`cdkTextareaAutosize`,`cdkAutosizeMinRows`,`cdkAutosizeMaxRows`],[`cdkAutofill`,``,1,`bx-native-input`,3,`input`,`focus`,`blur`,`compositionstart`,`compositionend`,`cdkAutofill`,`required`,`disabled`,`readOnly`,`value`,`spellcheck`,`type`],[`type`,`button`,1,`bx-spin-btn`,3,`pointerdown`,`pointerup`,`pointercancel`,`pointerleave`,`click`,`disabled`],[`name`,`minus`,`size`,`16`],[`name`,`plus`,`size`,`16`]],template:function(e,t){e&1&&(Ae(il),_(0,`bx-form-field`,0)(1,`div`,1),pe(2),_(3,`div`,2),Ko$1(4,`bxTruncatedText`),j(5,sl,4,3,`label`,3),j(6,dl,1,22,`textarea`,4)(7,cl,1,23,`input`,5),D(),_(8,`div`,6),pe(9,1),j(10,ul,5,4,`div`,7),D()(),pe(11,2,ol),pe(12,3,al),D()),e&2&&(R(`control`,t.fieldControl)(`inline`,!0)(`tooltip`,t.tooltip())(`loading`,t.loading())(`hint`,t.hint())(`hintEnd`,t.hintEnd())(`subscriptSizing`,t.resolvedSubscriptSizing())(`forId`,t.controlId()),y(),ae(`is-invalid`,t.showError())(`is-outline`,t.resolvedAppearance()===`outline`)(`is-disabled`,t.disabled())(`is-readonly`,t.isReadonly())(`is-keyboard-focused`,t.keyboardFocused())(`has-spinners`,t.type()===`number`&&!t.multiline())(`is-floating`,t.isFloating()),y(2),R(`bxTooltip`,Zo$1(4,26,t.resolvedLabel(),t.labelTruncated(),t.resolvedTooltipOnTruncate())),y(2),F(t.label()?5:-1),y(),F(t.multiline()?6:7),y(4),F(t.type()===`number`&&!t.multiline()?10:-1))},dependencies:[Rt$1,U,Vt$1,xt,jr,qi,_o$1,Cl$1],styles:[`
[_nghost-%COMP%] {
  display: block;
  width: 100%;
  min-inline-size: 0;
}
.bx-input-wrapper[_ngcontent-%COMP%] {
  position: relative;
  display: flex;
  flex: 1;
  min-inline-size: 0;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  background-color: var(--%NS%bx-bg-neutral);
  border-radius: var(--%NS%bx-rounded-sm, 0.25rem) var(--%NS%bx-rounded-sm, 0.25rem) 0 0;
  border-bottom: var(--%NS%bx-border-width, 1px) var(--%NS%bx-border-style, solid) var(--%NS%bx-border-strong);
}
.bx-input-wrapper[_ngcontent-%COMP%]:hover:not(.is-disabled, .is-readonly) {
  background-color: var(--%NS%bx-bg-neutral-hover);
}
.bx-input-wrapper.is-disabled[_ngcontent-%COMP%] {
  background-color: var(--%NS%bx-bg-element);
  opacity: 0.7;
  border-bottom-style: dotted;
}
.bx-input-wrapper[_ngcontent-%COMP%]::after {
  content: "";
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 2px;
  background-color: var(--%NS%bx-primary);
  transform: scaleX(0);
  transition: transform 0.2s linear(0, 0.18 12%, 0.58 32%, 0.87 56%, 0.98 78%, 1);
  transform-origin: center;
  z-index: 2;
}
.bx-input-wrapper[_ngcontent-%COMP%]:focus-within:not(.is-disabled, .is-readonly)::after {
  transform: scaleX(1);
}
.bx-input-wrapper.is-invalid[_ngcontent-%COMP%] {
  border-bottom-color: var(--%NS%bx-border-danger);
}
.bx-input-wrapper.is-invalid[_ngcontent-%COMP%]::after {
  background-color: var(--%NS%bx-border-danger);
  transform: scaleX(1);
}
.bx-input-container[_ngcontent-%COMP%] {
  flex: 1;
  min-width: 0;
  position: relative;
  display: flex;
  flex-direction: column;
}
.bx-native-input[_ngcontent-%COMP%] {
  width: 100%;
  min-inline-size: 0;
  box-sizing: border-box;
  padding: var(--%NS%bx-space-6, 1.5rem) var(--%NS%bx-space-3, 0.75rem) var(--%NS%bx-space-2, 0.5rem);
  height: 3.85rem;
  background: transparent;
  border: none;
  outline: none;
  font-family: inherit;
  font-size: 1rem;
  color: var(--%NS%bx-text-heading);
  z-index: 1;
}
.bx-native-input[_ngcontent-%COMP%]::placeholder {
  color: var(--%NS%bx-text-secondary);
}
.bx-native-input[_ngcontent-%COMP%]:disabled {
  color: var(--%NS%bx-text-secondary);
  cursor: not-allowed;
}
.bx-native-input[readonly][_ngcontent-%COMP%]:not(:disabled) {
  cursor: default;
}
.bx-native-input[_ngcontent-%COMP%] {
  appearance: textfield;
}
.bx-native-input[_ngcontent-%COMP%]::-webkit-outer-spin-button, 
.bx-native-input[_ngcontent-%COMP%]::-webkit-inner-spin-button {
  appearance: none;
  margin: 0;
}
.bx-floating-label[_ngcontent-%COMP%] {
  position: absolute;
  inset-inline: var(--%NS%bx-space-3, 0.75rem);
  display: flex;
  align-items: baseline;
  min-inline-size: 0;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1rem;
  color: var(--%NS%bx-text-secondary);
  z-index: 2;
  transition:
    top 0.2s linear(0, 0.18 12%, 0.58 32%, 0.87 56%, 0.98 78%, 1),
    transform 0.2s linear(0, 0.18 12%, 0.58 32%, 0.87 56%, 0.98 78%, 1),
    font-size 0.2s linear(0, 0.18 12%, 0.58 32%, 0.87 56%, 0.98 78%, 1),
    color 0.15s ease;
}
.bx-input-wrapper.is-floating[_ngcontent-%COMP%]   .bx-floating-label[_ngcontent-%COMP%] {
  top: var(--%NS%bx-space-2, 0.5rem);
  transform: translateY(0);
  font-size: 0.75rem;
  font-weight: 500;
}
.bx-input-wrapper.is-floating[_ngcontent-%COMP%]:focus-within:not(.is-readonly)   .bx-floating-label[_ngcontent-%COMP%] {
  color: var(--%NS%bx-primary);
}
.bx-input-wrapper.is-invalid[_ngcontent-%COMP%]   .bx-floating-label[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-danger);
}
.bx-field-required[_ngcontent-%COMP%] {
  flex: none;
  color: var(--%NS%bx-text-secondary);
  margin-inline-start: 0.125rem;
}
.bx-input-actions[_ngcontent-%COMP%] {
  display: flex;
  flex: 0 0 auto;
  justify-content: flex-end;
  align-items: center;
  align-self: stretch;
  margin-inline-start: auto;
  border-radius: inherit;
}
.bx-input-actions[_ngcontent-%COMP%]:empty {
  display: none;
}
.bx-spinners-group[_ngcontent-%COMP%] {
  display: flex;
  flex: 0 0 auto;
  justify-content: flex-end;
  align-items: center;
  align-self: stretch;
  z-index: 1;
}
.bx-spin-btn[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.25rem;
  flex: 0 0 2.25rem;
  align-self: stretch;
  background: transparent;
  border: none;
  border-inline-start: var(--%NS%bx-border-width, 1px) var(--%NS%bx-border-style, solid) var(--%NS%bx-border-subtle);
  color: var(--%NS%bx-text-secondary);
  cursor: pointer;
  outline: none;
  transition: background-color 0.1s ease, color 0.1s ease;
}
.bx-spin-btn[_ngcontent-%COMP%]:hover:not(:disabled) {
  background-color: var(--%NS%bx-bg-element-hover);
  color: var(--%NS%bx-text-primary);
}
.bx-spin-btn[_ngcontent-%COMP%]:active:not(:disabled) {
  background-color: var(--%NS%bx-bg-element-active);
}
.bx-spin-btn[_ngcontent-%COMP%]:disabled {
  cursor: not-allowed;
  opacity: 0.3;
}
.bx-input-wrapper[data-bx-surface][_ngcontent-%COMP%] {
  --%NS%bx-glass-surface: var(--%NS%bx-bg-neutral);
  --%NS%bx-glass-shadow: none;
}
.bx-input-wrapper[data-bx-surface].is-invalid[_ngcontent-%COMP%] {
  --%NS%bx-glass-edge: var(--%NS%bx-border-danger);
}
.bx-input-wrapper[data-bx-surface][_ngcontent-%COMP%] {
  --%NS%bx-glass-surface: var(--%NS%bx-bg-neutral);
  --%NS%bx-glass-min-opacity: 0.45;
  --%NS%bx-glass-edge: var(--%NS%bx-border-default);
  --%NS%bx-glass-shadow: none;
  border: var(--%NS%bx-border-width, 1px) var(--%NS%bx-border-style, solid) var(--%NS%bx-glass-edge);
  border-radius: var(--%NS%bx-rounded-lg, 0.75rem);
}
.bx-input-wrapper[data-bx-surface][_ngcontent-%COMP%]::after {
  display: none;
}
.bx-input-wrapper[data-bx-surface][_ngcontent-%COMP%]:focus-within:not(.is-disabled, :disabled, .is-readonly, [readonly], [aria-readonly=true], :has([readonly], [aria-readonly=true])), 
.bx-input-wrapper[data-bx-surface][_ngcontent-%COMP%]:focus-visible:not(:disabled, [readonly], [aria-readonly=true]), 
.bx-input-wrapper[data-bx-surface].is-open[_ngcontent-%COMP%]:not(:disabled), 
.bx-input-wrapper[data-bx-surface].is-readonly.is-keyboard-focused[_ngcontent-%COMP%]:focus-within, 
.bx-input-wrapper[data-bx-surface][_ngcontent-%COMP%]:has(.bx-readonly.is-keyboard-focused):focus-within {
  --%NS%bx-glass-edge: var(--%NS%bx-border-brand);
  outline: 2px solid var(--%NS%bx-border-brand);
  outline-offset: -2px;
  --%NS%bx-glass-shadow: none;
}
.bx-input-wrapper[data-bx-surface].is-invalid[_ngcontent-%COMP%] {
  --%NS%bx-glass-surface: var(--%NS%bx-bg-neutral);
  --%NS%bx-glass-min-opacity: 0.45;
  --%NS%bx-glass-edge: color-mix(in srgb, var(--%NS%bx-text-danger) 40%, var(--%NS%bx-border-default));
  border-block-end-color: var(--%NS%bx-glass-edge);
  --%NS%bx-glass-shadow: 0 8px 18px -10px color-mix(in srgb, var(--%NS%bx-text-danger) 65%, transparent);
  outline-color: var(--%NS%bx-border-danger);
}
.bx-spinners-group[_ngcontent-%COMP%] {
  border-radius: inherit;
  border-start-start-radius: var(--%NS%bx-rounded-none, 0);
  border-end-start-radius: var(--%NS%bx-rounded-none, 0);
  overflow: hidden;
}
.bx-spin-btn[_ngcontent-%COMP%]:last-child {
  border-start-end-radius: inherit;
  border-end-end-radius: inherit;
}
textarea.bx-native-input[_ngcontent-%COMP%] {
  height: auto;
  min-block-size: 5rem;
  resize: vertical;
}
.bx-spin-btn[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--%NS%bx-border-brand);
  outline-offset: -2px;
}
.bx-input-wrapper.is-readonly[_ngcontent-%COMP%]:not(.is-disabled)   .bx-spin-btn[_ngcontent-%COMP%]:disabled {
  cursor: default;
}
.bx-native-input[_ngcontent-%COMP%]:-webkit-autofill    + .bx-floating-label[_ngcontent-%COMP%] {
  top: var(--%NS%bx-space-2, 0.5rem);
}
.bx-input-wrapper.is-outline[_ngcontent-%COMP%] {
  border: var(--%NS%bx-border-width, 1px) var(--%NS%bx-border-style, solid) var(--%NS%bx-border-strong);
  border-radius: var(--%NS%bx-field-radius, var(--%NS%bx-rounded-md, 0.5rem));
}
.bx-input-wrapper.is-outline.is-invalid[_ngcontent-%COMP%] {
  border-color: var(--%NS%bx-border-danger);
}`]})};var It=class i{radios=/* @__PURE__ */ new Set;select(n){for(let e of this.radios)e!==n&&e.sharesGroup(n)&&e.writeValue(n.value())}static ɵfac=function(e){return new(e||i)};static ɵprov=ie({token:i,factory:i.ɵfac,providedIn:`root`})};var Et=new N(`BX_RADIO_GROUP`);var bl=[`*`];function pl(i,n){i&1&&(_(0,`span`,6),X(1,`*`),D())}function gl(i,n){if(i&1&&(_(0,`span`,5),pe(1),X(2),j(3,pl,2,0,`span`,6),D()),i&2){let e=w();y(2),un(``,e.resolvedLabel(),` `),y(),F(e.isFieldRequired()||e.group?.required()?3:-1)}}var xo=class i extends $I{radioRegistry=f(It);formSettingsService=f(Cn);i18n=f(Se$1,{optional:!0});group=f(Et,{optional:!0});inputId=g(()=>`bx-radio-${Jt()}`);resolvedLabel=g(()=>{this.i18n?.version?.();let n=this.label();if(n)return So$1(n)?this.i18n?.translate(n.key)??n.key:n});effectiveDisabled=g(()=>this.isDisabled()||!!this.group?.disabled());effectiveName=g(()=>this.group?.groupName()??this.name());selected=g(()=>(this.group?this.group.value():this.internalValue())===this.value());resolvedSubscriptSizing=g(()=>this.subscriptSizing()??this.formSettingsService.settings().subscriptSizing);labelPosition=b(`after`);subscriptSizing=b(void 0);value=b.required();name=b(``);showTooltip=!1;constructor(){super(),this.radioRegistry.radios.add(this),f(Q).onDestroy(()=>this.radioRegistry.radios.delete(this))}sharesGroup(n){let e=this.ngControl?.control;return e&&e===n.ngControl?.control?!0:!!this.name()&&this.name()===n.name()&&this.nativeElement.closest(`form`)===n.nativeElement.closest(`form`)&&e?.parent===n.ngControl?.control?.parent}onSelect(){this.effectiveDisabled()||this.isReadonly()||this.group?.isReadonly()||(this.group?this.group.select(this.value()):(this.updateValue(this.value()),this.radioRegistry.select(this)))}onReadonlyClick(n){(this.isReadonly()||this.group?.isReadonly())&&n.preventDefault()}onControlPointerDown(){(this.isReadonly()||this.group?.isReadonly())&&this.keyboardFocused.set(!1)}onBlur(){this.group?this.group.markTouched():this.markAsTouched()}static ɵfac=function(e){return new(e||i)};static ɵcmp=G({type:i,selectors:[[`bx-radio`]],inputs:{labelPosition:[1,`labelPosition`],subscriptSizing:[1,`subscriptSizing`],value:[1,`value`],name:[1,`name`]},features:[Cn$1],ngContentSelectors:bl,decls:6,vars:29,consts:[[3,`inline`,`tooltip`,`error`,`loading`,`forId`,`subscriptSizing`],[1,`bx-inline-wrapper`],[`type`,`radio`,1,`bx-visually-hidden`,3,`click`,`change`,`blur`,`required`,`disabled`,`checked`],[`bxSurface`,``,1,`bx-radio-circle`,3,`bxSurfaceEmission`],[1,`bx-radio-inner`],[1,`bx-inline-label`],[1,`bx-inline-required`]],template:function(e,t){e&1&&(Ae(),_(0,`bx-form-field`,0)(1,`label`,1)(2,`input`,2),te(`click`,function(o){return t.onReadonlyClick(o)})(`change`,function(){return t.onSelect()})(`blur`,function(){return t.onBlur()}),D(),_(3,`div`,3),xe(4,`div`,4),D(),j(5,gl,4,2,`span`,5),D()()),e&2&&(R(`inline`,!0)(`tooltip`,t.tooltip())(`error`,t.errorMessage)(`loading`,t.loading())(`forId`,t.inputId())(`subscriptSizing`,t.resolvedSubscriptSizing()),y(),ae(`is-disabled`,t.effectiveDisabled())(`is-readonly`,t.isReadonly()||!!t.group?.isReadonly())(`is-keyboard-focused`,t.keyboardFocused())(`label-before`,t.labelPosition()===`before`),y(),R(`required`,t.required()||!!t.group?.required())(`disabled`,t.effectiveDisabled())(`checked`,t.selected()),B(`id`,t.inputId())(`name`,t.effectiveName()||null)(`data-testid`,t.dataTestId())(`aria-label`,t.ariaLabel())(`aria-readonly`,t.isReadonly()||!!t.group?.isReadonly())(`aria-describedby`,t.group?.describedBy()),y(),ae(`is-checked`,t.selected())(`is-invalid`,!!t.errorMessage),R(`bxSurfaceEmission`,t.errorMessage?`var(--bx-text-danger)`:`var(--bx-accent)`),y(2),F(t.resolvedLabel()?5:-1))},dependencies:[Rt$1,KE,U],styles:[`
[_nghost-%COMP%] {
  display: block;
}
.bx-visually-hidden[_ngcontent-%COMP%] {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
  border: 0;
}
.bx-inline-wrapper[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: var(--%NS%bx-space-2, 0.5rem);
  cursor: pointer;
  -webkit-user-select: none;
  user-select: none;
  min-height: 1.5rem;
  vertical-align: middle;
}
.bx-inline-wrapper.is-disabled[_ngcontent-%COMP%] {
  opacity: 0.5;
  cursor: not-allowed;
}
.bx-inline-wrapper.is-readonly[_ngcontent-%COMP%]:not(.is-disabled) {
  cursor: default;
}
.bx-inline-label[_ngcontent-%COMP%] {
  font-size: 0.875rem;
  color: var(--%NS%bx-text-primary);
  line-height: 1.5;
}
.bx-inline-required[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-danger);
  margin-left: 0.125rem;
}
.bx-radio-circle[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.125rem;
  height: 1.125rem;
  background-color: var(--%NS%bx-bg-surface);
  border: var(--%NS%bx-border-width, 1px) var(--%NS%bx-border-style, solid) var(--%NS%bx-border-strong);
  border-radius: var(--%NS%bx-rounded-pill, 9999px);
  transition: border-color 0.15s ease;
}
.bx-radio-circle.is-invalid[_ngcontent-%COMP%] {
  border-color: var(--%NS%bx-border-danger);
  background-color: var(--%NS%bx-bg-danger-subtle);
}
.bx-radio-circle.is-checked[_ngcontent-%COMP%] {
  border-color: var(--%NS%bx-accent);
}
.bx-radio-circle.is-checked.is-invalid[_ngcontent-%COMP%] {
  border-color: var(--%NS%bx-border-danger);
}
.bx-radio-circle.is-checked[_ngcontent-%COMP%]   .bx-radio-inner[_ngcontent-%COMP%] {
  transform: scale(1);
}
.bx-inline-wrapper[_ngcontent-%COMP%]:not(.is-readonly)   input[_ngcontent-%COMP%]:focus-visible    ~ .bx-radio-circle[_ngcontent-%COMP%], 
.bx-inline-wrapper.is-readonly.is-keyboard-focused[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus-visible    ~ .bx-radio-circle[_ngcontent-%COMP%] {
  box-shadow: 0 0 0 3px var(--%NS%bx-accent-subtle);
}
.bx-radio-inner[_ngcontent-%COMP%] {
  width: 0.5rem;
  height: 0.5rem;
  background-color: var(--%NS%bx-on-accent);
  border-radius: var(--%NS%bx-rounded-pill, 9999px);
  transform: scale(0);
  transition: transform 0.2s linear(0, 0.18 12%, 0.58 32%, 0.87 56%, 0.98 78%, 1);
}
.is-invalid[_ngcontent-%COMP%]   .bx-radio-inner[_ngcontent-%COMP%] {
  background-color: var(--%NS%bx-bg-danger);
}
.bx-radio-circle[data-bx-surface][_ngcontent-%COMP%] {
  --%NS%bx-glass-shadow: none;
  --%NS%bx-glass-surface: var(--%NS%bx-bg-neutral);
  --%NS%bx-glass-edge: var(--%NS%bx-border-strong);
  --%NS%bx-glass-min-opacity: 0.65;
  border: var(--%NS%bx-border-width, 1px) var(--%NS%bx-border-style, solid) var(--%NS%bx-glass-edge);
  box-sizing: border-box;
  --%NS%bx-glass-text: var(--%NS%bx-text-primary);
}
.bx-radio-circle[data-bx-surface].is-checked[_ngcontent-%COMP%] {
  --%NS%bx-glass-surface: var(--%NS%bx-accent);
  --%NS%bx-glass-min-opacity: 1;
  --%NS%bx-glass-edge: var(--%NS%bx-border-accent);
  --%NS%bx-glass-text: var(--%NS%bx-text-accent);
}
.bx-radio-circle[data-bx-surface].is-invalid[_ngcontent-%COMP%] {
  --%NS%bx-glass-surface: var(--%NS%bx-bg-danger-subtle);
  --%NS%bx-glass-edge: var(--%NS%bx-border-danger);
  --%NS%bx-glass-text: var(--%NS%bx-text-danger);
}
.bx-inline-wrapper[_ngcontent-%COMP%]:not(.is-disabled, .is-readonly):hover   .bx-radio-circle[data-bx-surface][_ngcontent-%COMP%]:not(.is-invalid) {
  --%NS%bx-glass-surface: var(--%NS%bx-bg-neutral-hover);
  --%NS%bx-glass-edge: var(--%NS%bx-border-accent);
}
.bx-inline-wrapper[_ngcontent-%COMP%]:not(.is-disabled, .is-readonly):hover   .bx-radio-circle[data-bx-surface][_ngcontent-%COMP%]:not(.is-invalid).is-checked {
  --%NS%bx-glass-surface: var(--%NS%bx-accent-hover);
}
.bx-inline-wrapper[_ngcontent-%COMP%]:not(.is-disabled, .is-readonly):hover   .bx-radio-circle[data-bx-surface][_ngcontent-%COMP%]:not(.is-invalid).is-checked   .bx-radio-inner[_ngcontent-%COMP%] {
  background-color: var(--%NS%bx-accent-hover);
}
.bx-inline-wrapper[_ngcontent-%COMP%]:not(.is-disabled)   .bx-radio-circle[data-bx-surface][_ngcontent-%COMP%]:not(.is-invalid) {
  background-image:
    linear-gradient(
      180deg,
      color-mix(in srgb, var(--%NS%bx-border-strong) 24%, var(--%NS%bx-glass-surface)),
      var(--%NS%bx-glass-surface) 55%,
      color-mix(in srgb, var(--%NS%bx-border-strong) 10%, var(--%NS%bx-glass-surface))) !important;
  border-top-color: var(--%NS%bx-border-strong);
  border-bottom-color: var(--%NS%bx-border-default);
}
.bx-inline-wrapper[_ngcontent-%COMP%]:not(.is-disabled)   .bx-radio-circle[data-bx-surface][_ngcontent-%COMP%]:not(.is-invalid).is-checked {
  --%NS%bx-glass-surface: var(--%NS%bx-accent-subtle);
  border-top-color: var(--%NS%bx-accent);
  border-inline-color: var(--%NS%bx-border-accent);
  border-bottom-color: var(--%NS%bx-border-accent);
}
.bx-inline-wrapper[_ngcontent-%COMP%]:not(.is-disabled)   .bx-radio-circle[data-bx-surface][_ngcontent-%COMP%]:not(.is-invalid).is-checked   .bx-radio-inner[_ngcontent-%COMP%] {
  background-image:
    linear-gradient(
      180deg,
      color-mix(in srgb, var(--%NS%bx-color-accent-50) 24%, var(--%NS%bx-accent)),
      var(--%NS%bx-accent) 42%,
      var(--%NS%bx-accent) 65%,
      color-mix(in srgb, var(--%NS%bx-border-accent) 18%, var(--%NS%bx-accent))) !important;
  border-top-color: color-mix(in srgb, var(--%NS%bx-color-accent-100) 60%, var(--%NS%bx-accent));
  border-inline-color: var(--%NS%bx-accent);
  border-bottom-color: var(--%NS%bx-border-accent);
  background-color: var(--%NS%bx-accent);
}
.high-contrast[_nghost-%COMP%]   .bx-inline-wrapper[_ngcontent-%COMP%]:not(.is-disabled)   .bx-radio-circle[data-bx-surface][_ngcontent-%COMP%]:not(.is-invalid).is-checked   .bx-radio-inner[_ngcontent-%COMP%], .high-contrast   [_nghost-%COMP%]   .bx-inline-wrapper[_ngcontent-%COMP%]:not(.is-disabled)   .bx-radio-circle[data-bx-surface][_ngcontent-%COMP%]:not(.is-invalid).is-checked   .bx-radio-inner[_ngcontent-%COMP%], 
.bx-high-contrast-scope[_nghost-%COMP%]   .bx-inline-wrapper[_ngcontent-%COMP%]:not(.is-disabled)   .bx-radio-circle[data-bx-surface][_ngcontent-%COMP%]:not(.is-invalid).is-checked   .bx-radio-inner[_ngcontent-%COMP%], .bx-high-contrast-scope   [_nghost-%COMP%]   .bx-inline-wrapper[_ngcontent-%COMP%]:not(.is-disabled)   .bx-radio-circle[data-bx-surface][_ngcontent-%COMP%]:not(.is-invalid).is-checked   .bx-radio-inner[_ngcontent-%COMP%] {
  background-image: none !important;
  border-color: var(--%NS%bx-glass-edge);
}
@media (forced-colors: active) {
  .bx-inline-wrapper[_ngcontent-%COMP%]:not(.is-disabled)   .bx-radio-circle[data-bx-surface][_ngcontent-%COMP%]:not(.is-invalid).is-checked   .bx-radio-inner[_ngcontent-%COMP%] {
    background-image: none !important;
    border-color: ButtonText;
  }
}
.high-contrast[_nghost-%COMP%]   .bx-inline-wrapper[_ngcontent-%COMP%]:not(.is-disabled)   .bx-radio-circle[data-bx-surface][_ngcontent-%COMP%]:not(.is-invalid), .high-contrast   [_nghost-%COMP%]   .bx-inline-wrapper[_ngcontent-%COMP%]:not(.is-disabled)   .bx-radio-circle[data-bx-surface][_ngcontent-%COMP%]:not(.is-invalid), 
.bx-high-contrast-scope[_nghost-%COMP%]   .bx-inline-wrapper[_ngcontent-%COMP%]:not(.is-disabled)   .bx-radio-circle[data-bx-surface][_ngcontent-%COMP%]:not(.is-invalid), .bx-high-contrast-scope   [_nghost-%COMP%]   .bx-inline-wrapper[_ngcontent-%COMP%]:not(.is-disabled)   .bx-radio-circle[data-bx-surface][_ngcontent-%COMP%]:not(.is-invalid) {
  background-image: none !important;
  border-color: var(--%NS%bx-glass-edge);
}
@media (forced-colors: active) {
  .bx-inline-wrapper[_ngcontent-%COMP%]:not(.is-disabled)   .bx-radio-circle[data-bx-surface][_ngcontent-%COMP%]:not(.is-invalid) {
    background-image: none !important;
    border-color: ButtonText;
  }
}
.bx-inline-wrapper.label-before[_ngcontent-%COMP%]   .bx-inline-label[_ngcontent-%COMP%] {
  order: -1;
}`],changeDetection:1})};var ml=[[[`bx-error`]],[[`bx-hint`]]];var hl=[`bx-error`,`bx-hint`];var fl=[`ngProjectAs`,`bx-error`,5,[`bx-error`]];var xl=[`ngProjectAs`,`bx-hint`,5,[`bx-hint`]];function vl(i,n){i&1&&xe(0,`bx-loading-spinner`,4),i&2&&R(`size`,16)(`decorative`,!0)}function yl(i,n){i&1&&xe(0,`bx-icon`,5)}function _l(i,n){if(i&1){let e=wt$1();_(0,`button`,12),te(`click`,function(){Be(e);let r=w();return Ve$1(r.clear())}),xe(1,`bx-icon`,13),D()}if(i&2){let e=w();R(`disabled`,e.disabled()||e.isReadonly()),B(`aria-label`,e.resolvedClearLabel())}}function Sl(i,n){if(i&1&&(_(0,`span`,14),X(1),D(),_(2,`span`,14),X(3),D()),i&2){let e=w();y(),fe(e.resolvedRetainedError()),y(2),fe(e.resolvedLoadingLabel()||e.resolvedLoadingAriaLabel())}}function Cl(i,n){if(i&1){let e=wt$1();_(0,`button`,15),te(`click`,function(){Be(e);let r=w();return Ve$1(r.retrySearch())}),xe(1,`bx-icon`,16),X(2),D()}if(i&2){let e=w();yP(e.retryConfig().buttonClass??``),R(`variant`,e.retryConfig().variant??`text`)(`color`,e.retryConfig().color??`primary`)(`outlined`,e.retryConfig().outlined??!1)(`disabled`,e.disabled()||e.isReadonly())(`loading`,e.isBusy()),B(`aria-label`,e.resolvedRetryAriaLabel()),y(2),un(``,e.resolvedRetryLabel(),` `)}}var kn=class i extends se{i18n=f(Se$1,{optional:!0});retryError=M(void 0);retrying=g(()=>this.retryError()!==void 0);resolvedClearLabel=g(()=>J(this.clearLabel(),this.i18n));resolvedLoadError=g(()=>J(this.loadError(),this.i18n));resolvedLoadingLabel=g(()=>J(this.loadingLabel(),this.i18n));resolvedLoadingAriaLabel=g(()=>J(this.loadingAriaLabel(),this.i18n));resolvedRetryLabel=g(()=>J(this.retryLabel(),this.i18n));resolvedRetryAriaLabel=g(()=>J(this.retryConfig().ariaLabel,this.i18n)||this.resolvedRetryLabel());resolvedRetainedError=g(()=>J(this.retryError()??this.loadError(),this.i18n));isBusy=g(()=>this.loading()||this.pending());showRetry=g(()=>!!this.loadError()||this.retrying());showStatus=g(()=>!!this.resolvedLoadError()||this.isBusy()&&(!!this.resolvedLoadingLabel()||this.showRetry()));searchDescribedBy=g(()=>`${this.describedBy()} ${this.controlId()}-search-status`);isCompact=g(()=>!!this.label()||this.compact());clearLabel=b(`Clear search`);autocomplete=b(`off`);loadError=b(void 0);loadingLabel=b(void 0);loadingAriaLabel=b(`Searching`);retryLabel=b(`Retry search`);retryConfig=b({});compact=b(!1);search=ze();retry=ze();composing=!1;constructor(){super(),ce(()=>{this.retrying()&&!this.loading()&&this.retryError.set(void 0)})}clear(){this.disabled()||this.isReadonly()||(this.retryError.set(void 0),this.updateValue(``),this.search.emit(``),this.focus())}retrySearch(){this.disabled()||this.isReadonly()||this.isBusy()||this.retrying()||!this.loadError()||(this.retryError.set(this.loadError()),this.focus(),this.retry.emit(this.internalValue()??``))}onInput(n){if(this.composing||this.disabled()||this.isReadonly())return;let e=n.target.value;this.retryError.set(void 0),this.updateValue(e),this.search.emit(e)}onCompositionStart(){this.composing=!0}onCompositionEnd(n){this.composing=!1,this.onInput(n)}onBlur(){this.markAsTouched()}static ɵfac=function(e){return new(e||i)};static ɵcmp=G({type:i,selectors:[[`bx-search-input`]],inputs:{clearLabel:[1,`clearLabel`],autocomplete:[1,`autocomplete`],loadError:[1,`loadError`],loadingLabel:[1,`loadingLabel`],loadingAriaLabel:[1,`loadingAriaLabel`],retryLabel:[1,`retryLabel`],retryConfig:[1,`retryConfig`],compact:[1,`compact`]},outputs:{search:`search`,retry:`retry`},features:[Cn$1],ngContentSelectors:hl,decls:17,vars:50,consts:[[`searchOverflow`,`bxTruncate`],[3,`control`,`label`,`tooltip`,`showLoadingIndicator`,`hint`,`hintEnd`,`hideRequiredMarker`,`subscriptSizing`,`forId`],[`bxSurface`,``,`bxTooltipTouch`,`longpress`,`placement`,`top`,1,`bx-search-input-wrapper`,3,`bxTooltip`],[`aria-hidden`,`true`,1,`bx-search-icon-left`],[3,`size`,`decorative`],[`name`,`search`,`size`,`16`],[`type`,`search`,`bxTruncate`,``,1,`bx-native-search-input`,3,`input`,`blur`,`compositionstart`,`compositionend`,`id`,`placeholder`,`required`,`readOnly`,`disabled`,`value`],[`type`,`button`,1,`bx-search-clear-btn`,3,`disabled`],[1,`bx-search-feedback`],[1,`bx-search-status`],[`role`,`status`,3,`id`],[`bx-button`,``,`type`,`button`,3,`variant`,`color`,`outlined`,`class`,`disabled`,`loading`],[`type`,`button`,1,`bx-search-clear-btn`,3,`click`,`disabled`],[`name`,`x`,`size`,`16`],[`aria-hidden`,`true`,1,`bx-search-status-reserve`],[`bx-button`,``,`type`,`button`,3,`click`,`variant`,`color`,`outlined`,`disabled`,`loading`],[`name`,`rotate-cw`,`size`,`16`]],template:function(e,t){if(e&1&&(Ae(ml),_(0,`bx-form-field`,1)(1,`div`,2),Ko$1(2,`bxTruncatedText`),_(3,`span`,3),j(4,vl,1,2,`bx-loading-spinner`,4)(5,yl,1,0,`bx-icon`,5),D(),_(6,`input`,6,0),te(`input`,function(o){return t.onInput(o)})(`blur`,function(){return t.onBlur()})(`compositionstart`,function(){return t.onCompositionStart()})(`compositionend`,function(o){return t.onCompositionEnd(o)}),D(),j(8,_l,2,2,`button`,7),D(),_(9,`div`,8)(10,`div`,9),j(11,Sl,4,2),_(12,`span`,10),X(13),D()(),j(14,Cl,3,9,`button`,11),D(),pe(15,0,fl),pe(16,1,xl),D()),e&2){let r=Tt$1(7);R(`control`,t.fieldControl)(`label`,t.label())(`tooltip`,t.tooltip())(`showLoadingIndicator`,!1)(`hint`,t.hint())(`hintEnd`,t.hintEnd())(`hideRequiredMarker`,t.resolvedHideRequiredMarker())(`subscriptSizing`,t.resolvedSubscriptSizing())(`forId`,t.controlId()),y(),ae(`is-compact`,t.isCompact())(`is-invalid`,t.showError())(`is-disabled`,t.disabled())(`is-readonly`,t.isReadonly())(`is-keyboard-focused`,t.keyboardFocused()),R(`bxTooltip`,Zo$1(2,46,r.text(),r.truncated(),t.resolvedTooltipOnTruncate())),y(3),F(t.isBusy()&&!t.showRetry()?4:5),y(2),R(`id`,t.controlId())(`placeholder`,t.resolvedPlaceholder())(`required`,t.effectiveRequired())(`readOnly`,t.isReadonly())(`disabled`,t.disabled())(`value`,t.internalValue()??``),B(`name`,t.name()||null)(`data-testid`,t.dataTestId())(`autocomplete`,t.autocomplete())(`aria-label`,t.ariaLabel())(`aria-labelledby`,t.ariaLabelledBy())(`aria-describedby`,t.searchDescribedBy())(`aria-busy`,t.isBusy())(`aria-invalid`,t.showError()),y(2),F(t.internalValue()&&!t.isReadonly()?8:-1),y(),ae(`has-status`,t.showStatus()),y(),ae(`cdk-visually-hidden`,!t.showStatus()),y(),F(t.showRetry()?11:-1),y(),ae(`bx-search-error`,!t.isBusy()&&!!t.resolvedLoadError()),R(`id`,t.controlId()+`-search-status`),y(),fe(t.isBusy()?t.resolvedLoadingLabel()||t.resolvedLoadingAriaLabel():t.resolvedLoadError()),y(),F(t.showRetry()?14:-1)}},dependencies:[Rt$1,U,Vt$1,Ml,me,qi,_o$1,Cl$1],styles:[`
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
}`]})};function Rt(i){let n=Number(i);return Number.isFinite(n)?Math.max(1,Math.floor(n)):1}var Nl=[`searchInput`];var Tl=[`origin`];var wl=[`valueOverflow`];var Ol=[`labelOverflow`];var Pn=class i extends se{bxA11yService=f(Le$1);ngZone=f(re);overlay=f(Rn);overlayContext=f(Zn$1,{optional:!0});i18n=f(Se$1,{optional:!0});scrollLockService=f(Dr);scrollLockId=Jt();debouncing=M(!1);searchRequest=M(!1);knownOptions=M([]);connectedOverlay=Nt$1(dF);searchInputRef=Nt$1(`searchInput`);originRef=Nt$1(`origin`,{read:K});hasSelection=g(()=>this.internalValue()!==null&&this.internalValue()!==void 0);showClear=g(()=>this.clearable()&&this.hasSelection()&&!this.isReadonly());resolvedClearLabel=g(()=>J(this.clearLabel(),this.i18n));resolvedClearTooltip=g(()=>J(this.clearTooltip()??this.clearLabel(),this.i18n));panelScrollStrategy=this.overlay.scrollStrategies.noop();isPanelAttached=M(!1);searchTerm=g(()=>this.searchValue());truncatedSelectionTooltip=g(()=>!this.resolvedTooltipOnTruncate()||this.isOpen()?``:mb(this.selectedOptionLabel()||this.resolvedPlaceholder(),this.valueOverflow()?.truncated()??!1)||mb(this.resolvedLabel(),this.labelOverflow()?.truncated()??!1));overlayPositions=[new vo$1({originX:`start`,originY:`bottom`},{overlayX:`start`,overlayY:`top`},0,4),new vo$1({originX:`start`,originY:`top`},{overlayX:`start`,overlayY:`bottom`},0,-4)];resolvedOptions=g(()=>this.options().map(n=>s(r({},n),{resolvedStr:J(n.label,this.i18n),resolvedGroup:J(n.group,this.i18n)})));filteredOptions=g(()=>{let n=this.searchTerm().trim().toLocaleLowerCase();return this.externalFiltering()||!n?this.resolvedOptions():this.resolvedOptions().filter(e=>e.resolvedStr.toLocaleLowerCase().includes(n))});selectedOptions=g(()=>this.knownOptions().filter(n=>this.isSelected(n.value)));selectedOptionLabel=g(()=>this.selectedOptions().map(n=>J(n.label,this.i18n)).join(`, `));isFloating=g(()=>this.isOpen()||this.value()!==null&&(!Array.isArray(this.value())||this.value().length>0)||this.resolvedFloatLabel()===`always`);resolvedSearchPlaceholder=g(()=>J(this.searchPlaceholder(),this.i18n));resolvedEmptyMessage=g(()=>J(this.emptyMessage(),this.i18n));triggerContext=g(()=>({$implicit:this.value(),labels:this.selectedOptions().map(n=>J(n.label,this.i18n))}));visibleTags=g(()=>this.selectedOptions().slice(0,this.visibleTagCount()));overflowTagLabel=g(()=>{let n=Math.max(0,this.selectedOptions().length-this.visibleTagCount());return J(this.tagOverflowText(),this.i18n,{count:n}).replaceAll(`{count}`,String(n))});overflowTagTooltip=g(()=>this.selectedOptions().slice(this.visibleTagCount()).map(n=>J(n.label,this.i18n)).join(`, `));resolvedLoadingAriaLabel=g(()=>J(this.loadingAriaLabel(),this.i18n));resolvedLoadingLabel=g(()=>J(this.loadingLabel(),this.i18n));valueOverflow=Nt$1(`valueOverflow`);labelOverflow=Nt$1(`labelOverflow`);isSearching=g(()=>this.debouncing()||this.searchRequest());isOpen=M(!1);clearable=b(!0);clearLabel=b(`Clear selection`);clearTooltip=b(void 0);selectionDisplay=b(`text`);tagConfig=b({});overflowTagConfig=b({});visibleTagCount=b(1,{transform:Rt});tagOverflowText=b(`+{count}`);options=b.required();compareWith=b(Object.is);isSearchable=b(!1);externalFiltering=b(!1);searchValue=pn(``);searchDebounce=b(300);searchPlaceholder=b(`Search...`);emptyMessage=b(`No results found.`);loadingLabel=b(void 0);loadingAriaLabel=b(`Loading`);hasMore=b(!1);loadError=b(void 0);loadMoreConfig=b({});loadMoreTemplate=b(void 0);panelClass=b(``);optionTemplate=b(void 0);triggerTemplate=b(void 0);search=ze();loadMore=ze();openedChange=ze();transition;selectionMotion;disconnectTheme;disconnectLighting;disconnectOrigin;transitionRevision=0;focusOnOpen=null;searchTimeout;typeaheadTimeout;typeaheadText=``;constructor(){super(),ce(()=>{let n=this.bxA11yService.isReducedMotion();this.selectionMotion?.update({reducedMotion:n})}),ce(()=>{this.searchRequest()&&!this.loading()&&!this.debouncing()&&this.searchRequest.set(!1)}),ce(()=>{let n=this.resolvedOptions(),e=W(this.knownOptions).filter(t=>this.isSelected(t.value)&&!n.some(r=>this.compareWith()(r.value,t.value)));this.knownOptions.set([...e,...n])}),ce(()=>{(this.disabled()||this.isReadonly())&&this.isOpen()&&this.close()}),f(Q).onDestroy(()=>{clearTimeout(this.searchTimeout),clearTimeout(this.typeaheadTimeout)})}ngOnDestroy(){++this.transitionRevision,this.onPanelDetach(),this.scrollLockService.enableScroll(this.scrollLockId)}toggleOpen(){this.disabled()||this.isReadonly()||(this.isOpen()?this.close():this.open())}open(){if(this.disabled()||this.isReadonly()||this.isOpen())return;++this.transitionRevision,this.isOpen.set(!0),this.openedChange.emit(!0),this.isPanelAttached.set(!0),this.scrollLockService.disableScroll(this.scrollLockId,{handleTouchInput:!0});let n=this.connectedOverlay()?.overlayRef?.overlayElement;n&&(n.inert=!1);let e=this.transition;e&&this.ngZone.runOutsideAngular(()=>e.enter()),this.connectedOverlay()?.overlayRef?.hasAttached()&&this.isSearchable()&&queueMicrotask(()=>this.searchInputRef()?.focus())}close(){let n=this.isOpen();this.isOpen.set(!1),this.scrollLockService.enableScroll(this.scrollLockId),n&&(this.openedChange.emit(!1),this.markAsTouched());let e=++this.transitionRevision,t=this.connectedOverlay()?.overlayRef?.overlayElement;t?.contains(t.ownerDocument.activeElement)&&this.originRef()?.nativeElement.focus({preventScroll:!0}),t&&(t.inert=!0);let r=this.transition;r&&!this.bxA11yService.isReducedMotion()?this.ngZone.runOutsideAngular(()=>r.exit()).then(()=>{e===this.transitionRevision&&!this.isOpen()&&this.detachPanel()}).catch(()=>{e===this.transitionRevision&&this.detachPanel()}):this.detachPanel()}onPanelAttach(n){let e=this.transitionRevision,t=this.originRef()?.nativeElement,r=n.overlayRef;t&&r?.hasAttached()&&(this.disconnectLighting?.(),this.disconnectLighting=dr(r.overlayElement,t),this.disconnectOrigin?.(),this.disconnectOrigin=this.ngZone.runOutsideAngular(()=>si$1(r,t))),queueMicrotask(()=>{let o=n.overlayRef,l=this.originRef()?.nativeElement;if(!o?.hasAttached()||!l||!this.isOpen()||e!==this.transitionRevision)return;this.disconnectTheme?.(),this.disconnectTheme=this.ngZone.runOutsideAngular(()=>Kn$1(l,o.overlayElement)),o.updatePosition();let g=o.overlayElement.querySelector(`[role="listbox"]`);if(this.selectionMotion?.destroy(),this.selectionMotion=g?this.ngZone.runOutsideAngular(()=>$y(g,{reducedMotion:this.bxA11yService.isReducedMotion()})):void 0,!this.bxA11yService.isReducedMotion()){this.transition?.destroy(),this.transition=this.ngZone.runOutsideAngular(()=>ri$1(l,o.overlayElement));let y=this.transition;this.ngZone.runOutsideAngular(()=>y.enter()).catch(()=>{e===this.transitionRevision&&(this.transition?.destroy(),this.transition=void 0)})}if(this.isSearchable())this.searchInputRef()?.focus();else{let y=this.panelItems();(y.find(w=>w.getAttribute(`aria-selected`)===`true`)??(this.focusOnOpen===`last`?y[y.length-1]:y[0]))?.focus()}this.focusOnOpen=null})}onPanelDetach(){this.selectionMotion?.destroy(),this.selectionMotion=void 0,this.transition?.destroy(),this.transition=void 0,this.disconnectTheme?.(),this.disconnectTheme=void 0,this.disconnectLighting?.(),this.disconnectLighting=void 0,this.disconnectOrigin?.(),this.disconnectOrigin=void 0}overlayPopoverLocation(n){return!!this.overlayContext?.useTopLayer||!!n.closest(`dialog, [role="dialog"], [role="alertdialog"], bx-modal, bx-modal-core, [popover]`)?`global`:null}refreshPanel(){this.transition?.refresh()}onTriggerKey(n){if(!(this.disabled()||this.isReadonly())){if(n.key===`Escape`||n.altKey&&n.key===`ArrowUp`){n.preventDefault(),this.close();return}[`ArrowDown`,`ArrowUp`,`Enter`,` `].includes(n.key)?(n.preventDefault(),this.focusOnOpen=n.key===`ArrowUp`?`last`:`first`,this.open()):n.key.length===1&&!n.ctrlKey&&!n.metaKey&&!n.altKey&&(this.open(),this.typeahead(n.key))}}onPanelKey(n){if(n.key===`Escape`||n.key===`Tab`||n.altKey&&n.key===`ArrowUp`){n.key!==`Tab`&&n.preventDefault(),n.stopPropagation(),this.close();return}let t=n.target.matches(`input,textarea`);if(t&&![`ArrowDown`,`ArrowUp`].includes(n.key))return;if(![`ArrowDown`,`ArrowUp`,`Home`,`End`].includes(n.key)){!t&&n.key.length===1&&n.key!==` `&&this.typeahead(n.key);return}let r=this.panelItems();if(!r.length)return;let o=r.indexOf(r[0].ownerDocument.activeElement),l=n.key===`Home`?0:n.key===`End`?r.length-1:n.key===`ArrowDown`?(o+1)%r.length:o<0?r.length-1:(o-1+r.length)%r.length;n.preventDefault(),r[l].focus()}onTriggerBlur(){this.isOpen()||this.markAsTouched()}onOutsideClick(n){let e=n.target;this.originRef()?.nativeElement.contains(e)||this.close()}clearSelectedValue(n){return this.disabled()||this.isReadonly()?!1:(this.updateValue(n),this.close(),this.markAsTouched(),this.focus({preventScroll:!0}),!0)}onSearchChange(n){clearTimeout(this.searchTimeout),this.debouncing.set(!0),this.searchTimeout=setTimeout(()=>{this.debouncing.set(!1),this.searchRequest.set(this.externalFiltering()),this.searchValue.set(n),this.search.emit(n)},this.searchDebounce())}selectionTagConfig(n){return r(r({},this.tagConfig()),n.tagConfig)}requestMore(n){this.loadMore.emit(r({},n))}detachPanel(){this.onPanelDetach(),this.isPanelAttached.set(!1),this.connectedOverlay()?.detachOverlay(),this.scrollLockService.enableScroll(this.scrollLockId)}typeahead(n){clearTimeout(this.typeaheadTimeout),this.typeaheadText+=n.toLocaleLowerCase(),this.typeaheadTimeout=setTimeout(()=>{this.typeaheadText=``},700),queueMicrotask(()=>this.panelItems().find(e=>e.textContent?.trim().toLocaleLowerCase().startsWith(this.typeaheadText))?.focus())}panelItems(){return Array.from(this.connectedOverlay()?.overlayRef?.overlayElement.querySelectorAll(`.bx-select-option:not(:disabled)`)??[])}static ɵfac=function(e){return new(e||i)};static ɵdir=Z({type:i,viewQuery:function(e,t){e&1&&Xt(t.connectedOverlay,dF,5)(t.searchInputRef,Nl,5)(t.originRef,Tl,5,K)(t.valueOverflow,wl,5)(t.labelOverflow,Ol,5),e&2&&ft(5)},inputs:{clearable:[1,`clearable`],clearLabel:[1,`clearLabel`],clearTooltip:[1,`clearTooltip`],selectionDisplay:[1,`selectionDisplay`],tagConfig:[1,`tagConfig`],overflowTagConfig:[1,`overflowTagConfig`],visibleTagCount:[1,`visibleTagCount`],tagOverflowText:[1,`tagOverflowText`],options:[1,`options`],compareWith:[1,`compareWith`],isSearchable:[1,`isSearchable`],externalFiltering:[1,`externalFiltering`],searchValue:[1,`searchValue`],searchDebounce:[1,`searchDebounce`],searchPlaceholder:[1,`searchPlaceholder`],emptyMessage:[1,`emptyMessage`],loadingLabel:[1,`loadingLabel`],loadingAriaLabel:[1,`loadingAriaLabel`],hasMore:[1,`hasMore`],loadError:[1,`loadError`],loadMoreConfig:[1,`loadMoreConfig`],loadMoreTemplate:[1,`loadMoreTemplate`],panelClass:[1,`panelClass`],optionTemplate:[1,`optionTemplate`],triggerTemplate:[1,`triggerTemplate`]},outputs:{searchValue:`searchValueChange`,search:`search`,loadMore:`loadMore`,openedChange:`openedChange`},features:[Cn$1]})};function kl(i,n){if(i&1&&(_(0,`span`,1),X(1),D()),i&2){let e=w();y(),fe(e.errorText())}}function Pl(i,n){if(i&1&&yt$1(0,2),i&2){let e=w();R(`ngTemplateOutlet`,n)(`ngTemplateOutletContext`,e.context())}}function Dl(i,n){i&1&&xe(0,`bx-icon`,5)}function Il(i,n){if(i&1){let e=wt$1();_(0,`button`,4),te(`click`,function(){Be(e);let r=w();return Ve$1(r.request.emit())}),j(1,Dl,1,0,`bx-icon`,5),X(2),D()}if(i&2){let e=w();yP(e.config().buttonClass??``),R(`variant`,e.config().variant??`text`)(`color`,e.config().color??`primary`)(`outlined`,e.config().outlined??!1)(`disabled`,e.disabled())(`loading`,e.loading()),B(`aria-label`,e.accessibleLabel()),y(),F(e.retry()?1:-1),y(),un(` `,e.text(),` `)}}var Lt=class i{i18n=f(Se$1,{optional:!0});text=g(()=>{let n=this.config(),e=J(n.text??`Load more`,this.i18n),t=n.retryText,r=J(t,this.i18n),o=!!t&&(!So$1(t)||r!==t.key);return this.loading()?J(n.loadingText??`Loading`,this.i18n):this.retry()&&o?r:e});accessibleLabel=g(()=>J(this.config().ariaLabel,this.i18n)||this.text());errorText=g(()=>J(this.error(),this.i18n));context=g(()=>({$implicit:this.text(),loading:this.loading(),disabled:this.disabled()||this.loading(),request:()=>this.request.emit()}));retry=b(!1);visible=b(!1);loading=b(!1);disabled=b(!1);error=b(void 0);config=b({});buttonTemplate=b(void 0);request=ze();static ɵfac=function(e){return new(e||i)};static ɵcmp=G({type:i,selectors:[[`bx-load-more-footer`]],hostVars:2,hostBindings:function(e,t){e&2&&(Ba$1(`hidden`,!t.visible()),B(`aria-busy`,t.loading()?`true`:null))},inputs:{retry:[1,`retry`],visible:[1,`visible`],loading:[1,`loading`],disabled:[1,`disabled`],error:[1,`error`],config:[1,`config`],buttonTemplate:[1,`buttonTemplate`]},outputs:{request:`request`},decls:4,vars:4,consts:[[1,`bx-load-more-footer`],[`role`,`status`,1,`bx-load-more-error`],[3,`ngTemplateOutlet`,`ngTemplateOutletContext`],[`bx-button`,``,`type`,`button`,3,`variant`,`color`,`outlined`,`class`,`disabled`,`loading`],[`bx-button`,``,`type`,`button`,3,`click`,`variant`,`color`,`outlined`,`disabled`,`loading`],[`name`,`rotate-cw`,`size`,`16`]],template:function(e,t){if(e&1&&(_(0,`div`,0),j(1,kl,2,1,`span`,1),j(2,Pl,1,2,`ng-container`,2)(3,Il,3,10,`button`,3),D()),e&2){let r;yP(t.config().footerClass??``),y(),F(t.errorText()?1:-1),y(),F((r=t.buttonTemplate())?2:3,r)}},dependencies:[me,sr,Vt$1],styles:[`
[_nghost-%COMP%] {
  display: block;
  inline-size: 100%;
  box-sizing: border-box;
}
[hidden][_nghost-%COMP%] {
  display: none;
}
.bx-load-more-footer[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: left;
  gap: var(--%NS%bx-space-2, 0.5rem);
  padding: var(--%NS%bx-load-more-padding, var(--%NS%bx-space-2, 0.5rem) 0);
}
.bx-load-more-error[_ngcontent-%COMP%] {
  flex-basis: 100%;
  color: var(--%NS%bx-text-danger);
  font-size: 0.875rem;
  overflow-wrap: anywhere;
}`]})};var Le=class i{nativeElement=f(K).nativeElement;viewContainerRef=f(Bt);ngZone=f(re);destroyRef=f(Q);overflowing=M(!1);requested=M(!1);retrying=M(!1);keepVisible=M(!1);actionVisible=g(()=>!this.loadMoreSuppressed()&&(this.loadMoreHasMore()||!!this.loadMoreError()||this.keepVisible()&&this.loadMoreLoading())&&(this.loadMoreConfig().buttonMode===`always`||!this.overflowing()||this.keepVisible()||!!this.loadMoreError()));loadMoreHasMore=b(!1);loadMoreLoading=b(!1);loadMoreSuppressed=b(!1);loadMoreDisabled=b(!1);loadMoreError=b(void 0);loadMoreConfig=b({});loadMoreTemplate=b(void 0);loadMoreRevision=b(void 0);loadMore=ze();footer;wasLoading=!1;previousRevision;constructor(){Ze(()=>this.mount()),Gn$1(()=>{let n=this.loadMoreLoading(),e=this.loadMoreRevision();(this.wasLoading&&!n||!n&&this.previousRevision!==e)&&this.complete(),this.wasLoading=n,this.previousRevision=e,this.updateFooter()})}complete(){this.requested.set(!1),this.retrying.set(!1),this.keepVisible.set(!1)}request(n=`button`){this.canRequest(n)&&(this.requested.set(!0),this.retrying.set(!!this.loadMoreError()),this.keepVisible.set(n!==`scroll`),this.loadMore.emit({source:this.loadMoreError()?`retry`:n}))}canRequest(n){return!this.loadMoreSuppressed()&&(this.loadMoreHasMore()||!!this.loadMoreError())&&!this.loadMoreDisabled()&&!this.loadMoreLoading()&&!this.requested()&&(n!==`scroll`||!this.loadMoreError())}mount(){this.footer=this.viewContainerRef.createComponent(Lt),this.nativeElement.append(this.footer.location.nativeElement),this.footer.instance.request.subscribe(()=>this.request()),this.ngZone.runOutsideAngular(()=>{let n=GI(this.nativeElement,this.nativeElement,()=>{let e=this.footer?.location.nativeElement?.offsetHeight??0;WI(this.nativeElement,this.nativeElement,e).distance<=(this.loadMoreConfig().threshold??32)&&this.canRequest(`scroll`)&&this.ngZone.run(()=>this.request(`scroll`))},()=>this.measure());this.destroyRef.onDestroy(()=>{n(),this.footer?.destroy()})}),this.measure(),this.updateFooter()}measure(){let n=this.footer?.location.nativeElement?.offsetHeight??0,{overflowing:e}=WI(this.nativeElement,this.nativeElement,n);e!==this.overflowing()&&this.ngZone.run(()=>this.overflowing.set(e))}updateFooter(){if(!this.footer)return;let n=this.actionVisible(),e=this.footer.location.nativeElement;!n&&e.contains(this.nativeElement.ownerDocument.activeElement)&&(this.nativeElement.hasAttribute(`tabindex`)||this.nativeElement.setAttribute(`tabindex`,`-1`),this.nativeElement.focus({preventScroll:!0})),this.footer.setInput(`visible`,n),this.footer.setInput(`loading`,this.loadMoreLoading()),this.footer.setInput(`disabled`,this.loadMoreDisabled()||this.requested()&&!this.loadMoreLoading()),this.footer.setInput(`retry`,!!this.loadMoreError()||this.retrying()),this.footer.setInput(`error`,this.loadMoreError()),this.footer.setInput(`config`,this.loadMoreConfig()),this.footer.setInput(`buttonTemplate`,this.loadMoreTemplate())}static ɵfac=function(e){return new(e||i)};static ɵdir=Z({type:i,selectors:[[``,`bxLoadMore`,``]],inputs:{loadMoreHasMore:[1,`loadMoreHasMore`],loadMoreLoading:[1,`loadMoreLoading`],loadMoreSuppressed:[1,`loadMoreSuppressed`],loadMoreDisabled:[1,`loadMoreDisabled`],loadMoreError:[1,`loadMoreError`],loadMoreConfig:[1,`loadMoreConfig`],loadMoreTemplate:[1,`loadMoreTemplate`],loadMoreRevision:[1,`loadMoreRevision`]},outputs:{loadMore:`loadMore`},exportAs:[`bxLoadMore`]})};var Rl=[[[``,`bxSuffix`,``]],[[`bx-error`]],[[`bx-hint`]]];var Ll=[`[bxSuffix]`,`bx-error`,`bx-hint`];var Al=[`ngProjectAs`,`bx-error`,5,[`bx-error`]];var Fl=[`ngProjectAs`,`bx-hint`,5,[`bx-hint`]];var Vl=(i,n,e)=>({$implicit:i,selected:n,index:e});var vo=(i,n)=>n.value;function zl(i,n){i&1&&(_(0,`span`,20),X(1,`*`),D())}function Bl(i,n){if(i&1&&(_(0,`span`,10)(1,`span`,19,2),X(3),D(),j(4,zl,2,0,`span`,20),D()),i&2){let e=w();y(),R(`bxTruncate`,!0),y(2),fe(e.resolvedLabel()),y(),F(e.required()&&!e.resolvedHideRequiredMarker()?4:-1)}}function ql(i,n){if(i&1&&yt$1(0,12),i&2){let e=w();R(`ngTemplateOutlet`,n)(`ngTemplateOutletContext`,e.triggerContext())}}function Hl(i,n){if(i&1&&xe(0,`bx-tag`,21),i&2){let e=n.$implicit,t=w(2);R(`text`,e.label)(`config`,t.selectionTagConfig(e))(`disabled`,t.disabled()||!!e.disabled)(`focusable`,!1)(`tooltipOnTruncate`,t.resolvedTooltipOnTruncate()?void 0:!1)}}function Wl(i,n){if(i&1&&xe(0,`bx-tag`,22),i&2){let e=w(2);R(`text`,e.overflowTagLabel())(`config`,e.overflowTagConfig())(`tooltip`,e.overflowTagTooltip())(`focusable`,!1)(`tooltipOnTruncate`,e.resolvedTooltipOnTruncate()?void 0:!1)}}function jl(i,n){if(i&1&&(_(0,`span`,13),$t(1,Hl,1,5,`bx-tag`,21,vo),j(3,Wl,1,5,`bx-tag`,22),D()),i&2){let e=w();y(),Wt(e.visibleTags()),y(2),F(e.selectedOptions().length>e.visibleTagCount()?3:-1)}}function $l(i,n){if(i&1&&X(0),i&2){let e=w();un(` `,e.selectedOptionLabel()||(e.isFloating()||!e.label()?e.resolvedPlaceholder():``),` `)}}function Kl(i,n){i&1&&xe(0,`bx-loading-spinner`,15),i&2&&R(`size`,16)(`decorative`,!0)}function Zl(i,n){i&1&&xe(0,`bx-icon`,16)}function Gl(i,n){if(i&1){let e=wt$1();_(0,`button`,23),te(`click`,function(){Be(e);let r=w();return Ve$1(r.clearSelection())}),xe(1,`bx-icon`,24),D()}if(i&2){let e=w();R(`surfaceEffects`,!1)(`disabled`,e.disabled())(`bxTooltip`,e.resolvedClearTooltip()),B(`aria-label`,e.resolvedClearLabel())}}function Xl(i,n){if(i&1){let e=wt$1();_(0,`div`,27)(1,`bx-search-input`,32,5),te(`search`,function(r){Be(e);let o=w(3);return Ve$1(o.onSearchChange(r))})(`keydown.enter`,function(r){return r.preventDefault()}),D()()}if(i&2){let e=w(3);y(),R(`value`,e.searchValue())(`compact`,!0)(`placeholder`,e.resolvedSearchPlaceholder())(`ariaLabel`,e.resolvedSearchPlaceholder())}}function Ul(i,n){if(i&1&&(_(0,`div`,33),X(1),D()),i&2){let e=w(),t=e.$implicit,r=e.$index,o=w(3);R(`id`,o.controlId()+`-group-`+r),y(),fe(t.resolvedGroup)}}function Yl(i,n){i&1&&xe(0,`bx-icon`,36)}function Ql(i,n){if(i&1&&xe(0,`bx-icon`,37),i&2){let e=w().$implicit;R(`name`,e.icon)}}function Jl(i,n){if(i&1&&yt$1(0,12),i&2){let e=w(),t=e.$implicit,r=e.$index,o=w(3);R(`ngTemplateOutlet`,n)(`ngTemplateOutletContext`,qP(2,Vl,t,o.isSelected(t.value),r))}}function es(i,n){if(i&1&&(_(0,`span`),X(1),D()),i&2){let e=w().$implicit;y(),fe(e.resolvedStr)}}function ns(i,n){if(i&1){let e=wt$1();j(0,Ul,2,2,`div`,33),_(1,`button`,34),te(`click`,function(){let r=Be(e).$implicit,o=w(3);return Ve$1(o.selectOption(r))}),_(2,`span`,35),j(3,Yl,1,0,`bx-icon`,36),D(),j(4,Ql,1,1,`bx-icon`,37),j(5,Jl,1,6,`ng-container`,12)(6,es,2,1,`span`),D()}if(i&2){let e,t=n.$implicit,r=n.$index,o=w(3);F(t.resolvedGroup&&(r===0||o.filteredOptions()[r-1].resolvedGroup!==t.resolvedGroup)?0:-1),y(),R(`disabled`,t.disabled||t.groupDisabled||!1),B(`aria-selected`,o.isSelected(t.value)),y(2),F(o.isSelected(t.value)?3:-1),y(),F(t.icon?4:-1),y(),F((e=o.optionTemplate())?5:6,e)}}function ts(i,n){if(i&1&&(_(0,`div`,38),X(1),D()),i&2){let e=w(4);y(),fe(e.resolvedEmptyMessage())}}function is(i,n){if(i&1&&j(0,ts,2,1,`div`,38),i&2){let e=w(3);F(e.loading()?-1:0)}}function rs(i,n){if(i&1&&(_(0,`span`),X(1),D()),i&2){let e=w(4);y(),fe(e.resolvedLoadingLabel())}}function os(i,n){i&1&&xe(0,`bx-loading-spinner`,15),i&2&&R(`size`,20)(`decorative`,!0)}function as(i,n){if(i&1&&(_(0,`div`,30),j(1,rs,2,1,`span`)(2,os,1,2,`bx-loading-spinner`,15),D()),i&2){let e=w(3);B(`aria-label`,e.resolvedLoadingLabel()||e.resolvedLoadingAriaLabel()),y(),F(e.resolvedLoadingLabel()?1:2)}}function ls(i,n){if(i&1&&(_(0,`div`,31),xe(1,`bx-loading-indicator`,39),D()),i&2){let e=w(3);y(),R(`size`,16)(`label`,e.loadingLabel()??e.loadingAriaLabel())}}function ss(i,n){if(i&1){let e=wt$1();_(0,`div`,26),te(`keydown`,function(r){Be(e);let o=w(2);return Ve$1(o.onPanelKey(r))}),j(1,Xl,3,4,`div`,27),_(2,`div`,28,4),te(`loadMore`,function(r){Be(e);let o=w(2);return Ve$1(o.requestMore(r))}),_(4,`div`,29),$t(5,ns,7,6,null,null,vo,!1,is,1,1),D(),j(8,as,3,2,`div`,30)(9,ls,2,2,`div`,31),D()()}if(i&2){let e=Tt$1(3),t=w(2);yP(t.panelClass()),R(`bxSurfaceInteractive`,!1),y(),F(t.isSearchable()?1:-1),y(),R(`loadMoreHasMore`,t.hasMore())(`loadMoreSuppressed`,t.isSearching())(`loadMoreLoading`,t.loading())(`loadMoreDisabled`,t.disabled()||t.isReadonly())(`loadMoreError`,t.loadError())(`loadMoreConfig`,t.loadMoreConfig())(`loadMoreTemplate`,t.loadMoreTemplate())(`loadMoreRevision`,t.options()),y(2),R(`hidden`,t.isSearching())(`id`,t.controlId()+`-options`),B(`aria-label`,t.ariaLabel()||t.resolvedLabel()),y(),Wt(t.filteredOptions()),y(3),F(t.isSearching()?8:t.loading()&&!e.actionVisible()?9:-1)}}function ds(i,n){if(i&1){let e=wt$1();Pa$1(0,ss,10,17,`ng-template`,25,3,kr),te(`overlayOutsideClick`,function(r){Be(e);let o=w();return Ve$1(o.onOutsideClick(r))})(`attach`,function(){Be(e);let r=Tt$1(1),o=w();return Ve$1(o.onPanelAttach(r))})(`detach`,function(){Be(e);let r=w();return Ve$1(r.onPanelDetach())})(`positionChange`,function(){Be(e);let r=w();return Ve$1(r.refreshPanel())})}if(i&2){let e=w(),t=Tt$1(3);R(`cdkConnectedOverlayOrigin`,t)(`cdkConnectedOverlayOpen`,!0)(`cdkConnectedOverlayPositions`,e.overlayPositions)(`cdkConnectedOverlayHasBackdrop`,!1)(`cdkConnectedOverlayPush`,!0)(`cdkConnectedOverlayViewportMargin`,8)(`cdkConnectedOverlayScrollStrategy`,e.panelScrollStrategy)(`cdkConnectedOverlayUsePopover`,e.overlayPopoverLocation(t.elementRef.nativeElement))(`cdkConnectedOverlayWidth`,t.elementRef.nativeElement.offsetWidth)}}var At=class i extends Pn{selectionChange=ze();clearSelection(){this.clearSelectedValue(null)&&this.selectionChange.emit({value:null,source:`clear`})}isSelected(n){let e=this.internalValue();return e!==null&&this.compareWith()(e,n)}selectOption(n){n.disabled||n.groupDisabled||this.disabled()||this.isReadonly()||(this.updateValue(n.value),this.selectionChange.emit({value:n.value,source:`user`}),this.close())}static ɵfac=(()=>{let n;return function(t){return(n||(n=Wo$1(i)))(t||i)}})();static ɵcmp=G({type:i,selectors:[[`bx-select`]],outputs:{selectionChange:`selectionChange`},features:[Cn$1],ngContentSelectors:Ll,decls:19,vars:47,consts:[[`origin`,`cdkOverlayOrigin`],[`valueOverflow`,`bxTruncate`],[`labelOverflow`,`bxTruncate`],[`panelOverlay`,`cdkConnectedOverlay`],[`pagination`,`bxLoadMore`],[`searchInput`,``],[3,`control`,`inline`,`tooltip`,`showLoadingIndicator`,`hint`,`hintEnd`,`subscriptSizing`,`forId`],[1,`bx-select-control`],[`type`,`button`,`role`,`combobox`,`aria-haspopup`,`listbox`,`cdkOverlayOrigin`,``,`bxSurface`,``,1,`bx-select-trigger`,3,`click`,`keydown`,`blur`,`bxTooltip`,`bxTooltipHover`,`bxTooltipTouch`,`id`,`disabled`],[1,`bx-select-container`],[1,`bx-floating-label`],[1,`bx-select-value`,3,`bxTruncate`],[3,`ngTemplateOutlet`,`ngTemplateOutletContext`],[1,`bx-selected-tags`],[`aria-hidden`,`true`,1,`bx-select-caret`],[3,`size`,`decorative`],[`name`,`chevron-down`,`size`,`16`],[`bx-button`,``,`type`,`button`,`variant`,`text`,1,`bx-select-clear`,3,`surfaceEffects`,`disabled`,`bxTooltip`],[`cdkConnectedOverlay`,``,3,`cdkConnectedOverlayOrigin`,`cdkConnectedOverlayOpen`,`cdkConnectedOverlayPositions`,`cdkConnectedOverlayHasBackdrop`,`cdkConnectedOverlayPush`,`cdkConnectedOverlayViewportMargin`,`cdkConnectedOverlayScrollStrategy`,`cdkConnectedOverlayUsePopover`,`cdkConnectedOverlayWidth`],[3,`bxTruncate`],[`aria-hidden`,`true`,1,`bx-field-required`],[3,`text`,`config`,`disabled`,`focusable`,`tooltipOnTruncate`],[1,`bx-overflow-tag`,3,`text`,`config`,`tooltip`,`focusable`,`tooltipOnTruncate`],[`bx-button`,``,`type`,`button`,`variant`,`text`,1,`bx-select-clear`,3,`click`,`surfaceEffects`,`disabled`,`bxTooltip`],[`name`,`x`,`size`,`16`],[`cdkConnectedOverlay`,``,3,`overlayOutsideClick`,`attach`,`detach`,`positionChange`,`cdkConnectedOverlayOrigin`,`cdkConnectedOverlayOpen`,`cdkConnectedOverlayPositions`,`cdkConnectedOverlayHasBackdrop`,`cdkConnectedOverlayPush`,`cdkConnectedOverlayViewportMargin`,`cdkConnectedOverlayScrollStrategy`,`cdkConnectedOverlayUsePopover`,`cdkConnectedOverlayWidth`],[`bxSurface`,``,`data-bx-surface`,`glass`,`tabindex`,`-1`,1,`bx-select-panel`,3,`keydown`,`bxSurfaceInteractive`],[1,`bx-select-search-container`],[`bxLoadMore`,``,1,`bx-select-menu-container`,3,`loadMore`,`loadMoreHasMore`,`loadMoreSuppressed`,`loadMoreLoading`,`loadMoreDisabled`,`loadMoreError`,`loadMoreConfig`,`loadMoreTemplate`,`loadMoreRevision`],[`role`,`listbox`,3,`hidden`,`id`],[`role`,`status`,1,`bx-select-search-state`],[1,`bx-select-loading`],[3,`search`,`keydown.enter`,`value`,`compact`,`placeholder`,`ariaLabel`],[1,`bx-select-group`,3,`id`],[`type`,`button`,`role`,`option`,`tabindex`,`-1`,1,`bx-select-option`,3,`click`,`disabled`],[`aria-hidden`,`true`,1,`bx-select-check-placeholder`],[`name`,`check`,`size`,`16`],[`size`,`16`,3,`name`],[`role`,`status`,1,`bx-select-empty`],[3,`size`,`label`]],template:function(e,t){if(e&1&&(Ae(Rl),_(0,`bx-form-field`,6)(1,`div`,7)(2,`button`,8,0),te(`click`,function(){return t.toggleOpen()})(`keydown`,function(o){return t.onTriggerKey(o)})(`blur`,function(){return t.onTriggerBlur()}),_(4,`div`,9),j(5,Bl,5,3,`span`,10),_(6,`span`,11,1),j(8,ql,1,2,`ng-container`,12)(9,jl,4,1,`span`,13)(10,$l,1,1),D()(),pe(11),_(12,`span`,14),j(13,Kl,1,2,`bx-loading-spinner`,15)(14,Zl,1,0,`bx-icon`,16),D()(),j(15,Gl,2,4,`button`,17),D(),j(16,ds,2,9,null,18),pe(17,1,Al),pe(18,2,Fl),D()),e&2){let r;R(`control`,t.fieldControl)(`inline`,!0)(`tooltip`,t.tooltip())(`showLoadingIndicator`,!1)(`hint`,t.hint())(`hintEnd`,t.hintEnd())(`subscriptSizing`,t.resolvedSubscriptSizing())(`forId`,t.controlId()),y(),ae(`has-clear`,t.showClear()),y(),ae(`has-label`,!!t.label())(`is-invalid`,t.showError())(`is-outline`,t.resolvedAppearance()===`outline`)(`is-open`,t.isOpen())(`is-floating`,t.isFloating())(`is-readonly`,t.isReadonly())(`is-keyboard-focused`,t.keyboardFocused()),R(`bxTooltip`,t.resolvedTooltipOnTruncate()?t.selectionDisplay()===`tags`?t.selectedOptionLabel():t.truncatedSelectionTooltip():``)(`bxTooltipHover`,t.selectionDisplay()!==`tags`)(`bxTooltipTouch`,t.selectionDisplay()===`tags`?`none`:`longpress`)(`id`,t.controlId())(`disabled`,t.disabled()),B(`data-testid`,t.dataTestId())(`aria-label`,t.ariaLabel()||t.resolvedLabel())(`aria-labelledby`,t.ariaLabelledBy())(`aria-describedby`,t.describedBy())(`aria-invalid`,t.showError())(`aria-required`,t.required())(`aria-readonly`,t.isReadonly())(`aria-busy`,t.loading()||t.pending()||t.isSearching())(`aria-expanded`,t.isOpen())(`aria-controls`,t.isPanelAttached()?t.controlId()+`-options`:null),y(3),F(t.label()?5:-1),y(),ae(`is-placeholder`,!t.selectedOptionLabel()),R(`bxTruncate`,!(t.selectionDisplay()===`tags`&&t.selectedOptions().length)&&!t.triggerTemplate()),y(2),F((r=t.triggerTemplate())?8:t.selectionDisplay()===`tags`&&t.selectedOptions().length?9:10,r),y(5),F(t.loading()||t.pending()||t.isSearching()?13:14),y(2),F(t.showClear()?15:-1),y(),F(t.isPanelAttached()?16:-1)}},dependencies:[Rt$1,uF,dF,hy,U,me,Vt$1,kn,Le,sr,Eb,Ml,sT,qi,_o$1],styles:[`
[_nghost-%COMP%] {
  display: block;
  width: 100%;
}
.bx-select-trigger[_ngcontent-%COMP%] {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-block-size: 3.85rem;
  box-sizing: border-box;
  background-color: var(--%NS%bx-bg-neutral);
  border-radius: var(--%NS%bx-rounded-sm, 0.25rem) var(--%NS%bx-rounded-sm, 0.25rem) 0 0;
  border: none;
  border-bottom: var(--%NS%bx-border-width, 1px) var(--%NS%bx-border-style, solid) var(--%NS%bx-border-strong);
  padding: 0;
  padding-inline-end: var(--%NS%bx-space-3, 0.75rem);
  cursor: pointer;
  text-align: left;
  font-family: inherit;
  outline: none;
}
.bx-select-trigger[_ngcontent-%COMP%]:hover:not(:disabled, .is-readonly) {
  background-color: var(--%NS%bx-bg-neutral-hover);
}
.bx-select-trigger[_ngcontent-%COMP%]:disabled {
  background-color: var(--%NS%bx-bg-element);
  opacity: 0.7;
  border-bottom-style: dotted;
  cursor: not-allowed;
}
.bx-select-trigger.is-readonly[_ngcontent-%COMP%] {
  cursor: default;
}
.bx-select-trigger[_ngcontent-%COMP%]::after {
  content: "";
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 2px;
  background-color: var(--%NS%bx-primary);
  transform: scaleX(0);
  transition: transform 0.2s linear(0, 0.18 12%, 0.58 32%, 0.87 56%, 0.98 78%, 1);
  transform-origin: center;
  z-index: 2;
}
.bx-select-trigger.is-open[_ngcontent-%COMP%]::after, 
.bx-select-trigger[_ngcontent-%COMP%]:focus-visible:not(:disabled)::after {
  transform: scaleX(1);
}
.bx-select-trigger.is-invalid[_ngcontent-%COMP%] {
  border-bottom-color: var(--%NS%bx-border-danger);
}
.bx-select-trigger.is-invalid[_ngcontent-%COMP%]::after {
  background-color: var(--%NS%bx-border-danger);
  transform: scaleX(1);
}
.bx-select-container[_ngcontent-%COMP%] {
  flex: 1;
  min-width: 0;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.bx-select-value[_ngcontent-%COMP%] {
  width: 100%;
  box-sizing: border-box;
  padding: var(--%NS%bx-space-6, 1.5rem) 0 var(--%NS%bx-space-2, 0.5rem) var(--%NS%bx-space-3, 0.75rem);
  min-block-size: 3.85rem;
  display: flex;
  align-items: center;
  font-size: 1rem;
  color: var(--%NS%bx-text-heading);
  line-height: 1.4;
  z-index: 1;
}
.bx-select-value.is-placeholder[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-secondary);
}
.bx-floating-label[_ngcontent-%COMP%] {
  display: flex;
  align-items: baseline;
  position: absolute;
  left: var(--%NS%bx-space-3, 0.75rem);
  right: 0;
  min-inline-size: 0;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1rem;
  color: var(--%NS%bx-text-secondary);
  pointer-events: none;
  z-index: 2;
  transition:
    top 0.2s linear(0, 0.18 12%, 0.58 32%, 0.87 56%, 0.98 78%, 1),
    transform 0.2s linear(0, 0.18 12%, 0.58 32%, 0.87 56%, 0.98 78%, 1),
    font-size 0.2s linear(0, 0.18 12%, 0.58 32%, 0.87 56%, 0.98 78%, 1),
    color 0.15s ease;
}
.bx-select-trigger.is-floating[_ngcontent-%COMP%]   .bx-floating-label[_ngcontent-%COMP%] {
  top: var(--%NS%bx-space-2, 0.5rem);
  transform: translateY(0);
  font-size: 0.75rem;
  font-weight: 500;
}
.bx-select-trigger.is-floating.is-open[_ngcontent-%COMP%]   .bx-floating-label[_ngcontent-%COMP%], 
.bx-select-trigger.is-floating[_ngcontent-%COMP%]:focus-visible:not(.is-readonly)   .bx-floating-label[_ngcontent-%COMP%] {
  color: var(--%NS%bx-primary);
}
.bx-select-trigger.is-invalid[_ngcontent-%COMP%]   .bx-floating-label[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-danger) !important;
}
.bx-field-required[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-secondary);
  margin-left: 0.125rem;
}
.bx-select-caret[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  inline-size: var(--%NS%bx-space-4, 1rem);
  block-size: var(--%NS%bx-space-4, 1rem);
  margin-inline-start: var(--%NS%bx-space-2, 0.5rem);
  color: var(--%NS%bx-text-secondary);
  transition: transform 0.2s ease;
  transform-origin: center;
}
.is-open[_ngcontent-%COMP%]   .bx-select-caret[_ngcontent-%COMP%] {
  transform: rotate(180deg);
}
.bx-select-panel[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  min-width: 100%;
  width: 100%;
  max-width: 100%;
  background-color: var(--%NS%bx-glass-surface, var(--%NS%bx-bg-surface));
  border: var(--%NS%bx-border-width, 1px) var(--%NS%bx-border-style, solid) var(--%NS%bx-glass-edge, var(--%NS%bx-border-default));
  border-radius: var(--%NS%bx-rounded-lg, 0.75rem);
  box-shadow: var(--%NS%bx-shadow-sm, 0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1));
  overflow: hidden;
  max-height: 18rem;
}
.bx-select-search-container[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  padding: var(--%NS%bx-space-1, 0.25rem);
  flex-shrink: 0;
  border-bottom: var(--%NS%bx-border-width, 1px) var(--%NS%bx-border-style, solid) var(--%NS%bx-border-subtle);
}
.bx-select-menu-container[_ngcontent-%COMP%] {
  min-height: 0;
  overflow: hidden auto;
  overscroll-behavior: contain;
  padding: var(--%NS%bx-space-1, 0.25rem);
}
.bx-select-menu-container[_ngcontent-%COMP%]::-webkit-scrollbar {
  width: 6px;
}
.bx-select-menu-container[_ngcontent-%COMP%]::-webkit-scrollbar-track {
  background: var(--%NS%bx-scroll-bg);
}
.bx-select-menu-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {
  background: var(--%NS%bx-scroll-thumb);
  border-radius: var(--%NS%bx-rounded-pill, 9999px);
}
.bx-select-menu-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {
  background: var(--%NS%bx-scroll-thumb-hover);
}
.bx-select-option[_ngcontent-%COMP%] {
  display: flex;
  width: 100%;
  padding: var(--%NS%bx-space-2, 0.5rem) var(--%NS%bx-space-3, 0.75rem);
  border: 0;
  border-radius: var(--%NS%bx-rounded-sm, 0.25rem);
  background: transparent;
  color: var(--%NS%bx-text-primary);
  font: inherit;
  font-size: 0.875rem;
  line-height: 1.4;
  text-align: start;
  cursor: pointer;
}
.bx-select-option[aria-selected=true][_ngcontent-%COMP%] {
  background: var(--%NS%bx-accent-subtle);
  color: var(--%NS%bx-text-accent);
}
.bx-select-option[_ngcontent-%COMP%]:hover:not(:disabled), 
.bx-select-option[_ngcontent-%COMP%]:active:not(:disabled) {
  background: var(--%NS%bx-bg-element-hover);
}
.bx-select-option[aria-selected=true][_ngcontent-%COMP%]:hover:not(:disabled) {
  background: var(--%NS%bx-accent-subtle);
}
.bx-select-option[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--%NS%bx-border-accent);
  outline-offset: -2px;
}
.bx-select-option[_ngcontent-%COMP%]:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}
.bx-select-item-inner[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: var(--%NS%bx-space-2, 0.5rem);
  width: 100%;
}
.bx-select-check-placeholder[_ngcontent-%COMP%] {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--%NS%bx-text-accent);
}
.bx-select-empty[_ngcontent-%COMP%] {
  padding: var(--%NS%bx-space-3, 0.75rem);
  text-align: center;
  color: var(--%NS%bx-text-secondary);
  font-size: 0.875rem;
  font-style: italic;
}
.bx-select-trigger[data-bx-surface][_ngcontent-%COMP%] {
  --%NS%bx-glass-surface: var(--%NS%bx-bg-neutral);
  --%NS%bx-glass-shadow: none;
}
.bx-select-trigger[data-bx-surface].is-invalid[_ngcontent-%COMP%] {
  --%NS%bx-glass-edge: var(--%NS%bx-border-danger);
}
.bx-select-panel[data-bx-surface][_ngcontent-%COMP%] {
  --%NS%bx-glass-min-opacity: var(--%NS%bx-dropdown-min-opacity, 0);
  --%NS%bx-glass-opacity: var(--%NS%bx-dropdown-opacity, min(1, var(--%NS%bx-glass-material-opacity, 0.5) + 0.18));
  --%NS%bx-glass-radius: var(--%NS%bx-rounded-lg, 0.75rem);
  --%NS%bx-glass-surface: var(--%NS%bx-select-panel-background, var(--%NS%bx-bg-surface));
  --%NS%bx-glass-text: var(--%NS%bx-text-primary);
  --%NS%bx-glass-edge: var(--%NS%bx-border-default);
  --%NS%bx-glass-shadow: var(--%NS%bx-shadow-sm, 0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1));
}
.bx-select-trigger[data-bx-surface][_ngcontent-%COMP%] {
  --%NS%bx-glass-surface: var(--%NS%bx-bg-neutral);
  --%NS%bx-glass-min-opacity: 0.45;
  --%NS%bx-glass-edge: var(--%NS%bx-border-default);
  --%NS%bx-glass-shadow: none;
  border: var(--%NS%bx-border-width, 1px) var(--%NS%bx-border-style, solid) var(--%NS%bx-glass-edge);
  border-radius: var(--%NS%bx-rounded-lg, 0.75rem);
}
.bx-select-trigger[data-bx-surface][_ngcontent-%COMP%]::after {
  display: none;
}
.bx-select-trigger[data-bx-surface][_ngcontent-%COMP%]:focus-within:not(.is-disabled, :disabled, .is-readonly, [readonly], [aria-readonly=true], :has([readonly], [aria-readonly=true])), 
.bx-select-trigger[data-bx-surface][_ngcontent-%COMP%]:focus-visible:not(:disabled, [readonly], [aria-readonly=true]), 
.bx-select-trigger[data-bx-surface].is-open[_ngcontent-%COMP%]:not(:disabled), 
.bx-select-trigger[data-bx-surface].is-readonly.is-keyboard-focused[_ngcontent-%COMP%]:focus-within, 
.bx-select-trigger[data-bx-surface][_ngcontent-%COMP%]:has(.bx-readonly.is-keyboard-focused):focus-within {
  --%NS%bx-glass-edge: var(--%NS%bx-border-brand);
  outline: 2px solid var(--%NS%bx-border-brand);
  outline-offset: -2px;
  --%NS%bx-glass-shadow: none;
}
.bx-select-trigger[data-bx-surface].is-invalid[_ngcontent-%COMP%] {
  --%NS%bx-glass-surface: var(--%NS%bx-bg-neutral);
  --%NS%bx-glass-min-opacity: 0.45;
  --%NS%bx-glass-edge: color-mix(in srgb, var(--%NS%bx-text-danger) 40%, var(--%NS%bx-border-default));
  border-block-end-color: var(--%NS%bx-glass-edge);
  --%NS%bx-glass-shadow: 0 8px 18px -10px color-mix(in srgb, var(--%NS%bx-text-danger) 65%, transparent);
  outline-color: var(--%NS%bx-border-danger);
}
.bx-select-trigger[_ngcontent-%COMP%]:not(.is-floating)   .bx-floating-label[_ngcontent-%COMP%] {
  right: 0;
}
.bx-select-item-inner[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:last-child {
  flex: 1 1 auto;
  min-width: 0;
  white-space: normal;
  overflow-wrap: anywhere;
}
.bx-select-group[_ngcontent-%COMP%] {
  padding: var(--%NS%bx-space-2, 0.5rem) var(--%NS%bx-space-3, 0.75rem);
  font-weight: 600;
  color: var(--%NS%bx-text-secondary);
  font-size: 0.75rem;
}
.bx-select-option[_ngcontent-%COMP%] {
  align-items: center;
  gap: var(--%NS%bx-space-2, 0.5rem);
}
.bx-select-panel[_ngcontent-%COMP%] {
  max-block-size: min(var(--%NS%bx-select-panel-height, 22rem), 70dvh);
}
.bx-select-menu-container[_ngcontent-%COMP%] {
  flex: 1 1 auto;
}
.bx-select-trigger.is-outline[_ngcontent-%COMP%] {
  border: var(--%NS%bx-border-width, 1px) var(--%NS%bx-border-style, solid) var(--%NS%bx-border-strong);
  border-radius: var(--%NS%bx-field-radius, var(--%NS%bx-rounded-md, 0.5rem));
}
.bx-select-trigger.is-outline.is-invalid[_ngcontent-%COMP%] {
  border-color: var(--%NS%bx-border-danger);
}
.bx-select-panel[_ngcontent-%COMP%] {
  background: var(--%NS%bx-select-panel-background, var(--%NS%bx-bg-surface));
  border-color: var(--%NS%bx-select-panel-border, var(--%NS%bx-border-strong));
  box-shadow: var(--%NS%bx-select-panel-shadow, var(--%NS%bx-shadow-lg, 0 12px 20px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.1)));
  isolation: isolate;
}
.bx-select-measure[_ngcontent-%COMP%] {
  position: absolute;
  visibility: hidden;
  pointer-events: none;
  inset-inline: 0;
  box-sizing: border-box;
  padding-inline-start: var(--%NS%bx-space-3, 0.75rem);
  font: inherit;
  font-size: 1rem;
}
.bx-select-loading[_ngcontent-%COMP%] {
  padding: var(--%NS%bx-space-2, 0.5rem) var(--%NS%bx-space-3, 0.75rem);
}
.bx-select-menu-container[_ngcontent-%COMP%] {
  --%NS%bx-load-more-padding: var(--%NS%bx-space-2, 0.5rem) var(--%NS%bx-space-3, 0.75rem);
}
.bx-select-search-state[_ngcontent-%COMP%] {
  display: flex;
  justify-content: center;
  align-items: center;
  min-block-size: 4rem;
  padding: var(--%NS%bx-space-3, 0.75rem);
  color: var(--%NS%bx-text-secondary);
}
[role=listbox][hidden][_ngcontent-%COMP%] {
  display: none;
}
.bx-selected-tags[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: var(--%NS%bx-select-tag-gap, var(--%NS%bx-space-1, 0.25rem));
  min-inline-size: 0;
  max-inline-size: 100%;
  overflow: hidden;
}
.bx-selected-tags[_ngcontent-%COMP%]    > bx-tag[_ngcontent-%COMP%] {
  min-inline-size: 0;
}
.bx-selected-tags[_ngcontent-%COMP%]    > .bx-overflow-tag[_ngcontent-%COMP%] {
  flex: 0 0 auto;
}
[role=listbox][_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: var(--%NS%bx-select-option-gap, var(--%NS%bx-space-1, 0.25rem));
}
.bx-select-option[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:last-child {
  min-inline-size: 0;
  overflow-wrap: anywhere;
}
[data-bx-selection-surface=true][_ngcontent-%COMP%]   .bx-select-option[_ngcontent-%COMP%]:is(:hover, :active):not([aria-selected=true]) {
  background: transparent;
}
.bx-select-control[_ngcontent-%COMP%] {
  position: relative;
  inline-size: 100%;
  min-inline-size: 0;
}
.bx-select-control.has-clear[_ngcontent-%COMP%]   .bx-select-container[_ngcontent-%COMP%] {
  padding-inline-end: var(--%NS%bx-space-8, 2rem);
}
.bx-select-control.has-clear[_ngcontent-%COMP%]   .bx-select-measure[_ngcontent-%COMP%] {
  inset-inline-end: var(--%NS%bx-space-8, 2rem);
}
.bx-select-clear.bx-btn[_ngcontent-%COMP%] {
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
.bx-select-clear.bx-btn[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--%NS%bx-border-brand);
  outline-offset: 0;
}
.bx-select-clear.bx-btn[_ngcontent-%COMP%]:hover:not(:disabled) {
  color: var(--%NS%bx-text-primary);
  background: var(--%NS%bx-bg-element-hover);
}
.bx-select-clear.bx-btn[_ngcontent-%COMP%]:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}
.bx-select-clear.bx-btn[_ngcontent-%COMP%] {
  position: absolute;
  inset-block-start: 50%;
  inset-inline-end: calc(1px + var(--%NS%bx-space-3, 0.75rem) + var(--%NS%bx-space-4, 1rem) + var(--%NS%bx-space-2, 0.5rem));
  transform: translateY(-50%);
  z-index: 3;
}
.bx-select-trigger[_ngcontent-%COMP%]:not(.has-label)   .bx-select-value[_ngcontent-%COMP%] {
  padding-block: var(--%NS%bx-space-3, 0.75rem);
}`]})};var cs=[`track`];var us=[`*`,[[`bx-error`]],[[`bx-hint`]]];var bs=[`*`,`bx-error`,`bx-hint`];var ps=[`ngProjectAs`,`bx-error`,5,[`bx-error`]];var gs=[`ngProjectAs`,`bx-hint`,5,[`bx-hint`]];function ms(i,n){i&1&&(_(0,`span`,7),X(1,`*`),D())}var yo=class i extends Mn{bxA11yService=f(Le$1);track=Nt$1(`track`);motion;constructor(){super(),Gn$1(()=>{let n=this.track()?.nativeElement,e=this.displayedChecked()?1:0,t=this.bxA11yService.isReducedMotion();if(!n)return;let r=!this.motion;this.motion??=ni([e],([o],[l])=>{Fi(n,{"--bx-toggle-position":String(o),"--bx-toggle-stretch":String(this.bxA11yService.isReducedMotion()?0:Math.min(.05,Math.abs(l)*.008))})},cr.elastic),this.motion.retarget([e],r||t)}),this.destroyRef.onDestroy(()=>this.motion?.destroy())}static ɵfac=function(e){return new(e||i)};static ɵcmp=G({type:i,selectors:[[`bx-slide-toggle`]],viewQuery:function(e,t){e&1&&Xt(t.track,cs,5),e&2&&ft()},features:[Cn$1],ngContentSelectors:bs,decls:12,vars:36,consts:[[`track`,``],[3,`control`,`inline`,`tooltip`,`loading`,`hint`,`hintEnd`,`subscriptSizing`,`forId`],[1,`bx-inline-wrapper`],[`type`,`checkbox`,`role`,`switch`,1,`bx-visually-hidden`,3,`click`,`change`,`blur`,`id`,`disabled`,`required`,`checked`],[`bxSurface`,``,1,`bx-slide-toggle-track`,3,`bxSurfaceEmission`,`bxSurfaceEmissionStrength`],[1,`bx-slide-toggle-thumb`],[1,`bx-inline-label`],[`aria-hidden`,`true`,1,`bx-inline-required`]],template:function(e,t){e&1&&(Ae(us),_(0,`bx-form-field`,1)(1,`label`,2)(2,`input`,3),te(`click`,function(o){return t.onReadonlyClick(o)})(`change`,function(o){return t.onToggle(o)})(`blur`,function(){return t.onBlur()}),D(),_(3,`div`,4,0),xe(5,`div`,5),D(),_(6,`span`,6),pe(7),X(8),j(9,ms,2,0,`span`,7),D()(),pe(10,1,ps),pe(11,2,gs),D()),e&2&&(R(`control`,t.fieldControl)(`inline`,!0)(`tooltip`,t.tooltip())(`loading`,t.loading())(`hint`,t.hint())(`hintEnd`,t.hintEnd())(`subscriptSizing`,t.resolvedSubscriptSizing())(`forId`,t.controlId()),y(),ae(`is-disabled`,t.disabled())(`is-readonly`,t.isReadonly())(`is-keyboard-focused`,t.keyboardFocused())(`label-before`,t.labelPosition()===`before`),y(),R(`id`,t.controlId())(`disabled`,t.disabled())(`required`,t.effectiveRequired())(`checked`,t.displayedChecked()),B(`name`,t.name()||null)(`data-testid`,t.dataTestId())(`aria-label`,t.ariaLabel())(`aria-labelledby`,t.ariaLabelledBy())(`aria-describedby`,t.describedBy())(`aria-invalid`,t.showError())(`aria-readonly`,t.isReadonly())(`aria-checked`,t.displayedChecked()),y(),ae(`is-checked`,t.displayedChecked())(`is-invalid`,t.showError()),R(`bxSurfaceEmission`,t.showError()?`var(--bx-text-danger)`:`var(--bx-accent)`)(`bxSurfaceEmissionStrength`,t.displayedChecked()?1.1:.35),y(5),un(``,t.resolvedLabel(),` `),y(),F(t.effectiveRequired()&&!t.resolvedHideRequiredMarker()?9:-1))},dependencies:[Rt$1,U],styles:[`
[_nghost-%COMP%] {
  --%NS%bx-field-support-padding: 0;
  display: block;
}
.bx-visually-hidden[_ngcontent-%COMP%] {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
  border: 0;
}
.bx-inline-wrapper[_ngcontent-%COMP%] {
  display: inline-flex;
  inline-size: var(--%NS%bx-toggle-inline-size, auto);
  align-items: center;
  justify-content: var(--%NS%bx-toggle-justify-content, start);
  gap: var(--%NS%bx-space-2, 0.5rem);
  cursor: pointer;
  -webkit-user-select: none;
  user-select: none;
}
.bx-inline-wrapper.is-disabled[_ngcontent-%COMP%] {
  opacity: 0.5;
  cursor: not-allowed;
}
.bx-inline-wrapper.is-readonly[_ngcontent-%COMP%]:not(.is-disabled) {
  cursor: default;
}
.bx-inline-label[_ngcontent-%COMP%] {
  min-inline-size: 0;
  font-size: 0.875rem;
  color: var(--%NS%bx-text-primary);
  overflow-wrap: anywhere;
}
.bx-inline-required[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-danger);
}
.bx-inline-tooltip-trigger[_ngcontent-%COMP%] {
  position: relative;
  display: inline-flex;
  color: var(--%NS%bx-text-secondary);
  cursor: help;
  outline: none;
}
.bx-inline-tooltip-trigger[_ngcontent-%COMP%]:hover, 
.bx-inline-tooltip-trigger[_ngcontent-%COMP%]:focus-visible {
  color: var(--%NS%bx-text-accent);
}
.bx-inline-tooltip-trigger[_ngcontent-%COMP%]   bx-tooltip[_ngcontent-%COMP%] {
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 8px;
}
.bx-slide-toggle-track[_ngcontent-%COMP%] {
  --%NS%bx-toggle-position: 0;
  position: relative;
  flex-shrink: 0;
  width: 42px;
  height: 24px;
  background-color: var(--%NS%bx-border-strong);
  border-radius: var(--%NS%bx-rounded-pill, 9999px);
  transition: border-color 0.2s ease;
}
.bx-slide-toggle-track.is-invalid[_ngcontent-%COMP%] {
  background-color: var(--%NS%bx-bg-danger-subtle);
  box-shadow: inset 0 0 0 2px var(--%NS%bx-border-danger);
}
.bx-slide-toggle-track.is-checked[_ngcontent-%COMP%] {
  --%NS%bx-toggle-position: 1;
  background-color: var(--%NS%bx-accent);
}
.bx-slide-toggle-track.is-checked.is-invalid[_ngcontent-%COMP%] {
  background-color: var(--%NS%bx-bg-danger);
}
.bx-inline-wrapper[_ngcontent-%COMP%]:not(.is-readonly)   input[_ngcontent-%COMP%]:focus-visible    ~ .bx-slide-toggle-track[_ngcontent-%COMP%], 
.bx-inline-wrapper.is-readonly.is-keyboard-focused[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus-visible    ~ .bx-slide-toggle-track[_ngcontent-%COMP%] {
  box-shadow: 0 0 0 3px var(--%NS%bx-accent-subtle);
}
.bx-slide-toggle-thumb[_ngcontent-%COMP%] {
  position: absolute;
  top: 2px;
  inset-inline-start: 2px;
  width: 18px;
  height: 18px;
  background: var(--%NS%bx-text-secondary);
  border: var(--%NS%bx-border-width, 1px) var(--%NS%bx-border-style, solid) var(--%NS%bx-bg-surface);
  box-sizing: border-box;
  border-radius: var(--%NS%bx-rounded-pill, 9999px);
  transform: translateX(calc(var(--%NS%bx-toggle-position, 0) * 18px * var(--%NS%bx-toggle-direction, 1))) scale(calc(1 + var(--%NS%bx-toggle-stretch, 0) + var(--%NS%bx-glass-press, 0) * 0.018), calc(1 - var(--%NS%bx-toggle-stretch, 0) / 3 - var(--%NS%bx-glass-press, 0) * 0.035));
  box-shadow: var(--%NS%bx-shadow-sm);
}
.bx-slide-toggle-track[_ngcontent-%COMP%]:dir(rtl) {
  --%NS%bx-toggle-direction: -1;
}
.bx-slide-toggle-track[data-bx-reduced-motion=true][_ngcontent-%COMP%]   .bx-slide-toggle-thumb[_ngcontent-%COMP%] {
  transform: translateX(calc(var(--%NS%bx-toggle-position, 0) * 18px * var(--%NS%bx-toggle-direction, 1)));
}
.is-checked[_ngcontent-%COMP%]   .bx-slide-toggle-thumb[_ngcontent-%COMP%] {
  background: var(--%NS%bx-on-accent);
  border-color: var(--%NS%bx-on-accent);
}
.bx-slide-toggle-track[data-bx-surface][_ngcontent-%COMP%] {
  --%NS%bx-glass-shadow: none;
  --%NS%bx-glass-surface: var(--%NS%bx-bg-neutral);
  --%NS%bx-glass-edge: var(--%NS%bx-text-secondary);
  --%NS%bx-glass-min-opacity: 0.65;
  border: var(--%NS%bx-border-width, 1px) var(--%NS%bx-border-style, solid) var(--%NS%bx-glass-edge);
  box-sizing: border-box;
  --%NS%bx-glass-text: var(--%NS%bx-text-primary);
}
.bx-slide-toggle-track[data-bx-surface].is-checked[_ngcontent-%COMP%] {
  --%NS%bx-glass-surface: var(--%NS%bx-accent);
  --%NS%bx-glass-min-opacity: 1;
  --%NS%bx-glass-edge: var(--%NS%bx-border-accent);
  --%NS%bx-glass-text: var(--%NS%bx-text-accent);
}
.bx-slide-toggle-track[data-bx-surface].is-invalid[_ngcontent-%COMP%] {
  --%NS%bx-glass-surface: var(--%NS%bx-bg-danger-subtle);
  --%NS%bx-glass-edge: var(--%NS%bx-border-danger);
  --%NS%bx-glass-text: var(--%NS%bx-text-danger);
}
.bx-inline-wrapper[_ngcontent-%COMP%]:not(.is-disabled, .is-readonly):hover   .bx-slide-toggle-track[data-bx-surface][_ngcontent-%COMP%]:not(.is-invalid) {
  --%NS%bx-glass-surface: var(--%NS%bx-bg-neutral-hover);
  --%NS%bx-glass-edge: var(--%NS%bx-border-accent);
}
.bx-inline-wrapper[_ngcontent-%COMP%]:not(.is-disabled, .is-readonly):hover   .bx-slide-toggle-track[data-bx-surface][_ngcontent-%COMP%]:not(.is-invalid).is-checked {
  --%NS%bx-glass-surface: var(--%NS%bx-accent-hover);
}
.bx-slide-toggle-track[data-bx-surface][_ngcontent-%COMP%]:not(.is-invalid) {
  --%NS%bx-glass-rim-visibility: 0.25;
  --%NS%bx-toggle-thumb-surface: var(--%NS%bx-color-neutral-200);
  --%NS%bx-toggle-thumb-edge: color-mix(in srgb, var(--%NS%bx-accent) 18%, var(--%NS%bx-border-strong));
  background-image:
    linear-gradient(
      180deg,
      color-mix(in srgb, var(--%NS%bx-color-accent-50) 6%, var(--%NS%bx-glass-surface)),
      var(--%NS%bx-glass-surface) 55%,
      color-mix(in srgb, var(--%NS%bx-border-strong) 6%, var(--%NS%bx-glass-surface))) !important;
  border-color: var(--%NS%bx-glass-edge);
}
.bx-slide-toggle-track[data-bx-surface][_ngcontent-%COMP%]:not(.is-invalid)   .bx-slide-toggle-thumb[_ngcontent-%COMP%] {
  background:
    radial-gradient(
      circle at 35% 0%,
      color-mix(in srgb, var(--%NS%bx-color-neutral-50) 24%, transparent),
      transparent 65%),
    var(--%NS%bx-toggle-thumb-surface);
  border-color: var(--%NS%bx-toggle-thumb-edge);
}
.high-contrast[_nghost-%COMP%]   .bx-slide-toggle-track[data-bx-surface][_ngcontent-%COMP%]:not(.is-invalid)   .bx-slide-toggle-thumb[_ngcontent-%COMP%], .high-contrast   [_nghost-%COMP%]   .bx-slide-toggle-track[data-bx-surface][_ngcontent-%COMP%]:not(.is-invalid)   .bx-slide-toggle-thumb[_ngcontent-%COMP%], 
.bx-high-contrast-scope[_nghost-%COMP%]   .bx-slide-toggle-track[data-bx-surface][_ngcontent-%COMP%]:not(.is-invalid)   .bx-slide-toggle-thumb[_ngcontent-%COMP%], .bx-high-contrast-scope   [_nghost-%COMP%]   .bx-slide-toggle-track[data-bx-surface][_ngcontent-%COMP%]:not(.is-invalid)   .bx-slide-toggle-thumb[_ngcontent-%COMP%] {
  background-image: none !important;
  border-color: var(--%NS%bx-glass-edge);
}
@media (forced-colors: active) {
  .bx-slide-toggle-track[data-bx-surface][_ngcontent-%COMP%]:not(.is-invalid)   .bx-slide-toggle-thumb[_ngcontent-%COMP%] {
    background-image: none !important;
    border-color: ButtonText;
  }
}
.bx-slide-toggle-track[data-bx-surface][_ngcontent-%COMP%]:not(.is-invalid).is-checked {
  --%NS%bx-toggle-thumb-surface: var(--%NS%bx-color-accent-100);
  --%NS%bx-toggle-thumb-edge: var(--%NS%bx-color-accent-200);
}
.high-contrast[_nghost-%COMP%]   .bx-slide-toggle-track[data-bx-surface][_ngcontent-%COMP%]:not(.is-invalid), .high-contrast   [_nghost-%COMP%]   .bx-slide-toggle-track[data-bx-surface][_ngcontent-%COMP%]:not(.is-invalid), 
.bx-high-contrast-scope[_nghost-%COMP%]   .bx-slide-toggle-track[data-bx-surface][_ngcontent-%COMP%]:not(.is-invalid), .bx-high-contrast-scope   [_nghost-%COMP%]   .bx-slide-toggle-track[data-bx-surface][_ngcontent-%COMP%]:not(.is-invalid) {
  background-image: none !important;
  border-color: var(--%NS%bx-glass-edge);
}
@media (forced-colors: active) {
  .bx-slide-toggle-track[data-bx-surface][_ngcontent-%COMP%]:not(.is-invalid) {
    background-image: none !important;
    border-color: ButtonText;
  }
}
.high-contrast[_nghost-%COMP%]   .bx-slide-toggle-track.is-checked[_ngcontent-%COMP%]   .bx-slide-toggle-thumb[_ngcontent-%COMP%], .high-contrast   [_nghost-%COMP%]   .bx-slide-toggle-track.is-checked[_ngcontent-%COMP%]   .bx-slide-toggle-thumb[_ngcontent-%COMP%], 
.bx-high-contrast-scope[_nghost-%COMP%]   .bx-slide-toggle-track.is-checked[_ngcontent-%COMP%]   .bx-slide-toggle-thumb[_ngcontent-%COMP%], .bx-high-contrast-scope   [_nghost-%COMP%]   .bx-slide-toggle-track.is-checked[_ngcontent-%COMP%]   .bx-slide-toggle-thumb[_ngcontent-%COMP%] {
  background-color: var(--%NS%bx-on-accent);
}
@media (forced-colors: active) {
  .bx-slide-toggle-thumb[_ngcontent-%COMP%] {
    background: ButtonText;
  }
  .is-checked[_ngcontent-%COMP%]   .bx-slide-toggle-thumb[_ngcontent-%COMP%] {
    background: Highlight;
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
.bx-inline-wrapper.label-before[_ngcontent-%COMP%]   .bx-inline-label[_ngcontent-%COMP%] {
  order: -1;
}`]})};var Ft=class i{elementRef=f(K);bxA11yService=f(Le$1);glassiness=b();discrete=b(!1);displayWith=b(String);showTickMarks=b(!1);shell;valueLabel;tickList;thumb;motion;opticSurface;releaseGesture;pressed=!1;lastPosition=0;lastInputTime=0;trackWidth=0;thumbWidth=0;pointerId=null;constructor(){f(ul$1),ce(()=>{let t=this.bxA11yService.isReducedMotion(),r=this.glassiness()??`auto`;this.opticSurface?.update({glassiness:r,quality:`auto`,localRefraction:!0,interactive:!1,emission:!1,reducedMotion:t}),t&&this.motion?.retarget([0,0],!0)}),bv(()=>this.sync());let n=f(re),e=f(Q);Ze(()=>{let t=this.elementRef.nativeElement,r=t.ownerDocument.createElement(`span`);r.className=`bx-slider-shell`;let o=t.ownerDocument.createElement(`span`);o.className=`bx-slider-thumb`,o.setAttribute(`aria-hidden`,`true`);let l=t.ownerDocument.createElement(`span`);l.className=`bx-slider-lens`,o.append(l);let g=t.ownerDocument.createElement(`span`);g.className=`bx-slider-optic`,g.hidden=!0,o.append(g),t.before(r),r.append(t,o),this.shell=r,this.thumb=o,this.motion=ni([0,0],([z,fe])=>{let Te=this.bxA11yService.isReducedMotion();g.hidden=z<.01,Fi(o,{"--bx-slider-pressure":String(Te?0:z),"--bx-slider-stretch":String(Te?0:Math.max(0,fe))})},cr.elastic);let y=z=>{z?.type===`visibilitychange`&&!t.ownerDocument.hidden||z&&`pointerId`in z&&z.pointerId!==this.pointerId||(this.pressed=!1,this.pointerId=null,this.motion?.retarget([0,0],this.bxA11yService.isReducedMotion()),t.ownerDocument.defaultView?.removeEventListener(`pointerup`,y,!0),t.ownerDocument.defaultView?.removeEventListener(`pointercancel`,y,!0),t.ownerDocument.defaultView?.removeEventListener(`blur`,y),t.ownerDocument.removeEventListener(`visibilitychange`,y),this.releaseGesture=void 0)},w=z=>{!z.isPrimary||z.button!==0||t.disabled||t.hasAttribute(`readonly`)||t.getAttribute(`aria-readonly`)===`true`||(this.opticSurface??=n.runOutsideAngular(()=>Ls$1(g,{glassiness:this.glassiness()??`auto`,quality:`auto`,localRefraction:!0,interactive:!1,emission:!1,reducedMotion:this.bxA11yService.isReducedMotion()})),this.pressed=!0,this.pointerId=z.pointerId,this.lastInputTime=0,this.motion?.retarget([1,0],this.bxA11yService.isReducedMotion()),t.ownerDocument.defaultView?.addEventListener(`pointerup`,y,!0),t.ownerDocument.defaultView?.addEventListener(`pointercancel`,y,!0),t.ownerDocument.defaultView?.addEventListener(`blur`,y),t.ownerDocument.addEventListener(`visibilitychange`,y),this.releaseGesture=y)};t.addEventListener(`pointerdown`,w),t.addEventListener(`blur`,y);let E=t.ownerDocument.createElement(`span`);E.className=`bx-slider-value-label`,E.setAttribute(`aria-hidden`,`true`),r.append(E),this.valueLabel=E;let V=t.ownerDocument.createElement(`datalist`);V.id=`bx-slider-ticks-${t.id||Math.random().toString(36).slice(2)}`,r.append(V),this.tickList=V,this.sync();let H=()=>{this.trackWidth=t.offsetWidth,this.thumbWidth=o.offsetWidth,r.style.setProperty(`--bx-slider-center-y`,`${t.offsetTop+t.offsetHeight/2}px`),r.style.setProperty(`--bx-slider-track-start`,`${t.offsetLeft}px`),r.style.setProperty(`--bx-slider-track-width`,`${t.offsetWidth}px`),Ps$1(o),this.sync()},Z=new ResizeObserver(H);n.runOutsideAngular(()=>{Z.observe(t),Z.observe(r),Z.observe(o),H()});let ze=n.runOutsideAngular(()=>CF(o,z=>{let fe=z.reflectionStrength>z.strength,Te=fe?z.reflectionStrength:z.strength;Te<=.04?(o.style.removeProperty(`--bx-slider-light-color`),o.style.removeProperty(`--bx-slider-light-strength`)):(o.style.setProperty(`--bx-slider-light-color`,fe?z.reflection:z.color),o.style.setProperty(`--bx-slider-light-strength`,String(Te))),o.style.setProperty(`--bx-slider-light-x`,`${fe?z.reflectionX:z.x}%`),o.style.setProperty(`--bx-slider-light-y`,`${fe?z.reflectionY:z.y}%`),Fi(r,{"--bx-slider-light-color":fe?z.reflection:z.color,"--bx-slider-light-strength":String(Math.max(.04,Te))})},t));e.onDestroy(()=>{Z.disconnect(),ze(),y(),t.removeEventListener(`pointerdown`,w),t.removeEventListener(`blur`,y),this.motion?.destroy(),this.opticSurface?.destroy(),this.opticSurface=void 0,t.parentNode===r?r.replaceWith(t):r.remove(),this.shell=this.thumb=void 0})})}onInput(n){let e=this.elementRef.nativeElement,t=(e.max===``?100:Number(e.max))-(e.min===``?0:Number(e.min)),r=t>0?e.valueAsNumber/t:0,o=Math.max(.008,(n.timeStamp-this.lastInputTime)/1e3),l=this.pressed&&this.lastInputTime>0?Math.min(.065,Math.abs(r-this.lastPosition)/o*.015):0;this.lastPosition=r,this.lastInputTime=n.timeStamp,this.motion?.retarget([this.pressed?1:0,l],this.bxA11yService.isReducedMotion()),this.sync()}sync(){let n=this.elementRef.nativeElement;(n.disabled||n.hasAttribute(`readonly`)||n.getAttribute(`aria-readonly`)===`true`)&&this.releaseGesture?.();let e=n.min===``?0:Number(n.min),t=n.max===``?100:Number(n.max),r=t>e?Math.max(0,Math.min(100,(n.valueAsNumber-e)/(t-e)*100)):0;if(this.shell&&this.thumbWidth>0&&this.trackWidth>0){let l=n.hasAttribute(`aria-valuemax`)?Number(n.getAttribute(`aria-valuemax`)):n.hasAttribute(`aria-valuemin`)?Number(n.getAttribute(`aria-valuemin`)):null;if(l!==null&&Number.isFinite(l)&&t>e){let g=Math.abs(l-n.valueAsNumber)/(t-e)*(this.trackWidth-this.thumbWidth),y=String(Math.max(0,Math.min(.45,g*2/this.thumbWidth-2)));this.shell.style.getPropertyValue(`--bx-slider-neighbor-limit`)!==y&&this.shell.style.setProperty(`--bx-slider-neighbor-limit`,y)}}if(this.valueLabel&&(this.valueLabel.hidden=!this.discrete(),this.valueLabel.textContent=this.displayWith()(n.valueAsNumber)),this.tickList){let l=Math.min(1e3,Math.floor((t-e)/(Number(n.step)||1))),g=`${e}:${t}:${n.step}:${this.showTickMarks()}`;if(this.tickList.dataset.range!==g&&(this.tickList.replaceChildren(),this.tickList.dataset.range=g,this.showTickMarks()&&l>0))for(let y=0;y<=l;y++){let w=n.ownerDocument.createElement(`option`);w.value=String(e+y*(Number(n.step)||1)),this.tickList.append(w)}this.showTickMarks()?n.setAttribute(`list`,this.tickList.id):n.getAttribute(`list`)===this.tickList.id&&n.removeAttribute(`list`)}let o=`${Number.isFinite(r)?r:0}%`;if(n.style.getPropertyValue(`--bx-slider-progress`)!==o&&n.style.setProperty(`--bx-slider-progress`,o),this.shell){let l=String((Number.isFinite(r)?r:0)/100);this.shell.style.getPropertyValue(`--bx-slider-position`)!==l&&(this.shell.style.setProperty(`--bx-slider-position`,l),this.thumb&&Ps$1(this.thumb))}}static ɵfac=function(e){return new(e||i)};static ɵdir=Z({type:i,selectors:[[`input`,`type`,`range`,`bxSlider`,``]],hostAttrs:[1,`bx-slider`],hostBindings:function(e,t){e&1&&te(`input`,function(o){return t.onInput(o)})},inputs:{glassiness:[1,`glassiness`],discrete:[1,`discrete`],displayWith:[1,`displayWith`],showTickMarks:[1,`showTickMarks`]}})};var hs=[`*`,[[`bx-error`]],[[`bx-hint`]]];var fs=[`*`,`bx-error`,`bx-hint`];var xs=[`ngProjectAs`,`bx-error`,5,[`bx-error`]];var vs=[`ngProjectAs`,`bx-hint`,5,[`bx-hint`]];var _o=class i extends se{groupName=g(()=>this.name()||this.controlId());focus(n){let e=this.nativeElement.querySelector(`input:checked:not(:disabled)`);e?e.focus(n):super.focus(n)}select(n){this.updateValue(n)}markTouched(){this.markAsTouched()}static ɵfac=(()=>{let n;return function(t){return(n||(n=Wo$1(i)))(t||i)}})();static ɵcmp=G({type:i,selectors:[[`bx-radio-group`]],features:[Qt([{provide:Et,useExisting:hn(()=>i)}]),Cn$1],ngContentSelectors:fs,decls:5,vars:14,consts:[[3,`control`,`label`,`hint`,`hintEnd`,`tooltip`,`hideRequiredMarker`,`subscriptSizing`,`forId`],[`role`,`radiogroup`,3,`id`]],template:function(e,t){e&1&&(Ae(hs),_(0,`bx-form-field`,0)(1,`div`,1),pe(2),D(),pe(3,1,xs),pe(4,2,vs),D()),e&2&&(R(`control`,t.fieldControl)(`label`,t.label())(`hint`,t.hint())(`hintEnd`,t.hintEnd())(`tooltip`,t.tooltip())(`hideRequiredMarker`,t.resolvedHideRequiredMarker())(`subscriptSizing`,t.resolvedSubscriptSizing())(`forId`,t.controlId()),y(),R(`id`,t.controlId()),B(`aria-label`,t.ariaLabel()||t.resolvedLabel())(`aria-labelledby`,t.ariaLabelledBy())(`aria-describedby`,t.describedBy())(`aria-invalid`,t.showError())(`aria-required`,t.effectiveRequired()))},dependencies:[U],styles:[`
[_nghost-%COMP%] {
  display: block;
}
[role=radiogroup][_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: var(--%NS%bx-radio-group-gap, 0.5rem);
  --%NS%bx-field-subscript-height: 0;
}`]})};var So=class i{static ɵfac=function(e){return new(e||i)};static ɵdir=Z({type:i,selectors:[[``,`bxPrefix`,``]],hostAttrs:[1,`bx-field-prefix`]})};var Co=class i{static ɵfac=function(e){return new(e||i)};static ɵdir=Z({type:i,selectors:[[``,`bxSuffix`,``]],hostAttrs:[1,`bx-field-suffix`]})};function Mo(i){let n=Number(i);return Number.isFinite(n)?Math.max(2,Math.floor(n)):2}var ys=[`summaryOverflow`];var _s=[[[``,`bxSuffix`,``]],[[`bx-error`]],[[`bx-hint`]]];var Ss=[`[bxSuffix]`,`bx-error`,`bx-hint`];var Cs=[`ngProjectAs`,`bx-error`,5,[`bx-error`]];var Ms=[`ngProjectAs`,`bx-hint`,5,[`bx-hint`]];var Ns=(i,n,e)=>({$implicit:i,selected:n,index:e});var To=(i,n)=>n.value;function Ts(i,n){i&1&&(_(0,`span`,22),X(1,`*`),D())}function ws(i,n){if(i&1&&(_(0,`span`,11)(1,`span`,21,3),X(3),D(),j(4,Ts,2,0,`span`,22),D()),i&2){let e=w();y(),R(`bxTruncate`,!0),y(2),fe(e.resolvedLabel()),y(),F(e.required()&&!e.resolvedHideRequiredMarker()?4:-1)}}function Os(i,n){if(i&1&&yt$1(0,13),i&2){let e=w();R(`ngTemplateOutlet`,n)(`ngTemplateOutletContext`,e.triggerContext())}}function ks(i,n){if(i&1&&xe(0,`bx-tag`,23),i&2){let e=w(2);R(`text`,e.allSelectedText())(`config`,e.tagConfig())(`focusable`,!1)(`tooltipOnTruncate`,!1)}}function Ps(i,n){if(i&1&&xe(0,`bx-tag`,24),i&2){let e=n.$implicit,t=w(3);R(`text`,e.label)(`config`,t.selectionTagConfig(e))(`disabled`,t.disabled()||!!e.disabled)(`focusable`,!1)(`tooltipOnTruncate`,t.resolvedTooltipOnTruncate()?void 0:!1)}}function Ds(i,n){if(i&1&&xe(0,`bx-tag`,25),i&2){let e=w(3);R(`text`,e.overflowTagLabel())(`config`,e.overflowTagConfig())(`tooltip`,e.overflowTagTooltip())(`focusable`,!1)(`tooltipOnTruncate`,e.resolvedTooltipOnTruncate()?void 0:!1)}}function Is(i,n){if(i&1&&($t(0,Ps,1,5,`bx-tag`,24,To),j(2,Ds,1,5,`bx-tag`,25)),i&2){let e=w(2);Wt(e.visibleTags()),y(2),F(e.selectedOptions().length>e.visibleTagCount()?2:-1)}}function Es(i,n){if(i&1&&(_(0,`span`,14),j(1,ks,1,4,`bx-tag`,23)(2,Is,3,1),D()),i&2){let e=w();y(),F(e.selectAll()&&e.allSelectedText()?1:2)}}function Rs(i,n){if(i&1&&X(0),i&2){let e=w();un(` `,e.displayedSelection()||(e.isFloating()||!e.label()?e.resolvedPlaceholder():``),` `)}}function Ls(i,n){i&1&&xe(0,`bx-loading-spinner`,17),i&2&&R(`size`,16)(`decorative`,!0)}function As(i,n){i&1&&xe(0,`bx-icon`,18)}function Fs(i,n){if(i&1){let e=wt$1();_(0,`button`,26),te(`click`,function(){Be(e);let r=w();return Ve$1(r.clearSelection())}),xe(1,`bx-icon`,27),D()}if(i&2){let e=w();R(`surfaceEffects`,!1)(`disabled`,e.disabled())(`bxTooltip`,e.resolvedClearTooltip()),B(`aria-label`,e.resolvedClearLabel())}}function Vs(i,n){if(i&1){let e=wt$1();_(0,`div`,30)(1,`bx-search-input`,36,6),te(`search`,function(r){Be(e);let o=w(3);return Ve$1(o.onSearchChange(r))})(`keydown.enter`,function(r){return r.preventDefault()}),D()()}if(i&2){let e=w(3);y(),R(`value`,e.searchValue())(`compact`,!0)(`placeholder`,e.resolvedSearchPlaceholder())(`ariaLabel`,e.resolvedSearchPlaceholder())}}function zs(i,n){if(i&1){let e=wt$1();_(0,`button`,37),te(`click`,function(){Be(e);let r=w(3);return Ve$1(r.toggleSelectAll())}),xe(1,`bx-checkbox-indicator`,38),X(2),D()}if(i&2){let e=w(3);R(`disabled`,e.disabled()||e.isReadonly()),B(`aria-checked`,e.selectAllChecked()?`true`:e.someSelected()?`mixed`:`false`),y(),R(`checked`,e.selectAllChecked())(`indeterminate`,!e.selectAllChecked()&&e.someSelected())(`disabled`,e.disabled()),y(),un(` `,e.resolvedSelectAllLabel(),` `)}}function Bs(i,n){if(i&1&&(_(0,`div`,39),X(1),D()),i&2){let e=w(),t=e.$implicit,r=e.$index,o=w(3);R(`id`,o.controlId()+`-group-`+r),y(),fe(t.resolvedGroup)}}function qs(i,n){if(i&1&&xe(0,`bx-icon`,42),i&2){let e=w().$implicit;R(`name`,e.icon)}}function Hs(i,n){if(i&1&&yt$1(0,13),i&2){let e=w(),t=e.$implicit,r=e.$index,o=w(3);R(`ngTemplateOutlet`,n)(`ngTemplateOutletContext`,qP(2,Ns,t,o.isSelected(t.value),r))}}function Ws(i,n){if(i&1&&(_(0,`span`),X(1),D()),i&2){let e=w().$implicit;y(),fe(e.resolvedStr)}}function js(i,n){if(i&1){let e=wt$1();j(0,Bs,2,2,`div`,39),_(1,`button`,40),te(`click`,function(){let r=Be(e).$implicit,o=w(3);return Ve$1(o.selectOption(r))}),xe(2,`bx-checkbox-indicator`,41),j(3,qs,1,1,`bx-icon`,42),j(4,Hs,1,6,`ng-container`,13)(5,Ws,2,1,`span`),D()}if(i&2){let e,t=n.$implicit,r=n.$index,o=w(3);F(t.resolvedGroup&&(r===0||o.filteredOptions()[r-1].resolvedGroup!==t.resolvedGroup)?0:-1),y(),R(`disabled`,t.disabled||t.groupDisabled||!1),B(`aria-selected`,o.isSelected(t.value)),y(),R(`checked`,o.isSelected(t.value))(`disabled`,o.disabled()||!!t.disabled||!!t.groupDisabled),y(),F(t.icon?3:-1),y(),F((e=o.optionTemplate())?4:5,e)}}function $s(i,n){if(i&1&&(_(0,`div`,43),X(1),D()),i&2){let e=w(4);y(),fe(e.resolvedEmptyMessage())}}function Ks(i,n){if(i&1&&j(0,$s,2,1,`div`,43),i&2){let e=w(3);F(e.loading()?-1:0)}}function Zs(i,n){if(i&1&&(_(0,`span`),X(1),D()),i&2){let e=w(4);y(),fe(e.resolvedLoadingLabel())}}function Gs(i,n){i&1&&xe(0,`bx-loading-spinner`,17),i&2&&R(`size`,20)(`decorative`,!0)}function Xs(i,n){if(i&1&&(_(0,`div`,34),j(1,Zs,2,1,`span`)(2,Gs,1,2,`bx-loading-spinner`,17),D()),i&2){let e=w(3);B(`aria-label`,e.resolvedLoadingLabel()||e.resolvedLoadingAriaLabel()),y(),F(e.resolvedLoadingLabel()?1:2)}}function Us(i,n){if(i&1&&(_(0,`div`,35),xe(1,`bx-loading-indicator`,44),D()),i&2){let e=w(3);y(),R(`size`,16)(`label`,e.loadingLabel()??e.loadingAriaLabel())}}function Ys(i,n){if(i&1){let e=wt$1();_(0,`div`,29),te(`keydown`,function(r){Be(e);let o=w(2);return Ve$1(o.onPanelKey(r))}),j(1,Vs,3,4,`div`,30),j(2,zs,3,6,`button`,31),_(3,`div`,32,5),te(`loadMore`,function(r){Be(e);let o=w(2);return Ve$1(o.requestMore(r))}),_(5,`div`,33),$t(6,js,6,7,null,null,To,!1,Ks,1,1),D(),j(9,Xs,3,2,`div`,34)(10,Us,2,2,`div`,35),D()()}if(i&2){let e=Tt$1(4),t=w(2);yP(t.panelClass()),R(`bxSurfaceInteractive`,!1),y(),F(t.isSearchable()?1:-1),y(),F(t.showSelectAll()?2:-1),y(),R(`loadMoreHasMore`,t.hasMore())(`loadMoreSuppressed`,t.isSearching())(`loadMoreLoading`,t.loading())(`loadMoreDisabled`,t.disabled()||t.isReadonly())(`loadMoreError`,t.loadError())(`loadMoreConfig`,t.loadMoreConfig())(`loadMoreTemplate`,t.loadMoreTemplate())(`loadMoreRevision`,t.options()),y(2),R(`hidden`,t.isSearching())(`id`,t.controlId()+`-options`),B(`aria-multiselectable`,!0)(`aria-label`,t.ariaLabel()||t.resolvedLabel()),y(),Wt(t.filteredOptions()),y(3),F(t.isSearching()?9:t.loading()&&!e.actionVisible()?10:-1)}}function Qs(i,n){if(i&1){let e=wt$1();Pa$1(0,Ys,11,19,`ng-template`,28,4,kr),te(`overlayOutsideClick`,function(r){Be(e);let o=w();return Ve$1(o.onOutsideClick(r))})(`attach`,function(){Be(e);let r=Tt$1(1),o=w();return Ve$1(o.onPanelAttach(r))})(`detach`,function(){Be(e);let r=w();return Ve$1(r.onPanelDetach())})(`positionChange`,function(){Be(e);let r=w();return Ve$1(r.refreshPanel())})}if(i&2){let e=w(),t=Tt$1(3);R(`cdkConnectedOverlayOrigin`,t)(`cdkConnectedOverlayOpen`,!0)(`cdkConnectedOverlayPositions`,e.overlayPositions)(`cdkConnectedOverlayHasBackdrop`,!1)(`cdkConnectedOverlayPush`,!0)(`cdkConnectedOverlayViewportMargin`,8)(`cdkConnectedOverlayScrollStrategy`,e.panelScrollStrategy)(`cdkConnectedOverlayUsePopover`,e.overlayPopoverLocation(t.elementRef.nativeElement))(`cdkConnectedOverlayWidth`,t.elementRef.nativeElement.offsetWidth)}}var No=class i extends Pn{labelsAdapter=f(Se$1,{optional:!0});summaryOverflow=Nt$1(`summaryOverflow`);hasSelection=g(()=>!!this.internalValue()?.length||this.selectAll());resolvedSelectAllLabel=g(()=>J(this.selectAllLabel(),this.labelsAdapter));selectableOptions=g(()=>this.filteredOptions().filter(n=>!n.disabled&&!n.groupDisabled));allLoadedSelected=g(()=>{let n=this.selectableOptions();return n.length>0&&n.every(e=>this.isSelected(e.value))});selectAllChecked=g(()=>this.selectAll()||this.allLoadedSelected());someSelected=g(()=>this.selectableOptions().some(n=>this.isSelected(n.value)));usesSummary=g(()=>{let n=this.internalValue()?.length??0;return this.selectionDisplay()===`tags`&&this.selectedOptions().length>this.visibleTagCount()||!!(this.selectAll()&&this.allSelectedText())||n>this.summaryThreshold()||n>=2&&(this.summaryOverflow()?.truncated()??!1)});displayedSelection=g(()=>{if(this.selectAll()&&this.allSelectedText())return J(this.allSelectedText(),this.labelsAdapter);if(!this.usesSummary())return this.selectedOptionLabel();let n=this.internalValue()?.length??0;return J(this.selectedCountText(),this.labelsAdapter,{count:n}).replaceAll(`{count}`,String(n))});resolvedAllSelectedTooltip=g(()=>{let n=this.allSelectedTooltip();return n===!1?``:n===void 0?this.resolvedTooltipOnTruncate()?this.selectedOptionLabel():``:J(n,this.labelsAdapter)});selectionTooltip=g(()=>this.isOpen()?``:this.selectAll()?this.resolvedAllSelectedTooltip():this.resolvedTooltipOnTruncate()?this.selectionDisplay()===`tags`||this.usesSummary()?this.selectedOptionLabel():this.truncatedSelectionTooltip():``);allSelectedTooltip=b(void 0);allSelectedText=b(void 0);selectedCountText=b(`{count} selected`);summaryThreshold=b(2,{transform:Mo});showSelectAll=b(!0);selectAllLabel=b(`Select all`);selectionScope=b(void 0);selectAll=pn(!1);selectionChange=ze();selectAllIntentChange=ze();scope;constructor(){super(),ce(()=>{let n=this.selectionScope()??this.searchTerm(),e=this.filteredOptions(),t=this.selectAll(),r=W(this.internalValue)??[];if(this.scope!==void 0&&n!==this.scope&&t)this.selectAll.set(!1),this.emitIntent(!1,`scope-change`,n);else if(t&&!this.disabled()&&!this.isReadonly()){let o=e.filter(l=>!l.disabled&&!l.groupDisabled&&!r.some(g=>this.compareWith()(g,l.value))).map(l=>l.value);if(o.length){let l=[...r,...o];this.updateValue(l),this.selectionChange.emit({value:l,source:`page`})}}this.scope=n})}clearSelection(){if(this.disabled()||this.isReadonly())return;let n=this.selectAll();this.selectAll.set(!1),this.clearSelectedValue([]),this.selectionChange.emit({value:[],source:`clear`}),n&&this.emitIntent(!1,`clear`)}isSelected(n){return(this.internalValue()??[]).some(e=>this.compareWith()(e,n))}toggleSelectAll(){if(this.disabled()||this.isReadonly())return;let n=!this.selectAllChecked(),e=this.selectableOptions(),t=this.internalValue()??[],r=n?[...t,...e.filter(o=>!this.isSelected(o.value)).map(o=>o.value)]:t.filter(o=>!e.some(l=>this.compareWith()(o,l.value)));this.selectAll.set(n),this.updateValue(r),this.selectionChange.emit({value:r,source:`select-all`}),this.emitIntent(n,`toggle`)}reset(){super.reset(),this.selectAll()&&(this.selectAll.set(!1),this.emitIntent(!1,`reset`))}selectOption(n){if(n.disabled||n.groupDisabled||this.disabled()||this.isReadonly())return;let e=this.isSelected(n.value),t=e?(this.internalValue()??[]).filter(r=>!this.compareWith()(r,n.value)):[...this.internalValue()??[],n.value];this.updateValue(t),this.selectionChange.emit({value:t,source:`user`}),e&&this.selectAll()&&(this.selectAll.set(!1),this.emitIntent(!1,`item-deselected`))}emitIntent(n,e,t=this.selectionScope()??this.searchTerm()){this.selectAllIntentChange.emit({selected:n,scope:t,values:this.internalValue()??[],reason:e})}static ɵfac=function(e){return new(e||i)};static ɵcmp=G({type:i,selectors:[[`bx-multi-select`]],viewQuery:function(e,t){e&1&&Xt(t.summaryOverflow,ys,5),e&2&&ft()},inputs:{allSelectedTooltip:[1,`allSelectedTooltip`],allSelectedText:[1,`allSelectedText`],selectedCountText:[1,`selectedCountText`],summaryThreshold:[1,`summaryThreshold`],showSelectAll:[1,`showSelectAll`],selectAllLabel:[1,`selectAllLabel`],selectionScope:[1,`selectionScope`],selectAll:[1,`selectAll`]},outputs:{selectAll:`selectAllChange`,selectionChange:`selectionChange`,selectAllIntentChange:`selectAllIntentChange`},features:[Cn$1],ngContentSelectors:Ss,decls:22,vars:48,consts:[[`origin`,`cdkOverlayOrigin`],[`valueOverflow`,`bxTruncate`],[`summaryOverflow`,`bxTruncate`],[`labelOverflow`,`bxTruncate`],[`panelOverlay`,`cdkConnectedOverlay`],[`pagination`,`bxLoadMore`],[`searchInput`,``],[3,`control`,`inline`,`tooltip`,`showLoadingIndicator`,`hint`,`hintEnd`,`subscriptSizing`,`forId`],[1,`bx-select-control`],[`type`,`button`,`role`,`combobox`,`aria-haspopup`,`listbox`,`cdkOverlayOrigin`,``,`bxSurface`,``,1,`bx-select-trigger`,3,`click`,`keydown`,`blur`,`bxTooltip`,`bxTooltipHover`,`bxTooltipTouch`,`id`,`disabled`],[1,`bx-select-container`],[1,`bx-floating-label`],[1,`bx-select-value`,3,`bxTruncate`],[3,`ngTemplateOutlet`,`ngTemplateOutletContext`],[1,`bx-selected-tags`],[`bxTruncate`,``,`aria-hidden`,`true`,1,`bx-select-measure`],[`aria-hidden`,`true`,1,`bx-select-caret`],[3,`size`,`decorative`],[`name`,`chevron-down`,`size`,`16`],[`bx-button`,``,`type`,`button`,`variant`,`text`,1,`bx-select-clear`,3,`surfaceEffects`,`disabled`,`bxTooltip`],[`cdkConnectedOverlay`,``,3,`cdkConnectedOverlayOrigin`,`cdkConnectedOverlayOpen`,`cdkConnectedOverlayPositions`,`cdkConnectedOverlayHasBackdrop`,`cdkConnectedOverlayPush`,`cdkConnectedOverlayViewportMargin`,`cdkConnectedOverlayScrollStrategy`,`cdkConnectedOverlayUsePopover`,`cdkConnectedOverlayWidth`],[3,`bxTruncate`],[`aria-hidden`,`true`,1,`bx-field-required`],[`tooltip`,``,3,`text`,`config`,`focusable`,`tooltipOnTruncate`],[3,`text`,`config`,`disabled`,`focusable`,`tooltipOnTruncate`],[1,`bx-overflow-tag`,3,`text`,`config`,`tooltip`,`focusable`,`tooltipOnTruncate`],[`bx-button`,``,`type`,`button`,`variant`,`text`,1,`bx-select-clear`,3,`click`,`surfaceEffects`,`disabled`,`bxTooltip`],[`name`,`x`,`size`,`16`],[`cdkConnectedOverlay`,``,3,`overlayOutsideClick`,`attach`,`detach`,`positionChange`,`cdkConnectedOverlayOrigin`,`cdkConnectedOverlayOpen`,`cdkConnectedOverlayPositions`,`cdkConnectedOverlayHasBackdrop`,`cdkConnectedOverlayPush`,`cdkConnectedOverlayViewportMargin`,`cdkConnectedOverlayScrollStrategy`,`cdkConnectedOverlayUsePopover`,`cdkConnectedOverlayWidth`],[`bxSurface`,``,`data-bx-surface`,`glass`,`tabindex`,`-1`,1,`bx-select-panel`,3,`keydown`,`bxSurfaceInteractive`],[1,`bx-select-search-container`],[`type`,`button`,`role`,`checkbox`,1,`bx-select-all`,3,`disabled`],[`bxLoadMore`,``,1,`bx-select-menu-container`,3,`loadMore`,`loadMoreHasMore`,`loadMoreSuppressed`,`loadMoreLoading`,`loadMoreDisabled`,`loadMoreError`,`loadMoreConfig`,`loadMoreTemplate`,`loadMoreRevision`],[`role`,`listbox`,3,`hidden`,`id`],[`role`,`status`,1,`bx-select-search-state`],[1,`bx-select-loading`],[3,`search`,`keydown.enter`,`value`,`compact`,`placeholder`,`ariaLabel`],[`type`,`button`,`role`,`checkbox`,1,`bx-select-all`,3,`click`,`disabled`],[3,`checked`,`indeterminate`,`disabled`],[1,`bx-select-group`,3,`id`],[`type`,`button`,`role`,`option`,`tabindex`,`-1`,1,`bx-select-option`,3,`click`,`disabled`],[3,`checked`,`disabled`],[`size`,`16`,3,`name`],[`role`,`status`,1,`bx-select-empty`],[3,`size`,`label`]],template:function(e,t){if(e&1&&(Ae(_s),_(0,`bx-form-field`,7)(1,`div`,8)(2,`button`,9,0),te(`click`,function(){return t.toggleOpen()})(`keydown`,function(o){return t.onTriggerKey(o)})(`blur`,function(){return t.onTriggerBlur()}),_(4,`div`,10),j(5,ws,5,3,`span`,11),_(6,`span`,12,1),j(8,Os,1,2,`ng-container`,13)(9,Es,3,1,`span`,14)(10,Rs,1,1),D(),_(11,`span`,15,2),X(13),D()(),pe(14),_(15,`span`,16),j(16,Ls,1,2,`bx-loading-spinner`,17)(17,As,1,0,`bx-icon`,18),D()(),j(18,Fs,2,4,`button`,19),D(),j(19,Qs,2,9,null,20),pe(20,1,Cs),pe(21,2,Ms),D()),e&2){let r;R(`control`,t.fieldControl)(`inline`,!0)(`tooltip`,t.tooltip())(`showLoadingIndicator`,!1)(`hint`,t.hint())(`hintEnd`,t.hintEnd())(`subscriptSizing`,t.resolvedSubscriptSizing())(`forId`,t.controlId()),y(),ae(`has-clear`,t.showClear()),y(),ae(`has-label`,!!t.label())(`is-invalid`,t.showError())(`is-outline`,t.resolvedAppearance()===`outline`)(`is-open`,t.isOpen())(`is-floating`,t.isFloating())(`is-readonly`,t.isReadonly())(`is-keyboard-focused`,t.keyboardFocused()),R(`bxTooltip`,t.selectionTooltip())(`bxTooltipHover`,t.selectionDisplay()!==`tags`||t.selectAll()&&!!t.allSelectedText())(`bxTooltipTouch`,t.selectionDisplay()===`tags`&&!(t.selectAll()&&t.allSelectedText())?`none`:`longpress`)(`id`,t.controlId())(`disabled`,t.disabled()),B(`data-testid`,t.dataTestId())(`aria-label`,t.ariaLabel()||t.resolvedLabel())(`aria-labelledby`,t.ariaLabelledBy())(`aria-describedby`,t.describedBy())(`aria-invalid`,t.showError())(`aria-required`,t.required())(`aria-readonly`,t.isReadonly())(`aria-busy`,t.loading()||t.pending()||t.isSearching())(`aria-expanded`,t.isOpen())(`aria-controls`,t.isPanelAttached()?t.controlId()+`-options`:null),y(3),F(t.label()?5:-1),y(),ae(`is-placeholder`,!t.selectedOptionLabel()),R(`bxTruncate`,!(t.selectionDisplay()===`tags`&&t.selectedOptions().length)&&!t.triggerTemplate()),y(2),F((r=t.triggerTemplate())?8:t.selectionDisplay()===`tags`&&t.selectedOptions().length?9:10,r),y(5),fe(t.selectedOptionLabel()),y(3),F(t.loading()||t.pending()||t.isSearching()?16:17),y(2),F(t.showClear()?18:-1),y(),F(t.isPanelAttached()?19:-1)}},dependencies:[Rt$1,uF,dF,hy,U,me,_n,Vt$1,kn,Le,sr,Eb,Ml,qi,_o$1,sT],styles:[`
[_nghost-%COMP%] {
  display: block;
  width: 100%;
}
.bx-select-trigger[_ngcontent-%COMP%] {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-block-size: 3.85rem;
  box-sizing: border-box;
  background-color: var(--%NS%bx-bg-neutral);
  border-radius: var(--%NS%bx-rounded-sm, 0.25rem) var(--%NS%bx-rounded-sm, 0.25rem) 0 0;
  border: none;
  border-bottom: var(--%NS%bx-border-width, 1px) var(--%NS%bx-border-style, solid) var(--%NS%bx-border-strong);
  padding: 0;
  padding-inline-end: var(--%NS%bx-space-3, 0.75rem);
  cursor: pointer;
  text-align: left;
  font-family: inherit;
  outline: none;
}
.bx-select-trigger[_ngcontent-%COMP%]:hover:not(:disabled, .is-readonly) {
  background-color: var(--%NS%bx-bg-neutral-hover);
}
.bx-select-trigger[_ngcontent-%COMP%]:disabled {
  background-color: var(--%NS%bx-bg-element);
  opacity: 0.7;
  border-bottom-style: dotted;
  cursor: not-allowed;
}
.bx-select-trigger.is-readonly[_ngcontent-%COMP%] {
  cursor: default;
}
.bx-select-trigger[_ngcontent-%COMP%]::after {
  content: "";
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 2px;
  background-color: var(--%NS%bx-primary);
  transform: scaleX(0);
  transition: transform 0.2s linear(0, 0.18 12%, 0.58 32%, 0.87 56%, 0.98 78%, 1);
  transform-origin: center;
  z-index: 2;
}
.bx-select-trigger.is-open[_ngcontent-%COMP%]::after, 
.bx-select-trigger[_ngcontent-%COMP%]:focus-visible:not(:disabled)::after {
  transform: scaleX(1);
}
.bx-select-trigger.is-invalid[_ngcontent-%COMP%] {
  border-bottom-color: var(--%NS%bx-border-danger);
}
.bx-select-trigger.is-invalid[_ngcontent-%COMP%]::after {
  background-color: var(--%NS%bx-border-danger);
  transform: scaleX(1);
}
.bx-select-container[_ngcontent-%COMP%] {
  flex: 1;
  min-width: 0;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.bx-select-value[_ngcontent-%COMP%] {
  width: 100%;
  box-sizing: border-box;
  padding: var(--%NS%bx-space-6, 1.5rem) 0 var(--%NS%bx-space-2, 0.5rem) var(--%NS%bx-space-3, 0.75rem);
  min-block-size: 3.85rem;
  display: flex;
  align-items: center;
  font-size: 1rem;
  color: var(--%NS%bx-text-heading);
  line-height: 1.4;
  z-index: 1;
}
.bx-select-value.is-placeholder[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-secondary);
}
.bx-floating-label[_ngcontent-%COMP%] {
  display: flex;
  align-items: baseline;
  position: absolute;
  left: var(--%NS%bx-space-3, 0.75rem);
  right: 0;
  min-inline-size: 0;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1rem;
  color: var(--%NS%bx-text-secondary);
  pointer-events: none;
  z-index: 2;
  transition:
    top 0.2s linear(0, 0.18 12%, 0.58 32%, 0.87 56%, 0.98 78%, 1),
    transform 0.2s linear(0, 0.18 12%, 0.58 32%, 0.87 56%, 0.98 78%, 1),
    font-size 0.2s linear(0, 0.18 12%, 0.58 32%, 0.87 56%, 0.98 78%, 1),
    color 0.15s ease;
}
.bx-select-trigger.is-floating[_ngcontent-%COMP%]   .bx-floating-label[_ngcontent-%COMP%] {
  top: var(--%NS%bx-space-2, 0.5rem);
  transform: translateY(0);
  font-size: 0.75rem;
  font-weight: 500;
}
.bx-select-trigger.is-floating.is-open[_ngcontent-%COMP%]   .bx-floating-label[_ngcontent-%COMP%], 
.bx-select-trigger.is-floating[_ngcontent-%COMP%]:focus-visible:not(.is-readonly)   .bx-floating-label[_ngcontent-%COMP%] {
  color: var(--%NS%bx-primary);
}
.bx-select-trigger.is-invalid[_ngcontent-%COMP%]   .bx-floating-label[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-danger) !important;
}
.bx-field-required[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-secondary);
  margin-left: 0.125rem;
}
.bx-select-caret[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  inline-size: var(--%NS%bx-space-4, 1rem);
  block-size: var(--%NS%bx-space-4, 1rem);
  margin-inline-start: var(--%NS%bx-space-2, 0.5rem);
  color: var(--%NS%bx-text-secondary);
  transition: transform 0.2s ease;
  transform-origin: center;
}
.is-open[_ngcontent-%COMP%]   .bx-select-caret[_ngcontent-%COMP%] {
  transform: rotate(180deg);
}
.bx-select-panel[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  min-width: 100%;
  width: 100%;
  max-width: 100%;
  background-color: var(--%NS%bx-glass-surface, var(--%NS%bx-bg-surface));
  border: var(--%NS%bx-border-width, 1px) var(--%NS%bx-border-style, solid) var(--%NS%bx-glass-edge, var(--%NS%bx-border-default));
  border-radius: var(--%NS%bx-rounded-lg, 0.75rem);
  box-shadow: var(--%NS%bx-shadow-sm, 0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1));
  overflow: hidden;
  max-height: 18rem;
}
.bx-select-search-container[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  padding: var(--%NS%bx-space-1, 0.25rem);
  flex-shrink: 0;
  border-bottom: var(--%NS%bx-border-width, 1px) var(--%NS%bx-border-style, solid) var(--%NS%bx-border-subtle);
}
.bx-select-menu-container[_ngcontent-%COMP%] {
  min-height: 0;
  overflow: hidden auto;
  overscroll-behavior: contain;
  padding: var(--%NS%bx-space-1, 0.25rem);
}
.bx-select-menu-container[_ngcontent-%COMP%]::-webkit-scrollbar {
  width: 6px;
}
.bx-select-menu-container[_ngcontent-%COMP%]::-webkit-scrollbar-track {
  background: var(--%NS%bx-scroll-bg);
}
.bx-select-menu-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {
  background: var(--%NS%bx-scroll-thumb);
  border-radius: var(--%NS%bx-rounded-pill, 9999px);
}
.bx-select-menu-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {
  background: var(--%NS%bx-scroll-thumb-hover);
}
.bx-select-option[_ngcontent-%COMP%] {
  display: flex;
  width: 100%;
  padding: var(--%NS%bx-space-2, 0.5rem) var(--%NS%bx-space-3, 0.75rem);
  border: 0;
  border-radius: var(--%NS%bx-rounded-sm, 0.25rem);
  background: transparent;
  color: var(--%NS%bx-text-primary);
  font: inherit;
  font-size: 0.875rem;
  line-height: 1.4;
  text-align: start;
  cursor: pointer;
}
.bx-select-option[aria-selected=true][_ngcontent-%COMP%] {
  background: var(--%NS%bx-accent-subtle);
  color: var(--%NS%bx-text-accent);
}
.bx-select-option[_ngcontent-%COMP%]:hover:not(:disabled), 
.bx-select-option[_ngcontent-%COMP%]:active:not(:disabled) {
  background: var(--%NS%bx-bg-element-hover);
}
.bx-select-option[aria-selected=true][_ngcontent-%COMP%]:hover:not(:disabled) {
  background: var(--%NS%bx-accent-subtle);
}
.bx-select-option[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--%NS%bx-border-accent);
  outline-offset: -2px;
}
.bx-select-option[_ngcontent-%COMP%]:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}
.bx-select-item-inner[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: var(--%NS%bx-space-2, 0.5rem);
  width: 100%;
}
.bx-select-check-placeholder[_ngcontent-%COMP%] {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--%NS%bx-text-accent);
}
.bx-select-empty[_ngcontent-%COMP%] {
  padding: var(--%NS%bx-space-3, 0.75rem);
  text-align: center;
  color: var(--%NS%bx-text-secondary);
  font-size: 0.875rem;
  font-style: italic;
}
.bx-select-trigger[data-bx-surface][_ngcontent-%COMP%] {
  --%NS%bx-glass-surface: var(--%NS%bx-bg-neutral);
  --%NS%bx-glass-shadow: none;
}
.bx-select-trigger[data-bx-surface].is-invalid[_ngcontent-%COMP%] {
  --%NS%bx-glass-edge: var(--%NS%bx-border-danger);
}
.bx-select-panel[data-bx-surface][_ngcontent-%COMP%] {
  --%NS%bx-glass-min-opacity: var(--%NS%bx-dropdown-min-opacity, 0);
  --%NS%bx-glass-opacity: var(--%NS%bx-dropdown-opacity, min(1, var(--%NS%bx-glass-material-opacity, 0.5) + 0.18));
  --%NS%bx-glass-radius: var(--%NS%bx-rounded-lg, 0.75rem);
  --%NS%bx-glass-surface: var(--%NS%bx-select-panel-background, var(--%NS%bx-bg-surface));
  --%NS%bx-glass-text: var(--%NS%bx-text-primary);
  --%NS%bx-glass-edge: var(--%NS%bx-border-default);
  --%NS%bx-glass-shadow: var(--%NS%bx-shadow-sm, 0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1));
}
.bx-select-trigger[data-bx-surface][_ngcontent-%COMP%] {
  --%NS%bx-glass-surface: var(--%NS%bx-bg-neutral);
  --%NS%bx-glass-min-opacity: 0.45;
  --%NS%bx-glass-edge: var(--%NS%bx-border-default);
  --%NS%bx-glass-shadow: none;
  border: var(--%NS%bx-border-width, 1px) var(--%NS%bx-border-style, solid) var(--%NS%bx-glass-edge);
  border-radius: var(--%NS%bx-rounded-lg, 0.75rem);
}
.bx-select-trigger[data-bx-surface][_ngcontent-%COMP%]::after {
  display: none;
}
.bx-select-trigger[data-bx-surface][_ngcontent-%COMP%]:focus-within:not(.is-disabled, :disabled, .is-readonly, [readonly], [aria-readonly=true], :has([readonly], [aria-readonly=true])), 
.bx-select-trigger[data-bx-surface][_ngcontent-%COMP%]:focus-visible:not(:disabled, [readonly], [aria-readonly=true]), 
.bx-select-trigger[data-bx-surface].is-open[_ngcontent-%COMP%]:not(:disabled), 
.bx-select-trigger[data-bx-surface].is-readonly.is-keyboard-focused[_ngcontent-%COMP%]:focus-within, 
.bx-select-trigger[data-bx-surface][_ngcontent-%COMP%]:has(.bx-readonly.is-keyboard-focused):focus-within {
  --%NS%bx-glass-edge: var(--%NS%bx-border-brand);
  outline: 2px solid var(--%NS%bx-border-brand);
  outline-offset: -2px;
  --%NS%bx-glass-shadow: none;
}
.bx-select-trigger[data-bx-surface].is-invalid[_ngcontent-%COMP%] {
  --%NS%bx-glass-surface: var(--%NS%bx-bg-neutral);
  --%NS%bx-glass-min-opacity: 0.45;
  --%NS%bx-glass-edge: color-mix(in srgb, var(--%NS%bx-text-danger) 40%, var(--%NS%bx-border-default));
  border-block-end-color: var(--%NS%bx-glass-edge);
  --%NS%bx-glass-shadow: 0 8px 18px -10px color-mix(in srgb, var(--%NS%bx-text-danger) 65%, transparent);
  outline-color: var(--%NS%bx-border-danger);
}
.bx-select-trigger[_ngcontent-%COMP%]:not(.is-floating)   .bx-floating-label[_ngcontent-%COMP%] {
  right: 0;
}
.bx-select-item-inner[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:last-child {
  flex: 1 1 auto;
  min-width: 0;
  white-space: normal;
  overflow-wrap: anywhere;
}
.bx-select-group[_ngcontent-%COMP%] {
  padding: var(--%NS%bx-space-2, 0.5rem) var(--%NS%bx-space-3, 0.75rem);
  font-weight: 600;
  color: var(--%NS%bx-text-secondary);
  font-size: 0.75rem;
}
.bx-select-option[_ngcontent-%COMP%] {
  align-items: center;
  gap: var(--%NS%bx-space-2, 0.5rem);
}
.bx-select-panel[_ngcontent-%COMP%] {
  max-block-size: min(var(--%NS%bx-select-panel-height, 22rem), 70dvh);
}
.bx-select-menu-container[_ngcontent-%COMP%] {
  flex: 1 1 auto;
}
.bx-select-trigger.is-outline[_ngcontent-%COMP%] {
  border: var(--%NS%bx-border-width, 1px) var(--%NS%bx-border-style, solid) var(--%NS%bx-border-strong);
  border-radius: var(--%NS%bx-field-radius, var(--%NS%bx-rounded-md, 0.5rem));
}
.bx-select-trigger.is-outline.is-invalid[_ngcontent-%COMP%] {
  border-color: var(--%NS%bx-border-danger);
}
.bx-select-panel[_ngcontent-%COMP%] {
  background: var(--%NS%bx-select-panel-background, var(--%NS%bx-bg-surface));
  border-color: var(--%NS%bx-select-panel-border, var(--%NS%bx-border-strong));
  box-shadow: var(--%NS%bx-select-panel-shadow, var(--%NS%bx-shadow-lg, 0 12px 20px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.1)));
  isolation: isolate;
}
.bx-select-measure[_ngcontent-%COMP%] {
  position: absolute;
  visibility: hidden;
  pointer-events: none;
  inset-inline: 0;
  box-sizing: border-box;
  padding-inline-start: var(--%NS%bx-space-3, 0.75rem);
  font: inherit;
  font-size: 1rem;
}
.bx-select-loading[_ngcontent-%COMP%] {
  padding: var(--%NS%bx-space-2, 0.5rem) var(--%NS%bx-space-3, 0.75rem);
}
.bx-select-menu-container[_ngcontent-%COMP%] {
  --%NS%bx-load-more-padding: var(--%NS%bx-space-2, 0.5rem) var(--%NS%bx-space-3, 0.75rem);
}
.bx-select-search-state[_ngcontent-%COMP%] {
  display: flex;
  justify-content: center;
  align-items: center;
  min-block-size: 4rem;
  padding: var(--%NS%bx-space-3, 0.75rem);
  color: var(--%NS%bx-text-secondary);
}
[role=listbox][hidden][_ngcontent-%COMP%] {
  display: none;
}
.bx-selected-tags[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: var(--%NS%bx-select-tag-gap, var(--%NS%bx-space-1, 0.25rem));
  min-inline-size: 0;
  max-inline-size: 100%;
  overflow: hidden;
}
.bx-selected-tags[_ngcontent-%COMP%]    > bx-tag[_ngcontent-%COMP%] {
  min-inline-size: 0;
}
.bx-selected-tags[_ngcontent-%COMP%]    > .bx-overflow-tag[_ngcontent-%COMP%] {
  flex: 0 0 auto;
}
[role=listbox][_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: var(--%NS%bx-select-option-gap, var(--%NS%bx-space-1, 0.25rem));
}
.bx-select-option[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:last-child {
  min-inline-size: 0;
  overflow-wrap: anywhere;
}
[data-bx-selection-surface=true][_ngcontent-%COMP%]   .bx-select-option[_ngcontent-%COMP%]:is(:hover, :active):not([aria-selected=true]) {
  background: transparent;
}
.bx-select-control[_ngcontent-%COMP%] {
  position: relative;
  inline-size: 100%;
  min-inline-size: 0;
}
.bx-select-control.has-clear[_ngcontent-%COMP%]   .bx-select-container[_ngcontent-%COMP%] {
  padding-inline-end: var(--%NS%bx-space-8, 2rem);
}
.bx-select-control.has-clear[_ngcontent-%COMP%]   .bx-select-measure[_ngcontent-%COMP%] {
  inset-inline-end: var(--%NS%bx-space-8, 2rem);
}
.bx-select-clear.bx-btn[_ngcontent-%COMP%] {
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
.bx-select-clear.bx-btn[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--%NS%bx-border-brand);
  outline-offset: 0;
}
.bx-select-clear.bx-btn[_ngcontent-%COMP%]:hover:not(:disabled) {
  color: var(--%NS%bx-text-primary);
  background: var(--%NS%bx-bg-element-hover);
}
.bx-select-clear.bx-btn[_ngcontent-%COMP%]:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}
.bx-select-clear.bx-btn[_ngcontent-%COMP%] {
  position: absolute;
  inset-block-start: 50%;
  inset-inline-end: calc(1px + var(--%NS%bx-space-3, 0.75rem) + var(--%NS%bx-space-4, 1rem) + var(--%NS%bx-space-2, 0.5rem));
  transform: translateY(-50%);
  z-index: 3;
}
.bx-select-trigger[_ngcontent-%COMP%]:not(.has-label)   .bx-select-value[_ngcontent-%COMP%] {
  padding-block: var(--%NS%bx-space-3, 0.75rem);
}
.bx-select-all[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: var(--%NS%bx-space-2, 0.5rem);
  padding: var(--%NS%bx-space-3, 0.75rem);
  border: 0;
  border-bottom: var(--%NS%bx-border-width, 1px) var(--%NS%bx-border-style, solid) var(--%NS%bx-border-subtle);
  background: transparent;
  color: var(--%NS%bx-text-primary);
  font: inherit;
  text-align: start;
  cursor: pointer;
}
.bx-select-all[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--%NS%bx-border-brand);
  outline-offset: -2px;
}`]})};var wo=class i extends We{focus(n){this.nativeElement.focus(n)}onReadonlyInteraction(n){!this.isReadonly()||this.nativeElement.tagName!==`SELECT`||`key`in n&&n.key===`Tab`||n.preventDefault()}static ɵfac=(()=>{let n;return function(t){return(n||(n=Wo$1(i)))(t||i)}})();static ɵdir=Z({type:i,selectors:[[`input`,`bxInput`,``],[`textarea`,`bxInput`,``],[`select`,`bxInput`,``]],hostAttrs:[1,`bx-native-control`],hostVars:12,hostBindings:function(e,t){e&1&&te(`blur`,function(){return t.markAsTouched()})(`pointerdown`,function(o){return t.onReadonlyInteraction(o)})(`click`,function(o){return t.onReadonlyInteraction(o)})(`keydown`,function(o){return t.onReadonlyInteraction(o)}),e&2&&(Ba$1(`id`,t.controlId())(`disabled`,t.effectiveDisabled())(`required`,t.effectiveRequired()),B(`readonly`,t.isReadonly()?``:null)(`aria-readonly`,t.isReadonly())(`placeholder`,t.resolvedPlaceholder())(`name`,t.name()||null)(`aria-invalid`,t.showError())(`aria-required`,t.effectiveRequired())(`aria-describedby`,t.describedBy())(`aria-label`,t.ariaLabel())(`aria-labelledby`,t.ariaLabelledBy()))},exportAs:[`bxInput`],features:[Qt([{provide:qn,useExisting:hn(()=>i)}]),Cn$1]})};var Js=[[[`bx-error`]],[[`bx-hint`]]];var ed=[`bx-error`,`bx-hint`];var nd=[`ngProjectAs`,`bx-error`,5,[`bx-error`]];var td=[`ngProjectAs`,`bx-hint`,5,[`bx-hint`]];function id(i,n){if(i&1&&xe(0,`span`),i&2){let e=n.$implicit;_e(`inset-inline-start`,e,`%`)}}function rd(i,n){if(i&1&&(_(0,`output`,8),X(1),D()),i&2){let e=w();y(),uE(``,e.displayWith()(e.start()),` – `,e.displayWith()(e.end()))}}var Oo=class i extends se{labelsAdapter=f(Se$1,{optional:!0});start=g(()=>Math.max(this.min(),Math.min(this.max(),this.value()?.[0]??this.min())));end=g(()=>Math.max(this.start(),Math.min(this.max(),this.value()?.[1]??this.max())));startPercent=g(()=>this.max()>this.min()?(this.start()-this.min())/(this.max()-this.min())*100:0);endPercent=g(()=>this.max()>this.min()?(this.end()-this.min())/(this.max()-this.min())*100:100);resolvedStartLabel=g(()=>J(this.startLabel(),this.labelsAdapter));resolvedEndLabel=g(()=>J(this.endLabel(),this.labelsAdapter));ticks=g(()=>{let n=this.max()-this.min(),e=this.step();if(!this.showTickMarks()||!Number.isFinite(n)||!Number.isFinite(e)||n<=0||e<=0)return[];let t=Math.floor(n/e),r=Math.min(1e3,t);return r>0?Array.from({length:r+1},(o,l)=>Math.round(l*t/r)*e/n*100):[]});min=b(0);max=b(100);step=b(1);discrete=b(!1);showTickMarks=b(!1);displayWith=b(String);startLabel=b(`Minimum value`);endLabel=b(`Maximum value`);onRangeInput(n,e){if(this.disabled()||this.isReadonly())return;let t=n.target,r=t.valueAsNumber,o=e===`start`?[Math.min(this.end(),r),this.end()]:[this.start(),Math.max(this.start(),r)];t.value=String(e===`start`?o[0]:o[1]),this.updateValue(o)}onBlur(){this.markAsTouched()}static ɵfac=(()=>{let n;return function(t){return(n||(n=Wo$1(i)))(t||i)}})();static ɵcmp=G({type:i,selectors:[[`bx-range-slider`]],inputs:{min:[1,`min`],max:[1,`max`],step:[1,`step`],discrete:[1,`discrete`],showTickMarks:[1,`showTickMarks`],displayWith:[1,`displayWith`],startLabel:[1,`startLabel`],endLabel:[1,`endLabel`]},features:[Cn$1],ngContentSelectors:ed,decls:13,vars:33,consts:[[3,`control`,`label`,`hint`,`hintEnd`,`tooltip`,`forId`],[`role`,`group`,1,`bx-range-slider`],[`aria-hidden`,`true`,1,`bx-range-track`],[1,`bx-range-input`],[`bxSlider`,``,`type`,`range`,3,`input`,`blur`,`id`,`min`,`max`,`step`,`value`,`disabled`],[`bxSlider`,``,`type`,`range`,3,`input`,`blur`,`min`,`max`,`step`,`value`,`disabled`],[`aria-hidden`,`true`,1,`bx-range-ticks`],[3,`inset-inline-start`],[1,`bx-range-values`]],template:function(e,t){e&1&&(Ae(Js),_(0,`bx-form-field`,0)(1,`div`,1),xe(2,`div`,2),_(3,`div`,3)(4,`input`,4),te(`input`,function(o){return t.onRangeInput(o,`start`)})(`blur`,function(){return t.onBlur()}),D()(),_(5,`div`,3)(6,`input`,5),te(`input`,function(o){return t.onRangeInput(o,`end`)})(`blur`,function(){return t.onBlur()}),D()(),_(7,`div`,6),$t(8,id,1,2,`span`,7,Fa$1),D()(),j(10,rd,2,2,`output`,8),pe(11,0,nd),pe(12,1,td),D()),e&2&&(R(`control`,t.fieldControl)(`label`,t.label())(`hint`,t.hint())(`hintEnd`,t.hintEnd())(`tooltip`,t.tooltip())(`forId`,t.controlId()),y(),_e(`--%NS%bx-range-start`,t.startPercent()/100)(`--%NS%bx-range-end`,t.endPercent()/100),ae(`is-readonly`,t.isReadonly()&&!t.disabled()),B(`aria-label`,t.ariaLabel()||t.resolvedLabel()),y(3),R(`id`,t.controlId())(`min`,t.min())(`max`,t.max())(`step`,t.step())(`value`,t.start())(`disabled`,t.disabled()||t.isReadonly()),B(`aria-valuemax`,t.end())(`aria-label`,t.resolvedStartLabel())(`aria-valuetext`,t.displayWith()(t.start()))(`aria-describedby`,t.describedBy()),y(2),R(`min`,t.min())(`max`,t.max())(`step`,t.step())(`value`,t.end())(`disabled`,t.disabled()||t.isReadonly()),B(`aria-valuemin`,t.start())(`aria-label`,t.resolvedEndLabel())(`aria-valuetext`,t.displayWith()(t.end()))(`aria-describedby`,t.describedBy()),y(2),Wt(t.ticks()),y(2),F(t.discrete()?10:-1))},dependencies:[U,Ft],styles:[`
[_nghost-%COMP%] {
  display: block;
}
.bx-range-slider[_ngcontent-%COMP%] {
  --%NS%bx-slider-lens-start: var(--%NS%bx-range-start);
  --%NS%bx-slider-lens-end: var(--%NS%bx-range-end);
  --%NS%bx-slider-lens-track-color: var(--%NS%bx-bg-neutral);
  --%NS%bx-slider-fill-display: none;
  --%NS%bx-slider-stretch-limit: clamp(0, (var(--%NS%bx-range-end) - var(--%NS%bx-range-start)) * 0.5, 0.065);
  position: relative;
  block-size: calc(max(var(--%NS%bx-space-10, 2.5rem), var(--%NS%bx-slider-thumb-size, var(--%NS%bx-space-6, 1.5rem)) * 1.25) + var(--%NS%bx-slider-vertical-padding, var(--%NS%bx-space-2, 0.5rem)) * 2);
  inline-size: 100%;
}
.bx-range-track[_ngcontent-%COMP%] {
  box-sizing: border-box;
  height: var(--%NS%bx-space-2, 0.5rem);
  border: 1px solid var(--%NS%bx-border-strong);
  border-radius: var(--%NS%bx-rounded-pill, 9999px);
  background: var(--%NS%bx-bg-neutral);
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.16);
  position: absolute;
  inset-block-start: 50%;
  inset-inline: 0;
  transform: translateY(-50%);
}
.bx-range-track[_ngcontent-%COMP%]::after {
  content: "";
  position: absolute;
  inset-block: 0;
  inset-inline: calc(var(--%NS%bx-slider-thumb-size, var(--%NS%bx-space-6, 1.5rem)) / 2 - 1px + var(--%NS%bx-range-start) * (100% + 2px - var(--%NS%bx-slider-thumb-size, var(--%NS%bx-space-6, 1.5rem)))) calc(var(--%NS%bx-slider-thumb-size, var(--%NS%bx-space-6, 1.5rem)) / 2 - 1px + (1 - var(--%NS%bx-range-end)) * (100% + 2px - var(--%NS%bx-slider-thumb-size, var(--%NS%bx-space-6, 1.5rem))));
  background: var(--%NS%bx-accent);
  border-radius: inherit;
}
.bx-range-input[_ngcontent-%COMP%] {
  position: absolute;
  inset: 0;
  pointer-events: none;
}
.bx-range-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {
  pointer-events: none;
}
.bx-range-slider.is-readonly[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:disabled {
  cursor: default;
}
.bx-range-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-slider-runnable-track {
  background: transparent;
  border-color: transparent;
  box-shadow: none;
}
.bx-range-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-range-track {
  background: transparent;
  border-color: transparent;
  box-shadow: none;
}
.bx-range-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-slider-thumb {
  pointer-events: auto;
}
.bx-range-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-range-thumb {
  pointer-events: auto;
}
.bx-range-ticks[_ngcontent-%COMP%] {
  position: absolute;
  inset-inline: calc(var(--%NS%bx-slider-thumb-size, var(--%NS%bx-space-6, 1.5rem)) / 2);
  inset-block-start: 50%;
  pointer-events: none;
  z-index: 3;
}
.bx-range-ticks[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {
  position: absolute;
  inline-size: 2px;
  block-size: 4px;
  background: var(--%NS%bx-text-primary);
  transform: translate(-50%, -50%);
}
.bx-range-ticks[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:dir(rtl) {
  transform: translate(50%, -50%);
}
.bx-range-values[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-secondary);
  font-size: 0.875rem;
}`]})};var od=[`panelTemplate`];var ad=[`anchor`];var ld=[`nativeInput`];var sd=[[[`bx-error`]],[[`bx-hint`]]];var dd=[`bx-error`,`bx-hint`];var cd=[`ngProjectAs`,`bx-error`,5,[`bx-error`]];var ud=[`ngProjectAs`,`bx-hint`,5,[`bx-hint`]];var bd=(i,n,e,t)=>({$implicit:i,label:n,active:e,index:t});var pd=(i,n)=>n.value;function gd(i,n){i&1&&(_(0,`span`,16),X(1,`*`),D())}function md(i,n){if(i&1&&(_(0,`label`,7)(1,`span`,15),X(2),D(),j(3,gd,2,0,`span`,16),D()),i&2){let e=w();B(`for`,e.controlId()),y(2),fe(e.resolvedLabel()),y(),F(e.effectiveRequired()&&!e.resolvedHideRequiredMarker()?3:-1)}}function hd(i,n){if(i&1&&(_(0,`span`,17)(1,`span`,18),X(2),D(),_(3,`span`),X(4),D()()),i&2){let e=w();_e(`transform`,`translateX(`+-e.inputScroll()+`px)`),y(2),fe(e.internalValue()),y(2),fe(e.completionSuffix())}}function fd(i,n){if(i&1){let e=wt$1();_(0,`button`,19),te(`click`,function(){Be(e);let r=w();return Ve$1(r.clear())})(`keydown`,function(r){Be(e);let o=w();return Ve$1(o.onClearKey(r))})(`blur`,function(r){Be(e);let o=w();return Ve$1(o.onBlur(r))}),xe(1,`bx-icon`,20),D()}if(i&2){let e=w();R(`surfaceEffects`,!1)(`disabled`,e.effectiveDisabled())(`bxTooltip`,e.resolvedClearTooltip()),B(`aria-label`,e.resolvedClearLabel())}}function xd(i,n){i&1&&xe(0,`bx-loading-spinner`,13),i&2&&R(`size`,16)(`decorative`,!0)}function vd(i,n){i&1&&xe(0,`bx-icon`,14)}function yd(i,n){if(i&1&&yt$1(0,28),i&2){let e=w(),t=e.$implicit,r=e.$index,o=w(3);R(`ngTemplateOutlet`,n)(`ngTemplateOutletContext`,UP(2,bd,t,t.labelText,o.activeIndex()===r,r))}}function _d(i,n){if(i&1&&X(0),i&2){let e=w().$implicit;un(` `,e.labelText,` `)}}function Sd(i,n){if(i&1){let e=wt$1();_(0,`button`,27),te(`mousedown`,function(r){return r.preventDefault()})(`click`,function(){let r=Be(e).$implicit,o=w(3);return Ve$1(o.selectOption(r))}),j(1,yd,1,7,`ng-container`,28)(2,_d,1,1),D()}if(i&2){let e,t=n.$implicit,r=n.$index,o=w(3);ae(`is-active`,o.activeIndex()===r),R(`id`,o.controlId()+`-option-`+r)(`disabled`,t.disabled??!1),B(`aria-selected`,o.activeIndex()===r),y(),F((e=o.optionTemplate())?1:2,e)}}function Cd(i,n){if(i&1&&$t(0,Sd,3,6,`button`,26,pd),i&2){let e=w(2);Wt(e.filteredOptions())}}function Md(i,n){if(i&1&&(_(0,`div`,24),xe(1,`bx-loading-indicator`,29),D()),i&2){let e=w(2);y(),R(`size`,16)(`label`,e.loadingText())}}function Nd(i,n){if(i&1&&(_(0,`div`,25),X(1),D()),i&2){let e=w(2);y(),fe(e.resolvedEmptyText())}}function Td(i,n){if(i&1){let e=wt$1();_(0,`div`,21)(1,`div`,22,3),te(`focusout`,function(r){Be(e);let o=w();return Ve$1(o.onBlur(r))})(`loadMore`,function(r){Be(e);let o=w();return Ve$1(o.requestMore(r))}),_(3,`div`,23),j(4,Cd,2,0),D(),j(5,Md,2,2,`div`,24)(6,Nd,2,1,`div`,25),D()()}if(i&2){let e=Tt$1(2),t=w();R(`bxSurfaceInteractive`,!1),y(),R(`loadMoreHasMore`,t.hasMore())(`loadMoreLoading`,t.loading())(`loadMoreError`,t.loadError())(`loadMoreSuppressed`,t.searching())(`loadMoreDisabled`,t.effectiveDisabled()||t.isReadonly())(`loadMoreConfig`,t.loadMoreConfig())(`loadMoreTemplate`,t.loadMoreTemplate())(`loadMoreRevision`,t.loadMoreRevision()??t.options()),y(2),R(`id`,t.controlId()+`-listbox`),B(`aria-label`,t.ariaLabel()||t.resolvedLabel()||t.resolvedPlaceholder())(`aria-busy`,t.searching()||t.loading()),y(),F(t.searching()?-1:4),y(),F(t.searching()||t.loading()&&!e.actionVisible()?5:!t.loading()&&!t.loadError()&&!t.filteredOptions().length?6:-1)}}var ko=class i extends se{i18n=f(Se$1,{optional:!0});bxA11yService=f(Le$1);overlay=f(Rn);bxOverlayPositionService=f(_r);viewContainerRef=f(Bt);ngZone=f(re);context=f(Zn$1,{optional:!0});scrollLockService=f(Dr);browser=Pt$1(f(pt));scrollLockId=Jt();opened=M(!1);inputFocused=M(!1);composing=M(!1);caretAtEnd=M(!1);panelTemplate=Nt$1.required(`panelTemplate`);anchor=Nt$1.required(`anchor`);nativeInput=Nt$1.required(`nativeInput`);pagination=Nt$1(Le);labelText=Nt$1(_o$1);activeIndex=M(-1);autofilled=M(!1);labelTruncated=g(()=>this.labelText()?.truncated()??!1);isBusy=g(()=>this.searching()||this.loading()||this.pending());showClear=g(()=>this.clearable()&&!!this.internalValue()&&!this.isReadonly());resolvedClearLabel=g(()=>J(this.clearLabel(),this.i18n));resolvedClearTooltip=g(()=>J(this.clearTooltip()??this.clearLabel(),this.i18n));isFloating=g(()=>this.resolvedFloatLabel()===`always`||this.inputFocused()||this.isOpen()||this.autofilled()||!!this.internalValue());inputScroll=M(0);resolvedEmptyText=g(()=>J(this.emptyText(),this.i18n));resolvedOptions=g(()=>this.options().map(n=>s(r({},n),{labelText:J(n.label??n.value,this.i18n)})));filteredOptions=g(()=>{let n=(this.internalValue()??``).toLocaleLowerCase();return this.externalFiltering()||!n?this.resolvedOptions():this.resolvedOptions().filter(e=>e.labelText.toLocaleLowerCase().includes(n)||e.value.toLocaleLowerCase().includes(n))});activeId=g(()=>this.isOpen()&&!this.searching()&&this.filteredOptions()[this.activeIndex()]&&!this.filteredOptions()[this.activeIndex()].disabled?this.controlId()+`-option-`+this.activeIndex():null);completionOption=g(()=>{let n=this.internalValue()??``;if(!this.inlineCompletion()||!this.isOpen()||!this.inputFocused()||!this.caretAtEnd()||this.composing()||this.searching()||this.effectiveDisabled()||this.isReadonly()||!n)return;let e=this.filteredOptions(),t=this.activeIndex()>=0?e[this.activeIndex()]:e.find(r=>!r.disabled&&r.value.length>n.length&&r.value.toLocaleLowerCase().startsWith(n.toLocaleLowerCase()));return t&&!t.disabled&&t.value.length>n.length&&t.value.toLocaleLowerCase().startsWith(n.toLocaleLowerCase())?t:void 0});completionSuffix=g(()=>this.completionOption()?.value.slice((this.internalValue()??``).length)??``);isOpen=this.opened.asReadonly();options=b([]);inlineCompletion=b(!0);clearable=b(!0);clearLabel=b(`Clear selection`);clearTooltip=b(void 0);externalFiltering=b(!1);searching=b(!1);hasMore=b(!1);loadError=b(void 0);loadMoreConfig=b({});loadMoreTemplate=b(void 0);loadMoreRevision=b(void 0);optionTemplate=b(void 0);emptyText=b(`No suggestions. You can enter your own value.`);loadingText=b(`Loading suggestions`);autocomplete=b(`off`);queryChange=ze();optionSelected=ze();loadMore=ze();openedChange=ze();overlayRef;subscriptions=new Ne$1;disconnectTheme;disconnectLighting;selectionMotion;transition;presentationRevision=0;constructor(){super(),ce(()=>{let n=this.bxA11yService.isReducedMotion();this.selectionMotion?.update({reducedMotion:n})}),this.destroyRef.onDestroy(()=>this.dispose()),ce(()=>{(this.effectiveDisabled()||this.isReadonly())&&this.isOpen()&&this.close()}),ce(()=>{this.options(),this.searching(),W(()=>this.activeIndex.set(-1))})}open(){if(!this.browser||this.destroyRef.destroyed||this.isOpen()||this.effectiveDisabled()||this.isReadonly())return;this.overlayRef&&this.dispose();let n=this.anchor().nativeElement,e=this.overlay.create({width:n.getBoundingClientRect().width,maxWidth:`calc(100vw - 16px)`,positionStrategy:this.bxOverlayPositionService.getElementStrategy(n,`bottom`,4),scrollStrategy:this.overlay.scrollStrategies.noop(),usePopover:!!this.context?.useTopLayer||!!n.closest(`dialog, [role="dialog"], [role="alertdialog"], bx-modal, bx-modal-core, [popover]`)});this.overlayRef=e,this.opened.set(!0),this.scrollLockService.disableScroll(this.scrollLockId,{handleTouchInput:!0}),this.disconnectTheme=this.ngZone.runOutsideAngular(()=>Kn$1(n,e.overlayElement)),this.disconnectLighting=dr(e.overlayElement,n),this.subscriptions.add(this.ngZone.runOutsideAngular(()=>si$1(e,n,{onOriginHidden:()=>this.ngZone.run(()=>this.close()),onPosition:()=>{let o=n.getBoundingClientRect().width;e.getConfig().width!==o&&e.updateSize({width:o})}}))),this.subscriptions.add(e.outsidePointerEvents().subscribe(o=>{n.contains(o.target)||this.close()})),this.subscriptions.add(e.keydownEvents().subscribe(o=>this.onPanelKey(o))),e.attach(new Bn$1(this.panelTemplate(),this.viewContainerRef)).detectChanges(),e.updatePosition();let r=e.overlayElement.querySelector(`[role="listbox"]`);r&&(this.selectionMotion=this.ngZone.runOutsideAngular(()=>$y(r,{reducedMotion:this.bxA11yService.isReducedMotion()}))),this.transition=this.ngZone.runOutsideAngular(()=>ri$1(n,e.overlayElement)),this.ngZone.runOutsideAngular(()=>this.transition?.enter()),this.openedChange.emit(!0)}close(){if(!this.isOpen())return;let n=this.overlayRef?.overlayElement;n?.contains(n.ownerDocument.activeElement)&&this.focus({preventScroll:!0});let e=++this.presentationRevision;this.opened.set(!1),this.scrollLockService.enableScroll(this.scrollLockId),n&&(n.inert=!0);let t=()=>{e===this.presentationRevision&&this.dispose()},r=this.transition;r&&!this.bxA11yService.isReducedMotion()?this.ngZone.runOutsideAngular(()=>r.exit()).then(t,t):t(),this.openedChange.emit(!1)}completeLoadMore(){this.pagination()?.complete()}clear(){this.effectiveDisabled()||this.isReadonly()||(this.composing.set(!1),this.updateValue(``),this.activeIndex.set(-1),this.markAsTouched(),this.focus({preventScroll:!0}),this.queryChange.emit(``))}onInput(n){if(this.composing()||this.effectiveDisabled()||this.isReadonly())return;let e=n.target.value;this.updateValue(e),this.activeIndex.set(-1),this.updateCompletionPosition(),this.open(),this.queryChange.emit(e)}onCompositionStart(){this.composing.set(!0)}onCompositionEnd(n){this.composing.set(!1),this.onInput(n)}onFocus(){this.inputFocused.set(!0),this.updateCompletionPosition(),this.open()}updateCompletionPosition(){let n=this.nativeInput().nativeElement;this.caretAtEnd.set(n.selectionStart===n.value.length&&n.selectionEnd===n.value.length),this.inputScroll.set(n.scrollLeft)}onBlur(n){n.target===this.nativeInput().nativeElement&&this.inputFocused.set(!1);let e=n.relatedTarget;e&&(this.nativeElement.contains(e)||this.overlayRef?.overlayElement.contains(e))||queueMicrotask(()=>{if(this.destroyRef.destroyed)return;let t=this.nativeElement.ownerDocument.activeElement;this.nativeElement.contains(t)||this.overlayRef?.overlayElement.contains(t)||(this.close(),this.markAsTouched())})}onInputKey(n){if(this.composing()||n.isComposing||this.effectiveDisabled()||this.isReadonly())return;this.updateCompletionPosition();let e=this.completionOption(),r=this.nativeInput().nativeElement.ownerDocument.defaultView?.getComputedStyle(this.nativeInput().nativeElement).direction===`rtl`?`ArrowLeft`:`ArrowRight`;if(e&&!n.altKey&&!n.ctrlKey&&!n.metaKey&&!n.shiftKey&&(n.key===r||n.key===`End`||n.key===`Enter`&&!this.activeId()))n.preventDefault(),this.selectOption(e);else if(n.key===`Escape`&&this.isOpen())n.preventDefault(),n.stopPropagation(),this.close();else if(n.key===`ArrowDown`||n.key===`ArrowUp`){if(n.preventDefault(),this.open(),this.searching())return;let l=this.filteredOptions().map((w,E)=>w.disabled?-1:E).filter(w=>w>=0),g=l.indexOf(this.activeIndex()),y=n.key===`ArrowDown`?(g+1)%l.length:g<0?l.length-1:(g-1+l.length)%l.length;this.activeIndex.set(l[y]??-1),this.overlayRef?.overlayElement.querySelector(`#`+this.activeId())?.scrollIntoView({block:`nearest`})}else if(n.key===`Enter`&&this.isOpen()&&this.activeId())n.preventDefault(),this.selectOption(this.filteredOptions()[this.activeIndex()]);else if(n.key===`Tab`&&this.isOpen()){if(!n.shiftKey&&this.showClear())return;this.tabToPanel(n)}}onClearKey(n){n.key===`Tab`&&!n.shiftKey&&this.isOpen()&&this.tabToPanel(n)}selectOption(n){n.disabled||this.searching()||this.effectiveDisabled()||this.isReadonly()||(this.updateValue(n.value),this.optionSelected.emit(n),this.close(),this.focus({preventScroll:!0}))}requestMore(n){let e=this.overlayRef?.overlayElement;e?.contains(e.ownerDocument.activeElement)&&this.focus({preventScroll:!0}),this.loadMore.emit(n)}onPanelKey(n){let e=n.target;n.defaultPrevented||!e||!this.overlayRef?.overlayElement.contains(e)||(n.key===`Escape`?(n.preventDefault(),n.stopPropagation(),this.close()):n.key===`Tab`&&(n.shiftKey?(n.preventDefault(),this.focus({preventScroll:!0})):this.close()))}panelAction(){return Array.from(this.overlayRef?.overlayElement.querySelectorAll(`button:not(:disabled)`)??[]).find(n=>n.tabIndex>=0&&n.getClientRects().length>0)}tabToPanel(n){let e=this.panelAction();!n.shiftKey&&e?(n.preventDefault(),e.focus()):this.close()}dispose(){++this.presentationRevision,this.selectionMotion?.destroy(),this.selectionMotion=void 0,this.transition?.destroy(),this.transition=void 0,this.opened.set(!1),this.activeIndex.set(-1),this.subscriptions.unsubscribe(),this.subscriptions=new Ne$1,this.disconnectTheme?.(),this.disconnectTheme=void 0,this.disconnectLighting?.(),this.disconnectLighting=void 0,this.overlayRef?.dispose(),this.overlayRef=void 0,this.scrollLockService.enableScroll(this.scrollLockId)}static ɵfac=function(e){return new(e||i)};static ɵcmp=G({type:i,selectors:[[`bx-autocomplete`]],viewQuery:function(e,t){e&1&&Xt(t.panelTemplate,od,5)(t.anchor,ad,5)(t.nativeInput,ld,5)(t.pagination,Le,5)(t.labelText,_o$1,5),e&2&&ft(5)},inputs:{options:[1,`options`],inlineCompletion:[1,`inlineCompletion`],clearable:[1,`clearable`],clearLabel:[1,`clearLabel`],clearTooltip:[1,`clearTooltip`],externalFiltering:[1,`externalFiltering`],searching:[1,`searching`],hasMore:[1,`hasMore`],loadError:[1,`loadError`],loadMoreConfig:[1,`loadMoreConfig`],loadMoreTemplate:[1,`loadMoreTemplate`],loadMoreRevision:[1,`loadMoreRevision`],optionTemplate:[1,`optionTemplate`],emptyText:[1,`emptyText`],loadingText:[1,`loadingText`],autocomplete:[1,`autocomplete`]},outputs:{queryChange:`queryChange`,optionSelected:`optionSelected`,loadMore:`loadMore`,openedChange:`openedChange`},features:[Cn$1],ngContentSelectors:dd,decls:18,vars:52,consts:[[`anchor`,``],[`nativeInput`,``],[`panelTemplate`,``],[`pagination`,`bxLoadMore`],[3,`control`,`inline`,`tooltip`,`hint`,`hintEnd`,`hideRequiredMarker`,`subscriptSizing`,`forId`,`showLoadingIndicator`],[`bxSurface`,``,1,`bx-input-wrapper`,`bx-autocomplete-control`],[`bxTooltipTouch`,`longpress`,`placement`,`top`,1,`bx-input-container`,`bx-autocomplete-text`,3,`bxTooltip`],[1,`bx-floating-label`],[`aria-hidden`,`true`,1,`bx-native-input`,`bx-autocomplete-completion`,3,`transform`],[`type`,`text`,`role`,`combobox`,`aria-haspopup`,`listbox`,`cdkAutofill`,``,1,`bx-native-input`,3,`input`,`focus`,`click`,`blur`,`select`,`scroll`,`keyup`,`cdkAutofill`,`keydown`,`compositionstart`,`compositionend`,`id`,`placeholder`,`value`,`disabled`,`readOnly`,`required`],[1,`bx-input-actions`],[`bx-button`,``,`type`,`button`,`variant`,`text`,1,`bx-autocomplete-clear`,3,`surfaceEffects`,`disabled`,`bxTooltip`],[`aria-hidden`,`true`,1,`bx-autocomplete-caret`],[3,`size`,`decorative`],[`name`,`chevron-down`,`size`,`16`],[`bxTruncate`,``,1,`bx-input-label-text`],[`aria-hidden`,`true`,1,`bx-field-required`],[`aria-hidden`,`true`,1,`bx-native-input`,`bx-autocomplete-completion`],[1,`bx-autocomplete-prefix`],[`bx-button`,``,`type`,`button`,`variant`,`text`,1,`bx-autocomplete-clear`,3,`click`,`keydown`,`blur`,`surfaceEffects`,`disabled`,`bxTooltip`],[`name`,`x`,`size`,`16`],[`bxSurface`,``,`data-bx-surface`,`glass`,1,`bx-autocomplete-panel`,3,`bxSurfaceInteractive`],[`bxLoadMore`,``,`tabindex`,`-1`,1,`bx-autocomplete-scroll`,3,`focusout`,`loadMore`,`loadMoreHasMore`,`loadMoreLoading`,`loadMoreError`,`loadMoreSuppressed`,`loadMoreDisabled`,`loadMoreConfig`,`loadMoreTemplate`,`loadMoreRevision`],[`role`,`listbox`,3,`id`],[1,`bx-autocomplete-feedback`],[`role`,`status`,1,`bx-autocomplete-feedback`],[`type`,`button`,`role`,`option`,`tabindex`,`-1`,1,`bx-autocomplete-option`,3,`id`,`is-active`,`disabled`],[`type`,`button`,`role`,`option`,`tabindex`,`-1`,1,`bx-autocomplete-option`,3,`mousedown`,`click`,`id`,`disabled`],[3,`ngTemplateOutlet`,`ngTemplateOutletContext`],[3,`size`,`label`]],template:function(e,t){if(e&1){let r=wt$1();Ae(sd),_(0,`bx-form-field`,4)(1,`div`,5,0)(3,`div`,6),Ko$1(4,`bxTruncatedText`),j(5,md,4,3,`label`,7),j(6,hd,5,4,`span`,8),_(7,`input`,9,1),te(`input`,function(l){return t.onInput(l)})(`focus`,function(){return t.onFocus()})(`click`,function(){return Be(r),t.open(),Ve$1(t.updateCompletionPosition())})(`blur`,function(l){return t.onBlur(l)})(`select`,function(){return t.updateCompletionPosition()})(`scroll`,function(){return t.updateCompletionPosition()})(`keyup`,function(){return t.updateCompletionPosition()})(`cdkAutofill`,function(l){return t.autofilled.set(l.isAutofilled)})(`keydown`,function(l){return t.onInputKey(l)})(`compositionstart`,function(){return t.onCompositionStart()})(`compositionend`,function(l){return t.onCompositionEnd(l)}),D()(),_(9,`div`,10),j(10,fd,2,4,`button`,11),_(11,`span`,12),j(12,xd,1,2,`bx-loading-spinner`,13)(13,vd,1,0,`bx-icon`,14),D()()(),pe(14,0,cd),pe(15,1,ud),D(),Pa$1(16,Td,7,14,`ng-template`,null,2,kr)}e&2&&(R(`control`,t.fieldControl)(`inline`,!0)(`tooltip`,t.tooltip())(`hint`,t.hint())(`hintEnd`,t.hintEnd())(`hideRequiredMarker`,t.resolvedHideRequiredMarker())(`subscriptSizing`,t.resolvedSubscriptSizing())(`forId`,t.controlId())(`showLoadingIndicator`,!1),y(),ae(`is-invalid`,t.showError())(`is-disabled`,t.effectiveDisabled())(`is-readonly`,t.isReadonly())(`is-outline`,t.resolvedAppearance()===`outline`)(`is-floating`,t.isFloating())(`is-keyboard-focused`,t.keyboardFocused())(`is-open`,t.isOpen())(`has-clear`,t.showClear()),y(2),R(`bxTooltip`,Zo$1(4,48,t.resolvedLabel(),t.labelTruncated(),t.resolvedTooltipOnTruncate())),y(2),F(t.label()?5:-1),y(),F(t.completionSuffix()?6:-1),y(),R(`id`,t.controlId())(`placeholder`,t.isFloating()||!t.label()?t.resolvedPlaceholder():``)(`value`,t.internalValue()??``)(`disabled`,t.effectiveDisabled())(`readOnly`,t.isReadonly())(`required`,t.effectiveRequired()),B(`aria-autocomplete`,t.inlineCompletion()?`both`:`list`)(`name`,t.name()||null)(`autocomplete`,t.autocomplete())(`data-testid`,t.dataTestId())(`aria-label`,t.ariaLabel())(`aria-labelledby`,t.ariaLabelledBy())(`aria-describedby`,t.describedBy())(`aria-invalid`,t.showError())(`aria-expanded`,t.isOpen())(`aria-controls`,t.isOpen()?t.controlId()+`-listbox`:null)(`aria-activedescendant`,t.activeId())(`aria-busy`,t.isBusy()),y(3),F(t.showClear()?10:-1),y(2),F(t.isBusy()?12:13))},dependencies:[U,Rt$1,Vt$1,Eb,Ml,me,Le,sr,xt,qi,_o$1,Cl$1],styles:[`
[_nghost-%COMP%] {
  display: block;
  width: 100%;
  min-inline-size: 0;
}
.bx-input-wrapper[_ngcontent-%COMP%] {
  position: relative;
  display: flex;
  flex: 1;
  min-inline-size: 0;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  background-color: var(--%NS%bx-bg-neutral);
  border-radius: var(--%NS%bx-rounded-sm, 0.25rem) var(--%NS%bx-rounded-sm, 0.25rem) 0 0;
  border-bottom: var(--%NS%bx-border-width, 1px) var(--%NS%bx-border-style, solid) var(--%NS%bx-border-strong);
}
.bx-input-wrapper[_ngcontent-%COMP%]:hover:not(.is-disabled, .is-readonly) {
  background-color: var(--%NS%bx-bg-neutral-hover);
}
.bx-input-wrapper.is-disabled[_ngcontent-%COMP%] {
  background-color: var(--%NS%bx-bg-element);
  opacity: 0.7;
  border-bottom-style: dotted;
}
.bx-input-wrapper[_ngcontent-%COMP%]::after {
  content: "";
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 2px;
  background-color: var(--%NS%bx-primary);
  transform: scaleX(0);
  transition: transform 0.2s linear(0, 0.18 12%, 0.58 32%, 0.87 56%, 0.98 78%, 1);
  transform-origin: center;
  z-index: 2;
}
.bx-input-wrapper[_ngcontent-%COMP%]:focus-within:not(.is-disabled, .is-readonly)::after {
  transform: scaleX(1);
}
.bx-input-wrapper.is-invalid[_ngcontent-%COMP%] {
  border-bottom-color: var(--%NS%bx-border-danger);
}
.bx-input-wrapper.is-invalid[_ngcontent-%COMP%]::after {
  background-color: var(--%NS%bx-border-danger);
  transform: scaleX(1);
}
.bx-input-container[_ngcontent-%COMP%] {
  flex: 1;
  min-width: 0;
  position: relative;
  display: flex;
  flex-direction: column;
}
.bx-native-input[_ngcontent-%COMP%] {
  width: 100%;
  min-inline-size: 0;
  box-sizing: border-box;
  padding: var(--%NS%bx-space-6, 1.5rem) var(--%NS%bx-space-3, 0.75rem) var(--%NS%bx-space-2, 0.5rem);
  height: 3.85rem;
  background: transparent;
  border: none;
  outline: none;
  font-family: inherit;
  font-size: 1rem;
  color: var(--%NS%bx-text-heading);
  z-index: 1;
}
.bx-native-input[_ngcontent-%COMP%]::placeholder {
  color: var(--%NS%bx-text-secondary);
}
.bx-native-input[_ngcontent-%COMP%]:disabled {
  color: var(--%NS%bx-text-secondary);
  cursor: not-allowed;
}
.bx-native-input[readonly][_ngcontent-%COMP%]:not(:disabled) {
  cursor: default;
}
.bx-native-input[_ngcontent-%COMP%] {
  appearance: textfield;
}
.bx-native-input[_ngcontent-%COMP%]::-webkit-outer-spin-button, 
.bx-native-input[_ngcontent-%COMP%]::-webkit-inner-spin-button {
  appearance: none;
  margin: 0;
}
.bx-floating-label[_ngcontent-%COMP%] {
  position: absolute;
  inset-inline: var(--%NS%bx-space-3, 0.75rem);
  display: flex;
  align-items: baseline;
  min-inline-size: 0;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1rem;
  color: var(--%NS%bx-text-secondary);
  z-index: 2;
  transition:
    top 0.2s linear(0, 0.18 12%, 0.58 32%, 0.87 56%, 0.98 78%, 1),
    transform 0.2s linear(0, 0.18 12%, 0.58 32%, 0.87 56%, 0.98 78%, 1),
    font-size 0.2s linear(0, 0.18 12%, 0.58 32%, 0.87 56%, 0.98 78%, 1),
    color 0.15s ease;
}
.bx-input-wrapper.is-floating[_ngcontent-%COMP%]   .bx-floating-label[_ngcontent-%COMP%] {
  top: var(--%NS%bx-space-2, 0.5rem);
  transform: translateY(0);
  font-size: 0.75rem;
  font-weight: 500;
}
.bx-input-wrapper.is-floating[_ngcontent-%COMP%]:focus-within:not(.is-readonly)   .bx-floating-label[_ngcontent-%COMP%] {
  color: var(--%NS%bx-primary);
}
.bx-input-wrapper.is-invalid[_ngcontent-%COMP%]   .bx-floating-label[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-danger);
}
.bx-field-required[_ngcontent-%COMP%] {
  flex: none;
  color: var(--%NS%bx-text-secondary);
  margin-inline-start: 0.125rem;
}
.bx-input-actions[_ngcontent-%COMP%] {
  display: flex;
  flex: 0 0 auto;
  justify-content: flex-end;
  align-items: center;
  align-self: stretch;
  margin-inline-start: auto;
  border-radius: inherit;
}
.bx-input-actions[_ngcontent-%COMP%]:empty {
  display: none;
}
.bx-spinners-group[_ngcontent-%COMP%] {
  display: flex;
  flex: 0 0 auto;
  justify-content: flex-end;
  align-items: center;
  align-self: stretch;
  z-index: 1;
}
.bx-spin-btn[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.25rem;
  flex: 0 0 2.25rem;
  align-self: stretch;
  background: transparent;
  border: none;
  border-inline-start: var(--%NS%bx-border-width, 1px) var(--%NS%bx-border-style, solid) var(--%NS%bx-border-subtle);
  color: var(--%NS%bx-text-secondary);
  cursor: pointer;
  outline: none;
  transition: background-color 0.1s ease, color 0.1s ease;
}
.bx-spin-btn[_ngcontent-%COMP%]:hover:not(:disabled) {
  background-color: var(--%NS%bx-bg-element-hover);
  color: var(--%NS%bx-text-primary);
}
.bx-spin-btn[_ngcontent-%COMP%]:active:not(:disabled) {
  background-color: var(--%NS%bx-bg-element-active);
}
.bx-spin-btn[_ngcontent-%COMP%]:disabled {
  cursor: not-allowed;
  opacity: 0.3;
}
.bx-input-wrapper[data-bx-surface][_ngcontent-%COMP%] {
  --%NS%bx-glass-surface: var(--%NS%bx-bg-neutral);
  --%NS%bx-glass-shadow: none;
}
.bx-input-wrapper[data-bx-surface].is-invalid[_ngcontent-%COMP%] {
  --%NS%bx-glass-edge: var(--%NS%bx-border-danger);
}
.bx-input-wrapper[data-bx-surface][_ngcontent-%COMP%] {
  --%NS%bx-glass-surface: var(--%NS%bx-bg-neutral);
  --%NS%bx-glass-min-opacity: 0.45;
  --%NS%bx-glass-edge: var(--%NS%bx-border-default);
  --%NS%bx-glass-shadow: none;
  border: var(--%NS%bx-border-width, 1px) var(--%NS%bx-border-style, solid) var(--%NS%bx-glass-edge);
  border-radius: var(--%NS%bx-rounded-lg, 0.75rem);
}
.bx-input-wrapper[data-bx-surface][_ngcontent-%COMP%]::after {
  display: none;
}
.bx-input-wrapper[data-bx-surface][_ngcontent-%COMP%]:focus-within:not(.is-disabled, :disabled, .is-readonly, [readonly], [aria-readonly=true], :has([readonly], [aria-readonly=true])), 
.bx-input-wrapper[data-bx-surface][_ngcontent-%COMP%]:focus-visible:not(:disabled, [readonly], [aria-readonly=true]), 
.bx-input-wrapper[data-bx-surface].is-open[_ngcontent-%COMP%]:not(:disabled), 
.bx-input-wrapper[data-bx-surface].is-readonly.is-keyboard-focused[_ngcontent-%COMP%]:focus-within, 
.bx-input-wrapper[data-bx-surface][_ngcontent-%COMP%]:has(.bx-readonly.is-keyboard-focused):focus-within {
  --%NS%bx-glass-edge: var(--%NS%bx-border-brand);
  outline: 2px solid var(--%NS%bx-border-brand);
  outline-offset: -2px;
  --%NS%bx-glass-shadow: none;
}
.bx-input-wrapper[data-bx-surface].is-invalid[_ngcontent-%COMP%] {
  --%NS%bx-glass-surface: var(--%NS%bx-bg-neutral);
  --%NS%bx-glass-min-opacity: 0.45;
  --%NS%bx-glass-edge: color-mix(in srgb, var(--%NS%bx-text-danger) 40%, var(--%NS%bx-border-default));
  border-block-end-color: var(--%NS%bx-glass-edge);
  --%NS%bx-glass-shadow: 0 8px 18px -10px color-mix(in srgb, var(--%NS%bx-text-danger) 65%, transparent);
  outline-color: var(--%NS%bx-border-danger);
}
.bx-spinners-group[_ngcontent-%COMP%] {
  border-radius: inherit;
  border-start-start-radius: var(--%NS%bx-rounded-none, 0);
  border-end-start-radius: var(--%NS%bx-rounded-none, 0);
  overflow: hidden;
}
.bx-spin-btn[_ngcontent-%COMP%]:last-child {
  border-start-end-radius: inherit;
  border-end-end-radius: inherit;
}
textarea.bx-native-input[_ngcontent-%COMP%] {
  height: auto;
  min-block-size: 5rem;
  resize: vertical;
}
.bx-spin-btn[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--%NS%bx-border-brand);
  outline-offset: -2px;
}
.bx-input-wrapper.is-readonly[_ngcontent-%COMP%]:not(.is-disabled)   .bx-spin-btn[_ngcontent-%COMP%]:disabled {
  cursor: default;
}
.bx-native-input[_ngcontent-%COMP%]:-webkit-autofill    + .bx-floating-label[_ngcontent-%COMP%] {
  top: var(--%NS%bx-space-2, 0.5rem);
}
.bx-input-wrapper.is-outline[_ngcontent-%COMP%] {
  border: var(--%NS%bx-border-width, 1px) var(--%NS%bx-border-style, solid) var(--%NS%bx-border-strong);
  border-radius: var(--%NS%bx-field-radius, var(--%NS%bx-rounded-md, 0.5rem));
}
.bx-input-wrapper.is-outline.is-invalid[_ngcontent-%COMP%] {
  border-color: var(--%NS%bx-border-danger);
}
[_nghost-%COMP%] {
  display: block;
  min-inline-size: 0;
  inline-size: 100%;
}
.bx-autocomplete-control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {
  position: relative;
  letter-spacing: inherit;
}
.bx-autocomplete-control[_ngcontent-%COMP%]   .bx-native-input[_ngcontent-%COMP%] {
  padding-inline-end: 0;
}
.bx-autocomplete-control.has-clear[_ngcontent-%COMP%]   .bx-native-input[_ngcontent-%COMP%] {
  padding-inline-end: var(--%NS%bx-space-2, 0.5rem);
}
.bx-autocomplete-control[_ngcontent-%COMP%]   .bx-input-actions[_ngcontent-%COMP%] {
  padding-inline-end: var(--%NS%bx-space-3, 0.75rem);
}
.bx-autocomplete-caret[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  inline-size: var(--%NS%bx-space-4, 1rem);
  block-size: var(--%NS%bx-space-4, 1rem);
  margin-inline-start: var(--%NS%bx-space-2, 0.5rem);
  color: var(--%NS%bx-text-secondary);
  flex: 0 0 auto;
}
.bx-autocomplete-caret[_ngcontent-%COMP%]   bx-icon[_ngcontent-%COMP%] {
  transition-property: transform;
  transition-duration: calc(0.2s * (1 - var(--%NS%bx-reduced-motion, 0)));
  transition-timing-function: ease;
}
.is-open[_ngcontent-%COMP%]   .bx-autocomplete-caret[_ngcontent-%COMP%]   bx-icon[_ngcontent-%COMP%] {
  transform: rotate(180deg);
}
.bx-autocomplete-clear.bx-btn[_ngcontent-%COMP%] {
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
.bx-autocomplete-clear.bx-btn[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--%NS%bx-border-brand);
  outline-offset: 0;
}
.bx-autocomplete-clear.bx-btn[_ngcontent-%COMP%]:hover:not(:disabled) {
  color: var(--%NS%bx-text-primary);
  background: var(--%NS%bx-bg-element-hover);
}
.bx-autocomplete-clear.bx-btn[_ngcontent-%COMP%]:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}
.bx-autocomplete-text[_ngcontent-%COMP%] {
  position: relative;
  flex: 1 1 0;
  min-inline-size: 0;
  overflow: hidden;
}
.bx-autocomplete-completion[_ngcontent-%COMP%] {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  color: var(--%NS%bx-autocomplete-completion-color, var(--%NS%bx-text-secondary));
  letter-spacing: inherit;
  white-space: pre;
  pointer-events: none;
}
.bx-autocomplete-prefix[_ngcontent-%COMP%] {
  visibility: hidden;
}
.bx-autocomplete-panel[_ngcontent-%COMP%] {
  --%NS%bx-glass-min-opacity: var(--%NS%bx-dropdown-min-opacity, 0);
  --%NS%bx-glass-opacity: var(--%NS%bx-dropdown-opacity, min(1, var(--%NS%bx-glass-material-opacity, 0.5) + 0.18));
  --%NS%bx-glass-surface: var(--%NS%bx-autocomplete-background, var(--%NS%bx-bg-surface));
  --%NS%bx-glass-text: var(--%NS%bx-text-primary);
  --%NS%bx-glass-edge: var(--%NS%bx-border-default);
  --%NS%bx-glass-radius: var(--%NS%bx-autocomplete-radius, var(--%NS%bx-rounded-lg, 0.75rem));
  --%NS%bx-glass-shadow: var(--%NS%bx-shadow-lg, 0 12px 20px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.1));
  inline-size: 100%;
  min-inline-size: 0;
  border: var(--%NS%bx-border-width, 1px) var(--%NS%bx-border-style, solid) var(--%NS%bx-glass-edge);
  border-radius: var(--%NS%bx-glass-radius);
  background: var(--%NS%bx-glass-surface);
  color: var(--%NS%bx-glass-text);
  box-shadow: var(--%NS%bx-glass-shadow);
  overflow: hidden;
}
.bx-autocomplete-scroll[_ngcontent-%COMP%] {
  --%NS%bx-load-more-padding: var(--%NS%bx-space-2, 0.5rem) var(--%NS%bx-space-3, 0.75rem);
  box-sizing: border-box;
  max-block-size: min(var(--%NS%bx-autocomplete-panel-height, 18rem), 50dvh);
  padding: var(--%NS%bx-autocomplete-panel-padding, var(--%NS%bx-space-1, 0.25rem));
  overflow: auto;
  overscroll-behavior: contain;
}
.bx-autocomplete-option[_ngcontent-%COMP%] {
  display: block;
  box-sizing: border-box;
  inline-size: 100%;
  min-block-size: var(--%NS%bx-space-10, 2.5rem);
  padding: var(--%NS%bx-space-2, 0.5rem) var(--%NS%bx-space-3, 0.75rem);
  border: 0;
  border-radius: var(--%NS%bx-rounded-sm, 0.25rem);
  background: transparent;
  color: inherit;
  font: inherit;
  text-align: start;
  overflow-wrap: anywhere;
  cursor: pointer;
}
.bx-autocomplete-option[_ngcontent-%COMP%]:hover:not(:disabled), 
.bx-autocomplete-option.is-active[_ngcontent-%COMP%] {
  background: var(--%NS%bx-bg-element-hover);
  outline: 1px solid var(--%NS%bx-border-strong);
  outline-offset: -1px;
}
.bx-autocomplete-option[_ngcontent-%COMP%]:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
.bx-autocomplete-feedback[_ngcontent-%COMP%] {
  min-block-size: var(--%NS%bx-space-10, 2.5rem);
  padding: var(--%NS%bx-space-2, 0.5rem) var(--%NS%bx-space-3, 0.75rem);
  box-sizing: border-box;
  color: var(--%NS%bx-text-secondary);
  font-size: 0.875rem;
  overflow-wrap: anywhere;
}
[data-bx-selection-surface=true][_ngcontent-%COMP%]   .bx-autocomplete-option[_ngcontent-%COMP%]:is(:hover, .is-active) {
  background: transparent;
}
@media (forced-colors: active) {
  .bx-autocomplete-control[_ngcontent-%COMP%]:focus-within, 
   .bx-autocomplete-option.is-active[_ngcontent-%COMP%] {
    outline: 2px solid Highlight;
  }
  .bx-autocomplete-option[_ngcontent-%COMP%]:disabled {
    color: GrayText;
    opacity: 1;
  }
}`]})};function wd(i,n){if(i&1&&(_(0,`div`,1),yt$1(1,2),D()),i&2){let e=w(2);R(`id`,e.panelId()),B(`aria-label`,e.resolvedAriaLabel()),y(),R(`ngTemplateOutlet`,n)}}function Od(i,n){if(i&1&&j(0,wd,2,3,`div`,1),i&2){let e,t=w();F((e=t.content())?0:-1,e)}}function kd(i,n){i&1&&yt$1(0,2),i&2&&R(`ngTemplateOutlet`,n)}function Pd(i,n){if(i&1){let e=wt$1();_(0,`bx-bottom-drawer`,3),hE(`openChange`,function(r){Be(e);let o=w();return LP(o.open,r)||(o.open=r),Ve$1(r)}),te(`closed`,function(){Be(e);let r=w();return Ve$1(r.onDrawerClosed())}),j(1,kd,1,1,`ng-container`,2),D()}if(i&2){let e,t=w();R(`surfaceId`,t.panelId())(`ariaLabel`,t.resolvedAriaLabel())(`showHandle`,!0)(`showCloseButton`,!1)(`headerVisible`,!1)(`panelClass`,t.drawerClasses()),bE(`open`,t.open),y(),F((e=t.content())?1:-1,e)}}var Dn=class i{overlay=f(Rn);bxOverlayPositionService=f(_r);viewContainerRef=f(Bt);ngZone=f(re);destroyRef=f(Q);scrollLockService=f(Dr);i18n=f(Se$1,{optional:!0});platformId=f(pt);overlaySubscriptions=[];browser=Pt$1(this.platformId);scrollLockId=Jt();resolvedAriaLabel=g(()=>J(this.ariaLabel(),this.i18n));isDrawer=g(()=>this.presentation()===`drawer`);isInline=g(()=>this.presentation()===`inline`);drawerClasses=g(()=>`bx-picker-drawer ${this.panelClass()}`.trim());open=pn(!1);presentation=b(`popover`);origin=b(null);content=b(null);ariaLabel=b(`Picker`);panelId=b(``);panelClass=b(``);panelWidth=b(``);autoFocus=b(!0,{transform:A});dismissOnOutside=b(!0,{transform:A});dismissOnEscape=b(!0,{transform:A});dismiss=ze();openedChange=ze();focusTimer;disconnectTheme;disconnectLighting;disconnectOrigin;overlayRef;transition;presentationRevision=0;restoreTarget;constructor(){ce(()=>{let n=this.open(),e=this.presentation();if(this.browser)if(e===`popover`)if(n){this.attachPopover();let t=this.overlayRef?.overlayElement;t&&(t.setAttribute(`aria-label`,this.resolvedAriaLabel()),t.id=this.panelId(),t.style.inlineSize=this.panelWidth(),t.style.maxInlineSize=this.panelWidth(),this.disconnectOrigin?.reposition())}else this.detachPopover();else this.overlayRef&&this.disposePopover()}),this.destroyRef.onDestroy(()=>this.disposePopover())}onDrawerClosed(){this.dismiss.emit(),this.openedChange.emit(!1)}attachPopover(){if(this.overlayRef?.overlayElement.inert&&this.disposePopover(!1),this.overlayRef)return;let n=this.origin(),e=this.content();if(!n||!e)return;this.restoreTarget=n.ownerDocument.activeElement instanceof HTMLElement?n.ownerDocument.activeElement:n;let t=this.overlay.create({positionStrategy:this.bxOverlayPositionService.getElementStrategy(n,`bottom`,6).withFlexibleDimensions(!1),scrollStrategy:this.overlay.scrollStrategies.noop(),usePopover:!!n.closest(`dialog, [role="dialog"], [role="alertdialog"], bx-modal, bx-modal-core, [popover]`)});this.overlayRef=t,this.scrollLockService.disableScroll(this.scrollLockId,{handleTouchInput:!0});let r=t.overlayElement;r.id=this.panelId(),r.setAttribute(`role`,`dialog`),r.setAttribute(`aria-label`,this.resolvedAriaLabel()),r.tabIndex=-1,r.classList.add(`bx-picker-overlay-pane`),this.panelClass()&&r.classList.add(...this.panelClass().split(/\s+/).filter(Boolean)),this.panelWidth()&&(r.style.inlineSize=this.panelWidth(),r.style.maxInlineSize=this.panelWidth()),this.disconnectTheme=this.ngZone.runOutsideAngular(()=>Kn$1(n,r)),this.disconnectLighting=dr(r,n),t.attach(new Bn$1(e,this.viewContainerRef)).detectChanges(),this.disconnectOrigin=this.ngZone.runOutsideAngular(()=>si$1(t,n)),this.openedChange.emit(!0),this.transition=this.ngZone.runOutsideAngular(()=>ri$1(n,r,{scale:1})),this.ngZone.runOutsideAngular(()=>this.transition?.enter());let l=t.outsidePointerEvents().subscribe(y=>{this.dismissOnOutside()&&!n.contains(y.target)&&this.dismiss.emit()}),g=t.keydownEvents().subscribe(y=>{y.key!==`Escape`||!this.dismissOnEscape()||y.defaultPrevented||(y.preventDefault(),y.stopPropagation(),this.dismiss.emit())});t.overlayElement.addEventListener(`pointerdown`,y=>y.stopPropagation()),this.overlaySubscriptions.push(l,g),this.focusTimer=setTimeout(()=>{if(!this.autoFocus()||!this.open()||this.overlayRef!==t||r.inert)return;(r.querySelector(`[data-picker-initial-focus], [data-focus-date][tabindex="0"], bx-time-wheel [role="listbox"]`)??r.querySelector(`button:not([disabled]), [href], input:not([disabled]), [tabindex]:not([tabindex="-1"])`)??r).focus({preventScroll:!0})})}detachPopover(){let n=this.overlayRef;if(!n)return;let e=n.overlayElement,t=++this.presentationRevision,r=this.transition;clearTimeout(this.focusTimer),e.inert=!0,this.scrollLockService.enableScroll(this.scrollLockId);let o=()=>{t===this.presentationRevision&&this.disposePopover()};r?this.ngZone.runOutsideAngular(()=>r.exit()).then(o,o):o(),this.openedChange.emit(!1)}disposePopover(n=!0){clearTimeout(this.focusTimer);for(let e of this.overlaySubscriptions.splice(0))e.unsubscribe();++this.presentationRevision,this.transition?.destroy(),this.transition=void 0,this.disconnectTheme?.(),this.disconnectTheme=void 0,this.disconnectLighting?.(),this.disconnectLighting=void 0,this.disconnectOrigin?.(),this.disconnectOrigin=void 0,this.overlayRef?.dispose(),this.overlayRef=void 0,this.scrollLockService.enableScroll(this.scrollLockId),n&&this.restoreTarget?.isConnected&&this.restoreTarget.focus({preventScroll:!0}),this.restoreTarget=void 0}static ɵfac=function(e){return new(e||i)};static ɵcmp=G({type:i,selectors:[[`bx-picker-surface`]],inputs:{open:[1,`open`],presentation:[1,`presentation`],origin:[1,`origin`],content:[1,`content`],ariaLabel:[1,`ariaLabel`],panelId:[1,`panelId`],panelClass:[1,`panelClass`],panelWidth:[1,`panelWidth`],autoFocus:[1,`autoFocus`],dismissOnOutside:[1,`dismissOnOutside`],dismissOnEscape:[1,`dismissOnEscape`]},outputs:{open:`openChange`,dismiss:`dismiss`,openedChange:`openedChange`},decls:2,vars:2,consts:[[`panelStyle`,`--bx-drawer-body-padding: 0; --bx-drawer-width: 100%;`,`size`,`lg`,`maxHeight`,`92dvh`,3,`surfaceId`,`ariaLabel`,`showHandle`,`showCloseButton`,`headerVisible`,`panelClass`,`open`],[`role`,`dialog`,`tabindex`,`-1`,1,`bx-picker-inline`,3,`id`],[3,`ngTemplateOutlet`],[`panelStyle`,`--bx-drawer-body-padding: 0; --bx-drawer-width: 100%;`,`size`,`lg`,`maxHeight`,`92dvh`,3,`openChange`,`closed`,`surfaceId`,`ariaLabel`,`showHandle`,`showCloseButton`,`headerVisible`,`panelClass`,`open`]],template:function(e,t){e&1&&(j(0,Od,1,1),j(1,Pd,2,8,`bx-bottom-drawer`,0)),e&2&&(F(t.isInline()?0:-1),y(),F(t.isDrawer()?1:-1))},dependencies:[AT,sr],styles:[`
[_nghost-%COMP%] {
  display: contents;
}
.bx-picker-inline[_ngcontent-%COMP%] {
  display: block;
  min-inline-size: 0;
  outline: none;
}
.bx-picker-drawer[_ngcontent-%COMP%] {
  display: block;
  min-inline-size: 0;
}`]})};var Dd=(i,n)=>n.label;var Id=(i,n)=>n.preset.id;function Ed(i,n){if(i&1&&(_(0,`div`,2),X(1),D()),i&2){let e=w().$implicit;y(),fe(e.label)}}function Rd(i,n){i&1&&xe(0,`bx-icon`,6),i&2&&R(`name`,n)(`decorative`,!0)}function Ld(i,n){if(i&1){let e=wt$1();_(0,`button`,5),te(`click`,function(){let r=Be(e).$implicit,o=w(2);return Ve$1(o.onSelect(r.preset,r.disabled))}),j(1,Rd,1,2,`bx-icon`,6),_(2,`span`,7),X(3),D()()}if(i&2){let e,t=n.$implicit,r=w(2);ae(`is-active`,t.active),R(`disabled`,t.disabled),B(`aria-pressed`,t.active)(`aria-label`,t.description?t.label+`. `+t.description:t.label),y(),F((e=t.icon&&r.iconName(t.icon))?1:-1,e),y(2),fe(t.label)}}function Ad(i,n){if(i&1&&(_(0,`div`,1),j(1,Ed,2,1,`div`,2),_(2,`div`,3),$t(3,Ld,4,7,`button`,4,Id),D()()),i&2){let e=n.$implicit;y(),F(e.label?1:-1),y(2),Wt(e.items)}}var Vt=class i{i18n=f(Se$1,{optional:!0});groups=g(()=>{let n=this.context(),e=this.activeValue()??this.activeRange(),t=/* @__PURE__ */ new Map;for(let r of this.presets()){let o=J(r.label,this.i18n),l=J(r.group,this.i18n),g=this.resolvePreset(r,n),y={preset:r,label:o,description:J(r.description,this.i18n),icon:r.icon,active:g!==null&&this.sameSelection(g,e),disabled:r.disabled===!0};t.has(l)||t.set(l,{label:l,items:[]}),t.get(l)?.items.push(y)}return[...t.values()]});resolvedAriaLabel=g(()=>J(this.ariaLabel(),this.i18n));presets=b.required();context=b.required();activeValue=b(null);activeRange=b(null);horizontal=b(!1,{transform:A});ariaLabel=b(`Quick select`);presetSelect=ze();iconName(n){return n}onSelect(n,e){e||this.presetSelect.emit(n)}sameSelection(n,e){return Array.isArray(n)&&Array.isArray(e)?wae([...n].sort())===wae([...e].sort()):kl$1(n)&&kl$1(e)?n.start===e.start&&n.end===e.end&&(!Hd(n)||Hd(e)&&n.kind===e.kind):wae(n)===wae(e)}resolvePreset(n,e){try{return n.resolve(e)}catch{return null}}static ɵfac=function(e){return new(e||i)};static ɵcmp=G({type:i,selectors:[[`bx-date-preset-list`]],inputs:{presets:[1,`presets`],context:[1,`context`],activeValue:[1,`activeValue`],activeRange:[1,`activeRange`],horizontal:[1,`horizontal`],ariaLabel:[1,`ariaLabel`]},outputs:{presetSelect:`presetSelect`},decls:3,vars:3,consts:[[1,`bx-preset-list`],[1,`bx-preset-group`],[1,`bx-preset-group-label`],[1,`bx-preset-items`],[`type`,`button`,1,`bx-preset-item`,3,`is-active`,`disabled`],[`type`,`button`,1,`bx-preset-item`,3,`click`,`disabled`],[`size`,`16`,1,`bx-preset-icon`,3,`name`,`decorative`],[1,`bx-preset-label`]],template:function(e,t){e&1&&(_(0,`nav`,0),$t(1,Ad,5,1,`div`,1,Dd),D()),e&2&&(ae(`is-horizontal`,t.horizontal()),B(`aria-label`,t.resolvedAriaLabel()),y(),Wt(t.groups()))},dependencies:[Vt$1],styles:[`
[_nghost-%COMP%] {
  display: flex;
  flex-direction: column;
  min-inline-size: 0;
  min-block-size: 0;
  flex: 1 1 auto;
  overflow: hidden;
}
.bx-preset-list[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: var(--%NS%bx-space-3, 0.75rem);
  min-inline-size: 0;
  flex: 1 1 auto;
  min-block-size: 0;
  overflow-y: auto;
  overscroll-behavior: contain;
  padding: var(--%NS%bx-space-1, 0.25rem);
}
.bx-preset-group[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: var(--%NS%bx-space-1, 0.25rem);
  min-inline-size: 0;
}
.bx-preset-group-label[_ngcontent-%COMP%] {
  padding-inline: var(--%NS%bx-space-2, 0.5rem);
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--%NS%bx-text-tertiary);
}
.bx-preset-items[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-inline-size: 0;
}
.bx-preset-item[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: var(--%NS%bx-space-2, 0.5rem);
  inline-size: 100%;
  min-inline-size: 0;
  padding: var(--%NS%bx-space-2, 0.5rem);
  border: var(--%NS%bx-border-width, 1px) var(--%NS%bx-border-style, solid) transparent;
  border-radius: var(--%NS%bx-rounded-md, 0.5rem);
  background: transparent;
  color: var(--%NS%bx-text-secondary);
  font: inherit;
  font-size: 0.8125rem;
  text-align: start;
  cursor: pointer;
}
.bx-preset-item[_ngcontent-%COMP%]:hover:not(:disabled) {
  background: var(--%NS%bx-accent-subtle);
  color: var(--%NS%bx-text-accent);
}
.bx-preset-item[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--%NS%bx-border-brand);
  outline-offset: -2px;
}
.bx-preset-item.is-active[_ngcontent-%COMP%] {
  background: var(--%NS%bx-accent-subtle);
  border-color: var(--%NS%bx-border-accent);
  color: var(--%NS%bx-text-accent);
  font-weight: 600;
}
.bx-preset-item[_ngcontent-%COMP%]:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
.bx-preset-icon[_ngcontent-%COMP%] {
  flex-shrink: 0;
}
.bx-preset-label[_ngcontent-%COMP%] {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.bx-preset-list.is-horizontal[_ngcontent-%COMP%] {
  flex-direction: row;
  align-items: center;
  gap: 2px;
  overflow: auto hidden;
  padding-block: var(--%NS%bx-space-1, 0.25rem);
  scrollbar-width: thin;
}
.bx-preset-list.is-horizontal[_ngcontent-%COMP%]   .bx-preset-group[_ngcontent-%COMP%] {
  flex: 0 0 auto;
  flex-direction: row;
  align-items: center;
  gap: 2px;
}
.bx-preset-list.is-horizontal[_ngcontent-%COMP%]   .bx-preset-group-label[_ngcontent-%COMP%] {
  display: none;
}
.bx-preset-list.is-horizontal[_ngcontent-%COMP%]   .bx-preset-items[_ngcontent-%COMP%] {
  flex: 0 0 auto;
  flex-direction: row;
  gap: 2px;
}
.bx-preset-list.is-horizontal[_ngcontent-%COMP%]   .bx-preset-item[_ngcontent-%COMP%] {
  flex: 0 0 auto;
  inline-size: auto;
  white-space: nowrap;
  border-radius: var(--%NS%bx-rounded-pill, 9999px);
  border-color: var(--%NS%bx-border-subtle);
  background: var(--%NS%bx-bg-element);
}
.bx-preset-list.is-horizontal[_ngcontent-%COMP%]   .bx-preset-item.is-active[_ngcontent-%COMP%] {
  background: var(--%NS%bx-accent-subtle);
  border-color: var(--%NS%bx-border-accent);
  color: var(--%NS%bx-text-accent);
}`]})};var Po=(i,n)=>n.value+`-`+i;function Bd(i,n){if(i&1){let e=wt$1();_(0,`button`,11),te(`mousedown`,function(r){return r.preventDefault()})(`click`,function(r){let o=Be(e).$index,l=w();return Ve$1(l.onOptionClick(o,r))}),X(1),D()}if(i&2){let e=n.$implicit,t=n.$index,r=w();_e(`height`,r.itemHeight(),`px`),ae(`is-selected`,r.isSelectedAt(t))(`is-disabled`,e.disabled),R(`id`,r.wheelId+`-`+t),B(`aria-hidden`,r.loopOffset()>0&&(t<r.loopOffset()||t>=r.loopOffset()*2)?!0:null)(`aria-selected`,r.isSelectedAt(t))(`aria-disabled`,e.disabled),y(),un(` `,e.label,` `)}}function qd(i,n){if(i&1&&(_(0,`span`,12),X(1),D()),i&2){let e=n.$implicit,t=n.$index,r=w();_e(`height`,r.itemHeight(),`px`),ae(`is-selected`,r.isSelectedAt(t))(`is-disabled`,e.disabled),y(),fe(e.label)}}var zt=class i{i18n=f(Se$1,{optional:!0});bxA11yService=f(Le$1);destroyRef=f(Q);position=M(0);dragging=M(!1);wheelId=`bx-time-wheel-${Jt()}`;resolvedLabel=g(()=>J(this.label(),this.i18n));logicalIndex=g(()=>{let n=this.options().findIndex(e=>e.value===this.value());return n<0?0:n});displayOptions=g(()=>{let n=this.options();return!this.loop()||n.length<2?n:[...n,...n,...n]});loopOffset=g(()=>this.loop()&&this.options().length>1?this.options().length:0);centerOffset=g(()=>(this.visibleItems()-1)/2*this.itemHeight());viewportHeight=g(()=>this.visibleItems()*this.itemHeight());trackTransform=g(()=>`translateY(${this.centerOffset()-this.position()*this.itemHeight()}px)`);lensTransform=g(()=>`translateY(${-this.position()*this.itemHeight()}px)`);options=b.required();value=pn(null);label=b(`Time`);type=b(`minute`);loop=b(!0,{transform:A});disabled=b(!1,{transform:A});itemHeight=b(40);visibleItems=b(5);activated=ze();cancelGesture;motion;wheelTimer;wheelVelocity;wheelOptions;wheelCoordinate=0;motionPosition=0;motionVelocity=0;committedIndex=null;initialized=!1;constructor(){ce(()=>{let n=this.logicalIndex(),e=this.bxA11yService.isReducedMotion();if(!this.dragging()){if(this.committedIndex===n&&!e){this.committedIndex=null;return}this.animateTo(this.targetPhysicalIndex(n),!this.initialized),this.initialized=!0}}),this.destroyRef.onDestroy(()=>{this.cancelGesture?.(),clearTimeout(this.wheelTimer),this.motion?.destroy()})}step(n){if(this.disabled())return;this.cancelWheel();let e=this.options(),t=e.length;if(!t)return;let r=this.logicalIndex()+n,o=0;for(this.loop()?r=(r%t+t)%t:r=Math.max(0,Math.min(t-1,r));e[r]?.disabled&&o<t;)r=this.loop()?((r+Math.sign(n||1))%t+t)%t:Math.max(0,Math.min(t-1,r+Math.sign(n||1))),o+=1;this.commitIndex(r)}onOptionClick(n,e){this.disabled()||e.detail>0||this.commitIndex(this.wrapIndex(n))}isSelectedAt(n){return this.wrapIndex(n)===this.logicalIndex()}onKeydown(n){if(n.key===`Escape`&&(this.cancelGesture||this.wheelTimer)){n.preventDefault(),n.stopPropagation(),this.cancelGesture?.(),this.cancelWheel();return}if(this.disabled())return;let e=Math.max(1,Math.round(this.visibleItems()/2));if(n.key===`ArrowUp`)this.step(-1);else if(n.key===`ArrowDown`)this.step(1);else if(n.key===`PageUp`)this.step(-e);else if(n.key===`PageDown`)this.step(e);else if(n.key===`Home`)this.commitIndex(0);else if(n.key===`End`)this.commitIndex(this.options().length-1);else if(n.key===`Enter`||n.key===` `)this.activated.emit(this.value()??``);else return;n.preventDefault()}onWheel(n){if(this.disabled()||!this.options().length||n.ctrlKey||Math.abs(n.deltaX)>Math.abs(n.deltaY))return;n.preventDefault(),n.stopPropagation(),this.wheelTimer||(this.cancelGesture?.(),this.motion?.destroy(),this.motion=void 0,this.wheelOptions=this.options(),this.wheelCoordinate=0,this.wheelVelocity=new js$1(0,n.timeStamp),this.dragging.set(!0));let e=n.deltaY*(n.deltaMode===1?this.itemHeight():n.deltaMode===2?this.viewportHeight():1);this.wheelCoordinate+=e,this.wheelVelocity?.update(this.wheelCoordinate,n.timeStamp),this.position.set(this.constrainPosition(this.position()+e/this.itemHeight())),clearTimeout(this.wheelTimer),this.wheelTimer=setTimeout(()=>{let t=(this.wheelVelocity?.velocity(performance.now())??0)/this.itemHeight(),r=this.disabled()||this.options()!==this.wheelOptions;if(this.wheelTimer=void 0,this.wheelVelocity=void 0,this.wheelOptions=void 0,this.dragging.set(!1),r){this.animateTo(this.targetPhysicalIndex(this.logicalIndex()),!1);return}this.settlePosition(this.position(),t)},80)}onPointerDown(n){if(!n.isPrimary||n.button!==0||this.disabled()||!this.options().length)return;let e=n.currentTarget;if(!(e instanceof HTMLElement))return;this.cancelGesture?.(),this.cancelWheel();let t=this.options(),r=n.clientY,o=this.position(),l=new js$1(n.clientY,n.timeStamp),g=n.pointerId,y=!1;this.motion?.destroy(),this.motion=void 0,this.dragging.set(!0),e.setPointerCapture(g);let w=Z=>{if(Z.pointerId!==g)return;l.update(Z.clientY,Z.timeStamp),Math.abs(Z.clientY-r)>4&&(y=!0),Z.preventDefault();let ze=o+(r-Z.clientY)/this.itemHeight(),z=this.constrainPosition(ze);this.loop()&&(o+=z-ze),this.position.set(z)},E=()=>{g=-1,e.removeEventListener(`pointermove`,w),e.removeEventListener(`pointerup`,V),e.removeEventListener(`pointercancel`,H),e.removeEventListener(`lostpointercapture`,H),this.cancelGesture=void 0,this.dragging.set(!1),e.hasPointerCapture(n.pointerId)&&e.releasePointerCapture(n.pointerId)},V=Z=>{if(Z.pointerId!==g)return;if(this.disabled()||this.options()!==t){H();return}let ze=-l.velocity(Z.timeStamp)/this.itemHeight(),z=this.position(),fe=e.getBoundingClientRect(),Te=z+(Z.clientY-(fe.top+fe.height/2))/this.itemHeight();if(E(),!y&&this.options()[this.wrapIndex(Te)]?.disabled){this.animateTo(this.targetPhysicalIndex(this.logicalIndex()),!1);return}this.settlePosition(y?z:Te,y?ze:0)},H=()=>{E(),this.animateTo(this.targetPhysicalIndex(this.logicalIndex()),!1)};this.cancelGesture=H,e.addEventListener(`pointermove`,w,{passive:!1}),e.addEventListener(`pointerup`,V),e.addEventListener(`pointercancel`,H),e.addEventListener(`lostpointercapture`,H)}commitIndex(n,e,t){let r=this.options()[n];!r||r.disabled||(this.committedIndex=n,this.animateTo(t??this.targetPhysicalIndex(n),!1,e),this.value.set(r.value),this.activated.emit(r.value))}animateTo(n,e,t){if(e||this.bxA11yService.isReducedMotion()){this.motion?.destroy(),this.motion=void 0,this.position.set(this.recenterValue(n));return}this.motion||(this.motion=ni([this.position()],([r],[o])=>{this.motionPosition=r,this.motionVelocity=o,this.position.set(this.recenterValue(r))},cr.soft),this.motion.track([this.position()],[t??0])),t!==void 0&&this.motion.track([this.position()],[t]),this.motion.retarget([n],!1)}targetPhysicalIndex(n){if(!this.loop())return n;let e=this.options().length,t=this.loopOffset(),r=this.recenterValue(this.position());(this.motionPosition!==r||r!==this.position())&&(this.motion?.track([r],[this.motionVelocity]),this.position.set(r));let o=t+n,l=o;for(let g of[o-e,o+e])Math.abs(r-g)<Math.abs(r-l)&&(l=g);return l}recenterValue(n){let e=this.options().length;if(!this.loop()||e<2)return n;let t=this.loopOffset();return n>=t+e||n<t?t+((n-t)%e+e)%e:n}nearestEnabledPosition(n,e){let t=this.options().length,r=Math.round(n);for(let o=0;o<t;o++){let l=o===0?[r]:[r+o*(e||1),r-o*(e||1)];for(let g of l){let y=this.wrapIndex(g);if(!this.options()[y]?.disabled)return this.loop()?g:y}}return null}wrapIndex(n){let e=this.options().length;if(!e)return 0;let t=this.loopOffset();return this.loop()?((Math.round(n)-t)%e+e)%e:Math.max(0,Math.min(e-1,Math.round(n)-t))}constrainPosition(n){if(this.loop())return this.recenterValue(n);let e=Math.max(0,this.options().length-1),t=n<0?0:e;if(n>=0&&n<=e)return n;let r=n-t;return t+r/(1+Math.abs(r))*.75}settlePosition(n,e){let t=Math.min(12,Math.max(0,this.options().length-1)),r=n+Math.max(-t,Math.min(t,e*.24)),o=this.nearestEnabledPosition(r,Math.sign(e));o!==null?this.commitIndex(this.wrapIndex(o),e,o):this.animateTo(this.targetPhysicalIndex(this.logicalIndex()),!1)}cancelWheel(){this.wheelTimer&&(clearTimeout(this.wheelTimer),this.wheelTimer=void 0,this.wheelVelocity=void 0,this.wheelOptions=void 0,this.dragging.set(!1),this.animateTo(this.targetPhysicalIndex(this.logicalIndex()),!1))}static ɵfac=function(e){return new(e||i)};static ɵcmp=G({type:i,selectors:[[`bx-time-wheel`]],inputs:{options:[1,`options`],value:[1,`value`],label:[1,`label`],type:[1,`type`],loop:[1,`loop`],disabled:[1,`disabled`],itemHeight:[1,`itemHeight`],visibleItems:[1,`visibleItems`]},outputs:{value:`valueChange`,activated:`activated`},decls:13,vars:23,consts:[[`viewport`,``],[1,`bx-wheel`],[`role`,`listbox`,`tabindex`,`0`,1,`bx-wheel-viewport`,3,`keydown`,`wheel`,`pointerdown`],[1,`bx-wheel-base`],[1,`bx-wheel-track`],[`type`,`button`,`role`,`option`,`tabindex`,`-1`,1,`bx-wheel-option`,3,`id`,`is-selected`,`is-disabled`,`height`],[`aria-hidden`,`true`,`inert`,``,1,`bx-wheel-magnifier`],[1,`bx-wheel-lens-content`],[1,`bx-wheel-lens-track`],[1,`bx-wheel-lens-option`,3,`is-selected`,`is-disabled`,`height`],[`bxSurface`,``,`data-bx-surface`,`glass`,`bxSurfaceGlassiness`,`auto`,`bxSurfaceQuality`,`auto`,`bxSurfaceLocalRefraction`,``,`aria-hidden`,`true`,1,`bx-wheel-band`,3,`bxSurfaceInteractive`,`bxSurfaceEmission`],[`type`,`button`,`role`,`option`,`tabindex`,`-1`,1,`bx-wheel-option`,3,`mousedown`,`click`,`id`],[1,`bx-wheel-lens-option`]],template:function(e,t){e&1&&(_(0,`div`,1)(1,`div`,2,0),te(`keydown`,function(o){return t.onKeydown(o)})(`wheel`,function(o){return t.onWheel(o)})(`pointerdown`,function(o){return t.onPointerDown(o)}),_(3,`div`,3)(4,`div`,4),$t(5,Bd,2,11,`button`,5,Po),D()(),_(7,`div`,6)(8,`div`,7)(9,`div`,8),$t(10,qd,2,7,`span`,9,Po),D()()(),xe(12,`div`,10),D()()),e&2&&(_e(`--%NS%bx-wheel-item-height`,t.itemHeight(),`px`)(`--%NS%bx-wheel-center-offset`,t.centerOffset(),`px`),ae(`is-dragging`,t.dragging())(`is-disabled`,t.disabled()),y(),_e(`height`,t.viewportHeight(),`px`),B(`aria-label`,t.resolvedLabel())(`aria-activedescendant`,t.options().length?t.wheelId+`-`+(t.loopOffset()+t.logicalIndex()):null)(`aria-disabled`,t.disabled()),y(3),_e(`transform`,t.trackTransform()),y(),Wt(t.displayOptions()),y(2),_e(`height`,t.itemHeight(),`px`),y(2),_e(`transform`,t.lensTransform()),y(),Wt(t.displayOptions()),y(2),_e(`height`,t.itemHeight(),`px`),R(`bxSurfaceInteractive`,!1)(`bxSurfaceEmission`,!1))},dependencies:[Rt$1],styles:[`
[_nghost-%COMP%] {
  display: block;
  min-inline-size: 0;
  flex: 1 1 0;
}
.bx-wheel[_ngcontent-%COMP%] {
  position: relative;
  display: block;
  min-inline-size: 0;
  -webkit-user-select: none;
  user-select: none;
  border: 0;
}
.bx-wheel-viewport[_ngcontent-%COMP%] {
  position: relative;
  overflow: hidden;
  border-radius: var(--%NS%bx-rounded-md, 0.5rem);
  outline: none;
  cursor: grab;
  touch-action: pan-x;
  perspective: 48rem;
  -webkit-mask-image:
    linear-gradient(
      to bottom,
      transparent 0%,
      black 24%,
      black 76%,
      transparent 100%);
  mask-image:
    linear-gradient(
      to bottom,
      transparent 0%,
      black 24%,
      black 76%,
      transparent 100%);
}
.bx-wheel-viewport[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--%NS%bx-border-accent);
  outline-offset: 2px;
}
.bx-wheel.is-dragging[_ngcontent-%COMP%]   .bx-wheel-viewport[_ngcontent-%COMP%] {
  cursor: grabbing;
}
.bx-wheel.is-disabled[_ngcontent-%COMP%]   .bx-wheel-viewport[_ngcontent-%COMP%] {
  cursor: default;
  opacity: 0.6;
}
.bx-wheel-base[_ngcontent-%COMP%] {
  position: absolute;
  inset: 0;
  -webkit-mask-image:
    linear-gradient(
      to bottom,
      black var(--%NS%bx-wheel-center-offset),
      transparent var(--%NS%bx-wheel-center-offset),
      transparent calc(var(--%NS%bx-wheel-center-offset) + var(--%NS%bx-wheel-item-height)),
      black calc(var(--%NS%bx-wheel-center-offset) + var(--%NS%bx-wheel-item-height)));
  mask-image:
    linear-gradient(
      to bottom,
      black var(--%NS%bx-wheel-center-offset),
      transparent var(--%NS%bx-wheel-center-offset),
      transparent calc(var(--%NS%bx-wheel-center-offset) + var(--%NS%bx-wheel-item-height)),
      black calc(var(--%NS%bx-wheel-center-offset) + var(--%NS%bx-wheel-item-height)));
}
.bx-wheel-track[_ngcontent-%COMP%] {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  transition: none;
  will-change: transform;
  transform-style: preserve-3d;
}
.bx-wheel-option[_ngcontent-%COMP%], 
.bx-wheel-lens-option[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: center;
  inline-size: 100%;
  padding: 0;
  border: 0;
  background: transparent;
  color: var(--%NS%bx-text-secondary);
  font: inherit;
  font-size: 1.125rem;
  font-variant-numeric: tabular-nums;
  cursor: pointer;
  opacity: 0.55;
}
.bx-wheel-option.is-selected[_ngcontent-%COMP%], 
.bx-wheel-lens-option.is-selected[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-primary);
  font-weight: 600;
  opacity: 1;
}
.bx-wheel-option.is-disabled[_ngcontent-%COMP%], 
.bx-wheel-lens-option.is-disabled[_ngcontent-%COMP%] {
  opacity: 0.25;
  cursor: not-allowed;
  text-decoration: line-through;
}
.bx-wheel-band[_ngcontent-%COMP%] {
  --%NS%bx-refraction-strength: 0.16;
  --%NS%bx-refraction-depth-scale: var(--%NS%bx-wheel-refraction-depth-scale, 4);
  --%NS%bx-glass-surface: var(--%NS%bx-wheel-band-background, transparent);
  --%NS%bx-glass-opaque-surface: var(--%NS%bx-bg-element);
  --%NS%bx-glass-text: var(--%NS%bx-text-primary);
  --%NS%bx-glass-edge: transparent;
  --%NS%bx-glass-opacity: var(--%NS%bx-wheel-band-opacity, 0);
  --%NS%bx-refraction-min-blur: 0.25px;
  --%NS%bx-glass-blur: 0px;
  --%NS%bx-refraction-min-opacity: 0;
  --%NS%bx-glass-min-opacity: 0;
  --%NS%bx-glass-radius: var(--%NS%bx-rounded-md, 0.5rem);
  --%NS%bx-glass-decoration-opacity: 1;
  --%NS%bx-glass-rim-visibility: 0;
  --%NS%bx-glass-rim-opacity: 1;
  --%NS%bx-glass-shadow: none;
  position: absolute;
  inset-inline: var(--%NS%bx-space-1, 0.25rem);
  inset-block-start: 50%;
  block-size: 2.5rem;
  translate: 0 -50%;
  border-radius: var(--%NS%bx-glass-radius);
  border: 0;
  background: var(--%NS%bx-glass-opaque-surface);
  outline: 1px solid var(--%NS%bx-wheel-band-border, color-mix(in srgb, var(--%NS%bx-text-primary) 14%, transparent));
  outline-offset: -1px;
  pointer-events: none;
  overflow: hidden;
  z-index: 0;
}
.bx-wheel-band[data-bx-refraction=true][_ngcontent-%COMP%] {
  z-index: 3;
}
.bx-wheel.is-disabled[_ngcontent-%COMP%]   .bx-wheel-band[_ngcontent-%COMP%] {
  --%NS%bx-glass-surface: var(--%NS%bx-bg-element);
  --%NS%bx-glass-edge: var(--%NS%bx-border-subtle);
  background: var(--%NS%bx-bg-element);
}
@media (prefers-reduced-transparency: reduce), (forced-colors: active) {
  .bx-wheel-band[_ngcontent-%COMP%] {
    background: var(--%NS%bx-bg-element);
    border-color: var(--%NS%bx-border-strong);
  }
}
.bx-wheel-magnifier[_ngcontent-%COMP%] {
  position: absolute;
  inset-inline: var(--%NS%bx-space-1, 0.25rem);
  inset-block-start: 50%;
  translate: 0 -50%;
  overflow: hidden;
  border-radius: var(--%NS%bx-rounded-md, 0.5rem);
  pointer-events: none;
  z-index: 2;
}
.bx-wheel-lens-content[_ngcontent-%COMP%] {
  block-size: 100%;
  transform: scale(var(--%NS%bx-wheel-magnification, 1.3));
  transform-origin: center;
}
.bx-wheel-lens-track[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  will-change: transform;
}
.bx-wheel-lens-option[_ngcontent-%COMP%] {
  flex: 0 0 auto;
  opacity: 1;
}
@media (forced-colors: active) {
  .bx-wheel-band[_ngcontent-%COMP%] {
    z-index: 0;
  }
}`]})};var Do={dateParse:({params:i})=>`Enter a date in the ${i.format} format.`,dateMin:({params:i})=>`The date cannot be before ${i.minFormatted}.`,dateMax:({params:i})=>`The date cannot be after ${i.maxFormatted}.`,dateOrder:({params:i})=>`The end date cannot be before the start date (${i.startFormatted}).`,dateDisabled:`This date is not selectable. Choose another date.`,dateAvailability:`Availability for this date has not been confirmed. Wait for loading to finish or retry.`,dateMinLength:({params:i})=>`Select a range of at least ${i.minLength} days.`,dateMaxLength:({params:i})=>`Select a range of at most ${i.maxLength} days.`,dateSameDay:`The start and end dates must be different.`,dateLimit:({params:i})=>`Select no more than ${i.limit} dates.`,dateIncomplete:`Enter both a start date and an end date.`,dateCrossing:`This range includes a date that cannot be selected. Choose another range.`};var Io={parse:`dateParse`,min:`dateMin`,max:`dateMax`,order:`dateOrder`,unknown:`dateAvailability`,"min-length":`dateMinLength`,"max-length":`dateMaxLength`,"same-day":`dateSameDay`,limit:`dateLimit`,incomplete:`dateIncomplete`,crossing:`dateCrossing`};function Eo(i,n,e){let t=new Map(i?.filter(r=>!e.start||!e.end||r.date<e.start||r.date>e.end).map(r=>[r.date,r]));for(let r of n)t.set(r.date,r);return[...t.values()]}function Ai(i,n){if(i==null||typeof i==`string`)return i;if(Array.isArray(i)){let e=[...i].sort();return(n===`min`?e[0]:e.at(-1))??null}return kl$1(i)?n===`min`?i.start:i.end:null}var Wd=[`panelTemplate`];var jd=[[[`bx-error`]],[[`bx-hint`]]];var $d=[`bx-error`,`bx-hint`];var Kd=[`ngProjectAs`,`bx-error`,5,[`bx-error`]];var Zd=[`ngProjectAs`,`bx-hint`,5,[`bx-hint`]];var Gd=()=>[`start`,`end`];function Xd(i,n){i&1&&(_(0,`span`,14),X(1,`*`),D())}function Ud(i,n){if(i&1){let e=wt$1();_(0,`input`,19),te(`input`,function(r){Be(e);let o=w().$implicit,l=w(2);return Ve$1(o===`start`?l.onRangeStartInput(r):l.onRangeEndInput(r))})(`blur`,function(){Be(e);let r=w().$implicit,o=w(2);return Ve$1(r===`start`?o.onRangeStartBlur():o.onRangeEndBlur())})(`keydown`,function(r){Be(e);let o=w(3);return Ve$1(o.onRangeKeydown(r))})(`keydown.escape`,function(r){Be(e);let o=w(3);return Ve$1(o.onEscape(r))}),D()}if(i&2){let e=w().$implicit,t=w(2);R(`id`,e===`start`?t.controlId():t.controlId()+`-end`)(`value`,e===`start`?t.typedStart():t.typedEnd())(`disabled`,t.effectiveDisabled())(`readOnly`,t.isReadonly()),B(`aria-expanded`,t.isOpen())(`aria-controls`,t.isOpen()?t.controlId()+`-panel`:null)(`placeholder`,t.isFloating()?t.resolvedDatePlaceholder():``)(`aria-label`,e===`start`?t.resolvedStartLabel():t.resolvedEndLabel())(`aria-describedby`,t.describedBy())(`aria-invalid`,t.showError()||!!t.parseError())(`aria-required`,t.effectiveRequired())}}function Yd(i,n){if(i&1){let e=wt$1();_(0,`button`,20),te(`click`,function(r){Be(e);let o=w(3);return Ve$1(o.onTriggerClick(r))})(`keydown.escape`,function(r){Be(e);let o=w(3);return Ve$1(o.onEscape(r))}),X(1),D()}if(i&2){let e=w().$implicit,t=w(2);R(`id`,e===`start`?t.controlId():t.controlId()+`-end`)(`disabled`,t.effectiveDisabled()),B(`aria-label`,e===`start`?t.resolvedStartLabel():t.resolvedEndLabel())(`aria-expanded`,t.isOpen())(`aria-describedby`,t.describedBy())(`aria-invalid`,t.showError()||!!t.parseError())(`aria-readonly`,t.isReadonly()),y(),un(` `,e===`start`?t.displayStart():t.displayEnd(),` `)}}function Qd(i,n){if(i&1){let e=wt$1();_(0,`div`,12)(1,`label`,13),X(2),j(3,Xd,2,0,`span`,14),D(),j(4,Ud,1,11,`input`,15)(5,Yd,2,8,`button`,16),_(6,`button`,17),te(`click`,function(r){Be(e);let o=w(2);return Ve$1(o.onTriggerClick(r))}),xe(7,`bx-icon`,18),D()()}if(i&2){let e=n.$implicit,t=w(2);ae(`is-open`,t.isOpen())(`is-floating`,t.editable()?t.isFloating():e===`start`?!!t.displayStart():!!t.displayEnd())(`is-invalid`,t.showError()||!!t.parseError())(`is-outline`,t.resolvedAppearance()===`outline`)(`is-readonly`,t.isReadonly())(`is-disabled`,t.effectiveDisabled())(`is-keyboard-focused`,t.keyboardFocused()),y(),B(`for`,e===`start`?t.controlId():t.controlId()+`-end`),y(),un(` `,e===`start`?t.resolvedStartLabel():t.resolvedEndLabel(),` `),y(),F(t.effectiveRequired()&&!t.resolvedHideRequiredMarker()?3:-1),y(),F(t.editable()?4:5),y(2),R(`disabled`,t.effectiveDisabled()||t.isReadonly()),B(`aria-label`,t.resolvedOpenPickerLabel()),y(),R(`name`,t.pickerIcon())(`decorative`,!0)}}function Jd(i,n){if(i&1&&(_(0,`div`,5),$t(1,Qd,8,22,`div`,11,Fa$1),D()),i&2){let e=w();B(`aria-label`,e.resolvedLabel()||e.resolvedDatePlaceholder()),y(),Wt(HP(1,Gd))}}function ec(i,n){i&1&&(_(0,`span`,14),X(1,`*`),D())}function nc(i,n){if(i&1&&(_(0,`span`,13),X(1),j(2,ec,2,0,`span`,14),D()),i&2){let e=w(2);y(),un(``,e.resolvedLabel(),` `),y(),F(e.effectiveRequired()&&!e.resolvedHideRequiredMarker()?2:-1)}}function tc(i,n){i&1&&xe(0,`bx-loading-spinner`,25),i&2&&R(`size`,16)(`decorative`,!0)}function ic(i,n){if(i&1){let e=wt$1();_(0,`button`,17),te(`click`,function(r){Be(e);let o=w(2);return Ve$1(o.onTriggerClick(r))}),xe(1,`bx-icon`,18),D()}if(i&2){let e=w(2);R(`disabled`,e.effectiveDisabled()||e.isReadonly()),B(`aria-label`,e.resolvedOpenPickerLabel()),y(),R(`name`,e.pickerIcon())(`decorative`,!0)}}function rc(i,n){if(i&1){let e=wt$1();_(0,`div`,21),j(1,nc,3,2,`span`,13),_(2,`input`,22),te(`input`,function(r){Be(e);let o=w();return Ve$1(o.onRangeStartInput(r))})(`blur`,function(){Be(e);let r=w();return Ve$1(r.onRangeStartBlur())})(`keydown`,function(r){Be(e);let o=w();return Ve$1(o.onRangeKeydown(r))})(`keydown.escape`,function(r){Be(e);let o=w();return Ve$1(o.onEscape(r))}),D(),_(3,`span`,23),X(4),D(),_(5,`input`,24),te(`input`,function(r){Be(e);let o=w();return Ve$1(o.onRangeEndInput(r))})(`blur`,function(){Be(e);let r=w();return Ve$1(r.onRangeEndBlur())})(`keydown`,function(r){Be(e);let o=w();return Ve$1(o.onRangeKeydown(r))})(`keydown.escape`,function(r){Be(e);let o=w();return Ve$1(o.onEscape(r))}),D(),j(6,tc,1,2,`bx-loading-spinner`,25)(7,ic,2,4,`button`,26),D()}if(i&2){let e=w();ae(`has-label`,!!e.label())(`is-open`,e.isOpen())(`is-floating`,e.isFloating())(`is-invalid`,e.showError()||!!e.parseError())(`is-outline`,e.resolvedAppearance()===`outline`)(`is-readonly`,e.isReadonly())(`is-disabled`,e.effectiveDisabled())(`is-keyboard-focused`,e.keyboardFocused()),y(),F(e.label()?1:-1),y(),R(`value`,e.typedStart())(`id`,e.controlId())(`disabled`,e.effectiveDisabled())(`readOnly`,e.isReadonly()),B(`aria-controls`,e.isOpen()?e.controlId()+`-panel`:null)(`placeholder`,e.isFloating()||!e.label()?e.resolvedStartLabel():``)(`aria-describedby`,e.describedBy())(`aria-required`,e.effectiveRequired())(`aria-label`,(e.label()?e.resolvedLabel()+`, `:``)+e.resolvedStartLabel())(`aria-expanded`,e.isOpen())(`aria-haspopup`,`dialog`)(`aria-invalid`,e.showError()||!!e.parseError())(`aria-readonly`,e.isReadonly()),y(),ae(`is-concealed`,e.label()&&!e.isFloating()),y(),fe(e.settings().rangeSeparator),y(),R(`value`,e.typedEnd())(`disabled`,e.effectiveDisabled())(`readOnly`,e.isReadonly()),B(`aria-controls`,e.isOpen()?e.controlId()+`-panel`:null)(`placeholder`,e.isFloating()||!e.label()?e.resolvedEndLabel():``)(`aria-describedby`,e.describedBy())(`aria-required`,e.effectiveRequired())(`aria-label`,(e.label()?e.resolvedLabel()+`, `:``)+e.resolvedEndLabel())(`aria-expanded`,e.isOpen())(`aria-haspopup`,`dialog`)(`aria-invalid`,e.showError()||!!e.parseError())(`aria-readonly`,e.isReadonly()),y(),F(e.isLoading()?6:7)}}function oc(i,n){i&1&&(_(0,`span`,14),X(1,`*`),D())}function ac(i,n){if(i&1&&(_(0,`span`,13),X(1),j(2,oc,2,0,`span`,14),D()),i&2){let e=w(2);y(),un(``,e.resolvedLabel(),` `),y(),F(e.effectiveRequired()&&!e.resolvedHideRequiredMarker()?2:-1)}}function lc(i,n){i&1&&xe(0,`bx-loading-spinner`,25),i&2&&R(`size`,16)(`decorative`,!0)}function sc(i,n){if(i&1){let e=wt$1();_(0,`button`,17),te(`click`,function(r){Be(e);let o=w(2);return Ve$1(o.onTriggerClick(r))}),xe(1,`bx-icon`,18),D()}if(i&2){let e=w(2);R(`disabled`,e.effectiveDisabled()||e.isReadonly()),B(`aria-label`,e.resolvedOpenPickerLabel()),y(),R(`name`,e.pickerIcon())(`decorative`,!0)}}function dc(i,n){if(i&1){let e=wt$1();_(0,`div`,27),j(1,ac,3,2,`span`,13),_(2,`input`,28),te(`input`,function(r){Be(e);let o=w();return Ve$1(o.onTypedInput(r))})(`blur`,function(){Be(e);let r=w();return Ve$1(r.onTypedBlur())})(`keydown`,function(r){Be(e);let o=w();return Ve$1(o.onTypedKeydown(r))})(`keydown.escape`,function(r){Be(e);let o=w();return Ve$1(o.onEscape(r))}),D(),j(3,lc,1,2,`bx-loading-spinner`,25)(4,sc,2,4,`button`,26),D()}if(i&2){let e=w();ae(`has-label`,!!e.label())(`is-open`,e.isOpen())(`is-floating`,e.isFloating())(`is-invalid`,e.showError()||!!e.parseError())(`is-outline`,e.resolvedAppearance()===`outline`)(`is-readonly`,e.isReadonly())(`is-disabled`,e.effectiveDisabled())(`is-keyboard-focused`,e.keyboardFocused()),y(),F(e.label()?1:-1),y(),R(`id`,e.controlId())(`value`,e.typedText())(`disabled`,e.effectiveDisabled())(`readOnly`,e.isReadonly()),B(`aria-controls`,e.isOpen()?e.controlId()+`-panel`:null)(`placeholder`,e.isFloating()||!e.label()?e.resolvedDatePlaceholder():``)(`aria-label`,e.ariaLabel()||e.resolvedLabel()||e.resolvedDatePlaceholder())(`aria-describedby`,e.describedBy())(`aria-expanded`,e.isOpen())(`aria-haspopup`,`dialog`)(`aria-invalid`,e.showError()||!!e.parseError())(`aria-required`,e.effectiveRequired())(`aria-readonly`,e.isReadonly())(`data-testid`,e.dataTestId()),y(),F(e.isLoading()?3:4)}}function cc(i,n){i&1&&(_(0,`span`,14),X(1,`*`),D())}function uc(i,n){if(i&1&&(_(0,`span`,13),X(1),j(2,cc,2,0,`span`,14),D()),i&2){let e=w(2);y(),un(` `,e.resolvedLabel(),` `),y(),F(e.effectiveRequired()&&!e.resolvedHideRequiredMarker()?2:-1)}}function bc(i,n){if(i&1&&xe(0,`bx-tag`,34),i&2){let e=n.$implicit,t=w(3);R(`text`,t.formatChipLabel(e))(`config`,t.tagConfig())(`focusable`,!1)(`tooltipOnTruncate`,t.resolvedTooltipOnTruncate()?void 0:!1)}}function pc(i,n){if(i&1&&xe(0,`bx-tag`,35),i&2){let e=w(3);R(`text`,e.overflowDatesLabel())(`config`,e.overflowTagConfig())(`tooltip`,e.overflowDatesTooltip())(`focusable`,!1)(`tooltipOnTruncate`,e.resolvedTooltipOnTruncate()?void 0:!1)}}function gc(i,n){if(i&1&&(_(0,`span`,31),$t(1,bc,1,4,`bx-tag`,34,Fa$1),j(3,pc,1,5,`bx-tag`,35),D()),i&2){let e=w(2);B(`aria-label`,e.resolvedSelectedDatesLabel()),y(),Wt(e.visibleDates()),y(2),F(e.multipleDates().length>e.visibleTagCount()?3:-1)}}function mc(i,n){if(i&1&&(_(0,`span`,32),X(1),D()),i&2){let e=w(2);R(`bxTooltip`,e.resolvedTooltipOnTruncate()?e.displayValue():``),y(),fe(e.displayValue()||(e.label()?``:e.resolvedTriggerText()))}}function hc(i,n){i&1&&xe(0,`bx-loading-spinner`,25),i&2&&R(`size`,16)(`decorative`,!0)}function fc(i,n){if(i&1&&xe(0,`bx-icon`,33),i&2){let e=w(2);R(`name`,e.pickerIcon())(`decorative`,!0)}}function xc(i,n){if(i&1){let e=wt$1();_(0,`button`,29,2),te(`click`,function(r){Be(e);let o=w();return Ve$1(o.onTriggerClick(r))})(`keydown.arrowdown`,function(r){Be(e);let o=w();return r.preventDefault(),Ve$1(o.onTriggerClick(r))})(`keydown.escape`,function(r){Be(e);let o=w();return Ve$1(o.onEscape(r))})(`blur`,function(){Be(e);let r=w();return Ve$1(r.markAsTouched())}),j(2,uc,3,2,`span`,13),_(3,`span`,30),j(4,gc,4,2,`span`,31)(5,mc,2,2,`span`,32),D(),j(6,hc,1,2,`bx-loading-spinner`,25)(7,fc,1,2,`bx-icon`,33),D()}if(i&2){let e=w();ae(`has-label`,!!e.label())(`is-open`,e.isOpen())(`is-floating`,e.isFloating())(`is-invalid`,e.showError()||!!e.parseError())(`is-outline`,e.resolvedAppearance()===`outline`)(`is-readonly`,e.isReadonly())(`is-disabled`,e.effectiveDisabled())(`is-keyboard-focused`,e.keyboardFocused()),R(`id`,e.controlId())(`disabled`,e.effectiveDisabled()),B(`aria-label`,e.ariaLabel()||e.resolvedLabel()||e.resolvedDatePlaceholder())(`aria-labelledby`,e.ariaLabelledBy())(`aria-describedby`,e.describedBy())(`aria-haspopup`,`dialog`)(`aria-expanded`,e.isOpen())(`aria-invalid`,e.showError()||!!e.parseError())(`aria-required`,e.effectiveRequired())(`aria-readonly`,e.isReadonly())(`aria-busy`,e.isLoading())(`data-testid`,e.dataTestId()),y(2),F(e.label()?2:-1),y(),ae(`is-placeholder`,!e.displayValue()),y(),F(e.mode()===`multiple`&&e.multipleDates().length?4:5),y(2),F(e.isLoading()?6:7)}}function vc(i,n){if(i&1){let e=wt$1();_(0,`button`,36),te(`click`,function(){Be(e);let r=w();return Ve$1(r.clear())}),xe(1,`bx-icon`,37),D()}if(i&2){let e=w();R(`surfaceEffects`,!1)(`disabled`,e.effectiveDisabled())(`bxTooltip`,e.resolvedClearTooltip()),B(`aria-label`,e.resolvedClearLabel()),y(),R(`decorative`,!0)}}function yc(i,n){if(i&1){let e=wt$1();_(0,`button`,38),te(`click`,function(){let r=Be(e).retry;return Ve$1(r())}),xe(1,`bx-icon`,39),X(2),D()}if(i&2){let e=n.label;y(),R(`decorative`,!0),y(),un(``,e,` `)}}function _c(i,n){if(i&1){let e=wt$1();_(0,`aside`,42)(1,`bx-date-preset-list`,45),te(`presetSelect`,function(r){Be(e);let o=w(2);return Ve$1(o.onPeriodPresetSelect(r))}),D()()}if(i&2){let e=w(2);y(),R(`presets`,e.effectivePresets())(`context`,e.presetContext())(`activeValue`,e.draftValue())(`horizontal`,e.presetsHorizontal())(`ariaLabel`,e.resolvedPresetsLabel())}}function Sc(i,n){if(i&1){let e=wt$1();_(0,`aside`,42)(1,`bx-date-preset-list`,45),te(`presetSelect`,function(r){Be(e);let o=w(2);return Ve$1(o.onPeriodPresetSelect(r))}),D()()}if(i&2){let e=w(2);y(),R(`presets`,e.effectivePresets())(`context`,e.presetContext())(`activeValue`,e.draftValue())(`horizontal`,e.presetsHorizontal())(`ariaLabel`,e.resolvedPresetsLabel())}}function Cc(i,n){if(i&1){let e=wt$1();_(0,`div`,40)(1,`div`,41),j(2,_c,2,5,`aside`,42),_(3,`div`,43)(4,`bx-calendar`,44),te(`visibleRangeChange`,function(r){Be(e);let o=w();return Ve$1(o.onVisibleRange(r))})(`viewChange`,function(r){Be(e);let o=w();return Ve$1(o.viewChange.emit(r))})(`monthSelected`,function(r){Be(e);let o=w();return Ve$1(o.monthSelected.emit(r))})(`yearSelected`,function(r){Be(e);let o=w();return Ve$1(o.yearSelected.emit(r))})(`rangeStart`,function(r){Be(e);let o=w();return Ve$1(o.onCalendarRangeStart(r))})(`valueChange`,function(r){Be(e);let o=w();return Ve$1(o.onCalendarValueChange(r))})(`selectionRejected`,function(r){Be(e);let o=w();return Ve$1(o.onSelectionRejected(r))})(`requestAvailability`,function(r){Be(e);let o=w();return Ve$1(o.onAvailabilityRequest(r))})(`retryAvailability`,function(r){Be(e);let o=w();return Ve$1(o.onAvailabilityRequest(r))}),D()(),j(5,Sc,2,5,`aside`,42),D()()}if(i&2){let e=w(),t=Tt$1(9);ae(`is-drawer`,e.isDrawer()),R(`bxSurfaceInteractive`,!1),y(2),F(e.showPresets()&&e.presetsPlacement()===`start`?2:-1),y(2),R(`startView`,e.startView())(`mode`,e.mode())(`value`,e.draftValue())(`viewDate`,e.viewDate())(`months`,e.calendarMonths())(`retryTemplate`,t)(`weekdayNameFormat`,e.weekdayNameFormat())(`monthNameFormat`,e.monthNameFormat())(`locale`,e.settings().locale)(`calendarId`,e.settings().calendar)(`timeZone`,e.settings().timeZone)(`weekStartsOn`,e.settings().weekStartsOn)(`minimalDaysInFirstWeek`,e.settings().minimalDaysInFirstWeek)(`min`,e.min())(`max`,e.max())(`disabledDates`,e.disabledDates())(`disabledIntervals`,e.disabledIntervals())(`disabledWeekdays`,e.disabledWeekdays())(`dateFilter`,e.dateFilter())(`crossingPolicy`,e.crossingPolicy())(`minRangeLength`,e.minRangeLength())(`maxRangeLength`,e.maxRangeLength())(`allowSameDay`,e.allowSameDay())(`selectionLimit`,e.selectionLimit())(`readOnly`,e.isReadonly()||e.effectiveDisabled())(`availability`,e.availabilityForCalendar())(`dayTemplate`,e.dayTemplate())(`showToday`,e.showToday())(`showTodayButton`,e.showTodayButton())(`todayLabel`,e.todayLabel())(`loadingLabel`,e.loadingLabel())(`retryLabel`,e.retryLabel()),y(),F(e.showPresets()&&e.presetsPlacement()===`end`?5:-1)}}var Ro=class i extends se{bxDateTimeConfigService=f(nb);clock=f(tb);i18n=f(Se$1,{optional:!0});windowDimensionsService=f(ol$1);originElement=M(null);availabilityState=M(void 0);lastDraftSignature=M(``);fieldFocused=M(!1);textEdited=M(!1);isOpen=M(!1);draftValue=M(null);viewDate=M(null);typedText=M(``);typedStart=M(``);typedEnd=M(``);parseError=M(null);settings=g(()=>this.bxDateTimeConfigService.resolve({locale:this.locale(),calendar:this.calendarId(),timeZone:this.timeZone(),weekStartsOn:this.weekStartsOn(),minimalDaysInFirstWeek:this.minimalDaysInFirstWeek(),dateFormat:this.dateFormat(),allowNaturalLanguage:this.allowNaturalLanguage()}));adapter=g(()=>this.bxDateTimeConfigService.adapter(this.settings().calendar));modeInfo=g(()=>zd(this.mode()));formatContext=g(()=>({locale:this.settings().locale,calendar:this.adapter(),weekStartsOn:this.settings().weekStartsOn,minimalDaysInFirstWeek:this.settings().minimalDaysInFirstWeek}));presetContext=g(()=>({now:this.clock.now(),today:this.todayIso(),locale:this.settings().locale,calendar:this.adapter(),timeZone:this.settings().timeZone,weekStartsOn:this.settings().weekStartsOn,minimalDaysInFirstWeek:this.settings().minimalDaysInFirstWeek}));isDrawer=g(()=>this.surfacePresentation()===`drawer`);surfacePresentation=g(()=>{let n=this.presentation();return n!==`auto`?n:this.windowDimensionsService.isMobile()?`drawer`:`popover`});displayValue=g(()=>this.formatValue(this.isOpen()&&this.mode()!==`multiple`?this.draftValue():this.internalValue()));displayStart=g(()=>this.formatEndpoint(this.rangeStart(this.isOpen()?this.draftValue():this.internalValue())));displayEnd=g(()=>this.formatEndpoint(this.rangeEnd(this.isOpen()?this.draftValue():this.internalValue())));isRangeMode=g(()=>this.modeInfo().selection===`range`);rangeFieldLayout=g(()=>this.separateFields()&&this.isRangeMode()?`separate`:`combined`);effectivePresets=g(()=>(this.presets()??this.defaultPresets()).map(e=>s(r({},e),{resolve:t=>this.normalizePresetValue(e.resolve(t))})));showPresets=g(()=>this.presetsPlacement()!==`hidden`&&this.effectivePresets().length>0);presetsHorizontal=g(()=>this.isDrawer());calendarMonths=g(()=>{let n=this.months();return n>0?n:this.isRangeMode()&&!this.isDrawer()?2:1});availabilityForCalendar=g(()=>this.availability()??(this.resolver()?this.availabilityState():void 0));resolvedDatePlaceholder=g(()=>J(this.placeholder()??this.defaultPlaceholder(),this.i18n));resolvedInvalidLabel=g(()=>this.dateValidationMessage(this.parseError()??`endpoint`));resolvedTriggerText=g(()=>J(this.placeholder()??this.openPickerLabel(),this.i18n));resolvedOpenPickerLabel=g(()=>J(this.openPickerLabel(),this.i18n));resolvedClearLabel=g(()=>J(this.clearLabel(),this.i18n));resolvedPresetsLabel=g(()=>J(this.presetsLabel(),this.i18n));resolvedStartLabel=g(()=>J(this.startLabel(),this.i18n));resolvedEndLabel=g(()=>J(this.endLabel(),this.i18n));resolvedMoreDatesLabel=g(()=>J(this.moreDatesLabel(),this.i18n));resolvedSelectedDatesLabel=g(()=>J(this.selectedDatesLabel(),this.i18n));availableDates=g(()=>this.availabilityForCalendar()?.dates??[]);showClear=g(()=>{let n=this.internalValue(),e=Array.isArray(n)?n.length>0:!!n;return this.clearable()&&(e||this.textEdited())&&!this.isReadonly()});isFloating=g(()=>!!this.displayValue()||this.editable()&&this.mode()!==`multiple`&&(this.fieldFocused()||this.isOpen()||!!this.typedText()||!!this.typedStart()||!!this.typedEnd()||this.resolvedFloatLabel()===`always`));isLoading=g(()=>this.loading()||this.availabilityForCalendar()?.loading===!0);multipleDates=g(()=>{let n=this.internalValue();return Array.isArray(n)?n:[]});visibleDates=g(()=>this.multipleDates().slice(0,this.visibleTagCount()));overflowDatesLabel=g(()=>`+${Math.max(0,this.multipleDates().length-this.visibleTagCount())}`);overflowDatesTooltip=g(()=>this.multipleDates().slice(this.visibleTagCount()).map(n=>this.formatEndpoint(n)).join(`, `));resolvedClearTooltip=g(()=>J(this.clearTooltip()??this.clearLabel(),this.i18n));restrictionConfig=g(()=>({min:this.min(),max:this.max(),disabledDates:this.disabledDates(),disabledIntervals:this.disabledIntervals(),disabledWeekdays:this.disabledWeekdays(),metadata:this.availableDates(),isDateDisabled:n=>!!this.dateFilter()?.(n)||(!!this.resolver()||!!this.availability())&&(!this.availabilityForCalendar()||!!this.availabilityForCalendar()?.loading||!!this.availabilityForCalendar()?.error||!this.availableDates().some(e=>e.date===n))}));panelClass=g(()=>`bx-date-panel ${this.isDrawer()?`is-drawer`:`is-popover`}`);panelWidth=g(()=>{if(this.isDrawer())return`100%`;let n=this.calendarMonths(),e=this.showPresets();return n===1?e?`min(94vw, 32rem)`:`min(94vw, 20rem)`:e?`min(94vw, 46rem)`:`min(94vw, 38rem)`});panelOrigin=g(()=>this.originElement());panelTemplate=Nt$1(`panelTemplate`);mode=b(`single`);pickerIcon=b(`calendar`);openPickerLabel=b(`Choose date`);startAt=b(null);startView=b(void 0);parseFormats=b([]);locale=b(void 0);calendarId=b(void 0);timeZone=b(void 0);weekStartsOn=b(void 0);minimalDaysInFirstWeek=b(void 0);dateFormat=b(void 0);allowNaturalLanguage=b(!1,{transform:A});editable=b(!0,{transform:A});presentation=b(`auto`);weekdayNameFormat=b(`narrow`);monthNameFormat=b(`short`);months=b(0,{transform:n=>Math.trunc(Number(n))||0});separateFields=b(!1,{transform:A});commitPolicy=b(`auto`);closeOnSelect=b(!0,{transform:A});clearable=b(!0,{transform:A});presets=b(void 0);presetsPlacement=b(`start`);min=b(void 0,{transform:n=>Ai(n,`min`)});max=b(void 0,{transform:n=>Ai(n,`max`)});disabledDates=b([]);disabledIntervals=b([]);disabledWeekdays=b([]);dateFilter=b(void 0);crossingPolicy=b(`reject`);minRangeLength=b(1);maxRangeLength=b(null);allowSameDay=b(!0,{transform:A});selectionLimit=b(null);availability=b(void 0);resolver=b(void 0);loadingLabel=b(void 0);retryLabel=b(`Retry request`);loadErrorMessage=b(`Dates could not be loaded.`);invalidSelectionLabel=b(void 0);applyLabel=b(`Apply`);cancelLabel=b(`Cancel`);clearLabel=b(`Clear selection`);todayLabel=b(void 0);presetsLabel=b(`Quick select`);showToday=b(!0,{transform:A});showTodayButton=b(!0,{transform:A});startLabel=b(`Start date`);endLabel=b(`End date`);moreDatesLabel=b(`more`);selectedDatesLabel=b(`Selected dates`);clearTooltip=b(void 0);visibleTagCount=b(1,{transform:Rt});tagConfig=b({});overflowTagConfig=b({});dayTemplate=b(void 0);viewChange=ze();monthSelected=ze();yearSelected=ze();valueCommit=ze();draftChange=ze();openChange=ze();visibleRangeChange=ze();request=ze();retry=ze();parseFailed=ze();resolverContext=``;resolverToken=0;lastRequest;closeTimer;constructor(){super(),ce(()=>{(this.effectiveDisabled()||this.isReadonly())&&this.close()}),ce(()=>{let n=this.draftValue(),e=JSON.stringify(n??null);e!==this.lastDraftSignature()&&(this.lastDraftSignature.set(e),W(()=>this.draftChange.emit(n)))}),ce(()=>{this.resolver(),this.availability(),W(()=>{++this.resolverToken,this.availabilityState.set(void 0),this.resolverContext=``;let n=this.lastRequest;this.isOpen()&&n&&this.runResolver(s(r({},n),{revision:n.revision+1}))})}),ce(()=>{let n=this.internalValue();this.fieldFocused()||this.isOpen()||this.textEdited()||(this.typedText.set(this.formatValue(n)),this.typedStart.set(this.displayStart()),this.typedEnd.set(this.displayEnd()))}),this.destroyRef.onDestroy(()=>{++this.resolverToken,this.clearScheduledClose()})}reset(){let n=this.isOpen();this.clearScheduledClose(),this.isOpen.set(!1),super.reset(),this.clearPendingEdit(),this.fieldFocused.set(!1),this.draftValue.set(this.internalValue()),this.typedText.set(this.formatValue(this.internalValue())),this.typedStart.set(this.displayStart()),this.typedEnd.set(this.displayEnd()),n&&this.openChange.emit(!1)}open(){if(this.isOpen()||this.effectiveDisabled()||this.isReadonly())return;this.clearScheduledClose(),this.draftValue.set(this.internalValue()),this.viewDate.set(this.startAt());let n=this.originElement();this.originElement.set(n?.isConnected&&this.nativeElement.contains(n)?n:this.nativeElement.querySelector(`.bx-date-trigger`)),this.isOpen.set(!0),this.openChange.emit(!0)}close(){this.isOpen()&&(this.clearScheduledClose(),this.isOpen.set(!1),this.markAsTouched(),this.openChange.emit(!1))}apply(){let n=this.draftValue();this.effectiveDisabled()||this.isReadonly()||n!==null&&!Array.isArray(n)&&!this.isDraftComplete(n)||this.commitDraft(n)&&this.close()}cancel(){this.draftValue.set(this.internalValue()),this.parseError()||(this.textEdited.set(!1),this.typedText.set(this.formatValue(this.internalValue())),this.typedStart.set(this.formatEndpoint(this.rangeStart(this.internalValue()))),this.typedEnd.set(this.formatEndpoint(this.rangeEnd(this.internalValue())))),this.close()}clear(){this.effectiveDisabled()||this.isReadonly()||(this.draftValue.set(null),this.clearPendingEdit(),this.parseError.set(null),this.updateValue(null),this.valueCommit.emit(null),this.close(),this.focus({preventScroll:!0}))}goToToday(){this.viewDate.set(this.todayIso())}reloadAvailability(){this.effectiveDisabled()||this.isReadonly()||this.availabilityForCalendar()?.loading||(this.isOpen()?this.lastRequest&&this.onAvailabilityRequest(s(r({},this.lastRequest),{revision:this.lastRequest.revision+1,source:`initial`})):this.open())}retryAvailability(){if(!this.lastRequest)return;let n=s(r({},this.lastRequest),{revision:this.lastRequest.revision+1,source:`retry`});this.retry.emit(n),this.runResolver(n)}clearPendingEdit(){super.clearPendingEdit(),this.typedText.set(``),this.typedStart.set(``),this.typedEnd.set(``),this.textEdited.set(!1),this.parseError.set(null)}onFieldFocus(){this.fieldFocused.set(!0)}onFieldBlur(n){n.relatedTarget instanceof Node&&this.nativeElement.contains(n.relatedTarget)||(this.fieldFocused.set(!1),this.markAsTouched())}onEscape(n){this.isOpen()&&(n.preventDefault(),this.cancel())}onTriggerClick(n){if(this.isReadonly())return;let e=n.currentTarget;e instanceof HTMLElement&&this.originElement.set(e.closest(`.bx-date-field`)??e),this.isOpen()?this.close():this.open()}onCalendarRangeStart(n){this.clearScheduledClose(),this.draftValue.set({start:n,end:null}),this.typedStart.set(this.formatEndpoint(n)),this.typedEnd.set(``),this.parseError.set(null)}onCalendarValueChange(n){this.draftValue.set(n),this.textEdited.set(!1),this.parseError.set(null),this.editable()&&(this.typedText.set(this.formatValue(n)),kl$1(n)&&(this.typedStart.set(this.formatEndpoint(n.start)),this.typedEnd.set(this.formatEndpoint(n.end)))),this.maybeImmediateCommit(n)}onPeriodPresetSelect(n){let e=this.safeResolvePreset(n);e&&(this.draftValue.set(e),this.editable()&&this.typedText.set(this.formatValue(e)),this.onCalendarValueChange(e))}onTypedInput(n){let e=n.target;this.textEdited.set(!0),this.typedText.set(e.value),this.parseError.set(null)}onTypedBlur(){this.commitTypedValue(),this.markAsTouched()}onTypedKeydown(n){n.key===`Enter`?(n.preventDefault(),this.commitTypedValue()):n.key===`ArrowDown`&&!this.isOpen()&&(n.preventDefault(),this.open())}onRangeStartInput(n){let e=n.target;this.textEdited.set(!0),this.typedStart.set(e.value),this.parseError.set(null)}onRangeEndInput(n){let e=n.target;this.textEdited.set(!0),this.typedEnd.set(e.value),this.parseError.set(null)}onRangeStartBlur(){this.commitRangeEndpoint(`start`),this.markAsTouched()}onRangeEndBlur(){this.commitRangeEndpoint(`end`),this.markAsTouched()}onRangeKeydown(n){n.key===`Enter`?(n.preventDefault(),this.commitRangeEndpoint(`start`),this.commitRangeEndpoint(`end`)):n.key===`ArrowDown`&&!this.isOpen()&&(n.preventDefault(),this.open())}formatChipLabel(n){return this.formatEndpoint(n)}onSelectionRejected(n){this.parseError.set(n)}onVisibleRange(n){this.visibleRangeChange.emit(n)}onAvailabilityRequest(n){this.lastRequest=n,n.source===`retry`?this.retry.emit(n):this.request.emit(n),this.runResolver(n)}todayIso(){let n=new Intl.DateTimeFormat(`en-CA`,{timeZone:this.settings().timeZone,year:`numeric`,month:`2-digit`,day:`2-digit`}).formatToParts(this.clock.now()),e=t=>n.find(r=>r.type===t)?.value??``;return`${e(`year`)}-${e(`month`)}-${e(`day`)}`}defaultPlaceholder(){return this.parseFormats()[0]??this.patternForMode(this.modeInfo().period)}formatValue(n){if(!n)return``;if(typeof n==`string`)return this.formatEndpoint(n);if(Array.isArray(n)){if(!n.length)return``;let e=this.formatEndpoint(n[0]),t=n.length-1;return t>0?`${e} +${t} ${this.resolvedMoreDatesLabel()}`:e}if(Hd(n)){let e=this.formatEndpoint(n.start),t=this.formatEndpoint(n.end);return n.start===n.end?e:`${e} ${this.settings().rangeSeparator} ${t}`}if(kl$1(n)){let e=n.start?this.formatEndpoint(n.start):``,t=n.end?this.formatEndpoint(n.end):``;return e&&t?`${e} ${this.settings().rangeSeparator} ${t}`:e||t}return``}formatEndpoint(n){if(!n)return``;let e=this.modeInfo(),t=this.patternForMode(e.period);if(e.period===`week`){let r=xae(this.mode(),n,this.settings().weekStartsOn);return r?.start&&r.end?`${mI(r.start,`dd MMM`,this.formatContext())} ${this.settings().rangeSeparator} ${mI(r.end,`dd MMM yyyy`,this.formatContext())}`:mI(n,t,this.formatContext())}return mI(n,t,this.formatContext())}patternForMode(n){return n===`month`?this.settings().monthFormat:n===`quarter`?this.settings().quarterFormat:n===`year`?this.settings().yearFormat:this.settings().dateFormat}rangeOf(n){return xae(this.mode(),n,this.settings().weekStartsOn)}rangeStart(n){return this.rangeOf(n)?.start??null}rangeEnd(n){return this.rangeOf(n)?.end??null}isDraftComplete(n){return n?typeof n==`string`||Array.isArray(n)?!0:Hd(n)||kl$1(n)?!!n.start&&!!n.end:!1:!1}maybeImmediateCommit(n){this.isDraftComplete(n)&&this.commitDraft(n)&&this.mode()!==`multiple`&&this.closeOnSelect()&&this.scheduleClose()}scheduleClose(){this.clearScheduledClose(),this.closeTimer=setTimeout(()=>{this.closeTimer=void 0,this.close()},120)}clearScheduledClose(){this.closeTimer!==void 0&&(clearTimeout(this.closeTimer),this.closeTimer=void 0)}commitDraft(n){if(this.effectiveDisabled()||this.isReadonly())return!1;let e=this.validateDraft(n);if(!e.valid)return this.parseError.set(e.message),this.parseFailed.emit(this.dateValidationMessage(e.message)),!1;let t=e.value??n;return this.parseError.set(null),this.textEdited.set(!1),this.draftValue.set(t),this.editable()&&(this.typedText.set(this.formatValue(t)),this.typedStart.set(this.formatEndpoint(this.rangeStart(t))),this.typedEnd.set(this.formatEndpoint(this.rangeEnd(t)))),JSON.stringify(t)!==JSON.stringify(this.internalValue())&&(this.updateValue(t),this.valueCommit.emit(t)),!0}validateDraft(n){if(n===null||Array.isArray(n)&&n.length===0)return{valid:!0,message:``};if(!this.isDraftComplete(n))return{valid:!1,message:`incomplete`};let e=typeof n==`string`&&this.modeInfo().period===`week`?$r$1(n,`week`,this.settings().weekStartsOn):null,t=e?hB(e.start,e.end):typeof n==`string`?[n]:Array.isArray(n)?n:[],r$4=this.selectionLimit();for(let o of t){if(!Qe$1(o))return{valid:!1,message:`parse`};let l=Wd$1(o,this.restrictionConfig());if(l.disabled)return{valid:!1,message:l.reason??`endpoint`}}if(Array.isArray(n)&&r$4!==null&&n.length>r$4)return{valid:!1,message:`limit`};if(kl$1(n)&&n.start&&n.end){if(n.start>n.end)return{valid:!1,message:`order`};let o=this.modeInfo().period===`week`?$r$1(n.end,`week`,this.settings().weekStartsOn).end:n.end,l=mce(n.start,o,this.restrictionConfig(),{crossingPolicy:this.crossingPolicy(),minLength:this.minRangeLength(),maxLength:this.maxRangeLength(),allowSameDay:this.allowSameDay()});if(!l.valid){let g=Wd$1(n.start,this.restrictionConfig()).reason??Wd$1(o,this.restrictionConfig()).reason;return{valid:!1,message:l.reason===`endpoint`?g??`endpoint`:l.reason??`endpoint`}}return this.modeInfo().period===`week`&&l.range.end!==o?{valid:!1,message:`crossing`}:{valid:!0,message:``,value:Hd(n)?n:s(r({},n),{start:l.range.start,end:l.range.end})}}return{valid:!0,message:``}}dateValidationMessage(n){let e=this.invalidSelectionLabel();if(e!==void 0)return J(e,this.i18n);let t=this.draftValue(),r$5=kl$1(t)?t.start:null,o={format:this.defaultPlaceholder(),min:this.min(),max:this.max(),start:r$5,minFormatted:this.formatEndpoint(this.min()??null),maxFormatted:this.formatEndpoint(this.max()??null),startFormatted:this.formatEndpoint(r$5),minLength:this.minRangeLength(),maxLength:this.maxRangeLength(),limit:this.selectionLimit()};return Sn({kind:Io[n]??`dateDisabled`,context:o},this.errorMessages(),r(r({},Do),this.formSettingsService.settings().errorMessages),this.i18n)}defaultPresets(){let n=this.modeInfo(),e=n.period;return n.isRange?dce():[-1,0,1].map(t=>({id:`relative-${t}`,label:e?`${t<0?`Previous`:t>0?`Next`:`This`} ${e}`:t<0?`Yesterday`:t>0?`Tomorrow`:`Today`,resolve:r=>e===`year`?r.calendar.addYears(r.today,t,r.locale):e===`month`||e===`quarter`?r.calendar.addMonths(r.today,t*(e===`quarter`?3:1),r.locale):ve(r.today,t*(e===`week`?7:1))}))}normalizePresetValue(n){if(!n)return null;let e=this.modeInfo(),t=vae(this.mode(),n),r=t.start,o=t.end??r;if(!r||!o)return null;if(e.selection===`multiple`)return Array.isArray(n)?n:hB(r,o);let l=g=>e.period?$r$1(g,e.period,this.settings().weekStartsOn).start:g;return e.isRange?yae(this.mode(),l(r),l(o),this.settings().weekStartsOn):l(o)}safeResolvePreset(n){try{return this.normalizePresetValue(n.resolve(this.presetContext()))}catch{return null}}commitTypedValue(){if(!this.editable()||!this.textEdited()||this.effectiveDisabled()||this.isReadonly())return;let n=this.typedText().trim();if(!n){this.commitDraft(null);return}let e=this.parseTypedText(n);if(!e){this.parseError.set(`parse`),this.parseFailed.emit(n);return}this.draftValue.set(e),this.commitDraft(e)}commitRangeEndpoint(n){if(!this.textEdited()||!this.editable()||this.effectiveDisabled()||this.isReadonly())return;let e=this.typedStart().trim(),t=this.typedEnd().trim();if(!e&&!t){this.commitDraft(null);return}let r=e?this.parseSingleDate(e):null,o=t?this.parseSingleDate(t):null;if(e&&!r||t&&!o){this.parseError.set(`parse`),this.parseFailed.emit(n===`start`?e:t);return}let l=this.modeInfo().period,g=l&&r&&o?{start:r,end:o,kind:l}:{start:r,end:o};this.draftValue.set(g),r&&o&&this.commitDraft(g)?(this.typedStart.set(this.formatEndpoint(this.rangeStart(this.draftValue()))),this.typedEnd.set(this.formatEndpoint(this.rangeEnd(this.draftValue())))):(!r||!o)&&this.parseError.set(`incomplete`)}parseTypedText(n){let e=this.mode(),t=this.settings().rangeSeparator,r=this.modeInfo();if(r.selection===`range`){let o=n.split(t).map(y=>y.trim());if(o.length<2)return null;let l=this.parseSingleDate(o[0]),g=this.parseSingleDate(o[1]);return!l||!g?null:e===`range`?{start:l,end:g}:{start:l,end:g,kind:r.period??`month`}}if(e===`multiple`){let o=n.split(`,`).map(l=>this.parseSingleDate(l.trim()));return o.length&&o.every(l=>l!==null)?[...new Set(o)].sort():null}return this.parseSingleDate(n)}parseSingleDate(n){if(this.allowNaturalLanguage()){let r=zse(n,{now:this.clock.now(),timeZone:this.settings().timeZone,locale:this.settings().locale,calendar:this.adapter(),weekStartsOn:this.settings().weekStartsOn});if(r.value)return this.modeInfo().period===`week`?$r$1(r.value,`week`,this.settings().weekStartsOn).start:r.value}let e={locale:this.settings().locale,calendar:this.adapter()};if(this.modeInfo().period===`week`){let r=n.split(this.settings().rangeSeparator),o=r.length===2?sce(r[1].trim(),`dd MMM yyyy`,e).value:null,l=o?$r$1(o,`week`,this.settings().weekStartsOn).start:null;if(l&&this.formatEndpoint(l)===n.trim())return l}let t=this.parseFormats().length?this.parseFormats():this.modeInfo().period?[this.patternForMode(this.modeInfo().period),this.settings().dateFormat]:[this.settings().dateFormat,`yyyy-MM-dd`];for(let r of t){let o=sce(n,r,e);if(o.value)return this.modeInfo().period===`week`?$r$1(o.value,`week`,this.settings().weekStartsOn).start:o.value}return null}async runResolver(n){let e=this.resolver();if(!e||this.availability())return;let t=++this.resolverToken,r=`${n.calendar}|${n.locale}|${n.timeZone}`;r!==this.resolverContext&&this.availabilityState.set(void 0),this.resolverContext=r,this.availabilityState.set({dates:this.availabilityState()?.dates??[],loading:!0,revision:n.revision});try{let o=await e(n);if(t!==this.resolverToken)return;this.availabilityState.set({dates:Eo(this.availabilityState()?.dates,o?.dates??[],n),loading:!1,revision:n.revision,retryable:!0})}catch{if(t!==this.resolverToken)return;this.availabilityState.set({dates:this.availabilityState()?.dates??[],loading:!1,error:this.loadErrorMessage(),retryable:!0,revision:n.revision})}}static ɵfac=function(e){return new(e||i)};static ɵcmp=G({type:i,selectors:[[`bx-date-picker`]],viewQuery:function(e,t){e&1&&Xt(t.panelTemplate,Wd,5),e&2&&ft()},inputs:{mode:[1,`mode`],pickerIcon:[1,`pickerIcon`],openPickerLabel:[1,`openPickerLabel`],startAt:[1,`startAt`],startView:[1,`startView`],parseFormats:[1,`parseFormats`],locale:[1,`locale`],calendarId:[1,`calendarId`],timeZone:[1,`timeZone`],weekStartsOn:[1,`weekStartsOn`],minimalDaysInFirstWeek:[1,`minimalDaysInFirstWeek`],dateFormat:[1,`dateFormat`],allowNaturalLanguage:[1,`allowNaturalLanguage`],editable:[1,`editable`],presentation:[1,`presentation`],weekdayNameFormat:[1,`weekdayNameFormat`],monthNameFormat:[1,`monthNameFormat`],months:[1,`months`],separateFields:[1,`separateFields`],commitPolicy:[1,`commitPolicy`],closeOnSelect:[1,`closeOnSelect`],clearable:[1,`clearable`],presets:[1,`presets`],presetsPlacement:[1,`presetsPlacement`],min:[1,`min`],max:[1,`max`],disabledDates:[1,`disabledDates`],disabledIntervals:[1,`disabledIntervals`],disabledWeekdays:[1,`disabledWeekdays`],dateFilter:[1,`dateFilter`],crossingPolicy:[1,`crossingPolicy`],minRangeLength:[1,`minRangeLength`],maxRangeLength:[1,`maxRangeLength`],allowSameDay:[1,`allowSameDay`],selectionLimit:[1,`selectionLimit`],availability:[1,`availability`],resolver:[1,`resolver`],loadingLabel:[1,`loadingLabel`],retryLabel:[1,`retryLabel`],loadErrorMessage:[1,`loadErrorMessage`],invalidSelectionLabel:[1,`invalidSelectionLabel`],applyLabel:[1,`applyLabel`],cancelLabel:[1,`cancelLabel`],clearLabel:[1,`clearLabel`],todayLabel:[1,`todayLabel`],presetsLabel:[1,`presetsLabel`],showToday:[1,`showToday`],showTodayButton:[1,`showTodayButton`],startLabel:[1,`startLabel`],endLabel:[1,`endLabel`],moreDatesLabel:[1,`moreDatesLabel`],selectedDatesLabel:[1,`selectedDatesLabel`],clearTooltip:[1,`clearTooltip`],visibleTagCount:[1,`visibleTagCount`],tagConfig:[1,`tagConfig`],overflowTagConfig:[1,`overflowTagConfig`],dayTemplate:[1,`dayTemplate`]},outputs:{viewChange:`viewChange`,monthSelected:`monthSelected`,yearSelected:`yearSelected`,valueCommit:`valueCommit`,draftChange:`draftChange`,openChange:`openChange`,visibleRangeChange:`visibleRangeChange`,request:`request`,retry:`retry`,parseFailed:`parseFailed`},features:[Cn$1],ngContentSelectors:$d,decls:14,vars:21,consts:[[`retryAction`,``],[`panelTemplate`,``],[`trigger`,``],[3,`control`,`inline`,`tooltip`,`showLoadingIndicator`,`hint`,`hintEnd`,`error`,`subscriptSizing`,`forId`],[1,`bx-date-field`,3,`focusin`,`focusout`],[`role`,`group`,1,`bx-date-range-fields`],[`bxSurface`,``,1,`bx-date-trigger`,`is-editable`,`is-range`,3,`has-label`,`is-open`,`is-floating`,`is-invalid`,`is-outline`,`is-readonly`,`is-disabled`,`is-keyboard-focused`],[`bxSurface`,``,1,`bx-date-trigger`,`is-editable`,3,`has-label`,`is-open`,`is-floating`,`is-invalid`,`is-outline`,`is-readonly`,`is-disabled`,`is-keyboard-focused`],[`type`,`button`,`bxSurface`,``,1,`bx-date-trigger`,3,`has-label`,`is-open`,`is-floating`,`is-invalid`,`is-outline`,`is-readonly`,`is-disabled`,`is-keyboard-focused`,`id`,`disabled`],[`bx-button`,``,`type`,`button`,`variant`,`text`,1,`bx-date-clear`,3,`surfaceEffects`,`disabled`,`bxTooltip`],[3,`dismiss`,`panelId`,`panelWidth`,`open`,`presentation`,`origin`,`content`,`ariaLabel`,`panelClass`],[`bxSurface`,``,1,`bx-date-trigger`,`is-range-endpoint`,`has-label`,3,`is-open`,`is-floating`,`is-invalid`,`is-outline`,`is-readonly`,`is-disabled`,`is-keyboard-focused`],[`bxSurface`,``,1,`bx-date-trigger`,`is-range-endpoint`,`has-label`],[1,`bx-floating-label`],[`aria-hidden`,`true`,1,`bx-field-required`],[`role`,`combobox`,`aria-autocomplete`,`none`,`aria-haspopup`,`dialog`,`type`,`text`,`autocomplete`,`off`,1,`bx-date-input`,3,`id`,`value`,`disabled`,`readOnly`],[`type`,`button`,`aria-haspopup`,`dialog`,1,`bx-date-endpoint-value`,`bx-date-value`,3,`id`,`disabled`],[`type`,`button`,1,`bx-date-trigger-icon-button`,3,`click`,`disabled`],[`size`,`16`,3,`name`,`decorative`],[`role`,`combobox`,`aria-autocomplete`,`none`,`aria-haspopup`,`dialog`,`type`,`text`,`autocomplete`,`off`,1,`bx-date-input`,3,`input`,`blur`,`keydown`,`keydown.escape`,`id`,`value`,`disabled`,`readOnly`],[`type`,`button`,`aria-haspopup`,`dialog`,1,`bx-date-endpoint-value`,`bx-date-value`,3,`click`,`keydown.escape`,`id`,`disabled`],[`bxSurface`,``,1,`bx-date-trigger`,`is-editable`,`is-range`],[`role`,`combobox`,`aria-autocomplete`,`none`,`type`,`text`,`autocomplete`,`off`,1,`bx-date-input`,3,`input`,`blur`,`keydown`,`keydown.escape`,`value`,`id`,`disabled`,`readOnly`],[`aria-hidden`,`true`,1,`bx-date-range-separator`],[`role`,`combobox`,`aria-autocomplete`,`none`,`type`,`text`,`autocomplete`,`off`,1,`bx-date-input`,3,`input`,`blur`,`keydown`,`keydown.escape`,`value`,`disabled`,`readOnly`],[1,`bx-date-trigger-icon`,3,`size`,`decorative`],[`type`,`button`,1,`bx-date-trigger-icon-button`,3,`disabled`],[`bxSurface`,``,1,`bx-date-trigger`,`is-editable`],[`role`,`combobox`,`aria-autocomplete`,`none`,`type`,`text`,`autocomplete`,`off`,1,`bx-date-input`,3,`input`,`blur`,`keydown`,`keydown.escape`,`id`,`value`,`disabled`,`readOnly`],[`type`,`button`,`bxSurface`,``,1,`bx-date-trigger`,3,`click`,`keydown.arrowdown`,`keydown.escape`,`blur`,`id`,`disabled`],[1,`bx-date-value`],[1,`bx-selected-tags`],[`bxTruncate`,``,3,`bxTooltip`],[`size`,`16`,1,`bx-date-trigger-icon`,3,`name`,`decorative`],[3,`text`,`config`,`focusable`,`tooltipOnTruncate`],[1,`bx-overflow-tag`,3,`text`,`config`,`tooltip`,`focusable`,`tooltipOnTruncate`],[`bx-button`,``,`type`,`button`,`variant`,`text`,1,`bx-date-clear`,3,`click`,`surfaceEffects`,`disabled`,`bxTooltip`],[`name`,`x`,`size`,`16`,3,`decorative`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`accent`,3,`click`],[`name`,`rotate-cw`,`size`,`16`,3,`decorative`],[`bxSurface`,``,`data-bx-surface`,`glass`,1,`bx-date-panel-content`,3,`bxSurfaceInteractive`],[1,`bx-date-panel-body`],[1,`bx-date-presets`],[1,`bx-date-calendar-column`],[3,`visibleRangeChange`,`viewChange`,`monthSelected`,`yearSelected`,`rangeStart`,`valueChange`,`selectionRejected`,`requestAvailability`,`retryAvailability`,`startView`,`mode`,`value`,`viewDate`,`months`,`retryTemplate`,`weekdayNameFormat`,`monthNameFormat`,`locale`,`calendarId`,`timeZone`,`weekStartsOn`,`minimalDaysInFirstWeek`,`min`,`max`,`disabledDates`,`disabledIntervals`,`disabledWeekdays`,`dateFilter`,`crossingPolicy`,`minRangeLength`,`maxRangeLength`,`allowSameDay`,`selectionLimit`,`readOnly`,`availability`,`dayTemplate`,`showToday`,`showTodayButton`,`todayLabel`,`loadingLabel`,`retryLabel`],[3,`presetSelect`,`presets`,`context`,`activeValue`,`horizontal`,`ariaLabel`]],template:function(e,t){if(e&1&&(Ae(jd),_(0,`bx-form-field`,3)(1,`div`,4),te(`focusin`,function(){return t.onFieldFocus()})(`focusout`,function(o){return t.onFieldBlur(o)}),j(2,Jd,3,2,`div`,5)(3,rc,8,46,`div`,6)(4,dc,5,32,`div`,7)(5,xc,8,33,`button`,8),j(6,vc,2,5,`button`,9),D(),_(7,`bx-picker-surface`,10),te(`dismiss`,function(){return t.cancel()}),D(),Pa$1(8,yc,3,2,`ng-template`,null,0,kr)(10,Cc,6,37,`ng-template`,null,1,kr),pe(12,0,Kd),pe(13,1,Zd),D()),e&2){let r=Tt$1(11);R(`control`,t.fieldControl)(`inline`,!0)(`tooltip`,t.tooltip())(`showLoadingIndicator`,!1)(`hint`,t.hint())(`hintEnd`,t.hintEnd())(`error`,t.parseError()?t.resolvedInvalidLabel():t.error())(`subscriptSizing`,t.resolvedSubscriptSizing())(`forId`,t.controlId()),y(),ae(`has-clear`,t.showClear()),y(),F(t.rangeFieldLayout()===`separate`?2:t.editable()&&t.isRangeMode()&&!t.modeInfo().isPeriod?3:t.editable()&&!t.isRangeMode()&&t.mode()!==`multiple`?4:5),y(4),F(t.showClear()?6:-1),y(),R(`panelId`,t.controlId()+`-panel`)(`panelWidth`,t.panelWidth())(`open`,t.isOpen())(`presentation`,t.surfacePresentation())(`origin`,t.panelOrigin())(`content`,r)(`ariaLabel`,t.resolvedLabel()||t.resolvedDatePlaceholder())(`panelClass`,t.panelClass())}},dependencies:[Rt$1,me,PT,Vt,U,Vt$1,Ml,Dn,sT,qi,_o$1],styles:[`
[_nghost-%COMP%] {
  display: block;
  inline-size: 100%;
}
.bx-date-field[_ngcontent-%COMP%] {
  position: relative;
  display: flex;
  align-items: stretch;
  inline-size: 100%;
  min-inline-size: 0;
}
.bx-date-trigger[_ngcontent-%COMP%] {
  position: relative;
  display: flex;
  align-items: center;
  gap: var(--%NS%bx-space-2, 0.5rem);
  inline-size: 100%;
  min-inline-size: 0;
  min-block-size: 3.85rem;
  box-sizing: border-box;
  padding: 0;
  padding-inline-end: var(--%NS%bx-space-3, 0.75rem);
  border: 0;
  border-bottom: var(--%NS%bx-border-width, 1px) var(--%NS%bx-border-style, solid) var(--%NS%bx-border-strong);
  border-radius: var(--%NS%bx-rounded-sm, 0.25rem) var(--%NS%bx-rounded-sm, 0.25rem) 0 0;
  background-color: var(--%NS%bx-bg-neutral);
  color: var(--%NS%bx-text-heading);
  font: inherit;
  font-size: 1rem;
  text-align: start;
  cursor: pointer;
  outline: none;
}
.bx-date-trigger[_ngcontent-%COMP%]:hover:not(:disabled, .is-readonly) {
  background-color: var(--%NS%bx-bg-neutral-hover);
}
.bx-date-trigger[_ngcontent-%COMP%]:disabled {
  background-color: var(--%NS%bx-bg-element);
  opacity: 0.7;
  border-bottom-style: dotted;
  cursor: not-allowed;
}
.bx-date-trigger.is-readonly[_ngcontent-%COMP%] {
  cursor: default;
}
.bx-date-trigger[_ngcontent-%COMP%]::after {
  content: "";
  position: absolute;
  inset-inline: 0;
  inset-block-end: -1px;
  block-size: 2px;
  background-color: var(--%NS%bx-primary);
  transform: scaleX(0);
  transform-origin: center;
  transition: transform 0.2s linear(0, 0.18 12%, 0.58 32%, 0.87 56%, 0.98 78%, 1);
  z-index: 2;
}
.bx-date-trigger[_ngcontent-%COMP%]:focus-within:not(.is-disabled, .is-readonly)::after, 
.bx-date-trigger.is-open[_ngcontent-%COMP%]::after, 
.bx-date-trigger[_ngcontent-%COMP%]:focus-visible:not(:disabled)::after {
  transform: scaleX(1);
}
.bx-date-trigger.is-invalid[_ngcontent-%COMP%] {
  border-bottom-color: var(--%NS%bx-border-danger);
}
.bx-date-trigger.is-invalid[_ngcontent-%COMP%]::after {
  background-color: var(--%NS%bx-border-danger);
  transform: scaleX(1);
}
.bx-date-trigger.is-outline[_ngcontent-%COMP%] {
  border: var(--%NS%bx-border-width, 1px) var(--%NS%bx-border-style, solid) var(--%NS%bx-border-default);
  border-radius: var(--%NS%bx-rounded-md, 0.5rem);
  background-color: transparent;
}
.bx-date-trigger.is-range-endpoint[_ngcontent-%COMP%] {
  min-inline-size: 0;
  flex: 1 1 0;
}
.bx-date-trigger[data-bx-surface][_ngcontent-%COMP%] {
  --%NS%bx-glass-surface: var(--%NS%bx-bg-neutral);
  --%NS%bx-glass-min-opacity: 0.45;
  --%NS%bx-glass-edge: var(--%NS%bx-border-default);
  --%NS%bx-glass-shadow: none;
  border: var(--%NS%bx-border-width, 1px) var(--%NS%bx-border-style, solid) var(--%NS%bx-glass-edge);
  border-radius: var(--%NS%bx-rounded-lg, 0.75rem);
}
.bx-date-trigger[data-bx-surface][_ngcontent-%COMP%]::after {
  display: none;
}
.bx-date-trigger[data-bx-surface][_ngcontent-%COMP%]:focus-within:not(.is-disabled, :disabled, .is-readonly, [readonly], [aria-readonly=true], :has([readonly], [aria-readonly=true])), 
.bx-date-trigger[data-bx-surface][_ngcontent-%COMP%]:focus-visible:not(:disabled, [readonly], [aria-readonly=true]), 
.bx-date-trigger[data-bx-surface].is-open[_ngcontent-%COMP%]:not(:disabled), 
.bx-date-trigger[data-bx-surface].is-readonly.is-keyboard-focused[_ngcontent-%COMP%]:focus-within, 
.bx-date-trigger[data-bx-surface][_ngcontent-%COMP%]:has(.bx-readonly.is-keyboard-focused):focus-within {
  --%NS%bx-glass-edge: var(--%NS%bx-border-brand);
  outline: 2px solid var(--%NS%bx-border-brand);
  outline-offset: -2px;
  --%NS%bx-glass-shadow: none;
}
.bx-date-trigger[data-bx-surface].is-open[_ngcontent-%COMP%]:not(:disabled) {
  outline: none;
}
.bx-date-trigger[data-bx-surface].is-readonly[_ngcontent-%COMP%] {
  border-bottom-style: dashed;
  color: var(--%NS%bx-text-secondary);
}
.bx-date-trigger[data-bx-surface].is-disabled[_ngcontent-%COMP%] {
  background-color: var(--%NS%bx-bg-element);
  opacity: 0.7;
  border-bottom-style: dotted;
  cursor: not-allowed;
}
.bx-date-trigger[data-bx-surface].is-invalid[_ngcontent-%COMP%] {
  --%NS%bx-glass-surface: var(--%NS%bx-bg-neutral);
  --%NS%bx-glass-min-opacity: 0.45;
  --%NS%bx-glass-edge: color-mix(in srgb, var(--%NS%bx-text-danger) 40%, var(--%NS%bx-border-default));
  border-block-end-color: var(--%NS%bx-glass-edge);
  --%NS%bx-glass-shadow: 0 8px 18px -10px color-mix(in srgb, var(--%NS%bx-text-danger) 65%, transparent);
  outline-color: var(--%NS%bx-border-danger);
}
.bx-date-value[_ngcontent-%COMP%] {
  block-size: 3.85rem;
  flex: 1;
  min-inline-size: 0;
  box-sizing: border-box;
  padding: var(--%NS%bx-space-6, 1.5rem) 0 var(--%NS%bx-space-2, 0.5rem) var(--%NS%bx-space-3, 0.75rem);
  min-block-size: 3.85rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: 1.4;
}
.bx-date-value.is-placeholder[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-secondary);
}
.bx-date-trigger-icon[_ngcontent-%COMP%] {
  flex-shrink: 0;
  color: var(--%NS%bx-text-secondary);
}
.bx-date-trigger-icon-button[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  inline-size: var(--%NS%bx-space-6, 1.5rem);
  block-size: var(--%NS%bx-space-6, 1.5rem);
  padding: 0;
  border: 0;
  border-radius: var(--%NS%bx-rounded-sm, 0.25rem);
  background: transparent;
  color: var(--%NS%bx-text-secondary);
  cursor: pointer;
}
.bx-date-trigger-icon-button[_ngcontent-%COMP%]:hover:not(:disabled) {
  color: var(--%NS%bx-text-primary);
  background: var(--%NS%bx-bg-element-hover);
}
.bx-date-trigger-icon-button[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--%NS%bx-border-brand);
  outline-offset: 0;
}
.bx-date-trigger-icon-button[_ngcontent-%COMP%]:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}
.bx-floating-label[_ngcontent-%COMP%] {
  position: absolute;
  inset-inline: var(--%NS%bx-space-3, 0.75rem) var(--%NS%bx-space-10, 2.5rem);
  inset-block-start: 50%;
  display: flex;
  align-items: baseline;
  min-inline-size: 0;
  transform: translateY(-50%);
  font-size: 1rem;
  color: var(--%NS%bx-text-secondary);
  pointer-events: none;
  z-index: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  transition:
    inset-block-start 0.2s linear(0, 0.18 12%, 0.58 32%, 0.87 56%, 0.98 78%, 1),
    transform 0.2s linear(0, 0.18 12%, 0.58 32%, 0.87 56%, 0.98 78%, 1),
    font-size 0.2s linear(0, 0.18 12%, 0.58 32%, 0.87 56%, 0.98 78%, 1),
    color 0.15s ease;
}
.bx-date-trigger.is-floating[_ngcontent-%COMP%]   .bx-floating-label[_ngcontent-%COMP%] {
  inset-block-start: var(--%NS%bx-space-2, 0.5rem);
  transform: translateY(0);
  font-size: 0.75rem;
  font-weight: 500;
}
.bx-date-trigger[_ngcontent-%COMP%]:focus-within:not(.is-readonly, .is-disabled)   .bx-floating-label[_ngcontent-%COMP%], 
.bx-date-trigger.is-open[_ngcontent-%COMP%]   .bx-floating-label[_ngcontent-%COMP%] {
  color: var(--%NS%bx-primary);
}
.bx-date-trigger.is-invalid[_ngcontent-%COMP%]   .bx-floating-label[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-danger);
}
@media (prefers-reduced-motion: reduce) {
  .bx-floating-label[_ngcontent-%COMP%] {
    transition: none;
  }
}
.bx-field-required[_ngcontent-%COMP%] {
  margin-inline-start: 0.125rem;
  color: var(--%NS%bx-text-secondary);
}
.bx-date-input[_ngcontent-%COMP%] {
  flex: 1 1 0;
  inline-size: 0;
  min-inline-size: 0;
  box-sizing: border-box;
  padding: var(--%NS%bx-space-6, 1.5rem) 0 var(--%NS%bx-space-2, 0.5rem) var(--%NS%bx-space-3, 0.75rem);
  min-block-size: 3.85rem;
  border: 0;
  background: transparent;
  color: inherit;
  font: inherit;
  outline: none;
}
.bx-date-input[_ngcontent-%COMP%]::placeholder {
  color: var(--%NS%bx-text-secondary);
}
.bx-date-field.has-clear[_ngcontent-%COMP%]   .bx-date-input[_ngcontent-%COMP%], 
.bx-date-field.has-clear[_ngcontent-%COMP%]   .bx-date-value[_ngcontent-%COMP%] {
  padding-inline-end: var(--%NS%bx-space-8, 2rem);
}
.bx-date-clear.bx-btn[_ngcontent-%COMP%] {
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
.bx-date-clear.bx-btn[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--%NS%bx-border-brand);
  outline-offset: 0;
}
.bx-date-clear.bx-btn[_ngcontent-%COMP%]:hover:not(:disabled) {
  color: var(--%NS%bx-text-primary);
  background: var(--%NS%bx-bg-element-hover);
}
.bx-date-clear.bx-btn[_ngcontent-%COMP%]:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}
.bx-date-clear.bx-btn[_ngcontent-%COMP%] {
  position: absolute;
  inset-block-start: 50%;
  inset-inline-end: calc(1px + var(--%NS%bx-space-3, 0.75rem) + var(--%NS%bx-space-4, 1rem) + var(--%NS%bx-space-2, 0.5rem));
  transform: translateY(-50%);
  z-index: 3;
}
.bx-date-range-fields[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: var(--%NS%bx-space-1, 0.25rem);
  inline-size: 100%;
  min-inline-size: 0;
}
.bx-date-range-separator[_ngcontent-%COMP%] {
  flex-shrink: 0;
  color: var(--%NS%bx-text-secondary);
}
.bx-date-trigger.is-editable.is-range[_ngcontent-%COMP%]   .bx-date-input[_ngcontent-%COMP%] {
  flex: 1 1 0;
  min-inline-size: 0;
}
.bx-date-trigger.is-editable.is-range[_ngcontent-%COMP%]   .bx-date-range-separator[_ngcontent-%COMP%] {
  padding-inline: var(--%NS%bx-space-1, 0.25rem);
}
.bx-date-trigger.is-editable.is-range[_ngcontent-%COMP%]   .bx-date-input[_ngcontent-%COMP%]:nth-of-type(2) {
  padding-inline-start: var(--%NS%bx-space-1, 0.25rem);
}
.bx-date-panel[_ngcontent-%COMP%] {
  display: block;
  inline-size: min(94vw, 44rem);
  max-inline-size: 100%;
  box-sizing: border-box;
  border-radius: var(--%NS%bx-rounded-lg, 0.75rem);
}
.bx-date-panel.is-drawer[_ngcontent-%COMP%] {
  inline-size: 100%;
}
.bx-date-panel-content[data-bx-surface][_ngcontent-%COMP%] {
  --%NS%bx-glass-min-opacity: var(--%NS%bx-dropdown-min-opacity, 0);
  --%NS%bx-glass-opacity: var(--%NS%bx-dropdown-opacity, min(1, var(--%NS%bx-glass-material-opacity, 0.5) + 0.18));
  --%NS%bx-glass-radius: var(--%NS%bx-rounded-lg, 0.75rem);
  --%NS%bx-glass-surface: var(--%NS%bx-bg-surface);
  --%NS%bx-glass-text: var(--%NS%bx-text-primary);
  --%NS%bx-glass-edge: var(--%NS%bx-border-default);
  --%NS%bx-glass-shadow: var(--%NS%bx-shadow-md, 0 4px 8px -1px rgba(0, 0, 0, 0.15), 0 2px 4px -2px rgba(0, 0, 0, 0.12));
}
.bx-date-panel-content[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  inline-size: 100%;
  box-sizing: border-box;
  background: var(--%NS%bx-glass-surface, var(--%NS%bx-bg-surface));
  border: var(--%NS%bx-border-width, 1px) var(--%NS%bx-border-style, solid) var(--%NS%bx-glass-edge, var(--%NS%bx-border-default));
  border-radius: var(--%NS%bx-rounded-lg, 0.75rem);
  box-shadow: var(--%NS%bx-shadow-sm, 0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1));
  overflow: hidden;
  max-block-size: min(86dvh, 48rem);
}
.bx-date-panel-content.is-drawer[_ngcontent-%COMP%] {
  --%NS%bx-glass-surface: transparent;
  --%NS%bx-glass-opaque-surface: transparent;
  --%NS%bx-glass-shadow: none;
  --%NS%bx-glass-rim-visibility: 0;
  --%NS%bx-glass-decoration-opacity: 0;
  border: 0;
  border-radius: 0;
  box-shadow: none;
  background: transparent;
  max-block-size: min(82dvh, 44rem);
}
.bx-date-panel-body[_ngcontent-%COMP%] {
  display: flex;
  align-items: stretch;
  gap: var(--%NS%bx-space-2, 0.5rem);
  padding: var(--%NS%bx-space-3, 0.75rem);
  flex: 1 1 auto;
  min-block-size: 0;
  overflow: hidden;
}
.bx-date-presets[_ngcontent-%COMP%] {
  contain: size;
  display: flex;
  flex-direction: column;
  gap: var(--%NS%bx-space-1, 0.25rem);
  inline-size: 11.5rem;
  flex-shrink: 0;
  border-inline-end: var(--%NS%bx-border-width, 1px) var(--%NS%bx-border-style, solid) var(--%NS%bx-border-subtle);
  padding-inline-end: var(--%NS%bx-space-2, 0.5rem);
  min-block-size: 0;
  max-block-size: 100%;
  overflow: hidden;
}
.bx-date-calendar-column[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: var(--%NS%bx-space-2, 0.5rem);
  flex: 1;
  min-inline-size: 0;
  min-block-size: 0;
  overflow-y: auto;
  overscroll-behavior: contain;
}
@media (max-width: 768px) {
  .bx-date-panel-body[_ngcontent-%COMP%] {
    flex-direction: column;
    padding: var(--%NS%bx-space-2, 0.5rem);
    overflow-y: auto;
  }
  .bx-date-presets[_ngcontent-%COMP%] {
    contain: none;
    inline-size: 100%;
    max-block-size: none;
    overflow: visible;
    border-inline-end: 0;
    border-block-end: var(--%NS%bx-border-width, 1px) var(--%NS%bx-border-style, solid) var(--%NS%bx-border-subtle);
    padding-inline-end: 0;
    padding-block-end: var(--%NS%bx-space-2, 0.5rem);
  }
  .bx-date-calendar-column[_ngcontent-%COMP%] {
    overflow: visible;
  }
}
.bx-date-trigger[_ngcontent-%COMP%]:not(.has-label)   .bx-date-value[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  padding-block: var(--%NS%bx-space-3, 0.75rem);
}
.bx-date-trigger[_ngcontent-%COMP%]:disabled, 
.bx-date-trigger.is-disabled[_ngcontent-%COMP%] {
  pointer-events: none;
}
.bx-date-trigger[_ngcontent-%COMP%]:not(.has-label)   .bx-date-input[_ngcontent-%COMP%] {
  padding-block: var(--%NS%bx-space-3, 0.75rem);
}
.bx-date-range-separator.is-concealed[_ngcontent-%COMP%] {
  visibility: hidden;
}
.bx-selected-tags[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: var(--%NS%bx-space-1, 0.25rem);
  max-inline-size: 100%;
  min-inline-size: 0;
  overflow: hidden;
}
.bx-selected-tags[_ngcontent-%COMP%]   bx-tag[_ngcontent-%COMP%] {
  flex: 0 1 auto;
  min-inline-size: 0;
  max-inline-size: 100%;
}
.bx-selected-tags[_ngcontent-%COMP%]   .bx-overflow-tag[_ngcontent-%COMP%] {
  flex: 0 0 auto;
}
.bx-date-panel-footer[_ngcontent-%COMP%] {
  display: flex;
  justify-content: flex-end;
  padding: var(--%NS%bx-space-2, 0.5rem) var(--%NS%bx-space-3, 0.75rem);
  border-block-start: 1px solid var(--%NS%bx-border-subtle);
  flex-shrink: 0;
}
.bx-date-endpoint-value[_ngcontent-%COMP%] {
  border: 0;
  background: transparent;
  color: inherit;
  font: inherit;
  text-align: start;
  cursor: inherit;
}
.bx-date-range-fields[_ngcontent-%COMP%]   .bx-date-trigger-icon-button[_ngcontent-%COMP%] {
  margin-inline-end: var(--%NS%bx-space-1, 0.25rem);
}`]})};var Lo={timeFormat:({params:i})=>`Enter a time in the ${i.format} format.`,timeRange:({params:i})=>i.hourCycle===12?`Use an hour from 1 to 12 with AM or PM, and minutes and seconds from 00 to 59.`:`Use an hour from 00 to 23, and minutes and seconds from 00 to 59.`,timeMin:({params:i})=>`The time cannot be before ${i.minFormatted}.`,timeMax:({params:i})=>`The time cannot be after ${i.maxFormatted}.`,timeDisabled:`This time is unavailable. Choose another time.`,timeAvailability:`This time has not been confirmed as available. Retry loading the available times.`,timeLoading:`Wait for the available times to finish loading.`,timeStep:({params:i})=>`Use increments of ${i.minuteStep} minutes, ${i.secondStep} seconds and ${i.millisecondStep} milliseconds.`};function Xn(i){return String(i).padStart(2,`0`)}function Ao(i){let n=i<0?`-`:`+`,e=Math.abs(i);return`GMT${n}${Xn(Math.floor(e/60))}:${Xn(e%60)}`}function Fo(i,n){let e=Math.max(1,n)*60;if(i===void 0)return e;if(typeof i==`number`)return Number.isFinite(i)&&i>0?i*60:e;let t=/^\s*(\d+(?:\.\d+)?)\s*(h|hours?|m|mins?|minutes?|s|seconds?)?\s*$/i.exec(i);if(!t||Number(t[1])<=0)return e;let r=t[2]?.toLowerCase()??`m`,o=r.startsWith(`h`)?3600:r.startsWith(`s`)?1:60;return Number(t[1])*o}var Mc=[`listViewport`];var Nc=[`collection`];var Tc=[`panelTemplate`];var wc=[[[`bx-error`]],[[`bx-hint`]]];var Oc=[`bx-error`,`bx-hint`];var kc=[`ngProjectAs`,`bx-error`,5,[`bx-error`]];var Pc=[`ngProjectAs`,`bx-hint`,5,[`bx-hint`]];function Dc(i,n){i&1&&(_(0,`span`,12),X(1,`*`),D())}function Ic(i,n){if(i&1&&(_(0,`label`,6),X(1),j(2,Dc,2,0,`span`,12),D()),i&2){let e=w();B(`for`,e.controlId()),y(),un(``,e.resolvedLabel(),` `),y(),F(e.effectiveRequired()&&!e.resolvedHideRequiredMarker()?2:-1)}}function Ec(i,n){i&1&&xe(0,`bx-loading-spinner`,8),i&2&&R(`size`,16)(`decorative`,!0)}function Rc(i,n){if(i&1){let e=wt$1();_(0,`button`,13),te(`click`,function(r){Be(e);let o=w();return Ve$1(o.onTriggerClick(r))}),xe(1,`bx-icon`,14),D()}if(i&2){let e=w();R(`disabled`,e.effectiveDisabled()||e.isReadonly()),B(`aria-label`,e.resolvedOpenPickerLabel()),y(),R(`name`,e.pickerIcon())(`decorative`,!0)}}function Lc(i,n){if(i&1){let e=wt$1();_(0,`button`,15),te(`click`,function(){Be(e);let r=w();return Ve$1(r.clear())}),xe(1,`bx-icon`,16),D()}if(i&2){let e=w();R(`surfaceEffects`,!1)(`disabled`,e.effectiveDisabled())(`bxTooltip`,e.resolvedClearTooltip()),B(`aria-label`,e.resolvedClearLabel()),y(),R(`decorative`,!0)}}function Ac(i,n){if(i&1){let e=wt$1();_(0,`span`,27),X(1,`:`),D(),_(2,`bx-time-wheel`,30),te(`valueChange`,function(r){Be(e);let o=w(3);return Ve$1(o.onWheelChange(`second`,r))}),D()}if(i&2){let e=w(3);y(2),R(`options`,e.wheelColumns().seconds)(`value`,e.wheelValue(`second`))(`label`,e.resolvedSecondLabel())(`loop`,e.loopColumns())}}function Fc(i,n){if(i&1){let e=wt$1();_(0,`span`,27),X(1,`.`),D(),_(2,`bx-time-wheel`,31),te(`valueChange`,function(r){Be(e);let o=w(3);return Ve$1(o.onWheelChange(`millisecond`,r))}),D()}if(i&2){let e=w(3);y(2),R(`options`,e.wheelColumns().milliseconds)(`value`,e.wheelValue(`millisecond`))(`label`,e.resolvedMillisecondLabel())(`loop`,e.loopColumns())}}function Vc(i,n){if(i&1){let e=wt$1();_(0,`bx-time-wheel`,32),te(`valueChange`,function(r){Be(e);let o=w(3);return Ve$1(o.onWheelChange(`period`,r))}),D()}if(i&2){let e=w(3);R(`options`,e.wheelColumns().periods)(`value`,e.wheelValue(`period`))(`label`,e.resolvedPeriodLabel())(`loop`,!1)}}function zc(i,n){if(i&1){let e=wt$1();_(0,`div`,21)(1,`bx-time-wheel`,26),te(`valueChange`,function(r){Be(e);let o=w(2);return Ve$1(o.onWheelChange(`hour`,r))}),D(),_(2,`span`,27),X(3,`:`),D(),_(4,`bx-time-wheel`,28),te(`valueChange`,function(r){Be(e);let o=w(2);return Ve$1(o.onWheelChange(`minute`,r))}),D(),j(5,Ac,3,4),j(6,Fc,3,4),j(7,Vc,1,4,`bx-time-wheel`,29),D()}if(i&2){let e=w(2);y(),R(`options`,e.wheelColumns().hours)(`value`,e.wheelValue(`hour`))(`label`,e.resolvedHourLabel())(`loop`,e.loopColumns()),y(3),R(`options`,e.wheelColumns().minutes)(`value`,e.wheelValue(`minute`))(`label`,e.resolvedMinuteLabel())(`loop`,e.loopColumns()),y(),F(e.showSeconds()?5:-1),y(),F(e.showMilliseconds()?6:-1),y(),F(e.showPeriod()?7:-1)}}function Bc(i,n){i&1&&xe(0,`bx-icon`,37),i&2&&R(`decorative`,!0)}function qc(i,n){if(i&1){let e=wt$1();_(0,`button`,36),te(`click`,function(){let r=Be(e).$implicit,o=w(3);return Ve$1(o.onListSelect(r.value))}),_(1,`span`),X(2),D(),j(3,Bc,1,1,`bx-icon`,37),D()}if(i&2){let e=n.$implicit,t=n.index,r=n.count,o=w(3);ae(`is-selected`,o.internalValue()===e.value)(`is-active`,o.listFocusValue()===e.value),R(`id`,o.controlId()+`-`+e.value)(`disabled`,e.disabled),B(`aria-posinset`,t+1)(`aria-setsize`,r)(`aria-selected`,o.internalValue()===e.value)(`aria-disabled`,e.disabled)(`data-time-value`,e.value),y(2),fe(e.label),y(),F(o.internalValue()===e.value?3:-1)}}function Hc(i,n){if(i&1){let e=wt$1();_(0,`div`,33,1),te(`keydown`,function(r){Be(e);let o=Tt$1(3),l=w(2);return Ve$1(l.onListKeydown(r,o))}),_(2,`bx-virtual-collection`,34,2),Pa$1(4,qc,4,13,`ng-template`,35),D()()}if(i&2){let e=Tt$1(1),t=Tt$1(3),r=w(2);B(`aria-activedescendant`,r.listActiveId())(`aria-label`,r.resolvedLabel()||r.resolvedOpenPickerLabel()),y(2),R(`items`,r.listOptions())(`trackBy`,r.listTrackBy)(`config`,r.listConfig)(`scrollContainer`,e),B(`role`,`presentation`),y(2),R(`bxVirtualItem`,t)}}function Wc(i,n){if(i&1&&xe(0,`bx-loading-indicator`,38),i&2){let e=w(3);R(`size`,20)(`label`,e.resolvedLoadingLabel())}}function jc(i,n){if(i&1){let e=wt$1();_(0,`button`,42),te(`click`,function(){Be(e);let r=w(4);return Ve$1(r.retrySlots())}),xe(1,`bx-icon`,43),X(2),D()}if(i&2){let e=w(4);y(),R(`decorative`,!0),y(),un(``,e.resolvedRetryLabel(),` `)}}function $c(i,n){if(i&1&&(_(0,`div`,40),X(1),D(),j(2,jc,3,2,`button`,41)),i&2){let e=w(3);y(),fe(e.availabilityError()),y(),F(e.availabilityForPanel()?.retryable!==!1?2:-1)}}function Kc(i,n){if(i&1&&(_(0,`span`,39),X(1),D()),i&2){let e=w(3);y(),fe(e.resolvedEmptyLabel())}}function Zc(i,n){if(i&1&&(_(0,`div`,23),j(1,Wc,1,2,`bx-loading-indicator`,38)(2,$c,3,2)(3,Kc,2,1,`span`,39),D()),i&2){let e=w(2);y(),F(e.availabilityLoading()?1:e.availabilityError()?2:3)}}function Gc(i,n){if(i&1){let e=wt$1();_(0,`div`,24)(1,`button`,44),te(`click`,function(){Be(e);let r=w(2);return Ve$1(r.selectNow())}),X(2),D()()}if(i&2){let e=w(2);y(),R(`disabled`,!e.canSelectNow()),y(),fe(e.resolvedNowLabel())}}function Xc(i,n){if(i&1){let e=wt$1();_(0,`bx-select`,45),te(`valueChange`,function(r){Be(e);let o=w(2);return Ve$1(o.onTimeZoneSelect(r))}),D()}if(i&2){let e=w(2);R(`label`,e.resolvedTimeZoneLabel())(`options`,e.timeZoneOptions())(`value`,e.selectedTimeZone()??e.settings().timeZone)(`isSearchable`,!0)}}function Uc(i,n){if(i&1&&(_(0,`div`,17)(1,`div`,18)(2,`div`,19)(3,`div`,20),j(4,zc,8,11,`div`,21)(5,Hc,5,8,`div`,22),D(),j(6,Zc,4,1,`div`,23),D(),j(7,Gc,3,2,`div`,24),j(8,Xc,1,4,`bx-select`,25),D()()),i&2){let e=w();ae(`is-drawer`,e.isDrawer()),R(`bxSurfaceInteractive`,!1),y(2),B(`aria-busy`,e.availabilityLoading()),y(),B(`inert`,e.panelFeedback()?``:null)(`aria-hidden`,e.panelFeedback()?!0:null),y(),F(e.timePresentation()===`wheel`?4:5),y(2),F(e.panelFeedback()?6:-1),y(),F(e.resolvedNowLabel()?7:-1),y(),F(e.showTimeZone()?8:-1)}}var Vo=class i extends se{injector=f(Ie);bxA11yService=f(Le$1);ngZone=f(re);bxDateTimeConfigService=f(nb);clock=f(tb);i18n=f(Se$1,{optional:!0});windowDimensionsService=f(ol$1);originElement=M(null);availabilityState=M(void 0);selectedTimeZone=M(null);usesExternalAvailability=g(()=>this.availability()!==void 0);slotContext=g(()=>`${this.settings().locale}|${this.settings().timeZone}|${this.settings().precision}`);listViewport=Nt$1(`listViewport`);listCollection=Nt$1(`collection`);typedText=M(``);textEdited=M(!1);typedError=M(null);fieldFocused=M(!1);selectionEdited=M(!1);isOpen=M(!1);draftTime=M(`09:00`);listFocusValue=M(null);settings=g(()=>{let n=this.hourCycle();return this.bxDateTimeConfigService.resolve({locale:this.locale(),timeZone:this.selectedTimeZone()??this.timeZone()??void 0,hourCycle:n===`auto`?void 0:n,precision:this.precision(),minuteStep:this.minuteStep(),secondStep:this.secondStep(),millisecondStep:this.millisecondStep(),timeFormat:this.timeFormat(),showTimeZoneLabel:this.showTimeZone()})});surfacePresentation=g(()=>{let n=this.presentation();return n!==`auto`?n:this.windowDimensionsService.isMobile()?`drawer`:`popover`});isDrawer=g(()=>this.surfacePresentation()===`drawer`);displayValue=g(()=>this.formatValue(this.internalValue()));resolvedTimePlaceholder=g(()=>J(this.placeholder()??this.parseFormats()[0]??this.settings().timeFormat,this.i18n));resolvedOpenPickerLabel=g(()=>J(this.openPickerLabel(),this.i18n));resolvedClearTooltip=g(()=>J(this.clearTooltip()??this.clearLabel(),this.i18n));resolvedClearLabel=g(()=>J(this.clearLabel(),this.i18n));resolvedNowLabel=g(()=>J(this.nowLabel(),this.i18n));resolvedHourLabel=g(()=>J(this.hourLabel(),this.i18n));resolvedMinuteLabel=g(()=>J(this.minuteLabel(),this.i18n));resolvedSecondLabel=g(()=>J(this.secondLabel(),this.i18n));resolvedMillisecondLabel=g(()=>J(this.millisecondLabel(),this.i18n));resolvedPeriodLabel=g(()=>J(this.periodLabel(),this.i18n));resolvedTimeZoneLabel=g(()=>J(this.timeZoneLabel(),this.i18n));resolvedLoadingLabel=g(()=>J(this.loadingLabel(),this.i18n));resolvedRetryLabel=g(()=>J(this.retryLabel(),this.i18n));showClear=g(()=>this.clearable()&&(!!this.internalValue()||!!this.typedText())&&!this.isReadonly());isFloating=g(()=>this.fieldFocused()||this.keyboardFocused()||this.isOpen()||!!this.typedText()||!!this.displayValue()||this.resolvedFloatLabel()===`always`);timeZoneOptions=g(()=>xse().map(n=>({value:n,label:this.timeZoneLabelFor(n),description:vse(n,this.settings().locale).offsetMinutes===null?void 0:String(vse(n,this.settings().locale).offsetMinutes)})));availabilityForPanel=g(()=>this.availability()??(this.resolver()?this.availabilityState():void 0));availabilityLoading=g(()=>this.availabilityForPanel()?.loading===!0);availabilityError=g(()=>J(this.availabilityForPanel()?.error,this.i18n));availabilityTimes=g(()=>this.availabilityForPanel()?.times??null);panelFeedback=g(()=>this.availabilityLoading()||!!this.availabilityError()||this.availabilityTimes()?.length===0||this.isListMode()&&!this.listOptions().length);listConfig={layout:`list`,estimatedRowHeight:40,overscan:160};listTrackBy=n=>n.value;listOptions=g(()=>{let n=this.options();if(n)return n.map(E=>({value:E.value,label:J(E.label,this.i18n)||fse(E.value,this.settings().timeFormat,this.settings().locale),disabled:!!E.disabled||!this.isTimeAllowed(E.value)}));let e=this.settings().precision===`hour`?3600:this.settings().precision===`minute`?60:1,t=Math.max(e,Math.ceil(Fo(this.interval(),this.settings().minuteStep)/e)*e),r=this.min(),o=this.max(),l=r?Math.ceil(this.timeNumber(r)/1e3/e)*e:0,g=o?this.timeNumber(o)/1e3:86400-e,y=[],w=l;for(;w<=g;){let E=Math.round(w*1e3),V=Co$1({hour:Math.floor(E/36e5),minute:Math.floor(E/6e4)%60,second:Math.floor(E/1e3)%60,millisecond:E%1e3},this.settings().precision);if(vce(V,this.settings().minuteStep,this.settings().secondStep,this.settings().millisecondStep))break;w+=e}for(let E=w;E<=g;E+=t){let V=Math.round(E*1e3),H=Co$1({hour:Math.floor(V/36e5),minute:Math.floor(V/6e4)%60,second:Math.floor(V/1e3)%60,millisecond:V%1e3},this.settings().precision);this.isTimeAllowed(H)&&y.push({value:H,label:fse(H,this.settings().timeFormat,this.settings().locale),disabled:!1})}return y});canSelectNow=g(()=>this.isTimeAllowed(this.normalizeTime(yse(this.clock.now(),this.settings().timeZone,this.settings().precision))));canApply=g(()=>this.isDraftValid()&&!this.availabilityLoading()&&!this.availabilityError());wheelColumns=g(()=>this.buildColumnsFor(this.draftTime()));errorText=g(()=>{let n=this.typedError();return n?this.validationMessage(n===`range`?`timeRange`:`timeFormat`):this.selectionEdited()?this.validationError():``});panelOrigin=g(()=>this.originElement());panelTemplate=Nt$1(`panelTemplate`);options=b(void 0);interval=b(void 0);parseFormats=b([]);pickerIcon=b(`clock`);openPickerLabel=b(`Choose time`);timePresentation=b(`wheel`);presentation=b(`auto`);locale=b(void 0);timeZone=b(void 0);hourCycle=b(`auto`);precision=b(`minute`);minuteStep=b(1);secondStep=b(1);millisecondStep=b(1);timeFormat=b(void 0);loopColumns=b(!0,{transform:A});min=b(void 0);max=b(void 0);disabledTimes=b([]);disabledIntervals=b([]);timeFilter=b(void 0);commitPolicy=b(`auto`);closeOnSelect=b(void 0,{transform:n=>n==null?void 0:A(n)});clearable=b(!0,{transform:A});showTimeZone=b(!1,{transform:A});showTimeZoneLabel=b(!0,{transform:A});availability=b(void 0);resolver=b(void 0);loadingLabel=b(void 0);retryLabel=b(`Retry request`);applyLabel=b(`Apply`);cancelLabel=b(`Cancel`);clearLabel=b(`Clear selection`);nowLabel=b(void 0);clearTooltip=b(void 0);hourLabel=b(`Hour`);minuteLabel=b(`Minute`);secondLabel=b(`Second`);millisecondLabel=b(`Millisecond`);periodLabel=b(`AM or PM`);timeZoneLabel=b(`Time zone`);loadErrorMessage=b(`Times could not be loaded.`);invalidSelectionLabel=b(void 0);emptyLabel=b(`No times available.`);errorWrap=b(!1,{transform:A});valueCommit=ze();openChange=ze();timeZoneChange=ze();slotRequest=ze();slotRetry=ze();listSelectionMotion;resolverToken=0;lastSlotContext=``;requestRevision=0;constructor(){super(),ce(()=>{(this.effectiveDisabled()||this.isReadonly())&&this.close()}),ce(()=>{let n=this.internalValue(),e=this.formatValue(n);this.textEdited()||this.typedText.set(e)}),ce(()=>{let n=this.internalValue();n&&this.draftTime.set(this.normalizeTime(n))}),ce(()=>{this.resolver(),this.usesExternalAvailability();let n=this.slotContext();W(()=>{let e=this.lastSlotContext;this.lastSlotContext=n,++this.resolverToken,this.availabilityState.set(void 0),this.isOpen()&&this.emitSlotRequest(e&&e.split(`|`)[1]!==n.split(`|`)[1]?`timezone`:`initial`)})}),ce(()=>{let n=this.listCollection(),e=this.listOptions(),t=this.isOpen();n&&t&&e.length&&W(()=>{let r=this.internalValue()??this.draftTime(),o=e.find(l=>!l.disabled&&this.timeNumber(l.value)>=this.timeNumber(r))??e.find(l=>!l.disabled);this.listFocusValue.set(o?.value??null),o&&n.scrollToItem(o.value)})}),ce(n=>{let e=this.listViewport()?.nativeElement;if(!e||!this.isOpen())return;let t=W(()=>this.ngZone.runOutsideAngular(()=>$y(e,{reducedMotion:this.bxA11yService.isReducedMotion()})));this.listSelectionMotion=t,n(()=>{t.destroy(),this.listSelectionMotion===t&&(this.listSelectionMotion=void 0)})}),ce(()=>{let n=this.bxA11yService.isReducedMotion();this.listSelectionMotion?.update({reducedMotion:n})}),this.destroyRef.onDestroy(()=>++this.resolverToken)}reset(){let n=this.isOpen();this.isOpen.set(!1),super.reset(),this.clearPendingEdit(),this.fieldFocused.set(!1),n&&this.openChange.emit(!1)}open(){if(this.isOpen()||this.effectiveDisabled()||this.isReadonly())return;let n=(this.textEdited()?this.parseTypedTime(this.typedText()).value:null)??this.internalValue();this.draftTime.set(this.normalizeTime(n??yse(this.clock.now(),this.settings().timeZone,this.settings().precision))),this.alignEmptyDraft(),this.selectedTimeZone.set(this.timeZone()??this.settings().timeZone),!this.textEdited()&&!this.typedError()&&this.selectionEdited.set(!1),this.originElement.set(this.nativeElement.querySelector(`.bx-time-field`)),this.textEdited()||this.typedText.set(this.formatValue(this.internalValue())),this.isOpen.set(!0),this.openChange.emit(!0),this.emitSlotRequest(`initial`),this.isDrawer()||this.focus({preventScroll:!0})}close(){this.isOpen()&&(this.isOpen.set(!1),this.markAsTouched(),this.openChange.emit(!1))}apply(){if(this.effectiveDisabled()||this.isReadonly()||!this.canApply())return;let n=this.composedValue();this.updateValue(n),this.valueCommit.emit(n),this.close()}cancel(){let n=this.internalValue();n&&this.draftTime.set(n),this.close()}clear(){this.effectiveDisabled()||this.isReadonly()||(this.selectionEdited.set(!1),this.textEdited.set(!1),this.typedError.set(null),this.typedText.set(``),this.updateValue(null),this.valueCommit.emit(null),this.close(),this.focus({preventScroll:!0}))}selectNow(){if(this.effectiveDisabled()||this.isReadonly())return;let n=this.normalizeTime(yse(this.clock.now(),this.settings().timeZone,this.settings().precision));this.draftTime.set(n),this.maybeCommitImmediately()}reloadSlots(){this.effectiveDisabled()||this.isReadonly()||this.availabilityLoading()||(this.isOpen()?this.emitSlotRequest(`initial`):this.open())}retrySlots(){this.emitSlotRequest(`retry`)}clearPendingEdit(){super.clearPendingEdit(),this.textEdited.set(!1),this.typedError.set(null),this.selectionEdited.set(!1),this.typedText.set(this.formatValue(this.internalValue()))}onFieldFocus(){this.fieldFocused.set(!0)}onFieldBlur(n){n.relatedTarget instanceof Node&&this.nativeElement.contains(n.relatedTarget)||(this.fieldFocused.set(!1),this.markAsTouched())}onTypedInput(n){this.onTypedValue(n.target.value)}onTypedValue(n){this.typedText.set(n===null?``:String(n)),this.textEdited.set(!0),this.typedError.set(null);let e=this.parseTypedTime(this.typedText()).value;e&&this.draftTime.set(e)}onTypedBlur(n){let e=n?.relatedTarget instanceof HTMLElement&&!!n.relatedTarget.closest(`.bx-time-panel-content`);this.textEdited()&&this.commitTypedTime(!e),this.markAsTouched()}onTypedKeydown(n){n.key===`Enter`?(n.preventDefault(),this.commitTypedTime()):n.key===`ArrowDown`?(n.preventDefault(),this.isOpen()||this.onTriggerClick(n),Ze(()=>{if(!this.isOpen())return;let e=this.nativeElement.ownerDocument.getElementById(this.controlId()+`-panel`);((this.isListMode()&&this.listFocusValue()?this.nativeElement.ownerDocument.getElementById(`${this.controlId()}-${this.listFocusValue()}`):null)??e?.querySelector(`[role="listbox"], .bx-time-feedback button`))?.focus({preventScroll:!0})},{injector:this.injector})):n.key===`Escape`&&this.isOpen()&&(n.preventDefault(),this.cancel())}onEditableClick(n){this.isOpen()||this.onTriggerClick(n)}onTriggerClick(n){this.isReadonly()||(this.isOpen()?this.close():this.open())}onWheelChange(n,e){if(!e)return;let t=this.draftTime(),r=this.wheelCandidate(t,n,e);r&&this.setTime(r)}onListKeydown(n,e){let t=this.listOptions().filter(g=>!g.disabled),r=t.findIndex(g=>g.value===(this.listFocusValue()??this.draftTime()));if(!t.length)return;if(n.key===`Enter`||n.key===` `){n.preventDefault(),this.onListSelect(t[Math.max(0,r)].value);return}let o=n.key===`ArrowDown`?1:n.key===`ArrowUp`?-1:0,l=n.key===`Home`?0:n.key===`End`?t.length-1:Math.max(0,Math.min(t.length-1,r+o));!o&&n.key!==`Home`&&n.key!==`End`||(n.preventDefault(),n.currentTarget.focus(),this.listFocusValue.set(t[l].value),e.scrollToItem(t[l].value),Ze(()=>{if(!this.isOpen())return;let g=this.nativeElement.ownerDocument.getElementById(`${this.controlId()}-${t[l].value}`);g&&this.listViewport()?.nativeElement.contains(g)&&g.focus({preventScroll:!0})},{injector:this.injector}))}onListSelect(n){this.isTimeAllowed(n)&&(this.listFocusValue.set(n),this.setTime(n))}onTimeZoneSelect(n){n&&(this.selectedTimeZone.set(n),this.timeZoneChange.emit(n))}showSeconds(){return this.settings().precision===`second`||this.settings().precision===`millisecond`}showMilliseconds(){return this.settings().precision===`millisecond`}showPeriod(){return this.settings().hourCycle===12}resolvedEmptyLabel(){return J(this.emptyLabel(),this.i18n)}wheelValue(n){let e=Rr(this.draftTime())??{hour:0,minute:0,second:0,millisecond:0};return n===`hour`?String(this.settings().hourCycle===12?e.hour%12===0?12:e.hour%12:e.hour):n===`minute`?Xn(e.minute):n===`second`?Xn(e.second):n===`millisecond`?String(e.millisecond).padStart(3,`0`):zs$1(this.settings().locale)[e.hour>=12?1:0]??``}isListMode(){return this.timePresentation()===`list`}listActiveId(){let n=this.listFocusValue()??this.draftTime();return this.listOptions().some(e=>e.value===n)?`${this.controlId()}-${n}`:null}timeZoneLabelFor(n){let e=vse(n,this.settings().locale);return e.offsetMinutes===null?n:`${n} \xB7 ${Ao(e.offsetMinutes)}`}parseTypedTime(n){let e=this.options()?.find(o=>J(o.label,this.i18n).toLocaleLowerCase(this.settings().locale)===n.trim().toLocaleLowerCase(this.settings().locale));if(e)return{value:e.value,error:null,message:null};let t=this.parseFormats().length?this.parseFormats():[this.settings().timeFormat],r={value:null,error:`format`,message:null};for(let o of t){let l=ace(n.trim(),o,this.settings().locale,this.settings().precision);if(l.value)return l;(l.error===`range`||r.error!==`range`)&&(r=l)}return r}commitTypedTime(n=!0){if(this.effectiveDisabled()||this.isReadonly())return;if(!this.typedText().trim()){this.clear();return}let e=this.parseTypedTime(this.typedText()),t=e.value;if(!t){this.typedError.set(e.error),n&&this.close();return}this.draftTime.set(t),this.maybeCommitImmediately(),n&&!this.canApply()&&this.close()}normalizeTime(n){return xce(n,this.settings().precision,this.settings().minuteStep,this.settings().secondStep,this.settings().millisecondStep)}formatValue(n){if(!n)return``;let e=this.options()?.find(o=>this.timeNumber(o.value)===this.timeNumber(n));return`${J(e?.label,this.i18n)||fse(n,this.settings().timeFormat,this.settings().locale)}${this.showTimeZone()&&this.showTimeZoneLabel()?` \xB7 ${this.selectedTimeZone()??this.settings().timeZone}`:``}`}buildColumnsFor(n){let e=gce(n,this.settings().precision,this.settings().hourCycle,this.settings().locale,this.settings().minuteStep,this.settings().secondStep,this.settings().millisecondStep),t=(r$6,o)=>o.map(l=>s(r({},l),{disabled:!this.wheelCandidate(n,r$6,l.value)}));return{hours:t(`hour`,e.hours),minutes:t(`minute`,e.minutes),seconds:t(`second`,e.seconds),milliseconds:t(`millisecond`,e.milliseconds),periods:t(`period`,e.periods)}}wheelCandidate(n,e,t){let r$7=Rr(n);if(!r$7)return null;let o=e===`hour`?this.settings().hourCycle===12?Number(t)%12+(r$7.hour>=12?12:0):Number(t):e===`period`?r$7.hour%12+Math.max(0,zs$1(this.settings().locale).indexOf(t))*12:r$7.hour,l=s(r({},r$7),{hour:o,minute:e===`minute`?Number(t):r$7.minute,second:e===`second`?Number(t):r$7.second,millisecond:e===`millisecond`?Number(t):r$7.millisecond}),g=Co$1(l,this.settings().precision);if(this.isTimeAllowed(g))return g;let y=this.availabilityTimes()??this.options()?.filter(V=>!V.disabled).map(V=>V.value);if(y)return y.filter(H=>{let Z=Rr(H);return!Z||!this.isTimeAllowed(H)?!1:e===`period`?Z.hour>=12==l.hour>=12:Z.hour!==l.hour?!1:e===`hour`?!0:Z.minute!==l.minute?!1:e===`minute`||Z.second===l.second&&(e===`second`||Z.millisecond===l.millisecond)}).sort((H,Z)=>Math.abs(this.timeNumber(H)-this.timeNumber(g))-Math.abs(this.timeNumber(Z)-this.timeNumber(g)))[0]??null;if(e!==`hour`&&e!==`period`)return null;let w=e===`hour`?[o]:Array.from({length:12},(V,H)=>H+(o>=12?12:0)),E=Array.from({length:Math.ceil(60/Math.max(1,this.settings().minuteStep))},(V,H)=>H*Math.max(1,this.settings().minuteStep));w.sort((V,H)=>Math.abs(V-o)-Math.abs(H-o)),E.sort((V,H)=>Math.abs(V-l.minute)-Math.abs(H-l.minute));for(let V of w)for(let H of E){let Z=Co$1(s(r({},l),{hour:V,minute:H}),this.settings().precision);if(this.isTimeAllowed(Z))return Z}return null}setTime(n){this.draftTime.set(n),this.maybeCommitImmediately()}maybeCommitImmediately(){if(this.effectiveDisabled()||this.isReadonly()||(this.selectionEdited.set(!0),this.textEdited.set(!this.canApply()),this.typedError.set(null),this.typedText.set(this.formatValue(this.draftTime())),!this.canApply()))return;let n=this.composedValue();JSON.stringify(n)!==JSON.stringify(this.internalValue())&&(this.updateValue(n),this.valueCommit.emit(n)),(this.closeOnSelect()??this.isListMode())&&this.close()}isDraftValid(){return this.isTimeAllowed(this.draftTime())}validationError(){let n=this.timeRestrictionReason(this.draftTime());return n?this.validationMessage(n):``}validationMessage(n){let e=this.invalidSelectionLabel();if(e!==void 0)return J(e,this.i18n);return Sn({kind:n,context:{format:this.parseFormats().length?this.parseFormats().join(` or `):this.settings().timeFormat,hourCycle:this.settings().hourCycle,minFormatted:this.min()?fse(this.min()??`00:00`,this.settings().timeFormat,this.settings().locale):``,maxFormatted:this.max()?fse(this.max()??`23:59`,this.settings().timeFormat,this.settings().locale):``,minuteStep:this.settings().minuteStep,secondStep:this.settings().secondStep,millisecondStep:this.settings().millisecondStep}},this.errorMessages(),r(r({},Lo),this.formSettingsService.settings().errorMessages),this.i18n)}composedValue(){return this.isDraftValid()?this.draftTime():null}isTimeAllowed(n){return this.timeRestrictionReason(n)===null}timeNumber(n){let e=Rr(n);return e?((e.hour*60+e.minute)*60+e.second)*1e3+e.millisecond:NaN}timeRestrictionReason(n){if(!Rr(n))return`timeRange`;if(this.availabilityLoading())return`timeLoading`;if(this.availabilityError()||(this.resolver()||this.availability())&&!this.availabilityTimes())return`timeAvailability`;let e=this.timeNumber(n),t=this.availabilityTimes(),r=this.options(),o=this.min(),l=this.max();return o&&e<this.timeNumber(o)?`timeMin`:l&&e>this.timeNumber(l)?`timeMax`:t&&!t.some(g=>this.timeNumber(g)===e)||r&&!r.some(g=>!g.disabled&&this.timeNumber(g.value)===e)||this.disabledTimes().some(g=>this.timeNumber(g)===e)||this.disabledIntervals().some(g=>{let y=this.timeNumber(g.start),w=this.timeNumber(g.end);return y>w?e>=y||e<=w:e>=y&&e<=w})||this.timeFilter()?.(n)?`timeDisabled`:vce(n,this.settings().minuteStep,this.settings().secondStep,this.settings().millisecondStep)?null:`timeStep`}alignEmptyDraft(){if(this.internalValue()||this.textEdited()||this.selectionEdited()||this.isTimeAllowed(this.draftTime()))return;let n=(this.availabilityTimes()??this.listOptions().filter(r=>!r.disabled).map(r=>r.value)).filter(r=>this.isTimeAllowed(r)),e=this.timeNumber(this.draftTime()),t=[...n].sort((r,o)=>Math.abs(this.timeNumber(r)-e)-Math.abs(this.timeNumber(o)-e))[0];t&&this.draftTime.set(t)}emitSlotRequest(n){if(!this.isOpen()||this.availabilityLoading())return;let e={date:null,timeZone:this.settings().timeZone,locale:this.settings().locale,revision:++this.requestRevision,source:n};n===`retry`?this.slotRetry.emit(e):this.slotRequest.emit(e),this.runResolver(e)}async runResolver(n){let e=this.resolver();if(!e||this.availability())return;let t=++this.resolverToken;this.availabilityState.set({times:this.availabilityState()?.times,loading:!0});try{let r=await e(n);if(t!==this.resolverToken)return;this.availabilityState.set({times:r?.times??[],loading:!1,retryable:!0}),this.alignEmptyDraft()}catch{if(t!==this.resolverToken)return;this.availabilityState.set({times:this.availabilityState()?.times,loading:!1,error:this.loadErrorMessage(),retryable:!0})}}static ɵfac=function(e){return new(e||i)};static ɵcmp=G({type:i,selectors:[[`bx-time-picker`]],viewQuery:function(e,t){e&1&&Xt(t.listViewport,Mc,5)(t.listCollection,Nc,5)(t.panelTemplate,Tc,5),e&2&&ft(3)},inputs:{options:[1,`options`],interval:[1,`interval`],parseFormats:[1,`parseFormats`],pickerIcon:[1,`pickerIcon`],openPickerLabel:[1,`openPickerLabel`],timePresentation:[1,`timePresentation`],presentation:[1,`presentation`],locale:[1,`locale`],timeZone:[1,`timeZone`],hourCycle:[1,`hourCycle`],precision:[1,`precision`],minuteStep:[1,`minuteStep`],secondStep:[1,`secondStep`],millisecondStep:[1,`millisecondStep`],timeFormat:[1,`timeFormat`],loopColumns:[1,`loopColumns`],min:[1,`min`],max:[1,`max`],disabledTimes:[1,`disabledTimes`],disabledIntervals:[1,`disabledIntervals`],timeFilter:[1,`timeFilter`],commitPolicy:[1,`commitPolicy`],closeOnSelect:[1,`closeOnSelect`],clearable:[1,`clearable`],showTimeZone:[1,`showTimeZone`],showTimeZoneLabel:[1,`showTimeZoneLabel`],availability:[1,`availability`],resolver:[1,`resolver`],loadingLabel:[1,`loadingLabel`],retryLabel:[1,`retryLabel`],applyLabel:[1,`applyLabel`],cancelLabel:[1,`cancelLabel`],clearLabel:[1,`clearLabel`],nowLabel:[1,`nowLabel`],clearTooltip:[1,`clearTooltip`],hourLabel:[1,`hourLabel`],minuteLabel:[1,`minuteLabel`],secondLabel:[1,`secondLabel`],millisecondLabel:[1,`millisecondLabel`],periodLabel:[1,`periodLabel`],timeZoneLabel:[1,`timeZoneLabel`],loadErrorMessage:[1,`loadErrorMessage`],invalidSelectionLabel:[1,`invalidSelectionLabel`],emptyLabel:[1,`emptyLabel`],errorWrap:[1,`errorWrap`]},outputs:{valueCommit:`valueCommit`,openChange:`openChange`,timeZoneChange:`timeZoneChange`,slotRequest:`slotRequest`,slotRetry:`slotRetry`},features:[Cn$1],ngContentSelectors:Oc,decls:13,vars:51,consts:[[`panelTemplate`,``],[`listViewport`,``],[`collection`,``],[3,`control`,`inline`,`tooltip`,`showLoadingIndicator`,`hint`,`hintEnd`,`error`,`subscriptSizing`,`forId`],[1,`bx-time-field`,3,`focusin`,`focusout`],[`bxSurface`,``,1,`bx-time-trigger`,`is-editable`],[1,`bx-floating-label`],[`role`,`combobox`,`aria-autocomplete`,`none`,`type`,`text`,`autocomplete`,`off`,`aria-haspopup`,`dialog`,1,`bx-time-input`,3,`click`,`input`,`blur`,`keydown`,`id`,`value`,`disabled`,`readOnly`],[1,`bx-time-trigger-icon`,3,`size`,`decorative`],[`type`,`button`,1,`bx-time-icon-button`,3,`disabled`],[`bx-button`,``,`type`,`button`,`variant`,`text`,1,`bx-time-clear`,3,`surfaceEffects`,`disabled`,`bxTooltip`],[`panelClass`,`bx-time-panel`,3,`dismiss`,`panelId`,`panelWidth`,`open`,`autoFocus`,`presentation`,`origin`,`content`,`ariaLabel`],[`aria-hidden`,`true`,1,`bx-field-required`],[`type`,`button`,1,`bx-time-icon-button`,3,`click`,`disabled`],[`size`,`16`,3,`name`,`decorative`],[`bx-button`,``,`type`,`button`,`variant`,`text`,1,`bx-time-clear`,3,`click`,`surfaceEffects`,`disabled`,`bxTooltip`],[`name`,`x`,`size`,`16`,3,`decorative`],[`bxSurface`,``,`data-bx-surface`,`glass`,1,`bx-time-panel-content`,3,`bxSurfaceInteractive`],[1,`bx-time-panel-body`],[1,`bx-time-editor`],[1,`bx-time-editor-content`],[1,`bx-time-wheels`],[`role`,`listbox`,`tabindex`,`0`,1,`bx-time-list`],[1,`bx-time-feedback`],[1,`bx-picker-shortcuts`],[`appearance`,`outline`,3,`label`,`options`,`value`,`isSearchable`],[`type`,`hour`,3,`valueChange`,`options`,`value`,`label`,`loop`],[`aria-hidden`,`true`,1,`bx-time-wheel-separator`],[`type`,`minute`,3,`valueChange`,`options`,`value`,`label`,`loop`],[`type`,`period`,1,`bx-time-period-wheel`,3,`options`,`value`,`label`,`loop`],[`type`,`second`,3,`valueChange`,`options`,`value`,`label`,`loop`],[`type`,`millisecond`,3,`valueChange`,`options`,`value`,`label`,`loop`],[`type`,`period`,1,`bx-time-period-wheel`,3,`valueChange`,`options`,`value`,`label`,`loop`],[`role`,`listbox`,`tabindex`,`0`,1,`bx-time-list`,3,`keydown`],[`itemRole`,`presentation`,3,`items`,`trackBy`,`config`,`scrollContainer`],[3,`bxVirtualItem`],[`type`,`button`,`role`,`option`,`tabindex`,`-1`,1,`bx-time-list-option`,3,`click`,`id`,`disabled`],[`name`,`check`,`size`,`16`,3,`decorative`],[3,`size`,`label`],[`role`,`status`],[`role`,`alert`,1,`bx-time-feedback-message`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`accent`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`accent`,3,`click`],[`name`,`rotate-cw`,`size`,`16`,3,`decorative`],[`type`,`button`,1,`bx-picker-shortcut`,3,`click`,`disabled`],[`appearance`,`outline`,3,`valueChange`,`label`,`options`,`value`,`isSearchable`]],template:function(e,t){if(e&1&&(Ae(wc),_(0,`bx-form-field`,3)(1,`div`,4),te(`focusin`,function(){return t.onFieldFocus()})(`focusout`,function(o){return t.onFieldBlur(o)}),_(2,`div`,5),j(3,Ic,3,3,`label`,6),_(4,`input`,7),te(`click`,function(o){return t.onEditableClick(o)})(`input`,function(o){return t.onTypedInput(o)})(`blur`,function(o){return t.onTypedBlur(o)})(`keydown`,function(o){return t.onTypedKeydown(o)}),D(),j(5,Ec,1,2,`bx-loading-spinner`,8)(6,Rc,2,4,`button`,9),D(),j(7,Lc,2,5,`button`,10),D(),_(8,`bx-picker-surface`,11),te(`dismiss`,function(){return t.cancel()}),D(),Pa$1(9,Uc,9,10,`ng-template`,null,0,kr),pe(11,0,kc),pe(12,1,Pc),D()),e&2){let r=Tt$1(10);R(`control`,t.fieldControl)(`inline`,!0)(`tooltip`,t.tooltip())(`showLoadingIndicator`,!1)(`hint`,t.hint())(`hintEnd`,t.hintEnd())(`error`,t.errorText()||t.error())(`subscriptSizing`,t.resolvedSubscriptSizing())(`forId`,t.controlId()),y(),ae(`has-clear`,t.showClear()),y(),ae(`has-label`,!!t.label())(`is-open`,t.isOpen())(`is-floating`,t.isFloating())(`is-invalid`,t.showError()||!!t.errorText())(`is-outline`,t.resolvedAppearance()===`outline`)(`is-readonly`,t.isReadonly())(`is-disabled`,t.effectiveDisabled())(`is-keyboard-focused`,t.keyboardFocused()),y(),F(t.label()?3:-1),y(),R(`id`,t.controlId())(`value`,t.typedText())(`disabled`,t.effectiveDisabled())(`readOnly`,t.isReadonly()),B(`aria-controls`,t.isOpen()?t.controlId()+`-panel`:null)(`placeholder`,t.isFloating()||!t.label()?t.resolvedTimePlaceholder():``)(`aria-label`,t.ariaLabel()||t.resolvedLabel()||t.resolvedTimePlaceholder())(`aria-describedby`,t.describedBy())(`aria-expanded`,t.isOpen())(`aria-invalid`,t.showError()||!!t.errorText())(`aria-required`,t.effectiveRequired())(`aria-busy`,t.availabilityLoading())(`data-testid`,t.dataTestId()),y(),F(t.availabilityLoading()?5:6),y(2),F(t.showClear()?7:-1),y(),R(`panelId`,t.controlId()+`-panel`)(`panelWidth`,t.showMilliseconds()?`min(94vw, 30rem)`:`min(94vw, 22rem)`)(`open`,t.isOpen())(`autoFocus`,!1)(`presentation`,t.surfacePresentation())(`origin`,t.panelOrigin())(`content`,r)(`ariaLabel`,t.resolvedLabel()||t.resolvedTimePlaceholder())}},dependencies:[Rt$1,me,U,Vt$1,Eb,Ml,Dn,At,zt,qi,MT,eu],styles:[`
[_nghost-%COMP%] {
  display: block;
  inline-size: 100%;
}
.bx-time-field[_ngcontent-%COMP%] {
  position: relative;
  display: flex;
  inline-size: 100%;
}
.bx-time-trigger[_ngcontent-%COMP%] {
  position: relative;
  display: flex;
  align-items: center;
  gap: var(--%NS%bx-space-2, 0.5rem);
  inline-size: 100%;
  min-inline-size: 0;
  min-block-size: 3.85rem;
  box-sizing: border-box;
  padding: 0;
  padding-inline-end: var(--%NS%bx-space-3, 0.75rem);
  border: 0;
  border-bottom: var(--%NS%bx-border-width, 1px) var(--%NS%bx-border-style, solid) var(--%NS%bx-border-strong);
  border-radius: var(--%NS%bx-rounded-sm, 0.25rem) var(--%NS%bx-rounded-sm, 0.25rem) 0 0;
  background-color: var(--%NS%bx-bg-neutral);
  color: var(--%NS%bx-text-heading);
  font: inherit;
  font-size: 1rem;
  text-align: start;
  cursor: pointer;
  outline: none;
}
.bx-time-trigger[_ngcontent-%COMP%]:hover:not(:disabled, .is-readonly) {
  background-color: var(--%NS%bx-bg-neutral-hover);
}
.bx-time-trigger[_ngcontent-%COMP%]:disabled {
  background-color: var(--%NS%bx-bg-element);
  opacity: 0.7;
  cursor: not-allowed;
}
.bx-time-trigger[_ngcontent-%COMP%]::after {
  content: "";
  position: absolute;
  inset-inline: 0;
  inset-block-end: -1px;
  block-size: 2px;
  background-color: var(--%NS%bx-primary);
  transform: scaleX(0);
  transform-origin: center;
  transition: transform 0.2s linear(0, 0.18 12%, 0.58 32%, 0.87 56%, 0.98 78%, 1);
  z-index: 2;
}
.bx-time-trigger[_ngcontent-%COMP%]:focus-within:not(.is-disabled, .is-readonly)::after, 
.bx-time-trigger.is-open[_ngcontent-%COMP%]::after, 
.bx-time-trigger[_ngcontent-%COMP%]:focus-visible:not(:disabled)::after {
  transform: scaleX(1);
}
.bx-time-trigger.is-invalid[_ngcontent-%COMP%] {
  border-bottom-color: var(--%NS%bx-border-danger);
}
.bx-time-trigger.is-invalid[_ngcontent-%COMP%]::after {
  background-color: var(--%NS%bx-border-danger);
  transform: scaleX(1);
}
.bx-time-trigger.is-outline[_ngcontent-%COMP%] {
  border: var(--%NS%bx-border-width, 1px) var(--%NS%bx-border-style, solid) var(--%NS%bx-border-default);
  border-radius: var(--%NS%bx-rounded-md, 0.5rem);
  background-color: transparent;
}
.bx-time-trigger[data-bx-surface][_ngcontent-%COMP%] {
  --%NS%bx-glass-surface: var(--%NS%bx-bg-neutral);
  --%NS%bx-glass-min-opacity: 0.45;
  --%NS%bx-glass-edge: var(--%NS%bx-border-default);
  --%NS%bx-glass-shadow: none;
  border: var(--%NS%bx-border-width, 1px) var(--%NS%bx-border-style, solid) var(--%NS%bx-glass-edge);
  border-radius: var(--%NS%bx-rounded-lg, 0.75rem);
}
.bx-time-trigger[data-bx-surface][_ngcontent-%COMP%]::after {
  display: none;
}
.bx-time-trigger[data-bx-surface][_ngcontent-%COMP%]:focus-within:not(.is-disabled, :disabled, .is-readonly, [readonly], [aria-readonly=true], :has([readonly], [aria-readonly=true])), 
.bx-time-trigger[data-bx-surface][_ngcontent-%COMP%]:focus-visible:not(:disabled, [readonly], [aria-readonly=true]), 
.bx-time-trigger[data-bx-surface].is-open[_ngcontent-%COMP%]:not(:disabled), 
.bx-time-trigger[data-bx-surface].is-readonly.is-keyboard-focused[_ngcontent-%COMP%]:focus-within, 
.bx-time-trigger[data-bx-surface][_ngcontent-%COMP%]:has(.bx-readonly.is-keyboard-focused):focus-within {
  --%NS%bx-glass-edge: var(--%NS%bx-border-brand);
  outline: 2px solid var(--%NS%bx-border-brand);
  outline-offset: -2px;
  --%NS%bx-glass-shadow: none;
}
.bx-time-trigger[data-bx-surface].is-open[_ngcontent-%COMP%]:not(:disabled) {
  outline: none;
}
.bx-time-trigger[data-bx-surface].is-readonly[_ngcontent-%COMP%] {
  border-bottom-style: dashed;
  color: var(--%NS%bx-text-secondary);
}
.bx-time-trigger[data-bx-surface][_ngcontent-%COMP%]:disabled {
  background-color: var(--%NS%bx-bg-element);
  opacity: 0.7;
  border-bottom-style: dotted;
  cursor: not-allowed;
}
.bx-time-trigger[data-bx-surface].is-invalid[_ngcontent-%COMP%] {
  --%NS%bx-glass-surface: var(--%NS%bx-bg-neutral);
  --%NS%bx-glass-min-opacity: 0.45;
  --%NS%bx-glass-edge: color-mix(in srgb, var(--%NS%bx-text-danger) 40%, var(--%NS%bx-border-default));
  border-block-end-color: var(--%NS%bx-glass-edge);
  --%NS%bx-glass-shadow: 0 8px 18px -10px color-mix(in srgb, var(--%NS%bx-text-danger) 65%, transparent);
  outline-color: var(--%NS%bx-border-danger);
}
.bx-time-value[_ngcontent-%COMP%] {
  flex: 1;
  min-inline-size: 0;
  box-sizing: border-box;
  padding: var(--%NS%bx-space-6, 1.5rem) 0 var(--%NS%bx-space-2, 0.5rem) var(--%NS%bx-space-3, 0.75rem);
  min-block-size: 3.85rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.bx-time-value.is-placeholder[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-secondary);
}
.bx-time-trigger-icon[_ngcontent-%COMP%] {
  flex-shrink: 0;
  color: var(--%NS%bx-text-secondary);
}
.bx-floating-label[_ngcontent-%COMP%] {
  position: absolute;
  inset-inline: var(--%NS%bx-space-3, 0.75rem) var(--%NS%bx-space-10, 2.5rem);
  inset-block-start: 50%;
  display: flex;
  align-items: baseline;
  min-inline-size: 0;
  transform: translateY(-50%);
  font-size: 1rem;
  color: var(--%NS%bx-text-secondary);
  pointer-events: none;
  z-index: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  transition:
    inset-block-start 0.2s linear(0, 0.18 12%, 0.58 32%, 0.87 56%, 0.98 78%, 1),
    transform 0.2s linear(0, 0.18 12%, 0.58 32%, 0.87 56%, 0.98 78%, 1),
    font-size 0.2s linear(0, 0.18 12%, 0.58 32%, 0.87 56%, 0.98 78%, 1),
    color 0.15s ease;
}
.bx-time-trigger.is-floating[_ngcontent-%COMP%]   .bx-floating-label[_ngcontent-%COMP%] {
  inset-block-start: var(--%NS%bx-space-2, 0.5rem);
  transform: translateY(0);
  font-size: 0.75rem;
  font-weight: 500;
}
.bx-time-trigger[_ngcontent-%COMP%]:focus-within:not(.is-readonly, .is-disabled)   .bx-floating-label[_ngcontent-%COMP%], 
.bx-time-trigger.is-open[_ngcontent-%COMP%]   .bx-floating-label[_ngcontent-%COMP%] {
  color: var(--%NS%bx-primary);
}
.bx-time-trigger.is-invalid[_ngcontent-%COMP%]   .bx-floating-label[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-danger);
}
@media (prefers-reduced-motion: reduce) {
  .bx-floating-label[_ngcontent-%COMP%] {
    transition: none;
  }
}
.bx-field-required[_ngcontent-%COMP%] {
  margin-inline-start: 0.125rem;
  color: var(--%NS%bx-text-secondary);
}
.bx-time-trigger.is-invalid[_ngcontent-%COMP%]   .bx-floating-label[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-danger);
}
.bx-time-field.has-clear[_ngcontent-%COMP%]   .bx-time-value[_ngcontent-%COMP%] {
  padding-inline-end: var(--%NS%bx-space-8, 2rem);
}
.bx-time-clear.bx-btn[_ngcontent-%COMP%] {
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
.bx-time-clear.bx-btn[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--%NS%bx-border-brand);
  outline-offset: 0;
}
.bx-time-clear.bx-btn[_ngcontent-%COMP%]:hover:not(:disabled) {
  color: var(--%NS%bx-text-primary);
  background: var(--%NS%bx-bg-element-hover);
}
.bx-time-clear.bx-btn[_ngcontent-%COMP%]:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}
.bx-time-clear.bx-btn[_ngcontent-%COMP%] {
  position: absolute;
  inset-block-start: 50%;
  inset-inline-end: calc(1px + var(--%NS%bx-space-3, 0.75rem) + var(--%NS%bx-space-4, 1rem) + var(--%NS%bx-space-2, 0.5rem));
  transform: translateY(-50%);
  z-index: 3;
}
.bx-time-panel[_ngcontent-%COMP%] {
  inline-size: 100%;
}
.bx-time-panel-content[data-bx-surface][_ngcontent-%COMP%] {
  --%NS%bx-glass-min-opacity: var(--%NS%bx-dropdown-min-opacity, 0);
  --%NS%bx-glass-opacity: var(--%NS%bx-dropdown-opacity, min(1, var(--%NS%bx-glass-material-opacity, 0.5) + 0.18));
  --%NS%bx-glass-radius: var(--%NS%bx-rounded-lg, 0.75rem);
  --%NS%bx-glass-surface: var(--%NS%bx-bg-surface);
  --%NS%bx-glass-text: var(--%NS%bx-text-primary);
  --%NS%bx-glass-edge: var(--%NS%bx-border-default);
  --%NS%bx-glass-shadow: var(--%NS%bx-shadow-md, 0 4px 8px -1px rgba(0, 0, 0, 0.15), 0 2px 4px -2px rgba(0, 0, 0, 0.12));
}
.bx-time-panel-content[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  inline-size: 100%;
  box-sizing: border-box;
  background: var(--%NS%bx-glass-surface, var(--%NS%bx-bg-surface));
  border: var(--%NS%bx-border-width, 1px) var(--%NS%bx-border-style, solid) var(--%NS%bx-glass-edge, var(--%NS%bx-border-default));
  border-radius: var(--%NS%bx-rounded-lg, 0.75rem);
  box-shadow: var(--%NS%bx-shadow-sm, 0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1));
  overflow: hidden;
  max-block-size: min(86dvh, 48rem);
}
.bx-time-panel-content.is-drawer[_ngcontent-%COMP%] {
  --%NS%bx-glass-surface: transparent;
  --%NS%bx-glass-opaque-surface: transparent;
  --%NS%bx-glass-shadow: none;
  --%NS%bx-glass-rim-visibility: 0;
  --%NS%bx-glass-decoration-opacity: 0;
  border: 0;
  border-radius: 0;
  box-shadow: none;
  background: transparent;
  max-block-size: min(82dvh, 44rem);
}
.bx-time-panel-body[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: var(--%NS%bx-space-3, 0.75rem);
  padding: var(--%NS%bx-space-3, 0.75rem);
  flex: 1 1 auto;
  min-block-size: 0;
  overflow: hidden;
}
.bx-time-wheels[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--%NS%bx-space-1, 0.25rem);
  padding-block: var(--%NS%bx-space-1, 0.25rem);
  min-inline-size: 0;
}
.bx-time-wheel-separator[_ngcontent-%COMP%] {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--%NS%bx-text-secondary);
  padding-block-start: var(--%NS%bx-space-1, 0.25rem);
}
.bx-time-period-wheel[_ngcontent-%COMP%] {
  flex: 0 0 4.25rem;
  max-inline-size: 4.5rem;
}
.bx-time-list[_ngcontent-%COMP%] {
  block-size: min(14rem, 50dvh);
  min-block-size: 6rem;
  box-sizing: border-box;
  overflow-anchor: none;
  overflow-y: auto;
  padding: var(--%NS%bx-space-1, 0.25rem);
}
.bx-time-list[_ngcontent-%COMP%]   bx-virtual-collection[_ngcontent-%COMP%] {
  --%NS%bx-virtual-row-gap: var(--%NS%bx-select-option-gap, var(--%NS%bx-space-1, 0.25rem));
}
.bx-time-list-option[_ngcontent-%COMP%] {
  display: flex;
  width: 100%;
  padding: var(--%NS%bx-space-2, 0.5rem) var(--%NS%bx-space-3, 0.75rem);
  border: 0;
  border-radius: var(--%NS%bx-rounded-sm, 0.25rem);
  background: transparent;
  color: var(--%NS%bx-text-primary);
  font: inherit;
  font-size: 0.875rem;
  line-height: 1.4;
  text-align: start;
  cursor: pointer;
}
.bx-time-list-option[aria-selected=true][_ngcontent-%COMP%] {
  background: var(--%NS%bx-accent-subtle);
  color: var(--%NS%bx-text-accent);
}
.bx-time-list-option[_ngcontent-%COMP%]:hover:not(:disabled), 
.bx-time-list-option[_ngcontent-%COMP%]:active:not(:disabled) {
  background: var(--%NS%bx-bg-element-hover);
}
.bx-time-list-option[aria-selected=true][_ngcontent-%COMP%]:hover:not(:disabled) {
  background: var(--%NS%bx-accent-subtle);
}
.bx-time-list-option[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--%NS%bx-border-accent);
  outline-offset: -2px;
}
.bx-time-list-option[_ngcontent-%COMP%]:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}
.bx-time-list-option[_ngcontent-%COMP%] {
  align-items: center;
  justify-content: space-between;
  gap: var(--%NS%bx-space-2, 0.5rem);
}
.bx-time-list-option[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {
  min-inline-size: 0;
  overflow-wrap: anywhere;
}
.bx-time-trigger[_ngcontent-%COMP%]:not(.has-label)   .bx-time-value[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  padding-block: var(--%NS%bx-space-3, 0.75rem);
}
.bx-time-trigger[_ngcontent-%COMP%]:disabled, 
.bx-time-trigger.is-disabled[_ngcontent-%COMP%] {
  pointer-events: none;
}
.bx-picker-shortcuts[_ngcontent-%COMP%] {
  display: flex;
  justify-content: flex-start;
}
.bx-picker-shortcut[_ngcontent-%COMP%] {
  padding: var(--%NS%bx-space-1, 0.25rem) var(--%NS%bx-space-2, 0.5rem);
  border: 0;
  border-radius: var(--%NS%bx-rounded-md, 0.5rem);
  background: transparent;
  color: var(--%NS%bx-text-accent);
  font: inherit;
  font-size: 0.8125rem;
  font-weight: 600;
  cursor: pointer;
}
.bx-picker-shortcut[_ngcontent-%COMP%]:hover:not(:disabled) {
  background: var(--%NS%bx-accent-subtle);
}
.bx-picker-shortcut[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--%NS%bx-border-accent);
  outline-offset: 2px;
}
.bx-picker-shortcut[_ngcontent-%COMP%]:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
.bx-time-input[_ngcontent-%COMP%] {
  flex: 1;
  min-inline-size: 0;
  min-block-size: 3.85rem;
  box-sizing: border-box;
  padding: var(--%NS%bx-space-6, 1.5rem) 0 var(--%NS%bx-space-2, 0.5rem) var(--%NS%bx-space-3, 0.75rem);
  border: 0;
  outline: none;
  background: transparent;
  color: inherit;
  font: inherit;
}
.bx-time-input[_ngcontent-%COMP%]::placeholder {
  color: var(--%NS%bx-text-secondary);
}
.bx-time-field.has-clear[_ngcontent-%COMP%]   .bx-time-input[_ngcontent-%COMP%] {
  padding-inline-end: var(--%NS%bx-space-8, 2rem);
}
.bx-time-icon-button[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: 0;
  border-radius: var(--%NS%bx-rounded-sm, 0.25rem);
  background: transparent;
  color: var(--%NS%bx-text-secondary);
  inline-size: var(--%NS%bx-space-6, 1.5rem);
  block-size: var(--%NS%bx-space-6, 1.5rem);
  cursor: pointer;
}
.bx-time-icon-button[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--%NS%bx-border-accent);
}
.bx-time-trigger[_ngcontent-%COMP%]:not(.has-label)   .bx-time-input[_ngcontent-%COMP%] {
  padding-block: var(--%NS%bx-space-3, 0.75rem);
}
.bx-time-editor[_ngcontent-%COMP%] {
  position: relative;
  min-block-size: 0;
  min-inline-size: 0;
}
.bx-time-editor-content[inert][_ngcontent-%COMP%] {
  opacity: 0.2;
  pointer-events: none;
}
.bx-time-feedback[_ngcontent-%COMP%] {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--%NS%bx-space-2, 0.5rem);
  padding: var(--%NS%bx-space-3, 0.75rem);
  text-align: center;
  color: var(--%NS%bx-text-secondary);
  font-size: 0.875rem;
  overflow-y: auto;
}
.bx-time-feedback-message[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-danger);
  overflow-wrap: anywhere;
}
[data-bx-selection-surface=true][_ngcontent-%COMP%]   .bx-time-list-option[_ngcontent-%COMP%]:is(:hover, :active):not([aria-selected=true]) {
  background: transparent;
}
.bx-time-list[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--%NS%bx-border-accent);
  outline-offset: -2px;
  border-radius: var(--%NS%bx-rounded-sm, 0.25rem);
}
@media (max-width: 768px) {
  .bx-time-panel-body[_ngcontent-%COMP%] {
    padding: var(--%NS%bx-space-2, 0.5rem);
    overflow-y: auto;
  }
}`]})};export{sp as A,ka as C,me as D,lp as E,zn as F,wo as M,xo as N,mp as O,yo as P,hp as S,ko as T,bp as _,Gn as a,fo as b,No as c,So as d,U as f,ap as g,_o as h,Ft as i,up as j,pp as k,Oo as l,_n as m,Bn as n,Hr as o,Vo as p,Co as r,Le as s,At as t,Ro as u,cp as v,kn as w,gp as x,dp as y};