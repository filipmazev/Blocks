import{C as Wi$1,I as ct$1,K as ll$1,P as cl,Q as qi$1,W as jn$1,X as on,Z as pl$1,j as Zi$1,l as Gi$1,o as Bs$1,r as Ae,s as Et$1,t as $i$1,v as Pt$1}from"./chunk-DyZGtlM9.js";import{$ as Gn$1,$a as tr,$n as YC,Ai as jt$1,Ao as xe$1,B as Ek,Bn as WR,Bo as yz,Br as dk,Bt as Ms$1,C as Br,Ca as pe,Ci as ik,Cn as TA,Cr as b,D as CR,Dn as U,Dt as KR,E as CQ,Ea as qC,Ei as j,Et as KQ,F as Dw,Fi as kN,Fo as yA,Fr as dR,Ft as MR,Ga as sr,Gn as Wy,Gr as ec$1,Gt as Nd$1,Ha as sd$1,Hi as lb,Hn as Wn$1,Ia as re,Ii as kZ,It as MZ,Ja as tZ,Jn as XT,Jt as OQ,K as Fr,Ka as st,Kr as ed$1,Kt as Nt,L as EA,La as rr,Li as ka$1,Lr as db,Lt as Mb,Ma as qu$1,Mo as xt,Mr as ci,Mt as MA,Nn as V,Oi as jT,On as UC,Oo as xa$1,Or as bo$1,Ot as Kh,Pa as rZ,Pn as VQ,Pr as dN,Q as Gk,Qt as Ote,Ra as sI,Ri as ke,Rn as WK,Rr as dd$1,Rt as Me,S as Bn$1,Sn as T,Sr as al$1,Ti as ir,U as FZ,Ua as sk,Ui as le,Uo as zQ,Va as sb,Vn as WZ,Vo as z,Vr as ds$1,Wi as li,Wo as ze$1,Wt as NQ,X as GZ,Xa as td$1,Xi as mC,Xt as Ok,Y as GR,Ya as tb,Yi as mA,Yr as er,Z as Ge,Zi as mK,_ as BQ,_n as SR,_o as vr,a as $Z,ao as ub,bi as id$1,br as ai,bt as J,c as $o$1,cn as Qo$1,co as uk,ct as Hy,da as oN,en as Pa$1,eo as tt$1,et as Go$1,fi as he,fr as _i$1,ft as IR,g as Aw,ga as og,gi as iN,gn as SQ,go as vo$1,gt as Ih,ia as nb,ii as gC,in as QQ,ir as Yr,j as DA,ja as qs$1,jo as xo$1,ki as jk,ko as xb,kr as br,li as hC,mn as Rr,mr as aA,mt as Ie$1,n as $C,no as uR,nt as Gy,o as $e,oa as ni,oi as gu$1,on as Qc$1,oo as ue,or as Zn$1,ot as Hr,p as $y,pa as ob,pi as ho$1,pn as Rd$1,po as vC,pr as _z,pt as IT,q as GK,qn as XQ,qr as eh,r as $K,rr as Yn$1,rt as HC,sn as Qn$1,sr as Zs$1,st as Hu$1,t as $,ti as fr,tr as YK,u as $s$1,ur as _Z,ut as IA,vn as ST,vr as ag,wi as il$1,wn as Te,x as Bk,xi as ie,xn as St,xo as wd$1,xt as J1,y as BZ,yo as wA,z as ER,zi as kz,zn as WQ,zo as yt,zr as de,zt as Mh}from"./chunk-DflWScik.js";import{n as s,t as r}from"./chunk-C9yOwMO6.js";var qt=class i{elementRef=b(ke);static ɵfac=function(e){return new(e||i)};static ɵdir=pe({type:i,selectors:[[``,`bxButtonIcon`,``]]})};var ao={text:0,icon:.45,outlined:.45,tonal:.65,filled:1.1};var so={primary:1,accent:1,success:1,info:1,warn:1.04,danger:1.1,grayscale:.35};function lo(i,t,e){return ao[i===`text`?`text`:t?`outlined`:i===`tonal`?`tonal`:i===`icon`?`icon`:`filled`]*so[e]}var ba=[`contentWrapper`];var ma=[`*`];function ga(i,t){if(i&1&&td$1(0,`bx-loading-spinner`,4),i&2){let e=$s$1();$o$1(`size`,e.spinnerSize())(`decorative`,!0)}}var xe=class i{bxA11yService=b(Br);projectedIcon=jk(YC);iconElement=jk(YC,{read:ke});customIcon=jk(qt);contentWrapper=kz.required(`contentWrapper`);hasProjectedIcon=U(()=>!!this.customIcon()||!!this.projectedIcon());spinnerSize=z(20);spinnerLeft=z(null);retainSpinner=z(!1);isAnimated=U(()=>!this.bxA11yService.isReducedMotion());isDisabled=U(()=>this.disabled()||this.loading());variant=re(`text`);shape=re(`default`);color=re(`primary`);outlined=re(!1);elevated=re(!1);disabled=re(!1,{transform:Ge});loading=re(!1,{transform:Ge});interactive=re(!0,{transform:Ge});surfaceEffects=re(!0,{transform:Ge});glassiness=re();presence;presenceElement;constructor(){Ote(()=>({glassiness:this.glassiness(),emissionStrength:lo(this.variant(),this.outlined(),this.color()),interactive:this.variant()===`text`||!this.interactive()||this.isDisabled()?!1:void 0,emission:this.variant()!==`text`&&this.interactive()&&!this.isDisabled()?this.color()===`primary`||this.color()===`grayscale`?`var(--bx-primary)`:this.color()===`accent`?`var(--bx-accent)`:`var(--bx-text-${this.color()})`:void 0}),()=>this.surfaceEffects()),Bk(t=>{let e=this.customIcon()?.elementRef.nativeElement??this.iconElement()?.nativeElement;if(this.projectedIcon()?.size(),this.measureSpinner(e),!e||typeof ResizeObserver>`u`)return;let n=new ResizeObserver(()=>this.measureSpinner(e));n.observe(this.contentWrapper().nativeElement),n.observe(e),t(()=>n.disconnect())}),Bk(()=>{let t=this.customIcon()?.elementRef.nativeElement??this.iconElement()?.nativeElement,e=this.loading(),n=this.bxA11yService.isReducedMotion(),r=t!==this.presenceElement;e&&this.retainSpinner.set(!0),r&&(this.presence?.destroy(),this.presenceElement=t,this.presence=t?Ih(t,{initiallyVisible:!e}):void 0),this.presence?.update(!e,n||r)}),b(he).onDestroy(()=>this.presence?.destroy())}releaseSpinner(){this.loading()||this.retainSpinner.set(!1)}onClick(t){this.isDisabled()&&(t.preventDefault(),t.stopImmediatePropagation())}measureSpinner(t){let e=this.contentWrapper().nativeElement,n=e.getBoundingClientRect(),r=t?.getBoundingClientRect(),o=t?`offsetWidth`in t?t.offsetWidth:t.clientWidth:0,a=Number(this.projectedIcon()?.size()),u=Number.parseFloat(getComputedStyle(e).width),g=u>0?n.width/u:1;this.spinnerSize.set(o||(Number.isFinite(a)&&a>0?a:20)),this.spinnerLeft.set(r&&g>0?(r.left+r.width/2-n.left)/g:null)}static ɵfac=function(e){return new(e||i)};static ɵcmp=Fr({type:i,selectors:[[`bx-button`],[`button`,`bx-button`,``],[`a`,`bx-button`,``]],contentQueries:function(e,n,r){e&1&&id$1(r,n.projectedIcon,YC,5)(r,n.iconElement,YC,5,ke)(r,n.customIcon,qt,5),e&2&&db(3)},viewQuery:function(e,n){e&1&&Wy(n.contentWrapper,ba,5),e&2&&db()},hostVars:16,hostBindings:function(e,n){e&1&&br(`click`,function(o){return n.onClick(o)}),e&2&&(vo$1(`disabled`,n.isDisabled()?!0:null)(`aria-disabled`,n.isDisabled())(`aria-busy`,n.loading()?`true`:null)(`tabindex`,n.isDisabled()?`-1`:null),XT(`bx-btn bx-btn-`+n.variant()+` bx-btn-color-`+n.color()),tr(`bx-btn-capsule`,n.shape()===`capsule`)(`bx-btn-is-outlined`,n.outlined())(`bx-btn-is-elevated`,n.elevated())(`bx-btn-animated`,n.isAnimated())(`bx-btn-non-interactive`,!n.interactive()))},inputs:{variant:[1,`variant`],shape:[1,`shape`],color:[1,`color`],outlined:[1,`outlined`],elevated:[1,`elevated`],disabled:[1,`disabled`],loading:[1,`loading`],interactive:[1,`interactive`],surfaceEffects:[1,`surfaceEffects`],glassiness:[1,`glassiness`]},ngContentSelectors:ma,decls:7,vars:8,consts:[[`contentWrapper`,``],[1,`bx-btn-content-wrapper`],[`aria-hidden`,`true`,1,`bx-btn-spinner`],[1,`bx-btn-spinner-visual`,3,`presenceHidden`,`bxVisualPresence`],[3,`size`,`decorative`],[1,`bx-btn-label`,3,`bxVisualPresence`,`bxVisualPresenceScale`]],template:function(e,n){e&1&&($y(),bo$1(0,`span`,1,0)(2,`span`,2)(3,`span`,3),br(`presenceHidden`,function(){return n.releaseSpinner()}),tb(4,ga,1,2,`bx-loading-spinner`,4),Go$1()(),bo$1(5,`span`,5),Gy(6),Go$1()()),e&2&&(tr(`has-icon`,n.hasProjectedIcon()),qs$1(2),ka$1(`left`,n.spinnerLeft(),`px`),qs$1(),$o$1(`bxVisualPresence`,n.loading()),qs$1(),ob(n.loading()||n.retainSpinner()?4:-1),qs$1(),$o$1(`bxVisualPresence`,!n.loading()||n.hasProjectedIcon())(`bxVisualPresenceScale`,1))},dependencies:[Et$1,Hu$1],styles:[`
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
}`]})};function ha(i,t){i&1&&td$1(0,`bx-icon`,1)}function fa(i,t){i&1&&td$1(0,`bx-icon`,2)}var Pt=class i{checked=re(!1);indeterminate=re(!1);invalid=re(!1);disabled=re(!1);emissive=re(!1);static ɵfac=function(e){return new(e||i)};static ɵcmp=Fr({type:i,selectors:[[`bx-checkbox-indicator`]],hostAttrs:[`aria-hidden`,`true`],hostVars:2,hostBindings:function(e,n){e&2&&tr(`is-emissive`,n.emissive())},inputs:{checked:[1,`checked`],indeterminate:[1,`indeterminate`],invalid:[1,`invalid`],disabled:[1,`disabled`],emissive:[1,`emissive`]},decls:3,vars:9,consts:[[`bxSurface`,``,1,`bx-checkbox-box`,3,`bxSurfaceInteractive`,`bxSurfaceEmission`],[`name`,`minus`,`size`,`16`],[`name`,`check`,`size`,`16`]],template:function(e,n){e&1&&(bo$1(0,`span`,0),tb(1,ha,1,0,`bx-icon`,1)(2,fa,1,0,`bx-icon`,2),Go$1()),e&2&&(tr(`is-checked`,n.checked()||n.indeterminate())(`is-invalid`,n.invalid())(`is-disabled`,n.disabled()),$o$1(`bxSurfaceInteractive`,n.emissive())(`bxSurfaceEmission`,n.invalid()?`var(--bx-text-danger)`:`var(--bx-accent)`),qs$1(),ob(n.indeterminate()?1:n.checked()?2:-1))},dependencies:[UC,YC],styles:[`
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
}`]})};var xa=[`*`];var jt=class i{static ɵfac=function(e){return new(e||i)};static ɵcmp=Fr({type:i,selectors:[[`bx-error`]],hostAttrs:[`aria-live`,`polite`],ngContentSelectors:xa,decls:1,vars:0,template:function(e,n){e&1&&($y(),Gy(0))},encapsulation:2})};var va=[`*`];var $t=class i{align=re(`start`);static ɵfac=function(e){return new(e||i)};static ɵcmp=Fr({type:i,selectors:[[`bx-hint`]],hostVars:2,hostBindings:function(e,n){e&2&&ka$1(`margin-inline-start`,n.align()===`end`?`auto`:null)},inputs:{align:[1,`align`]},ngContentSelectors:va,decls:1,vars:0,template:function(e,n){e&1&&($y(),Gy(0))},encapsulation:2})};var Gt=new T(`BX_FORM_FIELD_CONTROL`);var ya=[[[``,`bxPrefix`,``]],`*`,[[``,`bxSuffix`,``]],[[`bx-error`]],[[`bx-hint`]]];var Sa=[`[bxPrefix]`,`*`,`[bxSuffix]`,`bx-error`,`bx-hint`];var _a=[`ngProjectAs`,`bx-error`,5,[`bx-error`]];var Ca=[`ngProjectAs`,`bx-hint`,5,[`bx-hint`]];function Ma(i,t){i&1&&(bo$1(0,`span`,11),aA(1,`*`),Go$1())}function wa(i,t){if(i&1&&(bo$1(0,`div`,1)(1,`label`,10),aA(2),tb(3,Ma,2,0,`span`,11),Go$1()()),i&2){let e=$s$1();qs$1(),vo$1(`for`,e.controlId()),qs$1(),ub(``,e.resolvedLabel(),` `),qs$1(),ob(e.isRequired()&&!e.hideRequiredMarker()?3:-1)}}function Na(i,t){i&1&&td$1(0,`bx-loading-spinner`,3),i&2&&$o$1(`size`,16)(`decorative`,!0)}function Ta(i,t){if(i&1&&(bo$1(0,`button`,4),td$1(1,`bx-icon`,12),Go$1()),i&2){let e=$s$1();$o$1(`bxTooltip`,e.tooltip()),vo$1(`aria-label`,e.resolvedTooltipLabel())}}function Pa(i,t){i&1&&td$1(0,`bx-icon`,14)}function Oa(i,t){if(i&1&&(bo$1(0,`div`,15),aA(1),Go$1()),i&2){let e=t.$implicit;qs$1(),sk(e)}}function ka(i,t){if(i&1&&(bo$1(0,`div`,13),tb(1,Pa,1,0,`bx-icon`,14),bo$1(2,`div`),nb(3,Oa,2,1,`div`,15,ST),Go$1()()),i&2){let e=$s$1();tr(`bx-animated`,e.isAnimated()),qs$1(),ob(e.messages().length?1:-1),qs$1(2),sb(e.messages())}}var ee=class i{i18n=b(SQ,{optional:!0});bxA11yService=b(Br);nativeElement=b(ke).nativeElement;bxGlassLightingService=b($C);generatedId=`bx-field-${MZ()}`;projectedControl=jk(Gt);activeControl=U(()=>this.control()??this.projectedControl());controlId=U(()=>this.forId()||this.activeControl()?.controlId()||this.generatedId);resolvedLabel=U(()=>CQ(this.label()??(this.inline()?void 0:this.activeControl()?.label()),this.i18n));resolvedError=U(()=>CQ(this.error(),this.i18n));resolvedHint=U(()=>CQ(this.hint(),this.i18n));resolvedHintEnd=U(()=>CQ(this.hintEnd(),this.i18n));resolvedTooltipLabel=U(()=>CQ(this.tooltipLabel(),this.i18n));showErrors=U(()=>!!this.error()||!!this.projectedError()||this.errors().length>0||(this.activeControl()?.showError()??!1));messages=U(()=>this.resolvedError()?[this.resolvedError()]:this.activeControl()?.errorTexts()??this.errors());isRequired=U(()=>this.required()||this.activeControl()?.required());isLoading=U(()=>this.loading()||this.activeControl()?.pending());hideSubscript=U(()=>this.subscriptSizing()===`dynamic`&&!this.showErrors()&&!this.resolvedHint()&&!this.resolvedHintEnd()&&!this.projectedHint());projectedError=jk(jt);projectedHint=jk($t);isAnimated=U(()=>!this.bxA11yService.isReducedMotion());inline=re(!1);control=re(void 0);label=re(void 0);tooltip=re(void 0);tooltipLabel=re(`More information`);error=re(void 0);errors=re([]);hint=re(void 0);hintEnd=re(void 0);required=re(!1);hideRequiredMarker=re(!1);loading=re(!1);showLoadingIndicator=re(!0);forId=re(``);subscriptSizing=re(`fixed`);constructor(){Bk(t=>{this.activeControl()?.setDescribedByIds?.([`${this.controlId()}-description`]);let e=this.nativeElement.querySelector(`input,textarea,select,button[role="combobox"]`);if(e){let u=new Set((e.getAttribute(`aria-describedby`)??``).split(` `).filter(Boolean));u.add(`${this.controlId()}-description`),e.setAttribute(`aria-describedby`,[...u].join(` `)),e.setAttribute(`aria-invalid`,String(this.showErrors())),e.setAttribute(`aria-required`,String(!!this.isRequired()))}if(!this.showErrors())return;let n=this.nativeElement.parentElement,r=this.nativeElement.closest(`form, fieldset`)??n,o=this.nativeElement.querySelector(`.bx-field-control > [data-bx-surface]`);if(!r||!o)return;let a=this.bxGlassLightingService.register(r,{element:o,edge:`bottom`,offsetX:.5,offsetY:1,z:32,color:`var(--bx-text-danger)`,intensity:.9,radius:240});t(()=>a.destroy())})}static ɵfac=function(e){return new(e||i)};static ɵcmp=Fr({type:i,selectors:[[`bx-form-field`]],contentQueries:function(e,n,r){e&1&&id$1(r,n.projectedControl,Gt,5)(r,n.projectedError,jt,5)(r,n.projectedHint,$t,5),e&2&&db(3)},inputs:{inline:[1,`inline`],control:[1,`control`],label:[1,`label`],tooltip:[1,`tooltip`],tooltipLabel:[1,`tooltipLabel`],error:[1,`error`],errors:[1,`errors`],hint:[1,`hint`],hintEnd:[1,`hintEnd`],required:[1,`required`],hideRequiredMarker:[1,`hideRequiredMarker`],loading:[1,`loading`],showLoadingIndicator:[1,`showLoadingIndicator`],forId:[1,`forId`],subscriptSizing:[1,`subscriptSizing`]},ngContentSelectors:Sa,decls:18,vars:17,consts:[[1,`bx-field-wrapper`],[1,`bx-field-header`],[1,`bx-field-control`],[3,`size`,`decorative`],[`type`,`button`,`bxTooltipTouch`,`tap`,`placement`,`top`,1,`bx-field-tooltip-trigger`,3,`bxTooltip`],[1,`bx-field-subscript`,3,`hidden`,`id`],[1,`bx-field-error-projected`,3,`hidden`],[`aria-live`,`polite`,1,`bx-field-error`,3,`bx-animated`],[1,`bx-field-hints`,3,`hidden`],[1,`bx-field-hint-end`],[1,`bx-field-label`],[`aria-hidden`,`true`,1,`bx-field-required`],[`name`,`help-circle`,`size`,`16`],[`aria-live`,`polite`,1,`bx-field-error`],[`name`,`alert-circle`,`size`,`16`],[1,`bx-field-error-text`]],template:function(e,n){e&1&&($y(ya),bo$1(0,`div`,0),tb(1,wa,4,3,`div`,1),bo$1(2,`div`,2),Gy(3),Gy(4,1),Gy(5,2),tb(6,Na,1,2,`bx-loading-spinner`,3),tb(7,Ta,2,2,`button`,4),Go$1(),bo$1(8,`div`,5)(9,`div`,6),Gy(10,3,_a),Go$1(),tb(11,ka,5,3,`div`,7),bo$1(12,`div`,8)(13,`span`),aA(14),Go$1(),Gy(15,4,Ca),bo$1(16,`span`,9),aA(17),Go$1()()()()),e&2&&(tr(`is-invalid`,n.showErrors())(`dynamic-subscript`,n.subscriptSizing()===`dynamic`),vo$1(`data-bx-field-invalid`,n.showErrors()),qs$1(),ob(n.resolvedLabel()?1:-1),qs$1(),tr(`bx-field-control-inline`,n.inline()),qs$1(4),ob(n.showLoadingIndicator()&&n.isLoading()?6:-1),qs$1(),ob(n.tooltip()?7:-1),qs$1(),$o$1(`hidden`,n.hideSubscript())(`id`,n.controlId()+`-description`),qs$1(),$o$1(`hidden`,!n.showErrors()),qs$1(2),ob(n.showErrors()&&!n.projectedError()?11:-1),qs$1(),$o$1(`hidden`,n.showErrors()),qs$1(2),sk(n.resolvedHint()),qs$1(3),sk(n.resolvedHintEnd()))},dependencies:[YC,Pt$1,Et$1],styles:[`
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
}`]})};var co={errorPolicy:`touched`,errorMode:`first`,errorMessages:{required:`This field is required.`,email:`Enter a valid email address.`,minLength:({params:i})=>`Enter at least ${i.minLength??i.requiredLength} characters.`,maxLength:({params:i})=>`Enter no more than ${i.maxLength??i.requiredLength} characters.`,min:({params:i})=>`Enter a value of at least ${i.min}.`,max:({params:i})=>`Enter a value of no more than ${i.max}.`,pattern:`Enter a value in the required format.`,parse:`Enter a valid value.`,invalid:`Invalid value.`},appearance:`fill`,floatLabel:`auto`,hideRequiredMarker:!1,subscriptSizing:`fixed`,tooltipOnTruncate:!0};var uo={minlength:`minLength`,maxlength:`maxLength`};function Ot(i,t,e,n){let r$1=uo[i.kind]??i.kind,o=`context`in i?i.context:void 0,a=o!==null&&typeof o==`object`?r({},o):r({},i),u=t[i.kind]??t[r$1],g=i.message??(typeof o==`string`?o:typeof a.message==`string`?a.message:void 0),S=u??g??e[i.kind]??e[r$1]??e.invalid??`Invalid value.`;return CQ(typeof S==`function`?S({kind:r$1,error:i,params:a}):S,n,a)}var kt=class i{state=z(r({},co));settings=this.state.asReadonly();update(t){this.state.update(e=>s(r(r({},e),t),{errorMessages:r(r({},e.errorMessages),t.errorMessages)}))}static ɵfac=function(e){return new(e||i)};static ɵprov=V({token:i,factory:i.ɵfac,providedIn:`root`})};var Je=class i{textAdapter=b(SQ,{optional:!0});formGroupDirective=b(dN,{optional:!0,skipSelf:!0});ngForm=b(iN,{optional:!0,skipSelf:!0});focusMonitor=b(og);formSettingsService=b(kt);destroyRef=b(he);nativeElement=b(ke).nativeElement;ngControl=b(sr,{optional:!0,self:!0});generatedId=`bx-field-${MZ()}`;submittedByParent=z(!1);extraDescriptions=z([]);localTouched=z(!1);controlVersion=z(0);currentErrors=U(()=>{if(this.controlVersion(),this.errors().length)return this.errors();let t=this.ngControl?.errors;return t?Object.entries(t).map(([e,n])=>({kind:e,context:n})):[]});keyboardFocused=z(!1);isReadonly=U(()=>this.readonly()||this.readOnly());controlId=U(()=>this.id()??this.generatedId);resolvedLabel=U(()=>CQ(this.label(),this.textAdapter));resolvedPlaceholder=U(()=>CQ(this.placeholder(),this.textAdapter));resolvedAppearance=U(()=>this.appearance()??this.formSettingsService.settings().appearance);resolvedFloatLabel=U(()=>this.floatLabel()??this.formSettingsService.settings().floatLabel);resolvedHideRequiredMarker=U(()=>this.hideRequiredMarker()??this.formSettingsService.settings().hideRequiredMarker);resolvedSubscriptSizing=U(()=>this.subscriptSizing()??this.formSettingsService.settings().subscriptSizing);resolvedTooltipOnTruncate=U(()=>this.tooltipOnTruncate()??this.formSettingsService.settings().tooltipOnTruncate??!0);describedBy=U(()=>[...new Set([this.ariaDescribedBy(),`${this.controlId()}-description`,...this.extraDescriptions()].filter(Boolean))].join(` `));effectiveDisabled=U(()=>(this.controlVersion(),this.disabled()||this.ngControl?.disabled===!0));effectiveRequired=U(()=>{this.controlVersion();let t=this.ngControl?.control;return this.required()||!!t?.hasValidator?.(ai.required)||!!t?.hasValidator?.(ai.requiredTrue)});showError=U(()=>{this.controlVersion();let t={invalid:this.invalid()||this.currentErrors().length>0||!!this.error(),touched:this.ngControl?.touched??(this.touched()||this.localTouched()),dirty:this.ngControl?.dirty??this.dirty(),submitted:this.submitted()||this.submittedByParent(),disabled:this.effectiveDisabled(),pending:this.pending()},e=this.errorPolicy()??this.formSettingsService.settings().errorPolicy;return t.disabled||!t.invalid?!1:typeof e==`function`?e(t):e===`always`||t.submitted||(e===`dirty`?t.dirty:e===`touched`?t.touched:!1)});errorTexts=U(()=>{if(!this.showError())return[];if(this.error())return[CQ(this.error(),this.textAdapter)];let t=this.errorPriority(),e=[...this.currentErrors()].sort((r,o)=>{let a=t.indexOf(r.kind),u=t.indexOf(o.kind);return(a<0?t.length:a)-(u<0?t.length:u)});return((this.errorMode()??this.formSettingsService.settings().errorMode)===`all`?e:e.slice(0,1)).map(r=>Ot(r,this.errorMessages(),this.formSettingsService.settings().errorMessages,this.textAdapter))});fieldControl;id=re(void 0);label=re(void 0);placeholder=re(void 0);tooltip=re(void 0);hint=re(void 0);hintEnd=re(void 0);error=re(void 0);ariaLabel=re(void 0);ariaLabelledBy=re(void 0);ariaDescribedBy=re(void 0);dataTestId=re(void 0);name=re(``);errors=re([]);invalid=re(!1);pending=re(!1);touched=re(!1);dirty=re(!1);disabled=re(!1,{transform:Ge});readonly=re(!1,{transform:Ge});readOnly=re(!1,{transform:Ge});hidden=re(!1,{transform:Ge});required=re(!1,{transform:Ge});loading=re(!1,{transform:Ge});disabledReasons=re([]);submitted=re(!1);errorMessages=re({});errorPriority=re([]);errorPolicy=re(void 0);errorMode=re(void 0);appearance=re(void 0);floatLabel=re(void 0);hideRequiredMarker=re(void 0);subscriptSizing=re(void 0);tooltipOnTruncate=re(void 0);touch=Ok();constructor(){this.fieldControl={controlId:this.controlId,label:this.label,showError:this.showError,errorTexts:this.errorTexts,required:this.effectiveRequired,disabled:this.effectiveDisabled,pending:this.pending,focus:e=>this.focus(e),setDescribedByIds:e=>{this.extraDescriptions().join(` `)!==e.join(` `)&&this.extraDescriptions.set(e)}},er(()=>{this.focusMonitor.monitor(this.nativeElement,!0).pipe(wd$1(this.destroyRef)).subscribe(r=>this.keyboardFocused.set(r===`keyboard`)),this.destroyRef.onDestroy(()=>this.focusMonitor.stopMonitoring(this.nativeElement));let e=this.nativeElement.closest(`form`),n=()=>{this.submittedByParent.set(!0),this.commitPendingValue()};e?.addEventListener(`submit`,n,{capture:!0}),this.destroyRef.onDestroy(()=>e?.removeEventListener(`submit`,n,{capture:!0}))}),(this.formGroupDirective??this.ngForm)?.ngSubmit.pipe(wd$1(b(he))).subscribe(()=>{this.submittedByParent.set(!0),this.commitPendingValue()})}ngOnInit(){this.ngControl?.control?.events?.pipe(wd$1(this.destroyRef)).subscribe(()=>{this.controlVersion.update(e=>e+1)}),this.ngControl?.control?.valueChanges?.pipe(wd$1(this.destroyRef)).subscribe(()=>this.clearPendingEdit()),(this.formGroupDirective??this.ngForm)?.form.events.pipe(wd$1(this.destroyRef)).subscribe(e=>{e instanceof ci&&this.reset()})}focus(t){this.nativeElement.querySelector(`input:not(:disabled), textarea:not(:disabled), select:not(:disabled), button:not(:disabled)`)?.focus(t)}reset(){this.localTouched.set(!1),this.submittedByParent.set(!1)}markAsTouched(){this.localTouched.set(!0),this.commitPendingValue(`blur`),this.touch.emit()}onControlPointerDown(){this.isReadonly()&&this.keyboardFocused.set(!1)}commitPendingValue(t){}clearPendingEdit(){}static ɵfac=function(e){return new(e||i)};static ɵdir=pe({type:i,hostVars:7,hostBindings:function(e,n){e&1&&br(`pointerdown`,function(){return n.onControlPointerDown()}),e&2&&(Hy(`hidden`,n.hidden()),ka$1(`display`,n.hidden()?`none`:null),tr(`bx-readonly`,n.isReadonly())(`is-keyboard-focused`,n.keyboardFocused()))},inputs:{id:[1,`id`],label:[1,`label`],placeholder:[1,`placeholder`],tooltip:[1,`tooltip`],hint:[1,`hint`],hintEnd:[1,`hintEnd`],error:[1,`error`],ariaLabel:[1,`ariaLabel`],ariaLabelledBy:[1,`ariaLabelledBy`],ariaDescribedBy:[1,`ariaDescribedBy`],dataTestId:[1,`dataTestId`],name:[1,`name`],errors:[1,`errors`],invalid:[1,`invalid`],pending:[1,`pending`],touched:[1,`touched`],dirty:[1,`dirty`],disabled:[1,`disabled`],readonly:[1,`readonly`],readOnly:[1,`readOnly`],hidden:[1,`hidden`],required:[1,`required`],loading:[1,`loading`],disabledReasons:[1,`disabledReasons`],submitted:[1,`submitted`],errorMessages:[1,`errorMessages`],errorPriority:[1,`errorPriority`],errorPolicy:[1,`errorPolicy`],errorMode:[1,`errorMode`],appearance:[1,`appearance`],floatLabel:[1,`floatLabel`],hideRequiredMarker:[1,`hideRequiredMarker`],subscriptSizing:[1,`subscriptSizing`],tooltipOnTruncate:[1,`tooltipOnTruncate`]},outputs:{touch:`touch`}})};var It=class i extends Je{draft=z(void 0);displayedChecked=U(()=>this.draft()??this.checked());checked=yz(!1);labelPosition=re(`after`);reset(){super.reset(),this.draft.set(void 0)}clearPendingEdit(){this.draft.set(void 0)}commitPendingValue(t){let e=this.draft();e===void 0||t===`blur`&&this.ngControl?.control?.updateOn===`submit`||(this.checked.set(e),this.draft.set(void 0))}onToggle(t){let e=t.target;if(this.disabled()||this.isReadonly()){e.checked=this.checked();return}let n=this.ngControl?.control?.updateOn;n===`blur`||n===`submit`?this.draft.set(e.checked):this.checked.set(e.checked)}onReadonlyClick(t){this.isReadonly()&&t.preventDefault()}onBlur(){this.markAsTouched()}static ɵfac=(()=>{let t;return function(n){return(t||(t=ho$1(i)))(n||i)}})();static ɵdir=pe({type:i,inputs:{checked:[1,`checked`],labelPosition:[1,`labelPosition`]},outputs:{checked:`checkedChange`},features:[xt]})};var Ia=[`*`,[[`bx-error`]],[[`bx-hint`]]];var Da=[`*`,`bx-error`,`bx-hint`];var Ea=[`ngProjectAs`,`bx-error`,5,[`bx-error`]];var Ra=[`ngProjectAs`,`bx-hint`,5,[`bx-hint`]];function La(i,t){i&1&&(bo$1(0,`span`,5),aA(1,`*`),Go$1())}var po=class i extends It{indeterminate=yz(!1);clickAction=re(`check-indeterminate`);emissive=re(!0);onToggle(t){if(this.clickAction()===`noop`){t.target.checked=this.displayedChecked(),t.target.indeterminate=this.indeterminate();return}super.onToggle(t),this.clickAction()===`check`&&(t.target.indeterminate=this.indeterminate()),!this.disabled()&&!this.isReadonly()&&this.clickAction()===`check-indeterminate`&&this.indeterminate.set(!1)}static ɵfac=(()=>{let t;return function(n){return(t||(t=ho$1(i)))(n||i)}})();static ɵcmp=Fr({type:i,selectors:[[`bx-checkbox`]],inputs:{indeterminate:[1,`indeterminate`],clickAction:[1,`clickAction`],emissive:[1,`emissive`]},outputs:{indeterminate:`indeterminateChange`},features:[xt],ngContentSelectors:Da,decls:10,vars:35,consts:[[3,`control`,`inline`,`tooltip`,`loading`,`hint`,`hintEnd`,`subscriptSizing`,`forId`],[1,`bx-inline-wrapper`],[`type`,`checkbox`,1,`bx-visually-hidden`,3,`click`,`change`,`blur`,`id`,`disabled`,`required`,`checked`,`indeterminate`],[3,`checked`,`indeterminate`,`invalid`,`disabled`,`emissive`],[1,`bx-inline-label`],[`aria-hidden`,`true`,1,`bx-inline-required`]],template:function(e,n){e&1&&($y(Ia),bo$1(0,`bx-form-field`,0)(1,`label`,1)(2,`input`,2),br(`click`,function(o){return n.onReadonlyClick(o)})(`change`,function(o){return n.onToggle(o)})(`blur`,function(){return n.onBlur()}),Go$1(),td$1(3,`bx-checkbox-indicator`,3),bo$1(4,`span`,4),Gy(5),aA(6),tb(7,La,2,0,`span`,5),Go$1()(),Gy(8,1,Ea),Gy(9,2,Ra),Go$1()),e&2&&($o$1(`control`,n.fieldControl)(`inline`,!0)(`tooltip`,n.tooltip())(`loading`,n.loading())(`hint`,n.hint())(`hintEnd`,n.hintEnd())(`subscriptSizing`,n.resolvedSubscriptSizing())(`forId`,n.controlId()),qs$1(),tr(`is-disabled`,n.disabled())(`is-readonly`,n.isReadonly())(`is-keyboard-focused`,n.keyboardFocused())(`label-before`,n.labelPosition()===`before`),qs$1(),$o$1(`id`,n.controlId())(`disabled`,n.disabled())(`required`,n.effectiveRequired())(`checked`,n.displayedChecked())(`indeterminate`,n.indeterminate()),vo$1(`name`,n.name()||null)(`data-testid`,n.dataTestId())(`aria-label`,n.ariaLabel())(`aria-labelledby`,n.ariaLabelledBy())(`aria-describedby`,n.describedBy())(`aria-invalid`,n.showError())(`aria-readonly`,n.isReadonly()),qs$1(),$o$1(`checked`,n.displayedChecked())(`indeterminate`,n.indeterminate())(`invalid`,n.showError())(`disabled`,n.disabled())(`emissive`,n.emissive()),qs$1(3),ub(``,n.resolvedLabel(),` `),qs$1(),ob(n.effectiveRequired()&&!n.resolvedHideRequiredMarker()?7:-1))},dependencies:[ee,Pt],styles:[`
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
}`]})};var fo=Symbol(`FIELD_TREE`);var xi=0;function Aa(){return xi}function et(i,t){return(...e)=>{try{return xi=t,i(...e)}finally{xi=0}}}function Fa(i){return!i}function bo(i){return i}function ze(i){return Array.isArray(i)}function Tn(i){return(typeof i==`object`||typeof i==`function`)&&i!=null}var dt=Symbol();var Ln=Symbol();var Zt=class{predicates;fns=[];constructor(t){this.predicates=t}push(t){this.fns.push(mo(this.predicates,t))}mergeIn(t){let e=this.predicates?t.fns.map(n=>mo(this.predicates,n)):t.fns;this.fns.push(...e)}hasRules(){return this.fns.length>0}};var Pn=class extends Zt{get defaultValue(){return!1}compute(t){return this.fns.some(e=>{let n=e(t);return n&&n!==Ln})}};var Et=class i extends Zt{ignore;static ignoreNull(t){return new i(t,e=>e===null)}constructor(t,e){super(t),this.ignore=e}get defaultValue(){return[]}compute(t){return this.fns.reduce((e,n)=>{let r=n(t);return r===void 0||r===Ln?e:ze(r)?[...e,...this.ignore?r.filter(o=>!this.ignore(o)):r]:this.ignore&&this.ignore(r)?e:[...e,r]},[])}};var vi=class extends Et{constructor(t){super(t,void 0)}};var yi=class extends Zt{key;get defaultValue(){return this.key.reducer.getInitial()}constructor(t,e){super(t),this.key=e}compute(t){if(this.fns.length===0)return this.key.reducer.getInitial();let e=this.key.reducer.getInitial();for(let n=0;n<this.fns.length;n++){let r=this.fns[n](t);r!==Ln&&(e=this.key.reducer.reduce(e,r))}return e}};function mo(i,t){return i.length===0?t:e=>{for(let n of i){let r=e.stateOf(n.path),o=de(r.structure.pathKeys).length-n.depth;for(let a=0;a<o;a++)r=r.structure.parent;if(!n.fn(r.context))return Ln}return t(e)}}var Rt=class{predicates;hidden;disabledReasons;readonly;syncErrors;syncTreeErrors;asyncErrors;metadata=/* @__PURE__ */ new Map;constructor(t){this.predicates=t,this.hidden=new Pn(t),this.disabledReasons=new vi(t),this.readonly=new Pn(t),this.syncErrors=Et.ignoreNull(t),this.syncTreeErrors=Et.ignoreNull(t),this.asyncErrors=Et.ignoreNull(t)}hasAnyLogic(){return this.hidden.hasRules()||this.disabledReasons.hasRules()||this.readonly.hasRules()||this.syncErrors.hasRules()||this.syncTreeErrors.hasRules()||this.asyncErrors.hasRules()||this.metadata.size>0}hasMetadata(t){return this.metadata.has(t)}hasMetadataKeys(){return this.metadata.size>0}getMetadataKeys(){return this.metadata.keys()}getMetadata(t){return this.metadata.has(t)||this.metadata.set(t,new yi(this.predicates,t)),this.metadata.get(t)}mergeIn(t){this.hidden.mergeIn(t.hidden),this.disabledReasons.mergeIn(t.disabledReasons),this.readonly.mergeIn(t.readonly),this.syncErrors.mergeIn(t.syncErrors),this.syncTreeErrors.mergeIn(t.syncTreeErrors),this.asyncErrors.mergeIn(t.asyncErrors);for(let e of t.getMetadataKeys()){let n=t.metadata.get(e);this.getMetadata(e).mergeIn(n)}}};var On=class{depth;constructor(t){this.depth=t}build(){return new kn(this,[],0)}};var Lt=class i extends On{constructor(t){super(t)}current;all=[];addHiddenRule(t){this.getCurrent().addHiddenRule(t)}addDisabledReasonRule(t){this.getCurrent().addDisabledReasonRule(t)}addReadonlyRule(t){this.getCurrent().addReadonlyRule(t)}addSyncErrorRule(t){this.getCurrent().addSyncErrorRule(t)}addSyncTreeErrorRule(t){this.getCurrent().addSyncTreeErrorRule(t)}addAsyncErrorRule(t){this.getCurrent().addAsyncErrorRule(t)}addMetadataRule(t,e){this.getCurrent().addMetadataRule(t,e)}getChild(t){if(t===dt){let e=this.getCurrent().children;e.size>(e.has(dt)?1:0)&&(this.current=void 0)}return this.getCurrent().getChild(t)}hasLogic(t){return this===t?!0:this.all.some(({builder:e})=>e.hasLogic(t))}hasRules(){return this.all.length>0}anyChildHasLogic(){return this.all.some(({builder:t})=>t.anyChildHasLogic())}mergeIn(t,e){e?this.all.push({builder:t,predicate:{fn:et(e.fn,this.depth),path:e.path}}):this.all.push({builder:t}),this.current=void 0}getCurrent(){return this.current===void 0&&(this.current=new Xt(this.depth),this.all.push({builder:this.current})),this.current}static newRoot(){return new i(0)}};var Xt=class extends On{logic=new Rt([]);children=/* @__PURE__ */ new Map;constructor(t){super(t)}addHiddenRule(t){this.logic.hidden.push(et(t,this.depth))}addDisabledReasonRule(t){this.logic.disabledReasons.push(et(t,this.depth))}addReadonlyRule(t){this.logic.readonly.push(et(t,this.depth))}addSyncErrorRule(t){this.logic.syncErrors.push(et(t,this.depth))}addSyncTreeErrorRule(t){this.logic.syncTreeErrors.push(et(t,this.depth))}addAsyncErrorRule(t){this.logic.asyncErrors.push(et(t,this.depth))}addMetadataRule(t,e){this.logic.getMetadata(t).push(et(e,this.depth))}getChild(t){return this.children.has(t)||this.children.set(t,new Lt(this.depth+1)),this.children.get(t)}hasLogic(t){return this===t}hasRules(){return this.logic.hasAnyLogic()||this.children.size>0}anyChildHasLogic(){for(let t of this.children.values())if(t.hasRules())return!0;return!1}};var kn=class i{builder;predicates;depth;logic;constructor(t,e,n){this.builder=t,this.predicates=e,this.depth=n,this.logic=t?Va(t,e,n):new Rt([])}getChild(t){let e=this.builder?xo(this.builder,t):[];if(e.length===0)return new i(void 0,[],this.depth+1);if(e.length===1){let{builder:n,predicates:r}=e[0];return new i(n,[...this.predicates,...r.map(o=>_i(o,this.depth))],this.depth+1)}else return new Si(e.map(({builder:r,predicates:o})=>new i(r,[...this.predicates,...o.map(a=>_i(a,this.depth))],this.depth+1)))}hasLogic(t){return this.builder?this.builder.hasLogic(t):!1}hasRules(){return this.builder?this.builder.hasRules():!1}anyChildHasLogic(){return this.builder?this.builder.anyChildHasLogic():!1}};var Si=class i{all;logic;constructor(t){this.all=t,this.logic=new Rt([]);for(let e of t)this.logic.mergeIn(e.logic)}getChild(t){return new i(this.all.flatMap(e=>e.getChild(t)))}hasLogic(t){return this.all.some(e=>e.hasLogic(t))}hasRules(){return this.all.some(t=>t.hasRules())}anyChildHasLogic(){return this.all.some(t=>t.anyChildHasLogic())}};function xo(i,t){if(i instanceof Lt)return i.all.flatMap(({builder:e,predicate:n})=>{let r=xo(e,t);return n?r.map(({builder:o,predicates:a})=>({builder:o,predicates:[...a,n]})):r});if(i instanceof Xt)return[...t!==dt&&i.children.has(dt)?[{builder:i.getChild(dt),predicates:[]}]:[],...i.children.has(t)?[{builder:i.getChild(t),predicates:[]}]:[]];throw new j(1909,!1)}function Va(i,t,e){let n=new Rt(t);if(i instanceof Lt){let r=i.all.map(({builder:o,predicate:a})=>new kn(o,a?[...t,_i(a,e)]:t,e));for(let o of r)n.mergeIn(o.logic)}else if(i instanceof Xt)n.mergeIn(i.logic);else throw new j(1909,!1);return n}function _i(i,t){return s(r({},i),{depth:t})}var vo=Symbol(`PATH`);var De=class i{keys;parent;keyInParent;root;children=/* @__PURE__ */ new Map;fieldPathProxy=new Proxy(this,za);logicBuilder;constructor(t,e,n,r){this.keys=t,this.parent=n,this.keyInParent=r,this.root=e??this,n||(this.logicBuilder=Lt.newRoot())}get builder(){return this.logicBuilder?this.logicBuilder:this.parent.builder.getChild(this.keyInParent)}getChild(t){return this.children.has(t)||this.children.set(t,new i([...this.keys,t],this.root,this,t)),this.children.get(t)}mergeIn(t,e){let n=t.compile();this.builder.mergeIn(n.builder,e)}static unwrapFieldPath(t){return t[vo]}static newRoot(){return new i([],void 0,void 0,void 0)}};var za={get(i,t){return t===vo?i:i.getChild(t).fieldPathProxy}};var Nn;var Kt=/* @__PURE__ */ new Map;var In=class i{schemaFn;constructor(t){this.schemaFn=t}compile(){if(Kt.has(this))return Kt.get(this);let t=De.newRoot();Kt.set(this,t);let e=Nn;try{Nn=t,this.schemaFn(t.fieldPathProxy)}finally{Nn=e}return t}static create(t){return t instanceof i?t:new i(t)}static rootCompile(t){try{return Kt.clear(),t===void 0?De.newRoot():t instanceof i?t.compile():new i(t).compile()}finally{Kt.clear()}}};function Ba(i){return i instanceof In||typeof i==`function`}function ct(i){if(Nn!==De.unwrapFieldPath(i).root)throw new j(1908,!1)}function Re(i,t,e){return ct(i),De.unwrapFieldPath(i).builder.addMetadataRule(t,e),t}var Ke={list(){return{reduce:(i,t)=>t===void 0?i:[...i,t],getInitial:()=>[]}},min(){return{reduce:(i,t)=>i===void 0||t===void 0?i??t:t<i?t:i,getInitial:()=>{}}},max(){return{reduce:(i,t)=>i===void 0||t===void 0?i??t:t>i?t:i,getInitial:()=>{}}},or(){return{reduce:(i,t)=>i||t,getInitial:()=>!1}},and(){return{reduce:(i,t)=>i&&t,getInitial:()=>!0}},override:Ha};function Ha(i){return{reduce:(t,e)=>e,getInitial:()=>i?.()}}var An=Symbol(`IS_ASYNC_VALIDATION_RESOURCE`);var Ut=class{reducer;create;brand;[An];constructor(t,e){this.reducer=t,this.create=e}};function Ee(i){return new Ut(i??Ke.override())}function yo(i,t){return new Ut(t??Ke.override(),i)}function Di(){return Ee()}var Ei=Ee(Ke.or());var Ri=Di();var Li=Ee(Ke.max());var Ai=Di();var Fi=Ee(Ke.min());var Vi=Ee(Ke.max());var So=Ee(Ke.min());var _o=Ee(Ke.list());function Ie(i,t){if(i===t)return!0;if(!i||!t||i.length!==t.length)return!1;for(let e=0;e<i.length;e++)if(!Object.is(i[e],t[e]))return!1;return!0}function Wa(i){return i.errors().length>0?`invalid`:i.pending()?`unknown`:`valid`}var Ci=class{node;constructor(t){this.node=t}rawSyncTreeErrors=U(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.syncTreeErrors.compute(this.node.context),...this.node.structure.parent?.validationState.rawSyncTreeErrors()??[]],{equal:Ie});syncErrors=U(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.syncErrors.compute(this.node.context),...this.syncTreeErrors(),...qa(this.node.submitState.submissionErrors())],{equal:Ie});syncValid=U(()=>this.shouldSkipValidation()?!0:this.node.structure.reduceChildren(this.syncErrors().length===0,(t,e)=>e&&t.validationState.syncValid(),Fa));syncTreeErrors=U(()=>this.rawSyncTreeErrors().filter(t=>t.fieldTree===this.node.fieldTree),{equal:Ie});rawAsyncErrors=U(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.asyncErrors.compute(this.node.context),...this.node.structure.parent?.validationState.rawAsyncErrors()??[]],{equal:Ie});asyncErrors=U(()=>this.shouldSkipValidation()?[]:this.rawAsyncErrors().filter(t=>t===`pending`||t.fieldTree===this.node.fieldTree),{equal:Ie});parseErrors=U(()=>this.node.formFieldBindings().flatMap(t=>t.parseErrors()),{equal:Ie});errors=U(()=>[...this.parseErrors(),...this.syncErrors(),...this.asyncErrors().filter(t=>t!==`pending`)],{equal:Ie});errorSummary=U(()=>{let t=this.node.structure.reduceChildren(this.errors(),(e,n)=>[...n,...e.errorSummary()]);return de(()=>t.sort(ja)),t},{equal:Ie});pending=U(()=>this.node.structure.reduceChildren(this.asyncErrors().includes(`pending`),(t,e)=>e||t.validationState.pending()));status=U(()=>{if(this.shouldSkipValidation())return`valid`;let t=Wa(this);return this.node.structure.reduceChildren(t,(e,n)=>n===`invalid`||e.validationState.status()===`invalid`?`invalid`:n===`unknown`||e.validationState.status()===`unknown`?`unknown`:`valid`,e=>e===`invalid`)});valid=U(()=>this.status()===`valid`);invalid=U(()=>this.status()===`invalid`);shouldSkipValidation=U(()=>this.node.hidden()||this.node.disabled()||this.node.readonly()||this.node.structure.isOrphaned())};function qa(i){return i===void 0?[]:ze(i)?i:[i]}function Qt(i,t){if(ze(i))for(let e of i)e.fieldTree??=t;else i&&(i.fieldTree??=t);return i}function go(i){return i.formField?i.formField.element:i.fieldTree().formFieldBindings().reduce((t,e)=>!t||!e.element?t??e.element:t.compareDocumentPosition(e.element)&Node.DOCUMENT_POSITION_PRECEDING?e.element:t,void 0)}function ja(i,t){let e=go(i),n=go(t);return e===n?0:e===void 0||n===void 0?e===void 0?1:-1:e.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_PRECEDING?1:-1}var Dn=Ee();var Mi=class{node;cache=/* @__PURE__ */ new WeakMap;constructor(t){this.node=t,this.fieldTreeOf=this.fieldTreeOf.bind(this),this.stateOf=this.stateOf.bind(this)}resolve(t){if(!this.cache.has(t)){let e=U(()=>{let n=De.unwrapFieldPath(t),r=this.node,o=Aa();for(;o>0||!r.structure.logic.hasLogic(n.root.builder);)if(o--,r=r.structure.parent,r===void 0)throw new j(1900,!1);for(let a of n.keys)if(r=r.structure.getChild(a),r===void 0)throw new j(1901,!1);return r.fieldTree});this.cache.set(t,e)}return this.cache.get(t)()}get fieldTree(){return this.node.fieldProxy}get state(){return this.node}get value(){return this.node.structure.value}get key(){return this.node.structure.keyInParent}get pathKeys(){return this.node.structure.pathKeys}index=U(()=>{let t=this.key();if(!ze(de(this.node.structure.parent.value)))throw new j(1906,!1);return Number(t)});fieldTreeOf(t){return this.resolve(t)}stateOf(t){return this.resolve(t)()}valueOf=t=>{let e=this.resolve(t)().value();if(e instanceof gu$1)throw new j(1907,!1);return e}};var wi=class{node;metadata=/* @__PURE__ */ new Map;constructor(t){this.node=t}runMetadataCreateLifecycle(){if(!this.node.logicNode.logic.hasMetadataKeys())return;let t=xb();t&&xo$1(!1);try{de(()=>Qc$1(this.node.structure.injector,()=>{for(let e of this.node.logicNode.logic.getMetadataKeys())if(e.create){let n=this.node.logicNode.logic.getMetadata(e),r=e.create(this.node,U(()=>n.compute(this.node.context)));this.metadata.set(e,r)}}))}finally{t&&xo$1(!0)}}get(t){if(this.has(t)&&!this.metadata.has(t)){if(t.create)throw new j(1912,!1);let e=this.node.logicNode.logic.getMetadata(t);this.metadata.set(t,U(()=>e.compute(this.node.context)))}return this.metadata.get(t)}has(t){return this.node.logicNode.logic.hasMetadata(t)}};var $a={get(i,t,e){if(t===fo)return!0;let n=i(),r=n.structure.getChild(t);if(r!==void 0)return r.fieldTree;let o=de(n.value);if(ze(o)){if(t===`length`)return n.value().length;if(t===Symbol.iterator)return()=>(n.value(),Array.prototype[Symbol.iterator].apply(n.fieldTree))}if(Tn(o)&&t===Symbol.iterator)return function*(){for(let a in e)yield[a,e[a]]}},getOwnPropertyDescriptor(i,t){let e=de(i().value),n=Reflect.getOwnPropertyDescriptor(e,t);return n&&!n.configurable&&(n.configurable=!0),n},ownKeys(i){let t=de(i().value);return typeof t==`object`&&t!==null?Reflect.ownKeys(t):[]}};function Ga(i,t){let e=U(()=>i()[t()]);return e[ze$1]=i[ze$1],e.set=n=>{Object.is(de(e),n)||i.update(r=>Ka(r,n,t()))},e.update=n=>{e.set(n(de(e)))},e.asReadonly=()=>e,e}function Ka(i,t,e){if(ze(i)){let n=[...i];return n[e]=t,n}else return s(r({},i),{[e]:t})}var Dt=Symbol(``);var Co=U(()=>!1);var En=class{logic;node;createChildNode;identitySymbol=Symbol();_injector=void 0;_anyChildHasLogic;get injector(){return this._injector??=ie.create({providers:[],parent:this.fieldManager.injector}),this._injector}constructor(t,e,n){this.logic=t,this.node=e,this.createChildNode=n}children(){this.ensureChildrenMap();let t=this.childrenMap();return t===void 0?[]:Array.from(t.byPropertyKey.values()).map(e=>de(e.reader))}materializedChildren(){let t=this.childrenMap();return t===void 0?[]:Array.from(t.byPropertyKey.values()).map(e=>e.node)}_areChildrenMaterialized(){return de(this.childrenMap)!==void 0}ensureChildrenMap(){this._areChildrenMaterialized()||de(()=>{this.childrenMap.update(t=>this.computeChildrenMap(this.value(),t,!0))})}getChild(t){this.ensureChildrenMap();let e=t.toString(),n=de(this.childrenMap)?.byPropertyKey.get(e)?.reader;return n||(n=this.createReader(e)),n()}reduceChildren(t,e,n){let r=this.childrenMap();if(!r)return t;let o=t;for(let a of r.byPropertyKey.values()){if(n?.(o))break;o=e(de(a.reader),o)}return o}destroy(){this.injector.destroy()}createKeyOrOrphanSignals(t,e,n){if(t===`root`)return{keyInParent:Mo,isOrphaned:Co};let r=this.parent,o=n,a=U(()=>{if(r.structure.isOrphaned())return Dt;let S=r.structure.childrenMap();if(!S)return Dt;let P=S.byPropertyKey.get(o);if(P&&P.node===this.node)return o;if(e===void 0)return Dt;for(let[O,D]of S.byPropertyKey)if(D.node===this.node)return o=O;return Dt}),u=U(()=>a()===Dt);return{keyInParent:U(()=>{let S=a();if(S===Dt)throw e===void 0?new j(-1902,!1):new j(1904,!1);return S}),isOrphaned:u}}createChildrenMap(){return dd$1({source:this.value,computation:(t,e)=>this.computeChildrenMap(t,e?.value,!1)})}computeChildrenMap(t,e,n){if(!Tn(t)||!n&&e===void 0&&!(this._anyChildHasLogic??=this.logic.anyChildHasLogic()))return;e??={byPropertyKey:/* @__PURE__ */ new Map};let r$2,o=ze(t);e!==void 0&&(o?r$2=Xa(e,t,this.identitySymbol):r$2=Ua(e,t));for(let a of Object.keys(t)){let u,g=t[a];if(g===void 0){e.byPropertyKey.has(a)&&(r$2??=r({},e),r$2.byPropertyKey.delete(a));continue}o&&Tn(g)&&!ze(g)&&(u=g[this.identitySymbol]??=Symbol(``));let S;u&&(e.byTrackingKey?.has(u)||(r$2??=r({},e),r$2.byTrackingKey??=/* @__PURE__ */ new Map,r$2.byTrackingKey.set(u,this.createChildNode(a,u,o))),S=(r$2??e).byTrackingKey.get(u));let P=e.byPropertyKey.get(a);P===void 0?(r$2??=r({},e),r$2.byPropertyKey.set(a,{reader:this.createReader(a),node:S??this.createChildNode(a,u,o)})):S&&S!==P.node&&(r$2??=r({},e),P.node=S)}return r$2??e}createReader(t){return U(()=>this.childrenMap()?.byPropertyKey.get(t)?.node)}};var Ni=class extends En{fieldManager;value;get parent(){}get root(){return this.node}get pathKeys(){return Za}get keyInParent(){return Mo}isOrphaned=Co;childrenMap;constructor(t,e,n,r,o){super(e,t,o),this.fieldManager=n,this.value=r,this.childrenMap=this.createChildrenMap()}};var Ti=class extends En{logic;parent;root;pathKeys;keyInParent;value;childrenMap;isOrphaned;get fieldManager(){return this.root.structure.fieldManager}constructor(t,e,n,r,o,a){super(e,t,a),this.logic=e,this.parent=n,this.root=this.parent.structure.root;let u=this.createKeyOrOrphanSignals(`child`,r,o);this.isOrphaned=u.isOrphaned,this.keyInParent=u.keyInParent,this.pathKeys=U(()=>[...n.structure.pathKeys(),this.keyInParent()]),this.value=Ga(this.parent.structure.value,this.keyInParent),this.childrenMap=this.createChildrenMap(),this.fieldManager.structures.add(this)}};var Za=U(()=>[]);var Mo=U(()=>{throw new j(1905,!1)});function Xa(i,t,e){let n,r$3=new Set(i.byPropertyKey.keys()),o=i.byTrackingKey&&new Set(i.byTrackingKey.keys());for(let a=0;a<t.length;a++){let u=t[a];r$3.delete(a.toString()),o&&Tn(u)&&Object.hasOwn(u,e)&&o.delete(u[e])}if(r$3.size>0){n??=r({},i);for(let a of r$3)n.byPropertyKey.delete(a)}if(o&&o.size>0){n??=r({},i);for(let a of o)n.byTrackingKey.delete(a)}return n}function Ua(i,t){let e;for(let n of i.byPropertyKey.keys())Object.hasOwn(t,n)||(e??=r({},i),e.byPropertyKey.delete(n));return e}var Pi=class{node;selfSubmitting=z(!1);submissionErrors;constructor(t){this.node=t,this.submissionErrors=dd$1({source:this.node.structure.value,computation:()=>[]})}submitting=U(()=>this.selfSubmitting()||(this.node.structure.parent?.submitting()??!1))};var Yt=class{structure;validationState;metadataState;nodeState;submitState;fieldAdapter;controlValue;_context=void 0;get context(){return this._context??=new Mi(this)}fieldProxy=new Proxy(()=>this,$a);pathNode;constructor(t){this.pathNode=t.pathNode,this.fieldAdapter=t.fieldAdapter,this.structure=this.fieldAdapter.createStructure(this,t),this.validationState=this.fieldAdapter.createValidationState(this,t),this.nodeState=this.fieldAdapter.createNodeState(this,t),this.metadataState=new wi(this),this.submitState=new Pi(this),this.controlValue=this.controlValueSignal(),this.metadataState.runMetadataCreateLifecycle()}focusBoundControl(t){this.getBindingForFocus()?.focus(t)}getBindingForFocus(){return this.formFieldBindings().filter(e=>e.focus!==void 0).reduce(ho,void 0)||this.structure.children().map(e=>e.getBindingForFocus()).reduce(ho,void 0)}pendingSync=dd$1({source:()=>this.value(),computation:(t,e)=>{e?.value?.abort()}});get fieldTree(){return this.fieldProxy}get logicNode(){return this.structure.logic}get value(){return this.structure.value}get keyInParent(){return this.structure.keyInParent}get errors(){return this.validationState.errors}get parseErrors(){return this.validationState.parseErrors}get errorSummary(){return this.validationState.errorSummary}get pending(){return this.validationState.pending}get valid(){return this.validationState.valid}get invalid(){return this.validationState.invalid}get dirty(){return this.nodeState.dirty}get touched(){return this.nodeState.touched}get disabled(){return this.nodeState.disabled}get disabledReasons(){return this.nodeState.disabledReasons}get hidden(){return this.nodeState.hidden}get readonly(){return this.nodeState.readonly}get formFieldBindings(){return this.nodeState.formFieldBindings}get submitting(){return this.submitState.submitting}get name(){return this.nodeState.name}get max(){let t=this.metadata(Ai)?.();return t?this.metadata(t):void 0}get maxLength(){return this.metadata(So)}get min(){let t=this.metadata(Ri)?.();return t?this.metadata(t):void 0}get minLength(){return this.metadata(Vi)}get pattern(){return this.metadata(_o)??Ya}get required(){return this.metadata(Ei)??Qa}metadata(t){return this.metadataState.get(t)}getError(t){return this.errors().find(e=>e.kind===t)}hasMetadata(t){return this.metadataState.has(t)}markAsTouched(t){this.structure.isOrphaned()||de(()=>{this.markAsTouchedInternal(t),this.flushSync()})}markAsTouchedInternal(t){if(!this.structure.isOrphaned()&&!this.validationState.shouldSkipValidation()&&(this.nodeState.markAsTouched(),!t?.skipDescendants))for(let e of this.structure.children())e.markAsTouchedInternal()}markAsDirty(){this.nodeState.markAsDirty()}markAsPristine(){this.nodeState.markAsPristine()}markAsUntouched(){this.nodeState.markAsUntouched()}reset(t){de(()=>this._reset(t))}_reset(t){this.pendingSync()?.abort(),t!==void 0&&this.value.set(t),this.controlValue.rawSet(this.value()),this.nodeState.markAsUntouched(),this.nodeState.markAsPristine();for(let e of this.formFieldBindings())e.reset();for(let e of this.structure.materializedChildren())e._reset()}reloadValidation(){de(()=>this._reloadValidation())}_reloadValidation(){let t=this.logicNode.logic.getMetadataKeys();for(let e of t)e[An]&&this.metadata(e).reload?.();for(let e of this.structure.children())e._reloadValidation()}controlValueSignal(){let t=dd$1(this.value);t.rawSet=t.set,t.set=n=>{t.rawSet(n),this.markAsDirty(),this.debounceSync()};let e=t.update;return t.update=n=>{e(n),this.markAsDirty(),this.debounceSync()},t}sync(){this.value.set(this.controlValue())}flushSync(){let t=this.pendingSync();t&&!t.signal.aborted&&(t.abort(),this.sync())}async debounceSync(){let t=de(()=>(this.pendingSync()?.abort(),this.nodeState.debouncer()));if(t){let e=new AbortController,n=t(e.signal);if(n&&(this.pendingSync.set(e),await n,e.signal.aborted))return}this.structure.isOrphaned()||this.sync()}static newRoot(t,e,n,r){return r.newRoot(t,e,n,r)}createStructure(t){return t.kind===`root`?new Ni(this,t.logic,t.fieldManager,t.value,this.newChild.bind(this)):new Ti(this,t.logic,t.parent,t.identityInParent,t.initialKeyInParent,this.newChild.bind(this))}newChild(t,e,n){let r,o;return n?(r=this.pathNode.getChild(dt),o=this.structure.logic.getChild(dt)):(r=this.pathNode.getChild(t),o=this.structure.logic.getChild(t)),this.fieldAdapter.newChild({kind:`child`,parent:this,pathNode:r,logic:o,initialKeyInParent:t,identityInParent:e,fieldAdapter:this.fieldAdapter})}};var Ya=U(()=>[]);var Qa=U(()=>!1);function ho(i,t){return i?t&&i.element.compareDocumentPosition(t.element)&Node.DOCUMENT_POSITION_PRECEDING?t:i:t}var Oi=class{node;selfTouched=z(!1);selfDirty=z(!1);markAsTouched(){this.selfTouched.set(!0)}markAsDirty(){this.selfDirty.set(!0)}markAsPristine(){this.selfDirty.set(!1)}markAsUntouched(){this.selfTouched.set(!1)}formFieldBindings=z([]);constructor(t){this.node=t}dirty=U(()=>{let t=this.selfDirty()&&!this.isNonInteractive();return this.node.structure.reduceChildren(t,(e,n)=>n||e.nodeState.dirty(),bo)});touched=U(()=>{let t=this.selfTouched()&&!this.isNonInteractive();return this.node.structure.reduceChildren(t,(e,n)=>n||e.nodeState.touched(),bo)});disabledReasons=U(()=>[...this.node.structure.parent?.nodeState.disabledReasons()??[],...this.node.logicNode.logic.disabledReasons.compute(this.node.context)],{equal:Ie});disabled=U(()=>!!this.disabledReasons().length);readonly=U(()=>(this.node.structure.parent?.nodeState.readonly()||this.node.logicNode.logic.readonly.compute(this.node.context))??!1);hidden=U(()=>(this.node.structure.parent?.nodeState.hidden()||this.node.logicNode.logic.hidden.compute(this.node.context))??!1);name=U(()=>{let t=this.node.structure.parent;return t?`${t.name()}.${this.node.structure.keyInParent()}`:this.node.structure.fieldManager.rootName});debouncer=U(()=>{if(this.node.logicNode.logic.hasMetadata(Dn)){let e=this.node.logicNode.logic.getMetadata(Dn).compute(this.node.context);if(e)return n=>e(this.node.context,n)}return this.node.structure.parent?.nodeState.debouncer?.()});isNonInteractive=U(()=>this.hidden()||this.disabled()||this.readonly())};var ki=class{newRoot(t,e,n,r){return new Yt({kind:`root`,fieldManager:t,value:e,pathNode:n,logic:n.builder.build(),fieldAdapter:r})}newChild(t){return new Yt(t)}createNodeState(t){return new Oi(t)}createValidationState(t){return new Ci(t)}createStructure(t,e){return t.createStructure(e)}};var Ii=class{injector;rootName;submitOptions;constructor(t,e,n){this.injector=t,this.rootName=e??`${this.injector.get(Rr)}.form${Ja++}`,this.submitOptions=n}structures=/* @__PURE__ */ new Set;createFieldManagementEffect(t){$e(()=>{let e=/* @__PURE__ */ new Set;this.markStructuresLive(t,e);for(let n of this.structures)e.has(n)||(this.structures.delete(n),de(()=>n.destroy()))},{injector:this.injector})}markStructuresLive(t,e){e.add(t);for(let n of t.children())this.markStructuresLive(n.structure,e)}};var Ja=0;var wo=new T(``);function es(i){let t,e,n;return i.length===3?[t,e,n]=i:i.length===2?Ba(i[1])?[t,e]=i:[t,n]=i:[t]=i,[t,e,n]}function ts(...i){let[t,e,n]=es(i),r=n?.injector??b(ie),o=Qc$1(r,()=>In.rootCompile(e)),a=new Ii(r,n?.name,n?.submission),u=n?.adapter??new ki,g=Yt.newRoot(a,t,o,u);a.createFieldManagementEffect(g.structure);let{experimentalWebMcpTool:S}=n??{};if(S){let P=Qc$1(r,()=>b(wo,{optional:!0}));P&&Qc$1(r,()=>P(g.fieldTree,{name:S.name,description:S.description,annotations:S.annotations}))}return g.fieldTree}async function No(i,t){let e=de(i);if(de(e.submitState.submitting))return!1;let n=t===void 0?e.structure.root.fieldProxy:i,r={root:e.structure.root.fieldProxy,submitted:i};t=typeof t==`function`?{action:t}:t??e.structure.fieldManager.submitOptions;let o=t?.action;if(!o)throw new j(1915,!1);e.markAsTouched();let a=t?.onInvalid,u=ns(e,t?.ignoreValidators);try{if(u){e.submitState.selfSubmitting.set(!0);let g=await de(()=>o?.(n,r));return g&&is(e,g),!g||ze(g)&&g.length===0}else de(()=>a?.(n,r));return!1}finally{e.submitState.selfSubmitting.set(!1)}}function ns(i,t){switch(t){case`all`:return!0;case`none`:return de(i.valid);default:return!de(i.invalid)}}function is(i,t){ze(t)||(t=[t]);let e=/* @__PURE__ */ new Map;for(let n of t){let r=Qt(n,i.fieldTree),o=r.fieldTree(),a=e.get(o);a||(a=[],e.set(o,a)),a.push(r)}for(let[n,r]of e)n.submitState.submissionErrors.set(r)}var Rn=class{kind=`compat`;control;fieldTree;context;message;constructor({context:t,kind:e,control:n}){this.context=t,this.kind=e,this.control=n}};function To(i){if(i.length===0)return null;let t={};for(let e of i)t[e.kind]=e instanceof Rn?e.context:e;return t}function Po(i,t){return i===null?[]:Object.entries(i).map(([e,n])=>new Rn({context:n,kind:e,control:t}))}var os=new T(``);function Wb(i,t){ct(i);let e=De.unwrapFieldPath(i),n;typeof t==`function`||typeof t==`string`?n=t:n=t?.when,e.builder.addDisabledReasonRule(r=>{let o=!0;return typeof n==`string`?o=n:n&&(o=n(r)),typeof o==`string`?{fieldTree:r.fieldTree,message:o}:o?{fieldTree:r.fieldTree}:void 0})}function qb(i,t){ct(i);let e=De.unwrapFieldPath(i),n=typeof t==`function`?t:t?.when??(()=>!0);e.builder.addReadonlyRule(n)}function as(i){let t=i;return typeof t.length==`number`?t.length:t.size}function Be(i,t){return i instanceof Function?i(t):i}function Gi(i){return typeof i==`number`?isNaN(i):i===``||i===!1||i==null}function Oo(i){return i===void 0?[]:Array.isArray(i)?i:[i]}function Jt(i,t){ct(i),De.unwrapFieldPath(i).builder.addSyncErrorRule(n=>Qt(t(n),n.fieldTree))}function ss(i){return new zi(i)}function ls(i,t){return new Bi(i,t)}function ds(i,t){return new Hi(i,t)}function cs(i,t){return new Wi(i,t)}function us(i){return new qi(i)}var nt=class{__brand=void 0;kind=``;fieldTree;message;constructor(t){t&&Object.assign(this,t)}};var zi=class extends nt{kind=`required`};var Bi=class extends nt{min;kind=`min`;constructor(t,e){super(e),this.min=t}};var Hi=class extends nt{max;kind=`max`;constructor(t,e){super(e),this.max=t}};var Wi=class extends nt{minLength;kind=`minLength`;constructor(t,e){super(e),this.minLength=t}};var qi=class extends nt{kind=`email`};var Fn=class extends nt{kind=`parse`};var ps=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;function jb(i,t){Jt(i,e=>{if(!(t?.when&&!t.when(e))&&!Gi(e.value())&&!ps.test(e.value()))return t?.error?Be(t.error,e):us({message:Be(t?.message,e)})})}function $b(i,t,e){let n=Ee();Re(i,n,r=>{if(!(e?.when&&!e.when(r)))return typeof t==`function`?t(r):t}),Re(i,Fi,({state:r})=>r.metadata(n)()),Re(i,Ai,()=>Fi),Jt(i,r=>{let o=r.value();if(o===null||Number.isNaN(o))return;let a=r.state.metadata(n)();if(!(a===void 0||Number.isNaN(a))&&o>a)return e?.error?Be(e.error,r):ds(a,{message:Be(e?.message,r)})})}function Gb(i,t,e){let n=Ee();Re(i,n,r=>{if(!(e?.when&&!e.when(r)))return typeof t==`function`?t(r):t}),Re(i,Li,({state:r})=>r.metadata(n)()),Re(i,Ri,()=>Li),Jt(i,r=>{let o=r.value();if(o===null||Number.isNaN(o))return;let a=r.state.metadata(n)();if(!(a===void 0||Number.isNaN(a))&&o<a)return e?.error?Be(e.error,r):ls(a,{message:Be(e?.message,r)})})}function Kb(i,t,e){let n=Re(i,Ee(),r=>{if(!(e?.when&&!e.when(r)))return typeof t==`number`?t:t(r)});Re(i,Vi,({state:r})=>r.metadata(n)()),Jt(i,r=>{if(Gi(r.value()))return;let o=r.state.metadata(n)();if(o!==void 0&&as(r.value())<o)return e?.error?Be(e.error,r):cs(o,{message:Be(e?.message,r)})})}function Zb(i,t){let e=Re(i,Ee(),n=>t?.when?t.when(n):!0);Re(i,Ei,({state:n})=>n.metadata(e)()),Jt(i,n=>{if(n.state.metadata(e)()&&Gi(n.value()))return t?.error?Be(t.error,n):ss({message:Be(t?.message,n)})})}function Xb(i,t){ct(i);let e=De.unwrapFieldPath(i),n=yo((r,o)=>{if(t.debounce!==void 0){let a=_z(()=>o(),t.debounce),u=U(()=>Ek(a));return t.factory(u)}return t.factory(o)});n[An]=!0,Re(i,n,r=>{let a=r.stateOf(i).validationState;if(!(a.shouldSkipValidation()||!a.syncValid())&&!(t.when&&!t.when(r)))return t.params(r)}),e.builder.addAsyncErrorRule(r=>{let o=r.state.metadata(n),a;switch(o.status()){case`idle`:return;case`loading`:case`reloading`:return`pending`;case`resolved`:case`local`:return o.hasValue()?(a=t.onSuccess(o.value(),r),Qt(a,r.fieldTree)):void 0;case`error`:return a=t.onError(o.error(),r),Qt(a,r.fieldTree)}})}function Ub(i,t){ct(i);let e=De.unwrapFieldPath(i),n=bs(t);e.builder.addMetadataRule(Dn,()=>n)}function bs(i){return typeof i==`function`?i:i===`blur`?gs():i>0?ms(i):hs}function ms(i){return(t,e)=>new Promise(n=>{let r,o=()=>{clearTimeout(r),n()};r=setTimeout(()=>{e.removeEventListener(`abort`,o),n()},i),e.addEventListener(`abort`,o,{once:!0})})}function gs(){return(i,t)=>new Promise(e=>{t.addEventListener(`abort`,()=>e(),{once:!0})})}function hs(){}function Eo(i,t,e){let n=dd$1({source:i,computation:()=>[],equal:Ie}),r=a=>{let u=e(a);n.set(Oo(u.error)),u.value!==void 0&&t(u.value),n.set(Oo(u.error))},o=()=>{n.set([])};return{errors:n.asReadonly(),setRawValue:r,reset:o}}function Ro(i,t){let{parse:e,format:n}=t,r=Eo(i,i.set,e),o=dd$1(()=>n(i())),a=o;a.parseErrors=r.errors;let u=a.set.bind(a),g=b(KR,{self:!0,optional:!0});return g&&(g.setParseErrors(r.errors),g.onReset=S=>{r.reset();let P=S!==void 0?S:i();u(n(P))}),a.set=S=>{r.setRawValue(S),u(S)},a.update=S=>{a.set(S(o()))},a}var ji=class{field;constructor(t){this.field=t}control=this;get value(){return this.field().controlValue()}get valid(){return this.field().valid()}get invalid(){return this.field().invalid()}get pending(){return this.field().pending()}get disabled(){return this.field().disabled()}get enabled(){return!this.field().disabled()}get errors(){return To(this.field().errors())}get pristine(){return!this.field().dirty()}get dirty(){return this.field().dirty()}get touched(){return this.field().touched()}get untouched(){return!this.field().touched()}get status(){if(this.field().disabled())return`DISABLED`;if(this.field().valid())return`VALID`;if(this.field().invalid())return`INVALID`;if(this.field().pending())return`PENDING`;throw new j(1910,!1)}valueAccessor=null;hasValidator(t){return t===ai.required?this.field().required():!1}updateValueAndValidity(){}};var $i={disabled:`disabled`,disabledReasons:`disabledReasons`,dirty:`dirty`,errors:`errors`,hidden:`hidden`,invalid:`invalid`,max:`max`,maxLength:`maxLength`,min:`min`,minLength:`minLength`,name:`name`,pattern:`pattern`,pending:`pending`,readonly:`readonly`,required:`required`,touched:`touched`};var fs=(()=>{let i={};for(let t of Object.keys($i))i[$i[t]]=t;return i})();function Ki(i,t){return i[fs[t]]?.()}var Zi=Object.values($i);function Vn(){return{}}function tt(i,t,e){return Object.is(i[t],e)?!1:(i[t]=e,!0)}function xs(i,t,e){let n;if(Lo(i)&&e.isBadInput(i))return{error:new Fn};switch(i.type){case`checkbox`:return{value:i.checked};case`number`:case`range`:case`datetime-local`:if(n=de(t),typeof n==`number`||n===null)return{value:i.value===``?null:i.valueAsNumber};break;case`date`:case`month`:case`time`:case`week`:if(n=de(t),n===null||n instanceof Date)return{value:i.valueAsDate};if(typeof n==`number`)return{value:i.valueAsNumber}}if(i.tagName===`INPUT`&&i.type===`text`&&(n??=de(t),typeof n==`number`||n===null)){if(i.value===``)return{value:null};let r=Number(i.value);return Number.isNaN(r)?{error:new Fn}:{value:r}}return{value:i.value}}function ko(i,t){switch(i.type){case`checkbox`:i.checked=t;return;case`radio`:i.checked=t===i.value;return;case`number`:case`range`:case`datetime-local`:if(typeof t==`number`){Io(i,t);return}else if(t===null){i.value=``;return}break;case`date`:case`month`:case`time`:case`week`:if(t===null||t instanceof Date){i.valueAsDate=t;return}else if(typeof t==`number`){Io(i,t);return}}if(i.tagName===`INPUT`&&i.type===`text`){if(typeof t==`number`){i.value=isNaN(t)?``:String(t);return}if(t===null){i.value=``;return}}i.value=t}function Io(i,t){isNaN(t)?i.value=``:i.valueAsNumber=t}function Lo(i){return i.tagName===`INPUT`}function vs(i){return i.type===`date`||i.type===`datetime-local`||i.type===`month`||i.type===`time`||i.type===`week`}function ys(i,t){let e=i.getUTCFullYear(),n=String(i.getUTCMonth()+1).padStart(2,`0`);if(t===`month`)return`${e}-${n}`;return`${e}-${n}-${String(i.getUTCDate()).padStart(2,`0`)}`}function Ao(i,t,e){return t instanceof Date&&(i===`min`||i===`max`)&&(e===`date`||e===`month`)?ys(t,e):t}function Ss(i,t){i.listenToCustomControlModel(n=>t.state().controlValue.set(n)),i.listenToCustomControlOutput(`touch`,()=>t.state().markAsTouched()),t.registerAsBinding(i.customControl);let e=Vn();return()=>{let n=t.state(),r=n.controlValue();tt(e,`controlValue`,r)&&i.setCustomControlModelInput(r);for(let o of Zi){let a;if(o===`errors`?a=t.errors():a=Ki(n,o),tt(e,o,a)&&(i.setInputOnDirectives(o,a),t.elementAcceptsNativeProperty(o)&&!i.customControlHasInput(o))){let u=Ao(o,a,t.nativeFormElement.type);WR(t.renderer,t.nativeFormElement,o,u)}}}}function _s(i){return typeof i==`object`&&i!==null}function Cs(i,t){let e=Vn();t.controlValueAccessor.registerOnChange(r=>{e.controlValue=r,t.state().controlValue.set(r)}),t.controlValueAccessor.registerOnTouched(()=>t.state().markAsTouched());let n=t.injector.get(li,null,{optional:!0,self:!0});if(n){let r;for(let g of n)_s(g)&&g.registerOnValidatorChange&&(r??=z(0),g.registerOnValidatorChange(()=>{r.update(S=>S+1)}));let o=n.map(g=>typeof g==`function`?g:g.validate.bind(g)),a=ai.compose(o),u=U(()=>{r?.();return Po(a?a(t.interopNgControl.control):null,t.interopNgControl.control)});t.parseErrorsSource.set(u)}return t.registerAsBinding({reset:()=>{let r=t.state().value();e.controlValue=r,de(()=>t.controlValueAccessor.writeValue(r))}}),()=>{let r=t.state(),o=r.controlValue();tt(e,`controlValue`,o)&&de(()=>t.controlValueAccessor.writeValue(o));for(let a of Zi){let u=Ki(r,a);if(tt(e,a,u)){let g=i.setInputOnDirectives(a,u,a===`name`?Ms:void 0);a===`disabled`&&t.controlValueAccessor.setDisabledState?de(()=>t.controlValueAccessor.setDisabledState(u)):!g&&t.elementAcceptsNativeProperty(a)&&WR(t.renderer,t.nativeFormElement,a,u)}}}}function Ms(i){return i==null}function ws(i,t,e){if(typeof MutationObserver!=`function`)return;let n=new MutationObserver(r=>{r.some(o=>Ns(o))&&t()});n.observe(i,{attributes:!0,attributeFilter:[`value`],characterData:!0,childList:!0,subtree:!0}),e.onDestroy(()=>n.disconnect())}function Ns(i){if(i.type===`childList`||i.type===`characterData`){if(i.target instanceof Comment)return!1;for(let t of i.addedNodes)if(!(t instanceof Comment))return!0;for(let t of i.removedNodes)if(!(t instanceof Comment))return!0;return!1}return i.type===`attributes`&&i.target instanceof HTMLOptionElement}function Ts(i,t,e,n){let r=!1,o=t.nativeFormElement,a=Eo(()=>t.state().value(),O=>t.state().controlValue.set(O),O=>xs(o,t.state().value,n));e.set(a.errors),t.onReset=()=>{a.reset();let O=t.state().value();P.controlValue=O,ko(o,O)};let u=i.nativeElement,g=()=>a.setRawValue(void 0);u.addEventListener(`input`,g);let S=()=>t.state().markAsTouched();u.addEventListener(`blur`,S),t.destroyRef.onDestroy(()=>{u.removeEventListener(`input`,g),u.removeEventListener(`blur`,S)}),Lo(o)&&vs(o)&&n.watchValidity(t.destroyRef,o,()=>a.setRawValue(void 0)),t.registerAsBinding(),o.tagName===`SELECT`&&ws(o,()=>{r&&(o.value=t.state().controlValue())},t.destroyRef);let P=Vn();return()=>{let O=t.state();for(let U of Zi){let z=Ki(O,U);if(tt(P,U,z)&&(i.setInputOnDirectives(U,z),t.elementAcceptsNativeProperty(U))){let te=Ao(U,z,o.type);WR(t.renderer,o,U,te)}}let D=O.controlValue(),V=tt(P,`controlValue`,D),J=o.type===`radio`&&tt(P,`radioValue`,o.value);(V||J)&&ko(o,D),r=!0}}var Fo=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵprov=V({token:i,factory:e=>Ps.ɵfac(e),providedIn:`root`})}return i})();var Ps=(()=>{class i extends Fo{document=b($);cspNonce=b(Ms$1,{optional:!0});injectedStyles=/* @__PURE__ */ new WeakMap;watchValidity(e,n,r){let o=n.getRootNode();this.injectedStyles.has(o)||this.injectedStyles.set(o,this.createAnimationStyle(o));let a=u=>{let g=u;(g.animationName===`ng-valid`||g.animationName===`ng-invalid`)&&r()};n.addEventListener(`animationstart`,a),e.onDestroy(()=>{n.removeEventListener(`animationstart`,a)})}isBadInput(e){return e.validity?.badInput??!1}createAnimationStyle(e){let n=this.document.createElement(`style`);return this.cspNonce&&(n.nonce=this.cspNonce),n.textContent=`
      @keyframes ng-valid {}
      @keyframes ng-invalid {}
      input:valid, textarea:valid {
        animation: ng-valid 0.001s;
      }
      input:invalid, textarea:invalid {
        animation: ng-invalid 0.001s;
      }
    `,e.nodeType===9?e.head?.appendChild(n):e.appendChild(n),n}ngOnDestroy(){this.injectedStyles.get(this.document)?.remove()}static ɵfac=(()=>{let e;return function(r){return(e||(e=ho$1(i)))(r||i)}})();static ɵprov=V({token:i,factory:i.ɵfac})}return i})();var Os=Symbol();var Do=new T(``);var Yb=(()=>{class i{field=re.required({alias:`formField`});state=U(()=>this.field()());renderer=b(Nt);destroyRef=b(he);injector=b(ie);element=b(ke).nativeElement;elementIsNativeFormElement=GR(this.element);elementAcceptsTextualValues=rZ(this.element);_elementAcceptsMinMax;nativeFormElement=this.elementIsNativeFormElement?this.element:void 0;focuser=e=>this.element.focus(e);controlValueAccessors=b(ec$1,{optional:!0,self:!0});config=b(os,{optional:!0});validityMonitor=b(Fo);parseErrorsSource=z(void 0);_interopNgControl;get interopNgControl(){return this._interopNgControl??=new ji(this.state)}parseErrors=U(()=>this.parseErrorsSource()?.().map(e=>s(r({},e),{fieldTree:de(this.state).fieldTree,formField:this}))??[],{equal:Ie});errors=U(()=>this.state().errors().filter(e=>!e.formField||e.formField===this),{equal:Ie});isFieldBinding=!1;resetter=()=>{};parseErrorsResetCallback;setParseErrors(e){this.parseErrorsSource.set(e)}set onReset(e){this.parseErrorsResetCallback=e}get onReset(){return this.parseErrorsResetCallback}get controlValueAccessor(){return!this.controlValueAccessors||this.controlValueAccessors.length===0?this.interopNgControl?.valueAccessor??void 0:oN(this.interopNgControl,this.controlValueAccessors)??void 0}installClassBindingEffect(){let e=Object.entries(this.config?.classes??{}).map(([r,o])=>[r,U(()=>o(this))]);if(e.length===0)return;let n=Vn();Bk({write:()=>{if(!this.state().structure.isOrphaned())for(let[r,o]of e){let a=o();tt(n,r,a)&&(a?this.renderer.addClass(this.element,r):this.renderer.removeClass(this.element,r))}}},{injector:this.injector})}focus(e){this.focuser(e)}reset(){this.resetter(),this.parseErrorsResetCallback?.(this.state().value())}registerAsBinding(e){if(this.isFieldBinding)throw new j(1913,!1);this.isFieldBinding=!0,this.installClassBindingEffect(),e?.focus&&(this.focuser=n=>e.focus(n)),e?.reset&&(this.resetter=()=>e.reset()),$e(n=>{let r=this.state();r.nodeState.formFieldBindings.update(o=>[...o,this]),n(()=>{let o=r.nodeState.formFieldBindings().filter(a=>a!==this);r.nodeState.formFieldBindings.set(o),o.length===0&&!r.structure.isOrphaned()&&r.flushSync()})},{injector:this.injector})}[Os];ɵngControlCreate(e){if(!e.hasPassThrough)if(this.controlValueAccessor)this.ɵngControlUpdate=Cs(e,this);else if(e.customControl)this.ɵngControlUpdate=Ss(e,this);else if(this.elementIsNativeFormElement)this.ɵngControlUpdate=Ts(e,this,this.parseErrorsSource,this.validityMonitor);else throw new j(1914,!1)}ɵngControlUpdate;elementAcceptsNativeProperty(e){if(!this.elementIsNativeFormElement)return!1;switch(e){case`min`:case`max`:return this._elementAcceptsMinMax??=tZ(this.element);case`minLength`:case`maxLength`:return this.elementAcceptsTextualValues;case`disabled`:case`required`:case`readonly`:case`name`:return!0;default:return!1}}static ɵfac=function(n){return new(n||i)};static ɵdir=pe({type:i,selectors:[[``,`formField`,``]],inputs:{field:[1,`formField`,`field`]},exportAs:[`formField`],features:[rr([{provide:Do,useExisting:i},{provide:sr,useFactory:()=>b(i).interopNgControl},{provide:KR,useFactory:()=>b(Do,{self:!0})}]),xa$1(`formField`)]})}return i})();var Qb=(()=>{class i{fieldTree=re.required({alias:`formRoot`});onSubmit(e){e.preventDefault(),de(()=>{let n=this.fieldTree();n().structure.fieldManager.submitOptions&&No(n)})}static ɵfac=function(n){return new(n||i)};static ɵdir=pe({type:i,selectors:[[`form`,`formRoot`,``]],hostAttrs:[`novalidate`,``],hostBindings:function(n,r){n&1&&br(`submit`,function(a){return r.onSubmit(a)})},inputs:{fieldTree:[1,`formRoot`,`fieldTree`]}})}return i})();var Vo=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵcmp=Fr({type:i,selectors:[[`ng-component`]],hostAttrs:[`cdk-text-field-style-loader`,``],decls:0,vars:0,template:function(n,r){},styles:[`textarea.cdk-textarea-autosize {
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
`],encapsulation:2})}return i})();var ks={passive:!0};var Is=(()=>{class i{_platform=b(st);_ngZone=b(le);_renderer=b(St).createRenderer(null,null);_styleLoader=b(Bn$1);_monitoredElements=/* @__PURE__ */ new Map;monitor(e){if(!this._platform.isBrowser)return _i$1;this._styleLoader.load(Vo);let n=Zs$1(e),r=this._monitoredElements.get(n);if(r)return r.subject;let o=new xe$1,a=`cdk-text-field-autofilled`,u=S=>{S.animationName===`cdk-text-field-autofill-start`&&!n.classList.contains(a)?(n.classList.add(a),this._ngZone.run(()=>o.next({target:S.target,isAutofilled:!0}))):S.animationName===`cdk-text-field-autofill-end`&&n.classList.contains(a)&&(n.classList.remove(a),this._ngZone.run(()=>o.next({target:S.target,isAutofilled:!1})))},g=this._ngZone.runOutsideAngular(()=>(n.classList.add(`cdk-text-field-autofill-monitored`),this._renderer.listen(n,`animationstart`,u,ks)));return this._monitoredElements.set(n,{subject:o,unlisten:g}),o}stopMonitoring(e){let n=Zs$1(e),r=this._monitoredElements.get(n);r&&(r.unlisten(),r.subject.complete(),n.classList.remove(`cdk-text-field-autofill-monitored`),n.classList.remove(`cdk-text-field-autofilled`),this._monitoredElements.delete(n))}ngOnDestroy(){this._monitoredElements.forEach((e,n)=>this.stopMonitoring(n))}static ɵfac=function(n){return new(n||i)};static ɵprov=J({token:i,factory:i.ɵfac})}return i})();var zn=(()=>{class i{_elementRef=b(ke);_autofillMonitor=b(Is);cdkAutofill=new Te;ngOnInit(){this._autofillMonitor.monitor(this._elementRef).subscribe(e=>this.cdkAutofill.emit(e))}ngOnDestroy(){this._autofillMonitor.stopMonitoring(this._elementRef)}static ɵfac=function(n){return new(n||i)};static ɵdir=pe({type:i,selectors:[[``,`cdkAutofill`,``]],outputs:{cdkAutofill:`cdkAutofill`}})}return i})();var zo=(()=>{class i{_elementRef=b(ke);_platform=b(st);_ngZone=b(le);_renderer=b(Nt);_resizeEvents=new xe$1;_previousValue;_initialHeight;_destroyed=new xe$1;_listenerCleanups;_minRows;_maxRows;_enabled=!0;_previousMinRows=-1;_textareaElement;get minRows(){return this._minRows}set minRows(e){this._minRows=J1(e),this._setMinHeight()}get maxRows(){return this._maxRows}set maxRows(e){this._maxRows=J1(e),this._setMaxHeight()}get enabled(){return this._enabled}set enabled(e){this._enabled!==e&&((this._enabled=e)?this.resizeToFitContent(!0):this.reset())}get placeholder(){return this._textareaElement.placeholder}set placeholder(e){this._cachedPlaceholderHeight=void 0,e?this._textareaElement.setAttribute(`placeholder`,e):this._textareaElement.removeAttribute(`placeholder`),this._cacheTextareaPlaceholderHeight()}_cachedLineHeight;_cachedPlaceholderHeight;_document=b($);_hasFocus=!1;_isViewInited=!1;constructor(){b(Bn$1).load(Vo),this._textareaElement=this._elementRef.nativeElement}_setMinHeight(){let e=this.minRows&&this._cachedLineHeight?`${this.minRows*this._cachedLineHeight}px`:null;e&&(this._textareaElement.style.minHeight=e)}_setMaxHeight(){let e=this.maxRows&&this._cachedLineHeight?`${this.maxRows*this._cachedLineHeight}px`:null;e&&(this._textareaElement.style.maxHeight=e)}ngAfterViewInit(){this._platform.isBrowser&&(this._initialHeight=this._textareaElement.style.height,this.resizeToFitContent(),this._ngZone.runOutsideAngular(()=>{this._listenerCleanups=[this._renderer.listen(`window`,`resize`,()=>this._resizeEvents.next()),this._renderer.listen(this._textareaElement,`focus`,this._handleFocusEvent),this._renderer.listen(this._textareaElement,`blur`,this._handleFocusEvent)],this._resizeEvents.pipe(ds$1(16)).subscribe(()=>{this._cachedLineHeight=this._cachedPlaceholderHeight=void 0,this.resizeToFitContent(!0)})}),this._isViewInited=!0,this.resizeToFitContent(!0))}ngOnDestroy(){this._listenerCleanups?.forEach(e=>e()),this._resizeEvents.complete(),this._destroyed.next(),this._destroyed.complete()}_cacheTextareaLineHeight(){if(this._cachedLineHeight)return;let e=this._textareaElement.cloneNode(!1),n=e.style;e.rows=1,n.position=`absolute`,n.visibility=`hidden`,n.border=`none`,n.padding=`0`,n.height=``,n.minHeight=``,n.maxHeight=``,n.top=n.bottom=n.left=n.right=`auto`,n.overflow=`hidden`,this._textareaElement.parentNode.appendChild(e),this._cachedLineHeight=e.clientHeight,e.remove(),this._setMinHeight(),this._setMaxHeight()}_measureScrollHeight(){let e=this._textareaElement,n=e.style.marginBottom||``,r=this._platform.FIREFOX,o=this._hasFocus,a=r?`cdk-textarea-autosize-measuring-firefox`:`cdk-textarea-autosize-measuring`;o&&(e.style.marginBottom=`${e.clientHeight}px`),e.classList.add(a);let u=e.scrollHeight-4;return e.classList.remove(a),o&&(e.style.marginBottom=n),u}_cacheTextareaPlaceholderHeight(){if(!this._isViewInited||this._cachedPlaceholderHeight!=null)return;if(!this.placeholder){this._cachedPlaceholderHeight=0;return}let e=this._textareaElement.value;this._textareaElement.value=this._textareaElement.placeholder,this._cachedPlaceholderHeight=this._measureScrollHeight(),this._textareaElement.value=e}_handleFocusEvent=e=>{this._hasFocus=e.type===`focus`};ngDoCheck(){this._platform.isBrowser&&this.resizeToFitContent()}resizeToFitContent(e=!1){if(!this._enabled||(this._cacheTextareaLineHeight(),this._cacheTextareaPlaceholderHeight(),!this._cachedLineHeight))return;let n=this._elementRef.nativeElement,r=n.value;if(!e&&this._minRows===this._previousMinRows&&r===this._previousValue)return;let o=this._measureScrollHeight(),a=Math.max(o,this._cachedPlaceholderHeight||0);n.style.height=`${a}px`,this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame<`u`?requestAnimationFrame(()=>this._scrollToCaretPosition(n)):setTimeout(()=>this._scrollToCaretPosition(n))}),this._previousValue=r,this._previousMinRows=this._minRows}reset(){this._initialHeight!==void 0&&(this._textareaElement.style.height=this._initialHeight)}_noopInputHandler(){}_scrollToCaretPosition(e){let{selectionStart:n,selectionEnd:r}=e;!this._destroyed.isStopped&&this._hasFocus&&e.setSelectionRange(n,r)}static ɵfac=function(n){return new(n||i)};static ɵdir=pe({type:i,selectors:[[`textarea`,`cdkTextareaAutosize`,``]],hostAttrs:[`rows`,`1`,1,`cdk-textarea-autosize`],hostBindings:function(n,r){n&1&&br(`input`,function(){return r._noopInputHandler()})},inputs:{minRows:[0,`cdkAutosizeMinRows`,`minRows`],maxRows:[0,`cdkAutosizeMaxRows`,`maxRows`],enabled:[2,`cdkTextareaAutosize`,`enabled`,Ge],placeholder:`placeholder`},exportAs:[`cdkTextareaAutosize`]})}return i})();var ve=class i extends Je{edit=z(void 0);internalValue=U(()=>{let t=this.edit();return t?t.value:this.value()});value=yz(null);reset(){super.reset(),this.edit.set(void 0)}clearPendingEdit(){this.edit.set(void 0)}updateValue(t){if(this.disabled()||this.isReadonly())return;let e=this.ngControl?.control?.updateOn;e===`blur`||e===`submit`?this.edit.set({value:t}):this.value.set(t)}commitPendingValue(t){let e=this.edit();!e||t===`blur`&&this.ngControl?.control?.updateOn===`submit`||(this.value.set(e.value),this.edit.set(void 0))}static ɵfac=(()=>{let t;return function(n){return(t||(t=ho$1(i)))(n||i)}})();static ɵdir=pe({type:i,inputs:{value:[1,`value`]},outputs:{value:`valueChange`},features:[xt]})};function Xi(i){if(i===void 0||i===``)return;let t=Number(i);return Number.isFinite(t)?t:void 0}var Ds=[[[``,`bxPrefix`,``]],[[``,`bxSuffix`,``]],[[`bx-error`]],[[`bx-hint`]]];var Es=[`[bxPrefix]`,`[bxSuffix]`,`bx-error`,`bx-hint`];var Rs=[`ngProjectAs`,`bx-error`,5,[`bx-error`]];var Ls=[`ngProjectAs`,`bx-hint`,5,[`bx-hint`]];function As(i,t){i&1&&(bo$1(0,`span`,9),aA(1,`*`),Go$1())}function Fs(i,t){if(i&1&&(bo$1(0,`label`,3)(1,`span`,8),aA(2),Go$1(),tb(3,As,2,0,`span`,9),Go$1()),i&2){let e=$s$1();vo$1(`for`,e.controlId()),qs$1(2),sk(e.resolvedLabel()),qs$1(),ob(e.effectiveRequired()&&!e.resolvedHideRequiredMarker()?3:-1)}}function Vs(i,t){if(i&1){let e=lb();bo$1(0,`textarea`,10),br(`input`,function(r){il$1(e);let o=$s$1();return al$1(o.onInput(r))})(`focus`,function(){il$1(e);let r=$s$1();return al$1(r.onFocus())})(`blur`,function(){il$1(e);let r=$s$1();return al$1(r.onBlur())})(`compositionstart`,function(){il$1(e);let r=$s$1();return al$1(r.onCompositionStart())})(`compositionend`,function(r){il$1(e);let o=$s$1();return al$1(o.onCompositionEnd(r))})(`cdkAutofill`,function(r){il$1(e);let o=$s$1();return al$1(o.autofilled.set(r.isAutofilled))}),Go$1()}if(i&2){let e=$s$1();$o$1(`required`,e.effectiveRequired())(`disabled`,e.disabled())(`readOnly`,e.isReadonly())(`value`,e.displayedValue())(`spellcheck`,e.spellcheck())(`rows`,e.rows())(`cdkTextareaAutosize`,e.autosize())(`cdkAutosizeMinRows`,e.minRows())(`cdkAutosizeMaxRows`,e.maxRows()),vo$1(`id`,e.controlId())(`name`,e.name()||null)(`data-testid`,e.dataTestId())(`aria-label`,e.ariaLabel())(`aria-labelledby`,e.ariaLabelledBy())(`aria-describedby`,e.describedBy())(`aria-invalid`,e.showError())(`aria-busy`,e.pending()||e.loading())(`autocomplete`,e.autocomplete())(`inputmode`,e.inputmode())(`minlength`,e.minLength())(`maxlength`,e.maxLength())(`placeholder`,e.isFloating()||!e.label()?e.resolvedPlaceholder():``)}}function zs(i,t){if(i&1){let e=lb();bo$1(0,`input`,11),br(`input`,function(r){il$1(e);let o=$s$1();return al$1(o.onInput(r))})(`focus`,function(){il$1(e);let r=$s$1();return al$1(r.onFocus())})(`blur`,function(){il$1(e);let r=$s$1();return al$1(r.onBlur())})(`compositionstart`,function(){il$1(e);let r=$s$1();return al$1(r.onCompositionStart())})(`compositionend`,function(r){il$1(e);let o=$s$1();return al$1(o.onCompositionEnd(r))})(`cdkAutofill`,function(r){il$1(e);let o=$s$1();return al$1(o.autofilled.set(r.isAutofilled))}),Go$1()}if(i&2){let e=$s$1();$o$1(`required`,e.effectiveRequired())(`disabled`,e.disabled())(`readOnly`,e.isReadonly())(`value`,e.displayedValue())(`spellcheck`,e.spellcheck())(`type`,e.type()),vo$1(`id`,e.controlId())(`name`,e.name()||null)(`data-testid`,e.dataTestId())(`aria-label`,e.ariaLabel())(`aria-labelledby`,e.ariaLabelledBy())(`aria-describedby`,e.describedBy())(`aria-invalid`,e.showError())(`aria-busy`,e.pending()||e.loading())(`autocomplete`,e.autocomplete())(`inputmode`,e.inputmode())(`minlength`,e.minLength())(`maxlength`,e.maxLength())(`placeholder`,e.isFloating()||!e.label()?e.resolvedPlaceholder():``)(`min`,e.min())(`max`,e.max())(`step`,e.step())(`pattern`,e.pattern()[0]?.source)}}function Bs(i,t){if(i&1){let e=lb();bo$1(0,`div`,7)(1,`button`,12),br(`pointerdown`,function(r){il$1(e);let o=$s$1();return al$1(o.startSpin(-1,r))})(`pointerup`,function(){il$1(e);let r=$s$1();return al$1(r.stopSpin())})(`pointercancel`,function(){il$1(e);let r=$s$1();return al$1(r.stopSpin())})(`pointerleave`,function(){il$1(e);let r=$s$1();return al$1(r.stopSpin())})(`click`,function(r){il$1(e);let o=$s$1();return r.detail===0&&o.startSpin(-1,r),al$1(o.stopSpin())}),td$1(2,`bx-icon`,13),Go$1(),bo$1(3,`button`,12),br(`pointerdown`,function(r){il$1(e);let o=$s$1();return al$1(o.startSpin(1,r))})(`pointerup`,function(){il$1(e);let r=$s$1();return al$1(r.stopSpin())})(`pointercancel`,function(){il$1(e);let r=$s$1();return al$1(r.stopSpin())})(`pointerleave`,function(){il$1(e);let r=$s$1();return al$1(r.stopSpin())})(`click`,function(r){il$1(e);let o=$s$1();return r.detail===0&&o.startSpin(1,r),al$1(o.stopSpin())}),td$1(4,`bx-icon`,14),Go$1()()}if(i&2){let e=$s$1();qs$1(),$o$1(`disabled`,e.isSpinDownDisabled()),vo$1(`aria-label`,e.resolvedDecreaseLabel()),qs$1(2),$o$1(`disabled`,e.isSpinUpDisabled()),vo$1(`aria-label`,e.resolvedIncreaseLabel())}}var Bo=class i extends ve{i18n=b(SQ,{optional:!0});editingRaw=z(void 0);badInput=z(!1);labelText=kz(ct$1);labelTruncated=U(()=>this.labelText()?.truncated()??!1);isFocused=z(!1);autofilled=z(!1);rawValue=Ro(this.value,{parse:t=>{if(this.type()!==`number`)return{value:t};let e=t===``?null:Number(t);return this.badInput()||e!==null&&!Number.isFinite(e)?{error:{kind:`parse`}}:{value:e}},format:t=>t?.toString()??``});displayedValue=U(()=>this.editingRaw()??this.rawValue());isSpinDownDisabled=U(()=>this.disabled()||this.isReadonly()||Number(this.value()??0)<=(this.min()??-1/0));isSpinUpDisabled=U(()=>this.disabled()||this.isReadonly()||Number(this.value()??0)>=(this.max()??1/0));isFloating=U(()=>this.resolvedFloatLabel()===`always`||this.isFocused()||this.autofilled()||!!this.displayedValue()||this.multiline()||[`date`,`time`,`datetime-local`].includes(this.type()));resolvedDecreaseLabel=U(()=>CQ(this.decreaseLabel(),this.i18n));resolvedIncreaseLabel=U(()=>CQ(this.increaseLabel(),this.i18n));type=re(`text`);min=re(void 0,{transform:Xi});max=re(void 0,{transform:Xi});minLength=re(void 0);maxLength=re(void 0);pattern=re([]);step=re(1);autocomplete=re(void 0);inputmode=re(void 0);spellcheck=re(!0);multiline=re(!1);rows=re(3);autosize=re(!0);minRows=re(2);maxRows=re(8);decreaseLabel=re(`Decrease value`);increaseLabel=re(`Increase value`);composing=!1;spinTimeout;spinInterval;constructor(){super(),b(he).onDestroy(()=>this.stopSpin())}reset(){super.reset(),this.editingRaw.set(void 0),this.badInput.set(!1),this.stopSpin()}startSpin(t,e){e.preventDefault(),!(this.disabled()||this.isReadonly())&&(this.applyStep(t),this.spinTimeout=setTimeout(()=>{this.spinInterval=setInterval(()=>this.applyStep(t),80)},400))}stopSpin(){clearTimeout(this.spinTimeout),clearInterval(this.spinInterval)}clearPendingEdit(){super.clearPendingEdit(),this.editingRaw.set(void 0),this.badInput.set(!1)}onInput(t){if(this.composing||this.disabled()||this.isReadonly())return;let e=t.target;this.badInput.set(e.validity.badInput);let n=this.ngControl?.control?.updateOn;n===`blur`||n===`submit`?this.editingRaw.set(e.value):this.rawValue.set(e.value)}onCompositionStart(){this.composing=!0}onCompositionEnd(t){this.composing=!1,this.onInput(t)}onFocus(){this.isFocused.set(!0)}onBlur(){this.isFocused.set(!1),this.stopSpin(),this.markAsTouched()}commitPendingValue(t){let e=this.editingRaw();e===void 0||t===`blur`&&this.ngControl?.control?.updateOn===`submit`||(this.rawValue.set(e),this.editingRaw.set(void 0))}applyStep(t){let e=Number(this.displayedValue())||0,n=this.step()===`any`?1:Number(this.step()),r=Math.min(this.max()??1/0,Math.max(this.min()??-1/0,Number((e+t*n).toPrecision(12))));this.disabled()||this.isReadonly()||(this.badInput.set(!1),this.rawValue.set(String(r)))}static ɵfac=function(e){return new(e||i)};static ɵcmp=Fr({type:i,selectors:[[`bx-input-field`]],viewQuery:function(e,n){e&1&&Wy(n.labelText,ct$1,5),e&2&&db()},inputs:{type:[1,`type`],min:[1,`min`],max:[1,`max`],minLength:[1,`minLength`],maxLength:[1,`maxLength`],pattern:[1,`pattern`],step:[1,`step`],autocomplete:[1,`autocomplete`],inputmode:[1,`inputmode`],spellcheck:[1,`spellcheck`],multiline:[1,`multiline`],rows:[1,`rows`],autosize:[1,`autosize`],minRows:[1,`minRows`],maxRows:[1,`maxRows`],decreaseLabel:[1,`decreaseLabel`],increaseLabel:[1,`increaseLabel`]},features:[xt],ngContentSelectors:Es,decls:13,vars:30,consts:[[3,`control`,`inline`,`tooltip`,`loading`,`hint`,`hintEnd`,`subscriptSizing`,`forId`],[`bxSurface`,``,1,`bx-input-wrapper`],[`bxTooltipTouch`,`longpress`,`placement`,`top`,1,`bx-input-container`,3,`bxTooltip`],[1,`bx-floating-label`],[`cdkAutofill`,``,1,`bx-native-input`,3,`required`,`disabled`,`readOnly`,`value`,`spellcheck`,`rows`,`cdkTextareaAutosize`,`cdkAutosizeMinRows`,`cdkAutosizeMaxRows`],[`cdkAutofill`,``,1,`bx-native-input`,3,`required`,`disabled`,`readOnly`,`value`,`spellcheck`,`type`],[1,`bx-input-actions`],[1,`bx-spinners-group`],[`bxTruncate`,``,1,`bx-input-label-text`],[`aria-hidden`,`true`,1,`bx-field-required`],[`cdkAutofill`,``,1,`bx-native-input`,3,`input`,`focus`,`blur`,`compositionstart`,`compositionend`,`cdkAutofill`,`required`,`disabled`,`readOnly`,`value`,`spellcheck`,`rows`,`cdkTextareaAutosize`,`cdkAutosizeMinRows`,`cdkAutosizeMaxRows`],[`cdkAutofill`,``,1,`bx-native-input`,3,`input`,`focus`,`blur`,`compositionstart`,`compositionend`,`cdkAutofill`,`required`,`disabled`,`readOnly`,`value`,`spellcheck`,`type`],[`type`,`button`,1,`bx-spin-btn`,3,`pointerdown`,`pointerup`,`pointercancel`,`pointerleave`,`click`,`disabled`],[`name`,`minus`,`size`,`16`],[`name`,`plus`,`size`,`16`]],template:function(e,n){e&1&&($y(Ds),bo$1(0,`bx-form-field`,0)(1,`div`,1),Gy(2),bo$1(3,`div`,2),DA(4,`bxTruncatedText`),tb(5,Fs,4,3,`label`,3),tb(6,Vs,1,22,`textarea`,4)(7,zs,1,23,`input`,5),Go$1(),bo$1(8,`div`,6),Gy(9,1),tb(10,Bs,5,4,`div`,7),Go$1()(),Gy(11,2,Rs),Gy(12,3,Ls),Go$1()),e&2&&($o$1(`control`,n.fieldControl)(`inline`,!0)(`tooltip`,n.tooltip())(`loading`,n.loading())(`hint`,n.hint())(`hintEnd`,n.hintEnd())(`subscriptSizing`,n.resolvedSubscriptSizing())(`forId`,n.controlId()),qs$1(),tr(`is-invalid`,n.showError())(`is-outline`,n.resolvedAppearance()===`outline`)(`is-disabled`,n.disabled())(`is-readonly`,n.isReadonly())(`is-keyboard-focused`,n.keyboardFocused())(`has-spinners`,n.type()===`number`&&!n.multiline())(`is-floating`,n.isFloating()),qs$1(2),$o$1(`bxTooltip`,MA(4,26,n.resolvedLabel(),n.labelTruncated(),n.resolvedTooltipOnTruncate())),qs$1(2),ob(n.label()?5:-1),qs$1(),ob(n.multiline()?6:7),qs$1(4),ob(n.type()===`number`&&!n.multiline()?10:-1))},dependencies:[UC,ee,YC,zn,zo,Pt$1,ct$1,on],styles:[`
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
}`]})};var Bn=class i{radios=/* @__PURE__ */ new Set;select(t){for(let e of this.radios)e!==t&&e.sharesGroup(t)&&e.writeValue(t.value())}static ɵfac=function(e){return new(e||i)};static ɵprov=V({token:i,factory:i.ɵfac,providedIn:`root`})};var Hn=new T(`BX_RADIO_GROUP`);var Hs=[`*`];function Ws(i,t){i&1&&(bo$1(0,`span`,7),aA(1,`*`),Go$1())}function qs(i,t){if(i&1&&(bo$1(0,`span`,5),Gy(1),aA(2),tb(3,Ws,2,0,`span`,7),Go$1()),i&2){let e=$s$1();qs$1(2),ub(``,e.resolvedLabel(),` `),qs$1(),ob(e.isFieldRequired()||e.group?.required()?3:-1)}}function js(i,t){if(i&1&&(bo$1(0,`span`,6),aA(1),Go$1()),i&2){let e=$s$1();$o$1(`id`,e.inputId()+`-readonly`),qs$1(),sk(e.resolvedReadonlyDescription())}}var Ho=class i extends HC{radioRegistry=b(Bn);formSettingsService=b(kt);i18n=b(SQ,{optional:!0});group=b(Hn,{optional:!0});inputId=U(()=>`bx-radio-${MZ()}`);resolvedLabel=U(()=>{this.i18n?.version?.();let t=this.label();if(t)return qC(t)?this.i18n?.translate(t.key)??t.key:t});effectiveDisabled=U(()=>this.isDisabled()||!!this.group?.disabled());effectiveName=U(()=>this.group?.groupName()??this.name());resolvedReadonlyDescription=U(()=>CQ(this.readonlyDescription(),this.i18n));radioDescribedBy=U(()=>[this.group?.describedBy(),this.isReadonly()||this.group?.isReadonly()?`${this.inputId()}-readonly`:void 0].filter(Boolean).join(` `)||null);selected=U(()=>(this.group?this.group.value():this.internalValue())===this.value());resolvedSubscriptSizing=U(()=>this.subscriptSizing()??this.formSettingsService.settings().subscriptSizing);readonlyDescription=re(`Read only`);labelPosition=re(`after`);subscriptSizing=re(void 0);value=re.required();name=re(``);showTooltip=!1;constructor(){super(),this.radioRegistry.radios.add(this),b(he).onDestroy(()=>this.radioRegistry.radios.delete(this))}sharesGroup(t){let e=this.ngControl?.control;return e&&e===t.ngControl?.control?!0:!!this.name()&&this.name()===t.name()&&this.nativeElement.closest(`form`)===t.nativeElement.closest(`form`)&&e?.parent===t.ngControl?.control?.parent}onSelect(){if(this.effectiveDisabled()||this.isReadonly()||this.group?.isReadonly()){for(let t of this.radioRegistry.radios){if(t!==this&&(this.group?t.group!==this.group:!this.sharesGroup(t)))continue;let e=t.nativeElement.querySelector(`input[type="radio"]`);e&&(e.checked=t.selected())}return}this.group?this.group.select(this.value()):(this.updateValue(this.value()),this.radioRegistry.select(this))}onReadonlyClick(t){(this.isReadonly()||this.group?.isReadonly())&&t.preventDefault()}onControlPointerDown(){(this.isReadonly()||this.group?.isReadonly())&&this.keyboardFocused.set(!1)}onReadonlyKeyDown(t){if(!(this.isReadonly()||this.group?.isReadonly())||![`ArrowLeft`,`ArrowRight`,`ArrowUp`,`ArrowDown`,` `].includes(t.key)||(t.preventDefault(),t.key===` `))return;let e=t.target,n=(e.name?Array.from(e.ownerDocument.querySelectorAll(`input[type="radio"]`)):[e]).filter(o=>!o.disabled&&o.name===e.name&&o.form===e.form&&(!this.group||o.closest(`[role="radiogroup"]`)===e.closest(`[role="radiogroup"]`))),r=t.key===`ArrowLeft`||t.key===`ArrowUp`?-1:1;n[(n.indexOf(e)+r+n.length)%n.length]?.focus()}onBlur(){this.group?this.group.markTouched():this.markAsTouched()}static ɵfac=function(e){return new(e||i)};static ɵcmp=Fr({type:i,selectors:[[`bx-radio`]],inputs:{readonlyDescription:[1,`readonlyDescription`],labelPosition:[1,`labelPosition`],subscriptSizing:[1,`subscriptSizing`],value:[1,`value`],name:[1,`name`]},features:[xt],ngContentSelectors:Hs,decls:7,vars:29,consts:[[3,`inline`,`tooltip`,`error`,`loading`,`forId`,`subscriptSizing`],[1,`bx-inline-wrapper`],[`type`,`radio`,1,`bx-visually-hidden`,3,`click`,`keydown`,`change`,`blur`,`required`,`disabled`,`checked`],[`bxSurface`,``,1,`bx-radio-circle`,3,`bxSurfaceEmission`],[1,`bx-radio-inner`],[1,`bx-inline-label`],[1,`bx-visually-hidden`,3,`id`],[1,`bx-inline-required`]],template:function(e,n){e&1&&($y(),bo$1(0,`bx-form-field`,0)(1,`label`,1)(2,`input`,2),br(`click`,function(o){return n.onReadonlyClick(o)})(`keydown`,function(o){return n.onReadonlyKeyDown(o)})(`change`,function(){return n.onSelect()})(`blur`,function(){return n.onBlur()}),Go$1(),bo$1(3,`div`,3),td$1(4,`div`,4),Go$1(),tb(5,qs,4,2,`span`,5),Go$1(),tb(6,js,2,2,`span`,6),Go$1()),e&2&&($o$1(`inline`,!0)(`tooltip`,n.tooltip())(`error`,n.errorMessage)(`loading`,n.loading())(`forId`,n.inputId())(`subscriptSizing`,n.resolvedSubscriptSizing()),qs$1(),tr(`is-disabled`,n.effectiveDisabled())(`is-readonly`,n.isReadonly()||!!n.group?.isReadonly())(`is-keyboard-focused`,n.keyboardFocused())(`label-before`,n.labelPosition()===`before`),qs$1(),$o$1(`required`,n.required()||!!n.group?.required())(`disabled`,n.effectiveDisabled())(`checked`,n.selected()),vo$1(`id`,n.inputId())(`name`,n.effectiveName()||null)(`data-testid`,n.dataTestId())(`aria-label`,n.ariaLabel())(`aria-describedby`,n.radioDescribedBy()),qs$1(),tr(`is-checked`,n.selected())(`is-invalid`,!!n.errorMessage),$o$1(`bxSurfaceEmission`,n.errorMessage?`var(--bx-text-danger)`:`var(--bx-accent)`),qs$1(2),ob(n.resolvedLabel()?5:-1),qs$1(),ob(n.isReadonly()||n.group?.isReadonly()?6:-1))},dependencies:[UC,Gk,ee],styles:[`
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
}`],changeDetection:1})};var $s=[[[`bx-error`]],[[`bx-hint`]]];var Gs=[`bx-error`,`bx-hint`];var Ks=[`ngProjectAs`,`bx-error`,5,[`bx-error`]];var Zs=[`ngProjectAs`,`bx-hint`,5,[`bx-hint`]];function Xs(i,t){i&1&&td$1(0,`bx-loading-spinner`,11),i&2&&$o$1(`size`,16)(`decorative`,!0)}function Us(i,t){i&1&&td$1(0,`bx-icon`,12)}function Ys(i,t){if(i&1&&tb(0,Xs,1,2,`bx-loading-spinner`,11)(1,Us,1,0,`bx-icon`,12),i&2){let e=t.$implicit;ob(e?0:1)}}function Qs(i,t){if(i&1){let e=lb();bo$1(0,`button`,13),br(`click`,function(){il$1(e);let r=$s$1();return al$1(r.clear())}),td$1(1,`bx-icon`,14),Go$1()}if(i&2){let e=$s$1();$o$1(`disabled`,e.disabled()||e.isReadonly()),vo$1(`aria-label`,e.resolvedClearLabel())}}function Js(i,t){if(i&1&&(bo$1(0,`span`,15),aA(1),Go$1(),bo$1(2,`span`,15),aA(3),Go$1()),i&2){let e=$s$1();qs$1(),sk(e.resolvedRetainedError()),qs$1(2),sk(e.resolvedLoadingLabel()||e.resolvedLoadingAriaLabel())}}function el(i,t){if(i&1){let e=lb();bo$1(0,`button`,16),br(`click`,function(){il$1(e);let r=$s$1();return al$1(r.retrySearch())}),td$1(1,`bx-icon`,17),aA(2),Go$1()}if(i&2){let e=$s$1();XT(e.retryConfig().buttonClass??``),$o$1(`variant`,e.retryConfig().variant??`text`)(`color`,e.retryConfig().color??`primary`)(`outlined`,e.retryConfig().outlined??!1)(`disabled`,e.disabled()||e.isReadonly())(`loading`,e.isBusy()),vo$1(`aria-label`,e.resolvedRetryAriaLabel()),qs$1(2),ub(``,e.resolvedRetryLabel(),` `)}}var At=class i extends ve{i18n=b(SQ,{optional:!0});retryError=z(void 0);retrying=U(()=>this.retryError()!==void 0);resolvedClearLabel=U(()=>CQ(this.clearLabel(),this.i18n));resolvedLoadError=U(()=>CQ(this.loadError(),this.i18n));resolvedLoadingLabel=U(()=>CQ(this.loadingLabel(),this.i18n));resolvedLoadingAriaLabel=U(()=>CQ(this.loadingAriaLabel(),this.i18n));resolvedRetryLabel=U(()=>CQ(this.retryLabel(),this.i18n));resolvedRetryAriaLabel=U(()=>CQ(this.retryConfig().ariaLabel,this.i18n)||this.resolvedRetryLabel());resolvedRetainedError=U(()=>CQ(this.retryError()??this.loadError(),this.i18n));isBusy=U(()=>this.loading()||this.pending());showRetry=U(()=>!!this.loadError()||this.retrying());showStatus=U(()=>!!this.resolvedLoadError()||this.isBusy()&&(!!this.resolvedLoadingLabel()||this.showRetry()));searchDescribedBy=U(()=>`${this.describedBy()} ${this.controlId()}-search-status`);isCompact=U(()=>!!this.label()||this.compact());clearLabel=re(`Clear search`);autocomplete=re(`off`);loadError=re(void 0);loadingLabel=re(void 0);loadingAriaLabel=re(`Searching`);retryLabel=re(`Retry search`);retryConfig=re({});compact=re(!1);search=Ok();retry=Ok();composing=!1;constructor(){super(),$e(()=>{this.retrying()&&!this.loading()&&this.retryError.set(void 0)})}clear(){this.disabled()||this.isReadonly()||(this.retryError.set(void 0),this.updateValue(``),this.search.emit(``),this.focus())}retrySearch(){this.disabled()||this.isReadonly()||this.isBusy()||this.retrying()||!this.loadError()||(this.retryError.set(this.loadError()),this.focus(),this.retry.emit(this.internalValue()??``))}onInput(t){if(this.composing||this.disabled()||this.isReadonly())return;let e=t.target.value;this.retryError.set(void 0),this.updateValue(e),this.search.emit(e)}onCompositionStart(){this.composing=!0}onCompositionEnd(t){this.composing=!1,this.onInput(t)}onBlur(){this.markAsTouched()}static ɵfac=function(e){return new(e||i)};static ɵcmp=Fr({type:i,selectors:[[`bx-search-input`]],inputs:{clearLabel:[1,`clearLabel`],autocomplete:[1,`autocomplete`],loadError:[1,`loadError`],loadingLabel:[1,`loadingLabel`],loadingAriaLabel:[1,`loadingAriaLabel`],retryLabel:[1,`retryLabel`],retryConfig:[1,`retryConfig`],compact:[1,`compact`]},outputs:{search:`search`,retry:`retry`},features:[xt],ngContentSelectors:Gs,decls:17,vars:50,consts:[[`searchOverflow`,`bxTruncate`],[3,`control`,`label`,`tooltip`,`showLoadingIndicator`,`hint`,`hintEnd`,`hideRequiredMarker`,`subscriptSizing`,`forId`],[`bxSurface`,``,`bxTooltipTouch`,`longpress`,`placement`,`top`,1,`bx-search-input-wrapper`,3,`bxTooltip`],[`aria-hidden`,`true`,1,`bx-search-icon-left`],[3,`value`],[`type`,`search`,`bxTruncate`,``,1,`bx-native-search-input`,3,`input`,`blur`,`compositionstart`,`compositionend`,`id`,`placeholder`,`required`,`readOnly`,`disabled`,`value`],[`type`,`button`,1,`bx-search-clear-btn`,3,`disabled`],[1,`bx-search-feedback`],[1,`bx-search-status`],[`role`,`status`,3,`id`],[`bx-button`,``,`type`,`button`,3,`variant`,`color`,`outlined`,`class`,`disabled`,`loading`],[3,`size`,`decorative`],[`name`,`search`,`size`,`16`],[`type`,`button`,1,`bx-search-clear-btn`,3,`click`,`disabled`],[`name`,`x`,`size`,`16`],[`aria-hidden`,`true`,1,`bx-search-status-reserve`],[`bx-button`,``,`type`,`button`,3,`click`,`variant`,`color`,`outlined`,`disabled`,`loading`],[`name`,`rotate-cw`,`size`,`16`]],template:function(e,n){if(e&1&&($y($s),bo$1(0,`bx-form-field`,1)(1,`div`,2),DA(2,`bxTruncatedText`),bo$1(3,`span`,3)(4,`bx-visual-transition`,4),ed$1(5,Ys,2,1,`ng-template`),Go$1()(),bo$1(6,`input`,5,0),br(`input`,function(o){return n.onInput(o)})(`blur`,function(){return n.onBlur()})(`compositionstart`,function(){return n.onCompositionStart()})(`compositionend`,function(o){return n.onCompositionEnd(o)}),Go$1(),tb(8,Qs,2,2,`button`,6),Go$1(),bo$1(9,`div`,7)(10,`div`,8),tb(11,Js,4,2),bo$1(12,`span`,9),aA(13),Go$1()(),tb(14,el,3,9,`button`,10),Go$1(),Gy(15,0,Ks),Gy(16,1,Zs),Go$1()),e&2){let r=jT(7);$o$1(`control`,n.fieldControl)(`label`,n.label())(`tooltip`,n.tooltip())(`showLoadingIndicator`,!1)(`hint`,n.hint())(`hintEnd`,n.hintEnd())(`hideRequiredMarker`,n.resolvedHideRequiredMarker())(`subscriptSizing`,n.resolvedSubscriptSizing())(`forId`,n.controlId()),qs$1(),tr(`is-compact`,n.isCompact())(`is-invalid`,n.showError())(`is-disabled`,n.disabled())(`is-readonly`,n.isReadonly())(`is-keyboard-focused`,n.keyboardFocused()),$o$1(`bxTooltip`,MA(2,46,r.text(),r.truncated(),n.resolvedTooltipOnTruncate())),qs$1(3),$o$1(`value`,n.isBusy()&&!n.showRetry()),qs$1(2),$o$1(`id`,n.controlId())(`placeholder`,n.resolvedPlaceholder())(`required`,n.effectiveRequired())(`readOnly`,n.isReadonly())(`disabled`,n.disabled())(`value`,n.internalValue()??``),vo$1(`name`,n.name()||null)(`data-testid`,n.dataTestId())(`autocomplete`,n.autocomplete())(`aria-label`,n.ariaLabel())(`aria-labelledby`,n.ariaLabelledBy())(`aria-describedby`,n.searchDescribedBy())(`aria-busy`,n.isBusy())(`aria-invalid`,n.showError()),qs$1(2),ob(n.internalValue()&&!n.isReadonly()?8:-1),qs$1(),tr(`has-status`,n.showStatus()),qs$1(),tr(`cdk-visually-hidden`,!n.showStatus()),qs$1(),ob(n.showRetry()?11:-1),qs$1(),tr(`bx-search-error`,!n.isBusy()&&!!n.resolvedLoadError()),$o$1(`id`,n.controlId()+`-search-status`),qs$1(),sk(n.isBusy()?n.resolvedLoadingLabel()||n.resolvedLoadingAriaLabel():n.resolvedLoadError()),qs$1(),ob(n.showRetry()?14:-1)}},dependencies:[qu$1,UC,ee,YC,Et$1,xe,Pt$1,ct$1,on],styles:[`
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
}`]})};function tl(i,t){if(i&1&&(bo$1(0,`span`,1),aA(1),Go$1()),i&2){let e=$s$1();qs$1(),sk(e.errorText())}}function nl(i,t){if(i&1&&sd$1(0,2),i&2){let e=$s$1();$o$1(`ngTemplateOutlet`,t)(`ngTemplateOutletContext`,e.context())}}function il(i,t){i&1&&td$1(0,`bx-icon`,5)}function rl(i,t){if(i&1){let e=lb();bo$1(0,`button`,4),br(`click`,function(){il$1(e);let r=$s$1();return al$1(r.request.emit())}),tb(1,il,1,0,`bx-icon`,5),aA(2),Go$1()}if(i&2){let e=$s$1();XT(e.config().buttonClass??``),$o$1(`variant`,e.config().variant??`text`)(`color`,e.config().color??`primary`)(`outlined`,e.config().outlined??!1)(`disabled`,e.disabled())(`loading`,e.loading()),vo$1(`aria-label`,e.accessibleLabel()),qs$1(),ob(e.retry()?1:-1),qs$1(),ub(` `,e.text(),` `)}}var Wn=class i{i18n=b(SQ,{optional:!0});text=U(()=>{let t=this.config(),e=CQ(t.text??`Load more`,this.i18n),n=t.retryText,r=CQ(n,this.i18n),o=!!n&&(!qC(n)||r!==n.key);return this.loading()?CQ(t.loadingText??`Loading`,this.i18n):this.retry()&&o?r:e});accessibleLabel=U(()=>CQ(this.config().ariaLabel,this.i18n)||this.text());errorText=U(()=>CQ(this.error(),this.i18n));context=U(()=>({$implicit:this.text(),loading:this.loading(),disabled:this.disabled()||this.loading(),request:()=>this.request.emit()}));retry=re(!1);visible=re(!1);loading=re(!1);disabled=re(!1);error=re(void 0);config=re({});buttonTemplate=re(void 0);request=Ok();static ɵfac=function(e){return new(e||i)};static ɵcmp=Fr({type:i,selectors:[[`bx-load-more-footer`]],hostVars:2,hostBindings:function(e,n){e&2&&(Hy(`hidden`,!n.visible()),vo$1(`aria-busy`,n.loading()?`true`:null))},inputs:{retry:[1,`retry`],visible:[1,`visible`],loading:[1,`loading`],disabled:[1,`disabled`],error:[1,`error`],config:[1,`config`],buttonTemplate:[1,`buttonTemplate`]},outputs:{request:`request`},decls:4,vars:4,consts:[[1,`bx-load-more-footer`],[`role`,`status`,1,`bx-load-more-error`],[3,`ngTemplateOutlet`,`ngTemplateOutletContext`],[`bx-button`,``,`type`,`button`,3,`variant`,`color`,`outlined`,`class`,`disabled`,`loading`],[`bx-button`,``,`type`,`button`,3,`click`,`variant`,`color`,`outlined`,`disabled`,`loading`],[`name`,`rotate-cw`,`size`,`16`]],template:function(e,n){if(e&1&&(bo$1(0,`div`,0),tb(1,tl,2,1,`span`,1),tb(2,nl,1,2,`ng-container`,2)(3,rl,3,10,`button`,3),Go$1()),e&2){let r;XT(n.config().footerClass??``),qs$1(),ob(n.errorText()?1:-1),qs$1(),ob((r=n.buttonTemplate())?2:3,r)}},dependencies:[xe,Mb,YC],styles:[`
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
}`]})};var He=class i{nativeElement=b(ke).nativeElement;viewContainerRef=b(fr);ngZone=b(le);destroyRef=b(he);overflowing=z(!1);requested=z(!1);retrying=z(!1);keepVisible=z(!1);actionVisible=U(()=>!this.loadMoreSuppressed()&&(this.loadMoreHasMore()||!!this.loadMoreError()||this.keepVisible()&&this.loadMoreLoading())&&(this.loadMoreConfig().buttonMode===`always`||!this.overflowing()||this.keepVisible()||!!this.loadMoreError()));loadMoreHasMore=re(!1);loadMoreLoading=re(!1);loadMoreSuppressed=re(!1);loadMoreDisabled=re(!1);loadMoreError=re(void 0);loadMoreConfig=re({});loadMoreTemplate=re(void 0);loadMoreRevision=re(void 0);loadMore=Ok();footer;wasLoading=!1;previousRevision;constructor(){er(()=>this.mount()),Bk(()=>{let t=this.loadMoreLoading(),e=this.loadMoreRevision();(this.wasLoading&&!t||!t&&this.previousRevision!==e)&&this.complete(),this.wasLoading=t,this.previousRevision=e,this.updateFooter()})}complete(){this.requested.set(!1),this.retrying.set(!1),this.keepVisible.set(!1)}request(t=`button`){this.canRequest(t)&&(this.requested.set(!0),this.retrying.set(!!this.loadMoreError()),this.keepVisible.set(t!==`scroll`),this.loadMore.emit({source:this.loadMoreError()?`retry`:t}))}canRequest(t){return!this.loadMoreSuppressed()&&(this.loadMoreHasMore()||!!this.loadMoreError())&&!this.loadMoreDisabled()&&!this.loadMoreLoading()&&!this.requested()&&(t!==`scroll`||!this.loadMoreError())}mount(){this.footer=this.viewContainerRef.createComponent(Wn),this.nativeElement.append(this.footer.location.nativeElement),this.footer.instance.request.subscribe(()=>this.request()),this.ngZone.runOutsideAngular(()=>{let t=OQ(this.nativeElement,this.nativeElement,()=>{let e=this.footer?.location.nativeElement?.offsetHeight??0;NQ(this.nativeElement,this.nativeElement,e).distance<=(this.loadMoreConfig().threshold??32)&&this.canRequest(`scroll`)&&this.ngZone.run(()=>this.request(`scroll`))},()=>this.measure());this.destroyRef.onDestroy(()=>{t(),this.footer?.destroy()})}),this.measure(),this.updateFooter()}measure(){let t=this.footer?.location.nativeElement?.offsetHeight??0,{overflowing:e}=NQ(this.nativeElement,this.nativeElement,t);e!==this.overflowing()&&this.ngZone.run(()=>this.overflowing.set(e))}updateFooter(){if(!this.footer)return;let t=this.actionVisible(),e=this.footer.location.nativeElement;!t&&e.contains(this.nativeElement.ownerDocument.activeElement)&&(this.nativeElement.hasAttribute(`tabindex`)||this.nativeElement.setAttribute(`tabindex`,`-1`),this.nativeElement.focus({preventScroll:!0})),this.footer.setInput(`visible`,t),this.footer.setInput(`loading`,this.loadMoreLoading()),this.footer.setInput(`disabled`,this.loadMoreDisabled()||this.requested()&&!this.loadMoreLoading()),this.footer.setInput(`retry`,!!this.loadMoreError()||this.retrying()),this.footer.setInput(`error`,this.loadMoreError()),this.footer.setInput(`config`,this.loadMoreConfig()),this.footer.setInput(`buttonTemplate`,this.loadMoreTemplate())}static ɵfac=function(e){return new(e||i)};static ɵdir=pe({type:i,selectors:[[``,`bxLoadMore`,``]],inputs:{loadMoreHasMore:[1,`loadMoreHasMore`],loadMoreLoading:[1,`loadMoreLoading`],loadMoreSuppressed:[1,`loadMoreSuppressed`],loadMoreDisabled:[1,`loadMoreDisabled`],loadMoreError:[1,`loadMoreError`],loadMoreConfig:[1,`loadMoreConfig`],loadMoreTemplate:[1,`loadMoreTemplate`],loadMoreRevision:[1,`loadMoreRevision`]},outputs:{loadMore:`loadMore`},exportAs:[`bxLoadMore`]})};function qn(i){let t=Number(i);return Number.isFinite(t)?Math.max(1,Math.floor(t)):1}var al=[`searchInput`];var sl=[`origin`];var ll=[`valueOverflow`];var dl=[`labelOverflow`];var Ft=class i extends ve{bxA11yService=b(Br);ngZone=b(le);overlay=b(Rd$1);overlayContext=b(Ae,{optional:!0});i18n=b(SQ,{optional:!0});scrollLockService=b(Aw);scrollLockId=MZ();debouncing=z(!1);searchRequest=z(!1);knownOptions=z([]);connectedOverlay=kz(dR);searchInputRef=kz(`searchInput`);originRef=kz(`origin`,{read:ke});hasSelection=U(()=>this.internalValue()!==null&&this.internalValue()!==void 0);showClear=U(()=>this.clearable()&&this.hasSelection()&&!this.isReadonly());resolvedClearLabel=U(()=>CQ(this.clearLabel(),this.i18n));resolvedClearTooltip=U(()=>CQ(this.clearTooltip()??this.clearLabel(),this.i18n));panelScrollStrategy=this.overlay.scrollStrategies.noop();isPanelAttached=z(!1);searchTerm=U(()=>this.searchValue());truncatedSelectionTooltip=U(()=>!this.resolvedTooltipOnTruncate()||this.isOpen()?``:Wi$1(this.selectedOptionLabel()||this.resolvedPlaceholder(),this.valueOverflow()?.truncated()??!1)||Wi$1(this.resolvedLabel(),this.labelOverflow()?.truncated()??!1));overlayPositions=[new Hr({originX:`start`,originY:`bottom`},{overlayX:`start`,overlayY:`top`},0,4),new Hr({originX:`start`,originY:`top`},{overlayX:`start`,overlayY:`bottom`},0,-4)];resolvedOptions=U(()=>this.options().map(t=>s(r({},t),{resolvedStr:CQ(t.label,this.i18n),resolvedGroup:CQ(t.group,this.i18n)})));filteredOptions=U(()=>{let t=this.searchTerm().trim().toLocaleLowerCase();return this.externalFiltering()||!t?this.resolvedOptions():this.resolvedOptions().filter(e=>e.resolvedStr.toLocaleLowerCase().includes(t))});selectedOptions=U(()=>this.knownOptions().filter(t=>this.isSelected(t.value)));selectedOptionLabel=U(()=>this.selectedOptions().map(t=>CQ(t.label,this.i18n)).join(`, `));isFloating=U(()=>this.isOpen()||this.value()!==null&&(!Array.isArray(this.value())||this.value().length>0)||this.resolvedFloatLabel()===`always`);resolvedSearchPlaceholder=U(()=>CQ(this.searchPlaceholder(),this.i18n));resolvedEmptyMessage=U(()=>CQ(this.emptyMessage(),this.i18n));triggerContext=U(()=>({$implicit:this.value(),labels:this.selectedOptions().map(t=>CQ(t.label,this.i18n))}));visibleTags=U(()=>this.selectedOptions().slice(0,this.visibleTagCount()));overflowTagLabel=U(()=>{let t=Math.max(0,this.selectedOptions().length-this.visibleTagCount());return CQ(this.tagOverflowText(),this.i18n,{count:t}).replaceAll(`{count}`,String(t))});overflowTagTooltip=U(()=>this.selectedOptions().slice(this.visibleTagCount()).map(t=>CQ(t.label,this.i18n)).join(`, `));resolvedLoadingAriaLabel=U(()=>CQ(this.loadingAriaLabel(),this.i18n));resolvedLoadingLabel=U(()=>CQ(this.loadingLabel(),this.i18n));valueOverflow=kz(`valueOverflow`);labelOverflow=kz(`labelOverflow`);isSearching=U(()=>this.debouncing()||this.searchRequest());isOpen=z(!1);clearable=re(!0);clearLabel=re(`Clear selection`);clearTooltip=re(void 0);selectionDisplay=re(`text`);tagConfig=re({});overflowTagConfig=re({});visibleTagCount=re(1,{transform:qn});tagOverflowText=re(`+{count}`);options=re.required();compareWith=re(Object.is);isSearchable=re(!1);externalFiltering=re(!1);searchValue=yz(``);searchDebounce=re(300);searchPlaceholder=re(`Search...`);emptyMessage=re(`No results found.`);loadingLabel=re(void 0);loadingAriaLabel=re(`Loading`);hasMore=re(!1);loadError=re(void 0);loadMoreConfig=re({});loadMoreTemplate=re(void 0);panelClass=re(``);optionTemplate=re(void 0);triggerTemplate=re(void 0);search=Ok();loadMore=Ok();openedChange=Ok();transition;selectionMotion;disconnectTheme;disconnectLighting;disconnectOrigin;transitionRevision=0;focusOnOpen=null;searchTimeout;typeaheadTimeout;typeaheadText=``;constructor(){super(),$e(()=>{let t=this.bxA11yService.isReducedMotion();this.selectionMotion?.update({reducedMotion:t})}),$e(()=>{this.searchRequest()&&!this.loading()&&!this.debouncing()&&this.searchRequest.set(!1)}),$e(()=>{let t=this.resolvedOptions(),e=de(this.knownOptions).filter(n=>this.isSelected(n.value)&&!t.some(r=>this.compareWith()(r.value,n.value)));this.knownOptions.set([...e,...t])}),$e(()=>{(this.disabled()||this.isReadonly())&&this.isOpen()&&this.close()}),b(he).onDestroy(()=>{clearTimeout(this.searchTimeout),clearTimeout(this.typeaheadTimeout)})}ngOnDestroy(){++this.transitionRevision,this.onPanelDetach(),this.scrollLockService.enableScroll(this.scrollLockId)}toggleOpen(){this.disabled()||this.isReadonly()||(this.isOpen()?this.close():this.open())}open(){if(this.disabled()||this.isReadonly()||this.isOpen())return;++this.transitionRevision,this.isOpen.set(!0),this.openedChange.emit(!0),this.isPanelAttached.set(!0),this.scrollLockService.disableScroll(this.scrollLockId,{handleTouchInput:!0});let t=this.connectedOverlay()?.overlayRef?.overlayElement;t&&(t.inert=!1);let e=this.transition;e&&this.ngZone.runOutsideAngular(()=>e.enter()),this.connectedOverlay()?.overlayRef?.hasAttached()&&this.isSearchable()&&queueMicrotask(()=>this.searchInputRef()?.focus())}close(){let t=this.isOpen();this.isOpen.set(!1),this.scrollLockService.enableScroll(this.scrollLockId),t&&(this.openedChange.emit(!1),this.markAsTouched());let e=++this.transitionRevision,n=this.connectedOverlay()?.overlayRef?.overlayElement;n?.contains(n.ownerDocument.activeElement)&&this.originRef()?.nativeElement.focus({preventScroll:!0}),n&&(n.inert=!0);let r=this.transition;r&&!this.bxA11yService.isReducedMotion()?this.ngZone.runOutsideAngular(()=>r.exit()).then(()=>{e===this.transitionRevision&&!this.isOpen()&&this.detachPanel()}).catch(()=>{e===this.transitionRevision&&this.detachPanel()}):this.detachPanel()}onPanelAttach(t){let e=this.transitionRevision,n=this.originRef()?.nativeElement,r=t.overlayRef;n&&r?.hasAttached()&&(this.disconnectLighting?.(),this.disconnectLighting=ER(r.overlayElement,n),this.disconnectOrigin?.(),this.disconnectOrigin=this.ngZone.runOutsideAngular(()=>kZ(r,n))),queueMicrotask(()=>{let o=t.overlayRef,a=this.originRef()?.nativeElement;if(!o?.hasAttached()||!a||!this.isOpen()||e!==this.transitionRevision)return;this.disconnectTheme?.(),this.disconnectTheme=this.ngZone.runOutsideAngular(()=>_Z(a,o.overlayElement)),o.updatePosition();let u=o.overlayElement.querySelector(`[role="listbox"]`);if(this.selectionMotion?.destroy(),this.selectionMotion=u?this.ngZone.runOutsideAngular(()=>IR(u,{reducedMotion:this.bxA11yService.isReducedMotion()})):void 0,!this.bxA11yService.isReducedMotion()){this.transition?.destroy(),this.transition=this.ngZone.runOutsideAngular(()=>SR(a,o.overlayElement));let g=this.transition;this.ngZone.runOutsideAngular(()=>g.enter()).catch(()=>{e===this.transitionRevision&&(this.transition?.destroy(),this.transition=void 0)})}if(this.isSearchable())this.searchInputRef()?.focus();else{let g=this.panelItems();(g.find(S=>S.getAttribute(`aria-selected`)===`true`)??(this.focusOnOpen===`last`?g[g.length-1]:g[0]))?.focus()}this.focusOnOpen=null})}onPanelDetach(){this.selectionMotion?.destroy(),this.selectionMotion=void 0,this.transition?.destroy(),this.transition=void 0,this.disconnectTheme?.(),this.disconnectTheme=void 0,this.disconnectLighting?.(),this.disconnectLighting=void 0,this.disconnectOrigin?.(),this.disconnectOrigin=void 0}overlayPopoverLocation(t){return!!this.overlayContext?.useTopLayer||!!t.closest(`dialog, [role="dialog"], [role="alertdialog"], bx-modal, bx-modal-core, [popover]`)?`global`:null}refreshPanel(){this.transition?.refresh()}onTriggerKey(t){if(!(this.disabled()||this.isReadonly())){if(t.key===`Escape`||t.altKey&&t.key===`ArrowUp`){t.preventDefault(),this.close();return}[`ArrowDown`,`ArrowUp`,`Enter`,` `].includes(t.key)?(t.preventDefault(),this.focusOnOpen=t.key===`ArrowUp`?`last`:`first`,this.open()):t.key.length===1&&!t.ctrlKey&&!t.metaKey&&!t.altKey&&(this.open(),this.typeahead(t.key))}}onPanelKey(t){if(t.key===`Escape`||t.key===`Tab`||t.altKey&&t.key===`ArrowUp`){t.key!==`Tab`&&t.preventDefault(),t.stopPropagation(),this.close();return}let n=t.target.matches(`input,textarea`);if(n&&![`ArrowDown`,`ArrowUp`].includes(t.key))return;if(![`ArrowDown`,`ArrowUp`,`Home`,`End`].includes(t.key)){!n&&t.key.length===1&&t.key!==` `&&this.typeahead(t.key);return}let r=this.panelItems();if(!r.length)return;let o=r.indexOf(r[0].ownerDocument.activeElement),a=t.key===`Home`?0:t.key===`End`?r.length-1:t.key===`ArrowDown`?(o+1)%r.length:o<0?r.length-1:(o-1+r.length)%r.length;t.preventDefault(),r[a].focus()}onTriggerBlur(){this.isOpen()||this.markAsTouched()}onOutsideClick(t){let e=t.target;this.originRef()?.nativeElement.contains(e)||this.close()}clearSelectedValue(t){return this.disabled()||this.isReadonly()?!1:(this.updateValue(t),this.close(),this.markAsTouched(),this.focus({preventScroll:!0}),!0)}onSearchChange(t){clearTimeout(this.searchTimeout),this.debouncing.set(!0),this.searchTimeout=setTimeout(()=>{this.debouncing.set(!1),this.searchRequest.set(this.externalFiltering()),this.searchValue.set(t),this.search.emit(t)},this.searchDebounce())}selectionTagConfig(t){return r(r({},this.tagConfig()),t.tagConfig)}requestMore(t){this.loadMore.emit(r({},t))}detachPanel(){this.onPanelDetach(),this.isPanelAttached.set(!1),this.connectedOverlay()?.detachOverlay(),this.scrollLockService.enableScroll(this.scrollLockId)}typeahead(t){clearTimeout(this.typeaheadTimeout),this.typeaheadText+=t.toLocaleLowerCase(),this.typeaheadTimeout=setTimeout(()=>{this.typeaheadText=``},700),queueMicrotask(()=>this.panelItems().find(e=>e.textContent?.trim().toLocaleLowerCase().startsWith(this.typeaheadText))?.focus())}panelItems(){return Array.from(this.connectedOverlay()?.overlayRef?.overlayElement.querySelectorAll(`.bx-select-option:not(:disabled)`)??[])}static ɵfac=function(e){return new(e||i)};static ɵdir=pe({type:i,viewQuery:function(e,n){e&1&&Wy(n.connectedOverlay,dR,5)(n.searchInputRef,al,5)(n.originRef,sl,5,ke)(n.valueOverflow,ll,5)(n.labelOverflow,dl,5),e&2&&db(5)},inputs:{clearable:[1,`clearable`],clearLabel:[1,`clearLabel`],clearTooltip:[1,`clearTooltip`],selectionDisplay:[1,`selectionDisplay`],tagConfig:[1,`tagConfig`],overflowTagConfig:[1,`overflowTagConfig`],visibleTagCount:[1,`visibleTagCount`],tagOverflowText:[1,`tagOverflowText`],options:[1,`options`],compareWith:[1,`compareWith`],isSearchable:[1,`isSearchable`],externalFiltering:[1,`externalFiltering`],searchValue:[1,`searchValue`],searchDebounce:[1,`searchDebounce`],searchPlaceholder:[1,`searchPlaceholder`],emptyMessage:[1,`emptyMessage`],loadingLabel:[1,`loadingLabel`],loadingAriaLabel:[1,`loadingAriaLabel`],hasMore:[1,`hasMore`],loadError:[1,`loadError`],loadMoreConfig:[1,`loadMoreConfig`],loadMoreTemplate:[1,`loadMoreTemplate`],panelClass:[1,`panelClass`],optionTemplate:[1,`optionTemplate`],triggerTemplate:[1,`triggerTemplate`]},outputs:{searchValue:`searchValueChange`,search:`search`,loadMore:`loadMore`,openedChange:`openedChange`},features:[xt]})};var ul=[[[``,`bxSuffix`,``]],[[`bx-error`]],[[`bx-hint`]]];var pl=[`[bxSuffix]`,`bx-error`,`bx-hint`];var bl=[`ngProjectAs`,`bx-error`,5,[`bx-error`]];var ml=[`ngProjectAs`,`bx-hint`,5,[`bx-hint`]];var gl=(i,t,e)=>({$implicit:i,selected:t,index:e});var Wo=(i,t)=>t.value;function hl(i,t){i&1&&(bo$1(0,`span`,19),aA(1,`*`),Go$1())}function fl(i,t){if(i&1&&(bo$1(0,`span`,10)(1,`span`,18,2),aA(3),Go$1(),tb(4,hl,2,0,`span`,19),Go$1()),i&2){let e=$s$1();qs$1(),$o$1(`bxTruncate`,!0),qs$1(2),sk(e.resolvedLabel()),qs$1(),ob(e.required()&&!e.resolvedHideRequiredMarker()?4:-1)}}function xl(i,t){if(i&1&&sd$1(0,12),i&2){let e=$s$1();$o$1(`ngTemplateOutlet`,t)(`ngTemplateOutletContext`,e.triggerContext())}}function vl(i,t){if(i&1&&td$1(0,`bx-tag`,20),i&2){let e=t.$implicit,n=$s$1(2);$o$1(`text`,e.label)(`config`,n.selectionTagConfig(e))(`disabled`,n.disabled()||!!e.disabled)(`focusable`,!1)(`tooltipOnTruncate`,n.resolvedTooltipOnTruncate()?void 0:!1)}}function yl(i,t){if(i&1&&td$1(0,`bx-tag`,21),i&2){let e=$s$1(2);$o$1(`text`,e.overflowTagLabel())(`config`,e.overflowTagConfig())(`tooltip`,e.overflowTagTooltip())(`focusable`,!1)(`tooltipOnTruncate`,e.resolvedTooltipOnTruncate()?void 0:!1)}}function Sl(i,t){if(i&1&&(bo$1(0,`span`,13),nb(1,vl,1,5,`bx-tag`,20,Wo),tb(3,yl,1,5,`bx-tag`,21),Go$1()),i&2){let e=$s$1();qs$1(),sb(e.visibleTags()),qs$1(2),ob(e.selectedOptions().length>e.visibleTagCount()?3:-1)}}function _l(i,t){if(i&1&&aA(0),i&2){let e=$s$1();ub(` `,e.selectedOptionLabel()||(e.isFloating()||!e.label()?e.resolvedPlaceholder():``),` `)}}function Cl(i,t){i&1&&td$1(0,`bx-loading-spinner`,22),i&2&&$o$1(`size`,16)(`decorative`,!0)}function Ml(i,t){i&1&&td$1(0,`bx-icon`,23)}function wl(i,t){if(i&1&&tb(0,Cl,1,2,`bx-loading-spinner`,22)(1,Ml,1,0,`bx-icon`,23),i&2){let e=t.$implicit;ob(e?0:1)}}function Nl(i,t){if(i&1){let e=lb();bo$1(0,`button`,24),br(`click`,function(){il$1(e);let r=$s$1();return al$1(r.clearSelection())}),td$1(1,`bx-icon`,25),Go$1()}if(i&2){let e=$s$1();$o$1(`surfaceEffects`,!1)(`disabled`,e.disabled())(`bxTooltip`,e.resolvedClearTooltip()),vo$1(`aria-label`,e.resolvedClearLabel())}}function Tl(i,t){if(i&1){let e=lb();bo$1(0,`div`,28)(1,`bx-search-input`,33,5),br(`search`,function(r){il$1(e);let o=$s$1(3);return al$1(o.onSearchChange(r))})(`keydown.enter`,function(r){return r.preventDefault()}),Go$1()()}if(i&2){let e=$s$1(3);qs$1(),$o$1(`value`,e.searchValue())(`compact`,!0)(`placeholder`,e.resolvedSearchPlaceholder())(`ariaLabel`,e.resolvedSearchPlaceholder())}}function Pl(i,t){if(i&1&&(bo$1(0,`div`,34),aA(1),Go$1()),i&2){let e=$s$1(),n=e.$implicit,r=e.$index,o=$s$1(3);$o$1(`id`,o.controlId()+`-group-`+r),qs$1(),sk(n.resolvedGroup)}}function Ol(i,t){i&1&&td$1(0,`bx-icon`,37)}function kl(i,t){if(i&1&&td$1(0,`bx-icon`,38),i&2){let e=$s$1().$implicit;$o$1(`name`,e.icon)}}function Il(i,t){if(i&1&&sd$1(0,12),i&2){let e=$s$1(),n=e.$implicit,r=e.$index,o=$s$1(3);$o$1(`ngTemplateOutlet`,t)(`ngTemplateOutletContext`,wA(2,gl,n,o.isSelected(n.value),r))}}function Dl(i,t){if(i&1&&(bo$1(0,`span`),aA(1),Go$1()),i&2){let e=$s$1().$implicit;qs$1(),sk(e.resolvedStr)}}function El(i,t){if(i&1){let e=lb();tb(0,Pl,2,2,`div`,34),bo$1(1,`button`,35),br(`click`,function(){let r=il$1(e).$implicit,o=$s$1(3);return al$1(o.selectOption(r))}),bo$1(2,`span`,36),tb(3,Ol,1,0,`bx-icon`,37),Go$1(),tb(4,kl,1,1,`bx-icon`,38),tb(5,Il,1,6,`ng-container`,12)(6,Dl,2,1,`span`),Go$1()}if(i&2){let e,n=t.$implicit,r=t.$index,o=$s$1(3);ob(n.resolvedGroup&&(r===0||o.filteredOptions()[r-1].resolvedGroup!==n.resolvedGroup)?0:-1),qs$1(),$o$1(`disabled`,n.disabled||n.groupDisabled||!1),vo$1(`aria-selected`,o.isSelected(n.value)),qs$1(2),ob(o.isSelected(n.value)?3:-1),qs$1(),ob(n.icon?4:-1),qs$1(),ob((e=o.optionTemplate())?5:6,e)}}function Rl(i,t){if(i&1&&(bo$1(0,`div`,39),aA(1),Go$1()),i&2){let e=$s$1(4);qs$1(),sk(e.resolvedEmptyMessage())}}function Ll(i,t){if(i&1&&tb(0,Rl,2,1,`div`,39),i&2){let e=$s$1(3);ob(e.loading()?-1:0)}}function Al(i,t){if(i&1&&(bo$1(0,`span`),aA(1),Go$1()),i&2){let e=$s$1(4);qs$1(),sk(e.resolvedLoadingLabel())}}function Fl(i,t){i&1&&td$1(0,`bx-loading-spinner`,22),i&2&&$o$1(`size`,20)(`decorative`,!0)}function Vl(i,t){if(i&1&&(bo$1(0,`div`,31),tb(1,Al,2,1,`span`)(2,Fl,1,2,`bx-loading-spinner`,22),Go$1()),i&2){let e=$s$1(3);vo$1(`aria-label`,e.resolvedLoadingLabel()||e.resolvedLoadingAriaLabel()),qs$1(),ob(e.resolvedLoadingLabel()?1:2)}}function zl(i,t){if(i&1&&(bo$1(0,`div`,32),td$1(1,`bx-loading-indicator`,40),Go$1()),i&2){let e=$s$1(3);qs$1(),$o$1(`size`,16)(`label`,e.loadingLabel()??e.loadingAriaLabel())}}function Bl(i,t){if(i&1){let e=lb();bo$1(0,`div`,27),br(`keydown`,function(r){il$1(e);let o=$s$1(2);return al$1(o.onPanelKey(r))}),tb(1,Tl,3,4,`div`,28),bo$1(2,`div`,29,4),br(`loadMore`,function(r){il$1(e);let o=$s$1(2);return al$1(o.requestMore(r))}),bo$1(4,`div`,30),nb(5,El,7,6,null,null,Wo,!1,Ll,1,1),Go$1(),tb(8,Vl,3,2,`div`,31)(9,zl,2,2,`div`,32),Go$1()()}if(i&2){let e=jT(3),n=$s$1(2);XT(n.panelClass()),$o$1(`bxSurfaceInteractive`,!1),qs$1(),ob(n.isSearchable()?1:-1),qs$1(),$o$1(`loadMoreHasMore`,n.hasMore())(`loadMoreSuppressed`,n.isSearching())(`loadMoreLoading`,n.loading())(`loadMoreDisabled`,n.disabled()||n.isReadonly())(`loadMoreError`,n.loadError())(`loadMoreConfig`,n.loadMoreConfig())(`loadMoreTemplate`,n.loadMoreTemplate())(`loadMoreRevision`,n.options()),qs$1(2),$o$1(`hidden`,n.isSearching())(`id`,n.controlId()+`-options`),vo$1(`aria-label`,n.ariaLabel()||n.resolvedLabel()),qs$1(),sb(n.filteredOptions()),qs$1(3),ob(n.isSearching()?8:n.loading()&&!e.actionVisible()?9:-1)}}function Hl(i,t){if(i&1){let e=lb();ed$1(0,Bl,10,17,`ng-template`,26,3,TA),br(`overlayOutsideClick`,function(r){il$1(e);let o=$s$1();return al$1(o.onOutsideClick(r))})(`attach`,function(){il$1(e);let r=jT(1),o=$s$1();return al$1(o.onPanelAttach(r))})(`detach`,function(){il$1(e);let r=$s$1();return al$1(r.onPanelDetach())})(`positionChange`,function(){il$1(e);let r=$s$1();return al$1(r.refreshPanel())})}if(i&2){let e=$s$1(),n=jT(3);$o$1(`cdkConnectedOverlayOrigin`,n)(`cdkConnectedOverlayOpen`,!0)(`cdkConnectedOverlayPositions`,e.overlayPositions)(`cdkConnectedOverlayHasBackdrop`,!1)(`cdkConnectedOverlayPush`,!0)(`cdkConnectedOverlayViewportMargin`,8)(`cdkConnectedOverlayScrollStrategy`,e.panelScrollStrategy)(`cdkConnectedOverlayUsePopover`,e.overlayPopoverLocation(n.elementRef.nativeElement))(`cdkConnectedOverlayWidth`,n.elementRef.nativeElement.offsetWidth)}}var jn=class i extends Ft{selectionChange=Ok();clearSelection(){this.clearSelectedValue(null)&&this.selectionChange.emit({value:null,source:`clear`})}isSelected(t){let e=this.internalValue();return e!==null&&this.compareWith()(e,t)}selectOption(t){t.disabled||t.groupDisabled||this.disabled()||this.isReadonly()||(this.updateValue(t.value),this.selectionChange.emit({value:t.value,source:`user`}),this.close())}static ɵfac=(()=>{let t;return function(n){return(t||(t=ho$1(i)))(n||i)}})();static ɵcmp=Fr({type:i,selectors:[[`bx-select`]],outputs:{selectionChange:`selectionChange`},features:[xt],ngContentSelectors:pl,decls:19,vars:47,consts:[[`origin`,`cdkOverlayOrigin`],[`valueOverflow`,`bxTruncate`],[`labelOverflow`,`bxTruncate`],[`panelOverlay`,`cdkConnectedOverlay`],[`pagination`,`bxLoadMore`],[`searchInput`,``],[3,`control`,`inline`,`tooltip`,`showLoadingIndicator`,`hint`,`hintEnd`,`subscriptSizing`,`forId`],[1,`bx-select-control`],[`type`,`button`,`role`,`combobox`,`aria-haspopup`,`listbox`,`cdkOverlayOrigin`,``,`bxSurface`,``,1,`bx-select-trigger`,3,`click`,`keydown`,`blur`,`bxTooltip`,`bxTooltipHover`,`bxTooltipTouch`,`id`,`disabled`],[1,`bx-select-container`],[1,`bx-floating-label`],[1,`bx-select-value`,3,`bxTruncate`],[3,`ngTemplateOutlet`,`ngTemplateOutletContext`],[1,`bx-selected-tags`],[`aria-hidden`,`true`,1,`bx-select-caret`],[3,`value`],[`bx-button`,``,`type`,`button`,`variant`,`text`,1,`bx-select-clear`,3,`surfaceEffects`,`disabled`,`bxTooltip`],[`cdkConnectedOverlay`,``,3,`cdkConnectedOverlayOrigin`,`cdkConnectedOverlayOpen`,`cdkConnectedOverlayPositions`,`cdkConnectedOverlayHasBackdrop`,`cdkConnectedOverlayPush`,`cdkConnectedOverlayViewportMargin`,`cdkConnectedOverlayScrollStrategy`,`cdkConnectedOverlayUsePopover`,`cdkConnectedOverlayWidth`],[3,`bxTruncate`],[`aria-hidden`,`true`,1,`bx-field-required`],[3,`text`,`config`,`disabled`,`focusable`,`tooltipOnTruncate`],[1,`bx-overflow-tag`,3,`text`,`config`,`tooltip`,`focusable`,`tooltipOnTruncate`],[3,`size`,`decorative`],[`name`,`chevron-down`,`size`,`16`],[`bx-button`,``,`type`,`button`,`variant`,`text`,1,`bx-select-clear`,3,`click`,`surfaceEffects`,`disabled`,`bxTooltip`],[`name`,`x`,`size`,`16`],[`cdkConnectedOverlay`,``,3,`overlayOutsideClick`,`attach`,`detach`,`positionChange`,`cdkConnectedOverlayOrigin`,`cdkConnectedOverlayOpen`,`cdkConnectedOverlayPositions`,`cdkConnectedOverlayHasBackdrop`,`cdkConnectedOverlayPush`,`cdkConnectedOverlayViewportMargin`,`cdkConnectedOverlayScrollStrategy`,`cdkConnectedOverlayUsePopover`,`cdkConnectedOverlayWidth`],[`bxSurface`,``,`data-bx-surface`,`glass`,`tabindex`,`-1`,1,`bx-select-panel`,3,`keydown`,`bxSurfaceInteractive`],[1,`bx-select-search-container`],[`bxLoadMore`,``,1,`bx-select-menu-container`,3,`loadMore`,`loadMoreHasMore`,`loadMoreSuppressed`,`loadMoreLoading`,`loadMoreDisabled`,`loadMoreError`,`loadMoreConfig`,`loadMoreTemplate`,`loadMoreRevision`],[`role`,`listbox`,3,`hidden`,`id`],[`role`,`status`,1,`bx-select-search-state`],[1,`bx-select-loading`],[3,`search`,`keydown.enter`,`value`,`compact`,`placeholder`,`ariaLabel`],[1,`bx-select-group`,3,`id`],[`type`,`button`,`role`,`option`,`tabindex`,`-1`,1,`bx-select-option`,3,`click`,`disabled`],[`aria-hidden`,`true`,1,`bx-select-check-placeholder`],[`name`,`check`,`size`,`16`],[`size`,`16`,3,`name`],[`role`,`status`,1,`bx-select-empty`],[3,`size`,`label`]],template:function(e,n){if(e&1&&($y(ul),bo$1(0,`bx-form-field`,6)(1,`div`,7)(2,`button`,8,0),br(`click`,function(){return n.toggleOpen()})(`keydown`,function(o){return n.onTriggerKey(o)})(`blur`,function(){return n.onTriggerBlur()}),bo$1(4,`div`,9),tb(5,fl,5,3,`span`,10),bo$1(6,`span`,11,1),tb(8,xl,1,2,`ng-container`,12)(9,Sl,4,1,`span`,13)(10,_l,1,1),Go$1()(),Gy(11),bo$1(12,`span`,14)(13,`bx-visual-transition`,15),ed$1(14,wl,2,1,`ng-template`),Go$1()()(),tb(15,Nl,2,4,`button`,16),Go$1(),tb(16,Hl,2,9,null,17),Gy(17,1,bl),Gy(18,2,ml),Go$1()),e&2){let r;$o$1(`control`,n.fieldControl)(`inline`,!0)(`tooltip`,n.tooltip())(`showLoadingIndicator`,!1)(`hint`,n.hint())(`hintEnd`,n.hintEnd())(`subscriptSizing`,n.resolvedSubscriptSizing())(`forId`,n.controlId()),qs$1(),tr(`has-clear`,n.showClear()),qs$1(),tr(`has-label`,!!n.label())(`is-invalid`,n.showError())(`is-outline`,n.resolvedAppearance()===`outline`)(`is-open`,n.isOpen())(`is-floating`,n.isFloating())(`is-readonly`,n.isReadonly())(`is-keyboard-focused`,n.keyboardFocused()),$o$1(`bxTooltip`,n.resolvedTooltipOnTruncate()?n.selectionDisplay()===`tags`?n.selectedOptionLabel():n.truncatedSelectionTooltip():``)(`bxTooltipHover`,n.selectionDisplay()!==`tags`)(`bxTooltipTouch`,n.selectionDisplay()===`tags`?`none`:`longpress`)(`id`,n.controlId())(`disabled`,n.disabled()),vo$1(`data-testid`,n.dataTestId())(`aria-label`,n.ariaLabel()||n.resolvedLabel())(`aria-labelledby`,n.ariaLabelledBy())(`aria-describedby`,n.describedBy())(`aria-invalid`,n.showError())(`aria-required`,n.required())(`aria-readonly`,n.isReadonly())(`aria-busy`,n.loading()||n.pending()||n.isSearching())(`aria-expanded`,n.isOpen())(`aria-controls`,n.isPanelAttached()?n.controlId()+`-options`:null),qs$1(3),ob(n.label()?5:-1),qs$1(),tr(`is-placeholder`,!n.selectedOptionLabel()),$o$1(`bxTruncate`,!(n.selectionDisplay()===`tags`&&n.selectedOptions().length)&&!n.triggerTemplate()),qs$1(2),ob((r=n.triggerTemplate())?8:n.selectionDisplay()===`tags`&&n.selectedOptions().length?9:10,r),qs$1(5),$o$1(`value`,n.loading()||n.pending()||n.isSearching()),qs$1(2),ob(n.showClear()?15:-1),qs$1(),ob(n.isPanelAttached()?16:-1)}},dependencies:[qu$1,UC,uR,dR,eh,ee,xe,YC,At,He,Mb,Zi$1,Et$1,Bs$1,Pt$1,ct$1],styles:[`
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
}`]})};var Wl=[`track`];var ql=[`*`,[[`bx-error`]],[[`bx-hint`]]];var jl=[`*`,`bx-error`,`bx-hint`];var $l=[`ngProjectAs`,`bx-error`,5,[`bx-error`]];var Gl=[`ngProjectAs`,`bx-hint`,5,[`bx-hint`]];function Kl(i,t){i&1&&(bo$1(0,`span`,7),aA(1,`*`),Go$1())}var qo=class i extends It{bxA11yService=b(Br);track=kz(`track`);motion;constructor(){super(),Bk(()=>{let t=this.track()?.nativeElement,e=this.displayedChecked()?1:0,n=this.bxA11yService.isReducedMotion();if(!t)return;let r=!this.motion;this.motion??=Zn$1([e],([o],[a])=>{Yn$1(t,{"--bx-toggle-position":String(o),"--bx-toggle-stretch":String(this.bxA11yService.isReducedMotion()?0:Math.min(.05,Math.abs(a)*.008))})},vr.elastic),this.motion.retarget([e],r||n)}),this.destroyRef.onDestroy(()=>this.motion?.destroy())}static ɵfac=function(e){return new(e||i)};static ɵcmp=Fr({type:i,selectors:[[`bx-slide-toggle`]],viewQuery:function(e,n){e&1&&Wy(n.track,Wl,5),e&2&&db()},features:[xt],ngContentSelectors:jl,decls:12,vars:36,consts:[[`track`,``],[3,`control`,`inline`,`tooltip`,`loading`,`hint`,`hintEnd`,`subscriptSizing`,`forId`],[1,`bx-inline-wrapper`],[`type`,`checkbox`,`role`,`switch`,1,`bx-visually-hidden`,3,`click`,`change`,`blur`,`id`,`disabled`,`required`,`checked`],[`bxSurface`,``,1,`bx-slide-toggle-track`,3,`bxSurfaceEmission`,`bxSurfaceEmissionStrength`],[1,`bx-slide-toggle-thumb`],[1,`bx-inline-label`],[`aria-hidden`,`true`,1,`bx-inline-required`]],template:function(e,n){e&1&&($y(ql),bo$1(0,`bx-form-field`,1)(1,`label`,2)(2,`input`,3),br(`click`,function(o){return n.onReadonlyClick(o)})(`change`,function(o){return n.onToggle(o)})(`blur`,function(){return n.onBlur()}),Go$1(),bo$1(3,`div`,4,0),td$1(5,`div`,5),Go$1(),bo$1(6,`span`,6),Gy(7),aA(8),tb(9,Kl,2,0,`span`,7),Go$1()(),Gy(10,1,$l),Gy(11,2,Gl),Go$1()),e&2&&($o$1(`control`,n.fieldControl)(`inline`,!0)(`tooltip`,n.tooltip())(`loading`,n.loading())(`hint`,n.hint())(`hintEnd`,n.hintEnd())(`subscriptSizing`,n.resolvedSubscriptSizing())(`forId`,n.controlId()),qs$1(),tr(`is-disabled`,n.disabled())(`is-readonly`,n.isReadonly())(`is-keyboard-focused`,n.keyboardFocused())(`label-before`,n.labelPosition()===`before`),qs$1(),$o$1(`id`,n.controlId())(`disabled`,n.disabled())(`required`,n.effectiveRequired())(`checked`,n.displayedChecked()),vo$1(`name`,n.name()||null)(`data-testid`,n.dataTestId())(`aria-label`,n.ariaLabel())(`aria-labelledby`,n.ariaLabelledBy())(`aria-describedby`,n.describedBy())(`aria-invalid`,n.showError())(`aria-readonly`,n.isReadonly())(`aria-checked`,n.displayedChecked()),qs$1(),tr(`is-checked`,n.displayedChecked())(`is-invalid`,n.showError()),$o$1(`bxSurfaceEmission`,n.showError()?`var(--bx-text-danger)`:`var(--bx-accent)`)(`bxSurfaceEmissionStrength`,n.displayedChecked()?1.1:.35),qs$1(5),ub(``,n.resolvedLabel(),` `),qs$1(),ob(n.effectiveRequired()&&!n.resolvedHideRequiredMarker()?9:-1))},dependencies:[UC,ee],styles:[`
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
}`]})};var $n=class i{elementRef=b(ke);bxA11yService=b(Br);glassiness=re();discrete=re(!1);displayWith=re(String);showTickMarks=re(!1);shell;valueLabel;tickMarks;tickList;thumb;motion;opticSurface;releaseGesture;pressed=!1;lastPosition=0;lastInputTime=0;trackWidth=0;thumbWidth=0;pointerId=null;constructor(){b(ni),$e(()=>{let n=this.bxA11yService.isReducedMotion(),r=this.glassiness()??`auto`;this.opticSurface?.update({glassiness:r,quality:`auto`,localRefraction:!0,interactive:!1,emission:!1,reducedMotion:n}),n&&this.motion?.retarget([0,0],!0)}),sI(()=>this.sync());let t=b(le),e=b(he);er(()=>{let n=this.elementRef.nativeElement,r=n.ownerDocument.createElement(`span`);r.className=`bx-slider-shell`;let o=n.ownerDocument.createElement(`span`);o.className=`bx-slider-thumb`,o.setAttribute(`aria-hidden`,`true`);let a=n.ownerDocument.createElement(`span`);a.className=`bx-slider-lens`,o.append(a);let u=n.ownerDocument.createElement(`span`);u.className=`bx-slider-optic`,u.hidden=!0,o.append(u),n.before(r),r.append(n,o),this.shell=r,this.thumb=o,this.motion=Zn$1([0,0],([z,te])=>{let me=this.bxA11yService.isReducedMotion();u.hidden=z<.01,Yn$1(o,{"--bx-slider-pressure":String(me?0:z),"--bx-slider-stretch":String(me?0:Math.max(0,te))})},vr.elastic);let g=z=>{z?.type===`visibilitychange`&&!n.ownerDocument.hidden||z&&`pointerId`in z&&z.pointerId!==this.pointerId||(this.pressed=!1,this.pointerId=null,this.motion?.retarget([0,0],this.bxA11yService.isReducedMotion()),n.ownerDocument.defaultView?.removeEventListener(`pointerup`,g,!0),n.ownerDocument.defaultView?.removeEventListener(`pointercancel`,g,!0),n.ownerDocument.defaultView?.removeEventListener(`blur`,g),n.ownerDocument.removeEventListener(`visibilitychange`,g),this.releaseGesture=void 0)},S=z=>{!z.isPrimary||z.button!==0||n.disabled||n.hasAttribute(`readonly`)||n.getAttribute(`aria-readonly`)===`true`||(this.opticSurface??=t.runOutsideAngular(()=>Wn$1(u,{glassiness:this.glassiness()??`auto`,quality:`auto`,localRefraction:!0,interactive:!1,emission:!1,reducedMotion:this.bxA11yService.isReducedMotion()})),this.pressed=!0,this.pointerId=z.pointerId,this.lastInputTime=0,this.motion?.retarget([1,0],this.bxA11yService.isReducedMotion()),n.ownerDocument.defaultView?.addEventListener(`pointerup`,g,!0),n.ownerDocument.defaultView?.addEventListener(`pointercancel`,g,!0),n.ownerDocument.defaultView?.addEventListener(`blur`,g),n.ownerDocument.addEventListener(`visibilitychange`,g),this.releaseGesture=g)};n.addEventListener(`pointerdown`,S),n.addEventListener(`blur`,g);let P=n.ownerDocument.createElement(`span`);P.className=`bx-slider-value-label`,P.setAttribute(`aria-hidden`,`true`),r.append(P),this.valueLabel=P;let O=n.ownerDocument.createElement(`datalist`);O.id=`bx-slider-ticks-${n.id||Math.random().toString(36).slice(2)}`,r.append(O),this.tickList=O;let D=n.ownerDocument.createElement(`span`);D.className=`bx-slider-ticks`,D.setAttribute(`aria-hidden`,`true`),r.append(D),this.tickMarks=D,this.sync();let V=()=>{this.trackWidth=n.offsetWidth,this.thumbWidth=o.offsetWidth,r.style.setProperty(`--bx-slider-center-y`,`${n.offsetTop+n.offsetHeight/2}px`),r.style.setProperty(`--bx-slider-track-start`,`${n.offsetLeft}px`),r.style.setProperty(`--bx-slider-track-width`,`${n.offsetWidth}px`),Gn$1(o),this.sync()},J=new ResizeObserver(V);t.runOutsideAngular(()=>{J.observe(n),J.observe(r),J.observe(o),V()});let U=t.runOutsideAngular(()=>CR(o,z=>{let te=z.reflectionStrength>z.strength,me=te?z.reflectionStrength:z.strength;me<=.04?(o.style.removeProperty(`--bx-slider-light-color`),o.style.removeProperty(`--bx-slider-light-strength`)):(o.style.setProperty(`--bx-slider-light-color`,te?z.reflection:z.color),o.style.setProperty(`--bx-slider-light-strength`,String(me))),o.style.setProperty(`--bx-slider-light-x`,`${te?z.reflectionX:z.x}%`),o.style.setProperty(`--bx-slider-light-y`,`${te?z.reflectionY:z.y}%`),Yn$1(r,{"--bx-slider-light-color":te?z.reflection:z.color,"--bx-slider-light-strength":String(Math.max(.04,me))})},n));e.onDestroy(()=>{J.disconnect(),U(),g(),n.removeEventListener(`pointerdown`,S),n.removeEventListener(`blur`,g),this.motion?.destroy(),this.opticSurface?.destroy(),this.opticSurface=void 0,n.parentNode===r?r.replaceWith(n):r.remove(),this.shell=this.thumb=void 0})})}onInput(t){let e=this.elementRef.nativeElement,n=(e.max===``?100:Number(e.max))-(e.min===``?0:Number(e.min)),r=n>0?e.valueAsNumber/n:0,o=Math.max(.008,(t.timeStamp-this.lastInputTime)/1e3),a=this.pressed&&this.lastInputTime>0?Math.min(.065,Math.abs(r-this.lastPosition)/o*.015):0;this.lastPosition=r,this.lastInputTime=t.timeStamp,this.motion?.retarget([this.pressed?1:0,a],this.bxA11yService.isReducedMotion()),this.sync()}sync(){let t=this.elementRef.nativeElement;(t.disabled||t.hasAttribute(`readonly`)||t.getAttribute(`aria-readonly`)===`true`)&&this.releaseGesture?.();let e=t.min===``?0:Number(t.min),n=t.max===``?100:Number(t.max),r=n>e?Math.max(0,Math.min(100,(t.valueAsNumber-e)/(n-e)*100)):0;if(this.shell&&this.thumbWidth>0&&this.trackWidth>0){let a=t.hasAttribute(`aria-valuemax`)?Number(t.getAttribute(`aria-valuemax`)):t.hasAttribute(`aria-valuemin`)?Number(t.getAttribute(`aria-valuemin`)):null;if(a!==null&&Number.isFinite(a)&&n>e){let u=Math.abs(a-t.valueAsNumber)/(n-e)*(this.trackWidth-this.thumbWidth),g=String(Math.max(0,Math.min(.45,u*2/this.thumbWidth-2)));this.shell.style.getPropertyValue(`--bx-slider-neighbor-limit`)!==g&&this.shell.style.setProperty(`--bx-slider-neighbor-limit`,g)}}if(this.valueLabel&&(this.valueLabel.hidden=!this.discrete(),this.valueLabel.textContent=this.displayWith()(t.valueAsNumber)),this.tickList){let a=Math.min(1e3,Math.floor((n-e)/(Number(t.step)||1))),u=`${e}:${n}:${t.step}:${this.showTickMarks()}`;if(this.tickList.dataset.range!==u&&(this.tickList.replaceChildren(),this.tickMarks?.replaceChildren(),this.tickList.dataset.range=u,this.showTickMarks()&&a>0))for(let g=0;g<=a;g++){let S=t.ownerDocument.createElement(`option`);S.value=String(e+g*(Number(t.step)||1)),this.tickList.append(S);let P=t.ownerDocument.createElement(`span`);P.className=`bx-slider-tick`,P.style.setProperty(`--bx-slider-tick-position`,String(g/a)),this.tickMarks?.append(P)}this.showTickMarks()?t.setAttribute(`list`,this.tickList.id):t.getAttribute(`list`)===this.tickList.id&&t.removeAttribute(`list`)}let o=`${Number.isFinite(r)?r:0}%`;if(t.style.getPropertyValue(`--bx-slider-progress`)!==o&&t.style.setProperty(`--bx-slider-progress`,o),this.shell){let a=String((Number.isFinite(r)?r:0)/100);this.shell.style.getPropertyValue(`--bx-slider-position`)!==a&&(this.shell.style.setProperty(`--bx-slider-position`,a),this.thumb&&Gn$1(this.thumb))}}static ɵfac=function(e){return new(e||i)};static ɵdir=pe({type:i,selectors:[[`input`,`type`,`range`,`bxSlider`,``]],hostAttrs:[1,`bx-slider`],hostBindings:function(e,n){e&1&&br(`input`,function(o){return n.onInput(o)})},inputs:{glassiness:[1,`glassiness`],discrete:[1,`discrete`],displayWith:[1,`displayWith`],showTickMarks:[1,`showTickMarks`]}})};var Zl=[`*`,[[`bx-error`]],[[`bx-hint`]]];var Xl=[`*`,`bx-error`,`bx-hint`];var Ul=[`ngProjectAs`,`bx-error`,5,[`bx-error`]];var Yl=[`ngProjectAs`,`bx-hint`,5,[`bx-hint`]];var jo=class i extends ve{groupName=U(()=>this.name()||this.controlId());focus(t){let e=this.nativeElement.querySelector(`input:checked:not(:disabled)`);e?e.focus(t):super.focus(t)}select(t){this.updateValue(t)}markTouched(){this.markAsTouched()}static ɵfac=(()=>{let t;return function(n){return(t||(t=ho$1(i)))(n||i)}})();static ɵcmp=Fr({type:i,selectors:[[`bx-radio-group`]],features:[rr([{provide:Hn,useExisting:jt$1(()=>i)}]),xt],ngContentSelectors:Xl,decls:5,vars:15,consts:[[3,`control`,`label`,`hint`,`hintEnd`,`tooltip`,`hideRequiredMarker`,`subscriptSizing`,`forId`],[`role`,`radiogroup`,3,`id`]],template:function(e,n){e&1&&($y(Zl),bo$1(0,`bx-form-field`,0)(1,`div`,1),Gy(2),Go$1(),Gy(3,1,Ul),Gy(4,2,Yl),Go$1()),e&2&&($o$1(`control`,n.fieldControl)(`label`,n.label())(`hint`,n.hint())(`hintEnd`,n.hintEnd())(`tooltip`,n.tooltip())(`hideRequiredMarker`,n.resolvedHideRequiredMarker())(`subscriptSizing`,n.resolvedSubscriptSizing())(`forId`,n.controlId()),qs$1(),$o$1(`id`,n.controlId()),vo$1(`aria-label`,n.ariaLabel()||n.resolvedLabel())(`aria-labelledby`,n.ariaLabelledBy())(`aria-describedby`,n.describedBy())(`aria-invalid`,n.showError())(`aria-required`,n.effectiveRequired())(`aria-readonly`,n.isReadonly()))},dependencies:[ee],styles:[`
[_nghost-%COMP%] {
  display: block;
}
[role=radiogroup][_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: var(--%NS%bx-radio-group-gap, 0.5rem);
  --%NS%bx-field-subscript-height: 0;
}`]})};var $o=class i{static ɵfac=function(e){return new(e||i)};static ɵdir=pe({type:i,selectors:[[``,`bxPrefix`,``]],hostAttrs:[1,`bx-field-prefix`]})};var Go=class i{static ɵfac=function(e){return new(e||i)};static ɵdir=pe({type:i,selectors:[[``,`bxSuffix`,``]],hostAttrs:[1,`bx-field-suffix`]})};function Ko(i){let t=Number(i);return Number.isFinite(t)?Math.max(2,Math.floor(t)):2}var Ql=[`summaryOverflow`];var Jl=[[[``,`bxSuffix`,``]],[[`bx-error`]],[[`bx-hint`]]];var ed=[`[bxSuffix]`,`bx-error`,`bx-hint`];var td=[`ngProjectAs`,`bx-error`,5,[`bx-error`]];var nd=[`ngProjectAs`,`bx-hint`,5,[`bx-hint`]];var id=(i,t,e)=>({$implicit:i,selected:t,index:e});var Xo=(i,t)=>t.value;function rd(i,t){i&1&&(bo$1(0,`span`,21),aA(1,`*`),Go$1())}function od(i,t){if(i&1&&(bo$1(0,`span`,11)(1,`span`,20,3),aA(3),Go$1(),tb(4,rd,2,0,`span`,21),Go$1()),i&2){let e=$s$1();qs$1(),$o$1(`bxTruncate`,!0),qs$1(2),sk(e.resolvedLabel()),qs$1(),ob(e.required()&&!e.resolvedHideRequiredMarker()?4:-1)}}function ad(i,t){if(i&1&&sd$1(0,13),i&2){let e=$s$1();$o$1(`ngTemplateOutlet`,t)(`ngTemplateOutletContext`,e.triggerContext())}}function sd(i,t){if(i&1&&td$1(0,`bx-tag`,22),i&2){let e=$s$1(2);$o$1(`text`,e.allSelectedText())(`config`,e.tagConfig())(`focusable`,!1)(`tooltipOnTruncate`,!1)}}function ld(i,t){if(i&1&&td$1(0,`bx-tag`,23),i&2){let e=t.$implicit,n=$s$1(3);$o$1(`text`,e.label)(`config`,n.selectionTagConfig(e))(`disabled`,n.disabled()||!!e.disabled)(`focusable`,!1)(`tooltipOnTruncate`,n.resolvedTooltipOnTruncate()?void 0:!1)}}function dd(i,t){if(i&1&&td$1(0,`bx-tag`,24),i&2){let e=$s$1(3);$o$1(`text`,e.overflowTagLabel())(`config`,e.overflowTagConfig())(`tooltip`,e.overflowTagTooltip())(`focusable`,!1)(`tooltipOnTruncate`,e.resolvedTooltipOnTruncate()?void 0:!1)}}function cd(i,t){if(i&1&&(nb(0,ld,1,5,`bx-tag`,23,Xo),tb(2,dd,1,5,`bx-tag`,24)),i&2){let e=$s$1(2);sb(e.visibleTags()),qs$1(2),ob(e.selectedOptions().length>e.visibleTagCount()?2:-1)}}function ud(i,t){if(i&1&&(bo$1(0,`span`,14),tb(1,sd,1,4,`bx-tag`,22)(2,cd,3,1),Go$1()),i&2){let e=$s$1();qs$1(),ob(e.selectAll()&&e.allSelectedText()?1:2)}}function pd(i,t){if(i&1&&aA(0),i&2){let e=$s$1();ub(` `,e.displayedSelection()||(e.isFloating()||!e.label()?e.resolvedPlaceholder():``),` `)}}function bd(i,t){i&1&&td$1(0,`bx-loading-spinner`,25),i&2&&$o$1(`size`,16)(`decorative`,!0)}function md(i,t){i&1&&td$1(0,`bx-icon`,26)}function gd(i,t){if(i&1&&tb(0,bd,1,2,`bx-loading-spinner`,25)(1,md,1,0,`bx-icon`,26),i&2){let e=t.$implicit;ob(e?0:1)}}function hd(i,t){if(i&1){let e=lb();bo$1(0,`button`,27),br(`click`,function(){il$1(e);let r=$s$1();return al$1(r.clearSelection())}),td$1(1,`bx-icon`,28),Go$1()}if(i&2){let e=$s$1();$o$1(`surfaceEffects`,!1)(`disabled`,e.disabled())(`bxTooltip`,e.resolvedClearTooltip()),vo$1(`aria-label`,e.resolvedClearLabel())}}function fd(i,t){if(i&1){let e=lb();bo$1(0,`div`,31)(1,`bx-search-input`,37,6),br(`search`,function(r){il$1(e);let o=$s$1(3);return al$1(o.onSearchChange(r))})(`keydown.enter`,function(r){return r.preventDefault()}),Go$1()()}if(i&2){let e=$s$1(3);qs$1(),$o$1(`value`,e.searchValue())(`compact`,!0)(`placeholder`,e.resolvedSearchPlaceholder())(`ariaLabel`,e.resolvedSearchPlaceholder())}}function xd(i,t){if(i&1){let e=lb();bo$1(0,`button`,38),br(`click`,function(){il$1(e);let r=$s$1(3);return al$1(r.toggleSelectAll())}),td$1(1,`bx-checkbox-indicator`,39),aA(2),Go$1()}if(i&2){let e=$s$1(3);$o$1(`disabled`,e.disabled()||e.isReadonly()),vo$1(`aria-checked`,e.selectAllChecked()?`true`:e.someSelected()?`mixed`:`false`),qs$1(),$o$1(`checked`,e.selectAllChecked())(`indeterminate`,!e.selectAllChecked()&&e.someSelected())(`disabled`,e.disabled()),qs$1(),ub(` `,e.resolvedSelectAllLabel(),` `)}}function vd(i,t){if(i&1&&(bo$1(0,`div`,40),aA(1),Go$1()),i&2){let e=$s$1(),n=e.$implicit,r=e.$index,o=$s$1(3);$o$1(`id`,o.controlId()+`-group-`+r),qs$1(),sk(n.resolvedGroup)}}function yd(i,t){if(i&1&&td$1(0,`bx-icon`,43),i&2){let e=$s$1().$implicit;$o$1(`name`,e.icon)}}function Sd(i,t){if(i&1&&sd$1(0,13),i&2){let e=$s$1(),n=e.$implicit,r=e.$index,o=$s$1(3);$o$1(`ngTemplateOutlet`,t)(`ngTemplateOutletContext`,wA(2,id,n,o.isSelected(n.value),r))}}function _d(i,t){if(i&1&&(bo$1(0,`span`),aA(1),Go$1()),i&2){let e=$s$1().$implicit;qs$1(),sk(e.resolvedStr)}}function Cd(i,t){if(i&1){let e=lb();tb(0,vd,2,2,`div`,40),bo$1(1,`button`,41),br(`click`,function(){let r=il$1(e).$implicit,o=$s$1(3);return al$1(o.selectOption(r))}),td$1(2,`bx-checkbox-indicator`,42),tb(3,yd,1,1,`bx-icon`,43),tb(4,Sd,1,6,`ng-container`,13)(5,_d,2,1,`span`),Go$1()}if(i&2){let e,n=t.$implicit,r=t.$index,o=$s$1(3);ob(n.resolvedGroup&&(r===0||o.filteredOptions()[r-1].resolvedGroup!==n.resolvedGroup)?0:-1),qs$1(),$o$1(`disabled`,n.disabled||n.groupDisabled||!1),vo$1(`aria-selected`,o.isSelected(n.value)),qs$1(),$o$1(`checked`,o.isSelected(n.value))(`disabled`,o.disabled()||!!n.disabled||!!n.groupDisabled),qs$1(),ob(n.icon?3:-1),qs$1(),ob((e=o.optionTemplate())?4:5,e)}}function Md(i,t){if(i&1&&(bo$1(0,`div`,44),aA(1),Go$1()),i&2){let e=$s$1(4);qs$1(),sk(e.resolvedEmptyMessage())}}function wd(i,t){if(i&1&&tb(0,Md,2,1,`div`,44),i&2){let e=$s$1(3);ob(e.loading()?-1:0)}}function Nd(i,t){if(i&1&&(bo$1(0,`span`),aA(1),Go$1()),i&2){let e=$s$1(4);qs$1(),sk(e.resolvedLoadingLabel())}}function Td(i,t){i&1&&td$1(0,`bx-loading-spinner`,25),i&2&&$o$1(`size`,20)(`decorative`,!0)}function Pd(i,t){if(i&1&&(bo$1(0,`div`,35),tb(1,Nd,2,1,`span`)(2,Td,1,2,`bx-loading-spinner`,25),Go$1()),i&2){let e=$s$1(3);vo$1(`aria-label`,e.resolvedLoadingLabel()||e.resolvedLoadingAriaLabel()),qs$1(),ob(e.resolvedLoadingLabel()?1:2)}}function Od(i,t){if(i&1&&(bo$1(0,`div`,36),td$1(1,`bx-loading-indicator`,45),Go$1()),i&2){let e=$s$1(3);qs$1(),$o$1(`size`,16)(`label`,e.loadingLabel()??e.loadingAriaLabel())}}function kd(i,t){if(i&1){let e=lb();bo$1(0,`div`,30),br(`keydown`,function(r){il$1(e);let o=$s$1(2);return al$1(o.onPanelKey(r))}),tb(1,fd,3,4,`div`,31),tb(2,xd,3,6,`button`,32),bo$1(3,`div`,33,5),br(`loadMore`,function(r){il$1(e);let o=$s$1(2);return al$1(o.requestMore(r))}),bo$1(5,`div`,34),nb(6,Cd,6,7,null,null,Xo,!1,wd,1,1),Go$1(),tb(9,Pd,3,2,`div`,35)(10,Od,2,2,`div`,36),Go$1()()}if(i&2){let e=jT(4),n=$s$1(2);XT(n.panelClass()),$o$1(`bxSurfaceInteractive`,!1),qs$1(),ob(n.isSearchable()?1:-1),qs$1(),ob(n.showSelectAll()?2:-1),qs$1(),$o$1(`loadMoreHasMore`,n.hasMore())(`loadMoreSuppressed`,n.isSearching())(`loadMoreLoading`,n.loading())(`loadMoreDisabled`,n.disabled()||n.isReadonly())(`loadMoreError`,n.loadError())(`loadMoreConfig`,n.loadMoreConfig())(`loadMoreTemplate`,n.loadMoreTemplate())(`loadMoreRevision`,n.options()),qs$1(2),$o$1(`hidden`,n.isSearching())(`id`,n.controlId()+`-options`),vo$1(`aria-multiselectable`,!0)(`aria-label`,n.ariaLabel()||n.resolvedLabel()),qs$1(),sb(n.filteredOptions()),qs$1(3),ob(n.isSearching()?9:n.loading()&&!e.actionVisible()?10:-1)}}function Id(i,t){if(i&1){let e=lb();ed$1(0,kd,11,19,`ng-template`,29,4,TA),br(`overlayOutsideClick`,function(r){il$1(e);let o=$s$1();return al$1(o.onOutsideClick(r))})(`attach`,function(){il$1(e);let r=jT(1),o=$s$1();return al$1(o.onPanelAttach(r))})(`detach`,function(){il$1(e);let r=$s$1();return al$1(r.onPanelDetach())})(`positionChange`,function(){il$1(e);let r=$s$1();return al$1(r.refreshPanel())})}if(i&2){let e=$s$1(),n=jT(3);$o$1(`cdkConnectedOverlayOrigin`,n)(`cdkConnectedOverlayOpen`,!0)(`cdkConnectedOverlayPositions`,e.overlayPositions)(`cdkConnectedOverlayHasBackdrop`,!1)(`cdkConnectedOverlayPush`,!0)(`cdkConnectedOverlayViewportMargin`,8)(`cdkConnectedOverlayScrollStrategy`,e.panelScrollStrategy)(`cdkConnectedOverlayUsePopover`,e.overlayPopoverLocation(n.elementRef.nativeElement))(`cdkConnectedOverlayWidth`,n.elementRef.nativeElement.offsetWidth)}}var Zo=class i extends Ft{labelsAdapter=b(SQ,{optional:!0});summaryOverflow=kz(`summaryOverflow`);hasSelection=U(()=>!!this.internalValue()?.length||this.selectAll());resolvedSelectAllLabel=U(()=>CQ(this.selectAllLabel(),this.labelsAdapter));selectableOptions=U(()=>this.filteredOptions().filter(t=>!t.disabled&&!t.groupDisabled));allLoadedSelected=U(()=>{let t=this.selectableOptions();return t.length>0&&t.every(e=>this.isSelected(e.value))});selectAllChecked=U(()=>this.selectAll()||this.allLoadedSelected());someSelected=U(()=>this.selectableOptions().some(t=>this.isSelected(t.value)));usesSummary=U(()=>{let t=this.internalValue()?.length??0;return this.selectionDisplay()===`tags`&&this.selectedOptions().length>this.visibleTagCount()||!!(this.selectAll()&&this.allSelectedText())||t>this.summaryThreshold()||t>=2&&(this.summaryOverflow()?.truncated()??!1)});displayedSelection=U(()=>{if(this.selectAll()&&this.allSelectedText())return CQ(this.allSelectedText(),this.labelsAdapter);if(!this.usesSummary())return this.selectedOptionLabel();let t=this.internalValue()?.length??0;return CQ(this.selectedCountText(),this.labelsAdapter,{count:t}).replaceAll(`{count}`,String(t))});resolvedAllSelectedTooltip=U(()=>{let t=this.allSelectedTooltip();return t===!1?``:t===void 0?this.resolvedTooltipOnTruncate()?this.selectedOptionLabel():``:CQ(t,this.labelsAdapter)});selectionTooltip=U(()=>this.isOpen()?``:this.selectAll()?this.resolvedAllSelectedTooltip():this.resolvedTooltipOnTruncate()?this.selectionDisplay()===`tags`||this.usesSummary()?this.selectedOptionLabel():this.truncatedSelectionTooltip():``);allSelectedTooltip=re(void 0);allSelectedText=re(void 0);selectedCountText=re(`{count} selected`);summaryThreshold=re(2,{transform:Ko});showSelectAll=re(!0);selectAllLabel=re(`Select all`);selectionScope=re(void 0);selectAll=yz(!1);selectionChange=Ok();selectAllIntentChange=Ok();scope;constructor(){super(),$e(()=>{let t=this.selectionScope()??this.searchTerm(),e=this.filteredOptions(),n=this.selectAll(),r=de(this.internalValue)??[];if(this.scope!==void 0&&t!==this.scope&&n)this.selectAll.set(!1),this.emitIntent(!1,`scope-change`,t);else if(n&&!this.disabled()&&!this.isReadonly()){let o=e.filter(a=>!a.disabled&&!a.groupDisabled&&!r.some(u=>this.compareWith()(u,a.value))).map(a=>a.value);if(o.length){let a=[...r,...o];this.updateValue(a),this.selectionChange.emit({value:a,source:`page`})}}this.scope=t})}clearSelection(){if(this.disabled()||this.isReadonly())return;let t=this.selectAll();this.selectAll.set(!1),this.clearSelectedValue([]),this.selectionChange.emit({value:[],source:`clear`}),t&&this.emitIntent(!1,`clear`)}isSelected(t){return(this.internalValue()??[]).some(e=>this.compareWith()(e,t))}toggleSelectAll(){if(this.disabled()||this.isReadonly())return;let t=!this.selectAllChecked(),e=this.selectableOptions(),n=this.internalValue()??[],r=t?[...n,...e.filter(o=>!this.isSelected(o.value)).map(o=>o.value)]:n.filter(o=>!e.some(a=>this.compareWith()(o,a.value)));this.selectAll.set(t),this.updateValue(r),this.selectionChange.emit({value:r,source:`select-all`}),this.emitIntent(t,`toggle`)}reset(){super.reset(),this.selectAll()&&(this.selectAll.set(!1),this.emitIntent(!1,`reset`))}selectOption(t){if(t.disabled||t.groupDisabled||this.disabled()||this.isReadonly())return;let e=this.isSelected(t.value),n=e?(this.internalValue()??[]).filter(r=>!this.compareWith()(r,t.value)):[...this.internalValue()??[],t.value];this.updateValue(n),this.selectionChange.emit({value:n,source:`user`}),e&&this.selectAll()&&(this.selectAll.set(!1),this.emitIntent(!1,`item-deselected`))}emitIntent(t,e,n=this.selectionScope()??this.searchTerm()){this.selectAllIntentChange.emit({selected:t,scope:n,values:this.internalValue()??[],reason:e})}static ɵfac=function(e){return new(e||i)};static ɵcmp=Fr({type:i,selectors:[[`bx-multi-select`]],viewQuery:function(e,n){e&1&&Wy(n.summaryOverflow,Ql,5),e&2&&db()},inputs:{allSelectedTooltip:[1,`allSelectedTooltip`],allSelectedText:[1,`allSelectedText`],selectedCountText:[1,`selectedCountText`],summaryThreshold:[1,`summaryThreshold`],showSelectAll:[1,`showSelectAll`],selectAllLabel:[1,`selectAllLabel`],selectionScope:[1,`selectionScope`],selectAll:[1,`selectAll`]},outputs:{selectAll:`selectAllChange`,selectionChange:`selectionChange`,selectAllIntentChange:`selectAllIntentChange`},features:[xt],ngContentSelectors:ed,decls:22,vars:48,consts:[[`origin`,`cdkOverlayOrigin`],[`valueOverflow`,`bxTruncate`],[`summaryOverflow`,`bxTruncate`],[`labelOverflow`,`bxTruncate`],[`panelOverlay`,`cdkConnectedOverlay`],[`pagination`,`bxLoadMore`],[`searchInput`,``],[3,`control`,`inline`,`tooltip`,`showLoadingIndicator`,`hint`,`hintEnd`,`subscriptSizing`,`forId`],[1,`bx-select-control`],[`type`,`button`,`role`,`combobox`,`aria-haspopup`,`listbox`,`cdkOverlayOrigin`,``,`bxSurface`,``,1,`bx-select-trigger`,3,`click`,`keydown`,`blur`,`bxTooltip`,`bxTooltipHover`,`bxTooltipTouch`,`id`,`disabled`],[1,`bx-select-container`],[1,`bx-floating-label`],[1,`bx-select-value`,3,`bxTruncate`],[3,`ngTemplateOutlet`,`ngTemplateOutletContext`],[1,`bx-selected-tags`],[`bxTruncate`,``,`aria-hidden`,`true`,1,`bx-select-measure`],[`aria-hidden`,`true`,1,`bx-select-caret`],[3,`value`],[`bx-button`,``,`type`,`button`,`variant`,`text`,1,`bx-select-clear`,3,`surfaceEffects`,`disabled`,`bxTooltip`],[`cdkConnectedOverlay`,``,3,`cdkConnectedOverlayOrigin`,`cdkConnectedOverlayOpen`,`cdkConnectedOverlayPositions`,`cdkConnectedOverlayHasBackdrop`,`cdkConnectedOverlayPush`,`cdkConnectedOverlayViewportMargin`,`cdkConnectedOverlayScrollStrategy`,`cdkConnectedOverlayUsePopover`,`cdkConnectedOverlayWidth`],[3,`bxTruncate`],[`aria-hidden`,`true`,1,`bx-field-required`],[`tooltip`,``,3,`text`,`config`,`focusable`,`tooltipOnTruncate`],[3,`text`,`config`,`disabled`,`focusable`,`tooltipOnTruncate`],[1,`bx-overflow-tag`,3,`text`,`config`,`tooltip`,`focusable`,`tooltipOnTruncate`],[3,`size`,`decorative`],[`name`,`chevron-down`,`size`,`16`],[`bx-button`,``,`type`,`button`,`variant`,`text`,1,`bx-select-clear`,3,`click`,`surfaceEffects`,`disabled`,`bxTooltip`],[`name`,`x`,`size`,`16`],[`cdkConnectedOverlay`,``,3,`overlayOutsideClick`,`attach`,`detach`,`positionChange`,`cdkConnectedOverlayOrigin`,`cdkConnectedOverlayOpen`,`cdkConnectedOverlayPositions`,`cdkConnectedOverlayHasBackdrop`,`cdkConnectedOverlayPush`,`cdkConnectedOverlayViewportMargin`,`cdkConnectedOverlayScrollStrategy`,`cdkConnectedOverlayUsePopover`,`cdkConnectedOverlayWidth`],[`bxSurface`,``,`data-bx-surface`,`glass`,`tabindex`,`-1`,1,`bx-select-panel`,3,`keydown`,`bxSurfaceInteractive`],[1,`bx-select-search-container`],[`type`,`button`,`role`,`checkbox`,1,`bx-select-all`,3,`disabled`],[`bxLoadMore`,``,1,`bx-select-menu-container`,3,`loadMore`,`loadMoreHasMore`,`loadMoreSuppressed`,`loadMoreLoading`,`loadMoreDisabled`,`loadMoreError`,`loadMoreConfig`,`loadMoreTemplate`,`loadMoreRevision`],[`role`,`listbox`,3,`hidden`,`id`],[`role`,`status`,1,`bx-select-search-state`],[1,`bx-select-loading`],[3,`search`,`keydown.enter`,`value`,`compact`,`placeholder`,`ariaLabel`],[`type`,`button`,`role`,`checkbox`,1,`bx-select-all`,3,`click`,`disabled`],[3,`checked`,`indeterminate`,`disabled`],[1,`bx-select-group`,3,`id`],[`type`,`button`,`role`,`option`,`tabindex`,`-1`,1,`bx-select-option`,3,`click`,`disabled`],[3,`checked`,`disabled`],[`size`,`16`,3,`name`],[`role`,`status`,1,`bx-select-empty`],[3,`size`,`label`]],template:function(e,n){if(e&1&&($y(Jl),bo$1(0,`bx-form-field`,7)(1,`div`,8)(2,`button`,9,0),br(`click`,function(){return n.toggleOpen()})(`keydown`,function(o){return n.onTriggerKey(o)})(`blur`,function(){return n.onTriggerBlur()}),bo$1(4,`div`,10),tb(5,od,5,3,`span`,11),bo$1(6,`span`,12,1),tb(8,ad,1,2,`ng-container`,13)(9,ud,3,1,`span`,14)(10,pd,1,1),Go$1(),bo$1(11,`span`,15,2),aA(13),Go$1()(),Gy(14),bo$1(15,`span`,16)(16,`bx-visual-transition`,17),ed$1(17,gd,2,1,`ng-template`),Go$1()()(),tb(18,hd,2,4,`button`,18),Go$1(),tb(19,Id,2,9,null,19),Gy(20,1,td),Gy(21,2,nd),Go$1()),e&2){let r;$o$1(`control`,n.fieldControl)(`inline`,!0)(`tooltip`,n.tooltip())(`showLoadingIndicator`,!1)(`hint`,n.hint())(`hintEnd`,n.hintEnd())(`subscriptSizing`,n.resolvedSubscriptSizing())(`forId`,n.controlId()),qs$1(),tr(`has-clear`,n.showClear()),qs$1(),tr(`has-label`,!!n.label())(`is-invalid`,n.showError())(`is-outline`,n.resolvedAppearance()===`outline`)(`is-open`,n.isOpen())(`is-floating`,n.isFloating())(`is-readonly`,n.isReadonly())(`is-keyboard-focused`,n.keyboardFocused()),$o$1(`bxTooltip`,n.selectionTooltip())(`bxTooltipHover`,n.selectionDisplay()!==`tags`||n.selectAll()&&!!n.allSelectedText())(`bxTooltipTouch`,n.selectionDisplay()===`tags`&&!(n.selectAll()&&n.allSelectedText())?`none`:`longpress`)(`id`,n.controlId())(`disabled`,n.disabled()),vo$1(`data-testid`,n.dataTestId())(`aria-label`,n.ariaLabel()||n.resolvedLabel())(`aria-labelledby`,n.ariaLabelledBy())(`aria-describedby`,n.describedBy())(`aria-invalid`,n.showError())(`aria-required`,n.required())(`aria-readonly`,n.isReadonly())(`aria-busy`,n.loading()||n.pending()||n.isSearching())(`aria-expanded`,n.isOpen())(`aria-controls`,n.isPanelAttached()?n.controlId()+`-options`:null),qs$1(3),ob(n.label()?5:-1),qs$1(),tr(`is-placeholder`,!n.selectedOptionLabel()),$o$1(`bxTruncate`,!(n.selectionDisplay()===`tags`&&n.selectedOptions().length)&&!n.triggerTemplate()),qs$1(2),ob((r=n.triggerTemplate())?8:n.selectionDisplay()===`tags`&&n.selectedOptions().length?9:10,r),qs$1(5),sk(n.selectedOptionLabel()),qs$1(3),$o$1(`value`,n.loading()||n.pending()||n.isSearching()),qs$1(2),ob(n.showClear()?18:-1),qs$1(),ob(n.isPanelAttached()?19:-1)}},dependencies:[qu$1,UC,uR,dR,eh,ee,xe,Pt,YC,At,He,Mb,Zi$1,Et$1,Pt$1,ct$1,Bs$1],styles:[`
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
}`]})};var Uo=class i extends Je{focus(t){this.nativeElement.focus(t)}onReadonlyInteraction(t){!this.isReadonly()||this.nativeElement.tagName!==`SELECT`||`key`in t&&t.key===`Tab`||t.preventDefault()}static ɵfac=(()=>{let t;return function(n){return(t||(t=ho$1(i)))(n||i)}})();static ɵdir=pe({type:i,selectors:[[`input`,`bxInput`,``],[`textarea`,`bxInput`,``],[`select`,`bxInput`,``]],hostAttrs:[1,`bx-native-control`],hostVars:12,hostBindings:function(e,n){e&1&&br(`blur`,function(){return n.markAsTouched()})(`pointerdown`,function(o){return n.onReadonlyInteraction(o)})(`click`,function(o){return n.onReadonlyInteraction(o)})(`keydown`,function(o){return n.onReadonlyInteraction(o)}),e&2&&(Hy(`id`,n.controlId())(`disabled`,n.effectiveDisabled())(`required`,n.effectiveRequired()),vo$1(`readonly`,n.isReadonly()?``:null)(`aria-readonly`,n.isReadonly())(`placeholder`,n.resolvedPlaceholder())(`name`,n.name()||null)(`aria-invalid`,n.showError())(`aria-required`,n.effectiveRequired())(`aria-describedby`,n.describedBy())(`aria-label`,n.ariaLabel())(`aria-labelledby`,n.ariaLabelledBy()))},exportAs:[`bxInput`],features:[rr([{provide:Gt,useExisting:jt$1(()=>i)}]),xt]})};var Dd=[[[`bx-error`]],[[`bx-hint`]]];var Ed=[`bx-error`,`bx-hint`];var Rd=[`ngProjectAs`,`bx-error`,5,[`bx-error`]];var Ld=[`ngProjectAs`,`bx-hint`,5,[`bx-hint`]];function Ad(i,t){if(i&1&&td$1(0,`span`),i&2){let e=t.$implicit;ka$1(`inset-inline-start`,e,`%`)}}function Fd(i,t){if(i&1&&(bo$1(0,`output`,8),aA(1),Go$1()),i&2){let e=$s$1();qs$1(),ik(``,e.displayWith()(e.start()),` – `,e.displayWith()(e.end()))}}var Yo=class i extends ve{i18n=b(SQ,{optional:!0});start=U(()=>Math.max(this.min(),Math.min(this.max(),this.value()?.[0]??this.min())));end=U(()=>Math.max(this.start(),Math.min(this.max(),this.value()?.[1]??this.max())));startPercent=U(()=>this.max()>this.min()?(this.start()-this.min())/(this.max()-this.min())*100:0);endPercent=U(()=>this.max()>this.min()?(this.end()-this.min())/(this.max()-this.min())*100:100);resolvedStartLabel=U(()=>CQ(this.startLabel(),this.i18n));resolvedEndLabel=U(()=>CQ(this.endLabel(),this.i18n));ticks=U(()=>{let t=this.max()-this.min(),e=this.step();if(!this.showTickMarks()||!Number.isFinite(t)||!Number.isFinite(e)||t<=0||e<=0)return[];let n=Math.floor(t/e),r=Math.min(1e3,n);return r>0?Array.from({length:r+1},(o,a)=>Math.round(a*n/r)*e/t*100):[]});min=re(0);max=re(100);step=re(1);discrete=re(!1);showTickMarks=re(!1);displayWith=re(String);startLabel=re(`Minimum value`);endLabel=re(`Maximum value`);onRangeInput(t,e){let n=t.target;if(this.effectiveDisabled()||this.isReadonly()){n.value=String(e===`start`?this.start():this.end());return}let r=n.valueAsNumber,o=e===`start`?[Math.min(this.end(),r),this.end()]:[this.start(),Math.max(this.start(),r)];n.value=String(e===`start`?o[0]:o[1]),this.updateValue(o)}onReadonlyPointerDown(t){this.isReadonly()&&(t.preventDefault(),t.target.focus({preventScroll:!0}))}onReadonlyKeyDown(t){this.isReadonly()&&[`ArrowLeft`,`ArrowRight`,`ArrowUp`,`ArrowDown`,`Home`,`End`,`PageUp`,`PageDown`].includes(t.key)&&t.preventDefault()}onBlur(){this.markAsTouched()}static ɵfac=(()=>{let t;return function(n){return(t||(t=ho$1(i)))(n||i)}})();static ɵcmp=Fr({type:i,selectors:[[`bx-range-slider`]],inputs:{min:[1,`min`],max:[1,`max`],step:[1,`step`],discrete:[1,`discrete`],showTickMarks:[1,`showTickMarks`],displayWith:[1,`displayWith`],startLabel:[1,`startLabel`],endLabel:[1,`endLabel`]},features:[xt],ngContentSelectors:Ed,decls:13,vars:35,consts:[[3,`control`,`label`,`hint`,`hintEnd`,`tooltip`,`forId`],[`role`,`group`,1,`bx-range-slider`],[`aria-hidden`,`true`,1,`bx-range-track`],[1,`bx-range-input`],[`bxSlider`,``,`type`,`range`,3,`pointerdown`,`keydown`,`input`,`blur`,`id`,`min`,`max`,`step`,`value`,`disabled`],[`bxSlider`,``,`type`,`range`,3,`pointerdown`,`keydown`,`input`,`blur`,`min`,`max`,`step`,`value`,`disabled`],[`aria-hidden`,`true`,1,`bx-range-ticks`],[3,`inset-inline-start`],[1,`bx-range-values`]],template:function(e,n){e&1&&($y(Dd),bo$1(0,`bx-form-field`,0)(1,`div`,1),td$1(2,`div`,2),bo$1(3,`div`,3)(4,`input`,4),br(`pointerdown`,function(o){return n.onReadonlyPointerDown(o)})(`keydown`,function(o){return n.onReadonlyKeyDown(o)})(`input`,function(o){return n.onRangeInput(o,`start`)})(`blur`,function(){return n.onBlur()}),Go$1()(),bo$1(5,`div`,3)(6,`input`,5),br(`pointerdown`,function(o){return n.onReadonlyPointerDown(o)})(`keydown`,function(o){return n.onReadonlyKeyDown(o)})(`input`,function(o){return n.onRangeInput(o,`end`)})(`blur`,function(){return n.onBlur()}),Go$1()(),bo$1(7,`div`,6),nb(8,Ad,1,2,`span`,7,IT),Go$1()(),tb(10,Fd,2,2,`output`,8),Gy(11,0,Rd),Gy(12,1,Ld),Go$1()),e&2&&($o$1(`control`,n.fieldControl)(`label`,n.label())(`hint`,n.hint())(`hintEnd`,n.hintEnd())(`tooltip`,n.tooltip())(`forId`,n.controlId()),qs$1(),ka$1(`--%NS%bx-range-start`,n.startPercent()/100)(`--%NS%bx-range-end`,n.endPercent()/100),tr(`is-readonly`,n.isReadonly()&&!n.disabled()),vo$1(`aria-label`,n.ariaLabel()||n.resolvedLabel()),qs$1(3),$o$1(`id`,n.controlId())(`min`,n.min())(`max`,n.max())(`step`,n.step())(`value`,n.start())(`disabled`,n.effectiveDisabled()),vo$1(`aria-valuemax`,n.end())(`aria-readonly`,n.isReadonly())(`aria-label`,n.resolvedStartLabel())(`aria-valuetext`,n.displayWith()(n.start()))(`aria-describedby`,n.describedBy()),qs$1(2),$o$1(`min`,n.min())(`max`,n.max())(`step`,n.step())(`value`,n.end())(`disabled`,n.effectiveDisabled()),vo$1(`aria-valuemin`,n.start())(`aria-readonly`,n.isReadonly())(`aria-label`,n.resolvedEndLabel())(`aria-valuetext`,n.displayWith()(n.end()))(`aria-describedby`,n.describedBy()),qs$1(2),sb(n.ticks()),qs$1(2),ob(n.discrete()?10:-1))},dependencies:[ee,$n],styles:[`
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
}`]})};var Vd=[`panelTemplate`];var zd=[`anchor`];var Bd=[`nativeInput`];var Hd=[[[`bx-error`]],[[`bx-hint`]]];var Wd=[`bx-error`,`bx-hint`];var qd=[`ngProjectAs`,`bx-error`,5,[`bx-error`]];var jd=[`ngProjectAs`,`bx-hint`,5,[`bx-hint`]];var $d=(i,t,e,n)=>({$implicit:i,label:t,active:e,index:n});var Gd=(i,t)=>t.value;function Kd(i,t){i&1&&(bo$1(0,`span`,16),aA(1,`*`),Go$1())}function Zd(i,t){if(i&1&&(bo$1(0,`label`,7)(1,`span`,15),aA(2),Go$1(),tb(3,Kd,2,0,`span`,16),Go$1()),i&2){let e=$s$1();vo$1(`for`,e.controlId()),qs$1(2),sk(e.resolvedLabel()),qs$1(),ob(e.effectiveRequired()&&!e.resolvedHideRequiredMarker()?3:-1)}}function Xd(i,t){if(i&1&&(bo$1(0,`span`,17)(1,`span`,18),aA(2),Go$1(),bo$1(3,`span`),aA(4),Go$1()()),i&2){let e=$s$1();ka$1(`transform`,`translateX(`+-e.inputScroll()+`px)`),qs$1(2),sk(e.internalValue()),qs$1(2),sk(e.completionSuffix())}}function Ud(i,t){if(i&1){let e=lb();bo$1(0,`button`,19),br(`click`,function(){il$1(e);let r=$s$1();return al$1(r.clear())})(`keydown`,function(r){il$1(e);let o=$s$1();return al$1(o.onClearKey(r))})(`blur`,function(r){il$1(e);let o=$s$1();return al$1(o.onBlur(r))}),td$1(1,`bx-icon`,20),Go$1()}if(i&2){let e=$s$1();$o$1(`surfaceEffects`,!1)(`disabled`,e.effectiveDisabled())(`bxTooltip`,e.resolvedClearTooltip()),vo$1(`aria-label`,e.resolvedClearLabel())}}function Yd(i,t){i&1&&td$1(0,`bx-loading-spinner`,13),i&2&&$o$1(`size`,16)(`decorative`,!0)}function Qd(i,t){i&1&&td$1(0,`bx-icon`,14)}function Jd(i,t){if(i&1&&sd$1(0,28),i&2){let e=$s$1(),n=e.$implicit,r=e.$index,o=$s$1(3);$o$1(`ngTemplateOutlet`,t)(`ngTemplateOutletContext`,EA(2,$d,n,n.labelText,o.activeIndex()===r,r))}}function ec(i,t){if(i&1&&aA(0),i&2){let e=$s$1().$implicit;ub(` `,e.labelText,` `)}}function tc(i,t){if(i&1){let e=lb();bo$1(0,`button`,27),br(`mousedown`,function(r){return r.preventDefault()})(`click`,function(){let r=il$1(e).$implicit,o=$s$1(3);return al$1(o.selectOption(r))}),tb(1,Jd,1,7,`ng-container`,28)(2,ec,1,1),Go$1()}if(i&2){let e,n=t.$implicit,r=t.$index,o=$s$1(3);tr(`is-active`,o.activeIndex()===r),$o$1(`id`,o.controlId()+`-option-`+r)(`disabled`,n.disabled??!1),vo$1(`aria-selected`,o.activeIndex()===r),qs$1(),ob((e=o.optionTemplate())?1:2,e)}}function nc(i,t){if(i&1&&nb(0,tc,3,6,`button`,26,Gd),i&2){let e=$s$1(2);sb(e.filteredOptions())}}function ic(i,t){if(i&1&&(bo$1(0,`div`,24),td$1(1,`bx-loading-indicator`,29),Go$1()),i&2){let e=$s$1(2);qs$1(),$o$1(`size`,16)(`label`,e.loadingText())}}function rc(i,t){if(i&1&&(bo$1(0,`div`,25),aA(1),Go$1()),i&2){let e=$s$1(2);qs$1(),sk(e.resolvedEmptyText())}}function oc(i,t){if(i&1){let e=lb();bo$1(0,`div`,21)(1,`div`,22,3),br(`focusout`,function(r){il$1(e);let o=$s$1();return al$1(o.onBlur(r))})(`loadMore`,function(r){il$1(e);let o=$s$1();return al$1(o.requestMore(r))}),bo$1(3,`div`,23),tb(4,nc,2,0),Go$1(),tb(5,ic,2,2,`div`,24)(6,rc,2,1,`div`,25),Go$1()()}if(i&2){let e=jT(2),n=$s$1();$o$1(`bxSurfaceInteractive`,!1),qs$1(),$o$1(`loadMoreHasMore`,n.hasMore())(`loadMoreLoading`,n.loading())(`loadMoreError`,n.loadError())(`loadMoreSuppressed`,n.searching())(`loadMoreDisabled`,n.effectiveDisabled()||n.isReadonly())(`loadMoreConfig`,n.loadMoreConfig())(`loadMoreTemplate`,n.loadMoreTemplate())(`loadMoreRevision`,n.loadMoreRevision()??n.options()),qs$1(2),$o$1(`id`,n.controlId()+`-listbox`),vo$1(`aria-label`,n.ariaLabel()||n.resolvedLabel()||n.resolvedPlaceholder())(`aria-busy`,n.searching()||n.loading()),qs$1(),ob(n.searching()?-1:4),qs$1(),ob(n.searching()||n.loading()&&!e.actionVisible()?5:!n.loading()&&!n.loadError()&&!n.filteredOptions().length?6:-1)}}var Qo=class i extends ve{i18n=b(SQ,{optional:!0});bxA11yService=b(Br);overlay=b(Rd$1);bxOverlayPositionService=b(Dw);viewContainerRef=b(fr);ngZone=b(le);context=b(Ae,{optional:!0});scrollLockService=b(Aw);browser=yt(b(tt$1));scrollLockId=MZ();opened=z(!1);inputFocused=z(!1);composing=z(!1);caretAtEnd=z(!1);panelTemplate=kz.required(`panelTemplate`);anchor=kz.required(`anchor`);nativeInput=kz.required(`nativeInput`);pagination=kz(He);labelText=kz(ct$1);activeIndex=z(-1);autofilled=z(!1);labelTruncated=U(()=>this.labelText()?.truncated()??!1);isBusy=U(()=>this.searching()||this.loading()||this.pending());showClear=U(()=>this.clearable()&&!!this.internalValue()&&!this.isReadonly());resolvedClearLabel=U(()=>CQ(this.clearLabel(),this.i18n));resolvedClearTooltip=U(()=>CQ(this.clearTooltip()??this.clearLabel(),this.i18n));isFloating=U(()=>this.resolvedFloatLabel()===`always`||this.inputFocused()||this.isOpen()||this.autofilled()||!!this.internalValue());inputScroll=z(0);resolvedEmptyText=U(()=>CQ(this.emptyText(),this.i18n));resolvedOptions=U(()=>this.options().map(t=>s(r({},t),{labelText:CQ(t.label??t.value,this.i18n)})));filteredOptions=U(()=>{let t=(this.internalValue()??``).toLocaleLowerCase();return this.externalFiltering()||!t?this.resolvedOptions():this.resolvedOptions().filter(e=>e.labelText.toLocaleLowerCase().includes(t)||e.value.toLocaleLowerCase().includes(t))});activeId=U(()=>this.isOpen()&&!this.searching()&&this.filteredOptions()[this.activeIndex()]&&!this.filteredOptions()[this.activeIndex()].disabled?this.controlId()+`-option-`+this.activeIndex():null);completionOption=U(()=>{let t=this.internalValue()??``;if(!this.inlineCompletion()||!this.isOpen()||!this.inputFocused()||!this.caretAtEnd()||this.composing()||this.searching()||this.effectiveDisabled()||this.isReadonly()||!t)return;let e=this.filteredOptions(),n=this.activeIndex()>=0?e[this.activeIndex()]:e.find(r=>!r.disabled&&r.value.length>t.length&&r.value.toLocaleLowerCase().startsWith(t.toLocaleLowerCase()));return n&&!n.disabled&&n.value.length>t.length&&n.value.toLocaleLowerCase().startsWith(t.toLocaleLowerCase())?n:void 0});completionSuffix=U(()=>this.completionOption()?.value.slice((this.internalValue()??``).length)??``);isOpen=this.opened.asReadonly();options=re([]);inlineCompletion=re(!0);clearable=re(!0);clearLabel=re(`Clear selection`);clearTooltip=re(void 0);externalFiltering=re(!1);searching=re(!1);hasMore=re(!1);loadError=re(void 0);loadMoreConfig=re({});loadMoreTemplate=re(void 0);loadMoreRevision=re(void 0);optionTemplate=re(void 0);emptyText=re(`No suggestions. You can enter your own value.`);loadingText=re(`Loading suggestions`);autocomplete=re(`off`);queryChange=Ok();optionSelected=Ok();loadMore=Ok();openedChange=Ok();overlayRef;subscriptions=new Me;disconnectTheme;disconnectLighting;selectionMotion;transition;presentationRevision=0;constructor(){super(),$e(()=>{let t=this.bxA11yService.isReducedMotion();this.selectionMotion?.update({reducedMotion:t})}),this.destroyRef.onDestroy(()=>this.dispose()),$e(()=>{(this.effectiveDisabled()||this.isReadonly())&&this.isOpen()&&this.close()}),$e(()=>{this.options(),this.searching(),de(()=>this.activeIndex.set(-1))})}open(){if(!this.browser||this.destroyRef.destroyed||this.isOpen()||this.effectiveDisabled()||this.isReadonly())return;this.overlayRef&&this.dispose();let t=this.anchor().nativeElement,e=this.overlay.create({width:t.getBoundingClientRect().width,maxWidth:`calc(100vw - 16px)`,positionStrategy:this.bxOverlayPositionService.getElementStrategy(t,`bottom`,4),scrollStrategy:this.overlay.scrollStrategies.noop(),usePopover:!!this.context?.useTopLayer||!!t.closest(`dialog, [role="dialog"], [role="alertdialog"], bx-modal, bx-modal-core, [popover]`)});this.overlayRef=e,this.opened.set(!0),this.scrollLockService.disableScroll(this.scrollLockId,{handleTouchInput:!0}),this.disconnectTheme=this.ngZone.runOutsideAngular(()=>_Z(t,e.overlayElement)),this.disconnectLighting=ER(e.overlayElement,t),this.subscriptions.add(this.ngZone.runOutsideAngular(()=>kZ(e,t,{onOriginHidden:()=>this.ngZone.run(()=>this.close()),onPosition:()=>{let o=t.getBoundingClientRect().width;e.getConfig().width!==o&&e.updateSize({width:o})}}))),this.subscriptions.add(e.outsidePointerEvents().subscribe(o=>{t.contains(o.target)||this.close()})),this.subscriptions.add(e.keydownEvents().subscribe(o=>this.onPanelKey(o))),e.attach(new Pa$1(this.panelTemplate(),this.viewContainerRef)).detectChanges(),e.updatePosition();let r=e.overlayElement.querySelector(`[role="listbox"]`);r&&(this.selectionMotion=this.ngZone.runOutsideAngular(()=>IR(r,{reducedMotion:this.bxA11yService.isReducedMotion()}))),this.transition=this.ngZone.runOutsideAngular(()=>SR(t,e.overlayElement)),this.ngZone.runOutsideAngular(()=>this.transition?.enter()),this.openedChange.emit(!0)}close(){if(!this.isOpen())return;let t=this.overlayRef?.overlayElement;t?.contains(t.ownerDocument.activeElement)&&this.focus({preventScroll:!0});let e=++this.presentationRevision;this.opened.set(!1),this.scrollLockService.enableScroll(this.scrollLockId),t&&(t.inert=!0);let n=()=>{e===this.presentationRevision&&this.dispose()},r=this.transition;r&&!this.bxA11yService.isReducedMotion()?this.ngZone.runOutsideAngular(()=>r.exit()).then(n,n):n(),this.openedChange.emit(!1)}completeLoadMore(){this.pagination()?.complete()}clear(){this.effectiveDisabled()||this.isReadonly()||(this.composing.set(!1),this.updateValue(``),this.activeIndex.set(-1),this.markAsTouched(),this.focus({preventScroll:!0}),this.queryChange.emit(``))}onInput(t){if(this.composing()||this.effectiveDisabled()||this.isReadonly())return;let e=t.target.value;this.updateValue(e),this.activeIndex.set(-1),this.updateCompletionPosition(),this.open(),this.queryChange.emit(e)}onCompositionStart(){this.composing.set(!0)}onCompositionEnd(t){this.composing.set(!1),this.onInput(t)}onFocus(){this.inputFocused.set(!0),this.updateCompletionPosition(),this.open()}updateCompletionPosition(){let t=this.nativeInput().nativeElement;this.caretAtEnd.set(t.selectionStart===t.value.length&&t.selectionEnd===t.value.length),this.inputScroll.set(t.scrollLeft)}onBlur(t){t.target===this.nativeInput().nativeElement&&this.inputFocused.set(!1);let e=t.relatedTarget;e&&(this.nativeElement.contains(e)||this.overlayRef?.overlayElement.contains(e))||queueMicrotask(()=>{if(this.destroyRef.destroyed)return;let n=this.nativeElement.ownerDocument.activeElement;this.nativeElement.contains(n)||this.overlayRef?.overlayElement.contains(n)||(this.close(),this.markAsTouched())})}onInputKey(t){if(this.composing()||t.isComposing||this.effectiveDisabled()||this.isReadonly())return;this.updateCompletionPosition();let e=this.completionOption(),r=this.nativeInput().nativeElement.ownerDocument.defaultView?.getComputedStyle(this.nativeInput().nativeElement).direction===`rtl`?`ArrowLeft`:`ArrowRight`;if(e&&!t.altKey&&!t.ctrlKey&&!t.metaKey&&!t.shiftKey&&(t.key===r||t.key===`End`||t.key===`Enter`&&!this.activeId()))t.preventDefault(),this.selectOption(e);else if(t.key===`Escape`&&this.isOpen())t.preventDefault(),t.stopPropagation(),this.close();else if(t.key===`ArrowDown`||t.key===`ArrowUp`){if(t.preventDefault(),this.open(),this.searching())return;let a=this.filteredOptions().map((S,P)=>S.disabled?-1:P).filter(S=>S>=0),u=a.indexOf(this.activeIndex()),g=t.key===`ArrowDown`?(u+1)%a.length:u<0?a.length-1:(u-1+a.length)%a.length;this.activeIndex.set(a[g]??-1),this.overlayRef?.overlayElement.querySelector(`#`+this.activeId())?.scrollIntoView({block:`nearest`})}else if(t.key===`Enter`&&this.isOpen()&&this.activeId())t.preventDefault(),this.selectOption(this.filteredOptions()[this.activeIndex()]);else if(t.key===`Tab`&&this.isOpen()){if(!t.shiftKey&&this.showClear())return;this.tabToPanel(t)}}onClearKey(t){t.key===`Tab`&&!t.shiftKey&&this.isOpen()&&this.tabToPanel(t)}selectOption(t){t.disabled||this.searching()||this.effectiveDisabled()||this.isReadonly()||(this.updateValue(t.value),this.optionSelected.emit(t),this.close(),this.focus({preventScroll:!0}))}requestMore(t){let e=this.overlayRef?.overlayElement;e?.contains(e.ownerDocument.activeElement)&&this.focus({preventScroll:!0}),this.loadMore.emit(t)}onPanelKey(t){let e=t.target;t.defaultPrevented||!e||!this.overlayRef?.overlayElement.contains(e)||(t.key===`Escape`?(t.preventDefault(),t.stopPropagation(),this.close()):t.key===`Tab`&&(t.shiftKey?(t.preventDefault(),this.focus({preventScroll:!0})):this.close()))}panelAction(){return Array.from(this.overlayRef?.overlayElement.querySelectorAll(`button:not(:disabled)`)??[]).find(t=>t.tabIndex>=0&&t.getClientRects().length>0)}tabToPanel(t){let e=this.panelAction();!t.shiftKey&&e?(t.preventDefault(),e.focus()):this.close()}dispose(){++this.presentationRevision,this.selectionMotion?.destroy(),this.selectionMotion=void 0,this.transition?.destroy(),this.transition=void 0,this.opened.set(!1),this.activeIndex.set(-1),this.subscriptions.unsubscribe(),this.subscriptions=new Me,this.disconnectTheme?.(),this.disconnectTheme=void 0,this.disconnectLighting?.(),this.disconnectLighting=void 0,this.overlayRef?.dispose(),this.overlayRef=void 0,this.scrollLockService.enableScroll(this.scrollLockId)}static ɵfac=function(e){return new(e||i)};static ɵcmp=Fr({type:i,selectors:[[`bx-autocomplete`]],viewQuery:function(e,n){e&1&&Wy(n.panelTemplate,Vd,5)(n.anchor,zd,5)(n.nativeInput,Bd,5)(n.pagination,He,5)(n.labelText,ct$1,5),e&2&&db(5)},inputs:{options:[1,`options`],inlineCompletion:[1,`inlineCompletion`],clearable:[1,`clearable`],clearLabel:[1,`clearLabel`],clearTooltip:[1,`clearTooltip`],externalFiltering:[1,`externalFiltering`],searching:[1,`searching`],hasMore:[1,`hasMore`],loadError:[1,`loadError`],loadMoreConfig:[1,`loadMoreConfig`],loadMoreTemplate:[1,`loadMoreTemplate`],loadMoreRevision:[1,`loadMoreRevision`],optionTemplate:[1,`optionTemplate`],emptyText:[1,`emptyText`],loadingText:[1,`loadingText`],autocomplete:[1,`autocomplete`]},outputs:{queryChange:`queryChange`,optionSelected:`optionSelected`,loadMore:`loadMore`,openedChange:`openedChange`},features:[xt],ngContentSelectors:Wd,decls:18,vars:52,consts:[[`anchor`,``],[`nativeInput`,``],[`panelTemplate`,``],[`pagination`,`bxLoadMore`],[3,`control`,`inline`,`tooltip`,`hint`,`hintEnd`,`hideRequiredMarker`,`subscriptSizing`,`forId`,`showLoadingIndicator`],[`bxSurface`,``,1,`bx-input-wrapper`,`bx-autocomplete-control`],[`bxTooltipTouch`,`longpress`,`placement`,`top`,1,`bx-input-container`,`bx-autocomplete-text`,3,`bxTooltip`],[1,`bx-floating-label`],[`aria-hidden`,`true`,1,`bx-native-input`,`bx-autocomplete-completion`,3,`transform`],[`type`,`text`,`role`,`combobox`,`aria-haspopup`,`listbox`,`cdkAutofill`,``,1,`bx-native-input`,3,`input`,`focus`,`click`,`blur`,`select`,`scroll`,`keyup`,`cdkAutofill`,`keydown`,`compositionstart`,`compositionend`,`id`,`placeholder`,`value`,`disabled`,`readOnly`,`required`],[1,`bx-input-actions`],[`bx-button`,``,`type`,`button`,`variant`,`text`,1,`bx-autocomplete-clear`,3,`surfaceEffects`,`disabled`,`bxTooltip`],[`aria-hidden`,`true`,1,`bx-autocomplete-caret`],[3,`size`,`decorative`],[`name`,`chevron-down`,`size`,`16`],[`bxTruncate`,``,1,`bx-input-label-text`],[`aria-hidden`,`true`,1,`bx-field-required`],[`aria-hidden`,`true`,1,`bx-native-input`,`bx-autocomplete-completion`],[1,`bx-autocomplete-prefix`],[`bx-button`,``,`type`,`button`,`variant`,`text`,1,`bx-autocomplete-clear`,3,`click`,`keydown`,`blur`,`surfaceEffects`,`disabled`,`bxTooltip`],[`name`,`x`,`size`,`16`],[`bxSurface`,``,`data-bx-surface`,`glass`,1,`bx-autocomplete-panel`,3,`bxSurfaceInteractive`],[`bxLoadMore`,``,`tabindex`,`-1`,1,`bx-autocomplete-scroll`,3,`focusout`,`loadMore`,`loadMoreHasMore`,`loadMoreLoading`,`loadMoreError`,`loadMoreSuppressed`,`loadMoreDisabled`,`loadMoreConfig`,`loadMoreTemplate`,`loadMoreRevision`],[`role`,`listbox`,3,`id`],[1,`bx-autocomplete-feedback`],[`role`,`status`,1,`bx-autocomplete-feedback`],[`type`,`button`,`role`,`option`,`tabindex`,`-1`,1,`bx-autocomplete-option`,3,`id`,`is-active`,`disabled`],[`type`,`button`,`role`,`option`,`tabindex`,`-1`,1,`bx-autocomplete-option`,3,`mousedown`,`click`,`id`,`disabled`],[3,`ngTemplateOutlet`,`ngTemplateOutletContext`],[3,`size`,`label`]],template:function(e,n){if(e&1){let r=lb();$y(Hd),bo$1(0,`bx-form-field`,4)(1,`div`,5,0)(3,`div`,6),DA(4,`bxTruncatedText`),tb(5,Zd,4,3,`label`,7),tb(6,Xd,5,4,`span`,8),bo$1(7,`input`,9,1),br(`input`,function(a){return n.onInput(a)})(`focus`,function(){return n.onFocus()})(`click`,function(){return il$1(r),n.open(),al$1(n.updateCompletionPosition())})(`blur`,function(a){return n.onBlur(a)})(`select`,function(){return n.updateCompletionPosition()})(`scroll`,function(){return n.updateCompletionPosition()})(`keyup`,function(){return n.updateCompletionPosition()})(`cdkAutofill`,function(a){return n.autofilled.set(a.isAutofilled)})(`keydown`,function(a){return n.onInputKey(a)})(`compositionstart`,function(){return n.onCompositionStart()})(`compositionend`,function(a){return n.onCompositionEnd(a)}),Go$1()(),bo$1(9,`div`,10),tb(10,Ud,2,4,`button`,11),bo$1(11,`span`,12),tb(12,Yd,1,2,`bx-loading-spinner`,13)(13,Qd,1,0,`bx-icon`,14),Go$1()()(),Gy(14,0,qd),Gy(15,1,jd),Go$1(),ed$1(16,oc,7,14,`ng-template`,null,2,TA)}e&2&&($o$1(`control`,n.fieldControl)(`inline`,!0)(`tooltip`,n.tooltip())(`hint`,n.hint())(`hintEnd`,n.hintEnd())(`hideRequiredMarker`,n.resolvedHideRequiredMarker())(`subscriptSizing`,n.resolvedSubscriptSizing())(`forId`,n.controlId())(`showLoadingIndicator`,!1),qs$1(),tr(`is-invalid`,n.showError())(`is-disabled`,n.effectiveDisabled())(`is-readonly`,n.isReadonly())(`is-outline`,n.resolvedAppearance()===`outline`)(`is-floating`,n.isFloating())(`is-keyboard-focused`,n.keyboardFocused())(`is-open`,n.isOpen())(`has-clear`,n.showClear()),qs$1(2),$o$1(`bxTooltip`,MA(4,48,n.resolvedLabel(),n.labelTruncated(),n.resolvedTooltipOnTruncate())),qs$1(2),ob(n.label()?5:-1),qs$1(),ob(n.completionSuffix()?6:-1),qs$1(),$o$1(`id`,n.controlId())(`placeholder`,n.isFloating()||!n.label()?n.resolvedPlaceholder():``)(`value`,n.internalValue()??``)(`disabled`,n.effectiveDisabled())(`readOnly`,n.isReadonly())(`required`,n.effectiveRequired()),vo$1(`aria-autocomplete`,n.inlineCompletion()?`both`:`list`)(`name`,n.name()||null)(`autocomplete`,n.autocomplete())(`data-testid`,n.dataTestId())(`aria-label`,n.ariaLabel())(`aria-labelledby`,n.ariaLabelledBy())(`aria-describedby`,n.describedBy())(`aria-invalid`,n.showError())(`aria-expanded`,n.isOpen())(`aria-controls`,n.isOpen()?n.controlId()+`-listbox`:null)(`aria-activedescendant`,n.activeId())(`aria-busy`,n.isBusy()),qs$1(3),ob(n.showClear()?10:-1),qs$1(2),ob(n.isBusy()?12:13))},dependencies:[ee,UC,YC,Zi$1,Et$1,xe,He,Mb,zn,Pt$1,ct$1,on],styles:[`
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
}`]})};var ac=(i,t)=>t.label;var sc=(i,t)=>t.preset.id;function lc(i,t){if(i&1&&(bo$1(0,`div`,2),aA(1),Go$1()),i&2){let e=$s$1().$implicit;qs$1(),sk(e.label)}}function dc(i,t){i&1&&td$1(0,`bx-icon`,6),i&2&&$o$1(`name`,t)(`decorative`,!0)}function cc(i,t){if(i&1){let e=lb();bo$1(0,`button`,5),br(`click`,function(){let r=il$1(e).$implicit,o=$s$1(2);return al$1(o.onSelect(r.preset,r.disabled))}),tb(1,dc,1,2,`bx-icon`,6),bo$1(2,`span`,7),aA(3),Go$1()()}if(i&2){let e,n=t.$implicit,r=$s$1(2);tr(`is-active`,n.active),$o$1(`disabled`,n.disabled),vo$1(`aria-pressed`,n.active)(`aria-label`,n.description?n.label+`. `+n.description:n.label),qs$1(),ob((e=n.icon&&r.iconName(n.icon))?1:-1,e),qs$1(2),sk(n.label)}}function uc(i,t){if(i&1&&(bo$1(0,`div`,1),tb(1,lc,2,1,`div`,2),bo$1(2,`div`,3),nb(3,cc,4,7,`button`,4,sc),Go$1()()),i&2){let e=t.$implicit;qs$1(),ob(e.label?1:-1),qs$1(2),sb(e.items)}}var Gn=class i{i18n=b(SQ,{optional:!0});groups=U(()=>{let t=this.context(),e=this.activeValue()??this.activeRange(),n=/* @__PURE__ */ new Map;for(let r of this.presets()){let o=CQ(r.label,this.i18n),a=CQ(r.group,this.i18n),u=this.resolvePreset(r,t),g={preset:r,label:o,description:CQ(r.description,this.i18n),icon:r.icon,active:u!==null&&this.sameSelection(u,e),disabled:r.disabled===!0};n.has(a)||n.set(a,{label:a,items:[]}),n.get(a)?.items.push(g)}return[...n.values()]});resolvedAriaLabel=U(()=>CQ(this.ariaLabel(),this.i18n));presets=re.required();context=re.required();activeValue=re(null);activeRange=re(null);horizontal=re(!1,{transform:Ge});ariaLabel=re(`Quick select`);presetSelect=Ok();iconName(t){return t}onSelect(t,e){e||this.presetSelect.emit(t)}sameSelection(t,e){return Array.isArray(t)&&Array.isArray(e)?YK([...t].sort())===YK([...e].sort()):vC(t)&&vC(e)?t.start===e.start&&t.end===e.end&&(!gC(t)||gC(e)&&t.kind===e.kind):YK(t)===YK(e)}resolvePreset(t,e){try{return t.resolve(e)}catch{return null}}static ɵfac=function(e){return new(e||i)};static ɵcmp=Fr({type:i,selectors:[[`bx-date-preset-list`]],inputs:{presets:[1,`presets`],context:[1,`context`],activeValue:[1,`activeValue`],activeRange:[1,`activeRange`],horizontal:[1,`horizontal`],ariaLabel:[1,`ariaLabel`]},outputs:{presetSelect:`presetSelect`},decls:3,vars:3,consts:[[1,`bx-preset-list`],[1,`bx-preset-group`],[1,`bx-preset-group-label`],[1,`bx-preset-items`],[`type`,`button`,1,`bx-preset-item`,3,`is-active`,`disabled`],[`type`,`button`,1,`bx-preset-item`,3,`click`,`disabled`],[`size`,`16`,1,`bx-preset-icon`,3,`name`,`decorative`],[1,`bx-preset-label`]],template:function(e,n){e&1&&(bo$1(0,`nav`,0),nb(1,uc,5,1,`div`,1,ac),Go$1()),e&2&&(tr(`is-horizontal`,n.horizontal()),vo$1(`aria-label`,n.resolvedAriaLabel()),qs$1(),sb(n.groups()))},dependencies:[YC],styles:[`
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
}`]})};function pc(i,t){if(i&1&&(bo$1(0,`div`,1),sd$1(1,2),Go$1()),i&2){let e=$s$1(2);$o$1(`id`,e.panelId()),vo$1(`aria-label`,e.resolvedAriaLabel()),qs$1(),$o$1(`ngTemplateOutlet`,t)}}function bc(i,t){if(i&1&&tb(0,pc,2,3,`div`,1),i&2){let e,n=$s$1();ob((e=n.content())?0:-1,e)}}function mc(i,t){i&1&&sd$1(0,2),i&2&&$o$1(`ngTemplateOutlet`,t)}function gc(i,t){if(i&1){let e=lb();bo$1(0,`bx-bottom-drawer`,3),uk(`openChange`,function(r){il$1(e);let o=$s$1();return mA(o.open,r)||(o.open=r),al$1(r)}),br(`closed`,function(){il$1(e);let r=$s$1();return al$1(r.onDrawerClosed())}),tb(1,mc,1,1,`ng-container`,2),Go$1()}if(i&2){let e,n=$s$1();$o$1(`surfaceId`,n.panelId())(`ariaLabel`,n.resolvedAriaLabel())(`showHandle`,!0)(`showCloseButton`,!1)(`headerVisible`,!1)(`panelClass`,n.drawerClasses()),dk(`open`,n.open),qs$1(),ob((e=n.content())?1:-1,e)}}var Vt=class i{overlay=b(Rd$1);bxOverlayPositionService=b(Dw);viewContainerRef=b(fr);ngZone=b(le);destroyRef=b(he);scrollLockService=b(Aw);i18n=b(SQ,{optional:!0});platformId=b(tt$1);overlaySubscriptions=[];browser=yt(this.platformId);scrollLockId=MZ();resolvedAriaLabel=U(()=>CQ(this.ariaLabel(),this.i18n));isDrawer=U(()=>this.presentation()===`drawer`);isInline=U(()=>this.presentation()===`inline`);drawerClasses=U(()=>`bx-picker-drawer ${this.panelClass()}`.trim());open=yz(!1);presentation=re(`popover`);origin=re(null);content=re(null);ariaLabel=re(`Picker`);panelId=re(``);panelClass=re(``);panelWidth=re(``);autoFocus=re(!0,{transform:Ge});dismissOnOutside=re(!0,{transform:Ge});dismissOnEscape=re(!0,{transform:Ge});dismiss=Ok();openedChange=Ok();focusTimer;disconnectTheme;disconnectLighting;disconnectOrigin;overlayRef;transition;presentationRevision=0;restoreTarget;constructor(){$e(()=>{let t=this.open(),e=this.presentation();if(this.browser)if(e===`popover`)if(t){this.attachPopover();let n=this.overlayRef?.overlayElement;n&&(n.setAttribute(`aria-label`,this.resolvedAriaLabel()),n.id=this.panelId(),n.style.inlineSize=this.panelWidth(),n.style.maxInlineSize=this.panelWidth(),this.disconnectOrigin?.reposition())}else this.detachPopover();else this.overlayRef&&this.disposePopover()}),this.destroyRef.onDestroy(()=>this.disposePopover())}onDrawerClosed(){this.dismiss.emit(),this.openedChange.emit(!1)}attachPopover(){if(this.overlayRef?.overlayElement.inert&&this.disposePopover(!1),this.overlayRef)return;let t=this.origin(),e=this.content();if(!t||!e)return;this.restoreTarget=t.ownerDocument.activeElement instanceof HTMLElement?t.ownerDocument.activeElement:t;let n=this.overlay.create({positionStrategy:this.bxOverlayPositionService.getElementStrategy(t,`bottom`,6).withFlexibleDimensions(!1),scrollStrategy:this.overlay.scrollStrategies.noop(),usePopover:!!t.closest(`dialog, [role="dialog"], [role="alertdialog"], bx-modal, bx-modal-core, [popover]`)});this.overlayRef=n,this.scrollLockService.disableScroll(this.scrollLockId,{handleTouchInput:!0});let r=n.overlayElement;r.id=this.panelId(),r.setAttribute(`role`,`dialog`),r.setAttribute(`aria-label`,this.resolvedAriaLabel()),r.tabIndex=-1,r.classList.add(`bx-picker-overlay-pane`),this.panelClass()&&r.classList.add(...this.panelClass().split(/\s+/).filter(Boolean)),this.panelWidth()&&(r.style.inlineSize=this.panelWidth(),r.style.maxInlineSize=this.panelWidth()),this.disconnectTheme=this.ngZone.runOutsideAngular(()=>_Z(t,r)),this.disconnectLighting=ER(r,t),n.attach(new Pa$1(e,this.viewContainerRef)).detectChanges(),this.disconnectOrigin=this.ngZone.runOutsideAngular(()=>kZ(n,t)),this.openedChange.emit(!0),this.transition=this.ngZone.runOutsideAngular(()=>SR(t,r,{scale:1})),this.ngZone.runOutsideAngular(()=>this.transition?.enter());let a=n.outsidePointerEvents().subscribe(g=>{this.dismissOnOutside()&&!t.contains(g.target)&&this.dismiss.emit()}),u=n.keydownEvents().subscribe(g=>{g.key!==`Escape`||!this.dismissOnEscape()||g.defaultPrevented||(g.preventDefault(),g.stopPropagation(),this.dismiss.emit())});n.overlayElement.addEventListener(`pointerdown`,g=>g.stopPropagation()),this.overlaySubscriptions.push(a,u),this.focusTimer=setTimeout(()=>{if(!this.autoFocus()||!this.open()||this.overlayRef!==n||r.inert)return;(r.querySelector(`[data-picker-initial-focus], [data-focus-date][tabindex="0"], bx-time-wheel [role="listbox"]`)??r.querySelector(`button:not([disabled]), [href], input:not([disabled]), [tabindex]:not([tabindex="-1"])`)??r).focus({preventScroll:!0})})}detachPopover(){let t=this.overlayRef;if(!t)return;let e=t.overlayElement,n=++this.presentationRevision,r=this.transition;clearTimeout(this.focusTimer),e.inert=!0,this.scrollLockService.enableScroll(this.scrollLockId);let o=()=>{n===this.presentationRevision&&this.disposePopover()};r?this.ngZone.runOutsideAngular(()=>r.exit()).then(o,o):o(),this.openedChange.emit(!1)}disposePopover(t=!0){clearTimeout(this.focusTimer);for(let e of this.overlaySubscriptions.splice(0))e.unsubscribe();++this.presentationRevision,this.transition?.destroy(),this.transition=void 0,this.disconnectTheme?.(),this.disconnectTheme=void 0,this.disconnectLighting?.(),this.disconnectLighting=void 0,this.disconnectOrigin?.(),this.disconnectOrigin=void 0,this.overlayRef?.dispose(),this.overlayRef=void 0,this.scrollLockService.enableScroll(this.scrollLockId),t&&this.restoreTarget?.isConnected&&this.restoreTarget.focus({preventScroll:!0}),this.restoreTarget=void 0}static ɵfac=function(e){return new(e||i)};static ɵcmp=Fr({type:i,selectors:[[`bx-picker-surface`]],inputs:{open:[1,`open`],presentation:[1,`presentation`],origin:[1,`origin`],content:[1,`content`],ariaLabel:[1,`ariaLabel`],panelId:[1,`panelId`],panelClass:[1,`panelClass`],panelWidth:[1,`panelWidth`],autoFocus:[1,`autoFocus`],dismissOnOutside:[1,`dismissOnOutside`],dismissOnEscape:[1,`dismissOnEscape`]},outputs:{open:`openChange`,dismiss:`dismiss`,openedChange:`openedChange`},decls:2,vars:2,consts:[[`panelStyle`,`--bx-drawer-body-padding: 0; --bx-drawer-width: 100%;`,`size`,`lg`,`maxHeight`,`92dvh`,3,`surfaceId`,`ariaLabel`,`showHandle`,`showCloseButton`,`headerVisible`,`panelClass`,`open`],[`role`,`dialog`,`tabindex`,`-1`,1,`bx-picker-inline`,3,`id`],[3,`ngTemplateOutlet`],[`panelStyle`,`--bx-drawer-body-padding: 0; --bx-drawer-width: 100%;`,`size`,`lg`,`maxHeight`,`92dvh`,3,`openChange`,`closed`,`surfaceId`,`ariaLabel`,`showHandle`,`showCloseButton`,`headerVisible`,`panelClass`,`open`]],template:function(e,n){e&1&&(tb(0,bc,1,1),tb(1,gc,2,8,`bx-bottom-drawer`,0)),e&2&&(ob(n.isInline()?0:-1),qs$1(),ob(n.isDrawer()?1:-1))},dependencies:[cl,Mb],styles:[`
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
}`]})};var Jo={dateParse:({params:i})=>`Enter a date in the ${i.format} format.`,dateMin:({params:i})=>`The date cannot be before ${i.minFormatted}.`,dateMax:({params:i})=>`The date cannot be after ${i.maxFormatted}.`,dateOrder:({params:i})=>`The end date cannot be before the start date (${i.startFormatted}).`,dateDisabled:`This date is not selectable. Choose another date.`,dateAvailability:`Availability for this date has not been confirmed. Wait for loading to finish or retry.`,dateMinLength:({params:i})=>`Select a range of at least ${i.minLength} days.`,dateMaxLength:({params:i})=>`Select a range of at most ${i.maxLength} days.`,dateSameDay:`The start and end dates must be different.`,dateLimit:({params:i})=>`Select no more than ${i.limit} dates.`,dateIncomplete:`Enter both a start date and an end date.`,dateCrossing:`This range includes a date that cannot be selected. Choose another range.`};var ea={parse:`dateParse`,min:`dateMin`,max:`dateMax`,order:`dateOrder`,unknown:`dateAvailability`,"min-length":`dateMinLength`,"max-length":`dateMaxLength`,"same-day":`dateSameDay`,limit:`dateLimit`,incomplete:`dateIncomplete`,crossing:`dateCrossing`};function ta(i,t,e){let n=new Map(i?.filter(r=>!e.start||!e.end||r.date<e.start||r.date>e.end).map(r=>[r.date,r]));for(let r of t)n.set(r.date,r);return[...n.values()]}function Ui(i,t){if(i==null||typeof i==`string`)return i;if(Array.isArray(i)){let e=[...i].sort();return(t===`min`?e[0]:e.at(-1))??null}return vC(i)?t===`min`?i.start:i.end:null}var fc=[`panelTemplate`];var xc=[[[`bx-error`]],[[`bx-hint`]]];var vc=[`bx-error`,`bx-hint`];var yc=[`ngProjectAs`,`bx-error`,5,[`bx-error`]];var Sc=[`ngProjectAs`,`bx-hint`,5,[`bx-hint`]];var _c=()=>[`start`,`end`];function Cc(i,t){i&1&&(bo$1(0,`span`,14),aA(1,`*`),Go$1())}function Mc(i,t){if(i&1){let e=lb();bo$1(0,`input`,19),br(`input`,function(r){il$1(e);let o=$s$1().$implicit,a=$s$1(2);return al$1(o===`start`?a.onRangeStartInput(r):a.onRangeEndInput(r))})(`blur`,function(){il$1(e);let r=$s$1().$implicit,o=$s$1(2);return al$1(r===`start`?o.onRangeStartBlur():o.onRangeEndBlur())})(`keydown`,function(r){il$1(e);let o=$s$1(3);return al$1(o.onRangeKeydown(r))})(`keydown.escape`,function(r){il$1(e);let o=$s$1(3);return al$1(o.onEscape(r))}),Go$1()}if(i&2){let e=$s$1().$implicit,n=$s$1(2);$o$1(`id`,e===`start`?n.controlId():n.controlId()+`-end`)(`value`,e===`start`?n.typedStart():n.typedEnd())(`disabled`,n.effectiveDisabled())(`readOnly`,n.isReadonly()),vo$1(`aria-expanded`,n.isOpen())(`aria-controls`,n.isOpen()?n.controlId()+`-panel`:null)(`placeholder`,n.isFloating()?n.resolvedDatePlaceholder():``)(`aria-label`,e===`start`?n.resolvedStartLabel():n.resolvedEndLabel())(`aria-describedby`,n.describedBy())(`aria-invalid`,n.showError()||!!n.parseError())(`aria-required`,n.effectiveRequired())}}function wc(i,t){if(i&1){let e=lb();bo$1(0,`button`,20),br(`click`,function(r){il$1(e);let o=$s$1(3);return al$1(o.onTriggerClick(r))})(`keydown.escape`,function(r){il$1(e);let o=$s$1(3);return al$1(o.onEscape(r))}),aA(1),Go$1()}if(i&2){let e=$s$1().$implicit,n=$s$1(2);$o$1(`id`,e===`start`?n.controlId():n.controlId()+`-end`)(`disabled`,n.effectiveDisabled()),vo$1(`aria-label`,e===`start`?n.resolvedStartLabel():n.resolvedEndLabel())(`aria-expanded`,n.isOpen())(`aria-describedby`,n.describedBy())(`aria-invalid`,n.showError()||!!n.parseError())(`aria-readonly`,n.isReadonly()),qs$1(),ub(` `,e===`start`?n.displayStart():n.displayEnd(),` `)}}function Nc(i,t){if(i&1){let e=lb();bo$1(0,`div`,12)(1,`label`,13),aA(2),tb(3,Cc,2,0,`span`,14),Go$1(),tb(4,Mc,1,11,`input`,15)(5,wc,2,8,`button`,16),bo$1(6,`button`,17),br(`click`,function(r){il$1(e);let o=$s$1(2);return al$1(o.onTriggerClick(r))}),td$1(7,`bx-icon`,18),Go$1()()}if(i&2){let e=t.$implicit,n=$s$1(2);tr(`is-open`,n.isOpen())(`is-floating`,n.editable()?n.isFloating():e===`start`?!!n.displayStart():!!n.displayEnd())(`is-invalid`,n.showError()||!!n.parseError())(`is-outline`,n.resolvedAppearance()===`outline`)(`is-readonly`,n.isReadonly())(`is-disabled`,n.effectiveDisabled())(`is-keyboard-focused`,n.keyboardFocused()),qs$1(),vo$1(`for`,e===`start`?n.controlId():n.controlId()+`-end`),qs$1(),ub(` `,e===`start`?n.resolvedStartLabel():n.resolvedEndLabel(),` `),qs$1(),ob(n.effectiveRequired()&&!n.resolvedHideRequiredMarker()?3:-1),qs$1(),ob(n.editable()?4:5),qs$1(2),$o$1(`disabled`,n.effectiveDisabled()||n.isReadonly()),vo$1(`aria-label`,n.resolvedOpenPickerLabel()),qs$1(),$o$1(`name`,n.pickerIcon())(`decorative`,!0)}}function Tc(i,t){if(i&1&&(bo$1(0,`div`,5),nb(1,Nc,8,22,`div`,11,IT),Go$1()),i&2){let e=$s$1();vo$1(`aria-label`,e.resolvedLabel()||e.resolvedDatePlaceholder()),qs$1(),sb(yA(1,_c))}}function Pc(i,t){i&1&&(bo$1(0,`span`,14),aA(1,`*`),Go$1())}function Oc(i,t){if(i&1&&(bo$1(0,`span`,13),aA(1),tb(2,Pc,2,0,`span`,14),Go$1()),i&2){let e=$s$1(2);qs$1(),ub(``,e.resolvedLabel(),` `),qs$1(),ob(e.effectiveRequired()&&!e.resolvedHideRequiredMarker()?2:-1)}}function kc(i,t){i&1&&td$1(0,`bx-loading-spinner`,26),i&2&&$o$1(`size`,16)(`decorative`,!0)}function Ic(i,t){if(i&1&&td$1(0,`bx-icon`,18),i&2){let e=$s$1(3);$o$1(`name`,e.pickerIcon())(`decorative`,!0)}}function Dc(i,t){if(i&1&&tb(0,kc,1,2,`bx-loading-spinner`,26)(1,Ic,1,2,`bx-icon`,18),i&2){let e=t.$implicit;ob(e?0:1)}}function Ec(i,t){if(i&1){let e=lb();bo$1(0,`div`,21),tb(1,Oc,3,2,`span`,13),bo$1(2,`input`,22),br(`input`,function(r){il$1(e);let o=$s$1();return al$1(o.onRangeStartInput(r))})(`blur`,function(){il$1(e);let r=$s$1();return al$1(r.onRangeStartBlur())})(`keydown`,function(r){il$1(e);let o=$s$1();return al$1(o.onRangeKeydown(r))})(`keydown.escape`,function(r){il$1(e);let o=$s$1();return al$1(o.onEscape(r))}),Go$1(),bo$1(3,`span`,23),aA(4),Go$1(),bo$1(5,`input`,24),br(`input`,function(r){il$1(e);let o=$s$1();return al$1(o.onRangeEndInput(r))})(`blur`,function(){il$1(e);let r=$s$1();return al$1(r.onRangeEndBlur())})(`keydown`,function(r){il$1(e);let o=$s$1();return al$1(o.onRangeKeydown(r))})(`keydown.escape`,function(r){il$1(e);let o=$s$1();return al$1(o.onEscape(r))}),Go$1(),bo$1(6,`button`,17),br(`click`,function(r){il$1(e);let o=$s$1();return al$1(o.onTriggerClick(r))}),bo$1(7,`bx-visual-transition`,25),ed$1(8,Dc,2,1,`ng-template`),Go$1()()()}if(i&2){let e=$s$1();tr(`has-label`,!!e.label())(`is-open`,e.isOpen())(`is-floating`,e.isFloating())(`is-invalid`,e.showError()||!!e.parseError())(`is-outline`,e.resolvedAppearance()===`outline`)(`is-readonly`,e.isReadonly())(`is-disabled`,e.effectiveDisabled())(`is-keyboard-focused`,e.keyboardFocused()),qs$1(),ob(e.label()?1:-1),qs$1(),$o$1(`value`,e.typedStart())(`id`,e.controlId())(`disabled`,e.effectiveDisabled())(`readOnly`,e.isReadonly()),vo$1(`aria-controls`,e.isOpen()?e.controlId()+`-panel`:null)(`placeholder`,e.isFloating()||!e.label()?e.resolvedStartLabel():``)(`aria-describedby`,e.describedBy())(`aria-required`,e.effectiveRequired())(`aria-label`,(e.label()?e.resolvedLabel()+`, `:``)+e.resolvedStartLabel())(`aria-expanded`,e.isOpen())(`aria-haspopup`,`dialog`)(`aria-invalid`,e.showError()||!!e.parseError())(`aria-readonly`,e.isReadonly()),qs$1(),tr(`is-concealed`,e.label()&&!e.isFloating()),qs$1(),sk(e.settings().rangeSeparator),qs$1(),$o$1(`value`,e.typedEnd())(`disabled`,e.effectiveDisabled())(`readOnly`,e.isReadonly()),vo$1(`aria-controls`,e.isOpen()?e.controlId()+`-panel`:null)(`placeholder`,e.isFloating()||!e.label()?e.resolvedEndLabel():``)(`aria-describedby`,e.describedBy())(`aria-required`,e.effectiveRequired())(`aria-label`,(e.label()?e.resolvedLabel()+`, `:``)+e.resolvedEndLabel())(`aria-expanded`,e.isOpen())(`aria-haspopup`,`dialog`)(`aria-invalid`,e.showError()||!!e.parseError())(`aria-readonly`,e.isReadonly()),qs$1(),$o$1(`disabled`,e.effectiveDisabled()||e.isReadonly()||e.isLoading()),vo$1(`aria-label`,e.resolvedOpenPickerLabel()),qs$1(),$o$1(`value`,e.isLoading())}}function Rc(i,t){i&1&&(bo$1(0,`span`,14),aA(1,`*`),Go$1())}function Lc(i,t){if(i&1&&(bo$1(0,`span`,13),aA(1),tb(2,Rc,2,0,`span`,14),Go$1()),i&2){let e=$s$1(2);qs$1(),ub(``,e.resolvedLabel(),` `),qs$1(),ob(e.effectiveRequired()&&!e.resolvedHideRequiredMarker()?2:-1)}}function Ac(i,t){i&1&&td$1(0,`bx-loading-spinner`,26),i&2&&$o$1(`size`,16)(`decorative`,!0)}function Fc(i,t){if(i&1&&td$1(0,`bx-icon`,18),i&2){let e=$s$1(3);$o$1(`name`,e.pickerIcon())(`decorative`,!0)}}function Vc(i,t){if(i&1&&tb(0,Ac,1,2,`bx-loading-spinner`,26)(1,Fc,1,2,`bx-icon`,18),i&2){let e=t.$implicit;ob(e?0:1)}}function zc(i,t){if(i&1){let e=lb();bo$1(0,`div`,27),tb(1,Lc,3,2,`span`,13),bo$1(2,`input`,28),br(`input`,function(r){il$1(e);let o=$s$1();return al$1(o.onTypedInput(r))})(`blur`,function(){il$1(e);let r=$s$1();return al$1(r.onTypedBlur())})(`keydown`,function(r){il$1(e);let o=$s$1();return al$1(o.onTypedKeydown(r))})(`keydown.escape`,function(r){il$1(e);let o=$s$1();return al$1(o.onEscape(r))}),Go$1(),bo$1(3,`button`,17),br(`click`,function(r){il$1(e);let o=$s$1();return al$1(o.onTriggerClick(r))}),bo$1(4,`bx-visual-transition`,25),ed$1(5,Vc,2,1,`ng-template`),Go$1()()()}if(i&2){let e=$s$1();tr(`has-label`,!!e.label())(`is-open`,e.isOpen())(`is-floating`,e.isFloating())(`is-invalid`,e.showError()||!!e.parseError())(`is-outline`,e.resolvedAppearance()===`outline`)(`is-readonly`,e.isReadonly())(`is-disabled`,e.effectiveDisabled())(`is-keyboard-focused`,e.keyboardFocused()),qs$1(),ob(e.label()?1:-1),qs$1(),$o$1(`id`,e.controlId())(`value`,e.typedText())(`disabled`,e.effectiveDisabled())(`readOnly`,e.isReadonly()),vo$1(`aria-controls`,e.isOpen()?e.controlId()+`-panel`:null)(`placeholder`,e.isFloating()||!e.label()?e.resolvedDatePlaceholder():``)(`aria-label`,e.ariaLabel()||e.resolvedLabel()||e.resolvedDatePlaceholder())(`aria-describedby`,e.describedBy())(`aria-expanded`,e.isOpen())(`aria-haspopup`,`dialog`)(`aria-invalid`,e.showError()||!!e.parseError())(`aria-required`,e.effectiveRequired())(`aria-readonly`,e.isReadonly())(`data-testid`,e.dataTestId()),qs$1(),$o$1(`disabled`,e.effectiveDisabled()||e.isReadonly()||e.isLoading()),vo$1(`aria-label`,e.resolvedOpenPickerLabel()),qs$1(),$o$1(`value`,e.isLoading())}}function Bc(i,t){i&1&&(bo$1(0,`span`,14),aA(1,`*`),Go$1())}function Hc(i,t){if(i&1&&(bo$1(0,`span`,13),aA(1),tb(2,Bc,2,0,`span`,14),Go$1()),i&2){let e=$s$1(2);qs$1(),ub(` `,e.resolvedLabel(),` `),qs$1(),ob(e.effectiveRequired()&&!e.resolvedHideRequiredMarker()?2:-1)}}function Wc(i,t){if(i&1&&td$1(0,`bx-tag`,34),i&2){let e=t.$implicit,n=$s$1(3);$o$1(`text`,n.formatChipLabel(e))(`config`,n.tagConfig())(`focusable`,!1)(`tooltipOnTruncate`,n.resolvedTooltipOnTruncate()?void 0:!1)}}function qc(i,t){if(i&1&&td$1(0,`bx-tag`,35),i&2){let e=$s$1(3);$o$1(`text`,e.overflowDatesLabel())(`config`,e.overflowTagConfig())(`tooltip`,e.overflowDatesTooltip())(`focusable`,!1)(`tooltipOnTruncate`,e.resolvedTooltipOnTruncate()?void 0:!1)}}function jc(i,t){if(i&1&&(bo$1(0,`span`,31),nb(1,Wc,1,4,`bx-tag`,34,IT),tb(3,qc,1,5,`bx-tag`,35),Go$1()),i&2){let e=$s$1(2);vo$1(`aria-label`,e.resolvedSelectedDatesLabel()),qs$1(),sb(e.visibleDates()),qs$1(2),ob(e.multipleDates().length>e.visibleTagCount()?3:-1)}}function $c(i,t){if(i&1&&(bo$1(0,`span`,32),aA(1),Go$1()),i&2){let e=$s$1(2);$o$1(`bxTooltip`,e.resolvedTooltipOnTruncate()?e.displayValue():``),qs$1(),sk(e.displayValue()||(e.label()?``:e.resolvedTriggerText()))}}function Gc(i,t){i&1&&td$1(0,`bx-loading-spinner`,26),i&2&&$o$1(`size`,16)(`decorative`,!0)}function Kc(i,t){if(i&1&&td$1(0,`bx-icon`,18),i&2){let e=$s$1(3);$o$1(`name`,e.pickerIcon())(`decorative`,!0)}}function Zc(i,t){if(i&1&&tb(0,Gc,1,2,`bx-loading-spinner`,26)(1,Kc,1,2,`bx-icon`,18),i&2){let e=t.$implicit;ob(e?0:1)}}function Xc(i,t){if(i&1){let e=lb();bo$1(0,`button`,29,2),br(`click`,function(r){il$1(e);let o=$s$1();return al$1(o.onTriggerClick(r))})(`keydown.arrowdown`,function(r){il$1(e);let o=$s$1();return r.preventDefault(),al$1(o.onTriggerClick(r))})(`keydown.escape`,function(r){il$1(e);let o=$s$1();return al$1(o.onEscape(r))})(`blur`,function(){il$1(e);let r=$s$1();return al$1(r.markAsTouched())}),tb(2,Hc,3,2,`span`,13),bo$1(3,`span`,30),tb(4,jc,4,2,`span`,31)(5,$c,2,2,`span`,32),Go$1(),bo$1(6,`bx-visual-transition`,33),ed$1(7,Zc,2,1,`ng-template`),Go$1()()}if(i&2){let e=$s$1();tr(`has-label`,!!e.label())(`is-open`,e.isOpen())(`is-floating`,e.isFloating())(`is-invalid`,e.showError()||!!e.parseError())(`is-outline`,e.resolvedAppearance()===`outline`)(`is-readonly`,e.isReadonly())(`is-disabled`,e.effectiveDisabled())(`is-keyboard-focused`,e.keyboardFocused()),$o$1(`id`,e.controlId())(`disabled`,e.effectiveDisabled()),vo$1(`aria-label`,e.ariaLabel()||e.resolvedLabel()||e.resolvedDatePlaceholder())(`aria-labelledby`,e.ariaLabelledBy())(`aria-describedby`,e.describedBy())(`aria-haspopup`,`dialog`)(`aria-expanded`,e.isOpen())(`aria-invalid`,e.showError()||!!e.parseError())(`aria-required`,e.effectiveRequired())(`aria-readonly`,e.isReadonly())(`aria-busy`,e.isLoading())(`data-testid`,e.dataTestId()),qs$1(2),ob(e.label()?2:-1),qs$1(),tr(`is-placeholder`,!e.displayValue()),qs$1(),ob(e.mode()===`multiple`&&e.multipleDates().length?4:5),qs$1(2),$o$1(`value`,e.isLoading())}}function Uc(i,t){if(i&1){let e=lb();bo$1(0,`button`,36),br(`click`,function(){il$1(e);let r=$s$1();return al$1(r.clear())}),td$1(1,`bx-icon`,37),Go$1()}if(i&2){let e=$s$1();$o$1(`surfaceEffects`,!1)(`disabled`,e.effectiveDisabled())(`bxTooltip`,e.resolvedClearTooltip()),vo$1(`aria-label`,e.resolvedClearLabel()),qs$1(),$o$1(`decorative`,!0)}}function Yc(i,t){if(i&1){let e=lb();bo$1(0,`button`,38),br(`click`,function(){let r=il$1(e).retry;return al$1(r())}),td$1(1,`bx-icon`,39),aA(2),Go$1()}if(i&2){let e=t.label;qs$1(),$o$1(`decorative`,!0),qs$1(),ub(``,e,` `)}}function Qc(i,t){if(i&1){let e=lb();bo$1(0,`aside`,42)(1,`bx-date-preset-list`,45),br(`presetSelect`,function(r){il$1(e);let o=$s$1(2);return al$1(o.onPeriodPresetSelect(r))}),Go$1()()}if(i&2){let e=$s$1(2);qs$1(),$o$1(`presets`,e.effectivePresets())(`context`,e.presetContext())(`activeValue`,e.draftValue())(`horizontal`,e.presetsHorizontal())(`ariaLabel`,e.resolvedPresetsLabel())}}function Jc(i,t){if(i&1){let e=lb();bo$1(0,`aside`,42)(1,`bx-date-preset-list`,45),br(`presetSelect`,function(r){il$1(e);let o=$s$1(2);return al$1(o.onPeriodPresetSelect(r))}),Go$1()()}if(i&2){let e=$s$1(2);qs$1(),$o$1(`presets`,e.effectivePresets())(`context`,e.presetContext())(`activeValue`,e.draftValue())(`horizontal`,e.presetsHorizontal())(`ariaLabel`,e.resolvedPresetsLabel())}}function eu(i,t){if(i&1){let e=lb();bo$1(0,`div`,40)(1,`div`,41),tb(2,Qc,2,5,`aside`,42),bo$1(3,`div`,43)(4,`bx-calendar`,44),br(`visibleRangeChange`,function(r){il$1(e);let o=$s$1();return al$1(o.onVisibleRange(r))})(`viewChange`,function(r){il$1(e);let o=$s$1();return al$1(o.viewChange.emit(r))})(`monthSelected`,function(r){il$1(e);let o=$s$1();return al$1(o.monthSelected.emit(r))})(`yearSelected`,function(r){il$1(e);let o=$s$1();return al$1(o.yearSelected.emit(r))})(`rangeStart`,function(r){il$1(e);let o=$s$1();return al$1(o.onCalendarRangeStart(r))})(`valueChange`,function(r){il$1(e);let o=$s$1();return al$1(o.onCalendarValueChange(r))})(`selectionRejected`,function(r){il$1(e);let o=$s$1();return al$1(o.onSelectionRejected(r))})(`requestAvailability`,function(r){il$1(e);let o=$s$1();return al$1(o.onAvailabilityRequest(r))})(`retryAvailability`,function(r){il$1(e);let o=$s$1();return al$1(o.onAvailabilityRequest(r))}),Go$1()(),tb(5,Jc,2,5,`aside`,42),Go$1()()}if(i&2){let e=$s$1(),n=jT(9);tr(`is-drawer`,e.isDrawer()),$o$1(`bxSurfaceInteractive`,!1),qs$1(2),ob(e.showPresets()&&e.presetsPlacement()===`start`?2:-1),qs$1(2),$o$1(`startView`,e.startView())(`mode`,e.mode())(`value`,e.draftValue())(`viewDate`,e.viewDate())(`months`,e.calendarMonths())(`retryTemplate`,n)(`weekdayNameFormat`,e.weekdayNameFormat())(`monthNameFormat`,e.monthNameFormat())(`locale`,e.settings().locale)(`calendarId`,e.settings().calendar)(`timeZone`,e.settings().timeZone)(`weekStartsOn`,e.settings().weekStartsOn)(`minimalDaysInFirstWeek`,e.settings().minimalDaysInFirstWeek)(`min`,e.min())(`max`,e.max())(`disabledDates`,e.disabledDates())(`disabledIntervals`,e.disabledIntervals())(`disabledWeekdays`,e.disabledWeekdays())(`dateFilter`,e.dateFilter())(`crossingPolicy`,e.crossingPolicy())(`minRangeLength`,e.minRangeLength())(`maxRangeLength`,e.maxRangeLength())(`allowSameDay`,e.allowSameDay())(`selectionLimit`,e.selectionLimit())(`readOnly`,e.isReadonly()||e.effectiveDisabled())(`availability`,e.availabilityForCalendar())(`dayTemplate`,e.dayTemplate())(`showToday`,e.showToday())(`showTodayButton`,e.showTodayButton())(`todayLabel`,e.todayLabel())(`loadingLabel`,e.loadingLabel())(`retryLabel`,e.retryLabel()),qs$1(),ob(e.showPresets()&&e.presetsPlacement()===`end`?5:-1)}}var na=class i extends ve{bxDateTimeConfigService=b(hC);clock=b(mC);i18n=b(SQ,{optional:!0});windowDimensionsService=b(Nd$1);originElement=z(null);availabilityState=z(void 0);lastDraftSignature=z(``);fieldFocused=z(!1);textEdited=z(!1);isOpen=z(!1);draftValue=z(null);viewDate=z(null);typedText=z(``);typedStart=z(``);typedEnd=z(``);parseError=z(null);settings=U(()=>this.bxDateTimeConfigService.resolve({locale:this.locale(),calendar:this.calendarId(),timeZone:this.timeZone(),weekStartsOn:this.weekStartsOn(),minimalDaysInFirstWeek:this.minimalDaysInFirstWeek(),dateFormat:this.dateFormat(),allowNaturalLanguage:this.allowNaturalLanguage()}));adapter=U(()=>this.bxDateTimeConfigService.adapter(this.settings().calendar));modeInfo=U(()=>Kh(this.mode()));formatContext=U(()=>({locale:this.settings().locale,calendar:this.adapter(),weekStartsOn:this.settings().weekStartsOn,minimalDaysInFirstWeek:this.settings().minimalDaysInFirstWeek}));presetContext=U(()=>({now:this.clock.now(),today:this.todayIso(),locale:this.settings().locale,calendar:this.adapter(),timeZone:this.settings().timeZone,weekStartsOn:this.settings().weekStartsOn,minimalDaysInFirstWeek:this.settings().minimalDaysInFirstWeek}));isDrawer=U(()=>this.surfacePresentation()===`drawer`);surfacePresentation=U(()=>{let t=this.presentation();return t!==`auto`?t:this.windowDimensionsService.isMobile()?`drawer`:`popover`});displayValue=U(()=>this.formatValue(this.isOpen()&&this.mode()!==`multiple`?this.draftValue():this.internalValue()));displayStart=U(()=>this.formatEndpoint(this.rangeStart(this.isOpen()?this.draftValue():this.internalValue())));displayEnd=U(()=>this.formatEndpoint(this.rangeEnd(this.isOpen()?this.draftValue():this.internalValue())));isRangeMode=U(()=>this.modeInfo().selection===`range`);rangeFieldLayout=U(()=>this.separateFields()&&this.isRangeMode()?`separate`:`combined`);effectivePresets=U(()=>(this.presets()??this.defaultPresets()).map(e=>s(r({},e),{resolve:n=>this.normalizePresetValue(e.resolve(n))})));showPresets=U(()=>this.presetsPlacement()!==`hidden`&&this.effectivePresets().length>0);presetsHorizontal=U(()=>this.isDrawer());calendarMonths=U(()=>{let t=this.months();return t>0?t:this.isRangeMode()&&!this.isDrawer()?2:1});availabilityForCalendar=U(()=>this.availability()??(this.resolver()?this.availabilityState():void 0));resolvedDatePlaceholder=U(()=>CQ(this.placeholder()??this.defaultPlaceholder(),this.i18n));resolvedInvalidLabel=U(()=>this.dateValidationMessage(this.parseError()??`endpoint`));resolvedTriggerText=U(()=>CQ(this.placeholder()??this.openPickerLabel(),this.i18n));resolvedOpenPickerLabel=U(()=>CQ(this.openPickerLabel(),this.i18n));resolvedClearLabel=U(()=>CQ(this.clearLabel(),this.i18n));resolvedPresetsLabel=U(()=>CQ(this.presetsLabel(),this.i18n));resolvedStartLabel=U(()=>CQ(this.startLabel(),this.i18n));resolvedEndLabel=U(()=>CQ(this.endLabel(),this.i18n));resolvedMoreDatesLabel=U(()=>CQ(this.moreDatesLabel(),this.i18n));resolvedSelectedDatesLabel=U(()=>CQ(this.selectedDatesLabel(),this.i18n));availableDates=U(()=>this.availabilityForCalendar()?.dates??[]);showClear=U(()=>{let t=this.internalValue(),e=Array.isArray(t)?t.length>0:!!t;return this.clearable()&&(e||this.textEdited())&&!this.isReadonly()});isFloating=U(()=>!!this.displayValue()||this.editable()&&this.mode()!==`multiple`&&(this.fieldFocused()||this.isOpen()||!!this.typedText()||!!this.typedStart()||!!this.typedEnd()||this.resolvedFloatLabel()===`always`));isLoading=U(()=>this.loading()||this.availabilityForCalendar()?.loading===!0);multipleDates=U(()=>{let t=this.internalValue();return Array.isArray(t)?t:[]});visibleDates=U(()=>this.multipleDates().slice(0,this.visibleTagCount()));overflowDatesLabel=U(()=>`+${Math.max(0,this.multipleDates().length-this.visibleTagCount())}`);overflowDatesTooltip=U(()=>this.multipleDates().slice(this.visibleTagCount()).map(t=>this.formatEndpoint(t)).join(`, `));resolvedClearTooltip=U(()=>CQ(this.clearTooltip()??this.clearLabel(),this.i18n));restrictionConfig=U(()=>({min:this.min(),max:this.max(),disabledDates:this.disabledDates(),disabledIntervals:this.disabledIntervals(),disabledWeekdays:this.disabledWeekdays(),metadata:this.availableDates(),isDateDisabled:t=>!!this.dateFilter()?.(t)||(!!this.resolver()||!!this.availability())&&(!this.availabilityForCalendar()||!!this.availabilityForCalendar()?.loading||!!this.availabilityForCalendar()?.error||!this.availableDates().some(e=>e.date===t))}));panelClass=U(()=>`bx-date-panel ${this.isDrawer()?`is-drawer`:`is-popover`}`);panelWidth=U(()=>{if(this.isDrawer())return`100%`;let t=this.calendarMonths(),e=this.showPresets();return t===1?e?`min(94vw, 32rem)`:`min(94vw, 20rem)`:e?`min(94vw, 46rem)`:`min(94vw, 38rem)`});panelOrigin=U(()=>this.originElement());panelTemplate=kz(`panelTemplate`);mode=re(`single`);pickerIcon=re(`calendar`);openPickerLabel=re(`Choose date`);startAt=re(null);startView=re(void 0);parseFormats=re([]);locale=re(void 0);calendarId=re(void 0);timeZone=re(void 0);weekStartsOn=re(void 0);minimalDaysInFirstWeek=re(void 0);dateFormat=re(void 0);allowNaturalLanguage=re(!1,{transform:Ge});editable=re(!0,{transform:Ge});presentation=re(`auto`);weekdayNameFormat=re(`narrow`);monthNameFormat=re(`short`);months=re(0,{transform:t=>Math.trunc(Number(t))||0});separateFields=re(!1,{transform:Ge});commitPolicy=re(`auto`);closeOnSelect=re(!0,{transform:Ge});clearable=re(!0,{transform:Ge});presets=re(void 0);presetsPlacement=re(`start`);min=re(void 0,{transform:t=>Ui(t,`min`)});max=re(void 0,{transform:t=>Ui(t,`max`)});disabledDates=re([]);disabledIntervals=re([]);disabledWeekdays=re([]);dateFilter=re(void 0);crossingPolicy=re(`reject`);minRangeLength=re(1);maxRangeLength=re(null);allowSameDay=re(!0,{transform:Ge});selectionLimit=re(null);availability=re(void 0);resolver=re(void 0);loadingLabel=re(void 0);retryLabel=re(`Retry request`);loadErrorMessage=re(`Dates could not be loaded.`);invalidSelectionLabel=re(void 0);applyLabel=re(`Apply`);cancelLabel=re(`Cancel`);clearLabel=re(`Clear selection`);todayLabel=re(void 0);presetsLabel=re(`Quick select`);showToday=re(!0,{transform:Ge});showTodayButton=re(!0,{transform:Ge});startLabel=re(`Start date`);endLabel=re(`End date`);moreDatesLabel=re(`more`);selectedDatesLabel=re(`Selected dates`);clearTooltip=re(void 0);visibleTagCount=re(1,{transform:qn});tagConfig=re({});overflowTagConfig=re({});dayTemplate=re(void 0);viewChange=Ok();monthSelected=Ok();yearSelected=Ok();valueCommit=Ok();draftChange=Ok();openChange=Ok();visibleRangeChange=Ok();request=Ok();retry=Ok();parseFailed=Ok();resolverContext=``;resolverToken=0;lastRequest;closeTimer;constructor(){super(),$e(()=>{(this.effectiveDisabled()||this.isReadonly())&&this.close()}),$e(()=>{let t=this.draftValue(),e=JSON.stringify(t??null);e!==this.lastDraftSignature()&&(this.lastDraftSignature.set(e),de(()=>this.draftChange.emit(t)))}),$e(()=>{this.resolver(),this.availability(),de(()=>{++this.resolverToken,this.availabilityState.set(void 0),this.resolverContext=``;let t=this.lastRequest;this.isOpen()&&t&&this.runResolver(s(r({},t),{revision:t.revision+1}))})}),$e(()=>{let t=this.internalValue();this.fieldFocused()||this.isOpen()||this.textEdited()||(this.typedText.set(this.formatValue(t)),this.typedStart.set(this.displayStart()),this.typedEnd.set(this.displayEnd()))}),this.destroyRef.onDestroy(()=>{++this.resolverToken,this.clearScheduledClose()})}reset(){let t=this.isOpen();this.clearScheduledClose(),this.isOpen.set(!1),super.reset(),this.clearPendingEdit(),this.fieldFocused.set(!1),this.draftValue.set(this.internalValue()),this.typedText.set(this.formatValue(this.internalValue())),this.typedStart.set(this.displayStart()),this.typedEnd.set(this.displayEnd()),t&&this.openChange.emit(!1)}open(){if(this.isOpen()||this.effectiveDisabled()||this.isReadonly())return;this.clearScheduledClose(),this.draftValue.set(this.internalValue()),this.viewDate.set(this.startAt());let t=this.originElement();this.originElement.set(t?.isConnected&&this.nativeElement.contains(t)?t:this.nativeElement.querySelector(`.bx-date-trigger`)),this.isOpen.set(!0),this.openChange.emit(!0)}close(){this.isOpen()&&(this.clearScheduledClose(),this.isOpen.set(!1),this.markAsTouched(),this.openChange.emit(!1))}apply(){let t=this.draftValue();this.effectiveDisabled()||this.isReadonly()||t!==null&&!Array.isArray(t)&&!this.isDraftComplete(t)||this.commitDraft(t)&&this.close()}cancel(){this.draftValue.set(this.internalValue()),this.parseError()||(this.textEdited.set(!1),this.typedText.set(this.formatValue(this.internalValue())),this.typedStart.set(this.formatEndpoint(this.rangeStart(this.internalValue()))),this.typedEnd.set(this.formatEndpoint(this.rangeEnd(this.internalValue())))),this.close()}clear(){this.effectiveDisabled()||this.isReadonly()||(this.draftValue.set(null),this.clearPendingEdit(),this.parseError.set(null),this.updateValue(null),this.valueCommit.emit(null),this.close(),this.focus({preventScroll:!0}))}goToToday(){this.viewDate.set(this.todayIso())}reloadAvailability(){this.effectiveDisabled()||this.isReadonly()||this.availabilityForCalendar()?.loading||(this.isOpen()?this.lastRequest&&this.onAvailabilityRequest(s(r({},this.lastRequest),{revision:this.lastRequest.revision+1,source:`initial`})):this.open())}retryAvailability(){if(!this.lastRequest)return;let t=s(r({},this.lastRequest),{revision:this.lastRequest.revision+1,source:`retry`});this.retry.emit(t),this.runResolver(t)}clearPendingEdit(){super.clearPendingEdit(),this.typedText.set(``),this.typedStart.set(``),this.typedEnd.set(``),this.textEdited.set(!1),this.parseError.set(null)}onFieldFocus(){this.fieldFocused.set(!0)}onFieldBlur(t){t.relatedTarget instanceof Node&&this.nativeElement.contains(t.relatedTarget)||(this.fieldFocused.set(!1),this.markAsTouched())}onEscape(t){this.isOpen()&&(t.preventDefault(),this.cancel())}onTriggerClick(t){if(this.isReadonly())return;let e=t.currentTarget;e instanceof HTMLElement&&this.originElement.set(e.closest(`.bx-date-field`)??e),this.isOpen()?this.close():this.open()}onCalendarRangeStart(t){this.clearScheduledClose(),this.draftValue.set({start:t,end:null}),this.typedStart.set(this.formatEndpoint(t)),this.typedEnd.set(``),this.parseError.set(null)}onCalendarValueChange(t){this.draftValue.set(t),this.textEdited.set(!1),this.parseError.set(null),this.editable()&&(this.typedText.set(this.formatValue(t)),vC(t)&&(this.typedStart.set(this.formatEndpoint(t.start)),this.typedEnd.set(this.formatEndpoint(t.end)))),this.maybeImmediateCommit(t)}onPeriodPresetSelect(t){let e=this.safeResolvePreset(t);e&&(this.draftValue.set(e),this.editable()&&this.typedText.set(this.formatValue(e)),this.onCalendarValueChange(e))}onTypedInput(t){let e=t.target;this.textEdited.set(!0),this.typedText.set(e.value),this.parseError.set(null)}onTypedBlur(){this.commitTypedValue(),this.markAsTouched()}onTypedKeydown(t){t.key===`Enter`?(t.preventDefault(),this.commitTypedValue()):t.key===`ArrowDown`&&!this.isOpen()&&(t.preventDefault(),this.open())}onRangeStartInput(t){let e=t.target;this.textEdited.set(!0),this.typedStart.set(e.value),this.parseError.set(null)}onRangeEndInput(t){let e=t.target;this.textEdited.set(!0),this.typedEnd.set(e.value),this.parseError.set(null)}onRangeStartBlur(){this.commitRangeEndpoint(`start`),this.markAsTouched()}onRangeEndBlur(){this.commitRangeEndpoint(`end`),this.markAsTouched()}onRangeKeydown(t){t.key===`Enter`?(t.preventDefault(),this.commitRangeEndpoint(`start`),this.commitRangeEndpoint(`end`)):t.key===`ArrowDown`&&!this.isOpen()&&(t.preventDefault(),this.open())}formatChipLabel(t){return this.formatEndpoint(t)}onSelectionRejected(t){this.parseError.set(t)}onVisibleRange(t){this.visibleRangeChange.emit(t)}onAvailabilityRequest(t){this.lastRequest=t,t.source===`retry`?this.retry.emit(t):this.request.emit(t),this.runResolver(t)}todayIso(){let t=new Intl.DateTimeFormat(`en-CA`,{timeZone:this.settings().timeZone,year:`numeric`,month:`2-digit`,day:`2-digit`}).formatToParts(this.clock.now()),e=n=>t.find(r=>r.type===n)?.value??``;return`${e(`year`)}-${e(`month`)}-${e(`day`)}`}defaultPlaceholder(){return this.parseFormats()[0]??this.patternForMode(this.modeInfo().period)}formatValue(t){if(!t)return``;if(typeof t==`string`)return this.formatEndpoint(t);if(Array.isArray(t)){if(!t.length)return``;let e=this.formatEndpoint(t[0]),n=t.length-1;return n>0?`${e} +${n} ${this.resolvedMoreDatesLabel()}`:e}if(gC(t)){let e=this.formatEndpoint(t.start),n=this.formatEndpoint(t.end);return t.start===t.end?e:`${e} ${this.settings().rangeSeparator} ${n}`}if(vC(t)){let e=t.start?this.formatEndpoint(t.start):``,n=t.end?this.formatEndpoint(t.end):``;return e&&n?`${e} ${this.settings().rangeSeparator} ${n}`:e||n}return``}formatEndpoint(t){if(!t)return``;let e=this.modeInfo(),n=this.patternForMode(e.period);if(e.period===`week`){let r=GK(this.mode(),t,this.settings().weekStartsOn);return r?.start&&r.end?`${FZ(r.start,`dd MMM`,this.formatContext())} ${this.settings().rangeSeparator} ${FZ(r.end,`dd MMM yyyy`,this.formatContext())}`:FZ(t,n,this.formatContext())}return FZ(t,n,this.formatContext())}patternForMode(t){return t===`month`?this.settings().monthFormat:t===`quarter`?this.settings().quarterFormat:t===`year`?this.settings().yearFormat:this.settings().dateFormat}rangeOf(t){return GK(this.mode(),t,this.settings().weekStartsOn)}rangeStart(t){return this.rangeOf(t)?.start??null}rangeEnd(t){return this.rangeOf(t)?.end??null}isDraftComplete(t){return t?typeof t==`string`||Array.isArray(t)?!0:gC(t)||vC(t)?!!t.start&&!!t.end:!1:!1}maybeImmediateCommit(t){this.isDraftComplete(t)&&this.commitDraft(t)&&this.mode()!==`multiple`&&this.closeOnSelect()&&this.scheduleClose()}scheduleClose(){this.clearScheduledClose(),this.closeTimer=setTimeout(()=>{this.closeTimer=void 0,this.close()},120)}clearScheduledClose(){this.closeTimer!==void 0&&(clearTimeout(this.closeTimer),this.closeTimer=void 0)}commitDraft(t){if(this.effectiveDisabled()||this.isReadonly())return!1;let e=this.validateDraft(t);if(!e.valid)return this.parseError.set(e.message),this.parseFailed.emit(this.dateValidationMessage(e.message)),!1;let n=e.value??t;return this.parseError.set(null),this.textEdited.set(!1),this.draftValue.set(n),this.editable()&&(this.typedText.set(this.formatValue(n)),this.typedStart.set(this.formatEndpoint(this.rangeStart(n))),this.typedEnd.set(this.formatEndpoint(this.rangeEnd(n)))),JSON.stringify(n)!==JSON.stringify(this.internalValue())&&(this.updateValue(n),this.valueCommit.emit(n)),!0}validateDraft(t){if(t===null||Array.isArray(t)&&t.length===0)return{valid:!0,message:``};if(!this.isDraftComplete(t))return{valid:!1,message:`incomplete`};let e=typeof t==`string`&&this.modeInfo().period===`week`?Qo$1(t,`week`,this.settings().weekStartsOn):null,n=e?kN(e.start,e.end):typeof t==`string`?[t]:Array.isArray(t)?t:[],r$4=this.selectionLimit();for(let o of n){if(!Ie$1(o))return{valid:!1,message:`parse`};let a=ag(o,this.restrictionConfig());if(a.disabled)return{valid:!1,message:a.reason??`endpoint`}}if(Array.isArray(t)&&r$4!==null&&t.length>r$4)return{valid:!1,message:`limit`};if(vC(t)&&t.start&&t.end){if(t.start>t.end)return{valid:!1,message:`order`};let o=this.modeInfo().period===`week`?Qo$1(t.end,`week`,this.settings().weekStartsOn).end:t.end,a=WQ(t.start,o,this.restrictionConfig(),{crossingPolicy:this.crossingPolicy(),minLength:this.minRangeLength(),maxLength:this.maxRangeLength(),allowSameDay:this.allowSameDay()});if(!a.valid){let u=ag(t.start,this.restrictionConfig()).reason??ag(o,this.restrictionConfig()).reason;return{valid:!1,message:a.reason===`endpoint`?u??`endpoint`:a.reason??`endpoint`}}return this.modeInfo().period===`week`&&a.range.end!==o?{valid:!1,message:`crossing`}:{valid:!0,message:``,value:gC(t)?t:s(r({},t),{start:a.range.start,end:a.range.end})}}return{valid:!0,message:``}}dateValidationMessage(t){let e=this.invalidSelectionLabel();if(e!==void 0)return CQ(e,this.i18n);let n=this.draftValue(),r$5=vC(n)?n.start:null,o={format:this.defaultPlaceholder(),min:this.min(),max:this.max(),start:r$5,minFormatted:this.formatEndpoint(this.min()??null),maxFormatted:this.formatEndpoint(this.max()??null),startFormatted:this.formatEndpoint(r$5),minLength:this.minRangeLength(),maxLength:this.maxRangeLength(),limit:this.selectionLimit()};return Ot({kind:ea[t]??`dateDisabled`,context:o},this.errorMessages(),r(r({},Jo),this.formSettingsService.settings().errorMessages),this.i18n)}defaultPresets(){let t=this.modeInfo(),e=t.period;return t.isRange?zQ():[-1,0,1].map(n=>({id:`relative-${n}`,label:e?`${n<0?`Previous`:n>0?`Next`:`This`} ${e}`:n<0?`Yesterday`:n>0?`Tomorrow`:`Today`,resolve:r=>e===`year`?r.calendar.addYears(r.today,n,r.locale):e===`month`||e===`quarter`?r.calendar.addMonths(r.today,n*(e===`quarter`?3:1),r.locale):ue(r.today,n*(e===`week`?7:1))}))}normalizePresetValue(t){if(!t)return null;let e=this.modeInfo(),n=$K(this.mode(),t),r=n.start,o=n.end??r;if(!r||!o)return null;if(e.selection===`multiple`)return Array.isArray(t)?t:kN(r,o);let a=u=>e.period?Qo$1(u,e.period,this.settings().weekStartsOn).start:u;return e.isRange?WK(this.mode(),a(r),a(o),this.settings().weekStartsOn):a(o)}safeResolvePreset(t){try{return this.normalizePresetValue(t.resolve(this.presetContext()))}catch{return null}}commitTypedValue(){if(!this.editable()||!this.textEdited()||this.effectiveDisabled()||this.isReadonly())return;let t=this.typedText().trim();if(!t){this.commitDraft(null);return}let e=this.parseTypedText(t);if(!e){this.parseError.set(`parse`),this.parseFailed.emit(t);return}this.draftValue.set(e),this.commitDraft(e)}commitRangeEndpoint(t){if(!this.textEdited()||!this.editable()||this.effectiveDisabled()||this.isReadonly())return;let e=this.typedStart().trim(),n=this.typedEnd().trim();if(!e&&!n){this.commitDraft(null);return}let r=e?this.parseSingleDate(e):null,o=n?this.parseSingleDate(n):null;if(e&&!r||n&&!o){this.parseError.set(`parse`),this.parseFailed.emit(t===`start`?e:n);return}let a=this.modeInfo().period,u=a&&r&&o?{start:r,end:o,kind:a}:{start:r,end:o};this.draftValue.set(u),r&&o&&this.commitDraft(u)?(this.typedStart.set(this.formatEndpoint(this.rangeStart(this.draftValue()))),this.typedEnd.set(this.formatEndpoint(this.rangeEnd(this.draftValue())))):(!r||!o)&&this.parseError.set(`incomplete`)}parseTypedText(t){let e=this.mode(),n=this.settings().rangeSeparator,r=this.modeInfo();if(r.selection===`range`){let o=t.split(n).map(g=>g.trim());if(o.length<2)return null;let a=this.parseSingleDate(o[0]),u=this.parseSingleDate(o[1]);return!a||!u?null:e===`range`?{start:a,end:u}:{start:a,end:u,kind:r.period??`month`}}if(e===`multiple`){let o=t.split(`,`).map(a=>this.parseSingleDate(a.trim()));return o.length&&o.every(a=>a!==null)?[...new Set(o)].sort():null}return this.parseSingleDate(t)}parseSingleDate(t){if(this.allowNaturalLanguage()){let r=mK(t,{now:this.clock.now(),timeZone:this.settings().timeZone,locale:this.settings().locale,calendar:this.adapter(),weekStartsOn:this.settings().weekStartsOn});if(r.value)return this.modeInfo().period===`week`?Qo$1(r.value,`week`,this.settings().weekStartsOn).start:r.value}let e={locale:this.settings().locale,calendar:this.adapter()};if(this.modeInfo().period===`week`){let r=t.split(this.settings().rangeSeparator),o=r.length===2?BQ(r[1].trim(),`dd MMM yyyy`,e).value:null,a=o?Qo$1(o,`week`,this.settings().weekStartsOn).start:null;if(a&&this.formatEndpoint(a)===t.trim())return a}let n=this.parseFormats().length?this.parseFormats():this.modeInfo().period?[this.patternForMode(this.modeInfo().period),this.settings().dateFormat]:[this.settings().dateFormat,`yyyy-MM-dd`];for(let r of n){let o=BQ(t,r,e);if(o.value)return this.modeInfo().period===`week`?Qo$1(o.value,`week`,this.settings().weekStartsOn).start:o.value}return null}async runResolver(t){let e=this.resolver();if(!e||this.availability())return;let n=++this.resolverToken,r=`${t.calendar}|${t.locale}|${t.timeZone}`;r!==this.resolverContext&&this.availabilityState.set(void 0),this.resolverContext=r,this.availabilityState.set({dates:this.availabilityState()?.dates??[],loading:!0,revision:t.revision});try{let o=await e(t);if(n!==this.resolverToken)return;this.availabilityState.set({dates:ta(this.availabilityState()?.dates,o?.dates??[],t),loading:!1,revision:t.revision,retryable:!0})}catch{if(n!==this.resolverToken)return;this.availabilityState.set({dates:this.availabilityState()?.dates??[],loading:!1,error:this.loadErrorMessage(),retryable:!0,revision:t.revision})}}static ɵfac=function(e){return new(e||i)};static ɵcmp=Fr({type:i,selectors:[[`bx-date-picker`]],viewQuery:function(e,n){e&1&&Wy(n.panelTemplate,fc,5),e&2&&db()},inputs:{mode:[1,`mode`],pickerIcon:[1,`pickerIcon`],openPickerLabel:[1,`openPickerLabel`],startAt:[1,`startAt`],startView:[1,`startView`],parseFormats:[1,`parseFormats`],locale:[1,`locale`],calendarId:[1,`calendarId`],timeZone:[1,`timeZone`],weekStartsOn:[1,`weekStartsOn`],minimalDaysInFirstWeek:[1,`minimalDaysInFirstWeek`],dateFormat:[1,`dateFormat`],allowNaturalLanguage:[1,`allowNaturalLanguage`],editable:[1,`editable`],presentation:[1,`presentation`],weekdayNameFormat:[1,`weekdayNameFormat`],monthNameFormat:[1,`monthNameFormat`],months:[1,`months`],separateFields:[1,`separateFields`],commitPolicy:[1,`commitPolicy`],closeOnSelect:[1,`closeOnSelect`],clearable:[1,`clearable`],presets:[1,`presets`],presetsPlacement:[1,`presetsPlacement`],min:[1,`min`],max:[1,`max`],disabledDates:[1,`disabledDates`],disabledIntervals:[1,`disabledIntervals`],disabledWeekdays:[1,`disabledWeekdays`],dateFilter:[1,`dateFilter`],crossingPolicy:[1,`crossingPolicy`],minRangeLength:[1,`minRangeLength`],maxRangeLength:[1,`maxRangeLength`],allowSameDay:[1,`allowSameDay`],selectionLimit:[1,`selectionLimit`],availability:[1,`availability`],resolver:[1,`resolver`],loadingLabel:[1,`loadingLabel`],retryLabel:[1,`retryLabel`],loadErrorMessage:[1,`loadErrorMessage`],invalidSelectionLabel:[1,`invalidSelectionLabel`],applyLabel:[1,`applyLabel`],cancelLabel:[1,`cancelLabel`],clearLabel:[1,`clearLabel`],todayLabel:[1,`todayLabel`],presetsLabel:[1,`presetsLabel`],showToday:[1,`showToday`],showTodayButton:[1,`showTodayButton`],startLabel:[1,`startLabel`],endLabel:[1,`endLabel`],moreDatesLabel:[1,`moreDatesLabel`],selectedDatesLabel:[1,`selectedDatesLabel`],clearTooltip:[1,`clearTooltip`],visibleTagCount:[1,`visibleTagCount`],tagConfig:[1,`tagConfig`],overflowTagConfig:[1,`overflowTagConfig`],dayTemplate:[1,`dayTemplate`]},outputs:{viewChange:`viewChange`,monthSelected:`monthSelected`,yearSelected:`yearSelected`,valueCommit:`valueCommit`,draftChange:`draftChange`,openChange:`openChange`,visibleRangeChange:`visibleRangeChange`,request:`request`,retry:`retry`,parseFailed:`parseFailed`},features:[xt],ngContentSelectors:vc,decls:14,vars:21,consts:[[`retryAction`,``],[`panelTemplate`,``],[`trigger`,``],[3,`control`,`inline`,`tooltip`,`showLoadingIndicator`,`hint`,`hintEnd`,`error`,`subscriptSizing`,`forId`],[1,`bx-date-field`,3,`focusin`,`focusout`],[`role`,`group`,1,`bx-date-range-fields`],[`bxSurface`,``,1,`bx-date-trigger`,`is-editable`,`is-range`,3,`has-label`,`is-open`,`is-floating`,`is-invalid`,`is-outline`,`is-readonly`,`is-disabled`,`is-keyboard-focused`],[`bxSurface`,``,1,`bx-date-trigger`,`is-editable`,3,`has-label`,`is-open`,`is-floating`,`is-invalid`,`is-outline`,`is-readonly`,`is-disabled`,`is-keyboard-focused`],[`type`,`button`,`bxSurface`,``,1,`bx-date-trigger`,3,`has-label`,`is-open`,`is-floating`,`is-invalid`,`is-outline`,`is-readonly`,`is-disabled`,`is-keyboard-focused`,`id`,`disabled`],[`bx-button`,``,`type`,`button`,`variant`,`text`,1,`bx-date-clear`,3,`surfaceEffects`,`disabled`,`bxTooltip`],[3,`dismiss`,`panelId`,`panelWidth`,`open`,`presentation`,`origin`,`content`,`ariaLabel`,`panelClass`],[`bxSurface`,``,1,`bx-date-trigger`,`is-range-endpoint`,`has-label`,3,`is-open`,`is-floating`,`is-invalid`,`is-outline`,`is-readonly`,`is-disabled`,`is-keyboard-focused`],[`bxSurface`,``,1,`bx-date-trigger`,`is-range-endpoint`,`has-label`],[1,`bx-floating-label`],[`aria-hidden`,`true`,1,`bx-field-required`],[`role`,`combobox`,`aria-autocomplete`,`none`,`aria-haspopup`,`dialog`,`type`,`text`,`autocomplete`,`off`,1,`bx-date-input`,3,`id`,`value`,`disabled`,`readOnly`],[`type`,`button`,`aria-haspopup`,`dialog`,1,`bx-date-endpoint-value`,`bx-date-value`,3,`id`,`disabled`],[`type`,`button`,1,`bx-date-trigger-icon-button`,3,`click`,`disabled`],[`size`,`16`,3,`name`,`decorative`],[`role`,`combobox`,`aria-autocomplete`,`none`,`aria-haspopup`,`dialog`,`type`,`text`,`autocomplete`,`off`,1,`bx-date-input`,3,`input`,`blur`,`keydown`,`keydown.escape`,`id`,`value`,`disabled`,`readOnly`],[`type`,`button`,`aria-haspopup`,`dialog`,1,`bx-date-endpoint-value`,`bx-date-value`,3,`click`,`keydown.escape`,`id`,`disabled`],[`bxSurface`,``,1,`bx-date-trigger`,`is-editable`,`is-range`],[`role`,`combobox`,`aria-autocomplete`,`none`,`type`,`text`,`autocomplete`,`off`,1,`bx-date-input`,3,`input`,`blur`,`keydown`,`keydown.escape`,`value`,`id`,`disabled`,`readOnly`],[`aria-hidden`,`true`,1,`bx-date-range-separator`],[`role`,`combobox`,`aria-autocomplete`,`none`,`type`,`text`,`autocomplete`,`off`,1,`bx-date-input`,3,`input`,`blur`,`keydown`,`keydown.escape`,`value`,`disabled`,`readOnly`],[`aria-hidden`,`true`,3,`value`],[3,`size`,`decorative`],[`bxSurface`,``,1,`bx-date-trigger`,`is-editable`],[`role`,`combobox`,`aria-autocomplete`,`none`,`type`,`text`,`autocomplete`,`off`,1,`bx-date-input`,3,`input`,`blur`,`keydown`,`keydown.escape`,`id`,`value`,`disabled`,`readOnly`],[`type`,`button`,`bxSurface`,``,1,`bx-date-trigger`,3,`click`,`keydown.arrowdown`,`keydown.escape`,`blur`,`id`,`disabled`],[1,`bx-date-value`],[1,`bx-selected-tags`],[`bxTruncate`,``,3,`bxTooltip`],[`aria-hidden`,`true`,1,`bx-date-trigger-icon`,3,`value`],[3,`text`,`config`,`focusable`,`tooltipOnTruncate`],[1,`bx-overflow-tag`,3,`text`,`config`,`tooltip`,`focusable`,`tooltipOnTruncate`],[`bx-button`,``,`type`,`button`,`variant`,`text`,1,`bx-date-clear`,3,`click`,`surfaceEffects`,`disabled`,`bxTooltip`],[`name`,`x`,`size`,`16`,3,`decorative`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`accent`,3,`click`],[`name`,`rotate-cw`,`size`,`16`,3,`decorative`],[`bxSurface`,``,`data-bx-surface`,`glass`,1,`bx-date-panel-content`,3,`bxSurfaceInteractive`],[1,`bx-date-panel-body`],[1,`bx-date-presets`],[1,`bx-date-calendar-column`],[3,`visibleRangeChange`,`viewChange`,`monthSelected`,`yearSelected`,`rangeStart`,`valueChange`,`selectionRejected`,`requestAvailability`,`retryAvailability`,`startView`,`mode`,`value`,`viewDate`,`months`,`retryTemplate`,`weekdayNameFormat`,`monthNameFormat`,`locale`,`calendarId`,`timeZone`,`weekStartsOn`,`minimalDaysInFirstWeek`,`min`,`max`,`disabledDates`,`disabledIntervals`,`disabledWeekdays`,`dateFilter`,`crossingPolicy`,`minRangeLength`,`maxRangeLength`,`allowSameDay`,`selectionLimit`,`readOnly`,`availability`,`dayTemplate`,`showToday`,`showTodayButton`,`todayLabel`,`loadingLabel`,`retryLabel`],[3,`presetSelect`,`presets`,`context`,`activeValue`,`horizontal`,`ariaLabel`]],template:function(e,n){if(e&1&&($y(xc),bo$1(0,`bx-form-field`,3)(1,`div`,4),br(`focusin`,function(){return n.onFieldFocus()})(`focusout`,function(o){return n.onFieldBlur(o)}),tb(2,Tc,3,2,`div`,5)(3,Ec,9,48,`div`,6)(4,zc,6,34,`div`,7)(5,Xc,8,33,`button`,8),tb(6,Uc,2,5,`button`,9),Go$1(),bo$1(7,`bx-picker-surface`,10),br(`dismiss`,function(){return n.cancel()}),Go$1(),ed$1(8,Yc,3,2,`ng-template`,null,0,TA)(10,eu,6,37,`ng-template`,null,1,TA),Gy(12,0,yc),Gy(13,1,Sc),Go$1()),e&2){let r=jT(11);$o$1(`control`,n.fieldControl)(`inline`,!0)(`tooltip`,n.tooltip())(`showLoadingIndicator`,!1)(`hint`,n.hint())(`hintEnd`,n.hintEnd())(`error`,n.parseError()?n.resolvedInvalidLabel():n.error())(`subscriptSizing`,n.resolvedSubscriptSizing())(`forId`,n.controlId()),qs$1(),tr(`has-clear`,n.showClear()),qs$1(),ob(n.rangeFieldLayout()===`separate`?2:n.editable()&&n.isRangeMode()&&!n.modeInfo().isPeriod?3:n.editable()&&!n.isRangeMode()&&n.mode()!==`multiple`?4:5),qs$1(4),ob(n.showClear()?6:-1),qs$1(),$o$1(`panelId`,n.controlId()+`-panel`)(`panelWidth`,n.panelWidth())(`open`,n.isOpen())(`presentation`,n.surfacePresentation())(`origin`,n.panelOrigin())(`content`,r)(`ariaLabel`,n.resolvedLabel()||n.resolvedDatePlaceholder())(`panelClass`,n.panelClass())}},dependencies:[qu$1,UC,xe,pl$1,Gn,ee,YC,Et$1,Vt,Bs$1,Pt$1,ct$1],styles:[`
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
}`]})};var ia=(i,t)=>t.value+`-`+i;function ru(i,t){if(i&1){let e=lb();bo$1(0,`button`,11),br(`mousedown`,function(r){return r.preventDefault()})(`click`,function(r){let o=il$1(e).$index,a=$s$1();return al$1(a.onOptionClick(o,r))}),aA(1),Go$1()}if(i&2){let e=t.$implicit,n=t.$index,r=$s$1();ka$1(`height`,r.itemHeight(),`px`),tr(`is-selected`,r.isSelectedAt(n))(`is-disabled`,e.disabled),$o$1(`id`,r.wheelId+`-`+n),vo$1(`aria-hidden`,r.loopOffset()>0&&(n<r.loopOffset()||n>=r.loopOffset()*2)?!0:null)(`aria-selected`,r.isSelectedAt(n))(`aria-disabled`,e.disabled),qs$1(),ub(` `,e.label,` `)}}function ou(i,t){if(i&1&&(bo$1(0,`span`,12),aA(1),Go$1()),i&2){let e=t.$implicit,n=t.$index,r=$s$1();ka$1(`height`,r.itemHeight(),`px`),tr(`is-selected`,r.isSelectedAt(n))(`is-disabled`,e.disabled),qs$1(),sk(e.label)}}var Kn=class i{i18n=b(SQ,{optional:!0});bxA11yService=b(Br);destroyRef=b(he);position=z(0);dragging=z(!1);wheelId=`bx-time-wheel-${MZ()}`;resolvedLabel=U(()=>CQ(this.label(),this.i18n));logicalIndex=U(()=>{let t=this.options().findIndex(e=>e.value===this.value());return t<0?0:t});displayOptions=U(()=>{let t=this.options();return!this.loop()||t.length<2?t:[...t,...t,...t]});loopOffset=U(()=>this.loop()&&this.options().length>1?this.options().length:0);centerOffset=U(()=>(this.visibleItems()-1)/2*this.itemHeight());viewportHeight=U(()=>this.visibleItems()*this.itemHeight());trackTransform=U(()=>`translateY(${this.centerOffset()-this.position()*this.itemHeight()}px)`);lensTransform=U(()=>`translateY(${-this.position()*this.itemHeight()}px)`);options=re.required();value=yz(null);label=re(`Time`);type=re(`minute`);loop=re(!0,{transform:Ge});disabled=re(!1,{transform:Ge});itemHeight=re(40);visibleItems=re(5);activated=Ok();cancelGesture;motion;wheelTimer;wheelVelocity;wheelOptions;wheelCoordinate=0;motionPosition=0;motionVelocity=0;committedIndex=null;initialized=!1;constructor(){$e(()=>{let t=this.logicalIndex(),e=this.bxA11yService.isReducedMotion();if(!this.dragging()){if(this.committedIndex===t&&!e){this.committedIndex=null;return}this.animateTo(this.targetPhysicalIndex(t),!this.initialized),this.initialized=!0}}),this.destroyRef.onDestroy(()=>{this.cancelGesture?.(),clearTimeout(this.wheelTimer),this.motion?.destroy()})}step(t){if(this.disabled())return;this.cancelWheel();let e=this.options(),n=e.length;if(!n)return;let r=this.logicalIndex()+t,o=0;for(this.loop()?r=(r%n+n)%n:r=Math.max(0,Math.min(n-1,r));e[r]?.disabled&&o<n;)r=this.loop()?((r+Math.sign(t||1))%n+n)%n:Math.max(0,Math.min(n-1,r+Math.sign(t||1))),o+=1;this.commitIndex(r)}onOptionClick(t,e){this.disabled()||e.detail>0||this.commitIndex(this.wrapIndex(t))}isSelectedAt(t){return this.wrapIndex(t)===this.logicalIndex()}onKeydown(t){if(t.key===`Escape`&&(this.cancelGesture||this.wheelTimer)){t.preventDefault(),t.stopPropagation(),this.cancelGesture?.(),this.cancelWheel();return}if(this.disabled())return;let e=Math.max(1,Math.round(this.visibleItems()/2));if(t.key===`ArrowUp`)this.step(-1);else if(t.key===`ArrowDown`)this.step(1);else if(t.key===`PageUp`)this.step(-e);else if(t.key===`PageDown`)this.step(e);else if(t.key===`Home`)this.commitIndex(0);else if(t.key===`End`)this.commitIndex(this.options().length-1);else if(t.key===`Enter`||t.key===` `)this.activated.emit(this.value()??``);else return;t.preventDefault()}onWheel(t){if(this.disabled()||!this.options().length||t.ctrlKey||Math.abs(t.deltaX)>Math.abs(t.deltaY))return;t.preventDefault(),t.stopPropagation(),this.wheelTimer||(this.cancelGesture?.(),this.motion?.destroy(),this.motion=void 0,this.wheelOptions=this.options(),this.wheelCoordinate=0,this.wheelVelocity=new Mh(0,t.timeStamp),this.dragging.set(!0));let e=t.deltaY*(t.deltaMode===1?this.itemHeight():t.deltaMode===2?this.viewportHeight():1);this.wheelCoordinate+=e,this.wheelVelocity?.update(this.wheelCoordinate,t.timeStamp),this.position.set(this.constrainPosition(this.position()+e/this.itemHeight())),clearTimeout(this.wheelTimer),this.wheelTimer=setTimeout(()=>{let n=(this.wheelVelocity?.velocity(performance.now())??0)/this.itemHeight(),r=this.disabled()||this.options()!==this.wheelOptions;if(this.wheelTimer=void 0,this.wheelVelocity=void 0,this.wheelOptions=void 0,this.dragging.set(!1),r){this.animateTo(this.targetPhysicalIndex(this.logicalIndex()),!1);return}this.settlePosition(this.position(),n)},80)}onPointerDown(t){if(!t.isPrimary||t.button!==0||this.disabled()||!this.options().length)return;let e=t.currentTarget;if(!(e instanceof HTMLElement))return;this.cancelGesture?.(),this.cancelWheel();let n=this.options(),r=t.clientY,o=this.position(),a=new Mh(t.clientY,t.timeStamp),u=t.pointerId,g=!1;this.motion?.destroy(),this.motion=void 0,this.dragging.set(!0),e.setPointerCapture(u);let S=V=>{if(V.pointerId!==u)return;a.update(V.clientY,V.timeStamp),Math.abs(V.clientY-r)>4&&(g=!0),V.preventDefault();let J=o+(r-V.clientY)/this.itemHeight(),U=this.constrainPosition(J);this.loop()&&(o+=U-J),this.position.set(U)},P=()=>{u=-1,e.removeEventListener(`pointermove`,S),e.removeEventListener(`pointerup`,O),e.removeEventListener(`pointercancel`,D),e.removeEventListener(`lostpointercapture`,D),this.cancelGesture=void 0,this.dragging.set(!1),e.hasPointerCapture(t.pointerId)&&e.releasePointerCapture(t.pointerId)},O=V=>{if(V.pointerId!==u)return;if(this.disabled()||this.options()!==n){D();return}let J=-a.velocity(V.timeStamp)/this.itemHeight(),U=this.position(),z=e.getBoundingClientRect(),te=U+(V.clientY-(z.top+z.height/2))/this.itemHeight();if(P(),!g&&this.options()[this.wrapIndex(te)]?.disabled){this.animateTo(this.targetPhysicalIndex(this.logicalIndex()),!1);return}this.settlePosition(g?U:te,g?J:0)},D=()=>{P(),this.animateTo(this.targetPhysicalIndex(this.logicalIndex()),!1)};this.cancelGesture=D,e.addEventListener(`pointermove`,S,{passive:!1}),e.addEventListener(`pointerup`,O),e.addEventListener(`pointercancel`,D),e.addEventListener(`lostpointercapture`,D)}commitIndex(t,e,n){let r=this.options()[t];!r||r.disabled||(this.committedIndex=t,this.animateTo(n??this.targetPhysicalIndex(t),!1,e),this.value.set(r.value),this.activated.emit(r.value))}animateTo(t,e,n){if(e||this.bxA11yService.isReducedMotion()){this.motion?.destroy(),this.motion=void 0,this.position.set(this.recenterValue(t));return}this.motion||(this.motion=Zn$1([this.position()],([r],[o])=>{this.motionPosition=r,this.motionVelocity=o,this.position.set(this.recenterValue(r))},vr.soft),this.motion.track([this.position()],[n??0])),n!==void 0&&this.motion.track([this.position()],[n]),this.motion.retarget([t],!1)}targetPhysicalIndex(t){if(!this.loop())return t;let e=this.options().length,n=this.loopOffset(),r=this.recenterValue(this.position());(this.motionPosition!==r||r!==this.position())&&(this.motion?.track([r],[this.motionVelocity]),this.position.set(r));let o=n+t,a=o;for(let u of[o-e,o+e])Math.abs(r-u)<Math.abs(r-a)&&(a=u);return a}recenterValue(t){let e=this.options().length;if(!this.loop()||e<2)return t;let n=this.loopOffset();return t>=n+e||t<n?n+((t-n)%e+e)%e:t}nearestEnabledPosition(t,e){let n=this.options().length,r=Math.round(t);for(let o=0;o<n;o++){let a=o===0?[r]:[r+o*(e||1),r-o*(e||1)];for(let u of a){let g=this.wrapIndex(u);if(!this.options()[g]?.disabled)return this.loop()?u:g}}return null}wrapIndex(t){let e=this.options().length;if(!e)return 0;let n=this.loopOffset();return this.loop()?((Math.round(t)-n)%e+e)%e:Math.max(0,Math.min(e-1,Math.round(t)-n))}constrainPosition(t){if(this.loop())return this.recenterValue(t);let e=Math.max(0,this.options().length-1),n=t<0?0:e;if(t>=0&&t<=e)return t;let r=t-n;return n+r/(1+Math.abs(r))*.75}settlePosition(t,e){let n=Math.min(12,Math.max(0,this.options().length-1)),r=t+Math.max(-n,Math.min(n,e*.24)),o=this.nearestEnabledPosition(r,Math.sign(e));o!==null?this.commitIndex(this.wrapIndex(o),e,o):this.animateTo(this.targetPhysicalIndex(this.logicalIndex()),!1)}cancelWheel(){this.wheelTimer&&(clearTimeout(this.wheelTimer),this.wheelTimer=void 0,this.wheelVelocity=void 0,this.wheelOptions=void 0,this.dragging.set(!1),this.animateTo(this.targetPhysicalIndex(this.logicalIndex()),!1))}static ɵfac=function(e){return new(e||i)};static ɵcmp=Fr({type:i,selectors:[[`bx-time-wheel`]],inputs:{options:[1,`options`],value:[1,`value`],label:[1,`label`],type:[1,`type`],loop:[1,`loop`],disabled:[1,`disabled`],itemHeight:[1,`itemHeight`],visibleItems:[1,`visibleItems`]},outputs:{value:`valueChange`,activated:`activated`},decls:13,vars:23,consts:[[`viewport`,``],[1,`bx-wheel`],[`role`,`listbox`,`tabindex`,`0`,1,`bx-wheel-viewport`,3,`keydown`,`wheel`,`pointerdown`],[1,`bx-wheel-base`],[1,`bx-wheel-track`],[`type`,`button`,`role`,`option`,`tabindex`,`-1`,1,`bx-wheel-option`,3,`id`,`is-selected`,`is-disabled`,`height`],[`aria-hidden`,`true`,`inert`,``,1,`bx-wheel-magnifier`],[1,`bx-wheel-lens-content`],[1,`bx-wheel-lens-track`],[1,`bx-wheel-lens-option`,3,`is-selected`,`is-disabled`,`height`],[`bxSurface`,``,`data-bx-surface`,`glass`,`bxSurfaceGlassiness`,`auto`,`bxSurfaceQuality`,`auto`,`bxSurfaceLocalRefraction`,``,`aria-hidden`,`true`,1,`bx-wheel-band`,3,`bxSurfaceInteractive`,`bxSurfaceEmission`],[`type`,`button`,`role`,`option`,`tabindex`,`-1`,1,`bx-wheel-option`,3,`mousedown`,`click`,`id`],[1,`bx-wheel-lens-option`]],template:function(e,n){e&1&&(bo$1(0,`div`,1)(1,`div`,2,0),br(`keydown`,function(o){return n.onKeydown(o)})(`wheel`,function(o){return n.onWheel(o)})(`pointerdown`,function(o){return n.onPointerDown(o)}),bo$1(3,`div`,3)(4,`div`,4),nb(5,ru,2,11,`button`,5,ia),Go$1()(),bo$1(7,`div`,6)(8,`div`,7)(9,`div`,8),nb(10,ou,2,7,`span`,9,ia),Go$1()()(),td$1(12,`div`,10),Go$1()()),e&2&&(ka$1(`--%NS%bx-wheel-item-height`,n.itemHeight(),`px`)(`--%NS%bx-wheel-center-offset`,n.centerOffset(),`px`),tr(`is-dragging`,n.dragging())(`is-disabled`,n.disabled()),qs$1(),ka$1(`height`,n.viewportHeight(),`px`),vo$1(`aria-label`,n.resolvedLabel())(`aria-activedescendant`,n.options().length?n.wheelId+`-`+(n.loopOffset()+n.logicalIndex()):null)(`aria-disabled`,n.disabled()),qs$1(3),ka$1(`transform`,n.trackTransform()),qs$1(),sb(n.displayOptions()),qs$1(2),ka$1(`height`,n.itemHeight(),`px`),qs$1(2),ka$1(`transform`,n.lensTransform()),qs$1(),sb(n.displayOptions()),qs$1(2),ka$1(`height`,n.itemHeight(),`px`),$o$1(`bxSurfaceInteractive`,!1)(`bxSurfaceEmission`,!1))},dependencies:[UC],styles:[`
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
}`]})};var ra={timeFormat:({params:i})=>`Enter a time in the ${i.format} format.`,timeRange:({params:i})=>i.hourCycle===12?`Use an hour from 1 to 12 with AM or PM, and minutes and seconds from 00 to 59.`:`Use an hour from 00 to 23, and minutes and seconds from 00 to 59.`,timeMin:({params:i})=>`The time cannot be before ${i.minFormatted}.`,timeMax:({params:i})=>`The time cannot be after ${i.maxFormatted}.`,timeDisabled:`This time is unavailable. Choose another time.`,timeAvailability:`This time has not been confirmed as available. Retry loading the available times.`,timeLoading:`Wait for the available times to finish loading.`,timeStep:({params:i})=>`Use increments of ${i.minuteStep} minutes, ${i.secondStep} seconds and ${i.millisecondStep} milliseconds.`};function en(i){return String(i).padStart(2,`0`)}function oa(i){let t=i<0?`-`:`+`,e=Math.abs(i);return`GMT${t}${en(Math.floor(e/60))}:${en(e%60)}`}function aa(i,t){let e=Math.max(1,t)*60;if(i===void 0)return e;if(typeof i==`number`)return Number.isFinite(i)&&i>0?i*60:e;let n=/^\s*(\d+(?:\.\d+)?)\s*(h|hours?|m|mins?|minutes?|s|seconds?)?\s*$/i.exec(i);if(!n||Number(n[1])<=0)return e;let r=n[2]?.toLowerCase()??`m`,o=r.startsWith(`h`)?3600:r.startsWith(`s`)?1:60;return Number(n[1])*o}var au=[`listViewport`];var su=[`collection`];var lu=[`panelTemplate`];var du=[[[`bx-error`]],[[`bx-hint`]]];var cu=[`bx-error`,`bx-hint`];var uu=[`ngProjectAs`,`bx-error`,5,[`bx-error`]];var pu=[`ngProjectAs`,`bx-hint`,5,[`bx-hint`]];function bu(i,t){i&1&&(bo$1(0,`span`,12),aA(1,`*`),Go$1())}function mu(i,t){if(i&1&&(bo$1(0,`label`,6),aA(1),tb(2,bu,2,0,`span`,12),Go$1()),i&2){let e=$s$1();vo$1(`for`,e.controlId()),qs$1(),ub(``,e.resolvedLabel(),` `),qs$1(),ob(e.effectiveRequired()&&!e.resolvedHideRequiredMarker()?2:-1)}}function gu(i,t){i&1&&td$1(0,`bx-loading-spinner`,13),i&2&&$o$1(`size`,16)(`decorative`,!0)}function hu(i,t){if(i&1&&td$1(0,`bx-icon`,14),i&2){let e=$s$1(2);$o$1(`name`,e.pickerIcon())(`decorative`,!0)}}function fu(i,t){if(i&1&&tb(0,gu,1,2,`bx-loading-spinner`,13)(1,hu,1,2,`bx-icon`,14),i&2){let e=t.$implicit;ob(e?0:1)}}function xu(i,t){if(i&1){let e=lb();bo$1(0,`button`,15),br(`click`,function(){il$1(e);let r=$s$1();return al$1(r.clear())}),td$1(1,`bx-icon`,16),Go$1()}if(i&2){let e=$s$1();$o$1(`surfaceEffects`,!1)(`disabled`,e.effectiveDisabled())(`bxTooltip`,e.resolvedClearTooltip()),vo$1(`aria-label`,e.resolvedClearLabel()),qs$1(),$o$1(`decorative`,!0)}}function vu(i,t){if(i&1){let e=lb();bo$1(0,`span`,27),aA(1,`:`),Go$1(),bo$1(2,`bx-time-wheel`,30),br(`valueChange`,function(r){il$1(e);let o=$s$1(3);return al$1(o.onWheelChange(`second`,r))}),Go$1()}if(i&2){let e=$s$1(3);qs$1(2),$o$1(`options`,e.wheelColumns().seconds)(`value`,e.wheelValue(`second`))(`label`,e.resolvedSecondLabel())(`loop`,e.loopColumns())}}function yu(i,t){if(i&1){let e=lb();bo$1(0,`span`,27),aA(1,`.`),Go$1(),bo$1(2,`bx-time-wheel`,31),br(`valueChange`,function(r){il$1(e);let o=$s$1(3);return al$1(o.onWheelChange(`millisecond`,r))}),Go$1()}if(i&2){let e=$s$1(3);qs$1(2),$o$1(`options`,e.wheelColumns().milliseconds)(`value`,e.wheelValue(`millisecond`))(`label`,e.resolvedMillisecondLabel())(`loop`,e.loopColumns())}}function Su(i,t){if(i&1){let e=lb();bo$1(0,`bx-time-wheel`,32),br(`valueChange`,function(r){il$1(e);let o=$s$1(3);return al$1(o.onWheelChange(`period`,r))}),Go$1()}if(i&2){let e=$s$1(3);$o$1(`options`,e.wheelColumns().periods)(`value`,e.wheelValue(`period`))(`label`,e.resolvedPeriodLabel())(`loop`,!1)}}function _u(i,t){if(i&1){let e=lb();bo$1(0,`div`,21)(1,`bx-time-wheel`,26),br(`valueChange`,function(r){il$1(e);let o=$s$1(2);return al$1(o.onWheelChange(`hour`,r))}),Go$1(),bo$1(2,`span`,27),aA(3,`:`),Go$1(),bo$1(4,`bx-time-wheel`,28),br(`valueChange`,function(r){il$1(e);let o=$s$1(2);return al$1(o.onWheelChange(`minute`,r))}),Go$1(),tb(5,vu,3,4),tb(6,yu,3,4),tb(7,Su,1,4,`bx-time-wheel`,29),Go$1()}if(i&2){let e=$s$1(2);qs$1(),$o$1(`options`,e.wheelColumns().hours)(`value`,e.wheelValue(`hour`))(`label`,e.resolvedHourLabel())(`loop`,e.loopColumns()),qs$1(3),$o$1(`options`,e.wheelColumns().minutes)(`value`,e.wheelValue(`minute`))(`label`,e.resolvedMinuteLabel())(`loop`,e.loopColumns()),qs$1(),ob(e.showSeconds()?5:-1),qs$1(),ob(e.showMilliseconds()?6:-1),qs$1(),ob(e.showPeriod()?7:-1)}}function Cu(i,t){i&1&&td$1(0,`bx-icon`,37),i&2&&$o$1(`decorative`,!0)}function Mu(i,t){if(i&1){let e=lb();bo$1(0,`button`,36),br(`click`,function(){let r=il$1(e).$implicit,o=$s$1(3);return al$1(o.onListSelect(r.value))}),bo$1(1,`span`),aA(2),Go$1(),tb(3,Cu,1,1,`bx-icon`,37),Go$1()}if(i&2){let e=t.$implicit,n=t.index,r=t.count,o=$s$1(3);tr(`is-selected`,o.internalValue()===e.value)(`is-active`,o.listFocusValue()===e.value),$o$1(`id`,o.controlId()+`-`+e.value)(`disabled`,e.disabled),vo$1(`aria-posinset`,n+1)(`aria-setsize`,r)(`aria-selected`,o.internalValue()===e.value)(`aria-disabled`,e.disabled)(`data-time-value`,e.value),qs$1(2),sk(e.label),qs$1(),ob(o.internalValue()===e.value?3:-1)}}function wu(i,t){if(i&1){let e=lb();bo$1(0,`div`,33,1),br(`keydown`,function(r){il$1(e);let o=jT(3),a=$s$1(2);return al$1(a.onListKeydown(r,o))}),bo$1(2,`bx-virtual-collection`,34,2),ed$1(4,Mu,4,13,`ng-template`,35),Go$1()()}if(i&2){let e=jT(1),n=jT(3),r=$s$1(2);vo$1(`aria-activedescendant`,r.listActiveId())(`aria-label`,r.resolvedLabel()||r.resolvedOpenPickerLabel()),qs$1(2),$o$1(`items`,r.listOptions())(`trackBy`,r.listTrackBy)(`config`,r.listConfig)(`scrollContainer`,e),vo$1(`role`,`presentation`),qs$1(2),$o$1(`bxVirtualItem`,n)}}function Nu(i,t){if(i&1&&td$1(0,`bx-loading-indicator`,38),i&2){let e=$s$1(3);$o$1(`size`,20)(`label`,e.resolvedLoadingLabel())}}function Tu(i,t){if(i&1){let e=lb();bo$1(0,`button`,42),br(`click`,function(){il$1(e);let r=$s$1(4);return al$1(r.retrySlots())}),td$1(1,`bx-icon`,43),aA(2),Go$1()}if(i&2){let e=$s$1(4);qs$1(),$o$1(`decorative`,!0),qs$1(),ub(``,e.resolvedRetryLabel(),` `)}}function Pu(i,t){if(i&1&&(bo$1(0,`div`,40),aA(1),Go$1(),tb(2,Tu,3,2,`button`,41)),i&2){let e=$s$1(3);qs$1(),sk(e.availabilityError()),qs$1(),ob(e.availabilityForPanel()?.retryable!==!1?2:-1)}}function Ou(i,t){if(i&1&&(bo$1(0,`span`,39),aA(1),Go$1()),i&2){let e=$s$1(3);qs$1(),sk(e.resolvedEmptyLabel())}}function ku(i,t){if(i&1&&(bo$1(0,`div`,23),tb(1,Nu,1,2,`bx-loading-indicator`,38)(2,Pu,3,2)(3,Ou,2,1,`span`,39),Go$1()),i&2){let e=$s$1(2);qs$1(),ob(e.availabilityLoading()?1:e.availabilityError()?2:3)}}function Iu(i,t){if(i&1){let e=lb();bo$1(0,`div`,24)(1,`button`,44),br(`click`,function(){il$1(e);let r=$s$1(2);return al$1(r.selectNow())}),aA(2),Go$1()()}if(i&2){let e=$s$1(2);qs$1(),$o$1(`disabled`,!e.canSelectNow()),qs$1(),sk(e.resolvedNowLabel())}}function Du(i,t){if(i&1){let e=lb();bo$1(0,`bx-select`,45),br(`valueChange`,function(r){il$1(e);let o=$s$1(2);return al$1(o.onTimeZoneSelect(r))}),Go$1()}if(i&2){let e=$s$1(2);$o$1(`label`,e.resolvedTimeZoneLabel())(`options`,e.timeZoneOptions())(`value`,e.selectedTimeZone()??e.settings().timeZone)(`isSearchable`,!0)}}function Eu(i,t){if(i&1&&(bo$1(0,`div`,17)(1,`div`,18)(2,`div`,19)(3,`div`,20),tb(4,_u,8,11,`div`,21)(5,wu,5,8,`div`,22),Go$1(),tb(6,ku,4,1,`div`,23),Go$1(),tb(7,Iu,3,2,`div`,24),tb(8,Du,1,4,`bx-select`,25),Go$1()()),i&2){let e=$s$1();tr(`is-drawer`,e.isDrawer()),$o$1(`bxSurfaceInteractive`,!1),qs$1(2),vo$1(`aria-busy`,e.availabilityLoading()),qs$1(),vo$1(`inert`,e.panelFeedback()?``:null)(`aria-hidden`,e.panelFeedback()?!0:null),qs$1(),ob(e.timePresentation()===`wheel`?4:5),qs$1(2),ob(e.panelFeedback()?6:-1),qs$1(),ob(e.resolvedNowLabel()?7:-1),qs$1(),ob(e.showTimeZone()?8:-1)}}var sa=class i extends ve{injector=b(ie);bxA11yService=b(Br);ngZone=b(le);bxDateTimeConfigService=b(hC);clock=b(mC);i18n=b(SQ,{optional:!0});windowDimensionsService=b(Nd$1);originElement=z(null);availabilityState=z(void 0);selectedTimeZone=z(null);usesExternalAvailability=U(()=>this.availability()!==void 0);slotContext=U(()=>`${this.settings().locale}|${this.settings().timeZone}|${this.settings().precision}`);listViewport=kz(`listViewport`);listCollection=kz(`collection`);typedText=z(``);textEdited=z(!1);typedError=z(null);fieldFocused=z(!1);selectionEdited=z(!1);isOpen=z(!1);draftTime=z(`09:00`);listFocusValue=z(null);settings=U(()=>{let t=this.hourCycle();return this.bxDateTimeConfigService.resolve({locale:this.locale(),timeZone:this.selectedTimeZone()??this.timeZone()??void 0,hourCycle:t===`auto`?void 0:t,precision:this.precision(),minuteStep:this.minuteStep(),secondStep:this.secondStep(),millisecondStep:this.millisecondStep(),timeFormat:this.timeFormat(),showTimeZoneLabel:this.showTimeZone()})});surfacePresentation=U(()=>{let t=this.presentation();return t!==`auto`?t:this.windowDimensionsService.isMobile()?`drawer`:`popover`});isDrawer=U(()=>this.surfacePresentation()===`drawer`);displayValue=U(()=>this.formatValue(this.internalValue()));resolvedTimePlaceholder=U(()=>CQ(this.placeholder()??this.parseFormats()[0]??this.settings().timeFormat,this.i18n));resolvedOpenPickerLabel=U(()=>CQ(this.openPickerLabel(),this.i18n));resolvedClearTooltip=U(()=>CQ(this.clearTooltip()??this.clearLabel(),this.i18n));resolvedClearLabel=U(()=>CQ(this.clearLabel(),this.i18n));resolvedNowLabel=U(()=>CQ(this.nowLabel(),this.i18n));resolvedHourLabel=U(()=>CQ(this.hourLabel(),this.i18n));resolvedMinuteLabel=U(()=>CQ(this.minuteLabel(),this.i18n));resolvedSecondLabel=U(()=>CQ(this.secondLabel(),this.i18n));resolvedMillisecondLabel=U(()=>CQ(this.millisecondLabel(),this.i18n));resolvedPeriodLabel=U(()=>CQ(this.periodLabel(),this.i18n));resolvedTimeZoneLabel=U(()=>CQ(this.timeZoneLabel(),this.i18n));resolvedLoadingLabel=U(()=>CQ(this.loadingLabel(),this.i18n));resolvedRetryLabel=U(()=>CQ(this.retryLabel(),this.i18n));showClear=U(()=>this.clearable()&&(!!this.internalValue()||!!this.typedText())&&!this.isReadonly());isFloating=U(()=>this.fieldFocused()||this.keyboardFocused()||this.isOpen()||!!this.typedText()||!!this.displayValue()||this.resolvedFloatLabel()===`always`);timeZoneOptions=U(()=>GZ().map(t=>({value:t,label:this.timeZoneLabelFor(t),description:$Z(t,this.settings().locale).offsetMinutes===null?void 0:String($Z(t,this.settings().locale).offsetMinutes)})));availabilityForPanel=U(()=>this.availability()??(this.resolver()?this.availabilityState():void 0));availabilityLoading=U(()=>this.availabilityForPanel()?.loading===!0);availabilityError=U(()=>CQ(this.availabilityForPanel()?.error,this.i18n));availabilityTimes=U(()=>this.availabilityForPanel()?.times??null);panelFeedback=U(()=>this.availabilityLoading()||!!this.availabilityError()||this.availabilityTimes()?.length===0||this.isListMode()&&!this.listOptions().length);listConfig={layout:`list`,estimatedRowHeight:40,overscan:160};listTrackBy=t=>t.value;listOptions=U(()=>{let t=this.options();if(t)return t.map(P=>({value:P.value,label:CQ(P.label,this.i18n)||BZ(P.value,this.settings().timeFormat,this.settings().locale),disabled:!!P.disabled||!this.isTimeAllowed(P.value)}));let e=this.settings().precision===`hour`?3600:this.settings().precision===`minute`?60:1,n=Math.max(e,Math.ceil(aa(this.interval(),this.settings().minuteStep)/e)*e),r=this.min(),o=this.max(),a=r?Math.ceil(this.timeNumber(r)/1e3/e)*e:0,u=o?this.timeNumber(o)/1e3:86400-e,g=[],S=a;for(;S<=u;){let P=Math.round(S*1e3),O=Yr({hour:Math.floor(P/36e5),minute:Math.floor(P/6e4)%60,second:Math.floor(P/1e3)%60,millisecond:P%1e3},this.settings().precision);if(XQ(O,this.settings().minuteStep,this.settings().secondStep,this.settings().millisecondStep))break;S+=e}for(let P=S;P<=u;P+=n){let O=Math.round(P*1e3),D=Yr({hour:Math.floor(O/36e5),minute:Math.floor(O/6e4)%60,second:Math.floor(O/1e3)%60,millisecond:O%1e3},this.settings().precision);this.isTimeAllowed(D)&&g.push({value:D,label:BZ(D,this.settings().timeFormat,this.settings().locale),disabled:!1})}return g});canSelectNow=U(()=>this.isTimeAllowed(this.normalizeTime(WZ(this.clock.now(),this.settings().timeZone,this.settings().precision))));canApply=U(()=>this.isDraftValid()&&!this.availabilityLoading()&&!this.availabilityError());wheelColumns=U(()=>this.buildColumnsFor(this.draftTime()));errorText=U(()=>{let t=this.typedError();return t?this.validationMessage(t===`range`?`timeRange`:`timeFormat`):this.selectionEdited()?this.validationError():``});panelOrigin=U(()=>this.originElement());panelTemplate=kz(`panelTemplate`);options=re(void 0);interval=re(void 0);parseFormats=re([]);pickerIcon=re(`clock`);openPickerLabel=re(`Choose time`);timePresentation=re(`wheel`);presentation=re(`auto`);locale=re(void 0);timeZone=re(void 0);hourCycle=re(`auto`);precision=re(`minute`);minuteStep=re(1);secondStep=re(1);millisecondStep=re(1);timeFormat=re(void 0);loopColumns=re(!0,{transform:Ge});min=re(void 0);max=re(void 0);disabledTimes=re([]);disabledIntervals=re([]);timeFilter=re(void 0);commitPolicy=re(`auto`);closeOnSelect=re(void 0,{transform:t=>t==null?void 0:Ge(t)});clearable=re(!0,{transform:Ge});showTimeZone=re(!1,{transform:Ge});showTimeZoneLabel=re(!0,{transform:Ge});availability=re(void 0);resolver=re(void 0);loadingLabel=re(void 0);retryLabel=re(`Retry request`);applyLabel=re(`Apply`);cancelLabel=re(`Cancel`);clearLabel=re(`Clear selection`);nowLabel=re(void 0);clearTooltip=re(void 0);hourLabel=re(`Hour`);minuteLabel=re(`Minute`);secondLabel=re(`Second`);millisecondLabel=re(`Millisecond`);periodLabel=re(`AM or PM`);timeZoneLabel=re(`Time zone`);loadErrorMessage=re(`Times could not be loaded.`);invalidSelectionLabel=re(void 0);emptyLabel=re(`No times available.`);errorWrap=re(!1,{transform:Ge});valueCommit=Ok();openChange=Ok();timeZoneChange=Ok();slotRequest=Ok();slotRetry=Ok();listSelectionMotion;resolverToken=0;lastSlotContext=``;requestRevision=0;constructor(){super(),$e(()=>{(this.effectiveDisabled()||this.isReadonly())&&this.close()}),$e(()=>{let t=this.internalValue(),e=this.formatValue(t);this.textEdited()||this.typedText.set(e)}),$e(()=>{let t=this.internalValue();t&&this.draftTime.set(this.normalizeTime(t))}),$e(()=>{this.resolver(),this.usesExternalAvailability();let t=this.slotContext();de(()=>{let e=this.lastSlotContext;this.lastSlotContext=t,++this.resolverToken,this.availabilityState.set(void 0),this.isOpen()&&this.emitSlotRequest(e&&e.split(`|`)[1]!==t.split(`|`)[1]?`timezone`:`initial`)})}),$e(()=>{let t=this.listCollection(),e=this.listOptions(),n=this.isOpen();t&&n&&e.length&&de(()=>{let r=this.internalValue()??this.draftTime(),o=e.find(a=>!a.disabled&&this.timeNumber(a.value)>=this.timeNumber(r))??e.find(a=>!a.disabled);this.listFocusValue.set(o?.value??null),o&&t.scrollToItem(o.value)})}),$e(t=>{let e=this.listViewport()?.nativeElement;if(!e||!this.isOpen())return;let n=de(()=>this.ngZone.runOutsideAngular(()=>IR(e,{reducedMotion:this.bxA11yService.isReducedMotion()})));this.listSelectionMotion=n,t(()=>{n.destroy(),this.listSelectionMotion===n&&(this.listSelectionMotion=void 0)})}),$e(()=>{let t=this.bxA11yService.isReducedMotion();this.listSelectionMotion?.update({reducedMotion:t})}),this.destroyRef.onDestroy(()=>++this.resolverToken)}reset(){let t=this.isOpen();this.isOpen.set(!1),super.reset(),this.clearPendingEdit(),this.fieldFocused.set(!1),t&&this.openChange.emit(!1)}open(){if(this.isOpen()||this.effectiveDisabled()||this.isReadonly())return;let t=(this.textEdited()?this.parseTypedTime(this.typedText()).value:null)??this.internalValue();this.draftTime.set(this.normalizeTime(t??WZ(this.clock.now(),this.settings().timeZone,this.settings().precision))),this.alignEmptyDraft(),this.selectedTimeZone.set(this.timeZone()??this.settings().timeZone),!this.textEdited()&&!this.typedError()&&this.selectionEdited.set(!1),this.originElement.set(this.nativeElement.querySelector(`.bx-time-field`)),this.textEdited()||this.typedText.set(this.formatValue(this.internalValue())),this.isOpen.set(!0),this.openChange.emit(!0),this.emitSlotRequest(`initial`),this.isDrawer()||this.focus({preventScroll:!0})}close(){this.isOpen()&&(this.isOpen.set(!1),this.markAsTouched(),this.openChange.emit(!1))}apply(){if(this.effectiveDisabled()||this.isReadonly()||!this.canApply())return;let t=this.composedValue();this.updateValue(t),this.valueCommit.emit(t),this.close()}cancel(){let t=this.internalValue();t&&this.draftTime.set(t),this.close()}clear(){this.effectiveDisabled()||this.isReadonly()||(this.selectionEdited.set(!1),this.textEdited.set(!1),this.typedError.set(null),this.typedText.set(``),this.updateValue(null),this.valueCommit.emit(null),this.close(),this.focus({preventScroll:!0}))}selectNow(){if(this.effectiveDisabled()||this.isReadonly())return;let t=this.normalizeTime(WZ(this.clock.now(),this.settings().timeZone,this.settings().precision));this.draftTime.set(t),this.maybeCommitImmediately()}reloadSlots(){this.effectiveDisabled()||this.isReadonly()||this.availabilityLoading()||(this.isOpen()?this.emitSlotRequest(`initial`):this.open())}retrySlots(){this.emitSlotRequest(`retry`)}clearPendingEdit(){super.clearPendingEdit(),this.textEdited.set(!1),this.typedError.set(null),this.selectionEdited.set(!1),this.typedText.set(this.formatValue(this.internalValue()))}onFieldFocus(){this.fieldFocused.set(!0)}onFieldBlur(t){t.relatedTarget instanceof Node&&this.nativeElement.contains(t.relatedTarget)||(this.fieldFocused.set(!1),this.markAsTouched())}onTypedInput(t){this.onTypedValue(t.target.value)}onTypedValue(t){this.typedText.set(t===null?``:String(t)),this.textEdited.set(!0),this.typedError.set(null);let e=this.parseTypedTime(this.typedText()).value;e&&this.draftTime.set(e)}onTypedBlur(t){let e=t?.relatedTarget instanceof HTMLElement&&!!t.relatedTarget.closest(`.bx-time-panel-content`);this.textEdited()&&this.commitTypedTime(!e),this.markAsTouched()}onTypedKeydown(t){t.key===`Enter`?(t.preventDefault(),this.commitTypedTime()):t.key===`ArrowDown`?(t.preventDefault(),this.isOpen()||this.onTriggerClick(t),er(()=>{if(!this.isOpen())return;let e=this.nativeElement.ownerDocument.getElementById(this.controlId()+`-panel`);((this.isListMode()&&this.listFocusValue()?this.nativeElement.ownerDocument.getElementById(`${this.controlId()}-${this.listFocusValue()}`):null)??e?.querySelector(`[role="listbox"], .bx-time-feedback button`))?.focus({preventScroll:!0})},{injector:this.injector})):t.key===`Escape`&&this.isOpen()&&(t.preventDefault(),this.cancel())}onEditableClick(t){this.isOpen()||this.onTriggerClick(t)}onTriggerClick(t){this.isReadonly()||(this.isOpen()?this.close():this.open())}onWheelChange(t,e){if(!e)return;let n=this.draftTime(),r=this.wheelCandidate(n,t,e);r&&this.setTime(r)}onListKeydown(t,e){let n=this.listOptions().filter(u=>!u.disabled),r=n.findIndex(u=>u.value===(this.listFocusValue()??this.draftTime()));if(!n.length)return;if(t.key===`Enter`||t.key===` `){t.preventDefault(),this.onListSelect(n[Math.max(0,r)].value);return}let o=t.key===`ArrowDown`?1:t.key===`ArrowUp`?-1:0,a=t.key===`Home`?0:t.key===`End`?n.length-1:Math.max(0,Math.min(n.length-1,r+o));!o&&t.key!==`Home`&&t.key!==`End`||(t.preventDefault(),t.currentTarget.focus(),this.listFocusValue.set(n[a].value),e.scrollToItem(n[a].value),er(()=>{if(!this.isOpen())return;let u=this.nativeElement.ownerDocument.getElementById(`${this.controlId()}-${n[a].value}`);u&&this.listViewport()?.nativeElement.contains(u)&&u.focus({preventScroll:!0})},{injector:this.injector}))}onListSelect(t){this.isTimeAllowed(t)&&(this.listFocusValue.set(t),this.setTime(t))}onTimeZoneSelect(t){t&&(this.selectedTimeZone.set(t),this.timeZoneChange.emit(t))}showSeconds(){return this.settings().precision===`second`||this.settings().precision===`millisecond`}showMilliseconds(){return this.settings().precision===`millisecond`}showPeriod(){return this.settings().hourCycle===12}resolvedEmptyLabel(){return CQ(this.emptyLabel(),this.i18n)}wheelValue(t){let e=ir(this.draftTime())??{hour:0,minute:0,second:0,millisecond:0};return t===`hour`?String(this.settings().hourCycle===12?e.hour%12===0?12:e.hour%12:e.hour):t===`minute`?en(e.minute):t===`second`?en(e.second):t===`millisecond`?String(e.millisecond).padStart(3,`0`):Qn$1(this.settings().locale)[e.hour>=12?1:0]??``}isListMode(){return this.timePresentation()===`list`}listActiveId(){let t=this.listFocusValue()??this.draftTime();return this.listOptions().some(e=>e.value===t)?`${this.controlId()}-${t}`:null}timeZoneLabelFor(t){let e=$Z(t,this.settings().locale);return e.offsetMinutes===null?t:`${t} \xB7 ${oa(e.offsetMinutes)}`}parseTypedTime(t){let e=this.options()?.find(o=>CQ(o.label,this.i18n).toLocaleLowerCase(this.settings().locale)===t.trim().toLocaleLowerCase(this.settings().locale));if(e)return{value:e.value,error:null,message:null};let n=this.parseFormats().length?this.parseFormats():[this.settings().timeFormat],r={value:null,error:`format`,message:null};for(let o of n){let a=VQ(t.trim(),o,this.settings().locale,this.settings().precision);if(a.value)return a;(a.error===`range`||r.error!==`range`)&&(r=a)}return r}commitTypedTime(t=!0){if(this.effectiveDisabled()||this.isReadonly())return;if(!this.typedText().trim()){this.clear();return}let e=this.parseTypedTime(this.typedText()),n=e.value;if(!n){this.typedError.set(e.error),t&&this.close();return}this.draftTime.set(n),this.maybeCommitImmediately(),t&&!this.canApply()&&this.close()}normalizeTime(t){return QQ(t,this.settings().precision,this.settings().minuteStep,this.settings().secondStep,this.settings().millisecondStep)}formatValue(t){if(!t)return``;let e=this.options()?.find(o=>this.timeNumber(o.value)===this.timeNumber(t));return`${CQ(e?.label,this.i18n)||BZ(t,this.settings().timeFormat,this.settings().locale)}${this.showTimeZone()&&this.showTimeZoneLabel()?` \xB7 ${this.selectedTimeZone()??this.settings().timeZone}`:``}`}buildColumnsFor(t){let e=KQ(t,this.settings().precision,this.settings().hourCycle,this.settings().locale,this.settings().minuteStep,this.settings().secondStep,this.settings().millisecondStep),n=(r$6,o)=>o.map(a=>s(r({},a),{disabled:!this.wheelCandidate(t,r$6,a.value)}));return{hours:n(`hour`,e.hours),minutes:n(`minute`,e.minutes),seconds:n(`second`,e.seconds),milliseconds:n(`millisecond`,e.milliseconds),periods:n(`period`,e.periods)}}wheelCandidate(t,e,n){let r$7=ir(t);if(!r$7)return null;let o=e===`hour`?this.settings().hourCycle===12?Number(n)%12+(r$7.hour>=12?12:0):Number(n):e===`period`?r$7.hour%12+Math.max(0,Qn$1(this.settings().locale).indexOf(n))*12:r$7.hour,a=s(r({},r$7),{hour:o,minute:e===`minute`?Number(n):r$7.minute,second:e===`second`?Number(n):r$7.second,millisecond:e===`millisecond`?Number(n):r$7.millisecond}),u=Yr(a,this.settings().precision);if(this.isTimeAllowed(u))return u;let g=this.availabilityTimes()??this.options()?.filter(O=>!O.disabled).map(O=>O.value);if(g)return g.filter(D=>{let V=ir(D);return!V||!this.isTimeAllowed(D)?!1:e===`period`?V.hour>=12==a.hour>=12:V.hour!==a.hour?!1:e===`hour`?!0:V.minute!==a.minute?!1:e===`minute`||V.second===a.second&&(e===`second`||V.millisecond===a.millisecond)}).sort((D,V)=>Math.abs(this.timeNumber(D)-this.timeNumber(u))-Math.abs(this.timeNumber(V)-this.timeNumber(u)))[0]??null;if(e!==`hour`&&e!==`period`)return null;let S=e===`hour`?[o]:Array.from({length:12},(O,D)=>D+(o>=12?12:0)),P=Array.from({length:Math.ceil(60/Math.max(1,this.settings().minuteStep))},(O,D)=>D*Math.max(1,this.settings().minuteStep));S.sort((O,D)=>Math.abs(O-o)-Math.abs(D-o)),P.sort((O,D)=>Math.abs(O-a.minute)-Math.abs(D-a.minute));for(let O of S)for(let D of P){let V=Yr(s(r({},a),{hour:O,minute:D}),this.settings().precision);if(this.isTimeAllowed(V))return V}return null}setTime(t){this.draftTime.set(t),this.maybeCommitImmediately()}maybeCommitImmediately(){if(this.effectiveDisabled()||this.isReadonly()||(this.selectionEdited.set(!0),this.textEdited.set(!this.canApply()),this.typedError.set(null),this.typedText.set(this.formatValue(this.draftTime())),!this.canApply()))return;let t=this.composedValue();JSON.stringify(t)!==JSON.stringify(this.internalValue())&&(this.updateValue(t),this.valueCommit.emit(t)),(this.closeOnSelect()??this.isListMode())&&this.close()}isDraftValid(){return this.isTimeAllowed(this.draftTime())}validationError(){let t=this.timeRestrictionReason(this.draftTime());return t?this.validationMessage(t):``}validationMessage(t){let e=this.invalidSelectionLabel();if(e!==void 0)return CQ(e,this.i18n);return Ot({kind:t,context:{format:this.parseFormats().length?this.parseFormats().join(` or `):this.settings().timeFormat,hourCycle:this.settings().hourCycle,minFormatted:this.min()?BZ(this.min()??`00:00`,this.settings().timeFormat,this.settings().locale):``,maxFormatted:this.max()?BZ(this.max()??`23:59`,this.settings().timeFormat,this.settings().locale):``,minuteStep:this.settings().minuteStep,secondStep:this.settings().secondStep,millisecondStep:this.settings().millisecondStep}},this.errorMessages(),r(r({},ra),this.formSettingsService.settings().errorMessages),this.i18n)}composedValue(){return this.isDraftValid()?this.draftTime():null}isTimeAllowed(t){return this.timeRestrictionReason(t)===null}timeNumber(t){let e=ir(t);return e?((e.hour*60+e.minute)*60+e.second)*1e3+e.millisecond:NaN}timeRestrictionReason(t){if(!ir(t))return`timeRange`;if(this.availabilityLoading())return`timeLoading`;if(this.availabilityError()||(this.resolver()||this.availability())&&!this.availabilityTimes())return`timeAvailability`;let e=this.timeNumber(t),n=this.availabilityTimes(),r=this.options(),o=this.min(),a=this.max();return o&&e<this.timeNumber(o)?`timeMin`:a&&e>this.timeNumber(a)?`timeMax`:n&&!n.some(u=>this.timeNumber(u)===e)||r&&!r.some(u=>!u.disabled&&this.timeNumber(u.value)===e)||this.disabledTimes().some(u=>this.timeNumber(u)===e)||this.disabledIntervals().some(u=>{let g=this.timeNumber(u.start),S=this.timeNumber(u.end);return g>S?e>=g||e<=S:e>=g&&e<=S})||this.timeFilter()?.(t)?`timeDisabled`:XQ(t,this.settings().minuteStep,this.settings().secondStep,this.settings().millisecondStep)?null:`timeStep`}alignEmptyDraft(){if(this.internalValue()||this.textEdited()||this.selectionEdited()||this.isTimeAllowed(this.draftTime()))return;let t=(this.availabilityTimes()??this.listOptions().filter(r=>!r.disabled).map(r=>r.value)).filter(r=>this.isTimeAllowed(r)),e=this.timeNumber(this.draftTime()),n=[...t].sort((r,o)=>Math.abs(this.timeNumber(r)-e)-Math.abs(this.timeNumber(o)-e))[0];n&&this.draftTime.set(n)}emitSlotRequest(t){if(!this.isOpen()||this.availabilityLoading())return;let e={date:null,timeZone:this.settings().timeZone,locale:this.settings().locale,revision:++this.requestRevision,source:t};t===`retry`?this.slotRetry.emit(e):this.slotRequest.emit(e),this.runResolver(e)}async runResolver(t){let e=this.resolver();if(!e||this.availability())return;let n=++this.resolverToken;this.availabilityState.set({times:this.availabilityState()?.times,loading:!0});try{let r=await e(t);if(n!==this.resolverToken)return;this.availabilityState.set({times:r?.times??[],loading:!1,retryable:!0}),this.alignEmptyDraft()}catch{if(n!==this.resolverToken)return;this.availabilityState.set({times:this.availabilityState()?.times,loading:!1,error:this.loadErrorMessage(),retryable:!0})}}static ɵfac=function(e){return new(e||i)};static ɵcmp=Fr({type:i,selectors:[[`bx-time-picker`]],viewQuery:function(e,n){e&1&&Wy(n.listViewport,au,5)(n.listCollection,su,5)(n.panelTemplate,lu,5),e&2&&db(3)},inputs:{options:[1,`options`],interval:[1,`interval`],parseFormats:[1,`parseFormats`],pickerIcon:[1,`pickerIcon`],openPickerLabel:[1,`openPickerLabel`],timePresentation:[1,`timePresentation`],presentation:[1,`presentation`],locale:[1,`locale`],timeZone:[1,`timeZone`],hourCycle:[1,`hourCycle`],precision:[1,`precision`],minuteStep:[1,`minuteStep`],secondStep:[1,`secondStep`],millisecondStep:[1,`millisecondStep`],timeFormat:[1,`timeFormat`],loopColumns:[1,`loopColumns`],min:[1,`min`],max:[1,`max`],disabledTimes:[1,`disabledTimes`],disabledIntervals:[1,`disabledIntervals`],timeFilter:[1,`timeFilter`],commitPolicy:[1,`commitPolicy`],closeOnSelect:[1,`closeOnSelect`],clearable:[1,`clearable`],showTimeZone:[1,`showTimeZone`],showTimeZoneLabel:[1,`showTimeZoneLabel`],availability:[1,`availability`],resolver:[1,`resolver`],loadingLabel:[1,`loadingLabel`],retryLabel:[1,`retryLabel`],applyLabel:[1,`applyLabel`],cancelLabel:[1,`cancelLabel`],clearLabel:[1,`clearLabel`],nowLabel:[1,`nowLabel`],clearTooltip:[1,`clearTooltip`],hourLabel:[1,`hourLabel`],minuteLabel:[1,`minuteLabel`],secondLabel:[1,`secondLabel`],millisecondLabel:[1,`millisecondLabel`],periodLabel:[1,`periodLabel`],timeZoneLabel:[1,`timeZoneLabel`],loadErrorMessage:[1,`loadErrorMessage`],invalidSelectionLabel:[1,`invalidSelectionLabel`],emptyLabel:[1,`emptyLabel`],errorWrap:[1,`errorWrap`]},outputs:{valueCommit:`valueCommit`,openChange:`openChange`,timeZoneChange:`timeZoneChange`,slotRequest:`slotRequest`,slotRetry:`slotRetry`},features:[xt],ngContentSelectors:cu,decls:14,vars:53,consts:[[`panelTemplate`,``],[`listViewport`,``],[`collection`,``],[3,`control`,`inline`,`tooltip`,`showLoadingIndicator`,`hint`,`hintEnd`,`error`,`subscriptSizing`,`forId`],[1,`bx-time-field`,3,`focusin`,`focusout`],[`bxSurface`,``,1,`bx-time-trigger`,`is-editable`],[1,`bx-floating-label`],[`role`,`combobox`,`aria-autocomplete`,`none`,`type`,`text`,`autocomplete`,`off`,`aria-haspopup`,`dialog`,1,`bx-time-input`,3,`click`,`input`,`blur`,`keydown`,`id`,`value`,`disabled`,`readOnly`],[`type`,`button`,1,`bx-time-icon-button`,3,`click`,`disabled`],[`aria-hidden`,`true`,3,`value`],[`bx-button`,``,`type`,`button`,`variant`,`text`,1,`bx-time-clear`,3,`surfaceEffects`,`disabled`,`bxTooltip`],[`panelClass`,`bx-time-panel`,3,`dismiss`,`panelId`,`panelWidth`,`open`,`autoFocus`,`presentation`,`origin`,`content`,`ariaLabel`],[`aria-hidden`,`true`,1,`bx-field-required`],[3,`size`,`decorative`],[`size`,`16`,3,`name`,`decorative`],[`bx-button`,``,`type`,`button`,`variant`,`text`,1,`bx-time-clear`,3,`click`,`surfaceEffects`,`disabled`,`bxTooltip`],[`name`,`x`,`size`,`16`,3,`decorative`],[`bxSurface`,``,`data-bx-surface`,`glass`,1,`bx-time-panel-content`,3,`bxSurfaceInteractive`],[1,`bx-time-panel-body`],[1,`bx-time-editor`],[1,`bx-time-editor-content`],[1,`bx-time-wheels`],[`role`,`listbox`,`tabindex`,`0`,1,`bx-time-list`],[1,`bx-time-feedback`],[1,`bx-picker-shortcuts`],[`appearance`,`outline`,3,`label`,`options`,`value`,`isSearchable`],[`type`,`hour`,3,`valueChange`,`options`,`value`,`label`,`loop`],[`aria-hidden`,`true`,1,`bx-time-wheel-separator`],[`type`,`minute`,3,`valueChange`,`options`,`value`,`label`,`loop`],[`type`,`period`,1,`bx-time-period-wheel`,3,`options`,`value`,`label`,`loop`],[`type`,`second`,3,`valueChange`,`options`,`value`,`label`,`loop`],[`type`,`millisecond`,3,`valueChange`,`options`,`value`,`label`,`loop`],[`type`,`period`,1,`bx-time-period-wheel`,3,`valueChange`,`options`,`value`,`label`,`loop`],[`role`,`listbox`,`tabindex`,`0`,1,`bx-time-list`,3,`keydown`],[`itemRole`,`presentation`,3,`items`,`trackBy`,`config`,`scrollContainer`],[3,`bxVirtualItem`],[`type`,`button`,`role`,`option`,`tabindex`,`-1`,1,`bx-time-list-option`,3,`click`,`id`,`disabled`],[`name`,`check`,`size`,`16`,3,`decorative`],[3,`size`,`label`],[`role`,`status`],[`role`,`alert`,1,`bx-time-feedback-message`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`accent`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`accent`,3,`click`],[`name`,`rotate-cw`,`size`,`16`,3,`decorative`],[`type`,`button`,1,`bx-picker-shortcut`,3,`click`,`disabled`],[`appearance`,`outline`,3,`valueChange`,`label`,`options`,`value`,`isSearchable`]],template:function(e,n){if(e&1&&($y(du),bo$1(0,`bx-form-field`,3)(1,`div`,4),br(`focusin`,function(){return n.onFieldFocus()})(`focusout`,function(o){return n.onFieldBlur(o)}),bo$1(2,`div`,5),tb(3,mu,3,3,`label`,6),bo$1(4,`input`,7),br(`click`,function(o){return n.onEditableClick(o)})(`input`,function(o){return n.onTypedInput(o)})(`blur`,function(o){return n.onTypedBlur(o)})(`keydown`,function(o){return n.onTypedKeydown(o)}),Go$1(),bo$1(5,`button`,8),br(`click`,function(o){return n.onTriggerClick(o)}),bo$1(6,`bx-visual-transition`,9),ed$1(7,fu,2,1,`ng-template`),Go$1()()(),tb(8,xu,2,5,`button`,10),Go$1(),bo$1(9,`bx-picker-surface`,11),br(`dismiss`,function(){return n.cancel()}),Go$1(),ed$1(10,Eu,9,10,`ng-template`,null,0,TA),Gy(12,0,uu),Gy(13,1,pu),Go$1()),e&2){let r=jT(11);$o$1(`control`,n.fieldControl)(`inline`,!0)(`tooltip`,n.tooltip())(`showLoadingIndicator`,!1)(`hint`,n.hint())(`hintEnd`,n.hintEnd())(`error`,n.errorText()||n.error())(`subscriptSizing`,n.resolvedSubscriptSizing())(`forId`,n.controlId()),qs$1(),tr(`has-clear`,n.showClear()),qs$1(),tr(`has-label`,!!n.label())(`is-open`,n.isOpen())(`is-floating`,n.isFloating())(`is-invalid`,n.showError()||!!n.errorText())(`is-outline`,n.resolvedAppearance()===`outline`)(`is-readonly`,n.isReadonly())(`is-disabled`,n.effectiveDisabled())(`is-keyboard-focused`,n.keyboardFocused()),qs$1(),ob(n.label()?3:-1),qs$1(),$o$1(`id`,n.controlId())(`value`,n.typedText())(`disabled`,n.effectiveDisabled())(`readOnly`,n.isReadonly()),vo$1(`aria-controls`,n.isOpen()?n.controlId()+`-panel`:null)(`placeholder`,n.isFloating()||!n.label()?n.resolvedTimePlaceholder():``)(`aria-label`,n.ariaLabel()||n.resolvedLabel()||n.resolvedTimePlaceholder())(`aria-describedby`,n.describedBy())(`aria-expanded`,n.isOpen())(`aria-invalid`,n.showError()||!!n.errorText())(`aria-required`,n.effectiveRequired())(`aria-busy`,n.availabilityLoading())(`data-testid`,n.dataTestId()),qs$1(),$o$1(`disabled`,n.effectiveDisabled()||n.isReadonly()||n.availabilityLoading()),vo$1(`aria-label`,n.resolvedOpenPickerLabel()),qs$1(),$o$1(`value`,n.availabilityLoading()),qs$1(2),ob(n.showClear()?8:-1),qs$1(),$o$1(`panelId`,n.controlId()+`-panel`)(`panelWidth`,n.showMilliseconds()?`min(94vw, 30rem)`:`min(94vw, 22rem)`)(`open`,n.isOpen())(`autoFocus`,!1)(`presentation`,n.surfacePresentation())(`origin`,n.panelOrigin())(`content`,r)(`ariaLabel`,n.resolvedLabel()||n.resolvedTimePlaceholder())}},dependencies:[qu$1,UC,xe,ee,YC,Zi$1,Et$1,Vt,jn,Kn,Pt$1,ll$1,jn$1],styles:[`
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
}`]})};var Zn=class{constructor(t,e){this.element=t;this.contents=e}element;contents;styles=/* @__PURE__ */ new Map;motion;completion;originalInert=null;originalHidden=null;captured=!1;start(t,e,n){this.restore();let r=this.element.ownerDocument.defaultView?.getComputedStyle(this.element),o=this.element.parentElement,a=o&&this.element.ownerDocument.defaultView?.getComputedStyle(o),g=(o?Array.from(o.children).filter(me=>me!==this.element&&me.getClientRects().length>0):[]).length&&parseFloat(a?.rowGap??`0`)||0,S=this.element.offsetHeight,P=this.element.clientWidth*(t===`right`?.3:-.3),O=parseFloat(r?.paddingBlockStart??`0`)||0,D=parseFloat(r?.paddingBlockEnd??`0`)||0,V=parseFloat(r?.borderBlockStartWidth??`0`)||0,J=parseFloat(r?.borderBlockEndWidth??`0`)||0,U=parseFloat(r?.marginBlockStart??`0`)||0,z=parseFloat(r?.marginBlockEnd??`0`)||0,te=parseFloat(r?.opacity??`1`);this.completion=n,this.originalInert=this.element.getAttribute(`inert`),this.originalHidden=this.element.getAttribute(`aria-hidden`),this.captured=!0,this.element.setAttribute(`inert`,``),this.element.setAttribute(`aria-hidden`,`true`),this.style(this.element,`overflow`,`clip`),this.style(this.element,`box-sizing`,`border-box`),this.style(this.element,`min-block-size`,`0`);for(let me of this.contents)this.style(me,`block-size`,`${me.offsetHeight}px`);if(e){this.finish();return}this.motion=Zn$1([0],([me],[tn])=>{let Ji=Math.max(0,Math.min(1,me/1e3)),er=Math.min(1,Ji/.55),tr=Math.max(0,(Ji-.15)/.85),it=1-tr;this.style(this.element,`opacity`,String(te*(1-er))),this.style(this.element,`block-size`,`${S*it}px`),this.style(this.element,`padding-block-start`,`${O*it}px`),this.style(this.element,`padding-block-end`,`${D*it}px`),this.style(this.element,`border-block-start-width`,`${V*it}px`),this.style(this.element,`border-block-end-width`,`${J*it}px`),this.style(this.element,`margin-block-start`,`${U*it}px`),this.style(this.element,`margin-block-end`,`${z*it-g*tr}px`);for(let pa of this.contents)this.style(pa,`translate`,`${P*er}px 0`);Math.abs(1e3-me)<1&&Math.abs(tn)<10&&this.finish()},vr.snappy),this.motion.retarget([1e3])}finish(){let t=this.completion;t&&(this.completion=void 0,this.motion?.destroy(),this.motion=void 0,this.style(this.element,`display`,`none`),t())}restore(){this.completion=void 0,this.motion?.destroy(),this.motion=void 0;for(let[t,e]of this.styles)for(let[n,r]of e)r?t.style.setProperty(n,r):t.style.removeProperty(n);this.styles.clear(),this.captured&&(this.originalInert===null?this.element.removeAttribute(`inert`):this.element.setAttribute(`inert`,this.originalInert),this.originalHidden===null?this.element.removeAttribute(`aria-hidden`):this.element.setAttribute(`aria-hidden`,this.originalHidden)),this.captured=!1}style(t,e,n){let r=this.styles.get(t);r||(r=/* @__PURE__ */ new Map,this.styles.set(t,r)),r.has(e)||r.set(e,t.style.getPropertyValue(e)),Yn$1(t,{[e]:n})}};var la={primary:`var(--bx-text-brand)`,accent:`var(--bx-text-accent)`,success:`var(--bx-text-success-readable, var(--bx-text-success))`,danger:`var(--bx-text-danger-readable, var(--bx-text-danger))`,info:`var(--bx-text-info-readable, var(--bx-text-info))`,warn:`var(--bx-text-warn-readable, var(--bx-text-warn))`,grayscale:`var(--bx-text-primary)`};var Xn=80;var Un=400;var Yn={staggerMs:50,maxStaggerMs:150,hiddenScale:.72,singleHiddenScale:.97,pop:.16,singlePop:.015,strain:.025,singleStrain:.008,velocityWeight:.1,travel:.12};var We={armThreshold:.65,commitThreshold:.78,destructiveCommitThreshold:.94,resistance:1.25,destructiveResistance:8,destructivePlateau:.15,resistanceEnd:.4,destructiveResistanceEnd:.9};var Ru=[`probe`];var Lu=[`pagerProbe`];var Au=[`captionProbe`];var Fu=[`fullProbe`];var Vu=[`gapProbe`];var zu=[`closeProbe`];var da=(i,t)=>t.id;function Bu(i,t){if(i&1){let e=lb();bo$1(0,`span`,23),br(`pointerdown`,function(r){il$1(e);let o=$s$1().$implicit,a=$s$1();return al$1(!a.canScroll(o,-1)&&r.preventDefault())}),bo$1(1,`button`,24),br(`click`,function(r){il$1(e);let o=$s$1().$implicit,a=$s$1();return r.stopPropagation(),al$1(a.scrollActions(o,-1))}),td$1(2,`bx-icon`,25),Go$1()()}if(i&2){let e=$s$1().$implicit,n=$s$1();$o$1(`inert`,n.fullActionId()!==null),qs$1(),$o$1(`disabled`,!n.canScroll(e,-1)),vo$1(`tabindex`,n.interactive()?null:-1)(`aria-label`,n.previousText())}}function Hu(i,t){if(i&1&&(bo$1(0,`span`,30,9),DA(2,`bxTruncatedText`),aA(3),Go$1()),i&2){let e=jT(1),n=$s$1().$implicit,r=$s$1(2);$o$1(`bxTooltip`,IA(2,2,r.actionText(n),e.truncated())),qs$1(3),sk(r.actionText(n))}}function Wu(i,t){if(i&1){let e=lb();bo$1(0,`div`,26)(1,`div`,27)(2,`button`,28),br(`click`,function(r){let o=il$1(e).$implicit,a=$s$1(2);return al$1(a.invoke(o,`swipe`,r))}),td$1(3,`bx-icon`,29),tb(4,Hu,4,5,`span`,30),Go$1(),bo$1(5,`label`,31,8),DA(7,`bxTruncatedText`),aA(8),Go$1()()()}if(i&2){let e=t.$implicit,n=jT(6),r=$s$1().$implicit,o=$s$1();tr(`is-edge`,o.edge(r,e))(`is-unavailable`,o.disabled()||!!e.disabled||o.busy(e)),$o$1(`bxTooltipDwell`,o.tooltipDwell())(`bxTooltip`,o.compact()?o.actionText(e):``)(`inert`,o.fullActionId()!==null&&o.fullActionId()!==e.id),qs$1(2),$o$1(`id`,o.actionId(r,e))(`color`,e.color??(e.role===`destructive`?`danger`:`primary`))(`disabled`,o.disabled()||!!e.disabled)(`loading`,o.busy(e)),vo$1(`tabindex`,o.interactive()?null:-1)(`role`,o.origin().getAttribute(`role`)===`menuitem`?`menuitem`:null)(`aria-label`,o.failed().includes(e.id)?o.actionText(e):o.text(e.ariaLabel??e.label)),qs$1(),$o$1(`name`,o.failed().includes(e.id)?e.retryIcon??`rotate-cw`:o.completedAction()?.id===e.id?`check`:e.icon)(`size`,o.iconSize()),qs$1(),ob(o.fullActionId()===e.id&&o.failed().includes(e.id)?4:-1),qs$1(),$o$1(`bxTruncate`,!o.compact())(`hidden`,o.compact())(`bxTooltip`,IA(7,22,o.actionText(e),n.truncated()))(`for`,o.actionId(r,e)),qs$1(3),sk(o.actionText(e))}}function qu(i,t){if(i&1){let e=lb();bo$1(0,`span`,23),br(`pointerdown`,function(r){il$1(e);let o=$s$1().$implicit,a=$s$1();return al$1(!a.canScroll(o,1)&&r.preventDefault())}),bo$1(1,`button`,24),br(`click`,function(r){il$1(e);let o=$s$1().$implicit,a=$s$1();return r.stopPropagation(),al$1(a.scrollActions(o,1))}),td$1(2,`bx-icon`,32),Go$1()()}if(i&2){let e=$s$1().$implicit,n=$s$1();$o$1(`inert`,n.fullActionId()!==null),qs$1(),$o$1(`disabled`,!n.canScroll(e,1)),vo$1(`tabindex`,n.interactive()?null:-1)(`aria-label`,n.nextText())}}function ju(i,t){if(i&1){let e=lb();bo$1(0,`div`,19),tb(1,Bu,3,4,`span`,20),bo$1(2,`div`,21,7),br(`scroll`,function(){il$1(e);let r=$s$1();return al$1(r.updateScroll())}),nb(4,Wu,9,25,`div`,22,da),Go$1(),tb(6,qu,3,4,`span`,20),Go$1()}if(i&2){let e=t.$implicit,n=$s$1();ka$1(`visibility`,n.side()===e?`visible`:`hidden`)(`--%NS%bx-action-reveal`,n.reveal()+`px`)(`inline-size`,n.laneWidth(e),`px`),tr(`has-overflow`,n.overflows(e))(`is-stretching`,n.side()===e&&n.stretch()>0)(`can-scroll-before`,n.canScroll(e,-1))(`can-scroll-after`,n.canScroll(e,1))(`bx-swipe-left`,e===`left`)(`bx-swipe-right`,e===`right`),$o$1(`inert`,n.side()!==e),vo$1(`aria-hidden`,n.side()!==e||!n.interactive()?!0:null),qs$1(),ob(n.overflows(e)?1:-1),qs$1(),vo$1(`data-side`,e),qs$1(2),sb(n.actions(e)),qs$1(2),ob(n.overflows(e)?6:-1)}}function $u(i,t){if(i&1){let e=lb();bo$1(0,`bx-menu-item`,35),br(`action`,function(r){let o=il$1(e).$implicit,a=$s$1(2);return al$1(a.invoke(o,`context`,r))}),Go$1()}if(i&2){let e=t.$implicit,n=$s$1(2);ka$1(`--%NS%bx-menu-item-color`,n.foreground(e)),$o$1(`label`,n.actionText(e))(`ariaLabel`,n.failed().includes(e.id)?n.actionText(e):e.ariaLabel)(`wrapLabel`,!0)(`icon`,n.failed().includes(e.id)?e.retryIcon??`rotate-cw`:n.completedAction()?.id===e.id?`check`:e.icon)(`danger`,e.role===`destructive`)(`disabled`,n.disabled()||!!e.disabled)(`loading`,n.busy(e))}}function Gu(i,t){if(i&1&&(bo$1(0,`bx-menu`,33),nb(1,$u,1,9,`bx-menu-item`,34,da),Go$1()),i&2){let e=$s$1();qs$1(),sb(e.allActions())}}var Qn=class i{nativeElement=b(ke).nativeElement;i18n=b(SQ,{optional:!0});bxA11yService=b(Br);measured=z({left:0,right:0,full:0,column:0});contextMenu=kz.required($i$1);probe=kz.required(`probe`);pagerProbe=kz.required(`pagerProbe`);captionProbe=kz.required(`captionProbe`);fullProbe=kz.required(`fullProbe`);gapProbe=kz.required(`gapProbe`);closeProbe=kz.required(`closeProbe`);instanceId=MZ();iconSize=z(20);scrollRevision=z(0);compact=z(!1);capacity=z(1);allActions=U(()=>[...this.left(),...this.right()]);previousText=U(()=>this.text(this.previousLabel()));nextText=U(()=>this.text(this.nextLabel()));groups=U(()=>[`left`,`right`]);left=re([]);right=re([]);side=re(null);reveal=re(0);stretch=re(0);armed=re(!1);armThreshold=re(.65);commitThreshold=re(.78);readyLabel=re(`Release to activate`);interactive=re(!1);pending=re([]);failed=re([]);fullActionId=re(null);retryLabel=re(`Retry`);loadingLabel=re(`Working`);completedAction=re(null);completedLabel=re(`Done`);disabled=re(!1);previousLabel=re(`Previous actions`);nextLabel=re(`Next actions`);tooltipDwell=re(Un);origin=re.required();selected=Ok();layoutChange=Ok();pagingMotion;pagingLane;pagingTarget=0;measuredColumn=0;stretchMotion;stretchIntent=0;entranceMotions=[];entranceTimers=[];entranceStarted=/* @__PURE__ */ new Set;entranceSettled=/* @__PURE__ */ new Set;entranceSide=null;entranceSignature=``;entranceNodes=[];constructor(){Bk(()=>{let t=this.side(),e=this.bxA11yService.isReducedMotion(),n=JSON.stringify(t?this.actions(t).map(r=>r.id):[]);t?((this.entranceSide!==t||this.entranceSignature!==n)&&this.startEntrance(t,n),this.reveal(),this.advanceEntrance(t,e)):this.resetEntrance()}),Bk(()=>{let t=this.side(),e=this.stretch();this.failed(),this.fullActionId();let n=this.bxA11yService.isReducedMotion(),r=t?this.measured().full-this.measured()[t]:0,o=r>0?Math.max(0,Math.min(1,e/r)):0,a=Math.max(0,Math.min(1,(o-this.armThreshold())/Math.max(.01,this.commitThreshold()-this.armThreshold())));if(this.stretchMotion??=Zn$1([0],([u])=>this.paintStretchIntent(u),vr.snappy),this.stretchMotion.retarget([a],n),this.paintStretchIntent(this.stretchIntent),t&&e>0){let u=this.nativeElement.querySelector(`[data-side="${t}"]`);this.stopPaging(),u&&(u.scrollLeft=t===`left`?u.scrollWidth-u.clientWidth:0)}}),Bk(()=>{let t=this.bxA11yService.isReducedMotion();this.side()===null?this.stopPaging():t&&this.pagingMotion?.retarget([this.pagingTarget],!0)}),Bk(t=>{let e=new AbortController,n=r=>{r.target instanceof Node&&this.pagingLane?.contains(r.target)&&this.stopPaging()};for(let r of[`pointerdown`,`wheel`,`focusin`])this.nativeElement.addEventListener(r,n,{signal:e.signal,capture:!0,passive:!0});t(()=>e.abort())}),b(he).onDestroy(()=>{this.stopPaging(),this.resetEntrance(),this.stretchMotion?.destroy()}),Bk(t=>{this.left(),this.right(),this.previousText(),this.nextText(),this.i18n?.version?.();let e=()=>this.measure(),n=new ResizeObserver(e);n.observe(this.nativeElement),n.observe(this.probe().nativeElement),n.observe(this.captionProbe().nativeElement),n.observe(this.gapProbe().nativeElement),e(),t(()=>n.disconnect())})}openContext(t){this.contextMenu().openFrom(this.origin(),t)}closeContext(){this.contextMenu().close()}isEntranceComplete(t){if(this.entranceSide!==t||this.reveal()<this.measured()[t]-.5)return!1;let n=this.nativeElement.querySelector(`[data-side="${t}"]`)?.getBoundingClientRect();if(!n)return!1;let r=this.entranceNodes.filter(o=>{let a=o.parentElement?.getBoundingClientRect();return a&&Math.min(a.right,n.right)-Math.max(a.left,n.left)>1});return r.length>0&&r.every(o=>this.entranceSettled.has(o))}canFullSwipe(t){let e=this.nativeElement.querySelector(`[data-side="${t}"]`),n=e?.querySelectorAll(`.bx-swipe-action`),r=t===`left`?n?.[n.length-1]:n?.[0];if(!e||!r||this.measured().full<=this.measured()[t]+this.measured().column*.4)return!1;let o=e.getBoundingClientRect(),a=r.getBoundingClientRect();return a.left>=o.left-1&&a.right<=o.right+1}text(t){return this.i18n?.version?.(),CQ(t,this.i18n)}actions(t){return t===`left`?this.left():this.right()}laneWidth(t){return this.measured()[t]+(this.side()===t?this.stretch():0)}edge(t,e){let n=this.actions(t);return e.id===(t===`left`?n[n.length-1]?.id:n[0]?.id)}overflows(t){return this.actions(t).length>this.capacity()}actionId(t,e){return`${this.instanceId}-${t}-${encodeURIComponent(e.id)}`}updateScroll(){this.scrollRevision.update(t=>t+1)}canScroll(t,e){this.scrollRevision();let n=this.nativeElement.querySelector(`[data-side="${t}"]`);return!!n&&(e<0?n.scrollLeft>1:n.scrollLeft+n.clientWidth<n.scrollWidth-1)}scrollActions(t,e){let n=this.nativeElement.querySelector(`[data-side="${t}"]`);if(!n)return;this.pagingLane!==n&&(this.stopPaging(),this.pagingLane=n,this.pagingTarget=n.scrollLeft);let r=this.probe().nativeElement.getBoundingClientRect().width,o=Math.max(1,Math.floor(n.clientWidth/Math.max(1,r))),a=n.getBoundingClientRect().left+n.clientLeft,u=parseFloat(n.ownerDocument.defaultView?.getComputedStyle(n).scrollPaddingLeft??`0`)||0,g=n.scrollWidth-n.clientWidth,S=[...new Set(Array.from(n.querySelectorAll(`.bx-swipe-action`)).map(O=>Math.max(0,Math.min(g,O.getBoundingClientRect().left-a+n.scrollLeft-u))))];if(!S.length)return;let P=S.reduce((O,D,V)=>Math.abs(D-this.pagingTarget)<Math.abs(S[O]-this.pagingTarget)?V:O,0);this.pagingTarget=S[Math.max(0,Math.min(S.length-1,P+e*o))],n.classList.add(`is-paging`),this.pagingMotion??=Zn$1([n.scrollLeft],([O],[D])=>{n.scrollLeft=Math.max(0,Math.min(n.scrollWidth-n.clientWidth,O)),this.updateScroll(),Math.abs(O-this.pagingTarget)<.1&&Math.abs(D)<.1&&n.classList.remove(`is-paging`)},vr.snappy),this.pagingMotion.retarget([this.pagingTarget],this.bxA11yService.isReducedMotion())}busy(t){return!!t.loading||this.pending().includes(t.id)}foreground(t){return la[t.color??(t.role===`destructive`?`danger`:`primary`)]}invoke(t,e,n){n.stopPropagation(),!(this.disabled()||t.disabled||this.busy(t))&&this.selected.emit({action:t,source:e,event:n})}actionText(t){return this.failed().includes(t.id)?t.retryLabel?this.text(t.retryLabel):`${this.text(this.retryLabel())} ${this.text(t.label)}`:this.text(t.label)}statusText(){let t=this.completedAction();if(t)return`${this.text(t.label)}: ${this.text(this.completedLabel())}`;let e=this.allActions().find(n=>n.id===this.fullActionId());return e&&this.busy(e)?`${this.text(e.label)}: ${this.text(this.loadingLabel())}`:e&&this.failed().includes(e.id)?this.actionText(e):this.armed()?this.text(this.readyLabel()):``}paintStretchIntent(t){this.stretchIntent=Math.max(0,Math.min(1,t));let e=this.side();for(let n of this.groups()){let r=this.nativeElement.querySelector(`[data-side="${n}"]`),o=Array.from(r?.querySelectorAll(`.bx-swipe-action`)??[]),a=n===`left`?o[o.length-1]:o[0],u=n===e?this.stretch():0,g=this.measured().full-this.measured()[n],S=u>0&&g>0?Math.max(0,Math.min(1,u/g)):0;for(let P of o){let O=P===a,D=P.querySelector(`[data-bx-swipe-glyph]`),V=P.querySelector(`.bx-swipe-action-label`),J=P.querySelector(`button`);if(P.style.setProperty(`--bx-swipe-stretch-extra`,`${O?u:0}px`),P.style.opacity=O?`1`:String(1-S),D){let U=P.querySelector(`.bx-swipe-retry-label`),z=O&&u>0&&J&&!U?Math.max(0,(J.clientWidth-D.clientWidth)/2-this.iconSize()):0,te=J?.querySelector(`.bx-btn-content-wrapper`);te&&(te.style.translate=`${z*this.stretchIntent*(n===`left`?-1:1)}px 0`)}V&&(V.style.opacity=O&&u>0?String(1-this.stretchIntent):``)}}}startEntrance(t,e){this.resetEntrance();let n=Array.from(this.nativeElement.querySelectorAll(`[data-side="${t}"] .bx-swipe-action-visual`)),r=this.nativeElement.ownerDocument.defaultView?.getComputedStyle(this.nativeElement).direction===`rtl`;this.entranceNodes=r?n.reverse():n,this.entranceSide=t,this.entranceSignature=e,this.entranceMotions=this.entranceNodes.map((o,a)=>{let u=Zn$1([0],([g],[S])=>{if((g!==1e3||S!==0)&&Math.abs(g-1e3)<2&&Math.abs(S)<20){this.entranceMotions[a]?.retarget([1e3],!0);return}this.paintEntrance(o,g/1e3,S/1e3,r)},vr.elastic);return u.track([0]),u})}advanceEntrance(t,e){let n=this.nativeElement.ownerDocument.defaultView,r=this.nativeElement.getBoundingClientRect(),o=t===`right`?r.left+this.reveal():r.right-this.reveal();this.entranceNodes.forEach((a,u)=>{if(e){this.entranceStarted.add(u),this.entranceMotions[u].retarget([1e3],!0);return}if(this.entranceStarted.has(u)||!n)return;let g=a.parentElement?.getBoundingClientRect();g&&(t===`right`?o>g.left+g.width*.2:o<g.right-g.width*.2)&&(this.entranceStarted.add(u),this.entranceTimers.push(n.setTimeout(()=>this.entranceMotions[u]?.retarget([1e3],this.bxA11yService.isReducedMotion()),Math.min(Yn.maxStaggerMs,u*Yn.staggerMs))))})}paintEntrance(t,e,n,r){e===1&&n===0?this.entranceSettled.add(t):this.entranceSettled.delete(t);let o=this.bxA11yService.isReducedMotion(),a=this.entranceNodes.length===1,u=Yn,g=Math.max(0,Math.min(1,e)),S=a?u.singleHiddenScale:u.hiddenScale,P=a?u.singlePop:u.pop,O=o?1:S+(1-S)*Math.max(0,Math.min(1.15,e))+P*Math.sin(Math.PI*g),V=1+(o?0:(a?u.singleStrain:u.strain)*Math.max(-1,Math.min(1,n*u.velocityWeight))),J=o?0:(r?1:-1)*t.clientWidth*u.travel*(1-g);Yn$1(t,{opacity:`1`,transform:`translate3d(${J}px, 0, 0) scale(${O*V}, ${O/V})`},!0);for(let U of t.querySelectorAll(`[data-bx-swipe-glyph], .bx-swipe-action-label`))Yn$1(U,{transform:`scale(${1/V}, ${V})`})}resetEntrance(){for(let t of this.entranceTimers)this.nativeElement.ownerDocument.defaultView?.clearTimeout(t);for(let t of this.entranceMotions)t.destroy();this.entranceTimers=[],this.entranceMotions=[],this.entranceStarted.clear(),this.entranceSettled.clear();for(let t of this.entranceNodes){Yn$1(t,{opacity:`1`,transform:`none`},!0);for(let e of t.querySelectorAll(`[data-bx-swipe-glyph], .bx-swipe-action-label`))Yn$1(e,{transform:`none`})}this.entranceNodes=[],this.entranceSide=null,this.entranceSignature=``}stopPaging(){this.pagingMotion?.destroy(),this.pagingMotion=void 0,this.pagingLane?.classList.remove(`is-paging`),this.pagingLane=void 0}measure(){let t=this.probe().nativeElement,e=this.captionProbe().nativeElement.getBoundingClientRect().height,n=this.nativeElement.querySelector(`.bx-swipe-action`),r=n?parseFloat(this.nativeElement.ownerDocument.defaultView?.getComputedStyle(n).rowGap??`0`):0,o=t.getBoundingClientRect().height,a=this.nativeElement.clientHeight<o+e+r,u=Math.max(0,Math.min(o,this.nativeElement.clientHeight-(a?r:e+r)));this.compact()!==a&&this.compact.set(a);let g=`${u}px`;this.nativeElement.style.getPropertyValue(`--bx-swipe-capsule-height`)!==g&&this.nativeElement.style.setProperty(`--bx-swipe-capsule-height`,g),this.iconSize.set(Math.max(12,Math.min(20,Math.floor(u*.65))));let S=t.getBoundingClientRect().width,P=this.gapProbe().nativeElement.getBoundingClientRect().width,O=this.closeProbe().nativeElement.getBoundingClientRect().width,D=Math.max(0,this.nativeElement.clientWidth-O),V=Math.max(1,Math.floor((D-P)/Math.max(1,S))),J=this.pagerProbe().nativeElement.getBoundingClientRect().width,U=Math.max(0,this.nativeElement.clientWidth-Math.min(O,o)),z=me=>{if(!me)return 0;let tn=me*S+P;return tn<=D?tn:U<S+J+P?0:Math.min(U,Math.max(D,S+J+P))},te={left:z(this.left().length),right:z(this.right().length),full:this.fullProbe().nativeElement.getBoundingClientRect().width,column:S};V!==this.capacity()&&this.capacity.set(V),(te.left!==this.measured().left||te.right!==this.measured().right||te.full!==this.measured().full||S!==this.measuredColumn)&&(this.stopPaging(),this.measuredColumn=S,this.measured.set(te)),this.layoutChange.emit(te)}static ɵfac=function(e){return new(e||i)};static ɵcmp=Fr({type:i,selectors:[[`bx-swipe-action-panel`]],viewQuery:function(e,n){e&1&&Wy(n.contextMenu,$i$1,5)(n.probe,Ru,5)(n.pagerProbe,Lu,5)(n.captionProbe,Au,5)(n.fullProbe,Fu,5)(n.gapProbe,Vu,5)(n.closeProbe,zu,5),e&2&&db(7)},inputs:{left:[1,`left`],right:[1,`right`],side:[1,`side`],reveal:[1,`reveal`],stretch:[1,`stretch`],armed:[1,`armed`],armThreshold:[1,`armThreshold`],commitThreshold:[1,`commitThreshold`],readyLabel:[1,`readyLabel`],interactive:[1,`interactive`],pending:[1,`pending`],failed:[1,`failed`],fullActionId:[1,`fullActionId`],retryLabel:[1,`retryLabel`],loadingLabel:[1,`loadingLabel`],completedAction:[1,`completedAction`],completedLabel:[1,`completedLabel`],disabled:[1,`disabled`],previousLabel:[1,`previousLabel`],nextLabel:[1,`nextLabel`],tooltipDwell:[1,`tooltipDwell`],origin:[1,`origin`]},outputs:{selected:`selected`,layoutChange:`layoutChange`},decls:20,vars:3,consts:[[`pagerProbe`,``],[`captionProbe`,``],[`fullProbe`,``],[`gapProbe`,``],[`probe`,``],[`closeProbe`,``],[`contextTemplate`,``],[`lane`,``],[`caption`,`bxTruncate`],[`retryCaption`,`bxTruncate`],[`aria-hidden`,`true`,1,`bx-swipe-pager-probe`],[`aria-hidden`,`true`,1,`bx-swipe-caption-probe`],[`aria-hidden`,`true`,1,`bx-swipe-full-probe`],[`aria-hidden`,`true`,1,`bx-swipe-gap-probe`],[`aria-hidden`,`true`,1,`bx-swipe-probe`],[`aria-hidden`,`true`,1,`bx-swipe-close-probe`],[3,`bxContextMenu`,`bxContextMenuLongPress`],[1,`bx-swipe-action-region`,3,`has-overflow`,`is-stretching`,`can-scroll-before`,`can-scroll-after`,`bx-swipe-left`,`bx-swipe-right`,`visibility`,`--%NS%bx-action-reveal`,`inline-size`,`inert`],[`role`,`status`,1,`bx-swipe-status`],[1,`bx-swipe-action-region`,3,`inert`],[1,`bx-swipe-page-slot`,3,`inert`],[`role`,`group`,1,`bx-swipe-lane`,3,`scroll`],[`bxTooltipTouch`,`none`,1,`bx-swipe-action`,3,`bxTooltipDwell`,`bxTooltip`,`is-edge`,`inert`,`is-unavailable`],[1,`bx-swipe-page-slot`,3,`pointerdown`,`inert`],[`bx-button`,``,`type`,`button`,`variant`,`icon`,`color`,`grayscale`,1,`bx-swipe-page`,3,`click`,`disabled`],[`name`,`chevron-left`,`size`,`16`],[`bxTooltipTouch`,`none`,1,`bx-swipe-action`,3,`bxTooltipDwell`,`bxTooltip`,`inert`],[1,`bx-swipe-action-visual`],[`bx-button`,``,`type`,`button`,`variant`,`filled`,`shape`,`capsule`,`data-bx-selection-exclude`,``,3,`click`,`id`,`color`,`disabled`,`loading`],[`data-bx-swipe-glyph`,``,3,`name`,`size`],[`bxTooltipTouch`,`none`,`bxTruncate`,``,1,`bx-swipe-retry-label`,3,`bxTooltip`],[`dir`,`auto`,`bxTooltipTouch`,`none`,1,`bx-swipe-action-label`,3,`bxTruncate`,`hidden`,`bxTooltip`,`for`],[`name`,`chevron-right`,`size`,`16`],[1,`bx-swipe-context-actions`],[3,`label`,`ariaLabel`,`wrapLabel`,`icon`,`danger`,`disabled`,`loading`,`--%NS%bx-menu-item-color`],[3,`action`,`label`,`ariaLabel`,`wrapLabel`,`icon`,`danger`,`disabled`,`loading`]],template:function(e,n){if(e&1&&(td$1(0,`span`,10,0),bo$1(2,`span`,11,1),aA(4,`M`),Go$1(),td$1(5,`span`,12,2)(7,`span`,13,3)(9,`span`,14,4)(11,`span`,15,5),bo$1(13,`div`,16),nb(14,ju,7,23,`div`,17,IT),Go$1(),ed$1(16,Gu,3,0,`ng-template`,null,6,TA),bo$1(18,`span`,18),aA(19),Go$1()),e&2){let r=jT(17);qs$1(13),$o$1(`bxContextMenu`,r)(`bxContextMenuLongPress`,!1),qs$1(),sb(n.groups()),qs$1(5),sk(n.statusText())}},dependencies:[xe,YC,Gi$1,qi$1,$i$1,Pt$1,ct$1,on],styles:[`
[_nghost-%COMP%] {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: clip;
  border-radius: inherit;
}
.bx-swipe-probe[_ngcontent-%COMP%], 
.bx-swipe-close-probe[_ngcontent-%COMP%], 
.bx-swipe-full-probe[_ngcontent-%COMP%] {
  position: absolute;
  visibility: hidden;
  pointer-events: none;
  inline-size: var(--%NS%bx-swipe-action-width, calc(var(--%NS%bx-swipe-capsule-height, var(--%NS%bx-space-10, 2.5rem)) * 2.5 + var(--%NS%bx-space-2, 0.5rem)));
  block-size: var(--%NS%bx-swipe-action-height, var(--%NS%bx-space-10, 2.5rem));
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
  grid-template-columns: var(--%NS%bx-space-8, 2rem) minmax(0, 1fr) var(--%NS%bx-space-8, 2rem);
  gap: var(--%NS%bx-swipe-overflow-gap, var(--%NS%bx-space-2, 0.5rem));
  padding-inline: var(--%NS%bx-swipe-overflow-padding, var(--%NS%bx-space-2, 0.5rem));
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
  --%NS%bx-button-capsule-width: calc(var(--%NS%bx-swipe-capsule-height) * 2.5 + var(--%NS%bx-swipe-stretch-extra, 0px));
  --%NS%bx-button-capsule-min-height: 0;
  --%NS%bx-button-capsule-min-width: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: none;
  gap: var(--%NS%bx-space-1, 0.25rem);
  inline-size: calc(var(--%NS%bx-swipe-action-width, calc(var(--%NS%bx-swipe-capsule-height) * 2.5 + var(--%NS%bx-space-2, 0.5rem))) + var(--%NS%bx-swipe-stretch-extra, 0px));
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
  inline-size: calc(2 * var(--%NS%bx-space-8, 2rem) + 2 * var(--%NS%bx-swipe-overflow-gap, var(--%NS%bx-space-2, 0.5rem)) + 2 * var(--%NS%bx-swipe-overflow-padding, var(--%NS%bx-space-2, 0.5rem)));
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
  padding-left: calc(var(--%NS%bx-swipe-overflow-padding, var(--%NS%bx-space-2, 0.5rem)) + var(--%NS%bx-swipe-content-gap, var(--%NS%bx-space-2, 0.5rem)));
}
.bx-swipe-action-region.has-overflow.bx-swipe-right[_ngcontent-%COMP%] {
  padding-right: calc(var(--%NS%bx-swipe-overflow-padding, var(--%NS%bx-space-2, 0.5rem)) + var(--%NS%bx-swipe-content-gap, var(--%NS%bx-space-2, 0.5rem)));
}`]})};function Yi(i,t,e,n=0,r=.4){let o=Math.max(0,Math.min(.35,n)),a=Math.max(0,t*Math.max(o+.01,Math.min(1,r)));if(a===0)return i;let u=o*t,g=Math.min(i,u),S=a-u,O=Math.max(0,Math.min(i-u,S))/S;return i+(e-1)*(g+S*(O-O*O+O*O*O/3))}function ca(i,t,e,n=0,r=.4){let o=0,a=i;for(let u=0;u<28;u++){let g=(o+a)/2;Yi(g,t,e,n,r)<i?o=g:a=g}return(o+a)/2}function Qi(i,t,e){return 1+(i-1)*(t>0?Math.min(1,Math.max(0,e)/t):1)}var Jn=class i{owner;dismiss;activate(t,e){this.owner!==t&&this.dismiss?.(),this.owner=t,this.dismiss=e}release(t){this.owner===t&&(this.owner=void 0,this.dismiss=void 0)}static ɵfac=function(e){return new(e||i)};static ɵprov=V({token:i,factory:i.ɵfac,providedIn:`root`})};var ua=class i{nativeElement=b(ke).nativeElement;viewContainerRef=b(fr);destroyRef=b(he);bxA11yService=b(Br);menuItem=b(qi$1,{self:!0,optional:!0});contextMenuDirective=b($i$1,{optional:!0,self:!0});swipeActionsService=b(Jn);phase=z(`closed`);pending=z([]);working=z([]);completed=z(null);failed=z([]);fullOperation=z(null);originalStyles=/* @__PURE__ */ new Map;swipeState=this.phase.asReadonly();swipeContent=re(void 0);swipeDisabled=re(!1);swipeLoading=re(!1);leftSwipeActions=re([]);rightSwipeActions=re([]);swipePreviousLabel=re(`Previous actions`);swipeNextLabel=re(`Next actions`);swipeTooltipDwell=re(Un);swipeFullAction=re(!0);swipeCompletion=re(`collapse`);swipeDismissFocus=re(void 0);swipeRetryLabel=re(`Retry`);swipeLoadingLabel=re(`Working`);swipeCompletedLabel=re(`Done`);swipeDismissed=Ok();swipeAction=Ok();swipeActionError=Ok();dismissal;panel;row;movable;motion;listeners;gestureListeners;visibilityObserver;gesture;wheelGesture;completeAfterWheel;wheelTimer;layout={left:0,right:0,full:0,column:0};stretchSide=null;stretchPermitted=!1;position=0;destination=0;motionSide=null;settleMinimum=0;settleMaximum=0;suppressClick=!1;commandRevision=0;leftConfiguration;rightConfiguration;constructor(){Bk(()=>{let t=this.leftSwipeActions(),e=this.rightSwipeActions(),n=this.swipeDisabled()||this.swipeLoading()||!!this.menuItem?.disabled()||!!this.menuItem?.loading(),r=this.bxA11yService.isReducedMotion(),o=this.swipePreviousLabel(),a=this.swipeNextLabel(),u=this.swipeTooltipDwell(),g=this.working(),S=this.completed(),P=this.swipeCompletedLabel(),O=this.failed(),D=this.fullOperation(),V=this.swipeRetryLabel(),J=this.swipeLoadingLabel(),U=this.swipeContent(),z=this.fullOptions();de(()=>{let te=t!==this.leftConfiguration||e!==this.rightConfiguration;if(this.leftConfiguration=t,this.rightConfiguration=e,!t.length&&!e.length){this.teardown();return}U&&this.movable&&U!==this.movable&&this.teardown(),this.mount(),this.panel?.setInput(`left`,t),this.panel?.setInput(`right`,e),this.panel?.setInput(`disabled`,n),this.panel?.setInput(`previousLabel`,o),this.panel?.setInput(`nextLabel`,a),this.panel?.setInput(`tooltipDwell`,u),this.panel?.setInput(`pending`,g),this.panel?.setInput(`completedAction`,S),this.panel?.setInput(`completedLabel`,P),this.panel?.setInput(`failed`,O),this.panel?.setInput(`fullActionId`,D?.id??null),this.panel?.setInput(`retryLabel`,V),this.panel?.setInput(`loadingLabel`,J),this.panel?.setInput(`readyLabel`,z.readyLabel),this.panel?.setInput(`armThreshold`,z.armThreshold),this.panel?.setInput(`commitThreshold`,z.commitThreshold),!z.enabled&&(this.gesture||this.wheelGesture)&&(this.cancelGesture(),this.cancelWheel()),n&&(this.closeSwipeActions(),this.panel?.instance.closeContext()),te&&!this.wheelGesture?.committed&&!this.fullOperation()&&(this.cancelGesture(),this.cancelWheel()),r&&this.dismissal?.finish(),r&&!this.gesture&&!this.wheelGesture&&this.motion?.retarget([this.destination],!0),this.panel?.changeDetectorRef.detectChanges()})}),this.destroyRef.onDestroy(()=>this.teardown())}closeSwipeActions(){if(!(this.pending().length||this.phase()===`dismissing`||this.phase()===`dismissed`)){if(this.fullOperation.set(null),!this.motion){this.phase.set(`closed`);return}this.cancelGesture(),this.cancelWheel(),this.settle(0)}}restoreSwipeRow(){this.phase()===`dismissed`&&(this.dismissal?.restore(),this.fullOperation.set(null),this.stretchSide=null,this.position=0,this.destination=0,this.motionSide=null,this.phase.set(`closed`),this.motion?.track([0],[0]),this.panel?.setInput(`interactive`,!1))}mount(){if(this.panel)return;let t=this.swipeContent()??this.nativeElement.querySelector(`[bxSwipeContent]`)??this.nativeElement.querySelector(`.bx-menu-item-btn`),e=this.menuItem?this.nativeElement.querySelector(`.bx-menu-item-btn`):t?.closest(`button,a[href],[tabindex]`)??t,n=this.nativeElement.ownerDocument.defaultView;if(!e||!t||!n||e===this.nativeElement||t===this.nativeElement||!this.nativeElement.contains(t))return;this.row=e,this.movable=t,this.style(this.nativeElement,`position`,`relative`),this.style(this.nativeElement,`overflow`,`clip`),this.style(this.nativeElement,`overscroll-behavior-x`,`contain`),this.style(this.nativeElement,`touch-action`,`pan-y pinch-zoom`),this.style(e,`touch-action`,`pan-y pinch-zoom`),this.style(e,`position`,`relative`),this.style(t,`position`,`relative`);let r$8=this.viewContainerRef.createComponent(Qn);this.panel=r$8,r$8.setInput(`origin`,this.focusOrigin()),this.nativeElement.append(r$8.location.nativeElement),this.dismissal=new Zn(this.nativeElement,[e,r$8.location.nativeElement]),r$8.instance.selected.subscribe(u=>this.invoke(u)),r$8.instance.layoutChange.subscribe(u=>this.updateLayout(u)),this.motion=Zn$1([0],([u],[g])=>{this.motionSide===null&&this.destination!==0&&u*this.destination>=0&&(this.motionSide=this.destination<0?`left`:`right`);let S=this.phase()===`settling`?Math.max(this.settleMinimum,Math.min(this.settleMaximum,u)):u;this.position=this.clampPosition(S,this.motionSide),Yn$1(e,{transform:`translate3d(${this.position}px, 0, 0)`},!0),this.paint(),this.phase()===`settling`&&Math.abs(u-this.destination)<.1&&Math.abs(g)<.1&&(this.phase.set(this.destination===0?`closed`:this.destination<0?`left`:`right`),this.destination===0&&(this.motionSide=null),this.stretchSide=null,this.panel?.setInput(`stretch`,0),this.panel?.setInput(`armed`,!1))},vr.smooth),this.style(e,`transform`,`translate3d(0, 0, 0)`),this.listeners=new AbortController;let o={signal:this.listeners.signal},a=this.nativeElement.ownerDocument;this.nativeElement.addEventListener(`wheel`,u=>this.onWheel(u),s(r({},o),{passive:!1,capture:!0})),this.nativeElement.addEventListener(`pointerdown`,u=>this.onDown(u),o),e.addEventListener(`lostpointercapture`,u=>{u.target===e&&u.pointerId===this.gesture?.pointerId&&!e.hasPointerCapture(u.pointerId)&&this.cancelGesture()},o),this.nativeElement.addEventListener(`click`,u=>{if(this.suppressClick||this.destination!==0&&this.row?.contains(u.target)||this.gesture?.claimed){u.preventDefault(),u.stopImmediatePropagation();let g=this.suppressClick;this.suppressClick=!1,g||this.closeSwipeActions()}},s(r({},o),{capture:!0})),this.nativeElement.addEventListener(`contextmenu`,u=>{!this.contextMenuDirective&&!u.defaultPrevented&&this.openContext(u)},o),this.nativeElement.addEventListener(`keydown`,u=>{!this.contextMenuDirective&&(u.key===`ContextMenu`||u.shiftKey&&u.key===`F10`)&&(u.preventDefault(),u.stopPropagation(),this.openContext(u))},o),a.addEventListener(`keydown`,u=>{u.key===`Escape`&&(this.gesture||this.wheelGesture||this.destination!==0)&&(u.preventDefault(),u.stopImmediatePropagation(),this.closeSwipeActions())},s(r({},o),{capture:!0})),a.addEventListener(`pointerdown`,u=>{this.nativeElement.contains(u.target)||this.closeSwipeActions()},s(r({},o),{capture:!0,passive:!0})),a.addEventListener(`focusin`,u=>{this.nativeElement.contains(u.target)||this.closeSwipeActions()},o),a.addEventListener(`visibilitychange`,()=>{a.hidden&&(this.closeSwipeActions(),this.panel?.instance.closeContext())},o),n.addEventListener(`blur`,()=>this.closeSwipeActions(),o),this.visibilityObserver=new MutationObserver(()=>{this.nativeElement.closest(`[inert], [hidden], [aria-hidden="true"]`)&&(this.closeSwipeActions(),this.panel?.instance.closeContext())});for(let u=this.nativeElement.parentElement;u;u=u.parentElement)this.visibilityObserver.observe(u,{attributes:!0,attributeFilter:[`inert`,`hidden`,`aria-hidden`]})}onWheel(t){if(!this.nativeElement.contains(t.target))return;if(this.wheelGesture?.committed){if(t.ctrlKey||Math.abs(t.deltaY)>Math.abs(t.deltaX)){this.finishWheel(!1);return}if(t.deltaX===0)return;t.preventDefault(),t.stopPropagation();let S=this.nativeElement.ownerDocument.defaultView;S?.clearTimeout(this.wheelTimer),this.wheelTimer=S?.setTimeout(()=>this.finishWheel(!1),Xn);return}if(t.ctrlKey){this.cancelWheel();return}if(this.operationBlocksGesture()||this.gesture||this.swipeDisabled()||this.swipeLoading()||this.menuItem?.disabled()||this.menuItem?.loading()||t.deltaX===0&&t.deltaY===0)return;if(Math.abs(t.deltaX)<=Math.abs(t.deltaY)){this.wheelGesture&&this.finishWheel(!1);return}let e=t.deltaMode===WheelEvent.DOM_DELTA_LINE?parseFloat(this.nativeElement.ownerDocument.defaultView?.getComputedStyle(this.row??this.nativeElement).lineHeight??`16`)||16:t.deltaMode===WheelEvent.DOM_DELTA_PAGE?this.nativeElement.clientWidth:1,n=-t.deltaX*e;if(!this.wheelGesture&&(n<0&&this.layout.left===0&&this.position<=0||n>0&&this.layout.right===0&&this.position>=0))return;t.preventDefault(),t.stopPropagation();let r=this.nativeElement.ownerDocument.defaultView;if(!r)return;if(this.wheelGesture?.collapsed){let S=this.wheelGesture.lastDelta;if(!(Math.sign(n)!==Math.sign(S)||Math.abs(n)>Math.abs(S)+Math.max(1,Math.abs(S)*.25))){this.wheelGesture.lastDelta=n,r.clearTimeout(this.wheelTimer),this.wheelTimer=r.setTimeout(()=>this.finishWheel(!1),Xn);return}this.wheelGesture=void 0,r.clearTimeout(this.wheelTimer),this.wheelTimer=void 0}if(!this.wheelGesture){this.completed.set(null),this.swipeActionsService.activate(this,()=>this.closeSwipeActions());let S=this.initialSide(n);this.stretchPermitted=this.canBeginStretch(S),this.wheelGesture={destination:this.destination,lastDelta:n,collapsed:!1,committed:!1,stretchIntent:this.stretchPermitted,revealDeltaPeak:Math.abs(n),continuationDelta:null,velocity:new Mh(this.position,t.timeStamp),side:S,position:this.position,rawPosition:this.rawPosition(this.position,S),start:this.position,event:t},this.motionSide=this.destination===0&&(this.position<0?`left`:`right`)!==S?null:S,this.motion?.track([this.position]),this.phase.set(`dragging`),this.panel?.setInput(`interactive`,!1)}let o=this.canBeginStretch(this.wheelGesture.side);this.updateWheelStretchIntent(this.wheelGesture,n,o),this.stretchPermitted=o&&this.wheelGesture.stretchIntent,this.wheelGesture.lastDelta=n,this.prepareStretch(this.wheelGesture.side);let a=this.clampGesturePosition(this.visualPosition(this.wheelGesture.rawPosition+n,this.wheelGesture.side),this.wheelGesture.side,this.wheelGesture.start,this.wheelGesture.destination),u=this.wheelGesture.position;this.wheelGesture.event=t,this.wheelGesture.position=a,this.wheelGesture.rawPosition=this.rawPosition(a,this.wheelGesture.side),this.updateArmed(a,this.wheelGesture.side),this.wheelGesture.velocity.update(a,t.timeStamp),this.motion?.track([a],[this.wheelGesture.velocity.velocity(t.timeStamp)]),Math.abs(a)<.1&&u*n<0&&(this.wheelGesture.collapsed=!0,this.destination=0,this.motionSide=null,this.stretchSide=null,this.swipeActionsService.release(this)),r.clearTimeout(this.wheelTimer),this.wheelTimer=r.setTimeout(()=>this.finishWheel(),Xn);let g=this.edgeAction(this.wheelGesture.side);g&&this.fullOptions(this.wheelGesture.side).enabled&&g.fullSwipe!==!1&&this.stretchProgress(a,this.wheelGesture.side)>=this.fullOptions(this.wheelGesture.side).commitThreshold&&(this.wheelGesture.committed=!0,this.invoke({action:g,source:`full-swipe`,event:t}))}updateWheelStretchIntent(t,e,n){if(t.stretchIntent||e*(t.side===`left`?-1:1)<=0)return;let r=Math.abs(e);if(t.revealDeltaPeak=Math.max(t.revealDeltaPeak,r),!n){t.continuationDelta=null;return}if(t.continuationDelta===null){r<Math.abs(t.lastDelta)&&r<=t.revealDeltaPeak*.5&&(t.continuationDelta=r);return}r>t.continuationDelta+Math.max(2,t.continuationDelta*.5)?t.stretchIntent=!0:t.continuationDelta=Math.min(t.continuationDelta,r)}finishWheel(t=!0){let e=this.wheelGesture,n=this.nativeElement.ownerDocument.defaultView;if(!e||!n)return;let r=e.velocity.velocity(n.performance.now());if(this.wheelGesture=void 0,n.clearTimeout(this.wheelTimer),this.wheelTimer=void 0,e.committed){let o=this.completeAfterWheel;this.completeAfterWheel=void 0,o?.();return}this.motion?.track([this.position],[r]),t?this.finishRelease(r,e.side,e.position,e.event):this.settle(this.releaseDestination(r,e.side,e.position))}cancelWheel(){if(this.wheelGesture?.committed){this.finishWheel(!1);return}let t=this.wheelGesture;this.nativeElement.ownerDocument.defaultView?.clearTimeout(this.wheelTimer),this.wheelTimer=void 0,this.wheelGesture=void 0,t&&(this.motion?.track([this.position],[0]),this.settle(t.collapsed?0:t.destination))}releaseDestination(t,e,n=this.position){let r=MR(n,t,Math.max(this.layout.left,this.layout.right));return e!==`right`&&r<-this.layout.left/2&&this.layout.left>0?-this.layout.left:e!==`left`&&r>this.layout.right/2&&this.layout.right>0?this.layout.right:0}initialSide(t){return this.destination<0?`left`:this.destination>0?`right`:t<0?`left`:`right`}extent(t){return this.stretchSide===t?Math.max(this.layout[t],this.layout.full):this.layout[t]}clampPosition(t,e){return e===`left`?Math.max(-this.extent(`left`),Math.min(0,t)):e===`right`?Math.max(0,Math.min(this.extent(`right`),t)):Math.max(-this.extent(`left`),Math.min(this.extent(`right`),t))}clampGesturePosition(t,e,n,r){let o=e===`right`?r===0?Math.min(0,n):0:-(this.stretchPermitted?this.extent(`left`):this.layout.left),a=e===`left`?r===0?Math.max(0,n):0:this.stretchPermitted?this.extent(`right`):this.layout.right;return Math.max(o,Math.min(a,t))}fullOptions(t=null){let e=this.swipeFullAction(),n=t?this.edgeAction(t):void 0,r$9=r(r({},typeof e==`boolean`?{enabled:e}:e),n?.fullSwipeConfig),o=n?.role===`destructive`,a=o?We.destructiveCommitThreshold:We.commitThreshold,u=o?We.destructiveResistance:We.resistance,g=r$9.armThreshold??We.armThreshold,S=r$9.commitThreshold??a,P=r$9.resistance??u,O=o?We.destructivePlateau:0,D=o?We.destructiveResistanceEnd:We.resistanceEnd,V=r$9.resistancePlateau??O,J=r$9.resistanceEnd??D,U=Number.isFinite(V)?Math.max(0,Math.min(.35,V)):O,z=Number.isFinite(g)?Math.max(0,Math.min(.95,g)):We.armThreshold;return{enabled:e!==!1&&(r$9.enabled??!0),resistance:Number.isFinite(P)?Math.max(1,Math.min(12,P)):u,resistancePlateau:U,resistanceEnd:Math.max(U+.01,Number.isFinite(J)?Math.min(1,J):D),armThreshold:z,commitThreshold:Number.isFinite(S)?Math.max(z+.01,Math.min(1,S)):Math.max(z+.01,a),readyLabel:r$9.readyLabel??`Release to activate`}}edgeAction(t){let e=t===`left`?this.leftSwipeActions():this.rightSwipeActions();return t===`left`?e[e.length-1]:e[0]}rawPosition(t,e){if(!e)return t;let n=e===`left`?-1:1,r=t*n,o=this.layout[e],a=this.fullOptions(e),u=Qi(a.resistance,this.layout.full-o,this.layout.column*2);return r>o?n*(o+Yi(r-o,this.layout.full-o,u,a.resistancePlateau,a.resistanceEnd)):t}visualPosition(t,e){if(!e)return t;let n=e===`left`?-1:1,r=t*n,o=this.layout[e],a=this.fullOptions(e),u=Qi(a.resistance,this.layout.full-o,this.layout.column*2);return r>o?n*(o+ca(r-o,this.layout.full-o,u,a.resistancePlateau,a.resistanceEnd)):t}canBeginStretch(t){return(t===`left`?this.leftSwipeActions():this.rightSwipeActions()).length===1||!!this.panel?.instance.isEntranceComplete(t)}prepareStretch(t){if(!t||!this.stretchPermitted||this.stretchSide===t||!this.fullOptions(t).enabled)return;let e=this.edgeAction(t);e&&e.fullSwipe!==!1&&!e.disabled&&!e.loading&&!this.pending().includes(e.id)&&this.panel?.instance.canFullSwipe(t)&&(this.stretchSide=t)}stretchProgress(t,e){if(!e||this.stretchSide!==e||t*(e===`left`?-1:1)<=0)return 0;let n=this.layout.full-this.layout[e];return n>0?Math.max(0,Math.min(1,(Math.abs(t)-this.layout[e])/n)):0}updateArmed(t,e){this.panel?.setInput(`armed`,this.stretchProgress(t,e)>=this.fullOptions(e).commitThreshold)}finishRelease(t,e,n,r){let o=e?this.edgeAction(e):void 0,a=this.fullOptions(e),u=!!e&&!!o&&a.enabled&&o.fullSwipe!==!1&&this.stretchProgress(n,e)>=a.commitThreshold,S=!!e&&this.stretchProgress(n,e)>0&&e?this.layout[e]*(e===`left`?-1:1):this.releaseDestination(t,e,n);u&&o?this.invoke({action:o,source:`full-swipe`,event:r}):this.settle(S)}focusOrigin(){let t=this.row??this.nativeElement,e=this.nativeElement.ownerDocument.activeElement;return e instanceof HTMLElement&&t.contains(e)&&e.tabIndex>=0?e:t.matches(`button,a[href],[tabindex]`)?t:t.querySelector(`button,a[href],[tabindex]`)??t}onDown(t){if(t.target.closest(`input,textarea,select,[contenteditable="true"]`)||this.operationBlocksGesture()||!t.isPrimary||t.button!==0||this.swipeDisabled()||this.swipeLoading()||this.menuItem?.disabled()||this.menuItem?.loading())return;this.suppressClick=this.destination===0&&Math.abs(this.position)>.1,this.cancelWheel(),this.cancelGesture(),this.motion?.track([this.position]),this.gesture={pointerId:t.pointerId,x:t.clientX,y:t.clientY,start:this.position,destination:this.destination,velocity:new Mh(t.clientX,t.timeStamp),claimed:!1,side:this.destination!==0?this.initialSide(0):null},this.gestureListeners=new AbortController;let e={signal:this.gestureListeners.signal},n=this.nativeElement.ownerDocument;n.addEventListener(`pointermove`,r=>this.onMove(r),s(r({},e),{passive:!1})),n.addEventListener(`pointerup`,r=>this.onUp(r),e),n.addEventListener(`pointercancel`,r=>{r.pointerId===this.gesture?.pointerId&&this.cancelGesture()},e),n.addEventListener(`pointerdown`,r=>{r.pointerId!==this.gesture?.pointerId&&this.cancelGesture()},s(r({},e),{passive:!0}))}onMove(t){let e=this.gesture;if(!e||t.pointerId!==e.pointerId)return;let n=t.clientX-e.x,r=t.clientY-e.y;if(!e.claimed){if(Math.max(Math.abs(n),Math.abs(r))<8)return;if(Math.abs(r)>=Math.abs(n)||n<0&&!this.layout.left&&e.start<=0||n>0&&!this.layout.right&&e.start>=0){this.cancelGesture();return}this.completed.set(null),this.swipeActionsService.activate(this,()=>this.closeSwipeActions()),e.claimed=!0,e.side??=n<0?`left`:`right`,this.stretchPermitted=this.canBeginStretch(e.side),this.motionSide=e.destination===0&&(e.start<0?`left`:`right`)!==e.side?null:e.side,this.row?.setPointerCapture(t.pointerId),this.phase.set(`dragging`),this.panel?.setInput(`interactive`,!1)}t.preventDefault(),this.prepareStretch(e.side),e.velocity.update(t.clientX,t.timeStamp);let o=this.clampGesturePosition(e.start+n,e.side,e.start,e.destination);this.updateArmed(o,e.side),this.motion?.track([o],[e.velocity.velocity(t.timeStamp)])}onUp(t){let e=this.gesture;if(!e||t.pointerId!==e.pointerId)return;if(!e.claimed){this.releaseGesture(),this.settle(e.destination);return}e.velocity.update(t.clientX,t.timeStamp);let n=e.velocity.velocity(t.timeStamp);this.suppressClick=!0,this.releaseGesture(),this.motion?.track([this.position],[n]),this.finishRelease(n,e.side,this.position,t)}releaseGesture(){let t=this.gesture;this.gesture=void 0,this.gestureListeners?.abort(),this.gestureListeners=void 0,t&&this.row?.hasPointerCapture(t.pointerId)&&this.row.releasePointerCapture(t.pointerId)}cancelGesture(){let t=this.gesture;t&&(this.releaseGesture(),t.claimed&&(this.suppressClick=!0,this.motion?.track([this.position],[0]),this.settle(t.destination)))}settle(t){this.destination=Math.max(-this.layout.left,Math.min(this.layout.right,t)),this.destination!==0?this.motionSide=this.position*this.destination<0?null:this.destination<0?`left`:`right`:Math.abs(this.position)>.1&&(this.motionSide=this.position<0?`left`:`right`),this.settleMinimum=Math.min(0,this.position,this.destination),this.settleMaximum=Math.max(0,this.position,this.destination),this.panel?.setInput(`armed`,!1),this.phase.set(`settling`),this.panel?.setInput(`interactive`,this.destination!==0),this.destination===0&&(this.panel?.location.nativeElement.contains(this.nativeElement.ownerDocument.activeElement)&&this.focusOrigin().focus({preventScroll:!0}),this.swipeActionsService.release(this)),this.motion?.retarget([this.destination],this.bxA11yService.isReducedMotion())}paint(){let t=this.position<-.1?`left`:this.position>.1?`right`:null;this.nativeElement.dataset.bxSwipeActive=t?`true`:`false`;let e=this.fullOptions(t);this.panel?.setInput(`armThreshold`,e.armThreshold),this.panel?.setInput(`commitThreshold`,e.commitThreshold),this.panel?.setInput(`readyLabel`,e.readyLabel),this.panel?.setInput(`side`,t),this.panel?.setInput(`reveal`,Math.abs(this.position)),this.panel?.setInput(`stretch`,t&&this.stretchSide===t?Math.max(0,Math.abs(this.position)-this.layout[t]):0)}updateLayout(t){let e=t.left!==this.layout.left||t.right!==this.layout.right||t.full!==this.layout.full;if(this.layout=t,this.phase()===`dismissing`||this.phase()===`dismissed`)return;let n=this.fullOperation();if(n){e&&this.holdFullAction(n.side,n.status);return}e&&(this.cancelGesture(),this.cancelWheel(),this.settle(this.destination<0?-t.left:this.destination>0?t.right:0))}openContext(t){this.pending().length||this.phase()===`dismissing`||this.phase()===`dismissed`||this.swipeDisabled()||this.swipeLoading()||this.menuItem?.disabled()||this.menuItem?.loading()||(t.preventDefault(),t.stopPropagation(),this.closeSwipeActions(),this.completed.set(null),this.panel?.setInput(`origin`,this.focusOrigin()),this.panel?.instance.openContext(t))}operationBlocksGesture(){return this.pending().length>0||!!this.fullOperation()||this.phase()===`dismissing`||this.phase()===`dismissed`}holdFullAction(t,e){this.stretchSide=t,this.motionSide=t,this.destination=Math.max(this.layout.full,this.layout[t])*(t===`left`?-1:1),this.phase.set(e),this.panel?.setInput(`interactive`,!0),this.panel?.setInput(`armed`,!1),this.motion?.track([this.position],[0]),this.motion?.retarget([this.destination],this.bxA11yService.isReducedMotion())}invoke(t){let e=[...this.leftSwipeActions(),...this.rightSwipeActions()].find(u=>u.id===t.action.id);if(!e||this.pending().length||this.phase()===`dismissing`||this.phase()===`dismissed`||this.swipeDisabled()||this.swipeLoading()||this.menuItem?.disabled()||this.menuItem?.loading()||e.disabled||e.loading)return;let n=++this.commandRevision,r$10=s(r({},t),{action:e,retry:this.failed().includes(e.id)}),o=e.completion??this.swipeCompletion(),a=t.source===`full-swipe`?this.stretchSide:this.fullOperation()?.id===e.id?this.fullOperation()?.side:null;if(this.completed.set(null),this.failed.update(u=>u.filter(g=>g!==e.id)),this.pending.set([e.id]),a&&(this.fullOperation.set({id:e.id,side:a,status:`pending`}),this.holdFullAction(a,`pending`)),this.focusOrigin().focus({preventScroll:!0}),this.swipeAction.emit(r$10),!this.destroyRef.destroyed)try{let u=e.handler?.(r$10);u?(this.working.set([e.id]),u.then(()=>this.completeAction(r$10,o,n),g=>this.failAction(e,g,n))):this.completeAction(r$10,o,n)}catch(u){this.failAction(e,u,n)}}completeAction(t,e,n){if(!(this.destroyRef.destroyed||n!==this.commandRevision)){if(this.working.set([]),this.completed.set(t.action),this.wheelGesture?.committed){this.completeAfterWheel=()=>this.completeAction(t,e,n);return}if(this.pending.set([]),this.panel?.instance.closeContext(),e===`dismiss`){this.dismissRow(t);return}this.fullOperation.set(null),this.motion?.track([this.position],[0]),this.settle(0)}}failAction(t,e,n){if(this.destroyRef.destroyed||n!==this.commandRevision)return;this.pending.set([]),this.working.set([]),this.failed.update(o=>[...o,t.id]);let r$11=this.fullOperation();r$11&&(this.fullOperation.set(s(r({},r$11),{status:`error`})),this.holdFullAction(r$11.side,`error`)),this.swipeActionError.emit({action:t,error:e})}dismissRow(t){this.phase.set(`dismissing`),this.motion?.track([this.position],[0]),this.panel?.setInput(`interactive`,!1),this.swipeActionsService.release(this),this.moveDismissedFocus(),this.dismissal?.start(this.fullOperation()?.side??this.motionSide,this.bxA11yService.isReducedMotion(),()=>{this.destroyRef.destroyed||(this.phase.set(`dismissed`),this.swipeDismissed.emit(t))})}moveDismissedFocus(){if(!this.nativeElement.contains(this.nativeElement.ownerDocument.activeElement))return;let t=this.swipeDismissFocus();if(t&&!this.nativeElement.contains(t)){(t.tabIndex>=0?t:t.querySelector(`button:not(:disabled),a[href],[tabindex="0"],input:not(:disabled)`)??t).focus({preventScroll:!0});return}let e=Array.from(this.nativeElement.parentElement?.children??[]),n=e.indexOf(this.nativeElement),r=[...e.slice(n+1),...e.slice(0,n).reverse()];for(let o of r){let a=o.querySelector(`button:not(:disabled),a[href],[tabindex="0"]`);if(a&&!a.closest(`[inert],[hidden],[aria-hidden="true"]`)&&a.getClientRects().length){a.focus({preventScroll:!0});return}}this.focusOrigin().blur()}style(t,e,n){let r=this.originalStyles.get(t);r||(r=/* @__PURE__ */ new Map,this.originalStyles.set(t,r)),r.has(e)||r.set(e,t.style.getPropertyValue(e)),t.style.getPropertyValue(e)!==n&&t.style.setProperty(e,n)}teardown(){++this.commandRevision,this.completeAfterWheel=void 0,this.dismissal?.restore(),this.dismissal=void 0,this.fullOperation.set(null),this.pending.set([]),this.working.update(t=>t.length?[]:t),this.completed.set(null),this.releaseGesture(),this.cancelWheel(),this.swipeActionsService.release(this),this.motion?.destroy(),this.motion=void 0,this.listeners?.abort(),this.listeners=void 0,this.visibilityObserver?.disconnect(),this.visibilityObserver=void 0,this.panel?.instance.closeContext(),this.panel?.destroy(),this.panel=void 0;for(let[t,e]of this.originalStyles)for(let[n,r]of e)r?t.style.setProperty(n,r):t.style.removeProperty(n);this.originalStyles.clear(),this.row=void 0,this.movable=void 0,delete this.nativeElement.dataset.bxSwipeActive,delete this.nativeElement.dataset.bxSwipeHover,delete this.nativeElement.dataset.bxSwipeFocus,this.position=0,this.destination=0,this.motionSide=null,this.stretchSide=null,this.stretchPermitted=!1,this.suppressClick=!1,this.phase.set(`closed`)}static ɵfac=function(e){return new(e||i)};static ɵdir=pe({type:i,selectors:[[``,`bxSwipeActions`,``]],inputs:{swipeContent:[1,`swipeContent`],swipeDisabled:[1,`swipeDisabled`],swipeLoading:[1,`swipeLoading`],leftSwipeActions:[1,`leftSwipeActions`],rightSwipeActions:[1,`rightSwipeActions`],swipePreviousLabel:[1,`swipePreviousLabel`],swipeNextLabel:[1,`swipeNextLabel`],swipeTooltipDwell:[1,`swipeTooltipDwell`],swipeFullAction:[1,`swipeFullAction`],swipeCompletion:[1,`swipeCompletion`],swipeDismissFocus:[1,`swipeDismissFocus`],swipeRetryLabel:[1,`swipeRetryLabel`],swipeLoadingLabel:[1,`swipeLoadingLabel`],swipeCompletedLabel:[1,`swipeCompletedLabel`]},outputs:{swipeDismissed:`swipeDismissed`,swipeAction:`swipeAction`,swipeActionError:`swipeActionError`},exportAs:[`bxSwipeActions`]})};export{po as A,Zo as C,jo as D,jn as E,ts as F,ua as I,xe as L,qo as M,qt as N,jt as O,sa as P,Zb as S,jb as T,Uo as _,At as a,Yb as b,Go as c,Jt as d,Kb as f,Ub as g,Qo as h,$t as i,qb as j,na as k,He as l,Qb as m,$n as n,Bo as o,Pt as p,$o as r,Gb as s,$b as t,Ho as u,Wb as v,ee as w,Yo as x,Xb as y};