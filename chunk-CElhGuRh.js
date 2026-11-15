import{$a as ue,$n as Xt,$t as Or,Bn as Vt,Di as i0,Do as y,Dt as K,Eo as xt,Er as aI,Gr as ce,Gt as N,Ii as js,Lt,Nt as Le,Ro as yt,Rt as M,So as xe,St as J,T as Cn,U as FP,V as F,Vn as W,Vt as Ml,Wa as te,Xn as X,Xt as Nt,Z as G,Za as ub,_ as Be,_o as wt,at as Gy,eo as ul,f as At,h as BP,ii as f$1,in as Pe,ji as j,k as D,ka as re,ki as ie,kr as ae,lo as w,mi as g,mn as R$1,nt as Gn,p as B,pi as ft,qn as Wo,qt as Ne,r as $n,ra as ni,to as ux,ua as of,ui as fe,vo as xE,vt as Ie,x as Bs,xn as Se,xr as _e,ya as pt,yn as Rt,yr as _,zn as Ve}from"./chunk-C5OxD8uX.js";import{n as s,t as r}from"./chunk-DFgPOoGa.js";var R=class o{position=M(`top-right`);animate=M(!0);wrapperClass=M(void 0);durationInMs=M(5e3);swipeToDismiss=M(!0);maxOpened=M(4);glassiness=M(`auto`);glassQuality=M(`enhanced`);closeLabel=M(`Close toast`);showCloseButton=M(!0);closeButtonColor=M(`text-primary`);showProgressBar=M(!0);progressBarColor=M(`text-primary`);update(e){e.position!==void 0&&this.position.set(e.position),e.animate!==void 0&&this.animate.set(e.animate),e.wrapperClass!==void 0&&this.wrapperClass.set(e.wrapperClass),e.durationInMs!==void 0&&this.durationInMs.set(e.durationInMs),e.swipeToDismiss!==void 0&&this.swipeToDismiss.set(e.swipeToDismiss),e.maxOpened!==void 0&&this.maxOpened.set(e.maxOpened),e.glassiness!==void 0&&this.glassiness.set(e.glassiness),e.glassQuality!==void 0&&this.glassQuality.set(e.glassQuality),e.closeLabel!==void 0&&this.closeLabel.set(e.closeLabel),e.showCloseButton!==void 0&&this.showCloseButton.set(e.showCloseButton),e.closeButtonColor!==void 0&&this.closeButtonColor.set(e.closeButtonColor),e.showProgressBar!==void 0&&this.showProgressBar.set(e.showProgressBar),e.progressBarColor!==void 0&&this.progressBarColor.set(e.progressBarColor)}static ɵfac=function(t){return new(t||o)};static ɵprov=ie({token:o,factory:o.ɵfac,providedIn:`root`})};var b=class{configuration;lifecycle=M(`queued`);pauseReasons=/* @__PURE__ */ new Set;isPaused=M(!1);afterClosedSubject=new Pe;pauseSubject=new Pe;resumeSubject=new Pe;durationSubject=new Pe;config;data=g(()=>this.config().data);state=this.lifecycle.asReadonly();paused=this.isPaused.asReadonly();afterClosed$=this.afterClosedSubject.asObservable();onPause$=this.pauseSubject.asObservable();onResume$=this.resumeSubject.asObservable();durationChanges$=this.durationSubject.asObservable();closeHandler;constructor(e={}){this.configuration=M(r({},e)),this.config=this.configuration.asReadonly()}patch(e){this.state()===`closing`||this.state()===`closed`||(this.configuration.update(t=>s(r({},t),{data:e.data===void 0?t.data:this.patchData(t.data,e.data),durationInMs:e.durationInMs===void 0?t.durationInMs:Math.max(0,Number.isFinite(e.durationInMs)?e.durationInMs:0),closeLabel:e.closeLabel??t.closeLabel,showCloseButton:e.showCloseButton??t.showCloseButton,closeButtonColor:e.closeButtonColor===void 0?t.closeButtonColor:e.closeButtonColor??void 0,showProgressBar:e.showProgressBar??t.showProgressBar,progressBarColor:e.progressBarColor===void 0?t.progressBarColor:e.progressBarColor??void 0,wrapperClass:e.wrapperClass===void 0?t.wrapperClass:e.wrapperClass??void 0,hasDefaultBackground:e.hasDefaultBackground??t.hasDefaultBackground,glassiness:e.glassiness??t.glassiness,glassQuality:e.glassQuality??t.glassQuality})),e.durationInMs!==void 0&&this.durationSubject.next(this.config().durationInMs??0))}close(e){this.state()===`closing`||this.state()===`closed`||(this.beginClose(),this.closeHandler?this.closeHandler(e):this.completeClose(e))}pause(){this.setPauseReason(`explicit`,!0)}resume(){this.setPauseReason(`explicit`,!1)}setPauseReason(e,t){if(this.state()===`closing`||this.state()===`closed`)return;t?this.pauseReasons.add(e):this.pauseReasons.delete(e);let n=this.pauseReasons.size>0;n!==this.paused()&&(this.isPaused.set(n),n?this.pauseSubject.next():this.resumeSubject.next())}attach(e){this.state()===`queued`&&(this.closeHandler=e,this.lifecycle.set(`open`))}beginClose(){this.state()!==`closed`&&this.lifecycle.set(`closing`)}completeClose(e){this.state()!==`closed`&&(this.lifecycle.set(`closed`),this.closeHandler=void 0,this.afterClosedSubject.next(e),this.afterClosedSubject.complete(),this.pauseSubject.complete(),this.resumeSubject.complete(),this.durationSubject.complete())}patchData(e,t){if(!this.isPlainObject(t))return t;let n=Object.fromEntries(Object.entries(t).filter(([,i])=>i!==void 0));return r(r({},this.isPlainObject(e)?e:{}),n)}isPlainObject(e){if(e===null||typeof e!=`object`)return!1;let t=Object.getPrototypeOf(e);return t===Object.prototype||t===null}};var H=class o{toastRef=f$1(b);toast=this.toastRef;data=this.toast.data;onToastInit(){}close(e){this.toast?.close(e)}static ɵfac=function(t){return new(t||o)};static ɵprov=ie({token:o,factory:o.ɵfac})};function Qe(o,e){if(o&1&&xe(0,`bx-icon`,7),o&2){let t=e,n=w(2),i=BP(0);_e(`visibility`,i?.loading?`hidden`:`visible`),R$1(`name`,t.name)(`size`,n.iconSize())(`color`,t.color)(`bgColor`,t.bgColor)(`strokeWidth`,t.strokeWidth)}}function ze(o,e){if(o&1&&xe(0,`bx-loading-spinner`,6),o&2){let t=w(2),n=BP(0);R$1(`size`,t.iconSize())(`label`,n?.loadingLabel??`Loading`)}}function We(o,e){if(o&1&&(_(0,`span`,4),j(1,Qe,1,7,`bx-icon`,5),j(2,ze,1,2,`bx-loading-spinner`,6),D()),o&2){let t,n=w(),i=BP(0);_e(`min-inline-size`,n.iconSize(),`px`)(`min-block-size`,n.iconSize(),`px`),y(),F((t=i?.icon)?1:-1,t),y(),F(i?.loading?2:-1)}}function He(o,e){if(o&1&&(_(0,`h4`,8),X(1),D(),_(2,`p`,9),X(3),D()),o&2){let t=w();y(),fe(t.resolvedTitle()),y(2),fe(t.resolvedMessage())}}function Ye(o,e){if(o&1&&(_(0,`p`,3),X(1),D()),o&2){let t=w();y(),fe(t.resolvedMessage())}}var f=class o extends H{i18n=f$1(Se,{optional:!0});resolvedTitle=g(()=>J(this.data()?.title??void 0,this.i18n));resolvedMessage=g(()=>J(this.data()?.message,this.i18n));iconSize=g(()=>{let e=Number(this.data()?.icon?.size??24);return Number.isFinite(e)&&e>0?e:24});static ɵfac=(()=>{let e;return function(n){return(e||(e=Wo(o)))(n||o)}})();static ɵcmp=G({type:o,selectors:[[`bx-simple-toast`]],features:[Cn],decls:6,vars:4,consts:[[1,`simple-toast`,3,`ngClass`],[1,`simple-toast-icon-area`,3,`min-inline-size`,`min-block-size`],[`aria-live`,`polite`,`aria-atomic`,`true`,1,`simple-toast-content`],[1,`simple-toast-message`,`large-message`],[1,`simple-toast-icon-area`],[3,`name`,`size`,`color`,`bgColor`,`strokeWidth`,`visibility`],[3,`size`,`label`],[3,`name`,`size`,`color`,`bgColor`,`strokeWidth`],[1,`simple-toast-title`],[1,`simple-toast-message`]],template:function(t,n){if(t&1&&(xE(0),_(1,`div`,0),j(2,We,3,6,`span`,1),_(3,`div`,2),j(4,He,4,2)(5,Ye,2,1,`p`,3),D()()),t&2){let i=FP(n.data());y(),R$1(`ngClass`,i?.type??`info`),y(),F(i?.icon||i?.loading!==void 0?2:-1),y(2),F(n.resolvedTitle()?4:5)}},dependencies:[ux,Vt,Ml],styles:[`
.simple-toast[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--%NS%bx-space-3, 0.75rem);
  justify-content: center;
  position: relative;
  padding: var(--%NS%bx-space-4, 1rem);
  border-radius: var(--%NS%bx-rounded-md, 0.5rem);
  background: transparent;
  border: 0;
  overflow: hidden;
}
.simple-toast[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], 
.simple-toast[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], 
.simple-toast[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], 
.simple-toast[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], 
.simple-toast[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {
  color: inherit;
}
.simple-toast.info[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-info);
}
.simple-toast.info[_ngcontent-%COMP%]   .simple-toast-content[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-info-readable, var(--%NS%bx-text-info));
}
.simple-toast.success[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-success);
}
.simple-toast.success[_ngcontent-%COMP%]   .simple-toast-content[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-success-readable, var(--%NS%bx-text-success));
}
.simple-toast.warn[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-warn);
}
.simple-toast.warn[_ngcontent-%COMP%]   .simple-toast-content[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-warn-readable, var(--%NS%bx-text-warn));
}
.simple-toast.danger[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-danger);
}
.simple-toast.danger[_ngcontent-%COMP%]   .simple-toast-content[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-danger-readable, var(--%NS%bx-text-danger));
}
.simple-toast-content[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex-grow: 1;
  min-inline-size: 0;
  padding-inline-end: var(--%NS%bx-space-6, 1.5rem);
  overflow-wrap: anywhere;
  font-family: inherit;
}
.simple-toast-title[_ngcontent-%COMP%] {
  margin: 0 0 var(--%NS%bx-space-1, 0.25rem);
  font-size: 1rem;
  font-weight: 600;
}
.simple-toast-message[_ngcontent-%COMP%] {
  margin: 0;
  font-size: 0.875rem;
  line-height: 1.4;
}
.simple-toast-message.large-message[_ngcontent-%COMP%] {
  font-size: 1rem;
}
.simple-toast-icon-area[_ngcontent-%COMP%] {
  display: inline-grid;
  flex: 0 0 auto;
  place-items: center;
}
.simple-toast-icon-area[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
  grid-area: 1/1;
}`]})};var $e=[`dynamicContainer`];var Xe=[`toastSwipeTarget`];var Ze=[`animatorWrapper`];var Ue=[`progressBar`];function Ke(o,e){if(o&1){let t=wt();_(0,`button`,8),te(`click`,function(){Be(t);let i=w();return Ve(i.closeToast())}),xe(1,`bx-icon`,9),D()}if(o&2){let t=w();B(`aria-label`,t.resolvedCloseLabel()),y(),R$1(`color`,t.closeButtonColor())}}function Je(o,e){if(o&1&&(_(0,`div`,10),xe(1,`div`,11,3),D()),o&2){let t=w();_e(`background`,t.progressBarBgCssVar()),y(),_e(`background`,t.progressBarCssVar())}}var Y=class o{i18n=f$1(Se,{optional:!0});elementRef=f$1(K);themingService=f$1(ul);ngZone=f$1(re);platformId=f$1(pt);bxGlassLightingService=f$1(ub);bxA11yService=f$1(Le);toastrGlobalSettingsService=f$1(R);toastRef=f$1(b);swipeMotion=ni([0],([e])=>this.currentTranslateY.set(e));gestureActive=M(!1);resolvedCloseLabel=g(()=>J(this.config().closeLabel??`Close toast`,this.i18n));showCloseButton=g(()=>this.config().showCloseButton??this.toastrGlobalSettingsService.showCloseButton());closeButtonColor=g(()=>this.config().closeButtonColor??this.toastrGlobalSettingsService.closeButtonColor());showProgressBar=g(()=>this.config().showProgressBar===!1?!1:this.config().showProgressBar===!0||this.config().progressBarColor!==void 0);progressBarColor=g(()=>{if(!this.showProgressBar())return;let e=this.config().progressBarColor??this.toastrGlobalSettingsService.progressBarColor();return i0(e)?this.themingService.activeTheme()===`dark`?e.dark??e.light:e.light:e});progressBarCssVar=g(()=>{let e=this.progressBarColor();return e?Bs(e):void 0});progressBarBgCssVar=g(()=>{let e=this.progressBarColor();return e?Bs(aI(e)):void 0});isAnimated=g(()=>!this.bxA11yService.isReducedMotion()&&this.config().animate!==!1);isBottom=g(()=>(this.config().position??this.toastrGlobalSettingsService.position()).includes(`bottom`));simpleToastSurface=g(()=>{let e=this.componentRef?.instance;return e instanceof f?`color-mix(in srgb, var(--bx-bg-surface) 92%, var(--bx-bg-${e.data()?.type??`info`}))`:null});emissionColor=g(()=>{let e=this.componentRef?.instance;return e instanceof f?`var(--bx-text-${e.data()?.type??`info`})`:this.progressBarCssVar()});wrapperClasses=g(()=>{return`${(this.config().position??`top-right`).includes(`top`)?`anim-dir-top`:`anim-dir-bottom`} ${this.config().wrapperClass??`default-wrapper`}${this.config().hasDefaultBackground===!1?` no-bg`:``}`});toastrTransform=g(()=>{let e=(this.config().position??`top-right`).includes(`top`);return this.isSwipingFinished()?e?`translateY(-150px)`:`translateY(150px)`:this.currentTranslateY()!==0?`translateY(${this.currentTranslateY()}px)`:null});dynamicContainer=Nt.required(`dynamicContainer`,{read:At});toastSwipeTarget=Nt.required(`toastSwipeTarget`);animatorWrapper=Nt.required(`animatorWrapper`);progressBar=Nt(`progressBar`);config=this.toastRef.config;isVisible=M(!1);currentTranslateY=M(0);isSwipingFinished=M(!1);isCollapsing=M(!1);componentRef;originElement;cancelSwipe;light;lightFrame;lastLightProgress=-1;lastLightColor;destroyed=!1;progressAnimation;subs=new Ne;remainingMs=0;timerStartTime=0;lifetimeMs=0;viewReady=!1;closing=!1;progressElement;entranceTimeout;collapseTimeout;closeResult;isTrackingSwipe=!1;isTouchActive=!1;autoCloseTimeout;hasEmittedClose=!1;cleanupListeners=[];swipeCleanupListeners=null;globalResizeCleanup=null;constructor(){ce(()=>{this.isAnimated()||this.swipeMotion.retarget([this.currentTranslateY()],!0)}),Gn(()=>{let e=this.progressBar()?.nativeElement,t=this.isAnimated(),n=this.toastRef.state();this.config(),this.emissionColor(),W(()=>{if(!(this.destroyed||!this.viewReady)){if(n===`closing`){t||this.finishClose();return}this.syncProgressAnimation(e),this.lastLightProgress=-1,t&&!this.toastRef.paused()?this.startLightFrame():(this.stopLightFrame(),this.paintLight())}})})}ngOnInit(){this.subs.add(this.toastRef.durationChanges$.subscribe(()=>{this.viewReady&&!this.closing&&this.resetLifetime()})),this.subs.add(this.toastRef.onPause$.subscribe(()=>{this.pauseTimer(),this.progressAnimation?.pause(),this.paintLight(),this.stopLightFrame()})),this.subs.add(this.toastRef.onResume$.subscribe(()=>{this.startTimer(),this.progressAnimation?.play(),this.startLightFrame()}))}ngAfterViewInit(){if(this.dynamicContainer().insert(this.componentRef.hostView),this.viewReady=!0,this.originElement=this.elementRef.nativeElement.ownerDocument.activeElement,!Lt(this.platformId))return;this.entranceTimeout=setTimeout(()=>{!this.destroyed&&!this.closing&&this.isVisible.set(!0)},10),this.config().swipeToDismiss!==!1&&(this.startVerticalSwipeDetection(),this.monitorInputType());let e=this.animatorWrapper().nativeElement,t=n=>{n.target!==e||n.propertyName!==`grid-template-rows`||this.isCollapsing()&&!this.hasEmittedClose&&(this.hasEmittedClose=!0,this.toastRef.completeClose(this.closeResult))};e.addEventListener(`transitionend`,t),this.cleanupListeners.push(()=>e.removeEventListener(`transitionend`,t)),this.resetLifetime()}ngOnDestroy(){this.destroyed=!0,this.stopLightFrame(),this.light?.destroy(),clearTimeout(this.autoCloseTimeout),clearTimeout(this.entranceTimeout),clearTimeout(this.collapseTimeout),this.stopVerticalSwipeDetection(),this.swipeMotion.destroy(),this.globalResizeCleanup?.(),this.cleanupListeners.forEach(e=>e()),this.cleanupListeners=[],this.progressAnimation?.cancel(),this.subs.unsubscribe(),this.componentRef&&!this.componentRef.hostView.destroyed&&this.componentRef.destroy(),this.toastRef.completeClose(this.closeResult)}closeToast(e,t=!1){if(!(this.destroyed||this.closing)){if(this.restoreFocus(),this.cancelSwipe?.(),this.closing=!0,this.toastRef.beginClose(),this.closeResult=e,clearTimeout(this.autoCloseTimeout),clearTimeout(this.entranceTimeout),this.autoCloseTimeout=void 0,this.progressAnimation?.pause(),this.stopLightFrame(),this.light?.destroy(),this.light=void 0,!this.viewReady||!this.isVisible()||!this.isAnimated()){this.finishClose();return}this.isVisible.set(!1),this.isCollapsing.set(!0),t&&this.isSwipingFinished.set(!0),this.collapseTimeout=setTimeout(()=>this.finishClose(),450)}}onMouseEnter(){!this.isTouchActive&&!this.closing&&this.toastRef.setPauseReason(`hover`,!0)}onMouseLeave(){this.closing||this.toastRef.setPauseReason(`hover`,!1)}onFocusIn(){this.toastRef.setPauseReason(`focus`,!0)}onFocusOut(e){(!(e.relatedTarget instanceof Node)||!this.elementRef.nativeElement.contains(e.relatedTarget))&&this.toastRef.setPauseReason(`focus`,!1)}restoreFocus(){let e=this.elementRef.nativeElement;e.contains(e.ownerDocument.activeElement)&&(this.originElement?.isConnected&&!this.originElement.closest(`[inert], :disabled, [aria-disabled="true"]`)?this.originElement.focus():e.ownerDocument.querySelector(`bx-toast-core:not(:focus-within) button:not(:disabled)`)?.focus())}paintLight(){if(!this.viewReady||this.destroyed||this.closing)return;let e=this.toastSwipeTarget().nativeElement,t=this.emissionColor(),n=e.closest(`.toast-container`);if(!t||!n||this.destroyed)return;let i=e.getBoundingClientRect(),r=this.progressBar()?.nativeElement,p=r?.getBoundingClientRect(),d=p&&i.width?(p.right-i.left)/i.width:.5;if(Math.abs(d-this.lastLightProgress)<1e-4&&t===this.lastLightColor)return;this.lastLightProgress=d,this.lastLightColor=t,e.style.setProperty(`--bx-toast-light-x`,`${d*100}%`);let S={element:r??e,offsetX:r?1:.5,offsetY:1,excludeElement:e,color:t,z:48,intensity:1.1,radius:360};this.light?this.light.update(S):this.light=this.bxGlassLightingService.register(n,S)}startLightFrame(){!this.viewReady||this.destroyed||this.closing||(this.paintLight(),this.lightFrame===void 0&&this.progressAnimation&&!this.destroyed&&this.isAnimated()&&this.ngZone.runOutsideAngular(()=>{let e=()=>{this.lightFrame=void 0,!(this.destroyed||this.isCollapsing()||!this.isAnimated())&&(this.paintLight(),this.progressAnimation?.playState===`running`&&(this.lightFrame=requestAnimationFrame(e)))};this.lightFrame=requestAnimationFrame(e)}))}stopLightFrame(){this.lightFrame!==void 0&&cancelAnimationFrame(this.lightFrame),this.lightFrame=void 0}startVerticalSwipeDetection(){if(this.isTrackingSwipe||!(typeof window<`u`&&(window.matchMedia(`(pointer: coarse)`).matches||navigator.maxTouchPoints>0)))return;this.isTrackingSwipe=!0;let t=this.toastSwipeTarget().nativeElement,n=t.ownerDocument,i=0,r,p,d=0,S=()=>{let s=r;r=void 0,this.gestureActive.set(!1),s!==void 0&&t.hasPointerCapture(s)&&t.releasePointerCapture(s),this.toastRef.setPauseReason(`gesture`,!1)},y=()=>{r!==void 0&&(S(),this.swipeMotion.retarget([0],!this.isAnimated()))},ee=s=>{if(this.closing||r!==void 0||!s.isPrimary||s.button!==0||s.pointerType!==`touch`)return;let T=s.target;T instanceof Element&&T.closest(`button, a, input, select, textarea, [role="button"], [contenteditable="true"]`)||(d=t.offsetHeight/3,r=s.pointerId,i=s.clientY-this.currentTranslateY(),this.gestureActive.set(!0),p=new js(i,s.timeStamp),this.swipeMotion.track([this.currentTranslateY()]),this.toastRef.setPauseReason(`gesture`,!0),t.setPointerCapture(r))},te=s=>{if(s.pointerId!==r)return;p?.update(s.clientY,s.timeStamp);let T=s.clientY-i,I=this.isBottom()?1:-1,P=Math.max(0,T*I)*I;P&&s.cancelable&&s.preventDefault(),this.swipeMotion.track([P],[p?.velocity(s.timeStamp)??0])},ne=s=>{if(s.pointerId!==r)return;p?.update(s.clientY,s.timeStamp);let T=s.clientY-i,I=p?.velocity(s.timeStamp)??0,P=this.isBottom()?1:-1,Ge=Gy(T,I,d),Fe=T*P>0&&I*P>=0&&Ge*P>d;S(),Fe?this.closeToast(void 0,!0):this.swipeMotion.retarget([0],!this.isAnimated())},O=s=>{s.pointerId===r&&y()},ie=s=>{s.key===`Escape`&&r!==void 0&&(s.preventDefault(),y())},oe=()=>{n.hidden&&y()};this.cancelSwipe=y,t.addEventListener(`pointerdown`,ee,{passive:!1}),t.addEventListener(`pointermove`,te,{passive:!1}),t.addEventListener(`pointerup`,ne),t.addEventListener(`pointercancel`,O),t.addEventListener(`lostpointercapture`,O),n.addEventListener(`keydown`,ie),n.addEventListener(`visibilitychange`,oe),n.defaultView?.addEventListener(`blur`,y),this.swipeCleanupListeners=()=>{y(),this.cancelSwipe=void 0,t.removeEventListener(`pointerdown`,ee),t.removeEventListener(`pointermove`,te),t.removeEventListener(`pointerup`,ne),t.removeEventListener(`pointercancel`,O),t.removeEventListener(`lostpointercapture`,O),n.removeEventListener(`keydown`,ie),n.removeEventListener(`visibilitychange`,oe),n.defaultView?.removeEventListener(`blur`,y)}}stopVerticalSwipeDetection(){this.isTrackingSwipe&&(this.isTrackingSwipe=!1,this.swipeCleanupListeners&&(this.swipeCleanupListeners(),this.swipeCleanupListeners=null))}monitorInputType(){if(this.globalResizeCleanup)return;let e=t=>{let n=t.pointerType===`touch`;n&&!this.isTouchActive?(this.isTouchActive=!0,this.toastRef.setPauseReason(`hover`,!1),this.startVerticalSwipeDetection()):!n&&this.isTouchActive&&(this.isTouchActive=!1,this.stopVerticalSwipeDetection())};window.addEventListener(`pointerdown`,e),this.globalResizeCleanup=()=>window.removeEventListener(`pointerdown`,e)}resetLifetime(){clearTimeout(this.autoCloseTimeout),this.autoCloseTimeout=void 0,this.progressAnimation?.cancel(),this.progressAnimation=void 0,this.progressElement=void 0,this.stopLightFrame();let e=this.config().durationInMs??0;this.lifetimeMs=Number.isFinite(e)?Math.max(0,e):0,this.remainingMs=this.lifetimeMs,this.startTimer()}startTimer(){if(!(!this.viewReady||this.destroyed||this.closing||this.toastRef.paused()||this.lifetimeMs<=0||this.autoCloseTimeout!==void 0)){if(this.remainingMs<=0){this.closeToast();return}this.timerStartTime=Date.now(),this.autoCloseTimeout=setTimeout(()=>{this.autoCloseTimeout=void 0,this.remainingMs=0,this.closeToast()},this.remainingMs)}}pauseTimer(){this.autoCloseTimeout!==void 0&&(clearTimeout(this.autoCloseTimeout),this.autoCloseTimeout=void 0,this.remainingMs=Math.max(0,this.remainingMs-(Date.now()-this.timerStartTime)))}syncProgressAnimation(e){if(e===this.progressElement&&this.progressAnimation||(this.progressAnimation?.cancel(),this.progressAnimation=void 0,this.progressElement=e,!e||this.lifetimeMs<=0))return;let t=Math.max(0,this.remainingMs-(this.autoCloseTimeout===void 0?0:Date.now()-this.timerStartTime)),n=`${t/this.lifetimeMs*100}%`;e.style.width=n,!(typeof e.animate!=`function`||t<=0)&&(this.progressAnimation=e.animate([{width:n},{width:`0%`}],{duration:t,fill:`forwards`}),this.toastRef.paused()&&this.progressAnimation.pause())}finishClose(){this.hasEmittedClose||(this.hasEmittedClose=!0,clearTimeout(this.collapseTimeout),this.toastRef.completeClose(this.closeResult))}static ɵfac=function(t){return new(t||o)};static ɵcmp=G({type:o,selectors:[[`bx-toast-core`]],viewQuery:function(t,n){t&1&&Xt(n.dynamicContainer,$e,5,At)(n.toastSwipeTarget,Xe,5)(n.animatorWrapper,Ze,5)(n.progressBar,Ue,5),t&2&&ft(4)},hostBindings:function(t,n){t&1&&te(`mouseenter`,function(){return n.onMouseEnter()})(`mouseleave`,function(){return n.onMouseLeave()})(`focusin`,function(){return n.onFocusIn()})(`focusout`,function(r){return n.onFocusOut(r)})},decls:8,vars:25,consts:[[`animatorWrapper`,``],[`toastSwipeTarget`,``],[`dynamicContainer`,``],[`progressBar`,``],[1,`toast-animator`],[`bxSurface`,``,1,`toast-wrapper`,3,`bxSurfaceGlassiness`,`bxSurfaceQuality`,`ngClass`],[`type`,`button`,1,`toast-close-button`],[1,`toast-progress-container`,3,`background`],[`type`,`button`,1,`toast-close-button`,3,`click`],[`name`,`x`,`size`,`20`,3,`color`],[1,`toast-progress-container`],[1,`toast-progress-bar`]],template:function(t,n){t&1&&(_(0,`div`,4,0)(2,`div`,5,1),j(4,Ke,2,2,`button`,6),yt(5,null,2),j(7,Je,3,4,`div`,7),D()()),t&2&&(ae(`collapsing`,n.isCollapsing())(`is-bottom`,n.isBottom()),y(2),_e(`touch-action`,n.config().swipeToDismiss!==!1?`pan-x pinch-zoom`:null)(`transform`,n.toastrTransform())(`--%NS%bx-toast-bg`,n.simpleToastSurface())(`--%NS%bx-toast-emission`,n.emissionColor()),ae(`show`,n.isVisible())(`no-animate`,!n.isAnimated())(`is-manipulating`,!n.isSwipingFinished()&&(n.gestureActive()||n.currentTranslateY()!==0))(`has-emission`,!!n.emissionColor()),R$1(`bxSurfaceGlassiness`,n.config().hasDefaultBackground===!1?`off`:n.config().glassiness??`auto`)(`bxSurfaceQuality`,n.config().glassQuality??`enhanced`)(`ngClass`,n.wrapperClasses()),y(2),F(n.showCloseButton()?4:-1),y(3),F(n.config().durationInMs&&n.showProgressBar()&&n.progressBarCssVar()&&n.progressBarBgCssVar()?7:-1))},dependencies:[Rt,ux,Vt],styles:[`
[_nghost-%COMP%] {
  display: block;
  width: 100%;
}
  .toast-container {
  position: fixed;
  z-index: 9999;
  display: flex;
  pointer-events: none;
}
@media (max-width: 768px) {
    .toast-container {
    left: 1rem !important;
    right: 1rem !important;
    width: calc(100% - 2rem);
  }
}
  .toast-container-top-right {
  top: var(--%NS%bx-space-4, 1rem);
  right: var(--%NS%bx-space-4, 1rem);
  flex-direction: column;
  align-items: flex-end;
}
  .toast-container-top-left {
  top: var(--%NS%bx-space-4, 1rem);
  left: var(--%NS%bx-space-4, 1rem);
  flex-direction: column;
  align-items: flex-start;
}
  .toast-container-top-center {
  top: var(--%NS%bx-space-4, 1rem);
  left: 50%;
  transform: translateX(-50%);
  flex-direction: column;
  align-items: center;
}
  .toast-container-bottom-right {
  bottom: var(--%NS%bx-space-4, 1rem);
  right: var(--%NS%bx-space-4, 1rem);
  flex-direction: column-reverse;
  align-items: flex-end;
}
  .toast-container-bottom-left {
  bottom: var(--%NS%bx-space-4, 1rem);
  left: var(--%NS%bx-space-4, 1rem);
  flex-direction: column-reverse;
  align-items: flex-start;
}
  .toast-container-bottom-center {
  bottom: var(--%NS%bx-space-4, 1rem);
  left: 50%;
  transform: translateX(-50%);
  flex-direction: column-reverse;
  align-items: center;
}
@media (max-width: 768px) {
    .toast-container[class*=-top-] {
    top: var(--%NS%bx-space-4, 1rem) !important;
    bottom: auto !important;
    flex-direction: column !important;
    transform: none !important;
    align-items: center !important;
  }
    .toast-container[class*=-bottom-] {
    bottom: var(--%NS%bx-space-4, 1rem) !important;
    top: auto !important;
    flex-direction: column-reverse !important;
    transform: none !important;
    align-items: center !important;
  }
}
.toast-animator[_ngcontent-%COMP%] {
  display: grid;
  grid-template-rows: 1fr;
  transition: grid-template-rows 0.4s linear(0, 0.18 12%, 0.58 32%, 0.87 56%, 0.98 78%, 1), margin 0.4s linear(0, 0.18 12%, 0.58 32%, 0.87 56%, 0.98 78%, 1);
  margin-bottom: var(--%NS%bx-space-4, 1rem);
}
.toast-animator.is-bottom[_ngcontent-%COMP%] {
  margin-bottom: 0;
  margin-top: var(--%NS%bx-space-4, 1rem);
}
.toast-animator.collapsing[_ngcontent-%COMP%] {
  grid-template-rows: 0fr;
  margin-top: 0 !important;
  margin-bottom: 0 !important;
}
.toast-wrapper[_ngcontent-%COMP%] {
  position: relative;
  pointer-events: auto;
  opacity: 0;
  min-height: 0;
  overflow: hidden;
  transition: opacity 0.4s ease-out, transform 0.4s linear(0, 0.22 12%, 0.66 34%, 0.94 58%, 1.012 78%, 1);
}
.toast-wrapper.default-wrapper[_ngcontent-%COMP%] {
  background-color: var(--%NS%bx-toast-bg, var(--%NS%bx-bg-surface));
  color: var(--%NS%bx-toast-text, var(--%NS%bx-text-primary));
  border-radius: var(--%NS%bx-rounded-md, 0.5rem);
  box-shadow: var(--%NS%bx-shadow-toast, 0 4px 12px rgba(0, 0, 0, 0.15));
  width: 24rem;
  max-width: 100%;
}
.toast-wrapper.default-wrapper.no-bg[_ngcontent-%COMP%] {
  background-color: transparent;
}
.toast-wrapper.anim-dir-top[_ngcontent-%COMP%] {
  transform: translateY(-12px) scale(0.985);
}
.toast-wrapper.anim-dir-bottom[_ngcontent-%COMP%] {
  transform: translateY(12px) scale(0.985);
}
.toast-wrapper.show[_ngcontent-%COMP%] {
  opacity: 1;
  transform: translateY(0) scale(1);
}
.toast-wrapper.is-manipulating[_ngcontent-%COMP%] {
  transition-property: opacity;
}
.toast-wrapper.no-animate[_ngcontent-%COMP%] {
  transition: none !important;
}
.toast-wrapper.no-animate[_ngcontent-%COMP%]:not(.is-manipulating) {
  transform: none !important;
}
@media (max-width: 768px) {
  .toast-wrapper.default-wrapper[_ngcontent-%COMP%] {
    width: 100%;
  }
}
.toast-close-button[_ngcontent-%COMP%] {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
}
.toast-progress-container[_ngcontent-%COMP%] {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 4px;
  pointer-events: none;
}
.toast-progress-bar[_ngcontent-%COMP%] {
  height: 100%;
  width: 100%;
  opacity: 0.6;
  transform-origin: left;
}
.toast-wrapper[data-bx-surface][_ngcontent-%COMP%] {
  --%NS%bx-glass-surface: var(--%NS%bx-toast-bg, var(--%NS%bx-bg-surface));
  --%NS%bx-glass-text: var(--%NS%bx-toast-text, var(--%NS%bx-text-primary));
  --%NS%bx-glass-shadow: var(--%NS%bx-shadow-toast, 0 4px 12px rgba(0, 0, 0, 0.15));
  --%NS%bx-glass-min-opacity: 0.8;
  border: var(--%NS%bx-border-width, 1px) var(--%NS%bx-border-style, solid) var(--%NS%bx-border-default);
  border-radius: var(--%NS%bx-rounded-xl, 1rem);
}
.toast-close-button[_ngcontent-%COMP%] {
  width: 2rem;
  height: 2rem;
  border-radius: var(--%NS%bx-rounded-sm, 0.25rem);
  color: inherit;
}
.toast-close-button[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--%NS%bx-border-brand);
  outline-offset: 2px;
}
.toast-wrapper.no-bg[data-bx-surface][_ngcontent-%COMP%] {
  background: transparent !important;
  -webkit-backdrop-filter: none;
  backdrop-filter: none;
  border-color: transparent;
  --%NS%bx-glass-shadow: none;
}
.toast-wrapper.no-bg[data-bx-surface][_ngcontent-%COMP%] {
  --%NS%bx-glass-decoration-opacity: 0;
}
.toast-wrapper.has-emission[_ngcontent-%COMP%]::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  pointer-events: none;
  z-index: -1;
  background:
    radial-gradient(
      ellipse at var(--%NS%bx-toast-light-x, 50%) 100%,
      color-mix(in srgb, var(--%NS%bx-toast-emission) 22%, transparent),
      transparent 65%);
}
.toast-wrapper.has-emission[_ngcontent-%COMP%] {
  --%NS%bx-glass-shadow: var(--%NS%bx-shadow-toast, 0 4px 12px rgba(0, 0, 0, 0.15)), 0 8px 24px -16px color-mix(in srgb, var(--%NS%bx-toast-emission) 55%, transparent);
}
@media (forced-colors: active), (prefers-contrast: more) {
  .toast-wrapper.has-emission[_ngcontent-%COMP%]::after {
    display: none;
  }
  .toast-wrapper.has-emission[_ngcontent-%COMP%] {
    --%NS%bx-glass-shadow: none;
  }
}`],changeDetection:1})};var ke=new N(`TOAST_DATA`);var je=class o{injector=f$1(Ie);applicationRef=f$1($n);environmentInjector=f$1(xt);document=f$1(ue);toastrGlobalSettingsService=f$1(R);toastQueue=[];activeToasts=/* @__PURE__ */ new Set;containers=/* @__PURE__ */ new Map;activePauses=0;isProcessingQueue=!1;queueToast(e,t){let i=new b(this.resolveConfig(t)),r=new Ne,p=()=>{r.unsubscribe(),i.state()!==`closed`&&this.buildAndAttachToast(e,i)};return r.add(i.afterClosed$.pipe(Or(1)).subscribe(()=>{let d=this.toastQueue.indexOf(p);d!==-1&&this.toastQueue.splice(d,1),this.processQueue()})),this.toastQueue.push(p),this.processQueue(),i}queueSuccess(e){return this.queueToast(f,{position:e.position??this.toastrGlobalSettingsService.position(),data:{title:e.title,icon:e.icon,loading:e.loading,loadingLabel:e.loadingLabel,message:e.message,type:`success`},closeButtonColor:`text-success`,progressBarColor:`text-success`,hasDefaultBackground:!0,durationInMs:e.durationInMs??this.toastrGlobalSettingsService.durationInMs(),animate:e.animate??this.toastrGlobalSettingsService.animate(),showProgressBar:e.showProgessBar??this.toastrGlobalSettingsService.showProgressBar(),showCloseButton:e.showCloseButton??this.toastrGlobalSettingsService.showCloseButton()})}queueInfo(e){return this.queueToast(f,{position:e.position??this.toastrGlobalSettingsService.position(),data:{title:e.title,icon:e.icon,loading:e.loading,loadingLabel:e.loadingLabel,message:e.message,type:`info`},closeButtonColor:`text-info`,progressBarColor:`text-info`,hasDefaultBackground:!0,durationInMs:e.durationInMs??this.toastrGlobalSettingsService.durationInMs(),animate:e.animate??this.toastrGlobalSettingsService.animate(),showProgressBar:e.showProgessBar??this.toastrGlobalSettingsService.showProgressBar(),showCloseButton:e.showCloseButton??this.toastrGlobalSettingsService.showCloseButton()})}queueWarning(e){return this.queueToast(f,{position:e.position??this.toastrGlobalSettingsService.position(),data:{title:e.title,icon:e.icon,loading:e.loading,loadingLabel:e.loadingLabel,message:e.message,type:`warn`},closeButtonColor:`text-warn`,progressBarColor:`text-warn`,hasDefaultBackground:!0,durationInMs:e.durationInMs??this.toastrGlobalSettingsService.durationInMs(),animate:e.animate??this.toastrGlobalSettingsService.animate(),showProgressBar:e.showProgessBar??this.toastrGlobalSettingsService.showProgressBar(),showCloseButton:e.showCloseButton??this.toastrGlobalSettingsService.showCloseButton()})}queueDanger(e){return this.queueToast(f,{position:e.position??this.toastrGlobalSettingsService.position(),data:{title:e.title,icon:e.icon,loading:e.loading,loadingLabel:e.loadingLabel,message:e.message,type:`danger`},closeButtonColor:`text-danger`,progressBarColor:`text-danger`,hasDefaultBackground:!0,durationInMs:e.durationInMs??this.toastrGlobalSettingsService.durationInMs(),animate:e.animate??this.toastrGlobalSettingsService.animate(),showProgressBar:e.showProgessBar??this.toastrGlobalSettingsService.showProgressBar(),showCloseButton:e.showCloseButton??this.toastrGlobalSettingsService.showCloseButton()})}processQueue(){if(!(this.isProcessingQueue||this.activePauses>0)){this.isProcessingQueue=!0;try{for(;this.activePauses===0&&this.activeToasts.size<this.toastrGlobalSettingsService.maxOpened()&&this.toastQueue.length>0;)this.toastQueue.shift()?.()}finally{this.isProcessingQueue=!1}}}buildAndAttachToast(e,t){let n=Ie.create({providers:[{provide:ke,useValue:t.config().data},{provide:b,useValue:t}],parent:this.injector}),i=of(Y,{environmentInjector:this.environmentInjector,elementInjector:n}),r=of(e,{environmentInjector:this.environmentInjector,elementInjector:n}),p=new Ne,d=t.paused();if(i.instance.componentRef=r,t.state()===`closed`){i.destroy();return}this.activeToasts.add(i),d&&this.activePauses++,p.add(t.onPause$.subscribe(()=>{d||(d=!0,this.activePauses++)})),p.add(t.onResume$.subscribe(()=>{d&&(d=!1,this.activePauses=Math.max(0,this.activePauses-1),this.activePauses===0&&this.processQueue())})),p.add(t.afterClosed$.pipe(Or(1)).subscribe(()=>{d&&(d=!1,this.activePauses=Math.max(0,this.activePauses-1)),this.finalizeToast(i)})),i.onDestroy(()=>{t.completeClose(),p.unsubscribe()}),t.attach(S=>i.instance.closeToast(S)),this.applicationRef.attachView(i.hostView),this.getContainer(t.config().position??`top-right`).appendChild(i.location.nativeElement),r.instance.onToastInit?.()}finalizeToast(e){this.activeToasts.delete(e)&&(this.applicationRef.detachView(e.hostView),e.location.nativeElement.remove(),e.hostView.destroyed||e.destroy(),this.processQueue())}getContainer(e){if(this.containers.has(e))return this.containers.get(e);let t=this.document.createElement(`div`);return t.classList.add(`toast-container`,`toast-container-${e}`),this.document.body.appendChild(t),this.containers.set(e,t),t}resolveConfig(e){let t=e?.animate??this.toastrGlobalSettingsService.animate();return s(r({},e),{position:e?.position??this.toastrGlobalSettingsService.position(),glassiness:e?.glassiness??this.toastrGlobalSettingsService.glassiness(),glassQuality:e?.glassQuality??this.toastrGlobalSettingsService.glassQuality(),animate:t,wrapperClass:e?.wrapperClass??this.toastrGlobalSettingsService.wrapperClass(),durationInMs:e?.durationInMs??this.toastrGlobalSettingsService.durationInMs(),swipeToDismiss:e?.swipeToDismiss??this.toastrGlobalSettingsService.swipeToDismiss(),showCloseButton:e?.showCloseButton??this.toastrGlobalSettingsService.showCloseButton(),closeLabel:e?.closeLabel??this.toastrGlobalSettingsService.closeLabel(),closeButtonColor:e?.closeButtonColor??this.toastrGlobalSettingsService.closeButtonColor(),showProgressBar:e?.showProgressBar??this.toastrGlobalSettingsService.showProgressBar(),progressBarColor:e?.progressBarColor??this.toastrGlobalSettingsService?.progressBarColor()})}static ɵfac=function(t){return new(t||o)};static ɵprov=ie({token:o,factory:o.ɵfac,providedIn:`root`})};export{R as n,je as r,H as t};