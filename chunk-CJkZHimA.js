import{H as dt$1,O as Xe,Z as ml,s as Et}from"./chunk-C1xhQ_ri.js";import{$a as sd,$i as ka,$n as Wu,$r as cd,An as Tt,Bi as ik,Bn as VQ,Co as vo,Di as gt,Dt as LQ,Fa as pk,Hn as Vk,Ho as yi,Io as xe,Ir as ad,J as Fr,Jo as zh,Jr as bo,Jt as Pk,K as FT,Kn as We,La as ps,Li as id,N as Cr,Na as pb,Oi as hA,Pa as pe,R as Dr,Ra as q,Ri as ie,Ro as xo,Sa as nd,Si as gA,So as vd,T as Br,Ta as od,Ti as ge,Tn as Ta,Ut as Nw,Vr as b,Wa as rd,X as G,Xn as Wo,Yr as br,Z as GC,_a as mr,_i as fT,_n as Sz,_o as vA,_r as ZC,_t as JT,aa as ld,cn as S1,eo as sn,fn as Sd,ft as Iz,ga as mk,gr as Z$1,hn as St,hr as Yy,it as Gy,jn as UC,mi as er,mo as uk,na as lA,nn as RA,nr as XT,o as $s,oi as db,p as Ae,pi as ee$1,q as Fd,qn as Wg,ri as cl,rr as Xl,s as $t,si as dd,so as tr,sr as YN,t as $$1,ta as ke$1,tt as Go,ut as Ii,va as ms,vn as T,xi as fr,y as B,yi as fb,za as qK,zn as Uy,zr as al}from"./chunk-zTlCv55u.js";import{n as s,t as r}from"./chunk-C9yOwMO6.js";function Mn(o,n){if(o&1&&sd(0,`bx-loading-spinner`,7),o&2){let e=Wo(4),t=vA(1);xo(`size`,e.iconSize())(`label`,t.loadingLabel??`Loading`)}}function _n(o,n){if(o&1&&sd(0,`bx-icon`,8),o&2){let e=Wo().$implicit,t=Wo(3);xo(`name`,e.name)(`contentTemplate`,e.template)(`size`,t.iconSize())(`color`,e.color)(`bgColor`,e.bgColor)(`strokeWidth`,e.strokeWidth)}}function Dn(o,n){if(o&1&&od(0,Mn,1,2,`bx-loading-spinner`,7)(1,_n,1,6,`bx-icon`,8),o&2){let e=n.$implicit;nd(e===`loading`?0:e?1:-1)}}function kn(o,n){if(o&1&&(bo(0,`span`,5)(1,`bx-visual-transition`,6),rd(2,Dn,2,1,`ng-template`),Go()()),o&2){let e=Wo(2),t=vA(1);ka(`min-inline-size`,e.iconSize(),`px`)(`min-block-size`,e.iconSize(),`px`),Xl(),xo(`value`,t.loading?`loading`:t.icon)}}function On(o,n){if(o&1&&(bo(0,`div`,1),od(1,kn,3,5,`span`,3),bo(2,`span`,4),lA(3),Go()()),o&2){let e=Wo(),t=vA(1);Xl(),nd(t.icon||t.loading!==void 0?1:-1),Xl(),xo(`id`,e.titleId()),Xl(),ik(e.resolvedText())}}function wn(o,n){if(o&1){let e=pb();bo(0,`button`,9),br(`click`,function(){al(e);let a=Wo();return cl(a.close.emit(`cancel`))}),sd(1,`bx-icon`,10),Go()}if(o&2){let e=Wo();vo(`aria-label`,e.resolvedCloseLabel())}}var j=class o{i18n=b(VQ,{optional:!0});resolvedCloseLabel=G(()=>LQ(this.closeLabel(),this.i18n));resolvedText=G(()=>LQ(this.header()?.text,this.i18n));iconSize=G(()=>{let n=Number(this.header()?.icon?.size??24);return Number.isFinite(n)&&n>0?n:24});header=ee$1.required();closeLabel=ee$1(`Close dialog`);titleId=ee$1(``);showCloseButton=ee$1.required();close=Pk();static ɵfac=function(e){return new(e||o)};static ɵcmp=Fr({type:o,selectors:[[`bx-modal-banner`]],inputs:{header:[1,`header`],closeLabel:[1,`closeLabel`],titleId:[1,`titleId`],showCloseButton:[1,`showCloseButton`]},outputs:{close:`close`},decls:4,vars:3,consts:[[1,`modal-top-banner-container`],[1,`modal-top-banner-title-container`],[`type`,`button`,1,`bx-modal-close`],[1,`modal-icon-area`,3,`min-inline-size`,`min-block-size`],[`aria-live`,`polite`,`aria-atomic`,`true`,3,`id`],[1,`modal-icon-area`],[3,`value`],[3,`size`,`label`],[3,`name`,`contentTemplate`,`size`,`color`,`bgColor`,`strokeWidth`],[`type`,`button`,1,`bx-modal-close`,3,`click`],[`name`,`x`]],template:function(e,t){if(e&1&&(bo(0,`div`,0),mk(1),od(2,On,4,3,`div`,1),od(3,wn,2,1,`button`,2),Go()),e&2){Xl();let a=gA(t.header());Xl(),nd(a?2:-1),Xl(),nd(t.showCloseButton()?3:-1)}},dependencies:[ZC,Et,Wu],styles:[`
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
}`]})};var Me=class{layout;breakpoints;animate;hasBackdrop;closeDelay;showCloseButton;mobileConfig;contentWrapper;wrapperClasses;wrapperStyles;overrideFullHeight;constructor(n){this.layout=n?.layout??`center`,this.breakpoints=n?.breakpoints,this.animate=n?.animate??!0,this.hasBackdrop=n?.hasBackdrop??!0,this.closeDelay=n?.closeDelay,this.showCloseButton=n?.showCloseButton??!0,this.mobileConfig=n?.mobileConfig??{},this.contentWrapper=n?.contentWrapper??!0,this.wrapperClasses=n?.wrapperClasses??``,this.wrapperStyles=n?.wrapperStyles??``,this.overrideFullHeight=n?.overrideFullHeight??!1}};var $=class{open;afterClose;closeGuard;closeGuardOnlyOnCancel;disableClose;disableCloseOnBackdropClick;disableCloseOnNavigation;data;style;header;contentClasses;contentStyles;id;closeLabel;ariaLabel;ariaLabelledBy;ariaDescribedBy;constructor(n){this.open=n?.open??!0,this.afterClose=n?.afterClose,this.closeGuard=n?.closeGuard,this.closeGuardOnlyOnCancel=n?.closeGuardOnlyOnCancel??!0,this.disableClose=n?.disableClose??!1,this.disableCloseOnBackdropClick=n?.disableCloseOnBackdropClick??!1,this.disableCloseOnNavigation=n?.disableCloseOnNavigation??!1,this.data=n?.data??null,this.style=new Me(n?.style),this.header=n?.header,this.contentClasses=n?.contentClasses??``,this.contentStyles=n?.contentStyles??``,this.id=n?.id,this.closeLabel=n?.closeLabel??`Close dialog`,this.ariaLabel=n?.ariaLabel,this.ariaLabelledBy=n?.ariaLabelledBy,this.ariaDescribedBy=n?.ariaDescribedBy}};var E=class{constructor(n,e,t){this.componentType=e;this.modalService=t;this.configuration=$$1(n),this.config=this.configuration.asReadonly()}componentType;modalService;configuration;modalState=new sn(`opening`);backdropClickSubject=new xe;afterCloseSubject=new xe;subscriptions=new Ae;config;contentRef;containerRef;closeTimeout;closeRender;get componentRef(){return this.contentRef}get modalContainerRef(){return this.containerRef}get modalContainerElement(){return this.containerRef?.location.nativeElement}setNestingDepth(n){this.containerRef?.instance.nestingDepth.set(n)}patch(n){this.modalState.value===`closing`||this.modalState.value===`closed`||this.configuration.update(e=>new $(s(r({},e),{closeLabel:n.closeLabel??e.closeLabel,header:n.header===null?void 0:n.header===void 0?e.header:this.patchHeader(e.header,n.header),disableClose:n.disableClose??e.disableClose,disableCloseOnBackdropClick:n.disableCloseOnBackdropClick??e.disableCloseOnBackdropClick,disableCloseOnNavigation:n.disableCloseOnNavigation??e.disableCloseOnNavigation,closeGuardOnlyOnCancel:n.closeGuardOnlyOnCancel??e.closeGuardOnlyOnCancel,contentClasses:n.contentClasses===void 0?e.contentClasses:n.contentClasses??``,contentStyles:n.contentStyles===void 0?e.contentStyles:n.contentStyles??``,style:s(r({},e.style),{showCloseButton:n.style?.showCloseButton??e.style.showCloseButton,wrapperClasses:n.style?.wrapperClasses===void 0?e.style.wrapperClasses:n.style.wrapperClasses??``,wrapperStyles:n.style?.wrapperStyles===void 0?e.style.wrapperStyles:n.style.wrapperStyles??``})})))}backdropClick(){return this.backdropClickSubject.asObservable()}modalState$(){return this.modalState.asObservable()}afterClosed(){return this.afterCloseSubject.asObservable()}attachContainer(n){this.containerRef=n,n.instance.closeFunction=e=>this.handleClose(e),this.subscriptions.add(n.instance.backdropClick.subscribe(e=>this.backdropClickSubject.next(e))),n.onDestroy(()=>this.finishClose({state:`cancel`,data:void 0}))}attachContent(n){this.contentRef=n,this.containerRef&&(this.containerRef.instance.componentRef=n)}open(){this.modalState.value===`opening`&&this.modalState.next(`open`)}close(n=`cancel`,e=void 0,t=!1){this.modalState.value===`closing`||this.modalState.value===`closed`||this.containerRef?.instance.close(n,e,!1,t)}patchHeader(n,e){let t=e.icon;return{text:e.text===void 0?n?.text??``:e.text??``,loading:e.loading??n?.loading,loadingLabel:e.loadingLabel??n?.loadingLabel,icon:t===null?void 0:t===void 0?n?.icon:{name:t.name??n?.icon?.name??`info`,size:t.size??n?.icon?.size,color:t.color??n?.icon?.color,bgColor:t.bgColor??n?.icon?.bgColor,strokeWidth:t.strokeWidth??n?.icon?.strokeWidth}}}handleClose(n){if(this.modalState.value===`closing`||this.modalState.value===`closed`)return;this.modalState.next(`closing`);let e=this.containerRef?.instance.isAnimated()?this.containerRef.instance.animationDuration:0,t=this.containerRef;if(e&&t?.instance.effectiveLayout()===`center`){this.closeRender=er({read:()=>{let i=t.location.nativeElement.querySelectorAll(`.centered-modal-frame, .centered-modal-content-wrapper, .modal-backdrop`),h=Array.from(i).flatMap(u=>u.getAnimations());Promise.allSettled(h.map(u=>u.finished)).then(()=>this.finishClose(n))}},{injector:t.injector});return}this.closeTimeout=setTimeout(()=>this.finishClose(n),e)}finishClose(n){if(this.modalState.value===`closed`)return;clearTimeout(this.closeTimeout),this.closeRender?.destroy(),this.subscriptions.unsubscribe(),this.modalState.next(`closed`);let e=this.containerRef;this.containerRef=void 0,this.contentRef=void 0;try{this.config().afterClose?.()}finally{this.modalService.unregister(this),e&&!e.hostView.destroyed&&e.destroy(),this.modalService.restoreTaskFocus(),this.afterCloseSubject.next(n),this.afterCloseSubject.complete(),this.backdropClickSubject.complete(),this.modalState.complete()}}};var J=class o{i18n=b(VQ,{optional:!0});resolvedLabel=G(()=>LQ(this.label(),this.i18n));label=ee$1(`Close dialog`);tabIndex=ee$1(0);isAnimated=ee$1(!1);isOpen=ee$1(!1);click=Pk();static ɵfac=function(e){return new(e||o)};static ɵcmp=Fr({type:o,selectors:[[`bx-modal-backdrop`]],inputs:{label:[1,`label`],tabIndex:[1,`tabIndex`],isAnimated:[1,`isAnimated`],isOpen:[1,`isOpen`]},outputs:{click:`click`},decls:1,vars:6,consts:[[`type`,`button`,1,`modal-backdrop`,3,`click`,`tabIndex`]],template:function(e,t){e&1&&(id(0,`button`,0),Gy(`click`,function(i){return t.click.emit(i)}),ad()),e&2&&(tr(`backdrop-fade-in`,t.isAnimated()&&t.isOpen())(`backdrop-fade-out`,t.isAnimated()&&!t.isOpen()),Uy(`tabIndex`,t.tabIndex()),vo(`aria-label`,t.resolvedLabel()))},styles:[`
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
}`]})};var Tn=[`*`];function Nn(o,n){if(o&1&&sd(0,`bx-modal-banner`,4),o&2){let e=Wo();xo(`header`,e.config()?.header)(`titleId`,(e.id()??``)+`-title`)(`showCloseButton`,!1)}}function Rn(o,n){o&1&&$s(0)}function In(o,n){if(o&1&&(bo(0,`div`,5),rd(1,Rn,1,0,`ng-container`,9),Go()),o&2){let e=Wo();Xl(),xo(`ngTemplateOutlet`,e.headerTemplate())}}function Bn(o,n){o&1&&$s(0)}function Ln(o,n){if(o&1&&(bo(0,`div`,8),rd(1,Bn,1,0,`ng-container`,9),Go()),o&2){let e=Wo();Xl(),xo(`ngTemplateOutlet`,e.footerTemplate())}}function En(o,n){o&1&&dd(0)}var L=class o{isSheetOpen=G(()=>this.isOpen()&&!this.isSwipingVerticallyFinished());isDismissible=G(()=>this.config()?.disableClose!==!0);resolvedMaxHeight=G(()=>String(this.config()?.style?.mobileConfig?.customHeight??``)||`98dvh`);sheetStyles=G(()=>`--bx-drawer-width: 100%; --bx-drawer-min-height: 60dvh; --bx-drawer-body-padding: 0; --bx-drawer-footer-border-color: transparent; ${this.config()?.style?.wrapperStyles??``}`);currentTranslateY=$$1(0);isSwipingVerticallyFinished=$$1(!1);id=ee$1.required();headerTemplate=ee$1.required();footerTemplate=ee$1.required();config=ee$1.required();isOpen=ee$1.required();isAnimated=ee$1.required();hasBanner=ee$1.required();animationDuration=ee$1.required();close=Pk();onCloseRequest(){this.isDismissible()&&this.close.emit(`cancel`)}static ɵfac=function(e){return new(e||o)};static ɵcmp=Fr({type:o,selectors:[[`bx-modal-bottom-sheet`]],inputs:{id:[1,`id`],headerTemplate:[1,`headerTemplate`],footerTemplate:[1,`footerTemplate`],config:[1,`config`],isOpen:[1,`isOpen`],isAnimated:[1,`isAnimated`],hasBanner:[1,`hasBanner`],animationDuration:[1,`animationDuration`]},outputs:{close:`close`},ngContentSelectors:Tn,decls:10,vars:21,consts:[[`contentTemplate`,``],[`ariaLabel`,``,3,`offsetChange`,`closeRequest`,`embedded`,`modal`,`autoClose`,`open`,`dismissible`,`showBackdrop`,`showCloseButton`,`closeLabel`,`showHandle`,`headerVisible`,`stickyFooter`,`maxHeight`,`animationDuration`,`surfaceId`,`panelClass`,`panelStyle`,`offset`],[1,`bottom-sheet-modal-inner-content-container`],[1,`bottom-sheet-modal-top-group`],[3,`header`,`titleId`,`showCloseButton`],[1,`bottom-sheet-modal-header`],[1,`bottom-sheet-modal-main-content-container`],[3,`ngTemplateOutlet`],[`bxDrawerFooter`,``,1,`bottom-sheet-modal-footer`],[4,`ngTemplateOutlet`]],template:function(e,t){if(e&1){let a=pb();ld(),bo(0,`bx-bottom-drawer`,1),pk(`offsetChange`,function(h){return al(a),hA(t.currentTranslateY,h)||(t.currentTranslateY=h),cl(h)}),br(`closeRequest`,function(){return t.onCloseRequest()}),bo(1,`div`,2)(2,`div`,3),od(3,Nn,1,3,`bx-modal-banner`,4),od(4,In,2,1,`div`,5),bo(5,`div`,6),$s(6,7),Go()()(),od(7,Ln,2,1,`div`,8),Go(),rd(8,En,1,0,`ng-template`,null,0,RA)}if(e&2){let a=FT(9);xo(`embedded`,!0)(`modal`,!1)(`autoClose`,!1)(`open`,t.isSheetOpen())(`dismissible`,t.isDismissible())(`showBackdrop`,!1)(`showCloseButton`,!1)(`closeLabel`,t.config()?.closeLabel??`Close dialog`)(`showHandle`,!0)(`headerVisible`,!1)(`stickyFooter`,!0)(`maxHeight`,t.resolvedMaxHeight())(`animationDuration`,t.isAnimated()?t.animationDuration():0)(`surfaceId`,t.id()??``)(`panelClass`,t.config()?.style?.wrapperClasses??``)(`panelStyle`,t.sheetStyles()),uk(`offset`,t.currentTranslateY),Xl(3),nd(t.hasBanner()?3:-1),Xl(),nd(t.headerTemplate()?4:-1),Xl(2),xo(`ngTemplateOutlet`,a),Xl(),nd(t.footerTemplate()?7:-1)}},dependencies:[ml,Ta,j],styles:[`
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
}`]})};var An=[`*`];function Pn(o,n){if(o&1){let e=pb();bo(0,`bx-modal-backdrop`,13),br(`click`,function(a){al(e);let i=Wo(2);return cl(i.onBackdropClick.emit(a))}),Go()}if(o&2){let e=Wo(2);xo(`isAnimated`,e.isAnimated())(`isOpen`,e.isOpen())}}function Vn(o,n){if(o&1){let e=pb();bo(0,`bx-modal-banner`,14),br(`close`,function(){al(e);let a=Wo(2);return cl(a.close.emit(`cancel`))}),Go()}if(o&2){let e=Wo(2);xo(`header`,e.config()?.header)(`closeLabel`,e.config()?.closeLabel??`Close dialog`)(`titleId`,(e.id()??``)+`-title`)(`showCloseButton`,e.config()?.disableClose!==!0&&e.config()?.style?.showCloseButton!==!1)}}function jn(o,n){o&1&&$s(0)}function Wn(o,n){if(o&1){let e=pb();bo(0,`button`,17),br(`click`,function(){al(e);let a=Wo(3);return cl(a.close.emit(`cancel`))}),sd(1,`bx-icon`,18),Go()}if(o&2){let e=Wo(3);vo(`aria-label`,e.resolvedCloseLabel())}}function zn(o,n){if(o&1&&(bo(0,`div`,9),rd(1,jn,1,0,`ng-container`,15),od(2,Wn,2,1,`button`,16),Go()),o&2){let e=Wo(2);Xl(),xo(`ngTemplateOutlet`,e.headerTemplate()),Xl(),nd(!e.hasBanner()&&e.config()?.disableClose!==!0&&e.config()?.style?.showCloseButton!==!1?2:-1)}}function Fn(o,n){o&1&&$s(0)}function Hn(o,n){if(o&1&&(bo(0,`div`,12),rd(1,Fn,1,0,`ng-container`,15),Go()),o&2){let e=Wo(2);Xl(),xo(`ngTemplateOutlet`,e.footerTemplate())}}function Gn(o,n){if(o&1&&(bo(0,`div`,1),od(1,Pn,1,2,`bx-modal-backdrop`,3),bo(2,`div`,4)(3,`div`,5)(4,`div`,6)(5,`div`)(6,`div`,7),od(7,Vn,1,4,`bx-modal-banner`,8),od(8,zn,3,2,`div`,9),bo(9,`div`,10),$s(10,11),Go()(),od(11,Hn,2,1,`div`,12),Go()()()()()),o&2){let e=Wo(),t=FT(3);xo(`id`,e.id()??``),Xl(),nd(e.config()?.style?.hasBackdrop?1:-1),Xl(2),tr(`centered-modal-animate-in`,e.modalClasses()[`centered-modal-animate-in`])(`centered-modal-animate-out`,e.modalClasses()[`centered-modal-animate-out`]),Xl(),xo(`ngClass`,e.modalClasses()),Xl(),XT(e.config()?.style?.wrapperStyles??``),JT(`centered-modal-inner-content-container `+(e.config()?.style?.wrapperClasses??``)),Xl(2),nd(e.hasBanner()?7:-1),Xl(),nd(e.headerTemplate()?8:-1),Xl(2),xo(`ngTemplateOutlet`,t),Xl(),nd(e.footerTemplate()?11:-1)}}function qn(o,n){if(o&1){let e=pb();bo(0,`bx-modal-bottom-sheet`,19),br(`close`,function(){al(e);let a=Wo();return cl(a.close.emit(`cancel`))}),$s(1,11),Go()}if(o&2){let e=Wo(),t=FT(3);xo(`headerTemplate`,e.headerTemplate())(`footerTemplate`,e.footerTemplate())(`config`,e.config())(`id`,e.id())(`isOpen`,e.isOpen())(`isAnimated`,e.isAnimated())(`hasBanner`,e.hasBanner())(`animationDuration`,e.animationDuration()),Xl(),xo(`ngTemplateOutlet`,t)}}function Un(o,n){o&1&&dd(0)}var Z=class o{i18n=b(VQ,{optional:!0});resolvedCloseLabel=G(()=>LQ(this.config()?.closeLabel??`Close dialog`,this.i18n));modalClasses=G(()=>({"centered-modal-content-wrapper":!0,"centered-modal-default-style":this.hasDefaultContentWrapperClass()||this.hasBanner(),"centered-modal-animate-in":this.isAnimated()&&this.isOpen(),"centered-modal-animate-out":this.isAnimated()&&!this.isOpen()}));headerTemplate=ee$1.required();footerTemplate=ee$1.required();config=ee$1.required();id=ee$1.required();isOpen=ee$1.required();isAnimated=ee$1.required();isBottomSheetModalActive=ee$1.required();animationDuration=ee$1.required();hasDefaultContentWrapperClass=ee$1.required();hasBanner=ee$1.required();close=Pk();onBackdropClick=Pk();bottomSheet=Iz(L);static ɵfac=function(e){return new(e||o)};static ɵcmp=Fr({type:o,selectors:[[`bx-modal-centered`]],viewQuery:function(e,t){e&1&&Yy(t.bottomSheet,L,5),e&2&&fb()},inputs:{headerTemplate:[1,`headerTemplate`],footerTemplate:[1,`footerTemplate`],config:[1,`config`],id:[1,`id`],isOpen:[1,`isOpen`],isAnimated:[1,`isAnimated`],isBottomSheetModalActive:[1,`isBottomSheetModalActive`],animationDuration:[1,`animationDuration`],hasDefaultContentWrapperClass:[1,`hasDefaultContentWrapperClass`],hasBanner:[1,`hasBanner`]},outputs:{close:`close`,onBackdropClick:`onBackdropClick`},ngContentSelectors:An,decls:4,vars:1,consts:[[`contentTemplate`,``],[1,`modal-overlay`,3,`id`],[3,`headerTemplate`,`footerTemplate`,`config`,`id`,`isOpen`,`isAnimated`,`hasBanner`,`animationDuration`],[3,`isAnimated`,`isOpen`],[1,`modal-overlay-wrapper`],[1,`centered-modal-frame`],[`bxSurface`,``,`data-bx-light-scope`,``,3,`ngClass`],[1,`centered-modal-top-group`],[3,`header`,`closeLabel`,`titleId`,`showCloseButton`],[1,`centered-modal-header`],[1,`centered-modal-main-content-container`],[3,`ngTemplateOutlet`],[1,`centered-modal-footer`],[3,`click`,`isAnimated`,`isOpen`],[3,`close`,`header`,`closeLabel`,`titleId`,`showCloseButton`],[4,`ngTemplateOutlet`],[`type`,`button`,1,`bx-modal-close`],[`type`,`button`,1,`bx-modal-close`,3,`click`],[`name`,`x`],[3,`close`,`headerTemplate`,`footerTemplate`,`config`,`id`,`isOpen`,`isAnimated`,`hasBanner`,`animationDuration`]],template:function(e,t){e&1&&(ld(),od(0,Gn,12,15,`div`,1)(1,qn,2,9,`bx-modal-bottom-sheet`,2),rd(2,Un,1,0,`ng-template`,null,0,RA)),e&2&&nd(t.isBottomSheetModalActive()?1:0)},dependencies:[GC,Ta,S1,L,j,J,ZC],styles:[`
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
}`]})};var Kn=[`*`];function Qn(o,n){if(o&1){let e=pb();bo(0,`bx-modal-banner`,10),br(`close`,function(){al(e);let a=Wo(2);return cl(a.close.emit(`cancel`))}),Go()}if(o&2){let e=Wo(2);xo(`header`,e.config()?.header)(`closeLabel`,e.config()?.closeLabel??`Close dialog`)(`titleId`,(e.id()??``)+`-title`)(`showCloseButton`,e.config()?.disableClose!==!0&&e.config()?.style?.showCloseButton!==!1)}}function Xn(o,n){o&1&&$s(0)}function Yn(o,n){if(o&1){let e=pb();bo(0,`button`,13),br(`click`,function(){al(e);let a=Wo(3);return cl(a.close.emit(`cancel`))}),sd(1,`bx-icon`,14),Go()}if(o&2){let e=Wo(3);vo(`aria-label`,e.resolvedCloseLabel())}}function $n(o,n){if(o&1&&(bo(0,`div`,6),rd(1,Xn,1,0,`ng-container`,11),od(2,Yn,2,1,`button`,12),Go()),o&2){let e=Wo(2);Xl(),xo(`ngTemplateOutlet`,e.headerTemplate()),Xl(),nd(!e.hasBanner()&&e.config()?.disableClose!==!0&&e.config()?.style?.showCloseButton!==!1?2:-1)}}function Jn(o,n){o&1&&$s(0)}function Zn(o,n){if(o&1&&(bo(0,`div`,9),rd(1,Jn,1,0,`ng-container`,11),Go()),o&2){let e=Wo(2);Xl(),xo(`ngTemplateOutlet`,e.footerTemplate())}}function et(o,n){if(o&1&&(bo(0,`div`,3)(1,`div`,4),od(2,Qn,1,4,`bx-modal-banner`,5),od(3,$n,3,2,`div`,6),bo(4,`div`,7),$s(5,8),Go()(),od(6,Zn,2,1,`div`,9),Go()),o&2){let e=Wo(),t=FT(3);ka(`--%NS%anim-duration`,e.animationDuration(),`ms`),xo(`ngClass`,e.modalClasses())(`id`,e.id()??``),Xl(),XT(e.config()&&e.config()?.style?.wrapperStyles?e.config()?.style?.wrapperStyles:``),JT(e.config()&&e.config()?.style?.wrapperClasses?e.config()?.style?.wrapperClasses:``),Xl(),nd(e.hasBanner()?2:-1),Xl(),nd(e.headerTemplate()?3:-1),Xl(2),xo(`ngTemplateOutlet`,t),Xl(),nd(e.footerTemplate()?6:-1)}}function nt(o,n){if(o&1){let e=pb();bo(0,`bx-modal-bottom-sheet`,15),br(`close`,function(){al(e);let a=Wo();return cl(a.close.emit(`cancel`))}),$s(1,8),Go()}if(o&2){let e=Wo(),t=FT(3);xo(`headerTemplate`,e.headerTemplate())(`footerTemplate`,e.footerTemplate())(`config`,e.config())(`id`,e.id())(`isOpen`,e.isOpen())(`isAnimated`,e.isAnimated())(`hasBanner`,e.hasBanner())(`animationDuration`,e.animationDuration()),Xl(),xo(`ngTemplateOutlet`,t)}}function tt(o,n){o&1&&dd(0)}var ee=class o{i18n=b(VQ,{optional:!0});resolvedCloseLabel=G(()=>LQ(this.config()?.closeLabel??`Close dialog`,this.i18n));renderOpenClass=$$1(!1);modalClasses=G(()=>{let n=this.layout()===`left`,e=this.layout()===`right`,t=this.isAnimated(),a=this.renderOpenClass();return{"side-modal-content-wrapper":!0,"side-modal-default-style":this.hasDefaultContentWrapperClass()||this.hasBanner(),"with-footer":this.footerTemplate()!==null,left:n,right:e,"side-modal-animate-in":t?a:!0,"side-modal-animate-out":t?!a:!1}});layout=ee$1.required();headerTemplate=ee$1.required();footerTemplate=ee$1.required();config=ee$1.required();id=ee$1.required();isOpen=ee$1.required();isAnimated=ee$1.required();isBottomSheetModalActive=ee$1.required();animationDuration=ee$1.required();hasDefaultContentWrapperClass=ee$1.required();hasBanner=ee$1.required();close=Pk();bottomSheet=Iz(L);constructor(){let n=b(ke$1).nativeElement,e=!1;Vk(t=>{let a=this.isOpen(),i=this.isAnimated(),h=n.ownerDocument.defaultView,u=a&&!e;if(e=a,this.renderOpenClass.set(a&&(!i||!u)),!a||!i||!u||!h)return;let C=h.requestAnimationFrame(()=>{C=h.requestAnimationFrame(()=>this.renderOpenClass.set(!0))});t(()=>h.cancelAnimationFrame(C))})}static ɵfac=function(e){return new(e||o)};static ɵcmp=Fr({type:o,selectors:[[`bx-modal-side`]],viewQuery:function(e,t){e&1&&Yy(t.bottomSheet,L,5),e&2&&fb()},inputs:{layout:[1,`layout`],headerTemplate:[1,`headerTemplate`],footerTemplate:[1,`footerTemplate`],config:[1,`config`],id:[1,`id`],isOpen:[1,`isOpen`],isAnimated:[1,`isAnimated`],isBottomSheetModalActive:[1,`isBottomSheetModalActive`],animationDuration:[1,`animationDuration`],hasDefaultContentWrapperClass:[1,`hasDefaultContentWrapperClass`],hasBanner:[1,`hasBanner`]},outputs:{close:`close`},ngContentSelectors:Kn,decls:4,vars:1,consts:[[`contentTemplate`,``],[`bxSurface`,``,`data-bx-light-scope`,``,3,`ngClass`,`id`,`--%NS%anim-duration`],[3,`headerTemplate`,`footerTemplate`,`config`,`id`,`isOpen`,`isAnimated`,`hasBanner`,`animationDuration`],[`bxSurface`,``,`data-bx-light-scope`,``,3,`ngClass`,`id`],[1,`side-modal-inner-content-container`],[3,`header`,`closeLabel`,`titleId`,`showCloseButton`],[1,`side-modal-header`],[1,`side-modal-main-content-container`],[3,`ngTemplateOutlet`],[1,`side-modal-footer`],[3,`close`,`header`,`closeLabel`,`titleId`,`showCloseButton`],[4,`ngTemplateOutlet`],[`type`,`button`,1,`bx-modal-close`],[`type`,`button`,1,`bx-modal-close`,3,`click`],[`name`,`x`],[3,`close`,`headerTemplate`,`footerTemplate`,`config`,`id`,`isOpen`,`isAnimated`,`hasBanner`,`animationDuration`]],template:function(e,t){e&1&&(ld(),od(0,et,7,12,`div`,1)(1,nt,2,9,`bx-modal-bottom-sheet`,2),rd(2,tt,1,0,`ng-template`,null,0,RA)),e&2&&nd(t.isBottomSheetModalActive()?1:0)},dependencies:[GC,Ta,L,S1,j,ZC],styles:[`
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
}`]})};var ne=class o{closeLabel=$$1(`Close dialog`);layout=$$1(`center`);animate=$$1(!0);hasBackdrop=$$1(!0);showCloseButton=$$1(!0);contentWrapper=$$1(!0);overrideFullHeight=$$1(!1);disableClose=$$1(!1);disableCloseOnBackdropClick=$$1(!1);disableCloseOnNavigation=$$1(!1);closeGuardOnlyOnCancel=$$1(!0);nestedOpacityFloors=$$1([.9,1]);update(n){n.closeLabel!==void 0&&this.closeLabel.set(n.closeLabel),n.animate!==void 0&&this.animate.set(n.animate),n.hasBackdrop!==void 0&&this.hasBackdrop.set(n.hasBackdrop),n.disableCloseOnBackdropClick!==void 0&&this.disableCloseOnBackdropClick.set(n.disableCloseOnBackdropClick)}static ɵfac=function(e){return new(e||o)};static ɵprov=B({token:o,factory:o.ɵfac,providedIn:`root`})};var it=[`modalContainer`];var lt=[`contentTemplate`];var rt=[`dynamicContainer`];function st(o,n){if(o&1){let e=pb();bo(0,`bx-modal-backdrop`,6),br(`click`,function(a){al(e);let i=Wo();return cl(i.onBackdropClick(a))}),Go()}if(o&2){let e=Wo();xo(`isAnimated`,e.isAnimated())(`isOpen`,e.isOpen())}}function dt(o,n){if(o&1){let e=pb();bo(0,`bx-modal-side`,7),br(`close`,function(a){al(e);let i=Wo();return cl(i.close(a,void 0,!0))}),$s(1,8),Go()}if(o&2){let e=Wo(),t=FT(6);xo(`layout`,e.effectiveLayout())(`headerTemplate`,e.headerTemplate())(`footerTemplate`,e.footerTemplate())(`config`,e.config())(`id`,e.id())(`isOpen`,e.isOpen())(`isAnimated`,e.isAnimated())(`isBottomSheetModalActive`,e.isBottomSheetModalActive())(`animationDuration`,e.animationDuration)(`hasDefaultContentWrapperClass`,e.hasDefaultContentWrapperClass())(`hasBanner`,e.hasBanner()),Xl(),xo(`ngTemplateOutlet`,t)}}function ct(o,n){if(o&1){let e=pb();bo(0,`bx-modal-centered`,9),br(`close`,function(a){al(e);let i=Wo();return cl(i.close(a,void 0,!0))})(`onBackdropClick`,function(a){al(e);let i=Wo();return cl(i.onBackdropClick(a))}),$s(1,8),Go()}if(o&2){let e=Wo(),t=FT(6);xo(`headerTemplate`,e.headerTemplate())(`footerTemplate`,e.footerTemplate())(`config`,e.config())(`id`,e.id())(`isOpen`,e.isOpen())(`isAnimated`,e.isAnimated())(`isBottomSheetModalActive`,e.isBottomSheetModalActive())(`animationDuration`,e.animationDuration)(`hasDefaultContentWrapperClass`,e.hasDefaultContentWrapperClass())(`hasBanner`,e.hasBanner()),Xl(),xo(`ngTemplateOutlet`,t)}}function mt(o,n){if(o&1&&(bo(0,`div`,10),$s(1,null,2),Go()),o&2){let e=Wo();XT(e.config().contentStyles),xo(`ngClass`,e.config().contentClasses)}}var A=class o{i18n=b(VQ,{optional:!0});elementRef=b(ke$1);cdkTrapFocus=b(YN,{self:!0});modalService=b(_e);modalGlobalSettingsService=b(ne);scrollLockService=b(Nw);windowDimensionsService=b(Fd);destroyRef=b(ge);document=b(q);bxA11yService=b(Br);modalRef=b(E);sideModalComponents=Iz(ee);centeredModalComponents=Iz(Z);headerTemplate=$$1(null);footerTemplate=$$1(null);isBottomSheetModalActive=$$1(!1);windowDimensions=this.windowDimensionsService.dimensions;id=G(()=>this.config().id??this.scrollLockId);dialogLabel=G(()=>LQ(this.config().ariaLabel??this.config().header?.text??`Dialog`,this.i18n));dialogLabelledBy=G(()=>this.config().ariaLabelledBy||(!this.config().ariaLabel&&this.config().header?.text?`${this.id()}-title`:null));hasBanner=G(()=>{let n=this.config(),e=n.header,t=e?.text;return!!(t&&(UC(t)?!!t.key:t.length>0)||e?.icon||e?.loading||!n.disableClose&&n.style.showCloseButton!==!1&&!this.headerTemplate())});hasDefaultContentWrapperClass=G(()=>this.config().style.contentWrapper!==!1);materialOpacity=G(()=>{let n=this.nestingDepth(),e=this.modalGlobalSettingsService.nestedOpacityFloors();if(n<=0||e.length===0)return .52;let t=e[Math.min(n-1,e.length-1)],a=n===1?.9:1;return Number.isFinite(t)?Math.max(.52,Math.min(1,t)):a});modalContainer=Sz(`modalContainer`);contentTemplate=Sz(`contentTemplate`);dynamicContainer=Sz(`dynamicContainer`,{read:fr});config=this.modalRef.config;animationDuration=175;isOpen=$$1(!0);effectiveLayout=$$1(`center`);isCentered=$$1(!1);isSide=$$1(!1);nestingDepth=$$1(0);isAnimated=G(()=>!this.bxA11yService.isReducedMotion()&&this.config().style.animate);componentRef;closeFunction;backdropClickSubject=new xe;backdropClick=this.backdropClickSubject.asObservable();layoutFocus;isCloseGuardPending=!1;scrollLockId=qK();_sortedBreakpoints=[];_currentVcr=null;constructor(){this.cdkTrapFocus.autoCapture=!0,this.initKeyboardSubscription(),Vk(()=>{this.dynamicContainer(),this.effectiveLayout();let n=this.layoutFocus;n?.isConnected&&(this.layoutFocus=void 0,n.closest(`[inert]`)||n.focus({preventScroll:!0}))}),We(()=>{this.cdkTrapFocus.enabled=this.modalService.isTopmost(this.modalRef)}),We(()=>{let n=this.windowDimensions().width;this.handleLayout(n)}),We(()=>{let n=this.dynamicContainer();n&&this.componentRef&&(this._currentVcr=n,n.indexOf(this.componentRef.hostView)===-1&&n.insert(this.componentRef.hostView))})}ngOnInit(){this.initBreakpointCache(),this.scrollLockService.disableScroll(this.scrollLockId,{animationDuration:this.animationDuration,handleTouchInput:!0,mobileOnlyTouchPrevention:!0})}ngAfterViewInit(){let n=this.windowDimensionsService.dimensions().width;this.handleLayout(n)}ngOnDestroy(){this.componentRef&&!this.componentRef.hostView.destroyed&&this.componentRef.destroy(),this.dynamicContainer()?.clear(),this.scrollLockService.enableScroll(this.scrollLockId),this.closeFunction=void 0,this.backdropClickSubject.complete()}setHeaderTemplate(n){this.headerTemplate.set(n)}setFooterTemplate(n){this.footerTemplate.set(n)}close(n=`cancel`,e=void 0,t=!1,a=!1){if(!this.isOpen()||this.isCloseGuardPending&&!a)return;if(a){this.handleClose(n,e);return}if(this.config().disableClose===!0&&t){this.resetBottomSheetModalLayout();return}let i=this.config().closeGuardOnlyOnCancel!==!0||n!==`confirm`,h=this.config().closeGuard;if(i&&h){this.isCloseGuardPending=!0;try{let u=h.canClose(this.modalService),C=u instanceof Z$1?u:u instanceof Promise?Cr(u):Ii(u);this.isBottomSheetModalActive()&&this.resetBottomSheetModalLayout(),C.pipe(ps(1),Sd(this.destroyRef),Wg(()=>{this.isCloseGuardPending=!1})).subscribe(Oe=>{Oe&&(!t||!this.config().disableClose)&&this.handleClose(n,e)})}catch(u){throw this.isCloseGuardPending=!1,u}return}this.handleClose(n,e)}onBackdropClick(n){n.preventDefault(),n.stopPropagation(),this.isOpen()&&(this.backdropClickSubject.next(n),this.config().style?.hasBackdrop&&this.config().disableCloseOnBackdropClick!==!0&&this.close(`cancel`,void 0,!0))}initKeyboardSubscription(){yi(this.document,`keydown`).pipe(Dr(n=>n.key===`Escape`&&!n.defaultPrevented),Sd(this.destroyRef)).subscribe(n=>{this.modalService.isTopmost(this.modalRef)&&(n.preventDefault(),this.close(`cancel`,void 0,!0))})}initBreakpointCache(){let n=this.config().style?.breakpoints;if(n&&Object.keys(n).length>0){let e=this.windowDimensionsService.breakpoints;this._sortedBreakpoints=Object.keys(n).map(t=>({width:e[t],layout:n[t]??this.config().style.layout??`center`})).sort((t,a)=>t.width-a.width)}}async handleClose(n,e){if(!this.isOpen())return;this.isOpen.set(!1),this.setBottomSheetModalFinishedState(!0);let t={data:e,state:n};this.closeFunction&&this.closeFunction(t)}handleLayout(n){if(!this.isOpen())return;let e=this.config().style.layout;for(let C of this._sortedBreakpoints)if(n<=C.width){e=C.layout;break}let t=e===`left`||e===`right`,a=this.effectiveLayout()!==e,i=this.document.activeElement;if(a&&this.document.defaultView&&i instanceof HTMLElement&&this.elementRef.nativeElement.contains(i)&&(this.layoutFocus=i),a&&this._currentVcr&&this.componentRef){let C=this._currentVcr.indexOf(this.componentRef.hostView);C!==-1&&this._currentVcr.detach(C)}this.effectiveLayout.set(e),this.isSide.set(t),this.isCentered.set(e===`center`||e===`bottom-sheet`);let h=e===`bottom-sheet`,u=this.isBottomSheetModalActive();h&&!u?this.isBottomSheetModalActive.set(!0):!h&&u&&this.isBottomSheetModalActive.set(!1)}getBottomSheetModal(){return this.sideModalComponents()[0]?.bottomSheet()[0]??this.centeredModalComponents()[0]?.bottomSheet()[0]}resetBottomSheetModalLayout(){let n=this.getBottomSheetModal();n&&n.currentTranslateY.set(0)}setBottomSheetModalFinishedState(n){let e=this.getBottomSheetModal();e&&e.isSwipingVerticallyFinished.set(n)}static ɵfac=function(e){return new(e||o)};static ɵcmp=Fr({type:o,selectors:[[`bx-modal`]],viewQuery:function(e,t){e&1&&Yy(t.sideModalComponents,ee,5)(t.centeredModalComponents,Z,5)(t.modalContainer,it,5)(t.contentTemplate,lt,5)(t.dynamicContainer,rt,5,fr),e&2&&fb(5)},hostAttrs:[`role`,`dialog`,`aria-modal`,`true`,`tabindex`,`-1`],hostVars:10,hostBindings:function(e,t){e&2&&(vo(`data-bx-modal-task`,t.id())(`aria-label`,t.dialogLabelledBy()?null:t.dialogLabel())(`aria-labelledby`,t.dialogLabelledBy())(`aria-describedby`,t.config().ariaDescribedBy||null),ka(`--%NS%bx-modal-material-opacity`,t.materialOpacity()),tr(`has-backdrop`,t.config().style.hasBackdrop)(`is-nested`,t.nestingDepth()>0))},features:[fT([YN])],decls:7,vars:2,consts:[[`modalContainer`,``],[`contentTemplate`,``],[`dynamicContainer`,``],[3,`isAnimated`,`isOpen`],[3,`layout`,`headerTemplate`,`footerTemplate`,`config`,`id`,`isOpen`,`isAnimated`,`isBottomSheetModalActive`,`animationDuration`,`hasDefaultContentWrapperClass`,`hasBanner`],[3,`headerTemplate`,`footerTemplate`,`config`,`id`,`isOpen`,`isAnimated`,`isBottomSheetModalActive`,`animationDuration`,`hasDefaultContentWrapperClass`,`hasBanner`],[3,`click`,`isAnimated`,`isOpen`],[3,`close`,`layout`,`headerTemplate`,`footerTemplate`,`config`,`id`,`isOpen`,`isAnimated`,`isBottomSheetModalActive`,`animationDuration`,`hasDefaultContentWrapperClass`,`hasBanner`],[3,`ngTemplateOutlet`],[3,`close`,`onBackdropClick`,`headerTemplate`,`footerTemplate`,`config`,`id`,`isOpen`,`isAnimated`,`isBottomSheetModalActive`,`animationDuration`,`hasDefaultContentWrapperClass`,`hasBanner`],[1,`modal-content`,3,`ngClass`]],template:function(e,t){if(e&1&&(od(0,st,1,2,`bx-modal-backdrop`,3),db(1,null,0),od(3,dt,2,12,`bx-modal-side`,4)(4,ct,2,11,`bx-modal-centered`,5),cd(),rd(5,mt,3,3,`ng-template`,null,1,RA)),e&2){let a;nd(t.config().style.hasBackdrop&&(t.isSide()||t.isBottomSheetModalActive())?0:-1),Xl(3),nd((a=!0)===t.isSide()?3:a===t.isCentered()?4:-1)}},dependencies:[S1,Ta,Z,ee,J],styles:[`
[_nghost-%COMP%] {
  --%NS%bx-modal-dimming-background: transparent;
  --%NS%bx-modal-backdrop-fill: transparent;
  --%NS%bx-modal-backdrop-tone: var(--%NS%bx-modal-backdrop-background, rgb(0 0 0 / 32%));
  position: fixed;
  inset: 0;
  z-index: 400;
  pointer-events: none;
}
[popover][_nghost-%COMP%] {
  margin: 0;
  padding: 0;
  border: 0;
  inline-size: 100%;
  block-size: 100%;
  max-inline-size: none;
  max-block-size: none;
  background: transparent;
  color: inherit;
  overflow: visible;
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
[_nghost-%COMP%]    > bx-modal-backdrop[_ngcontent-%COMP%], 
[_nghost-%COMP%]    > bx-modal-centered[_ngcontent-%COMP%], 
[_nghost-%COMP%]    > bx-modal-side[_ngcontent-%COMP%] {
  pointer-events: auto;
}
.modal-content[_ngcontent-%COMP%] {
  display: flex;
  flex: 1 1 auto;
  min-inline-size: 0;
  min-block-size: 0;
  inline-size: 100%;
}`],changeDetection:1})};var De=new T(`MODAL_DATA`);var _e=class o{destroyRef=b(ge);router=b(dt$1);injector=b(ie);applicationRef=b(mr);environmentInjector=b(gt);rendererFactory2=b(St);document=b(q);modalGlobalSettingsService=b(ne);renderer;isolatedElements=/* @__PURE__ */ new Map;modals=$$1(/* @__PURE__ */ new Set);isolationObserver;constructor(){this.renderer=this.rendererFactory2.createRenderer(null,null),this.createSubscriptions(),this.destroyRef.onDestroy(()=>{this.isolationObserver?.disconnect();for(let[n,e]of this.isolatedElements)this.restoreIsolatedElement(n,e);this.isolatedElements.clear()})}open(n,e){let t=this.document.activeElement,i=new E(new $(this.resolveConfig(e)),n,this),h=ie.create({providers:[{provide:De,useValue:e?.data},{provide:E,useValue:i}],parent:this.injector}),u=vd(A,{environmentInjector:this.environmentInjector,elementInjector:h}),C=u.location.nativeElement,Oe=this.document.defaultView&&t instanceof HTMLElement?zh(t,C):void 0;i.attachContainer(u),u.onDestroy(()=>{Oe?.(),this.applicationRef.detachView(u.hostView),u.location.nativeElement.remove()});try{this.applicationRef.attachView(u.hostView),this.document.body.appendChild(C),typeof C.showPopover==`function`&&(C.popover=`manual`,C.showPopover()),this.modals.update(Sn=>new Set(Sn).add(i)),this.syncNestingDepth();let we=ie.create({providers:[{provide:A,useValue:u.instance}],parent:u.injector}),te=vd(n,{environmentInjector:this.environmentInjector,elementInjector:we}),se=te.location.nativeElement;return i.attachContent(te),this.renderer.setStyle(se,`height`,`97%`),this.renderer.setStyle(se,`width`,`100%`),this.renderer.setStyle(se,`display`,`flex`),this.renderer.setStyle(se,`flex-grow`,`1`),i.open(),u.instance.isOpen()&&this.isIModal(te.instance)&&(te.instance.modal=i,te.instance.onModalInit()),i}catch(we){throw u.hostView.destroyed||u.destroy(),this.unregister(i),we}}close(n){n.close()}unregister(n){this.modals.update(e=>{let t=new Set(e);return t.delete(n),t}),this.syncNestingDepth()}closeAll(n=!1){this.modals().forEach(e=>{(e.config().disableCloseOnNavigation!==!0||!n)&&e.close(`cancel`,void 0,!0)})}find(n){for(let e of this.modals())if(e.componentType===n)return!0;return!1}modalsCount(){return this.modals().size}isTopmost(n){return[...this.modals()].at(-1)===n}restoreTaskFocus(){if(!this.document.defaultView)return;let n=[...this.modals()].at(-1)?.modalContainerElement,e=this.document.activeElement;if(!n||e instanceof Node&&n.contains(e))return;let t=e instanceof HTMLElement?e.closest(`[data-bx-overlay-modal-owner]`)?.dataset.bxOverlayModalOwner:void 0;if(t&&t===n.dataset.bxModalTask)return;(n.querySelector(`button:not(:disabled), input:not(:disabled), select:not(:disabled), textarea:not(:disabled), a[href], [tabindex="0"]`)??n).focus({preventScroll:!0})}syncNestingDepth(){for(let[e,t]of[...this.modals()].entries())t.setNestingDepth(e);this.syncAccessibilityIsolation();let n=this.document.defaultView;this.modals().size&&n&&!this.isolationObserver?(this.isolationObserver=new n.MutationObserver(()=>this.syncAccessibilityIsolation()),this.isolationObserver.observe(this.document.body,{childList:!0,subtree:!0})):this.modals().size||(this.isolationObserver?.disconnect(),this.isolationObserver=void 0)}syncAccessibilityIsolation(){if(!this.document.defaultView)return;let n=[...this.modals()].at(-1)?.modalContainerElement,e=/* @__PURE__ */ new Set,t=a=>{for(let i of Array.from(a.children)){if(!(i instanceof HTMLElement)||i===n)continue;let h=n?.dataset.bxModalTask,u=h&&(i.dataset.bxOverlayModalOwner===h||Array.from(i.querySelectorAll(`[data-bx-overlay-modal-owner]`)).some(C=>C.dataset.bxOverlayModalOwner===h));i.classList.contains(`cdk-overlay-container`)?t(i):u||e.add(i)}};n&&t(this.document.body);for(let[a,i]of this.isolatedElements)e.has(a)||(this.restoreIsolatedElement(a,i),this.isolatedElements.delete(a));for(let a of e)this.isolatedElements.has(a)||this.isolatedElements.set(a,{inert:a.inert,ariaHidden:a.getAttribute(`aria-hidden`)}),a.inert=!0,a.setAttribute(`aria-hidden`,`true`)}restoreIsolatedElement(n,e){n.inert=e.inert,e.ariaHidden===null?n.removeAttribute(`aria-hidden`):n.setAttribute(`aria-hidden`,e.ariaHidden)}createSubscriptions(){this.router.events.pipe(Dr(n=>n instanceof Xe),ms(1),Sd()).subscribe(()=>{this.modalsCount()>0&&this.closeAll(!0)})}isIModal(n){return typeof n==`object`&&n!==null&&`onModalInit`in n&&typeof n.onModalInit==`function`}resolveConfig(n){let e=n?.style?.animate??this.modalGlobalSettingsService.animate(),t={layout:n?.style?.layout??this.modalGlobalSettingsService.layout(),animate:e,hasBackdrop:n?.style?.hasBackdrop??this.modalGlobalSettingsService.hasBackdrop(),showCloseButton:n?.style?.showCloseButton??this.modalGlobalSettingsService.showCloseButton(),contentWrapper:n?.style?.contentWrapper??this.modalGlobalSettingsService.contentWrapper(),overrideFullHeight:n?.style?.overrideFullHeight??this.modalGlobalSettingsService.overrideFullHeight(),breakpoints:n?.style?.breakpoints,mobileConfig:n?.style?.mobileConfig,wrapperClasses:n?.style?.wrapperClasses,wrapperStyles:n?.style?.wrapperStyles,closeDelay:n?.style?.closeDelay};return s(r({},n),{closeLabel:n?.closeLabel??this.modalGlobalSettingsService.closeLabel(),disableClose:n?.disableClose??this.modalGlobalSettingsService.disableClose(),disableCloseOnBackdropClick:n?.disableCloseOnBackdropClick??this.modalGlobalSettingsService.disableCloseOnBackdropClick(),disableCloseOnNavigation:n?.disableCloseOnNavigation??this.modalGlobalSettingsService.disableCloseOnNavigation(),closeGuardOnlyOnCancel:n?.closeGuardOnlyOnCancel??this.modalGlobalSettingsService.closeGuardOnlyOnCancel(),style:t})}static ɵfac=function(e){return new(e||o)};static ɵprov=B({token:o,factory:o.ɵfac,providedIn:`root`})};var ke=class{};var hn=class extends ke{constructor(e,t){super();this.component=e;this.config=t}component;config;canClose(e){return e.open(this.component,this.config).afterClosed().pipe(Tt(a=>a.state===`confirm`))}};var Cn=class o{modalRef=b(E);injectedData=b(De);modal=this.modalRef;data=this.injectedData;onModalInit(){}close(n){this.modal?.close(`cancel`,n)}static ɵfac=function(e){return new(e||o)};static ɵprov=B({token:o,factory:o.ɵfac})};var vn=class o{templateRef=b($t);modalCore=b(A,{optional:!0});constructor(){this.modalCore?this.modalCore.setFooterTemplate(this.templateRef):console.warn(`[ModalFooter] Directive used outside of a ModalComponent.`)}static ɵfac=function(e){return new(e||o)};static ɵdir=pe({type:o,selectors:[[``,`appModalFooter`,``]]})};var xn=class o{templateRef=b($t);modalCore=b(A,{optional:!0});constructor(){this.modalCore?this.modalCore.setHeaderTemplate(this.templateRef):console.warn(`[ModalHeader] Directive used outside of a ModalComponent.`)}static ɵfac=function(e){return new(e||o)};static ɵdir=pe({type:o,selectors:[[``,`appModalHeader`,``]]})};export{L as a,ee as c,vn as d,xn as f,J as i,hn as l,Cn as n,Z as o,E as r,_e as s,$ as t,j as u};