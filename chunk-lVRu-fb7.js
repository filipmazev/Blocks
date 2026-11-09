import{t as C}from"./chunk-CIhMitMx.js";import{s as Ti,w as rr,x as nr}from"./main-SBKNNIA4.js";import{a as Tn,i as On,r as Ne,s as kn,t as Dn}from"./chunk-D3RC15xL.js";import"./chunk-CFQtZ7ay.js";import{n as Z}from"./chunk-BQlfz5HR.js";import{$ as IM,$t as Pt,A as E,Br as gF,C as Co,Ct as Lt,Er as dne,Fa as ye$1,Hr as gM,Ma as wr,Nn as Vt,Nt as ND,Pn as W$1,Ra as yr,Ti as mne,Ui as p,Wr as gn,X as Hn,Yi as pne,Yn as ZR,Zi as q,Zr as ia,_r as cM,_t as L$1,a as $p,bn as Tb,di as kF,ea as qe,f as BC,fn as SF,gi as le,gn as Sr,ha as sn,hi as lM,jn as Ve,jr as eO,la as rm,na as qn,nn as QO,oa as ra,rn as QR,t as $,ta as qf,tn as QA,ui as kC,ut as K,v as CS,w as D,xr as cne,zt as Ne$1}from"./chunk-B8p78nSc.js";import{n as s,t as r}from"./chunk-DFgPOoGa.js";var L=class{layout=`right`;animate=!0;hasBackdrop=!0;showCloseButton=!0;title=``;headerText=``;disableClose=!1;disableCloseOnBackdropClick=!1;hasConfirmCloseGuard=!0;constructor(e){Object.assign(this,e)}};function ve(s,e){if(s&1){let a=yr();K(0,`div`,1)(1,`button`,2),ye$1(`click`,function(){Pt(a);let l=L$1();return Lt(l.confirm())}),Ne$1(2,`Confirm`),$(),K(3,`button`,3),ye$1(`click`,function(){Pt(a);let l=L$1();return Lt(l.close())}),Ne$1(4,`Cancel`),$()()}}var j=class s extends kn{confirm(){this.modal?.close(`confirm`)}static ɵfac=(()=>{let e;return function(n){return(e||(e=Co(s)))(n||s)}})();static ɵcmp=q({type:s,selectors:[[`app-confirm-close`]],features:[sn],decls:3,vars:1,consts:[[`class`,`button-container`,4,`appModalFooter`],[1,`button-container`],[`type`,`button`,`bx-button`,``,`variant`,`filled`,`color`,`success`,3,`click`],[`type`,`button`,`bx-button`,``,`variant`,`filled`,`color`,`danger`,3,`click`]],template:function(a,n){a&1&&(K(0,`div`),Ne$1(1),$(),kC(2,ve,5,0,`div`,0)),a&2&&(D(),wr(` `,n.data,`
`))},dependencies:[On,Z],styles:[`
.button-container[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 1rem;
}
.button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {
  cursor: pointer;
}`]})};var _e=(s,e)=>({"side-modal":s,"center-modal":e});function Me(s,e){if(s&1&&(K(0,`div`),Ne$1(1),$()),s&2){let a=L$1();D(),wr(` `,a.data.title,`
`)}}function Se(s,e){if(s&1){let a=yr();K(0,`bx-menu`)(1,`bx-menu-item`,26),ye$1(`action`,function(){Pt(a);let l=L$1();return Lt(l.selectAction(`Edit details`))}),$(),K(2,`bx-menu-item`,27),ye$1(`action`,function(){Pt(a);let l=L$1();return Lt(l.selectAction(`Duplicate`))}),$()()}}function we(s,e){if(s&1){let a=yr();K(0,`bx-menu`)(1,`bx-menu-item`,28),ye$1(`action`,function(){Pt(a);let l=L$1();return Lt(l.selectAction(`Copy link`))}),$(),K(2,`bx-menu-item`,29),ye$1(`action`,function(){Pt(a);let l=L$1();return Lt(l.selectAction(`Archive`))}),$(),K(3,`bx-menu-item`,30),ye$1(`action`,function(){Pt(a);let l=L$1();return Lt(l.selectAction(`Delete`))}),$()()}s&2&&(D(3),le(`danger`,!0))}function ke(s,e){if(s&1){let a=yr();K(0,`div`,31)(1,`button`,32),ye$1(`click`,function(){Pt(a);let l=L$1();return Lt(l.confirm())}),Ne$1(2,`Confirm`),$(),K(3,`button`,33),ye$1(`click`,function(){Pt(a);let l=L$1();return Lt(l.close())}),Ne$1(4,`Cancel`),$()()}}var W=class s$1 extends kn{modalService=p(Ne);destroyRef=p(W$1);liveForm=new qf({text:new ND(`Workspace settings`,{nonNullable:!0}),icon:new ND(`info`),loading:new ND(!1,{nonNullable:!0}),disableClose:new ND(!1,{nonNullable:!0}),showCloseButton:new ND(!0,{nonNullable:!0}),emphasize:new ND(!1,{nonNullable:!0})});iconOptions=[{label:`Info`,value:`info`},{label:`Edit`,value:`pencil`},{label:`Done`,value:`check`}];draftNote=new ND(``,{nonNullable:!0});wizardStep=E(1);saving=E(!1);menuStatus=E(`Try either menu. Actions keep this modal open.`);isSideModal=E(!1);isCenteredModal=E(!1);saveTimeout;constructor(){super(),this.destroyRef.onDestroy(()=>clearTimeout(this.saveTimeout))}onModalInit(){let e=this.modal.config().style.layout,a=this.modal.config();this.liveForm.patchValue({text:typeof a.header?.text==`string`?a.header.text:``,icon:a.header?.icon?.name??null,loading:a.header?.loading??!1,disableClose:a.disableClose,showCloseButton:a.style.showCloseButton??!0}),this.isSideModal.set(e===`right`||e===`left`),this.isCenteredModal.set(e===`center`)}applyLivePatch(){let e=this.liveForm.getRawValue();this.modal.patch({header:{text:e.text,icon:e.icon?{name:e.icon}:null,loading:e.loading},disableClose:e.disableClose,style:{showCloseButton:e.showCloseButton,wrapperStyles:e.emphasize?`--bx-modal-text: var(--bx-text-accent)`:null}})}advanceWizard(){if(!this.saving()){if(this.wizardStep()===1){this.wizardStep.set(2),this.modal.patch({header:{text:`Step 2: Review your changes`,icon:{name:`pencil`},loading:!1}});return}this.saving.set(!0),this.modal.patch({header:{text:`Saving your changes…`,loading:!0},disableClose:!0}),this.saveTimeout=setTimeout(()=>{this.saving.set(!1),this.wizardStep.set(3),this.modal.patch({header:{text:`Changes saved`,icon:{name:`check`,color:`text-success`},loading:!1},disableClose:!1})},1800)}}confirm(){this.modal?.close(`confirm`,{openedCount:this.data.openedCount+1})}selectAction(e){this.menuStatus.set(`${e} selected. The modal is still open.`)}openNested(){this.modalService.open(s$1,{data:s(r({},this.data),{title:`Nested dialog`,body:`The first nested dialog uses at least 90% material opacity. Open another to see a fully opaque surface. Closing returns to the unchanged parent.`}),header:{text:`Nested dialog`,icon:{name:`layers`,color:`accent`,bgColor:`auto`}},style:{layout:`center`,hasBackdrop:!0,animate:this.modal.config().style.animate??!0}})}static ɵfac=function(a){return new(a||s$1)};static ɵcmp=q({type:s$1,selectors:[[`app-demo-modal`]],features:[sn],decls:48,vars:17,consts:[[`dropdownActions`,``],[`contextActions`,``],[4,`appModalHeader`],[1,`demo-modal-content-class`,3,`ngClass`],[`aria-label`,`Live modal configuration`,1,`modal-patch-demo`],[`label`,`Draft note (retained across patches)`,`subscriptSizing`,`dynamic`,3,`formControl`],[1,`live-patch-form`,3,`formGroup`],[`label`,`Live heading`,`formControlName`,`text`,`subscriptSizing`,`dynamic`],[`label`,`Live icon (clear to remove)`,`formControlName`,`icon`,`subscriptSizing`,`dynamic`,3,`options`],[`label`,`Icon loading`,`formControlName`,`loading`,`subscriptSizing`,`dynamic`],[`label`,`Prevent user dismissal`,`formControlName`,`disableClose`,`subscriptSizing`,`dynamic`],[`label`,`Show close button`,`formControlName`,`showCloseButton`,`subscriptSizing`,`dynamic`],[`label`,`Accent heading appearance`,`formControlName`,`emphasize`,`subscriptSizing`,`dynamic`],[`type`,`button`,`bx-button`,``,`variant`,`tonal`,3,`click`,`disabled`],[`role`,`status`],[`type`,`button`,`bx-button`,``,3,`click`,`disabled`,`loading`],[`aria-label`,`Menus inside this modal`,1,`modal-menu-demo`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`primary`,`placement`,`bottom`,3,`bxDropdown`],[`name`,`chevron-down`,`size`,`16`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`grayscale`,1,`modal-context-target`,3,`bxContextMenu`],[`name`,`mouse-pointer-2`,`size`,`16`],[1,`menu-hint`],[`role`,`status`,1,`menu-status`],[`aria-label`,`Nested dialogs`,1,`modal-nesting-demo`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`accent`,3,`click`],[`class`,`button-container`,4,`appModalFooter`],[`label`,`Edit details`,`icon`,`pencil`,3,`action`],[`label`,`Duplicate`,`icon`,`copy`,3,`action`],[`label`,`Copy link`,`icon`,`link`,3,`action`],[`label`,`Archive`,`icon`,`archive`,3,`action`],[`label`,`Delete`,`icon`,`trash-2`,3,`action`,`danger`],[1,`button-container`],[`type`,`button`,`bx-button`,``,`variant`,`filled`,`color`,`success`,3,`click`],[`type`,`button`,`bx-button`,``,`variant`,`filled`,`color`,`danger`,3,`click`]],template:function(a,n){if(a&1&&(kC(0,Me,2,1,`div`,2),K(1,`div`,3)(2,`div`),Ne$1(3),$(),K(4,`section`,4)(5,`h3`),Ne$1(6,`Patch this open modal`),$(),K(7,`p`),Ne$1(8,`Apply changes without replacing this content. The draft note and wizard step stay intact.`),$(),K(9,`bx-input-field`,5),ZR(),$(),K(10,`form`,6)(11,`bx-input-field`,7),ZR(),$(),K(12,`bx-select`,8),ZR(),$(),K(13,`bx-checkbox`,9),ZR(),$(),K(14,`bx-checkbox`,10),ZR(),$(),K(15,`bx-checkbox`,11),ZR(),$(),K(16,`bx-checkbox`,12),ZR(),$(),K(17,`button`,13),ye$1(`click`,function(){return n.applyLivePatch()}),Ne$1(18,`Apply live patch`),$()(),K(19,`p`,14),Ne$1(20),$(),K(21,`button`,15),ye$1(`click`,function(){return n.advanceWizard()}),Ne$1(22),$()(),K(23,`section`,16)(24,`h3`),Ne$1(25,`Menus inside the modal`),$(),K(26,`button`,17),Ne$1(27,` Open actions`),Ve(28,`bx-icon`,18),$(),K(29,`button`,19),Ve(30,`bx-icon`,20),Ne$1(31,`Right-click or hold for more actions `),$(),K(32,`p`,21),Ne$1(33,` On touch screens, touch and hold for more actions. With a keyboard, focus the example and press Shift + F10. Escape closes the menu first. `),$(),K(34,`p`,22),Ne$1(35),$()(),K(36,`section`,23)(37,`h3`),Ne$1(38,`Nested dialogs`),$(),K(39,`p`),Ne$1(40,`Compare independent backdrops and increasing material opacity while the parent stays open.`),$(),K(41,`button`,24),ye$1(`click`,function(){return n.openNested()}),Ne$1(42,`Open nested dialog`),$()()(),kC(43,Se,3,0,`ng-template`,null,0,Tb)(45,we,4,1,`ng-template`,null,1,Tb)(47,ke,5,0,`div`,25)),a&2){let l=ia(44),Ce=ia(46);D(),le(`ngClass`,eO(14,_e,n.isSideModal(),n.isCenteredModal())),D(2),wr(` `,n.data.body,` `),D(6),le(`formControl`,n.draftNote),QR(),D(),le(`formGroup`,n.liveForm),D(),QR(),D(),le(`options`,n.iconOptions),QR(),D(),QR(),D(),QR(),D(),QR(),D(),QR(),D(),le(`disabled`,n.saving()),D(3),BC(`Wizard step `,n.wizardStep(),` of 3. `,n.saving()?`Saving…`:`Your draft is retained.`),D(),le(`disabled`,n.saving()||n.wizardStep()===3)(`loading`,n.saving()),D(),wr(` `,n.wizardStep()===1?`Review draft`:n.wizardStep()===2?`Save draft`:`Saved`,` `),D(4),le(`bxDropdown`,l),D(3),le(`bxContextMenu`,Ce),D(6),qe(n.menuStatus())}},dependencies:[mne,pne,cne,dne,kF,gF,SF,Ti,nr,rr,Tn,On,QO,Z,rm,gM,cM,lM,gn],styles:[`
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
}`]})};var Oe=()=>({required:`Choose a layout.`});function De(s,e){if(s&1&&(K(0,`bx-select`,22),ZR(),$()),s&2){let a=e.$implicit,n=L$1();le(`clearable`,!1)(`label`,a)(`formControlName`,a)(`options`,n.breakpointSelectOptions),QR()}}var ye=class s{modalService=p(Ne);layoutOptions=[`center`,`right`,`left`,`bottom-sheet`];layoutSelectOptions=this.layoutOptions.map(e=>({label:e.split(`-`).map(a=>a.charAt(0).toUpperCase()+a.slice(1)).join(` `),value:e}));breakpointSelectOptions=[{label:`None`,value:`none`},...this.layoutSelectOptions];breakpointKeys=Object.keys(Sr);form;activeModal=E(null);resultMessage=E(`Open a modal to preview its layout and close behavior.`);modalReadmePath=E(`projects/blocks/modal/README.md`);codeFiles=[{title:`modal-usage.ts`,path:`assets/code-snippets/modal/modal-usage.ts.txt`,language:`typescript`},{title:`modal.ts`,path:`assets/code-snippets/modal/modal.ts.txt`,language:`typescript`},{title:`modal.html`,path:`assets/code-snippets/modal/modal.html.txt`,language:`html`},{title:`modal.scss`,path:`assets/code-snippets/modal/modal.scss.txt`,language:`scss`},{title:`confirm-close.ts`,path:`assets/code-snippets/modal/confirm-close-modal.ts.txt`,language:`typescript`},{title:`confirm-close.html`,path:`assets/code-snippets/modal/confirm-close-modal.html.txt`,language:`html`},{title:`confirm-close.scss`,path:`assets/code-snippets/modal/confirm-close-modal.scss.txt`,language:`scss`},{title:`styles.scss`,path:`assets/code-snippets/modal/styles.scss.txt`,language:`scss`}];openedCount=0;constructor(){let e={layout:new ND(`right`),animate:new ND(!0),hasBackdrop:new ND(!0),showCloseButton:new ND(!0),title:new ND(`Review your changes`),headerText:new ND(`Workspace settings`),disableClose:new ND(!1),disableCloseOnBackdropClick:new ND(!1),hasConfirmCloseGuard:new ND(!0)};this.breakpointKeys.forEach(a=>{let n=`none`;a===`sm`&&(n=`bottom-sheet`),a===`xl`&&(n=`center`),e[a]=new ND(n)}),this.form=new qf(e)}openModal(){let e=this.createRequest();if(!e)return;let a=e.headerText===``?null:e.headerText,n=this.modalService.open(W,{header:a===void 0?void 0:{text:a??``,icon:{name:`info`,color:`text-info`,bgColor:`auto`}},data:{title:e.title,body:`This dialog shares the application theme and appearance settings. Confirm to apply the example, or cancel to return to the playground.`,openedCount:this.openedCount},style:{layout:e.layout,animate:e.animate,hasBackdrop:e.hasBackdrop,showCloseButton:e.showCloseButton,breakpoints:this.getBreakpointsFromRequest(e)},disableClose:e.disableClose,disableCloseOnBackdropClick:e.disableCloseOnBackdropClick,closeGuard:e.hasConfirmCloseGuard?new Dn(j,{data:`Are you sure you want to close the modal?`,header:{text:`Unsaved Changes`},style:{showCloseButton:!1}}):void 0});this.activeModal.set(n),n.afterClosed().subscribe(l=>{this.activeModal()===n&&this.activeModal.set(null),l.state===`confirm`&&l.data?(this.openedCount=l.data.openedCount,this.resultMessage.set(`Changes confirmed. This modal has been confirmed ${this.openedCount} time${this.openedCount===1?``:`s`}.`)):this.resultMessage.set(`Modal closed. No changes were applied.`)})}patchOpenModal(){let e=this.form.getRawValue();this.activeModal()?.patch({header:{text:e.headerText??``,icon:{name:`pencil`}},disableClose:e.disableClose??!1,disableCloseOnBackdropClick:e.disableCloseOnBackdropClick??!1,style:{showCloseButton:e.showCloseButton??!0}})}createRequest(){if(this.form.invalid)return;let e=this.form.getRawValue();return new L(Object.fromEntries(Object.entries(e).map(([n,l])=>[n,l===null?void 0:l])))}getBreakpointsFromRequest(e){let a={};return this.breakpointKeys.forEach(n=>{let l=e[n];l&&l!==`none`&&(a[n]=l)}),a}static ɵfac=function(a){return new(a||s)};static ɵcmp=q({type:s,selectors:[[`app-modal`]],decls:47,vars:11,consts:[[`configPanel`,``],[`pageDescription`,`Configure modal layout, responsive behavior, close guards, and content using your shared appearance.`],[1,`demo-container`],[3,`matchHeight`,`codeFiles`,`readmePath`],[`bxSurface`,``,1,`config-container`],[1,`config-header`],[1,`hint`],[`routerLink`,`/appearance`],[`role`,`status`,1,`hint`],[1,`config-form`,3,`formGroup`],[1,`form-section`],[`label`,`Default Layout`,`formControlName`,`layout`,`subscriptSizing`,`dynamic`,3,`clearable`,`errorMessages`,`options`],[`label`,`Header Text`,`formControlName`,`headerText`,`subscriptSizing`,`dynamic`],[`label`,`Title`,`formControlName`,`title`,`subscriptSizing`,`dynamic`],[1,`form-checkboxes`],[`label`,`Animate`,`formControlName`,`animate`,`subscriptSizing`,`dynamic`],[`label`,`Has Backdrop`,`formControlName`,`hasBackdrop`,`subscriptSizing`,`dynamic`],[`label`,`Show Close Button`,`formControlName`,`showCloseButton`,`subscriptSizing`,`dynamic`],[`label`,`Disable Close (Global)`,`formControlName`,`disableClose`,`tooltip`,`Prevents closing via ESC key or backdrop clicks.`,`subscriptSizing`,`dynamic`],[`label`,`Disable Backdrop Click`,`formControlName`,`disableCloseOnBackdropClick`,`subscriptSizing`,`dynamic`],[`label`,`Use Confirm Close Guard`,`formControlName`,`hasConfirmCloseGuard`,`tooltip`,`Intercepts the close event and prompts the user to confirm.`,`subscriptSizing`,`dynamic`],[1,`breakpoints-grid`],[`subscriptSizing`,`dynamic`,3,`clearable`,`label`,`formControlName`,`options`],[1,`actions`],[`type`,`button`,`bx-button`,``,`variant`,`filled`,`color`,`grayscale`,3,`click`,`disabled`],[`type`,`button`,`bx-button`,``,`variant`,`tonal`,3,`click`,`disabled`]],template:function(a,n){if(a&1&&(K(0,`bx-page-container`,1)(1,`div`,2),Ve(2,`app-component-info`,3),K(3,`div`,4,0)(5,`div`,5),Ne$1(6,`Configurator`),$(),K(7,`p`,6),Ne$1(8,` Compare the restrained centered entrance with larger side and bottom-sheet motion. Close during entrance, resize, and switch accessibility settings to inspect interruption. On a bottom sheet, drag the handle slowly, flick, pause before release, or cancel with Escape. Confirm-close guards still apply. `),$(),K(9,`p`,6),Ne$1(10,`Uses your shared appearance. `),K(11,`a`,7),Ne$1(12,`Adjust appearance settings`),$()(),K(13,`p`,8),Ne$1(14),$(),K(15,`form`,9)(16,`div`,10)(17,`h3`),Ne$1(18,`General Style`),$(),K(19,`bx-select`,11),ZR(),$(),K(20,`bx-input-field`,12),ZR(),$(),K(21,`bx-input-field`,13),ZR(),$()(),K(22,`div`,10)(23,`h3`),Ne$1(24,`Behavior & Toggles`),$(),K(25,`div`,14)(26,`bx-checkbox`,15),ZR(),$(),K(27,`bx-checkbox`,16),ZR(),$(),K(28,`bx-checkbox`,17),ZR(),$(),K(29,`bx-checkbox`,18),ZR(),$(),K(30,`bx-checkbox`,19),ZR(),$(),K(31,`bx-checkbox`,20),ZR(),$()()(),K(32,`div`,10)(33,`h3`),Ne$1(34,`Responsive Breakpoints`),$(),K(35,`p`,6),Ne$1(36,`Select 'none' to ignore that breakpoint.`),$(),K(37,`div`,21),Hn(38,De,1,4,`bx-select`,22,ra),$()()(),K(40,`div`,23)(41,`button`,24),ye$1(`click`,function(){return n.openModal()}),Ne$1(42,` Open Modal with live controls `),$(),K(43,`button`,25),ye$1(`click`,function(){return n.patchOpenModal()}),Ne$1(44,` Apply heading and dismissal to open modal `),$()(),K(45,`p`,6),Ne$1(46,`Layout and animation apply when opening. The dialog contains live controls and a wizard that use ModalRef.patch().`),$()()()()),a&2){let l=ia(4);D(2),le(`matchHeight`,l)(`codeFiles`,n.codeFiles)(`readmePath`,n.modalReadmePath()),D(12),qe(n.resultMessage()),D(),le(`formGroup`,n.form),D(4),le(`clearable`,!1)(`errorMessages`,QA(10,Oe))(`options`,n.layoutSelectOptions),QR(),D(),QR(),D(),QR(),D(5),QR(),D(),QR(),D(),QR(),D(),QR(),D(),QR(),D(),QR(),D(7),qn(n.breakpointKeys),D(3),le(`disabled`,n.form.invalid),D(2),le(`disabled`,!n.activeModal()||n.form.invalid)}},dependencies:[IM,Vt,$p,CS,mne,pne,cne,dne,gF,SF,C,Z,nr,Ti,rr],styles:[`
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
}`]})};export{ye as Modal};