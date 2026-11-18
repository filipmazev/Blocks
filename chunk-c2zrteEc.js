import{L as xe}from"./chunk-HfEiycvf.js";import{G as js,O as Ys,h as Ks,n as $s,o as Bs}from"./chunk-DyZGtlM9.js";import{Cr as b,Dn as U,K as Fr,Lo as yi,Or as bo,Ua as sk,Vo as z,Xa as td,Yr as er,Zn as Xs,c as $o,et as Go,fi as he,ja as qs,kr as br,mr as aA,t as $,xo as wd}from"./chunk-DflWScik.js";var k=class p{destroyRef=b(he);deviceTypeService=b(Xs);document=b($);deviceState=z(this.deviceTypeService.getDeviceState());deviceCategory=U(()=>{let o=this.deviceState();return o.isTablet?`Tablet`:o.isMobile?`Mobile`:`Desktop`});orientation=U(()=>this.deviceState().isLandscapeOrientation()?`Landscape`:`Portrait`);constructor(){er(()=>{let o=this.document.defaultView?.screen.orientation;this.refreshDevice(),o&&yi(o,`change`).pipe(wd(this.destroyRef)).subscribe(()=>this.refreshDevice())})}refreshDevice(){this.deviceState.set(this.deviceTypeService.getDeviceState())}static ɵfac=function(d){return new(d||p)};static ɵcmp=Fr({type:p,selectors:[[`app-device`]],decls:49,vars:12,consts:[[3,`gap`],[`minColumnWidth`,`16rem`],[`title`,`Device snapshot`],[`data-device-category`,``,1,`metric`],[`leadingIcon`,`smartphone`,`data-orientation`,``,3,`text`,`focusable`],[`direction`,`horizontal`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,3,`click`],[`title`,`Platform hints`],[`title`,`Device identity and viewport size are separate`,`message`,`Resizing a desktop window changes its viewport, while its device category stays desktop. This demo refreshes on screen orientation changes; you can also refresh it manually.`]],template:function(d,a){d&1&&(bo(0,`bx-stack`,0)(1,`bx-grid`,1)(2,`bx-card`,2)(3,`bx-stack`,0)(4,`p`,3),aA(5),Go(),td(6,`bx-tag`,4),bo(7,`dl`)(8,`div`)(9,`dt`),aA(10,`Desktop OS`),Go(),bo(11,`dd`),aA(12),Go()(),bo(13,`div`)(14,`dt`),aA(15,`Mobile OS`),Go(),bo(16,`dd`),aA(17),Go()()(),bo(18,`bx-stack`,5)(19,`button`,6),br(`click`,function(){return a.refreshDevice()}),aA(20,`Refresh detection`),Go()()()(),bo(21,`bx-card`,7)(22,`dl`)(23,`div`)(24,`dt`),aA(25,`Apple device`),Go(),bo(26,`dd`),aA(27),Go()(),bo(28,`div`)(29,`dt`),aA(30,`Android device`),Go(),bo(31,`dd`),aA(32),Go()(),bo(33,`div`)(34,`dt`),aA(35,`Windows desktop`),Go(),bo(36,`dd`),aA(37),Go()(),bo(38,`div`)(39,`dt`),aA(40,`Linux or Unix desktop`),Go(),bo(41,`dd`),aA(42),Go()(),bo(43,`div`)(44,`dt`),aA(45,`Unknown mobile OS`),Go(),bo(46,`dd`),aA(47),Go()()()()(),td(48,`bx-alert`,8),Go()),d&2&&($o(`gap`,5),qs(3),$o(`gap`,4),qs(2),sk(a.deviceCategory()),qs(),$o(`text`,a.orientation()+` screen`)(`focusable`,!1),qs(6),sk(a.deviceState().desktopOS??`Not detected`),qs(5),sk(a.deviceState().mobileOS??`Not detected`),qs(10),sk(a.deviceState().isAppleDevice?`Yes`:`No`),qs(5),sk(a.deviceState().isAndroidDevice?`Yes`:`No`),qs(5),sk(a.deviceState().isWindowsDesktop?`Yes`:`No`),qs(5),sk(a.deviceState().isLinuxOrUnixDesktop?`Yes`:`No`),qs(5),sk(a.deviceState().isUnknownMobileDevice?`Yes`:`No`))},dependencies:[js,xe,$s,Ks,Ys,Bs],styles:[`
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