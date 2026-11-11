import{$n as am,$r as hs,Ai as nn,Ar as eO,Bi as p,Ca as un,Ci as lt,D as Et,En as X,Hr as g,Kt as S,L as H,Mt as Ot,N as G,Na as wm,Nr as ee,Nt as P,Qt as T,R as HD,Ri as on,T as Ee$1,Ti as me,U as Ie$1,Va as yn,Vr as ft,Wi as pe,Wn as Zx,X as JA,Ya as zt,Yt as Se,_t as Me$1,c as Ae$1,ft as Ln,g as C,h as Bt,ha as tn,hi as ke$1,ir as be,jr as eS,k as Fn,ka as vr,ki as ne,kt as Oe$1,ln as V$1,lt as La,na as rP,nr as at,o as A,or as bt,ot as Kt,pa as te,v as Ce,wa as up,x as Do,xa as ue,y as D$1,yi as le}from"./chunk-zW9dIJoT.js";import{n as s,t as r}from"./chunk-DFgPOoGa.js";var D=class n{position=D$1(`top-right`);animate=D$1(!0);wrapperClass=D$1(void 0);durationInMs=D$1(5e3);swipeToDismiss=D$1(!0);maxOpened=D$1(4);glassiness=D$1(`auto`);glassQuality=D$1(`enhanced`);showCloseButton=D$1(!0);closeButtonColor=D$1(`text-primary`);showProgressBar=D$1(!0);progressBarColor=D$1(`text-primary`);update(e){e.position!==void 0&&this.position.set(e.position),e.animate!==void 0&&this.animate.set(e.animate),e.wrapperClass!==void 0&&this.wrapperClass.set(e.wrapperClass),e.durationInMs!==void 0&&this.durationInMs.set(e.durationInMs),e.swipeToDismiss!==void 0&&this.swipeToDismiss.set(e.swipeToDismiss),e.maxOpened!==void 0&&this.maxOpened.set(e.maxOpened),e.glassiness!==void 0&&this.glassiness.set(e.glassiness),e.glassQuality!==void 0&&this.glassQuality.set(e.glassQuality),e.showCloseButton!==void 0&&this.showCloseButton.set(e.showCloseButton),e.closeButtonColor!==void 0&&this.closeButtonColor.set(e.closeButtonColor),e.showProgressBar!==void 0&&this.showProgressBar.set(e.showProgressBar),e.progressBarColor!==void 0&&this.progressBarColor.set(e.progressBarColor)}static ɵfac=function(t){return new(t||n)};static ɵprov=ee({token:n,factory:n.ɵfac,providedIn:`root`})};var v=class{configuration;lifecycle=D$1(`queued`);isPaused=D$1(!1);afterClosedSubject=new Ie$1;pauseSubject=new Ie$1;resumeSubject=new Ie$1;durationSubject=new Ie$1;config;data=g(()=>this.config().data);state=this.lifecycle.asReadonly();paused=this.isPaused.asReadonly();afterClosed$=this.afterClosedSubject.asObservable();onPause$=this.pauseSubject.asObservable();onResume$=this.resumeSubject.asObservable();durationChanges$=this.durationSubject.asObservable();closeHandler;constructor(e={}){this.configuration=D$1(r({},e)),this.config=this.configuration.asReadonly()}patch(e){this.state()===`closing`||this.state()===`closed`||(this.configuration.update(t=>s(r({},t),{data:e.data===void 0?t.data:this.patchData(t.data,e.data),durationInMs:e.durationInMs===void 0?t.durationInMs:Math.max(0,Number.isFinite(e.durationInMs)?e.durationInMs:0),showCloseButton:e.showCloseButton??t.showCloseButton,closeButtonColor:e.closeButtonColor===void 0?t.closeButtonColor:e.closeButtonColor??void 0,showProgressBar:e.showProgressBar??t.showProgressBar,progressBarColor:e.progressBarColor===void 0?t.progressBarColor:e.progressBarColor??void 0,wrapperClass:e.wrapperClass===void 0?t.wrapperClass:e.wrapperClass??void 0,hasDefaultBackground:e.hasDefaultBackground??t.hasDefaultBackground,glassiness:e.glassiness??t.glassiness,glassQuality:e.glassQuality??t.glassQuality})),e.durationInMs!==void 0&&this.durationSubject.next(this.config().durationInMs??0))}close(e){this.state()===`closing`||this.state()===`closed`||(this.beginClose(),this.closeHandler?this.closeHandler(e):this.completeClose(e))}pause(){this.paused()||this.state()===`closing`||this.state()===`closed`||(this.isPaused.set(!0),this.pauseSubject.next())}resume(){!this.paused()||this.state()===`closing`||this.state()===`closed`||(this.isPaused.set(!1),this.resumeSubject.next())}attach(e){this.state()===`queued`&&(this.closeHandler=e,this.lifecycle.set(`open`))}beginClose(){this.state()!==`closed`&&this.lifecycle.set(`closing`)}completeClose(e){this.state()!==`closed`&&(this.lifecycle.set(`closed`),this.closeHandler=void 0,this.afterClosedSubject.next(e),this.afterClosedSubject.complete(),this.pauseSubject.complete(),this.resumeSubject.complete(),this.durationSubject.complete())}patchData(e,t){if(!this.isPlainObject(t))return t;let i=Object.fromEntries(Object.entries(t).filter(([,o])=>o!==void 0));return r(r({},this.isPlainObject(e)?e:{}),i)}isPlainObject(e){if(e===null||typeof e!=`object`)return!1;let t=Object.getPrototypeOf(e);return t===Object.prototype||t===null}};var Q=class n{toastRef=p(v);toast=this.toastRef;data=this.toast.data;onToastInit(){}close(e){this.toast?.close(e)}static ɵfac=function(t){return new(t||n)};static ɵprov=ee({token:n,factory:n.ɵfac})};function Ie(n,e){if(n&1&&Ae$1(0,`bx-icon`,7),n&2){let t=e,i=S(2),o=eO(0);Ce(`visibility`,o?.loading?`hidden`:`visible`),V$1(`name`,t.name)(`size`,i.iconSize())(`color`,t.color)(`bgColor`,t.bgColor)(`strokeWidth`,t.strokeWidth)}}function Re(n,e){if(n&1&&Ae$1(0,`bx-loading-spinner`,6),n&2){let t=S(2),i=eO(0);V$1(`size`,t.iconSize())(`label`,i?.loadingLabel??`Loading`)}}function Ne(n,e){if(n&1&&(A(0,`span`,4),te(1,Ie,1,7,`bx-icon`,5),te(2,Re,1,2,`bx-loading-spinner`,6),P()),n&2){let t,i=S(),o=eO(0);Ce(`min-inline-size`,i.iconSize(),`px`)(`min-block-size`,i.iconSize(),`px`),C(),ne((t=o?.icon)?1:-1,t),C(),ne(o?.loading?2:-1)}}function _e(n,e){if(n&1&&(A(0,`h4`,8),me(1),P(),A(2,`p`,9),me(3),P()),n&2){let t=S();C(),Me$1(t.resolvedTitle()),C(2),Me$1(t.resolvedMessage())}}function Le(n,e){if(n&1&&(A(0,`p`,3),me(1),P()),n&2){let t=S();C(),Me$1(t.resolvedMessage())}}var b=class n extends Q{i18n=p(Se,{optional:!0});resolvedTitle=g(()=>be(this.data()?.title??void 0,this.i18n));resolvedMessage=g(()=>be(this.data()?.message,this.i18n));iconSize=g(()=>{let e=Number(this.data()?.icon?.size??24);return Number.isFinite(e)&&e>0?e:24});static ɵfac=(()=>{let e;return function(i){return(e||(e=Do(n)))(i||n)}})();static ɵcmp=G({type:n,selectors:[[`bx-simple-toast`]],features:[un],decls:6,vars:4,consts:[[1,`simple-toast`,3,`ngClass`],[1,`simple-toast-icon-area`,3,`min-inline-size`,`min-block-size`],[`aria-live`,`polite`,`aria-atomic`,`true`,1,`simple-toast-content`],[1,`simple-toast-message`,`large-message`],[1,`simple-toast-icon-area`],[3,`name`,`size`,`color`,`bgColor`,`strokeWidth`,`visibility`],[3,`size`,`label`],[3,`name`,`size`,`color`,`bgColor`,`strokeWidth`],[1,`simple-toast-title`],[1,`simple-toast-message`]],template:function(t,i){if(t&1&&(eS(0),A(1,`div`,0),te(2,Ne,3,6,`span`,1),A(3,`div`,2),te(4,_e,4,2)(5,Le,2,1,`p`,3),P()()),t&2){let o=JA(i.data());C(),V$1(`ngClass`,o?.type??`info`),C(),ne(o?.icon||o?.loading!==void 0?2:-1),C(2),ne(i.resolvedTitle()?4:5)}},dependencies:[rP,on,wm],styles:[`
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
}`]})};var Oe=[`dynamicContainer`];var Ee=[`toastSwipeTarget`];var Ae=[`animatorWrapper`];var je=[`progressBar`];function ke(n,e){if(n&1){let t=tn();A(0,`button`,8),ue(`click`,function(){at(t);let o=S();return lt(o.closeToast())}),Ae$1(1,`bx-icon`,9),P()}if(n&2){let t=S();C(),V$1(`color`,t.closeButtonColor())}}function Ge(n,e){if(n&1&&(A(0,`div`,10),Ae$1(1,`div`,11,3),P()),n&2){let t=S();Ce(`background`,t.progressBarBgCssVar()),C(),Ce(`background`,t.progressBarCssVar())}}var V=class n{themingService=p(La);ngZone=p(X);platformId=p(bt);bxGlassLightingService=p(am);bxA11yService=p(Oe$1);toastrGlobalSettingsService=p(D);toastRef=p(v);showCloseButton=g(()=>this.config().showCloseButton??this.toastrGlobalSettingsService.showCloseButton());closeButtonColor=g(()=>this.config().closeButtonColor??this.toastrGlobalSettingsService.closeButtonColor());showProgressBar=g(()=>this.config().showProgressBar===!1?!1:this.config().showProgressBar===!0||this.config().progressBarColor!==void 0);progressBarColor=g(()=>{if(!this.showProgressBar())return;let e=this.config().progressBarColor??this.toastrGlobalSettingsService.progressBarColor();return Zx(e)?this.themingService.activeTheme()===`dark`?e.dark??e.light:e.light:e});progressBarCssVar=g(()=>{let e=this.progressBarColor();return e?hs(e):void 0});progressBarBgCssVar=g(()=>{let e=this.progressBarColor();return e?hs(HD(e)):void 0});isAnimated=g(()=>!this.bxA11yService.isReducedMotion()&&this.config().animate!==!1);isBottom=g(()=>(this.config().position??this.toastrGlobalSettingsService.position()).includes(`bottom`));simpleToastSurface=g(()=>{let e=this.componentRef?.instance;return e instanceof b?`color-mix(in srgb, var(--bx-bg-surface) 92%, var(--bx-bg-${e.data()?.type??`info`}))`:null});emissionColor=g(()=>{let e=this.componentRef?.instance;return e instanceof b?`var(--bx-text-${e.data()?.type??`info`})`:this.progressBarCssVar()});wrapperClasses=g(()=>{return`${(this.config().position??`top-right`).includes(`top`)?`anim-dir-top`:`anim-dir-bottom`} ${this.config().wrapperClass??`default-wrapper`}${this.config().hasDefaultBackground===!1?` no-bg`:``}`});toastrTransform=g(()=>{if(!this.isAnimated())return null;let e=(this.config().position??`top-right`).includes(`top`);return this.isSwipingFinished()?e?`translateY(-150px)`:`translateY(150px)`:this.currentTranslateY()!==0?`translateY(${this.currentTranslateY()}px)`:null});dynamicContainer=nn.required(`dynamicContainer`,{read:Bt});toastSwipeTarget=nn.required(`toastSwipeTarget`);animatorWrapper=nn.required(`animatorWrapper`);progressBar=nn(`progressBar`);config=this.toastRef.config;isVisible=D$1(!1);currentTranslateY=D$1(0);isSwipingFinished=D$1(!1);isCollapsing=D$1(!1);componentRef;light;lightFrame;lastLightProgress=-1;lastLightColor;destroyed=!1;progressAnimation;subs=new Ee$1;remainingMs=0;timerStartTime=0;lifetimeMs=0;viewReady=!1;closing=!1;progressElement;entranceTimeout;collapseTimeout;closeResult;isTrackingSwipe=!1;isTouchActive=!1;autoCloseTimeout;hasEmittedClose=!1;cleanupListeners=[];swipeCleanupListeners=null;globalResizeCleanup=null;constructor(){Fn(()=>{let e=this.progressBar()?.nativeElement,t=this.isAnimated(),i=this.toastRef.state();this.config(),this.emissionColor(),H(()=>{if(!(this.destroyed||!this.viewReady)){if(i===`closing`){t||this.finishClose();return}this.syncProgressAnimation(e),this.lastLightProgress=-1,t&&!this.toastRef.paused()?this.startLightFrame():(this.stopLightFrame(),this.paintLight())}})})}ngOnInit(){this.subs.add(this.toastRef.durationChanges$.subscribe(()=>{this.viewReady&&!this.closing&&this.resetLifetime()})),this.subs.add(this.toastRef.onPause$.subscribe(()=>{this.pauseTimer(),this.progressAnimation?.pause(),this.paintLight(),this.stopLightFrame()})),this.subs.add(this.toastRef.onResume$.subscribe(()=>{this.startTimer(),this.progressAnimation?.play(),this.startLightFrame()}))}ngAfterViewInit(){if(this.dynamicContainer().insert(this.componentRef.hostView),this.viewReady=!0,!Ot(this.platformId))return;this.entranceTimeout=setTimeout(()=>{!this.destroyed&&!this.closing&&this.isVisible.set(!0)},10),this.config().swipeToDismiss!==!1&&(this.startVerticalSwipeDetection(),this.monitorInputType());let e=this.animatorWrapper().nativeElement,t=i=>{i.target!==e||i.propertyName!==`grid-template-rows`||this.isCollapsing()&&!this.hasEmittedClose&&(this.hasEmittedClose=!0,this.toastRef.completeClose(this.closeResult))};e.addEventListener(`transitionend`,t),this.cleanupListeners.push(()=>e.removeEventListener(`transitionend`,t)),this.resetLifetime()}ngOnDestroy(){this.destroyed=!0,this.stopLightFrame(),this.light?.destroy(),clearTimeout(this.autoCloseTimeout),clearTimeout(this.entranceTimeout),clearTimeout(this.collapseTimeout),this.stopVerticalSwipeDetection(),this.globalResizeCleanup?.(),this.cleanupListeners.forEach(e=>e()),this.cleanupListeners=[],this.progressAnimation?.cancel(),this.subs.unsubscribe(),this.componentRef&&!this.componentRef.hostView.destroyed&&this.componentRef.destroy(),this.toastRef.completeClose(this.closeResult)}closeToast(e,t=!1){if(!(this.destroyed||this.closing)){if(this.closing=!0,this.toastRef.beginClose(),this.closeResult=e,clearTimeout(this.autoCloseTimeout),clearTimeout(this.entranceTimeout),this.autoCloseTimeout=void 0,this.progressAnimation?.pause(),this.stopLightFrame(),this.light?.destroy(),this.light=void 0,!this.viewReady||!this.isVisible()||!this.isAnimated()){this.finishClose();return}this.isVisible.set(!1),this.isCollapsing.set(!0),t&&this.isSwipingFinished.set(!0),this.collapseTimeout=setTimeout(()=>this.finishClose(),450)}}onMouseEnter(){!this.isTouchActive&&!this.closing&&this.toastRef.pause()}onMouseLeave(){!this.isTouchActive&&!this.closing&&this.toastRef.resume()}paintLight(){if(!this.viewReady||this.destroyed||this.closing)return;let e=this.toastSwipeTarget().nativeElement,t=this.emissionColor(),i=e.closest(`.toast-container`);if(!t||!i||this.destroyed)return;let o=e.getBoundingClientRect(),u=this.progressBar()?.nativeElement,d=u?.getBoundingClientRect(),r=d&&o.width?(d.right-o.left)/o.width:.5;if(Math.abs(r-this.lastLightProgress)<1e-4&&t===this.lastLightColor)return;this.lastLightProgress=r,this.lastLightColor=t,e.style.setProperty(`--bx-toast-light-x`,`${r*100}%`);let y={element:u??e,offsetX:u?1:.5,offsetY:1,excludeElement:e,color:t,z:48,intensity:1.1,radius:360};this.light?this.light.update(y):this.light=this.bxGlassLightingService.register(i,y)}startLightFrame(){!this.viewReady||this.destroyed||this.closing||(this.paintLight(),this.lightFrame===void 0&&this.progressAnimation&&!this.destroyed&&this.isAnimated()&&this.ngZone.runOutsideAngular(()=>{let e=()=>{this.lightFrame=void 0,!(this.destroyed||this.isCollapsing()||!this.isAnimated())&&(this.paintLight(),this.progressAnimation?.playState===`running`&&(this.lightFrame=requestAnimationFrame(e)))};this.lightFrame=requestAnimationFrame(e)}))}stopLightFrame(){this.lightFrame!==void 0&&cancelAnimationFrame(this.lightFrame),this.lightFrame=void 0}startVerticalSwipeDetection(){if(this.isTrackingSwipe||!(typeof window<`u`&&(window.matchMedia(`(pointer: coarse)`).matches||navigator.maxTouchPoints>0)))return;this.isTrackingSwipe=!0;let t=this.toastSwipeTarget().nativeElement,i=(this.config().position??`top-right`).includes(`top`),o=0,u=0,d=!1,r=0,y=p=>{if(this.closing||p.button!==0&&p.pointerType===`mouse`)return;let g=p.target;if(g instanceof Element&&g.closest(`button, a, input, select, textarea, [role="button"], [contenteditable="true"]`))return;r=(t.offsetHeight||0)/3,d=!0,o=p.clientY,u=p.timeStamp,this.toastRef.pause(),t.setPointerCapture(p.pointerId)},U=p=>{if(!d)return;let g=p.clientY-o;(i&&g<0||!i&&g>0)&&(p.cancelable&&p.preventDefault(),this.currentTranslateY.set(g))},N=p=>{if(!d)return;d=!1,t.releasePointerCapture(p.pointerId);let g=p.clientY-o,J=p.timeStamp-u||1,De=Math.abs(g/J);(i?g<-r:g>r)||De>.3?this.closeToast(void 0,!0):(this.currentTranslateY.set(0),this.toastRef.resume())};t.addEventListener(`pointerdown`,y,{passive:!1}),t.addEventListener(`pointermove`,U,{passive:!1}),t.addEventListener(`pointerup`,N),t.addEventListener(`pointercancel`,N),this.swipeCleanupListeners=()=>{t.removeEventListener(`pointerdown`,y),t.removeEventListener(`pointermove`,U),t.removeEventListener(`pointerup`,N),t.removeEventListener(`pointercancel`,N)}}stopVerticalSwipeDetection(){this.isTrackingSwipe&&(this.isTrackingSwipe=!1,this.swipeCleanupListeners&&(this.swipeCleanupListeners(),this.swipeCleanupListeners=null))}monitorInputType(){if(this.globalResizeCleanup)return;let e=t=>{let i=t.pointerType===`touch`;i&&!this.isTouchActive?(this.isTouchActive=!0,this.startVerticalSwipeDetection()):!i&&this.isTouchActive&&(this.isTouchActive=!1,this.stopVerticalSwipeDetection())};window.addEventListener(`pointerdown`,e),this.globalResizeCleanup=()=>window.removeEventListener(`pointerdown`,e)}resetLifetime(){clearTimeout(this.autoCloseTimeout),this.autoCloseTimeout=void 0,this.progressAnimation?.cancel(),this.progressAnimation=void 0,this.progressElement=void 0,this.stopLightFrame();let e=this.config().durationInMs??0;this.lifetimeMs=Number.isFinite(e)?Math.max(0,e):0,this.remainingMs=this.lifetimeMs,this.startTimer()}startTimer(){if(!(!this.viewReady||this.destroyed||this.closing||this.toastRef.paused()||this.lifetimeMs<=0||this.autoCloseTimeout!==void 0)){if(this.remainingMs<=0){this.closeToast();return}this.timerStartTime=Date.now(),this.autoCloseTimeout=setTimeout(()=>{this.autoCloseTimeout=void 0,this.remainingMs=0,this.closeToast()},this.remainingMs)}}pauseTimer(){this.autoCloseTimeout!==void 0&&(clearTimeout(this.autoCloseTimeout),this.autoCloseTimeout=void 0,this.remainingMs=Math.max(0,this.remainingMs-(Date.now()-this.timerStartTime)))}syncProgressAnimation(e){if(e===this.progressElement&&this.progressAnimation||(this.progressAnimation?.cancel(),this.progressAnimation=void 0,this.progressElement=e,!e||this.lifetimeMs<=0))return;let t=Math.max(0,this.remainingMs-(this.autoCloseTimeout===void 0?0:Date.now()-this.timerStartTime)),i=`${t/this.lifetimeMs*100}%`;e.style.width=i,!(typeof e.animate!=`function`||t<=0)&&(this.progressAnimation=e.animate([{width:i},{width:`0%`}],{duration:t,fill:`forwards`}),this.toastRef.paused()&&this.progressAnimation.pause())}finishClose(){this.hasEmittedClose||(this.hasEmittedClose=!0,clearTimeout(this.collapseTimeout),this.toastRef.completeClose(this.closeResult))}static ɵfac=function(t){return new(t||n)};static ɵcmp=G({type:n,selectors:[[`bx-toast-core`]],viewQuery:function(t,i){t&1&&yn(i.dynamicContainer,Oe,5,Bt)(i.toastSwipeTarget,Ee,5)(i.animatorWrapper,Ae,5)(i.progressBar,je,5),t&2&&Et(4)},hostBindings:function(t,i){t&1&&ue(`mouseenter`,function(){return i.onMouseEnter()})(`mouseleave`,function(){return i.onMouseLeave()})},decls:8,vars:21,consts:[[`animatorWrapper`,``],[`toastSwipeTarget`,``],[`dynamicContainer`,``],[`progressBar`,``],[1,`toast-animator`],[`bxSurface`,``,1,`toast-wrapper`,3,`bxSurfaceGlassiness`,`bxSurfaceQuality`,`ngClass`],[`type`,`button`,`aria-label`,`Close toast`,1,`toast-close-button`],[1,`toast-progress-container`,3,`background`],[`type`,`button`,`aria-label`,`Close toast`,1,`toast-close-button`,3,`click`],[`name`,`x`,`size`,`20`,3,`color`],[1,`toast-progress-container`],[1,`toast-progress-bar`]],template:function(t,i){t&1&&(A(0,`div`,4,0)(2,`div`,5,1),te(4,ke,2,1,`button`,6),Kt(5,null,2),te(7,Ge,3,4,`div`,7),P()()),t&2&&(pe(`collapsing`,i.isCollapsing())(`is-bottom`,i.isBottom()),C(2),Ce(`transform`,i.toastrTransform())(`--%NS%bx-toast-bg`,i.simpleToastSurface())(`--%NS%bx-toast-emission`,i.emissionColor()),pe(`show`,i.isVisible())(`no-animate`,!i.isAnimated())(`has-emission`,!!i.emissionColor()),V$1(`bxSurfaceGlassiness`,i.config().hasDefaultBackground===!1?`off`:i.config().glassiness??`auto`)(`bxSurfaceQuality`,i.config().glassQuality??`enhanced`)(`ngClass`,i.wrapperClasses()),C(2),ne(i.showCloseButton()?4:-1),C(3),ne(i.config().durationInMs&&i.showProgressBar()&&i.progressBarCssVar()&&i.progressBarBgCssVar()?7:-1))},dependencies:[zt,rP,on],styles:[`
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
}`],changeDetection:1})};var Me=new T(`TOAST_DATA`);var Be=class n{injector=p(ke$1);applicationRef=p(Ln);environmentInjector=p(ft);document=p(le);toastrGlobalSettingsService=p(D);toastQueue=[];activeToasts=/* @__PURE__ */ new Set;containers=/* @__PURE__ */ new Map;activePauses=0;isProcessingQueue=!1;queueToast(e,t){let o=new v(this.resolveConfig(t)),u=new Ee$1,d=()=>{u.unsubscribe(),o.state()!==`closed`&&this.buildAndAttachToast(e,o)};return u.add(o.afterClosed$.pipe(vr(1)).subscribe(()=>{let r=this.toastQueue.indexOf(d);r!==-1&&this.toastQueue.splice(r,1),this.processQueue()})),this.toastQueue.push(d),this.processQueue(),o}queueSuccess(e){return this.queueToast(b,{position:e.position??this.toastrGlobalSettingsService.position(),data:{title:e.title,icon:e.icon,loading:e.loading,loadingLabel:e.loadingLabel,message:e.message,type:`success`},closeButtonColor:`text-success`,progressBarColor:`text-success`,hasDefaultBackground:!0,durationInMs:e.durationInMs??this.toastrGlobalSettingsService.durationInMs(),animate:e.animate??this.toastrGlobalSettingsService.animate(),showProgressBar:e.showProgessBar??this.toastrGlobalSettingsService.showProgressBar(),showCloseButton:e.showCloseButton??this.toastrGlobalSettingsService.showCloseButton()})}queueInfo(e){return this.queueToast(b,{position:e.position??this.toastrGlobalSettingsService.position(),data:{title:e.title,icon:e.icon,loading:e.loading,loadingLabel:e.loadingLabel,message:e.message,type:`info`},closeButtonColor:`text-info`,progressBarColor:`text-info`,hasDefaultBackground:!0,durationInMs:e.durationInMs??this.toastrGlobalSettingsService.durationInMs(),animate:e.animate??this.toastrGlobalSettingsService.animate(),showProgressBar:e.showProgessBar??this.toastrGlobalSettingsService.showProgressBar(),showCloseButton:e.showCloseButton??this.toastrGlobalSettingsService.showCloseButton()})}queueWarning(e){return this.queueToast(b,{position:e.position??this.toastrGlobalSettingsService.position(),data:{title:e.title,icon:e.icon,loading:e.loading,loadingLabel:e.loadingLabel,message:e.message,type:`warn`},closeButtonColor:`text-warn`,progressBarColor:`text-warn`,hasDefaultBackground:!0,durationInMs:e.durationInMs??this.toastrGlobalSettingsService.durationInMs(),animate:e.animate??this.toastrGlobalSettingsService.animate(),showProgressBar:e.showProgessBar??this.toastrGlobalSettingsService.showProgressBar(),showCloseButton:e.showCloseButton??this.toastrGlobalSettingsService.showCloseButton()})}queueDanger(e){return this.queueToast(b,{position:e.position??this.toastrGlobalSettingsService.position(),data:{title:e.title,icon:e.icon,loading:e.loading,loadingLabel:e.loadingLabel,message:e.message,type:`danger`},closeButtonColor:`text-danger`,progressBarColor:`text-danger`,hasDefaultBackground:!0,durationInMs:e.durationInMs??this.toastrGlobalSettingsService.durationInMs(),animate:e.animate??this.toastrGlobalSettingsService.animate(),showProgressBar:e.showProgessBar??this.toastrGlobalSettingsService.showProgressBar(),showCloseButton:e.showCloseButton??this.toastrGlobalSettingsService.showCloseButton()})}processQueue(){if(!(this.isProcessingQueue||this.activePauses>0)){this.isProcessingQueue=!0;try{for(;this.activePauses===0&&this.activeToasts.size<this.toastrGlobalSettingsService.maxOpened()&&this.toastQueue.length>0;)this.toastQueue.shift()?.()}finally{this.isProcessingQueue=!1}}}buildAndAttachToast(e,t){let i=ke$1.create({providers:[{provide:Me,useValue:t.config().data},{provide:v,useValue:t}],parent:this.injector}),o=up(V,{environmentInjector:this.environmentInjector,elementInjector:i}),u=up(e,{environmentInjector:this.environmentInjector,elementInjector:i}),d=new Ee$1,r=t.paused();if(o.instance.componentRef=u,t.state()===`closed`){o.destroy();return}this.activeToasts.add(o),r&&this.activePauses++,d.add(t.onPause$.subscribe(()=>{r||(r=!0,this.activePauses++)})),d.add(t.onResume$.subscribe(()=>{r&&(r=!1,this.activePauses=Math.max(0,this.activePauses-1),this.activePauses===0&&this.processQueue())})),d.add(t.afterClosed$.pipe(vr(1)).subscribe(()=>{r&&(r=!1,this.activePauses=Math.max(0,this.activePauses-1)),this.finalizeToast(o)})),o.onDestroy(()=>{t.completeClose(),d.unsubscribe()}),t.attach(y=>o.instance.closeToast(y)),this.applicationRef.attachView(o.hostView),this.getContainer(t.config().position??`top-right`).appendChild(o.location.nativeElement),u.instance.onToastInit?.()}finalizeToast(e){this.activeToasts.delete(e)&&(this.applicationRef.detachView(e.hostView),e.location.nativeElement.remove(),e.hostView.destroyed||e.destroy(),this.processQueue())}getContainer(e){if(this.containers.has(e))return this.containers.get(e);let t=this.document.createElement(`div`);return t.classList.add(`toast-container`,`toast-container-${e}`),this.document.body.appendChild(t),this.containers.set(e,t),t}resolveConfig(e){let t=e?.animate??this.toastrGlobalSettingsService.animate();return s(r({},e),{position:e?.position??this.toastrGlobalSettingsService.position(),glassiness:e?.glassiness??this.toastrGlobalSettingsService.glassiness(),glassQuality:e?.glassQuality??this.toastrGlobalSettingsService.glassQuality(),animate:t,wrapperClass:e?.wrapperClass??this.toastrGlobalSettingsService.wrapperClass(),durationInMs:e?.durationInMs??this.toastrGlobalSettingsService.durationInMs(),swipeToDismiss:e?.swipeToDismiss??this.toastrGlobalSettingsService.swipeToDismiss(),showCloseButton:e?.showCloseButton??this.toastrGlobalSettingsService.showCloseButton(),closeButtonColor:e?.closeButtonColor??this.toastrGlobalSettingsService.closeButtonColor(),showProgressBar:e?.showProgressBar??this.toastrGlobalSettingsService.showProgressBar(),progressBarColor:e?.progressBarColor??this.toastrGlobalSettingsService?.progressBarColor()})}static ɵfac=function(t){return new(t||n)};static ɵprov=ee({token:n,factory:n.ɵfac,providedIn:`root`})};export{D as n,Q as r,Be as t};