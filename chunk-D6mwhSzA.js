import"./main-RICJTCGQ.js";import{r as Z}from"./chunk-DZ1I1_Lc.js";import{$ as Ge,$a as tl,D as D$1,F as E,Ha as sT,Nr as be,To as y,Vn as W,Vt as M,Xn as X,Yi as lT,ai as fT,ao as uf,gi as g,ii as f,jn as Tl,l as A,pa as nT,pn as Q,po as we,ti as ee,ui as fe,wa as pT}from"./chunk-DzvvGvUq.js";var D=class p{destroyRef=f(Q);deviceTypeService=f(tl);document=f(fe);deviceState=M(this.deviceTypeService.getDeviceState());deviceCategory=g(()=>{let o=this.deviceState();return o.isTablet?`Tablet`:o.isMobile?`Mobile`:`Desktop`});orientation=g(()=>this.deviceState().isLandscapeOrientation()?`Landscape`:`Portrait`);constructor(){Ge(()=>{let o=this.document.defaultView?.screen.orientation;this.refreshDevice(),o&&Tl(o,`change`).pipe(uf(this.destroyRef)).subscribe(()=>this.refreshDevice())})}refreshDevice(){this.deviceState.set(this.deviceTypeService.getDeviceState())}static ɵfac=function(c){return new(c||p)};static ɵcmp=W({type:p,selectors:[[`app-device`]],decls:49,vars:12,consts:[[3,`gap`],[`minColumnWidth`,`16rem`],[`title`,`Device snapshot`],[`data-device-category`,``,1,`metric`],[`leadingIcon`,`smartphone`,`data-orientation`,``,3,`text`,`focusable`],[`direction`,`horizontal`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,3,`click`],[`title`,`Platform hints`],[`title`,`Device identity and viewport size are separate`,`message`,`Resizing a desktop window changes its viewport, while its device category stays desktop. This demo refreshes on screen orientation changes; you can also refresh it manually.`]],template:function(c,a){c&1&&(E(0,`bx-stack`,0)(1,`bx-grid`,1)(2,`bx-card`,2)(3,`bx-stack`,0)(4,`p`,3),X(5),D$1(),we(6,`bx-tag`,4),E(7,`dl`)(8,`div`)(9,`dt`),X(10,`Desktop OS`),D$1(),E(11,`dd`),X(12),D$1()(),E(13,`div`)(14,`dt`),X(15,`Mobile OS`),D$1(),E(16,`dd`),X(17),D$1()()(),E(18,`bx-stack`,5)(19,`button`,6),ee(`click`,function(){return a.refreshDevice()}),X(20,`Refresh detection`),D$1()()()(),E(21,`bx-card`,7)(22,`dl`)(23,`div`)(24,`dt`),X(25,`Apple device`),D$1(),E(26,`dd`),X(27),D$1()(),E(28,`div`)(29,`dt`),X(30,`Android device`),D$1(),E(31,`dd`),X(32),D$1()(),E(33,`div`)(34,`dt`),X(35,`Windows desktop`),D$1(),E(36,`dd`),X(37),D$1()(),E(38,`div`)(39,`dt`),X(40,`Linux or Unix desktop`),D$1(),E(41,`dd`),X(42),D$1()(),E(43,`div`)(44,`dt`),X(45,`Unknown mobile OS`),D$1(),E(46,`dd`),X(47),D$1()()()()(),we(48,`bx-alert`,8),D$1()),c&2&&(A(`gap`,5),y(3),A(`gap`,4),y(2),be(a.deviceCategory()),y(),A(`text`,a.orientation()+` screen`)(`focusable`,!1),y(6),be(a.deviceState().desktopOS??`Not detected`),y(5),be(a.deviceState().mobileOS??`Not detected`),y(10),be(a.deviceState().isAppleDevice?`Yes`:`No`),y(5),be(a.deviceState().isAndroidDevice?`Yes`:`No`),y(5),be(a.deviceState().isWindowsDesktop?`Yes`:`No`),y(5),be(a.deviceState().isLinuxOrUnixDesktop?`Yes`:`No`),y(5),be(a.deviceState().isUnknownMobileDevice?`Yes`:`No`))},dependencies:[sT,Z,lT,pT,fT,nT],styles:[`
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
}
.utility-form[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  gap: 1rem;
}
.utility-results[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
  padding-inline-start: 1.25rem;
  color: var(--%NS%bx-text-secondary);
  font-size: 0.875rem;
}
.utility-result[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-accent);
  font-size: 0.875rem;
}`]})};export{D as Device};