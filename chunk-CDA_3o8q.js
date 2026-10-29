import{n as s,t as r}from"./chunk-C9yOwMO6.js";import{$t as go,A as F4,At as Ye,Bn as vm,Bt as an,C as De,Cn as pe$1,E,En as q,Et as X,G as Lk,Gn as xa,Gt as ce,Hn as wu,It as _e,J as Ma,Jn as zo,Kn as xd,Ln as un$1,Lt as _i,M as Fs,Mn as re,N as Go,Nn as tn$1,O as Et,On as qe,P as Gt,Pn as tt,Q as Nm,R as Hn,S as Ct,Sn as ot,St as Ue,Tt as Wo,Un as x,Ut as bt,Vn as wE,Vt as ar,Xt as ek,Y as N,Z as Ne,_ as Be,_t as Su,an as j$1,cn as jn$1,d as $e,dn as kk,g as B,gn as mu,ht as SA,jt as Yo,lt as Q,m as Ak,mn as mm,mt as S,nn as hk,nt as Nt,ot as Ot,p as Ae,pn as mk,pt as Rt,qt as de,rn as ie,sn as jd,st as Ow,tn as h,tt as Nr,un as ke,ut as Qe,v as C,vn as n_,w as Di,wn as pm,wt as Vw,x as Cn$1,y as Ce,yn as nn$1,yt as U}from"./main-7DJU4RBM.js";var me=class{layout;breakpoints;animate;hasBackdrop;closeDelay;showCloseButton;mobileConfig;contentWrapper;wrapperClasses;wrapperStyles;overrideFullHeight;constructor(n){this.layout=n?.layout??`center`,this.breakpoints=n?.breakpoints,this.animate=n?.animate??!0,this.hasBackdrop=n?.hasBackdrop??!0,this.closeDelay=n?.closeDelay,this.showCloseButton=n?.showCloseButton??!0,this.mobileConfig=n?.mobileConfig??{},this.contentWrapper=n?.contentWrapper??!0,this.wrapperClasses=n?.wrapperClasses??``,this.wrapperStyles=n?.wrapperStyles??``,this.overrideFullHeight=n?.overrideFullHeight??!1}};var F=class{open;afterClose;closeGuard;closeGuardOnlyOnCancel;disableClose;disableCloseOnBackdropClick;disableCloseOnNavigation;data;style;header;contentClasses;contentStyles;id;constructor(n){this.open=n?.open??!0,this.afterClose=n?.afterClose,this.closeGuard=n?.closeGuard,this.closeGuardOnlyOnCancel=n?.closeGuardOnlyOnCancel??!0,this.disableClose=n?.disableClose??!1,this.disableCloseOnBackdropClick=n?.disableCloseOnBackdropClick??!1,this.disableCloseOnNavigation=n?.disableCloseOnNavigation??!1,this.data=n?.data??null,this.style=new me(n?.style),this.header=n?.header,this.contentClasses=n?.contentClasses??``,this.contentStyles=n?.contentStyles??``,this.id=n?.id}};var pe=class{constructor(n,e,o,i,b){this.componentType=e;this.modalService=i;this.modalConfig=b,this.modalContainerRef=o,this.modalContainerElement=o.location.nativeElement,this.componentRef=n}componentType;modalService;_modalContainer={};_modalContainerRef={};_modalContainerElement={};_parentElement=void 0;_componentRef={};_modalState=`closed`;modalState=new Ye(this.getStatus());_modalConfig=void 0;backdropClickSubject=new X;afterCloseSubject=new X;get modalContainer(){return this._modalContainer}set modalContainer(n){this._modalContainer=n}get modalContainerRef(){return this._modalContainerRef}set modalContainerRef(n){this._modalContainerRef=n}get modalContainerElement(){return this._modalContainerElement}set modalContainerElement(n){this._modalContainerElement=n}get parentElement(){return this._parentElement}set parentElement(n){this._parentElement=n}get componentRef(){return this._componentRef}set componentRef(n){this._componentRef=n}get modalConfig(){return this._modalConfig}set modalConfig(n){this._modalConfig=n}backdropClick(){return this.backdropClickSubject.asObservable()}modalState$(){return this.modalState.asObservable()}afterClosed(){return this.afterCloseSubject.asObservable()}async open(){this._modalState=`opening`,this.modalState.next(`opening`),this.modalContainerRef.instance.componentRef=this._componentRef;let n=new F(this.modalConfig);this.modalContainerRef.instance.config=n,this.modalContainerRef.instance.closeFunction=this.handleClose.bind(this),this.parentElement?.appendChild(this.modalContainerElement),this.modalContainerRef.instance.backdropClick.subscribe(e=>{this.backdropClicked(e)}),this._modalState=`open`,this.modalState.next(`open`)}close(n=`cancel`,e=void 0,o=!1){this.modalContainerRef.instance.close(n,e,!1,o)}getStatus(){return this._modalState}backdropClicked(n){this.backdropClickSubject.next(n)}afterClose(n){this.afterCloseSubject.next(n)}handleClose(n){this._modalState=`closing`,this.modalState.next(`closing`),setTimeout(()=>{this.modalConfig?.afterClose&&this.modalConfig.afterClose(),this.modalContainerRef.destroy(),this._modalState=`closed`,this.modalState.next(`closed`),this.afterClose(n),this.modalService?.unregister(this)},this.modalContainerRef.instance.animationDuration)}};var ue=class t{isAnimated=E(!1);isOpen=E(!1);click=wu();static ɵfac=function(e){return new(e||t)};static ɵcmp=De({type:t,selectors:[[`bx-modal-backdrop`]],inputs:{isAnimated:[1,`isAnimated`],isOpen:[1,`isOpen`]},outputs:{click:`click`},decls:1,vars:4,consts:[[`type`,`button`,`aria-label`,`Close dialog`,1,`modal-backdrop`,3,`click`]],template:function(e,o){e&1&&(zo(0,`button`,0),Vw(`click`,function(b){return o.click.emit(b)}),Go()),e&2&&Ae(`backdrop-fade-in`,o.isAnimated()&&o.isOpen())(`backdrop-fade-out`,o.isAnimated()&&!o.isOpen())},styles:[`
.modal-backdrop[_ngcontent-%COMP%] {
  padding: 0;
  border: 0;
  appearance: none;
  cursor: pointer;
  position: fixed;
  inset: 0;
  z-index: 400;
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
  background: rgba(0, 0, 0, 0.25);
  backface-visibility: hidden;
  -webkit-font-smoothing: subpixel-antialiased;
  transform-style: preserve-3d;
  transform-origin: center;
}
.modal-backdrop[_ngcontent-%COMP%] {
  background: rgba(0, 0, 0, 0.32);
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
}
@supports not ((backdrop-filter: blur(1px)) or (-webkit-backdrop-filter: blur(1px))) {
  .modal-backdrop[_ngcontent-%COMP%] {
    background: rgba(0, 0, 0, 0.5);
  }
}
@media (prefers-reduced-transparency: reduce), (forced-colors: active) {
  .modal-backdrop[_ngcontent-%COMP%] {
    -webkit-backdrop-filter: none;
    backdrop-filter: none;
    background: rgba(0, 0, 0, 0.6);
  }
}
[data-bx-reduced-transparency=true][_nghost-%COMP%]   .modal-backdrop[_ngcontent-%COMP%], [data-bx-reduced-transparency=true]   [_nghost-%COMP%]   .modal-backdrop[_ngcontent-%COMP%] {
  -webkit-backdrop-filter: none;
  backdrop-filter: none;
  background: rgba(0, 0, 0, 0.6);
}`]})};function rn(t,n){if(t&1&&ot(0,`bx-icon`,3),t&2){ke(2);let e=Ak(1);Qe(`name`,e.icon.name)(`size`,e.icon.size??`24`)(`color`,e.icon.color)(`bgColor`,e.icon.bgColor)(`strokeWidth`,e.icon.strokeWidth)}}function ln(t,n){if(t&1&&nn$1(0),t&2){let e=ke(2);ar(` `,e.resolvedText(),` `)}}function sn(t,n){if(t&1&&(ce(0,`div`,1),Ue(1,rn,1,5,`bx-icon`,3),Ue(2,ln,1,1),pe$1()),t&2){let e=ke(),o=Ak(1);ie(),$e(o.icon?1:-1),ie(),$e(e.resolvedText()?2:-1)}}function dn(t,n){if(t&1){let e=Ma();ce(0,`button`,4),qe(`click`,function(){_i(e);let i=ke();return Di(i.close.emit(`cancel`))}),ot(1,`bx-icon`,5),pe$1()}}var V=class t{i18n=h(Ot,{optional:!0});resolvedText=x(()=>{this.i18n?.version?.();let n=this.header();if(!(!n||!n.text))return an(n.text)?this.i18n?.translate(n.text.key)??n.text.key:n.text});header=E.required();showCloseButton=E.required();close=wu();static ɵfac=function(e){return new(e||t)};static ɵcmp=De({type:t,selectors:[[`bx-modal-banner`]],inputs:{header:[1,`header`],showCloseButton:[1,`showCloseButton`]},outputs:{close:`close`},decls:4,vars:3,consts:[[1,`modal-top-banner-container`],[1,`modal-top-banner-title-container`],[`type`,`button`,`aria-label`,`Close dialog`,1,`bx-modal-close`],[3,`name`,`size`,`color`,`bgColor`,`strokeWidth`],[`type`,`button`,`aria-label`,`Close dialog`,1,`bx-modal-close`,3,`click`],[`name`,`x`]],template:function(e,o){if(e&1&&(ce(0,`div`,0),n_(1),Ue(2,sn,3,2,`div`,1),Ue(3,dn,2,0,`button`,2),pe$1()),e&2){ie();let i=kk(o.header());ie(),$e(i?2:-1),ie(),$e(o.showCloseButton()?3:-1)}},dependencies:[jn$1],styles:[`
.modal-top-banner-container[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: space-between;
  align-items: flex-start;
  color: var(--%NS%bx-modal-text, var(--%NS%bx-text-primary));
  top: 0;
  min-height: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--%NS%bx-border-default);
}
.modal-top-banner-title-container[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 1rem;
  align-items: center;
  width: 100%;
  font-weight: bold;
  font-size: 1.25rem;
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
  width: 2rem;
  height: 2rem;
  padding: 0;
  border: none;
  border-radius: var(--%NS%bx-rounded-sm, radius(sm));
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
}`]})};var un=[`verticalSwipeTarget`];var fn=[`elementRef`];var bn=[`*`];var hn=t=>({"opened-bottom-sheet-modal":t});function Cn(t,n){if(t&1&&ot(0,`bx-modal-banner`,7),t&2){let e=ke();Qe(`header`,e.config()?.header)(`showCloseButton`,!1)}}function gn(t,n){t&1&&mu(0)}function yn(t,n){if(t&1&&(ce(0,`div`,8),Ow(1,gn,1,0,`ng-container`,11),pe$1()),t&2){let e=ke();ie(),Qe(`ngTemplateOutlet`,e.headerTemplate())}}function vn(t,n){t&1&&mu(0)}function _n(t,n){if(t&1&&(ce(0,`div`,10),Ow(1,vn,1,0,`ng-container`,11),pe$1()),t&2){let e=ke();ie(),Qe(`ngTemplateOutlet`,e.footerTemplate())}}var j=class t{id=E.required();headerTemplate=E.required();footerTemplate=E.required();config=E.required();isOpen=E.required();isAnimated=E.required();hasBanner=E.required();animationDuration=E.required();close=wu();currentTranslateY=S(0);isSwipingVerticallyFinished=S(!1);isSwipingVertically=S(!1);verticalSwipeTarget;elementRef;modalTransform=x(()=>this.isSwipingVerticallyFinished()?`translateY(100%)`:`translateY(${Math.max(0,this.currentTranslateY())}px)`);downSwipeLimit=0;isTrackingSwipe=!1;isTouchActive=!1;bottomSheetInitiated=!1;cleanupListeners=null;globalResizeCleanup=null;ngOnInit(){this.startVerticalSwipeDetection(),this.monitorInputType()}ngOnDestroy(){this.stopVerticalSwipeDetection(),this.globalResizeCleanup?.()}onDismissClick(n){(!this.isTrackingSwipe||n.detail===0)&&this.close.emit(`cancel`)}startVerticalSwipeDetection(){if(this.isTrackingSwipe||!(typeof window<`u`&&(window.matchMedia(`(pointer: coarse)`).matches||navigator.maxTouchPoints>0)))return;this.initBottomSheetModalParams(),this.isTrackingSwipe=!0;let e=this.verticalSwipeTarget?.nativeElement;if(!e)return;let o=0,i=0,b=0,h=!1,k=x=>{if(x.button!==0&&x.pointerType===`mouse`)return;o=(this.elementRef?.nativeElement.offsetHeight||0)/this.downSwipeLimit,h=!0,i=x.clientY,b=x.timeStamp,this.isSwipingVertically.set(!0),e.setPointerCapture(x.pointerId)},y=x=>{if(!h)return;let W=x.clientY-i;x.cancelable&&x.preventDefault(),this.currentTranslateY.set(W)},I=x=>{if(!h)return;h=!1,this.isSwipingVertically.set(!1),e.releasePointerCapture(x.pointerId);let W=x.clientY-i,an=W/(x.timeStamp-b||1);W>o||an>80&&W>0?this.close.emit(`cancel`):this.currentTranslateY.set(0)};e.addEventListener(`pointerdown`,k,{passive:!1}),e.addEventListener(`pointermove`,y,{passive:!1}),e.addEventListener(`pointerup`,I),e.addEventListener(`pointercancel`,I),this.cleanupListeners=()=>{e.removeEventListener(`pointerdown`,k),e.removeEventListener(`pointermove`,y),e.removeEventListener(`pointerup`,I),e.removeEventListener(`pointercancel`,I)}}stopVerticalSwipeDetection(){this.isTrackingSwipe&&(this.isTrackingSwipe=!1,this.cleanupListeners&&(this.cleanupListeners(),this.cleanupListeners=null))}initBottomSheetModalParams(){if(this.bottomSheetInitiated)return;this.bottomSheetInitiated=!0;let e=this.config()?.style?.mobileConfig;this.downSwipeLimit=e?.downSwipeLimit&&e.downSwipeLimit>0?e.downSwipeLimit:3}monitorInputType(){if(this.globalResizeCleanup)return;let n=e=>{let o=e.pointerType===`touch`;o&&!this.isTouchActive?(this.isTouchActive=!0,this.startVerticalSwipeDetection()):!o&&this.isTouchActive&&(this.isTouchActive=!1,this.stopVerticalSwipeDetection())};window.addEventListener(`pointerdown`,n),this.globalResizeCleanup=()=>window.removeEventListener(`pointerdown`,n)}static ɵfac=function(e){return new(e||t)};static ɵcmp=De({type:t,selectors:[[`bx-modal-bottom-sheet`]],viewQuery:function(e,o){if(e&1&&xa(un,7)(fn,7),e&2){let i;Wo(i=Yo())&&(o.verticalSwipeTarget=i.first),Wo(i=Yo())&&(o.elementRef=i.first)}},inputs:{id:[1,`id`],headerTemplate:[1,`headerTemplate`],footerTemplate:[1,`footerTemplate`],config:[1,`config`],isOpen:[1,`isOpen`],isAnimated:[1,`isAnimated`],hasBanner:[1,`hasBanner`],animationDuration:[1,`animationDuration`]},outputs:{close:`close`},ngContentSelectors:bn,decls:12,vars:19,consts:[[`elementRef`,``],[`verticalSwipeTarget`,``],[`bxSurface`,``,`data-bx-light-scope`,``,1,`bottom-sheet-modal-style`,3,`id`,`ngClass`],[`type`,`button`,`aria-label`,`Close dialog`,1,`touch-hitbox`,`bottom-sheet-modal-top-bar`,3,`click`],[1,`swipe-line`],[1,`bottom-sheet-modal-inner-content-container`],[1,`bottom-sheet-modal-top-group`],[3,`header`,`showCloseButton`],[1,`bottom-sheet-modal-header`],[1,`bottom-sheet-modal-main-content-container`],[1,`bottom-sheet-modal-footer`],[4,`ngTemplateOutlet`]],template:function(e,o){e&1&&(Rt(),ce(0,`div`,2,0)(2,`button`,3,1),qe(`click`,function(b){return o.onDismissClick(b)}),ot(4,`div`,4),pe$1(),ce(5,`div`,5)(6,`div`,6),Ue(7,Cn,1,2,`bx-modal-banner`,7),Ue(8,yn,2,1,`div`,8),ce(9,`div`,9),Et(10),pe$1()(),Ue(11,_n,2,1,`div`,10),pe$1()()),e&2&&(hk(o.config()?.style?.wrapperStyles??``),mk(o.config()?.style?.wrapperClasses??``),Nr(`max-height`,o.config()?.style?.mobileConfig?.customHeight??``)(`transform`,o.modalTransform())(`transition`,o.isAnimated()&&!o.isSwipingVertically()?`transform 300ms ease-in-out`:``),Qe(`id`,o.id()??``)(`ngClass`,Lk(17,hn,o.isAnimated())),ie(7),$e(o.hasBanner()?7:-1),ie(),$e(o.headerTemplate()?8:-1),ie(),Nr(`animation-duration`,o.isAnimated()?o.animationDuration()+`ms`:`0ms`),ie(2),$e(o.footerTemplate()?11:-1))},dependencies:[Hn,SA,Nm,V],styles:[`
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
  border-radius: 1.875rem 1.875rem 0 0;
  background-color: var(--%NS%bx-modal-bg, var(--%NS%bx-bg-surface));
  color: var(--%NS%bx-modal-text, var(--%NS%bx-text-primary));
  display: flex;
  flex-direction: column;
}
.touch-hitbox[_ngcontent-%COMP%] {
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
  padding-bottom: 0.5rem;
  margin-top: -1.5rem;
  flex-shrink: 0;
}
.swipe-line[_ngcontent-%COMP%] {
  width: 7rem;
  height: 0.33rem;
  background-color: var(--%NS%bx-modal-mobile-swipe-line-color, var(--%NS%bx-border-default));
  border-radius: 9999px;
  margin-top: 1.5rem;
  opacity: 0.215;
  cursor: pointer;
}
.bottom-sheet-modal-inner-content-container[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
  padding: 0 1.25rem 1.5rem;
  gap: 1.5rem;
  box-sizing: border-box;
  overflow: hidden;
}
.bottom-sheet-modal-top-group[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 1rem;
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
  animation: _ngcontent-%COMP%_opened-bottom-sheet-modal-anim 0.35s;
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
  padding-top: 0.5rem;
  gap: 0.5rem;
}
.bottom-sheet-modal-footer[_ngcontent-%COMP%] {
  flex-shrink: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 0.5rem;
}
@keyframes _ngcontent-%COMP%_opened-bottom-sheet-modal-anim {
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0%);
  }
}
@keyframes _ngcontent-%COMP%_opened-bottom-sheet-modal-anim {
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0%);
  }
}
@keyframes _ngcontent-%COMP%_opened-bottom-sheet-modal-anim {
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0%);
  }
}
[data-bx-surface][_ngcontent-%COMP%] {
  --%NS%bx-glass-surface: var(--%NS%bx-modal-bg, var(--%NS%bx-bg-surface));
  --%NS%bx-glass-text: var(--%NS%bx-modal-text, var(--%NS%bx-text-primary));
  --%NS%bx-glass-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
  --%NS%bx-glass-min-opacity: 0.52;
  --%NS%bx-glass-rim-opacity: 1;
  border: 1px solid var(--%NS%bx-glass-edge, var(--%NS%bx-border-default));
}
[data-theme=dark][_nghost-%COMP%]   [data-bx-surface][_ngcontent-%COMP%], [data-theme=dark]   [_nghost-%COMP%]   [data-bx-surface][_ngcontent-%COMP%] {
  --%NS%bx-glass-min-opacity: 0.72;
}`],changeDetection:1})};var Mn=[`*`];function xn(t,n){if(t&1){let e=Ma();ce(0,`button`,13),qe(`click`,function(i){_i(e);let b=ke(2);return Di(b.onBackdropClick.emit(i))}),pe$1()}}function Sn(t,n){if(t&1){let e=Ma();ce(0,`bx-modal-banner`,14),qe(`close`,function(){_i(e);let i=ke(2);return Di(i.close.emit(`cancel`))}),pe$1()}if(t&2){let e=ke(2);Qe(`header`,e.config()?.header)(`showCloseButton`,e.config()?.style?.showCloseButton??!0)}}function wn(t,n){t&1&&mu(0)}function Dn(t,n){if(t&1){let e=Ma();ce(0,`button`,17),qe(`click`,function(){_i(e);let i=ke(3);return Di(i.close.emit(`cancel`))}),ot(1,`bx-icon`,18),pe$1()}}function On(t,n){if(t&1&&(ce(0,`div`,9),Ow(1,wn,1,0,`ng-container`,15),Ue(2,Dn,2,0,`button`,16),pe$1()),t&2){let e=ke(2);ie(),Qe(`ngTemplateOutlet`,e.headerTemplate()),ie(),$e(e.hasBanner()?-1:2)}}function Tn(t,n){t&1&&mu(0)}function kn(t,n){if(t&1&&(ce(0,`div`,12),Ow(1,Tn,1,0,`ng-container`,15),pe$1()),t&2){let e=ke(2);ie(),Qe(`ngTemplateOutlet`,e.footerTemplate())}}function Rn(t,n){if(t&1&&(ce(0,`div`,1),Ue(1,xn,1,0,`button`,3),ce(2,`div`,4)(3,`div`,5)(4,`div`,6)(5,`div`,7),Ue(6,Sn,1,2,`bx-modal-banner`,8),Ue(7,On,3,2,`div`,9),ce(8,`div`,10),mu(9,11),pe$1()(),Ue(10,kn,2,1,`div`,12),pe$1()()()()),t&2){let e=ke(),o=ek(3);Qe(`id`,e.id()??``),ie(),$e(e.config()?.style?.hasBackdrop?1:-1),ie(2),Qe(`ngClass`,e.modalClasses()),ie(),hk(e.config()?.style?.wrapperStyles??``),mk(e.config()?.style?.wrapperClasses??``),ie(2),$e(e.hasBanner()?6:-1),ie(),$e(e.headerTemplate()?7:-1),ie(2),Qe(`ngTemplateOutlet`,o),ie(),$e(e.footerTemplate()?10:-1)}}function Bn(t,n){if(t&1){let e=Ma();ce(0,`bx-modal-bottom-sheet`,19),qe(`close`,function(){_i(e);let i=ke();return Di(i.close.emit(`cancel`))}),mu(1,11),pe$1()}if(t&2){let e=ke(),o=ek(3);Qe(`headerTemplate`,e.headerTemplate())(`footerTemplate`,e.footerTemplate())(`config`,e.config())(`id`,e.id())(`isOpen`,e.isOpen())(`isAnimated`,e.isAnimated())(`hasBanner`,e.hasBanner())(`animationDuration`,e.animationDuration()),ie(),Qe(`ngTemplateOutlet`,o)}}function Nn(t,n){t&1&&Et(0)}var ne=class t{headerTemplate=E.required();footerTemplate=E.required();config=E.required();id=E.required();isOpen=E.required();isAnimated=E.required();isBottomSheetModalActive=E.required();animationDuration=E.required();hasDefaultContentWrapperClass=E.required();hasBanner=E.required();close=wu();onBackdropClick=wu();bottomSheet;modalClasses=x(()=>({"centered-modal-content-wrapper":!0,"centered-modal-default-style":this.hasDefaultContentWrapperClass()||this.hasBanner(),"centered-modal-animate-in":this.isAnimated()&&this.isOpen(),"centered-modal-animate-out":this.isAnimated()&&!this.isOpen()}));static ɵfac=function(e){return new(e||t)};static ɵcmp=De({type:t,selectors:[[`bx-modal-centered`]],viewQuery:function(e,o){if(e&1&&xa(j,5),e&2){let i;Wo(i=Yo())&&(o.bottomSheet=i)}},inputs:{headerTemplate:[1,`headerTemplate`],footerTemplate:[1,`footerTemplate`],config:[1,`config`],id:[1,`id`],isOpen:[1,`isOpen`],isAnimated:[1,`isAnimated`],isBottomSheetModalActive:[1,`isBottomSheetModalActive`],animationDuration:[1,`animationDuration`],hasDefaultContentWrapperClass:[1,`hasDefaultContentWrapperClass`],hasBanner:[1,`hasBanner`]},outputs:{close:`close`,onBackdropClick:`onBackdropClick`},ngContentSelectors:Mn,decls:4,vars:1,consts:[[`contentTemplate`,``],[1,`modal-overlay`,3,`id`],[3,`headerTemplate`,`footerTemplate`,`config`,`id`,`isOpen`,`isAnimated`,`hasBanner`,`animationDuration`],[`type`,`button`,`aria-label`,`Close dialog`,1,`modal-backdrop`],[1,`modal-overlay-wrapper`],[`bxSurface`,``,`data-bx-light-scope`,``,3,`ngClass`],[1,`centered-modal-inner-content-container`],[1,`centered-modal-top-group`],[3,`header`,`showCloseButton`],[1,`centered-modal-header`],[1,`centered-modal-main-content-container`],[3,`ngTemplateOutlet`],[1,`centered-modal-footer`],[`type`,`button`,`aria-label`,`Close dialog`,1,`modal-backdrop`,3,`click`],[3,`close`,`header`,`showCloseButton`],[4,`ngTemplateOutlet`],[`type`,`button`,`aria-label`,`Close dialog`,1,`bx-modal-close`],[`type`,`button`,`aria-label`,`Close dialog`,1,`bx-modal-close`,3,`click`],[`name`,`x`],[3,`close`,`headerTemplate`,`footerTemplate`,`config`,`id`,`isOpen`,`isAnimated`,`hasBanner`,`animationDuration`]],template:function(e,o){e&1&&(Rt(),Ue(0,Rn,11,11,`div`,1)(1,Bn,2,9,`bx-modal-bottom-sheet`,2),Ow(2,Nn,1,0,`ng-template`,null,0,vm)),e&2&&$e(o.isBottomSheetModalActive()?1:0)},dependencies:[Hn,Nm,SA,j,V,jn$1],styles:[`
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
.modal-backdrop[_ngcontent-%COMP%] {
  padding: 0;
  border: 0;
  appearance: none;
  cursor: pointer;
  position: fixed;
  inset: 0;
  z-index: 400;
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
  background: rgba(0, 0, 0, 0.25);
  backface-visibility: hidden;
  -webkit-font-smoothing: subpixel-antialiased;
  transform-style: preserve-3d;
  transform-origin: center;
}
.centered-modal-content-wrapper[_ngcontent-%COMP%] {
  pointer-events: auto;
  display: flex;
  flex-direction: column;
  max-width: 90vw;
  max-width: 90dvw;
  max-height: 95vh;
  max-height: 95dvh;
  overflow: hidden;
}
.centered-modal-default-style[_ngcontent-%COMP%] {
  border-radius: 0.75rem;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
  color: var(--%NS%bx-modal-text, var(--%NS%bx-text-primary));
  -webkit-backdrop-filter: blur(12px);
  backdrop-filter: blur(12px);
  border: 1px solid transparent;
  background-color: var(--%NS%bx-modal-bg, var(--%NS%bx-bg-surface));
}
.centered-modal-inner-content-container[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 1rem 1.5rem;
  gap: 1.5rem;
  box-sizing: border-box;
}
.centered-modal-top-group[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 1rem;
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
  gap: 0.5rem;
}
.centered-modal-footer[_ngcontent-%COMP%] {
  flex-shrink: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 0.5rem;
}
.centered-modal-animate-in[_ngcontent-%COMP%] {
  scale: 0;
  animation: _ngcontent-%COMP%_centered-modal-animate-in 0.15s ease-in-out forwards;
}
.centered-modal-animate-out[_ngcontent-%COMP%] {
  animation: _ngcontent-%COMP%_centered-modal-animate-out 0.15s ease-in-out forwards;
}
@keyframes _ngcontent-%COMP%_centered-modal-animate-in {
  from {
    scale: 0;
  }
  to {
    scale: 1;
  }
}
@keyframes _ngcontent-%COMP%_centered-modal-animate-in {
  from {
    scale: 0;
  }
  to {
    scale: 1;
  }
}
@keyframes _ngcontent-%COMP%_centered-modal-animate-in {
  from {
    scale: 0;
  }
  to {
    scale: 1;
  }
}
@keyframes _ngcontent-%COMP%_centered-modal-animate-out {
  from {
    scale: 1;
  }
  to {
    scale: 0;
  }
}
@keyframes _ngcontent-%COMP%_centered-modal-animate-out {
  from {
    scale: 1;
  }
  to {
    scale: 0;
  }
}
@keyframes _ngcontent-%COMP%_centered-modal-animate-out {
  from {
    scale: 1;
  }
  to {
    scale: 0;
  }
}
[data-bx-surface][_ngcontent-%COMP%] {
  --%NS%bx-glass-surface: var(--%NS%bx-modal-bg, var(--%NS%bx-bg-surface));
  --%NS%bx-glass-text: var(--%NS%bx-modal-text, var(--%NS%bx-text-primary));
  --%NS%bx-glass-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
  --%NS%bx-glass-min-opacity: 0.52;
  --%NS%bx-glass-rim-opacity: 1;
  border: 1px solid var(--%NS%bx-glass-edge, var(--%NS%bx-border-default));
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
}
.modal-backdrop[_ngcontent-%COMP%] {
  background: rgba(0, 0, 0, 0.32);
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
}
@supports not ((backdrop-filter: blur(1px)) or (-webkit-backdrop-filter: blur(1px))) {
  .modal-backdrop[_ngcontent-%COMP%] {
    background: rgba(0, 0, 0, 0.5);
  }
}
@media (prefers-reduced-transparency: reduce), (forced-colors: active) {
  .modal-backdrop[_ngcontent-%COMP%] {
    -webkit-backdrop-filter: none;
    backdrop-filter: none;
    background: rgba(0, 0, 0, 0.6);
  }
}
[data-bx-reduced-transparency=true][_nghost-%COMP%]   .modal-backdrop[_ngcontent-%COMP%], [data-bx-reduced-transparency=true]   [_nghost-%COMP%]   .modal-backdrop[_ngcontent-%COMP%] {
  -webkit-backdrop-filter: none;
  backdrop-filter: none;
  background: rgba(0, 0, 0, 0.6);
}
[data-theme=dark][_nghost-%COMP%]   [data-bx-surface][_ngcontent-%COMP%], [data-theme=dark]   [_nghost-%COMP%]   [data-bx-surface][_ngcontent-%COMP%] {
  --%NS%bx-glass-min-opacity: 0.72;
}`],changeDetection:1})};var In=[`*`];function En(t,n){if(t&1){let e=Ma();ce(0,`bx-modal-banner`,10),qe(`close`,function(){_i(e);let i=ke(2);return Di(i.close.emit(`cancel`))}),pe$1()}if(t&2){let e=ke(2);Qe(`header`,e.config()?.header)(`showCloseButton`,e.config()?.style?.showCloseButton??!0)}}function Pn(t,n){t&1&&mu(0)}function An(t,n){if(t&1){let e=Ma();ce(0,`button`,13),qe(`click`,function(){_i(e);let i=ke(3);return Di(i.close.emit(`cancel`))}),ot(1,`bx-icon`,14),pe$1()}}function Ln(t,n){if(t&1&&(ce(0,`div`,6),Ow(1,Pn,1,0,`ng-container`,11),Ue(2,An,2,0,`button`,12),pe$1()),t&2){let e=ke(2);ie(),Qe(`ngTemplateOutlet`,e.headerTemplate()),ie(),$e(e.hasBanner()?-1:2)}}function Vn(t,n){t&1&&mu(0)}function jn(t,n){if(t&1&&(ce(0,`div`,9),Ow(1,Vn,1,0,`ng-container`,11),pe$1()),t&2){let e=ke(2);ie(),Qe(`ngTemplateOutlet`,e.footerTemplate())}}function Fn(t,n){if(t&1&&(ce(0,`div`,3)(1,`div`,4),Ue(2,En,1,2,`bx-modal-banner`,5),Ue(3,Ln,3,2,`div`,6),ce(4,`div`,7),mu(5,8),pe$1()(),Ue(6,jn,2,1,`div`,9),pe$1()),t&2){let e=ke(),o=ek(3);Nr(`--%NS%anim-duration`,e.animationDuration(),`ms`),Qe(`ngClass`,e.modalClasses())(`id`,e.id()??``),ie(),hk(e.config()&&e.config()?.style?.wrapperStyles?e.config()?.style?.wrapperStyles:``),mk(e.config()&&e.config()?.style?.wrapperClasses?e.config()?.style?.wrapperClasses:``),ie(),$e(e.hasBanner()?2:-1),ie(),$e(e.headerTemplate()?3:-1),ie(2),Qe(`ngTemplateOutlet`,o),ie(),$e(e.footerTemplate()?6:-1)}}function Wn(t,n){if(t&1){let e=Ma();ce(0,`bx-modal-bottom-sheet`,15),qe(`close`,function(){_i(e);let i=ke();return Di(i.close.emit(`cancel`))}),mu(1,8),pe$1()}if(t&2){let e=ke(),o=ek(3);Qe(`headerTemplate`,e.headerTemplate())(`footerTemplate`,e.footerTemplate())(`config`,e.config())(`id`,e.id())(`isOpen`,e.isOpen())(`isAnimated`,e.isAnimated())(`hasBanner`,e.hasBanner())(`animationDuration`,e.animationDuration()),ie(),Qe(`ngTemplateOutlet`,o)}}function qn(t,n){t&1&&Et(0)}var te=class t{layout=E.required();headerTemplate=E.required();footerTemplate=E.required();config=E.required();id=E.required();isOpen=E.required();isAnimated=E.required();isBottomSheetModalActive=E.required();animationDuration=E.required();hasDefaultContentWrapperClass=E.required();hasBanner=E.required();close=wu();bottomSheet;modalClasses=x(()=>{let n=this.layout()===`left`,e=this.layout()===`right`,o=this.isAnimated(),i=this.renderOpenClass();return{"side-modal-content-wrapper":!0,"side-modal-default-style":this.hasDefaultContentWrapperClass()||this.hasBanner(),"with-footer":this.footerTemplate()!==null,left:n,right:e,"side-modal-animate-in":o?i:!0,"side-modal-animate-out":o?!i:!1}});renderOpenClass=S(!1);constructor(){Be(()=>{this.isOpen()?(this.renderOpenClass.set(!1),setTimeout(()=>{this.renderOpenClass.set(!0)},50)):this.renderOpenClass.set(!1)})}static ɵfac=function(e){return new(e||t)};static ɵcmp=De({type:t,selectors:[[`bx-modal-side`]],viewQuery:function(e,o){if(e&1&&xa(j,5),e&2){let i;Wo(i=Yo())&&(o.bottomSheet=i)}},inputs:{layout:[1,`layout`],headerTemplate:[1,`headerTemplate`],footerTemplate:[1,`footerTemplate`],config:[1,`config`],id:[1,`id`],isOpen:[1,`isOpen`],isAnimated:[1,`isAnimated`],isBottomSheetModalActive:[1,`isBottomSheetModalActive`],animationDuration:[1,`animationDuration`],hasDefaultContentWrapperClass:[1,`hasDefaultContentWrapperClass`],hasBanner:[1,`hasBanner`]},outputs:{close:`close`},ngContentSelectors:In,decls:4,vars:1,consts:[[`contentTemplate`,``],[`bxSurface`,``,`data-bx-light-scope`,``,3,`ngClass`,`id`,`--%NS%anim-duration`],[3,`headerTemplate`,`footerTemplate`,`config`,`id`,`isOpen`,`isAnimated`,`hasBanner`,`animationDuration`],[`bxSurface`,``,`data-bx-light-scope`,``,3,`ngClass`,`id`],[1,`side-modal-inner-content-container`],[3,`header`,`showCloseButton`],[1,`side-modal-header`],[1,`side-modal-main-content-container`],[3,`ngTemplateOutlet`],[1,`side-modal-footer`],[3,`close`,`header`,`showCloseButton`],[4,`ngTemplateOutlet`],[`type`,`button`,`aria-label`,`Close dialog`,1,`bx-modal-close`],[`type`,`button`,`aria-label`,`Close dialog`,1,`bx-modal-close`,3,`click`],[`name`,`x`],[3,`close`,`headerTemplate`,`footerTemplate`,`config`,`id`,`isOpen`,`isAnimated`,`hasBanner`,`animationDuration`]],template:function(e,o){e&1&&(Rt(),Ue(0,Fn,7,12,`div`,1)(1,Wn,2,9,`bx-modal-bottom-sheet`,2),Ow(2,qn,1,0,`ng-template`,null,0,vm)),e&2&&$e(o.isBottomSheetModalActive()?1:0)},dependencies:[Hn,Nm,j,SA,V,jn$1],styles:[`
.side-modal-content-wrapper[_ngcontent-%COMP%] {
  position: fixed;
  top: 0;
  height: 100vh;
  height: 100dvh;
  z-index: 400;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
  box-sizing: border-box;
  overflow: hidden;
  transition: transform var(--%NS%anim-duration, 175ms) ease-in-out;
}
.side-modal-content-wrapper.left[_ngcontent-%COMP%] {
  left: 0;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.side-modal-content-wrapper.right[_ngcontent-%COMP%] {
  right: 0;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
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
  gap: 1rem;
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
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
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
  flex-shrink: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  padding-top: 0.75rem;
}
.side-modal-footer[_ngcontent-%COMP%] {
  flex-shrink: 0;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
  padding-bottom: 0.75rem;
}
[data-bx-surface][_ngcontent-%COMP%] {
  --%NS%bx-glass-surface: var(--%NS%bx-modal-bg, var(--%NS%bx-bg-surface));
  --%NS%bx-glass-text: var(--%NS%bx-modal-text, var(--%NS%bx-text-primary));
  --%NS%bx-glass-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
  --%NS%bx-glass-min-opacity: 0.52;
  --%NS%bx-glass-rim-opacity: 1;
  border: 1px solid var(--%NS%bx-glass-edge, var(--%NS%bx-border-default));
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
}
[data-theme=dark][_nghost-%COMP%]   [data-bx-surface][_ngcontent-%COMP%], [data-theme=dark]   [_nghost-%COMP%]   [data-bx-surface][_ngcontent-%COMP%] {
  --%NS%bx-glass-min-opacity: 0.72;
}`],changeDetection:1})};var $=class t{layout=S(`center`);animate=S(!0);hasBackdrop=S(!0);showCloseButton=S(!0);contentWrapper=S(!0);overrideFullHeight=S(!1);disableClose=S(!1);disableCloseOnBackdropClick=S(!1);disableCloseOnNavigation=S(!1);closeGuardOnlyOnCancel=S(!0);update(n){n.animate!==void 0&&this.animate.set(n.animate),n.hasBackdrop!==void 0&&this.hasBackdrop.set(n.hasBackdrop),n.disableCloseOnBackdropClick!==void 0&&this.disableCloseOnBackdropClick.set(n.disableCloseOnBackdropClick)}static ɵfac=function(e){return new(e||t)};static ɵprov=N({token:t,factory:t.ɵfac,providedIn:`root`})};var Gn=[`modalContainer`];var Yn=[`contentTemplate`];var Un=[`dynamicContainer`];function zn(t,n){if(t&1){let e=Ma();ce(0,`bx-modal-backdrop`,6),qe(`click`,function(i){_i(e);let b=ke();return Di(b.onBackdropClick(i))}),pe$1()}if(t&2){let e=ke();Qe(`isAnimated`,e.isAnimated())(`isOpen`,e.isOpen())}}function Kn(t,n){if(t&1){let e=Ma();ce(0,`bx-modal-side`,7),qe(`close`,function(i){_i(e);let b=ke();return Di(b.close(i))}),mu(1,8),pe$1()}if(t&2){let e=ke(),o=ek(6);Qe(`layout`,e.effectiveLayout())(`headerTemplate`,e.headerTemplate())(`footerTemplate`,e.footerTemplate())(`config`,e.config)(`id`,e.id())(`isOpen`,e.isOpen())(`isAnimated`,e.isAnimated())(`isBottomSheetModalActive`,e.isBottomSheetModalActive())(`animationDuration`,e.animationDuration)(`hasDefaultContentWrapperClass`,e.hasDefaultContentWrapperClass)(`hasBanner`,e.hasBanner),ie(),Qe(`ngTemplateOutlet`,o)}}function Xn(t,n){if(t&1){let e=Ma();ce(0,`bx-modal-centered`,9),qe(`close`,function(i){_i(e);let b=ke();return Di(b.close(i))})(`onBackdropClick`,function(i){_i(e);let b=ke();return Di(b.onBackdropClick(i))}),mu(1,8),pe$1()}if(t&2){let e=ke(),o=ek(6);Qe(`headerTemplate`,e.headerTemplate())(`footerTemplate`,e.footerTemplate())(`config`,e.config)(`id`,e.id())(`isOpen`,e.isOpen())(`isAnimated`,e.isAnimated())(`isBottomSheetModalActive`,e.isBottomSheetModalActive())(`animationDuration`,e.animationDuration)(`hasDefaultContentWrapperClass`,e.hasDefaultContentWrapperClass)(`hasBanner`,e.hasBanner),ie(),Qe(`ngTemplateOutlet`,o)}}function $n(t,n){t&1&&mu(0,null,2)}var P=class t{modalService=h(fe);globalSettings=h($);scrollLockService=h(wE);windowDimensionsService=h(xd);destroyRef=h(re);animationDuration=175;componentRef={};config;closeFunction;backdropClickSubject=new X;backdropClick=this.backdropClickSubject.asObservable();isOpen=S(!0);effectiveLayout=S(`center`);isCentered=S(!1);isSide=S(!1);isAnimated=x(()=>this.config?.style.animate??this.globalSettings.animate());headerTemplate=S(null);footerTemplate=S(null);id=S(null);isBottomSheetModalActive=S(!1);hasBanner=!1;hasDefaultContentWrapperClass=!1;windowDimensions=this.windowDimensionsService.dimensions;modalContainer;contentTemplate;sideModalComponents;centeredModalComponents;isConfirmCloseModalOpen=!1;scrollLockId=jd();_sortedBreakpoints=[];_currentVcr=null;constructor(){this.initKeyboardSubscription(),Be(()=>{let n=this.windowDimensions().width;this.handleLayout(n)})}ngOnInit(){this.initParamsFromConfig(),this.initBreakpointCache(),this.scrollLockService.disableScroll(this.scrollLockId,{animationDuration:this.animationDuration,handleTouchInput:!0,mobileOnlyTouchPrevention:!0})}ngAfterViewInit(){if(!this.componentRef)return;this.dynamicContainer?.insert(this.componentRef.hostView);let n=this.windowDimensionsService.dimensions().width;this.handleLayout(n)}ngOnDestroy(){this.componentRef?.destroy(),this.dynamicContainer?.clear(),this.scrollLockService.enableScroll(this.scrollLockId)}setHeaderTemplate(n){this.headerTemplate.set(n)}setFooterTemplate(n){this.footerTemplate.set(n)}close(n=`cancel`,e=void 0,o=!1,i=!1){if(i){this.handleClose(n,e);return}if(this.config?.disableClose===!0&&o)return;if((this.config?.closeGuardOnlyOnCancel!==!0||n!==`confirm`)&&this.config?.closeGuard){let h=this.config.closeGuard.canClose(this.modalService),k=h instanceof q?h:h instanceof Promise?Ce(h):j$1(h);this.isBottomSheetModalActive()&&this.resetBottomSheetModalLayout(),k.pipe(un$1(1)).subscribe(y=>{y&&this.handleClose(n,e)});return}this.handleClose(n,e)}onBackdropClick(n){n.preventDefault(),n.stopPropagation(),this.isOpen()&&(this.backdropClickSubject.next(n),this.config?.style?.hasBackdrop&&this.config?.disableCloseOnBackdropClick!==!0&&this.close(`cancel`,void 0,!0))}set dynamicContainer(n){n&&this.componentRef&&(this._currentVcr=n,n.insert(this.componentRef.hostView))}initKeyboardSubscription(){Fs(document,`keydown`).pipe(tt(n=>n.key===`Escape`&&!n.defaultPrevented),F4(this.destroyRef)).subscribe(()=>{this.isConfirmCloseModalOpen||this.close(`cancel`,void 0,!0)})}initParamsFromConfig(){this.id.set(this.config?.id??this.scrollLockId);let n=!1;if(this.config?.header?.text){let e=this.config.header.text;n=an(e)?!!e.key:e.length>0}this.hasBanner=this.config!==void 0&&(this.config.header!==void 0&&(n||this.config.header?.icon!==void 0)||this.config.disableClose!==!0&&this.config.style.showCloseButton!==!1&&this.headerTemplate()===null),this.hasDefaultContentWrapperClass=this.config?.style.contentWrapper!==!1}initBreakpointCache(){let n=this.config?.style?.breakpoints;if(n&&Object.keys(n).length>0){let e=this.windowDimensionsService.breakpoints;this._sortedBreakpoints=Object.keys(n).map(o=>({width:e[o],layout:n[o]??this.config?.style.layout??`center`})).sort((o,i)=>o.width-i.width)}}async handleClose(n,e){this.isOpen.set(!1),this.setBottomSheetModalFinishedState(!0);let o={data:e,state:n};this.closeFunction&&this.closeFunction(o)}handleLayout(n){if(!this.config)return;let e=this.config.style.layout;for(let y of this._sortedBreakpoints)if(n<=y.width){e=y.layout;break}let o=this.isSide(),i=e===`left`||e===`right`;if(o!==i&&this._currentVcr&&this.componentRef){let y=this._currentVcr.indexOf(this.componentRef.hostView);y!==-1&&this._currentVcr.detach(y)}this.effectiveLayout.set(e),this.isSide.set(i),this.isCentered.set(e===`center`||e===`bottom-sheet`);let h=e===`bottom-sheet`,k=this.isBottomSheetModalActive();h&&!k?this.isBottomSheetModalActive.set(!0):!h&&k&&this.isBottomSheetModalActive.set(!1)}getBottomSheetModal(){return this.sideModalComponents?.first?.bottomSheet?.first??this.centeredModalComponents?.first?.bottomSheet?.first}resetBottomSheetModalLayout(){let n=this.getBottomSheetModal();n&&n.currentTranslateY.set(0)}setBottomSheetModalFinishedState(n){let e=this.getBottomSheetModal();e&&e.isSwipingVerticallyFinished.set(n),this.isBottomSheetModalActive.set(!1)}static ɵfac=function(e){return new(e||t)};static ɵcmp=De({type:t,selectors:[[`bx-modal`]],viewQuery:function(e,o){if(e&1&&xa(Gn,5)(Yn,5)(Un,5,Ct)(te,5)(ne,5),e&2){let i;Wo(i=Yo())&&(o.modalContainer=i.first),Wo(i=Yo())&&(o.contentTemplate=i.first),Wo(i=Yo())&&(o.dynamicContainer=i.first),Wo(i=Yo())&&(o.sideModalComponents=i),Wo(i=Yo())&&(o.centeredModalComponents=i)}},decls:7,vars:2,consts:[[`modalContainer`,``],[`contentTemplate`,``],[`dynamicContainer`,``],[3,`isAnimated`,`isOpen`],[3,`layout`,`headerTemplate`,`footerTemplate`,`config`,`id`,`isOpen`,`isAnimated`,`isBottomSheetModalActive`,`animationDuration`,`hasDefaultContentWrapperClass`,`hasBanner`],[3,`headerTemplate`,`footerTemplate`,`config`,`id`,`isOpen`,`isAnimated`,`isBottomSheetModalActive`,`animationDuration`,`hasDefaultContentWrapperClass`,`hasBanner`],[3,`click`,`isAnimated`,`isOpen`],[3,`close`,`layout`,`headerTemplate`,`footerTemplate`,`config`,`id`,`isOpen`,`isAnimated`,`isBottomSheetModalActive`,`animationDuration`,`hasDefaultContentWrapperClass`,`hasBanner`],[3,`ngTemplateOutlet`],[3,`close`,`onBackdropClick`,`headerTemplate`,`footerTemplate`,`config`,`id`,`isOpen`,`isAnimated`,`isBottomSheetModalActive`,`animationDuration`,`hasDefaultContentWrapperClass`,`hasBanner`]],template:function(e,o){if(e&1&&(Ue(0,zn,1,2,`bx-modal-backdrop`,3),pm(1,null,0),Ue(3,Kn,2,12,`bx-modal-side`,4)(4,Xn,2,11,`bx-modal-centered`,5),mm(),Ow(5,$n,2,0,`ng-template`,null,1,vm)),e&2){let i;$e(o.config?.style?.hasBackdrop&&(o.isSide()||o.isBottomSheetModalActive())?0:-1),ie(3),$e((i=!0)===o.isSide()?3:i===o.isCentered()?4:-1)}},dependencies:[Nm,ne,te,ue],styles:[`
[_nghost-%COMP%] {
  position: fixed;
  inset: 0;
  z-index: 400;
  pointer-events: none;
}
[_nghost-%COMP%]    > *[_ngcontent-%COMP%] {
  pointer-events: auto;
}`],changeDetection:1})};var be=new C(`MODAL_DATA`);var fe=class t{router=h(Cn$1);injector=h(Q);appRef=h(Nt);environmentInjector=h(_e);rendererFactory=h(bt);document=h(B);renderer;globalSettings=h($);a11y=h(Ne);modals=new Set;modalsSubject=new Ye(this.modals);constructor(){this.renderer=this.rendererFactory.createRenderer(null,null),this.createSubscriptions()}createSubscriptions(){this.router.events.pipe(tt(n=>n instanceof Gt),go(1),F4()).subscribe(()=>{this.modalsCount()>0&&this.closeAll(!0)})}open(n,e){let o=Q.create({providers:[{provide:be,useValue:e?.data}],parent:this.injector}),i=Su(P,{environmentInjector:this.environmentInjector,elementInjector:o}),b=Q.create({providers:[{provide:P,useValue:i.instance}],parent:i.injector}),h=Su(n,{environmentInjector:this.environmentInjector,elementInjector:b}),k=this.resolveConfig(e);i.instance.componentRef=h,i.instance.config=new F(k),this.appRef.attachView(i.hostView),this.document.body.appendChild(i.location.nativeElement);let y=new pe(h,n,i,this,new F(k));this.isIModal(h.instance)&&(h.instance.modal=y,h.instance.onModalInit()),i.onDestroy(()=>{this.appRef.detachView(i.hostView),i.location.nativeElement.remove()});let I=y.componentRef.location.nativeElement;return this.renderer.setStyle(I,`height`,`97%`),this.renderer.setStyle(I,`width`,`100%`),this.renderer.setStyle(I,`display`,`flex`),this.renderer.setStyle(I,`flex-grow`,`1`),this.modals.add(y),this.modalsSubject.next(this.modals),y.open(),y}close(n){n.close()}unregister(n){this.modals.delete(n),this.modalsSubject.next(this.modals)}closeAll(n=!1){this.modals.forEach(e=>{(e.modalConfig?.disableCloseOnNavigation!==!0||!n)&&e.close(`cancel`,void 0,!0)})}find(n){for(let e of this.modals)if(e.componentRef.componentType===n)return!0;return!1}modalsCount(){return this.modals.size}isIModal(n){return typeof n==`object`&&n!==null&&`onModalInit`in n&&typeof n.onModalInit==`function`}resolveConfig(n){let e=n?.style?.animate??this.globalSettings.animate(),o=this.a11y.isReducedMotion()?!1:e,i={layout:n?.style?.layout??this.globalSettings.layout(),animate:o,hasBackdrop:n?.style?.hasBackdrop??this.globalSettings.hasBackdrop(),showCloseButton:n?.style?.showCloseButton??this.globalSettings.showCloseButton(),contentWrapper:n?.style?.contentWrapper??this.globalSettings.contentWrapper(),overrideFullHeight:n?.style?.overrideFullHeight??this.globalSettings.overrideFullHeight(),breakpoints:n?.style?.breakpoints,mobileConfig:n?.style?.mobileConfig,wrapperClasses:n?.style?.wrapperClasses,wrapperStyles:n?.style?.wrapperStyles,closeDelay:n?.style?.closeDelay};return s(r({},n),{disableClose:n?.disableClose??this.globalSettings.disableClose(),disableCloseOnBackdropClick:n?.disableCloseOnBackdropClick??this.globalSettings.disableCloseOnBackdropClick(),disableCloseOnNavigation:n?.disableCloseOnNavigation??this.globalSettings.disableCloseOnNavigation(),closeGuardOnlyOnCancel:n?.closeGuardOnlyOnCancel??this.globalSettings.closeGuardOnlyOnCancel(),style:i})}static ɵfac=function(e){return new(e||t)};static ɵprov=N({token:t,factory:t.ɵfac,providedIn:`root`})};var Ze=class t{data=h(be);modal;onModalInit(){}close(n){this.modal?.close(`cancel`,n)}static ɵfac=function(e){return new(e||t)};static ɵprov=N({token:t,factory:t.ɵfac})};var en=class t{templateRef=h(tn$1);modal=h(P,{optional:!0});constructor(){this.modal?this.modal.setHeaderTemplate(this.templateRef):console.warn(`[ModalHeader] Directive used outside of a ModalComponent.`)}static ɵfac=function(e){return new(e||t)};static ɵdir=U({type:t,selectors:[[``,`appModalHeader`,``]]})};var nn=class t{templateRef=h(tn$1);modal=h(P,{optional:!0});constructor(){this.modal?this.modal.setFooterTemplate(this.templateRef):console.warn(`[ModalFooter] Directive used outside of a ModalComponent.`)}static ɵfac=function(e){return new(e||t)};static ɵdir=U({type:t,selectors:[[``,`appModalFooter`,``]]})};var he=class{};var tn=class extends he{constructor(e,o){super();this.component=e;this.config=o}component;config;canClose(e){return e.open(this.component,this.config).afterClosed().pipe(de(i=>i.state===`confirm`))}};export{nn as a,fe as i,Ze as n,tn as o,en as r,V as t};