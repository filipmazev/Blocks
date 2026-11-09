import"./main-72PK7OKX.js";import{n as Z}from"./chunk-BrHceUG-.js";import{A as E,Aa as wM,Dt as MM,Ei as mp,Ia as ye,Pn as W,Qr as ie,T as DM,Ui as p,Zi as q,_ as CM,dr as b,dt as K,ea as qe,fr as bM,gi as le,h as Be,jn as Ve,r as $a,t as $,w as D,y as Ca,zt as Ne}from"./chunk-CwZ5dsYL.js";var O=class p$1{destroyRef=p(W);deviceTypeService=p(Ca);document=p(ie);deviceState=E(this.deviceTypeService.getDeviceState());deviceCategory=b(()=>{let r=this.deviceState();return r.isTablet?`Tablet`:r.isMobile?`Mobile`:`Desktop`});orientation=b(()=>this.deviceState().isLandscapeOrientation()?`Landscape`:`Portrait`);constructor(){Be(()=>{let r=this.document.defaultView?.screen.orientation;this.refreshDevice(),r&&$a(r,`change`).pipe(mp(this.destroyRef)).subscribe(()=>this.refreshDevice())})}refreshDevice(){this.deviceState.set(this.deviceTypeService.getDeviceState())}static ɵfac=function(d){return new(d||p$1)};static ɵcmp=q({type:p$1,selectors:[[`app-device`]],decls:49,vars:12,consts:[[3,`gap`],[`minColumnWidth`,`16rem`],[`title`,`Device snapshot`],[`data-device-category`,``,1,`metric`],[`leadingIcon`,`smartphone`,`data-orientation`,``,3,`text`,`focusable`],[`direction`,`horizontal`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,3,`click`],[`title`,`Platform hints`],[`title`,`Device identity and viewport size are separate`,`message`,`Resizing a desktop window changes its viewport, while its device category stays desktop. This demo refreshes on screen orientation changes; you can also refresh it manually.`]],template:function(d,a){d&1&&(K(0,`bx-stack`,0)(1,`bx-grid`,1)(2,`bx-card`,2)(3,`bx-stack`,0)(4,`p`,3),Ne(5),$(),Ve(6,`bx-tag`,4),K(7,`dl`)(8,`div`)(9,`dt`),Ne(10,`Desktop OS`),$(),K(11,`dd`),Ne(12),$()(),K(13,`div`)(14,`dt`),Ne(15,`Mobile OS`),$(),K(16,`dd`),Ne(17),$()()(),K(18,`bx-stack`,5)(19,`button`,6),ye(`click`,function(){return a.refreshDevice()}),Ne(20,`Refresh detection`),$()()()(),K(21,`bx-card`,7)(22,`dl`)(23,`div`)(24,`dt`),Ne(25,`Apple device`),$(),K(26,`dd`),Ne(27),$()(),K(28,`div`)(29,`dt`),Ne(30,`Android device`),$(),K(31,`dd`),Ne(32),$()(),K(33,`div`)(34,`dt`),Ne(35,`Windows desktop`),$(),K(36,`dd`),Ne(37),$()(),K(38,`div`)(39,`dt`),Ne(40,`Linux or Unix desktop`),$(),K(41,`dd`),Ne(42),$()(),K(43,`div`)(44,`dt`),Ne(45,`Unknown mobile OS`),$(),K(46,`dd`),Ne(47),$()()()()(),Ve(48,`bx-alert`,8),$()),d&2&&(le(`gap`,5),D(3),le(`gap`,4),D(2),qe(a.deviceCategory()),D(),le(`text`,a.orientation()+` screen`)(`focusable`,!1),D(6),qe(a.deviceState().desktopOS??`Not detected`),D(5),qe(a.deviceState().mobileOS??`Not detected`),D(10),qe(a.deviceState().isAppleDevice?`Yes`:`No`),D(5),qe(a.deviceState().isAndroidDevice?`Yes`:`No`),D(5),qe(a.deviceState().isWindowsDesktop?`Yes`:`No`),D(5),qe(a.deviceState().isLinuxOrUnixDesktop?`Yes`:`No`),D(5),qe(a.deviceState().isUnknownMobileDevice?`Yes`:`No`))},dependencies:[wM,Z,CM,DM,MM,bM],styles:[`
[_nghost-%COMP%] {
  display: block;
  min-inline-size: 0;
}
bx-card[_ngcontent-%COMP%] {
  --%NS%bx-card-padding: var(--%NS%bx-space-5, 1.25rem);
}
h3[_ngcontent-%COMP%], 
p[_ngcontent-%COMP%], 
dl[_ngcontent-%COMP%] {
  margin: 0;
}
h3[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-heading);
  font-size: 1rem;
}
p[_ngcontent-%COMP%], 
dt[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-secondary);
  line-height: 1.65;
}
dl[_ngcontent-%COMP%] {
  display: grid;
  gap: var(--%NS%bx-space-3, 0.75rem);
}
dl[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  gap: var(--%NS%bx-space-1, 0.25rem) var(--%NS%bx-space-4, 1rem);
}
dd[_ngcontent-%COMP%] {
  margin: 0;
  font-weight: 600;
  overflow-wrap: anywhere;
}
.metric[_ngcontent-%COMP%] {
  margin-block: var(--%NS%bx-space-2, 0.5rem);
  color: var(--%NS%bx-text-heading);
  font-size: clamp(1.75rem, 4vw, 2.75rem);
  font-weight: 600;
  line-height: 1.25;
  font-variant-numeric: tabular-nums;
}
.preview-cell[_ngcontent-%COMP%] {
  display: block;
  padding: var(--%NS%bx-space-5, 1.25rem);
  border-radius: var(--%NS%bx-rounded-md, 0.5rem);
  background: var(--%NS%bx-bg-element);
  color: var(--%NS%bx-text-brand);
  text-align: center;
  font-weight: 600;
}
.identifier[_ngcontent-%COMP%] {
  display: block;
  font-family:
    ui-monospace,
    SFMono-Regular,
    monospace;
  overflow-wrap: anywhere;
}
.token-swatch[_ngcontent-%COMP%] {
  block-size: calc(var(--%NS%bx-space-8, 2rem) * 2);
  border: 1px solid var(--%NS%bx-border-default);
  border-radius: var(--%NS%bx-rounded-md, 0.5rem);
  forced-color-adjust: none;
}
.utility-overlay[_ngcontent-%COMP%] {
  display: block;
  inline-size: min(22rem, 100vw - var(--%NS%bx-space-8, 2rem));
  max-inline-size: 100%;
  overflow: clip;
}
.utility-overlay-content[_ngcontent-%COMP%] {
  max-block-size: calc(100dvh - var(--%NS%bx-space-8, 2rem) - var(--%NS%bx-space-5, 1.25rem) * 2 - var(--%NS%bx-border-width, 1px) * 2);
  overflow: hidden auto;
  overscroll-behavior: contain;
}
.overlay-position-controls[_ngcontent-%COMP%] {
  display: grid;
  gap: var(--%NS%bx-space-4, 1rem);
  align-items: stretch;
}
.overlay-position-controls[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {
  min-block-size: var(--%NS%bx-space-10, 2.5rem);
}
@media (min-width: 640px) {
  .overlay-position-controls[_ngcontent-%COMP%] {
    grid-template-columns: minmax(0, 1fr) auto;
  }
}
.lock-controls-content[_ngcontent-%COMP%] {
  max-block-size: calc(100dvh - var(--%NS%bx-space-8, 2rem) - var(--%NS%bx-space-12, 3rem) - var(--%NS%bx-space-12, 3rem));
  padding: var(--%NS%bx-space-1, 0.25rem);
  overflow: auto;
  overscroll-behavior: contain;
}`]})};export{O as Device};