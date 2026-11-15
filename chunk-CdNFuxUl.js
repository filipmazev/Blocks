import{Y as on}from"./chunk-DE1qZ0OS.js";import{t as U}from"./chunk-1rrlZ2Ss.js";import{$a as tm,$i as mQ,$r as fa,Ar as ce,Ci as i1,Cn as V,Cr as bn,En as W$1,Et as Me,Ga as se,Gi as le,Gr as el,I as Fr,In as XT,Kr as em,Lo as yt,Lt as Os,Nr as d4,Oi as id,Oo as xe,Po as ye,Pt as OD,Ri as kN,Sr as ba,St as Ly,Ta as pr,To as xQ,Va as s1,Vn as Xl,Xt as Ql,Yr as et$1,_n as U$1,_o as vt,ai as gT,ar as Zy,b as Cy,ba as ou,cn as Sk,ct as K,da as nk,di as gt,en as RD,gi as hZ,i as $n,it as Jc,ji as jD,jn as Wo,k as Ey,ln as T,mo as vg,ni as fr,nn as Ro,no as tt$1,oi as gZ,qi as m,ri as gA,rt as Jb,ta as mZ,wr as br,xn as Ul,xr as bT,xt as Lr,yr as as}from"./chunk-CVY9_LoB.js";import{n as s,t as r}from"./chunk-C9yOwMO6.js";var R=class i{position=W$1(`top-right`);animate=W$1(!0);wrapperClass=W$1(void 0);durationInMs=W$1(5e3);swipeToDismiss=W$1(!0);maxOpened=W$1(4);glassiness=W$1(`auto`);glassQuality=W$1(`enhanced`);closeLabel=W$1(`Close toast`);showCloseButton=W$1(!0);closeButtonColor=W$1(`text-primary`);showProgressBar=W$1(!0);progressBarColor=W$1(`text-primary`);update(e){e.position!==void 0&&this.position.set(e.position),e.animate!==void 0&&this.animate.set(e.animate),e.wrapperClass!==void 0&&this.wrapperClass.set(e.wrapperClass),e.durationInMs!==void 0&&this.durationInMs.set(e.durationInMs),e.swipeToDismiss!==void 0&&this.swipeToDismiss.set(e.swipeToDismiss),e.maxOpened!==void 0&&this.maxOpened.set(e.maxOpened),e.glassiness!==void 0&&this.glassiness.set(e.glassiness),e.glassQuality!==void 0&&this.glassQuality.set(e.glassQuality),e.closeLabel!==void 0&&this.closeLabel.set(e.closeLabel),e.showCloseButton!==void 0&&this.showCloseButton.set(e.showCloseButton),e.closeButtonColor!==void 0&&this.closeButtonColor.set(e.closeButtonColor),e.showProgressBar!==void 0&&this.showProgressBar.set(e.showProgressBar),e.progressBarColor!==void 0&&this.progressBarColor.set(e.progressBarColor)}static ɵfac=function(t){return new(t||i)};static ɵprov=V({token:i,factory:i.ɵfac,providedIn:`root`})};var b=class{configuration;lifecycle=W$1(`queued`);pauseReasons=/* @__PURE__ */ new Set;isPaused=W$1(!1);afterClosedSubject=new xe;pauseSubject=new xe;resumeSubject=new xe;durationSubject=new xe;config;data=K(()=>this.config().data);state=this.lifecycle.asReadonly();paused=this.isPaused.asReadonly();afterClosed$=this.afterClosedSubject.asObservable();onPause$=this.pauseSubject.asObservable();onResume$=this.resumeSubject.asObservable();durationChanges$=this.durationSubject.asObservable();closeHandler;constructor(e={}){this.configuration=W$1(r({},e)),this.config=this.configuration.asReadonly()}patch(e){this.state()===`closing`||this.state()===`closed`||(this.configuration.update(t=>s(r({},t),{data:e.data===void 0?t.data:this.patchData(t.data,e.data),durationInMs:e.durationInMs===void 0?t.durationInMs:Math.max(0,Number.isFinite(e.durationInMs)?e.durationInMs:0),closeLabel:e.closeLabel??t.closeLabel,showCloseButton:e.showCloseButton??t.showCloseButton,closeButtonColor:e.closeButtonColor===void 0?t.closeButtonColor:e.closeButtonColor??void 0,showProgressBar:e.showProgressBar??t.showProgressBar,progressBarColor:e.progressBarColor===void 0?t.progressBarColor:e.progressBarColor??void 0,wrapperClass:e.wrapperClass===void 0?t.wrapperClass:e.wrapperClass??void 0,hasDefaultBackground:e.hasDefaultBackground??t.hasDefaultBackground,glassiness:e.glassiness??t.glassiness,glassQuality:e.glassQuality??t.glassQuality})),e.durationInMs!==void 0&&this.durationSubject.next(this.config().durationInMs??0))}close(e){this.state()===`closing`||this.state()===`closed`||(this.beginClose(),this.closeHandler?this.closeHandler(e):this.completeClose(e))}pause(){this.setPauseReason(`explicit`,!0)}resume(){this.setPauseReason(`explicit`,!1)}setPauseReason(e,t){if(this.state()===`closing`||this.state()===`closed`)return;t?this.pauseReasons.add(e):this.pauseReasons.delete(e);let n=this.pauseReasons.size>0;n!==this.paused()&&(this.isPaused.set(n),n?this.pauseSubject.next():this.resumeSubject.next())}attach(e){this.state()===`queued`&&(this.closeHandler=e,this.lifecycle.set(`open`))}beginClose(){this.state()!==`closed`&&this.lifecycle.set(`closing`)}completeClose(e){this.state()!==`closed`&&(this.lifecycle.set(`closed`),this.closeHandler=void 0,this.afterClosedSubject.next(e),this.afterClosedSubject.complete(),this.pauseSubject.complete(),this.resumeSubject.complete(),this.durationSubject.complete())}patchData(e,t){if(!this.isPlainObject(t))return t;let n=Object.fromEntries(Object.entries(t).filter(([,o])=>o!==void 0));return r(r({},this.isPlainObject(e)?e:{}),n)}isPlainObject(e){if(e===null||typeof e!=`object`)return!1;let t=Object.getPrototypeOf(e);return t===Object.prototype||t===null}};var H=class i{toastRef=m(b);toast=this.toastRef;data=this.toast.data;onToastInit(){}close(e){this.toast?.close(e)}static ɵfac=function(t){return new(t||i)};static ɵprov=V({token:i,factory:i.ɵfac})};function He(i,e){if(i&1&&Cy(0,`bx-loading-spinner`,6),i&2){let t=Ql(3),n=i1(0);fa(`size`,t.iconSize())(`label`,n?.loadingLabel??`Loading`)}}function We(i,e){if(i&1&&Cy(0,`bx-icon`,7),i&2){let t=Ql().$implicit,n=Ql(2);fa(`name`,t.name)(`size`,n.iconSize())(`color`,t.color)(`bgColor`,t.bgColor)(`strokeWidth`,t.strokeWidth)}}function Ye(i,e){if(i&1&&bT(0,He,1,2,`bx-loading-spinner`,6)(1,We,1,5,`bx-icon`,7),i&2){let t=e.$implicit;gT(t===`loading`?0:t?1:-1)}}function $e(i,e){if(i&1&&(Os(0,`span`,4)(1,`bx-visual-transition`,5),Ey(2,Ye,2,1,`ng-template`),ba()()),i&2){let t=Ql(),n=i1(0);tm(`min-inline-size`,t.iconSize(),`px`)(`min-block-size`,t.iconSize(),`px`),Ul(),fa(`value`,n?.loading?`loading`:n?.icon)}}function Xe(i,e){if(i&1&&(Os(0,`h4`,8),XT(1),ba(),Os(2,`p`,9),XT(3),ba()),i&2){let t=Ql();Ul(),Zy(t.resolvedTitle()),Ul(2),Zy(t.resolvedMessage())}}function Ze(i,e){if(i&1&&(Os(0,`p`,3),XT(1),ba()),i&2){let t=Ql();Ul(),Zy(t.resolvedMessage())}}var f=class i extends H{i18n=m(xQ,{optional:!0});resolvedTitle=K(()=>mQ(this.data()?.title??void 0,this.i18n));resolvedMessage=K(()=>mQ(this.data()?.message,this.i18n));iconSize=K(()=>{let e=Number(this.data()?.icon?.size??24);return Number.isFinite(e)&&e>0?e:24});static ɵfac=(()=>{let e;return function(n){return(e||(e=bn(i)))(n||i)}})();static ɵcmp=$n({type:i,selectors:[[`bx-simple-toast`]],features:[vt],decls:6,vars:4,consts:[[1,`simple-toast`,3,`ngClass`],[1,`simple-toast-icon-area`,3,`min-inline-size`,`min-block-size`],[`aria-live`,`polite`,`aria-atomic`,`true`,1,`simple-toast-content`],[1,`simple-toast-message`,`large-message`],[1,`simple-toast-icon-area`],[3,`value`],[3,`size`,`label`],[3,`name`,`size`,`color`,`bgColor`,`strokeWidth`],[1,`simple-toast-title`],[1,`simple-toast-message`]],template:function(t,n){if(t&1&&(nk(0),Os(1,`div`,0),bT(2,$e,3,5,`span`,1),Os(3,`div`,2),bT(4,Xe,4,2)(5,Ze,2,1,`p`,3),ba()()),t&2){let o=s1(n.data());Ul(),fa(`ngClass`,o?.type??`info`),Ul(),gT(o?.icon||o?.loading!==void 0?2:-1),Ul(2),gT(n.resolvedTitle()?4:5)}},dependencies:[gA,U,on,OD],styles:[`
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
}`]})};var Ue=[`dynamicContainer`];var Ke=[`toastSwipeTarget`];var Je=[`animatorWrapper`];var qe=[`progressBar`];function et(i,e){if(i&1){let t=Jb();Os(0,`button`,8),br(`click`,function(){Jc(t);let o=Ql();return el(o.closeToast())}),Cy(1,`bx-icon`,9),ba()}if(i&2){let t=Ql();Ro(`aria-label`,t.resolvedCloseLabel()),Ul(),fa(`color`,t.closeButtonColor())}}function tt(i,e){if(i&1&&(Os(0,`div`,10),Cy(1,`div`,11,3),ba()),i&2){let t=Ql();tm(`background`,t.progressBarBgCssVar()),Ul(),tm(`background`,t.progressBarCssVar())}}var W=class i{i18n=m(xQ,{optional:!0});elementRef=m(ye);themingService=m(ou);ngZone=m(ce);platformId=m(et$1);bxGlassLightingService=m(jD);bxA11yService=m(Fr);toastrGlobalSettingsService=m(R);toastRef=m(b);swipeMotion=Wo([0],([e])=>this.currentTranslateY.set(e));gestureActive=W$1(!1);resolvedCloseLabel=K(()=>mQ(this.config().closeLabel??`Close toast`,this.i18n));showCloseButton=K(()=>this.config().showCloseButton??this.toastrGlobalSettingsService.showCloseButton());closeButtonColor=K(()=>this.config().closeButtonColor??this.toastrGlobalSettingsService.closeButtonColor());showProgressBar=K(()=>this.config().showProgressBar===!1?!1:this.config().showProgressBar===!0||this.config().progressBarColor!==void 0);progressBarColor=K(()=>{if(!this.showProgressBar())return;let e=this.config().progressBarColor??this.toastrGlobalSettingsService.progressBarColor();return mZ(e)?this.themingService.activeTheme()===`dark`?e.dark??e.light:e.light:e});progressBarCssVar=K(()=>{let e=this.progressBarColor();return e?gZ(e):void 0});progressBarBgCssVar=K(()=>{let e=this.progressBarColor();return e?gZ(hZ(e)):void 0});isAnimated=K(()=>!this.bxA11yService.isReducedMotion()&&this.config().animate!==!1);isBottom=K(()=>(this.config().position??this.toastrGlobalSettingsService.position()).includes(`bottom`));simpleToastSurface=K(()=>{let e=this.componentRef?.instance;return e instanceof f?`color-mix(in srgb, var(--bx-bg-surface) 92%, var(--bx-bg-${e.data()?.type??`info`}))`:null});emissionColor=K(()=>{let e=this.componentRef?.instance;return e instanceof f?`var(--bx-text-${e.data()?.type??`info`})`:this.progressBarCssVar()});wrapperClasses=K(()=>{return`${(this.config().position??`top-right`).includes(`top`)?`anim-dir-top`:`anim-dir-bottom`} ${this.config().wrapperClass??`default-wrapper`}${this.config().hasDefaultBackground===!1?` no-bg`:``}`});toastrTransform=K(()=>{let e=(this.config().position??`top-right`).includes(`top`);return this.isSwipingFinished()?e?`translateY(-150px)`:`translateY(150px)`:this.currentTranslateY()!==0?`translateY(${this.currentTranslateY()}px)`:null});dynamicContainer=d4.required(`dynamicContainer`,{read:pr});toastSwipeTarget=d4.required(`toastSwipeTarget`);animatorWrapper=d4.required(`animatorWrapper`);progressBar=d4(`progressBar`);config=this.toastRef.config;isVisible=W$1(!1);currentTranslateY=W$1(0);isSwipingFinished=W$1(!1);isCollapsing=W$1(!1);componentRef;originElement;cancelSwipe;light;lightFrame;lastLightProgress=-1;lastLightColor;destroyed=!1;progressAnimation;subs=new Me;remainingMs=0;timerStartTime=0;lifetimeMs=0;viewReady=!1;closing=!1;progressElement;entranceTimeout;collapseTimeout;closeResult;isTrackingSwipe=!1;isTouchActive=!1;autoCloseTimeout;hasEmittedClose=!1;cleanupListeners=[];swipeCleanupListeners=null;globalResizeCleanup=null;constructor(){tt$1(()=>{this.isAnimated()||this.swipeMotion.retarget([this.currentTranslateY()],!0)}),Sk(()=>{let e=this.progressBar()?.nativeElement,t=this.isAnimated(),n=this.toastRef.state();this.config(),this.emissionColor(),le(()=>{if(!(this.destroyed||!this.viewReady)){if(n===`closing`){t||this.finishClose();return}this.syncProgressAnimation(e),this.lastLightProgress=-1,t&&!this.toastRef.paused()?this.startLightFrame():(this.stopLightFrame(),this.paintLight())}})})}ngOnInit(){this.subs.add(this.toastRef.durationChanges$.subscribe(()=>{this.viewReady&&!this.closing&&this.resetLifetime()})),this.subs.add(this.toastRef.onPause$.subscribe(()=>{this.pauseTimer(),this.progressAnimation?.pause(),this.paintLight(),this.stopLightFrame()})),this.subs.add(this.toastRef.onResume$.subscribe(()=>{this.startTimer(),this.progressAnimation?.play(),this.startLightFrame()}))}ngAfterViewInit(){if(this.dynamicContainer().insert(this.componentRef.hostView),this.viewReady=!0,this.originElement=this.elementRef.nativeElement.ownerDocument.activeElement,!yt(this.platformId))return;this.entranceTimeout=setTimeout(()=>{!this.destroyed&&!this.closing&&this.isVisible.set(!0)},10),this.config().swipeToDismiss!==!1&&(this.startVerticalSwipeDetection(),this.monitorInputType());let e=this.animatorWrapper().nativeElement,t=n=>{n.target!==e||n.propertyName!==`grid-template-rows`||this.isCollapsing()&&!this.hasEmittedClose&&(this.hasEmittedClose=!0,this.toastRef.completeClose(this.closeResult))};e.addEventListener(`transitionend`,t),this.cleanupListeners.push(()=>e.removeEventListener(`transitionend`,t)),this.resetLifetime()}ngOnDestroy(){this.destroyed=!0,this.stopLightFrame(),this.light?.destroy(),clearTimeout(this.autoCloseTimeout),clearTimeout(this.entranceTimeout),clearTimeout(this.collapseTimeout),this.stopVerticalSwipeDetection(),this.swipeMotion.destroy(),this.globalResizeCleanup?.(),this.cleanupListeners.forEach(e=>e()),this.cleanupListeners=[],this.progressAnimation?.cancel(),this.subs.unsubscribe(),this.componentRef&&!this.componentRef.hostView.destroyed&&this.componentRef.destroy(),this.toastRef.completeClose(this.closeResult)}closeToast(e,t=!1){if(!(this.destroyed||this.closing)){if(this.restoreFocus(),this.cancelSwipe?.(),this.closing=!0,this.toastRef.beginClose(),this.closeResult=e,clearTimeout(this.autoCloseTimeout),clearTimeout(this.entranceTimeout),this.autoCloseTimeout=void 0,this.progressAnimation?.pause(),this.stopLightFrame(),this.light?.destroy(),this.light=void 0,!this.viewReady||!this.isVisible()||!this.isAnimated()){this.finishClose();return}this.isVisible.set(!1),this.isCollapsing.set(!0),t&&this.isSwipingFinished.set(!0),this.collapseTimeout=setTimeout(()=>this.finishClose(),450)}}onMouseEnter(){!this.isTouchActive&&!this.closing&&this.toastRef.setPauseReason(`hover`,!0)}onMouseLeave(){this.closing||this.toastRef.setPauseReason(`hover`,!1)}onFocusIn(){this.toastRef.setPauseReason(`focus`,!0)}onFocusOut(e){(!(e.relatedTarget instanceof Node)||!this.elementRef.nativeElement.contains(e.relatedTarget))&&this.toastRef.setPauseReason(`focus`,!1)}restoreFocus(){let e=this.elementRef.nativeElement;e.contains(e.ownerDocument.activeElement)&&(this.originElement?.isConnected&&!this.originElement.closest(`[inert], :disabled, [aria-disabled="true"]`)?this.originElement.focus():e.ownerDocument.querySelector(`bx-toast-core:not(:focus-within) button:not(:disabled)`)?.focus())}paintLight(){if(!this.viewReady||this.destroyed||this.closing)return;let e=this.toastSwipeTarget().nativeElement,t=this.emissionColor(),n=e.closest(`.toast-container`);if(!t||!n||this.destroyed)return;let o=e.getBoundingClientRect(),r=this.progressBar()?.nativeElement,p=r?.getBoundingClientRect(),d=p&&o.width?(p.right-o.left)/o.width:.5;if(Math.abs(d-this.lastLightProgress)<1e-4&&t===this.lastLightColor)return;this.lastLightProgress=d,this.lastLightColor=t,e.style.setProperty(`--bx-toast-light-x`,`${d*100}%`);let C={element:r??e,offsetX:r?1:.5,offsetY:1,excludeElement:e,color:t,z:48,intensity:1.1,radius:360};this.light?this.light.update(C):this.light=this.bxGlassLightingService.register(n,C)}startLightFrame(){!this.viewReady||this.destroyed||this.closing||(this.paintLight(),this.lightFrame===void 0&&this.progressAnimation&&!this.destroyed&&this.isAnimated()&&this.ngZone.runOutsideAngular(()=>{let e=()=>{this.lightFrame=void 0,!(this.destroyed||this.isCollapsing()||!this.isAnimated())&&(this.paintLight(),this.progressAnimation?.playState===`running`&&(this.lightFrame=requestAnimationFrame(e)))};this.lightFrame=requestAnimationFrame(e)}))}stopLightFrame(){this.lightFrame!==void 0&&cancelAnimationFrame(this.lightFrame),this.lightFrame=void 0}startVerticalSwipeDetection(){if(this.isTrackingSwipe||!(typeof window<`u`&&(window.matchMedia(`(pointer: coarse)`).matches||navigator.maxTouchPoints>0)))return;this.isTrackingSwipe=!0;let t=this.toastSwipeTarget().nativeElement,n=t.ownerDocument,o=0,r,p,d=0,C=()=>{let s=r;r=void 0,this.gestureActive.set(!1),s!==void 0&&t.hasPointerCapture(s)&&t.releasePointerCapture(s),this.toastRef.setPauseReason(`gesture`,!1)},S=()=>{r!==void 0&&(C(),this.swipeMotion.retarget([0],!this.isAnimated()))},ee=s=>{if(this.closing||r!==void 0||!s.isPrimary||s.button!==0||s.pointerType!==`touch`)return;let y=s.target;y instanceof Element&&y.closest(`button, a, input, select, textarea, [role="button"], [contenteditable="true"]`)||(d=t.offsetHeight/3,r=s.pointerId,o=s.clientY-this.currentTranslateY(),this.gestureActive.set(!0),p=new vg(o,s.timeStamp),this.swipeMotion.track([this.currentTranslateY()]),this.toastRef.setPauseReason(`gesture`,!0),t.setPointerCapture(r))},te=s=>{if(s.pointerId!==r)return;p?.update(s.clientY,s.timeStamp);let y=s.clientY-o,_=this.isBottom()?1:-1,M=Math.max(0,y*_)*_;M&&s.cancelable&&s.preventDefault(),this.swipeMotion.track([M],[p?.velocity(s.timeStamp)??0])},ne=s=>{if(s.pointerId!==r)return;p?.update(s.clientY,s.timeStamp);let y=s.clientY-o,_=p?.velocity(s.timeStamp)??0,M=this.isBottom()?1:-1,Ve=kN(y,_,d),Qe=y*M>0&&_*M>=0&&Ve*M>d;C(),Qe?this.closeToast(void 0,!0):this.swipeMotion.retarget([0],!this.isAnimated())},O=s=>{s.pointerId===r&&S()},ie=s=>{s.key===`Escape`&&r!==void 0&&(s.preventDefault(),S())},oe=()=>{n.hidden&&S()};this.cancelSwipe=S,t.addEventListener(`pointerdown`,ee,{passive:!1}),t.addEventListener(`pointermove`,te,{passive:!1}),t.addEventListener(`pointerup`,ne),t.addEventListener(`pointercancel`,O),t.addEventListener(`lostpointercapture`,O),n.addEventListener(`keydown`,ie),n.addEventListener(`visibilitychange`,oe),n.defaultView?.addEventListener(`blur`,S),this.swipeCleanupListeners=()=>{S(),this.cancelSwipe=void 0,t.removeEventListener(`pointerdown`,ee),t.removeEventListener(`pointermove`,te),t.removeEventListener(`pointerup`,ne),t.removeEventListener(`pointercancel`,O),t.removeEventListener(`lostpointercapture`,O),n.removeEventListener(`keydown`,ie),n.removeEventListener(`visibilitychange`,oe),n.defaultView?.removeEventListener(`blur`,S)}}stopVerticalSwipeDetection(){this.isTrackingSwipe&&(this.isTrackingSwipe=!1,this.swipeCleanupListeners&&(this.swipeCleanupListeners(),this.swipeCleanupListeners=null))}monitorInputType(){if(this.globalResizeCleanup)return;let e=t=>{let n=t.pointerType===`touch`;n&&!this.isTouchActive?(this.isTouchActive=!0,this.toastRef.setPauseReason(`hover`,!1),this.startVerticalSwipeDetection()):!n&&this.isTouchActive&&(this.isTouchActive=!1,this.stopVerticalSwipeDetection())};window.addEventListener(`pointerdown`,e),this.globalResizeCleanup=()=>window.removeEventListener(`pointerdown`,e)}resetLifetime(){clearTimeout(this.autoCloseTimeout),this.autoCloseTimeout=void 0,this.progressAnimation?.cancel(),this.progressAnimation=void 0,this.progressElement=void 0,this.stopLightFrame();let e=this.config().durationInMs??0;this.lifetimeMs=Number.isFinite(e)?Math.max(0,e):0,this.remainingMs=this.lifetimeMs,this.startTimer()}startTimer(){if(!(!this.viewReady||this.destroyed||this.closing||this.toastRef.paused()||this.lifetimeMs<=0||this.autoCloseTimeout!==void 0)){if(this.remainingMs<=0){this.closeToast();return}this.timerStartTime=Date.now(),this.autoCloseTimeout=setTimeout(()=>{this.autoCloseTimeout=void 0,this.remainingMs=0,this.closeToast()},this.remainingMs)}}pauseTimer(){this.autoCloseTimeout!==void 0&&(clearTimeout(this.autoCloseTimeout),this.autoCloseTimeout=void 0,this.remainingMs=Math.max(0,this.remainingMs-(Date.now()-this.timerStartTime)))}syncProgressAnimation(e){if(e===this.progressElement&&this.progressAnimation||(this.progressAnimation?.cancel(),this.progressAnimation=void 0,this.progressElement=e,!e||this.lifetimeMs<=0))return;let t=Math.max(0,this.remainingMs-(this.autoCloseTimeout===void 0?0:Date.now()-this.timerStartTime)),n=`${t/this.lifetimeMs*100}%`;e.style.width=n,!(typeof e.animate!=`function`||t<=0)&&(this.progressAnimation=e.animate([{width:n},{width:`0%`}],{duration:t,fill:`forwards`}),this.toastRef.paused()&&this.progressAnimation.pause())}finishClose(){this.hasEmittedClose||(this.hasEmittedClose=!0,clearTimeout(this.collapseTimeout),this.toastRef.completeClose(this.closeResult))}static ɵfac=function(t){return new(t||i)};static ɵcmp=$n({type:i,selectors:[[`bx-toast-core`]],viewQuery:function(t,n){t&1&&Ly(n.dynamicContainer,Ue,5,pr)(n.toastSwipeTarget,Ke,5)(n.animatorWrapper,Je,5)(n.progressBar,qe,5),t&2&&em(4)},hostBindings:function(t,n){t&1&&br(`mouseenter`,function(){return n.onMouseEnter()})(`mouseleave`,function(){return n.onMouseLeave()})(`focusin`,function(){return n.onFocusIn()})(`focusout`,function(r){return n.onFocusOut(r)})},decls:8,vars:25,consts:[[`animatorWrapper`,``],[`toastSwipeTarget`,``],[`dynamicContainer`,``],[`progressBar`,``],[1,`toast-animator`],[`bxSurface`,``,1,`toast-wrapper`,3,`bxSurfaceGlassiness`,`bxSurfaceQuality`,`ngClass`],[`type`,`button`,1,`toast-close-button`],[1,`toast-progress-container`,3,`background`],[`type`,`button`,1,`toast-close-button`,3,`click`],[`name`,`x`,`size`,`20`,3,`color`],[1,`toast-progress-container`],[1,`toast-progress-bar`]],template:function(t,n){t&1&&(Os(0,`div`,4,0)(2,`div`,5,1),bT(4,et,2,2,`button`,6),Xl(5,null,2),bT(7,tt,3,4,`div`,7),ba()()),t&2&&(Lr(`collapsing`,n.isCollapsing())(`is-bottom`,n.isBottom()),Ul(2),tm(`touch-action`,n.config().swipeToDismiss!==!1?`pan-x pinch-zoom`:null)(`transform`,n.toastrTransform())(`--%NS%bx-toast-bg`,n.simpleToastSurface())(`--%NS%bx-toast-emission`,n.emissionColor()),Lr(`show`,n.isVisible())(`no-animate`,!n.isAnimated())(`is-manipulating`,!n.isSwipingFinished()&&(n.gestureActive()||n.currentTranslateY()!==0))(`has-emission`,!!n.emissionColor()),fa(`bxSurfaceGlassiness`,n.config().hasDefaultBackground===!1?`off`:n.config().glassiness??`auto`)(`bxSurfaceQuality`,n.config().glassQuality??`enhanced`)(`ngClass`,n.wrapperClasses()),Ul(2),gT(n.showCloseButton()?4:-1),Ul(3),gT(n.config().durationInMs&&n.showProgressBar()&&n.progressBarCssVar()&&n.progressBarBgCssVar()?7:-1))},dependencies:[RD,gA,U],styles:[`
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
}`],changeDetection:1})};var Ge=new T(`TOAST_DATA`);var Fe=class i{injector=m(se);applicationRef=m(fr);environmentInjector=m(gt);document=m(U$1);toastrGlobalSettingsService=m(R);toastQueue=[];activeToasts=/* @__PURE__ */ new Set;containers=/* @__PURE__ */ new Map;activePauses=0;isProcessingQueue=!1;queueToast(e,t){let o=new b(this.resolveConfig(t)),r=new Me,p=()=>{r.unsubscribe(),o.state()!==`closed`&&this.buildAndAttachToast(e,o)};return r.add(o.afterClosed$.pipe(as(1)).subscribe(()=>{let d=this.toastQueue.indexOf(p);d!==-1&&this.toastQueue.splice(d,1),this.processQueue()})),this.toastQueue.push(p),this.processQueue(),o}queueSuccess(e){return this.queueToast(f,{position:e.position??this.toastrGlobalSettingsService.position(),data:{title:e.title,icon:e.icon,loading:e.loading,loadingLabel:e.loadingLabel,message:e.message,type:`success`},closeButtonColor:`text-success`,progressBarColor:`text-success`,hasDefaultBackground:!0,durationInMs:e.durationInMs??this.toastrGlobalSettingsService.durationInMs(),animate:e.animate??this.toastrGlobalSettingsService.animate(),showProgressBar:e.showProgessBar??this.toastrGlobalSettingsService.showProgressBar(),showCloseButton:e.showCloseButton??this.toastrGlobalSettingsService.showCloseButton()})}queueInfo(e){return this.queueToast(f,{position:e.position??this.toastrGlobalSettingsService.position(),data:{title:e.title,icon:e.icon,loading:e.loading,loadingLabel:e.loadingLabel,message:e.message,type:`info`},closeButtonColor:`text-info`,progressBarColor:`text-info`,hasDefaultBackground:!0,durationInMs:e.durationInMs??this.toastrGlobalSettingsService.durationInMs(),animate:e.animate??this.toastrGlobalSettingsService.animate(),showProgressBar:e.showProgessBar??this.toastrGlobalSettingsService.showProgressBar(),showCloseButton:e.showCloseButton??this.toastrGlobalSettingsService.showCloseButton()})}queueWarning(e){return this.queueToast(f,{position:e.position??this.toastrGlobalSettingsService.position(),data:{title:e.title,icon:e.icon,loading:e.loading,loadingLabel:e.loadingLabel,message:e.message,type:`warn`},closeButtonColor:`text-warn`,progressBarColor:`text-warn`,hasDefaultBackground:!0,durationInMs:e.durationInMs??this.toastrGlobalSettingsService.durationInMs(),animate:e.animate??this.toastrGlobalSettingsService.animate(),showProgressBar:e.showProgessBar??this.toastrGlobalSettingsService.showProgressBar(),showCloseButton:e.showCloseButton??this.toastrGlobalSettingsService.showCloseButton()})}queueDanger(e){return this.queueToast(f,{position:e.position??this.toastrGlobalSettingsService.position(),data:{title:e.title,icon:e.icon,loading:e.loading,loadingLabel:e.loadingLabel,message:e.message,type:`danger`},closeButtonColor:`text-danger`,progressBarColor:`text-danger`,hasDefaultBackground:!0,durationInMs:e.durationInMs??this.toastrGlobalSettingsService.durationInMs(),animate:e.animate??this.toastrGlobalSettingsService.animate(),showProgressBar:e.showProgessBar??this.toastrGlobalSettingsService.showProgressBar(),showCloseButton:e.showCloseButton??this.toastrGlobalSettingsService.showCloseButton()})}processQueue(){if(!(this.isProcessingQueue||this.activePauses>0)){this.isProcessingQueue=!0;try{for(;this.activePauses===0&&this.activeToasts.size<this.toastrGlobalSettingsService.maxOpened()&&this.toastQueue.length>0;)this.toastQueue.shift()?.()}finally{this.isProcessingQueue=!1}}}buildAndAttachToast(e,t){let n=se.create({providers:[{provide:Ge,useValue:t.config().data},{provide:b,useValue:t}],parent:this.injector}),o=id(W,{environmentInjector:this.environmentInjector,elementInjector:n}),r=id(e,{environmentInjector:this.environmentInjector,elementInjector:n}),p=new Me,d=t.paused();if(o.instance.componentRef=r,t.state()===`closed`){o.destroy();return}this.activeToasts.add(o),d&&this.activePauses++,p.add(t.onPause$.subscribe(()=>{d||(d=!0,this.activePauses++)})),p.add(t.onResume$.subscribe(()=>{d&&(d=!1,this.activePauses=Math.max(0,this.activePauses-1),this.activePauses===0&&this.processQueue())})),p.add(t.afterClosed$.pipe(as(1)).subscribe(()=>{d&&(d=!1,this.activePauses=Math.max(0,this.activePauses-1)),this.finalizeToast(o)})),o.onDestroy(()=>{t.completeClose(),p.unsubscribe()}),t.attach(C=>o.instance.closeToast(C)),this.applicationRef.attachView(o.hostView),this.getContainer(t.config().position??`top-right`).appendChild(o.location.nativeElement),r.instance.onToastInit?.()}finalizeToast(e){this.activeToasts.delete(e)&&(this.applicationRef.detachView(e.hostView),e.location.nativeElement.remove(),e.hostView.destroyed||e.destroy(),this.processQueue())}getContainer(e){if(this.containers.has(e))return this.containers.get(e);let t=this.document.createElement(`div`);return t.classList.add(`toast-container`,`toast-container-${e}`),this.document.body.appendChild(t),this.containers.set(e,t),t}resolveConfig(e){let t=e?.animate??this.toastrGlobalSettingsService.animate();return s(r({},e),{position:e?.position??this.toastrGlobalSettingsService.position(),glassiness:e?.glassiness??this.toastrGlobalSettingsService.glassiness(),glassQuality:e?.glassQuality??this.toastrGlobalSettingsService.glassQuality(),animate:t,wrapperClass:e?.wrapperClass??this.toastrGlobalSettingsService.wrapperClass(),durationInMs:e?.durationInMs??this.toastrGlobalSettingsService.durationInMs(),swipeToDismiss:e?.swipeToDismiss??this.toastrGlobalSettingsService.swipeToDismiss(),showCloseButton:e?.showCloseButton??this.toastrGlobalSettingsService.showCloseButton(),closeLabel:e?.closeLabel??this.toastrGlobalSettingsService.closeLabel(),closeButtonColor:e?.closeButtonColor??this.toastrGlobalSettingsService.closeButtonColor(),showProgressBar:e?.showProgressBar??this.toastrGlobalSettingsService.showProgressBar(),progressBarColor:e?.progressBarColor??this.toastrGlobalSettingsService?.progressBarColor()})}static ɵfac=function(t){return new(t||i)};static ɵprov=V({token:i,factory:i.ɵfac,providedIn:`root`})};export{b as a,W as i,H as n,f as o,R as r,Fe as t};