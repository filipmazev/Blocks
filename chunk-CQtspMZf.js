import{$t as Ue,A as E,Ai as vt,Bt as Re,C as D,Di as ve,E as De$1,Et as P,Fi as x,Gn as de,It as Qs,Kr as p,Kt as Se$1,Lr as mP,Lt as Qt,Mn as b,Mr as lr,Mt as Q,Ot as Pe,P as F,Qn as ea,Ur as ne,Ut as Rt,V as Gn,W as H,Wi as ye$1,X as J,Xn as eD,Yt as Ta,Zi as zr,a as $n,an as Wd,bi as ue,br as je,ci as se,er as es,gi as u0,hi as tt,ht as Mr,ii as rr,j as Er,k as Dt,ot as L,qt as Sn,un as X,wn as _e,wt as Oe,xt as Nt}from"./chunk-CoBsbWg5.js";import{n as s,t as r}from"./chunk-C9yOwMO6.js";var T=class o{position=x(`top-right`);animate=x(!0);wrapperClass=x(void 0);durationInMs=x(5e3);swipeToDismiss=x(!0);maxOpened=x(4);glassiness=x(`auto`);glassQuality=x(`enhanced`);showCloseButton=x(!0);closeButtonColor=x(`text-primary`);showProgressBar=x(!0);progressBarColor=x(`text-primary`);update(e){e.position!==void 0&&this.position.set(e.position),e.animate!==void 0&&this.animate.set(e.animate),e.wrapperClass!==void 0&&this.wrapperClass.set(e.wrapperClass),e.durationInMs!==void 0&&this.durationInMs.set(e.durationInMs),e.swipeToDismiss!==void 0&&this.swipeToDismiss.set(e.swipeToDismiss),e.maxOpened!==void 0&&this.maxOpened.set(e.maxOpened),e.glassiness!==void 0&&this.glassiness.set(e.glassiness),e.glassQuality!==void 0&&this.glassQuality.set(e.glassQuality),e.showCloseButton!==void 0&&this.showCloseButton.set(e.showCloseButton),e.closeButtonColor!==void 0&&this.closeButtonColor.set(e.closeButtonColor),e.showProgressBar!==void 0&&this.showProgressBar.set(e.showProgressBar),e.progressBarColor!==void 0&&this.progressBarColor.set(e.progressBarColor)}static ɵfac=function(t){return new(t||o)};static ɵprov=F({token:o,factory:o.ɵfac,providedIn:`root`})};var B=class{afterClosedSubject=new _e;pauseSubject=new _e;resumeSubject=new _e;afterClosed$=this.afterClosedSubject.asObservable();onPause$=this.pauseSubject.asObservable();onResume$=this.resumeSubject.asObservable();config;close(e){this.afterClosedSubject.next(e),this.afterClosedSubject.complete()}pause(){this.pauseSubject.next()}resume(){this.resumeSubject.next()}};var k=new E(`TOAST_DATA`);var G=class o{injectedData=p(k);data=this.injectedData;toast;onToastInit(){}close(e){this.toast?.close(e)}static ɵfac=function(t){return new(t||o)};static ɵprov=F({token:o,factory:o.ɵfac})};function Se(o,e){if(o&1&&(P(0,`h4`,3),Re(1),L(),P(2,`p`,4),Re(3),L()),o&2){let t=se();D(),Ue(t.resolvedTitle()),D(2),Ue(t.resolvedMessage())}}function Te(o,e){if(o&1&&(P(0,`p`,2),Re(1),L()),o&2){let t=se();D(),Ue(t.resolvedMessage())}}var m=class o extends G{i18n=p(De$1,{optional:!0});resolvedTitle=b(()=>{this.i18n?.version?.();let e=this.data.title;if(e)return zr(e)?this.i18n?.translate(e.key)??e.key:e});resolvedMessage=b(()=>{this.i18n?.version?.();let e=this.data.message;if(e)return zr(e)?this.i18n?.translate(e.key)??e.key:e});dismiss(){this.toast?.close()}static ɵfac=(()=>{let e;return function(n){return(e||(e=lr(o)))(n||o)}})();static ɵcmp=H({type:o,selectors:[[`bx-simple-toast`]],features:[Dt],decls:4,vars:2,consts:[[1,`simple-toast`,3,`ngClass`],[1,`simple-toast-content`],[1,`simple-toast-message`,`large-message`],[1,`simple-toast-title`],[1,`simple-toast-message`]],template:function(t,n){t&1&&(P(0,`div`,0)(1,`div`,1),ue(2,Se,4,2)(3,Te,2,1,`p`,2),L()()),t&2&&(ne(`ngClass`,n.data.type),D(2),de(n.resolvedTitle()?2:3))},dependencies:[eD,mP],styles:[`
.simple-toast[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  padding: 1rem;
  border-radius: 0.5rem;
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
.simple-toast.success[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-success);
}
.simple-toast.warn[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-warn);
}
.simple-toast.danger[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-danger);
}
.simple-toast-content[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex-grow: 1;
  padding-right: 1.5rem;
  font-family: inherit;
}
.simple-toast-title[_ngcontent-%COMP%] {
  margin: 0 0 0.25rem;
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
}`],changeDetection:1})};var ye=[`dynamicContainer`];var we=[`toastSwipeTarget`];var xe=[`animatorWrapper`];var Me=[`progressBar`];function Be(o,e){if(o&1){let t=Er();P(0,`button`,8),ye$1(`click`,function(){$n(t);let i=se();return Gn(i.closeToast())}),Oe(1,`bx-icon`,9),L()}if(o&2){let t=se();D(),ne(`color`,t.closeButtonColor())}}function De(o,e){if(o&1&&(P(0,`div`,10),Oe(1,`div`,11,3),L()),o&2){let t=se();Pe(`background`,t.progressBarBgCssVar()),D(),Pe(`background`,t.progressBarCssVar())}}var j=class o{ngZone=p(Q);bxGlassLightingService=p(Ta);bxA11yService=p(je);toastrGlobalSettingsService=p(T);showCloseButton=b(()=>this.config?.showCloseButton??this.toastrGlobalSettingsService.showCloseButton());closeButtonColor=b(()=>this.config?.closeButtonColor??this.toastrGlobalSettingsService.closeButtonColor());showProgressBar=b(()=>this.config?.showProgressBar===!1?!1:this.config?.showProgressBar===!0||this.config?.progressBarColor!==void 0);progressBarColor=b(()=>this.showProgressBar()?this.config?.progressBarColor??this.toastrGlobalSettingsService.progressBarColor():void 0);progressBarCssVar=b(()=>{let e=this.progressBarColor();return e?es(e):void 0});progressBarBgCssVar=b(()=>{let e=this.progressBarColor();return e?es(u0(e)):void 0});isAnimated=b(()=>!this.bxA11yService.isReducedMotion()&&this.config?.animate!==!1);isBottom=b(()=>(this.config?.position??this.toastrGlobalSettingsService.position()).includes(`bottom`));simpleToastSurface=b(()=>{let e=this.componentRef?.instance;return e instanceof m?`color-mix(in srgb, var(--bx-bg-surface) 92%, var(--bx-bg-${e.data.type}))`:null});emissionColor=b(()=>{let e=this.componentRef?.instance;return e instanceof m?`var(--bx-text-${e.data.type})`:this.progressBarCssVar()});wrapperClasses=b(()=>{return`${(this.config?.position??`top-right`).includes(`top`)?`anim-dir-top`:`anim-dir-bottom`} ${this.config?.wrapperClass??`default-wrapper`+(this.config?.hasDefaultBackground===!1?` no-bg`:``)}`});toastrTransform=b(()=>{if(!this.isAnimated())return null;let e=(this.config?.position??`top-right`).includes(`top`);return this.isSwipingFinished()?e?`translateY(-150px)`:`translateY(150px)`:this.currentTranslateY()!==0?`translateY(${this.currentTranslateY()}px)`:null});dynamicContainer=ea.required(`dynamicContainer`,{read:Nt});toastSwipeTarget=ea.required(`toastSwipeTarget`);animatorWrapper=ea.required(`animatorWrapper`);progressBar=ea(`progressBar`);isVisible=x(!1);currentTranslateY=x(0);isSwipingFinished=x(!1);isCollapsing=x(!1);componentRef;config;toastRef;light;lightFrame;lastLightProgress=-1;destroyed=!1;progressAnimation;subs=new Se$1;remainingMs=0;timerStartTime=0;originalCloseFn;closeResult;isTrackingSwipe=!1;isTouchActive=!1;autoCloseTimeout;hasEmittedClose=!1;cleanupListeners=[];swipeCleanupListeners=null;globalResizeCleanup=null;ngOnInit(){this.originalCloseFn=this.toastRef.close.bind(this.toastRef),this.toastRef.close=e=>{this.closeToast(e)}}ngAfterViewInit(){this.dynamicContainer().insert(this.componentRef.hostView),setTimeout(()=>this.isVisible.set(!0),10),this.config?.swipeToDismiss!==!1&&(this.startVerticalSwipeDetection(),this.monitorInputType());let e=this.animatorWrapper().nativeElement,t=p=>{p.target!==e||p.propertyName!==`grid-template-rows`||this.isCollapsing()&&!this.hasEmittedClose&&(this.hasEmittedClose=!0,this.originalCloseFn(this.closeResult))};e.addEventListener(`transitionend`,t),this.cleanupListeners.push(()=>e.removeEventListener(`transitionend`,t));let n=this.config?.durationInMs;n&&(this.remainingMs=n,this.startTimer());let i=this.progressBar()?.nativeElement;n&&i&&(this.progressAnimation=i.animate([{width:`100%`},{width:`0%`}],{duration:n,fill:`forwards`}),this.subs.add(this.toastRef.onPause$.subscribe(()=>{this.progressAnimation?.pause(),this.paintLight(),this.stopLightFrame()})),this.subs.add(this.toastRef.onResume$.subscribe(()=>{this.progressAnimation?.play(),this.startLightFrame()}))),this.startLightFrame()}ngOnDestroy(){this.destroyed=!0,this.stopLightFrame(),this.light?.destroy(),clearTimeout(this.autoCloseTimeout),this.stopVerticalSwipeDetection(),this.globalResizeCleanup?.(),this.cleanupListeners.forEach(e=>e()),this.cleanupListeners=[],this.progressAnimation?.cancel(),this.subs.unsubscribe()}closeToast(e,t=!1){if(this.closeResult=e!==void 0?e:this.closeResult,this.stopLightFrame(),this.light?.destroy(),this.light=void 0,!this.isAnimated()){this.hasEmittedClose||(this.hasEmittedClose=!0,this.originalCloseFn(this.closeResult));return}this.isVisible.set(!1),this.isCollapsing.set(!0),t&&this.isSwipingFinished.set(!0)}onMouseEnter(){!this.isTouchActive&&this.config?.durationInMs&&!this.isCollapsing()&&this.pauseTimer()}onMouseLeave(){!this.isTouchActive&&this.config?.durationInMs&&!this.isCollapsing()&&(this.startTimer(),this.toastRef.resume())}paintLight(){let e=this.toastSwipeTarget().nativeElement,t=this.emissionColor(),n=e.closest(`.toast-container`);if(!t||!n||this.destroyed)return;let i=e.getBoundingClientRect(),p=this.progressBar()?.nativeElement,u=p?.getBoundingClientRect(),l=u&&i.width?(u.right-i.left)/i.width:.5;if(Math.abs(l-this.lastLightProgress)<1e-4)return;this.lastLightProgress=l,e.style.setProperty(`--bx-toast-light-x`,`${l*100}%`);let C={element:p??e,offsetX:p?1:.5,offsetY:1,excludeElement:e,color:t,z:48,intensity:1.1,radius:360};this.light?this.light.update(C):this.light=this.bxGlassLightingService.register(n,C)}startLightFrame(){this.paintLight(),this.lightFrame===void 0&&this.progressAnimation&&!this.destroyed&&this.isAnimated()&&this.ngZone.runOutsideAngular(()=>{let e=()=>{this.lightFrame=void 0,!(this.destroyed||this.isCollapsing()||!this.isAnimated())&&(this.paintLight(),this.progressAnimation?.playState===`running`&&(this.lightFrame=requestAnimationFrame(e)))};this.lightFrame=requestAnimationFrame(e)})}stopLightFrame(){this.lightFrame!==void 0&&cancelAnimationFrame(this.lightFrame),this.lightFrame=void 0}startVerticalSwipeDetection(){if(this.isTrackingSwipe||!(typeof window<`u`&&(window.matchMedia(`(pointer: coarse)`).matches||navigator.maxTouchPoints>0)))return;this.isTrackingSwipe=!0;let t=this.toastSwipeTarget().nativeElement,n=(this.config?.position??`top-right`).includes(`top`),i=0,p=0,u=!1,l=0,C=c=>{if(c.button!==0&&c.pointerType===`mouse`)return;l=(t.offsetHeight||0)/3,u=!0,i=c.clientY,p=c.timeStamp,this.pauseTimer(),t.setPointerCapture(c.pointerId)},g=c=>{if(!u)return;let b=c.clientY-i;(n&&b<0||!n&&b>0)&&(c.cancelable&&c.preventDefault(),this.currentTranslateY.set(b))},D=c=>{if(!u)return;u=!1,t.releasePointerCapture(c.pointerId);let b=c.clientY-i,be=c.timeStamp-p||1,ve=Math.abs(b/be);(n?b<-l:b>l)||ve>.3?this.closeToast(void 0,!0):(this.currentTranslateY.set(0),this.startTimer(),this.toastRef.resume())};t.addEventListener(`pointerdown`,C,{passive:!1}),t.addEventListener(`pointermove`,g,{passive:!1}),t.addEventListener(`pointerup`,D),t.addEventListener(`pointercancel`,D),this.swipeCleanupListeners=()=>{t.removeEventListener(`pointerdown`,C),t.removeEventListener(`pointermove`,g),t.removeEventListener(`pointerup`,D),t.removeEventListener(`pointercancel`,D)}}stopVerticalSwipeDetection(){this.isTrackingSwipe&&(this.isTrackingSwipe=!1,this.swipeCleanupListeners&&(this.swipeCleanupListeners(),this.swipeCleanupListeners=null))}monitorInputType(){if(this.globalResizeCleanup)return;let e=t=>{let n=t.pointerType===`touch`;n&&!this.isTouchActive?(this.isTouchActive=!0,this.startVerticalSwipeDetection()):!n&&this.isTouchActive&&(this.isTouchActive=!1,this.stopVerticalSwipeDetection())};window.addEventListener(`pointerdown`,e),this.globalResizeCleanup=()=>window.removeEventListener(`pointerdown`,e)}startTimer(){this.remainingMs<=0||(this.timerStartTime=Date.now(),this.autoCloseTimeout=setTimeout(()=>this.closeToast(),this.remainingMs))}pauseTimer(){if(!this.autoCloseTimeout)return;clearTimeout(this.autoCloseTimeout),this.autoCloseTimeout=void 0;let e=Date.now()-this.timerStartTime;this.remainingMs-=e,this.toastRef.pause()}static ɵfac=function(t){return new(t||o)};static ɵcmp=H({type:o,selectors:[[`bx-toast-core`]],viewQuery:function(t,n){t&1&&Mr(n.dynamicContainer,ye,5,Nt)(n.toastSwipeTarget,we,5)(n.animatorWrapper,xe,5)(n.progressBar,Me,5),t&2&&Qt(4)},hostBindings:function(t,n){t&1&&ye$1(`mouseenter`,function(){return n.onMouseEnter()})(`mouseleave`,function(){return n.onMouseLeave()})},decls:8,vars:21,consts:[[`animatorWrapper`,``],[`toastSwipeTarget`,``],[`dynamicContainer`,``],[`progressBar`,``],[1,`toast-animator`],[`bxSurface`,``,1,`toast-wrapper`,3,`bxSurfaceGlassiness`,`bxSurfaceQuality`,`ngClass`],[`type`,`button`,`aria-label`,`Close toast`,1,`toast-close-button`],[1,`toast-progress-container`,3,`background`],[`type`,`button`,`aria-label`,`Close toast`,1,`toast-close-button`,3,`click`],[`name`,`x`,`size`,`20`,3,`color`],[1,`toast-progress-container`],[1,`toast-progress-bar`]],template:function(t,n){t&1&&(P(0,`div`,4,0)(2,`div`,5,1),ue(4,Be,2,1,`button`,6),Qs(5,null,2),ue(7,De,3,4,`div`,7),L()()),t&2&&(X(`collapsing`,n.isCollapsing())(`is-bottom`,n.isBottom()),D(2),Pe(`transform`,n.toastrTransform())(`--%NS%bx-toast-bg`,n.simpleToastSurface())(`--%NS%bx-toast-emission`,n.emissionColor()),X(`show`,n.isVisible())(`no-animate`,!n.isAnimated())(`has-emission`,!!n.emissionColor()),ne(`bxSurfaceGlassiness`,n.config?.hasDefaultBackground===!1?`off`:n.config?.glassiness??`auto`)(`bxSurfaceQuality`,n.config?.glassQuality??`enhanced`)(`ngClass`,n.wrapperClasses()),D(2),de(n.showCloseButton()?4:-1),D(3),de(n.config?.durationInMs&&n.showProgressBar()&&n.progressBarCssVar()&&n.progressBarBgCssVar()?7:-1))},dependencies:[Rt,mP,vt],styles:[`
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
  top: 1rem;
  right: 1rem;
  flex-direction: column;
  align-items: flex-end;
}
  .toast-container-top-left {
  top: 1rem;
  left: 1rem;
  flex-direction: column;
  align-items: flex-start;
}
  .toast-container-top-center {
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
  flex-direction: column;
  align-items: center;
}
  .toast-container-bottom-right {
  bottom: 1rem;
  right: 1rem;
  flex-direction: column-reverse;
  align-items: flex-end;
}
  .toast-container-bottom-left {
  bottom: 1rem;
  left: 1rem;
  flex-direction: column-reverse;
  align-items: flex-start;
}
  .toast-container-bottom-center {
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  flex-direction: column-reverse;
  align-items: center;
}
@media (max-width: 768px) {
    .toast-container[class*=-top-] {
    top: 1rem !important;
    bottom: auto !important;
    flex-direction: column !important;
    transform: none !important;
    align-items: center !important;
  }
    .toast-container[class*=-bottom-] {
    bottom: 1rem !important;
    top: auto !important;
    flex-direction: column-reverse !important;
    transform: none !important;
    align-items: center !important;
  }
}
.toast-animator[_ngcontent-%COMP%] {
  display: grid;
  grid-template-rows: 1fr;
  transition: grid-template-rows 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), margin 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  margin-bottom: 1rem;
}
.toast-animator.is-bottom[_ngcontent-%COMP%] {
  margin-bottom: 0;
  margin-top: 1rem;
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
  transition: opacity 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
}
.toast-wrapper.default-wrapper[_ngcontent-%COMP%] {
  background-color: var(--%NS%bx-toast-bg, var(--%NS%bx-bg-surface));
  color: var(--%NS%bx-toast-text, var(--%NS%bx-text-primary));
  border-radius: 0.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  width: 24rem;
  max-width: 100%;
}
.toast-wrapper.default-wrapper.no-bg[_ngcontent-%COMP%] {
  background-color: transparent;
}
.toast-wrapper.anim-dir-top[_ngcontent-%COMP%] {
  transform: translateY(-30px);
}
.toast-wrapper.anim-dir-bottom[_ngcontent-%COMP%] {
  transform: translateY(30px);
}
.toast-wrapper.show[_ngcontent-%COMP%] {
  opacity: 1;
  transform: translateY(0);
}
.toast-wrapper.no-animate[_ngcontent-%COMP%] {
  transition: none !important;
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
  --%NS%bx-glass-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  --%NS%bx-glass-min-opacity: 0.8;
  border: 1px solid var(--%NS%bx-border-default);
  border-radius: 1rem;
}
.toast-close-button[_ngcontent-%COMP%] {
  width: 2rem;
  height: 2rem;
  border-radius: 0.25rem;
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
  --%NS%bx-glass-shadow: 0 4px 12px rgba(0, 0, 0, 0.15), 0 8px 24px -16px color-mix(in srgb, var(--%NS%bx-toast-emission) 55%, transparent);
}
@media (forced-colors: active), (prefers-contrast: more) {
  .toast-wrapper.has-emission[_ngcontent-%COMP%]::after {
    display: none;
  }
  .toast-wrapper.has-emission[_ngcontent-%COMP%] {
    --%NS%bx-glass-shadow: none;
  }
}`],changeDetection:1})};var fe=class o{injector=p(ve);applicationRef=p(Sn);environmentInjector=p(tt);document=p(J);toastrGlobalSettingsService=p(T);bxA11yService=p(je);toastQueue=[];activeToasts=[];containers=/* @__PURE__ */ new Map;activePauses=0;queueToast(e,t){let n=this.resolveConfig(t),i=new B;return this.toastQueue.push(()=>this.buildAndAttachToast(e,n,i)),this.processQueue(),i}queueSuccess(e){return this.queueToast(m,{position:e.position??this.toastrGlobalSettingsService.position(),data:{title:e.title,message:e.message,type:`success`},closeButtonColor:`text-success`,progressBarColor:`text-success`,hasDefaultBackground:!0,durationInMs:e.durationInMs??this.toastrGlobalSettingsService.durationInMs(),animate:e.animate??this.toastrGlobalSettingsService.animate(),showProgressBar:e.showProgessBar??this.toastrGlobalSettingsService.showProgressBar(),showCloseButton:e.showCloseButton??this.toastrGlobalSettingsService.showCloseButton()})}queueInfo(e){return this.queueToast(m,{position:e.position??this.toastrGlobalSettingsService.position(),data:{title:e.title,message:e.message,type:`info`},closeButtonColor:`text-info`,progressBarColor:`text-info`,hasDefaultBackground:!0,durationInMs:e.durationInMs??this.toastrGlobalSettingsService.durationInMs(),animate:e.animate??this.toastrGlobalSettingsService.animate(),showProgressBar:e.showProgessBar??this.toastrGlobalSettingsService.showProgressBar(),showCloseButton:e.showCloseButton??this.toastrGlobalSettingsService.showCloseButton()})}queueWarning(e){return this.queueToast(m,{position:e.position??this.toastrGlobalSettingsService.position(),data:{title:e.title,message:e.message,type:`warn`},closeButtonColor:`text-warn`,progressBarColor:`text-warn`,hasDefaultBackground:!0,durationInMs:e.durationInMs??this.toastrGlobalSettingsService.durationInMs(),animate:e.animate??this.toastrGlobalSettingsService.animate(),showProgressBar:e.showProgessBar??this.toastrGlobalSettingsService.showProgressBar(),showCloseButton:e.showCloseButton??this.toastrGlobalSettingsService.showCloseButton()})}queueDanger(e){return this.queueToast(m,{position:e.position??this.toastrGlobalSettingsService.position(),data:{title:e.title,message:e.message,type:`danger`},closeButtonColor:`text-danger`,progressBarColor:`text-danger`,hasDefaultBackground:!0,durationInMs:e.durationInMs??this.toastrGlobalSettingsService.durationInMs(),animate:e.animate??this.toastrGlobalSettingsService.animate(),showProgressBar:e.showProgessBar??this.toastrGlobalSettingsService.showProgressBar(),showCloseButton:e.showCloseButton??this.toastrGlobalSettingsService.showCloseButton()})}processQueue(){if(this.activePauses>0)return;let e=this.toastrGlobalSettingsService.maxOpened();for(;this.activeToasts.length<e&&this.toastQueue.length>0;){let t=this.toastQueue.shift();t&&t()}}buildAndAttachToast(e,t,n){let i=ve.create({providers:[{provide:k,useValue:t.data}],parent:this.injector}),p=Wd(e,{environmentInjector:this.environmentInjector,elementInjector:i});this.isIToast(p.instance)&&(p.instance.toast=n,p.instance.onToastInit?.());let u=ve.create({providers:[{provide:B,useValue:n}],parent:this.injector}),l=Wd(j,{environmentInjector:this.environmentInjector,elementInjector:u});l.instance.componentRef=p,l.instance.config=t,l.instance.toastRef=n,this.applicationRef.attachView(l.hostView),this.getContainer(t.position||`top-right`).appendChild(l.location.nativeElement),this.activeToasts.push(l);let g=!1;n.config=t,n.onPause$.subscribe(()=>{g||(g=!0,this.activePauses++)}),n.onResume$.subscribe(()=>{g&&(g=!1,this.activePauses=Math.max(0,this.activePauses-1),this.activePauses===0&&this.processQueue())}),n.afterClosed$.pipe(rr(1)).subscribe(()=>{g&&(g=!1,this.activePauses=Math.max(0,this.activePauses-1)),this.finalizeToast(l)})}finalizeToast(e){let t=this.activeToasts.indexOf(e);t>-1&&this.activeToasts.splice(t,1),this.applicationRef.detachView(e.hostView),e.location.nativeElement.remove(),e.destroy(),this.processQueue()}getContainer(e){if(this.containers.has(e))return this.containers.get(e);let t=this.document.createElement(`div`);return t.classList.add(`toast-container`,`toast-container-${e}`),this.document.body.appendChild(t),this.containers.set(e,t),t}resolveConfig(e){let t=e?.animate??this.toastrGlobalSettingsService.animate(),n=this.bxA11yService.isReducedMotion()?!1:t;return s(r({},e),{position:e?.position??this.toastrGlobalSettingsService.position(),glassiness:e?.glassiness??this.toastrGlobalSettingsService.glassiness(),glassQuality:e?.glassQuality??this.toastrGlobalSettingsService.glassQuality(),animate:n,wrapperClass:e?.wrapperClass??this.toastrGlobalSettingsService.wrapperClass(),durationInMs:e?.durationInMs??this.toastrGlobalSettingsService.durationInMs(),swipeToDismiss:e?.swipeToDismiss??this.toastrGlobalSettingsService.swipeToDismiss(),showCloseButton:e?.showCloseButton??this.toastrGlobalSettingsService.showCloseButton(),closeButtonColor:e?.closeButtonColor??this.toastrGlobalSettingsService.closeButtonColor(),showProgressBar:e?.showProgressBar??this.toastrGlobalSettingsService.showProgressBar(),progressBarColor:e?.progressBarColor??this.toastrGlobalSettingsService?.progressBarColor()})}isIToast(e){return typeof e==`object`&&e!==null&&`toast`in e}static ɵfac=function(t){return new(t||o)};static ɵprov=F({token:o,factory:o.ɵfac,providedIn:`root`})};export{T as n,fe as r,G as t};