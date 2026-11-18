import{$ as qi$1,A as Xi$1,E as Un$1,I as cl$1,O as Wi$1,Q as pl$1,R as ct,U as gl$1,Z as on$1,c as Et$1,d as Gi$1,o as Bn$1,r as Ae,u as Fs$1,v as Ki$1,x as Pt}from"./chunk-D2mL-a4s.js";import{$ as Ge,$a as sd$1,$i as ka$1,$n as Wu$1,A as CN,Aa as pR,Ao as wu$1,Ar as _w,Bi as ik,Bn as VQ,Ca as ni$1,Cn as TR,Co as vo,Dn as Th,Dt as LQ,En as Te,Eo as wA,Er as _i,Et as Ks$1,Fa as pk,Fi as iX,Fo as xa,Fr as ab,Gi as ja$1,Gn as WQ,Go as yt,Hi as ir,Hn as Vk,Ht as Nt,I as DA,Ii as iZ,In as Ue,Io as xe$1,J as Fr$1,Jn as Wk,Jr as bo,Jt as Pk,K as FT,Ka as rh,Kn as We$1,Ko as zC,Kr as bd$1,L as DR,Lr as ai,M as Ck,Mr as aI,Na as pb,Ni as ho,Nt as MR,O as CA,Oa as pK,Oi as hA,Ot as Ld$1,Pa as pe,Pi as iJ,Pr as aX,Pt as MT,Q as GQ,Qr as cb,Ra as q,Ri as ie,Ro as xo,Rr as ak,Sa as nd$1,T as Br$1,Ta as od$1,Ti as ge,Tn as Ta$1,Tt as Kn$1,Ua as rJ,Ui as j,Un as Vn$1,Uo as yo,Ut as Nw,Vr as b,Wa as rd$1,Wn as WC,X as G,Xa as sX,Xi as kN,Xn as Wo,Xr as bt$1,Xt as QQ,Ya as sN,Yn as Wn$1,Yr as br$1,Yt as QK,Z as GC,Za as sZ,Zr as cN,Zt as QR,_n as Sz,_r as ZC,_t as JT,aa as ld$1,ai as dJ,an as Rr$1,b as BK,ba as nZ,br as Zn$1,bt as Jn$1,ca as li,ci as de,cr as YR,dn as SZ,do as ud$1,dr as Yn$1,f as AR,fn as Sd$1,fo as ue,fr as Yr$1,gi as fR,gt as JQ,h as Ah,ha as mb,hi as fK,hn as St,ho as us,hr as Yy,in as Re$1,io as tR,jn as UC,jo as xC,jr as _z,ka as pN,ki as hC,kn as Ts$1,ko as wb,kt as Lk,l as AA,li as dg,lo as uJ,lr as Ye,mi as er,mo as uk,na as lA,nn as RA,no as sr,o as $s$1,oa as le,oo as tc$1,ot as Hr$1,p as Ae$1,pi as ee,pr as Yte,pt as J,q as Fd$1,qa as rr,qi as jt,ra as lJ,ri as cl$2,rn as RK,ro as st,rr as Xl$1,rt as Gu$1,si as dd$1,sn as Rz,so as tr,t as $,ta as ke,ti as ci,tr as XK,tt as Go,un as SA,vn as T,vo as vC,vt as Jc$1,wn as TT,wo as vr$1,wr as _R,wt as KR,xi as fr$1,xn as TA,xt as Jo,y as B,ya as nX,yi as fb,yt as Jh,za as qK,zi as ig,zn as Uy,zo as yC,zr as al$1}from"./chunk-4Vch4aoV.js";import{n as s,t as r}from"./chunk-C9yOwMO6.js";var Xt=class i{elementRef=b(ke);static ɵfac=function(e){return new(e||i)};static ɵdir=pe({type:i,selectors:[[``,`bxButtonIcon`,``]]})};var pr={text:0,icon:.45,outlined:.45,tonal:.65,filled:1.1};var br={primary:1,accent:1,success:1,info:1,warn:1.04,danger:1.1,grayscale:.35};function mr(i,t,e){return pr[i===`text`?`text`:t?`outlined`:i===`tonal`?`tonal`:i===`icon`?`icon`:`filled`]*br[e]}var va=[`contentWrapper`];var ya=[[[``,`bxIconStart`,``]],`*`,[[``,`bxIconEnd`,``]]];var Sa=[`[bxIconStart]`,`*`,`[bxIconEnd]`];function _a(i,t){if(i&1&&sd$1(0,`bx-loading-spinner`,4),i&2){let e=Wo();xo(`size`,e.spinnerSize())(`decorative`,!0)}}var xe=class i{bxA11yService=b(Br$1);projectedIcon=Lk(ZC);iconElement=Lk(ZC,{read:ke});iconContent=Lk(Bn$1);customIcon=Lk(Xt);contentWrapper=Sz.required(`contentWrapper`);hasProjectedIcon=G(()=>!!this.iconContent()||!!this.customIcon()||!!this.projectedIcon());spinnerSize=$(20);spinnerLeft=$(null);retainSpinner=$(!1);isAnimated=G(()=>!this.bxA11yService.isReducedMotion());isDisabled=G(()=>this.disabled()||this.loading());variant=ee(`text`);shape=ee(`default`);color=ee(`primary`);outlined=ee(!1);elevated=ee(!1);disabled=ee(!1,{transform:Ye});loading=ee(!1,{transform:Ye});interactive=ee(!0,{transform:Ye});surfaceEffects=ee(!0,{transform:Ye});glassiness=ee();presence;presenceElement;constructor(){Yte(()=>({glassiness:this.glassiness(),emissionStrength:mr(this.variant(),this.outlined(),this.color()),interactive:this.variant()===`text`||!this.interactive()||this.isDisabled()?!1:void 0,emission:this.variant()!==`text`&&this.interactive()&&!this.isDisabled()?this.color()===`primary`||this.color()===`grayscale`?`var(--bx-primary)`:this.color()===`accent`?`var(--bx-accent)`:`var(--bx-text-${this.color()})`:void 0}),()=>this.surfaceEffects()),Vk(t=>{let e=this.iconContent()?.elementRef.nativeElement??this.customIcon()?.elementRef.nativeElement??this.iconElement()?.nativeElement;if(this.projectedIcon()?.size(),this.measureSpinner(e),!e||typeof ResizeObserver>`u`)return;let n=new ResizeObserver(()=>this.measureSpinner(e));n.observe(this.contentWrapper().nativeElement),n.observe(e),t(()=>n.disconnect())}),Vk(()=>{let t=this.iconContent()?.elementRef.nativeElement??this.customIcon()?.elementRef.nativeElement??this.iconElement()?.nativeElement,e=this.loading(),n=this.bxA11yService.isReducedMotion(),o=t!==this.presenceElement;e&&this.retainSpinner.set(!0),o&&(this.presence?.destroy(),this.presenceElement=t,this.presence=t?Th(t,{initiallyVisible:!e}):void 0),this.presence?.update(!e,n||o)}),b(ge).onDestroy(()=>this.presence?.destroy())}releaseSpinner(){this.loading()||this.retainSpinner.set(!1)}onClick(t){this.isDisabled()&&(t.preventDefault(),t.stopImmediatePropagation())}measureSpinner(t){let e=this.contentWrapper().nativeElement,n=e.getBoundingClientRect(),o=t?.getBoundingClientRect(),r=t?`offsetWidth`in t?t.offsetWidth:t.clientWidth:0,a=Number(this.projectedIcon()?.size()),u=Number.parseFloat(getComputedStyle(e).width),g=u>0?n.width/u:1;this.spinnerSize.set(r||(Number.isFinite(a)&&a>0?a:20)),this.spinnerLeft.set(o&&g>0?(o.left+o.width/2-n.left)/g:null)}static ɵfac=function(e){return new(e||i)};static ɵcmp=Fr$1({type:i,selectors:[[`bx-button`],[`button`,`bx-button`,``],[`a`,`bx-button`,``]],contentQueries:function(e,n,o){e&1&&ud$1(o,n.projectedIcon,ZC,5)(o,n.iconElement,ZC,5,ke)(o,n.iconContent,Bn$1,5)(o,n.customIcon,Xt,5),e&2&&fb(4)},viewQuery:function(e,n){e&1&&Yy(n.contentWrapper,va,5),e&2&&fb()},hostVars:16,hostBindings:function(e,n){e&1&&br$1(`click`,function(r){return n.onClick(r)}),e&2&&(vo(`disabled`,n.isDisabled()?!0:null)(`aria-disabled`,n.isDisabled())(`aria-busy`,n.loading()?`true`:null)(`tabindex`,n.isDisabled()?`-1`:null),JT(`bx-btn bx-btn-`+n.variant()+` bx-btn-color-`+n.color()),tr(`bx-btn-capsule`,n.shape()===`capsule`)(`bx-btn-is-outlined`,n.outlined())(`bx-btn-is-elevated`,n.elevated())(`bx-btn-animated`,n.isAnimated())(`bx-btn-non-interactive`,!n.interactive()))},inputs:{variant:[1,`variant`],shape:[1,`shape`],color:[1,`color`],outlined:[1,`outlined`],elevated:[1,`elevated`],disabled:[1,`disabled`],loading:[1,`loading`],interactive:[1,`interactive`],surfaceEffects:[1,`surfaceEffects`],glassiness:[1,`glassiness`]},ngContentSelectors:Sa,decls:9,vars:8,consts:[[`contentWrapper`,``],[1,`bx-btn-content-wrapper`],[`aria-hidden`,`true`,1,`bx-btn-spinner`],[1,`bx-btn-spinner-visual`,3,`presenceHidden`,`bxVisualPresence`],[3,`size`,`decorative`],[1,`bx-btn-label`,3,`bxVisualPresence`,`bxVisualPresenceScale`]],template:function(e,n){e&1&&(ld$1(ya),bo(0,`span`,1,0)(2,`span`,2)(3,`span`,3),br$1(`presenceHidden`,function(){return n.releaseSpinner()}),od$1(4,_a,1,2,`bx-loading-spinner`,4),Go()(),bo(5,`span`,5),dd$1(6),dd$1(7,1),dd$1(8,2),Go()()),e&2&&(tr(`has-icon`,n.hasProjectedIcon()),Xl$1(2),ka$1(`left`,n.spinnerLeft(),`px`),Xl$1(),xo(`bxVisualPresence`,n.loading()),Xl$1(),nd$1(n.loading()||n.retainSpinner()?4:-1),Xl$1(),xo(`bxVisualPresence`,!n.loading()||n.hasProjectedIcon())(`bxVisualPresenceScale`,1))},dependencies:[Et$1,Gu$1],styles:[`
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
  --%NS%btn-theme-text: var(--%NS%bx-on-danger, var(--%NS%bx-text-danger));
  --%NS%btn-theme-hover-text: var(--%NS%bx-on-danger-hover, var(--%NS%bx-text-danger));
  --%NS%btn-theme-active-text: var(--%NS%bx-on-danger-active, var(--%NS%bx-text-danger));
  --%NS%btn-theme-tonal-bg: var(--%NS%bx-bg-danger-subtle);
  --%NS%btn-theme-tonal-text: var(--%NS%bx-text-danger-readable, var(--%NS%bx-text-danger));
  --%NS%btn-theme-border: var(--%NS%bx-border-danger);
}
.bx-btn-color-success[_nghost-%COMP%] {
  --%NS%btn-theme-base: var(--%NS%bx-bg-success);
  --%NS%btn-theme-hover: var(--%NS%bx-bg-success-hover);
  --%NS%btn-theme-active: var(--%NS%bx-bg-success-active);
  --%NS%btn-theme-text: var(--%NS%bx-on-success, var(--%NS%bx-text-success));
  --%NS%btn-theme-hover-text: var(--%NS%bx-on-success-hover, var(--%NS%bx-text-success));
  --%NS%btn-theme-active-text: var(--%NS%bx-on-success-active, var(--%NS%bx-text-success));
  --%NS%btn-theme-tonal-bg: var(--%NS%bx-bg-success-subtle);
  --%NS%btn-theme-tonal-text: var(--%NS%bx-text-success-readable, var(--%NS%bx-text-success));
  --%NS%btn-theme-border: var(--%NS%bx-border-success);
}
.bx-btn-color-info[_nghost-%COMP%] {
  --%NS%btn-theme-base: var(--%NS%bx-bg-info);
  --%NS%btn-theme-hover: var(--%NS%bx-bg-info-hover);
  --%NS%btn-theme-active: var(--%NS%bx-bg-info-active);
  --%NS%btn-theme-text: var(--%NS%bx-on-info, var(--%NS%bx-text-info));
  --%NS%btn-theme-hover-text: var(--%NS%bx-on-info-hover, var(--%NS%bx-text-info));
  --%NS%btn-theme-active-text: var(--%NS%bx-on-info-active, var(--%NS%bx-text-info));
  --%NS%btn-theme-tonal-bg: var(--%NS%bx-bg-info-subtle);
  --%NS%btn-theme-tonal-text: var(--%NS%bx-text-info-readable, var(--%NS%bx-text-info));
  --%NS%btn-theme-border: var(--%NS%bx-border-info);
}
.bx-btn-color-warn[_nghost-%COMP%] {
  --%NS%btn-theme-base: var(--%NS%bx-bg-warn);
  --%NS%btn-theme-hover: var(--%NS%bx-bg-warn-hover);
  --%NS%btn-theme-active: var(--%NS%bx-bg-warn-active);
  --%NS%btn-theme-text: var(--%NS%bx-on-warn, var(--%NS%bx-text-warn));
  --%NS%btn-theme-hover-text: var(--%NS%bx-on-warn-hover, var(--%NS%bx-text-warn));
  --%NS%btn-theme-active-text: var(--%NS%bx-on-warn-active, var(--%NS%bx-text-warn));
  --%NS%btn-theme-tonal-bg: var(--%NS%bx-bg-warn-subtle);
  --%NS%btn-theme-tonal-text: var(--%NS%bx-text-warn-readable, var(--%NS%bx-text-warn));
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
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  height: 100%;
  color: inherit;
}
.bx-btn-content-wrapper[_ngcontent-%COMP%]   .bx-btn-label[_ngcontent-%COMP%] {
  display: inline;
}
.bx-btn-content-wrapper.has-icon[_ngcontent-%COMP%]   .bx-btn-label[_ngcontent-%COMP%] {
  display: contents;
}
.bx-btn-content-wrapper[_ngcontent-%COMP%]   .bx-btn-spinner[_ngcontent-%COMP%] {
  position: absolute;
  display: inline-flex;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
}
.bx-btn-content-wrapper[_ngcontent-%COMP%]   .bx-btn-spinner-visual[_ngcontent-%COMP%] {
  display: inline-flex;
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
  --%NS%bx-glass-text: var(--%NS%bx-text-danger-readable, var(--%NS%bx-text-danger));
}
[data-bx-surface].bx-btn-color-success[_nghost-%COMP%], 
[_nghost-%COMP%]:not([data-bx-surface]).bx-btn-color-success {
  --%NS%bx-glass-text: var(--%NS%bx-text-success-readable, var(--%NS%bx-text-success));
}
[data-bx-surface].bx-btn-color-info[_nghost-%COMP%], 
[_nghost-%COMP%]:not([data-bx-surface]).bx-btn-color-info {
  --%NS%bx-glass-text: var(--%NS%bx-text-info-readable, var(--%NS%bx-text-info));
}
[data-bx-surface].bx-btn-color-warn[_nghost-%COMP%], 
[_nghost-%COMP%]:not([data-bx-surface]).bx-btn-color-warn {
  --%NS%bx-glass-text: var(--%NS%bx-text-warn-readable, var(--%NS%bx-text-warn));
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
}
.bx-btn-capsule[_nghost-%COMP%] {
  --%NS%bx-glass-radius: var(--%NS%bx-button-capsule-radius, var(--%NS%bx-rounded-pill, 9999px));
  inline-size: var(--%NS%bx-button-capsule-width, calc(var(--%NS%bx-space-10, 2.5rem) * 2.5));
  block-size: var(--%NS%bx-button-capsule-height, var(--%NS%bx-space-10, 2.5rem));
  min-inline-size: var(--%NS%bx-button-capsule-min-width, var(--%NS%bx-space-10, 2.5rem));
  min-block-size: var(--%NS%bx-button-capsule-min-height, var(--%NS%bx-space-8, 2rem));
  padding: 0;
  flex: none;
  border-radius: var(--%NS%bx-glass-radius, var(--%NS%bx-rounded-pill, 9999px));
}
.bx-btn-capsule[_nghost-%COMP%]   .bx-btn-content-wrapper[_ngcontent-%COMP%] {
  gap: 0;
}`]})};function Ca(i,t){i&1&&sd$1(0,`bx-icon`,1)}function Ma(i,t){i&1&&sd$1(0,`bx-icon`,2)}var It=class i{checked=ee(!1);indeterminate=ee(!1);invalid=ee(!1);disabled=ee(!1);emissive=ee(!1);static ɵfac=function(e){return new(e||i)};static ɵcmp=Fr$1({type:i,selectors:[[`bx-checkbox-indicator`]],hostAttrs:[`aria-hidden`,`true`],hostVars:2,hostBindings:function(e,n){e&2&&tr(`is-emissive`,n.emissive())},inputs:{checked:[1,`checked`],indeterminate:[1,`indeterminate`],invalid:[1,`invalid`],disabled:[1,`disabled`],emissive:[1,`emissive`]},decls:3,vars:9,consts:[[`bxSurface`,``,1,`bx-checkbox-box`,3,`bxSurfaceInteractive`,`bxSurfaceEmission`],[`name`,`minus`,`size`,`16`],[`name`,`check`,`size`,`16`]],template:function(e,n){e&1&&(bo(0,`span`,0),od$1(1,Ca,1,0,`bx-icon`,1)(2,Ma,1,0,`bx-icon`,2),Go()),e&2&&(tr(`is-checked`,n.checked()||n.indeterminate())(`is-invalid`,n.invalid())(`is-disabled`,n.disabled()),xo(`bxSurfaceInteractive`,n.emissive())(`bxSurfaceEmission`,n.invalid()?`var(--bx-text-danger)`:`var(--bx-accent)`),Xl$1(),nd$1(n.indeterminate()?1:n.checked()?2:-1))},dependencies:[GC,ZC],styles:[`
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
}`]})};var wa=[`*`];var Ut=class i{static ɵfac=function(e){return new(e||i)};static ɵcmp=Fr$1({type:i,selectors:[[`bx-error`]],hostAttrs:[`aria-live`,`polite`],ngContentSelectors:wa,decls:1,vars:0,template:function(e,n){e&1&&(ld$1(),dd$1(0))},encapsulation:2})};var Na=[`*`];var Yt=class i{align=ee(`start`);static ɵfac=function(e){return new(e||i)};static ɵcmp=Fr$1({type:i,selectors:[[`bx-hint`]],hostVars:2,hostBindings:function(e,n){e&2&&ka$1(`margin-inline-start`,n.align()===`end`?`auto`:null)},inputs:{align:[1,`align`]},ngContentSelectors:Na,decls:1,vars:0,template:function(e,n){e&1&&(ld$1(),dd$1(0))},encapsulation:2})};var Qt=new T(`BX_FORM_FIELD_CONTROL`);var Ta=[[[``,`bxPrefix`,``]],`*`,[[``,`bxSuffix`,``]],[[`bx-error`]],[[`bx-hint`]]];var Pa=[`[bxPrefix]`,`*`,`[bxSuffix]`,`bx-error`,`bx-hint`];var Oa=[`ngProjectAs`,`bx-error`,5,[`bx-error`]];var ka=[`ngProjectAs`,`bx-hint`,5,[`bx-hint`]];function Ia(i,t){i&1&&(bo(0,`span`,11),lA(1,`*`),Go())}function Da(i,t){if(i&1&&(bo(0,`div`,1)(1,`label`,10),lA(2),od$1(3,Ia,2,0,`span`,11),Go()()),i&2){let e=Wo();Xl$1(),vo(`for`,e.controlId()),Xl$1(),mb(``,e.resolvedLabel(),` `),Xl$1(),nd$1(e.isRequired()&&!e.hideRequiredMarker()?3:-1)}}function Ea(i,t){i&1&&sd$1(0,`bx-loading-spinner`,3),i&2&&xo(`size`,16)(`decorative`,!0)}function Ra(i,t){if(i&1&&(bo(0,`button`,4),sd$1(1,`bx-icon`,12),Go()),i&2){let e=Wo();xo(`bxTooltip`,e.tooltip()),vo(`aria-label`,e.resolvedTooltipLabel())}}function La(i,t){i&1&&sd$1(0,`bx-icon`,14)}function Aa(i,t){if(i&1&&(bo(0,`div`,15),lA(1),Go()),i&2){let e=t.$implicit;Xl$1(),ik(e)}}function Fa(i,t){if(i&1&&(bo(0,`div`,13),od$1(1,La,1,0,`bx-icon`,14),bo(2,`div`),ab(3,Aa,2,1,`div`,15,MT),Go()()),i&2){let e=Wo();tr(`bx-animated`,e.isAnimated()),Xl$1(),nd$1(e.messages().length?1:-1),Xl$1(2),cb(e.messages())}}var ne=class i{i18n=b(VQ,{optional:!0});bxA11yService=b(Br$1);nativeElement=b(ke).nativeElement;bxGlassLightingService=b(WC);generatedId=`bx-field-${qK()}`;projectedControl=Lk(Qt);activeControl=G(()=>this.control()??this.projectedControl());controlId=G(()=>this.forId()||this.activeControl()?.controlId()||this.generatedId);resolvedLabel=G(()=>LQ(this.label()??(this.inline()?void 0:this.activeControl()?.label()),this.i18n));resolvedError=G(()=>LQ(this.error(),this.i18n));resolvedHint=G(()=>LQ(this.hint(),this.i18n));resolvedHintEnd=G(()=>LQ(this.hintEnd(),this.i18n));resolvedTooltipLabel=G(()=>LQ(this.tooltipLabel(),this.i18n));showErrors=G(()=>!!this.error()||!!this.projectedError()||this.errors().length>0||(this.activeControl()?.showError()??!1));messages=G(()=>this.resolvedError()?[this.resolvedError()]:this.activeControl()?.errorTexts()??this.errors());isRequired=G(()=>this.required()||this.activeControl()?.required());isLoading=G(()=>this.loading()||this.activeControl()?.pending());hideSubscript=G(()=>this.subscriptSizing()===`dynamic`&&!this.showErrors()&&!this.resolvedHint()&&!this.resolvedHintEnd()&&!this.projectedHint());projectedError=Lk(Ut);projectedHint=Lk(Yt);isAnimated=G(()=>!this.bxA11yService.isReducedMotion());inline=ee(!1);control=ee(void 0);label=ee(void 0);tooltip=ee(void 0);tooltipLabel=ee(`More information`);error=ee(void 0);errors=ee([]);hint=ee(void 0);hintEnd=ee(void 0);required=ee(!1);hideRequiredMarker=ee(!1);loading=ee(!1);showLoadingIndicator=ee(!0);forId=ee(``);subscriptSizing=ee(`fixed`);constructor(){Vk(t=>{this.activeControl()?.setDescribedByIds?.([`${this.controlId()}-description`]);let e=this.nativeElement.querySelector(`input,textarea,select,button[role="combobox"]`);if(e){let u=new Set((e.getAttribute(`aria-describedby`)??``).split(` `).filter(Boolean));u.add(`${this.controlId()}-description`),e.setAttribute(`aria-describedby`,[...u].join(` `)),e.setAttribute(`aria-invalid`,String(this.showErrors())),e.setAttribute(`aria-required`,String(!!this.isRequired()))}if(!this.showErrors())return;let n=this.nativeElement.parentElement,o=this.nativeElement.closest(`form, fieldset`)??n,r=this.nativeElement.querySelector(`.bx-field-control > [data-bx-surface]`);if(!o||!r)return;let a=this.bxGlassLightingService.register(o,{element:r,edge:`bottom`,offsetX:.5,offsetY:1,z:32,color:`var(--bx-text-danger)`,intensity:.9,radius:240});t(()=>a.destroy())})}static ɵfac=function(e){return new(e||i)};static ɵcmp=Fr$1({type:i,selectors:[[`bx-form-field`]],contentQueries:function(e,n,o){e&1&&ud$1(o,n.projectedControl,Qt,5)(o,n.projectedError,Ut,5)(o,n.projectedHint,Yt,5),e&2&&fb(3)},inputs:{inline:[1,`inline`],control:[1,`control`],label:[1,`label`],tooltip:[1,`tooltip`],tooltipLabel:[1,`tooltipLabel`],error:[1,`error`],errors:[1,`errors`],hint:[1,`hint`],hintEnd:[1,`hintEnd`],required:[1,`required`],hideRequiredMarker:[1,`hideRequiredMarker`],loading:[1,`loading`],showLoadingIndicator:[1,`showLoadingIndicator`],forId:[1,`forId`],subscriptSizing:[1,`subscriptSizing`]},ngContentSelectors:Pa,decls:18,vars:17,consts:[[1,`bx-field-wrapper`],[1,`bx-field-header`],[1,`bx-field-control`],[3,`size`,`decorative`],[`type`,`button`,`bxTooltipTouch`,`tap`,`placement`,`top`,1,`bx-field-tooltip-trigger`,3,`bxTooltip`],[1,`bx-field-subscript`,3,`hidden`,`id`],[1,`bx-field-error-projected`,3,`hidden`],[`aria-live`,`polite`,1,`bx-field-error`,3,`bx-animated`],[1,`bx-field-hints`,3,`hidden`],[1,`bx-field-hint-end`],[1,`bx-field-label`],[`aria-hidden`,`true`,1,`bx-field-required`],[`name`,`help-circle`,`size`,`16`],[`aria-live`,`polite`,1,`bx-field-error`],[`name`,`alert-circle`,`size`,`16`],[1,`bx-field-error-text`]],template:function(e,n){e&1&&(ld$1(Ta),bo(0,`div`,0),od$1(1,Da,4,3,`div`,1),bo(2,`div`,2),dd$1(3),dd$1(4,1),dd$1(5,2),od$1(6,Ea,1,2,`bx-loading-spinner`,3),od$1(7,Ra,2,2,`button`,4),Go(),bo(8,`div`,5)(9,`div`,6),dd$1(10,3,Oa),Go(),od$1(11,Fa,5,3,`div`,7),bo(12,`div`,8)(13,`span`),lA(14),Go(),dd$1(15,4,ka),bo(16,`span`,9),lA(17),Go()()()()),e&2&&(tr(`is-invalid`,n.showErrors())(`dynamic-subscript`,n.subscriptSizing()===`dynamic`),vo(`data-bx-field-invalid`,n.showErrors()),Xl$1(),nd$1(n.resolvedLabel()?1:-1),Xl$1(),tr(`bx-field-control-inline`,n.inline()),Xl$1(4),nd$1(n.showLoadingIndicator()&&n.isLoading()?6:-1),Xl$1(),nd$1(n.tooltip()?7:-1),Xl$1(),xo(`hidden`,n.hideSubscript())(`id`,n.controlId()+`-description`),Xl$1(),xo(`hidden`,!n.showErrors()),Xl$1(2),nd$1(n.showErrors()&&!n.projectedError()?11:-1),Xl$1(),xo(`hidden`,n.showErrors()),Xl$1(2),ik(n.resolvedHint()),Xl$1(3),ik(n.resolvedHintEnd()))},dependencies:[ZC,Pt,Et$1],styles:[`
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
}`]})};var gr={errorPolicy:`touched`,errorMode:`first`,errorMessages:{required:`This field is required.`,email:`Enter a valid email address.`,minLength:({params:i})=>`Enter at least ${i.minLength??i.requiredLength} characters.`,maxLength:({params:i})=>`Enter no more than ${i.maxLength??i.requiredLength} characters.`,min:({params:i})=>`Enter a value of at least ${i.min}.`,max:({params:i})=>`Enter a value of no more than ${i.max}.`,pattern:`Enter a value in the required format.`,parse:`Enter a valid value.`,invalid:`Invalid value.`},appearance:`fill`,floatLabel:`auto`,hideRequiredMarker:!1,subscriptSizing:`fixed`,tooltipOnTruncate:!0};var hr={minlength:`minLength`,maxlength:`maxLength`};function Dt(i,t,e,n){let o=hr[i.kind]??i.kind,r$1=`context`in i?i.context:void 0,a=r$1!==null&&typeof r$1==`object`?r({},r$1):r({},i),u=t[i.kind]??t[o],g=i.message??(typeof r$1==`string`?r$1:typeof a.message==`string`?a.message:void 0),S=u??g??e[i.kind]??e[o]??e.invalid??`Invalid value.`;return LQ(typeof S==`function`?S({kind:o,error:i,params:a}):S,n,a)}var Et=class i{state=$(r({},gr));settings=this.state.asReadonly();update(t){this.state.update(e=>s(r(r({},e),t),{errorMessages:r(r({},e.errorMessages),t.errorMessages)}))}static ɵfac=function(e){return new(e||i)};static ɵprov=B({token:i,factory:i.ɵfac,providedIn:`root`})};var it=class i{textAdapter=b(VQ,{optional:!0});formGroupDirective=b(pN,{optional:!0,skipSelf:!0});ngForm=b(cN,{optional:!0,skipSelf:!0});focusMonitor=b(ig);formSettingsService=b(Et);destroyRef=b(ge);nativeElement=b(ke).nativeElement;ngControl=b(sr,{optional:!0,self:!0});generatedId=`bx-field-${qK()}`;submittedByParent=$(!1);extraDescriptions=$([]);localTouched=$(!1);controlVersion=$(0);currentErrors=G(()=>{if(this.controlVersion(),this.errors().length)return this.errors();let t=this.ngControl?.errors;return t?Object.entries(t).map(([e,n])=>({kind:e,context:n})):[]});keyboardFocused=$(!1);isReadonly=G(()=>this.readonly()||this.readOnly());controlId=G(()=>this.id()??this.generatedId);resolvedLabel=G(()=>LQ(this.label(),this.textAdapter));resolvedPlaceholder=G(()=>LQ(this.placeholder(),this.textAdapter));resolvedAppearance=G(()=>this.appearance()??this.formSettingsService.settings().appearance);resolvedFloatLabel=G(()=>this.floatLabel()??this.formSettingsService.settings().floatLabel);resolvedHideRequiredMarker=G(()=>this.hideRequiredMarker()??this.formSettingsService.settings().hideRequiredMarker);resolvedSubscriptSizing=G(()=>this.subscriptSizing()??this.formSettingsService.settings().subscriptSizing);resolvedTooltipOnTruncate=G(()=>this.tooltipOnTruncate()??this.formSettingsService.settings().tooltipOnTruncate??!0);describedBy=G(()=>[...new Set([this.ariaDescribedBy(),`${this.controlId()}-description`,...this.extraDescriptions()].filter(Boolean))].join(` `));effectiveDisabled=G(()=>(this.controlVersion(),this.disabled()||this.ngControl?.disabled===!0));effectiveRequired=G(()=>{this.controlVersion();let t=this.ngControl?.control;return this.required()||!!t?.hasValidator?.(ai.required)||!!t?.hasValidator?.(ai.requiredTrue)});showError=G(()=>{this.controlVersion();let t={invalid:this.invalid()||this.currentErrors().length>0||!!this.error(),touched:this.ngControl?.touched??(this.touched()||this.localTouched()),dirty:this.ngControl?.dirty??this.dirty(),submitted:this.submitted()||this.submittedByParent(),disabled:this.effectiveDisabled(),pending:this.pending()},e=this.errorPolicy()??this.formSettingsService.settings().errorPolicy;return t.disabled||!t.invalid?!1:typeof e==`function`?e(t):e===`always`||t.submitted||(e===`dirty`?t.dirty:e===`touched`?t.touched:!1)});errorTexts=G(()=>{if(!this.showError())return[];if(this.error())return[LQ(this.error(),this.textAdapter)];let t=this.errorPriority(),e=[...this.currentErrors()].sort((o,r)=>{let a=t.indexOf(o.kind),u=t.indexOf(r.kind);return(a<0?t.length:a)-(u<0?t.length:u)});return((this.errorMode()??this.formSettingsService.settings().errorMode)===`all`?e:e.slice(0,1)).map(o=>Dt(o,this.errorMessages(),this.formSettingsService.settings().errorMessages,this.textAdapter))});fieldControl;id=ee(void 0);label=ee(void 0);placeholder=ee(void 0);tooltip=ee(void 0);hint=ee(void 0);hintEnd=ee(void 0);error=ee(void 0);ariaLabel=ee(void 0);ariaLabelledBy=ee(void 0);ariaDescribedBy=ee(void 0);dataTestId=ee(void 0);name=ee(``);errors=ee([]);invalid=ee(!1);pending=ee(!1);touched=ee(!1);dirty=ee(!1);disabled=ee(!1,{transform:Ye});readonly=ee(!1,{transform:Ye});readOnly=ee(!1,{transform:Ye});hidden=ee(!1,{transform:Ye});required=ee(!1,{transform:Ye});loading=ee(!1,{transform:Ye});disabledReasons=ee([]);submitted=ee(!1);errorMessages=ee({});errorPriority=ee([]);errorPolicy=ee(void 0);errorMode=ee(void 0);appearance=ee(void 0);floatLabel=ee(void 0);hideRequiredMarker=ee(void 0);subscriptSizing=ee(void 0);tooltipOnTruncate=ee(void 0);touch=Pk();constructor(){this.fieldControl={controlId:this.controlId,label:this.label,showError:this.showError,errorTexts:this.errorTexts,required:this.effectiveRequired,disabled:this.effectiveDisabled,pending:this.pending,focus:e=>this.focus(e),setDescribedByIds:e=>{this.extraDescriptions().join(` `)!==e.join(` `)&&this.extraDescriptions.set(e)}},er(()=>{this.focusMonitor.monitor(this.nativeElement,!0).pipe(Sd$1(this.destroyRef)).subscribe(o=>this.keyboardFocused.set(o===`keyboard`)),this.destroyRef.onDestroy(()=>this.focusMonitor.stopMonitoring(this.nativeElement));let e=this.nativeElement.closest(`form`),n=()=>{this.submittedByParent.set(!0),this.commitPendingValue()};e?.addEventListener(`submit`,n,{capture:!0}),this.destroyRef.onDestroy(()=>e?.removeEventListener(`submit`,n,{capture:!0}))}),(this.formGroupDirective??this.ngForm)?.ngSubmit.pipe(Sd$1(b(ge))).subscribe(()=>{this.submittedByParent.set(!0),this.commitPendingValue()})}ngOnInit(){this.ngControl?.control?.events?.pipe(Sd$1(this.destroyRef)).subscribe(()=>{this.controlVersion.update(e=>e+1)}),this.ngControl?.control?.valueChanges?.pipe(Sd$1(this.destroyRef)).subscribe(()=>this.clearPendingEdit()),(this.formGroupDirective??this.ngForm)?.form.events.pipe(Sd$1(this.destroyRef)).subscribe(e=>{e instanceof ci&&this.reset()})}focus(t){this.nativeElement.querySelector(`input:not(:disabled), textarea:not(:disabled), select:not(:disabled), button:not(:disabled)`)?.focus(t)}reset(){this.localTouched.set(!1),this.submittedByParent.set(!1)}markAsTouched(){this.localTouched.set(!0),this.commitPendingValue(`blur`),this.touch.emit()}onControlPointerDown(){this.isReadonly()&&this.keyboardFocused.set(!1)}commitPendingValue(t){}clearPendingEdit(){}static ɵfac=function(e){return new(e||i)};static ɵdir=pe({type:i,hostVars:7,hostBindings:function(e,n){e&1&&br$1(`pointerdown`,function(){return n.onControlPointerDown()}),e&2&&(Uy(`hidden`,n.hidden()),ka$1(`display`,n.hidden()?`none`:null),tr(`bx-readonly`,n.isReadonly())(`is-keyboard-focused`,n.keyboardFocused()))},inputs:{id:[1,`id`],label:[1,`label`],placeholder:[1,`placeholder`],tooltip:[1,`tooltip`],hint:[1,`hint`],hintEnd:[1,`hintEnd`],error:[1,`error`],ariaLabel:[1,`ariaLabel`],ariaLabelledBy:[1,`ariaLabelledBy`],ariaDescribedBy:[1,`ariaDescribedBy`],dataTestId:[1,`dataTestId`],name:[1,`name`],errors:[1,`errors`],invalid:[1,`invalid`],pending:[1,`pending`],touched:[1,`touched`],dirty:[1,`dirty`],disabled:[1,`disabled`],readonly:[1,`readonly`],readOnly:[1,`readOnly`],hidden:[1,`hidden`],required:[1,`required`],loading:[1,`loading`],disabledReasons:[1,`disabledReasons`],submitted:[1,`submitted`],errorMessages:[1,`errorMessages`],errorPriority:[1,`errorPriority`],errorPolicy:[1,`errorPolicy`],errorMode:[1,`errorMode`],appearance:[1,`appearance`],floatLabel:[1,`floatLabel`],hideRequiredMarker:[1,`hideRequiredMarker`],subscriptSizing:[1,`subscriptSizing`],tooltipOnTruncate:[1,`tooltipOnTruncate`]},outputs:{touch:`touch`}})};var Rt=class i extends it{draft=$(void 0);displayedChecked=G(()=>this.draft()??this.checked());checked=_z(!1);labelPosition=ee(`after`);reset(){super.reset(),this.draft.set(void 0)}clearPendingEdit(){this.draft.set(void 0)}commitPendingValue(t){let e=this.draft();e===void 0||t===`blur`&&this.ngControl?.control?.updateOn===`submit`||(this.checked.set(e),this.draft.set(void 0))}onToggle(t){let e=t.target;if(this.disabled()||this.isReadonly()){e.checked=this.checked();return}let n=this.ngControl?.control?.updateOn;n===`blur`||n===`submit`?this.draft.set(e.checked):this.checked.set(e.checked)}onReadonlyClick(t){this.isReadonly()&&t.preventDefault()}onBlur(){this.markAsTouched()}static ɵfac=(()=>{let t;return function(n){return(t||(t=ho(i)))(n||i)}})();static ɵdir=pe({type:i,inputs:{checked:[1,`checked`],labelPosition:[1,`labelPosition`]},outputs:{checked:`checkedChange`},features:[yt]})};var Va=[`*`,[[`bx-error`]],[[`bx-hint`]]];var za=[`*`,`bx-error`,`bx-hint`];var Ba=[`ngProjectAs`,`bx-error`,5,[`bx-error`]];var Ha=[`ngProjectAs`,`bx-hint`,5,[`bx-hint`]];function Wa(i,t){i&1&&(bo(0,`span`,5),lA(1,`*`),Go())}var fr=class i extends Rt{indeterminate=_z(!1);clickAction=ee(`check-indeterminate`);emissive=ee(!0);onToggle(t){if(this.clickAction()===`noop`){t.target.checked=this.displayedChecked(),t.target.indeterminate=this.indeterminate();return}super.onToggle(t),this.clickAction()===`check`&&(t.target.indeterminate=this.indeterminate()),!this.disabled()&&!this.isReadonly()&&this.clickAction()===`check-indeterminate`&&this.indeterminate.set(!1)}static ɵfac=(()=>{let t;return function(n){return(t||(t=ho(i)))(n||i)}})();static ɵcmp=Fr$1({type:i,selectors:[[`bx-checkbox`]],inputs:{indeterminate:[1,`indeterminate`],clickAction:[1,`clickAction`],emissive:[1,`emissive`]},outputs:{indeterminate:`indeterminateChange`},features:[yt],ngContentSelectors:za,decls:10,vars:35,consts:[[3,`control`,`inline`,`tooltip`,`loading`,`hint`,`hintEnd`,`subscriptSizing`,`forId`],[1,`bx-inline-wrapper`],[`type`,`checkbox`,1,`bx-visually-hidden`,3,`click`,`change`,`blur`,`id`,`disabled`,`required`,`checked`,`indeterminate`],[3,`checked`,`indeterminate`,`invalid`,`disabled`,`emissive`],[1,`bx-inline-label`],[`aria-hidden`,`true`,1,`bx-inline-required`]],template:function(e,n){e&1&&(ld$1(Va),bo(0,`bx-form-field`,0)(1,`label`,1)(2,`input`,2),br$1(`click`,function(r){return n.onReadonlyClick(r)})(`change`,function(r){return n.onToggle(r)})(`blur`,function(){return n.onBlur()}),Go(),sd$1(3,`bx-checkbox-indicator`,3),bo(4,`span`,4),dd$1(5),lA(6),od$1(7,Wa,2,0,`span`,5),Go()(),dd$1(8,1,Ba),dd$1(9,2,Ha),Go()),e&2&&(xo(`control`,n.fieldControl)(`inline`,!0)(`tooltip`,n.tooltip())(`loading`,n.loading())(`hint`,n.hint())(`hintEnd`,n.hintEnd())(`subscriptSizing`,n.resolvedSubscriptSizing())(`forId`,n.controlId()),Xl$1(),tr(`is-disabled`,n.disabled())(`is-readonly`,n.isReadonly())(`is-keyboard-focused`,n.keyboardFocused())(`label-before`,n.labelPosition()===`before`),Xl$1(),xo(`id`,n.controlId())(`disabled`,n.disabled())(`required`,n.effectiveRequired())(`checked`,n.displayedChecked())(`indeterminate`,n.indeterminate()),vo(`name`,n.name()||null)(`data-testid`,n.dataTestId())(`aria-label`,n.ariaLabel())(`aria-labelledby`,n.ariaLabelledBy())(`aria-describedby`,n.describedBy())(`aria-invalid`,n.showError())(`aria-readonly`,n.isReadonly()),Xl$1(),xo(`checked`,n.displayedChecked())(`indeterminate`,n.indeterminate())(`invalid`,n.showError())(`disabled`,n.disabled())(`emissive`,n.emissive()),Xl$1(3),mb(``,n.resolvedLabel(),` `),Xl$1(),nd$1(n.effectiveRequired()&&!n.resolvedHideRequiredMarker()?7:-1))},dependencies:[ne,It],styles:[`
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
}`]})};var _r=Symbol(`FIELD_TREE`);var wi=0;function qa(){return wi}function ot(i,t){return(...e)=>{try{return wi=t,i(...e)}finally{wi=0}}}function ja(i){return!i}function xr(i){return i}function Be(i){return Array.isArray(i)}function Dn(i){return(typeof i==`object`||typeof i==`function`)&&i!=null}var pt=Symbol();var Bn=Symbol();var en=class{predicates;fns=[];constructor(t){this.predicates=t}push(t){this.fns.push(vr(this.predicates,t))}mergeIn(t){let e=this.predicates?t.fns.map(n=>vr(this.predicates,n)):t.fns;this.fns.push(...e)}hasRules(){return this.fns.length>0}};var En=class extends en{get defaultValue(){return!1}compute(t){return this.fns.some(e=>{let n=e(t);return n&&n!==Bn})}};var At=class i extends en{ignore;static ignoreNull(t){return new i(t,e=>e===null)}constructor(t,e){super(t),this.ignore=e}get defaultValue(){return[]}compute(t){return this.fns.reduce((e,n)=>{let o=n(t);return o===void 0||o===Bn?e:Be(o)?[...e,...this.ignore?o.filter(r=>!this.ignore(r)):o]:this.ignore&&this.ignore(o)?e:[...e,o]},[])}};var Ni=class extends At{constructor(t){super(t,void 0)}};var Ti=class extends en{key;get defaultValue(){return this.key.reducer.getInitial()}constructor(t,e){super(t),this.key=e}compute(t){if(this.fns.length===0)return this.key.reducer.getInitial();let e=this.key.reducer.getInitial();for(let n=0;n<this.fns.length;n++){let o=this.fns[n](t);o!==Bn&&(e=this.key.reducer.reduce(e,o))}return e}};function vr(i,t){return i.length===0?t:e=>{for(let n of i){let o=e.stateOf(n.path),r=de(o.structure.pathKeys).length-n.depth;for(let a=0;a<r;a++)o=o.structure.parent;if(!n.fn(o.context))return Bn}return t(e)}}var Ft=class{predicates;hidden;disabledReasons;readonly;syncErrors;syncTreeErrors;asyncErrors;metadata=/* @__PURE__ */ new Map;constructor(t){this.predicates=t,this.hidden=new En(t),this.disabledReasons=new Ni(t),this.readonly=new En(t),this.syncErrors=At.ignoreNull(t),this.syncTreeErrors=At.ignoreNull(t),this.asyncErrors=At.ignoreNull(t)}hasAnyLogic(){return this.hidden.hasRules()||this.disabledReasons.hasRules()||this.readonly.hasRules()||this.syncErrors.hasRules()||this.syncTreeErrors.hasRules()||this.asyncErrors.hasRules()||this.metadata.size>0}hasMetadata(t){return this.metadata.has(t)}hasMetadataKeys(){return this.metadata.size>0}getMetadataKeys(){return this.metadata.keys()}getMetadata(t){return this.metadata.has(t)||this.metadata.set(t,new Ti(this.predicates,t)),this.metadata.get(t)}mergeIn(t){this.hidden.mergeIn(t.hidden),this.disabledReasons.mergeIn(t.disabledReasons),this.readonly.mergeIn(t.readonly),this.syncErrors.mergeIn(t.syncErrors),this.syncTreeErrors.mergeIn(t.syncTreeErrors),this.asyncErrors.mergeIn(t.asyncErrors);for(let e of t.getMetadataKeys()){let n=t.metadata.get(e);this.getMetadata(e).mergeIn(n)}}};var Rn=class{depth;constructor(t){this.depth=t}build(){return new Ln(this,[],0)}};var Vt=class i extends Rn{constructor(t){super(t)}current;all=[];addHiddenRule(t){this.getCurrent().addHiddenRule(t)}addDisabledReasonRule(t){this.getCurrent().addDisabledReasonRule(t)}addReadonlyRule(t){this.getCurrent().addReadonlyRule(t)}addSyncErrorRule(t){this.getCurrent().addSyncErrorRule(t)}addSyncTreeErrorRule(t){this.getCurrent().addSyncTreeErrorRule(t)}addAsyncErrorRule(t){this.getCurrent().addAsyncErrorRule(t)}addMetadataRule(t,e){this.getCurrent().addMetadataRule(t,e)}getChild(t){if(t===pt){let e=this.getCurrent().children;e.size>(e.has(pt)?1:0)&&(this.current=void 0)}return this.getCurrent().getChild(t)}hasLogic(t){return this===t?!0:this.all.some(({builder:e})=>e.hasLogic(t))}hasRules(){return this.all.length>0}anyChildHasLogic(){return this.all.some(({builder:t})=>t.anyChildHasLogic())}mergeIn(t,e){e?this.all.push({builder:t,predicate:{fn:ot(e.fn,this.depth),path:e.path}}):this.all.push({builder:t}),this.current=void 0}getCurrent(){return this.current===void 0&&(this.current=new tn(this.depth),this.all.push({builder:this.current})),this.current}static newRoot(){return new i(0)}};var tn=class extends Rn{logic=new Ft([]);children=/* @__PURE__ */ new Map;constructor(t){super(t)}addHiddenRule(t){this.logic.hidden.push(ot(t,this.depth))}addDisabledReasonRule(t){this.logic.disabledReasons.push(ot(t,this.depth))}addReadonlyRule(t){this.logic.readonly.push(ot(t,this.depth))}addSyncErrorRule(t){this.logic.syncErrors.push(ot(t,this.depth))}addSyncTreeErrorRule(t){this.logic.syncTreeErrors.push(ot(t,this.depth))}addAsyncErrorRule(t){this.logic.asyncErrors.push(ot(t,this.depth))}addMetadataRule(t,e){this.logic.getMetadata(t).push(ot(e,this.depth))}getChild(t){return this.children.has(t)||this.children.set(t,new Vt(this.depth+1)),this.children.get(t)}hasLogic(t){return this===t}hasRules(){return this.logic.hasAnyLogic()||this.children.size>0}anyChildHasLogic(){for(let t of this.children.values())if(t.hasRules())return!0;return!1}};var Ln=class i{builder;predicates;depth;logic;constructor(t,e,n){this.builder=t,this.predicates=e,this.depth=n,this.logic=t?$a(t,e,n):new Ft([])}getChild(t){let e=this.builder?Cr(this.builder,t):[];if(e.length===0)return new i(void 0,[],this.depth+1);if(e.length===1){let{builder:n,predicates:o}=e[0];return new i(n,[...this.predicates,...o.map(r=>Oi(r,this.depth))],this.depth+1)}else return new Pi(e.map(({builder:o,predicates:r})=>new i(o,[...this.predicates,...r.map(a=>Oi(a,this.depth))],this.depth+1)))}hasLogic(t){return this.builder?this.builder.hasLogic(t):!1}hasRules(){return this.builder?this.builder.hasRules():!1}anyChildHasLogic(){return this.builder?this.builder.anyChildHasLogic():!1}};var Pi=class i{all;logic;constructor(t){this.all=t,this.logic=new Ft([]);for(let e of t)this.logic.mergeIn(e.logic)}getChild(t){return new i(this.all.flatMap(e=>e.getChild(t)))}hasLogic(t){return this.all.some(e=>e.hasLogic(t))}hasRules(){return this.all.some(t=>t.hasRules())}anyChildHasLogic(){return this.all.some(t=>t.anyChildHasLogic())}};function Cr(i,t){if(i instanceof Vt)return i.all.flatMap(({builder:e,predicate:n})=>{let o=Cr(e,t);return n?o.map(({builder:r,predicates:a})=>({builder:r,predicates:[...a,n]})):o});if(i instanceof tn)return[...t!==pt&&i.children.has(pt)?[{builder:i.getChild(pt),predicates:[]}]:[],...i.children.has(t)?[{builder:i.getChild(t),predicates:[]}]:[]];throw new j(1909,!1)}function $a(i,t,e){let n=new Ft(t);if(i instanceof Vt){let o=i.all.map(({builder:r,predicate:a})=>new Ln(r,a?[...t,Oi(a,e)]:t,e));for(let r of o)n.mergeIn(r.logic)}else if(i instanceof tn)n.mergeIn(i.logic);else throw new j(1909,!1);return n}function Oi(i,t){return s(r({},i),{depth:t})}var Mr=Symbol(`PATH`);var De=class i{keys;parent;keyInParent;root;children=/* @__PURE__ */ new Map;fieldPathProxy=new Proxy(this,Ga);logicBuilder;constructor(t,e,n,o){this.keys=t,this.parent=n,this.keyInParent=o,this.root=e??this,n||(this.logicBuilder=Vt.newRoot())}get builder(){return this.logicBuilder?this.logicBuilder:this.parent.builder.getChild(this.keyInParent)}getChild(t){return this.children.has(t)||this.children.set(t,new i([...this.keys,t],this.root,this,t)),this.children.get(t)}mergeIn(t,e){let n=t.compile();this.builder.mergeIn(n.builder,e)}static unwrapFieldPath(t){return t[Mr]}static newRoot(){return new i([],void 0,void 0,void 0)}};var Ga={get(i,t){return t===Mr?i:i.getChild(t).fieldPathProxy}};var In;var Jt=/* @__PURE__ */ new Map;var An=class i{schemaFn;constructor(t){this.schemaFn=t}compile(){if(Jt.has(this))return Jt.get(this);let t=De.newRoot();Jt.set(this,t);let e=In;try{In=t,this.schemaFn(t.fieldPathProxy)}finally{In=e}return t}static create(t){return t instanceof i?t:new i(t)}static rootCompile(t){try{return Jt.clear(),t===void 0?De.newRoot():t instanceof i?t.compile():new i(t).compile()}finally{Jt.clear()}}};function Ka(i){return i instanceof An||typeof i==`function`}function bt(i){if(In!==De.unwrapFieldPath(i).root)throw new j(1908,!1)}function Re(i,t,e){return bt(i),De.unwrapFieldPath(i).builder.addMetadataRule(t,e),t}var Xe={list(){return{reduce:(i,t)=>t===void 0?i:[...i,t],getInitial:()=>[]}},min(){return{reduce:(i,t)=>i===void 0||t===void 0?i??t:t<i?t:i,getInitial:()=>{}}},max(){return{reduce:(i,t)=>i===void 0||t===void 0?i??t:t>i?t:i,getInitial:()=>{}}},or(){return{reduce:(i,t)=>i||t,getInitial:()=>!1}},and(){return{reduce:(i,t)=>i&&t,getInitial:()=>!0}},override:Za};function Za(i){return{reduce:(t,e)=>e,getInitial:()=>i?.()}}var Hn=Symbol(`IS_ASYNC_VALIDATION_RESOURCE`);var nn=class{reducer;create;brand;[Hn];constructor(t,e){this.reducer=t,this.create=e}};function Ee(i){return new nn(i??Xe.override())}function wr(i,t){return new nn(t??Xe.override(),i)}function zi(){return Ee()}var Bi=Ee(Xe.or());var Hi=zi();var Wi=Ee(Xe.max());var qi=zi();var ji=Ee(Xe.min());var $i=Ee(Xe.max());var Nr=Ee(Xe.min());var Tr=Ee(Xe.list());function Ie(i,t){if(i===t)return!0;if(!i||!t||i.length!==t.length)return!1;for(let e=0;e<i.length;e++)if(!Object.is(i[e],t[e]))return!1;return!0}function Xa(i){return i.errors().length>0?`invalid`:i.pending()?`unknown`:`valid`}var ki=class{node;constructor(t){this.node=t}rawSyncTreeErrors=G(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.syncTreeErrors.compute(this.node.context),...this.node.structure.parent?.validationState.rawSyncTreeErrors()??[]],{equal:Ie});syncErrors=G(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.syncErrors.compute(this.node.context),...this.syncTreeErrors(),...Ua(this.node.submitState.submissionErrors())],{equal:Ie});syncValid=G(()=>this.shouldSkipValidation()?!0:this.node.structure.reduceChildren(this.syncErrors().length===0,(t,e)=>e&&t.validationState.syncValid(),ja));syncTreeErrors=G(()=>this.rawSyncTreeErrors().filter(t=>t.fieldTree===this.node.fieldTree),{equal:Ie});rawAsyncErrors=G(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.asyncErrors.compute(this.node.context),...this.node.structure.parent?.validationState.rawAsyncErrors()??[]],{equal:Ie});asyncErrors=G(()=>this.shouldSkipValidation()?[]:this.rawAsyncErrors().filter(t=>t===`pending`||t.fieldTree===this.node.fieldTree),{equal:Ie});parseErrors=G(()=>this.node.formFieldBindings().flatMap(t=>t.parseErrors()),{equal:Ie});errors=G(()=>[...this.parseErrors(),...this.syncErrors(),...this.asyncErrors().filter(t=>t!==`pending`)],{equal:Ie});errorSummary=G(()=>{let t=this.node.structure.reduceChildren(this.errors(),(e,n)=>[...n,...e.errorSummary()]);return de(()=>t.sort(Ya)),t},{equal:Ie});pending=G(()=>this.node.structure.reduceChildren(this.asyncErrors().includes(`pending`),(t,e)=>e||t.validationState.pending()));status=G(()=>{if(this.shouldSkipValidation())return`valid`;let t=Xa(this);return this.node.structure.reduceChildren(t,(e,n)=>n===`invalid`||e.validationState.status()===`invalid`?`invalid`:n===`unknown`||e.validationState.status()===`unknown`?`unknown`:`valid`,e=>e===`invalid`)});valid=G(()=>this.status()===`valid`);invalid=G(()=>this.status()===`invalid`);shouldSkipValidation=G(()=>this.node.hidden()||this.node.disabled()||this.node.readonly()||this.node.structure.isOrphaned())};function Ua(i){return i===void 0?[]:Be(i)?i:[i]}function rn(i,t){if(Be(i))for(let e of i)e.fieldTree??=t;else i&&(i.fieldTree??=t);return i}function yr(i){return i.formField?i.formField.element:i.fieldTree().formFieldBindings().reduce((t,e)=>!t||!e.element?t??e.element:t.compareDocumentPosition(e.element)&Node.DOCUMENT_POSITION_PRECEDING?e.element:t,void 0)}function Ya(i,t){let e=yr(i),n=yr(t);return e===n?0:e===void 0||n===void 0?e===void 0?1:-1:e.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_PRECEDING?1:-1}var Fn=Ee();var Ii=class{node;cache=/* @__PURE__ */ new WeakMap;constructor(t){this.node=t,this.fieldTreeOf=this.fieldTreeOf.bind(this),this.stateOf=this.stateOf.bind(this)}resolve(t){if(!this.cache.has(t)){let e=G(()=>{let n=De.unwrapFieldPath(t),o=this.node,r=qa();for(;r>0||!o.structure.logic.hasLogic(n.root.builder);)if(r--,o=o.structure.parent,o===void 0)throw new j(1900,!1);for(let a of n.keys)if(o=o.structure.getChild(a),o===void 0)throw new j(1901,!1);return o.fieldTree});this.cache.set(t,e)}return this.cache.get(t)()}get fieldTree(){return this.node.fieldProxy}get state(){return this.node}get value(){return this.node.structure.value}get key(){return this.node.structure.keyInParent}get pathKeys(){return this.node.structure.pathKeys}index=G(()=>{let t=this.key();if(!Be(de(this.node.structure.parent.value)))throw new j(1906,!1);return Number(t)});fieldTreeOf(t){return this.resolve(t)}stateOf(t){return this.resolve(t)()}valueOf=t=>{let e=this.resolve(t)().value();if(e instanceof wu$1)throw new j(1907,!1);return e}};var Di=class{node;metadata=/* @__PURE__ */ new Map;constructor(t){this.node=t}runMetadataCreateLifecycle(){if(!this.node.logicNode.logic.hasMetadataKeys())return;let t=wb();t&&yo(!1);try{de(()=>Jc$1(this.node.structure.injector,()=>{for(let e of this.node.logicNode.logic.getMetadataKeys())if(e.create){let n=this.node.logicNode.logic.getMetadata(e),o=e.create(this.node,G(()=>n.compute(this.node.context)));this.metadata.set(e,o)}}))}finally{t&&yo(!0)}}get(t){if(this.has(t)&&!this.metadata.has(t)){if(t.create)throw new j(1912,!1);let e=this.node.logicNode.logic.getMetadata(t);this.metadata.set(t,G(()=>e.compute(this.node.context)))}return this.metadata.get(t)}has(t){return this.node.logicNode.logic.hasMetadata(t)}};var Qa={get(i,t,e){if(t===_r)return!0;let n=i(),o=n.structure.getChild(t);if(o!==void 0)return o.fieldTree;let r=de(n.value);if(Be(r)){if(t===`length`)return n.value().length;if(t===Symbol.iterator)return()=>(n.value(),Array.prototype[Symbol.iterator].apply(n.fieldTree))}if(Dn(r)&&t===Symbol.iterator)return function*(){for(let a in e)yield[a,e[a]]}},getOwnPropertyDescriptor(i,t){let e=de(i().value),n=Reflect.getOwnPropertyDescriptor(e,t);return n&&!n.configurable&&(n.configurable=!0),n},ownKeys(i){let t=de(i().value);return typeof t==`object`&&t!==null?Reflect.ownKeys(t):[]}};function Ja(i,t){let e=G(()=>i()[t()]);return e[Ue]=i[Ue],e.set=n=>{Object.is(de(e),n)||i.update(o=>es(o,n,t()))},e.update=n=>{e.set(n(de(e)))},e.asReadonly=()=>e,e}function es(i,t,e){if(Be(i)){let n=[...i];return n[e]=t,n}else return s(r({},i),{[e]:t})}var Lt=Symbol(``);var Pr=G(()=>!1);var Vn=class{logic;node;createChildNode;identitySymbol=Symbol();_injector=void 0;_anyChildHasLogic;get injector(){return this._injector??=ie.create({providers:[],parent:this.fieldManager.injector}),this._injector}constructor(t,e,n){this.logic=t,this.node=e,this.createChildNode=n}children(){this.ensureChildrenMap();let t=this.childrenMap();return t===void 0?[]:Array.from(t.byPropertyKey.values()).map(e=>de(e.reader))}materializedChildren(){let t=this.childrenMap();return t===void 0?[]:Array.from(t.byPropertyKey.values()).map(e=>e.node)}_areChildrenMaterialized(){return de(this.childrenMap)!==void 0}ensureChildrenMap(){this._areChildrenMaterialized()||de(()=>{this.childrenMap.update(t=>this.computeChildrenMap(this.value(),t,!0))})}getChild(t){this.ensureChildrenMap();let e=t.toString(),n=de(this.childrenMap)?.byPropertyKey.get(e)?.reader;return n||(n=this.createReader(e)),n()}reduceChildren(t,e,n){let o=this.childrenMap();if(!o)return t;let r=t;for(let a of o.byPropertyKey.values()){if(n?.(r))break;r=e(de(a.reader),r)}return r}destroy(){this.injector.destroy()}createKeyOrOrphanSignals(t,e,n){if(t===`root`)return{keyInParent:Or,isOrphaned:Pr};let o=this.parent,r=n,a=G(()=>{if(o.structure.isOrphaned())return Lt;let S=o.structure.childrenMap();if(!S)return Lt;let P=S.byPropertyKey.get(r);if(P&&P.node===this.node)return r;if(e===void 0)return Lt;for(let[O,E]of S.byPropertyKey)if(E.node===this.node)return r=O;return Lt}),u=G(()=>a()===Lt);return{keyInParent:G(()=>{let S=a();if(S===Lt)throw e===void 0?new j(-1902,!1):new j(1904,!1);return S}),isOrphaned:u}}createChildrenMap(){return bd$1({source:this.value,computation:(t,e)=>this.computeChildrenMap(t,e?.value,!1)})}computeChildrenMap(t,e,n){if(!Dn(t)||!n&&e===void 0&&!(this._anyChildHasLogic??=this.logic.anyChildHasLogic()))return;e??={byPropertyKey:/* @__PURE__ */ new Map};let o,r$2=Be(t);e!==void 0&&(r$2?o=ns(e,t,this.identitySymbol):o=is(e,t));for(let a of Object.keys(t)){let u,g=t[a];if(g===void 0){e.byPropertyKey.has(a)&&(o??=r({},e),o.byPropertyKey.delete(a));continue}r$2&&Dn(g)&&!Be(g)&&(u=g[this.identitySymbol]??=Symbol(``));let S;u&&(e.byTrackingKey?.has(u)||(o??=r({},e),o.byTrackingKey??=/* @__PURE__ */ new Map,o.byTrackingKey.set(u,this.createChildNode(a,u,r$2))),S=(o??e).byTrackingKey.get(u));let P=e.byPropertyKey.get(a);P===void 0?(o??=r({},e),o.byPropertyKey.set(a,{reader:this.createReader(a),node:S??this.createChildNode(a,u,r$2)})):S&&S!==P.node&&(o??=r({},e),P.node=S)}return o??e}createReader(t){return G(()=>this.childrenMap()?.byPropertyKey.get(t)?.node)}};var Ei=class extends Vn{fieldManager;value;get parent(){}get root(){return this.node}get pathKeys(){return ts}get keyInParent(){return Or}isOrphaned=Pr;childrenMap;constructor(t,e,n,o,r){super(e,t,r),this.fieldManager=n,this.value=o,this.childrenMap=this.createChildrenMap()}};var Ri=class extends Vn{logic;parent;root;pathKeys;keyInParent;value;childrenMap;isOrphaned;get fieldManager(){return this.root.structure.fieldManager}constructor(t,e,n,o,r,a){super(e,t,a),this.logic=e,this.parent=n,this.root=this.parent.structure.root;let u=this.createKeyOrOrphanSignals(`child`,o,r);this.isOrphaned=u.isOrphaned,this.keyInParent=u.keyInParent,this.pathKeys=G(()=>[...n.structure.pathKeys(),this.keyInParent()]),this.value=Ja(this.parent.structure.value,this.keyInParent),this.childrenMap=this.createChildrenMap(),this.fieldManager.structures.add(this)}};var ts=G(()=>[]);var Or=G(()=>{throw new j(1905,!1)});function ns(i,t,e){let n,o=new Set(i.byPropertyKey.keys()),r$3=i.byTrackingKey&&new Set(i.byTrackingKey.keys());for(let a=0;a<t.length;a++){let u=t[a];o.delete(a.toString()),r$3&&Dn(u)&&Object.hasOwn(u,e)&&r$3.delete(u[e])}if(o.size>0){n??=r({},i);for(let a of o)n.byPropertyKey.delete(a)}if(r$3&&r$3.size>0){n??=r({},i);for(let a of r$3)n.byTrackingKey.delete(a)}return n}function is(i,t){let e;for(let n of i.byPropertyKey.keys())Object.hasOwn(t,n)||(e??=r({},i),e.byPropertyKey.delete(n));return e}var Li=class{node;selfSubmitting=$(!1);submissionErrors;constructor(t){this.node=t,this.submissionErrors=bd$1({source:this.node.structure.value,computation:()=>[]})}submitting=G(()=>this.selfSubmitting()||(this.node.structure.parent?.submitting()??!1))};var on=class{structure;validationState;metadataState;nodeState;submitState;fieldAdapter;controlValue;_context=void 0;get context(){return this._context??=new Ii(this)}fieldProxy=new Proxy(()=>this,Qa);pathNode;constructor(t){this.pathNode=t.pathNode,this.fieldAdapter=t.fieldAdapter,this.structure=this.fieldAdapter.createStructure(this,t),this.validationState=this.fieldAdapter.createValidationState(this,t),this.nodeState=this.fieldAdapter.createNodeState(this,t),this.metadataState=new Di(this),this.submitState=new Li(this),this.controlValue=this.controlValueSignal(),this.metadataState.runMetadataCreateLifecycle()}focusBoundControl(t){this.getBindingForFocus()?.focus(t)}getBindingForFocus(){return this.formFieldBindings().filter(e=>e.focus!==void 0).reduce(Sr,void 0)||this.structure.children().map(e=>e.getBindingForFocus()).reduce(Sr,void 0)}pendingSync=bd$1({source:()=>this.value(),computation:(t,e)=>{e?.value?.abort()}});get fieldTree(){return this.fieldProxy}get logicNode(){return this.structure.logic}get value(){return this.structure.value}get keyInParent(){return this.structure.keyInParent}get errors(){return this.validationState.errors}get parseErrors(){return this.validationState.parseErrors}get errorSummary(){return this.validationState.errorSummary}get pending(){return this.validationState.pending}get valid(){return this.validationState.valid}get invalid(){return this.validationState.invalid}get dirty(){return this.nodeState.dirty}get touched(){return this.nodeState.touched}get disabled(){return this.nodeState.disabled}get disabledReasons(){return this.nodeState.disabledReasons}get hidden(){return this.nodeState.hidden}get readonly(){return this.nodeState.readonly}get formFieldBindings(){return this.nodeState.formFieldBindings}get submitting(){return this.submitState.submitting}get name(){return this.nodeState.name}get max(){let t=this.metadata(qi)?.();return t?this.metadata(t):void 0}get maxLength(){return this.metadata(Nr)}get min(){let t=this.metadata(Hi)?.();return t?this.metadata(t):void 0}get minLength(){return this.metadata($i)}get pattern(){return this.metadata(Tr)??os}get required(){return this.metadata(Bi)??rs}metadata(t){return this.metadataState.get(t)}getError(t){return this.errors().find(e=>e.kind===t)}hasMetadata(t){return this.metadataState.has(t)}markAsTouched(t){this.structure.isOrphaned()||de(()=>{this.markAsTouchedInternal(t),this.flushSync()})}markAsTouchedInternal(t){if(!this.structure.isOrphaned()&&!this.validationState.shouldSkipValidation()&&(this.nodeState.markAsTouched(),!t?.skipDescendants))for(let e of this.structure.children())e.markAsTouchedInternal()}markAsDirty(){this.nodeState.markAsDirty()}markAsPristine(){this.nodeState.markAsPristine()}markAsUntouched(){this.nodeState.markAsUntouched()}reset(t){de(()=>this._reset(t))}_reset(t){this.pendingSync()?.abort(),t!==void 0&&this.value.set(t),this.controlValue.rawSet(this.value()),this.nodeState.markAsUntouched(),this.nodeState.markAsPristine();for(let e of this.formFieldBindings())e.reset();for(let e of this.structure.materializedChildren())e._reset()}reloadValidation(){de(()=>this._reloadValidation())}_reloadValidation(){let t=this.logicNode.logic.getMetadataKeys();for(let e of t)e[Hn]&&this.metadata(e).reload?.();for(let e of this.structure.children())e._reloadValidation()}controlValueSignal(){let t=bd$1(this.value);t.rawSet=t.set,t.set=n=>{t.rawSet(n),this.markAsDirty(),this.debounceSync()};let e=t.update;return t.update=n=>{e(n),this.markAsDirty(),this.debounceSync()},t}sync(){this.value.set(this.controlValue())}flushSync(){let t=this.pendingSync();t&&!t.signal.aborted&&(t.abort(),this.sync())}async debounceSync(){let t=de(()=>(this.pendingSync()?.abort(),this.nodeState.debouncer()));if(t){let e=new AbortController,n=t(e.signal);if(n&&(this.pendingSync.set(e),await n,e.signal.aborted))return}this.structure.isOrphaned()||this.sync()}static newRoot(t,e,n,o){return o.newRoot(t,e,n,o)}createStructure(t){return t.kind===`root`?new Ei(this,t.logic,t.fieldManager,t.value,this.newChild.bind(this)):new Ri(this,t.logic,t.parent,t.identityInParent,t.initialKeyInParent,this.newChild.bind(this))}newChild(t,e,n){let o,r;return n?(o=this.pathNode.getChild(pt),r=this.structure.logic.getChild(pt)):(o=this.pathNode.getChild(t),r=this.structure.logic.getChild(t)),this.fieldAdapter.newChild({kind:`child`,parent:this,pathNode:o,logic:r,initialKeyInParent:t,identityInParent:e,fieldAdapter:this.fieldAdapter})}};var os=G(()=>[]);var rs=G(()=>!1);function Sr(i,t){return i?t&&i.element.compareDocumentPosition(t.element)&Node.DOCUMENT_POSITION_PRECEDING?t:i:t}var Ai=class{node;selfTouched=$(!1);selfDirty=$(!1);markAsTouched(){this.selfTouched.set(!0)}markAsDirty(){this.selfDirty.set(!0)}markAsPristine(){this.selfDirty.set(!1)}markAsUntouched(){this.selfTouched.set(!1)}formFieldBindings=$([]);constructor(t){this.node=t}dirty=G(()=>{let t=this.selfDirty()&&!this.isNonInteractive();return this.node.structure.reduceChildren(t,(e,n)=>n||e.nodeState.dirty(),xr)});touched=G(()=>{let t=this.selfTouched()&&!this.isNonInteractive();return this.node.structure.reduceChildren(t,(e,n)=>n||e.nodeState.touched(),xr)});disabledReasons=G(()=>[...this.node.structure.parent?.nodeState.disabledReasons()??[],...this.node.logicNode.logic.disabledReasons.compute(this.node.context)],{equal:Ie});disabled=G(()=>!!this.disabledReasons().length);readonly=G(()=>(this.node.structure.parent?.nodeState.readonly()||this.node.logicNode.logic.readonly.compute(this.node.context))??!1);hidden=G(()=>(this.node.structure.parent?.nodeState.hidden()||this.node.logicNode.logic.hidden.compute(this.node.context))??!1);name=G(()=>{let t=this.node.structure.parent;return t?`${t.name()}.${this.node.structure.keyInParent()}`:this.node.structure.fieldManager.rootName});debouncer=G(()=>{if(this.node.logicNode.logic.hasMetadata(Fn)){let e=this.node.logicNode.logic.getMetadata(Fn).compute(this.node.context);if(e)return n=>e(this.node.context,n)}return this.node.structure.parent?.nodeState.debouncer?.()});isNonInteractive=G(()=>this.hidden()||this.disabled()||this.readonly())};var Fi=class{newRoot(t,e,n,o){return new on({kind:`root`,fieldManager:t,value:e,pathNode:n,logic:n.builder.build(),fieldAdapter:o})}newChild(t){return new on(t)}createNodeState(t){return new Ai(t)}createValidationState(t){return new ki(t)}createStructure(t,e){return t.createStructure(e)}};var Vi=class{injector;rootName;submitOptions;constructor(t,e,n){this.injector=t,this.rootName=e??`${this.injector.get(Rr$1)}.form${as++}`,this.submitOptions=n}structures=/* @__PURE__ */ new Set;createFieldManagementEffect(t){We$1(()=>{let e=/* @__PURE__ */ new Set;this.markStructuresLive(t,e);for(let n of this.structures)e.has(n)||(this.structures.delete(n),de(()=>n.destroy()))},{injector:this.injector})}markStructuresLive(t,e){e.add(t);for(let n of t.children())this.markStructuresLive(n.structure,e)}};var as=0;var kr=new T(``);function ss(i){let t,e,n;return i.length===3?[t,e,n]=i:i.length===2?Ka(i[1])?[t,e]=i:[t,n]=i:[t]=i,[t,e,n]}function ls(...i){let[t,e,n]=ss(i),o=n?.injector??b(ie),r=Jc$1(o,()=>An.rootCompile(e)),a=new Vi(o,n?.name,n?.submission),u=n?.adapter??new Fi,g=on.newRoot(a,t,r,u);a.createFieldManagementEffect(g.structure);let{experimentalWebMcpTool:S}=n??{};if(S){let P=Jc$1(o,()=>b(kr,{optional:!0}));P&&Jc$1(o,()=>P(g.fieldTree,{name:S.name,description:S.description,annotations:S.annotations}))}return g.fieldTree}async function Ir(i,t){let e=de(i);if(de(e.submitState.submitting))return!1;let n=t===void 0?e.structure.root.fieldProxy:i,o={root:e.structure.root.fieldProxy,submitted:i};t=typeof t==`function`?{action:t}:t??e.structure.fieldManager.submitOptions;let r=t?.action;if(!r)throw new j(1915,!1);e.markAsTouched();let a=t?.onInvalid,u=ds(e,t?.ignoreValidators);try{if(u){e.submitState.selfSubmitting.set(!0);let g=await de(()=>r?.(n,o));return g&&cs(e,g),!g||Be(g)&&g.length===0}else de(()=>a?.(n,o));return!1}finally{e.submitState.selfSubmitting.set(!1)}}function ds(i,t){switch(t){case`all`:return!0;case`none`:return de(i.valid);default:return!de(i.invalid)}}function cs(i,t){Be(t)||(t=[t]);let e=/* @__PURE__ */ new Map;for(let n of t){let o=rn(n,i.fieldTree),r=o.fieldTree(),a=e.get(r);a||(a=[],e.set(r,a)),a.push(o)}for(let[n,o]of e)n.submitState.submissionErrors.set(o)}var zn=class{kind=`compat`;control;fieldTree;context;message;constructor({context:t,kind:e,control:n}){this.context=t,this.kind=e,this.control=n}};function Dr(i){if(i.length===0)return null;let t={};for(let e of i)t[e.kind]=e instanceof zn?e.context:e;return t}function Er(i,t){return i===null?[]:Object.entries(i).map(([e,n])=>new zn({context:n,kind:e,control:t}))}var ps=new T(``);function tm(i,t){bt(i);let e=De.unwrapFieldPath(i),n;typeof t==`function`||typeof t==`string`?n=t:n=t?.when,e.builder.addDisabledReasonRule(o=>{let r=!0;return typeof n==`string`?r=n:n&&(r=n(o)),typeof r==`string`?{fieldTree:o.fieldTree,message:r}:r?{fieldTree:o.fieldTree}:void 0})}function nm(i,t){bt(i);let e=De.unwrapFieldPath(i),n=typeof t==`function`?t:t?.when??(()=>!0);e.builder.addReadonlyRule(n)}function bs(i){let t=i;return typeof t.length==`number`?t.length:t.size}function He(i,t){return i instanceof Function?i(t):i}function Ji(i){return typeof i==`number`?isNaN(i):i===``||i===!1||i==null}function Rr(i){return i===void 0?[]:Array.isArray(i)?i:[i]}function an(i,t){bt(i),De.unwrapFieldPath(i).builder.addSyncErrorRule(n=>rn(t(n),n.fieldTree))}function ms(i){return new Gi(i)}function gs(i,t){return new Ki(i,t)}function hs(i,t){return new Zi(i,t)}function fs(i,t){return new Xi(i,t)}function xs(i){return new Ui(i)}var at=class{__brand=void 0;kind=``;fieldTree;message;constructor(t){t&&Object.assign(this,t)}};var Gi=class extends at{kind=`required`};var Ki=class extends at{min;kind=`min`;constructor(t,e){super(e),this.min=t}};var Zi=class extends at{max;kind=`max`;constructor(t,e){super(e),this.max=t}};var Xi=class extends at{minLength;kind=`minLength`;constructor(t,e){super(e),this.minLength=t}};var Ui=class extends at{kind=`email`};var Wn=class extends at{kind=`parse`};var vs=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;function im(i,t){an(i,e=>{if(!(t?.when&&!t.when(e))&&!Ji(e.value())&&!vs.test(e.value()))return t?.error?He(t.error,e):xs({message:He(t?.message,e)})})}function om(i,t,e){let n=Ee();Re(i,n,o=>{if(!(e?.when&&!e.when(o)))return typeof t==`function`?t(o):t}),Re(i,ji,({state:o})=>o.metadata(n)()),Re(i,qi,()=>ji),an(i,o=>{let r=o.value();if(r===null||Number.isNaN(r))return;let a=o.state.metadata(n)();if(!(a===void 0||Number.isNaN(a))&&r>a)return e?.error?He(e.error,o):hs(a,{message:He(e?.message,o)})})}function rm(i,t,e){let n=Ee();Re(i,n,o=>{if(!(e?.when&&!e.when(o)))return typeof t==`function`?t(o):t}),Re(i,Wi,({state:o})=>o.metadata(n)()),Re(i,Hi,()=>Wi),an(i,o=>{let r=o.value();if(r===null||Number.isNaN(r))return;let a=o.state.metadata(n)();if(!(a===void 0||Number.isNaN(a))&&r<a)return e?.error?He(e.error,o):gs(a,{message:He(e?.message,o)})})}function am(i,t,e){let n=Re(i,Ee(),o=>{if(!(e?.when&&!e.when(o)))return typeof t==`number`?t:t(o)});Re(i,$i,({state:o})=>o.metadata(n)()),an(i,o=>{if(Ji(o.value()))return;let r=o.state.metadata(n)();if(r!==void 0&&bs(o.value())<r)return e?.error?He(e.error,o):fs(r,{message:He(e?.message,o)})})}function sm(i,t){let e=Re(i,Ee(),n=>t?.when?t.when(n):!0);Re(i,Bi,({state:n})=>n.metadata(e)()),an(i,n=>{if(n.state.metadata(e)()&&Ji(n.value()))return t?.error?He(t.error,n):ms({message:He(t?.message,n)})})}function lm(i,t){bt(i);let e=De.unwrapFieldPath(i),n=wr((o,r)=>{if(t.debounce!==void 0){let a=Rz(()=>r(),t.debounce),u=G(()=>Ck(a));return t.factory(u)}return t.factory(r)});n[Hn]=!0,Re(i,n,o=>{let a=o.stateOf(i).validationState;if(!(a.shouldSkipValidation()||!a.syncValid())&&!(t.when&&!t.when(o)))return t.params(o)}),e.builder.addAsyncErrorRule(o=>{let r=o.state.metadata(n),a;switch(r.status()){case`idle`:return;case`loading`:case`reloading`:return`pending`;case`resolved`:case`local`:return r.hasValue()?(a=t.onSuccess(r.value(),o),rn(a,o.fieldTree)):void 0;case`error`:return a=t.onError(r.error(),o),rn(a,o.fieldTree)}})}function dm(i,t){bt(i);let e=De.unwrapFieldPath(i),n=ys(t);e.builder.addMetadataRule(Fn,()=>n)}function ys(i){return typeof i==`function`?i:i===`blur`?_s():i>0?Ss(i):Cs}function Ss(i){return(t,e)=>new Promise(n=>{let o,r=()=>{clearTimeout(o),n()};o=setTimeout(()=>{e.removeEventListener(`abort`,r),n()},i),e.addEventListener(`abort`,r,{once:!0})})}function _s(){return(i,t)=>new Promise(e=>{t.addEventListener(`abort`,()=>e(),{once:!0})})}function Cs(){}function Vr(i,t,e){let n=bd$1({source:i,computation:()=>[],equal:Ie}),o=a=>{let u=e(a);n.set(Rr(u.error)),u.value!==void 0&&t(u.value),n.set(Rr(u.error))},r=()=>{n.set([])};return{errors:n.asReadonly(),setRawValue:o,reset:r}}function zr(i,t){let{parse:e,format:n}=t,o=Vr(i,i.set,e),r=bd$1(()=>n(i())),a=r;a.parseErrors=o.errors;let u=a.set.bind(a),g=b(QR,{self:!0,optional:!0});return g&&(g.setParseErrors(o.errors),g.onReset=S=>{o.reset();let P=S!==void 0?S:i();u(n(P))}),a.set=S=>{o.setRawValue(S),u(S)},a.update=S=>{a.set(S(r()))},a}var Yi=class{field;constructor(t){this.field=t}control=this;get value(){return this.field().controlValue()}get valid(){return this.field().valid()}get invalid(){return this.field().invalid()}get pending(){return this.field().pending()}get disabled(){return this.field().disabled()}get enabled(){return!this.field().disabled()}get errors(){return Dr(this.field().errors())}get pristine(){return!this.field().dirty()}get dirty(){return this.field().dirty()}get touched(){return this.field().touched()}get untouched(){return!this.field().touched()}get status(){if(this.field().disabled())return`DISABLED`;if(this.field().valid())return`VALID`;if(this.field().invalid())return`INVALID`;if(this.field().pending())return`PENDING`;throw new j(1910,!1)}valueAccessor=null;hasValidator(t){return t===ai.required?this.field().required():!1}updateValueAndValidity(){}};var Qi={disabled:`disabled`,disabledReasons:`disabledReasons`,dirty:`dirty`,errors:`errors`,hidden:`hidden`,invalid:`invalid`,max:`max`,maxLength:`maxLength`,min:`min`,minLength:`minLength`,name:`name`,pattern:`pattern`,pending:`pending`,readonly:`readonly`,required:`required`,touched:`touched`};var Ms=(()=>{let i={};for(let t of Object.keys(Qi))i[Qi[t]]=t;return i})();function eo(i,t){return i[Ms[t]]?.()}var to=Object.values(Qi);function qn(){return{}}function rt(i,t,e){return Object.is(i[t],e)?!1:(i[t]=e,!0)}function ws(i,t,e){let n;if(Br(i)&&e.isBadInput(i))return{error:new Wn};switch(i.type){case`checkbox`:return{value:i.checked};case`number`:case`range`:case`datetime-local`:if(n=de(t),typeof n==`number`||n===null)return{value:i.value===``?null:i.valueAsNumber};break;case`date`:case`month`:case`time`:case`week`:if(n=de(t),n===null||n instanceof Date)return{value:i.valueAsDate};if(typeof n==`number`)return{value:i.valueAsNumber}}if(i.tagName===`INPUT`&&i.type===`text`&&(n??=de(t),typeof n==`number`||n===null)){if(i.value===``)return{value:null};let o=Number(i.value);return Number.isNaN(o)?{error:new Wn}:{value:o}}return{value:i.value}}function Lr(i,t){switch(i.type){case`checkbox`:i.checked=t;return;case`radio`:i.checked=t===i.value;return;case`number`:case`range`:case`datetime-local`:if(typeof t==`number`){Ar(i,t);return}else if(t===null){i.value=``;return}break;case`date`:case`month`:case`time`:case`week`:if(t===null||t instanceof Date){i.valueAsDate=t;return}else if(typeof t==`number`){Ar(i,t);return}}if(i.tagName===`INPUT`&&i.type===`text`){if(typeof t==`number`){i.value=isNaN(t)?``:String(t);return}if(t===null){i.value=``;return}}i.value=t}function Ar(i,t){isNaN(t)?i.value=``:i.valueAsNumber=t}function Br(i){return i.tagName===`INPUT`}function Ns(i){return i.type===`date`||i.type===`datetime-local`||i.type===`month`||i.type===`time`||i.type===`week`}function Ts(i,t){let e=i.getUTCFullYear(),n=String(i.getUTCMonth()+1).padStart(2,`0`);if(t===`month`)return`${e}-${n}`;return`${e}-${n}-${String(i.getUTCDate()).padStart(2,`0`)}`}function Hr(i,t,e){return t instanceof Date&&(i===`min`||i===`max`)&&(e===`date`||e===`month`)?Ts(t,e):t}function Ps(i,t){i.listenToCustomControlModel(n=>t.state().controlValue.set(n)),i.listenToCustomControlOutput(`touch`,()=>t.state().markAsTouched()),t.registerAsBinding(i.customControl);let e=qn();return()=>{let n=t.state(),o=n.controlValue();rt(e,`controlValue`,o)&&i.setCustomControlModelInput(o);for(let r of to){let a;if(r===`errors`?a=t.errors():a=eo(n,r),rt(e,r,a)&&(i.setInputOnDirectives(r,a),t.elementAcceptsNativeProperty(r)&&!i.customControlHasInput(r))){let u=Hr(r,a,t.nativeFormElement.type);KR(t.renderer,t.nativeFormElement,r,u)}}}}function Os(i){return typeof i==`object`&&i!==null}function ks(i,t){let e=qn();t.controlValueAccessor.registerOnChange(o=>{e.controlValue=o,t.state().controlValue.set(o)}),t.controlValueAccessor.registerOnTouched(()=>t.state().markAsTouched());let n=t.injector.get(li,null,{optional:!0,self:!0});if(n){let o;for(let g of n)Os(g)&&g.registerOnValidatorChange&&(o??=$(0),g.registerOnValidatorChange(()=>{o.update(S=>S+1)}));let r=n.map(g=>typeof g==`function`?g:g.validate.bind(g)),a=ai.compose(r),u=G(()=>{o?.();return Er(a?a(t.interopNgControl.control):null,t.interopNgControl.control)});t.parseErrorsSource.set(u)}return t.registerAsBinding({reset:()=>{let o=t.state().value();e.controlValue=o,de(()=>t.controlValueAccessor.writeValue(o))}}),()=>{let o=t.state(),r=o.controlValue();rt(e,`controlValue`,r)&&de(()=>t.controlValueAccessor.writeValue(r));for(let a of to){let u=eo(o,a);if(rt(e,a,u)){let g=i.setInputOnDirectives(a,u,a===`name`?Is:void 0);a===`disabled`&&t.controlValueAccessor.setDisabledState?de(()=>t.controlValueAccessor.setDisabledState(u)):!g&&t.elementAcceptsNativeProperty(a)&&KR(t.renderer,t.nativeFormElement,a,u)}}}}function Is(i){return i==null}function Ds(i,t,e){if(typeof MutationObserver!=`function`)return;let n=new MutationObserver(o=>{o.some(r=>Es(r))&&t()});n.observe(i,{attributes:!0,attributeFilter:[`value`],characterData:!0,childList:!0,subtree:!0}),e.onDestroy(()=>n.disconnect())}function Es(i){if(i.type===`childList`||i.type===`characterData`){if(i.target instanceof Comment)return!1;for(let t of i.addedNodes)if(!(t instanceof Comment))return!0;for(let t of i.removedNodes)if(!(t instanceof Comment))return!0;return!1}return i.type===`attributes`&&i.target instanceof HTMLOptionElement}function Rs(i,t,e,n){let o=!1,r=t.nativeFormElement,a=Vr(()=>t.state().value(),O=>t.state().controlValue.set(O),O=>ws(r,t.state().value,n));e.set(a.errors),t.onReset=()=>{a.reset();let O=t.state().value();P.controlValue=O,Lr(r,O)};let u=i.nativeElement,g=()=>a.setRawValue(void 0);u.addEventListener(`input`,g);let S=()=>t.state().markAsTouched();u.addEventListener(`blur`,S),t.destroyRef.onDestroy(()=>{u.removeEventListener(`input`,g),u.removeEventListener(`blur`,S)}),Br(r)&&Ns(r)&&n.watchValidity(t.destroyRef,r,()=>a.setRawValue(void 0)),t.registerAsBinding(),r.tagName===`SELECT`&&Ds(r,()=>{o&&(r.value=t.state().controlValue())},t.destroyRef);let P=qn();return()=>{let O=t.state();for(let Y of to){let F=eo(O,Y);if(rt(P,Y,F)&&(i.setInputOnDirectives(Y,F),t.elementAcceptsNativeProperty(Y))){let ee=Hr(Y,F,r.type);KR(t.renderer,r,Y,ee)}}let E=O.controlValue(),z=rt(P,`controlValue`,E),U=r.type===`radio`&&rt(P,`radioValue`,r.value);(z||U)&&Lr(r,E),o=!0}}var Wr=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵprov=B({token:i,factory:e=>Ls.ɵfac(e),providedIn:`root`})}return i})();var Ls=(()=>{class i extends Wr{document=b(q);cspNonce=b(Ts$1,{optional:!0});injectedStyles=/* @__PURE__ */ new WeakMap;watchValidity(e,n,o){let r=n.getRootNode();this.injectedStyles.has(r)||this.injectedStyles.set(r,this.createAnimationStyle(r));let a=u=>{let g=u;(g.animationName===`ng-valid`||g.animationName===`ng-invalid`)&&o()};n.addEventListener(`animationstart`,a),e.onDestroy(()=>{n.removeEventListener(`animationstart`,a)})}isBadInput(e){return e.validity?.badInput??!1}createAnimationStyle(e){let n=this.document.createElement(`style`);return this.cspNonce&&(n.nonce=this.cspNonce),n.textContent=`
      @keyframes ng-valid {}
      @keyframes ng-invalid {}
      input:valid, textarea:valid {
        animation: ng-valid 0.001s;
      }
      input:invalid, textarea:invalid {
        animation: ng-invalid 0.001s;
      }
    `,e.nodeType===9?e.head?.appendChild(n):e.appendChild(n),n}ngOnDestroy(){this.injectedStyles.get(this.document)?.remove()}static ɵfac=(()=>{let e;return function(o){return(e||(e=ho(i)))(o||i)}})();static ɵprov=B({token:i,factory:i.ɵfac})}return i})();var As=Symbol();var Fr=new T(``);var cm=(()=>{class i{field=ee.required({alias:`formField`});state=G(()=>this.field()());renderer=b(Nt);destroyRef=b(ge);injector=b(ie);element=b(ke).nativeElement;elementIsNativeFormElement=YR(this.element);elementAcceptsTextualValues=fK(this.element);_elementAcceptsMinMax;nativeFormElement=this.elementIsNativeFormElement?this.element:void 0;focuser=e=>this.element.focus(e);controlValueAccessors=b(tc$1,{optional:!0,self:!0});config=b(ps,{optional:!0});validityMonitor=b(Wr);parseErrorsSource=$(void 0);_interopNgControl;get interopNgControl(){return this._interopNgControl??=new Yi(this.state)}parseErrors=G(()=>this.parseErrorsSource()?.().map(e=>s(r({},e),{fieldTree:de(this.state).fieldTree,formField:this}))??[],{equal:Ie});errors=G(()=>this.state().errors().filter(e=>!e.formField||e.formField===this),{equal:Ie});isFieldBinding=!1;resetter=()=>{};parseErrorsResetCallback;setParseErrors(e){this.parseErrorsSource.set(e)}set onReset(e){this.parseErrorsResetCallback=e}get onReset(){return this.parseErrorsResetCallback}get controlValueAccessor(){return!this.controlValueAccessors||this.controlValueAccessors.length===0?this.interopNgControl?.valueAccessor??void 0:sN(this.interopNgControl,this.controlValueAccessors)??void 0}installClassBindingEffect(){let e=Object.entries(this.config?.classes??{}).map(([o,r])=>[o,G(()=>r(this))]);if(e.length===0)return;let n=qn();Vk({write:()=>{if(!this.state().structure.isOrphaned())for(let[o,r]of e){let a=r();rt(n,o,a)&&(a?this.renderer.addClass(this.element,o):this.renderer.removeClass(this.element,o))}}},{injector:this.injector})}focus(e){this.focuser(e)}reset(){this.resetter(),this.parseErrorsResetCallback?.(this.state().value())}registerAsBinding(e){if(this.isFieldBinding)throw new j(1913,!1);this.isFieldBinding=!0,this.installClassBindingEffect(),e?.focus&&(this.focuser=n=>e.focus(n)),e?.reset&&(this.resetter=()=>e.reset()),We$1(n=>{let o=this.state();o.nodeState.formFieldBindings.update(r=>[...r,this]),n(()=>{let r=o.nodeState.formFieldBindings().filter(a=>a!==this);o.nodeState.formFieldBindings.set(r),r.length===0&&!o.structure.isOrphaned()&&o.flushSync()})},{injector:this.injector})}[As];ɵngControlCreate(e){if(!e.hasPassThrough)if(this.controlValueAccessor)this.ɵngControlUpdate=ks(e,this);else if(e.customControl)this.ɵngControlUpdate=Ps(e,this);else if(this.elementIsNativeFormElement)this.ɵngControlUpdate=Rs(e,this,this.parseErrorsSource,this.validityMonitor);else throw new j(1914,!1)}ɵngControlUpdate;elementAcceptsNativeProperty(e){if(!this.elementIsNativeFormElement)return!1;switch(e){case`min`:case`max`:return this._elementAcceptsMinMax??=pK(this.element);case`minLength`:case`maxLength`:return this.elementAcceptsTextualValues;case`disabled`:case`required`:case`readonly`:case`name`:return!0;default:return!1}}static ɵfac=function(n){return new(n||i)};static ɵdir=pe({type:i,selectors:[[``,`formField`,``]],inputs:{field:[1,`formField`,`field`]},exportAs:[`formField`],features:[rr([{provide:Fr,useExisting:i},{provide:sr,useFactory:()=>b(i).interopNgControl},{provide:QR,useFactory:()=>b(Fr,{self:!0})}]),xa(`formField`)]})}return i})();var um=(()=>{class i{fieldTree=ee.required({alias:`formRoot`});onSubmit(e){e.preventDefault(),de(()=>{let n=this.fieldTree();n().structure.fieldManager.submitOptions&&Ir(n)})}static ɵfac=function(n){return new(n||i)};static ɵdir=pe({type:i,selectors:[[`form`,`formRoot`,``]],hostAttrs:[`novalidate`,``],hostBindings:function(n,o){n&1&&br$1(`submit`,function(a){return o.onSubmit(a)})},inputs:{fieldTree:[1,`formRoot`,`fieldTree`]}})}return i})();var qr=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵcmp=Fr$1({type:i,selectors:[[`ng-component`]],hostAttrs:[`cdk-text-field-style-loader`,``],decls:0,vars:0,template:function(n,o){},styles:[`textarea.cdk-textarea-autosize {
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
`],encapsulation:2})}return i})();var Fs={passive:!0};var Vs=(()=>{class i{_platform=b(st);_ngZone=b(le);_renderer=b(St).createRenderer(null,null);_styleLoader=b(Vn$1);_monitoredElements=/* @__PURE__ */ new Map;monitor(e){if(!this._platform.isBrowser)return _i;this._styleLoader.load(qr);let n=Ks$1(e),o=this._monitoredElements.get(n);if(o)return o.subject;let r=new xe$1,a=`cdk-text-field-autofilled`,u=S=>{S.animationName===`cdk-text-field-autofill-start`&&!n.classList.contains(a)?(n.classList.add(a),this._ngZone.run(()=>r.next({target:S.target,isAutofilled:!0}))):S.animationName===`cdk-text-field-autofill-end`&&n.classList.contains(a)&&(n.classList.remove(a),this._ngZone.run(()=>r.next({target:S.target,isAutofilled:!1})))},g=this._ngZone.runOutsideAngular(()=>(n.classList.add(`cdk-text-field-autofill-monitored`),this._renderer.listen(n,`animationstart`,u,Fs)));return this._monitoredElements.set(n,{subject:r,unlisten:g}),r}stopMonitoring(e){let n=Ks$1(e),o=this._monitoredElements.get(n);o&&(o.unlisten(),o.subject.complete(),n.classList.remove(`cdk-text-field-autofill-monitored`),n.classList.remove(`cdk-text-field-autofilled`),this._monitoredElements.delete(n))}ngOnDestroy(){this._monitoredElements.forEach((e,n)=>this.stopMonitoring(n))}static ɵfac=function(n){return new(n||i)};static ɵprov=J({token:i,factory:i.ɵfac})}return i})();var jn=(()=>{class i{_elementRef=b(ke);_autofillMonitor=b(Vs);cdkAutofill=new Re$1;ngOnInit(){this._autofillMonitor.monitor(this._elementRef).subscribe(e=>this.cdkAutofill.emit(e))}ngOnDestroy(){this._autofillMonitor.stopMonitoring(this._elementRef)}static ɵfac=function(n){return new(n||i)};static ɵdir=pe({type:i,selectors:[[``,`cdkAutofill`,``]],outputs:{cdkAutofill:`cdkAutofill`}})}return i})();var jr=(()=>{class i{_elementRef=b(ke);_platform=b(st);_ngZone=b(le);_renderer=b(Nt);_resizeEvents=new xe$1;_previousValue;_initialHeight;_destroyed=new xe$1;_listenerCleanups;_minRows;_maxRows;_enabled=!0;_previousMinRows=-1;_textareaElement;get minRows(){return this._minRows}set minRows(e){this._minRows=tR(e),this._setMinHeight()}get maxRows(){return this._maxRows}set maxRows(e){this._maxRows=tR(e),this._setMaxHeight()}get enabled(){return this._enabled}set enabled(e){this._enabled!==e&&((this._enabled=e)?this.resizeToFitContent(!0):this.reset())}get placeholder(){return this._textareaElement.placeholder}set placeholder(e){this._cachedPlaceholderHeight=void 0,e?this._textareaElement.setAttribute(`placeholder`,e):this._textareaElement.removeAttribute(`placeholder`),this._cacheTextareaPlaceholderHeight()}_cachedLineHeight;_cachedPlaceholderHeight;_document=b(q);_hasFocus=!1;_isViewInited=!1;constructor(){b(Vn$1).load(qr),this._textareaElement=this._elementRef.nativeElement}_setMinHeight(){let e=this.minRows&&this._cachedLineHeight?`${this.minRows*this._cachedLineHeight}px`:null;e&&(this._textareaElement.style.minHeight=e)}_setMaxHeight(){let e=this.maxRows&&this._cachedLineHeight?`${this.maxRows*this._cachedLineHeight}px`:null;e&&(this._textareaElement.style.maxHeight=e)}ngAfterViewInit(){this._platform.isBrowser&&(this._initialHeight=this._textareaElement.style.height,this.resizeToFitContent(),this._ngZone.runOutsideAngular(()=>{this._listenerCleanups=[this._renderer.listen(`window`,`resize`,()=>this._resizeEvents.next()),this._renderer.listen(this._textareaElement,`focus`,this._handleFocusEvent),this._renderer.listen(this._textareaElement,`blur`,this._handleFocusEvent)],this._resizeEvents.pipe(us(16)).subscribe(()=>{this._cachedLineHeight=this._cachedPlaceholderHeight=void 0,this.resizeToFitContent(!0)})}),this._isViewInited=!0,this.resizeToFitContent(!0))}ngOnDestroy(){this._listenerCleanups?.forEach(e=>e()),this._resizeEvents.complete(),this._destroyed.next(),this._destroyed.complete()}_cacheTextareaLineHeight(){if(this._cachedLineHeight)return;let e=this._textareaElement.cloneNode(!1),n=e.style;e.rows=1,n.position=`absolute`,n.visibility=`hidden`,n.border=`none`,n.padding=`0`,n.height=``,n.minHeight=``,n.maxHeight=``,n.top=n.bottom=n.left=n.right=`auto`,n.overflow=`hidden`,this._textareaElement.parentNode.appendChild(e),this._cachedLineHeight=e.clientHeight,e.remove(),this._setMinHeight(),this._setMaxHeight()}_measureScrollHeight(){let e=this._textareaElement,n=e.style.marginBottom||``,o=this._platform.FIREFOX,r=this._hasFocus,a=o?`cdk-textarea-autosize-measuring-firefox`:`cdk-textarea-autosize-measuring`;r&&(e.style.marginBottom=`${e.clientHeight}px`),e.classList.add(a);let u=e.scrollHeight-4;return e.classList.remove(a),r&&(e.style.marginBottom=n),u}_cacheTextareaPlaceholderHeight(){if(!this._isViewInited||this._cachedPlaceholderHeight!=null)return;if(!this.placeholder){this._cachedPlaceholderHeight=0;return}let e=this._textareaElement.value;this._textareaElement.value=this._textareaElement.placeholder,this._cachedPlaceholderHeight=this._measureScrollHeight(),this._textareaElement.value=e}_handleFocusEvent=e=>{this._hasFocus=e.type===`focus`};ngDoCheck(){this._platform.isBrowser&&this.resizeToFitContent()}resizeToFitContent(e=!1){if(!this._enabled||(this._cacheTextareaLineHeight(),this._cacheTextareaPlaceholderHeight(),!this._cachedLineHeight))return;let n=this._elementRef.nativeElement,o=n.value;if(!e&&this._minRows===this._previousMinRows&&o===this._previousValue)return;let r=this._measureScrollHeight(),a=Math.max(r,this._cachedPlaceholderHeight||0);n.style.height=`${a}px`,this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame<`u`?requestAnimationFrame(()=>this._scrollToCaretPosition(n)):setTimeout(()=>this._scrollToCaretPosition(n))}),this._previousValue=o,this._previousMinRows=this._minRows}reset(){this._initialHeight!==void 0&&(this._textareaElement.style.height=this._initialHeight)}_noopInputHandler(){}_scrollToCaretPosition(e){let{selectionStart:n,selectionEnd:o}=e;!this._destroyed.isStopped&&this._hasFocus&&e.setSelectionRange(n,o)}static ɵfac=function(n){return new(n||i)};static ɵdir=pe({type:i,selectors:[[`textarea`,`cdkTextareaAutosize`,``]],hostAttrs:[`rows`,`1`,1,`cdk-textarea-autosize`],hostBindings:function(n,o){n&1&&br$1(`input`,function(){return o._noopInputHandler()})},inputs:{minRows:[0,`cdkAutosizeMinRows`,`minRows`],maxRows:[0,`cdkAutosizeMaxRows`,`maxRows`],enabled:[2,`cdkTextareaAutosize`,`enabled`,Ye],placeholder:`placeholder`},exportAs:[`cdkTextareaAutosize`]})}return i})();var ve=class i extends it{edit=$(void 0);internalValue=G(()=>{let t=this.edit();return t?t.value:this.value()});value=_z(null);reset(){super.reset(),this.edit.set(void 0)}clearPendingEdit(){this.edit.set(void 0)}updateValue(t){if(this.disabled()||this.isReadonly())return;let e=this.ngControl?.control?.updateOn;e===`blur`||e===`submit`?this.edit.set({value:t}):this.value.set(t)}commitPendingValue(t){let e=this.edit();!e||t===`blur`&&this.ngControl?.control?.updateOn===`submit`||(this.value.set(e.value),this.edit.set(void 0))}static ɵfac=(()=>{let t;return function(n){return(t||(t=ho(i)))(n||i)}})();static ɵdir=pe({type:i,inputs:{value:[1,`value`]},outputs:{value:`valueChange`},features:[yt]})};function no(i){if(i===void 0||i===``)return;let t=Number(i);return Number.isFinite(t)?t:void 0}var zs=[[[``,`bxPrefix`,``],[``,`bxIconStart`,``]],[[``,`bxSuffix`,``],[``,`bxIconEnd`,``]],[[`bx-error`]],[[`bx-hint`]]];var Bs=[`[bxPrefix], [bxIconStart]`,`[bxSuffix], [bxIconEnd]`,`bx-error`,`bx-hint`];var Hs=[`ngProjectAs`,`bx-error`,5,[`bx-error`]];var Ws=[`ngProjectAs`,`bx-hint`,5,[`bx-hint`]];function qs(i,t){i&1&&(bo(0,`span`,9),lA(1,`*`),Go())}function js(i,t){if(i&1&&(bo(0,`label`,3)(1,`span`,8),lA(2),Go(),od$1(3,qs,2,0,`span`,9),Go()),i&2){let e=Wo();vo(`for`,e.controlId()),Xl$1(2),ik(e.resolvedLabel()),Xl$1(),nd$1(e.effectiveRequired()&&!e.resolvedHideRequiredMarker()?3:-1)}}function $s(i,t){if(i&1){let e=pb();bo(0,`textarea`,10),br$1(`input`,function(o){al$1(e);let r=Wo();return cl$2(r.onInput(o))})(`focus`,function(){al$1(e);let o=Wo();return cl$2(o.onFocus())})(`blur`,function(){al$1(e);let o=Wo();return cl$2(o.onBlur())})(`compositionstart`,function(){al$1(e);let o=Wo();return cl$2(o.onCompositionStart())})(`compositionend`,function(o){al$1(e);let r=Wo();return cl$2(r.onCompositionEnd(o))})(`cdkAutofill`,function(o){al$1(e);let r=Wo();return cl$2(r.autofilled.set(o.isAutofilled))}),Go()}if(i&2){let e=Wo();xo(`required`,e.effectiveRequired())(`disabled`,e.disabled())(`readOnly`,e.isReadonly())(`value`,e.displayedValue())(`spellcheck`,e.spellcheck())(`rows`,e.rows())(`cdkTextareaAutosize`,e.autosize())(`cdkAutosizeMinRows`,e.minRows())(`cdkAutosizeMaxRows`,e.maxRows()),vo(`id`,e.controlId())(`name`,e.name()||null)(`data-testid`,e.dataTestId())(`aria-label`,e.ariaLabel())(`aria-labelledby`,e.ariaLabelledBy())(`aria-describedby`,e.describedBy())(`aria-invalid`,e.showError())(`aria-busy`,e.pending()||e.loading())(`autocomplete`,e.autocomplete())(`inputmode`,e.inputmode())(`minlength`,e.minLength())(`maxlength`,e.maxLength())(`placeholder`,e.isFloating()||!e.label()?e.resolvedPlaceholder():``)}}function Gs(i,t){if(i&1){let e=pb();bo(0,`input`,11),br$1(`input`,function(o){al$1(e);let r=Wo();return cl$2(r.onInput(o))})(`focus`,function(){al$1(e);let o=Wo();return cl$2(o.onFocus())})(`blur`,function(){al$1(e);let o=Wo();return cl$2(o.onBlur())})(`compositionstart`,function(){al$1(e);let o=Wo();return cl$2(o.onCompositionStart())})(`compositionend`,function(o){al$1(e);let r=Wo();return cl$2(r.onCompositionEnd(o))})(`cdkAutofill`,function(o){al$1(e);let r=Wo();return cl$2(r.autofilled.set(o.isAutofilled))}),Go()}if(i&2){let e=Wo();xo(`required`,e.effectiveRequired())(`disabled`,e.disabled())(`readOnly`,e.isReadonly())(`value`,e.displayedValue())(`spellcheck`,e.spellcheck())(`type`,e.type()),vo(`id`,e.controlId())(`name`,e.name()||null)(`data-testid`,e.dataTestId())(`aria-label`,e.ariaLabel())(`aria-labelledby`,e.ariaLabelledBy())(`aria-describedby`,e.describedBy())(`aria-invalid`,e.showError())(`aria-busy`,e.pending()||e.loading())(`autocomplete`,e.autocomplete())(`inputmode`,e.inputmode())(`minlength`,e.minLength())(`maxlength`,e.maxLength())(`placeholder`,e.isFloating()||!e.label()?e.resolvedPlaceholder():``)(`min`,e.min())(`max`,e.max())(`step`,e.step())(`pattern`,e.pattern()[0]?.source)}}function Ks(i,t){if(i&1){let e=pb();bo(0,`div`,7)(1,`button`,12),br$1(`pointerdown`,function(o){al$1(e);let r=Wo();return cl$2(r.startSpin(-1,o))})(`pointerup`,function(){al$1(e);let o=Wo();return cl$2(o.stopSpin())})(`pointercancel`,function(){al$1(e);let o=Wo();return cl$2(o.stopSpin())})(`pointerleave`,function(){al$1(e);let o=Wo();return cl$2(o.stopSpin())})(`click`,function(o){al$1(e);let r=Wo();return o.detail===0&&r.startSpin(-1,o),cl$2(r.stopSpin())}),sd$1(2,`bx-icon`,13),Go(),bo(3,`button`,12),br$1(`pointerdown`,function(o){al$1(e);let r=Wo();return cl$2(r.startSpin(1,o))})(`pointerup`,function(){al$1(e);let o=Wo();return cl$2(o.stopSpin())})(`pointercancel`,function(){al$1(e);let o=Wo();return cl$2(o.stopSpin())})(`pointerleave`,function(){al$1(e);let o=Wo();return cl$2(o.stopSpin())})(`click`,function(o){al$1(e);let r=Wo();return o.detail===0&&r.startSpin(1,o),cl$2(r.stopSpin())}),sd$1(4,`bx-icon`,14),Go()()}if(i&2){let e=Wo();Xl$1(),xo(`disabled`,e.isSpinDownDisabled()),vo(`aria-label`,e.resolvedDecreaseLabel()),Xl$1(2),xo(`disabled`,e.isSpinUpDisabled()),vo(`aria-label`,e.resolvedIncreaseLabel())}}var $r=class i extends ve{i18n=b(VQ,{optional:!0});editingRaw=$(void 0);badInput=$(!1);labelText=Sz(ct);labelTruncated=G(()=>this.labelText()?.truncated()??!1);isFocused=$(!1);autofilled=$(!1);rawValue=zr(this.value,{parse:t=>{if(this.type()!==`number`)return{value:t};let e=t===``?null:Number(t);return this.badInput()||e!==null&&!Number.isFinite(e)?{error:{kind:`parse`}}:{value:e}},format:t=>t?.toString()??``});displayedValue=G(()=>this.editingRaw()??this.rawValue());isSpinDownDisabled=G(()=>this.disabled()||this.isReadonly()||Number(this.value()??0)<=(this.min()??-1/0));isSpinUpDisabled=G(()=>this.disabled()||this.isReadonly()||Number(this.value()??0)>=(this.max()??1/0));isFloating=G(()=>this.resolvedFloatLabel()===`always`||this.isFocused()||this.autofilled()||!!this.displayedValue()||this.multiline()||[`date`,`time`,`datetime-local`].includes(this.type()));resolvedDecreaseLabel=G(()=>LQ(this.decreaseLabel(),this.i18n));resolvedIncreaseLabel=G(()=>LQ(this.increaseLabel(),this.i18n));type=ee(`text`);min=ee(void 0,{transform:no});max=ee(void 0,{transform:no});minLength=ee(void 0);maxLength=ee(void 0);pattern=ee([]);step=ee(1);autocomplete=ee(void 0);inputmode=ee(void 0);spellcheck=ee(!0);multiline=ee(!1);rows=ee(3);autosize=ee(!0);minRows=ee(2);maxRows=ee(8);decreaseLabel=ee(`Decrease value`);increaseLabel=ee(`Increase value`);composing=!1;spinTimeout;spinInterval;constructor(){super(),b(ge).onDestroy(()=>this.stopSpin())}reset(){super.reset(),this.editingRaw.set(void 0),this.badInput.set(!1),this.stopSpin()}startSpin(t,e){e.preventDefault(),!(this.disabled()||this.isReadonly())&&(this.applyStep(t),this.spinTimeout=setTimeout(()=>{this.spinInterval=setInterval(()=>this.applyStep(t),80)},400))}stopSpin(){clearTimeout(this.spinTimeout),clearInterval(this.spinInterval)}clearPendingEdit(){super.clearPendingEdit(),this.editingRaw.set(void 0),this.badInput.set(!1)}onInput(t){if(this.composing||this.disabled()||this.isReadonly())return;let e=t.target;this.badInput.set(e.validity.badInput);let n=this.ngControl?.control?.updateOn;n===`blur`||n===`submit`?this.editingRaw.set(e.value):this.rawValue.set(e.value)}onCompositionStart(){this.composing=!0}onCompositionEnd(t){this.composing=!1,this.onInput(t)}onFocus(){this.isFocused.set(!0)}onBlur(){this.isFocused.set(!1),this.stopSpin(),this.markAsTouched()}commitPendingValue(t){let e=this.editingRaw();e===void 0||t===`blur`&&this.ngControl?.control?.updateOn===`submit`||(this.rawValue.set(e),this.editingRaw.set(void 0))}applyStep(t){let e=Number(this.displayedValue())||0,n=this.step()===`any`?1:Number(this.step()),o=Math.min(this.max()??1/0,Math.max(this.min()??-1/0,Number((e+t*n).toPrecision(12))));this.disabled()||this.isReadonly()||(this.badInput.set(!1),this.rawValue.set(String(o)))}static ɵfac=function(e){return new(e||i)};static ɵcmp=Fr$1({type:i,selectors:[[`bx-input-field`]],viewQuery:function(e,n){e&1&&Yy(n.labelText,ct,5),e&2&&fb()},inputs:{type:[1,`type`],min:[1,`min`],max:[1,`max`],minLength:[1,`minLength`],maxLength:[1,`maxLength`],pattern:[1,`pattern`],step:[1,`step`],autocomplete:[1,`autocomplete`],inputmode:[1,`inputmode`],spellcheck:[1,`spellcheck`],multiline:[1,`multiline`],rows:[1,`rows`],autosize:[1,`autosize`],minRows:[1,`minRows`],maxRows:[1,`maxRows`],decreaseLabel:[1,`decreaseLabel`],increaseLabel:[1,`increaseLabel`]},features:[yt],ngContentSelectors:Bs,decls:13,vars:30,consts:[[3,`control`,`inline`,`tooltip`,`loading`,`hint`,`hintEnd`,`subscriptSizing`,`forId`],[`bxSurface`,``,1,`bx-input-wrapper`],[`bxTooltipTouch`,`longpress`,`placement`,`top`,1,`bx-input-container`,3,`bxTooltip`],[1,`bx-floating-label`],[`cdkAutofill`,``,1,`bx-native-input`,3,`required`,`disabled`,`readOnly`,`value`,`spellcheck`,`rows`,`cdkTextareaAutosize`,`cdkAutosizeMinRows`,`cdkAutosizeMaxRows`],[`cdkAutofill`,``,1,`bx-native-input`,3,`required`,`disabled`,`readOnly`,`value`,`spellcheck`,`type`],[1,`bx-input-actions`],[1,`bx-spinners-group`],[`bxTruncate`,``,1,`bx-input-label-text`],[`aria-hidden`,`true`,1,`bx-field-required`],[`cdkAutofill`,``,1,`bx-native-input`,3,`input`,`focus`,`blur`,`compositionstart`,`compositionend`,`cdkAutofill`,`required`,`disabled`,`readOnly`,`value`,`spellcheck`,`rows`,`cdkTextareaAutosize`,`cdkAutosizeMinRows`,`cdkAutosizeMaxRows`],[`cdkAutofill`,``,1,`bx-native-input`,3,`input`,`focus`,`blur`,`compositionstart`,`compositionend`,`cdkAutofill`,`required`,`disabled`,`readOnly`,`value`,`spellcheck`,`type`],[`type`,`button`,1,`bx-spin-btn`,3,`pointerdown`,`pointerup`,`pointercancel`,`pointerleave`,`click`,`disabled`],[`name`,`minus`,`size`,`16`],[`name`,`plus`,`size`,`16`]],template:function(e,n){e&1&&(ld$1(zs),bo(0,`bx-form-field`,0)(1,`div`,1),dd$1(2),bo(3,`div`,2),SA(4,`bxTruncatedText`),od$1(5,js,4,3,`label`,3),od$1(6,$s,1,22,`textarea`,4)(7,Gs,1,23,`input`,5),Go(),bo(8,`div`,6),dd$1(9,1),od$1(10,Ks,5,4,`div`,7),Go()(),dd$1(11,2,Hs),dd$1(12,3,Ws),Go()),e&2&&(xo(`control`,n.fieldControl)(`inline`,!0)(`tooltip`,n.tooltip())(`loading`,n.loading())(`hint`,n.hint())(`hintEnd`,n.hintEnd())(`subscriptSizing`,n.resolvedSubscriptSizing())(`forId`,n.controlId()),Xl$1(),tr(`is-invalid`,n.showError())(`is-outline`,n.resolvedAppearance()===`outline`)(`is-disabled`,n.disabled())(`is-readonly`,n.isReadonly())(`is-keyboard-focused`,n.keyboardFocused())(`has-spinners`,n.type()===`number`&&!n.multiline())(`is-floating`,n.isFloating()),Xl$1(2),xo(`bxTooltip`,AA(4,26,n.resolvedLabel(),n.labelTruncated(),n.resolvedTooltipOnTruncate())),Xl$1(2),nd$1(n.label()?5:-1),Xl$1(),nd$1(n.multiline()?6:7),Xl$1(4),nd$1(n.type()===`number`&&!n.multiline()?10:-1))},dependencies:[GC,ne,ZC,jn,jr,Pt,ct,on$1],styles:[`
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
.bx-input-wrapper[data-bx-surface][_ngcontent-%COMP%]   .bx-input-actions[_ngcontent-%COMP%] {
  border-radius: max(0px, var(--%NS%bx-rounded-lg, 0.75rem) - (var(--%NS%bx-border-width, 1px)));
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
.bx-input-wrapper.is-outline[_ngcontent-%COMP%]   .bx-input-actions[_ngcontent-%COMP%] {
  border-radius: max(0px, var(--%NS%bx-field-radius, var(--%NS%bx-rounded-md, 0.5rem)) - (var(--%NS%bx-border-width, 1px)));
}`]})};var $n=class i{radios=/* @__PURE__ */ new Set;select(t){for(let e of this.radios)e!==t&&e.sharesGroup(t)&&e.writeValue(t.value())}static ɵfac=function(e){return new(e||i)};static ɵprov=B({token:i,factory:i.ɵfac,providedIn:`root`})};var Gn=new T(`BX_RADIO_GROUP`);var Zs=[`*`];function Xs(i,t){i&1&&(bo(0,`span`,7),lA(1,`*`),Go())}function Us(i,t){if(i&1&&(bo(0,`span`,5),dd$1(1),lA(2),od$1(3,Xs,2,0,`span`,7),Go()),i&2){let e=Wo();Xl$1(2),mb(``,e.resolvedLabel(),` `),Xl$1(),nd$1(e.isFieldRequired()||e.group?.required()?3:-1)}}function Ys(i,t){if(i&1&&(bo(0,`span`,6),lA(1),Go()),i&2){let e=Wo();xo(`id`,e.inputId()+`-readonly`),Xl$1(),ik(e.resolvedReadonlyDescription())}}var Gr=class i extends zC{radioRegistry=b($n);formSettingsService=b(Et);i18n=b(VQ,{optional:!0});group=b(Gn,{optional:!0});inputId=G(()=>`bx-radio-${qK()}`);resolvedLabel=G(()=>{this.i18n?.version?.();let t=this.label();if(t)return UC(t)?this.i18n?.translate(t.key)??t.key:t});effectiveDisabled=G(()=>this.isDisabled()||!!this.group?.disabled());effectiveName=G(()=>this.group?.groupName()??this.name());resolvedReadonlyDescription=G(()=>LQ(this.readonlyDescription(),this.i18n));radioDescribedBy=G(()=>[this.group?.describedBy(),this.isReadonly()||this.group?.isReadonly()?`${this.inputId()}-readonly`:void 0].filter(Boolean).join(` `)||null);selected=G(()=>(this.group?this.group.value():this.internalValue())===this.value());resolvedSubscriptSizing=G(()=>this.subscriptSizing()??this.formSettingsService.settings().subscriptSizing);readonlyDescription=ee(`Read only`);labelPosition=ee(`after`);subscriptSizing=ee(void 0);value=ee.required();name=ee(``);showTooltip=!1;constructor(){super(),this.radioRegistry.radios.add(this),b(ge).onDestroy(()=>this.radioRegistry.radios.delete(this))}sharesGroup(t){let e=this.ngControl?.control;return e&&e===t.ngControl?.control?!0:!!this.name()&&this.name()===t.name()&&this.nativeElement.closest(`form`)===t.nativeElement.closest(`form`)&&e?.parent===t.ngControl?.control?.parent}onSelect(){if(this.effectiveDisabled()||this.isReadonly()||this.group?.isReadonly()){for(let t of this.radioRegistry.radios){if(t!==this&&(this.group?t.group!==this.group:!this.sharesGroup(t)))continue;let e=t.nativeElement.querySelector(`input[type="radio"]`);e&&(e.checked=t.selected())}return}this.group?this.group.select(this.value()):(this.updateValue(this.value()),this.radioRegistry.select(this))}onReadonlyClick(t){(this.isReadonly()||this.group?.isReadonly())&&t.preventDefault()}onControlPointerDown(){(this.isReadonly()||this.group?.isReadonly())&&this.keyboardFocused.set(!1)}onReadonlyKeyDown(t){if(!(this.isReadonly()||this.group?.isReadonly())||![`ArrowLeft`,`ArrowRight`,`ArrowUp`,`ArrowDown`,` `].includes(t.key)||(t.preventDefault(),t.key===` `))return;let e=t.target,n=(e.name?Array.from(e.ownerDocument.querySelectorAll(`input[type="radio"]`)):[e]).filter(r=>!r.disabled&&r.name===e.name&&r.form===e.form&&(!this.group||r.closest(`[role="radiogroup"]`)===e.closest(`[role="radiogroup"]`))),o=t.key===`ArrowLeft`||t.key===`ArrowUp`?-1:1;n[(n.indexOf(e)+o+n.length)%n.length]?.focus()}onBlur(){this.group?this.group.markTouched():this.markAsTouched()}static ɵfac=function(e){return new(e||i)};static ɵcmp=Fr$1({type:i,selectors:[[`bx-radio`]],inputs:{readonlyDescription:[1,`readonlyDescription`],labelPosition:[1,`labelPosition`],subscriptSizing:[1,`subscriptSizing`],value:[1,`value`],name:[1,`name`]},features:[yt],ngContentSelectors:Zs,decls:7,vars:29,consts:[[3,`inline`,`tooltip`,`error`,`loading`,`forId`,`subscriptSizing`],[1,`bx-inline-wrapper`],[`type`,`radio`,1,`bx-visually-hidden`,3,`click`,`keydown`,`change`,`blur`,`required`,`disabled`,`checked`],[`bxSurface`,``,1,`bx-radio-circle`,3,`bxSurfaceEmission`],[1,`bx-radio-inner`],[1,`bx-inline-label`],[1,`bx-visually-hidden`,3,`id`],[1,`bx-inline-required`]],template:function(e,n){e&1&&(ld$1(),bo(0,`bx-form-field`,0)(1,`label`,1)(2,`input`,2),br$1(`click`,function(r){return n.onReadonlyClick(r)})(`keydown`,function(r){return n.onReadonlyKeyDown(r)})(`change`,function(){return n.onSelect()})(`blur`,function(){return n.onBlur()}),Go(),bo(3,`div`,3),sd$1(4,`div`,4),Go(),od$1(5,Us,4,2,`span`,5),Go(),od$1(6,Ys,2,2,`span`,6),Go()),e&2&&(xo(`inline`,!0)(`tooltip`,n.tooltip())(`error`,n.errorMessage)(`loading`,n.loading())(`forId`,n.inputId())(`subscriptSizing`,n.resolvedSubscriptSizing()),Xl$1(),tr(`is-disabled`,n.effectiveDisabled())(`is-readonly`,n.isReadonly()||!!n.group?.isReadonly())(`is-keyboard-focused`,n.keyboardFocused())(`label-before`,n.labelPosition()===`before`),Xl$1(),xo(`required`,n.required()||!!n.group?.required())(`disabled`,n.effectiveDisabled())(`checked`,n.selected()),vo(`id`,n.inputId())(`name`,n.effectiveName()||null)(`data-testid`,n.dataTestId())(`aria-label`,n.ariaLabel())(`aria-describedby`,n.radioDescribedBy()),Xl$1(),tr(`is-checked`,n.selected())(`is-invalid`,!!n.errorMessage),xo(`bxSurfaceEmission`,n.errorMessage?`var(--bx-text-danger)`:`var(--bx-accent)`),Xl$1(2),nd$1(n.resolvedLabel()?5:-1),Xl$1(),nd$1(n.isReadonly()||n.group?.isReadonly()?6:-1))},dependencies:[GC,Wk,ne],styles:[`
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
}`],changeDetection:1})};var Qs=[[[`bx-error`]],[[`bx-hint`]],[[``,`bxIconStart`,``]]];var Js=[`bx-error`,`bx-hint`,`[bxIconStart]`];var el=[`ngProjectAs`,`bx-error`,5,[`bx-error`]];var tl=[`ngProjectAs`,`bx-hint`,5,[`bx-hint`]];function nl(i,t){i&1&&sd$1(0,`bx-loading-spinner`,11),i&2&&xo(`size`,16)(`decorative`,!0)}function il(i,t){i&1&&sd$1(0,`bx-icon`,12)}function ol(i,t){i&1&&dd$1(0,2,null,il,1,0)}function rl(i,t){if(i&1&&od$1(0,nl,1,2,`bx-loading-spinner`,11)(1,ol,2,0),i&2){let e=t.$implicit;nd$1(e?0:1)}}function al(i,t){if(i&1){let e=pb();bo(0,`button`,13),br$1(`click`,function(){al$1(e);let o=Wo();return cl$2(o.clear())}),sd$1(1,`bx-icon`,14),Go()}if(i&2){let e=Wo();xo(`disabled`,e.disabled()||e.isReadonly()),vo(`aria-label`,e.resolvedClearLabel())}}function sl(i,t){if(i&1&&(bo(0,`span`,15),lA(1),Go(),bo(2,`span`,15),lA(3),Go()),i&2){let e=Wo();Xl$1(),ik(e.resolvedRetainedError()),Xl$1(2),ik(e.resolvedLoadingLabel()||e.resolvedLoadingAriaLabel())}}function ll(i,t){if(i&1){let e=pb();bo(0,`button`,16),br$1(`click`,function(){al$1(e);let o=Wo();return cl$2(o.retrySearch())}),sd$1(1,`bx-icon`,17),lA(2),Go()}if(i&2){let e=Wo();JT(e.retryConfig().buttonClass??``),xo(`variant`,e.retryConfig().variant??`text`)(`color`,e.retryConfig().color??`primary`)(`outlined`,e.retryConfig().outlined??!1)(`disabled`,e.disabled()||e.isReadonly())(`loading`,e.isBusy()),vo(`aria-label`,e.resolvedRetryAriaLabel()),Xl$1(2),mb(``,e.resolvedRetryLabel(),` `)}}var zt=class i extends ve{i18n=b(VQ,{optional:!0});retryError=$(void 0);retrying=G(()=>this.retryError()!==void 0);resolvedClearLabel=G(()=>LQ(this.clearLabel(),this.i18n));resolvedLoadError=G(()=>LQ(this.loadError(),this.i18n));resolvedLoadingLabel=G(()=>LQ(this.loadingLabel(),this.i18n));resolvedLoadingAriaLabel=G(()=>LQ(this.loadingAriaLabel(),this.i18n));resolvedRetryLabel=G(()=>LQ(this.retryLabel(),this.i18n));resolvedRetryAriaLabel=G(()=>LQ(this.retryConfig().ariaLabel,this.i18n)||this.resolvedRetryLabel());resolvedRetainedError=G(()=>LQ(this.retryError()??this.loadError(),this.i18n));isBusy=G(()=>this.loading()||this.pending());showRetry=G(()=>!!this.loadError()||this.retrying());showStatus=G(()=>!!this.resolvedLoadError()||this.isBusy()&&(!!this.resolvedLoadingLabel()||this.showRetry()));searchDescribedBy=G(()=>`${this.describedBy()} ${this.controlId()}-search-status`);isCompact=G(()=>!!this.label()||this.compact());clearLabel=ee(`Clear search`);autocomplete=ee(`off`);loadError=ee(void 0);loadingLabel=ee(void 0);loadingAriaLabel=ee(`Searching`);retryLabel=ee(`Retry search`);retryConfig=ee({});compact=ee(!1);search=Pk();retry=Pk();composing=!1;constructor(){super(),We$1(()=>{this.retrying()&&!this.loading()&&this.retryError.set(void 0)})}clear(){this.disabled()||this.isReadonly()||(this.retryError.set(void 0),this.updateValue(``),this.search.emit(``),this.focus())}retrySearch(){this.disabled()||this.isReadonly()||this.isBusy()||this.retrying()||!this.loadError()||(this.retryError.set(this.loadError()),this.focus(),this.retry.emit(this.internalValue()??``))}onInput(t){if(this.composing||this.disabled()||this.isReadonly())return;let e=t.target.value;this.retryError.set(void 0),this.updateValue(e),this.search.emit(e)}onCompositionStart(){this.composing=!0}onCompositionEnd(t){this.composing=!1,this.onInput(t)}onBlur(){this.markAsTouched()}static ɵfac=function(e){return new(e||i)};static ɵcmp=Fr$1({type:i,selectors:[[`bx-search-input`]],inputs:{clearLabel:[1,`clearLabel`],autocomplete:[1,`autocomplete`],loadError:[1,`loadError`],loadingLabel:[1,`loadingLabel`],loadingAriaLabel:[1,`loadingAriaLabel`],retryLabel:[1,`retryLabel`],retryConfig:[1,`retryConfig`],compact:[1,`compact`]},outputs:{search:`search`,retry:`retry`},features:[yt],ngContentSelectors:Js,decls:17,vars:50,consts:[[`searchOverflow`,`bxTruncate`],[3,`control`,`label`,`tooltip`,`showLoadingIndicator`,`hint`,`hintEnd`,`hideRequiredMarker`,`subscriptSizing`,`forId`],[`bxSurface`,``,`bxTooltipTouch`,`longpress`,`placement`,`top`,1,`bx-search-input-wrapper`,3,`bxTooltip`],[`aria-hidden`,`true`,1,`bx-search-icon-left`],[3,`value`],[`type`,`search`,`bxTruncate`,``,1,`bx-native-search-input`,3,`input`,`blur`,`compositionstart`,`compositionend`,`id`,`placeholder`,`required`,`readOnly`,`disabled`,`value`],[`type`,`button`,1,`bx-search-clear-btn`,3,`disabled`],[1,`bx-search-feedback`],[1,`bx-search-status`],[`role`,`status`,3,`id`],[`bx-button`,``,`type`,`button`,3,`variant`,`color`,`outlined`,`class`,`disabled`,`loading`],[3,`size`,`decorative`],[`name`,`search`,`size`,`16`],[`type`,`button`,1,`bx-search-clear-btn`,3,`click`,`disabled`],[`name`,`x`,`size`,`16`],[`aria-hidden`,`true`,1,`bx-search-status-reserve`],[`bx-button`,``,`type`,`button`,3,`click`,`variant`,`color`,`outlined`,`disabled`,`loading`],[`name`,`rotate-cw`,`size`,`16`]],template:function(e,n){if(e&1&&(ld$1(Qs),bo(0,`bx-form-field`,1)(1,`div`,2),SA(2,`bxTruncatedText`),bo(3,`span`,3)(4,`bx-visual-transition`,4),rd$1(5,rl,2,1,`ng-template`),Go()(),bo(6,`input`,5,0),br$1(`input`,function(r){return n.onInput(r)})(`blur`,function(){return n.onBlur()})(`compositionstart`,function(){return n.onCompositionStart()})(`compositionend`,function(r){return n.onCompositionEnd(r)}),Go(),od$1(8,al,2,2,`button`,6),Go(),bo(9,`div`,7)(10,`div`,8),od$1(11,sl,4,2),bo(12,`span`,9),lA(13),Go()(),od$1(14,ll,3,9,`button`,10),Go(),dd$1(15,0,el),dd$1(16,1,tl),Go()),e&2){let o=FT(7);xo(`control`,n.fieldControl)(`label`,n.label())(`tooltip`,n.tooltip())(`showLoadingIndicator`,!1)(`hint`,n.hint())(`hintEnd`,n.hintEnd())(`hideRequiredMarker`,n.resolvedHideRequiredMarker())(`subscriptSizing`,n.resolvedSubscriptSizing())(`forId`,n.controlId()),Xl$1(),tr(`is-compact`,n.isCompact())(`is-invalid`,n.showError())(`is-disabled`,n.disabled())(`is-readonly`,n.isReadonly())(`is-keyboard-focused`,n.keyboardFocused()),xo(`bxTooltip`,AA(2,46,o.text(),o.truncated(),n.resolvedTooltipOnTruncate())),Xl$1(3),xo(`value`,n.isBusy()&&!n.showRetry()),Xl$1(2),xo(`id`,n.controlId())(`placeholder`,n.resolvedPlaceholder())(`required`,n.effectiveRequired())(`readOnly`,n.isReadonly())(`disabled`,n.disabled())(`value`,n.internalValue()??``),vo(`name`,n.name()||null)(`data-testid`,n.dataTestId())(`autocomplete`,n.autocomplete())(`aria-label`,n.ariaLabel())(`aria-labelledby`,n.ariaLabelledBy())(`aria-describedby`,n.searchDescribedBy())(`aria-busy`,n.isBusy())(`aria-invalid`,n.showError()),Xl$1(2),nd$1(n.internalValue()&&!n.isReadonly()?8:-1),Xl$1(),tr(`has-status`,n.showStatus()),Xl$1(),tr(`cdk-visually-hidden`,!n.showStatus()),Xl$1(),nd$1(n.showRetry()?11:-1),Xl$1(),tr(`bx-search-error`,!n.isBusy()&&!!n.resolvedLoadError()),xo(`id`,n.controlId()+`-search-status`),Xl$1(),ik(n.isBusy()?n.resolvedLoadingLabel()||n.resolvedLoadingAriaLabel():n.resolvedLoadError()),Xl$1(),nd$1(n.showRetry()?14:-1)}},dependencies:[Wu$1,GC,ne,ZC,Et$1,xe,Pt,ct,on$1],styles:[`
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
}`]})};function dl(i,t){if(i&1&&(bo(0,`span`,1),lA(1),Go()),i&2){let e=Wo();Xl$1(),ik(e.errorText())}}function cl(i,t){if(i&1&&$s$1(0,2),i&2){let e=Wo();xo(`ngTemplateOutlet`,t)(`ngTemplateOutletContext`,e.context())}}function ul(i,t){i&1&&sd$1(0,`bx-icon`,5)}function pl(i,t){if(i&1){let e=pb();bo(0,`button`,4),br$1(`click`,function(){al$1(e);let o=Wo();return cl$2(o.request.emit())}),od$1(1,ul,1,0,`bx-icon`,5),lA(2),Go()}if(i&2){let e=Wo();JT(e.config().buttonClass??``),xo(`variant`,e.config().variant??`text`)(`color`,e.config().color??`primary`)(`outlined`,e.config().outlined??!1)(`disabled`,e.disabled())(`loading`,e.loading()),vo(`aria-label`,e.accessibleLabel()),Xl$1(),nd$1(e.retry()?1:-1),Xl$1(),mb(` `,e.text(),` `)}}var Kn=class i{i18n=b(VQ,{optional:!0});text=G(()=>{let t=this.config(),e=LQ(t.text??`Load more`,this.i18n),n=t.retryText,o=LQ(n,this.i18n),r=!!n&&(!UC(n)||o!==n.key);return this.loading()?LQ(t.loadingText??`Loading`,this.i18n):this.retry()&&r?o:e});accessibleLabel=G(()=>LQ(this.config().ariaLabel,this.i18n)||this.text());errorText=G(()=>LQ(this.error(),this.i18n));context=G(()=>({$implicit:this.text(),loading:this.loading(),disabled:this.disabled()||this.loading(),request:()=>this.request.emit()}));retry=ee(!1);visible=ee(!1);loading=ee(!1);disabled=ee(!1);error=ee(void 0);config=ee({});buttonTemplate=ee(void 0);request=Pk();static ɵfac=function(e){return new(e||i)};static ɵcmp=Fr$1({type:i,selectors:[[`bx-load-more-footer`]],hostVars:2,hostBindings:function(e,n){e&2&&(Uy(`hidden`,!n.visible()),vo(`aria-busy`,n.loading()?`true`:null))},inputs:{retry:[1,`retry`],visible:[1,`visible`],loading:[1,`loading`],disabled:[1,`disabled`],error:[1,`error`],config:[1,`config`],buttonTemplate:[1,`buttonTemplate`]},outputs:{request:`request`},decls:4,vars:4,consts:[[1,`bx-load-more-footer`],[`role`,`status`,1,`bx-load-more-error`],[3,`ngTemplateOutlet`,`ngTemplateOutletContext`],[`bx-button`,``,`type`,`button`,3,`variant`,`color`,`outlined`,`class`,`disabled`,`loading`],[`bx-button`,``,`type`,`button`,3,`click`,`variant`,`color`,`outlined`,`disabled`,`loading`],[`name`,`rotate-cw`,`size`,`16`]],template:function(e,n){if(e&1&&(bo(0,`div`,0),od$1(1,dl,2,1,`span`,1),od$1(2,cl,1,2,`ng-container`,2)(3,pl,3,10,`button`,3),Go()),e&2){let o;JT(n.config().footerClass??``),Xl$1(),nd$1(n.errorText()?1:-1),Xl$1(),nd$1((o=n.buttonTemplate())?2:3,o)}},dependencies:[xe,Ta$1,ZC],styles:[`
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
}`]})};var We=class i{nativeElement=b(ke).nativeElement;viewContainerRef=b(fr$1);ngZone=b(le);destroyRef=b(ge);overflowing=$(!1);requested=$(!1);retrying=$(!1);keepVisible=$(!1);actionVisible=G(()=>!this.loadMoreSuppressed()&&(this.loadMoreHasMore()||!!this.loadMoreError()||this.keepVisible()&&this.loadMoreLoading())&&(this.loadMoreConfig().buttonMode===`always`||!this.overflowing()||this.keepVisible()||!!this.loadMoreError()));loadMoreHasMore=ee(!1);loadMoreLoading=ee(!1);loadMoreSuppressed=ee(!1);loadMoreDisabled=ee(!1);loadMoreError=ee(void 0);loadMoreConfig=ee({});loadMoreTemplate=ee(void 0);loadMoreRevision=ee(void 0);loadMore=Pk();footer;wasLoading=!1;previousRevision;constructor(){er(()=>this.mount()),Vk(()=>{let t=this.loadMoreLoading(),e=this.loadMoreRevision();(this.wasLoading&&!t||!t&&this.previousRevision!==e)&&this.complete(),this.wasLoading=t,this.previousRevision=e,this.updateFooter()})}complete(){this.requested.set(!1),this.retrying.set(!1),this.keepVisible.set(!1)}request(t=`button`){this.canRequest(t)&&(this.requested.set(!0),this.retrying.set(!!this.loadMoreError()),this.keepVisible.set(t!==`scroll`),this.loadMore.emit({source:this.loadMoreError()?`retry`:t}))}canRequest(t){return!this.loadMoreSuppressed()&&(this.loadMoreHasMore()||!!this.loadMoreError())&&!this.loadMoreDisabled()&&!this.loadMoreLoading()&&!this.requested()&&(t!==`scroll`||!this.loadMoreError())}mount(){this.footer=this.viewContainerRef.createComponent(Kn),this.nativeElement.append(this.footer.location.nativeElement),this.footer.instance.request.subscribe(()=>this.request()),this.ngZone.runOutsideAngular(()=>{let t=WQ(this.nativeElement,this.nativeElement,()=>{let e=this.footer?.location.nativeElement?.offsetHeight??0;GQ(this.nativeElement,this.nativeElement,e).distance<=(this.loadMoreConfig().threshold??32)&&this.canRequest(`scroll`)&&this.ngZone.run(()=>this.request(`scroll`))},()=>this.measure());this.destroyRef.onDestroy(()=>{t(),this.footer?.destroy()})}),this.measure(),this.updateFooter()}measure(){let t=this.footer?.location.nativeElement?.offsetHeight??0,{overflowing:e}=GQ(this.nativeElement,this.nativeElement,t);e!==this.overflowing()&&this.ngZone.run(()=>this.overflowing.set(e))}updateFooter(){if(!this.footer)return;let t=this.actionVisible(),e=this.footer.location.nativeElement;!t&&e.contains(this.nativeElement.ownerDocument.activeElement)&&(this.nativeElement.hasAttribute(`tabindex`)||this.nativeElement.setAttribute(`tabindex`,`-1`),this.nativeElement.focus({preventScroll:!0})),this.footer.setInput(`visible`,t),this.footer.setInput(`loading`,this.loadMoreLoading()),this.footer.setInput(`disabled`,this.loadMoreDisabled()||this.requested()&&!this.loadMoreLoading()),this.footer.setInput(`retry`,!!this.loadMoreError()||this.retrying()),this.footer.setInput(`error`,this.loadMoreError()),this.footer.setInput(`config`,this.loadMoreConfig()),this.footer.setInput(`buttonTemplate`,this.loadMoreTemplate())}static ɵfac=function(e){return new(e||i)};static ɵdir=pe({type:i,selectors:[[``,`bxLoadMore`,``]],inputs:{loadMoreHasMore:[1,`loadMoreHasMore`],loadMoreLoading:[1,`loadMoreLoading`],loadMoreSuppressed:[1,`loadMoreSuppressed`],loadMoreDisabled:[1,`loadMoreDisabled`],loadMoreError:[1,`loadMoreError`],loadMoreConfig:[1,`loadMoreConfig`],loadMoreTemplate:[1,`loadMoreTemplate`],loadMoreRevision:[1,`loadMoreRevision`]},outputs:{loadMore:`loadMore`},exportAs:[`bxLoadMore`]})};var Zn=class{constructor(t,e){this.element=t;this.contents=e}element;contents;styles=/* @__PURE__ */ new Map;motion;completion;originalInert=null;originalHidden=null;captured=!1;start(t,e,n){this.restore();let o=this.element.ownerDocument.defaultView?.getComputedStyle(this.element),r=this.element.parentElement,a=r&&this.element.ownerDocument.defaultView?.getComputedStyle(r),g=(r?Array.from(r.children).filter(me=>me!==this.element&&me.getClientRects().length>0):[]).length&&parseFloat(a?.rowGap??`0`)||0,S=this.element.offsetHeight,P=this.element.clientWidth*(t===`right`?.3:-.3),O=parseFloat(o?.paddingBlockStart??`0`)||0,E=parseFloat(o?.paddingBlockEnd??`0`)||0,z=parseFloat(o?.borderBlockStartWidth??`0`)||0,U=parseFloat(o?.borderBlockEndWidth??`0`)||0,Y=parseFloat(o?.marginBlockStart??`0`)||0,F=parseFloat(o?.marginBlockEnd??`0`)||0,ee=parseFloat(o?.opacity??`1`);this.completion=n,this.originalInert=this.element.getAttribute(`inert`),this.originalHidden=this.element.getAttribute(`aria-hidden`),this.captured=!0,this.element.setAttribute(`inert`,``),this.element.setAttribute(`aria-hidden`,`true`),this.style(this.element,`overflow`,`clip`),this.style(this.element,`box-sizing`,`border-box`),this.style(this.element,`min-block-size`,`0`);for(let me of this.contents)this.style(me,`block-size`,`${me.offsetHeight}px`);if(e){this.finish();return}this.motion=Zn$1([0],([me],[ln])=>{let qt=Math.max(0,Math.min(1,me/1e3)),Ue=Math.min(1,qt/.55),jt=Math.max(0,(qt-.15)/.85),Le=1-jt;this.style(this.element,`opacity`,String(ee*(1-Ue))),this.style(this.element,`block-size`,`${S*Le}px`),this.style(this.element,`padding-block-start`,`${O*Le}px`),this.style(this.element,`padding-block-end`,`${E*Le}px`),this.style(this.element,`border-block-start-width`,`${z*Le}px`),this.style(this.element,`border-block-end-width`,`${U*Le}px`),this.style(this.element,`margin-block-start`,`${Y*Le}px`),this.style(this.element,`margin-block-end`,`${F*Le-g*jt}px`);for(let xa of this.contents)this.style(xa,`translate`,`${P*Ue}px 0`);Math.abs(1e3-me)<1&&Math.abs(ln)<10&&this.finish()},vr$1.snappy),this.motion.retarget([1e3])}finish(){let t=this.completion;t&&(this.completion=void 0,this.motion?.destroy(),this.motion=void 0,this.style(this.element,`display`,`none`),t())}restore(){this.completion=void 0,this.motion?.destroy(),this.motion=void 0;for(let[t,e]of this.styles)for(let[n,o]of e)o?t.style.setProperty(n,o):t.style.removeProperty(n);this.styles.clear(),this.captured&&(this.originalInert===null?this.element.removeAttribute(`inert`):this.element.setAttribute(`inert`,this.originalInert),this.originalHidden===null?this.element.removeAttribute(`aria-hidden`):this.element.setAttribute(`aria-hidden`,this.originalHidden)),this.captured=!1}style(t,e,n){let o=this.styles.get(t);o||(o=/* @__PURE__ */ new Map,this.styles.set(t,o)),o.has(e)||o.set(e,t.style.getPropertyValue(e)),Kn$1(t,{[e]:n})}};var Kr={primary:`var(--bx-text-brand)`,accent:`var(--bx-text-accent)`,success:`var(--bx-text-success-readable, var(--bx-text-success))`,danger:`var(--bx-text-danger-readable, var(--bx-text-danger))`,info:`var(--bx-text-info-readable, var(--bx-text-info))`,warn:`var(--bx-text-warn-readable, var(--bx-text-warn))`,grayscale:`var(--bx-text-primary)`};var Xn=80;var Un=400;var Yn={staggerMs:50,maxStaggerMs:150,hiddenScale:.72,singleHiddenScale:.97,pop:.16,singlePop:.015,strain:.025,singleStrain:.008,velocityWeight:.1,travel:.12};var qe={armThreshold:.65,commitThreshold:.78,destructiveCommitThreshold:.94,resistance:1.25,destructiveResistance:8,destructivePlateau:.15,resistanceEnd:.4,destructiveResistanceEnd:.9};var bl=[`wideProbe`];var ml=[`probe`];var gl=[`pagerProbe`];var hl=[`captionProbe`];var fl=[`fullProbe`];var xl=[`gapProbe`];var vl=[`closeProbe`];var Zr=(i,t)=>t.id;function yl(i,t){if(i&1){let e=pb();bo(0,`span`,25),br$1(`pointerdown`,function(o){al$1(e);let r=Wo().$implicit,a=Wo();return cl$2(!a.canScroll(r,-1)&&o.preventDefault())}),bo(1,`button`,26),br$1(`click`,function(o){al$1(e);let r=Wo().$implicit,a=Wo();return o.stopPropagation(),cl$2(a.scrollActions(r,-1))}),sd$1(2,`bx-icon`,27),Go()()}if(i&2){let e=Wo().$implicit,n=Wo();xo(`inert`,n.fullActionId()!==null),Xl$1(),xo(`disabled`,!n.canScroll(e,-1)),vo(`tabindex`,n.interactive()?null:-1)(`aria-label`,n.previousText())}}function Sl(i,t){if(i&1&&(bo(0,`span`,32,10),SA(2,`bxTruncatedText`),lA(3),Go()),i&2){let e=FT(1),n=Wo().$implicit,o=Wo(2);xo(`bxTooltip`,TA(2,2,o.actionText(n),e.truncated())),Xl$1(3),ik(o.actionText(n))}}function _l(i,t){if(i&1){let e=pb();bo(0,`div`,28)(1,`div`,29)(2,`button`,30),br$1(`click`,function(o){let r=al$1(e).$implicit,a=Wo(2);return cl$2(a.invoke(r,`swipe`,o))}),sd$1(3,`bx-icon`,31),od$1(4,Sl,4,5,`span`,32),Go(),bo(5,`label`,33,9),SA(7,`bxTruncatedText`),lA(8),Go()()()}if(i&2){let e=t.$implicit,n=FT(6),o=Wo().$implicit,r=Wo();tr(`is-edge`,r.edge(o,e))(`is-unavailable`,r.disabled()||!!e.disabled||r.busy(e)),xo(`bxTooltipDwell`,r.tooltipDwell())(`bxTooltip`,r.compact()?r.actionText(e):``)(`inert`,r.fullActionId()!==null&&r.fullActionId()!==e.id),Xl$1(2),xo(`id`,r.actionId(o,e))(`color`,e.color??(e.role===`destructive`?`danger`:`primary`))(`disabled`,r.disabled()||!!e.disabled)(`loading`,r.busy(e)),vo(`tabindex`,r.interactive()?null:-1)(`role`,r.origin().getAttribute(`role`)===`menuitem`?`menuitem`:null)(`aria-label`,r.failed().includes(e.id)?r.actionText(e):r.text(e.ariaLabel??e.label)),Xl$1(),xo(`name`,r.failed().includes(e.id)?e.retryIcon??`rotate-cw`:r.completedAction()?.id===e.id?`check`:e.icon)(`contentTemplate`,!r.failed().includes(e.id)&&r.completedAction()?.id!==e.id?e.iconTemplate:void 0)(`size`,r.iconSize()),Xl$1(),nd$1(r.fullActionId()===e.id&&r.failed().includes(e.id)?4:-1),Xl$1(),xo(`bxTruncate`,!r.compact())(`hidden`,r.compact())(`bxTooltip`,TA(7,23,r.actionText(e),n.truncated()))(`for`,r.actionId(o,e)),Xl$1(3),ik(r.actionText(e))}}function Cl(i,t){if(i&1){let e=pb();bo(0,`span`,25),br$1(`pointerdown`,function(o){al$1(e);let r=Wo().$implicit,a=Wo();return cl$2(!a.canScroll(r,1)&&o.preventDefault())}),bo(1,`button`,26),br$1(`click`,function(o){al$1(e);let r=Wo().$implicit,a=Wo();return o.stopPropagation(),cl$2(a.scrollActions(r,1))}),sd$1(2,`bx-icon`,34),Go()()}if(i&2){let e=Wo().$implicit,n=Wo();xo(`inert`,n.fullActionId()!==null),Xl$1(),xo(`disabled`,!n.canScroll(e,1)),vo(`tabindex`,n.interactive()?null:-1)(`aria-label`,n.nextText())}}function Ml(i,t){if(i&1){let e=pb();bo(0,`div`,21),od$1(1,yl,3,4,`span`,22),bo(2,`div`,23,8),br$1(`scroll`,function(){al$1(e);let o=Wo();return cl$2(o.updateScroll())}),ab(4,_l,9,26,`div`,24,Zr),Go(),od$1(6,Cl,3,4,`span`,22),Go()}if(i&2){let e=t.$implicit,n=Wo();ka$1(`visibility`,n.side()===e?`visible`:`hidden`)(`--%NS%bx-action-reveal`,n.reveal()+`px`)(`inline-size`,n.laneWidth(e),`px`),tr(`has-overflow`,n.overflows(e))(`is-stretching`,n.side()===e&&n.stretch()>0)(`can-scroll-before`,n.canScroll(e,-1))(`can-scroll-after`,n.canScroll(e,1))(`bx-swipe-left`,e===`left`)(`bx-swipe-right`,e===`right`),xo(`inert`,n.side()!==e),vo(`aria-hidden`,n.side()!==e||!n.interactive()?!0:null),Xl$1(),nd$1(n.overflows(e)?1:-1),Xl$1(),vo(`data-side`,e),Xl$1(2),cb(n.actions(e)),Xl$1(2),nd$1(n.overflows(e)?6:-1)}}function wl(i,t){if(i&1){let e=pb();bo(0,`bx-menu-item`,37),br$1(`action`,function(o){let r=al$1(e).$implicit,a=Wo(2);return cl$2(a.invoke(r,`context`,o))}),Go()}if(i&2){let e=t.$implicit,n=Wo(2);ka$1(`--%NS%bx-menu-item-color`,n.foreground(e)),xo(`label`,n.actionText(e))(`ariaLabel`,n.failed().includes(e.id)?n.actionText(e):e.ariaLabel)(`wrapLabel`,!0)(`icon`,n.failed().includes(e.id)?e.retryIcon??`rotate-cw`:n.completedAction()?.id===e.id?`check`:e.icon)(`iconTemplate`,!n.failed().includes(e.id)&&n.completedAction()?.id!==e.id?e.iconTemplate:void 0)(`danger`,e.role===`destructive`)(`disabled`,n.disabled()||!!e.disabled)(`loading`,n.busy(e))}}function Nl(i,t){if(i&1&&(bo(0,`bx-menu`,35),ab(1,wl,1,10,`bx-menu-item`,36,Zr),Go()),i&2){let e=Wo();Xl$1(),cb(e.allActions())}}var Qn=class i{nativeElement=b(ke).nativeElement;i18n=b(VQ,{optional:!0});bxA11yService=b(Br$1);measured=$({left:0,right:0,full:0,column:0});contextMenu=Sz.required(Wi$1);wideProbe=Sz.required(`wideProbe`);probe=Sz.required(`probe`);pagerProbe=Sz.required(`pagerProbe`);captionProbe=Sz.required(`captionProbe`);fullProbe=Sz.required(`fullProbe`);gapProbe=Sz.required(`gapProbe`);closeProbe=Sz.required(`closeProbe`);instanceId=qK();iconSize=$(20);scrollRevision=$(0);compact=$(!1);capacity=$(1);allActions=G(()=>[...this.left(),...this.right()]);previousText=G(()=>this.text(this.previousLabel()));nextText=G(()=>this.text(this.nextLabel()));groups=G(()=>[`left`,`right`]);left=ee([]);right=ee([]);side=ee(null);reveal=ee(0);stretch=ee(0);armed=ee(!1);armThreshold=ee(.65);commitThreshold=ee(.78);readyLabel=ee(`Release to activate`);interactive=ee(!1);pending=ee([]);failed=ee([]);fullActionId=ee(null);retryLabel=ee(`Retry`);loadingLabel=ee(`Working`);completedAction=ee(null);completedLabel=ee(`Done`);disabled=ee(!1);previousLabel=ee(`Previous actions`);nextLabel=ee(`Next actions`);tooltipDwell=ee(Un);origin=ee.required();selected=Pk();layoutChange=Pk();pagingMotion;pagingLane;pagingTarget=0;measuredColumn=0;stretchMotion;stretchIntent=0;entranceMotions=[];entranceTimers=[];entranceStarted=/* @__PURE__ */ new Set;entranceSettled=/* @__PURE__ */ new Set;entranceSide=null;entranceSignature=``;entranceNodes=[];constructor(){Vk(()=>{let t=this.side(),e=this.bxA11yService.isReducedMotion(),n=JSON.stringify(t?this.actions(t).map(o=>o.id):[]);t?((this.entranceSide!==t||this.entranceSignature!==n)&&this.startEntrance(t,n),this.reveal(),this.advanceEntrance(t,e)):this.resetEntrance()}),Vk(()=>{let t=this.side(),e=this.stretch();this.failed(),this.fullActionId();let n=this.bxA11yService.isReducedMotion(),o=t?this.measured().full-this.measured()[t]:0,r=o>0?Math.max(0,Math.min(1,e/o)):0,a=Math.max(0,Math.min(1,(r-this.armThreshold())/Math.max(.01,this.commitThreshold()-this.armThreshold())));if(this.stretchMotion??=Zn$1([0],([u])=>this.paintStretchIntent(u),vr$1.snappy),this.stretchMotion.retarget([a],n),this.paintStretchIntent(this.stretchIntent),t&&e>0){let u=this.nativeElement.querySelector(`[data-side="${t}"]`);this.stopPaging(),u&&(u.scrollLeft=t===`left`?u.scrollWidth-u.clientWidth:0)}}),Vk(()=>{let t=this.bxA11yService.isReducedMotion();this.side()===null?this.stopPaging():t&&this.pagingMotion?.retarget([this.pagingTarget],!0)}),Vk(t=>{let e=new AbortController,n=o=>{o.target instanceof Node&&this.pagingLane?.contains(o.target)&&this.stopPaging()};for(let o of[`pointerdown`,`wheel`,`focusin`])this.nativeElement.addEventListener(o,n,{signal:e.signal,capture:!0,passive:!0});t(()=>e.abort())}),b(ge).onDestroy(()=>{this.stopPaging(),this.resetEntrance(),this.stretchMotion?.destroy()}),Vk(t=>{this.left(),this.right(),this.previousText(),this.nextText(),this.i18n?.version?.();let e=()=>this.measure(),n=new ResizeObserver(e);n.observe(this.nativeElement),n.observe(this.probe().nativeElement),n.observe(this.captionProbe().nativeElement),n.observe(this.gapProbe().nativeElement),n.observe(this.pagerProbe().nativeElement),n.observe(this.fullProbe().nativeElement),n.observe(this.closeProbe().nativeElement),e(),t(()=>n.disconnect())})}openContext(t){this.contextMenu().openFrom(this.origin(),t)}closeContext(){this.contextMenu().close()}isEntranceComplete(t){if(this.entranceSide!==t||this.reveal()<this.measured()[t]-.5)return!1;let n=this.nativeElement.querySelector(`[data-side="${t}"]`)?.getBoundingClientRect();if(!n)return!1;let o=this.entranceNodes.filter(r=>{let a=r.parentElement?.getBoundingClientRect();return a&&Math.min(a.right,n.right)-Math.max(a.left,n.left)>1});return o.length>0&&o.every(r=>this.entranceSettled.has(r))}canFullSwipe(t){let e=this.nativeElement.querySelector(`[data-side="${t}"]`),n=e?.querySelectorAll(`.bx-swipe-action`),o=t===`left`?n?.[n.length-1]:n?.[0];if(!e||!o||this.measured().full<=this.measured()[t]+this.measured().column*.4)return!1;let r=e.getBoundingClientRect(),a=o.getBoundingClientRect();return a.left>=r.left-1&&a.right<=r.right+1}text(t){return this.i18n?.version?.(),LQ(t,this.i18n)}actions(t){return t===`left`?this.left():this.right()}laneWidth(t){return this.measured()[t]+(this.side()===t?this.stretch():0)}edge(t,e){let n=this.actions(t);return e.id===(t===`left`?n[n.length-1]?.id:n[0]?.id)}overflows(t){return this.actions(t).length>this.capacity()}actionId(t,e){return`${this.instanceId}-${t}-${encodeURIComponent(e.id)}`}updateScroll(){this.scrollRevision.update(t=>t+1)}canScroll(t,e){this.scrollRevision();let n=this.nativeElement.querySelector(`[data-side="${t}"]`);return!!n&&(e<0?n.scrollLeft>1:n.scrollLeft+n.clientWidth<n.scrollWidth-1)}scrollActions(t,e){let n=this.nativeElement.querySelector(`[data-side="${t}"]`);if(!n)return;this.pagingLane!==n&&(this.stopPaging(),this.pagingLane=n,this.pagingTarget=n.scrollLeft);let o=this.probe().nativeElement.getBoundingClientRect().width,r=Math.max(1,Math.floor(n.clientWidth/Math.max(1,o))),a=n.getBoundingClientRect().left+n.clientLeft,u=parseFloat(n.ownerDocument.defaultView?.getComputedStyle(n).scrollPaddingLeft??`0`)||0,g=n.scrollWidth-n.clientWidth,S=[...new Set(Array.from(n.querySelectorAll(`.bx-swipe-action`)).map(O=>Math.max(0,Math.min(g,O.getBoundingClientRect().left-a+n.scrollLeft-u))))];if(!S.length)return;let P=S.reduce((O,E,z)=>Math.abs(E-this.pagingTarget)<Math.abs(S[O]-this.pagingTarget)?z:O,0);this.pagingTarget=S[Math.max(0,Math.min(S.length-1,P+e*r))],n.classList.add(`is-paging`),this.pagingMotion??=Zn$1([n.scrollLeft],([O],[E])=>{n.scrollLeft=Math.max(0,Math.min(n.scrollWidth-n.clientWidth,O)),this.updateScroll(),Math.abs(O-this.pagingTarget)<.1&&Math.abs(E)<.1&&n.classList.remove(`is-paging`)},vr$1.snappy),this.pagingMotion.retarget([this.pagingTarget],this.bxA11yService.isReducedMotion())}busy(t){return!!t.loading||this.pending().includes(t.id)}foreground(t){return Kr[t.color??(t.role===`destructive`?`danger`:`primary`)]}invoke(t,e,n){n.stopPropagation(),!(this.disabled()||t.disabled||this.busy(t))&&this.selected.emit({action:t,source:e,event:n})}actionText(t){return this.failed().includes(t.id)?t.retryLabel?this.text(t.retryLabel):`${this.text(this.retryLabel())} ${this.text(t.label)}`:this.text(t.label)}statusText(){let t=this.completedAction();if(t)return`${this.text(t.label)}: ${this.text(this.completedLabel())}`;let e=this.allActions().find(n=>n.id===this.fullActionId());return e&&this.busy(e)?`${this.text(e.label)}: ${this.text(this.loadingLabel())}`:e&&this.failed().includes(e.id)?this.actionText(e):this.armed()?this.text(this.readyLabel()):``}paintStretchIntent(t){this.stretchIntent=Math.max(0,Math.min(1,t));let e=this.side();for(let n of this.groups()){let o=this.nativeElement.querySelector(`[data-side="${n}"]`),r=Array.from(o?.querySelectorAll(`.bx-swipe-action`)??[]),a=n===`left`?r[r.length-1]:r[0],u=n===e?this.stretch():0,g=this.measured().full-this.measured()[n],S=u>0&&g>0?Math.max(0,Math.min(1,u/g)):0;for(let P of r){let O=P===a,E=P.querySelector(`[data-bx-swipe-glyph]`),z=P.querySelector(`.bx-swipe-action-label`),U=P.querySelector(`button`);if(P.style.setProperty(`--bx-swipe-stretch-extra`,`${O?u:0}px`),P.style.opacity=O?`1`:String(1-S),E){let Y=P.querySelector(`.bx-swipe-retry-label`),F=O&&u>0&&U&&!Y?Math.max(0,(U.clientWidth-E.clientWidth)/2-this.iconSize()):0,ee=U?.querySelector(`.bx-btn-content-wrapper`);ee&&(ee.style.translate=`${F*this.stretchIntent*(n===`left`?-1:1)}px 0`)}z&&(z.style.opacity=O&&u>0?String(1-this.stretchIntent):``)}}}startEntrance(t,e){this.resetEntrance();let n=Array.from(this.nativeElement.querySelectorAll(`[data-side="${t}"] .bx-swipe-action-visual`)),o=this.nativeElement.ownerDocument.defaultView?.getComputedStyle(this.nativeElement).direction===`rtl`;this.entranceNodes=o?n.reverse():n,this.entranceSide=t,this.entranceSignature=e,this.entranceMotions=this.entranceNodes.map((r,a)=>{let u=Zn$1([0],([g],[S])=>{if((g!==1e3||S!==0)&&Math.abs(g-1e3)<2&&Math.abs(S)<20){this.entranceMotions[a]?.retarget([1e3],!0);return}this.paintEntrance(r,g/1e3,S/1e3,o)},vr$1.elastic);return u.track([0]),u})}advanceEntrance(t,e){let n=this.nativeElement.ownerDocument.defaultView,o=this.nativeElement.getBoundingClientRect(),r=t===`right`?o.left+this.reveal():o.right-this.reveal();this.entranceNodes.forEach((a,u)=>{if(e){this.entranceStarted.add(u),this.entranceMotions[u].retarget([1e3],!0);return}if(this.entranceStarted.has(u)||!n)return;let g=a.parentElement?.getBoundingClientRect();g&&(t===`right`?r>g.left+g.width*.2:r<g.right-g.width*.2)&&(this.entranceStarted.add(u),this.entranceTimers.push(n.setTimeout(()=>this.entranceMotions[u]?.retarget([1e3],this.bxA11yService.isReducedMotion()),Math.min(Yn.maxStaggerMs,u*Yn.staggerMs))))})}paintEntrance(t,e,n,o){e===1&&n===0?this.entranceSettled.add(t):this.entranceSettled.delete(t);let r=this.bxA11yService.isReducedMotion(),a=this.entranceNodes.length===1,u=Yn,g=Math.max(0,Math.min(1,e)),S=a?u.singleHiddenScale:u.hiddenScale,P=a?u.singlePop:u.pop,O=r?1:S+(1-S)*Math.max(0,Math.min(1.15,e))+P*Math.sin(Math.PI*g),z=1+(r?0:(a?u.singleStrain:u.strain)*Math.max(-1,Math.min(1,n*u.velocityWeight))),U=r?0:(o?1:-1)*t.clientWidth*u.travel*(1-g);Kn$1(t,{opacity:`1`,transform:`translate3d(${U}px, 0, 0) scale(${O*z}, ${O/z})`},!0);for(let Y of t.querySelectorAll(`[data-bx-swipe-glyph], .bx-swipe-action-label`))Kn$1(Y,{transform:`scale(${1/z}, ${z})`})}resetEntrance(){for(let t of this.entranceTimers)this.nativeElement.ownerDocument.defaultView?.clearTimeout(t);for(let t of this.entranceMotions)t.destroy();this.entranceTimers=[],this.entranceMotions=[],this.entranceStarted.clear(),this.entranceSettled.clear();for(let t of this.entranceNodes){Kn$1(t,{opacity:`1`,transform:`none`},!0);for(let e of t.querySelectorAll(`[data-bx-swipe-glyph], .bx-swipe-action-label`))Kn$1(e,{transform:`none`})}this.entranceNodes=[],this.entranceSide=null,this.entranceSignature=``}stopPaging(){this.pagingMotion?.destroy(),this.pagingMotion=void 0,this.pagingLane?.classList.remove(`is-paging`),this.pagingLane=void 0}measure(){let t=this.probe().nativeElement,e=this.captionProbe().nativeElement.getBoundingClientRect().height,n=this.nativeElement.querySelector(`.bx-swipe-action`),o=n?parseFloat(this.nativeElement.ownerDocument.defaultView?.getComputedStyle(n).rowGap??`0`):0,r=t.getBoundingClientRect().height,a=this.nativeElement.clientHeight<r+e+o,u=Math.max(0,Math.min(r,this.nativeElement.clientHeight-(a?o:e+o))),g=`${u}px`;this.nativeElement.style.getPropertyValue(`--bx-swipe-capsule-height`)!==g&&this.nativeElement.style.setProperty(`--bx-swipe-capsule-height`,g),this.iconSize.set(Math.max(12,Math.min(20,Math.floor(u*.65))));let S=this.gapProbe().nativeElement.getBoundingClientRect().width,P=this.closeProbe().nativeElement.getBoundingClientRect().width,O=Math.max(0,this.nativeElement.clientWidth-P),E=Math.max(0,this.nativeElement.clientWidth-Math.min(P,r)),z=this.wideProbe().nativeElement.getBoundingClientRect().width,U=Math.max(this.left().length,this.right().length)*z+S>E,Y=a||U;this.compact()!==Y&&this.compact.set(Y);let F=U?`1`:`2.5`;this.nativeElement.style.getPropertyValue(`--bx-swipe-capsule-ratio`)!==F&&this.nativeElement.style.setProperty(`--bx-swipe-capsule-ratio`,F);let ee=t.getBoundingClientRect().width,me=U?Math.max(1,Math.floor((O-S)/Math.max(1,ee))):Math.max(1,this.left().length,this.right().length),ln=this.pagerProbe().nativeElement.getBoundingClientRect().width,qt=jt=>{if(!jt)return 0;let Le=jt*ee+S;return U?Le<=O?Le:E<ee+ln+S?0:Math.min(E,Math.max(O,ee+ln+S)):Math.min(Le,E)},Ue={left:qt(this.left().length),right:qt(this.right().length),full:this.fullProbe().nativeElement.getBoundingClientRect().width,column:ee};me!==this.capacity()&&this.capacity.set(me),(Ue.left!==this.measured().left||Ue.right!==this.measured().right||Ue.full!==this.measured().full||ee!==this.measuredColumn)&&(this.stopPaging(),this.measuredColumn=ee,this.measured.set(Ue)),this.layoutChange.emit(Ue)}static ɵfac=function(e){return new(e||i)};static ɵcmp=Fr$1({type:i,selectors:[[`bx-swipe-action-panel`]],viewQuery:function(e,n){e&1&&Yy(n.contextMenu,Wi$1,5)(n.wideProbe,bl,5)(n.probe,ml,5)(n.pagerProbe,gl,5)(n.captionProbe,hl,5)(n.fullProbe,fl,5)(n.gapProbe,xl,5)(n.closeProbe,vl,5),e&2&&fb(8)},inputs:{left:[1,`left`],right:[1,`right`],side:[1,`side`],reveal:[1,`reveal`],stretch:[1,`stretch`],armed:[1,`armed`],armThreshold:[1,`armThreshold`],commitThreshold:[1,`commitThreshold`],readyLabel:[1,`readyLabel`],interactive:[1,`interactive`],pending:[1,`pending`],failed:[1,`failed`],fullActionId:[1,`fullActionId`],retryLabel:[1,`retryLabel`],loadingLabel:[1,`loadingLabel`],completedAction:[1,`completedAction`],completedLabel:[1,`completedLabel`],disabled:[1,`disabled`],previousLabel:[1,`previousLabel`],nextLabel:[1,`nextLabel`],tooltipDwell:[1,`tooltipDwell`],origin:[1,`origin`]},outputs:{selected:`selected`,layoutChange:`layoutChange`},decls:22,vars:3,consts:[[`pagerProbe`,``],[`captionProbe`,``],[`fullProbe`,``],[`gapProbe`,``],[`wideProbe`,``],[`probe`,``],[`closeProbe`,``],[`contextTemplate`,``],[`lane`,``],[`caption`,`bxTruncate`],[`retryCaption`,`bxTruncate`],[`aria-hidden`,`true`,1,`bx-swipe-pager-probe`],[`aria-hidden`,`true`,1,`bx-swipe-caption-probe`],[`aria-hidden`,`true`,1,`bx-swipe-full-probe`],[`aria-hidden`,`true`,1,`bx-swipe-gap-probe`],[`aria-hidden`,`true`,1,`bx-swipe-wide-probe`],[`aria-hidden`,`true`,1,`bx-swipe-probe`],[`aria-hidden`,`true`,1,`bx-swipe-close-probe`],[3,`bxContextMenu`,`bxContextMenuLongPress`],[1,`bx-swipe-action-region`,3,`has-overflow`,`is-stretching`,`can-scroll-before`,`can-scroll-after`,`bx-swipe-left`,`bx-swipe-right`,`visibility`,`--%NS%bx-action-reveal`,`inline-size`,`inert`],[`role`,`status`,1,`bx-swipe-status`],[1,`bx-swipe-action-region`,3,`inert`],[1,`bx-swipe-page-slot`,3,`inert`],[`role`,`group`,1,`bx-swipe-lane`,3,`scroll`],[`bxTooltipTouch`,`none`,1,`bx-swipe-action`,3,`bxTooltipDwell`,`bxTooltip`,`is-edge`,`inert`,`is-unavailable`],[1,`bx-swipe-page-slot`,3,`pointerdown`,`inert`],[`bx-button`,``,`type`,`button`,`variant`,`icon`,`color`,`grayscale`,1,`bx-swipe-page`,3,`click`,`disabled`],[`name`,`chevron-left`,`size`,`16`],[`bxTooltipTouch`,`none`,1,`bx-swipe-action`,3,`bxTooltipDwell`,`bxTooltip`,`inert`],[1,`bx-swipe-action-visual`],[`bx-button`,``,`type`,`button`,`variant`,`filled`,`shape`,`capsule`,`data-bx-selection-exclude`,``,3,`click`,`id`,`color`,`disabled`,`loading`],[`data-bx-swipe-glyph`,``,3,`name`,`contentTemplate`,`size`],[`bxTooltipTouch`,`none`,`bxTruncate`,``,1,`bx-swipe-retry-label`,3,`bxTooltip`],[`dir`,`auto`,`bxTooltipTouch`,`none`,1,`bx-swipe-action-label`,3,`bxTruncate`,`hidden`,`bxTooltip`,`for`],[`name`,`chevron-right`,`size`,`16`],[1,`bx-swipe-context-actions`],[3,`label`,`ariaLabel`,`wrapLabel`,`icon`,`iconTemplate`,`danger`,`disabled`,`loading`,`--%NS%bx-menu-item-color`],[3,`action`,`label`,`ariaLabel`,`wrapLabel`,`icon`,`iconTemplate`,`danger`,`disabled`,`loading`]],template:function(e,n){if(e&1&&(sd$1(0,`span`,11,0),bo(2,`span`,12,1),lA(4,`M`),Go(),sd$1(5,`span`,13,2)(7,`span`,14,3)(9,`span`,15,4)(11,`span`,16,5)(13,`span`,17,6),bo(15,`div`,18),ab(16,Ml,7,23,`div`,19,TT),Go(),rd$1(18,Nl,3,0,`ng-template`,null,7,RA),bo(20,`span`,20),lA(21),Go()),e&2){let o=FT(19);Xl$1(15),xo(`bxContextMenu`,o)(`bxContextMenuLongPress`,!1),Xl$1(),cb(n.groups()),Xl$1(5),ik(n.statusText())}},dependencies:[xe,ZC,Ki$1,Gi$1,Wi$1,Pt,ct,on$1],styles:[`
[_nghost-%COMP%] {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: clip;
  border-radius: inherit;
}
.bx-swipe-wide-probe[_ngcontent-%COMP%], 
.bx-swipe-probe[_ngcontent-%COMP%], 
.bx-swipe-close-probe[_ngcontent-%COMP%], 
.bx-swipe-full-probe[_ngcontent-%COMP%] {
  position: absolute;
  visibility: hidden;
  pointer-events: none;
  inline-size: var(--%NS%bx-swipe-action-width, calc(var(--%NS%bx-swipe-capsule-height, var(--%NS%bx-space-10, 2.5rem)) * var(--%NS%bx-swipe-capsule-ratio, 2.5) + var(--%NS%bx-space-2, 0.5rem)));
  block-size: var(--%NS%bx-swipe-action-height, var(--%NS%bx-space-10, 2.5rem));
}
.bx-swipe-wide-probe[_ngcontent-%COMP%] {
  inline-size: var(--%NS%bx-swipe-action-width, calc(var(--%NS%bx-swipe-capsule-height, var(--%NS%bx-space-10, 2.5rem)) * 2.5 + var(--%NS%bx-space-2, 0.5rem)));
}
.bx-swipe-close-probe[_ngcontent-%COMP%] {
  inline-size: var(--%NS%bx-swipe-content-min-width, 50%);
}
.bx-swipe-full-probe[_ngcontent-%COMP%] {
  inline-size: min(100%, var(--%NS%bx-swipe-full-max-width, calc(var(--%NS%bx-space-12, 3rem) * 12)));
}
.bx-swipe-action-region[_ngcontent-%COMP%] {
  position: absolute;
  inset-block: 0;
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  align-items: center;
  pointer-events: auto;
  direction: ltr;
  box-sizing: border-box;
}
.bx-swipe-action-region.has-overflow[_ngcontent-%COMP%] {
  grid-template-columns: var(--%NS%bx-space-6, 1.5rem) minmax(0, 1fr) var(--%NS%bx-space-6, 1.5rem);
  gap: var(--%NS%bx-swipe-overflow-gap, var(--%NS%bx-space-1, 0.25rem));
  padding-inline: var(--%NS%bx-swipe-overflow-padding, var(--%NS%bx-space-1, 0.25rem));
  box-sizing: border-box;
}
.bx-swipe-left[_ngcontent-%COMP%] {
  padding-left: var(--%NS%bx-swipe-content-gap, var(--%NS%bx-space-2, 0.5rem));
  right: 0;
  clip-path: inset(0 0 0 max(0px, 100% - var(--%NS%bx-action-reveal, 0px)));
}
.bx-swipe-right[_ngcontent-%COMP%] {
  padding-right: var(--%NS%bx-swipe-content-gap, var(--%NS%bx-space-2, 0.5rem));
  left: 0;
  clip-path: inset(0 max(0px, 100% - var(--%NS%bx-action-reveal, 0px)) 0 0);
}
.bx-swipe-lane[_ngcontent-%COMP%] {
  touch-action: pan-y pinch-zoom;
  display: flex;
  align-items: stretch;
  block-size: 100%;
  overflow: auto hidden;
  scrollbar-width: none;
  overscroll-behavior-inline: contain;
  scroll-padding-inline: var(--%NS%bx-swipe-overflow-fade, var(--%NS%bx-space-3, 0.75rem));
}
.bx-swipe-lane[_ngcontent-%COMP%]::-webkit-scrollbar {
  display: none;
}
.bx-swipe-action[_ngcontent-%COMP%] {
  --%NS%bx-button-capsule-height: var(--%NS%bx-swipe-capsule-height);
  --%NS%bx-button-capsule-width: calc(var(--%NS%bx-swipe-capsule-height) * var(--%NS%bx-swipe-capsule-ratio, 2.5) + var(--%NS%bx-swipe-stretch-extra, 0px));
  --%NS%bx-button-capsule-min-height: 0;
  --%NS%bx-button-capsule-min-width: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: none;
  gap: var(--%NS%bx-space-1, 0.25rem);
  inline-size: calc(var(--%NS%bx-swipe-action-width, calc(var(--%NS%bx-swipe-capsule-height) * var(--%NS%bx-swipe-capsule-ratio, 2.5) + var(--%NS%bx-space-2, 0.5rem))) + var(--%NS%bx-swipe-stretch-extra, 0px));
  padding-inline: var(--%NS%bx-space-1, 0.25rem);
  box-sizing: border-box;
  overflow: clip;
}
.bx-swipe-action-visual[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  inline-size: 100%;
  block-size: 100%;
  gap: inherit;
  transform-origin: center;
}
.bx-swipe-action-label[_ngcontent-%COMP%], 
.bx-swipe-caption-probe[_ngcontent-%COMP%] {
  display: block;
  max-inline-size: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: var(--%NS%bx-text-secondary);
  font-size: 0.75rem;
  line-height: 1.3;
  text-align: center;
  cursor: pointer;
}
.bx-swipe-page-slot[_ngcontent-%COMP%] {
  display: grid;
  place-items: center;
  align-self: center;
  block-size: var(--%NS%bx-space-8, 2rem);
}
.bx-swipe-page[_ngcontent-%COMP%] {
  --%NS%bx-glass-radius: var(--%NS%bx-rounded-pill, 9999px);
  inline-size: var(--%NS%bx-space-8, 2rem);
  block-size: var(--%NS%bx-space-8, 2rem);
  align-self: center;
  border-radius: var(--%NS%bx-rounded-pill, 9999px);
}
.bx-swipe-pager-probe[_ngcontent-%COMP%] {
  position: absolute;
  visibility: hidden;
  pointer-events: none;
  inline-size: calc(2 * var(--%NS%bx-space-6, 1.5rem) + 2 * var(--%NS%bx-swipe-overflow-gap, var(--%NS%bx-space-1, 0.25rem)) + 2 * var(--%NS%bx-swipe-overflow-padding, var(--%NS%bx-space-1, 0.25rem)));
}
.bx-swipe-context-actions[_ngcontent-%COMP%] {
  display: block;
  max-inline-size: calc(100vw - var(--%NS%bx-space-4, 1rem));
  max-block-size: calc(100dvh - var(--%NS%bx-space-8, 2rem));
  overflow: auto;
}
.bx-swipe-action.is-unavailable[_ngcontent-%COMP%]   .bx-swipe-action-label[_ngcontent-%COMP%] {
  opacity: 0.6;
  cursor: not-allowed;
}
.bx-swipe-caption-probe[_ngcontent-%COMP%] {
  position: absolute;
  visibility: hidden;
  pointer-events: none;
}
.bx-swipe-action-label[hidden][_ngcontent-%COMP%] {
  display: none;
}
.has-overflow[_ngcontent-%COMP%]   .bx-swipe-lane[_ngcontent-%COMP%] {
  --%NS%bx-swipe-fade-start: 0px;
  --%NS%bx-swipe-fade-end: 0px;
  -webkit-mask-image:
    linear-gradient(
      to right,
      transparent,
      #000000 var(--%NS%bx-swipe-fade-start),
      #000000 calc(100% - var(--%NS%bx-swipe-fade-end)),
      transparent);
  mask-image:
    linear-gradient(
      to right,
      transparent,
      #000000 var(--%NS%bx-swipe-fade-start),
      #000000 calc(100% - var(--%NS%bx-swipe-fade-end)),
      transparent);
}
.can-scroll-before[_ngcontent-%COMP%]   .bx-swipe-lane[_ngcontent-%COMP%] {
  --%NS%bx-swipe-fade-start: var(--%NS%bx-swipe-overflow-fade, var(--%NS%bx-space-3, 0.75rem));
}
.can-scroll-after[_ngcontent-%COMP%]   .bx-swipe-lane[_ngcontent-%COMP%] {
  --%NS%bx-swipe-fade-end: var(--%NS%bx-swipe-overflow-fade, var(--%NS%bx-space-3, 0.75rem));
}
@media (forced-colors: active) {
  .has-overflow[_ngcontent-%COMP%]   .bx-swipe-lane[_ngcontent-%COMP%] {
    -webkit-mask-image: none;
    mask-image: none;
  }
}
.is-stretching[_ngcontent-%COMP%]   .bx-swipe-page-slot[_ngcontent-%COMP%] {
  opacity: 0;
  pointer-events: none;
}
.is-stretching[_ngcontent-%COMP%]   .bx-swipe-lane[_ngcontent-%COMP%] {
  -webkit-mask-image: none;
  mask-image: none;
  overflow-x: hidden;
}
.bx-swipe-status[_ngcontent-%COMP%] {
  position: absolute;
  inline-size: 1px;
  block-size: 1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
}
.bx-swipe-retry-label[_ngcontent-%COMP%] {
  margin-inline-start: var(--%NS%bx-space-2, 0.5rem);
  min-inline-size: 0;
  max-inline-size: calc(100% - var(--%NS%bx-space-12, 3rem));
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.bx-swipe-gap-probe[_ngcontent-%COMP%] {
  position: absolute;
  visibility: hidden;
  pointer-events: none;
  inline-size: var(--%NS%bx-swipe-content-gap, var(--%NS%bx-space-2, 0.5rem));
}
.bx-swipe-action-region.has-overflow.bx-swipe-left[_ngcontent-%COMP%] {
  padding-left: calc(var(--%NS%bx-swipe-overflow-padding, var(--%NS%bx-space-1, 0.25rem)) + var(--%NS%bx-swipe-content-gap, var(--%NS%bx-space-2, 0.5rem)));
}
.bx-swipe-action-region.has-overflow.bx-swipe-right[_ngcontent-%COMP%] {
  padding-right: calc(var(--%NS%bx-swipe-overflow-padding, var(--%NS%bx-space-1, 0.25rem)) + var(--%NS%bx-swipe-content-gap, var(--%NS%bx-space-2, 0.5rem)));
}`]})};function io(i,t,e,n=0,o=.4){let r=Math.max(0,Math.min(.35,n)),a=Math.max(0,t*Math.max(r+.01,Math.min(1,o)));if(a===0)return i;let u=r*t,g=Math.min(i,u),S=a-u,O=Math.max(0,Math.min(i-u,S))/S;return i+(e-1)*(g+S*(O-O*O+O*O*O/3))}function Xr(i,t,e,n=0,o=.4){let r=0,a=i;for(let u=0;u<28;u++){let g=(r+a)/2;io(g,t,e,n,o)<i?r=g:a=g}return(r+a)/2}function oo(i,t,e){return 1+(i-1)*(t>0?Math.min(1,Math.max(0,e)/t):1)}var Jn=class i{owner;dismiss;activate(t,e){this.owner!==t&&this.dismiss?.(),this.owner=t,this.dismiss=e}release(t){this.owner===t&&(this.owner=void 0,this.dismiss=void 0)}static ɵfac=function(e){return new(e||i)};static ɵprov=B({token:i,factory:i.ɵfac,providedIn:`root`})};var Bt=class i{nativeElement=b(ke).nativeElement;viewContainerRef=b(fr$1);destroyRef=b(ge);bxA11yService=b(Br$1);menuItem=b(Gi$1,{self:!0,optional:!0});contextMenuDirective=b(Wi$1,{optional:!0,self:!0});swipeActionsService=b(Jn);phase=$(`closed`);pending=$([]);working=$([]);completed=$(null);failed=$([]);fullOperation=$(null);originalStyles=/* @__PURE__ */ new Map;swipeState=this.phase.asReadonly();swipeContent=ee(void 0);swipeDisabled=ee(!1);swipeLoading=ee(!1);leftSwipeActions=ee([]);rightSwipeActions=ee([]);swipePreviousLabel=ee(`Previous actions`);swipeNextLabel=ee(`Next actions`);swipeTooltipDwell=ee(Un);swipeFullAction=ee(!0);swipeCompletion=ee(`collapse`);swipeDismissFocus=ee(void 0);swipeRetryLabel=ee(`Retry`);swipeLoadingLabel=ee(`Working`);swipeCompletedLabel=ee(`Done`);swipeDismissed=Pk();swipeAction=Pk();swipeActionError=Pk();dismissal;panel;row;originalRowActive=null;movable;motion;listeners;gestureListeners;visibilityObserver;gesture;wheelGesture;completeAfterWheel;wheelTimer;layout={left:0,right:0,full:0,column:0};stretchSide=null;stretchPermitted=!1;position=0;destination=0;motionSide=null;settleMinimum=0;settleMaximum=0;suppressClick=!1;commandRevision=0;leftConfiguration;rightConfiguration;constructor(){Vk(()=>{let t=this.leftSwipeActions(),e=this.rightSwipeActions(),n=this.swipeDisabled()||this.swipeLoading()||!!this.menuItem?.disabled()||!!this.menuItem?.loading(),o=this.bxA11yService.isReducedMotion(),r=this.swipePreviousLabel(),a=this.swipeNextLabel(),u=this.swipeTooltipDwell(),g=this.working(),S=this.completed(),P=this.swipeCompletedLabel(),O=this.failed(),E=this.fullOperation(),z=this.swipeRetryLabel(),U=this.swipeLoadingLabel(),Y=this.swipeContent(),F=this.fullOptions();de(()=>{let ee=t!==this.leftConfiguration||e!==this.rightConfiguration;if(this.leftConfiguration=t,this.rightConfiguration=e,!t.length&&!e.length){this.teardown();return}Y&&this.movable&&Y!==this.movable&&this.teardown(),this.mount(),this.panel?.setInput(`left`,t),this.panel?.setInput(`right`,e),this.panel?.setInput(`disabled`,n),this.panel?.setInput(`previousLabel`,r),this.panel?.setInput(`nextLabel`,a),this.panel?.setInput(`tooltipDwell`,u),this.panel?.setInput(`pending`,g),this.panel?.setInput(`completedAction`,S),this.panel?.setInput(`completedLabel`,P),this.panel?.setInput(`failed`,O),this.panel?.setInput(`fullActionId`,E?.id??null),this.panel?.setInput(`retryLabel`,z),this.panel?.setInput(`loadingLabel`,U),this.panel?.setInput(`readyLabel`,F.readyLabel),this.panel?.setInput(`armThreshold`,F.armThreshold),this.panel?.setInput(`commitThreshold`,F.commitThreshold),!F.enabled&&(this.gesture||this.wheelGesture)&&(this.cancelGesture(),this.cancelWheel()),n&&(this.closeSwipeActions(),this.panel?.instance.closeContext()),ee&&!this.wheelGesture?.committed&&!this.fullOperation()&&(this.cancelGesture(),this.cancelWheel()),o&&this.dismissal?.finish(),o&&!this.gesture&&!this.wheelGesture&&this.motion?.retarget([this.destination],!0),this.panel?.changeDetectorRef.detectChanges()})}),this.destroyRef.onDestroy(()=>this.teardown())}closeSwipeActions(){if(!(this.pending().length||this.phase()===`dismissing`||this.phase()===`dismissed`)){if(this.fullOperation.set(null),!this.motion){this.phase.set(`closed`);return}this.cancelGesture(),this.cancelWheel(),this.settle(0)}}restoreSwipeRow(){this.phase()===`dismissed`&&(this.dismissal?.restore(),this.fullOperation.set(null),this.stretchSide=null,this.position=0,this.destination=0,this.motionSide=null,this.phase.set(`closed`),this.motion?.track([0],[0]),this.panel?.setInput(`interactive`,!1))}mount(){if(this.panel)return;let t=this.swipeContent()??this.nativeElement.querySelector(`[bxSwipeContent]`)??this.nativeElement.querySelector(`.bx-menu-item-btn`),e=this.menuItem?this.nativeElement.querySelector(`.bx-menu-item-btn`):t?.closest(`button,a[href],[tabindex]`)??t,n=this.nativeElement.ownerDocument.defaultView;if(!e||!t||!n||e===this.nativeElement||t===this.nativeElement||!this.nativeElement.contains(t))return;this.row=e,this.originalRowActive=e.getAttribute(`data-bx-swipe-active`),this.movable=t,this.style(this.nativeElement,`position`,`relative`),this.style(this.nativeElement,`overflow`,`clip`),this.style(this.nativeElement,`overscroll-behavior-x`,`contain`),this.style(this.nativeElement,`touch-action`,`pan-y pinch-zoom`),this.style(e,`touch-action`,`pan-y pinch-zoom`),this.style(e,`position`,`relative`),this.style(t,`position`,`relative`);let o=this.viewContainerRef.createComponent(Qn);this.panel=o,o.setInput(`origin`,this.focusOrigin()),e.getAttribute(`role`)===`gridcell`&&o.location.nativeElement.setAttribute(`role`,`gridcell`),this.nativeElement.append(o.location.nativeElement),this.dismissal=new Zn(this.nativeElement,[e,o.location.nativeElement]),o.instance.selected.subscribe(u=>this.invoke(u)),o.instance.layoutChange.subscribe(u=>this.updateLayout(u)),this.motion=Zn$1([0],([u],[g])=>{this.motionSide===null&&this.destination!==0&&u*this.destination>=0&&(this.motionSide=this.destination<0?`left`:`right`);let S=this.phase()===`settling`?Math.max(this.settleMinimum,Math.min(this.settleMaximum,u)):u;this.position=this.clampPosition(S,this.motionSide),Kn$1(e,{transform:`translate3d(${this.position}px, 0, 0)`},!0),this.paint(),this.phase()===`settling`&&Math.abs(u-this.destination)<.1&&Math.abs(g)<.1&&(this.phase.set(this.destination===0?`closed`:this.destination<0?`left`:`right`),this.destination===0&&(this.motionSide=null),this.stretchSide=null,this.panel?.setInput(`stretch`,0),this.panel?.setInput(`armed`,!1))},vr$1.smooth),this.style(e,`transform`,`translate3d(0, 0, 0)`),this.listeners=new AbortController;let r$4={signal:this.listeners.signal},a=this.nativeElement.ownerDocument;this.nativeElement.addEventListener(`wheel`,u=>this.onWheel(u),s(r({},r$4),{passive:!1,capture:!0})),this.nativeElement.addEventListener(`pointerdown`,u=>this.onDown(u),r$4),e.addEventListener(`lostpointercapture`,u=>{u.target===e&&u.pointerId===this.gesture?.pointerId&&!e.hasPointerCapture(u.pointerId)&&this.cancelGesture()},r$4),this.nativeElement.addEventListener(`click`,u=>{if(this.suppressClick||this.destination!==0&&this.row?.contains(u.target)||this.gesture?.claimed){u.preventDefault(),u.stopImmediatePropagation();let g=this.suppressClick;this.suppressClick=!1,g||this.closeSwipeActions()}},s(r({},r$4),{capture:!0})),this.nativeElement.addEventListener(`contextmenu`,u=>{!this.contextMenuDirective&&!u.defaultPrevented&&this.openContext(u)},r$4),this.nativeElement.addEventListener(`keydown`,u=>{!this.contextMenuDirective&&(u.key===`ContextMenu`||u.shiftKey&&u.key===`F10`)&&(u.preventDefault(),u.stopPropagation(),this.openContext(u))},r$4),a.addEventListener(`keydown`,u=>{u.key===`Escape`&&(this.gesture||this.wheelGesture||this.destination!==0)&&(u.preventDefault(),u.stopImmediatePropagation(),this.closeSwipeActions())},s(r({},r$4),{capture:!0})),a.addEventListener(`pointerdown`,u=>{this.nativeElement.contains(u.target)||this.closeSwipeActions()},s(r({},r$4),{capture:!0,passive:!0})),a.addEventListener(`focusin`,u=>{this.nativeElement.contains(u.target)||this.closeSwipeActions()},r$4),a.addEventListener(`visibilitychange`,()=>{a.hidden&&(this.closeSwipeActions(),this.panel?.instance.closeContext())},r$4),n.addEventListener(`blur`,()=>this.closeSwipeActions(),r$4),this.visibilityObserver=new MutationObserver(()=>{this.nativeElement.closest(`[inert], [hidden], [aria-hidden="true"]`)&&(this.closeSwipeActions(),this.panel?.instance.closeContext())});for(let u=this.nativeElement.parentElement;u;u=u.parentElement)this.visibilityObserver.observe(u,{attributes:!0,attributeFilter:[`inert`,`hidden`,`aria-hidden`]})}onWheel(t){if(!this.nativeElement.contains(t.target))return;if(this.wheelGesture?.committed){if(t.ctrlKey||Math.abs(t.deltaY)>Math.abs(t.deltaX)){this.finishWheel(!1);return}if(t.deltaX===0)return;t.preventDefault(),t.stopPropagation();let S=this.nativeElement.ownerDocument.defaultView;S?.clearTimeout(this.wheelTimer),this.wheelTimer=S?.setTimeout(()=>this.finishWheel(!1),Xn);return}if(t.ctrlKey){this.cancelWheel();return}if(this.operationBlocksGesture()||this.gesture||this.swipeDisabled()||this.swipeLoading()||this.menuItem?.disabled()||this.menuItem?.loading()||t.deltaX===0&&t.deltaY===0)return;if(Math.abs(t.deltaX)<=Math.abs(t.deltaY)){this.wheelGesture&&this.finishWheel(!1);return}let e=t.deltaMode===WheelEvent.DOM_DELTA_LINE?parseFloat(this.nativeElement.ownerDocument.defaultView?.getComputedStyle(this.row??this.nativeElement).lineHeight??`16`)||16:t.deltaMode===WheelEvent.DOM_DELTA_PAGE?this.nativeElement.clientWidth:1,n=-t.deltaX*e;if(!this.wheelGesture&&(n<0&&this.layout.left===0&&this.position<=0||n>0&&this.layout.right===0&&this.position>=0))return;t.preventDefault(),t.stopPropagation();let o=this.nativeElement.ownerDocument.defaultView;if(!o)return;if(this.wheelGesture?.collapsed){let S=this.wheelGesture.lastDelta;if(!(Math.sign(n)!==Math.sign(S)||Math.abs(n)>Math.abs(S)+Math.max(1,Math.abs(S)*.25))){this.wheelGesture.lastDelta=n,o.clearTimeout(this.wheelTimer),this.wheelTimer=o.setTimeout(()=>this.finishWheel(!1),Xn);return}this.wheelGesture=void 0,o.clearTimeout(this.wheelTimer),this.wheelTimer=void 0}if(!this.wheelGesture){this.completed.set(null),this.swipeActionsService.activate(this,()=>this.closeSwipeActions());let S=this.initialSide(n);this.stretchPermitted=this.canBeginStretch(S),this.wheelGesture={destination:this.destination,lastDelta:n,collapsed:!1,committed:!1,stretchIntent:this.stretchPermitted,revealDeltaPeak:Math.abs(n),continuationDelta:null,velocity:new Ah(this.position,t.timeStamp),side:S,position:this.position,rawPosition:this.rawPosition(this.position,S),start:this.position,event:t},this.motionSide=this.destination===0&&(this.position<0?`left`:`right`)!==S?null:S,this.motion?.track([this.position]),this.phase.set(`dragging`),this.panel?.setInput(`interactive`,!1)}let r=this.canBeginStretch(this.wheelGesture.side);this.updateWheelStretchIntent(this.wheelGesture,n,r),this.stretchPermitted=r&&this.wheelGesture.stretchIntent,this.wheelGesture.lastDelta=n,this.prepareStretch(this.wheelGesture.side);let a=this.clampGesturePosition(this.visualPosition(this.wheelGesture.rawPosition+n,this.wheelGesture.side),this.wheelGesture.side,this.wheelGesture.start,this.wheelGesture.destination),u=this.wheelGesture.position;this.wheelGesture.event=t,this.wheelGesture.position=a,this.wheelGesture.rawPosition=this.rawPosition(a,this.wheelGesture.side),this.updateArmed(a,this.wheelGesture.side),this.wheelGesture.velocity.update(a,t.timeStamp),this.motion?.track([a],[this.wheelGesture.velocity.velocity(t.timeStamp)]),Math.abs(a)<.1&&u*n<0&&(this.wheelGesture.collapsed=!0,this.destination=0,this.motionSide=null,this.stretchSide=null,this.swipeActionsService.release(this)),o.clearTimeout(this.wheelTimer),this.wheelTimer=o.setTimeout(()=>this.finishWheel(),Xn);let g=this.edgeAction(this.wheelGesture.side);g&&this.fullOptions(this.wheelGesture.side).enabled&&g.fullSwipe!==!1&&this.stretchProgress(a,this.wheelGesture.side)>=this.fullOptions(this.wheelGesture.side).commitThreshold&&(this.wheelGesture.committed=!0,this.invoke({action:g,source:`full-swipe`,event:t}))}updateWheelStretchIntent(t,e,n){if(t.stretchIntent||e*(t.side===`left`?-1:1)<=0)return;let o=Math.abs(e);if(t.revealDeltaPeak=Math.max(t.revealDeltaPeak,o),!n){t.continuationDelta=null;return}if(t.continuationDelta===null){o<Math.abs(t.lastDelta)&&o<=t.revealDeltaPeak*.5&&(t.continuationDelta=o);return}o>t.continuationDelta+Math.max(2,t.continuationDelta*.5)?t.stretchIntent=!0:t.continuationDelta=Math.min(t.continuationDelta,o)}finishWheel(t=!0){let e=this.wheelGesture,n=this.nativeElement.ownerDocument.defaultView;if(!e||!n)return;let o=e.velocity.velocity(n.performance.now());if(this.wheelGesture=void 0,n.clearTimeout(this.wheelTimer),this.wheelTimer=void 0,e.committed){let r=this.completeAfterWheel;this.completeAfterWheel=void 0,r?.();return}this.motion?.track([this.position],[o]),t?this.finishRelease(o,e.side,e.position,e.event):this.settle(this.releaseDestination(o,e.side,e.position))}cancelWheel(){if(this.wheelGesture?.committed){this.finishWheel(!1);return}let t=this.wheelGesture;this.nativeElement.ownerDocument.defaultView?.clearTimeout(this.wheelTimer),this.wheelTimer=void 0,this.wheelGesture=void 0,t&&(this.motion?.track([this.position],[0]),this.settle(t.collapsed?0:t.destination))}releaseDestination(t,e,n=this.position){let o=AR(n,t,Math.max(this.layout.left,this.layout.right));return e!==`right`&&o<-this.layout.left/2&&this.layout.left>0?-this.layout.left:e!==`left`&&o>this.layout.right/2&&this.layout.right>0?this.layout.right:0}initialSide(t){return this.destination<0?`left`:this.destination>0?`right`:t<0?`left`:`right`}extent(t){return this.stretchSide===t?Math.max(this.layout[t],this.layout.full):this.layout[t]}clampPosition(t,e){return e===`left`?Math.max(-this.extent(`left`),Math.min(0,t)):e===`right`?Math.max(0,Math.min(this.extent(`right`),t)):Math.max(-this.extent(`left`),Math.min(this.extent(`right`),t))}clampGesturePosition(t,e,n,o){let r=e===`right`?o===0?Math.min(0,n):0:-(this.stretchPermitted?this.extent(`left`):this.layout.left),a=e===`left`?o===0?Math.max(0,n):0:this.stretchPermitted?this.extent(`right`):this.layout.right;return Math.max(r,Math.min(a,t))}fullOptions(t=null){let e=this.swipeFullAction(),n=t?this.edgeAction(t):void 0,o=r(r({},typeof e==`boolean`?{enabled:e}:e),n?.fullSwipeConfig),r$5=n?.role===`destructive`,a=r$5?qe.destructiveCommitThreshold:qe.commitThreshold,u=r$5?qe.destructiveResistance:qe.resistance,g=o.armThreshold??qe.armThreshold,S=o.commitThreshold??a,P=o.resistance??u,O=r$5?qe.destructivePlateau:0,E=r$5?qe.destructiveResistanceEnd:qe.resistanceEnd,z=o.resistancePlateau??O,U=o.resistanceEnd??E,Y=Number.isFinite(z)?Math.max(0,Math.min(.35,z)):O,F=Number.isFinite(g)?Math.max(0,Math.min(.95,g)):qe.armThreshold;return{enabled:e!==!1&&(o.enabled??!0),resistance:Number.isFinite(P)?Math.max(1,Math.min(12,P)):u,resistancePlateau:Y,resistanceEnd:Math.max(Y+.01,Number.isFinite(U)?Math.min(1,U):E),armThreshold:F,commitThreshold:Number.isFinite(S)?Math.max(F+.01,Math.min(1,S)):Math.max(F+.01,a),readyLabel:o.readyLabel??`Release to activate`}}edgeAction(t){let e=t===`left`?this.leftSwipeActions():this.rightSwipeActions();return t===`left`?e[e.length-1]:e[0]}rawPosition(t,e){if(!e)return t;let n=e===`left`?-1:1,o=t*n,r=this.layout[e],a=this.fullOptions(e),u=oo(a.resistance,this.layout.full-r,this.layout.column*2);return o>r?n*(r+io(o-r,this.layout.full-r,u,a.resistancePlateau,a.resistanceEnd)):t}visualPosition(t,e){if(!e)return t;let n=e===`left`?-1:1,o=t*n,r=this.layout[e],a=this.fullOptions(e),u=oo(a.resistance,this.layout.full-r,this.layout.column*2);return o>r?n*(r+Xr(o-r,this.layout.full-r,u,a.resistancePlateau,a.resistanceEnd)):t}canBeginStretch(t){return(t===`left`?this.leftSwipeActions():this.rightSwipeActions()).length===1||!!this.panel?.instance.isEntranceComplete(t)}prepareStretch(t){if(!t||!this.stretchPermitted||this.stretchSide===t||!this.fullOptions(t).enabled)return;let e=this.edgeAction(t);e&&e.fullSwipe!==!1&&!e.disabled&&!e.loading&&!this.pending().includes(e.id)&&this.panel?.instance.canFullSwipe(t)&&(this.stretchSide=t)}stretchProgress(t,e){if(!e||this.stretchSide!==e||t*(e===`left`?-1:1)<=0)return 0;let n=this.layout.full-this.layout[e];return n>0?Math.max(0,Math.min(1,(Math.abs(t)-this.layout[e])/n)):0}updateArmed(t,e){this.panel?.setInput(`armed`,this.stretchProgress(t,e)>=this.fullOptions(e).commitThreshold)}finishRelease(t,e,n,o){let r=e?this.edgeAction(e):void 0,a=this.fullOptions(e),u=!!e&&!!r&&a.enabled&&r.fullSwipe!==!1&&this.stretchProgress(n,e)>=a.commitThreshold,S=!!e&&this.stretchProgress(n,e)>0&&e?this.layout[e]*(e===`left`?-1:1):this.releaseDestination(t,e,n);u&&r?this.invoke({action:r,source:`full-swipe`,event:o}):this.settle(S)}focusOrigin(){let t=this.row??this.nativeElement,e=this.nativeElement.ownerDocument.activeElement;return e instanceof HTMLElement&&t.contains(e)&&e.tabIndex>=0?e:t.matches(`button,a[href],[tabindex]`)?t:t.querySelector(`button,a[href],[tabindex]`)??t}onDown(t){if(t.target.closest(`input,textarea,select,[contenteditable="true"]`)||this.operationBlocksGesture()||!t.isPrimary||t.button!==0||this.swipeDisabled()||this.swipeLoading()||this.menuItem?.disabled()||this.menuItem?.loading())return;this.suppressClick=this.destination===0&&Math.abs(this.position)>.1,this.cancelWheel(),this.cancelGesture(),this.motion?.track([this.position]),this.gesture={pointerId:t.pointerId,x:t.clientX,y:t.clientY,start:this.position,destination:this.destination,velocity:new Ah(t.clientX,t.timeStamp),claimed:!1,side:this.destination!==0?this.initialSide(0):null},this.gestureListeners=new AbortController;let e={signal:this.gestureListeners.signal},n=this.nativeElement.ownerDocument;t.pointerType===`touch`&&(n.addEventListener(`touchmove`,o=>{o.touches.length!==1?this.cancelGesture():this.gesture?.claimed&&o.cancelable&&o.preventDefault()},s(r({},e),{passive:!1})),n.addEventListener(`touchstart`,o=>{o.touches.length>1&&this.cancelGesture()},s(r({},e),{passive:!0}))),n.addEventListener(`pointermove`,o=>this.onMove(o),s(r({},e),{passive:!1})),n.addEventListener(`pointerup`,o=>this.onUp(o),e),n.addEventListener(`pointercancel`,o=>{o.pointerId===this.gesture?.pointerId&&this.cancelGesture()},e),n.addEventListener(`pointerdown`,o=>{o.pointerId!==this.gesture?.pointerId&&this.cancelGesture()},s(r({},e),{passive:!0}))}onMove(t){let e=this.gesture;if(!e||t.pointerId!==e.pointerId)return;let n=t.clientX-e.x,o=t.clientY-e.y;if(!e.claimed){if(Math.max(Math.abs(n),Math.abs(o))<8)return;if(Math.abs(o)>=Math.abs(n)||n<0&&!this.layout.left&&e.start<=0||n>0&&!this.layout.right&&e.start>=0){this.cancelGesture();return}this.completed.set(null),this.swipeActionsService.activate(this,()=>this.closeSwipeActions()),e.claimed=!0,e.side??=n<0?`left`:`right`,this.stretchPermitted=this.canBeginStretch(e.side),this.motionSide=e.destination===0&&(e.start<0?`left`:`right`)!==e.side?null:e.side,this.row?.setPointerCapture(t.pointerId),this.phase.set(`dragging`),this.panel?.setInput(`interactive`,!1)}t.preventDefault(),this.prepareStretch(e.side),e.velocity.update(t.clientX,t.timeStamp);let r=this.clampGesturePosition(e.start+n,e.side,e.start,e.destination);this.updateArmed(r,e.side),this.motion?.track([r],[e.velocity.velocity(t.timeStamp)])}onUp(t){let e=this.gesture;if(!e||t.pointerId!==e.pointerId)return;if(!e.claimed){this.releaseGesture(),this.settle(e.destination);return}e.velocity.update(t.clientX,t.timeStamp);let n=e.velocity.velocity(t.timeStamp);this.suppressClick=!0,this.releaseGesture(),this.motion?.track([this.position],[n]),this.finishRelease(n,e.side,this.position,t)}releaseGesture(){let t=this.gesture;this.gesture=void 0,this.gestureListeners?.abort(),this.gestureListeners=void 0,t&&this.row?.hasPointerCapture(t.pointerId)&&this.row.releasePointerCapture(t.pointerId)}cancelGesture(){let t=this.gesture;t&&(this.releaseGesture(),t.claimed&&(this.suppressClick=!0,this.motion?.track([this.position],[0]),this.settle(t.destination)))}settle(t){this.destination=Math.max(-this.layout.left,Math.min(this.layout.right,t)),this.destination!==0?this.motionSide=this.position*this.destination<0?null:this.destination<0?`left`:`right`:Math.abs(this.position)>.1&&(this.motionSide=this.position<0?`left`:`right`),this.settleMinimum=Math.min(0,this.position,this.destination),this.settleMaximum=Math.max(0,this.position,this.destination),this.panel?.setInput(`armed`,!1),this.phase.set(`settling`),this.panel?.setInput(`interactive`,this.destination!==0),this.destination===0&&(this.panel?.location.nativeElement.contains(this.nativeElement.ownerDocument.activeElement)&&this.focusOrigin().focus({preventScroll:!0}),this.swipeActionsService.release(this)),this.motion?.retarget([this.destination],this.bxA11yService.isReducedMotion())}paint(){let t=this.position<-.1?`left`:this.position>.1?`right`:null,e=t?`true`:`false`;this.nativeElement.dataset.bxSwipeActive=e,this.row?.getAttribute(`data-bx-swipe-active`)!==e&&this.row?.setAttribute(`data-bx-swipe-active`,e);let n=this.fullOptions(t);this.panel?.setInput(`armThreshold`,n.armThreshold),this.panel?.setInput(`commitThreshold`,n.commitThreshold),this.panel?.setInput(`readyLabel`,n.readyLabel),this.panel?.setInput(`side`,t),this.panel?.setInput(`reveal`,Math.abs(this.position)),this.panel?.setInput(`stretch`,t&&this.stretchSide===t?Math.max(0,Math.abs(this.position)-this.layout[t]):0)}updateLayout(t){let e=t.left!==this.layout.left||t.right!==this.layout.right||t.full!==this.layout.full;if(this.layout=t,this.phase()===`dismissing`||this.phase()===`dismissed`)return;let n=this.fullOperation();if(n){e&&this.holdFullAction(n.side,n.status);return}e&&(this.cancelGesture(),this.cancelWheel(),this.settle(this.destination<0?-t.left:this.destination>0?t.right:0))}openContext(t){this.pending().length||this.phase()===`dismissing`||this.phase()===`dismissed`||this.swipeDisabled()||this.swipeLoading()||this.menuItem?.disabled()||this.menuItem?.loading()||(t.preventDefault(),t.stopPropagation(),this.closeSwipeActions(),this.completed.set(null),this.panel?.setInput(`origin`,this.focusOrigin()),this.panel?.instance.openContext(t))}operationBlocksGesture(){return this.pending().length>0||!!this.fullOperation()||this.phase()===`dismissing`||this.phase()===`dismissed`}holdFullAction(t,e){this.stretchSide=t,this.motionSide=t,this.destination=Math.max(this.layout.full,this.layout[t])*(t===`left`?-1:1),this.phase.set(e),this.panel?.setInput(`interactive`,!0),this.panel?.setInput(`armed`,!1),this.motion?.track([this.position],[0]),this.motion?.retarget([this.destination],this.bxA11yService.isReducedMotion())}invoke(t){let e=[...this.leftSwipeActions(),...this.rightSwipeActions()].find(u=>u.id===t.action.id);if(!e||this.pending().length||this.phase()===`dismissing`||this.phase()===`dismissed`||this.swipeDisabled()||this.swipeLoading()||this.menuItem?.disabled()||this.menuItem?.loading()||e.disabled||e.loading)return;let n=++this.commandRevision,o=s(r({},t),{action:e,retry:this.failed().includes(e.id)}),r$6=e.completion??this.swipeCompletion(),a=t.source===`full-swipe`?this.stretchSide:this.fullOperation()?.id===e.id?this.fullOperation()?.side:null;if(this.completed.set(null),this.failed.update(u=>u.filter(g=>g!==e.id)),this.pending.set([e.id]),a&&(this.fullOperation.set({id:e.id,side:a,status:`pending`}),this.holdFullAction(a,`pending`)),this.focusOrigin().focus({preventScroll:!0}),this.swipeAction.emit(o),!this.destroyRef.destroyed)try{let u=e.handler?.(o);u?(this.working.set([e.id]),u.then(()=>this.completeAction(o,r$6,n),g=>this.failAction(e,g,n))):this.completeAction(o,r$6,n)}catch(u){this.failAction(e,u,n)}}completeAction(t,e,n){if(!(this.destroyRef.destroyed||n!==this.commandRevision)){if(this.working.set([]),this.completed.set(t.action),this.wheelGesture?.committed){this.completeAfterWheel=()=>this.completeAction(t,e,n);return}if(this.pending.set([]),this.panel?.instance.closeContext(),e===`dismiss`){this.dismissRow(t);return}this.fullOperation.set(null),this.motion?.track([this.position],[0]),this.settle(0)}}failAction(t,e,n){if(this.destroyRef.destroyed||n!==this.commandRevision)return;this.pending.set([]),this.working.set([]),this.failed.update(r=>[...r,t.id]);let o=this.fullOperation();o&&(this.fullOperation.set(s(r({},o),{status:`error`})),this.holdFullAction(o.side,`error`)),this.swipeActionError.emit({action:t,error:e})}dismissRow(t){this.phase.set(`dismissing`),this.motion?.track([this.position],[0]),this.panel?.setInput(`interactive`,!1),this.swipeActionsService.release(this),this.moveDismissedFocus(),this.dismissal?.start(this.fullOperation()?.side??this.motionSide,this.bxA11yService.isReducedMotion(),()=>{this.destroyRef.destroyed||(this.phase.set(`dismissed`),this.swipeDismissed.emit(t))})}moveDismissedFocus(){if(!this.nativeElement.contains(this.nativeElement.ownerDocument.activeElement))return;let t=this.swipeDismissFocus();if(t&&!this.nativeElement.contains(t)){(t.tabIndex>=0?t:t.querySelector(`button:not(:disabled),a[href],[tabindex="0"],input:not(:disabled)`)??t).focus({preventScroll:!0});return}let e=Array.from(this.nativeElement.parentElement?.children??[]),n=e.indexOf(this.nativeElement),o=[...e.slice(n+1),...e.slice(0,n).reverse()];for(let r of o){let a=r.querySelector(`button:not(:disabled),a[href],[tabindex="0"]`);if(a&&!a.closest(`[inert],[hidden],[aria-hidden="true"]`)&&a.getClientRects().length){a.focus({preventScroll:!0});return}}this.focusOrigin().blur()}style(t,e,n){let o=this.originalStyles.get(t);o||(o=/* @__PURE__ */ new Map,this.originalStyles.set(t,o)),o.has(e)||o.set(e,t.style.getPropertyValue(e)),t.style.getPropertyValue(e)!==n&&t.style.setProperty(e,n)}teardown(){++this.commandRevision,this.completeAfterWheel=void 0,this.dismissal?.restore(),this.dismissal=void 0,this.fullOperation.set(null),this.pending.set([]),this.working.update(t=>t.length?[]:t),this.completed.set(null),this.releaseGesture(),this.cancelWheel(),this.swipeActionsService.release(this),this.motion?.destroy(),this.motion=void 0,this.listeners?.abort(),this.listeners=void 0,this.visibilityObserver?.disconnect(),this.visibilityObserver=void 0,this.panel?.instance.closeContext(),this.panel?.destroy(),this.panel=void 0;for(let[t,e]of this.originalStyles)for(let[n,o]of e)o?t.style.setProperty(n,o):t.style.removeProperty(n);this.originalStyles.clear(),this.originalRowActive===null?this.row?.removeAttribute(`data-bx-swipe-active`):this.row?.setAttribute(`data-bx-swipe-active`,this.originalRowActive),this.originalRowActive=null,this.row=void 0,this.movable=void 0,delete this.nativeElement.dataset.bxSwipeActive,delete this.nativeElement.dataset.bxSwipeHover,delete this.nativeElement.dataset.bxSwipeFocus,this.position=0,this.destination=0,this.motionSide=null,this.stretchSide=null,this.stretchPermitted=!1,this.suppressClick=!1,this.phase.set(`closed`)}static ɵfac=function(e){return new(e||i)};static ɵdir=pe({type:i,selectors:[[``,`bxSwipeActions`,``]],inputs:{swipeContent:[1,`swipeContent`],swipeDisabled:[1,`swipeDisabled`],swipeLoading:[1,`swipeLoading`],leftSwipeActions:[1,`leftSwipeActions`],rightSwipeActions:[1,`rightSwipeActions`],swipePreviousLabel:[1,`swipePreviousLabel`],swipeNextLabel:[1,`swipeNextLabel`],swipeTooltipDwell:[1,`swipeTooltipDwell`],swipeFullAction:[1,`swipeFullAction`],swipeCompletion:[1,`swipeCompletion`],swipeDismissFocus:[1,`swipeDismissFocus`],swipeRetryLabel:[1,`swipeRetryLabel`],swipeLoadingLabel:[1,`swipeLoadingLabel`],swipeCompletedLabel:[1,`swipeCompletedLabel`]},outputs:{swipeDismissed:`swipeDismissed`,swipeAction:`swipeAction`,swipeActionError:`swipeActionError`},exportAs:[`bxSwipeActions`]})};function ei(i){let t=Number(i);return Number.isFinite(t)?Math.max(1,Math.floor(t)):1}var Ol=[`searchInput`];var kl=[`origin`];var Il=[`valueOverflow`];var Dl=[`labelOverflow`];var Ht=class i extends ve{bxA11yService=b(Br$1);ngZone=b(le);overlay=b(Ld$1);overlayContext=b(Ae,{optional:!0});i18n=b(VQ,{optional:!0});scrollLockService=b(Nw);scrollLockId=qK();debouncing=$(!1);searchRequest=$(!1);knownOptions=$([]);connectedOverlay=Sz(pR);searchInputRef=Sz(`searchInput`);originRef=Sz(`origin`,{read:ke});hasOptionActions=G(()=>this.options().some(t=>!!(t.leftSwipeActions?.length||t.rightSwipeActions?.length)));hasSelection=G(()=>this.internalValue()!==null&&this.internalValue()!==void 0);showClear=G(()=>this.clearable()&&this.hasSelection()&&!this.isReadonly());resolvedClearLabel=G(()=>LQ(this.clearLabel(),this.i18n));resolvedClearTooltip=G(()=>LQ(this.clearTooltip()??this.clearLabel(),this.i18n));panelScrollStrategy=this.overlay.scrollStrategies.noop();isPanelAttached=$(!1);searchTerm=G(()=>this.searchValue());truncatedSelectionTooltip=G(()=>!this.resolvedTooltipOnTruncate()||this.isOpen()?``:qi$1(this.selectedOptionLabel()||this.resolvedPlaceholder(),this.valueOverflow()?.truncated()??!1)||qi$1(this.resolvedLabel(),this.labelOverflow()?.truncated()??!1));overlayPositions=[new Hr$1({originX:`start`,originY:`bottom`},{overlayX:`start`,overlayY:`top`},0,4),new Hr$1({originX:`start`,originY:`top`},{overlayX:`start`,overlayY:`bottom`},0,-4)];resolvedOptions=G(()=>this.options().map(t=>s(r({},t),{resolvedStr:LQ(t.label,this.i18n),resolvedGroup:LQ(t.group,this.i18n)})));filteredOptions=G(()=>{let t=this.searchTerm().trim().toLocaleLowerCase();return this.externalFiltering()||!t?this.resolvedOptions():this.resolvedOptions().filter(e=>e.resolvedStr.toLocaleLowerCase().includes(t))});selectedOptions=G(()=>this.knownOptions().filter(t=>this.isSelected(t.value)));selectedOptionLabel=G(()=>this.selectedOptions().map(t=>LQ(t.label,this.i18n)).join(`, `));isFloating=G(()=>this.isOpen()||this.value()!==null&&(!Array.isArray(this.value())||this.value().length>0)||this.resolvedFloatLabel()===`always`);resolvedSearchPlaceholder=G(()=>LQ(this.searchPlaceholder(),this.i18n));resolvedEmptyMessage=G(()=>LQ(this.emptyMessage(),this.i18n));triggerContext=G(()=>({$implicit:this.value(),labels:this.selectedOptions().map(t=>LQ(t.label,this.i18n))}));visibleTags=G(()=>this.selectedOptions().slice(0,this.visibleTagCount()));overflowTagLabel=G(()=>{let t=Math.max(0,this.selectedOptions().length-this.visibleTagCount());return LQ(this.tagOverflowText(),this.i18n,{count:t}).replaceAll(`{count}`,String(t))});overflowTagTooltip=G(()=>this.selectedOptions().slice(this.visibleTagCount()).map(t=>LQ(t.label,this.i18n)).join(`, `));resolvedLoadingAriaLabel=G(()=>LQ(this.loadingAriaLabel(),this.i18n));resolvedLoadingLabel=G(()=>LQ(this.loadingLabel(),this.i18n));valueOverflow=Sz(`valueOverflow`);labelOverflow=Sz(`labelOverflow`);isSearching=G(()=>this.debouncing()||this.searchRequest());isOpen=$(!1);clearable=ee(!0);clearLabel=ee(`Clear selection`);clearTooltip=ee(void 0);selectionDisplay=ee(`text`);tagConfig=ee({});overflowTagConfig=ee({});visibleTagCount=ee(1,{transform:ei});tagOverflowText=ee(`+{count}`);options=ee.required();compareWith=ee(Object.is);isSearchable=ee(!1);externalFiltering=ee(!1);searchValue=_z(``);searchDebounce=ee(300);searchPlaceholder=ee(`Search...`);emptyMessage=ee(`No results found.`);loadingLabel=ee(void 0);loadingAriaLabel=ee(`Loading`);hasMore=ee(!1);loadError=ee(void 0);loadMoreConfig=ee({});loadMoreTemplate=ee(void 0);panelWidth=ee(void 0);optionStartTemplate=ee(void 0);optionEndTemplate=ee(void 0);panelClass=ee(``);optionTemplate=ee(void 0);triggerTemplate=ee(void 0);search=Pk();loadMore=Pk();openedChange=Pk();transition;selectionMotion;disconnectTheme;disconnectLighting;disconnectOrigin;transitionRevision=0;focusOnOpen=null;searchTimeout;typeaheadTimeout;typeaheadText=``;constructor(){super(),We$1(()=>{let t=this.bxA11yService.isReducedMotion();this.selectionMotion?.update({reducedMotion:t})}),We$1(()=>{this.searchRequest()&&!this.loading()&&!this.debouncing()&&this.searchRequest.set(!1)}),We$1(()=>{let t=this.resolvedOptions(),e=de(this.knownOptions).filter(n=>this.isSelected(n.value)&&!t.some(o=>this.compareWith()(o.value,n.value)));this.knownOptions.set([...e,...t])}),We$1(()=>{(this.disabled()||this.isReadonly())&&this.isOpen()&&this.close()}),b(ge).onDestroy(()=>{clearTimeout(this.searchTimeout),clearTimeout(this.typeaheadTimeout)})}ngOnDestroy(){++this.transitionRevision,this.onPanelDetach(),this.scrollLockService.enableScroll(this.scrollLockId)}toggleOpen(){this.disabled()||this.isReadonly()||(this.isOpen()?this.close():this.open())}open(){if(this.disabled()||this.isReadonly()||this.isOpen())return;++this.transitionRevision,this.isOpen.set(!0),this.openedChange.emit(!0),this.isPanelAttached.set(!0),this.scrollLockService.disableScroll(this.scrollLockId,{handleTouchInput:!0});let t=this.connectedOverlay()?.overlayRef?.overlayElement;t&&(t.inert=!1);let e=this.transition;e&&this.ngZone.runOutsideAngular(()=>e.enter()),this.connectedOverlay()?.overlayRef?.hasAttached()&&this.isSearchable()&&queueMicrotask(()=>this.searchInputRef()?.focus())}close(){let t=this.isOpen();this.isOpen.set(!1),this.scrollLockService.enableScroll(this.scrollLockId),t&&(this.openedChange.emit(!1),this.markAsTouched());let e=++this.transitionRevision,n=this.connectedOverlay()?.overlayRef?.overlayElement;n?.contains(n.ownerDocument.activeElement)&&this.originRef()?.nativeElement.focus({preventScroll:!0}),n&&(n.inert=!0);let o=this.transition;o&&!this.bxA11yService.isReducedMotion()?this.ngZone.runOutsideAngular(()=>o.exit()).then(()=>{e===this.transitionRevision&&!this.isOpen()&&this.detachPanel()}).catch(()=>{e===this.transitionRevision&&this.detachPanel()}):this.detachPanel()}onPanelAttach(t){let e=this.transitionRevision,n=this.originRef()?.nativeElement,o=t.overlayRef;n&&o?.hasAttached()&&(this.disconnectLighting?.(),this.disconnectLighting=DR(o.overlayElement,n),this.disconnectOrigin?.(),this.disconnectOrigin=this.ngZone.runOutsideAngular(()=>RK(o,n))),queueMicrotask(()=>{let r=t.overlayRef,a=this.originRef()?.nativeElement;if(!r?.hasAttached()||!a||!this.isOpen()||e!==this.transitionRevision)return;this.disconnectTheme?.(),this.disconnectTheme=this.ngZone.runOutsideAngular(()=>BK(a,r.overlayElement)),r.updatePosition();let u=r.overlayElement.querySelector(`[role="listbox"], [role="grid"]`);if(this.selectionMotion?.destroy(),this.selectionMotion=u?this.ngZone.runOutsideAngular(()=>TR(u,{selector:`.bx-select-option`,reducedMotion:this.bxA11yService.isReducedMotion()})):void 0,!this.bxA11yService.isReducedMotion()){this.transition?.destroy(),this.transition=this.ngZone.runOutsideAngular(()=>MR(a,r.overlayElement));let g=this.transition;this.ngZone.runOutsideAngular(()=>g.enter()).catch(()=>{e===this.transitionRevision&&(this.transition?.destroy(),this.transition=void 0)})}if(this.isSearchable())this.searchInputRef()?.focus();else{let g=this.panelItems();(g.find(S=>S.getAttribute(`aria-selected`)===`true`)??(this.focusOnOpen===`last`?g[g.length-1]:g[0]))?.focus()}this.focusOnOpen=null})}onPanelDetach(){this.selectionMotion?.destroy(),this.selectionMotion=void 0,this.transition?.destroy(),this.transition=void 0,this.disconnectTheme?.(),this.disconnectTheme=void 0,this.disconnectLighting?.(),this.disconnectLighting=void 0,this.disconnectOrigin?.(),this.disconnectOrigin=void 0}overlayPopoverLocation(t){return!!this.overlayContext?.useTopLayer||!!t.closest(`dialog, [role="dialog"], [role="alertdialog"], bx-modal, bx-modal-core, [popover]`)?`global`:null}refreshPanel(){this.transition?.refresh()}panelInlineSize(t){let e=this.panelWidth();return`min(${typeof e==`number`?`${e}px`:e??`${t}px`}, calc(100vw - 16px))`}onTriggerKey(t){if(!(this.disabled()||this.isReadonly())){if(t.key===`Escape`||t.altKey&&t.key===`ArrowUp`){t.preventDefault(),this.close();return}[`ArrowDown`,`ArrowUp`,`Enter`,` `].includes(t.key)?(t.preventDefault(),this.focusOnOpen=t.key===`ArrowUp`?`last`:`first`,this.open()):t.key.length===1&&!t.ctrlKey&&!t.metaKey&&!t.altKey&&(this.open(),this.typeahead(t.key))}}onPanelKey(t){if(t.key===`Escape`||t.key===`Tab`||t.altKey&&t.key===`ArrowUp`){t.key!==`Tab`&&t.preventDefault(),t.stopPropagation(),this.close();return}let e=t.target;if(e.closest(`bx-swipe-action-panel`)&&![`ArrowDown`,`ArrowUp`,`Home`,`End`].includes(t.key))return;let n=e.matches(`input,textarea`);if(n&&![`ArrowDown`,`ArrowUp`].includes(t.key))return;if(![`ArrowDown`,`ArrowUp`,`Home`,`End`].includes(t.key)){!n&&t.key.length===1&&t.key!==` `&&this.typeahead(t.key);return}let o=this.panelItems();if(!o.length)return;let r=o[0].ownerDocument.activeElement,a=o.findIndex(g=>g===r||g.closest(`.bx-select-option-row`)?.contains(r)),u=t.key===`Home`?0:t.key===`End`?o.length-1:t.key===`ArrowDown`?(a+1)%o.length:a<0?o.length-1:(a-1+o.length)%o.length;t.preventDefault(),o[u].focus()}onTriggerBlur(){this.isOpen()||this.markAsTouched()}onOutsideClick(t){if(t.type===`auxclick`&&t.button===2)return;let e=t.target,n=this.connectedOverlay()?.overlayRef?.overlayElement,o=this.originRef()?.nativeElement;o&&kN(o,e)||n&&kN(n,e)||this.close()}clearSelectedValue(t){return this.disabled()||this.isReadonly()?!1:(this.updateValue(t),this.close(),this.markAsTouched(),this.focus({preventScroll:!0}),!0)}onSearchChange(t){clearTimeout(this.searchTimeout),this.debouncing.set(!0),this.searchTimeout=setTimeout(()=>{this.debouncing.set(!1),this.searchRequest.set(this.externalFiltering()),this.searchValue.set(t),this.search.emit(t)},this.searchDebounce())}selectionTagConfig(t){return r(r({},this.tagConfig()),t.tagConfig)}requestMore(t){this.loadMore.emit(r({},t))}detachPanel(){this.onPanelDetach(),this.isPanelAttached.set(!1),this.connectedOverlay()?.detachOverlay(),this.scrollLockService.enableScroll(this.scrollLockId)}typeahead(t){clearTimeout(this.typeaheadTimeout),this.typeaheadText+=t.toLocaleLowerCase(),this.typeaheadTimeout=setTimeout(()=>{this.typeaheadText=``},700),queueMicrotask(()=>this.panelItems().find(e=>e.textContent?.trim().toLocaleLowerCase().startsWith(this.typeaheadText))?.focus())}panelItems(){return Array.from(this.connectedOverlay()?.overlayRef?.overlayElement.querySelectorAll(`.bx-select-option:not(:disabled)`)??[])}static ɵfac=function(e){return new(e||i)};static ɵdir=pe({type:i,viewQuery:function(e,n){e&1&&Yy(n.connectedOverlay,pR,5)(n.searchInputRef,Ol,5)(n.originRef,kl,5,ke)(n.valueOverflow,Il,5)(n.labelOverflow,Dl,5),e&2&&fb(5)},inputs:{clearable:[1,`clearable`],clearLabel:[1,`clearLabel`],clearTooltip:[1,`clearTooltip`],selectionDisplay:[1,`selectionDisplay`],tagConfig:[1,`tagConfig`],overflowTagConfig:[1,`overflowTagConfig`],visibleTagCount:[1,`visibleTagCount`],tagOverflowText:[1,`tagOverflowText`],options:[1,`options`],compareWith:[1,`compareWith`],isSearchable:[1,`isSearchable`],externalFiltering:[1,`externalFiltering`],searchValue:[1,`searchValue`],searchDebounce:[1,`searchDebounce`],searchPlaceholder:[1,`searchPlaceholder`],emptyMessage:[1,`emptyMessage`],loadingLabel:[1,`loadingLabel`],loadingAriaLabel:[1,`loadingAriaLabel`],hasMore:[1,`hasMore`],loadError:[1,`loadError`],loadMoreConfig:[1,`loadMoreConfig`],loadMoreTemplate:[1,`loadMoreTemplate`],panelWidth:[1,`panelWidth`],optionStartTemplate:[1,`optionStartTemplate`],optionEndTemplate:[1,`optionEndTemplate`],panelClass:[1,`panelClass`],optionTemplate:[1,`optionTemplate`],triggerTemplate:[1,`triggerTemplate`]},outputs:{searchValue:`searchValueChange`,search:`search`,loadMore:`loadMore`,openedChange:`openedChange`},features:[yt]})};var Rl=[[[``,`bxIconStart`,``],[``,`bxPrefix`,``]],[[``,`bxSuffix`,``],[``,`bxIconEnd`,``]],[[`bx-error`]],[[`bx-hint`]]];var Ll=[`[bxIconStart], [bxPrefix]`,`[bxSuffix], [bxIconEnd]`,`bx-error`,`bx-hint`];var Al=[`ngProjectAs`,`bx-error`,5,[`bx-error`]];var Fl=[`ngProjectAs`,`bx-hint`,5,[`bx-hint`]];var Ur=()=>[];var ro=(i,t,e)=>({$implicit:i,selected:t,index:e});var Yr=(i,t)=>t.value;function Vl(i,t){i&1&&(bo(0,`span`,20),lA(1,`*`),Go())}function zl(i,t){if(i&1&&(bo(0,`span`,11)(1,`span`,19,2),lA(3),Go(),od$1(4,Vl,2,0,`span`,20),Go()),i&2){let e=Wo();Xl$1(),xo(`bxTruncate`,!0),Xl$1(2),ik(e.resolvedLabel()),Xl$1(),nd$1(e.required()&&!e.resolvedHideRequiredMarker()?4:-1)}}function Bl(i,t){if(i&1&&$s$1(0,13),i&2){let e=Wo();xo(`ngTemplateOutlet`,t)(`ngTemplateOutletContext`,e.triggerContext())}}function Hl(i,t){if(i&1&&sd$1(0,`bx-tag`,21),i&2){let e=t.$implicit,n=Wo(2);xo(`text`,e.label)(`config`,n.selectionTagConfig(e))(`disabled`,n.disabled()||!!e.disabled)(`focusable`,!1)(`tooltipOnTruncate`,n.resolvedTooltipOnTruncate()?void 0:!1)}}function Wl(i,t){if(i&1&&sd$1(0,`bx-tag`,22),i&2){let e=Wo(2);xo(`text`,e.overflowTagLabel())(`config`,e.overflowTagConfig())(`tooltip`,e.overflowTagTooltip())(`focusable`,!1)(`tooltipOnTruncate`,e.resolvedTooltipOnTruncate()?void 0:!1)}}function ql(i,t){if(i&1&&(bo(0,`span`,14),ab(1,Hl,1,5,`bx-tag`,21,Yr),od$1(3,Wl,1,5,`bx-tag`,22),Go()),i&2){let e=Wo();Xl$1(),cb(e.visibleTags()),Xl$1(2),nd$1(e.selectedOptions().length>e.visibleTagCount()?3:-1)}}function jl(i,t){if(i&1&&lA(0),i&2){let e=Wo();mb(` `,e.selectedOptionLabel()||(e.isFloating()||!e.label()?e.resolvedPlaceholder():``),` `)}}function $l(i,t){i&1&&sd$1(0,`bx-loading-spinner`,23),i&2&&xo(`size`,16)(`decorative`,!0)}function Gl(i,t){i&1&&sd$1(0,`bx-icon`,24)}function Kl(i,t){if(i&1&&od$1(0,$l,1,2,`bx-loading-spinner`,23)(1,Gl,1,0,`bx-icon`,24),i&2){let e=t.$implicit;nd$1(e?0:1)}}function Zl(i,t){if(i&1){let e=pb();bo(0,`button`,25),br$1(`click`,function(){al$1(e);let o=Wo();return cl$2(o.clearSelection())}),sd$1(1,`bx-icon`,26),Go()}if(i&2){let e=Wo();xo(`surfaceEffects`,!1)(`disabled`,e.disabled())(`bxTooltip`,e.resolvedClearTooltip()),vo(`aria-label`,e.resolvedClearLabel())}}function Xl(i,t){if(i&1){let e=pb();bo(0,`div`,29)(1,`bx-search-input`,34,5),br$1(`search`,function(o){al$1(e);let r=Wo(3);return cl$2(r.onSearchChange(o))})(`keydown.enter`,function(o){return o.preventDefault()}),Go()()}if(i&2){let e=Wo(3);Xl$1(),xo(`value`,e.searchValue())(`compact`,!0)(`placeholder`,e.resolvedSearchPlaceholder())(`ariaLabel`,e.resolvedSearchPlaceholder())}}function Ul(i,t){if(i&1&&(bo(0,`div`,35)(1,`span`),lA(2),Go()()),i&2){let e=Wo(),n=e.$implicit,o=e.$index,r=Wo(3);xo(`id`,r.controlId()+`-group-`+o),vo(`role`,r.hasOptionActions()?`row`:null),Xl$1(),vo(`role`,r.hasOptionActions()?`columnheader`:null),Xl$1(),ik(n.resolvedGroup)}}function Yl(i,t){i&1&&sd$1(0,`bx-icon`,40)}function Ql(i,t){if(i&1&&(bo(0,`span`,41),$s$1(1,13),Go()),i&2){let e=Wo(),n=e.$implicit,o=e.$index,r=Wo(3);Xl$1(),xo(`ngTemplateOutlet`,t)(`ngTemplateOutletContext`,CA(2,ro,n,r.isSelected(n.value),o))}}function Jl(i,t){if(i&1&&sd$1(0,`bx-icon`,42),i&2){let e=Wo().$implicit;xo(`name`,e.icon)}}function ed(i,t){if(i&1&&$s$1(0,13),i&2){let e=Wo(),n=e.$implicit,o=e.$index,r=Wo(3);xo(`ngTemplateOutlet`,t)(`ngTemplateOutletContext`,CA(2,ro,n,r.isSelected(n.value),o))}}function td(i,t){if(i&1&&lA(0),i&2){let e=Wo().$implicit;mb(` `,e.resolvedStr,` `)}}function nd(i,t){if(i&1&&(bo(0,`span`,44),$s$1(1,13),Go()),i&2){let e=Wo(),n=e.$implicit,o=e.$index,r=Wo(3);Xl$1(),xo(`ngTemplateOutlet`,t)(`ngTemplateOutletContext`,CA(2,ro,n,r.isSelected(n.value),o))}}function id(i,t){if(i&1&&sd$1(0,`bx-icon`,45),i&2){let e=Wo().$implicit;xo(`name`,e.endIcon)}}function od(i,t){if(i&1){let e=pb();od$1(0,Ul,3,4,`div`,35),bo(1,`div`,36)(2,`button`,37),br$1(`click`,function(){let o=al$1(e).$implicit,r=Wo(3);return cl$2(r.selectOption(o))}),bo(3,`span`,38)(4,`span`,39),od$1(5,Yl,1,0,`bx-icon`,40),Go(),od$1(6,Ql,2,6,`span`,41)(7,Jl,1,1,`bx-icon`,42),bo(8,`span`,43,6),od$1(10,ed,1,6,`ng-container`,13)(11,td,1,1),Go(),od$1(12,nd,2,6,`span`,44)(13,id,1,1,`bx-icon`,45),Go()()()}if(i&2){let e,n,o,r=t.$implicit,a=t.$index,u=FT(9),g=Wo(3);nd$1(r.resolvedGroup&&(a===0||g.filteredOptions()[a-1].resolvedGroup!==r.resolvedGroup)?0:-1),Xl$1(),xo(`leftSwipeActions`,r.leftSwipeActions??wA(15,Ur))(`rightSwipeActions`,r.rightSwipeActions??wA(16,Ur))(`swipeFullAction`,r.swipeFullAction??!0)(`swipeDisabled`,g.disabled()||g.isReadonly()||!!r.disabled||!!r.groupDisabled),vo(`role`,g.hasOptionActions()?`row`:`none`),Xl$1(),xo(`bxTooltip`,g.resolvedTooltipOnTruncate()&&u.truncated()?r.resolvedStr:``)(`disabled`,r.disabled||r.groupDisabled||!1),vo(`role`,g.hasOptionActions()?`gridcell`:`option`)(`aria-selected`,g.isSelected(r.value)),Xl$1(3),nd$1(g.isSelected(r.value)?5:-1),Xl$1(),nd$1((e=r.startTemplate??g.optionStartTemplate())?6:r.icon?7:-1,e),Xl$1(2),xo(`bxTruncate`,!g.optionTemplate()),Xl$1(2),nd$1((n=g.optionTemplate())?10:11,n),Xl$1(2),nd$1((o=r.endTemplate??g.optionEndTemplate())?12:r.endIcon?13:-1,o)}}function rd(i,t){if(i&1&&(bo(0,`div`,46),lA(1),Go()),i&2){let e=Wo(4);Xl$1(),ik(e.resolvedEmptyMessage())}}function ad(i,t){if(i&1&&od$1(0,rd,2,1,`div`,46),i&2){let e=Wo(3);nd$1(e.loading()?-1:0)}}function sd(i,t){if(i&1&&(bo(0,`span`),lA(1),Go()),i&2){let e=Wo(4);Xl$1(),ik(e.resolvedLoadingLabel())}}function ld(i,t){i&1&&sd$1(0,`bx-loading-spinner`,23),i&2&&xo(`size`,20)(`decorative`,!0)}function dd(i,t){if(i&1&&(bo(0,`div`,32),od$1(1,sd,2,1,`span`)(2,ld,1,2,`bx-loading-spinner`,23),Go()),i&2){let e=Wo(3);vo(`aria-label`,e.resolvedLoadingLabel()||e.resolvedLoadingAriaLabel()),Xl$1(),nd$1(e.resolvedLoadingLabel()?1:2)}}function cd(i,t){if(i&1&&(bo(0,`div`,33),sd$1(1,`bx-loading-indicator`,47),Go()),i&2){let e=Wo(3);Xl$1(),xo(`size`,16)(`label`,e.loadingLabel()??e.loadingAriaLabel())}}function ud(i,t){if(i&1){let e=pb();bo(0,`div`,28),br$1(`keydown`,function(o){al$1(e);let r=Wo(2);return cl$2(r.onPanelKey(o))}),od$1(1,Xl,3,4,`div`,29),bo(2,`div`,30,4),br$1(`loadMore`,function(o){al$1(e);let r=Wo(2);return cl$2(r.requestMore(o))}),bo(4,`div`,31),ab(5,od,14,17,null,null,Yr,!1,ad,1,1),Go(),od$1(8,dd,3,2,`div`,32)(9,cd,2,2,`div`,33),Go()()}if(i&2){let e=FT(3),n=Wo(2);JT(n.panelClass()),xo(`bxSurfaceInteractive`,!1),Xl$1(),nd$1(n.isSearchable()?1:-1),Xl$1(),xo(`loadMoreHasMore`,n.hasMore())(`loadMoreSuppressed`,n.isSearching())(`loadMoreLoading`,n.loading())(`loadMoreDisabled`,n.disabled()||n.isReadonly())(`loadMoreError`,n.loadError())(`loadMoreConfig`,n.loadMoreConfig())(`loadMoreTemplate`,n.loadMoreTemplate())(`loadMoreRevision`,n.options()),Xl$1(2),xo(`hidden`,n.isSearching())(`id`,n.controlId()+`-options`),vo(`role`,n.hasOptionActions()?`grid`:`listbox`)(`aria-label`,n.ariaLabel()||n.resolvedLabel()),Xl$1(),cb(n.filteredOptions()),Xl$1(3),nd$1(n.isSearching()?8:n.loading()&&!e.actionVisible()?9:-1)}}function pd(i,t){if(i&1){let e=pb();rd$1(0,ud,10,18,`ng-template`,27,3,RA),br$1(`overlayOutsideClick`,function(o){al$1(e);let r=Wo();return cl$2(r.onOutsideClick(o))})(`attach`,function(){al$1(e);let o=FT(1),r=Wo();return cl$2(r.onPanelAttach(o))})(`detach`,function(){al$1(e);let o=Wo();return cl$2(o.onPanelDetach())})(`positionChange`,function(){al$1(e);let o=Wo();return cl$2(o.refreshPanel())})}if(i&2){let e=Wo(),n=FT(3);xo(`cdkConnectedOverlayOrigin`,n)(`cdkConnectedOverlayOpen`,!0)(`cdkConnectedOverlayPositions`,e.overlayPositions)(`cdkConnectedOverlayHasBackdrop`,!1)(`cdkConnectedOverlayPush`,!0)(`cdkConnectedOverlayViewportMargin`,8)(`cdkConnectedOverlayScrollStrategy`,e.panelScrollStrategy)(`cdkConnectedOverlayUsePopover`,e.overlayPopoverLocation(n.elementRef.nativeElement))(`cdkConnectedOverlayWidth`,e.panelInlineSize(n.elementRef.nativeElement.offsetWidth))}}var ti=class i extends Ht{selectionChange=Pk();clearSelection(){this.clearSelectedValue(null)&&this.selectionChange.emit({value:null,source:`clear`})}isSelected(t){let e=this.internalValue();return e!==null&&this.compareWith()(e,t)}selectOption(t){t.disabled||t.groupDisabled||this.disabled()||this.isReadonly()||(this.updateValue(t.value),this.selectionChange.emit({value:t.value,source:`user`}),this.close())}static ɵfac=(()=>{let t;return function(n){return(t||(t=ho(i)))(n||i)}})();static ɵcmp=Fr$1({type:i,selectors:[[`bx-select`]],outputs:{selectionChange:`selectionChange`},features:[yt],ngContentSelectors:Ll,decls:20,vars:48,consts:[[`origin`,`cdkOverlayOrigin`],[`valueOverflow`,`bxTruncate`],[`labelOverflow`,`bxTruncate`],[`panelOverlay`,`cdkConnectedOverlay`],[`pagination`,`bxLoadMore`],[`searchInput`,``],[`optionText`,`bxTruncate`],[3,`control`,`inline`,`tooltip`,`showLoadingIndicator`,`hint`,`hintEnd`,`subscriptSizing`,`forId`],[1,`bx-select-control`],[`type`,`button`,`role`,`combobox`,`cdkOverlayOrigin`,``,`bxSurface`,``,1,`bx-select-trigger`,3,`click`,`keydown`,`blur`,`bxTooltip`,`bxTooltipHover`,`bxTooltipTouch`,`id`,`disabled`],[1,`bx-select-container`],[1,`bx-floating-label`],[1,`bx-select-value`,3,`bxTruncate`],[3,`ngTemplateOutlet`,`ngTemplateOutletContext`],[1,`bx-selected-tags`],[`aria-hidden`,`true`,1,`bx-select-caret`],[3,`value`],[`bx-button`,``,`type`,`button`,`variant`,`text`,1,`bx-select-clear`,3,`surfaceEffects`,`disabled`,`bxTooltip`],[`cdkConnectedOverlay`,``,3,`cdkConnectedOverlayOrigin`,`cdkConnectedOverlayOpen`,`cdkConnectedOverlayPositions`,`cdkConnectedOverlayHasBackdrop`,`cdkConnectedOverlayPush`,`cdkConnectedOverlayViewportMargin`,`cdkConnectedOverlayScrollStrategy`,`cdkConnectedOverlayUsePopover`,`cdkConnectedOverlayWidth`],[3,`bxTruncate`],[`aria-hidden`,`true`,1,`bx-field-required`],[3,`text`,`config`,`disabled`,`focusable`,`tooltipOnTruncate`],[1,`bx-overflow-tag`,3,`text`,`config`,`tooltip`,`focusable`,`tooltipOnTruncate`],[3,`size`,`decorative`],[`name`,`chevron-down`,`size`,`16`],[`bx-button`,``,`type`,`button`,`variant`,`text`,1,`bx-select-clear`,3,`click`,`surfaceEffects`,`disabled`,`bxTooltip`],[`name`,`x`,`size`,`16`],[`cdkConnectedOverlay`,``,3,`overlayOutsideClick`,`attach`,`detach`,`positionChange`,`cdkConnectedOverlayOrigin`,`cdkConnectedOverlayOpen`,`cdkConnectedOverlayPositions`,`cdkConnectedOverlayHasBackdrop`,`cdkConnectedOverlayPush`,`cdkConnectedOverlayViewportMargin`,`cdkConnectedOverlayScrollStrategy`,`cdkConnectedOverlayUsePopover`,`cdkConnectedOverlayWidth`],[`bxSurface`,``,`data-bx-surface`,`glass`,`tabindex`,`-1`,1,`bx-select-panel`,3,`keydown`,`bxSurfaceInteractive`],[1,`bx-select-search-container`],[`bxLoadMore`,``,1,`bx-select-menu-container`,3,`loadMore`,`loadMoreHasMore`,`loadMoreSuppressed`,`loadMoreLoading`,`loadMoreDisabled`,`loadMoreError`,`loadMoreConfig`,`loadMoreTemplate`,`loadMoreRevision`],[3,`hidden`,`id`],[`role`,`status`,1,`bx-select-search-state`],[1,`bx-select-loading`],[3,`search`,`keydown.enter`,`value`,`compact`,`placeholder`,`ariaLabel`],[1,`bx-select-group`,3,`id`],[`bxSwipeActions`,``,1,`bx-select-option-row`,3,`leftSwipeActions`,`rightSwipeActions`,`swipeFullAction`,`swipeDisabled`],[`type`,`button`,`tabindex`,`-1`,`bxTooltipTouch`,`longpress`,1,`bx-select-option`,3,`click`,`bxTooltip`,`disabled`],[`bxSwipeContent`,``,1,`bx-select-item-inner`],[`aria-hidden`,`true`,1,`bx-select-check-placeholder`],[`name`,`check`,`size`,`16`],[1,`bx-select-adornment`],[`size`,`16`,3,`name`],[1,`bx-select-option-label`,3,`bxTruncate`],[1,`bx-select-adornment`,`bx-select-adornment-end`],[`size`,`16`,1,`bx-select-adornment-end`,3,`name`],[`role`,`status`,1,`bx-select-empty`],[3,`size`,`label`]],template:function(e,n){if(e&1&&(ld$1(Rl),bo(0,`bx-form-field`,7)(1,`div`,8)(2,`button`,9,0),br$1(`click`,function(){return n.toggleOpen()})(`keydown`,function(r){return n.onTriggerKey(r)})(`blur`,function(){return n.onTriggerBlur()}),dd$1(4),bo(5,`div`,10),od$1(6,zl,5,3,`span`,11),bo(7,`span`,12,1),od$1(9,Bl,1,2,`ng-container`,13)(10,ql,4,1,`span`,14)(11,jl,1,1),Go()(),dd$1(12,1),bo(13,`span`,15)(14,`bx-visual-transition`,16),rd$1(15,Kl,2,1,`ng-template`),Go()()(),od$1(16,Zl,2,4,`button`,17),Go(),od$1(17,pd,2,9,null,18),dd$1(18,2,Al),dd$1(19,3,Fl),Go()),e&2){let o;xo(`control`,n.fieldControl)(`inline`,!0)(`tooltip`,n.tooltip())(`showLoadingIndicator`,!1)(`hint`,n.hint())(`hintEnd`,n.hintEnd())(`subscriptSizing`,n.resolvedSubscriptSizing())(`forId`,n.controlId()),Xl$1(),tr(`has-clear`,n.showClear()),Xl$1(),tr(`has-label`,!!n.label())(`is-invalid`,n.showError())(`is-outline`,n.resolvedAppearance()===`outline`)(`is-open`,n.isOpen())(`is-floating`,n.isFloating())(`is-readonly`,n.isReadonly())(`is-keyboard-focused`,n.keyboardFocused()),xo(`bxTooltip`,n.resolvedTooltipOnTruncate()?n.selectionDisplay()===`tags`?n.selectedOptionLabel():n.truncatedSelectionTooltip():``)(`bxTooltipHover`,n.selectionDisplay()!==`tags`)(`bxTooltipTouch`,n.selectionDisplay()===`tags`?`none`:`longpress`)(`id`,n.controlId())(`disabled`,n.disabled()),vo(`aria-haspopup`,n.hasOptionActions()?`grid`:`listbox`)(`data-testid`,n.dataTestId())(`aria-label`,n.ariaLabel()||n.resolvedLabel())(`aria-labelledby`,n.ariaLabelledBy())(`aria-describedby`,n.describedBy())(`aria-invalid`,n.showError())(`aria-required`,n.required())(`aria-readonly`,n.isReadonly())(`aria-busy`,n.loading()||n.pending()||n.isSearching())(`aria-expanded`,n.isOpen())(`aria-controls`,n.isPanelAttached()?n.controlId()+`-options`:null),Xl$1(4),nd$1(n.label()?6:-1),Xl$1(),tr(`is-placeholder`,!n.selectedOptionLabel()),xo(`bxTruncate`,!(n.selectionDisplay()===`tags`&&n.selectedOptions().length)&&!n.triggerTemplate()),Xl$1(2),nd$1((o=n.triggerTemplate())?9:n.selectionDisplay()===`tags`&&n.selectedOptions().length?10:11,o),Xl$1(5),xo(`value`,n.loading()||n.pending()||n.isSearching()),Xl$1(2),nd$1(n.showClear()?16:-1),Xl$1(),nd$1(n.isPanelAttached()?17:-1)}},dependencies:[Wu$1,GC,fR,pR,rh,ne,xe,ZC,zt,We,Bt,Ta$1,Xi$1,Et$1,Fs$1,Pt,ct],styles:[`
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
  --%NS%bx-option-radius: max(0px, var(--%NS%bx-select-panel-radius, var(--%NS%bx-rounded-lg, 0.75rem)) - (calc(var(--%NS%bx-select-panel-padding, var(--%NS%bx-space-1, 0.25rem)) + var(--%NS%bx-border-width, 1px))));
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  min-width: 100%;
  width: 100%;
  max-width: 100%;
  background-color: var(--%NS%bx-glass-surface, var(--%NS%bx-bg-surface));
  border: var(--%NS%bx-border-width, 1px) var(--%NS%bx-border-style, solid) var(--%NS%bx-glass-edge, var(--%NS%bx-border-default));
  border-radius: var(--%NS%bx-select-panel-radius, var(--%NS%bx-rounded-lg, 0.75rem));
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
  padding: var(--%NS%bx-select-panel-padding, var(--%NS%bx-space-1, 0.25rem));
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
  border-radius: var(--%NS%bx-select-option-radius, var(--%NS%bx-option-radius, var(--%NS%bx-rounded-sm, 0.25rem)));
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
  --%NS%bx-glass-radius: var(--%NS%bx-select-panel-radius, var(--%NS%bx-rounded-lg, 0.75rem));
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
.bx-select-item-inner[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:last-child:not(.bx-select-adornment, .bx-truncate) {
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
[_ngcontent-%COMP%]:is([role=listbox], [role=grid])[hidden] {
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
:is([role=listbox][_ngcontent-%COMP%], [role=grid][_ngcontent-%COMP%]) {
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
.bx-select-option-row[_ngcontent-%COMP%] {
  min-inline-size: 0;
  border-radius: var(--%NS%bx-select-option-radius, var(--%NS%bx-option-radius, var(--%NS%bx-rounded-sm, 0.25rem)));
}
.bx-select-adornment[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  flex: none;
}
.bx-select-adornment-end[_ngcontent-%COMP%] {
  margin-inline-start: auto;
}
.bx-select-option-label[_ngcontent-%COMP%] {
  flex: 1 1 auto;
  min-inline-size: 0;
}`]})};var bd=[`track`];var md=[`*`,[[`bx-error`]],[[`bx-hint`]]];var gd=[`*`,`bx-error`,`bx-hint`];var hd=[`ngProjectAs`,`bx-error`,5,[`bx-error`]];var fd=[`ngProjectAs`,`bx-hint`,5,[`bx-hint`]];function xd(i,t){i&1&&(bo(0,`span`,7),lA(1,`*`),Go())}var Qr=class i extends Rt{bxA11yService=b(Br$1);track=Sz(`track`);motion;constructor(){super(),Vk(()=>{let t=this.track()?.nativeElement,e=this.displayedChecked()?1:0,n=this.bxA11yService.isReducedMotion();if(!t)return;let o=!this.motion;this.motion??=Zn$1([e],([r],[a])=>{Kn$1(t,{"--bx-toggle-position":String(r),"--bx-toggle-stretch":String(this.bxA11yService.isReducedMotion()?0:Math.min(.05,Math.abs(a)*.008))})},vr$1.elastic),this.motion.retarget([e],o||n)}),this.destroyRef.onDestroy(()=>this.motion?.destroy())}static ɵfac=function(e){return new(e||i)};static ɵcmp=Fr$1({type:i,selectors:[[`bx-slide-toggle`]],viewQuery:function(e,n){e&1&&Yy(n.track,bd,5),e&2&&fb()},features:[yt],ngContentSelectors:gd,decls:12,vars:36,consts:[[`track`,``],[3,`control`,`inline`,`tooltip`,`loading`,`hint`,`hintEnd`,`subscriptSizing`,`forId`],[1,`bx-inline-wrapper`],[`type`,`checkbox`,`role`,`switch`,1,`bx-visually-hidden`,3,`click`,`change`,`blur`,`id`,`disabled`,`required`,`checked`],[`bxSurface`,``,1,`bx-slide-toggle-track`,3,`bxSurfaceEmission`,`bxSurfaceEmissionStrength`],[1,`bx-slide-toggle-thumb`],[1,`bx-inline-label`],[`aria-hidden`,`true`,1,`bx-inline-required`]],template:function(e,n){e&1&&(ld$1(md),bo(0,`bx-form-field`,1)(1,`label`,2)(2,`input`,3),br$1(`click`,function(r){return n.onReadonlyClick(r)})(`change`,function(r){return n.onToggle(r)})(`blur`,function(){return n.onBlur()}),Go(),bo(3,`div`,4,0),sd$1(5,`div`,5),Go(),bo(6,`span`,6),dd$1(7),lA(8),od$1(9,xd,2,0,`span`,7),Go()(),dd$1(10,1,hd),dd$1(11,2,fd),Go()),e&2&&(xo(`control`,n.fieldControl)(`inline`,!0)(`tooltip`,n.tooltip())(`loading`,n.loading())(`hint`,n.hint())(`hintEnd`,n.hintEnd())(`subscriptSizing`,n.resolvedSubscriptSizing())(`forId`,n.controlId()),Xl$1(),tr(`is-disabled`,n.disabled())(`is-readonly`,n.isReadonly())(`is-keyboard-focused`,n.keyboardFocused())(`label-before`,n.labelPosition()===`before`),Xl$1(),xo(`id`,n.controlId())(`disabled`,n.disabled())(`required`,n.effectiveRequired())(`checked`,n.displayedChecked()),vo(`name`,n.name()||null)(`data-testid`,n.dataTestId())(`aria-label`,n.ariaLabel())(`aria-labelledby`,n.ariaLabelledBy())(`aria-describedby`,n.describedBy())(`aria-invalid`,n.showError())(`aria-readonly`,n.isReadonly())(`aria-checked`,n.displayedChecked()),Xl$1(),tr(`is-checked`,n.displayedChecked())(`is-invalid`,n.showError()),xo(`bxSurfaceEmission`,n.showError()?`var(--bx-text-danger)`:`var(--bx-accent)`)(`bxSurfaceEmissionStrength`,n.displayedChecked()?1.1:.35),Xl$1(5),mb(``,n.resolvedLabel(),` `),Xl$1(),nd$1(n.effectiveRequired()&&!n.resolvedHideRequiredMarker()?9:-1))},dependencies:[GC,ne],styles:[`
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
  top: calc(3px - var(--%NS%bx-border-width, 1px));
  inset-inline-start: calc(3px - var(--%NS%bx-border-width, 1px));
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
}`]})};var ni=class i{elementRef=b(ke);bxA11yService=b(Br$1);glassiness=ee();discrete=ee(!1);displayWith=ee(String);showTickMarks=ee(!1);shell;valueLabel;tickMarks;tickList;thumb;motion;opticSurface;releaseGesture;pressed=!1;lastPosition=0;lastInputTime=0;trackWidth=0;thumbWidth=0;pointerId=null;constructor(){b(ni$1),We$1(()=>{let n=this.bxA11yService.isReducedMotion(),o=this.glassiness()??`auto`;this.opticSurface?.update({glassiness:o,quality:`auto`,localRefraction:!0,interactive:!1,emission:!1,reducedMotion:n}),n&&this.motion?.retarget([0,0],!0)}),aI(()=>this.sync());let t=b(le),e=b(ge);er(()=>{let n=this.elementRef.nativeElement,o=n.ownerDocument.createElement(`span`);o.className=`bx-slider-shell`;let r=n.ownerDocument.createElement(`span`);r.className=`bx-slider-thumb`,r.setAttribute(`aria-hidden`,`true`);let a=n.ownerDocument.createElement(`span`);a.className=`bx-slider-lens`,r.append(a);let u=n.ownerDocument.createElement(`span`);u.className=`bx-slider-optic`,u.hidden=!0,r.append(u),n.before(o),o.append(n,r),this.shell=o,this.thumb=r,this.motion=Zn$1([0,0],([F,ee])=>{let me=this.bxA11yService.isReducedMotion();u.hidden=F<.01,Kn$1(r,{"--bx-slider-pressure":String(me?0:F),"--bx-slider-stretch":String(me?0:Math.max(0,ee))})},vr$1.elastic);let g=F=>{F?.type===`visibilitychange`&&!n.ownerDocument.hidden||F&&`pointerId`in F&&F.pointerId!==this.pointerId||(this.pressed=!1,this.pointerId=null,this.motion?.retarget([0,0],this.bxA11yService.isReducedMotion()),n.ownerDocument.defaultView?.removeEventListener(`pointerup`,g,!0),n.ownerDocument.defaultView?.removeEventListener(`pointercancel`,g,!0),n.ownerDocument.defaultView?.removeEventListener(`blur`,g),n.ownerDocument.removeEventListener(`visibilitychange`,g),this.releaseGesture=void 0)},S=F=>{!F.isPrimary||F.button!==0||n.disabled||n.hasAttribute(`readonly`)||n.getAttribute(`aria-readonly`)===`true`||(this.opticSurface??=t.runOutsideAngular(()=>Yn$1(u,{glassiness:this.glassiness()??`auto`,quality:`auto`,localRefraction:!0,interactive:!1,emission:!1,reducedMotion:this.bxA11yService.isReducedMotion()})),this.pressed=!0,this.pointerId=F.pointerId,this.lastInputTime=0,this.motion?.retarget([1,0],this.bxA11yService.isReducedMotion()),n.ownerDocument.defaultView?.addEventListener(`pointerup`,g,!0),n.ownerDocument.defaultView?.addEventListener(`pointercancel`,g,!0),n.ownerDocument.defaultView?.addEventListener(`blur`,g),n.ownerDocument.addEventListener(`visibilitychange`,g),this.releaseGesture=g)};n.addEventListener(`pointerdown`,S),n.addEventListener(`blur`,g);let P=n.ownerDocument.createElement(`span`);P.className=`bx-slider-value-label`,P.setAttribute(`aria-hidden`,`true`),o.append(P),this.valueLabel=P;let O=n.ownerDocument.createElement(`datalist`);O.id=`bx-slider-ticks-${n.id||Math.random().toString(36).slice(2)}`,o.append(O),this.tickList=O;let E=n.ownerDocument.createElement(`span`);E.className=`bx-slider-ticks`,E.setAttribute(`aria-hidden`,`true`),o.append(E),this.tickMarks=E,this.sync();let z=()=>{this.trackWidth=n.offsetWidth,this.thumbWidth=r.offsetWidth,o.style.setProperty(`--bx-slider-center-y`,`${n.offsetTop+n.offsetHeight/2}px`),o.style.setProperty(`--bx-slider-track-start`,`${n.offsetLeft}px`),o.style.setProperty(`--bx-slider-track-width`,`${n.offsetWidth}px`),Wn$1(r),this.sync()},U=new ResizeObserver(z);t.runOutsideAngular(()=>{U.observe(n),U.observe(o),U.observe(r),z()});let Y=t.runOutsideAngular(()=>_R(r,F=>{let ee=F.reflectionStrength>F.strength,me=ee?F.reflectionStrength:F.strength;me<=.04?(r.style.removeProperty(`--bx-slider-light-color`),r.style.removeProperty(`--bx-slider-light-strength`)):(r.style.setProperty(`--bx-slider-light-color`,ee?F.reflection:F.color),r.style.setProperty(`--bx-slider-light-strength`,String(me))),r.style.setProperty(`--bx-slider-light-x`,`${ee?F.reflectionX:F.x}%`),r.style.setProperty(`--bx-slider-light-y`,`${ee?F.reflectionY:F.y}%`),Kn$1(o,{"--bx-slider-light-color":ee?F.reflection:F.color,"--bx-slider-light-strength":String(Math.max(.04,me))})},n));e.onDestroy(()=>{U.disconnect(),Y(),g(),n.removeEventListener(`pointerdown`,S),n.removeEventListener(`blur`,g),this.motion?.destroy(),this.opticSurface?.destroy(),this.opticSurface=void 0,n.parentNode===o?o.replaceWith(n):o.remove(),this.shell=this.thumb=void 0})})}onInput(t){let e=this.elementRef.nativeElement,n=(e.max===``?100:Number(e.max))-(e.min===``?0:Number(e.min)),o=n>0?e.valueAsNumber/n:0,r=Math.max(.008,(t.timeStamp-this.lastInputTime)/1e3),a=this.pressed&&this.lastInputTime>0?Math.min(.065,Math.abs(o-this.lastPosition)/r*.015):0;this.lastPosition=o,this.lastInputTime=t.timeStamp,this.motion?.retarget([this.pressed?1:0,a],this.bxA11yService.isReducedMotion()),this.sync()}sync(){let t=this.elementRef.nativeElement;(t.disabled||t.hasAttribute(`readonly`)||t.getAttribute(`aria-readonly`)===`true`)&&this.releaseGesture?.();let e=t.min===``?0:Number(t.min),n=t.max===``?100:Number(t.max),o=n>e?Math.max(0,Math.min(100,(t.valueAsNumber-e)/(n-e)*100)):0;if(this.shell&&this.thumbWidth>0&&this.trackWidth>0){let a=t.hasAttribute(`aria-valuemax`)?Number(t.getAttribute(`aria-valuemax`)):t.hasAttribute(`aria-valuemin`)?Number(t.getAttribute(`aria-valuemin`)):null;if(a!==null&&Number.isFinite(a)&&n>e){let u=Math.abs(a-t.valueAsNumber)/(n-e)*(this.trackWidth-this.thumbWidth),g=String(Math.max(0,Math.min(.45,u*2/this.thumbWidth-2)));this.shell.style.getPropertyValue(`--bx-slider-neighbor-limit`)!==g&&this.shell.style.setProperty(`--bx-slider-neighbor-limit`,g)}}if(this.valueLabel&&(this.valueLabel.hidden=!this.discrete(),this.valueLabel.textContent=this.displayWith()(t.valueAsNumber)),this.tickList){let a=Math.min(1e3,Math.floor((n-e)/(Number(t.step)||1))),u=`${e}:${n}:${t.step}:${this.showTickMarks()}`;if(this.tickList.dataset.range!==u&&(this.tickList.replaceChildren(),this.tickMarks?.replaceChildren(),this.tickList.dataset.range=u,this.showTickMarks()&&a>0))for(let g=0;g<=a;g++){let S=t.ownerDocument.createElement(`option`);S.value=String(e+g*(Number(t.step)||1)),this.tickList.append(S);let P=t.ownerDocument.createElement(`span`);P.className=`bx-slider-tick`,P.style.setProperty(`--bx-slider-tick-position`,String(g/a)),this.tickMarks?.append(P)}this.showTickMarks()?t.setAttribute(`list`,this.tickList.id):t.getAttribute(`list`)===this.tickList.id&&t.removeAttribute(`list`)}let r=`${Number.isFinite(o)?o:0}%`;if(t.style.getPropertyValue(`--bx-slider-progress`)!==r&&t.style.setProperty(`--bx-slider-progress`,r),this.shell){let a=String((Number.isFinite(o)?o:0)/100);this.shell.style.getPropertyValue(`--bx-slider-position`)!==a&&(this.shell.style.setProperty(`--bx-slider-position`,a),this.thumb&&Wn$1(this.thumb))}}static ɵfac=function(e){return new(e||i)};static ɵdir=pe({type:i,selectors:[[`input`,`type`,`range`,`bxSlider`,``]],hostAttrs:[1,`bx-slider`],hostBindings:function(e,n){e&1&&br$1(`input`,function(r){return n.onInput(r)})},inputs:{glassiness:[1,`glassiness`],discrete:[1,`discrete`],displayWith:[1,`displayWith`],showTickMarks:[1,`showTickMarks`]}})};var vd=[`*`,[[`bx-error`]],[[`bx-hint`]]];var yd=[`*`,`bx-error`,`bx-hint`];var Sd=[`ngProjectAs`,`bx-error`,5,[`bx-error`]];var _d=[`ngProjectAs`,`bx-hint`,5,[`bx-hint`]];var Jr=class i extends ve{groupName=G(()=>this.name()||this.controlId());focus(t){let e=this.nativeElement.querySelector(`input:checked:not(:disabled)`);e?e.focus(t):super.focus(t)}select(t){this.updateValue(t)}markTouched(){this.markAsTouched()}static ɵfac=(()=>{let t;return function(n){return(t||(t=ho(i)))(n||i)}})();static ɵcmp=Fr$1({type:i,selectors:[[`bx-radio-group`]],features:[rr([{provide:Gn,useExisting:jt(()=>i)}]),yt],ngContentSelectors:yd,decls:5,vars:15,consts:[[3,`control`,`label`,`hint`,`hintEnd`,`tooltip`,`hideRequiredMarker`,`subscriptSizing`,`forId`],[`role`,`radiogroup`,3,`id`]],template:function(e,n){e&1&&(ld$1(vd),bo(0,`bx-form-field`,0)(1,`div`,1),dd$1(2),Go(),dd$1(3,1,Sd),dd$1(4,2,_d),Go()),e&2&&(xo(`control`,n.fieldControl)(`label`,n.label())(`hint`,n.hint())(`hintEnd`,n.hintEnd())(`tooltip`,n.tooltip())(`hideRequiredMarker`,n.resolvedHideRequiredMarker())(`subscriptSizing`,n.resolvedSubscriptSizing())(`forId`,n.controlId()),Xl$1(),xo(`id`,n.controlId()),vo(`aria-label`,n.ariaLabel()||n.resolvedLabel())(`aria-labelledby`,n.ariaLabelledBy())(`aria-describedby`,n.describedBy())(`aria-invalid`,n.showError())(`aria-required`,n.effectiveRequired())(`aria-readonly`,n.isReadonly()))},dependencies:[ne],styles:[`
[_nghost-%COMP%] {
  display: block;
}
[role=radiogroup][_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: var(--%NS%bx-radio-group-gap, 0.5rem);
  --%NS%bx-field-subscript-height: 0;
}`]})};var ea=class i{static ɵfac=function(e){return new(e||i)};static ɵdir=pe({type:i,selectors:[[``,`bxPrefix`,``]],hostAttrs:[1,`bx-field-prefix`]})};var ta=class i{static ɵfac=function(e){return new(e||i)};static ɵdir=pe({type:i,selectors:[[``,`bxSuffix`,``]],hostAttrs:[1,`bx-field-suffix`]})};function na(i){let t=Number(i);return Number.isFinite(t)?Math.max(2,Math.floor(t)):2}var Cd=[`summaryOverflow`];var Md=[[[``,`bxIconStart`,``],[``,`bxPrefix`,``]],[[``,`bxSuffix`,``],[``,`bxIconEnd`,``]],[[`bx-error`]],[[`bx-hint`]]];var wd=[`[bxIconStart], [bxPrefix]`,`[bxSuffix], [bxIconEnd]`,`bx-error`,`bx-hint`];var Nd=[`ngProjectAs`,`bx-error`,5,[`bx-error`]];var Td=[`ngProjectAs`,`bx-hint`,5,[`bx-hint`]];var ia=()=>[];var ao=(i,t,e)=>({$implicit:i,selected:t,index:e});var ra=(i,t)=>t.value;function Pd(i,t){i&1&&(bo(0,`span`,22),lA(1,`*`),Go())}function Od(i,t){if(i&1&&(bo(0,`span`,12)(1,`span`,21,3),lA(3),Go(),od$1(4,Pd,2,0,`span`,22),Go()),i&2){let e=Wo();Xl$1(),xo(`bxTruncate`,!0),Xl$1(2),ik(e.resolvedLabel()),Xl$1(),nd$1(e.required()&&!e.resolvedHideRequiredMarker()?4:-1)}}function kd(i,t){if(i&1&&$s$1(0,14),i&2){let e=Wo();xo(`ngTemplateOutlet`,t)(`ngTemplateOutletContext`,e.triggerContext())}}function Id(i,t){if(i&1&&sd$1(0,`bx-tag`,23),i&2){let e=Wo(2);xo(`text`,e.allSelectedText())(`config`,e.tagConfig())(`focusable`,!1)(`tooltipOnTruncate`,!1)}}function Dd(i,t){if(i&1&&sd$1(0,`bx-tag`,24),i&2){let e=t.$implicit,n=Wo(3);xo(`text`,e.label)(`config`,n.selectionTagConfig(e))(`disabled`,n.disabled()||!!e.disabled)(`focusable`,!1)(`tooltipOnTruncate`,n.resolvedTooltipOnTruncate()?void 0:!1)}}function Ed(i,t){if(i&1&&sd$1(0,`bx-tag`,25),i&2){let e=Wo(3);xo(`text`,e.overflowTagLabel())(`config`,e.overflowTagConfig())(`tooltip`,e.overflowTagTooltip())(`focusable`,!1)(`tooltipOnTruncate`,e.resolvedTooltipOnTruncate()?void 0:!1)}}function Rd(i,t){if(i&1&&(ab(0,Dd,1,5,`bx-tag`,24,ra),od$1(2,Ed,1,5,`bx-tag`,25)),i&2){let e=Wo(2);cb(e.visibleTags()),Xl$1(2),nd$1(e.selectedOptions().length>e.visibleTagCount()?2:-1)}}function Ld(i,t){if(i&1&&(bo(0,`span`,15),od$1(1,Id,1,4,`bx-tag`,23)(2,Rd,3,1),Go()),i&2){let e=Wo();Xl$1(),nd$1(e.selectAll()&&e.allSelectedText()?1:2)}}function Ad(i,t){if(i&1&&lA(0),i&2){let e=Wo();mb(` `,e.displayedSelection()||(e.isFloating()||!e.label()?e.resolvedPlaceholder():``),` `)}}function Fd(i,t){i&1&&sd$1(0,`bx-loading-spinner`,26),i&2&&xo(`size`,16)(`decorative`,!0)}function Vd(i,t){i&1&&sd$1(0,`bx-icon`,27)}function zd(i,t){if(i&1&&od$1(0,Fd,1,2,`bx-loading-spinner`,26)(1,Vd,1,0,`bx-icon`,27),i&2){let e=t.$implicit;nd$1(e?0:1)}}function Bd(i,t){if(i&1){let e=pb();bo(0,`button`,28),br$1(`click`,function(){al$1(e);let o=Wo();return cl$2(o.clearSelection())}),sd$1(1,`bx-icon`,29),Go()}if(i&2){let e=Wo();xo(`surfaceEffects`,!1)(`disabled`,e.disabled())(`bxTooltip`,e.resolvedClearTooltip()),vo(`aria-label`,e.resolvedClearLabel())}}function Hd(i,t){if(i&1){let e=pb();bo(0,`div`,32)(1,`bx-search-input`,38,6),br$1(`search`,function(o){al$1(e);let r=Wo(3);return cl$2(r.onSearchChange(o))})(`keydown.enter`,function(o){return o.preventDefault()}),Go()()}if(i&2){let e=Wo(3);Xl$1(),xo(`value`,e.searchValue())(`compact`,!0)(`placeholder`,e.resolvedSearchPlaceholder())(`ariaLabel`,e.resolvedSearchPlaceholder())}}function Wd(i,t){if(i&1){let e=pb();bo(0,`button`,39),br$1(`click`,function(){al$1(e);let o=Wo(3);return cl$2(o.toggleSelectAll())}),sd$1(1,`bx-checkbox-indicator`,40),lA(2),Go()}if(i&2){let e=Wo(3);xo(`disabled`,e.disabled()||e.isReadonly()),vo(`aria-checked`,e.selectAllChecked()?`true`:e.someSelected()?`mixed`:`false`),Xl$1(),xo(`checked`,e.selectAllChecked())(`indeterminate`,!e.selectAllChecked()&&e.someSelected())(`disabled`,e.disabled()),Xl$1(),mb(` `,e.resolvedSelectAllLabel(),` `)}}function qd(i,t){if(i&1&&(bo(0,`div`,41)(1,`span`),lA(2),Go()()),i&2){let e=Wo(),n=e.$implicit,o=e.$index,r=Wo(3);xo(`id`,r.controlId()+`-group-`+o),vo(`role`,r.hasOptionActions()?`row`:null),Xl$1(),vo(`role`,r.hasOptionActions()?`columnheader`:null),Xl$1(),ik(n.resolvedGroup)}}function jd(i,t){if(i&1&&(bo(0,`span`,46),$s$1(1,14),Go()),i&2){let e=Wo(),n=e.$implicit,o=e.$index,r=Wo(3);Xl$1(),xo(`ngTemplateOutlet`,t)(`ngTemplateOutletContext`,CA(2,ao,n,r.isSelected(n.value),o))}}function $d(i,t){if(i&1&&sd$1(0,`bx-icon`,47),i&2){let e=Wo().$implicit;xo(`name`,e.icon)}}function Gd(i,t){if(i&1&&$s$1(0,14),i&2){let e=Wo(),n=e.$implicit,o=e.$index,r=Wo(3);xo(`ngTemplateOutlet`,t)(`ngTemplateOutletContext`,CA(2,ao,n,r.isSelected(n.value),o))}}function Kd(i,t){if(i&1&&lA(0),i&2){let e=Wo().$implicit;mb(` `,e.resolvedStr,` `)}}function Zd(i,t){if(i&1&&(bo(0,`span`,49),$s$1(1,14),Go()),i&2){let e=Wo(),n=e.$implicit,o=e.$index,r=Wo(3);Xl$1(),xo(`ngTemplateOutlet`,t)(`ngTemplateOutletContext`,CA(2,ao,n,r.isSelected(n.value),o))}}function Xd(i,t){if(i&1&&sd$1(0,`bx-icon`,50),i&2){let e=Wo().$implicit;xo(`name`,e.endIcon)}}function Ud(i,t){if(i&1){let e=pb();od$1(0,qd,3,4,`div`,41),bo(1,`div`,42)(2,`button`,43),br$1(`click`,function(){let o=al$1(e).$implicit,r=Wo(3);return cl$2(r.selectOption(o))}),bo(3,`span`,44),sd$1(4,`bx-checkbox-indicator`,45),od$1(5,jd,2,6,`span`,46)(6,$d,1,1,`bx-icon`,47),bo(7,`span`,48,7),od$1(9,Gd,1,6,`ng-container`,14)(10,Kd,1,1),Go(),od$1(11,Zd,2,6,`span`,49)(12,Xd,1,1,`bx-icon`,50),Go()()()}if(i&2){let e,n,o,r=t.$implicit,a=t.$index,u=FT(8),g=Wo(3);nd$1(r.resolvedGroup&&(a===0||g.filteredOptions()[a-1].resolvedGroup!==r.resolvedGroup)?0:-1),Xl$1(),xo(`leftSwipeActions`,r.leftSwipeActions??wA(16,ia))(`rightSwipeActions`,r.rightSwipeActions??wA(17,ia))(`swipeFullAction`,r.swipeFullAction??!0)(`swipeDisabled`,g.disabled()||g.isReadonly()||!!r.disabled||!!r.groupDisabled),vo(`role`,g.hasOptionActions()?`row`:`none`),Xl$1(),xo(`bxTooltip`,g.resolvedTooltipOnTruncate()&&u.truncated()?r.resolvedStr:``)(`disabled`,r.disabled||r.groupDisabled||!1),vo(`role`,g.hasOptionActions()?`gridcell`:`option`)(`aria-selected`,g.isSelected(r.value)),Xl$1(2),xo(`checked`,g.isSelected(r.value))(`disabled`,g.disabled()||!!r.disabled||!!r.groupDisabled),Xl$1(),nd$1((e=r.startTemplate??g.optionStartTemplate())?5:r.icon?6:-1,e),Xl$1(2),xo(`bxTruncate`,!g.optionTemplate()),Xl$1(2),nd$1((n=g.optionTemplate())?9:10,n),Xl$1(2),nd$1((o=r.endTemplate??g.optionEndTemplate())?11:r.endIcon?12:-1,o)}}function Yd(i,t){if(i&1&&(bo(0,`div`,51),lA(1),Go()),i&2){let e=Wo(4);Xl$1(),ik(e.resolvedEmptyMessage())}}function Qd(i,t){if(i&1&&od$1(0,Yd,2,1,`div`,51),i&2){let e=Wo(3);nd$1(e.loading()?-1:0)}}function Jd(i,t){if(i&1&&(bo(0,`span`),lA(1),Go()),i&2){let e=Wo(4);Xl$1(),ik(e.resolvedLoadingLabel())}}function ec(i,t){i&1&&sd$1(0,`bx-loading-spinner`,26),i&2&&xo(`size`,20)(`decorative`,!0)}function tc(i,t){if(i&1&&(bo(0,`div`,36),od$1(1,Jd,2,1,`span`)(2,ec,1,2,`bx-loading-spinner`,26),Go()),i&2){let e=Wo(3);vo(`aria-label`,e.resolvedLoadingLabel()||e.resolvedLoadingAriaLabel()),Xl$1(),nd$1(e.resolvedLoadingLabel()?1:2)}}function nc(i,t){if(i&1&&(bo(0,`div`,37),sd$1(1,`bx-loading-indicator`,52),Go()),i&2){let e=Wo(3);Xl$1(),xo(`size`,16)(`label`,e.loadingLabel()??e.loadingAriaLabel())}}function ic(i,t){if(i&1){let e=pb();bo(0,`div`,31),br$1(`keydown`,function(o){al$1(e);let r=Wo(2);return cl$2(r.onPanelKey(o))}),od$1(1,Hd,3,4,`div`,32),od$1(2,Wd,3,6,`button`,33),bo(3,`div`,34,5),br$1(`loadMore`,function(o){al$1(e);let r=Wo(2);return cl$2(r.requestMore(o))}),bo(5,`div`,35),ab(6,Ud,13,18,null,null,ra,!1,Qd,1,1),Go(),od$1(9,tc,3,2,`div`,36)(10,nc,2,2,`div`,37),Go()()}if(i&2){let e=FT(4),n=Wo(2);JT(n.panelClass()),xo(`bxSurfaceInteractive`,!1),Xl$1(),nd$1(n.isSearchable()?1:-1),Xl$1(),nd$1(n.showSelectAll()?2:-1),Xl$1(),xo(`loadMoreHasMore`,n.hasMore())(`loadMoreSuppressed`,n.isSearching())(`loadMoreLoading`,n.loading())(`loadMoreDisabled`,n.disabled()||n.isReadonly())(`loadMoreError`,n.loadError())(`loadMoreConfig`,n.loadMoreConfig())(`loadMoreTemplate`,n.loadMoreTemplate())(`loadMoreRevision`,n.options()),Xl$1(2),xo(`hidden`,n.isSearching())(`id`,n.controlId()+`-options`),vo(`role`,n.hasOptionActions()?`grid`:`listbox`)(`aria-multiselectable`,!0)(`aria-label`,n.ariaLabel()||n.resolvedLabel()),Xl$1(),cb(n.filteredOptions()),Xl$1(3),nd$1(n.isSearching()?9:n.loading()&&!e.actionVisible()?10:-1)}}function oc(i,t){if(i&1){let e=pb();rd$1(0,ic,11,20,`ng-template`,30,4,RA),br$1(`overlayOutsideClick`,function(o){al$1(e);let r=Wo();return cl$2(r.onOutsideClick(o))})(`attach`,function(){al$1(e);let o=FT(1),r=Wo();return cl$2(r.onPanelAttach(o))})(`detach`,function(){al$1(e);let o=Wo();return cl$2(o.onPanelDetach())})(`positionChange`,function(){al$1(e);let o=Wo();return cl$2(o.refreshPanel())})}if(i&2){let e=Wo(),n=FT(3);xo(`cdkConnectedOverlayOrigin`,n)(`cdkConnectedOverlayOpen`,!0)(`cdkConnectedOverlayPositions`,e.overlayPositions)(`cdkConnectedOverlayHasBackdrop`,!1)(`cdkConnectedOverlayPush`,!0)(`cdkConnectedOverlayViewportMargin`,8)(`cdkConnectedOverlayScrollStrategy`,e.panelScrollStrategy)(`cdkConnectedOverlayUsePopover`,e.overlayPopoverLocation(n.elementRef.nativeElement))(`cdkConnectedOverlayWidth`,e.panelInlineSize(n.elementRef.nativeElement.offsetWidth))}}var oa=class i extends Ht{labelsAdapter=b(VQ,{optional:!0});summaryOverflow=Sz(`summaryOverflow`);hasSelection=G(()=>!!this.internalValue()?.length||this.selectAll());resolvedSelectAllLabel=G(()=>LQ(this.selectAllLabel(),this.labelsAdapter));selectableOptions=G(()=>this.filteredOptions().filter(t=>!t.disabled&&!t.groupDisabled));allLoadedSelected=G(()=>{let t=this.selectableOptions();return t.length>0&&t.every(e=>this.isSelected(e.value))});selectAllChecked=G(()=>this.selectAll()||this.allLoadedSelected());someSelected=G(()=>this.selectableOptions().some(t=>this.isSelected(t.value)));usesSummary=G(()=>{let t=this.internalValue()?.length??0;return this.selectionDisplay()===`tags`&&this.selectedOptions().length>this.visibleTagCount()||!!(this.selectAll()&&this.allSelectedText())||t>this.summaryThreshold()||t>=2&&(this.summaryOverflow()?.truncated()??!1)});displayedSelection=G(()=>{if(this.selectAll()&&this.allSelectedText())return LQ(this.allSelectedText(),this.labelsAdapter);if(!this.usesSummary())return this.selectedOptionLabel();let t=this.internalValue()?.length??0;return LQ(this.selectedCountText(),this.labelsAdapter,{count:t}).replaceAll(`{count}`,String(t))});resolvedAllSelectedTooltip=G(()=>{let t=this.allSelectedTooltip();return t===!1?``:t===void 0?this.resolvedTooltipOnTruncate()?this.selectedOptionLabel():``:LQ(t,this.labelsAdapter)});selectionTooltip=G(()=>this.isOpen()?``:this.selectAll()?this.resolvedAllSelectedTooltip():this.resolvedTooltipOnTruncate()?this.selectionDisplay()===`tags`||this.usesSummary()?this.selectedOptionLabel():this.truncatedSelectionTooltip():``);allSelectedTooltip=ee(void 0);allSelectedText=ee(void 0);selectedCountText=ee(`{count} selected`);summaryThreshold=ee(2,{transform:na});showSelectAll=ee(!0);selectAllLabel=ee(`Select all`);selectionScope=ee(void 0);selectAll=_z(!1);selectionChange=Pk();selectAllIntentChange=Pk();scope;constructor(){super(),We$1(()=>{let t=this.selectionScope()??this.searchTerm(),e=this.filteredOptions(),n=this.selectAll(),o=de(this.internalValue)??[];if(this.scope!==void 0&&t!==this.scope&&n)this.selectAll.set(!1),this.emitIntent(!1,`scope-change`,t);else if(n&&!this.disabled()&&!this.isReadonly()){let r=e.filter(a=>!a.disabled&&!a.groupDisabled&&!o.some(u=>this.compareWith()(u,a.value))).map(a=>a.value);if(r.length){let a=[...o,...r];this.updateValue(a),this.selectionChange.emit({value:a,source:`page`})}}this.scope=t})}clearSelection(){if(this.disabled()||this.isReadonly())return;let t=this.selectAll();this.selectAll.set(!1),this.clearSelectedValue([]),this.selectionChange.emit({value:[],source:`clear`}),t&&this.emitIntent(!1,`clear`)}isSelected(t){return(this.internalValue()??[]).some(e=>this.compareWith()(e,t))}toggleSelectAll(){if(this.disabled()||this.isReadonly())return;let t=!this.selectAllChecked(),e=this.selectableOptions(),n=this.internalValue()??[],o=t?[...n,...e.filter(r=>!this.isSelected(r.value)).map(r=>r.value)]:n.filter(r=>!e.some(a=>this.compareWith()(r,a.value)));this.selectAll.set(t),this.updateValue(o),this.selectionChange.emit({value:o,source:`select-all`}),this.emitIntent(t,`toggle`)}reset(){super.reset(),this.selectAll()&&(this.selectAll.set(!1),this.emitIntent(!1,`reset`))}selectOption(t){if(t.disabled||t.groupDisabled||this.disabled()||this.isReadonly())return;let e=this.isSelected(t.value),n=e?(this.internalValue()??[]).filter(o=>!this.compareWith()(o,t.value)):[...this.internalValue()??[],t.value];this.updateValue(n),this.selectionChange.emit({value:n,source:`user`}),e&&this.selectAll()&&(this.selectAll.set(!1),this.emitIntent(!1,`item-deselected`))}emitIntent(t,e,n=this.selectionScope()??this.searchTerm()){this.selectAllIntentChange.emit({selected:t,scope:n,values:this.internalValue()??[],reason:e})}static ɵfac=function(e){return new(e||i)};static ɵcmp=Fr$1({type:i,selectors:[[`bx-multi-select`]],viewQuery:function(e,n){e&1&&Yy(n.summaryOverflow,Cd,5),e&2&&fb()},inputs:{allSelectedTooltip:[1,`allSelectedTooltip`],allSelectedText:[1,`allSelectedText`],selectedCountText:[1,`selectedCountText`],summaryThreshold:[1,`summaryThreshold`],showSelectAll:[1,`showSelectAll`],selectAllLabel:[1,`selectAllLabel`],selectionScope:[1,`selectionScope`],selectAll:[1,`selectAll`]},outputs:{selectAll:`selectAllChange`,selectionChange:`selectionChange`,selectAllIntentChange:`selectAllIntentChange`},features:[yt],ngContentSelectors:wd,decls:23,vars:49,consts:[[`origin`,`cdkOverlayOrigin`],[`valueOverflow`,`bxTruncate`],[`summaryOverflow`,`bxTruncate`],[`labelOverflow`,`bxTruncate`],[`panelOverlay`,`cdkConnectedOverlay`],[`pagination`,`bxLoadMore`],[`searchInput`,``],[`optionText`,`bxTruncate`],[3,`control`,`inline`,`tooltip`,`showLoadingIndicator`,`hint`,`hintEnd`,`subscriptSizing`,`forId`],[1,`bx-select-control`],[`type`,`button`,`role`,`combobox`,`cdkOverlayOrigin`,``,`bxSurface`,``,1,`bx-select-trigger`,3,`click`,`keydown`,`blur`,`bxTooltip`,`bxTooltipHover`,`bxTooltipTouch`,`id`,`disabled`],[1,`bx-select-container`],[1,`bx-floating-label`],[1,`bx-select-value`,3,`bxTruncate`],[3,`ngTemplateOutlet`,`ngTemplateOutletContext`],[1,`bx-selected-tags`],[`bxTruncate`,``,`aria-hidden`,`true`,1,`bx-select-measure`],[`aria-hidden`,`true`,1,`bx-select-caret`],[3,`value`],[`bx-button`,``,`type`,`button`,`variant`,`text`,1,`bx-select-clear`,3,`surfaceEffects`,`disabled`,`bxTooltip`],[`cdkConnectedOverlay`,``,3,`cdkConnectedOverlayOrigin`,`cdkConnectedOverlayOpen`,`cdkConnectedOverlayPositions`,`cdkConnectedOverlayHasBackdrop`,`cdkConnectedOverlayPush`,`cdkConnectedOverlayViewportMargin`,`cdkConnectedOverlayScrollStrategy`,`cdkConnectedOverlayUsePopover`,`cdkConnectedOverlayWidth`],[3,`bxTruncate`],[`aria-hidden`,`true`,1,`bx-field-required`],[`tooltip`,``,3,`text`,`config`,`focusable`,`tooltipOnTruncate`],[3,`text`,`config`,`disabled`,`focusable`,`tooltipOnTruncate`],[1,`bx-overflow-tag`,3,`text`,`config`,`tooltip`,`focusable`,`tooltipOnTruncate`],[3,`size`,`decorative`],[`name`,`chevron-down`,`size`,`16`],[`bx-button`,``,`type`,`button`,`variant`,`text`,1,`bx-select-clear`,3,`click`,`surfaceEffects`,`disabled`,`bxTooltip`],[`name`,`x`,`size`,`16`],[`cdkConnectedOverlay`,``,3,`overlayOutsideClick`,`attach`,`detach`,`positionChange`,`cdkConnectedOverlayOrigin`,`cdkConnectedOverlayOpen`,`cdkConnectedOverlayPositions`,`cdkConnectedOverlayHasBackdrop`,`cdkConnectedOverlayPush`,`cdkConnectedOverlayViewportMargin`,`cdkConnectedOverlayScrollStrategy`,`cdkConnectedOverlayUsePopover`,`cdkConnectedOverlayWidth`],[`bxSurface`,``,`data-bx-surface`,`glass`,`tabindex`,`-1`,1,`bx-select-panel`,3,`keydown`,`bxSurfaceInteractive`],[1,`bx-select-search-container`],[`type`,`button`,`role`,`checkbox`,1,`bx-select-all`,3,`disabled`],[`bxLoadMore`,``,1,`bx-select-menu-container`,3,`loadMore`,`loadMoreHasMore`,`loadMoreSuppressed`,`loadMoreLoading`,`loadMoreDisabled`,`loadMoreError`,`loadMoreConfig`,`loadMoreTemplate`,`loadMoreRevision`],[3,`hidden`,`id`],[`role`,`status`,1,`bx-select-search-state`],[1,`bx-select-loading`],[3,`search`,`keydown.enter`,`value`,`compact`,`placeholder`,`ariaLabel`],[`type`,`button`,`role`,`checkbox`,1,`bx-select-all`,3,`click`,`disabled`],[3,`checked`,`indeterminate`,`disabled`],[1,`bx-select-group`,3,`id`],[`bxSwipeActions`,``,1,`bx-select-option-row`,3,`leftSwipeActions`,`rightSwipeActions`,`swipeFullAction`,`swipeDisabled`],[`type`,`button`,`tabindex`,`-1`,`bxTooltipTouch`,`longpress`,1,`bx-select-option`,3,`click`,`bxTooltip`,`disabled`],[`bxSwipeContent`,``,1,`bx-select-item-inner`],[3,`checked`,`disabled`],[1,`bx-select-adornment`],[`size`,`16`,3,`name`],[1,`bx-select-option-label`,3,`bxTruncate`],[1,`bx-select-adornment`,`bx-select-adornment-end`],[`size`,`16`,1,`bx-select-adornment-end`,3,`name`],[`role`,`status`,1,`bx-select-empty`],[3,`size`,`label`]],template:function(e,n){if(e&1&&(ld$1(Md),bo(0,`bx-form-field`,8)(1,`div`,9)(2,`button`,10,0),br$1(`click`,function(){return n.toggleOpen()})(`keydown`,function(r){return n.onTriggerKey(r)})(`blur`,function(){return n.onTriggerBlur()}),dd$1(4),bo(5,`div`,11),od$1(6,Od,5,3,`span`,12),bo(7,`span`,13,1),od$1(9,kd,1,2,`ng-container`,14)(10,Ld,3,1,`span`,15)(11,Ad,1,1),Go(),bo(12,`span`,16,2),lA(14),Go()(),dd$1(15,1),bo(16,`span`,17)(17,`bx-visual-transition`,18),rd$1(18,zd,2,1,`ng-template`),Go()()(),od$1(19,Bd,2,4,`button`,19),Go(),od$1(20,oc,2,9,null,20),dd$1(21,2,Nd),dd$1(22,3,Td),Go()),e&2){let o;xo(`control`,n.fieldControl)(`inline`,!0)(`tooltip`,n.tooltip())(`showLoadingIndicator`,!1)(`hint`,n.hint())(`hintEnd`,n.hintEnd())(`subscriptSizing`,n.resolvedSubscriptSizing())(`forId`,n.controlId()),Xl$1(),tr(`has-clear`,n.showClear()),Xl$1(),tr(`has-label`,!!n.label())(`is-invalid`,n.showError())(`is-outline`,n.resolvedAppearance()===`outline`)(`is-open`,n.isOpen())(`is-floating`,n.isFloating())(`is-readonly`,n.isReadonly())(`is-keyboard-focused`,n.keyboardFocused()),xo(`bxTooltip`,n.selectionTooltip())(`bxTooltipHover`,n.selectionDisplay()!==`tags`||n.selectAll()&&!!n.allSelectedText())(`bxTooltipTouch`,n.selectionDisplay()===`tags`&&!(n.selectAll()&&n.allSelectedText())?`none`:`longpress`)(`id`,n.controlId())(`disabled`,n.disabled()),vo(`aria-haspopup`,n.hasOptionActions()?`grid`:`listbox`)(`data-testid`,n.dataTestId())(`aria-label`,n.ariaLabel()||n.resolvedLabel())(`aria-labelledby`,n.ariaLabelledBy())(`aria-describedby`,n.describedBy())(`aria-invalid`,n.showError())(`aria-required`,n.required())(`aria-readonly`,n.isReadonly())(`aria-busy`,n.loading()||n.pending()||n.isSearching())(`aria-expanded`,n.isOpen())(`aria-controls`,n.isPanelAttached()?n.controlId()+`-options`:null),Xl$1(4),nd$1(n.label()?6:-1),Xl$1(),tr(`is-placeholder`,!n.selectedOptionLabel()),xo(`bxTruncate`,!(n.selectionDisplay()===`tags`&&n.selectedOptions().length)&&!n.triggerTemplate()),Xl$1(2),nd$1((o=n.triggerTemplate())?9:n.selectionDisplay()===`tags`&&n.selectedOptions().length?10:11,o),Xl$1(5),ik(n.selectedOptionLabel()),Xl$1(3),xo(`value`,n.loading()||n.pending()||n.isSearching()),Xl$1(2),nd$1(n.showClear()?19:-1),Xl$1(),nd$1(n.isPanelAttached()?20:-1)}},dependencies:[Wu$1,GC,fR,pR,rh,ne,xe,It,ZC,zt,We,Bt,Ta$1,Xi$1,Et$1,Pt,ct,Fs$1],styles:[`
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
  --%NS%bx-option-radius: max(0px, var(--%NS%bx-select-panel-radius, var(--%NS%bx-rounded-lg, 0.75rem)) - (calc(var(--%NS%bx-select-panel-padding, var(--%NS%bx-space-1, 0.25rem)) + var(--%NS%bx-border-width, 1px))));
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  min-width: 100%;
  width: 100%;
  max-width: 100%;
  background-color: var(--%NS%bx-glass-surface, var(--%NS%bx-bg-surface));
  border: var(--%NS%bx-border-width, 1px) var(--%NS%bx-border-style, solid) var(--%NS%bx-glass-edge, var(--%NS%bx-border-default));
  border-radius: var(--%NS%bx-select-panel-radius, var(--%NS%bx-rounded-lg, 0.75rem));
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
  padding: var(--%NS%bx-select-panel-padding, var(--%NS%bx-space-1, 0.25rem));
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
  border-radius: var(--%NS%bx-select-option-radius, var(--%NS%bx-option-radius, var(--%NS%bx-rounded-sm, 0.25rem)));
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
  --%NS%bx-glass-radius: var(--%NS%bx-select-panel-radius, var(--%NS%bx-rounded-lg, 0.75rem));
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
.bx-select-item-inner[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:last-child:not(.bx-select-adornment, .bx-truncate) {
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
[_ngcontent-%COMP%]:is([role=listbox], [role=grid])[hidden] {
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
:is([role=listbox][_ngcontent-%COMP%], [role=grid][_ngcontent-%COMP%]) {
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
.bx-select-option-row[_ngcontent-%COMP%] {
  min-inline-size: 0;
  border-radius: var(--%NS%bx-select-option-radius, var(--%NS%bx-option-radius, var(--%NS%bx-rounded-sm, 0.25rem)));
}
.bx-select-adornment[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  flex: none;
}
.bx-select-adornment-end[_ngcontent-%COMP%] {
  margin-inline-start: auto;
}
.bx-select-option-label[_ngcontent-%COMP%] {
  flex: 1 1 auto;
  min-inline-size: 0;
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
}`]})};var aa=class i extends it{focus(t){this.nativeElement.focus(t)}onReadonlyInteraction(t){!this.isReadonly()||this.nativeElement.tagName!==`SELECT`||`key`in t&&t.key===`Tab`||t.preventDefault()}static ɵfac=(()=>{let t;return function(n){return(t||(t=ho(i)))(n||i)}})();static ɵdir=pe({type:i,selectors:[[`input`,`bxInput`,``],[`textarea`,`bxInput`,``],[`select`,`bxInput`,``]],hostAttrs:[1,`bx-native-control`],hostVars:12,hostBindings:function(e,n){e&1&&br$1(`blur`,function(){return n.markAsTouched()})(`pointerdown`,function(r){return n.onReadonlyInteraction(r)})(`click`,function(r){return n.onReadonlyInteraction(r)})(`keydown`,function(r){return n.onReadonlyInteraction(r)}),e&2&&(Uy(`id`,n.controlId())(`disabled`,n.effectiveDisabled())(`required`,n.effectiveRequired()),vo(`readonly`,n.isReadonly()?``:null)(`aria-readonly`,n.isReadonly())(`placeholder`,n.resolvedPlaceholder())(`name`,n.name()||null)(`aria-invalid`,n.showError())(`aria-required`,n.effectiveRequired())(`aria-describedby`,n.describedBy())(`aria-label`,n.ariaLabel())(`aria-labelledby`,n.ariaLabelledBy()))},exportAs:[`bxInput`],features:[rr([{provide:Qt,useExisting:jt(()=>i)}]),yt]})};var rc=[[[`bx-error`]],[[`bx-hint`]]];var ac=[`bx-error`,`bx-hint`];var sc=[`ngProjectAs`,`bx-error`,5,[`bx-error`]];var lc=[`ngProjectAs`,`bx-hint`,5,[`bx-hint`]];function dc(i,t){if(i&1&&sd$1(0,`span`),i&2){let e=t.$implicit;ka$1(`inset-inline-start`,e,`%`)}}function cc(i,t){if(i&1&&(bo(0,`output`,8),lA(1),Go()),i&2){let e=Wo();Xl$1(),ak(``,e.displayWith()(e.start()),` – `,e.displayWith()(e.end()))}}var sa=class i extends ve{i18n=b(VQ,{optional:!0});start=G(()=>Math.max(this.min(),Math.min(this.max(),this.value()?.[0]??this.min())));end=G(()=>Math.max(this.start(),Math.min(this.max(),this.value()?.[1]??this.max())));startPercent=G(()=>this.max()>this.min()?(this.start()-this.min())/(this.max()-this.min())*100:0);endPercent=G(()=>this.max()>this.min()?(this.end()-this.min())/(this.max()-this.min())*100:100);resolvedStartLabel=G(()=>LQ(this.startLabel(),this.i18n));resolvedEndLabel=G(()=>LQ(this.endLabel(),this.i18n));ticks=G(()=>{let t=this.max()-this.min(),e=this.step();if(!this.showTickMarks()||!Number.isFinite(t)||!Number.isFinite(e)||t<=0||e<=0)return[];let n=Math.floor(t/e),o=Math.min(1e3,n);return o>0?Array.from({length:o+1},(r,a)=>Math.round(a*n/o)*e/t*100):[]});min=ee(0);max=ee(100);step=ee(1);discrete=ee(!1);showTickMarks=ee(!1);displayWith=ee(String);startLabel=ee(`Minimum value`);endLabel=ee(`Maximum value`);onRangeInput(t,e){let n=t.target;if(this.effectiveDisabled()||this.isReadonly()){n.value=String(e===`start`?this.start():this.end());return}let o=n.valueAsNumber,r=e===`start`?[Math.min(this.end(),o),this.end()]:[this.start(),Math.max(this.start(),o)];n.value=String(e===`start`?r[0]:r[1]),this.updateValue(r)}onReadonlyPointerDown(t){this.isReadonly()&&(t.preventDefault(),t.target.focus({preventScroll:!0}))}onReadonlyKeyDown(t){this.isReadonly()&&[`ArrowLeft`,`ArrowRight`,`ArrowUp`,`ArrowDown`,`Home`,`End`,`PageUp`,`PageDown`].includes(t.key)&&t.preventDefault()}onBlur(){this.markAsTouched()}static ɵfac=(()=>{let t;return function(n){return(t||(t=ho(i)))(n||i)}})();static ɵcmp=Fr$1({type:i,selectors:[[`bx-range-slider`]],inputs:{min:[1,`min`],max:[1,`max`],step:[1,`step`],discrete:[1,`discrete`],showTickMarks:[1,`showTickMarks`],displayWith:[1,`displayWith`],startLabel:[1,`startLabel`],endLabel:[1,`endLabel`]},features:[yt],ngContentSelectors:ac,decls:13,vars:35,consts:[[3,`control`,`label`,`hint`,`hintEnd`,`tooltip`,`forId`],[`role`,`group`,1,`bx-range-slider`],[`aria-hidden`,`true`,1,`bx-range-track`],[1,`bx-range-input`],[`bxSlider`,``,`type`,`range`,3,`pointerdown`,`keydown`,`input`,`blur`,`id`,`min`,`max`,`step`,`value`,`disabled`],[`bxSlider`,``,`type`,`range`,3,`pointerdown`,`keydown`,`input`,`blur`,`min`,`max`,`step`,`value`,`disabled`],[`aria-hidden`,`true`,1,`bx-range-ticks`],[3,`inset-inline-start`],[1,`bx-range-values`]],template:function(e,n){e&1&&(ld$1(rc),bo(0,`bx-form-field`,0)(1,`div`,1),sd$1(2,`div`,2),bo(3,`div`,3)(4,`input`,4),br$1(`pointerdown`,function(r){return n.onReadonlyPointerDown(r)})(`keydown`,function(r){return n.onReadonlyKeyDown(r)})(`input`,function(r){return n.onRangeInput(r,`start`)})(`blur`,function(){return n.onBlur()}),Go()(),bo(5,`div`,3)(6,`input`,5),br$1(`pointerdown`,function(r){return n.onReadonlyPointerDown(r)})(`keydown`,function(r){return n.onReadonlyKeyDown(r)})(`input`,function(r){return n.onRangeInput(r,`end`)})(`blur`,function(){return n.onBlur()}),Go()(),bo(7,`div`,6),ab(8,dc,1,2,`span`,7,TT),Go()(),od$1(10,cc,2,2,`output`,8),dd$1(11,0,sc),dd$1(12,1,lc),Go()),e&2&&(xo(`control`,n.fieldControl)(`label`,n.label())(`hint`,n.hint())(`hintEnd`,n.hintEnd())(`tooltip`,n.tooltip())(`forId`,n.controlId()),Xl$1(),ka$1(`--%NS%bx-range-start`,n.startPercent()/100)(`--%NS%bx-range-end`,n.endPercent()/100),tr(`is-readonly`,n.isReadonly()&&!n.disabled()),vo(`aria-label`,n.ariaLabel()||n.resolvedLabel()),Xl$1(3),xo(`id`,n.controlId())(`min`,n.min())(`max`,n.max())(`step`,n.step())(`value`,n.start())(`disabled`,n.effectiveDisabled()),vo(`aria-valuemax`,n.end())(`aria-readonly`,n.isReadonly())(`aria-label`,n.resolvedStartLabel())(`aria-valuetext`,n.displayWith()(n.start()))(`aria-describedby`,n.describedBy()),Xl$1(2),xo(`min`,n.min())(`max`,n.max())(`step`,n.step())(`value`,n.end())(`disabled`,n.effectiveDisabled()),vo(`aria-valuemin`,n.start())(`aria-readonly`,n.isReadonly())(`aria-label`,n.resolvedEndLabel())(`aria-valuetext`,n.displayWith()(n.end()))(`aria-describedby`,n.describedBy()),Xl$1(2),cb(n.ticks()),Xl$1(2),nd$1(n.discrete()?10:-1))},dependencies:[ne,ni],styles:[`
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
}`]})};var uc=[`panelTemplate`];var pc=[`anchor`];var bc=[`nativeInput`];var mc=[[[`bx-error`]],[[`bx-hint`]]];var gc=[`bx-error`,`bx-hint`];var hc=[`ngProjectAs`,`bx-error`,5,[`bx-error`]];var fc=[`ngProjectAs`,`bx-hint`,5,[`bx-hint`]];var xc=(i,t,e,n)=>({$implicit:i,label:t,active:e,index:n});var vc=(i,t)=>t.value;function yc(i,t){i&1&&(bo(0,`span`,16),lA(1,`*`),Go())}function Sc(i,t){if(i&1&&(bo(0,`label`,7)(1,`span`,15),lA(2),Go(),od$1(3,yc,2,0,`span`,16),Go()),i&2){let e=Wo();vo(`for`,e.controlId()),Xl$1(2),ik(e.resolvedLabel()),Xl$1(),nd$1(e.effectiveRequired()&&!e.resolvedHideRequiredMarker()?3:-1)}}function _c(i,t){if(i&1&&(bo(0,`span`,17)(1,`span`,18),lA(2),Go(),bo(3,`span`),lA(4),Go()()),i&2){let e=Wo();ka$1(`transform`,`translateX(`+-e.inputScroll()+`px)`),Xl$1(2),ik(e.internalValue()),Xl$1(2),ik(e.completionSuffix())}}function Cc(i,t){if(i&1){let e=pb();bo(0,`button`,19),br$1(`click`,function(){al$1(e);let o=Wo();return cl$2(o.clear())})(`keydown`,function(o){al$1(e);let r=Wo();return cl$2(r.onClearKey(o))})(`blur`,function(o){al$1(e);let r=Wo();return cl$2(r.onBlur(o))}),sd$1(1,`bx-icon`,20),Go()}if(i&2){let e=Wo();xo(`surfaceEffects`,!1)(`disabled`,e.effectiveDisabled())(`bxTooltip`,e.resolvedClearTooltip()),vo(`aria-label`,e.resolvedClearLabel())}}function Mc(i,t){i&1&&sd$1(0,`bx-loading-spinner`,13),i&2&&xo(`size`,16)(`decorative`,!0)}function wc(i,t){i&1&&sd$1(0,`bx-icon`,14)}function Nc(i,t){if(i&1&&$s$1(0,28),i&2){let e=Wo(),n=e.$implicit,o=e.$index,r=Wo(3);xo(`ngTemplateOutlet`,t)(`ngTemplateOutletContext`,DA(2,xc,n,n.labelText,r.activeIndex()===o,o))}}function Tc(i,t){if(i&1&&lA(0),i&2){let e=Wo().$implicit;mb(` `,e.labelText,` `)}}function Pc(i,t){if(i&1){let e=pb();bo(0,`button`,27),br$1(`mousedown`,function(o){return o.preventDefault()})(`click`,function(){let o=al$1(e).$implicit,r=Wo(3);return cl$2(r.selectOption(o))}),od$1(1,Nc,1,7,`ng-container`,28)(2,Tc,1,1),Go()}if(i&2){let e,n=t.$implicit,o=t.$index,r=Wo(3);tr(`is-active`,r.activeIndex()===o),xo(`id`,r.controlId()+`-option-`+o)(`disabled`,n.disabled??!1),vo(`aria-selected`,r.activeIndex()===o),Xl$1(),nd$1((e=r.optionTemplate())?1:2,e)}}function Oc(i,t){if(i&1&&ab(0,Pc,3,6,`button`,26,vc),i&2){let e=Wo(2);cb(e.filteredOptions())}}function kc(i,t){if(i&1&&(bo(0,`div`,24),sd$1(1,`bx-loading-indicator`,29),Go()),i&2){let e=Wo(2);Xl$1(),xo(`size`,16)(`label`,e.loadingText())}}function Ic(i,t){if(i&1&&(bo(0,`div`,25),lA(1),Go()),i&2){let e=Wo(2);Xl$1(),ik(e.resolvedEmptyText())}}function Dc(i,t){if(i&1){let e=pb();bo(0,`div`,21)(1,`div`,22,3),br$1(`focusout`,function(o){al$1(e);let r=Wo();return cl$2(r.onBlur(o))})(`loadMore`,function(o){al$1(e);let r=Wo();return cl$2(r.requestMore(o))}),bo(3,`div`,23),od$1(4,Oc,2,0),Go(),od$1(5,kc,2,2,`div`,24)(6,Ic,2,1,`div`,25),Go()()}if(i&2){let e=FT(2),n=Wo();xo(`bxSurfaceInteractive`,!1),Xl$1(),xo(`loadMoreHasMore`,n.hasMore())(`loadMoreLoading`,n.loading())(`loadMoreError`,n.loadError())(`loadMoreSuppressed`,n.searching())(`loadMoreDisabled`,n.effectiveDisabled()||n.isReadonly())(`loadMoreConfig`,n.loadMoreConfig())(`loadMoreTemplate`,n.loadMoreTemplate())(`loadMoreRevision`,n.loadMoreRevision()??n.options()),Xl$1(2),xo(`id`,n.controlId()+`-listbox`),vo(`aria-label`,n.ariaLabel()||n.resolvedLabel()||n.resolvedPlaceholder())(`aria-busy`,n.searching()||n.loading()),Xl$1(),nd$1(n.searching()?-1:4),Xl$1(),nd$1(n.searching()||n.loading()&&!e.actionVisible()?5:!n.loading()&&!n.loadError()&&!n.filteredOptions().length?6:-1)}}var la=class i extends ve{i18n=b(VQ,{optional:!0});bxA11yService=b(Br$1);overlay=b(Ld$1);bxOverlayPositionService=b(_w);viewContainerRef=b(fr$1);ngZone=b(le);context=b(Ae,{optional:!0});scrollLockService=b(Nw);browser=bt$1(b(Ge));scrollLockId=qK();opened=$(!1);inputFocused=$(!1);composing=$(!1);caretAtEnd=$(!1);panelTemplate=Sz.required(`panelTemplate`);anchor=Sz.required(`anchor`);nativeInput=Sz.required(`nativeInput`);pagination=Sz(We);labelText=Sz(ct);activeIndex=$(-1);autofilled=$(!1);labelTruncated=G(()=>this.labelText()?.truncated()??!1);isBusy=G(()=>this.searching()||this.loading()||this.pending());showClear=G(()=>this.clearable()&&!!this.internalValue()&&!this.isReadonly());resolvedClearLabel=G(()=>LQ(this.clearLabel(),this.i18n));resolvedClearTooltip=G(()=>LQ(this.clearTooltip()??this.clearLabel(),this.i18n));isFloating=G(()=>this.resolvedFloatLabel()===`always`||this.inputFocused()||this.isOpen()||this.autofilled()||!!this.internalValue());inputScroll=$(0);resolvedEmptyText=G(()=>LQ(this.emptyText(),this.i18n));resolvedOptions=G(()=>this.options().map(t=>s(r({},t),{labelText:LQ(t.label??t.value,this.i18n)})));filteredOptions=G(()=>{let t=(this.internalValue()??``).toLocaleLowerCase();return this.externalFiltering()||!t?this.resolvedOptions():this.resolvedOptions().filter(e=>e.labelText.toLocaleLowerCase().includes(t)||e.value.toLocaleLowerCase().includes(t))});activeId=G(()=>this.isOpen()&&!this.searching()&&this.filteredOptions()[this.activeIndex()]&&!this.filteredOptions()[this.activeIndex()].disabled?this.controlId()+`-option-`+this.activeIndex():null);completionOption=G(()=>{let t=this.internalValue()??``;if(!this.inlineCompletion()||!this.isOpen()||!this.inputFocused()||!this.caretAtEnd()||this.composing()||this.searching()||this.effectiveDisabled()||this.isReadonly()||!t)return;let e=this.filteredOptions(),n=this.activeIndex()>=0?e[this.activeIndex()]:e.find(o=>!o.disabled&&o.value.length>t.length&&o.value.toLocaleLowerCase().startsWith(t.toLocaleLowerCase()));return n&&!n.disabled&&n.value.length>t.length&&n.value.toLocaleLowerCase().startsWith(t.toLocaleLowerCase())?n:void 0});completionSuffix=G(()=>this.completionOption()?.value.slice((this.internalValue()??``).length)??``);isOpen=this.opened.asReadonly();options=ee([]);inlineCompletion=ee(!0);clearable=ee(!0);clearLabel=ee(`Clear selection`);clearTooltip=ee(void 0);externalFiltering=ee(!1);searching=ee(!1);hasMore=ee(!1);loadError=ee(void 0);loadMoreConfig=ee({});loadMoreTemplate=ee(void 0);loadMoreRevision=ee(void 0);optionTemplate=ee(void 0);emptyText=ee(`No suggestions. You can enter your own value.`);loadingText=ee(`Loading suggestions`);autocomplete=ee(`off`);queryChange=Pk();optionSelected=Pk();loadMore=Pk();openedChange=Pk();overlayRef;subscriptions=new Ae$1;disconnectTheme;disconnectLighting;selectionMotion;transition;presentationRevision=0;constructor(){super(),We$1(()=>{let t=this.bxA11yService.isReducedMotion();this.selectionMotion?.update({reducedMotion:t})}),this.destroyRef.onDestroy(()=>this.dispose()),We$1(()=>{(this.effectiveDisabled()||this.isReadonly())&&this.isOpen()&&this.close()}),We$1(()=>{this.options(),this.searching(),de(()=>this.activeIndex.set(-1))})}open(){if(!this.browser||this.destroyRef.destroyed||this.isOpen()||this.effectiveDisabled()||this.isReadonly())return;this.overlayRef&&this.dispose();let t=this.anchor().nativeElement,e=this.overlay.create({width:t.getBoundingClientRect().width,maxWidth:`calc(100vw - 16px)`,positionStrategy:this.bxOverlayPositionService.getElementStrategy(t,`bottom`,4),scrollStrategy:this.overlay.scrollStrategies.noop(),usePopover:!!this.context?.useTopLayer||!!t.closest(`dialog, [role="dialog"], [role="alertdialog"], bx-modal, bx-modal-core, [popover]`)});this.overlayRef=e,this.opened.set(!0),this.scrollLockService.disableScroll(this.scrollLockId,{handleTouchInput:!0}),this.disconnectTheme=this.ngZone.runOutsideAngular(()=>BK(t,e.overlayElement)),this.disconnectLighting=DR(e.overlayElement,t),this.subscriptions.add(this.ngZone.runOutsideAngular(()=>RK(e,t,{onOriginHidden:()=>this.ngZone.run(()=>this.close()),onPosition:()=>{let r=t.getBoundingClientRect().width;e.getConfig().width!==r&&e.updateSize({width:r})}}))),this.subscriptions.add(e.outsidePointerEvents().subscribe(r=>{t.contains(r.target)||this.close()})),this.subscriptions.add(e.keydownEvents().subscribe(r=>this.onPanelKey(r))),e.attach(new ja$1(this.panelTemplate(),this.viewContainerRef)).detectChanges(),e.updatePosition();let o=e.overlayElement.querySelector(`[role="listbox"]`);o&&(this.selectionMotion=this.ngZone.runOutsideAngular(()=>TR(o,{reducedMotion:this.bxA11yService.isReducedMotion()}))),this.transition=this.ngZone.runOutsideAngular(()=>MR(t,e.overlayElement)),this.ngZone.runOutsideAngular(()=>this.transition?.enter()),this.openedChange.emit(!0)}close(){if(!this.isOpen())return;let t=this.overlayRef?.overlayElement;t?.contains(t.ownerDocument.activeElement)&&this.focus({preventScroll:!0});let e=++this.presentationRevision;this.opened.set(!1),this.scrollLockService.enableScroll(this.scrollLockId),t&&(t.inert=!0);let n=()=>{e===this.presentationRevision&&this.dispose()},o=this.transition;o&&!this.bxA11yService.isReducedMotion()?this.ngZone.runOutsideAngular(()=>o.exit()).then(n,n):n(),this.openedChange.emit(!1)}completeLoadMore(){this.pagination()?.complete()}clear(){this.effectiveDisabled()||this.isReadonly()||(this.composing.set(!1),this.updateValue(``),this.activeIndex.set(-1),this.markAsTouched(),this.focus({preventScroll:!0}),this.queryChange.emit(``))}onInput(t){if(this.composing()||this.effectiveDisabled()||this.isReadonly())return;let e=t.target.value;this.updateValue(e),this.activeIndex.set(-1),this.updateCompletionPosition(),this.open(),this.queryChange.emit(e)}onCompositionStart(){this.composing.set(!0)}onCompositionEnd(t){this.composing.set(!1),this.onInput(t)}onFocus(){this.inputFocused.set(!0),this.updateCompletionPosition(),this.open()}updateCompletionPosition(){let t=this.nativeInput().nativeElement;this.caretAtEnd.set(t.selectionStart===t.value.length&&t.selectionEnd===t.value.length),this.inputScroll.set(t.scrollLeft)}onBlur(t){t.target===this.nativeInput().nativeElement&&this.inputFocused.set(!1);let e=t.relatedTarget;e&&(this.nativeElement.contains(e)||this.overlayRef?.overlayElement.contains(e))||queueMicrotask(()=>{if(this.destroyRef.destroyed)return;let n=this.nativeElement.ownerDocument.activeElement;this.nativeElement.contains(n)||this.overlayRef?.overlayElement.contains(n)||(this.close(),this.markAsTouched())})}onInputKey(t){if(this.composing()||t.isComposing||this.effectiveDisabled()||this.isReadonly())return;this.updateCompletionPosition();let e=this.completionOption(),o=this.nativeInput().nativeElement.ownerDocument.defaultView?.getComputedStyle(this.nativeInput().nativeElement).direction===`rtl`?`ArrowLeft`:`ArrowRight`;if(e&&!t.altKey&&!t.ctrlKey&&!t.metaKey&&!t.shiftKey&&(t.key===o||t.key===`End`||t.key===`Enter`&&!this.activeId()))t.preventDefault(),this.selectOption(e);else if(t.key===`Escape`&&this.isOpen())t.preventDefault(),t.stopPropagation(),this.close();else if(t.key===`ArrowDown`||t.key===`ArrowUp`){if(t.preventDefault(),this.open(),this.searching())return;let a=this.filteredOptions().map((S,P)=>S.disabled?-1:P).filter(S=>S>=0),u=a.indexOf(this.activeIndex()),g=t.key===`ArrowDown`?(u+1)%a.length:u<0?a.length-1:(u-1+a.length)%a.length;this.activeIndex.set(a[g]??-1),this.overlayRef?.overlayElement.querySelector(`#`+this.activeId())?.scrollIntoView({block:`nearest`})}else if(t.key===`Enter`&&this.isOpen()&&this.activeId())t.preventDefault(),this.selectOption(this.filteredOptions()[this.activeIndex()]);else if(t.key===`Tab`&&this.isOpen()){if(!t.shiftKey&&this.showClear())return;this.tabToPanel(t)}}onClearKey(t){t.key===`Tab`&&!t.shiftKey&&this.isOpen()&&this.tabToPanel(t)}selectOption(t){t.disabled||this.searching()||this.effectiveDisabled()||this.isReadonly()||(this.updateValue(t.value),this.optionSelected.emit(t),this.close(),this.focus({preventScroll:!0}))}requestMore(t){let e=this.overlayRef?.overlayElement;e?.contains(e.ownerDocument.activeElement)&&this.focus({preventScroll:!0}),this.loadMore.emit(t)}onPanelKey(t){let e=t.target;t.defaultPrevented||!e||!this.overlayRef?.overlayElement.contains(e)||(t.key===`Escape`?(t.preventDefault(),t.stopPropagation(),this.close()):t.key===`Tab`&&(t.shiftKey?(t.preventDefault(),this.focus({preventScroll:!0})):this.close()))}panelAction(){return Array.from(this.overlayRef?.overlayElement.querySelectorAll(`button:not(:disabled)`)??[]).find(t=>t.tabIndex>=0&&t.getClientRects().length>0)}tabToPanel(t){let e=this.panelAction();!t.shiftKey&&e?(t.preventDefault(),e.focus()):this.close()}dispose(){++this.presentationRevision,this.selectionMotion?.destroy(),this.selectionMotion=void 0,this.transition?.destroy(),this.transition=void 0,this.opened.set(!1),this.activeIndex.set(-1),this.subscriptions.unsubscribe(),this.subscriptions=new Ae$1,this.disconnectTheme?.(),this.disconnectTheme=void 0,this.disconnectLighting?.(),this.disconnectLighting=void 0,this.overlayRef?.dispose(),this.overlayRef=void 0,this.scrollLockService.enableScroll(this.scrollLockId)}static ɵfac=function(e){return new(e||i)};static ɵcmp=Fr$1({type:i,selectors:[[`bx-autocomplete`]],viewQuery:function(e,n){e&1&&Yy(n.panelTemplate,uc,5)(n.anchor,pc,5)(n.nativeInput,bc,5)(n.pagination,We,5)(n.labelText,ct,5),e&2&&fb(5)},inputs:{options:[1,`options`],inlineCompletion:[1,`inlineCompletion`],clearable:[1,`clearable`],clearLabel:[1,`clearLabel`],clearTooltip:[1,`clearTooltip`],externalFiltering:[1,`externalFiltering`],searching:[1,`searching`],hasMore:[1,`hasMore`],loadError:[1,`loadError`],loadMoreConfig:[1,`loadMoreConfig`],loadMoreTemplate:[1,`loadMoreTemplate`],loadMoreRevision:[1,`loadMoreRevision`],optionTemplate:[1,`optionTemplate`],emptyText:[1,`emptyText`],loadingText:[1,`loadingText`],autocomplete:[1,`autocomplete`]},outputs:{queryChange:`queryChange`,optionSelected:`optionSelected`,loadMore:`loadMore`,openedChange:`openedChange`},features:[yt],ngContentSelectors:gc,decls:18,vars:52,consts:[[`anchor`,``],[`nativeInput`,``],[`panelTemplate`,``],[`pagination`,`bxLoadMore`],[3,`control`,`inline`,`tooltip`,`hint`,`hintEnd`,`hideRequiredMarker`,`subscriptSizing`,`forId`,`showLoadingIndicator`],[`bxSurface`,``,1,`bx-input-wrapper`,`bx-autocomplete-control`],[`bxTooltipTouch`,`longpress`,`placement`,`top`,1,`bx-input-container`,`bx-autocomplete-text`,3,`bxTooltip`],[1,`bx-floating-label`],[`aria-hidden`,`true`,1,`bx-native-input`,`bx-autocomplete-completion`,3,`transform`],[`type`,`text`,`role`,`combobox`,`aria-haspopup`,`listbox`,`cdkAutofill`,``,1,`bx-native-input`,3,`input`,`focus`,`click`,`blur`,`select`,`scroll`,`keyup`,`cdkAutofill`,`keydown`,`compositionstart`,`compositionend`,`id`,`placeholder`,`value`,`disabled`,`readOnly`,`required`],[1,`bx-input-actions`],[`bx-button`,``,`type`,`button`,`variant`,`text`,1,`bx-autocomplete-clear`,3,`surfaceEffects`,`disabled`,`bxTooltip`],[`aria-hidden`,`true`,1,`bx-autocomplete-caret`],[3,`size`,`decorative`],[`name`,`chevron-down`,`size`,`16`],[`bxTruncate`,``,1,`bx-input-label-text`],[`aria-hidden`,`true`,1,`bx-field-required`],[`aria-hidden`,`true`,1,`bx-native-input`,`bx-autocomplete-completion`],[1,`bx-autocomplete-prefix`],[`bx-button`,``,`type`,`button`,`variant`,`text`,1,`bx-autocomplete-clear`,3,`click`,`keydown`,`blur`,`surfaceEffects`,`disabled`,`bxTooltip`],[`name`,`x`,`size`,`16`],[`bxSurface`,``,`data-bx-surface`,`glass`,1,`bx-autocomplete-panel`,3,`bxSurfaceInteractive`],[`bxLoadMore`,``,`tabindex`,`-1`,1,`bx-autocomplete-scroll`,3,`focusout`,`loadMore`,`loadMoreHasMore`,`loadMoreLoading`,`loadMoreError`,`loadMoreSuppressed`,`loadMoreDisabled`,`loadMoreConfig`,`loadMoreTemplate`,`loadMoreRevision`],[`role`,`listbox`,3,`id`],[1,`bx-autocomplete-feedback`],[`role`,`status`,1,`bx-autocomplete-feedback`],[`type`,`button`,`role`,`option`,`tabindex`,`-1`,1,`bx-autocomplete-option`,3,`id`,`is-active`,`disabled`],[`type`,`button`,`role`,`option`,`tabindex`,`-1`,1,`bx-autocomplete-option`,3,`mousedown`,`click`,`id`,`disabled`],[3,`ngTemplateOutlet`,`ngTemplateOutletContext`],[3,`size`,`label`]],template:function(e,n){if(e&1){let o=pb();ld$1(mc),bo(0,`bx-form-field`,4)(1,`div`,5,0)(3,`div`,6),SA(4,`bxTruncatedText`),od$1(5,Sc,4,3,`label`,7),od$1(6,_c,5,4,`span`,8),bo(7,`input`,9,1),br$1(`input`,function(a){return n.onInput(a)})(`focus`,function(){return n.onFocus()})(`click`,function(){return al$1(o),n.open(),cl$2(n.updateCompletionPosition())})(`blur`,function(a){return n.onBlur(a)})(`select`,function(){return n.updateCompletionPosition()})(`scroll`,function(){return n.updateCompletionPosition()})(`keyup`,function(){return n.updateCompletionPosition()})(`cdkAutofill`,function(a){return n.autofilled.set(a.isAutofilled)})(`keydown`,function(a){return n.onInputKey(a)})(`compositionstart`,function(){return n.onCompositionStart()})(`compositionend`,function(a){return n.onCompositionEnd(a)}),Go()(),bo(9,`div`,10),od$1(10,Cc,2,4,`button`,11),bo(11,`span`,12),od$1(12,Mc,1,2,`bx-loading-spinner`,13)(13,wc,1,0,`bx-icon`,14),Go()()(),dd$1(14,0,hc),dd$1(15,1,fc),Go(),rd$1(16,Dc,7,14,`ng-template`,null,2,RA)}e&2&&(xo(`control`,n.fieldControl)(`inline`,!0)(`tooltip`,n.tooltip())(`hint`,n.hint())(`hintEnd`,n.hintEnd())(`hideRequiredMarker`,n.resolvedHideRequiredMarker())(`subscriptSizing`,n.resolvedSubscriptSizing())(`forId`,n.controlId())(`showLoadingIndicator`,!1),Xl$1(),tr(`is-invalid`,n.showError())(`is-disabled`,n.effectiveDisabled())(`is-readonly`,n.isReadonly())(`is-outline`,n.resolvedAppearance()===`outline`)(`is-floating`,n.isFloating())(`is-keyboard-focused`,n.keyboardFocused())(`is-open`,n.isOpen())(`has-clear`,n.showClear()),Xl$1(2),xo(`bxTooltip`,AA(4,48,n.resolvedLabel(),n.labelTruncated(),n.resolvedTooltipOnTruncate())),Xl$1(2),nd$1(n.label()?5:-1),Xl$1(),nd$1(n.completionSuffix()?6:-1),Xl$1(),xo(`id`,n.controlId())(`placeholder`,n.isFloating()||!n.label()?n.resolvedPlaceholder():``)(`value`,n.internalValue()??``)(`disabled`,n.effectiveDisabled())(`readOnly`,n.isReadonly())(`required`,n.effectiveRequired()),vo(`aria-autocomplete`,n.inlineCompletion()?`both`:`list`)(`name`,n.name()||null)(`autocomplete`,n.autocomplete())(`data-testid`,n.dataTestId())(`aria-label`,n.ariaLabel())(`aria-labelledby`,n.ariaLabelledBy())(`aria-describedby`,n.describedBy())(`aria-invalid`,n.showError())(`aria-expanded`,n.isOpen())(`aria-controls`,n.isOpen()?n.controlId()+`-listbox`:null)(`aria-activedescendant`,n.activeId())(`aria-busy`,n.isBusy()),Xl$1(3),nd$1(n.showClear()?10:-1),Xl$1(2),nd$1(n.isBusy()?12:13))},dependencies:[ne,GC,ZC,Xi$1,Et$1,xe,We,Ta$1,jn,Pt,ct,on$1],styles:[`
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
.bx-input-wrapper[data-bx-surface][_ngcontent-%COMP%]   .bx-input-actions[_ngcontent-%COMP%] {
  border-radius: max(0px, var(--%NS%bx-rounded-lg, 0.75rem) - (var(--%NS%bx-border-width, 1px)));
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
.bx-input-wrapper.is-outline[_ngcontent-%COMP%]   .bx-input-actions[_ngcontent-%COMP%] {
  border-radius: max(0px, var(--%NS%bx-field-radius, var(--%NS%bx-rounded-md, 0.5rem)) - (var(--%NS%bx-border-width, 1px)));
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
  border-radius: var(--%NS%bx-autocomplete-option-radius, max(0px, var(--%NS%bx-autocomplete-radius, var(--%NS%bx-rounded-lg, 0.75rem)) - (calc(var(--%NS%bx-autocomplete-panel-padding, var(--%NS%bx-space-1, 0.25rem)) + var(--%NS%bx-border-width, 1px)))));
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
}`]})};var Ec=(i,t)=>t.label;var Rc=(i,t)=>t.preset.id;function Lc(i,t){if(i&1&&(bo(0,`div`,2),lA(1),Go()),i&2){let e=Wo().$implicit;Xl$1(),ik(e.label)}}function Ac(i,t){if(i&1&&sd$1(0,`bx-icon`,6),i&2){let e=Wo().$implicit,n=Wo(2);xo(`name`,e.icon?n.iconName(e.icon):void 0)(`contentTemplate`,e.preset.iconTemplate)(`decorative`,!0)}}function Fc(i,t){if(i&1){let e=pb();bo(0,`button`,5),br$1(`click`,function(){let o=al$1(e).$implicit,r=Wo(2);return cl$2(r.onSelect(o.preset,o.disabled))}),od$1(1,Ac,1,3,`bx-icon`,6),bo(2,`span`,7),lA(3),Go()()}if(i&2){let e=t.$implicit;tr(`is-active`,e.active),xo(`disabled`,e.disabled),vo(`aria-pressed`,e.active)(`aria-label`,e.description?e.label+`. `+e.description:e.label),Xl$1(),nd$1(e.icon||e.preset.iconTemplate?1:-1),Xl$1(2),ik(e.label)}}function Vc(i,t){if(i&1&&(bo(0,`div`,1),od$1(1,Lc,2,1,`div`,2),bo(2,`div`,3),ab(3,Fc,4,7,`button`,4,Rc),Go()()),i&2){let e=t.$implicit;Xl$1(),nd$1(e.label?1:-1),Xl$1(2),cb(e.items)}}var ii=class i{i18n=b(VQ,{optional:!0});groups=G(()=>{let t=this.context(),e=this.activeValue()??this.activeRange(),n=/* @__PURE__ */ new Map;for(let o of this.presets()){let r=LQ(o.label,this.i18n),a=LQ(o.group,this.i18n),u=this.resolvePreset(o,t),g={preset:o,label:r,description:LQ(o.description,this.i18n),icon:o.icon,active:u!==null&&this.sameSelection(u,e),disabled:o.disabled===!0};n.has(a)||n.set(a,{label:a,items:[]}),n.get(a)?.items.push(g)}return[...n.values()]});resolvedAriaLabel=G(()=>LQ(this.ariaLabel(),this.i18n));presets=ee.required();context=ee.required();activeValue=ee(null);activeRange=ee(null);horizontal=ee(!1,{transform:Ye});ariaLabel=ee(`Quick select`);presetSelect=Pk();iconName(t){return t}onSelect(t,e){e||this.presetSelect.emit(t)}sameSelection(t,e){return Array.isArray(t)&&Array.isArray(e)?aX([...t].sort())===aX([...e].sort()):yC(t)&&yC(e)?t.start===e.start&&t.end===e.end&&(!xC(t)||xC(e)&&t.kind===e.kind):aX(t)===aX(e)}resolvePreset(t,e){try{return t.resolve(e)}catch{return null}}static ɵfac=function(e){return new(e||i)};static ɵcmp=Fr$1({type:i,selectors:[[`bx-date-preset-list`]],inputs:{presets:[1,`presets`],context:[1,`context`],activeValue:[1,`activeValue`],activeRange:[1,`activeRange`],horizontal:[1,`horizontal`],ariaLabel:[1,`ariaLabel`]},outputs:{presetSelect:`presetSelect`},decls:3,vars:3,consts:[[1,`bx-preset-list`],[1,`bx-preset-group`],[1,`bx-preset-group-label`],[1,`bx-preset-items`],[`type`,`button`,1,`bx-preset-item`,3,`is-active`,`disabled`],[`type`,`button`,1,`bx-preset-item`,3,`click`,`disabled`],[`size`,`16`,1,`bx-preset-icon`,3,`name`,`contentTemplate`,`decorative`],[1,`bx-preset-label`]],template:function(e,n){e&1&&(bo(0,`nav`,0),ab(1,Vc,5,1,`div`,1,Ec),Go()),e&2&&(tr(`is-horizontal`,n.horizontal()),vo(`aria-label`,n.resolvedAriaLabel()),Xl$1(),cb(n.groups()))},dependencies:[ZC],styles:[`
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
}`]})};function zc(i,t){if(i&1&&(bo(0,`div`,1),$s$1(1,2),Go()),i&2){let e=Wo(2);xo(`id`,e.panelId()),vo(`aria-label`,e.resolvedAriaLabel()),Xl$1(),xo(`ngTemplateOutlet`,t)}}function Bc(i,t){if(i&1&&od$1(0,zc,2,3,`div`,1),i&2){let e,n=Wo();nd$1((e=n.content())?0:-1,e)}}function Hc(i,t){i&1&&$s$1(0,2),i&2&&xo(`ngTemplateOutlet`,t)}function Wc(i,t){if(i&1){let e=pb();bo(0,`bx-bottom-drawer`,3),pk(`openChange`,function(o){al$1(e);let r=Wo();return hA(r.open,o)||(r.open=o),cl$2(o)}),br$1(`closed`,function(){al$1(e);let o=Wo();return cl$2(o.onDrawerClosed())}),od$1(1,Hc,1,1,`ng-container`,2),Go()}if(i&2){let e,n=Wo();xo(`surfaceId`,n.panelId())(`ariaLabel`,n.resolvedAriaLabel())(`showHandle`,!0)(`showCloseButton`,!1)(`headerVisible`,!1)(`panelClass`,n.drawerClasses()),uk(`open`,n.open),Xl$1(),nd$1((e=n.content())?1:-1,e)}}var Wt=class i{overlay=b(Ld$1);bxOverlayPositionService=b(_w);viewContainerRef=b(fr$1);ngZone=b(le);destroyRef=b(ge);scrollLockService=b(Nw);i18n=b(VQ,{optional:!0});platformId=b(Ge);overlaySubscriptions=[];browser=bt$1(this.platformId);scrollLockId=qK();resolvedAriaLabel=G(()=>LQ(this.ariaLabel(),this.i18n));isDrawer=G(()=>this.presentation()===`drawer`);isInline=G(()=>this.presentation()===`inline`);drawerClasses=G(()=>`bx-picker-drawer ${this.panelClass()}`.trim());open=_z(!1);presentation=ee(`popover`);origin=ee(null);content=ee(null);ariaLabel=ee(`Picker`);panelId=ee(``);panelClass=ee(``);panelWidth=ee(``);autoFocus=ee(!0,{transform:Ye});dismissOnOutside=ee(!0,{transform:Ye});dismissOnEscape=ee(!0,{transform:Ye});dismiss=Pk();openedChange=Pk();focusTimer;disconnectTheme;disconnectLighting;disconnectOrigin;overlayRef;transition;presentationRevision=0;restoreTarget;constructor(){We$1(()=>{let t=this.open(),e=this.presentation();if(this.browser)if(e===`popover`)if(t){this.attachPopover();let n=this.overlayRef?.overlayElement;n&&(n.setAttribute(`aria-label`,this.resolvedAriaLabel()),n.id=this.panelId(),n.style.inlineSize=this.panelWidth(),n.style.maxInlineSize=this.panelWidth(),this.disconnectOrigin?.reposition())}else this.detachPopover();else this.overlayRef&&this.disposePopover()}),this.destroyRef.onDestroy(()=>this.disposePopover())}onDrawerClosed(){this.dismiss.emit(),this.openedChange.emit(!1)}attachPopover(){if(this.overlayRef?.overlayElement.inert&&this.disposePopover(!1),this.overlayRef)return;let t=this.origin(),e=this.content();if(!t||!e)return;this.restoreTarget=t.ownerDocument.activeElement instanceof HTMLElement?t.ownerDocument.activeElement:t;let n=this.overlay.create({positionStrategy:this.bxOverlayPositionService.getElementStrategy(t,`bottom`,6).withFlexibleDimensions(!1),scrollStrategy:this.overlay.scrollStrategies.noop(),usePopover:!!t.closest(`dialog, [role="dialog"], [role="alertdialog"], bx-modal, bx-modal-core, [popover]`)});this.overlayRef=n,this.scrollLockService.disableScroll(this.scrollLockId,{handleTouchInput:!0});let o=n.overlayElement;o.id=this.panelId(),o.setAttribute(`role`,`dialog`),o.setAttribute(`aria-label`,this.resolvedAriaLabel()),o.tabIndex=-1,o.classList.add(`bx-picker-overlay-pane`),this.panelClass()&&o.classList.add(...this.panelClass().split(/\s+/).filter(Boolean)),this.panelWidth()&&(o.style.inlineSize=this.panelWidth(),o.style.maxInlineSize=this.panelWidth()),this.disconnectTheme=this.ngZone.runOutsideAngular(()=>BK(t,o)),this.disconnectLighting=DR(o,t),n.attach(new ja$1(e,this.viewContainerRef)).detectChanges(),this.disconnectOrigin=this.ngZone.runOutsideAngular(()=>RK(n,t)),this.openedChange.emit(!0),this.transition=this.ngZone.runOutsideAngular(()=>MR(t,o,{scale:1})),this.ngZone.runOutsideAngular(()=>this.transition?.enter());let a=n.outsidePointerEvents().subscribe(g=>{this.dismissOnOutside()&&!t.contains(g.target)&&this.dismiss.emit()}),u=n.keydownEvents().subscribe(g=>{g.key!==`Escape`||!this.dismissOnEscape()||g.defaultPrevented||(g.preventDefault(),g.stopPropagation(),this.dismiss.emit())});n.overlayElement.addEventListener(`pointerdown`,g=>g.stopPropagation()),this.overlaySubscriptions.push(a,u),this.focusTimer=setTimeout(()=>{if(!this.autoFocus()||!this.open()||this.overlayRef!==n||o.inert)return;(o.querySelector(`[data-picker-initial-focus], [data-focus-date][tabindex="0"], bx-time-wheel [role="listbox"]`)??o.querySelector(`button:not([disabled]), [href], input:not([disabled]), [tabindex]:not([tabindex="-1"])`)??o).focus({preventScroll:!0})})}detachPopover(){let t=this.overlayRef;if(!t)return;let e=t.overlayElement,n=++this.presentationRevision,o=this.transition;clearTimeout(this.focusTimer),e.inert=!0,this.scrollLockService.enableScroll(this.scrollLockId);let r=()=>{n===this.presentationRevision&&this.disposePopover()};o?this.ngZone.runOutsideAngular(()=>o.exit()).then(r,r):r(),this.openedChange.emit(!1)}disposePopover(t=!0){clearTimeout(this.focusTimer);for(let e of this.overlaySubscriptions.splice(0))e.unsubscribe();++this.presentationRevision,this.transition?.destroy(),this.transition=void 0,this.disconnectTheme?.(),this.disconnectTheme=void 0,this.disconnectLighting?.(),this.disconnectLighting=void 0,this.disconnectOrigin?.(),this.disconnectOrigin=void 0,this.overlayRef?.dispose(),this.overlayRef=void 0,this.scrollLockService.enableScroll(this.scrollLockId),t&&this.restoreTarget?.isConnected&&this.restoreTarget.focus({preventScroll:!0}),this.restoreTarget=void 0}static ɵfac=function(e){return new(e||i)};static ɵcmp=Fr$1({type:i,selectors:[[`bx-picker-surface`]],inputs:{open:[1,`open`],presentation:[1,`presentation`],origin:[1,`origin`],content:[1,`content`],ariaLabel:[1,`ariaLabel`],panelId:[1,`panelId`],panelClass:[1,`panelClass`],panelWidth:[1,`panelWidth`],autoFocus:[1,`autoFocus`],dismissOnOutside:[1,`dismissOnOutside`],dismissOnEscape:[1,`dismissOnEscape`]},outputs:{open:`openChange`,dismiss:`dismiss`,openedChange:`openedChange`},decls:2,vars:2,consts:[[`panelStyle`,`--bx-drawer-body-padding: 0; --bx-drawer-width: 100%;`,`size`,`lg`,`maxHeight`,`92dvh`,3,`surfaceId`,`ariaLabel`,`showHandle`,`showCloseButton`,`headerVisible`,`panelClass`,`open`],[`role`,`dialog`,`tabindex`,`-1`,1,`bx-picker-inline`,3,`id`],[3,`ngTemplateOutlet`],[`panelStyle`,`--bx-drawer-body-padding: 0; --bx-drawer-width: 100%;`,`size`,`lg`,`maxHeight`,`92dvh`,3,`openChange`,`closed`,`surfaceId`,`ariaLabel`,`showHandle`,`showCloseButton`,`headerVisible`,`panelClass`,`open`]],template:function(e,n){e&1&&(od$1(0,Bc,1,1),od$1(1,Wc,2,8,`bx-bottom-drawer`,0)),e&2&&(nd$1(n.isInline()?0:-1),Xl$1(),nd$1(n.isDrawer()?1:-1))},dependencies:[pl$1,Ta$1],styles:[`
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
}`]})};var da={dateParse:({params:i})=>`Enter a date in the ${i.format} format.`,dateMin:({params:i})=>`The date cannot be before ${i.minFormatted}.`,dateMax:({params:i})=>`The date cannot be after ${i.maxFormatted}.`,dateOrder:({params:i})=>`The end date cannot be before the start date (${i.startFormatted}).`,dateDisabled:`This date is not selectable. Choose another date.`,dateAvailability:`Availability for this date has not been confirmed. Wait for loading to finish or retry.`,dateMinLength:({params:i})=>`Select a range of at least ${i.minLength} days.`,dateMaxLength:({params:i})=>`Select a range of at most ${i.maxLength} days.`,dateSameDay:`The start and end dates must be different.`,dateLimit:({params:i})=>`Select no more than ${i.limit} dates.`,dateIncomplete:`Enter both a start date and an end date.`,dateCrossing:`This range includes a date that cannot be selected. Choose another range.`};var ca={parse:`dateParse`,min:`dateMin`,max:`dateMax`,order:`dateOrder`,unknown:`dateAvailability`,"min-length":`dateMinLength`,"max-length":`dateMaxLength`,"same-day":`dateSameDay`,limit:`dateLimit`,incomplete:`dateIncomplete`,crossing:`dateCrossing`};function ua(i,t,e){let n=new Map(i?.filter(o=>!e.start||!e.end||o.date<e.start||o.date>e.end).map(o=>[o.date,o]));for(let o of t)n.set(o.date,o);return[...n.values()]}function so(i,t){if(i==null||typeof i==`string`)return i;if(Array.isArray(i)){let e=[...i].sort();return(t===`min`?e[0]:e.at(-1))??null}return yC(i)?t===`min`?i.start:i.end:null}var jc=[`panelTemplate`];var $c=[[[`bx-error`]],[[`bx-hint`]]];var Gc=[`bx-error`,`bx-hint`];var Kc=[`ngProjectAs`,`bx-error`,5,[`bx-error`]];var Zc=[`ngProjectAs`,`bx-hint`,5,[`bx-hint`]];var Xc=()=>[`start`,`end`];function Uc(i,t){i&1&&(bo(0,`span`,14),lA(1,`*`),Go())}function Yc(i,t){if(i&1){let e=pb();bo(0,`input`,19),br$1(`input`,function(o){al$1(e);let r=Wo().$implicit,a=Wo(2);return cl$2(r===`start`?a.onRangeStartInput(o):a.onRangeEndInput(o))})(`blur`,function(){al$1(e);let o=Wo().$implicit,r=Wo(2);return cl$2(o===`start`?r.onRangeStartBlur():r.onRangeEndBlur())})(`keydown`,function(o){al$1(e);let r=Wo(3);return cl$2(r.onRangeKeydown(o))})(`keydown.escape`,function(o){al$1(e);let r=Wo(3);return cl$2(r.onEscape(o))}),Go()}if(i&2){let e=Wo().$implicit,n=Wo(2);xo(`id`,e===`start`?n.controlId():n.controlId()+`-end`)(`value`,e===`start`?n.typedStart():n.typedEnd())(`disabled`,n.effectiveDisabled())(`readOnly`,n.isReadonly()),vo(`aria-expanded`,n.isOpen())(`aria-controls`,n.isOpen()?n.controlId()+`-panel`:null)(`placeholder`,n.isFloating()?n.resolvedDatePlaceholder():``)(`aria-label`,e===`start`?n.resolvedStartLabel():n.resolvedEndLabel())(`aria-describedby`,n.describedBy())(`aria-invalid`,n.showError()||!!n.parseError())(`aria-required`,n.effectiveRequired())}}function Qc(i,t){if(i&1){let e=pb();bo(0,`button`,20),br$1(`click`,function(o){al$1(e);let r=Wo(3);return cl$2(r.onTriggerClick(o))})(`keydown.escape`,function(o){al$1(e);let r=Wo(3);return cl$2(r.onEscape(o))}),lA(1),Go()}if(i&2){let e=Wo().$implicit,n=Wo(2);xo(`id`,e===`start`?n.controlId():n.controlId()+`-end`)(`disabled`,n.effectiveDisabled()),vo(`aria-label`,e===`start`?n.resolvedStartLabel():n.resolvedEndLabel())(`aria-expanded`,n.isOpen())(`aria-describedby`,n.describedBy())(`aria-invalid`,n.showError()||!!n.parseError())(`aria-readonly`,n.isReadonly()),Xl$1(),mb(` `,e===`start`?n.displayStart():n.displayEnd(),` `)}}function Jc(i,t){if(i&1){let e=pb();bo(0,`div`,12)(1,`label`,13),lA(2),od$1(3,Uc,2,0,`span`,14),Go(),od$1(4,Yc,1,11,`input`,15)(5,Qc,2,8,`button`,16),bo(6,`button`,17),br$1(`click`,function(o){al$1(e);let r=Wo(2);return cl$2(r.onTriggerClick(o))}),sd$1(7,`bx-icon`,18),Go()()}if(i&2){let e=t.$implicit,n=Wo(2);tr(`is-open`,n.isOpen())(`is-floating`,n.editable()?n.isFloating():e===`start`?!!n.displayStart():!!n.displayEnd())(`is-invalid`,n.showError()||!!n.parseError())(`is-outline`,n.resolvedAppearance()===`outline`)(`is-readonly`,n.isReadonly())(`is-disabled`,n.effectiveDisabled())(`is-keyboard-focused`,n.keyboardFocused()),Xl$1(),vo(`for`,e===`start`?n.controlId():n.controlId()+`-end`),Xl$1(),mb(` `,e===`start`?n.resolvedStartLabel():n.resolvedEndLabel(),` `),Xl$1(),nd$1(n.effectiveRequired()&&!n.resolvedHideRequiredMarker()?3:-1),Xl$1(),nd$1(n.editable()?4:5),Xl$1(2),xo(`disabled`,n.effectiveDisabled()||n.isReadonly()),vo(`aria-label`,n.resolvedOpenPickerLabel()),Xl$1(),xo(`name`,n.pickerIcon())(`contentTemplate`,n.pickerIconTemplate())(`decorative`,!0)}}function eu(i,t){if(i&1&&(bo(0,`div`,5),ab(1,Jc,8,23,`div`,11,TT),Go()),i&2){let e=Wo();vo(`aria-label`,e.resolvedLabel()||e.resolvedDatePlaceholder()),Xl$1(),cb(wA(1,Xc))}}function tu(i,t){i&1&&(bo(0,`span`,14),lA(1,`*`),Go())}function nu(i,t){if(i&1&&(bo(0,`span`,13),lA(1),od$1(2,tu,2,0,`span`,14),Go()),i&2){let e=Wo(2);Xl$1(),mb(``,e.resolvedLabel(),` `),Xl$1(),nd$1(e.effectiveRequired()&&!e.resolvedHideRequiredMarker()?2:-1)}}function iu(i,t){i&1&&sd$1(0,`bx-loading-spinner`,26),i&2&&xo(`size`,16)(`decorative`,!0)}function ou(i,t){if(i&1&&sd$1(0,`bx-icon`,18),i&2){let e=Wo(3);xo(`name`,e.pickerIcon())(`contentTemplate`,e.pickerIconTemplate())(`decorative`,!0)}}function ru(i,t){if(i&1&&od$1(0,iu,1,2,`bx-loading-spinner`,26)(1,ou,1,3,`bx-icon`,18),i&2){let e=t.$implicit;nd$1(e?0:1)}}function au(i,t){if(i&1){let e=pb();bo(0,`div`,21),od$1(1,nu,3,2,`span`,13),bo(2,`input`,22),br$1(`input`,function(o){al$1(e);let r=Wo();return cl$2(r.onRangeStartInput(o))})(`blur`,function(){al$1(e);let o=Wo();return cl$2(o.onRangeStartBlur())})(`keydown`,function(o){al$1(e);let r=Wo();return cl$2(r.onRangeKeydown(o))})(`keydown.escape`,function(o){al$1(e);let r=Wo();return cl$2(r.onEscape(o))}),Go(),bo(3,`span`,23),lA(4),Go(),bo(5,`input`,24),br$1(`input`,function(o){al$1(e);let r=Wo();return cl$2(r.onRangeEndInput(o))})(`blur`,function(){al$1(e);let o=Wo();return cl$2(o.onRangeEndBlur())})(`keydown`,function(o){al$1(e);let r=Wo();return cl$2(r.onRangeKeydown(o))})(`keydown.escape`,function(o){al$1(e);let r=Wo();return cl$2(r.onEscape(o))}),Go(),bo(6,`button`,17),br$1(`click`,function(o){al$1(e);let r=Wo();return cl$2(r.onTriggerClick(o))}),bo(7,`bx-visual-transition`,25),rd$1(8,ru,2,1,`ng-template`),Go()()()}if(i&2){let e=Wo();tr(`has-label`,!!e.label())(`is-open`,e.isOpen())(`is-floating`,e.isFloating())(`is-invalid`,e.showError()||!!e.parseError())(`is-outline`,e.resolvedAppearance()===`outline`)(`is-readonly`,e.isReadonly())(`is-disabled`,e.effectiveDisabled())(`is-keyboard-focused`,e.keyboardFocused()),Xl$1(),nd$1(e.label()?1:-1),Xl$1(),xo(`value`,e.typedStart())(`id`,e.controlId())(`disabled`,e.effectiveDisabled())(`readOnly`,e.isReadonly()),vo(`aria-controls`,e.isOpen()?e.controlId()+`-panel`:null)(`placeholder`,e.isFloating()||!e.label()?e.resolvedStartLabel():``)(`aria-describedby`,e.describedBy())(`aria-required`,e.effectiveRequired())(`aria-label`,(e.label()?e.resolvedLabel()+`, `:``)+e.resolvedStartLabel())(`aria-expanded`,e.isOpen())(`aria-haspopup`,`dialog`)(`aria-invalid`,e.showError()||!!e.parseError())(`aria-readonly`,e.isReadonly()),Xl$1(),tr(`is-concealed`,e.label()&&!e.isFloating()),Xl$1(),ik(e.settings().rangeSeparator),Xl$1(),xo(`value`,e.typedEnd())(`disabled`,e.effectiveDisabled())(`readOnly`,e.isReadonly()),vo(`aria-controls`,e.isOpen()?e.controlId()+`-panel`:null)(`placeholder`,e.isFloating()||!e.label()?e.resolvedEndLabel():``)(`aria-describedby`,e.describedBy())(`aria-required`,e.effectiveRequired())(`aria-label`,(e.label()?e.resolvedLabel()+`, `:``)+e.resolvedEndLabel())(`aria-expanded`,e.isOpen())(`aria-haspopup`,`dialog`)(`aria-invalid`,e.showError()||!!e.parseError())(`aria-readonly`,e.isReadonly()),Xl$1(),xo(`disabled`,e.effectiveDisabled()||e.isReadonly()||e.isLoading()),vo(`aria-label`,e.resolvedOpenPickerLabel()),Xl$1(),xo(`value`,e.isLoading())}}function su(i,t){i&1&&(bo(0,`span`,14),lA(1,`*`),Go())}function lu(i,t){if(i&1&&(bo(0,`span`,13),lA(1),od$1(2,su,2,0,`span`,14),Go()),i&2){let e=Wo(2);Xl$1(),mb(``,e.resolvedLabel(),` `),Xl$1(),nd$1(e.effectiveRequired()&&!e.resolvedHideRequiredMarker()?2:-1)}}function du(i,t){i&1&&sd$1(0,`bx-loading-spinner`,26),i&2&&xo(`size`,16)(`decorative`,!0)}function cu(i,t){if(i&1&&sd$1(0,`bx-icon`,18),i&2){let e=Wo(3);xo(`name`,e.pickerIcon())(`contentTemplate`,e.pickerIconTemplate())(`decorative`,!0)}}function uu(i,t){if(i&1&&od$1(0,du,1,2,`bx-loading-spinner`,26)(1,cu,1,3,`bx-icon`,18),i&2){let e=t.$implicit;nd$1(e?0:1)}}function pu(i,t){if(i&1){let e=pb();bo(0,`div`,27),od$1(1,lu,3,2,`span`,13),bo(2,`input`,28),br$1(`input`,function(o){al$1(e);let r=Wo();return cl$2(r.onTypedInput(o))})(`blur`,function(){al$1(e);let o=Wo();return cl$2(o.onTypedBlur())})(`keydown`,function(o){al$1(e);let r=Wo();return cl$2(r.onTypedKeydown(o))})(`keydown.escape`,function(o){al$1(e);let r=Wo();return cl$2(r.onEscape(o))}),Go(),bo(3,`button`,17),br$1(`click`,function(o){al$1(e);let r=Wo();return cl$2(r.onTriggerClick(o))}),bo(4,`bx-visual-transition`,25),rd$1(5,uu,2,1,`ng-template`),Go()()()}if(i&2){let e=Wo();tr(`has-label`,!!e.label())(`is-open`,e.isOpen())(`is-floating`,e.isFloating())(`is-invalid`,e.showError()||!!e.parseError())(`is-outline`,e.resolvedAppearance()===`outline`)(`is-readonly`,e.isReadonly())(`is-disabled`,e.effectiveDisabled())(`is-keyboard-focused`,e.keyboardFocused()),Xl$1(),nd$1(e.label()?1:-1),Xl$1(),xo(`id`,e.controlId())(`value`,e.typedText())(`disabled`,e.effectiveDisabled())(`readOnly`,e.isReadonly()),vo(`aria-controls`,e.isOpen()?e.controlId()+`-panel`:null)(`placeholder`,e.isFloating()||!e.label()?e.resolvedDatePlaceholder():``)(`aria-label`,e.ariaLabel()||e.resolvedLabel()||e.resolvedDatePlaceholder())(`aria-describedby`,e.describedBy())(`aria-expanded`,e.isOpen())(`aria-haspopup`,`dialog`)(`aria-invalid`,e.showError()||!!e.parseError())(`aria-required`,e.effectiveRequired())(`aria-readonly`,e.isReadonly())(`data-testid`,e.dataTestId()),Xl$1(),xo(`disabled`,e.effectiveDisabled()||e.isReadonly()||e.isLoading()),vo(`aria-label`,e.resolvedOpenPickerLabel()),Xl$1(),xo(`value`,e.isLoading())}}function bu(i,t){i&1&&(bo(0,`span`,14),lA(1,`*`),Go())}function mu(i,t){if(i&1&&(bo(0,`span`,13),lA(1),od$1(2,bu,2,0,`span`,14),Go()),i&2){let e=Wo(2);Xl$1(),mb(` `,e.resolvedLabel(),` `),Xl$1(),nd$1(e.effectiveRequired()&&!e.resolvedHideRequiredMarker()?2:-1)}}function gu(i,t){if(i&1&&sd$1(0,`bx-tag`,34),i&2){let e=t.$implicit,n=Wo(3);xo(`text`,n.formatChipLabel(e))(`config`,n.tagConfig())(`focusable`,!1)(`tooltipOnTruncate`,n.resolvedTooltipOnTruncate()?void 0:!1)}}function hu(i,t){if(i&1&&sd$1(0,`bx-tag`,35),i&2){let e=Wo(3);xo(`text`,e.overflowDatesLabel())(`config`,e.overflowTagConfig())(`tooltip`,e.overflowDatesTooltip())(`focusable`,!1)(`tooltipOnTruncate`,e.resolvedTooltipOnTruncate()?void 0:!1)}}function fu(i,t){if(i&1&&(bo(0,`span`,31),ab(1,gu,1,4,`bx-tag`,34,TT),od$1(3,hu,1,5,`bx-tag`,35),Go()),i&2){let e=Wo(2);vo(`aria-label`,e.resolvedSelectedDatesLabel()),Xl$1(),cb(e.visibleDates()),Xl$1(2),nd$1(e.multipleDates().length>e.visibleTagCount()?3:-1)}}function xu(i,t){if(i&1&&(bo(0,`span`,32),lA(1),Go()),i&2){let e=Wo(2);xo(`bxTooltip`,e.resolvedTooltipOnTruncate()?e.displayValue():``),Xl$1(),ik(e.displayValue()||(e.label()?``:e.resolvedTriggerText()))}}function vu(i,t){i&1&&sd$1(0,`bx-loading-spinner`,26),i&2&&xo(`size`,16)(`decorative`,!0)}function yu(i,t){if(i&1&&sd$1(0,`bx-icon`,18),i&2){let e=Wo(3);xo(`name`,e.pickerIcon())(`contentTemplate`,e.pickerIconTemplate())(`decorative`,!0)}}function Su(i,t){if(i&1&&od$1(0,vu,1,2,`bx-loading-spinner`,26)(1,yu,1,3,`bx-icon`,18),i&2){let e=t.$implicit;nd$1(e?0:1)}}function _u(i,t){if(i&1){let e=pb();bo(0,`button`,29,2),br$1(`click`,function(o){al$1(e);let r=Wo();return cl$2(r.onTriggerClick(o))})(`keydown.arrowdown`,function(o){al$1(e);let r=Wo();return o.preventDefault(),cl$2(r.onTriggerClick(o))})(`keydown.escape`,function(o){al$1(e);let r=Wo();return cl$2(r.onEscape(o))})(`blur`,function(){al$1(e);let o=Wo();return cl$2(o.markAsTouched())}),od$1(2,mu,3,2,`span`,13),bo(3,`span`,30),od$1(4,fu,4,2,`span`,31)(5,xu,2,2,`span`,32),Go(),bo(6,`bx-visual-transition`,33),rd$1(7,Su,2,1,`ng-template`),Go()()}if(i&2){let e=Wo();tr(`has-label`,!!e.label())(`is-open`,e.isOpen())(`is-floating`,e.isFloating())(`is-invalid`,e.showError()||!!e.parseError())(`is-outline`,e.resolvedAppearance()===`outline`)(`is-readonly`,e.isReadonly())(`is-disabled`,e.effectiveDisabled())(`is-keyboard-focused`,e.keyboardFocused()),xo(`id`,e.controlId())(`disabled`,e.effectiveDisabled()),vo(`aria-label`,e.ariaLabel()||e.resolvedLabel()||e.resolvedDatePlaceholder())(`aria-labelledby`,e.ariaLabelledBy())(`aria-describedby`,e.describedBy())(`aria-haspopup`,`dialog`)(`aria-expanded`,e.isOpen())(`aria-invalid`,e.showError()||!!e.parseError())(`aria-required`,e.effectiveRequired())(`aria-readonly`,e.isReadonly())(`aria-busy`,e.isLoading())(`data-testid`,e.dataTestId()),Xl$1(2),nd$1(e.label()?2:-1),Xl$1(),tr(`is-placeholder`,!e.displayValue()),Xl$1(),nd$1(e.mode()===`multiple`&&e.multipleDates().length?4:5),Xl$1(2),xo(`value`,e.isLoading())}}function Cu(i,t){if(i&1){let e=pb();bo(0,`button`,36),br$1(`click`,function(){al$1(e);let o=Wo();return cl$2(o.clear())}),sd$1(1,`bx-icon`,37),Go()}if(i&2){let e=Wo();xo(`surfaceEffects`,!1)(`disabled`,e.effectiveDisabled())(`bxTooltip`,e.resolvedClearTooltip()),vo(`aria-label`,e.resolvedClearLabel()),Xl$1(),xo(`decorative`,!0)}}function Mu(i,t){if(i&1){let e=pb();bo(0,`button`,38),br$1(`click`,function(){let o=al$1(e).retry;return cl$2(o())}),sd$1(1,`bx-icon`,39),lA(2),Go()}if(i&2){let e=t.label;Xl$1(),xo(`decorative`,!0),Xl$1(),mb(``,e,` `)}}function wu(i,t){if(i&1){let e=pb();bo(0,`aside`,42)(1,`bx-date-preset-list`,45),br$1(`presetSelect`,function(o){al$1(e);let r=Wo(2);return cl$2(r.onPeriodPresetSelect(o))}),Go()()}if(i&2){let e=Wo(2);Xl$1(),xo(`presets`,e.effectivePresets())(`context`,e.presetContext())(`activeValue`,e.draftValue())(`horizontal`,e.presetsHorizontal())(`ariaLabel`,e.resolvedPresetsLabel())}}function Nu(i,t){if(i&1){let e=pb();bo(0,`aside`,42)(1,`bx-date-preset-list`,45),br$1(`presetSelect`,function(o){al$1(e);let r=Wo(2);return cl$2(r.onPeriodPresetSelect(o))}),Go()()}if(i&2){let e=Wo(2);Xl$1(),xo(`presets`,e.effectivePresets())(`context`,e.presetContext())(`activeValue`,e.draftValue())(`horizontal`,e.presetsHorizontal())(`ariaLabel`,e.resolvedPresetsLabel())}}function Tu(i,t){if(i&1){let e=pb();bo(0,`div`,40)(1,`div`,41),od$1(2,wu,2,5,`aside`,42),bo(3,`div`,43)(4,`bx-calendar`,44),br$1(`visibleRangeChange`,function(o){al$1(e);let r=Wo();return cl$2(r.onVisibleRange(o))})(`viewChange`,function(o){al$1(e);let r=Wo();return cl$2(r.viewChange.emit(o))})(`monthSelected`,function(o){al$1(e);let r=Wo();return cl$2(r.monthSelected.emit(o))})(`yearSelected`,function(o){al$1(e);let r=Wo();return cl$2(r.yearSelected.emit(o))})(`rangeStart`,function(o){al$1(e);let r=Wo();return cl$2(r.onCalendarRangeStart(o))})(`valueChange`,function(o){al$1(e);let r=Wo();return cl$2(r.onCalendarValueChange(o))})(`selectionRejected`,function(o){al$1(e);let r=Wo();return cl$2(r.onSelectionRejected(o))})(`requestAvailability`,function(o){al$1(e);let r=Wo();return cl$2(r.onAvailabilityRequest(o))})(`retryAvailability`,function(o){al$1(e);let r=Wo();return cl$2(r.onAvailabilityRequest(o))}),Go()(),od$1(5,Nu,2,5,`aside`,42),Go()()}if(i&2){let e=Wo(),n=FT(9);tr(`is-drawer`,e.isDrawer()),xo(`bxSurfaceInteractive`,!1),Xl$1(2),nd$1(e.showPresets()&&e.presetsPlacement()===`start`?2:-1),Xl$1(2),xo(`startView`,e.startView())(`mode`,e.mode())(`value`,e.draftValue())(`viewDate`,e.viewDate())(`months`,e.calendarMonths())(`retryTemplate`,n)(`weekdayNameFormat`,e.weekdayNameFormat())(`monthNameFormat`,e.monthNameFormat())(`locale`,e.settings().locale)(`calendarId`,e.settings().calendar)(`timeZone`,e.settings().timeZone)(`weekStartsOn`,e.settings().weekStartsOn)(`minimalDaysInFirstWeek`,e.settings().minimalDaysInFirstWeek)(`min`,e.min())(`max`,e.max())(`disabledDates`,e.disabledDates())(`disabledIntervals`,e.disabledIntervals())(`disabledWeekdays`,e.disabledWeekdays())(`dateFilter`,e.dateFilter())(`crossingPolicy`,e.crossingPolicy())(`minRangeLength`,e.minRangeLength())(`maxRangeLength`,e.maxRangeLength())(`allowSameDay`,e.allowSameDay())(`selectionLimit`,e.selectionLimit())(`readOnly`,e.isReadonly()||e.effectiveDisabled())(`availability`,e.availabilityForCalendar())(`dayTemplate`,e.dayTemplate())(`showToday`,e.showToday())(`showTodayButton`,e.showTodayButton())(`todayLabel`,e.todayLabel())(`loadingLabel`,e.loadingLabel())(`retryLabel`,e.retryLabel()),Xl$1(),nd$1(e.showPresets()&&e.presetsPlacement()===`end`?5:-1)}}var pa=class i extends ve{bxDateTimeConfigService=b(vC);clock=b(hC);i18n=b(VQ,{optional:!0});windowDimensionsService=b(Fd$1);originElement=$(null);availabilityState=$(void 0);lastDraftSignature=$(``);fieldFocused=$(!1);textEdited=$(!1);isOpen=$(!1);draftValue=$(null);viewDate=$(null);typedText=$(``);typedStart=$(``);typedEnd=$(``);parseError=$(null);settings=G(()=>this.bxDateTimeConfigService.resolve({locale:this.locale(),calendar:this.calendarId(),timeZone:this.timeZone(),weekStartsOn:this.weekStartsOn(),minimalDaysInFirstWeek:this.minimalDaysInFirstWeek(),dateFormat:this.dateFormat(),allowNaturalLanguage:this.allowNaturalLanguage()}));adapter=G(()=>this.bxDateTimeConfigService.adapter(this.settings().calendar));modeInfo=G(()=>Jh(this.mode()));formatContext=G(()=>({locale:this.settings().locale,calendar:this.adapter(),weekStartsOn:this.settings().weekStartsOn,minimalDaysInFirstWeek:this.settings().minimalDaysInFirstWeek}));presetContext=G(()=>({now:this.clock.now(),today:this.todayIso(),locale:this.settings().locale,calendar:this.adapter(),timeZone:this.settings().timeZone,weekStartsOn:this.settings().weekStartsOn,minimalDaysInFirstWeek:this.settings().minimalDaysInFirstWeek}));isDrawer=G(()=>this.surfacePresentation()===`drawer`);surfacePresentation=G(()=>{let t=this.presentation();return t!==`auto`?t:this.windowDimensionsService.isMobile()?`drawer`:`popover`});displayValue=G(()=>this.formatValue(this.isOpen()&&this.mode()!==`multiple`?this.draftValue():this.internalValue()));displayStart=G(()=>this.formatEndpoint(this.rangeStart(this.isOpen()?this.draftValue():this.internalValue())));displayEnd=G(()=>this.formatEndpoint(this.rangeEnd(this.isOpen()?this.draftValue():this.internalValue())));isRangeMode=G(()=>this.modeInfo().selection===`range`);rangeFieldLayout=G(()=>this.separateFields()&&this.isRangeMode()?`separate`:`combined`);effectivePresets=G(()=>(this.presets()??this.defaultPresets()).map(e=>s(r({},e),{resolve:n=>this.normalizePresetValue(e.resolve(n))})));showPresets=G(()=>this.presetsPlacement()!==`hidden`&&this.effectivePresets().length>0);presetsHorizontal=G(()=>this.isDrawer());calendarMonths=G(()=>{let t=this.months();return t>0?t:this.isRangeMode()&&!this.isDrawer()?2:1});availabilityForCalendar=G(()=>this.availability()??(this.resolver()?this.availabilityState():void 0));resolvedDatePlaceholder=G(()=>LQ(this.placeholder()??this.defaultPlaceholder(),this.i18n));resolvedInvalidLabel=G(()=>this.dateValidationMessage(this.parseError()??`endpoint`));resolvedTriggerText=G(()=>LQ(this.placeholder()??this.openPickerLabel(),this.i18n));resolvedOpenPickerLabel=G(()=>LQ(this.openPickerLabel(),this.i18n));resolvedClearLabel=G(()=>LQ(this.clearLabel(),this.i18n));resolvedPresetsLabel=G(()=>LQ(this.presetsLabel(),this.i18n));resolvedStartLabel=G(()=>LQ(this.startLabel(),this.i18n));resolvedEndLabel=G(()=>LQ(this.endLabel(),this.i18n));resolvedMoreDatesLabel=G(()=>LQ(this.moreDatesLabel(),this.i18n));resolvedSelectedDatesLabel=G(()=>LQ(this.selectedDatesLabel(),this.i18n));availableDates=G(()=>this.availabilityForCalendar()?.dates??[]);showClear=G(()=>{let t=this.internalValue(),e=Array.isArray(t)?t.length>0:!!t;return this.clearable()&&(e||this.textEdited())&&!this.isReadonly()});isFloating=G(()=>!!this.displayValue()||this.editable()&&this.mode()!==`multiple`&&(this.fieldFocused()||this.isOpen()||!!this.typedText()||!!this.typedStart()||!!this.typedEnd()||this.resolvedFloatLabel()===`always`));isLoading=G(()=>this.loading()||this.availabilityForCalendar()?.loading===!0);multipleDates=G(()=>{let t=this.internalValue();return Array.isArray(t)?t:[]});visibleDates=G(()=>this.multipleDates().slice(0,this.visibleTagCount()));overflowDatesLabel=G(()=>`+${Math.max(0,this.multipleDates().length-this.visibleTagCount())}`);overflowDatesTooltip=G(()=>this.multipleDates().slice(this.visibleTagCount()).map(t=>this.formatEndpoint(t)).join(`, `));resolvedClearTooltip=G(()=>LQ(this.clearTooltip()??this.clearLabel(),this.i18n));restrictionConfig=G(()=>({min:this.min(),max:this.max(),disabledDates:this.disabledDates(),disabledIntervals:this.disabledIntervals(),disabledWeekdays:this.disabledWeekdays(),metadata:this.availableDates(),isDateDisabled:t=>!!this.dateFilter()?.(t)||(!!this.resolver()||!!this.availability())&&(!this.availabilityForCalendar()||!!this.availabilityForCalendar()?.loading||!!this.availabilityForCalendar()?.error||!this.availableDates().some(e=>e.date===t))}));panelClass=G(()=>`bx-date-panel ${this.isDrawer()?`is-drawer`:`is-popover`}`);panelWidth=G(()=>{if(this.isDrawer())return`100%`;let t=this.calendarMonths(),e=this.showPresets();return t===1?e?`min(94vw, 32rem)`:`min(94vw, 20rem)`:e?`min(94vw, 46rem)`:`min(94vw, 38rem)`});panelOrigin=G(()=>this.originElement());panelTemplate=Sz(`panelTemplate`);mode=ee(`single`);pickerIconTemplate=ee(void 0);pickerIcon=ee(`calendar`);openPickerLabel=ee(`Choose date`);startAt=ee(null);startView=ee(void 0);parseFormats=ee([]);locale=ee(void 0);calendarId=ee(void 0);timeZone=ee(void 0);weekStartsOn=ee(void 0);minimalDaysInFirstWeek=ee(void 0);dateFormat=ee(void 0);allowNaturalLanguage=ee(!1,{transform:Ye});editable=ee(!0,{transform:Ye});presentation=ee(`auto`);weekdayNameFormat=ee(`narrow`);monthNameFormat=ee(`short`);months=ee(0,{transform:t=>Math.trunc(Number(t))||0});separateFields=ee(!1,{transform:Ye});commitPolicy=ee(`auto`);closeOnSelect=ee(!0,{transform:Ye});clearable=ee(!0,{transform:Ye});presets=ee(void 0);presetsPlacement=ee(`start`);min=ee(void 0,{transform:t=>so(t,`min`)});max=ee(void 0,{transform:t=>so(t,`max`)});disabledDates=ee([]);disabledIntervals=ee([]);disabledWeekdays=ee([]);dateFilter=ee(void 0);crossingPolicy=ee(`reject`);minRangeLength=ee(1);maxRangeLength=ee(null);allowSameDay=ee(!0,{transform:Ye});selectionLimit=ee(null);availability=ee(void 0);resolver=ee(void 0);loadingLabel=ee(void 0);retryLabel=ee(`Retry request`);loadErrorMessage=ee(`Dates could not be loaded.`);invalidSelectionLabel=ee(void 0);applyLabel=ee(`Apply`);cancelLabel=ee(`Cancel`);clearLabel=ee(`Clear selection`);todayLabel=ee(void 0);presetsLabel=ee(`Quick select`);showToday=ee(!0,{transform:Ye});showTodayButton=ee(!0,{transform:Ye});startLabel=ee(`Start date`);endLabel=ee(`End date`);moreDatesLabel=ee(`more`);selectedDatesLabel=ee(`Selected dates`);clearTooltip=ee(void 0);visibleTagCount=ee(1,{transform:ei});tagConfig=ee({});overflowTagConfig=ee({});dayTemplate=ee(void 0);viewChange=Pk();monthSelected=Pk();yearSelected=Pk();valueCommit=Pk();draftChange=Pk();openChange=Pk();visibleRangeChange=Pk();request=Pk();retry=Pk();parseFailed=Pk();resolverContext=``;resolverToken=0;lastRequest;closeTimer;constructor(){super(),We$1(()=>{(this.effectiveDisabled()||this.isReadonly())&&this.close()}),We$1(()=>{let t=this.draftValue(),e=JSON.stringify(t??null);e!==this.lastDraftSignature()&&(this.lastDraftSignature.set(e),de(()=>this.draftChange.emit(t)))}),We$1(()=>{this.resolver(),this.availability(),de(()=>{++this.resolverToken,this.availabilityState.set(void 0),this.resolverContext=``;let t=this.lastRequest;this.isOpen()&&t&&this.runResolver(s(r({},t),{revision:t.revision+1}))})}),We$1(()=>{let t=this.internalValue();this.fieldFocused()||this.isOpen()||this.textEdited()||(this.typedText.set(this.formatValue(t)),this.typedStart.set(this.displayStart()),this.typedEnd.set(this.displayEnd()))}),this.destroyRef.onDestroy(()=>{++this.resolverToken,this.clearScheduledClose()})}reset(){let t=this.isOpen();this.clearScheduledClose(),this.isOpen.set(!1),super.reset(),this.clearPendingEdit(),this.fieldFocused.set(!1),this.draftValue.set(this.internalValue()),this.typedText.set(this.formatValue(this.internalValue())),this.typedStart.set(this.displayStart()),this.typedEnd.set(this.displayEnd()),t&&this.openChange.emit(!1)}open(){if(this.isOpen()||this.effectiveDisabled()||this.isReadonly())return;this.clearScheduledClose(),this.draftValue.set(this.internalValue()),this.viewDate.set(this.startAt());let t=this.originElement();this.originElement.set(t?.isConnected&&this.nativeElement.contains(t)?t:this.nativeElement.querySelector(`.bx-date-trigger`)),this.isOpen.set(!0),this.openChange.emit(!0)}close(){this.isOpen()&&(this.clearScheduledClose(),this.isOpen.set(!1),this.markAsTouched(),this.openChange.emit(!1))}apply(){let t=this.draftValue();this.effectiveDisabled()||this.isReadonly()||t!==null&&!Array.isArray(t)&&!this.isDraftComplete(t)||this.commitDraft(t)&&this.close()}cancel(){this.draftValue.set(this.internalValue()),this.parseError()||(this.textEdited.set(!1),this.typedText.set(this.formatValue(this.internalValue())),this.typedStart.set(this.formatEndpoint(this.rangeStart(this.internalValue()))),this.typedEnd.set(this.formatEndpoint(this.rangeEnd(this.internalValue())))),this.close()}clear(){this.effectiveDisabled()||this.isReadonly()||(this.draftValue.set(null),this.clearPendingEdit(),this.parseError.set(null),this.updateValue(null),this.valueCommit.emit(null),this.close(),this.focus({preventScroll:!0}))}goToToday(){this.viewDate.set(this.todayIso())}reloadAvailability(){this.effectiveDisabled()||this.isReadonly()||this.availabilityForCalendar()?.loading||(this.isOpen()?this.lastRequest&&this.onAvailabilityRequest(s(r({},this.lastRequest),{revision:this.lastRequest.revision+1,source:`initial`})):this.open())}retryAvailability(){if(!this.lastRequest)return;let t=s(r({},this.lastRequest),{revision:this.lastRequest.revision+1,source:`retry`});this.retry.emit(t),this.runResolver(t)}clearPendingEdit(){super.clearPendingEdit(),this.typedText.set(``),this.typedStart.set(``),this.typedEnd.set(``),this.textEdited.set(!1),this.parseError.set(null)}onFieldFocus(){this.fieldFocused.set(!0)}onFieldBlur(t){t.relatedTarget instanceof Node&&this.nativeElement.contains(t.relatedTarget)||(this.fieldFocused.set(!1),this.markAsTouched())}onEscape(t){this.isOpen()&&(t.preventDefault(),this.cancel())}onTriggerClick(t){if(this.isReadonly())return;let e=t.currentTarget;e instanceof HTMLElement&&this.originElement.set(e.closest(`.bx-date-field`)??e),this.isOpen()?this.close():this.open()}onCalendarRangeStart(t){this.clearScheduledClose(),this.draftValue.set({start:t,end:null}),this.typedStart.set(this.formatEndpoint(t)),this.typedEnd.set(``),this.parseError.set(null)}onCalendarValueChange(t){this.draftValue.set(t),this.textEdited.set(!1),this.parseError.set(null),this.editable()&&(this.typedText.set(this.formatValue(t)),yC(t)&&(this.typedStart.set(this.formatEndpoint(t.start)),this.typedEnd.set(this.formatEndpoint(t.end)))),this.maybeImmediateCommit(t)}onPeriodPresetSelect(t){let e=this.safeResolvePreset(t);e&&(this.draftValue.set(e),this.editable()&&this.typedText.set(this.formatValue(e)),this.onCalendarValueChange(e))}onTypedInput(t){let e=t.target;this.textEdited.set(!0),this.typedText.set(e.value),this.parseError.set(null)}onTypedBlur(){this.commitTypedValue(),this.markAsTouched()}onTypedKeydown(t){t.key===`Enter`?(t.preventDefault(),this.commitTypedValue()):t.key===`ArrowDown`&&!this.isOpen()&&(t.preventDefault(),this.open())}onRangeStartInput(t){let e=t.target;this.textEdited.set(!0),this.typedStart.set(e.value),this.parseError.set(null)}onRangeEndInput(t){let e=t.target;this.textEdited.set(!0),this.typedEnd.set(e.value),this.parseError.set(null)}onRangeStartBlur(){this.commitRangeEndpoint(`start`),this.markAsTouched()}onRangeEndBlur(){this.commitRangeEndpoint(`end`),this.markAsTouched()}onRangeKeydown(t){t.key===`Enter`?(t.preventDefault(),this.commitRangeEndpoint(`start`),this.commitRangeEndpoint(`end`)):t.key===`ArrowDown`&&!this.isOpen()&&(t.preventDefault(),this.open())}formatChipLabel(t){return this.formatEndpoint(t)}onSelectionRejected(t){this.parseError.set(t)}onVisibleRange(t){this.visibleRangeChange.emit(t)}onAvailabilityRequest(t){this.lastRequest=t,t.source===`retry`?this.retry.emit(t):this.request.emit(t),this.runResolver(t)}todayIso(){let t=new Intl.DateTimeFormat(`en-CA`,{timeZone:this.settings().timeZone,year:`numeric`,month:`2-digit`,day:`2-digit`}).formatToParts(this.clock.now()),e=n=>t.find(o=>o.type===n)?.value??``;return`${e(`year`)}-${e(`month`)}-${e(`day`)}`}defaultPlaceholder(){return this.parseFormats()[0]??this.patternForMode(this.modeInfo().period)}formatValue(t){if(!t)return``;if(typeof t==`string`)return this.formatEndpoint(t);if(Array.isArray(t)){if(!t.length)return``;let e=this.formatEndpoint(t[0]),n=t.length-1;return n>0?`${e} +${n} ${this.resolvedMoreDatesLabel()}`:e}if(xC(t)){let e=this.formatEndpoint(t.start),n=this.formatEndpoint(t.end);return t.start===t.end?e:`${e} ${this.settings().rangeSeparator} ${n}`}if(yC(t)){let e=t.start?this.formatEndpoint(t.start):``,n=t.end?this.formatEndpoint(t.end):``;return e&&n?`${e} ${this.settings().rangeSeparator} ${n}`:e||n}return``}formatEndpoint(t){if(!t)return``;let e=this.modeInfo(),n=this.patternForMode(e.period);if(e.period===`week`){let o=sX(this.mode(),t,this.settings().weekStartsOn);return o?.start&&o.end?`${XK(o.start,`dd MMM`,this.formatContext())} ${this.settings().rangeSeparator} ${XK(o.end,`dd MMM yyyy`,this.formatContext())}`:XK(t,n,this.formatContext())}return XK(t,n,this.formatContext())}patternForMode(t){return t===`month`?this.settings().monthFormat:t===`quarter`?this.settings().quarterFormat:t===`year`?this.settings().yearFormat:this.settings().dateFormat}rangeOf(t){return sX(this.mode(),t,this.settings().weekStartsOn)}rangeStart(t){return this.rangeOf(t)?.start??null}rangeEnd(t){return this.rangeOf(t)?.end??null}isDraftComplete(t){return t?typeof t==`string`||Array.isArray(t)?!0:xC(t)||yC(t)?!!t.start&&!!t.end:!1:!1}maybeImmediateCommit(t){this.isDraftComplete(t)&&this.commitDraft(t)&&this.mode()!==`multiple`&&this.closeOnSelect()&&this.scheduleClose()}scheduleClose(){this.clearScheduledClose(),this.closeTimer=setTimeout(()=>{this.closeTimer=void 0,this.close()},120)}clearScheduledClose(){this.closeTimer!==void 0&&(clearTimeout(this.closeTimer),this.closeTimer=void 0)}commitDraft(t){if(this.effectiveDisabled()||this.isReadonly())return!1;let e=this.validateDraft(t);if(!e.valid)return this.parseError.set(e.message),this.parseFailed.emit(this.dateValidationMessage(e.message)),!1;let n=e.value??t;return this.parseError.set(null),this.textEdited.set(!1),this.draftValue.set(n),this.editable()&&(this.typedText.set(this.formatValue(n)),this.typedStart.set(this.formatEndpoint(this.rangeStart(n))),this.typedEnd.set(this.formatEndpoint(this.rangeEnd(n)))),JSON.stringify(n)!==JSON.stringify(this.internalValue())&&(this.updateValue(n),this.valueCommit.emit(n)),!0}validateDraft(t){if(t===null||Array.isArray(t)&&t.length===0)return{valid:!0,message:``};if(!this.isDraftComplete(t))return{valid:!1,message:`incomplete`};let e=typeof t==`string`&&this.modeInfo().period===`week`?Jo(t,`week`,this.settings().weekStartsOn):null,n=e?CN(e.start,e.end):typeof t==`string`?[t]:Array.isArray(t)?t:[],o=this.selectionLimit();for(let r of n){if(!Te(r))return{valid:!1,message:`parse`};let a=dg(r,this.restrictionConfig());if(a.disabled)return{valid:!1,message:a.reason??`endpoint`}}if(Array.isArray(t)&&o!==null&&t.length>o)return{valid:!1,message:`limit`};if(yC(t)&&t.start&&t.end){if(t.start>t.end)return{valid:!1,message:`order`};let r$7=this.modeInfo().period===`week`?Jo(t.end,`week`,this.settings().weekStartsOn).end:t.end,a=iJ(t.start,r$7,this.restrictionConfig(),{crossingPolicy:this.crossingPolicy(),minLength:this.minRangeLength(),maxLength:this.maxRangeLength(),allowSameDay:this.allowSameDay()});if(!a.valid){let u=dg(t.start,this.restrictionConfig()).reason??dg(r$7,this.restrictionConfig()).reason;return{valid:!1,message:a.reason===`endpoint`?u??`endpoint`:a.reason??`endpoint`}}return this.modeInfo().period===`week`&&a.range.end!==r$7?{valid:!1,message:`crossing`}:{valid:!0,message:``,value:xC(t)?t:s(r({},t),{start:a.range.start,end:a.range.end})}}return{valid:!0,message:``}}dateValidationMessage(t){let e=this.invalidSelectionLabel();if(e!==void 0)return LQ(e,this.i18n);let n=this.draftValue(),o=yC(n)?n.start:null,r$8={format:this.defaultPlaceholder(),min:this.min(),max:this.max(),start:o,minFormatted:this.formatEndpoint(this.min()??null),maxFormatted:this.formatEndpoint(this.max()??null),startFormatted:this.formatEndpoint(o),minLength:this.minRangeLength(),maxLength:this.maxRangeLength(),limit:this.selectionLimit()};return Dt({kind:ca[t]??`dateDisabled`,context:r$8},this.errorMessages(),r(r({},da),this.formSettingsService.settings().errorMessages),this.i18n)}defaultPresets(){let t=this.modeInfo(),e=t.period;return t.isRange?rJ():[-1,0,1].map(n=>({id:`relative-${n}`,label:e?`${n<0?`Previous`:n>0?`Next`:`This`} ${e}`:n<0?`Yesterday`:n>0?`Tomorrow`:`Today`,resolve:o=>e===`year`?o.calendar.addYears(o.today,n,o.locale):e===`month`||e===`quarter`?o.calendar.addMonths(o.today,n*(e===`quarter`?3:1),o.locale):ue(o.today,n*(e===`week`?7:1))}))}normalizePresetValue(t){if(!t)return null;let e=this.modeInfo(),n=nX(this.mode(),t),o=n.start,r=n.end??o;if(!o||!r)return null;if(e.selection===`multiple`)return Array.isArray(t)?t:CN(o,r);let a=u=>e.period?Jo(u,e.period,this.settings().weekStartsOn).start:u;return e.isRange?iX(this.mode(),a(o),a(r),this.settings().weekStartsOn):a(r)}safeResolvePreset(t){try{return this.normalizePresetValue(t.resolve(this.presetContext()))}catch{return null}}commitTypedValue(){if(!this.editable()||!this.textEdited()||this.effectiveDisabled()||this.isReadonly())return;let t=this.typedText().trim();if(!t){this.commitDraft(null);return}let e=this.parseTypedText(t);if(!e){this.parseError.set(`parse`),this.parseFailed.emit(t);return}this.draftValue.set(e),this.commitDraft(e)}commitRangeEndpoint(t){if(!this.textEdited()||!this.editable()||this.effectiveDisabled()||this.isReadonly())return;let e=this.typedStart().trim(),n=this.typedEnd().trim();if(!e&&!n){this.commitDraft(null);return}let o=e?this.parseSingleDate(e):null,r=n?this.parseSingleDate(n):null;if(e&&!o||n&&!r){this.parseError.set(`parse`),this.parseFailed.emit(t===`start`?e:n);return}let a=this.modeInfo().period,u=a&&o&&r?{start:o,end:r,kind:a}:{start:o,end:r};this.draftValue.set(u),o&&r&&this.commitDraft(u)?(this.typedStart.set(this.formatEndpoint(this.rangeStart(this.draftValue()))),this.typedEnd.set(this.formatEndpoint(this.rangeEnd(this.draftValue())))):(!o||!r)&&this.parseError.set(`incomplete`)}parseTypedText(t){let e=this.mode(),n=this.settings().rangeSeparator,o=this.modeInfo();if(o.selection===`range`){let r=t.split(n).map(g=>g.trim());if(r.length<2)return null;let a=this.parseSingleDate(r[0]),u=this.parseSingleDate(r[1]);return!a||!u?null:e===`range`?{start:a,end:u}:{start:a,end:u,kind:o.period??`month`}}if(e===`multiple`){let r=t.split(`,`).map(a=>this.parseSingleDate(a.trim()));return r.length&&r.every(a=>a!==null)?[...new Set(r)].sort():null}return this.parseSingleDate(t)}parseSingleDate(t){if(this.allowNaturalLanguage()){let o=SZ(t,{now:this.clock.now(),timeZone:this.settings().timeZone,locale:this.settings().locale,calendar:this.adapter(),weekStartsOn:this.settings().weekStartsOn});if(o.value)return this.modeInfo().period===`week`?Jo(o.value,`week`,this.settings().weekStartsOn).start:o.value}let e={locale:this.settings().locale,calendar:this.adapter()};if(this.modeInfo().period===`week`){let o=t.split(this.settings().rangeSeparator),r=o.length===2?QQ(o[1].trim(),`dd MMM yyyy`,e).value:null,a=r?Jo(r,`week`,this.settings().weekStartsOn).start:null;if(a&&this.formatEndpoint(a)===t.trim())return a}let n=this.parseFormats().length?this.parseFormats():this.modeInfo().period?[this.patternForMode(this.modeInfo().period),this.settings().dateFormat]:[this.settings().dateFormat,`yyyy-MM-dd`];for(let o of n){let r=QQ(t,o,e);if(r.value)return this.modeInfo().period===`week`?Jo(r.value,`week`,this.settings().weekStartsOn).start:r.value}return null}async runResolver(t){let e=this.resolver();if(!e||this.availability())return;let n=++this.resolverToken,o=`${t.calendar}|${t.locale}|${t.timeZone}`;o!==this.resolverContext&&this.availabilityState.set(void 0),this.resolverContext=o,this.availabilityState.set({dates:this.availabilityState()?.dates??[],loading:!0,revision:t.revision});try{let r=await e(t);if(n!==this.resolverToken)return;this.availabilityState.set({dates:ua(this.availabilityState()?.dates,r?.dates??[],t),loading:!1,revision:t.revision,retryable:!0})}catch{if(n!==this.resolverToken)return;this.availabilityState.set({dates:this.availabilityState()?.dates??[],loading:!1,error:this.loadErrorMessage(),retryable:!0,revision:t.revision})}}static ɵfac=function(e){return new(e||i)};static ɵcmp=Fr$1({type:i,selectors:[[`bx-date-picker`]],viewQuery:function(e,n){e&1&&Yy(n.panelTemplate,jc,5),e&2&&fb()},inputs:{mode:[1,`mode`],pickerIconTemplate:[1,`pickerIconTemplate`],pickerIcon:[1,`pickerIcon`],openPickerLabel:[1,`openPickerLabel`],startAt:[1,`startAt`],startView:[1,`startView`],parseFormats:[1,`parseFormats`],locale:[1,`locale`],calendarId:[1,`calendarId`],timeZone:[1,`timeZone`],weekStartsOn:[1,`weekStartsOn`],minimalDaysInFirstWeek:[1,`minimalDaysInFirstWeek`],dateFormat:[1,`dateFormat`],allowNaturalLanguage:[1,`allowNaturalLanguage`],editable:[1,`editable`],presentation:[1,`presentation`],weekdayNameFormat:[1,`weekdayNameFormat`],monthNameFormat:[1,`monthNameFormat`],months:[1,`months`],separateFields:[1,`separateFields`],commitPolicy:[1,`commitPolicy`],closeOnSelect:[1,`closeOnSelect`],clearable:[1,`clearable`],presets:[1,`presets`],presetsPlacement:[1,`presetsPlacement`],min:[1,`min`],max:[1,`max`],disabledDates:[1,`disabledDates`],disabledIntervals:[1,`disabledIntervals`],disabledWeekdays:[1,`disabledWeekdays`],dateFilter:[1,`dateFilter`],crossingPolicy:[1,`crossingPolicy`],minRangeLength:[1,`minRangeLength`],maxRangeLength:[1,`maxRangeLength`],allowSameDay:[1,`allowSameDay`],selectionLimit:[1,`selectionLimit`],availability:[1,`availability`],resolver:[1,`resolver`],loadingLabel:[1,`loadingLabel`],retryLabel:[1,`retryLabel`],loadErrorMessage:[1,`loadErrorMessage`],invalidSelectionLabel:[1,`invalidSelectionLabel`],applyLabel:[1,`applyLabel`],cancelLabel:[1,`cancelLabel`],clearLabel:[1,`clearLabel`],todayLabel:[1,`todayLabel`],presetsLabel:[1,`presetsLabel`],showToday:[1,`showToday`],showTodayButton:[1,`showTodayButton`],startLabel:[1,`startLabel`],endLabel:[1,`endLabel`],moreDatesLabel:[1,`moreDatesLabel`],selectedDatesLabel:[1,`selectedDatesLabel`],clearTooltip:[1,`clearTooltip`],visibleTagCount:[1,`visibleTagCount`],tagConfig:[1,`tagConfig`],overflowTagConfig:[1,`overflowTagConfig`],dayTemplate:[1,`dayTemplate`]},outputs:{viewChange:`viewChange`,monthSelected:`monthSelected`,yearSelected:`yearSelected`,valueCommit:`valueCommit`,draftChange:`draftChange`,openChange:`openChange`,visibleRangeChange:`visibleRangeChange`,request:`request`,retry:`retry`,parseFailed:`parseFailed`},features:[yt],ngContentSelectors:Gc,decls:14,vars:21,consts:[[`retryAction`,``],[`panelTemplate`,``],[`trigger`,``],[3,`control`,`inline`,`tooltip`,`showLoadingIndicator`,`hint`,`hintEnd`,`error`,`subscriptSizing`,`forId`],[1,`bx-date-field`,3,`focusin`,`focusout`],[`role`,`group`,1,`bx-date-range-fields`],[`bxSurface`,``,1,`bx-date-trigger`,`is-editable`,`is-range`,3,`has-label`,`is-open`,`is-floating`,`is-invalid`,`is-outline`,`is-readonly`,`is-disabled`,`is-keyboard-focused`],[`bxSurface`,``,1,`bx-date-trigger`,`is-editable`,3,`has-label`,`is-open`,`is-floating`,`is-invalid`,`is-outline`,`is-readonly`,`is-disabled`,`is-keyboard-focused`],[`type`,`button`,`bxSurface`,``,1,`bx-date-trigger`,3,`has-label`,`is-open`,`is-floating`,`is-invalid`,`is-outline`,`is-readonly`,`is-disabled`,`is-keyboard-focused`,`id`,`disabled`],[`bx-button`,``,`type`,`button`,`variant`,`text`,1,`bx-date-clear`,3,`surfaceEffects`,`disabled`,`bxTooltip`],[3,`dismiss`,`panelId`,`panelWidth`,`open`,`presentation`,`origin`,`content`,`ariaLabel`,`panelClass`],[`bxSurface`,``,1,`bx-date-trigger`,`is-range-endpoint`,`has-label`,3,`is-open`,`is-floating`,`is-invalid`,`is-outline`,`is-readonly`,`is-disabled`,`is-keyboard-focused`],[`bxSurface`,``,1,`bx-date-trigger`,`is-range-endpoint`,`has-label`],[1,`bx-floating-label`],[`aria-hidden`,`true`,1,`bx-field-required`],[`role`,`combobox`,`aria-autocomplete`,`none`,`aria-haspopup`,`dialog`,`type`,`text`,`autocomplete`,`off`,1,`bx-date-input`,3,`id`,`value`,`disabled`,`readOnly`],[`type`,`button`,`aria-haspopup`,`dialog`,1,`bx-date-endpoint-value`,`bx-date-value`,3,`id`,`disabled`],[`type`,`button`,1,`bx-date-trigger-icon-button`,3,`click`,`disabled`],[`size`,`16`,3,`name`,`contentTemplate`,`decorative`],[`role`,`combobox`,`aria-autocomplete`,`none`,`aria-haspopup`,`dialog`,`type`,`text`,`autocomplete`,`off`,1,`bx-date-input`,3,`input`,`blur`,`keydown`,`keydown.escape`,`id`,`value`,`disabled`,`readOnly`],[`type`,`button`,`aria-haspopup`,`dialog`,1,`bx-date-endpoint-value`,`bx-date-value`,3,`click`,`keydown.escape`,`id`,`disabled`],[`bxSurface`,``,1,`bx-date-trigger`,`is-editable`,`is-range`],[`role`,`combobox`,`aria-autocomplete`,`none`,`type`,`text`,`autocomplete`,`off`,1,`bx-date-input`,3,`input`,`blur`,`keydown`,`keydown.escape`,`value`,`id`,`disabled`,`readOnly`],[`aria-hidden`,`true`,1,`bx-date-range-separator`],[`role`,`combobox`,`aria-autocomplete`,`none`,`type`,`text`,`autocomplete`,`off`,1,`bx-date-input`,3,`input`,`blur`,`keydown`,`keydown.escape`,`value`,`disabled`,`readOnly`],[`aria-hidden`,`true`,3,`value`],[3,`size`,`decorative`],[`bxSurface`,``,1,`bx-date-trigger`,`is-editable`],[`role`,`combobox`,`aria-autocomplete`,`none`,`type`,`text`,`autocomplete`,`off`,1,`bx-date-input`,3,`input`,`blur`,`keydown`,`keydown.escape`,`id`,`value`,`disabled`,`readOnly`],[`type`,`button`,`bxSurface`,``,1,`bx-date-trigger`,3,`click`,`keydown.arrowdown`,`keydown.escape`,`blur`,`id`,`disabled`],[1,`bx-date-value`],[1,`bx-selected-tags`],[`bxTruncate`,``,3,`bxTooltip`],[`aria-hidden`,`true`,1,`bx-date-trigger-icon`,3,`value`],[3,`text`,`config`,`focusable`,`tooltipOnTruncate`],[1,`bx-overflow-tag`,3,`text`,`config`,`tooltip`,`focusable`,`tooltipOnTruncate`],[`bx-button`,``,`type`,`button`,`variant`,`text`,1,`bx-date-clear`,3,`click`,`surfaceEffects`,`disabled`,`bxTooltip`],[`name`,`x`,`size`,`16`,3,`decorative`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`accent`,3,`click`],[`name`,`rotate-cw`,`size`,`16`,3,`decorative`],[`bxSurface`,``,`data-bx-surface`,`glass`,1,`bx-date-panel-content`,3,`bxSurfaceInteractive`],[1,`bx-date-panel-body`],[1,`bx-date-presets`],[1,`bx-date-calendar-column`],[3,`visibleRangeChange`,`viewChange`,`monthSelected`,`yearSelected`,`rangeStart`,`valueChange`,`selectionRejected`,`requestAvailability`,`retryAvailability`,`startView`,`mode`,`value`,`viewDate`,`months`,`retryTemplate`,`weekdayNameFormat`,`monthNameFormat`,`locale`,`calendarId`,`timeZone`,`weekStartsOn`,`minimalDaysInFirstWeek`,`min`,`max`,`disabledDates`,`disabledIntervals`,`disabledWeekdays`,`dateFilter`,`crossingPolicy`,`minRangeLength`,`maxRangeLength`,`allowSameDay`,`selectionLimit`,`readOnly`,`availability`,`dayTemplate`,`showToday`,`showTodayButton`,`todayLabel`,`loadingLabel`,`retryLabel`],[3,`presetSelect`,`presets`,`context`,`activeValue`,`horizontal`,`ariaLabel`]],template:function(e,n){if(e&1&&(ld$1($c),bo(0,`bx-form-field`,3)(1,`div`,4),br$1(`focusin`,function(){return n.onFieldFocus()})(`focusout`,function(r){return n.onFieldBlur(r)}),od$1(2,eu,3,2,`div`,5)(3,au,9,48,`div`,6)(4,pu,6,34,`div`,7)(5,_u,8,33,`button`,8),od$1(6,Cu,2,5,`button`,9),Go(),bo(7,`bx-picker-surface`,10),br$1(`dismiss`,function(){return n.cancel()}),Go(),rd$1(8,Mu,3,2,`ng-template`,null,0,RA)(10,Tu,6,37,`ng-template`,null,1,RA),dd$1(12,0,Kc),dd$1(13,1,Zc),Go()),e&2){let o=FT(11);xo(`control`,n.fieldControl)(`inline`,!0)(`tooltip`,n.tooltip())(`showLoadingIndicator`,!1)(`hint`,n.hint())(`hintEnd`,n.hintEnd())(`error`,n.parseError()?n.resolvedInvalidLabel():n.error())(`subscriptSizing`,n.resolvedSubscriptSizing())(`forId`,n.controlId()),Xl$1(),tr(`has-clear`,n.showClear()),Xl$1(),nd$1(n.rangeFieldLayout()===`separate`?2:n.editable()&&n.isRangeMode()&&!n.modeInfo().isPeriod?3:n.editable()&&!n.isRangeMode()&&n.mode()!==`multiple`?4:5),Xl$1(4),nd$1(n.showClear()?6:-1),Xl$1(),xo(`panelId`,n.controlId()+`-panel`)(`panelWidth`,n.panelWidth())(`open`,n.isOpen())(`presentation`,n.surfacePresentation())(`origin`,n.panelOrigin())(`content`,o)(`ariaLabel`,n.resolvedLabel()||n.resolvedDatePlaceholder())(`panelClass`,n.panelClass())}},dependencies:[Wu$1,GC,xe,gl$1,ii,ne,ZC,Et$1,Wt,Fs$1,Pt,ct],styles:[`
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
}`]})};var ba=(i,t)=>t.value+`-`+i;function Iu(i,t){if(i&1){let e=pb();bo(0,`button`,11),br$1(`mousedown`,function(o){return o.preventDefault()})(`click`,function(o){let r=al$1(e).$index,a=Wo();return cl$2(a.onOptionClick(r,o))}),lA(1),Go()}if(i&2){let e=t.$implicit,n=t.$index,o=Wo();ka$1(`height`,o.itemHeight(),`px`),tr(`is-selected`,o.isSelectedAt(n))(`is-disabled`,e.disabled),xo(`id`,o.wheelId+`-`+n),vo(`aria-hidden`,o.loopOffset()>0&&(n<o.loopOffset()||n>=o.loopOffset()*2)?!0:null)(`aria-selected`,o.isSelectedAt(n))(`aria-disabled`,e.disabled),Xl$1(),mb(` `,e.label,` `)}}function Du(i,t){if(i&1&&(bo(0,`span`,12),lA(1),Go()),i&2){let e=t.$implicit,n=t.$index,o=Wo();ka$1(`height`,o.itemHeight(),`px`),tr(`is-selected`,o.isSelectedAt(n))(`is-disabled`,e.disabled),Xl$1(),ik(e.label)}}var oi=class i{i18n=b(VQ,{optional:!0});bxA11yService=b(Br$1);destroyRef=b(ge);position=$(0);dragging=$(!1);wheelId=`bx-time-wheel-${qK()}`;resolvedLabel=G(()=>LQ(this.label(),this.i18n));logicalIndex=G(()=>{let t=this.options().findIndex(e=>e.value===this.value());return t<0?0:t});displayOptions=G(()=>{let t=this.options();return!this.loop()||t.length<2?t:[...t,...t,...t]});loopOffset=G(()=>this.loop()&&this.options().length>1?this.options().length:0);centerOffset=G(()=>(this.visibleItems()-1)/2*this.itemHeight());viewportHeight=G(()=>this.visibleItems()*this.itemHeight());trackTransform=G(()=>`translateY(${this.centerOffset()-this.position()*this.itemHeight()}px)`);lensTransform=G(()=>`translateY(${-this.position()*this.itemHeight()}px)`);options=ee.required();value=_z(null);label=ee(`Time`);type=ee(`minute`);loop=ee(!0,{transform:Ye});disabled=ee(!1,{transform:Ye});itemHeight=ee(40);visibleItems=ee(5);activated=Pk();cancelGesture;motion;wheelTimer;wheelVelocity;wheelOptions;wheelCoordinate=0;motionPosition=0;motionVelocity=0;committedIndex=null;initialized=!1;constructor(){We$1(()=>{let t=this.logicalIndex(),e=this.bxA11yService.isReducedMotion();if(!this.dragging()){if(this.committedIndex===t&&!e){this.committedIndex=null;return}this.animateTo(this.targetPhysicalIndex(t),!this.initialized),this.initialized=!0}}),this.destroyRef.onDestroy(()=>{this.cancelGesture?.(),clearTimeout(this.wheelTimer),this.motion?.destroy()})}step(t){if(this.disabled())return;this.cancelWheel();let e=this.options(),n=e.length;if(!n)return;let o=this.logicalIndex()+t,r=0;for(this.loop()?o=(o%n+n)%n:o=Math.max(0,Math.min(n-1,o));e[o]?.disabled&&r<n;)o=this.loop()?((o+Math.sign(t||1))%n+n)%n:Math.max(0,Math.min(n-1,o+Math.sign(t||1))),r+=1;this.commitIndex(o)}onOptionClick(t,e){this.disabled()||e.detail>0||this.commitIndex(this.wrapIndex(t))}isSelectedAt(t){return this.wrapIndex(t)===this.logicalIndex()}onKeydown(t){if(t.key===`Escape`&&(this.cancelGesture||this.wheelTimer)){t.preventDefault(),t.stopPropagation(),this.cancelGesture?.(),this.cancelWheel();return}if(this.disabled())return;let e=Math.max(1,Math.round(this.visibleItems()/2));if(t.key===`ArrowUp`)this.step(-1);else if(t.key===`ArrowDown`)this.step(1);else if(t.key===`PageUp`)this.step(-e);else if(t.key===`PageDown`)this.step(e);else if(t.key===`Home`)this.commitIndex(0);else if(t.key===`End`)this.commitIndex(this.options().length-1);else if(t.key===`Enter`||t.key===` `)this.activated.emit(this.value()??``);else return;t.preventDefault()}onWheel(t){if(this.disabled()||!this.options().length||t.ctrlKey||Math.abs(t.deltaX)>Math.abs(t.deltaY))return;t.preventDefault(),t.stopPropagation(),this.wheelTimer||(this.cancelGesture?.(),this.motion?.destroy(),this.motion=void 0,this.wheelOptions=this.options(),this.wheelCoordinate=0,this.wheelVelocity=new Ah(0,t.timeStamp),this.dragging.set(!0));let e=t.deltaY*(t.deltaMode===1?this.itemHeight():t.deltaMode===2?this.viewportHeight():1);this.wheelCoordinate+=e,this.wheelVelocity?.update(this.wheelCoordinate,t.timeStamp),this.position.set(this.constrainPosition(this.position()+e/this.itemHeight())),clearTimeout(this.wheelTimer),this.wheelTimer=setTimeout(()=>{let n=(this.wheelVelocity?.velocity(performance.now())??0)/this.itemHeight(),o=this.disabled()||this.options()!==this.wheelOptions;if(this.wheelTimer=void 0,this.wheelVelocity=void 0,this.wheelOptions=void 0,this.dragging.set(!1),o){this.animateTo(this.targetPhysicalIndex(this.logicalIndex()),!1);return}this.settlePosition(this.position(),n)},80)}onPointerDown(t){if(!t.isPrimary||t.button!==0||this.disabled()||!this.options().length)return;let e=t.currentTarget;if(!(e instanceof HTMLElement))return;this.cancelGesture?.(),this.cancelWheel();let n=this.options(),o=t.clientY,r=this.position(),a=new Ah(t.clientY,t.timeStamp),u=t.pointerId,g=!1;this.motion?.destroy(),this.motion=void 0,this.dragging.set(!0),e.setPointerCapture(u);let S=z=>{if(z.pointerId!==u)return;a.update(z.clientY,z.timeStamp),Math.abs(z.clientY-o)>4&&(g=!0),z.preventDefault();let U=r+(o-z.clientY)/this.itemHeight(),Y=this.constrainPosition(U);this.loop()&&(r+=Y-U),this.position.set(Y)},P=()=>{u=-1,e.removeEventListener(`pointermove`,S),e.removeEventListener(`pointerup`,O),e.removeEventListener(`pointercancel`,E),e.removeEventListener(`lostpointercapture`,E),this.cancelGesture=void 0,this.dragging.set(!1),e.hasPointerCapture(t.pointerId)&&e.releasePointerCapture(t.pointerId)},O=z=>{if(z.pointerId!==u)return;if(this.disabled()||this.options()!==n){E();return}let U=-a.velocity(z.timeStamp)/this.itemHeight(),Y=this.position(),F=e.getBoundingClientRect(),ee=Y+(z.clientY-(F.top+F.height/2))/this.itemHeight();if(P(),!g&&this.options()[this.wrapIndex(ee)]?.disabled){this.animateTo(this.targetPhysicalIndex(this.logicalIndex()),!1);return}this.settlePosition(g?Y:ee,g?U:0)},E=()=>{P(),this.animateTo(this.targetPhysicalIndex(this.logicalIndex()),!1)};this.cancelGesture=E,e.addEventListener(`pointermove`,S,{passive:!1}),e.addEventListener(`pointerup`,O),e.addEventListener(`pointercancel`,E),e.addEventListener(`lostpointercapture`,E)}commitIndex(t,e,n){let o=this.options()[t];!o||o.disabled||(this.committedIndex=t,this.animateTo(n??this.targetPhysicalIndex(t),!1,e),this.value.set(o.value),this.activated.emit(o.value))}animateTo(t,e,n){if(e||this.bxA11yService.isReducedMotion()){this.motion?.destroy(),this.motion=void 0,this.position.set(this.recenterValue(t));return}this.motion||(this.motion=Zn$1([this.position()],([o],[r])=>{this.motionPosition=o,this.motionVelocity=r,this.position.set(this.recenterValue(o))},vr$1.soft),this.motion.track([this.position()],[n??0])),n!==void 0&&this.motion.track([this.position()],[n]),this.motion.retarget([t],!1)}targetPhysicalIndex(t){if(!this.loop())return t;let e=this.options().length,n=this.loopOffset(),o=this.recenterValue(this.position());(this.motionPosition!==o||o!==this.position())&&(this.motion?.track([o],[this.motionVelocity]),this.position.set(o));let r=n+t,a=r;for(let u of[r-e,r+e])Math.abs(o-u)<Math.abs(o-a)&&(a=u);return a}recenterValue(t){let e=this.options().length;if(!this.loop()||e<2)return t;let n=this.loopOffset();return t>=n+e||t<n?n+((t-n)%e+e)%e:t}nearestEnabledPosition(t,e){let n=this.options().length,o=Math.round(t);for(let r=0;r<n;r++){let a=r===0?[o]:[o+r*(e||1),o-r*(e||1)];for(let u of a){let g=this.wrapIndex(u);if(!this.options()[g]?.disabled)return this.loop()?u:g}}return null}wrapIndex(t){let e=this.options().length;if(!e)return 0;let n=this.loopOffset();return this.loop()?((Math.round(t)-n)%e+e)%e:Math.max(0,Math.min(e-1,Math.round(t)-n))}constrainPosition(t){if(this.loop())return this.recenterValue(t);let e=Math.max(0,this.options().length-1),n=t<0?0:e;if(t>=0&&t<=e)return t;let o=t-n;return n+o/(1+Math.abs(o))*.75}settlePosition(t,e){let n=Math.min(12,Math.max(0,this.options().length-1)),o=t+Math.max(-n,Math.min(n,e*.24)),r=this.nearestEnabledPosition(o,Math.sign(e));r!==null?this.commitIndex(this.wrapIndex(r),e,r):this.animateTo(this.targetPhysicalIndex(this.logicalIndex()),!1)}cancelWheel(){this.wheelTimer&&(clearTimeout(this.wheelTimer),this.wheelTimer=void 0,this.wheelVelocity=void 0,this.wheelOptions=void 0,this.dragging.set(!1),this.animateTo(this.targetPhysicalIndex(this.logicalIndex()),!1))}static ɵfac=function(e){return new(e||i)};static ɵcmp=Fr$1({type:i,selectors:[[`bx-time-wheel`]],inputs:{options:[1,`options`],value:[1,`value`],label:[1,`label`],type:[1,`type`],loop:[1,`loop`],disabled:[1,`disabled`],itemHeight:[1,`itemHeight`],visibleItems:[1,`visibleItems`]},outputs:{value:`valueChange`,activated:`activated`},decls:13,vars:23,consts:[[`viewport`,``],[1,`bx-wheel`],[`role`,`listbox`,`tabindex`,`0`,1,`bx-wheel-viewport`,3,`keydown`,`wheel`,`pointerdown`],[1,`bx-wheel-base`],[1,`bx-wheel-track`],[`type`,`button`,`role`,`option`,`tabindex`,`-1`,1,`bx-wheel-option`,3,`id`,`is-selected`,`is-disabled`,`height`],[`aria-hidden`,`true`,`inert`,``,1,`bx-wheel-magnifier`],[1,`bx-wheel-lens-content`],[1,`bx-wheel-lens-track`],[1,`bx-wheel-lens-option`,3,`is-selected`,`is-disabled`,`height`],[`bxSurface`,``,`data-bx-surface`,`glass`,`bxSurfaceGlassiness`,`auto`,`bxSurfaceQuality`,`auto`,`bxSurfaceLocalRefraction`,``,`aria-hidden`,`true`,1,`bx-wheel-band`,3,`bxSurfaceInteractive`,`bxSurfaceEmission`],[`type`,`button`,`role`,`option`,`tabindex`,`-1`,1,`bx-wheel-option`,3,`mousedown`,`click`,`id`],[1,`bx-wheel-lens-option`]],template:function(e,n){e&1&&(bo(0,`div`,1)(1,`div`,2,0),br$1(`keydown`,function(r){return n.onKeydown(r)})(`wheel`,function(r){return n.onWheel(r)})(`pointerdown`,function(r){return n.onPointerDown(r)}),bo(3,`div`,3)(4,`div`,4),ab(5,Iu,2,11,`button`,5,ba),Go()(),bo(7,`div`,6)(8,`div`,7)(9,`div`,8),ab(10,Du,2,7,`span`,9,ba),Go()()(),sd$1(12,`div`,10),Go()()),e&2&&(ka$1(`--%NS%bx-wheel-item-height`,n.itemHeight(),`px`)(`--%NS%bx-wheel-center-offset`,n.centerOffset(),`px`),tr(`is-dragging`,n.dragging())(`is-disabled`,n.disabled()),Xl$1(),ka$1(`height`,n.viewportHeight(),`px`),vo(`aria-label`,n.resolvedLabel())(`aria-activedescendant`,n.options().length?n.wheelId+`-`+(n.loopOffset()+n.logicalIndex()):null)(`aria-disabled`,n.disabled()),Xl$1(3),ka$1(`transform`,n.trackTransform()),Xl$1(),cb(n.displayOptions()),Xl$1(2),ka$1(`height`,n.itemHeight(),`px`),Xl$1(2),ka$1(`transform`,n.lensTransform()),Xl$1(),cb(n.displayOptions()),Xl$1(2),ka$1(`height`,n.itemHeight(),`px`),xo(`bxSurfaceInteractive`,!1)(`bxSurfaceEmission`,!1))},dependencies:[GC],styles:[`
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
}`]})};var ma={timeFormat:({params:i})=>`Enter a time in the ${i.format} format.`,timeRange:({params:i})=>i.hourCycle===12?`Use an hour from 1 to 12 with AM or PM, and minutes and seconds from 00 to 59.`:`Use an hour from 00 to 23, and minutes and seconds from 00 to 59.`,timeMin:({params:i})=>`The time cannot be before ${i.minFormatted}.`,timeMax:({params:i})=>`The time cannot be after ${i.maxFormatted}.`,timeDisabled:`This time is unavailable. Choose another time.`,timeAvailability:`This time has not been confirmed as available. Retry loading the available times.`,timeLoading:`Wait for the available times to finish loading.`,timeStep:({params:i})=>`Use increments of ${i.minuteStep} minutes, ${i.secondStep} seconds and ${i.millisecondStep} milliseconds.`};function sn(i){return String(i).padStart(2,`0`)}function ga(i){let t=i<0?`-`:`+`,e=Math.abs(i);return`GMT${t}${sn(Math.floor(e/60))}:${sn(e%60)}`}function ha(i,t){let e=Math.max(1,t)*60;if(i===void 0)return e;if(typeof i==`number`)return Number.isFinite(i)&&i>0?i*60:e;let n=/^\s*(\d+(?:\.\d+)?)\s*(h|hours?|m|mins?|minutes?|s|seconds?)?\s*$/i.exec(i);if(!n||Number(n[1])<=0)return e;let o=n[2]?.toLowerCase()??`m`,r=o.startsWith(`h`)?3600:o.startsWith(`s`)?1:60;return Number(n[1])*r}var Eu=[`listViewport`];var Ru=[`collection`];var Lu=[`panelTemplate`];var Au=[[[`bx-error`]],[[`bx-hint`]]];var Fu=[`bx-error`,`bx-hint`];var Vu=[`ngProjectAs`,`bx-error`,5,[`bx-error`]];var zu=[`ngProjectAs`,`bx-hint`,5,[`bx-hint`]];function Bu(i,t){i&1&&(bo(0,`span`,12),lA(1,`*`),Go())}function Hu(i,t){if(i&1&&(bo(0,`label`,6),lA(1),od$1(2,Bu,2,0,`span`,12),Go()),i&2){let e=Wo();vo(`for`,e.controlId()),Xl$1(),mb(``,e.resolvedLabel(),` `),Xl$1(),nd$1(e.effectiveRequired()&&!e.resolvedHideRequiredMarker()?2:-1)}}function Wu(i,t){i&1&&sd$1(0,`bx-loading-spinner`,13),i&2&&xo(`size`,16)(`decorative`,!0)}function qu(i,t){if(i&1&&sd$1(0,`bx-icon`,14),i&2){let e=Wo(2);xo(`name`,e.pickerIcon())(`contentTemplate`,e.pickerIconTemplate())(`decorative`,!0)}}function ju(i,t){if(i&1&&od$1(0,Wu,1,2,`bx-loading-spinner`,13)(1,qu,1,3,`bx-icon`,14),i&2){let e=t.$implicit;nd$1(e?0:1)}}function $u(i,t){if(i&1){let e=pb();bo(0,`button`,15),br$1(`click`,function(){al$1(e);let o=Wo();return cl$2(o.clear())}),sd$1(1,`bx-icon`,16),Go()}if(i&2){let e=Wo();xo(`surfaceEffects`,!1)(`disabled`,e.effectiveDisabled())(`bxTooltip`,e.resolvedClearTooltip()),vo(`aria-label`,e.resolvedClearLabel()),Xl$1(),xo(`decorative`,!0)}}function Gu(i,t){if(i&1){let e=pb();bo(0,`span`,27),lA(1,`:`),Go(),bo(2,`bx-time-wheel`,30),br$1(`valueChange`,function(o){al$1(e);let r=Wo(3);return cl$2(r.onWheelChange(`second`,o))}),Go()}if(i&2){let e=Wo(3);Xl$1(2),xo(`options`,e.wheelColumns().seconds)(`value`,e.wheelValue(`second`))(`label`,e.resolvedSecondLabel())(`loop`,e.loopColumns())}}function Ku(i,t){if(i&1){let e=pb();bo(0,`span`,27),lA(1,`.`),Go(),bo(2,`bx-time-wheel`,31),br$1(`valueChange`,function(o){al$1(e);let r=Wo(3);return cl$2(r.onWheelChange(`millisecond`,o))}),Go()}if(i&2){let e=Wo(3);Xl$1(2),xo(`options`,e.wheelColumns().milliseconds)(`value`,e.wheelValue(`millisecond`))(`label`,e.resolvedMillisecondLabel())(`loop`,e.loopColumns())}}function Zu(i,t){if(i&1){let e=pb();bo(0,`bx-time-wheel`,32),br$1(`valueChange`,function(o){al$1(e);let r=Wo(3);return cl$2(r.onWheelChange(`period`,o))}),Go()}if(i&2){let e=Wo(3);xo(`options`,e.wheelColumns().periods)(`value`,e.wheelValue(`period`))(`label`,e.resolvedPeriodLabel())(`loop`,!1)}}function Xu(i,t){if(i&1){let e=pb();bo(0,`div`,21)(1,`bx-time-wheel`,26),br$1(`valueChange`,function(o){al$1(e);let r=Wo(2);return cl$2(r.onWheelChange(`hour`,o))}),Go(),bo(2,`span`,27),lA(3,`:`),Go(),bo(4,`bx-time-wheel`,28),br$1(`valueChange`,function(o){al$1(e);let r=Wo(2);return cl$2(r.onWheelChange(`minute`,o))}),Go(),od$1(5,Gu,3,4),od$1(6,Ku,3,4),od$1(7,Zu,1,4,`bx-time-wheel`,29),Go()}if(i&2){let e=Wo(2);Xl$1(),xo(`options`,e.wheelColumns().hours)(`value`,e.wheelValue(`hour`))(`label`,e.resolvedHourLabel())(`loop`,e.loopColumns()),Xl$1(3),xo(`options`,e.wheelColumns().minutes)(`value`,e.wheelValue(`minute`))(`label`,e.resolvedMinuteLabel())(`loop`,e.loopColumns()),Xl$1(),nd$1(e.showSeconds()?5:-1),Xl$1(),nd$1(e.showMilliseconds()?6:-1),Xl$1(),nd$1(e.showPeriod()?7:-1)}}function Uu(i,t){i&1&&sd$1(0,`bx-icon`,37),i&2&&xo(`decorative`,!0)}function Yu(i,t){if(i&1){let e=pb();bo(0,`button`,36),br$1(`click`,function(){let o=al$1(e).$implicit,r=Wo(3);return cl$2(r.onListSelect(o.value))}),bo(1,`span`),lA(2),Go(),od$1(3,Uu,1,1,`bx-icon`,37),Go()}if(i&2){let e=t.$implicit,n=t.index,o=t.count,r=Wo(3);tr(`is-selected`,r.internalValue()===e.value)(`is-active`,r.listFocusValue()===e.value),xo(`id`,r.controlId()+`-`+e.value)(`disabled`,e.disabled),vo(`aria-posinset`,n+1)(`aria-setsize`,o)(`aria-selected`,r.internalValue()===e.value)(`aria-disabled`,e.disabled)(`data-time-value`,e.value),Xl$1(2),ik(e.label),Xl$1(),nd$1(r.internalValue()===e.value?3:-1)}}function Qu(i,t){if(i&1){let e=pb();bo(0,`div`,33,1),br$1(`keydown`,function(o){al$1(e);let r=FT(3),a=Wo(2);return cl$2(a.onListKeydown(o,r))}),bo(2,`bx-virtual-collection`,34,2),rd$1(4,Yu,4,13,`ng-template`,35),Go()()}if(i&2){let e=FT(1),n=FT(3),o=Wo(2);vo(`aria-activedescendant`,o.listActiveId())(`aria-label`,o.resolvedLabel()||o.resolvedOpenPickerLabel()),Xl$1(2),xo(`items`,o.listOptions())(`trackBy`,o.listTrackBy)(`config`,o.listConfig)(`scrollContainer`,e),vo(`role`,`presentation`),Xl$1(2),xo(`bxVirtualItem`,n)}}function Ju(i,t){if(i&1&&sd$1(0,`bx-loading-indicator`,38),i&2){let e=Wo(3);xo(`size`,20)(`label`,e.resolvedLoadingLabel())}}function ep(i,t){if(i&1){let e=pb();bo(0,`button`,42),br$1(`click`,function(){al$1(e);let o=Wo(4);return cl$2(o.retrySlots())}),sd$1(1,`bx-icon`,43),lA(2),Go()}if(i&2){let e=Wo(4);Xl$1(),xo(`decorative`,!0),Xl$1(),mb(``,e.resolvedRetryLabel(),` `)}}function tp(i,t){if(i&1&&(bo(0,`div`,40),lA(1),Go(),od$1(2,ep,3,2,`button`,41)),i&2){let e=Wo(3);Xl$1(),ik(e.availabilityError()),Xl$1(),nd$1(e.availabilityForPanel()?.retryable!==!1?2:-1)}}function np(i,t){if(i&1&&(bo(0,`span`,39),lA(1),Go()),i&2){let e=Wo(3);Xl$1(),ik(e.resolvedEmptyLabel())}}function ip(i,t){if(i&1&&(bo(0,`div`,23),od$1(1,Ju,1,2,`bx-loading-indicator`,38)(2,tp,3,2)(3,np,2,1,`span`,39),Go()),i&2){let e=Wo(2);Xl$1(),nd$1(e.availabilityLoading()?1:e.availabilityError()?2:3)}}function op(i,t){if(i&1){let e=pb();bo(0,`div`,24)(1,`button`,44),br$1(`click`,function(){al$1(e);let o=Wo(2);return cl$2(o.selectNow())}),lA(2),Go()()}if(i&2){let e=Wo(2);Xl$1(),xo(`disabled`,!e.canSelectNow()),Xl$1(),ik(e.resolvedNowLabel())}}function rp(i,t){if(i&1){let e=pb();bo(0,`bx-select`,45),br$1(`valueChange`,function(o){al$1(e);let r=Wo(2);return cl$2(r.onTimeZoneSelect(o))}),Go()}if(i&2){let e=Wo(2);xo(`label`,e.resolvedTimeZoneLabel())(`options`,e.timeZoneOptions())(`value`,e.selectedTimeZone()??e.settings().timeZone)(`isSearchable`,!0)}}function ap(i,t){if(i&1&&(bo(0,`div`,17)(1,`div`,18)(2,`div`,19)(3,`div`,20),od$1(4,Xu,8,11,`div`,21)(5,Qu,5,8,`div`,22),Go(),od$1(6,ip,4,1,`div`,23),Go(),od$1(7,op,3,2,`div`,24),od$1(8,rp,1,4,`bx-select`,25),Go()()),i&2){let e=Wo();tr(`is-drawer`,e.isDrawer()),xo(`bxSurfaceInteractive`,!1),Xl$1(2),vo(`aria-busy`,e.availabilityLoading()),Xl$1(),vo(`inert`,e.panelFeedback()?``:null)(`aria-hidden`,e.panelFeedback()?!0:null),Xl$1(),nd$1(e.timePresentation()===`wheel`?4:5),Xl$1(2),nd$1(e.panelFeedback()?6:-1),Xl$1(),nd$1(e.resolvedNowLabel()?7:-1),Xl$1(),nd$1(e.showTimeZone()?8:-1)}}var fa=class i extends ve{injector=b(ie);bxA11yService=b(Br$1);ngZone=b(le);bxDateTimeConfigService=b(vC);clock=b(hC);i18n=b(VQ,{optional:!0});windowDimensionsService=b(Fd$1);originElement=$(null);availabilityState=$(void 0);selectedTimeZone=$(null);usesExternalAvailability=G(()=>this.availability()!==void 0);slotContext=G(()=>`${this.settings().locale}|${this.settings().timeZone}|${this.settings().precision}`);listViewport=Sz(`listViewport`);listCollection=Sz(`collection`);typedText=$(``);textEdited=$(!1);typedError=$(null);fieldFocused=$(!1);selectionEdited=$(!1);isOpen=$(!1);draftTime=$(`09:00`);listFocusValue=$(null);settings=G(()=>{let t=this.hourCycle();return this.bxDateTimeConfigService.resolve({locale:this.locale(),timeZone:this.selectedTimeZone()??this.timeZone()??void 0,hourCycle:t===`auto`?void 0:t,precision:this.precision(),minuteStep:this.minuteStep(),secondStep:this.secondStep(),millisecondStep:this.millisecondStep(),timeFormat:this.timeFormat(),showTimeZoneLabel:this.showTimeZone()})});surfacePresentation=G(()=>{let t=this.presentation();return t!==`auto`?t:this.windowDimensionsService.isMobile()?`drawer`:`popover`});isDrawer=G(()=>this.surfacePresentation()===`drawer`);displayValue=G(()=>this.formatValue(this.internalValue()));resolvedTimePlaceholder=G(()=>LQ(this.placeholder()??this.parseFormats()[0]??this.settings().timeFormat,this.i18n));resolvedOpenPickerLabel=G(()=>LQ(this.openPickerLabel(),this.i18n));resolvedClearTooltip=G(()=>LQ(this.clearTooltip()??this.clearLabel(),this.i18n));resolvedClearLabel=G(()=>LQ(this.clearLabel(),this.i18n));resolvedNowLabel=G(()=>LQ(this.nowLabel(),this.i18n));resolvedHourLabel=G(()=>LQ(this.hourLabel(),this.i18n));resolvedMinuteLabel=G(()=>LQ(this.minuteLabel(),this.i18n));resolvedSecondLabel=G(()=>LQ(this.secondLabel(),this.i18n));resolvedMillisecondLabel=G(()=>LQ(this.millisecondLabel(),this.i18n));resolvedPeriodLabel=G(()=>LQ(this.periodLabel(),this.i18n));resolvedTimeZoneLabel=G(()=>LQ(this.timeZoneLabel(),this.i18n));resolvedLoadingLabel=G(()=>LQ(this.loadingLabel(),this.i18n));resolvedRetryLabel=G(()=>LQ(this.retryLabel(),this.i18n));showClear=G(()=>this.clearable()&&(!!this.internalValue()||!!this.typedText())&&!this.isReadonly());isFloating=G(()=>this.fieldFocused()||this.keyboardFocused()||this.isOpen()||!!this.typedText()||!!this.displayValue()||this.resolvedFloatLabel()===`always`);timeZoneOptions=G(()=>sZ().map(t=>({value:t,label:this.timeZoneLabelFor(t),description:nZ(t,this.settings().locale).offsetMinutes===null?void 0:String(nZ(t,this.settings().locale).offsetMinutes)})));availabilityForPanel=G(()=>this.availability()??(this.resolver()?this.availabilityState():void 0));availabilityLoading=G(()=>this.availabilityForPanel()?.loading===!0);availabilityError=G(()=>LQ(this.availabilityForPanel()?.error,this.i18n));availabilityTimes=G(()=>this.availabilityForPanel()?.times??null);panelFeedback=G(()=>this.availabilityLoading()||!!this.availabilityError()||this.availabilityTimes()?.length===0||this.isListMode()&&!this.listOptions().length);listConfig={layout:`list`,estimatedRowHeight:40,overscan:160};listTrackBy=t=>t.value;listOptions=G(()=>{let t=this.options();if(t)return t.map(P=>({value:P.value,label:LQ(P.label,this.i18n)||QK(P.value,this.settings().timeFormat,this.settings().locale),disabled:!!P.disabled||!this.isTimeAllowed(P.value)}));let e=this.settings().precision===`hour`?3600:this.settings().precision===`minute`?60:1,n=Math.max(e,Math.ceil(ha(this.interval(),this.settings().minuteStep)/e)*e),o=this.min(),r=this.max(),a=o?Math.ceil(this.timeNumber(o)/1e3/e)*e:0,u=r?this.timeNumber(r)/1e3:86400-e,g=[],S=a;for(;S<=u;){let P=Math.round(S*1e3),O=Yr$1({hour:Math.floor(P/36e5),minute:Math.floor(P/6e4)%60,second:Math.floor(P/1e3)%60,millisecond:P%1e3},this.settings().precision);if(dJ(O,this.settings().minuteStep,this.settings().secondStep,this.settings().millisecondStep))break;S+=e}for(let P=S;P<=u;P+=n){let O=Math.round(P*1e3),E=Yr$1({hour:Math.floor(O/36e5),minute:Math.floor(O/6e4)%60,second:Math.floor(O/1e3)%60,millisecond:O%1e3},this.settings().precision);this.isTimeAllowed(E)&&g.push({value:E,label:QK(E,this.settings().timeFormat,this.settings().locale),disabled:!1})}return g});canSelectNow=G(()=>this.isTimeAllowed(this.normalizeTime(iZ(this.clock.now(),this.settings().timeZone,this.settings().precision))));canApply=G(()=>this.isDraftValid()&&!this.availabilityLoading()&&!this.availabilityError());wheelColumns=G(()=>this.buildColumnsFor(this.draftTime()));errorText=G(()=>{let t=this.typedError();return t?this.validationMessage(t===`range`?`timeRange`:`timeFormat`):this.selectionEdited()?this.validationError():``});panelOrigin=G(()=>this.originElement());panelTemplate=Sz(`panelTemplate`);options=ee(void 0);interval=ee(void 0);parseFormats=ee([]);pickerIconTemplate=ee(void 0);pickerIcon=ee(`clock`);openPickerLabel=ee(`Choose time`);timePresentation=ee(`wheel`);presentation=ee(`auto`);locale=ee(void 0);timeZone=ee(void 0);hourCycle=ee(`auto`);precision=ee(`minute`);minuteStep=ee(1);secondStep=ee(1);millisecondStep=ee(1);timeFormat=ee(void 0);loopColumns=ee(!0,{transform:Ye});min=ee(void 0);max=ee(void 0);disabledTimes=ee([]);disabledIntervals=ee([]);timeFilter=ee(void 0);commitPolicy=ee(`auto`);closeOnSelect=ee(void 0,{transform:t=>t==null?void 0:Ye(t)});clearable=ee(!0,{transform:Ye});showTimeZone=ee(!1,{transform:Ye});showTimeZoneLabel=ee(!0,{transform:Ye});availability=ee(void 0);resolver=ee(void 0);loadingLabel=ee(void 0);retryLabel=ee(`Retry request`);applyLabel=ee(`Apply`);cancelLabel=ee(`Cancel`);clearLabel=ee(`Clear selection`);nowLabel=ee(void 0);clearTooltip=ee(void 0);hourLabel=ee(`Hour`);minuteLabel=ee(`Minute`);secondLabel=ee(`Second`);millisecondLabel=ee(`Millisecond`);periodLabel=ee(`AM or PM`);timeZoneLabel=ee(`Time zone`);loadErrorMessage=ee(`Times could not be loaded.`);invalidSelectionLabel=ee(void 0);emptyLabel=ee(`No times available.`);errorWrap=ee(!1,{transform:Ye});valueCommit=Pk();openChange=Pk();timeZoneChange=Pk();slotRequest=Pk();slotRetry=Pk();listSelectionMotion;resolverToken=0;lastSlotContext=``;requestRevision=0;constructor(){super(),We$1(()=>{(this.effectiveDisabled()||this.isReadonly())&&this.close()}),We$1(()=>{let t=this.internalValue(),e=this.formatValue(t);this.textEdited()||this.typedText.set(e)}),We$1(()=>{let t=this.internalValue();t&&this.draftTime.set(this.normalizeTime(t))}),We$1(()=>{this.resolver(),this.usesExternalAvailability();let t=this.slotContext();de(()=>{let e=this.lastSlotContext;this.lastSlotContext=t,++this.resolverToken,this.availabilityState.set(void 0),this.isOpen()&&this.emitSlotRequest(e&&e.split(`|`)[1]!==t.split(`|`)[1]?`timezone`:`initial`)})}),We$1(()=>{let t=this.listCollection(),e=this.listOptions(),n=this.isOpen();t&&n&&e.length&&de(()=>{let o=this.internalValue()??this.draftTime(),r=e.find(a=>!a.disabled&&this.timeNumber(a.value)>=this.timeNumber(o))??e.find(a=>!a.disabled);this.listFocusValue.set(r?.value??null),r&&t.scrollToItem(r.value)})}),We$1(t=>{let e=this.listViewport()?.nativeElement;if(!e||!this.isOpen())return;let n=de(()=>this.ngZone.runOutsideAngular(()=>TR(e,{reducedMotion:this.bxA11yService.isReducedMotion()})));this.listSelectionMotion=n,t(()=>{n.destroy(),this.listSelectionMotion===n&&(this.listSelectionMotion=void 0)})}),We$1(()=>{let t=this.bxA11yService.isReducedMotion();this.listSelectionMotion?.update({reducedMotion:t})}),this.destroyRef.onDestroy(()=>++this.resolverToken)}reset(){let t=this.isOpen();this.isOpen.set(!1),super.reset(),this.clearPendingEdit(),this.fieldFocused.set(!1),t&&this.openChange.emit(!1)}open(){if(this.isOpen()||this.effectiveDisabled()||this.isReadonly())return;let t=(this.textEdited()?this.parseTypedTime(this.typedText()).value:null)??this.internalValue();this.draftTime.set(this.normalizeTime(t??iZ(this.clock.now(),this.settings().timeZone,this.settings().precision))),this.alignEmptyDraft(),this.selectedTimeZone.set(this.timeZone()??this.settings().timeZone),!this.textEdited()&&!this.typedError()&&this.selectionEdited.set(!1),this.originElement.set(this.nativeElement.querySelector(`.bx-time-field`)),this.textEdited()||this.typedText.set(this.formatValue(this.internalValue())),this.isOpen.set(!0),this.openChange.emit(!0),this.emitSlotRequest(`initial`),this.isDrawer()||this.focus({preventScroll:!0})}close(){this.isOpen()&&(this.isOpen.set(!1),this.markAsTouched(),this.openChange.emit(!1))}apply(){if(this.effectiveDisabled()||this.isReadonly()||!this.canApply())return;let t=this.composedValue();this.updateValue(t),this.valueCommit.emit(t),this.close()}cancel(){let t=this.internalValue();t&&this.draftTime.set(t),this.close()}clear(){this.effectiveDisabled()||this.isReadonly()||(this.selectionEdited.set(!1),this.textEdited.set(!1),this.typedError.set(null),this.typedText.set(``),this.updateValue(null),this.valueCommit.emit(null),this.close(),this.focus({preventScroll:!0}))}selectNow(){if(this.effectiveDisabled()||this.isReadonly())return;let t=this.normalizeTime(iZ(this.clock.now(),this.settings().timeZone,this.settings().precision));this.draftTime.set(t),this.maybeCommitImmediately()}reloadSlots(){this.effectiveDisabled()||this.isReadonly()||this.availabilityLoading()||(this.isOpen()?this.emitSlotRequest(`initial`):this.open())}retrySlots(){this.emitSlotRequest(`retry`)}clearPendingEdit(){super.clearPendingEdit(),this.textEdited.set(!1),this.typedError.set(null),this.selectionEdited.set(!1),this.typedText.set(this.formatValue(this.internalValue()))}onFieldFocus(){this.fieldFocused.set(!0)}onFieldBlur(t){t.relatedTarget instanceof Node&&this.nativeElement.contains(t.relatedTarget)||(this.fieldFocused.set(!1),this.markAsTouched())}onTypedInput(t){this.onTypedValue(t.target.value)}onTypedValue(t){this.typedText.set(t===null?``:String(t)),this.textEdited.set(!0),this.typedError.set(null);let e=this.parseTypedTime(this.typedText()).value;e&&this.draftTime.set(e)}onTypedBlur(t){let e=t?.relatedTarget instanceof HTMLElement&&!!t.relatedTarget.closest(`.bx-time-panel-content`);this.textEdited()&&this.commitTypedTime(!e),this.markAsTouched()}onTypedKeydown(t){t.key===`Enter`?(t.preventDefault(),this.commitTypedTime()):t.key===`ArrowDown`?(t.preventDefault(),this.isOpen()||this.onTriggerClick(t),er(()=>{if(!this.isOpen())return;let e=this.nativeElement.ownerDocument.getElementById(this.controlId()+`-panel`);((this.isListMode()&&this.listFocusValue()?this.nativeElement.ownerDocument.getElementById(`${this.controlId()}-${this.listFocusValue()}`):null)??e?.querySelector(`[role="listbox"], .bx-time-feedback button`))?.focus({preventScroll:!0})},{injector:this.injector})):t.key===`Escape`&&this.isOpen()&&(t.preventDefault(),this.cancel())}onEditableClick(t){this.isOpen()||this.onTriggerClick(t)}onTriggerClick(t){this.isReadonly()||(this.isOpen()?this.close():this.open())}onWheelChange(t,e){if(!e)return;let n=this.draftTime(),o=this.wheelCandidate(n,t,e);o&&this.setTime(o)}onListKeydown(t,e){let n=this.listOptions().filter(u=>!u.disabled),o=n.findIndex(u=>u.value===(this.listFocusValue()??this.draftTime()));if(!n.length)return;if(t.key===`Enter`||t.key===` `){t.preventDefault(),this.onListSelect(n[Math.max(0,o)].value);return}let r=t.key===`ArrowDown`?1:t.key===`ArrowUp`?-1:0,a=t.key===`Home`?0:t.key===`End`?n.length-1:Math.max(0,Math.min(n.length-1,o+r));!r&&t.key!==`Home`&&t.key!==`End`||(t.preventDefault(),t.currentTarget.focus(),this.listFocusValue.set(n[a].value),e.scrollToItem(n[a].value),er(()=>{if(!this.isOpen())return;let u=this.nativeElement.ownerDocument.getElementById(`${this.controlId()}-${n[a].value}`);u&&this.listViewport()?.nativeElement.contains(u)&&u.focus({preventScroll:!0})},{injector:this.injector}))}onListSelect(t){this.isTimeAllowed(t)&&(this.listFocusValue.set(t),this.setTime(t))}onTimeZoneSelect(t){t&&(this.selectedTimeZone.set(t),this.timeZoneChange.emit(t))}showSeconds(){return this.settings().precision===`second`||this.settings().precision===`millisecond`}showMilliseconds(){return this.settings().precision===`millisecond`}showPeriod(){return this.settings().hourCycle===12}resolvedEmptyLabel(){return LQ(this.emptyLabel(),this.i18n)}wheelValue(t){let e=ir(this.draftTime())??{hour:0,minute:0,second:0,millisecond:0};return t===`hour`?String(this.settings().hourCycle===12?e.hour%12===0?12:e.hour%12:e.hour):t===`minute`?sn(e.minute):t===`second`?sn(e.second):t===`millisecond`?String(e.millisecond).padStart(3,`0`):Jn$1(this.settings().locale)[e.hour>=12?1:0]??``}isListMode(){return this.timePresentation()===`list`}listActiveId(){let t=this.listFocusValue()??this.draftTime();return this.listOptions().some(e=>e.value===t)?`${this.controlId()}-${t}`:null}timeZoneLabelFor(t){let e=nZ(t,this.settings().locale);return e.offsetMinutes===null?t:`${t} \xB7 ${ga(e.offsetMinutes)}`}parseTypedTime(t){let e=this.options()?.find(r=>LQ(r.label,this.i18n).toLocaleLowerCase(this.settings().locale)===t.trim().toLocaleLowerCase(this.settings().locale));if(e)return{value:e.value,error:null,message:null};let n=this.parseFormats().length?this.parseFormats():[this.settings().timeFormat],o={value:null,error:`format`,message:null};for(let r of n){let a=JQ(t.trim(),r,this.settings().locale,this.settings().precision);if(a.value)return a;(a.error===`range`||o.error!==`range`)&&(o=a)}return o}commitTypedTime(t=!0){if(this.effectiveDisabled()||this.isReadonly())return;if(!this.typedText().trim()){this.clear();return}let e=this.parseTypedTime(this.typedText()),n=e.value;if(!n){this.typedError.set(e.error),t&&this.close();return}this.draftTime.set(n),this.maybeCommitImmediately(),t&&!this.canApply()&&this.close()}normalizeTime(t){return uJ(t,this.settings().precision,this.settings().minuteStep,this.settings().secondStep,this.settings().millisecondStep)}formatValue(t){if(!t)return``;let e=this.options()?.find(r=>this.timeNumber(r.value)===this.timeNumber(t));return`${LQ(e?.label,this.i18n)||QK(t,this.settings().timeFormat,this.settings().locale)}${this.showTimeZone()&&this.showTimeZoneLabel()?` \xB7 ${this.selectedTimeZone()??this.settings().timeZone}`:``}`}buildColumnsFor(t){let e=lJ(t,this.settings().precision,this.settings().hourCycle,this.settings().locale,this.settings().minuteStep,this.settings().secondStep,this.settings().millisecondStep),n=(o,r$9)=>r$9.map(a=>s(r({},a),{disabled:!this.wheelCandidate(t,o,a.value)}));return{hours:n(`hour`,e.hours),minutes:n(`minute`,e.minutes),seconds:n(`second`,e.seconds),milliseconds:n(`millisecond`,e.milliseconds),periods:n(`period`,e.periods)}}wheelCandidate(t,e,n){let o=ir(t);if(!o)return null;let r$10=e===`hour`?this.settings().hourCycle===12?Number(n)%12+(o.hour>=12?12:0):Number(n):e===`period`?o.hour%12+Math.max(0,Jn$1(this.settings().locale).indexOf(n))*12:o.hour,a=s(r({},o),{hour:r$10,minute:e===`minute`?Number(n):o.minute,second:e===`second`?Number(n):o.second,millisecond:e===`millisecond`?Number(n):o.millisecond}),u=Yr$1(a,this.settings().precision);if(this.isTimeAllowed(u))return u;let g=this.availabilityTimes()??this.options()?.filter(O=>!O.disabled).map(O=>O.value);if(g)return g.filter(E=>{let z=ir(E);return!z||!this.isTimeAllowed(E)?!1:e===`period`?z.hour>=12==a.hour>=12:z.hour!==a.hour?!1:e===`hour`?!0:z.minute!==a.minute?!1:e===`minute`||z.second===a.second&&(e===`second`||z.millisecond===a.millisecond)}).sort((E,z)=>Math.abs(this.timeNumber(E)-this.timeNumber(u))-Math.abs(this.timeNumber(z)-this.timeNumber(u)))[0]??null;if(e!==`hour`&&e!==`period`)return null;let S=e===`hour`?[r$10]:Array.from({length:12},(O,E)=>E+(r$10>=12?12:0)),P=Array.from({length:Math.ceil(60/Math.max(1,this.settings().minuteStep))},(O,E)=>E*Math.max(1,this.settings().minuteStep));S.sort((O,E)=>Math.abs(O-r$10)-Math.abs(E-r$10)),P.sort((O,E)=>Math.abs(O-a.minute)-Math.abs(E-a.minute));for(let O of S)for(let E of P){let z=Yr$1(s(r({},a),{hour:O,minute:E}),this.settings().precision);if(this.isTimeAllowed(z))return z}return null}setTime(t){this.draftTime.set(t),this.maybeCommitImmediately()}maybeCommitImmediately(){if(this.effectiveDisabled()||this.isReadonly()||(this.selectionEdited.set(!0),this.textEdited.set(!this.canApply()),this.typedError.set(null),this.typedText.set(this.formatValue(this.draftTime())),!this.canApply()))return;let t=this.composedValue();JSON.stringify(t)!==JSON.stringify(this.internalValue())&&(this.updateValue(t),this.valueCommit.emit(t)),(this.closeOnSelect()??this.isListMode())&&this.close()}isDraftValid(){return this.isTimeAllowed(this.draftTime())}validationError(){let t=this.timeRestrictionReason(this.draftTime());return t?this.validationMessage(t):``}validationMessage(t){let e=this.invalidSelectionLabel();if(e!==void 0)return LQ(e,this.i18n);return Dt({kind:t,context:{format:this.parseFormats().length?this.parseFormats().join(` or `):this.settings().timeFormat,hourCycle:this.settings().hourCycle,minFormatted:this.min()?QK(this.min()??`00:00`,this.settings().timeFormat,this.settings().locale):``,maxFormatted:this.max()?QK(this.max()??`23:59`,this.settings().timeFormat,this.settings().locale):``,minuteStep:this.settings().minuteStep,secondStep:this.settings().secondStep,millisecondStep:this.settings().millisecondStep}},this.errorMessages(),r(r({},ma),this.formSettingsService.settings().errorMessages),this.i18n)}composedValue(){return this.isDraftValid()?this.draftTime():null}isTimeAllowed(t){return this.timeRestrictionReason(t)===null}timeNumber(t){let e=ir(t);return e?((e.hour*60+e.minute)*60+e.second)*1e3+e.millisecond:NaN}timeRestrictionReason(t){if(!ir(t))return`timeRange`;if(this.availabilityLoading())return`timeLoading`;if(this.availabilityError()||(this.resolver()||this.availability())&&!this.availabilityTimes())return`timeAvailability`;let e=this.timeNumber(t),n=this.availabilityTimes(),o=this.options(),r=this.min(),a=this.max();return r&&e<this.timeNumber(r)?`timeMin`:a&&e>this.timeNumber(a)?`timeMax`:n&&!n.some(u=>this.timeNumber(u)===e)||o&&!o.some(u=>!u.disabled&&this.timeNumber(u.value)===e)||this.disabledTimes().some(u=>this.timeNumber(u)===e)||this.disabledIntervals().some(u=>{let g=this.timeNumber(u.start),S=this.timeNumber(u.end);return g>S?e>=g||e<=S:e>=g&&e<=S})||this.timeFilter()?.(t)?`timeDisabled`:dJ(t,this.settings().minuteStep,this.settings().secondStep,this.settings().millisecondStep)?null:`timeStep`}alignEmptyDraft(){if(this.internalValue()||this.textEdited()||this.selectionEdited()||this.isTimeAllowed(this.draftTime()))return;let t=(this.availabilityTimes()??this.listOptions().filter(o=>!o.disabled).map(o=>o.value)).filter(o=>this.isTimeAllowed(o)),e=this.timeNumber(this.draftTime()),n=[...t].sort((o,r)=>Math.abs(this.timeNumber(o)-e)-Math.abs(this.timeNumber(r)-e))[0];n&&this.draftTime.set(n)}emitSlotRequest(t){if(!this.isOpen()||this.availabilityLoading())return;let e={date:null,timeZone:this.settings().timeZone,locale:this.settings().locale,revision:++this.requestRevision,source:t};t===`retry`?this.slotRetry.emit(e):this.slotRequest.emit(e),this.runResolver(e)}async runResolver(t){let e=this.resolver();if(!e||this.availability())return;let n=++this.resolverToken;this.availabilityState.set({times:this.availabilityState()?.times,loading:!0});try{let o=await e(t);if(n!==this.resolverToken)return;this.availabilityState.set({times:o?.times??[],loading:!1,retryable:!0}),this.alignEmptyDraft()}catch{if(n!==this.resolverToken)return;this.availabilityState.set({times:this.availabilityState()?.times,loading:!1,error:this.loadErrorMessage(),retryable:!0})}}static ɵfac=function(e){return new(e||i)};static ɵcmp=Fr$1({type:i,selectors:[[`bx-time-picker`]],viewQuery:function(e,n){e&1&&Yy(n.listViewport,Eu,5)(n.listCollection,Ru,5)(n.panelTemplate,Lu,5),e&2&&fb(3)},inputs:{options:[1,`options`],interval:[1,`interval`],parseFormats:[1,`parseFormats`],pickerIconTemplate:[1,`pickerIconTemplate`],pickerIcon:[1,`pickerIcon`],openPickerLabel:[1,`openPickerLabel`],timePresentation:[1,`timePresentation`],presentation:[1,`presentation`],locale:[1,`locale`],timeZone:[1,`timeZone`],hourCycle:[1,`hourCycle`],precision:[1,`precision`],minuteStep:[1,`minuteStep`],secondStep:[1,`secondStep`],millisecondStep:[1,`millisecondStep`],timeFormat:[1,`timeFormat`],loopColumns:[1,`loopColumns`],min:[1,`min`],max:[1,`max`],disabledTimes:[1,`disabledTimes`],disabledIntervals:[1,`disabledIntervals`],timeFilter:[1,`timeFilter`],commitPolicy:[1,`commitPolicy`],closeOnSelect:[1,`closeOnSelect`],clearable:[1,`clearable`],showTimeZone:[1,`showTimeZone`],showTimeZoneLabel:[1,`showTimeZoneLabel`],availability:[1,`availability`],resolver:[1,`resolver`],loadingLabel:[1,`loadingLabel`],retryLabel:[1,`retryLabel`],applyLabel:[1,`applyLabel`],cancelLabel:[1,`cancelLabel`],clearLabel:[1,`clearLabel`],nowLabel:[1,`nowLabel`],clearTooltip:[1,`clearTooltip`],hourLabel:[1,`hourLabel`],minuteLabel:[1,`minuteLabel`],secondLabel:[1,`secondLabel`],millisecondLabel:[1,`millisecondLabel`],periodLabel:[1,`periodLabel`],timeZoneLabel:[1,`timeZoneLabel`],loadErrorMessage:[1,`loadErrorMessage`],invalidSelectionLabel:[1,`invalidSelectionLabel`],emptyLabel:[1,`emptyLabel`],errorWrap:[1,`errorWrap`]},outputs:{valueCommit:`valueCommit`,openChange:`openChange`,timeZoneChange:`timeZoneChange`,slotRequest:`slotRequest`,slotRetry:`slotRetry`},features:[yt],ngContentSelectors:Fu,decls:14,vars:53,consts:[[`panelTemplate`,``],[`listViewport`,``],[`collection`,``],[3,`control`,`inline`,`tooltip`,`showLoadingIndicator`,`hint`,`hintEnd`,`error`,`subscriptSizing`,`forId`],[1,`bx-time-field`,3,`focusin`,`focusout`],[`bxSurface`,``,1,`bx-time-trigger`,`is-editable`],[1,`bx-floating-label`],[`role`,`combobox`,`aria-autocomplete`,`none`,`type`,`text`,`autocomplete`,`off`,`aria-haspopup`,`dialog`,1,`bx-time-input`,3,`click`,`input`,`blur`,`keydown`,`id`,`value`,`disabled`,`readOnly`],[`type`,`button`,1,`bx-time-icon-button`,3,`click`,`disabled`],[`aria-hidden`,`true`,3,`value`],[`bx-button`,``,`type`,`button`,`variant`,`text`,1,`bx-time-clear`,3,`surfaceEffects`,`disabled`,`bxTooltip`],[`panelClass`,`bx-time-panel`,3,`dismiss`,`panelId`,`panelWidth`,`open`,`autoFocus`,`presentation`,`origin`,`content`,`ariaLabel`],[`aria-hidden`,`true`,1,`bx-field-required`],[3,`size`,`decorative`],[`size`,`16`,3,`name`,`contentTemplate`,`decorative`],[`bx-button`,``,`type`,`button`,`variant`,`text`,1,`bx-time-clear`,3,`click`,`surfaceEffects`,`disabled`,`bxTooltip`],[`name`,`x`,`size`,`16`,3,`decorative`],[`bxSurface`,``,`data-bx-surface`,`glass`,1,`bx-time-panel-content`,3,`bxSurfaceInteractive`],[1,`bx-time-panel-body`],[1,`bx-time-editor`],[1,`bx-time-editor-content`],[1,`bx-time-wheels`],[`role`,`listbox`,`tabindex`,`0`,1,`bx-time-list`],[1,`bx-time-feedback`],[1,`bx-picker-shortcuts`],[`appearance`,`outline`,3,`label`,`options`,`value`,`isSearchable`],[`type`,`hour`,3,`valueChange`,`options`,`value`,`label`,`loop`],[`aria-hidden`,`true`,1,`bx-time-wheel-separator`],[`type`,`minute`,3,`valueChange`,`options`,`value`,`label`,`loop`],[`type`,`period`,1,`bx-time-period-wheel`,3,`options`,`value`,`label`,`loop`],[`type`,`second`,3,`valueChange`,`options`,`value`,`label`,`loop`],[`type`,`millisecond`,3,`valueChange`,`options`,`value`,`label`,`loop`],[`type`,`period`,1,`bx-time-period-wheel`,3,`valueChange`,`options`,`value`,`label`,`loop`],[`role`,`listbox`,`tabindex`,`0`,1,`bx-time-list`,3,`keydown`],[`itemRole`,`presentation`,3,`items`,`trackBy`,`config`,`scrollContainer`],[3,`bxVirtualItem`],[`type`,`button`,`role`,`option`,`tabindex`,`-1`,1,`bx-time-list-option`,3,`click`,`id`,`disabled`],[`name`,`check`,`size`,`16`,3,`decorative`],[3,`size`,`label`],[`role`,`status`],[`role`,`alert`,1,`bx-time-feedback-message`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`accent`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`accent`,3,`click`],[`name`,`rotate-cw`,`size`,`16`,3,`decorative`],[`type`,`button`,1,`bx-picker-shortcut`,3,`click`,`disabled`],[`appearance`,`outline`,3,`valueChange`,`label`,`options`,`value`,`isSearchable`]],template:function(e,n){if(e&1&&(ld$1(Au),bo(0,`bx-form-field`,3)(1,`div`,4),br$1(`focusin`,function(){return n.onFieldFocus()})(`focusout`,function(r){return n.onFieldBlur(r)}),bo(2,`div`,5),od$1(3,Hu,3,3,`label`,6),bo(4,`input`,7),br$1(`click`,function(r){return n.onEditableClick(r)})(`input`,function(r){return n.onTypedInput(r)})(`blur`,function(r){return n.onTypedBlur(r)})(`keydown`,function(r){return n.onTypedKeydown(r)}),Go(),bo(5,`button`,8),br$1(`click`,function(r){return n.onTriggerClick(r)}),bo(6,`bx-visual-transition`,9),rd$1(7,ju,2,1,`ng-template`),Go()()(),od$1(8,$u,2,5,`button`,10),Go(),bo(9,`bx-picker-surface`,11),br$1(`dismiss`,function(){return n.cancel()}),Go(),rd$1(10,ap,9,10,`ng-template`,null,0,RA),dd$1(12,0,Vu),dd$1(13,1,zu),Go()),e&2){let o=FT(11);xo(`control`,n.fieldControl)(`inline`,!0)(`tooltip`,n.tooltip())(`showLoadingIndicator`,!1)(`hint`,n.hint())(`hintEnd`,n.hintEnd())(`error`,n.errorText()||n.error())(`subscriptSizing`,n.resolvedSubscriptSizing())(`forId`,n.controlId()),Xl$1(),tr(`has-clear`,n.showClear()),Xl$1(),tr(`has-label`,!!n.label())(`is-open`,n.isOpen())(`is-floating`,n.isFloating())(`is-invalid`,n.showError()||!!n.errorText())(`is-outline`,n.resolvedAppearance()===`outline`)(`is-readonly`,n.isReadonly())(`is-disabled`,n.effectiveDisabled())(`is-keyboard-focused`,n.keyboardFocused()),Xl$1(),nd$1(n.label()?3:-1),Xl$1(),xo(`id`,n.controlId())(`value`,n.typedText())(`disabled`,n.effectiveDisabled())(`readOnly`,n.isReadonly()),vo(`aria-controls`,n.isOpen()?n.controlId()+`-panel`:null)(`placeholder`,n.isFloating()||!n.label()?n.resolvedTimePlaceholder():``)(`aria-label`,n.ariaLabel()||n.resolvedLabel()||n.resolvedTimePlaceholder())(`aria-describedby`,n.describedBy())(`aria-expanded`,n.isOpen())(`aria-invalid`,n.showError()||!!n.errorText())(`aria-required`,n.effectiveRequired())(`aria-busy`,n.availabilityLoading())(`data-testid`,n.dataTestId()),Xl$1(),xo(`disabled`,n.effectiveDisabled()||n.isReadonly()||n.availabilityLoading()),vo(`aria-label`,n.resolvedOpenPickerLabel()),Xl$1(),xo(`value`,n.availabilityLoading()),Xl$1(2),nd$1(n.showClear()?8:-1),Xl$1(),xo(`panelId`,n.controlId()+`-panel`)(`panelWidth`,n.showMilliseconds()?`min(94vw, 30rem)`:`min(94vw, 22rem)`)(`open`,n.isOpen())(`autoFocus`,!1)(`presentation`,n.surfacePresentation())(`origin`,n.panelOrigin())(`content`,o)(`ariaLabel`,n.resolvedLabel()||n.resolvedTimePlaceholder())}},dependencies:[Wu$1,GC,xe,ne,ZC,Xi$1,Et$1,Wt,ti,oi,Pt,cl$1,Un$1],styles:[`
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
  --%NS%bx-option-radius: max(0px, var(--%NS%bx-rounded-lg, 0.75rem) - (calc(var(--%NS%bx-space-3, 0.75rem) + var(--%NS%bx-space-1, 0.25rem) + var(--%NS%bx-border-width, 1px))));
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
  border-radius: var(--%NS%bx-select-option-radius, var(--%NS%bx-option-radius, var(--%NS%bx-rounded-sm, 0.25rem)));
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
}`]})};export{sa as A,ne as C,om as D,oa as E,um as F,xe as I,zt as L,ta as M,ti as N,pa as O,tm as P,ls as S,nm as T,fa as _,Jr as a,la as b,We as c,aa as d,am as f,ea as g,dm as h,It as i,sm as j,rm as k,Xt as l,cm as m,Bt as n,Qr as o,an as p,Gr as r,Ut as s,$r as t,Yt as u,fr as v,ni as w,lm as x,im as y};