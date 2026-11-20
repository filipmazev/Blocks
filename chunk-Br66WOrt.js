import{E as i}from"./main-QG7H2MDR.js";import{d as vn,f as xn,l as hn,n as Cn,s as _e}from"./chunk-CJkZHimA.js";import{U as vi,h as Tr,s as Ja,v as _e$1}from"./chunk-BaHVKixO.js";import{N as Zi,l as Fs,nt as qi,v as Ki}from"./chunk-C1xhQ_ri.js";import{$a as sd,Ai as hM,Bi as ik,Bo as yN,Ci as gK,Go as yt,Hr as bK,J as Fr,Jr as bo,Jt as Pk,K as FT,Mo as xK,Na as pb,Ni as ho,Ro as xo,Rr as ak,Ti as ge$1,V as EA,Vr as b,Wa as rd,Xn as Wo,Yr as br,_r as ZC,bo as vN,cn as S1,da as mK,dt as Iu,fa as mM,fn as Sd,ha as mb,ka as pN,na as lA,nn as RA,pi as ee,ri as cl,rr as Xl,t as $,tt as Go,vr as ZE,zr as al}from"./chunk-zTlCv55u.js";import{n as s,t as r}from"./chunk-C9yOwMO6.js";function ye(s,e){if(s&1){let n=pb();bo(0,`div`,1)(1,`button`,2),br(`click`,function(){al(n);let l=Wo();return cl(l.confirm())}),lA(2,`Confirm`),Go(),bo(3,`button`,3),br(`click`,function(){al(n);let l=Wo();return cl(l.close())}),lA(4,`Cancel`),Go()()}}var P=class s extends Cn{confirm(){this.modal?.close(`confirm`)}static ɵfac=(()=>{let e;return function(t){return(e||(e=ho(s)))(t||s)}})();static ɵcmp=Fr({type:s,selectors:[[`app-confirm-close`]],features:[yt],decls:3,vars:1,consts:[[`class`,`button-container`,4,`appModalFooter`],[1,`button-container`],[`type`,`button`,`bx-button`,``,`variant`,`filled`,`color`,`success`,3,`click`],[`type`,`button`,`bx-button`,``,`variant`,`filled`,`color`,`danger`,3,`click`]],template:function(n,t){n&1&&(bo(0,`div`),lA(1),Go(),rd(2,ye,5,0,`div`,0)),n&2&&(Xl(),mb(` `,t.data,`
`))},dependencies:[vn,_e$1],styles:[`
.button-container[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 1rem;
}
.button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {
  cursor: pointer;
}`]})};var ge=(s,e)=>({"side-modal":s,"center-modal":e});function fe(s,e){if(s&1&&(bo(0,`div`),lA(1),Go()),s&2){let n=Wo();Xl(),mb(` `,n.data.title,`
`)}}function be(s,e){if(s&1){let n=pb();bo(0,`bx-menu`)(1,`bx-menu-item`,27),br(`action`,function(){al(n);let l=Wo();return cl(l.selectAction(`Edit details`))}),Go(),bo(2,`bx-menu-item`,28),br(`action`,function(){al(n);let l=Wo();return cl(l.selectAction(`Duplicate`))}),Go()()}}function he(s,e){if(s&1){let n=pb();bo(0,`bx-menu`)(1,`bx-menu-item`,29),br(`action`,function(){al(n);let l=Wo();return cl(l.selectAction(`Copy link`))}),Go(),bo(2,`bx-menu-item`,30),br(`action`,function(){al(n);let l=Wo();return cl(l.selectAction(`Archive`))}),Go(),bo(3,`bx-menu-item`,31),br(`action`,function(){al(n);let l=Wo();return cl(l.selectAction(`Delete`))}),Go()()}s&2&&(Xl(3),xo(`danger`,!0))}function ve(s,e){if(s&1){let n=pb();bo(0,`div`,32)(1,`button`,33),br(`click`,function(){al(n);let l=Wo();return cl(l.confirm())}),lA(2,`Confirm`),Go(),bo(3,`button`,34),br(`click`,function(){al(n);let l=Wo();return cl(l.close())}),lA(4,`Cancel`),Go()()}}var E=class s$1 extends Cn{modalService=b(_e);destroyRef=b(ge$1);overlayDemoI18nService=b(i);liveForm=new Iu({text:new ZE(`Workspace settings`,{nonNullable:!0}),icon:new ZE(`info`),loading:new ZE(!1,{nonNullable:!0}),disableClose:new ZE(!1,{nonNullable:!0}),showCloseButton:new ZE(!0,{nonNullable:!0}),emphasize:new ZE(!1,{nonNullable:!0})});iconOptions=[{label:`Info`,value:`info`},{label:`Edit`,value:`pencil`},{label:`Done`,value:`check`}];draftNote=new ZE(``,{nonNullable:!0});wizardStep=$(1);saving=$(!1);menuStatus=$(`Try either menu. Actions keep this modal open.`);isSideModal=$(!1);isCenteredModal=$(!1);saveTimeout;constructor(){super(),this.destroyRef.onDestroy(()=>clearTimeout(this.saveTimeout))}onModalInit(){let e=this.modal.config().style.layout,n=this.modal.config();this.liveForm.patchValue({text:typeof n.header?.text==`string`?n.header.text:``,icon:n.header?.icon?.name??null,loading:n.header?.loading??!1,disableClose:n.disableClose,showCloseButton:n.style.showCloseButton??!0}),this.isSideModal.set(e===`right`||e===`left`),this.isCenteredModal.set(e===`center`)}setCloseLanguage(e){this.overlayDemoI18nService.setLanguage(e),this.modal.patch({closeLabel:{key:`overlay.closeDialog`}})}applyLivePatch(){let e=this.liveForm.getRawValue();this.modal.patch({header:{text:e.text,icon:e.icon?{name:e.icon}:null,loading:e.loading},disableClose:e.disableClose,style:{showCloseButton:e.showCloseButton,wrapperStyles:e.emphasize?`--bx-modal-text: var(--bx-text-accent)`:null}})}advanceWizard(){if(!this.saving()){if(this.wizardStep()===1){this.wizardStep.set(2),this.modal.patch({header:{text:`Step 2: Review your changes`,icon:{name:`pencil`},loading:!1}});return}this.saving.set(!0),this.modal.patch({header:{text:`Saving your changes…`,loading:!0},disableClose:!0}),this.saveTimeout=setTimeout(()=>{this.saving.set(!1),this.wizardStep.set(3),this.modal.patch({header:{text:`Changes saved`,icon:{name:`check`,color:`text-success`},loading:!1},disableClose:!1})},1800)}}confirm(){this.modal?.close(`confirm`,{openedCount:this.data.openedCount+1})}selectAction(e){this.menuStatus.set(`${e} selected. The modal is still open.`)}openNested(){this.modalService.open(s$1,{data:s(r({},this.data),{title:`Nested dialog`,body:`The first nested dialog uses at least 90% material opacity. Open another to see a fully opaque surface. Closing returns to the unchanged parent.`}),header:{text:`Nested dialog`,icon:{name:`layers`,color:`accent`,bgColor:`auto`}},style:{layout:`center`,hasBackdrop:!0,animate:this.modal.config().style.animate??!0}})}static ɵfac=function(n){return new(n||s$1)};static ɵcmp=Fr({type:s$1,selectors:[[`app-demo-modal`]],features:[yt],decls:49,vars:20,consts:[[`dropdownActions`,``],[`contextActions`,``],[4,`appModalHeader`],[1,`demo-modal-content-class`,3,`ngClass`],[`aria-label`,`Live modal configuration`,1,`modal-patch-demo`],[`label`,`Close action language`,3,`valueChange`,`options`,`clearable`,`value`],[`label`,`Draft note (retained across patches)`,`subscriptSizing`,`dynamic`,3,`formControl`],[1,`live-patch-form`,3,`formGroup`],[`label`,`Live heading`,`formControlName`,`text`,`subscriptSizing`,`dynamic`],[`label`,`Live icon (clear to remove)`,`formControlName`,`icon`,`subscriptSizing`,`dynamic`,3,`options`],[`label`,`Icon loading`,`formControlName`,`loading`,`subscriptSizing`,`dynamic`],[`label`,`Prevent user dismissal`,`formControlName`,`disableClose`,`subscriptSizing`,`dynamic`],[`label`,`Show close button`,`formControlName`,`showCloseButton`,`subscriptSizing`,`dynamic`],[`label`,`Accent heading appearance`,`formControlName`,`emphasize`,`subscriptSizing`,`dynamic`],[`type`,`button`,`bx-button`,``,`variant`,`tonal`,3,`click`,`disabled`],[`role`,`status`],[`type`,`button`,`bx-button`,``,3,`click`,`disabled`,`loading`],[`aria-label`,`Menus inside this modal`,1,`modal-menu-demo`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`primary`,`placement`,`bottom`,3,`bxDropdown`],[`name`,`chevron-down`,`size`,`16`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`grayscale`,1,`modal-context-target`,3,`bxContextMenu`],[`name`,`mouse-pointer-2`,`size`,`16`],[1,`menu-hint`],[`role`,`status`,1,`menu-status`],[`aria-label`,`Nested dialogs`,1,`modal-nesting-demo`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`accent`,3,`click`],[`class`,`button-container`,4,`appModalFooter`],[`label`,`Edit details`,`icon`,`pencil`,3,`action`],[`label`,`Duplicate`,`icon`,`copy`,3,`action`],[`label`,`Copy link`,`icon`,`link`,3,`action`],[`label`,`Archive`,`icon`,`archive`,3,`action`],[`label`,`Delete`,`icon`,`trash-2`,3,`action`,`danger`],[1,`button-container`],[`type`,`button`,`bx-button`,``,`variant`,`filled`,`color`,`success`,3,`click`],[`type`,`button`,`bx-button`,``,`variant`,`filled`,`color`,`danger`,3,`click`]],template:function(n,t){if(n&1&&(rd(0,fe,2,1,`div`,2),bo(1,`div`,3)(2,`div`),lA(3),Go(),bo(4,`section`,4)(5,`h3`),lA(6,`Patch this open modal`),Go(),bo(7,`bx-select`,5),br(`valueChange`,function(T){return t.setCloseLanguage(T)}),Go(),bo(8,`p`),lA(9,`Apply changes without replacing this content. The draft note and wizard step stay intact.`),Go(),bo(10,`bx-input-field`,6),mM(),Go(),bo(11,`form`,7)(12,`bx-input-field`,8),mM(),Go(),bo(13,`bx-select`,9),mM(),Go(),bo(14,`bx-checkbox`,10),mM(),Go(),bo(15,`bx-checkbox`,11),mM(),Go(),bo(16,`bx-checkbox`,12),mM(),Go(),bo(17,`bx-checkbox`,13),mM(),Go(),bo(18,`button`,14),br(`click`,function(){return t.applyLivePatch()}),lA(19,`Apply live patch`),Go()(),bo(20,`p`,15),lA(21),Go(),bo(22,`button`,16),br(`click`,function(){return t.advanceWizard()}),lA(23),Go()(),bo(24,`section`,17)(25,`h3`),lA(26,`Menus inside the modal`),Go(),bo(27,`button`,18),lA(28,` Open actions`),sd(29,`bx-icon`,19),Go(),bo(30,`button`,20),sd(31,`bx-icon`,21),lA(32,`Right-click or hold for more actions `),Go(),bo(33,`p`,22),lA(34,` On touch screens, touch and hold for more actions. With a keyboard, focus the example and press Shift + F10. Escape closes the menu first. `),Go(),bo(35,`p`,23),lA(36),Go()(),bo(37,`section`,24)(38,`h3`),lA(39,`Nested dialogs`),Go(),bo(40,`p`),lA(41,`Compare independent backdrops and increasing material opacity while the parent stays open.`),Go(),bo(42,`button`,25),br(`click`,function(){return t.openNested()}),lA(43,`Open nested dialog`),Go()()(),rd(44,be,3,0,`ng-template`,null,0,RA)(46,he,4,1,`ng-template`,null,1,RA)(48,ve,5,0,`div`,26)),n&2){let l=FT(45),T=FT(47);Xl(),xo(`ngClass`,EA(17,ge,t.isSideModal(),t.isCenteredModal())),Xl(2),mb(` `,t.data.body,` `),Xl(4),xo(`options`,t.overlayDemoI18nService.languages)(`clearable`,!1)(`value`,t.overlayDemoI18nService.language()),Xl(3),xo(`formControl`,t.draftNote),hM(),Xl(),xo(`formGroup`,t.liveForm),Xl(),hM(),Xl(),xo(`options`,t.iconOptions),hM(),Xl(),hM(),Xl(),hM(),Xl(),hM(),Xl(),hM(),Xl(),xo(`disabled`,t.saving()),Xl(3),ak(`Wizard step `,t.wizardStep(),` of 3. `,t.saving()?`Saving…`:`Your draft is retained.`),Xl(),xo(`disabled`,t.saving()||t.wizardStep()===3)(`loading`,t.saving()),Xl(),mb(` `,t.wizardStep()===1?`Review draft`:t.wizardStep()===2?`Save draft`:`Saved`,` `),Xl(4),xo(`bxDropdown`,l),Xl(3),xo(`bxContextMenu`,T),Xl(6),ik(t.menuStatus())}},dependencies:[xK,gK,mK,bK,vN,pN,yN,Ja,Tr,vi,xn,vn,S1,_e$1,qi,Fs,Zi,Ki,ZC],styles:[`
.demo-modal-content-class[_ngcontent-%COMP%] {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: var(--%NS%bx-space-4, 1rem);
  min-inline-size: 0;
  overflow-y: auto;
}
@media (min-width: 1280px) {
  .demo-modal-content-class.side-modal[_ngcontent-%COMP%] {
    max-width: 30vw;
    max-width: 30dvw;
  }
  .demo-modal-content-class.center-modal[_ngcontent-%COMP%] {
    max-width: 50vw;
    max-width: 50dvw;
  }
}
.button-container[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: var(--%NS%bx-space-3, 0.75rem);
}
.button-container[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%], 
.modal-patch-demo[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], 
.modal-menu-demo[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%], 
.modal-nesting-demo[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {
  max-inline-size: 100%;
  overflow-wrap: anywhere;
}
.modal-patch-demo[_ngcontent-%COMP%], 
.modal-menu-demo[_ngcontent-%COMP%], 
.modal-nesting-demo[_ngcontent-%COMP%] {
  display: grid;
  gap: var(--%NS%bx-space-3, 0.75rem);
  min-inline-size: 0;
  padding-block-start: var(--%NS%bx-space-4, 1rem);
  border-block-start: 1px solid var(--%NS%bx-border-default);
}
.modal-menu-demo[_ngcontent-%COMP%], 
.modal-nesting-demo[_ngcontent-%COMP%] {
  justify-items: start;
}
.modal-patch-demo[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], 
.modal-patch-demo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], 
.modal-menu-demo[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], 
.modal-menu-demo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], 
.modal-nesting-demo[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], 
.modal-nesting-demo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  margin: 0;
}
.modal-context-target[_ngcontent-%COMP%] {
  border-style: dashed;
  -webkit-user-select: none;
  user-select: none;
  -webkit-touch-callout: none;
}
.menu-hint[_ngcontent-%COMP%], 
.menu-status[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-secondary);
  font-size: 0.875rem;
}
.menu-status[_ngcontent-%COMP%] {
  min-height: 2.5em;
}
.live-patch-form[_ngcontent-%COMP%] {
  display: grid;
  gap: var(--%NS%bx-space-3, 0.75rem);
  min-inline-size: 0;
}
.modal-patch-demo[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%], 
.live-patch-form[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {
  justify-self: start;
}`]})};var pe={layout:`center`,closeLabel:`Close dialog`,disableCloseOnNavigation:!1,closeGuardOnlyOnCancel:!0,closeDelay:175,contentWrapper:!0,wrapperStyles:``,wrapperClasses:``,contentStyles:``,overrideFullHeight:!1,animate:!0,hasBackdrop:!0,showCloseButton:!0,title:`Review your changes`,headerText:`Workspace settings`,disableClose:!1,disableCloseOnBackdropClick:!1,hasConfirmCloseGuard:!0,breakpoints:{sm:`bottom-sheet`,xl:`center`}};var ue=class s{destroyRef=b(ge$1);modalService=b(_e);modals=/* @__PURE__ */ new Set;activeModal=$(null);args=ee(pe);action=Pk();openedCount=0;constructor(){this.destroyRef.onDestroy(()=>{for(let e of this.modals)e.close(`cancel`,void 0,!0)})}openModal(){let e=this.args(),n=this.modalService.open(E,{ariaLabel:e.headerText?void 0:e.title,header:{text:e.headerText,icon:{name:`info`,color:`text-info`,bgColor:`auto`}},closeLabel:e.closeLabel,disableCloseOnNavigation:e.disableCloseOnNavigation,closeGuardOnlyOnCancel:e.closeGuardOnlyOnCancel,contentStyles:e.contentStyles,data:{title:e.title,body:`Confirm to apply the example, or cancel to return to the playground. The nested menus, live heading controls and wizard remain interactive.`,openedCount:this.openedCount},style:{layout:e.layout,closeDelay:e.closeDelay,contentWrapper:e.contentWrapper,wrapperStyles:e.wrapperStyles,wrapperClasses:e.wrapperClasses,overrideFullHeight:e.overrideFullHeight,animate:e.animate,hasBackdrop:e.hasBackdrop,showCloseButton:e.showCloseButton,breakpoints:e.breakpoints},disableClose:e.disableClose,disableCloseOnBackdropClick:e.disableCloseOnBackdropClick,closeGuard:e.hasConfirmCloseGuard?new hn(P,{data:`Are you sure you want to close the modal?`,header:{text:`Unsaved changes`},style:{showCloseButton:!1}}):void 0});this.modals.add(n),this.activeModal.set(n),this.action.emit({name:`open`,payload:e}),n.modalState$().pipe(Sd(this.destroyRef)).subscribe(t=>this.action.emit({name:`modalState`,payload:t})),n.afterClosed().pipe(Sd(this.destroyRef)).subscribe(t=>{this.modals.delete(n),this.activeModal()===n&&this.activeModal.set(null),t.state===`confirm`&&t.data&&(this.openedCount=t.data.openedCount),this.action.emit({name:`afterClosed`,payload:t})})}patchOpenModal(){let e=this.args(),n={header:{text:e.headerText,icon:{name:`pencil`}},disableClose:e.disableClose,disableCloseOnBackdropClick:e.disableCloseOnBackdropClick,style:{showCloseButton:e.showCloseButton}};this.activeModal()?.patch(n),this.action.emit({name:`patch`,payload:n})}closeModal(){this.activeModal()?.close(),this.action.emit({name:`closeRequested`,payload:void 0})}static ɵfac=function(n){return new(n||s)};static ɵcmp=Fr({type:s,selectors:[[`app-modal`]],inputs:{args:[1,`args`]},outputs:{action:`action`},decls:14,vars:2,consts:[[1,`story-actions`],[`type`,`button`,`bx-button`,``,`variant`,`filled`,3,`click`],[`name`,`app-window`,`size`,`16`],[`type`,`button`,`bx-button`,``,`variant`,`tonal`,3,`click`,`disabled`],[`name`,`check`,`size`,`16`],[`name`,`x`,`size`,`16`]],template:function(n,t){n&1&&(bo(0,`div`,0)(1,`button`,1),br(`click`,function(){return t.openModal()}),sd(2,`bx-icon`,2),lA(3,`Open modal`),Go(),bo(4,`button`,3),br(`click`,function(){return t.patchOpenModal()}),sd(5,`bx-icon`,4),lA(6,`Apply changes `),Go(),bo(7,`button`,3),br(`click`,function(){return t.closeModal()}),sd(8,`bx-icon`,5),lA(9,`Close modal`),Go()(),bo(10,`p`),lA(11,`Controls configure the next opening. Apply changes updates the current dialog. Layout, animation and responsive layouts apply when opening.`),Go(),bo(12,`p`),lA(13,`The dialog preserves nested modals, menus, projected header/footer content, translated close actions, live patches and the asynchronous wizard.`),Go()),n&2&&(Xl(4),xo(`disabled`,!t.activeModal()),Xl(3),xo(`disabled`,!t.activeModal()))},dependencies:[_e$1,ZC],styles:[`
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
}`]})};export{ue as Modal};