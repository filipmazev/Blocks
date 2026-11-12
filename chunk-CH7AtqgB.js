import{Ai as j,Ao as y,B as FP,Ba as rf,Ca as on,Do as xe,E as D,Ei as ie,Ft as M,Ht as Ne,In as Ve,J as G,Ji as kr,Jt as Nt,L as Er,Lo as ze,Mi as jO,Ni as jP,Nr as ce,Oa as pe,On as Un$1,Ot as LP,P as Ee,Po as yt,Qr as f,Rn as Vt,S as Co,So as x0,Ua as rt,Ur as dr,V as Fa,Va as rl,Vo as zv,Vt as N,Wi as ke,Wn as Wn$1,Wr as dx,Wt as Nl,Xa as tf,Xi as kt,Ya as te,Yr as em,Yt as Oa,ar as Ze,b as Bt,ci as ft,cn as R$1,d as Ae,dn as Rt,dt as J$1,en as Pe,gi as hE,gn as St,gr as ae,h as B$1,ii as ff,in as QS,it as Hv,jo as yP,jt as Le,k as Dl,ki as ir,ko as xt,kr as bo,l as AT,li as g,lo as vE,lr as _,mo as w,oi as fn$1,ot as Ie,p as Ar,pa as na,pn as Se,qn as X$1,ri as fe,rn as Q,rr as Z$1,so as ue,sr as Zt,ur as _e,ut as Iu,vt as K,w as Ct,xn as Tt,xo as wt,xr as bE,y as Be,yn as Tn$1,yr as b,z as F,zn as Vv,zo as zn$1}from"./chunk-RnMilSnn.js";import{n as s,t as r}from"./chunk-DFgPOoGa.js";function hn(o,n){if(o&1&&xe(0,`bx-icon`,8),o&2){let e=n,t=w(3),a=FP(1);_e(`visibility`,a.loading?`hidden`:`visible`),R$1(`name`,e.name)(`size`,t.iconSize())(`color`,e.color)(`bgColor`,e.bgColor)(`strokeWidth`,e.strokeWidth)}}function Cn(o,n){if(o&1&&xe(0,`bx-loading-spinner`,7),o&2){let e=w(3),t=FP(1);R$1(`size`,e.iconSize())(`label`,t.loadingLabel??`Loading`)}}function vn(o,n){if(o&1&&(_(0,`span`,5),j(1,hn,1,7,`bx-icon`,6),j(2,Cn,1,2,`bx-loading-spinner`,7),D()),o&2){let e,t=w(2),a=FP(1);_e(`min-inline-size`,t.iconSize(),`px`)(`min-block-size`,t.iconSize(),`px`),y(),F((e=a.icon)?1:-1,e),y(),F(a.loading?2:-1)}}function xn(o,n){if(o&1&&(_(0,`div`,1),j(1,vn,3,6,`span`,3),_(2,`span`,4),X$1(3),D()()),o&2){let e=w(),t=FP(1);y(),F(t.icon||t.loading!==void 0?1:-1),y(2),fe(e.resolvedText())}}function Sn(o,n){if(o&1){let e=wt();_(0,`button`,9),te(`click`,function(){Be(e);let a=w();return Ve(a.close.emit(`cancel`))}),xe(1,`bx-icon`,10),D()}}var P=class o{i18n=f(Se,{optional:!0});resolvedText=g(()=>J$1(this.header()?.text,this.i18n));iconSize=g(()=>{let n=Number(this.header()?.icon?.size??24);return Number.isFinite(n)&&n>0?n:24});header=b.required();showCloseButton=b.required();close=ze();static ɵfac=function(e){return new(e||o)};static ɵcmp=G({type:o,selectors:[[`bx-modal-banner`]],inputs:{header:[1,`header`],showCloseButton:[1,`showCloseButton`]},outputs:{close:`close`},decls:4,vars:3,consts:[[1,`modal-top-banner-container`],[1,`modal-top-banner-title-container`],[`type`,`button`,`aria-label`,`Close dialog`,1,`bx-modal-close`],[1,`modal-icon-area`,3,`min-inline-size`,`min-block-size`],[`aria-live`,`polite`,`aria-atomic`,`true`],[1,`modal-icon-area`],[3,`name`,`size`,`color`,`bgColor`,`strokeWidth`,`visibility`],[3,`size`,`label`],[3,`name`,`size`,`color`,`bgColor`,`strokeWidth`],[`type`,`button`,`aria-label`,`Close dialog`,1,`bx-modal-close`,3,`click`],[`name`,`x`]],template:function(e,t){if(e&1&&(_(0,`div`,0),vE(1),j(2,xn,4,2,`div`,1),j(3,Sn,2,0,`button`,2),D()),e&2){y();let a=jP(t.header());y(),F(a?2:-1),y(),F(t.showCloseButton()?3:-1)}},dependencies:[Vt,Dl],styles:[`
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
}`]})};var ye=class{layout;breakpoints;animate;hasBackdrop;closeDelay;showCloseButton;mobileConfig;contentWrapper;wrapperClasses;wrapperStyles;overrideFullHeight;constructor(n){this.layout=n?.layout??`center`,this.breakpoints=n?.breakpoints,this.animate=n?.animate??!0,this.hasBackdrop=n?.hasBackdrop??!0,this.closeDelay=n?.closeDelay,this.showCloseButton=n?.showCloseButton??!0,this.mobileConfig=n?.mobileConfig??{},this.contentWrapper=n?.contentWrapper??!0,this.wrapperClasses=n?.wrapperClasses??``,this.wrapperStyles=n?.wrapperStyles??``,this.overrideFullHeight=n?.overrideFullHeight??!1}};var Y=class{open;afterClose;closeGuard;closeGuardOnlyOnCancel;disableClose;disableCloseOnBackdropClick;disableCloseOnNavigation;data;style;header;contentClasses;contentStyles;id;constructor(n){this.open=n?.open??!0,this.afterClose=n?.afterClose,this.closeGuard=n?.closeGuard,this.closeGuardOnlyOnCancel=n?.closeGuardOnlyOnCancel??!0,this.disableClose=n?.disableClose??!1,this.disableCloseOnBackdropClick=n?.disableCloseOnBackdropClick??!1,this.disableCloseOnNavigation=n?.disableCloseOnNavigation??!1,this.data=n?.data??null,this.style=new ye(n?.style),this.header=n?.header,this.contentClasses=n?.contentClasses??``,this.contentStyles=n?.contentStyles??``,this.id=n?.id}};var I=class{constructor(n,e,t){this.componentType=e;this.modalService=t;this.configuration=M(n),this.config=this.configuration.asReadonly()}componentType;modalService;configuration;modalState=new on(`opening`);backdropClickSubject=new Pe;afterCloseSubject=new Pe;subscriptions=new Ne;config;contentRef;containerRef;closeTimeout;closeRender;get componentRef(){return this.contentRef}get modalContainerRef(){return this.containerRef}get modalContainerElement(){return this.containerRef?.location.nativeElement}setNestingDepth(n){this.containerRef?.instance.nestingDepth.set(n)}patch(n){this.modalState.value===`closing`||this.modalState.value===`closed`||this.configuration.update(e=>new Y(s(r({},e),{header:n.header===null?void 0:n.header===void 0?e.header:this.patchHeader(e.header,n.header),disableClose:n.disableClose??e.disableClose,disableCloseOnBackdropClick:n.disableCloseOnBackdropClick??e.disableCloseOnBackdropClick,disableCloseOnNavigation:n.disableCloseOnNavigation??e.disableCloseOnNavigation,closeGuardOnlyOnCancel:n.closeGuardOnlyOnCancel??e.closeGuardOnlyOnCancel,contentClasses:n.contentClasses===void 0?e.contentClasses:n.contentClasses??``,contentStyles:n.contentStyles===void 0?e.contentStyles:n.contentStyles??``,style:s(r({},e.style),{showCloseButton:n.style?.showCloseButton??e.style.showCloseButton,wrapperClasses:n.style?.wrapperClasses===void 0?e.style.wrapperClasses:n.style.wrapperClasses??``,wrapperStyles:n.style?.wrapperStyles===void 0?e.style.wrapperStyles:n.style.wrapperStyles??``})})))}backdropClick(){return this.backdropClickSubject.asObservable()}modalState$(){return this.modalState.asObservable()}afterClosed(){return this.afterCloseSubject.asObservable()}attachContainer(n){this.containerRef=n,n.instance.closeFunction=e=>this.handleClose(e),this.subscriptions.add(n.instance.backdropClick.subscribe(e=>this.backdropClickSubject.next(e))),n.onDestroy(()=>this.finishClose({state:`cancel`,data:void 0}))}attachContent(n){this.contentRef=n,this.containerRef&&(this.containerRef.instance.componentRef=n)}open(){this.modalState.value===`opening`&&this.modalState.next(`open`)}close(n=`cancel`,e=void 0,t=!1){this.modalState.value===`closing`||this.modalState.value===`closed`||this.containerRef?.instance.close(n,e,!1,t)}patchHeader(n,e){let t=e.icon;return{text:e.text===void 0?n?.text??``:e.text??``,loading:e.loading??n?.loading,loadingLabel:e.loadingLabel??n?.loadingLabel,icon:t===null?void 0:t===void 0?n?.icon:{name:t.name??n?.icon?.name??`info`,size:t.size??n?.icon?.size,color:t.color??n?.icon?.color,bgColor:t.bgColor??n?.icon?.bgColor,strokeWidth:t.strokeWidth??n?.icon?.strokeWidth}}}handleClose(n){if(this.modalState.value===`closing`||this.modalState.value===`closed`)return;this.modalState.next(`closing`);let e=this.containerRef?.instance.isAnimated()?this.containerRef.instance.animationDuration:0,t=this.containerRef;if(e&&t?.instance.effectiveLayout()===`center`){this.closeRender=Ze({read:()=>{let g=t.location.nativeElement.querySelectorAll(`.centered-modal-frame, .centered-modal-content-wrapper, .modal-backdrop`),u=Array.from(g).flatMap(y=>y.getAnimations());Promise.allSettled(u.map(y=>y.finished)).then(()=>this.finishClose(n))}},{injector:t.injector});return}this.closeTimeout=setTimeout(()=>this.finishClose(n),e)}finishClose(n){if(this.modalState.value===`closed`)return;clearTimeout(this.closeTimeout),this.closeRender?.destroy(),this.subscriptions.unsubscribe(),this.modalState.next(`closed`);let e=this.containerRef;this.containerRef=void 0,this.contentRef=void 0;try{this.config().afterClose?.()}finally{e&&!e.hostView.destroyed&&e.destroy(),this.modalService.unregister(this),this.afterCloseSubject.next(n),this.afterCloseSubject.complete(),this.backdropClickSubject.complete(),this.modalState.complete()}}};var X=class o{i18n=f(Se,{optional:!0});resolvedLabel=g(()=>J$1(this.label(),this.i18n));label=b(`Close dialog`);tabIndex=b(0);isAnimated=b(!1);isOpen=b(!1);click=ze();static ɵfac=function(e){return new(e||o)};static ɵcmp=G({type:o,selectors:[[`bx-modal-backdrop`]],inputs:{label:[1,`label`],tabIndex:[1,`tabIndex`],isAnimated:[1,`isAnimated`],isOpen:[1,`isOpen`]},outputs:{click:`click`},decls:1,vars:6,consts:[[`type`,`button`,1,`modal-backdrop`,3,`click`,`tabIndex`]],template:function(e,t){e&1&&(Ct(0,`button`,0),QS(`click`,function(g){return t.click.emit(g)}),St()),e&2&&(ae(`backdrop-fade-in`,t.isAnimated()&&t.isOpen())(`backdrop-fade-out`,t.isAnimated()&&!t.isOpen()),Fa(`tabIndex`,t.tabIndex()),B$1(`aria-label`,t.resolvedLabel()))},styles:[`
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
}`]})};var Mn=[`*`];function _n(o,n){if(o&1&&xe(0,`bx-modal-banner`,4),o&2){let e=w();R$1(`header`,e.config()?.header)(`showCloseButton`,!1)}}function Dn(o,n){o&1&&yt(0)}function kn(o,n){if(o&1&&(_(0,`div`,5),Oa(1,Dn,1,0,`ng-container`,9),D()),o&2){let e=w();y(),R$1(`ngTemplateOutlet`,e.headerTemplate())}}function On(o,n){o&1&&yt(0)}function wn(o,n){if(o&1&&(_(0,`div`,8),Oa(1,On,1,0,`ng-container`,9),D()),o&2){let e=w();y(),R$1(`ngTemplateOutlet`,e.footerTemplate())}}function Nn(o,n){o&1&&pe(0)}var R=class o{isSheetOpen=g(()=>this.isOpen()&&!this.isSwipingVerticallyFinished());isDismissible=g(()=>this.config()?.disableClose!==!0);resolvedMaxHeight=g(()=>String(this.config()?.style?.mobileConfig?.customHeight??``)||`98dvh`);sheetStyles=g(()=>`--bx-drawer-width: 100%; --bx-drawer-min-height: 60dvh; --bx-drawer-body-padding: 0; --bx-drawer-footer-border-color: transparent; ${this.config()?.style?.wrapperStyles??``}`);currentTranslateY=M(0);isSwipingVerticallyFinished=M(!1);id=b.required();headerTemplate=b.required();footerTemplate=b.required();config=b.required();isOpen=b.required();isAnimated=b.required();hasBanner=b.required();animationDuration=b.required();close=ze();onCloseRequest(){this.isDismissible()&&this.close.emit(`cancel`)}static ɵfac=function(e){return new(e||o)};static ɵcmp=G({type:o,selectors:[[`bx-modal-bottom-sheet`]],inputs:{id:[1,`id`],headerTemplate:[1,`headerTemplate`],footerTemplate:[1,`footerTemplate`],config:[1,`config`],isOpen:[1,`isOpen`],isAnimated:[1,`isAnimated`],hasBanner:[1,`hasBanner`],animationDuration:[1,`animationDuration`]},outputs:{close:`close`},ngContentSelectors:Mn,decls:10,vars:20,consts:[[`contentTemplate`,``],[3,`offsetChange`,`closeRequest`,`embedded`,`modal`,`autoClose`,`open`,`dismissible`,`showBackdrop`,`showCloseButton`,`showHandle`,`headerVisible`,`stickyFooter`,`maxHeight`,`animationDuration`,`surfaceId`,`panelClass`,`panelStyle`,`offset`],[1,`bottom-sheet-modal-inner-content-container`],[1,`bottom-sheet-modal-top-group`],[3,`header`,`showCloseButton`],[1,`bottom-sheet-modal-header`],[1,`bottom-sheet-modal-main-content-container`],[3,`ngTemplateOutlet`],[`bxDrawerFooter`,``,1,`bottom-sheet-modal-footer`],[4,`ngTemplateOutlet`]],template:function(e,t){if(e&1){let a=wt();Ae(),_(0,`bx-bottom-drawer`,1),hE(`offsetChange`,function(u){return Be(a),LP(t.currentTranslateY,u)||(t.currentTranslateY=u),Ve(u)}),te(`closeRequest`,function(){return t.onCloseRequest()}),_(1,`div`,2)(2,`div`,3),j(3,_n,1,2,`bx-modal-banner`,4),j(4,kn,2,1,`div`,5),_(5,`div`,6),yt(6,7),D()()(),j(7,wn,2,1,`div`,8),D(),Oa(8,Nn,1,0,`ng-template`,null,0,kr)}if(e&2){let a=Tt(9);R$1(`embedded`,!0)(`modal`,!1)(`autoClose`,!1)(`open`,t.isSheetOpen())(`dismissible`,t.isDismissible())(`showBackdrop`,!1)(`showCloseButton`,!1)(`showHandle`,!0)(`headerVisible`,!1)(`stickyFooter`,!0)(`maxHeight`,t.resolvedMaxHeight())(`animationDuration`,t.isAnimated()?t.animationDuration():0)(`surfaceId`,t.id()??``)(`panelClass`,t.config()?.style?.wrapperClasses??``)(`panelStyle`,t.sheetStyles()),bE(`offset`,t.currentTranslateY),y(3),F(t.hasBanner()?3:-1),y(),F(t.headerTemplate()?4:-1),y(2),R$1(`ngTemplateOutlet`,a),y(),F(t.footerTemplate()?7:-1)}},dependencies:[AT,ir,P],styles:[`
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
}`]})};var Tn=[`*`];function Rn(o,n){if(o&1){let e=wt();_(0,`bx-modal-backdrop`,13),te(`click`,function(a){Be(e);let g=w(2);return Ve(g.onBackdropClick.emit(a))}),D()}if(o&2){let e=w(2);R$1(`isAnimated`,e.isAnimated())(`isOpen`,e.isOpen())}}function In(o,n){if(o&1){let e=wt();_(0,`bx-modal-banner`,14),te(`close`,function(){Be(e);let a=w(2);return Ve(a.close.emit(`cancel`))}),D()}if(o&2){let e=w(2);R$1(`header`,e.config()?.header)(`showCloseButton`,e.config()?.disableClose!==!0&&e.config()?.style?.showCloseButton!==!1)}}function Bn(o,n){o&1&&yt(0)}function An(o,n){if(o&1){let e=wt();_(0,`button`,17),te(`click`,function(){Be(e);let a=w(3);return Ve(a.close.emit(`cancel`))}),xe(1,`bx-icon`,18),D()}}function En(o,n){if(o&1&&(_(0,`div`,9),Oa(1,Bn,1,0,`ng-container`,15),j(2,An,2,0,`button`,16),D()),o&2){let e=w(2);y(),R$1(`ngTemplateOutlet`,e.headerTemplate()),y(),F(!e.hasBanner()&&e.config()?.disableClose!==!0&&e.config()?.style?.showCloseButton!==!1?2:-1)}}function Pn(o,n){o&1&&yt(0)}function Ln(o,n){if(o&1&&(_(0,`div`,12),Oa(1,Pn,1,0,`ng-container`,15),D()),o&2){let e=w(2);y(),R$1(`ngTemplateOutlet`,e.footerTemplate())}}function jn(o,n){if(o&1&&(_(0,`div`,1),j(1,Rn,1,2,`bx-modal-backdrop`,3),_(2,`div`,4)(3,`div`,5)(4,`div`,6)(5,`div`)(6,`div`,7),j(7,In,1,2,`bx-modal-banner`,8),j(8,En,3,2,`div`,9),_(9,`div`,10),yt(10,11),D()(),j(11,Ln,2,1,`div`,12),D()()()()()),o&2){let e=w(),t=Tt(3);R$1(`id`,e.id()??``),y(),F(e.config()?.style?.hasBackdrop?1:-1),y(2),ae(`centered-modal-animate-in`,e.modalClasses()[`centered-modal-animate-in`])(`centered-modal-animate-out`,e.modalClasses()[`centered-modal-animate-out`]),y(),R$1(`ngClass`,e.modalClasses()),y(),Hv(e.config()?.style?.wrapperStyles??``),yP(`centered-modal-inner-content-container `+(e.config()?.style?.wrapperClasses??``)),y(2),F(e.hasBanner()?7:-1),y(),F(e.headerTemplate()?8:-1),y(2),R$1(`ngTemplateOutlet`,t),y(),F(e.footerTemplate()?11:-1)}}function Vn(o,n){if(o&1){let e=wt();_(0,`bx-modal-bottom-sheet`,19),te(`close`,function(){Be(e);let a=w();return Ve(a.close.emit(`cancel`))}),yt(1,11),D()}if(o&2){let e=w(),t=Tt(3);R$1(`headerTemplate`,e.headerTemplate())(`footerTemplate`,e.footerTemplate())(`config`,e.config())(`id`,e.id())(`isOpen`,e.isOpen())(`isAnimated`,e.isAnimated())(`hasBanner`,e.hasBanner())(`animationDuration`,e.animationDuration()),y(),R$1(`ngTemplateOutlet`,t)}}function Wn(o,n){o&1&&pe(0)}var $=class o{modalClasses=g(()=>({"centered-modal-content-wrapper":!0,"centered-modal-default-style":this.hasDefaultContentWrapperClass()||this.hasBanner(),"centered-modal-animate-in":this.isAnimated()&&this.isOpen(),"centered-modal-animate-out":this.isAnimated()&&!this.isOpen()}));headerTemplate=b.required();footerTemplate=b.required();config=b.required();id=b.required();isOpen=b.required();isAnimated=b.required();isBottomSheetModalActive=b.required();animationDuration=b.required();hasDefaultContentWrapperClass=b.required();hasBanner=b.required();close=ze();onBackdropClick=ze();bottomSheet=tf(R);static ɵfac=function(e){return new(e||o)};static ɵcmp=G({type:o,selectors:[[`bx-modal-centered`]],viewQuery:function(e,t){e&1&&Zt(t.bottomSheet,R,5),e&2&&ft()},inputs:{headerTemplate:[1,`headerTemplate`],footerTemplate:[1,`footerTemplate`],config:[1,`config`],id:[1,`id`],isOpen:[1,`isOpen`],isAnimated:[1,`isAnimated`],isBottomSheetModalActive:[1,`isBottomSheetModalActive`],animationDuration:[1,`animationDuration`],hasDefaultContentWrapperClass:[1,`hasDefaultContentWrapperClass`],hasBanner:[1,`hasBanner`]},outputs:{close:`close`,onBackdropClick:`onBackdropClick`},ngContentSelectors:Tn,decls:4,vars:1,consts:[[`contentTemplate`,``],[1,`modal-overlay`,3,`id`],[3,`headerTemplate`,`footerTemplate`,`config`,`id`,`isOpen`,`isAnimated`,`hasBanner`,`animationDuration`],[3,`isAnimated`,`isOpen`],[1,`modal-overlay-wrapper`],[1,`centered-modal-frame`],[`bxSurface`,``,`data-bx-light-scope`,``,3,`ngClass`],[1,`centered-modal-top-group`],[3,`header`,`showCloseButton`],[1,`centered-modal-header`],[1,`centered-modal-main-content-container`],[3,`ngTemplateOutlet`],[1,`centered-modal-footer`],[3,`click`,`isAnimated`,`isOpen`],[3,`close`,`header`,`showCloseButton`],[4,`ngTemplateOutlet`],[`type`,`button`,`aria-label`,`Close dialog`,1,`bx-modal-close`],[`type`,`button`,`aria-label`,`Close dialog`,1,`bx-modal-close`,3,`click`],[`name`,`x`],[3,`close`,`headerTemplate`,`footerTemplate`,`config`,`id`,`isOpen`,`isAnimated`,`hasBanner`,`animationDuration`]],template:function(e,t){e&1&&(Ae(),j(0,jn,12,15,`div`,1)(1,Vn,2,9,`bx-modal-bottom-sheet`,2),Oa(2,Wn,1,0,`ng-template`,null,0,kr)),e&2&&F(t.isBottomSheetModalActive()?1:0)},dependencies:[Rt,ir,dx,R,P,X,Vt],styles:[`
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
}`]})};var zn=[`*`];function Fn(o,n){if(o&1){let e=wt();_(0,`bx-modal-banner`,10),te(`close`,function(){Be(e);let a=w(2);return Ve(a.close.emit(`cancel`))}),D()}if(o&2){let e=w(2);R$1(`header`,e.config()?.header)(`showCloseButton`,e.config()?.disableClose!==!0&&e.config()?.style?.showCloseButton!==!1)}}function Gn(o,n){o&1&&yt(0)}function Hn(o,n){if(o&1){let e=wt();_(0,`button`,13),te(`click`,function(){Be(e);let a=w(3);return Ve(a.close.emit(`cancel`))}),xe(1,`bx-icon`,14),D()}}function qn(o,n){if(o&1&&(_(0,`div`,6),Oa(1,Gn,1,0,`ng-container`,11),j(2,Hn,2,0,`button`,12),D()),o&2){let e=w(2);y(),R$1(`ngTemplateOutlet`,e.headerTemplate()),y(),F(!e.hasBanner()&&e.config()?.disableClose!==!0&&e.config()?.style?.showCloseButton!==!1?2:-1)}}function Un(o,n){o&1&&yt(0)}function Kn(o,n){if(o&1&&(_(0,`div`,9),Oa(1,Un,1,0,`ng-container`,11),D()),o&2){let e=w(2);y(),R$1(`ngTemplateOutlet`,e.footerTemplate())}}function Qn(o,n){if(o&1&&(_(0,`div`,3)(1,`div`,4),j(2,Fn,1,2,`bx-modal-banner`,5),j(3,qn,3,2,`div`,6),_(4,`div`,7),yt(5,8),D()(),j(6,Kn,2,1,`div`,9),D()),o&2){let e=w(),t=Tt(3);_e(`--%NS%anim-duration`,e.animationDuration(),`ms`),R$1(`ngClass`,e.modalClasses())(`id`,e.id()??``),y(),Hv(e.config()&&e.config()?.style?.wrapperStyles?e.config()?.style?.wrapperStyles:``),yP(e.config()&&e.config()?.style?.wrapperClasses?e.config()?.style?.wrapperClasses:``),y(),F(e.hasBanner()?2:-1),y(),F(e.headerTemplate()?3:-1),y(2),R$1(`ngTemplateOutlet`,t),y(),F(e.footerTemplate()?6:-1)}}function Yn(o,n){if(o&1){let e=wt();_(0,`bx-modal-bottom-sheet`,15),te(`close`,function(){Be(e);let a=w();return Ve(a.close.emit(`cancel`))}),yt(1,8),D()}if(o&2){let e=w(),t=Tt(3);R$1(`headerTemplate`,e.headerTemplate())(`footerTemplate`,e.footerTemplate())(`config`,e.config())(`id`,e.id())(`isOpen`,e.isOpen())(`isAnimated`,e.isAnimated())(`hasBanner`,e.hasBanner())(`animationDuration`,e.animationDuration()),y(),R$1(`ngTemplateOutlet`,t)}}function Xn(o,n){o&1&&pe(0)}var J=class o{renderOpenClass=M(!1);modalClasses=g(()=>{let n=this.layout()===`left`,e=this.layout()===`right`,t=this.isAnimated(),a=this.renderOpenClass();return{"side-modal-content-wrapper":!0,"side-modal-default-style":this.hasDefaultContentWrapperClass()||this.hasBanner(),"with-footer":this.footerTemplate()!==null,left:n,right:e,"side-modal-animate-in":t?a:!0,"side-modal-animate-out":t?!a:!1}});layout=b.required();headerTemplate=b.required();footerTemplate=b.required();config=b.required();id=b.required();isOpen=b.required();isAnimated=b.required();isBottomSheetModalActive=b.required();animationDuration=b.required();hasDefaultContentWrapperClass=b.required();hasBanner=b.required();close=ze();bottomSheet=tf(R);constructor(){let n=f(K).nativeElement,e=!1;Wn$1(t=>{let a=this.isOpen(),g=this.isAnimated(),u=n.ownerDocument.defaultView,y=a&&!e;if(e=a,this.renderOpenClass.set(a&&(!g||!y)),!a||!g||!y||!u)return;let _=u.requestAnimationFrame(()=>{_=u.requestAnimationFrame(()=>this.renderOpenClass.set(!0))});t(()=>u.cancelAnimationFrame(_))})}static ɵfac=function(e){return new(e||o)};static ɵcmp=G({type:o,selectors:[[`bx-modal-side`]],viewQuery:function(e,t){e&1&&Zt(t.bottomSheet,R,5),e&2&&ft()},inputs:{layout:[1,`layout`],headerTemplate:[1,`headerTemplate`],footerTemplate:[1,`footerTemplate`],config:[1,`config`],id:[1,`id`],isOpen:[1,`isOpen`],isAnimated:[1,`isAnimated`],isBottomSheetModalActive:[1,`isBottomSheetModalActive`],animationDuration:[1,`animationDuration`],hasDefaultContentWrapperClass:[1,`hasDefaultContentWrapperClass`],hasBanner:[1,`hasBanner`]},outputs:{close:`close`},ngContentSelectors:zn,decls:4,vars:1,consts:[[`contentTemplate`,``],[`bxSurface`,``,`data-bx-light-scope`,``,3,`ngClass`,`id`,`--%NS%anim-duration`],[3,`headerTemplate`,`footerTemplate`,`config`,`id`,`isOpen`,`isAnimated`,`hasBanner`,`animationDuration`],[`bxSurface`,``,`data-bx-light-scope`,``,3,`ngClass`,`id`],[1,`side-modal-inner-content-container`],[3,`header`,`showCloseButton`],[1,`side-modal-header`],[1,`side-modal-main-content-container`],[3,`ngTemplateOutlet`],[1,`side-modal-footer`],[3,`close`,`header`,`showCloseButton`],[4,`ngTemplateOutlet`],[`type`,`button`,`aria-label`,`Close dialog`,1,`bx-modal-close`],[`type`,`button`,`aria-label`,`Close dialog`,1,`bx-modal-close`,3,`click`],[`name`,`x`],[3,`close`,`headerTemplate`,`footerTemplate`,`config`,`id`,`isOpen`,`isAnimated`,`hasBanner`,`animationDuration`]],template:function(e,t){e&1&&(Ae(),j(0,Qn,7,12,`div`,1)(1,Yn,2,9,`bx-modal-bottom-sheet`,2),Oa(2,Xn,1,0,`ng-template`,null,0,kr)),e&2&&F(t.isBottomSheetModalActive()?1:0)},dependencies:[Rt,ir,R,dx,P,Vt],styles:[`
.side-modal-content-wrapper[_ngcontent-%COMP%] {
  position: fixed;
  top: 0;
  height: 100vh;
  height: 100dvh;
  z-index: 400;
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
}`]})};var Z=class o{layout=M(`center`);animate=M(!0);hasBackdrop=M(!0);showCloseButton=M(!0);contentWrapper=M(!0);overrideFullHeight=M(!1);disableClose=M(!1);disableCloseOnBackdropClick=M(!1);disableCloseOnNavigation=M(!1);closeGuardOnlyOnCancel=M(!0);nestedOpacityFloors=M([.9,1]);update(n){n.animate!==void 0&&this.animate.set(n.animate),n.hasBackdrop!==void 0&&this.hasBackdrop.set(n.hasBackdrop),n.disableCloseOnBackdropClick!==void 0&&this.disableCloseOnBackdropClick.set(n.disableCloseOnBackdropClick)}static ɵfac=function(e){return new(e||o)};static ɵprov=ie({token:o,factory:o.ɵfac,providedIn:`root`})};var Zn=[`modalContainer`];var et=[`contentTemplate`];var nt=[`dynamicContainer`];function tt(o,n){if(o&1){let e=wt();_(0,`bx-modal-backdrop`,6),te(`click`,function(a){Be(e);let g=w();return Ve(g.onBackdropClick(a))}),D()}if(o&2){let e=w();R$1(`isAnimated`,e.isAnimated())(`isOpen`,e.isOpen())}}function ot(o,n){if(o&1){let e=wt();_(0,`bx-modal-side`,7),te(`close`,function(a){Be(e);let g=w();return Ve(g.close(a,void 0,!0))}),yt(1,8),D()}if(o&2){let e=w(),t=Tt(6);R$1(`layout`,e.effectiveLayout())(`headerTemplate`,e.headerTemplate())(`footerTemplate`,e.footerTemplate())(`config`,e.config())(`id`,e.id())(`isOpen`,e.isOpen())(`isAnimated`,e.isAnimated())(`isBottomSheetModalActive`,e.isBottomSheetModalActive())(`animationDuration`,e.animationDuration)(`hasDefaultContentWrapperClass`,e.hasDefaultContentWrapperClass())(`hasBanner`,e.hasBanner()),y(),R$1(`ngTemplateOutlet`,t)}}function at(o,n){if(o&1){let e=wt();_(0,`bx-modal-centered`,9),te(`close`,function(a){Be(e);let g=w();return Ve(g.close(a,void 0,!0))})(`onBackdropClick`,function(a){Be(e);let g=w();return Ve(g.onBackdropClick(a))}),yt(1,8),D()}if(o&2){let e=w(),t=Tt(6);R$1(`headerTemplate`,e.headerTemplate())(`footerTemplate`,e.footerTemplate())(`config`,e.config())(`id`,e.id())(`isOpen`,e.isOpen())(`isAnimated`,e.isAnimated())(`isBottomSheetModalActive`,e.isBottomSheetModalActive())(`animationDuration`,e.animationDuration)(`hasDefaultContentWrapperClass`,e.hasDefaultContentWrapperClass())(`hasBanner`,e.hasBanner()),y(),R$1(`ngTemplateOutlet`,t)}}function it(o,n){if(o&1&&(_(0,`div`,10),yt(1,null,2),D()),o&2){let e=w();Hv(e.config().contentStyles),R$1(`ngClass`,e.config().contentClasses)}}var B=class o{cdkTrapFocus=f(x0,{self:!0});modalService=f(he);modalGlobalSettingsService=f(Z);scrollLockService=f(em);windowDimensionsService=f(rl);destroyRef=f(Q);document=f(ue);bxA11yService=f(Le);modalRef=f(I);sideModalComponents=tf(J);centeredModalComponents=tf($);headerTemplate=M(null);footerTemplate=M(null);isBottomSheetModalActive=M(!1);windowDimensions=this.windowDimensionsService.dimensions;id=g(()=>this.config().id??this.scrollLockId);hasBanner=g(()=>{let n=this.config(),e=n.header,t=e?.text;return!!(t&&(Co(t)?!!t.key:t.length>0)||e?.icon||e?.loading||!n.disableClose&&n.style.showCloseButton!==!1&&!this.headerTemplate())});hasDefaultContentWrapperClass=g(()=>this.config().style.contentWrapper!==!1);materialOpacity=g(()=>{let n=this.nestingDepth(),e=this.modalGlobalSettingsService.nestedOpacityFloors();if(n<=0||e.length===0)return .52;let t=e[Math.min(n-1,e.length-1)],a=n===1?.9:1;return Number.isFinite(t)?Math.max(.52,Math.min(1,t)):a});modalContainer=Nt(`modalContainer`);contentTemplate=Nt(`contentTemplate`);dynamicContainer=Nt(`dynamicContainer`,{read:Bt});config=this.modalRef.config;animationDuration=175;isOpen=M(!0);effectiveLayout=M(`center`);isCentered=M(!1);isSide=M(!1);nestingDepth=M(0);isAnimated=g(()=>!this.bxA11yService.isReducedMotion()&&this.config().style.animate);componentRef;closeFunction;backdropClickSubject=new Pe;backdropClick=this.backdropClickSubject.asObservable();isCloseGuardPending=!1;scrollLockId=dr();_sortedBreakpoints=[];_currentVcr=null;constructor(){this.cdkTrapFocus.autoCapture=!0,this.initKeyboardSubscription(),ce(()=>{let n=this.windowDimensions().width;this.handleLayout(n)}),ce(()=>{let n=this.dynamicContainer();n&&this.componentRef&&(this._currentVcr=n,n.indexOf(this.componentRef.hostView)===-1&&n.insert(this.componentRef.hostView))})}ngOnInit(){this.initBreakpointCache(),this.scrollLockService.disableScroll(this.scrollLockId,{animationDuration:this.animationDuration,handleTouchInput:!0,mobileOnlyTouchPrevention:!0})}ngAfterViewInit(){let n=this.windowDimensionsService.dimensions().width;this.handleLayout(n)}ngOnDestroy(){this.componentRef&&!this.componentRef.hostView.destroyed&&this.componentRef.destroy(),this.dynamicContainer()?.clear(),this.scrollLockService.enableScroll(this.scrollLockId),this.closeFunction=void 0,this.backdropClickSubject.complete()}setHeaderTemplate(n){this.headerTemplate.set(n)}setFooterTemplate(n){this.footerTemplate.set(n)}close(n=`cancel`,e=void 0,t=!1,a=!1){if(!this.isOpen()||this.isCloseGuardPending&&!a)return;if(a){this.handleClose(n,e);return}if(this.config().disableClose===!0&&t){this.resetBottomSheetModalLayout();return}let g=this.config().closeGuardOnlyOnCancel!==!0||n!==`confirm`,u=this.config().closeGuard;if(g&&u){this.isCloseGuardPending=!0;try{let y=u.canClose(this.modalService),_=y instanceof ke?y:y instanceof Promise?kt(y):Ee(y);this.isBottomSheetModalActive()&&this.resetBottomSheetModalLayout(),_.pipe(Ar(1),ff(this.destroyRef),Iu(()=>{this.isCloseGuardPending=!1})).subscribe(V=>{V&&(!t||!this.config().disableClose)&&this.handleClose(n,e)})}catch(y){throw this.isCloseGuardPending=!1,y}return}this.handleClose(n,e)}onBackdropClick(n){n.preventDefault(),n.stopPropagation(),this.isOpen()&&(this.backdropClickSubject.next(n),this.config().style?.hasBackdrop&&this.config().disableCloseOnBackdropClick!==!0&&this.close(`cancel`,void 0,!0))}initKeyboardSubscription(){Nl(this.document,`keydown`).pipe(fn$1(n=>n.key===`Escape`&&!n.defaultPrevented),ff(this.destroyRef)).subscribe(n=>{this.modalService.isTopmost(this.modalRef)&&(n.preventDefault(),this.close(`cancel`,void 0,!0))})}initBreakpointCache(){let n=this.config().style?.breakpoints;if(n&&Object.keys(n).length>0){let e=this.windowDimensionsService.breakpoints;this._sortedBreakpoints=Object.keys(n).map(t=>({width:e[t],layout:n[t]??this.config().style.layout??`center`})).sort((t,a)=>t.width-a.width)}}async handleClose(n,e){if(!this.isOpen())return;this.isOpen.set(!1),this.setBottomSheetModalFinishedState(!0);let t={data:e,state:n};this.closeFunction&&this.closeFunction(t)}handleLayout(n){if(!this.isOpen())return;let e=this.config().style.layout;for(let _ of this._sortedBreakpoints)if(n<=_.width){e=_.layout;break}let t=this.isSide(),a=e===`left`||e===`right`;if(t!==a&&this._currentVcr&&this.componentRef){let _=this._currentVcr.indexOf(this.componentRef.hostView);_!==-1&&this._currentVcr.detach(_)}this.effectiveLayout.set(e),this.isSide.set(a),this.isCentered.set(e===`center`||e===`bottom-sheet`);let u=e===`bottom-sheet`,y=this.isBottomSheetModalActive();u&&!y?this.isBottomSheetModalActive.set(!0):!u&&y&&this.isBottomSheetModalActive.set(!1)}getBottomSheetModal(){return this.sideModalComponents()[0]?.bottomSheet()[0]??this.centeredModalComponents()[0]?.bottomSheet()[0]}resetBottomSheetModalLayout(){let n=this.getBottomSheetModal();n&&n.currentTranslateY.set(0)}setBottomSheetModalFinishedState(n){let e=this.getBottomSheetModal();e&&e.isSwipingVerticallyFinished.set(n)}static ɵfac=function(e){return new(e||o)};static ɵcmp=G({type:o,selectors:[[`bx-modal`]],viewQuery:function(e,t){e&1&&Zt(t.sideModalComponents,J,5)(t.centeredModalComponents,$,5)(t.modalContainer,Zn,5)(t.contentTemplate,et,5)(t.dynamicContainer,nt,5,Bt),e&2&&ft(5)},hostVars:6,hostBindings:function(e,t){e&2&&(_e(`--%NS%bx-modal-material-opacity`,t.materialOpacity()),ae(`has-backdrop`,t.config().style.hasBackdrop)(`is-nested`,t.nestingDepth()>0))},features:[jO([x0])],decls:7,vars:2,consts:[[`modalContainer`,``],[`contentTemplate`,``],[`dynamicContainer`,``],[3,`isAnimated`,`isOpen`],[3,`layout`,`headerTemplate`,`footerTemplate`,`config`,`id`,`isOpen`,`isAnimated`,`isBottomSheetModalActive`,`animationDuration`,`hasDefaultContentWrapperClass`,`hasBanner`],[3,`headerTemplate`,`footerTemplate`,`config`,`id`,`isOpen`,`isAnimated`,`isBottomSheetModalActive`,`animationDuration`,`hasDefaultContentWrapperClass`,`hasBanner`],[3,`click`,`isAnimated`,`isOpen`],[3,`close`,`layout`,`headerTemplate`,`footerTemplate`,`config`,`id`,`isOpen`,`isAnimated`,`isBottomSheetModalActive`,`animationDuration`,`hasDefaultContentWrapperClass`,`hasBanner`],[3,`ngTemplateOutlet`],[3,`close`,`onBackdropClick`,`headerTemplate`,`footerTemplate`,`config`,`id`,`isOpen`,`isAnimated`,`isBottomSheetModalActive`,`animationDuration`,`hasDefaultContentWrapperClass`,`hasBanner`],[1,`modal-content`,3,`ngClass`]],template:function(e,t){if(e&1&&(j(0,tt,1,2,`bx-modal-backdrop`,3),Vv(1,null,0),j(3,ot,2,12,`bx-modal-side`,4)(4,at,2,11,`bx-modal-centered`,5),zv(),Oa(5,it,3,3,`ng-template`,null,1,kr)),e&2){let a;F(t.config().style.hasBackdrop&&(t.isSide()||t.isBottomSheetModalActive())?0:-1),y(3),F((a=!0)===t.isSide()?3:a===t.isCentered()?4:-1)}},dependencies:[dx,ir,$,J,X],styles:[`
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
}`],changeDetection:1})};var Ce=new N(`MODAL_DATA`);var he=class o{router=f(bo);injector=f(Ie);applicationRef=f(Un$1);environmentInjector=f(xt);rendererFactory2=f(Tn$1);document=f(ue);modalGlobalSettingsService=f(Z);renderer;modals=M(/* @__PURE__ */ new Set);constructor(){this.renderer=this.rendererFactory2.createRenderer(null,null),this.createSubscriptions()}open(n,e){let a=new I(new Y(this.resolveConfig(e)),n,this),g=Ie.create({providers:[{provide:Ce,useValue:e?.data},{provide:I,useValue:a}],parent:this.injector}),u=rf(B,{environmentInjector:this.environmentInjector,elementInjector:g});a.attachContainer(u),u.onDestroy(()=>{this.applicationRef.detachView(u.hostView),u.location.nativeElement.remove()});try{this.applicationRef.attachView(u.hostView),this.document.body.appendChild(u.location.nativeElement),this.modals.update(yn=>new Set(yn).add(a)),this.syncNestingDepth();let y=Ie.create({providers:[{provide:B,useValue:u.instance}],parent:u.injector}),_=rf(n,{environmentInjector:this.environmentInjector,elementInjector:y}),V=_.location.nativeElement;return a.attachContent(_),this.renderer.setStyle(V,`height`,`97%`),this.renderer.setStyle(V,`width`,`100%`),this.renderer.setStyle(V,`display`,`flex`),this.renderer.setStyle(V,`flex-grow`,`1`),a.open(),u.instance.isOpen()&&this.isIModal(_.instance)&&(_.instance.modal=a,_.instance.onModalInit()),a}catch(y){throw u.hostView.destroyed||u.destroy(),this.unregister(a),y}}close(n){n.close()}unregister(n){this.modals.update(e=>{let t=new Set(e);return t.delete(n),t}),this.syncNestingDepth()}closeAll(n=!1){this.modals().forEach(e=>{(e.config().disableCloseOnNavigation!==!0||!n)&&e.close(`cancel`,void 0,!0)})}find(n){for(let e of this.modals())if(e.componentType===n)return!0;return!1}modalsCount(){return this.modals().size}isTopmost(n){return[...this.modals()].at(-1)===n}syncNestingDepth(){for(let[n,e]of[...this.modals()].entries())e.setNestingDepth(n)}createSubscriptions(){this.router.events.pipe(fn$1(n=>n instanceof Er),na(1),ff()).subscribe(()=>{this.modalsCount()>0&&this.closeAll(!0)})}isIModal(n){return typeof n==`object`&&n!==null&&`onModalInit`in n&&typeof n.onModalInit==`function`}resolveConfig(n){let e=n?.style?.animate??this.modalGlobalSettingsService.animate(),t={layout:n?.style?.layout??this.modalGlobalSettingsService.layout(),animate:e,hasBackdrop:n?.style?.hasBackdrop??this.modalGlobalSettingsService.hasBackdrop(),showCloseButton:n?.style?.showCloseButton??this.modalGlobalSettingsService.showCloseButton(),contentWrapper:n?.style?.contentWrapper??this.modalGlobalSettingsService.contentWrapper(),overrideFullHeight:n?.style?.overrideFullHeight??this.modalGlobalSettingsService.overrideFullHeight(),breakpoints:n?.style?.breakpoints,mobileConfig:n?.style?.mobileConfig,wrapperClasses:n?.style?.wrapperClasses,wrapperStyles:n?.style?.wrapperStyles,closeDelay:n?.style?.closeDelay};return s(r({},n),{disableClose:n?.disableClose??this.modalGlobalSettingsService.disableClose(),disableCloseOnBackdropClick:n?.disableCloseOnBackdropClick??this.modalGlobalSettingsService.disableCloseOnBackdropClick(),disableCloseOnNavigation:n?.disableCloseOnNavigation??this.modalGlobalSettingsService.disableCloseOnNavigation(),closeGuardOnlyOnCancel:n?.closeGuardOnlyOnCancel??this.modalGlobalSettingsService.closeGuardOnlyOnCancel(),style:t})}static ɵfac=function(e){return new(e||o)};static ɵprov=ie({token:o,factory:o.ɵfac,providedIn:`root`})};var ve=class{};var un=class extends ve{constructor(e,t){super();this.component=e;this.config=t}component;config;canClose(e){return e.open(this.component,this.config).afterClosed().pipe(rt(a=>a.state===`confirm`))}};var bn=class o{modalRef=f(I);injectedData=f(Ce);modal=this.modalRef;data=this.injectedData;onModalInit(){}close(n){this.modal?.close(`cancel`,n)}static ɵfac=function(e){return new(e||o)};static ɵprov=ie({token:o,factory:o.ɵfac})};var fn=class o{templateRef=f(zn$1);modalCore=f(B,{optional:!0});constructor(){this.modalCore?this.modalCore.setFooterTemplate(this.templateRef):console.warn(`[ModalFooter] Directive used outside of a ModalComponent.`)}static ɵfac=function(e){return new(e||o)};static ɵdir=Z$1({type:o,selectors:[[``,`appModalFooter`,``]]})};var gn=class o{templateRef=f(zn$1);modalCore=f(B,{optional:!0});constructor(){this.modalCore?this.modalCore.setHeaderTemplate(this.templateRef):console.warn(`[ModalHeader] Directive used outside of a ModalComponent.`)}static ɵfac=function(e){return new(e||o)};static ɵdir=Z$1({type:o,selectors:[[``,`appModalHeader`,``]]})};export{gn as a,fn as i,X as n,he as o,bn as r,un as s,P as t};