import{q as Z}from"./main-BD2MVIMM.js";import{Hr as ie,Mi as p,Mr as gM,N as E,Pi as pM,Q as He,Ri as q,W as Fe,X as H,a as $a,b as CM,ci as le,fa as v,fn as Te,gn as U,ii as ka,ja as ye,mi as mp,ni as kM,pa as vM,t as $,v as Be,y as C}from"./chunk-cpWQWn_p.js";var O=class p$1{destroyRef=p(U);deviceTypeService=p(ka);document=p(ie);deviceState=C(this.deviceTypeService.getDeviceState());deviceCategory=v(()=>{let o=this.deviceState();return o.isTablet?`Tablet`:o.isMobile?`Mobile`:`Desktop`});orientation=v(()=>this.deviceState().isLandscapeOrientation()?`Landscape`:`Portrait`);constructor(){Fe(()=>{let o=this.document.defaultView?.screen.orientation;this.refreshDevice(),o&&$a(o,`change`).pipe(mp(this.destroyRef)).subscribe(()=>this.refreshDevice())})}refreshDevice(){this.deviceState.set(this.deviceTypeService.getDeviceState())}static ɵfac=function(d){return new(d||p$1)};static ɵcmp=H({type:p$1,selectors:[[`app-device`]],decls:49,vars:12,consts:[[3,`gap`],[`minColumnWidth`,`16rem`],[`title`,`Device snapshot`],[`data-device-category`,``,1,`metric`],[`leadingIcon`,`smartphone`,`data-orientation`,``,3,`text`,`focusable`],[`direction`,`horizontal`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,3,`click`],[`title`,`Platform hints`],[`title`,`Device identity and viewport size are separate`,`message`,`Resizing a desktop window changes its viewport, while its device category stays desktop. This demo refreshes on screen orientation changes; you can also refresh it manually.`]],template:function(d,a){d&1&&($(0,`bx-stack`,0)(1,`bx-grid`,1)(2,`bx-card`,2)(3,`bx-stack`,0)(4,`p`,3),Te(5),q(),Be(6,`bx-tag`,4),$(7,`dl`)(8,`div`)(9,`dt`),Te(10,`Desktop OS`),q(),$(11,`dd`),Te(12),q()(),$(13,`div`)(14,`dt`),Te(15,`Mobile OS`),q(),$(16,`dd`),Te(17),q()()(),$(18,`bx-stack`,5)(19,`button`,6),ye(`click`,function(){return a.refreshDevice()}),Te(20,`Refresh detection`),q()()()(),$(21,`bx-card`,7)(22,`dl`)(23,`div`)(24,`dt`),Te(25,`Apple device`),q(),$(26,`dd`),Te(27),q()(),$(28,`div`)(29,`dt`),Te(30,`Android device`),q(),$(31,`dd`),Te(32),q()(),$(33,`div`)(34,`dt`),Te(35,`Windows desktop`),q(),$(36,`dd`),Te(37),q()(),$(38,`div`)(39,`dt`),Te(40,`Linux or Unix desktop`),q(),$(41,`dd`),Te(42),q()(),$(43,`div`)(44,`dt`),Te(45,`Unknown mobile OS`),q(),$(46,`dd`),Te(47),q()()()()(),Be(48,`bx-alert`,8),q()),d&2&&(le(`gap`,5),E(3),le(`gap`,4),E(2),He(a.deviceCategory()),E(),le(`text`,a.orientation()+` screen`)(`focusable`,!1),E(6),He(a.deviceState().desktopOS??`Not detected`),E(5),He(a.deviceState().mobileOS??`Not detected`),E(10),He(a.deviceState().isAppleDevice?`Yes`:`No`),E(5),He(a.deviceState().isAndroidDevice?`Yes`:`No`),E(5),He(a.deviceState().isWindowsDesktop?`Yes`:`No`),E(5),He(a.deviceState().isLinuxOrUnixDesktop?`Yes`:`No`),E(5),He(a.deviceState().isUnknownMobileDevice?`Yes`:`No`))},dependencies:[gM,Z,vM,kM,CM,pM],styles:[`
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
  max-block-size: calc(100dvh - var(--%NS%bx-space-8, 2rem));
  overflow: auto;
}
.lock-controls-content[_ngcontent-%COMP%] {
  max-block-size: calc(100dvh - var(--%NS%bx-space-8, 2rem) - var(--%NS%bx-space-12, 3rem) - var(--%NS%bx-space-12, 3rem));
  padding: var(--%NS%bx-space-1, 0.25rem);
  overflow: auto;
  overscroll-behavior: contain;
}`]})};export{O as Device};