import{n as s,t as r}from"./chunk-C9yOwMO6.js";import{$ as Q,$t as fi,Cn as lr,En as mt,Et as ZT,F as It,Gt as cv,H as L,Hn as qC,Ht as ck,I as J,It as aw,Jt as ed,K as Mc,L as JE,N as Ic,Nn as oA,O as G,Qn as st,Qt as fe$1,R as Ju,Rn as p,Rt as bk,T as Ep,Tn as mk,U as L8,Vn as q,Wn as qs,Wt as cr,Y as OT,Yt as ee,_ as DE,_r as xt,a as Be,an as hi,at as S,br as yo,bt as W,c as C,cr as vo,ct as Sn$1,dr as wp,en as fn$1,er as td,f as Co,fn as j$1,fr as x,gn as jt,gt as Vc,h as Cw,i as Ac,in as he$1,j as Hv,jn as nt,lt as Te,mt as V$1,n as $e,nn as gt,nr as tn$1,on as ht,or as uk,pn as jC,pr as xT,pt as Uv,q as Mr,rr as ts,s as Bu,sn as iA,sr as ur,un as it,ut as UC,vn as kc,vt as Vt,wn as me$1,x as Dp,xt as WT,yn as ke,zt as bo}from"./chunk-DtVVo_Bz.js";var me=class{layout;breakpoints;animate;hasBackdrop;closeDelay;showCloseButton;mobileConfig;contentWrapper;wrapperClasses;wrapperStyles;overrideFullHeight;constructor(n){this.layout=n?.layout??`center`,this.breakpoints=n?.breakpoints,this.animate=n?.animate??!0,this.hasBackdrop=n?.hasBackdrop??!0,this.closeDelay=n?.closeDelay,this.showCloseButton=n?.showCloseButton??!0,this.mobileConfig=n?.mobileConfig??{},this.contentWrapper=n?.contentWrapper??!0,this.wrapperClasses=n?.wrapperClasses??``,this.wrapperStyles=n?.wrapperStyles??``,this.overrideFullHeight=n?.overrideFullHeight??!1}};var F=class{open;afterClose;closeGuard;closeGuardOnlyOnCancel;disableClose;disableCloseOnBackdropClick;disableCloseOnNavigation;data;style;header;contentClasses;contentStyles;id;constructor(n){this.open=n?.open??!0,this.afterClose=n?.afterClose,this.closeGuard=n?.closeGuard,this.closeGuardOnlyOnCancel=n?.closeGuardOnlyOnCancel??!0,this.disableClose=n?.disableClose??!1,this.disableCloseOnBackdropClick=n?.disableCloseOnBackdropClick??!1,this.disableCloseOnNavigation=n?.disableCloseOnNavigation??!1,this.data=n?.data??null,this.style=new me(n?.style),this.header=n?.header,this.contentClasses=n?.contentClasses??``,this.contentStyles=n?.contentStyles??``,this.id=n?.id}};var pe=class{constructor(n,e,o,i,b){this.componentType=e;this.modalService=i;this.modalConfig=b,this.modalContainerRef=o,this.modalContainerElement=o.location.nativeElement,this.componentRef=n}componentType;modalService;_modalContainer={};_modalContainerRef={};_modalContainerElement={};_parentElement=void 0;_componentRef={};_modalState=`closed`;modalState=new $e(this.getStatus());_modalConfig=void 0;backdropClickSubject=new ee;afterCloseSubject=new ee;get modalContainer(){return this._modalContainer}set modalContainer(n){this._modalContainer=n}get modalContainerRef(){return this._modalContainerRef}set modalContainerRef(n){this._modalContainerRef=n}get modalContainerElement(){return this._modalContainerElement}set modalContainerElement(n){this._modalContainerElement=n}get parentElement(){return this._parentElement}set parentElement(n){this._parentElement=n}get componentRef(){return this._componentRef}set componentRef(n){this._componentRef=n}get modalConfig(){return this._modalConfig}set modalConfig(n){this._modalConfig=n}backdropClick(){return this.backdropClickSubject.asObservable()}modalState$(){return this.modalState.asObservable()}afterClosed(){return this.afterCloseSubject.asObservable()}async open(){this._modalState=`opening`,this.modalState.next(`opening`),this.modalContainerRef.instance.componentRef=this._componentRef;let n=new F(this.modalConfig);this.modalContainerRef.instance.config=n,this.modalContainerRef.instance.closeFunction=this.handleClose.bind(this),this.parentElement?.appendChild(this.modalContainerElement),this.modalContainerRef.instance.backdropClick.subscribe(e=>{this.backdropClicked(e)}),this._modalState=`open`,this.modalState.next(`open`)}close(n=`cancel`,e=void 0,o=!1){this.modalContainerRef.instance.close(n,e,!1,o)}getStatus(){return this._modalState}backdropClicked(n){this.backdropClickSubject.next(n)}afterClose(n){this.afterCloseSubject.next(n)}handleClose(n){this._modalState=`closing`,this.modalState.next(`closing`),setTimeout(()=>{this.modalConfig?.afterClose&&this.modalConfig.afterClose(),this.modalContainerRef.destroy(),this._modalState=`closed`,this.modalState.next(`closed`),this.afterClose(n),this.modalService?.unregister(this)},this.modalContainerRef.instance.animationDuration)}};var ue=class t{isAnimated=L(!1);isOpen=L(!1);click=Cw();static ɵfac=function(e){return new(e||t)};static ɵcmp=mt({type:t,selectors:[[`bx-modal-backdrop`]],inputs:{isAnimated:[1,`isAnimated`],isOpen:[1,`isOpen`]},outputs:{click:`click`},decls:1,vars:4,consts:[[`type`,`button`,`aria-label`,`Close dialog`,1,`modal-backdrop`,3,`click`]],template:function(e,o){e&1&&(Ic(0,`button`,0),qC(`click`,function(b){return o.click.emit(b)}),Mc()),e&2&&st(`backdrop-fade-in`,o.isAnimated()&&o.isOpen())(`backdrop-fade-out`,o.isAnimated()&&!o.isOpen())},styles:[`
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
}`]})};function rn(t,n){if(t&1&&fi(0,`bx-icon`,3),t&2){ur(2);let e=uk(1);vo(`name`,e.icon.name)(`size`,e.icon.size??`24`)(`color`,e.icon.color)(`bgColor`,e.icon.bgColor)(`strokeWidth`,e.icon.strokeWidth)}}function ln(t,n){if(t&1&&Co(0),t&2){let e=ur(2);hi(` `,e.resolvedText(),` `)}}function sn(t,n){if(t&1&&(It(0,`div`,1),lr(1,rn,1,5,`bx-icon`,3),lr(2,ln,1,1),jt()),t&2){let e=ur(),o=uk(1);Vt(),cr(o.icon?1:-1),Vt(),cr(e.resolvedText()?2:-1)}}function dn(t,n){if(t&1){let e=xT();It(0,`button`,4),it(`click`,function(){Hv(e);let i=ur();return Uv(i.close.emit(`cancel`))}),fi(1,`bx-icon`,5),jt()}}var V=class t{i18n=p(Ju,{optional:!0});resolvedText=W(()=>{this.i18n?.version?.();let n=this.header();if(!(!n||!n.text))return ed(n.text)?this.i18n?.translate(n.text.key)??n.text.key:n.text});header=L.required();showCloseButton=L.required();close=Cw();static ɵfac=function(e){return new(e||t)};static ɵcmp=mt({type:t,selectors:[[`bx-modal-banner`]],inputs:{header:[1,`header`],showCloseButton:[1,`showCloseButton`]},outputs:{close:`close`},decls:4,vars:3,consts:[[1,`modal-top-banner-container`],[1,`modal-top-banner-title-container`],[`type`,`button`,`aria-label`,`Close dialog`,1,`bx-modal-close`],[3,`name`,`size`,`color`,`bgColor`,`strokeWidth`],[`type`,`button`,`aria-label`,`Close dialog`,1,`bx-modal-close`,3,`click`],[`name`,`x`]],template:function(e,o){if(e&1&&(It(0,`div`,0),aw(1),lr(2,sn,3,2,`div`,1),lr(3,dn,2,0,`button`,2),jt()),e&2){Vt();let i=ck(o.header());Vt(),cr(i?2:-1),Vt(),cr(o.showCloseButton()?3:-1)}},dependencies:[td],styles:[`
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
}`]})};var un=[`verticalSwipeTarget`];var fn=[`elementRef`];var bn=[`*`];var hn=t=>({"opened-bottom-sheet-modal":t});function Cn(t,n){if(t&1&&fi(0,`bx-modal-banner`,7),t&2){let e=ur();vo(`header`,e.config()?.header)(`showCloseButton`,!1)}}function gn(t,n){t&1&&UC(0)}function yn(t,n){if(t&1&&(It(0,`div`,8),jC(1,gn,1,0,`ng-container`,11),jt()),t&2){let e=ur();Vt(),vo(`ngTemplateOutlet`,e.headerTemplate())}}function vn(t,n){t&1&&UC(0)}function _n(t,n){if(t&1&&(It(0,`div`,10),jC(1,vn,1,0,`ng-container`,11),jt()),t&2){let e=ur();Vt(),vo(`ngTemplateOutlet`,e.footerTemplate())}}var j=class t{id=L.required();headerTemplate=L.required();footerTemplate=L.required();config=L.required();isOpen=L.required();isAnimated=L.required();hasBanner=L.required();animationDuration=L.required();close=Cw();currentTranslateY=S(0);isSwipingVerticallyFinished=S(!1);isSwipingVertically=S(!1);verticalSwipeTarget;elementRef;modalTransform=W(()=>this.isSwipingVerticallyFinished()?`translateY(100%)`:`translateY(${Math.max(0,this.currentTranslateY())}px)`);downSwipeLimit=0;isTrackingSwipe=!1;isTouchActive=!1;bottomSheetInitiated=!1;cleanupListeners=null;globalResizeCleanup=null;ngOnInit(){this.startVerticalSwipeDetection(),this.monitorInputType()}ngOnDestroy(){this.stopVerticalSwipeDetection(),this.globalResizeCleanup?.()}onDismissClick(n){(!this.isTrackingSwipe||n.detail===0)&&this.close.emit(`cancel`)}startVerticalSwipeDetection(){if(this.isTrackingSwipe||!(typeof window<`u`&&(window.matchMedia(`(pointer: coarse)`).matches||navigator.maxTouchPoints>0)))return;this.initBottomSheetModalParams(),this.isTrackingSwipe=!0;let e=this.verticalSwipeTarget?.nativeElement;if(!e)return;let o=0,i=0,b=0,h=!1,k=x=>{if(x.button!==0&&x.pointerType===`mouse`)return;o=(this.elementRef?.nativeElement.offsetHeight||0)/this.downSwipeLimit,h=!0,i=x.clientY,b=x.timeStamp,this.isSwipingVertically.set(!0),e.setPointerCapture(x.pointerId)},y=x=>{if(!h)return;let W=x.clientY-i;x.cancelable&&x.preventDefault(),this.currentTranslateY.set(W)},I=x=>{if(!h)return;h=!1,this.isSwipingVertically.set(!1),e.releasePointerCapture(x.pointerId);let W=x.clientY-i,an=W/(x.timeStamp-b||1);W>o||an>80&&W>0?this.close.emit(`cancel`):this.currentTranslateY.set(0)};e.addEventListener(`pointerdown`,k,{passive:!1}),e.addEventListener(`pointermove`,y,{passive:!1}),e.addEventListener(`pointerup`,I),e.addEventListener(`pointercancel`,I),this.cleanupListeners=()=>{e.removeEventListener(`pointerdown`,k),e.removeEventListener(`pointermove`,y),e.removeEventListener(`pointerup`,I),e.removeEventListener(`pointercancel`,I)}}stopVerticalSwipeDetection(){this.isTrackingSwipe&&(this.isTrackingSwipe=!1,this.cleanupListeners&&(this.cleanupListeners(),this.cleanupListeners=null))}initBottomSheetModalParams(){if(this.bottomSheetInitiated)return;this.bottomSheetInitiated=!0;let e=this.config()?.style?.mobileConfig;this.downSwipeLimit=e?.downSwipeLimit&&e.downSwipeLimit>0?e.downSwipeLimit:3}monitorInputType(){if(this.globalResizeCleanup)return;let n=e=>{let o=e.pointerType===`touch`;o&&!this.isTouchActive?(this.isTouchActive=!0,this.startVerticalSwipeDetection()):!o&&this.isTouchActive&&(this.isTouchActive=!1,this.stopVerticalSwipeDetection())};window.addEventListener(`pointerdown`,n),this.globalResizeCleanup=()=>window.removeEventListener(`pointerdown`,n)}static ɵfac=function(e){return new(e||t)};static ɵcmp=mt({type:t,selectors:[[`bx-modal-bottom-sheet`]],viewQuery:function(e,o){if(e&1&&Ep(un,7)(fn,7),e&2){let i;kc(i=Ac())&&(o.verticalSwipeTarget=i.first),kc(i=Ac())&&(o.elementRef=i.first)}},inputs:{id:[1,`id`],headerTemplate:[1,`headerTemplate`],footerTemplate:[1,`footerTemplate`],config:[1,`config`],isOpen:[1,`isOpen`],isAnimated:[1,`isAnimated`],hasBanner:[1,`hasBanner`],animationDuration:[1,`animationDuration`]},outputs:{close:`close`},ngContentSelectors:bn,decls:12,vars:19,consts:[[`elementRef`,``],[`verticalSwipeTarget`,``],[`bxSurface`,``,`data-bx-light-scope`,``,1,`bottom-sheet-modal-style`,3,`id`,`ngClass`],[`type`,`button`,`aria-label`,`Close dialog`,1,`touch-hitbox`,`bottom-sheet-modal-top-bar`,3,`click`],[1,`swipe-line`],[1,`bottom-sheet-modal-inner-content-container`],[1,`bottom-sheet-modal-top-group`],[3,`header`,`showCloseButton`],[1,`bottom-sheet-modal-header`],[1,`bottom-sheet-modal-main-content-container`],[1,`bottom-sheet-modal-footer`],[4,`ngTemplateOutlet`]],template:function(e,o){e&1&&(yo(),It(0,`div`,2,0)(2,`button`,3,1),it(`click`,function(b){return o.onDismissClick(b)}),fi(4,`div`,4),jt(),It(5,`div`,5)(6,`div`,6),lr(7,Cn,1,2,`bx-modal-banner`,7),lr(8,yn,2,1,`div`,8),It(9,`div`,9),bo(10),jt()(),lr(11,_n,2,1,`div`,10),jt()()),e&2&&(WT(o.config()?.style?.wrapperStyles??``),ZT(o.config()?.style?.wrapperClasses??``),qs(`max-height`,o.config()?.style?.mobileConfig?.customHeight??``)(`transform`,o.modalTransform())(`transition`,o.isAnimated()&&!o.isSwipingVertically()?`transform 300ms ease-in-out`:``),vo(`id`,o.id()??``)(`ngClass`,mk(17,hn,o.isAnimated())),Vt(7),cr(o.hasBanner()?7:-1),Vt(),cr(o.headerTemplate()?8:-1),Vt(),qs(`animation-duration`,o.isAnimated()?o.animationDuration()+`ms`:`0ms`),Vt(2),cr(o.footerTemplate()?11:-1))},dependencies:[Mr,iA,oA,V],styles:[`
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
}`],changeDetection:1})};var Mn=[`*`];function xn(t,n){if(t&1){let e=xT();It(0,`button`,13),it(`click`,function(i){Hv(e);let b=ur(2);return Uv(b.onBackdropClick.emit(i))}),jt()}}function Sn(t,n){if(t&1){let e=xT();It(0,`bx-modal-banner`,14),it(`close`,function(){Hv(e);let i=ur(2);return Uv(i.close.emit(`cancel`))}),jt()}if(t&2){let e=ur(2);vo(`header`,e.config()?.header)(`showCloseButton`,e.config()?.style?.showCloseButton??!0)}}function wn(t,n){t&1&&UC(0)}function Dn(t,n){if(t&1){let e=xT();It(0,`button`,17),it(`click`,function(){Hv(e);let i=ur(3);return Uv(i.close.emit(`cancel`))}),fi(1,`bx-icon`,18),jt()}}function On(t,n){if(t&1&&(It(0,`div`,9),jC(1,wn,1,0,`ng-container`,15),lr(2,Dn,2,0,`button`,16),jt()),t&2){let e=ur(2);Vt(),vo(`ngTemplateOutlet`,e.headerTemplate()),Vt(),cr(e.hasBanner()?-1:2)}}function Tn(t,n){t&1&&UC(0)}function kn(t,n){if(t&1&&(It(0,`div`,12),jC(1,Tn,1,0,`ng-container`,15),jt()),t&2){let e=ur(2);Vt(),vo(`ngTemplateOutlet`,e.footerTemplate())}}function Rn(t,n){if(t&1&&(It(0,`div`,1),lr(1,xn,1,0,`button`,3),It(2,`div`,4)(3,`div`,5)(4,`div`,6)(5,`div`,7),lr(6,Sn,1,2,`bx-modal-banner`,8),lr(7,On,3,2,`div`,9),It(8,`div`,10),UC(9,11),jt()(),lr(10,kn,2,1,`div`,12),jt()()()()),t&2){let e=ur(),o=OT(3);vo(`id`,e.id()??``),Vt(),cr(e.config()?.style?.hasBackdrop?1:-1),Vt(2),vo(`ngClass`,e.modalClasses()),Vt(),WT(e.config()?.style?.wrapperStyles??``),ZT(e.config()?.style?.wrapperClasses??``),Vt(2),cr(e.hasBanner()?6:-1),Vt(),cr(e.headerTemplate()?7:-1),Vt(2),vo(`ngTemplateOutlet`,o),Vt(),cr(e.footerTemplate()?10:-1)}}function Bn(t,n){if(t&1){let e=xT();It(0,`bx-modal-bottom-sheet`,19),it(`close`,function(){Hv(e);let i=ur();return Uv(i.close.emit(`cancel`))}),UC(1,11),jt()}if(t&2){let e=ur(),o=OT(3);vo(`headerTemplate`,e.headerTemplate())(`footerTemplate`,e.footerTemplate())(`config`,e.config())(`id`,e.id())(`isOpen`,e.isOpen())(`isAnimated`,e.isAnimated())(`hasBanner`,e.hasBanner())(`animationDuration`,e.animationDuration()),Vt(),vo(`ngTemplateOutlet`,o)}}function Nn(t,n){t&1&&bo(0)}var ne=class t{headerTemplate=L.required();footerTemplate=L.required();config=L.required();id=L.required();isOpen=L.required();isAnimated=L.required();isBottomSheetModalActive=L.required();animationDuration=L.required();hasDefaultContentWrapperClass=L.required();hasBanner=L.required();close=Cw();onBackdropClick=Cw();bottomSheet;modalClasses=W(()=>({"centered-modal-content-wrapper":!0,"centered-modal-default-style":this.hasDefaultContentWrapperClass()||this.hasBanner(),"centered-modal-animate-in":this.isAnimated()&&this.isOpen(),"centered-modal-animate-out":this.isAnimated()&&!this.isOpen()}));static ɵfac=function(e){return new(e||t)};static ɵcmp=mt({type:t,selectors:[[`bx-modal-centered`]],viewQuery:function(e,o){if(e&1&&Ep(j,5),e&2){let i;kc(i=Ac())&&(o.bottomSheet=i)}},inputs:{headerTemplate:[1,`headerTemplate`],footerTemplate:[1,`footerTemplate`],config:[1,`config`],id:[1,`id`],isOpen:[1,`isOpen`],isAnimated:[1,`isAnimated`],isBottomSheetModalActive:[1,`isBottomSheetModalActive`],animationDuration:[1,`animationDuration`],hasDefaultContentWrapperClass:[1,`hasDefaultContentWrapperClass`],hasBanner:[1,`hasBanner`]},outputs:{close:`close`,onBackdropClick:`onBackdropClick`},ngContentSelectors:Mn,decls:4,vars:1,consts:[[`contentTemplate`,``],[1,`modal-overlay`,3,`id`],[3,`headerTemplate`,`footerTemplate`,`config`,`id`,`isOpen`,`isAnimated`,`hasBanner`,`animationDuration`],[`type`,`button`,`aria-label`,`Close dialog`,1,`modal-backdrop`],[1,`modal-overlay-wrapper`],[`bxSurface`,``,`data-bx-light-scope`,``,3,`ngClass`],[1,`centered-modal-inner-content-container`],[1,`centered-modal-top-group`],[3,`header`,`showCloseButton`],[1,`centered-modal-header`],[1,`centered-modal-main-content-container`],[3,`ngTemplateOutlet`],[1,`centered-modal-footer`],[`type`,`button`,`aria-label`,`Close dialog`,1,`modal-backdrop`,3,`click`],[3,`close`,`header`,`showCloseButton`],[4,`ngTemplateOutlet`],[`type`,`button`,`aria-label`,`Close dialog`,1,`bx-modal-close`],[`type`,`button`,`aria-label`,`Close dialog`,1,`bx-modal-close`,3,`click`],[`name`,`x`],[3,`close`,`headerTemplate`,`footerTemplate`,`config`,`id`,`isOpen`,`isAnimated`,`hasBanner`,`animationDuration`]],template:function(e,o){e&1&&(yo(),lr(0,Rn,11,11,`div`,1)(1,Bn,2,9,`bx-modal-bottom-sheet`,2),jC(2,Nn,1,0,`ng-template`,null,0,bk)),e&2&&cr(o.isBottomSheetModalActive()?1:0)},dependencies:[Mr,oA,iA,j,V,td],styles:[`
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
}`],changeDetection:1})};var In=[`*`];function En(t,n){if(t&1){let e=xT();It(0,`bx-modal-banner`,10),it(`close`,function(){Hv(e);let i=ur(2);return Uv(i.close.emit(`cancel`))}),jt()}if(t&2){let e=ur(2);vo(`header`,e.config()?.header)(`showCloseButton`,e.config()?.style?.showCloseButton??!0)}}function Pn(t,n){t&1&&UC(0)}function An(t,n){if(t&1){let e=xT();It(0,`button`,13),it(`click`,function(){Hv(e);let i=ur(3);return Uv(i.close.emit(`cancel`))}),fi(1,`bx-icon`,14),jt()}}function Ln(t,n){if(t&1&&(It(0,`div`,6),jC(1,Pn,1,0,`ng-container`,11),lr(2,An,2,0,`button`,12),jt()),t&2){let e=ur(2);Vt(),vo(`ngTemplateOutlet`,e.headerTemplate()),Vt(),cr(e.hasBanner()?-1:2)}}function Vn(t,n){t&1&&UC(0)}function jn(t,n){if(t&1&&(It(0,`div`,9),jC(1,Vn,1,0,`ng-container`,11),jt()),t&2){let e=ur(2);Vt(),vo(`ngTemplateOutlet`,e.footerTemplate())}}function Fn(t,n){if(t&1&&(It(0,`div`,3)(1,`div`,4),lr(2,En,1,2,`bx-modal-banner`,5),lr(3,Ln,3,2,`div`,6),It(4,`div`,7),UC(5,8),jt()(),lr(6,jn,2,1,`div`,9),jt()),t&2){let e=ur(),o=OT(3);qs(`--%NS%anim-duration`,e.animationDuration(),`ms`),vo(`ngClass`,e.modalClasses())(`id`,e.id()??``),Vt(),WT(e.config()&&e.config()?.style?.wrapperStyles?e.config()?.style?.wrapperStyles:``),ZT(e.config()&&e.config()?.style?.wrapperClasses?e.config()?.style?.wrapperClasses:``),Vt(),cr(e.hasBanner()?2:-1),Vt(),cr(e.headerTemplate()?3:-1),Vt(2),vo(`ngTemplateOutlet`,o),Vt(),cr(e.footerTemplate()?6:-1)}}function Wn(t,n){if(t&1){let e=xT();It(0,`bx-modal-bottom-sheet`,15),it(`close`,function(){Hv(e);let i=ur();return Uv(i.close.emit(`cancel`))}),UC(1,8),jt()}if(t&2){let e=ur(),o=OT(3);vo(`headerTemplate`,e.headerTemplate())(`footerTemplate`,e.footerTemplate())(`config`,e.config())(`id`,e.id())(`isOpen`,e.isOpen())(`isAnimated`,e.isAnimated())(`hasBanner`,e.hasBanner())(`animationDuration`,e.animationDuration()),Vt(),vo(`ngTemplateOutlet`,o)}}function qn(t,n){t&1&&bo(0)}var te=class t{layout=L.required();headerTemplate=L.required();footerTemplate=L.required();config=L.required();id=L.required();isOpen=L.required();isAnimated=L.required();isBottomSheetModalActive=L.required();animationDuration=L.required();hasDefaultContentWrapperClass=L.required();hasBanner=L.required();close=Cw();bottomSheet;modalClasses=W(()=>{let n=this.layout()===`left`,e=this.layout()===`right`,o=this.isAnimated(),i=this.renderOpenClass();return{"side-modal-content-wrapper":!0,"side-modal-default-style":this.hasDefaultContentWrapperClass()||this.hasBanner(),"with-footer":this.footerTemplate()!==null,left:n,right:e,"side-modal-animate-in":o?i:!0,"side-modal-animate-out":o?!i:!1}});renderOpenClass=S(!1);constructor(){Te(()=>{this.isOpen()?(this.renderOpenClass.set(!1),setTimeout(()=>{this.renderOpenClass.set(!0)},50)):this.renderOpenClass.set(!1)})}static ɵfac=function(e){return new(e||t)};static ɵcmp=mt({type:t,selectors:[[`bx-modal-side`]],viewQuery:function(e,o){if(e&1&&Ep(j,5),e&2){let i;kc(i=Ac())&&(o.bottomSheet=i)}},inputs:{layout:[1,`layout`],headerTemplate:[1,`headerTemplate`],footerTemplate:[1,`footerTemplate`],config:[1,`config`],id:[1,`id`],isOpen:[1,`isOpen`],isAnimated:[1,`isAnimated`],isBottomSheetModalActive:[1,`isBottomSheetModalActive`],animationDuration:[1,`animationDuration`],hasDefaultContentWrapperClass:[1,`hasDefaultContentWrapperClass`],hasBanner:[1,`hasBanner`]},outputs:{close:`close`},ngContentSelectors:In,decls:4,vars:1,consts:[[`contentTemplate`,``],[`bxSurface`,``,`data-bx-light-scope`,``,3,`ngClass`,`id`,`--%NS%anim-duration`],[3,`headerTemplate`,`footerTemplate`,`config`,`id`,`isOpen`,`isAnimated`,`hasBanner`,`animationDuration`],[`bxSurface`,``,`data-bx-light-scope`,``,3,`ngClass`,`id`],[1,`side-modal-inner-content-container`],[3,`header`,`showCloseButton`],[1,`side-modal-header`],[1,`side-modal-main-content-container`],[3,`ngTemplateOutlet`],[1,`side-modal-footer`],[3,`close`,`header`,`showCloseButton`],[4,`ngTemplateOutlet`],[`type`,`button`,`aria-label`,`Close dialog`,1,`bx-modal-close`],[`type`,`button`,`aria-label`,`Close dialog`,1,`bx-modal-close`,3,`click`],[`name`,`x`],[3,`close`,`headerTemplate`,`footerTemplate`,`config`,`id`,`isOpen`,`isAnimated`,`hasBanner`,`animationDuration`]],template:function(e,o){e&1&&(yo(),lr(0,Fn,7,12,`div`,1)(1,Wn,2,9,`bx-modal-bottom-sheet`,2),jC(2,qn,1,0,`ng-template`,null,0,bk)),e&2&&cr(o.isBottomSheetModalActive()?1:0)},dependencies:[Mr,oA,j,iA,V,td],styles:[`
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
}`],changeDetection:1})};var $=class t{layout=S(`center`);animate=S(!0);hasBackdrop=S(!0);showCloseButton=S(!0);contentWrapper=S(!0);overrideFullHeight=S(!1);disableClose=S(!1);disableCloseOnBackdropClick=S(!1);disableCloseOnNavigation=S(!1);closeGuardOnlyOnCancel=S(!0);update(n){n.animate!==void 0&&this.animate.set(n.animate),n.hasBackdrop!==void 0&&this.hasBackdrop.set(n.hasBackdrop),n.disableCloseOnBackdropClick!==void 0&&this.disableCloseOnBackdropClick.set(n.disableCloseOnBackdropClick)}static ɵfac=function(e){return new(e||t)};static ɵprov=x({token:t,factory:t.ɵfac,providedIn:`root`})};var Gn=[`modalContainer`];var Yn=[`contentTemplate`];var Un=[`dynamicContainer`];function zn(t,n){if(t&1){let e=xT();It(0,`bx-modal-backdrop`,6),it(`click`,function(i){Hv(e);let b=ur();return Uv(b.onBackdropClick(i))}),jt()}if(t&2){let e=ur();vo(`isAnimated`,e.isAnimated())(`isOpen`,e.isOpen())}}function Kn(t,n){if(t&1){let e=xT();It(0,`bx-modal-side`,7),it(`close`,function(i){Hv(e);let b=ur();return Uv(b.close(i))}),UC(1,8),jt()}if(t&2){let e=ur(),o=OT(6);vo(`layout`,e.effectiveLayout())(`headerTemplate`,e.headerTemplate())(`footerTemplate`,e.footerTemplate())(`config`,e.config)(`id`,e.id())(`isOpen`,e.isOpen())(`isAnimated`,e.isAnimated())(`isBottomSheetModalActive`,e.isBottomSheetModalActive())(`animationDuration`,e.animationDuration)(`hasDefaultContentWrapperClass`,e.hasDefaultContentWrapperClass)(`hasBanner`,e.hasBanner),Vt(),vo(`ngTemplateOutlet`,o)}}function Xn(t,n){if(t&1){let e=xT();It(0,`bx-modal-centered`,9),it(`close`,function(i){Hv(e);let b=ur();return Uv(b.close(i))})(`onBackdropClick`,function(i){Hv(e);let b=ur();return Uv(b.onBackdropClick(i))}),UC(1,8),jt()}if(t&2){let e=ur(),o=OT(6);vo(`headerTemplate`,e.headerTemplate())(`footerTemplate`,e.footerTemplate())(`config`,e.config)(`id`,e.id())(`isOpen`,e.isOpen())(`isAnimated`,e.isAnimated())(`isBottomSheetModalActive`,e.isBottomSheetModalActive())(`animationDuration`,e.animationDuration)(`hasDefaultContentWrapperClass`,e.hasDefaultContentWrapperClass)(`hasBanner`,e.hasBanner),Vt(),vo(`ngTemplateOutlet`,o)}}function $n(t,n){t&1&&UC(0,null,2)}var P=class t{modalService=p(fe);globalSettings=p($);scrollLockService=p(DE);windowDimensionsService=p(Bu);destroyRef=p(J);animationDuration=175;componentRef={};config;closeFunction;backdropClickSubject=new ee;backdropClick=this.backdropClickSubject.asObservable();isOpen=S(!0);effectiveLayout=S(`center`);isCentered=S(!1);isSide=S(!1);isAnimated=W(()=>this.config?.style.animate??this.globalSettings.animate());headerTemplate=S(null);footerTemplate=S(null);id=S(null);isBottomSheetModalActive=S(!1);hasBanner=!1;hasDefaultContentWrapperClass=!1;windowDimensions=this.windowDimensionsService.dimensions;modalContainer;contentTemplate;sideModalComponents;centeredModalComponents;isConfirmCloseModalOpen=!1;scrollLockId=JE();_sortedBreakpoints=[];_currentVcr=null;constructor(){this.initKeyboardSubscription(),Te(()=>{let n=this.windowDimensions().width;this.handleLayout(n)})}ngOnInit(){this.initParamsFromConfig(),this.initBreakpointCache(),this.scrollLockService.disableScroll(this.scrollLockId,{animationDuration:this.animationDuration,handleTouchInput:!0,mobileOnlyTouchPrevention:!0})}ngAfterViewInit(){if(!this.componentRef)return;this.dynamicContainer?.insert(this.componentRef.hostView);let n=this.windowDimensionsService.dimensions().width;this.handleLayout(n)}ngOnDestroy(){this.componentRef?.destroy(),this.dynamicContainer?.clear(),this.scrollLockService.enableScroll(this.scrollLockId)}setHeaderTemplate(n){this.headerTemplate.set(n)}setFooterTemplate(n){this.footerTemplate.set(n)}close(n=`cancel`,e=void 0,o=!1,i=!1){if(i){this.handleClose(n,e);return}if(this.config?.disableClose===!0&&o)return;if((this.config?.closeGuardOnlyOnCancel!==!0||n!==`confirm`)&&this.config?.closeGuard){let h=this.config.closeGuard.canClose(this.modalService),k=h instanceof j$1?h:h instanceof Promise?he$1(h):V$1(h);this.isBottomSheetModalActive()&&this.resetBottomSheetModalLayout(),k.pipe(Sn$1(1)).subscribe(y=>{y&&this.handleClose(n,e)});return}this.handleClose(n,e)}onBackdropClick(n){n.preventDefault(),n.stopPropagation(),this.isOpen()&&(this.backdropClickSubject.next(n),this.config?.style?.hasBackdrop&&this.config?.disableCloseOnBackdropClick!==!0&&this.close(`cancel`,void 0,!0))}set dynamicContainer(n){n&&this.componentRef&&(this._currentVcr=n,n.insert(this.componentRef.hostView))}initKeyboardSubscription(){ts(document,`keydown`).pipe(Be(n=>n.key===`Escape`&&!n.defaultPrevented),L8(this.destroyRef)).subscribe(()=>{this.isConfirmCloseModalOpen||this.close(`cancel`,void 0,!0)})}initParamsFromConfig(){this.id.set(this.config?.id??this.scrollLockId);let n=!1;if(this.config?.header?.text){let e=this.config.header.text;n=ed(e)?!!e.key:e.length>0}this.hasBanner=this.config!==void 0&&(this.config.header!==void 0&&(n||this.config.header?.icon!==void 0)||this.config.disableClose!==!0&&this.config.style.showCloseButton!==!1&&this.headerTemplate()===null),this.hasDefaultContentWrapperClass=this.config?.style.contentWrapper!==!1}initBreakpointCache(){let n=this.config?.style?.breakpoints;if(n&&Object.keys(n).length>0){let e=this.windowDimensionsService.breakpoints;this._sortedBreakpoints=Object.keys(n).map(o=>({width:e[o],layout:n[o]??this.config?.style.layout??`center`})).sort((o,i)=>o.width-i.width)}}async handleClose(n,e){this.isOpen.set(!1),this.setBottomSheetModalFinishedState(!0);let o={data:e,state:n};this.closeFunction&&this.closeFunction(o)}handleLayout(n){if(!this.config)return;let e=this.config.style.layout;for(let y of this._sortedBreakpoints)if(n<=y.width){e=y.layout;break}let o=this.isSide(),i=e===`left`||e===`right`;if(o!==i&&this._currentVcr&&this.componentRef){let y=this._currentVcr.indexOf(this.componentRef.hostView);y!==-1&&this._currentVcr.detach(y)}this.effectiveLayout.set(e),this.isSide.set(i),this.isCentered.set(e===`center`||e===`bottom-sheet`);let h=e===`bottom-sheet`,k=this.isBottomSheetModalActive();h&&!k?this.isBottomSheetModalActive.set(!0):!h&&k&&this.isBottomSheetModalActive.set(!1)}getBottomSheetModal(){return this.sideModalComponents?.first?.bottomSheet?.first??this.centeredModalComponents?.first?.bottomSheet?.first}resetBottomSheetModalLayout(){let n=this.getBottomSheetModal();n&&n.currentTranslateY.set(0)}setBottomSheetModalFinishedState(n){let e=this.getBottomSheetModal();e&&e.isSwipingVerticallyFinished.set(n),this.isBottomSheetModalActive.set(!1)}static ɵfac=function(e){return new(e||t)};static ɵcmp=mt({type:t,selectors:[[`bx-modal`]],viewQuery:function(e,o){if(e&1&&Ep(Gn,5)(Yn,5)(Un,5,nt)(te,5)(ne,5),e&2){let i;kc(i=Ac())&&(o.modalContainer=i.first),kc(i=Ac())&&(o.contentTemplate=i.first),kc(i=Ac())&&(o.dynamicContainer=i.first),kc(i=Ac())&&(o.sideModalComponents=i),kc(i=Ac())&&(o.centeredModalComponents=i)}},decls:7,vars:2,consts:[[`modalContainer`,``],[`contentTemplate`,``],[`dynamicContainer`,``],[3,`isAnimated`,`isOpen`],[3,`layout`,`headerTemplate`,`footerTemplate`,`config`,`id`,`isOpen`,`isAnimated`,`isBottomSheetModalActive`,`animationDuration`,`hasDefaultContentWrapperClass`,`hasBanner`],[3,`headerTemplate`,`footerTemplate`,`config`,`id`,`isOpen`,`isAnimated`,`isBottomSheetModalActive`,`animationDuration`,`hasDefaultContentWrapperClass`,`hasBanner`],[3,`click`,`isAnimated`,`isOpen`],[3,`close`,`layout`,`headerTemplate`,`footerTemplate`,`config`,`id`,`isOpen`,`isAnimated`,`isBottomSheetModalActive`,`animationDuration`,`hasDefaultContentWrapperClass`,`hasBanner`],[3,`ngTemplateOutlet`],[3,`close`,`onBackdropClick`,`headerTemplate`,`footerTemplate`,`config`,`id`,`isOpen`,`isAnimated`,`isBottomSheetModalActive`,`animationDuration`,`hasDefaultContentWrapperClass`,`hasBanner`]],template:function(e,o){if(e&1&&(lr(0,zn,1,2,`bx-modal-backdrop`,3),wp(1,null,0),lr(3,Kn,2,12,`bx-modal-side`,4)(4,Xn,2,11,`bx-modal-centered`,5),Dp(),jC(5,$n,2,0,`ng-template`,null,1,bk)),e&2){let i;cr(o.config?.style?.hasBackdrop&&(o.isSide()||o.isBottomSheetModalActive())?0:-1),Vt(3),cr((i=!0)===o.isSide()?3:i===o.isCentered()?4:-1)}},dependencies:[oA,ne,te,ue],styles:[`
[_nghost-%COMP%] {
  position: fixed;
  inset: 0;
  z-index: 400;
  pointer-events: none;
}
[_nghost-%COMP%]    > *[_ngcontent-%COMP%] {
  pointer-events: auto;
}`],changeDetection:1})};var be=new C(`MODAL_DATA`);var fe=class t{router=p(tn$1);injector=p(Q);appRef=p(gt);environmentInjector=p(me$1);rendererFactory=p(ht);document=p(q);renderer;globalSettings=p($);a11y=p(ke);modals=new Set;modalsSubject=new $e(this.modals);constructor(){this.renderer=this.rendererFactory.createRenderer(null,null),this.createSubscriptions()}createSubscriptions(){this.router.events.pipe(Be(n=>n instanceof xt),cv(1),L8()).subscribe(()=>{this.modalsCount()>0&&this.closeAll(!0)})}open(n,e){let o=Q.create({providers:[{provide:be,useValue:e?.data}],parent:this.injector}),i=Vc(P,{environmentInjector:this.environmentInjector,elementInjector:o}),b=Q.create({providers:[{provide:P,useValue:i.instance}],parent:i.injector}),h=Vc(n,{environmentInjector:this.environmentInjector,elementInjector:b}),k=this.resolveConfig(e);i.instance.componentRef=h,i.instance.config=new F(k),this.appRef.attachView(i.hostView),this.document.body.appendChild(i.location.nativeElement);let y=new pe(h,n,i,this,new F(k));this.isIModal(h.instance)&&(h.instance.modal=y,h.instance.onModalInit()),i.onDestroy(()=>{this.appRef.detachView(i.hostView),i.location.nativeElement.remove()});let I=y.componentRef.location.nativeElement;return this.renderer.setStyle(I,`height`,`97%`),this.renderer.setStyle(I,`width`,`100%`),this.renderer.setStyle(I,`display`,`flex`),this.renderer.setStyle(I,`flex-grow`,`1`),this.modals.add(y),this.modalsSubject.next(this.modals),y.open(),y}close(n){n.close()}unregister(n){this.modals.delete(n),this.modalsSubject.next(this.modals)}closeAll(n=!1){this.modals.forEach(e=>{(e.modalConfig?.disableCloseOnNavigation!==!0||!n)&&e.close(`cancel`,void 0,!0)})}find(n){for(let e of this.modals)if(e.componentRef.componentType===n)return!0;return!1}modalsCount(){return this.modals.size}isIModal(n){return typeof n==`object`&&n!==null&&`onModalInit`in n&&typeof n.onModalInit==`function`}resolveConfig(n){let e=n?.style?.animate??this.globalSettings.animate(),o=this.a11y.isReducedMotion()?!1:e,i={layout:n?.style?.layout??this.globalSettings.layout(),animate:o,hasBackdrop:n?.style?.hasBackdrop??this.globalSettings.hasBackdrop(),showCloseButton:n?.style?.showCloseButton??this.globalSettings.showCloseButton(),contentWrapper:n?.style?.contentWrapper??this.globalSettings.contentWrapper(),overrideFullHeight:n?.style?.overrideFullHeight??this.globalSettings.overrideFullHeight(),breakpoints:n?.style?.breakpoints,mobileConfig:n?.style?.mobileConfig,wrapperClasses:n?.style?.wrapperClasses,wrapperStyles:n?.style?.wrapperStyles,closeDelay:n?.style?.closeDelay};return s(r({},n),{disableClose:n?.disableClose??this.globalSettings.disableClose(),disableCloseOnBackdropClick:n?.disableCloseOnBackdropClick??this.globalSettings.disableCloseOnBackdropClick(),disableCloseOnNavigation:n?.disableCloseOnNavigation??this.globalSettings.disableCloseOnNavigation(),closeGuardOnlyOnCancel:n?.closeGuardOnlyOnCancel??this.globalSettings.closeGuardOnlyOnCancel(),style:i})}static ɵfac=function(e){return new(e||t)};static ɵprov=x({token:t,factory:t.ɵfac,providedIn:`root`})};var Ze=class t{data=p(be);modal;onModalInit(){}close(n){this.modal?.close(`cancel`,n)}static ɵfac=function(e){return new(e||t)};static ɵprov=x({token:t,factory:t.ɵfac})};var en=class t{templateRef=p(fn$1);modal=p(P,{optional:!0});constructor(){this.modal?this.modal.setHeaderTemplate(this.templateRef):console.warn(`[ModalHeader] Directive used outside of a ModalComponent.`)}static ɵfac=function(e){return new(e||t)};static ɵdir=G({type:t,selectors:[[``,`appModalHeader`,``]]})};var nn=class t{templateRef=p(fn$1);modal=p(P,{optional:!0});constructor(){this.modal?this.modal.setFooterTemplate(this.templateRef):console.warn(`[ModalFooter] Directive used outside of a ModalComponent.`)}static ɵfac=function(e){return new(e||t)};static ɵdir=G({type:t,selectors:[[``,`appModalFooter`,``]]})};var he=class{};var tn=class extends he{constructor(e,o){super();this.component=e;this.config=o}component;config;canClose(e){return e.open(this.component,this.config).afterClosed().pipe(fe$1(i=>i.state===`confirm`))}};export{nn as a,fe as i,Ze as n,tn as o,en as r,V as t};