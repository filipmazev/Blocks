import{$i as rP,Ar as eS,B as GF,Ba as yn,Br as g,Bt as P$1,Ci as mt$1,Ct as Me,Da as vr,Di as nn,Dr as dr,Ei as ne$1,Et as Mt$1,F as Fn$1,Gi as pt$1,Gr as h,Hi as pe,Hn as Z$1,Hr as ge,Ht as Pe,Ii as on,It as Oe,J as I,Ji as qc,Ka as ze,Li as oo,Lr as fe,Mr as ee$1,Mt as OA,Na as xe,Nn as Xt,Nt as OC,O as Dr,Pa as xn,Pr as ep,Q as Ie,R as Fx,Ri as p,Sa as up,Sr as da,Ti as nc,Ut as Pg,Va as yp,W as H,Ya as zt,Yt as Qr,Z as Ia,Zi as qr,_ as Bt,_t as Ld,an as Ts,c as An$1,da as te$1,di as ke,dn as Ut,ft as Ke,gr as ct$1,hr as cp,ht as LA,ir as be,it as JA,j as Ee,ja as wm,jn as Xa,kr as eO,l as Ao,la as st$1,mi as le,nn as St$1,o as A$1,or as bt$1,pa as tn,pt as Kt,qt as QR,ri as io,rn as Te,rr as at$1,si as k,t as $,tn as Se,u as B$1,ui as k_,v as C,vi as lt$1,vt as Lg,w as D,x as Ce,xi as me,xn as W,ya as ue,yt as Ln$1,z as G$1,za as ye,zr as fs}from"./chunk-BR06ksVJ.js";import{n as s,t as r}from"./chunk-DFgPOoGa.js";function En(o,n){if(o&1&&Oe(0,`bx-icon`,8),o&2){let e=n,t=C(3),a=eO(1);Ce(`visibility`,a.loading?`hidden`:`visible`),B$1(`name`,e.name)(`size`,t.iconSize())(`color`,e.color)(`bgColor`,e.bgColor)(`strokeWidth`,e.strokeWidth)}}function An(o,n){if(o&1&&Oe(0,`bx-loading-spinner`,7),o&2){let e=C(3),t=eO(1);B$1(`size`,e.iconSize())(`label`,t.loadingLabel??`Loading`)}}function Pn(o,n){if(o&1&&(A$1(0,`span`,5),te$1(1,En,1,7,`bx-icon`,6),te$1(2,An,1,2,`bx-loading-spinner`,7),P$1()),o&2){let e,t=C(2),a=eO(1);Ce(`min-inline-size`,t.iconSize(),`px`)(`min-block-size`,t.iconSize(),`px`),k(),ne$1((e=a.icon)?1:-1,e),k(),ne$1(a.loading?2:-1)}}function Ln(o,n){if(o&1&&(A$1(0,`div`,1),te$1(1,Pn,3,6,`span`,3),A$1(2,`span`,4),me(3),P$1()()),o&2){let e=C(),t=eO(1);k(),ne$1(t.icon||t.loading!==void 0?1:-1),k(2),Me(e.resolvedText())}}function Vn(o,n){if(o&1){let e=tn();A$1(0,`button`,9),ue(`click`,function(){st$1(e);let a=C();return at$1(a.close.emit(`cancel`))}),Oe(1,`bx-icon`,10),P$1()}}var G=class o{i18n=p(Se,{optional:!0});resolvedText=g(()=>be(this.header()?.text,this.i18n));iconSize=g(()=>{let n=Number(this.header()?.icon?.size??24);return Number.isFinite(n)&&n>0?n:24});header=h.required();showCloseButton=h.required();close=bt$1();static ɵfac=function(e){return new(e||o)};static ɵcmp=$({type:o,selectors:[[`bx-modal-banner`]],inputs:{header:[1,`header`],showCloseButton:[1,`showCloseButton`]},outputs:{close:`close`},decls:4,vars:3,consts:[[1,`modal-top-banner-container`],[1,`modal-top-banner-title-container`],[`type`,`button`,`aria-label`,`Close dialog`,1,`bx-modal-close`],[1,`modal-icon-area`,3,`min-inline-size`,`min-block-size`],[`aria-live`,`polite`,`aria-atomic`,`true`],[1,`modal-icon-area`],[3,`name`,`size`,`color`,`bgColor`,`strokeWidth`,`visibility`],[3,`size`,`label`],[3,`name`,`size`,`color`,`bgColor`,`strokeWidth`],[`type`,`button`,`aria-label`,`Close dialog`,1,`bx-modal-close`,3,`click`],[`name`,`x`]],template:function(e,t){if(e&1&&(A$1(0,`div`,0),eS(1),te$1(2,Ln,4,2,`div`,1),te$1(3,Vn,2,0,`button`,2),P$1()),e&2){k();let a=JA(t.header());k(),ne$1(a?2:-1),k(),ne$1(t.showCloseButton()?3:-1)}},dependencies:[on,wm],styles:[`
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
}`]})};var _e=class{layout;breakpoints;animate;hasBackdrop;closeDelay;showCloseButton;mobileConfig;contentWrapper;wrapperClasses;wrapperStyles;overrideFullHeight;constructor(n){this.layout=n?.layout??`center`,this.breakpoints=n?.breakpoints,this.animate=n?.animate??!0,this.hasBackdrop=n?.hasBackdrop??!0,this.closeDelay=n?.closeDelay,this.showCloseButton=n?.showCloseButton??!0,this.mobileConfig=n?.mobileConfig??{},this.contentWrapper=n?.contentWrapper??!0,this.wrapperClasses=n?.wrapperClasses??``,this.wrapperStyles=n?.wrapperStyles??``,this.overrideFullHeight=n?.overrideFullHeight??!1}};var Z=class{open;afterClose;closeGuard;closeGuardOnlyOnCancel;disableClose;disableCloseOnBackdropClick;disableCloseOnNavigation;data;style;header;contentClasses;contentStyles;id;constructor(n){this.open=n?.open??!0,this.afterClose=n?.afterClose,this.closeGuard=n?.closeGuard,this.closeGuardOnlyOnCancel=n?.closeGuardOnlyOnCancel??!0,this.disableClose=n?.disableClose??!1,this.disableCloseOnBackdropClick=n?.disableCloseOnBackdropClick??!1,this.disableCloseOnNavigation=n?.disableCloseOnNavigation??!1,this.data=n?.data??null,this.style=new _e(n?.style),this.header=n?.header,this.contentClasses=n?.contentClasses??``,this.contentStyles=n?.contentStyles??``,this.id=n?.id}};var A=class{constructor(n,e,t){this.componentType=e;this.modalService=t;this.configuration=D(n),this.config=this.configuration.asReadonly()}componentType;modalService;configuration;modalState=new Ut(`opening`);backdropClickSubject=new Ie;afterCloseSubject=new Ie;subscriptions=new Ee;config;contentRef;containerRef;closeTimeout;closeRender;get componentRef(){return this.contentRef}get modalContainerRef(){return this.containerRef}get modalContainerElement(){return this.containerRef?.location.nativeElement}setNestingDepth(n){this.containerRef?.instance.nestingDepth.set(n)}patch(n){this.modalState.value===`closing`||this.modalState.value===`closed`||this.configuration.update(e=>new Z(s(r({},e),{header:n.header===null?void 0:n.header===void 0?e.header:this.patchHeader(e.header,n.header),disableClose:n.disableClose??e.disableClose,disableCloseOnBackdropClick:n.disableCloseOnBackdropClick??e.disableCloseOnBackdropClick,disableCloseOnNavigation:n.disableCloseOnNavigation??e.disableCloseOnNavigation,closeGuardOnlyOnCancel:n.closeGuardOnlyOnCancel??e.closeGuardOnlyOnCancel,contentClasses:n.contentClasses===void 0?e.contentClasses:n.contentClasses??``,contentStyles:n.contentStyles===void 0?e.contentStyles:n.contentStyles??``,style:s(r({},e.style),{showCloseButton:n.style?.showCloseButton??e.style.showCloseButton,wrapperClasses:n.style?.wrapperClasses===void 0?e.style.wrapperClasses:n.style.wrapperClasses??``,wrapperStyles:n.style?.wrapperStyles===void 0?e.style.wrapperStyles:n.style.wrapperStyles??``})})))}backdropClick(){return this.backdropClickSubject.asObservable()}modalState$(){return this.modalState.asObservable()}afterClosed(){return this.afterCloseSubject.asObservable()}attachContainer(n){this.containerRef=n,n.instance.closeFunction=e=>this.handleClose(e),this.subscriptions.add(n.instance.backdropClick.subscribe(e=>this.backdropClickSubject.next(e))),n.onDestroy(()=>this.finishClose({state:`cancel`,data:void 0}))}attachContent(n){this.contentRef=n,this.containerRef&&(this.containerRef.instance.componentRef=n)}open(){this.modalState.value===`opening`&&this.modalState.next(`open`)}close(n=`cancel`,e=void 0,t=!1){this.modalState.value===`closing`||this.modalState.value===`closed`||this.containerRef?.instance.close(n,e,!1,t)}patchHeader(n,e){let t=e.icon;return{text:e.text===void 0?n?.text??``:e.text??``,loading:e.loading??n?.loading,loadingLabel:e.loadingLabel??n?.loadingLabel,icon:t===null?void 0:t===void 0?n?.icon:{name:t.name??n?.icon?.name??`info`,size:t.size??n?.icon?.size,color:t.color??n?.icon?.color,bgColor:t.bgColor??n?.icon?.bgColor,strokeWidth:t.strokeWidth??n?.icon?.strokeWidth}}}handleClose(n){if(this.modalState.value===`closing`||this.modalState.value===`closed`)return;this.modalState.next(`closing`);let e=this.containerRef?.instance.isAnimated()?this.containerRef.instance.animationDuration:0,t=this.containerRef;if(e&&t?.instance.effectiveLayout()===`center`){this.closeRender=ze({read:()=>{let f=t.location.nativeElement.querySelectorAll(`.centered-modal-frame, .centered-modal-content-wrapper, .modal-backdrop`),u=Array.from(f).flatMap(y=>y.getAnimations());Promise.allSettled(u.map(y=>y.finished)).then(()=>this.finishClose(n))}},{injector:t.injector});return}this.closeTimeout=setTimeout(()=>this.finishClose(n),e)}finishClose(n){if(this.modalState.value===`closed`)return;clearTimeout(this.closeTimeout),this.closeRender?.destroy(),this.subscriptions.unsubscribe(),this.modalState.next(`closed`);let e=this.containerRef;this.containerRef=void 0,this.contentRef=void 0;try{this.config().afterClose?.()}finally{e&&!e.hostView.destroyed&&e.destroy(),this.modalService.unregister(this),this.afterCloseSubject.next(n),this.afterCloseSubject.complete(),this.backdropClickSubject.complete(),this.modalState.complete()}}};var ee=class o{i18n=p(Se,{optional:!0});resolvedLabel=g(()=>be(this.label(),this.i18n));label=h(`Close dialog`);tabIndex=h(0);isAnimated=h(!1);isOpen=h(!1);click=bt$1();static ɵfac=function(e){return new(e||o)};static ɵcmp=$({type:o,selectors:[[`bx-modal-backdrop`]],inputs:{label:[1,`label`],tabIndex:[1,`tabIndex`],isAnimated:[1,`isAnimated`],isOpen:[1,`isOpen`]},outputs:{click:`click`},decls:1,vars:6,consts:[[`type`,`button`,1,`modal-backdrop`,3,`click`,`tabIndex`]],template:function(e,t){e&1&&(lt$1(0,`button`,0),OC(`click`,function(f){return t.click.emit(f)}),ct$1()),e&2&&(pe(`backdrop-fade-in`,t.isAnimated()&&t.isOpen())(`backdrop-fade-out`,t.isAnimated()&&!t.isOpen()),da(`tabIndex`,t.tabIndex()),W(`aria-label`,t.resolvedLabel()))},styles:[`
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
}`]})};var zn=[`verticalSwipeTarget`];var Fn=[`elementRef`];var Gn=[`*`];var Hn=o=>({"opened-bottom-sheet-modal":o});function qn(o,n){if(o&1&&Oe(0,`bx-modal-banner`,7),o&2){let e=C();B$1(`header`,e.config()?.header)(`showCloseButton`,!1)}}function Un(o,n){o&1&&Kt(0)}function Yn(o,n){if(o&1&&(A$1(0,`div`,8),ep(1,Un,1,0,`ng-container`,11),P$1()),o&2){let e=C();k(),B$1(`ngTemplateOutlet`,e.headerTemplate())}}function Qn(o,n){o&1&&Kt(0)}function Kn(o,n){if(o&1&&(A$1(0,`div`,10),ep(1,Qn,1,0,`ng-container`,11),P$1()),o&2){let e=C();k(),B$1(`ngTemplateOutlet`,e.footerTemplate())}}var B=class o{hasInteracted=D(!1);isSwipingVertically=D(!1);modalTransform=g(()=>this.isSwipingVerticallyFinished()?`translateY(100%)`:`translateY(${Math.max(0,this.currentTranslateY())}px)`);verticalSwipeTarget=nn(`verticalSwipeTarget`);elementRef=nn(`elementRef`);currentTranslateY=D(0);isSwipingVerticallyFinished=D(!1);id=h.required();headerTemplate=h.required();footerTemplate=h.required();config=h.required();isOpen=h.required();isAnimated=h.required();hasBanner=h.required();animationDuration=h.required();close=bt$1();cleanupListeners=null;cancelSwipe;returnMotion;suppressClick=!1;constructor(){ze(()=>this.startVerticalSwipeDetection()),xe(()=>{(this.config()?.disableClose||!this.isOpen()||this.isSwipingVerticallyFinished())&&this.cancelSwipe?.(),this.isAnimated()||this.returnMotion?.retarget([0],!0)})}ngOnDestroy(){this.cleanupListeners?.(),this.returnMotion?.destroy()}onDismissClick(n){if(this.suppressClick&&n.detail>0){this.suppressClick=!1,n.preventDefault();return}this.config()?.disableClose||this.close.emit(`cancel`)}startVerticalSwipeDetection(){let n=this.verticalSwipeTarget()?.nativeElement,e=n?.ownerDocument;if(!n||!e)return;let t,a=0,f=0,u=!1,y,C=(b,ue)=>{if(t===void 0)return;let Ae=t,Oe=Math.max(0,this.currentTranslateY()),Pe=b?0:y?.velocity(ue)??0,Le=this.elementRef()?.nativeElement.offsetHeight??0,be=this.config()?.style?.mobileConfig?.downSwipeLimit,Rn=Le/(be&&Number.isFinite(be)&&be>0?be:3),In=u&&!b&&!this.config()?.disableClose&&Fx(Oe,Pe,Le/2)>Rn;t=void 0,this.isSwipingVertically.set(!1),this.suppressClick=u,n.hasPointerCapture(Ae)&&n.releasePointerCapture(Ae),this.returnMotion?.destroy(),this.returnMotion=fs([Oe],([Bn])=>this.currentTranslateY.set(Math.max(0,Bn)),Dr.snappy),this.returnMotion.track([Oe],[Pe]),this.returnMotion.retarget([0],!this.isAnimated()),In&&this.close.emit(`cancel`)},v=()=>C(!0,0),me=b=>{!b.isPrimary||b.button!==0||t!==void 0||this.config()?.disableClose||!this.isOpen()||(this.returnMotion?.destroy(),this.returnMotion=void 0,t=b.pointerId,a=b.clientY,f=this.currentTranslateY(),u=!1,y=new qc(b.clientY,b.timeStamp),this.suppressClick=!1,this.hasInteracted.set(!0),this.isSwipingVertically.set(!0),n.setPointerCapture(b.pointerId))},ke=b=>{if(b.pointerId!==t)return;if(this.config()?.disableClose){v();return}let ue=b.clientY-a;u||=Math.abs(ue)>6,y?.update(b.clientY,b.timeStamp),b.cancelable&&b.preventDefault(),this.currentTranslateY.set(Math.max(0,f+ue))},Ie=b=>{b.pointerId===t&&(ke(b),C(!1,b.timeStamp))},pe=b=>{b.pointerId===t&&v()},Be=()=>{e.hidden&&v()},Ee=b=>{b.key!==`Escape`||t===void 0||(b.preventDefault(),b.stopPropagation(),v())};this.cancelSwipe=v,n.addEventListener(`pointerdown`,me),n.addEventListener(`pointermove`,ke,{passive:!1}),n.addEventListener(`pointerup`,Ie),n.addEventListener(`pointercancel`,pe),n.addEventListener(`lostpointercapture`,pe),e.addEventListener(`keydown`,Ee,!0),e.addEventListener(`visibilitychange`,Be),e.defaultView?.addEventListener(`blur`,v),e.defaultView?.addEventListener(`resize`,v),this.cleanupListeners=()=>{v(),this.cancelSwipe=void 0,n.removeEventListener(`pointerdown`,me),n.removeEventListener(`pointermove`,ke),n.removeEventListener(`pointerup`,Ie),n.removeEventListener(`pointercancel`,pe),n.removeEventListener(`lostpointercapture`,pe),e.removeEventListener(`keydown`,Ee,!0),e.removeEventListener(`visibilitychange`,Be),e.defaultView?.removeEventListener(`blur`,v),e.defaultView?.removeEventListener(`resize`,v)}}static ɵfac=function(e){return new(e||o)};static ɵcmp=$({type:o,selectors:[[`bx-modal-bottom-sheet`]],viewQuery:function(e,t){e&1&&yn(t.verticalSwipeTarget,zn,5)(t.elementRef,Fn,5),e&2&&St$1(2)},inputs:{id:[1,`id`],headerTemplate:[1,`headerTemplate`],footerTemplate:[1,`footerTemplate`],config:[1,`config`],isOpen:[1,`isOpen`],isAnimated:[1,`isAnimated`],hasBanner:[1,`hasBanner`],animationDuration:[1,`animationDuration`]},outputs:{close:`close`},ngContentSelectors:Gn,decls:12,vars:22,consts:[[`elementRef`,``],[`verticalSwipeTarget`,``],[`bxSurface`,``,`data-bx-light-scope`,``,1,`bottom-sheet-modal-style`,3,`id`,`ngClass`],[`type`,`button`,`aria-label`,`Close dialog`,1,`touch-hitbox`,`bottom-sheet-modal-top-bar`,3,`click`,`disabled`],[1,`swipe-line`],[1,`bottom-sheet-modal-inner-content-container`],[1,`bottom-sheet-modal-top-group`],[3,`header`,`showCloseButton`],[1,`bottom-sheet-modal-header`],[1,`bottom-sheet-modal-main-content-container`],[1,`bottom-sheet-modal-footer`],[4,`ngTemplateOutlet`]],template:function(e,t){e&1&&(Te(),A$1(0,`div`,2,0)(2,`button`,3,1),ue(`click`,function(f){return t.onDismissClick(f)}),Oe(4,`div`,4),P$1(),A$1(5,`div`,5)(6,`div`,6),te$1(7,qn,1,2,`bx-modal-banner`,7),te$1(8,Yn,2,1,`div`,8),A$1(9,`div`,9),fe(10),P$1()(),te$1(11,Kn,2,1,`div`,10),P$1()()),e&2&&(OA(t.config()?.style?.wrapperStyles??``),LA(t.config()?.style?.wrapperClasses??``),Ce(`max-height`,t.config()?.style?.mobileConfig?.customHeight??``)(`transform`,t.modalTransform())(`--%NS%anim-duration`,t.isAnimated()?t.animationDuration():0,`ms`),pe(`is-motion-enabled`,t.isAnimated()&&t.isSwipingVerticallyFinished()),B$1(`id`,t.id()??``)(`ngClass`,nc(20,Hn,t.isAnimated()&&!t.hasInteracted())),k(2),B$1(`disabled`,t.config()?.disableClose===!0),k(5),ne$1(t.hasBanner()?7:-1),k(),ne$1(t.headerTemplate()?8:-1),k(),Ce(`animation-duration`,t.isAnimated()?t.animationDuration()+`ms`:`0ms`),k(2),ne$1(t.footerTemplate()?11:-1))},dependencies:[zt,rP,Ao,G],styles:[`
.bottom-sheet-modal-style[_ngcontent-%COMP%] {
  position: fixed;
  z-index: 400;
  min-height: 60vh;
  min-height: 60dvh;
  max-height: 98vh;
  max-height: 98dvh;
  width: 100vw;
  width: 100dvw;
  min-width: 100vw;
  max-width: 100dvw;
  bottom: 0;
  left: 0;
  margin: 0 auto;
  border-radius: var(--%NS%bx-rounded-3xl, 1.875rem) var(--%NS%bx-rounded-3xl, 1.875rem) 0 0;
  background-color: var(--%NS%bx-modal-bg, var(--%NS%bx-bg-surface));
  color: var(--%NS%bx-modal-text, var(--%NS%bx-text-primary));
  display: flex;
  flex-direction: column;
}
.touch-hitbox[_ngcontent-%COMP%] {
  touch-action: pan-x pinch-zoom;
  -webkit-user-select: none;
  user-select: none;
  padding: 0;
  border: 0;
  background: transparent;
  color: inherit;
  font: inherit;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 3.5rem;
  justify-content: center;
  align-items: center;
  padding-bottom: var(--%NS%bx-space-2, 0.5rem);
  margin-top: calc(var(--%NS%bx-space-6, 1.5rem) * -1);
  flex-shrink: 0;
}
.swipe-line[_ngcontent-%COMP%] {
  width: 7rem;
  height: 0.33rem;
  background-color: var(--%NS%bx-modal-mobile-swipe-line-color, var(--%NS%bx-border-default));
  border-radius: var(--%NS%bx-rounded-pill, 9999px);
  margin-top: var(--%NS%bx-space-6, 1.5rem);
  opacity: 0.215;
  cursor: pointer;
}
.bottom-sheet-modal-inner-content-container[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
  padding: 0 var(--%NS%bx-space-5, 1.25rem) var(--%NS%bx-space-6, 1.5rem);
  gap: var(--%NS%bx-space-6, 1.5rem);
  box-sizing: border-box;
  overflow: hidden;
}
.bottom-sheet-modal-top-group[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: var(--%NS%bx-space-4, 1rem);
  flex-grow: 1;
  min-height: 0;
}
.bottom-sheet-modal-main-content-container[_ngcontent-%COMP%] {
  flex-grow: 1;
  overflow-y: auto;
  min-height: 0;
  display: flex;
  flex-direction: column;
  padding: 0;
}
.opened-bottom-sheet-modal[_ngcontent-%COMP%] {
  animation: _ngcontent-%COMP%_opened-bottom-sheet-modal-anim var(--%NS%anim-duration, 175ms) linear(0, 0.18 12%, 0.58 32%, 0.87 56%, 0.98 78%, 1);
}
.bottom-sheet-modal-top-bar[_ngcontent-%COMP%] {
  display: flex;
  justify-content: center;
}
.bottom-sheet-modal-header[_ngcontent-%COMP%] {
  flex-shrink: 0;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  padding-top: var(--%NS%bx-space-2, 0.5rem);
  gap: var(--%NS%bx-space-2, 0.5rem);
}
.bottom-sheet-modal-footer[_ngcontent-%COMP%] {
  flex-shrink: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: var(--%NS%bx-space-2, 0.5rem);
}
@keyframes _ngcontent-%COMP%_opened-bottom-sheet-modal-anim {
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
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
  box-shadow: var(--%NS%bx-glass-shadow), 0 0 0 100vmax var(--%NS%bx-modal-dimming-background, transparent);
}
.bottom-sheet-modal-style.is-motion-enabled[_ngcontent-%COMP%] {
  transition: transform var(--%NS%anim-duration, 175ms) linear(0, 0.18 12%, 0.58 32%, 0.87 56%, 0.98 78%, 1);
}`]})};var Xn=[`*`];function $n(o,n){if(o&1){let e=tn();A$1(0,`bx-modal-backdrop`,13),ue(`click`,function(a){st$1(e);let f=C(2);return at$1(f.onBackdropClick.emit(a))}),P$1()}if(o&2){let e=C(2);B$1(`isAnimated`,e.isAnimated())(`isOpen`,e.isOpen())}}function Jn(o,n){if(o&1){let e=tn();A$1(0,`bx-modal-banner`,14),ue(`close`,function(){st$1(e);let a=C(2);return at$1(a.close.emit(`cancel`))}),P$1()}if(o&2){let e=C(2);B$1(`header`,e.config()?.header)(`showCloseButton`,e.config()?.disableClose!==!0&&e.config()?.style?.showCloseButton!==!1)}}function Zn(o,n){o&1&&Kt(0)}function et(o,n){if(o&1){let e=tn();A$1(0,`button`,17),ue(`click`,function(){st$1(e);let a=C(3);return at$1(a.close.emit(`cancel`))}),Oe(1,`bx-icon`,18),P$1()}}function nt(o,n){if(o&1&&(A$1(0,`div`,9),ep(1,Zn,1,0,`ng-container`,15),te$1(2,et,2,0,`button`,16),P$1()),o&2){let e=C(2);k(),B$1(`ngTemplateOutlet`,e.headerTemplate()),k(),ne$1(!e.hasBanner()&&e.config()?.disableClose!==!0&&e.config()?.style?.showCloseButton!==!1?2:-1)}}function tt(o,n){o&1&&Kt(0)}function ot(o,n){if(o&1&&(A$1(0,`div`,12),ep(1,tt,1,0,`ng-container`,15),P$1()),o&2){let e=C(2);k(),B$1(`ngTemplateOutlet`,e.footerTemplate())}}function at(o,n){if(o&1&&(A$1(0,`div`,1),te$1(1,$n,1,2,`bx-modal-backdrop`,3),A$1(2,`div`,4)(3,`div`,5)(4,`div`,6)(5,`div`)(6,`div`,7),te$1(7,Jn,1,2,`bx-modal-banner`,8),te$1(8,nt,3,2,`div`,9),A$1(9,`div`,10),Kt(10,11),P$1()(),te$1(11,ot,2,1,`div`,12),P$1()()()()()),o&2){let e=C(),t=Mt$1(3);B$1(`id`,e.id()??``),k(),ne$1(e.config()?.style?.hasBackdrop?1:-1),k(2),pe(`centered-modal-animate-in`,e.modalClasses()[`centered-modal-animate-in`])(`centered-modal-animate-out`,e.modalClasses()[`centered-modal-animate-out`]),k(),B$1(`ngClass`,e.modalClasses()),k(),OA(e.config()?.style?.wrapperStyles??``),LA(`centered-modal-inner-content-container `+(e.config()?.style?.wrapperClasses??``)),k(2),ne$1(e.hasBanner()?7:-1),k(),ne$1(e.headerTemplate()?8:-1),k(2),B$1(`ngTemplateOutlet`,t),k(),ne$1(e.footerTemplate()?11:-1)}}function it(o,n){if(o&1){let e=tn();A$1(0,`bx-modal-bottom-sheet`,19),ue(`close`,function(){st$1(e);let a=C();return at$1(a.close.emit(`cancel`))}),Kt(1,11),P$1()}if(o&2){let e=C(),t=Mt$1(3);B$1(`headerTemplate`,e.headerTemplate())(`footerTemplate`,e.footerTemplate())(`config`,e.config())(`id`,e.id())(`isOpen`,e.isOpen())(`isAnimated`,e.isAnimated())(`hasBanner`,e.hasBanner())(`animationDuration`,e.animationDuration()),k(),B$1(`ngTemplateOutlet`,t)}}function rt(o,n){o&1&&fe(0)}var ne=class o{modalClasses=g(()=>({"centered-modal-content-wrapper":!0,"centered-modal-default-style":this.hasDefaultContentWrapperClass()||this.hasBanner(),"centered-modal-animate-in":this.isAnimated()&&this.isOpen(),"centered-modal-animate-out":this.isAnimated()&&!this.isOpen()}));headerTemplate=h.required();footerTemplate=h.required();config=h.required();id=h.required();isOpen=h.required();isAnimated=h.required();isBottomSheetModalActive=h.required();animationDuration=h.required();hasDefaultContentWrapperClass=h.required();hasBanner=h.required();close=bt$1();onBackdropClick=bt$1();bottomSheet=cp(B);static ɵfac=function(e){return new(e||o)};static ɵcmp=$({type:o,selectors:[[`bx-modal-centered`]],viewQuery:function(e,t){e&1&&yn(t.bottomSheet,B,5),e&2&&St$1()},inputs:{headerTemplate:[1,`headerTemplate`],footerTemplate:[1,`footerTemplate`],config:[1,`config`],id:[1,`id`],isOpen:[1,`isOpen`],isAnimated:[1,`isAnimated`],isBottomSheetModalActive:[1,`isBottomSheetModalActive`],animationDuration:[1,`animationDuration`],hasDefaultContentWrapperClass:[1,`hasDefaultContentWrapperClass`],hasBanner:[1,`hasBanner`]},outputs:{close:`close`,onBackdropClick:`onBackdropClick`},ngContentSelectors:Xn,decls:4,vars:1,consts:[[`contentTemplate`,``],[1,`modal-overlay`,3,`id`],[3,`headerTemplate`,`footerTemplate`,`config`,`id`,`isOpen`,`isAnimated`,`hasBanner`,`animationDuration`],[3,`isAnimated`,`isOpen`],[1,`modal-overlay-wrapper`],[1,`centered-modal-frame`],[`bxSurface`,``,`data-bx-light-scope`,``,3,`ngClass`],[1,`centered-modal-top-group`],[3,`header`,`showCloseButton`],[1,`centered-modal-header`],[1,`centered-modal-main-content-container`],[3,`ngTemplateOutlet`],[1,`centered-modal-footer`],[3,`click`,`isAnimated`,`isOpen`],[3,`close`,`header`,`showCloseButton`],[4,`ngTemplateOutlet`],[`type`,`button`,`aria-label`,`Close dialog`,1,`bx-modal-close`],[`type`,`button`,`aria-label`,`Close dialog`,1,`bx-modal-close`,3,`click`],[`name`,`x`],[3,`close`,`headerTemplate`,`footerTemplate`,`config`,`id`,`isOpen`,`isAnimated`,`hasBanner`,`animationDuration`]],template:function(e,t){e&1&&(Te(),te$1(0,at,12,15,`div`,1)(1,it,2,9,`bx-modal-bottom-sheet`,2),ep(2,rt,1,0,`ng-template`,null,0,qr)),e&2&&ne$1(t.isBottomSheetModalActive()?1:0)},dependencies:[zt,Ao,rP,B,G,ee,on],styles:[`
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
}`]})};var lt=[`*`];function dt(o,n){if(o&1){let e=tn();A$1(0,`bx-modal-banner`,10),ue(`close`,function(){st$1(e);let a=C(2);return at$1(a.close.emit(`cancel`))}),P$1()}if(o&2){let e=C(2);B$1(`header`,e.config()?.header)(`showCloseButton`,e.config()?.disableClose!==!0&&e.config()?.style?.showCloseButton!==!1)}}function st(o,n){o&1&&Kt(0)}function ct(o,n){if(o&1){let e=tn();A$1(0,`button`,13),ue(`click`,function(){st$1(e);let a=C(3);return at$1(a.close.emit(`cancel`))}),Oe(1,`bx-icon`,14),P$1()}}function mt(o,n){if(o&1&&(A$1(0,`div`,6),ep(1,st,1,0,`ng-container`,11),te$1(2,ct,2,0,`button`,12),P$1()),o&2){let e=C(2);k(),B$1(`ngTemplateOutlet`,e.headerTemplate()),k(),ne$1(!e.hasBanner()&&e.config()?.disableClose!==!0&&e.config()?.style?.showCloseButton!==!1?2:-1)}}function pt(o,n){o&1&&Kt(0)}function ut(o,n){if(o&1&&(A$1(0,`div`,9),ep(1,pt,1,0,`ng-container`,11),P$1()),o&2){let e=C(2);k(),B$1(`ngTemplateOutlet`,e.footerTemplate())}}function bt(o,n){if(o&1&&(A$1(0,`div`,3)(1,`div`,4),te$1(2,dt,1,2,`bx-modal-banner`,5),te$1(3,mt,3,2,`div`,6),A$1(4,`div`,7),Kt(5,8),P$1()(),te$1(6,ut,2,1,`div`,9),P$1()),o&2){let e=C(),t=Mt$1(3);Ce(`--%NS%anim-duration`,e.animationDuration(),`ms`),B$1(`ngClass`,e.modalClasses())(`id`,e.id()??``),k(),OA(e.config()&&e.config()?.style?.wrapperStyles?e.config()?.style?.wrapperStyles:``),LA(e.config()&&e.config()?.style?.wrapperClasses?e.config()?.style?.wrapperClasses:``),k(),ne$1(e.hasBanner()?2:-1),k(),ne$1(e.headerTemplate()?3:-1),k(2),B$1(`ngTemplateOutlet`,t),k(),ne$1(e.footerTemplate()?6:-1)}}function ft(o,n){if(o&1){let e=tn();A$1(0,`bx-modal-bottom-sheet`,15),ue(`close`,function(){st$1(e);let a=C();return at$1(a.close.emit(`cancel`))}),Kt(1,8),P$1()}if(o&2){let e=C(),t=Mt$1(3);B$1(`headerTemplate`,e.headerTemplate())(`footerTemplate`,e.footerTemplate())(`config`,e.config())(`id`,e.id())(`isOpen`,e.isOpen())(`isAnimated`,e.isAnimated())(`hasBanner`,e.hasBanner())(`animationDuration`,e.animationDuration()),k(),B$1(`ngTemplateOutlet`,t)}}function gt(o,n){o&1&&fe(0)}var te=class o{renderOpenClass=D(!1);modalClasses=g(()=>{let n=this.layout()===`left`,e=this.layout()===`right`,t=this.isAnimated(),a=this.renderOpenClass();return{"side-modal-content-wrapper":!0,"side-modal-default-style":this.hasDefaultContentWrapperClass()||this.hasBanner(),"with-footer":this.footerTemplate()!==null,left:n,right:e,"side-modal-animate-in":t?a:!0,"side-modal-animate-out":t?!a:!1}});layout=h.required();headerTemplate=h.required();footerTemplate=h.required();config=h.required();id=h.required();isOpen=h.required();isAnimated=h.required();isBottomSheetModalActive=h.required();animationDuration=h.required();hasDefaultContentWrapperClass=h.required();hasBanner=h.required();close=bt$1();bottomSheet=cp(B);constructor(){let n=p(H).nativeElement,e=!1;Fn$1(t=>{let a=this.isOpen(),f=this.isAnimated(),u=n.ownerDocument.defaultView,y=a&&!e;if(e=a,this.renderOpenClass.set(a&&(!f||!y)),!a||!f||!y||!u)return;let C=u.requestAnimationFrame(()=>{C=u.requestAnimationFrame(()=>this.renderOpenClass.set(!0))});t(()=>u.cancelAnimationFrame(C))})}static ɵfac=function(e){return new(e||o)};static ɵcmp=$({type:o,selectors:[[`bx-modal-side`]],viewQuery:function(e,t){e&1&&yn(t.bottomSheet,B,5),e&2&&St$1()},inputs:{layout:[1,`layout`],headerTemplate:[1,`headerTemplate`],footerTemplate:[1,`footerTemplate`],config:[1,`config`],id:[1,`id`],isOpen:[1,`isOpen`],isAnimated:[1,`isAnimated`],isBottomSheetModalActive:[1,`isBottomSheetModalActive`],animationDuration:[1,`animationDuration`],hasDefaultContentWrapperClass:[1,`hasDefaultContentWrapperClass`],hasBanner:[1,`hasBanner`]},outputs:{close:`close`},ngContentSelectors:lt,decls:4,vars:1,consts:[[`contentTemplate`,``],[`bxSurface`,``,`data-bx-light-scope`,``,3,`ngClass`,`id`,`--%NS%anim-duration`],[3,`headerTemplate`,`footerTemplate`,`config`,`id`,`isOpen`,`isAnimated`,`hasBanner`,`animationDuration`],[`bxSurface`,``,`data-bx-light-scope`,``,3,`ngClass`,`id`],[1,`side-modal-inner-content-container`],[3,`header`,`showCloseButton`],[1,`side-modal-header`],[1,`side-modal-main-content-container`],[3,`ngTemplateOutlet`],[1,`side-modal-footer`],[3,`close`,`header`,`showCloseButton`],[4,`ngTemplateOutlet`],[`type`,`button`,`aria-label`,`Close dialog`,1,`bx-modal-close`],[`type`,`button`,`aria-label`,`Close dialog`,1,`bx-modal-close`,3,`click`],[`name`,`x`],[3,`close`,`headerTemplate`,`footerTemplate`,`config`,`id`,`isOpen`,`isAnimated`,`hasBanner`,`animationDuration`]],template:function(e,t){e&1&&(Te(),te$1(0,bt,7,12,`div`,1)(1,ft,2,9,`bx-modal-bottom-sheet`,2),ep(2,gt,1,0,`ng-template`,null,0,qr)),e&2&&ne$1(t.isBottomSheetModalActive()?1:0)},dependencies:[zt,Ao,B,rP,G,on],styles:[`
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
}`]})};var oe=class o{layout=D(`center`);animate=D(!0);hasBackdrop=D(!0);showCloseButton=D(!0);contentWrapper=D(!0);overrideFullHeight=D(!1);disableClose=D(!1);disableCloseOnBackdropClick=D(!1);disableCloseOnNavigation=D(!1);closeGuardOnlyOnCancel=D(!0);nestedOpacityFloors=D([.9,1]);update(n){n.animate!==void 0&&this.animate.set(n.animate),n.hasBackdrop!==void 0&&this.hasBackdrop.set(n.hasBackdrop),n.disableCloseOnBackdropClick!==void 0&&this.disableCloseOnBackdropClick.set(n.disableCloseOnBackdropClick)}static ɵfac=function(e){return new(e||o)};static ɵprov=ee$1({token:o,factory:o.ɵfac,providedIn:`root`})};var Ct=[`modalContainer`];var vt=[`contentTemplate`];var xt=[`dynamicContainer`];function St(o,n){if(o&1){let e=tn();A$1(0,`bx-modal-backdrop`,6),ue(`click`,function(a){st$1(e);let f=C();return at$1(f.onBackdropClick(a))}),P$1()}if(o&2){let e=C();B$1(`isAnimated`,e.isAnimated())(`isOpen`,e.isOpen())}}function Mt(o,n){if(o&1){let e=tn();A$1(0,`bx-modal-side`,7),ue(`close`,function(a){st$1(e);let f=C();return at$1(f.close(a,void 0,!0))}),Kt(1,8),P$1()}if(o&2){let e=C(),t=Mt$1(6);B$1(`layout`,e.effectiveLayout())(`headerTemplate`,e.headerTemplate())(`footerTemplate`,e.footerTemplate())(`config`,e.config())(`id`,e.id())(`isOpen`,e.isOpen())(`isAnimated`,e.isAnimated())(`isBottomSheetModalActive`,e.isBottomSheetModalActive())(`animationDuration`,e.animationDuration)(`hasDefaultContentWrapperClass`,e.hasDefaultContentWrapperClass())(`hasBanner`,e.hasBanner()),k(),B$1(`ngTemplateOutlet`,t)}}function _t(o,n){if(o&1){let e=tn();A$1(0,`bx-modal-centered`,9),ue(`close`,function(a){st$1(e);let f=C();return at$1(f.close(a,void 0,!0))})(`onBackdropClick`,function(a){st$1(e);let f=C();return at$1(f.onBackdropClick(a))}),Kt(1,8),P$1()}if(o&2){let e=C(),t=Mt$1(6);B$1(`headerTemplate`,e.headerTemplate())(`footerTemplate`,e.footerTemplate())(`config`,e.config())(`id`,e.id())(`isOpen`,e.isOpen())(`isAnimated`,e.isAnimated())(`isBottomSheetModalActive`,e.isBottomSheetModalActive())(`animationDuration`,e.animationDuration)(`hasDefaultContentWrapperClass`,e.hasDefaultContentWrapperClass())(`hasBanner`,e.hasBanner()),k(),B$1(`ngTemplateOutlet`,t)}}function Nt(o,n){if(o&1&&(A$1(0,`div`,10),Kt(1,null,2),P$1()),o&2){let e=C();OA(e.config().contentStyles),B$1(`ngClass`,e.config().contentClasses)}}var P=class o{cdkTrapFocus=p(GF,{self:!0});modalService=p(Ne);modalGlobalSettingsService=p(oe);scrollLockService=p(k_);windowDimensionsService=p(Ia);destroyRef=p(Z$1);document=p(le);bxA11yService=p(Pe);modalRef=p(A);sideModalComponents=cp(te);centeredModalComponents=cp(ne);headerTemplate=D(null);footerTemplate=D(null);isBottomSheetModalActive=D(!1);windowDimensions=this.windowDimensionsService.dimensions;id=g(()=>this.config().id??this.scrollLockId);hasBanner=g(()=>{let n=this.config(),e=n.header,t=e?.text;return!!(t&&(io(t)?!!t.key:t.length>0)||e?.icon||e?.loading||!n.disableClose&&n.style.showCloseButton!==!1&&!this.headerTemplate())});hasDefaultContentWrapperClass=g(()=>this.config().style.contentWrapper!==!1);materialOpacity=g(()=>{let n=this.nestingDepth(),e=this.modalGlobalSettingsService.nestedOpacityFloors();if(n<=0||e.length===0)return .52;let t=e[Math.min(n-1,e.length-1)],a=n===1?.9:1;return Number.isFinite(t)?Math.max(.52,Math.min(1,t)):a});modalContainer=nn(`modalContainer`);contentTemplate=nn(`contentTemplate`);dynamicContainer=nn(`dynamicContainer`,{read:Bt});config=this.modalRef.config;animationDuration=175;isOpen=D(!0);effectiveLayout=D(`center`);isCentered=D(!1);isSide=D(!1);nestingDepth=D(0);isAnimated=g(()=>!this.bxA11yService.isReducedMotion()&&this.config().style.animate);componentRef;closeFunction;backdropClickSubject=new Ie;backdropClick=this.backdropClickSubject.asObservable();isCloseGuardPending=!1;scrollLockId=oo();_sortedBreakpoints=[];_currentVcr=null;constructor(){this.cdkTrapFocus.autoCapture=!0,this.initKeyboardSubscription(),xe(()=>{let n=this.windowDimensions().width;this.handleLayout(n)}),xe(()=>{let n=this.dynamicContainer();n&&this.componentRef&&(this._currentVcr=n,n.indexOf(this.componentRef.hostView)===-1&&n.insert(this.componentRef.hostView))})}ngOnInit(){this.initBreakpointCache(),this.scrollLockService.disableScroll(this.scrollLockId,{animationDuration:this.animationDuration,handleTouchInput:!0,mobileOnlyTouchPrevention:!0})}ngAfterViewInit(){let n=this.windowDimensionsService.dimensions().width;this.handleLayout(n)}ngOnDestroy(){this.componentRef&&!this.componentRef.hostView.destroyed&&this.componentRef.destroy(),this.dynamicContainer()?.clear(),this.scrollLockService.enableScroll(this.scrollLockId),this.closeFunction=void 0,this.backdropClickSubject.complete()}setHeaderTemplate(n){this.headerTemplate.set(n)}setFooterTemplate(n){this.footerTemplate.set(n)}close(n=`cancel`,e=void 0,t=!1,a=!1){if(!this.isOpen()||this.isCloseGuardPending&&!a)return;if(a){this.handleClose(n,e);return}if(this.config().disableClose===!0&&t){this.resetBottomSheetModalLayout();return}let f=this.config().closeGuardOnlyOnCancel!==!0||n!==`confirm`,u=this.config().closeGuard;if(f&&u){this.isCloseGuardPending=!0;try{let y=u.canClose(this.modalService),C=y instanceof ge?y:y instanceof Promise?mt$1(y):ye(y);this.isBottomSheetModalActive()&&this.resetBottomSheetModalLayout(),C.pipe(vr(1),yp(this.destroyRef),Ld(()=>{this.isCloseGuardPending=!1})).subscribe(v=>{v&&(!t||!this.config().disableClose)&&this.handleClose(n,e)})}catch(y){throw this.isCloseGuardPending=!1,y}return}this.handleClose(n,e)}onBackdropClick(n){n.preventDefault(),n.stopPropagation(),this.isOpen()&&(this.backdropClickSubject.next(n),this.config().style?.hasBackdrop&&this.config().disableCloseOnBackdropClick!==!0&&this.close(`cancel`,void 0,!0))}initKeyboardSubscription(){Xa(this.document,`keydown`).pipe(Xt(n=>n.key===`Escape`&&!n.defaultPrevented),yp(this.destroyRef)).subscribe(n=>{this.modalService.isTopmost(this.modalRef)&&(n.preventDefault(),this.close(`cancel`,void 0,!0))})}initBreakpointCache(){let n=this.config().style?.breakpoints;if(n&&Object.keys(n).length>0){let e=this.windowDimensionsService.breakpoints;this._sortedBreakpoints=Object.keys(n).map(t=>({width:e[t],layout:n[t]??this.config().style.layout??`center`})).sort((t,a)=>t.width-a.width)}}async handleClose(n,e){if(!this.isOpen())return;this.isOpen.set(!1),this.setBottomSheetModalFinishedState(!0);let t={data:e,state:n};this.closeFunction&&this.closeFunction(t)}handleLayout(n){if(!this.isOpen())return;let e=this.config().style.layout;for(let C of this._sortedBreakpoints)if(n<=C.width){e=C.layout;break}let t=this.isSide(),a=e===`left`||e===`right`;if(t!==a&&this._currentVcr&&this.componentRef){let C=this._currentVcr.indexOf(this.componentRef.hostView);C!==-1&&this._currentVcr.detach(C)}this.effectiveLayout.set(e),this.isSide.set(a),this.isCentered.set(e===`center`||e===`bottom-sheet`);let u=e===`bottom-sheet`,y=this.isBottomSheetModalActive();u&&!y?this.isBottomSheetModalActive.set(!0):!u&&y&&this.isBottomSheetModalActive.set(!1)}getBottomSheetModal(){return this.sideModalComponents()[0]?.bottomSheet()[0]??this.centeredModalComponents()[0]?.bottomSheet()[0]}resetBottomSheetModalLayout(){let n=this.getBottomSheetModal();n&&n.currentTranslateY.set(0)}setBottomSheetModalFinishedState(n){let e=this.getBottomSheetModal();e&&e.isSwipingVerticallyFinished.set(n)}static ɵfac=function(e){return new(e||o)};static ɵcmp=$({type:o,selectors:[[`bx-modal`]],viewQuery:function(e,t){e&1&&yn(t.sideModalComponents,te,5)(t.centeredModalComponents,ne,5)(t.modalContainer,Ct,5)(t.contentTemplate,vt,5)(t.dynamicContainer,xt,5,Bt),e&2&&St$1(5)},hostVars:6,hostBindings:function(e,t){e&2&&(Ce(`--%NS%bx-modal-material-opacity`,t.materialOpacity()),pe(`has-backdrop`,t.config().style.hasBackdrop)(`is-nested`,t.nestingDepth()>0))},features:[QR([GF])],decls:7,vars:2,consts:[[`modalContainer`,``],[`contentTemplate`,``],[`dynamicContainer`,``],[3,`isAnimated`,`isOpen`],[3,`layout`,`headerTemplate`,`footerTemplate`,`config`,`id`,`isOpen`,`isAnimated`,`isBottomSheetModalActive`,`animationDuration`,`hasDefaultContentWrapperClass`,`hasBanner`],[3,`headerTemplate`,`footerTemplate`,`config`,`id`,`isOpen`,`isAnimated`,`isBottomSheetModalActive`,`animationDuration`,`hasDefaultContentWrapperClass`,`hasBanner`],[3,`click`,`isAnimated`,`isOpen`],[3,`close`,`layout`,`headerTemplate`,`footerTemplate`,`config`,`id`,`isOpen`,`isAnimated`,`isBottomSheetModalActive`,`animationDuration`,`hasDefaultContentWrapperClass`,`hasBanner`],[3,`ngTemplateOutlet`],[3,`close`,`onBackdropClick`,`headerTemplate`,`footerTemplate`,`config`,`id`,`isOpen`,`isAnimated`,`isBottomSheetModalActive`,`animationDuration`,`hasDefaultContentWrapperClass`,`hasBanner`],[1,`modal-content`,3,`ngClass`]],template:function(e,t){if(e&1&&(te$1(0,St,1,2,`bx-modal-backdrop`,3),Pg(1,null,0),te$1(3,Mt,2,12,`bx-modal-side`,4)(4,_t,2,11,`bx-modal-centered`,5),Lg(),ep(5,Nt,3,3,`ng-template`,null,1,qr)),e&2){let a;ne$1(t.config().style.hasBackdrop&&(t.isSide()||t.isBottomSheetModalActive())?0:-1),k(3),ne$1((a=!0)===t.isSide()?3:a===t.isCentered()?4:-1)}},dependencies:[rP,Ao,ne,te,ee],styles:[`
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
}`],changeDetection:1})};var we=new I(`MODAL_DATA`);var Ne=class o{router=p(Qr);injector=p(ke);applicationRef=p(Ln$1);environmentInjector=p(pt$1);rendererFactory2=p(xn);document=p(le);modalGlobalSettingsService=p(oe);renderer;modals=D(/* @__PURE__ */ new Set);constructor(){this.renderer=this.rendererFactory2.createRenderer(null,null),this.createSubscriptions()}open(n,e){let a=new A(new Z(this.resolveConfig(e)),n,this),f=ke.create({providers:[{provide:we,useValue:e?.data},{provide:A,useValue:a}],parent:this.injector}),u=up(P,{environmentInjector:this.environmentInjector,elementInjector:f});a.attachContainer(u),u.onDestroy(()=>{this.applicationRef.detachView(u.hostView),u.location.nativeElement.remove()});try{this.applicationRef.attachView(u.hostView),this.document.body.appendChild(u.location.nativeElement),this.modals.update(me=>new Set(me).add(a)),this.syncNestingDepth();let y=ke.create({providers:[{provide:P,useValue:u.instance}],parent:u.injector}),C=up(n,{environmentInjector:this.environmentInjector,elementInjector:y}),v=C.location.nativeElement;return a.attachContent(C),this.renderer.setStyle(v,`height`,`97%`),this.renderer.setStyle(v,`width`,`100%`),this.renderer.setStyle(v,`display`,`flex`),this.renderer.setStyle(v,`flex-grow`,`1`),a.open(),u.instance.isOpen()&&this.isIModal(C.instance)&&(C.instance.modal=a,C.instance.onModalInit()),a}catch(y){throw u.hostView.destroyed||u.destroy(),this.unregister(a),y}}close(n){n.close()}unregister(n){this.modals.update(e=>{let t=new Set(e);return t.delete(n),t}),this.syncNestingDepth()}closeAll(n=!1){this.modals().forEach(e=>{(e.config().disableCloseOnNavigation!==!0||!n)&&e.close(`cancel`,void 0,!0)})}find(n){for(let e of this.modals())if(e.componentType===n)return!0;return!1}modalsCount(){return this.modals().size}isTopmost(n){return[...this.modals()].at(-1)===n}syncNestingDepth(){for(let[n,e]of[...this.modals()].entries())e.setNestingDepth(n)}createSubscriptions(){this.router.events.pipe(Xt(n=>n instanceof dr),Ts(1),yp()).subscribe(()=>{this.modalsCount()>0&&this.closeAll(!0)})}isIModal(n){return typeof n==`object`&&n!==null&&`onModalInit`in n&&typeof n.onModalInit==`function`}resolveConfig(n){let e=n?.style?.animate??this.modalGlobalSettingsService.animate(),t={layout:n?.style?.layout??this.modalGlobalSettingsService.layout(),animate:e,hasBackdrop:n?.style?.hasBackdrop??this.modalGlobalSettingsService.hasBackdrop(),showCloseButton:n?.style?.showCloseButton??this.modalGlobalSettingsService.showCloseButton(),contentWrapper:n?.style?.contentWrapper??this.modalGlobalSettingsService.contentWrapper(),overrideFullHeight:n?.style?.overrideFullHeight??this.modalGlobalSettingsService.overrideFullHeight(),breakpoints:n?.style?.breakpoints,mobileConfig:n?.style?.mobileConfig,wrapperClasses:n?.style?.wrapperClasses,wrapperStyles:n?.style?.wrapperStyles,closeDelay:n?.style?.closeDelay};return s(r({},n),{disableClose:n?.disableClose??this.modalGlobalSettingsService.disableClose(),disableCloseOnBackdropClick:n?.disableCloseOnBackdropClick??this.modalGlobalSettingsService.disableCloseOnBackdropClick(),disableCloseOnNavigation:n?.disableCloseOnNavigation??this.modalGlobalSettingsService.disableCloseOnNavigation(),closeGuardOnlyOnCancel:n?.closeGuardOnlyOnCancel??this.modalGlobalSettingsService.closeGuardOnlyOnCancel(),style:t})}static ɵfac=function(e){return new(e||o)};static ɵprov=ee$1({token:o,factory:o.ɵfac,providedIn:`root`})};var De=class{};var Dn=class extends De{constructor(e,t){super();this.component=e;this.config=t}component;config;canClose(e){return e.open(this.component,this.config).afterClosed().pipe(Ke(a=>a.state===`confirm`))}};var kn=class o{modalRef=p(A);injectedData=p(we);modal=this.modalRef;data=this.injectedData;onModalInit(){}close(n){this.modal?.close(`cancel`,n)}static ɵfac=function(e){return new(e||o)};static ɵprov=ee$1({token:o,factory:o.ɵfac})};var On=class o{templateRef=p(An$1);modalCore=p(P,{optional:!0});constructor(){this.modalCore?this.modalCore.setFooterTemplate(this.templateRef):console.warn(`[ModalFooter] Directive used outside of a ModalComponent.`)}static ɵfac=function(e){return new(e||o)};static ɵdir=G$1({type:o,selectors:[[``,`appModalFooter`,``]]})};var Tn=class o{templateRef=p(An$1);modalCore=p(P,{optional:!0});constructor(){this.modalCore?this.modalCore.setHeaderTemplate(this.templateRef):console.warn(`[ModalHeader] Directive used outside of a ModalComponent.`)}static ɵfac=function(e){return new(e||o)};static ɵdir=G$1({type:o,selectors:[[``,`appModalHeader`,``]]})};export{Tn as a,On as i,G as n,ee as o,Ne as r,kn as s,Dn as t};