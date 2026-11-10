import"./main-CHCNDXPW.js";import{n as Z}from"./chunk-C_Cm-KTR.js";import{Bi as p,Dt as OM,Ha as yp,Hr as g,Ka as ze,N as G,Nt as P,Ti as me,V as IM,_ as CM,_t as Me,b as DM,c as Ae,g as C,gt as Ma,kn as Xa,ln as V,o as A,s as AM,xa as ue,y as D,yi as le,zn as Z$1}from"./chunk-Cn9-98lL.js";var O=class p$1{destroyRef=p(Z$1);deviceTypeService=p(Ma);document=p(le);deviceState=D(this.deviceTypeService.getDeviceState());deviceCategory=g(()=>{let r=this.deviceState();return r.isTablet?`Tablet`:r.isMobile?`Mobile`:`Desktop`});orientation=g(()=>this.deviceState().isLandscapeOrientation()?`Landscape`:`Portrait`);constructor(){ze(()=>{let r=this.document.defaultView?.screen.orientation;this.refreshDevice(),r&&Xa(r,`change`).pipe(yp(this.destroyRef)).subscribe(()=>this.refreshDevice())})}refreshDevice(){this.deviceState.set(this.deviceTypeService.getDeviceState())}static ɵfac=function(d){return new(d||p$1)};static ɵcmp=G({type:p$1,selectors:[[`app-device`]],decls:49,vars:12,consts:[[3,`gap`],[`minColumnWidth`,`16rem`],[`title`,`Device snapshot`],[`data-device-category`,``,1,`metric`],[`leadingIcon`,`smartphone`,`data-orientation`,``,3,`text`,`focusable`],[`direction`,`horizontal`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,3,`click`],[`title`,`Platform hints`],[`title`,`Device identity and viewport size are separate`,`message`,`Resizing a desktop window changes its viewport, while its device category stays desktop. This demo refreshes on screen orientation changes; you can also refresh it manually.`]],template:function(d,a){d&1&&(A(0,`bx-stack`,0)(1,`bx-grid`,1)(2,`bx-card`,2)(3,`bx-stack`,0)(4,`p`,3),me(5),P(),Ae(6,`bx-tag`,4),A(7,`dl`)(8,`div`)(9,`dt`),me(10,`Desktop OS`),P(),A(11,`dd`),me(12),P()(),A(13,`div`)(14,`dt`),me(15,`Mobile OS`),P(),A(16,`dd`),me(17),P()()(),A(18,`bx-stack`,5)(19,`button`,6),ue(`click`,function(){return a.refreshDevice()}),me(20,`Refresh detection`),P()()()(),A(21,`bx-card`,7)(22,`dl`)(23,`div`)(24,`dt`),me(25,`Apple device`),P(),A(26,`dd`),me(27),P()(),A(28,`div`)(29,`dt`),me(30,`Android device`),P(),A(31,`dd`),me(32),P()(),A(33,`div`)(34,`dt`),me(35,`Windows desktop`),P(),A(36,`dd`),me(37),P()(),A(38,`div`)(39,`dt`),me(40,`Linux or Unix desktop`),P(),A(41,`dd`),me(42),P()(),A(43,`div`)(44,`dt`),me(45,`Unknown mobile OS`),P(),A(46,`dd`),me(47),P()()()()(),Ae(48,`bx-alert`,8),P()),d&2&&(V(`gap`,5),C(3),V(`gap`,4),C(2),Me(a.deviceCategory()),C(),V(`text`,a.orientation()+` screen`)(`focusable`,!1),C(6),Me(a.deviceState().desktopOS??`Not detected`),C(5),Me(a.deviceState().mobileOS??`Not detected`),C(10),Me(a.deviceState().isAppleDevice?`Yes`:`No`),C(5),Me(a.deviceState().isAndroidDevice?`Yes`:`No`),C(5),Me(a.deviceState().isWindowsDesktop?`Yes`:`No`),C(5),Me(a.deviceState().isLinuxOrUnixDesktop?`Yes`:`No`),C(5),Me(a.deviceState().isUnknownMobileDevice?`Yes`:`No`))},dependencies:[DM,Z,IM,AM,OM,CM],styles:[`
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