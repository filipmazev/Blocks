import{B as dt,M as Ze,R as dl,Y as on}from"./chunk-DE1qZ0OS.js";import{t as U}from"./chunk-1rrlZ2Ss.js";import{$ as It,$a as tm,$i as mQ,$r as fa,Ao as y1,Bi as ki,Bn as Xb,C as Dr,Ci as i1,Cn as V,En as W,Et as Me$1,Fi as jy,Ga as se,Gr as el,Gt as Py,I as Fr,In as XT,Io as ym,Jn as Yl,Jr as er,K as Gt,Ki as ls,Kr as em,Li as kE,Lt as Os,Mo as yZ,Nr as d4,Oi as id,Oo as xe,Po as ye,Pt as OD,Qa as tk,Qn as Z$1,Sr as ba,St as Ly,Ta as pr,To as xQ,Va as s1,Vn as Xl,Wr as ek,X as HT,Xt as Ql,_n as U$1,ai as gT,ar as Zy,b as Cy,bo as wk,cn as Sk,ct as K,da as nk,di as gt,ei as fi,en as RD,f as Ay,g as BT,gn as Tt,ha as o1,i as $n$1,ia as me,in as Ry,io as u4,ir as Zl,it as Jc,jt as Nh,k as Ey,ln as T,ni as fr,nn as Ro,no as tt$1,oo as ue,pt as Kl,qi as m,qr as eo,ra as md,ri as gA,rt as Jb,s as AD,tt as JM,v as CT,wr as br,xn as Ul,xo as wr,xr as bT,xt as Lr,y as Cd,yr as as,yt as LR,zi as ke}from"./chunk-CVY9_LoB.js";import{n as s,t as r}from"./chunk-C9yOwMO6.js";function Cn(o,n){if(o&1&&Cy(0,`bx-loading-spinner`,7),o&2){let e=Ql(4),t=i1(1);fa(`size`,e.iconSize())(`label`,t.loadingLabel??`Loading`)}}function vn(o,n){if(o&1&&Cy(0,`bx-icon`,8),o&2){let e=Ql().$implicit,t=Ql(3);fa(`name`,e.name)(`size`,t.iconSize())(`color`,e.color)(`bgColor`,e.bgColor)(`strokeWidth`,e.strokeWidth)}}function xn(o,n){if(o&1&&bT(0,Cn,1,2,`bx-loading-spinner`,7)(1,vn,1,5,`bx-icon`,8),o&2){let e=n.$implicit;gT(e===`loading`?0:e?1:-1)}}function Sn(o,n){if(o&1&&(Os(0,`span`,5)(1,`bx-visual-transition`,6),Ey(2,xn,2,1,`ng-template`),ba()()),o&2){let e=Ql(2),t=i1(1);tm(`min-inline-size`,e.iconSize(),`px`)(`min-block-size`,e.iconSize(),`px`),Ul(),fa(`value`,t.loading?`loading`:t.icon)}}function Mn(o,n){if(o&1&&(Os(0,`div`,1),bT(1,Sn,3,5,`span`,3),Os(2,`span`,4),XT(3),ba()()),o&2){let e=Ql(),t=i1(1);Ul(),gT(t.icon||t.loading!==void 0?1:-1),Ul(),fa(`id`,e.titleId()),Ul(),Zy(e.resolvedText())}}function _n(o,n){if(o&1){let e=Jb();Os(0,`button`,9),br(`click`,function(){Jc(e);let a=Ql();return el(a.close.emit(`cancel`))}),Cy(1,`bx-icon`,10),ba()}if(o&2){let e=Ql();Ro(`aria-label`,e.resolvedCloseLabel())}}var j=class o{i18n=m(xQ,{optional:!0});resolvedCloseLabel=K(()=>mQ(this.closeLabel(),this.i18n));resolvedText=K(()=>mQ(this.header()?.text,this.i18n));iconSize=K(()=>{let n=Number(this.header()?.icon?.size??24);return Number.isFinite(n)&&n>0?n:24});header=ke.required();closeLabel=ke(`Close dialog`);titleId=ke(``);showCloseButton=ke.required();close=wk();static ɵfac=function(e){return new(e||o)};static ɵcmp=$n$1({type:o,selectors:[[`bx-modal-banner`]],inputs:{header:[1,`header`],closeLabel:[1,`closeLabel`],titleId:[1,`titleId`],showCloseButton:[1,`showCloseButton`]},outputs:{close:`close`},decls:4,vars:3,consts:[[1,`modal-top-banner-container`],[1,`modal-top-banner-title-container`],[`type`,`button`,1,`bx-modal-close`],[1,`modal-icon-area`,3,`min-inline-size`,`min-block-size`],[`aria-live`,`polite`,`aria-atomic`,`true`,3,`id`],[1,`modal-icon-area`],[3,`value`],[3,`size`,`label`],[3,`name`,`size`,`color`,`bgColor`,`strokeWidth`],[`type`,`button`,1,`bx-modal-close`,3,`click`],[`name`,`x`]],template:function(e,t){if(e&1&&(Os(0,`div`,0),nk(1),bT(2,Mn,4,3,`div`,1),bT(3,_n,2,1,`button`,2),ba()),e&2){Ul();let a=s1(t.header());Ul(),gT(a?2:-1),Ul(),gT(t.showCloseButton()?3:-1)}},dependencies:[U,on,OD],styles:[`
.modal-top-banner-container[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  gap: var(--%NS%bx-space-2, 0.5rem);
  flex-shrink: 0;
  min-inline-size: 0;
  align-items: flex-start;
  gap: var(--%NS%bx-space-8, 2rem);
  min-block-size: 2rem;
  padding-block-end: var(--%NS%bx-space-4, 1rem);
  border-block-end: var(--%NS%bx-border-width, 1px) var(--%NS%bx-border-style, solid) var(--%NS%bx-border-default);
  color: var(--%NS%bx-modal-text, var(--%NS%bx-text-primary));
}
.modal-top-banner-title-container[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  flex: 1;
  min-inline-size: 0;
  gap: var(--%NS%bx-space-4, 1rem);
  font-weight: bold;
  font-size: 1.25rem;
  overflow-wrap: anywhere;
}
.modal-top-banner-title-container[_ngcontent-%COMP%]    > bx-icon[_ngcontent-%COMP%] {
  flex-shrink: 0;
}
@keyframes _ngcontent-%COMP%_banner-display {
  0% {
    opacity: 0;
    height: 0;
  }
  100% {
    opacity: 1;
    height: auto;
  }
}
.bx-modal-close[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  inline-size: var(--%NS%bx-panel-close-size, 2rem);
  block-size: var(--%NS%bx-panel-close-size, 2rem);
  padding: 0;
  border: none;
  border-radius: var(--%NS%bx-rounded-sm, 0.25rem);
  background: transparent;
  color: inherit;
  cursor: pointer;
}
.bx-modal-close[_ngcontent-%COMP%]:hover {
  background: var(--%NS%bx-bg-element-hover);
}
.bx-modal-close[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--%NS%bx-border-brand);
  outline-offset: 2px;
}
.modal-icon-area[_ngcontent-%COMP%] {
  display: inline-grid;
  flex: 0 0 auto;
  place-items: center;
}
.modal-icon-area[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
  grid-area: 1/1;
}`]})};var Se=class{layout;breakpoints;animate;hasBackdrop;closeDelay;showCloseButton;mobileConfig;contentWrapper;wrapperClasses;wrapperStyles;overrideFullHeight;constructor(n){this.layout=n?.layout??`center`,this.breakpoints=n?.breakpoints,this.animate=n?.animate??!0,this.hasBackdrop=n?.hasBackdrop??!0,this.closeDelay=n?.closeDelay,this.showCloseButton=n?.showCloseButton??!0,this.mobileConfig=n?.mobileConfig??{},this.contentWrapper=n?.contentWrapper??!0,this.wrapperClasses=n?.wrapperClasses??``,this.wrapperStyles=n?.wrapperStyles??``,this.overrideFullHeight=n?.overrideFullHeight??!1}};var J=class{open;afterClose;closeGuard;closeGuardOnlyOnCancel;disableClose;disableCloseOnBackdropClick;disableCloseOnNavigation;data;style;header;contentClasses;contentStyles;id;closeLabel;ariaLabel;ariaLabelledBy;ariaDescribedBy;constructor(n){this.open=n?.open??!0,this.afterClose=n?.afterClose,this.closeGuard=n?.closeGuard,this.closeGuardOnlyOnCancel=n?.closeGuardOnlyOnCancel??!0,this.disableClose=n?.disableClose??!1,this.disableCloseOnBackdropClick=n?.disableCloseOnBackdropClick??!1,this.disableCloseOnNavigation=n?.disableCloseOnNavigation??!1,this.data=n?.data??null,this.style=new Se(n?.style),this.header=n?.header,this.contentClasses=n?.contentClasses??``,this.contentStyles=n?.contentStyles??``,this.id=n?.id,this.closeLabel=n?.closeLabel??`Close dialog`,this.ariaLabel=n?.ariaLabel,this.ariaLabelledBy=n?.ariaLabelledBy,this.ariaDescribedBy=n?.ariaDescribedBy}};var E=class{constructor(n,e,t){this.componentType=e;this.modalService=t;this.configuration=W(n),this.config=this.configuration.asReadonly()}componentType;modalService;configuration;modalState=new eo(`opening`);backdropClickSubject=new xe;afterCloseSubject=new xe;subscriptions=new Me$1;config;contentRef;containerRef;closeTimeout;closeRender;get componentRef(){return this.contentRef}get modalContainerRef(){return this.containerRef}get modalContainerElement(){return this.containerRef?.location.nativeElement}setNestingDepth(n){this.containerRef?.instance.nestingDepth.set(n)}patch(n){this.modalState.value===`closing`||this.modalState.value===`closed`||this.configuration.update(e=>new J(s(r({},e),{closeLabel:n.closeLabel??e.closeLabel,header:n.header===null?void 0:n.header===void 0?e.header:this.patchHeader(e.header,n.header),disableClose:n.disableClose??e.disableClose,disableCloseOnBackdropClick:n.disableCloseOnBackdropClick??e.disableCloseOnBackdropClick,disableCloseOnNavigation:n.disableCloseOnNavigation??e.disableCloseOnNavigation,closeGuardOnlyOnCancel:n.closeGuardOnlyOnCancel??e.closeGuardOnlyOnCancel,contentClasses:n.contentClasses===void 0?e.contentClasses:n.contentClasses??``,contentStyles:n.contentStyles===void 0?e.contentStyles:n.contentStyles??``,style:s(r({},e.style),{showCloseButton:n.style?.showCloseButton??e.style.showCloseButton,wrapperClasses:n.style?.wrapperClasses===void 0?e.style.wrapperClasses:n.style.wrapperClasses??``,wrapperStyles:n.style?.wrapperStyles===void 0?e.style.wrapperStyles:n.style.wrapperStyles??``})})))}backdropClick(){return this.backdropClickSubject.asObservable()}modalState$(){return this.modalState.asObservable()}afterClosed(){return this.afterCloseSubject.asObservable()}attachContainer(n){this.containerRef=n,n.instance.closeFunction=e=>this.handleClose(e),this.subscriptions.add(n.instance.backdropClick.subscribe(e=>this.backdropClickSubject.next(e))),n.onDestroy(()=>this.finishClose({state:`cancel`,data:void 0}))}attachContent(n){this.contentRef=n,this.containerRef&&(this.containerRef.instance.componentRef=n)}open(){this.modalState.value===`opening`&&this.modalState.next(`open`)}close(n=`cancel`,e=void 0,t=!1){this.modalState.value===`closing`||this.modalState.value===`closed`||this.containerRef?.instance.close(n,e,!1,t)}patchHeader(n,e){let t=e.icon;return{text:e.text===void 0?n?.text??``:e.text??``,loading:e.loading??n?.loading,loadingLabel:e.loadingLabel??n?.loadingLabel,icon:t===null?void 0:t===void 0?n?.icon:{name:t.name??n?.icon?.name??`info`,size:t.size??n?.icon?.size,color:t.color??n?.icon?.color,bgColor:t.bgColor??n?.icon?.bgColor,strokeWidth:t.strokeWidth??n?.icon?.strokeWidth}}}handleClose(n){if(this.modalState.value===`closing`||this.modalState.value===`closed`)return;this.modalState.next(`closing`);let e=this.containerRef?.instance.isAnimated()?this.containerRef.instance.animationDuration:0,t=this.containerRef;if(e&&t?.instance.effectiveLayout()===`center`){this.closeRender=er({read:()=>{let s=t.location.nativeElement.querySelectorAll(`.centered-modal-frame, .centered-modal-content-wrapper, .modal-backdrop`),p=Array.from(s).flatMap(h=>h.getAnimations());Promise.allSettled(p.map(h=>h.finished)).then(()=>this.finishClose(n))}},{injector:t.injector});return}this.closeTimeout=setTimeout(()=>this.finishClose(n),e)}finishClose(n){if(this.modalState.value===`closed`)return;clearTimeout(this.closeTimeout),this.closeRender?.destroy(),this.subscriptions.unsubscribe(),this.modalState.next(`closed`);let e=this.containerRef;this.containerRef=void 0,this.contentRef=void 0;try{this.config().afterClose?.()}finally{this.modalService.unregister(this),e&&!e.hostView.destroyed&&e.destroy(),this.modalService.restoreTaskFocus(),this.afterCloseSubject.next(n),this.afterCloseSubject.complete(),this.backdropClickSubject.complete(),this.modalState.complete()}}};var Z=class o{i18n=m(xQ,{optional:!0});resolvedLabel=K(()=>mQ(this.label(),this.i18n));label=ke(`Close dialog`);tabIndex=ke(0);isAnimated=ke(!1);isOpen=ke(!1);click=wk();static ɵfac=function(e){return new(e||o)};static ɵcmp=$n$1({type:o,selectors:[[`bx-modal-backdrop`]],inputs:{label:[1,`label`],tabIndex:[1,`tabIndex`],isAnimated:[1,`isAnimated`],isOpen:[1,`isOpen`]},outputs:{click:`click`},decls:1,vars:6,consts:[[`type`,`button`,1,`modal-backdrop`,3,`click`,`tabIndex`]],template:function(e,t){e&1&&(Yl(0,`button`,0),Ry(`click`,function(s){return t.click.emit(s)}),Zl()),e&2&&(Lr(`backdrop-fade-in`,t.isAnimated()&&t.isOpen())(`backdrop-fade-out`,t.isAnimated()&&!t.isOpen()),Ay(`tabIndex`,t.tabIndex()),Ro(`aria-label`,t.resolvedLabel()))},styles:[`
[_nghost-%COMP%] {
  display: contents;
}
.modal-backdrop[_ngcontent-%COMP%] {
  padding: 0;
  border: 0;
  appearance: none;
  cursor: pointer;
  position: var(--%NS%bx-modal-backdrop-position, fixed);
  inset: 0;
  z-index: var(--%NS%bx-modal-backdrop-z-index, 400);
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
  backface-visibility: hidden;
  -webkit-font-smoothing: subpixel-antialiased;
  transform-style: preserve-3d;
  transform-origin: center;
  background: var(--%NS%bx-modal-backdrop-fill, var(--%NS%bx-modal-backdrop-background, rgba(0, 0, 0, 0.32)));
  -webkit-backdrop-filter: blur(var(--%NS%bx-modal-backdrop-blur, 8px));
  backdrop-filter: blur(var(--%NS%bx-modal-backdrop-blur, 8px));
}
.modal-backdrop.backdrop-fade-in[_ngcontent-%COMP%] {
  opacity: 1;
  transition: opacity 175ms linear;
}
.modal-backdrop.backdrop-fade-out[_ngcontent-%COMP%] {
  opacity: 0;
  transition: opacity 175ms linear;
}
@starting-style {
  .modal-backdrop.backdrop-fade-in[_ngcontent-%COMP%] {
    opacity: 0;
  }
}
@supports not ((backdrop-filter: blur(1px)) or (-webkit-backdrop-filter: blur(1px))) {
  .modal-backdrop[_ngcontent-%COMP%] {
    background: var(--%NS%bx-modal-backdrop-fill, rgba(0, 0, 0, 0.5));
  }
}
@media (prefers-reduced-transparency: reduce), (forced-colors: active) {
  .modal-backdrop[_ngcontent-%COMP%] {
    -webkit-backdrop-filter: none;
    backdrop-filter: none;
    background: var(--%NS%bx-modal-backdrop-fill, rgba(0, 0, 0, 0.6));
  }
}
[data-bx-reduced-transparency=true][_nghost-%COMP%]   .modal-backdrop[_ngcontent-%COMP%], [data-bx-reduced-transparency=true]   [_nghost-%COMP%]   .modal-backdrop[_ngcontent-%COMP%] {
  -webkit-backdrop-filter: none;
  backdrop-filter: none;
  background: var(--%NS%bx-modal-backdrop-fill, rgba(0, 0, 0, 0.6));
}`]})};var Dn=[`*`];function kn(o,n){if(o&1&&Cy(0,`bx-modal-banner`,4),o&2){let e=Ql();fa(`header`,e.config()?.header)(`titleId`,(e.id()??``)+`-title`)(`showCloseButton`,!1)}}function On(o,n){o&1&&Xl(0)}function wn(o,n){if(o&1&&(Os(0,`div`,5),Ey(1,On,1,0,`ng-container`,9),ba()),o&2){let e=Ql();Ul(),fa(`ngTemplateOutlet`,e.headerTemplate())}}function Nn(o,n){o&1&&Xl(0)}function Tn(o,n){if(o&1&&(Os(0,`div`,8),Ey(1,Nn,1,0,`ng-container`,9),ba()),o&2){let e=Ql();Ul(),fa(`ngTemplateOutlet`,e.footerTemplate())}}function Rn(o,n){o&1&&Py(0)}var L=class o{isSheetOpen=K(()=>this.isOpen()&&!this.isSwipingVerticallyFinished());isDismissible=K(()=>this.config()?.disableClose!==!0);resolvedMaxHeight=K(()=>String(this.config()?.style?.mobileConfig?.customHeight??``)||`98dvh`);sheetStyles=K(()=>`--bx-drawer-width: 100%; --bx-drawer-min-height: 60dvh; --bx-drawer-body-padding: 0; --bx-drawer-footer-border-color: transparent; ${this.config()?.style?.wrapperStyles??``}`);currentTranslateY=W(0);isSwipingVerticallyFinished=W(!1);id=ke.required();headerTemplate=ke.required();footerTemplate=ke.required();config=ke.required();isOpen=ke.required();isAnimated=ke.required();hasBanner=ke.required();animationDuration=ke.required();close=wk();onCloseRequest(){this.isDismissible()&&this.close.emit(`cancel`)}static ɵfac=function(e){return new(e||o)};static ɵcmp=$n$1({type:o,selectors:[[`bx-modal-bottom-sheet`]],inputs:{id:[1,`id`],headerTemplate:[1,`headerTemplate`],footerTemplate:[1,`footerTemplate`],config:[1,`config`],isOpen:[1,`isOpen`],isAnimated:[1,`isAnimated`],hasBanner:[1,`hasBanner`],animationDuration:[1,`animationDuration`]},outputs:{close:`close`},ngContentSelectors:Dn,decls:10,vars:21,consts:[[`contentTemplate`,``],[`ariaLabel`,``,3,`offsetChange`,`closeRequest`,`embedded`,`modal`,`autoClose`,`open`,`dismissible`,`showBackdrop`,`showCloseButton`,`closeLabel`,`showHandle`,`headerVisible`,`stickyFooter`,`maxHeight`,`animationDuration`,`surfaceId`,`panelClass`,`panelStyle`,`offset`],[1,`bottom-sheet-modal-inner-content-container`],[1,`bottom-sheet-modal-top-group`],[3,`header`,`titleId`,`showCloseButton`],[1,`bottom-sheet-modal-header`],[1,`bottom-sheet-modal-main-content-container`],[3,`ngTemplateOutlet`],[`bxDrawerFooter`,``,1,`bottom-sheet-modal-footer`],[4,`ngTemplateOutlet`]],template:function(e,t){if(e&1){let a=Jb();jy(),Os(0,`bx-bottom-drawer`,1),tk(`offsetChange`,function(p){return Jc(a),o1(t.currentTranslateY,p)||(t.currentTranslateY=p),el(p)}),br(`closeRequest`,function(){return t.onCloseRequest()}),Os(1,`div`,2)(2,`div`,3),bT(3,kn,1,3,`bx-modal-banner`,4),bT(4,wn,2,1,`div`,5),Os(5,`div`,6),Xl(6,7),ba()()(),bT(7,Tn,2,1,`div`,8),ba(),Ey(8,Rn,1,0,`ng-template`,null,0,y1)}if(e&2){let a=CT(9);fa(`embedded`,!0)(`modal`,!1)(`autoClose`,!1)(`open`,t.isSheetOpen())(`dismissible`,t.isDismissible())(`showBackdrop`,!1)(`showCloseButton`,!1)(`closeLabel`,t.config()?.closeLabel??`Close dialog`)(`showHandle`,!0)(`headerVisible`,!1)(`stickyFooter`,!0)(`maxHeight`,t.resolvedMaxHeight())(`animationDuration`,t.isAnimated()?t.animationDuration():0)(`surfaceId`,t.id()??``)(`panelClass`,t.config()?.style?.wrapperClasses??``)(`panelStyle`,t.sheetStyles()),ek(`offset`,t.currentTranslateY),Ul(3),gT(t.hasBanner()?3:-1),Ul(),gT(t.headerTemplate()?4:-1),Ul(2),fa(`ngTemplateOutlet`,a),Ul(),gT(t.footerTemplate()?7:-1)}},dependencies:[dl,ym,j],styles:[`
[_nghost-%COMP%] {
  position: fixed;
  inset-block-end: 0;
  inset-inline: 0;
  z-index: 401;
  display: block;
  pointer-events: none;
}
bx-bottom-drawer[_ngcontent-%COMP%] {
  display: block;
  pointer-events: none;
}
.bottom-sheet-modal-inner-content-container[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: var(--%NS%bx-space-6, 1.5rem);
  min-block-size: 0;
  padding: 0 var(--%NS%bx-space-5, 1.25rem) var(--%NS%bx-space-6, 1.5rem);
  box-sizing: border-box;
}
.bottom-sheet-modal-top-group[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: var(--%NS%bx-space-4, 1rem);
  min-block-size: 0;
}
.bottom-sheet-modal-main-content-container[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: var(--%NS%bx-space-2, 0.5rem);
  min-block-size: 0;
}
.bottom-sheet-modal-header[_ngcontent-%COMP%] {
  flex-shrink: 0;
  inline-size: 100%;
  display: flex;
  justify-content: flex-start;
  padding-block-start: var(--%NS%bx-space-2, 0.5rem);
  gap: var(--%NS%bx-space-2, 0.5rem);
}
.bottom-sheet-modal-footer[_ngcontent-%COMP%] {
  flex-shrink: 0;
  inline-size: 100%;
  display: flex;
  justify-content: center;
  gap: var(--%NS%bx-space-2, 0.5rem);
  padding-block-start: var(--%NS%bx-space-4, 1rem);
}`]})};var In=[`*`];function Bn(o,n){if(o&1){let e=Jb();Os(0,`bx-modal-backdrop`,13),br(`click`,function(a){Jc(e);let s=Ql(2);return el(s.onBackdropClick.emit(a))}),ba()}if(o&2){let e=Ql(2);fa(`isAnimated`,e.isAnimated())(`isOpen`,e.isOpen())}}function Ln(o,n){if(o&1){let e=Jb();Os(0,`bx-modal-banner`,14),br(`close`,function(){Jc(e);let a=Ql(2);return el(a.close.emit(`cancel`))}),ba()}if(o&2){let e=Ql(2);fa(`header`,e.config()?.header)(`closeLabel`,e.config()?.closeLabel??`Close dialog`)(`titleId`,(e.id()??``)+`-title`)(`showCloseButton`,e.config()?.disableClose!==!0&&e.config()?.style?.showCloseButton!==!1)}}function En(o,n){o&1&&Xl(0)}function An(o,n){if(o&1){let e=Jb();Os(0,`button`,17),br(`click`,function(){Jc(e);let a=Ql(3);return el(a.close.emit(`cancel`))}),Cy(1,`bx-icon`,18),ba()}if(o&2){let e=Ql(3);Ro(`aria-label`,e.resolvedCloseLabel())}}function Pn(o,n){if(o&1&&(Os(0,`div`,9),Ey(1,En,1,0,`ng-container`,15),bT(2,An,2,1,`button`,16),ba()),o&2){let e=Ql(2);Ul(),fa(`ngTemplateOutlet`,e.headerTemplate()),Ul(),gT(!e.hasBanner()&&e.config()?.disableClose!==!0&&e.config()?.style?.showCloseButton!==!1?2:-1)}}function Vn(o,n){o&1&&Xl(0)}function jn(o,n){if(o&1&&(Os(0,`div`,12),Ey(1,Vn,1,0,`ng-container`,15),ba()),o&2){let e=Ql(2);Ul(),fa(`ngTemplateOutlet`,e.footerTemplate())}}function Wn(o,n){if(o&1&&(Os(0,`div`,1),bT(1,Bn,1,2,`bx-modal-backdrop`,3),Os(2,`div`,4)(3,`div`,5)(4,`div`,6)(5,`div`)(6,`div`,7),bT(7,Ln,1,4,`bx-modal-banner`,8),bT(8,Pn,3,2,`div`,9),Os(9,`div`,10),Xl(10,11),ba()(),bT(11,jn,2,1,`div`,12),ba()()()()()),o&2){let e=Ql(),t=CT(3);fa(`id`,e.id()??``),Ul(),gT(e.config()?.style?.hasBackdrop?1:-1),Ul(2),Lr(`centered-modal-animate-in`,e.modalClasses()[`centered-modal-animate-in`])(`centered-modal-animate-out`,e.modalClasses()[`centered-modal-animate-out`]),Ul(),fa(`ngClass`,e.modalClasses()),Ul(),BT(e.config()?.style?.wrapperStyles??``),HT(`centered-modal-inner-content-container `+(e.config()?.style?.wrapperClasses??``)),Ul(2),gT(e.hasBanner()?7:-1),Ul(),gT(e.headerTemplate()?8:-1),Ul(2),fa(`ngTemplateOutlet`,t),Ul(),gT(e.footerTemplate()?11:-1)}}function zn(o,n){if(o&1){let e=Jb();Os(0,`bx-modal-bottom-sheet`,19),br(`close`,function(){Jc(e);let a=Ql();return el(a.close.emit(`cancel`))}),Xl(1,11),ba()}if(o&2){let e=Ql(),t=CT(3);fa(`headerTemplate`,e.headerTemplate())(`footerTemplate`,e.footerTemplate())(`config`,e.config())(`id`,e.id())(`isOpen`,e.isOpen())(`isAnimated`,e.isAnimated())(`hasBanner`,e.hasBanner())(`animationDuration`,e.animationDuration()),Ul(),fa(`ngTemplateOutlet`,t)}}function Fn(o,n){o&1&&Py(0)}var ee=class o{i18n=m(xQ,{optional:!0});resolvedCloseLabel=K(()=>mQ(this.config()?.closeLabel??`Close dialog`,this.i18n));modalClasses=K(()=>({"centered-modal-content-wrapper":!0,"centered-modal-default-style":this.hasDefaultContentWrapperClass()||this.hasBanner(),"centered-modal-animate-in":this.isAnimated()&&this.isOpen(),"centered-modal-animate-out":this.isAnimated()&&!this.isOpen()}));headerTemplate=ke.required();footerTemplate=ke.required();config=ke.required();id=ke.required();isOpen=ke.required();isAnimated=ke.required();isBottomSheetModalActive=ke.required();animationDuration=ke.required();hasDefaultContentWrapperClass=ke.required();hasBanner=ke.required();close=wk();onBackdropClick=wk();bottomSheet=u4(L);static ɵfac=function(e){return new(e||o)};static ɵcmp=$n$1({type:o,selectors:[[`bx-modal-centered`]],viewQuery:function(e,t){e&1&&Ly(t.bottomSheet,L,5),e&2&&em()},inputs:{headerTemplate:[1,`headerTemplate`],footerTemplate:[1,`footerTemplate`],config:[1,`config`],id:[1,`id`],isOpen:[1,`isOpen`],isAnimated:[1,`isAnimated`],isBottomSheetModalActive:[1,`isBottomSheetModalActive`],animationDuration:[1,`animationDuration`],hasDefaultContentWrapperClass:[1,`hasDefaultContentWrapperClass`],hasBanner:[1,`hasBanner`]},outputs:{close:`close`,onBackdropClick:`onBackdropClick`},ngContentSelectors:In,decls:4,vars:1,consts:[[`contentTemplate`,``],[1,`modal-overlay`,3,`id`],[3,`headerTemplate`,`footerTemplate`,`config`,`id`,`isOpen`,`isAnimated`,`hasBanner`,`animationDuration`],[3,`isAnimated`,`isOpen`],[1,`modal-overlay-wrapper`],[1,`centered-modal-frame`],[`bxSurface`,``,`data-bx-light-scope`,``,3,`ngClass`],[1,`centered-modal-top-group`],[3,`header`,`closeLabel`,`titleId`,`showCloseButton`],[1,`centered-modal-header`],[1,`centered-modal-main-content-container`],[3,`ngTemplateOutlet`],[1,`centered-modal-footer`],[3,`click`,`isAnimated`,`isOpen`],[3,`close`,`header`,`closeLabel`,`titleId`,`showCloseButton`],[4,`ngTemplateOutlet`],[`type`,`button`,1,`bx-modal-close`],[`type`,`button`,1,`bx-modal-close`,3,`click`],[`name`,`x`],[3,`close`,`headerTemplate`,`footerTemplate`,`config`,`id`,`isOpen`,`isAnimated`,`hasBanner`,`animationDuration`]],template:function(e,t){e&1&&(jy(),bT(0,Wn,12,15,`div`,1)(1,zn,2,9,`bx-modal-bottom-sheet`,2),Ey(2,Fn,1,0,`ng-template`,null,0,y1)),e&2&&gT(t.isBottomSheetModalActive()?1:0)},dependencies:[RD,ym,gA,L,j,Z,U],styles:[`
.modal-overlay-wrapper[_ngcontent-%COMP%] {
  display: flex;
  position: absolute;
  z-index: 400;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  pointer-events: none;
}
.modal-overlay[_ngcontent-%COMP%] {
  position: fixed;
  inset: 0;
  z-index: 0;
}
.centered-modal-frame[_ngcontent-%COMP%] {
  position: relative;
  isolation: isolate;
  display: flex;
  flex-direction: column;
  min-inline-size: 0;
  min-block-size: 0;
  max-inline-size: 90vw;
  max-inline-size: 90dvw;
  max-block-size: 95vh;
  max-block-size: 95dvh;
  border-radius: var(--%NS%bx-rounded-lg, 0.75rem);
}
.centered-modal-frame[_ngcontent-%COMP%]::before {
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: -1;
  inline-size: 100%;
  block-size: 100%;
  border-radius: inherit;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 0 100vmax var(--%NS%bx-modal-dimming-background, transparent);
  pointer-events: none;
}
.centered-modal-content-wrapper[_ngcontent-%COMP%] {
  pointer-events: auto;
  min-inline-size: 0;
  min-block-size: 0;
  display: flex;
  flex-direction: column;
  max-width: 90vw;
  max-width: 90dvw;
  max-height: 95vh;
  max-height: 95dvh;
  overflow: hidden;
}
.centered-modal-default-style[_ngcontent-%COMP%] {
  border-radius: var(--%NS%bx-rounded-lg, 0.75rem);
  box-shadow: var(--%NS%bx-shadow-modal, 0 8px 20px rgba(0, 0, 0, 0.12));
  color: var(--%NS%bx-modal-text, var(--%NS%bx-text-primary));
  -webkit-backdrop-filter: blur(12px);
  backdrop-filter: blur(12px);
  border: var(--%NS%bx-border-width, 1px) var(--%NS%bx-border-style, solid) transparent;
  background-color: var(--%NS%bx-modal-bg, var(--%NS%bx-bg-surface));
}
.centered-modal-inner-content-container[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  min-block-size: 0;
  padding: var(--%NS%bx-space-4, 1rem) var(--%NS%bx-space-6, 1.5rem);
  gap: var(--%NS%bx-space-6, 1.5rem);
  box-sizing: border-box;
}
.centered-modal-top-group[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: var(--%NS%bx-space-4, 1rem);
  flex-grow: 1;
  min-height: 0;
}
.centered-modal-main-content-container[_ngcontent-%COMP%] {
  flex-grow: 1;
  overflow-y: auto;
  min-height: 0;
}
.centered-modal-header[_ngcontent-%COMP%] {
  flex-shrink: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: var(--%NS%bx-space-2, 0.5rem);
}
.centered-modal-footer[_ngcontent-%COMP%] {
  flex-shrink: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: var(--%NS%bx-space-2, 0.5rem);
}
.centered-modal-frame.centered-modal-animate-in[_ngcontent-%COMP%] {
  transform: scale(1);
  transition: transform 175ms linear(0, 0.32 12%, 0.78 30%, 0.97 52%, 1.012 70%, 1);
}
.centered-modal-frame.centered-modal-animate-in[_ngcontent-%COMP%]::before {
  opacity: 1;
  transition: opacity 175ms linear;
}
.centered-modal-frame.centered-modal-animate-out[_ngcontent-%COMP%] {
  transform: scale(0.975);
  transition: transform 175ms ease-in-out;
}
.centered-modal-frame.centered-modal-animate-out[_ngcontent-%COMP%]::before {
  opacity: 0;
  transition: opacity 175ms linear;
}
.centered-modal-content-wrapper.centered-modal-animate-in[_ngcontent-%COMP%] {
  opacity: 1;
  transition: opacity 175ms linear(0, 0.32 12%, 0.78 30%, 0.97 52%, 1.012 70%, 1);
}
.centered-modal-content-wrapper.centered-modal-animate-out[_ngcontent-%COMP%] {
  opacity: 0;
  transition: opacity 175ms linear;
}
@starting-style {
  .centered-modal-frame.centered-modal-animate-in[_ngcontent-%COMP%] {
    transform: scale(0.975);
  }
  .centered-modal-frame.centered-modal-animate-in[_ngcontent-%COMP%]::before {
    opacity: 0;
  }
  .centered-modal-content-wrapper.centered-modal-animate-in[_ngcontent-%COMP%] {
    opacity: 0;
  }
}
[data-bx-surface][_ngcontent-%COMP%] {
  --%NS%bx-glass-surface: var(--%NS%bx-modal-bg, var(--%NS%bx-panel-bg, var(--%NS%bx-bg-surface)));
  --%NS%bx-glass-text: var(--%NS%bx-modal-text, var(--%NS%bx-panel-text, var(--%NS%bx-text-primary)));
  --%NS%bx-glass-shadow: var(--%NS%bx-shadow-modal, 0 8px 20px rgba(0, 0, 0, 0.12));
  --%NS%bx-glass-min-opacity: var(--%NS%bx-panel-material-opacity, clamp(0.52, var(--%NS%bx-glass-material-opacity, 0.4561) + 0.45, 1));
  --%NS%bx-glass-rim-opacity: 1;
  background: var(--%NS%bx-modal-bg, var(--%NS%bx-panel-bg, var(--%NS%bx-bg-surface)));
  color: var(--%NS%bx-modal-text, var(--%NS%bx-panel-text, var(--%NS%bx-text-primary)));
  border: var(--%NS%bx-border-width, 1px) var(--%NS%bx-border-style, solid) var(--%NS%bx-glass-edge, var(--%NS%bx-border-default));
  box-shadow: var(--%NS%bx-shadow-modal, 0 8px 20px rgba(0, 0, 0, 0.12));
  --%NS%bx-glass-min-opacity: max( var(--%NS%bx-panel-material-opacity, clamp(0.52, var(--%NS%bx-glass-material-opacity, 0.4561) + 0.45, 1)), var(--%NS%bx-modal-material-opacity, 0) );
  --%NS%bx-refraction-min-opacity: max(0.72, var(--%NS%bx-modal-material-opacity, 0.52));
}
.bx-modal-close[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 2rem;
  height: 2rem;
  padding: 0;
  border: none;
  border-radius: var(--%NS%bx-rounded-sm, 0.25rem);
  background: transparent;
  color: inherit;
  cursor: pointer;
}
.bx-modal-close[_ngcontent-%COMP%]:hover {
  background: var(--%NS%bx-bg-element-hover);
}
.bx-modal-close[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--%NS%bx-border-brand);
  outline-offset: 2px;
}`]})};var Hn=[`*`];function Gn(o,n){if(o&1){let e=Jb();Os(0,`bx-modal-banner`,10),br(`close`,function(){Jc(e);let a=Ql(2);return el(a.close.emit(`cancel`))}),ba()}if(o&2){let e=Ql(2);fa(`header`,e.config()?.header)(`closeLabel`,e.config()?.closeLabel??`Close dialog`)(`titleId`,(e.id()??``)+`-title`)(`showCloseButton`,e.config()?.disableClose!==!0&&e.config()?.style?.showCloseButton!==!1)}}function qn(o,n){o&1&&Xl(0)}function Un(o,n){if(o&1){let e=Jb();Os(0,`button`,13),br(`click`,function(){Jc(e);let a=Ql(3);return el(a.close.emit(`cancel`))}),Cy(1,`bx-icon`,14),ba()}if(o&2){let e=Ql(3);Ro(`aria-label`,e.resolvedCloseLabel())}}function Kn(o,n){if(o&1&&(Os(0,`div`,6),Ey(1,qn,1,0,`ng-container`,11),bT(2,Un,2,1,`button`,12),ba()),o&2){let e=Ql(2);Ul(),fa(`ngTemplateOutlet`,e.headerTemplate()),Ul(),gT(!e.hasBanner()&&e.config()?.disableClose!==!0&&e.config()?.style?.showCloseButton!==!1?2:-1)}}function Qn(o,n){o&1&&Xl(0)}function Xn(o,n){if(o&1&&(Os(0,`div`,9),Ey(1,Qn,1,0,`ng-container`,11),ba()),o&2){let e=Ql(2);Ul(),fa(`ngTemplateOutlet`,e.footerTemplate())}}function Yn(o,n){if(o&1&&(Os(0,`div`,3)(1,`div`,4),bT(2,Gn,1,4,`bx-modal-banner`,5),bT(3,Kn,3,2,`div`,6),Os(4,`div`,7),Xl(5,8),ba()(),bT(6,Xn,2,1,`div`,9),ba()),o&2){let e=Ql(),t=CT(3);tm(`--%NS%anim-duration`,e.animationDuration(),`ms`),fa(`ngClass`,e.modalClasses())(`id`,e.id()??``),Ul(),BT(e.config()&&e.config()?.style?.wrapperStyles?e.config()?.style?.wrapperStyles:``),HT(e.config()&&e.config()?.style?.wrapperClasses?e.config()?.style?.wrapperClasses:``),Ul(),gT(e.hasBanner()?2:-1),Ul(),gT(e.headerTemplate()?3:-1),Ul(2),fa(`ngTemplateOutlet`,t),Ul(),gT(e.footerTemplate()?6:-1)}}function $n(o,n){if(o&1){let e=Jb();Os(0,`bx-modal-bottom-sheet`,15),br(`close`,function(){Jc(e);let a=Ql();return el(a.close.emit(`cancel`))}),Xl(1,8),ba()}if(o&2){let e=Ql(),t=CT(3);fa(`headerTemplate`,e.headerTemplate())(`footerTemplate`,e.footerTemplate())(`config`,e.config())(`id`,e.id())(`isOpen`,e.isOpen())(`isAnimated`,e.isAnimated())(`hasBanner`,e.hasBanner())(`animationDuration`,e.animationDuration()),Ul(),fa(`ngTemplateOutlet`,t)}}function Jn(o,n){o&1&&Py(0)}var ne=class o{i18n=m(xQ,{optional:!0});resolvedCloseLabel=K(()=>mQ(this.config()?.closeLabel??`Close dialog`,this.i18n));renderOpenClass=W(!1);modalClasses=K(()=>{let n=this.layout()===`left`,e=this.layout()===`right`,t=this.isAnimated(),a=this.renderOpenClass();return{"side-modal-content-wrapper":!0,"side-modal-default-style":this.hasDefaultContentWrapperClass()||this.hasBanner(),"with-footer":this.footerTemplate()!==null,left:n,right:e,"side-modal-animate-in":t?a:!0,"side-modal-animate-out":t?!a:!1}});layout=ke.required();headerTemplate=ke.required();footerTemplate=ke.required();config=ke.required();id=ke.required();isOpen=ke.required();isAnimated=ke.required();isBottomSheetModalActive=ke.required();animationDuration=ke.required();hasDefaultContentWrapperClass=ke.required();hasBanner=ke.required();close=wk();bottomSheet=u4(L);constructor(){let n=m(ye).nativeElement,e=!1;Sk(t=>{let a=this.isOpen(),s=this.isAnimated(),p=n.ownerDocument.defaultView,h=a&&!e;if(e=a,this.renderOpenClass.set(a&&(!s||!h)),!a||!s||!h||!p)return;let C=p.requestAnimationFrame(()=>{C=p.requestAnimationFrame(()=>this.renderOpenClass.set(!0))});t(()=>p.cancelAnimationFrame(C))})}static ɵfac=function(e){return new(e||o)};static ɵcmp=$n$1({type:o,selectors:[[`bx-modal-side`]],viewQuery:function(e,t){e&1&&Ly(t.bottomSheet,L,5),e&2&&em()},inputs:{layout:[1,`layout`],headerTemplate:[1,`headerTemplate`],footerTemplate:[1,`footerTemplate`],config:[1,`config`],id:[1,`id`],isOpen:[1,`isOpen`],isAnimated:[1,`isAnimated`],isBottomSheetModalActive:[1,`isBottomSheetModalActive`],animationDuration:[1,`animationDuration`],hasDefaultContentWrapperClass:[1,`hasDefaultContentWrapperClass`],hasBanner:[1,`hasBanner`]},outputs:{close:`close`},ngContentSelectors:Hn,decls:4,vars:1,consts:[[`contentTemplate`,``],[`bxSurface`,``,`data-bx-light-scope`,``,3,`ngClass`,`id`,`--%NS%anim-duration`],[3,`headerTemplate`,`footerTemplate`,`config`,`id`,`isOpen`,`isAnimated`,`hasBanner`,`animationDuration`],[`bxSurface`,``,`data-bx-light-scope`,``,3,`ngClass`,`id`],[1,`side-modal-inner-content-container`],[3,`header`,`closeLabel`,`titleId`,`showCloseButton`],[1,`side-modal-header`],[1,`side-modal-main-content-container`],[3,`ngTemplateOutlet`],[1,`side-modal-footer`],[3,`close`,`header`,`closeLabel`,`titleId`,`showCloseButton`],[4,`ngTemplateOutlet`],[`type`,`button`,1,`bx-modal-close`],[`type`,`button`,1,`bx-modal-close`,3,`click`],[`name`,`x`],[3,`close`,`headerTemplate`,`footerTemplate`,`config`,`id`,`isOpen`,`isAnimated`,`hasBanner`,`animationDuration`]],template:function(e,t){e&1&&(jy(),bT(0,Yn,7,12,`div`,1)(1,$n,2,9,`bx-modal-bottom-sheet`,2),Ey(2,Jn,1,0,`ng-template`,null,0,y1)),e&2&&gT(t.isBottomSheetModalActive()?1:0)},dependencies:[RD,ym,L,gA,j,U],styles:[`
.side-modal-content-wrapper[_ngcontent-%COMP%] {
  position: fixed;
  top: 0;
  height: var(--%NS%bx-modal-side-height, 100vh);
  z-index: 400;
}
@supports (height: 100dvh) {
  .side-modal-content-wrapper[_ngcontent-%COMP%] {
    height: var(--%NS%bx-modal-side-height, 100dvh);
  }
}
.side-modal-content-wrapper[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  min-inline-size: 0;
  min-block-size: 0;
  overflow: hidden;
  border-radius: 0;
  padding: var(--%NS%bx-space-4, 1rem);
  gap: var(--%NS%bx-space-4, 1rem);
  transition: transform var(--%NS%anim-duration, 175ms) linear(0, 0.18 12%, 0.58 32%, 0.87 56%, 0.98 78%, 1);
}
.side-modal-content-wrapper.left[_ngcontent-%COMP%] {
  left: 0;
}
.side-modal-content-wrapper.right[_ngcontent-%COMP%] {
  right: 0;
}
.side-modal-content-wrapper.side-modal-animate-in[_ngcontent-%COMP%] {
  transform: translateX(0) !important;
}
.side-modal-content-wrapper.side-modal-animate-out.left[_ngcontent-%COMP%] {
  transform: translateX(-100%);
}
.side-modal-content-wrapper.side-modal-animate-out.right[_ngcontent-%COMP%] {
  transform: translateX(100%);
}
.side-modal-content-wrapper.with-footer[_ngcontent-%COMP%] {
  justify-content: space-between;
}
.side-modal-content-wrapper[_ngcontent-%COMP%]   .side-modal-inner-content-container[_ngcontent-%COMP%] {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: var(--%NS%bx-space-4, 1rem);
  min-height: 0;
}
@media (max-width: 768px) {
  .side-modal-content-wrapper[_ngcontent-%COMP%] {
    max-width: 90vw;
    max-width: 95dvw;
  }
}
.side-modal-default-style[_ngcontent-%COMP%] {
  background: var(--%NS%bx-modal-bg, var(--%NS%bx-bg-surface));
  color: var(--%NS%bx-modal-text, var(--%NS%bx-text-primary));
  box-shadow: var(--%NS%bx-shadow-modal, 0 8px 20px rgba(0, 0, 0, 0.12));
  max-width: 85vw;
  max-width: 85dvw;
}
.side-modal-main-content-container[_ngcontent-%COMP%] {
  flex-grow: 1;
  overflow-y: auto;
  min-height: 0;
  max-height: none;
}
.side-modal-header[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  gap: var(--%NS%bx-space-2, 0.5rem);
  flex-shrink: 0;
  min-inline-size: 0;
  width: 100%;
  padding-top: var(--%NS%bx-space-3, 0.75rem);
}
.side-modal-footer[_ngcontent-%COMP%] {
  display: flex;
  justify-content: flex-end;
  gap: var(--%NS%bx-space-2, 0.5rem);
  flex-shrink: 0;
  width: 100%;
  padding-bottom: var(--%NS%bx-space-3, 0.75rem);
}
[data-bx-surface][_ngcontent-%COMP%] {
  --%NS%bx-glass-surface: var(--%NS%bx-modal-bg, var(--%NS%bx-panel-bg, var(--%NS%bx-bg-surface)));
  --%NS%bx-glass-text: var(--%NS%bx-modal-text, var(--%NS%bx-panel-text, var(--%NS%bx-text-primary)));
  --%NS%bx-glass-shadow: var(--%NS%bx-shadow-modal, 0 8px 20px rgba(0, 0, 0, 0.12));
  --%NS%bx-glass-min-opacity: var(--%NS%bx-panel-material-opacity, clamp(0.52, var(--%NS%bx-glass-material-opacity, 0.4561) + 0.45, 1));
  --%NS%bx-glass-rim-opacity: 1;
  background: var(--%NS%bx-modal-bg, var(--%NS%bx-panel-bg, var(--%NS%bx-bg-surface)));
  color: var(--%NS%bx-modal-text, var(--%NS%bx-panel-text, var(--%NS%bx-text-primary)));
  border: var(--%NS%bx-border-width, 1px) var(--%NS%bx-border-style, solid) var(--%NS%bx-glass-edge, var(--%NS%bx-border-default));
  box-shadow: var(--%NS%bx-shadow-modal, 0 8px 20px rgba(0, 0, 0, 0.12));
  --%NS%bx-glass-min-opacity: max( var(--%NS%bx-panel-material-opacity, clamp(0.52, var(--%NS%bx-glass-material-opacity, 0.4561) + 0.45, 1)), var(--%NS%bx-modal-material-opacity, 0) );
  --%NS%bx-refraction-min-opacity: max(0.72, var(--%NS%bx-modal-material-opacity, 0.52));
  box-shadow: var(--%NS%bx-glass-shadow), 0 0 0 100vmax var(--%NS%bx-modal-dimming-background, transparent);
}
.bx-modal-close[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  inline-size: var(--%NS%bx-panel-close-size, 2rem);
  block-size: var(--%NS%bx-panel-close-size, 2rem);
  padding: 0;
  border: none;
  border-radius: var(--%NS%bx-rounded-sm, 0.25rem);
  background: transparent;
  color: inherit;
  cursor: pointer;
}
.bx-modal-close[_ngcontent-%COMP%]:hover {
  background: var(--%NS%bx-bg-element-hover);
}
.bx-modal-close[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--%NS%bx-border-brand);
  outline-offset: 2px;
}`]})};var te=class o{closeLabel=W(`Close dialog`);layout=W(`center`);animate=W(!0);hasBackdrop=W(!0);showCloseButton=W(!0);contentWrapper=W(!0);overrideFullHeight=W(!1);disableClose=W(!1);disableCloseOnBackdropClick=W(!1);disableCloseOnNavigation=W(!1);closeGuardOnlyOnCancel=W(!0);nestedOpacityFloors=W([.9,1]);update(n){n.closeLabel!==void 0&&this.closeLabel.set(n.closeLabel),n.animate!==void 0&&this.animate.set(n.animate),n.hasBackdrop!==void 0&&this.hasBackdrop.set(n.hasBackdrop),n.disableCloseOnBackdropClick!==void 0&&this.disableCloseOnBackdropClick.set(n.disableCloseOnBackdropClick)}static ɵfac=function(e){return new(e||o)};static ɵprov=V({token:o,factory:o.ɵfac,providedIn:`root`})};var nt=[`modalContainer`];var tt=[`contentTemplate`];var ot=[`dynamicContainer`];function at(o,n){if(o&1){let e=Jb();Os(0,`bx-modal-backdrop`,6),br(`click`,function(a){Jc(e);let s=Ql();return el(s.onBackdropClick(a))}),ba()}if(o&2){let e=Ql();fa(`isAnimated`,e.isAnimated())(`isOpen`,e.isOpen())}}function it(o,n){if(o&1){let e=Jb();Os(0,`bx-modal-side`,7),br(`close`,function(a){Jc(e);let s=Ql();return el(s.close(a,void 0,!0))}),Xl(1,8),ba()}if(o&2){let e=Ql(),t=CT(6);fa(`layout`,e.effectiveLayout())(`headerTemplate`,e.headerTemplate())(`footerTemplate`,e.footerTemplate())(`config`,e.config())(`id`,e.id())(`isOpen`,e.isOpen())(`isAnimated`,e.isAnimated())(`isBottomSheetModalActive`,e.isBottomSheetModalActive())(`animationDuration`,e.animationDuration)(`hasDefaultContentWrapperClass`,e.hasDefaultContentWrapperClass())(`hasBanner`,e.hasBanner()),Ul(),fa(`ngTemplateOutlet`,t)}}function lt(o,n){if(o&1){let e=Jb();Os(0,`bx-modal-centered`,9),br(`close`,function(a){Jc(e);let s=Ql();return el(s.close(a,void 0,!0))})(`onBackdropClick`,function(a){Jc(e);let s=Ql();return el(s.onBackdropClick(a))}),Xl(1,8),ba()}if(o&2){let e=Ql(),t=CT(6);fa(`headerTemplate`,e.headerTemplate())(`footerTemplate`,e.footerTemplate())(`config`,e.config())(`id`,e.id())(`isOpen`,e.isOpen())(`isAnimated`,e.isAnimated())(`isBottomSheetModalActive`,e.isBottomSheetModalActive())(`animationDuration`,e.animationDuration)(`hasDefaultContentWrapperClass`,e.hasDefaultContentWrapperClass())(`hasBanner`,e.hasBanner()),Ul(),fa(`ngTemplateOutlet`,t)}}function rt(o,n){if(o&1&&(Os(0,`div`,10),Xl(1,null,2),ba()),o&2){let e=Ql();BT(e.config().contentStyles),fa(`ngClass`,e.config().contentClasses)}}var A=class o{i18n=m(xQ,{optional:!0});elementRef=m(ye);cdkTrapFocus=m(LR,{self:!0});modalService=m(Me);modalGlobalSettingsService=m(te);scrollLockService=m(kE);windowDimensionsService=m(Cd);destroyRef=m(me);document=m(U$1);bxA11yService=m(Fr);modalRef=m(E);sideModalComponents=u4(ne);centeredModalComponents=u4(ee);headerTemplate=W(null);footerTemplate=W(null);isBottomSheetModalActive=W(!1);windowDimensions=this.windowDimensionsService.dimensions;id=K(()=>this.config().id??this.scrollLockId);dialogLabel=K(()=>mQ(this.config().ariaLabel??this.config().header?.text??`Dialog`,this.i18n));dialogLabelledBy=K(()=>this.config().ariaLabelledBy||(!this.config().ariaLabel&&this.config().header?.text?`${this.id()}-title`:null));hasBanner=K(()=>{let n=this.config(),e=n.header,t=e?.text;return!!(t&&(AD(t)?!!t.key:t.length>0)||e?.icon||e?.loading||!n.disableClose&&n.style.showCloseButton!==!1&&!this.headerTemplate())});hasDefaultContentWrapperClass=K(()=>this.config().style.contentWrapper!==!1);materialOpacity=K(()=>{let n=this.nestingDepth(),e=this.modalGlobalSettingsService.nestedOpacityFloors();if(n<=0||e.length===0)return .52;let t=e[Math.min(n-1,e.length-1)],a=n===1?.9:1;return Number.isFinite(t)?Math.max(.52,Math.min(1,t)):a});modalContainer=d4(`modalContainer`);contentTemplate=d4(`contentTemplate`);dynamicContainer=d4(`dynamicContainer`,{read:pr});config=this.modalRef.config;animationDuration=175;isOpen=W(!0);effectiveLayout=W(`center`);isCentered=W(!1);isSide=W(!1);nestingDepth=W(0);isAnimated=K(()=>!this.bxA11yService.isReducedMotion()&&this.config().style.animate);componentRef;closeFunction;backdropClickSubject=new xe;backdropClick=this.backdropClickSubject.asObservable();layoutFocus;isCloseGuardPending=!1;scrollLockId=yZ();_sortedBreakpoints=[];_currentVcr=null;constructor(){this.cdkTrapFocus.autoCapture=!0,this.initKeyboardSubscription(),Sk(()=>{this.dynamicContainer(),this.effectiveLayout();let n=this.layoutFocus;n?.isConnected&&(this.layoutFocus=void 0,n.closest(`[inert]`)||n.focus({preventScroll:!0}))}),tt$1(()=>{this.cdkTrapFocus.enabled=this.modalService.isTopmost(this.modalRef)}),tt$1(()=>{let n=this.windowDimensions().width;this.handleLayout(n)}),tt$1(()=>{let n=this.dynamicContainer();n&&this.componentRef&&(this._currentVcr=n,n.indexOf(this.componentRef.hostView)===-1&&n.insert(this.componentRef.hostView))})}ngOnInit(){this.initBreakpointCache(),this.scrollLockService.disableScroll(this.scrollLockId,{animationDuration:this.animationDuration,handleTouchInput:!0,mobileOnlyTouchPrevention:!0})}ngAfterViewInit(){let n=this.windowDimensionsService.dimensions().width;this.handleLayout(n)}ngOnDestroy(){this.componentRef&&!this.componentRef.hostView.destroyed&&this.componentRef.destroy(),this.dynamicContainer()?.clear(),this.scrollLockService.enableScroll(this.scrollLockId),this.closeFunction=void 0,this.backdropClickSubject.complete()}setHeaderTemplate(n){this.headerTemplate.set(n)}setFooterTemplate(n){this.footerTemplate.set(n)}close(n=`cancel`,e=void 0,t=!1,a=!1){if(!this.isOpen()||this.isCloseGuardPending&&!a)return;if(a){this.handleClose(n,e);return}if(this.config().disableClose===!0&&t){this.resetBottomSheetModalLayout();return}let s=this.config().closeGuardOnlyOnCancel!==!0||n!==`confirm`,p=this.config().closeGuard;if(s&&p){this.isCloseGuardPending=!0;try{let h=p.canClose(this.modalService),C=h instanceof Z$1?h:h instanceof Promise?wr(h):ki(h);this.isBottomSheetModalActive()&&this.resetBottomSheetModalLayout(),C.pipe(as(1),md(this.destroyRef),Nh(()=>{this.isCloseGuardPending=!1})).subscribe(z=>{z&&(!t||!this.config().disableClose)&&this.handleClose(n,e)})}catch(h){throw this.isCloseGuardPending=!1,h}return}this.handleClose(n,e)}onBackdropClick(n){n.preventDefault(),n.stopPropagation(),this.isOpen()&&(this.backdropClickSubject.next(n),this.config().style?.hasBackdrop&&this.config().disableCloseOnBackdropClick!==!0&&this.close(`cancel`,void 0,!0))}initKeyboardSubscription(){fi(this.document,`keydown`).pipe(Dr(n=>n.key===`Escape`&&!n.defaultPrevented),md(this.destroyRef)).subscribe(n=>{this.modalService.isTopmost(this.modalRef)&&(n.preventDefault(),this.close(`cancel`,void 0,!0))})}initBreakpointCache(){let n=this.config().style?.breakpoints;if(n&&Object.keys(n).length>0){let e=this.windowDimensionsService.breakpoints;this._sortedBreakpoints=Object.keys(n).map(t=>({width:e[t],layout:n[t]??this.config().style.layout??`center`})).sort((t,a)=>t.width-a.width)}}async handleClose(n,e){if(!this.isOpen())return;this.isOpen.set(!1),this.setBottomSheetModalFinishedState(!0);let t={data:e,state:n};this.closeFunction&&this.closeFunction(t)}handleLayout(n){if(!this.isOpen())return;let e=this.config().style.layout;for(let C of this._sortedBreakpoints)if(n<=C.width){e=C.layout;break}let t=e===`left`||e===`right`,a=this.effectiveLayout()!==e,s=this.document.activeElement;if(a&&this.document.defaultView&&s instanceof HTMLElement&&this.elementRef.nativeElement.contains(s)&&(this.layoutFocus=s),a&&this._currentVcr&&this.componentRef){let C=this._currentVcr.indexOf(this.componentRef.hostView);C!==-1&&this._currentVcr.detach(C)}this.effectiveLayout.set(e),this.isSide.set(t),this.isCentered.set(e===`center`||e===`bottom-sheet`);let p=e===`bottom-sheet`,h=this.isBottomSheetModalActive();p&&!h?this.isBottomSheetModalActive.set(!0):!p&&h&&this.isBottomSheetModalActive.set(!1)}getBottomSheetModal(){return this.sideModalComponents()[0]?.bottomSheet()[0]??this.centeredModalComponents()[0]?.bottomSheet()[0]}resetBottomSheetModalLayout(){let n=this.getBottomSheetModal();n&&n.currentTranslateY.set(0)}setBottomSheetModalFinishedState(n){let e=this.getBottomSheetModal();e&&e.isSwipingVerticallyFinished.set(n)}static ɵfac=function(e){return new(e||o)};static ɵcmp=$n$1({type:o,selectors:[[`bx-modal`]],viewQuery:function(e,t){e&1&&Ly(t.sideModalComponents,ne,5)(t.centeredModalComponents,ee,5)(t.modalContainer,nt,5)(t.contentTemplate,tt,5)(t.dynamicContainer,ot,5,pr),e&2&&em(5)},hostAttrs:[`role`,`dialog`,`aria-modal`,`true`,`tabindex`,`-1`],hostVars:10,hostBindings:function(e,t){e&2&&(Ro(`data-bx-modal-task`,t.id())(`aria-label`,t.dialogLabelledBy()?null:t.dialogLabel())(`aria-labelledby`,t.dialogLabelledBy())(`aria-describedby`,t.config().ariaDescribedBy||null),tm(`--%NS%bx-modal-material-opacity`,t.materialOpacity()),Lr(`has-backdrop`,t.config().style.hasBackdrop)(`is-nested`,t.nestingDepth()>0))},features:[JM([LR])],decls:7,vars:2,consts:[[`modalContainer`,``],[`contentTemplate`,``],[`dynamicContainer`,``],[3,`isAnimated`,`isOpen`],[3,`layout`,`headerTemplate`,`footerTemplate`,`config`,`id`,`isOpen`,`isAnimated`,`isBottomSheetModalActive`,`animationDuration`,`hasDefaultContentWrapperClass`,`hasBanner`],[3,`headerTemplate`,`footerTemplate`,`config`,`id`,`isOpen`,`isAnimated`,`isBottomSheetModalActive`,`animationDuration`,`hasDefaultContentWrapperClass`,`hasBanner`],[3,`click`,`isAnimated`,`isOpen`],[3,`close`,`layout`,`headerTemplate`,`footerTemplate`,`config`,`id`,`isOpen`,`isAnimated`,`isBottomSheetModalActive`,`animationDuration`,`hasDefaultContentWrapperClass`,`hasBanner`],[3,`ngTemplateOutlet`],[3,`close`,`onBackdropClick`,`headerTemplate`,`footerTemplate`,`config`,`id`,`isOpen`,`isAnimated`,`isBottomSheetModalActive`,`animationDuration`,`hasDefaultContentWrapperClass`,`hasBanner`],[1,`modal-content`,3,`ngClass`]],template:function(e,t){if(e&1&&(bT(0,at,1,2,`bx-modal-backdrop`,3),Xb(1,null,0),bT(3,it,2,12,`bx-modal-side`,4)(4,lt,2,11,`bx-modal-centered`,5),Kl(),Ey(5,rt,3,3,`ng-template`,null,1,y1)),e&2){let a;gT(t.config().style.hasBackdrop&&(t.isSide()||t.isBottomSheetModalActive())?0:-1),Ul(3),gT((a=!0)===t.isSide()?3:a===t.isCentered()?4:-1)}},dependencies:[gA,ym,ee,ne,Z],styles:[`
[_nghost-%COMP%] {
  --%NS%bx-modal-dimming-background: transparent;
  --%NS%bx-modal-backdrop-fill: transparent;
  --%NS%bx-modal-backdrop-tone: var(--%NS%bx-modal-backdrop-background, rgb(0 0 0 / 32%));
  position: fixed;
  inset: 0;
  z-index: 400;
  pointer-events: none;
}
.has-backdrop[_nghost-%COMP%] {
  --%NS%bx-modal-dimming-background: var(--%NS%bx-modal-backdrop-tone);
}
.has-backdrop.is-nested[_nghost-%COMP%] {
  --%NS%bx-modal-dimming-background: transparent;
  --%NS%bx-modal-backdrop-fill: var(--%NS%bx-modal-backdrop-tone);
}
@supports not ((backdrop-filter: blur(1px)) or (-webkit-backdrop-filter: blur(1px))) {
  [_nghost-%COMP%] {
    --%NS%bx-modal-backdrop-tone: var(--%NS%bx-modal-backdrop-background, rgb(0 0 0 / 50%));
  }
}
@media (prefers-reduced-transparency: reduce), (forced-colors: active) {
  [_nghost-%COMP%] {
    --%NS%bx-modal-backdrop-tone: rgb(0 0 0 / 60%);
  }
  .has-backdrop[_nghost-%COMP%] {
    --%NS%bx-modal-dimming-background: transparent;
    --%NS%bx-modal-backdrop-fill: var(--%NS%bx-modal-backdrop-tone);
  }
}
[data-bx-reduced-transparency=true][_nghost-%COMP%], [data-bx-reduced-transparency=true]   [_nghost-%COMP%] {
  --%NS%bx-modal-backdrop-tone: rgb(0 0 0 / 60%);
  --%NS%bx-modal-dimming-background: transparent;
  --%NS%bx-modal-backdrop-fill: var(--%NS%bx-modal-backdrop-tone);
}
[_nghost-%COMP%]    > *[_ngcontent-%COMP%] {
  pointer-events: auto;
}
.modal-content[_ngcontent-%COMP%] {
  display: flex;
  flex: 1 1 auto;
  min-inline-size: 0;
  min-block-size: 0;
  inline-size: 100%;
}`],changeDetection:1})};var _e=new T(`MODAL_DATA`);var Me=class o{destroyRef=m(me);router=m(dt);injector=m(se);applicationRef=m(fr);environmentInjector=m(gt);rendererFactory2=m(It);document=m(U$1);modalGlobalSettingsService=m(te);renderer;isolatedElements=/* @__PURE__ */ new Map;modals=W(/* @__PURE__ */ new Set);isolationObserver;constructor(){this.renderer=this.rendererFactory2.createRenderer(null,null),this.createSubscriptions(),this.destroyRef.onDestroy(()=>{this.isolationObserver?.disconnect();for(let[n,e]of this.isolatedElements)this.restoreIsolatedElement(n,e);this.isolatedElements.clear()})}open(n,e){let a=new E(new J(this.resolveConfig(e)),n,this),s=se.create({providers:[{provide:_e,useValue:e?.data},{provide:E,useValue:a}],parent:this.injector}),p=id(A,{environmentInjector:this.environmentInjector,elementInjector:s});a.attachContainer(p),p.onDestroy(()=>{this.applicationRef.detachView(p.hostView),p.location.nativeElement.remove()});try{this.applicationRef.attachView(p.hostView),this.document.body.appendChild(p.location.nativeElement),this.modals.update(hn=>new Set(hn).add(a)),this.syncNestingDepth();let h=se.create({providers:[{provide:A,useValue:p.instance}],parent:p.injector}),C=id(n,{environmentInjector:this.environmentInjector,elementInjector:h}),z=C.location.nativeElement;return a.attachContent(C),this.renderer.setStyle(z,`height`,`97%`),this.renderer.setStyle(z,`width`,`100%`),this.renderer.setStyle(z,`display`,`flex`),this.renderer.setStyle(z,`flex-grow`,`1`),a.open(),p.instance.isOpen()&&this.isIModal(C.instance)&&(C.instance.modal=a,C.instance.onModalInit()),a}catch(h){throw p.hostView.destroyed||p.destroy(),this.unregister(a),h}}close(n){n.close()}unregister(n){this.modals.update(e=>{let t=new Set(e);return t.delete(n),t}),this.syncNestingDepth()}closeAll(n=!1){this.modals().forEach(e=>{(e.config().disableCloseOnNavigation!==!0||!n)&&e.close(`cancel`,void 0,!0)})}find(n){for(let e of this.modals())if(e.componentType===n)return!0;return!1}modalsCount(){return this.modals().size}isTopmost(n){return[...this.modals()].at(-1)===n}restoreTaskFocus(){if(!this.document.defaultView)return;let n=[...this.modals()].at(-1)?.modalContainerElement,e=this.document.activeElement;if(!n||e instanceof Node&&n.contains(e))return;let t=e instanceof HTMLElement?e.closest(`[data-bx-overlay-modal-owner]`)?.dataset.bxOverlayModalOwner:void 0;if(t&&t===n.dataset.bxModalTask)return;(n.querySelector(`button:not(:disabled), input:not(:disabled), select:not(:disabled), textarea:not(:disabled), a[href], [tabindex="0"]`)??n).focus({preventScroll:!0})}syncNestingDepth(){for(let[e,t]of[...this.modals()].entries())t.setNestingDepth(e);this.syncAccessibilityIsolation();let n=this.document.defaultView;this.modals().size&&n&&!this.isolationObserver?(this.isolationObserver=new n.MutationObserver(()=>this.syncAccessibilityIsolation()),this.isolationObserver.observe(this.document.body,{childList:!0,subtree:!0})):this.modals().size||(this.isolationObserver?.disconnect(),this.isolationObserver=void 0)}syncAccessibilityIsolation(){if(!this.document.defaultView)return;let n=[...this.modals()].at(-1)?.modalContainerElement,e=/* @__PURE__ */ new Set,t=a=>{for(let s of Array.from(a.children)){if(!(s instanceof HTMLElement)||s===n)continue;let p=n?.dataset.bxModalTask,h=p&&(s.dataset.bxOverlayModalOwner===p||Array.from(s.querySelectorAll(`[data-bx-overlay-modal-owner]`)).some(C=>C.dataset.bxOverlayModalOwner===p));s.classList.contains(`cdk-overlay-container`)?t(s):h||e.add(s)}};n&&t(this.document.body);for(let[a,s]of this.isolatedElements)e.has(a)||(this.restoreIsolatedElement(a,s),this.isolatedElements.delete(a));for(let a of e)this.isolatedElements.has(a)||this.isolatedElements.set(a,{inert:a.inert,ariaHidden:a.getAttribute(`aria-hidden`)}),a.inert=!0,a.setAttribute(`aria-hidden`,`true`)}restoreIsolatedElement(n,e){n.inert=e.inert,e.ariaHidden===null?n.removeAttribute(`aria-hidden`):n.setAttribute(`aria-hidden`,e.ariaHidden)}createSubscriptions(){this.router.events.pipe(Dr(n=>n instanceof Ze),ls(1),md()).subscribe(()=>{this.modalsCount()>0&&this.closeAll(!0)})}isIModal(n){return typeof n==`object`&&n!==null&&`onModalInit`in n&&typeof n.onModalInit==`function`}resolveConfig(n){let e=n?.style?.animate??this.modalGlobalSettingsService.animate(),t={layout:n?.style?.layout??this.modalGlobalSettingsService.layout(),animate:e,hasBackdrop:n?.style?.hasBackdrop??this.modalGlobalSettingsService.hasBackdrop(),showCloseButton:n?.style?.showCloseButton??this.modalGlobalSettingsService.showCloseButton(),contentWrapper:n?.style?.contentWrapper??this.modalGlobalSettingsService.contentWrapper(),overrideFullHeight:n?.style?.overrideFullHeight??this.modalGlobalSettingsService.overrideFullHeight(),breakpoints:n?.style?.breakpoints,mobileConfig:n?.style?.mobileConfig,wrapperClasses:n?.style?.wrapperClasses,wrapperStyles:n?.style?.wrapperStyles,closeDelay:n?.style?.closeDelay};return s(r({},n),{closeLabel:n?.closeLabel??this.modalGlobalSettingsService.closeLabel(),disableClose:n?.disableClose??this.modalGlobalSettingsService.disableClose(),disableCloseOnBackdropClick:n?.disableCloseOnBackdropClick??this.modalGlobalSettingsService.disableCloseOnBackdropClick(),disableCloseOnNavigation:n?.disableCloseOnNavigation??this.modalGlobalSettingsService.disableCloseOnNavigation(),closeGuardOnlyOnCancel:n?.closeGuardOnlyOnCancel??this.modalGlobalSettingsService.closeGuardOnlyOnCancel(),style:t})}static ɵfac=function(e){return new(e||o)};static ɵprov=V({token:o,factory:o.ɵfac,providedIn:`root`})};var De=class{};var bn=class extends De{constructor(e,t){super();this.component=e;this.config=t}component;config;canClose(e){return e.open(this.component,this.config).afterClosed().pipe(Tt(a=>a.state===`confirm`))}};var fn=class o{modalRef=m(E);injectedData=m(_e);modal=this.modalRef;data=this.injectedData;onModalInit(){}close(n){this.modal?.close(`cancel`,n)}static ɵfac=function(e){return new(e||o)};static ɵprov=V({token:o,factory:o.ɵfac})};var gn=class o{templateRef=m(Gt);modalCore=m(A,{optional:!0});constructor(){this.modalCore?this.modalCore.setFooterTemplate(this.templateRef):console.warn(`[ModalFooter] Directive used outside of a ModalComponent.`)}static ɵfac=function(e){return new(e||o)};static ɵdir=ue({type:o,selectors:[[``,`appModalFooter`,``]]})};var yn=class o{templateRef=m(Gt);modalCore=m(A,{optional:!0});constructor(){this.modalCore?this.modalCore.setHeaderTemplate(this.templateRef):console.warn(`[ModalHeader] Directive used outside of a ModalComponent.`)}static ɵfac=function(e){return new(e||o)};static ɵdir=ue({type:o,selectors:[[``,`appModalHeader`,``]]})};export{bn as a,gn as c,yn as d,Z as i,j as l,L as n,ee as o,Me as r,fn as s,J as t,ne as u};