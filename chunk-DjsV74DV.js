import{t as i}from"./main-ZZPER4U3.js";import{a as bn,c as gn,d as yn,r as Me,s as fn}from"./chunk-1KtowfUg.js";import{A as va,D as fe$1,t as $r,w as Vt}from"./chunk-BEm-ihzG.js";import{X as qi,r as As,w as Wi,y as Ui}from"./chunk-DE1qZ0OS.js";import{t as U}from"./chunk-1rrlZ2Ss.js";import{$r as fa,Ao as y1,Ba as rm,Cr as bn$1,En as W,Gr as el,Hr as eM,Ia as rM,In as XT,L as Fw,Lr as dR,Lt as Os,Oa as qY,On as WY,Or as cR,Ra as rR,Rn as XY,Sr as ba,Xt as Ql,_o as vt,_t as Ky,ar as Zy,b as Cy,bi as hu,bo as wk,er as ZY,i as $n,ia as me,it as Jc,k as Ey,qi as m,ra as md,ri as gA,ro as u1,rt as Jb,v as CT,wr as br,xn as Ul,zi as ke}from"./chunk-CVY9_LoB.js";import{n as s,t as r}from"./chunk-C9yOwMO6.js";function ye(s,e){if(s&1){let n=Jb();Os(0,`div`,1)(1,`button`,2),br(`click`,function(){Jc(n);let l=Ql();return el(l.confirm())}),XT(2,`Confirm`),ba(),Os(3,`button`,3),br(`click`,function(){Jc(n);let l=Ql();return el(l.close())}),XT(4,`Cancel`),ba()()}}var N=class s extends fn{confirm(){this.modal?.close(`confirm`)}static ɵfac=(()=>{let e;return function(t){return(e||(e=bn$1(s)))(t||s)}})();static ɵcmp=$n({type:s,selectors:[[`app-confirm-close`]],features:[vt],decls:3,vars:1,consts:[[`class`,`button-container`,4,`appModalFooter`],[1,`button-container`],[`type`,`button`,`bx-button`,``,`variant`,`filled`,`color`,`success`,3,`click`],[`type`,`button`,`bx-button`,``,`variant`,`filled`,`color`,`danger`,3,`click`]],template:function(n,t){n&1&&(Os(0,`div`),XT(1),ba(),Ey(2,ye,5,0,`div`,0)),n&2&&(Ul(),rm(` `,t.data,`
`))},dependencies:[gn,fe$1],styles:[`
.button-container[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 1rem;
}
.button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {
  cursor: pointer;
}`]})};var ge=(s,e)=>({"side-modal":s,"center-modal":e});function fe(s,e){if(s&1&&(Os(0,`div`),XT(1),ba()),s&2){let n=Ql();Ul(),rm(` `,n.data.title,`
`)}}function be(s,e){if(s&1){let n=Jb();Os(0,`bx-menu`)(1,`bx-menu-item`,27),br(`action`,function(){Jc(n);let l=Ql();return el(l.selectAction(`Edit details`))}),ba(),Os(2,`bx-menu-item`,28),br(`action`,function(){Jc(n);let l=Ql();return el(l.selectAction(`Duplicate`))}),ba()()}}function he(s,e){if(s&1){let n=Jb();Os(0,`bx-menu`)(1,`bx-menu-item`,29),br(`action`,function(){Jc(n);let l=Ql();return el(l.selectAction(`Copy link`))}),ba(),Os(2,`bx-menu-item`,30),br(`action`,function(){Jc(n);let l=Ql();return el(l.selectAction(`Archive`))}),ba(),Os(3,`bx-menu-item`,31),br(`action`,function(){Jc(n);let l=Ql();return el(l.selectAction(`Delete`))}),ba()()}s&2&&(Ul(3),fa(`danger`,!0))}function ve(s,e){if(s&1){let n=Jb();Os(0,`div`,32)(1,`button`,33),br(`click`,function(){Jc(n);let l=Ql();return el(l.confirm())}),XT(2,`Confirm`),ba(),Os(3,`button`,34),br(`click`,function(){Jc(n);let l=Ql();return el(l.close())}),XT(4,`Cancel`),ba()()}}var E=class s$1 extends fn{modalService=m(Me);destroyRef=m(me);overlayDemoI18nService=m(i);liveForm=new hu({text:new Fw(`Workspace settings`,{nonNullable:!0}),icon:new Fw(`info`),loading:new Fw(!1,{nonNullable:!0}),disableClose:new Fw(!1,{nonNullable:!0}),showCloseButton:new Fw(!0,{nonNullable:!0}),emphasize:new Fw(!1,{nonNullable:!0})});iconOptions=[{label:`Info`,value:`info`},{label:`Edit`,value:`pencil`},{label:`Done`,value:`check`}];draftNote=new Fw(``,{nonNullable:!0});wizardStep=W(1);saving=W(!1);menuStatus=W(`Try either menu. Actions keep this modal open.`);isSideModal=W(!1);isCenteredModal=W(!1);saveTimeout;constructor(){super(),this.destroyRef.onDestroy(()=>clearTimeout(this.saveTimeout))}onModalInit(){let e=this.modal.config().style.layout,n=this.modal.config();this.liveForm.patchValue({text:typeof n.header?.text==`string`?n.header.text:``,icon:n.header?.icon?.name??null,loading:n.header?.loading??!1,disableClose:n.disableClose,showCloseButton:n.style.showCloseButton??!0}),this.isSideModal.set(e===`right`||e===`left`),this.isCenteredModal.set(e===`center`)}setCloseLanguage(e){this.overlayDemoI18nService.setLanguage(e),this.modal.patch({closeLabel:{key:`overlay.closeDialog`}})}applyLivePatch(){let e=this.liveForm.getRawValue();this.modal.patch({header:{text:e.text,icon:e.icon?{name:e.icon}:null,loading:e.loading},disableClose:e.disableClose,style:{showCloseButton:e.showCloseButton,wrapperStyles:e.emphasize?`--bx-modal-text: var(--bx-text-accent)`:null}})}advanceWizard(){if(!this.saving()){if(this.wizardStep()===1){this.wizardStep.set(2),this.modal.patch({header:{text:`Step 2: Review your changes`,icon:{name:`pencil`},loading:!1}});return}this.saving.set(!0),this.modal.patch({header:{text:`Saving your changes…`,loading:!0},disableClose:!0}),this.saveTimeout=setTimeout(()=>{this.saving.set(!1),this.wizardStep.set(3),this.modal.patch({header:{text:`Changes saved`,icon:{name:`check`,color:`text-success`},loading:!1},disableClose:!1})},1800)}}confirm(){this.modal?.close(`confirm`,{openedCount:this.data.openedCount+1})}selectAction(e){this.menuStatus.set(`${e} selected. The modal is still open.`)}openNested(){this.modalService.open(s$1,{data:s(r({},this.data),{title:`Nested dialog`,body:`The first nested dialog uses at least 90% material opacity. Open another to see a fully opaque surface. Closing returns to the unchanged parent.`}),header:{text:`Nested dialog`,icon:{name:`layers`,color:`accent`,bgColor:`auto`}},style:{layout:`center`,hasBackdrop:!0,animate:this.modal.config().style.animate??!0}})}static ɵfac=function(n){return new(n||s$1)};static ɵcmp=$n({type:s$1,selectors:[[`app-demo-modal`]],features:[vt],decls:49,vars:20,consts:[[`dropdownActions`,``],[`contextActions`,``],[4,`appModalHeader`],[1,`demo-modal-content-class`,3,`ngClass`],[`aria-label`,`Live modal configuration`,1,`modal-patch-demo`],[`label`,`Close action language`,3,`valueChange`,`options`,`clearable`,`value`],[`label`,`Draft note (retained across patches)`,`subscriptSizing`,`dynamic`,3,`formControl`],[1,`live-patch-form`,3,`formGroup`],[`label`,`Live heading`,`formControlName`,`text`,`subscriptSizing`,`dynamic`],[`label`,`Live icon (clear to remove)`,`formControlName`,`icon`,`subscriptSizing`,`dynamic`,3,`options`],[`label`,`Icon loading`,`formControlName`,`loading`,`subscriptSizing`,`dynamic`],[`label`,`Prevent user dismissal`,`formControlName`,`disableClose`,`subscriptSizing`,`dynamic`],[`label`,`Show close button`,`formControlName`,`showCloseButton`,`subscriptSizing`,`dynamic`],[`label`,`Accent heading appearance`,`formControlName`,`emphasize`,`subscriptSizing`,`dynamic`],[`type`,`button`,`bx-button`,``,`variant`,`tonal`,3,`click`,`disabled`],[`role`,`status`],[`type`,`button`,`bx-button`,``,3,`click`,`disabled`,`loading`],[`aria-label`,`Menus inside this modal`,1,`modal-menu-demo`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`primary`,`placement`,`bottom`,3,`bxDropdown`],[`name`,`chevron-down`,`size`,`16`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`grayscale`,1,`modal-context-target`,3,`bxContextMenu`],[`name`,`mouse-pointer-2`,`size`,`16`],[1,`menu-hint`],[`role`,`status`,1,`menu-status`],[`aria-label`,`Nested dialogs`,1,`modal-nesting-demo`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`accent`,3,`click`],[`class`,`button-container`,4,`appModalFooter`],[`label`,`Edit details`,`icon`,`pencil`,3,`action`],[`label`,`Duplicate`,`icon`,`copy`,3,`action`],[`label`,`Copy link`,`icon`,`link`,3,`action`],[`label`,`Archive`,`icon`,`archive`,3,`action`],[`label`,`Delete`,`icon`,`trash-2`,3,`action`,`danger`],[1,`button-container`],[`type`,`button`,`bx-button`,``,`variant`,`filled`,`color`,`success`,3,`click`],[`type`,`button`,`bx-button`,``,`variant`,`filled`,`color`,`danger`,3,`click`]],template:function(n,t){if(n&1&&(Ey(0,fe,2,1,`div`,2),Os(1,`div`,3)(2,`div`),XT(3),ba(),Os(4,`section`,4)(5,`h3`),XT(6,`Patch this open modal`),ba(),Os(7,`bx-select`,5),br(`valueChange`,function(T){return t.setCloseLanguage(T)}),ba(),Os(8,`p`),XT(9,`Apply changes without replacing this content. The draft note and wizard step stay intact.`),ba(),Os(10,`bx-input-field`,6),eM(),ba(),Os(11,`form`,7)(12,`bx-input-field`,8),eM(),ba(),Os(13,`bx-select`,9),eM(),ba(),Os(14,`bx-checkbox`,10),eM(),ba(),Os(15,`bx-checkbox`,11),eM(),ba(),Os(16,`bx-checkbox`,12),eM(),ba(),Os(17,`bx-checkbox`,13),eM(),ba(),Os(18,`button`,14),br(`click`,function(){return t.applyLivePatch()}),XT(19,`Apply live patch`),ba()(),Os(20,`p`,15),XT(21),ba(),Os(22,`button`,16),br(`click`,function(){return t.advanceWizard()}),XT(23),ba()(),Os(24,`section`,17)(25,`h3`),XT(26,`Menus inside the modal`),ba(),Os(27,`button`,18),XT(28,` Open actions`),Cy(29,`bx-icon`,19),ba(),Os(30,`button`,20),Cy(31,`bx-icon`,21),XT(32,`Right-click or hold for more actions `),ba(),Os(33,`p`,22),XT(34,` On touch screens, touch and hold for more actions. With a keyboard, focus the example and press Shift + F10. Escape closes the menu first. `),ba(),Os(35,`p`,23),XT(36),ba()(),Os(37,`section`,24)(38,`h3`),XT(39,`Nested dialogs`),ba(),Os(40,`p`),XT(41,`Compare independent backdrops and increasing material opacity while the parent stays open.`),ba(),Os(42,`button`,25),br(`click`,function(){return t.openNested()}),XT(43,`Open nested dialog`),ba()()(),Ey(44,be,3,0,`ng-template`,null,0,y1)(46,he,4,1,`ng-template`,null,1,y1)(48,ve,5,0,`div`,26)),n&2){let l=CT(45),T=CT(47);Ul(),fa(`ngClass`,u1(17,ge,t.isSideModal(),t.isCenteredModal())),Ul(2),rm(` `,t.data.body,` `),Ul(4),fa(`options`,t.overlayDemoI18nService.languages)(`clearable`,!1)(`value`,t.overlayDemoI18nService.language()),Ul(3),fa(`formControl`,t.draftNote),rM(),Ul(),fa(`formGroup`,t.liveForm),Ul(),rM(),Ul(),fa(`options`,t.iconOptions),rM(),Ul(),rM(),Ul(),rM(),Ul(),rM(),Ul(),rM(),Ul(),fa(`disabled`,t.saving()),Ul(3),Ky(`Wizard step `,t.wizardStep(),` of 3. `,t.saving()?`Saving…`:`Your draft is retained.`),Ul(),fa(`disabled`,t.saving()||t.wizardStep()===3)(`loading`,t.saving()),Ul(),rm(` `,t.wizardStep()===1?`Review draft`:t.wizardStep()===2?`Save draft`:`Saved`,` `),Ul(4),fa(`bxDropdown`,l),Ul(3),fa(`bxContextMenu`,T),Ul(6),Zy(t.menuStatus())}},dependencies:[XY,ZY,WY,qY,cR,rR,dR,$r,va,Vt,yn,gn,gA,fe$1,Ui,As,qi,Wi,U],styles:[`
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
}`]})};var pe={layout:`center`,animate:!0,hasBackdrop:!0,showCloseButton:!0,title:`Review your changes`,headerText:`Workspace settings`,disableClose:!1,disableCloseOnBackdropClick:!1,hasConfirmCloseGuard:!0,breakpoints:{sm:`bottom-sheet`,xl:`center`}};var ue=class s{destroyRef=m(me);modalService=m(Me);modals=/* @__PURE__ */ new Set;activeModal=W(null);args=ke(pe);action=wk();openedCount=0;constructor(){this.destroyRef.onDestroy(()=>{for(let e of this.modals)e.close(`cancel`,void 0,!0)})}openModal(){let e=this.args(),n=this.modalService.open(E,{ariaLabel:e.headerText?void 0:e.title,header:{text:e.headerText,icon:{name:`info`,color:`text-info`,bgColor:`auto`}},data:{title:e.title,body:`Confirm to apply the example, or cancel to return to the playground. The nested menus, live heading controls and wizard remain interactive.`,openedCount:this.openedCount},style:{layout:e.layout,animate:e.animate,hasBackdrop:e.hasBackdrop,showCloseButton:e.showCloseButton,breakpoints:e.breakpoints},disableClose:e.disableClose,disableCloseOnBackdropClick:e.disableCloseOnBackdropClick,closeGuard:e.hasConfirmCloseGuard?new bn(N,{data:`Are you sure you want to close the modal?`,header:{text:`Unsaved changes`},style:{showCloseButton:!1}}):void 0});this.modals.add(n),this.activeModal.set(n),this.action.emit({name:`open`,payload:e}),n.modalState$().pipe(md(this.destroyRef)).subscribe(t=>this.action.emit({name:`modalState`,payload:t})),n.afterClosed().pipe(md(this.destroyRef)).subscribe(t=>{this.modals.delete(n),this.activeModal()===n&&this.activeModal.set(null),t.state===`confirm`&&t.data&&(this.openedCount=t.data.openedCount),this.action.emit({name:`afterClosed`,payload:t})})}patchOpenModal(){let e=this.args(),n={header:{text:e.headerText,icon:{name:`pencil`}},disableClose:e.disableClose,disableCloseOnBackdropClick:e.disableCloseOnBackdropClick,style:{showCloseButton:e.showCloseButton}};this.activeModal()?.patch(n),this.action.emit({name:`patch`,payload:n})}closeModal(){this.activeModal()?.close(),this.action.emit({name:`closeRequested`,payload:void 0})}static ɵfac=function(n){return new(n||s)};static ɵcmp=$n({type:s,selectors:[[`app-modal`]],inputs:{args:[1,`args`]},outputs:{action:`action`},decls:14,vars:2,consts:[[1,`story-actions`],[`type`,`button`,`bx-button`,``,`variant`,`filled`,3,`click`],[`name`,`app-window`,`size`,`16`],[`type`,`button`,`bx-button`,``,`variant`,`tonal`,3,`click`,`disabled`],[`name`,`check`,`size`,`16`],[`name`,`x`,`size`,`16`]],template:function(n,t){n&1&&(Os(0,`div`,0)(1,`button`,1),br(`click`,function(){return t.openModal()}),Cy(2,`bx-icon`,2),XT(3,`Open modal`),ba(),Os(4,`button`,3),br(`click`,function(){return t.patchOpenModal()}),Cy(5,`bx-icon`,4),XT(6,`Apply changes `),ba(),Os(7,`button`,3),br(`click`,function(){return t.closeModal()}),Cy(8,`bx-icon`,5),XT(9,`Close modal`),ba()(),Os(10,`p`),XT(11,`Controls configure the next opening. Apply changes updates the current dialog. Layout, animation and responsive layouts apply when opening.`),ba(),Os(12,`p`),XT(13,`The dialog preserves nested modals, menus, projected header/footer content, translated close actions, live patches and the asynchronous wizard.`),ba()),n&2&&(Ul(4),fa(`disabled`,!t.activeModal()),Ul(3),fa(`disabled`,!t.activeModal()))},dependencies:[fe$1,U],styles:[`
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