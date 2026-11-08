import{t as D}from"./chunk-BJCSLbY4.js";import"./chunk-BpRItq3P.js";import{$ as cn,S as oo,Z as Ce,et as mn,nt as sn,q as Z,s as Ti,tt as pn,x as no}from"./main-HW2XYL5W.js";import{$r as kb,Ai as qR,Ar as gr,Bt as P,Ci as p2,Cr as es,D as E,Da as yo,Et as NS,G as H1,Gr as je,Kr as jf,Mr as hS,N as Fe,Na as zR,Oa as yr,Oi as q,Or as g_,Pa as zn,Si as p,Sn as Ute,Tn as Vte,Ur as jO,Vi as sn$1,Vr as j1,W as H,Xi as u2,Y as Hte,Yr as jte,Zr as k,_a as xe,_i as o2,aa as vn,b as Ck,br as eh,gi as ns,hn as U,ka as z,ma as xM,p as Bt,pi as mr,q as Hp,qr as jn,rt as Jk,u as At,un as Te,vr as eM,yi as oe,zi as sM,zt as Ot}from"./chunk-Dt37D5SH.js";import{n as s,t as r}from"./chunk-C9yOwMO6.js";var L=class{layout=`right`;animate=!0;hasBackdrop=!0;showCloseButton=!0;title=``;headerText=``;disableClose=!1;disableCloseOnBackdropClick=!1;hasConfirmCloseGuard=!0;constructor(e){Object.assign(this,e)}};function ve(s,e){if(s&1){let i=gr();U(0,`div`,1)(1,`button`,2),xe(`click`,function(){At(i);let l=P();return Ot(l.confirm())}),Te(2,`Confirm`),H(),U(3,`button`,3),xe(`click`,function(){At(i);let l=P();return Ot(l.close())}),Te(4,`Cancel`),H()()}}var j=class s extends cn{confirm(){this.modal?.close(`confirm`)}static ɵfac=(()=>{let e;return function(n){return(e||(e=yo(s)))(n||s)}})();static ɵcmp=z({type:s,selectors:[[`app-confirm-close`]],features:[sn$1],decls:3,vars:1,consts:[[`class`,`button-container`,4,`appModalFooter`],[1,`button-container`],[`type`,`button`,`bx-button`,``,`variant`,`filled`,`color`,`success`,3,`click`],[`type`,`button`,`bx-button`,``,`variant`,`filled`,`color`,`danger`,3,`click`]],template:function(i,n){i&1&&(U(0,`div`),Te(1),H(),hS(2,ve,5,0,`div`,0)),i&2&&(k(),mr(` `,n.data,`
`))},dependencies:[mn,Z],styles:[`
.button-container[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 1rem;
}
.button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {
  cursor: pointer;
}`]})};var _e=(s,e)=>({"side-modal":s,"center-modal":e});function Me(s,e){if(s&1&&(U(0,`div`),Te(1),H()),s&2){let i=P();k(),mr(` `,i.data.title,`
`)}}function Se(s,e){if(s&1){let i=gr();U(0,`bx-menu`)(1,`bx-menu-item`,26),xe(`action`,function(){At(i);let l=P();return Ot(l.selectAction(`Edit details`))}),H(),U(2,`bx-menu-item`,27),xe(`action`,function(){At(i);let l=P();return Ot(l.selectAction(`Duplicate`))}),H()()}}function we(s,e){if(s&1){let i=gr();U(0,`bx-menu`)(1,`bx-menu-item`,28),xe(`action`,function(){At(i);let l=P();return Ot(l.selectAction(`Copy link`))}),H(),U(2,`bx-menu-item`,29),xe(`action`,function(){At(i);let l=P();return Ot(l.selectAction(`Archive`))}),H(),U(3,`bx-menu-item`,30),xe(`action`,function(){At(i);let l=P();return Ot(l.selectAction(`Delete`))}),H()()}s&2&&(k(3),oe(`danger`,!0))}function ke(s,e){if(s&1){let i=gr();U(0,`div`,31)(1,`button`,32),xe(`click`,function(){At(i);let l=P();return Ot(l.confirm())}),Te(2,`Confirm`),H(),U(3,`button`,33),xe(`click`,function(){At(i);let l=P();return Ot(l.close())}),Te(4,`Cancel`),H()()}}var W=class s$1 extends cn{modalService=p(Ce);destroyRef=p(q);liveForm=new jf({text:new Ck(`Workspace settings`,{nonNullable:!0}),icon:new Ck(`info`),loading:new Ck(!1,{nonNullable:!0}),disableClose:new Ck(!1,{nonNullable:!0}),showCloseButton:new Ck(!0,{nonNullable:!0}),emphasize:new Ck(!1,{nonNullable:!0})});iconOptions=[{label:`Info`,value:`info`},{label:`Edit`,value:`pencil`},{label:`Done`,value:`check`}];draftNote=new Ck(``,{nonNullable:!0});wizardStep=E(1);saving=E(!1);menuStatus=E(`Try either menu. Actions keep this modal open.`);isSideModal=E(!1);isCenteredModal=E(!1);saveTimeout;constructor(){super(),this.destroyRef.onDestroy(()=>clearTimeout(this.saveTimeout))}onModalInit(){let e=this.modal.config().style.layout,i=this.modal.config();this.liveForm.patchValue({text:typeof i.header?.text==`string`?i.header.text:``,icon:i.header?.icon?.name??null,loading:i.header?.loading??!1,disableClose:i.disableClose,showCloseButton:i.style.showCloseButton??!0}),this.isSideModal.set(e===`right`||e===`left`),this.isCenteredModal.set(e===`center`)}applyLivePatch(){let e=this.liveForm.getRawValue();this.modal.patch({header:{text:e.text,icon:e.icon?{name:e.icon}:null,loading:e.loading},disableClose:e.disableClose,style:{showCloseButton:e.showCloseButton,wrapperStyles:e.emphasize?`--bx-modal-text: var(--bx-text-accent)`:null}})}advanceWizard(){if(!this.saving()){if(this.wizardStep()===1){this.wizardStep.set(2),this.modal.patch({header:{text:`Step 2: Review your changes`,icon:{name:`pencil`},loading:!1}});return}this.saving.set(!0),this.modal.patch({header:{text:`Saving your changes…`,loading:!0},disableClose:!0}),this.saveTimeout=setTimeout(()=>{this.saving.set(!1),this.wizardStep.set(3),this.modal.patch({header:{text:`Changes saved`,icon:{name:`check`,color:`text-success`},loading:!1},disableClose:!1})},1800)}}confirm(){this.modal?.close(`confirm`,{openedCount:this.data.openedCount+1})}selectAction(e){this.menuStatus.set(`${e} selected. The modal is still open.`)}openNested(){this.modalService.open(s$1,{data:s(r({},this.data),{title:`Nested dialog`,body:`The first nested dialog uses at least 90% material opacity. Open another to see a fully opaque surface. Closing returns to the unchanged parent.`}),header:{text:`Nested dialog`,icon:{name:`layers`,color:`accent`,bgColor:`auto`}},style:{layout:`center`,hasBackdrop:!0,animate:this.modal.config().style.animate??!0}})}static ɵfac=function(i){return new(i||s$1)};static ɵcmp=z({type:s$1,selectors:[[`app-demo-modal`]],features:[sn$1],decls:48,vars:17,consts:[[`dropdownActions`,``],[`contextActions`,``],[4,`appModalHeader`],[1,`demo-modal-content-class`,3,`ngClass`],[`aria-label`,`Live modal configuration`,1,`modal-patch-demo`],[`label`,`Draft note (retained across patches)`,`subscriptSizing`,`dynamic`,3,`formControl`],[1,`live-patch-form`,3,`formGroup`],[`label`,`Live heading`,`formControlName`,`text`,`subscriptSizing`,`dynamic`],[`label`,`Live icon (clear to remove)`,`formControlName`,`icon`,`subscriptSizing`,`dynamic`,3,`options`],[`label`,`Icon loading`,`formControlName`,`loading`,`subscriptSizing`,`dynamic`],[`label`,`Prevent user dismissal`,`formControlName`,`disableClose`,`subscriptSizing`,`dynamic`],[`label`,`Show close button`,`formControlName`,`showCloseButton`,`subscriptSizing`,`dynamic`],[`label`,`Accent heading appearance`,`formControlName`,`emphasize`,`subscriptSizing`,`dynamic`],[`type`,`button`,`bx-button`,``,`variant`,`tonal`,3,`click`,`disabled`],[`role`,`status`],[`type`,`button`,`bx-button`,``,3,`click`,`disabled`,`loading`],[`aria-label`,`Menus inside this modal`,1,`modal-menu-demo`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`primary`,`placement`,`bottom`,3,`bxDropdown`],[`name`,`chevron-down`,`size`,`16`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`grayscale`,1,`modal-context-target`,3,`bxContextMenu`],[`name`,`mouse-pointer-2`,`size`,`16`],[1,`menu-hint`],[`role`,`status`,1,`menu-status`],[`aria-label`,`Nested dialogs`,1,`modal-nesting-demo`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`accent`,3,`click`],[`class`,`button-container`,4,`appModalFooter`],[`label`,`Edit details`,`icon`,`pencil`,3,`action`],[`label`,`Duplicate`,`icon`,`copy`,3,`action`],[`label`,`Copy link`,`icon`,`link`,3,`action`],[`label`,`Archive`,`icon`,`archive`,3,`action`],[`label`,`Delete`,`icon`,`trash-2`,3,`action`,`danger`],[1,`button-container`],[`type`,`button`,`bx-button`,``,`variant`,`filled`,`color`,`success`,3,`click`],[`type`,`button`,`bx-button`,``,`variant`,`filled`,`color`,`danger`,3,`click`]],template:function(i,n){if(i&1&&(hS(0,Me,2,1,`div`,2),U(1,`div`,3)(2,`div`),Te(3),H(),U(4,`section`,4)(5,`h3`),Te(6,`Patch this open modal`),H(),U(7,`p`),Te(8,`Apply changes without replacing this content. The draft note and wizard step stay intact.`),H(),U(9,`bx-input-field`,5),zR(),H(),U(10,`form`,6)(11,`bx-input-field`,7),zR(),H(),U(12,`bx-select`,8),zR(),H(),U(13,`bx-checkbox`,9),zR(),H(),U(14,`bx-checkbox`,10),zR(),H(),U(15,`bx-checkbox`,11),zR(),H(),U(16,`bx-checkbox`,12),zR(),H(),U(17,`button`,13),xe(`click`,function(){return n.applyLivePatch()}),Te(18,`Apply live patch`),H()(),U(19,`p`,14),Te(20),H(),U(21,`button`,15),xe(`click`,function(){return n.advanceWizard()}),Te(22),H()(),U(23,`section`,16)(24,`h3`),Te(25,`Menus inside the modal`),H(),U(26,`button`,17),Te(27,` Open actions`),Fe(28,`bx-icon`,18),H(),U(29,`button`,19),Fe(30,`bx-icon`,20),Te(31,`Right-click or hold for more actions `),H(),U(32,`p`,21),Te(33,` On touch screens, touch and hold for more actions. With a keyboard, focus the example and press Shift + F10. Escape closes the menu first. `),H(),U(34,`p`,22),Te(35),H()(),U(36,`section`,23)(37,`h3`),Te(38,`Nested dialogs`),H(),U(39,`p`),Te(40,`Compare independent backdrops and increasing material opacity while the parent stays open.`),H(),U(41,`button`,24),xe(`click`,function(){return n.openNested()}),Te(42,`Open nested dialog`),H()()(),hS(43,Se,3,0,`ng-template`,null,0,kb)(45,we,4,1,`ng-template`,null,1,kb)(47,ke,5,0,`div`,25)),i&2){let l=ns(44),Ce=ns(46);k(),oe(`ngClass`,H1(14,_e,n.isSideModal(),n.isCenteredModal())),k(2),mr(` `,n.data.body,` `),k(6),oe(`formControl`,n.draftNote),qR(),k(),oe(`formGroup`,n.liveForm),k(),qR(),k(),oe(`options`,n.iconOptions),qR(),k(),qR(),k(),qR(),k(),qR(),k(),qR(),k(),oe(`disabled`,n.saving()),k(3),NS(`Wizard step `,n.wizardStep(),` of 3. `,n.saving()?`Saving…`:`Your draft is retained.`),k(),oe(`disabled`,n.saving()||n.wizardStep()===3)(`loading`,n.saving()),k(),mr(` `,n.wizardStep()===1?`Review draft`:n.wizardStep()===2?`Save draft`:`Saved`,` `),k(4),oe(`bxDropdown`,l),k(3),oe(`bxContextMenu`,Ce),k(6),je(n.menuStatus())}},dependencies:[Ute,Hte,Vte,jte,u2,o2,p2,Ti,no,oo,pn,mn,jO,Z,eh,sM,eM,Jk,vn],styles:[`
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
}`]})};var Oe=()=>({required:`Choose a layout.`});function De(s,e){if(s&1&&(U(0,`bx-select`,22),zR(),H()),s&2){let i=e.$implicit,n=P();oe(`clearable`,!1)(`label`,i)(`formControlName`,i)(`options`,n.breakpointSelectOptions),qR()}}var ye=class s{modalService=p(Ce);layoutOptions=[`center`,`right`,`left`,`bottom-sheet`];layoutSelectOptions=this.layoutOptions.map(e=>({label:e.split(`-`).map(i=>i.charAt(0).toUpperCase()+i.slice(1)).join(` `),value:e}));breakpointSelectOptions=[{label:`None`,value:`none`},...this.layoutSelectOptions];breakpointKeys=Object.keys(yr);form;activeModal=E(null);resultMessage=E(`Open a modal to preview its layout and close behavior.`);modalReadmePath=E(`projects/blocks/modal/README.md`);codeFiles=[{title:`modal-usage.ts`,path:`assets/code-snippets/modal/modal-usage.ts.txt`,language:`typescript`},{title:`modal.ts`,path:`assets/code-snippets/modal/modal.ts.txt`,language:`typescript`},{title:`modal.html`,path:`assets/code-snippets/modal/modal.html.txt`,language:`html`},{title:`modal.scss`,path:`assets/code-snippets/modal/modal.scss.txt`,language:`scss`},{title:`confirm-close.ts`,path:`assets/code-snippets/modal/confirm-close-modal.ts.txt`,language:`typescript`},{title:`confirm-close.html`,path:`assets/code-snippets/modal/confirm-close-modal.html.txt`,language:`html`},{title:`confirm-close.scss`,path:`assets/code-snippets/modal/confirm-close-modal.scss.txt`,language:`scss`},{title:`styles.scss`,path:`assets/code-snippets/modal/styles.scss.txt`,language:`scss`}];openedCount=0;constructor(){let e={layout:new Ck(`right`),animate:new Ck(!0),hasBackdrop:new Ck(!0),showCloseButton:new Ck(!0),title:new Ck(`Review your changes`),headerText:new Ck(`Workspace settings`),disableClose:new Ck(!1),disableCloseOnBackdropClick:new Ck(!1),hasConfirmCloseGuard:new Ck(!0)};this.breakpointKeys.forEach(i=>{let n=`none`;i===`sm`&&(n=`bottom-sheet`),i===`xl`&&(n=`center`),e[i]=new Ck(n)}),this.form=new jf(e)}openModal(){let e=this.createRequest();if(!e)return;let i=e.headerText===``?null:e.headerText,n=this.modalService.open(W,{header:i===void 0?void 0:{text:i??``,icon:{name:`info`,color:`text-info`,bgColor:`auto`}},data:{title:e.title,body:`This dialog shares the application theme and appearance settings. Confirm to apply the example, or cancel to return to the playground.`,openedCount:this.openedCount},style:{layout:e.layout,animate:e.animate,hasBackdrop:e.hasBackdrop,showCloseButton:e.showCloseButton,breakpoints:this.getBreakpointsFromRequest(e)},disableClose:e.disableClose,disableCloseOnBackdropClick:e.disableCloseOnBackdropClick,closeGuard:e.hasConfirmCloseGuard?new sn(j,{data:`Are you sure you want to close the modal?`,header:{text:`Unsaved Changes`},style:{showCloseButton:!1}}):void 0});this.activeModal.set(n),n.afterClosed().subscribe(l=>{this.activeModal()===n&&this.activeModal.set(null),l.state===`confirm`&&l.data?(this.openedCount=l.data.openedCount,this.resultMessage.set(`Changes confirmed. This modal has been confirmed ${this.openedCount} time${this.openedCount===1?``:`s`}.`)):this.resultMessage.set(`Modal closed. No changes were applied.`)})}patchOpenModal(){let e=this.form.getRawValue();this.activeModal()?.patch({header:{text:e.headerText??``,icon:{name:`pencil`}},disableClose:e.disableClose??!1,disableCloseOnBackdropClick:e.disableCloseOnBackdropClick??!1,style:{showCloseButton:e.showCloseButton??!0}})}createRequest(){if(this.form.invalid)return;let e=this.form.getRawValue();return new L(Object.fromEntries(Object.entries(e).map(([n,l])=>[n,l===null?void 0:l])))}getBreakpointsFromRequest(e){let i={};return this.breakpointKeys.forEach(n=>{let l=e[n];l&&l!==`none`&&(i[n]=l)}),i}static ɵfac=function(i){return new(i||s)};static ɵcmp=z({type:s,selectors:[[`app-modal`]],decls:47,vars:11,consts:[[`configPanel`,``],[`pageDescription`,`Configure modal layout, responsive behavior, close guards, and content using your shared appearance.`],[1,`demo-container`],[3,`matchHeight`,`codeFiles`,`readmePath`],[`bxSurface`,``,1,`config-container`],[1,`config-header`],[1,`hint`],[`routerLink`,`/appearance`],[`role`,`status`,1,`hint`],[1,`config-form`,3,`formGroup`],[1,`form-section`],[`label`,`Default Layout`,`formControlName`,`layout`,`subscriptSizing`,`dynamic`,3,`clearable`,`errorMessages`,`options`],[`label`,`Header Text`,`formControlName`,`headerText`,`subscriptSizing`,`dynamic`],[`label`,`Title`,`formControlName`,`title`,`subscriptSizing`,`dynamic`],[1,`form-checkboxes`],[`label`,`Animate`,`formControlName`,`animate`,`subscriptSizing`,`dynamic`],[`label`,`Has Backdrop`,`formControlName`,`hasBackdrop`,`subscriptSizing`,`dynamic`],[`label`,`Show Close Button`,`formControlName`,`showCloseButton`,`subscriptSizing`,`dynamic`],[`label`,`Disable Close (Global)`,`formControlName`,`disableClose`,`tooltip`,`Prevents closing via ESC key or backdrop clicks.`,`subscriptSizing`,`dynamic`],[`label`,`Disable Backdrop Click`,`formControlName`,`disableCloseOnBackdropClick`,`subscriptSizing`,`dynamic`],[`label`,`Use Confirm Close Guard`,`formControlName`,`hasConfirmCloseGuard`,`tooltip`,`Intercepts the close event and prompts the user to confirm.`,`subscriptSizing`,`dynamic`],[1,`breakpoints-grid`],[`subscriptSizing`,`dynamic`,3,`clearable`,`label`,`formControlName`,`options`],[1,`actions`],[`type`,`button`,`bx-button`,``,`variant`,`filled`,`color`,`grayscale`,3,`click`,`disabled`],[`type`,`button`,`bx-button`,``,`variant`,`tonal`,3,`click`,`disabled`]],template:function(i,n){if(i&1&&(U(0,`bx-page-container`,1)(1,`div`,2),Fe(2,`app-component-info`,3),U(3,`div`,4,0)(5,`div`,5),Te(6,`Configurator`),H(),U(7,`p`,6),Te(8,` Compare the restrained centered entrance with larger side and bottom-sheet motion. Close during entrance, resize, and switch accessibility settings to inspect interruption. `),H(),U(9,`p`,6),Te(10,`Uses your shared appearance. `),U(11,`a`,7),Te(12,`Adjust appearance settings`),H()(),U(13,`p`,8),Te(14),H(),U(15,`form`,9)(16,`div`,10)(17,`h3`),Te(18,`General Style`),H(),U(19,`bx-select`,11),zR(),H(),U(20,`bx-input-field`,12),zR(),H(),U(21,`bx-input-field`,13),zR(),H()(),U(22,`div`,10)(23,`h3`),Te(24,`Behavior & Toggles`),H(),U(25,`div`,14)(26,`bx-checkbox`,15),zR(),H(),U(27,`bx-checkbox`,16),zR(),H(),U(28,`bx-checkbox`,17),zR(),H(),U(29,`bx-checkbox`,18),zR(),H(),U(30,`bx-checkbox`,19),zR(),H(),U(31,`bx-checkbox`,20),zR(),H()()(),U(32,`div`,10)(33,`h3`),Te(34,`Responsive Breakpoints`),H(),U(35,`p`,6),Te(36,`Select 'none' to ignore that breakpoint.`),H(),U(37,`div`,21),jn(38,De,1,4,`bx-select`,22,es),H()()(),U(40,`div`,23)(41,`button`,24),xe(`click`,function(){return n.openModal()}),Te(42,` Open Modal with live controls `),H(),U(43,`button`,25),xe(`click`,function(){return n.patchOpenModal()}),Te(44,` Apply heading and dismissal to open modal `),H()(),U(45,`p`,6),Te(46,`Layout and animation apply when opening. The dialog contains live controls and a wizard that use ModalRef.patch().`),H()()()()),i&2){let l=ns(4);k(2),oe(`matchHeight`,l)(`codeFiles`,n.codeFiles)(`readmePath`,n.modalReadmePath()),k(12),je(n.resultMessage()),k(),oe(`formGroup`,n.form),k(4),oe(`clearable`,!1)(`errorMessages`,j1(10,Oe))(`options`,n.layoutSelectOptions),qR(),k(),qR(),k(),qR(),k(5),qR(),k(),qR(),k(),qR(),k(),qR(),k(),qR(),k(),qR(),k(7),zn(n.breakpointKeys),k(3),oe(`disabled`,n.form.invalid),k(2),oe(`disabled`,!n.activeModal()||n.form.invalid)}},dependencies:[xM,Bt,Hp,g_,Ute,Hte,Vte,jte,o2,p2,D,Z,no,Ti,oo],styles:[`
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
}`]})};export{ye as Modal};