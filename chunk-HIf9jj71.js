import{t as E}from"./chunk-BSmkEsc0.js";import"./chunk-BkzVm22i.js";import{$ as Nn,Z as Dn,et as Se$1,nt as wn,q as Z,s as Ti,tt as kn,w as rr,x as nr}from"./main-6HCYTG5A.js";import{$ as Hn,$t as Qte,Bi as qf,Bn as Xte,D as Cr,Di as oa,Dn as WR,E as Co,Er as ene,G as Ft,Ki as rm,Ma as yr,Mi as p,N as E$1,Pt as OC,Q as He,Ri as q,Ta as xr,Ti as oM,Ui as rM,Vi as qn,X as H,Xn as _D,_i as na,_n as UA,ca as uM,ci as le,di as mF,fn as Te,gn as U,i as $R,in as SM,ja as ye$1,jr as gF,ma as vS,oi as lF,p as At,q as GA,qi as rn,rt as Ib,s as $p,t as $,ur as bC,v as Be,vn as UO,xi as nne,y as C,yt as L$1,zr as hn,zt as Ot}from"./chunk-cpWQWn_p.js";import{n as s,t as r}from"./chunk-C9yOwMO6.js";var L=class{layout=`right`;animate=!0;hasBackdrop=!0;showCloseButton=!0;title=``;headerText=``;disableClose=!1;disableCloseOnBackdropClick=!1;hasConfirmCloseGuard=!0;constructor(e){Object.assign(this,e)}};function ve(s,e){if(s&1){let a=xr();$(0,`div`,1)(1,`button`,2),ye$1(`click`,function(){At(a);let l=L$1();return Ot(l.confirm())}),Te(2,`Confirm`),q(),$(3,`button`,3),ye$1(`click`,function(){At(a);let l=L$1();return Ot(l.close())}),Te(4,`Cancel`),q()()}}var j=class s extends wn{confirm(){this.modal?.close(`confirm`)}static ɵfac=(()=>{let e;return function(n){return(e||(e=Co(s)))(n||s)}})();static ɵcmp=H({type:s,selectors:[[`app-confirm-close`]],features:[rn],decls:3,vars:1,consts:[[`class`,`button-container`,4,`appModalFooter`],[1,`button-container`],[`type`,`button`,`bx-button`,``,`variant`,`filled`,`color`,`success`,3,`click`],[`type`,`button`,`bx-button`,``,`variant`,`filled`,`color`,`danger`,3,`click`]],template:function(a,n){a&1&&($(0,`div`),Te(1),q(),bC(2,ve,5,0,`div`,0)),a&2&&(E$1(),yr(` `,n.data,`
`))},dependencies:[Dn,Z],styles:[`
.button-container[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 1rem;
}
.button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {
  cursor: pointer;
}`]})};var _e=(s,e)=>({"side-modal":s,"center-modal":e});function Me(s,e){if(s&1&&($(0,`div`),Te(1),q()),s&2){let a=L$1();E$1(),yr(` `,a.data.title,`
`)}}function Se(s,e){if(s&1){let a=xr();$(0,`bx-menu`)(1,`bx-menu-item`,26),ye$1(`action`,function(){At(a);let l=L$1();return Ot(l.selectAction(`Edit details`))}),q(),$(2,`bx-menu-item`,27),ye$1(`action`,function(){At(a);let l=L$1();return Ot(l.selectAction(`Duplicate`))}),q()()}}function we(s,e){if(s&1){let a=xr();$(0,`bx-menu`)(1,`bx-menu-item`,28),ye$1(`action`,function(){At(a);let l=L$1();return Ot(l.selectAction(`Copy link`))}),q(),$(2,`bx-menu-item`,29),ye$1(`action`,function(){At(a);let l=L$1();return Ot(l.selectAction(`Archive`))}),q(),$(3,`bx-menu-item`,30),ye$1(`action`,function(){At(a);let l=L$1();return Ot(l.selectAction(`Delete`))}),q()()}s&2&&(E$1(3),le(`danger`,!0))}function ke(s,e){if(s&1){let a=xr();$(0,`div`,31)(1,`button`,32),ye$1(`click`,function(){At(a);let l=L$1();return Ot(l.confirm())}),Te(2,`Confirm`),q(),$(3,`button`,33),ye$1(`click`,function(){At(a);let l=L$1();return Ot(l.close())}),Te(4,`Cancel`),q()()}}var W=class s$1 extends wn{modalService=p(Se$1);destroyRef=p(U);liveForm=new qf({text:new _D(`Workspace settings`,{nonNullable:!0}),icon:new _D(`info`),loading:new _D(!1,{nonNullable:!0}),disableClose:new _D(!1,{nonNullable:!0}),showCloseButton:new _D(!0,{nonNullable:!0}),emphasize:new _D(!1,{nonNullable:!0})});iconOptions=[{label:`Info`,value:`info`},{label:`Edit`,value:`pencil`},{label:`Done`,value:`check`}];draftNote=new _D(``,{nonNullable:!0});wizardStep=C(1);saving=C(!1);menuStatus=C(`Try either menu. Actions keep this modal open.`);isSideModal=C(!1);isCenteredModal=C(!1);saveTimeout;constructor(){super(),this.destroyRef.onDestroy(()=>clearTimeout(this.saveTimeout))}onModalInit(){let e=this.modal.config().style.layout,a=this.modal.config();this.liveForm.patchValue({text:typeof a.header?.text==`string`?a.header.text:``,icon:a.header?.icon?.name??null,loading:a.header?.loading??!1,disableClose:a.disableClose,showCloseButton:a.style.showCloseButton??!0}),this.isSideModal.set(e===`right`||e===`left`),this.isCenteredModal.set(e===`center`)}applyLivePatch(){let e=this.liveForm.getRawValue();this.modal.patch({header:{text:e.text,icon:e.icon?{name:e.icon}:null,loading:e.loading},disableClose:e.disableClose,style:{showCloseButton:e.showCloseButton,wrapperStyles:e.emphasize?`--bx-modal-text: var(--bx-text-accent)`:null}})}advanceWizard(){if(!this.saving()){if(this.wizardStep()===1){this.wizardStep.set(2),this.modal.patch({header:{text:`Step 2: Review your changes`,icon:{name:`pencil`},loading:!1}});return}this.saving.set(!0),this.modal.patch({header:{text:`Saving your changes…`,loading:!0},disableClose:!0}),this.saveTimeout=setTimeout(()=>{this.saving.set(!1),this.wizardStep.set(3),this.modal.patch({header:{text:`Changes saved`,icon:{name:`check`,color:`text-success`},loading:!1},disableClose:!1})},1800)}}confirm(){this.modal?.close(`confirm`,{openedCount:this.data.openedCount+1})}selectAction(e){this.menuStatus.set(`${e} selected. The modal is still open.`)}openNested(){this.modalService.open(s$1,{data:s(r({},this.data),{title:`Nested dialog`,body:`The first nested dialog uses at least 90% material opacity. Open another to see a fully opaque surface. Closing returns to the unchanged parent.`}),header:{text:`Nested dialog`,icon:{name:`layers`,color:`accent`,bgColor:`auto`}},style:{layout:`center`,hasBackdrop:!0,animate:this.modal.config().style.animate??!0}})}static ɵfac=function(a){return new(a||s$1)};static ɵcmp=H({type:s$1,selectors:[[`app-demo-modal`]],features:[rn],decls:48,vars:17,consts:[[`dropdownActions`,``],[`contextActions`,``],[4,`appModalHeader`],[1,`demo-modal-content-class`,3,`ngClass`],[`aria-label`,`Live modal configuration`,1,`modal-patch-demo`],[`label`,`Draft note (retained across patches)`,`subscriptSizing`,`dynamic`,3,`formControl`],[1,`live-patch-form`,3,`formGroup`],[`label`,`Live heading`,`formControlName`,`text`,`subscriptSizing`,`dynamic`],[`label`,`Live icon (clear to remove)`,`formControlName`,`icon`,`subscriptSizing`,`dynamic`,3,`options`],[`label`,`Icon loading`,`formControlName`,`loading`,`subscriptSizing`,`dynamic`],[`label`,`Prevent user dismissal`,`formControlName`,`disableClose`,`subscriptSizing`,`dynamic`],[`label`,`Show close button`,`formControlName`,`showCloseButton`,`subscriptSizing`,`dynamic`],[`label`,`Accent heading appearance`,`formControlName`,`emphasize`,`subscriptSizing`,`dynamic`],[`type`,`button`,`bx-button`,``,`variant`,`tonal`,3,`click`,`disabled`],[`role`,`status`],[`type`,`button`,`bx-button`,``,3,`click`,`disabled`,`loading`],[`aria-label`,`Menus inside this modal`,1,`modal-menu-demo`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`primary`,`placement`,`bottom`,3,`bxDropdown`],[`name`,`chevron-down`,`size`,`16`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`grayscale`,1,`modal-context-target`,3,`bxContextMenu`],[`name`,`mouse-pointer-2`,`size`,`16`],[1,`menu-hint`],[`role`,`status`,1,`menu-status`],[`aria-label`,`Nested dialogs`,1,`modal-nesting-demo`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`accent`,3,`click`],[`class`,`button-container`,4,`appModalFooter`],[`label`,`Edit details`,`icon`,`pencil`,3,`action`],[`label`,`Duplicate`,`icon`,`copy`,3,`action`],[`label`,`Copy link`,`icon`,`link`,3,`action`],[`label`,`Archive`,`icon`,`archive`,3,`action`],[`label`,`Delete`,`icon`,`trash-2`,3,`action`,`danger`],[1,`button-container`],[`type`,`button`,`bx-button`,``,`variant`,`filled`,`color`,`success`,3,`click`],[`type`,`button`,`bx-button`,``,`variant`,`filled`,`color`,`danger`,3,`click`]],template:function(a,n){if(a&1&&(bC(0,Me,2,1,`div`,2),$(1,`div`,3)(2,`div`),Te(3),q(),$(4,`section`,4)(5,`h3`),Te(6,`Patch this open modal`),q(),$(7,`p`),Te(8,`Apply changes without replacing this content. The draft note and wizard step stay intact.`),q(),$(9,`bx-input-field`,5),$R(),q(),$(10,`form`,6)(11,`bx-input-field`,7),$R(),q(),$(12,`bx-select`,8),$R(),q(),$(13,`bx-checkbox`,9),$R(),q(),$(14,`bx-checkbox`,10),$R(),q(),$(15,`bx-checkbox`,11),$R(),q(),$(16,`bx-checkbox`,12),$R(),q(),$(17,`button`,13),ye$1(`click`,function(){return n.applyLivePatch()}),Te(18,`Apply live patch`),q()(),$(19,`p`,14),Te(20),q(),$(21,`button`,15),ye$1(`click`,function(){return n.advanceWizard()}),Te(22),q()(),$(23,`section`,16)(24,`h3`),Te(25,`Menus inside the modal`),q(),$(26,`button`,17),Te(27,` Open actions`),Be(28,`bx-icon`,18),q(),$(29,`button`,19),Be(30,`bx-icon`,20),Te(31,`Right-click or hold for more actions `),q(),$(32,`p`,21),Te(33,` On touch screens, touch and hold for more actions. With a keyboard, focus the example and press Shift + F10. Escape closes the menu first. `),q(),$(34,`p`,22),Te(35),q()(),$(36,`section`,23)(37,`h3`),Te(38,`Nested dialogs`),q(),$(39,`p`),Te(40,`Compare independent backdrops and increasing material opacity while the parent stays open.`),q(),$(41,`button`,24),ye$1(`click`,function(){return n.openNested()}),Te(42,`Open nested dialog`),q()()(),bC(43,Se,3,0,`ng-template`,null,0,Ib)(45,we,4,1,`ng-template`,null,1,Ib)(47,ke,5,0,`div`,25)),a&2){let l=oa(44),Ce=oa(46);E$1(),le(`ngClass`,GA(14,_e,n.isSideModal(),n.isCenteredModal())),E$1(2),yr(` `,n.data.body,` `),E$1(6),le(`formControl`,n.draftNote),WR(),E$1(),le(`formGroup`,n.liveForm),E$1(),WR(),E$1(),le(`options`,n.iconOptions),WR(),E$1(),WR(),E$1(),WR(),E$1(),WR(),E$1(),WR(),E$1(),le(`disabled`,n.saving()),E$1(3),OC(`Wizard step `,n.wizardStep(),` of 3. `,n.saving()?`Saving…`:`Your draft is retained.`),E$1(),le(`disabled`,n.saving()||n.wizardStep()===3)(`loading`,n.saving()),E$1(),yr(` `,n.wizardStep()===1?`Review draft`:n.wizardStep()===2?`Save draft`:`Saved`,` `),E$1(4),le(`bxDropdown`,l),E$1(3),le(`bxContextMenu`,Ce),E$1(6),He(n.menuStatus())}},dependencies:[nne,ene,Xte,Qte,mF,lF,gF,Ti,nr,rr,kn,Dn,UO,Z,rm,uM,oM,rM,hn],styles:[`
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
}`]})};var Oe=()=>({required:`Choose a layout.`});function De(s,e){if(s&1&&($(0,`bx-select`,22),$R(),q()),s&2){let a=e.$implicit,n=L$1();le(`clearable`,!1)(`label`,a)(`formControlName`,a)(`options`,n.breakpointSelectOptions),WR()}}var ye=class s{modalService=p(Se$1);layoutOptions=[`center`,`right`,`left`,`bottom-sheet`];layoutSelectOptions=this.layoutOptions.map(e=>({label:e.split(`-`).map(a=>a.charAt(0).toUpperCase()+a.slice(1)).join(` `),value:e}));breakpointSelectOptions=[{label:`None`,value:`none`},...this.layoutSelectOptions];breakpointKeys=Object.keys(Cr);form;activeModal=C(null);resultMessage=C(`Open a modal to preview its layout and close behavior.`);modalReadmePath=C(`projects/blocks/modal/README.md`);codeFiles=[{title:`modal-usage.ts`,path:`assets/code-snippets/modal/modal-usage.ts.txt`,language:`typescript`},{title:`modal.ts`,path:`assets/code-snippets/modal/modal.ts.txt`,language:`typescript`},{title:`modal.html`,path:`assets/code-snippets/modal/modal.html.txt`,language:`html`},{title:`modal.scss`,path:`assets/code-snippets/modal/modal.scss.txt`,language:`scss`},{title:`confirm-close.ts`,path:`assets/code-snippets/modal/confirm-close-modal.ts.txt`,language:`typescript`},{title:`confirm-close.html`,path:`assets/code-snippets/modal/confirm-close-modal.html.txt`,language:`html`},{title:`confirm-close.scss`,path:`assets/code-snippets/modal/confirm-close-modal.scss.txt`,language:`scss`},{title:`styles.scss`,path:`assets/code-snippets/modal/styles.scss.txt`,language:`scss`}];openedCount=0;constructor(){let e={layout:new _D(`right`),animate:new _D(!0),hasBackdrop:new _D(!0),showCloseButton:new _D(!0),title:new _D(`Review your changes`),headerText:new _D(`Workspace settings`),disableClose:new _D(!1),disableCloseOnBackdropClick:new _D(!1),hasConfirmCloseGuard:new _D(!0)};this.breakpointKeys.forEach(a=>{let n=`none`;a===`sm`&&(n=`bottom-sheet`),a===`xl`&&(n=`center`),e[a]=new _D(n)}),this.form=new qf(e)}openModal(){let e=this.createRequest();if(!e)return;let a=e.headerText===``?null:e.headerText,n=this.modalService.open(W,{header:a===void 0?void 0:{text:a??``,icon:{name:`info`,color:`text-info`,bgColor:`auto`}},data:{title:e.title,body:`This dialog shares the application theme and appearance settings. Confirm to apply the example, or cancel to return to the playground.`,openedCount:this.openedCount},style:{layout:e.layout,animate:e.animate,hasBackdrop:e.hasBackdrop,showCloseButton:e.showCloseButton,breakpoints:this.getBreakpointsFromRequest(e)},disableClose:e.disableClose,disableCloseOnBackdropClick:e.disableCloseOnBackdropClick,closeGuard:e.hasConfirmCloseGuard?new Nn(j,{data:`Are you sure you want to close the modal?`,header:{text:`Unsaved Changes`},style:{showCloseButton:!1}}):void 0});this.activeModal.set(n),n.afterClosed().subscribe(l=>{this.activeModal()===n&&this.activeModal.set(null),l.state===`confirm`&&l.data?(this.openedCount=l.data.openedCount,this.resultMessage.set(`Changes confirmed. This modal has been confirmed ${this.openedCount} time${this.openedCount===1?``:`s`}.`)):this.resultMessage.set(`Modal closed. No changes were applied.`)})}patchOpenModal(){let e=this.form.getRawValue();this.activeModal()?.patch({header:{text:e.headerText??``,icon:{name:`pencil`}},disableClose:e.disableClose??!1,disableCloseOnBackdropClick:e.disableCloseOnBackdropClick??!1,style:{showCloseButton:e.showCloseButton??!0}})}createRequest(){if(this.form.invalid)return;let e=this.form.getRawValue();return new L(Object.fromEntries(Object.entries(e).map(([n,l])=>[n,l===null?void 0:l])))}getBreakpointsFromRequest(e){let a={};return this.breakpointKeys.forEach(n=>{let l=e[n];l&&l!==`none`&&(a[n]=l)}),a}static ɵfac=function(a){return new(a||s)};static ɵcmp=H({type:s,selectors:[[`app-modal`]],decls:47,vars:11,consts:[[`configPanel`,``],[`pageDescription`,`Configure modal layout, responsive behavior, close guards, and content using your shared appearance.`],[1,`demo-container`],[3,`matchHeight`,`codeFiles`,`readmePath`],[`bxSurface`,``,1,`config-container`],[1,`config-header`],[1,`hint`],[`routerLink`,`/appearance`],[`role`,`status`,1,`hint`],[1,`config-form`,3,`formGroup`],[1,`form-section`],[`label`,`Default Layout`,`formControlName`,`layout`,`subscriptSizing`,`dynamic`,3,`clearable`,`errorMessages`,`options`],[`label`,`Header Text`,`formControlName`,`headerText`,`subscriptSizing`,`dynamic`],[`label`,`Title`,`formControlName`,`title`,`subscriptSizing`,`dynamic`],[1,`form-checkboxes`],[`label`,`Animate`,`formControlName`,`animate`,`subscriptSizing`,`dynamic`],[`label`,`Has Backdrop`,`formControlName`,`hasBackdrop`,`subscriptSizing`,`dynamic`],[`label`,`Show Close Button`,`formControlName`,`showCloseButton`,`subscriptSizing`,`dynamic`],[`label`,`Disable Close (Global)`,`formControlName`,`disableClose`,`tooltip`,`Prevents closing via ESC key or backdrop clicks.`,`subscriptSizing`,`dynamic`],[`label`,`Disable Backdrop Click`,`formControlName`,`disableCloseOnBackdropClick`,`subscriptSizing`,`dynamic`],[`label`,`Use Confirm Close Guard`,`formControlName`,`hasConfirmCloseGuard`,`tooltip`,`Intercepts the close event and prompts the user to confirm.`,`subscriptSizing`,`dynamic`],[1,`breakpoints-grid`],[`subscriptSizing`,`dynamic`,3,`clearable`,`label`,`formControlName`,`options`],[1,`actions`],[`type`,`button`,`bx-button`,``,`variant`,`filled`,`color`,`grayscale`,3,`click`,`disabled`],[`type`,`button`,`bx-button`,``,`variant`,`tonal`,3,`click`,`disabled`]],template:function(a,n){if(a&1&&($(0,`bx-page-container`,1)(1,`div`,2),Be(2,`app-component-info`,3),$(3,`div`,4,0)(5,`div`,5),Te(6,`Configurator`),q(),$(7,`p`,6),Te(8,` Compare the restrained centered entrance with larger side and bottom-sheet motion. Close during entrance, resize, and switch accessibility settings to inspect interruption. On a bottom sheet, drag the handle slowly, flick, pause before release, or cancel with Escape. Confirm-close guards still apply. `),q(),$(9,`p`,6),Te(10,`Uses your shared appearance. `),$(11,`a`,7),Te(12,`Adjust appearance settings`),q()(),$(13,`p`,8),Te(14),q(),$(15,`form`,9)(16,`div`,10)(17,`h3`),Te(18,`General Style`),q(),$(19,`bx-select`,11),$R(),q(),$(20,`bx-input-field`,12),$R(),q(),$(21,`bx-input-field`,13),$R(),q()(),$(22,`div`,10)(23,`h3`),Te(24,`Behavior & Toggles`),q(),$(25,`div`,14)(26,`bx-checkbox`,15),$R(),q(),$(27,`bx-checkbox`,16),$R(),q(),$(28,`bx-checkbox`,17),$R(),q(),$(29,`bx-checkbox`,18),$R(),q(),$(30,`bx-checkbox`,19),$R(),q(),$(31,`bx-checkbox`,20),$R(),q()()(),$(32,`div`,10)(33,`h3`),Te(34,`Responsive Breakpoints`),q(),$(35,`p`,6),Te(36,`Select 'none' to ignore that breakpoint.`),q(),$(37,`div`,21),Hn(38,De,1,4,`bx-select`,22,na),q()()(),$(40,`div`,23)(41,`button`,24),ye$1(`click`,function(){return n.openModal()}),Te(42,` Open Modal with live controls `),q(),$(43,`button`,25),ye$1(`click`,function(){return n.patchOpenModal()}),Te(44,` Apply heading and dismissal to open modal `),q()(),$(45,`p`,6),Te(46,`Layout and animation apply when opening. The dialog contains live controls and a wizard that use ModalRef.patch().`),q()()()()),a&2){let l=oa(4);E$1(2),le(`matchHeight`,l)(`codeFiles`,n.codeFiles)(`readmePath`,n.modalReadmePath()),E$1(12),He(n.resultMessage()),E$1(),le(`formGroup`,n.form),E$1(4),le(`clearable`,!1)(`errorMessages`,UA(10,Oe))(`options`,n.layoutSelectOptions),WR(),E$1(),WR(),E$1(),WR(),E$1(5),WR(),E$1(),WR(),E$1(),WR(),E$1(),WR(),E$1(),WR(),E$1(),WR(),E$1(7),qn(n.breakpointKeys),E$1(3),le(`disabled`,n.form.invalid),E$1(2),le(`disabled`,!n.activeModal()||n.form.invalid)}},dependencies:[SM,Ft,$p,vS,nne,ene,Xte,Qte,lF,gF,E,Z,nr,Ti,rr],styles:[`
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