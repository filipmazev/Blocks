import{q as Z}from"./main-HW2XYL5W.js";import{$i as v,D as E,Gr as je,Mi as qs,N as Fe,Oi as q,Si as p,Ti as pM,W as H,Wi as te,Zr as k,_a as xe,hn as U,hr as dp,ii as lM,jr as hM,ka as z,mt as Le,na as vM,un as Te,xa as yM,ya as xs,yi as oe}from"./chunk-Dt37D5SH.js";var _=class p$1{destroyRef=p(q);deviceTypeService=p(xs);document=p(te);deviceState=E(this.deviceTypeService.getDeviceState());deviceCategory=v(()=>{let r=this.deviceState();return r.isTablet?`Tablet`:r.isMobile?`Mobile`:`Desktop`});orientation=v(()=>this.deviceState().isLandscapeOrientation()?`Landscape`:`Portrait`);constructor(){Le(()=>{let r=this.document.defaultView?.screen.orientation;this.refreshDevice(),r&&qs(r,`change`).pipe(dp(this.destroyRef)).subscribe(()=>this.refreshDevice())})}refreshDevice(){this.deviceState.set(this.deviceTypeService.getDeviceState())}static ɵfac=function(d){return new(d||p$1)};static ɵcmp=z({type:p$1,selectors:[[`app-device`]],decls:49,vars:12,consts:[[3,`gap`],[`minColumnWidth`,`16rem`],[`title`,`Device snapshot`],[`data-device-category`,``,1,`metric`],[`leadingIcon`,`smartphone`,`data-orientation`,``,3,`text`,`focusable`],[`direction`,`horizontal`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,3,`click`],[`title`,`Platform hints`],[`title`,`Device identity and viewport size are separate`,`message`,`Resizing a desktop window changes its viewport, while its device category stays desktop. This demo refreshes on screen orientation changes; you can also refresh it manually.`]],template:function(d,a){d&1&&(U(0,`bx-stack`,0)(1,`bx-grid`,1)(2,`bx-card`,2)(3,`bx-stack`,0)(4,`p`,3),Te(5),H(),Fe(6,`bx-tag`,4),U(7,`dl`)(8,`div`)(9,`dt`),Te(10,`Desktop OS`),H(),U(11,`dd`),Te(12),H()(),U(13,`div`)(14,`dt`),Te(15,`Mobile OS`),H(),U(16,`dd`),Te(17),H()()(),U(18,`bx-stack`,5)(19,`button`,6),xe(`click`,function(){return a.refreshDevice()}),Te(20,`Refresh detection`),H()()()(),U(21,`bx-card`,7)(22,`dl`)(23,`div`)(24,`dt`),Te(25,`Apple device`),H(),U(26,`dd`),Te(27),H()(),U(28,`div`)(29,`dt`),Te(30,`Android device`),H(),U(31,`dd`),Te(32),H()(),U(33,`div`)(34,`dt`),Te(35,`Windows desktop`),H(),U(36,`dd`),Te(37),H()(),U(38,`div`)(39,`dt`),Te(40,`Linux or Unix desktop`),H(),U(41,`dd`),Te(42),H()(),U(43,`div`)(44,`dt`),Te(45,`Unknown mobile OS`),H(),U(46,`dd`),Te(47),H()()()()(),Fe(48,`bx-alert`,8),H()),d&2&&(oe(`gap`,5),k(3),oe(`gap`,4),k(2),je(a.deviceCategory()),k(),oe(`text`,a.orientation()+` screen`)(`focusable`,!1),k(6),je(a.deviceState().desktopOS??`Not detected`),k(5),je(a.deviceState().mobileOS??`Not detected`),k(10),je(a.deviceState().isAppleDevice?`Yes`:`No`),k(5),je(a.deviceState().isAndroidDevice?`Yes`:`No`),k(5),je(a.deviceState().isWindowsDesktop?`Yes`:`No`),k(5),je(a.deviceState().isLinuxOrUnixDesktop?`Yes`:`No`),k(5),je(a.deviceState().isUnknownMobileDevice?`Yes`:`No`))},dependencies:[pM,Z,hM,vM,yM,lM],styles:[`
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