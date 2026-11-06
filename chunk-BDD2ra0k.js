import"./main-2GBJQHUZ.js";import{r as Z}from"./chunk-DUDY88j1.js";import{Ai as tt,Bt as QM,Di as te,Hi as wt,Jt as Se,Lr as ks,Mi as us,On as Z$1,Q as JM,Qi as y,ar as ee,ci as p,ea as ye,fi as qM,jr as k,kn as ZM,kt as Op,l as Be,lt as M,oi as oe,tt as KM,vt as Ne,wr as j}from"./chunk-CfQ5k3AW.js";var _=class p$1{destroyRef=p(ee);deviceTypeService=p(us);document=p(Z$1);deviceState=M(this.deviceTypeService.getDeviceState());deviceCategory=y(()=>{let r=this.deviceState();return r.isTablet?`Tablet`:r.isMobile?`Mobile`:`Desktop`});orientation=y(()=>this.deviceState().isLandscapeOrientation()?`Landscape`:`Portrait`);constructor(){wt(()=>{let r=this.document.defaultView?.screen.orientation;this.refreshDevice(),r&&ks(r,`change`).pipe(Op(this.destroyRef)).subscribe(()=>this.refreshDevice())})}refreshDevice(){this.deviceState.set(this.deviceTypeService.getDeviceState())}static ɵfac=function(d){return new(d||p$1)};static ɵcmp=j({type:p$1,selectors:[[`app-device`]],decls:49,vars:12,consts:[[3,`gap`],[`minColumnWidth`,`16rem`],[`title`,`Device snapshot`],[`data-device-category`,``,1,`metric`],[`leadingIcon`,`smartphone`,`data-orientation`,``,3,`text`,`focusable`],[`direction`,`horizontal`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,3,`click`],[`title`,`Platform hints`],[`title`,`Device identity and viewport size are separate`,`message`,`Resizing a desktop window changes its viewport, while its device category stays desktop. This demo refreshes on screen orientation changes; you can also refresh it manually.`]],template:function(d,a){d&1&&(te(0,`bx-stack`,0)(1,`bx-grid`,1)(2,`bx-card`,2)(3,`bx-stack`,0)(4,`p`,3),Se(5),oe(),tt(6,`bx-tag`,4),te(7,`dl`)(8,`div`)(9,`dt`),Se(10,`Desktop OS`),oe(),te(11,`dd`),Se(12),oe()(),te(13,`div`)(14,`dt`),Se(15,`Mobile OS`),oe(),te(16,`dd`),Se(17),oe()()(),te(18,`bx-stack`,5)(19,`button`,6),Ne(`click`,function(){return a.refreshDevice()}),Se(20,`Refresh detection`),oe()()()(),te(21,`bx-card`,7)(22,`dl`)(23,`div`)(24,`dt`),Se(25,`Apple device`),oe(),te(26,`dd`),Se(27),oe()(),te(28,`div`)(29,`dt`),Se(30,`Android device`),oe(),te(31,`dd`),Se(32),oe()(),te(33,`div`)(34,`dt`),Se(35,`Windows desktop`),oe(),te(36,`dd`),Se(37),oe()(),te(38,`div`)(39,`dt`),Se(40,`Linux or Unix desktop`),oe(),te(41,`dd`),Se(42),oe()(),te(43,`div`)(44,`dt`),Se(45,`Unknown mobile OS`),oe(),te(46,`dd`),Se(47),oe()()()()(),tt(48,`bx-alert`,8),oe()),d&2&&(ye(`gap`,5),k(3),ye(`gap`,4),k(2),Be(a.deviceCategory()),k(),ye(`text`,a.orientation()+` screen`)(`focusable`,!1),k(6),Be(a.deviceState().desktopOS??`Not detected`),k(5),Be(a.deviceState().mobileOS??`Not detected`),k(10),Be(a.deviceState().isAppleDevice?`Yes`:`No`),k(5),Be(a.deviceState().isAndroidDevice?`Yes`:`No`),k(5),Be(a.deviceState().isWindowsDesktop?`Yes`:`No`),k(5),Be(a.deviceState().isLinuxOrUnixDesktop?`Yes`:`No`),k(5),Be(a.deviceState().isUnknownMobileDevice?`Yes`:`No`))},dependencies:[KM,Z,ZM,QM,JM,qM],styles:[`
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