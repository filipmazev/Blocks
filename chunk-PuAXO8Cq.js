import{n as s,t as r}from"./chunk-C9yOwMO6.js";import{Ai as ve,An as _n,At as Pe,Bt as Re,C as E,E as Er,Et as P,Fn as ar,Gn as cP,H as He,Ht as S,Ii as we,Jn as cv,Jr as ns,Ln as av,Nn as ae,Oi as v,Ri as x,Rr as lv,Un as bt,Vn as be,Vt as Rt,W as Hr,Wt as Se,b as De,bi as tt,bn as Ys,ei as p,et as Jx,fi as qn,ht as N0,in as V$1,it as Kd,qn as ce,qr as nr,qt as St$1,r as $n,st as L,tt as K,ut as Ma,wi as ue,wr as je,wt as Oe,xn as Z,xr as ie,yi as te,yt as Nt,z as H}from"./chunk-BjKrh6Fv.js";var w=class o{position=x(`top-right`);animate=x(!0);wrapperClass=x(void 0);durationInMs=x(5e3);swipeToDismiss=x(!0);maxOpened=x(4);glassiness=x(`auto`);glassQuality=x(`enhanced`);showCloseButton=x(!0);closeButtonColor=x(`text-primary`);showProgressBar=x(!0);progressBarColor=x(`text-primary`);update(t){t.position!==void 0&&this.position.set(t.position),t.animate!==void 0&&this.animate.set(t.animate),t.wrapperClass!==void 0&&this.wrapperClass.set(t.wrapperClass),t.durationInMs!==void 0&&this.durationInMs.set(t.durationInMs),t.swipeToDismiss!==void 0&&this.swipeToDismiss.set(t.swipeToDismiss),t.maxOpened!==void 0&&this.maxOpened.set(t.maxOpened),t.glassiness!==void 0&&this.glassiness.set(t.glassiness),t.glassQuality!==void 0&&this.glassQuality.set(t.glassQuality),t.showCloseButton!==void 0&&this.showCloseButton.set(t.showCloseButton),t.closeButtonColor!==void 0&&this.closeButtonColor.set(t.closeButtonColor),t.showProgressBar!==void 0&&this.showProgressBar.set(t.showProgressBar),t.progressBarColor!==void 0&&this.progressBarColor.set(t.progressBarColor)}static ɵfac=function(e){return new(e||o)};static ɵprov=V$1({token:o,factory:o.ɵfac,providedIn:`root`})};var D=class{afterClosedSubject=new De;pauseSubject=new De;resumeSubject=new De;afterClosed$=this.afterClosedSubject.asObservable();onPause$=this.pauseSubject.asObservable();onResume$=this.resumeSubject.asObservable();config;close(t){this.afterClosedSubject.next(t),this.afterClosedSubject.complete()}pause(){this.pauseSubject.next()}resume(){this.resumeSubject.next()}};var j=new E(`TOAST_DATA`);var V=class o{data=p(j);toast;onToastInit(){}close(t){this.toast?.close(t)}static ɵfac=function(e){return new(e||o)};static ɵprov=V$1({token:o,factory:o.ɵfac})};function Tt(o,t){if(o&1&&(P(0,`h4`,3),Re(1),L(),P(2,`p`,4),Re(3),L()),o&2){let e=ae();S(),je(e.resolvedTitle()),S(2),je(e.resolvedMessage())}}function wt(o,t){if(o&1&&(P(0,`p`,2),Re(1),L()),o&2){let e=ae();S(),je(e.resolvedMessage())}}var u=class o extends V{i18n=p(Se,{optional:!0});resolvedTitle=v(()=>{this.i18n?.version?.();let t=this.data.title;if(t)return Hr(t)?this.i18n?.translate(t.key)??t.key:t});resolvedMessage=v(()=>{this.i18n?.version?.();let t=this.data.message;if(t)return Hr(t)?this.i18n?.translate(t.key)??t.key:t});dismiss(){this.toast?.close()}static ɵfac=(()=>{let t;return function(n){return(t||(t=ar(o)))(n||o)}})();static ɵcmp=H({type:o,selectors:[[`bx-simple-toast`]],features:[St$1],decls:4,vars:2,consts:[[1,`simple-toast`,3,`ngClass`],[1,`simple-toast-content`],[1,`simple-toast-message`,`large-message`],[1,`simple-toast-title`],[1,`simple-toast-message`]],template:function(e,n){e&1&&(P(0,`div`,0)(1,`div`,1),ce(2,Tt,4,2)(3,wt,2,1,`p`,2),L()()),e&2&&(te(`ngClass`,n.data.type),S(2),ue(n.resolvedTitle()?2:3))},dependencies:[Jx,cP],styles:[`
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
}`],changeDetection:1})};var yt=[`dynamicContainer`];var St=[`toastSwipeTarget`];var xt=[`animatorWrapper`];var Mt=[`progressBar`];function Bt(o,t){if(o&1){let e=Er();P(0,`button`,8),be(`click`,function(){$n(e);let s=ae();return qn(s.closeToast())}),Oe(1,`bx-icon`,9),L()}if(o&2){let e=ae();S(),te(`color`,e.closeButtonColor())}}function Dt(o,t){if(o&1&&(P(0,`div`,10),Oe(1,`div`,11,3),L()),o&2){let e=ae();Pe(`background`,e.progressBarBgCssVar()),S(),Pe(`background`,e.progressBarCssVar())}}var F=class o{zone=p(K);lighting=p(Ma);a11y=p(He);toastrGlobalSettingsService=p(w);componentRef;config;toastRef;isVisible=x(!1);currentTranslateY=x(0);isSwipingFinished=x(!1);isCollapsing=x(!1);showCloseButton=v(()=>this.config?.showCloseButton??this.toastrGlobalSettingsService.showCloseButton());closeButtonColor=v(()=>this.config?.closeButtonColor??this.toastrGlobalSettingsService.closeButtonColor());showProgressBar=v(()=>this.config?.showProgressBar===!1?!1:this.config?.showProgressBar===!0||this.config?.progressBarColor!==void 0);progressBarColor=v(()=>this.showProgressBar()?this.config?.progressBarColor??this.toastrGlobalSettingsService.progressBarColor():void 0);progressBarCssVar=v(()=>{let t=this.progressBarColor();return t?ns(t):void 0});progressBarBgCssVar=v(()=>{let t=this.progressBarColor();return t?ns(N0(t)):void 0});isAnimated=v(()=>!this.a11y.isReducedMotion()&&this.config?.animate!==!1);isBottom=v(()=>(this.config?.position??this.toastrGlobalSettingsService.position()).includes(`bottom`));dynamicContainer;toastSwipeTarget;animatorWrapper;progressBar;simpleToastSurface=v(()=>{let t=this.componentRef?.instance;return t instanceof u?`color-mix(in srgb, var(--bx-bg-surface) 92%, var(--bx-bg-${t.data.type}))`:null});emissionColor=v(()=>{let t=this.componentRef?.instance;return t instanceof u?`var(--bx-text-${t.data.type})`:this.progressBarCssVar()});wrapperClasses=v(()=>{return`${(this.config?.position??`top-right`).includes(`top`)?`anim-dir-top`:`anim-dir-bottom`} ${this.config?.wrapperClass??`default-wrapper`+(this.config?.hasDefaultBackground===!1?` no-bg`:``)}`});toastrTransform=v(()=>{if(!this.isAnimated())return null;let t=(this.config?.position??`top-right`).includes(`top`);return this.isSwipingFinished()?t?`translateY(-150px)`:`translateY(150px)`:this.currentTranslateY()!==0?`translateY(${this.currentTranslateY()}px)`:null});light;lightFrame;lastLightProgress=-1;destroyed=!1;progressAnimation;subs=new we;remainingMs=0;timerStartTime=0;originalCloseFn;closeResult;isTrackingSwipe=!1;isTouchActive=!1;autoCloseTimeout;hasEmittedClose=!1;cleanupListeners=[];swipeCleanupListeners=null;globalResizeCleanup=null;ngOnInit(){this.dynamicContainer.insert(this.componentRef.hostView),this.originalCloseFn=this.toastRef.close.bind(this.toastRef),this.toastRef.close=n=>{this.closeToast(n)},setTimeout(()=>this.isVisible.set(!0),10),this.config?.swipeToDismiss!==!1&&(this.startVerticalSwipeDetection(),this.monitorInputType());let t=this.animatorWrapper.nativeElement,e=n=>{n.target!==t||n.propertyName!==`grid-template-rows`||this.isCollapsing()&&!this.hasEmittedClose&&(this.hasEmittedClose=!0,this.originalCloseFn(this.closeResult))};t.addEventListener(`transitionend`,e),this.cleanupListeners.push(()=>t.removeEventListener(`transitionend`,e))}ngAfterViewInit(){let t=this.config?.durationInMs;t&&(this.remainingMs=t,this.startTimer()),t&&this.progressBar?.nativeElement&&(this.progressAnimation=this.progressBar.nativeElement.animate([{width:`100%`},{width:`0%`}],{duration:t,fill:`forwards`}),this.subs.add(this.toastRef.onPause$.subscribe(()=>{this.progressAnimation?.pause(),this.paintLight(),this.stopLightFrame()})),this.subs.add(this.toastRef.onResume$.subscribe(()=>{this.progressAnimation?.play(),this.startLightFrame()}))),this.startLightFrame()}ngOnDestroy(){this.destroyed=!0,this.stopLightFrame(),this.light?.destroy(),clearTimeout(this.autoCloseTimeout),this.stopVerticalSwipeDetection(),this.globalResizeCleanup?.(),this.cleanupListeners.forEach(t=>t()),this.cleanupListeners=[],this.progressAnimation?.cancel(),this.subs.unsubscribe()}closeToast(t,e=!1){if(this.closeResult=t!==void 0?t:this.closeResult,this.stopLightFrame(),this.light?.destroy(),this.light=void 0,!this.isAnimated()){this.hasEmittedClose||(this.hasEmittedClose=!0,this.originalCloseFn(this.closeResult));return}this.isVisible.set(!1),this.isCollapsing.set(!0),e&&this.isSwipingFinished.set(!0)}onMouseEnter(){!this.isTouchActive&&this.config?.durationInMs&&!this.isCollapsing()&&this.pauseTimer()}onMouseLeave(){!this.isTouchActive&&this.config?.durationInMs&&!this.isCollapsing()&&(this.startTimer(),this.toastRef.resume())}paintLight(){let t=this.toastSwipeTarget.nativeElement,e=this.emissionColor(),n=t.closest(`.toast-container`);if(!e||!n||this.destroyed)return;let s=t.getBoundingClientRect(),c=this.progressBar?.nativeElement,d=c?.getBoundingClientRect(),l=d&&s.width?(d.right-s.left)/s.width:.5;if(Math.abs(l-this.lastLightProgress)<1e-4)return;this.lastLightProgress=l,t.style.setProperty(`--bx-toast-light-x`,`${l*100}%`);let v={element:c??t,offsetX:c?1:.5,offsetY:1,excludeElement:t,color:e,z:48,intensity:1.1,radius:360};this.light?this.light.update(v):this.light=this.lighting.register(n,v)}startLightFrame(){this.paintLight(),this.lightFrame===void 0&&this.progressAnimation&&!this.destroyed&&this.isAnimated()&&this.zone.runOutsideAngular(()=>{let t=()=>{this.lightFrame=void 0,!(this.destroyed||this.isCollapsing()||!this.isAnimated())&&(this.paintLight(),this.progressAnimation?.playState===`running`&&(this.lightFrame=requestAnimationFrame(t)))};this.lightFrame=requestAnimationFrame(t)})}stopLightFrame(){this.lightFrame!==void 0&&cancelAnimationFrame(this.lightFrame),this.lightFrame=void 0}startVerticalSwipeDetection(){if(this.isTrackingSwipe||!(typeof window<`u`&&(window.matchMedia(`(pointer: coarse)`).matches||navigator.maxTouchPoints>0)))return;this.isTrackingSwipe=!0;let e=this.toastSwipeTarget.nativeElement,n=(this.config?.position??`top-right`).includes(`top`),s=0,c=0,d=!1,l=0,v=p=>{if(p.button!==0&&p.pointerType===`mouse`)return;l=(e.offsetHeight||0)/3,d=!0,s=p.clientY,c=p.timeStamp,this.pauseTimer(),e.setPointerCapture(p.pointerId)},g=p=>{if(!d)return;let b=p.clientY-s;(n&&b<0||!n&&b>0)&&(p.cancelable&&p.preventDefault(),this.currentTranslateY.set(b))},I=p=>{if(!d)return;d=!1,e.releasePointerCapture(p.pointerId);let b=p.clientY-s,bt=p.timeStamp-c||1,Ct=Math.abs(b/bt);(n?b<-l:b>l)||Ct>.3?this.closeToast(void 0,!0):(this.currentTranslateY.set(0),this.startTimer(),this.toastRef.resume())};e.addEventListener(`pointerdown`,v,{passive:!1}),e.addEventListener(`pointermove`,g,{passive:!1}),e.addEventListener(`pointerup`,I),e.addEventListener(`pointercancel`,I),this.swipeCleanupListeners=()=>{e.removeEventListener(`pointerdown`,v),e.removeEventListener(`pointermove`,g),e.removeEventListener(`pointerup`,I),e.removeEventListener(`pointercancel`,I)}}stopVerticalSwipeDetection(){this.isTrackingSwipe&&(this.isTrackingSwipe=!1,this.swipeCleanupListeners&&(this.swipeCleanupListeners(),this.swipeCleanupListeners=null))}monitorInputType(){if(this.globalResizeCleanup)return;let t=e=>{let n=e.pointerType===`touch`;n&&!this.isTouchActive?(this.isTouchActive=!0,this.startVerticalSwipeDetection()):!n&&this.isTouchActive&&(this.isTouchActive=!1,this.stopVerticalSwipeDetection())};window.addEventListener(`pointerdown`,t),this.globalResizeCleanup=()=>window.removeEventListener(`pointerdown`,t)}startTimer(){this.remainingMs<=0||(this.timerStartTime=Date.now(),this.autoCloseTimeout=setTimeout(()=>this.closeToast(),this.remainingMs))}pauseTimer(){if(!this.autoCloseTimeout)return;clearTimeout(this.autoCloseTimeout),this.autoCloseTimeout=void 0;let t=Date.now()-this.timerStartTime;this.remainingMs-=t,this.toastRef.pause()}static ɵfac=function(e){return new(e||o)};static ɵcmp=H({type:o,selectors:[[`bx-toast-core`]],viewQuery:function(e,n){if(e&1&&av(yt,7,Nt)(St,7)(xt,7)(Mt,5),e&2){let s;lv(s=cv())&&(n.dynamicContainer=s.first),lv(s=cv())&&(n.toastSwipeTarget=s.first),lv(s=cv())&&(n.animatorWrapper=s.first),lv(s=cv())&&(n.progressBar=s.first)}},hostBindings:function(e,n){e&1&&be(`mouseenter`,function(){return n.onMouseEnter()})(`mouseleave`,function(){return n.onMouseLeave()})},decls:8,vars:21,consts:[[`animatorWrapper`,``],[`toastSwipeTarget`,``],[`dynamicContainer`,``],[`progressBar`,``],[1,`toast-animator`],[`bxSurface`,``,1,`toast-wrapper`,3,`bxSurfaceGlassiness`,`bxSurfaceQuality`,`ngClass`],[`type`,`button`,`aria-label`,`Close toast`,1,`toast-close-button`],[1,`toast-progress-container`,3,`background`],[`type`,`button`,`aria-label`,`Close toast`,1,`toast-close-button`,3,`click`],[`name`,`x`,`size`,`20`,3,`color`],[1,`toast-progress-container`],[1,`toast-progress-bar`]],template:function(e,n){e&1&&(P(0,`div`,4,0)(2,`div`,5,1),ce(4,Bt,2,1,`button`,6),Ys(5,null,2),ce(7,Dt,3,4,`div`,7),L()()),e&2&&(Z(`collapsing`,n.isCollapsing())(`is-bottom`,n.isBottom()),S(2),Pe(`transform`,n.toastrTransform())(`--%NS%bx-toast-bg`,n.simpleToastSurface())(`--%NS%bx-toast-emission`,n.emissionColor()),Z(`show`,n.isVisible())(`no-animate`,!n.isAnimated())(`has-emission`,!!n.emissionColor()),te(`bxSurfaceGlassiness`,n.config?.hasDefaultBackground===!1?`off`:n.config?.glassiness??`auto`)(`bxSurfaceQuality`,n.config?.glassQuality??`enhanced`)(`ngClass`,n.wrapperClasses()),S(2),ue(n.showCloseButton()?4:-1),S(3),ue(n.config?.durationInMs&&n.showProgressBar()&&n.progressBarCssVar()&&n.progressBarBgCssVar()?7:-1))},dependencies:[Rt,cP,bt],styles:[`
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
}`],changeDetection:1})};var ft=class o{injector=p(ve);appRef=p(_n);environmentInjector=p(tt);document=p(ie);globalSettings=p(w);a11y=p(He);toastQueue=[];activeToasts=[];containers=new Map;activePauses=0;queueToast(t,e){let n=this.resolveConfig(e),s=new D;return this.toastQueue.push(()=>this.buildAndAttachToast(t,n,s)),this.processQueue(),s}queueSuccess(t){return this.queueToast(u,{position:t.position??this.globalSettings.position(),data:{title:t.title,message:t.message,type:`success`},closeButtonColor:`text-success`,progressBarColor:`text-success`,hasDefaultBackground:!0,durationInMs:t.durationInMs??this.globalSettings.durationInMs(),animate:t.animate??this.globalSettings.animate(),showProgressBar:t.showProgessBar??this.globalSettings.showProgressBar(),showCloseButton:t.showCloseButton??this.globalSettings.showCloseButton()})}queueInfo(t){return this.queueToast(u,{position:t.position??this.globalSettings.position(),data:{title:t.title,message:t.message,type:`info`},closeButtonColor:`text-info`,progressBarColor:`text-info`,hasDefaultBackground:!0,durationInMs:t.durationInMs??this.globalSettings.durationInMs(),animate:t.animate??this.globalSettings.animate(),showProgressBar:t.showProgessBar??this.globalSettings.showProgressBar(),showCloseButton:t.showCloseButton??this.globalSettings.showCloseButton()})}queueWarning(t){return this.queueToast(u,{position:t.position??this.globalSettings.position(),data:{title:t.title,message:t.message,type:`warn`},closeButtonColor:`text-warn`,progressBarColor:`text-warn`,hasDefaultBackground:!0,durationInMs:t.durationInMs??this.globalSettings.durationInMs(),animate:t.animate??this.globalSettings.animate(),showProgressBar:t.showProgessBar??this.globalSettings.showProgressBar(),showCloseButton:t.showCloseButton??this.globalSettings.showCloseButton()})}queueDanger(t){return this.queueToast(u,{position:t.position??this.globalSettings.position(),data:{title:t.title,message:t.message,type:`danger`},closeButtonColor:`text-danger`,progressBarColor:`text-danger`,hasDefaultBackground:!0,durationInMs:t.durationInMs??this.globalSettings.durationInMs(),animate:t.animate??this.globalSettings.animate(),showProgressBar:t.showProgessBar??this.globalSettings.showProgressBar(),showCloseButton:t.showCloseButton??this.globalSettings.showCloseButton()})}processQueue(){if(this.activePauses>0)return;let t=this.globalSettings.maxOpened();for(;this.activeToasts.length<t&&this.toastQueue.length>0;){let e=this.toastQueue.shift();e&&e()}}buildAndAttachToast(t,e,n){let s=ve.create({providers:[{provide:j,useValue:e.data}],parent:this.injector}),c=Kd(t,{environmentInjector:this.environmentInjector,elementInjector:s});this.isIToast(c.instance)&&(c.instance.toast=n,c.instance.onToastInit?.());let d=ve.create({providers:[{provide:D,useValue:n}],parent:this.injector}),l=Kd(F,{environmentInjector:this.environmentInjector,elementInjector:d});l.instance.componentRef=c,l.instance.config=e,l.instance.toastRef=n,this.appRef.attachView(l.hostView),this.getContainer(e.position||`top-right`).appendChild(l.location.nativeElement),this.activeToasts.push(l);let g=!1;n.config=e,n.onPause$.subscribe(()=>{g||(g=!0,this.activePauses++)}),n.onResume$.subscribe(()=>{g&&(g=!1,this.activePauses=Math.max(0,this.activePauses-1),this.activePauses===0&&this.processQueue())}),n.afterClosed$.pipe(nr(1)).subscribe(()=>{g&&(g=!1,this.activePauses=Math.max(0,this.activePauses-1)),this.finalizeToast(l)})}finalizeToast(t){let e=this.activeToasts.indexOf(t);e>-1&&this.activeToasts.splice(e,1),this.appRef.detachView(t.hostView),t.location.nativeElement.remove(),t.destroy(),this.processQueue()}getContainer(t){if(this.containers.has(t))return this.containers.get(t);let e=this.document.createElement(`div`);return e.classList.add(`toast-container`,`toast-container-${t}`),this.document.body.appendChild(e),this.containers.set(t,e),e}resolveConfig(t){let e=t?.animate??this.globalSettings.animate(),n=this.a11y.isReducedMotion()?!1:e;return s(r({},t),{position:t?.position??this.globalSettings.position(),glassiness:t?.glassiness??this.globalSettings.glassiness(),glassQuality:t?.glassQuality??this.globalSettings.glassQuality(),animate:n,wrapperClass:t?.wrapperClass??this.globalSettings.wrapperClass(),durationInMs:t?.durationInMs??this.globalSettings.durationInMs(),swipeToDismiss:t?.swipeToDismiss??this.globalSettings.swipeToDismiss(),showCloseButton:t?.showCloseButton??this.globalSettings.showCloseButton(),closeButtonColor:t?.closeButtonColor??this.globalSettings.closeButtonColor(),showProgressBar:t?.showProgressBar??this.globalSettings.showProgressBar(),progressBarColor:t?.progressBarColor??this.globalSettings?.progressBarColor()})}isIToast(t){return typeof t==`object`&&t!==null&&`toast`in t}static ɵfac=function(e){return new(e||o)};static ɵprov=V$1({token:o,factory:o.ɵfac,providedIn:`root`})};export{ft as n,w as r,V as t};