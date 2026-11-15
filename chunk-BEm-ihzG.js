import{$ as sl$1,F as an,L as ct,R as dl$1,U as jn$1,Y as on,f as Ki,g as Pt$1,it as zs$1,n as Ae$1,nt as ul$1,t as $i}from"./chunk-DE1qZ0OS.js";import{t as U}from"./chunk-1rrlZ2Ss.js";import{$ as It$1,$a as tm,$i as mQ,$n as ZN,$r as fa$1,A as FK,Aa as qa$1,Ai as is$1,Ao as y1,Ar as ce,Ba as rm,Bo as zm,Br as dm,Bt as PK,Ca as pa$1,Cn as V,Cr as bn,Da as qI,En as W,Eo as xT,Et as Me$1,F as Fg,Fi as jy,Ft as OQ,Ga as se,Gi as le,Gr as el$1,Gt as Py,H as Ge,Ha as sD,Ht as Pk,I as Fr,In as XT,Io as ym,Ja as st,Ji as m1,Jr as er,Ka as sr,Kr as em,La as rN,Li as kE,Lo as yt$1,Lt as Os$1,M as FQ,Mo as yZ,Mr as d1,Na as qr$1,Nr as d4,O as Ete,Oo as xe,P as FZ,Pi as ju,Po as ye,Pt as OD,Qa as tk,Qi as mN,Qr as fZ,R as GA,Ra as rR,Ro as zY,Rr as dZ,Sn as Uo$1,Sr as ba$1,St as Ly,Ta as pr,Ti as iD,To as xQ,U as Gg,Uo as zs$2,Ut as Po$1,V as Gc$1,Vi as l4,Vn as Xl$1,Vo as zo$1,Vt as PZ,W as Go$1,Wa as sK,Wr as ek,Wt as Pt$2,X as HT,Xn as Yo$1,Xr as f1,Xt as Ql$1,Y as HQ,Yi as m4,Yn,Yr as et,Za as ti,Zi as mE,Zr as fR,_n as U$1,_o as vt$1,_t as Ky,ai as gT,an as Sa$1,ar as Zy,at as Jl$1,b as Cy,ba as ou$1,bn as Ue,bo as wk,bt as LZ,c as AQ,ca as nN,cn as Sk,co as uu,cr as _Q,ct as K,d as Ar,dr as _k,en as RD,et as J,f as Ay,fn as TQ,fo as vN,fr as _s$1,h as BN,ha as o1,hi as hT,ho as vi$1,i as $n$1,ia as me,ii as gN,it as Jc$1,j as FN,ji as jD,jn as Wo$1,jo as yN,k as Ey,ko as xg,la as nd$1,li as gn,ln as T,lo as v1,lr as _d$1,m as BK,mn as Te$1,mo as vg,mr as aD,n as $Q,nn as Ro$1,no as tt,nr as Zb,oa as nD,oo as ue,pn as TZ,qi as m,qn as Yb,qt as QN,ra as md$1,rn as Rt$1,rr as Zg,rt as Jb,s as AD,sn as Se,t as $N,ti as fk,to as tr,ua as ni,un as TD,v as CT,vn as UQ,vt as LK,wn as Vr,wr as br,wt as MZ,x as DQ,xa as p1,xn as Ul$1,xr as bT,xt as Lr,y as Cd$1,ya as or,yi as hr,z as GY,za as ri,zi as ke,zr as de$1,zt as P}from"./chunk-CVY9_LoB.js";import{n as s,t as r}from"./chunk-C9yOwMO6.js";var zn=class i{elementRef=m(ye);static ɵfac=function(e){return new(e||i)};static ɵdir=ue({type:i,selectors:[[``,`bxButtonIcon`,``]]})};var Br={text:0,icon:.45,outlined:.45,tonal:.65,filled:1.1};var Hr={primary:1,accent:1,success:1,info:1,warn:1.04,danger:1.1,grayscale:.35};function qr(i,n,e){return Br[i===`text`?`text`:n?`outlined`:i===`tonal`?`tonal`:i===`icon`?`icon`:`filled`]*Hr[e]}var Ha=[`contentWrapper`];var qa=[`*`];function Wa(i,n){if(i&1&&Cy(0,`bx-loading-spinner`,4),i&2){let e=Ql$1();fa$1(`size`,e.spinnerSize())(`decorative`,!0)}}var fe=class i{bxA11yService=m(Fr);projectedIcon=_k(U);iconElement=_k(U,{read:ye});customIcon=_k(zn);contentWrapper=d4.required(`contentWrapper`);hasProjectedIcon=K(()=>!!this.customIcon()||!!this.projectedIcon());spinnerSize=W(20);spinnerLeft=W(null);retainSpinner=W(!1);isAnimated=K(()=>!this.bxA11yService.isReducedMotion());isDisabled=K(()=>this.disabled()||this.loading());variant=ke(`text`);color=ke(`primary`);outlined=ke(!1);elevated=ke(!1);disabled=ke(!1,{transform:Ge});loading=ke(!1,{transform:Ge});interactive=ke(!0,{transform:Ge});surfaceEffects=ke(!0,{transform:Ge});glassiness=ke();presence;presenceElement;constructor(){Ete(()=>({glassiness:this.glassiness(),emissionStrength:qr(this.variant(),this.outlined(),this.color()),interactive:this.variant()===`text`||!this.interactive()||this.isDisabled()?!1:void 0,emission:this.variant()!==`text`&&this.interactive()&&!this.isDisabled()?this.color()===`primary`||this.color()===`grayscale`?`var(--bx-primary)`:this.color()===`accent`?`var(--bx-accent)`:`var(--bx-text-${this.color()})`:void 0}),()=>this.surfaceEffects()),Sk(n=>{let e=this.customIcon()?.elementRef.nativeElement??this.iconElement()?.nativeElement;if(this.projectedIcon()?.size(),this.measureSpinner(e),!e||typeof ResizeObserver>`u`)return;let t=new ResizeObserver(()=>this.measureSpinner(e));t.observe(this.contentWrapper().nativeElement),t.observe(e),n(()=>t.disconnect())}),Sk(()=>{let n=this.customIcon()?.elementRef.nativeElement??this.iconElement()?.nativeElement,e=this.loading(),t=this.bxA11yService.isReducedMotion(),r=n!==this.presenceElement;e&&this.retainSpinner.set(!0),r&&(this.presence?.destroy(),this.presenceElement=n,this.presence=n?xg(n,{initiallyVisible:!e}):void 0),this.presence?.update(!e,t||r)}),m(me).onDestroy(()=>this.presence?.destroy())}releaseSpinner(){this.loading()||this.retainSpinner.set(!1)}onClick(n){this.isDisabled()&&(n.preventDefault(),n.stopImmediatePropagation())}measureSpinner(n){let e=this.contentWrapper().nativeElement,t=e.getBoundingClientRect(),r=n?.getBoundingClientRect(),a=n?`offsetWidth`in n?n.offsetWidth:n.clientWidth:0,l=Number(this.projectedIcon()?.size()),g=Number.parseFloat(getComputedStyle(e).width),y=g>0?t.width/g:1;this.spinnerSize.set(a||(Number.isFinite(l)&&l>0?l:20)),this.spinnerLeft.set(r&&y>0?(r.left+r.width/2-t.left)/y:null)}static ɵfac=function(e){return new(e||i)};static ɵcmp=$n$1({type:i,selectors:[[`bx-button`],[`button`,`bx-button`,``],[`a`,`bx-button`,``]],contentQueries:function(e,t,r){e&1&&Jl$1(r,t.projectedIcon,U,5)(r,t.iconElement,U,5,ye)(r,t.customIcon,zn,5),e&2&&em(3)},viewQuery:function(e,t){e&1&&Ly(t.contentWrapper,Ha,5),e&2&&em()},hostVars:14,hostBindings:function(e,t){e&1&&br(`click`,function(a){return t.onClick(a)}),e&2&&(Ro$1(`disabled`,t.isDisabled()?!0:null)(`aria-disabled`,t.isDisabled())(`aria-busy`,t.loading()?`true`:null)(`tabindex`,t.isDisabled()?`-1`:null),HT(`bx-btn bx-btn-`+t.variant()+` bx-btn-color-`+t.color()),Lr(`bx-btn-is-outlined`,t.outlined())(`bx-btn-is-elevated`,t.elevated())(`bx-btn-animated`,t.isAnimated())(`bx-btn-non-interactive`,!t.interactive()))},inputs:{variant:[1,`variant`],color:[1,`color`],outlined:[1,`outlined`],elevated:[1,`elevated`],disabled:[1,`disabled`],loading:[1,`loading`],interactive:[1,`interactive`],surfaceEffects:[1,`surfaceEffects`],glassiness:[1,`glassiness`]},ngContentSelectors:qa,decls:7,vars:8,consts:[[`contentWrapper`,``],[1,`bx-btn-content-wrapper`],[`aria-hidden`,`true`,1,`bx-btn-spinner`],[1,`bx-btn-spinner-visual`,3,`presenceHidden`,`bxVisualPresence`],[3,`size`,`decorative`],[1,`bx-btn-label`,3,`bxVisualPresence`,`bxVisualPresenceScale`]],template:function(e,t){e&1&&(jy(),Os$1(0,`span`,1,0)(2,`span`,2)(3,`span`,3),br(`presenceHidden`,function(){return t.releaseSpinner()}),bT(4,Wa,1,2,`bx-loading-spinner`,4),ba$1()(),Os$1(5,`span`,5),Py(6),ba$1()()),e&2&&(Lr(`has-icon`,t.hasProjectedIcon()),Ul$1(2),tm(`left`,t.spinnerLeft(),`px`),Ul$1(),fa$1(`bxVisualPresence`,t.loading()),Ul$1(),gT(t.loading()||t.retainSpinner()?4:-1),Ul$1(),fa$1(`bxVisualPresence`,!t.loading()||t.hasProjectedIcon())(`bxVisualPresenceScale`,1))},dependencies:[on,ju],styles:[`
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
}`]})};function ja(i,n){i&1&&Cy(0,`bx-icon`,1)}function $a(i,n){i&1&&Cy(0,`bx-icon`,2)}var Sn=class i{checked=ke(!1);indeterminate=ke(!1);invalid=ke(!1);disabled=ke(!1);emissive=ke(!1);static ɵfac=function(e){return new(e||i)};static ɵcmp=$n$1({type:i,selectors:[[`bx-checkbox-indicator`]],hostAttrs:[`aria-hidden`,`true`],hostVars:2,hostBindings:function(e,t){e&2&&Lr(`is-emissive`,t.emissive())},inputs:{checked:[1,`checked`],indeterminate:[1,`indeterminate`],invalid:[1,`invalid`],disabled:[1,`disabled`],emissive:[1,`emissive`]},decls:3,vars:9,consts:[[`bxSurface`,``,1,`bx-checkbox-box`,3,`bxSurfaceInteractive`,`bxSurfaceEmission`],[`name`,`minus`,`size`,`16`],[`name`,`check`,`size`,`16`]],template:function(e,t){e&1&&(Os$1(0,`span`,0),bT(1,ja,1,0,`bx-icon`,1)(2,$a,1,0,`bx-icon`,2),ba$1()),e&2&&(Lr(`is-checked`,t.checked()||t.indeterminate())(`is-invalid`,t.invalid())(`is-disabled`,t.disabled()),fa$1(`bxSurfaceInteractive`,t.emissive())(`bxSurfaceEmission`,t.invalid()?`var(--bx-text-danger)`:`var(--bx-accent)`),Ul$1(),gT(t.indeterminate()?1:t.checked()?2:-1))},dependencies:[RD,U],styles:[`
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
}`]})};var Ka=[`*`];var Bn=class i{static ɵfac=function(e){return new(e||i)};static ɵcmp=$n$1({type:i,selectors:[[`bx-error`]],hostAttrs:[`aria-live`,`polite`],ngContentSelectors:Ka,decls:1,vars:0,template:function(e,t){e&1&&(jy(),Py(0))},encapsulation:2})};var Za=[`*`];var Hn=class i{align=ke(`start`);static ɵfac=function(e){return new(e||i)};static ɵcmp=$n$1({type:i,selectors:[[`bx-hint`]],hostVars:2,hostBindings:function(e,t){e&2&&tm(`margin-inline-start`,t.align()===`end`?`auto`:null)},inputs:{align:[1,`align`]},ngContentSelectors:Za,decls:1,vars:0,template:function(e,t){e&1&&(jy(),Py(0))},encapsulation:2})};var qn=new T(`BX_FORM_FIELD_CONTROL`);var Ga=[[[``,`bxPrefix`,``]],`*`,[[``,`bxSuffix`,``]],[[`bx-error`]],[[`bx-hint`]]];var Ua=[`[bxPrefix]`,`*`,`[bxSuffix]`,`bx-error`,`bx-hint`];var Xa=[`ngProjectAs`,`bx-error`,5,[`bx-error`]];var Ya=[`ngProjectAs`,`bx-hint`,5,[`bx-hint`]];function Qa(i,n){i&1&&(Os$1(0,`span`,11),XT(1,`*`),ba$1())}function Ja(i,n){if(i&1&&(Os$1(0,`div`,1)(1,`label`,10),XT(2),bT(3,Qa,2,0,`span`,11),ba$1()()),i&2){let e=Ql$1();Ul$1(),Ro$1(`for`,e.controlId()),Ul$1(),rm(``,e.resolvedLabel(),` `),Ul$1(),gT(e.isRequired()&&!e.hideRequiredMarker()?3:-1)}}function eo(i,n){i&1&&Cy(0,`bx-loading-spinner`,3),i&2&&fa$1(`size`,16)(`decorative`,!0)}function no(i,n){if(i&1&&(Os$1(0,`button`,4),Cy(1,`bx-icon`,12),ba$1()),i&2){let e=Ql$1();fa$1(`bxTooltip`,e.tooltip()),Ro$1(`aria-label`,e.resolvedTooltipLabel())}}function to(i,n){i&1&&Cy(0,`bx-icon`,14)}function io(i,n){if(i&1&&(Os$1(0,`div`,15),XT(1),ba$1()),i&2){let e=n.$implicit;Ul$1(),Zy(e)}}function ro(i,n){if(i&1&&(Os$1(0,`div`,13),bT(1,to,1,0,`bx-icon`,14),Os$1(2,`div`),Yb(3,io,2,1,`div`,15,hT),ba$1()()),i&2){let e=Ql$1();Lr(`bx-animated`,e.isAnimated()),Ul$1(),gT(e.messages().length?1:-1),Ul$1(2),Zb(e.messages())}}var Y=class i{i18n=m(xQ,{optional:!0});bxA11yService=m(Fr);nativeElement=m(ye).nativeElement;bxGlassLightingService=m(jD);generatedId=`bx-field-${yZ()}`;projectedControl=_k(qn);activeControl=K(()=>this.control()??this.projectedControl());controlId=K(()=>this.forId()||this.activeControl()?.controlId()||this.generatedId);resolvedLabel=K(()=>mQ(this.label()??(this.inline()?void 0:this.activeControl()?.label()),this.i18n));resolvedError=K(()=>mQ(this.error(),this.i18n));resolvedHint=K(()=>mQ(this.hint(),this.i18n));resolvedHintEnd=K(()=>mQ(this.hintEnd(),this.i18n));resolvedTooltipLabel=K(()=>mQ(this.tooltipLabel(),this.i18n));showErrors=K(()=>!!this.error()||!!this.projectedError()||this.errors().length>0||(this.activeControl()?.showError()??!1));messages=K(()=>this.resolvedError()?[this.resolvedError()]:this.activeControl()?.errorTexts()??this.errors());isRequired=K(()=>this.required()||this.activeControl()?.required());isLoading=K(()=>this.loading()||this.activeControl()?.pending());hideSubscript=K(()=>this.subscriptSizing()===`dynamic`&&!this.showErrors()&&!this.resolvedHint()&&!this.resolvedHintEnd()&&!this.projectedHint());projectedError=_k(Bn);projectedHint=_k(Hn);isAnimated=K(()=>!this.bxA11yService.isReducedMotion());inline=ke(!1);control=ke(void 0);label=ke(void 0);tooltip=ke(void 0);tooltipLabel=ke(`More information`);error=ke(void 0);errors=ke([]);hint=ke(void 0);hintEnd=ke(void 0);required=ke(!1);hideRequiredMarker=ke(!1);loading=ke(!1);showLoadingIndicator=ke(!0);forId=ke(``);subscriptSizing=ke(`fixed`);constructor(){Sk(n=>{this.activeControl()?.setDescribedByIds?.([`${this.controlId()}-description`]);let e=this.nativeElement.querySelector(`input,textarea,select,button[role="combobox"]`);if(e){let g=new Set((e.getAttribute(`aria-describedby`)??``).split(` `).filter(Boolean));g.add(`${this.controlId()}-description`),e.setAttribute(`aria-describedby`,[...g].join(` `)),e.setAttribute(`aria-invalid`,String(this.showErrors())),e.setAttribute(`aria-required`,String(!!this.isRequired()))}if(!this.showErrors())return;let t=this.nativeElement.parentElement,r=this.nativeElement.closest(`form, fieldset`)??t,a=this.nativeElement.querySelector(`.bx-field-control > [data-bx-surface]`);if(!r||!a)return;let l=this.bxGlassLightingService.register(r,{element:a,edge:`bottom`,offsetX:.5,offsetY:1,z:32,color:`var(--bx-text-danger)`,intensity:.9,radius:240});n(()=>l.destroy())})}static ɵfac=function(e){return new(e||i)};static ɵcmp=$n$1({type:i,selectors:[[`bx-form-field`]],contentQueries:function(e,t,r){e&1&&Jl$1(r,t.projectedControl,qn,5)(r,t.projectedError,Bn,5)(r,t.projectedHint,Hn,5),e&2&&em(3)},inputs:{inline:[1,`inline`],control:[1,`control`],label:[1,`label`],tooltip:[1,`tooltip`],tooltipLabel:[1,`tooltipLabel`],error:[1,`error`],errors:[1,`errors`],hint:[1,`hint`],hintEnd:[1,`hintEnd`],required:[1,`required`],hideRequiredMarker:[1,`hideRequiredMarker`],loading:[1,`loading`],showLoadingIndicator:[1,`showLoadingIndicator`],forId:[1,`forId`],subscriptSizing:[1,`subscriptSizing`]},ngContentSelectors:Ua,decls:18,vars:17,consts:[[1,`bx-field-wrapper`],[1,`bx-field-header`],[1,`bx-field-control`],[3,`size`,`decorative`],[`type`,`button`,`bxTooltipTouch`,`tap`,`placement`,`top`,1,`bx-field-tooltip-trigger`,3,`bxTooltip`],[1,`bx-field-subscript`,3,`hidden`,`id`],[1,`bx-field-error-projected`,3,`hidden`],[`aria-live`,`polite`,1,`bx-field-error`,3,`bx-animated`],[1,`bx-field-hints`,3,`hidden`],[1,`bx-field-hint-end`],[1,`bx-field-label`],[`aria-hidden`,`true`,1,`bx-field-required`],[`name`,`help-circle`,`size`,`16`],[`aria-live`,`polite`,1,`bx-field-error`],[`name`,`alert-circle`,`size`,`16`],[1,`bx-field-error-text`]],template:function(e,t){e&1&&(jy(Ga),Os$1(0,`div`,0),bT(1,Ja,4,3,`div`,1),Os$1(2,`div`,2),Py(3),Py(4,1),Py(5,2),bT(6,eo,1,2,`bx-loading-spinner`,3),bT(7,no,2,2,`button`,4),ba$1(),Os$1(8,`div`,5)(9,`div`,6),Py(10,3,Xa),ba$1(),bT(11,ro,5,3,`div`,7),Os$1(12,`div`,8)(13,`span`),XT(14),ba$1(),Py(15,4,Ya),Os$1(16,`span`,9),XT(17),ba$1()()()()),e&2&&(Lr(`is-invalid`,t.showErrors())(`dynamic-subscript`,t.subscriptSizing()===`dynamic`),Ro$1(`data-bx-field-invalid`,t.showErrors()),Ul$1(),gT(t.resolvedLabel()?1:-1),Ul$1(),Lr(`bx-field-control-inline`,t.inline()),Ul$1(4),gT(t.showLoadingIndicator()&&t.isLoading()?6:-1),Ul$1(),gT(t.tooltip()?7:-1),Ul$1(),fa$1(`hidden`,t.hideSubscript())(`id`,t.controlId()+`-description`),Ul$1(),fa$1(`hidden`,!t.showErrors()),Ul$1(2),gT(t.showErrors()&&!t.projectedError()?11:-1),Ul$1(),fa$1(`hidden`,t.showErrors()),Ul$1(2),Zy(t.resolvedHint()),Ul$1(3),Zy(t.resolvedHintEnd()))},dependencies:[U,Pt$1,on],styles:[`
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
}`]})};var Wr={errorPolicy:`touched`,errorMode:`first`,errorMessages:{required:`This field is required.`,email:`Enter a valid email address.`,minLength:({params:i})=>`Enter at least ${i.minLength??i.requiredLength} characters.`,maxLength:({params:i})=>`Enter no more than ${i.maxLength??i.requiredLength} characters.`,min:({params:i})=>`Enter a value of at least ${i.min}.`,max:({params:i})=>`Enter a value of no more than ${i.max}.`,pattern:`Enter a value in the required format.`,parse:`Enter a valid value.`,invalid:`Invalid value.`},appearance:`fill`,floatLabel:`auto`,hideRequiredMarker:!1,subscriptSizing:`fixed`,tooltipOnTruncate:!0};var jr={minlength:`minLength`,maxlength:`maxLength`};function Cn(i,n,e,t){let r$1=jr[i.kind]??i.kind,a=`context`in i?i.context:void 0,l=a!==null&&typeof a==`object`?r({},a):r({},i),g=n[i.kind]??n[r$1],y=i.message??(typeof a==`string`?a:typeof l.message==`string`?l.message:void 0),w=g??y??e[i.kind]??e[r$1]??e.invalid??`Invalid value.`;return mQ(typeof w==`function`?w({kind:r$1,error:i,params:l}):w,t,l)}var Mn=class i{state=W(r({},Wr));settings=this.state.asReadonly();update(n){this.state.update(e=>s(r(r({},e),n),{errorMessages:r(r({},e.errorMessages),n.errorMessages)}))}static ɵfac=function(e){return new(e||i)};static ɵprov=V({token:i,factory:i.ɵfac,providedIn:`root`})};var je=class i{textAdapter=m(xQ,{optional:!0});formGroupDirective=m(rR,{optional:!0,skipSelf:!0});ngForm=m(QN,{optional:!0,skipSelf:!0});focusMonitor=m(Gg);formSettingsService=m(Mn);destroyRef=m(me);nativeElement=m(ye).nativeElement;ngControl=m(or,{optional:!0,self:!0});generatedId=`bx-field-${yZ()}`;submittedByParent=W(!1);extraDescriptions=W([]);localTouched=W(!1);controlVersion=W(0);currentErrors=K(()=>{if(this.controlVersion(),this.errors().length)return this.errors();let n=this.ngControl?.errors;return n?Object.entries(n).map(([e,t])=>({kind:e,context:t})):[]});keyboardFocused=W(!1);isReadonly=K(()=>this.readonly()||this.readOnly());controlId=K(()=>this.id()??this.generatedId);resolvedLabel=K(()=>mQ(this.label(),this.textAdapter));resolvedPlaceholder=K(()=>mQ(this.placeholder(),this.textAdapter));resolvedAppearance=K(()=>this.appearance()??this.formSettingsService.settings().appearance);resolvedFloatLabel=K(()=>this.floatLabel()??this.formSettingsService.settings().floatLabel);resolvedHideRequiredMarker=K(()=>this.hideRequiredMarker()??this.formSettingsService.settings().hideRequiredMarker);resolvedSubscriptSizing=K(()=>this.subscriptSizing()??this.formSettingsService.settings().subscriptSizing);resolvedTooltipOnTruncate=K(()=>this.tooltipOnTruncate()??this.formSettingsService.settings().tooltipOnTruncate??!0);describedBy=K(()=>[...new Set([this.ariaDescribedBy(),`${this.controlId()}-description`,...this.extraDescriptions()].filter(Boolean))].join(` `));effectiveDisabled=K(()=>(this.controlVersion(),this.disabled()||this.ngControl?.disabled===!0));effectiveRequired=K(()=>{this.controlVersion();let n=this.ngControl?.control;return this.required()||!!n?.hasValidator?.(ti.required)||!!n?.hasValidator?.(ti.requiredTrue)});showError=K(()=>{this.controlVersion();let n={invalid:this.invalid()||this.currentErrors().length>0||!!this.error(),touched:this.ngControl?.touched??(this.touched()||this.localTouched()),dirty:this.ngControl?.dirty??this.dirty(),submitted:this.submitted()||this.submittedByParent(),disabled:this.effectiveDisabled(),pending:this.pending()},e=this.errorPolicy()??this.formSettingsService.settings().errorPolicy;return n.disabled||!n.invalid?!1:typeof e==`function`?e(n):e===`always`||n.submitted||(e===`dirty`?n.dirty:e===`touched`?n.touched:!1)});errorTexts=K(()=>{if(!this.showError())return[];if(this.error())return[mQ(this.error(),this.textAdapter)];let n=this.errorPriority(),e=[...this.currentErrors()].sort((r,a)=>{let l=n.indexOf(r.kind),g=n.indexOf(a.kind);return(l<0?n.length:l)-(g<0?n.length:g)});return((this.errorMode()??this.formSettingsService.settings().errorMode)===`all`?e:e.slice(0,1)).map(r=>Cn(r,this.errorMessages(),this.formSettingsService.settings().errorMessages,this.textAdapter))});fieldControl;id=ke(void 0);label=ke(void 0);placeholder=ke(void 0);tooltip=ke(void 0);hint=ke(void 0);hintEnd=ke(void 0);error=ke(void 0);ariaLabel=ke(void 0);ariaLabelledBy=ke(void 0);ariaDescribedBy=ke(void 0);dataTestId=ke(void 0);name=ke(``);errors=ke([]);invalid=ke(!1);pending=ke(!1);touched=ke(!1);dirty=ke(!1);disabled=ke(!1,{transform:Ge});readonly=ke(!1,{transform:Ge});readOnly=ke(!1,{transform:Ge});hidden=ke(!1,{transform:Ge});required=ke(!1,{transform:Ge});loading=ke(!1,{transform:Ge});disabledReasons=ke([]);submitted=ke(!1);errorMessages=ke({});errorPriority=ke([]);errorPolicy=ke(void 0);errorMode=ke(void 0);appearance=ke(void 0);floatLabel=ke(void 0);hideRequiredMarker=ke(void 0);subscriptSizing=ke(void 0);tooltipOnTruncate=ke(void 0);touch=wk();constructor(){this.fieldControl={controlId:this.controlId,label:this.label,showError:this.showError,errorTexts:this.errorTexts,required:this.effectiveRequired,disabled:this.effectiveDisabled,pending:this.pending,focus:e=>this.focus(e),setDescribedByIds:e=>{this.extraDescriptions().join(` `)!==e.join(` `)&&this.extraDescriptions.set(e)}},er(()=>{this.focusMonitor.monitor(this.nativeElement,!0).pipe(md$1(this.destroyRef)).subscribe(r=>this.keyboardFocused.set(r===`keyboard`)),this.destroyRef.onDestroy(()=>this.focusMonitor.stopMonitoring(this.nativeElement));let e=this.nativeElement.closest(`form`),t=()=>{this.submittedByParent.set(!0),this.commitPendingValue()};e?.addEventListener(`submit`,t,{capture:!0}),this.destroyRef.onDestroy(()=>e?.removeEventListener(`submit`,t,{capture:!0}))}),(this.formGroupDirective??this.ngForm)?.ngSubmit.pipe(md$1(m(me))).subscribe(()=>{this.submittedByParent.set(!0),this.commitPendingValue()})}ngOnInit(){this.ngControl?.control?.events?.pipe(md$1(this.destroyRef)).subscribe(()=>{this.controlVersion.update(e=>e+1)}),this.ngControl?.control?.valueChanges?.pipe(md$1(this.destroyRef)).subscribe(()=>this.clearPendingEdit()),(this.formGroupDirective??this.ngForm)?.form.events.pipe(md$1(this.destroyRef)).subscribe(e=>{e instanceof ri&&this.reset()})}focus(n){this.nativeElement.querySelector(`input:not(:disabled), textarea:not(:disabled), select:not(:disabled), button:not(:disabled)`)?.focus(n)}reset(){this.localTouched.set(!1),this.submittedByParent.set(!1)}markAsTouched(){this.localTouched.set(!0),this.commitPendingValue(`blur`),this.touch.emit()}onControlPointerDown(){this.isReadonly()&&this.keyboardFocused.set(!1)}commitPendingValue(n){}clearPendingEdit(){}static ɵfac=function(e){return new(e||i)};static ɵdir=ue({type:i,hostVars:7,hostBindings:function(e,t){e&1&&br(`pointerdown`,function(){return t.onControlPointerDown()}),e&2&&(Ay(`hidden`,t.hidden()),tm(`display`,t.hidden()?`none`:null),Lr(`bx-readonly`,t.isReadonly())(`is-keyboard-focused`,t.keyboardFocused()))},inputs:{id:[1,`id`],label:[1,`label`],placeholder:[1,`placeholder`],tooltip:[1,`tooltip`],hint:[1,`hint`],hintEnd:[1,`hintEnd`],error:[1,`error`],ariaLabel:[1,`ariaLabel`],ariaLabelledBy:[1,`ariaLabelledBy`],ariaDescribedBy:[1,`ariaDescribedBy`],dataTestId:[1,`dataTestId`],name:[1,`name`],errors:[1,`errors`],invalid:[1,`invalid`],pending:[1,`pending`],touched:[1,`touched`],dirty:[1,`dirty`],disabled:[1,`disabled`],readonly:[1,`readonly`],readOnly:[1,`readOnly`],hidden:[1,`hidden`],required:[1,`required`],loading:[1,`loading`],disabledReasons:[1,`disabledReasons`],submitted:[1,`submitted`],errorMessages:[1,`errorMessages`],errorPriority:[1,`errorPriority`],errorPolicy:[1,`errorPolicy`],errorMode:[1,`errorMode`],appearance:[1,`appearance`],floatLabel:[1,`floatLabel`],hideRequiredMarker:[1,`hideRequiredMarker`],subscriptSizing:[1,`subscriptSizing`],tooltipOnTruncate:[1,`tooltipOnTruncate`]},outputs:{touch:`touch`}})};var Nn=class i extends je{draft=W(void 0);displayedChecked=K(()=>this.draft()??this.checked());checked=l4(!1);labelPosition=ke(`after`);reset(){super.reset(),this.draft.set(void 0)}clearPendingEdit(){this.draft.set(void 0)}commitPendingValue(n){let e=this.draft();e===void 0||n===`blur`&&this.ngControl?.control?.updateOn===`submit`||(this.checked.set(e),this.draft.set(void 0))}onToggle(n){let e=n.target;if(this.disabled()||this.isReadonly()){e.checked=this.checked();return}let t=this.ngControl?.control?.updateOn;t===`blur`||t===`submit`?this.draft.set(e.checked):this.checked.set(e.checked)}onReadonlyClick(n){this.isReadonly()&&n.preventDefault()}onBlur(){this.markAsTouched()}static ɵfac=(()=>{let n;return function(t){return(n||(n=bn(i)))(t||i)}})();static ɵdir=ue({type:i,inputs:{checked:[1,`checked`],labelPosition:[1,`labelPosition`]},outputs:{checked:`checkedChange`},features:[vt$1]})};var ao=[`*`,[[`bx-error`]],[[`bx-hint`]]];var oo=[`*`,`bx-error`,`bx-hint`];var lo=[`ngProjectAs`,`bx-error`,5,[`bx-error`]];var so=[`ngProjectAs`,`bx-hint`,5,[`bx-hint`]];function co(i,n){i&1&&(Os$1(0,`span`,5),XT(1,`*`),ba$1())}var $r=class i extends Nn{indeterminate=l4(!1);clickAction=ke(`check-indeterminate`);emissive=ke(!0);onToggle(n){if(this.clickAction()===`noop`){n.target.checked=this.displayedChecked(),n.target.indeterminate=this.indeterminate();return}super.onToggle(n),this.clickAction()===`check`&&(n.target.indeterminate=this.indeterminate()),!this.disabled()&&!this.isReadonly()&&this.clickAction()===`check-indeterminate`&&this.indeterminate.set(!1)}static ɵfac=(()=>{let n;return function(t){return(n||(n=bn(i)))(t||i)}})();static ɵcmp=$n$1({type:i,selectors:[[`bx-checkbox`]],inputs:{indeterminate:[1,`indeterminate`],clickAction:[1,`clickAction`],emissive:[1,`emissive`]},outputs:{indeterminate:`indeterminateChange`},features:[vt$1],ngContentSelectors:oo,decls:10,vars:35,consts:[[3,`control`,`inline`,`tooltip`,`loading`,`hint`,`hintEnd`,`subscriptSizing`,`forId`],[1,`bx-inline-wrapper`],[`type`,`checkbox`,1,`bx-visually-hidden`,3,`click`,`change`,`blur`,`id`,`disabled`,`required`,`checked`,`indeterminate`],[3,`checked`,`indeterminate`,`invalid`,`disabled`,`emissive`],[1,`bx-inline-label`],[`aria-hidden`,`true`,1,`bx-inline-required`]],template:function(e,t){e&1&&(jy(ao),Os$1(0,`bx-form-field`,0)(1,`label`,1)(2,`input`,2),br(`click`,function(a){return t.onReadonlyClick(a)})(`change`,function(a){return t.onToggle(a)})(`blur`,function(){return t.onBlur()}),ba$1(),Cy(3,`bx-checkbox-indicator`,3),Os$1(4,`span`,4),Py(5),XT(6),bT(7,co,2,0,`span`,5),ba$1()(),Py(8,1,lo),Py(9,2,so),ba$1()),e&2&&(fa$1(`control`,t.fieldControl)(`inline`,!0)(`tooltip`,t.tooltip())(`loading`,t.loading())(`hint`,t.hint())(`hintEnd`,t.hintEnd())(`subscriptSizing`,t.resolvedSubscriptSizing())(`forId`,t.controlId()),Ul$1(),Lr(`is-disabled`,t.disabled())(`is-readonly`,t.isReadonly())(`is-keyboard-focused`,t.keyboardFocused())(`label-before`,t.labelPosition()===`before`),Ul$1(),fa$1(`id`,t.controlId())(`disabled`,t.disabled())(`required`,t.effectiveRequired())(`checked`,t.displayedChecked())(`indeterminate`,t.indeterminate()),Ro$1(`name`,t.name()||null)(`data-testid`,t.dataTestId())(`aria-label`,t.ariaLabel())(`aria-labelledby`,t.ariaLabelledBy())(`aria-describedby`,t.describedBy())(`aria-invalid`,t.showError())(`aria-readonly`,t.isReadonly()),Ul$1(),fa$1(`checked`,t.displayedChecked())(`indeterminate`,t.indeterminate())(`invalid`,t.showError())(`disabled`,t.disabled())(`emissive`,t.emissive()),Ul$1(3),rm(``,t.resolvedLabel(),` `),Ul$1(),gT(t.effectiveRequired()&&!t.resolvedHideRequiredMarker()?7:-1))},dependencies:[Y,Sn],styles:[`
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
}`]})};var Kr=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵcmp=$n$1({type:i,selectors:[[`ng-component`]],hostAttrs:[`cdk-text-field-style-loader`,``],decls:0,vars:0,template:function(t,r){},styles:[`textarea.cdk-textarea-autosize {
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
`],encapsulation:2})}return i})();var bo={passive:!0};var po=(()=>{class i{_platform=m(st);_ngZone=m(ce);_renderer=m(It$1).createRenderer(null,null);_styleLoader=m(Po$1);_monitoredElements=/* @__PURE__ */ new Map;monitor(e){if(!this._platform.isBrowser)return vi$1;this._styleLoader.load(Kr);let t=zs$2(e),r=this._monitoredElements.get(t);if(r)return r.subject;let a=new xe,l=`cdk-text-field-autofilled`,g=w=>{w.animationName===`cdk-text-field-autofill-start`&&!t.classList.contains(l)?(t.classList.add(l),this._ngZone.run(()=>a.next({target:w.target,isAutofilled:!0}))):w.animationName===`cdk-text-field-autofill-end`&&t.classList.contains(l)&&(t.classList.remove(l),this._ngZone.run(()=>a.next({target:w.target,isAutofilled:!1})))},y=this._ngZone.runOutsideAngular(()=>(t.classList.add(`cdk-text-field-autofill-monitored`),this._renderer.listen(t,`animationstart`,g,bo)));return this._monitoredElements.set(t,{subject:a,unlisten:y}),a}stopMonitoring(e){let t=zs$2(e),r=this._monitoredElements.get(t);r&&(r.unlisten(),r.subject.complete(),t.classList.remove(`cdk-text-field-autofill-monitored`),t.classList.remove(`cdk-text-field-autofilled`),this._monitoredElements.delete(t))}ngOnDestroy(){this._monitoredElements.forEach((e,t)=>this.stopMonitoring(t))}static ɵfac=function(t){return new(t||i)};static ɵprov=J({token:i,factory:i.ɵfac})}return i})();var vt=(()=>{class i{_elementRef=m(ye);_autofillMonitor=m(po);cdkAutofill=new Te$1;ngOnInit(){this._autofillMonitor.monitor(this._elementRef).subscribe(e=>this.cdkAutofill.emit(e))}ngOnDestroy(){this._autofillMonitor.stopMonitoring(this._elementRef)}static ɵfac=function(t){return new(t||i)};static ɵdir=ue({type:i,selectors:[[``,`cdkAutofill`,``]],outputs:{cdkAutofill:`cdkAutofill`}})}return i})();var Zr=(()=>{class i{_elementRef=m(ye);_platform=m(st);_ngZone=m(ce);_renderer=m(Rt$1);_resizeEvents=new xe;_previousValue;_initialHeight;_destroyed=new xe;_listenerCleanups;_minRows;_maxRows;_enabled=!0;_previousMinRows=-1;_textareaElement;get minRows(){return this._minRows}set minRows(e){this._minRows=GA(e),this._setMinHeight()}get maxRows(){return this._maxRows}set maxRows(e){this._maxRows=GA(e),this._setMaxHeight()}get enabled(){return this._enabled}set enabled(e){this._enabled!==e&&((this._enabled=e)?this.resizeToFitContent(!0):this.reset())}get placeholder(){return this._textareaElement.placeholder}set placeholder(e){this._cachedPlaceholderHeight=void 0,e?this._textareaElement.setAttribute(`placeholder`,e):this._textareaElement.removeAttribute(`placeholder`),this._cacheTextareaPlaceholderHeight()}_cachedLineHeight;_cachedPlaceholderHeight;_document=m(U$1);_hasFocus=!1;_isViewInited=!1;constructor(){m(Po$1).load(Kr),this._textareaElement=this._elementRef.nativeElement}_setMinHeight(){let e=this.minRows&&this._cachedLineHeight?`${this.minRows*this._cachedLineHeight}px`:null;e&&(this._textareaElement.style.minHeight=e)}_setMaxHeight(){let e=this.maxRows&&this._cachedLineHeight?`${this.maxRows*this._cachedLineHeight}px`:null;e&&(this._textareaElement.style.maxHeight=e)}ngAfterViewInit(){this._platform.isBrowser&&(this._initialHeight=this._textareaElement.style.height,this.resizeToFitContent(),this._ngZone.runOutsideAngular(()=>{this._listenerCleanups=[this._renderer.listen(`window`,`resize`,()=>this._resizeEvents.next()),this._renderer.listen(this._textareaElement,`focus`,this._handleFocusEvent),this._renderer.listen(this._textareaElement,`blur`,this._handleFocusEvent)],this._resizeEvents.pipe(is$1(16)).subscribe(()=>{this._cachedLineHeight=this._cachedPlaceholderHeight=void 0,this.resizeToFitContent(!0)})}),this._isViewInited=!0,this.resizeToFitContent(!0))}ngOnDestroy(){this._listenerCleanups?.forEach(e=>e()),this._resizeEvents.complete(),this._destroyed.next(),this._destroyed.complete()}_cacheTextareaLineHeight(){if(this._cachedLineHeight)return;let e=this._textareaElement.cloneNode(!1),t=e.style;e.rows=1,t.position=`absolute`,t.visibility=`hidden`,t.border=`none`,t.padding=`0`,t.height=``,t.minHeight=``,t.maxHeight=``,t.top=t.bottom=t.left=t.right=`auto`,t.overflow=`hidden`,this._textareaElement.parentNode.appendChild(e),this._cachedLineHeight=e.clientHeight,e.remove(),this._setMinHeight(),this._setMaxHeight()}_measureScrollHeight(){let e=this._textareaElement,t=e.style.marginBottom||``,r=this._platform.FIREFOX,a=this._hasFocus,l=r?`cdk-textarea-autosize-measuring-firefox`:`cdk-textarea-autosize-measuring`;a&&(e.style.marginBottom=`${e.clientHeight}px`),e.classList.add(l);let g=e.scrollHeight-4;return e.classList.remove(l),a&&(e.style.marginBottom=t),g}_cacheTextareaPlaceholderHeight(){if(!this._isViewInited||this._cachedPlaceholderHeight!=null)return;if(!this.placeholder){this._cachedPlaceholderHeight=0;return}let e=this._textareaElement.value;this._textareaElement.value=this._textareaElement.placeholder,this._cachedPlaceholderHeight=this._measureScrollHeight(),this._textareaElement.value=e}_handleFocusEvent=e=>{this._hasFocus=e.type===`focus`};ngDoCheck(){this._platform.isBrowser&&this.resizeToFitContent()}resizeToFitContent(e=!1){if(!this._enabled||(this._cacheTextareaLineHeight(),this._cacheTextareaPlaceholderHeight(),!this._cachedLineHeight))return;let t=this._elementRef.nativeElement,r=t.value;if(!e&&this._minRows===this._previousMinRows&&r===this._previousValue)return;let a=this._measureScrollHeight(),l=Math.max(a,this._cachedPlaceholderHeight||0);t.style.height=`${l}px`,this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame<`u`?requestAnimationFrame(()=>this._scrollToCaretPosition(t)):setTimeout(()=>this._scrollToCaretPosition(t))}),this._previousValue=r,this._previousMinRows=this._minRows}reset(){this._initialHeight!==void 0&&(this._textareaElement.style.height=this._initialHeight)}_noopInputHandler(){}_scrollToCaretPosition(e){let{selectionStart:t,selectionEnd:r}=e;!this._destroyed.isStopped&&this._hasFocus&&e.setSelectionRange(t,r)}static ɵfac=function(t){return new(t||i)};static ɵdir=ue({type:i,selectors:[[`textarea`,`cdkTextareaAutosize`,``]],hostAttrs:[`rows`,`1`,1,`cdk-textarea-autosize`],hostBindings:function(t,r){t&1&&br(`input`,function(){return r._noopInputHandler()})},inputs:{minRows:[0,`cdkAutosizeMinRows`,`minRows`],maxRows:[0,`cdkAutosizeMaxRows`,`maxRows`],enabled:[2,`cdkTextareaAutosize`,`enabled`,Ge],placeholder:`placeholder`},exportAs:[`cdkTextareaAutosize`]})}return i})();var Qr=Symbol(`FIELD_TREE`);var ai=0;function go(){return ai}function $e(i,n){return(...e)=>{try{return ai=n,i(...e)}finally{ai=0}}}function mo(i){return!i}function Gr(i){return i}function Re(i){return Array.isArray(i)}function _t(i){return(typeof i==`object`||typeof i==`function`)&&i!=null}var Je=Symbol();var Pt=Symbol();var jn=class{predicates;fns=[];constructor(n){this.predicates=n}push(n){this.fns.push(Ur(this.predicates,n))}mergeIn(n){let e=this.predicates?n.fns.map(t=>Ur(this.predicates,t)):n.fns;this.fns.push(...e)}hasRules(){return this.fns.length>0}};var St=class extends jn{get defaultValue(){return!1}compute(n){return this.fns.some(e=>{let t=e(n);return t&&t!==Pt})}};var wn=class i extends jn{ignore;static ignoreNull(n){return new i(n,e=>e===null)}constructor(n,e){super(n),this.ignore=e}get defaultValue(){return[]}compute(n){return this.fns.reduce((e,t)=>{let r=t(n);return r===void 0||r===Pt?e:Re(r)?[...e,...this.ignore?r.filter(a=>!this.ignore(a)):r]:this.ignore&&this.ignore(r)?e:[...e,r]},[])}};var oi=class extends wn{constructor(n){super(n,void 0)}};var li=class extends jn{key;get defaultValue(){return this.key.reducer.getInitial()}constructor(n,e){super(n),this.key=e}compute(n){if(this.fns.length===0)return this.key.reducer.getInitial();let e=this.key.reducer.getInitial();for(let t=0;t<this.fns.length;t++){let r=this.fns[t](n);r!==Pt&&(e=this.key.reducer.reduce(e,r))}return e}};function Ur(i,n){return i.length===0?n:e=>{for(let t of i){let r=e.stateOf(t.path),a=le(r.structure.pathKeys).length-t.depth;for(let l=0;l<a;l++)r=r.structure.parent;if(!t.fn(r.context))return Pt}return n(e)}}var On=class{predicates;hidden;disabledReasons;readonly;syncErrors;syncTreeErrors;asyncErrors;metadata=/* @__PURE__ */ new Map;constructor(n){this.predicates=n,this.hidden=new St(n),this.disabledReasons=new oi(n),this.readonly=new St(n),this.syncErrors=wn.ignoreNull(n),this.syncTreeErrors=wn.ignoreNull(n),this.asyncErrors=wn.ignoreNull(n)}hasAnyLogic(){return this.hidden.hasRules()||this.disabledReasons.hasRules()||this.readonly.hasRules()||this.syncErrors.hasRules()||this.syncTreeErrors.hasRules()||this.asyncErrors.hasRules()||this.metadata.size>0}hasMetadata(n){return this.metadata.has(n)}hasMetadataKeys(){return this.metadata.size>0}getMetadataKeys(){return this.metadata.keys()}getMetadata(n){return this.metadata.has(n)||this.metadata.set(n,new li(this.predicates,n)),this.metadata.get(n)}mergeIn(n){this.hidden.mergeIn(n.hidden),this.disabledReasons.mergeIn(n.disabledReasons),this.readonly.mergeIn(n.readonly),this.syncErrors.mergeIn(n.syncErrors),this.syncTreeErrors.mergeIn(n.syncTreeErrors),this.asyncErrors.mergeIn(n.asyncErrors);for(let e of n.getMetadataKeys()){let t=n.metadata.get(e);this.getMetadata(e).mergeIn(t)}}};var Ct=class{depth;constructor(n){this.depth=n}build(){return new Mt(this,[],0)}};var Pn=class i extends Ct{constructor(n){super(n)}current;all=[];addHiddenRule(n){this.getCurrent().addHiddenRule(n)}addDisabledReasonRule(n){this.getCurrent().addDisabledReasonRule(n)}addReadonlyRule(n){this.getCurrent().addReadonlyRule(n)}addSyncErrorRule(n){this.getCurrent().addSyncErrorRule(n)}addSyncTreeErrorRule(n){this.getCurrent().addSyncTreeErrorRule(n)}addAsyncErrorRule(n){this.getCurrent().addAsyncErrorRule(n)}addMetadataRule(n,e){this.getCurrent().addMetadataRule(n,e)}getChild(n){if(n===Je){let e=this.getCurrent().children;e.size>(e.has(Je)?1:0)&&(this.current=void 0)}return this.getCurrent().getChild(n)}hasLogic(n){return this===n?!0:this.all.some(({builder:e})=>e.hasLogic(n))}hasRules(){return this.all.length>0}anyChildHasLogic(){return this.all.some(({builder:n})=>n.anyChildHasLogic())}mergeIn(n,e){e?this.all.push({builder:n,predicate:{fn:$e(e.fn,this.depth),path:e.path}}):this.all.push({builder:n}),this.current=void 0}getCurrent(){return this.current===void 0&&(this.current=new $n(this.depth),this.all.push({builder:this.current})),this.current}static newRoot(){return new i(0)}};var $n=class extends Ct{logic=new On([]);children=/* @__PURE__ */ new Map;constructor(n){super(n)}addHiddenRule(n){this.logic.hidden.push($e(n,this.depth))}addDisabledReasonRule(n){this.logic.disabledReasons.push($e(n,this.depth))}addReadonlyRule(n){this.logic.readonly.push($e(n,this.depth))}addSyncErrorRule(n){this.logic.syncErrors.push($e(n,this.depth))}addSyncTreeErrorRule(n){this.logic.syncTreeErrors.push($e(n,this.depth))}addAsyncErrorRule(n){this.logic.asyncErrors.push($e(n,this.depth))}addMetadataRule(n,e){this.logic.getMetadata(n).push($e(e,this.depth))}getChild(n){return this.children.has(n)||this.children.set(n,new Pn(this.depth+1)),this.children.get(n)}hasLogic(n){return this===n}hasRules(){return this.logic.hasAnyLogic()||this.children.size>0}anyChildHasLogic(){for(let n of this.children.values())if(n.hasRules())return!0;return!1}};var Mt=class i{builder;predicates;depth;logic;constructor(n,e,t){this.builder=n,this.predicates=e,this.depth=t,this.logic=n?ho(n,e,t):new On([])}getChild(n){let e=this.builder?Jr(this.builder,n):[];if(e.length===0)return new i(void 0,[],this.depth+1);if(e.length===1){let{builder:t,predicates:r}=e[0];return new i(t,[...this.predicates,...r.map(a=>di(a,this.depth))],this.depth+1)}else return new si(e.map(({builder:r,predicates:a})=>new i(r,[...this.predicates,...a.map(l=>di(l,this.depth))],this.depth+1)))}hasLogic(n){return this.builder?this.builder.hasLogic(n):!1}hasRules(){return this.builder?this.builder.hasRules():!1}anyChildHasLogic(){return this.builder?this.builder.anyChildHasLogic():!1}};var si=class i{all;logic;constructor(n){this.all=n,this.logic=new On([]);for(let e of n)this.logic.mergeIn(e.logic)}getChild(n){return new i(this.all.flatMap(e=>e.getChild(n)))}hasLogic(n){return this.all.some(e=>e.hasLogic(n))}hasRules(){return this.all.some(n=>n.hasRules())}anyChildHasLogic(){return this.all.some(n=>n.anyChildHasLogic())}};function Jr(i,n){if(i instanceof Pn)return i.all.flatMap(({builder:e,predicate:t})=>{let r=Jr(e,n);return t?r.map(({builder:a,predicates:l})=>({builder:a,predicates:[...l,t]})):r});if(i instanceof $n)return[...n!==Je&&i.children.has(Je)?[{builder:i.getChild(Je),predicates:[]}]:[],...i.children.has(n)?[{builder:i.getChild(n),predicates:[]}]:[]];throw new P(1909,!1)}function ho(i,n,e){let t=new On(n);if(i instanceof Pn){let r=i.all.map(({builder:a,predicate:l})=>new Mt(a,l?[...n,di(l,e)]:n,e));for(let a of r)t.mergeIn(a.logic)}else if(i instanceof $n)t.mergeIn(i.logic);else throw new P(1909,!1);return t}function di(i,n){return s(r({},i),{depth:n})}var ea=Symbol(`PATH`);var Me=class i{keys;parent;keyInParent;root;children=/* @__PURE__ */ new Map;fieldPathProxy=new Proxy(this,fo);logicBuilder;constructor(n,e,t,r){this.keys=n,this.parent=t,this.keyInParent=r,this.root=e??this,t||(this.logicBuilder=Pn.newRoot())}get builder(){return this.logicBuilder?this.logicBuilder:this.parent.builder.getChild(this.keyInParent)}getChild(n){return this.children.has(n)||this.children.set(n,new i([...this.keys,n],this.root,this,n)),this.children.get(n)}mergeIn(n,e){let t=n.compile();this.builder.mergeIn(t.builder,e)}static unwrapFieldPath(n){return n[ea]}static newRoot(){return new i([],void 0,void 0,void 0)}};var fo={get(i,n){return n===ea?i:i.getChild(n).fieldPathProxy}};var yt;var Wn=/* @__PURE__ */ new Map;var Nt=class i{schemaFn;constructor(n){this.schemaFn=n}compile(){if(Wn.has(this))return Wn.get(this);let n=Me.newRoot();Wn.set(this,n);let e=yt;try{yt=n,this.schemaFn(n.fieldPathProxy)}finally{yt=e}return n}static create(n){return n instanceof i?n:new i(n)}static rootCompile(n){try{return Wn.clear(),n===void 0?Me.newRoot():n instanceof i?n.compile():new i(n).compile()}finally{Wn.clear()}}};function xo(i){return i instanceof Nt||typeof i==`function`}function en(i){if(yt!==Me.unwrapFieldPath(i).root)throw new P(1908,!1)}function Te(i,n,e){return en(i),Me.unwrapFieldPath(i).builder.addMetadataRule(n,e),n}var ze={list(){return{reduce:(i,n)=>n===void 0?i:[...i,n],getInitial:()=>[]}},min(){return{reduce:(i,n)=>i===void 0||n===void 0?i??n:n<i?n:i,getInitial:()=>{}}},max(){return{reduce:(i,n)=>i===void 0||n===void 0?i??n:n>i?n:i,getInitial:()=>{}}},or(){return{reduce:(i,n)=>i||n,getInitial:()=>!1}},and(){return{reduce:(i,n)=>i&&n,getInitial:()=>!0}},override:vo};function vo(i){return{reduce:(n,e)=>e,getInitial:()=>i?.()}}var kt=Symbol(`IS_ASYNC_VALIDATION_RESOURCE`);var Kn=class{reducer;create;brand;[kt];constructor(n,e){this.reducer=n,this.create=e}};function Ne(i){return new Kn(i??ze.override())}function na(i,n){return new Kn(n??ze.override(),i)}function vi(){return Ne()}var yi=Ne(ze.or());var _i=vi();var Si=Ne(ze.max());var Ci=vi();var Mi=Ne(ze.min());var Ni=Ne(ze.max());var ta=Ne(ze.min());var ia=Ne(ze.list());function Ce(i,n){if(i===n)return!0;if(!i||!n||i.length!==n.length)return!1;for(let e=0;e<i.length;e++)if(!Object.is(i[e],n[e]))return!1;return!0}function yo(i){return i.errors().length>0?`invalid`:i.pending()?`unknown`:`valid`}var ci=class{node;constructor(n){this.node=n}rawSyncTreeErrors=K(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.syncTreeErrors.compute(this.node.context),...this.node.structure.parent?.validationState.rawSyncTreeErrors()??[]],{equal:Ce});syncErrors=K(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.syncErrors.compute(this.node.context),...this.syncTreeErrors(),..._o(this.node.submitState.submissionErrors())],{equal:Ce});syncValid=K(()=>this.shouldSkipValidation()?!0:this.node.structure.reduceChildren(this.syncErrors().length===0,(n,e)=>e&&n.validationState.syncValid(),mo));syncTreeErrors=K(()=>this.rawSyncTreeErrors().filter(n=>n.fieldTree===this.node.fieldTree),{equal:Ce});rawAsyncErrors=K(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.asyncErrors.compute(this.node.context),...this.node.structure.parent?.validationState.rawAsyncErrors()??[]],{equal:Ce});asyncErrors=K(()=>this.shouldSkipValidation()?[]:this.rawAsyncErrors().filter(n=>n===`pending`||n.fieldTree===this.node.fieldTree),{equal:Ce});parseErrors=K(()=>this.node.formFieldBindings().flatMap(n=>n.parseErrors()),{equal:Ce});errors=K(()=>[...this.parseErrors(),...this.syncErrors(),...this.asyncErrors().filter(n=>n!==`pending`)],{equal:Ce});errorSummary=K(()=>{let n=this.node.structure.reduceChildren(this.errors(),(e,t)=>[...t,...e.errorSummary()]);return le(()=>n.sort(So)),n},{equal:Ce});pending=K(()=>this.node.structure.reduceChildren(this.asyncErrors().includes(`pending`),(n,e)=>e||n.validationState.pending()));status=K(()=>{if(this.shouldSkipValidation())return`valid`;let n=yo(this);return this.node.structure.reduceChildren(n,(e,t)=>t===`invalid`||e.validationState.status()===`invalid`?`invalid`:t===`unknown`||e.validationState.status()===`unknown`?`unknown`:`valid`,e=>e===`invalid`)});valid=K(()=>this.status()===`valid`);invalid=K(()=>this.status()===`invalid`);shouldSkipValidation=K(()=>this.node.hidden()||this.node.disabled()||this.node.readonly()||this.node.structure.isOrphaned())};function _o(i){return i===void 0?[]:Re(i)?i:[i]}function Gn(i,n){if(Re(i))for(let e of i)e.fieldTree??=n;else i&&(i.fieldTree??=n);return i}function Xr(i){return i.formField?i.formField.element:i.fieldTree().formFieldBindings().reduce((n,e)=>!n||!e.element?n??e.element:n.compareDocumentPosition(e.element)&Node.DOCUMENT_POSITION_PRECEDING?e.element:n,void 0)}function So(i,n){let e=Xr(i),t=Xr(n);return e===t?0:e===void 0||t===void 0?e===void 0?1:-1:e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_PRECEDING?1:-1}var Tt=Ne();var ui=class{node;cache=/* @__PURE__ */ new WeakMap;constructor(n){this.node=n,this.fieldTreeOf=this.fieldTreeOf.bind(this),this.stateOf=this.stateOf.bind(this)}resolve(n){if(!this.cache.has(n)){let e=K(()=>{let t=Me.unwrapFieldPath(n),r=this.node,a=go();for(;a>0||!r.structure.logic.hasLogic(t.root.builder);)if(a--,r=r.structure.parent,r===void 0)throw new P(1900,!1);for(let l of t.keys)if(r=r.structure.getChild(l),r===void 0)throw new P(1901,!1);return r.fieldTree});this.cache.set(n,e)}return this.cache.get(n)()}get fieldTree(){return this.node.fieldProxy}get state(){return this.node}get value(){return this.node.structure.value}get key(){return this.node.structure.keyInParent}get pathKeys(){return this.node.structure.pathKeys}index=K(()=>{let n=this.key();if(!Re(le(this.node.structure.parent.value)))throw new P(1906,!1);return Number(n)});fieldTreeOf(n){return this.resolve(n)}stateOf(n){return this.resolve(n)()}valueOf=n=>{let e=this.resolve(n)().value();if(e instanceof uu)throw new P(1907,!1);return e}};var bi=class{node;metadata=/* @__PURE__ */ new Map;constructor(n){this.node=n}runMetadataCreateLifecycle(){if(!this.node.logicNode.logic.hasMetadataKeys())return;let n=dm();n&&gn(!1);try{le(()=>Gc$1(this.node.structure.injector,()=>{for(let e of this.node.logicNode.logic.getMetadataKeys())if(e.create){let t=this.node.logicNode.logic.getMetadata(e),r=e.create(this.node,K(()=>t.compute(this.node.context)));this.metadata.set(e,r)}}))}finally{n&&gn(!0)}}get(n){if(this.has(n)&&!this.metadata.has(n)){if(n.create)throw new P(1912,!1);let e=this.node.logicNode.logic.getMetadata(n);this.metadata.set(n,K(()=>e.compute(this.node.context)))}return this.metadata.get(n)}has(n){return this.node.logicNode.logic.hasMetadata(n)}};var Co={get(i,n,e){if(n===Qr)return!0;let t=i(),r=t.structure.getChild(n);if(r!==void 0)return r.fieldTree;let a=le(t.value);if(Re(a)){if(n===`length`)return t.value().length;if(n===Symbol.iterator)return()=>(t.value(),Array.prototype[Symbol.iterator].apply(t.fieldTree))}if(_t(a)&&n===Symbol.iterator)return function*(){for(let l in e)yield[l,e[l]]}},getOwnPropertyDescriptor(i,n){let e=le(i().value),t=Reflect.getOwnPropertyDescriptor(e,n);return t&&!t.configurable&&(t.configurable=!0),t},ownKeys(i){let n=le(i().value);return typeof n==`object`&&n!==null?Reflect.ownKeys(n):[]}};function Mo(i,n){let e=K(()=>i()[n()]);return e[Ue]=i[Ue],e.set=t=>{Object.is(le(e),t)||i.update(r=>No(r,t,n()))},e.update=t=>{e.set(t(le(e)))},e.asReadonly=()=>e,e}function No(i,n,e){if(Re(i)){let t=[...i];return t[e]=n,t}else return s(r({},i),{[e]:n})}var Tn=Symbol(``);var ra=K(()=>!1);var wt=class{logic;node;createChildNode;identitySymbol=Symbol();_injector=void 0;_anyChildHasLogic;get injector(){return this._injector??=se.create({providers:[],parent:this.fieldManager.injector}),this._injector}constructor(n,e,t){this.logic=n,this.node=e,this.createChildNode=t}children(){this.ensureChildrenMap();let n=this.childrenMap();return n===void 0?[]:Array.from(n.byPropertyKey.values()).map(e=>le(e.reader))}materializedChildren(){let n=this.childrenMap();return n===void 0?[]:Array.from(n.byPropertyKey.values()).map(e=>e.node)}_areChildrenMaterialized(){return le(this.childrenMap)!==void 0}ensureChildrenMap(){this._areChildrenMaterialized()||le(()=>{this.childrenMap.update(n=>this.computeChildrenMap(this.value(),n,!0))})}getChild(n){this.ensureChildrenMap();let e=n.toString(),t=le(this.childrenMap)?.byPropertyKey.get(e)?.reader;return t||(t=this.createReader(e)),t()}reduceChildren(n,e,t){let r=this.childrenMap();if(!r)return n;let a=n;for(let l of r.byPropertyKey.values()){if(t?.(a))break;a=e(le(l.reader),a)}return a}destroy(){this.injector.destroy()}createKeyOrOrphanSignals(n,e,t){if(n===`root`)return{keyInParent:aa,isOrphaned:ra};let r=this.parent,a=t,l=K(()=>{if(r.structure.isOrphaned())return Tn;let w=r.structure.childrenMap();if(!w)return Tn;let R=w.byPropertyKey.get(a);if(R&&R.node===this.node)return a;if(e===void 0)return Tn;for(let[F,q]of w.byPropertyKey)if(q.node===this.node)return a=F;return Tn}),g=K(()=>l()===Tn);return{keyInParent:K(()=>{let w=l();if(w===Tn)throw e===void 0?new P(-1902,!1):new P(1904,!1);return w}),isOrphaned:g}}createChildrenMap(){return nd$1({source:this.value,computation:(n,e)=>this.computeChildrenMap(n,e?.value,!1)})}computeChildrenMap(n,e,t){if(!_t(n)||!t&&e===void 0&&!(this._anyChildHasLogic??=this.logic.anyChildHasLogic()))return;e??={byPropertyKey:/* @__PURE__ */ new Map};let r$2,a=Re(n);e!==void 0&&(a?r$2=wo(e,n,this.identitySymbol):r$2=Oo(e,n));for(let l of Object.keys(n)){let g,y=n[l];if(y===void 0){e.byPropertyKey.has(l)&&(r$2??=r({},e),r$2.byPropertyKey.delete(l));continue}a&&_t(y)&&!Re(y)&&(g=y[this.identitySymbol]??=Symbol(``));let w;g&&(e.byTrackingKey?.has(g)||(r$2??=r({},e),r$2.byTrackingKey??=/* @__PURE__ */ new Map,r$2.byTrackingKey.set(g,this.createChildNode(l,g,a))),w=(r$2??e).byTrackingKey.get(g));let R=e.byPropertyKey.get(l);R===void 0?(r$2??=r({},e),r$2.byPropertyKey.set(l,{reader:this.createReader(l),node:w??this.createChildNode(l,g,a)})):w&&w!==R.node&&(r$2??=r({},e),R.node=w)}return r$2??e}createReader(n){return K(()=>this.childrenMap()?.byPropertyKey.get(n)?.node)}};var pi=class extends wt{fieldManager;value;get parent(){}get root(){return this.node}get pathKeys(){return To}get keyInParent(){return aa}isOrphaned=ra;childrenMap;constructor(n,e,t,r,a){super(e,n,a),this.fieldManager=t,this.value=r,this.childrenMap=this.createChildrenMap()}};var gi=class extends wt{logic;parent;root;pathKeys;keyInParent;value;childrenMap;isOrphaned;get fieldManager(){return this.root.structure.fieldManager}constructor(n,e,t,r,a,l){super(e,n,l),this.logic=e,this.parent=t,this.root=this.parent.structure.root;let g=this.createKeyOrOrphanSignals(`child`,r,a);this.isOrphaned=g.isOrphaned,this.keyInParent=g.keyInParent,this.pathKeys=K(()=>[...t.structure.pathKeys(),this.keyInParent()]),this.value=Mo(this.parent.structure.value,this.keyInParent),this.childrenMap=this.createChildrenMap(),this.fieldManager.structures.add(this)}};var To=K(()=>[]);var aa=K(()=>{throw new P(1905,!1)});function wo(i,n,e){let t,r$3=new Set(i.byPropertyKey.keys()),a=i.byTrackingKey&&new Set(i.byTrackingKey.keys());for(let l=0;l<n.length;l++){let g=n[l];r$3.delete(l.toString()),a&&_t(g)&&Object.hasOwn(g,e)&&a.delete(g[e])}if(r$3.size>0){t??=r({},i);for(let l of r$3)t.byPropertyKey.delete(l)}if(a&&a.size>0){t??=r({},i);for(let l of a)t.byTrackingKey.delete(l)}return t}function Oo(i,n){let e;for(let t of i.byPropertyKey.keys())Object.hasOwn(n,t)||(e??=r({},i),e.byPropertyKey.delete(t));return e}var mi=class{node;selfSubmitting=W(!1);submissionErrors;constructor(n){this.node=n,this.submissionErrors=nd$1({source:this.node.structure.value,computation:()=>[]})}submitting=K(()=>this.selfSubmitting()||(this.node.structure.parent?.submitting()??!1))};var Zn=class{structure;validationState;metadataState;nodeState;submitState;fieldAdapter;controlValue;_context=void 0;get context(){return this._context??=new ui(this)}fieldProxy=new Proxy(()=>this,Co);pathNode;constructor(n){this.pathNode=n.pathNode,this.fieldAdapter=n.fieldAdapter,this.structure=this.fieldAdapter.createStructure(this,n),this.validationState=this.fieldAdapter.createValidationState(this,n),this.nodeState=this.fieldAdapter.createNodeState(this,n),this.metadataState=new bi(this),this.submitState=new mi(this),this.controlValue=this.controlValueSignal(),this.metadataState.runMetadataCreateLifecycle()}focusBoundControl(n){this.getBindingForFocus()?.focus(n)}getBindingForFocus(){return this.formFieldBindings().filter(e=>e.focus!==void 0).reduce(Yr,void 0)||this.structure.children().map(e=>e.getBindingForFocus()).reduce(Yr,void 0)}pendingSync=nd$1({source:()=>this.value(),computation:(n,e)=>{e?.value?.abort()}});get fieldTree(){return this.fieldProxy}get logicNode(){return this.structure.logic}get value(){return this.structure.value}get keyInParent(){return this.structure.keyInParent}get errors(){return this.validationState.errors}get parseErrors(){return this.validationState.parseErrors}get errorSummary(){return this.validationState.errorSummary}get pending(){return this.validationState.pending}get valid(){return this.validationState.valid}get invalid(){return this.validationState.invalid}get dirty(){return this.nodeState.dirty}get touched(){return this.nodeState.touched}get disabled(){return this.nodeState.disabled}get disabledReasons(){return this.nodeState.disabledReasons}get hidden(){return this.nodeState.hidden}get readonly(){return this.nodeState.readonly}get formFieldBindings(){return this.nodeState.formFieldBindings}get submitting(){return this.submitState.submitting}get name(){return this.nodeState.name}get max(){let n=this.metadata(Ci)?.();return n?this.metadata(n):void 0}get maxLength(){return this.metadata(ta)}get min(){let n=this.metadata(_i)?.();return n?this.metadata(n):void 0}get minLength(){return this.metadata(Ni)}get pattern(){return this.metadata(ia)??Po}get required(){return this.metadata(yi)??ko}metadata(n){return this.metadataState.get(n)}getError(n){return this.errors().find(e=>e.kind===n)}hasMetadata(n){return this.metadataState.has(n)}markAsTouched(n){this.structure.isOrphaned()||le(()=>{this.markAsTouchedInternal(n),this.flushSync()})}markAsTouchedInternal(n){if(!this.structure.isOrphaned()&&!this.validationState.shouldSkipValidation()&&(this.nodeState.markAsTouched(),!n?.skipDescendants))for(let e of this.structure.children())e.markAsTouchedInternal()}markAsDirty(){this.nodeState.markAsDirty()}markAsPristine(){this.nodeState.markAsPristine()}markAsUntouched(){this.nodeState.markAsUntouched()}reset(n){le(()=>this._reset(n))}_reset(n){this.pendingSync()?.abort(),n!==void 0&&this.value.set(n),this.controlValue.rawSet(this.value()),this.nodeState.markAsUntouched(),this.nodeState.markAsPristine();for(let e of this.formFieldBindings())e.reset();for(let e of this.structure.materializedChildren())e._reset()}reloadValidation(){le(()=>this._reloadValidation())}_reloadValidation(){let n=this.logicNode.logic.getMetadataKeys();for(let e of n)e[kt]&&this.metadata(e).reload?.();for(let e of this.structure.children())e._reloadValidation()}controlValueSignal(){let n=nd$1(this.value);n.rawSet=n.set,n.set=t=>{n.rawSet(t),this.markAsDirty(),this.debounceSync()};let e=n.update;return n.update=t=>{e(t),this.markAsDirty(),this.debounceSync()},n}sync(){this.value.set(this.controlValue())}flushSync(){let n=this.pendingSync();n&&!n.signal.aborted&&(n.abort(),this.sync())}async debounceSync(){let n=le(()=>(this.pendingSync()?.abort(),this.nodeState.debouncer()));if(n){let e=new AbortController,t=n(e.signal);if(t&&(this.pendingSync.set(e),await t,e.signal.aborted))return}this.structure.isOrphaned()||this.sync()}static newRoot(n,e,t,r){return r.newRoot(n,e,t,r)}createStructure(n){return n.kind===`root`?new pi(this,n.logic,n.fieldManager,n.value,this.newChild.bind(this)):new gi(this,n.logic,n.parent,n.identityInParent,n.initialKeyInParent,this.newChild.bind(this))}newChild(n,e,t){let r,a;return t?(r=this.pathNode.getChild(Je),a=this.structure.logic.getChild(Je)):(r=this.pathNode.getChild(n),a=this.structure.logic.getChild(n)),this.fieldAdapter.newChild({kind:`child`,parent:this,pathNode:r,logic:a,initialKeyInParent:n,identityInParent:e,fieldAdapter:this.fieldAdapter})}};var Po=K(()=>[]);var ko=K(()=>!1);function Yr(i,n){return i?n&&i.element.compareDocumentPosition(n.element)&Node.DOCUMENT_POSITION_PRECEDING?n:i:n}var hi=class{node;selfTouched=W(!1);selfDirty=W(!1);markAsTouched(){this.selfTouched.set(!0)}markAsDirty(){this.selfDirty.set(!0)}markAsPristine(){this.selfDirty.set(!1)}markAsUntouched(){this.selfTouched.set(!1)}formFieldBindings=W([]);constructor(n){this.node=n}dirty=K(()=>{let n=this.selfDirty()&&!this.isNonInteractive();return this.node.structure.reduceChildren(n,(e,t)=>t||e.nodeState.dirty(),Gr)});touched=K(()=>{let n=this.selfTouched()&&!this.isNonInteractive();return this.node.structure.reduceChildren(n,(e,t)=>t||e.nodeState.touched(),Gr)});disabledReasons=K(()=>[...this.node.structure.parent?.nodeState.disabledReasons()??[],...this.node.logicNode.logic.disabledReasons.compute(this.node.context)],{equal:Ce});disabled=K(()=>!!this.disabledReasons().length);readonly=K(()=>(this.node.structure.parent?.nodeState.readonly()||this.node.logicNode.logic.readonly.compute(this.node.context))??!1);hidden=K(()=>(this.node.structure.parent?.nodeState.hidden()||this.node.logicNode.logic.hidden.compute(this.node.context))??!1);name=K(()=>{let n=this.node.structure.parent;return n?`${n.name()}.${this.node.structure.keyInParent()}`:this.node.structure.fieldManager.rootName});debouncer=K(()=>{if(this.node.logicNode.logic.hasMetadata(Tt)){let e=this.node.logicNode.logic.getMetadata(Tt).compute(this.node.context);if(e)return t=>e(this.node.context,t)}return this.node.structure.parent?.nodeState.debouncer?.()});isNonInteractive=K(()=>this.hidden()||this.disabled()||this.readonly())};var fi=class{newRoot(n,e,t,r){return new Zn({kind:`root`,fieldManager:n,value:e,pathNode:t,logic:t.builder.build(),fieldAdapter:r})}newChild(n){return new Zn(n)}createNodeState(n){return new hi(n)}createValidationState(n){return new ci(n)}createStructure(n,e){return n.createStructure(e)}};var xi=class{injector;rootName;submitOptions;constructor(n,e,t){this.injector=n,this.rootName=e??`${this.injector.get(Ar)}.form${Do++}`,this.submitOptions=t}structures=/* @__PURE__ */ new Set;createFieldManagementEffect(n){tt(()=>{let e=/* @__PURE__ */ new Set;this.markStructuresLive(n,e);for(let t of this.structures)e.has(t)||(this.structures.delete(t),le(()=>t.destroy()))},{injector:this.injector})}markStructuresLive(n,e){e.add(n);for(let t of n.children())this.markStructuresLive(t.structure,e)}};var Do=0;var oa=new T(``);function Io(i){let n,e,t;return i.length===3?[n,e,t]=i:i.length===2?xo(i[1])?[n,e]=i:[n,t]=i:[n]=i,[n,e,t]}function Eo(...i){let[n,e,t]=Io(i),r=t?.injector??m(se),a=Gc$1(r,()=>Nt.rootCompile(e)),l=new xi(r,t?.name,t?.submission),g=t?.adapter??new fi,y=Zn.newRoot(l,n,a,g);l.createFieldManagementEffect(y.structure);let{experimentalWebMcpTool:w}=t??{};if(w){let R=Gc$1(r,()=>m(oa,{optional:!0}));R&&Gc$1(r,()=>R(y.fieldTree,{name:w.name,description:w.description,annotations:w.annotations}))}return y.fieldTree}async function la(i,n){let e=le(i);if(le(e.submitState.submitting))return!1;let t=n===void 0?e.structure.root.fieldProxy:i,r={root:e.structure.root.fieldProxy,submitted:i};n=typeof n==`function`?{action:n}:n??e.structure.fieldManager.submitOptions;let a=n?.action;if(!a)throw new P(1915,!1);e.markAsTouched();let l=n?.onInvalid,g=Ro(e,n?.ignoreValidators);try{if(g){e.submitState.selfSubmitting.set(!0);let y=await le(()=>a?.(t,r));return y&&Lo(e,y),!y||Re(y)&&y.length===0}else le(()=>l?.(t,r));return!1}finally{e.submitState.selfSubmitting.set(!1)}}function Ro(i,n){switch(n){case`all`:return!0;case`none`:return le(i.valid);default:return!le(i.invalid)}}function Lo(i,n){Re(n)||(n=[n]);let e=/* @__PURE__ */ new Map;for(let t of n){let r=Gn(t,i.fieldTree),a=r.fieldTree(),l=e.get(a);l||(l=[],e.set(a,l)),l.push(r)}for(let[t,r]of e)t.submitState.submissionErrors.set(r)}var Ot=class{kind=`compat`;control;fieldTree;context;message;constructor({context:n,kind:e,control:t}){this.context=n,this.kind=e,this.control=t}};function sa(i){if(i.length===0)return null;let n={};for(let e of i)n[e.kind]=e instanceof Ot?e.context:e;return n}function da(i,n){return i===null?[]:Object.entries(i).map(([e,t])=>new Ot({context:t,kind:e,control:n}))}var Ao=new T(``);function vp(i,n){en(i);let e=Me.unwrapFieldPath(i),t;typeof n==`function`||typeof n==`string`?t=n:t=n?.when,e.builder.addDisabledReasonRule(r=>{let a=!0;return typeof t==`string`?a=t:t&&(a=t(r)),typeof a==`string`?{fieldTree:r.fieldTree,message:a}:a?{fieldTree:r.fieldTree}:void 0})}function yp(i,n){en(i);let e=Me.unwrapFieldPath(i),t=typeof n==`function`?n:n?.when??(()=>!0);e.builder.addReadonlyRule(t)}function Vo(i){let n=i;return typeof n.length==`number`?n.length:n.size}function Le(i,n){return i instanceof Function?i(n):i}function Ei(i){return typeof i==`number`?isNaN(i):i===``||i===!1||i==null}function ca(i){return i===void 0?[]:Array.isArray(i)?i:[i]}function Un(i,n){en(i),Me.unwrapFieldPath(i).builder.addSyncErrorRule(t=>Gn(n(t),t.fieldTree))}function Fo(i){return new Ti(i)}function zo(i,n){return new wi(i,n)}function Bo(i,n){return new Oi(i,n)}function Ho(i,n){return new Pi(i,n)}function qo(i){return new ki(i)}var Ze=class{__brand=void 0;kind=``;fieldTree;message;constructor(n){n&&Object.assign(this,n)}};var Ti=class extends Ze{kind=`required`};var wi=class extends Ze{min;kind=`min`;constructor(n,e){super(e),this.min=n}};var Oi=class extends Ze{max;kind=`max`;constructor(n,e){super(e),this.max=n}};var Pi=class extends Ze{minLength;kind=`minLength`;constructor(n,e){super(e),this.minLength=n}};var ki=class extends Ze{kind=`email`};var Dt=class extends Ze{kind=`parse`};var Wo=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;function _p(i,n){Un(i,e=>{if(!(n?.when&&!n.when(e))&&!Ei(e.value())&&!Wo.test(e.value()))return n?.error?Le(n.error,e):qo({message:Le(n?.message,e)})})}function Sp(i,n,e){let t=Ne();Te(i,t,r=>{if(!(e?.when&&!e.when(r)))return typeof n==`function`?n(r):n}),Te(i,Mi,({state:r})=>r.metadata(t)()),Te(i,Ci,()=>Mi),Un(i,r=>{let a=r.value();if(a===null||Number.isNaN(a))return;let l=r.state.metadata(t)();if(!(l===void 0||Number.isNaN(l))&&a>l)return e?.error?Le(e.error,r):Bo(l,{message:Le(e?.message,r)})})}function Cp(i,n,e){let t=Ne();Te(i,t,r=>{if(!(e?.when&&!e.when(r)))return typeof n==`function`?n(r):n}),Te(i,Si,({state:r})=>r.metadata(t)()),Te(i,_i,()=>Si),Un(i,r=>{let a=r.value();if(a===null||Number.isNaN(a))return;let l=r.state.metadata(t)();if(!(l===void 0||Number.isNaN(l))&&a<l)return e?.error?Le(e.error,r):zo(l,{message:Le(e?.message,r)})})}function Mp(i,n,e){let t=Te(i,Ne(),r=>{if(!(e?.when&&!e.when(r)))return typeof n==`number`?n:n(r)});Te(i,Ni,({state:r})=>r.metadata(t)()),Un(i,r=>{if(Ei(r.value()))return;let a=r.state.metadata(t)();if(a!==void 0&&Vo(r.value())<a)return e?.error?Le(e.error,r):Ho(a,{message:Le(e?.message,r)})})}function Np(i,n){let e=Te(i,Ne(),t=>n?.when?n.when(t):!0);Te(i,yi,({state:t})=>t.metadata(e)()),Un(i,t=>{if(t.state.metadata(e)()&&Ei(t.value()))return n?.error?Le(n.error,t):Fo({message:Le(n?.message,t)})})}function Tp(i,n){en(i);let e=Me.unwrapFieldPath(i),t=na((r,a)=>{if(n.debounce!==void 0){let l=m4(()=>a(),n.debounce),g=K(()=>fk(l));return n.factory(g)}return n.factory(a)});t[kt]=!0,Te(i,t,r=>{let l=r.stateOf(i).validationState;if(!(l.shouldSkipValidation()||!l.syncValid())&&!(n.when&&!n.when(r)))return n.params(r)}),e.builder.addAsyncErrorRule(r=>{let a=r.state.metadata(t),l;switch(a.status()){case`idle`:return;case`loading`:case`reloading`:return`pending`;case`resolved`:case`local`:return a.hasValue()?(l=n.onSuccess(a.value(),r),Gn(l,r.fieldTree)):void 0;case`error`:return l=n.onError(a.error(),r),Gn(l,r.fieldTree)}})}function wp(i,n){en(i);let e=Me.unwrapFieldPath(i),t=jo(n);e.builder.addMetadataRule(Tt,()=>t)}function jo(i){return typeof i==`function`?i:i===`blur`?Ko():i>0?$o(i):Zo}function $o(i){return(n,e)=>new Promise(t=>{let r,a=()=>{clearTimeout(r),t()};r=setTimeout(()=>{e.removeEventListener(`abort`,a),t()},i),e.addEventListener(`abort`,a,{once:!0})})}function Ko(){return(i,n)=>new Promise(e=>{n.addEventListener(`abort`,()=>e(),{once:!0})})}function Zo(){}function ga(i,n,e){let t=nd$1({source:i,computation:()=>[],equal:Ce}),r=l=>{let g=e(l);t.set(ca(g.error)),g.value!==void 0&&n(g.value),t.set(ca(g.error))},a=()=>{t.set([])};return{errors:t.asReadonly(),setRawValue:r,reset:a}}function ma(i,n){let{parse:e,format:t}=n,r=ga(i,i.set,e),a=nd$1(()=>t(i())),l=a;l.parseErrors=r.errors;let g=l.set.bind(l),y=m($N,{self:!0,optional:!0});return y&&(y.setParseErrors(r.errors),y.onReset=w=>{r.reset();let R=w!==void 0?w:i();g(t(R))}),l.set=w=>{r.setRawValue(w),g(w)},l.update=w=>{l.set(w(a()))},l}var Di=class{field;constructor(n){this.field=n}control=this;get value(){return this.field().controlValue()}get valid(){return this.field().valid()}get invalid(){return this.field().invalid()}get pending(){return this.field().pending()}get disabled(){return this.field().disabled()}get enabled(){return!this.field().disabled()}get errors(){return sa(this.field().errors())}get pristine(){return!this.field().dirty()}get dirty(){return this.field().dirty()}get touched(){return this.field().touched()}get untouched(){return!this.field().touched()}get status(){if(this.field().disabled())return`DISABLED`;if(this.field().valid())return`VALID`;if(this.field().invalid())return`INVALID`;if(this.field().pending())return`PENDING`;throw new P(1910,!1)}valueAccessor=null;hasValidator(n){return n===ti.required?this.field().required():!1}updateValueAndValidity(){}};var Ii={disabled:`disabled`,disabledReasons:`disabledReasons`,dirty:`dirty`,errors:`errors`,hidden:`hidden`,invalid:`invalid`,max:`max`,maxLength:`maxLength`,min:`min`,minLength:`minLength`,name:`name`,pattern:`pattern`,pending:`pending`,readonly:`readonly`,required:`required`,touched:`touched`};var Go=(()=>{let i={};for(let n of Object.keys(Ii))i[Ii[n]]=n;return i})();function Ri(i,n){return i[Go[n]]?.()}var Li=Object.values(Ii);function It(){return{}}function Ke(i,n,e){return Object.is(i[n],e)?!1:(i[n]=e,!0)}function Uo(i,n,e){let t;if(ha(i)&&e.isBadInput(i))return{error:new Dt};switch(i.type){case`checkbox`:return{value:i.checked};case`number`:case`range`:case`datetime-local`:if(t=le(n),typeof t==`number`||t===null)return{value:i.value===``?null:i.valueAsNumber};break;case`date`:case`month`:case`time`:case`week`:if(t=le(n),t===null||t instanceof Date)return{value:i.valueAsDate};if(typeof t==`number`)return{value:i.valueAsNumber}}if(i.tagName===`INPUT`&&i.type===`text`&&(t??=le(n),typeof t==`number`||t===null)){if(i.value===``)return{value:null};let r=Number(i.value);return Number.isNaN(r)?{error:new Dt}:{value:r}}return{value:i.value}}function ua(i,n){switch(i.type){case`checkbox`:i.checked=n;return;case`radio`:i.checked=n===i.value;return;case`number`:case`range`:case`datetime-local`:if(typeof n==`number`){ba(i,n);return}else if(n===null){i.value=``;return}break;case`date`:case`month`:case`time`:case`week`:if(n===null||n instanceof Date){i.valueAsDate=n;return}else if(typeof n==`number`){ba(i,n);return}}if(i.tagName===`INPUT`&&i.type===`text`){if(typeof n==`number`){i.value=isNaN(n)?``:String(n);return}if(n===null){i.value=``;return}}i.value=n}function ba(i,n){isNaN(n)?i.value=``:i.valueAsNumber=n}function ha(i){return i.tagName===`INPUT`}function Xo(i){return i.type===`date`||i.type===`datetime-local`||i.type===`month`||i.type===`time`||i.type===`week`}function Yo(i,n){let e=i.getUTCFullYear(),t=String(i.getUTCMonth()+1).padStart(2,`0`);if(n===`month`)return`${e}-${t}`;return`${e}-${t}-${String(i.getUTCDate()).padStart(2,`0`)}`}function fa(i,n,e){return n instanceof Date&&(i===`min`||i===`max`)&&(e===`date`||e===`month`)?Yo(n,e):n}function Qo(i,n){i.listenToCustomControlModel(t=>n.state().controlValue.set(t)),i.listenToCustomControlOutput(`touch`,()=>n.state().markAsTouched()),n.registerAsBinding(i.customControl);let e=It();return()=>{let t=n.state(),r=t.controlValue();Ke(e,`controlValue`,r)&&i.setCustomControlModelInput(r);for(let a of Li){let l;if(a===`errors`?l=n.errors():l=Ri(t,a),Ke(e,a,l)&&(i.setInputOnDirectives(a,l),n.elementAcceptsNativeProperty(a)&&!i.customControlHasInput(a))){let g=fa(a,l,n.nativeFormElement.type);BN(n.renderer,n.nativeFormElement,a,g)}}}}function Jo(i){return typeof i==`object`&&i!==null}function el(i,n){let e=It();n.controlValueAccessor.registerOnChange(r=>{e.controlValue=r,n.state().controlValue.set(r)}),n.controlValueAccessor.registerOnTouched(()=>n.state().markAsTouched());let t=n.injector.get(ni,null,{optional:!0,self:!0});if(t){let r;for(let y of t)Jo(y)&&y.registerOnValidatorChange&&(r??=W(0),y.registerOnValidatorChange(()=>{r.update(w=>w+1)}));let a=t.map(y=>typeof y==`function`?y:y.validate.bind(y)),l=ti.compose(a),g=K(()=>{r?.();return da(l?l(n.interopNgControl.control):null,n.interopNgControl.control)});n.parseErrorsSource.set(g)}return n.registerAsBinding({reset:()=>{let r=n.state().value();e.controlValue=r,le(()=>n.controlValueAccessor.writeValue(r))}}),()=>{let r=n.state(),a=r.controlValue();Ke(e,`controlValue`,a)&&le(()=>n.controlValueAccessor.writeValue(a));for(let l of Li){let g=Ri(r,l);if(Ke(e,l,g)){let y=i.setInputOnDirectives(l,g,l===`name`?nl:void 0);l===`disabled`&&n.controlValueAccessor.setDisabledState?le(()=>n.controlValueAccessor.setDisabledState(g)):!y&&n.elementAcceptsNativeProperty(l)&&BN(n.renderer,n.nativeFormElement,l,g)}}}}function nl(i){return i==null}function tl(i,n,e){if(typeof MutationObserver!=`function`)return;let t=new MutationObserver(r=>{r.some(a=>il(a))&&n()});t.observe(i,{attributes:!0,attributeFilter:[`value`],characterData:!0,childList:!0,subtree:!0}),e.onDestroy(()=>t.disconnect())}function il(i){if(i.type===`childList`||i.type===`characterData`){if(i.target instanceof Comment)return!1;for(let n of i.addedNodes)if(!(n instanceof Comment))return!0;for(let n of i.removedNodes)if(!(n instanceof Comment))return!0;return!1}return i.type===`attributes`&&i.target instanceof HTMLOptionElement}function rl(i,n,e,t){let r=!1,a=n.nativeFormElement,l=ga(()=>n.state().value(),F=>n.state().controlValue.set(F),F=>Uo(a,n.state().value,t));e.set(l.errors),n.onReset=()=>{l.reset();let F=n.state().value();R.controlValue=F,ua(a,F)};let g=i.nativeElement,y=()=>l.setRawValue(void 0);g.addEventListener(`input`,y);let w=()=>n.state().markAsTouched();g.addEventListener(`blur`,w),n.destroyRef.onDestroy(()=>{g.removeEventListener(`input`,y),g.removeEventListener(`blur`,w)}),ha(a)&&Xo(a)&&t.watchValidity(n.destroyRef,a,()=>l.setRawValue(void 0)),n.registerAsBinding(),a.tagName===`SELECT`&&tl(a,()=>{r&&(a.value=n.state().controlValue())},n.destroyRef);let R=It();return()=>{let F=n.state();for(let z of Li){let ve=Ri(F,z);if(Ke(R,z,ve)&&(i.setInputOnDirectives(z,ve),n.elementAcceptsNativeProperty(z))){let we=fa(z,ve,a.type);BN(n.renderer,a,z,we)}}let q=F.controlValue(),Z=Ke(R,`controlValue`,q),Be=a.type===`radio`&&Ke(R,`radioValue`,a.value);(Z||Be)&&ua(a,q),r=!0}}var xa=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵprov=V({token:i,factory:e=>al.ɵfac(e),providedIn:`root`})}return i})();var al=(()=>{class i extends xa{document=m(U$1);cspNonce=m(_s$1,{optional:!0});injectedStyles=/* @__PURE__ */ new WeakMap;watchValidity(e,t,r){let a=t.getRootNode();this.injectedStyles.has(a)||this.injectedStyles.set(a,this.createAnimationStyle(a));let l=g=>{let y=g;(y.animationName===`ng-valid`||y.animationName===`ng-invalid`)&&r()};t.addEventListener(`animationstart`,l),e.onDestroy(()=>{t.removeEventListener(`animationstart`,l)})}isBadInput(e){return e.validity?.badInput??!1}createAnimationStyle(e){let t=this.document.createElement(`style`);return this.cspNonce&&(t.nonce=this.cspNonce),t.textContent=`
      @keyframes ng-valid {}
      @keyframes ng-invalid {}
      input:valid, textarea:valid {
        animation: ng-valid 0.001s;
      }
      input:invalid, textarea:invalid {
        animation: ng-invalid 0.001s;
      }
    `,e.nodeType===9?e.head?.appendChild(t):e.appendChild(t),t}ngOnDestroy(){this.injectedStyles.get(this.document)?.remove()}static ɵfac=(()=>{let e;return function(r){return(e||(e=bn(i)))(r||i)}})();static ɵprov=V({token:i,factory:i.ɵfac})}return i})();var ol=Symbol();var pa=new T(``);var Op=(()=>{class i{field=ke.required({alias:`formField`});state=K(()=>this.field()());renderer=m(Rt$1);destroyRef=m(me);injector=m(se);element=m(ye).nativeElement;elementIsNativeFormElement=FN(this.element);elementAcceptsTextualValues=GY(this.element);_elementAcceptsMinMax;nativeFormElement=this.elementIsNativeFormElement?this.element:void 0;focuser=e=>this.element.focus(e);controlValueAccessors=m(qa$1,{optional:!0,self:!0});config=m(Ao,{optional:!0});validityMonitor=m(xa);parseErrorsSource=W(void 0);_interopNgControl;get interopNgControl(){return this._interopNgControl??=new Di(this.state)}parseErrors=K(()=>this.parseErrorsSource()?.().map(e=>s(r({},e),{fieldTree:le(this.state).fieldTree,formField:this}))??[],{equal:Ce});errors=K(()=>this.state().errors().filter(e=>!e.formField||e.formField===this),{equal:Ce});isFieldBinding=!1;resetter=()=>{};parseErrorsResetCallback;setParseErrors(e){this.parseErrorsSource.set(e)}set onReset(e){this.parseErrorsResetCallback=e}get onReset(){return this.parseErrorsResetCallback}get controlValueAccessor(){return!this.controlValueAccessors||this.controlValueAccessors.length===0?this.interopNgControl?.valueAccessor??void 0:ZN(this.interopNgControl,this.controlValueAccessors)??void 0}installClassBindingEffect(){let e=Object.entries(this.config?.classes??{}).map(([r,a])=>[r,K(()=>a(this))]);if(e.length===0)return;let t=It();Sk({write:()=>{if(!this.state().structure.isOrphaned())for(let[r,a]of e){let l=a();Ke(t,r,l)&&(l?this.renderer.addClass(this.element,r):this.renderer.removeClass(this.element,r))}}},{injector:this.injector})}focus(e){this.focuser(e)}reset(){this.resetter(),this.parseErrorsResetCallback?.(this.state().value())}registerAsBinding(e){if(this.isFieldBinding)throw new P(1913,!1);this.isFieldBinding=!0,this.installClassBindingEffect(),e?.focus&&(this.focuser=t=>e.focus(t)),e?.reset&&(this.resetter=()=>e.reset()),tt(t=>{let r=this.state();r.nodeState.formFieldBindings.update(a=>[...a,this]),t(()=>{let a=r.nodeState.formFieldBindings().filter(l=>l!==this);r.nodeState.formFieldBindings.set(a),a.length===0&&!r.structure.isOrphaned()&&r.flushSync()})},{injector:this.injector})}[ol];ɵngControlCreate(e){if(!e.hasPassThrough)if(this.controlValueAccessor)this.ɵngControlUpdate=el(e,this);else if(e.customControl)this.ɵngControlUpdate=Qo(e,this);else if(this.elementIsNativeFormElement)this.ɵngControlUpdate=rl(e,this,this.parseErrorsSource,this.validityMonitor);else throw new P(1914,!1)}ɵngControlUpdate;elementAcceptsNativeProperty(e){if(!this.elementIsNativeFormElement)return!1;switch(e){case`min`:case`max`:return this._elementAcceptsMinMax??=zY(this.element);case`minLength`:case`maxLength`:return this.elementAcceptsTextualValues;case`disabled`:case`required`:case`readonly`:case`name`:return!0;default:return!1}}static ɵfac=function(t){return new(t||i)};static ɵdir=ue({type:i,selectors:[[``,`formField`,``]],inputs:{field:[1,`formField`,`field`]},exportAs:[`formField`],features:[tr([{provide:pa,useExisting:i},{provide:or,useFactory:()=>m(i).interopNgControl},{provide:$N,useFactory:()=>m(pa,{self:!0})}]),pa$1(`formField`)]})}return i})();var Pp=(()=>{class i{fieldTree=ke.required({alias:`formRoot`});onSubmit(e){e.preventDefault(),le(()=>{let t=this.fieldTree();t().structure.fieldManager.submitOptions&&la(t)})}static ɵfac=function(t){return new(t||i)};static ɵdir=ue({type:i,selectors:[[`form`,`formRoot`,``]],hostAttrs:[`novalidate`,``],hostBindings:function(t,r){t&1&&br(`submit`,function(l){return r.onSubmit(l)})},inputs:{fieldTree:[1,`formRoot`,`fieldTree`]}})}return i})();var de=class i extends je{edit=W(void 0);internalValue=K(()=>{let n=this.edit();return n?n.value:this.value()});value=l4(null);reset(){super.reset(),this.edit.set(void 0)}clearPendingEdit(){this.edit.set(void 0)}updateValue(n){if(this.disabled()||this.isReadonly())return;let e=this.ngControl?.control?.updateOn;e===`blur`||e===`submit`?this.edit.set({value:n}):this.value.set(n)}commitPendingValue(n){let e=this.edit();!e||n===`blur`&&this.ngControl?.control?.updateOn===`submit`||(this.value.set(e.value),this.edit.set(void 0))}static ɵfac=(()=>{let n;return function(t){return(n||(n=bn(i)))(t||i)}})();static ɵdir=ue({type:i,inputs:{value:[1,`value`]},outputs:{value:`valueChange`},features:[vt$1]})};function Ai(i){if(i===void 0||i===``)return;let n=Number(i);return Number.isFinite(n)?n:void 0}var ll=[[[``,`bxPrefix`,``]],[[``,`bxSuffix`,``]],[[`bx-error`]],[[`bx-hint`]]];var sl=[`[bxPrefix]`,`[bxSuffix]`,`bx-error`,`bx-hint`];var dl=[`ngProjectAs`,`bx-error`,5,[`bx-error`]];var cl=[`ngProjectAs`,`bx-hint`,5,[`bx-hint`]];function ul(i,n){i&1&&(Os$1(0,`span`,9),XT(1,`*`),ba$1())}function bl(i,n){if(i&1&&(Os$1(0,`label`,3)(1,`span`,8),XT(2),ba$1(),bT(3,ul,2,0,`span`,9),ba$1()),i&2){let e=Ql$1();Ro$1(`for`,e.controlId()),Ul$1(2),Zy(e.resolvedLabel()),Ul$1(),gT(e.effectiveRequired()&&!e.resolvedHideRequiredMarker()?3:-1)}}function pl(i,n){if(i&1){let e=Jb();Os$1(0,`textarea`,10),br(`input`,function(r){Jc$1(e);let a=Ql$1();return el$1(a.onInput(r))})(`focus`,function(){Jc$1(e);let r=Ql$1();return el$1(r.onFocus())})(`blur`,function(){Jc$1(e);let r=Ql$1();return el$1(r.onBlur())})(`compositionstart`,function(){Jc$1(e);let r=Ql$1();return el$1(r.onCompositionStart())})(`compositionend`,function(r){Jc$1(e);let a=Ql$1();return el$1(a.onCompositionEnd(r))})(`cdkAutofill`,function(r){Jc$1(e);let a=Ql$1();return el$1(a.autofilled.set(r.isAutofilled))}),ba$1()}if(i&2){let e=Ql$1();fa$1(`required`,e.effectiveRequired())(`disabled`,e.disabled())(`readOnly`,e.isReadonly())(`value`,e.displayedValue())(`spellcheck`,e.spellcheck())(`rows`,e.rows())(`cdkTextareaAutosize`,e.autosize())(`cdkAutosizeMinRows`,e.minRows())(`cdkAutosizeMaxRows`,e.maxRows()),Ro$1(`id`,e.controlId())(`name`,e.name()||null)(`data-testid`,e.dataTestId())(`aria-label`,e.ariaLabel())(`aria-labelledby`,e.ariaLabelledBy())(`aria-describedby`,e.describedBy())(`aria-invalid`,e.showError())(`aria-busy`,e.pending()||e.loading())(`autocomplete`,e.autocomplete())(`inputmode`,e.inputmode())(`minlength`,e.minLength())(`maxlength`,e.maxLength())(`placeholder`,e.isFloating()||!e.label()?e.resolvedPlaceholder():``)}}function gl(i,n){if(i&1){let e=Jb();Os$1(0,`input`,11),br(`input`,function(r){Jc$1(e);let a=Ql$1();return el$1(a.onInput(r))})(`focus`,function(){Jc$1(e);let r=Ql$1();return el$1(r.onFocus())})(`blur`,function(){Jc$1(e);let r=Ql$1();return el$1(r.onBlur())})(`compositionstart`,function(){Jc$1(e);let r=Ql$1();return el$1(r.onCompositionStart())})(`compositionend`,function(r){Jc$1(e);let a=Ql$1();return el$1(a.onCompositionEnd(r))})(`cdkAutofill`,function(r){Jc$1(e);let a=Ql$1();return el$1(a.autofilled.set(r.isAutofilled))}),ba$1()}if(i&2){let e=Ql$1();fa$1(`required`,e.effectiveRequired())(`disabled`,e.disabled())(`readOnly`,e.isReadonly())(`value`,e.displayedValue())(`spellcheck`,e.spellcheck())(`type`,e.type()),Ro$1(`id`,e.controlId())(`name`,e.name()||null)(`data-testid`,e.dataTestId())(`aria-label`,e.ariaLabel())(`aria-labelledby`,e.ariaLabelledBy())(`aria-describedby`,e.describedBy())(`aria-invalid`,e.showError())(`aria-busy`,e.pending()||e.loading())(`autocomplete`,e.autocomplete())(`inputmode`,e.inputmode())(`minlength`,e.minLength())(`maxlength`,e.maxLength())(`placeholder`,e.isFloating()||!e.label()?e.resolvedPlaceholder():``)(`min`,e.min())(`max`,e.max())(`step`,e.step())(`pattern`,e.pattern()[0]?.source)}}function ml(i,n){if(i&1){let e=Jb();Os$1(0,`div`,7)(1,`button`,12),br(`pointerdown`,function(r){Jc$1(e);let a=Ql$1();return el$1(a.startSpin(-1,r))})(`pointerup`,function(){Jc$1(e);let r=Ql$1();return el$1(r.stopSpin())})(`pointercancel`,function(){Jc$1(e);let r=Ql$1();return el$1(r.stopSpin())})(`pointerleave`,function(){Jc$1(e);let r=Ql$1();return el$1(r.stopSpin())})(`click`,function(r){Jc$1(e);let a=Ql$1();return r.detail===0&&a.startSpin(-1,r),el$1(a.stopSpin())}),Cy(2,`bx-icon`,13),ba$1(),Os$1(3,`button`,12),br(`pointerdown`,function(r){Jc$1(e);let a=Ql$1();return el$1(a.startSpin(1,r))})(`pointerup`,function(){Jc$1(e);let r=Ql$1();return el$1(r.stopSpin())})(`pointercancel`,function(){Jc$1(e);let r=Ql$1();return el$1(r.stopSpin())})(`pointerleave`,function(){Jc$1(e);let r=Ql$1();return el$1(r.stopSpin())})(`click`,function(r){Jc$1(e);let a=Ql$1();return r.detail===0&&a.startSpin(1,r),el$1(a.stopSpin())}),Cy(4,`bx-icon`,14),ba$1()()}if(i&2){let e=Ql$1();Ul$1(),fa$1(`disabled`,e.isSpinDownDisabled()),Ro$1(`aria-label`,e.resolvedDecreaseLabel()),Ul$1(2),fa$1(`disabled`,e.isSpinUpDisabled()),Ro$1(`aria-label`,e.resolvedIncreaseLabel())}}var va=class i extends de{i18n=m(xQ,{optional:!0});editingRaw=W(void 0);badInput=W(!1);labelText=d4(ct);labelTruncated=K(()=>this.labelText()?.truncated()??!1);isFocused=W(!1);autofilled=W(!1);rawValue=ma(this.value,{parse:n=>{if(this.type()!==`number`)return{value:n};let e=n===``?null:Number(n);return this.badInput()||e!==null&&!Number.isFinite(e)?{error:{kind:`parse`}}:{value:e}},format:n=>n?.toString()??``});displayedValue=K(()=>this.editingRaw()??this.rawValue());isSpinDownDisabled=K(()=>this.disabled()||this.isReadonly()||Number(this.value()??0)<=(this.min()??-1/0));isSpinUpDisabled=K(()=>this.disabled()||this.isReadonly()||Number(this.value()??0)>=(this.max()??1/0));isFloating=K(()=>this.resolvedFloatLabel()===`always`||this.isFocused()||this.autofilled()||!!this.displayedValue()||this.multiline()||[`date`,`time`,`datetime-local`].includes(this.type()));resolvedDecreaseLabel=K(()=>mQ(this.decreaseLabel(),this.i18n));resolvedIncreaseLabel=K(()=>mQ(this.increaseLabel(),this.i18n));type=ke(`text`);min=ke(void 0,{transform:Ai});max=ke(void 0,{transform:Ai});minLength=ke(void 0);maxLength=ke(void 0);pattern=ke([]);step=ke(1);autocomplete=ke(void 0);inputmode=ke(void 0);spellcheck=ke(!0);multiline=ke(!1);rows=ke(3);autosize=ke(!0);minRows=ke(2);maxRows=ke(8);decreaseLabel=ke(`Decrease value`);increaseLabel=ke(`Increase value`);composing=!1;spinTimeout;spinInterval;constructor(){super(),m(me).onDestroy(()=>this.stopSpin())}reset(){super.reset(),this.editingRaw.set(void 0),this.badInput.set(!1),this.stopSpin()}startSpin(n,e){e.preventDefault(),!(this.disabled()||this.isReadonly())&&(this.applyStep(n),this.spinTimeout=setTimeout(()=>{this.spinInterval=setInterval(()=>this.applyStep(n),80)},400))}stopSpin(){clearTimeout(this.spinTimeout),clearInterval(this.spinInterval)}clearPendingEdit(){super.clearPendingEdit(),this.editingRaw.set(void 0),this.badInput.set(!1)}onInput(n){if(this.composing||this.disabled()||this.isReadonly())return;let e=n.target;this.badInput.set(e.validity.badInput);let t=this.ngControl?.control?.updateOn;t===`blur`||t===`submit`?this.editingRaw.set(e.value):this.rawValue.set(e.value)}onCompositionStart(){this.composing=!0}onCompositionEnd(n){this.composing=!1,this.onInput(n)}onFocus(){this.isFocused.set(!0)}onBlur(){this.isFocused.set(!1),this.stopSpin(),this.markAsTouched()}commitPendingValue(n){let e=this.editingRaw();e===void 0||n===`blur`&&this.ngControl?.control?.updateOn===`submit`||(this.rawValue.set(e),this.editingRaw.set(void 0))}applyStep(n){let e=Number(this.displayedValue())||0,t=this.step()===`any`?1:Number(this.step()),r=Math.min(this.max()??1/0,Math.max(this.min()??-1/0,Number((e+n*t).toPrecision(12))));this.disabled()||this.isReadonly()||(this.badInput.set(!1),this.rawValue.set(String(r)))}static ɵfac=function(e){return new(e||i)};static ɵcmp=$n$1({type:i,selectors:[[`bx-input-field`]],viewQuery:function(e,t){e&1&&Ly(t.labelText,ct,5),e&2&&em()},inputs:{type:[1,`type`],min:[1,`min`],max:[1,`max`],minLength:[1,`minLength`],maxLength:[1,`maxLength`],pattern:[1,`pattern`],step:[1,`step`],autocomplete:[1,`autocomplete`],inputmode:[1,`inputmode`],spellcheck:[1,`spellcheck`],multiline:[1,`multiline`],rows:[1,`rows`],autosize:[1,`autosize`],minRows:[1,`minRows`],maxRows:[1,`maxRows`],decreaseLabel:[1,`decreaseLabel`],increaseLabel:[1,`increaseLabel`]},features:[vt$1],ngContentSelectors:sl,decls:13,vars:30,consts:[[3,`control`,`inline`,`tooltip`,`loading`,`hint`,`hintEnd`,`subscriptSizing`,`forId`],[`bxSurface`,``,1,`bx-input-wrapper`],[`bxTooltipTouch`,`longpress`,`placement`,`top`,1,`bx-input-container`,3,`bxTooltip`],[1,`bx-floating-label`],[`cdkAutofill`,``,1,`bx-native-input`,3,`required`,`disabled`,`readOnly`,`value`,`spellcheck`,`rows`,`cdkTextareaAutosize`,`cdkAutosizeMinRows`,`cdkAutosizeMaxRows`],[`cdkAutofill`,``,1,`bx-native-input`,3,`required`,`disabled`,`readOnly`,`value`,`spellcheck`,`type`],[1,`bx-input-actions`],[1,`bx-spinners-group`],[`bxTruncate`,``,1,`bx-input-label-text`],[`aria-hidden`,`true`,1,`bx-field-required`],[`cdkAutofill`,``,1,`bx-native-input`,3,`input`,`focus`,`blur`,`compositionstart`,`compositionend`,`cdkAutofill`,`required`,`disabled`,`readOnly`,`value`,`spellcheck`,`rows`,`cdkTextareaAutosize`,`cdkAutosizeMinRows`,`cdkAutosizeMaxRows`],[`cdkAutofill`,``,1,`bx-native-input`,3,`input`,`focus`,`blur`,`compositionstart`,`compositionend`,`cdkAutofill`,`required`,`disabled`,`readOnly`,`value`,`spellcheck`,`type`],[`type`,`button`,1,`bx-spin-btn`,3,`pointerdown`,`pointerup`,`pointercancel`,`pointerleave`,`click`,`disabled`],[`name`,`minus`,`size`,`16`],[`name`,`plus`,`size`,`16`]],template:function(e,t){e&1&&(jy(ll),Os$1(0,`bx-form-field`,0)(1,`div`,1),Py(2),Os$1(3,`div`,2),m1(4,`bxTruncatedText`),bT(5,bl,4,3,`label`,3),bT(6,pl,1,22,`textarea`,4)(7,gl,1,23,`input`,5),ba$1(),Os$1(8,`div`,6),Py(9,1),bT(10,ml,5,4,`div`,7),ba$1()(),Py(11,2,dl),Py(12,3,cl),ba$1()),e&2&&(fa$1(`control`,t.fieldControl)(`inline`,!0)(`tooltip`,t.tooltip())(`loading`,t.loading())(`hint`,t.hint())(`hintEnd`,t.hintEnd())(`subscriptSizing`,t.resolvedSubscriptSizing())(`forId`,t.controlId()),Ul$1(),Lr(`is-invalid`,t.showError())(`is-outline`,t.resolvedAppearance()===`outline`)(`is-disabled`,t.disabled())(`is-readonly`,t.isReadonly())(`is-keyboard-focused`,t.keyboardFocused())(`has-spinners`,t.type()===`number`&&!t.multiline())(`is-floating`,t.isFloating()),Ul$1(2),fa$1(`bxTooltip`,v1(4,26,t.resolvedLabel(),t.labelTruncated(),t.resolvedTooltipOnTruncate())),Ul$1(2),gT(t.label()?5:-1),Ul$1(),gT(t.multiline()?6:7),Ul$1(4),gT(t.type()===`number`&&!t.multiline()?10:-1))},dependencies:[RD,Y,U,vt,Zr,Pt$1,ct,an],styles:[`
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
}`]})};var Et=class i{radios=/* @__PURE__ */ new Set;select(n){for(let e of this.radios)e!==n&&e.sharesGroup(n)&&e.writeValue(n.value())}static ɵfac=function(e){return new(e||i)};static ɵprov=V({token:i,factory:i.ɵfac,providedIn:`root`})};var Rt=new T(`BX_RADIO_GROUP`);var hl=[`*`];function fl(i,n){i&1&&(Os$1(0,`span`,7),XT(1,`*`),ba$1())}function xl(i,n){if(i&1&&(Os$1(0,`span`,5),Py(1),XT(2),bT(3,fl,2,0,`span`,7),ba$1()),i&2){let e=Ql$1();Ul$1(2),rm(``,e.resolvedLabel(),` `),Ul$1(),gT(e.isFieldRequired()||e.group?.required()?3:-1)}}function vl(i,n){if(i&1&&(Os$1(0,`span`,6),XT(1),ba$1()),i&2){let e=Ql$1();fa$1(`id`,e.inputId()+`-readonly`),Ul$1(),Zy(e.resolvedReadonlyDescription())}}var ya=class i extends TD{radioRegistry=m(Et);formSettingsService=m(Mn);i18n=m(xQ,{optional:!0});group=m(Rt,{optional:!0});inputId=K(()=>`bx-radio-${yZ()}`);resolvedLabel=K(()=>{this.i18n?.version?.();let n=this.label();if(n)return AD(n)?this.i18n?.translate(n.key)??n.key:n});effectiveDisabled=K(()=>this.isDisabled()||!!this.group?.disabled());effectiveName=K(()=>this.group?.groupName()??this.name());resolvedReadonlyDescription=K(()=>mQ(this.readonlyDescription(),this.i18n));radioDescribedBy=K(()=>[this.group?.describedBy(),this.isReadonly()||this.group?.isReadonly()?`${this.inputId()}-readonly`:void 0].filter(Boolean).join(` `)||null);selected=K(()=>(this.group?this.group.value():this.internalValue())===this.value());resolvedSubscriptSizing=K(()=>this.subscriptSizing()??this.formSettingsService.settings().subscriptSizing);readonlyDescription=ke(`Read only`);labelPosition=ke(`after`);subscriptSizing=ke(void 0);value=ke.required();name=ke(``);showTooltip=!1;constructor(){super(),this.radioRegistry.radios.add(this),m(me).onDestroy(()=>this.radioRegistry.radios.delete(this))}sharesGroup(n){let e=this.ngControl?.control;return e&&e===n.ngControl?.control?!0:!!this.name()&&this.name()===n.name()&&this.nativeElement.closest(`form`)===n.nativeElement.closest(`form`)&&e?.parent===n.ngControl?.control?.parent}onSelect(){if(this.effectiveDisabled()||this.isReadonly()||this.group?.isReadonly()){for(let n of this.radioRegistry.radios){if(n!==this&&(this.group?n.group!==this.group:!this.sharesGroup(n)))continue;let e=n.nativeElement.querySelector(`input[type="radio"]`);e&&(e.checked=n.selected())}return}this.group?this.group.select(this.value()):(this.updateValue(this.value()),this.radioRegistry.select(this))}onReadonlyClick(n){(this.isReadonly()||this.group?.isReadonly())&&n.preventDefault()}onControlPointerDown(){(this.isReadonly()||this.group?.isReadonly())&&this.keyboardFocused.set(!1)}onReadonlyKeyDown(n){if(!(this.isReadonly()||this.group?.isReadonly())||![`ArrowLeft`,`ArrowRight`,`ArrowUp`,`ArrowDown`,` `].includes(n.key)||(n.preventDefault(),n.key===` `))return;let e=n.target,t=(e.name?Array.from(e.ownerDocument.querySelectorAll(`input[type="radio"]`)):[e]).filter(a=>!a.disabled&&a.name===e.name&&a.form===e.form&&(!this.group||a.closest(`[role="radiogroup"]`)===e.closest(`[role="radiogroup"]`))),r=n.key===`ArrowLeft`||n.key===`ArrowUp`?-1:1;t[(t.indexOf(e)+r+t.length)%t.length]?.focus()}onBlur(){this.group?this.group.markTouched():this.markAsTouched()}static ɵfac=function(e){return new(e||i)};static ɵcmp=$n$1({type:i,selectors:[[`bx-radio`]],inputs:{readonlyDescription:[1,`readonlyDescription`],labelPosition:[1,`labelPosition`],subscriptSizing:[1,`subscriptSizing`],value:[1,`value`],name:[1,`name`]},features:[vt$1],ngContentSelectors:hl,decls:7,vars:29,consts:[[3,`inline`,`tooltip`,`error`,`loading`,`forId`,`subscriptSizing`],[1,`bx-inline-wrapper`],[`type`,`radio`,1,`bx-visually-hidden`,3,`click`,`keydown`,`change`,`blur`,`required`,`disabled`,`checked`],[`bxSurface`,``,1,`bx-radio-circle`,3,`bxSurfaceEmission`],[1,`bx-radio-inner`],[1,`bx-inline-label`],[1,`bx-visually-hidden`,3,`id`],[1,`bx-inline-required`]],template:function(e,t){e&1&&(jy(),Os$1(0,`bx-form-field`,0)(1,`label`,1)(2,`input`,2),br(`click`,function(a){return t.onReadonlyClick(a)})(`keydown`,function(a){return t.onReadonlyKeyDown(a)})(`change`,function(){return t.onSelect()})(`blur`,function(){return t.onBlur()}),ba$1(),Os$1(3,`div`,3),Cy(4,`div`,4),ba$1(),bT(5,xl,4,2,`span`,5),ba$1(),bT(6,vl,2,2,`span`,6),ba$1()),e&2&&(fa$1(`inline`,!0)(`tooltip`,t.tooltip())(`error`,t.errorMessage)(`loading`,t.loading())(`forId`,t.inputId())(`subscriptSizing`,t.resolvedSubscriptSizing()),Ul$1(),Lr(`is-disabled`,t.effectiveDisabled())(`is-readonly`,t.isReadonly()||!!t.group?.isReadonly())(`is-keyboard-focused`,t.keyboardFocused())(`label-before`,t.labelPosition()===`before`),Ul$1(),fa$1(`required`,t.required()||!!t.group?.required())(`disabled`,t.effectiveDisabled())(`checked`,t.selected()),Ro$1(`id`,t.inputId())(`name`,t.effectiveName()||null)(`data-testid`,t.dataTestId())(`aria-label`,t.ariaLabel())(`aria-describedby`,t.radioDescribedBy()),Ul$1(),Lr(`is-checked`,t.selected())(`is-invalid`,!!t.errorMessage),fa$1(`bxSurfaceEmission`,t.errorMessage?`var(--bx-text-danger)`:`var(--bx-accent)`),Ul$1(2),gT(t.resolvedLabel()?5:-1),Ul$1(),gT(t.isReadonly()||t.group?.isReadonly()?6:-1))},dependencies:[RD,Pk,Y],styles:[`
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
}`],changeDetection:1})};var yl=[[[`bx-error`]],[[`bx-hint`]]];var _l=[`bx-error`,`bx-hint`];var Sl=[`ngProjectAs`,`bx-error`,5,[`bx-error`]];var Cl=[`ngProjectAs`,`bx-hint`,5,[`bx-hint`]];function Ml(i,n){i&1&&Cy(0,`bx-loading-spinner`,11),i&2&&fa$1(`size`,16)(`decorative`,!0)}function Nl(i,n){i&1&&Cy(0,`bx-icon`,12)}function Tl(i,n){if(i&1&&bT(0,Ml,1,2,`bx-loading-spinner`,11)(1,Nl,1,0,`bx-icon`,12),i&2){let e=n.$implicit;gT(e?0:1)}}function wl(i,n){if(i&1){let e=Jb();Os$1(0,`button`,13),br(`click`,function(){Jc$1(e);let r=Ql$1();return el$1(r.clear())}),Cy(1,`bx-icon`,14),ba$1()}if(i&2){let e=Ql$1();fa$1(`disabled`,e.disabled()||e.isReadonly()),Ro$1(`aria-label`,e.resolvedClearLabel())}}function Ol(i,n){if(i&1&&(Os$1(0,`span`,15),XT(1),ba$1(),Os$1(2,`span`,15),XT(3),ba$1()),i&2){let e=Ql$1();Ul$1(),Zy(e.resolvedRetainedError()),Ul$1(2),Zy(e.resolvedLoadingLabel()||e.resolvedLoadingAriaLabel())}}function Pl(i,n){if(i&1){let e=Jb();Os$1(0,`button`,16),br(`click`,function(){Jc$1(e);let r=Ql$1();return el$1(r.retrySearch())}),Cy(1,`bx-icon`,17),XT(2),ba$1()}if(i&2){let e=Ql$1();HT(e.retryConfig().buttonClass??``),fa$1(`variant`,e.retryConfig().variant??`text`)(`color`,e.retryConfig().color??`primary`)(`outlined`,e.retryConfig().outlined??!1)(`disabled`,e.disabled()||e.isReadonly())(`loading`,e.isBusy()),Ro$1(`aria-label`,e.resolvedRetryAriaLabel()),Ul$1(2),rm(``,e.resolvedRetryLabel(),` `)}}var kn=class i extends de{i18n=m(xQ,{optional:!0});retryError=W(void 0);retrying=K(()=>this.retryError()!==void 0);resolvedClearLabel=K(()=>mQ(this.clearLabel(),this.i18n));resolvedLoadError=K(()=>mQ(this.loadError(),this.i18n));resolvedLoadingLabel=K(()=>mQ(this.loadingLabel(),this.i18n));resolvedLoadingAriaLabel=K(()=>mQ(this.loadingAriaLabel(),this.i18n));resolvedRetryLabel=K(()=>mQ(this.retryLabel(),this.i18n));resolvedRetryAriaLabel=K(()=>mQ(this.retryConfig().ariaLabel,this.i18n)||this.resolvedRetryLabel());resolvedRetainedError=K(()=>mQ(this.retryError()??this.loadError(),this.i18n));isBusy=K(()=>this.loading()||this.pending());showRetry=K(()=>!!this.loadError()||this.retrying());showStatus=K(()=>!!this.resolvedLoadError()||this.isBusy()&&(!!this.resolvedLoadingLabel()||this.showRetry()));searchDescribedBy=K(()=>`${this.describedBy()} ${this.controlId()}-search-status`);isCompact=K(()=>!!this.label()||this.compact());clearLabel=ke(`Clear search`);autocomplete=ke(`off`);loadError=ke(void 0);loadingLabel=ke(void 0);loadingAriaLabel=ke(`Searching`);retryLabel=ke(`Retry search`);retryConfig=ke({});compact=ke(!1);search=wk();retry=wk();composing=!1;constructor(){super(),tt(()=>{this.retrying()&&!this.loading()&&this.retryError.set(void 0)})}clear(){this.disabled()||this.isReadonly()||(this.retryError.set(void 0),this.updateValue(``),this.search.emit(``),this.focus())}retrySearch(){this.disabled()||this.isReadonly()||this.isBusy()||this.retrying()||!this.loadError()||(this.retryError.set(this.loadError()),this.focus(),this.retry.emit(this.internalValue()??``))}onInput(n){if(this.composing||this.disabled()||this.isReadonly())return;let e=n.target.value;this.retryError.set(void 0),this.updateValue(e),this.search.emit(e)}onCompositionStart(){this.composing=!0}onCompositionEnd(n){this.composing=!1,this.onInput(n)}onBlur(){this.markAsTouched()}static ɵfac=function(e){return new(e||i)};static ɵcmp=$n$1({type:i,selectors:[[`bx-search-input`]],inputs:{clearLabel:[1,`clearLabel`],autocomplete:[1,`autocomplete`],loadError:[1,`loadError`],loadingLabel:[1,`loadingLabel`],loadingAriaLabel:[1,`loadingAriaLabel`],retryLabel:[1,`retryLabel`],retryConfig:[1,`retryConfig`],compact:[1,`compact`]},outputs:{search:`search`,retry:`retry`},features:[vt$1],ngContentSelectors:_l,decls:17,vars:50,consts:[[`searchOverflow`,`bxTruncate`],[3,`control`,`label`,`tooltip`,`showLoadingIndicator`,`hint`,`hintEnd`,`hideRequiredMarker`,`subscriptSizing`,`forId`],[`bxSurface`,``,`bxTooltipTouch`,`longpress`,`placement`,`top`,1,`bx-search-input-wrapper`,3,`bxTooltip`],[`aria-hidden`,`true`,1,`bx-search-icon-left`],[3,`value`],[`type`,`search`,`bxTruncate`,``,1,`bx-native-search-input`,3,`input`,`blur`,`compositionstart`,`compositionend`,`id`,`placeholder`,`required`,`readOnly`,`disabled`,`value`],[`type`,`button`,1,`bx-search-clear-btn`,3,`disabled`],[1,`bx-search-feedback`],[1,`bx-search-status`],[`role`,`status`,3,`id`],[`bx-button`,``,`type`,`button`,3,`variant`,`color`,`outlined`,`class`,`disabled`,`loading`],[3,`size`,`decorative`],[`name`,`search`,`size`,`16`],[`type`,`button`,1,`bx-search-clear-btn`,3,`click`,`disabled`],[`name`,`x`,`size`,`16`],[`aria-hidden`,`true`,1,`bx-search-status-reserve`],[`bx-button`,``,`type`,`button`,3,`click`,`variant`,`color`,`outlined`,`disabled`,`loading`],[`name`,`rotate-cw`,`size`,`16`]],template:function(e,t){if(e&1&&(jy(yl),Os$1(0,`bx-form-field`,1)(1,`div`,2),m1(2,`bxTruncatedText`),Os$1(3,`span`,3)(4,`bx-visual-transition`,4),Ey(5,Tl,2,1,`ng-template`),ba$1()(),Os$1(6,`input`,5,0),br(`input`,function(a){return t.onInput(a)})(`blur`,function(){return t.onBlur()})(`compositionstart`,function(){return t.onCompositionStart()})(`compositionend`,function(a){return t.onCompositionEnd(a)}),ba$1(),bT(8,wl,2,2,`button`,6),ba$1(),Os$1(9,`div`,7)(10,`div`,8),bT(11,Ol,4,2),Os$1(12,`span`,9),XT(13),ba$1()(),bT(14,Pl,3,9,`button`,10),ba$1(),Py(15,0,Sl),Py(16,1,Cl),ba$1()),e&2){let r=CT(7);fa$1(`control`,t.fieldControl)(`label`,t.label())(`tooltip`,t.tooltip())(`showLoadingIndicator`,!1)(`hint`,t.hint())(`hintEnd`,t.hintEnd())(`hideRequiredMarker`,t.resolvedHideRequiredMarker())(`subscriptSizing`,t.resolvedSubscriptSizing())(`forId`,t.controlId()),Ul$1(),Lr(`is-compact`,t.isCompact())(`is-invalid`,t.showError())(`is-disabled`,t.disabled())(`is-readonly`,t.isReadonly())(`is-keyboard-focused`,t.keyboardFocused()),fa$1(`bxTooltip`,v1(2,46,r.text(),r.truncated(),t.resolvedTooltipOnTruncate())),Ul$1(3),fa$1(`value`,t.isBusy()&&!t.showRetry()),Ul$1(2),fa$1(`id`,t.controlId())(`placeholder`,t.resolvedPlaceholder())(`required`,t.effectiveRequired())(`readOnly`,t.isReadonly())(`disabled`,t.disabled())(`value`,t.internalValue()??``),Ro$1(`name`,t.name()||null)(`data-testid`,t.dataTestId())(`autocomplete`,t.autocomplete())(`aria-label`,t.ariaLabel())(`aria-labelledby`,t.ariaLabelledBy())(`aria-describedby`,t.searchDescribedBy())(`aria-busy`,t.isBusy())(`aria-invalid`,t.showError()),Ul$1(2),gT(t.internalValue()&&!t.isReadonly()?8:-1),Ul$1(),Lr(`has-status`,t.showStatus()),Ul$1(),Lr(`cdk-visually-hidden`,!t.showStatus()),Ul$1(),gT(t.showRetry()?11:-1),Ul$1(),Lr(`bx-search-error`,!t.isBusy()&&!!t.resolvedLoadError()),fa$1(`id`,t.controlId()+`-search-status`),Ul$1(),Zy(t.isBusy()?t.resolvedLoadingLabel()||t.resolvedLoadingAriaLabel():t.resolvedLoadError()),Ul$1(),gT(t.showRetry()?14:-1)}},dependencies:[OD,RD,Y,U,on,fe,Pt$1,ct,an],styles:[`
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
}`]})};function kl(i,n){if(i&1&&(Os$1(0,`span`,1),XT(1),ba$1()),i&2){let e=Ql$1();Ul$1(),Zy(e.errorText())}}function Dl(i,n){if(i&1&&Xl$1(0,2),i&2){let e=Ql$1();fa$1(`ngTemplateOutlet`,n)(`ngTemplateOutletContext`,e.context())}}function Il(i,n){i&1&&Cy(0,`bx-icon`,5)}function El(i,n){if(i&1){let e=Jb();Os$1(0,`button`,4),br(`click`,function(){Jc$1(e);let r=Ql$1();return el$1(r.request.emit())}),bT(1,Il,1,0,`bx-icon`,5),XT(2),ba$1()}if(i&2){let e=Ql$1();HT(e.config().buttonClass??``),fa$1(`variant`,e.config().variant??`text`)(`color`,e.config().color??`primary`)(`outlined`,e.config().outlined??!1)(`disabled`,e.disabled())(`loading`,e.loading()),Ro$1(`aria-label`,e.accessibleLabel()),Ul$1(),gT(e.retry()?1:-1),Ul$1(),rm(` `,e.text(),` `)}}var Lt=class i{i18n=m(xQ,{optional:!0});text=K(()=>{let n=this.config(),e=mQ(n.text??`Load more`,this.i18n),t=n.retryText,r=mQ(t,this.i18n),a=!!t&&(!AD(t)||r!==t.key);return this.loading()?mQ(n.loadingText??`Loading`,this.i18n):this.retry()&&a?r:e});accessibleLabel=K(()=>mQ(this.config().ariaLabel,this.i18n)||this.text());errorText=K(()=>mQ(this.error(),this.i18n));context=K(()=>({$implicit:this.text(),loading:this.loading(),disabled:this.disabled()||this.loading(),request:()=>this.request.emit()}));retry=ke(!1);visible=ke(!1);loading=ke(!1);disabled=ke(!1);error=ke(void 0);config=ke({});buttonTemplate=ke(void 0);request=wk();static ɵfac=function(e){return new(e||i)};static ɵcmp=$n$1({type:i,selectors:[[`bx-load-more-footer`]],hostVars:2,hostBindings:function(e,t){e&2&&(Ay(`hidden`,!t.visible()),Ro$1(`aria-busy`,t.loading()?`true`:null))},inputs:{retry:[1,`retry`],visible:[1,`visible`],loading:[1,`loading`],disabled:[1,`disabled`],error:[1,`error`],config:[1,`config`],buttonTemplate:[1,`buttonTemplate`]},outputs:{request:`request`},decls:4,vars:4,consts:[[1,`bx-load-more-footer`],[`role`,`status`,1,`bx-load-more-error`],[3,`ngTemplateOutlet`,`ngTemplateOutletContext`],[`bx-button`,``,`type`,`button`,3,`variant`,`color`,`outlined`,`class`,`disabled`,`loading`],[`bx-button`,``,`type`,`button`,3,`click`,`variant`,`color`,`outlined`,`disabled`,`loading`],[`name`,`rotate-cw`,`size`,`16`]],template:function(e,t){if(e&1&&(Os$1(0,`div`,0),bT(1,kl,2,1,`span`,1),bT(2,Dl,1,2,`ng-container`,2)(3,El,3,10,`button`,3),ba$1()),e&2){let r;HT(t.config().footerClass??``),Ul$1(),gT(t.errorText()?1:-1),Ul$1(),gT((r=t.buttonTemplate())?2:3,r)}},dependencies:[fe,ym,U],styles:[`
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
}`]})};var Ae=class i{nativeElement=m(ye).nativeElement;viewContainerRef=m(pr);ngZone=m(ce);destroyRef=m(me);overflowing=W(!1);requested=W(!1);retrying=W(!1);keepVisible=W(!1);actionVisible=K(()=>!this.loadMoreSuppressed()&&(this.loadMoreHasMore()||!!this.loadMoreError()||this.keepVisible()&&this.loadMoreLoading())&&(this.loadMoreConfig().buttonMode===`always`||!this.overflowing()||this.keepVisible()||!!this.loadMoreError()));loadMoreHasMore=ke(!1);loadMoreLoading=ke(!1);loadMoreSuppressed=ke(!1);loadMoreDisabled=ke(!1);loadMoreError=ke(void 0);loadMoreConfig=ke({});loadMoreTemplate=ke(void 0);loadMoreRevision=ke(void 0);loadMore=wk();footer;wasLoading=!1;previousRevision;constructor(){er(()=>this.mount()),Sk(()=>{let n=this.loadMoreLoading(),e=this.loadMoreRevision();(this.wasLoading&&!n||!n&&this.previousRevision!==e)&&this.complete(),this.wasLoading=n,this.previousRevision=e,this.updateFooter()})}complete(){this.requested.set(!1),this.retrying.set(!1),this.keepVisible.set(!1)}request(n=`button`){this.canRequest(n)&&(this.requested.set(!0),this.retrying.set(!!this.loadMoreError()),this.keepVisible.set(n!==`scroll`),this.loadMore.emit({source:this.loadMoreError()?`retry`:n}))}canRequest(n){return!this.loadMoreSuppressed()&&(this.loadMoreHasMore()||!!this.loadMoreError())&&!this.loadMoreDisabled()&&!this.loadMoreLoading()&&!this.requested()&&(n!==`scroll`||!this.loadMoreError())}mount(){this.footer=this.viewContainerRef.createComponent(Lt),this.nativeElement.append(this.footer.location.nativeElement),this.footer.instance.request.subscribe(()=>this.request()),this.ngZone.runOutsideAngular(()=>{let n=_Q(this.nativeElement,this.nativeElement,()=>{let e=this.footer?.location.nativeElement?.offsetHeight??0;DQ(this.nativeElement,this.nativeElement,e).distance<=(this.loadMoreConfig().threshold??32)&&this.canRequest(`scroll`)&&this.ngZone.run(()=>this.request(`scroll`))},()=>this.measure());this.destroyRef.onDestroy(()=>{n(),this.footer?.destroy()})}),this.measure(),this.updateFooter()}measure(){let n=this.footer?.location.nativeElement?.offsetHeight??0,{overflowing:e}=DQ(this.nativeElement,this.nativeElement,n);e!==this.overflowing()&&this.ngZone.run(()=>this.overflowing.set(e))}updateFooter(){if(!this.footer)return;let n=this.actionVisible(),e=this.footer.location.nativeElement;!n&&e.contains(this.nativeElement.ownerDocument.activeElement)&&(this.nativeElement.hasAttribute(`tabindex`)||this.nativeElement.setAttribute(`tabindex`,`-1`),this.nativeElement.focus({preventScroll:!0})),this.footer.setInput(`visible`,n),this.footer.setInput(`loading`,this.loadMoreLoading()),this.footer.setInput(`disabled`,this.loadMoreDisabled()||this.requested()&&!this.loadMoreLoading()),this.footer.setInput(`retry`,!!this.loadMoreError()||this.retrying()),this.footer.setInput(`error`,this.loadMoreError()),this.footer.setInput(`config`,this.loadMoreConfig()),this.footer.setInput(`buttonTemplate`,this.loadMoreTemplate())}static ɵfac=function(e){return new(e||i)};static ɵdir=ue({type:i,selectors:[[``,`bxLoadMore`,``]],inputs:{loadMoreHasMore:[1,`loadMoreHasMore`],loadMoreLoading:[1,`loadMoreLoading`],loadMoreSuppressed:[1,`loadMoreSuppressed`],loadMoreDisabled:[1,`loadMoreDisabled`],loadMoreError:[1,`loadMoreError`],loadMoreConfig:[1,`loadMoreConfig`],loadMoreTemplate:[1,`loadMoreTemplate`],loadMoreRevision:[1,`loadMoreRevision`]},outputs:{loadMore:`loadMore`},exportAs:[`bxLoadMore`]})};function At(i){let n=Number(i);return Number.isFinite(n)?Math.max(1,Math.floor(n)):1}var Ll=[`searchInput`];var Al=[`origin`];var Vl=[`valueOverflow`];var Fl=[`labelOverflow`];var Dn=class i extends de{bxA11yService=m(Fr);ngZone=m(ce);overlay=m(_d$1);overlayContext=m(Ae$1,{optional:!0});i18n=m(xQ,{optional:!0});scrollLockService=m(kE);scrollLockId=yZ();debouncing=W(!1);searchRequest=W(!1);knownOptions=W([]);connectedOverlay=d4(rN);searchInputRef=d4(`searchInput`);originRef=d4(`origin`,{read:ye});hasSelection=K(()=>this.internalValue()!==null&&this.internalValue()!==void 0);showClear=K(()=>this.clearable()&&this.hasSelection()&&!this.isReadonly());resolvedClearLabel=K(()=>mQ(this.clearLabel(),this.i18n));resolvedClearTooltip=K(()=>mQ(this.clearTooltip()??this.clearLabel(),this.i18n));panelScrollStrategy=this.overlay.scrollStrategies.noop();isPanelAttached=W(!1);searchTerm=K(()=>this.searchValue());truncatedSelectionTooltip=K(()=>!this.resolvedTooltipOnTruncate()||this.isOpen()?``:$i(this.selectedOptionLabel()||this.resolvedPlaceholder(),this.valueOverflow()?.truncated()??!1)||$i(this.resolvedLabel(),this.labelOverflow()?.truncated()??!1));overlayPositions=[new Vr({originX:`start`,originY:`bottom`},{overlayX:`start`,overlayY:`top`},0,4),new Vr({originX:`start`,originY:`top`},{overlayX:`start`,overlayY:`bottom`},0,-4)];resolvedOptions=K(()=>this.options().map(n=>s(r({},n),{resolvedStr:mQ(n.label,this.i18n),resolvedGroup:mQ(n.group,this.i18n)})));filteredOptions=K(()=>{let n=this.searchTerm().trim().toLocaleLowerCase();return this.externalFiltering()||!n?this.resolvedOptions():this.resolvedOptions().filter(e=>e.resolvedStr.toLocaleLowerCase().includes(n))});selectedOptions=K(()=>this.knownOptions().filter(n=>this.isSelected(n.value)));selectedOptionLabel=K(()=>this.selectedOptions().map(n=>mQ(n.label,this.i18n)).join(`, `));isFloating=K(()=>this.isOpen()||this.value()!==null&&(!Array.isArray(this.value())||this.value().length>0)||this.resolvedFloatLabel()===`always`);resolvedSearchPlaceholder=K(()=>mQ(this.searchPlaceholder(),this.i18n));resolvedEmptyMessage=K(()=>mQ(this.emptyMessage(),this.i18n));triggerContext=K(()=>({$implicit:this.value(),labels:this.selectedOptions().map(n=>mQ(n.label,this.i18n))}));visibleTags=K(()=>this.selectedOptions().slice(0,this.visibleTagCount()));overflowTagLabel=K(()=>{let n=Math.max(0,this.selectedOptions().length-this.visibleTagCount());return mQ(this.tagOverflowText(),this.i18n,{count:n}).replaceAll(`{count}`,String(n))});overflowTagTooltip=K(()=>this.selectedOptions().slice(this.visibleTagCount()).map(n=>mQ(n.label,this.i18n)).join(`, `));resolvedLoadingAriaLabel=K(()=>mQ(this.loadingAriaLabel(),this.i18n));resolvedLoadingLabel=K(()=>mQ(this.loadingLabel(),this.i18n));valueOverflow=d4(`valueOverflow`);labelOverflow=d4(`labelOverflow`);isSearching=K(()=>this.debouncing()||this.searchRequest());isOpen=W(!1);clearable=ke(!0);clearLabel=ke(`Clear selection`);clearTooltip=ke(void 0);selectionDisplay=ke(`text`);tagConfig=ke({});overflowTagConfig=ke({});visibleTagCount=ke(1,{transform:At});tagOverflowText=ke(`+{count}`);options=ke.required();compareWith=ke(Object.is);isSearchable=ke(!1);externalFiltering=ke(!1);searchValue=l4(``);searchDebounce=ke(300);searchPlaceholder=ke(`Search...`);emptyMessage=ke(`No results found.`);loadingLabel=ke(void 0);loadingAriaLabel=ke(`Loading`);hasMore=ke(!1);loadError=ke(void 0);loadMoreConfig=ke({});loadMoreTemplate=ke(void 0);panelClass=ke(``);optionTemplate=ke(void 0);triggerTemplate=ke(void 0);search=wk();loadMore=wk();openedChange=wk();transition;selectionMotion;disconnectTheme;disconnectLighting;disconnectOrigin;transitionRevision=0;focusOnOpen=null;searchTimeout;typeaheadTimeout;typeaheadText=``;constructor(){super(),tt(()=>{let n=this.bxA11yService.isReducedMotion();this.selectionMotion?.update({reducedMotion:n})}),tt(()=>{this.searchRequest()&&!this.loading()&&!this.debouncing()&&this.searchRequest.set(!1)}),tt(()=>{let n=this.resolvedOptions(),e=le(this.knownOptions).filter(t=>this.isSelected(t.value)&&!n.some(r=>this.compareWith()(r.value,t.value)));this.knownOptions.set([...e,...n])}),tt(()=>{(this.disabled()||this.isReadonly())&&this.isOpen()&&this.close()}),m(me).onDestroy(()=>{clearTimeout(this.searchTimeout),clearTimeout(this.typeaheadTimeout)})}ngOnDestroy(){++this.transitionRevision,this.onPanelDetach(),this.scrollLockService.enableScroll(this.scrollLockId)}toggleOpen(){this.disabled()||this.isReadonly()||(this.isOpen()?this.close():this.open())}open(){if(this.disabled()||this.isReadonly()||this.isOpen())return;++this.transitionRevision,this.isOpen.set(!0),this.openedChange.emit(!0),this.isPanelAttached.set(!0),this.scrollLockService.disableScroll(this.scrollLockId,{handleTouchInput:!0});let n=this.connectedOverlay()?.overlayRef?.overlayElement;n&&(n.inert=!1);let e=this.transition;e&&this.ngZone.runOutsideAngular(()=>e.enter()),this.connectedOverlay()?.overlayRef?.hasAttached()&&this.isSearchable()&&queueMicrotask(()=>this.searchInputRef()?.focus())}close(){let n=this.isOpen();this.isOpen.set(!1),this.scrollLockService.enableScroll(this.scrollLockId),n&&(this.openedChange.emit(!1),this.markAsTouched());let e=++this.transitionRevision,t=this.connectedOverlay()?.overlayRef?.overlayElement;t?.contains(t.ownerDocument.activeElement)&&this.originRef()?.nativeElement.focus({preventScroll:!0}),t&&(t.inert=!0);let r=this.transition;r&&!this.bxA11yService.isReducedMotion()?this.ngZone.runOutsideAngular(()=>r.exit()).then(()=>{e===this.transitionRevision&&!this.isOpen()&&this.detachPanel()}).catch(()=>{e===this.transitionRevision&&this.detachPanel()}):this.detachPanel()}onPanelAttach(n){let e=this.transitionRevision,t=this.originRef()?.nativeElement,r=n.overlayRef;t&&r?.hasAttached()&&(this.disconnectLighting?.(),this.disconnectLighting=mN(r.overlayElement,t),this.disconnectOrigin?.(),this.disconnectOrigin=this.ngZone.runOutsideAngular(()=>dZ(r,t))),queueMicrotask(()=>{let a=n.overlayRef,l=this.originRef()?.nativeElement;if(!a?.hasAttached()||!l||!this.isOpen()||e!==this.transitionRevision)return;this.disconnectTheme?.(),this.disconnectTheme=this.ngZone.runOutsideAngular(()=>fZ(l,a.overlayElement)),a.updatePosition();let g=a.overlayElement.querySelector(`[role="listbox"]`);if(this.selectionMotion?.destroy(),this.selectionMotion=g?this.ngZone.runOutsideAngular(()=>yN(g,{reducedMotion:this.bxA11yService.isReducedMotion()})):void 0,!this.bxA11yService.isReducedMotion()){this.transition?.destroy(),this.transition=this.ngZone.runOutsideAngular(()=>vN(l,a.overlayElement));let y=this.transition;this.ngZone.runOutsideAngular(()=>y.enter()).catch(()=>{e===this.transitionRevision&&(this.transition?.destroy(),this.transition=void 0)})}if(this.isSearchable())this.searchInputRef()?.focus();else{let y=this.panelItems();(y.find(w=>w.getAttribute(`aria-selected`)===`true`)??(this.focusOnOpen===`last`?y[y.length-1]:y[0]))?.focus()}this.focusOnOpen=null})}onPanelDetach(){this.selectionMotion?.destroy(),this.selectionMotion=void 0,this.transition?.destroy(),this.transition=void 0,this.disconnectTheme?.(),this.disconnectTheme=void 0,this.disconnectLighting?.(),this.disconnectLighting=void 0,this.disconnectOrigin?.(),this.disconnectOrigin=void 0}overlayPopoverLocation(n){return!!this.overlayContext?.useTopLayer||!!n.closest(`dialog, [role="dialog"], [role="alertdialog"], bx-modal, bx-modal-core, [popover]`)?`global`:null}refreshPanel(){this.transition?.refresh()}onTriggerKey(n){if(!(this.disabled()||this.isReadonly())){if(n.key===`Escape`||n.altKey&&n.key===`ArrowUp`){n.preventDefault(),this.close();return}[`ArrowDown`,`ArrowUp`,`Enter`,` `].includes(n.key)?(n.preventDefault(),this.focusOnOpen=n.key===`ArrowUp`?`last`:`first`,this.open()):n.key.length===1&&!n.ctrlKey&&!n.metaKey&&!n.altKey&&(this.open(),this.typeahead(n.key))}}onPanelKey(n){if(n.key===`Escape`||n.key===`Tab`||n.altKey&&n.key===`ArrowUp`){n.key!==`Tab`&&n.preventDefault(),n.stopPropagation(),this.close();return}let t=n.target.matches(`input,textarea`);if(t&&![`ArrowDown`,`ArrowUp`].includes(n.key))return;if(![`ArrowDown`,`ArrowUp`,`Home`,`End`].includes(n.key)){!t&&n.key.length===1&&n.key!==` `&&this.typeahead(n.key);return}let r=this.panelItems();if(!r.length)return;let a=r.indexOf(r[0].ownerDocument.activeElement),l=n.key===`Home`?0:n.key===`End`?r.length-1:n.key===`ArrowDown`?(a+1)%r.length:a<0?r.length-1:(a-1+r.length)%r.length;n.preventDefault(),r[l].focus()}onTriggerBlur(){this.isOpen()||this.markAsTouched()}onOutsideClick(n){let e=n.target;this.originRef()?.nativeElement.contains(e)||this.close()}clearSelectedValue(n){return this.disabled()||this.isReadonly()?!1:(this.updateValue(n),this.close(),this.markAsTouched(),this.focus({preventScroll:!0}),!0)}onSearchChange(n){clearTimeout(this.searchTimeout),this.debouncing.set(!0),this.searchTimeout=setTimeout(()=>{this.debouncing.set(!1),this.searchRequest.set(this.externalFiltering()),this.searchValue.set(n),this.search.emit(n)},this.searchDebounce())}selectionTagConfig(n){return r(r({},this.tagConfig()),n.tagConfig)}requestMore(n){this.loadMore.emit(r({},n))}detachPanel(){this.onPanelDetach(),this.isPanelAttached.set(!1),this.connectedOverlay()?.detachOverlay(),this.scrollLockService.enableScroll(this.scrollLockId)}typeahead(n){clearTimeout(this.typeaheadTimeout),this.typeaheadText+=n.toLocaleLowerCase(),this.typeaheadTimeout=setTimeout(()=>{this.typeaheadText=``},700),queueMicrotask(()=>this.panelItems().find(e=>e.textContent?.trim().toLocaleLowerCase().startsWith(this.typeaheadText))?.focus())}panelItems(){return Array.from(this.connectedOverlay()?.overlayRef?.overlayElement.querySelectorAll(`.bx-select-option:not(:disabled)`)??[])}static ɵfac=function(e){return new(e||i)};static ɵdir=ue({type:i,viewQuery:function(e,t){e&1&&Ly(t.connectedOverlay,rN,5)(t.searchInputRef,Ll,5)(t.originRef,Al,5,ye)(t.valueOverflow,Vl,5)(t.labelOverflow,Fl,5),e&2&&em(5)},inputs:{clearable:[1,`clearable`],clearLabel:[1,`clearLabel`],clearTooltip:[1,`clearTooltip`],selectionDisplay:[1,`selectionDisplay`],tagConfig:[1,`tagConfig`],overflowTagConfig:[1,`overflowTagConfig`],visibleTagCount:[1,`visibleTagCount`],tagOverflowText:[1,`tagOverflowText`],options:[1,`options`],compareWith:[1,`compareWith`],isSearchable:[1,`isSearchable`],externalFiltering:[1,`externalFiltering`],searchValue:[1,`searchValue`],searchDebounce:[1,`searchDebounce`],searchPlaceholder:[1,`searchPlaceholder`],emptyMessage:[1,`emptyMessage`],loadingLabel:[1,`loadingLabel`],loadingAriaLabel:[1,`loadingAriaLabel`],hasMore:[1,`hasMore`],loadError:[1,`loadError`],loadMoreConfig:[1,`loadMoreConfig`],loadMoreTemplate:[1,`loadMoreTemplate`],panelClass:[1,`panelClass`],optionTemplate:[1,`optionTemplate`],triggerTemplate:[1,`triggerTemplate`]},outputs:{searchValue:`searchValueChange`,search:`search`,loadMore:`loadMore`,openedChange:`openedChange`},features:[vt$1]})};var Bl=[[[``,`bxSuffix`,``]],[[`bx-error`]],[[`bx-hint`]]];var Hl=[`[bxSuffix]`,`bx-error`,`bx-hint`];var ql=[`ngProjectAs`,`bx-error`,5,[`bx-error`]];var Wl=[`ngProjectAs`,`bx-hint`,5,[`bx-hint`]];var jl=(i,n,e)=>({$implicit:i,selected:n,index:e});var _a=(i,n)=>n.value;function $l(i,n){i&1&&(Os$1(0,`span`,19),XT(1,`*`),ba$1())}function Kl(i,n){if(i&1&&(Os$1(0,`span`,10)(1,`span`,18,2),XT(3),ba$1(),bT(4,$l,2,0,`span`,19),ba$1()),i&2){let e=Ql$1();Ul$1(),fa$1(`bxTruncate`,!0),Ul$1(2),Zy(e.resolvedLabel()),Ul$1(),gT(e.required()&&!e.resolvedHideRequiredMarker()?4:-1)}}function Zl(i,n){if(i&1&&Xl$1(0,12),i&2){let e=Ql$1();fa$1(`ngTemplateOutlet`,n)(`ngTemplateOutletContext`,e.triggerContext())}}function Gl(i,n){if(i&1&&Cy(0,`bx-tag`,20),i&2){let e=n.$implicit,t=Ql$1(2);fa$1(`text`,e.label)(`config`,t.selectionTagConfig(e))(`disabled`,t.disabled()||!!e.disabled)(`focusable`,!1)(`tooltipOnTruncate`,t.resolvedTooltipOnTruncate()?void 0:!1)}}function Ul(i,n){if(i&1&&Cy(0,`bx-tag`,21),i&2){let e=Ql$1(2);fa$1(`text`,e.overflowTagLabel())(`config`,e.overflowTagConfig())(`tooltip`,e.overflowTagTooltip())(`focusable`,!1)(`tooltipOnTruncate`,e.resolvedTooltipOnTruncate()?void 0:!1)}}function Xl(i,n){if(i&1&&(Os$1(0,`span`,13),Yb(1,Gl,1,5,`bx-tag`,20,_a),bT(3,Ul,1,5,`bx-tag`,21),ba$1()),i&2){let e=Ql$1();Ul$1(),Zb(e.visibleTags()),Ul$1(2),gT(e.selectedOptions().length>e.visibleTagCount()?3:-1)}}function Yl(i,n){if(i&1&&XT(0),i&2){let e=Ql$1();rm(` `,e.selectedOptionLabel()||(e.isFloating()||!e.label()?e.resolvedPlaceholder():``),` `)}}function Ql(i,n){i&1&&Cy(0,`bx-loading-spinner`,22),i&2&&fa$1(`size`,16)(`decorative`,!0)}function Jl(i,n){i&1&&Cy(0,`bx-icon`,23)}function es(i,n){if(i&1&&bT(0,Ql,1,2,`bx-loading-spinner`,22)(1,Jl,1,0,`bx-icon`,23),i&2){let e=n.$implicit;gT(e?0:1)}}function ns(i,n){if(i&1){let e=Jb();Os$1(0,`button`,24),br(`click`,function(){Jc$1(e);let r=Ql$1();return el$1(r.clearSelection())}),Cy(1,`bx-icon`,25),ba$1()}if(i&2){let e=Ql$1();fa$1(`surfaceEffects`,!1)(`disabled`,e.disabled())(`bxTooltip`,e.resolvedClearTooltip()),Ro$1(`aria-label`,e.resolvedClearLabel())}}function ts(i,n){if(i&1){let e=Jb();Os$1(0,`div`,28)(1,`bx-search-input`,33,5),br(`search`,function(r){Jc$1(e);let a=Ql$1(3);return el$1(a.onSearchChange(r))})(`keydown.enter`,function(r){return r.preventDefault()}),ba$1()()}if(i&2){let e=Ql$1(3);Ul$1(),fa$1(`value`,e.searchValue())(`compact`,!0)(`placeholder`,e.resolvedSearchPlaceholder())(`ariaLabel`,e.resolvedSearchPlaceholder())}}function is(i,n){if(i&1&&(Os$1(0,`div`,34),XT(1),ba$1()),i&2){let e=Ql$1(),t=e.$implicit,r=e.$index,a=Ql$1(3);fa$1(`id`,a.controlId()+`-group-`+r),Ul$1(),Zy(t.resolvedGroup)}}function rs(i,n){i&1&&Cy(0,`bx-icon`,37)}function as(i,n){if(i&1&&Cy(0,`bx-icon`,38),i&2){let e=Ql$1().$implicit;fa$1(`name`,e.icon)}}function os(i,n){if(i&1&&Xl$1(0,12),i&2){let e=Ql$1(),t=e.$implicit,r=e.$index,a=Ql$1(3);fa$1(`ngTemplateOutlet`,n)(`ngTemplateOutletContext`,p1(2,jl,t,a.isSelected(t.value),r))}}function ls(i,n){if(i&1&&(Os$1(0,`span`),XT(1),ba$1()),i&2){let e=Ql$1().$implicit;Ul$1(),Zy(e.resolvedStr)}}function ss(i,n){if(i&1){let e=Jb();bT(0,is,2,2,`div`,34),Os$1(1,`button`,35),br(`click`,function(){let r=Jc$1(e).$implicit,a=Ql$1(3);return el$1(a.selectOption(r))}),Os$1(2,`span`,36),bT(3,rs,1,0,`bx-icon`,37),ba$1(),bT(4,as,1,1,`bx-icon`,38),bT(5,os,1,6,`ng-container`,12)(6,ls,2,1,`span`),ba$1()}if(i&2){let e,t=n.$implicit,r=n.$index,a=Ql$1(3);gT(t.resolvedGroup&&(r===0||a.filteredOptions()[r-1].resolvedGroup!==t.resolvedGroup)?0:-1),Ul$1(),fa$1(`disabled`,t.disabled||t.groupDisabled||!1),Ro$1(`aria-selected`,a.isSelected(t.value)),Ul$1(2),gT(a.isSelected(t.value)?3:-1),Ul$1(),gT(t.icon?4:-1),Ul$1(),gT((e=a.optionTemplate())?5:6,e)}}function ds(i,n){if(i&1&&(Os$1(0,`div`,39),XT(1),ba$1()),i&2){let e=Ql$1(4);Ul$1(),Zy(e.resolvedEmptyMessage())}}function cs(i,n){if(i&1&&bT(0,ds,2,1,`div`,39),i&2){let e=Ql$1(3);gT(e.loading()?-1:0)}}function us(i,n){if(i&1&&(Os$1(0,`span`),XT(1),ba$1()),i&2){let e=Ql$1(4);Ul$1(),Zy(e.resolvedLoadingLabel())}}function bs(i,n){i&1&&Cy(0,`bx-loading-spinner`,22),i&2&&fa$1(`size`,20)(`decorative`,!0)}function ps(i,n){if(i&1&&(Os$1(0,`div`,31),bT(1,us,2,1,`span`)(2,bs,1,2,`bx-loading-spinner`,22),ba$1()),i&2){let e=Ql$1(3);Ro$1(`aria-label`,e.resolvedLoadingLabel()||e.resolvedLoadingAriaLabel()),Ul$1(),gT(e.resolvedLoadingLabel()?1:2)}}function gs(i,n){if(i&1&&(Os$1(0,`div`,32),Cy(1,`bx-loading-indicator`,40),ba$1()),i&2){let e=Ql$1(3);Ul$1(),fa$1(`size`,16)(`label`,e.loadingLabel()??e.loadingAriaLabel())}}function ms(i,n){if(i&1){let e=Jb();Os$1(0,`div`,27),br(`keydown`,function(r){Jc$1(e);let a=Ql$1(2);return el$1(a.onPanelKey(r))}),bT(1,ts,3,4,`div`,28),Os$1(2,`div`,29,4),br(`loadMore`,function(r){Jc$1(e);let a=Ql$1(2);return el$1(a.requestMore(r))}),Os$1(4,`div`,30),Yb(5,ss,7,6,null,null,_a,!1,cs,1,1),ba$1(),bT(8,ps,3,2,`div`,31)(9,gs,2,2,`div`,32),ba$1()()}if(i&2){let e=CT(3),t=Ql$1(2);HT(t.panelClass()),fa$1(`bxSurfaceInteractive`,!1),Ul$1(),gT(t.isSearchable()?1:-1),Ul$1(),fa$1(`loadMoreHasMore`,t.hasMore())(`loadMoreSuppressed`,t.isSearching())(`loadMoreLoading`,t.loading())(`loadMoreDisabled`,t.disabled()||t.isReadonly())(`loadMoreError`,t.loadError())(`loadMoreConfig`,t.loadMoreConfig())(`loadMoreTemplate`,t.loadMoreTemplate())(`loadMoreRevision`,t.options()),Ul$1(2),fa$1(`hidden`,t.isSearching())(`id`,t.controlId()+`-options`),Ro$1(`aria-label`,t.ariaLabel()||t.resolvedLabel()),Ul$1(),Zb(t.filteredOptions()),Ul$1(3),gT(t.isSearching()?8:t.loading()&&!e.actionVisible()?9:-1)}}function hs(i,n){if(i&1){let e=Jb();Ey(0,ms,10,17,`ng-template`,26,3,y1),br(`overlayOutsideClick`,function(r){Jc$1(e);let a=Ql$1();return el$1(a.onOutsideClick(r))})(`attach`,function(){Jc$1(e);let r=CT(1),a=Ql$1();return el$1(a.onPanelAttach(r))})(`detach`,function(){Jc$1(e);let r=Ql$1();return el$1(r.onPanelDetach())})(`positionChange`,function(){Jc$1(e);let r=Ql$1();return el$1(r.refreshPanel())})}if(i&2){let e=Ql$1(),t=CT(3);fa$1(`cdkConnectedOverlayOrigin`,t)(`cdkConnectedOverlayOpen`,!0)(`cdkConnectedOverlayPositions`,e.overlayPositions)(`cdkConnectedOverlayHasBackdrop`,!1)(`cdkConnectedOverlayPush`,!0)(`cdkConnectedOverlayViewportMargin`,8)(`cdkConnectedOverlayScrollStrategy`,e.panelScrollStrategy)(`cdkConnectedOverlayUsePopover`,e.overlayPopoverLocation(t.elementRef.nativeElement))(`cdkConnectedOverlayWidth`,t.elementRef.nativeElement.offsetWidth)}}var Vt=class i extends Dn{selectionChange=wk();clearSelection(){this.clearSelectedValue(null)&&this.selectionChange.emit({value:null,source:`clear`})}isSelected(n){let e=this.internalValue();return e!==null&&this.compareWith()(e,n)}selectOption(n){n.disabled||n.groupDisabled||this.disabled()||this.isReadonly()||(this.updateValue(n.value),this.selectionChange.emit({value:n.value,source:`user`}),this.close())}static ɵfac=(()=>{let n;return function(t){return(n||(n=bn(i)))(t||i)}})();static ɵcmp=$n$1({type:i,selectors:[[`bx-select`]],outputs:{selectionChange:`selectionChange`},features:[vt$1],ngContentSelectors:Hl,decls:19,vars:47,consts:[[`origin`,`cdkOverlayOrigin`],[`valueOverflow`,`bxTruncate`],[`labelOverflow`,`bxTruncate`],[`panelOverlay`,`cdkConnectedOverlay`],[`pagination`,`bxLoadMore`],[`searchInput`,``],[3,`control`,`inline`,`tooltip`,`showLoadingIndicator`,`hint`,`hintEnd`,`subscriptSizing`,`forId`],[1,`bx-select-control`],[`type`,`button`,`role`,`combobox`,`aria-haspopup`,`listbox`,`cdkOverlayOrigin`,``,`bxSurface`,``,1,`bx-select-trigger`,3,`click`,`keydown`,`blur`,`bxTooltip`,`bxTooltipHover`,`bxTooltipTouch`,`id`,`disabled`],[1,`bx-select-container`],[1,`bx-floating-label`],[1,`bx-select-value`,3,`bxTruncate`],[3,`ngTemplateOutlet`,`ngTemplateOutletContext`],[1,`bx-selected-tags`],[`aria-hidden`,`true`,1,`bx-select-caret`],[3,`value`],[`bx-button`,``,`type`,`button`,`variant`,`text`,1,`bx-select-clear`,3,`surfaceEffects`,`disabled`,`bxTooltip`],[`cdkConnectedOverlay`,``,3,`cdkConnectedOverlayOrigin`,`cdkConnectedOverlayOpen`,`cdkConnectedOverlayPositions`,`cdkConnectedOverlayHasBackdrop`,`cdkConnectedOverlayPush`,`cdkConnectedOverlayViewportMargin`,`cdkConnectedOverlayScrollStrategy`,`cdkConnectedOverlayUsePopover`,`cdkConnectedOverlayWidth`],[3,`bxTruncate`],[`aria-hidden`,`true`,1,`bx-field-required`],[3,`text`,`config`,`disabled`,`focusable`,`tooltipOnTruncate`],[1,`bx-overflow-tag`,3,`text`,`config`,`tooltip`,`focusable`,`tooltipOnTruncate`],[3,`size`,`decorative`],[`name`,`chevron-down`,`size`,`16`],[`bx-button`,``,`type`,`button`,`variant`,`text`,1,`bx-select-clear`,3,`click`,`surfaceEffects`,`disabled`,`bxTooltip`],[`name`,`x`,`size`,`16`],[`cdkConnectedOverlay`,``,3,`overlayOutsideClick`,`attach`,`detach`,`positionChange`,`cdkConnectedOverlayOrigin`,`cdkConnectedOverlayOpen`,`cdkConnectedOverlayPositions`,`cdkConnectedOverlayHasBackdrop`,`cdkConnectedOverlayPush`,`cdkConnectedOverlayViewportMargin`,`cdkConnectedOverlayScrollStrategy`,`cdkConnectedOverlayUsePopover`,`cdkConnectedOverlayWidth`],[`bxSurface`,``,`data-bx-surface`,`glass`,`tabindex`,`-1`,1,`bx-select-panel`,3,`keydown`,`bxSurfaceInteractive`],[1,`bx-select-search-container`],[`bxLoadMore`,``,1,`bx-select-menu-container`,3,`loadMore`,`loadMoreHasMore`,`loadMoreSuppressed`,`loadMoreLoading`,`loadMoreDisabled`,`loadMoreError`,`loadMoreConfig`,`loadMoreTemplate`,`loadMoreRevision`],[`role`,`listbox`,3,`hidden`,`id`],[`role`,`status`,1,`bx-select-search-state`],[1,`bx-select-loading`],[3,`search`,`keydown.enter`,`value`,`compact`,`placeholder`,`ariaLabel`],[1,`bx-select-group`,3,`id`],[`type`,`button`,`role`,`option`,`tabindex`,`-1`,1,`bx-select-option`,3,`click`,`disabled`],[`aria-hidden`,`true`,1,`bx-select-check-placeholder`],[`name`,`check`,`size`,`16`],[`size`,`16`,3,`name`],[`role`,`status`,1,`bx-select-empty`],[3,`size`,`label`]],template:function(e,t){if(e&1&&(jy(Bl),Os$1(0,`bx-form-field`,6)(1,`div`,7)(2,`button`,8,0),br(`click`,function(){return t.toggleOpen()})(`keydown`,function(a){return t.onTriggerKey(a)})(`blur`,function(){return t.onTriggerBlur()}),Os$1(4,`div`,9),bT(5,Kl,5,3,`span`,10),Os$1(6,`span`,11,1),bT(8,Zl,1,2,`ng-container`,12)(9,Xl,4,1,`span`,13)(10,Yl,1,1),ba$1()(),Py(11),Os$1(12,`span`,14)(13,`bx-visual-transition`,15),Ey(14,es,2,1,`ng-template`),ba$1()()(),bT(15,ns,2,4,`button`,16),ba$1(),bT(16,hs,2,9,null,17),Py(17,1,ql),Py(18,2,Wl),ba$1()),e&2){let r;fa$1(`control`,t.fieldControl)(`inline`,!0)(`tooltip`,t.tooltip())(`showLoadingIndicator`,!1)(`hint`,t.hint())(`hintEnd`,t.hintEnd())(`subscriptSizing`,t.resolvedSubscriptSizing())(`forId`,t.controlId()),Ul$1(),Lr(`has-clear`,t.showClear()),Ul$1(),Lr(`has-label`,!!t.label())(`is-invalid`,t.showError())(`is-outline`,t.resolvedAppearance()===`outline`)(`is-open`,t.isOpen())(`is-floating`,t.isFloating())(`is-readonly`,t.isReadonly())(`is-keyboard-focused`,t.keyboardFocused()),fa$1(`bxTooltip`,t.resolvedTooltipOnTruncate()?t.selectionDisplay()===`tags`?t.selectedOptionLabel():t.truncatedSelectionTooltip():``)(`bxTooltipHover`,t.selectionDisplay()!==`tags`)(`bxTooltipTouch`,t.selectionDisplay()===`tags`?`none`:`longpress`)(`id`,t.controlId())(`disabled`,t.disabled()),Ro$1(`data-testid`,t.dataTestId())(`aria-label`,t.ariaLabel()||t.resolvedLabel())(`aria-labelledby`,t.ariaLabelledBy())(`aria-describedby`,t.describedBy())(`aria-invalid`,t.showError())(`aria-required`,t.required())(`aria-readonly`,t.isReadonly())(`aria-busy`,t.loading()||t.pending()||t.isSearching())(`aria-expanded`,t.isOpen())(`aria-controls`,t.isPanelAttached()?t.controlId()+`-options`:null),Ul$1(3),gT(t.label()?5:-1),Ul$1(),Lr(`is-placeholder`,!t.selectedOptionLabel()),fa$1(`bxTruncate`,!(t.selectionDisplay()===`tags`&&t.selectedOptions().length)&&!t.triggerTemplate()),Ul$1(2),gT((r=t.triggerTemplate())?8:t.selectionDisplay()===`tags`&&t.selectedOptions().length?9:10,r),Ul$1(5),fa$1(`value`,t.loading()||t.pending()||t.isSearching()),Ul$1(2),gT(t.showClear()?15:-1),Ul$1(),gT(t.isPanelAttached()?16:-1)}},dependencies:[OD,RD,nN,rN,zm,Y,fe,U,kn,Ae,ym,Ki,on,zs$1,Pt$1,ct],styles:[`
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
}`]})};var fs=[`track`];var xs=[`*`,[[`bx-error`]],[[`bx-hint`]]];var vs=[`*`,`bx-error`,`bx-hint`];var ys=[`ngProjectAs`,`bx-error`,5,[`bx-error`]];var _s=[`ngProjectAs`,`bx-hint`,5,[`bx-hint`]];function Ss(i,n){i&1&&(Os$1(0,`span`,7),XT(1,`*`),ba$1())}var Sa=class i extends Nn{bxA11yService=m(Fr);track=d4(`track`);motion;constructor(){super(),Sk(()=>{let n=this.track()?.nativeElement,e=this.displayedChecked()?1:0,t=this.bxA11yService.isReducedMotion();if(!n)return;let r=!this.motion;this.motion??=Wo$1([e],([a],[l])=>{Go$1(n,{"--bx-toggle-position":String(a),"--bx-toggle-stretch":String(this.bxA11yService.isReducedMotion()?0:Math.min(.05,Math.abs(l)*.008))})},hr.elastic),this.motion.retarget([e],r||t)}),this.destroyRef.onDestroy(()=>this.motion?.destroy())}static ɵfac=function(e){return new(e||i)};static ɵcmp=$n$1({type:i,selectors:[[`bx-slide-toggle`]],viewQuery:function(e,t){e&1&&Ly(t.track,fs,5),e&2&&em()},features:[vt$1],ngContentSelectors:vs,decls:12,vars:36,consts:[[`track`,``],[3,`control`,`inline`,`tooltip`,`loading`,`hint`,`hintEnd`,`subscriptSizing`,`forId`],[1,`bx-inline-wrapper`],[`type`,`checkbox`,`role`,`switch`,1,`bx-visually-hidden`,3,`click`,`change`,`blur`,`id`,`disabled`,`required`,`checked`],[`bxSurface`,``,1,`bx-slide-toggle-track`,3,`bxSurfaceEmission`,`bxSurfaceEmissionStrength`],[1,`bx-slide-toggle-thumb`],[1,`bx-inline-label`],[`aria-hidden`,`true`,1,`bx-inline-required`]],template:function(e,t){e&1&&(jy(xs),Os$1(0,`bx-form-field`,1)(1,`label`,2)(2,`input`,3),br(`click`,function(a){return t.onReadonlyClick(a)})(`change`,function(a){return t.onToggle(a)})(`blur`,function(){return t.onBlur()}),ba$1(),Os$1(3,`div`,4,0),Cy(5,`div`,5),ba$1(),Os$1(6,`span`,6),Py(7),XT(8),bT(9,Ss,2,0,`span`,7),ba$1()(),Py(10,1,ys),Py(11,2,_s),ba$1()),e&2&&(fa$1(`control`,t.fieldControl)(`inline`,!0)(`tooltip`,t.tooltip())(`loading`,t.loading())(`hint`,t.hint())(`hintEnd`,t.hintEnd())(`subscriptSizing`,t.resolvedSubscriptSizing())(`forId`,t.controlId()),Ul$1(),Lr(`is-disabled`,t.disabled())(`is-readonly`,t.isReadonly())(`is-keyboard-focused`,t.keyboardFocused())(`label-before`,t.labelPosition()===`before`),Ul$1(),fa$1(`id`,t.controlId())(`disabled`,t.disabled())(`required`,t.effectiveRequired())(`checked`,t.displayedChecked()),Ro$1(`name`,t.name()||null)(`data-testid`,t.dataTestId())(`aria-label`,t.ariaLabel())(`aria-labelledby`,t.ariaLabelledBy())(`aria-describedby`,t.describedBy())(`aria-invalid`,t.showError())(`aria-readonly`,t.isReadonly())(`aria-checked`,t.displayedChecked()),Ul$1(),Lr(`is-checked`,t.displayedChecked())(`is-invalid`,t.showError()),fa$1(`bxSurfaceEmission`,t.showError()?`var(--bx-text-danger)`:`var(--bx-accent)`)(`bxSurfaceEmissionStrength`,t.displayedChecked()?1.1:.35),Ul$1(5),rm(``,t.resolvedLabel(),` `),Ul$1(),gT(t.effectiveRequired()&&!t.resolvedHideRequiredMarker()?9:-1))},dependencies:[RD,Y],styles:[`
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
}`]})};var Ft=class i{elementRef=m(ye);bxA11yService=m(Fr);glassiness=ke();discrete=ke(!1);displayWith=ke(String);showTickMarks=ke(!1);shell;valueLabel;tickList;thumb;motion;opticSurface;releaseGesture;pressed=!1;lastPosition=0;lastInputTime=0;trackWidth=0;thumbWidth=0;pointerId=null;constructor(){m(ou$1),tt(()=>{let t=this.bxA11yService.isReducedMotion(),r=this.glassiness()??`auto`;this.opticSurface?.update({glassiness:r,quality:`auto`,localRefraction:!0,interactive:!1,emission:!1,reducedMotion:t}),t&&this.motion?.retarget([0,0],!0)}),qI(()=>this.sync());let n=m(ce),e=m(me);er(()=>{let t=this.elementRef.nativeElement,r=t.ownerDocument.createElement(`span`);r.className=`bx-slider-shell`;let a=t.ownerDocument.createElement(`span`);a.className=`bx-slider-thumb`,a.setAttribute(`aria-hidden`,`true`);let l=t.ownerDocument.createElement(`span`);l.className=`bx-slider-lens`,a.append(l);let g=t.ownerDocument.createElement(`span`);g.className=`bx-slider-optic`,g.hidden=!0,a.append(g),t.before(r),r.append(t,a),this.shell=r,this.thumb=a,this.motion=Wo$1([0,0],([z,ve])=>{let we=this.bxA11yService.isReducedMotion();g.hidden=z<.01,Go$1(a,{"--bx-slider-pressure":String(we?0:z),"--bx-slider-stretch":String(we?0:Math.max(0,ve))})},hr.elastic);let y=z=>{z?.type===`visibilitychange`&&!t.ownerDocument.hidden||z&&`pointerId`in z&&z.pointerId!==this.pointerId||(this.pressed=!1,this.pointerId=null,this.motion?.retarget([0,0],this.bxA11yService.isReducedMotion()),t.ownerDocument.defaultView?.removeEventListener(`pointerup`,y,!0),t.ownerDocument.defaultView?.removeEventListener(`pointercancel`,y,!0),t.ownerDocument.defaultView?.removeEventListener(`blur`,y),t.ownerDocument.removeEventListener(`visibilitychange`,y),this.releaseGesture=void 0)},w=z=>{!z.isPrimary||z.button!==0||t.disabled||t.hasAttribute(`readonly`)||t.getAttribute(`aria-readonly`)===`true`||(this.opticSurface??=n.runOutsideAngular(()=>zo$1(g,{glassiness:this.glassiness()??`auto`,quality:`auto`,localRefraction:!0,interactive:!1,emission:!1,reducedMotion:this.bxA11yService.isReducedMotion()})),this.pressed=!0,this.pointerId=z.pointerId,this.lastInputTime=0,this.motion?.retarget([1,0],this.bxA11yService.isReducedMotion()),t.ownerDocument.defaultView?.addEventListener(`pointerup`,y,!0),t.ownerDocument.defaultView?.addEventListener(`pointercancel`,y,!0),t.ownerDocument.defaultView?.addEventListener(`blur`,y),t.ownerDocument.addEventListener(`visibilitychange`,y),this.releaseGesture=y)};t.addEventListener(`pointerdown`,w),t.addEventListener(`blur`,y);let R=t.ownerDocument.createElement(`span`);R.className=`bx-slider-value-label`,R.setAttribute(`aria-hidden`,`true`),r.append(R),this.valueLabel=R;let F=t.ownerDocument.createElement(`datalist`);F.id=`bx-slider-ticks-${t.id||Math.random().toString(36).slice(2)}`,r.append(F),this.tickList=F,this.sync();let q=()=>{this.trackWidth=t.offsetWidth,this.thumbWidth=a.offsetWidth,r.style.setProperty(`--bx-slider-center-y`,`${t.offsetTop+t.offsetHeight/2}px`),r.style.setProperty(`--bx-slider-track-start`,`${t.offsetLeft}px`),r.style.setProperty(`--bx-slider-track-width`,`${t.offsetWidth}px`),Uo$1(a),this.sync()},Z=new ResizeObserver(q);n.runOutsideAngular(()=>{Z.observe(t),Z.observe(r),Z.observe(a),q()});let Be=n.runOutsideAngular(()=>gN(a,z=>{let ve=z.reflectionStrength>z.strength,we=ve?z.reflectionStrength:z.strength;we<=.04?(a.style.removeProperty(`--bx-slider-light-color`),a.style.removeProperty(`--bx-slider-light-strength`)):(a.style.setProperty(`--bx-slider-light-color`,ve?z.reflection:z.color),a.style.setProperty(`--bx-slider-light-strength`,String(we))),a.style.setProperty(`--bx-slider-light-x`,`${ve?z.reflectionX:z.x}%`),a.style.setProperty(`--bx-slider-light-y`,`${ve?z.reflectionY:z.y}%`),Go$1(r,{"--bx-slider-light-color":ve?z.reflection:z.color,"--bx-slider-light-strength":String(Math.max(.04,we))})},t));e.onDestroy(()=>{Z.disconnect(),Be(),y(),t.removeEventListener(`pointerdown`,w),t.removeEventListener(`blur`,y),this.motion?.destroy(),this.opticSurface?.destroy(),this.opticSurface=void 0,t.parentNode===r?r.replaceWith(t):r.remove(),this.shell=this.thumb=void 0})})}onInput(n){let e=this.elementRef.nativeElement,t=(e.max===``?100:Number(e.max))-(e.min===``?0:Number(e.min)),r=t>0?e.valueAsNumber/t:0,a=Math.max(.008,(n.timeStamp-this.lastInputTime)/1e3),l=this.pressed&&this.lastInputTime>0?Math.min(.065,Math.abs(r-this.lastPosition)/a*.015):0;this.lastPosition=r,this.lastInputTime=n.timeStamp,this.motion?.retarget([this.pressed?1:0,l],this.bxA11yService.isReducedMotion()),this.sync()}sync(){let n=this.elementRef.nativeElement;(n.disabled||n.hasAttribute(`readonly`)||n.getAttribute(`aria-readonly`)===`true`)&&this.releaseGesture?.();let e=n.min===``?0:Number(n.min),t=n.max===``?100:Number(n.max),r=t>e?Math.max(0,Math.min(100,(n.valueAsNumber-e)/(t-e)*100)):0;if(this.shell&&this.thumbWidth>0&&this.trackWidth>0){let l=n.hasAttribute(`aria-valuemax`)?Number(n.getAttribute(`aria-valuemax`)):n.hasAttribute(`aria-valuemin`)?Number(n.getAttribute(`aria-valuemin`)):null;if(l!==null&&Number.isFinite(l)&&t>e){let g=Math.abs(l-n.valueAsNumber)/(t-e)*(this.trackWidth-this.thumbWidth),y=String(Math.max(0,Math.min(.45,g*2/this.thumbWidth-2)));this.shell.style.getPropertyValue(`--bx-slider-neighbor-limit`)!==y&&this.shell.style.setProperty(`--bx-slider-neighbor-limit`,y)}}if(this.valueLabel&&(this.valueLabel.hidden=!this.discrete(),this.valueLabel.textContent=this.displayWith()(n.valueAsNumber)),this.tickList){let l=Math.min(1e3,Math.floor((t-e)/(Number(n.step)||1))),g=`${e}:${t}:${n.step}:${this.showTickMarks()}`;if(this.tickList.dataset.range!==g&&(this.tickList.replaceChildren(),this.tickList.dataset.range=g,this.showTickMarks()&&l>0))for(let y=0;y<=l;y++){let w=n.ownerDocument.createElement(`option`);w.value=String(e+y*(Number(n.step)||1)),this.tickList.append(w)}this.showTickMarks()?n.setAttribute(`list`,this.tickList.id):n.getAttribute(`list`)===this.tickList.id&&n.removeAttribute(`list`)}let a=`${Number.isFinite(r)?r:0}%`;if(n.style.getPropertyValue(`--bx-slider-progress`)!==a&&n.style.setProperty(`--bx-slider-progress`,a),this.shell){let l=String((Number.isFinite(r)?r:0)/100);this.shell.style.getPropertyValue(`--bx-slider-position`)!==l&&(this.shell.style.setProperty(`--bx-slider-position`,l),this.thumb&&Uo$1(this.thumb))}}static ɵfac=function(e){return new(e||i)};static ɵdir=ue({type:i,selectors:[[`input`,`type`,`range`,`bxSlider`,``]],hostAttrs:[1,`bx-slider`],hostBindings:function(e,t){e&1&&br(`input`,function(a){return t.onInput(a)})},inputs:{glassiness:[1,`glassiness`],discrete:[1,`discrete`],displayWith:[1,`displayWith`],showTickMarks:[1,`showTickMarks`]}})};var Cs=[`*`,[[`bx-error`]],[[`bx-hint`]]];var Ms=[`*`,`bx-error`,`bx-hint`];var Ns=[`ngProjectAs`,`bx-error`,5,[`bx-error`]];var Ts=[`ngProjectAs`,`bx-hint`,5,[`bx-hint`]];var Ca=class i extends de{groupName=K(()=>this.name()||this.controlId());focus(n){let e=this.nativeElement.querySelector(`input:checked:not(:disabled)`);e?e.focus(n):super.focus(n)}select(n){this.updateValue(n)}markTouched(){this.markAsTouched()}static ɵfac=(()=>{let n;return function(t){return(n||(n=bn(i)))(t||i)}})();static ɵcmp=$n$1({type:i,selectors:[[`bx-radio-group`]],features:[tr([{provide:Rt,useExisting:Pt$2(()=>i)}]),vt$1],ngContentSelectors:Ms,decls:5,vars:15,consts:[[3,`control`,`label`,`hint`,`hintEnd`,`tooltip`,`hideRequiredMarker`,`subscriptSizing`,`forId`],[`role`,`radiogroup`,3,`id`]],template:function(e,t){e&1&&(jy(Cs),Os$1(0,`bx-form-field`,0)(1,`div`,1),Py(2),ba$1(),Py(3,1,Ns),Py(4,2,Ts),ba$1()),e&2&&(fa$1(`control`,t.fieldControl)(`label`,t.label())(`hint`,t.hint())(`hintEnd`,t.hintEnd())(`tooltip`,t.tooltip())(`hideRequiredMarker`,t.resolvedHideRequiredMarker())(`subscriptSizing`,t.resolvedSubscriptSizing())(`forId`,t.controlId()),Ul$1(),fa$1(`id`,t.controlId()),Ro$1(`aria-label`,t.ariaLabel()||t.resolvedLabel())(`aria-labelledby`,t.ariaLabelledBy())(`aria-describedby`,t.describedBy())(`aria-invalid`,t.showError())(`aria-required`,t.effectiveRequired())(`aria-readonly`,t.isReadonly()))},dependencies:[Y],styles:[`
[_nghost-%COMP%] {
  display: block;
}
[role=radiogroup][_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: var(--%NS%bx-radio-group-gap, 0.5rem);
  --%NS%bx-field-subscript-height: 0;
}`]})};var Ma=class i{static ɵfac=function(e){return new(e||i)};static ɵdir=ue({type:i,selectors:[[``,`bxPrefix`,``]],hostAttrs:[1,`bx-field-prefix`]})};var Na=class i{static ɵfac=function(e){return new(e||i)};static ɵdir=ue({type:i,selectors:[[``,`bxSuffix`,``]],hostAttrs:[1,`bx-field-suffix`]})};function Ta(i){let n=Number(i);return Number.isFinite(n)?Math.max(2,Math.floor(n)):2}var ws=[`summaryOverflow`];var Os=[[[``,`bxSuffix`,``]],[[`bx-error`]],[[`bx-hint`]]];var Ps=[`[bxSuffix]`,`bx-error`,`bx-hint`];var ks=[`ngProjectAs`,`bx-error`,5,[`bx-error`]];var Ds=[`ngProjectAs`,`bx-hint`,5,[`bx-hint`]];var Is=(i,n,e)=>({$implicit:i,selected:n,index:e});var Oa=(i,n)=>n.value;function Es(i,n){i&1&&(Os$1(0,`span`,21),XT(1,`*`),ba$1())}function Rs(i,n){if(i&1&&(Os$1(0,`span`,11)(1,`span`,20,3),XT(3),ba$1(),bT(4,Es,2,0,`span`,21),ba$1()),i&2){let e=Ql$1();Ul$1(),fa$1(`bxTruncate`,!0),Ul$1(2),Zy(e.resolvedLabel()),Ul$1(),gT(e.required()&&!e.resolvedHideRequiredMarker()?4:-1)}}function Ls(i,n){if(i&1&&Xl$1(0,13),i&2){let e=Ql$1();fa$1(`ngTemplateOutlet`,n)(`ngTemplateOutletContext`,e.triggerContext())}}function As(i,n){if(i&1&&Cy(0,`bx-tag`,22),i&2){let e=Ql$1(2);fa$1(`text`,e.allSelectedText())(`config`,e.tagConfig())(`focusable`,!1)(`tooltipOnTruncate`,!1)}}function Vs(i,n){if(i&1&&Cy(0,`bx-tag`,23),i&2){let e=n.$implicit,t=Ql$1(3);fa$1(`text`,e.label)(`config`,t.selectionTagConfig(e))(`disabled`,t.disabled()||!!e.disabled)(`focusable`,!1)(`tooltipOnTruncate`,t.resolvedTooltipOnTruncate()?void 0:!1)}}function Fs(i,n){if(i&1&&Cy(0,`bx-tag`,24),i&2){let e=Ql$1(3);fa$1(`text`,e.overflowTagLabel())(`config`,e.overflowTagConfig())(`tooltip`,e.overflowTagTooltip())(`focusable`,!1)(`tooltipOnTruncate`,e.resolvedTooltipOnTruncate()?void 0:!1)}}function zs(i,n){if(i&1&&(Yb(0,Vs,1,5,`bx-tag`,23,Oa),bT(2,Fs,1,5,`bx-tag`,24)),i&2){let e=Ql$1(2);Zb(e.visibleTags()),Ul$1(2),gT(e.selectedOptions().length>e.visibleTagCount()?2:-1)}}function Bs(i,n){if(i&1&&(Os$1(0,`span`,14),bT(1,As,1,4,`bx-tag`,22)(2,zs,3,1),ba$1()),i&2){let e=Ql$1();Ul$1(),gT(e.selectAll()&&e.allSelectedText()?1:2)}}function Hs(i,n){if(i&1&&XT(0),i&2){let e=Ql$1();rm(` `,e.displayedSelection()||(e.isFloating()||!e.label()?e.resolvedPlaceholder():``),` `)}}function qs(i,n){i&1&&Cy(0,`bx-loading-spinner`,25),i&2&&fa$1(`size`,16)(`decorative`,!0)}function Ws(i,n){i&1&&Cy(0,`bx-icon`,26)}function js(i,n){if(i&1&&bT(0,qs,1,2,`bx-loading-spinner`,25)(1,Ws,1,0,`bx-icon`,26),i&2){let e=n.$implicit;gT(e?0:1)}}function $s(i,n){if(i&1){let e=Jb();Os$1(0,`button`,27),br(`click`,function(){Jc$1(e);let r=Ql$1();return el$1(r.clearSelection())}),Cy(1,`bx-icon`,28),ba$1()}if(i&2){let e=Ql$1();fa$1(`surfaceEffects`,!1)(`disabled`,e.disabled())(`bxTooltip`,e.resolvedClearTooltip()),Ro$1(`aria-label`,e.resolvedClearLabel())}}function Ks(i,n){if(i&1){let e=Jb();Os$1(0,`div`,31)(1,`bx-search-input`,37,6),br(`search`,function(r){Jc$1(e);let a=Ql$1(3);return el$1(a.onSearchChange(r))})(`keydown.enter`,function(r){return r.preventDefault()}),ba$1()()}if(i&2){let e=Ql$1(3);Ul$1(),fa$1(`value`,e.searchValue())(`compact`,!0)(`placeholder`,e.resolvedSearchPlaceholder())(`ariaLabel`,e.resolvedSearchPlaceholder())}}function Zs(i,n){if(i&1){let e=Jb();Os$1(0,`button`,38),br(`click`,function(){Jc$1(e);let r=Ql$1(3);return el$1(r.toggleSelectAll())}),Cy(1,`bx-checkbox-indicator`,39),XT(2),ba$1()}if(i&2){let e=Ql$1(3);fa$1(`disabled`,e.disabled()||e.isReadonly()),Ro$1(`aria-checked`,e.selectAllChecked()?`true`:e.someSelected()?`mixed`:`false`),Ul$1(),fa$1(`checked`,e.selectAllChecked())(`indeterminate`,!e.selectAllChecked()&&e.someSelected())(`disabled`,e.disabled()),Ul$1(),rm(` `,e.resolvedSelectAllLabel(),` `)}}function Gs(i,n){if(i&1&&(Os$1(0,`div`,40),XT(1),ba$1()),i&2){let e=Ql$1(),t=e.$implicit,r=e.$index,a=Ql$1(3);fa$1(`id`,a.controlId()+`-group-`+r),Ul$1(),Zy(t.resolvedGroup)}}function Us(i,n){if(i&1&&Cy(0,`bx-icon`,43),i&2){let e=Ql$1().$implicit;fa$1(`name`,e.icon)}}function Xs(i,n){if(i&1&&Xl$1(0,13),i&2){let e=Ql$1(),t=e.$implicit,r=e.$index,a=Ql$1(3);fa$1(`ngTemplateOutlet`,n)(`ngTemplateOutletContext`,p1(2,Is,t,a.isSelected(t.value),r))}}function Ys(i,n){if(i&1&&(Os$1(0,`span`),XT(1),ba$1()),i&2){let e=Ql$1().$implicit;Ul$1(),Zy(e.resolvedStr)}}function Qs(i,n){if(i&1){let e=Jb();bT(0,Gs,2,2,`div`,40),Os$1(1,`button`,41),br(`click`,function(){let r=Jc$1(e).$implicit,a=Ql$1(3);return el$1(a.selectOption(r))}),Cy(2,`bx-checkbox-indicator`,42),bT(3,Us,1,1,`bx-icon`,43),bT(4,Xs,1,6,`ng-container`,13)(5,Ys,2,1,`span`),ba$1()}if(i&2){let e,t=n.$implicit,r=n.$index,a=Ql$1(3);gT(t.resolvedGroup&&(r===0||a.filteredOptions()[r-1].resolvedGroup!==t.resolvedGroup)?0:-1),Ul$1(),fa$1(`disabled`,t.disabled||t.groupDisabled||!1),Ro$1(`aria-selected`,a.isSelected(t.value)),Ul$1(),fa$1(`checked`,a.isSelected(t.value))(`disabled`,a.disabled()||!!t.disabled||!!t.groupDisabled),Ul$1(),gT(t.icon?3:-1),Ul$1(),gT((e=a.optionTemplate())?4:5,e)}}function Js(i,n){if(i&1&&(Os$1(0,`div`,44),XT(1),ba$1()),i&2){let e=Ql$1(4);Ul$1(),Zy(e.resolvedEmptyMessage())}}function ed(i,n){if(i&1&&bT(0,Js,2,1,`div`,44),i&2){let e=Ql$1(3);gT(e.loading()?-1:0)}}function nd(i,n){if(i&1&&(Os$1(0,`span`),XT(1),ba$1()),i&2){let e=Ql$1(4);Ul$1(),Zy(e.resolvedLoadingLabel())}}function td(i,n){i&1&&Cy(0,`bx-loading-spinner`,25),i&2&&fa$1(`size`,20)(`decorative`,!0)}function id(i,n){if(i&1&&(Os$1(0,`div`,35),bT(1,nd,2,1,`span`)(2,td,1,2,`bx-loading-spinner`,25),ba$1()),i&2){let e=Ql$1(3);Ro$1(`aria-label`,e.resolvedLoadingLabel()||e.resolvedLoadingAriaLabel()),Ul$1(),gT(e.resolvedLoadingLabel()?1:2)}}function rd(i,n){if(i&1&&(Os$1(0,`div`,36),Cy(1,`bx-loading-indicator`,45),ba$1()),i&2){let e=Ql$1(3);Ul$1(),fa$1(`size`,16)(`label`,e.loadingLabel()??e.loadingAriaLabel())}}function ad(i,n){if(i&1){let e=Jb();Os$1(0,`div`,30),br(`keydown`,function(r){Jc$1(e);let a=Ql$1(2);return el$1(a.onPanelKey(r))}),bT(1,Ks,3,4,`div`,31),bT(2,Zs,3,6,`button`,32),Os$1(3,`div`,33,5),br(`loadMore`,function(r){Jc$1(e);let a=Ql$1(2);return el$1(a.requestMore(r))}),Os$1(5,`div`,34),Yb(6,Qs,6,7,null,null,Oa,!1,ed,1,1),ba$1(),bT(9,id,3,2,`div`,35)(10,rd,2,2,`div`,36),ba$1()()}if(i&2){let e=CT(4),t=Ql$1(2);HT(t.panelClass()),fa$1(`bxSurfaceInteractive`,!1),Ul$1(),gT(t.isSearchable()?1:-1),Ul$1(),gT(t.showSelectAll()?2:-1),Ul$1(),fa$1(`loadMoreHasMore`,t.hasMore())(`loadMoreSuppressed`,t.isSearching())(`loadMoreLoading`,t.loading())(`loadMoreDisabled`,t.disabled()||t.isReadonly())(`loadMoreError`,t.loadError())(`loadMoreConfig`,t.loadMoreConfig())(`loadMoreTemplate`,t.loadMoreTemplate())(`loadMoreRevision`,t.options()),Ul$1(2),fa$1(`hidden`,t.isSearching())(`id`,t.controlId()+`-options`),Ro$1(`aria-multiselectable`,!0)(`aria-label`,t.ariaLabel()||t.resolvedLabel()),Ul$1(),Zb(t.filteredOptions()),Ul$1(3),gT(t.isSearching()?9:t.loading()&&!e.actionVisible()?10:-1)}}function od(i,n){if(i&1){let e=Jb();Ey(0,ad,11,19,`ng-template`,29,4,y1),br(`overlayOutsideClick`,function(r){Jc$1(e);let a=Ql$1();return el$1(a.onOutsideClick(r))})(`attach`,function(){Jc$1(e);let r=CT(1),a=Ql$1();return el$1(a.onPanelAttach(r))})(`detach`,function(){Jc$1(e);let r=Ql$1();return el$1(r.onPanelDetach())})(`positionChange`,function(){Jc$1(e);let r=Ql$1();return el$1(r.refreshPanel())})}if(i&2){let e=Ql$1(),t=CT(3);fa$1(`cdkConnectedOverlayOrigin`,t)(`cdkConnectedOverlayOpen`,!0)(`cdkConnectedOverlayPositions`,e.overlayPositions)(`cdkConnectedOverlayHasBackdrop`,!1)(`cdkConnectedOverlayPush`,!0)(`cdkConnectedOverlayViewportMargin`,8)(`cdkConnectedOverlayScrollStrategy`,e.panelScrollStrategy)(`cdkConnectedOverlayUsePopover`,e.overlayPopoverLocation(t.elementRef.nativeElement))(`cdkConnectedOverlayWidth`,t.elementRef.nativeElement.offsetWidth)}}var wa=class i extends Dn{labelsAdapter=m(xQ,{optional:!0});summaryOverflow=d4(`summaryOverflow`);hasSelection=K(()=>!!this.internalValue()?.length||this.selectAll());resolvedSelectAllLabel=K(()=>mQ(this.selectAllLabel(),this.labelsAdapter));selectableOptions=K(()=>this.filteredOptions().filter(n=>!n.disabled&&!n.groupDisabled));allLoadedSelected=K(()=>{let n=this.selectableOptions();return n.length>0&&n.every(e=>this.isSelected(e.value))});selectAllChecked=K(()=>this.selectAll()||this.allLoadedSelected());someSelected=K(()=>this.selectableOptions().some(n=>this.isSelected(n.value)));usesSummary=K(()=>{let n=this.internalValue()?.length??0;return this.selectionDisplay()===`tags`&&this.selectedOptions().length>this.visibleTagCount()||!!(this.selectAll()&&this.allSelectedText())||n>this.summaryThreshold()||n>=2&&(this.summaryOverflow()?.truncated()??!1)});displayedSelection=K(()=>{if(this.selectAll()&&this.allSelectedText())return mQ(this.allSelectedText(),this.labelsAdapter);if(!this.usesSummary())return this.selectedOptionLabel();let n=this.internalValue()?.length??0;return mQ(this.selectedCountText(),this.labelsAdapter,{count:n}).replaceAll(`{count}`,String(n))});resolvedAllSelectedTooltip=K(()=>{let n=this.allSelectedTooltip();return n===!1?``:n===void 0?this.resolvedTooltipOnTruncate()?this.selectedOptionLabel():``:mQ(n,this.labelsAdapter)});selectionTooltip=K(()=>this.isOpen()?``:this.selectAll()?this.resolvedAllSelectedTooltip():this.resolvedTooltipOnTruncate()?this.selectionDisplay()===`tags`||this.usesSummary()?this.selectedOptionLabel():this.truncatedSelectionTooltip():``);allSelectedTooltip=ke(void 0);allSelectedText=ke(void 0);selectedCountText=ke(`{count} selected`);summaryThreshold=ke(2,{transform:Ta});showSelectAll=ke(!0);selectAllLabel=ke(`Select all`);selectionScope=ke(void 0);selectAll=l4(!1);selectionChange=wk();selectAllIntentChange=wk();scope;constructor(){super(),tt(()=>{let n=this.selectionScope()??this.searchTerm(),e=this.filteredOptions(),t=this.selectAll(),r=le(this.internalValue)??[];if(this.scope!==void 0&&n!==this.scope&&t)this.selectAll.set(!1),this.emitIntent(!1,`scope-change`,n);else if(t&&!this.disabled()&&!this.isReadonly()){let a=e.filter(l=>!l.disabled&&!l.groupDisabled&&!r.some(g=>this.compareWith()(g,l.value))).map(l=>l.value);if(a.length){let l=[...r,...a];this.updateValue(l),this.selectionChange.emit({value:l,source:`page`})}}this.scope=n})}clearSelection(){if(this.disabled()||this.isReadonly())return;let n=this.selectAll();this.selectAll.set(!1),this.clearSelectedValue([]),this.selectionChange.emit({value:[],source:`clear`}),n&&this.emitIntent(!1,`clear`)}isSelected(n){return(this.internalValue()??[]).some(e=>this.compareWith()(e,n))}toggleSelectAll(){if(this.disabled()||this.isReadonly())return;let n=!this.selectAllChecked(),e=this.selectableOptions(),t=this.internalValue()??[],r=n?[...t,...e.filter(a=>!this.isSelected(a.value)).map(a=>a.value)]:t.filter(a=>!e.some(l=>this.compareWith()(a,l.value)));this.selectAll.set(n),this.updateValue(r),this.selectionChange.emit({value:r,source:`select-all`}),this.emitIntent(n,`toggle`)}reset(){super.reset(),this.selectAll()&&(this.selectAll.set(!1),this.emitIntent(!1,`reset`))}selectOption(n){if(n.disabled||n.groupDisabled||this.disabled()||this.isReadonly())return;let e=this.isSelected(n.value),t=e?(this.internalValue()??[]).filter(r=>!this.compareWith()(r,n.value)):[...this.internalValue()??[],n.value];this.updateValue(t),this.selectionChange.emit({value:t,source:`user`}),e&&this.selectAll()&&(this.selectAll.set(!1),this.emitIntent(!1,`item-deselected`))}emitIntent(n,e,t=this.selectionScope()??this.searchTerm()){this.selectAllIntentChange.emit({selected:n,scope:t,values:this.internalValue()??[],reason:e})}static ɵfac=function(e){return new(e||i)};static ɵcmp=$n$1({type:i,selectors:[[`bx-multi-select`]],viewQuery:function(e,t){e&1&&Ly(t.summaryOverflow,ws,5),e&2&&em()},inputs:{allSelectedTooltip:[1,`allSelectedTooltip`],allSelectedText:[1,`allSelectedText`],selectedCountText:[1,`selectedCountText`],summaryThreshold:[1,`summaryThreshold`],showSelectAll:[1,`showSelectAll`],selectAllLabel:[1,`selectAllLabel`],selectionScope:[1,`selectionScope`],selectAll:[1,`selectAll`]},outputs:{selectAll:`selectAllChange`,selectionChange:`selectionChange`,selectAllIntentChange:`selectAllIntentChange`},features:[vt$1],ngContentSelectors:Ps,decls:22,vars:48,consts:[[`origin`,`cdkOverlayOrigin`],[`valueOverflow`,`bxTruncate`],[`summaryOverflow`,`bxTruncate`],[`labelOverflow`,`bxTruncate`],[`panelOverlay`,`cdkConnectedOverlay`],[`pagination`,`bxLoadMore`],[`searchInput`,``],[3,`control`,`inline`,`tooltip`,`showLoadingIndicator`,`hint`,`hintEnd`,`subscriptSizing`,`forId`],[1,`bx-select-control`],[`type`,`button`,`role`,`combobox`,`aria-haspopup`,`listbox`,`cdkOverlayOrigin`,``,`bxSurface`,``,1,`bx-select-trigger`,3,`click`,`keydown`,`blur`,`bxTooltip`,`bxTooltipHover`,`bxTooltipTouch`,`id`,`disabled`],[1,`bx-select-container`],[1,`bx-floating-label`],[1,`bx-select-value`,3,`bxTruncate`],[3,`ngTemplateOutlet`,`ngTemplateOutletContext`],[1,`bx-selected-tags`],[`bxTruncate`,``,`aria-hidden`,`true`,1,`bx-select-measure`],[`aria-hidden`,`true`,1,`bx-select-caret`],[3,`value`],[`bx-button`,``,`type`,`button`,`variant`,`text`,1,`bx-select-clear`,3,`surfaceEffects`,`disabled`,`bxTooltip`],[`cdkConnectedOverlay`,``,3,`cdkConnectedOverlayOrigin`,`cdkConnectedOverlayOpen`,`cdkConnectedOverlayPositions`,`cdkConnectedOverlayHasBackdrop`,`cdkConnectedOverlayPush`,`cdkConnectedOverlayViewportMargin`,`cdkConnectedOverlayScrollStrategy`,`cdkConnectedOverlayUsePopover`,`cdkConnectedOverlayWidth`],[3,`bxTruncate`],[`aria-hidden`,`true`,1,`bx-field-required`],[`tooltip`,``,3,`text`,`config`,`focusable`,`tooltipOnTruncate`],[3,`text`,`config`,`disabled`,`focusable`,`tooltipOnTruncate`],[1,`bx-overflow-tag`,3,`text`,`config`,`tooltip`,`focusable`,`tooltipOnTruncate`],[3,`size`,`decorative`],[`name`,`chevron-down`,`size`,`16`],[`bx-button`,``,`type`,`button`,`variant`,`text`,1,`bx-select-clear`,3,`click`,`surfaceEffects`,`disabled`,`bxTooltip`],[`name`,`x`,`size`,`16`],[`cdkConnectedOverlay`,``,3,`overlayOutsideClick`,`attach`,`detach`,`positionChange`,`cdkConnectedOverlayOrigin`,`cdkConnectedOverlayOpen`,`cdkConnectedOverlayPositions`,`cdkConnectedOverlayHasBackdrop`,`cdkConnectedOverlayPush`,`cdkConnectedOverlayViewportMargin`,`cdkConnectedOverlayScrollStrategy`,`cdkConnectedOverlayUsePopover`,`cdkConnectedOverlayWidth`],[`bxSurface`,``,`data-bx-surface`,`glass`,`tabindex`,`-1`,1,`bx-select-panel`,3,`keydown`,`bxSurfaceInteractive`],[1,`bx-select-search-container`],[`type`,`button`,`role`,`checkbox`,1,`bx-select-all`,3,`disabled`],[`bxLoadMore`,``,1,`bx-select-menu-container`,3,`loadMore`,`loadMoreHasMore`,`loadMoreSuppressed`,`loadMoreLoading`,`loadMoreDisabled`,`loadMoreError`,`loadMoreConfig`,`loadMoreTemplate`,`loadMoreRevision`],[`role`,`listbox`,3,`hidden`,`id`],[`role`,`status`,1,`bx-select-search-state`],[1,`bx-select-loading`],[3,`search`,`keydown.enter`,`value`,`compact`,`placeholder`,`ariaLabel`],[`type`,`button`,`role`,`checkbox`,1,`bx-select-all`,3,`click`,`disabled`],[3,`checked`,`indeterminate`,`disabled`],[1,`bx-select-group`,3,`id`],[`type`,`button`,`role`,`option`,`tabindex`,`-1`,1,`bx-select-option`,3,`click`,`disabled`],[3,`checked`,`disabled`],[`size`,`16`,3,`name`],[`role`,`status`,1,`bx-select-empty`],[3,`size`,`label`]],template:function(e,t){if(e&1&&(jy(Os),Os$1(0,`bx-form-field`,7)(1,`div`,8)(2,`button`,9,0),br(`click`,function(){return t.toggleOpen()})(`keydown`,function(a){return t.onTriggerKey(a)})(`blur`,function(){return t.onTriggerBlur()}),Os$1(4,`div`,10),bT(5,Rs,5,3,`span`,11),Os$1(6,`span`,12,1),bT(8,Ls,1,2,`ng-container`,13)(9,Bs,3,1,`span`,14)(10,Hs,1,1),ba$1(),Os$1(11,`span`,15,2),XT(13),ba$1()(),Py(14),Os$1(15,`span`,16)(16,`bx-visual-transition`,17),Ey(17,js,2,1,`ng-template`),ba$1()()(),bT(18,$s,2,4,`button`,18),ba$1(),bT(19,od,2,9,null,19),Py(20,1,ks),Py(21,2,Ds),ba$1()),e&2){let r;fa$1(`control`,t.fieldControl)(`inline`,!0)(`tooltip`,t.tooltip())(`showLoadingIndicator`,!1)(`hint`,t.hint())(`hintEnd`,t.hintEnd())(`subscriptSizing`,t.resolvedSubscriptSizing())(`forId`,t.controlId()),Ul$1(),Lr(`has-clear`,t.showClear()),Ul$1(),Lr(`has-label`,!!t.label())(`is-invalid`,t.showError())(`is-outline`,t.resolvedAppearance()===`outline`)(`is-open`,t.isOpen())(`is-floating`,t.isFloating())(`is-readonly`,t.isReadonly())(`is-keyboard-focused`,t.keyboardFocused()),fa$1(`bxTooltip`,t.selectionTooltip())(`bxTooltipHover`,t.selectionDisplay()!==`tags`||t.selectAll()&&!!t.allSelectedText())(`bxTooltipTouch`,t.selectionDisplay()===`tags`&&!(t.selectAll()&&t.allSelectedText())?`none`:`longpress`)(`id`,t.controlId())(`disabled`,t.disabled()),Ro$1(`data-testid`,t.dataTestId())(`aria-label`,t.ariaLabel()||t.resolvedLabel())(`aria-labelledby`,t.ariaLabelledBy())(`aria-describedby`,t.describedBy())(`aria-invalid`,t.showError())(`aria-required`,t.required())(`aria-readonly`,t.isReadonly())(`aria-busy`,t.loading()||t.pending()||t.isSearching())(`aria-expanded`,t.isOpen())(`aria-controls`,t.isPanelAttached()?t.controlId()+`-options`:null),Ul$1(3),gT(t.label()?5:-1),Ul$1(),Lr(`is-placeholder`,!t.selectedOptionLabel()),fa$1(`bxTruncate`,!(t.selectionDisplay()===`tags`&&t.selectedOptions().length)&&!t.triggerTemplate()),Ul$1(2),gT((r=t.triggerTemplate())?8:t.selectionDisplay()===`tags`&&t.selectedOptions().length?9:10,r),Ul$1(5),Zy(t.selectedOptionLabel()),Ul$1(3),fa$1(`value`,t.loading()||t.pending()||t.isSearching()),Ul$1(2),gT(t.showClear()?18:-1),Ul$1(),gT(t.isPanelAttached()?19:-1)}},dependencies:[OD,RD,nN,rN,zm,Y,fe,Sn,U,kn,Ae,ym,Ki,on,Pt$1,ct,zs$1],styles:[`
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
}`]})};var Pa=class i extends je{focus(n){this.nativeElement.focus(n)}onReadonlyInteraction(n){!this.isReadonly()||this.nativeElement.tagName!==`SELECT`||`key`in n&&n.key===`Tab`||n.preventDefault()}static ɵfac=(()=>{let n;return function(t){return(n||(n=bn(i)))(t||i)}})();static ɵdir=ue({type:i,selectors:[[`input`,`bxInput`,``],[`textarea`,`bxInput`,``],[`select`,`bxInput`,``]],hostAttrs:[1,`bx-native-control`],hostVars:12,hostBindings:function(e,t){e&1&&br(`blur`,function(){return t.markAsTouched()})(`pointerdown`,function(a){return t.onReadonlyInteraction(a)})(`click`,function(a){return t.onReadonlyInteraction(a)})(`keydown`,function(a){return t.onReadonlyInteraction(a)}),e&2&&(Ay(`id`,t.controlId())(`disabled`,t.effectiveDisabled())(`required`,t.effectiveRequired()),Ro$1(`readonly`,t.isReadonly()?``:null)(`aria-readonly`,t.isReadonly())(`placeholder`,t.resolvedPlaceholder())(`name`,t.name()||null)(`aria-invalid`,t.showError())(`aria-required`,t.effectiveRequired())(`aria-describedby`,t.describedBy())(`aria-label`,t.ariaLabel())(`aria-labelledby`,t.ariaLabelledBy()))},exportAs:[`bxInput`],features:[tr([{provide:qn,useExisting:Pt$2(()=>i)}]),vt$1]})};var ld=[[[`bx-error`]],[[`bx-hint`]]];var sd=[`bx-error`,`bx-hint`];var dd=[`ngProjectAs`,`bx-error`,5,[`bx-error`]];var cd=[`ngProjectAs`,`bx-hint`,5,[`bx-hint`]];function ud(i,n){if(i&1&&Cy(0,`span`),i&2){let e=n.$implicit;tm(`inset-inline-start`,e,`%`)}}function bd(i,n){if(i&1&&(Os$1(0,`output`,8),XT(1),ba$1()),i&2){let e=Ql$1();Ul$1(),Ky(``,e.displayWith()(e.start()),` – `,e.displayWith()(e.end()))}}var ka=class i extends de{i18n=m(xQ,{optional:!0});start=K(()=>Math.max(this.min(),Math.min(this.max(),this.value()?.[0]??this.min())));end=K(()=>Math.max(this.start(),Math.min(this.max(),this.value()?.[1]??this.max())));startPercent=K(()=>this.max()>this.min()?(this.start()-this.min())/(this.max()-this.min())*100:0);endPercent=K(()=>this.max()>this.min()?(this.end()-this.min())/(this.max()-this.min())*100:100);resolvedStartLabel=K(()=>mQ(this.startLabel(),this.i18n));resolvedEndLabel=K(()=>mQ(this.endLabel(),this.i18n));ticks=K(()=>{let n=this.max()-this.min(),e=this.step();if(!this.showTickMarks()||!Number.isFinite(n)||!Number.isFinite(e)||n<=0||e<=0)return[];let t=Math.floor(n/e),r=Math.min(1e3,t);return r>0?Array.from({length:r+1},(a,l)=>Math.round(l*t/r)*e/n*100):[]});min=ke(0);max=ke(100);step=ke(1);discrete=ke(!1);showTickMarks=ke(!1);displayWith=ke(String);startLabel=ke(`Minimum value`);endLabel=ke(`Maximum value`);onRangeInput(n,e){let t=n.target;if(this.effectiveDisabled()||this.isReadonly()){t.value=String(e===`start`?this.start():this.end());return}let r=t.valueAsNumber,a=e===`start`?[Math.min(this.end(),r),this.end()]:[this.start(),Math.max(this.start(),r)];t.value=String(e===`start`?a[0]:a[1]),this.updateValue(a)}onReadonlyPointerDown(n){this.isReadonly()&&(n.preventDefault(),n.target.focus({preventScroll:!0}))}onReadonlyKeyDown(n){this.isReadonly()&&[`ArrowLeft`,`ArrowRight`,`ArrowUp`,`ArrowDown`,`Home`,`End`,`PageUp`,`PageDown`].includes(n.key)&&n.preventDefault()}onBlur(){this.markAsTouched()}static ɵfac=(()=>{let n;return function(t){return(n||(n=bn(i)))(t||i)}})();static ɵcmp=$n$1({type:i,selectors:[[`bx-range-slider`]],inputs:{min:[1,`min`],max:[1,`max`],step:[1,`step`],discrete:[1,`discrete`],showTickMarks:[1,`showTickMarks`],displayWith:[1,`displayWith`],startLabel:[1,`startLabel`],endLabel:[1,`endLabel`]},features:[vt$1],ngContentSelectors:sd,decls:13,vars:35,consts:[[3,`control`,`label`,`hint`,`hintEnd`,`tooltip`,`forId`],[`role`,`group`,1,`bx-range-slider`],[`aria-hidden`,`true`,1,`bx-range-track`],[1,`bx-range-input`],[`bxSlider`,``,`type`,`range`,3,`pointerdown`,`keydown`,`input`,`blur`,`id`,`min`,`max`,`step`,`value`,`disabled`],[`bxSlider`,``,`type`,`range`,3,`pointerdown`,`keydown`,`input`,`blur`,`min`,`max`,`step`,`value`,`disabled`],[`aria-hidden`,`true`,1,`bx-range-ticks`],[3,`inset-inline-start`],[1,`bx-range-values`]],template:function(e,t){e&1&&(jy(ld),Os$1(0,`bx-form-field`,0)(1,`div`,1),Cy(2,`div`,2),Os$1(3,`div`,3)(4,`input`,4),br(`pointerdown`,function(a){return t.onReadonlyPointerDown(a)})(`keydown`,function(a){return t.onReadonlyKeyDown(a)})(`input`,function(a){return t.onRangeInput(a,`start`)})(`blur`,function(){return t.onBlur()}),ba$1()(),Os$1(5,`div`,3)(6,`input`,5),br(`pointerdown`,function(a){return t.onReadonlyPointerDown(a)})(`keydown`,function(a){return t.onReadonlyKeyDown(a)})(`input`,function(a){return t.onRangeInput(a,`end`)})(`blur`,function(){return t.onBlur()}),ba$1()(),Os$1(7,`div`,6),Yb(8,ud,1,2,`span`,7,xT),ba$1()(),bT(10,bd,2,2,`output`,8),Py(11,0,dd),Py(12,1,cd),ba$1()),e&2&&(fa$1(`control`,t.fieldControl)(`label`,t.label())(`hint`,t.hint())(`hintEnd`,t.hintEnd())(`tooltip`,t.tooltip())(`forId`,t.controlId()),Ul$1(),tm(`--%NS%bx-range-start`,t.startPercent()/100)(`--%NS%bx-range-end`,t.endPercent()/100),Lr(`is-readonly`,t.isReadonly()&&!t.disabled()),Ro$1(`aria-label`,t.ariaLabel()||t.resolvedLabel()),Ul$1(3),fa$1(`id`,t.controlId())(`min`,t.min())(`max`,t.max())(`step`,t.step())(`value`,t.start())(`disabled`,t.effectiveDisabled()),Ro$1(`aria-valuemax`,t.end())(`aria-readonly`,t.isReadonly())(`aria-label`,t.resolvedStartLabel())(`aria-valuetext`,t.displayWith()(t.start()))(`aria-describedby`,t.describedBy()),Ul$1(2),fa$1(`min`,t.min())(`max`,t.max())(`step`,t.step())(`value`,t.end())(`disabled`,t.effectiveDisabled()),Ro$1(`aria-valuemin`,t.start())(`aria-readonly`,t.isReadonly())(`aria-label`,t.resolvedEndLabel())(`aria-valuetext`,t.displayWith()(t.end()))(`aria-describedby`,t.describedBy()),Ul$1(2),Zb(t.ticks()),Ul$1(2),gT(t.discrete()?10:-1))},dependencies:[Y,Ft],styles:[`
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
}`]})};var pd=[`panelTemplate`];var gd=[`anchor`];var md=[`nativeInput`];var hd=[[[`bx-error`]],[[`bx-hint`]]];var fd=[`bx-error`,`bx-hint`];var xd=[`ngProjectAs`,`bx-error`,5,[`bx-error`]];var vd=[`ngProjectAs`,`bx-hint`,5,[`bx-hint`]];var yd=(i,n,e,t)=>({$implicit:i,label:n,active:e,index:t});var _d=(i,n)=>n.value;function Sd(i,n){i&1&&(Os$1(0,`span`,16),XT(1,`*`),ba$1())}function Cd(i,n){if(i&1&&(Os$1(0,`label`,7)(1,`span`,15),XT(2),ba$1(),bT(3,Sd,2,0,`span`,16),ba$1()),i&2){let e=Ql$1();Ro$1(`for`,e.controlId()),Ul$1(2),Zy(e.resolvedLabel()),Ul$1(),gT(e.effectiveRequired()&&!e.resolvedHideRequiredMarker()?3:-1)}}function Md(i,n){if(i&1&&(Os$1(0,`span`,17)(1,`span`,18),XT(2),ba$1(),Os$1(3,`span`),XT(4),ba$1()()),i&2){let e=Ql$1();tm(`transform`,`translateX(`+-e.inputScroll()+`px)`),Ul$1(2),Zy(e.internalValue()),Ul$1(2),Zy(e.completionSuffix())}}function Nd(i,n){if(i&1){let e=Jb();Os$1(0,`button`,19),br(`click`,function(){Jc$1(e);let r=Ql$1();return el$1(r.clear())})(`keydown`,function(r){Jc$1(e);let a=Ql$1();return el$1(a.onClearKey(r))})(`blur`,function(r){Jc$1(e);let a=Ql$1();return el$1(a.onBlur(r))}),Cy(1,`bx-icon`,20),ba$1()}if(i&2){let e=Ql$1();fa$1(`surfaceEffects`,!1)(`disabled`,e.effectiveDisabled())(`bxTooltip`,e.resolvedClearTooltip()),Ro$1(`aria-label`,e.resolvedClearLabel())}}function Td(i,n){i&1&&Cy(0,`bx-loading-spinner`,13),i&2&&fa$1(`size`,16)(`decorative`,!0)}function wd(i,n){i&1&&Cy(0,`bx-icon`,14)}function Od(i,n){if(i&1&&Xl$1(0,28),i&2){let e=Ql$1(),t=e.$implicit,r=e.$index,a=Ql$1(3);fa$1(`ngTemplateOutlet`,n)(`ngTemplateOutletContext`,f1(2,yd,t,t.labelText,a.activeIndex()===r,r))}}function Pd(i,n){if(i&1&&XT(0),i&2){let e=Ql$1().$implicit;rm(` `,e.labelText,` `)}}function kd(i,n){if(i&1){let e=Jb();Os$1(0,`button`,27),br(`mousedown`,function(r){return r.preventDefault()})(`click`,function(){let r=Jc$1(e).$implicit,a=Ql$1(3);return el$1(a.selectOption(r))}),bT(1,Od,1,7,`ng-container`,28)(2,Pd,1,1),ba$1()}if(i&2){let e,t=n.$implicit,r=n.$index,a=Ql$1(3);Lr(`is-active`,a.activeIndex()===r),fa$1(`id`,a.controlId()+`-option-`+r)(`disabled`,t.disabled??!1),Ro$1(`aria-selected`,a.activeIndex()===r),Ul$1(),gT((e=a.optionTemplate())?1:2,e)}}function Dd(i,n){if(i&1&&Yb(0,kd,3,6,`button`,26,_d),i&2){let e=Ql$1(2);Zb(e.filteredOptions())}}function Id(i,n){if(i&1&&(Os$1(0,`div`,24),Cy(1,`bx-loading-indicator`,29),ba$1()),i&2){let e=Ql$1(2);Ul$1(),fa$1(`size`,16)(`label`,e.loadingText())}}function Ed(i,n){if(i&1&&(Os$1(0,`div`,25),XT(1),ba$1()),i&2){let e=Ql$1(2);Ul$1(),Zy(e.resolvedEmptyText())}}function Rd(i,n){if(i&1){let e=Jb();Os$1(0,`div`,21)(1,`div`,22,3),br(`focusout`,function(r){Jc$1(e);let a=Ql$1();return el$1(a.onBlur(r))})(`loadMore`,function(r){Jc$1(e);let a=Ql$1();return el$1(a.requestMore(r))}),Os$1(3,`div`,23),bT(4,Dd,2,0),ba$1(),bT(5,Id,2,2,`div`,24)(6,Ed,2,1,`div`,25),ba$1()()}if(i&2){let e=CT(2),t=Ql$1();fa$1(`bxSurfaceInteractive`,!1),Ul$1(),fa$1(`loadMoreHasMore`,t.hasMore())(`loadMoreLoading`,t.loading())(`loadMoreError`,t.loadError())(`loadMoreSuppressed`,t.searching())(`loadMoreDisabled`,t.effectiveDisabled()||t.isReadonly())(`loadMoreConfig`,t.loadMoreConfig())(`loadMoreTemplate`,t.loadMoreTemplate())(`loadMoreRevision`,t.loadMoreRevision()??t.options()),Ul$1(2),fa$1(`id`,t.controlId()+`-listbox`),Ro$1(`aria-label`,t.ariaLabel()||t.resolvedLabel()||t.resolvedPlaceholder())(`aria-busy`,t.searching()||t.loading()),Ul$1(),gT(t.searching()?-1:4),Ul$1(),gT(t.searching()||t.loading()&&!e.actionVisible()?5:!t.loading()&&!t.loadError()&&!t.filteredOptions().length?6:-1)}}var Da=class i extends de{i18n=m(xQ,{optional:!0});bxA11yService=m(Fr);overlay=m(_d$1);bxOverlayPositionService=m(mE);viewContainerRef=m(pr);ngZone=m(ce);context=m(Ae$1,{optional:!0});scrollLockService=m(kE);browser=yt$1(m(et));scrollLockId=yZ();opened=W(!1);inputFocused=W(!1);composing=W(!1);caretAtEnd=W(!1);panelTemplate=d4.required(`panelTemplate`);anchor=d4.required(`anchor`);nativeInput=d4.required(`nativeInput`);pagination=d4(Ae);labelText=d4(ct);activeIndex=W(-1);autofilled=W(!1);labelTruncated=K(()=>this.labelText()?.truncated()??!1);isBusy=K(()=>this.searching()||this.loading()||this.pending());showClear=K(()=>this.clearable()&&!!this.internalValue()&&!this.isReadonly());resolvedClearLabel=K(()=>mQ(this.clearLabel(),this.i18n));resolvedClearTooltip=K(()=>mQ(this.clearTooltip()??this.clearLabel(),this.i18n));isFloating=K(()=>this.resolvedFloatLabel()===`always`||this.inputFocused()||this.isOpen()||this.autofilled()||!!this.internalValue());inputScroll=W(0);resolvedEmptyText=K(()=>mQ(this.emptyText(),this.i18n));resolvedOptions=K(()=>this.options().map(n=>s(r({},n),{labelText:mQ(n.label??n.value,this.i18n)})));filteredOptions=K(()=>{let n=(this.internalValue()??``).toLocaleLowerCase();return this.externalFiltering()||!n?this.resolvedOptions():this.resolvedOptions().filter(e=>e.labelText.toLocaleLowerCase().includes(n)||e.value.toLocaleLowerCase().includes(n))});activeId=K(()=>this.isOpen()&&!this.searching()&&this.filteredOptions()[this.activeIndex()]&&!this.filteredOptions()[this.activeIndex()].disabled?this.controlId()+`-option-`+this.activeIndex():null);completionOption=K(()=>{let n=this.internalValue()??``;if(!this.inlineCompletion()||!this.isOpen()||!this.inputFocused()||!this.caretAtEnd()||this.composing()||this.searching()||this.effectiveDisabled()||this.isReadonly()||!n)return;let e=this.filteredOptions(),t=this.activeIndex()>=0?e[this.activeIndex()]:e.find(r=>!r.disabled&&r.value.length>n.length&&r.value.toLocaleLowerCase().startsWith(n.toLocaleLowerCase()));return t&&!t.disabled&&t.value.length>n.length&&t.value.toLocaleLowerCase().startsWith(n.toLocaleLowerCase())?t:void 0});completionSuffix=K(()=>this.completionOption()?.value.slice((this.internalValue()??``).length)??``);isOpen=this.opened.asReadonly();options=ke([]);inlineCompletion=ke(!0);clearable=ke(!0);clearLabel=ke(`Clear selection`);clearTooltip=ke(void 0);externalFiltering=ke(!1);searching=ke(!1);hasMore=ke(!1);loadError=ke(void 0);loadMoreConfig=ke({});loadMoreTemplate=ke(void 0);loadMoreRevision=ke(void 0);optionTemplate=ke(void 0);emptyText=ke(`No suggestions. You can enter your own value.`);loadingText=ke(`Loading suggestions`);autocomplete=ke(`off`);queryChange=wk();optionSelected=wk();loadMore=wk();openedChange=wk();overlayRef;subscriptions=new Me$1;disconnectTheme;disconnectLighting;selectionMotion;transition;presentationRevision=0;constructor(){super(),tt(()=>{let n=this.bxA11yService.isReducedMotion();this.selectionMotion?.update({reducedMotion:n})}),this.destroyRef.onDestroy(()=>this.dispose()),tt(()=>{(this.effectiveDisabled()||this.isReadonly())&&this.isOpen()&&this.close()}),tt(()=>{this.options(),this.searching(),le(()=>this.activeIndex.set(-1))})}open(){if(!this.browser||this.destroyRef.destroyed||this.isOpen()||this.effectiveDisabled()||this.isReadonly())return;this.overlayRef&&this.dispose();let n=this.anchor().nativeElement,e=this.overlay.create({width:n.getBoundingClientRect().width,maxWidth:`calc(100vw - 16px)`,positionStrategy:this.bxOverlayPositionService.getElementStrategy(n,`bottom`,4),scrollStrategy:this.overlay.scrollStrategies.noop(),usePopover:!!this.context?.useTopLayer||!!n.closest(`dialog, [role="dialog"], [role="alertdialog"], bx-modal, bx-modal-core, [popover]`)});this.overlayRef=e,this.opened.set(!0),this.scrollLockService.disableScroll(this.scrollLockId,{handleTouchInput:!0}),this.disconnectTheme=this.ngZone.runOutsideAngular(()=>fZ(n,e.overlayElement)),this.disconnectLighting=mN(e.overlayElement,n),this.subscriptions.add(this.ngZone.runOutsideAngular(()=>dZ(e,n,{onOriginHidden:()=>this.ngZone.run(()=>this.close()),onPosition:()=>{let a=n.getBoundingClientRect().width;e.getConfig().width!==a&&e.updateSize({width:a})}}))),this.subscriptions.add(e.outsidePointerEvents().subscribe(a=>{n.contains(a.target)||this.close()})),this.subscriptions.add(e.keydownEvents().subscribe(a=>this.onPanelKey(a))),e.attach(new Sa$1(this.panelTemplate(),this.viewContainerRef)).detectChanges(),e.updatePosition();let r=e.overlayElement.querySelector(`[role="listbox"]`);r&&(this.selectionMotion=this.ngZone.runOutsideAngular(()=>yN(r,{reducedMotion:this.bxA11yService.isReducedMotion()}))),this.transition=this.ngZone.runOutsideAngular(()=>vN(n,e.overlayElement)),this.ngZone.runOutsideAngular(()=>this.transition?.enter()),this.openedChange.emit(!0)}close(){if(!this.isOpen())return;let n=this.overlayRef?.overlayElement;n?.contains(n.ownerDocument.activeElement)&&this.focus({preventScroll:!0});let e=++this.presentationRevision;this.opened.set(!1),this.scrollLockService.enableScroll(this.scrollLockId),n&&(n.inert=!0);let t=()=>{e===this.presentationRevision&&this.dispose()},r=this.transition;r&&!this.bxA11yService.isReducedMotion()?this.ngZone.runOutsideAngular(()=>r.exit()).then(t,t):t(),this.openedChange.emit(!1)}completeLoadMore(){this.pagination()?.complete()}clear(){this.effectiveDisabled()||this.isReadonly()||(this.composing.set(!1),this.updateValue(``),this.activeIndex.set(-1),this.markAsTouched(),this.focus({preventScroll:!0}),this.queryChange.emit(``))}onInput(n){if(this.composing()||this.effectiveDisabled()||this.isReadonly())return;let e=n.target.value;this.updateValue(e),this.activeIndex.set(-1),this.updateCompletionPosition(),this.open(),this.queryChange.emit(e)}onCompositionStart(){this.composing.set(!0)}onCompositionEnd(n){this.composing.set(!1),this.onInput(n)}onFocus(){this.inputFocused.set(!0),this.updateCompletionPosition(),this.open()}updateCompletionPosition(){let n=this.nativeInput().nativeElement;this.caretAtEnd.set(n.selectionStart===n.value.length&&n.selectionEnd===n.value.length),this.inputScroll.set(n.scrollLeft)}onBlur(n){n.target===this.nativeInput().nativeElement&&this.inputFocused.set(!1);let e=n.relatedTarget;e&&(this.nativeElement.contains(e)||this.overlayRef?.overlayElement.contains(e))||queueMicrotask(()=>{if(this.destroyRef.destroyed)return;let t=this.nativeElement.ownerDocument.activeElement;this.nativeElement.contains(t)||this.overlayRef?.overlayElement.contains(t)||(this.close(),this.markAsTouched())})}onInputKey(n){if(this.composing()||n.isComposing||this.effectiveDisabled()||this.isReadonly())return;this.updateCompletionPosition();let e=this.completionOption(),r=this.nativeInput().nativeElement.ownerDocument.defaultView?.getComputedStyle(this.nativeInput().nativeElement).direction===`rtl`?`ArrowLeft`:`ArrowRight`;if(e&&!n.altKey&&!n.ctrlKey&&!n.metaKey&&!n.shiftKey&&(n.key===r||n.key===`End`||n.key===`Enter`&&!this.activeId()))n.preventDefault(),this.selectOption(e);else if(n.key===`Escape`&&this.isOpen())n.preventDefault(),n.stopPropagation(),this.close();else if(n.key===`ArrowDown`||n.key===`ArrowUp`){if(n.preventDefault(),this.open(),this.searching())return;let l=this.filteredOptions().map((w,R)=>w.disabled?-1:R).filter(w=>w>=0),g=l.indexOf(this.activeIndex()),y=n.key===`ArrowDown`?(g+1)%l.length:g<0?l.length-1:(g-1+l.length)%l.length;this.activeIndex.set(l[y]??-1),this.overlayRef?.overlayElement.querySelector(`#`+this.activeId())?.scrollIntoView({block:`nearest`})}else if(n.key===`Enter`&&this.isOpen()&&this.activeId())n.preventDefault(),this.selectOption(this.filteredOptions()[this.activeIndex()]);else if(n.key===`Tab`&&this.isOpen()){if(!n.shiftKey&&this.showClear())return;this.tabToPanel(n)}}onClearKey(n){n.key===`Tab`&&!n.shiftKey&&this.isOpen()&&this.tabToPanel(n)}selectOption(n){n.disabled||this.searching()||this.effectiveDisabled()||this.isReadonly()||(this.updateValue(n.value),this.optionSelected.emit(n),this.close(),this.focus({preventScroll:!0}))}requestMore(n){let e=this.overlayRef?.overlayElement;e?.contains(e.ownerDocument.activeElement)&&this.focus({preventScroll:!0}),this.loadMore.emit(n)}onPanelKey(n){let e=n.target;n.defaultPrevented||!e||!this.overlayRef?.overlayElement.contains(e)||(n.key===`Escape`?(n.preventDefault(),n.stopPropagation(),this.close()):n.key===`Tab`&&(n.shiftKey?(n.preventDefault(),this.focus({preventScroll:!0})):this.close()))}panelAction(){return Array.from(this.overlayRef?.overlayElement.querySelectorAll(`button:not(:disabled)`)??[]).find(n=>n.tabIndex>=0&&n.getClientRects().length>0)}tabToPanel(n){let e=this.panelAction();!n.shiftKey&&e?(n.preventDefault(),e.focus()):this.close()}dispose(){++this.presentationRevision,this.selectionMotion?.destroy(),this.selectionMotion=void 0,this.transition?.destroy(),this.transition=void 0,this.opened.set(!1),this.activeIndex.set(-1),this.subscriptions.unsubscribe(),this.subscriptions=new Me$1,this.disconnectTheme?.(),this.disconnectTheme=void 0,this.disconnectLighting?.(),this.disconnectLighting=void 0,this.overlayRef?.dispose(),this.overlayRef=void 0,this.scrollLockService.enableScroll(this.scrollLockId)}static ɵfac=function(e){return new(e||i)};static ɵcmp=$n$1({type:i,selectors:[[`bx-autocomplete`]],viewQuery:function(e,t){e&1&&Ly(t.panelTemplate,pd,5)(t.anchor,gd,5)(t.nativeInput,md,5)(t.pagination,Ae,5)(t.labelText,ct,5),e&2&&em(5)},inputs:{options:[1,`options`],inlineCompletion:[1,`inlineCompletion`],clearable:[1,`clearable`],clearLabel:[1,`clearLabel`],clearTooltip:[1,`clearTooltip`],externalFiltering:[1,`externalFiltering`],searching:[1,`searching`],hasMore:[1,`hasMore`],loadError:[1,`loadError`],loadMoreConfig:[1,`loadMoreConfig`],loadMoreTemplate:[1,`loadMoreTemplate`],loadMoreRevision:[1,`loadMoreRevision`],optionTemplate:[1,`optionTemplate`],emptyText:[1,`emptyText`],loadingText:[1,`loadingText`],autocomplete:[1,`autocomplete`]},outputs:{queryChange:`queryChange`,optionSelected:`optionSelected`,loadMore:`loadMore`,openedChange:`openedChange`},features:[vt$1],ngContentSelectors:fd,decls:18,vars:52,consts:[[`anchor`,``],[`nativeInput`,``],[`panelTemplate`,``],[`pagination`,`bxLoadMore`],[3,`control`,`inline`,`tooltip`,`hint`,`hintEnd`,`hideRequiredMarker`,`subscriptSizing`,`forId`,`showLoadingIndicator`],[`bxSurface`,``,1,`bx-input-wrapper`,`bx-autocomplete-control`],[`bxTooltipTouch`,`longpress`,`placement`,`top`,1,`bx-input-container`,`bx-autocomplete-text`,3,`bxTooltip`],[1,`bx-floating-label`],[`aria-hidden`,`true`,1,`bx-native-input`,`bx-autocomplete-completion`,3,`transform`],[`type`,`text`,`role`,`combobox`,`aria-haspopup`,`listbox`,`cdkAutofill`,``,1,`bx-native-input`,3,`input`,`focus`,`click`,`blur`,`select`,`scroll`,`keyup`,`cdkAutofill`,`keydown`,`compositionstart`,`compositionend`,`id`,`placeholder`,`value`,`disabled`,`readOnly`,`required`],[1,`bx-input-actions`],[`bx-button`,``,`type`,`button`,`variant`,`text`,1,`bx-autocomplete-clear`,3,`surfaceEffects`,`disabled`,`bxTooltip`],[`aria-hidden`,`true`,1,`bx-autocomplete-caret`],[3,`size`,`decorative`],[`name`,`chevron-down`,`size`,`16`],[`bxTruncate`,``,1,`bx-input-label-text`],[`aria-hidden`,`true`,1,`bx-field-required`],[`aria-hidden`,`true`,1,`bx-native-input`,`bx-autocomplete-completion`],[1,`bx-autocomplete-prefix`],[`bx-button`,``,`type`,`button`,`variant`,`text`,1,`bx-autocomplete-clear`,3,`click`,`keydown`,`blur`,`surfaceEffects`,`disabled`,`bxTooltip`],[`name`,`x`,`size`,`16`],[`bxSurface`,``,`data-bx-surface`,`glass`,1,`bx-autocomplete-panel`,3,`bxSurfaceInteractive`],[`bxLoadMore`,``,`tabindex`,`-1`,1,`bx-autocomplete-scroll`,3,`focusout`,`loadMore`,`loadMoreHasMore`,`loadMoreLoading`,`loadMoreError`,`loadMoreSuppressed`,`loadMoreDisabled`,`loadMoreConfig`,`loadMoreTemplate`,`loadMoreRevision`],[`role`,`listbox`,3,`id`],[1,`bx-autocomplete-feedback`],[`role`,`status`,1,`bx-autocomplete-feedback`],[`type`,`button`,`role`,`option`,`tabindex`,`-1`,1,`bx-autocomplete-option`,3,`id`,`is-active`,`disabled`],[`type`,`button`,`role`,`option`,`tabindex`,`-1`,1,`bx-autocomplete-option`,3,`mousedown`,`click`,`id`,`disabled`],[3,`ngTemplateOutlet`,`ngTemplateOutletContext`],[3,`size`,`label`]],template:function(e,t){if(e&1){let r=Jb();jy(hd),Os$1(0,`bx-form-field`,4)(1,`div`,5,0)(3,`div`,6),m1(4,`bxTruncatedText`),bT(5,Cd,4,3,`label`,7),bT(6,Md,5,4,`span`,8),Os$1(7,`input`,9,1),br(`input`,function(l){return t.onInput(l)})(`focus`,function(){return t.onFocus()})(`click`,function(){return Jc$1(r),t.open(),el$1(t.updateCompletionPosition())})(`blur`,function(l){return t.onBlur(l)})(`select`,function(){return t.updateCompletionPosition()})(`scroll`,function(){return t.updateCompletionPosition()})(`keyup`,function(){return t.updateCompletionPosition()})(`cdkAutofill`,function(l){return t.autofilled.set(l.isAutofilled)})(`keydown`,function(l){return t.onInputKey(l)})(`compositionstart`,function(){return t.onCompositionStart()})(`compositionend`,function(l){return t.onCompositionEnd(l)}),ba$1()(),Os$1(9,`div`,10),bT(10,Nd,2,4,`button`,11),Os$1(11,`span`,12),bT(12,Td,1,2,`bx-loading-spinner`,13)(13,wd,1,0,`bx-icon`,14),ba$1()()(),Py(14,0,xd),Py(15,1,vd),ba$1(),Ey(16,Rd,7,14,`ng-template`,null,2,y1)}e&2&&(fa$1(`control`,t.fieldControl)(`inline`,!0)(`tooltip`,t.tooltip())(`hint`,t.hint())(`hintEnd`,t.hintEnd())(`hideRequiredMarker`,t.resolvedHideRequiredMarker())(`subscriptSizing`,t.resolvedSubscriptSizing())(`forId`,t.controlId())(`showLoadingIndicator`,!1),Ul$1(),Lr(`is-invalid`,t.showError())(`is-disabled`,t.effectiveDisabled())(`is-readonly`,t.isReadonly())(`is-outline`,t.resolvedAppearance()===`outline`)(`is-floating`,t.isFloating())(`is-keyboard-focused`,t.keyboardFocused())(`is-open`,t.isOpen())(`has-clear`,t.showClear()),Ul$1(2),fa$1(`bxTooltip`,v1(4,48,t.resolvedLabel(),t.labelTruncated(),t.resolvedTooltipOnTruncate())),Ul$1(2),gT(t.label()?5:-1),Ul$1(),gT(t.completionSuffix()?6:-1),Ul$1(),fa$1(`id`,t.controlId())(`placeholder`,t.isFloating()||!t.label()?t.resolvedPlaceholder():``)(`value`,t.internalValue()??``)(`disabled`,t.effectiveDisabled())(`readOnly`,t.isReadonly())(`required`,t.effectiveRequired()),Ro$1(`aria-autocomplete`,t.inlineCompletion()?`both`:`list`)(`name`,t.name()||null)(`autocomplete`,t.autocomplete())(`data-testid`,t.dataTestId())(`aria-label`,t.ariaLabel())(`aria-labelledby`,t.ariaLabelledBy())(`aria-describedby`,t.describedBy())(`aria-invalid`,t.showError())(`aria-expanded`,t.isOpen())(`aria-controls`,t.isOpen()?t.controlId()+`-listbox`:null)(`aria-activedescendant`,t.activeId())(`aria-busy`,t.isBusy()),Ul$1(3),gT(t.showClear()?10:-1),Ul$1(2),gT(t.isBusy()?12:13))},dependencies:[Y,RD,U,Ki,on,fe,Ae,ym,vt,Pt$1,ct,an],styles:[`
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
}`]})};var Ld=(i,n)=>n.label;var Ad=(i,n)=>n.preset.id;function Vd(i,n){if(i&1&&(Os$1(0,`div`,2),XT(1),ba$1()),i&2){let e=Ql$1().$implicit;Ul$1(),Zy(e.label)}}function Fd(i,n){i&1&&Cy(0,`bx-icon`,6),i&2&&fa$1(`name`,n)(`decorative`,!0)}function zd(i,n){if(i&1){let e=Jb();Os$1(0,`button`,5),br(`click`,function(){let r=Jc$1(e).$implicit,a=Ql$1(2);return el$1(a.onSelect(r.preset,r.disabled))}),bT(1,Fd,1,2,`bx-icon`,6),Os$1(2,`span`,7),XT(3),ba$1()()}if(i&2){let e,t=n.$implicit,r=Ql$1(2);Lr(`is-active`,t.active),fa$1(`disabled`,t.disabled),Ro$1(`aria-pressed`,t.active)(`aria-label`,t.description?t.label+`. `+t.description:t.label),Ul$1(),gT((e=t.icon&&r.iconName(t.icon))?1:-1,e),Ul$1(2),Zy(t.label)}}function Bd(i,n){if(i&1&&(Os$1(0,`div`,1),bT(1,Vd,2,1,`div`,2),Os$1(2,`div`,3),Yb(3,zd,4,7,`button`,4,Ad),ba$1()()),i&2){let e=n.$implicit;Ul$1(),gT(e.label?1:-1),Ul$1(2),Zb(e.items)}}var zt=class i{i18n=m(xQ,{optional:!0});groups=K(()=>{let n=this.context(),e=this.activeValue()??this.activeRange(),t=/* @__PURE__ */ new Map;for(let r of this.presets()){let a=mQ(r.label,this.i18n),l=mQ(r.group,this.i18n),g=this.resolvePreset(r,n),y={preset:r,label:a,description:mQ(r.description,this.i18n),icon:r.icon,active:g!==null&&this.sameSelection(g,e),disabled:r.disabled===!0};t.has(l)||t.set(l,{label:l,items:[]}),t.get(l)?.items.push(y)}return[...t.values()]});resolvedAriaLabel=K(()=>mQ(this.ariaLabel(),this.i18n));presets=ke.required();context=ke.required();activeValue=ke(null);activeRange=ke(null);horizontal=ke(!1,{transform:Ge});ariaLabel=ke(`Quick select`);presetSelect=wk();iconName(n){return n}onSelect(n,e){e||this.presetSelect.emit(n)}sameSelection(n,e){return Array.isArray(n)&&Array.isArray(e)?BK([...n].sort())===BK([...e].sort()):aD(n)&&aD(e)?n.start===e.start&&n.end===e.end&&(!iD(n)||iD(e)&&n.kind===e.kind):BK(n)===BK(e)}resolvePreset(n,e){try{return n.resolve(e)}catch{return null}}static ɵfac=function(e){return new(e||i)};static ɵcmp=$n$1({type:i,selectors:[[`bx-date-preset-list`]],inputs:{presets:[1,`presets`],context:[1,`context`],activeValue:[1,`activeValue`],activeRange:[1,`activeRange`],horizontal:[1,`horizontal`],ariaLabel:[1,`ariaLabel`]},outputs:{presetSelect:`presetSelect`},decls:3,vars:3,consts:[[1,`bx-preset-list`],[1,`bx-preset-group`],[1,`bx-preset-group-label`],[1,`bx-preset-items`],[`type`,`button`,1,`bx-preset-item`,3,`is-active`,`disabled`],[`type`,`button`,1,`bx-preset-item`,3,`click`,`disabled`],[`size`,`16`,1,`bx-preset-icon`,3,`name`,`decorative`],[1,`bx-preset-label`]],template:function(e,t){e&1&&(Os$1(0,`nav`,0),Yb(1,Bd,5,1,`div`,1,Ld),ba$1()),e&2&&(Lr(`is-horizontal`,t.horizontal()),Ro$1(`aria-label`,t.resolvedAriaLabel()),Ul$1(),Zb(t.groups()))},dependencies:[U],styles:[`
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
}`]})};function Hd(i,n){if(i&1&&(Os$1(0,`div`,1),Xl$1(1,2),ba$1()),i&2){let e=Ql$1(2);fa$1(`id`,e.panelId()),Ro$1(`aria-label`,e.resolvedAriaLabel()),Ul$1(),fa$1(`ngTemplateOutlet`,n)}}function qd(i,n){if(i&1&&bT(0,Hd,2,3,`div`,1),i&2){let e,t=Ql$1();gT((e=t.content())?0:-1,e)}}function Wd(i,n){i&1&&Xl$1(0,2),i&2&&fa$1(`ngTemplateOutlet`,n)}function jd(i,n){if(i&1){let e=Jb();Os$1(0,`bx-bottom-drawer`,3),tk(`openChange`,function(r){Jc$1(e);let a=Ql$1();return o1(a.open,r)||(a.open=r),el$1(r)}),br(`closed`,function(){Jc$1(e);let r=Ql$1();return el$1(r.onDrawerClosed())}),bT(1,Wd,1,1,`ng-container`,2),ba$1()}if(i&2){let e,t=Ql$1();fa$1(`surfaceId`,t.panelId())(`ariaLabel`,t.resolvedAriaLabel())(`showHandle`,!0)(`showCloseButton`,!1)(`headerVisible`,!1)(`panelClass`,t.drawerClasses()),ek(`open`,t.open),Ul$1(),gT((e=t.content())?1:-1,e)}}var In=class i{overlay=m(_d$1);bxOverlayPositionService=m(mE);viewContainerRef=m(pr);ngZone=m(ce);destroyRef=m(me);scrollLockService=m(kE);i18n=m(xQ,{optional:!0});platformId=m(et);overlaySubscriptions=[];browser=yt$1(this.platformId);scrollLockId=yZ();resolvedAriaLabel=K(()=>mQ(this.ariaLabel(),this.i18n));isDrawer=K(()=>this.presentation()===`drawer`);isInline=K(()=>this.presentation()===`inline`);drawerClasses=K(()=>`bx-picker-drawer ${this.panelClass()}`.trim());open=l4(!1);presentation=ke(`popover`);origin=ke(null);content=ke(null);ariaLabel=ke(`Picker`);panelId=ke(``);panelClass=ke(``);panelWidth=ke(``);autoFocus=ke(!0,{transform:Ge});dismissOnOutside=ke(!0,{transform:Ge});dismissOnEscape=ke(!0,{transform:Ge});dismiss=wk();openedChange=wk();focusTimer;disconnectTheme;disconnectLighting;disconnectOrigin;overlayRef;transition;presentationRevision=0;restoreTarget;constructor(){tt(()=>{let n=this.open(),e=this.presentation();if(this.browser)if(e===`popover`)if(n){this.attachPopover();let t=this.overlayRef?.overlayElement;t&&(t.setAttribute(`aria-label`,this.resolvedAriaLabel()),t.id=this.panelId(),t.style.inlineSize=this.panelWidth(),t.style.maxInlineSize=this.panelWidth(),this.disconnectOrigin?.reposition())}else this.detachPopover();else this.overlayRef&&this.disposePopover()}),this.destroyRef.onDestroy(()=>this.disposePopover())}onDrawerClosed(){this.dismiss.emit(),this.openedChange.emit(!1)}attachPopover(){if(this.overlayRef?.overlayElement.inert&&this.disposePopover(!1),this.overlayRef)return;let n=this.origin(),e=this.content();if(!n||!e)return;this.restoreTarget=n.ownerDocument.activeElement instanceof HTMLElement?n.ownerDocument.activeElement:n;let t=this.overlay.create({positionStrategy:this.bxOverlayPositionService.getElementStrategy(n,`bottom`,6).withFlexibleDimensions(!1),scrollStrategy:this.overlay.scrollStrategies.noop(),usePopover:!!n.closest(`dialog, [role="dialog"], [role="alertdialog"], bx-modal, bx-modal-core, [popover]`)});this.overlayRef=t,this.scrollLockService.disableScroll(this.scrollLockId,{handleTouchInput:!0});let r=t.overlayElement;r.id=this.panelId(),r.setAttribute(`role`,`dialog`),r.setAttribute(`aria-label`,this.resolvedAriaLabel()),r.tabIndex=-1,r.classList.add(`bx-picker-overlay-pane`),this.panelClass()&&r.classList.add(...this.panelClass().split(/\s+/).filter(Boolean)),this.panelWidth()&&(r.style.inlineSize=this.panelWidth(),r.style.maxInlineSize=this.panelWidth()),this.disconnectTheme=this.ngZone.runOutsideAngular(()=>fZ(n,r)),this.disconnectLighting=mN(r,n),t.attach(new Sa$1(e,this.viewContainerRef)).detectChanges(),this.disconnectOrigin=this.ngZone.runOutsideAngular(()=>dZ(t,n)),this.openedChange.emit(!0),this.transition=this.ngZone.runOutsideAngular(()=>vN(n,r,{scale:1})),this.ngZone.runOutsideAngular(()=>this.transition?.enter());let l=t.outsidePointerEvents().subscribe(y=>{this.dismissOnOutside()&&!n.contains(y.target)&&this.dismiss.emit()}),g=t.keydownEvents().subscribe(y=>{y.key!==`Escape`||!this.dismissOnEscape()||y.defaultPrevented||(y.preventDefault(),y.stopPropagation(),this.dismiss.emit())});t.overlayElement.addEventListener(`pointerdown`,y=>y.stopPropagation()),this.overlaySubscriptions.push(l,g),this.focusTimer=setTimeout(()=>{if(!this.autoFocus()||!this.open()||this.overlayRef!==t||r.inert)return;(r.querySelector(`[data-picker-initial-focus], [data-focus-date][tabindex="0"], bx-time-wheel [role="listbox"]`)??r.querySelector(`button:not([disabled]), [href], input:not([disabled]), [tabindex]:not([tabindex="-1"])`)??r).focus({preventScroll:!0})})}detachPopover(){let n=this.overlayRef;if(!n)return;let e=n.overlayElement,t=++this.presentationRevision,r=this.transition;clearTimeout(this.focusTimer),e.inert=!0,this.scrollLockService.enableScroll(this.scrollLockId);let a=()=>{t===this.presentationRevision&&this.disposePopover()};r?this.ngZone.runOutsideAngular(()=>r.exit()).then(a,a):a(),this.openedChange.emit(!1)}disposePopover(n=!0){clearTimeout(this.focusTimer);for(let e of this.overlaySubscriptions.splice(0))e.unsubscribe();++this.presentationRevision,this.transition?.destroy(),this.transition=void 0,this.disconnectTheme?.(),this.disconnectTheme=void 0,this.disconnectLighting?.(),this.disconnectLighting=void 0,this.disconnectOrigin?.(),this.disconnectOrigin=void 0,this.overlayRef?.dispose(),this.overlayRef=void 0,this.scrollLockService.enableScroll(this.scrollLockId),n&&this.restoreTarget?.isConnected&&this.restoreTarget.focus({preventScroll:!0}),this.restoreTarget=void 0}static ɵfac=function(e){return new(e||i)};static ɵcmp=$n$1({type:i,selectors:[[`bx-picker-surface`]],inputs:{open:[1,`open`],presentation:[1,`presentation`],origin:[1,`origin`],content:[1,`content`],ariaLabel:[1,`ariaLabel`],panelId:[1,`panelId`],panelClass:[1,`panelClass`],panelWidth:[1,`panelWidth`],autoFocus:[1,`autoFocus`],dismissOnOutside:[1,`dismissOnOutside`],dismissOnEscape:[1,`dismissOnEscape`]},outputs:{open:`openChange`,dismiss:`dismiss`,openedChange:`openedChange`},decls:2,vars:2,consts:[[`panelStyle`,`--bx-drawer-body-padding: 0; --bx-drawer-width: 100%;`,`size`,`lg`,`maxHeight`,`92dvh`,3,`surfaceId`,`ariaLabel`,`showHandle`,`showCloseButton`,`headerVisible`,`panelClass`,`open`],[`role`,`dialog`,`tabindex`,`-1`,1,`bx-picker-inline`,3,`id`],[3,`ngTemplateOutlet`],[`panelStyle`,`--bx-drawer-body-padding: 0; --bx-drawer-width: 100%;`,`size`,`lg`,`maxHeight`,`92dvh`,3,`openChange`,`closed`,`surfaceId`,`ariaLabel`,`showHandle`,`showCloseButton`,`headerVisible`,`panelClass`,`open`]],template:function(e,t){e&1&&(bT(0,qd,1,1),bT(1,jd,2,8,`bx-bottom-drawer`,0)),e&2&&(gT(t.isInline()?0:-1),Ul$1(),gT(t.isDrawer()?1:-1))},dependencies:[dl$1,ym],styles:[`
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
}`]})};var Ia={dateParse:({params:i})=>`Enter a date in the ${i.format} format.`,dateMin:({params:i})=>`The date cannot be before ${i.minFormatted}.`,dateMax:({params:i})=>`The date cannot be after ${i.maxFormatted}.`,dateOrder:({params:i})=>`The end date cannot be before the start date (${i.startFormatted}).`,dateDisabled:`This date is not selectable. Choose another date.`,dateAvailability:`Availability for this date has not been confirmed. Wait for loading to finish or retry.`,dateMinLength:({params:i})=>`Select a range of at least ${i.minLength} days.`,dateMaxLength:({params:i})=>`Select a range of at most ${i.maxLength} days.`,dateSameDay:`The start and end dates must be different.`,dateLimit:({params:i})=>`Select no more than ${i.limit} dates.`,dateIncomplete:`Enter both a start date and an end date.`,dateCrossing:`This range includes a date that cannot be selected. Choose another range.`};var Ea={parse:`dateParse`,min:`dateMin`,max:`dateMax`,order:`dateOrder`,unknown:`dateAvailability`,"min-length":`dateMinLength`,"max-length":`dateMaxLength`,"same-day":`dateSameDay`,limit:`dateLimit`,incomplete:`dateIncomplete`,crossing:`dateCrossing`};function Ra(i,n,e){let t=new Map(i?.filter(r=>!e.start||!e.end||r.date<e.start||r.date>e.end).map(r=>[r.date,r]));for(let r of n)t.set(r.date,r);return[...t.values()]}function Vi(i,n){if(i==null||typeof i==`string`)return i;if(Array.isArray(i)){let e=[...i].sort();return(n===`min`?e[0]:e.at(-1))??null}return aD(i)?n===`min`?i.start:i.end:null}var Kd=[`panelTemplate`];var Zd=[[[`bx-error`]],[[`bx-hint`]]];var Gd=[`bx-error`,`bx-hint`];var Ud=[`ngProjectAs`,`bx-error`,5,[`bx-error`]];var Xd=[`ngProjectAs`,`bx-hint`,5,[`bx-hint`]];var Yd=()=>[`start`,`end`];function Qd(i,n){i&1&&(Os$1(0,`span`,14),XT(1,`*`),ba$1())}function Jd(i,n){if(i&1){let e=Jb();Os$1(0,`input`,19),br(`input`,function(r){Jc$1(e);let a=Ql$1().$implicit,l=Ql$1(2);return el$1(a===`start`?l.onRangeStartInput(r):l.onRangeEndInput(r))})(`blur`,function(){Jc$1(e);let r=Ql$1().$implicit,a=Ql$1(2);return el$1(r===`start`?a.onRangeStartBlur():a.onRangeEndBlur())})(`keydown`,function(r){Jc$1(e);let a=Ql$1(3);return el$1(a.onRangeKeydown(r))})(`keydown.escape`,function(r){Jc$1(e);let a=Ql$1(3);return el$1(a.onEscape(r))}),ba$1()}if(i&2){let e=Ql$1().$implicit,t=Ql$1(2);fa$1(`id`,e===`start`?t.controlId():t.controlId()+`-end`)(`value`,e===`start`?t.typedStart():t.typedEnd())(`disabled`,t.effectiveDisabled())(`readOnly`,t.isReadonly()),Ro$1(`aria-expanded`,t.isOpen())(`aria-controls`,t.isOpen()?t.controlId()+`-panel`:null)(`placeholder`,t.isFloating()?t.resolvedDatePlaceholder():``)(`aria-label`,e===`start`?t.resolvedStartLabel():t.resolvedEndLabel())(`aria-describedby`,t.describedBy())(`aria-invalid`,t.showError()||!!t.parseError())(`aria-required`,t.effectiveRequired())}}function ec(i,n){if(i&1){let e=Jb();Os$1(0,`button`,20),br(`click`,function(r){Jc$1(e);let a=Ql$1(3);return el$1(a.onTriggerClick(r))})(`keydown.escape`,function(r){Jc$1(e);let a=Ql$1(3);return el$1(a.onEscape(r))}),XT(1),ba$1()}if(i&2){let e=Ql$1().$implicit,t=Ql$1(2);fa$1(`id`,e===`start`?t.controlId():t.controlId()+`-end`)(`disabled`,t.effectiveDisabled()),Ro$1(`aria-label`,e===`start`?t.resolvedStartLabel():t.resolvedEndLabel())(`aria-expanded`,t.isOpen())(`aria-describedby`,t.describedBy())(`aria-invalid`,t.showError()||!!t.parseError())(`aria-readonly`,t.isReadonly()),Ul$1(),rm(` `,e===`start`?t.displayStart():t.displayEnd(),` `)}}function nc(i,n){if(i&1){let e=Jb();Os$1(0,`div`,12)(1,`label`,13),XT(2),bT(3,Qd,2,0,`span`,14),ba$1(),bT(4,Jd,1,11,`input`,15)(5,ec,2,8,`button`,16),Os$1(6,`button`,17),br(`click`,function(r){Jc$1(e);let a=Ql$1(2);return el$1(a.onTriggerClick(r))}),Cy(7,`bx-icon`,18),ba$1()()}if(i&2){let e=n.$implicit,t=Ql$1(2);Lr(`is-open`,t.isOpen())(`is-floating`,t.editable()?t.isFloating():e===`start`?!!t.displayStart():!!t.displayEnd())(`is-invalid`,t.showError()||!!t.parseError())(`is-outline`,t.resolvedAppearance()===`outline`)(`is-readonly`,t.isReadonly())(`is-disabled`,t.effectiveDisabled())(`is-keyboard-focused`,t.keyboardFocused()),Ul$1(),Ro$1(`for`,e===`start`?t.controlId():t.controlId()+`-end`),Ul$1(),rm(` `,e===`start`?t.resolvedStartLabel():t.resolvedEndLabel(),` `),Ul$1(),gT(t.effectiveRequired()&&!t.resolvedHideRequiredMarker()?3:-1),Ul$1(),gT(t.editable()?4:5),Ul$1(2),fa$1(`disabled`,t.effectiveDisabled()||t.isReadonly()),Ro$1(`aria-label`,t.resolvedOpenPickerLabel()),Ul$1(),fa$1(`name`,t.pickerIcon())(`decorative`,!0)}}function tc(i,n){if(i&1&&(Os$1(0,`div`,5),Yb(1,nc,8,22,`div`,11,xT),ba$1()),i&2){let e=Ql$1();Ro$1(`aria-label`,e.resolvedLabel()||e.resolvedDatePlaceholder()),Ul$1(),Zb(d1(1,Yd))}}function ic(i,n){i&1&&(Os$1(0,`span`,14),XT(1,`*`),ba$1())}function rc(i,n){if(i&1&&(Os$1(0,`span`,13),XT(1),bT(2,ic,2,0,`span`,14),ba$1()),i&2){let e=Ql$1(2);Ul$1(),rm(``,e.resolvedLabel(),` `),Ul$1(),gT(e.effectiveRequired()&&!e.resolvedHideRequiredMarker()?2:-1)}}function ac(i,n){i&1&&Cy(0,`bx-loading-spinner`,26),i&2&&fa$1(`size`,16)(`decorative`,!0)}function oc(i,n){if(i&1&&Cy(0,`bx-icon`,18),i&2){let e=Ql$1(3);fa$1(`name`,e.pickerIcon())(`decorative`,!0)}}function lc(i,n){if(i&1&&bT(0,ac,1,2,`bx-loading-spinner`,26)(1,oc,1,2,`bx-icon`,18),i&2){let e=n.$implicit;gT(e?0:1)}}function sc(i,n){if(i&1){let e=Jb();Os$1(0,`div`,21),bT(1,rc,3,2,`span`,13),Os$1(2,`input`,22),br(`input`,function(r){Jc$1(e);let a=Ql$1();return el$1(a.onRangeStartInput(r))})(`blur`,function(){Jc$1(e);let r=Ql$1();return el$1(r.onRangeStartBlur())})(`keydown`,function(r){Jc$1(e);let a=Ql$1();return el$1(a.onRangeKeydown(r))})(`keydown.escape`,function(r){Jc$1(e);let a=Ql$1();return el$1(a.onEscape(r))}),ba$1(),Os$1(3,`span`,23),XT(4),ba$1(),Os$1(5,`input`,24),br(`input`,function(r){Jc$1(e);let a=Ql$1();return el$1(a.onRangeEndInput(r))})(`blur`,function(){Jc$1(e);let r=Ql$1();return el$1(r.onRangeEndBlur())})(`keydown`,function(r){Jc$1(e);let a=Ql$1();return el$1(a.onRangeKeydown(r))})(`keydown.escape`,function(r){Jc$1(e);let a=Ql$1();return el$1(a.onEscape(r))}),ba$1(),Os$1(6,`button`,17),br(`click`,function(r){Jc$1(e);let a=Ql$1();return el$1(a.onTriggerClick(r))}),Os$1(7,`bx-visual-transition`,25),Ey(8,lc,2,1,`ng-template`),ba$1()()()}if(i&2){let e=Ql$1();Lr(`has-label`,!!e.label())(`is-open`,e.isOpen())(`is-floating`,e.isFloating())(`is-invalid`,e.showError()||!!e.parseError())(`is-outline`,e.resolvedAppearance()===`outline`)(`is-readonly`,e.isReadonly())(`is-disabled`,e.effectiveDisabled())(`is-keyboard-focused`,e.keyboardFocused()),Ul$1(),gT(e.label()?1:-1),Ul$1(),fa$1(`value`,e.typedStart())(`id`,e.controlId())(`disabled`,e.effectiveDisabled())(`readOnly`,e.isReadonly()),Ro$1(`aria-controls`,e.isOpen()?e.controlId()+`-panel`:null)(`placeholder`,e.isFloating()||!e.label()?e.resolvedStartLabel():``)(`aria-describedby`,e.describedBy())(`aria-required`,e.effectiveRequired())(`aria-label`,(e.label()?e.resolvedLabel()+`, `:``)+e.resolvedStartLabel())(`aria-expanded`,e.isOpen())(`aria-haspopup`,`dialog`)(`aria-invalid`,e.showError()||!!e.parseError())(`aria-readonly`,e.isReadonly()),Ul$1(),Lr(`is-concealed`,e.label()&&!e.isFloating()),Ul$1(),Zy(e.settings().rangeSeparator),Ul$1(),fa$1(`value`,e.typedEnd())(`disabled`,e.effectiveDisabled())(`readOnly`,e.isReadonly()),Ro$1(`aria-controls`,e.isOpen()?e.controlId()+`-panel`:null)(`placeholder`,e.isFloating()||!e.label()?e.resolvedEndLabel():``)(`aria-describedby`,e.describedBy())(`aria-required`,e.effectiveRequired())(`aria-label`,(e.label()?e.resolvedLabel()+`, `:``)+e.resolvedEndLabel())(`aria-expanded`,e.isOpen())(`aria-haspopup`,`dialog`)(`aria-invalid`,e.showError()||!!e.parseError())(`aria-readonly`,e.isReadonly()),Ul$1(),fa$1(`disabled`,e.effectiveDisabled()||e.isReadonly()||e.isLoading()),Ro$1(`aria-label`,e.resolvedOpenPickerLabel()),Ul$1(),fa$1(`value`,e.isLoading())}}function dc(i,n){i&1&&(Os$1(0,`span`,14),XT(1,`*`),ba$1())}function cc(i,n){if(i&1&&(Os$1(0,`span`,13),XT(1),bT(2,dc,2,0,`span`,14),ba$1()),i&2){let e=Ql$1(2);Ul$1(),rm(``,e.resolvedLabel(),` `),Ul$1(),gT(e.effectiveRequired()&&!e.resolvedHideRequiredMarker()?2:-1)}}function uc(i,n){i&1&&Cy(0,`bx-loading-spinner`,26),i&2&&fa$1(`size`,16)(`decorative`,!0)}function bc(i,n){if(i&1&&Cy(0,`bx-icon`,18),i&2){let e=Ql$1(3);fa$1(`name`,e.pickerIcon())(`decorative`,!0)}}function pc(i,n){if(i&1&&bT(0,uc,1,2,`bx-loading-spinner`,26)(1,bc,1,2,`bx-icon`,18),i&2){let e=n.$implicit;gT(e?0:1)}}function gc(i,n){if(i&1){let e=Jb();Os$1(0,`div`,27),bT(1,cc,3,2,`span`,13),Os$1(2,`input`,28),br(`input`,function(r){Jc$1(e);let a=Ql$1();return el$1(a.onTypedInput(r))})(`blur`,function(){Jc$1(e);let r=Ql$1();return el$1(r.onTypedBlur())})(`keydown`,function(r){Jc$1(e);let a=Ql$1();return el$1(a.onTypedKeydown(r))})(`keydown.escape`,function(r){Jc$1(e);let a=Ql$1();return el$1(a.onEscape(r))}),ba$1(),Os$1(3,`button`,17),br(`click`,function(r){Jc$1(e);let a=Ql$1();return el$1(a.onTriggerClick(r))}),Os$1(4,`bx-visual-transition`,25),Ey(5,pc,2,1,`ng-template`),ba$1()()()}if(i&2){let e=Ql$1();Lr(`has-label`,!!e.label())(`is-open`,e.isOpen())(`is-floating`,e.isFloating())(`is-invalid`,e.showError()||!!e.parseError())(`is-outline`,e.resolvedAppearance()===`outline`)(`is-readonly`,e.isReadonly())(`is-disabled`,e.effectiveDisabled())(`is-keyboard-focused`,e.keyboardFocused()),Ul$1(),gT(e.label()?1:-1),Ul$1(),fa$1(`id`,e.controlId())(`value`,e.typedText())(`disabled`,e.effectiveDisabled())(`readOnly`,e.isReadonly()),Ro$1(`aria-controls`,e.isOpen()?e.controlId()+`-panel`:null)(`placeholder`,e.isFloating()||!e.label()?e.resolvedDatePlaceholder():``)(`aria-label`,e.ariaLabel()||e.resolvedLabel()||e.resolvedDatePlaceholder())(`aria-describedby`,e.describedBy())(`aria-expanded`,e.isOpen())(`aria-haspopup`,`dialog`)(`aria-invalid`,e.showError()||!!e.parseError())(`aria-required`,e.effectiveRequired())(`aria-readonly`,e.isReadonly())(`data-testid`,e.dataTestId()),Ul$1(),fa$1(`disabled`,e.effectiveDisabled()||e.isReadonly()||e.isLoading()),Ro$1(`aria-label`,e.resolvedOpenPickerLabel()),Ul$1(),fa$1(`value`,e.isLoading())}}function mc(i,n){i&1&&(Os$1(0,`span`,14),XT(1,`*`),ba$1())}function hc(i,n){if(i&1&&(Os$1(0,`span`,13),XT(1),bT(2,mc,2,0,`span`,14),ba$1()),i&2){let e=Ql$1(2);Ul$1(),rm(` `,e.resolvedLabel(),` `),Ul$1(),gT(e.effectiveRequired()&&!e.resolvedHideRequiredMarker()?2:-1)}}function fc(i,n){if(i&1&&Cy(0,`bx-tag`,34),i&2){let e=n.$implicit,t=Ql$1(3);fa$1(`text`,t.formatChipLabel(e))(`config`,t.tagConfig())(`focusable`,!1)(`tooltipOnTruncate`,t.resolvedTooltipOnTruncate()?void 0:!1)}}function xc(i,n){if(i&1&&Cy(0,`bx-tag`,35),i&2){let e=Ql$1(3);fa$1(`text`,e.overflowDatesLabel())(`config`,e.overflowTagConfig())(`tooltip`,e.overflowDatesTooltip())(`focusable`,!1)(`tooltipOnTruncate`,e.resolvedTooltipOnTruncate()?void 0:!1)}}function vc(i,n){if(i&1&&(Os$1(0,`span`,31),Yb(1,fc,1,4,`bx-tag`,34,xT),bT(3,xc,1,5,`bx-tag`,35),ba$1()),i&2){let e=Ql$1(2);Ro$1(`aria-label`,e.resolvedSelectedDatesLabel()),Ul$1(),Zb(e.visibleDates()),Ul$1(2),gT(e.multipleDates().length>e.visibleTagCount()?3:-1)}}function yc(i,n){if(i&1&&(Os$1(0,`span`,32),XT(1),ba$1()),i&2){let e=Ql$1(2);fa$1(`bxTooltip`,e.resolvedTooltipOnTruncate()?e.displayValue():``),Ul$1(),Zy(e.displayValue()||(e.label()?``:e.resolvedTriggerText()))}}function _c(i,n){i&1&&Cy(0,`bx-loading-spinner`,26),i&2&&fa$1(`size`,16)(`decorative`,!0)}function Sc(i,n){if(i&1&&Cy(0,`bx-icon`,18),i&2){let e=Ql$1(3);fa$1(`name`,e.pickerIcon())(`decorative`,!0)}}function Cc(i,n){if(i&1&&bT(0,_c,1,2,`bx-loading-spinner`,26)(1,Sc,1,2,`bx-icon`,18),i&2){let e=n.$implicit;gT(e?0:1)}}function Mc(i,n){if(i&1){let e=Jb();Os$1(0,`button`,29,2),br(`click`,function(r){Jc$1(e);let a=Ql$1();return el$1(a.onTriggerClick(r))})(`keydown.arrowdown`,function(r){Jc$1(e);let a=Ql$1();return r.preventDefault(),el$1(a.onTriggerClick(r))})(`keydown.escape`,function(r){Jc$1(e);let a=Ql$1();return el$1(a.onEscape(r))})(`blur`,function(){Jc$1(e);let r=Ql$1();return el$1(r.markAsTouched())}),bT(2,hc,3,2,`span`,13),Os$1(3,`span`,30),bT(4,vc,4,2,`span`,31)(5,yc,2,2,`span`,32),ba$1(),Os$1(6,`bx-visual-transition`,33),Ey(7,Cc,2,1,`ng-template`),ba$1()()}if(i&2){let e=Ql$1();Lr(`has-label`,!!e.label())(`is-open`,e.isOpen())(`is-floating`,e.isFloating())(`is-invalid`,e.showError()||!!e.parseError())(`is-outline`,e.resolvedAppearance()===`outline`)(`is-readonly`,e.isReadonly())(`is-disabled`,e.effectiveDisabled())(`is-keyboard-focused`,e.keyboardFocused()),fa$1(`id`,e.controlId())(`disabled`,e.effectiveDisabled()),Ro$1(`aria-label`,e.ariaLabel()||e.resolvedLabel()||e.resolvedDatePlaceholder())(`aria-labelledby`,e.ariaLabelledBy())(`aria-describedby`,e.describedBy())(`aria-haspopup`,`dialog`)(`aria-expanded`,e.isOpen())(`aria-invalid`,e.showError()||!!e.parseError())(`aria-required`,e.effectiveRequired())(`aria-readonly`,e.isReadonly())(`aria-busy`,e.isLoading())(`data-testid`,e.dataTestId()),Ul$1(2),gT(e.label()?2:-1),Ul$1(),Lr(`is-placeholder`,!e.displayValue()),Ul$1(),gT(e.mode()===`multiple`&&e.multipleDates().length?4:5),Ul$1(2),fa$1(`value`,e.isLoading())}}function Nc(i,n){if(i&1){let e=Jb();Os$1(0,`button`,36),br(`click`,function(){Jc$1(e);let r=Ql$1();return el$1(r.clear())}),Cy(1,`bx-icon`,37),ba$1()}if(i&2){let e=Ql$1();fa$1(`surfaceEffects`,!1)(`disabled`,e.effectiveDisabled())(`bxTooltip`,e.resolvedClearTooltip()),Ro$1(`aria-label`,e.resolvedClearLabel()),Ul$1(),fa$1(`decorative`,!0)}}function Tc(i,n){if(i&1){let e=Jb();Os$1(0,`button`,38),br(`click`,function(){let r=Jc$1(e).retry;return el$1(r())}),Cy(1,`bx-icon`,39),XT(2),ba$1()}if(i&2){let e=n.label;Ul$1(),fa$1(`decorative`,!0),Ul$1(),rm(``,e,` `)}}function wc(i,n){if(i&1){let e=Jb();Os$1(0,`aside`,42)(1,`bx-date-preset-list`,45),br(`presetSelect`,function(r){Jc$1(e);let a=Ql$1(2);return el$1(a.onPeriodPresetSelect(r))}),ba$1()()}if(i&2){let e=Ql$1(2);Ul$1(),fa$1(`presets`,e.effectivePresets())(`context`,e.presetContext())(`activeValue`,e.draftValue())(`horizontal`,e.presetsHorizontal())(`ariaLabel`,e.resolvedPresetsLabel())}}function Oc(i,n){if(i&1){let e=Jb();Os$1(0,`aside`,42)(1,`bx-date-preset-list`,45),br(`presetSelect`,function(r){Jc$1(e);let a=Ql$1(2);return el$1(a.onPeriodPresetSelect(r))}),ba$1()()}if(i&2){let e=Ql$1(2);Ul$1(),fa$1(`presets`,e.effectivePresets())(`context`,e.presetContext())(`activeValue`,e.draftValue())(`horizontal`,e.presetsHorizontal())(`ariaLabel`,e.resolvedPresetsLabel())}}function Pc(i,n){if(i&1){let e=Jb();Os$1(0,`div`,40)(1,`div`,41),bT(2,wc,2,5,`aside`,42),Os$1(3,`div`,43)(4,`bx-calendar`,44),br(`visibleRangeChange`,function(r){Jc$1(e);let a=Ql$1();return el$1(a.onVisibleRange(r))})(`viewChange`,function(r){Jc$1(e);let a=Ql$1();return el$1(a.viewChange.emit(r))})(`monthSelected`,function(r){Jc$1(e);let a=Ql$1();return el$1(a.monthSelected.emit(r))})(`yearSelected`,function(r){Jc$1(e);let a=Ql$1();return el$1(a.yearSelected.emit(r))})(`rangeStart`,function(r){Jc$1(e);let a=Ql$1();return el$1(a.onCalendarRangeStart(r))})(`valueChange`,function(r){Jc$1(e);let a=Ql$1();return el$1(a.onCalendarValueChange(r))})(`selectionRejected`,function(r){Jc$1(e);let a=Ql$1();return el$1(a.onSelectionRejected(r))})(`requestAvailability`,function(r){Jc$1(e);let a=Ql$1();return el$1(a.onAvailabilityRequest(r))})(`retryAvailability`,function(r){Jc$1(e);let a=Ql$1();return el$1(a.onAvailabilityRequest(r))}),ba$1()(),bT(5,Oc,2,5,`aside`,42),ba$1()()}if(i&2){let e=Ql$1(),t=CT(9);Lr(`is-drawer`,e.isDrawer()),fa$1(`bxSurfaceInteractive`,!1),Ul$1(2),gT(e.showPresets()&&e.presetsPlacement()===`start`?2:-1),Ul$1(2),fa$1(`startView`,e.startView())(`mode`,e.mode())(`value`,e.draftValue())(`viewDate`,e.viewDate())(`months`,e.calendarMonths())(`retryTemplate`,t)(`weekdayNameFormat`,e.weekdayNameFormat())(`monthNameFormat`,e.monthNameFormat())(`locale`,e.settings().locale)(`calendarId`,e.settings().calendar)(`timeZone`,e.settings().timeZone)(`weekStartsOn`,e.settings().weekStartsOn)(`minimalDaysInFirstWeek`,e.settings().minimalDaysInFirstWeek)(`min`,e.min())(`max`,e.max())(`disabledDates`,e.disabledDates())(`disabledIntervals`,e.disabledIntervals())(`disabledWeekdays`,e.disabledWeekdays())(`dateFilter`,e.dateFilter())(`crossingPolicy`,e.crossingPolicy())(`minRangeLength`,e.minRangeLength())(`maxRangeLength`,e.maxRangeLength())(`allowSameDay`,e.allowSameDay())(`selectionLimit`,e.selectionLimit())(`readOnly`,e.isReadonly()||e.effectiveDisabled())(`availability`,e.availabilityForCalendar())(`dayTemplate`,e.dayTemplate())(`showToday`,e.showToday())(`showTodayButton`,e.showTodayButton())(`todayLabel`,e.todayLabel())(`loadingLabel`,e.loadingLabel())(`retryLabel`,e.retryLabel()),Ul$1(),gT(e.showPresets()&&e.presetsPlacement()===`end`?5:-1)}}var La=class i extends de{bxDateTimeConfigService=m(sD);clock=m(nD);i18n=m(xQ,{optional:!0});windowDimensionsService=m(Cd$1);originElement=W(null);availabilityState=W(void 0);lastDraftSignature=W(``);fieldFocused=W(!1);textEdited=W(!1);isOpen=W(!1);draftValue=W(null);viewDate=W(null);typedText=W(``);typedStart=W(``);typedEnd=W(``);parseError=W(null);settings=K(()=>this.bxDateTimeConfigService.resolve({locale:this.locale(),calendar:this.calendarId(),timeZone:this.timeZone(),weekStartsOn:this.weekStartsOn(),minimalDaysInFirstWeek:this.minimalDaysInFirstWeek(),dateFormat:this.dateFormat(),allowNaturalLanguage:this.allowNaturalLanguage()}));adapter=K(()=>this.bxDateTimeConfigService.adapter(this.settings().calendar));modeInfo=K(()=>Fg(this.mode()));formatContext=K(()=>({locale:this.settings().locale,calendar:this.adapter(),weekStartsOn:this.settings().weekStartsOn,minimalDaysInFirstWeek:this.settings().minimalDaysInFirstWeek}));presetContext=K(()=>({now:this.clock.now(),today:this.todayIso(),locale:this.settings().locale,calendar:this.adapter(),timeZone:this.settings().timeZone,weekStartsOn:this.settings().weekStartsOn,minimalDaysInFirstWeek:this.settings().minimalDaysInFirstWeek}));isDrawer=K(()=>this.surfacePresentation()===`drawer`);surfacePresentation=K(()=>{let n=this.presentation();return n!==`auto`?n:this.windowDimensionsService.isMobile()?`drawer`:`popover`});displayValue=K(()=>this.formatValue(this.isOpen()&&this.mode()!==`multiple`?this.draftValue():this.internalValue()));displayStart=K(()=>this.formatEndpoint(this.rangeStart(this.isOpen()?this.draftValue():this.internalValue())));displayEnd=K(()=>this.formatEndpoint(this.rangeEnd(this.isOpen()?this.draftValue():this.internalValue())));isRangeMode=K(()=>this.modeInfo().selection===`range`);rangeFieldLayout=K(()=>this.separateFields()&&this.isRangeMode()?`separate`:`combined`);effectivePresets=K(()=>(this.presets()??this.defaultPresets()).map(e=>s(r({},e),{resolve:t=>this.normalizePresetValue(e.resolve(t))})));showPresets=K(()=>this.presetsPlacement()!==`hidden`&&this.effectivePresets().length>0);presetsHorizontal=K(()=>this.isDrawer());calendarMonths=K(()=>{let n=this.months();return n>0?n:this.isRangeMode()&&!this.isDrawer()?2:1});availabilityForCalendar=K(()=>this.availability()??(this.resolver()?this.availabilityState():void 0));resolvedDatePlaceholder=K(()=>mQ(this.placeholder()??this.defaultPlaceholder(),this.i18n));resolvedInvalidLabel=K(()=>this.dateValidationMessage(this.parseError()??`endpoint`));resolvedTriggerText=K(()=>mQ(this.placeholder()??this.openPickerLabel(),this.i18n));resolvedOpenPickerLabel=K(()=>mQ(this.openPickerLabel(),this.i18n));resolvedClearLabel=K(()=>mQ(this.clearLabel(),this.i18n));resolvedPresetsLabel=K(()=>mQ(this.presetsLabel(),this.i18n));resolvedStartLabel=K(()=>mQ(this.startLabel(),this.i18n));resolvedEndLabel=K(()=>mQ(this.endLabel(),this.i18n));resolvedMoreDatesLabel=K(()=>mQ(this.moreDatesLabel(),this.i18n));resolvedSelectedDatesLabel=K(()=>mQ(this.selectedDatesLabel(),this.i18n));availableDates=K(()=>this.availabilityForCalendar()?.dates??[]);showClear=K(()=>{let n=this.internalValue(),e=Array.isArray(n)?n.length>0:!!n;return this.clearable()&&(e||this.textEdited())&&!this.isReadonly()});isFloating=K(()=>!!this.displayValue()||this.editable()&&this.mode()!==`multiple`&&(this.fieldFocused()||this.isOpen()||!!this.typedText()||!!this.typedStart()||!!this.typedEnd()||this.resolvedFloatLabel()===`always`));isLoading=K(()=>this.loading()||this.availabilityForCalendar()?.loading===!0);multipleDates=K(()=>{let n=this.internalValue();return Array.isArray(n)?n:[]});visibleDates=K(()=>this.multipleDates().slice(0,this.visibleTagCount()));overflowDatesLabel=K(()=>`+${Math.max(0,this.multipleDates().length-this.visibleTagCount())}`);overflowDatesTooltip=K(()=>this.multipleDates().slice(this.visibleTagCount()).map(n=>this.formatEndpoint(n)).join(`, `));resolvedClearTooltip=K(()=>mQ(this.clearTooltip()??this.clearLabel(),this.i18n));restrictionConfig=K(()=>({min:this.min(),max:this.max(),disabledDates:this.disabledDates(),disabledIntervals:this.disabledIntervals(),disabledWeekdays:this.disabledWeekdays(),metadata:this.availableDates(),isDateDisabled:n=>!!this.dateFilter()?.(n)||(!!this.resolver()||!!this.availability())&&(!this.availabilityForCalendar()||!!this.availabilityForCalendar()?.loading||!!this.availabilityForCalendar()?.error||!this.availableDates().some(e=>e.date===n))}));panelClass=K(()=>`bx-date-panel ${this.isDrawer()?`is-drawer`:`is-popover`}`);panelWidth=K(()=>{if(this.isDrawer())return`100%`;let n=this.calendarMonths(),e=this.showPresets();return n===1?e?`min(94vw, 32rem)`:`min(94vw, 20rem)`:e?`min(94vw, 46rem)`:`min(94vw, 38rem)`});panelOrigin=K(()=>this.originElement());panelTemplate=d4(`panelTemplate`);mode=ke(`single`);pickerIcon=ke(`calendar`);openPickerLabel=ke(`Choose date`);startAt=ke(null);startView=ke(void 0);parseFormats=ke([]);locale=ke(void 0);calendarId=ke(void 0);timeZone=ke(void 0);weekStartsOn=ke(void 0);minimalDaysInFirstWeek=ke(void 0);dateFormat=ke(void 0);allowNaturalLanguage=ke(!1,{transform:Ge});editable=ke(!0,{transform:Ge});presentation=ke(`auto`);weekdayNameFormat=ke(`narrow`);monthNameFormat=ke(`short`);months=ke(0,{transform:n=>Math.trunc(Number(n))||0});separateFields=ke(!1,{transform:Ge});commitPolicy=ke(`auto`);closeOnSelect=ke(!0,{transform:Ge});clearable=ke(!0,{transform:Ge});presets=ke(void 0);presetsPlacement=ke(`start`);min=ke(void 0,{transform:n=>Vi(n,`min`)});max=ke(void 0,{transform:n=>Vi(n,`max`)});disabledDates=ke([]);disabledIntervals=ke([]);disabledWeekdays=ke([]);dateFilter=ke(void 0);crossingPolicy=ke(`reject`);minRangeLength=ke(1);maxRangeLength=ke(null);allowSameDay=ke(!0,{transform:Ge});selectionLimit=ke(null);availability=ke(void 0);resolver=ke(void 0);loadingLabel=ke(void 0);retryLabel=ke(`Retry request`);loadErrorMessage=ke(`Dates could not be loaded.`);invalidSelectionLabel=ke(void 0);applyLabel=ke(`Apply`);cancelLabel=ke(`Cancel`);clearLabel=ke(`Clear selection`);todayLabel=ke(void 0);presetsLabel=ke(`Quick select`);showToday=ke(!0,{transform:Ge});showTodayButton=ke(!0,{transform:Ge});startLabel=ke(`Start date`);endLabel=ke(`End date`);moreDatesLabel=ke(`more`);selectedDatesLabel=ke(`Selected dates`);clearTooltip=ke(void 0);visibleTagCount=ke(1,{transform:At});tagConfig=ke({});overflowTagConfig=ke({});dayTemplate=ke(void 0);viewChange=wk();monthSelected=wk();yearSelected=wk();valueCommit=wk();draftChange=wk();openChange=wk();visibleRangeChange=wk();request=wk();retry=wk();parseFailed=wk();resolverContext=``;resolverToken=0;lastRequest;closeTimer;constructor(){super(),tt(()=>{(this.effectiveDisabled()||this.isReadonly())&&this.close()}),tt(()=>{let n=this.draftValue(),e=JSON.stringify(n??null);e!==this.lastDraftSignature()&&(this.lastDraftSignature.set(e),le(()=>this.draftChange.emit(n)))}),tt(()=>{this.resolver(),this.availability(),le(()=>{++this.resolverToken,this.availabilityState.set(void 0),this.resolverContext=``;let n=this.lastRequest;this.isOpen()&&n&&this.runResolver(s(r({},n),{revision:n.revision+1}))})}),tt(()=>{let n=this.internalValue();this.fieldFocused()||this.isOpen()||this.textEdited()||(this.typedText.set(this.formatValue(n)),this.typedStart.set(this.displayStart()),this.typedEnd.set(this.displayEnd()))}),this.destroyRef.onDestroy(()=>{++this.resolverToken,this.clearScheduledClose()})}reset(){let n=this.isOpen();this.clearScheduledClose(),this.isOpen.set(!1),super.reset(),this.clearPendingEdit(),this.fieldFocused.set(!1),this.draftValue.set(this.internalValue()),this.typedText.set(this.formatValue(this.internalValue())),this.typedStart.set(this.displayStart()),this.typedEnd.set(this.displayEnd()),n&&this.openChange.emit(!1)}open(){if(this.isOpen()||this.effectiveDisabled()||this.isReadonly())return;this.clearScheduledClose(),this.draftValue.set(this.internalValue()),this.viewDate.set(this.startAt());let n=this.originElement();this.originElement.set(n?.isConnected&&this.nativeElement.contains(n)?n:this.nativeElement.querySelector(`.bx-date-trigger`)),this.isOpen.set(!0),this.openChange.emit(!0)}close(){this.isOpen()&&(this.clearScheduledClose(),this.isOpen.set(!1),this.markAsTouched(),this.openChange.emit(!1))}apply(){let n=this.draftValue();this.effectiveDisabled()||this.isReadonly()||n!==null&&!Array.isArray(n)&&!this.isDraftComplete(n)||this.commitDraft(n)&&this.close()}cancel(){this.draftValue.set(this.internalValue()),this.parseError()||(this.textEdited.set(!1),this.typedText.set(this.formatValue(this.internalValue())),this.typedStart.set(this.formatEndpoint(this.rangeStart(this.internalValue()))),this.typedEnd.set(this.formatEndpoint(this.rangeEnd(this.internalValue())))),this.close()}clear(){this.effectiveDisabled()||this.isReadonly()||(this.draftValue.set(null),this.clearPendingEdit(),this.parseError.set(null),this.updateValue(null),this.valueCommit.emit(null),this.close(),this.focus({preventScroll:!0}))}goToToday(){this.viewDate.set(this.todayIso())}reloadAvailability(){this.effectiveDisabled()||this.isReadonly()||this.availabilityForCalendar()?.loading||(this.isOpen()?this.lastRequest&&this.onAvailabilityRequest(s(r({},this.lastRequest),{revision:this.lastRequest.revision+1,source:`initial`})):this.open())}retryAvailability(){if(!this.lastRequest)return;let n=s(r({},this.lastRequest),{revision:this.lastRequest.revision+1,source:`retry`});this.retry.emit(n),this.runResolver(n)}clearPendingEdit(){super.clearPendingEdit(),this.typedText.set(``),this.typedStart.set(``),this.typedEnd.set(``),this.textEdited.set(!1),this.parseError.set(null)}onFieldFocus(){this.fieldFocused.set(!0)}onFieldBlur(n){n.relatedTarget instanceof Node&&this.nativeElement.contains(n.relatedTarget)||(this.fieldFocused.set(!1),this.markAsTouched())}onEscape(n){this.isOpen()&&(n.preventDefault(),this.cancel())}onTriggerClick(n){if(this.isReadonly())return;let e=n.currentTarget;e instanceof HTMLElement&&this.originElement.set(e.closest(`.bx-date-field`)??e),this.isOpen()?this.close():this.open()}onCalendarRangeStart(n){this.clearScheduledClose(),this.draftValue.set({start:n,end:null}),this.typedStart.set(this.formatEndpoint(n)),this.typedEnd.set(``),this.parseError.set(null)}onCalendarValueChange(n){this.draftValue.set(n),this.textEdited.set(!1),this.parseError.set(null),this.editable()&&(this.typedText.set(this.formatValue(n)),aD(n)&&(this.typedStart.set(this.formatEndpoint(n.start)),this.typedEnd.set(this.formatEndpoint(n.end)))),this.maybeImmediateCommit(n)}onPeriodPresetSelect(n){let e=this.safeResolvePreset(n);e&&(this.draftValue.set(e),this.editable()&&this.typedText.set(this.formatValue(e)),this.onCalendarValueChange(e))}onTypedInput(n){let e=n.target;this.textEdited.set(!0),this.typedText.set(e.value),this.parseError.set(null)}onTypedBlur(){this.commitTypedValue(),this.markAsTouched()}onTypedKeydown(n){n.key===`Enter`?(n.preventDefault(),this.commitTypedValue()):n.key===`ArrowDown`&&!this.isOpen()&&(n.preventDefault(),this.open())}onRangeStartInput(n){let e=n.target;this.textEdited.set(!0),this.typedStart.set(e.value),this.parseError.set(null)}onRangeEndInput(n){let e=n.target;this.textEdited.set(!0),this.typedEnd.set(e.value),this.parseError.set(null)}onRangeStartBlur(){this.commitRangeEndpoint(`start`),this.markAsTouched()}onRangeEndBlur(){this.commitRangeEndpoint(`end`),this.markAsTouched()}onRangeKeydown(n){n.key===`Enter`?(n.preventDefault(),this.commitRangeEndpoint(`start`),this.commitRangeEndpoint(`end`)):n.key===`ArrowDown`&&!this.isOpen()&&(n.preventDefault(),this.open())}formatChipLabel(n){return this.formatEndpoint(n)}onSelectionRejected(n){this.parseError.set(n)}onVisibleRange(n){this.visibleRangeChange.emit(n)}onAvailabilityRequest(n){this.lastRequest=n,n.source===`retry`?this.retry.emit(n):this.request.emit(n),this.runResolver(n)}todayIso(){let n=new Intl.DateTimeFormat(`en-CA`,{timeZone:this.settings().timeZone,year:`numeric`,month:`2-digit`,day:`2-digit`}).formatToParts(this.clock.now()),e=t=>n.find(r=>r.type===t)?.value??``;return`${e(`year`)}-${e(`month`)}-${e(`day`)}`}defaultPlaceholder(){return this.parseFormats()[0]??this.patternForMode(this.modeInfo().period)}formatValue(n){if(!n)return``;if(typeof n==`string`)return this.formatEndpoint(n);if(Array.isArray(n)){if(!n.length)return``;let e=this.formatEndpoint(n[0]),t=n.length-1;return t>0?`${e} +${t} ${this.resolvedMoreDatesLabel()}`:e}if(iD(n)){let e=this.formatEndpoint(n.start),t=this.formatEndpoint(n.end);return n.start===n.end?e:`${e} ${this.settings().rangeSeparator} ${t}`}if(aD(n)){let e=n.start?this.formatEndpoint(n.start):``,t=n.end?this.formatEndpoint(n.end):``;return e&&t?`${e} ${this.settings().rangeSeparator} ${t}`:e||t}return``}formatEndpoint(n){if(!n)return``;let e=this.modeInfo(),t=this.patternForMode(e.period);if(e.period===`week`){let r=LK(this.mode(),n,this.settings().weekStartsOn);return r?.start&&r.end?`${MZ(r.start,`dd MMM`,this.formatContext())} ${this.settings().rangeSeparator} ${MZ(r.end,`dd MMM yyyy`,this.formatContext())}`:MZ(n,t,this.formatContext())}return MZ(n,t,this.formatContext())}patternForMode(n){return n===`month`?this.settings().monthFormat:n===`quarter`?this.settings().quarterFormat:n===`year`?this.settings().yearFormat:this.settings().dateFormat}rangeOf(n){return LK(this.mode(),n,this.settings().weekStartsOn)}rangeStart(n){return this.rangeOf(n)?.start??null}rangeEnd(n){return this.rangeOf(n)?.end??null}isDraftComplete(n){return n?typeof n==`string`||Array.isArray(n)?!0:iD(n)||aD(n)?!!n.start&&!!n.end:!1:!1}maybeImmediateCommit(n){this.isDraftComplete(n)&&this.commitDraft(n)&&this.mode()!==`multiple`&&this.closeOnSelect()&&this.scheduleClose()}scheduleClose(){this.clearScheduledClose(),this.closeTimer=setTimeout(()=>{this.closeTimer=void 0,this.close()},120)}clearScheduledClose(){this.closeTimer!==void 0&&(clearTimeout(this.closeTimer),this.closeTimer=void 0)}commitDraft(n){if(this.effectiveDisabled()||this.isReadonly())return!1;let e=this.validateDraft(n);if(!e.valid)return this.parseError.set(e.message),this.parseFailed.emit(this.dateValidationMessage(e.message)),!1;let t=e.value??n;return this.parseError.set(null),this.textEdited.set(!1),this.draftValue.set(t),this.editable()&&(this.typedText.set(this.formatValue(t)),this.typedStart.set(this.formatEndpoint(this.rangeStart(t))),this.typedEnd.set(this.formatEndpoint(this.rangeEnd(t)))),JSON.stringify(t)!==JSON.stringify(this.internalValue())&&(this.updateValue(t),this.valueCommit.emit(t)),!0}validateDraft(n){if(n===null||Array.isArray(n)&&n.length===0)return{valid:!0,message:``};if(!this.isDraftComplete(n))return{valid:!1,message:`incomplete`};let e=typeof n==`string`&&this.modeInfo().period===`week`?Yn(n,`week`,this.settings().weekStartsOn):null,t=e?fR(e.start,e.end):typeof n==`string`?[n]:Array.isArray(n)?n:[],r$4=this.selectionLimit();for(let a of t){if(!Se(a))return{valid:!1,message:`parse`};let l=Zg(a,this.restrictionConfig());if(l.disabled)return{valid:!1,message:l.reason??`endpoint`}}if(Array.isArray(n)&&r$4!==null&&n.length>r$4)return{valid:!1,message:`limit`};if(aD(n)&&n.start&&n.end){if(n.start>n.end)return{valid:!1,message:`order`};let a=this.modeInfo().period===`week`?Yn(n.end,`week`,this.settings().weekStartsOn).end:n.end,l=FQ(n.start,a,this.restrictionConfig(),{crossingPolicy:this.crossingPolicy(),minLength:this.minRangeLength(),maxLength:this.maxRangeLength(),allowSameDay:this.allowSameDay()});if(!l.valid){let g=Zg(n.start,this.restrictionConfig()).reason??Zg(a,this.restrictionConfig()).reason;return{valid:!1,message:l.reason===`endpoint`?g??`endpoint`:l.reason??`endpoint`}}return this.modeInfo().period===`week`&&l.range.end!==a?{valid:!1,message:`crossing`}:{valid:!0,message:``,value:iD(n)?n:s(r({},n),{start:l.range.start,end:l.range.end})}}return{valid:!0,message:``}}dateValidationMessage(n){let e=this.invalidSelectionLabel();if(e!==void 0)return mQ(e,this.i18n);let t=this.draftValue(),r$5=aD(t)?t.start:null,a={format:this.defaultPlaceholder(),min:this.min(),max:this.max(),start:r$5,minFormatted:this.formatEndpoint(this.min()??null),maxFormatted:this.formatEndpoint(this.max()??null),startFormatted:this.formatEndpoint(r$5),minLength:this.minRangeLength(),maxLength:this.maxRangeLength(),limit:this.selectionLimit()};return Cn({kind:Ea[n]??`dateDisabled`,context:a},this.errorMessages(),r(r({},Ia),this.formSettingsService.settings().errorMessages),this.i18n)}defaultPresets(){let n=this.modeInfo(),e=n.period;return n.isRange?OQ():[-1,0,1].map(t=>({id:`relative-${t}`,label:e?`${t<0?`Previous`:t>0?`Next`:`This`} ${e}`:t<0?`Yesterday`:t>0?`Tomorrow`:`Today`,resolve:r=>e===`year`?r.calendar.addYears(r.today,t,r.locale):e===`month`||e===`quarter`?r.calendar.addMonths(r.today,t*(e===`quarter`?3:1),r.locale):de$1(r.today,t*(e===`week`?7:1))}))}normalizePresetValue(n){if(!n)return null;let e=this.modeInfo(),t=PK(this.mode(),n),r=t.start,a=t.end??r;if(!r||!a)return null;if(e.selection===`multiple`)return Array.isArray(n)?n:fR(r,a);let l=g=>e.period?Yn(g,e.period,this.settings().weekStartsOn).start:g;return e.isRange?FK(this.mode(),l(r),l(a),this.settings().weekStartsOn):l(a)}safeResolvePreset(n){try{return this.normalizePresetValue(n.resolve(this.presetContext()))}catch{return null}}commitTypedValue(){if(!this.editable()||!this.textEdited()||this.effectiveDisabled()||this.isReadonly())return;let n=this.typedText().trim();if(!n){this.commitDraft(null);return}let e=this.parseTypedText(n);if(!e){this.parseError.set(`parse`),this.parseFailed.emit(n);return}this.draftValue.set(e),this.commitDraft(e)}commitRangeEndpoint(n){if(!this.textEdited()||!this.editable()||this.effectiveDisabled()||this.isReadonly())return;let e=this.typedStart().trim(),t=this.typedEnd().trim();if(!e&&!t){this.commitDraft(null);return}let r=e?this.parseSingleDate(e):null,a=t?this.parseSingleDate(t):null;if(e&&!r||t&&!a){this.parseError.set(`parse`),this.parseFailed.emit(n===`start`?e:t);return}let l=this.modeInfo().period,g=l&&r&&a?{start:r,end:a,kind:l}:{start:r,end:a};this.draftValue.set(g),r&&a&&this.commitDraft(g)?(this.typedStart.set(this.formatEndpoint(this.rangeStart(this.draftValue()))),this.typedEnd.set(this.formatEndpoint(this.rangeEnd(this.draftValue())))):(!r||!a)&&this.parseError.set(`incomplete`)}parseTypedText(n){let e=this.mode(),t=this.settings().rangeSeparator,r=this.modeInfo();if(r.selection===`range`){let a=n.split(t).map(y=>y.trim());if(a.length<2)return null;let l=this.parseSingleDate(a[0]),g=this.parseSingleDate(a[1]);return!l||!g?null:e===`range`?{start:l,end:g}:{start:l,end:g,kind:r.period??`month`}}if(e===`multiple`){let a=n.split(`,`).map(l=>this.parseSingleDate(l.trim()));return a.length&&a.every(l=>l!==null)?[...new Set(a)].sort():null}return this.parseSingleDate(n)}parseSingleDate(n){if(this.allowNaturalLanguage()){let r=sK(n,{now:this.clock.now(),timeZone:this.settings().timeZone,locale:this.settings().locale,calendar:this.adapter(),weekStartsOn:this.settings().weekStartsOn});if(r.value)return this.modeInfo().period===`week`?Yn(r.value,`week`,this.settings().weekStartsOn).start:r.value}let e={locale:this.settings().locale,calendar:this.adapter()};if(this.modeInfo().period===`week`){let r=n.split(this.settings().rangeSeparator),a=r.length===2?TQ(r[1].trim(),`dd MMM yyyy`,e).value:null,l=a?Yn(a,`week`,this.settings().weekStartsOn).start:null;if(l&&this.formatEndpoint(l)===n.trim())return l}let t=this.parseFormats().length?this.parseFormats():this.modeInfo().period?[this.patternForMode(this.modeInfo().period),this.settings().dateFormat]:[this.settings().dateFormat,`yyyy-MM-dd`];for(let r of t){let a=TQ(n,r,e);if(a.value)return this.modeInfo().period===`week`?Yn(a.value,`week`,this.settings().weekStartsOn).start:a.value}return null}async runResolver(n){let e=this.resolver();if(!e||this.availability())return;let t=++this.resolverToken,r=`${n.calendar}|${n.locale}|${n.timeZone}`;r!==this.resolverContext&&this.availabilityState.set(void 0),this.resolverContext=r,this.availabilityState.set({dates:this.availabilityState()?.dates??[],loading:!0,revision:n.revision});try{let a=await e(n);if(t!==this.resolverToken)return;this.availabilityState.set({dates:Ra(this.availabilityState()?.dates,a?.dates??[],n),loading:!1,revision:n.revision,retryable:!0})}catch{if(t!==this.resolverToken)return;this.availabilityState.set({dates:this.availabilityState()?.dates??[],loading:!1,error:this.loadErrorMessage(),retryable:!0,revision:n.revision})}}static ɵfac=function(e){return new(e||i)};static ɵcmp=$n$1({type:i,selectors:[[`bx-date-picker`]],viewQuery:function(e,t){e&1&&Ly(t.panelTemplate,Kd,5),e&2&&em()},inputs:{mode:[1,`mode`],pickerIcon:[1,`pickerIcon`],openPickerLabel:[1,`openPickerLabel`],startAt:[1,`startAt`],startView:[1,`startView`],parseFormats:[1,`parseFormats`],locale:[1,`locale`],calendarId:[1,`calendarId`],timeZone:[1,`timeZone`],weekStartsOn:[1,`weekStartsOn`],minimalDaysInFirstWeek:[1,`minimalDaysInFirstWeek`],dateFormat:[1,`dateFormat`],allowNaturalLanguage:[1,`allowNaturalLanguage`],editable:[1,`editable`],presentation:[1,`presentation`],weekdayNameFormat:[1,`weekdayNameFormat`],monthNameFormat:[1,`monthNameFormat`],months:[1,`months`],separateFields:[1,`separateFields`],commitPolicy:[1,`commitPolicy`],closeOnSelect:[1,`closeOnSelect`],clearable:[1,`clearable`],presets:[1,`presets`],presetsPlacement:[1,`presetsPlacement`],min:[1,`min`],max:[1,`max`],disabledDates:[1,`disabledDates`],disabledIntervals:[1,`disabledIntervals`],disabledWeekdays:[1,`disabledWeekdays`],dateFilter:[1,`dateFilter`],crossingPolicy:[1,`crossingPolicy`],minRangeLength:[1,`minRangeLength`],maxRangeLength:[1,`maxRangeLength`],allowSameDay:[1,`allowSameDay`],selectionLimit:[1,`selectionLimit`],availability:[1,`availability`],resolver:[1,`resolver`],loadingLabel:[1,`loadingLabel`],retryLabel:[1,`retryLabel`],loadErrorMessage:[1,`loadErrorMessage`],invalidSelectionLabel:[1,`invalidSelectionLabel`],applyLabel:[1,`applyLabel`],cancelLabel:[1,`cancelLabel`],clearLabel:[1,`clearLabel`],todayLabel:[1,`todayLabel`],presetsLabel:[1,`presetsLabel`],showToday:[1,`showToday`],showTodayButton:[1,`showTodayButton`],startLabel:[1,`startLabel`],endLabel:[1,`endLabel`],moreDatesLabel:[1,`moreDatesLabel`],selectedDatesLabel:[1,`selectedDatesLabel`],clearTooltip:[1,`clearTooltip`],visibleTagCount:[1,`visibleTagCount`],tagConfig:[1,`tagConfig`],overflowTagConfig:[1,`overflowTagConfig`],dayTemplate:[1,`dayTemplate`]},outputs:{viewChange:`viewChange`,monthSelected:`monthSelected`,yearSelected:`yearSelected`,valueCommit:`valueCommit`,draftChange:`draftChange`,openChange:`openChange`,visibleRangeChange:`visibleRangeChange`,request:`request`,retry:`retry`,parseFailed:`parseFailed`},features:[vt$1],ngContentSelectors:Gd,decls:14,vars:21,consts:[[`retryAction`,``],[`panelTemplate`,``],[`trigger`,``],[3,`control`,`inline`,`tooltip`,`showLoadingIndicator`,`hint`,`hintEnd`,`error`,`subscriptSizing`,`forId`],[1,`bx-date-field`,3,`focusin`,`focusout`],[`role`,`group`,1,`bx-date-range-fields`],[`bxSurface`,``,1,`bx-date-trigger`,`is-editable`,`is-range`,3,`has-label`,`is-open`,`is-floating`,`is-invalid`,`is-outline`,`is-readonly`,`is-disabled`,`is-keyboard-focused`],[`bxSurface`,``,1,`bx-date-trigger`,`is-editable`,3,`has-label`,`is-open`,`is-floating`,`is-invalid`,`is-outline`,`is-readonly`,`is-disabled`,`is-keyboard-focused`],[`type`,`button`,`bxSurface`,``,1,`bx-date-trigger`,3,`has-label`,`is-open`,`is-floating`,`is-invalid`,`is-outline`,`is-readonly`,`is-disabled`,`is-keyboard-focused`,`id`,`disabled`],[`bx-button`,``,`type`,`button`,`variant`,`text`,1,`bx-date-clear`,3,`surfaceEffects`,`disabled`,`bxTooltip`],[3,`dismiss`,`panelId`,`panelWidth`,`open`,`presentation`,`origin`,`content`,`ariaLabel`,`panelClass`],[`bxSurface`,``,1,`bx-date-trigger`,`is-range-endpoint`,`has-label`,3,`is-open`,`is-floating`,`is-invalid`,`is-outline`,`is-readonly`,`is-disabled`,`is-keyboard-focused`],[`bxSurface`,``,1,`bx-date-trigger`,`is-range-endpoint`,`has-label`],[1,`bx-floating-label`],[`aria-hidden`,`true`,1,`bx-field-required`],[`role`,`combobox`,`aria-autocomplete`,`none`,`aria-haspopup`,`dialog`,`type`,`text`,`autocomplete`,`off`,1,`bx-date-input`,3,`id`,`value`,`disabled`,`readOnly`],[`type`,`button`,`aria-haspopup`,`dialog`,1,`bx-date-endpoint-value`,`bx-date-value`,3,`id`,`disabled`],[`type`,`button`,1,`bx-date-trigger-icon-button`,3,`click`,`disabled`],[`size`,`16`,3,`name`,`decorative`],[`role`,`combobox`,`aria-autocomplete`,`none`,`aria-haspopup`,`dialog`,`type`,`text`,`autocomplete`,`off`,1,`bx-date-input`,3,`input`,`blur`,`keydown`,`keydown.escape`,`id`,`value`,`disabled`,`readOnly`],[`type`,`button`,`aria-haspopup`,`dialog`,1,`bx-date-endpoint-value`,`bx-date-value`,3,`click`,`keydown.escape`,`id`,`disabled`],[`bxSurface`,``,1,`bx-date-trigger`,`is-editable`,`is-range`],[`role`,`combobox`,`aria-autocomplete`,`none`,`type`,`text`,`autocomplete`,`off`,1,`bx-date-input`,3,`input`,`blur`,`keydown`,`keydown.escape`,`value`,`id`,`disabled`,`readOnly`],[`aria-hidden`,`true`,1,`bx-date-range-separator`],[`role`,`combobox`,`aria-autocomplete`,`none`,`type`,`text`,`autocomplete`,`off`,1,`bx-date-input`,3,`input`,`blur`,`keydown`,`keydown.escape`,`value`,`disabled`,`readOnly`],[`aria-hidden`,`true`,3,`value`],[3,`size`,`decorative`],[`bxSurface`,``,1,`bx-date-trigger`,`is-editable`],[`role`,`combobox`,`aria-autocomplete`,`none`,`type`,`text`,`autocomplete`,`off`,1,`bx-date-input`,3,`input`,`blur`,`keydown`,`keydown.escape`,`id`,`value`,`disabled`,`readOnly`],[`type`,`button`,`bxSurface`,``,1,`bx-date-trigger`,3,`click`,`keydown.arrowdown`,`keydown.escape`,`blur`,`id`,`disabled`],[1,`bx-date-value`],[1,`bx-selected-tags`],[`bxTruncate`,``,3,`bxTooltip`],[`aria-hidden`,`true`,1,`bx-date-trigger-icon`,3,`value`],[3,`text`,`config`,`focusable`,`tooltipOnTruncate`],[1,`bx-overflow-tag`,3,`text`,`config`,`tooltip`,`focusable`,`tooltipOnTruncate`],[`bx-button`,``,`type`,`button`,`variant`,`text`,1,`bx-date-clear`,3,`click`,`surfaceEffects`,`disabled`,`bxTooltip`],[`name`,`x`,`size`,`16`,3,`decorative`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`accent`,3,`click`],[`name`,`rotate-cw`,`size`,`16`,3,`decorative`],[`bxSurface`,``,`data-bx-surface`,`glass`,1,`bx-date-panel-content`,3,`bxSurfaceInteractive`],[1,`bx-date-panel-body`],[1,`bx-date-presets`],[1,`bx-date-calendar-column`],[3,`visibleRangeChange`,`viewChange`,`monthSelected`,`yearSelected`,`rangeStart`,`valueChange`,`selectionRejected`,`requestAvailability`,`retryAvailability`,`startView`,`mode`,`value`,`viewDate`,`months`,`retryTemplate`,`weekdayNameFormat`,`monthNameFormat`,`locale`,`calendarId`,`timeZone`,`weekStartsOn`,`minimalDaysInFirstWeek`,`min`,`max`,`disabledDates`,`disabledIntervals`,`disabledWeekdays`,`dateFilter`,`crossingPolicy`,`minRangeLength`,`maxRangeLength`,`allowSameDay`,`selectionLimit`,`readOnly`,`availability`,`dayTemplate`,`showToday`,`showTodayButton`,`todayLabel`,`loadingLabel`,`retryLabel`],[3,`presetSelect`,`presets`,`context`,`activeValue`,`horizontal`,`ariaLabel`]],template:function(e,t){if(e&1&&(jy(Zd),Os$1(0,`bx-form-field`,3)(1,`div`,4),br(`focusin`,function(){return t.onFieldFocus()})(`focusout`,function(a){return t.onFieldBlur(a)}),bT(2,tc,3,2,`div`,5)(3,sc,9,48,`div`,6)(4,gc,6,34,`div`,7)(5,Mc,8,33,`button`,8),bT(6,Nc,2,5,`button`,9),ba$1(),Os$1(7,`bx-picker-surface`,10),br(`dismiss`,function(){return t.cancel()}),ba$1(),Ey(8,Tc,3,2,`ng-template`,null,0,y1)(10,Pc,6,37,`ng-template`,null,1,y1),Py(12,0,Ud),Py(13,1,Xd),ba$1()),e&2){let r=CT(11);fa$1(`control`,t.fieldControl)(`inline`,!0)(`tooltip`,t.tooltip())(`showLoadingIndicator`,!1)(`hint`,t.hint())(`hintEnd`,t.hintEnd())(`error`,t.parseError()?t.resolvedInvalidLabel():t.error())(`subscriptSizing`,t.resolvedSubscriptSizing())(`forId`,t.controlId()),Ul$1(),Lr(`has-clear`,t.showClear()),Ul$1(),gT(t.rangeFieldLayout()===`separate`?2:t.editable()&&t.isRangeMode()&&!t.modeInfo().isPeriod?3:t.editable()&&!t.isRangeMode()&&t.mode()!==`multiple`?4:5),Ul$1(4),gT(t.showClear()?6:-1),Ul$1(),fa$1(`panelId`,t.controlId()+`-panel`)(`panelWidth`,t.panelWidth())(`open`,t.isOpen())(`presentation`,t.surfacePresentation())(`origin`,t.panelOrigin())(`content`,r)(`ariaLabel`,t.resolvedLabel()||t.resolvedDatePlaceholder())(`panelClass`,t.panelClass())}},dependencies:[OD,RD,fe,ul$1,zt,Y,U,on,In,zs$1,Pt$1,ct],styles:[`
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
}`]})};var Aa=(i,n)=>n.value+`-`+i;function Ec(i,n){if(i&1){let e=Jb();Os$1(0,`button`,11),br(`mousedown`,function(r){return r.preventDefault()})(`click`,function(r){let a=Jc$1(e).$index,l=Ql$1();return el$1(l.onOptionClick(a,r))}),XT(1),ba$1()}if(i&2){let e=n.$implicit,t=n.$index,r=Ql$1();tm(`height`,r.itemHeight(),`px`),Lr(`is-selected`,r.isSelectedAt(t))(`is-disabled`,e.disabled),fa$1(`id`,r.wheelId+`-`+t),Ro$1(`aria-hidden`,r.loopOffset()>0&&(t<r.loopOffset()||t>=r.loopOffset()*2)?!0:null)(`aria-selected`,r.isSelectedAt(t))(`aria-disabled`,e.disabled),Ul$1(),rm(` `,e.label,` `)}}function Rc(i,n){if(i&1&&(Os$1(0,`span`,12),XT(1),ba$1()),i&2){let e=n.$implicit,t=n.$index,r=Ql$1();tm(`height`,r.itemHeight(),`px`),Lr(`is-selected`,r.isSelectedAt(t))(`is-disabled`,e.disabled),Ul$1(),Zy(e.label)}}var Bt=class i{i18n=m(xQ,{optional:!0});bxA11yService=m(Fr);destroyRef=m(me);position=W(0);dragging=W(!1);wheelId=`bx-time-wheel-${yZ()}`;resolvedLabel=K(()=>mQ(this.label(),this.i18n));logicalIndex=K(()=>{let n=this.options().findIndex(e=>e.value===this.value());return n<0?0:n});displayOptions=K(()=>{let n=this.options();return!this.loop()||n.length<2?n:[...n,...n,...n]});loopOffset=K(()=>this.loop()&&this.options().length>1?this.options().length:0);centerOffset=K(()=>(this.visibleItems()-1)/2*this.itemHeight());viewportHeight=K(()=>this.visibleItems()*this.itemHeight());trackTransform=K(()=>`translateY(${this.centerOffset()-this.position()*this.itemHeight()}px)`);lensTransform=K(()=>`translateY(${-this.position()*this.itemHeight()}px)`);options=ke.required();value=l4(null);label=ke(`Time`);type=ke(`minute`);loop=ke(!0,{transform:Ge});disabled=ke(!1,{transform:Ge});itemHeight=ke(40);visibleItems=ke(5);activated=wk();cancelGesture;motion;wheelTimer;wheelVelocity;wheelOptions;wheelCoordinate=0;motionPosition=0;motionVelocity=0;committedIndex=null;initialized=!1;constructor(){tt(()=>{let n=this.logicalIndex(),e=this.bxA11yService.isReducedMotion();if(!this.dragging()){if(this.committedIndex===n&&!e){this.committedIndex=null;return}this.animateTo(this.targetPhysicalIndex(n),!this.initialized),this.initialized=!0}}),this.destroyRef.onDestroy(()=>{this.cancelGesture?.(),clearTimeout(this.wheelTimer),this.motion?.destroy()})}step(n){if(this.disabled())return;this.cancelWheel();let e=this.options(),t=e.length;if(!t)return;let r=this.logicalIndex()+n,a=0;for(this.loop()?r=(r%t+t)%t:r=Math.max(0,Math.min(t-1,r));e[r]?.disabled&&a<t;)r=this.loop()?((r+Math.sign(n||1))%t+t)%t:Math.max(0,Math.min(t-1,r+Math.sign(n||1))),a+=1;this.commitIndex(r)}onOptionClick(n,e){this.disabled()||e.detail>0||this.commitIndex(this.wrapIndex(n))}isSelectedAt(n){return this.wrapIndex(n)===this.logicalIndex()}onKeydown(n){if(n.key===`Escape`&&(this.cancelGesture||this.wheelTimer)){n.preventDefault(),n.stopPropagation(),this.cancelGesture?.(),this.cancelWheel();return}if(this.disabled())return;let e=Math.max(1,Math.round(this.visibleItems()/2));if(n.key===`ArrowUp`)this.step(-1);else if(n.key===`ArrowDown`)this.step(1);else if(n.key===`PageUp`)this.step(-e);else if(n.key===`PageDown`)this.step(e);else if(n.key===`Home`)this.commitIndex(0);else if(n.key===`End`)this.commitIndex(this.options().length-1);else if(n.key===`Enter`||n.key===` `)this.activated.emit(this.value()??``);else return;n.preventDefault()}onWheel(n){if(this.disabled()||!this.options().length||n.ctrlKey||Math.abs(n.deltaX)>Math.abs(n.deltaY))return;n.preventDefault(),n.stopPropagation(),this.wheelTimer||(this.cancelGesture?.(),this.motion?.destroy(),this.motion=void 0,this.wheelOptions=this.options(),this.wheelCoordinate=0,this.wheelVelocity=new vg(0,n.timeStamp),this.dragging.set(!0));let e=n.deltaY*(n.deltaMode===1?this.itemHeight():n.deltaMode===2?this.viewportHeight():1);this.wheelCoordinate+=e,this.wheelVelocity?.update(this.wheelCoordinate,n.timeStamp),this.position.set(this.constrainPosition(this.position()+e/this.itemHeight())),clearTimeout(this.wheelTimer),this.wheelTimer=setTimeout(()=>{let t=(this.wheelVelocity?.velocity(performance.now())??0)/this.itemHeight(),r=this.disabled()||this.options()!==this.wheelOptions;if(this.wheelTimer=void 0,this.wheelVelocity=void 0,this.wheelOptions=void 0,this.dragging.set(!1),r){this.animateTo(this.targetPhysicalIndex(this.logicalIndex()),!1);return}this.settlePosition(this.position(),t)},80)}onPointerDown(n){if(!n.isPrimary||n.button!==0||this.disabled()||!this.options().length)return;let e=n.currentTarget;if(!(e instanceof HTMLElement))return;this.cancelGesture?.(),this.cancelWheel();let t=this.options(),r=n.clientY,a=this.position(),l=new vg(n.clientY,n.timeStamp),g=n.pointerId,y=!1;this.motion?.destroy(),this.motion=void 0,this.dragging.set(!0),e.setPointerCapture(g);let w=Z=>{if(Z.pointerId!==g)return;l.update(Z.clientY,Z.timeStamp),Math.abs(Z.clientY-r)>4&&(y=!0),Z.preventDefault();let Be=a+(r-Z.clientY)/this.itemHeight(),z=this.constrainPosition(Be);this.loop()&&(a+=z-Be),this.position.set(z)},R=()=>{g=-1,e.removeEventListener(`pointermove`,w),e.removeEventListener(`pointerup`,F),e.removeEventListener(`pointercancel`,q),e.removeEventListener(`lostpointercapture`,q),this.cancelGesture=void 0,this.dragging.set(!1),e.hasPointerCapture(n.pointerId)&&e.releasePointerCapture(n.pointerId)},F=Z=>{if(Z.pointerId!==g)return;if(this.disabled()||this.options()!==t){q();return}let Be=-l.velocity(Z.timeStamp)/this.itemHeight(),z=this.position(),ve=e.getBoundingClientRect(),we=z+(Z.clientY-(ve.top+ve.height/2))/this.itemHeight();if(R(),!y&&this.options()[this.wrapIndex(we)]?.disabled){this.animateTo(this.targetPhysicalIndex(this.logicalIndex()),!1);return}this.settlePosition(y?z:we,y?Be:0)},q=()=>{R(),this.animateTo(this.targetPhysicalIndex(this.logicalIndex()),!1)};this.cancelGesture=q,e.addEventListener(`pointermove`,w,{passive:!1}),e.addEventListener(`pointerup`,F),e.addEventListener(`pointercancel`,q),e.addEventListener(`lostpointercapture`,q)}commitIndex(n,e,t){let r=this.options()[n];!r||r.disabled||(this.committedIndex=n,this.animateTo(t??this.targetPhysicalIndex(n),!1,e),this.value.set(r.value),this.activated.emit(r.value))}animateTo(n,e,t){if(e||this.bxA11yService.isReducedMotion()){this.motion?.destroy(),this.motion=void 0,this.position.set(this.recenterValue(n));return}this.motion||(this.motion=Wo$1([this.position()],([r],[a])=>{this.motionPosition=r,this.motionVelocity=a,this.position.set(this.recenterValue(r))},hr.soft),this.motion.track([this.position()],[t??0])),t!==void 0&&this.motion.track([this.position()],[t]),this.motion.retarget([n],!1)}targetPhysicalIndex(n){if(!this.loop())return n;let e=this.options().length,t=this.loopOffset(),r=this.recenterValue(this.position());(this.motionPosition!==r||r!==this.position())&&(this.motion?.track([r],[this.motionVelocity]),this.position.set(r));let a=t+n,l=a;for(let g of[a-e,a+e])Math.abs(r-g)<Math.abs(r-l)&&(l=g);return l}recenterValue(n){let e=this.options().length;if(!this.loop()||e<2)return n;let t=this.loopOffset();return n>=t+e||n<t?t+((n-t)%e+e)%e:n}nearestEnabledPosition(n,e){let t=this.options().length,r=Math.round(n);for(let a=0;a<t;a++){let l=a===0?[r]:[r+a*(e||1),r-a*(e||1)];for(let g of l){let y=this.wrapIndex(g);if(!this.options()[y]?.disabled)return this.loop()?g:y}}return null}wrapIndex(n){let e=this.options().length;if(!e)return 0;let t=this.loopOffset();return this.loop()?((Math.round(n)-t)%e+e)%e:Math.max(0,Math.min(e-1,Math.round(n)-t))}constrainPosition(n){if(this.loop())return this.recenterValue(n);let e=Math.max(0,this.options().length-1),t=n<0?0:e;if(n>=0&&n<=e)return n;let r=n-t;return t+r/(1+Math.abs(r))*.75}settlePosition(n,e){let t=Math.min(12,Math.max(0,this.options().length-1)),r=n+Math.max(-t,Math.min(t,e*.24)),a=this.nearestEnabledPosition(r,Math.sign(e));a!==null?this.commitIndex(this.wrapIndex(a),e,a):this.animateTo(this.targetPhysicalIndex(this.logicalIndex()),!1)}cancelWheel(){this.wheelTimer&&(clearTimeout(this.wheelTimer),this.wheelTimer=void 0,this.wheelVelocity=void 0,this.wheelOptions=void 0,this.dragging.set(!1),this.animateTo(this.targetPhysicalIndex(this.logicalIndex()),!1))}static ɵfac=function(e){return new(e||i)};static ɵcmp=$n$1({type:i,selectors:[[`bx-time-wheel`]],inputs:{options:[1,`options`],value:[1,`value`],label:[1,`label`],type:[1,`type`],loop:[1,`loop`],disabled:[1,`disabled`],itemHeight:[1,`itemHeight`],visibleItems:[1,`visibleItems`]},outputs:{value:`valueChange`,activated:`activated`},decls:13,vars:23,consts:[[`viewport`,``],[1,`bx-wheel`],[`role`,`listbox`,`tabindex`,`0`,1,`bx-wheel-viewport`,3,`keydown`,`wheel`,`pointerdown`],[1,`bx-wheel-base`],[1,`bx-wheel-track`],[`type`,`button`,`role`,`option`,`tabindex`,`-1`,1,`bx-wheel-option`,3,`id`,`is-selected`,`is-disabled`,`height`],[`aria-hidden`,`true`,`inert`,``,1,`bx-wheel-magnifier`],[1,`bx-wheel-lens-content`],[1,`bx-wheel-lens-track`],[1,`bx-wheel-lens-option`,3,`is-selected`,`is-disabled`,`height`],[`bxSurface`,``,`data-bx-surface`,`glass`,`bxSurfaceGlassiness`,`auto`,`bxSurfaceQuality`,`auto`,`bxSurfaceLocalRefraction`,``,`aria-hidden`,`true`,1,`bx-wheel-band`,3,`bxSurfaceInteractive`,`bxSurfaceEmission`],[`type`,`button`,`role`,`option`,`tabindex`,`-1`,1,`bx-wheel-option`,3,`mousedown`,`click`,`id`],[1,`bx-wheel-lens-option`]],template:function(e,t){e&1&&(Os$1(0,`div`,1)(1,`div`,2,0),br(`keydown`,function(a){return t.onKeydown(a)})(`wheel`,function(a){return t.onWheel(a)})(`pointerdown`,function(a){return t.onPointerDown(a)}),Os$1(3,`div`,3)(4,`div`,4),Yb(5,Ec,2,11,`button`,5,Aa),ba$1()(),Os$1(7,`div`,6)(8,`div`,7)(9,`div`,8),Yb(10,Rc,2,7,`span`,9,Aa),ba$1()()(),Cy(12,`div`,10),ba$1()()),e&2&&(tm(`--%NS%bx-wheel-item-height`,t.itemHeight(),`px`)(`--%NS%bx-wheel-center-offset`,t.centerOffset(),`px`),Lr(`is-dragging`,t.dragging())(`is-disabled`,t.disabled()),Ul$1(),tm(`height`,t.viewportHeight(),`px`),Ro$1(`aria-label`,t.resolvedLabel())(`aria-activedescendant`,t.options().length?t.wheelId+`-`+(t.loopOffset()+t.logicalIndex()):null)(`aria-disabled`,t.disabled()),Ul$1(3),tm(`transform`,t.trackTransform()),Ul$1(),Zb(t.displayOptions()),Ul$1(2),tm(`height`,t.itemHeight(),`px`),Ul$1(2),tm(`transform`,t.lensTransform()),Ul$1(),Zb(t.displayOptions()),Ul$1(2),tm(`height`,t.itemHeight(),`px`),fa$1(`bxSurfaceInteractive`,!1)(`bxSurfaceEmission`,!1))},dependencies:[RD],styles:[`
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
}`]})};var Va={timeFormat:({params:i})=>`Enter a time in the ${i.format} format.`,timeRange:({params:i})=>i.hourCycle===12?`Use an hour from 1 to 12 with AM or PM, and minutes and seconds from 00 to 59.`:`Use an hour from 00 to 23, and minutes and seconds from 00 to 59.`,timeMin:({params:i})=>`The time cannot be before ${i.minFormatted}.`,timeMax:({params:i})=>`The time cannot be after ${i.maxFormatted}.`,timeDisabled:`This time is unavailable. Choose another time.`,timeAvailability:`This time has not been confirmed as available. Retry loading the available times.`,timeLoading:`Wait for the available times to finish loading.`,timeStep:({params:i})=>`Use increments of ${i.minuteStep} minutes, ${i.secondStep} seconds and ${i.millisecondStep} milliseconds.`};function Xn(i){return String(i).padStart(2,`0`)}function Fa(i){let n=i<0?`-`:`+`,e=Math.abs(i);return`GMT${n}${Xn(Math.floor(e/60))}:${Xn(e%60)}`}function za(i,n){let e=Math.max(1,n)*60;if(i===void 0)return e;if(typeof i==`number`)return Number.isFinite(i)&&i>0?i*60:e;let t=/^\s*(\d+(?:\.\d+)?)\s*(h|hours?|m|mins?|minutes?|s|seconds?)?\s*$/i.exec(i);if(!t||Number(t[1])<=0)return e;let r=t[2]?.toLowerCase()??`m`,a=r.startsWith(`h`)?3600:r.startsWith(`s`)?1:60;return Number(t[1])*a}var Lc=[`listViewport`];var Ac=[`collection`];var Vc=[`panelTemplate`];var Fc=[[[`bx-error`]],[[`bx-hint`]]];var zc=[`bx-error`,`bx-hint`];var Bc=[`ngProjectAs`,`bx-error`,5,[`bx-error`]];var Hc=[`ngProjectAs`,`bx-hint`,5,[`bx-hint`]];function qc(i,n){i&1&&(Os$1(0,`span`,12),XT(1,`*`),ba$1())}function Wc(i,n){if(i&1&&(Os$1(0,`label`,6),XT(1),bT(2,qc,2,0,`span`,12),ba$1()),i&2){let e=Ql$1();Ro$1(`for`,e.controlId()),Ul$1(),rm(``,e.resolvedLabel(),` `),Ul$1(),gT(e.effectiveRequired()&&!e.resolvedHideRequiredMarker()?2:-1)}}function jc(i,n){i&1&&Cy(0,`bx-loading-spinner`,13),i&2&&fa$1(`size`,16)(`decorative`,!0)}function $c(i,n){if(i&1&&Cy(0,`bx-icon`,14),i&2){let e=Ql$1(2);fa$1(`name`,e.pickerIcon())(`decorative`,!0)}}function Kc(i,n){if(i&1&&bT(0,jc,1,2,`bx-loading-spinner`,13)(1,$c,1,2,`bx-icon`,14),i&2){let e=n.$implicit;gT(e?0:1)}}function Zc(i,n){if(i&1){let e=Jb();Os$1(0,`button`,15),br(`click`,function(){Jc$1(e);let r=Ql$1();return el$1(r.clear())}),Cy(1,`bx-icon`,16),ba$1()}if(i&2){let e=Ql$1();fa$1(`surfaceEffects`,!1)(`disabled`,e.effectiveDisabled())(`bxTooltip`,e.resolvedClearTooltip()),Ro$1(`aria-label`,e.resolvedClearLabel()),Ul$1(),fa$1(`decorative`,!0)}}function Gc(i,n){if(i&1){let e=Jb();Os$1(0,`span`,27),XT(1,`:`),ba$1(),Os$1(2,`bx-time-wheel`,30),br(`valueChange`,function(r){Jc$1(e);let a=Ql$1(3);return el$1(a.onWheelChange(`second`,r))}),ba$1()}if(i&2){let e=Ql$1(3);Ul$1(2),fa$1(`options`,e.wheelColumns().seconds)(`value`,e.wheelValue(`second`))(`label`,e.resolvedSecondLabel())(`loop`,e.loopColumns())}}function Uc(i,n){if(i&1){let e=Jb();Os$1(0,`span`,27),XT(1,`.`),ba$1(),Os$1(2,`bx-time-wheel`,31),br(`valueChange`,function(r){Jc$1(e);let a=Ql$1(3);return el$1(a.onWheelChange(`millisecond`,r))}),ba$1()}if(i&2){let e=Ql$1(3);Ul$1(2),fa$1(`options`,e.wheelColumns().milliseconds)(`value`,e.wheelValue(`millisecond`))(`label`,e.resolvedMillisecondLabel())(`loop`,e.loopColumns())}}function Xc(i,n){if(i&1){let e=Jb();Os$1(0,`bx-time-wheel`,32),br(`valueChange`,function(r){Jc$1(e);let a=Ql$1(3);return el$1(a.onWheelChange(`period`,r))}),ba$1()}if(i&2){let e=Ql$1(3);fa$1(`options`,e.wheelColumns().periods)(`value`,e.wheelValue(`period`))(`label`,e.resolvedPeriodLabel())(`loop`,!1)}}function Yc(i,n){if(i&1){let e=Jb();Os$1(0,`div`,21)(1,`bx-time-wheel`,26),br(`valueChange`,function(r){Jc$1(e);let a=Ql$1(2);return el$1(a.onWheelChange(`hour`,r))}),ba$1(),Os$1(2,`span`,27),XT(3,`:`),ba$1(),Os$1(4,`bx-time-wheel`,28),br(`valueChange`,function(r){Jc$1(e);let a=Ql$1(2);return el$1(a.onWheelChange(`minute`,r))}),ba$1(),bT(5,Gc,3,4),bT(6,Uc,3,4),bT(7,Xc,1,4,`bx-time-wheel`,29),ba$1()}if(i&2){let e=Ql$1(2);Ul$1(),fa$1(`options`,e.wheelColumns().hours)(`value`,e.wheelValue(`hour`))(`label`,e.resolvedHourLabel())(`loop`,e.loopColumns()),Ul$1(3),fa$1(`options`,e.wheelColumns().minutes)(`value`,e.wheelValue(`minute`))(`label`,e.resolvedMinuteLabel())(`loop`,e.loopColumns()),Ul$1(),gT(e.showSeconds()?5:-1),Ul$1(),gT(e.showMilliseconds()?6:-1),Ul$1(),gT(e.showPeriod()?7:-1)}}function Qc(i,n){i&1&&Cy(0,`bx-icon`,37),i&2&&fa$1(`decorative`,!0)}function Jc(i,n){if(i&1){let e=Jb();Os$1(0,`button`,36),br(`click`,function(){let r=Jc$1(e).$implicit,a=Ql$1(3);return el$1(a.onListSelect(r.value))}),Os$1(1,`span`),XT(2),ba$1(),bT(3,Qc,1,1,`bx-icon`,37),ba$1()}if(i&2){let e=n.$implicit,t=n.index,r=n.count,a=Ql$1(3);Lr(`is-selected`,a.internalValue()===e.value)(`is-active`,a.listFocusValue()===e.value),fa$1(`id`,a.controlId()+`-`+e.value)(`disabled`,e.disabled),Ro$1(`aria-posinset`,t+1)(`aria-setsize`,r)(`aria-selected`,a.internalValue()===e.value)(`aria-disabled`,e.disabled)(`data-time-value`,e.value),Ul$1(2),Zy(e.label),Ul$1(),gT(a.internalValue()===e.value?3:-1)}}function eu(i,n){if(i&1){let e=Jb();Os$1(0,`div`,33,1),br(`keydown`,function(r){Jc$1(e);let a=CT(3),l=Ql$1(2);return el$1(l.onListKeydown(r,a))}),Os$1(2,`bx-virtual-collection`,34,2),Ey(4,Jc,4,13,`ng-template`,35),ba$1()()}if(i&2){let e=CT(1),t=CT(3),r=Ql$1(2);Ro$1(`aria-activedescendant`,r.listActiveId())(`aria-label`,r.resolvedLabel()||r.resolvedOpenPickerLabel()),Ul$1(2),fa$1(`items`,r.listOptions())(`trackBy`,r.listTrackBy)(`config`,r.listConfig)(`scrollContainer`,e),Ro$1(`role`,`presentation`),Ul$1(2),fa$1(`bxVirtualItem`,t)}}function nu(i,n){if(i&1&&Cy(0,`bx-loading-indicator`,38),i&2){let e=Ql$1(3);fa$1(`size`,20)(`label`,e.resolvedLoadingLabel())}}function tu(i,n){if(i&1){let e=Jb();Os$1(0,`button`,42),br(`click`,function(){Jc$1(e);let r=Ql$1(4);return el$1(r.retrySlots())}),Cy(1,`bx-icon`,43),XT(2),ba$1()}if(i&2){let e=Ql$1(4);Ul$1(),fa$1(`decorative`,!0),Ul$1(),rm(``,e.resolvedRetryLabel(),` `)}}function iu(i,n){if(i&1&&(Os$1(0,`div`,40),XT(1),ba$1(),bT(2,tu,3,2,`button`,41)),i&2){let e=Ql$1(3);Ul$1(),Zy(e.availabilityError()),Ul$1(),gT(e.availabilityForPanel()?.retryable!==!1?2:-1)}}function ru(i,n){if(i&1&&(Os$1(0,`span`,39),XT(1),ba$1()),i&2){let e=Ql$1(3);Ul$1(),Zy(e.resolvedEmptyLabel())}}function au(i,n){if(i&1&&(Os$1(0,`div`,23),bT(1,nu,1,2,`bx-loading-indicator`,38)(2,iu,3,2)(3,ru,2,1,`span`,39),ba$1()),i&2){let e=Ql$1(2);Ul$1(),gT(e.availabilityLoading()?1:e.availabilityError()?2:3)}}function ou(i,n){if(i&1){let e=Jb();Os$1(0,`div`,24)(1,`button`,44),br(`click`,function(){Jc$1(e);let r=Ql$1(2);return el$1(r.selectNow())}),XT(2),ba$1()()}if(i&2){let e=Ql$1(2);Ul$1(),fa$1(`disabled`,!e.canSelectNow()),Ul$1(),Zy(e.resolvedNowLabel())}}function lu(i,n){if(i&1){let e=Jb();Os$1(0,`bx-select`,45),br(`valueChange`,function(r){Jc$1(e);let a=Ql$1(2);return el$1(a.onTimeZoneSelect(r))}),ba$1()}if(i&2){let e=Ql$1(2);fa$1(`label`,e.resolvedTimeZoneLabel())(`options`,e.timeZoneOptions())(`value`,e.selectedTimeZone()??e.settings().timeZone)(`isSearchable`,!0)}}function su(i,n){if(i&1&&(Os$1(0,`div`,17)(1,`div`,18)(2,`div`,19)(3,`div`,20),bT(4,Yc,8,11,`div`,21)(5,eu,5,8,`div`,22),ba$1(),bT(6,au,4,1,`div`,23),ba$1(),bT(7,ou,3,2,`div`,24),bT(8,lu,1,4,`bx-select`,25),ba$1()()),i&2){let e=Ql$1();Lr(`is-drawer`,e.isDrawer()),fa$1(`bxSurfaceInteractive`,!1),Ul$1(2),Ro$1(`aria-busy`,e.availabilityLoading()),Ul$1(),Ro$1(`inert`,e.panelFeedback()?``:null)(`aria-hidden`,e.panelFeedback()?!0:null),Ul$1(),gT(e.timePresentation()===`wheel`?4:5),Ul$1(2),gT(e.panelFeedback()?6:-1),Ul$1(),gT(e.resolvedNowLabel()?7:-1),Ul$1(),gT(e.showTimeZone()?8:-1)}}var Ba=class i extends de{injector=m(se);bxA11yService=m(Fr);ngZone=m(ce);bxDateTimeConfigService=m(sD);clock=m(nD);i18n=m(xQ,{optional:!0});windowDimensionsService=m(Cd$1);originElement=W(null);availabilityState=W(void 0);selectedTimeZone=W(null);usesExternalAvailability=K(()=>this.availability()!==void 0);slotContext=K(()=>`${this.settings().locale}|${this.settings().timeZone}|${this.settings().precision}`);listViewport=d4(`listViewport`);listCollection=d4(`collection`);typedText=W(``);textEdited=W(!1);typedError=W(null);fieldFocused=W(!1);selectionEdited=W(!1);isOpen=W(!1);draftTime=W(`09:00`);listFocusValue=W(null);settings=K(()=>{let n=this.hourCycle();return this.bxDateTimeConfigService.resolve({locale:this.locale(),timeZone:this.selectedTimeZone()??this.timeZone()??void 0,hourCycle:n===`auto`?void 0:n,precision:this.precision(),minuteStep:this.minuteStep(),secondStep:this.secondStep(),millisecondStep:this.millisecondStep(),timeFormat:this.timeFormat(),showTimeZoneLabel:this.showTimeZone()})});surfacePresentation=K(()=>{let n=this.presentation();return n!==`auto`?n:this.windowDimensionsService.isMobile()?`drawer`:`popover`});isDrawer=K(()=>this.surfacePresentation()===`drawer`);displayValue=K(()=>this.formatValue(this.internalValue()));resolvedTimePlaceholder=K(()=>mQ(this.placeholder()??this.parseFormats()[0]??this.settings().timeFormat,this.i18n));resolvedOpenPickerLabel=K(()=>mQ(this.openPickerLabel(),this.i18n));resolvedClearTooltip=K(()=>mQ(this.clearTooltip()??this.clearLabel(),this.i18n));resolvedClearLabel=K(()=>mQ(this.clearLabel(),this.i18n));resolvedNowLabel=K(()=>mQ(this.nowLabel(),this.i18n));resolvedHourLabel=K(()=>mQ(this.hourLabel(),this.i18n));resolvedMinuteLabel=K(()=>mQ(this.minuteLabel(),this.i18n));resolvedSecondLabel=K(()=>mQ(this.secondLabel(),this.i18n));resolvedMillisecondLabel=K(()=>mQ(this.millisecondLabel(),this.i18n));resolvedPeriodLabel=K(()=>mQ(this.periodLabel(),this.i18n));resolvedTimeZoneLabel=K(()=>mQ(this.timeZoneLabel(),this.i18n));resolvedLoadingLabel=K(()=>mQ(this.loadingLabel(),this.i18n));resolvedRetryLabel=K(()=>mQ(this.retryLabel(),this.i18n));showClear=K(()=>this.clearable()&&(!!this.internalValue()||!!this.typedText())&&!this.isReadonly());isFloating=K(()=>this.fieldFocused()||this.keyboardFocused()||this.isOpen()||!!this.typedText()||!!this.displayValue()||this.resolvedFloatLabel()===`always`);timeZoneOptions=K(()=>LZ().map(n=>({value:n,label:this.timeZoneLabelFor(n),description:PZ(n,this.settings().locale).offsetMinutes===null?void 0:String(PZ(n,this.settings().locale).offsetMinutes)})));availabilityForPanel=K(()=>this.availability()??(this.resolver()?this.availabilityState():void 0));availabilityLoading=K(()=>this.availabilityForPanel()?.loading===!0);availabilityError=K(()=>mQ(this.availabilityForPanel()?.error,this.i18n));availabilityTimes=K(()=>this.availabilityForPanel()?.times??null);panelFeedback=K(()=>this.availabilityLoading()||!!this.availabilityError()||this.availabilityTimes()?.length===0||this.isListMode()&&!this.listOptions().length);listConfig={layout:`list`,estimatedRowHeight:40,overscan:160};listTrackBy=n=>n.value;listOptions=K(()=>{let n=this.options();if(n)return n.map(R=>({value:R.value,label:mQ(R.label,this.i18n)||TZ(R.value,this.settings().timeFormat,this.settings().locale),disabled:!!R.disabled||!this.isTimeAllowed(R.value)}));let e=this.settings().precision===`hour`?3600:this.settings().precision===`minute`?60:1,t=Math.max(e,Math.ceil(za(this.interval(),this.settings().minuteStep)/e)*e),r=this.min(),a=this.max(),l=r?Math.ceil(this.timeNumber(r)/1e3/e)*e:0,g=a?this.timeNumber(a)/1e3:86400-e,y=[],w=l;for(;w<=g;){let R=Math.round(w*1e3),F=qr$1({hour:Math.floor(R/36e5),minute:Math.floor(R/6e4)%60,second:Math.floor(R/1e3)%60,millisecond:R%1e3},this.settings().precision);if($Q(F,this.settings().minuteStep,this.settings().secondStep,this.settings().millisecondStep))break;w+=e}for(let R=w;R<=g;R+=t){let F=Math.round(R*1e3),q=qr$1({hour:Math.floor(F/36e5),minute:Math.floor(F/6e4)%60,second:Math.floor(F/1e3)%60,millisecond:F%1e3},this.settings().precision);this.isTimeAllowed(q)&&y.push({value:q,label:TZ(q,this.settings().timeFormat,this.settings().locale),disabled:!1})}return y});canSelectNow=K(()=>this.isTimeAllowed(this.normalizeTime(FZ(this.clock.now(),this.settings().timeZone,this.settings().precision))));canApply=K(()=>this.isDraftValid()&&!this.availabilityLoading()&&!this.availabilityError());wheelColumns=K(()=>this.buildColumnsFor(this.draftTime()));errorText=K(()=>{let n=this.typedError();return n?this.validationMessage(n===`range`?`timeRange`:`timeFormat`):this.selectionEdited()?this.validationError():``});panelOrigin=K(()=>this.originElement());panelTemplate=d4(`panelTemplate`);options=ke(void 0);interval=ke(void 0);parseFormats=ke([]);pickerIcon=ke(`clock`);openPickerLabel=ke(`Choose time`);timePresentation=ke(`wheel`);presentation=ke(`auto`);locale=ke(void 0);timeZone=ke(void 0);hourCycle=ke(`auto`);precision=ke(`minute`);minuteStep=ke(1);secondStep=ke(1);millisecondStep=ke(1);timeFormat=ke(void 0);loopColumns=ke(!0,{transform:Ge});min=ke(void 0);max=ke(void 0);disabledTimes=ke([]);disabledIntervals=ke([]);timeFilter=ke(void 0);commitPolicy=ke(`auto`);closeOnSelect=ke(void 0,{transform:n=>n==null?void 0:Ge(n)});clearable=ke(!0,{transform:Ge});showTimeZone=ke(!1,{transform:Ge});showTimeZoneLabel=ke(!0,{transform:Ge});availability=ke(void 0);resolver=ke(void 0);loadingLabel=ke(void 0);retryLabel=ke(`Retry request`);applyLabel=ke(`Apply`);cancelLabel=ke(`Cancel`);clearLabel=ke(`Clear selection`);nowLabel=ke(void 0);clearTooltip=ke(void 0);hourLabel=ke(`Hour`);minuteLabel=ke(`Minute`);secondLabel=ke(`Second`);millisecondLabel=ke(`Millisecond`);periodLabel=ke(`AM or PM`);timeZoneLabel=ke(`Time zone`);loadErrorMessage=ke(`Times could not be loaded.`);invalidSelectionLabel=ke(void 0);emptyLabel=ke(`No times available.`);errorWrap=ke(!1,{transform:Ge});valueCommit=wk();openChange=wk();timeZoneChange=wk();slotRequest=wk();slotRetry=wk();listSelectionMotion;resolverToken=0;lastSlotContext=``;requestRevision=0;constructor(){super(),tt(()=>{(this.effectiveDisabled()||this.isReadonly())&&this.close()}),tt(()=>{let n=this.internalValue(),e=this.formatValue(n);this.textEdited()||this.typedText.set(e)}),tt(()=>{let n=this.internalValue();n&&this.draftTime.set(this.normalizeTime(n))}),tt(()=>{this.resolver(),this.usesExternalAvailability();let n=this.slotContext();le(()=>{let e=this.lastSlotContext;this.lastSlotContext=n,++this.resolverToken,this.availabilityState.set(void 0),this.isOpen()&&this.emitSlotRequest(e&&e.split(`|`)[1]!==n.split(`|`)[1]?`timezone`:`initial`)})}),tt(()=>{let n=this.listCollection(),e=this.listOptions(),t=this.isOpen();n&&t&&e.length&&le(()=>{let r=this.internalValue()??this.draftTime(),a=e.find(l=>!l.disabled&&this.timeNumber(l.value)>=this.timeNumber(r))??e.find(l=>!l.disabled);this.listFocusValue.set(a?.value??null),a&&n.scrollToItem(a.value)})}),tt(n=>{let e=this.listViewport()?.nativeElement;if(!e||!this.isOpen())return;let t=le(()=>this.ngZone.runOutsideAngular(()=>yN(e,{reducedMotion:this.bxA11yService.isReducedMotion()})));this.listSelectionMotion=t,n(()=>{t.destroy(),this.listSelectionMotion===t&&(this.listSelectionMotion=void 0)})}),tt(()=>{let n=this.bxA11yService.isReducedMotion();this.listSelectionMotion?.update({reducedMotion:n})}),this.destroyRef.onDestroy(()=>++this.resolverToken)}reset(){let n=this.isOpen();this.isOpen.set(!1),super.reset(),this.clearPendingEdit(),this.fieldFocused.set(!1),n&&this.openChange.emit(!1)}open(){if(this.isOpen()||this.effectiveDisabled()||this.isReadonly())return;let n=(this.textEdited()?this.parseTypedTime(this.typedText()).value:null)??this.internalValue();this.draftTime.set(this.normalizeTime(n??FZ(this.clock.now(),this.settings().timeZone,this.settings().precision))),this.alignEmptyDraft(),this.selectedTimeZone.set(this.timeZone()??this.settings().timeZone),!this.textEdited()&&!this.typedError()&&this.selectionEdited.set(!1),this.originElement.set(this.nativeElement.querySelector(`.bx-time-field`)),this.textEdited()||this.typedText.set(this.formatValue(this.internalValue())),this.isOpen.set(!0),this.openChange.emit(!0),this.emitSlotRequest(`initial`),this.isDrawer()||this.focus({preventScroll:!0})}close(){this.isOpen()&&(this.isOpen.set(!1),this.markAsTouched(),this.openChange.emit(!1))}apply(){if(this.effectiveDisabled()||this.isReadonly()||!this.canApply())return;let n=this.composedValue();this.updateValue(n),this.valueCommit.emit(n),this.close()}cancel(){let n=this.internalValue();n&&this.draftTime.set(n),this.close()}clear(){this.effectiveDisabled()||this.isReadonly()||(this.selectionEdited.set(!1),this.textEdited.set(!1),this.typedError.set(null),this.typedText.set(``),this.updateValue(null),this.valueCommit.emit(null),this.close(),this.focus({preventScroll:!0}))}selectNow(){if(this.effectiveDisabled()||this.isReadonly())return;let n=this.normalizeTime(FZ(this.clock.now(),this.settings().timeZone,this.settings().precision));this.draftTime.set(n),this.maybeCommitImmediately()}reloadSlots(){this.effectiveDisabled()||this.isReadonly()||this.availabilityLoading()||(this.isOpen()?this.emitSlotRequest(`initial`):this.open())}retrySlots(){this.emitSlotRequest(`retry`)}clearPendingEdit(){super.clearPendingEdit(),this.textEdited.set(!1),this.typedError.set(null),this.selectionEdited.set(!1),this.typedText.set(this.formatValue(this.internalValue()))}onFieldFocus(){this.fieldFocused.set(!0)}onFieldBlur(n){n.relatedTarget instanceof Node&&this.nativeElement.contains(n.relatedTarget)||(this.fieldFocused.set(!1),this.markAsTouched())}onTypedInput(n){this.onTypedValue(n.target.value)}onTypedValue(n){this.typedText.set(n===null?``:String(n)),this.textEdited.set(!0),this.typedError.set(null);let e=this.parseTypedTime(this.typedText()).value;e&&this.draftTime.set(e)}onTypedBlur(n){let e=n?.relatedTarget instanceof HTMLElement&&!!n.relatedTarget.closest(`.bx-time-panel-content`);this.textEdited()&&this.commitTypedTime(!e),this.markAsTouched()}onTypedKeydown(n){n.key===`Enter`?(n.preventDefault(),this.commitTypedTime()):n.key===`ArrowDown`?(n.preventDefault(),this.isOpen()||this.onTriggerClick(n),er(()=>{if(!this.isOpen())return;let e=this.nativeElement.ownerDocument.getElementById(this.controlId()+`-panel`);((this.isListMode()&&this.listFocusValue()?this.nativeElement.ownerDocument.getElementById(`${this.controlId()}-${this.listFocusValue()}`):null)??e?.querySelector(`[role="listbox"], .bx-time-feedback button`))?.focus({preventScroll:!0})},{injector:this.injector})):n.key===`Escape`&&this.isOpen()&&(n.preventDefault(),this.cancel())}onEditableClick(n){this.isOpen()||this.onTriggerClick(n)}onTriggerClick(n){this.isReadonly()||(this.isOpen()?this.close():this.open())}onWheelChange(n,e){if(!e)return;let t=this.draftTime(),r=this.wheelCandidate(t,n,e);r&&this.setTime(r)}onListKeydown(n,e){let t=this.listOptions().filter(g=>!g.disabled),r=t.findIndex(g=>g.value===(this.listFocusValue()??this.draftTime()));if(!t.length)return;if(n.key===`Enter`||n.key===` `){n.preventDefault(),this.onListSelect(t[Math.max(0,r)].value);return}let a=n.key===`ArrowDown`?1:n.key===`ArrowUp`?-1:0,l=n.key===`Home`?0:n.key===`End`?t.length-1:Math.max(0,Math.min(t.length-1,r+a));!a&&n.key!==`Home`&&n.key!==`End`||(n.preventDefault(),n.currentTarget.focus(),this.listFocusValue.set(t[l].value),e.scrollToItem(t[l].value),er(()=>{if(!this.isOpen())return;let g=this.nativeElement.ownerDocument.getElementById(`${this.controlId()}-${t[l].value}`);g&&this.listViewport()?.nativeElement.contains(g)&&g.focus({preventScroll:!0})},{injector:this.injector}))}onListSelect(n){this.isTimeAllowed(n)&&(this.listFocusValue.set(n),this.setTime(n))}onTimeZoneSelect(n){n&&(this.selectedTimeZone.set(n),this.timeZoneChange.emit(n))}showSeconds(){return this.settings().precision===`second`||this.settings().precision===`millisecond`}showMilliseconds(){return this.settings().precision===`millisecond`}showPeriod(){return this.settings().hourCycle===12}resolvedEmptyLabel(){return mQ(this.emptyLabel(),this.i18n)}wheelValue(n){let e=sr(this.draftTime())??{hour:0,minute:0,second:0,millisecond:0};return n===`hour`?String(this.settings().hourCycle===12?e.hour%12===0?12:e.hour%12:e.hour):n===`minute`?Xn(e.minute):n===`second`?Xn(e.second):n===`millisecond`?String(e.millisecond).padStart(3,`0`):Yo$1(this.settings().locale)[e.hour>=12?1:0]??``}isListMode(){return this.timePresentation()===`list`}listActiveId(){let n=this.listFocusValue()??this.draftTime();return this.listOptions().some(e=>e.value===n)?`${this.controlId()}-${n}`:null}timeZoneLabelFor(n){let e=PZ(n,this.settings().locale);return e.offsetMinutes===null?n:`${n} \xB7 ${Fa(e.offsetMinutes)}`}parseTypedTime(n){let e=this.options()?.find(a=>mQ(a.label,this.i18n).toLocaleLowerCase(this.settings().locale)===n.trim().toLocaleLowerCase(this.settings().locale));if(e)return{value:e.value,error:null,message:null};let t=this.parseFormats().length?this.parseFormats():[this.settings().timeFormat],r={value:null,error:`format`,message:null};for(let a of t){let l=AQ(n.trim(),a,this.settings().locale,this.settings().precision);if(l.value)return l;(l.error===`range`||r.error!==`range`)&&(r=l)}return r}commitTypedTime(n=!0){if(this.effectiveDisabled()||this.isReadonly())return;if(!this.typedText().trim()){this.clear();return}let e=this.parseTypedTime(this.typedText()),t=e.value;if(!t){this.typedError.set(e.error),n&&this.close();return}this.draftTime.set(t),this.maybeCommitImmediately(),n&&!this.canApply()&&this.close()}normalizeTime(n){return UQ(n,this.settings().precision,this.settings().minuteStep,this.settings().secondStep,this.settings().millisecondStep)}formatValue(n){if(!n)return``;let e=this.options()?.find(a=>this.timeNumber(a.value)===this.timeNumber(n));return`${mQ(e?.label,this.i18n)||TZ(n,this.settings().timeFormat,this.settings().locale)}${this.showTimeZone()&&this.showTimeZoneLabel()?` \xB7 ${this.selectedTimeZone()??this.settings().timeZone}`:``}`}buildColumnsFor(n){let e=HQ(n,this.settings().precision,this.settings().hourCycle,this.settings().locale,this.settings().minuteStep,this.settings().secondStep,this.settings().millisecondStep),t=(r$6,a)=>a.map(l=>s(r({},l),{disabled:!this.wheelCandidate(n,r$6,l.value)}));return{hours:t(`hour`,e.hours),minutes:t(`minute`,e.minutes),seconds:t(`second`,e.seconds),milliseconds:t(`millisecond`,e.milliseconds),periods:t(`period`,e.periods)}}wheelCandidate(n,e,t){let r$7=sr(n);if(!r$7)return null;let a=e===`hour`?this.settings().hourCycle===12?Number(t)%12+(r$7.hour>=12?12:0):Number(t):e===`period`?r$7.hour%12+Math.max(0,Yo$1(this.settings().locale).indexOf(t))*12:r$7.hour,l=s(r({},r$7),{hour:a,minute:e===`minute`?Number(t):r$7.minute,second:e===`second`?Number(t):r$7.second,millisecond:e===`millisecond`?Number(t):r$7.millisecond}),g=qr$1(l,this.settings().precision);if(this.isTimeAllowed(g))return g;let y=this.availabilityTimes()??this.options()?.filter(F=>!F.disabled).map(F=>F.value);if(y)return y.filter(q=>{let Z=sr(q);return!Z||!this.isTimeAllowed(q)?!1:e===`period`?Z.hour>=12==l.hour>=12:Z.hour!==l.hour?!1:e===`hour`?!0:Z.minute!==l.minute?!1:e===`minute`||Z.second===l.second&&(e===`second`||Z.millisecond===l.millisecond)}).sort((q,Z)=>Math.abs(this.timeNumber(q)-this.timeNumber(g))-Math.abs(this.timeNumber(Z)-this.timeNumber(g)))[0]??null;if(e!==`hour`&&e!==`period`)return null;let w=e===`hour`?[a]:Array.from({length:12},(F,q)=>q+(a>=12?12:0)),R=Array.from({length:Math.ceil(60/Math.max(1,this.settings().minuteStep))},(F,q)=>q*Math.max(1,this.settings().minuteStep));w.sort((F,q)=>Math.abs(F-a)-Math.abs(q-a)),R.sort((F,q)=>Math.abs(F-l.minute)-Math.abs(q-l.minute));for(let F of w)for(let q of R){let Z=qr$1(s(r({},l),{hour:F,minute:q}),this.settings().precision);if(this.isTimeAllowed(Z))return Z}return null}setTime(n){this.draftTime.set(n),this.maybeCommitImmediately()}maybeCommitImmediately(){if(this.effectiveDisabled()||this.isReadonly()||(this.selectionEdited.set(!0),this.textEdited.set(!this.canApply()),this.typedError.set(null),this.typedText.set(this.formatValue(this.draftTime())),!this.canApply()))return;let n=this.composedValue();JSON.stringify(n)!==JSON.stringify(this.internalValue())&&(this.updateValue(n),this.valueCommit.emit(n)),(this.closeOnSelect()??this.isListMode())&&this.close()}isDraftValid(){return this.isTimeAllowed(this.draftTime())}validationError(){let n=this.timeRestrictionReason(this.draftTime());return n?this.validationMessage(n):``}validationMessage(n){let e=this.invalidSelectionLabel();if(e!==void 0)return mQ(e,this.i18n);return Cn({kind:n,context:{format:this.parseFormats().length?this.parseFormats().join(` or `):this.settings().timeFormat,hourCycle:this.settings().hourCycle,minFormatted:this.min()?TZ(this.min()??`00:00`,this.settings().timeFormat,this.settings().locale):``,maxFormatted:this.max()?TZ(this.max()??`23:59`,this.settings().timeFormat,this.settings().locale):``,minuteStep:this.settings().minuteStep,secondStep:this.settings().secondStep,millisecondStep:this.settings().millisecondStep}},this.errorMessages(),r(r({},Va),this.formSettingsService.settings().errorMessages),this.i18n)}composedValue(){return this.isDraftValid()?this.draftTime():null}isTimeAllowed(n){return this.timeRestrictionReason(n)===null}timeNumber(n){let e=sr(n);return e?((e.hour*60+e.minute)*60+e.second)*1e3+e.millisecond:NaN}timeRestrictionReason(n){if(!sr(n))return`timeRange`;if(this.availabilityLoading())return`timeLoading`;if(this.availabilityError()||(this.resolver()||this.availability())&&!this.availabilityTimes())return`timeAvailability`;let e=this.timeNumber(n),t=this.availabilityTimes(),r=this.options(),a=this.min(),l=this.max();return a&&e<this.timeNumber(a)?`timeMin`:l&&e>this.timeNumber(l)?`timeMax`:t&&!t.some(g=>this.timeNumber(g)===e)||r&&!r.some(g=>!g.disabled&&this.timeNumber(g.value)===e)||this.disabledTimes().some(g=>this.timeNumber(g)===e)||this.disabledIntervals().some(g=>{let y=this.timeNumber(g.start),w=this.timeNumber(g.end);return y>w?e>=y||e<=w:e>=y&&e<=w})||this.timeFilter()?.(n)?`timeDisabled`:$Q(n,this.settings().minuteStep,this.settings().secondStep,this.settings().millisecondStep)?null:`timeStep`}alignEmptyDraft(){if(this.internalValue()||this.textEdited()||this.selectionEdited()||this.isTimeAllowed(this.draftTime()))return;let n=(this.availabilityTimes()??this.listOptions().filter(r=>!r.disabled).map(r=>r.value)).filter(r=>this.isTimeAllowed(r)),e=this.timeNumber(this.draftTime()),t=[...n].sort((r,a)=>Math.abs(this.timeNumber(r)-e)-Math.abs(this.timeNumber(a)-e))[0];t&&this.draftTime.set(t)}emitSlotRequest(n){if(!this.isOpen()||this.availabilityLoading())return;let e={date:null,timeZone:this.settings().timeZone,locale:this.settings().locale,revision:++this.requestRevision,source:n};n===`retry`?this.slotRetry.emit(e):this.slotRequest.emit(e),this.runResolver(e)}async runResolver(n){let e=this.resolver();if(!e||this.availability())return;let t=++this.resolverToken;this.availabilityState.set({times:this.availabilityState()?.times,loading:!0});try{let r=await e(n);if(t!==this.resolverToken)return;this.availabilityState.set({times:r?.times??[],loading:!1,retryable:!0}),this.alignEmptyDraft()}catch{if(t!==this.resolverToken)return;this.availabilityState.set({times:this.availabilityState()?.times,loading:!1,error:this.loadErrorMessage(),retryable:!0})}}static ɵfac=function(e){return new(e||i)};static ɵcmp=$n$1({type:i,selectors:[[`bx-time-picker`]],viewQuery:function(e,t){e&1&&Ly(t.listViewport,Lc,5)(t.listCollection,Ac,5)(t.panelTemplate,Vc,5),e&2&&em(3)},inputs:{options:[1,`options`],interval:[1,`interval`],parseFormats:[1,`parseFormats`],pickerIcon:[1,`pickerIcon`],openPickerLabel:[1,`openPickerLabel`],timePresentation:[1,`timePresentation`],presentation:[1,`presentation`],locale:[1,`locale`],timeZone:[1,`timeZone`],hourCycle:[1,`hourCycle`],precision:[1,`precision`],minuteStep:[1,`minuteStep`],secondStep:[1,`secondStep`],millisecondStep:[1,`millisecondStep`],timeFormat:[1,`timeFormat`],loopColumns:[1,`loopColumns`],min:[1,`min`],max:[1,`max`],disabledTimes:[1,`disabledTimes`],disabledIntervals:[1,`disabledIntervals`],timeFilter:[1,`timeFilter`],commitPolicy:[1,`commitPolicy`],closeOnSelect:[1,`closeOnSelect`],clearable:[1,`clearable`],showTimeZone:[1,`showTimeZone`],showTimeZoneLabel:[1,`showTimeZoneLabel`],availability:[1,`availability`],resolver:[1,`resolver`],loadingLabel:[1,`loadingLabel`],retryLabel:[1,`retryLabel`],applyLabel:[1,`applyLabel`],cancelLabel:[1,`cancelLabel`],clearLabel:[1,`clearLabel`],nowLabel:[1,`nowLabel`],clearTooltip:[1,`clearTooltip`],hourLabel:[1,`hourLabel`],minuteLabel:[1,`minuteLabel`],secondLabel:[1,`secondLabel`],millisecondLabel:[1,`millisecondLabel`],periodLabel:[1,`periodLabel`],timeZoneLabel:[1,`timeZoneLabel`],loadErrorMessage:[1,`loadErrorMessage`],invalidSelectionLabel:[1,`invalidSelectionLabel`],emptyLabel:[1,`emptyLabel`],errorWrap:[1,`errorWrap`]},outputs:{valueCommit:`valueCommit`,openChange:`openChange`,timeZoneChange:`timeZoneChange`,slotRequest:`slotRequest`,slotRetry:`slotRetry`},features:[vt$1],ngContentSelectors:zc,decls:14,vars:53,consts:[[`panelTemplate`,``],[`listViewport`,``],[`collection`,``],[3,`control`,`inline`,`tooltip`,`showLoadingIndicator`,`hint`,`hintEnd`,`error`,`subscriptSizing`,`forId`],[1,`bx-time-field`,3,`focusin`,`focusout`],[`bxSurface`,``,1,`bx-time-trigger`,`is-editable`],[1,`bx-floating-label`],[`role`,`combobox`,`aria-autocomplete`,`none`,`type`,`text`,`autocomplete`,`off`,`aria-haspopup`,`dialog`,1,`bx-time-input`,3,`click`,`input`,`blur`,`keydown`,`id`,`value`,`disabled`,`readOnly`],[`type`,`button`,1,`bx-time-icon-button`,3,`click`,`disabled`],[`aria-hidden`,`true`,3,`value`],[`bx-button`,``,`type`,`button`,`variant`,`text`,1,`bx-time-clear`,3,`surfaceEffects`,`disabled`,`bxTooltip`],[`panelClass`,`bx-time-panel`,3,`dismiss`,`panelId`,`panelWidth`,`open`,`autoFocus`,`presentation`,`origin`,`content`,`ariaLabel`],[`aria-hidden`,`true`,1,`bx-field-required`],[3,`size`,`decorative`],[`size`,`16`,3,`name`,`decorative`],[`bx-button`,``,`type`,`button`,`variant`,`text`,1,`bx-time-clear`,3,`click`,`surfaceEffects`,`disabled`,`bxTooltip`],[`name`,`x`,`size`,`16`,3,`decorative`],[`bxSurface`,``,`data-bx-surface`,`glass`,1,`bx-time-panel-content`,3,`bxSurfaceInteractive`],[1,`bx-time-panel-body`],[1,`bx-time-editor`],[1,`bx-time-editor-content`],[1,`bx-time-wheels`],[`role`,`listbox`,`tabindex`,`0`,1,`bx-time-list`],[1,`bx-time-feedback`],[1,`bx-picker-shortcuts`],[`appearance`,`outline`,3,`label`,`options`,`value`,`isSearchable`],[`type`,`hour`,3,`valueChange`,`options`,`value`,`label`,`loop`],[`aria-hidden`,`true`,1,`bx-time-wheel-separator`],[`type`,`minute`,3,`valueChange`,`options`,`value`,`label`,`loop`],[`type`,`period`,1,`bx-time-period-wheel`,3,`options`,`value`,`label`,`loop`],[`type`,`second`,3,`valueChange`,`options`,`value`,`label`,`loop`],[`type`,`millisecond`,3,`valueChange`,`options`,`value`,`label`,`loop`],[`type`,`period`,1,`bx-time-period-wheel`,3,`valueChange`,`options`,`value`,`label`,`loop`],[`role`,`listbox`,`tabindex`,`0`,1,`bx-time-list`,3,`keydown`],[`itemRole`,`presentation`,3,`items`,`trackBy`,`config`,`scrollContainer`],[3,`bxVirtualItem`],[`type`,`button`,`role`,`option`,`tabindex`,`-1`,1,`bx-time-list-option`,3,`click`,`id`,`disabled`],[`name`,`check`,`size`,`16`,3,`decorative`],[3,`size`,`label`],[`role`,`status`],[`role`,`alert`,1,`bx-time-feedback-message`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`accent`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`accent`,3,`click`],[`name`,`rotate-cw`,`size`,`16`,3,`decorative`],[`type`,`button`,1,`bx-picker-shortcut`,3,`click`,`disabled`],[`appearance`,`outline`,3,`valueChange`,`label`,`options`,`value`,`isSearchable`]],template:function(e,t){if(e&1&&(jy(Fc),Os$1(0,`bx-form-field`,3)(1,`div`,4),br(`focusin`,function(){return t.onFieldFocus()})(`focusout`,function(a){return t.onFieldBlur(a)}),Os$1(2,`div`,5),bT(3,Wc,3,3,`label`,6),Os$1(4,`input`,7),br(`click`,function(a){return t.onEditableClick(a)})(`input`,function(a){return t.onTypedInput(a)})(`blur`,function(a){return t.onTypedBlur(a)})(`keydown`,function(a){return t.onTypedKeydown(a)}),ba$1(),Os$1(5,`button`,8),br(`click`,function(a){return t.onTriggerClick(a)}),Os$1(6,`bx-visual-transition`,9),Ey(7,Kc,2,1,`ng-template`),ba$1()()(),bT(8,Zc,2,5,`button`,10),ba$1(),Os$1(9,`bx-picker-surface`,11),br(`dismiss`,function(){return t.cancel()}),ba$1(),Ey(10,su,9,10,`ng-template`,null,0,y1),Py(12,0,Bc),Py(13,1,Hc),ba$1()),e&2){let r=CT(11);fa$1(`control`,t.fieldControl)(`inline`,!0)(`tooltip`,t.tooltip())(`showLoadingIndicator`,!1)(`hint`,t.hint())(`hintEnd`,t.hintEnd())(`error`,t.errorText()||t.error())(`subscriptSizing`,t.resolvedSubscriptSizing())(`forId`,t.controlId()),Ul$1(),Lr(`has-clear`,t.showClear()),Ul$1(),Lr(`has-label`,!!t.label())(`is-open`,t.isOpen())(`is-floating`,t.isFloating())(`is-invalid`,t.showError()||!!t.errorText())(`is-outline`,t.resolvedAppearance()===`outline`)(`is-readonly`,t.isReadonly())(`is-disabled`,t.effectiveDisabled())(`is-keyboard-focused`,t.keyboardFocused()),Ul$1(),gT(t.label()?3:-1),Ul$1(),fa$1(`id`,t.controlId())(`value`,t.typedText())(`disabled`,t.effectiveDisabled())(`readOnly`,t.isReadonly()),Ro$1(`aria-controls`,t.isOpen()?t.controlId()+`-panel`:null)(`placeholder`,t.isFloating()||!t.label()?t.resolvedTimePlaceholder():``)(`aria-label`,t.ariaLabel()||t.resolvedLabel()||t.resolvedTimePlaceholder())(`aria-describedby`,t.describedBy())(`aria-expanded`,t.isOpen())(`aria-invalid`,t.showError()||!!t.errorText())(`aria-required`,t.effectiveRequired())(`aria-busy`,t.availabilityLoading())(`data-testid`,t.dataTestId()),Ul$1(),fa$1(`disabled`,t.effectiveDisabled()||t.isReadonly()||t.availabilityLoading()),Ro$1(`aria-label`,t.resolvedOpenPickerLabel()),Ul$1(),fa$1(`value`,t.availabilityLoading()),Ul$1(2),gT(t.showClear()?8:-1),Ul$1(),fa$1(`panelId`,t.controlId()+`-panel`)(`panelWidth`,t.showMilliseconds()?`min(94vw, 30rem)`:`min(94vw, 22rem)`)(`open`,t.isOpen())(`autoFocus`,!1)(`presentation`,t.surfacePresentation())(`origin`,t.panelOrigin())(`content`,r)(`ariaLabel`,t.resolvedLabel()||t.resolvedTimePlaceholder())}},dependencies:[OD,RD,fe,Y,U,Ki,on,In,Vt,Bt,Pt$1,sl$1,jn$1],styles:[`
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
}`]})};export{va as A,Un as C,fe as D,_p as E,yp as F,zn as I,wa as M,wp as N,ka as O,ya as P,Tp as S,Y as T,Pa as _,Ca as a,Sn as b,Eo as c,La as d,Ma as f,Op as g,Np as h,Bn as i,vp as j,kn as k,Ft as l,Na as m,Ae as n,Cp as o,Mp as p,Ba as r,Da as s,$r as t,Hn as u,Pp as v,Vt as w,Sp as x,Sa as y};