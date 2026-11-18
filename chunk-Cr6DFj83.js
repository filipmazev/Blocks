import{I as xe}from"./chunk-0rSpyq6Z.js";import{_ as Js,et as qs,j as Xs,n as $s,u as Fs}from"./chunk-D2mL-a4s.js";import{$a as sd,Bi as ik,Ho as yi,J as Fr,Jr as bo,Ra as q,Ro as xo,Ti as ge,Vr as b,X as G,Yr as br,ar as Xs$1,fn as Sd,mi as er,na as lA,rr as Xl,t as $,tt as Go}from"./chunk-4Vch4aoV.js";var k=class p{destroyRef=b(ge);deviceTypeService=b(Xs$1);document=b(q);deviceState=$(this.deviceTypeService.getDeviceState());deviceCategory=G(()=>{let o=this.deviceState();return o.isTablet?`Tablet`:o.isMobile?`Mobile`:`Desktop`});orientation=G(()=>this.deviceState().isLandscapeOrientation()?`Landscape`:`Portrait`);constructor(){er(()=>{let o=this.document.defaultView?.screen.orientation;this.refreshDevice(),o&&yi(o,`change`).pipe(Sd(this.destroyRef)).subscribe(()=>this.refreshDevice())})}refreshDevice(){this.deviceState.set(this.deviceTypeService.getDeviceState())}static ɵfac=function(d){return new(d||p)};static ɵcmp=Fr({type:p,selectors:[[`app-device`]],decls:49,vars:12,consts:[[3,`gap`],[`minColumnWidth`,`16rem`],[`title`,`Device snapshot`],[`data-device-category`,``,1,`metric`],[`leadingIcon`,`smartphone`,`data-orientation`,``,3,`text`,`focusable`],[`direction`,`horizontal`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,3,`click`],[`title`,`Platform hints`],[`title`,`Device identity and viewport size are separate`,`message`,`Resizing a desktop window changes its viewport, while its device category stays desktop. This demo refreshes on screen orientation changes; you can also refresh it manually.`]],template:function(d,a){d&1&&(bo(0,`bx-stack`,0)(1,`bx-grid`,1)(2,`bx-card`,2)(3,`bx-stack`,0)(4,`p`,3),lA(5),Go(),sd(6,`bx-tag`,4),bo(7,`dl`)(8,`div`)(9,`dt`),lA(10,`Desktop OS`),Go(),bo(11,`dd`),lA(12),Go()(),bo(13,`div`)(14,`dt`),lA(15,`Mobile OS`),Go(),bo(16,`dd`),lA(17),Go()()(),bo(18,`bx-stack`,5)(19,`button`,6),br(`click`,function(){return a.refreshDevice()}),lA(20,`Refresh detection`),Go()()()(),bo(21,`bx-card`,7)(22,`dl`)(23,`div`)(24,`dt`),lA(25,`Apple device`),Go(),bo(26,`dd`),lA(27),Go()(),bo(28,`div`)(29,`dt`),lA(30,`Android device`),Go(),bo(31,`dd`),lA(32),Go()(),bo(33,`div`)(34,`dt`),lA(35,`Windows desktop`),Go(),bo(36,`dd`),lA(37),Go()(),bo(38,`div`)(39,`dt`),lA(40,`Linux or Unix desktop`),Go(),bo(41,`dd`),lA(42),Go()(),bo(43,`div`)(44,`dt`),lA(45,`Unknown mobile OS`),Go(),bo(46,`dd`),lA(47),Go()()()()(),sd(48,`bx-alert`,8),Go()),d&2&&(xo(`gap`,5),Xl(3),xo(`gap`,4),Xl(2),ik(a.deviceCategory()),Xl(),xo(`text`,a.orientation()+` screen`)(`focusable`,!1),Xl(6),ik(a.deviceState().desktopOS??`Not detected`),Xl(5),ik(a.deviceState().mobileOS??`Not detected`),Xl(10),ik(a.deviceState().isAppleDevice?`Yes`:`No`),Xl(5),ik(a.deviceState().isAndroidDevice?`Yes`:`No`),Xl(5),ik(a.deviceState().isWindowsDesktop?`Yes`:`No`),Xl(5),ik(a.deviceState().isLinuxOrUnixDesktop?`Yes`:`No`),Xl(5),ik(a.deviceState().isUnknownMobileDevice?`Yes`:`No`))},dependencies:[$s,xe,qs,Xs,Js,Fs],styles:[`
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
}`]})};export{k as Device};