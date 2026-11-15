import{D as fe}from"./chunk-BEm-ihzG.js";import{C as Vs,O as Xs,b as Us,it as zs,s as Gs}from"./chunk-DE1qZ0OS.js";import"./chunk-1rrlZ2Ss.js";import{$r as fa,En as W,In as XT,Jr as er,Lt as Os,Nn as Ws,Sr as ba,_n as U,ar as Zy,b as Cy,ct as K,ei as fi,i as $n,ia as me,qi as m,ra as md,wr as br,xn as Ul}from"./chunk-CVY9_LoB.js";var k=class p{destroyRef=m(me);deviceTypeService=m(Ws);document=m(U);deviceState=W(this.deviceTypeService.getDeviceState());deviceCategory=K(()=>{let o=this.deviceState();return o.isTablet?`Tablet`:o.isMobile?`Mobile`:`Desktop`});orientation=K(()=>this.deviceState().isLandscapeOrientation()?`Landscape`:`Portrait`);constructor(){er(()=>{let o=this.document.defaultView?.screen.orientation;this.refreshDevice(),o&&fi(o,`change`).pipe(md(this.destroyRef)).subscribe(()=>this.refreshDevice())})}refreshDevice(){this.deviceState.set(this.deviceTypeService.getDeviceState())}static ɵfac=function(d){return new(d||p)};static ɵcmp=$n({type:p,selectors:[[`app-device`]],decls:49,vars:12,consts:[[3,`gap`],[`minColumnWidth`,`16rem`],[`title`,`Device snapshot`],[`data-device-category`,``,1,`metric`],[`leadingIcon`,`smartphone`,`data-orientation`,``,3,`text`,`focusable`],[`direction`,`horizontal`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,3,`click`],[`title`,`Platform hints`],[`title`,`Device identity and viewport size are separate`,`message`,`Resizing a desktop window changes its viewport, while its device category stays desktop. This demo refreshes on screen orientation changes; you can also refresh it manually.`]],template:function(d,a){d&1&&(Os(0,`bx-stack`,0)(1,`bx-grid`,1)(2,`bx-card`,2)(3,`bx-stack`,0)(4,`p`,3),XT(5),ba(),Cy(6,`bx-tag`,4),Os(7,`dl`)(8,`div`)(9,`dt`),XT(10,`Desktop OS`),ba(),Os(11,`dd`),XT(12),ba()(),Os(13,`div`)(14,`dt`),XT(15,`Mobile OS`),ba(),Os(16,`dd`),XT(17),ba()()(),Os(18,`bx-stack`,5)(19,`button`,6),br(`click`,function(){return a.refreshDevice()}),XT(20,`Refresh detection`),ba()()()(),Os(21,`bx-card`,7)(22,`dl`)(23,`div`)(24,`dt`),XT(25,`Apple device`),ba(),Os(26,`dd`),XT(27),ba()(),Os(28,`div`)(29,`dt`),XT(30,`Android device`),ba(),Os(31,`dd`),XT(32),ba()(),Os(33,`div`)(34,`dt`),XT(35,`Windows desktop`),ba(),Os(36,`dd`),XT(37),ba()(),Os(38,`div`)(39,`dt`),XT(40,`Linux or Unix desktop`),ba(),Os(41,`dd`),XT(42),ba()(),Os(43,`div`)(44,`dt`),XT(45,`Unknown mobile OS`),ba(),Os(46,`dd`),XT(47),ba()()()()(),Cy(48,`bx-alert`,8),ba()),d&2&&(fa(`gap`,5),Ul(3),fa(`gap`,4),Ul(2),Zy(a.deviceCategory()),Ul(),fa(`text`,a.orientation()+` screen`)(`focusable`,!1),Ul(6),Zy(a.deviceState().desktopOS??`Not detected`),Ul(5),Zy(a.deviceState().mobileOS??`Not detected`),Ul(10),Zy(a.deviceState().isAppleDevice?`Yes`:`No`),Ul(5),Zy(a.deviceState().isAndroidDevice?`Yes`:`No`),Ul(5),Zy(a.deviceState().isWindowsDesktop?`Yes`:`No`),Ul(5),Zy(a.deviceState().isLinuxOrUnixDesktop?`Yes`:`No`),Ul(5),Zy(a.deviceState().isUnknownMobileDevice?`Yes`:`No`))},dependencies:[Vs,fe,Us,Gs,Xs,zs],styles:[`
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