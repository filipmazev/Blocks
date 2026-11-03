import{Bi as xr,Bt as Re,Di as uv,Dt as P0,E as Er,Et as P,Fn as ar,Gn as cP,Hn as bf,Hr as mk,Ht as S,Ir as lr,Kt as Sr,Mi as vk,Nn as ae,Ot as P7,Qt as U0,Ri as x,Rn as bF,Rt as R7,Tr as jf,Un as bt,Vn as be$1,Vt as Rt,Wr as nE,Xn as da,_i as sy,bt as O0,di as qf,ei as p,et as Jx,fi as qn,gt as N7,jt as Pl,nr as ex,o as A7,ot as Ks,qt as St,r as $n,ri as pO,st as L,wr as je,wt as Oe,xi as uO,yi as te,z as H,zt as RM}from"./chunk-BjKrh6Fv.js";import{E as ki,b as Ti,y as Qn}from"./main-5I4S5C5I.js";import{a as nn,i as fe$1,n as Ze,o as tn,r as en}from"./chunk-Cg3z1ZUV.js";import"./chunk-Bf8a64Dt.js";import{t as P$1}from"./chunk-BMbaK6j5.js";var fe=(r,e)=>({"side-modal":r,"center-modal":e});function be(r,e){if(r&1&&(P(0,`div`),Re(1),L()),r&2){let t=ae();S(),lr(` `,t.data.title,`
`)}}function ge(r,e){if(r&1){let t=Er();P(0,`bx-menu`)(1,`bx-menu-item`,12),be$1(`action`,function(){$n(t);let a=ae();return qn(a.selectAction(`Edit details`))}),L(),P(2,`bx-menu-item`,13),be$1(`action`,function(){$n(t);let a=ae();return qn(a.selectAction(`Duplicate`))}),L()()}}function ye(r,e){if(r&1){let t=Er();P(0,`bx-menu`)(1,`bx-menu-item`,14),be$1(`action`,function(){$n(t);let a=ae();return qn(a.selectAction(`Copy link`))}),L(),P(2,`bx-menu-item`,15),be$1(`action`,function(){$n(t);let a=ae();return qn(a.selectAction(`Archive`))}),L(),P(3,`bx-menu-item`,16),be$1(`action`,function(){$n(t);let a=ae();return qn(a.selectAction(`Delete`))}),L()()}r&2&&(S(3),te(`danger`,!0))}function Ce(r,e){if(r&1){let t=Er();P(0,`div`,17)(1,`button`,18),be$1(`click`,function(){$n(t);let a=ae();return qn(a.confirm())}),Re(2,`Confirm`),L(),P(3,`button`,19),be$1(`click`,function(){$n(t);let a=ae();return qn(a.close())}),Re(4,`Cancel`),L()()}}var B=class r extends en{menuStatus=x(`Try either menu. Actions keep this modal open.`);isSideModal=x(!1);isCenteredModal=x(!1);onModalInit(){let e=this.modal?.modalConfig?.style.layout;this.isSideModal.set(e===`right`||e===`left`),this.isCenteredModal.set(e===`center`)}confirm(){this.modal?.close(`confirm`,{openedCount:this.data.openedCount+1})}selectAction(e){this.menuStatus.set(`${e} selected. The modal is still open.`)}static ɵfac=(()=>{let e;return function(i){return(e||(e=ar(r)))(i||r)}})();static ɵcmp=H({type:r,selectors:[[`app-demo-modal`]],features:[St],decls:22,vars:8,consts:[[`dropdownActions`,``],[`contextActions`,``],[4,`appModalHeader`],[1,`demo-modal-content-class`,3,`ngClass`],[`aria-label`,`Menus inside this modal`,1,`modal-menu-demo`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`primary`,`placement`,`bottom`,3,`bxDropdown`],[`name`,`chevron-down`,`size`,`16`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`grayscale`,1,`modal-context-target`,3,`bxContextMenu`],[`name`,`mouse-pointer-2`,`size`,`16`],[1,`menu-hint`],[`role`,`status`,1,`menu-status`],[`class`,`button-container`,4,`appModalFooter`],[`label`,`Edit details`,`icon`,`pencil`,3,`action`],[`label`,`Duplicate`,`icon`,`copy`,3,`action`],[`label`,`Copy link`,`icon`,`link`,3,`action`],[`label`,`Archive`,`icon`,`archive`,3,`action`],[`label`,`Delete`,`icon`,`trash-2`,3,`action`,`danger`],[1,`button-container`],[`bx-button`,``,`variant`,`filled`,`color`,`success`,3,`click`],[`bx-button`,``,`variant`,`filled`,`color`,`danger`,3,`click`]],template:function(t,i){if(t&1&&(ex(0,be,2,1,`div`,2),P(1,`div`,3)(2,`div`),Re(3),L(),P(4,`section`,4)(5,`h3`),Re(6,`Menus inside the modal`),L(),P(7,`button`,5),Re(8,` Open actions`),Oe(9,`bx-icon`,6),L(),P(10,`button`,7),Oe(11,`bx-icon`,8),Re(12,`Right-click or hold for more actions `),L(),P(13,`p`,9),Re(14,`On touch screens, touch and hold for more actions. With a keyboard, focus the example and press Shift + F10. Escape closes the menu first.`),L(),P(15,`p`,10),Re(16),L()()(),ex(17,ge,3,0,`ng-template`,null,0,uv)(19,ye,4,1,`ng-template`,null,1,uv)(21,Ce,5,0,`div`,11)),t&2){let a=Pl(18),ue=Pl(20);S(),te(`ngClass`,pO(5,fe,i.isSideModal(),i.isCenteredModal())),S(2),lr(` `,i.data.body,` `),S(4),te(`bxDropdown`,a),S(3),te(`bxContextMenu`,ue),S(6),je(i.menuStatus())}},dependencies:[nn,tn,cP,qf,jf,U0,O0,P0,bt],styles:[`
.demo-modal-content-class[_ngcontent-%COMP%] {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 1rem;
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
  flex-direction: row;
  justify-content: flex-end;
  gap: 1rem;
}
.button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {
  cursor: pointer;
}
.modal-menu-demo[_ngcontent-%COMP%] {
  display: grid;
  justify-items: start;
  gap: 0.75rem;
  padding-top: 1rem;
  border-top: 1px solid var(--%NS%bx-border-default);
}
.modal-menu-demo[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], 
.modal-menu-demo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
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
}`],changeDetection:1})};var F=class{layout=`right`;animate=!0;hasBackdrop=!0;showCloseButton=!0;title=``;headerText=``;disableClose=!1;disableCloseOnBackdropClick=!1;hasConfirmCloseGuard=!0;constructor(e){Object.assign(this,e)}};function he(r,e){if(r&1){let t=Er();P(0,`div`,1)(1,`button`,2),be$1(`click`,function(){$n(t);let a=ae();return qn(a.confirm())}),Re(2,`Confirm`),L(),P(3,`button`,3),be$1(`click`,function(){$n(t);let a=ae();return qn(a.close())}),Re(4,`Cancel`),L()()}}var I=class r extends en{confirm(){this.modal?.close(`confirm`)}static ɵfac=(()=>{let e;return function(i){return(e||(e=ar(r)))(i||r)}})();static ɵcmp=H({type:r,selectors:[[`app-confirm-close`]],features:[St],decls:3,vars:1,consts:[[`class`,`button-container`,4,`appModalFooter`],[1,`button-container`],[`bx-button`,``,`variant`,`filled`,`color`,`success`,3,`click`],[`bx-button`,``,`variant`,`filled`,`color`,`danger`,3,`click`]],template:function(t,i){t&1&&(P(0,`div`),Re(1),L(),ex(2,he,5,0,`div`,0)),t&2&&(S(),lr(` `,i.data,`
`))},dependencies:[tn,qf],styles:[`
.button-container[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 1rem;
}
.button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {
  cursor: pointer;
}`],changeDetection:1})};var xe=()=>({required:`Choose a layout.`});function _e(r,e){if(r&1&&(P(0,`bx-select`,23),mk(),L()),r&2){let t=e.$implicit,i=ae();te(`clearable`,!1)(`label`,t)(`formControlName`,t)(`options`,i.breakpointSelectOptions),vk()}}var pe=class r{modals=p(fe$1);layoutOptions=[`center`,`right`,`left`,`bottom-sheet`];layoutSelectOptions=this.layoutOptions.map(e=>({label:e.split(`-`).map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(` `),value:e}));breakpointSelectOptions=[{label:`None`,value:`none`},...this.layoutSelectOptions];breakpointKeys=Object.keys(da);form;resultMessage=x(`Open a modal to preview its layout and close behavior.`);modalReadmePath=x(`assets/modal-readme/README.md`);codeFiles=[{title:`modal-usage.ts`,path:`assets/code-snippets/modal/modal-usage.ts.txt`,language:`typescript`},{title:`modal.ts`,path:`assets/code-snippets/modal/modal.ts.txt`,language:`typescript`},{title:`modal.html`,path:`assets/code-snippets/modal/modal.html.txt`,language:`html`},{title:`modal.scss`,path:`assets/code-snippets/modal/modal.scss.txt`,language:`scss`},{title:`confirm-close.ts`,path:`assets/code-snippets/modal/confirm-close-modal.ts.txt`,language:`typescript`},{title:`confirm-close.html`,path:`assets/code-snippets/modal/confirm-close-modal.html.txt`,language:`html`},{title:`confirm-close.scss`,path:`assets/code-snippets/modal/confirm-close-modal.scss.txt`,language:`scss`},{title:`styles.scss`,path:`assets/code-snippets/modal/styles.scss.txt`,language:`scss`}];openedCount=0;constructor(){let e={layout:new RM(`right`),animate:new RM(!0),hasBackdrop:new RM(!0),showCloseButton:new RM(!0),title:new RM(`Review your changes`),headerText:new RM(`Workspace settings`),disableClose:new RM(!1),disableCloseOnBackdropClick:new RM(!1),hasConfirmCloseGuard:new RM(!0)};this.breakpointKeys.forEach(t=>{let i=`none`;t===`sm`&&(i=`bottom-sheet`),t===`xl`&&(i=`center`),e[t]=new RM(i)}),this.form=new bf(e)}openModal(){let e=this.createRequest();if(!e)return;let t=e.headerText===``?null:e.headerText;this.modals.open(B,{header:t===void 0?void 0:{text:t,icon:{name:`info`,color:`text-info`,bgColor:`auto`}},data:{title:e.title,body:`This dialog shares the application theme and appearance settings. Confirm to apply the example, or cancel to return to the playground.`,openedCount:this.openedCount},style:{layout:e.layout,animate:e.animate,hasBackdrop:e.hasBackdrop,showCloseButton:e.showCloseButton,breakpoints:this.getBreakpointsFromRequest(e)},disableClose:e.disableClose,disableCloseOnBackdropClick:e.disableCloseOnBackdropClick,closeGuard:e.hasConfirmCloseGuard?new Ze(I,{data:`Are you sure you want to close the modal?`,header:{text:`Unsaved Changes`},style:{showCloseButton:!1}}):void 0}).afterClosed().subscribe(a=>{a.state===`confirm`&&a.data?(this.openedCount=a.data.openedCount,this.resultMessage.set(`Changes confirmed. This modal has been confirmed ${this.openedCount} time${this.openedCount===1?``:`s`}.`)):this.resultMessage.set(`Modal closed. No changes were applied.`)})}createRequest(){if(this.form.invalid)return;let e=this.form.getRawValue();return new F(Object.fromEntries(Object.entries(e).map(([i,a])=>[i,a===null?void 0:a])))}getBreakpointsFromRequest(e){let t={};return this.breakpointKeys.forEach(i=>{let a=e[i];a&&a!==`none`&&(t[i]=a)}),t}static ɵfac=function(t){return new(t||r)};static ɵcmp=H({type:r,selectors:[[`app-modal`]],decls:47,vars:10,consts:[[`configPanel`,``],[1,`page-heading`],[1,`eyebrow`],[1,`demo-container`],[3,`matchHeight`,`codeFiles`,`readmePath`],[`bxSurface`,``,1,`config-container`],[1,`config-header`],[1,`hint`],[`routerLink`,`/appearance`],[`role`,`status`,1,`hint`],[1,`config-form`,`form-section`,3,`formGroup`],[1,`form-section`],[`label`,`Default Layout`,`formControlName`,`layout`,`subscriptSizing`,`dynamic`,3,`clearable`,`errorMessages`,`options`],[`label`,`Header Text`,`formControlName`,`headerText`,`subscriptSizing`,`dynamic`],[`label`,`Title`,`formControlName`,`title`,`subscriptSizing`,`dynamic`],[1,`form-checkboxes`],[`label`,`Animate`,`formControlName`,`animate`,`subscriptSizing`,`dynamic`],[`label`,`Has Backdrop`,`formControlName`,`hasBackdrop`,`subscriptSizing`,`dynamic`],[`label`,`Show Close Button`,`formControlName`,`showCloseButton`,`subscriptSizing`,`dynamic`],[`label`,`Disable Close (Global)`,`formControlName`,`disableClose`,`tooltip`,`Prevents closing via ESC key or backdrop clicks.`,`subscriptSizing`,`dynamic`],[`label`,`Disable Backdrop Click`,`formControlName`,`disableCloseOnBackdropClick`,`subscriptSizing`,`dynamic`],[`label`,`Use Confirm Close Guard`,`formControlName`,`hasConfirmCloseGuard`,`tooltip`,`Intercepts the close event and prompts the user to confirm.`,`subscriptSizing`,`dynamic`],[1,`breakpoints-grid`],[`subscriptSizing`,`dynamic`,3,`clearable`,`label`,`formControlName`,`options`],[1,`actions`],[`bx-button`,``,`variant`,`filled`,`color`,`grayscale`,3,`click`,`disabled`]],template:function(t,i){if(t&1&&(P(0,`header`,1)(1,`p`,2),Re(2,`Overlay components`),L(),P(3,`h1`),Re(4,`Modals`),L(),P(5,`p`),Re(6,`Configure dialogs, side panels, and sheets using the shared Blocks theme.`),L()(),P(7,`div`,3),Oe(8,`app-component-info`,4),P(9,`div`,5,0)(11,`div`,6),Re(12,`Configurator`),L(),P(13,`p`,7),Re(14,`Uses your shared appearance. `),P(15,`a`,8),Re(16,`Adjust appearance settings`),L()(),P(17,`p`,9),Re(18),L(),P(19,`form`,10)(20,`div`,11)(21,`h3`),Re(22,`General Style`),L(),P(23,`bx-select`,12),mk(),L(),P(24,`bx-input-field`,13),mk(),L(),P(25,`bx-input-field`,14),mk(),L()(),P(26,`div`,11)(27,`h3`),Re(28,`Behavior & Toggles`),L(),P(29,`div`,15)(30,`bx-checkbox`,16),mk(),L(),P(31,`bx-checkbox`,17),mk(),L(),P(32,`bx-checkbox`,18),mk(),L(),P(33,`bx-checkbox`,19),mk(),L(),P(34,`bx-checkbox`,20),mk(),L(),P(35,`bx-checkbox`,21),mk(),L()()(),P(36,`div`,11)(37,`h3`),Re(38,`Responsive Breakpoints`),L(),P(39,`p`,7),Re(40,`Select 'none' to ignore that breakpoint.`),L(),P(41,`div`,22),xr(42,_e,1,4,`bx-select`,23,Ks),L()()(),P(44,`div`,24)(45,`button`,25),be$1(`click`,function(){return i.openModal()}),Re(46,` Open Modal `),L()()()()),t&2){let a=Pl(10);S(8),te(`matchHeight`,a)(`codeFiles`,i.codeFiles)(`readmePath`,i.modalReadmePath()),S(10),je(i.resultMessage()),S(),te(`formGroup`,i.form),S(4),te(`clearable`,!1)(`errorMessages`,uO(9,xe))(`options`,i.layoutSelectOptions),vk(),S(),vk(),S(),vk(),S(5),vk(),S(),vk(),S(),vk(),S(),vk(),S(),vk(),S(),vk(),S(7),Sr(i.breakpointKeys),S(3),te(`disabled`,i.form.invalid)}},dependencies:[Rt,nE,Jx,P7,A7,N7,R7,sy,bF,P$1,qf,Ti,Qn,ki],styles:[`
[_nghost-%COMP%] {
  width: 100%;
}
.breakpoints-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 1rem;
}`],changeDetection:1})};export{pe as Modal};