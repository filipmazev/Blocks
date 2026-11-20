import{C as Un,H as dt,I as bl$1,J as js$1,N as Zi$1,O as Xe$1,Z as ml$1,a as Bn,b as Pt,i as Be,j as Yi$1,nt as qi,ot as ul$1,p as Hs$1,r as Ao,s as Et,t as $i,tt as on$1,u as Gi,v as Ki,z as ct}from"./chunk-C1xhQ_ri.js";import{$ as Ge,$a as sd$1,$i as ka,$n as Wu$1,$t as Qr$1,A as CN,Aa as pR,Ao as wu$1,Ar as _w,Bi as ik,Bn as VQ,Ca as ni$1,Cn as TR,Co as vo$1,Di as gt$1,Dn as Th,Dt as LQ,En as Te,Eo as wA,Er as _i$1,Et as Ks$1,Fa as pk,Fi as iX,Fo as xa,Fr as ab$1,Gi as ja,Gn as WQ,Go as yt,Gr as bb$1,Hi as ir$1,Hn as Vk,Ht as Nt,I as DA,Ii as iZ,In as Ue,Io as xe,J as Fr$1,Jn as Wk,Jr as bo$1,Jt as Pk,K as FT,Ka as rh$1,Kn as We$1,Ko as zC,Kr as bd,L as DR,La as ps$1,Ln as Uh,Lr as ai$1,M as Ck,Mr as aI,Na as pb$1,Ni as ho$1,Nt as MR,O as CA,Oa as pK,Oi as hA,Ot as Ld$1,Pa as pe,Pi as iJ,Pr as aX,Pt as MT,Q as GQ,Qr as cb$1,R as Dr$1,Ra as q,Ri as ie,Ro as xo$1,Rr as ak,Sa as nd$1,Si as gA,So as vd,T as Br$1,Ta as od$1,Ti as ge,Tn as Ta,Tt as Kn$1,Ua as rJ,Ui as j,Un as Vn,Uo as yo$1,Ut as Nw,V as EA,Vr as b,Wa as rd$1,Wn as WC,X as G,Xa as sX,Xi as kN,Xn as Wo,Xr as bt$1,Xt as QQ,Ya as sN,Yn as Wn,Yr as br$1,Yt as QK,Z as GC,Za as sZ,Zr as cN,Zt as QR,_a as mr$1,_n as Sz,_o as vA,_r as ZC,_t as JT,aa as ld$1,ai as dJ,an as Rr$1,b as BK,ba as nZ,br as Zn$1,bt as Jn$1,ca as li$1,ci as de,cn as S1,cr as YR,dn as SZ,do as ud$1,dr as Yn$1,f as AR,fn as Sd$1,fo as ue,fr as Yr$1,ft as Iz,ga as mk,gi as fR,gt as JQ,h as Ah,ha as mb$1,hi as fK,hn as St,ho as us$1,hr as Yy,in as Re,io as tR,jn as UC,jo as xC,jr as _z,ka as pN,ki as hC,kn as Ts$1,ko as wb$1,kt as Lk,l as AA,li as dg,lo as uJ,lr as Ye$1,mi as er$1,mo as uk,mt as JE,na as lA,nn as RA,no as sr$1,o as $s$1,oa as le,oo as tc$1,ot as Hr$1,p as Ae,pi as ee,pr as Yte,pt as J,q as Fd$1,qa as rr$1,qi as jt,r as $h,ra as lJ,ri as cl$1,rn as RK,ro as st,rr as Xl$1,rt as Gu$1,si as dd$1,sn as Rz,so as tr$1,t as $,ta as ke,ti as ci$1,tr as XK,tt as Go,un as SA,vn as T,vo as vC,vt as Jc$1,wn as TT,wo as vr$1,wr as _R,wt as KR,xi as fr$1,xn as TA,xt as Jo,y as B,ya as nX,yi as fb$1,yt as Jh,za as qK,zi as ig,zn as Uy,zo as yC,zr as al$1}from"./chunk-zTlCv55u.js";import{n as s,t as r}from"./chunk-C9yOwMO6.js";var un=class i{elementRef=b(ke);static ɵfac=function(e){return new(e||i)};static ɵdir=pe({type:i,selectors:[[``,`bxButtonIcon`,``]]})};var Ka={text:0,icon:.45,outlined:.45,tonal:.65,filled:1.1};var Za={primary:1,accent:1,success:1,info:1,warn:1.04,danger:1.1,grayscale:.35};function Xa(i,t,e){return Ka[i===`text`?`text`:t?`outlined`:i===`tonal`?`tonal`:i===`icon`?`icon`:`filled`]*Za[e]}var os=[`contentWrapper`];var as=[[[``,`bxIconStart`,``]],`*`,[[``,`bxIconEnd`,``]]];var rs=[`[bxIconStart]`,`*`,`[bxIconEnd]`];function ss(i,t){if(i&1&&sd$1(0,`bx-loading-spinner`,4),i&2){let e=Wo();xo$1(`size`,e.spinnerSize())(`decorative`,!0)}}var _e=class i{bxA11yService=b(Br$1);projectedIcon=Lk(ZC);iconElement=Lk(ZC,{read:ke});iconContent=Lk(Bn);customIcon=Lk(un);contentWrapper=Sz.required(`contentWrapper`);hasProjectedIcon=G(()=>!!this.iconContent()||!!this.customIcon()||!!this.projectedIcon());spinnerSize=$(20);spinnerLeft=$(null);retainSpinner=$(!1);isAnimated=G(()=>!this.bxA11yService.isReducedMotion());isDisabled=G(()=>this.disabled()||this.loading());variant=ee(`text`);shape=ee(`default`);color=ee(`primary`);outlined=ee(!1);elevated=ee(!1);disabled=ee(!1,{transform:Ye$1});loading=ee(!1,{transform:Ye$1});interactive=ee(!0,{transform:Ye$1});surfaceEffects=ee(!0,{transform:Ye$1});glassiness=ee();presence;presenceElement;constructor(){Yte(()=>({glassiness:this.glassiness(),emissionStrength:Xa(this.variant(),this.outlined(),this.color()),interactive:this.variant()===`text`||!this.interactive()||this.isDisabled()?!1:void 0,emission:this.variant()!==`text`&&this.interactive()&&!this.isDisabled()?this.color()===`primary`||this.color()===`grayscale`?`var(--bx-primary)`:this.color()===`accent`?`var(--bx-accent)`:`var(--bx-text-${this.color()})`:void 0}),()=>this.surfaceEffects()),Vk(t=>{let e=this.iconContent()?.elementRef.nativeElement??this.customIcon()?.elementRef.nativeElement??this.iconElement()?.nativeElement;if(this.projectedIcon()?.size(),this.measureSpinner(e),!e||typeof ResizeObserver>`u`)return;let n=new ResizeObserver(()=>this.measureSpinner(e));n.observe(this.contentWrapper().nativeElement),n.observe(e),t(()=>n.disconnect())}),Vk(()=>{let t=this.iconContent()?.elementRef.nativeElement??this.customIcon()?.elementRef.nativeElement??this.iconElement()?.nativeElement,e=this.loading(),n=this.bxA11yService.isReducedMotion(),o=t!==this.presenceElement;e&&this.retainSpinner.set(!0),o&&(this.presence?.destroy(),this.presenceElement=t,this.presence=t?Th(t,{initiallyVisible:!e}):void 0),this.presence?.update(!e,n||o)}),b(ge).onDestroy(()=>this.presence?.destroy())}releaseSpinner(){this.loading()||this.retainSpinner.set(!1)}onClick(t){this.isDisabled()&&(t.preventDefault(),t.stopImmediatePropagation())}measureSpinner(t){let e=this.contentWrapper().nativeElement,n=e.getBoundingClientRect(),o=t?.getBoundingClientRect(),a=t?`offsetWidth`in t?t.offsetWidth:t.clientWidth:0,r=Number(this.projectedIcon()?.size()),u=Number.parseFloat(getComputedStyle(e).width),m=u>0?n.width/u:1;this.spinnerSize.set(a||(Number.isFinite(r)&&r>0?r:20)),this.spinnerLeft.set(o&&m>0?(o.left+o.width/2-n.left)/m:null)}static ɵfac=function(e){return new(e||i)};static ɵcmp=Fr$1({type:i,selectors:[[`bx-button`],[`button`,`bx-button`,``],[`a`,`bx-button`,``]],contentQueries:function(e,n,o){e&1&&ud$1(o,n.projectedIcon,ZC,5)(o,n.iconElement,ZC,5,ke)(o,n.iconContent,Bn,5)(o,n.customIcon,un,5),e&2&&fb$1(4)},viewQuery:function(e,n){e&1&&Yy(n.contentWrapper,os,5),e&2&&fb$1()},hostVars:16,hostBindings:function(e,n){e&1&&br$1(`click`,function(a){return n.onClick(a)}),e&2&&(vo$1(`disabled`,n.isDisabled()?!0:null)(`aria-disabled`,n.isDisabled())(`aria-busy`,n.loading()?`true`:null)(`tabindex`,n.isDisabled()?`-1`:null),JT(`bx-btn bx-btn-`+n.variant()+` bx-btn-color-`+n.color()),tr$1(`bx-btn-capsule`,n.shape()===`capsule`)(`bx-btn-is-outlined`,n.outlined())(`bx-btn-is-elevated`,n.elevated())(`bx-btn-animated`,n.isAnimated())(`bx-btn-non-interactive`,!n.interactive()))},inputs:{variant:[1,`variant`],shape:[1,`shape`],color:[1,`color`],outlined:[1,`outlined`],elevated:[1,`elevated`],disabled:[1,`disabled`],loading:[1,`loading`],interactive:[1,`interactive`],surfaceEffects:[1,`surfaceEffects`],glassiness:[1,`glassiness`]},ngContentSelectors:rs,decls:9,vars:8,consts:[[`contentWrapper`,``],[1,`bx-btn-content-wrapper`],[`aria-hidden`,`true`,1,`bx-btn-spinner`],[1,`bx-btn-spinner-visual`,3,`presenceHidden`,`bxVisualPresence`],[3,`size`,`decorative`],[1,`bx-btn-label`,3,`bxVisualPresence`,`bxVisualPresenceScale`]],template:function(e,n){e&1&&(ld$1(as),bo$1(0,`span`,1,0)(2,`span`,2)(3,`span`,3),br$1(`presenceHidden`,function(){return n.releaseSpinner()}),od$1(4,ss,1,2,`bx-loading-spinner`,4),Go()(),bo$1(5,`span`,5),dd$1(6),dd$1(7,1),dd$1(8,2),Go()()),e&2&&(tr$1(`has-icon`,n.hasProjectedIcon()),Xl$1(2),ka(`left`,n.spinnerLeft(),`px`),Xl$1(),xo$1(`bxVisualPresence`,n.loading()),Xl$1(),nd$1(n.loading()||n.retainSpinner()?4:-1),Xl$1(),xo$1(`bxVisualPresence`,!n.loading()||n.hasProjectedIcon())(`bxVisualPresenceScale`,1))},dependencies:[Et,Gu$1],styles:[`
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
}`]})};function ls(i,t){i&1&&sd$1(0,`bx-icon`,1)}function ds(i,t){i&1&&sd$1(0,`bx-icon`,2)}var Gt=class i{checked=ee(!1);indeterminate=ee(!1);invalid=ee(!1);disabled=ee(!1);emissive=ee(!1);static ɵfac=function(e){return new(e||i)};static ɵcmp=Fr$1({type:i,selectors:[[`bx-checkbox-indicator`]],hostAttrs:[`aria-hidden`,`true`],hostVars:2,hostBindings:function(e,n){e&2&&tr$1(`is-emissive`,n.emissive())},inputs:{checked:[1,`checked`],indeterminate:[1,`indeterminate`],invalid:[1,`invalid`],disabled:[1,`disabled`],emissive:[1,`emissive`]},decls:3,vars:9,consts:[[`bxSurface`,``,1,`bx-checkbox-box`,3,`bxSurfaceInteractive`,`bxSurfaceEmission`],[`name`,`minus`,`size`,`16`],[`name`,`check`,`size`,`16`]],template:function(e,n){e&1&&(bo$1(0,`span`,0),od$1(1,ls,1,0,`bx-icon`,1)(2,ds,1,0,`bx-icon`,2),Go()),e&2&&(tr$1(`is-checked`,n.checked()||n.indeterminate())(`is-invalid`,n.invalid())(`is-disabled`,n.disabled()),xo$1(`bxSurfaceInteractive`,n.emissive())(`bxSurfaceEmission`,n.invalid()?`var(--bx-text-danger)`:`var(--bx-accent)`),Xl$1(),nd$1(n.indeterminate()?1:n.checked()?2:-1))},dependencies:[GC,ZC],styles:[`
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
}`]})};var cs=[`*`];var pn=class i{static ɵfac=function(e){return new(e||i)};static ɵcmp=Fr$1({type:i,selectors:[[`bx-error`]],hostAttrs:[`aria-live`,`polite`],ngContentSelectors:cs,decls:1,vars:0,template:function(e,n){e&1&&(ld$1(),dd$1(0))},encapsulation:2})};var us=[`*`];var bn=class i{align=ee(`start`);static ɵfac=function(e){return new(e||i)};static ɵcmp=Fr$1({type:i,selectors:[[`bx-hint`]],hostVars:2,hostBindings:function(e,n){e&2&&ka(`margin-inline-start`,n.align()===`end`?`auto`:null)},inputs:{align:[1,`align`]},ngContentSelectors:us,decls:1,vars:0,template:function(e,n){e&1&&(ld$1(),dd$1(0))},encapsulation:2})};var mn=new T(`BX_FORM_FIELD_CONTROL`);var ps=[[[``,`bxPrefix`,``]],`*`,[[``,`bxSuffix`,``]],[[`bx-error`]],[[`bx-hint`]]];var bs=[`[bxPrefix]`,`*`,`[bxSuffix]`,`bx-error`,`bx-hint`];var ms=[`ngProjectAs`,`bx-error`,5,[`bx-error`]];var gs=[`ngProjectAs`,`bx-hint`,5,[`bx-hint`]];function hs(i,t){i&1&&(bo$1(0,`span`,11),lA(1,`*`),Go())}function fs(i,t){if(i&1&&(bo$1(0,`div`,1)(1,`label`,10),lA(2),od$1(3,hs,2,0,`span`,11),Go()()),i&2){let e=Wo();Xl$1(),vo$1(`for`,e.controlId()),Xl$1(),mb$1(``,e.resolvedLabel(),` `),Xl$1(),nd$1(e.isRequired()&&!e.hideRequiredMarker()?3:-1)}}function vs(i,t){i&1&&sd$1(0,`bx-loading-spinner`,3),i&2&&xo$1(`size`,16)(`decorative`,!0)}function xs(i,t){if(i&1&&(bo$1(0,`button`,4),sd$1(1,`bx-icon`,12),Go()),i&2){let e=Wo();xo$1(`bxTooltip`,e.tooltip()),vo$1(`aria-label`,e.resolvedTooltipLabel())}}function ys(i,t){i&1&&sd$1(0,`bx-icon`,14)}function Ss(i,t){if(i&1&&(bo$1(0,`div`,15),lA(1),Go()),i&2){let e=t.$implicit;Xl$1(),ik(e)}}function _s(i,t){if(i&1&&(bo$1(0,`div`,13),od$1(1,ys,1,0,`bx-icon`,14),bo$1(2,`div`),ab$1(3,Ss,2,1,`div`,15,MT),Go()()),i&2){let e=Wo();tr$1(`bx-animated`,e.isAnimated()),Xl$1(),nd$1(e.messages().length?1:-1),Xl$1(2),cb$1(e.messages())}}var ce=class i{i18n=b(VQ,{optional:!0});bxA11yService=b(Br$1);nativeElement=b(ke).nativeElement;bxGlassLightingService=b(WC);generatedId=`bx-field-${qK()}`;projectedControl=Lk(mn);activeControl=G(()=>this.control()??this.projectedControl());controlId=G(()=>this.forId()||this.activeControl()?.controlId()||this.generatedId);resolvedLabel=G(()=>LQ(this.label()??(this.inline()?void 0:this.activeControl()?.label()),this.i18n));resolvedError=G(()=>LQ(this.error(),this.i18n));resolvedHint=G(()=>LQ(this.hint(),this.i18n));resolvedHintEnd=G(()=>LQ(this.hintEnd(),this.i18n));resolvedTooltipLabel=G(()=>LQ(this.tooltipLabel(),this.i18n));showErrors=G(()=>!!this.error()||!!this.projectedError()||this.errors().length>0||(this.activeControl()?.showError()??!1));messages=G(()=>this.resolvedError()?[this.resolvedError()]:this.activeControl()?.errorTexts()??this.errors());isRequired=G(()=>this.required()||this.activeControl()?.required());isLoading=G(()=>this.loading()||this.activeControl()?.pending());hideSubscript=G(()=>this.subscriptSizing()===`dynamic`&&!this.showErrors()&&!this.resolvedHint()&&!this.resolvedHintEnd()&&!this.projectedHint());projectedError=Lk(pn);projectedHint=Lk(bn);isAnimated=G(()=>!this.bxA11yService.isReducedMotion());inline=ee(!1);control=ee(void 0);label=ee(void 0);tooltip=ee(void 0);tooltipLabel=ee(`More information`);error=ee(void 0);errors=ee([]);hint=ee(void 0);hintEnd=ee(void 0);required=ee(!1);hideRequiredMarker=ee(!1);loading=ee(!1);showLoadingIndicator=ee(!0);forId=ee(``);subscriptSizing=ee(`fixed`);constructor(){Vk(t=>{this.activeControl()?.setDescribedByIds?.([`${this.controlId()}-description`]);let e=this.nativeElement.querySelector(`input,textarea,select,button[role="combobox"]`);if(e){let u=new Set((e.getAttribute(`aria-describedby`)??``).split(` `).filter(Boolean));u.add(`${this.controlId()}-description`),e.setAttribute(`aria-describedby`,[...u].join(` `)),e.setAttribute(`aria-invalid`,String(this.showErrors())),e.setAttribute(`aria-required`,String(!!this.isRequired()))}if(!this.showErrors())return;let n=this.nativeElement.parentElement,o=this.nativeElement.closest(`form, fieldset`)??n,a=this.nativeElement.querySelector(`.bx-field-control > [data-bx-surface]`);if(!o||!a)return;let r=this.bxGlassLightingService.register(o,{element:a,edge:`bottom`,offsetX:.5,offsetY:1,z:32,color:`var(--bx-text-danger)`,intensity:.9,radius:240});t(()=>r.destroy())})}static ɵfac=function(e){return new(e||i)};static ɵcmp=Fr$1({type:i,selectors:[[`bx-form-field`]],contentQueries:function(e,n,o){e&1&&ud$1(o,n.projectedControl,mn,5)(o,n.projectedError,pn,5)(o,n.projectedHint,bn,5),e&2&&fb$1(3)},inputs:{inline:[1,`inline`],control:[1,`control`],label:[1,`label`],tooltip:[1,`tooltip`],tooltipLabel:[1,`tooltipLabel`],error:[1,`error`],errors:[1,`errors`],hint:[1,`hint`],hintEnd:[1,`hintEnd`],required:[1,`required`],hideRequiredMarker:[1,`hideRequiredMarker`],loading:[1,`loading`],showLoadingIndicator:[1,`showLoadingIndicator`],forId:[1,`forId`],subscriptSizing:[1,`subscriptSizing`]},ngContentSelectors:bs,decls:18,vars:17,consts:[[1,`bx-field-wrapper`],[1,`bx-field-header`],[1,`bx-field-control`],[3,`size`,`decorative`],[`type`,`button`,`bxTooltipTouch`,`tap`,`placement`,`top`,1,`bx-field-tooltip-trigger`,3,`bxTooltip`],[1,`bx-field-subscript`,3,`hidden`,`id`],[1,`bx-field-error-projected`,3,`hidden`],[`aria-live`,`polite`,1,`bx-field-error`,3,`bx-animated`],[1,`bx-field-hints`,3,`hidden`],[1,`bx-field-hint-end`],[1,`bx-field-label`],[`aria-hidden`,`true`,1,`bx-field-required`],[`name`,`help-circle`,`size`,`16`],[`aria-live`,`polite`,1,`bx-field-error`],[`name`,`alert-circle`,`size`,`16`],[1,`bx-field-error-text`]],template:function(e,n){e&1&&(ld$1(ps),bo$1(0,`div`,0),od$1(1,fs,4,3,`div`,1),bo$1(2,`div`,2),dd$1(3),dd$1(4,1),dd$1(5,2),od$1(6,vs,1,2,`bx-loading-spinner`,3),od$1(7,xs,2,2,`button`,4),Go(),bo$1(8,`div`,5)(9,`div`,6),dd$1(10,3,ms),Go(),od$1(11,_s,5,3,`div`,7),bo$1(12,`div`,8)(13,`span`),lA(14),Go(),dd$1(15,4,gs),bo$1(16,`span`,9),lA(17),Go()()()()),e&2&&(tr$1(`is-invalid`,n.showErrors())(`dynamic-subscript`,n.subscriptSizing()===`dynamic`),vo$1(`data-bx-field-invalid`,n.showErrors()),Xl$1(),nd$1(n.resolvedLabel()?1:-1),Xl$1(),tr$1(`bx-field-control-inline`,n.inline()),Xl$1(4),nd$1(n.showLoadingIndicator()&&n.isLoading()?6:-1),Xl$1(),nd$1(n.tooltip()?7:-1),Xl$1(),xo$1(`hidden`,n.hideSubscript())(`id`,n.controlId()+`-description`),Xl$1(),xo$1(`hidden`,!n.showErrors()),Xl$1(2),nd$1(n.showErrors()&&!n.projectedError()?11:-1),Xl$1(),xo$1(`hidden`,n.showErrors()),Xl$1(2),ik(n.resolvedHint()),Xl$1(3),ik(n.resolvedHintEnd()))},dependencies:[ZC,Pt,Et],styles:[`
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
}`]})};var Ya={errorPolicy:`touched`,errorMode:`first`,errorMessages:{required:`This field is required.`,email:`Enter a valid email address.`,minLength:({params:i})=>`Enter at least ${i.minLength??i.requiredLength} characters.`,maxLength:({params:i})=>`Enter no more than ${i.maxLength??i.requiredLength} characters.`,min:({params:i})=>`Enter a value of at least ${i.min}.`,max:({params:i})=>`Enter a value of no more than ${i.max}.`,pattern:`Enter a value in the required format.`,parse:`Enter a valid value.`,invalid:`Invalid value.`},appearance:`fill`,floatLabel:`auto`,hideRequiredMarker:!1,subscriptSizing:`fixed`,tooltipOnTruncate:!0};var Qa={minlength:`minLength`,maxlength:`maxLength`};function Kt(i,t,e,n){let o=Qa[i.kind]??i.kind,a=`context`in i?i.context:void 0,r$1=a!==null&&typeof a==`object`?r({},a):r({},i),u=t[i.kind]??t[o],m=i.message??(typeof a==`string`?a:typeof r$1.message==`string`?r$1.message:void 0),x=u??m??e[i.kind]??e[o]??e.invalid??`Invalid value.`;return LQ(typeof x==`function`?x({kind:o,error:i,params:r$1}):x,n,r$1)}var Zt=class i{state=$(r({},Ya));settings=this.state.asReadonly();update(t){this.state.update(e=>s(r(r({},e),t),{errorMessages:r(r({},e.errorMessages),t.errorMessages)}))}static ɵfac=function(e){return new(e||i)};static ɵprov=B({token:i,factory:i.ɵfac,providedIn:`root`})};var bt=class i{textAdapter=b(VQ,{optional:!0});formGroupDirective=b(pN,{optional:!0,skipSelf:!0});ngForm=b(cN,{optional:!0,skipSelf:!0});focusMonitor=b(ig);formSettingsService=b(Zt);destroyRef=b(ge);nativeElement=b(ke).nativeElement;ngControl=b(sr$1,{optional:!0,self:!0});generatedId=`bx-field-${qK()}`;submittedByParent=$(!1);extraDescriptions=$([]);localTouched=$(!1);controlVersion=$(0);currentErrors=G(()=>{if(this.controlVersion(),this.errors().length)return this.errors();let t=this.ngControl?.errors;return t?Object.entries(t).map(([e,n])=>({kind:e,context:n})):[]});keyboardFocused=$(!1);isReadonly=G(()=>this.readonly()||this.readOnly());controlId=G(()=>this.id()??this.generatedId);resolvedLabel=G(()=>LQ(this.label(),this.textAdapter));resolvedPlaceholder=G(()=>LQ(this.placeholder(),this.textAdapter));resolvedAppearance=G(()=>this.appearance()??this.formSettingsService.settings().appearance);resolvedFloatLabel=G(()=>this.floatLabel()??this.formSettingsService.settings().floatLabel);resolvedHideRequiredMarker=G(()=>this.hideRequiredMarker()??this.formSettingsService.settings().hideRequiredMarker);resolvedSubscriptSizing=G(()=>this.subscriptSizing()??this.formSettingsService.settings().subscriptSizing);resolvedTooltipOnTruncate=G(()=>this.tooltipOnTruncate()??this.formSettingsService.settings().tooltipOnTruncate??!0);describedBy=G(()=>[...new Set([this.ariaDescribedBy(),`${this.controlId()}-description`,...this.extraDescriptions()].filter(Boolean))].join(` `));effectiveDisabled=G(()=>(this.controlVersion(),this.disabled()||this.ngControl?.disabled===!0));effectiveRequired=G(()=>{this.controlVersion();let t=this.ngControl?.control;return this.required()||!!t?.hasValidator?.(ai$1.required)||!!t?.hasValidator?.(ai$1.requiredTrue)});showError=G(()=>{this.controlVersion();let t={invalid:this.invalid()||this.currentErrors().length>0||!!this.error(),touched:this.ngControl?.touched??(this.touched()||this.localTouched()),dirty:this.ngControl?.dirty??this.dirty(),submitted:this.submitted()||this.submittedByParent(),disabled:this.effectiveDisabled(),pending:this.pending()},e=this.errorPolicy()??this.formSettingsService.settings().errorPolicy;return t.disabled||!t.invalid?!1:typeof e==`function`?e(t):e===`always`||t.submitted||(e===`dirty`?t.dirty:e===`touched`?t.touched:!1)});errorTexts=G(()=>{if(!this.showError())return[];if(this.error())return[LQ(this.error(),this.textAdapter)];let t=this.errorPriority(),e=[...this.currentErrors()].sort((o,a)=>{let r=t.indexOf(o.kind),u=t.indexOf(a.kind);return(r<0?t.length:r)-(u<0?t.length:u)});return((this.errorMode()??this.formSettingsService.settings().errorMode)===`all`?e:e.slice(0,1)).map(o=>Kt(o,this.errorMessages(),this.formSettingsService.settings().errorMessages,this.textAdapter))});fieldControl;id=ee(void 0);label=ee(void 0);placeholder=ee(void 0);tooltip=ee(void 0);hint=ee(void 0);hintEnd=ee(void 0);error=ee(void 0);ariaLabel=ee(void 0);ariaLabelledBy=ee(void 0);ariaDescribedBy=ee(void 0);dataTestId=ee(void 0);name=ee(``);errors=ee([]);invalid=ee(!1);pending=ee(!1);touched=ee(!1);dirty=ee(!1);disabled=ee(!1,{transform:Ye$1});readonly=ee(!1,{transform:Ye$1});readOnly=ee(!1,{transform:Ye$1});hidden=ee(!1,{transform:Ye$1});required=ee(!1,{transform:Ye$1});loading=ee(!1,{transform:Ye$1});disabledReasons=ee([]);submitted=ee(!1);errorMessages=ee({});errorPriority=ee([]);errorPolicy=ee(void 0);errorMode=ee(void 0);appearance=ee(void 0);floatLabel=ee(void 0);hideRequiredMarker=ee(void 0);subscriptSizing=ee(void 0);tooltipOnTruncate=ee(void 0);touch=Pk();constructor(){this.fieldControl={controlId:this.controlId,label:this.label,showError:this.showError,errorTexts:this.errorTexts,required:this.effectiveRequired,disabled:this.effectiveDisabled,pending:this.pending,focus:e=>this.focus(e),setDescribedByIds:e=>{this.extraDescriptions().join(` `)!==e.join(` `)&&this.extraDescriptions.set(e)}},er$1(()=>{this.focusMonitor.monitor(this.nativeElement,!0).pipe(Sd$1(this.destroyRef)).subscribe(o=>this.keyboardFocused.set(o===`keyboard`)),this.destroyRef.onDestroy(()=>this.focusMonitor.stopMonitoring(this.nativeElement));let e=this.nativeElement.closest(`form`),n=()=>{this.submittedByParent.set(!0),this.commitPendingValue()};e?.addEventListener(`submit`,n,{capture:!0}),this.destroyRef.onDestroy(()=>e?.removeEventListener(`submit`,n,{capture:!0}))}),(this.formGroupDirective??this.ngForm)?.ngSubmit.pipe(Sd$1(b(ge))).subscribe(()=>{this.submittedByParent.set(!0),this.commitPendingValue()})}ngOnInit(){this.ngControl?.control?.events?.pipe(Sd$1(this.destroyRef)).subscribe(()=>{this.controlVersion.update(e=>e+1)}),this.ngControl?.control?.valueChanges?.pipe(Sd$1(this.destroyRef)).subscribe(()=>this.clearPendingEdit()),(this.formGroupDirective??this.ngForm)?.form.events.pipe(Sd$1(this.destroyRef)).subscribe(e=>{e instanceof ci$1&&this.reset()})}focus(t){this.nativeElement.querySelector(`input:not(:disabled), textarea:not(:disabled), select:not(:disabled), button:not(:disabled)`)?.focus(t)}reset(){this.localTouched.set(!1),this.submittedByParent.set(!1)}markAsTouched(){this.localTouched.set(!0),this.commitPendingValue(`blur`),this.touch.emit()}onControlPointerDown(){this.isReadonly()&&this.keyboardFocused.set(!1)}commitPendingValue(t){}clearPendingEdit(){}static ɵfac=function(e){return new(e||i)};static ɵdir=pe({type:i,hostVars:7,hostBindings:function(e,n){e&1&&br$1(`pointerdown`,function(){return n.onControlPointerDown()}),e&2&&(Uy(`hidden`,n.hidden()),ka(`display`,n.hidden()?`none`:null),tr$1(`bx-readonly`,n.isReadonly())(`is-keyboard-focused`,n.keyboardFocused()))},inputs:{id:[1,`id`],label:[1,`label`],placeholder:[1,`placeholder`],tooltip:[1,`tooltip`],hint:[1,`hint`],hintEnd:[1,`hintEnd`],error:[1,`error`],ariaLabel:[1,`ariaLabel`],ariaLabelledBy:[1,`ariaLabelledBy`],ariaDescribedBy:[1,`ariaDescribedBy`],dataTestId:[1,`dataTestId`],name:[1,`name`],errors:[1,`errors`],invalid:[1,`invalid`],pending:[1,`pending`],touched:[1,`touched`],dirty:[1,`dirty`],disabled:[1,`disabled`],readonly:[1,`readonly`],readOnly:[1,`readOnly`],hidden:[1,`hidden`],required:[1,`required`],loading:[1,`loading`],disabledReasons:[1,`disabledReasons`],submitted:[1,`submitted`],errorMessages:[1,`errorMessages`],errorPriority:[1,`errorPriority`],errorPolicy:[1,`errorPolicy`],errorMode:[1,`errorMode`],appearance:[1,`appearance`],floatLabel:[1,`floatLabel`],hideRequiredMarker:[1,`hideRequiredMarker`],subscriptSizing:[1,`subscriptSizing`],tooltipOnTruncate:[1,`tooltipOnTruncate`]},outputs:{touch:`touch`}})};var Xt=class i extends bt{draft=$(void 0);displayedChecked=G(()=>this.draft()??this.checked());checked=_z(!1);labelPosition=ee(`after`);reset(){super.reset(),this.draft.set(void 0)}clearPendingEdit(){this.draft.set(void 0)}commitPendingValue(t){let e=this.draft();e===void 0||t===`blur`&&this.ngControl?.control?.updateOn===`submit`||(this.checked.set(e),this.draft.set(void 0))}onToggle(t){let e=t.target;if(this.disabled()||this.isReadonly()){e.checked=this.checked();return}let n=this.ngControl?.control?.updateOn;n===`blur`||n===`submit`?this.draft.set(e.checked):this.checked.set(e.checked)}onReadonlyClick(t){this.isReadonly()&&t.preventDefault()}onBlur(){this.markAsTouched()}static ɵfac=(()=>{let t;return function(n){return(t||(t=ho$1(i)))(n||i)}})();static ɵdir=pe({type:i,inputs:{checked:[1,`checked`],labelPosition:[1,`labelPosition`]},outputs:{checked:`checkedChange`},features:[yt]})};var Cs=[`*`,[[`bx-error`]],[[`bx-hint`]]];var Ms=[`*`,`bx-error`,`bx-hint`];var ws=[`ngProjectAs`,`bx-error`,5,[`bx-error`]];var Ns=[`ngProjectAs`,`bx-hint`,5,[`bx-hint`]];function Ts(i,t){i&1&&(bo$1(0,`span`,5),lA(1,`*`),Go())}var Ja=class i extends Xt{indeterminate=_z(!1);clickAction=ee(`check-indeterminate`);emissive=ee(!0);onToggle(t){if(this.clickAction()===`noop`){t.target.checked=this.displayedChecked(),t.target.indeterminate=this.indeterminate();return}super.onToggle(t),this.clickAction()===`check`&&(t.target.indeterminate=this.indeterminate()),!this.disabled()&&!this.isReadonly()&&this.clickAction()===`check-indeterminate`&&this.indeterminate.set(!1)}static ɵfac=(()=>{let t;return function(n){return(t||(t=ho$1(i)))(n||i)}})();static ɵcmp=Fr$1({type:i,selectors:[[`bx-checkbox`]],inputs:{indeterminate:[1,`indeterminate`],clickAction:[1,`clickAction`],emissive:[1,`emissive`]},outputs:{indeterminate:`indeterminateChange`},features:[yt],ngContentSelectors:Ms,decls:10,vars:35,consts:[[3,`control`,`inline`,`tooltip`,`loading`,`hint`,`hintEnd`,`subscriptSizing`,`forId`],[1,`bx-inline-wrapper`],[`type`,`checkbox`,1,`bx-visually-hidden`,3,`click`,`change`,`blur`,`id`,`disabled`,`required`,`checked`,`indeterminate`],[3,`checked`,`indeterminate`,`invalid`,`disabled`,`emissive`],[1,`bx-inline-label`],[`aria-hidden`,`true`,1,`bx-inline-required`]],template:function(e,n){e&1&&(ld$1(Cs),bo$1(0,`bx-form-field`,0)(1,`label`,1)(2,`input`,2),br$1(`click`,function(a){return n.onReadonlyClick(a)})(`change`,function(a){return n.onToggle(a)})(`blur`,function(){return n.onBlur()}),Go(),sd$1(3,`bx-checkbox-indicator`,3),bo$1(4,`span`,4),dd$1(5),lA(6),od$1(7,Ts,2,0,`span`,5),Go()(),dd$1(8,1,ws),dd$1(9,2,Ns),Go()),e&2&&(xo$1(`control`,n.fieldControl)(`inline`,!0)(`tooltip`,n.tooltip())(`loading`,n.loading())(`hint`,n.hint())(`hintEnd`,n.hintEnd())(`subscriptSizing`,n.resolvedSubscriptSizing())(`forId`,n.controlId()),Xl$1(),tr$1(`is-disabled`,n.disabled())(`is-readonly`,n.isReadonly())(`is-keyboard-focused`,n.keyboardFocused())(`label-before`,n.labelPosition()===`before`),Xl$1(),xo$1(`id`,n.controlId())(`disabled`,n.disabled())(`required`,n.effectiveRequired())(`checked`,n.displayedChecked())(`indeterminate`,n.indeterminate()),vo$1(`name`,n.name()||null)(`data-testid`,n.dataTestId())(`aria-label`,n.ariaLabel())(`aria-labelledby`,n.ariaLabelledBy())(`aria-describedby`,n.describedBy())(`aria-invalid`,n.showError())(`aria-readonly`,n.isReadonly()),Xl$1(),xo$1(`checked`,n.displayedChecked())(`indeterminate`,n.indeterminate())(`invalid`,n.showError())(`disabled`,n.disabled())(`emissive`,n.emissive()),Xl$1(3),mb$1(``,n.resolvedLabel(),` `),Xl$1(),nd$1(n.effectiveRequired()&&!n.resolvedHideRequiredMarker()?7:-1))},dependencies:[ce,Gt],styles:[`
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
}`]})};var or=Symbol(`FIELD_TREE`);var Zi=0;function Ps(){return Zi}function mt(i,t){return(...e)=>{try{return Zi=t,i(...e)}finally{Zi=0}}}function Os(i){return!i}function er(i){return i}function Ze(i){return Array.isArray(i)}function Zn(i){return(typeof i==`object`||typeof i==`function`)&&i!=null}var Mt=Symbol();var ii=Symbol();var hn=class{predicates;fns=[];constructor(t){this.predicates=t}push(t){this.fns.push(tr(this.predicates,t))}mergeIn(t){let e=this.predicates?t.fns.map(n=>tr(this.predicates,n)):t.fns;this.fns.push(...e)}hasRules(){return this.fns.length>0}};var Xn=class extends hn{get defaultValue(){return!1}compute(t){return this.fns.some(e=>{let n=e(t);return n&&n!==ii})}};var Qt=class i extends hn{ignore;static ignoreNull(t){return new i(t,e=>e===null)}constructor(t,e){super(t),this.ignore=e}get defaultValue(){return[]}compute(t){return this.fns.reduce((e,n)=>{let o=n(t);return o===void 0||o===ii?e:Ze(o)?[...e,...this.ignore?o.filter(a=>!this.ignore(a)):o]:this.ignore&&this.ignore(o)?e:[...e,o]},[])}};var Xi=class extends Qt{constructor(t){super(t,void 0)}};var Yi=class extends hn{key;get defaultValue(){return this.key.reducer.getInitial()}constructor(t,e){super(t),this.key=e}compute(t){if(this.fns.length===0)return this.key.reducer.getInitial();let e=this.key.reducer.getInitial();for(let n=0;n<this.fns.length;n++){let o=this.fns[n](t);o!==ii&&(e=this.key.reducer.reduce(e,o))}return e}};function tr(i,t){return i.length===0?t:e=>{for(let n of i){let o=e.stateOf(n.path),a=de(o.structure.pathKeys).length-n.depth;for(let r=0;r<a;r++)o=o.structure.parent;if(!n.fn(o.context))return ii}return t(e)}}var Jt=class{predicates;hidden;disabledReasons;readonly;syncErrors;syncTreeErrors;asyncErrors;metadata=/* @__PURE__ */ new Map;constructor(t){this.predicates=t,this.hidden=new Xn(t),this.disabledReasons=new Xi(t),this.readonly=new Xn(t),this.syncErrors=Qt.ignoreNull(t),this.syncTreeErrors=Qt.ignoreNull(t),this.asyncErrors=Qt.ignoreNull(t)}hasAnyLogic(){return this.hidden.hasRules()||this.disabledReasons.hasRules()||this.readonly.hasRules()||this.syncErrors.hasRules()||this.syncTreeErrors.hasRules()||this.asyncErrors.hasRules()||this.metadata.size>0}hasMetadata(t){return this.metadata.has(t)}hasMetadataKeys(){return this.metadata.size>0}getMetadataKeys(){return this.metadata.keys()}getMetadata(t){return this.metadata.has(t)||this.metadata.set(t,new Yi(this.predicates,t)),this.metadata.get(t)}mergeIn(t){this.hidden.mergeIn(t.hidden),this.disabledReasons.mergeIn(t.disabledReasons),this.readonly.mergeIn(t.readonly),this.syncErrors.mergeIn(t.syncErrors),this.syncTreeErrors.mergeIn(t.syncTreeErrors),this.asyncErrors.mergeIn(t.asyncErrors);for(let e of t.getMetadataKeys()){let n=t.metadata.get(e);this.getMetadata(e).mergeIn(n)}}};var Yn=class{depth;constructor(t){this.depth=t}build(){return new Qn(this,[],0)}};var en=class i extends Yn{constructor(t){super(t)}current;all=[];addHiddenRule(t){this.getCurrent().addHiddenRule(t)}addDisabledReasonRule(t){this.getCurrent().addDisabledReasonRule(t)}addReadonlyRule(t){this.getCurrent().addReadonlyRule(t)}addSyncErrorRule(t){this.getCurrent().addSyncErrorRule(t)}addSyncTreeErrorRule(t){this.getCurrent().addSyncTreeErrorRule(t)}addAsyncErrorRule(t){this.getCurrent().addAsyncErrorRule(t)}addMetadataRule(t,e){this.getCurrent().addMetadataRule(t,e)}getChild(t){if(t===Mt){let e=this.getCurrent().children;e.size>(e.has(Mt)?1:0)&&(this.current=void 0)}return this.getCurrent().getChild(t)}hasLogic(t){return this===t?!0:this.all.some(({builder:e})=>e.hasLogic(t))}hasRules(){return this.all.length>0}anyChildHasLogic(){return this.all.some(({builder:t})=>t.anyChildHasLogic())}mergeIn(t,e){e?this.all.push({builder:t,predicate:{fn:mt(e.fn,this.depth),path:e.path}}):this.all.push({builder:t}),this.current=void 0}getCurrent(){return this.current===void 0&&(this.current=new fn(this.depth),this.all.push({builder:this.current})),this.current}static newRoot(){return new i(0)}};var fn=class extends Yn{logic=new Jt([]);children=/* @__PURE__ */ new Map;constructor(t){super(t)}addHiddenRule(t){this.logic.hidden.push(mt(t,this.depth))}addDisabledReasonRule(t){this.logic.disabledReasons.push(mt(t,this.depth))}addReadonlyRule(t){this.logic.readonly.push(mt(t,this.depth))}addSyncErrorRule(t){this.logic.syncErrors.push(mt(t,this.depth))}addSyncTreeErrorRule(t){this.logic.syncTreeErrors.push(mt(t,this.depth))}addAsyncErrorRule(t){this.logic.asyncErrors.push(mt(t,this.depth))}addMetadataRule(t,e){this.logic.getMetadata(t).push(mt(e,this.depth))}getChild(t){return this.children.has(t)||this.children.set(t,new en(this.depth+1)),this.children.get(t)}hasLogic(t){return this===t}hasRules(){return this.logic.hasAnyLogic()||this.children.size>0}anyChildHasLogic(){for(let t of this.children.values())if(t.hasRules())return!0;return!1}};var Qn=class i{builder;predicates;depth;logic;constructor(t,e,n){this.builder=t,this.predicates=e,this.depth=n,this.logic=t?Is(t,e,n):new Jt([])}getChild(t){let e=this.builder?ar(this.builder,t):[];if(e.length===0)return new i(void 0,[],this.depth+1);if(e.length===1){let{builder:n,predicates:o}=e[0];return new i(n,[...this.predicates,...o.map(a=>Ji(a,this.depth))],this.depth+1)}else return new Qi(e.map(({builder:o,predicates:a})=>new i(o,[...this.predicates,...a.map(r=>Ji(r,this.depth))],this.depth+1)))}hasLogic(t){return this.builder?this.builder.hasLogic(t):!1}hasRules(){return this.builder?this.builder.hasRules():!1}anyChildHasLogic(){return this.builder?this.builder.anyChildHasLogic():!1}};var Qi=class i{all;logic;constructor(t){this.all=t,this.logic=new Jt([]);for(let e of t)this.logic.mergeIn(e.logic)}getChild(t){return new i(this.all.flatMap(e=>e.getChild(t)))}hasLogic(t){return this.all.some(e=>e.hasLogic(t))}hasRules(){return this.all.some(t=>t.hasRules())}anyChildHasLogic(){return this.all.some(t=>t.anyChildHasLogic())}};function ar(i,t){if(i instanceof en)return i.all.flatMap(({builder:e,predicate:n})=>{let o=ar(e,t);return n?o.map(({builder:a,predicates:r})=>({builder:a,predicates:[...r,n]})):o});if(i instanceof fn)return[...t!==Mt&&i.children.has(Mt)?[{builder:i.getChild(Mt),predicates:[]}]:[],...i.children.has(t)?[{builder:i.getChild(t),predicates:[]}]:[]];throw new j(1909,!1)}function Is(i,t,e){let n=new Jt(t);if(i instanceof en){let o=i.all.map(({builder:a,predicate:r})=>new Qn(a,r?[...t,Ji(r,e)]:t,e));for(let a of o)n.mergeIn(a.logic)}else if(i instanceof fn)n.mergeIn(i.logic);else throw new j(1909,!1);return n}function Ji(i,t){return s(r({},i),{depth:t})}var rr=Symbol(`PATH`);var Ve=class i{keys;parent;keyInParent;root;children=/* @__PURE__ */ new Map;fieldPathProxy=new Proxy(this,Ds);logicBuilder;constructor(t,e,n,o){this.keys=t,this.parent=n,this.keyInParent=o,this.root=e??this,n||(this.logicBuilder=en.newRoot())}get builder(){return this.logicBuilder?this.logicBuilder:this.parent.builder.getChild(this.keyInParent)}getChild(t){return this.children.has(t)||this.children.set(t,new i([...this.keys,t],this.root,this,t)),this.children.get(t)}mergeIn(t,e){let n=t.compile();this.builder.mergeIn(n.builder,e)}static unwrapFieldPath(t){return t[rr]}static newRoot(){return new i([],void 0,void 0,void 0)}};var Ds={get(i,t){return t===rr?i:i.getChild(t).fieldPathProxy}};var Kn;var gn=/* @__PURE__ */ new Map;var Jn=class i{schemaFn;constructor(t){this.schemaFn=t}compile(){if(gn.has(this))return gn.get(this);let t=Ve.newRoot();gn.set(this,t);let e=Kn;try{Kn=t,this.schemaFn(t.fieldPathProxy)}finally{Kn=e}return t}static create(t){return t instanceof i?t:new i(t)}static rootCompile(t){try{return gn.clear(),t===void 0?Ve.newRoot():t instanceof i?t.compile():new i(t).compile()}finally{gn.clear()}}};function ks(i){return i instanceof Jn||typeof i==`function`}function wt(i){if(Kn!==Ve.unwrapFieldPath(i).root)throw new j(1908,!1)}function We(i,t,e){return wt(i),Ve.unwrapFieldPath(i).builder.addMetadataRule(t,e),t}var ot={list(){return{reduce:(i,t)=>t===void 0?i:[...i,t],getInitial:()=>[]}},min(){return{reduce:(i,t)=>i===void 0||t===void 0?i??t:t<i?t:i,getInitial:()=>{}}},max(){return{reduce:(i,t)=>i===void 0||t===void 0?i??t:t>i?t:i,getInitial:()=>{}}},or(){return{reduce:(i,t)=>i||t,getInitial:()=>!1}},and(){return{reduce:(i,t)=>i&&t,getInitial:()=>!0}},override:Es};function Es(i){return{reduce:(t,e)=>e,getInitial:()=>i?.()}}var oi=Symbol(`IS_ASYNC_VALIDATION_RESOURCE`);var vn=class{reducer;create;brand;[oi];constructor(t,e){this.reducer=t,this.create=e}};function ze(i){return new vn(i??ot.override())}function sr(i,t){return new vn(t??ot.override(),i)}function co(){return ze()}var uo=ze(ot.or());var po=co();var bo=ze(ot.max());var mo=co();var go=ze(ot.min());var ho=ze(ot.max());var lr=ze(ot.min());var dr=ze(ot.list());function Fe(i,t){if(i===t)return!0;if(!i||!t||i.length!==t.length)return!1;for(let e=0;e<i.length;e++)if(!Object.is(i[e],t[e]))return!1;return!0}function Rs(i){return i.errors().length>0?`invalid`:i.pending()?`unknown`:`valid`}var eo=class{node;constructor(t){this.node=t}rawSyncTreeErrors=G(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.syncTreeErrors.compute(this.node.context),...this.node.structure.parent?.validationState.rawSyncTreeErrors()??[]],{equal:Fe});syncErrors=G(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.syncErrors.compute(this.node.context),...this.syncTreeErrors(),...Ls(this.node.submitState.submissionErrors())],{equal:Fe});syncValid=G(()=>this.shouldSkipValidation()?!0:this.node.structure.reduceChildren(this.syncErrors().length===0,(t,e)=>e&&t.validationState.syncValid(),Os));syncTreeErrors=G(()=>this.rawSyncTreeErrors().filter(t=>t.fieldTree===this.node.fieldTree),{equal:Fe});rawAsyncErrors=G(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.asyncErrors.compute(this.node.context),...this.node.structure.parent?.validationState.rawAsyncErrors()??[]],{equal:Fe});asyncErrors=G(()=>this.shouldSkipValidation()?[]:this.rawAsyncErrors().filter(t=>t===`pending`||t.fieldTree===this.node.fieldTree),{equal:Fe});parseErrors=G(()=>this.node.formFieldBindings().flatMap(t=>t.parseErrors()),{equal:Fe});errors=G(()=>[...this.parseErrors(),...this.syncErrors(),...this.asyncErrors().filter(t=>t!==`pending`)],{equal:Fe});errorSummary=G(()=>{let t=this.node.structure.reduceChildren(this.errors(),(e,n)=>[...n,...e.errorSummary()]);return de(()=>t.sort(As)),t},{equal:Fe});pending=G(()=>this.node.structure.reduceChildren(this.asyncErrors().includes(`pending`),(t,e)=>e||t.validationState.pending()));status=G(()=>{if(this.shouldSkipValidation())return`valid`;let t=Rs(this);return this.node.structure.reduceChildren(t,(e,n)=>n===`invalid`||e.validationState.status()===`invalid`?`invalid`:n===`unknown`||e.validationState.status()===`unknown`?`unknown`:`valid`,e=>e===`invalid`)});valid=G(()=>this.status()===`valid`);invalid=G(()=>this.status()===`invalid`);shouldSkipValidation=G(()=>this.node.hidden()||this.node.disabled()||this.node.readonly()||this.node.structure.isOrphaned())};function Ls(i){return i===void 0?[]:Ze(i)?i:[i]}function yn(i,t){if(Ze(i))for(let e of i)e.fieldTree??=t;else i&&(i.fieldTree??=t);return i}function nr(i){return i.formField?i.formField.element:i.fieldTree().formFieldBindings().reduce((t,e)=>!t||!e.element?t??e.element:t.compareDocumentPosition(e.element)&Node.DOCUMENT_POSITION_PRECEDING?e.element:t,void 0)}function As(i,t){let e=nr(i),n=nr(t);return e===n?0:e===void 0||n===void 0?e===void 0?1:-1:e.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_PRECEDING?1:-1}var ei=ze();var to=class{node;cache=/* @__PURE__ */ new WeakMap;constructor(t){this.node=t,this.fieldTreeOf=this.fieldTreeOf.bind(this),this.stateOf=this.stateOf.bind(this)}resolve(t){if(!this.cache.has(t)){let e=G(()=>{let n=Ve.unwrapFieldPath(t),o=this.node,a=Ps();for(;a>0||!o.structure.logic.hasLogic(n.root.builder);)if(a--,o=o.structure.parent,o===void 0)throw new j(1900,!1);for(let r of n.keys)if(o=o.structure.getChild(r),o===void 0)throw new j(1901,!1);return o.fieldTree});this.cache.set(t,e)}return this.cache.get(t)()}get fieldTree(){return this.node.fieldProxy}get state(){return this.node}get value(){return this.node.structure.value}get key(){return this.node.structure.keyInParent}get pathKeys(){return this.node.structure.pathKeys}index=G(()=>{let t=this.key();if(!Ze(de(this.node.structure.parent.value)))throw new j(1906,!1);return Number(t)});fieldTreeOf(t){return this.resolve(t)}stateOf(t){return this.resolve(t)()}valueOf=t=>{let e=this.resolve(t)().value();if(e instanceof wu$1)throw new j(1907,!1);return e}};var no=class{node;metadata=/* @__PURE__ */ new Map;constructor(t){this.node=t}runMetadataCreateLifecycle(){if(!this.node.logicNode.logic.hasMetadataKeys())return;let t=wb$1();t&&yo$1(!1);try{de(()=>Jc$1(this.node.structure.injector,()=>{for(let e of this.node.logicNode.logic.getMetadataKeys())if(e.create){let n=this.node.logicNode.logic.getMetadata(e),o=e.create(this.node,G(()=>n.compute(this.node.context)));this.metadata.set(e,o)}}))}finally{t&&yo$1(!0)}}get(t){if(this.has(t)&&!this.metadata.has(t)){if(t.create)throw new j(1912,!1);let e=this.node.logicNode.logic.getMetadata(t);this.metadata.set(t,G(()=>e.compute(this.node.context)))}return this.metadata.get(t)}has(t){return this.node.logicNode.logic.hasMetadata(t)}};var Fs={get(i,t,e){if(t===or)return!0;let n=i(),o=n.structure.getChild(t);if(o!==void 0)return o.fieldTree;let a=de(n.value);if(Ze(a)){if(t===`length`)return n.value().length;if(t===Symbol.iterator)return()=>(n.value(),Array.prototype[Symbol.iterator].apply(n.fieldTree))}if(Zn(a)&&t===Symbol.iterator)return function*(){for(let r in e)yield[r,e[r]]}},getOwnPropertyDescriptor(i,t){let e=de(i().value),n=Reflect.getOwnPropertyDescriptor(e,t);return n&&!n.configurable&&(n.configurable=!0),n},ownKeys(i){let t=de(i().value);return typeof t==`object`&&t!==null?Reflect.ownKeys(t):[]}};function Vs(i,t){let e=G(()=>i()[t()]);return e[Ue]=i[Ue],e.set=n=>{Object.is(de(e),n)||i.update(o=>zs(o,n,t()))},e.update=n=>{e.set(n(de(e)))},e.asReadonly=()=>e,e}function zs(i,t,e){if(Ze(i)){let n=[...i];return n[e]=t,n}else return s(r({},i),{[e]:t})}var Yt=Symbol(``);var cr=G(()=>!1);var ti=class{logic;node;createChildNode;identitySymbol=Symbol();_injector=void 0;_anyChildHasLogic;get injector(){return this._injector??=ie.create({providers:[],parent:this.fieldManager.injector}),this._injector}constructor(t,e,n){this.logic=t,this.node=e,this.createChildNode=n}children(){this.ensureChildrenMap();let t=this.childrenMap();return t===void 0?[]:Array.from(t.byPropertyKey.values()).map(e=>de(e.reader))}materializedChildren(){let t=this.childrenMap();return t===void 0?[]:Array.from(t.byPropertyKey.values()).map(e=>e.node)}_areChildrenMaterialized(){return de(this.childrenMap)!==void 0}ensureChildrenMap(){this._areChildrenMaterialized()||de(()=>{this.childrenMap.update(t=>this.computeChildrenMap(this.value(),t,!0))})}getChild(t){this.ensureChildrenMap();let e=t.toString(),n=de(this.childrenMap)?.byPropertyKey.get(e)?.reader;return n||(n=this.createReader(e)),n()}reduceChildren(t,e,n){let o=this.childrenMap();if(!o)return t;let a=t;for(let r of o.byPropertyKey.values()){if(n?.(a))break;a=e(de(r.reader),a)}return a}destroy(){this.injector.destroy()}createKeyOrOrphanSignals(t,e,n){if(t===`root`)return{keyInParent:ur,isOrphaned:cr};let o=this.parent,a=n,r=G(()=>{if(o.structure.isOrphaned())return Yt;let x=o.structure.childrenMap();if(!x)return Yt;let P=x.byPropertyKey.get(a);if(P&&P.node===this.node)return a;if(e===void 0)return Yt;for(let[D,L]of x.byPropertyKey)if(L.node===this.node)return a=D;return Yt}),u=G(()=>r()===Yt);return{keyInParent:G(()=>{let x=r();if(x===Yt)throw e===void 0?new j(-1902,!1):new j(1904,!1);return x}),isOrphaned:u}}createChildrenMap(){return bd({source:this.value,computation:(t,e)=>this.computeChildrenMap(t,e?.value,!1)})}computeChildrenMap(t,e,n){if(!Zn(t)||!n&&e===void 0&&!(this._anyChildHasLogic??=this.logic.anyChildHasLogic()))return;e??={byPropertyKey:/* @__PURE__ */ new Map};let o,a=Ze(t);e!==void 0&&(a?o=Hs(e,t,this.identitySymbol):o=Ws(e,t));for(let r$2 of Object.keys(t)){let u,m=t[r$2];if(m===void 0){e.byPropertyKey.has(r$2)&&(o??=r({},e),o.byPropertyKey.delete(r$2));continue}a&&Zn(m)&&!Ze(m)&&(u=m[this.identitySymbol]??=Symbol(``));let x;u&&(e.byTrackingKey?.has(u)||(o??=r({},e),o.byTrackingKey??=/* @__PURE__ */ new Map,o.byTrackingKey.set(u,this.createChildNode(r$2,u,a))),x=(o??e).byTrackingKey.get(u));let P=e.byPropertyKey.get(r$2);P===void 0?(o??=r({},e),o.byPropertyKey.set(r$2,{reader:this.createReader(r$2),node:x??this.createChildNode(r$2,u,a)})):x&&x!==P.node&&(o??=r({},e),P.node=x)}return o??e}createReader(t){return G(()=>this.childrenMap()?.byPropertyKey.get(t)?.node)}};var io=class extends ti{fieldManager;value;get parent(){}get root(){return this.node}get pathKeys(){return Bs}get keyInParent(){return ur}isOrphaned=cr;childrenMap;constructor(t,e,n,o,a){super(e,t,a),this.fieldManager=n,this.value=o,this.childrenMap=this.createChildrenMap()}};var oo=class extends ti{logic;parent;root;pathKeys;keyInParent;value;childrenMap;isOrphaned;get fieldManager(){return this.root.structure.fieldManager}constructor(t,e,n,o,a,r){super(e,t,r),this.logic=e,this.parent=n,this.root=this.parent.structure.root;let u=this.createKeyOrOrphanSignals(`child`,o,a);this.isOrphaned=u.isOrphaned,this.keyInParent=u.keyInParent,this.pathKeys=G(()=>[...n.structure.pathKeys(),this.keyInParent()]),this.value=Vs(this.parent.structure.value,this.keyInParent),this.childrenMap=this.createChildrenMap(),this.fieldManager.structures.add(this)}};var Bs=G(()=>[]);var ur=G(()=>{throw new j(1905,!1)});function Hs(i,t,e){let n,o=new Set(i.byPropertyKey.keys()),a=i.byTrackingKey&&new Set(i.byTrackingKey.keys());for(let r=0;r<t.length;r++){let u=t[r];o.delete(r.toString()),a&&Zn(u)&&Object.hasOwn(u,e)&&a.delete(u[e])}if(o.size>0){n??=r({},i);for(let r of o)n.byPropertyKey.delete(r)}if(a&&a.size>0){n??=r({},i);for(let r of a)n.byTrackingKey.delete(r)}return n}function Ws(i,t){let e;for(let n of i.byPropertyKey.keys())Object.hasOwn(t,n)||(e??=r({},i),e.byPropertyKey.delete(n));return e}var ao=class{node;selfSubmitting=$(!1);submissionErrors;constructor(t){this.node=t,this.submissionErrors=bd({source:this.node.structure.value,computation:()=>[]})}submitting=G(()=>this.selfSubmitting()||(this.node.structure.parent?.submitting()??!1))};var xn=class{structure;validationState;metadataState;nodeState;submitState;fieldAdapter;controlValue;_context=void 0;get context(){return this._context??=new to(this)}fieldProxy=new Proxy(()=>this,Fs);pathNode;constructor(t){this.pathNode=t.pathNode,this.fieldAdapter=t.fieldAdapter,this.structure=this.fieldAdapter.createStructure(this,t),this.validationState=this.fieldAdapter.createValidationState(this,t),this.nodeState=this.fieldAdapter.createNodeState(this,t),this.metadataState=new no(this),this.submitState=new ao(this),this.controlValue=this.controlValueSignal(),this.metadataState.runMetadataCreateLifecycle()}focusBoundControl(t){this.getBindingForFocus()?.focus(t)}getBindingForFocus(){return this.formFieldBindings().filter(e=>e.focus!==void 0).reduce(ir,void 0)||this.structure.children().map(e=>e.getBindingForFocus()).reduce(ir,void 0)}pendingSync=bd({source:()=>this.value(),computation:(t,e)=>{e?.value?.abort()}});get fieldTree(){return this.fieldProxy}get logicNode(){return this.structure.logic}get value(){return this.structure.value}get keyInParent(){return this.structure.keyInParent}get errors(){return this.validationState.errors}get parseErrors(){return this.validationState.parseErrors}get errorSummary(){return this.validationState.errorSummary}get pending(){return this.validationState.pending}get valid(){return this.validationState.valid}get invalid(){return this.validationState.invalid}get dirty(){return this.nodeState.dirty}get touched(){return this.nodeState.touched}get disabled(){return this.nodeState.disabled}get disabledReasons(){return this.nodeState.disabledReasons}get hidden(){return this.nodeState.hidden}get readonly(){return this.nodeState.readonly}get formFieldBindings(){return this.nodeState.formFieldBindings}get submitting(){return this.submitState.submitting}get name(){return this.nodeState.name}get max(){let t=this.metadata(mo)?.();return t?this.metadata(t):void 0}get maxLength(){return this.metadata(lr)}get min(){let t=this.metadata(po)?.();return t?this.metadata(t):void 0}get minLength(){return this.metadata(ho)}get pattern(){return this.metadata(dr)??js}get required(){return this.metadata(uo)??qs}metadata(t){return this.metadataState.get(t)}getError(t){return this.errors().find(e=>e.kind===t)}hasMetadata(t){return this.metadataState.has(t)}markAsTouched(t){this.structure.isOrphaned()||de(()=>{this.markAsTouchedInternal(t),this.flushSync()})}markAsTouchedInternal(t){if(!this.structure.isOrphaned()&&!this.validationState.shouldSkipValidation()&&(this.nodeState.markAsTouched(),!t?.skipDescendants))for(let e of this.structure.children())e.markAsTouchedInternal()}markAsDirty(){this.nodeState.markAsDirty()}markAsPristine(){this.nodeState.markAsPristine()}markAsUntouched(){this.nodeState.markAsUntouched()}reset(t){de(()=>this._reset(t))}_reset(t){this.pendingSync()?.abort(),t!==void 0&&this.value.set(t),this.controlValue.rawSet(this.value()),this.nodeState.markAsUntouched(),this.nodeState.markAsPristine();for(let e of this.formFieldBindings())e.reset();for(let e of this.structure.materializedChildren())e._reset()}reloadValidation(){de(()=>this._reloadValidation())}_reloadValidation(){let t=this.logicNode.logic.getMetadataKeys();for(let e of t)e[oi]&&this.metadata(e).reload?.();for(let e of this.structure.children())e._reloadValidation()}controlValueSignal(){let t=bd(this.value);t.rawSet=t.set,t.set=n=>{t.rawSet(n),this.markAsDirty(),this.debounceSync()};let e=t.update;return t.update=n=>{e(n),this.markAsDirty(),this.debounceSync()},t}sync(){this.value.set(this.controlValue())}flushSync(){let t=this.pendingSync();t&&!t.signal.aborted&&(t.abort(),this.sync())}async debounceSync(){let t=de(()=>(this.pendingSync()?.abort(),this.nodeState.debouncer()));if(t){let e=new AbortController,n=t(e.signal);if(n&&(this.pendingSync.set(e),await n,e.signal.aborted))return}this.structure.isOrphaned()||this.sync()}static newRoot(t,e,n,o){return o.newRoot(t,e,n,o)}createStructure(t){return t.kind===`root`?new io(this,t.logic,t.fieldManager,t.value,this.newChild.bind(this)):new oo(this,t.logic,t.parent,t.identityInParent,t.initialKeyInParent,this.newChild.bind(this))}newChild(t,e,n){let o,a;return n?(o=this.pathNode.getChild(Mt),a=this.structure.logic.getChild(Mt)):(o=this.pathNode.getChild(t),a=this.structure.logic.getChild(t)),this.fieldAdapter.newChild({kind:`child`,parent:this,pathNode:o,logic:a,initialKeyInParent:t,identityInParent:e,fieldAdapter:this.fieldAdapter})}};var js=G(()=>[]);var qs=G(()=>!1);function ir(i,t){return i?t&&i.element.compareDocumentPosition(t.element)&Node.DOCUMENT_POSITION_PRECEDING?t:i:t}var ro=class{node;selfTouched=$(!1);selfDirty=$(!1);markAsTouched(){this.selfTouched.set(!0)}markAsDirty(){this.selfDirty.set(!0)}markAsPristine(){this.selfDirty.set(!1)}markAsUntouched(){this.selfTouched.set(!1)}formFieldBindings=$([]);constructor(t){this.node=t}dirty=G(()=>{let t=this.selfDirty()&&!this.isNonInteractive();return this.node.structure.reduceChildren(t,(e,n)=>n||e.nodeState.dirty(),er)});touched=G(()=>{let t=this.selfTouched()&&!this.isNonInteractive();return this.node.structure.reduceChildren(t,(e,n)=>n||e.nodeState.touched(),er)});disabledReasons=G(()=>[...this.node.structure.parent?.nodeState.disabledReasons()??[],...this.node.logicNode.logic.disabledReasons.compute(this.node.context)],{equal:Fe});disabled=G(()=>!!this.disabledReasons().length);readonly=G(()=>(this.node.structure.parent?.nodeState.readonly()||this.node.logicNode.logic.readonly.compute(this.node.context))??!1);hidden=G(()=>(this.node.structure.parent?.nodeState.hidden()||this.node.logicNode.logic.hidden.compute(this.node.context))??!1);name=G(()=>{let t=this.node.structure.parent;return t?`${t.name()}.${this.node.structure.keyInParent()}`:this.node.structure.fieldManager.rootName});debouncer=G(()=>{if(this.node.logicNode.logic.hasMetadata(ei)){let e=this.node.logicNode.logic.getMetadata(ei).compute(this.node.context);if(e)return n=>e(this.node.context,n)}return this.node.structure.parent?.nodeState.debouncer?.()});isNonInteractive=G(()=>this.hidden()||this.disabled()||this.readonly())};var so=class{newRoot(t,e,n,o){return new xn({kind:`root`,fieldManager:t,value:e,pathNode:n,logic:n.builder.build(),fieldAdapter:o})}newChild(t){return new xn(t)}createNodeState(t){return new ro(t)}createValidationState(t){return new eo(t)}createStructure(t,e){return t.createStructure(e)}};var lo=class{injector;rootName;submitOptions;constructor(t,e,n){this.injector=t,this.rootName=e??`${this.injector.get(Rr$1)}.form${$s++}`,this.submitOptions=n}structures=/* @__PURE__ */ new Set;createFieldManagementEffect(t){We$1(()=>{let e=/* @__PURE__ */ new Set;this.markStructuresLive(t,e);for(let n of this.structures)e.has(n)||(this.structures.delete(n),de(()=>n.destroy()))},{injector:this.injector})}markStructuresLive(t,e){e.add(t);for(let n of t.children())this.markStructuresLive(n.structure,e)}};var $s=0;var pr=new T(``);function Us(i){let t,e,n;return i.length===3?[t,e,n]=i:i.length===2?ks(i[1])?[t,e]=i:[t,n]=i:[t]=i,[t,e,n]}function Gs(...i){let[t,e,n]=Us(i),o=n?.injector??b(ie),a=Jc$1(o,()=>Jn.rootCompile(e)),r=new lo(o,n?.name,n?.submission),u=n?.adapter??new so,m=xn.newRoot(r,t,a,u);r.createFieldManagementEffect(m.structure);let{experimentalWebMcpTool:x}=n??{};if(x){let P=Jc$1(o,()=>b(pr,{optional:!0}));P&&Jc$1(o,()=>P(m.fieldTree,{name:x.name,description:x.description,annotations:x.annotations}))}return m.fieldTree}async function br(i,t){let e=de(i);if(de(e.submitState.submitting))return!1;let n=t===void 0?e.structure.root.fieldProxy:i,o={root:e.structure.root.fieldProxy,submitted:i};t=typeof t==`function`?{action:t}:t??e.structure.fieldManager.submitOptions;let a=t?.action;if(!a)throw new j(1915,!1);e.markAsTouched();let r=t?.onInvalid,u=Ks(e,t?.ignoreValidators);try{if(u){e.submitState.selfSubmitting.set(!0);let m=await de(()=>a?.(n,o));return m&&Zs(e,m),!m||Ze(m)&&m.length===0}else de(()=>r?.(n,o));return!1}finally{e.submitState.selfSubmitting.set(!1)}}function Ks(i,t){switch(t){case`all`:return!0;case`none`:return de(i.valid);default:return!de(i.invalid)}}function Zs(i,t){Ze(t)||(t=[t]);let e=/* @__PURE__ */ new Map;for(let n of t){let o=yn(n,i.fieldTree),a=o.fieldTree(),r=e.get(a);r||(r=[],e.set(a,r)),r.push(o)}for(let[n,o]of e)n.submitState.submissionErrors.set(o)}var ni=class{kind=`compat`;control;fieldTree;context;message;constructor({context:t,kind:e,control:n}){this.context=t,this.kind=e,this.control=n}};function mr(i){if(i.length===0)return null;let t={};for(let e of i)t[e.kind]=e instanceof ni?e.context:e;return t}function gr(i,t){return i===null?[]:Object.entries(i).map(([e,n])=>new ni({context:n,kind:e,control:t}))}var Ys=new T(``);function eh(i,t){wt(i);let e=Ve.unwrapFieldPath(i),n;typeof t==`function`||typeof t==`string`?n=t:n=t?.when,e.builder.addDisabledReasonRule(o=>{let a=!0;return typeof n==`string`?a=n:n&&(a=n(o)),typeof a==`string`?{fieldTree:o.fieldTree,message:a}:a?{fieldTree:o.fieldTree}:void 0})}function th(i,t){wt(i);let e=Ve.unwrapFieldPath(i),n=typeof t==`function`?t:t?.when??(()=>!0);e.builder.addReadonlyRule(n)}function Qs(i){let t=i;return typeof t.length==`number`?t.length:t.size}function Xe(i,t){return i instanceof Function?i(t):i}function Mo(i){return typeof i==`number`?isNaN(i):i===``||i===!1||i==null}function hr(i){return i===void 0?[]:Array.isArray(i)?i:[i]}function Sn(i,t){wt(i),Ve.unwrapFieldPath(i).builder.addSyncErrorRule(n=>yn(t(n),n.fieldTree))}function Js(i){return new fo(i)}function el(i,t){return new vo(i,t)}function tl(i,t){return new xo(i,t)}function nl(i,t){return new yo(i,t)}function il(i){return new So(i)}var ht=class{__brand=void 0;kind=``;fieldTree;message;constructor(t){t&&Object.assign(this,t)}};var fo=class extends ht{kind=`required`};var vo=class extends ht{min;kind=`min`;constructor(t,e){super(e),this.min=t}};var xo=class extends ht{max;kind=`max`;constructor(t,e){super(e),this.max=t}};var yo=class extends ht{minLength;kind=`minLength`;constructor(t,e){super(e),this.minLength=t}};var So=class extends ht{kind=`email`};var ai=class extends ht{kind=`parse`};var ol=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;function nh(i,t){Sn(i,e=>{if(!(t?.when&&!t.when(e))&&!Mo(e.value())&&!ol.test(e.value()))return t?.error?Xe(t.error,e):il({message:Xe(t?.message,e)})})}function ih(i,t,e){let n=ze();We(i,n,o=>{if(!(e?.when&&!e.when(o)))return typeof t==`function`?t(o):t}),We(i,go,({state:o})=>o.metadata(n)()),We(i,mo,()=>go),Sn(i,o=>{let a=o.value();if(a===null||Number.isNaN(a))return;let r=o.state.metadata(n)();if(!(r===void 0||Number.isNaN(r))&&a>r)return e?.error?Xe(e.error,o):tl(r,{message:Xe(e?.message,o)})})}function oh(i,t,e){let n=ze();We(i,n,o=>{if(!(e?.when&&!e.when(o)))return typeof t==`function`?t(o):t}),We(i,bo,({state:o})=>o.metadata(n)()),We(i,po,()=>bo),Sn(i,o=>{let a=o.value();if(a===null||Number.isNaN(a))return;let r=o.state.metadata(n)();if(!(r===void 0||Number.isNaN(r))&&a<r)return e?.error?Xe(e.error,o):el(r,{message:Xe(e?.message,o)})})}function ah(i,t,e){let n=We(i,ze(),o=>{if(!(e?.when&&!e.when(o)))return typeof t==`number`?t:t(o)});We(i,ho,({state:o})=>o.metadata(n)()),Sn(i,o=>{if(Mo(o.value()))return;let a=o.state.metadata(n)();if(a!==void 0&&Qs(o.value())<a)return e?.error?Xe(e.error,o):nl(a,{message:Xe(e?.message,o)})})}function rh(i,t){let e=We(i,ze(),n=>t?.when?t.when(n):!0);We(i,uo,({state:n})=>n.metadata(e)()),Sn(i,n=>{if(n.state.metadata(e)()&&Mo(n.value()))return t?.error?Xe(t.error,n):Js({message:Xe(t?.message,n)})})}function sh(i,t){wt(i);let e=Ve.unwrapFieldPath(i),n=sr((o,a)=>{if(t.debounce!==void 0){let r=Rz(()=>a(),t.debounce),u=G(()=>Ck(r));return t.factory(u)}return t.factory(a)});n[oi]=!0,We(i,n,o=>{let r=o.stateOf(i).validationState;if(!(r.shouldSkipValidation()||!r.syncValid())&&!(t.when&&!t.when(o)))return t.params(o)}),e.builder.addAsyncErrorRule(o=>{let a=o.state.metadata(n),r;switch(a.status()){case`idle`:return;case`loading`:case`reloading`:return`pending`;case`resolved`:case`local`:return a.hasValue()?(r=t.onSuccess(a.value(),o),yn(r,o.fieldTree)):void 0;case`error`:return r=t.onError(a.error(),o),yn(r,o.fieldTree)}})}function lh(i,t){wt(i);let e=Ve.unwrapFieldPath(i),n=al(t);e.builder.addMetadataRule(ei,()=>n)}function al(i){return typeof i==`function`?i:i===`blur`?sl():i>0?rl(i):ll}function rl(i){return(t,e)=>new Promise(n=>{let o,a=()=>{clearTimeout(o),n()};o=setTimeout(()=>{e.removeEventListener(`abort`,a),n()},i),e.addEventListener(`abort`,a,{once:!0})})}function sl(){return(i,t)=>new Promise(e=>{t.addEventListener(`abort`,()=>e(),{once:!0})})}function ll(){}function yr(i,t,e){let n=bd({source:i,computation:()=>[],equal:Fe}),o=r=>{let u=e(r);n.set(hr(u.error)),u.value!==void 0&&t(u.value),n.set(hr(u.error))},a=()=>{n.set([])};return{errors:n.asReadonly(),setRawValue:o,reset:a}}function Sr(i,t){let{parse:e,format:n}=t,o=yr(i,i.set,e),a=bd(()=>n(i())),r=a;r.parseErrors=o.errors;let u=r.set.bind(r),m=b(QR,{self:!0,optional:!0});return m&&(m.setParseErrors(o.errors),m.onReset=x=>{o.reset();let P=x!==void 0?x:i();u(n(P))}),r.set=x=>{o.setRawValue(x),u(x)},r.update=x=>{r.set(x(a()))},r}var _o=class{field;constructor(t){this.field=t}control=this;get value(){return this.field().controlValue()}get valid(){return this.field().valid()}get invalid(){return this.field().invalid()}get pending(){return this.field().pending()}get disabled(){return this.field().disabled()}get enabled(){return!this.field().disabled()}get errors(){return mr(this.field().errors())}get pristine(){return!this.field().dirty()}get dirty(){return this.field().dirty()}get touched(){return this.field().touched()}get untouched(){return!this.field().touched()}get status(){if(this.field().disabled())return`DISABLED`;if(this.field().valid())return`VALID`;if(this.field().invalid())return`INVALID`;if(this.field().pending())return`PENDING`;throw new j(1910,!1)}valueAccessor=null;hasValidator(t){return t===ai$1.required?this.field().required():!1}updateValueAndValidity(){}};var Co={disabled:`disabled`,disabledReasons:`disabledReasons`,dirty:`dirty`,errors:`errors`,hidden:`hidden`,invalid:`invalid`,max:`max`,maxLength:`maxLength`,min:`min`,minLength:`minLength`,name:`name`,pattern:`pattern`,pending:`pending`,readonly:`readonly`,required:`required`,touched:`touched`};var dl=(()=>{let i={};for(let t of Object.keys(Co))i[Co[t]]=t;return i})();function wo(i,t){return i[dl[t]]?.()}var No=Object.values(Co);function ri(){return{}}function gt(i,t,e){return Object.is(i[t],e)?!1:(i[t]=e,!0)}function cl(i,t,e){let n;if(_r(i)&&e.isBadInput(i))return{error:new ai};switch(i.type){case`checkbox`:return{value:i.checked};case`number`:case`range`:case`datetime-local`:if(n=de(t),typeof n==`number`||n===null)return{value:i.value===``?null:i.valueAsNumber};break;case`date`:case`month`:case`time`:case`week`:if(n=de(t),n===null||n instanceof Date)return{value:i.valueAsDate};if(typeof n==`number`)return{value:i.valueAsNumber}}if(i.tagName===`INPUT`&&i.type===`text`&&(n??=de(t),typeof n==`number`||n===null)){if(i.value===``)return{value:null};let o=Number(i.value);return Number.isNaN(o)?{error:new ai}:{value:o}}return{value:i.value}}function fr(i,t){switch(i.type){case`checkbox`:i.checked=t;return;case`radio`:i.checked=t===i.value;return;case`number`:case`range`:case`datetime-local`:if(typeof t==`number`){vr(i,t);return}else if(t===null){i.value=``;return}break;case`date`:case`month`:case`time`:case`week`:if(t===null||t instanceof Date){i.valueAsDate=t;return}else if(typeof t==`number`){vr(i,t);return}}if(i.tagName===`INPUT`&&i.type===`text`){if(typeof t==`number`){i.value=isNaN(t)?``:String(t);return}if(t===null){i.value=``;return}}i.value=t}function vr(i,t){isNaN(t)?i.value=``:i.valueAsNumber=t}function _r(i){return i.tagName===`INPUT`}function ul(i){return i.type===`date`||i.type===`datetime-local`||i.type===`month`||i.type===`time`||i.type===`week`}function pl(i,t){let e=i.getUTCFullYear(),n=String(i.getUTCMonth()+1).padStart(2,`0`);if(t===`month`)return`${e}-${n}`;return`${e}-${n}-${String(i.getUTCDate()).padStart(2,`0`)}`}function Cr(i,t,e){return t instanceof Date&&(i===`min`||i===`max`)&&(e===`date`||e===`month`)?pl(t,e):t}function bl(i,t){i.listenToCustomControlModel(n=>t.state().controlValue.set(n)),i.listenToCustomControlOutput(`touch`,()=>t.state().markAsTouched()),t.registerAsBinding(i.customControl);let e=ri();return()=>{let n=t.state(),o=n.controlValue();gt(e,`controlValue`,o)&&i.setCustomControlModelInput(o);for(let a of No){let r;if(a===`errors`?r=t.errors():r=wo(n,a),gt(e,a,r)&&(i.setInputOnDirectives(a,r),t.elementAcceptsNativeProperty(a)&&!i.customControlHasInput(a))){let u=Cr(a,r,t.nativeFormElement.type);KR(t.renderer,t.nativeFormElement,a,u)}}}}function ml(i){return typeof i==`object`&&i!==null}function gl(i,t){let e=ri();t.controlValueAccessor.registerOnChange(o=>{e.controlValue=o,t.state().controlValue.set(o)}),t.controlValueAccessor.registerOnTouched(()=>t.state().markAsTouched());let n=t.injector.get(li$1,null,{optional:!0,self:!0});if(n){let o;for(let m of n)ml(m)&&m.registerOnValidatorChange&&(o??=$(0),m.registerOnValidatorChange(()=>{o.update(x=>x+1)}));let a=n.map(m=>typeof m==`function`?m:m.validate.bind(m)),r=ai$1.compose(a),u=G(()=>{o?.();return gr(r?r(t.interopNgControl.control):null,t.interopNgControl.control)});t.parseErrorsSource.set(u)}return t.registerAsBinding({reset:()=>{let o=t.state().value();e.controlValue=o,de(()=>t.controlValueAccessor.writeValue(o))}}),()=>{let o=t.state(),a=o.controlValue();gt(e,`controlValue`,a)&&de(()=>t.controlValueAccessor.writeValue(a));for(let r of No){let u=wo(o,r);if(gt(e,r,u)){let m=i.setInputOnDirectives(r,u,r===`name`?hl:void 0);r===`disabled`&&t.controlValueAccessor.setDisabledState?de(()=>t.controlValueAccessor.setDisabledState(u)):!m&&t.elementAcceptsNativeProperty(r)&&KR(t.renderer,t.nativeFormElement,r,u)}}}}function hl(i){return i==null}function fl(i,t,e){if(typeof MutationObserver!=`function`)return;let n=new MutationObserver(o=>{o.some(a=>vl(a))&&t()});n.observe(i,{attributes:!0,attributeFilter:[`value`],characterData:!0,childList:!0,subtree:!0}),e.onDestroy(()=>n.disconnect())}function vl(i){if(i.type===`childList`||i.type===`characterData`){if(i.target instanceof Comment)return!1;for(let t of i.addedNodes)if(!(t instanceof Comment))return!0;for(let t of i.removedNodes)if(!(t instanceof Comment))return!0;return!1}return i.type===`attributes`&&i.target instanceof HTMLOptionElement}function xl(i,t,e,n){let o=!1,a=t.nativeFormElement,r=yr(()=>t.state().value(),D=>t.state().controlValue.set(D),D=>cl(a,t.state().value,n));e.set(r.errors),t.onReset=()=>{r.reset();let D=t.state().value();P.controlValue=D,fr(a,D)};let u=i.nativeElement,m=()=>r.setRawValue(void 0);u.addEventListener(`input`,m);let x=()=>t.state().markAsTouched();u.addEventListener(`blur`,x),t.destroyRef.onDestroy(()=>{u.removeEventListener(`input`,m),u.removeEventListener(`blur`,x)}),_r(a)&&ul(a)&&n.watchValidity(t.destroyRef,a,()=>r.setRawValue(void 0)),t.registerAsBinding(),a.tagName===`SELECT`&&fl(a,()=>{o&&(a.value=t.state().controlValue())},t.destroyRef);let P=ri();return()=>{let D=t.state();for(let J of No){let O=wo(D,J);if(gt(P,J,O)&&(i.setInputOnDirectives(J,O),t.elementAcceptsNativeProperty(J))){let Z=Cr(J,O,a.type);KR(t.renderer,a,J,Z)}}let L=D.controlValue(),V=gt(P,`controlValue`,L),Q=a.type===`radio`&&gt(P,`radioValue`,a.value);(V||Q)&&fr(a,L),o=!0}}var Mr=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵprov=B({token:i,factory:e=>yl.ɵfac(e),providedIn:`root`})}return i})();var yl=(()=>{class i extends Mr{document=b(q);cspNonce=b(Ts$1,{optional:!0});injectedStyles=/* @__PURE__ */ new WeakMap;watchValidity(e,n,o){let a=n.getRootNode();this.injectedStyles.has(a)||this.injectedStyles.set(a,this.createAnimationStyle(a));let r=u=>{let m=u;(m.animationName===`ng-valid`||m.animationName===`ng-invalid`)&&o()};n.addEventListener(`animationstart`,r),e.onDestroy(()=>{n.removeEventListener(`animationstart`,r)})}isBadInput(e){return e.validity?.badInput??!1}createAnimationStyle(e){let n=this.document.createElement(`style`);return this.cspNonce&&(n.nonce=this.cspNonce),n.textContent=`
      @keyframes ng-valid {}
      @keyframes ng-invalid {}
      input:valid, textarea:valid {
        animation: ng-valid 0.001s;
      }
      input:invalid, textarea:invalid {
        animation: ng-invalid 0.001s;
      }
    `,e.nodeType===9?e.head?.appendChild(n):e.appendChild(n),n}ngOnDestroy(){this.injectedStyles.get(this.document)?.remove()}static ɵfac=(()=>{let e;return function(o){return(e||(e=ho$1(i)))(o||i)}})();static ɵprov=B({token:i,factory:i.ɵfac})}return i})();var Sl=Symbol();var xr=new T(``);var dh=(()=>{class i{field=ee.required({alias:`formField`});state=G(()=>this.field()());renderer=b(Nt);destroyRef=b(ge);injector=b(ie);element=b(ke).nativeElement;elementIsNativeFormElement=YR(this.element);elementAcceptsTextualValues=fK(this.element);_elementAcceptsMinMax;nativeFormElement=this.elementIsNativeFormElement?this.element:void 0;focuser=e=>this.element.focus(e);controlValueAccessors=b(tc$1,{optional:!0,self:!0});config=b(Ys,{optional:!0});validityMonitor=b(Mr);parseErrorsSource=$(void 0);_interopNgControl;get interopNgControl(){return this._interopNgControl??=new _o(this.state)}parseErrors=G(()=>this.parseErrorsSource()?.().map(e=>s(r({},e),{fieldTree:de(this.state).fieldTree,formField:this}))??[],{equal:Fe});errors=G(()=>this.state().errors().filter(e=>!e.formField||e.formField===this),{equal:Fe});isFieldBinding=!1;resetter=()=>{};parseErrorsResetCallback;setParseErrors(e){this.parseErrorsSource.set(e)}set onReset(e){this.parseErrorsResetCallback=e}get onReset(){return this.parseErrorsResetCallback}get controlValueAccessor(){return!this.controlValueAccessors||this.controlValueAccessors.length===0?this.interopNgControl?.valueAccessor??void 0:sN(this.interopNgControl,this.controlValueAccessors)??void 0}installClassBindingEffect(){let e=Object.entries(this.config?.classes??{}).map(([o,a])=>[o,G(()=>a(this))]);if(e.length===0)return;let n=ri();Vk({write:()=>{if(!this.state().structure.isOrphaned())for(let[o,a]of e){let r=a();gt(n,o,r)&&(r?this.renderer.addClass(this.element,o):this.renderer.removeClass(this.element,o))}}},{injector:this.injector})}focus(e){this.focuser(e)}reset(){this.resetter(),this.parseErrorsResetCallback?.(this.state().value())}registerAsBinding(e){if(this.isFieldBinding)throw new j(1913,!1);this.isFieldBinding=!0,this.installClassBindingEffect(),e?.focus&&(this.focuser=n=>e.focus(n)),e?.reset&&(this.resetter=()=>e.reset()),We$1(n=>{let o=this.state();o.nodeState.formFieldBindings.update(a=>[...a,this]),n(()=>{let a=o.nodeState.formFieldBindings().filter(r=>r!==this);o.nodeState.formFieldBindings.set(a),a.length===0&&!o.structure.isOrphaned()&&o.flushSync()})},{injector:this.injector})}[Sl];ɵngControlCreate(e){if(!e.hasPassThrough)if(this.controlValueAccessor)this.ɵngControlUpdate=gl(e,this);else if(e.customControl)this.ɵngControlUpdate=bl(e,this);else if(this.elementIsNativeFormElement)this.ɵngControlUpdate=xl(e,this,this.parseErrorsSource,this.validityMonitor);else throw new j(1914,!1)}ɵngControlUpdate;elementAcceptsNativeProperty(e){if(!this.elementIsNativeFormElement)return!1;switch(e){case`min`:case`max`:return this._elementAcceptsMinMax??=pK(this.element);case`minLength`:case`maxLength`:return this.elementAcceptsTextualValues;case`disabled`:case`required`:case`readonly`:case`name`:return!0;default:return!1}}static ɵfac=function(n){return new(n||i)};static ɵdir=pe({type:i,selectors:[[``,`formField`,``]],inputs:{field:[1,`formField`,`field`]},exportAs:[`formField`],features:[rr$1([{provide:xr,useExisting:i},{provide:sr$1,useFactory:()=>b(i).interopNgControl},{provide:QR,useFactory:()=>b(xr,{self:!0})}]),xa(`formField`)]})}return i})();var ch=(()=>{class i{fieldTree=ee.required({alias:`formRoot`});onSubmit(e){e.preventDefault(),de(()=>{let n=this.fieldTree();n().structure.fieldManager.submitOptions&&br(n)})}static ɵfac=function(n){return new(n||i)};static ɵdir=pe({type:i,selectors:[[`form`,`formRoot`,``]],hostAttrs:[`novalidate`,``],hostBindings:function(n,o){n&1&&br$1(`submit`,function(r){return o.onSubmit(r)})},inputs:{fieldTree:[1,`formRoot`,`fieldTree`]}})}return i})();var wr=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵcmp=Fr$1({type:i,selectors:[[`ng-component`]],hostAttrs:[`cdk-text-field-style-loader`,``],decls:0,vars:0,template:function(n,o){},styles:[`textarea.cdk-textarea-autosize {
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
`],encapsulation:2})}return i})();var _l={passive:!0};var Cl=(()=>{class i{_platform=b(st);_ngZone=b(le);_renderer=b(St).createRenderer(null,null);_styleLoader=b(Vn);_monitoredElements=/* @__PURE__ */ new Map;monitor(e){if(!this._platform.isBrowser)return _i$1;this._styleLoader.load(wr);let n=Ks$1(e),o=this._monitoredElements.get(n);if(o)return o.subject;let a=new xe,r=`cdk-text-field-autofilled`,u=x=>{x.animationName===`cdk-text-field-autofill-start`&&!n.classList.contains(r)?(n.classList.add(r),this._ngZone.run(()=>a.next({target:x.target,isAutofilled:!0}))):x.animationName===`cdk-text-field-autofill-end`&&n.classList.contains(r)&&(n.classList.remove(r),this._ngZone.run(()=>a.next({target:x.target,isAutofilled:!1})))},m=this._ngZone.runOutsideAngular(()=>(n.classList.add(`cdk-text-field-autofill-monitored`),this._renderer.listen(n,`animationstart`,u,_l)));return this._monitoredElements.set(n,{subject:a,unlisten:m}),a}stopMonitoring(e){let n=Ks$1(e),o=this._monitoredElements.get(n);o&&(o.unlisten(),o.subject.complete(),n.classList.remove(`cdk-text-field-autofill-monitored`),n.classList.remove(`cdk-text-field-autofilled`),this._monitoredElements.delete(n))}ngOnDestroy(){this._monitoredElements.forEach((e,n)=>this.stopMonitoring(n))}static ɵfac=function(n){return new(n||i)};static ɵprov=J({token:i,factory:i.ɵfac})}return i})();var si=(()=>{class i{_elementRef=b(ke);_autofillMonitor=b(Cl);cdkAutofill=new Re;ngOnInit(){this._autofillMonitor.monitor(this._elementRef).subscribe(e=>this.cdkAutofill.emit(e))}ngOnDestroy(){this._autofillMonitor.stopMonitoring(this._elementRef)}static ɵfac=function(n){return new(n||i)};static ɵdir=pe({type:i,selectors:[[``,`cdkAutofill`,``]],outputs:{cdkAutofill:`cdkAutofill`}})}return i})();var Nr=(()=>{class i{_elementRef=b(ke);_platform=b(st);_ngZone=b(le);_renderer=b(Nt);_resizeEvents=new xe;_previousValue;_initialHeight;_destroyed=new xe;_listenerCleanups;_minRows;_maxRows;_enabled=!0;_previousMinRows=-1;_textareaElement;get minRows(){return this._minRows}set minRows(e){this._minRows=tR(e),this._setMinHeight()}get maxRows(){return this._maxRows}set maxRows(e){this._maxRows=tR(e),this._setMaxHeight()}get enabled(){return this._enabled}set enabled(e){this._enabled!==e&&((this._enabled=e)?this.resizeToFitContent(!0):this.reset())}get placeholder(){return this._textareaElement.placeholder}set placeholder(e){this._cachedPlaceholderHeight=void 0,e?this._textareaElement.setAttribute(`placeholder`,e):this._textareaElement.removeAttribute(`placeholder`),this._cacheTextareaPlaceholderHeight()}_cachedLineHeight;_cachedPlaceholderHeight;_document=b(q);_hasFocus=!1;_isViewInited=!1;constructor(){b(Vn).load(wr),this._textareaElement=this._elementRef.nativeElement}_setMinHeight(){let e=this.minRows&&this._cachedLineHeight?`${this.minRows*this._cachedLineHeight}px`:null;e&&(this._textareaElement.style.minHeight=e)}_setMaxHeight(){let e=this.maxRows&&this._cachedLineHeight?`${this.maxRows*this._cachedLineHeight}px`:null;e&&(this._textareaElement.style.maxHeight=e)}ngAfterViewInit(){this._platform.isBrowser&&(this._initialHeight=this._textareaElement.style.height,this.resizeToFitContent(),this._ngZone.runOutsideAngular(()=>{this._listenerCleanups=[this._renderer.listen(`window`,`resize`,()=>this._resizeEvents.next()),this._renderer.listen(this._textareaElement,`focus`,this._handleFocusEvent),this._renderer.listen(this._textareaElement,`blur`,this._handleFocusEvent)],this._resizeEvents.pipe(us$1(16)).subscribe(()=>{this._cachedLineHeight=this._cachedPlaceholderHeight=void 0,this.resizeToFitContent(!0)})}),this._isViewInited=!0,this.resizeToFitContent(!0))}ngOnDestroy(){this._listenerCleanups?.forEach(e=>e()),this._resizeEvents.complete(),this._destroyed.next(),this._destroyed.complete()}_cacheTextareaLineHeight(){if(this._cachedLineHeight)return;let e=this._textareaElement.cloneNode(!1),n=e.style;e.rows=1,n.position=`absolute`,n.visibility=`hidden`,n.border=`none`,n.padding=`0`,n.height=``,n.minHeight=``,n.maxHeight=``,n.top=n.bottom=n.left=n.right=`auto`,n.overflow=`hidden`,this._textareaElement.parentNode.appendChild(e),this._cachedLineHeight=e.clientHeight,e.remove(),this._setMinHeight(),this._setMaxHeight()}_measureScrollHeight(){let e=this._textareaElement,n=e.style.marginBottom||``,o=this._platform.FIREFOX,a=this._hasFocus,r=o?`cdk-textarea-autosize-measuring-firefox`:`cdk-textarea-autosize-measuring`;a&&(e.style.marginBottom=`${e.clientHeight}px`),e.classList.add(r);let u=e.scrollHeight-4;return e.classList.remove(r),a&&(e.style.marginBottom=n),u}_cacheTextareaPlaceholderHeight(){if(!this._isViewInited||this._cachedPlaceholderHeight!=null)return;if(!this.placeholder){this._cachedPlaceholderHeight=0;return}let e=this._textareaElement.value;this._textareaElement.value=this._textareaElement.placeholder,this._cachedPlaceholderHeight=this._measureScrollHeight(),this._textareaElement.value=e}_handleFocusEvent=e=>{this._hasFocus=e.type===`focus`};ngDoCheck(){this._platform.isBrowser&&this.resizeToFitContent()}resizeToFitContent(e=!1){if(!this._enabled||(this._cacheTextareaLineHeight(),this._cacheTextareaPlaceholderHeight(),!this._cachedLineHeight))return;let n=this._elementRef.nativeElement,o=n.value;if(!e&&this._minRows===this._previousMinRows&&o===this._previousValue)return;let a=this._measureScrollHeight(),r=Math.max(a,this._cachedPlaceholderHeight||0);n.style.height=`${r}px`,this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame<`u`?requestAnimationFrame(()=>this._scrollToCaretPosition(n)):setTimeout(()=>this._scrollToCaretPosition(n))}),this._previousValue=o,this._previousMinRows=this._minRows}reset(){this._initialHeight!==void 0&&(this._textareaElement.style.height=this._initialHeight)}_noopInputHandler(){}_scrollToCaretPosition(e){let{selectionStart:n,selectionEnd:o}=e;!this._destroyed.isStopped&&this._hasFocus&&e.setSelectionRange(n,o)}static ɵfac=function(n){return new(n||i)};static ɵdir=pe({type:i,selectors:[[`textarea`,`cdkTextareaAutosize`,``]],hostAttrs:[`rows`,`1`,1,`cdk-textarea-autosize`],hostBindings:function(n,o){n&1&&br$1(`input`,function(){return o._noopInputHandler()})},inputs:{minRows:[0,`cdkAutosizeMinRows`,`minRows`],maxRows:[0,`cdkAutosizeMaxRows`,`maxRows`],enabled:[2,`cdkTextareaAutosize`,`enabled`,Ye$1],placeholder:`placeholder`},exportAs:[`cdkTextareaAutosize`]})}return i})();var we=class i extends bt{edit=$(void 0);internalValue=G(()=>{let t=this.edit();return t?t.value:this.value()});value=_z(null);reset(){super.reset(),this.edit.set(void 0)}clearPendingEdit(){this.edit.set(void 0)}updateValue(t){if(this.disabled()||this.isReadonly())return;let e=this.ngControl?.control?.updateOn;e===`blur`||e===`submit`?this.edit.set({value:t}):this.value.set(t)}commitPendingValue(t){let e=this.edit();!e||t===`blur`&&this.ngControl?.control?.updateOn===`submit`||(this.value.set(e.value),this.edit.set(void 0))}static ɵfac=(()=>{let t;return function(n){return(t||(t=ho$1(i)))(n||i)}})();static ɵdir=pe({type:i,inputs:{value:[1,`value`]},outputs:{value:`valueChange`},features:[yt]})};function To(i){if(i===void 0||i===``)return;let t=Number(i);return Number.isFinite(t)?t:void 0}var Ml=[[[``,`bxPrefix`,``],[``,`bxIconStart`,``]],[[``,`bxSuffix`,``],[``,`bxIconEnd`,``]],[[`bx-error`]],[[`bx-hint`]]];var wl=[`[bxPrefix], [bxIconStart]`,`[bxSuffix], [bxIconEnd]`,`bx-error`,`bx-hint`];var Nl=[`ngProjectAs`,`bx-error`,5,[`bx-error`]];var Tl=[`ngProjectAs`,`bx-hint`,5,[`bx-hint`]];function Pl(i,t){i&1&&(bo$1(0,`span`,9),lA(1,`*`),Go())}function Ol(i,t){if(i&1&&(bo$1(0,`label`,3)(1,`span`,8),lA(2),Go(),od$1(3,Pl,2,0,`span`,9),Go()),i&2){let e=Wo();vo$1(`for`,e.controlId()),Xl$1(2),ik(e.resolvedLabel()),Xl$1(),nd$1(e.effectiveRequired()&&!e.resolvedHideRequiredMarker()?3:-1)}}function Il(i,t){if(i&1){let e=pb$1();bo$1(0,`textarea`,10),br$1(`input`,function(o){al$1(e);let a=Wo();return cl$1(a.onInput(o))})(`focus`,function(){al$1(e);let o=Wo();return cl$1(o.onFocus())})(`blur`,function(){al$1(e);let o=Wo();return cl$1(o.onBlur())})(`compositionstart`,function(){al$1(e);let o=Wo();return cl$1(o.onCompositionStart())})(`compositionend`,function(o){al$1(e);let a=Wo();return cl$1(a.onCompositionEnd(o))})(`cdkAutofill`,function(o){al$1(e);let a=Wo();return cl$1(a.autofilled.set(o.isAutofilled))}),Go()}if(i&2){let e=Wo();xo$1(`required`,e.effectiveRequired())(`disabled`,e.disabled())(`readOnly`,e.isReadonly())(`value`,e.displayedValue())(`spellcheck`,e.spellcheck())(`rows`,e.rows())(`cdkTextareaAutosize`,e.autosize())(`cdkAutosizeMinRows`,e.minRows())(`cdkAutosizeMaxRows`,e.maxRows()),vo$1(`id`,e.controlId())(`name`,e.name()||null)(`data-testid`,e.dataTestId())(`aria-label`,e.ariaLabel())(`aria-labelledby`,e.ariaLabelledBy())(`aria-describedby`,e.describedBy())(`aria-invalid`,e.showError())(`aria-busy`,e.pending()||e.loading())(`autocomplete`,e.autocomplete())(`inputmode`,e.inputmode())(`minlength`,e.minLength())(`maxlength`,e.maxLength())(`placeholder`,e.isFloating()||!e.label()?e.resolvedPlaceholder():``)}}function Dl(i,t){if(i&1){let e=pb$1();bo$1(0,`input`,11),br$1(`input`,function(o){al$1(e);let a=Wo();return cl$1(a.onInput(o))})(`focus`,function(){al$1(e);let o=Wo();return cl$1(o.onFocus())})(`blur`,function(){al$1(e);let o=Wo();return cl$1(o.onBlur())})(`compositionstart`,function(){al$1(e);let o=Wo();return cl$1(o.onCompositionStart())})(`compositionend`,function(o){al$1(e);let a=Wo();return cl$1(a.onCompositionEnd(o))})(`cdkAutofill`,function(o){al$1(e);let a=Wo();return cl$1(a.autofilled.set(o.isAutofilled))}),Go()}if(i&2){let e=Wo();xo$1(`required`,e.effectiveRequired())(`disabled`,e.disabled())(`readOnly`,e.isReadonly())(`value`,e.displayedValue())(`spellcheck`,e.spellcheck())(`type`,e.type()),vo$1(`id`,e.controlId())(`name`,e.name()||null)(`data-testid`,e.dataTestId())(`aria-label`,e.ariaLabel())(`aria-labelledby`,e.ariaLabelledBy())(`aria-describedby`,e.describedBy())(`aria-invalid`,e.showError())(`aria-busy`,e.pending()||e.loading())(`autocomplete`,e.autocomplete())(`inputmode`,e.inputmode())(`minlength`,e.minLength())(`maxlength`,e.maxLength())(`placeholder`,e.isFloating()||!e.label()?e.resolvedPlaceholder():``)(`min`,e.min())(`max`,e.max())(`step`,e.step())(`pattern`,e.pattern()[0]?.source)}}function kl(i,t){if(i&1){let e=pb$1();bo$1(0,`div`,7)(1,`button`,12),br$1(`pointerdown`,function(o){al$1(e);let a=Wo();return cl$1(a.startSpin(-1,o))})(`pointerup`,function(){al$1(e);let o=Wo();return cl$1(o.stopSpin())})(`pointercancel`,function(){al$1(e);let o=Wo();return cl$1(o.stopSpin())})(`pointerleave`,function(){al$1(e);let o=Wo();return cl$1(o.stopSpin())})(`click`,function(o){al$1(e);let a=Wo();return o.detail===0&&a.startSpin(-1,o),cl$1(a.stopSpin())}),sd$1(2,`bx-icon`,13),Go(),bo$1(3,`button`,12),br$1(`pointerdown`,function(o){al$1(e);let a=Wo();return cl$1(a.startSpin(1,o))})(`pointerup`,function(){al$1(e);let o=Wo();return cl$1(o.stopSpin())})(`pointercancel`,function(){al$1(e);let o=Wo();return cl$1(o.stopSpin())})(`pointerleave`,function(){al$1(e);let o=Wo();return cl$1(o.stopSpin())})(`click`,function(o){al$1(e);let a=Wo();return o.detail===0&&a.startSpin(1,o),cl$1(a.stopSpin())}),sd$1(4,`bx-icon`,14),Go()()}if(i&2){let e=Wo();Xl$1(),xo$1(`disabled`,e.isSpinDownDisabled()),vo$1(`aria-label`,e.resolvedDecreaseLabel()),Xl$1(2),xo$1(`disabled`,e.isSpinUpDisabled()),vo$1(`aria-label`,e.resolvedIncreaseLabel())}}var Tr=class i extends we{i18n=b(VQ,{optional:!0});editingRaw=$(void 0);badInput=$(!1);labelText=Sz(ct);labelTruncated=G(()=>this.labelText()?.truncated()??!1);isFocused=$(!1);autofilled=$(!1);rawValue=Sr(this.value,{parse:t=>{if(this.type()!==`number`)return{value:t};let e=t===``?null:Number(t);return this.badInput()||e!==null&&!Number.isFinite(e)?{error:{kind:`parse`}}:{value:e}},format:t=>t?.toString()??``});displayedValue=G(()=>this.editingRaw()??this.rawValue());isSpinDownDisabled=G(()=>this.disabled()||this.isReadonly()||Number(this.value()??0)<=(this.min()??-1/0));isSpinUpDisabled=G(()=>this.disabled()||this.isReadonly()||Number(this.value()??0)>=(this.max()??1/0));isFloating=G(()=>this.resolvedFloatLabel()===`always`||this.isFocused()||this.autofilled()||!!this.displayedValue()||this.multiline()||[`date`,`time`,`datetime-local`].includes(this.type()));resolvedDecreaseLabel=G(()=>LQ(this.decreaseLabel(),this.i18n));resolvedIncreaseLabel=G(()=>LQ(this.increaseLabel(),this.i18n));type=ee(`text`);min=ee(void 0,{transform:To});max=ee(void 0,{transform:To});minLength=ee(void 0);maxLength=ee(void 0);pattern=ee([]);step=ee(1);autocomplete=ee(void 0);inputmode=ee(void 0);spellcheck=ee(!0);multiline=ee(!1);rows=ee(3);autosize=ee(!0);minRows=ee(2);maxRows=ee(8);decreaseLabel=ee(`Decrease value`);increaseLabel=ee(`Increase value`);composing=!1;spinTimeout;spinInterval;constructor(){super(),b(ge).onDestroy(()=>this.stopSpin())}reset(){super.reset(),this.editingRaw.set(void 0),this.badInput.set(!1),this.stopSpin()}startSpin(t,e){e.preventDefault(),!(this.disabled()||this.isReadonly())&&(this.applyStep(t),this.spinTimeout=setTimeout(()=>{this.spinInterval=setInterval(()=>this.applyStep(t),80)},400))}stopSpin(){clearTimeout(this.spinTimeout),clearInterval(this.spinInterval)}clearPendingEdit(){super.clearPendingEdit(),this.editingRaw.set(void 0),this.badInput.set(!1)}onInput(t){if(this.composing||this.disabled()||this.isReadonly())return;let e=t.target;this.badInput.set(e.validity.badInput);let n=this.ngControl?.control?.updateOn;n===`blur`||n===`submit`?this.editingRaw.set(e.value):this.rawValue.set(e.value)}onCompositionStart(){this.composing=!0}onCompositionEnd(t){this.composing=!1,this.onInput(t)}onFocus(){this.isFocused.set(!0)}onBlur(){this.isFocused.set(!1),this.stopSpin(),this.markAsTouched()}commitPendingValue(t){let e=this.editingRaw();e===void 0||t===`blur`&&this.ngControl?.control?.updateOn===`submit`||(this.rawValue.set(e),this.editingRaw.set(void 0))}applyStep(t){let e=Number(this.displayedValue())||0,n=this.step()===`any`?1:Number(this.step()),o=Math.min(this.max()??1/0,Math.max(this.min()??-1/0,Number((e+t*n).toPrecision(12))));this.disabled()||this.isReadonly()||(this.badInput.set(!1),this.rawValue.set(String(o)))}static ɵfac=function(e){return new(e||i)};static ɵcmp=Fr$1({type:i,selectors:[[`bx-input-field`]],viewQuery:function(e,n){e&1&&Yy(n.labelText,ct,5),e&2&&fb$1()},inputs:{type:[1,`type`],min:[1,`min`],max:[1,`max`],minLength:[1,`minLength`],maxLength:[1,`maxLength`],pattern:[1,`pattern`],step:[1,`step`],autocomplete:[1,`autocomplete`],inputmode:[1,`inputmode`],spellcheck:[1,`spellcheck`],multiline:[1,`multiline`],rows:[1,`rows`],autosize:[1,`autosize`],minRows:[1,`minRows`],maxRows:[1,`maxRows`],decreaseLabel:[1,`decreaseLabel`],increaseLabel:[1,`increaseLabel`]},features:[yt],ngContentSelectors:wl,decls:13,vars:30,consts:[[3,`control`,`inline`,`tooltip`,`loading`,`hint`,`hintEnd`,`subscriptSizing`,`forId`],[`bxSurface`,``,1,`bx-input-wrapper`],[`bxTooltipTouch`,`longpress`,`placement`,`top`,1,`bx-input-container`,3,`bxTooltip`],[1,`bx-floating-label`],[`cdkAutofill`,``,1,`bx-native-input`,3,`required`,`disabled`,`readOnly`,`value`,`spellcheck`,`rows`,`cdkTextareaAutosize`,`cdkAutosizeMinRows`,`cdkAutosizeMaxRows`],[`cdkAutofill`,``,1,`bx-native-input`,3,`required`,`disabled`,`readOnly`,`value`,`spellcheck`,`type`],[1,`bx-input-actions`],[1,`bx-spinners-group`],[`bxTruncate`,``,1,`bx-input-label-text`],[`aria-hidden`,`true`,1,`bx-field-required`],[`cdkAutofill`,``,1,`bx-native-input`,3,`input`,`focus`,`blur`,`compositionstart`,`compositionend`,`cdkAutofill`,`required`,`disabled`,`readOnly`,`value`,`spellcheck`,`rows`,`cdkTextareaAutosize`,`cdkAutosizeMinRows`,`cdkAutosizeMaxRows`],[`cdkAutofill`,``,1,`bx-native-input`,3,`input`,`focus`,`blur`,`compositionstart`,`compositionend`,`cdkAutofill`,`required`,`disabled`,`readOnly`,`value`,`spellcheck`,`type`],[`type`,`button`,1,`bx-spin-btn`,3,`pointerdown`,`pointerup`,`pointercancel`,`pointerleave`,`click`,`disabled`],[`name`,`minus`,`size`,`16`],[`name`,`plus`,`size`,`16`]],template:function(e,n){e&1&&(ld$1(Ml),bo$1(0,`bx-form-field`,0)(1,`div`,1),dd$1(2),bo$1(3,`div`,2),SA(4,`bxTruncatedText`),od$1(5,Ol,4,3,`label`,3),od$1(6,Il,1,22,`textarea`,4)(7,Dl,1,23,`input`,5),Go(),bo$1(8,`div`,6),dd$1(9,1),od$1(10,kl,5,4,`div`,7),Go()(),dd$1(11,2,Nl),dd$1(12,3,Tl),Go()),e&2&&(xo$1(`control`,n.fieldControl)(`inline`,!0)(`tooltip`,n.tooltip())(`loading`,n.loading())(`hint`,n.hint())(`hintEnd`,n.hintEnd())(`subscriptSizing`,n.resolvedSubscriptSizing())(`forId`,n.controlId()),Xl$1(),tr$1(`is-invalid`,n.showError())(`is-outline`,n.resolvedAppearance()===`outline`)(`is-disabled`,n.disabled())(`is-readonly`,n.isReadonly())(`is-keyboard-focused`,n.keyboardFocused())(`has-spinners`,n.type()===`number`&&!n.multiline())(`is-floating`,n.isFloating()),Xl$1(2),xo$1(`bxTooltip`,AA(4,26,n.resolvedLabel(),n.labelTruncated(),n.resolvedTooltipOnTruncate())),Xl$1(2),nd$1(n.label()?5:-1),Xl$1(),nd$1(n.multiline()?6:7),Xl$1(4),nd$1(n.type()===`number`&&!n.multiline()?10:-1))},dependencies:[GC,ce,ZC,si,Nr,Pt,ct,on$1],styles:[`
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
}`]})};var li=class i{radios=/* @__PURE__ */ new Set;select(t){for(let e of this.radios)e!==t&&e.sharesGroup(t)&&e.writeValue(t.value())}static ɵfac=function(e){return new(e||i)};static ɵprov=B({token:i,factory:i.ɵfac,providedIn:`root`})};var di=new T(`BX_RADIO_GROUP`);var El=[`*`];function Rl(i,t){i&1&&(bo$1(0,`span`,7),lA(1,`*`),Go())}function Ll(i,t){if(i&1&&(bo$1(0,`span`,5),dd$1(1),lA(2),od$1(3,Rl,2,0,`span`,7),Go()),i&2){let e=Wo();Xl$1(2),mb$1(``,e.resolvedLabel(),` `),Xl$1(),nd$1(e.isFieldRequired()||e.group?.required()?3:-1)}}function Al(i,t){if(i&1&&(bo$1(0,`span`,6),lA(1),Go()),i&2){let e=Wo();xo$1(`id`,e.inputId()+`-readonly`),Xl$1(),ik(e.resolvedReadonlyDescription())}}var Pr=class i extends zC{radioRegistry=b(li);formSettingsService=b(Zt);i18n=b(VQ,{optional:!0});group=b(di,{optional:!0});inputId=G(()=>`bx-radio-${qK()}`);resolvedLabel=G(()=>{this.i18n?.version?.();let t=this.label();if(t)return UC(t)?this.i18n?.translate(t.key)??t.key:t});effectiveDisabled=G(()=>this.isDisabled()||!!this.group?.disabled());effectiveName=G(()=>this.group?.groupName()??this.name());resolvedReadonlyDescription=G(()=>LQ(this.readonlyDescription(),this.i18n));radioDescribedBy=G(()=>[this.group?.describedBy(),this.isReadonly()||this.group?.isReadonly()?`${this.inputId()}-readonly`:void 0].filter(Boolean).join(` `)||null);selected=G(()=>(this.group?this.group.value():this.internalValue())===this.value());resolvedSubscriptSizing=G(()=>this.subscriptSizing()??this.formSettingsService.settings().subscriptSizing);readonlyDescription=ee(`Read only`);labelPosition=ee(`after`);subscriptSizing=ee(void 0);value=ee.required();name=ee(``);showTooltip=!1;constructor(){super(),this.radioRegistry.radios.add(this),b(ge).onDestroy(()=>this.radioRegistry.radios.delete(this))}sharesGroup(t){let e=this.ngControl?.control;return e&&e===t.ngControl?.control?!0:!!this.name()&&this.name()===t.name()&&this.nativeElement.closest(`form`)===t.nativeElement.closest(`form`)&&e?.parent===t.ngControl?.control?.parent}onSelect(){if(this.effectiveDisabled()||this.isReadonly()||this.group?.isReadonly()){for(let t of this.radioRegistry.radios){if(t!==this&&(this.group?t.group!==this.group:!this.sharesGroup(t)))continue;let e=t.nativeElement.querySelector(`input[type="radio"]`);e&&(e.checked=t.selected())}return}this.group?this.group.select(this.value()):(this.updateValue(this.value()),this.radioRegistry.select(this))}onReadonlyClick(t){(this.isReadonly()||this.group?.isReadonly())&&t.preventDefault()}onControlPointerDown(){(this.isReadonly()||this.group?.isReadonly())&&this.keyboardFocused.set(!1)}onReadonlyKeyDown(t){if(!(this.isReadonly()||this.group?.isReadonly())||![`ArrowLeft`,`ArrowRight`,`ArrowUp`,`ArrowDown`,` `].includes(t.key)||(t.preventDefault(),t.key===` `))return;let e=t.target,n=(e.name?Array.from(e.ownerDocument.querySelectorAll(`input[type="radio"]`)):[e]).filter(a=>!a.disabled&&a.name===e.name&&a.form===e.form&&(!this.group||a.closest(`[role="radiogroup"]`)===e.closest(`[role="radiogroup"]`))),o=t.key===`ArrowLeft`||t.key===`ArrowUp`?-1:1;n[(n.indexOf(e)+o+n.length)%n.length]?.focus()}onBlur(){this.group?this.group.markTouched():this.markAsTouched()}static ɵfac=function(e){return new(e||i)};static ɵcmp=Fr$1({type:i,selectors:[[`bx-radio`]],inputs:{readonlyDescription:[1,`readonlyDescription`],labelPosition:[1,`labelPosition`],subscriptSizing:[1,`subscriptSizing`],value:[1,`value`],name:[1,`name`]},features:[yt],ngContentSelectors:El,decls:7,vars:29,consts:[[3,`inline`,`tooltip`,`error`,`loading`,`forId`,`subscriptSizing`],[1,`bx-inline-wrapper`],[`type`,`radio`,1,`bx-visually-hidden`,3,`click`,`keydown`,`change`,`blur`,`required`,`disabled`,`checked`],[`bxSurface`,``,1,`bx-radio-circle`,3,`bxSurfaceEmission`],[1,`bx-radio-inner`],[1,`bx-inline-label`],[1,`bx-visually-hidden`,3,`id`],[1,`bx-inline-required`]],template:function(e,n){e&1&&(ld$1(),bo$1(0,`bx-form-field`,0)(1,`label`,1)(2,`input`,2),br$1(`click`,function(a){return n.onReadonlyClick(a)})(`keydown`,function(a){return n.onReadonlyKeyDown(a)})(`change`,function(){return n.onSelect()})(`blur`,function(){return n.onBlur()}),Go(),bo$1(3,`div`,3),sd$1(4,`div`,4),Go(),od$1(5,Ll,4,2,`span`,5),Go(),od$1(6,Al,2,2,`span`,6),Go()),e&2&&(xo$1(`inline`,!0)(`tooltip`,n.tooltip())(`error`,n.errorMessage)(`loading`,n.loading())(`forId`,n.inputId())(`subscriptSizing`,n.resolvedSubscriptSizing()),Xl$1(),tr$1(`is-disabled`,n.effectiveDisabled())(`is-readonly`,n.isReadonly()||!!n.group?.isReadonly())(`is-keyboard-focused`,n.keyboardFocused())(`label-before`,n.labelPosition()===`before`),Xl$1(),xo$1(`required`,n.required()||!!n.group?.required())(`disabled`,n.effectiveDisabled())(`checked`,n.selected()),vo$1(`id`,n.inputId())(`name`,n.effectiveName()||null)(`data-testid`,n.dataTestId())(`aria-label`,n.ariaLabel())(`aria-describedby`,n.radioDescribedBy()),Xl$1(),tr$1(`is-checked`,n.selected())(`is-invalid`,!!n.errorMessage),xo$1(`bxSurfaceEmission`,n.errorMessage?`var(--bx-text-danger)`:`var(--bx-accent)`),Xl$1(2),nd$1(n.resolvedLabel()?5:-1),Xl$1(),nd$1(n.isReadonly()||n.group?.isReadonly()?6:-1))},dependencies:[GC,Wk,ce],styles:[`
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
}`],changeDetection:1})};var Fl=[[[`bx-error`]],[[`bx-hint`]],[[``,`bxIconStart`,``]]];var Vl=[`bx-error`,`bx-hint`,`[bxIconStart]`];var zl=[`ngProjectAs`,`bx-error`,5,[`bx-error`]];var Bl=[`ngProjectAs`,`bx-hint`,5,[`bx-hint`]];function Hl(i,t){i&1&&sd$1(0,`bx-loading-spinner`,11),i&2&&xo$1(`size`,16)(`decorative`,!0)}function Wl(i,t){i&1&&sd$1(0,`bx-icon`,12)}function jl(i,t){i&1&&dd$1(0,2,null,Wl,1,0)}function ql(i,t){if(i&1&&od$1(0,Hl,1,2,`bx-loading-spinner`,11)(1,jl,2,0),i&2){let e=t.$implicit;nd$1(e?0:1)}}function $l(i,t){if(i&1){let e=pb$1();bo$1(0,`button`,13),br$1(`click`,function(){al$1(e);let o=Wo();return cl$1(o.clear())}),sd$1(1,`bx-icon`,14),Go()}if(i&2){let e=Wo();xo$1(`disabled`,e.disabled()||e.isReadonly()),vo$1(`aria-label`,e.resolvedClearLabel())}}function Ul(i,t){if(i&1&&(bo$1(0,`span`,15),lA(1),Go(),bo$1(2,`span`,15),lA(3),Go()),i&2){let e=Wo();Xl$1(),ik(e.resolvedRetainedError()),Xl$1(2),ik(e.resolvedLoadingLabel()||e.resolvedLoadingAriaLabel())}}function Gl(i,t){if(i&1){let e=pb$1();bo$1(0,`button`,16),br$1(`click`,function(){al$1(e);let o=Wo();return cl$1(o.retrySearch())}),sd$1(1,`bx-icon`,17),lA(2),Go()}if(i&2){let e=Wo();JT(e.retryConfig().buttonClass??``),xo$1(`variant`,e.retryConfig().variant??`text`)(`color`,e.retryConfig().color??`primary`)(`outlined`,e.retryConfig().outlined??!1)(`disabled`,e.disabled()||e.isReadonly())(`loading`,e.isBusy()),vo$1(`aria-label`,e.resolvedRetryAriaLabel()),Xl$1(2),mb$1(``,e.resolvedRetryLabel(),` `)}}var tn=class i extends we{i18n=b(VQ,{optional:!0});retryError=$(void 0);retrying=G(()=>this.retryError()!==void 0);resolvedClearLabel=G(()=>LQ(this.clearLabel(),this.i18n));resolvedLoadError=G(()=>LQ(this.loadError(),this.i18n));resolvedLoadingLabel=G(()=>LQ(this.loadingLabel(),this.i18n));resolvedLoadingAriaLabel=G(()=>LQ(this.loadingAriaLabel(),this.i18n));resolvedRetryLabel=G(()=>LQ(this.retryLabel(),this.i18n));resolvedRetryAriaLabel=G(()=>LQ(this.retryConfig().ariaLabel,this.i18n)||this.resolvedRetryLabel());resolvedRetainedError=G(()=>LQ(this.retryError()??this.loadError(),this.i18n));isBusy=G(()=>this.loading()||this.pending());showRetry=G(()=>!!this.loadError()||this.retrying());showStatus=G(()=>!!this.resolvedLoadError()||this.isBusy()&&(!!this.resolvedLoadingLabel()||this.showRetry()));searchDescribedBy=G(()=>`${this.describedBy()} ${this.controlId()}-search-status`);isCompact=G(()=>!!this.label()||this.compact());clearLabel=ee(`Clear search`);autocomplete=ee(`off`);loadError=ee(void 0);loadingLabel=ee(void 0);loadingAriaLabel=ee(`Searching`);retryLabel=ee(`Retry search`);retryConfig=ee({});compact=ee(!1);search=Pk();retry=Pk();composing=!1;constructor(){super(),We$1(()=>{this.retrying()&&!this.loading()&&this.retryError.set(void 0)})}clear(){this.disabled()||this.isReadonly()||(this.retryError.set(void 0),this.updateValue(``),this.search.emit(``),this.focus())}retrySearch(){this.disabled()||this.isReadonly()||this.isBusy()||this.retrying()||!this.loadError()||(this.retryError.set(this.loadError()),this.focus(),this.retry.emit(this.internalValue()??``))}onInput(t){if(this.composing||this.disabled()||this.isReadonly())return;let e=t.target.value;this.retryError.set(void 0),this.updateValue(e),this.search.emit(e)}onCompositionStart(){this.composing=!0}onCompositionEnd(t){this.composing=!1,this.onInput(t)}onBlur(){this.markAsTouched()}static ɵfac=function(e){return new(e||i)};static ɵcmp=Fr$1({type:i,selectors:[[`bx-search-input`]],inputs:{clearLabel:[1,`clearLabel`],autocomplete:[1,`autocomplete`],loadError:[1,`loadError`],loadingLabel:[1,`loadingLabel`],loadingAriaLabel:[1,`loadingAriaLabel`],retryLabel:[1,`retryLabel`],retryConfig:[1,`retryConfig`],compact:[1,`compact`]},outputs:{search:`search`,retry:`retry`},features:[yt],ngContentSelectors:Vl,decls:17,vars:50,consts:[[`searchOverflow`,`bxTruncate`],[3,`control`,`label`,`tooltip`,`showLoadingIndicator`,`hint`,`hintEnd`,`hideRequiredMarker`,`subscriptSizing`,`forId`],[`bxSurface`,``,`bxTooltipTouch`,`longpress`,`placement`,`top`,1,`bx-search-input-wrapper`,3,`bxTooltip`],[`aria-hidden`,`true`,1,`bx-search-icon-left`],[3,`value`],[`type`,`search`,`bxTruncate`,``,1,`bx-native-search-input`,3,`input`,`blur`,`compositionstart`,`compositionend`,`id`,`placeholder`,`required`,`readOnly`,`disabled`,`value`],[`type`,`button`,1,`bx-search-clear-btn`,3,`disabled`],[1,`bx-search-feedback`],[1,`bx-search-status`],[`role`,`status`,3,`id`],[`bx-button`,``,`type`,`button`,3,`variant`,`color`,`outlined`,`class`,`disabled`,`loading`],[3,`size`,`decorative`],[`name`,`search`,`size`,`16`],[`type`,`button`,1,`bx-search-clear-btn`,3,`click`,`disabled`],[`name`,`x`,`size`,`16`],[`aria-hidden`,`true`,1,`bx-search-status-reserve`],[`bx-button`,``,`type`,`button`,3,`click`,`variant`,`color`,`outlined`,`disabled`,`loading`],[`name`,`rotate-cw`,`size`,`16`]],template:function(e,n){if(e&1&&(ld$1(Fl),bo$1(0,`bx-form-field`,1)(1,`div`,2),SA(2,`bxTruncatedText`),bo$1(3,`span`,3)(4,`bx-visual-transition`,4),rd$1(5,ql,2,1,`ng-template`),Go()(),bo$1(6,`input`,5,0),br$1(`input`,function(a){return n.onInput(a)})(`blur`,function(){return n.onBlur()})(`compositionstart`,function(){return n.onCompositionStart()})(`compositionend`,function(a){return n.onCompositionEnd(a)}),Go(),od$1(8,$l,2,2,`button`,6),Go(),bo$1(9,`div`,7)(10,`div`,8),od$1(11,Ul,4,2),bo$1(12,`span`,9),lA(13),Go()(),od$1(14,Gl,3,9,`button`,10),Go(),dd$1(15,0,zl),dd$1(16,1,Bl),Go()),e&2){let o=FT(7);xo$1(`control`,n.fieldControl)(`label`,n.label())(`tooltip`,n.tooltip())(`showLoadingIndicator`,!1)(`hint`,n.hint())(`hintEnd`,n.hintEnd())(`hideRequiredMarker`,n.resolvedHideRequiredMarker())(`subscriptSizing`,n.resolvedSubscriptSizing())(`forId`,n.controlId()),Xl$1(),tr$1(`is-compact`,n.isCompact())(`is-invalid`,n.showError())(`is-disabled`,n.disabled())(`is-readonly`,n.isReadonly())(`is-keyboard-focused`,n.keyboardFocused()),xo$1(`bxTooltip`,AA(2,46,o.text(),o.truncated(),n.resolvedTooltipOnTruncate())),Xl$1(3),xo$1(`value`,n.isBusy()&&!n.showRetry()),Xl$1(2),xo$1(`id`,n.controlId())(`placeholder`,n.resolvedPlaceholder())(`required`,n.effectiveRequired())(`readOnly`,n.isReadonly())(`disabled`,n.disabled())(`value`,n.internalValue()??``),vo$1(`name`,n.name()||null)(`data-testid`,n.dataTestId())(`autocomplete`,n.autocomplete())(`aria-label`,n.ariaLabel())(`aria-labelledby`,n.ariaLabelledBy())(`aria-describedby`,n.searchDescribedBy())(`aria-busy`,n.isBusy())(`aria-invalid`,n.showError()),Xl$1(2),nd$1(n.internalValue()&&!n.isReadonly()?8:-1),Xl$1(),tr$1(`has-status`,n.showStatus()),Xl$1(),tr$1(`cdk-visually-hidden`,!n.showStatus()),Xl$1(),nd$1(n.showRetry()?11:-1),Xl$1(),tr$1(`bx-search-error`,!n.isBusy()&&!!n.resolvedLoadError()),xo$1(`id`,n.controlId()+`-search-status`),Xl$1(),ik(n.isBusy()?n.resolvedLoadingLabel()||n.resolvedLoadingAriaLabel():n.resolvedLoadError()),Xl$1(),nd$1(n.showRetry()?14:-1)}},dependencies:[Wu$1,GC,ce,ZC,Et,_e,Pt,ct,on$1],styles:[`
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
}`]})};function Kl(i,t){if(i&1&&(bo$1(0,`span`,1),lA(1),Go()),i&2){let e=Wo();Xl$1(),ik(e.errorText())}}function Zl(i,t){if(i&1&&$s$1(0,2),i&2){let e=Wo();xo$1(`ngTemplateOutlet`,t)(`ngTemplateOutletContext`,e.context())}}function Xl(i,t){i&1&&sd$1(0,`bx-icon`,5)}function Yl(i,t){if(i&1){let e=pb$1();bo$1(0,`button`,4),br$1(`click`,function(){al$1(e);let o=Wo();return cl$1(o.request.emit())}),od$1(1,Xl,1,0,`bx-icon`,5),lA(2),Go()}if(i&2){let e=Wo();JT(e.config().buttonClass??``),xo$1(`variant`,e.config().variant??`text`)(`color`,e.config().color??`primary`)(`outlined`,e.config().outlined??!1)(`disabled`,e.disabled())(`loading`,e.loading()),vo$1(`aria-label`,e.accessibleLabel()),Xl$1(),nd$1(e.retry()?1:-1),Xl$1(),mb$1(` `,e.text(),` `)}}var ci=class i{i18n=b(VQ,{optional:!0});text=G(()=>{let t=this.config(),e=LQ(t.text??`Load more`,this.i18n),n=t.retryText,o=LQ(n,this.i18n),a=!!n&&(!UC(n)||o!==n.key);return this.loading()?LQ(t.loadingText??`Loading`,this.i18n):this.retry()&&a?o:e});accessibleLabel=G(()=>LQ(this.config().ariaLabel,this.i18n)||this.text());errorText=G(()=>LQ(this.error(),this.i18n));context=G(()=>({$implicit:this.text(),loading:this.loading(),disabled:this.disabled()||this.loading(),request:()=>this.request.emit()}));retry=ee(!1);visible=ee(!1);loading=ee(!1);disabled=ee(!1);error=ee(void 0);config=ee({});buttonTemplate=ee(void 0);request=Pk();static ɵfac=function(e){return new(e||i)};static ɵcmp=Fr$1({type:i,selectors:[[`bx-load-more-footer`]],hostVars:2,hostBindings:function(e,n){e&2&&(Uy(`hidden`,!n.visible()),vo$1(`aria-busy`,n.loading()?`true`:null))},inputs:{retry:[1,`retry`],visible:[1,`visible`],loading:[1,`loading`],disabled:[1,`disabled`],error:[1,`error`],config:[1,`config`],buttonTemplate:[1,`buttonTemplate`]},outputs:{request:`request`},decls:4,vars:4,consts:[[1,`bx-load-more-footer`],[`role`,`status`,1,`bx-load-more-error`],[3,`ngTemplateOutlet`,`ngTemplateOutletContext`],[`bx-button`,``,`type`,`button`,3,`variant`,`color`,`outlined`,`class`,`disabled`,`loading`],[`bx-button`,``,`type`,`button`,3,`click`,`variant`,`color`,`outlined`,`disabled`,`loading`],[`name`,`rotate-cw`,`size`,`16`]],template:function(e,n){if(e&1&&(bo$1(0,`div`,0),od$1(1,Kl,2,1,`span`,1),od$1(2,Zl,1,2,`ng-container`,2)(3,Yl,3,10,`button`,3),Go()),e&2){let o;JT(n.config().footerClass??``),Xl$1(),nd$1(n.errorText()?1:-1),Xl$1(),nd$1((o=n.buttonTemplate())?2:3,o)}},dependencies:[_e,Ta,ZC],styles:[`
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
}`]})};var Ye=class i{nativeElement=b(ke).nativeElement;viewContainerRef=b(fr$1);ngZone=b(le);destroyRef=b(ge);overflowing=$(!1);requested=$(!1);retrying=$(!1);keepVisible=$(!1);actionVisible=G(()=>!this.loadMoreSuppressed()&&(this.loadMoreHasMore()||!!this.loadMoreError()||this.keepVisible()&&this.loadMoreLoading())&&(this.loadMoreConfig().buttonMode===`always`||!this.overflowing()||this.keepVisible()||!!this.loadMoreError()));loadMoreHasMore=ee(!1);loadMoreLoading=ee(!1);loadMoreSuppressed=ee(!1);loadMoreDisabled=ee(!1);loadMoreError=ee(void 0);loadMoreConfig=ee({});loadMoreTemplate=ee(void 0);loadMoreRevision=ee(void 0);loadMore=Pk();footer;wasLoading=!1;previousRevision;constructor(){er$1(()=>this.mount()),Vk(()=>{let t=this.loadMoreLoading(),e=this.loadMoreRevision();(this.wasLoading&&!t||!t&&this.previousRevision!==e)&&this.complete(),this.wasLoading=t,this.previousRevision=e,this.updateFooter()})}complete(){this.requested.set(!1),this.retrying.set(!1),this.keepVisible.set(!1)}request(t=`button`){this.canRequest(t)&&(this.requested.set(!0),this.retrying.set(!!this.loadMoreError()),this.keepVisible.set(t!==`scroll`),this.loadMore.emit({source:this.loadMoreError()?`retry`:t}))}canRequest(t){return!this.loadMoreSuppressed()&&(this.loadMoreHasMore()||!!this.loadMoreError())&&!this.loadMoreDisabled()&&!this.loadMoreLoading()&&!this.requested()&&(t!==`scroll`||!this.loadMoreError())}mount(){this.footer=this.viewContainerRef.createComponent(ci),this.nativeElement.append(this.footer.location.nativeElement),this.footer.instance.request.subscribe(()=>this.request()),this.ngZone.runOutsideAngular(()=>{let t=WQ(this.nativeElement,this.nativeElement,()=>{let e=this.footer?.location.nativeElement?.offsetHeight??0;GQ(this.nativeElement,this.nativeElement,e).distance<=(this.loadMoreConfig().threshold??32)&&this.canRequest(`scroll`)&&this.ngZone.run(()=>this.request(`scroll`))},()=>this.measure());this.destroyRef.onDestroy(()=>{t(),this.footer?.destroy()})}),this.measure(),this.updateFooter()}measure(){let t=this.footer?.location.nativeElement?.offsetHeight??0,{overflowing:e}=GQ(this.nativeElement,this.nativeElement,t);e!==this.overflowing()&&this.ngZone.run(()=>this.overflowing.set(e))}updateFooter(){if(!this.footer)return;let t=this.actionVisible(),e=this.footer.location.nativeElement;!t&&e.contains(this.nativeElement.ownerDocument.activeElement)&&(this.nativeElement.hasAttribute(`tabindex`)||this.nativeElement.setAttribute(`tabindex`,`-1`),this.nativeElement.focus({preventScroll:!0})),this.footer.setInput(`visible`,t),this.footer.setInput(`loading`,this.loadMoreLoading()),this.footer.setInput(`disabled`,this.loadMoreDisabled()||this.requested()&&!this.loadMoreLoading()),this.footer.setInput(`retry`,!!this.loadMoreError()||this.retrying()),this.footer.setInput(`error`,this.loadMoreError()),this.footer.setInput(`config`,this.loadMoreConfig()),this.footer.setInput(`buttonTemplate`,this.loadMoreTemplate())}static ɵfac=function(e){return new(e||i)};static ɵdir=pe({type:i,selectors:[[``,`bxLoadMore`,``]],inputs:{loadMoreHasMore:[1,`loadMoreHasMore`],loadMoreLoading:[1,`loadMoreLoading`],loadMoreSuppressed:[1,`loadMoreSuppressed`],loadMoreDisabled:[1,`loadMoreDisabled`],loadMoreError:[1,`loadMoreError`],loadMoreConfig:[1,`loadMoreConfig`],loadMoreTemplate:[1,`loadMoreTemplate`],loadMoreRevision:[1,`loadMoreRevision`]},outputs:{loadMore:`loadMore`},exportAs:[`bxLoadMore`]})};var ui=class{constructor(t,e){this.element=t;this.contents=e}element;contents;styles=/* @__PURE__ */ new Map;motion;completion;originalInert=null;originalHidden=null;captured=!1;start(t,e,n){this.restore();let o=this.element.ownerDocument.defaultView?.getComputedStyle(this.element),a=this.element.parentElement,r=a&&this.element.ownerDocument.defaultView?.getComputedStyle(a),m=(a?Array.from(a.children).filter(re=>re!==this.element&&re.getClientRects().length>0):[]).length&&parseFloat(r?.rowGap??`0`)||0,x=this.element.offsetHeight,P=this.element.clientWidth*(t===`right`?.3:-.3),D=parseFloat(o?.paddingBlockStart??`0`)||0,L=parseFloat(o?.paddingBlockEnd??`0`)||0,V=parseFloat(o?.borderBlockStartWidth??`0`)||0,Q=parseFloat(o?.borderBlockEndWidth??`0`)||0,J=parseFloat(o?.marginBlockStart??`0`)||0,O=parseFloat(o?.marginBlockEnd??`0`)||0,Z=parseFloat(o?.opacity??`1`);this.completion=n,this.originalInert=this.element.getAttribute(`inert`),this.originalHidden=this.element.getAttribute(`aria-hidden`),this.captured=!0,this.element.setAttribute(`inert`,``),this.element.setAttribute(`aria-hidden`,`true`),this.style(this.element,`overflow`,`clip`),this.style(this.element,`box-sizing`,`border-box`),this.style(this.element,`min-block-size`,`0`);for(let re of this.contents)this.style(re,`block-size`,`${re.offsetHeight}px`);if(e){this.finish();return}this.motion=Zn$1([0],([re],[he])=>{let Ge=Math.max(0,Math.min(1,re/1e3)),Ie=Math.min(1,Ge/.55),rt=Math.max(0,(Ge-.15)/.85),ee=1-rt;this.style(this.element,`opacity`,String(Z*(1-Ie))),this.style(this.element,`block-size`,`${x*ee}px`),this.style(this.element,`padding-block-start`,`${D*ee}px`),this.style(this.element,`padding-block-end`,`${L*ee}px`),this.style(this.element,`border-block-start-width`,`${V*ee}px`),this.style(this.element,`border-block-end-width`,`${Q*ee}px`),this.style(this.element,`margin-block-start`,`${J*ee}px`),this.style(this.element,`margin-block-end`,`${O*ee-m*rt}px`);for(let Pi of this.contents)this.style(Pi,`translate`,`${P*Ie}px 0`);Math.abs(1e3-re)<1&&Math.abs(he)<10&&this.finish()},vr$1.snappy),this.motion.retarget([1e3])}finish(){let t=this.completion;t&&(this.completion=void 0,this.motion?.destroy(),this.motion=void 0,this.style(this.element,`display`,`none`),t())}restore(){this.completion=void 0,this.motion?.destroy(),this.motion=void 0;for(let[t,e]of this.styles)for(let[n,o]of e)o?t.style.setProperty(n,o):t.style.removeProperty(n);this.styles.clear(),this.captured&&(this.originalInert===null?this.element.removeAttribute(`inert`):this.element.setAttribute(`inert`,this.originalInert),this.originalHidden===null?this.element.removeAttribute(`aria-hidden`):this.element.setAttribute(`aria-hidden`,this.originalHidden)),this.captured=!1}style(t,e,n){let o=this.styles.get(t);o||(o=/* @__PURE__ */ new Map,this.styles.set(t,o)),o.has(e)||o.set(e,t.style.getPropertyValue(e)),Kn$1(t,{[e]:n})}};var Or={primary:`var(--bx-text-brand)`,accent:`var(--bx-text-accent)`,success:`var(--bx-text-success-readable, var(--bx-text-success))`,danger:`var(--bx-text-danger-readable, var(--bx-text-danger))`,info:`var(--bx-text-info-readable, var(--bx-text-info))`,warn:`var(--bx-text-warn-readable, var(--bx-text-warn))`,grayscale:`var(--bx-text-primary)`};var pi=80;var bi=400;var mi={staggerMs:50,maxStaggerMs:150,hiddenScale:.72,singleHiddenScale:.97,pop:.16,singlePop:.015,strain:.025,singleStrain:.008,velocityWeight:.1,travel:.12};var Qe={armThreshold:.65,commitThreshold:.78,destructiveCommitThreshold:.94,resistance:1.25,destructiveResistance:8,destructivePlateau:.15,resistanceEnd:.4,destructiveResistanceEnd:.9};var Ql=[`wideProbe`];var Jl=[`probe`];var ed=[`pagerProbe`];var td=[`captionProbe`];var nd=[`fullProbe`];var id=[`gapProbe`];var od=[`closeProbe`];var Ir=(i,t)=>t.id;function ad(i,t){if(i&1){let e=pb$1();bo$1(0,`span`,25),br$1(`pointerdown`,function(o){al$1(e);let a=Wo().$implicit,r=Wo();return cl$1(!r.canScroll(a,-1)&&o.preventDefault())}),bo$1(1,`button`,26),br$1(`click`,function(o){al$1(e);let a=Wo().$implicit,r=Wo();return o.stopPropagation(),cl$1(r.scrollActions(a,-1))}),sd$1(2,`bx-icon`,27),Go()()}if(i&2){let e=Wo().$implicit,n=Wo();xo$1(`inert`,n.fullActionId()!==null),Xl$1(),xo$1(`disabled`,!n.canScroll(e,-1)),vo$1(`tabindex`,n.interactive()?null:-1)(`aria-label`,n.previousText())}}function rd(i,t){if(i&1&&(bo$1(0,`span`,32,10),SA(2,`bxTruncatedText`),lA(3),Go()),i&2){let e=FT(1),n=Wo().$implicit,o=Wo(2);xo$1(`bxTooltip`,TA(2,2,o.actionText(n),e.truncated())),Xl$1(3),ik(o.actionText(n))}}function sd(i,t){if(i&1){let e=pb$1();bo$1(0,`div`,28)(1,`div`,29)(2,`button`,30),br$1(`click`,function(o){let a=al$1(e).$implicit,r=Wo(2);return cl$1(r.invoke(a,`swipe`,o))}),sd$1(3,`bx-icon`,31),od$1(4,rd,4,5,`span`,32),Go(),bo$1(5,`label`,33,9),SA(7,`bxTruncatedText`),lA(8),Go()()()}if(i&2){let e=t.$implicit,n=FT(6),o=Wo().$implicit,a=Wo();tr$1(`is-edge`,a.edge(o,e))(`is-unavailable`,a.disabled()||!!e.disabled||a.busy(e)),xo$1(`bxTooltipDwell`,a.tooltipDwell())(`bxTooltip`,a.compact()?a.actionText(e):``)(`inert`,a.fullActionId()!==null&&a.fullActionId()!==e.id),Xl$1(2),xo$1(`id`,a.actionId(o,e))(`color`,e.color??(e.role===`destructive`?`danger`:`primary`))(`disabled`,a.disabled()||!!e.disabled)(`loading`,a.busy(e)),vo$1(`tabindex`,a.interactive()?null:-1)(`role`,a.origin().getAttribute(`role`)===`menuitem`?`menuitem`:null)(`aria-label`,a.failed().includes(e.id)?a.actionText(e):a.text(e.ariaLabel??e.label)),Xl$1(),xo$1(`name`,a.failed().includes(e.id)?e.retryIcon??`rotate-cw`:a.completedAction()?.id===e.id?`check`:e.icon)(`contentTemplate`,!a.failed().includes(e.id)&&a.completedAction()?.id!==e.id?e.iconTemplate:void 0)(`size`,a.iconSize()),Xl$1(),nd$1(a.fullActionId()===e.id&&a.failed().includes(e.id)?4:-1),Xl$1(),xo$1(`bxTruncate`,!a.compact())(`hidden`,a.compact())(`bxTooltip`,TA(7,23,a.actionText(e),n.truncated()))(`for`,a.actionId(o,e)),Xl$1(3),ik(a.actionText(e))}}function ld(i,t){if(i&1){let e=pb$1();bo$1(0,`span`,25),br$1(`pointerdown`,function(o){al$1(e);let a=Wo().$implicit,r=Wo();return cl$1(!r.canScroll(a,1)&&o.preventDefault())}),bo$1(1,`button`,26),br$1(`click`,function(o){al$1(e);let a=Wo().$implicit,r=Wo();return o.stopPropagation(),cl$1(r.scrollActions(a,1))}),sd$1(2,`bx-icon`,34),Go()()}if(i&2){let e=Wo().$implicit,n=Wo();xo$1(`inert`,n.fullActionId()!==null),Xl$1(),xo$1(`disabled`,!n.canScroll(e,1)),vo$1(`tabindex`,n.interactive()?null:-1)(`aria-label`,n.nextText())}}function dd(i,t){if(i&1){let e=pb$1();bo$1(0,`div`,21),od$1(1,ad,3,4,`span`,22),bo$1(2,`div`,23,8),br$1(`scroll`,function(){al$1(e);let o=Wo();return cl$1(o.updateScroll())}),ab$1(4,sd,9,26,`div`,24,Ir),Go(),od$1(6,ld,3,4,`span`,22),Go()}if(i&2){let e=t.$implicit,n=Wo();ka(`visibility`,n.side()===e?`visible`:`hidden`)(`--%NS%bx-action-reveal`,n.reveal()+`px`)(`inline-size`,n.laneWidth(e),`px`),tr$1(`has-overflow`,n.overflows(e))(`is-stretching`,n.side()===e&&n.stretch()>0)(`can-scroll-before`,n.canScroll(e,-1))(`can-scroll-after`,n.canScroll(e,1))(`bx-swipe-left`,e===`left`)(`bx-swipe-right`,e===`right`),xo$1(`inert`,n.side()!==e),vo$1(`aria-hidden`,n.side()!==e||!n.interactive()?!0:null),Xl$1(),nd$1(n.overflows(e)?1:-1),Xl$1(),vo$1(`data-side`,e),Xl$1(2),cb$1(n.actions(e)),Xl$1(2),nd$1(n.overflows(e)?6:-1)}}function cd(i,t){if(i&1){let e=pb$1();bo$1(0,`bx-menu-item`,37),br$1(`action`,function(o){let a=al$1(e).$implicit,r=Wo(2);return cl$1(r.invoke(a,`context`,o))}),Go()}if(i&2){let e=t.$implicit,n=Wo(2);ka(`--%NS%bx-menu-item-color`,n.foreground(e)),xo$1(`label`,n.actionText(e))(`ariaLabel`,n.failed().includes(e.id)?n.actionText(e):e.ariaLabel)(`wrapLabel`,!0)(`icon`,n.failed().includes(e.id)?e.retryIcon??`rotate-cw`:n.completedAction()?.id===e.id?`check`:e.icon)(`iconTemplate`,!n.failed().includes(e.id)&&n.completedAction()?.id!==e.id?e.iconTemplate:void 0)(`danger`,e.role===`destructive`)(`disabled`,n.disabled()||!!e.disabled)(`loading`,n.busy(e))}}function ud(i,t){if(i&1&&(bo$1(0,`bx-menu`,35),ab$1(1,cd,1,10,`bx-menu-item`,36,Ir),Go()),i&2){let e=Wo();Xl$1(),cb$1(e.allActions())}}var gi=class i{nativeElement=b(ke).nativeElement;i18n=b(VQ,{optional:!0});bxA11yService=b(Br$1);measured=$({left:0,right:0,full:0,column:0});contextMenu=Sz.required(qi);wideProbe=Sz.required(`wideProbe`);probe=Sz.required(`probe`);pagerProbe=Sz.required(`pagerProbe`);captionProbe=Sz.required(`captionProbe`);fullProbe=Sz.required(`fullProbe`);gapProbe=Sz.required(`gapProbe`);closeProbe=Sz.required(`closeProbe`);instanceId=qK();iconSize=$(20);scrollRevision=$(0);compact=$(!1);capacity=$(1);allActions=G(()=>[...this.left(),...this.right()]);previousText=G(()=>this.text(this.previousLabel()));nextText=G(()=>this.text(this.nextLabel()));groups=G(()=>[`left`,`right`]);left=ee([]);right=ee([]);side=ee(null);reveal=ee(0);stretch=ee(0);armed=ee(!1);armThreshold=ee(.65);commitThreshold=ee(.78);readyLabel=ee(`Release to activate`);interactive=ee(!1);pending=ee([]);failed=ee([]);fullActionId=ee(null);retryLabel=ee(`Retry`);loadingLabel=ee(`Working`);completedAction=ee(null);completedLabel=ee(`Done`);disabled=ee(!1);previousLabel=ee(`Previous actions`);nextLabel=ee(`Next actions`);tooltipDwell=ee(bi);origin=ee.required();selected=Pk();layoutChange=Pk();pagingMotion;pagingLane;pagingTarget=0;measuredColumn=0;stretchMotion;stretchIntent=0;entranceMotions=[];entranceTimers=[];entranceStarted=/* @__PURE__ */ new Set;entranceSettled=/* @__PURE__ */ new Set;entranceSide=null;entranceSignature=``;entranceNodes=[];constructor(){Vk(()=>{let t=this.side(),e=this.bxA11yService.isReducedMotion(),n=JSON.stringify(t?this.actions(t).map(o=>o.id):[]);t?((this.entranceSide!==t||this.entranceSignature!==n)&&this.startEntrance(t,n),this.reveal(),this.advanceEntrance(t,e)):this.resetEntrance()}),Vk(()=>{let t=this.side(),e=this.stretch();this.failed(),this.fullActionId();let n=this.bxA11yService.isReducedMotion(),o=t?this.measured().full-this.measured()[t]:0,a=o>0?Math.max(0,Math.min(1,e/o)):0,r=Math.max(0,Math.min(1,(a-this.armThreshold())/Math.max(.01,this.commitThreshold()-this.armThreshold())));if(this.stretchMotion??=Zn$1([0],([u])=>this.paintStretchIntent(u),vr$1.snappy),this.stretchMotion.retarget([r],n),this.paintStretchIntent(this.stretchIntent),t&&e>0){let u=this.nativeElement.querySelector(`[data-side="${t}"]`);this.stopPaging(),u&&(u.scrollLeft=t===`left`?u.scrollWidth-u.clientWidth:0)}}),Vk(()=>{let t=this.bxA11yService.isReducedMotion();this.side()===null?this.stopPaging():t&&this.pagingMotion?.retarget([this.pagingTarget],!0)}),Vk(t=>{let e=new AbortController,n=o=>{o.target instanceof Node&&this.pagingLane?.contains(o.target)&&this.stopPaging()};for(let o of[`pointerdown`,`wheel`,`focusin`])this.nativeElement.addEventListener(o,n,{signal:e.signal,capture:!0,passive:!0});t(()=>e.abort())}),b(ge).onDestroy(()=>{this.stopPaging(),this.resetEntrance(),this.stretchMotion?.destroy()}),Vk(t=>{this.left(),this.right(),this.previousText(),this.nextText(),this.i18n?.version?.();let e=()=>this.measure(),n=new ResizeObserver(e);n.observe(this.nativeElement),n.observe(this.probe().nativeElement),n.observe(this.captionProbe().nativeElement),n.observe(this.gapProbe().nativeElement),n.observe(this.pagerProbe().nativeElement),n.observe(this.fullProbe().nativeElement),n.observe(this.closeProbe().nativeElement),e(),t(()=>n.disconnect())})}openContext(t){this.contextMenu().openFrom(this.origin(),t)}closeContext(){this.contextMenu().close()}isEntranceComplete(t){if(this.entranceSide!==t||this.reveal()<this.measured()[t]-.5)return!1;let n=this.nativeElement.querySelector(`[data-side="${t}"]`)?.getBoundingClientRect();if(!n)return!1;let o=this.entranceNodes.filter(a=>{let r=a.parentElement?.getBoundingClientRect();return r&&Math.min(r.right,n.right)-Math.max(r.left,n.left)>1});return o.length>0&&o.every(a=>this.entranceSettled.has(a))}canFullSwipe(t){let e=this.nativeElement.querySelector(`[data-side="${t}"]`),n=e?.querySelectorAll(`.bx-swipe-action`),o=t===`left`?n?.[n.length-1]:n?.[0];if(!e||!o||this.measured().full<=this.measured()[t]+this.measured().column*.4)return!1;let a=e.getBoundingClientRect(),r=o.getBoundingClientRect();return r.left>=a.left-1&&r.right<=a.right+1}text(t){return this.i18n?.version?.(),LQ(t,this.i18n)}actions(t){return t===`left`?this.left():this.right()}laneWidth(t){return this.measured()[t]+(this.side()===t?this.stretch():0)}edge(t,e){let n=this.actions(t);return e.id===(t===`left`?n[n.length-1]?.id:n[0]?.id)}overflows(t){return this.actions(t).length>this.capacity()}actionId(t,e){return`${this.instanceId}-${t}-${encodeURIComponent(e.id)}`}updateScroll(){this.scrollRevision.update(t=>t+1)}canScroll(t,e){this.scrollRevision();let n=this.nativeElement.querySelector(`[data-side="${t}"]`);return!!n&&(e<0?n.scrollLeft>1:n.scrollLeft+n.clientWidth<n.scrollWidth-1)}scrollActions(t,e){let n=this.nativeElement.querySelector(`[data-side="${t}"]`);if(!n)return;this.pagingLane!==n&&(this.stopPaging(),this.pagingLane=n,this.pagingTarget=n.scrollLeft);let o=this.probe().nativeElement.getBoundingClientRect().width,a=Math.max(1,Math.floor(n.clientWidth/Math.max(1,o))),r=n.getBoundingClientRect().left+n.clientLeft,u=parseFloat(n.ownerDocument.defaultView?.getComputedStyle(n).scrollPaddingLeft??`0`)||0,m=n.scrollWidth-n.clientWidth,x=[...new Set(Array.from(n.querySelectorAll(`.bx-swipe-action`)).map(D=>Math.max(0,Math.min(m,D.getBoundingClientRect().left-r+n.scrollLeft-u))))];if(!x.length)return;let P=x.reduce((D,L,V)=>Math.abs(L-this.pagingTarget)<Math.abs(x[D]-this.pagingTarget)?V:D,0);this.pagingTarget=x[Math.max(0,Math.min(x.length-1,P+e*a))],n.classList.add(`is-paging`),this.pagingMotion??=Zn$1([n.scrollLeft],([D],[L])=>{n.scrollLeft=Math.max(0,Math.min(n.scrollWidth-n.clientWidth,D)),this.updateScroll(),Math.abs(D-this.pagingTarget)<.1&&Math.abs(L)<.1&&n.classList.remove(`is-paging`)},vr$1.snappy),this.pagingMotion.retarget([this.pagingTarget],this.bxA11yService.isReducedMotion())}busy(t){return!!t.loading||this.pending().includes(t.id)}foreground(t){return Or[t.color??(t.role===`destructive`?`danger`:`primary`)]}invoke(t,e,n){n.stopPropagation(),!(this.disabled()||t.disabled||this.busy(t))&&this.selected.emit({action:t,source:e,event:n})}actionText(t){return this.failed().includes(t.id)?t.retryLabel?this.text(t.retryLabel):`${this.text(this.retryLabel())} ${this.text(t.label)}`:this.text(t.label)}statusText(){let t=this.completedAction();if(t)return`${this.text(t.label)}: ${this.text(this.completedLabel())}`;let e=this.allActions().find(n=>n.id===this.fullActionId());return e&&this.busy(e)?`${this.text(e.label)}: ${this.text(this.loadingLabel())}`:e&&this.failed().includes(e.id)?this.actionText(e):this.armed()?this.text(this.readyLabel()):``}paintStretchIntent(t){this.stretchIntent=Math.max(0,Math.min(1,t));let e=this.side();for(let n of this.groups()){let o=this.nativeElement.querySelector(`[data-side="${n}"]`),a=Array.from(o?.querySelectorAll(`.bx-swipe-action`)??[]),r=n===`left`?a[a.length-1]:a[0],u=n===e?this.stretch():0,m=this.measured().full-this.measured()[n],x=u>0&&m>0?Math.max(0,Math.min(1,u/m)):0;for(let P of a){let D=P===r,L=P.querySelector(`[data-bx-swipe-glyph]`),V=P.querySelector(`.bx-swipe-action-label`),Q=P.querySelector(`button`);if(P.style.setProperty(`--bx-swipe-stretch-extra`,`${D?u:0}px`),P.style.opacity=D?`1`:String(1-x),L){let J=P.querySelector(`.bx-swipe-retry-label`),O=D&&u>0&&Q&&!J?Math.max(0,(Q.clientWidth-L.clientWidth)/2-this.iconSize()):0,Z=Q?.querySelector(`.bx-btn-content-wrapper`);Z&&(Z.style.translate=`${O*this.stretchIntent*(n===`left`?-1:1)}px 0`)}V&&(V.style.opacity=D&&u>0?String(1-this.stretchIntent):``)}}}startEntrance(t,e){this.resetEntrance();let n=Array.from(this.nativeElement.querySelectorAll(`[data-side="${t}"] .bx-swipe-action-visual`)),o=this.nativeElement.ownerDocument.defaultView?.getComputedStyle(this.nativeElement).direction===`rtl`;this.entranceNodes=o?n.reverse():n,this.entranceSide=t,this.entranceSignature=e,this.entranceMotions=this.entranceNodes.map((a,r)=>{let u=Zn$1([0],([m],[x])=>{if((m!==1e3||x!==0)&&Math.abs(m-1e3)<2&&Math.abs(x)<20){this.entranceMotions[r]?.retarget([1e3],!0);return}this.paintEntrance(a,m/1e3,x/1e3,o)},vr$1.elastic);return u.track([0]),u})}advanceEntrance(t,e){let n=this.nativeElement.ownerDocument.defaultView,o=this.nativeElement.getBoundingClientRect(),a=t===`right`?o.left+this.reveal():o.right-this.reveal();this.entranceNodes.forEach((r,u)=>{if(e){this.entranceStarted.add(u),this.entranceMotions[u].retarget([1e3],!0);return}if(this.entranceStarted.has(u)||!n)return;let m=r.parentElement?.getBoundingClientRect();m&&(t===`right`?a>m.left+m.width*.2:a<m.right-m.width*.2)&&(this.entranceStarted.add(u),this.entranceTimers.push(n.setTimeout(()=>this.entranceMotions[u]?.retarget([1e3],this.bxA11yService.isReducedMotion()),Math.min(mi.maxStaggerMs,u*mi.staggerMs))))})}paintEntrance(t,e,n,o){e===1&&n===0?this.entranceSettled.add(t):this.entranceSettled.delete(t);let a=this.bxA11yService.isReducedMotion(),r=this.entranceNodes.length===1,u=mi,m=Math.max(0,Math.min(1,e)),x=r?u.singleHiddenScale:u.hiddenScale,P=r?u.singlePop:u.pop,D=a?1:x+(1-x)*Math.max(0,Math.min(1.15,e))+P*Math.sin(Math.PI*m),V=1+(a?0:(r?u.singleStrain:u.strain)*Math.max(-1,Math.min(1,n*u.velocityWeight))),Q=a?0:(o?1:-1)*t.clientWidth*u.travel*(1-m);Kn$1(t,{opacity:`1`,transform:`translate3d(${Q}px, 0, 0) scale(${D*V}, ${D/V})`},!0);for(let J of t.querySelectorAll(`[data-bx-swipe-glyph], .bx-swipe-action-label`))Kn$1(J,{transform:`scale(${1/V}, ${V})`})}resetEntrance(){for(let t of this.entranceTimers)this.nativeElement.ownerDocument.defaultView?.clearTimeout(t);for(let t of this.entranceMotions)t.destroy();this.entranceTimers=[],this.entranceMotions=[],this.entranceStarted.clear(),this.entranceSettled.clear();for(let t of this.entranceNodes){Kn$1(t,{opacity:`1`,transform:`none`},!0);for(let e of t.querySelectorAll(`[data-bx-swipe-glyph], .bx-swipe-action-label`))Kn$1(e,{transform:`none`})}this.entranceNodes=[],this.entranceSide=null,this.entranceSignature=``}stopPaging(){this.pagingMotion?.destroy(),this.pagingMotion=void 0,this.pagingLane?.classList.remove(`is-paging`),this.pagingLane=void 0}measure(){let t=this.probe().nativeElement,e=this.captionProbe().nativeElement.getBoundingClientRect().height,n=this.nativeElement.querySelector(`.bx-swipe-action`),o=n?parseFloat(this.nativeElement.ownerDocument.defaultView?.getComputedStyle(n).rowGap??`0`):0,a=t.getBoundingClientRect().height,r=this.nativeElement.clientHeight<a+e+o,u=Math.max(0,Math.min(a,this.nativeElement.clientHeight-(r?o:e+o))),m=`${u}px`;this.nativeElement.style.getPropertyValue(`--bx-swipe-capsule-height`)!==m&&this.nativeElement.style.setProperty(`--bx-swipe-capsule-height`,m),this.iconSize.set(Math.max(12,Math.min(20,Math.floor(u*.65))));let x=this.gapProbe().nativeElement.getBoundingClientRect().width,P=this.closeProbe().nativeElement.getBoundingClientRect().width,D=Math.max(0,this.nativeElement.clientWidth-P),L=Math.max(0,this.nativeElement.clientWidth-Math.min(P,a)),V=this.wideProbe().nativeElement.getBoundingClientRect().width,Q=Math.max(this.left().length,this.right().length)*V+x>L,J=r||Q;this.compact()!==J&&this.compact.set(J);let O=Q?`1`:`2.5`;this.nativeElement.style.getPropertyValue(`--bx-swipe-capsule-ratio`)!==O&&this.nativeElement.style.setProperty(`--bx-swipe-capsule-ratio`,O);let Z=t.getBoundingClientRect().width,re=Q?Math.max(1,Math.floor((D-x)/Math.max(1,Z))):Math.max(1,this.left().length,this.right().length),he=this.pagerProbe().nativeElement.getBoundingClientRect().width,Ge=rt=>{if(!rt)return 0;let ee=rt*Z+x;return Q?ee<=D?ee:L<Z+he+x?0:Math.min(L,Math.max(D,Z+he+x)):Math.min(ee,L)},Ie={left:Ge(this.left().length),right:Ge(this.right().length),full:this.fullProbe().nativeElement.getBoundingClientRect().width,column:Z};re!==this.capacity()&&this.capacity.set(re),(Ie.left!==this.measured().left||Ie.right!==this.measured().right||Ie.full!==this.measured().full||Z!==this.measuredColumn)&&(this.stopPaging(),this.measuredColumn=Z,this.measured.set(Ie)),this.layoutChange.emit(Ie)}static ɵfac=function(e){return new(e||i)};static ɵcmp=Fr$1({type:i,selectors:[[`bx-swipe-action-panel`]],viewQuery:function(e,n){e&1&&Yy(n.contextMenu,qi,5)(n.wideProbe,Ql,5)(n.probe,Jl,5)(n.pagerProbe,ed,5)(n.captionProbe,td,5)(n.fullProbe,nd,5)(n.gapProbe,id,5)(n.closeProbe,od,5),e&2&&fb$1(8)},inputs:{left:[1,`left`],right:[1,`right`],side:[1,`side`],reveal:[1,`reveal`],stretch:[1,`stretch`],armed:[1,`armed`],armThreshold:[1,`armThreshold`],commitThreshold:[1,`commitThreshold`],readyLabel:[1,`readyLabel`],interactive:[1,`interactive`],pending:[1,`pending`],failed:[1,`failed`],fullActionId:[1,`fullActionId`],retryLabel:[1,`retryLabel`],loadingLabel:[1,`loadingLabel`],completedAction:[1,`completedAction`],completedLabel:[1,`completedLabel`],disabled:[1,`disabled`],previousLabel:[1,`previousLabel`],nextLabel:[1,`nextLabel`],tooltipDwell:[1,`tooltipDwell`],origin:[1,`origin`]},outputs:{selected:`selected`,layoutChange:`layoutChange`},decls:22,vars:3,consts:[[`pagerProbe`,``],[`captionProbe`,``],[`fullProbe`,``],[`gapProbe`,``],[`wideProbe`,``],[`probe`,``],[`closeProbe`,``],[`contextTemplate`,``],[`lane`,``],[`caption`,`bxTruncate`],[`retryCaption`,`bxTruncate`],[`aria-hidden`,`true`,1,`bx-swipe-pager-probe`],[`aria-hidden`,`true`,1,`bx-swipe-caption-probe`],[`aria-hidden`,`true`,1,`bx-swipe-full-probe`],[`aria-hidden`,`true`,1,`bx-swipe-gap-probe`],[`aria-hidden`,`true`,1,`bx-swipe-wide-probe`],[`aria-hidden`,`true`,1,`bx-swipe-probe`],[`aria-hidden`,`true`,1,`bx-swipe-close-probe`],[3,`bxContextMenu`,`bxContextMenuLongPress`],[1,`bx-swipe-action-region`,3,`has-overflow`,`is-stretching`,`can-scroll-before`,`can-scroll-after`,`bx-swipe-left`,`bx-swipe-right`,`visibility`,`--%NS%bx-action-reveal`,`inline-size`,`inert`],[`role`,`status`,1,`bx-swipe-status`],[1,`bx-swipe-action-region`,3,`inert`],[1,`bx-swipe-page-slot`,3,`inert`],[`role`,`group`,1,`bx-swipe-lane`,3,`scroll`],[`bxTooltipTouch`,`none`,1,`bx-swipe-action`,3,`bxTooltipDwell`,`bxTooltip`,`is-edge`,`inert`,`is-unavailable`],[1,`bx-swipe-page-slot`,3,`pointerdown`,`inert`],[`bx-button`,``,`type`,`button`,`variant`,`icon`,`color`,`grayscale`,1,`bx-swipe-page`,3,`click`,`disabled`],[`name`,`chevron-left`,`size`,`16`],[`bxTooltipTouch`,`none`,1,`bx-swipe-action`,3,`bxTooltipDwell`,`bxTooltip`,`inert`],[1,`bx-swipe-action-visual`],[`bx-button`,``,`type`,`button`,`variant`,`filled`,`shape`,`capsule`,`data-bx-selection-exclude`,``,3,`click`,`id`,`color`,`disabled`,`loading`],[`data-bx-swipe-glyph`,``,3,`name`,`contentTemplate`,`size`],[`bxTooltipTouch`,`none`,`bxTruncate`,``,1,`bx-swipe-retry-label`,3,`bxTooltip`],[`dir`,`auto`,`bxTooltipTouch`,`none`,1,`bx-swipe-action-label`,3,`bxTruncate`,`hidden`,`bxTooltip`,`for`],[`name`,`chevron-right`,`size`,`16`],[1,`bx-swipe-context-actions`],[3,`label`,`ariaLabel`,`wrapLabel`,`icon`,`iconTemplate`,`danger`,`disabled`,`loading`,`--%NS%bx-menu-item-color`],[3,`action`,`label`,`ariaLabel`,`wrapLabel`,`icon`,`iconTemplate`,`danger`,`disabled`,`loading`]],template:function(e,n){if(e&1&&(sd$1(0,`span`,11,0),bo$1(2,`span`,12,1),lA(4,`M`),Go(),sd$1(5,`span`,13,2)(7,`span`,14,3)(9,`span`,15,4)(11,`span`,16,5)(13,`span`,17,6),bo$1(15,`div`,18),ab$1(16,dd,7,23,`div`,19,TT),Go(),rd$1(18,ud,3,0,`ng-template`,null,7,RA),bo$1(20,`span`,20),lA(21),Go()),e&2){let o=FT(19);Xl$1(15),xo$1(`bxContextMenu`,o)(`bxContextMenuLongPress`,!1),Xl$1(),cb$1(n.groups()),Xl$1(5),ik(n.statusText())}},dependencies:[_e,ZC,Zi$1,Ki,qi,Pt,ct,on$1],styles:[`
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
}`]})};function Po(i,t,e,n=0,o=.4){let a=Math.max(0,Math.min(.35,n)),r=Math.max(0,t*Math.max(a+.01,Math.min(1,o)));if(r===0)return i;let u=a*t,m=Math.min(i,u),x=r-u,D=Math.max(0,Math.min(i-u,x))/x;return i+(e-1)*(m+x*(D-D*D+D*D*D/3))}function Dr(i,t,e,n=0,o=.4){let a=0,r=i;for(let u=0;u<28;u++){let m=(a+r)/2;Po(m,t,e,n,o)<i?a=m:r=m}return(a+r)/2}function Oo(i,t,e){return 1+(i-1)*(t>0?Math.min(1,Math.max(0,e)/t):1)}var hi=class i{owner;dismiss;activate(t,e){this.owner!==t&&this.dismiss?.(),this.owner=t,this.dismiss=e}release(t){this.owner===t&&(this.owner=void 0,this.dismiss=void 0)}static ɵfac=function(e){return new(e||i)};static ɵprov=B({token:i,factory:i.ɵfac,providedIn:`root`})};var ft=class i{nativeElement=b(ke).nativeElement;viewContainerRef=b(fr$1);destroyRef=b(ge);bxA11yService=b(Br$1);menuItem=b(Ki,{self:!0,optional:!0});contextMenuDirective=b(qi,{optional:!0,self:!0});swipeActionsService=b(hi);phase=$(`closed`);pending=$([]);working=$([]);completed=$(null);failed=$([]);fullOperation=$(null);originalStyles=/* @__PURE__ */ new Map;swipeState=this.phase.asReadonly();swipeContent=ee(void 0);swipeDisabled=ee(!1);swipeLoading=ee(!1);leftSwipeActions=ee([]);rightSwipeActions=ee([]);swipePreviousLabel=ee(`Previous actions`);swipeNextLabel=ee(`Next actions`);swipeTooltipDwell=ee(bi);swipeFullAction=ee(!0);swipeCompletion=ee(`collapse`);swipeDismissFocus=ee(void 0);swipeRetryLabel=ee(`Retry`);swipeLoadingLabel=ee(`Working`);swipeCompletedLabel=ee(`Done`);swipeDismissed=Pk();swipeAction=Pk();swipeActionError=Pk();dismissal;panel;row;originalRowActive=null;movable;motion;listeners;gestureListeners;visibilityObserver;gesture;wheelGesture;completeAfterWheel;wheelTimer;layout={left:0,right:0,full:0,column:0};stretchSide=null;stretchPermitted=!1;position=0;destination=0;motionSide=null;settleMinimum=0;settleMaximum=0;suppressClick=!1;commandRevision=0;leftConfiguration;rightConfiguration;constructor(){Vk(()=>{let t=this.leftSwipeActions(),e=this.rightSwipeActions(),n=this.swipeDisabled()||this.swipeLoading()||!!this.menuItem?.disabled()||!!this.menuItem?.loading(),o=this.bxA11yService.isReducedMotion(),a=this.swipePreviousLabel(),r=this.swipeNextLabel(),u=this.swipeTooltipDwell(),m=this.working(),x=this.completed(),P=this.swipeCompletedLabel(),D=this.failed(),L=this.fullOperation(),V=this.swipeRetryLabel(),Q=this.swipeLoadingLabel(),J=this.swipeContent(),O=this.fullOptions();de(()=>{let Z=t!==this.leftConfiguration||e!==this.rightConfiguration;if(this.leftConfiguration=t,this.rightConfiguration=e,!t.length&&!e.length){this.teardown();return}J&&this.movable&&J!==this.movable&&this.teardown(),this.mount(),this.panel?.setInput(`left`,t),this.panel?.setInput(`right`,e),this.panel?.setInput(`disabled`,n),this.panel?.setInput(`previousLabel`,a),this.panel?.setInput(`nextLabel`,r),this.panel?.setInput(`tooltipDwell`,u),this.panel?.setInput(`pending`,m),this.panel?.setInput(`completedAction`,x),this.panel?.setInput(`completedLabel`,P),this.panel?.setInput(`failed`,D),this.panel?.setInput(`fullActionId`,L?.id??null),this.panel?.setInput(`retryLabel`,V),this.panel?.setInput(`loadingLabel`,Q),this.panel?.setInput(`readyLabel`,O.readyLabel),this.panel?.setInput(`armThreshold`,O.armThreshold),this.panel?.setInput(`commitThreshold`,O.commitThreshold),!O.enabled&&(this.gesture||this.wheelGesture)&&(this.cancelGesture(),this.cancelWheel()),n&&(this.closeSwipeActions(),this.panel?.instance.closeContext()),Z&&!this.wheelGesture?.committed&&!this.fullOperation()&&(this.cancelGesture(),this.cancelWheel()),o&&this.dismissal?.finish(),o&&!this.gesture&&!this.wheelGesture&&this.motion?.retarget([this.destination],!0),this.panel?.changeDetectorRef.detectChanges()})}),this.destroyRef.onDestroy(()=>this.teardown())}closeSwipeActions(){if(!(this.pending().length||this.phase()===`dismissing`||this.phase()===`dismissed`)){if(this.fullOperation.set(null),!this.motion){this.phase.set(`closed`);return}this.cancelGesture(),this.cancelWheel(),this.settle(0)}}restoreSwipeRow(){this.phase()===`dismissed`&&(this.dismissal?.restore(),this.fullOperation.set(null),this.stretchSide=null,this.position=0,this.destination=0,this.motionSide=null,this.phase.set(`closed`),this.motion?.track([0],[0]),this.panel?.setInput(`interactive`,!1))}mount(){if(this.panel)return;let t=this.swipeContent()??this.nativeElement.querySelector(`[bxSwipeContent]`)??this.nativeElement.querySelector(`.bx-menu-item-btn`),e=this.menuItem?this.nativeElement.querySelector(`.bx-menu-item-btn`):t?.closest(`button,a[href],[tabindex]`)??t,n=this.nativeElement.ownerDocument.defaultView;if(!e||!t||!n||e===this.nativeElement||t===this.nativeElement||!this.nativeElement.contains(t))return;this.row=e,this.originalRowActive=e.getAttribute(`data-bx-swipe-active`),this.movable=t,this.style(this.nativeElement,`position`,`relative`),this.style(this.nativeElement,`overflow`,`clip`),this.style(this.nativeElement,`overscroll-behavior-x`,`contain`),this.style(this.nativeElement,`touch-action`,`pan-y pinch-zoom`),this.style(e,`touch-action`,`pan-y pinch-zoom`),this.style(e,`position`,`relative`),this.style(t,`position`,`relative`);let o=this.viewContainerRef.createComponent(gi);this.panel=o,o.setInput(`origin`,this.focusOrigin()),e.getAttribute(`role`)===`gridcell`&&o.location.nativeElement.setAttribute(`role`,`gridcell`),this.nativeElement.append(o.location.nativeElement),this.dismissal=new ui(this.nativeElement,[e,o.location.nativeElement]),o.instance.selected.subscribe(u=>this.invoke(u)),o.instance.layoutChange.subscribe(u=>this.updateLayout(u)),this.motion=Zn$1([0],([u],[m])=>{this.motionSide===null&&this.destination!==0&&u*this.destination>=0&&(this.motionSide=this.destination<0?`left`:`right`);let x=this.phase()===`settling`?Math.max(this.settleMinimum,Math.min(this.settleMaximum,u)):u;this.position=this.clampPosition(x,this.motionSide),Kn$1(e,{transform:`translate3d(${this.position}px, 0, 0)`},!0),this.paint(),this.phase()===`settling`&&Math.abs(u-this.destination)<.1&&Math.abs(m)<.1&&(this.phase.set(this.destination===0?`closed`:this.destination<0?`left`:`right`),this.destination===0&&(this.motionSide=null),this.stretchSide=null,this.panel?.setInput(`stretch`,0),this.panel?.setInput(`armed`,!1))},vr$1.smooth),this.style(e,`transform`,`translate3d(0, 0, 0)`),this.listeners=new AbortController;let a={signal:this.listeners.signal},r$3=this.nativeElement.ownerDocument;this.nativeElement.addEventListener(`wheel`,u=>this.onWheel(u),s(r({},a),{passive:!1,capture:!0})),this.nativeElement.addEventListener(`pointerdown`,u=>this.onDown(u),a),e.addEventListener(`lostpointercapture`,u=>{u.target===e&&u.pointerId===this.gesture?.pointerId&&!e.hasPointerCapture(u.pointerId)&&this.cancelGesture()},a),this.nativeElement.addEventListener(`click`,u=>{if(this.suppressClick||this.destination!==0&&this.row?.contains(u.target)||this.gesture?.claimed){u.preventDefault(),u.stopImmediatePropagation();let m=this.suppressClick;this.suppressClick=!1,m||this.closeSwipeActions()}},s(r({},a),{capture:!0})),this.nativeElement.addEventListener(`contextmenu`,u=>{!this.contextMenuDirective&&!u.defaultPrevented&&this.openContext(u)},a),this.nativeElement.addEventListener(`keydown`,u=>{!this.contextMenuDirective&&(u.key===`ContextMenu`||u.shiftKey&&u.key===`F10`)&&(u.preventDefault(),u.stopPropagation(),this.openContext(u))},a),r$3.addEventListener(`keydown`,u=>{u.key===`Escape`&&(this.gesture||this.wheelGesture||this.destination!==0)&&(u.preventDefault(),u.stopImmediatePropagation(),this.closeSwipeActions())},s(r({},a),{capture:!0})),r$3.addEventListener(`pointerdown`,u=>{this.nativeElement.contains(u.target)||this.closeSwipeActions()},s(r({},a),{capture:!0,passive:!0})),r$3.addEventListener(`focusin`,u=>{this.nativeElement.contains(u.target)||this.closeSwipeActions()},a),r$3.addEventListener(`visibilitychange`,()=>{r$3.hidden&&(this.closeSwipeActions(),this.panel?.instance.closeContext())},a),n.addEventListener(`blur`,()=>this.closeSwipeActions(),a),this.visibilityObserver=new MutationObserver(()=>{this.nativeElement.closest(`[inert], [hidden], [aria-hidden="true"]`)&&(this.closeSwipeActions(),this.panel?.instance.closeContext())});for(let u=this.nativeElement.parentElement;u;u=u.parentElement)this.visibilityObserver.observe(u,{attributes:!0,attributeFilter:[`inert`,`hidden`,`aria-hidden`]})}onWheel(t){if(!this.nativeElement.contains(t.target))return;if(this.wheelGesture?.committed){if(t.ctrlKey||Math.abs(t.deltaY)>Math.abs(t.deltaX)){this.finishWheel(!1);return}if(t.deltaX===0)return;t.preventDefault(),t.stopPropagation();let x=this.nativeElement.ownerDocument.defaultView;x?.clearTimeout(this.wheelTimer),this.wheelTimer=x?.setTimeout(()=>this.finishWheel(!1),pi);return}if(t.ctrlKey){this.cancelWheel();return}if(this.operationBlocksGesture()||this.gesture||this.swipeDisabled()||this.swipeLoading()||this.menuItem?.disabled()||this.menuItem?.loading()||t.deltaX===0&&t.deltaY===0)return;if(Math.abs(t.deltaX)<=Math.abs(t.deltaY)){this.wheelGesture&&this.finishWheel(!1);return}let e=t.deltaMode===WheelEvent.DOM_DELTA_LINE?parseFloat(this.nativeElement.ownerDocument.defaultView?.getComputedStyle(this.row??this.nativeElement).lineHeight??`16`)||16:t.deltaMode===WheelEvent.DOM_DELTA_PAGE?this.nativeElement.clientWidth:1,n=-t.deltaX*e;if(!this.wheelGesture&&(n<0&&this.layout.left===0&&this.position<=0||n>0&&this.layout.right===0&&this.position>=0))return;t.preventDefault(),t.stopPropagation();let o=this.nativeElement.ownerDocument.defaultView;if(!o)return;if(this.wheelGesture?.collapsed){let x=this.wheelGesture.lastDelta;if(!(Math.sign(n)!==Math.sign(x)||Math.abs(n)>Math.abs(x)+Math.max(1,Math.abs(x)*.25))){this.wheelGesture.lastDelta=n,o.clearTimeout(this.wheelTimer),this.wheelTimer=o.setTimeout(()=>this.finishWheel(!1),pi);return}this.wheelGesture=void 0,o.clearTimeout(this.wheelTimer),this.wheelTimer=void 0}if(!this.wheelGesture){this.completed.set(null),this.swipeActionsService.activate(this,()=>this.closeSwipeActions());let x=this.initialSide(n);this.stretchPermitted=this.canBeginStretch(x),this.wheelGesture={destination:this.destination,lastDelta:n,collapsed:!1,committed:!1,stretchIntent:this.stretchPermitted,revealDeltaPeak:Math.abs(n),continuationDelta:null,velocity:new Ah(this.position,t.timeStamp),side:x,position:this.position,rawPosition:this.rawPosition(this.position,x),start:this.position,event:t},this.motionSide=this.destination===0&&(this.position<0?`left`:`right`)!==x?null:x,this.motion?.track([this.position]),this.phase.set(`dragging`),this.panel?.setInput(`interactive`,!1)}let a=this.canBeginStretch(this.wheelGesture.side);this.updateWheelStretchIntent(this.wheelGesture,n,a),this.stretchPermitted=a&&this.wheelGesture.stretchIntent,this.wheelGesture.lastDelta=n,this.prepareStretch(this.wheelGesture.side);let r=this.clampGesturePosition(this.visualPosition(this.wheelGesture.rawPosition+n,this.wheelGesture.side),this.wheelGesture.side,this.wheelGesture.start,this.wheelGesture.destination),u=this.wheelGesture.position;this.wheelGesture.event=t,this.wheelGesture.position=r,this.wheelGesture.rawPosition=this.rawPosition(r,this.wheelGesture.side),this.updateArmed(r,this.wheelGesture.side),this.wheelGesture.velocity.update(r,t.timeStamp),this.motion?.track([r],[this.wheelGesture.velocity.velocity(t.timeStamp)]),Math.abs(r)<.1&&u*n<0&&(this.wheelGesture.collapsed=!0,this.destination=0,this.motionSide=null,this.stretchSide=null,this.swipeActionsService.release(this)),o.clearTimeout(this.wheelTimer),this.wheelTimer=o.setTimeout(()=>this.finishWheel(),pi);let m=this.edgeAction(this.wheelGesture.side);m&&this.fullOptions(this.wheelGesture.side).enabled&&m.fullSwipe!==!1&&this.stretchProgress(r,this.wheelGesture.side)>=this.fullOptions(this.wheelGesture.side).commitThreshold&&(this.wheelGesture.committed=!0,this.invoke({action:m,source:`full-swipe`,event:t}))}updateWheelStretchIntent(t,e,n){if(t.stretchIntent||e*(t.side===`left`?-1:1)<=0)return;let o=Math.abs(e);if(t.revealDeltaPeak=Math.max(t.revealDeltaPeak,o),!n){t.continuationDelta=null;return}if(t.continuationDelta===null){o<Math.abs(t.lastDelta)&&o<=t.revealDeltaPeak*.5&&(t.continuationDelta=o);return}o>t.continuationDelta+Math.max(2,t.continuationDelta*.5)?t.stretchIntent=!0:t.continuationDelta=Math.min(t.continuationDelta,o)}finishWheel(t=!0){let e=this.wheelGesture,n=this.nativeElement.ownerDocument.defaultView;if(!e||!n)return;let o=e.velocity.velocity(n.performance.now());if(this.wheelGesture=void 0,n.clearTimeout(this.wheelTimer),this.wheelTimer=void 0,e.committed){let a=this.completeAfterWheel;this.completeAfterWheel=void 0,a?.();return}this.motion?.track([this.position],[o]),t?this.finishRelease(o,e.side,e.position,e.event):this.settle(this.releaseDestination(o,e.side,e.position))}cancelWheel(){if(this.wheelGesture?.committed){this.finishWheel(!1);return}let t=this.wheelGesture;this.nativeElement.ownerDocument.defaultView?.clearTimeout(this.wheelTimer),this.wheelTimer=void 0,this.wheelGesture=void 0,t&&(this.motion?.track([this.position],[0]),this.settle(t.collapsed?0:t.destination))}releaseDestination(t,e,n=this.position){let o=AR(n,t,Math.max(this.layout.left,this.layout.right));return e!==`right`&&o<-this.layout.left/2&&this.layout.left>0?-this.layout.left:e!==`left`&&o>this.layout.right/2&&this.layout.right>0?this.layout.right:0}initialSide(t){return this.destination<0?`left`:this.destination>0?`right`:t<0?`left`:`right`}extent(t){return this.stretchSide===t?Math.max(this.layout[t],this.layout.full):this.layout[t]}clampPosition(t,e){return e===`left`?Math.max(-this.extent(`left`),Math.min(0,t)):e===`right`?Math.max(0,Math.min(this.extent(`right`),t)):Math.max(-this.extent(`left`),Math.min(this.extent(`right`),t))}clampGesturePosition(t,e,n,o){let a=e===`right`?o===0?Math.min(0,n):0:-(this.stretchPermitted?this.extent(`left`):this.layout.left),r=e===`left`?o===0?Math.max(0,n):0:this.stretchPermitted?this.extent(`right`):this.layout.right;return Math.max(a,Math.min(r,t))}fullOptions(t=null){let e=this.swipeFullAction(),n=t?this.edgeAction(t):void 0,o=r(r({},typeof e==`boolean`?{enabled:e}:e),n?.fullSwipeConfig),a=n?.role===`destructive`,r$4=a?Qe.destructiveCommitThreshold:Qe.commitThreshold,u=a?Qe.destructiveResistance:Qe.resistance,m=o.armThreshold??Qe.armThreshold,x=o.commitThreshold??r$4,P=o.resistance??u,D=a?Qe.destructivePlateau:0,L=a?Qe.destructiveResistanceEnd:Qe.resistanceEnd,V=o.resistancePlateau??D,Q=o.resistanceEnd??L,J=Number.isFinite(V)?Math.max(0,Math.min(.35,V)):D,O=Number.isFinite(m)?Math.max(0,Math.min(.95,m)):Qe.armThreshold;return{enabled:e!==!1&&(o.enabled??!0),resistance:Number.isFinite(P)?Math.max(1,Math.min(12,P)):u,resistancePlateau:J,resistanceEnd:Math.max(J+.01,Number.isFinite(Q)?Math.min(1,Q):L),armThreshold:O,commitThreshold:Number.isFinite(x)?Math.max(O+.01,Math.min(1,x)):Math.max(O+.01,r$4),readyLabel:o.readyLabel??`Release to activate`}}edgeAction(t){let e=t===`left`?this.leftSwipeActions():this.rightSwipeActions();return t===`left`?e[e.length-1]:e[0]}rawPosition(t,e){if(!e)return t;let n=e===`left`?-1:1,o=t*n,a=this.layout[e],r=this.fullOptions(e),u=Oo(r.resistance,this.layout.full-a,this.layout.column*2);return o>a?n*(a+Po(o-a,this.layout.full-a,u,r.resistancePlateau,r.resistanceEnd)):t}visualPosition(t,e){if(!e)return t;let n=e===`left`?-1:1,o=t*n,a=this.layout[e],r=this.fullOptions(e),u=Oo(r.resistance,this.layout.full-a,this.layout.column*2);return o>a?n*(a+Dr(o-a,this.layout.full-a,u,r.resistancePlateau,r.resistanceEnd)):t}canBeginStretch(t){return(t===`left`?this.leftSwipeActions():this.rightSwipeActions()).length===1||!!this.panel?.instance.isEntranceComplete(t)}prepareStretch(t){if(!t||!this.stretchPermitted||this.stretchSide===t||!this.fullOptions(t).enabled)return;let e=this.edgeAction(t);e&&e.fullSwipe!==!1&&!e.disabled&&!e.loading&&!this.pending().includes(e.id)&&this.panel?.instance.canFullSwipe(t)&&(this.stretchSide=t)}stretchProgress(t,e){if(!e||this.stretchSide!==e||t*(e===`left`?-1:1)<=0)return 0;let n=this.layout.full-this.layout[e];return n>0?Math.max(0,Math.min(1,(Math.abs(t)-this.layout[e])/n)):0}updateArmed(t,e){this.panel?.setInput(`armed`,this.stretchProgress(t,e)>=this.fullOptions(e).commitThreshold)}finishRelease(t,e,n,o){let a=e?this.edgeAction(e):void 0,r=this.fullOptions(e),u=!!e&&!!a&&r.enabled&&a.fullSwipe!==!1&&this.stretchProgress(n,e)>=r.commitThreshold,x=!!e&&this.stretchProgress(n,e)>0&&e?this.layout[e]*(e===`left`?-1:1):this.releaseDestination(t,e,n);u&&a?this.invoke({action:a,source:`full-swipe`,event:o}):this.settle(x)}focusOrigin(){let t=this.row??this.nativeElement,e=this.nativeElement.ownerDocument.activeElement;return e instanceof HTMLElement&&t.contains(e)&&e.tabIndex>=0?e:t.matches(`button,a[href],[tabindex]`)?t:t.querySelector(`button,a[href],[tabindex]`)??t}onDown(t){if(t.target.closest(`input,textarea,select,[contenteditable="true"]`)||this.operationBlocksGesture()||!t.isPrimary||t.button!==0||this.swipeDisabled()||this.swipeLoading()||this.menuItem?.disabled()||this.menuItem?.loading())return;this.suppressClick=this.destination===0&&Math.abs(this.position)>.1,this.cancelWheel(),this.cancelGesture(),this.motion?.track([this.position]),this.gesture={pointerId:t.pointerId,x:t.clientX,y:t.clientY,start:this.position,destination:this.destination,velocity:new Ah(t.clientX,t.timeStamp),claimed:!1,side:this.destination!==0?this.initialSide(0):null},this.gestureListeners=new AbortController;let e={signal:this.gestureListeners.signal},n=this.nativeElement.ownerDocument;t.pointerType===`touch`&&(n.addEventListener(`touchmove`,o=>{o.touches.length!==1?this.cancelGesture():this.gesture?.claimed&&o.cancelable&&o.preventDefault()},s(r({},e),{passive:!1})),n.addEventListener(`touchstart`,o=>{o.touches.length>1&&this.cancelGesture()},s(r({},e),{passive:!0}))),n.addEventListener(`pointermove`,o=>this.onMove(o),s(r({},e),{passive:!1})),n.addEventListener(`pointerup`,o=>this.onUp(o),e),n.addEventListener(`pointercancel`,o=>{o.pointerId===this.gesture?.pointerId&&this.cancelGesture()},e),n.addEventListener(`pointerdown`,o=>{o.pointerId!==this.gesture?.pointerId&&this.cancelGesture()},s(r({},e),{passive:!0}))}onMove(t){let e=this.gesture;if(!e||t.pointerId!==e.pointerId)return;let n=t.clientX-e.x,o=t.clientY-e.y;if(!e.claimed){if(Math.max(Math.abs(n),Math.abs(o))<8)return;if(Math.abs(o)>=Math.abs(n)||n<0&&!this.layout.left&&e.start<=0||n>0&&!this.layout.right&&e.start>=0){this.cancelGesture();return}this.completed.set(null),this.swipeActionsService.activate(this,()=>this.closeSwipeActions()),e.claimed=!0,e.side??=n<0?`left`:`right`,this.stretchPermitted=this.canBeginStretch(e.side),this.motionSide=e.destination===0&&(e.start<0?`left`:`right`)!==e.side?null:e.side,this.row?.setPointerCapture(t.pointerId),this.phase.set(`dragging`),this.panel?.setInput(`interactive`,!1)}t.preventDefault(),this.prepareStretch(e.side),e.velocity.update(t.clientX,t.timeStamp);let a=this.clampGesturePosition(e.start+n,e.side,e.start,e.destination);this.updateArmed(a,e.side),this.motion?.track([a],[e.velocity.velocity(t.timeStamp)])}onUp(t){let e=this.gesture;if(!e||t.pointerId!==e.pointerId)return;if(!e.claimed){this.releaseGesture(),this.settle(e.destination);return}e.velocity.update(t.clientX,t.timeStamp);let n=e.velocity.velocity(t.timeStamp);this.suppressClick=!0,this.releaseGesture(),this.motion?.track([this.position],[n]),this.finishRelease(n,e.side,this.position,t)}releaseGesture(){let t=this.gesture;this.gesture=void 0,this.gestureListeners?.abort(),this.gestureListeners=void 0,t&&this.row?.hasPointerCapture(t.pointerId)&&this.row.releasePointerCapture(t.pointerId)}cancelGesture(){let t=this.gesture;t&&(this.releaseGesture(),t.claimed&&(this.suppressClick=!0,this.motion?.track([this.position],[0]),this.settle(t.destination)))}settle(t){this.destination=Math.max(-this.layout.left,Math.min(this.layout.right,t)),this.destination!==0?this.motionSide=this.position*this.destination<0?null:this.destination<0?`left`:`right`:Math.abs(this.position)>.1&&(this.motionSide=this.position<0?`left`:`right`),this.settleMinimum=Math.min(0,this.position,this.destination),this.settleMaximum=Math.max(0,this.position,this.destination),this.panel?.setInput(`armed`,!1),this.phase.set(`settling`),this.panel?.setInput(`interactive`,this.destination!==0),this.destination===0&&(this.panel?.location.nativeElement.contains(this.nativeElement.ownerDocument.activeElement)&&this.focusOrigin().focus({preventScroll:!0}),this.swipeActionsService.release(this)),this.motion?.retarget([this.destination],this.bxA11yService.isReducedMotion())}paint(){let t=this.position<-.1?`left`:this.position>.1?`right`:null,e=t?`true`:`false`;this.nativeElement.dataset.bxSwipeActive=e,this.row?.getAttribute(`data-bx-swipe-active`)!==e&&this.row?.setAttribute(`data-bx-swipe-active`,e);let n=this.fullOptions(t);this.panel?.setInput(`armThreshold`,n.armThreshold),this.panel?.setInput(`commitThreshold`,n.commitThreshold),this.panel?.setInput(`readyLabel`,n.readyLabel),this.panel?.setInput(`side`,t),this.panel?.setInput(`reveal`,Math.abs(this.position)),this.panel?.setInput(`stretch`,t&&this.stretchSide===t?Math.max(0,Math.abs(this.position)-this.layout[t]):0)}updateLayout(t){let e=t.left!==this.layout.left||t.right!==this.layout.right||t.full!==this.layout.full;if(this.layout=t,this.phase()===`dismissing`||this.phase()===`dismissed`)return;let n=this.fullOperation();if(n){e&&this.holdFullAction(n.side,n.status);return}e&&(this.cancelGesture(),this.cancelWheel(),this.settle(this.destination<0?-t.left:this.destination>0?t.right:0))}openContext(t){this.pending().length||this.phase()===`dismissing`||this.phase()===`dismissed`||this.swipeDisabled()||this.swipeLoading()||this.menuItem?.disabled()||this.menuItem?.loading()||(t.preventDefault(),t.stopPropagation(),this.closeSwipeActions(),this.completed.set(null),this.panel?.setInput(`origin`,this.focusOrigin()),this.panel?.instance.openContext(t))}operationBlocksGesture(){return this.pending().length>0||!!this.fullOperation()||this.phase()===`dismissing`||this.phase()===`dismissed`}holdFullAction(t,e){this.stretchSide=t,this.motionSide=t,this.destination=Math.max(this.layout.full,this.layout[t])*(t===`left`?-1:1),this.phase.set(e),this.panel?.setInput(`interactive`,!0),this.panel?.setInput(`armed`,!1),this.motion?.track([this.position],[0]),this.motion?.retarget([this.destination],this.bxA11yService.isReducedMotion())}invoke(t){let e=[...this.leftSwipeActions(),...this.rightSwipeActions()].find(u=>u.id===t.action.id);if(!e||this.pending().length||this.phase()===`dismissing`||this.phase()===`dismissed`||this.swipeDisabled()||this.swipeLoading()||this.menuItem?.disabled()||this.menuItem?.loading()||e.disabled||e.loading)return;let n=++this.commandRevision,o=s(r({},t),{action:e,retry:this.failed().includes(e.id)}),a=e.completion??this.swipeCompletion(),r$5=t.source===`full-swipe`?this.stretchSide:this.fullOperation()?.id===e.id?this.fullOperation()?.side:null;if(this.completed.set(null),this.failed.update(u=>u.filter(m=>m!==e.id)),this.pending.set([e.id]),r$5&&(this.fullOperation.set({id:e.id,side:r$5,status:`pending`}),this.holdFullAction(r$5,`pending`)),this.focusOrigin().focus({preventScroll:!0}),this.swipeAction.emit(o),!this.destroyRef.destroyed)try{let u=e.handler?.(o);u?(this.working.set([e.id]),u.then(()=>this.completeAction(o,a,n),m=>this.failAction(e,m,n))):this.completeAction(o,a,n)}catch(u){this.failAction(e,u,n)}}completeAction(t,e,n){if(!(this.destroyRef.destroyed||n!==this.commandRevision)){if(this.working.set([]),this.completed.set(t.action),this.wheelGesture?.committed){this.completeAfterWheel=()=>this.completeAction(t,e,n);return}if(this.pending.set([]),this.panel?.instance.closeContext(),e===`dismiss`){this.dismissRow(t);return}this.fullOperation.set(null),this.motion?.track([this.position],[0]),this.settle(0)}}failAction(t,e,n){if(this.destroyRef.destroyed||n!==this.commandRevision)return;this.pending.set([]),this.working.set([]),this.failed.update(a=>[...a,t.id]);let o=this.fullOperation();o&&(this.fullOperation.set(s(r({},o),{status:`error`})),this.holdFullAction(o.side,`error`)),this.swipeActionError.emit({action:t,error:e})}dismissRow(t){this.phase.set(`dismissing`),this.motion?.track([this.position],[0]),this.panel?.setInput(`interactive`,!1),this.swipeActionsService.release(this),this.moveDismissedFocus(),this.dismissal?.start(this.fullOperation()?.side??this.motionSide,this.bxA11yService.isReducedMotion(),()=>{this.destroyRef.destroyed||(this.phase.set(`dismissed`),this.swipeDismissed.emit(t))})}moveDismissedFocus(){if(!this.nativeElement.contains(this.nativeElement.ownerDocument.activeElement))return;let t=this.swipeDismissFocus();if(t&&!this.nativeElement.contains(t)){(t.tabIndex>=0?t:t.querySelector(`button:not(:disabled),a[href],[tabindex="0"],input:not(:disabled)`)??t).focus({preventScroll:!0});return}let e=Array.from(this.nativeElement.parentElement?.children??[]),n=e.indexOf(this.nativeElement),o=[...e.slice(n+1),...e.slice(0,n).reverse()];for(let a of o){let r=a.querySelector(`button:not(:disabled),a[href],[tabindex="0"]`);if(r&&!r.closest(`[inert],[hidden],[aria-hidden="true"]`)&&r.getClientRects().length){r.focus({preventScroll:!0});return}}this.focusOrigin().blur()}style(t,e,n){let o=this.originalStyles.get(t);o||(o=/* @__PURE__ */ new Map,this.originalStyles.set(t,o)),o.has(e)||o.set(e,t.style.getPropertyValue(e)),t.style.getPropertyValue(e)!==n&&t.style.setProperty(e,n)}teardown(){++this.commandRevision,this.completeAfterWheel=void 0,this.dismissal?.restore(),this.dismissal=void 0,this.fullOperation.set(null),this.pending.set([]),this.working.update(t=>t.length?[]:t),this.completed.set(null),this.releaseGesture(),this.cancelWheel(),this.swipeActionsService.release(this),this.motion?.destroy(),this.motion=void 0,this.listeners?.abort(),this.listeners=void 0,this.visibilityObserver?.disconnect(),this.visibilityObserver=void 0,this.panel?.instance.closeContext(),this.panel?.destroy(),this.panel=void 0;for(let[t,e]of this.originalStyles)for(let[n,o]of e)o?t.style.setProperty(n,o):t.style.removeProperty(n);this.originalStyles.clear(),this.originalRowActive===null?this.row?.removeAttribute(`data-bx-swipe-active`):this.row?.setAttribute(`data-bx-swipe-active`,this.originalRowActive),this.originalRowActive=null,this.row=void 0,this.movable=void 0,delete this.nativeElement.dataset.bxSwipeActive,delete this.nativeElement.dataset.bxSwipeHover,delete this.nativeElement.dataset.bxSwipeFocus,this.position=0,this.destination=0,this.motionSide=null,this.stretchSide=null,this.stretchPermitted=!1,this.suppressClick=!1,this.phase.set(`closed`)}static ɵfac=function(e){return new(e||i)};static ɵdir=pe({type:i,selectors:[[``,`bxSwipeActions`,``]],inputs:{swipeContent:[1,`swipeContent`],swipeDisabled:[1,`swipeDisabled`],swipeLoading:[1,`swipeLoading`],leftSwipeActions:[1,`leftSwipeActions`],rightSwipeActions:[1,`rightSwipeActions`],swipePreviousLabel:[1,`swipePreviousLabel`],swipeNextLabel:[1,`swipeNextLabel`],swipeTooltipDwell:[1,`swipeTooltipDwell`],swipeFullAction:[1,`swipeFullAction`],swipeCompletion:[1,`swipeCompletion`],swipeDismissFocus:[1,`swipeDismissFocus`],swipeRetryLabel:[1,`swipeRetryLabel`],swipeLoadingLabel:[1,`swipeLoadingLabel`],swipeCompletedLabel:[1,`swipeCompletedLabel`]},outputs:{swipeDismissed:`swipeDismissed`,swipeAction:`swipeAction`,swipeActionError:`swipeActionError`},exportAs:[`bxSwipeActions`]})};function fi(i){let t=Number(i);return Number.isFinite(t)?Math.max(1,Math.floor(t)):1}var md=[`searchInput`];var gd=[`origin`];var hd=[`valueOverflow`];var fd=[`labelOverflow`];var nn=class i extends we{bxA11yService=b(Br$1);ngZone=b(le);overlay=b(Ld$1);overlayContext=b(Be,{optional:!0});i18n=b(VQ,{optional:!0});scrollLockService=b(Nw);scrollLockId=qK();debouncing=$(!1);searchRequest=$(!1);knownOptions=$([]);connectedOverlay=Sz(pR);searchInputRef=Sz(`searchInput`);originRef=Sz(`origin`,{read:ke});hasOptionActions=G(()=>this.options().some(t=>!!(t.leftSwipeActions?.length||t.rightSwipeActions?.length)));hasSelection=G(()=>this.internalValue()!==null&&this.internalValue()!==void 0);showClear=G(()=>this.clearable()&&this.hasSelection()&&!this.isReadonly());resolvedClearLabel=G(()=>LQ(this.clearLabel(),this.i18n));resolvedClearTooltip=G(()=>LQ(this.clearTooltip()??this.clearLabel(),this.i18n));panelScrollStrategy=this.overlay.scrollStrategies.noop();isPanelAttached=$(!1);searchTerm=G(()=>this.searchValue());truncatedSelectionTooltip=G(()=>!this.resolvedTooltipOnTruncate()||this.isOpen()?``:Gi(this.selectedOptionLabel()||this.resolvedPlaceholder(),this.valueOverflow()?.truncated()??!1)||Gi(this.resolvedLabel(),this.labelOverflow()?.truncated()??!1));overlayPositions=[new Hr$1({originX:`start`,originY:`bottom`},{overlayX:`start`,overlayY:`top`},0,4),new Hr$1({originX:`start`,originY:`top`},{overlayX:`start`,overlayY:`bottom`},0,-4)];resolvedOptions=G(()=>this.options().map(t=>s(r({},t),{resolvedStr:LQ(t.label,this.i18n),resolvedGroup:LQ(t.group,this.i18n)})));filteredOptions=G(()=>{let t=this.searchTerm().trim().toLocaleLowerCase();return this.externalFiltering()||!t?this.resolvedOptions():this.resolvedOptions().filter(e=>e.resolvedStr.toLocaleLowerCase().includes(t))});selectedOptions=G(()=>this.knownOptions().filter(t=>this.isSelected(t.value)));selectedOptionLabel=G(()=>this.selectedOptions().map(t=>LQ(t.label,this.i18n)).join(`, `));isFloating=G(()=>this.isOpen()||this.value()!==null&&(!Array.isArray(this.value())||this.value().length>0)||this.resolvedFloatLabel()===`always`);resolvedSearchPlaceholder=G(()=>LQ(this.searchPlaceholder(),this.i18n));resolvedEmptyMessage=G(()=>LQ(this.emptyMessage(),this.i18n));triggerContext=G(()=>({$implicit:this.value(),labels:this.selectedOptions().map(t=>LQ(t.label,this.i18n))}));visibleTags=G(()=>this.selectedOptions().slice(0,this.visibleTagCount()));overflowTagLabel=G(()=>{let t=Math.max(0,this.selectedOptions().length-this.visibleTagCount());return LQ(this.tagOverflowText(),this.i18n,{count:t}).replaceAll(`{count}`,String(t))});overflowTagTooltip=G(()=>this.selectedOptions().slice(this.visibleTagCount()).map(t=>LQ(t.label,this.i18n)).join(`, `));resolvedLoadingAriaLabel=G(()=>LQ(this.loadingAriaLabel(),this.i18n));resolvedLoadingLabel=G(()=>LQ(this.loadingLabel(),this.i18n));valueOverflow=Sz(`valueOverflow`);labelOverflow=Sz(`labelOverflow`);isSearching=G(()=>this.debouncing()||this.searchRequest());isOpen=$(!1);clearable=ee(!0);clearLabel=ee(`Clear selection`);clearTooltip=ee(void 0);selectionDisplay=ee(`text`);tagConfig=ee({});overflowTagConfig=ee({});visibleTagCount=ee(1,{transform:fi});tagOverflowText=ee(`+{count}`);options=ee.required();compareWith=ee(Object.is);isSearchable=ee(!1);externalFiltering=ee(!1);searchValue=_z(``);searchDebounce=ee(300);searchPlaceholder=ee(`Search...`);emptyMessage=ee(`No results found.`);loadingLabel=ee(void 0);loadingAriaLabel=ee(`Loading`);hasMore=ee(!1);loadError=ee(void 0);loadMoreConfig=ee({});loadMoreTemplate=ee(void 0);panelWidth=ee(void 0);optionStartTemplate=ee(void 0);optionEndTemplate=ee(void 0);panelClass=ee(``);optionTemplate=ee(void 0);triggerTemplate=ee(void 0);search=Pk();loadMore=Pk();openedChange=Pk();transition;selectionMotion;disconnectTheme;disconnectLighting;disconnectOrigin;transitionRevision=0;focusOnOpen=null;searchTimeout;typeaheadTimeout;typeaheadText=``;constructor(){super(),We$1(()=>{let t=this.bxA11yService.isReducedMotion();this.selectionMotion?.update({reducedMotion:t})}),We$1(()=>{this.searchRequest()&&!this.loading()&&!this.debouncing()&&this.searchRequest.set(!1)}),We$1(()=>{let t=this.resolvedOptions(),e=de(this.knownOptions).filter(n=>this.isSelected(n.value)&&!t.some(o=>this.compareWith()(o.value,n.value)));this.knownOptions.set([...e,...t])}),We$1(()=>{(this.disabled()||this.isReadonly())&&this.isOpen()&&this.close()}),b(ge).onDestroy(()=>{clearTimeout(this.searchTimeout),clearTimeout(this.typeaheadTimeout)})}ngOnDestroy(){++this.transitionRevision,this.onPanelDetach(),this.scrollLockService.enableScroll(this.scrollLockId)}toggleOpen(){this.disabled()||this.isReadonly()||(this.isOpen()?this.close():this.open())}open(){if(this.disabled()||this.isReadonly()||this.isOpen())return;++this.transitionRevision,this.isOpen.set(!0),this.openedChange.emit(!0),this.isPanelAttached.set(!0),this.scrollLockService.disableScroll(this.scrollLockId,{handleTouchInput:!0});let t=this.connectedOverlay()?.overlayRef?.overlayElement;t&&(t.inert=!1);let e=this.transition;e&&this.ngZone.runOutsideAngular(()=>e.enter()),this.connectedOverlay()?.overlayRef?.hasAttached()&&this.isSearchable()&&queueMicrotask(()=>this.searchInputRef()?.focus())}close(){let t=this.isOpen();this.isOpen.set(!1),this.scrollLockService.enableScroll(this.scrollLockId),t&&(this.openedChange.emit(!1),this.markAsTouched());let e=++this.transitionRevision,n=this.connectedOverlay()?.overlayRef?.overlayElement;n?.contains(n.ownerDocument.activeElement)&&this.originRef()?.nativeElement.focus({preventScroll:!0}),n&&(n.inert=!0);let o=this.transition;o&&!this.bxA11yService.isReducedMotion()?this.ngZone.runOutsideAngular(()=>o.exit()).then(()=>{e===this.transitionRevision&&!this.isOpen()&&this.detachPanel()}).catch(()=>{e===this.transitionRevision&&this.detachPanel()}):this.detachPanel()}onPanelAttach(t){let e=this.transitionRevision,n=this.originRef()?.nativeElement,o=t.overlayRef;n&&o?.hasAttached()&&(this.disconnectLighting?.(),this.disconnectLighting=DR(o.overlayElement,n),this.disconnectOrigin?.(),this.disconnectOrigin=this.ngZone.runOutsideAngular(()=>RK(o,n))),queueMicrotask(()=>{let a=t.overlayRef,r=this.originRef()?.nativeElement;if(!a?.hasAttached()||!r||!this.isOpen()||e!==this.transitionRevision)return;this.disconnectTheme?.(),this.disconnectTheme=this.ngZone.runOutsideAngular(()=>BK(r,a.overlayElement)),a.updatePosition();let u=a.overlayElement.querySelector(`[role="listbox"], [role="grid"]`);if(this.selectionMotion?.destroy(),this.selectionMotion=u?this.ngZone.runOutsideAngular(()=>TR(u,{selector:`.bx-select-option`,reducedMotion:this.bxA11yService.isReducedMotion()})):void 0,!this.bxA11yService.isReducedMotion()){this.transition?.destroy(),this.transition=this.ngZone.runOutsideAngular(()=>MR(r,a.overlayElement));let m=this.transition;this.ngZone.runOutsideAngular(()=>m.enter()).catch(()=>{e===this.transitionRevision&&(this.transition?.destroy(),this.transition=void 0)})}if(this.isSearchable())this.searchInputRef()?.focus();else{let m=this.panelItems();(m.find(x=>x.getAttribute(`aria-selected`)===`true`)??(this.focusOnOpen===`last`?m[m.length-1]:m[0]))?.focus()}this.focusOnOpen=null})}onPanelDetach(){this.selectionMotion?.destroy(),this.selectionMotion=void 0,this.transition?.destroy(),this.transition=void 0,this.disconnectTheme?.(),this.disconnectTheme=void 0,this.disconnectLighting?.(),this.disconnectLighting=void 0,this.disconnectOrigin?.(),this.disconnectOrigin=void 0}overlayPopoverLocation(t){return!!this.overlayContext?.useTopLayer||!!t.closest(`dialog, [role="dialog"], [role="alertdialog"], bx-modal, bx-modal-core, [popover]`)?`global`:null}refreshPanel(){this.transition?.refresh()}panelInlineSize(t){let e=this.panelWidth();return`min(${typeof e==`number`?`${e}px`:e??`${t}px`}, calc(100vw - 16px))`}onTriggerKey(t){if(!(this.disabled()||this.isReadonly())){if(t.key===`Escape`||t.altKey&&t.key===`ArrowUp`){t.preventDefault(),this.close();return}[`ArrowDown`,`ArrowUp`,`Enter`,` `].includes(t.key)?(t.preventDefault(),this.focusOnOpen=t.key===`ArrowUp`?`last`:`first`,this.open()):t.key.length===1&&!t.ctrlKey&&!t.metaKey&&!t.altKey&&(this.open(),this.typeahead(t.key))}}onPanelKey(t){if(t.key===`Escape`||t.key===`Tab`||t.altKey&&t.key===`ArrowUp`){t.key!==`Tab`&&t.preventDefault(),t.stopPropagation(),this.close();return}let e=t.target;if(e.closest(`bx-swipe-action-panel`)&&![`ArrowDown`,`ArrowUp`,`Home`,`End`].includes(t.key))return;let n=e.matches(`input,textarea`);if(n&&![`ArrowDown`,`ArrowUp`].includes(t.key))return;if(![`ArrowDown`,`ArrowUp`,`Home`,`End`].includes(t.key)){!n&&t.key.length===1&&t.key!==` `&&this.typeahead(t.key);return}let o=this.panelItems();if(!o.length)return;let a=o[0].ownerDocument.activeElement,r=o.findIndex(m=>m===a||m.closest(`.bx-select-option-row`)?.contains(a)),u=t.key===`Home`?0:t.key===`End`?o.length-1:t.key===`ArrowDown`?(r+1)%o.length:r<0?o.length-1:(r-1+o.length)%o.length;t.preventDefault(),o[u].focus()}onTriggerBlur(){this.isOpen()||this.markAsTouched()}onOutsideClick(t){if(t.type===`auxclick`&&t.button===2)return;let e=t.target,n=this.connectedOverlay()?.overlayRef?.overlayElement,o=this.originRef()?.nativeElement;o&&kN(o,e)||n&&kN(n,e)||this.close()}clearSelectedValue(t){return this.disabled()||this.isReadonly()?!1:(this.updateValue(t),this.close(),this.markAsTouched(),this.focus({preventScroll:!0}),!0)}onSearchChange(t){clearTimeout(this.searchTimeout),this.debouncing.set(!0),this.searchTimeout=setTimeout(()=>{this.debouncing.set(!1),this.searchRequest.set(this.externalFiltering()),this.searchValue.set(t),this.search.emit(t)},this.searchDebounce())}selectionTagConfig(t){return r(r({},this.tagConfig()),t.tagConfig)}requestMore(t){this.loadMore.emit(r({},t))}detachPanel(){this.onPanelDetach(),this.isPanelAttached.set(!1),this.connectedOverlay()?.detachOverlay(),this.scrollLockService.enableScroll(this.scrollLockId)}typeahead(t){clearTimeout(this.typeaheadTimeout),this.typeaheadText+=t.toLocaleLowerCase(),this.typeaheadTimeout=setTimeout(()=>{this.typeaheadText=``},700),queueMicrotask(()=>this.panelItems().find(e=>e.textContent?.trim().toLocaleLowerCase().startsWith(this.typeaheadText))?.focus())}panelItems(){return Array.from(this.connectedOverlay()?.overlayRef?.overlayElement.querySelectorAll(`.bx-select-option:not(:disabled)`)??[])}static ɵfac=function(e){return new(e||i)};static ɵdir=pe({type:i,viewQuery:function(e,n){e&1&&Yy(n.connectedOverlay,pR,5)(n.searchInputRef,md,5)(n.originRef,gd,5,ke)(n.valueOverflow,hd,5)(n.labelOverflow,fd,5),e&2&&fb$1(5)},inputs:{clearable:[1,`clearable`],clearLabel:[1,`clearLabel`],clearTooltip:[1,`clearTooltip`],selectionDisplay:[1,`selectionDisplay`],tagConfig:[1,`tagConfig`],overflowTagConfig:[1,`overflowTagConfig`],visibleTagCount:[1,`visibleTagCount`],tagOverflowText:[1,`tagOverflowText`],options:[1,`options`],compareWith:[1,`compareWith`],isSearchable:[1,`isSearchable`],externalFiltering:[1,`externalFiltering`],searchValue:[1,`searchValue`],searchDebounce:[1,`searchDebounce`],searchPlaceholder:[1,`searchPlaceholder`],emptyMessage:[1,`emptyMessage`],loadingLabel:[1,`loadingLabel`],loadingAriaLabel:[1,`loadingAriaLabel`],hasMore:[1,`hasMore`],loadError:[1,`loadError`],loadMoreConfig:[1,`loadMoreConfig`],loadMoreTemplate:[1,`loadMoreTemplate`],panelWidth:[1,`panelWidth`],optionStartTemplate:[1,`optionStartTemplate`],optionEndTemplate:[1,`optionEndTemplate`],panelClass:[1,`panelClass`],optionTemplate:[1,`optionTemplate`],triggerTemplate:[1,`triggerTemplate`]},outputs:{searchValue:`searchValueChange`,search:`search`,loadMore:`loadMore`,openedChange:`openedChange`},features:[yt]})};var xd=[[[``,`bxIconStart`,``],[``,`bxPrefix`,``]],[[``,`bxSuffix`,``],[``,`bxIconEnd`,``]],[[`bx-error`]],[[`bx-hint`]]];var yd=[`[bxIconStart], [bxPrefix]`,`[bxSuffix], [bxIconEnd]`,`bx-error`,`bx-hint`];var Sd=[`ngProjectAs`,`bx-error`,5,[`bx-error`]];var _d=[`ngProjectAs`,`bx-hint`,5,[`bx-hint`]];var kr=()=>[];var Io=(i,t,e)=>({$implicit:i,selected:t,index:e});var Er=(i,t)=>t.value;function Cd(i,t){i&1&&(bo$1(0,`span`,20),lA(1,`*`),Go())}function Md(i,t){if(i&1&&(bo$1(0,`span`,11)(1,`span`,19,2),lA(3),Go(),od$1(4,Cd,2,0,`span`,20),Go()),i&2){let e=Wo();Xl$1(),xo$1(`bxTruncate`,!0),Xl$1(2),ik(e.resolvedLabel()),Xl$1(),nd$1(e.required()&&!e.resolvedHideRequiredMarker()?4:-1)}}function wd(i,t){if(i&1&&$s$1(0,13),i&2){let e=Wo();xo$1(`ngTemplateOutlet`,t)(`ngTemplateOutletContext`,e.triggerContext())}}function Nd(i,t){if(i&1&&sd$1(0,`bx-tag`,21),i&2){let e=t.$implicit,n=Wo(2);xo$1(`text`,e.label)(`config`,n.selectionTagConfig(e))(`disabled`,n.disabled()||!!e.disabled)(`focusable`,!1)(`tooltipOnTruncate`,n.resolvedTooltipOnTruncate()?void 0:!1)}}function Td(i,t){if(i&1&&sd$1(0,`bx-tag`,22),i&2){let e=Wo(2);xo$1(`text`,e.overflowTagLabel())(`config`,e.overflowTagConfig())(`tooltip`,e.overflowTagTooltip())(`focusable`,!1)(`tooltipOnTruncate`,e.resolvedTooltipOnTruncate()?void 0:!1)}}function Pd(i,t){if(i&1&&(bo$1(0,`span`,14),ab$1(1,Nd,1,5,`bx-tag`,21,Er),od$1(3,Td,1,5,`bx-tag`,22),Go()),i&2){let e=Wo();Xl$1(),cb$1(e.visibleTags()),Xl$1(2),nd$1(e.selectedOptions().length>e.visibleTagCount()?3:-1)}}function Od(i,t){if(i&1&&lA(0),i&2){let e=Wo();mb$1(` `,e.selectedOptionLabel()||(e.isFloating()||!e.label()?e.resolvedPlaceholder():``),` `)}}function Id(i,t){i&1&&sd$1(0,`bx-loading-spinner`,23),i&2&&xo$1(`size`,16)(`decorative`,!0)}function Dd(i,t){i&1&&sd$1(0,`bx-icon`,24)}function kd(i,t){if(i&1&&od$1(0,Id,1,2,`bx-loading-spinner`,23)(1,Dd,1,0,`bx-icon`,24),i&2){let e=t.$implicit;nd$1(e?0:1)}}function Ed(i,t){if(i&1){let e=pb$1();bo$1(0,`button`,25),br$1(`click`,function(){al$1(e);let o=Wo();return cl$1(o.clearSelection())}),sd$1(1,`bx-icon`,26),Go()}if(i&2){let e=Wo();xo$1(`surfaceEffects`,!1)(`disabled`,e.disabled())(`bxTooltip`,e.resolvedClearTooltip()),vo$1(`aria-label`,e.resolvedClearLabel())}}function Rd(i,t){if(i&1){let e=pb$1();bo$1(0,`div`,29)(1,`bx-search-input`,34,5),br$1(`search`,function(o){al$1(e);let a=Wo(3);return cl$1(a.onSearchChange(o))})(`keydown.enter`,function(o){return o.preventDefault()}),Go()()}if(i&2){let e=Wo(3);Xl$1(),xo$1(`value`,e.searchValue())(`compact`,!0)(`placeholder`,e.resolvedSearchPlaceholder())(`ariaLabel`,e.resolvedSearchPlaceholder())}}function Ld(i,t){if(i&1&&(bo$1(0,`div`,35)(1,`span`),lA(2),Go()()),i&2){let e=Wo(),n=e.$implicit,o=e.$index,a=Wo(3);xo$1(`id`,a.controlId()+`-group-`+o),vo$1(`role`,a.hasOptionActions()?`row`:null),Xl$1(),vo$1(`role`,a.hasOptionActions()?`columnheader`:null),Xl$1(),ik(n.resolvedGroup)}}function Ad(i,t){i&1&&sd$1(0,`bx-icon`,40)}function Fd(i,t){if(i&1&&(bo$1(0,`span`,41),$s$1(1,13),Go()),i&2){let e=Wo(),n=e.$implicit,o=e.$index,a=Wo(3);Xl$1(),xo$1(`ngTemplateOutlet`,t)(`ngTemplateOutletContext`,CA(2,Io,n,a.isSelected(n.value),o))}}function Vd(i,t){if(i&1&&sd$1(0,`bx-icon`,42),i&2){let e=Wo().$implicit;xo$1(`name`,e.icon)}}function zd(i,t){if(i&1&&$s$1(0,13),i&2){let e=Wo(),n=e.$implicit,o=e.$index,a=Wo(3);xo$1(`ngTemplateOutlet`,t)(`ngTemplateOutletContext`,CA(2,Io,n,a.isSelected(n.value),o))}}function Bd(i,t){if(i&1&&lA(0),i&2){let e=Wo().$implicit;mb$1(` `,e.resolvedStr,` `)}}function Hd(i,t){if(i&1&&(bo$1(0,`span`,44),$s$1(1,13),Go()),i&2){let e=Wo(),n=e.$implicit,o=e.$index,a=Wo(3);Xl$1(),xo$1(`ngTemplateOutlet`,t)(`ngTemplateOutletContext`,CA(2,Io,n,a.isSelected(n.value),o))}}function Wd(i,t){if(i&1&&sd$1(0,`bx-icon`,45),i&2){let e=Wo().$implicit;xo$1(`name`,e.endIcon)}}function jd(i,t){if(i&1){let e=pb$1();od$1(0,Ld,3,4,`div`,35),bo$1(1,`div`,36)(2,`button`,37),br$1(`click`,function(){let o=al$1(e).$implicit,a=Wo(3);return cl$1(a.selectOption(o))}),bo$1(3,`span`,38)(4,`span`,39),od$1(5,Ad,1,0,`bx-icon`,40),Go(),od$1(6,Fd,2,6,`span`,41)(7,Vd,1,1,`bx-icon`,42),bo$1(8,`span`,43,6),od$1(10,zd,1,6,`ng-container`,13)(11,Bd,1,1),Go(),od$1(12,Hd,2,6,`span`,44)(13,Wd,1,1,`bx-icon`,45),Go()()()}if(i&2){let e,n,o,a=t.$implicit,r=t.$index,u=FT(9),m=Wo(3);nd$1(a.resolvedGroup&&(r===0||m.filteredOptions()[r-1].resolvedGroup!==a.resolvedGroup)?0:-1),Xl$1(),xo$1(`leftSwipeActions`,a.leftSwipeActions??wA(15,kr))(`rightSwipeActions`,a.rightSwipeActions??wA(16,kr))(`swipeFullAction`,a.swipeFullAction??!0)(`swipeDisabled`,m.disabled()||m.isReadonly()||!!a.disabled||!!a.groupDisabled),vo$1(`role`,m.hasOptionActions()?`row`:`none`),Xl$1(),xo$1(`bxTooltip`,m.resolvedTooltipOnTruncate()&&u.truncated()?a.resolvedStr:``)(`disabled`,a.disabled||a.groupDisabled||!1),vo$1(`role`,m.hasOptionActions()?`gridcell`:`option`)(`aria-selected`,m.isSelected(a.value)),Xl$1(3),nd$1(m.isSelected(a.value)?5:-1),Xl$1(),nd$1((e=a.startTemplate??m.optionStartTemplate())?6:a.icon?7:-1,e),Xl$1(2),xo$1(`bxTruncate`,!m.optionTemplate()),Xl$1(2),nd$1((n=m.optionTemplate())?10:11,n),Xl$1(2),nd$1((o=a.endTemplate??m.optionEndTemplate())?12:a.endIcon?13:-1,o)}}function qd(i,t){if(i&1&&(bo$1(0,`div`,46),lA(1),Go()),i&2){let e=Wo(4);Xl$1(),ik(e.resolvedEmptyMessage())}}function $d(i,t){if(i&1&&od$1(0,qd,2,1,`div`,46),i&2){let e=Wo(3);nd$1(e.loading()?-1:0)}}function Ud(i,t){if(i&1&&(bo$1(0,`span`),lA(1),Go()),i&2){let e=Wo(4);Xl$1(),ik(e.resolvedLoadingLabel())}}function Gd(i,t){i&1&&sd$1(0,`bx-loading-spinner`,23),i&2&&xo$1(`size`,20)(`decorative`,!0)}function Kd(i,t){if(i&1&&(bo$1(0,`div`,32),od$1(1,Ud,2,1,`span`)(2,Gd,1,2,`bx-loading-spinner`,23),Go()),i&2){let e=Wo(3);vo$1(`aria-label`,e.resolvedLoadingLabel()||e.resolvedLoadingAriaLabel()),Xl$1(),nd$1(e.resolvedLoadingLabel()?1:2)}}function Zd(i,t){if(i&1&&(bo$1(0,`div`,33),sd$1(1,`bx-loading-indicator`,47),Go()),i&2){let e=Wo(3);Xl$1(),xo$1(`size`,16)(`label`,e.loadingLabel()??e.loadingAriaLabel())}}function Xd(i,t){if(i&1){let e=pb$1();bo$1(0,`div`,28),br$1(`keydown`,function(o){al$1(e);let a=Wo(2);return cl$1(a.onPanelKey(o))}),od$1(1,Rd,3,4,`div`,29),bo$1(2,`div`,30,4),br$1(`loadMore`,function(o){al$1(e);let a=Wo(2);return cl$1(a.requestMore(o))}),bo$1(4,`div`,31),ab$1(5,jd,14,17,null,null,Er,!1,$d,1,1),Go(),od$1(8,Kd,3,2,`div`,32)(9,Zd,2,2,`div`,33),Go()()}if(i&2){let e=FT(3),n=Wo(2);JT(n.panelClass()),xo$1(`bxSurfaceInteractive`,!1),Xl$1(),nd$1(n.isSearchable()?1:-1),Xl$1(),xo$1(`loadMoreHasMore`,n.hasMore())(`loadMoreSuppressed`,n.isSearching())(`loadMoreLoading`,n.loading())(`loadMoreDisabled`,n.disabled()||n.isReadonly())(`loadMoreError`,n.loadError())(`loadMoreConfig`,n.loadMoreConfig())(`loadMoreTemplate`,n.loadMoreTemplate())(`loadMoreRevision`,n.options()),Xl$1(2),xo$1(`hidden`,n.isSearching())(`id`,n.controlId()+`-options`),vo$1(`role`,n.hasOptionActions()?`grid`:`listbox`)(`aria-label`,n.ariaLabel()||n.resolvedLabel()),Xl$1(),cb$1(n.filteredOptions()),Xl$1(3),nd$1(n.isSearching()?8:n.loading()&&!e.actionVisible()?9:-1)}}function Yd(i,t){if(i&1){let e=pb$1();rd$1(0,Xd,10,18,`ng-template`,27,3,RA),br$1(`overlayOutsideClick`,function(o){al$1(e);let a=Wo();return cl$1(a.onOutsideClick(o))})(`attach`,function(){al$1(e);let o=FT(1),a=Wo();return cl$1(a.onPanelAttach(o))})(`detach`,function(){al$1(e);let o=Wo();return cl$1(o.onPanelDetach())})(`positionChange`,function(){al$1(e);let o=Wo();return cl$1(o.refreshPanel())})}if(i&2){let e=Wo(),n=FT(3);xo$1(`cdkConnectedOverlayOrigin`,n)(`cdkConnectedOverlayOpen`,!0)(`cdkConnectedOverlayPositions`,e.overlayPositions)(`cdkConnectedOverlayHasBackdrop`,!1)(`cdkConnectedOverlayPush`,!0)(`cdkConnectedOverlayViewportMargin`,8)(`cdkConnectedOverlayScrollStrategy`,e.panelScrollStrategy)(`cdkConnectedOverlayUsePopover`,e.overlayPopoverLocation(n.elementRef.nativeElement))(`cdkConnectedOverlayWidth`,e.panelInlineSize(n.elementRef.nativeElement.offsetWidth))}}var vi=class i extends nn{selectionChange=Pk();clearSelection(){this.clearSelectedValue(null)&&this.selectionChange.emit({value:null,source:`clear`})}isSelected(t){let e=this.internalValue();return e!==null&&this.compareWith()(e,t)}selectOption(t){t.disabled||t.groupDisabled||this.disabled()||this.isReadonly()||(this.updateValue(t.value),this.selectionChange.emit({value:t.value,source:`user`}),this.close())}static ɵfac=(()=>{let t;return function(n){return(t||(t=ho$1(i)))(n||i)}})();static ɵcmp=Fr$1({type:i,selectors:[[`bx-select`]],outputs:{selectionChange:`selectionChange`},features:[yt],ngContentSelectors:yd,decls:20,vars:48,consts:[[`origin`,`cdkOverlayOrigin`],[`valueOverflow`,`bxTruncate`],[`labelOverflow`,`bxTruncate`],[`panelOverlay`,`cdkConnectedOverlay`],[`pagination`,`bxLoadMore`],[`searchInput`,``],[`optionText`,`bxTruncate`],[3,`control`,`inline`,`tooltip`,`showLoadingIndicator`,`hint`,`hintEnd`,`subscriptSizing`,`forId`],[1,`bx-select-control`],[`type`,`button`,`role`,`combobox`,`cdkOverlayOrigin`,``,`bxSurface`,``,1,`bx-select-trigger`,3,`click`,`keydown`,`blur`,`bxTooltip`,`bxTooltipHover`,`bxTooltipTouch`,`id`,`disabled`],[1,`bx-select-container`],[1,`bx-floating-label`],[1,`bx-select-value`,3,`bxTruncate`],[3,`ngTemplateOutlet`,`ngTemplateOutletContext`],[1,`bx-selected-tags`],[`aria-hidden`,`true`,1,`bx-select-caret`],[3,`value`],[`bx-button`,``,`type`,`button`,`variant`,`text`,1,`bx-select-clear`,3,`surfaceEffects`,`disabled`,`bxTooltip`],[`cdkConnectedOverlay`,``,3,`cdkConnectedOverlayOrigin`,`cdkConnectedOverlayOpen`,`cdkConnectedOverlayPositions`,`cdkConnectedOverlayHasBackdrop`,`cdkConnectedOverlayPush`,`cdkConnectedOverlayViewportMargin`,`cdkConnectedOverlayScrollStrategy`,`cdkConnectedOverlayUsePopover`,`cdkConnectedOverlayWidth`],[3,`bxTruncate`],[`aria-hidden`,`true`,1,`bx-field-required`],[3,`text`,`config`,`disabled`,`focusable`,`tooltipOnTruncate`],[1,`bx-overflow-tag`,3,`text`,`config`,`tooltip`,`focusable`,`tooltipOnTruncate`],[3,`size`,`decorative`],[`name`,`chevron-down`,`size`,`16`],[`bx-button`,``,`type`,`button`,`variant`,`text`,1,`bx-select-clear`,3,`click`,`surfaceEffects`,`disabled`,`bxTooltip`],[`name`,`x`,`size`,`16`],[`cdkConnectedOverlay`,``,3,`overlayOutsideClick`,`attach`,`detach`,`positionChange`,`cdkConnectedOverlayOrigin`,`cdkConnectedOverlayOpen`,`cdkConnectedOverlayPositions`,`cdkConnectedOverlayHasBackdrop`,`cdkConnectedOverlayPush`,`cdkConnectedOverlayViewportMargin`,`cdkConnectedOverlayScrollStrategy`,`cdkConnectedOverlayUsePopover`,`cdkConnectedOverlayWidth`],[`bxSurface`,``,`data-bx-surface`,`glass`,`tabindex`,`-1`,1,`bx-select-panel`,3,`keydown`,`bxSurfaceInteractive`],[1,`bx-select-search-container`],[`bxLoadMore`,``,1,`bx-select-menu-container`,3,`loadMore`,`loadMoreHasMore`,`loadMoreSuppressed`,`loadMoreLoading`,`loadMoreDisabled`,`loadMoreError`,`loadMoreConfig`,`loadMoreTemplate`,`loadMoreRevision`],[3,`hidden`,`id`],[`role`,`status`,1,`bx-select-search-state`],[1,`bx-select-loading`],[3,`search`,`keydown.enter`,`value`,`compact`,`placeholder`,`ariaLabel`],[1,`bx-select-group`,3,`id`],[`bxSwipeActions`,``,1,`bx-select-option-row`,3,`leftSwipeActions`,`rightSwipeActions`,`swipeFullAction`,`swipeDisabled`],[`type`,`button`,`tabindex`,`-1`,`bxTooltipTouch`,`longpress`,1,`bx-select-option`,3,`click`,`bxTooltip`,`disabled`],[`bxSwipeContent`,``,1,`bx-select-item-inner`],[`aria-hidden`,`true`,1,`bx-select-check-placeholder`],[`name`,`check`,`size`,`16`],[1,`bx-select-adornment`],[`size`,`16`,3,`name`],[1,`bx-select-option-label`,3,`bxTruncate`],[1,`bx-select-adornment`,`bx-select-adornment-end`],[`size`,`16`,1,`bx-select-adornment-end`,3,`name`],[`role`,`status`,1,`bx-select-empty`],[3,`size`,`label`]],template:function(e,n){if(e&1&&(ld$1(xd),bo$1(0,`bx-form-field`,7)(1,`div`,8)(2,`button`,9,0),br$1(`click`,function(){return n.toggleOpen()})(`keydown`,function(a){return n.onTriggerKey(a)})(`blur`,function(){return n.onTriggerBlur()}),dd$1(4),bo$1(5,`div`,10),od$1(6,Md,5,3,`span`,11),bo$1(7,`span`,12,1),od$1(9,wd,1,2,`ng-container`,13)(10,Pd,4,1,`span`,14)(11,Od,1,1),Go()(),dd$1(12,1),bo$1(13,`span`,15)(14,`bx-visual-transition`,16),rd$1(15,kd,2,1,`ng-template`),Go()()(),od$1(16,Ed,2,4,`button`,17),Go(),od$1(17,Yd,2,9,null,18),dd$1(18,2,Sd),dd$1(19,3,_d),Go()),e&2){let o;xo$1(`control`,n.fieldControl)(`inline`,!0)(`tooltip`,n.tooltip())(`showLoadingIndicator`,!1)(`hint`,n.hint())(`hintEnd`,n.hintEnd())(`subscriptSizing`,n.resolvedSubscriptSizing())(`forId`,n.controlId()),Xl$1(),tr$1(`has-clear`,n.showClear()),Xl$1(),tr$1(`has-label`,!!n.label())(`is-invalid`,n.showError())(`is-outline`,n.resolvedAppearance()===`outline`)(`is-open`,n.isOpen())(`is-floating`,n.isFloating())(`is-readonly`,n.isReadonly())(`is-keyboard-focused`,n.keyboardFocused()),xo$1(`bxTooltip`,n.resolvedTooltipOnTruncate()?n.selectionDisplay()===`tags`?n.selectedOptionLabel():n.truncatedSelectionTooltip():``)(`bxTooltipHover`,n.selectionDisplay()!==`tags`)(`bxTooltipTouch`,n.selectionDisplay()===`tags`?`none`:`longpress`)(`id`,n.controlId())(`disabled`,n.disabled()),vo$1(`aria-haspopup`,n.hasOptionActions()?`grid`:`listbox`)(`data-testid`,n.dataTestId())(`aria-label`,n.ariaLabel()||n.resolvedLabel())(`aria-labelledby`,n.ariaLabelledBy())(`aria-describedby`,n.describedBy())(`aria-invalid`,n.showError())(`aria-required`,n.required())(`aria-readonly`,n.isReadonly())(`aria-busy`,n.loading()||n.pending()||n.isSearching())(`aria-expanded`,n.isOpen())(`aria-controls`,n.isPanelAttached()?n.controlId()+`-options`:null),Xl$1(4),nd$1(n.label()?6:-1),Xl$1(),tr$1(`is-placeholder`,!n.selectedOptionLabel()),xo$1(`bxTruncate`,!(n.selectionDisplay()===`tags`&&n.selectedOptions().length)&&!n.triggerTemplate()),Xl$1(2),nd$1((o=n.triggerTemplate())?9:n.selectionDisplay()===`tags`&&n.selectedOptions().length?10:11,o),Xl$1(5),xo$1(`value`,n.loading()||n.pending()||n.isSearching()),Xl$1(2),nd$1(n.showClear()?16:-1),Xl$1(),nd$1(n.isPanelAttached()?17:-1)}},dependencies:[Wu$1,GC,fR,pR,rh$1,ce,_e,ZC,tn,Ye,ft,Ta,Yi$1,Et,js$1,Pt,ct],styles:[`
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
}`]})};var Qd=[`track`];var Jd=[`*`,[[`bx-error`]],[[`bx-hint`]]];var ec=[`*`,`bx-error`,`bx-hint`];var tc=[`ngProjectAs`,`bx-error`,5,[`bx-error`]];var nc=[`ngProjectAs`,`bx-hint`,5,[`bx-hint`]];function ic(i,t){i&1&&(bo$1(0,`span`,7),lA(1,`*`),Go())}var Rr=class i extends Xt{bxA11yService=b(Br$1);track=Sz(`track`);motion;constructor(){super(),Vk(()=>{let t=this.track()?.nativeElement,e=this.displayedChecked()?1:0,n=this.bxA11yService.isReducedMotion();if(!t)return;let o=!this.motion;this.motion??=Zn$1([e],([a],[r])=>{Kn$1(t,{"--bx-toggle-position":String(a),"--bx-toggle-stretch":String(this.bxA11yService.isReducedMotion()?0:Math.min(.05,Math.abs(r)*.008))})},vr$1.elastic),this.motion.retarget([e],o||n)}),this.destroyRef.onDestroy(()=>this.motion?.destroy())}static ɵfac=function(e){return new(e||i)};static ɵcmp=Fr$1({type:i,selectors:[[`bx-slide-toggle`]],viewQuery:function(e,n){e&1&&Yy(n.track,Qd,5),e&2&&fb$1()},features:[yt],ngContentSelectors:ec,decls:12,vars:36,consts:[[`track`,``],[3,`control`,`inline`,`tooltip`,`loading`,`hint`,`hintEnd`,`subscriptSizing`,`forId`],[1,`bx-inline-wrapper`],[`type`,`checkbox`,`role`,`switch`,1,`bx-visually-hidden`,3,`click`,`change`,`blur`,`id`,`disabled`,`required`,`checked`],[`bxSurface`,``,1,`bx-slide-toggle-track`,3,`bxSurfaceEmission`,`bxSurfaceEmissionStrength`],[1,`bx-slide-toggle-thumb`],[1,`bx-inline-label`],[`aria-hidden`,`true`,1,`bx-inline-required`]],template:function(e,n){e&1&&(ld$1(Jd),bo$1(0,`bx-form-field`,1)(1,`label`,2)(2,`input`,3),br$1(`click`,function(a){return n.onReadonlyClick(a)})(`change`,function(a){return n.onToggle(a)})(`blur`,function(){return n.onBlur()}),Go(),bo$1(3,`div`,4,0),sd$1(5,`div`,5),Go(),bo$1(6,`span`,6),dd$1(7),lA(8),od$1(9,ic,2,0,`span`,7),Go()(),dd$1(10,1,tc),dd$1(11,2,nc),Go()),e&2&&(xo$1(`control`,n.fieldControl)(`inline`,!0)(`tooltip`,n.tooltip())(`loading`,n.loading())(`hint`,n.hint())(`hintEnd`,n.hintEnd())(`subscriptSizing`,n.resolvedSubscriptSizing())(`forId`,n.controlId()),Xl$1(),tr$1(`is-disabled`,n.disabled())(`is-readonly`,n.isReadonly())(`is-keyboard-focused`,n.keyboardFocused())(`label-before`,n.labelPosition()===`before`),Xl$1(),xo$1(`id`,n.controlId())(`disabled`,n.disabled())(`required`,n.effectiveRequired())(`checked`,n.displayedChecked()),vo$1(`name`,n.name()||null)(`data-testid`,n.dataTestId())(`aria-label`,n.ariaLabel())(`aria-labelledby`,n.ariaLabelledBy())(`aria-describedby`,n.describedBy())(`aria-invalid`,n.showError())(`aria-readonly`,n.isReadonly())(`aria-checked`,n.displayedChecked()),Xl$1(),tr$1(`is-checked`,n.displayedChecked())(`is-invalid`,n.showError()),xo$1(`bxSurfaceEmission`,n.showError()?`var(--bx-text-danger)`:`var(--bx-accent)`)(`bxSurfaceEmissionStrength`,n.displayedChecked()?1.1:.35),Xl$1(5),mb$1(``,n.resolvedLabel(),` `),Xl$1(),nd$1(n.effectiveRequired()&&!n.resolvedHideRequiredMarker()?9:-1))},dependencies:[GC,ce],styles:[`
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
}`]})};var xi=class i{elementRef=b(ke);bxA11yService=b(Br$1);glassiness=ee();discrete=ee(!1);displayWith=ee(String);showTickMarks=ee(!1);shell;valueLabel;tickMarks;tickList;thumb;motion;opticSurface;releaseGesture;pressed=!1;lastPosition=0;lastInputTime=0;trackWidth=0;thumbWidth=0;pointerId=null;constructor(){b(ni$1),We$1(()=>{let n=this.bxA11yService.isReducedMotion(),o=this.glassiness()??`auto`;this.opticSurface?.update({glassiness:o,quality:`auto`,localRefraction:!0,interactive:!1,emission:!1,reducedMotion:n}),n&&this.motion?.retarget([0,0],!0)}),aI(()=>this.sync());let t=b(le),e=b(ge);er$1(()=>{let n=this.elementRef.nativeElement,o=n.ownerDocument.createElement(`span`);o.className=`bx-slider-shell`;let a=n.ownerDocument.createElement(`span`);a.className=`bx-slider-thumb`,a.setAttribute(`aria-hidden`,`true`);let r=n.ownerDocument.createElement(`span`);r.className=`bx-slider-lens`,a.append(r);let u=n.ownerDocument.createElement(`span`);u.className=`bx-slider-optic`,u.hidden=!0,a.append(u),n.before(o),o.append(n,a),this.shell=o,this.thumb=a,this.motion=Zn$1([0,0],([O,Z])=>{let re=this.bxA11yService.isReducedMotion();u.hidden=O<.01,Kn$1(a,{"--bx-slider-pressure":String(re?0:O),"--bx-slider-stretch":String(re?0:Math.max(0,Z))})},vr$1.elastic);let m=O=>{O?.type===`visibilitychange`&&!n.ownerDocument.hidden||O&&`pointerId`in O&&O.pointerId!==this.pointerId||(this.pressed=!1,this.pointerId=null,this.motion?.retarget([0,0],this.bxA11yService.isReducedMotion()),n.ownerDocument.defaultView?.removeEventListener(`pointerup`,m,!0),n.ownerDocument.defaultView?.removeEventListener(`pointercancel`,m,!0),n.ownerDocument.defaultView?.removeEventListener(`blur`,m),n.ownerDocument.removeEventListener(`visibilitychange`,m),this.releaseGesture=void 0)},x=O=>{!O.isPrimary||O.button!==0||n.disabled||n.hasAttribute(`readonly`)||n.getAttribute(`aria-readonly`)===`true`||(this.opticSurface??=t.runOutsideAngular(()=>Yn$1(u,{glassiness:this.glassiness()??`auto`,quality:`auto`,localRefraction:!0,interactive:!1,emission:!1,reducedMotion:this.bxA11yService.isReducedMotion()})),this.pressed=!0,this.pointerId=O.pointerId,this.lastInputTime=0,this.motion?.retarget([1,0],this.bxA11yService.isReducedMotion()),n.ownerDocument.defaultView?.addEventListener(`pointerup`,m,!0),n.ownerDocument.defaultView?.addEventListener(`pointercancel`,m,!0),n.ownerDocument.defaultView?.addEventListener(`blur`,m),n.ownerDocument.addEventListener(`visibilitychange`,m),this.releaseGesture=m)};n.addEventListener(`pointerdown`,x),n.addEventListener(`blur`,m);let P=n.ownerDocument.createElement(`span`);P.className=`bx-slider-value-label`,P.setAttribute(`aria-hidden`,`true`),o.append(P),this.valueLabel=P;let D=n.ownerDocument.createElement(`datalist`);D.id=`bx-slider-ticks-${n.id||Math.random().toString(36).slice(2)}`,o.append(D),this.tickList=D;let L=n.ownerDocument.createElement(`span`);L.className=`bx-slider-ticks`,L.setAttribute(`aria-hidden`,`true`),o.append(L),this.tickMarks=L,this.sync();let V=()=>{this.trackWidth=n.offsetWidth,this.thumbWidth=a.offsetWidth,o.style.setProperty(`--bx-slider-center-y`,`${n.offsetTop+n.offsetHeight/2}px`),o.style.setProperty(`--bx-slider-track-start`,`${n.offsetLeft}px`),o.style.setProperty(`--bx-slider-track-width`,`${n.offsetWidth}px`),Wn(a),this.sync()},Q=new ResizeObserver(V);t.runOutsideAngular(()=>{Q.observe(n),Q.observe(o),Q.observe(a),V()});let J=t.runOutsideAngular(()=>_R(a,O=>{let Z=O.reflectionStrength>O.strength,re=Z?O.reflectionStrength:O.strength;re<=.04?(a.style.removeProperty(`--bx-slider-light-color`),a.style.removeProperty(`--bx-slider-light-strength`)):(a.style.setProperty(`--bx-slider-light-color`,Z?O.reflection:O.color),a.style.setProperty(`--bx-slider-light-strength`,String(re))),a.style.setProperty(`--bx-slider-light-x`,`${Z?O.reflectionX:O.x}%`),a.style.setProperty(`--bx-slider-light-y`,`${Z?O.reflectionY:O.y}%`),Kn$1(o,{"--bx-slider-light-color":Z?O.reflection:O.color,"--bx-slider-light-strength":String(Math.max(.04,re))})},n));e.onDestroy(()=>{Q.disconnect(),J(),m(),n.removeEventListener(`pointerdown`,x),n.removeEventListener(`blur`,m),this.motion?.destroy(),this.opticSurface?.destroy(),this.opticSurface=void 0,n.parentNode===o?o.replaceWith(n):o.remove(),this.shell=this.thumb=void 0})})}onInput(t){let e=this.elementRef.nativeElement,n=(e.max===``?100:Number(e.max))-(e.min===``?0:Number(e.min)),o=n>0?e.valueAsNumber/n:0,a=Math.max(.008,(t.timeStamp-this.lastInputTime)/1e3),r=this.pressed&&this.lastInputTime>0?Math.min(.065,Math.abs(o-this.lastPosition)/a*.015):0;this.lastPosition=o,this.lastInputTime=t.timeStamp,this.motion?.retarget([this.pressed?1:0,r],this.bxA11yService.isReducedMotion()),this.sync()}sync(){let t=this.elementRef.nativeElement;(t.disabled||t.hasAttribute(`readonly`)||t.getAttribute(`aria-readonly`)===`true`)&&this.releaseGesture?.();let e=t.min===``?0:Number(t.min),n=t.max===``?100:Number(t.max),o=n>e?Math.max(0,Math.min(100,(t.valueAsNumber-e)/(n-e)*100)):0;if(this.shell&&this.thumbWidth>0&&this.trackWidth>0){let r=t.hasAttribute(`aria-valuemax`)?Number(t.getAttribute(`aria-valuemax`)):t.hasAttribute(`aria-valuemin`)?Number(t.getAttribute(`aria-valuemin`)):null;if(r!==null&&Number.isFinite(r)&&n>e){let u=Math.abs(r-t.valueAsNumber)/(n-e)*(this.trackWidth-this.thumbWidth),m=String(Math.max(0,Math.min(.45,u*2/this.thumbWidth-2)));this.shell.style.getPropertyValue(`--bx-slider-neighbor-limit`)!==m&&this.shell.style.setProperty(`--bx-slider-neighbor-limit`,m)}}if(this.valueLabel&&(this.valueLabel.hidden=!this.discrete(),this.valueLabel.textContent=this.displayWith()(t.valueAsNumber)),this.tickList){let r=Math.min(1e3,Math.floor((n-e)/(Number(t.step)||1))),u=`${e}:${n}:${t.step}:${this.showTickMarks()}`;if(this.tickList.dataset.range!==u&&(this.tickList.replaceChildren(),this.tickMarks?.replaceChildren(),this.tickList.dataset.range=u,this.showTickMarks()&&r>0))for(let m=0;m<=r;m++){let x=t.ownerDocument.createElement(`option`);x.value=String(e+m*(Number(t.step)||1)),this.tickList.append(x);let P=t.ownerDocument.createElement(`span`);P.className=`bx-slider-tick`,P.style.setProperty(`--bx-slider-tick-position`,String(m/r)),this.tickMarks?.append(P)}this.showTickMarks()?t.setAttribute(`list`,this.tickList.id):t.getAttribute(`list`)===this.tickList.id&&t.removeAttribute(`list`)}let a=`${Number.isFinite(o)?o:0}%`;if(t.style.getPropertyValue(`--bx-slider-progress`)!==a&&t.style.setProperty(`--bx-slider-progress`,a),this.shell){let r=String((Number.isFinite(o)?o:0)/100);this.shell.style.getPropertyValue(`--bx-slider-position`)!==r&&(this.shell.style.setProperty(`--bx-slider-position`,r),this.thumb&&Wn(this.thumb))}}static ɵfac=function(e){return new(e||i)};static ɵdir=pe({type:i,selectors:[[`input`,`type`,`range`,`bxSlider`,``]],hostAttrs:[1,`bx-slider`],hostBindings:function(e,n){e&1&&br$1(`input`,function(a){return n.onInput(a)})},inputs:{glassiness:[1,`glassiness`],discrete:[1,`discrete`],displayWith:[1,`displayWith`],showTickMarks:[1,`showTickMarks`]}})};var oc=[`*`,[[`bx-error`]],[[`bx-hint`]]];var ac=[`*`,`bx-error`,`bx-hint`];var rc=[`ngProjectAs`,`bx-error`,5,[`bx-error`]];var sc=[`ngProjectAs`,`bx-hint`,5,[`bx-hint`]];var Lr=class i extends we{groupName=G(()=>this.name()||this.controlId());focus(t){let e=this.nativeElement.querySelector(`input:checked:not(:disabled)`);e?e.focus(t):super.focus(t)}select(t){this.updateValue(t)}markTouched(){this.markAsTouched()}static ɵfac=(()=>{let t;return function(n){return(t||(t=ho$1(i)))(n||i)}})();static ɵcmp=Fr$1({type:i,selectors:[[`bx-radio-group`]],features:[rr$1([{provide:di,useExisting:jt(()=>i)}]),yt],ngContentSelectors:ac,decls:5,vars:15,consts:[[3,`control`,`label`,`hint`,`hintEnd`,`tooltip`,`hideRequiredMarker`,`subscriptSizing`,`forId`],[`role`,`radiogroup`,3,`id`]],template:function(e,n){e&1&&(ld$1(oc),bo$1(0,`bx-form-field`,0)(1,`div`,1),dd$1(2),Go(),dd$1(3,1,rc),dd$1(4,2,sc),Go()),e&2&&(xo$1(`control`,n.fieldControl)(`label`,n.label())(`hint`,n.hint())(`hintEnd`,n.hintEnd())(`tooltip`,n.tooltip())(`hideRequiredMarker`,n.resolvedHideRequiredMarker())(`subscriptSizing`,n.resolvedSubscriptSizing())(`forId`,n.controlId()),Xl$1(),xo$1(`id`,n.controlId()),vo$1(`aria-label`,n.ariaLabel()||n.resolvedLabel())(`aria-labelledby`,n.ariaLabelledBy())(`aria-describedby`,n.describedBy())(`aria-invalid`,n.showError())(`aria-required`,n.effectiveRequired())(`aria-readonly`,n.isReadonly()))},dependencies:[ce],styles:[`
[_nghost-%COMP%] {
  display: block;
}
[role=radiogroup][_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: var(--%NS%bx-radio-group-gap, 0.5rem);
  --%NS%bx-field-subscript-height: 0;
}`]})};var Ar=class i{static ɵfac=function(e){return new(e||i)};static ɵdir=pe({type:i,selectors:[[``,`bxPrefix`,``]],hostAttrs:[1,`bx-field-prefix`]})};var Fr=class i{static ɵfac=function(e){return new(e||i)};static ɵdir=pe({type:i,selectors:[[``,`bxSuffix`,``]],hostAttrs:[1,`bx-field-suffix`]})};function Vr(i){let t=Number(i);return Number.isFinite(t)?Math.max(2,Math.floor(t)):2}var lc=[`summaryOverflow`];var dc=[[[``,`bxIconStart`,``],[``,`bxPrefix`,``]],[[``,`bxSuffix`,``],[``,`bxIconEnd`,``]],[[`bx-error`]],[[`bx-hint`]]];var cc=[`[bxIconStart], [bxPrefix]`,`[bxSuffix], [bxIconEnd]`,`bx-error`,`bx-hint`];var uc=[`ngProjectAs`,`bx-error`,5,[`bx-error`]];var pc=[`ngProjectAs`,`bx-hint`,5,[`bx-hint`]];var zr=()=>[];var Do=(i,t,e)=>({$implicit:i,selected:t,index:e});var Hr=(i,t)=>t.value;function bc(i,t){i&1&&(bo$1(0,`span`,22),lA(1,`*`),Go())}function mc(i,t){if(i&1&&(bo$1(0,`span`,12)(1,`span`,21,3),lA(3),Go(),od$1(4,bc,2,0,`span`,22),Go()),i&2){let e=Wo();Xl$1(),xo$1(`bxTruncate`,!0),Xl$1(2),ik(e.resolvedLabel()),Xl$1(),nd$1(e.required()&&!e.resolvedHideRequiredMarker()?4:-1)}}function gc(i,t){if(i&1&&$s$1(0,14),i&2){let e=Wo();xo$1(`ngTemplateOutlet`,t)(`ngTemplateOutletContext`,e.triggerContext())}}function hc(i,t){if(i&1&&sd$1(0,`bx-tag`,23),i&2){let e=Wo(2);xo$1(`text`,e.allSelectedText())(`config`,e.tagConfig())(`focusable`,!1)(`tooltipOnTruncate`,!1)}}function fc(i,t){if(i&1&&sd$1(0,`bx-tag`,24),i&2){let e=t.$implicit,n=Wo(3);xo$1(`text`,e.label)(`config`,n.selectionTagConfig(e))(`disabled`,n.disabled()||!!e.disabled)(`focusable`,!1)(`tooltipOnTruncate`,n.resolvedTooltipOnTruncate()?void 0:!1)}}function vc(i,t){if(i&1&&sd$1(0,`bx-tag`,25),i&2){let e=Wo(3);xo$1(`text`,e.overflowTagLabel())(`config`,e.overflowTagConfig())(`tooltip`,e.overflowTagTooltip())(`focusable`,!1)(`tooltipOnTruncate`,e.resolvedTooltipOnTruncate()?void 0:!1)}}function xc(i,t){if(i&1&&(ab$1(0,fc,1,5,`bx-tag`,24,Hr),od$1(2,vc,1,5,`bx-tag`,25)),i&2){let e=Wo(2);cb$1(e.visibleTags()),Xl$1(2),nd$1(e.selectedOptions().length>e.visibleTagCount()?2:-1)}}function yc(i,t){if(i&1&&(bo$1(0,`span`,15),od$1(1,hc,1,4,`bx-tag`,23)(2,xc,3,1),Go()),i&2){let e=Wo();Xl$1(),nd$1(e.selectAll()&&e.allSelectedText()?1:2)}}function Sc(i,t){if(i&1&&lA(0),i&2){let e=Wo();mb$1(` `,e.displayedSelection()||(e.isFloating()||!e.label()?e.resolvedPlaceholder():``),` `)}}function _c(i,t){i&1&&sd$1(0,`bx-loading-spinner`,26),i&2&&xo$1(`size`,16)(`decorative`,!0)}function Cc(i,t){i&1&&sd$1(0,`bx-icon`,27)}function Mc(i,t){if(i&1&&od$1(0,_c,1,2,`bx-loading-spinner`,26)(1,Cc,1,0,`bx-icon`,27),i&2){let e=t.$implicit;nd$1(e?0:1)}}function wc(i,t){if(i&1){let e=pb$1();bo$1(0,`button`,28),br$1(`click`,function(){al$1(e);let o=Wo();return cl$1(o.clearSelection())}),sd$1(1,`bx-icon`,29),Go()}if(i&2){let e=Wo();xo$1(`surfaceEffects`,!1)(`disabled`,e.disabled())(`bxTooltip`,e.resolvedClearTooltip()),vo$1(`aria-label`,e.resolvedClearLabel())}}function Nc(i,t){if(i&1){let e=pb$1();bo$1(0,`div`,32)(1,`bx-search-input`,38,6),br$1(`search`,function(o){al$1(e);let a=Wo(3);return cl$1(a.onSearchChange(o))})(`keydown.enter`,function(o){return o.preventDefault()}),Go()()}if(i&2){let e=Wo(3);Xl$1(),xo$1(`value`,e.searchValue())(`compact`,!0)(`placeholder`,e.resolvedSearchPlaceholder())(`ariaLabel`,e.resolvedSearchPlaceholder())}}function Tc(i,t){if(i&1){let e=pb$1();bo$1(0,`button`,39),br$1(`click`,function(){al$1(e);let o=Wo(3);return cl$1(o.toggleSelectAll())}),sd$1(1,`bx-checkbox-indicator`,40),lA(2),Go()}if(i&2){let e=Wo(3);xo$1(`disabled`,e.disabled()||e.isReadonly()),vo$1(`aria-checked`,e.selectAllChecked()?`true`:e.someSelected()?`mixed`:`false`),Xl$1(),xo$1(`checked`,e.selectAllChecked())(`indeterminate`,!e.selectAllChecked()&&e.someSelected())(`disabled`,e.disabled()),Xl$1(),mb$1(` `,e.resolvedSelectAllLabel(),` `)}}function Pc(i,t){if(i&1&&(bo$1(0,`div`,41)(1,`span`),lA(2),Go()()),i&2){let e=Wo(),n=e.$implicit,o=e.$index,a=Wo(3);xo$1(`id`,a.controlId()+`-group-`+o),vo$1(`role`,a.hasOptionActions()?`row`:null),Xl$1(),vo$1(`role`,a.hasOptionActions()?`columnheader`:null),Xl$1(),ik(n.resolvedGroup)}}function Oc(i,t){if(i&1&&(bo$1(0,`span`,46),$s$1(1,14),Go()),i&2){let e=Wo(),n=e.$implicit,o=e.$index,a=Wo(3);Xl$1(),xo$1(`ngTemplateOutlet`,t)(`ngTemplateOutletContext`,CA(2,Do,n,a.isSelected(n.value),o))}}function Ic(i,t){if(i&1&&sd$1(0,`bx-icon`,47),i&2){let e=Wo().$implicit;xo$1(`name`,e.icon)}}function Dc(i,t){if(i&1&&$s$1(0,14),i&2){let e=Wo(),n=e.$implicit,o=e.$index,a=Wo(3);xo$1(`ngTemplateOutlet`,t)(`ngTemplateOutletContext`,CA(2,Do,n,a.isSelected(n.value),o))}}function kc(i,t){if(i&1&&lA(0),i&2){let e=Wo().$implicit;mb$1(` `,e.resolvedStr,` `)}}function Ec(i,t){if(i&1&&(bo$1(0,`span`,49),$s$1(1,14),Go()),i&2){let e=Wo(),n=e.$implicit,o=e.$index,a=Wo(3);Xl$1(),xo$1(`ngTemplateOutlet`,t)(`ngTemplateOutletContext`,CA(2,Do,n,a.isSelected(n.value),o))}}function Rc(i,t){if(i&1&&sd$1(0,`bx-icon`,50),i&2){let e=Wo().$implicit;xo$1(`name`,e.endIcon)}}function Lc(i,t){if(i&1){let e=pb$1();od$1(0,Pc,3,4,`div`,41),bo$1(1,`div`,42)(2,`button`,43),br$1(`click`,function(){let o=al$1(e).$implicit,a=Wo(3);return cl$1(a.selectOption(o))}),bo$1(3,`span`,44),sd$1(4,`bx-checkbox-indicator`,45),od$1(5,Oc,2,6,`span`,46)(6,Ic,1,1,`bx-icon`,47),bo$1(7,`span`,48,7),od$1(9,Dc,1,6,`ng-container`,14)(10,kc,1,1),Go(),od$1(11,Ec,2,6,`span`,49)(12,Rc,1,1,`bx-icon`,50),Go()()()}if(i&2){let e,n,o,a=t.$implicit,r=t.$index,u=FT(8),m=Wo(3);nd$1(a.resolvedGroup&&(r===0||m.filteredOptions()[r-1].resolvedGroup!==a.resolvedGroup)?0:-1),Xl$1(),xo$1(`leftSwipeActions`,a.leftSwipeActions??wA(16,zr))(`rightSwipeActions`,a.rightSwipeActions??wA(17,zr))(`swipeFullAction`,a.swipeFullAction??!0)(`swipeDisabled`,m.disabled()||m.isReadonly()||!!a.disabled||!!a.groupDisabled),vo$1(`role`,m.hasOptionActions()?`row`:`none`),Xl$1(),xo$1(`bxTooltip`,m.resolvedTooltipOnTruncate()&&u.truncated()?a.resolvedStr:``)(`disabled`,a.disabled||a.groupDisabled||!1),vo$1(`role`,m.hasOptionActions()?`gridcell`:`option`)(`aria-selected`,m.isSelected(a.value)),Xl$1(2),xo$1(`checked`,m.isSelected(a.value))(`disabled`,m.disabled()||!!a.disabled||!!a.groupDisabled),Xl$1(),nd$1((e=a.startTemplate??m.optionStartTemplate())?5:a.icon?6:-1,e),Xl$1(2),xo$1(`bxTruncate`,!m.optionTemplate()),Xl$1(2),nd$1((n=m.optionTemplate())?9:10,n),Xl$1(2),nd$1((o=a.endTemplate??m.optionEndTemplate())?11:a.endIcon?12:-1,o)}}function Ac(i,t){if(i&1&&(bo$1(0,`div`,51),lA(1),Go()),i&2){let e=Wo(4);Xl$1(),ik(e.resolvedEmptyMessage())}}function Fc(i,t){if(i&1&&od$1(0,Ac,2,1,`div`,51),i&2){let e=Wo(3);nd$1(e.loading()?-1:0)}}function Vc(i,t){if(i&1&&(bo$1(0,`span`),lA(1),Go()),i&2){let e=Wo(4);Xl$1(),ik(e.resolvedLoadingLabel())}}function zc(i,t){i&1&&sd$1(0,`bx-loading-spinner`,26),i&2&&xo$1(`size`,20)(`decorative`,!0)}function Bc(i,t){if(i&1&&(bo$1(0,`div`,36),od$1(1,Vc,2,1,`span`)(2,zc,1,2,`bx-loading-spinner`,26),Go()),i&2){let e=Wo(3);vo$1(`aria-label`,e.resolvedLoadingLabel()||e.resolvedLoadingAriaLabel()),Xl$1(),nd$1(e.resolvedLoadingLabel()?1:2)}}function Hc(i,t){if(i&1&&(bo$1(0,`div`,37),sd$1(1,`bx-loading-indicator`,52),Go()),i&2){let e=Wo(3);Xl$1(),xo$1(`size`,16)(`label`,e.loadingLabel()??e.loadingAriaLabel())}}function Wc(i,t){if(i&1){let e=pb$1();bo$1(0,`div`,31),br$1(`keydown`,function(o){al$1(e);let a=Wo(2);return cl$1(a.onPanelKey(o))}),od$1(1,Nc,3,4,`div`,32),od$1(2,Tc,3,6,`button`,33),bo$1(3,`div`,34,5),br$1(`loadMore`,function(o){al$1(e);let a=Wo(2);return cl$1(a.requestMore(o))}),bo$1(5,`div`,35),ab$1(6,Lc,13,18,null,null,Hr,!1,Fc,1,1),Go(),od$1(9,Bc,3,2,`div`,36)(10,Hc,2,2,`div`,37),Go()()}if(i&2){let e=FT(4),n=Wo(2);JT(n.panelClass()),xo$1(`bxSurfaceInteractive`,!1),Xl$1(),nd$1(n.isSearchable()?1:-1),Xl$1(),nd$1(n.showSelectAll()?2:-1),Xl$1(),xo$1(`loadMoreHasMore`,n.hasMore())(`loadMoreSuppressed`,n.isSearching())(`loadMoreLoading`,n.loading())(`loadMoreDisabled`,n.disabled()||n.isReadonly())(`loadMoreError`,n.loadError())(`loadMoreConfig`,n.loadMoreConfig())(`loadMoreTemplate`,n.loadMoreTemplate())(`loadMoreRevision`,n.options()),Xl$1(2),xo$1(`hidden`,n.isSearching())(`id`,n.controlId()+`-options`),vo$1(`role`,n.hasOptionActions()?`grid`:`listbox`)(`aria-multiselectable`,!0)(`aria-label`,n.ariaLabel()||n.resolvedLabel()),Xl$1(),cb$1(n.filteredOptions()),Xl$1(3),nd$1(n.isSearching()?9:n.loading()&&!e.actionVisible()?10:-1)}}function jc(i,t){if(i&1){let e=pb$1();rd$1(0,Wc,11,20,`ng-template`,30,4,RA),br$1(`overlayOutsideClick`,function(o){al$1(e);let a=Wo();return cl$1(a.onOutsideClick(o))})(`attach`,function(){al$1(e);let o=FT(1),a=Wo();return cl$1(a.onPanelAttach(o))})(`detach`,function(){al$1(e);let o=Wo();return cl$1(o.onPanelDetach())})(`positionChange`,function(){al$1(e);let o=Wo();return cl$1(o.refreshPanel())})}if(i&2){let e=Wo(),n=FT(3);xo$1(`cdkConnectedOverlayOrigin`,n)(`cdkConnectedOverlayOpen`,!0)(`cdkConnectedOverlayPositions`,e.overlayPositions)(`cdkConnectedOverlayHasBackdrop`,!1)(`cdkConnectedOverlayPush`,!0)(`cdkConnectedOverlayViewportMargin`,8)(`cdkConnectedOverlayScrollStrategy`,e.panelScrollStrategy)(`cdkConnectedOverlayUsePopover`,e.overlayPopoverLocation(n.elementRef.nativeElement))(`cdkConnectedOverlayWidth`,e.panelInlineSize(n.elementRef.nativeElement.offsetWidth))}}var Br=class i extends nn{labelsAdapter=b(VQ,{optional:!0});summaryOverflow=Sz(`summaryOverflow`);hasSelection=G(()=>!!this.internalValue()?.length||this.selectAll());resolvedSelectAllLabel=G(()=>LQ(this.selectAllLabel(),this.labelsAdapter));selectableOptions=G(()=>this.filteredOptions().filter(t=>!t.disabled&&!t.groupDisabled));allLoadedSelected=G(()=>{let t=this.selectableOptions();return t.length>0&&t.every(e=>this.isSelected(e.value))});selectAllChecked=G(()=>this.selectAll()||this.allLoadedSelected());someSelected=G(()=>this.selectableOptions().some(t=>this.isSelected(t.value)));usesSummary=G(()=>{let t=this.internalValue()?.length??0;return this.selectionDisplay()===`tags`&&this.selectedOptions().length>this.visibleTagCount()||!!(this.selectAll()&&this.allSelectedText())||t>this.summaryThreshold()||t>=2&&(this.summaryOverflow()?.truncated()??!1)});displayedSelection=G(()=>{if(this.selectAll()&&this.allSelectedText())return LQ(this.allSelectedText(),this.labelsAdapter);if(!this.usesSummary())return this.selectedOptionLabel();let t=this.internalValue()?.length??0;return LQ(this.selectedCountText(),this.labelsAdapter,{count:t}).replaceAll(`{count}`,String(t))});resolvedAllSelectedTooltip=G(()=>{let t=this.allSelectedTooltip();return t===!1?``:t===void 0?this.resolvedTooltipOnTruncate()?this.selectedOptionLabel():``:LQ(t,this.labelsAdapter)});selectionTooltip=G(()=>this.isOpen()?``:this.selectAll()?this.resolvedAllSelectedTooltip():this.resolvedTooltipOnTruncate()?this.selectionDisplay()===`tags`||this.usesSummary()?this.selectedOptionLabel():this.truncatedSelectionTooltip():``);allSelectedTooltip=ee(void 0);allSelectedText=ee(void 0);selectedCountText=ee(`{count} selected`);summaryThreshold=ee(2,{transform:Vr});showSelectAll=ee(!0);selectAllLabel=ee(`Select all`);selectionScope=ee(void 0);selectAll=_z(!1);selectionChange=Pk();selectAllIntentChange=Pk();scope;constructor(){super(),We$1(()=>{let t=this.selectionScope()??this.searchTerm(),e=this.filteredOptions(),n=this.selectAll(),o=de(this.internalValue)??[];if(this.scope!==void 0&&t!==this.scope&&n)this.selectAll.set(!1),this.emitIntent(!1,`scope-change`,t);else if(n&&!this.disabled()&&!this.isReadonly()){let a=e.filter(r=>!r.disabled&&!r.groupDisabled&&!o.some(u=>this.compareWith()(u,r.value))).map(r=>r.value);if(a.length){let r=[...o,...a];this.updateValue(r),this.selectionChange.emit({value:r,source:`page`})}}this.scope=t})}clearSelection(){if(this.disabled()||this.isReadonly())return;let t=this.selectAll();this.selectAll.set(!1),this.clearSelectedValue([]),this.selectionChange.emit({value:[],source:`clear`}),t&&this.emitIntent(!1,`clear`)}isSelected(t){return(this.internalValue()??[]).some(e=>this.compareWith()(e,t))}toggleSelectAll(){if(this.disabled()||this.isReadonly())return;let t=!this.selectAllChecked(),e=this.selectableOptions(),n=this.internalValue()??[],o=t?[...n,...e.filter(a=>!this.isSelected(a.value)).map(a=>a.value)]:n.filter(a=>!e.some(r=>this.compareWith()(a,r.value)));this.selectAll.set(t),this.updateValue(o),this.selectionChange.emit({value:o,source:`select-all`}),this.emitIntent(t,`toggle`)}reset(){super.reset(),this.selectAll()&&(this.selectAll.set(!1),this.emitIntent(!1,`reset`))}selectOption(t){if(t.disabled||t.groupDisabled||this.disabled()||this.isReadonly())return;let e=this.isSelected(t.value),n=e?(this.internalValue()??[]).filter(o=>!this.compareWith()(o,t.value)):[...this.internalValue()??[],t.value];this.updateValue(n),this.selectionChange.emit({value:n,source:`user`}),e&&this.selectAll()&&(this.selectAll.set(!1),this.emitIntent(!1,`item-deselected`))}emitIntent(t,e,n=this.selectionScope()??this.searchTerm()){this.selectAllIntentChange.emit({selected:t,scope:n,values:this.internalValue()??[],reason:e})}static ɵfac=function(e){return new(e||i)};static ɵcmp=Fr$1({type:i,selectors:[[`bx-multi-select`]],viewQuery:function(e,n){e&1&&Yy(n.summaryOverflow,lc,5),e&2&&fb$1()},inputs:{allSelectedTooltip:[1,`allSelectedTooltip`],allSelectedText:[1,`allSelectedText`],selectedCountText:[1,`selectedCountText`],summaryThreshold:[1,`summaryThreshold`],showSelectAll:[1,`showSelectAll`],selectAllLabel:[1,`selectAllLabel`],selectionScope:[1,`selectionScope`],selectAll:[1,`selectAll`]},outputs:{selectAll:`selectAllChange`,selectionChange:`selectionChange`,selectAllIntentChange:`selectAllIntentChange`},features:[yt],ngContentSelectors:cc,decls:23,vars:49,consts:[[`origin`,`cdkOverlayOrigin`],[`valueOverflow`,`bxTruncate`],[`summaryOverflow`,`bxTruncate`],[`labelOverflow`,`bxTruncate`],[`panelOverlay`,`cdkConnectedOverlay`],[`pagination`,`bxLoadMore`],[`searchInput`,``],[`optionText`,`bxTruncate`],[3,`control`,`inline`,`tooltip`,`showLoadingIndicator`,`hint`,`hintEnd`,`subscriptSizing`,`forId`],[1,`bx-select-control`],[`type`,`button`,`role`,`combobox`,`cdkOverlayOrigin`,``,`bxSurface`,``,1,`bx-select-trigger`,3,`click`,`keydown`,`blur`,`bxTooltip`,`bxTooltipHover`,`bxTooltipTouch`,`id`,`disabled`],[1,`bx-select-container`],[1,`bx-floating-label`],[1,`bx-select-value`,3,`bxTruncate`],[3,`ngTemplateOutlet`,`ngTemplateOutletContext`],[1,`bx-selected-tags`],[`bxTruncate`,``,`aria-hidden`,`true`,1,`bx-select-measure`],[`aria-hidden`,`true`,1,`bx-select-caret`],[3,`value`],[`bx-button`,``,`type`,`button`,`variant`,`text`,1,`bx-select-clear`,3,`surfaceEffects`,`disabled`,`bxTooltip`],[`cdkConnectedOverlay`,``,3,`cdkConnectedOverlayOrigin`,`cdkConnectedOverlayOpen`,`cdkConnectedOverlayPositions`,`cdkConnectedOverlayHasBackdrop`,`cdkConnectedOverlayPush`,`cdkConnectedOverlayViewportMargin`,`cdkConnectedOverlayScrollStrategy`,`cdkConnectedOverlayUsePopover`,`cdkConnectedOverlayWidth`],[3,`bxTruncate`],[`aria-hidden`,`true`,1,`bx-field-required`],[`tooltip`,``,3,`text`,`config`,`focusable`,`tooltipOnTruncate`],[3,`text`,`config`,`disabled`,`focusable`,`tooltipOnTruncate`],[1,`bx-overflow-tag`,3,`text`,`config`,`tooltip`,`focusable`,`tooltipOnTruncate`],[3,`size`,`decorative`],[`name`,`chevron-down`,`size`,`16`],[`bx-button`,``,`type`,`button`,`variant`,`text`,1,`bx-select-clear`,3,`click`,`surfaceEffects`,`disabled`,`bxTooltip`],[`name`,`x`,`size`,`16`],[`cdkConnectedOverlay`,``,3,`overlayOutsideClick`,`attach`,`detach`,`positionChange`,`cdkConnectedOverlayOrigin`,`cdkConnectedOverlayOpen`,`cdkConnectedOverlayPositions`,`cdkConnectedOverlayHasBackdrop`,`cdkConnectedOverlayPush`,`cdkConnectedOverlayViewportMargin`,`cdkConnectedOverlayScrollStrategy`,`cdkConnectedOverlayUsePopover`,`cdkConnectedOverlayWidth`],[`bxSurface`,``,`data-bx-surface`,`glass`,`tabindex`,`-1`,1,`bx-select-panel`,3,`keydown`,`bxSurfaceInteractive`],[1,`bx-select-search-container`],[`type`,`button`,`role`,`checkbox`,1,`bx-select-all`,3,`disabled`],[`bxLoadMore`,``,1,`bx-select-menu-container`,3,`loadMore`,`loadMoreHasMore`,`loadMoreSuppressed`,`loadMoreLoading`,`loadMoreDisabled`,`loadMoreError`,`loadMoreConfig`,`loadMoreTemplate`,`loadMoreRevision`],[3,`hidden`,`id`],[`role`,`status`,1,`bx-select-search-state`],[1,`bx-select-loading`],[3,`search`,`keydown.enter`,`value`,`compact`,`placeholder`,`ariaLabel`],[`type`,`button`,`role`,`checkbox`,1,`bx-select-all`,3,`click`,`disabled`],[3,`checked`,`indeterminate`,`disabled`],[1,`bx-select-group`,3,`id`],[`bxSwipeActions`,``,1,`bx-select-option-row`,3,`leftSwipeActions`,`rightSwipeActions`,`swipeFullAction`,`swipeDisabled`],[`type`,`button`,`tabindex`,`-1`,`bxTooltipTouch`,`longpress`,1,`bx-select-option`,3,`click`,`bxTooltip`,`disabled`],[`bxSwipeContent`,``,1,`bx-select-item-inner`],[3,`checked`,`disabled`],[1,`bx-select-adornment`],[`size`,`16`,3,`name`],[1,`bx-select-option-label`,3,`bxTruncate`],[1,`bx-select-adornment`,`bx-select-adornment-end`],[`size`,`16`,1,`bx-select-adornment-end`,3,`name`],[`role`,`status`,1,`bx-select-empty`],[3,`size`,`label`]],template:function(e,n){if(e&1&&(ld$1(dc),bo$1(0,`bx-form-field`,8)(1,`div`,9)(2,`button`,10,0),br$1(`click`,function(){return n.toggleOpen()})(`keydown`,function(a){return n.onTriggerKey(a)})(`blur`,function(){return n.onTriggerBlur()}),dd$1(4),bo$1(5,`div`,11),od$1(6,mc,5,3,`span`,12),bo$1(7,`span`,13,1),od$1(9,gc,1,2,`ng-container`,14)(10,yc,3,1,`span`,15)(11,Sc,1,1),Go(),bo$1(12,`span`,16,2),lA(14),Go()(),dd$1(15,1),bo$1(16,`span`,17)(17,`bx-visual-transition`,18),rd$1(18,Mc,2,1,`ng-template`),Go()()(),od$1(19,wc,2,4,`button`,19),Go(),od$1(20,jc,2,9,null,20),dd$1(21,2,uc),dd$1(22,3,pc),Go()),e&2){let o;xo$1(`control`,n.fieldControl)(`inline`,!0)(`tooltip`,n.tooltip())(`showLoadingIndicator`,!1)(`hint`,n.hint())(`hintEnd`,n.hintEnd())(`subscriptSizing`,n.resolvedSubscriptSizing())(`forId`,n.controlId()),Xl$1(),tr$1(`has-clear`,n.showClear()),Xl$1(),tr$1(`has-label`,!!n.label())(`is-invalid`,n.showError())(`is-outline`,n.resolvedAppearance()===`outline`)(`is-open`,n.isOpen())(`is-floating`,n.isFloating())(`is-readonly`,n.isReadonly())(`is-keyboard-focused`,n.keyboardFocused()),xo$1(`bxTooltip`,n.selectionTooltip())(`bxTooltipHover`,n.selectionDisplay()!==`tags`||n.selectAll()&&!!n.allSelectedText())(`bxTooltipTouch`,n.selectionDisplay()===`tags`&&!(n.selectAll()&&n.allSelectedText())?`none`:`longpress`)(`id`,n.controlId())(`disabled`,n.disabled()),vo$1(`aria-haspopup`,n.hasOptionActions()?`grid`:`listbox`)(`data-testid`,n.dataTestId())(`aria-label`,n.ariaLabel()||n.resolvedLabel())(`aria-labelledby`,n.ariaLabelledBy())(`aria-describedby`,n.describedBy())(`aria-invalid`,n.showError())(`aria-required`,n.required())(`aria-readonly`,n.isReadonly())(`aria-busy`,n.loading()||n.pending()||n.isSearching())(`aria-expanded`,n.isOpen())(`aria-controls`,n.isPanelAttached()?n.controlId()+`-options`:null),Xl$1(4),nd$1(n.label()?6:-1),Xl$1(),tr$1(`is-placeholder`,!n.selectedOptionLabel()),xo$1(`bxTruncate`,!(n.selectionDisplay()===`tags`&&n.selectedOptions().length)&&!n.triggerTemplate()),Xl$1(2),nd$1((o=n.triggerTemplate())?9:n.selectionDisplay()===`tags`&&n.selectedOptions().length?10:11,o),Xl$1(5),ik(n.selectedOptionLabel()),Xl$1(3),xo$1(`value`,n.loading()||n.pending()||n.isSearching()),Xl$1(2),nd$1(n.showClear()?19:-1),Xl$1(),nd$1(n.isPanelAttached()?20:-1)}},dependencies:[Wu$1,GC,fR,pR,rh$1,ce,_e,Gt,ZC,tn,Ye,ft,Ta,Yi$1,Et,Pt,ct,js$1],styles:[`
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
}`]})};var Wr=class i extends bt{focus(t){this.nativeElement.focus(t)}onReadonlyInteraction(t){!this.isReadonly()||this.nativeElement.tagName!==`SELECT`||`key`in t&&t.key===`Tab`||t.preventDefault()}static ɵfac=(()=>{let t;return function(n){return(t||(t=ho$1(i)))(n||i)}})();static ɵdir=pe({type:i,selectors:[[`input`,`bxInput`,``],[`textarea`,`bxInput`,``],[`select`,`bxInput`,``]],hostAttrs:[1,`bx-native-control`],hostVars:12,hostBindings:function(e,n){e&1&&br$1(`blur`,function(){return n.markAsTouched()})(`pointerdown`,function(a){return n.onReadonlyInteraction(a)})(`click`,function(a){return n.onReadonlyInteraction(a)})(`keydown`,function(a){return n.onReadonlyInteraction(a)}),e&2&&(Uy(`id`,n.controlId())(`disabled`,n.effectiveDisabled())(`required`,n.effectiveRequired()),vo$1(`readonly`,n.isReadonly()?``:null)(`aria-readonly`,n.isReadonly())(`placeholder`,n.resolvedPlaceholder())(`name`,n.name()||null)(`aria-invalid`,n.showError())(`aria-required`,n.effectiveRequired())(`aria-describedby`,n.describedBy())(`aria-label`,n.ariaLabel())(`aria-labelledby`,n.ariaLabelledBy()))},exportAs:[`bxInput`],features:[rr$1([{provide:mn,useExisting:jt(()=>i)}]),yt]})};var qc=[[[`bx-error`]],[[`bx-hint`]]];var $c=[`bx-error`,`bx-hint`];var Uc=[`ngProjectAs`,`bx-error`,5,[`bx-error`]];var Gc=[`ngProjectAs`,`bx-hint`,5,[`bx-hint`]];function Kc(i,t){if(i&1&&sd$1(0,`span`),i&2){let e=t.$implicit;ka(`inset-inline-start`,e,`%`)}}function Zc(i,t){if(i&1&&(bo$1(0,`output`,8),lA(1),Go()),i&2){let e=Wo();Xl$1(),ak(``,e.displayWith()(e.start()),` – `,e.displayWith()(e.end()))}}var jr=class i extends we{i18n=b(VQ,{optional:!0});start=G(()=>Math.max(this.min(),Math.min(this.max(),this.value()?.[0]??this.min())));end=G(()=>Math.max(this.start(),Math.min(this.max(),this.value()?.[1]??this.max())));startPercent=G(()=>this.max()>this.min()?(this.start()-this.min())/(this.max()-this.min())*100:0);endPercent=G(()=>this.max()>this.min()?(this.end()-this.min())/(this.max()-this.min())*100:100);resolvedStartLabel=G(()=>LQ(this.startLabel(),this.i18n));resolvedEndLabel=G(()=>LQ(this.endLabel(),this.i18n));ticks=G(()=>{let t=this.max()-this.min(),e=this.step();if(!this.showTickMarks()||!Number.isFinite(t)||!Number.isFinite(e)||t<=0||e<=0)return[];let n=Math.floor(t/e),o=Math.min(1e3,n);return o>0?Array.from({length:o+1},(a,r)=>Math.round(r*n/o)*e/t*100):[]});min=ee(0);max=ee(100);step=ee(1);discrete=ee(!1);showTickMarks=ee(!1);displayWith=ee(String);startLabel=ee(`Minimum value`);endLabel=ee(`Maximum value`);onRangeInput(t,e){let n=t.target;if(this.effectiveDisabled()||this.isReadonly()){n.value=String(e===`start`?this.start():this.end());return}let o=n.valueAsNumber,a=e===`start`?[Math.min(this.end(),o),this.end()]:[this.start(),Math.max(this.start(),o)];n.value=String(e===`start`?a[0]:a[1]),this.updateValue(a)}onReadonlyPointerDown(t){this.isReadonly()&&(t.preventDefault(),t.target.focus({preventScroll:!0}))}onReadonlyKeyDown(t){this.isReadonly()&&[`ArrowLeft`,`ArrowRight`,`ArrowUp`,`ArrowDown`,`Home`,`End`,`PageUp`,`PageDown`].includes(t.key)&&t.preventDefault()}onBlur(){this.markAsTouched()}static ɵfac=(()=>{let t;return function(n){return(t||(t=ho$1(i)))(n||i)}})();static ɵcmp=Fr$1({type:i,selectors:[[`bx-range-slider`]],inputs:{min:[1,`min`],max:[1,`max`],step:[1,`step`],discrete:[1,`discrete`],showTickMarks:[1,`showTickMarks`],displayWith:[1,`displayWith`],startLabel:[1,`startLabel`],endLabel:[1,`endLabel`]},features:[yt],ngContentSelectors:$c,decls:13,vars:35,consts:[[3,`control`,`label`,`hint`,`hintEnd`,`tooltip`,`forId`],[`role`,`group`,1,`bx-range-slider`],[`aria-hidden`,`true`,1,`bx-range-track`],[1,`bx-range-input`],[`bxSlider`,``,`type`,`range`,3,`pointerdown`,`keydown`,`input`,`blur`,`id`,`min`,`max`,`step`,`value`,`disabled`],[`bxSlider`,``,`type`,`range`,3,`pointerdown`,`keydown`,`input`,`blur`,`min`,`max`,`step`,`value`,`disabled`],[`aria-hidden`,`true`,1,`bx-range-ticks`],[3,`inset-inline-start`],[1,`bx-range-values`]],template:function(e,n){e&1&&(ld$1(qc),bo$1(0,`bx-form-field`,0)(1,`div`,1),sd$1(2,`div`,2),bo$1(3,`div`,3)(4,`input`,4),br$1(`pointerdown`,function(a){return n.onReadonlyPointerDown(a)})(`keydown`,function(a){return n.onReadonlyKeyDown(a)})(`input`,function(a){return n.onRangeInput(a,`start`)})(`blur`,function(){return n.onBlur()}),Go()(),bo$1(5,`div`,3)(6,`input`,5),br$1(`pointerdown`,function(a){return n.onReadonlyPointerDown(a)})(`keydown`,function(a){return n.onReadonlyKeyDown(a)})(`input`,function(a){return n.onRangeInput(a,`end`)})(`blur`,function(){return n.onBlur()}),Go()(),bo$1(7,`div`,6),ab$1(8,Kc,1,2,`span`,7,TT),Go()(),od$1(10,Zc,2,2,`output`,8),dd$1(11,0,Uc),dd$1(12,1,Gc),Go()),e&2&&(xo$1(`control`,n.fieldControl)(`label`,n.label())(`hint`,n.hint())(`hintEnd`,n.hintEnd())(`tooltip`,n.tooltip())(`forId`,n.controlId()),Xl$1(),ka(`--%NS%bx-range-start`,n.startPercent()/100)(`--%NS%bx-range-end`,n.endPercent()/100),tr$1(`is-readonly`,n.isReadonly()&&!n.disabled()),vo$1(`aria-label`,n.ariaLabel()||n.resolvedLabel()),Xl$1(3),xo$1(`id`,n.controlId())(`min`,n.min())(`max`,n.max())(`step`,n.step())(`value`,n.start())(`disabled`,n.effectiveDisabled()),vo$1(`aria-valuemax`,n.end())(`aria-readonly`,n.isReadonly())(`aria-label`,n.resolvedStartLabel())(`aria-valuetext`,n.displayWith()(n.start()))(`aria-describedby`,n.describedBy()),Xl$1(2),xo$1(`min`,n.min())(`max`,n.max())(`step`,n.step())(`value`,n.end())(`disabled`,n.effectiveDisabled()),vo$1(`aria-valuemin`,n.start())(`aria-readonly`,n.isReadonly())(`aria-label`,n.resolvedEndLabel())(`aria-valuetext`,n.displayWith()(n.end()))(`aria-describedby`,n.describedBy()),Xl$1(2),cb$1(n.ticks()),Xl$1(2),nd$1(n.discrete()?10:-1))},dependencies:[ce,xi],styles:[`
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
}`]})};var Xc=[`panelTemplate`];var Yc=[`anchor`];var Qc=[`nativeInput`];var Jc=[[[`bx-error`]],[[`bx-hint`]]];var eu=[`bx-error`,`bx-hint`];var tu=[`ngProjectAs`,`bx-error`,5,[`bx-error`]];var nu=[`ngProjectAs`,`bx-hint`,5,[`bx-hint`]];var iu=(i,t,e,n)=>({$implicit:i,label:t,active:e,index:n});var ou=(i,t)=>t.value;function au(i,t){i&1&&(bo$1(0,`span`,16),lA(1,`*`),Go())}function ru(i,t){if(i&1&&(bo$1(0,`label`,7)(1,`span`,15),lA(2),Go(),od$1(3,au,2,0,`span`,16),Go()),i&2){let e=Wo();vo$1(`for`,e.controlId()),Xl$1(2),ik(e.resolvedLabel()),Xl$1(),nd$1(e.effectiveRequired()&&!e.resolvedHideRequiredMarker()?3:-1)}}function su(i,t){if(i&1&&(bo$1(0,`span`,17)(1,`span`,18),lA(2),Go(),bo$1(3,`span`),lA(4),Go()()),i&2){let e=Wo();ka(`transform`,`translateX(`+-e.inputScroll()+`px)`),Xl$1(2),ik(e.internalValue()),Xl$1(2),ik(e.completionSuffix())}}function lu(i,t){if(i&1){let e=pb$1();bo$1(0,`button`,19),br$1(`click`,function(){al$1(e);let o=Wo();return cl$1(o.clear())})(`keydown`,function(o){al$1(e);let a=Wo();return cl$1(a.onClearKey(o))})(`blur`,function(o){al$1(e);let a=Wo();return cl$1(a.onBlur(o))}),sd$1(1,`bx-icon`,20),Go()}if(i&2){let e=Wo();xo$1(`surfaceEffects`,!1)(`disabled`,e.effectiveDisabled())(`bxTooltip`,e.resolvedClearTooltip()),vo$1(`aria-label`,e.resolvedClearLabel())}}function du(i,t){i&1&&sd$1(0,`bx-loading-spinner`,13),i&2&&xo$1(`size`,16)(`decorative`,!0)}function cu(i,t){i&1&&sd$1(0,`bx-icon`,14)}function uu(i,t){if(i&1&&$s$1(0,28),i&2){let e=Wo(),n=e.$implicit,o=e.$index,a=Wo(3);xo$1(`ngTemplateOutlet`,t)(`ngTemplateOutletContext`,DA(2,iu,n,n.labelText,a.activeIndex()===o,o))}}function pu(i,t){if(i&1&&lA(0),i&2){let e=Wo().$implicit;mb$1(` `,e.labelText,` `)}}function bu(i,t){if(i&1){let e=pb$1();bo$1(0,`button`,27),br$1(`mousedown`,function(o){return o.preventDefault()})(`click`,function(){let o=al$1(e).$implicit,a=Wo(3);return cl$1(a.selectOption(o))}),od$1(1,uu,1,7,`ng-container`,28)(2,pu,1,1),Go()}if(i&2){let e,n=t.$implicit,o=t.$index,a=Wo(3);tr$1(`is-active`,a.activeIndex()===o),xo$1(`id`,a.controlId()+`-option-`+o)(`disabled`,n.disabled??!1),vo$1(`aria-selected`,a.activeIndex()===o),Xl$1(),nd$1((e=a.optionTemplate())?1:2,e)}}function mu(i,t){if(i&1&&ab$1(0,bu,3,6,`button`,26,ou),i&2){let e=Wo(2);cb$1(e.filteredOptions())}}function gu(i,t){if(i&1&&(bo$1(0,`div`,24),sd$1(1,`bx-loading-indicator`,29),Go()),i&2){let e=Wo(2);Xl$1(),xo$1(`size`,16)(`label`,e.loadingText())}}function hu(i,t){if(i&1&&(bo$1(0,`div`,25),lA(1),Go()),i&2){let e=Wo(2);Xl$1(),ik(e.resolvedEmptyText())}}function fu(i,t){if(i&1){let e=pb$1();bo$1(0,`div`,21)(1,`div`,22,3),br$1(`focusout`,function(o){al$1(e);let a=Wo();return cl$1(a.onBlur(o))})(`loadMore`,function(o){al$1(e);let a=Wo();return cl$1(a.requestMore(o))}),bo$1(3,`div`,23),od$1(4,mu,2,0),Go(),od$1(5,gu,2,2,`div`,24)(6,hu,2,1,`div`,25),Go()()}if(i&2){let e=FT(2),n=Wo();xo$1(`bxSurfaceInteractive`,!1),Xl$1(),xo$1(`loadMoreHasMore`,n.hasMore())(`loadMoreLoading`,n.loading())(`loadMoreError`,n.loadError())(`loadMoreSuppressed`,n.searching())(`loadMoreDisabled`,n.effectiveDisabled()||n.isReadonly())(`loadMoreConfig`,n.loadMoreConfig())(`loadMoreTemplate`,n.loadMoreTemplate())(`loadMoreRevision`,n.loadMoreRevision()??n.options()),Xl$1(2),xo$1(`id`,n.controlId()+`-listbox`),vo$1(`aria-label`,n.ariaLabel()||n.resolvedLabel()||n.resolvedPlaceholder())(`aria-busy`,n.searching()||n.loading()),Xl$1(),nd$1(n.searching()?-1:4),Xl$1(),nd$1(n.searching()||n.loading()&&!e.actionVisible()?5:!n.loading()&&!n.loadError()&&!n.filteredOptions().length?6:-1)}}var qr=class i extends we{i18n=b(VQ,{optional:!0});bxA11yService=b(Br$1);overlay=b(Ld$1);bxOverlayPositionService=b(_w);viewContainerRef=b(fr$1);ngZone=b(le);context=b(Be,{optional:!0});scrollLockService=b(Nw);browser=bt$1(b(Ge));scrollLockId=qK();opened=$(!1);inputFocused=$(!1);composing=$(!1);caretAtEnd=$(!1);panelTemplate=Sz.required(`panelTemplate`);anchor=Sz.required(`anchor`);nativeInput=Sz.required(`nativeInput`);pagination=Sz(Ye);labelText=Sz(ct);activeIndex=$(-1);autofilled=$(!1);labelTruncated=G(()=>this.labelText()?.truncated()??!1);isBusy=G(()=>this.searching()||this.loading()||this.pending());showClear=G(()=>this.clearable()&&!!this.internalValue()&&!this.isReadonly());resolvedClearLabel=G(()=>LQ(this.clearLabel(),this.i18n));resolvedClearTooltip=G(()=>LQ(this.clearTooltip()??this.clearLabel(),this.i18n));isFloating=G(()=>this.resolvedFloatLabel()===`always`||this.inputFocused()||this.isOpen()||this.autofilled()||!!this.internalValue());inputScroll=$(0);resolvedEmptyText=G(()=>LQ(this.emptyText(),this.i18n));resolvedOptions=G(()=>this.options().map(t=>s(r({},t),{labelText:LQ(t.label??t.value,this.i18n)})));filteredOptions=G(()=>{let t=(this.internalValue()??``).toLocaleLowerCase();return this.externalFiltering()||!t?this.resolvedOptions():this.resolvedOptions().filter(e=>e.labelText.toLocaleLowerCase().includes(t)||e.value.toLocaleLowerCase().includes(t))});activeId=G(()=>this.isOpen()&&!this.searching()&&this.filteredOptions()[this.activeIndex()]&&!this.filteredOptions()[this.activeIndex()].disabled?this.controlId()+`-option-`+this.activeIndex():null);completionOption=G(()=>{let t=this.internalValue()??``;if(!this.inlineCompletion()||!this.isOpen()||!this.inputFocused()||!this.caretAtEnd()||this.composing()||this.searching()||this.effectiveDisabled()||this.isReadonly()||!t)return;let e=this.filteredOptions(),n=this.activeIndex()>=0?e[this.activeIndex()]:e.find(o=>!o.disabled&&o.value.length>t.length&&o.value.toLocaleLowerCase().startsWith(t.toLocaleLowerCase()));return n&&!n.disabled&&n.value.length>t.length&&n.value.toLocaleLowerCase().startsWith(t.toLocaleLowerCase())?n:void 0});completionSuffix=G(()=>this.completionOption()?.value.slice((this.internalValue()??``).length)??``);isOpen=this.opened.asReadonly();options=ee([]);inlineCompletion=ee(!0);clearable=ee(!0);clearLabel=ee(`Clear selection`);clearTooltip=ee(void 0);externalFiltering=ee(!1);searching=ee(!1);hasMore=ee(!1);loadError=ee(void 0);loadMoreConfig=ee({});loadMoreTemplate=ee(void 0);loadMoreRevision=ee(void 0);optionTemplate=ee(void 0);emptyText=ee(`No suggestions. You can enter your own value.`);loadingText=ee(`Loading suggestions`);autocomplete=ee(`off`);queryChange=Pk();optionSelected=Pk();loadMore=Pk();openedChange=Pk();overlayRef;subscriptions=new Ae;disconnectTheme;disconnectLighting;selectionMotion;transition;presentationRevision=0;constructor(){super(),We$1(()=>{let t=this.bxA11yService.isReducedMotion();this.selectionMotion?.update({reducedMotion:t})}),this.destroyRef.onDestroy(()=>this.dispose()),We$1(()=>{(this.effectiveDisabled()||this.isReadonly())&&this.isOpen()&&this.close()}),We$1(()=>{this.options(),this.searching(),de(()=>this.activeIndex.set(-1))})}open(){if(!this.browser||this.destroyRef.destroyed||this.isOpen()||this.effectiveDisabled()||this.isReadonly())return;this.overlayRef&&this.dispose();let t=this.anchor().nativeElement,e=this.overlay.create({width:t.getBoundingClientRect().width,maxWidth:`calc(100vw - 16px)`,positionStrategy:this.bxOverlayPositionService.getElementStrategy(t,`bottom`,4),scrollStrategy:this.overlay.scrollStrategies.noop(),usePopover:!!this.context?.useTopLayer||!!t.closest(`dialog, [role="dialog"], [role="alertdialog"], bx-modal, bx-modal-core, [popover]`)});this.overlayRef=e,this.opened.set(!0),this.scrollLockService.disableScroll(this.scrollLockId,{handleTouchInput:!0}),this.disconnectTheme=this.ngZone.runOutsideAngular(()=>BK(t,e.overlayElement)),this.disconnectLighting=DR(e.overlayElement,t),this.subscriptions.add(this.ngZone.runOutsideAngular(()=>RK(e,t,{onOriginHidden:()=>this.ngZone.run(()=>this.close()),onPosition:()=>{let a=t.getBoundingClientRect().width;e.getConfig().width!==a&&e.updateSize({width:a})}}))),this.subscriptions.add(e.outsidePointerEvents().subscribe(a=>{t.contains(a.target)||this.close()})),this.subscriptions.add(e.keydownEvents().subscribe(a=>this.onPanelKey(a))),e.attach(new ja(this.panelTemplate(),this.viewContainerRef)).detectChanges(),e.updatePosition();let o=e.overlayElement.querySelector(`[role="listbox"]`);o&&(this.selectionMotion=this.ngZone.runOutsideAngular(()=>TR(o,{reducedMotion:this.bxA11yService.isReducedMotion()}))),this.transition=this.ngZone.runOutsideAngular(()=>MR(t,e.overlayElement)),this.ngZone.runOutsideAngular(()=>this.transition?.enter()),this.openedChange.emit(!0)}close(){if(!this.isOpen())return;let t=this.overlayRef?.overlayElement;t?.contains(t.ownerDocument.activeElement)&&this.focus({preventScroll:!0});let e=++this.presentationRevision;this.opened.set(!1),this.scrollLockService.enableScroll(this.scrollLockId),t&&(t.inert=!0);let n=()=>{e===this.presentationRevision&&this.dispose()},o=this.transition;o&&!this.bxA11yService.isReducedMotion()?this.ngZone.runOutsideAngular(()=>o.exit()).then(n,n):n(),this.openedChange.emit(!1)}completeLoadMore(){this.pagination()?.complete()}clear(){this.effectiveDisabled()||this.isReadonly()||(this.composing.set(!1),this.updateValue(``),this.activeIndex.set(-1),this.markAsTouched(),this.focus({preventScroll:!0}),this.queryChange.emit(``))}onInput(t){if(this.composing()||this.effectiveDisabled()||this.isReadonly())return;let e=t.target.value;this.updateValue(e),this.activeIndex.set(-1),this.updateCompletionPosition(),this.open(),this.queryChange.emit(e)}onCompositionStart(){this.composing.set(!0)}onCompositionEnd(t){this.composing.set(!1),this.onInput(t)}onFocus(){this.inputFocused.set(!0),this.updateCompletionPosition(),this.open()}updateCompletionPosition(){let t=this.nativeInput().nativeElement;this.caretAtEnd.set(t.selectionStart===t.value.length&&t.selectionEnd===t.value.length),this.inputScroll.set(t.scrollLeft)}onBlur(t){t.target===this.nativeInput().nativeElement&&this.inputFocused.set(!1);let e=t.relatedTarget;e&&(this.nativeElement.contains(e)||this.overlayRef?.overlayElement.contains(e))||queueMicrotask(()=>{if(this.destroyRef.destroyed)return;let n=this.nativeElement.ownerDocument.activeElement;this.nativeElement.contains(n)||this.overlayRef?.overlayElement.contains(n)||(this.close(),this.markAsTouched())})}onInputKey(t){if(this.composing()||t.isComposing||this.effectiveDisabled()||this.isReadonly())return;this.updateCompletionPosition();let e=this.completionOption(),o=this.nativeInput().nativeElement.ownerDocument.defaultView?.getComputedStyle(this.nativeInput().nativeElement).direction===`rtl`?`ArrowLeft`:`ArrowRight`;if(e&&!t.altKey&&!t.ctrlKey&&!t.metaKey&&!t.shiftKey&&(t.key===o||t.key===`End`||t.key===`Enter`&&!this.activeId()))t.preventDefault(),this.selectOption(e);else if(t.key===`Escape`&&this.isOpen())t.preventDefault(),t.stopPropagation(),this.close();else if(t.key===`ArrowDown`||t.key===`ArrowUp`){if(t.preventDefault(),this.open(),this.searching())return;let r=this.filteredOptions().map((x,P)=>x.disabled?-1:P).filter(x=>x>=0),u=r.indexOf(this.activeIndex()),m=t.key===`ArrowDown`?(u+1)%r.length:u<0?r.length-1:(u-1+r.length)%r.length;this.activeIndex.set(r[m]??-1),this.overlayRef?.overlayElement.querySelector(`#`+this.activeId())?.scrollIntoView({block:`nearest`})}else if(t.key===`Enter`&&this.isOpen()&&this.activeId())t.preventDefault(),this.selectOption(this.filteredOptions()[this.activeIndex()]);else if(t.key===`Tab`&&this.isOpen()){if(!t.shiftKey&&this.showClear())return;this.tabToPanel(t)}}onClearKey(t){t.key===`Tab`&&!t.shiftKey&&this.isOpen()&&this.tabToPanel(t)}selectOption(t){t.disabled||this.searching()||this.effectiveDisabled()||this.isReadonly()||(this.updateValue(t.value),this.optionSelected.emit(t),this.close(),this.focus({preventScroll:!0}))}requestMore(t){let e=this.overlayRef?.overlayElement;e?.contains(e.ownerDocument.activeElement)&&this.focus({preventScroll:!0}),this.loadMore.emit(t)}onPanelKey(t){let e=t.target;t.defaultPrevented||!e||!this.overlayRef?.overlayElement.contains(e)||(t.key===`Escape`?(t.preventDefault(),t.stopPropagation(),this.close()):t.key===`Tab`&&(t.shiftKey?(t.preventDefault(),this.focus({preventScroll:!0})):this.close()))}panelAction(){return Array.from(this.overlayRef?.overlayElement.querySelectorAll(`button:not(:disabled)`)??[]).find(t=>t.tabIndex>=0&&t.getClientRects().length>0)}tabToPanel(t){let e=this.panelAction();!t.shiftKey&&e?(t.preventDefault(),e.focus()):this.close()}dispose(){++this.presentationRevision,this.selectionMotion?.destroy(),this.selectionMotion=void 0,this.transition?.destroy(),this.transition=void 0,this.opened.set(!1),this.activeIndex.set(-1),this.subscriptions.unsubscribe(),this.subscriptions=new Ae,this.disconnectTheme?.(),this.disconnectTheme=void 0,this.disconnectLighting?.(),this.disconnectLighting=void 0,this.overlayRef?.dispose(),this.overlayRef=void 0,this.scrollLockService.enableScroll(this.scrollLockId)}static ɵfac=function(e){return new(e||i)};static ɵcmp=Fr$1({type:i,selectors:[[`bx-autocomplete`]],viewQuery:function(e,n){e&1&&Yy(n.panelTemplate,Xc,5)(n.anchor,Yc,5)(n.nativeInput,Qc,5)(n.pagination,Ye,5)(n.labelText,ct,5),e&2&&fb$1(5)},inputs:{options:[1,`options`],inlineCompletion:[1,`inlineCompletion`],clearable:[1,`clearable`],clearLabel:[1,`clearLabel`],clearTooltip:[1,`clearTooltip`],externalFiltering:[1,`externalFiltering`],searching:[1,`searching`],hasMore:[1,`hasMore`],loadError:[1,`loadError`],loadMoreConfig:[1,`loadMoreConfig`],loadMoreTemplate:[1,`loadMoreTemplate`],loadMoreRevision:[1,`loadMoreRevision`],optionTemplate:[1,`optionTemplate`],emptyText:[1,`emptyText`],loadingText:[1,`loadingText`],autocomplete:[1,`autocomplete`]},outputs:{queryChange:`queryChange`,optionSelected:`optionSelected`,loadMore:`loadMore`,openedChange:`openedChange`},features:[yt],ngContentSelectors:eu,decls:18,vars:52,consts:[[`anchor`,``],[`nativeInput`,``],[`panelTemplate`,``],[`pagination`,`bxLoadMore`],[3,`control`,`inline`,`tooltip`,`hint`,`hintEnd`,`hideRequiredMarker`,`subscriptSizing`,`forId`,`showLoadingIndicator`],[`bxSurface`,``,1,`bx-input-wrapper`,`bx-autocomplete-control`],[`bxTooltipTouch`,`longpress`,`placement`,`top`,1,`bx-input-container`,`bx-autocomplete-text`,3,`bxTooltip`],[1,`bx-floating-label`],[`aria-hidden`,`true`,1,`bx-native-input`,`bx-autocomplete-completion`,3,`transform`],[`type`,`text`,`role`,`combobox`,`aria-haspopup`,`listbox`,`cdkAutofill`,``,1,`bx-native-input`,3,`input`,`focus`,`click`,`blur`,`select`,`scroll`,`keyup`,`cdkAutofill`,`keydown`,`compositionstart`,`compositionend`,`id`,`placeholder`,`value`,`disabled`,`readOnly`,`required`],[1,`bx-input-actions`],[`bx-button`,``,`type`,`button`,`variant`,`text`,1,`bx-autocomplete-clear`,3,`surfaceEffects`,`disabled`,`bxTooltip`],[`aria-hidden`,`true`,1,`bx-autocomplete-caret`],[3,`size`,`decorative`],[`name`,`chevron-down`,`size`,`16`],[`bxTruncate`,``,1,`bx-input-label-text`],[`aria-hidden`,`true`,1,`bx-field-required`],[`aria-hidden`,`true`,1,`bx-native-input`,`bx-autocomplete-completion`],[1,`bx-autocomplete-prefix`],[`bx-button`,``,`type`,`button`,`variant`,`text`,1,`bx-autocomplete-clear`,3,`click`,`keydown`,`blur`,`surfaceEffects`,`disabled`,`bxTooltip`],[`name`,`x`,`size`,`16`],[`bxSurface`,``,`data-bx-surface`,`glass`,1,`bx-autocomplete-panel`,3,`bxSurfaceInteractive`],[`bxLoadMore`,``,`tabindex`,`-1`,1,`bx-autocomplete-scroll`,3,`focusout`,`loadMore`,`loadMoreHasMore`,`loadMoreLoading`,`loadMoreError`,`loadMoreSuppressed`,`loadMoreDisabled`,`loadMoreConfig`,`loadMoreTemplate`,`loadMoreRevision`],[`role`,`listbox`,3,`id`],[1,`bx-autocomplete-feedback`],[`role`,`status`,1,`bx-autocomplete-feedback`],[`type`,`button`,`role`,`option`,`tabindex`,`-1`,1,`bx-autocomplete-option`,3,`id`,`is-active`,`disabled`],[`type`,`button`,`role`,`option`,`tabindex`,`-1`,1,`bx-autocomplete-option`,3,`mousedown`,`click`,`id`,`disabled`],[3,`ngTemplateOutlet`,`ngTemplateOutletContext`],[3,`size`,`label`]],template:function(e,n){if(e&1){let o=pb$1();ld$1(Jc),bo$1(0,`bx-form-field`,4)(1,`div`,5,0)(3,`div`,6),SA(4,`bxTruncatedText`),od$1(5,ru,4,3,`label`,7),od$1(6,su,5,4,`span`,8),bo$1(7,`input`,9,1),br$1(`input`,function(r){return n.onInput(r)})(`focus`,function(){return n.onFocus()})(`click`,function(){return al$1(o),n.open(),cl$1(n.updateCompletionPosition())})(`blur`,function(r){return n.onBlur(r)})(`select`,function(){return n.updateCompletionPosition()})(`scroll`,function(){return n.updateCompletionPosition()})(`keyup`,function(){return n.updateCompletionPosition()})(`cdkAutofill`,function(r){return n.autofilled.set(r.isAutofilled)})(`keydown`,function(r){return n.onInputKey(r)})(`compositionstart`,function(){return n.onCompositionStart()})(`compositionend`,function(r){return n.onCompositionEnd(r)}),Go()(),bo$1(9,`div`,10),od$1(10,lu,2,4,`button`,11),bo$1(11,`span`,12),od$1(12,du,1,2,`bx-loading-spinner`,13)(13,cu,1,0,`bx-icon`,14),Go()()(),dd$1(14,0,tu),dd$1(15,1,nu),Go(),rd$1(16,fu,7,14,`ng-template`,null,2,RA)}e&2&&(xo$1(`control`,n.fieldControl)(`inline`,!0)(`tooltip`,n.tooltip())(`hint`,n.hint())(`hintEnd`,n.hintEnd())(`hideRequiredMarker`,n.resolvedHideRequiredMarker())(`subscriptSizing`,n.resolvedSubscriptSizing())(`forId`,n.controlId())(`showLoadingIndicator`,!1),Xl$1(),tr$1(`is-invalid`,n.showError())(`is-disabled`,n.effectiveDisabled())(`is-readonly`,n.isReadonly())(`is-outline`,n.resolvedAppearance()===`outline`)(`is-floating`,n.isFloating())(`is-keyboard-focused`,n.keyboardFocused())(`is-open`,n.isOpen())(`has-clear`,n.showClear()),Xl$1(2),xo$1(`bxTooltip`,AA(4,48,n.resolvedLabel(),n.labelTruncated(),n.resolvedTooltipOnTruncate())),Xl$1(2),nd$1(n.label()?5:-1),Xl$1(),nd$1(n.completionSuffix()?6:-1),Xl$1(),xo$1(`id`,n.controlId())(`placeholder`,n.isFloating()||!n.label()?n.resolvedPlaceholder():``)(`value`,n.internalValue()??``)(`disabled`,n.effectiveDisabled())(`readOnly`,n.isReadonly())(`required`,n.effectiveRequired()),vo$1(`aria-autocomplete`,n.inlineCompletion()?`both`:`list`)(`name`,n.name()||null)(`autocomplete`,n.autocomplete())(`data-testid`,n.dataTestId())(`aria-label`,n.ariaLabel())(`aria-labelledby`,n.ariaLabelledBy())(`aria-describedby`,n.describedBy())(`aria-invalid`,n.showError())(`aria-expanded`,n.isOpen())(`aria-controls`,n.isOpen()?n.controlId()+`-listbox`:null)(`aria-activedescendant`,n.activeId())(`aria-busy`,n.isBusy()),Xl$1(3),nd$1(n.showClear()?10:-1),Xl$1(2),nd$1(n.isBusy()?12:13))},dependencies:[ce,GC,ZC,Yi$1,Et,_e,Ye,Ta,si,Pt,ct,on$1],styles:[`
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
}`]})};var vu=(i,t)=>t.label;var xu=(i,t)=>t.preset.id;function yu(i,t){if(i&1&&(bo$1(0,`div`,2),lA(1),Go()),i&2){let e=Wo().$implicit;Xl$1(),ik(e.label)}}function Su(i,t){if(i&1&&sd$1(0,`bx-icon`,6),i&2){let e=Wo().$implicit,n=Wo(2);xo$1(`name`,e.icon?n.iconName(e.icon):void 0)(`contentTemplate`,e.preset.iconTemplate)(`decorative`,!0)}}function _u(i,t){if(i&1){let e=pb$1();bo$1(0,`button`,5),br$1(`click`,function(){let o=al$1(e).$implicit,a=Wo(2);return cl$1(a.onSelect(o.preset,o.disabled))}),od$1(1,Su,1,3,`bx-icon`,6),bo$1(2,`span`,7),lA(3),Go()()}if(i&2){let e=t.$implicit;tr$1(`is-active`,e.active),xo$1(`disabled`,e.disabled),vo$1(`aria-pressed`,e.active)(`aria-label`,e.description?e.label+`. `+e.description:e.label),Xl$1(),nd$1(e.icon||e.preset.iconTemplate?1:-1),Xl$1(2),ik(e.label)}}function Cu(i,t){if(i&1&&(bo$1(0,`div`,1),od$1(1,yu,2,1,`div`,2),bo$1(2,`div`,3),ab$1(3,_u,4,7,`button`,4,xu),Go()()),i&2){let e=t.$implicit;Xl$1(),nd$1(e.label?1:-1),Xl$1(2),cb$1(e.items)}}var yi=class i{i18n=b(VQ,{optional:!0});groups=G(()=>{let t=this.context(),e=this.activeValue()??this.activeRange(),n=/* @__PURE__ */ new Map;for(let o of this.presets()){let a=LQ(o.label,this.i18n),r=LQ(o.group,this.i18n),u=this.resolvePreset(o,t),m={preset:o,label:a,description:LQ(o.description,this.i18n),icon:o.icon,active:u!==null&&this.sameSelection(u,e),disabled:o.disabled===!0};n.has(r)||n.set(r,{label:r,items:[]}),n.get(r)?.items.push(m)}return[...n.values()]});resolvedAriaLabel=G(()=>LQ(this.ariaLabel(),this.i18n));presets=ee.required();context=ee.required();activeValue=ee(null);activeRange=ee(null);horizontal=ee(!1,{transform:Ye$1});ariaLabel=ee(`Quick select`);presetSelect=Pk();iconName(t){return t}onSelect(t,e){e||this.presetSelect.emit(t)}sameSelection(t,e){return Array.isArray(t)&&Array.isArray(e)?aX([...t].sort())===aX([...e].sort()):yC(t)&&yC(e)?t.start===e.start&&t.end===e.end&&(!xC(t)||xC(e)&&t.kind===e.kind):aX(t)===aX(e)}resolvePreset(t,e){try{return t.resolve(e)}catch{return null}}static ɵfac=function(e){return new(e||i)};static ɵcmp=Fr$1({type:i,selectors:[[`bx-date-preset-list`]],inputs:{presets:[1,`presets`],context:[1,`context`],activeValue:[1,`activeValue`],activeRange:[1,`activeRange`],horizontal:[1,`horizontal`],ariaLabel:[1,`ariaLabel`]},outputs:{presetSelect:`presetSelect`},decls:3,vars:3,consts:[[1,`bx-preset-list`],[1,`bx-preset-group`],[1,`bx-preset-group-label`],[1,`bx-preset-items`],[`type`,`button`,1,`bx-preset-item`,3,`is-active`,`disabled`],[`type`,`button`,1,`bx-preset-item`,3,`click`,`disabled`],[`size`,`16`,1,`bx-preset-icon`,3,`name`,`contentTemplate`,`decorative`],[1,`bx-preset-label`]],template:function(e,n){e&1&&(bo$1(0,`nav`,0),ab$1(1,Cu,5,1,`div`,1,vu),Go()),e&2&&(tr$1(`is-horizontal`,n.horizontal()),vo$1(`aria-label`,n.resolvedAriaLabel()),Xl$1(),cb$1(n.groups()))},dependencies:[ZC],styles:[`
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
}`]})};function Mu(i,t){if(i&1&&(bo$1(0,`div`,1),$s$1(1,2),Go()),i&2){let e=Wo(2);xo$1(`id`,e.panelId()),vo$1(`aria-label`,e.resolvedAriaLabel()),Xl$1(),xo$1(`ngTemplateOutlet`,t)}}function wu(i,t){if(i&1&&od$1(0,Mu,2,3,`div`,1),i&2){let e,n=Wo();nd$1((e=n.content())?0:-1,e)}}function Nu(i,t){i&1&&$s$1(0,2),i&2&&xo$1(`ngTemplateOutlet`,t)}function Tu(i,t){if(i&1){let e=pb$1();bo$1(0,`bx-bottom-drawer`,3),pk(`openChange`,function(o){al$1(e);let a=Wo();return hA(a.open,o)||(a.open=o),cl$1(o)}),br$1(`closed`,function(){al$1(e);let o=Wo();return cl$1(o.onDrawerClosed())}),od$1(1,Nu,1,1,`ng-container`,2),Go()}if(i&2){let e,n=Wo();xo$1(`surfaceId`,n.panelId())(`ariaLabel`,n.resolvedAriaLabel())(`showHandle`,!0)(`showCloseButton`,!1)(`headerVisible`,!1)(`panelClass`,n.drawerClasses()),uk(`open`,n.open),Xl$1(),nd$1((e=n.content())?1:-1,e)}}var on=class i{overlay=b(Ld$1);bxOverlayPositionService=b(_w);viewContainerRef=b(fr$1);ngZone=b(le);destroyRef=b(ge);scrollLockService=b(Nw);i18n=b(VQ,{optional:!0});platformId=b(Ge);overlaySubscriptions=[];browser=bt$1(this.platformId);scrollLockId=qK();resolvedAriaLabel=G(()=>LQ(this.ariaLabel(),this.i18n));isDrawer=G(()=>this.presentation()===`drawer`);isInline=G(()=>this.presentation()===`inline`);drawerClasses=G(()=>`bx-picker-drawer ${this.panelClass()}`.trim());open=_z(!1);presentation=ee(`popover`);origin=ee(null);content=ee(null);ariaLabel=ee(`Picker`);panelId=ee(``);panelClass=ee(``);panelWidth=ee(``);autoFocus=ee(!0,{transform:Ye$1});dismissOnOutside=ee(!0,{transform:Ye$1});dismissOnEscape=ee(!0,{transform:Ye$1});dismiss=Pk();openedChange=Pk();focusTimer;disconnectTheme;disconnectLighting;disconnectOrigin;overlayRef;transition;presentationRevision=0;restoreTarget;constructor(){We$1(()=>{let t=this.open(),e=this.presentation();if(this.browser)if(e===`popover`)if(t){this.attachPopover();let n=this.overlayRef?.overlayElement;n&&(n.setAttribute(`aria-label`,this.resolvedAriaLabel()),n.id=this.panelId(),n.style.inlineSize=this.panelWidth(),n.style.maxInlineSize=this.panelWidth(),this.disconnectOrigin?.reposition())}else this.detachPopover();else this.overlayRef&&this.disposePopover()}),this.destroyRef.onDestroy(()=>this.disposePopover())}onDrawerClosed(){this.dismiss.emit(),this.openedChange.emit(!1)}attachPopover(){if(this.overlayRef?.overlayElement.inert&&this.disposePopover(!1),this.overlayRef)return;let t=this.origin(),e=this.content();if(!t||!e)return;this.restoreTarget=t.ownerDocument.activeElement instanceof HTMLElement?t.ownerDocument.activeElement:t;let n=this.overlay.create({positionStrategy:this.bxOverlayPositionService.getElementStrategy(t,`bottom`,6).withFlexibleDimensions(!1),scrollStrategy:this.overlay.scrollStrategies.noop(),usePopover:!!t.closest(`dialog, [role="dialog"], [role="alertdialog"], bx-modal, bx-modal-core, [popover]`)});this.overlayRef=n,this.scrollLockService.disableScroll(this.scrollLockId,{handleTouchInput:!0});let o=n.overlayElement;o.id=this.panelId(),o.setAttribute(`role`,`dialog`),o.setAttribute(`aria-label`,this.resolvedAriaLabel()),o.tabIndex=-1,o.classList.add(`bx-picker-overlay-pane`),this.panelClass()&&o.classList.add(...this.panelClass().split(/\s+/).filter(Boolean)),this.panelWidth()&&(o.style.inlineSize=this.panelWidth(),o.style.maxInlineSize=this.panelWidth()),this.disconnectTheme=this.ngZone.runOutsideAngular(()=>BK(t,o)),this.disconnectLighting=DR(o,t),n.attach(new ja(e,this.viewContainerRef)).detectChanges(),this.disconnectOrigin=this.ngZone.runOutsideAngular(()=>RK(n,t)),this.openedChange.emit(!0),this.transition=this.ngZone.runOutsideAngular(()=>MR(t,o,{scale:1})),this.ngZone.runOutsideAngular(()=>this.transition?.enter());let r=n.outsidePointerEvents().subscribe(m=>{this.dismissOnOutside()&&!t.contains(m.target)&&this.dismiss.emit()}),u=n.keydownEvents().subscribe(m=>{m.key!==`Escape`||!this.dismissOnEscape()||m.defaultPrevented||(m.preventDefault(),m.stopPropagation(),this.dismiss.emit())});n.overlayElement.addEventListener(`pointerdown`,m=>m.stopPropagation()),this.overlaySubscriptions.push(r,u),this.focusTimer=setTimeout(()=>{if(!this.autoFocus()||!this.open()||this.overlayRef!==n||o.inert)return;(o.querySelector(`[data-picker-initial-focus], [data-focus-date][tabindex="0"], bx-time-wheel [role="listbox"]`)??o.querySelector(`button:not([disabled]), [href], input:not([disabled]), [tabindex]:not([tabindex="-1"])`)??o).focus({preventScroll:!0})})}detachPopover(){let t=this.overlayRef;if(!t)return;let e=t.overlayElement,n=++this.presentationRevision,o=this.transition;clearTimeout(this.focusTimer),e.inert=!0,this.scrollLockService.enableScroll(this.scrollLockId);let a=()=>{n===this.presentationRevision&&this.disposePopover()};o?this.ngZone.runOutsideAngular(()=>o.exit()).then(a,a):a(),this.openedChange.emit(!1)}disposePopover(t=!0){clearTimeout(this.focusTimer);for(let e of this.overlaySubscriptions.splice(0))e.unsubscribe();++this.presentationRevision,this.transition?.destroy(),this.transition=void 0,this.disconnectTheme?.(),this.disconnectTheme=void 0,this.disconnectLighting?.(),this.disconnectLighting=void 0,this.disconnectOrigin?.(),this.disconnectOrigin=void 0,this.overlayRef?.dispose(),this.overlayRef=void 0,this.scrollLockService.enableScroll(this.scrollLockId),t&&this.restoreTarget?.isConnected&&this.restoreTarget.focus({preventScroll:!0}),this.restoreTarget=void 0}static ɵfac=function(e){return new(e||i)};static ɵcmp=Fr$1({type:i,selectors:[[`bx-picker-surface`]],inputs:{open:[1,`open`],presentation:[1,`presentation`],origin:[1,`origin`],content:[1,`content`],ariaLabel:[1,`ariaLabel`],panelId:[1,`panelId`],panelClass:[1,`panelClass`],panelWidth:[1,`panelWidth`],autoFocus:[1,`autoFocus`],dismissOnOutside:[1,`dismissOnOutside`],dismissOnEscape:[1,`dismissOnEscape`]},outputs:{open:`openChange`,dismiss:`dismiss`,openedChange:`openedChange`},decls:2,vars:2,consts:[[`panelStyle`,`--bx-drawer-body-padding: 0; --bx-drawer-width: 100%;`,`size`,`lg`,`maxHeight`,`92dvh`,3,`surfaceId`,`ariaLabel`,`showHandle`,`showCloseButton`,`headerVisible`,`panelClass`,`open`],[`role`,`dialog`,`tabindex`,`-1`,1,`bx-picker-inline`,3,`id`],[3,`ngTemplateOutlet`],[`panelStyle`,`--bx-drawer-body-padding: 0; --bx-drawer-width: 100%;`,`size`,`lg`,`maxHeight`,`92dvh`,3,`openChange`,`closed`,`surfaceId`,`ariaLabel`,`showHandle`,`showCloseButton`,`headerVisible`,`panelClass`,`open`]],template:function(e,n){e&1&&(od$1(0,wu,1,1),od$1(1,Tu,2,8,`bx-bottom-drawer`,0)),e&2&&(nd$1(n.isInline()?0:-1),Xl$1(),nd$1(n.isDrawer()?1:-1))},dependencies:[ml$1,Ta],styles:[`
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
}`]})};var $r={dateParse:({params:i})=>`Enter a date in the ${i.format} format.`,dateMin:({params:i})=>`The date cannot be before ${i.minFormatted}.`,dateMax:({params:i})=>`The date cannot be after ${i.maxFormatted}.`,dateOrder:({params:i})=>`The end date cannot be before the start date (${i.startFormatted}).`,dateDisabled:`This date is not selectable. Choose another date.`,dateAvailability:`Availability for this date has not been confirmed. Wait for loading to finish or retry.`,dateMinLength:({params:i})=>`Select a range of at least ${i.minLength} days.`,dateMaxLength:({params:i})=>`Select a range of at most ${i.maxLength} days.`,dateSameDay:`The start and end dates must be different.`,dateLimit:({params:i})=>`Select no more than ${i.limit} dates.`,dateIncomplete:`Enter both a start date and an end date.`,dateCrossing:`This range includes a date that cannot be selected. Choose another range.`};var Ur={parse:`dateParse`,min:`dateMin`,max:`dateMax`,order:`dateOrder`,unknown:`dateAvailability`,"min-length":`dateMinLength`,"max-length":`dateMaxLength`,"same-day":`dateSameDay`,limit:`dateLimit`,incomplete:`dateIncomplete`,crossing:`dateCrossing`};function Gr(i,t,e){let n=new Map(i?.filter(o=>!e.start||!e.end||o.date<e.start||o.date>e.end).map(o=>[o.date,o]));for(let o of t)n.set(o.date,o);return[...n.values()]}function ko(i,t){if(i==null||typeof i==`string`)return i;if(Array.isArray(i)){let e=[...i].sort();return(t===`min`?e[0]:e.at(-1))??null}return yC(i)?t===`min`?i.start:i.end:null}var Ou=[`panelTemplate`];var Iu=[[[`bx-error`]],[[`bx-hint`]]];var Du=[`bx-error`,`bx-hint`];var ku=[`ngProjectAs`,`bx-error`,5,[`bx-error`]];var Eu=[`ngProjectAs`,`bx-hint`,5,[`bx-hint`]];var Ru=()=>[`start`,`end`];function Lu(i,t){i&1&&(bo$1(0,`span`,14),lA(1,`*`),Go())}function Au(i,t){if(i&1){let e=pb$1();bo$1(0,`input`,19),br$1(`input`,function(o){al$1(e);let a=Wo().$implicit,r=Wo(2);return cl$1(a===`start`?r.onRangeStartInput(o):r.onRangeEndInput(o))})(`blur`,function(){al$1(e);let o=Wo().$implicit,a=Wo(2);return cl$1(o===`start`?a.onRangeStartBlur():a.onRangeEndBlur())})(`keydown`,function(o){al$1(e);let a=Wo(3);return cl$1(a.onRangeKeydown(o))})(`keydown.escape`,function(o){al$1(e);let a=Wo(3);return cl$1(a.onEscape(o))}),Go()}if(i&2){let e=Wo().$implicit,n=Wo(2);xo$1(`id`,e===`start`?n.controlId():n.controlId()+`-end`)(`value`,e===`start`?n.typedStart():n.typedEnd())(`disabled`,n.effectiveDisabled())(`readOnly`,n.isReadonly()),vo$1(`aria-expanded`,n.isOpen())(`aria-controls`,n.isOpen()?n.controlId()+`-panel`:null)(`placeholder`,n.isFloating()?n.resolvedDatePlaceholder():``)(`aria-label`,e===`start`?n.resolvedStartLabel():n.resolvedEndLabel())(`aria-describedby`,n.describedBy())(`aria-invalid`,n.showError()||!!n.parseError())(`aria-required`,n.effectiveRequired())}}function Fu(i,t){if(i&1){let e=pb$1();bo$1(0,`button`,20),br$1(`click`,function(o){al$1(e);let a=Wo(3);return cl$1(a.onTriggerClick(o))})(`keydown.escape`,function(o){al$1(e);let a=Wo(3);return cl$1(a.onEscape(o))}),lA(1),Go()}if(i&2){let e=Wo().$implicit,n=Wo(2);xo$1(`id`,e===`start`?n.controlId():n.controlId()+`-end`)(`disabled`,n.effectiveDisabled()),vo$1(`aria-label`,e===`start`?n.resolvedStartLabel():n.resolvedEndLabel())(`aria-expanded`,n.isOpen())(`aria-describedby`,n.describedBy())(`aria-invalid`,n.showError()||!!n.parseError())(`aria-readonly`,n.isReadonly()),Xl$1(),mb$1(` `,e===`start`?n.displayStart():n.displayEnd(),` `)}}function Vu(i,t){if(i&1){let e=pb$1();bo$1(0,`div`,12)(1,`label`,13),lA(2),od$1(3,Lu,2,0,`span`,14),Go(),od$1(4,Au,1,11,`input`,15)(5,Fu,2,8,`button`,16),bo$1(6,`button`,17),br$1(`click`,function(o){al$1(e);let a=Wo(2);return cl$1(a.onTriggerClick(o))}),sd$1(7,`bx-icon`,18),Go()()}if(i&2){let e=t.$implicit,n=Wo(2);tr$1(`is-open`,n.isOpen())(`is-floating`,n.editable()?n.isFloating():e===`start`?!!n.displayStart():!!n.displayEnd())(`is-invalid`,n.showError()||!!n.parseError())(`is-outline`,n.resolvedAppearance()===`outline`)(`is-readonly`,n.isReadonly())(`is-disabled`,n.effectiveDisabled())(`is-keyboard-focused`,n.keyboardFocused()),Xl$1(),vo$1(`for`,e===`start`?n.controlId():n.controlId()+`-end`),Xl$1(),mb$1(` `,e===`start`?n.resolvedStartLabel():n.resolvedEndLabel(),` `),Xl$1(),nd$1(n.effectiveRequired()&&!n.resolvedHideRequiredMarker()?3:-1),Xl$1(),nd$1(n.editable()?4:5),Xl$1(2),xo$1(`disabled`,n.effectiveDisabled()||n.isReadonly()),vo$1(`aria-label`,n.resolvedOpenPickerLabel()),Xl$1(),xo$1(`name`,n.pickerIcon())(`contentTemplate`,n.pickerIconTemplate())(`decorative`,!0)}}function zu(i,t){if(i&1&&(bo$1(0,`div`,5),ab$1(1,Vu,8,23,`div`,11,TT),Go()),i&2){let e=Wo();vo$1(`aria-label`,e.resolvedLabel()||e.resolvedDatePlaceholder()),Xl$1(),cb$1(wA(1,Ru))}}function Bu(i,t){i&1&&(bo$1(0,`span`,14),lA(1,`*`),Go())}function Hu(i,t){if(i&1&&(bo$1(0,`span`,13),lA(1),od$1(2,Bu,2,0,`span`,14),Go()),i&2){let e=Wo(2);Xl$1(),mb$1(``,e.resolvedLabel(),` `),Xl$1(),nd$1(e.effectiveRequired()&&!e.resolvedHideRequiredMarker()?2:-1)}}function Wu(i,t){i&1&&sd$1(0,`bx-loading-spinner`,26),i&2&&xo$1(`size`,16)(`decorative`,!0)}function ju(i,t){if(i&1&&sd$1(0,`bx-icon`,18),i&2){let e=Wo(3);xo$1(`name`,e.pickerIcon())(`contentTemplate`,e.pickerIconTemplate())(`decorative`,!0)}}function qu(i,t){if(i&1&&od$1(0,Wu,1,2,`bx-loading-spinner`,26)(1,ju,1,3,`bx-icon`,18),i&2){let e=t.$implicit;nd$1(e?0:1)}}function $u(i,t){if(i&1){let e=pb$1();bo$1(0,`div`,21),od$1(1,Hu,3,2,`span`,13),bo$1(2,`input`,22),br$1(`input`,function(o){al$1(e);let a=Wo();return cl$1(a.onRangeStartInput(o))})(`blur`,function(){al$1(e);let o=Wo();return cl$1(o.onRangeStartBlur())})(`keydown`,function(o){al$1(e);let a=Wo();return cl$1(a.onRangeKeydown(o))})(`keydown.escape`,function(o){al$1(e);let a=Wo();return cl$1(a.onEscape(o))}),Go(),bo$1(3,`span`,23),lA(4),Go(),bo$1(5,`input`,24),br$1(`input`,function(o){al$1(e);let a=Wo();return cl$1(a.onRangeEndInput(o))})(`blur`,function(){al$1(e);let o=Wo();return cl$1(o.onRangeEndBlur())})(`keydown`,function(o){al$1(e);let a=Wo();return cl$1(a.onRangeKeydown(o))})(`keydown.escape`,function(o){al$1(e);let a=Wo();return cl$1(a.onEscape(o))}),Go(),bo$1(6,`button`,17),br$1(`click`,function(o){al$1(e);let a=Wo();return cl$1(a.onTriggerClick(o))}),bo$1(7,`bx-visual-transition`,25),rd$1(8,qu,2,1,`ng-template`),Go()()()}if(i&2){let e=Wo();tr$1(`has-label`,!!e.label())(`is-open`,e.isOpen())(`is-floating`,e.isFloating())(`is-invalid`,e.showError()||!!e.parseError())(`is-outline`,e.resolvedAppearance()===`outline`)(`is-readonly`,e.isReadonly())(`is-disabled`,e.effectiveDisabled())(`is-keyboard-focused`,e.keyboardFocused()),Xl$1(),nd$1(e.label()?1:-1),Xl$1(),xo$1(`value`,e.typedStart())(`id`,e.controlId())(`disabled`,e.effectiveDisabled())(`readOnly`,e.isReadonly()),vo$1(`aria-controls`,e.isOpen()?e.controlId()+`-panel`:null)(`placeholder`,e.isFloating()||!e.label()?e.resolvedStartLabel():``)(`aria-describedby`,e.describedBy())(`aria-required`,e.effectiveRequired())(`aria-label`,(e.label()?e.resolvedLabel()+`, `:``)+e.resolvedStartLabel())(`aria-expanded`,e.isOpen())(`aria-haspopup`,`dialog`)(`aria-invalid`,e.showError()||!!e.parseError())(`aria-readonly`,e.isReadonly()),Xl$1(),tr$1(`is-concealed`,e.label()&&!e.isFloating()),Xl$1(),ik(e.settings().rangeSeparator),Xl$1(),xo$1(`value`,e.typedEnd())(`disabled`,e.effectiveDisabled())(`readOnly`,e.isReadonly()),vo$1(`aria-controls`,e.isOpen()?e.controlId()+`-panel`:null)(`placeholder`,e.isFloating()||!e.label()?e.resolvedEndLabel():``)(`aria-describedby`,e.describedBy())(`aria-required`,e.effectiveRequired())(`aria-label`,(e.label()?e.resolvedLabel()+`, `:``)+e.resolvedEndLabel())(`aria-expanded`,e.isOpen())(`aria-haspopup`,`dialog`)(`aria-invalid`,e.showError()||!!e.parseError())(`aria-readonly`,e.isReadonly()),Xl$1(),xo$1(`disabled`,e.effectiveDisabled()||e.isReadonly()||e.isLoading()),vo$1(`aria-label`,e.resolvedOpenPickerLabel()),Xl$1(),xo$1(`value`,e.isLoading())}}function Uu(i,t){i&1&&(bo$1(0,`span`,14),lA(1,`*`),Go())}function Gu(i,t){if(i&1&&(bo$1(0,`span`,13),lA(1),od$1(2,Uu,2,0,`span`,14),Go()),i&2){let e=Wo(2);Xl$1(),mb$1(``,e.resolvedLabel(),` `),Xl$1(),nd$1(e.effectiveRequired()&&!e.resolvedHideRequiredMarker()?2:-1)}}function Ku(i,t){i&1&&sd$1(0,`bx-loading-spinner`,26),i&2&&xo$1(`size`,16)(`decorative`,!0)}function Zu(i,t){if(i&1&&sd$1(0,`bx-icon`,18),i&2){let e=Wo(3);xo$1(`name`,e.pickerIcon())(`contentTemplate`,e.pickerIconTemplate())(`decorative`,!0)}}function Xu(i,t){if(i&1&&od$1(0,Ku,1,2,`bx-loading-spinner`,26)(1,Zu,1,3,`bx-icon`,18),i&2){let e=t.$implicit;nd$1(e?0:1)}}function Yu(i,t){if(i&1){let e=pb$1();bo$1(0,`div`,27),od$1(1,Gu,3,2,`span`,13),bo$1(2,`input`,28),br$1(`input`,function(o){al$1(e);let a=Wo();return cl$1(a.onTypedInput(o))})(`blur`,function(){al$1(e);let o=Wo();return cl$1(o.onTypedBlur())})(`keydown`,function(o){al$1(e);let a=Wo();return cl$1(a.onTypedKeydown(o))})(`keydown.escape`,function(o){al$1(e);let a=Wo();return cl$1(a.onEscape(o))}),Go(),bo$1(3,`button`,17),br$1(`click`,function(o){al$1(e);let a=Wo();return cl$1(a.onTriggerClick(o))}),bo$1(4,`bx-visual-transition`,25),rd$1(5,Xu,2,1,`ng-template`),Go()()()}if(i&2){let e=Wo();tr$1(`has-label`,!!e.label())(`is-open`,e.isOpen())(`is-floating`,e.isFloating())(`is-invalid`,e.showError()||!!e.parseError())(`is-outline`,e.resolvedAppearance()===`outline`)(`is-readonly`,e.isReadonly())(`is-disabled`,e.effectiveDisabled())(`is-keyboard-focused`,e.keyboardFocused()),Xl$1(),nd$1(e.label()?1:-1),Xl$1(),xo$1(`id`,e.controlId())(`value`,e.typedText())(`disabled`,e.effectiveDisabled())(`readOnly`,e.isReadonly()),vo$1(`aria-controls`,e.isOpen()?e.controlId()+`-panel`:null)(`placeholder`,e.isFloating()||!e.label()?e.resolvedDatePlaceholder():``)(`aria-label`,e.ariaLabel()||e.resolvedLabel()||e.resolvedDatePlaceholder())(`aria-describedby`,e.describedBy())(`aria-expanded`,e.isOpen())(`aria-haspopup`,`dialog`)(`aria-invalid`,e.showError()||!!e.parseError())(`aria-required`,e.effectiveRequired())(`aria-readonly`,e.isReadonly())(`data-testid`,e.dataTestId()),Xl$1(),xo$1(`disabled`,e.effectiveDisabled()||e.isReadonly()||e.isLoading()),vo$1(`aria-label`,e.resolvedOpenPickerLabel()),Xl$1(),xo$1(`value`,e.isLoading())}}function Qu(i,t){i&1&&(bo$1(0,`span`,14),lA(1,`*`),Go())}function Ju(i,t){if(i&1&&(bo$1(0,`span`,13),lA(1),od$1(2,Qu,2,0,`span`,14),Go()),i&2){let e=Wo(2);Xl$1(),mb$1(` `,e.resolvedLabel(),` `),Xl$1(),nd$1(e.effectiveRequired()&&!e.resolvedHideRequiredMarker()?2:-1)}}function ep(i,t){if(i&1&&sd$1(0,`bx-tag`,34),i&2){let e=t.$implicit,n=Wo(3);xo$1(`text`,n.formatChipLabel(e))(`config`,n.tagConfig())(`focusable`,!1)(`tooltipOnTruncate`,n.resolvedTooltipOnTruncate()?void 0:!1)}}function tp(i,t){if(i&1&&sd$1(0,`bx-tag`,35),i&2){let e=Wo(3);xo$1(`text`,e.overflowDatesLabel())(`config`,e.overflowTagConfig())(`tooltip`,e.overflowDatesTooltip())(`focusable`,!1)(`tooltipOnTruncate`,e.resolvedTooltipOnTruncate()?void 0:!1)}}function np(i,t){if(i&1&&(bo$1(0,`span`,31),ab$1(1,ep,1,4,`bx-tag`,34,TT),od$1(3,tp,1,5,`bx-tag`,35),Go()),i&2){let e=Wo(2);vo$1(`aria-label`,e.resolvedSelectedDatesLabel()),Xl$1(),cb$1(e.visibleDates()),Xl$1(2),nd$1(e.multipleDates().length>e.visibleTagCount()?3:-1)}}function ip(i,t){if(i&1&&(bo$1(0,`span`,32),lA(1),Go()),i&2){let e=Wo(2);xo$1(`bxTooltip`,e.resolvedTooltipOnTruncate()?e.displayValue():``),Xl$1(),ik(e.displayValue()||(e.label()?``:e.resolvedTriggerText()))}}function op(i,t){i&1&&sd$1(0,`bx-loading-spinner`,26),i&2&&xo$1(`size`,16)(`decorative`,!0)}function ap(i,t){if(i&1&&sd$1(0,`bx-icon`,18),i&2){let e=Wo(3);xo$1(`name`,e.pickerIcon())(`contentTemplate`,e.pickerIconTemplate())(`decorative`,!0)}}function rp(i,t){if(i&1&&od$1(0,op,1,2,`bx-loading-spinner`,26)(1,ap,1,3,`bx-icon`,18),i&2){let e=t.$implicit;nd$1(e?0:1)}}function sp(i,t){if(i&1){let e=pb$1();bo$1(0,`button`,29,2),br$1(`click`,function(o){al$1(e);let a=Wo();return cl$1(a.onTriggerClick(o))})(`keydown.arrowdown`,function(o){al$1(e);let a=Wo();return o.preventDefault(),cl$1(a.onTriggerClick(o))})(`keydown.escape`,function(o){al$1(e);let a=Wo();return cl$1(a.onEscape(o))})(`blur`,function(){al$1(e);let o=Wo();return cl$1(o.markAsTouched())}),od$1(2,Ju,3,2,`span`,13),bo$1(3,`span`,30),od$1(4,np,4,2,`span`,31)(5,ip,2,2,`span`,32),Go(),bo$1(6,`bx-visual-transition`,33),rd$1(7,rp,2,1,`ng-template`),Go()()}if(i&2){let e=Wo();tr$1(`has-label`,!!e.label())(`is-open`,e.isOpen())(`is-floating`,e.isFloating())(`is-invalid`,e.showError()||!!e.parseError())(`is-outline`,e.resolvedAppearance()===`outline`)(`is-readonly`,e.isReadonly())(`is-disabled`,e.effectiveDisabled())(`is-keyboard-focused`,e.keyboardFocused()),xo$1(`id`,e.controlId())(`disabled`,e.effectiveDisabled()),vo$1(`aria-label`,e.ariaLabel()||e.resolvedLabel()||e.resolvedDatePlaceholder())(`aria-labelledby`,e.ariaLabelledBy())(`aria-describedby`,e.describedBy())(`aria-haspopup`,`dialog`)(`aria-expanded`,e.isOpen())(`aria-invalid`,e.showError()||!!e.parseError())(`aria-required`,e.effectiveRequired())(`aria-readonly`,e.isReadonly())(`aria-busy`,e.isLoading())(`data-testid`,e.dataTestId()),Xl$1(2),nd$1(e.label()?2:-1),Xl$1(),tr$1(`is-placeholder`,!e.displayValue()),Xl$1(),nd$1(e.mode()===`multiple`&&e.multipleDates().length?4:5),Xl$1(2),xo$1(`value`,e.isLoading())}}function lp(i,t){if(i&1){let e=pb$1();bo$1(0,`button`,36),br$1(`click`,function(){al$1(e);let o=Wo();return cl$1(o.clear())}),sd$1(1,`bx-icon`,37),Go()}if(i&2){let e=Wo();xo$1(`surfaceEffects`,!1)(`disabled`,e.effectiveDisabled())(`bxTooltip`,e.resolvedClearTooltip()),vo$1(`aria-label`,e.resolvedClearLabel()),Xl$1(),xo$1(`decorative`,!0)}}function dp(i,t){if(i&1){let e=pb$1();bo$1(0,`button`,38),br$1(`click`,function(){let o=al$1(e).retry;return cl$1(o())}),sd$1(1,`bx-icon`,39),lA(2),Go()}if(i&2){let e=t.label;Xl$1(),xo$1(`decorative`,!0),Xl$1(),mb$1(``,e,` `)}}function cp(i,t){if(i&1){let e=pb$1();bo$1(0,`aside`,42)(1,`bx-date-preset-list`,45),br$1(`presetSelect`,function(o){al$1(e);let a=Wo(2);return cl$1(a.onPeriodPresetSelect(o))}),Go()()}if(i&2){let e=Wo(2);Xl$1(),xo$1(`presets`,e.effectivePresets())(`context`,e.presetContext())(`activeValue`,e.draftValue())(`horizontal`,e.presetsHorizontal())(`ariaLabel`,e.resolvedPresetsLabel())}}function up(i,t){if(i&1){let e=pb$1();bo$1(0,`aside`,42)(1,`bx-date-preset-list`,45),br$1(`presetSelect`,function(o){al$1(e);let a=Wo(2);return cl$1(a.onPeriodPresetSelect(o))}),Go()()}if(i&2){let e=Wo(2);Xl$1(),xo$1(`presets`,e.effectivePresets())(`context`,e.presetContext())(`activeValue`,e.draftValue())(`horizontal`,e.presetsHorizontal())(`ariaLabel`,e.resolvedPresetsLabel())}}function pp(i,t){if(i&1){let e=pb$1();bo$1(0,`div`,40)(1,`div`,41),od$1(2,cp,2,5,`aside`,42),bo$1(3,`div`,43)(4,`bx-calendar`,44),br$1(`visibleRangeChange`,function(o){al$1(e);let a=Wo();return cl$1(a.onVisibleRange(o))})(`viewChange`,function(o){al$1(e);let a=Wo();return cl$1(a.viewChange.emit(o))})(`monthSelected`,function(o){al$1(e);let a=Wo();return cl$1(a.monthSelected.emit(o))})(`yearSelected`,function(o){al$1(e);let a=Wo();return cl$1(a.yearSelected.emit(o))})(`rangeStart`,function(o){al$1(e);let a=Wo();return cl$1(a.onCalendarRangeStart(o))})(`valueChange`,function(o){al$1(e);let a=Wo();return cl$1(a.onCalendarValueChange(o))})(`selectionRejected`,function(o){al$1(e);let a=Wo();return cl$1(a.onSelectionRejected(o))})(`requestAvailability`,function(o){al$1(e);let a=Wo();return cl$1(a.onAvailabilityRequest(o))})(`retryAvailability`,function(o){al$1(e);let a=Wo();return cl$1(a.onAvailabilityRequest(o))}),Go()(),od$1(5,up,2,5,`aside`,42),Go()()}if(i&2){let e=Wo(),n=FT(9);tr$1(`is-drawer`,e.isDrawer()),xo$1(`bxSurfaceInteractive`,!1),Xl$1(2),nd$1(e.showPresets()&&e.presetsPlacement()===`start`?2:-1),Xl$1(2),xo$1(`startView`,e.startView())(`mode`,e.mode())(`value`,e.draftValue())(`viewDate`,e.viewDate())(`months`,e.calendarMonths())(`retryTemplate`,n)(`weekdayNameFormat`,e.weekdayNameFormat())(`monthNameFormat`,e.monthNameFormat())(`locale`,e.settings().locale)(`calendarId`,e.settings().calendar)(`timeZone`,e.settings().timeZone)(`weekStartsOn`,e.settings().weekStartsOn)(`minimalDaysInFirstWeek`,e.settings().minimalDaysInFirstWeek)(`min`,e.min())(`max`,e.max())(`disabledDates`,e.disabledDates())(`disabledIntervals`,e.disabledIntervals())(`disabledWeekdays`,e.disabledWeekdays())(`dateFilter`,e.dateFilter())(`crossingPolicy`,e.crossingPolicy())(`minRangeLength`,e.minRangeLength())(`maxRangeLength`,e.maxRangeLength())(`allowSameDay`,e.allowSameDay())(`selectionLimit`,e.selectionLimit())(`readOnly`,e.isReadonly()||e.effectiveDisabled())(`availability`,e.availabilityForCalendar())(`dayTemplate`,e.dayTemplate())(`showToday`,e.showToday())(`showTodayButton`,e.showTodayButton())(`todayLabel`,e.todayLabel())(`loadingLabel`,e.loadingLabel())(`retryLabel`,e.retryLabel()),Xl$1(),nd$1(e.showPresets()&&e.presetsPlacement()===`end`?5:-1)}}var Kr=class i extends we{bxDateTimeConfigService=b(vC);clock=b(hC);i18n=b(VQ,{optional:!0});windowDimensionsService=b(Fd$1);originElement=$(null);availabilityState=$(void 0);lastDraftSignature=$(``);fieldFocused=$(!1);textEdited=$(!1);isOpen=$(!1);draftValue=$(null);viewDate=$(null);typedText=$(``);typedStart=$(``);typedEnd=$(``);parseError=$(null);settings=G(()=>this.bxDateTimeConfigService.resolve({locale:this.locale(),calendar:this.calendarId(),timeZone:this.timeZone(),weekStartsOn:this.weekStartsOn(),minimalDaysInFirstWeek:this.minimalDaysInFirstWeek(),dateFormat:this.dateFormat(),allowNaturalLanguage:this.allowNaturalLanguage()}));adapter=G(()=>this.bxDateTimeConfigService.adapter(this.settings().calendar));modeInfo=G(()=>Jh(this.mode()));formatContext=G(()=>({locale:this.settings().locale,calendar:this.adapter(),weekStartsOn:this.settings().weekStartsOn,minimalDaysInFirstWeek:this.settings().minimalDaysInFirstWeek}));presetContext=G(()=>({now:this.clock.now(),today:this.todayIso(),locale:this.settings().locale,calendar:this.adapter(),timeZone:this.settings().timeZone,weekStartsOn:this.settings().weekStartsOn,minimalDaysInFirstWeek:this.settings().minimalDaysInFirstWeek}));isDrawer=G(()=>this.surfacePresentation()===`drawer`);surfacePresentation=G(()=>{let t=this.presentation();return t!==`auto`?t:this.windowDimensionsService.isMobile()?`drawer`:`popover`});displayValue=G(()=>this.formatValue(this.isOpen()&&this.mode()!==`multiple`?this.draftValue():this.internalValue()));displayStart=G(()=>this.formatEndpoint(this.rangeStart(this.isOpen()?this.draftValue():this.internalValue())));displayEnd=G(()=>this.formatEndpoint(this.rangeEnd(this.isOpen()?this.draftValue():this.internalValue())));isRangeMode=G(()=>this.modeInfo().selection===`range`);rangeFieldLayout=G(()=>this.separateFields()&&this.isRangeMode()?`separate`:`combined`);effectivePresets=G(()=>(this.presets()??this.defaultPresets()).map(e=>s(r({},e),{resolve:n=>this.normalizePresetValue(e.resolve(n))})));showPresets=G(()=>this.presetsPlacement()!==`hidden`&&this.effectivePresets().length>0);presetsHorizontal=G(()=>this.isDrawer());calendarMonths=G(()=>{let t=this.months();return t>0?t:this.isRangeMode()&&!this.isDrawer()?2:1});availabilityForCalendar=G(()=>this.availability()??(this.resolver()?this.availabilityState():void 0));resolvedDatePlaceholder=G(()=>LQ(this.placeholder()??this.defaultPlaceholder(),this.i18n));resolvedInvalidLabel=G(()=>this.dateValidationMessage(this.parseError()??`endpoint`));resolvedTriggerText=G(()=>LQ(this.placeholder()??this.openPickerLabel(),this.i18n));resolvedOpenPickerLabel=G(()=>LQ(this.openPickerLabel(),this.i18n));resolvedClearLabel=G(()=>LQ(this.clearLabel(),this.i18n));resolvedPresetsLabel=G(()=>LQ(this.presetsLabel(),this.i18n));resolvedStartLabel=G(()=>LQ(this.startLabel(),this.i18n));resolvedEndLabel=G(()=>LQ(this.endLabel(),this.i18n));resolvedMoreDatesLabel=G(()=>LQ(this.moreDatesLabel(),this.i18n));resolvedSelectedDatesLabel=G(()=>LQ(this.selectedDatesLabel(),this.i18n));availableDates=G(()=>this.availabilityForCalendar()?.dates??[]);showClear=G(()=>{let t=this.internalValue(),e=Array.isArray(t)?t.length>0:!!t;return this.clearable()&&(e||this.textEdited())&&!this.isReadonly()});isFloating=G(()=>!!this.displayValue()||this.editable()&&this.mode()!==`multiple`&&(this.fieldFocused()||this.isOpen()||!!this.typedText()||!!this.typedStart()||!!this.typedEnd()||this.resolvedFloatLabel()===`always`));isLoading=G(()=>this.loading()||this.availabilityForCalendar()?.loading===!0);multipleDates=G(()=>{let t=this.internalValue();return Array.isArray(t)?t:[]});visibleDates=G(()=>this.multipleDates().slice(0,this.visibleTagCount()));overflowDatesLabel=G(()=>`+${Math.max(0,this.multipleDates().length-this.visibleTagCount())}`);overflowDatesTooltip=G(()=>this.multipleDates().slice(this.visibleTagCount()).map(t=>this.formatEndpoint(t)).join(`, `));resolvedClearTooltip=G(()=>LQ(this.clearTooltip()??this.clearLabel(),this.i18n));restrictionConfig=G(()=>({min:this.min(),max:this.max(),disabledDates:this.disabledDates(),disabledIntervals:this.disabledIntervals(),disabledWeekdays:this.disabledWeekdays(),metadata:this.availableDates(),isDateDisabled:t=>!!this.dateFilter()?.(t)||(!!this.resolver()||!!this.availability())&&(!this.availabilityForCalendar()||!!this.availabilityForCalendar()?.loading||!!this.availabilityForCalendar()?.error||!this.availableDates().some(e=>e.date===t))}));panelClass=G(()=>`bx-date-panel ${this.isDrawer()?`is-drawer`:`is-popover`}`);panelWidth=G(()=>{if(this.isDrawer())return`100%`;let t=this.calendarMonths(),e=this.showPresets();return t===1?e?`min(94vw, 32rem)`:`min(94vw, 20rem)`:e?`min(94vw, 46rem)`:`min(94vw, 38rem)`});panelOrigin=G(()=>this.originElement());panelTemplate=Sz(`panelTemplate`);mode=ee(`single`);pickerIconTemplate=ee(void 0);pickerIcon=ee(`calendar`);openPickerLabel=ee(`Choose date`);startAt=ee(null);startView=ee(void 0);parseFormats=ee([]);locale=ee(void 0);calendarId=ee(void 0);timeZone=ee(void 0);weekStartsOn=ee(void 0);minimalDaysInFirstWeek=ee(void 0);dateFormat=ee(void 0);allowNaturalLanguage=ee(!1,{transform:Ye$1});editable=ee(!0,{transform:Ye$1});presentation=ee(`auto`);weekdayNameFormat=ee(`narrow`);monthNameFormat=ee(`short`);months=ee(0,{transform:t=>Math.trunc(Number(t))||0});separateFields=ee(!1,{transform:Ye$1});commitPolicy=ee(`auto`);closeOnSelect=ee(!0,{transform:Ye$1});clearable=ee(!0,{transform:Ye$1});presets=ee(void 0);presetsPlacement=ee(`start`);min=ee(void 0,{transform:t=>ko(t,`min`)});max=ee(void 0,{transform:t=>ko(t,`max`)});disabledDates=ee([]);disabledIntervals=ee([]);disabledWeekdays=ee([]);dateFilter=ee(void 0);crossingPolicy=ee(`reject`);minRangeLength=ee(1);maxRangeLength=ee(null);allowSameDay=ee(!0,{transform:Ye$1});selectionLimit=ee(null);availability=ee(void 0);resolver=ee(void 0);loadingLabel=ee(void 0);retryLabel=ee(`Retry request`);loadErrorMessage=ee(`Dates could not be loaded.`);invalidSelectionLabel=ee(void 0);applyLabel=ee(`Apply`);cancelLabel=ee(`Cancel`);clearLabel=ee(`Clear selection`);todayLabel=ee(void 0);presetsLabel=ee(`Quick select`);showToday=ee(!0,{transform:Ye$1});showTodayButton=ee(!0,{transform:Ye$1});startLabel=ee(`Start date`);endLabel=ee(`End date`);moreDatesLabel=ee(`more`);selectedDatesLabel=ee(`Selected dates`);clearTooltip=ee(void 0);visibleTagCount=ee(1,{transform:fi});tagConfig=ee({});overflowTagConfig=ee({});dayTemplate=ee(void 0);viewChange=Pk();monthSelected=Pk();yearSelected=Pk();valueCommit=Pk();draftChange=Pk();openChange=Pk();visibleRangeChange=Pk();request=Pk();retry=Pk();parseFailed=Pk();resolverContext=``;resolverToken=0;lastRequest;closeTimer;constructor(){super(),We$1(()=>{(this.effectiveDisabled()||this.isReadonly())&&this.close()}),We$1(()=>{let t=this.draftValue(),e=JSON.stringify(t??null);e!==this.lastDraftSignature()&&(this.lastDraftSignature.set(e),de(()=>this.draftChange.emit(t)))}),We$1(()=>{this.resolver(),this.availability(),de(()=>{++this.resolverToken,this.availabilityState.set(void 0),this.resolverContext=``;let t=this.lastRequest;this.isOpen()&&t&&this.runResolver(s(r({},t),{revision:t.revision+1}))})}),We$1(()=>{let t=this.internalValue();this.fieldFocused()||this.isOpen()||this.textEdited()||(this.typedText.set(this.formatValue(t)),this.typedStart.set(this.displayStart()),this.typedEnd.set(this.displayEnd()))}),this.destroyRef.onDestroy(()=>{++this.resolverToken,this.clearScheduledClose()})}reset(){let t=this.isOpen();this.clearScheduledClose(),this.isOpen.set(!1),super.reset(),this.clearPendingEdit(),this.fieldFocused.set(!1),this.draftValue.set(this.internalValue()),this.typedText.set(this.formatValue(this.internalValue())),this.typedStart.set(this.displayStart()),this.typedEnd.set(this.displayEnd()),t&&this.openChange.emit(!1)}open(){if(this.isOpen()||this.effectiveDisabled()||this.isReadonly())return;this.clearScheduledClose(),this.draftValue.set(this.internalValue()),this.viewDate.set(this.startAt());let t=this.originElement();this.originElement.set(t?.isConnected&&this.nativeElement.contains(t)?t:this.nativeElement.querySelector(`.bx-date-trigger`)),this.isOpen.set(!0),this.openChange.emit(!0)}close(){this.isOpen()&&(this.clearScheduledClose(),this.isOpen.set(!1),this.markAsTouched(),this.openChange.emit(!1))}apply(){let t=this.draftValue();this.effectiveDisabled()||this.isReadonly()||t!==null&&!Array.isArray(t)&&!this.isDraftComplete(t)||this.commitDraft(t)&&this.close()}cancel(){this.draftValue.set(this.internalValue()),this.parseError()||(this.textEdited.set(!1),this.typedText.set(this.formatValue(this.internalValue())),this.typedStart.set(this.formatEndpoint(this.rangeStart(this.internalValue()))),this.typedEnd.set(this.formatEndpoint(this.rangeEnd(this.internalValue())))),this.close()}clear(){this.effectiveDisabled()||this.isReadonly()||(this.draftValue.set(null),this.clearPendingEdit(),this.parseError.set(null),this.updateValue(null),this.valueCommit.emit(null),this.close(),this.focus({preventScroll:!0}))}goToToday(){this.viewDate.set(this.todayIso())}reloadAvailability(){this.effectiveDisabled()||this.isReadonly()||this.availabilityForCalendar()?.loading||(this.isOpen()?this.lastRequest&&this.onAvailabilityRequest(s(r({},this.lastRequest),{revision:this.lastRequest.revision+1,source:`initial`})):this.open())}retryAvailability(){if(!this.lastRequest)return;let t=s(r({},this.lastRequest),{revision:this.lastRequest.revision+1,source:`retry`});this.retry.emit(t),this.runResolver(t)}clearPendingEdit(){super.clearPendingEdit(),this.typedText.set(``),this.typedStart.set(``),this.typedEnd.set(``),this.textEdited.set(!1),this.parseError.set(null)}onFieldFocus(){this.fieldFocused.set(!0)}onFieldBlur(t){t.relatedTarget instanceof Node&&this.nativeElement.contains(t.relatedTarget)||(this.fieldFocused.set(!1),this.markAsTouched())}onEscape(t){this.isOpen()&&(t.preventDefault(),this.cancel())}onTriggerClick(t){if(this.isReadonly())return;let e=t.currentTarget;e instanceof HTMLElement&&this.originElement.set(e.closest(`.bx-date-field`)??e),this.isOpen()?this.close():this.open()}onCalendarRangeStart(t){this.clearScheduledClose(),this.draftValue.set({start:t,end:null}),this.typedStart.set(this.formatEndpoint(t)),this.typedEnd.set(``),this.parseError.set(null)}onCalendarValueChange(t){this.draftValue.set(t),this.textEdited.set(!1),this.parseError.set(null),this.editable()&&(this.typedText.set(this.formatValue(t)),yC(t)&&(this.typedStart.set(this.formatEndpoint(t.start)),this.typedEnd.set(this.formatEndpoint(t.end)))),this.maybeImmediateCommit(t)}onPeriodPresetSelect(t){let e=this.safeResolvePreset(t);e&&(this.draftValue.set(e),this.editable()&&this.typedText.set(this.formatValue(e)),this.onCalendarValueChange(e))}onTypedInput(t){let e=t.target;this.textEdited.set(!0),this.typedText.set(e.value),this.parseError.set(null)}onTypedBlur(){this.commitTypedValue(),this.markAsTouched()}onTypedKeydown(t){t.key===`Enter`?(t.preventDefault(),this.commitTypedValue()):t.key===`ArrowDown`&&!this.isOpen()&&(t.preventDefault(),this.open())}onRangeStartInput(t){let e=t.target;this.textEdited.set(!0),this.typedStart.set(e.value),this.parseError.set(null)}onRangeEndInput(t){let e=t.target;this.textEdited.set(!0),this.typedEnd.set(e.value),this.parseError.set(null)}onRangeStartBlur(){this.commitRangeEndpoint(`start`),this.markAsTouched()}onRangeEndBlur(){this.commitRangeEndpoint(`end`),this.markAsTouched()}onRangeKeydown(t){t.key===`Enter`?(t.preventDefault(),this.commitRangeEndpoint(`start`),this.commitRangeEndpoint(`end`)):t.key===`ArrowDown`&&!this.isOpen()&&(t.preventDefault(),this.open())}formatChipLabel(t){return this.formatEndpoint(t)}onSelectionRejected(t){this.parseError.set(t)}onVisibleRange(t){this.visibleRangeChange.emit(t)}onAvailabilityRequest(t){this.lastRequest=t,t.source===`retry`?this.retry.emit(t):this.request.emit(t),this.runResolver(t)}todayIso(){let t=new Intl.DateTimeFormat(`en-CA`,{timeZone:this.settings().timeZone,year:`numeric`,month:`2-digit`,day:`2-digit`}).formatToParts(this.clock.now()),e=n=>t.find(o=>o.type===n)?.value??``;return`${e(`year`)}-${e(`month`)}-${e(`day`)}`}defaultPlaceholder(){return this.parseFormats()[0]??this.patternForMode(this.modeInfo().period)}formatValue(t){if(!t)return``;if(typeof t==`string`)return this.formatEndpoint(t);if(Array.isArray(t)){if(!t.length)return``;let e=this.formatEndpoint(t[0]),n=t.length-1;return n>0?`${e} +${n} ${this.resolvedMoreDatesLabel()}`:e}if(xC(t)){let e=this.formatEndpoint(t.start),n=this.formatEndpoint(t.end);return t.start===t.end?e:`${e} ${this.settings().rangeSeparator} ${n}`}if(yC(t)){let e=t.start?this.formatEndpoint(t.start):``,n=t.end?this.formatEndpoint(t.end):``;return e&&n?`${e} ${this.settings().rangeSeparator} ${n}`:e||n}return``}formatEndpoint(t){if(!t)return``;let e=this.modeInfo(),n=this.patternForMode(e.period);if(e.period===`week`){let o=sX(this.mode(),t,this.settings().weekStartsOn);return o?.start&&o.end?`${XK(o.start,`dd MMM`,this.formatContext())} ${this.settings().rangeSeparator} ${XK(o.end,`dd MMM yyyy`,this.formatContext())}`:XK(t,n,this.formatContext())}return XK(t,n,this.formatContext())}patternForMode(t){return t===`month`?this.settings().monthFormat:t===`quarter`?this.settings().quarterFormat:t===`year`?this.settings().yearFormat:this.settings().dateFormat}rangeOf(t){return sX(this.mode(),t,this.settings().weekStartsOn)}rangeStart(t){return this.rangeOf(t)?.start??null}rangeEnd(t){return this.rangeOf(t)?.end??null}isDraftComplete(t){return t?typeof t==`string`||Array.isArray(t)?!0:xC(t)||yC(t)?!!t.start&&!!t.end:!1:!1}maybeImmediateCommit(t){this.isDraftComplete(t)&&this.commitDraft(t)&&this.mode()!==`multiple`&&this.closeOnSelect()&&this.scheduleClose()}scheduleClose(){this.clearScheduledClose(),this.closeTimer=setTimeout(()=>{this.closeTimer=void 0,this.close()},120)}clearScheduledClose(){this.closeTimer!==void 0&&(clearTimeout(this.closeTimer),this.closeTimer=void 0)}commitDraft(t){if(this.effectiveDisabled()||this.isReadonly())return!1;let e=this.validateDraft(t);if(!e.valid)return this.parseError.set(e.message),this.parseFailed.emit(this.dateValidationMessage(e.message)),!1;let n=e.value??t;return this.parseError.set(null),this.textEdited.set(!1),this.draftValue.set(n),this.editable()&&(this.typedText.set(this.formatValue(n)),this.typedStart.set(this.formatEndpoint(this.rangeStart(n))),this.typedEnd.set(this.formatEndpoint(this.rangeEnd(n)))),JSON.stringify(n)!==JSON.stringify(this.internalValue())&&(this.updateValue(n),this.valueCommit.emit(n)),!0}validateDraft(t){if(t===null||Array.isArray(t)&&t.length===0)return{valid:!0,message:``};if(!this.isDraftComplete(t))return{valid:!1,message:`incomplete`};let e=typeof t==`string`&&this.modeInfo().period===`week`?Jo(t,`week`,this.settings().weekStartsOn):null,n=e?CN(e.start,e.end):typeof t==`string`?[t]:Array.isArray(t)?t:[],o=this.selectionLimit();for(let a of n){if(!Te(a))return{valid:!1,message:`parse`};let r=dg(a,this.restrictionConfig());if(r.disabled)return{valid:!1,message:r.reason??`endpoint`}}if(Array.isArray(t)&&o!==null&&t.length>o)return{valid:!1,message:`limit`};if(yC(t)&&t.start&&t.end){if(t.start>t.end)return{valid:!1,message:`order`};let a=this.modeInfo().period===`week`?Jo(t.end,`week`,this.settings().weekStartsOn).end:t.end,r$6=iJ(t.start,a,this.restrictionConfig(),{crossingPolicy:this.crossingPolicy(),minLength:this.minRangeLength(),maxLength:this.maxRangeLength(),allowSameDay:this.allowSameDay()});if(!r$6.valid){let u=dg(t.start,this.restrictionConfig()).reason??dg(a,this.restrictionConfig()).reason;return{valid:!1,message:r$6.reason===`endpoint`?u??`endpoint`:r$6.reason??`endpoint`}}return this.modeInfo().period===`week`&&r$6.range.end!==a?{valid:!1,message:`crossing`}:{valid:!0,message:``,value:xC(t)?t:s(r({},t),{start:r$6.range.start,end:r$6.range.end})}}return{valid:!0,message:``}}dateValidationMessage(t){let e=this.invalidSelectionLabel();if(e!==void 0)return LQ(e,this.i18n);let n=this.draftValue(),o=yC(n)?n.start:null,a={format:this.defaultPlaceholder(),min:this.min(),max:this.max(),start:o,minFormatted:this.formatEndpoint(this.min()??null),maxFormatted:this.formatEndpoint(this.max()??null),startFormatted:this.formatEndpoint(o),minLength:this.minRangeLength(),maxLength:this.maxRangeLength(),limit:this.selectionLimit()};return Kt({kind:Ur[t]??`dateDisabled`,context:a},this.errorMessages(),r(r({},$r),this.formSettingsService.settings().errorMessages),this.i18n)}defaultPresets(){let t=this.modeInfo(),e=t.period;return t.isRange?rJ():[-1,0,1].map(n=>({id:`relative-${n}`,label:e?`${n<0?`Previous`:n>0?`Next`:`This`} ${e}`:n<0?`Yesterday`:n>0?`Tomorrow`:`Today`,resolve:o=>e===`year`?o.calendar.addYears(o.today,n,o.locale):e===`month`||e===`quarter`?o.calendar.addMonths(o.today,n*(e===`quarter`?3:1),o.locale):ue(o.today,n*(e===`week`?7:1))}))}normalizePresetValue(t){if(!t)return null;let e=this.modeInfo(),n=nX(this.mode(),t),o=n.start,a=n.end??o;if(!o||!a)return null;if(e.selection===`multiple`)return Array.isArray(t)?t:CN(o,a);let r=u=>e.period?Jo(u,e.period,this.settings().weekStartsOn).start:u;return e.isRange?iX(this.mode(),r(o),r(a),this.settings().weekStartsOn):r(a)}safeResolvePreset(t){try{return this.normalizePresetValue(t.resolve(this.presetContext()))}catch{return null}}commitTypedValue(){if(!this.editable()||!this.textEdited()||this.effectiveDisabled()||this.isReadonly())return;let t=this.typedText().trim();if(!t){this.commitDraft(null);return}let e=this.parseTypedText(t);if(!e){this.parseError.set(`parse`),this.parseFailed.emit(t);return}this.draftValue.set(e),this.commitDraft(e)}commitRangeEndpoint(t){if(!this.textEdited()||!this.editable()||this.effectiveDisabled()||this.isReadonly())return;let e=this.typedStart().trim(),n=this.typedEnd().trim();if(!e&&!n){this.commitDraft(null);return}let o=e?this.parseSingleDate(e):null,a=n?this.parseSingleDate(n):null;if(e&&!o||n&&!a){this.parseError.set(`parse`),this.parseFailed.emit(t===`start`?e:n);return}let r=this.modeInfo().period,u=r&&o&&a?{start:o,end:a,kind:r}:{start:o,end:a};this.draftValue.set(u),o&&a&&this.commitDraft(u)?(this.typedStart.set(this.formatEndpoint(this.rangeStart(this.draftValue()))),this.typedEnd.set(this.formatEndpoint(this.rangeEnd(this.draftValue())))):(!o||!a)&&this.parseError.set(`incomplete`)}parseTypedText(t){let e=this.mode(),n=this.settings().rangeSeparator,o=this.modeInfo();if(o.selection===`range`){let a=t.split(n).map(m=>m.trim());if(a.length<2)return null;let r=this.parseSingleDate(a[0]),u=this.parseSingleDate(a[1]);return!r||!u?null:e===`range`?{start:r,end:u}:{start:r,end:u,kind:o.period??`month`}}if(e===`multiple`){let a=t.split(`,`).map(r=>this.parseSingleDate(r.trim()));return a.length&&a.every(r=>r!==null)?[...new Set(a)].sort():null}return this.parseSingleDate(t)}parseSingleDate(t){if(this.allowNaturalLanguage()){let o=SZ(t,{now:this.clock.now(),timeZone:this.settings().timeZone,locale:this.settings().locale,calendar:this.adapter(),weekStartsOn:this.settings().weekStartsOn});if(o.value)return this.modeInfo().period===`week`?Jo(o.value,`week`,this.settings().weekStartsOn).start:o.value}let e={locale:this.settings().locale,calendar:this.adapter()};if(this.modeInfo().period===`week`){let o=t.split(this.settings().rangeSeparator),a=o.length===2?QQ(o[1].trim(),`dd MMM yyyy`,e).value:null,r=a?Jo(a,`week`,this.settings().weekStartsOn).start:null;if(r&&this.formatEndpoint(r)===t.trim())return r}let n=this.parseFormats().length?this.parseFormats():this.modeInfo().period?[this.patternForMode(this.modeInfo().period),this.settings().dateFormat]:[this.settings().dateFormat,`yyyy-MM-dd`];for(let o of n){let a=QQ(t,o,e);if(a.value)return this.modeInfo().period===`week`?Jo(a.value,`week`,this.settings().weekStartsOn).start:a.value}return null}async runResolver(t){let e=this.resolver();if(!e||this.availability())return;let n=++this.resolverToken,o=`${t.calendar}|${t.locale}|${t.timeZone}`;o!==this.resolverContext&&this.availabilityState.set(void 0),this.resolverContext=o,this.availabilityState.set({dates:this.availabilityState()?.dates??[],loading:!0,revision:t.revision});try{let a=await e(t);if(n!==this.resolverToken)return;this.availabilityState.set({dates:Gr(this.availabilityState()?.dates,a?.dates??[],t),loading:!1,revision:t.revision,retryable:!0})}catch{if(n!==this.resolverToken)return;this.availabilityState.set({dates:this.availabilityState()?.dates??[],loading:!1,error:this.loadErrorMessage(),retryable:!0,revision:t.revision})}}static ɵfac=function(e){return new(e||i)};static ɵcmp=Fr$1({type:i,selectors:[[`bx-date-picker`]],viewQuery:function(e,n){e&1&&Yy(n.panelTemplate,Ou,5),e&2&&fb$1()},inputs:{mode:[1,`mode`],pickerIconTemplate:[1,`pickerIconTemplate`],pickerIcon:[1,`pickerIcon`],openPickerLabel:[1,`openPickerLabel`],startAt:[1,`startAt`],startView:[1,`startView`],parseFormats:[1,`parseFormats`],locale:[1,`locale`],calendarId:[1,`calendarId`],timeZone:[1,`timeZone`],weekStartsOn:[1,`weekStartsOn`],minimalDaysInFirstWeek:[1,`minimalDaysInFirstWeek`],dateFormat:[1,`dateFormat`],allowNaturalLanguage:[1,`allowNaturalLanguage`],editable:[1,`editable`],presentation:[1,`presentation`],weekdayNameFormat:[1,`weekdayNameFormat`],monthNameFormat:[1,`monthNameFormat`],months:[1,`months`],separateFields:[1,`separateFields`],commitPolicy:[1,`commitPolicy`],closeOnSelect:[1,`closeOnSelect`],clearable:[1,`clearable`],presets:[1,`presets`],presetsPlacement:[1,`presetsPlacement`],min:[1,`min`],max:[1,`max`],disabledDates:[1,`disabledDates`],disabledIntervals:[1,`disabledIntervals`],disabledWeekdays:[1,`disabledWeekdays`],dateFilter:[1,`dateFilter`],crossingPolicy:[1,`crossingPolicy`],minRangeLength:[1,`minRangeLength`],maxRangeLength:[1,`maxRangeLength`],allowSameDay:[1,`allowSameDay`],selectionLimit:[1,`selectionLimit`],availability:[1,`availability`],resolver:[1,`resolver`],loadingLabel:[1,`loadingLabel`],retryLabel:[1,`retryLabel`],loadErrorMessage:[1,`loadErrorMessage`],invalidSelectionLabel:[1,`invalidSelectionLabel`],applyLabel:[1,`applyLabel`],cancelLabel:[1,`cancelLabel`],clearLabel:[1,`clearLabel`],todayLabel:[1,`todayLabel`],presetsLabel:[1,`presetsLabel`],showToday:[1,`showToday`],showTodayButton:[1,`showTodayButton`],startLabel:[1,`startLabel`],endLabel:[1,`endLabel`],moreDatesLabel:[1,`moreDatesLabel`],selectedDatesLabel:[1,`selectedDatesLabel`],clearTooltip:[1,`clearTooltip`],visibleTagCount:[1,`visibleTagCount`],tagConfig:[1,`tagConfig`],overflowTagConfig:[1,`overflowTagConfig`],dayTemplate:[1,`dayTemplate`]},outputs:{viewChange:`viewChange`,monthSelected:`monthSelected`,yearSelected:`yearSelected`,valueCommit:`valueCommit`,draftChange:`draftChange`,openChange:`openChange`,visibleRangeChange:`visibleRangeChange`,request:`request`,retry:`retry`,parseFailed:`parseFailed`},features:[yt],ngContentSelectors:Du,decls:14,vars:21,consts:[[`retryAction`,``],[`panelTemplate`,``],[`trigger`,``],[3,`control`,`inline`,`tooltip`,`showLoadingIndicator`,`hint`,`hintEnd`,`error`,`subscriptSizing`,`forId`],[1,`bx-date-field`,3,`focusin`,`focusout`],[`role`,`group`,1,`bx-date-range-fields`],[`bxSurface`,``,1,`bx-date-trigger`,`is-editable`,`is-range`,3,`has-label`,`is-open`,`is-floating`,`is-invalid`,`is-outline`,`is-readonly`,`is-disabled`,`is-keyboard-focused`],[`bxSurface`,``,1,`bx-date-trigger`,`is-editable`,3,`has-label`,`is-open`,`is-floating`,`is-invalid`,`is-outline`,`is-readonly`,`is-disabled`,`is-keyboard-focused`],[`type`,`button`,`bxSurface`,``,1,`bx-date-trigger`,3,`has-label`,`is-open`,`is-floating`,`is-invalid`,`is-outline`,`is-readonly`,`is-disabled`,`is-keyboard-focused`,`id`,`disabled`],[`bx-button`,``,`type`,`button`,`variant`,`text`,1,`bx-date-clear`,3,`surfaceEffects`,`disabled`,`bxTooltip`],[3,`dismiss`,`panelId`,`panelWidth`,`open`,`presentation`,`origin`,`content`,`ariaLabel`,`panelClass`],[`bxSurface`,``,1,`bx-date-trigger`,`is-range-endpoint`,`has-label`,3,`is-open`,`is-floating`,`is-invalid`,`is-outline`,`is-readonly`,`is-disabled`,`is-keyboard-focused`],[`bxSurface`,``,1,`bx-date-trigger`,`is-range-endpoint`,`has-label`],[1,`bx-floating-label`],[`aria-hidden`,`true`,1,`bx-field-required`],[`role`,`combobox`,`aria-autocomplete`,`none`,`aria-haspopup`,`dialog`,`type`,`text`,`autocomplete`,`off`,1,`bx-date-input`,3,`id`,`value`,`disabled`,`readOnly`],[`type`,`button`,`aria-haspopup`,`dialog`,1,`bx-date-endpoint-value`,`bx-date-value`,3,`id`,`disabled`],[`type`,`button`,1,`bx-date-trigger-icon-button`,3,`click`,`disabled`],[`size`,`16`,3,`name`,`contentTemplate`,`decorative`],[`role`,`combobox`,`aria-autocomplete`,`none`,`aria-haspopup`,`dialog`,`type`,`text`,`autocomplete`,`off`,1,`bx-date-input`,3,`input`,`blur`,`keydown`,`keydown.escape`,`id`,`value`,`disabled`,`readOnly`],[`type`,`button`,`aria-haspopup`,`dialog`,1,`bx-date-endpoint-value`,`bx-date-value`,3,`click`,`keydown.escape`,`id`,`disabled`],[`bxSurface`,``,1,`bx-date-trigger`,`is-editable`,`is-range`],[`role`,`combobox`,`aria-autocomplete`,`none`,`type`,`text`,`autocomplete`,`off`,1,`bx-date-input`,3,`input`,`blur`,`keydown`,`keydown.escape`,`value`,`id`,`disabled`,`readOnly`],[`aria-hidden`,`true`,1,`bx-date-range-separator`],[`role`,`combobox`,`aria-autocomplete`,`none`,`type`,`text`,`autocomplete`,`off`,1,`bx-date-input`,3,`input`,`blur`,`keydown`,`keydown.escape`,`value`,`disabled`,`readOnly`],[`aria-hidden`,`true`,3,`value`],[3,`size`,`decorative`],[`bxSurface`,``,1,`bx-date-trigger`,`is-editable`],[`role`,`combobox`,`aria-autocomplete`,`none`,`type`,`text`,`autocomplete`,`off`,1,`bx-date-input`,3,`input`,`blur`,`keydown`,`keydown.escape`,`id`,`value`,`disabled`,`readOnly`],[`type`,`button`,`bxSurface`,``,1,`bx-date-trigger`,3,`click`,`keydown.arrowdown`,`keydown.escape`,`blur`,`id`,`disabled`],[1,`bx-date-value`],[1,`bx-selected-tags`],[`bxTruncate`,``,3,`bxTooltip`],[`aria-hidden`,`true`,1,`bx-date-trigger-icon`,3,`value`],[3,`text`,`config`,`focusable`,`tooltipOnTruncate`],[1,`bx-overflow-tag`,3,`text`,`config`,`tooltip`,`focusable`,`tooltipOnTruncate`],[`bx-button`,``,`type`,`button`,`variant`,`text`,1,`bx-date-clear`,3,`click`,`surfaceEffects`,`disabled`,`bxTooltip`],[`name`,`x`,`size`,`16`,3,`decorative`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`accent`,3,`click`],[`name`,`rotate-cw`,`size`,`16`,3,`decorative`],[`bxSurface`,``,`data-bx-surface`,`glass`,1,`bx-date-panel-content`,3,`bxSurfaceInteractive`],[1,`bx-date-panel-body`],[1,`bx-date-presets`],[1,`bx-date-calendar-column`],[3,`visibleRangeChange`,`viewChange`,`monthSelected`,`yearSelected`,`rangeStart`,`valueChange`,`selectionRejected`,`requestAvailability`,`retryAvailability`,`startView`,`mode`,`value`,`viewDate`,`months`,`retryTemplate`,`weekdayNameFormat`,`monthNameFormat`,`locale`,`calendarId`,`timeZone`,`weekStartsOn`,`minimalDaysInFirstWeek`,`min`,`max`,`disabledDates`,`disabledIntervals`,`disabledWeekdays`,`dateFilter`,`crossingPolicy`,`minRangeLength`,`maxRangeLength`,`allowSameDay`,`selectionLimit`,`readOnly`,`availability`,`dayTemplate`,`showToday`,`showTodayButton`,`todayLabel`,`loadingLabel`,`retryLabel`],[3,`presetSelect`,`presets`,`context`,`activeValue`,`horizontal`,`ariaLabel`]],template:function(e,n){if(e&1&&(ld$1(Iu),bo$1(0,`bx-form-field`,3)(1,`div`,4),br$1(`focusin`,function(){return n.onFieldFocus()})(`focusout`,function(a){return n.onFieldBlur(a)}),od$1(2,zu,3,2,`div`,5)(3,$u,9,48,`div`,6)(4,Yu,6,34,`div`,7)(5,sp,8,33,`button`,8),od$1(6,lp,2,5,`button`,9),Go(),bo$1(7,`bx-picker-surface`,10),br$1(`dismiss`,function(){return n.cancel()}),Go(),rd$1(8,dp,3,2,`ng-template`,null,0,RA)(10,pp,6,37,`ng-template`,null,1,RA),dd$1(12,0,ku),dd$1(13,1,Eu),Go()),e&2){let o=FT(11);xo$1(`control`,n.fieldControl)(`inline`,!0)(`tooltip`,n.tooltip())(`showLoadingIndicator`,!1)(`hint`,n.hint())(`hintEnd`,n.hintEnd())(`error`,n.parseError()?n.resolvedInvalidLabel():n.error())(`subscriptSizing`,n.resolvedSubscriptSizing())(`forId`,n.controlId()),Xl$1(),tr$1(`has-clear`,n.showClear()),Xl$1(),nd$1(n.rangeFieldLayout()===`separate`?2:n.editable()&&n.isRangeMode()&&!n.modeInfo().isPeriod?3:n.editable()&&!n.isRangeMode()&&n.mode()!==`multiple`?4:5),Xl$1(4),nd$1(n.showClear()?6:-1),Xl$1(),xo$1(`panelId`,n.controlId()+`-panel`)(`panelWidth`,n.panelWidth())(`open`,n.isOpen())(`presentation`,n.surfacePresentation())(`origin`,n.panelOrigin())(`content`,o)(`ariaLabel`,n.resolvedLabel()||n.resolvedDatePlaceholder())(`panelClass`,n.panelClass())}},dependencies:[Wu$1,GC,_e,bl$1,yi,ce,ZC,Et,on,js$1,Pt,ct],styles:[`
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
}`]})};var Zr=(i,t)=>t.value+`-`+i;function hp(i,t){if(i&1){let e=pb$1();bo$1(0,`button`,11),br$1(`mousedown`,function(o){return o.preventDefault()})(`click`,function(o){let a=al$1(e).$index,r=Wo();return cl$1(r.onOptionClick(a,o))}),lA(1),Go()}if(i&2){let e=t.$implicit,n=t.$index,o=Wo();ka(`height`,o.itemHeight(),`px`),tr$1(`is-selected`,o.isSelectedAt(n))(`is-disabled`,e.disabled),xo$1(`id`,o.wheelId+`-`+n),vo$1(`aria-hidden`,o.loopOffset()>0&&(n<o.loopOffset()||n>=o.loopOffset()*2)?!0:null)(`aria-selected`,o.isSelectedAt(n))(`aria-disabled`,e.disabled),Xl$1(),mb$1(` `,e.label,` `)}}function fp(i,t){if(i&1&&(bo$1(0,`span`,12),lA(1),Go()),i&2){let e=t.$implicit,n=t.$index,o=Wo();ka(`height`,o.itemHeight(),`px`),tr$1(`is-selected`,o.isSelectedAt(n))(`is-disabled`,e.disabled),Xl$1(),ik(e.label)}}var Si=class i{i18n=b(VQ,{optional:!0});bxA11yService=b(Br$1);destroyRef=b(ge);position=$(0);dragging=$(!1);wheelId=`bx-time-wheel-${qK()}`;resolvedLabel=G(()=>LQ(this.label(),this.i18n));logicalIndex=G(()=>{let t=this.options().findIndex(e=>e.value===this.value());return t<0?0:t});displayOptions=G(()=>{let t=this.options();return!this.loop()||t.length<2?t:[...t,...t,...t]});loopOffset=G(()=>this.loop()&&this.options().length>1?this.options().length:0);centerOffset=G(()=>(this.visibleItems()-1)/2*this.itemHeight());viewportHeight=G(()=>this.visibleItems()*this.itemHeight());trackTransform=G(()=>`translateY(${this.centerOffset()-this.position()*this.itemHeight()}px)`);lensTransform=G(()=>`translateY(${-this.position()*this.itemHeight()}px)`);options=ee.required();value=_z(null);label=ee(`Time`);type=ee(`minute`);loop=ee(!0,{transform:Ye$1});disabled=ee(!1,{transform:Ye$1});itemHeight=ee(40);visibleItems=ee(5);activated=Pk();cancelGesture;motion;wheelTimer;wheelVelocity;wheelOptions;wheelCoordinate=0;motionPosition=0;motionVelocity=0;committedIndex=null;initialized=!1;constructor(){We$1(()=>{let t=this.logicalIndex(),e=this.bxA11yService.isReducedMotion();if(!this.dragging()){if(this.committedIndex===t&&!e){this.committedIndex=null;return}this.animateTo(this.targetPhysicalIndex(t),!this.initialized),this.initialized=!0}}),this.destroyRef.onDestroy(()=>{this.cancelGesture?.(),clearTimeout(this.wheelTimer),this.motion?.destroy()})}step(t){if(this.disabled())return;this.cancelWheel();let e=this.options(),n=e.length;if(!n)return;let o=this.logicalIndex()+t,a=0;for(this.loop()?o=(o%n+n)%n:o=Math.max(0,Math.min(n-1,o));e[o]?.disabled&&a<n;)o=this.loop()?((o+Math.sign(t||1))%n+n)%n:Math.max(0,Math.min(n-1,o+Math.sign(t||1))),a+=1;this.commitIndex(o)}onOptionClick(t,e){this.disabled()||e.detail>0||this.commitIndex(this.wrapIndex(t))}isSelectedAt(t){return this.wrapIndex(t)===this.logicalIndex()}onKeydown(t){if(t.key===`Escape`&&(this.cancelGesture||this.wheelTimer)){t.preventDefault(),t.stopPropagation(),this.cancelGesture?.(),this.cancelWheel();return}if(this.disabled())return;let e=Math.max(1,Math.round(this.visibleItems()/2));if(t.key===`ArrowUp`)this.step(-1);else if(t.key===`ArrowDown`)this.step(1);else if(t.key===`PageUp`)this.step(-e);else if(t.key===`PageDown`)this.step(e);else if(t.key===`Home`)this.commitIndex(0);else if(t.key===`End`)this.commitIndex(this.options().length-1);else if(t.key===`Enter`||t.key===` `)this.activated.emit(this.value()??``);else return;t.preventDefault()}onWheel(t){if(this.disabled()||!this.options().length||t.ctrlKey||Math.abs(t.deltaX)>Math.abs(t.deltaY))return;t.preventDefault(),t.stopPropagation(),this.wheelTimer||(this.cancelGesture?.(),this.motion?.destroy(),this.motion=void 0,this.wheelOptions=this.options(),this.wheelCoordinate=0,this.wheelVelocity=new Ah(0,t.timeStamp),this.dragging.set(!0));let e=t.deltaY*(t.deltaMode===1?this.itemHeight():t.deltaMode===2?this.viewportHeight():1);this.wheelCoordinate+=e,this.wheelVelocity?.update(this.wheelCoordinate,t.timeStamp),this.position.set(this.constrainPosition(this.position()+e/this.itemHeight())),clearTimeout(this.wheelTimer),this.wheelTimer=setTimeout(()=>{let n=(this.wheelVelocity?.velocity(performance.now())??0)/this.itemHeight(),o=this.disabled()||this.options()!==this.wheelOptions;if(this.wheelTimer=void 0,this.wheelVelocity=void 0,this.wheelOptions=void 0,this.dragging.set(!1),o){this.animateTo(this.targetPhysicalIndex(this.logicalIndex()),!1);return}this.settlePosition(this.position(),n)},80)}onPointerDown(t){if(!t.isPrimary||t.button!==0||this.disabled()||!this.options().length)return;let e=t.currentTarget;if(!(e instanceof HTMLElement))return;this.cancelGesture?.(),this.cancelWheel();let n=this.options(),o=t.clientY,a=this.position(),r=new Ah(t.clientY,t.timeStamp),u=t.pointerId,m=!1;this.motion?.destroy(),this.motion=void 0,this.dragging.set(!0),e.setPointerCapture(u);let x=V=>{if(V.pointerId!==u)return;r.update(V.clientY,V.timeStamp),Math.abs(V.clientY-o)>4&&(m=!0),V.preventDefault();let Q=a+(o-V.clientY)/this.itemHeight(),J=this.constrainPosition(Q);this.loop()&&(a+=J-Q),this.position.set(J)},P=()=>{u=-1,e.removeEventListener(`pointermove`,x),e.removeEventListener(`pointerup`,D),e.removeEventListener(`pointercancel`,L),e.removeEventListener(`lostpointercapture`,L),this.cancelGesture=void 0,this.dragging.set(!1),e.hasPointerCapture(t.pointerId)&&e.releasePointerCapture(t.pointerId)},D=V=>{if(V.pointerId!==u)return;if(this.disabled()||this.options()!==n){L();return}let Q=-r.velocity(V.timeStamp)/this.itemHeight(),J=this.position(),O=e.getBoundingClientRect(),Z=J+(V.clientY-(O.top+O.height/2))/this.itemHeight();if(P(),!m&&this.options()[this.wrapIndex(Z)]?.disabled){this.animateTo(this.targetPhysicalIndex(this.logicalIndex()),!1);return}this.settlePosition(m?J:Z,m?Q:0)},L=()=>{P(),this.animateTo(this.targetPhysicalIndex(this.logicalIndex()),!1)};this.cancelGesture=L,e.addEventListener(`pointermove`,x,{passive:!1}),e.addEventListener(`pointerup`,D),e.addEventListener(`pointercancel`,L),e.addEventListener(`lostpointercapture`,L)}commitIndex(t,e,n){let o=this.options()[t];!o||o.disabled||(this.committedIndex=t,this.animateTo(n??this.targetPhysicalIndex(t),!1,e),this.value.set(o.value),this.activated.emit(o.value))}animateTo(t,e,n){if(e||this.bxA11yService.isReducedMotion()){this.motion?.destroy(),this.motion=void 0,this.position.set(this.recenterValue(t));return}this.motion||(this.motion=Zn$1([this.position()],([o],[a])=>{this.motionPosition=o,this.motionVelocity=a,this.position.set(this.recenterValue(o))},vr$1.soft),this.motion.track([this.position()],[n??0])),n!==void 0&&this.motion.track([this.position()],[n]),this.motion.retarget([t],!1)}targetPhysicalIndex(t){if(!this.loop())return t;let e=this.options().length,n=this.loopOffset(),o=this.recenterValue(this.position());(this.motionPosition!==o||o!==this.position())&&(this.motion?.track([o],[this.motionVelocity]),this.position.set(o));let a=n+t,r=a;for(let u of[a-e,a+e])Math.abs(o-u)<Math.abs(o-r)&&(r=u);return r}recenterValue(t){let e=this.options().length;if(!this.loop()||e<2)return t;let n=this.loopOffset();return t>=n+e||t<n?n+((t-n)%e+e)%e:t}nearestEnabledPosition(t,e){let n=this.options().length,o=Math.round(t);for(let a=0;a<n;a++){let r=a===0?[o]:[o+a*(e||1),o-a*(e||1)];for(let u of r){let m=this.wrapIndex(u);if(!this.options()[m]?.disabled)return this.loop()?u:m}}return null}wrapIndex(t){let e=this.options().length;if(!e)return 0;let n=this.loopOffset();return this.loop()?((Math.round(t)-n)%e+e)%e:Math.max(0,Math.min(e-1,Math.round(t)-n))}constrainPosition(t){if(this.loop())return this.recenterValue(t);let e=Math.max(0,this.options().length-1),n=t<0?0:e;if(t>=0&&t<=e)return t;let o=t-n;return n+o/(1+Math.abs(o))*.75}settlePosition(t,e){let n=Math.min(12,Math.max(0,this.options().length-1)),o=t+Math.max(-n,Math.min(n,e*.24)),a=this.nearestEnabledPosition(o,Math.sign(e));a!==null?this.commitIndex(this.wrapIndex(a),e,a):this.animateTo(this.targetPhysicalIndex(this.logicalIndex()),!1)}cancelWheel(){this.wheelTimer&&(clearTimeout(this.wheelTimer),this.wheelTimer=void 0,this.wheelVelocity=void 0,this.wheelOptions=void 0,this.dragging.set(!1),this.animateTo(this.targetPhysicalIndex(this.logicalIndex()),!1))}static ɵfac=function(e){return new(e||i)};static ɵcmp=Fr$1({type:i,selectors:[[`bx-time-wheel`]],inputs:{options:[1,`options`],value:[1,`value`],label:[1,`label`],type:[1,`type`],loop:[1,`loop`],disabled:[1,`disabled`],itemHeight:[1,`itemHeight`],visibleItems:[1,`visibleItems`]},outputs:{value:`valueChange`,activated:`activated`},decls:13,vars:23,consts:[[`viewport`,``],[1,`bx-wheel`],[`role`,`listbox`,`tabindex`,`0`,1,`bx-wheel-viewport`,3,`keydown`,`wheel`,`pointerdown`],[1,`bx-wheel-base`],[1,`bx-wheel-track`],[`type`,`button`,`role`,`option`,`tabindex`,`-1`,1,`bx-wheel-option`,3,`id`,`is-selected`,`is-disabled`,`height`],[`aria-hidden`,`true`,`inert`,``,1,`bx-wheel-magnifier`],[1,`bx-wheel-lens-content`],[1,`bx-wheel-lens-track`],[1,`bx-wheel-lens-option`,3,`is-selected`,`is-disabled`,`height`],[`bxSurface`,``,`data-bx-surface`,`glass`,`bxSurfaceGlassiness`,`auto`,`bxSurfaceQuality`,`auto`,`bxSurfaceLocalRefraction`,``,`aria-hidden`,`true`,1,`bx-wheel-band`,3,`bxSurfaceInteractive`,`bxSurfaceEmission`],[`type`,`button`,`role`,`option`,`tabindex`,`-1`,1,`bx-wheel-option`,3,`mousedown`,`click`,`id`],[1,`bx-wheel-lens-option`]],template:function(e,n){e&1&&(bo$1(0,`div`,1)(1,`div`,2,0),br$1(`keydown`,function(a){return n.onKeydown(a)})(`wheel`,function(a){return n.onWheel(a)})(`pointerdown`,function(a){return n.onPointerDown(a)}),bo$1(3,`div`,3)(4,`div`,4),ab$1(5,hp,2,11,`button`,5,Zr),Go()(),bo$1(7,`div`,6)(8,`div`,7)(9,`div`,8),ab$1(10,fp,2,7,`span`,9,Zr),Go()()(),sd$1(12,`div`,10),Go()()),e&2&&(ka(`--%NS%bx-wheel-item-height`,n.itemHeight(),`px`)(`--%NS%bx-wheel-center-offset`,n.centerOffset(),`px`),tr$1(`is-dragging`,n.dragging())(`is-disabled`,n.disabled()),Xl$1(),ka(`height`,n.viewportHeight(),`px`),vo$1(`aria-label`,n.resolvedLabel())(`aria-activedescendant`,n.options().length?n.wheelId+`-`+(n.loopOffset()+n.logicalIndex()):null)(`aria-disabled`,n.disabled()),Xl$1(3),ka(`transform`,n.trackTransform()),Xl$1(),cb$1(n.displayOptions()),Xl$1(2),ka(`height`,n.itemHeight(),`px`),Xl$1(2),ka(`transform`,n.lensTransform()),Xl$1(),cb$1(n.displayOptions()),Xl$1(2),ka(`height`,n.itemHeight(),`px`),xo$1(`bxSurfaceInteractive`,!1)(`bxSurfaceEmission`,!1))},dependencies:[GC],styles:[`
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
}`]})};var Xr={timeFormat:({params:i})=>`Enter a time in the ${i.format} format.`,timeRange:({params:i})=>i.hourCycle===12?`Use an hour from 1 to 12 with AM or PM, and minutes and seconds from 00 to 59.`:`Use an hour from 00 to 23, and minutes and seconds from 00 to 59.`,timeMin:({params:i})=>`The time cannot be before ${i.minFormatted}.`,timeMax:({params:i})=>`The time cannot be after ${i.maxFormatted}.`,timeDisabled:`This time is unavailable. Choose another time.`,timeAvailability:`This time has not been confirmed as available. Retry loading the available times.`,timeLoading:`Wait for the available times to finish loading.`,timeStep:({params:i})=>`Use increments of ${i.minuteStep} minutes, ${i.secondStep} seconds and ${i.millisecondStep} milliseconds.`};function _n(i){return String(i).padStart(2,`0`)}function Yr(i){let t=i<0?`-`:`+`,e=Math.abs(i);return`GMT${t}${_n(Math.floor(e/60))}:${_n(e%60)}`}function Qr(i,t){let e=Math.max(1,t)*60;if(i===void 0)return e;if(typeof i==`number`)return Number.isFinite(i)&&i>0?i*60:e;let n=/^\s*(\d+(?:\.\d+)?)\s*(h|hours?|m|mins?|minutes?|s|seconds?)?\s*$/i.exec(i);if(!n||Number(n[1])<=0)return e;let o=n[2]?.toLowerCase()??`m`,a=o.startsWith(`h`)?3600:o.startsWith(`s`)?1:60;return Number(n[1])*a}var vp=[`listViewport`];var xp=[`collection`];var yp=[`panelTemplate`];var Sp=[[[`bx-error`]],[[`bx-hint`]]];var _p=[`bx-error`,`bx-hint`];var Cp=[`ngProjectAs`,`bx-error`,5,[`bx-error`]];var Mp=[`ngProjectAs`,`bx-hint`,5,[`bx-hint`]];function wp(i,t){i&1&&(bo$1(0,`span`,12),lA(1,`*`),Go())}function Np(i,t){if(i&1&&(bo$1(0,`label`,6),lA(1),od$1(2,wp,2,0,`span`,12),Go()),i&2){let e=Wo();vo$1(`for`,e.controlId()),Xl$1(),mb$1(``,e.resolvedLabel(),` `),Xl$1(),nd$1(e.effectiveRequired()&&!e.resolvedHideRequiredMarker()?2:-1)}}function Tp(i,t){i&1&&sd$1(0,`bx-loading-spinner`,13),i&2&&xo$1(`size`,16)(`decorative`,!0)}function Pp(i,t){if(i&1&&sd$1(0,`bx-icon`,14),i&2){let e=Wo(2);xo$1(`name`,e.pickerIcon())(`contentTemplate`,e.pickerIconTemplate())(`decorative`,!0)}}function Op(i,t){if(i&1&&od$1(0,Tp,1,2,`bx-loading-spinner`,13)(1,Pp,1,3,`bx-icon`,14),i&2){let e=t.$implicit;nd$1(e?0:1)}}function Ip(i,t){if(i&1){let e=pb$1();bo$1(0,`button`,15),br$1(`click`,function(){al$1(e);let o=Wo();return cl$1(o.clear())}),sd$1(1,`bx-icon`,16),Go()}if(i&2){let e=Wo();xo$1(`surfaceEffects`,!1)(`disabled`,e.effectiveDisabled())(`bxTooltip`,e.resolvedClearTooltip()),vo$1(`aria-label`,e.resolvedClearLabel()),Xl$1(),xo$1(`decorative`,!0)}}function Dp(i,t){if(i&1){let e=pb$1();bo$1(0,`span`,27),lA(1,`:`),Go(),bo$1(2,`bx-time-wheel`,30),br$1(`valueChange`,function(o){al$1(e);let a=Wo(3);return cl$1(a.onWheelChange(`second`,o))}),Go()}if(i&2){let e=Wo(3);Xl$1(2),xo$1(`options`,e.wheelColumns().seconds)(`value`,e.wheelValue(`second`))(`label`,e.resolvedSecondLabel())(`loop`,e.loopColumns())}}function kp(i,t){if(i&1){let e=pb$1();bo$1(0,`span`,27),lA(1,`.`),Go(),bo$1(2,`bx-time-wheel`,31),br$1(`valueChange`,function(o){al$1(e);let a=Wo(3);return cl$1(a.onWheelChange(`millisecond`,o))}),Go()}if(i&2){let e=Wo(3);Xl$1(2),xo$1(`options`,e.wheelColumns().milliseconds)(`value`,e.wheelValue(`millisecond`))(`label`,e.resolvedMillisecondLabel())(`loop`,e.loopColumns())}}function Ep(i,t){if(i&1){let e=pb$1();bo$1(0,`bx-time-wheel`,32),br$1(`valueChange`,function(o){al$1(e);let a=Wo(3);return cl$1(a.onWheelChange(`period`,o))}),Go()}if(i&2){let e=Wo(3);xo$1(`options`,e.wheelColumns().periods)(`value`,e.wheelValue(`period`))(`label`,e.resolvedPeriodLabel())(`loop`,!1)}}function Rp(i,t){if(i&1){let e=pb$1();bo$1(0,`div`,21)(1,`bx-time-wheel`,26),br$1(`valueChange`,function(o){al$1(e);let a=Wo(2);return cl$1(a.onWheelChange(`hour`,o))}),Go(),bo$1(2,`span`,27),lA(3,`:`),Go(),bo$1(4,`bx-time-wheel`,28),br$1(`valueChange`,function(o){al$1(e);let a=Wo(2);return cl$1(a.onWheelChange(`minute`,o))}),Go(),od$1(5,Dp,3,4),od$1(6,kp,3,4),od$1(7,Ep,1,4,`bx-time-wheel`,29),Go()}if(i&2){let e=Wo(2);Xl$1(),xo$1(`options`,e.wheelColumns().hours)(`value`,e.wheelValue(`hour`))(`label`,e.resolvedHourLabel())(`loop`,e.loopColumns()),Xl$1(3),xo$1(`options`,e.wheelColumns().minutes)(`value`,e.wheelValue(`minute`))(`label`,e.resolvedMinuteLabel())(`loop`,e.loopColumns()),Xl$1(),nd$1(e.showSeconds()?5:-1),Xl$1(),nd$1(e.showMilliseconds()?6:-1),Xl$1(),nd$1(e.showPeriod()?7:-1)}}function Lp(i,t){i&1&&sd$1(0,`bx-icon`,37),i&2&&xo$1(`decorative`,!0)}function Ap(i,t){if(i&1){let e=pb$1();bo$1(0,`button`,36),br$1(`click`,function(){let o=al$1(e).$implicit,a=Wo(3);return cl$1(a.onListSelect(o.value))}),bo$1(1,`span`),lA(2),Go(),od$1(3,Lp,1,1,`bx-icon`,37),Go()}if(i&2){let e=t.$implicit,n=t.index,o=t.count,a=Wo(3);tr$1(`is-selected`,a.internalValue()===e.value)(`is-active`,a.listFocusValue()===e.value),xo$1(`id`,a.controlId()+`-`+e.value)(`disabled`,e.disabled),vo$1(`aria-posinset`,n+1)(`aria-setsize`,o)(`aria-selected`,a.internalValue()===e.value)(`aria-disabled`,e.disabled)(`data-time-value`,e.value),Xl$1(2),ik(e.label),Xl$1(),nd$1(a.internalValue()===e.value?3:-1)}}function Fp(i,t){if(i&1){let e=pb$1();bo$1(0,`div`,33,1),br$1(`keydown`,function(o){al$1(e);let a=FT(3),r=Wo(2);return cl$1(r.onListKeydown(o,a))}),bo$1(2,`bx-virtual-collection`,34,2),rd$1(4,Ap,4,13,`ng-template`,35),Go()()}if(i&2){let e=FT(1),n=FT(3),o=Wo(2);vo$1(`aria-activedescendant`,o.listActiveId())(`aria-label`,o.resolvedLabel()||o.resolvedOpenPickerLabel()),Xl$1(2),xo$1(`items`,o.listOptions())(`trackBy`,o.listTrackBy)(`config`,o.listConfig)(`scrollContainer`,e),vo$1(`role`,`presentation`),Xl$1(2),xo$1(`bxVirtualItem`,n)}}function Vp(i,t){if(i&1&&sd$1(0,`bx-loading-indicator`,38),i&2){let e=Wo(3);xo$1(`size`,20)(`label`,e.resolvedLoadingLabel())}}function zp(i,t){if(i&1){let e=pb$1();bo$1(0,`button`,42),br$1(`click`,function(){al$1(e);let o=Wo(4);return cl$1(o.retrySlots())}),sd$1(1,`bx-icon`,43),lA(2),Go()}if(i&2){let e=Wo(4);Xl$1(),xo$1(`decorative`,!0),Xl$1(),mb$1(``,e.resolvedRetryLabel(),` `)}}function Bp(i,t){if(i&1&&(bo$1(0,`div`,40),lA(1),Go(),od$1(2,zp,3,2,`button`,41)),i&2){let e=Wo(3);Xl$1(),ik(e.availabilityError()),Xl$1(),nd$1(e.availabilityForPanel()?.retryable!==!1?2:-1)}}function Hp(i,t){if(i&1&&(bo$1(0,`span`,39),lA(1),Go()),i&2){let e=Wo(3);Xl$1(),ik(e.resolvedEmptyLabel())}}function Wp(i,t){if(i&1&&(bo$1(0,`div`,23),od$1(1,Vp,1,2,`bx-loading-indicator`,38)(2,Bp,3,2)(3,Hp,2,1,`span`,39),Go()),i&2){let e=Wo(2);Xl$1(),nd$1(e.availabilityLoading()?1:e.availabilityError()?2:3)}}function jp(i,t){if(i&1){let e=pb$1();bo$1(0,`div`,24)(1,`button`,44),br$1(`click`,function(){al$1(e);let o=Wo(2);return cl$1(o.selectNow())}),lA(2),Go()()}if(i&2){let e=Wo(2);Xl$1(),xo$1(`disabled`,!e.canSelectNow()),Xl$1(),ik(e.resolvedNowLabel())}}function qp(i,t){if(i&1){let e=pb$1();bo$1(0,`bx-select`,45),br$1(`valueChange`,function(o){al$1(e);let a=Wo(2);return cl$1(a.onTimeZoneSelect(o))}),Go()}if(i&2){let e=Wo(2);xo$1(`label`,e.resolvedTimeZoneLabel())(`options`,e.timeZoneOptions())(`value`,e.selectedTimeZone()??e.settings().timeZone)(`isSearchable`,!0)}}function $p(i,t){if(i&1&&(bo$1(0,`div`,17)(1,`div`,18)(2,`div`,19)(3,`div`,20),od$1(4,Rp,8,11,`div`,21)(5,Fp,5,8,`div`,22),Go(),od$1(6,Wp,4,1,`div`,23),Go(),od$1(7,jp,3,2,`div`,24),od$1(8,qp,1,4,`bx-select`,25),Go()()),i&2){let e=Wo();tr$1(`is-drawer`,e.isDrawer()),xo$1(`bxSurfaceInteractive`,!1),Xl$1(2),vo$1(`aria-busy`,e.availabilityLoading()),Xl$1(),vo$1(`inert`,e.panelFeedback()?``:null)(`aria-hidden`,e.panelFeedback()?!0:null),Xl$1(),nd$1(e.timePresentation()===`wheel`?4:5),Xl$1(2),nd$1(e.panelFeedback()?6:-1),Xl$1(),nd$1(e.resolvedNowLabel()?7:-1),Xl$1(),nd$1(e.showTimeZone()?8:-1)}}var Jr=class i extends we{injector=b(ie);bxA11yService=b(Br$1);ngZone=b(le);bxDateTimeConfigService=b(vC);clock=b(hC);i18n=b(VQ,{optional:!0});windowDimensionsService=b(Fd$1);originElement=$(null);availabilityState=$(void 0);selectedTimeZone=$(null);usesExternalAvailability=G(()=>this.availability()!==void 0);slotContext=G(()=>`${this.settings().locale}|${this.settings().timeZone}|${this.settings().precision}`);listViewport=Sz(`listViewport`);listCollection=Sz(`collection`);typedText=$(``);textEdited=$(!1);typedError=$(null);fieldFocused=$(!1);selectionEdited=$(!1);isOpen=$(!1);draftTime=$(`09:00`);listFocusValue=$(null);settings=G(()=>{let t=this.hourCycle();return this.bxDateTimeConfigService.resolve({locale:this.locale(),timeZone:this.selectedTimeZone()??this.timeZone()??void 0,hourCycle:t===`auto`?void 0:t,precision:this.precision(),minuteStep:this.minuteStep(),secondStep:this.secondStep(),millisecondStep:this.millisecondStep(),timeFormat:this.timeFormat(),showTimeZoneLabel:this.showTimeZone()})});surfacePresentation=G(()=>{let t=this.presentation();return t!==`auto`?t:this.windowDimensionsService.isMobile()?`drawer`:`popover`});isDrawer=G(()=>this.surfacePresentation()===`drawer`);displayValue=G(()=>this.formatValue(this.internalValue()));resolvedTimePlaceholder=G(()=>LQ(this.placeholder()??this.parseFormats()[0]??this.settings().timeFormat,this.i18n));resolvedOpenPickerLabel=G(()=>LQ(this.openPickerLabel(),this.i18n));resolvedClearTooltip=G(()=>LQ(this.clearTooltip()??this.clearLabel(),this.i18n));resolvedClearLabel=G(()=>LQ(this.clearLabel(),this.i18n));resolvedNowLabel=G(()=>LQ(this.nowLabel(),this.i18n));resolvedHourLabel=G(()=>LQ(this.hourLabel(),this.i18n));resolvedMinuteLabel=G(()=>LQ(this.minuteLabel(),this.i18n));resolvedSecondLabel=G(()=>LQ(this.secondLabel(),this.i18n));resolvedMillisecondLabel=G(()=>LQ(this.millisecondLabel(),this.i18n));resolvedPeriodLabel=G(()=>LQ(this.periodLabel(),this.i18n));resolvedTimeZoneLabel=G(()=>LQ(this.timeZoneLabel(),this.i18n));resolvedLoadingLabel=G(()=>LQ(this.loadingLabel(),this.i18n));resolvedRetryLabel=G(()=>LQ(this.retryLabel(),this.i18n));showClear=G(()=>this.clearable()&&(!!this.internalValue()||!!this.typedText())&&!this.isReadonly());isFloating=G(()=>this.fieldFocused()||this.keyboardFocused()||this.isOpen()||!!this.typedText()||!!this.displayValue()||this.resolvedFloatLabel()===`always`);timeZoneOptions=G(()=>sZ().map(t=>({value:t,label:this.timeZoneLabelFor(t),description:nZ(t,this.settings().locale).offsetMinutes===null?void 0:String(nZ(t,this.settings().locale).offsetMinutes)})));availabilityForPanel=G(()=>this.availability()??(this.resolver()?this.availabilityState():void 0));availabilityLoading=G(()=>this.availabilityForPanel()?.loading===!0);availabilityError=G(()=>LQ(this.availabilityForPanel()?.error,this.i18n));availabilityTimes=G(()=>this.availabilityForPanel()?.times??null);panelFeedback=G(()=>this.availabilityLoading()||!!this.availabilityError()||this.availabilityTimes()?.length===0||this.isListMode()&&!this.listOptions().length);listConfig={layout:`list`,estimatedRowHeight:40,overscan:160};listTrackBy=t=>t.value;listOptions=G(()=>{let t=this.options();if(t)return t.map(P=>({value:P.value,label:LQ(P.label,this.i18n)||QK(P.value,this.settings().timeFormat,this.settings().locale),disabled:!!P.disabled||!this.isTimeAllowed(P.value)}));let e=this.settings().precision===`hour`?3600:this.settings().precision===`minute`?60:1,n=Math.max(e,Math.ceil(Qr(this.interval(),this.settings().minuteStep)/e)*e),o=this.min(),a=this.max(),r=o?Math.ceil(this.timeNumber(o)/1e3/e)*e:0,u=a?this.timeNumber(a)/1e3:86400-e,m=[],x=r;for(;x<=u;){let P=Math.round(x*1e3),D=Yr$1({hour:Math.floor(P/36e5),minute:Math.floor(P/6e4)%60,second:Math.floor(P/1e3)%60,millisecond:P%1e3},this.settings().precision);if(dJ(D,this.settings().minuteStep,this.settings().secondStep,this.settings().millisecondStep))break;x+=e}for(let P=x;P<=u;P+=n){let D=Math.round(P*1e3),L=Yr$1({hour:Math.floor(D/36e5),minute:Math.floor(D/6e4)%60,second:Math.floor(D/1e3)%60,millisecond:D%1e3},this.settings().precision);this.isTimeAllowed(L)&&m.push({value:L,label:QK(L,this.settings().timeFormat,this.settings().locale),disabled:!1})}return m});canSelectNow=G(()=>this.isTimeAllowed(this.normalizeTime(iZ(this.clock.now(),this.settings().timeZone,this.settings().precision))));canApply=G(()=>this.isDraftValid()&&!this.availabilityLoading()&&!this.availabilityError());wheelColumns=G(()=>this.buildColumnsFor(this.draftTime()));errorText=G(()=>{let t=this.typedError();return t?this.validationMessage(t===`range`?`timeRange`:`timeFormat`):this.selectionEdited()?this.validationError():``});panelOrigin=G(()=>this.originElement());panelTemplate=Sz(`panelTemplate`);options=ee(void 0);interval=ee(void 0);parseFormats=ee([]);pickerIconTemplate=ee(void 0);pickerIcon=ee(`clock`);openPickerLabel=ee(`Choose time`);timePresentation=ee(`wheel`);presentation=ee(`auto`);locale=ee(void 0);timeZone=ee(void 0);hourCycle=ee(`auto`);precision=ee(`minute`);minuteStep=ee(1);secondStep=ee(1);millisecondStep=ee(1);timeFormat=ee(void 0);loopColumns=ee(!0,{transform:Ye$1});min=ee(void 0);max=ee(void 0);disabledTimes=ee([]);disabledIntervals=ee([]);timeFilter=ee(void 0);commitPolicy=ee(`auto`);closeOnSelect=ee(void 0,{transform:t=>t==null?void 0:Ye$1(t)});clearable=ee(!0,{transform:Ye$1});showTimeZone=ee(!1,{transform:Ye$1});showTimeZoneLabel=ee(!0,{transform:Ye$1});availability=ee(void 0);resolver=ee(void 0);loadingLabel=ee(void 0);retryLabel=ee(`Retry request`);applyLabel=ee(`Apply`);cancelLabel=ee(`Cancel`);clearLabel=ee(`Clear selection`);nowLabel=ee(void 0);clearTooltip=ee(void 0);hourLabel=ee(`Hour`);minuteLabel=ee(`Minute`);secondLabel=ee(`Second`);millisecondLabel=ee(`Millisecond`);periodLabel=ee(`AM or PM`);timeZoneLabel=ee(`Time zone`);loadErrorMessage=ee(`Times could not be loaded.`);invalidSelectionLabel=ee(void 0);emptyLabel=ee(`No times available.`);errorWrap=ee(!1,{transform:Ye$1});valueCommit=Pk();openChange=Pk();timeZoneChange=Pk();slotRequest=Pk();slotRetry=Pk();listSelectionMotion;resolverToken=0;lastSlotContext=``;requestRevision=0;constructor(){super(),We$1(()=>{(this.effectiveDisabled()||this.isReadonly())&&this.close()}),We$1(()=>{let t=this.internalValue(),e=this.formatValue(t);this.textEdited()||this.typedText.set(e)}),We$1(()=>{let t=this.internalValue();t&&this.draftTime.set(this.normalizeTime(t))}),We$1(()=>{this.resolver(),this.usesExternalAvailability();let t=this.slotContext();de(()=>{let e=this.lastSlotContext;this.lastSlotContext=t,++this.resolverToken,this.availabilityState.set(void 0),this.isOpen()&&this.emitSlotRequest(e&&e.split(`|`)[1]!==t.split(`|`)[1]?`timezone`:`initial`)})}),We$1(()=>{let t=this.listCollection(),e=this.listOptions(),n=this.isOpen();t&&n&&e.length&&de(()=>{let o=this.internalValue()??this.draftTime(),a=e.find(r=>!r.disabled&&this.timeNumber(r.value)>=this.timeNumber(o))??e.find(r=>!r.disabled);this.listFocusValue.set(a?.value??null),a&&t.scrollToItem(a.value)})}),We$1(t=>{let e=this.listViewport()?.nativeElement;if(!e||!this.isOpen())return;let n=de(()=>this.ngZone.runOutsideAngular(()=>TR(e,{reducedMotion:this.bxA11yService.isReducedMotion()})));this.listSelectionMotion=n,t(()=>{n.destroy(),this.listSelectionMotion===n&&(this.listSelectionMotion=void 0)})}),We$1(()=>{let t=this.bxA11yService.isReducedMotion();this.listSelectionMotion?.update({reducedMotion:t})}),this.destroyRef.onDestroy(()=>++this.resolverToken)}reset(){let t=this.isOpen();this.isOpen.set(!1),super.reset(),this.clearPendingEdit(),this.fieldFocused.set(!1),t&&this.openChange.emit(!1)}open(){if(this.isOpen()||this.effectiveDisabled()||this.isReadonly())return;let t=(this.textEdited()?this.parseTypedTime(this.typedText()).value:null)??this.internalValue();this.draftTime.set(this.normalizeTime(t??iZ(this.clock.now(),this.settings().timeZone,this.settings().precision))),this.alignEmptyDraft(),this.selectedTimeZone.set(this.timeZone()??this.settings().timeZone),!this.textEdited()&&!this.typedError()&&this.selectionEdited.set(!1),this.originElement.set(this.nativeElement.querySelector(`.bx-time-field`)),this.textEdited()||this.typedText.set(this.formatValue(this.internalValue())),this.isOpen.set(!0),this.openChange.emit(!0),this.emitSlotRequest(`initial`),this.isDrawer()||this.focus({preventScroll:!0})}close(){this.isOpen()&&(this.isOpen.set(!1),this.markAsTouched(),this.openChange.emit(!1))}apply(){if(this.effectiveDisabled()||this.isReadonly()||!this.canApply())return;let t=this.composedValue();this.updateValue(t),this.valueCommit.emit(t),this.close()}cancel(){let t=this.internalValue();t&&this.draftTime.set(t),this.close()}clear(){this.effectiveDisabled()||this.isReadonly()||(this.selectionEdited.set(!1),this.textEdited.set(!1),this.typedError.set(null),this.typedText.set(``),this.updateValue(null),this.valueCommit.emit(null),this.close(),this.focus({preventScroll:!0}))}selectNow(){if(this.effectiveDisabled()||this.isReadonly())return;let t=this.normalizeTime(iZ(this.clock.now(),this.settings().timeZone,this.settings().precision));this.draftTime.set(t),this.maybeCommitImmediately()}reloadSlots(){this.effectiveDisabled()||this.isReadonly()||this.availabilityLoading()||(this.isOpen()?this.emitSlotRequest(`initial`):this.open())}retrySlots(){this.emitSlotRequest(`retry`)}clearPendingEdit(){super.clearPendingEdit(),this.textEdited.set(!1),this.typedError.set(null),this.selectionEdited.set(!1),this.typedText.set(this.formatValue(this.internalValue()))}onFieldFocus(){this.fieldFocused.set(!0)}onFieldBlur(t){t.relatedTarget instanceof Node&&this.nativeElement.contains(t.relatedTarget)||(this.fieldFocused.set(!1),this.markAsTouched())}onTypedInput(t){this.onTypedValue(t.target.value)}onTypedValue(t){this.typedText.set(t===null?``:String(t)),this.textEdited.set(!0),this.typedError.set(null);let e=this.parseTypedTime(this.typedText()).value;e&&this.draftTime.set(e)}onTypedBlur(t){let e=t?.relatedTarget instanceof HTMLElement&&!!t.relatedTarget.closest(`.bx-time-panel-content`);this.textEdited()&&this.commitTypedTime(!e),this.markAsTouched()}onTypedKeydown(t){t.key===`Enter`?(t.preventDefault(),this.commitTypedTime()):t.key===`ArrowDown`?(t.preventDefault(),this.isOpen()||this.onTriggerClick(t),er$1(()=>{if(!this.isOpen())return;let e=this.nativeElement.ownerDocument.getElementById(this.controlId()+`-panel`);((this.isListMode()&&this.listFocusValue()?this.nativeElement.ownerDocument.getElementById(`${this.controlId()}-${this.listFocusValue()}`):null)??e?.querySelector(`[role="listbox"], .bx-time-feedback button`))?.focus({preventScroll:!0})},{injector:this.injector})):t.key===`Escape`&&this.isOpen()&&(t.preventDefault(),this.cancel())}onEditableClick(t){this.isOpen()||this.onTriggerClick(t)}onTriggerClick(t){this.isReadonly()||(this.isOpen()?this.close():this.open())}onWheelChange(t,e){if(!e)return;let n=this.draftTime(),o=this.wheelCandidate(n,t,e);o&&this.setTime(o)}onListKeydown(t,e){let n=this.listOptions().filter(u=>!u.disabled),o=n.findIndex(u=>u.value===(this.listFocusValue()??this.draftTime()));if(!n.length)return;if(t.key===`Enter`||t.key===` `){t.preventDefault(),this.onListSelect(n[Math.max(0,o)].value);return}let a=t.key===`ArrowDown`?1:t.key===`ArrowUp`?-1:0,r=t.key===`Home`?0:t.key===`End`?n.length-1:Math.max(0,Math.min(n.length-1,o+a));!a&&t.key!==`Home`&&t.key!==`End`||(t.preventDefault(),t.currentTarget.focus(),this.listFocusValue.set(n[r].value),e.scrollToItem(n[r].value),er$1(()=>{if(!this.isOpen())return;let u=this.nativeElement.ownerDocument.getElementById(`${this.controlId()}-${n[r].value}`);u&&this.listViewport()?.nativeElement.contains(u)&&u.focus({preventScroll:!0})},{injector:this.injector}))}onListSelect(t){this.isTimeAllowed(t)&&(this.listFocusValue.set(t),this.setTime(t))}onTimeZoneSelect(t){t&&(this.selectedTimeZone.set(t),this.timeZoneChange.emit(t))}showSeconds(){return this.settings().precision===`second`||this.settings().precision===`millisecond`}showMilliseconds(){return this.settings().precision===`millisecond`}showPeriod(){return this.settings().hourCycle===12}resolvedEmptyLabel(){return LQ(this.emptyLabel(),this.i18n)}wheelValue(t){let e=ir$1(this.draftTime())??{hour:0,minute:0,second:0,millisecond:0};return t===`hour`?String(this.settings().hourCycle===12?e.hour%12===0?12:e.hour%12:e.hour):t===`minute`?_n(e.minute):t===`second`?_n(e.second):t===`millisecond`?String(e.millisecond).padStart(3,`0`):Jn$1(this.settings().locale)[e.hour>=12?1:0]??``}isListMode(){return this.timePresentation()===`list`}listActiveId(){let t=this.listFocusValue()??this.draftTime();return this.listOptions().some(e=>e.value===t)?`${this.controlId()}-${t}`:null}timeZoneLabelFor(t){let e=nZ(t,this.settings().locale);return e.offsetMinutes===null?t:`${t} \xB7 ${Yr(e.offsetMinutes)}`}parseTypedTime(t){let e=this.options()?.find(a=>LQ(a.label,this.i18n).toLocaleLowerCase(this.settings().locale)===t.trim().toLocaleLowerCase(this.settings().locale));if(e)return{value:e.value,error:null,message:null};let n=this.parseFormats().length?this.parseFormats():[this.settings().timeFormat],o={value:null,error:`format`,message:null};for(let a of n){let r=JQ(t.trim(),a,this.settings().locale,this.settings().precision);if(r.value)return r;(r.error===`range`||o.error!==`range`)&&(o=r)}return o}commitTypedTime(t=!0){if(this.effectiveDisabled()||this.isReadonly())return;if(!this.typedText().trim()){this.clear();return}let e=this.parseTypedTime(this.typedText()),n=e.value;if(!n){this.typedError.set(e.error),t&&this.close();return}this.draftTime.set(n),this.maybeCommitImmediately(),t&&!this.canApply()&&this.close()}normalizeTime(t){return uJ(t,this.settings().precision,this.settings().minuteStep,this.settings().secondStep,this.settings().millisecondStep)}formatValue(t){if(!t)return``;let e=this.options()?.find(a=>this.timeNumber(a.value)===this.timeNumber(t));return`${LQ(e?.label,this.i18n)||QK(t,this.settings().timeFormat,this.settings().locale)}${this.showTimeZone()&&this.showTimeZoneLabel()?` \xB7 ${this.selectedTimeZone()??this.settings().timeZone}`:``}`}buildColumnsFor(t){let e=lJ(t,this.settings().precision,this.settings().hourCycle,this.settings().locale,this.settings().minuteStep,this.settings().secondStep,this.settings().millisecondStep),n=(o,a)=>a.map(r$7=>s(r({},r$7),{disabled:!this.wheelCandidate(t,o,r$7.value)}));return{hours:n(`hour`,e.hours),minutes:n(`minute`,e.minutes),seconds:n(`second`,e.seconds),milliseconds:n(`millisecond`,e.milliseconds),periods:n(`period`,e.periods)}}wheelCandidate(t,e,n){let o=ir$1(t);if(!o)return null;let a=e===`hour`?this.settings().hourCycle===12?Number(n)%12+(o.hour>=12?12:0):Number(n):e===`period`?o.hour%12+Math.max(0,Jn$1(this.settings().locale).indexOf(n))*12:o.hour,r$8=s(r({},o),{hour:a,minute:e===`minute`?Number(n):o.minute,second:e===`second`?Number(n):o.second,millisecond:e===`millisecond`?Number(n):o.millisecond}),u=Yr$1(r$8,this.settings().precision);if(this.isTimeAllowed(u))return u;let m=this.availabilityTimes()??this.options()?.filter(D=>!D.disabled).map(D=>D.value);if(m)return m.filter(L=>{let V=ir$1(L);return!V||!this.isTimeAllowed(L)?!1:e===`period`?V.hour>=12==r$8.hour>=12:V.hour!==r$8.hour?!1:e===`hour`?!0:V.minute!==r$8.minute?!1:e===`minute`||V.second===r$8.second&&(e===`second`||V.millisecond===r$8.millisecond)}).sort((L,V)=>Math.abs(this.timeNumber(L)-this.timeNumber(u))-Math.abs(this.timeNumber(V)-this.timeNumber(u)))[0]??null;if(e!==`hour`&&e!==`period`)return null;let x=e===`hour`?[a]:Array.from({length:12},(D,L)=>L+(a>=12?12:0)),P=Array.from({length:Math.ceil(60/Math.max(1,this.settings().minuteStep))},(D,L)=>L*Math.max(1,this.settings().minuteStep));x.sort((D,L)=>Math.abs(D-a)-Math.abs(L-a)),P.sort((D,L)=>Math.abs(D-r$8.minute)-Math.abs(L-r$8.minute));for(let D of x)for(let L of P){let V=Yr$1(s(r({},r$8),{hour:D,minute:L}),this.settings().precision);if(this.isTimeAllowed(V))return V}return null}setTime(t){this.draftTime.set(t),this.maybeCommitImmediately()}maybeCommitImmediately(){if(this.effectiveDisabled()||this.isReadonly()||(this.selectionEdited.set(!0),this.textEdited.set(!this.canApply()),this.typedError.set(null),this.typedText.set(this.formatValue(this.draftTime())),!this.canApply()))return;let t=this.composedValue();JSON.stringify(t)!==JSON.stringify(this.internalValue())&&(this.updateValue(t),this.valueCommit.emit(t)),(this.closeOnSelect()??this.isListMode())&&this.close()}isDraftValid(){return this.isTimeAllowed(this.draftTime())}validationError(){let t=this.timeRestrictionReason(this.draftTime());return t?this.validationMessage(t):``}validationMessage(t){let e=this.invalidSelectionLabel();if(e!==void 0)return LQ(e,this.i18n);return Kt({kind:t,context:{format:this.parseFormats().length?this.parseFormats().join(` or `):this.settings().timeFormat,hourCycle:this.settings().hourCycle,minFormatted:this.min()?QK(this.min()??`00:00`,this.settings().timeFormat,this.settings().locale):``,maxFormatted:this.max()?QK(this.max()??`23:59`,this.settings().timeFormat,this.settings().locale):``,minuteStep:this.settings().minuteStep,secondStep:this.settings().secondStep,millisecondStep:this.settings().millisecondStep}},this.errorMessages(),r(r({},Xr),this.formSettingsService.settings().errorMessages),this.i18n)}composedValue(){return this.isDraftValid()?this.draftTime():null}isTimeAllowed(t){return this.timeRestrictionReason(t)===null}timeNumber(t){let e=ir$1(t);return e?((e.hour*60+e.minute)*60+e.second)*1e3+e.millisecond:NaN}timeRestrictionReason(t){if(!ir$1(t))return`timeRange`;if(this.availabilityLoading())return`timeLoading`;if(this.availabilityError()||(this.resolver()||this.availability())&&!this.availabilityTimes())return`timeAvailability`;let e=this.timeNumber(t),n=this.availabilityTimes(),o=this.options(),a=this.min(),r=this.max();return a&&e<this.timeNumber(a)?`timeMin`:r&&e>this.timeNumber(r)?`timeMax`:n&&!n.some(u=>this.timeNumber(u)===e)||o&&!o.some(u=>!u.disabled&&this.timeNumber(u.value)===e)||this.disabledTimes().some(u=>this.timeNumber(u)===e)||this.disabledIntervals().some(u=>{let m=this.timeNumber(u.start),x=this.timeNumber(u.end);return m>x?e>=m||e<=x:e>=m&&e<=x})||this.timeFilter()?.(t)?`timeDisabled`:dJ(t,this.settings().minuteStep,this.settings().secondStep,this.settings().millisecondStep)?null:`timeStep`}alignEmptyDraft(){if(this.internalValue()||this.textEdited()||this.selectionEdited()||this.isTimeAllowed(this.draftTime()))return;let t=(this.availabilityTimes()??this.listOptions().filter(o=>!o.disabled).map(o=>o.value)).filter(o=>this.isTimeAllowed(o)),e=this.timeNumber(this.draftTime()),n=[...t].sort((o,a)=>Math.abs(this.timeNumber(o)-e)-Math.abs(this.timeNumber(a)-e))[0];n&&this.draftTime.set(n)}emitSlotRequest(t){if(!this.isOpen()||this.availabilityLoading())return;let e={date:null,timeZone:this.settings().timeZone,locale:this.settings().locale,revision:++this.requestRevision,source:t};t===`retry`?this.slotRetry.emit(e):this.slotRequest.emit(e),this.runResolver(e)}async runResolver(t){let e=this.resolver();if(!e||this.availability())return;let n=++this.resolverToken;this.availabilityState.set({times:this.availabilityState()?.times,loading:!0});try{let o=await e(t);if(n!==this.resolverToken)return;this.availabilityState.set({times:o?.times??[],loading:!1,retryable:!0}),this.alignEmptyDraft()}catch{if(n!==this.resolverToken)return;this.availabilityState.set({times:this.availabilityState()?.times,loading:!1,error:this.loadErrorMessage(),retryable:!0})}}static ɵfac=function(e){return new(e||i)};static ɵcmp=Fr$1({type:i,selectors:[[`bx-time-picker`]],viewQuery:function(e,n){e&1&&Yy(n.listViewport,vp,5)(n.listCollection,xp,5)(n.panelTemplate,yp,5),e&2&&fb$1(3)},inputs:{options:[1,`options`],interval:[1,`interval`],parseFormats:[1,`parseFormats`],pickerIconTemplate:[1,`pickerIconTemplate`],pickerIcon:[1,`pickerIcon`],openPickerLabel:[1,`openPickerLabel`],timePresentation:[1,`timePresentation`],presentation:[1,`presentation`],locale:[1,`locale`],timeZone:[1,`timeZone`],hourCycle:[1,`hourCycle`],precision:[1,`precision`],minuteStep:[1,`minuteStep`],secondStep:[1,`secondStep`],millisecondStep:[1,`millisecondStep`],timeFormat:[1,`timeFormat`],loopColumns:[1,`loopColumns`],min:[1,`min`],max:[1,`max`],disabledTimes:[1,`disabledTimes`],disabledIntervals:[1,`disabledIntervals`],timeFilter:[1,`timeFilter`],commitPolicy:[1,`commitPolicy`],closeOnSelect:[1,`closeOnSelect`],clearable:[1,`clearable`],showTimeZone:[1,`showTimeZone`],showTimeZoneLabel:[1,`showTimeZoneLabel`],availability:[1,`availability`],resolver:[1,`resolver`],loadingLabel:[1,`loadingLabel`],retryLabel:[1,`retryLabel`],applyLabel:[1,`applyLabel`],cancelLabel:[1,`cancelLabel`],clearLabel:[1,`clearLabel`],nowLabel:[1,`nowLabel`],clearTooltip:[1,`clearTooltip`],hourLabel:[1,`hourLabel`],minuteLabel:[1,`minuteLabel`],secondLabel:[1,`secondLabel`],millisecondLabel:[1,`millisecondLabel`],periodLabel:[1,`periodLabel`],timeZoneLabel:[1,`timeZoneLabel`],loadErrorMessage:[1,`loadErrorMessage`],invalidSelectionLabel:[1,`invalidSelectionLabel`],emptyLabel:[1,`emptyLabel`],errorWrap:[1,`errorWrap`]},outputs:{valueCommit:`valueCommit`,openChange:`openChange`,timeZoneChange:`timeZoneChange`,slotRequest:`slotRequest`,slotRetry:`slotRetry`},features:[yt],ngContentSelectors:_p,decls:14,vars:53,consts:[[`panelTemplate`,``],[`listViewport`,``],[`collection`,``],[3,`control`,`inline`,`tooltip`,`showLoadingIndicator`,`hint`,`hintEnd`,`error`,`subscriptSizing`,`forId`],[1,`bx-time-field`,3,`focusin`,`focusout`],[`bxSurface`,``,1,`bx-time-trigger`,`is-editable`],[1,`bx-floating-label`],[`role`,`combobox`,`aria-autocomplete`,`none`,`type`,`text`,`autocomplete`,`off`,`aria-haspopup`,`dialog`,1,`bx-time-input`,3,`click`,`input`,`blur`,`keydown`,`id`,`value`,`disabled`,`readOnly`],[`type`,`button`,1,`bx-time-icon-button`,3,`click`,`disabled`],[`aria-hidden`,`true`,3,`value`],[`bx-button`,``,`type`,`button`,`variant`,`text`,1,`bx-time-clear`,3,`surfaceEffects`,`disabled`,`bxTooltip`],[`panelClass`,`bx-time-panel`,3,`dismiss`,`panelId`,`panelWidth`,`open`,`autoFocus`,`presentation`,`origin`,`content`,`ariaLabel`],[`aria-hidden`,`true`,1,`bx-field-required`],[3,`size`,`decorative`],[`size`,`16`,3,`name`,`contentTemplate`,`decorative`],[`bx-button`,``,`type`,`button`,`variant`,`text`,1,`bx-time-clear`,3,`click`,`surfaceEffects`,`disabled`,`bxTooltip`],[`name`,`x`,`size`,`16`,3,`decorative`],[`bxSurface`,``,`data-bx-surface`,`glass`,1,`bx-time-panel-content`,3,`bxSurfaceInteractive`],[1,`bx-time-panel-body`],[1,`bx-time-editor`],[1,`bx-time-editor-content`],[1,`bx-time-wheels`],[`role`,`listbox`,`tabindex`,`0`,1,`bx-time-list`],[1,`bx-time-feedback`],[1,`bx-picker-shortcuts`],[`appearance`,`outline`,3,`label`,`options`,`value`,`isSearchable`],[`type`,`hour`,3,`valueChange`,`options`,`value`,`label`,`loop`],[`aria-hidden`,`true`,1,`bx-time-wheel-separator`],[`type`,`minute`,3,`valueChange`,`options`,`value`,`label`,`loop`],[`type`,`period`,1,`bx-time-period-wheel`,3,`options`,`value`,`label`,`loop`],[`type`,`second`,3,`valueChange`,`options`,`value`,`label`,`loop`],[`type`,`millisecond`,3,`valueChange`,`options`,`value`,`label`,`loop`],[`type`,`period`,1,`bx-time-period-wheel`,3,`valueChange`,`options`,`value`,`label`,`loop`],[`role`,`listbox`,`tabindex`,`0`,1,`bx-time-list`,3,`keydown`],[`itemRole`,`presentation`,3,`items`,`trackBy`,`config`,`scrollContainer`],[3,`bxVirtualItem`],[`type`,`button`,`role`,`option`,`tabindex`,`-1`,1,`bx-time-list-option`,3,`click`,`id`,`disabled`],[`name`,`check`,`size`,`16`,3,`decorative`],[3,`size`,`label`],[`role`,`status`],[`role`,`alert`,1,`bx-time-feedback-message`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`accent`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`accent`,3,`click`],[`name`,`rotate-cw`,`size`,`16`,3,`decorative`],[`type`,`button`,1,`bx-picker-shortcut`,3,`click`,`disabled`],[`appearance`,`outline`,3,`valueChange`,`label`,`options`,`value`,`isSearchable`]],template:function(e,n){if(e&1&&(ld$1(Sp),bo$1(0,`bx-form-field`,3)(1,`div`,4),br$1(`focusin`,function(){return n.onFieldFocus()})(`focusout`,function(a){return n.onFieldBlur(a)}),bo$1(2,`div`,5),od$1(3,Np,3,3,`label`,6),bo$1(4,`input`,7),br$1(`click`,function(a){return n.onEditableClick(a)})(`input`,function(a){return n.onTypedInput(a)})(`blur`,function(a){return n.onTypedBlur(a)})(`keydown`,function(a){return n.onTypedKeydown(a)}),Go(),bo$1(5,`button`,8),br$1(`click`,function(a){return n.onTriggerClick(a)}),bo$1(6,`bx-visual-transition`,9),rd$1(7,Op,2,1,`ng-template`),Go()()(),od$1(8,Ip,2,5,`button`,10),Go(),bo$1(9,`bx-picker-surface`,11),br$1(`dismiss`,function(){return n.cancel()}),Go(),rd$1(10,$p,9,10,`ng-template`,null,0,RA),dd$1(12,0,Cp),dd$1(13,1,Mp),Go()),e&2){let o=FT(11);xo$1(`control`,n.fieldControl)(`inline`,!0)(`tooltip`,n.tooltip())(`showLoadingIndicator`,!1)(`hint`,n.hint())(`hintEnd`,n.hintEnd())(`error`,n.errorText()||n.error())(`subscriptSizing`,n.resolvedSubscriptSizing())(`forId`,n.controlId()),Xl$1(),tr$1(`has-clear`,n.showClear()),Xl$1(),tr$1(`has-label`,!!n.label())(`is-open`,n.isOpen())(`is-floating`,n.isFloating())(`is-invalid`,n.showError()||!!n.errorText())(`is-outline`,n.resolvedAppearance()===`outline`)(`is-readonly`,n.isReadonly())(`is-disabled`,n.effectiveDisabled())(`is-keyboard-focused`,n.keyboardFocused()),Xl$1(),nd$1(n.label()?3:-1),Xl$1(),xo$1(`id`,n.controlId())(`value`,n.typedText())(`disabled`,n.effectiveDisabled())(`readOnly`,n.isReadonly()),vo$1(`aria-controls`,n.isOpen()?n.controlId()+`-panel`:null)(`placeholder`,n.isFloating()||!n.label()?n.resolvedTimePlaceholder():``)(`aria-label`,n.ariaLabel()||n.resolvedLabel()||n.resolvedTimePlaceholder())(`aria-describedby`,n.describedBy())(`aria-expanded`,n.isOpen())(`aria-invalid`,n.showError()||!!n.errorText())(`aria-required`,n.effectiveRequired())(`aria-busy`,n.availabilityLoading())(`data-testid`,n.dataTestId()),Xl$1(),xo$1(`disabled`,n.effectiveDisabled()||n.isReadonly()||n.availabilityLoading()),vo$1(`aria-label`,n.resolvedOpenPickerLabel()),Xl$1(),xo$1(`value`,n.availabilityLoading()),Xl$1(2),nd$1(n.showClear()?8:-1),Xl$1(),xo$1(`panelId`,n.controlId()+`-panel`)(`panelWidth`,n.showMilliseconds()?`min(94vw, 30rem)`:`min(94vw, 22rem)`)(`open`,n.isOpen())(`autoFocus`,!1)(`presentation`,n.surfacePresentation())(`origin`,n.panelOrigin())(`content`,o)(`ariaLabel`,n.resolvedLabel()||n.resolvedTimePlaceholder())}},dependencies:[Wu$1,GC,_e,ce,ZC,Yi$1,Et,on,vi,Si,Pt,ul$1,Un],styles:[`
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
}`]})};var vt=class i{position=$(`top-right`);animate=$(!0);wrapperClass=$(void 0);durationInMs=$(5e3);swipeToDismiss=$(!0);maxOpened=$(4);glassiness=$(`auto`);glassQuality=$(`enhanced`);closeLabel=$(`Close toast`);showCloseButton=$(!0);closeButtonColor=$(`text-primary`);showProgressBar=$(!0);progressBarColor=$(`text-primary`);update(t){t.position!==void 0&&this.position.set(t.position),t.animate!==void 0&&this.animate.set(t.animate),t.wrapperClass!==void 0&&this.wrapperClass.set(t.wrapperClass),t.durationInMs!==void 0&&this.durationInMs.set(t.durationInMs),t.swipeToDismiss!==void 0&&this.swipeToDismiss.set(t.swipeToDismiss),t.maxOpened!==void 0&&this.maxOpened.set(t.maxOpened),t.glassiness!==void 0&&this.glassiness.set(t.glassiness),t.glassQuality!==void 0&&this.glassQuality.set(t.glassQuality),t.closeLabel!==void 0&&this.closeLabel.set(t.closeLabel),t.showCloseButton!==void 0&&this.showCloseButton.set(t.showCloseButton),t.closeButtonColor!==void 0&&this.closeButtonColor.set(t.closeButtonColor),t.showProgressBar!==void 0&&this.showProgressBar.set(t.showProgressBar),t.progressBarColor!==void 0&&this.progressBarColor.set(t.progressBarColor)}static ɵfac=function(e){return new(e||i)};static ɵprov=B({token:i,factory:i.ɵfac,providedIn:`root`})};var at=class{configuration;lifecycle=$(`queued`);pauseReasons=/* @__PURE__ */ new Set;isPaused=$(!1);afterClosedSubject=new xe;pauseSubject=new xe;resumeSubject=new xe;durationSubject=new xe;config;data=G(()=>this.config().data);state=this.lifecycle.asReadonly();paused=this.isPaused.asReadonly();afterClosed$=this.afterClosedSubject.asObservable();onPause$=this.pauseSubject.asObservable();onResume$=this.resumeSubject.asObservable();durationChanges$=this.durationSubject.asObservable();closeHandler;constructor(t={}){this.configuration=$(r({},t)),this.config=this.configuration.asReadonly()}patch(t){this.state()===`closing`||this.state()===`closed`||(this.configuration.update(e=>s(r({},e),{data:t.data===void 0?e.data:this.patchData(e.data,t.data),durationInMs:t.durationInMs===void 0?e.durationInMs:Math.max(0,Number.isFinite(t.durationInMs)?t.durationInMs:0),closeLabel:t.closeLabel??e.closeLabel,showCloseButton:t.showCloseButton??e.showCloseButton,closeButtonColor:t.closeButtonColor===void 0?e.closeButtonColor:t.closeButtonColor??void 0,showProgressBar:t.showProgressBar??e.showProgressBar,progressBarColor:t.progressBarColor===void 0?e.progressBarColor:t.progressBarColor??void 0,wrapperClass:t.wrapperClass===void 0?e.wrapperClass:t.wrapperClass??void 0,hasDefaultBackground:t.hasDefaultBackground??e.hasDefaultBackground,glassiness:t.glassiness??e.glassiness,glassQuality:t.glassQuality??e.glassQuality})),t.durationInMs!==void 0&&this.durationSubject.next(this.config().durationInMs??0))}close(t){this.state()===`closing`||this.state()===`closed`||(this.beginClose(),this.closeHandler?this.closeHandler(t):this.completeClose(t))}pause(){this.setPauseReason(`explicit`,!0)}resume(){this.setPauseReason(`explicit`,!1)}setPauseReason(t,e){if(this.state()===`closing`||this.state()===`closed`)return;e?this.pauseReasons.add(t):this.pauseReasons.delete(t);let n=this.pauseReasons.size>0;n!==this.paused()&&(this.isPaused.set(n),n?this.pauseSubject.next():this.resumeSubject.next())}attach(t){this.state()===`queued`&&(this.closeHandler=t,this.lifecycle.set(`open`))}beginClose(){this.state()!==`closed`&&this.lifecycle.set(`closing`)}completeClose(t){this.state()!==`closed`&&(this.lifecycle.set(`closed`),this.closeHandler=void 0,this.afterClosedSubject.next(t),this.afterClosedSubject.complete(),this.pauseSubject.complete(),this.resumeSubject.complete(),this.durationSubject.complete())}patchData(t,e){if(!this.isPlainObject(e))return e;let n=Object.fromEntries(Object.entries(e).filter(([,o])=>o!==void 0));return r(r({},this.isPlainObject(t)?t:{}),n)}isPlainObject(t){if(t===null||typeof t!=`object`)return!1;let e=Object.getPrototypeOf(t);return e===Object.prototype||e===null}};var an=class i{toastRef=b(at);toast=this.toastRef;data=this.toast.data;onToastInit(){}close(t){this.toast?.close(t)}static ɵfac=function(e){return new(e||i)};static ɵprov=B({token:i,factory:i.ɵfac})};function Up(i,t){if(i&1&&sd$1(0,`bx-loading-spinner`,6),i&2){let e=Wo(3),n=vA(0);xo$1(`size`,e.iconSize())(`label`,n?.loadingLabel??`Loading`)}}function Gp(i,t){if(i&1&&sd$1(0,`bx-icon`,7),i&2){let e=Wo().$implicit,n=Wo(2);xo$1(`name`,e.name)(`size`,n.iconSize())(`color`,e.color)(`bgColor`,e.bgColor)(`strokeWidth`,e.strokeWidth)}}function Kp(i,t){if(i&1&&od$1(0,Up,1,2,`bx-loading-spinner`,6)(1,Gp,1,5,`bx-icon`,7),i&2){let e=t.$implicit;nd$1(e===`loading`?0:e?1:-1)}}function Zp(i,t){if(i&1&&(bo$1(0,`span`,4)(1,`bx-visual-transition`,5),rd$1(2,Kp,2,1,`ng-template`),Go()()),i&2){let e=Wo(),n=vA(0);ka(`min-inline-size`,e.iconSize(),`px`)(`min-block-size`,e.iconSize(),`px`),Xl$1(),xo$1(`value`,n?.loading?`loading`:n?.icon)}}function Xp(i,t){if(i&1&&(bo$1(0,`h4`,8),lA(1),Go(),bo$1(2,`p`,9),lA(3),Go()),i&2){let e=Wo();Xl$1(),ik(e.resolvedTitle()),Xl$1(2),ik(e.resolvedMessage())}}function Yp(i,t){if(i&1&&(bo$1(0,`p`,3),lA(1),Go()),i&2){let e=Wo();Xl$1(),ik(e.resolvedMessage())}}var Je=class i extends an{i18n=b(VQ,{optional:!0});resolvedTitle=G(()=>LQ(this.data()?.title??void 0,this.i18n));resolvedMessage=G(()=>LQ(this.data()?.message,this.i18n));iconSize=G(()=>{let t=Number(this.data()?.icon?.size??24);return Number.isFinite(t)&&t>0?t:24});static ɵfac=(()=>{let t;return function(n){return(t||(t=ho$1(i)))(n||i)}})();static ɵcmp=Fr$1({type:i,selectors:[[`bx-simple-toast`]],features:[yt],decls:6,vars:4,consts:[[1,`simple-toast`,3,`ngClass`],[1,`simple-toast-icon-area`,3,`min-inline-size`,`min-block-size`],[`aria-live`,`polite`,`aria-atomic`,`true`,1,`simple-toast-content`],[1,`simple-toast-message`,`large-message`],[1,`simple-toast-icon-area`],[3,`value`],[3,`size`,`label`],[3,`name`,`size`,`color`,`bgColor`,`strokeWidth`],[1,`simple-toast-title`],[1,`simple-toast-message`]],template:function(e,n){if(e&1&&(mk(0),bo$1(1,`div`,0),od$1(2,Zp,3,5,`span`,1),bo$1(3,`div`,2),od$1(4,Xp,4,2)(5,Yp,2,1,`p`,3),Go()()),e&2){let o=gA(n.data());Xl$1(),xo$1(`ngClass`,o?.type??`info`),Xl$1(),nd$1(o?.icon||o?.loading!==void 0?2:-1),Xl$1(2),nd$1(n.resolvedTitle()?4:5)}},dependencies:[S1,ZC,Et,Wu$1],styles:[`
.simple-toast[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--%NS%bx-space-3, 0.75rem);
  justify-content: center;
  position: relative;
  padding: var(--%NS%bx-space-4, 1rem);
  border-radius: var(--%NS%bx-rounded-md, 0.5rem);
  background: transparent;
  border: 0;
  overflow: hidden;
}
.simple-toast[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], 
.simple-toast[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], 
.simple-toast[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], 
.simple-toast[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], 
.simple-toast[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {
  color: inherit;
}
.simple-toast.info[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-info);
}
.simple-toast.info[_ngcontent-%COMP%]   .simple-toast-content[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-info-readable, var(--%NS%bx-text-info));
}
.simple-toast.success[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-success);
}
.simple-toast.success[_ngcontent-%COMP%]   .simple-toast-content[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-success-readable, var(--%NS%bx-text-success));
}
.simple-toast.warn[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-warn);
}
.simple-toast.warn[_ngcontent-%COMP%]   .simple-toast-content[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-warn-readable, var(--%NS%bx-text-warn));
}
.simple-toast.danger[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-danger);
}
.simple-toast.danger[_ngcontent-%COMP%]   .simple-toast-content[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-danger-readable, var(--%NS%bx-text-danger));
}
.simple-toast-content[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex-grow: 1;
  min-inline-size: 0;
  padding-inline-end: var(--%NS%bx-space-6, 1.5rem);
  overflow-wrap: anywhere;
  font-family: inherit;
}
.simple-toast-title[_ngcontent-%COMP%] {
  margin: 0 0 var(--%NS%bx-space-1, 0.25rem);
  font-size: 1rem;
  font-weight: 600;
}
.simple-toast-message[_ngcontent-%COMP%] {
  margin: 0;
  font-size: 0.875rem;
  line-height: 1.4;
}
.simple-toast-message.large-message[_ngcontent-%COMP%] {
  font-size: 1rem;
}
.simple-toast-icon-area[_ngcontent-%COMP%] {
  display: inline-grid;
  flex: 0 0 auto;
  place-items: center;
}
.simple-toast-icon-area[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
  grid-area: 1/1;
}`]})};var Qp=[`dynamicContainer`];var Jp=[`toastSwipeTarget`];var eb=[`animatorWrapper`];var tb=[`progressBar`];function nb(i,t){if(i&1){let e=pb$1();bo$1(0,`button`,8),br$1(`click`,function(){al$1(e);let o=Wo();return cl$1(o.closeToast())}),sd$1(1,`bx-icon`,9),Go()}if(i&2){let e=Wo();vo$1(`aria-label`,e.resolvedCloseLabel()),Xl$1(),xo$1(`color`,e.closeButtonColor())}}function ib(i,t){if(i&1&&(bo$1(0,`div`,10),sd$1(1,`div`,11,3),Go()),i&2){let e=Wo();ka(`background`,e.progressBarBgCssVar()),Xl$1(),ka(`background`,e.progressBarCssVar())}}var _i=class i{i18n=b(VQ,{optional:!0});elementRef=b(ke);themingService=b(ni$1);ngZone=b(le);platformId=b(Ge);bxGlassLightingService=b(WC);bxA11yService=b(Br$1);toastrGlobalSettingsService=b(vt);toastRef=b(at);swipeMotion=Zn$1([0],([t])=>this.currentTranslateY.set(t));gestureActive=$(!1);resolvedCloseLabel=G(()=>LQ(this.config().closeLabel??`Close toast`,this.i18n));showCloseButton=G(()=>this.config().showCloseButton??this.toastrGlobalSettingsService.showCloseButton());closeButtonColor=G(()=>this.config().closeButtonColor??this.toastrGlobalSettingsService.closeButtonColor());showProgressBar=G(()=>this.config().showProgressBar===!1?!1:this.config().showProgressBar===!0||this.config().progressBarColor!==void 0);progressBarColor=G(()=>{if(!this.showProgressBar())return;let t=this.config().progressBarColor??this.toastrGlobalSettingsService.progressBarColor();return Uh(t)?this.themingService.activeTheme()===`dark`?t.dark??t.light:t.light:t});progressBarCssVar=G(()=>{let t=this.progressBarColor();return t?$h(t):void 0});progressBarBgCssVar=G(()=>{let t=this.progressBarColor();return t?$h(JE(t)):void 0});isAnimated=G(()=>!this.bxA11yService.isReducedMotion()&&this.config().animate!==!1);isBottom=G(()=>(this.config().position??this.toastrGlobalSettingsService.position()).includes(`bottom`));simpleToastSurface=G(()=>{let t=this.componentRef?.instance;return t instanceof Je?`color-mix(in srgb, var(--bx-bg-surface) 92%, var(--bx-bg-${t.data()?.type??`info`}))`:null});emissionColor=G(()=>{let t=this.componentRef?.instance;return t instanceof Je?`var(--bx-text-${t.data()?.type??`info`})`:this.progressBarCssVar()});wrapperClasses=G(()=>{return`${(this.config().position??`top-right`).includes(`top`)?`anim-dir-top`:`anim-dir-bottom`} ${this.config().wrapperClass??`default-wrapper`}${this.config().hasDefaultBackground===!1?` no-bg`:``}`});toastrTransform=G(()=>{let t=(this.config().position??`top-right`).includes(`top`);return this.isSwipingFinished()?t?`translateY(-150px)`:`translateY(150px)`:this.currentTranslateY()!==0?`translateY(${this.currentTranslateY()}px)`:null});dynamicContainer=Sz.required(`dynamicContainer`,{read:fr$1});toastSwipeTarget=Sz.required(`toastSwipeTarget`);animatorWrapper=Sz.required(`animatorWrapper`);progressBar=Sz(`progressBar`);config=this.toastRef.config;isVisible=$(!1);currentTranslateY=$(0);isSwipingFinished=$(!1);isCollapsing=$(!1);componentRef;originElement;cancelSwipe;light;lightFrame;lastLightProgress=-1;lastLightColor;destroyed=!1;progressAnimation;subs=new Ae;remainingMs=0;timerStartTime=0;lifetimeMs=0;viewReady=!1;closing=!1;progressElement;entranceTimeout;collapseTimeout;closeResult;isTrackingSwipe=!1;isTouchActive=!1;autoCloseTimeout;hasEmittedClose=!1;cleanupListeners=[];swipeCleanupListeners=null;globalResizeCleanup=null;constructor(){We$1(()=>{this.isAnimated()||this.swipeMotion.retarget([this.currentTranslateY()],!0)}),Vk(()=>{let t=this.progressBar()?.nativeElement,e=this.isAnimated(),n=this.toastRef.state();this.config(),this.emissionColor(),de(()=>{if(!(this.destroyed||!this.viewReady)){if(n===`closing`){e||this.finishClose();return}this.syncProgressAnimation(t),this.lastLightProgress=-1,e&&!this.toastRef.paused()?this.startLightFrame():(this.stopLightFrame(),this.paintLight())}})})}ngOnInit(){this.subs.add(this.toastRef.durationChanges$.subscribe(()=>{this.viewReady&&!this.closing&&this.resetLifetime()})),this.subs.add(this.toastRef.onPause$.subscribe(()=>{this.pauseTimer(),this.progressAnimation?.pause(),this.paintLight(),this.stopLightFrame()})),this.subs.add(this.toastRef.onResume$.subscribe(()=>{this.startTimer(),this.progressAnimation?.play(),this.startLightFrame()}))}ngAfterViewInit(){if(this.dynamicContainer().insert(this.componentRef.hostView),this.viewReady=!0,this.originElement=this.elementRef.nativeElement.ownerDocument.activeElement,!bt$1(this.platformId))return;this.entranceTimeout=setTimeout(()=>{!this.destroyed&&!this.closing&&this.isVisible.set(!0)},10),this.config().swipeToDismiss!==!1&&(this.startVerticalSwipeDetection(),this.monitorInputType());let t=this.animatorWrapper().nativeElement,e=n=>{n.target!==t||n.propertyName!==`grid-template-rows`||this.isCollapsing()&&!this.hasEmittedClose&&(this.hasEmittedClose=!0,this.toastRef.completeClose(this.closeResult))};t.addEventListener(`transitionend`,e),this.cleanupListeners.push(()=>t.removeEventListener(`transitionend`,e)),this.resetLifetime()}ngOnDestroy(){this.destroyed=!0,this.stopLightFrame(),this.light?.destroy(),clearTimeout(this.autoCloseTimeout),clearTimeout(this.entranceTimeout),clearTimeout(this.collapseTimeout),this.stopVerticalSwipeDetection(),this.swipeMotion.destroy(),this.globalResizeCleanup?.(),this.cleanupListeners.forEach(t=>t()),this.cleanupListeners=[],this.progressAnimation?.cancel(),this.subs.unsubscribe(),this.componentRef&&!this.componentRef.hostView.destroyed&&this.componentRef.destroy(),this.toastRef.completeClose(this.closeResult)}closeToast(t,e=!1){if(!(this.destroyed||this.closing)){if(this.restoreFocus(),this.cancelSwipe?.(),this.closing=!0,this.toastRef.beginClose(),this.closeResult=t,clearTimeout(this.autoCloseTimeout),clearTimeout(this.entranceTimeout),this.autoCloseTimeout=void 0,this.progressAnimation?.pause(),this.stopLightFrame(),this.light?.destroy(),this.light=void 0,!this.viewReady||!this.isVisible()||!this.isAnimated()){this.finishClose();return}this.isVisible.set(!1),this.isCollapsing.set(!0),e&&this.isSwipingFinished.set(!0),this.collapseTimeout=setTimeout(()=>this.finishClose(),450)}}onMouseEnter(){!this.isTouchActive&&!this.closing&&this.toastRef.setPauseReason(`hover`,!0)}onMouseLeave(){this.closing||this.toastRef.setPauseReason(`hover`,!1)}onFocusIn(){this.toastRef.setPauseReason(`focus`,!0)}onFocusOut(t){(!(t.relatedTarget instanceof Node)||!this.elementRef.nativeElement.contains(t.relatedTarget))&&this.toastRef.setPauseReason(`focus`,!1)}restoreFocus(){let t=this.elementRef.nativeElement;t.contains(t.ownerDocument.activeElement)&&(this.originElement?.isConnected&&!this.originElement.closest(`[inert], :disabled, [aria-disabled="true"]`)?this.originElement.focus():t.ownerDocument.querySelector(`bx-toast-core:not(:focus-within) button:not(:disabled)`)?.focus())}paintLight(){if(!this.viewReady||this.destroyed||this.closing)return;let t=this.toastSwipeTarget().nativeElement,e=this.emissionColor(),n=t.closest(`.toast-container`);if(!e||!n||this.destroyed)return;let o=t.getBoundingClientRect(),a=this.progressBar()?.nativeElement,r=a?.getBoundingClientRect(),u=r&&o.width?(r.right-o.left)/o.width:.5;if(Math.abs(u-this.lastLightProgress)<1e-4&&e===this.lastLightColor)return;this.lastLightProgress=u,this.lastLightColor=e,t.style.setProperty(`--bx-toast-light-x`,`${u*100}%`);let m={element:a??t,offsetX:a?1:.5,offsetY:1,excludeElement:t,color:e,z:48,intensity:1.1,radius:360};this.light?this.light.update(m):this.light=this.bxGlassLightingService.register(n,m)}startLightFrame(){!this.viewReady||this.destroyed||this.closing||(this.paintLight(),this.lightFrame===void 0&&this.progressAnimation&&!this.destroyed&&this.isAnimated()&&this.ngZone.runOutsideAngular(()=>{let t=()=>{this.lightFrame=void 0,!(this.destroyed||this.isCollapsing()||!this.isAnimated())&&(this.paintLight(),this.progressAnimation?.playState===`running`&&(this.lightFrame=requestAnimationFrame(t)))};this.lightFrame=requestAnimationFrame(t)}))}stopLightFrame(){this.lightFrame!==void 0&&cancelAnimationFrame(this.lightFrame),this.lightFrame=void 0}startVerticalSwipeDetection(){if(this.isTrackingSwipe||!(typeof window<`u`&&(window.matchMedia(`(pointer: coarse)`).matches||navigator.maxTouchPoints>0)))return;this.isTrackingSwipe=!0;let e=this.toastSwipeTarget().nativeElement,n=e.ownerDocument,o=0,a,r,u=0,m=()=>{let O=a;a=void 0,this.gestureActive.set(!1),O!==void 0&&e.hasPointerCapture(O)&&e.releasePointerCapture(O),this.toastRef.setPauseReason(`gesture`,!1)},x=()=>{a!==void 0&&(m(),this.swipeMotion.retarget([0],!this.isAnimated()))},P=O=>{if(this.closing||a!==void 0||!O.isPrimary||O.button!==0||O.pointerType!==`touch`)return;let Z=O.target;Z instanceof Element&&Z.closest(`button, a, input, select, textarea, [role="button"], [contenteditable="true"]`)||(u=e.offsetHeight/3,a=O.pointerId,o=O.clientY-this.currentTranslateY(),this.gestureActive.set(!0),r=new Ah(o,O.timeStamp),this.swipeMotion.track([this.currentTranslateY()]),this.toastRef.setPauseReason(`gesture`,!0),e.setPointerCapture(a))},D=O=>{if(O.pointerId!==a)return;r?.update(O.clientY,O.timeStamp);let Z=O.clientY-o,re=this.isBottom()?1:-1,he=Math.max(0,Z*re)*re;he&&O.cancelable&&O.preventDefault(),this.swipeMotion.track([he],[r?.velocity(O.timeStamp)??0])},L=O=>{if(O.pointerId!==a)return;r?.update(O.clientY,O.timeStamp);let Z=O.clientY-o,re=r?.velocity(O.timeStamp)??0,he=this.isBottom()?1:-1,Ge=AR(Z,re,u),Ie=Z*he>0&&re*he>=0&&Ge*he>u;m(),Ie?this.closeToast(void 0,!0):this.swipeMotion.retarget([0],!this.isAnimated())},V=O=>{O.pointerId===a&&x()},Q=O=>{O.key===`Escape`&&a!==void 0&&(O.preventDefault(),x())},J=()=>{n.hidden&&x()};this.cancelSwipe=x,e.addEventListener(`pointerdown`,P,{passive:!1}),e.addEventListener(`pointermove`,D,{passive:!1}),e.addEventListener(`pointerup`,L),e.addEventListener(`pointercancel`,V),e.addEventListener(`lostpointercapture`,V),n.addEventListener(`keydown`,Q),n.addEventListener(`visibilitychange`,J),n.defaultView?.addEventListener(`blur`,x),this.swipeCleanupListeners=()=>{x(),this.cancelSwipe=void 0,e.removeEventListener(`pointerdown`,P),e.removeEventListener(`pointermove`,D),e.removeEventListener(`pointerup`,L),e.removeEventListener(`pointercancel`,V),e.removeEventListener(`lostpointercapture`,V),n.removeEventListener(`keydown`,Q),n.removeEventListener(`visibilitychange`,J),n.defaultView?.removeEventListener(`blur`,x)}}stopVerticalSwipeDetection(){this.isTrackingSwipe&&(this.isTrackingSwipe=!1,this.swipeCleanupListeners&&(this.swipeCleanupListeners(),this.swipeCleanupListeners=null))}monitorInputType(){if(this.globalResizeCleanup)return;let t=e=>{let n=e.pointerType===`touch`;n&&!this.isTouchActive?(this.isTouchActive=!0,this.toastRef.setPauseReason(`hover`,!1),this.startVerticalSwipeDetection()):!n&&this.isTouchActive&&(this.isTouchActive=!1,this.stopVerticalSwipeDetection())};window.addEventListener(`pointerdown`,t),this.globalResizeCleanup=()=>window.removeEventListener(`pointerdown`,t)}resetLifetime(){clearTimeout(this.autoCloseTimeout),this.autoCloseTimeout=void 0,this.progressAnimation?.cancel(),this.progressAnimation=void 0,this.progressElement=void 0,this.stopLightFrame();let t=this.config().durationInMs??0;this.lifetimeMs=Number.isFinite(t)?Math.max(0,t):0,this.remainingMs=this.lifetimeMs,this.startTimer()}startTimer(){if(!(!this.viewReady||this.destroyed||this.closing||this.toastRef.paused()||this.lifetimeMs<=0||this.autoCloseTimeout!==void 0)){if(this.remainingMs<=0){this.closeToast();return}this.timerStartTime=Date.now(),this.autoCloseTimeout=setTimeout(()=>{this.autoCloseTimeout=void 0,this.remainingMs=0,this.closeToast()},this.remainingMs)}}pauseTimer(){this.autoCloseTimeout!==void 0&&(clearTimeout(this.autoCloseTimeout),this.autoCloseTimeout=void 0,this.remainingMs=Math.max(0,this.remainingMs-(Date.now()-this.timerStartTime)))}syncProgressAnimation(t){if(t===this.progressElement&&this.progressAnimation||(this.progressAnimation?.cancel(),this.progressAnimation=void 0,this.progressElement=t,!t||this.lifetimeMs<=0))return;let e=Math.max(0,this.remainingMs-(this.autoCloseTimeout===void 0?0:Date.now()-this.timerStartTime)),n=`${e/this.lifetimeMs*100}%`;t.style.width=n,!(typeof t.animate!=`function`||e<=0)&&(this.progressAnimation=t.animate([{width:n},{width:`0%`}],{duration:e,fill:`forwards`}),this.toastRef.paused()&&this.progressAnimation.pause())}finishClose(){this.hasEmittedClose||(this.hasEmittedClose=!0,clearTimeout(this.collapseTimeout),this.toastRef.completeClose(this.closeResult))}static ɵfac=function(e){return new(e||i)};static ɵcmp=Fr$1({type:i,selectors:[[`bx-toast-core`]],viewQuery:function(e,n){e&1&&Yy(n.dynamicContainer,Qp,5,fr$1)(n.toastSwipeTarget,Jp,5)(n.animatorWrapper,eb,5)(n.progressBar,tb,5),e&2&&fb$1(4)},hostBindings:function(e,n){e&1&&br$1(`mouseenter`,function(){return n.onMouseEnter()})(`mouseleave`,function(){return n.onMouseLeave()})(`focusin`,function(){return n.onFocusIn()})(`focusout`,function(a){return n.onFocusOut(a)})},decls:8,vars:25,consts:[[`animatorWrapper`,``],[`toastSwipeTarget`,``],[`dynamicContainer`,``],[`progressBar`,``],[1,`toast-animator`],[`bxSurface`,``,1,`toast-wrapper`,3,`bxSurfaceGlassiness`,`bxSurfaceQuality`,`ngClass`],[`type`,`button`,1,`toast-close-button`],[1,`toast-progress-container`,3,`background`],[`type`,`button`,1,`toast-close-button`,3,`click`],[`name`,`x`,`size`,`20`,3,`color`],[1,`toast-progress-container`],[1,`toast-progress-bar`]],template:function(e,n){e&1&&(bo$1(0,`div`,4,0)(2,`div`,5,1),od$1(4,nb,2,2,`button`,6),$s$1(5,null,2),od$1(7,ib,3,4,`div`,7),Go()()),e&2&&(tr$1(`collapsing`,n.isCollapsing())(`is-bottom`,n.isBottom()),Xl$1(2),ka(`touch-action`,n.config().swipeToDismiss!==!1?`pan-x pinch-zoom`:null)(`transform`,n.toastrTransform())(`--%NS%bx-toast-bg`,n.simpleToastSurface())(`--%NS%bx-toast-emission`,n.emissionColor()),tr$1(`show`,n.isVisible())(`no-animate`,!n.isAnimated())(`is-manipulating`,!n.isSwipingFinished()&&(n.gestureActive()||n.currentTranslateY()!==0))(`has-emission`,!!n.emissionColor()),xo$1(`bxSurfaceGlassiness`,n.config().hasDefaultBackground===!1?`off`:n.config().glassiness??`auto`)(`bxSurfaceQuality`,n.config().glassQuality??`enhanced`)(`ngClass`,n.wrapperClasses()),Xl$1(2),nd$1(n.showCloseButton()?4:-1),Xl$1(3),nd$1(n.config().durationInMs&&n.showProgressBar()&&n.progressBarCssVar()&&n.progressBarBgCssVar()?7:-1))},dependencies:[GC,S1,ZC],styles:[`
[_nghost-%COMP%] {
  display: block;
  width: 100%;
}
  .toast-container {
  position: fixed;
  z-index: 9999;
  display: flex;
  pointer-events: none;
}
@media (max-width: 768px) {
    .toast-container {
    left: 1rem !important;
    right: 1rem !important;
    width: calc(100% - 2rem);
  }
}
  .toast-container-top-right {
  top: var(--%NS%bx-space-4, 1rem);
  right: var(--%NS%bx-space-4, 1rem);
  flex-direction: column;
  align-items: flex-end;
}
  .toast-container-top-left {
  top: var(--%NS%bx-space-4, 1rem);
  left: var(--%NS%bx-space-4, 1rem);
  flex-direction: column;
  align-items: flex-start;
}
  .toast-container-top-center {
  top: var(--%NS%bx-space-4, 1rem);
  left: 50%;
  transform: translateX(-50%);
  flex-direction: column;
  align-items: center;
}
  .toast-container-bottom-right {
  bottom: var(--%NS%bx-space-4, 1rem);
  right: var(--%NS%bx-space-4, 1rem);
  flex-direction: column-reverse;
  align-items: flex-end;
}
  .toast-container-bottom-left {
  bottom: var(--%NS%bx-space-4, 1rem);
  left: var(--%NS%bx-space-4, 1rem);
  flex-direction: column-reverse;
  align-items: flex-start;
}
  .toast-container-bottom-center {
  bottom: var(--%NS%bx-space-4, 1rem);
  left: 50%;
  transform: translateX(-50%);
  flex-direction: column-reverse;
  align-items: center;
}
@media (max-width: 768px) {
    .toast-container[class*=-top-] {
    top: var(--%NS%bx-space-4, 1rem) !important;
    bottom: auto !important;
    flex-direction: column !important;
    transform: none !important;
    align-items: center !important;
  }
    .toast-container[class*=-bottom-] {
    bottom: var(--%NS%bx-space-4, 1rem) !important;
    top: auto !important;
    flex-direction: column-reverse !important;
    transform: none !important;
    align-items: center !important;
  }
}
.toast-animator[_ngcontent-%COMP%] {
  display: grid;
  grid-template-rows: 1fr;
  transition: grid-template-rows 0.4s linear(0, 0.18 12%, 0.58 32%, 0.87 56%, 0.98 78%, 1), margin 0.4s linear(0, 0.18 12%, 0.58 32%, 0.87 56%, 0.98 78%, 1);
  margin-bottom: var(--%NS%bx-space-4, 1rem);
}
.toast-animator.is-bottom[_ngcontent-%COMP%] {
  margin-bottom: 0;
  margin-top: var(--%NS%bx-space-4, 1rem);
}
.toast-animator.collapsing[_ngcontent-%COMP%] {
  grid-template-rows: 0fr;
  margin-top: 0 !important;
  margin-bottom: 0 !important;
}
.toast-wrapper[_ngcontent-%COMP%] {
  position: relative;
  pointer-events: auto;
  opacity: 0;
  min-height: 0;
  overflow: hidden;
  transition: opacity 0.4s ease-out, transform 0.4s linear(0, 0.22 12%, 0.66 34%, 0.94 58%, 1.012 78%, 1);
}
.toast-wrapper.default-wrapper[_ngcontent-%COMP%] {
  background-color: var(--%NS%bx-toast-bg, var(--%NS%bx-bg-surface));
  color: var(--%NS%bx-toast-text, var(--%NS%bx-text-primary));
  border-radius: var(--%NS%bx-rounded-md, 0.5rem);
  box-shadow: var(--%NS%bx-shadow-toast, 0 4px 12px rgba(0, 0, 0, 0.15));
  width: 24rem;
  max-width: 100%;
}
.toast-wrapper.default-wrapper.no-bg[_ngcontent-%COMP%] {
  background-color: transparent;
}
.toast-wrapper.anim-dir-top[_ngcontent-%COMP%] {
  transform: translateY(-12px) scale(0.985);
}
.toast-wrapper.anim-dir-bottom[_ngcontent-%COMP%] {
  transform: translateY(12px) scale(0.985);
}
.toast-wrapper.show[_ngcontent-%COMP%] {
  opacity: 1;
  transform: translateY(0) scale(1);
}
.toast-wrapper.is-manipulating[_ngcontent-%COMP%] {
  transition-property: opacity;
}
.toast-wrapper.no-animate[_ngcontent-%COMP%] {
  transition: none !important;
}
.toast-wrapper.no-animate[_ngcontent-%COMP%]:not(.is-manipulating) {
  transform: none !important;
}
@media (max-width: 768px) {
  .toast-wrapper.default-wrapper[_ngcontent-%COMP%] {
    width: 100%;
  }
}
.toast-close-button[_ngcontent-%COMP%] {
  position: absolute;
  inset-block-start: 0.5rem;
  inset-inline-end: 0.5rem;
  min-inline-size: var(--%NS%bx-space-8, 2rem);
  min-block-size: var(--%NS%bx-space-8, 2rem);
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
}
.toast-progress-container[_ngcontent-%COMP%] {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 4px;
  pointer-events: none;
}
.toast-progress-bar[_ngcontent-%COMP%] {
  height: 100%;
  width: 100%;
  opacity: 0.6;
  transform-origin: left;
}
.toast-wrapper[data-bx-surface][_ngcontent-%COMP%] {
  --%NS%bx-glass-surface: var(--%NS%bx-toast-bg, var(--%NS%bx-bg-surface));
  --%NS%bx-glass-text: var(--%NS%bx-toast-text, var(--%NS%bx-text-primary));
  --%NS%bx-glass-shadow: var(--%NS%bx-shadow-toast, 0 4px 12px rgba(0, 0, 0, 0.15));
  --%NS%bx-glass-min-opacity: 0.8;
  border: var(--%NS%bx-border-width, 1px) var(--%NS%bx-border-style, solid) var(--%NS%bx-border-default);
  border-radius: var(--%NS%bx-rounded-xl, 1rem);
}
.toast-close-button[_ngcontent-%COMP%] {
  width: 2rem;
  height: 2rem;
  border-radius: var(--%NS%bx-rounded-sm, 0.25rem);
  color: inherit;
}
.toast-close-button[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--%NS%bx-border-brand);
  outline-offset: 2px;
}
.toast-wrapper.no-bg[data-bx-surface][_ngcontent-%COMP%] {
  background: transparent !important;
  -webkit-backdrop-filter: none;
  backdrop-filter: none;
  border-color: transparent;
  --%NS%bx-glass-shadow: none;
}
.toast-wrapper.no-bg[data-bx-surface][_ngcontent-%COMP%] {
  --%NS%bx-glass-decoration-opacity: 0;
}
.toast-wrapper.has-emission[_ngcontent-%COMP%]::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  pointer-events: none;
  z-index: -1;
  background:
    radial-gradient(
      ellipse at var(--%NS%bx-toast-light-x, 50%) 100%,
      color-mix(in srgb, var(--%NS%bx-toast-emission) 22%, transparent),
      transparent 65%);
}
.toast-wrapper.has-emission[_ngcontent-%COMP%] {
  --%NS%bx-glass-shadow: var(--%NS%bx-shadow-toast, 0 4px 12px rgba(0, 0, 0, 0.15)), 0 8px 24px -16px color-mix(in srgb, var(--%NS%bx-toast-emission) 55%, transparent);
}
@media (forced-colors: active), (prefers-contrast: more) {
  .toast-wrapper.has-emission[_ngcontent-%COMP%]::after {
    display: none;
  }
  .toast-wrapper.has-emission[_ngcontent-%COMP%] {
    --%NS%bx-glass-shadow: none;
  }
}`],changeDetection:1})};var es=new T(`TOAST_DATA`);var Ci=class i{injector=b(ie);applicationRef=b(mr$1);environmentInjector=b(gt$1);document=b(q);toastrGlobalSettingsService=b(vt);toastQueue=[];activeToasts=/* @__PURE__ */ new Set;containers=/* @__PURE__ */ new WeakMap;activePauses=0;isProcessingQueue=!1;queueToast(t,e){let n=this.resolveConfig(e),o=new at(n),a=n.modal,r=a?a.modalContainerElement:this.document.body,u=new Ae;if(!r)return o.completeClose(),o;let m=()=>{if(u.unsubscribe(),o.state()!==`closed`){if(a&&a.modalContainerElement!==r){o.completeClose();return}this.buildAndAttachToast(t,o,r)}};return u.add(o.afterClosed$.pipe(ps$1(1)).subscribe(()=>{let x=this.toastQueue.indexOf(m);x!==-1&&this.toastQueue.splice(x,1),this.processQueue()})),a?.afterClosed().pipe(ps$1(1),Qr$1(o.afterClosed$)).subscribe(()=>o.completeClose()),this.toastQueue.push(m),this.processQueue(),o}queueSuccess(t){return this.queueToast(Je,{position:t.position??this.toastrGlobalSettingsService.position(),modal:t.modal,data:{title:t.title,icon:t.icon,loading:t.loading,loadingLabel:t.loadingLabel,message:t.message,type:`success`},closeButtonColor:`text-success`,progressBarColor:`text-success`,hasDefaultBackground:!0,durationInMs:t.durationInMs??this.toastrGlobalSettingsService.durationInMs(),animate:t.animate??this.toastrGlobalSettingsService.animate(),showProgressBar:t.showProgessBar??this.toastrGlobalSettingsService.showProgressBar(),showCloseButton:t.showCloseButton??this.toastrGlobalSettingsService.showCloseButton()})}queueInfo(t){return this.queueToast(Je,{position:t.position??this.toastrGlobalSettingsService.position(),modal:t.modal,data:{title:t.title,icon:t.icon,loading:t.loading,loadingLabel:t.loadingLabel,message:t.message,type:`info`},closeButtonColor:`text-info`,progressBarColor:`text-info`,hasDefaultBackground:!0,durationInMs:t.durationInMs??this.toastrGlobalSettingsService.durationInMs(),animate:t.animate??this.toastrGlobalSettingsService.animate(),showProgressBar:t.showProgessBar??this.toastrGlobalSettingsService.showProgressBar(),showCloseButton:t.showCloseButton??this.toastrGlobalSettingsService.showCloseButton()})}queueWarning(t){return this.queueToast(Je,{position:t.position??this.toastrGlobalSettingsService.position(),modal:t.modal,data:{title:t.title,icon:t.icon,loading:t.loading,loadingLabel:t.loadingLabel,message:t.message,type:`warn`},closeButtonColor:`text-warn`,progressBarColor:`text-warn`,hasDefaultBackground:!0,durationInMs:t.durationInMs??this.toastrGlobalSettingsService.durationInMs(),animate:t.animate??this.toastrGlobalSettingsService.animate(),showProgressBar:t.showProgessBar??this.toastrGlobalSettingsService.showProgressBar(),showCloseButton:t.showCloseButton??this.toastrGlobalSettingsService.showCloseButton()})}queueDanger(t){return this.queueToast(Je,{position:t.position??this.toastrGlobalSettingsService.position(),modal:t.modal,data:{title:t.title,icon:t.icon,loading:t.loading,loadingLabel:t.loadingLabel,message:t.message,type:`danger`},closeButtonColor:`text-danger`,progressBarColor:`text-danger`,hasDefaultBackground:!0,durationInMs:t.durationInMs??this.toastrGlobalSettingsService.durationInMs(),animate:t.animate??this.toastrGlobalSettingsService.animate(),showProgressBar:t.showProgessBar??this.toastrGlobalSettingsService.showProgressBar(),showCloseButton:t.showCloseButton??this.toastrGlobalSettingsService.showCloseButton()})}processQueue(){if(!(this.isProcessingQueue||this.activePauses>0)){this.isProcessingQueue=!0;try{for(;this.activePauses===0&&this.activeToasts.size<this.toastrGlobalSettingsService.maxOpened()&&this.toastQueue.length>0;)this.toastQueue.shift()?.()}finally{this.isProcessingQueue=!1}}}buildAndAttachToast(t,e,n){let o=ie.create({providers:[{provide:es,useValue:e.config().data},{provide:at,useValue:e}],parent:this.injector}),a=vd(_i,{environmentInjector:this.environmentInjector,elementInjector:o}),r=vd(t,{environmentInjector:this.environmentInjector,elementInjector:o}),u=new Ae,m=e.paused();if(a.instance.componentRef=r,e.state()===`closed`){a.destroy();return}this.activeToasts.add(a),m&&this.activePauses++,u.add(e.onPause$.subscribe(()=>{m||(m=!0,this.activePauses++)})),u.add(e.onResume$.subscribe(()=>{m&&(m=!1,this.activePauses=Math.max(0,this.activePauses-1),this.activePauses===0&&this.processQueue())})),u.add(e.afterClosed$.pipe(ps$1(1)).subscribe(()=>{m&&(m=!1,this.activePauses=Math.max(0,this.activePauses-1)),this.finalizeToast(a)})),a.onDestroy(()=>{e.completeClose(),u.unsubscribe()}),e.attach(x=>a.instance.closeToast(x)),this.applicationRef.attachView(a.hostView),this.getContainer(n,e.config().position??`top-right`).appendChild(a.location.nativeElement),r.instance.onToastInit?.()}finalizeToast(t){this.activeToasts.delete(t)&&(this.applicationRef.detachView(t.hostView),t.location.nativeElement.remove(),t.hostView.destroyed||t.destroy(),this.processQueue())}getContainer(t,e){let n=this.containers.get(t)??/* @__PURE__ */ new Map,o=n.get(e);if(o)return o;let a=this.document.createElement(`div`);return a.classList.add(`toast-container`,`toast-container-${e}`),t.appendChild(a),n.set(e,a),this.containers.set(t,n),a}resolveConfig(t){let e=t?.animate??this.toastrGlobalSettingsService.animate();return s(r({},t),{position:t?.position??this.toastrGlobalSettingsService.position(),glassiness:t?.glassiness??this.toastrGlobalSettingsService.glassiness(),glassQuality:t?.glassQuality??this.toastrGlobalSettingsService.glassQuality(),animate:e,wrapperClass:t?.wrapperClass??this.toastrGlobalSettingsService.wrapperClass(),durationInMs:t?.durationInMs??this.toastrGlobalSettingsService.durationInMs(),swipeToDismiss:t?.swipeToDismiss??this.toastrGlobalSettingsService.swipeToDismiss(),showCloseButton:t?.showCloseButton??this.toastrGlobalSettingsService.showCloseButton(),closeLabel:t?.closeLabel??this.toastrGlobalSettingsService.closeLabel(),closeButtonColor:t?.closeButtonColor??this.toastrGlobalSettingsService.closeButtonColor(),showProgressBar:t?.showProgressBar??this.toastrGlobalSettingsService.showProgressBar(),progressBarColor:t?.progressBarColor??this.toastrGlobalSettingsService?.progressBarColor()})}static ɵfac=function(e){return new(e||i)};static ɵprov=B({token:i,factory:i.ɵfac,providedIn:`root`})};var Eo=Object.freeze([`application/pdf`,`image/jpeg`,`image/png`,`image/webp`,`.pdf`,`.jpg`,`.jpeg`,`.png`,`.webp`]);var et={drop:`Drag files here`,browse:`Browse files`,upload:`Upload`,readOnly:`Read only`,queued:`Ready to upload`,uploading:`Uploading`,paused:`Paused`,pause:`Pause`,resume:`Resume`,pauseFailed:`Could not change upload state`,uploaded:`Uploaded`,failed:`Upload failed`,canceled:`Canceled`,retry:`Retry`,cancel:`Cancel`,remove:`Remove`,clearAll:`Clear all`,invalidType:`Unsupported file type`,invalidSize:`File is too large`,invalidCount:`File limit reached`,reviewFiles:`Review files`,filenameSeparator:`, `};function Mi(i){let t=i.acceptedTypes??Eo;return t.length?[...new Set([...t,...i.additionalTypes??[]].map(e=>e.trim().toLowerCase()).filter(Boolean))]:[]}function ts(i,t){let e=i.name.toLowerCase(),n=i.type.toLowerCase();return!t.length||t.some(o=>o.startsWith(`.`)?e.endsWith(o):o.endsWith(`/*`)?n.startsWith(o.slice(0,-1)):n===o)}function wi(i){let t=i.maxFiles??1/0,e=Number.isNaN(t)?1/0:Math.max(0,Math.floor(t));return i.multiple?e:Math.min(e,1)}var ob=[`fileInput`];var ab=[`browseTarget`];var rb=[`retryTarget`];var sb=[[[``,`bxIconStart`,``]],[[``,`bxIconEnd`,``]]];var lb=[`[bxIconStart]`,`[bxIconEnd]`];var Cn=i=>({$implicit:i});var db=(i,t)=>({$implicit:i,batchId:t});var Ro=(i,t)=>t.id;function cb(i,t){if(i&1&&(bo$1(0,`p`,14),lA(1),Go()),i&2){let e=Wo();Xl$1(),ik(e.text().hint)}}function ub(i,t){i&1&&$s$1(0)}function pb(i,t){if(i&1&&rd$1(0,ub,1,0,`ng-container`,25),i&2){Wo();let e=FT(20);xo$1(`ngTemplateOutlet`,e)(`ngTemplateOutletContext`,bb$1(2,Cn,t))}}function bb(i,t){i&1&&$s$1(0)}function mb(i,t){if(i&1&&rd$1(0,bb,1,0,`ng-container`,25),i&2){Wo();let e=FT(22);xo$1(`ngTemplateOutlet`,e)(`ngTemplateOutletContext`,bb$1(2,Cn,t))}}function gb(i,t){i&1&&$s$1(0)}function hb(i,t){if(i&1&&rd$1(0,gb,1,0,`ng-container`,25),i&2){Wo(2);let e=FT(20);xo$1(`ngTemplateOutlet`,e)(`ngTemplateOutletContext`,bb$1(2,Cn,t))}}function fb(i,t){i&1&&$s$1(0)}function vb(i,t){if(i&1&&rd$1(0,fb,1,0,`ng-container`,25),i&2){Wo(2);let e=FT(22);xo$1(`ngTemplateOutlet`,e)(`ngTemplateOutletContext`,bb$1(2,Cn,t))}}function xb(i,t){if(i&1){let e=pb$1();bo$1(0,`button`,26),br$1(`click`,function(){al$1(e);let o=Wo();return cl$1(o.start())}),bo$1(1,`span`,17),od$1(2,hb,1,4,`ng-container`),Go(),bo$1(3,`span`,18),lA(4),Go(),bo$1(5,`span`,19),od$1(6,vb,1,4,`ng-container`),Go()()}if(i&2){let e,n,o=Wo();xo$1(`disabled`,!o.editable()||!o.session().staged().length)(`bxTooltip`,(o.uploadButton()?o.buttonLabel():``)||o.text().upload)(`bxTooltipDwell`,o.tooltipDwell),Xl$1(2),nd$1((e=o.uploadButton())?2:-1,e),Xl$1(2),ik((o.uploadButton()?o.buttonLabel():``)||o.text().upload),Xl$1(2),nd$1((n=o.uploadButton())?6:-1,n)}}function yb(i,t){if(i&1&&sd$1(0,`bx-icon`,28),i&2){let e=Wo().$implicit;xo$1(`name`,e.iconStart)}}function Sb(i,t){if(i&1&&(bo$1(0,`span`,27),dd$1(1),Go(),od$1(2,yb,1,1,`bx-icon`,28)),i&2){let e=t.$implicit;Xl$1(2),nd$1(e.iconStart?2:-1)}}function _b(i,t){if(i&1&&sd$1(0,`bx-icon`,28),i&2){let e=Wo().$implicit;xo$1(`name`,e.iconEnd)}}function Cb(i,t){if(i&1&&(bo$1(0,`span`,27),dd$1(1,1),Go(),od$1(2,_b,1,1,`bx-icon`,28)),i&2){let e=t.$implicit;Xl$1(2),nd$1(e.iconEnd?2:-1)}}function Mb(i,t){if(i&1&&lA(0),i&2){let e=Wo(3);mb$1(` `,e.text().invalidType,` `)}}function wb(i,t){if(i&1&&lA(0),i&2){let e=Wo(3);mb$1(` `,e.text().invalidSize,` `)}}function Nb(i,t){if(i&1&&lA(0),i&2){let e=Wo(3);mb$1(` `,e.text().invalidCount,` `)}}function Tb(i,t){if(i&1&&(bo$1(0,`li`),lA(1),od$1(2,Mb,1,1)(3,wb,1,1)(4,Nb,1,1),Go()),i&2){let e,n=t.$implicit;Xl$1(),mb$1(` `,n.file.name,` — `),Xl$1(),nd$1((e=n.reason)===`type`?2:e===`size`?3:e===`count`?4:-1)}}function Pb(i,t){if(i&1&&(bo$1(0,`ul`,22),ab$1(1,Tb,5,2,`li`,null,MT),Go()),i&2){let e=Wo();Xl$1(),cb$1(e.rejections())}}function Ob(i,t){if(i&1){let e=pb$1();bo$1(0,`div`,23)(1,`button`,29),br$1(`click`,function(){al$1(e);let o=Wo();return cl$1(o.clearAll())}),lA(2),Go()()}if(i&2){let e=Wo();Xl$1(),xo$1(`disabled`,!e.canClear())(`bxTooltip`,e.text().clearAll)(`bxTooltipDwell`,e.tooltipDwell),Xl$1(),mb$1(` `,e.text().clearAll,` `)}}function Ib(i,t){i&1&&$s$1(0)}function Db(i,t){if(i&1){let e=pb$1();bo$1(0,`li`,31),br$1(`swipeDismissed`,function(){let o=al$1(e).$implicit,a=Wo(2);return cl$1(a.finishSwipe(o.id))}),rd$1(1,Ib,1,0,`ng-container`,25),Go()}if(i&2){let e=t.$implicit,n=Wo(2),o=FT(9),a=FT(28);xo$1(`leftSwipeActions`,n.removeActions())(`swipeDisabled`,!n.editable())(`swipeDismissFocus`,o)(`swipeTooltipDwell`,n.tooltipDwell),Xl$1(),xo$1(`ngTemplateOutlet`,a)(`ngTemplateOutletContext`,bb$1(6,Cn,e))}}function kb(i,t){i&1&&$s$1(0)}function Eb(i,t){if(i&1&&(bo$1(0,`li`),rd$1(1,kb,1,0,`ng-container`,25),Go()),i&2){let e=t.$implicit,n=Wo().$implicit;Wo(2);let o=FT(28);Xl$1(),xo$1(`ngTemplateOutlet`,o)(`ngTemplateOutletContext`,EA(2,db,e,n.id))}}function Rb(i,t){if(i&1&&ab$1(0,Eb,2,5,`li`,null,Ro),i&2){let e=t.$implicit;cb$1(e.files)}}function Lb(i,t){if(i&1&&(bo$1(0,`ul`,24),ab$1(1,Db,2,8,`li`,30,Ro),ab$1(3,Rb,2,0,null,null,Ro),Go()),i&2){let e=Wo();Xl$1(),cb$1(e.session().staged()),Xl$1(2),cb$1(e.session().batches())}}function Ab(i,t){if(i&1&&lA(0),i&2){let e=Wo(2);mb$1(` `,e.text().queued,` `)}}function Fb(i,t){if(i&1&&lA(0),i&2){let e=Wo().$implicit,n=Wo();mb$1(` `,e.paused?n.text().paused:n.text().uploading,` `)}}function Vb(i,t){if(i&1&&lA(0),i&2){let e=Wo(2);mb$1(` `,e.text().uploaded,` `)}}function zb(i,t){if(i&1&&lA(0),i&2){let e=Wo().$implicit,n=Wo();mb$1(` `,n.errors().get(e.id),` `)}}function Bb(i,t){if(i&1&&lA(0),i&2){let e=Wo(2);mb$1(` `,e.text().canceled,` `)}}function Hb(i,t){if(i&1&&(bo$1(0,`span`,37),lA(1),Go()),i&2){let e=Wo(2);Xl$1(),ik(e.text().pauseFailed)}}function Wb(i,t){if(i&1&&sd$1(0,`bx-progress-bar`,38),i&2){let e=Wo().$implicit,n=Wo();xo$1(`mode`,e.progress===void 0?`indeterminate`:`determinate`)(`value`,e.progress??0)(`label`,n.fileLabel()(e.paused?n.text().paused:n.text().uploading,e.file.name))}}function jb(i,t){if(i&1){let e=pb$1();bo$1(0,`button`,44,9),br$1(`click`,function(){al$1(e);let o=Wo(2),a=o.$implicit,r=o.batchId,u=FT(1),m=Wo();return cl$1(m.retry(r,a.id,u))}),sd$1(2,`bx-icon`,45),Go()}if(i&2){let e=Wo(2),n=e.$implicit,o=e.batchId,a=Wo();xo$1(`surfaceEffects`,!1)(`disabled`,!a.editable())(`bxTooltip`,a.text().retry)(`bxTooltipDwell`,a.tooltipDwell),vo$1(`data-batch`,o)(`aria-label`,a.fileLabel()(a.text().retry,n.file.name))}}function qb(i,t){if(i&1){let e=pb$1();bo$1(0,`button`,46),br$1(`click`,function(){al$1(e);let o=Wo(2),a=o.$implicit,r=o.batchId,u=Wo();return cl$1(u.togglePause(a,r))}),sd$1(1,`bx-icon`,47),Go()}if(i&2){let e=Wo(2).$implicit,n=Wo();xo$1(`surfaceEffects`,!1)(`disabled`,!n.editable())(`loading`,e.pausePending)(`bxTooltip`,e.paused?n.text().resume:n.text().pause)(`bxTooltipDwell`,n.tooltipDwell),vo$1(`aria-label`,n.fileLabel()(e.paused?n.text().resume:n.text().pause,e.file.name)),Xl$1(),xo$1(`name`,e.paused?`play`:`pause`)}}function $b(i,t){if(i&1){let e=pb$1();bo$1(0,`div`,39),od$1(1,jb,3,6,`button`,40),od$1(2,qb,2,7,`button`,41),bo$1(3,`button`,42),br$1(`click`,function(){al$1(e);let o=Wo(),a=o.$implicit,r=o.batchId,u=FT(1),m=Wo();return cl$1(m.activateRowAction(a,u,r))}),sd$1(4,`bx-icon`,43),Go()()}if(i&2){let e=Wo().$implicit,n=Wo();Xl$1(),nd$1(e.status===`failed`?1:-1),Xl$1(),nd$1(e.status===`uploading`&&e.pausable?2:-1),Xl$1(),xo$1(`surfaceEffects`,!1)(`disabled`,!n.canRemove(e))(`bxTooltip`,e.status===`uploading`?n.text().cancel:n.text().remove)(`bxTooltipDwell`,n.tooltipDwell),vo$1(`aria-label`,n.fileLabel()(e.status===`uploading`?n.text().cancel:n.text().remove,e.file.name))}}function Ub(i,t){if(i&1&&(bo$1(0,`div`,32,7),sd$1(2,`bx-icon`,33),bo$1(3,`div`,34)(4,`span`,35,8),SA(6,`bxTruncatedText`),bo$1(7,`bdi`),lA(8),Go()(),bo$1(9,`span`,36),od$1(10,Ab,1,1)(11,Fb,1,1)(12,Vb,1,1)(13,zb,1,1)(14,Bb,1,1),Go(),od$1(15,Hb,2,1,`span`,37),od$1(16,Wb,1,3,`bx-progress-bar`,38),Go(),od$1(17,$b,5,7,`div`,39),Go()),i&2){let e,n=t.$implicit,o=FT(5),a=Wo();tr$1(`is-failed`,n.status===`failed`),vo$1(`aria-label`,n.file.name),Xl$1(2),xo$1(`name`,a.fileIcon(n)),Xl$1(2),xo$1(`bxTooltipTouch`,o.truncated()?`tap`:`none`)(`bxTooltip`,TA(6,13,n.file.name,o.truncated()))(`bxTooltipDwell`,a.tooltipDwell),vo$1(`tabindex`,o.truncated()?0:null),Xl$1(4),ik(n.file.name),Xl$1(2),nd$1((e=n.status)===`queued`?10:e===`uploading`?11:e===`uploaded`?12:e===`failed`?13:e===`canceled`?14:-1),Xl$1(5),nd$1(n.pauseFailed?15:-1),Xl$1(),nd$1(n.status===`uploading`&&(!n.paused||n.progress!==void 0)?16:-1),Xl$1(),nd$1(n.status!==`canceled`?17:-1)}}var ns=class i{i18n=b(VQ,{optional:!0});fileInput=Sz.required(`fileInput`);browseTarget=Sz.required(`browseTarget`,{read:ke});retryTargets=Iz(`retryTarget`,{read:ke});tooltipDwell=600;validationId=`bx-upload-validation-`+qK();dragging=$(!1);rejections=$([]);readOnlyState=G(()=>this.readonly()||this.readOnly());editable=G(()=>!this.disabled()&&!this.readOnlyState());accept=G(()=>Mi(this.selection()).join(`,`)||null);manual=G(()=>this.selection().startMode!==`automatic`);browseButton=G(()=>{let t=this.button();return t&&t.action!==`upload`?t:void 0});uploadButton=G(()=>{let t=this.button();return t&&t.action===`upload`&&this.manual()?t:void 0});text=G(()=>{let t=this.session().labels,e=this.selection(),n=s(r({},et),{hint:LQ(t.hint,this.i18n)});for(let o of Object.keys(et))n[o]=LQ(t[o]??et[o],this.i18n,{maxFileSize:e.maxFileSize,maxFiles:wi(e)});return n});fileLabel=G(()=>{let t=this.session().labels.fileLabel;return this.i18n?.version?.(),(e,n)=>LQ(t??`${e} ${n}`,this.i18n,{action:e,fileName:n})});browseDescription=G(()=>this.readOnlyState()?[this.text().readOnly,this.text().hint].filter(Boolean).join(`. `):this.text().hint);errors=G(()=>{let t=/* @__PURE__ */ new Map;for(let e of this.session().batches())for(let n of e.files)n.status===`failed`&&t.set(n.id,LQ(n.error,this.i18n)||this.text().failed);return t});buttonLabel=G(()=>LQ(this.browseButton()?.label??this.uploadButton()?.label,this.i18n));removeActions=G(()=>[{id:`remove`,label:this.text().remove,icon:`trash-2`,role:`destructive`,completion:`dismiss`}]);canClear=G(()=>{if(!this.editable())return!1;let t=this.session();return!!(this.rejections().length||t.staged().length||t.batches().some(e=>e.files.some(n=>t.canRemove(n))))});session=ee.required();selection=ee({});button=ee();focusBatch=ee();disabled=ee(!1,{transform:Ye$1});readonly=ee(!1,{transform:Ye$1});readOnly=ee(!1,{transform:Ye$1});filesRejected=Pk();focusedBatch;constructor(){Vk(()=>{let t=this.focusBatch();if(this.focusedBatch===t||(this.focusedBatch=void 0,!t||!this.editable()))return;let e=this.retryTargets().find(({nativeElement:n})=>n.dataset.batch===t);e&&(this.focusedBatch=t,e.nativeElement.focus())})}browse(){this.editable()&&this.fileInput().nativeElement.click()}choose(t){let e=Array.from(t.files??[]);t.value=``,this.select(e)}dragOver(t){let e=t.dataTransfer;e?.types.includes(`Files`)&&(t.preventDefault(),e.dropEffect=this.editable()?`copy`:`none`,this.dragging.set(this.editable()))}dragLeave(t,e){(!(t.relatedTarget instanceof Node)||!e.contains(t.relatedTarget))&&this.dragging.set(!1)}drop(t){let e=t.dataTransfer;e?.types.includes(`Files`)&&(t.preventDefault(),this.dragging.set(!1),this.select(Array.from(e.files)))}start(){!this.editable()||!this.session().staged().length||(this.browseTarget().nativeElement.focus(),this.session().start())}canRemove(t){return this.editable()&&this.session().canRemove(t)}activateRowAction(t,e,n){if(this.canRemove(t)){if(t.status===`uploading`&&n!==void 0){e.focus(),this.session().cancel(n,t.id);return}this.browseTarget().nativeElement.focus(),this.session().remove(t.id,n)}}fileIcon(t){if(t.status===`canceled`)return`file-x`;if(t.status===`failed`)return`file-warning`;let e=t.file.type.toLowerCase();return e.startsWith(`image/`)?`file-image`:e.startsWith(`audio/`)?`file-audio`:e.startsWith(`video/`)?`file-video`:/zip|archive|compressed/.test(e)?`file-archive`:e.startsWith(`text/`)||/pdf|document|sheet/.test(e)?`file-text`:`file`}finishSwipe(t){this.session().remove(t)}togglePause(t,e){this.editable()&&this.session().setPaused(e,t.id,!t.paused)}clearAll(){this.canClear()&&(this.browseTarget().nativeElement.focus(),this.rejections.set([]),this.session().clearAll())}retry(t,e,n){this.editable()&&(n.focus(),this.session().retry(t,e))}select(t){if(!this.editable()||!t.length)return;let e=this.session().select(t,this.selection());this.rejections.set(e),e.length&&this.filesRejected.emit(e)}static ɵfac=function(e){return new(e||i)};static ɵcmp=Fr$1({type:i,selectors:[[`bx-file-upload`]],viewQuery:function(e,n){e&1&&Yy(n.fileInput,ob,5)(n.browseTarget,ab,5,ke)(n.retryTargets,rb,5,ke),e&2&&fb$1(3)},inputs:{session:[1,`session`],selection:[1,`selection`],button:[1,`button`],focusBatch:[1,`focusBatch`],disabled:[1,`disabled`],readonly:[1,`readonly`],readOnly:[1,`readOnly`]},outputs:{filesRejected:`filesRejected`},ngContentSelectors:lb,decls:29,vars:24,consts:[[`zone`,``],[`fileInput`,``],[`dropActions`,``],[`browseTarget`,``],[`startIcon`,``],[`endIcon`,``],[`fileRow`,``],[`row`,``],[`filenameOverflow`,`bxTruncate`],[`retryTarget`,``],[1,`drop-zone`,3,`dragover`,`dragleave`,`drop`],[`type`,`file`,`hidden`,``,3,`change`,`multiple`,`disabled`],[`name`,`cloud-upload`,`size`,`28`,`aria-hidden`,`true`,1,`drop-icon`],[1,`drop-label`],[1,`drop-hint`],[1,`drop-actions`],[`type`,`button`,`bx-button`,``,3,`click`,`variant`,`disabled`,`interactive`,`bxTooltip`,`bxTooltipDwell`],[`bxIconStart`,``,`aria-hidden`,`true`,1,`action-adornment`],[1,`action-label`],[`bxIconEnd`,``,`aria-hidden`,`true`,1,`action-adornment`],[`type`,`button`,`bx-button`,``,`variant`,`filled`,3,`disabled`,`bxTooltip`,`bxTooltipDwell`],[`role`,`status`,1,`validation`,3,`id`],[1,`rejections`],[1,`list-actions`],[1,`files`],[4,`ngTemplateOutlet`,`ngTemplateOutletContext`],[`type`,`button`,`bx-button`,``,`variant`,`filled`,3,`click`,`disabled`,`bxTooltip`,`bxTooltipDwell`],[1,`projected-icon`],[`size`,`16`,1,`action-icon`,3,`name`],[`type`,`button`,`bx-button`,``,`variant`,`tonal`,`color`,`grayscale`,3,`click`,`disabled`,`bxTooltip`,`bxTooltipDwell`],[`bxSwipeActions`,``,3,`leftSwipeActions`,`swipeDisabled`,`swipeDismissFocus`,`swipeTooltipDwell`],[`bxSwipeActions`,``,3,`swipeDismissed`,`leftSwipeActions`,`swipeDisabled`,`swipeDismissFocus`,`swipeTooltipDwell`],[`bxSwipeContent`,``,`role`,`group`,`tabindex`,`-1`,1,`file`],[`size`,`24`,`aria-hidden`,`true`,1,`file-type-icon`,3,`name`],[1,`file-copy`],[`bxTruncate`,``,1,`file-name`,3,`bxTooltipTouch`,`bxTooltip`,`bxTooltipDwell`],[`aria-live`,`polite`,1,`file-state`],[`role`,`status`,1,`file-state`,`pause-error`],[3,`mode`,`value`,`label`],[1,`file-controls`],[`type`,`button`,`bx-button`,``,`variant`,`text`,`color`,`danger`,1,`file-icon`,`is-retry`,3,`surfaceEffects`,`disabled`,`bxTooltip`,`bxTooltipDwell`],[`type`,`button`,`bx-button`,``,`variant`,`text`,1,`file-icon`,3,`surfaceEffects`,`disabled`,`loading`,`bxTooltip`,`bxTooltipDwell`],[`type`,`button`,`bx-button`,``,`variant`,`text`,1,`file-icon`,3,`click`,`surfaceEffects`,`disabled`,`bxTooltip`,`bxTooltipDwell`],[`name`,`x`,`size`,`20`,`aria-hidden`,`true`],[`type`,`button`,`bx-button`,``,`variant`,`text`,`color`,`danger`,1,`file-icon`,`is-retry`,3,`click`,`surfaceEffects`,`disabled`,`bxTooltip`,`bxTooltipDwell`],[`name`,`rotate-cw`,`size`,`20`,`aria-hidden`,`true`],[`type`,`button`,`bx-button`,``,`variant`,`text`,1,`file-icon`,3,`click`,`surfaceEffects`,`disabled`,`loading`,`bxTooltip`,`bxTooltipDwell`],[`size`,`20`,`aria-hidden`,`true`,3,`name`]],template:function(e,n){if(e&1){let o=pb$1();ld$1(sb),bo$1(0,`div`,10,0),br$1(`dragover`,function(r){return n.dragOver(r)})(`dragleave`,function(r){al$1(o);let u=FT(1);return cl$1(n.dragLeave(r,u))})(`drop`,function(r){return n.drop(r)}),bo$1(2,`input`,11,1),br$1(`change`,function(){al$1(o);let r=FT(3);return cl$1(n.choose(r))}),Go(),sd$1(4,`bx-icon`,12),bo$1(5,`p`,13),lA(6),Go(),od$1(7,cb,2,1,`p`,14),bo$1(8,`div`,15,2)(10,`button`,16,3),br$1(`click`,function(){return n.browse()}),bo$1(12,`span`,17),od$1(13,pb,1,4,`ng-container`),Go(),bo$1(14,`span`,18),lA(15),Go(),bo$1(16,`span`,19),od$1(17,mb,1,4,`ng-container`),Go()(),od$1(18,xb,7,6,`button`,20),Go()(),rd$1(19,Sb,3,1,`ng-template`,null,4,RA)(21,Cb,3,1,`ng-template`,null,5,RA),bo$1(23,`div`,21),od$1(24,Pb,3,0,`ul`,22),Go(),od$1(25,Ob,3,4,`div`,23),od$1(26,Lb,5,0,`ul`,24),rd$1(27,Ub,18,16,`ng-template`,null,6,RA)}if(e&2){let o,a;tr$1(`is-dragging`,n.dragging()&&n.editable())(`is-disabled`,n.disabled()),Xl$1(2),xo$1(`multiple`,n.selection().multiple===!0)(`disabled`,!n.editable()),vo$1(`accept`,n.accept()),Xl$1(4),ik(n.text().drop),Xl$1(),nd$1(n.text().hint?7:-1),Xl$1(3),xo$1(`variant`,n.browseButton()?`tonal`:`text`)(`disabled`,n.disabled())(`interactive`,n.editable())(`bxTooltip`,(n.browseButton()?n.buttonLabel():``)||n.text().browse)(`bxTooltipDwell`,n.tooltipDwell),vo$1(`aria-description`,n.browseDescription()||null)(`aria-describedby`,n.rejections().length?n.validationId:null),Xl$1(3),nd$1((o=n.browseButton())?13:-1,o),Xl$1(2),ik((n.browseButton()?n.buttonLabel():``)||n.text().browse),Xl$1(2),nd$1((a=n.browseButton())?17:-1,a),Xl$1(),nd$1(n.uploadButton()||n.session().staged().length?18:-1),Xl$1(5),xo$1(`id`,n.validationId),Xl$1(),nd$1(n.rejections().length?24:-1),Xl$1(),nd$1(n.rejections().length||n.session().staged().length||n.session().batches().length?25:-1),Xl$1(),nd$1(n.session().staged().length||n.session().batches().length?26:-1)}},dependencies:[_e,ZC,Bn,Ta,Hs$1,ft,Pt,ct,on$1],styles:[`
[_nghost-%COMP%] {
  display: block;
  min-inline-size: 0;
}
.drop-zone[_ngcontent-%COMP%] {
  display: grid;
  justify-items: center;
  gap: var(--%NS%bx-space-2, 0.5rem);
  min-inline-size: 0;
  padding: var(--%NS%bx-file-upload-padding, var(--%NS%bx-space-5, 1.25rem));
  border: var(--%NS%bx-file-upload-border-width, var(--%NS%bx-border-width, 1px)) dashed var(--%NS%bx-file-upload-border, var(--%NS%bx-border-strong));
  border-radius: var(--%NS%bx-file-upload-radius, var(--%NS%bx-rounded-lg, 0.75rem));
  background: var(--%NS%bx-file-upload-background, var(--%NS%bx-bg-neutral));
  color: var(--%NS%bx-text-heading);
  text-align: center;
  overflow-wrap: anywhere;
}
.drop-zone.is-dragging[_ngcontent-%COMP%] {
  border-color: var(--%NS%bx-text-brand);
  border-style: solid;
  background: var(--%NS%bx-bg-neutral-active);
}
.drop-zone.is-disabled[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-secondary);
}
.drop-icon[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-brand);
}
.drop-label[_ngcontent-%COMP%], 
.drop-hint[_ngcontent-%COMP%] {
  margin: 0;
}
.drop-label[_ngcontent-%COMP%], 
.file-name[_ngcontent-%COMP%] {
  font-weight: 600;
}
.drop-hint[_ngcontent-%COMP%], 
.file-state[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-secondary);
  font-size: 0.875rem;
}
.drop-actions[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--%NS%bx-space-2, 0.5rem);
  max-inline-size: 100%;
}
.drop-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], 
.list-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {
  min-block-size: 2.75rem;
  max-inline-size: 100%;
  white-space: normal;
}
.action-adornment[_ngcontent-%COMP%] {
  align-items: center;
  flex: none;
}
.action-adornment[_ngcontent-%COMP%]:empty, 
.action-adornment[_ngcontent-%COMP%]:has(.projected-icon:empty):not(:has(.action-icon)) {
  display: none;
}
.projected-icon[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
}
.projected-icon[_ngcontent-%COMP%]:empty, 
.projected-icon[_ngcontent-%COMP%]:not(:empty)    + .action-icon[_ngcontent-%COMP%] {
  display: none;
}
.action-label[_ngcontent-%COMP%] {
  min-inline-size: 0;
}
.files[_ngcontent-%COMP%], 
.rejections[_ngcontent-%COMP%] {
  display: grid;
  gap: var(--%NS%bx-space-2, 0.5rem);
  margin: var(--%NS%bx-space-3, 0.75rem) 0 0;
  padding: 0;
  list-style: none;
  overflow-wrap: anywhere;
}
.rejections[_ngcontent-%COMP%], 
.pause-error[_ngcontent-%COMP%], 
.is-failed[_ngcontent-%COMP%]   .file-state[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-danger-readable, var(--%NS%bx-text-danger));
}
.list-actions[_ngcontent-%COMP%] {
  display: flex;
  justify-content: flex-end;
  margin-block-start: var(--%NS%bx-space-2, 0.5rem);
}
.file[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: var(--%NS%bx-space-2, 0.5rem);
  padding: var(--%NS%bx-space-3, 0.75rem);
  border: var(--%NS%bx-border-width, 1px) solid var(--%NS%bx-border-subtle);
  border-radius: var(--%NS%bx-rounded-md, 0.5rem);
  background: var(--%NS%bx-file-upload-row-background, var(--%NS%bx-bg-neutral));
}
.file[_ngcontent-%COMP%]:focus {
  outline: 2px solid var(--%NS%bx-text-brand);
  outline-offset: -2px;
}
.file-type-icon[_ngcontent-%COMP%] {
  flex: none;
  color: var(--%NS%bx-text-secondary);
}
.is-failed[_ngcontent-%COMP%]   .file-type-icon[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-danger-readable, var(--%NS%bx-text-danger));
}
.file-controls[_ngcontent-%COMP%] {
  display: flex;
  flex: none;
  align-items: center;
  gap: var(--%NS%bx-space-1, 0.25rem);
}
.file-icon.bx-btn[_ngcontent-%COMP%] {
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
.file-icon.bx-btn[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--%NS%bx-border-brand);
  outline-offset: 0;
}
.file-icon.bx-btn[_ngcontent-%COMP%]:hover:not(:disabled) {
  color: var(--%NS%bx-text-primary);
  background: var(--%NS%bx-bg-element-hover);
}
.file-icon.bx-btn[_ngcontent-%COMP%]:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}
.file-icon.bx-btn[_ngcontent-%COMP%] {
  inline-size: var(--%NS%bx-space-8, 2rem);
  block-size: var(--%NS%bx-space-8, 2rem);
}
.file-icon.bx-btn.is-retry[_ngcontent-%COMP%]:not(:disabled) {
  color: var(--%NS%bx-text-danger-readable, var(--%NS%bx-text-danger));
}
.file-name[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--%NS%bx-border-brand);
  outline-offset: 2px;
}
.file-copy[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  flex: 1 1 7rem;
  gap: var(--%NS%bx-space-1, 0.25rem);
  min-inline-size: 0;
}
@media (forced-colors: active) {
  .drop-zone.is-dragging[_ngcontent-%COMP%] {
    border-color: Highlight;
  }
}`]})};function Gb(i,t){i&1&&sd$1(0,`bx-loading-spinner`,14),i&2&&xo$1(`size`,24)(`decorative`,!0)}function Kb(i,t){if(i&1&&sd$1(0,`bx-icon`,15),i&2){let e=Wo().$implicit;xo$1(`name`,e===`success`?`check`:e===`failure`?`circle-alert`:`pause`)}}function Zb(i,t){if(i&1&&od$1(0,Gb,1,2,`bx-loading-spinner`,14)(1,Kb,1,1,`bx-icon`,15),i&2){let e=t.$implicit;nd$1(e===`loading`?0:1)}}function Xb(i,t){if(i&1&&(bo$1(0,`bdi`),lA(1),Go()),i&2){let e=Wo(3);Xl$1(),ik(e.failedCount())}}function Yb(i,t){if(i&1&&(bo$1(0,`bdi`),lA(1),Go()),i&2){let e=Wo(3);Xl$1(),ik(e.canceledCount())}}function Qb(i,t){if(i&1&&(bo$1(0,`div`,7)(1,`bdi`),lA(2),Go(),od$1(3,Xb,2,1,`bdi`),od$1(4,Yb,2,1,`bdi`),Go()),i&2){let e=Wo(),n=Wo();Xl$1(2),ik(n.uploadedCount()),Xl$1(),nd$1(e.failed?3:-1),Xl$1(),nd$1(e.canceled?4:-1)}}function Jb(i,t){if(i&1&&(bo$1(0,`p`,8),lA(1),Go()),i&2){let e=Wo(2);Xl$1(),ik(e.contextTitle())}}function em(i,t){if(i&1&&(bo$1(0,`span`),lA(1),Go()),i&2){let e=Wo(3);Xl$1(),ik(e.filenameSeparator())}}function tm(i,t){if(i&1&&(od$1(0,em,2,1,`span`),bo$1(1,`bdi`),lA(2),Go()),i&2){let e=t.$implicit,n=t.$index;nd$1(n!==0?0:-1),Xl$1(2),ik(e)}}function nm(i,t){if(i&1){let e=pb$1();bo$1(0,`button`,16),br$1(`click`,function(){al$1(e);let o=Wo();return cl$1(o.retry())}),sd$1(1,`bx-icon`,17),Go()}if(i&2){let e=Wo(2);xo$1(`surfaceEffects`,!1)(`bxTooltip`,e.retry())(`bxTooltipDwell`,400),vo$1(`aria-label`,e.retry())(`aria-describedby`,e.summaryId)}}function im(i,t){if(i&1&&sd$1(0,`bx-progress-bar`,12),i&2){let e=Wo(),n=Wo();xo$1(`mode`,e.progress===null?`indeterminate`:`determinate`)(`value`,e.progress??0)(`label`,e.paused?n.paused():n.uploading())}}function om(i,t){if(i&1&&(bo$1(0,`a`,13),lA(1),Go()),i&2){let e=Wo(),n=Wo();xo$1(`routerLink`,e.returnUrl)(`bxTooltip`,n.reviewFiles())(`bxTooltipDwell`,400),vo$1(`aria-describedby`,n.summaryId),Xl$1(),mb$1(` `,n.reviewFiles(),` `)}}function am(i,t){if(i&1&&(bo$1(0,`div`,1)(1,`span`,2)(2,`bx-visual-transition`,3),rd$1(3,Zb,2,1,`ng-template`),Go()(),bo$1(4,`div`,4)(5,`div`,5)(6,`h4`,6)(7,`bdi`),lA(8),Go()(),od$1(9,Qb,5,3,`div`,7),Go(),od$1(10,Jb,2,1,`p`,8),bo$1(11,`div`,9)(12,`p`,10,0),SA(14,`bxTruncatedText`),ab$1(15,tm,3,2,null,null,MT),Go(),od$1(17,nm,2,5,`button`,11),Go(),od$1(18,im,1,3,`bx-progress-bar`,12),od$1(19,om,2,5,`a`,13),Go()()),i&2){let e=t,n=FT(13),o=Wo();vo$1(`data-kind`,e.kind),Xl$1(2),xo$1(`value`,e.kind===`progress`&&!e.paused?`loading`:e.kind),Xl$1(4),xo$1(`id`,o.summaryId),Xl$1(2),ik(e.kind===`progress`?e.paused?o.paused():o.uploading():o.outcomeMessage()),Xl$1(),nd$1(e.kind===`progress`?9:-1),Xl$1(),nd$1(o.contextTitle()?10:-1),Xl$1(2),xo$1(`bxTooltipTouch`,n.truncated()?`tap`:`none`)(`bxTooltip`,TA(14,13,o.filenames(),n.truncated()))(`bxTooltipDwell`,400),vo$1(`tabindex`,n.truncated()?0:null),Xl$1(3),cb$1(e.filenames),Xl$1(2),nd$1(e.kind===`failure`&&e.retry?17:-1),Xl$1(),nd$1(e.kind===`progress`&&(!e.paused||e.progress!==null)?18:-1),Xl$1(),nd$1(e.kind===`failure`&&e.returnUrl?19:-1)}}var Ni=class i extends an{i18n=b(VQ,{optional:!0});summaryId=`bx-upload-toast-`+qK();contextTitle=G(()=>LQ(this.data()?.labels?.toastTitle,this.i18n));uploading=G(()=>LQ(this.data()?.labels?.uploading??et.uploading,this.i18n));paused=G(()=>LQ(this.data()?.labels?.paused??et.paused,this.i18n));retry=G(()=>LQ(this.data()?.labels?.retry??et.retry,this.i18n));uploadedCount=G(()=>this.count(`uploaded`,this.data()?.labels?.uploadedCount));failedCount=G(()=>this.count(`failed`,this.data()?.labels?.failedCount));canceledCount=G(()=>this.count(`canceled`,this.data()?.labels?.canceledCount));reviewFiles=G(()=>LQ(this.data()?.labels?.reviewFiles??et.reviewFiles,this.i18n));filenameSeparator=G(()=>LQ(this.data()?.labels?.filenameSeparator??et.filenameSeparator,this.i18n));filenames=G(()=>this.data()?.filenames.join(this.filenameSeparator())??``);outcomeMessage=G(()=>{let t=this.data();if(!t||t.kind===`progress`)return``;let e=t.kind===`success`,n=e?t.uploaded:t.failed,o=e?t.labels?.successMessage:t.labels?.failureMessage,a=e?`${n} ${n===1?`file`:`files`} successfully uploaded`:`${n} ${n===1?`upload`:`uploads`} failed`;return LQ(o??a,this.i18n,{count:n,total:t.total})});count(t,e){let n=this.data(),o=n?.[t]??0,a=n?.total??0;return LQ(e??`${o} / ${a} ${t}`,this.i18n,{count:o,total:a})}static ɵfac=(()=>{let t;return function(n){return(t||(t=ho$1(i)))(n||i)}})();static ɵcmp=Fr$1({type:i,selectors:[[`bx-file-upload-toast`]],features:[yt],decls:1,vars:1,consts:[[`filenamesOverflow`,`bxTruncate`],[1,`toast-content`],[`aria-hidden`,`true`,1,`toast-icon`],[3,`value`],[1,`toast-copy`],[`role`,`status`,`aria-atomic`,`true`,1,`toast-summary`],[3,`id`],[1,`counts`],[1,`toast-context`],[1,`toast-details`],[`bxTruncate`,``,1,`toast-filenames`,3,`bxTooltipTouch`,`bxTooltip`,`bxTooltipDwell`],[`type`,`button`,`bx-button`,``,`variant`,`text`,`color`,`danger`,1,`toast-retry`,3,`surfaceEffects`,`bxTooltip`,`bxTooltipDwell`],[3,`mode`,`value`,`label`],[`bx-button`,``,`variant`,`tonal`,`color`,`grayscale`,1,`toast-action`,3,`routerLink`,`bxTooltip`,`bxTooltipDwell`],[3,`size`,`decorative`],[`size`,`24`,3,`name`],[`type`,`button`,`bx-button`,``,`variant`,`text`,`color`,`danger`,1,`toast-retry`,3,`click`,`surfaceEffects`,`bxTooltip`,`bxTooltipDwell`],[`name`,`rotate-cw`,`size`,`20`,`aria-hidden`,`true`]],template:function(e,n){if(e&1&&od$1(0,am,20,16,`div`,1),e&2){let o;nd$1((o=n.data())?0:-1,o)}},dependencies:[_e,ZC,Et,Hs$1,$i,Pt,ct,Wu$1,on$1],styles:[`
.toast-content[_ngcontent-%COMP%] {
  --%NS%upload-toast-icon: var(--%NS%bx-text-info);
  display: flex;
  align-items: flex-start;
  gap: var(--%NS%bx-space-3, 0.75rem);
  padding: var(--%NS%bx-space-4, 1rem);
  padding-inline-end: var(--%NS%bx-space-10, 2.5rem);
}
.toast-content[data-kind=success][_ngcontent-%COMP%] {
  --%NS%upload-toast-icon: var(--%NS%bx-text-success);
}
.toast-content[data-kind=failure][_ngcontent-%COMP%] {
  --%NS%upload-toast-icon: var(--%NS%bx-text-danger);
}
.toast-icon[_ngcontent-%COMP%] {
  display: inline-grid;
  flex: none;
  place-items: center;
  min-inline-size: var(--%NS%bx-space-6, 1.5rem);
  min-block-size: var(--%NS%bx-space-6, 1.5rem);
  color: var(--%NS%upload-toast-icon);
}
.toast-copy[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  justify-items: start;
  flex: 1;
  gap: var(--%NS%bx-space-1, 0.25rem);
  min-inline-size: 0;
  color: var(--%NS%bx-text-secondary);
  overflow-wrap: anywhere;
}
.toast-copy[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {
  margin: 0;
  color: var(--%NS%bx-text-heading);
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.5;
}
.toast-copy[_ngcontent-%COMP%]   bx-progress-bar[_ngcontent-%COMP%] {
  --%NS%bx-progress-color: var(--%NS%upload-toast-icon);
  margin-block-start: var(--%NS%bx-space-2, 0.5rem);
}
.toast-context[_ngcontent-%COMP%], 
.toast-filenames[_ngcontent-%COMP%], 
.counts[_ngcontent-%COMP%] {
  margin: 0;
  font-size: 0.875rem;
  line-height: 1.4;
}
.toast-details[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  column-gap: var(--%NS%bx-space-2, 0.5rem);
  inline-size: 100%;
}
.toast-filenames[_ngcontent-%COMP%] {
  flex: 1;
  min-inline-size: 0;
}
.toast-filenames[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--%NS%bx-border-brand);
  outline-offset: 2px;
}
.counts[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  column-gap: var(--%NS%bx-space-3, 0.75rem);
  margin-block-start: var(--%NS%bx-space-1, 0.25rem);
  font-variant-numeric: tabular-nums;
}
.toast-action[_ngcontent-%COMP%] {
  margin-block-start: var(--%NS%bx-space-2, 0.5rem);
  min-block-size: 2.75rem;
  max-inline-size: 100%;
  text-align: start;
  white-space: normal;
}
.toast-retry.bx-btn[_ngcontent-%COMP%] {
  flex: none;
  inline-size: 2.75rem;
  block-size: 2.75rem;
  padding: 0;
}`]})};var Ti=class{constructor(t,e,n,o){this.options=t;this.toastrService=e;this.toastrGlobalSettingsService=n;this.router=o;this.labels=r({},t.labels),this.cancelable=t.cancelable??!1,t.notifications&&t.notifications.returnTo&&o&&(this.navigation=o.events.pipe(Dr$1(a=>a instanceof Xe$1)).subscribe(()=>{for(let[a,r]of this.batchRuns)for(let u of r)this.syncToast(a,u)}))}options;toastrService;toastrGlobalSettingsService;router;staging=$([]);transfers=$([]);attempts=/* @__PURE__ */ new Map;batchRuns=/* @__PURE__ */ new Map;fileRuns=/* @__PURE__ */ new Map;destinations=/* @__PURE__ */ new Map;navigation;staged=this.staging.asReadonly();batches=this.transfers.asReadonly();files=G(()=>[...this.staged().map(t=>this.createFileControl(t)),...this.batches().flatMap(t=>t.files.map(e=>this.createFileControl(e,t.id)))]);labels;cancelable;nextId=0;disposed=!1;select(t,e={}){if(this.disposed)return[];let n=e.startMode===`automatic`,o=e.multiple&&!n?this.staging():[],a=Mi(e),r=wi(e),u=e.maxFileSize??1/0,m=[],x=[];for(let P of t)ts(P,a)?P.size>Math.max(0,u)?x.push({file:P,reason:`size`}):o.length+m.length>=r?x.push({file:P,reason:`count`}):m.push({id:`file-${++this.nextId}`,file:P,status:`queued`}):x.push({file:P,reason:`type`});return m.length&&(n?this.startBatch(m):this.staging.set([...o,...m])),x}canRemove(t){return!this.disposed&&(t.status!==`uploading`||this.cancelable)}remove(t,e){if(this.disposed)return;if(e===void 0){this.staging.update(o=>o.filter(a=>a.id!==t));return}let n=this.transfers().find(o=>o.id===e);n&&this.removeBatchFiles(n,n.files.filter(o=>o.id===t&&this.canRemove(o)))}clearAll(){if(this.disposed)return;let t=this.transfers().map(e=>e.id);this.staging.set([]);for(let e of t){let n=this.transfers().find(o=>o.id===e);n&&this.removeBatchFiles(n,n.files.filter(o=>this.canRemove(o)))}}start(){let t=this.staging();this.disposed||!t.length||(this.staging.set([]),this.startBatch(t))}retry(t,e){let n=this.transfers().find(a=>a.id===t),o=n?.files.find(a=>a.id===e);!this.disposed&&n&&o?.status===`failed`&&this.request(n,[o],!0)}setPaused(t,e,n){let o=this.transfers().find(x=>x.id===t)?.files.find(x=>x.id===e),a=this.attempts.get(e),r=a?.pauseHandler;if(!o||!r||!a||!this.isCurrent(e,a)||o.pausePending||n===(o.paused??!1))return;let u=()=>{this.isCurrent(e,a)&&this.updateFile(t,e,{pausePending:!1,pauseFailed:!0})},m=()=>{this.isCurrent(e,a)&&this.updateFile(t,e,{paused:n,pausePending:!1})};this.updateFile(t,e,{pausePending:!0,pauseFailed:!1});try{let x=r(n,a.abortController.signal);x?x.then(m,u):m()}catch{u()}}cancel(t,e){let n=this.transfers().find(a=>a.id===t),o=this.attempts.get(e);!this.cancelable||!o||!n?.files.some(a=>a.id===e)||(this.attempts.delete(e),o.abortController.abort(),this.updateFile(t,e,{status:`canceled`,progress:void 0,pausable:!1,paused:!1,pausePending:!1,pauseFailed:!1}))}clearBatch(t){let e=this.transfers().find(n=>n.id===t);!e||e.files.some(n=>n.status===`uploading`||n.status===`queued`)||this.forgetBatch(t)}destroy(){if(!this.disposed){this.disposed=!0,this.navigation?.unsubscribe();for(let t of this.attempts.values())t.abortController.abort();for(let t of this.batchRuns.values())for(let e of t)for(let n of e.toasts.values())n.close();this.attempts.clear(),this.batchRuns.clear(),this.fileRuns.clear(),this.destinations.clear(),this.staging.set([]),this.transfers.set([])}}createFileControl(t,e){let n=t.status===`uploading`,o=n&&!!t.pausable&&!t.pausePending,a=r=>{e!==void 0&&this.setPaused(e,t.id,r)};return s(r({},t),{batchId:e,canPause:o&&!t.paused,canResume:o&&!!t.paused,canRetry:t.status===`failed`,canCancel:n&&this.cancelable,canRemove:this.canRemove(t),pause:()=>a(!0),resume:()=>a(!1),retry:()=>{e!==void 0&&this.retry(e,t.id)},cancel:()=>{e!==void 0&&this.cancel(e,t.id)},remove:()=>this.remove(t.id,e)})}startBatch(t){let e={id:qK(),total:t.length,files:t};if(this.options.notifications&&this.options.notifications.returnTo&&this.router){let n=this.options.notifications.returnTo(e.id);this.destinations.set(e.id,[n,Ao(n,this.router,{paths:`exact`,queryParams:`ignored`,fragment:`ignored`})])}this.transfers.update(n=>[e,...n]),this.request(e,t,!1)}request(t,e,n){let o=new Set(e.map(m=>m.id)),a=s(r({},t),{files:t.files.map(m=>o.has(m.id)?s(r({},m),{status:`uploading`,progress:void 0,error:void 0}):m)}),r$9=e.map(m=>this.createAttempt(t.id,m));this.replaceBatch(a),this.startRun(t.id,e);let u=()=>r$9.forEach(m=>m.fail());try{let m=this.options.upload({batchId:t.id,retry:n,files:r$9});m&&m.then(()=>r$9.forEach(x=>x.complete()),u)}catch{u()}}startRun(t,e){if(this.options.notifications===!1)return;let n={files:/* @__PURE__ */ new Map,toasts:/* @__PURE__ */ new Map},o=/* @__PURE__ */ new Set,a=this.batchRuns.get(t)??[];for(let r$10 of e){let u=this.fileRuns.get(r$10.id),m=u?.files.get(r$10.id);u&&m&&(u.files.set(r$10.id,s(r({},m),{availability:`retried`})),o.add(u)),n.files.set(r$10.id,{name:r$10.file.name,status:`uploading`}),this.fileRuns.set(r$10.id,n)}a.push(n),this.batchRuns.set(t,a);for(let r of o)this.syncToast(t,r),!r.toasts.size&&[...r.files.values()].every(u=>u.availability===`retried`)&&a.splice(a.indexOf(r),1);this.syncToast(t,n)}createAttempt(t,e){let n={abortController:new AbortController};return this.attempts.set(e.id,n),{id:e.id,file:e.file,signal:n.abortController.signal,reportProgress:o=>{if(!this.isCurrent(e.id,n)||o!==void 0&&!Number.isFinite(o))return;this.transfers().find(r=>r.id===t)?.files.find(r=>r.id===e.id)?.paused||this.updateFile(t,e.id,{progress:o===void 0?void 0:Math.max(0,Math.min(100,o))})},setPauseHandler:o=>{this.isCurrent(e.id,n)&&(n.pauseHandler=o,this.updateFile(t,e.id,{pausable:!0}))},complete:()=>this.finish(t,e.id,n,`uploaded`),fail:o=>this.finish(t,e.id,n,`failed`,o)}}isCurrent(t,e){return!this.disposed&&this.attempts.get(t)===e}finish(t,e,n,o,a){this.isCurrent(e,n)&&(this.attempts.delete(e),this.updateFile(t,e,{status:o,error:a,progress:o===`uploaded`?100:void 0,pausable:!1,paused:!1,pausePending:!1,pauseFailed:!1}))}updateFile(t,e,n){let o=this.transfers().find(x=>x.id===t),a=o?.files.find(x=>x.id===e);if(!o||!a)return;let r$11=r(r({},a),n),u=this.fileRuns.get(e),m=u?.files.get(e);this.replaceBatch(s(r({},o),{files:o.files.map(x=>x.id===e?r$11:x)})),u&&m&&(u.files.set(e,s(r({},m),{status:r$11.status,progress:r$11.progress,paused:r$11.paused})),this.syncToast(t,u))}replaceBatch(t){this.transfers.update(e=>e.map(n=>n.id===t.id?t:n))}removeBatchFiles(t,e){if(!e.length)return;let n=new Set(e.map(u=>u.id)),o=t.files.filter(u=>!n.has(u.id)),a=/* @__PURE__ */ new Set,r$12=[];for(let u of e){let m=this.attempts.get(u.id),x=this.fileRuns.get(u.id),P=x?.files.get(u.id);m&&(this.attempts.delete(u.id),r$12.push(m.abortController)),x&&P&&(x.files.set(u.id,s(r({},P),{availability:`removed`,status:u.status===`uploading`?`canceled`:u.status})),this.fileRuns.delete(u.id),a.add(x))}if(o.length){this.replaceBatch(s(r({},t),{files:o}));for(let u of a)this.syncToast(t.id,u)}else this.forgetBatch(t.id);for(let u of r$12)u.abort()}forgetBatch(t){this.transfers.update(e=>e.filter(n=>n.id!==t));for(let e of this.batchRuns.get(t)??[]){for(let n of e.toasts.values())n.close();for(let n of e.files.keys())this.fileRuns.delete(n)}this.batchRuns.delete(t),this.destinations.delete(t)}syncToast(t,e){let n=this.options.notifications;if(n===!1||this.disposed)return;let[o,a]=this.destinations.get(t)??[],r$13=[...e.files.values()],u=r$13.length,m=r$13.filter(ee=>ee.status===`uploading`),x=m.length>0,P=x&&m.every(ee=>ee.paused),D=r$13.filter(ee=>ee.status===`uploaded`),L=r$13.filter(ee=>ee.status===`failed`&&ee.availability!==`retried`),V=L.some(ee=>ee.availability===void 0),Q=r$13.filter(ee=>ee.status===`canceled`).length,J=m.some(ee=>ee.progress===void 0)?null:(u-m.length+m.reduce((ee,Pi)=>ee+(Pi.progress??0)/100,0))/u*100,O=V?o??null:null,Z=V&&!O?()=>this.retryFailed(t,e):null,re={total:u,uploaded:D.length,failed:L.length,canceled:Q,paused:P,progress:J,returnUrl:O,retry:Z,labels:this.labels},{toasts:he}=e,Ge=n?.durationInMs??this.toastrGlobalSettingsService.durationInMs();if(x){(he.has(`progress`)||a&&!a())&&this.showToast(he,s(r({},re),{kind:`progress`,filenames:r$13.map(ee=>ee.name)}),0);return}let Ie=he.get(`progress`),rt=re.uploaded>0&&n?.success!==!1&&he.get(`success`)?.data()?.uploaded!==re.uploaded;he.delete(`progress`),rt&&Ie&&(Ie.state()===`queued`||Ie.state()===`open`)?he.set(`success`,Ie):Ie?.close(),rt&&this.showToast(he,s(r({},re),{kind:`success`,filenames:D.map(ee=>ee.name)}),Ge,!0),re.failed>0?this.showToast(he,s(r({},re),{kind:`failure`,filenames:L.map(ee=>ee.name)}),V?0:Ge):(he.get(`failure`)?.close(),he.delete(`failure`))}showToast(t,e,n,o=!1){let a=t.get(e.kind),r=e.kind===`failure`?`text-danger`:e.kind===`success`?`text-success`:`text-info`,u=e.kind===`success`&&this.toastrGlobalSettingsService.showProgressBar();if(a&&(!o||a.state()!==`closed`&&a.state()!==`closing`)){let P=a.config().durationInMs!==n||o;a.patch({data:e,durationInMs:P?n:void 0,closeButtonColor:r,progressBarColor:r,showProgressBar:u});return}let m=this.options.notifications,x=this.toastrService.queueToast(Ni,{data:e,position:m?m.position:void 0,durationInMs:n,closeButtonColor:r,progressBarColor:r,showProgressBar:u});t.set(e.kind,x)}retryFailed(t,e){let n=this.transfers().find(a=>a.id===t),o=n?.files.filter(a=>a.status===`failed`&&this.fileRuns.get(a.id)===e)??[];!this.disposed&&n&&o.length&&this.request(n,o,!0)}};var is=class i{router=b(dt,{optional:!0});toastrGlobalSettingsService=b(vt);toastrService=b(Ci);createSession(t,e){let n=new Ti(t,this.toastrService,this.toastrGlobalSettingsService,this.router);return e?.onDestroy(()=>n.destroy()),n}static ɵfac=function(e){return new(e||i)};static ɵprov=B({token:i,factory:i.ɵfac,providedIn:`root`})};export{is as A,th as B,bn as C,eh as D,dh as E,oh as F,xi as G,un as H,pn as I,qr as L,lh as M,nh as N,ft as O,ns as P,rh as R,at as S,ch as T,vi as U,tn as V,vt as W,Ye as _,Gs as a,ah as b,Je as c,Lr as d,Pr as f,Wr as g,Tr as h,Fr as i,jr as j,ih as k,Jr as l,Sn as m,Br as n,Gt as o,Rr as p,Ci as r,Ja as s,Ar as t,Kr as u,_e as v,ce as w,an as x,_i as y,sh as z};