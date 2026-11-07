import{t as D}from"./chunk-CrmMkq6F.js";import"./chunk--mY2qYFy.js";import{$ as dn,J as Z,Q as cn,et as rn,f as Yi,h as eo,i as Ci,nt as ve$1,tt as sn}from"./main-UHMB555Q.js";import{$r as je,Ar as go,Bi as s_,Br as hr,Ca as yr,Fi as r2,Fn as Z$1,Ft as Ot,Gi as ste,H as Gk,Hr as i2,Kn as aS,Lt as P1,M as F,Mn as Ya,Mr as gr,Mt as Of,Rr as hk,S as D$1,Sr as fn,Tn as Wk,Xr as j$1,Zt as SS,aa as ve$2,bn as Wa,br as fM,gi as nn,gr as eM,ha as xb,hn as Ve,in as Te,jt as OR,ka as zn,ki as pte,kn as XF,l as AO,mt as LR,na as ute,nr as bn,oa as vn,on as U,qn as ae,s as A1,ti as jn,ui as lte,un as V,ut as Kf,wi as p,zn as _,zt as Pp}from"./chunk-B79cUMdP.js";import{n as s,t as r}from"./chunk-C9yOwMO6.js";var L=class{layout=`right`;animate=!0;hasBackdrop=!0;showCloseButton=!0;title=``;headerText=``;disableClose=!1;disableCloseOnBackdropClick=!1;hasConfirmCloseGuard=!0;constructor(e){Object.assign(this,e)}};function ve(s,e){if(s&1){let i=hr();j$1(0,`div`,1)(1,`button`,2),ve$2(`click`,function(){bn(i);let l=F();return vn(l.confirm())}),Te(2,`Confirm`),U(),j$1(3,`button`,3),ve$2(`click`,function(){bn(i);let l=F();return vn(l.close())}),Te(4,`Cancel`),U()()}}var j=class s extends dn{confirm(){this.modal?.close(`confirm`)}static ɵfac=(()=>{let e;return function(t){return(e||(e=go(s)))(t||s)}})();static ɵcmp=V({type:s,selectors:[[`app-confirm-close`]],features:[nn],decls:3,vars:1,consts:[[`class`,`button-container`,4,`appModalFooter`],[1,`button-container`],[`type`,`button`,`bx-button`,``,`variant`,`filled`,`color`,`success`,3,`click`],[`type`,`button`,`bx-button`,``,`variant`,`filled`,`color`,`danger`,3,`click`]],template:function(i,t){i&1&&(j$1(0,`div`),Te(1),U(),aS(2,ve,5,0,`div`,0)),i&2&&(D$1(),gr(` `,t.data,`
`))},dependencies:[sn,Z],styles:[`
.button-container[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 1rem;
}
.button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {
  cursor: pointer;
}`]})};var _e=(s,e)=>({"side-modal":s,"center-modal":e});function Me(s,e){if(s&1&&(j$1(0,`div`),Te(1),U()),s&2){let i=F();D$1(),gr(` `,i.data.title,`
`)}}function Se(s,e){if(s&1){let i=hr();j$1(0,`bx-menu`)(1,`bx-menu-item`,26),ve$2(`action`,function(){bn(i);let l=F();return vn(l.selectAction(`Edit details`))}),U(),j$1(2,`bx-menu-item`,27),ve$2(`action`,function(){bn(i);let l=F();return vn(l.selectAction(`Duplicate`))}),U()()}}function we(s,e){if(s&1){let i=hr();j$1(0,`bx-menu`)(1,`bx-menu-item`,28),ve$2(`action`,function(){bn(i);let l=F();return vn(l.selectAction(`Copy link`))}),U(),j$1(2,`bx-menu-item`,29),ve$2(`action`,function(){bn(i);let l=F();return vn(l.selectAction(`Archive`))}),U(),j$1(3,`bx-menu-item`,30),ve$2(`action`,function(){bn(i);let l=F();return vn(l.selectAction(`Delete`))}),U()()}s&2&&(D$1(3),ae(`danger`,!0))}function ke(s,e){if(s&1){let i=hr();j$1(0,`div`,31)(1,`button`,32),ve$2(`click`,function(){bn(i);let l=F();return vn(l.confirm())}),Te(2,`Confirm`),U(),j$1(3,`button`,33),ve$2(`click`,function(){bn(i);let l=F();return vn(l.close())}),Te(4,`Cancel`),U()()}}var W=class s$1 extends dn{modalService=p(ve$1);destroyRef=p(Z$1);liveForm=new Of({text:new hk(`Workspace settings`,{nonNullable:!0}),icon:new hk(`info`),loading:new hk(!1,{nonNullable:!0}),disableClose:new hk(!1,{nonNullable:!0}),showCloseButton:new hk(!0,{nonNullable:!0}),emphasize:new hk(!1,{nonNullable:!0})});iconOptions=[{label:`Info`,value:`info`},{label:`Edit`,value:`pencil`},{label:`Done`,value:`check`}];draftNote=new hk(``,{nonNullable:!0});wizardStep=_(1);saving=_(!1);menuStatus=_(`Try either menu. Actions keep this modal open.`);isSideModal=_(!1);isCenteredModal=_(!1);saveTimeout;constructor(){super(),this.destroyRef.onDestroy(()=>clearTimeout(this.saveTimeout))}onModalInit(){let e=this.modal.config().style.layout,i=this.modal.config();this.liveForm.patchValue({text:typeof i.header?.text==`string`?i.header.text:``,icon:i.header?.icon?.name??null,loading:i.header?.loading??!1,disableClose:i.disableClose,showCloseButton:i.style.showCloseButton??!0}),this.isSideModal.set(e===`right`||e===`left`),this.isCenteredModal.set(e===`center`)}applyLivePatch(){let e=this.liveForm.getRawValue();this.modal.patch({header:{text:e.text,icon:e.icon?{name:e.icon}:null,loading:e.loading},disableClose:e.disableClose,style:{showCloseButton:e.showCloseButton,wrapperStyles:e.emphasize?`--bx-modal-text: var(--bx-text-accent)`:null}})}advanceWizard(){if(!this.saving()){if(this.wizardStep()===1){this.wizardStep.set(2),this.modal.patch({header:{text:`Step 2: Review your changes`,icon:{name:`pencil`},loading:!1}});return}this.saving.set(!0),this.modal.patch({header:{text:`Saving your changes…`,loading:!0},disableClose:!0}),this.saveTimeout=setTimeout(()=>{this.saving.set(!1),this.wizardStep.set(3),this.modal.patch({header:{text:`Changes saved`,icon:{name:`check`,color:`text-success`},loading:!1},disableClose:!1})},1800)}}confirm(){this.modal?.close(`confirm`,{openedCount:this.data.openedCount+1})}selectAction(e){this.menuStatus.set(`${e} selected. The modal is still open.`)}openNested(){this.modalService.open(s$1,{data:s(r({},this.data),{title:`Nested dialog`,body:`The first nested dialog uses at least 90% material opacity. Open another to see a fully opaque surface. Closing returns to the unchanged parent.`}),header:{text:`Nested dialog`,icon:{name:`layers`,color:`accent`,bgColor:`auto`}},style:{layout:`center`,hasBackdrop:!0,animate:this.modal.config().style.animate??!0}})}static ɵfac=function(i){return new(i||s$1)};static ɵcmp=V({type:s$1,selectors:[[`app-demo-modal`]],features:[nn],decls:48,vars:17,consts:[[`dropdownActions`,``],[`contextActions`,``],[4,`appModalHeader`],[1,`demo-modal-content-class`,3,`ngClass`],[`aria-label`,`Live modal configuration`,1,`modal-patch-demo`],[`label`,`Draft note (retained across patches)`,`subscriptSizing`,`dynamic`,3,`formControl`],[1,`live-patch-form`,3,`formGroup`],[`label`,`Live heading`,`formControlName`,`text`,`subscriptSizing`,`dynamic`],[`label`,`Live icon (clear to remove)`,`formControlName`,`icon`,`subscriptSizing`,`dynamic`,3,`options`],[`label`,`Icon loading`,`formControlName`,`loading`,`subscriptSizing`,`dynamic`],[`label`,`Prevent user dismissal`,`formControlName`,`disableClose`,`subscriptSizing`,`dynamic`],[`label`,`Show close button`,`formControlName`,`showCloseButton`,`subscriptSizing`,`dynamic`],[`label`,`Accent heading appearance`,`formControlName`,`emphasize`,`subscriptSizing`,`dynamic`],[`type`,`button`,`bx-button`,``,`variant`,`tonal`,3,`click`,`disabled`],[`role`,`status`],[`type`,`button`,`bx-button`,``,3,`click`,`disabled`,`loading`],[`aria-label`,`Menus inside this modal`,1,`modal-menu-demo`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`primary`,`placement`,`bottom`,3,`bxDropdown`],[`name`,`chevron-down`,`size`,`16`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`grayscale`,1,`modal-context-target`,3,`bxContextMenu`],[`name`,`mouse-pointer-2`,`size`,`16`],[1,`menu-hint`],[`role`,`status`,1,`menu-status`],[`aria-label`,`Nested dialogs`,1,`modal-nesting-demo`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`accent`,3,`click`],[`class`,`button-container`,4,`appModalFooter`],[`label`,`Edit details`,`icon`,`pencil`,3,`action`],[`label`,`Duplicate`,`icon`,`copy`,3,`action`],[`label`,`Copy link`,`icon`,`link`,3,`action`],[`label`,`Archive`,`icon`,`archive`,3,`action`],[`label`,`Delete`,`icon`,`trash-2`,3,`action`,`danger`],[1,`button-container`],[`type`,`button`,`bx-button`,``,`variant`,`filled`,`color`,`success`,3,`click`],[`type`,`button`,`bx-button`,``,`variant`,`filled`,`color`,`danger`,3,`click`]],template:function(i,t){if(i&1&&(aS(0,Me,2,1,`div`,2),j$1(1,`div`,3)(2,`div`),Te(3),U(),j$1(4,`section`,4)(5,`h3`),Te(6,`Patch this open modal`),U(),j$1(7,`p`),Te(8,`Apply changes without replacing this content. The draft note and wizard step stay intact.`),U(),j$1(9,`bx-input-field`,5),OR(),U(),j$1(10,`form`,6)(11,`bx-input-field`,7),OR(),U(),j$1(12,`bx-select`,8),OR(),U(),j$1(13,`bx-checkbox`,9),OR(),U(),j$1(14,`bx-checkbox`,10),OR(),U(),j$1(15,`bx-checkbox`,11),OR(),U(),j$1(16,`bx-checkbox`,12),OR(),U(),j$1(17,`button`,13),ve$2(`click`,function(){return t.applyLivePatch()}),Te(18,`Apply live patch`),U()(),j$1(19,`p`,14),Te(20),U(),j$1(21,`button`,15),ve$2(`click`,function(){return t.advanceWizard()}),Te(22),U()(),j$1(23,`section`,16)(24,`h3`),Te(25,`Menus inside the modal`),U(),j$1(26,`button`,17),Te(27,` Open actions`),Ve(28,`bx-icon`,18),U(),j$1(29,`button`,19),Ve(30,`bx-icon`,20),Te(31,`Right-click or hold for more actions `),U(),j$1(32,`p`,21),Te(33,` On touch screens, touch and hold for more actions. With a keyboard, focus the example and press Shift + F10. Escape closes the menu first. `),U(),j$1(34,`p`,22),Te(35),U()(),j$1(36,`section`,23)(37,`h3`),Te(38,`Nested dialogs`),U(),j$1(39,`p`),Te(40,`Compare independent backdrops and increasing material opacity while the parent stays open.`),U(),j$1(41,`button`,24),ve$2(`click`,function(){return t.openNested()}),Te(42,`Open nested dialog`),U()()(),aS(43,Se,3,0,`ng-template`,null,0,xb)(45,we,4,1,`ng-template`,null,1,xb)(47,ke,5,0,`div`,25)),i&2){let l=Ya(44),Ce=Ya(46);D$1(),ae(`ngClass`,P1(14,_e,t.isSideModal(),t.isCenteredModal())),D$1(2),gr(` `,t.data.body,` `),D$1(6),ae(`formControl`,t.draftNote),LR(),D$1(),ae(`formGroup`,t.liveForm),D$1(),LR(),D$1(),ae(`options`,t.iconOptions),LR(),D$1(),LR(),D$1(),LR(),D$1(),LR(),D$1(),LR(),D$1(),ae(`disabled`,t.saving()),D$1(3),SS(`Wizard step `,t.wizardStep(),` of 3. `,t.saving()?`Saving…`:`Your draft is retained.`),D$1(),ae(`disabled`,t.saving()||t.wizardStep()===3)(`loading`,t.saving()),D$1(),gr(` `,t.wizardStep()===1?`Review draft`:t.wizardStep()===2?`Save draft`:`Saved`,` `),D$1(4),ae(`bxDropdown`,l),D$1(3),ae(`bxContextMenu`,Ce),D$1(6),je(t.menuStatus())}},dependencies:[pte,ute,ste,lte,r2,XF,i2,Ci,Yi,eo,cn,sn,AO,Z,Kf,eM,Wk,Gk,fn],styles:[`
.demo-modal-content-class[_ngcontent-%COMP%] {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 1rem;
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
  gap: 0.75rem;
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
  gap: 0.75rem;
  min-inline-size: 0;
  padding-block-start: 1rem;
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
  gap: 0.75rem;
  min-inline-size: 0;
}
.modal-patch-demo[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%], 
.live-patch-form[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {
  justify-self: start;
}`]})};var Oe=()=>({required:`Choose a layout.`});function De(s,e){if(s&1&&(j$1(0,`bx-select`,22),OR(),U()),s&2){let i=e.$implicit,t=F();ae(`clearable`,!1)(`label`,i)(`formControlName`,i)(`options`,t.breakpointSelectOptions),LR()}}var he=class s{modalService=p(ve$1);layoutOptions=[`center`,`right`,`left`,`bottom-sheet`];layoutSelectOptions=this.layoutOptions.map(e=>({label:e.split(`-`).map(i=>i.charAt(0).toUpperCase()+i.slice(1)).join(` `),value:e}));breakpointSelectOptions=[{label:`None`,value:`none`},...this.layoutSelectOptions];breakpointKeys=Object.keys(yr);form;activeModal=_(null);resultMessage=_(`Open a modal to preview its layout and close behavior.`);modalReadmePath=_(`projects/blocks/modal/README.md`);codeFiles=[{title:`modal-usage.ts`,path:`assets/code-snippets/modal/modal-usage.ts.txt`,language:`typescript`},{title:`modal.ts`,path:`assets/code-snippets/modal/modal.ts.txt`,language:`typescript`},{title:`modal.html`,path:`assets/code-snippets/modal/modal.html.txt`,language:`html`},{title:`modal.scss`,path:`assets/code-snippets/modal/modal.scss.txt`,language:`scss`},{title:`confirm-close.ts`,path:`assets/code-snippets/modal/confirm-close-modal.ts.txt`,language:`typescript`},{title:`confirm-close.html`,path:`assets/code-snippets/modal/confirm-close-modal.html.txt`,language:`html`},{title:`confirm-close.scss`,path:`assets/code-snippets/modal/confirm-close-modal.scss.txt`,language:`scss`},{title:`styles.scss`,path:`assets/code-snippets/modal/styles.scss.txt`,language:`scss`}];openedCount=0;constructor(){let e={layout:new hk(`right`),animate:new hk(!0),hasBackdrop:new hk(!0),showCloseButton:new hk(!0),title:new hk(`Review your changes`),headerText:new hk(`Workspace settings`),disableClose:new hk(!1),disableCloseOnBackdropClick:new hk(!1),hasConfirmCloseGuard:new hk(!0)};this.breakpointKeys.forEach(i=>{let t=`none`;i===`sm`&&(t=`bottom-sheet`),i===`xl`&&(t=`center`),e[i]=new hk(t)}),this.form=new Of(e)}openModal(){let e=this.createRequest();if(!e)return;let i=e.headerText===``?null:e.headerText,t=this.modalService.open(W,{header:i===void 0?void 0:{text:i??``,icon:{name:`info`,color:`text-info`,bgColor:`auto`}},data:{title:e.title,body:`This dialog shares the application theme and appearance settings. Confirm to apply the example, or cancel to return to the playground.`,openedCount:this.openedCount},style:{layout:e.layout,animate:e.animate,hasBackdrop:e.hasBackdrop,showCloseButton:e.showCloseButton,breakpoints:this.getBreakpointsFromRequest(e)},disableClose:e.disableClose,disableCloseOnBackdropClick:e.disableCloseOnBackdropClick,closeGuard:e.hasConfirmCloseGuard?new rn(j,{data:`Are you sure you want to close the modal?`,header:{text:`Unsaved Changes`},style:{showCloseButton:!1}}):void 0});this.activeModal.set(t),t.afterClosed().subscribe(l=>{this.activeModal()===t&&this.activeModal.set(null),l.state===`confirm`&&l.data?(this.openedCount=l.data.openedCount,this.resultMessage.set(`Changes confirmed. This modal has been confirmed ${this.openedCount} time${this.openedCount===1?``:`s`}.`)):this.resultMessage.set(`Modal closed. No changes were applied.`)})}patchOpenModal(){let e=this.form.getRawValue();this.activeModal()?.patch({header:{text:e.headerText??``,icon:{name:`pencil`}},disableClose:e.disableClose??!1,disableCloseOnBackdropClick:e.disableCloseOnBackdropClick??!1,style:{showCloseButton:e.showCloseButton??!0}})}createRequest(){if(this.form.invalid)return;let e=this.form.getRawValue();return new L(Object.fromEntries(Object.entries(e).map(([t,l])=>[t,l===null?void 0:l])))}getBreakpointsFromRequest(e){let i={};return this.breakpointKeys.forEach(t=>{let l=e[t];l&&l!==`none`&&(i[t]=l)}),i}static ɵfac=function(i){return new(i||s)};static ɵcmp=V({type:s,selectors:[[`app-modal`]],decls:45,vars:11,consts:[[`configPanel`,``],[`pageDescription`,`Configure modal layout, responsive behavior, close guards, and content using your shared appearance.`],[1,`demo-container`],[3,`matchHeight`,`codeFiles`,`readmePath`],[`bxSurface`,``,1,`config-container`],[1,`config-header`],[1,`hint`],[`routerLink`,`/appearance`],[`role`,`status`,1,`hint`],[1,`config-form`,3,`formGroup`],[1,`form-section`],[`label`,`Default Layout`,`formControlName`,`layout`,`subscriptSizing`,`dynamic`,3,`clearable`,`errorMessages`,`options`],[`label`,`Header Text`,`formControlName`,`headerText`,`subscriptSizing`,`dynamic`],[`label`,`Title`,`formControlName`,`title`,`subscriptSizing`,`dynamic`],[1,`form-checkboxes`],[`label`,`Animate`,`formControlName`,`animate`,`subscriptSizing`,`dynamic`],[`label`,`Has Backdrop`,`formControlName`,`hasBackdrop`,`subscriptSizing`,`dynamic`],[`label`,`Show Close Button`,`formControlName`,`showCloseButton`,`subscriptSizing`,`dynamic`],[`label`,`Disable Close (Global)`,`formControlName`,`disableClose`,`tooltip`,`Prevents closing via ESC key or backdrop clicks.`,`subscriptSizing`,`dynamic`],[`label`,`Disable Backdrop Click`,`formControlName`,`disableCloseOnBackdropClick`,`subscriptSizing`,`dynamic`],[`label`,`Use Confirm Close Guard`,`formControlName`,`hasConfirmCloseGuard`,`tooltip`,`Intercepts the close event and prompts the user to confirm.`,`subscriptSizing`,`dynamic`],[1,`breakpoints-grid`],[`subscriptSizing`,`dynamic`,3,`clearable`,`label`,`formControlName`,`options`],[1,`actions`],[`type`,`button`,`bx-button`,``,`variant`,`filled`,`color`,`grayscale`,3,`click`,`disabled`],[`type`,`button`,`bx-button`,``,`variant`,`tonal`,3,`click`,`disabled`]],template:function(i,t){if(i&1&&(j$1(0,`bx-page-container`,1)(1,`div`,2),Ve(2,`app-component-info`,3),j$1(3,`div`,4,0)(5,`div`,5),Te(6,`Configurator`),U(),j$1(7,`p`,6),Te(8,`Uses your shared appearance. `),j$1(9,`a`,7),Te(10,`Adjust appearance settings`),U()(),j$1(11,`p`,8),Te(12),U(),j$1(13,`form`,9)(14,`div`,10)(15,`h3`),Te(16,`General Style`),U(),j$1(17,`bx-select`,11),OR(),U(),j$1(18,`bx-input-field`,12),OR(),U(),j$1(19,`bx-input-field`,13),OR(),U()(),j$1(20,`div`,10)(21,`h3`),Te(22,`Behavior & Toggles`),U(),j$1(23,`div`,14)(24,`bx-checkbox`,15),OR(),U(),j$1(25,`bx-checkbox`,16),OR(),U(),j$1(26,`bx-checkbox`,17),OR(),U(),j$1(27,`bx-checkbox`,18),OR(),U(),j$1(28,`bx-checkbox`,19),OR(),U(),j$1(29,`bx-checkbox`,20),OR(),U()()(),j$1(30,`div`,10)(31,`h3`),Te(32,`Responsive Breakpoints`),U(),j$1(33,`p`,6),Te(34,`Select 'none' to ignore that breakpoint.`),U(),j$1(35,`div`,21),jn(36,De,1,4,`bx-select`,22,Wa),U()()(),j$1(38,`div`,23)(39,`button`,24),ve$2(`click`,function(){return t.openModal()}),Te(40,` Open Modal with live controls `),U(),j$1(41,`button`,25),ve$2(`click`,function(){return t.patchOpenModal()}),Te(42,` Apply heading and dismissal to open modal `),U()(),j$1(43,`p`,6),Te(44,`Layout and animation apply when opening. The dialog contains live controls and a wizard that use ModalRef.patch().`),U()()()()),i&2){let l=Ya(4);D$1(2),ae(`matchHeight`,l)(`codeFiles`,t.codeFiles)(`readmePath`,t.modalReadmePath()),D$1(10),je(t.resultMessage()),D$1(),ae(`formGroup`,t.form),D$1(4),ae(`clearable`,!1)(`errorMessages`,A1(10,Oe))(`options`,t.layoutSelectOptions),LR(),D$1(),LR(),D$1(),LR(),D$1(5),LR(),D$1(),LR(),D$1(),LR(),D$1(),LR(),D$1(),LR(),D$1(),LR(),D$1(7),zn(t.breakpointKeys),D$1(3),ae(`disabled`,t.form.invalid),D$1(2),ae(`disabled`,!t.activeModal()||t.form.invalid)}},dependencies:[fM,Ot,Pp,s_,pte,ute,ste,lte,XF,i2,D,Z,Yi,Ci,eo],styles:[`
[_nghost-%COMP%] {
  display: block;
  min-inline-size: 0;
}
.config-container[_ngcontent-%COMP%] {
  gap: 1rem;
}
.config-header[_ngcontent-%COMP%], 
.hint[_ngcontent-%COMP%], 
.form-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
  margin: 0;
}
.actions[_ngcontent-%COMP%] {
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-block-start: 0;
}
.actions[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {
  max-inline-size: 100%;
  overflow-wrap: anywhere;
}
.breakpoints-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 7.5rem), 1fr));
  gap: 1rem;
}`]})};export{he as Modal};