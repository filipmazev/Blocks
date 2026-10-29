import{n as s,t as r}from"./chunk-C9yOwMO6.js";import{$ as MA,A as Di,Bn as vl,C,D as Ct,G as Hn,Gt as an,Ht as _e,Lt as Yo,Mt as Wo,Nt as X,Ot as Ud,Rn as un,Un as x,Ut as _i,V as H,Wn as xa,Yt as ce,_n as nn,cn as it,dn as ke,et as Ma,ft as Q,g as Ae,hn as mn,in as h,k as De,kt as Ue,lt as Ot,mt as Qe,nt as N,ot as Nr,p as $e,pt as QE,rn as gu,rt as Ne,sn as ie,st as Nt,tt as Mu,un as jn,vn as oe,wn as qe,xn as pe,xt as S,y as B,yn as ot,yt as Rr,zt as Zo}from"./main-NYZXUFEE.js";var w=class o{position=S(`top-right`);animate=S(!0);wrapperClass=S(void 0);durationInMs=S(5e3);swipeToDismiss=S(!0);maxOpened=S(4);showCloseButton=S(!0);closeButtonColor=S(`text-primary`);showProgressBar=S(!0);progressBarColor=S(`text-primary`);update(t){t.position!==void 0&&this.position.set(t.position),t.animate!==void 0&&this.animate.set(t.animate),t.wrapperClass!==void 0&&this.wrapperClass.set(t.wrapperClass),t.durationInMs!==void 0&&this.durationInMs.set(t.durationInMs),t.swipeToDismiss!==void 0&&this.swipeToDismiss.set(t.swipeToDismiss),t.maxOpened!==void 0&&this.maxOpened.set(t.maxOpened),t.showCloseButton!==void 0&&this.showCloseButton.set(t.showCloseButton),t.closeButtonColor!==void 0&&this.closeButtonColor.set(t.closeButtonColor),t.showProgressBar!==void 0&&this.showProgressBar.set(t.showProgressBar),t.progressBarColor!==void 0&&this.progressBarColor.set(t.progressBarColor)}static ɵfac=function(e){return new(e||o)};static ɵprov=N({token:o,factory:o.ɵfac,providedIn:`root`})};var D=class{afterClosedSubject=new X;pauseSubject=new X;resumeSubject=new X;afterClosed$=this.afterClosedSubject.asObservable();onPause$=this.pauseSubject.asObservable();onResume$=this.resumeSubject.asObservable();config;close(t){this.afterClosedSubject.next(t),this.afterClosedSubject.complete()}pause(){this.pauseSubject.next()}resume(){this.resumeSubject.next()}};var j=new C(`TOAST_DATA`);var V=class o{data=h(j);toast;onToastInit(){}close(t){this.toast?.close(t)}static ɵfac=function(e){return new(e||o)};static ɵprov=N({token:o,factory:o.ɵfac})};function Tt(o,t){if(o&1&&(ce(0,`h4`,3),nn(1),pe(),ce(2,`p`,4),nn(3),pe()),o&2){let e=ke();ie(),Rr(e.resolvedTitle()),ie(2),Rr(e.resolvedMessage())}}function wt(o,t){if(o&1&&(ce(0,`p`,2),nn(1),pe()),o&2){let e=ke();ie(),Rr(e.resolvedMessage())}}var u=class o extends V{i18n=h(Ot,{optional:!0});resolvedTitle=x(()=>{this.i18n?.version?.();let t=this.data.title;if(t)return an(t)?this.i18n?.translate(t.key)??t.key:t});resolvedMessage=x(()=>{this.i18n?.version?.();let t=this.data.message;if(t)return an(t)?this.i18n?.translate(t.key)??t.key:t});dismiss(){this.toast?.close()}static ɵfac=(()=>{let t;return function(n){return(t||(t=mn(o)))(n||o)}})();static ɵcmp=De({type:o,selectors:[[`bx-simple-toast`]],features:[it],decls:4,vars:2,consts:[[1,`simple-toast`,3,`ngClass`],[1,`simple-toast-content`],[1,`simple-toast-message`,`large-message`],[1,`simple-toast-title`],[1,`simple-toast-message`]],template:function(e,n){e&1&&(ce(0,`div`,0)(1,`div`,1),Ue(2,Tt,4,2)(3,wt,2,1,`p`,2),pe()()),e&2&&(Qe(`ngClass`,n.data.type),ie(2),$e(n.resolvedTitle()?2:3))},dependencies:[Zo,MA],styles:[`
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
}`],changeDetection:1})};var yt=[`dynamicContainer`];var St=[`toastSwipeTarget`];var xt=[`animatorWrapper`];var Bt=[`progressBar`];function Mt(o,t){if(o&1){let e=Ma();ce(0,`button`,8),qe(`click`,function(){_i(e);let i=ke();return Di(i.closeToast())}),ot(1,`bx-icon`,9),pe()}if(o&2){let e=ke();ie(),Qe(`color`,e.closeButtonColor())}}function Dt(o,t){if(o&1&&(ce(0,`div`,10),ot(1,`div`,11,3),pe()),o&2){let e=ke();Nr(`background`,e.progressBarBgCssVar()),ie(),Nr(`background`,e.progressBarCssVar())}}var F=class o{zone=h(H);lighting=h(Ud);a11y=h(Ne);toastrGlobalSettingsService=h(w);componentRef;config;toastRef;isVisible=S(!1);currentTranslateY=S(0);isSwipingFinished=S(!1);isCollapsing=S(!1);showCloseButton=x(()=>this.config?.showCloseButton??this.toastrGlobalSettingsService.showCloseButton());closeButtonColor=x(()=>this.config?.closeButtonColor??this.toastrGlobalSettingsService.closeButtonColor());showProgressBar=x(()=>this.config?.showProgressBar===!1?!1:this.config?.showProgressBar===!0||this.config?.progressBarColor!==void 0);progressBarColor=x(()=>this.showProgressBar()?this.config?.progressBarColor??this.toastrGlobalSettingsService.progressBarColor():void 0);progressBarCssVar=x(()=>{let t=this.progressBarColor();return t?vl(t):void 0});progressBarBgCssVar=x(()=>{let t=this.progressBarColor();return t?vl(QE(t)):void 0});isAnimated=x(()=>!this.a11y.isReducedMotion()&&this.config?.animate!==!1);isBottom=x(()=>(this.config?.position??this.toastrGlobalSettingsService.position()).includes(`bottom`));dynamicContainer;toastSwipeTarget;animatorWrapper;progressBar;simpleToastSurface=x(()=>{let t=this.componentRef?.instance;return t instanceof u?`color-mix(in srgb, var(--bx-bg-surface) 92%, var(--bx-bg-${t.data.type}))`:null});emissionColor=x(()=>{let t=this.componentRef?.instance;return t instanceof u?`var(--bx-text-${t.data.type})`:this.progressBarCssVar()});wrapperClasses=x(()=>{return`${(this.config?.position??`top-right`).includes(`top`)?`anim-dir-top`:`anim-dir-bottom`} ${this.config?.wrapperClass??`default-wrapper`+(this.config?.hasDefaultBackground===!1?` no-bg`:``)}`});toastrTransform=x(()=>{if(!this.isAnimated())return null;let t=(this.config?.position??`top-right`).includes(`top`);return this.isSwipingFinished()?t?`translateY(-150px)`:`translateY(150px)`:this.currentTranslateY()!==0?`translateY(${this.currentTranslateY()}px)`:null});light;lightFrame;lastLightProgress=-1;destroyed=!1;progressAnimation;subs=new oe;remainingMs=0;timerStartTime=0;originalCloseFn;closeResult;isTrackingSwipe=!1;isTouchActive=!1;autoCloseTimeout;hasEmittedClose=!1;cleanupListeners=[];swipeCleanupListeners=null;globalResizeCleanup=null;ngOnInit(){this.dynamicContainer.insert(this.componentRef.hostView),this.originalCloseFn=this.toastRef.close.bind(this.toastRef),this.toastRef.close=n=>{this.closeToast(n)},setTimeout(()=>this.isVisible.set(!0),10),this.config?.swipeToDismiss!==!1&&(this.startVerticalSwipeDetection(),this.monitorInputType());let t=this.animatorWrapper.nativeElement,e=n=>{n.target!==t||n.propertyName!==`grid-template-rows`||this.isCollapsing()&&!this.hasEmittedClose&&(this.hasEmittedClose=!0,this.originalCloseFn(this.closeResult))};t.addEventListener(`transitionend`,e),this.cleanupListeners.push(()=>t.removeEventListener(`transitionend`,e))}ngAfterViewInit(){let t=this.config?.durationInMs;t&&(this.remainingMs=t,this.startTimer()),t&&this.progressBar?.nativeElement&&(this.progressAnimation=this.progressBar.nativeElement.animate([{width:`100%`},{width:`0%`}],{duration:t,fill:`forwards`}),this.subs.add(this.toastRef.onPause$.subscribe(()=>{this.progressAnimation?.pause(),this.paintLight(),this.stopLightFrame()})),this.subs.add(this.toastRef.onResume$.subscribe(()=>{this.progressAnimation?.play(),this.startLightFrame()}))),this.startLightFrame()}ngOnDestroy(){this.destroyed=!0,this.stopLightFrame(),this.light?.destroy(),clearTimeout(this.autoCloseTimeout),this.stopVerticalSwipeDetection(),this.globalResizeCleanup?.(),this.cleanupListeners.forEach(t=>t()),this.cleanupListeners=[],this.progressAnimation?.cancel(),this.subs.unsubscribe()}closeToast(t,e=!1){if(this.closeResult=t!==void 0?t:this.closeResult,this.stopLightFrame(),this.light?.destroy(),this.light=void 0,!this.isAnimated()){this.hasEmittedClose||(this.hasEmittedClose=!0,this.originalCloseFn(this.closeResult));return}this.isVisible.set(!1),this.isCollapsing.set(!0),e&&this.isSwipingFinished.set(!0)}onMouseEnter(){!this.isTouchActive&&this.config?.durationInMs&&!this.isCollapsing()&&this.pauseTimer()}onMouseLeave(){!this.isTouchActive&&this.config?.durationInMs&&!this.isCollapsing()&&(this.startTimer(),this.toastRef.resume())}paintLight(){let t=this.toastSwipeTarget.nativeElement,e=this.emissionColor(),n=t.closest(`.toast-container`);if(!e||!n||this.destroyed)return;let i=t.getBoundingClientRect(),c=this.progressBar?.nativeElement,d=c?.getBoundingClientRect(),l=d&&i.width?(d.right-i.left)/i.width:.5;if(Math.abs(l-this.lastLightProgress)<1e-4)return;this.lastLightProgress=l,t.style.setProperty(`--bx-toast-light-x`,`${l*100}%`);let v={element:c??t,offsetX:c?1:.5,offsetY:1,excludeElement:t,color:e,z:48,intensity:1.1,radius:360};this.light?this.light.update(v):this.light=this.lighting.register(n,v)}startLightFrame(){this.paintLight(),this.lightFrame===void 0&&this.progressAnimation&&!this.destroyed&&this.isAnimated()&&this.zone.runOutsideAngular(()=>{let t=()=>{this.lightFrame=void 0,!(this.destroyed||this.isCollapsing()||!this.isAnimated())&&(this.paintLight(),this.progressAnimation?.playState===`running`&&(this.lightFrame=requestAnimationFrame(t)))};this.lightFrame=requestAnimationFrame(t)})}stopLightFrame(){this.lightFrame!==void 0&&cancelAnimationFrame(this.lightFrame),this.lightFrame=void 0}startVerticalSwipeDetection(){if(this.isTrackingSwipe||!(typeof window<`u`&&(window.matchMedia(`(pointer: coarse)`).matches||navigator.maxTouchPoints>0)))return;this.isTrackingSwipe=!0;let e=this.toastSwipeTarget.nativeElement,n=(this.config?.position??`top-right`).includes(`top`),i=0,c=0,d=!1,l=0,v=p=>{if(p.button!==0&&p.pointerType===`mouse`)return;l=(e.offsetHeight||0)/3,d=!0,i=p.clientY,c=p.timeStamp,this.pauseTimer(),e.setPointerCapture(p.pointerId)},g=p=>{if(!d)return;let b=p.clientY-i;(n&&b<0||!n&&b>0)&&(p.cancelable&&p.preventDefault(),this.currentTranslateY.set(b))},P=p=>{if(!d)return;d=!1,e.releasePointerCapture(p.pointerId);let b=p.clientY-i,bt=p.timeStamp-c||1,Ct=Math.abs(b/bt);(n?b<-l:b>l)||Ct>.3?this.closeToast(void 0,!0):(this.currentTranslateY.set(0),this.startTimer(),this.toastRef.resume())};e.addEventListener(`pointerdown`,v,{passive:!1}),e.addEventListener(`pointermove`,g,{passive:!1}),e.addEventListener(`pointerup`,P),e.addEventListener(`pointercancel`,P),this.swipeCleanupListeners=()=>{e.removeEventListener(`pointerdown`,v),e.removeEventListener(`pointermove`,g),e.removeEventListener(`pointerup`,P),e.removeEventListener(`pointercancel`,P)}}stopVerticalSwipeDetection(){this.isTrackingSwipe&&(this.isTrackingSwipe=!1,this.swipeCleanupListeners&&(this.swipeCleanupListeners(),this.swipeCleanupListeners=null))}monitorInputType(){if(this.globalResizeCleanup)return;let t=e=>{let n=e.pointerType===`touch`;n&&!this.isTouchActive?(this.isTouchActive=!0,this.startVerticalSwipeDetection()):!n&&this.isTouchActive&&(this.isTouchActive=!1,this.stopVerticalSwipeDetection())};window.addEventListener(`pointerdown`,t),this.globalResizeCleanup=()=>window.removeEventListener(`pointerdown`,t)}startTimer(){this.remainingMs<=0||(this.timerStartTime=Date.now(),this.autoCloseTimeout=setTimeout(()=>this.closeToast(),this.remainingMs))}pauseTimer(){if(!this.autoCloseTimeout)return;clearTimeout(this.autoCloseTimeout),this.autoCloseTimeout=void 0;let t=Date.now()-this.timerStartTime;this.remainingMs-=t,this.toastRef.pause()}static ɵfac=function(e){return new(e||o)};static ɵcmp=De({type:o,selectors:[[`bx-toast-core`]],viewQuery:function(e,n){if(e&1&&xa(yt,7,Ct)(St,7)(xt,7)(Bt,5),e&2){let i;Wo(i=Yo())&&(n.dynamicContainer=i.first),Wo(i=Yo())&&(n.toastSwipeTarget=i.first),Wo(i=Yo())&&(n.animatorWrapper=i.first),Wo(i=Yo())&&(n.progressBar=i.first)}},hostBindings:function(e,n){e&1&&qe(`mouseenter`,function(){return n.onMouseEnter()})(`mouseleave`,function(){return n.onMouseLeave()})},decls:8,vars:19,consts:[[`animatorWrapper`,``],[`toastSwipeTarget`,``],[`dynamicContainer`,``],[`progressBar`,``],[1,`toast-animator`],[`bxSurface`,``,1,`toast-wrapper`,3,`ngClass`],[`type`,`button`,`aria-label`,`Close toast`,1,`toast-close-button`],[1,`toast-progress-container`,3,`background`],[`type`,`button`,`aria-label`,`Close toast`,1,`toast-close-button`,3,`click`],[`name`,`x`,`size`,`20`,3,`color`],[1,`toast-progress-container`],[1,`toast-progress-bar`]],template:function(e,n){e&1&&(ce(0,`div`,4,0)(2,`div`,5,1),Ue(4,Mt,2,1,`button`,6),gu(5,null,2),Ue(7,Dt,3,4,`div`,7),pe()()),e&2&&(Ae(`collapsing`,n.isCollapsing())(`is-bottom`,n.isBottom()),ie(2),Nr(`transform`,n.toastrTransform())(`--%NS%bx-toast-bg`,n.simpleToastSurface())(`--%NS%bx-toast-emission`,n.emissionColor()),Ae(`show`,n.isVisible())(`no-animate`,!n.isAnimated())(`has-emission`,!!n.emissionColor()),Qe(`ngClass`,n.wrapperClasses()),ie(2),$e(n.showCloseButton()?4:-1),ie(3),$e(n.config?.durationInMs&&n.showProgressBar()&&n.progressBarCssVar()&&n.progressBarBgCssVar()?7:-1))},dependencies:[Hn,MA,jn],styles:[`
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
}`],changeDetection:1})};var ft=class o{injector=h(Q);appRef=h(Nt);environmentInjector=h(_e);document=h(B);globalSettings=h(w);a11y=h(Ne);toastQueue=[];activeToasts=[];containers=new Map;activePauses=0;queueToast(t,e){let n=this.resolveConfig(e),i=new D;return this.toastQueue.push(()=>this.buildAndAttachToast(t,n,i)),this.processQueue(),i}queueSuccess(t){return this.queueToast(u,{position:t.position??this.globalSettings.position(),data:{title:t.title,message:t.message,type:`success`},closeButtonColor:`text-success`,progressBarColor:`text-success`,hasDefaultBackground:!0,durationInMs:t.durationInMs??this.globalSettings.durationInMs(),animate:t.animate??this.globalSettings.animate(),showProgressBar:t.showProgessBar??this.globalSettings.showProgressBar(),showCloseButton:t.showCloseButton??this.globalSettings.showCloseButton()})}queueInfo(t){return this.queueToast(u,{position:t.position??this.globalSettings.position(),data:{title:t.title,message:t.message,type:`info`},closeButtonColor:`text-info`,progressBarColor:`text-info`,hasDefaultBackground:!0,durationInMs:t.durationInMs??this.globalSettings.durationInMs(),animate:t.animate??this.globalSettings.animate(),showProgressBar:t.showProgessBar??this.globalSettings.showProgressBar(),showCloseButton:t.showCloseButton??this.globalSettings.showCloseButton()})}queueWarning(t){return this.queueToast(u,{position:t.position??this.globalSettings.position(),data:{title:t.title,message:t.message,type:`warn`},closeButtonColor:`text-warn`,progressBarColor:`text-warn`,hasDefaultBackground:!0,durationInMs:t.durationInMs??this.globalSettings.durationInMs(),animate:t.animate??this.globalSettings.animate(),showProgressBar:t.showProgessBar??this.globalSettings.showProgressBar(),showCloseButton:t.showCloseButton??this.globalSettings.showCloseButton()})}queueDanger(t){return this.queueToast(u,{position:t.position??this.globalSettings.position(),data:{title:t.title,message:t.message,type:`danger`},closeButtonColor:`text-danger`,progressBarColor:`text-danger`,hasDefaultBackground:!0,durationInMs:t.durationInMs??this.globalSettings.durationInMs(),animate:t.animate??this.globalSettings.animate(),showProgressBar:t.showProgessBar??this.globalSettings.showProgressBar(),showCloseButton:t.showCloseButton??this.globalSettings.showCloseButton()})}processQueue(){if(this.activePauses>0)return;let t=this.globalSettings.maxOpened();for(;this.activeToasts.length<t&&this.toastQueue.length>0;){let e=this.toastQueue.shift();e&&e()}}buildAndAttachToast(t,e,n){let i=Q.create({providers:[{provide:j,useValue:e.data}],parent:this.injector}),c=Mu(t,{environmentInjector:this.environmentInjector,elementInjector:i});this.isIToast(c.instance)&&(c.instance.toast=n,c.instance.onToastInit?.());let d=Q.create({providers:[{provide:D,useValue:n}],parent:this.injector}),l=Mu(F,{environmentInjector:this.environmentInjector,elementInjector:d});l.instance.componentRef=c,l.instance.config=e,l.instance.toastRef=n,this.appRef.attachView(l.hostView),this.getContainer(e.position||`top-right`).appendChild(l.location.nativeElement),this.activeToasts.push(l);let g=!1;n.config=e,n.onPause$.subscribe(()=>{g||(g=!0,this.activePauses++)}),n.onResume$.subscribe(()=>{g&&(g=!1,this.activePauses=Math.max(0,this.activePauses-1),this.activePauses===0&&this.processQueue())}),n.afterClosed$.pipe(un(1)).subscribe(()=>{g&&(g=!1,this.activePauses=Math.max(0,this.activePauses-1)),this.finalizeToast(l)})}finalizeToast(t){let e=this.activeToasts.indexOf(t);e>-1&&this.activeToasts.splice(e,1),this.appRef.detachView(t.hostView),t.location.nativeElement.remove(),t.destroy(),this.processQueue()}getContainer(t){if(this.containers.has(t))return this.containers.get(t);let e=this.document.createElement(`div`);return e.classList.add(`toast-container`,`toast-container-${t}`),this.document.body.appendChild(e),this.containers.set(t,e),e}resolveConfig(t){let e=t?.animate??this.globalSettings.animate(),n=this.a11y.isReducedMotion()?!1:e;return s(r({},t),{position:t?.position??this.globalSettings.position(),animate:n,wrapperClass:t?.wrapperClass??this.globalSettings.wrapperClass(),durationInMs:t?.durationInMs??this.globalSettings.durationInMs(),swipeToDismiss:t?.swipeToDismiss??this.globalSettings.swipeToDismiss(),showCloseButton:t?.showCloseButton??this.globalSettings.showCloseButton(),closeButtonColor:t?.closeButtonColor??this.globalSettings.closeButtonColor(),showProgressBar:t?.showProgressBar??this.globalSettings.showProgressBar(),progressBarColor:t?.progressBarColor??this.globalSettings?.progressBarColor()})}isIToast(t){return typeof t==`object`&&t!==null&&`toast`in t}static ɵfac=function(e){return new(e||o)};static ɵprov=N({token:o,factory:o.ɵfac,providedIn:`root`})};export{ft as n,w as r,V as t};