import{n as H,o as f,r as R$1,t as Fe}from"./chunk-CdNFuxUl.js";import{t as i}from"./main-ZZPER4U3.js";import{D as fe}from"./chunk-BEm-ihzG.js";import{i as Bn}from"./chunk-DE1qZ0OS.js";import{t as U}from"./chunk-1rrlZ2Ss.js";import{$r as fa,Cr as bn,En as W,In as XT,Lt as Os,Sr as ba,_o as vt,_t as Ky,ar as Zy,b as Cy,bo as wk,i as $n,ia as me,no as tt,qi as m,ra as md,wr as br,xn as Ul,zi as ke}from"./chunk-CVY9_LoB.js";import{n as s,t as r}from"./chunk-C9yOwMO6.js";var T=class u extends H{updateMessage(){this.toast.patch({data:{message:`Updated from inside this notification.`}})}dismiss(){this.toast?.close({openedCount:(this.data()?.openedCount??0)+1})}static ɵfac=(()=>{let e;return function(t){return(e||(e=bn(u)))(t||u)}})();static ɵcmp=$n({type:u,selectors:[[`app-demo-toast`]],features:[vt],decls:11,vars:2,consts:[[1,`notification`],[1,`notification-content`],[1,`notification-title`],[1,`notification-message`],[1,`notification-actions`],[`type`,`button`,`bx-button`,``,`variant`,`text`,3,`click`]],template:function(n,t){n&1&&(Os(0,`div`,0)(1,`div`,1)(2,`h4`,2),XT(3),ba(),Os(4,`p`,3),XT(5),ba(),Os(6,`div`,4)(7,`button`,5),br(`click`,function(){return t.updateMessage()}),XT(8,`Patch message inside`),ba(),Os(9,`button`,5),br(`click`,function(){return t.dismiss()}),XT(10,`Dismiss with result`),ba()()()()),n&2&&(Ul(3),Zy(t.data()?.title),Ul(2),Zy(t.data()?.message))},dependencies:[fe],styles:[`
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
}`]})};var R={position:`top-right`,title:`Workspace update`,message:`Your preferences have been saved.`,durationInMs:5e3,maxOpened:4,animate:!0,swipeToDismiss:!0,type:`info`,icon:`info`,loading:!1,showCloseButton:!0,showProgressBar:!0,hasDefaultBackground:!0,language:`en`};var L=class u{destroyRef=m(me);toastrService=m(Fe);toastrGlobalSettingsService=m(R$1);overlayDemoI18nService=m(i);demoToasts=/* @__PURE__ */ new Set;customToasts=/* @__PURE__ */ new Set;transitionTimeouts=/* @__PURE__ */ new Map;previousMaxOpened=this.toastrGlobalSettingsService.maxOpened();previousLanguage=this.overlayDemoI18nService.language();liveToast=W(null);customToast=W(null);args=ke(R);action=wk();openedCount=0;constructor(){tt(()=>{let e=this.args();this.toastrGlobalSettingsService.maxOpened.set(e.maxOpened),this.overlayDemoI18nService.setLanguage(e.language)}),this.destroyRef.onDestroy(()=>{for(let e of this.transitionTimeouts.values())clearTimeout(e);for(let e of this.demoToasts)e.close();for(let e of this.customToasts)e.close();this.toastrGlobalSettingsService.maxOpened.set(this.previousMaxOpened),this.overlayDemoI18nService.setLanguage(this.previousLanguage)})}queueToast(){let e=this.args(),n=this.toastrService.queueToast(T,{position:e.position,durationInMs:e.durationInMs,animate:e.animate,swipeToDismiss:e.swipeToDismiss,hasDefaultBackground:e.hasDefaultBackground,showCloseButton:e.showCloseButton,showProgressBar:e.showProgressBar,closeLabel:{key:`overlay.closeToast`},data:{title:e.title,message:e.message,openedCount:this.openedCount}});this.customToast.set(n),this.customToasts.add(n),this.action.emit({name:`queueCustomToast`,payload:e}),n.afterClosed$.pipe(md(this.destroyRef)).subscribe(t=>{this.openedCount=t?.openedCount??this.openedCount,this.customToasts.delete(n),this.customToast()===n&&this.customToast.set(null),this.action.emit({name:`customToastClosed`,payload:t})})}openLiveToast(e=this.args().type,n=!1){let t=this.args(),s$1=this.toastrService.queueToast(f,{position:t.position,durationInMs:n?0:t.durationInMs,animate:t.animate,swipeToDismiss:t.swipeToDismiss,showCloseButton:t.showCloseButton,showProgressBar:t.showProgressBar,hasDefaultBackground:t.hasDefaultBackground,closeButtonColor:`text-${e}`,progressBarColor:`text-${e}`,closeLabel:{key:`overlay.closeToast`},data:{title:t.title,message:t.message,type:e,icon:t.icon?{name:t.icon}:null,loading:t.loading}});this.trackToast(s$1),this.liveToast.set(s$1),this.action.emit({name:`queueSimpleToast`,payload:s(r({},t),{type:e,durationInMs:n?0:t.durationInMs})})}patchLiveToast(e=!1){let n=this.args();this.liveToast()?.patch({data:{title:n.title,message:n.message,type:n.type,icon:n.icon?{name:n.icon}:null,loading:n.loading},showCloseButton:n.showCloseButton,showProgressBar:n.showProgressBar,closeButtonColor:`text-${n.type}`,progressBarColor:`text-${n.type}`,hasDefaultBackground:n.hasDefaultBackground,durationInMs:e?n.durationInMs:void 0}),this.action.emit({name:`patch`,payload:s(r({},n),{resetLifetime:e})})}patchCustomToast(){let e=this.args().message;this.customToast()?.patch({data:{message:e}}),this.action.emit({name:`patchCustomToast`,payload:{message:e}})}pauseToast(){this.liveToast()?.pause(),this.action.emit({name:`pause`,payload:void 0})}resumeToast(){this.liveToast()?.resume(),this.action.emit({name:`resume`,payload:void 0})}dismissToast(){this.liveToast()?.close(),this.action.emit({name:`dismiss`,payload:void 0})}loadingToSuccess(){let e=this.toastrService.queueInfo({title:`File upload`,message:`Uploading your file…`,icon:{name:`upload`},loading:!0,durationInMs:0});this.trackToast(e),this.liveToast.set(e),this.action.emit({name:`uploadStarted`,payload:void 0});let n=setTimeout(()=>{this.transitionTimeouts.delete(e),e.patch({data:{message:`Upload complete`,type:`success`,icon:{name:`check`},loading:!1},closeButtonColor:`text-success`,progressBarColor:`text-success`,durationInMs:4e3}),this.action.emit({name:`uploadCompleted`,payload:{durationInMs:4e3}})},1800);this.transitionTimeouts.set(e,n)}releaseQueueDemo(){for(let e of this.demoToasts)e.close();for(let e of this.customToasts)e.close();this.action.emit({name:`dismissAllExampleToasts`,payload:void 0})}trackToast(e){this.demoToasts.add(e),e.afterClosed$.pipe(md(this.destroyRef)).subscribe(()=>{let n=this.transitionTimeouts.get(e);n!==void 0&&clearTimeout(n),this.transitionTimeouts.delete(e),this.demoToasts.delete(e),this.liveToast()===e&&this.liveToast.set(null),this.action.emit({name:`afterClosed`,payload:void 0})})}static ɵfac=function(n){return new(n||u)};static ɵcmp=$n({type:u,selectors:[[`app-toastr-demo`]],inputs:{args:[1,`args`]},outputs:{action:`action`},decls:57,vars:9,consts:[[1,`story-actions`],[`type`,`button`,`bx-button`,``,`variant`,`filled`,3,`click`],[`name`,`bell`,`size`,`16`],[`type`,`button`,`bx-button`,``,`variant`,`tonal`,3,`click`],[`name`,`timer-off`,`size`,`16`],[`role`,`status`],[`type`,`button`,`bx-button`,``,`variant`,`tonal`,3,`click`,`disabled`],[`name`,`check`,`size`,`16`],[`name`,`timer-reset`,`size`,`16`],[`name`,`pause`,`size`,`16`],[`name`,`play`,`size`,`16`],[`name`,`x`,`size`,`16`],[`title`,`More examples`,3,`headingLevel`],[1,`additional-examples`],[`name`,`panels-top-left`,`size`,`16`],[`name`,`pencil`,`size`,`16`],[`name`,`upload`,`size`,`16`],[`name`,`list-x`,`size`,`16`],[`type`,`button`,`bx-button`,``,`variant`,`tonal`,`color`,`info`,3,`click`],[`name`,`info`,`size`,`16`],[`type`,`button`,`bx-button`,``,`variant`,`tonal`,`color`,`success`,3,`click`],[`name`,`circle-check`,`size`,`16`],[`type`,`button`,`bx-button`,``,`variant`,`tonal`,`color`,`warn`,3,`click`],[`name`,`triangle-alert`,`size`,`16`],[`type`,`button`,`bx-button`,``,`variant`,`tonal`,`color`,`danger`,3,`click`],[`name`,`circle-alert`,`size`,`16`]],template:function(n,t){n&1&&(Os(0,`div`,0)(1,`button`,1),br(`click`,function(){return t.openLiveToast()}),Cy(2,`bx-icon`,2),XT(3,`Show notification`),ba(),Os(4,`button`,3),br(`click`,function(){return t.openLiveToast(t.args().type,!0)}),Cy(5,`bx-icon`,4),XT(6,`Persistent notification `),ba()(),Os(7,`p`,5),XT(8),ba(),Os(9,`div`,0)(10,`button`,6),br(`click`,function(){return t.patchLiveToast()}),Cy(11,`bx-icon`,7),XT(12,`Apply changes `),ba(),Os(13,`button`,6),br(`click`,function(){return t.patchLiveToast(!0)}),Cy(14,`bx-icon`,8),XT(15,`Restart timer `),ba(),Os(16,`button`,6),br(`click`,function(){return t.pauseToast()}),Cy(17,`bx-icon`,9),XT(18,`Pause`),ba(),Os(19,`button`,6),br(`click`,function(){return t.resumeToast()}),Cy(20,`bx-icon`,10),XT(21,`Resume`),ba(),Os(22,`button`,6),br(`click`,function(){return t.dismissToast()}),Cy(23,`bx-icon`,11),XT(24,`Dismiss`),ba()(),Os(25,`p`),XT(26,`Changes apply to new notifications. Use Apply changes to update the selected notification.`),ba(),Os(27,`bx-collapsible`,12)(28,`div`,13)(29,`div`,0)(30,`button`,3),br(`click`,function(){return t.queueToast()}),Cy(31,`bx-icon`,14),XT(32,`Custom notification`),ba(),Os(33,`button`,6),br(`click`,function(){return t.patchCustomToast()}),Cy(34,`bx-icon`,15),XT(35,`Update custom notification `),ba(),Os(36,`button`,3),br(`click`,function(){return t.loadingToSuccess()}),Cy(37,`bx-icon`,16),XT(38,`Upload example`),ba(),Os(39,`button`,3),br(`click`,function(){return t.releaseQueueDemo()}),Cy(40,`bx-icon`,17),XT(41,`Dismiss all`),ba()(),Os(42,`div`,0)(43,`button`,18),br(`click`,function(){return t.openLiveToast(`info`)}),Cy(44,`bx-icon`,19),XT(45,`Info`),ba(),Os(46,`button`,20),br(`click`,function(){return t.openLiveToast(`success`)}),Cy(47,`bx-icon`,21),XT(48,`Success `),ba(),Os(49,`button`,22),br(`click`,function(){return t.openLiveToast(`warn`)}),Cy(50,`bx-icon`,23),XT(51,`Warning `),ba(),Os(52,`button`,24),br(`click`,function(){return t.openLiveToast(`danger`)}),Cy(53,`bx-icon`,25),XT(54,`Error `),ba()(),Os(55,`p`),XT(56,`Open more notifications than maxOpened to inspect queueing. Hover, keyboard focus and Pause independently pause timed notifications.`),ba()()()),n&2&&(Ul(8),Ky(`Selected notification: `,t.liveToast()?.state()??`none`,`. `,t.liveToast()?.paused()?`Paused`:``),Ul(2),fa(`disabled`,!t.liveToast()),Ul(3),fa(`disabled`,!t.liveToast()),Ul(3),fa(`disabled`,!t.liveToast()),Ul(3),fa(`disabled`,!t.liveToast()),Ul(3),fa(`disabled`,!t.liveToast()),Ul(5),fa(`headingLevel`,3),Ul(6),fa(`disabled`,!t.customToast()))},dependencies:[fe,U,Bn],styles:[`
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
}`]})};export{L as Toastr};