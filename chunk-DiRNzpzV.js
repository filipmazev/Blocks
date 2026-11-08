import{J as Z}from"./main-VEYCVDKS.js";import{$r as je,Bt as Ps,Cr as fs,Fn as Z$1,Gr as iM,Ji as te,Ri as sM,S as D,Sn as We,Ti as pM,Xr as j,aa as ve,hn as Ve,in as Te,on as U,qi as tM,qn as ae,ra as v,un as V,ur as dM,wi as p,xi as op,zn as _$1}from"./chunk-B79cUMdP.js";var _=class p$1{destroyRef=p(Z$1);deviceTypeService=p(fs);document=p(te);deviceState=_$1(this.deviceTypeService.getDeviceState());deviceCategory=v(()=>{let r=this.deviceState();return r.isTablet?`Tablet`:r.isMobile?`Mobile`:`Desktop`});orientation=v(()=>this.deviceState().isLandscapeOrientation()?`Landscape`:`Portrait`);constructor(){We(()=>{let r=this.document.defaultView?.screen.orientation;this.refreshDevice(),r&&Ps(r,`change`).pipe(op(this.destroyRef)).subscribe(()=>this.refreshDevice())})}refreshDevice(){this.deviceState.set(this.deviceTypeService.getDeviceState())}static ɵfac=function(d){return new(d||p$1)};static ɵcmp=V({type:p$1,selectors:[[`app-device`]],decls:49,vars:12,consts:[[3,`gap`],[`minColumnWidth`,`16rem`],[`title`,`Device snapshot`],[`data-device-category`,``,1,`metric`],[`leadingIcon`,`smartphone`,`data-orientation`,``,3,`text`,`focusable`],[`direction`,`horizontal`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,3,`click`],[`title`,`Platform hints`],[`title`,`Device identity and viewport size are separate`,`message`,`Resizing a desktop window changes its viewport, while its device category stays desktop. This demo refreshes on screen orientation changes; you can also refresh it manually.`]],template:function(d,a){d&1&&(j(0,`bx-stack`,0)(1,`bx-grid`,1)(2,`bx-card`,2)(3,`bx-stack`,0)(4,`p`,3),Te(5),U(),Ve(6,`bx-tag`,4),j(7,`dl`)(8,`div`)(9,`dt`),Te(10,`Desktop OS`),U(),j(11,`dd`),Te(12),U()(),j(13,`div`)(14,`dt`),Te(15,`Mobile OS`),U(),j(16,`dd`),Te(17),U()()(),j(18,`bx-stack`,5)(19,`button`,6),ve(`click`,function(){return a.refreshDevice()}),Te(20,`Refresh detection`),U()()()(),j(21,`bx-card`,7)(22,`dl`)(23,`div`)(24,`dt`),Te(25,`Apple device`),U(),j(26,`dd`),Te(27),U()(),j(28,`div`)(29,`dt`),Te(30,`Android device`),U(),j(31,`dd`),Te(32),U()(),j(33,`div`)(34,`dt`),Te(35,`Windows desktop`),U(),j(36,`dd`),Te(37),U()(),j(38,`div`)(39,`dt`),Te(40,`Linux or Unix desktop`),U(),j(41,`dd`),Te(42),U()(),j(43,`div`)(44,`dt`),Te(45,`Unknown mobile OS`),U(),j(46,`dd`),Te(47),U()()()()(),Ve(48,`bx-alert`,8),U()),d&2&&(ae(`gap`,5),D(3),ae(`gap`,4),D(2),je(a.deviceCategory()),D(),ae(`text`,a.orientation()+` screen`)(`focusable`,!1),D(6),je(a.deviceState().desktopOS??`Not detected`),D(5),je(a.deviceState().mobileOS??`Not detected`),D(10),je(a.deviceState().isAppleDevice?`Yes`:`No`),D(5),je(a.deviceState().isAndroidDevice?`Yes`:`No`),D(5),je(a.deviceState().isWindowsDesktop?`Yes`:`No`),D(5),je(a.deviceState().isLinuxOrUnixDesktop?`Yes`:`No`),D(5),je(a.deviceState().isUnknownMobileDevice?`Yes`:`No`))},dependencies:[iM,Z,sM,dM,pM,tM],styles:[`
[_nghost-%COMP%] {
  display: block;
  min-inline-size: 0;
}
bx-card[_ngcontent-%COMP%] {
  --%NS%bx-card-padding: 1.25rem;
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
  gap: 0.75rem;
}
dl[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  gap: 0.25rem 1rem;
}
dd[_ngcontent-%COMP%] {
  margin: 0;
  font-weight: 600;
  overflow-wrap: anywhere;
}
.metric[_ngcontent-%COMP%] {
  margin-block: 0.5rem;
  color: var(--%NS%bx-text-heading);
  font-size: clamp(1.75rem, 4vw, 2.75rem);
  font-weight: 600;
  line-height: 1.25;
  font-variant-numeric: tabular-nums;
}
.preview-cell[_ngcontent-%COMP%] {
  display: block;
  padding: 1.25rem;
  border-radius: 0.5rem;
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
  border: 1px solid var(--%NS%bx-border-default);
  border-radius: 0.5rem;
  forced-color-adjust: none;
}
.utility-overlay[_ngcontent-%COMP%] {
  display: block;
  inline-size: min(22rem, 100vw - 2rem);
  max-block-size: calc(100dvh - 2rem);
  overflow: auto;
}
.lock-controls-content[_ngcontent-%COMP%] {
  max-block-size: calc(100dvh - 2rem - 3rem - 3rem);
  padding: 0.25rem;
  overflow: auto;
  overscroll-behavior: contain;
}`]})};export{_ as Device};