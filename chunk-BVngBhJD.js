import{$r as tN,D as GK,Ei as zu,Ft as T_,Gn as eg,H as J0,O as GP,On as _,Qr as se,R as ID,Rt as Ts,U as Je,Ut as Ur,V as If,Vn as de,Wr as qr,Xn as f,Yt as Vv,Zt as W,_n as Yr,ai as vn,at as Kr,b as En,d as Bx,en as Wk,f as Ce$1,fi as xS,gr as kE,ir as he$1,mi as xr,mn as Ya,n as $K,qt as Ve,ri as tt,sr as hs,st as M,ti as tf,tt as Kk,u as Ax,un as YK,vr as kx,x as Et,xi as zA,xt as Q,y as Ef,yn as ZK,yt as Pe}from"./chunk-C74CBOi9.js";import{T as ki,v as Qn,y as Ti}from"./main-UM7HDCHR.js";import{a as nn,i as fe$1,n as Ze,o as tn,r as en}from"./chunk-B1BL4A04.js";import"./chunk-Du0uqn1q.js";import{t as P}from"./chunk-BH7NHbcV.js";var fe=(r,e)=>({"side-modal":r,"center-modal":e});function be(r,e){if(r&1&&(W(0,`div`),Ve(1),Q()),r&2){let t=de();M(),xr(` `,t.data.title,`
`)}}function Ce(r,e){if(r&1){let t=hs();W(0,`bx-menu`)(1,`bx-menu-item`,12),Ce$1(`action`,function(){Ur(t);let a=de();return qr(a.selectAction(`Edit details`))}),Q(),W(2,`bx-menu-item`,13),Ce$1(`action`,function(){Ur(t);let a=de();return qr(a.selectAction(`Duplicate`))}),Q()()}}function ge(r,e){if(r&1){let t=hs();W(0,`bx-menu`)(1,`bx-menu-item`,14),Ce$1(`action`,function(){Ur(t);let a=de();return qr(a.selectAction(`Copy link`))}),Q(),W(2,`bx-menu-item`,15),Ce$1(`action`,function(){Ur(t);let a=de();return qr(a.selectAction(`Archive`))}),Q(),W(3,`bx-menu-item`,16),Ce$1(`action`,function(){Ur(t);let a=de();return qr(a.selectAction(`Delete`))}),Q()()}r&2&&(M(3),he$1(`danger`,!0))}function ye(r,e){if(r&1){let t=hs();W(0,`div`,17)(1,`button`,18),Ce$1(`click`,function(){Ur(t);let a=de();return qr(a.confirm())}),Ve(2,`Confirm`),Q(),W(3,`button`,19),Ce$1(`click`,function(){Ur(t);let a=de();return qr(a.close())}),Ve(4,`Cancel`),Q()()}}var B=class r extends en{menuStatus=_(`Try either menu. Actions keep this modal open.`);isSideModal=_(!1);isCenteredModal=_(!1);onModalInit(){let e=this.modal?.modalConfig?.style.layout;this.isSideModal.set(e===`right`||e===`left`),this.isCenteredModal.set(e===`center`)}confirm(){this.modal?.close(`confirm`,{openedCount:this.data.openedCount+1})}selectAction(e){this.menuStatus.set(`${e} selected. The modal is still open.`)}static ɵfac=(()=>{let e;return function(i){return(e||(e=En(r)))(i||r)}})();static ɵcmp=se({type:r,selectors:[[`app-demo-modal`]],features:[Je],decls:22,vars:8,consts:[[`dropdownActions`,``],[`contextActions`,``],[4,`appModalHeader`],[1,`demo-modal-content-class`,3,`ngClass`],[`aria-label`,`Menus inside this modal`,1,`modal-menu-demo`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`primary`,`placement`,`bottom`,3,`bxDropdown`],[`name`,`chevron-down`,`size`,`16`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`grayscale`,1,`modal-context-target`,3,`bxContextMenu`],[`name`,`mouse-pointer-2`,`size`,`16`],[1,`menu-hint`],[`role`,`status`,1,`menu-status`],[`class`,`button-container`,4,`appModalFooter`],[`label`,`Edit details`,`icon`,`pencil`,3,`action`],[`label`,`Duplicate`,`icon`,`copy`,3,`action`],[`label`,`Copy link`,`icon`,`link`,3,`action`],[`label`,`Archive`,`icon`,`archive`,3,`action`],[`label`,`Delete`,`icon`,`trash-2`,3,`action`,`danger`],[1,`button-container`],[`bx-button`,``,`variant`,`filled`,`color`,`success`,3,`click`],[`bx-button`,``,`variant`,`filled`,`color`,`danger`,3,`click`]],template:function(t,i){if(t&1&&(T_(0,be,2,1,`div`,2),W(1,`div`,3)(2,`div`),Ve(3),Q(),W(4,`section`,4)(5,`h3`),Ve(6,`Menus inside the modal`),Q(),W(7,`button`,5),Ve(8,` Open actions`),Pe(9,`bx-icon`,6),Q(),W(10,`button`,7),Pe(11,`bx-icon`,8),Ve(12,`Right-click or hold for more actions `),Q(),W(13,`p`,9),Ve(14,`On touch screens, touch and hold for more actions. With a keyboard, focus the example and press Shift + F10. Escape closes the menu first.`),Q(),W(15,`p`,10),Ve(16),Q()()(),T_(17,Ce,3,0,`ng-template`,null,0,eg)(19,ge,4,1,`ng-template`,null,1,eg)(21,ye,5,0,`div`,11)),t&2){let a=Ya(18),ue=Ya(20);M(),he$1(`ngClass`,Kk(5,fe,i.isSideModal(),i.isCenteredModal())),M(2),xr(` `,i.data.body,` `),M(4),he$1(`bxDropdown`,a),M(3),he$1(`bxContextMenu`,ue),M(6),tt(i.menuStatus())}},dependencies:[nn,tn,zA,If,Ef,Bx,kx,Ax,Et],styles:[`
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
}`],changeDetection:1})};var F=class{layout=`right`;animate=!0;hasBackdrop=!0;showCloseButton=!0;title=``;headerText=``;disableClose=!1;disableCloseOnBackdropClick=!1;hasConfirmCloseGuard=!0;constructor(e){Object.assign(this,e)}};function he(r,e){if(r&1){let t=hs();W(0,`div`,1)(1,`button`,2),Ce$1(`click`,function(){Ur(t);let a=de();return qr(a.confirm())}),Ve(2,`Confirm`),Q(),W(3,`button`,3),Ce$1(`click`,function(){Ur(t);let a=de();return qr(a.close())}),Ve(4,`Cancel`),Q()()}}var I=class r extends en{confirm(){this.modal?.close(`confirm`)}static ɵfac=(()=>{let e;return function(i){return(e||(e=En(r)))(i||r)}})();static ɵcmp=se({type:r,selectors:[[`app-confirm-close`]],features:[Je],decls:3,vars:1,consts:[[`class`,`button-container`,4,`appModalFooter`],[1,`button-container`],[`bx-button`,``,`variant`,`filled`,`color`,`success`,3,`click`],[`bx-button`,``,`variant`,`filled`,`color`,`danger`,3,`click`]],template:function(t,i){t&1&&(W(0,`div`),Ve(1),Q(),T_(2,he,5,0,`div`,0)),t&2&&(M(),xr(` `,i.data,`
`))},dependencies:[tn,If],styles:[`
.button-container[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 1rem;
}
.button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {
  cursor: pointer;
}`],changeDetection:1})};var xe=()=>({required:`Choose a layout.`});function _e(r,e){if(r&1&&(W(0,`bx-select`,23),J0(),Q()),r&2){let t=e.$implicit,i=de();he$1(`clearable`,!1)(`label`,t)(`formControlName`,t)(`options`,i.breakpointSelectOptions),tN()}}var pe=class r{modals=f(fe$1);layoutOptions=[`center`,`right`,`left`,`bottom-sheet`];layoutSelectOptions=this.layoutOptions.map(e=>({label:e.split(`-`).map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(` `),value:e}));breakpointSelectOptions=[{label:`None`,value:`none`},...this.layoutSelectOptions];breakpointKeys=Object.keys(Ts);form;resultMessage=_(`Open a modal to preview its layout and close behavior.`);modalReadmePath=_(`assets/modal-readme/README.md`);codeFiles=[{title:`modal-usage.ts`,path:`assets/code-snippets/modal/modal-usage.ts.txt`,language:`typescript`},{title:`modal.ts`,path:`assets/code-snippets/modal/modal.ts.txt`,language:`typescript`},{title:`modal.html`,path:`assets/code-snippets/modal/modal.html.txt`,language:`html`},{title:`modal.scss`,path:`assets/code-snippets/modal/modal.scss.txt`,language:`scss`},{title:`confirm-close.ts`,path:`assets/code-snippets/modal/confirm-close-modal.ts.txt`,language:`typescript`},{title:`confirm-close.html`,path:`assets/code-snippets/modal/confirm-close-modal.html.txt`,language:`html`},{title:`confirm-close.scss`,path:`assets/code-snippets/modal/confirm-close-modal.scss.txt`,language:`scss`},{title:`styles.scss`,path:`assets/code-snippets/modal/styles.scss.txt`,language:`scss`}];openedCount=0;constructor(){let e={layout:new xS(`right`),animate:new xS(!0),hasBackdrop:new xS(!0),showCloseButton:new xS(!0),title:new xS(`Review your changes`),headerText:new xS(`Workspace settings`),disableClose:new xS(!1),disableCloseOnBackdropClick:new xS(!1),hasConfirmCloseGuard:new xS(!0)};this.breakpointKeys.forEach(t=>{let i=`none`;t===`sm`&&(i=`bottom-sheet`),t===`xl`&&(i=`center`),e[t]=new xS(i)}),this.form=new tf(e)}openModal(){let e=this.createRequest();if(!e)return;let t=e.headerText===``?null:e.headerText;this.modals.open(B,{header:t===void 0?void 0:{text:t,icon:{name:`info`,color:`text-info`,bgColor:`auto`}},data:{title:e.title,body:`This dialog shares the application theme and appearance settings. Confirm to apply the example, or cancel to return to the playground.`,openedCount:this.openedCount},style:{layout:e.layout,animate:e.animate,hasBackdrop:e.hasBackdrop,showCloseButton:e.showCloseButton,breakpoints:this.getBreakpointsFromRequest(e)},disableClose:e.disableClose,disableCloseOnBackdropClick:e.disableCloseOnBackdropClick,closeGuard:e.hasConfirmCloseGuard?new Ze(I,{data:`Are you sure you want to close the modal?`,header:{text:`Unsaved Changes`},style:{showCloseButton:!1}}):void 0}).afterClosed().subscribe(a=>{a.state===`confirm`&&a.data?(this.openedCount=a.data.openedCount,this.resultMessage.set(`Changes confirmed. This modal has been confirmed ${this.openedCount} time${this.openedCount===1?``:`s`}.`)):this.resultMessage.set(`Modal closed. No changes were applied.`)})}createRequest(){if(this.form.invalid)return;let e=this.form.getRawValue();return new F(Object.fromEntries(Object.entries(e).map(([i,a])=>[i,a===null?void 0:a])))}getBreakpointsFromRequest(e){let t={};return this.breakpointKeys.forEach(i=>{let a=e[i];a&&a!==`none`&&(t[i]=a)}),t}static ɵfac=function(t){return new(t||r)};static ɵcmp=se({type:r,selectors:[[`app-modal`]],decls:47,vars:10,consts:[[`configPanel`,``],[1,`page-heading`],[1,`eyebrow`],[1,`demo-container`],[3,`matchHeight`,`codeFiles`,`readmePath`],[`bxSurface`,``,1,`config-container`],[1,`config-header`],[1,`hint`],[`routerLink`,`/appearance`],[`role`,`status`,1,`hint`],[1,`config-form`,`form-section`,3,`formGroup`],[1,`form-section`],[`label`,`Default Layout`,`formControlName`,`layout`,3,`clearable`,`errorMessages`,`options`],[`label`,`Header Text`,`formControlName`,`headerText`],[`label`,`Title`,`formControlName`,`title`],[1,`form-checkboxes`],[`label`,`Animate`,`formControlName`,`animate`],[`label`,`Has Backdrop`,`formControlName`,`hasBackdrop`],[`label`,`Show Close Button`,`formControlName`,`showCloseButton`],[`label`,`Disable Close (Global)`,`formControlName`,`disableClose`,`tooltip`,`Prevents closing via ESC key or backdrop clicks.`],[`label`,`Disable Backdrop Click`,`formControlName`,`disableCloseOnBackdropClick`],[`label`,`Use Confirm Close Guard`,`formControlName`,`hasConfirmCloseGuard`,`tooltip`,`Intercepts the close event and prompts the user to confirm.`],[1,`breakpoints-grid`],[3,`clearable`,`label`,`formControlName`,`options`],[1,`actions`],[`bx-button`,``,`variant`,`filled`,`color`,`grayscale`,3,`click`,`disabled`]],template:function(t,i){if(t&1&&(W(0,`header`,1)(1,`p`,2),Ve(2,`Overlay components`),Q(),W(3,`h1`),Ve(4,`Modals`),Q(),W(5,`p`),Ve(6,`Configure dialogs, side panels, and sheets using the shared Blocks theme.`),Q()(),W(7,`div`,3),Pe(8,`app-component-info`,4),W(9,`div`,5,0)(11,`div`,6),Ve(12,`Configurator`),Q(),W(13,`p`,7),Ve(14,`Uses your shared appearance. `),W(15,`a`,8),Ve(16,`Adjust appearance settings`),Q()(),W(17,`p`,9),Ve(18),Q(),W(19,`form`,10)(20,`div`,11)(21,`h3`),Ve(22,`General Style`),Q(),W(23,`bx-select`,12),J0(),Q(),W(24,`bx-input-field`,13),J0(),Q(),W(25,`bx-input-field`,14),J0(),Q()(),W(26,`div`,11)(27,`h3`),Ve(28,`Behavior & Toggles`),Q(),W(29,`div`,15)(30,`bx-checkbox`,16),J0(),Q(),W(31,`bx-checkbox`,17),J0(),Q(),W(32,`bx-checkbox`,18),J0(),Q(),W(33,`bx-checkbox`,19),J0(),Q(),W(34,`bx-checkbox`,20),J0(),Q(),W(35,`bx-checkbox`,21),J0(),Q()()(),W(36,`div`,11)(37,`h3`),Ve(38,`Responsive Breakpoints`),Q(),W(39,`p`,7),Ve(40,`Select 'none' to ignore that breakpoint.`),Q(),W(41,`div`,22),Yr(42,_e,1,4,`bx-select`,23,zu),Q()()(),W(44,`div`,24)(45,`button`,25),Ce$1(`click`,function(){return i.openModal()}),Ve(46,` Open Modal `),Q()()()()),t&2){let a=Ya(10);M(8),he$1(`matchHeight`,a)(`codeFiles`,i.codeFiles)(`readmePath`,i.modalReadmePath()),M(10),tt(i.resultMessage()),M(),he$1(`formGroup`,i.form),M(4),he$1(`clearable`,!1)(`errorMessages`,Wk(9,xe))(`options`,i.layoutSelectOptions),tN(),M(),tN(),M(),tN(),M(5),tN(),M(),tN(),M(),tN(),M(),tN(),M(),tN(),M(),tN(),M(7),Kr(i.breakpointKeys),M(3),he$1(`disabled`,i.form.invalid)}},dependencies:[vn,kE,ID,ZK,YK,$K,GK,Vv,GP,P,If,Ti,Qn,ki],styles:[`
[_nghost-%COMP%] {
  width: 100%;
}
.breakpoints-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 1rem;
}`],changeDetection:1})};export{pe as Modal};