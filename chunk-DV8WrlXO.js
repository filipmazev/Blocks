import{t as C}from"./chunk-DRMcvbHR.js";import{A as i}from"./main-XM53PJXA.js";import{a as gn,i as fn,r as bn,s as un,t as Me$1}from"./chunk-CeEUUsAC.js";import"./chunk-Dy-sAwBr.js";import{C as fo,k as me,s as Hr,t as At}from"./chunk-DruVvggf.js";import{Bn as Vt,Bo as zie,Do as y,J as Fie,Jn as Wt,Mn as Um,Mo as yT,Nn as Uv,Oi as iT,On as Tt,Pr as bB,Rr as bb,Rt as M,Si as hb,So as xe$1,T as Cn,Tr as aB,Ui as kr,W as Fa,Wa as te,Xn as X,Z as G$1,_ as Be,_o as wt,a as $t,ai as fB,ca as oI,cn as Q,dr as ZE,ii as f,k as D,kn as UA,li as fb,lo as w,mn as R,n as $f,nn as Pa,pa as pE,pt as Hr$1,qn as Wo,st as HA,to as ux,ui as fe,v as Bie,va as pn,wa as qie,xa as qP,yn as Rt,yr as _,zn as Ve}from"./chunk-C5OxD8uX.js";import{n as s,t as r}from"./chunk-DFgPOoGa.js";var G=class{layout=`right`;animate=!0;hasBackdrop=!0;showCloseButton=!0;title=``;headerText=``;disableClose=!1;disableCloseOnBackdropClick=!1;hasConfirmCloseGuard=!0;constructor(e){Object.assign(this,e)}};function xe(s,e){if(s&1){let a=wt();_(0,`div`,1)(1,`button`,2),te(`click`,function(){Be(a);let l=w();return Ve(l.confirm())}),X(2,`Confirm`),D(),_(3,`button`,3),te(`click`,function(){Be(a);let l=w();return Ve(l.close())}),X(4,`Cancel`),D()()}}var j=class s extends bn{confirm(){this.modal?.close(`confirm`)}static ɵfac=(()=>{let e;return function(t){return(e||(e=Wo(s)))(t||s)}})();static ɵcmp=G$1({type:s,selectors:[[`app-confirm-close`]],features:[Cn],decls:3,vars:1,consts:[[`class`,`button-container`,4,`appModalFooter`],[1,`button-container`],[`type`,`button`,`bx-button`,``,`variant`,`filled`,`color`,`success`,3,`click`],[`type`,`button`,`bx-button`,``,`variant`,`filled`,`color`,`danger`,3,`click`]],template:function(a,t){a&1&&(_(0,`div`),X(1),D(),Pa(2,xe,5,0,`div`,0)),a&2&&(y(),pn(` `,t.data,`
`))},dependencies:[fn,me],styles:[`
.button-container[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 1rem;
}
.button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {
  cursor: pointer;
}`]})};var Me=(s,e)=>({"side-modal":s,"center-modal":e});function Se(s,e){if(s&1&&(_(0,`div`),X(1),D()),s&2){let a=w();y(),pn(` `,a.data.title,`
`)}}function we(s,e){if(s&1){let a=wt();_(0,`bx-menu`)(1,`bx-menu-item`,27),te(`action`,function(){Be(a);let l=w();return Ve(l.selectAction(`Edit details`))}),D(),_(2,`bx-menu-item`,28),te(`action`,function(){Be(a);let l=w();return Ve(l.selectAction(`Duplicate`))}),D()()}}function ke(s,e){if(s&1){let a=wt();_(0,`bx-menu`)(1,`bx-menu-item`,29),te(`action`,function(){Be(a);let l=w();return Ve(l.selectAction(`Copy link`))}),D(),_(2,`bx-menu-item`,30),te(`action`,function(){Be(a);let l=w();return Ve(l.selectAction(`Archive`))}),D(),_(3,`bx-menu-item`,31),te(`action`,function(){Be(a);let l=w();return Ve(l.selectAction(`Delete`))}),D()()}s&2&&(y(3),R(`danger`,!0))}function De(s,e){if(s&1){let a=wt();_(0,`div`,32)(1,`button`,33),te(`click`,function(){Be(a);let l=w();return Ve(l.confirm())}),X(2,`Confirm`),D(),_(3,`button`,34),te(`click`,function(){Be(a);let l=w();return Ve(l.close())}),X(4,`Cancel`),D()()}}var W=class s$1 extends bn{modalService=f(Me$1);destroyRef=f(Q);overlayDemoI18nService=f(i);liveForm=new Um({text:new oI(`Workspace settings`,{nonNullable:!0}),icon:new oI(`info`),loading:new oI(!1,{nonNullable:!0}),disableClose:new oI(!1,{nonNullable:!0}),showCloseButton:new oI(!0,{nonNullable:!0}),emphasize:new oI(!1,{nonNullable:!0})});iconOptions=[{label:`Info`,value:`info`},{label:`Edit`,value:`pencil`},{label:`Done`,value:`check`}];draftNote=new oI(``,{nonNullable:!0});wizardStep=M(1);saving=M(!1);menuStatus=M(`Try either menu. Actions keep this modal open.`);isSideModal=M(!1);isCenteredModal=M(!1);saveTimeout;constructor(){super(),this.destroyRef.onDestroy(()=>clearTimeout(this.saveTimeout))}onModalInit(){let e=this.modal.config().style.layout,a=this.modal.config();this.liveForm.patchValue({text:typeof a.header?.text==`string`?a.header.text:``,icon:a.header?.icon?.name??null,loading:a.header?.loading??!1,disableClose:a.disableClose,showCloseButton:a.style.showCloseButton??!0}),this.isSideModal.set(e===`right`||e===`left`),this.isCenteredModal.set(e===`center`)}setCloseLanguage(e){this.overlayDemoI18nService.setLanguage(e),this.modal.patch({closeLabel:{key:`overlay.closeDialog`}})}applyLivePatch(){let e=this.liveForm.getRawValue();this.modal.patch({header:{text:e.text,icon:e.icon?{name:e.icon}:null,loading:e.loading},disableClose:e.disableClose,style:{showCloseButton:e.showCloseButton,wrapperStyles:e.emphasize?`--bx-modal-text: var(--bx-text-accent)`:null}})}advanceWizard(){if(!this.saving()){if(this.wizardStep()===1){this.wizardStep.set(2),this.modal.patch({header:{text:`Step 2: Review your changes`,icon:{name:`pencil`},loading:!1}});return}this.saving.set(!0),this.modal.patch({header:{text:`Saving your changes…`,loading:!0},disableClose:!0}),this.saveTimeout=setTimeout(()=>{this.saving.set(!1),this.wizardStep.set(3),this.modal.patch({header:{text:`Changes saved`,icon:{name:`check`,color:`text-success`},loading:!1},disableClose:!1})},1800)}}confirm(){this.modal?.close(`confirm`,{openedCount:this.data.openedCount+1})}selectAction(e){this.menuStatus.set(`${e} selected. The modal is still open.`)}openNested(){this.modalService.open(s$1,{data:s(r({},this.data),{title:`Nested dialog`,body:`The first nested dialog uses at least 90% material opacity. Open another to see a fully opaque surface. Closing returns to the unchanged parent.`}),header:{text:`Nested dialog`,icon:{name:`layers`,color:`accent`,bgColor:`auto`}},style:{layout:`center`,hasBackdrop:!0,animate:this.modal.config().style.animate??!0}})}static ɵfac=function(a){return new(a||s$1)};static ɵcmp=G$1({type:s$1,selectors:[[`app-demo-modal`]],features:[Cn],decls:49,vars:20,consts:[[`dropdownActions`,``],[`contextActions`,``],[4,`appModalHeader`],[1,`demo-modal-content-class`,3,`ngClass`],[`aria-label`,`Live modal configuration`,1,`modal-patch-demo`],[`label`,`Close action language`,3,`valueChange`,`options`,`clearable`,`value`],[`label`,`Draft note (retained across patches)`,`subscriptSizing`,`dynamic`,3,`formControl`],[1,`live-patch-form`,3,`formGroup`],[`label`,`Live heading`,`formControlName`,`text`,`subscriptSizing`,`dynamic`],[`label`,`Live icon (clear to remove)`,`formControlName`,`icon`,`subscriptSizing`,`dynamic`,3,`options`],[`label`,`Icon loading`,`formControlName`,`loading`,`subscriptSizing`,`dynamic`],[`label`,`Prevent user dismissal`,`formControlName`,`disableClose`,`subscriptSizing`,`dynamic`],[`label`,`Show close button`,`formControlName`,`showCloseButton`,`subscriptSizing`,`dynamic`],[`label`,`Accent heading appearance`,`formControlName`,`emphasize`,`subscriptSizing`,`dynamic`],[`type`,`button`,`bx-button`,``,`variant`,`tonal`,3,`click`,`disabled`],[`role`,`status`],[`type`,`button`,`bx-button`,``,3,`click`,`disabled`,`loading`],[`aria-label`,`Menus inside this modal`,1,`modal-menu-demo`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`primary`,`placement`,`bottom`,3,`bxDropdown`],[`name`,`chevron-down`,`size`,`16`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`grayscale`,1,`modal-context-target`,3,`bxContextMenu`],[`name`,`mouse-pointer-2`,`size`,`16`],[1,`menu-hint`],[`role`,`status`,1,`menu-status`],[`aria-label`,`Nested dialogs`,1,`modal-nesting-demo`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`accent`,3,`click`],[`class`,`button-container`,4,`appModalFooter`],[`label`,`Edit details`,`icon`,`pencil`,3,`action`],[`label`,`Duplicate`,`icon`,`copy`,3,`action`],[`label`,`Copy link`,`icon`,`link`,3,`action`],[`label`,`Archive`,`icon`,`archive`,3,`action`],[`label`,`Delete`,`icon`,`trash-2`,3,`action`,`danger`],[1,`button-container`],[`type`,`button`,`bx-button`,``,`variant`,`filled`,`color`,`success`,3,`click`],[`type`,`button`,`bx-button`,``,`variant`,`filled`,`color`,`danger`,3,`click`]],template:function(a,t){if(a&1&&(Pa(0,Se,2,1,`div`,2),_(1,`div`,3)(2,`div`),X(3),D(),_(4,`section`,4)(5,`h3`),X(6,`Patch this open modal`),D(),_(7,`bx-select`,5),te(`valueChange`,function(q){return t.setCloseLanguage(q)}),D(),_(8,`p`),X(9,`Apply changes without replacing this content. The draft note and wizard step stay intact.`),D(),_(10,`bx-input-field`,6),HA(),D(),_(11,`form`,7)(12,`bx-input-field`,8),HA(),D(),_(13,`bx-select`,9),HA(),D(),_(14,`bx-checkbox`,10),HA(),D(),_(15,`bx-checkbox`,11),HA(),D(),_(16,`bx-checkbox`,12),HA(),D(),_(17,`bx-checkbox`,13),HA(),D(),_(18,`button`,14),te(`click`,function(){return t.applyLivePatch()}),X(19,`Apply live patch`),D()(),_(20,`p`,15),X(21),D(),_(22,`button`,16),te(`click`,function(){return t.advanceWizard()}),X(23),D()(),_(24,`section`,17)(25,`h3`),X(26,`Menus inside the modal`),D(),_(27,`button`,18),X(28,` Open actions`),xe$1(29,`bx-icon`,19),D(),_(30,`button`,20),xe$1(31,`bx-icon`,21),X(32,`Right-click or hold for more actions `),D(),_(33,`p`,22),X(34,` On touch screens, touch and hold for more actions. With a keyboard, focus the example and press Shift + F10. Escape closes the menu first. `),D(),_(35,`p`,23),X(36),D()(),_(37,`section`,24)(38,`h3`),X(39,`Nested dialogs`),D(),_(40,`p`),X(41,`Compare independent backdrops and increasing material opacity while the parent stays open.`),D(),_(42,`button`,25),te(`click`,function(){return t.openNested()}),X(43,`Open nested dialog`),D()()(),Pa(44,we,3,0,`ng-template`,null,0,kr)(46,ke,4,1,`ng-template`,null,1,kr)(48,De,5,0,`div`,26)),a&2){let l=Tt(45),q=Tt(47);y(),R(`ngClass`,Uv(17,Me,t.isSideModal(),t.isCenteredModal())),y(2),pn(` `,t.data.body,` `),y(4),R(`options`,t.overlayDemoI18nService.languages)(`clearable`,!1)(`value`,t.overlayDemoI18nService.language()),y(3),R(`formControl`,t.draftNote),UA(),y(),R(`formGroup`,t.liveForm),y(),UA(),y(),R(`options`,t.iconOptions),UA(),y(),UA(),y(),UA(),y(),UA(),y(),UA(),y(),R(`disabled`,t.saving()),y(3),pE(`Wizard step `,t.wizardStep(),` of 3. `,t.saving()?`Saving…`:`Your draft is retained.`),y(),R(`disabled`,t.saving()||t.wizardStep()===3)(`loading`,t.saving()),y(),pn(` `,t.wizardStep()===1?`Review draft`:t.wizardStep()===2?`Save draft`:`Saved`,` `),y(4),R(`bxDropdown`,l),y(3),R(`bxContextMenu`,q),y(6),fe(t.menuStatus())}},dependencies:[qie,zie,Fie,Bie,fB,aB,bB,Hr,fo,At,gn,fn,ux,me,fb,iT,hb,bb,Vt],styles:[`
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
}`]})};var Oe=()=>({required:`Choose a layout.`});function Ne(s,e){if(s&1&&(_(0,`bx-select`,22),HA(),D()),s&2){let a=e.$implicit,t=w();R(`clearable`,!1)(`label`,a)(`formControlName`,a)(`options`,t.breakpointSelectOptions),UA()}}var ve=class s{modalService=f(Me$1);layoutOptions=[`center`,`right`,`left`,`bottom-sheet`];layoutSelectOptions=this.layoutOptions.map(e=>({label:e===`bottom-sheet`?`Bottom drawer`:e.split(`-`).map(a=>a.charAt(0).toUpperCase()+a.slice(1)).join(` `),value:e}));breakpointSelectOptions=[{label:`None`,value:`none`},...this.layoutSelectOptions];breakpointKeys=Object.keys(Hr$1);form;activeModal=M(null);resultMessage=M(`Open a modal to preview its layout and close behavior.`);modalReadmePath=M(`projects/blocks/modal/README.md`);codeFiles=[{title:`modal-usage.ts`,path:`assets/code-snippets/modal/modal-usage.ts.txt`,language:`typescript`},{title:`modal.ts`,path:`assets/code-snippets/modal/modal.ts.txt`,language:`typescript`},{title:`modal.html`,path:`assets/code-snippets/modal/modal.html.txt`,language:`html`},{title:`modal.scss`,path:`assets/code-snippets/modal/modal.scss.txt`,language:`scss`},{title:`confirm-close.ts`,path:`assets/code-snippets/modal/confirm-close-modal.ts.txt`,language:`typescript`},{title:`confirm-close.html`,path:`assets/code-snippets/modal/confirm-close-modal.html.txt`,language:`html`},{title:`confirm-close.scss`,path:`assets/code-snippets/modal/confirm-close-modal.scss.txt`,language:`scss`},{title:`styles.scss`,path:`assets/code-snippets/modal/styles.scss.txt`,language:`scss`}];openedCount=0;constructor(){let e={layout:new oI(`right`),animate:new oI(!0),hasBackdrop:new oI(!0),showCloseButton:new oI(!0),title:new oI(`Review your changes`),headerText:new oI(`Workspace settings`),disableClose:new oI(!1),disableCloseOnBackdropClick:new oI(!1),hasConfirmCloseGuard:new oI(!0)};this.breakpointKeys.forEach(a=>{let t=`none`;a===`sm`&&(t=`bottom-sheet`),a===`xl`&&(t=`center`),e[a]=new oI(t)}),this.form=new Um(e)}openModal(){let e=this.createRequest();if(!e)return;let a=e.headerText===``?null:e.headerText,t=this.modalService.open(W,{ariaLabel:a?void 0:e.title,header:a===void 0?void 0:{text:a??``,icon:{name:`info`,color:`text-info`,bgColor:`auto`}},data:{title:e.title,body:`This dialog shares the application theme and appearance settings. Confirm to apply the example, or cancel to return to the playground.`,openedCount:this.openedCount},style:{layout:e.layout,animate:e.animate,hasBackdrop:e.hasBackdrop,showCloseButton:e.showCloseButton,breakpoints:this.getBreakpointsFromRequest(e)},disableClose:e.disableClose,disableCloseOnBackdropClick:e.disableCloseOnBackdropClick,closeGuard:e.hasConfirmCloseGuard?new un(j,{data:`Are you sure you want to close the modal?`,header:{text:`Unsaved Changes`},style:{showCloseButton:!1}}):void 0});this.activeModal.set(t),t.afterClosed().subscribe(l=>{this.activeModal()===t&&this.activeModal.set(null),l.state===`confirm`&&l.data?(this.openedCount=l.data.openedCount,this.resultMessage.set(`Changes confirmed. This modal has been confirmed ${this.openedCount} time${this.openedCount===1?``:`s`}.`)):this.resultMessage.set(`Modal closed. No changes were applied.`)})}patchOpenModal(){let e=this.form.getRawValue();this.activeModal()?.patch({header:{text:e.headerText??``,icon:{name:`pencil`}},disableClose:e.disableClose??!1,disableCloseOnBackdropClick:e.disableCloseOnBackdropClick??!1,style:{showCloseButton:e.showCloseButton??!0}})}createRequest(){if(this.form.invalid)return;let e=this.form.getRawValue();return new G(Object.fromEntries(Object.entries(e).map(([t,l])=>[t,l===null?void 0:l])))}getBreakpointsFromRequest(e){let a={};return this.breakpointKeys.forEach(t=>{let l=e[t];l&&l!==`none`&&(a[t]=l)}),a}static ɵfac=function(a){return new(a||s)};static ɵcmp=G$1({type:s,selectors:[[`app-modal`]],decls:47,vars:11,consts:[[`configPanel`,``],[`pageDescription`,`Configure modal layout, responsive behavior, close guards, and content using your shared appearance.`],[1,`demo-container`],[3,`matchHeight`,`codeFiles`,`readmePath`],[`bxSurface`,``,1,`config-container`],[1,`config-header`],[1,`hint`],[`routerLink`,`/appearance`],[`role`,`status`,1,`hint`],[1,`config-form`,3,`formGroup`],[1,`form-section`],[`label`,`Default Layout`,`formControlName`,`layout`,`subscriptSizing`,`dynamic`,3,`clearable`,`errorMessages`,`options`],[`label`,`Header Text`,`formControlName`,`headerText`,`subscriptSizing`,`dynamic`],[`label`,`Title`,`formControlName`,`title`,`subscriptSizing`,`dynamic`],[1,`form-checkboxes`],[`label`,`Animate`,`formControlName`,`animate`,`subscriptSizing`,`dynamic`],[`label`,`Has Backdrop`,`formControlName`,`hasBackdrop`,`subscriptSizing`,`dynamic`],[`label`,`Show Close Button`,`formControlName`,`showCloseButton`,`subscriptSizing`,`dynamic`],[`label`,`Disable Close (Global)`,`formControlName`,`disableClose`,`tooltip`,`Prevents closing via ESC key or backdrop clicks.`,`subscriptSizing`,`dynamic`],[`label`,`Disable Backdrop Click`,`formControlName`,`disableCloseOnBackdropClick`,`subscriptSizing`,`dynamic`],[`label`,`Use Confirm Close Guard`,`formControlName`,`hasConfirmCloseGuard`,`tooltip`,`Intercepts the close event and prompts the user to confirm.`,`subscriptSizing`,`dynamic`],[1,`breakpoints-grid`],[`subscriptSizing`,`dynamic`,3,`clearable`,`label`,`formControlName`,`options`],[1,`actions`],[`type`,`button`,`bx-button`,``,`variant`,`filled`,`color`,`grayscale`,3,`click`,`disabled`],[`type`,`button`,`bx-button`,``,`variant`,`tonal`,3,`click`,`disabled`]],template:function(a,t){if(a&1&&(_(0,`bx-page-container`,1)(1,`div`,2),xe$1(2,`app-component-info`,3),_(3,`div`,4,0)(5,`div`,5),X(6,`Configurator`),D(),_(7,`p`,6),X(8,` Compare the restrained centered entrance with larger side and bottom-sheet motion. Close during entrance, resize, and switch accessibility settings to inspect interruption. On a bottom sheet, drag the handle slowly, flick, pause before release, or cancel with Escape. Confirm-close guards still apply. `),D(),_(9,`p`,6),X(10,`Uses your shared appearance. `),_(11,`a`,7),X(12,`Adjust appearance settings`),D()(),_(13,`p`,8),X(14),D(),_(15,`form`,9)(16,`div`,10)(17,`h3`),X(18,`General Style`),D(),_(19,`bx-select`,11),HA(),D(),_(20,`bx-input-field`,12),HA(),D(),_(21,`bx-input-field`,13),HA(),D()(),_(22,`div`,10)(23,`h3`),X(24,`Behavior & Toggles`),D(),_(25,`div`,14)(26,`bx-checkbox`,15),HA(),D(),_(27,`bx-checkbox`,16),HA(),D(),_(28,`bx-checkbox`,17),HA(),D(),_(29,`bx-checkbox`,18),HA(),D(),_(30,`bx-checkbox`,19),HA(),D(),_(31,`bx-checkbox`,20),HA(),D()()(),_(32,`div`,10)(33,`h3`),X(34,`Responsive Breakpoints`),D(),_(35,`p`,6),X(36,`Select 'none' to ignore that breakpoint.`),D(),_(37,`div`,21),$t(38,Ne,1,4,`bx-select`,22,Fa),D()()(),_(40,`div`,23)(41,`button`,24),te(`click`,function(){return t.openModal()}),X(42,` Open Modal with live controls `),D(),_(43,`button`,25),te(`click`,function(){return t.patchOpenModal()}),X(44,` Apply heading and dismissal to open modal `),D()(),_(45,`p`,6),X(46,`Layout and animation apply when opening. The dialog contains live controls and a wizard that use ModalRef.patch().`),D()()()()),a&2){let l=Tt(4);y(2),R(`matchHeight`,l)(`codeFiles`,t.codeFiles)(`readmePath`,t.modalReadmePath()),y(12),fe(t.resultMessage()),y(),R(`formGroup`,t.form),y(4),R(`clearable`,!1)(`errorMessages`,qP(10,Oe))(`options`,t.layoutSelectOptions),UA(),y(),UA(),y(),UA(),y(5),UA(),y(),UA(),y(),UA(),y(),UA(),y(),UA(),y(),UA(),y(7),Wt(t.breakpointKeys),y(3),R(`disabled`,t.form.invalid),y(2),R(`disabled`,!t.activeModal()||t.form.invalid)}},dependencies:[yT,Rt,$f,ZE,qie,zie,Fie,Bie,aB,bB,C,me,fo,Hr,At],styles:[`
[_nghost-%COMP%] {
  display: block;
  min-inline-size: 0;
}
.config-container[_ngcontent-%COMP%] {
  gap: var(--%NS%bx-space-4, 1rem);
}
.config-header[_ngcontent-%COMP%], 
.hint[_ngcontent-%COMP%], 
.form-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
  margin: 0;
}
.actions[_ngcontent-%COMP%] {
  flex-wrap: wrap;
  gap: var(--%NS%bx-space-3, 0.75rem);
  margin-block-start: 0;
}
.actions[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {
  max-inline-size: 100%;
  overflow-wrap: anywhere;
}
.breakpoints-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 7.5rem), 1fr));
  gap: var(--%NS%bx-space-4, 1rem);
}`]})};export{ve as Modal};