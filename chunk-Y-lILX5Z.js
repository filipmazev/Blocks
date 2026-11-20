import{E as i}from"./main-QG7H2MDR.js";import{W as vt,c as Je,r as Ci,v as _e,x as an}from"./chunk-BaHVKixO.js";import{f as Hn,t as $i}from"./chunk-C1xhQ_ri.js";import{$a as sd,Bi as ik,Go as yt,J as Fr,Jr as bo,Jt as Pk,Kn as We,Ni as ho,Ro as xo,Rr as ak,Ti as ge,Vr as b,Yr as br,_r as ZC,fn as Sd,na as lA,pi as ee,rr as Xl,t as $,tt as Go}from"./chunk-zTlCv55u.js";import{n as s,t as r}from"./chunk-C9yOwMO6.js";var T=class p extends an{updateMessage(){this.toast.patch({data:{message:`Updated from inside this notification.`}})}dismiss(){this.toast?.close({openedCount:(this.data()?.openedCount??0)+1})}static ɵfac=(()=>{let e;return function(t){return(e||(e=ho(p)))(t||p)}})();static ɵcmp=Fr({type:p,selectors:[[`app-demo-toast`]],features:[yt],decls:11,vars:2,consts:[[1,`notification`],[1,`notification-content`],[1,`notification-title`],[1,`notification-message`],[1,`notification-actions`],[`type`,`button`,`bx-button`,``,`variant`,`text`,3,`click`]],template:function(n,t){n&1&&(bo(0,`div`,0)(1,`div`,1)(2,`h4`,2),lA(3),Go(),bo(4,`p`,3),lA(5),Go(),bo(6,`div`,4)(7,`button`,5),br(`click`,function(){return t.updateMessage()}),lA(8,`Patch message inside`),Go(),bo(9,`button`,5),br(`click`,function(){return t.dismiss()}),lA(10,`Dismiss with result`),Go()()()()),n&2&&(Xl(3),ik(t.data()?.title),Xl(2),ik(t.data()?.message))},dependencies:[_e],styles:[`
.notification[_ngcontent-%COMP%] {
  display: flex;
  position: relative;
  padding: var(--%NS%bx-space-4, 1rem);
  min-block-size: 2.5rem;
  color: var(--%NS%bx-text-primary);
}
.notification-content[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex: 1;
  gap: var(--%NS%bx-space-2, 0.5rem);
  min-inline-size: 0;
  padding-inline-end: var(--%NS%bx-space-6, 1.5rem);
  overflow-wrap: anywhere;
}
.notification-title[_ngcontent-%COMP%] {
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
}
.notification-message[_ngcontent-%COMP%] {
  margin: 0;
  font-size: 0.875rem;
  line-height: 1.5;
}
.notification-actions[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  gap: var(--%NS%bx-space-2, 0.5rem);
  min-inline-size: 0;
  max-inline-size: 100%;
  padding-block-start: var(--%NS%bx-space-2, 0.5rem);
}
.notification-actions[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {
  max-inline-size: 100%;
  overflow-wrap: anywhere;
}`]})};var L={position:`top-right`,glassiness:`auto`,glassQuality:`enhanced`,wrapperClass:``,closeLabel:``,title:`Workspace update`,message:`Your preferences have been saved.`,durationInMs:5e3,maxOpened:4,animate:!0,swipeToDismiss:!0,type:`info`,icon:`info`,loading:!1,showCloseButton:!0,showProgressBar:!0,hasDefaultBackground:!0,language:`en`};var N=class p{destroyRef=b(ge);toastrService=b(Ci);toastrGlobalSettingsService=b(vt);overlayDemoI18nService=b(i);demoToasts=/* @__PURE__ */ new Set;customToasts=/* @__PURE__ */ new Set;transitionTimeouts=/* @__PURE__ */ new Map;previousMaxOpened=this.toastrGlobalSettingsService.maxOpened();previousLanguage=this.overlayDemoI18nService.language();liveToast=$(null);customToast=$(null);args=ee(L);action=Pk();openedCount=0;constructor(){We(()=>{let e=this.args();this.toastrGlobalSettingsService.maxOpened.set(e.maxOpened),this.overlayDemoI18nService.setLanguage(e.language)}),this.destroyRef.onDestroy(()=>{for(let e of this.transitionTimeouts.values())clearTimeout(e);for(let e of this.demoToasts)e.close();for(let e of this.customToasts)e.close();this.toastrGlobalSettingsService.maxOpened.set(this.previousMaxOpened),this.overlayDemoI18nService.setLanguage(this.previousLanguage)})}queueToast(){let e=this.args(),n=this.toastrService.queueToast(T,{position:e.position,glassiness:e.glassiness,glassQuality:e.glassQuality,wrapperClass:e.wrapperClass,durationInMs:e.durationInMs,animate:e.animate,swipeToDismiss:e.swipeToDismiss,hasDefaultBackground:e.hasDefaultBackground,showCloseButton:e.showCloseButton,showProgressBar:e.showProgressBar,closeLabel:e.closeLabel||{key:`overlay.closeToast`},data:{title:e.title,message:e.message,openedCount:this.openedCount}});this.customToast.set(n),this.customToasts.add(n),this.action.emit({name:`queueCustomToast`,payload:e}),n.afterClosed$.pipe(Sd(this.destroyRef)).subscribe(t=>{this.openedCount=t?.openedCount??this.openedCount,this.customToasts.delete(n),this.customToast()===n&&this.customToast.set(null),this.action.emit({name:`customToastClosed`,payload:t})})}openLiveToast(e=this.args().type,n=!1){let t=this.args(),s$1=this.toastrService.queueToast(Je,{position:t.position,glassiness:t.glassiness,glassQuality:t.glassQuality,wrapperClass:t.wrapperClass,durationInMs:n?0:t.durationInMs,animate:t.animate,swipeToDismiss:t.swipeToDismiss,showCloseButton:t.showCloseButton,showProgressBar:t.showProgressBar,hasDefaultBackground:t.hasDefaultBackground,closeButtonColor:`text-${e}`,progressBarColor:`text-${e}`,closeLabel:t.closeLabel||{key:`overlay.closeToast`},data:{title:t.title,message:t.message,type:e,icon:t.icon?{name:t.icon}:null,loading:t.loading}});this.trackToast(s$1),this.liveToast.set(s$1),this.action.emit({name:`queueSimpleToast`,payload:s(r({},t),{type:e,durationInMs:n?0:t.durationInMs})})}patchLiveToast(e=!1){let n=this.args();this.liveToast()?.patch({data:{title:n.title,message:n.message,type:n.type,icon:n.icon?{name:n.icon}:null,loading:n.loading},showCloseButton:n.showCloseButton,showProgressBar:n.showProgressBar,closeButtonColor:`text-${n.type}`,progressBarColor:`text-${n.type}`,hasDefaultBackground:n.hasDefaultBackground,durationInMs:e?n.durationInMs:void 0}),this.action.emit({name:`patch`,payload:s(r({},n),{resetLifetime:e})})}patchCustomToast(){let e=this.args().message;this.customToast()?.patch({data:{message:e}}),this.action.emit({name:`patchCustomToast`,payload:{message:e}})}pauseToast(){this.liveToast()?.pause(),this.action.emit({name:`pause`,payload:void 0})}resumeToast(){this.liveToast()?.resume(),this.action.emit({name:`resume`,payload:void 0})}dismissToast(){this.liveToast()?.close(),this.action.emit({name:`dismiss`,payload:void 0})}loadingToSuccess(){let e=this.toastrService.queueInfo({title:`File upload`,message:`Uploading your file…`,icon:{name:`upload`},loading:!0,durationInMs:0});this.trackToast(e),this.liveToast.set(e),this.action.emit({name:`uploadStarted`,payload:void 0});let n=setTimeout(()=>{this.transitionTimeouts.delete(e),e.patch({data:{message:`Upload complete`,type:`success`,icon:{name:`check`},loading:!1},closeButtonColor:`text-success`,progressBarColor:`text-success`,durationInMs:4e3}),this.action.emit({name:`uploadCompleted`,payload:{durationInMs:4e3}})},1800);this.transitionTimeouts.set(e,n)}releaseQueueDemo(){for(let e of this.demoToasts)e.close();for(let e of this.customToasts)e.close();this.action.emit({name:`dismissAllExampleToasts`,payload:void 0})}trackToast(e){this.demoToasts.add(e),e.afterClosed$.pipe(Sd(this.destroyRef)).subscribe(()=>{let n=this.transitionTimeouts.get(e);n!==void 0&&clearTimeout(n),this.transitionTimeouts.delete(e),this.demoToasts.delete(e),this.liveToast()===e&&this.liveToast.set(null),this.action.emit({name:`afterClosed`,payload:void 0})})}static ɵfac=function(n){return new(n||p)};static ɵcmp=Fr({type:p,selectors:[[`app-toastr-demo`]],inputs:{args:[1,`args`]},outputs:{action:`action`},decls:59,vars:9,consts:[[1,`story-actions`],[`type`,`button`,`bx-button`,``,`variant`,`filled`,3,`click`],[`name`,`bell`,`size`,`16`],[`type`,`button`,`bx-button`,``,`variant`,`tonal`,3,`click`],[`name`,`timer-off`,`size`,`16`],[`role`,`status`],[`type`,`button`,`bx-button`,``,`variant`,`tonal`,3,`click`,`disabled`],[`name`,`check`,`size`,`16`],[`name`,`timer-reset`,`size`,`16`],[`name`,`pause`,`size`,`16`],[`name`,`play`,`size`,`16`],[`name`,`x`,`size`,`16`],[`title`,`More examples`,3,`headingLevel`],[1,`additional-examples`],[`name`,`panels-top-left`,`size`,`16`],[`name`,`pencil`,`size`,`16`],[`name`,`upload`,`size`,`16`],[`bx-button`,``,`routerLink`,`/components/file-upload`],[`name`,`list-x`,`size`,`16`],[`type`,`button`,`bx-button`,``,`variant`,`tonal`,`color`,`info`,3,`click`],[`name`,`info`,`size`,`16`],[`type`,`button`,`bx-button`,``,`variant`,`tonal`,`color`,`success`,3,`click`],[`name`,`circle-check`,`size`,`16`],[`type`,`button`,`bx-button`,``,`variant`,`tonal`,`color`,`warn`,3,`click`],[`name`,`triangle-alert`,`size`,`16`],[`type`,`button`,`bx-button`,``,`variant`,`tonal`,`color`,`danger`,3,`click`],[`name`,`circle-alert`,`size`,`16`]],template:function(n,t){n&1&&(bo(0,`div`,0)(1,`button`,1),br(`click`,function(){return t.openLiveToast()}),sd(2,`bx-icon`,2),lA(3,`Show notification`),Go(),bo(4,`button`,3),br(`click`,function(){return t.openLiveToast(t.args().type,!0)}),sd(5,`bx-icon`,4),lA(6,`Persistent notification `),Go()(),bo(7,`p`,5),lA(8),Go(),bo(9,`div`,0)(10,`button`,6),br(`click`,function(){return t.patchLiveToast()}),sd(11,`bx-icon`,7),lA(12,`Apply changes `),Go(),bo(13,`button`,6),br(`click`,function(){return t.patchLiveToast(!0)}),sd(14,`bx-icon`,8),lA(15,`Restart timer `),Go(),bo(16,`button`,6),br(`click`,function(){return t.pauseToast()}),sd(17,`bx-icon`,9),lA(18,`Pause`),Go(),bo(19,`button`,6),br(`click`,function(){return t.resumeToast()}),sd(20,`bx-icon`,10),lA(21,`Resume`),Go(),bo(22,`button`,6),br(`click`,function(){return t.dismissToast()}),sd(23,`bx-icon`,11),lA(24,`Dismiss`),Go()(),bo(25,`p`),lA(26,`Changes apply to new notifications. Use Apply changes to update the selected notification.`),Go(),bo(27,`bx-collapsible`,12)(28,`div`,13)(29,`div`,0)(30,`button`,3),br(`click`,function(){return t.queueToast()}),sd(31,`bx-icon`,14),lA(32,`Custom notification`),Go(),bo(33,`button`,6),br(`click`,function(){return t.patchCustomToast()}),sd(34,`bx-icon`,15),lA(35,`Update custom notification `),Go(),bo(36,`button`,3),br(`click`,function(){return t.loadingToSuccess()}),sd(37,`bx-icon`,16),lA(38,`Upload example`),Go(),bo(39,`a`,17),lA(40,`File upload playground`),Go(),bo(41,`button`,3),br(`click`,function(){return t.releaseQueueDemo()}),sd(42,`bx-icon`,18),lA(43,`Dismiss all`),Go()(),bo(44,`div`,0)(45,`button`,19),br(`click`,function(){return t.openLiveToast(`info`)}),sd(46,`bx-icon`,20),lA(47,`Info`),Go(),bo(48,`button`,21),br(`click`,function(){return t.openLiveToast(`success`)}),sd(49,`bx-icon`,22),lA(50,`Success `),Go(),bo(51,`button`,23),br(`click`,function(){return t.openLiveToast(`warn`)}),sd(52,`bx-icon`,24),lA(53,`Warning `),Go(),bo(54,`button`,25),br(`click`,function(){return t.openLiveToast(`danger`)}),sd(55,`bx-icon`,26),lA(56,`Error `),Go()(),bo(57,`p`),lA(58,`Open more notifications than maxOpened to inspect queueing. Hover, keyboard focus and Pause independently pause timed notifications.`),Go()()()),n&2&&(Xl(8),ak(`Selected notification: `,t.liveToast()?.state()??`none`,`. `,t.liveToast()?.paused()?`Paused`:``),Xl(2),xo(`disabled`,!t.liveToast()),Xl(3),xo(`disabled`,!t.liveToast()),Xl(3),xo(`disabled`,!t.liveToast()),Xl(3),xo(`disabled`,!t.liveToast()),Xl(3),xo(`disabled`,!t.liveToast()),Xl(5),xo(`headingLevel`,3),Xl(6),xo(`disabled`,!t.customToast()))},dependencies:[_e,ZC,Hn,$i],styles:[`
[_nghost-%COMP%] {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--%NS%bx-space-4, 1rem);
  inline-size: 100%;
  min-inline-size: 0;
  max-inline-size: 100%;
}
.story-actions[_ngcontent-%COMP%] {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--%NS%bx-space-3, 0.75rem);
  max-inline-size: 100%;
}
.story-actions[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {
  max-inline-size: 100%;
  white-space: normal;
  overflow-wrap: anywhere;
  text-align: start;
}
p[_ngcontent-%COMP%] {
  margin: 0;
  color: var(--%NS%bx-text-secondary);
  line-height: 1.6;
  overflow-wrap: anywhere;
}
bx-collapsible[_ngcontent-%COMP%] {
  inline-size: 100%;
}
.additional-examples[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: var(--%NS%bx-space-4, 1rem);
  min-inline-size: 0;
}`]})};export{N as Toastr};