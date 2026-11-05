import{t as M}from"./chunk-q1Cv2z-9.js";import"./chunk-DGgo5410.js";import{G as on,H as ge$1,K as rn,V as an,W as ln,m as Ci,w as Xn,y as Ni}from"./main-2D43OMMH.js";import{$ as L0,$n as gO,Ai as wR,An as ae,Bi as yh,Br as ne,Ci as vR,Dr as lr,Dt as QZ,Ei as vt,En as _t,Gn as e_,Gr as p,Hn as dr,It as S,Kt as U0,Lt as SF,Mn as bO,N as Gh,O as F0,Ot as Qa,P as Gn,Q as L,S as Dr,Sn as _,U as JC,Vt as Sr,W as JZ,Wi as ze,Wr as oy,Zr as ql,bt as P,d as B$1,di as tQ,ei as rQ,er as gP,f as Bh,l as AE,lr as iD,mt as Ne,o as $n,u as An,vt as Nt,wn as _r,wr as lb,yt as Oe,zi as ye$1}from"./chunk-EuYK8zUg.js";var B=class{layout=`right`;animate=!0;hasBackdrop=!0;showCloseButton=!0;title=``;headerText=``;disableClose=!1;disableCloseOnBackdropClick=!1;hasConfirmCloseGuard=!0;constructor(e){Object.assign(this,e)}};function fe(r,e){if(r&1){let t=Dr();P(0,`div`,1)(1,`button`,2),ye$1(`click`,function(){$n(t);let a=ae();return Gn(a.confirm())}),Ne(2,`Confirm`),L(),P(3,`button`,3),ye$1(`click`,function(){$n(t);let a=ae();return Gn(a.close())}),Ne(4,`Cancel`),L()()}}var F=class r extends an{confirm(){this.modal?.close(`confirm`)}static ɵfac=(()=>{let e;return function(i){return(e||(e=lr(r)))(i||r)}})();static ɵcmp=B$1({type:r,selectors:[[`app-confirm-close`]],features:[_t],decls:3,vars:1,consts:[[`class`,`button-container`,4,`appModalFooter`],[1,`button-container`],[`type`,`button`,`bx-button`,``,`variant`,`filled`,`color`,`success`,3,`click`],[`type`,`button`,`bx-button`,``,`variant`,`filled`,`color`,`danger`,3,`click`]],template:function(t,i){t&1&&(P(0,`div`),Ne(1),L(),JC(2,fe,5,0,`div`,0)),t&2&&(_(),An(` `,i.data,`
`))},dependencies:[ln,Gh],styles:[`
.button-container[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 1rem;
}
.button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {
  cursor: pointer;
}`]})};var be=(r,e)=>({"side-modal":r,"center-modal":e});function ge(r,e){if(r&1&&(P(0,`div`),Ne(1),L()),r&2){let t=ae();_(),An(` `,t.data.title,`
`)}}function ye(r,e){if(r&1){let t=Dr();P(0,`bx-menu`)(1,`bx-menu-item`,12),ye$1(`action`,function(){$n(t);let a=ae();return Gn(a.selectAction(`Edit details`))}),L(),P(2,`bx-menu-item`,13),ye$1(`action`,function(){$n(t);let a=ae();return Gn(a.selectAction(`Duplicate`))}),L()()}}function Ce(r,e){if(r&1){let t=Dr();P(0,`bx-menu`)(1,`bx-menu-item`,14),ye$1(`action`,function(){$n(t);let a=ae();return Gn(a.selectAction(`Copy link`))}),L(),P(2,`bx-menu-item`,15),ye$1(`action`,function(){$n(t);let a=ae();return Gn(a.selectAction(`Archive`))}),L(),P(3,`bx-menu-item`,16),ye$1(`action`,function(){$n(t);let a=ae();return Gn(a.selectAction(`Delete`))}),L()()}r&2&&(_(3),ne(`danger`,!0))}function xe(r,e){if(r&1){let t=Dr();P(0,`div`,17)(1,`button`,18),ye$1(`click`,function(){$n(t);let a=ae();return Gn(a.confirm())}),Ne(2,`Confirm`),L(),P(3,`button`,19),ye$1(`click`,function(){$n(t);let a=ae();return Gn(a.close())}),Ne(4,`Cancel`),L()()}}var I=class r extends an{menuStatus=S(`Try either menu. Actions keep this modal open.`);isSideModal=S(!1);isCenteredModal=S(!1);onModalInit(){let e=this.modal?.modalConfig?.style.layout;this.isSideModal.set(e===`right`||e===`left`),this.isCenteredModal.set(e===`center`)}confirm(){this.modal?.close(`confirm`,{openedCount:this.data.openedCount+1})}selectAction(e){this.menuStatus.set(`${e} selected. The modal is still open.`)}static ɵfac=(()=>{let e;return function(i){return(e||(e=lr(r)))(i||r)}})();static ɵcmp=B$1({type:r,selectors:[[`app-demo-modal`]],features:[_t],decls:22,vars:8,consts:[[`dropdownActions`,``],[`contextActions`,``],[4,`appModalHeader`],[1,`demo-modal-content-class`,3,`ngClass`],[`aria-label`,`Menus inside this modal`,1,`modal-menu-demo`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`primary`,`placement`,`bottom`,3,`bxDropdown`],[`name`,`chevron-down`,`size`,`16`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`grayscale`,1,`modal-context-target`,3,`bxContextMenu`],[`name`,`mouse-pointer-2`,`size`,`16`],[1,`menu-hint`],[`role`,`status`,1,`menu-status`],[`class`,`button-container`,4,`appModalFooter`],[`label`,`Edit details`,`icon`,`pencil`,3,`action`],[`label`,`Duplicate`,`icon`,`copy`,3,`action`],[`label`,`Copy link`,`icon`,`link`,3,`action`],[`label`,`Archive`,`icon`,`archive`,3,`action`],[`label`,`Delete`,`icon`,`trash-2`,3,`action`,`danger`],[1,`button-container`],[`type`,`button`,`bx-button`,``,`variant`,`filled`,`color`,`success`,3,`click`],[`type`,`button`,`bx-button`,``,`variant`,`filled`,`color`,`danger`,3,`click`]],template:function(t,i){if(t&1&&(JC(0,ge,2,1,`div`,2),P(1,`div`,3)(2,`div`),Ne(3),L(),P(4,`section`,4)(5,`h3`),Ne(6,`Menus inside the modal`),L(),P(7,`button`,5),Ne(8,` Open actions`),Oe(9,`bx-icon`,6),L(),P(10,`button`,7),Oe(11,`bx-icon`,8),Ne(12,`Right-click or hold for more actions `),L(),P(13,`p`,9),Ne(14,` On touch screens, touch and hold for more actions. With a keyboard, focus the example and press Shift + F10. Escape closes the menu first. `),L(),P(15,`p`,10),Ne(16),L()()(),JC(17,ye,3,0,`ng-template`,null,0,lb)(19,Ce,4,1,`ng-template`,null,1,lb)(21,xe,5,0,`div`,11)),t&2){let a=ql(18),ue=ql(20);_(),ne(`ngClass`,bO(5,be,i.isSideModal(),i.isCenteredModal())),_(2),An(` `,i.data.body,` `),_(4),ne(`bxDropdown`,a),_(3),ne(`bxContextMenu`,ue),_(6),ze(i.menuStatus())}},dependencies:[rn,ln,gP,Gh,Bh,U0,F0,L0,vt],styles:[`
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
}`]})};var he=()=>({required:`Choose a layout.`});function _e(r,e){if(r&1&&(P(0,`bx-select`,23),vR(),L()),r&2){let t=e.$implicit,i=ae();ne(`clearable`,!1)(`label`,t)(`formControlName`,t)(`options`,i.breakpointSelectOptions),wR()}}var pe=class r{modals=p(ge$1);layoutOptions=[`center`,`right`,`left`,`bottom-sheet`];layoutSelectOptions=this.layoutOptions.map(e=>({label:e.split(`-`).map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(` `),value:e}));breakpointSelectOptions=[{label:`None`,value:`none`},...this.layoutSelectOptions];breakpointKeys=Object.keys(dr);form;resultMessage=S(`Open a modal to preview its layout and close behavior.`);modalReadmePath=S(`projects/blocks/modal/README.md`);codeFiles=[{title:`modal-usage.ts`,path:`assets/code-snippets/modal/modal-usage.ts.txt`,language:`typescript`},{title:`modal.ts`,path:`assets/code-snippets/modal/modal.ts.txt`,language:`typescript`},{title:`modal.html`,path:`assets/code-snippets/modal/modal.html.txt`,language:`html`},{title:`modal.scss`,path:`assets/code-snippets/modal/modal.scss.txt`,language:`scss`},{title:`confirm-close.ts`,path:`assets/code-snippets/modal/confirm-close-modal.ts.txt`,language:`typescript`},{title:`confirm-close.html`,path:`assets/code-snippets/modal/confirm-close-modal.html.txt`,language:`html`},{title:`confirm-close.scss`,path:`assets/code-snippets/modal/confirm-close-modal.scss.txt`,language:`scss`},{title:`styles.scss`,path:`assets/code-snippets/modal/styles.scss.txt`,language:`scss`}];openedCount=0;constructor(){let e={layout:new AE(`right`),animate:new AE(!0),hasBackdrop:new AE(!0),showCloseButton:new AE(!0),title:new AE(`Review your changes`),headerText:new AE(`Workspace settings`),disableClose:new AE(!1),disableCloseOnBackdropClick:new AE(!1),hasConfirmCloseGuard:new AE(!0)};this.breakpointKeys.forEach(t=>{let i=`none`;t===`sm`&&(i=`bottom-sheet`),t===`xl`&&(i=`center`),e[t]=new AE(i)}),this.form=new yh(e)}openModal(){let e=this.createRequest();if(!e)return;let t=e.headerText===``?null:e.headerText;this.modals.open(I,{header:t===void 0?void 0:{text:t,icon:{name:`info`,color:`text-info`,bgColor:`auto`}},data:{title:e.title,body:`This dialog shares the application theme and appearance settings. Confirm to apply the example, or cancel to return to the playground.`,openedCount:this.openedCount},style:{layout:e.layout,animate:e.animate,hasBackdrop:e.hasBackdrop,showCloseButton:e.showCloseButton,breakpoints:this.getBreakpointsFromRequest(e)},disableClose:e.disableClose,disableCloseOnBackdropClick:e.disableCloseOnBackdropClick,closeGuard:e.hasConfirmCloseGuard?new on(F,{data:`Are you sure you want to close the modal?`,header:{text:`Unsaved Changes`},style:{showCloseButton:!1}}):void 0}).afterClosed().subscribe(a=>{a.state===`confirm`&&a.data?(this.openedCount=a.data.openedCount,this.resultMessage.set(`Changes confirmed. This modal has been confirmed ${this.openedCount} time${this.openedCount===1?``:`s`}.`)):this.resultMessage.set(`Modal closed. No changes were applied.`)})}createRequest(){if(this.form.invalid)return;let e=this.form.getRawValue();return new B(Object.fromEntries(Object.entries(e).map(([i,a])=>[i,a===null?void 0:a])))}getBreakpointsFromRequest(e){let t={};return this.breakpointKeys.forEach(i=>{let a=e[i];a&&a!==`none`&&(t[i]=a)}),t}static ɵfac=function(t){return new(t||r)};static ɵcmp=B$1({type:r,selectors:[[`app-modal`]],decls:47,vars:10,consts:[[`configPanel`,``],[1,`page-heading`],[1,`eyebrow`],[1,`demo-container`],[3,`matchHeight`,`codeFiles`,`readmePath`],[`bxSurface`,``,1,`config-container`],[1,`config-header`],[1,`hint`],[`routerLink`,`/appearance`],[`role`,`status`,1,`hint`],[1,`config-form`,`form-section`,3,`formGroup`],[1,`form-section`],[`label`,`Default Layout`,`formControlName`,`layout`,`subscriptSizing`,`dynamic`,3,`clearable`,`errorMessages`,`options`],[`label`,`Header Text`,`formControlName`,`headerText`,`subscriptSizing`,`dynamic`],[`label`,`Title`,`formControlName`,`title`,`subscriptSizing`,`dynamic`],[1,`form-checkboxes`],[`label`,`Animate`,`formControlName`,`animate`,`subscriptSizing`,`dynamic`],[`label`,`Has Backdrop`,`formControlName`,`hasBackdrop`,`subscriptSizing`,`dynamic`],[`label`,`Show Close Button`,`formControlName`,`showCloseButton`,`subscriptSizing`,`dynamic`],[`label`,`Disable Close (Global)`,`formControlName`,`disableClose`,`tooltip`,`Prevents closing via ESC key or backdrop clicks.`,`subscriptSizing`,`dynamic`],[`label`,`Disable Backdrop Click`,`formControlName`,`disableCloseOnBackdropClick`,`subscriptSizing`,`dynamic`],[`label`,`Use Confirm Close Guard`,`formControlName`,`hasConfirmCloseGuard`,`tooltip`,`Intercepts the close event and prompts the user to confirm.`,`subscriptSizing`,`dynamic`],[1,`breakpoints-grid`],[`subscriptSizing`,`dynamic`,3,`clearable`,`label`,`formControlName`,`options`],[1,`actions`],[`type`,`button`,`bx-button`,``,`variant`,`filled`,`color`,`grayscale`,3,`click`,`disabled`]],template:function(t,i){if(t&1&&(P(0,`header`,1)(1,`p`,2),Ne(2,`Overlay components`),L(),P(3,`h1`),Ne(4,`Modals`),L(),P(5,`p`),Ne(6,`Configure dialogs, side panels, and sheets using the shared Blocks theme.`),L()(),P(7,`div`,3),Oe(8,`app-component-info`,4),P(9,`div`,5,0)(11,`div`,6),Ne(12,`Configurator`),L(),P(13,`p`,7),Ne(14,`Uses your shared appearance. `),P(15,`a`,8),Ne(16,`Adjust appearance settings`),L()(),P(17,`p`,9),Ne(18),L(),P(19,`form`,10)(20,`div`,11)(21,`h3`),Ne(22,`General Style`),L(),P(23,`bx-select`,12),vR(),L(),P(24,`bx-input-field`,13),vR(),L(),P(25,`bx-input-field`,14),vR(),L()(),P(26,`div`,11)(27,`h3`),Ne(28,`Behavior & Toggles`),L(),P(29,`div`,15)(30,`bx-checkbox`,16),vR(),L(),P(31,`bx-checkbox`,17),vR(),L(),P(32,`bx-checkbox`,18),vR(),L(),P(33,`bx-checkbox`,19),vR(),L(),P(34,`bx-checkbox`,20),vR(),L(),P(35,`bx-checkbox`,21),vR(),L()()(),P(36,`div`,11)(37,`h3`),Ne(38,`Responsive Breakpoints`),L(),P(39,`p`,7),Ne(40,`Select 'none' to ignore that breakpoint.`),L(),P(41,`div`,22),Sr(42,_e,1,4,`bx-select`,23,Qa),L()()(),P(44,`div`,24)(45,`button`,25),ye$1(`click`,function(){return i.openModal()}),Ne(46,`Open Modal`),L()()()()),t&2){let a=ql(10);_(8),ne(`matchHeight`,a)(`codeFiles`,i.codeFiles)(`readmePath`,i.modalReadmePath()),_(10),ze(i.resultMessage()),_(),ne(`formGroup`,i.form),_(4),ne(`clearable`,!1)(`errorMessages`,gO(9,he))(`options`,i.layoutSelectOptions),wR(),_(),wR(),_(),wR(),_(5),wR(),_(),wR(),_(),wR(),_(),wR(),_(),wR(),_(),wR(),_(7),_r(i.breakpointKeys),_(3),ne(`disabled`,i.form.invalid)}},dependencies:[Nt,iD,e_,rQ,tQ,QZ,JZ,oy,SF,M,Gh,Ci,Xn,Ni],styles:[`
[_nghost-%COMP%] {
  width: 100%;
}
.breakpoints-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 1rem;
}`]})};export{pe as Modal};