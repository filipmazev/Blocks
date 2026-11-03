import{$ as K9,Bn as dp,Fr as ne,Gi as zD,Gr as p,In as ct,Kt as W9,Lt as T,M as G9,Mi as we,Mt as SA,Oi as vn,P as GS,Pn as cg,Qr as q_,Qt as Xn,Rt as TN,Sr as k,St as Ps,Tt as QE,Ui as ys,Ut as V,W as Hx,X as Je,Yt as X9,Zr as qE,ai as rl,an as Z,c as Bp,ct as MN,f as D,h as DL,ht as Op,in as Yv,ji as wR,k as Fr,ln as _,o as An,oi as rt,pn as _e$1,r as $E,rr as gn,sn as Zn,tt as Kn,un as _A,ut as Me,zn as de}from"./chunk-zHe8pzQe.js";import{E as ki,b as Ti,y as Qn}from"./main-5RV6DQBL.js";import"./chunk-cyGuHfQv.js";import{t as P}from"./chunk-DbfHFfas.js";import{a as nn,i as fe$1,n as Ze,o as tn,r as en}from"./chunk-DWhxPQq4.js";var fe=(r,e)=>({"side-modal":r,"center-modal":e});function be(r,e){if(r&1&&(T(0,`div`),we(1),k()),r&2){let t=ne();D(),Fr(` `,t.data.title,`
`)}}function ge(r,e){if(r&1){let t=Xn();T(0,`bx-menu`)(1,`bx-menu-item`,12),de(`action`,function(){gn(t);let a=ne();return vn(a.selectAction(`Edit details`))}),k(),T(2,`bx-menu-item`,13),de(`action`,function(){gn(t);let a=ne();return vn(a.selectAction(`Duplicate`))}),k()()}}function ye(r,e){if(r&1){let t=Xn();T(0,`bx-menu`)(1,`bx-menu-item`,14),de(`action`,function(){gn(t);let a=ne();return vn(a.selectAction(`Copy link`))}),k(),T(2,`bx-menu-item`,15),de(`action`,function(){gn(t);let a=ne();return vn(a.selectAction(`Archive`))}),k(),T(3,`bx-menu-item`,16),de(`action`,function(){gn(t);let a=ne();return vn(a.selectAction(`Delete`))}),k()()}r&2&&(D(3),Z(`danger`,!0))}function Ce(r,e){if(r&1){let t=Xn();T(0,`div`,17)(1,`button`,18),de(`click`,function(){gn(t);let a=ne();return vn(a.confirm())}),we(2,`Confirm`),k(),T(3,`button`,19),de(`click`,function(){gn(t);let a=ne();return vn(a.close())}),we(4,`Cancel`),k()()}}var B=class r extends en{menuStatus=_(`Try either menu. Actions keep this modal open.`);isSideModal=_(!1);isCenteredModal=_(!1);onModalInit(){let e=this.modal?.modalConfig?.style.layout;this.isSideModal.set(e===`right`||e===`left`),this.isCenteredModal.set(e===`center`)}confirm(){this.modal?.close(`confirm`,{openedCount:this.data.openedCount+1})}selectAction(e){this.menuStatus.set(`${e} selected. The modal is still open.`)}static ɵfac=(()=>{let e;return function(i){return(e||(e=An(r)))(i||r)}})();static ɵcmp=V({type:r,selectors:[[`app-demo-modal`]],features:[rt],decls:22,vars:8,consts:[[`dropdownActions`,``],[`contextActions`,``],[4,`appModalHeader`],[1,`demo-modal-content-class`,3,`ngClass`],[`aria-label`,`Menus inside this modal`,1,`modal-menu-demo`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`primary`,`placement`,`bottom`,3,`bxDropdown`],[`name`,`chevron-down`,`size`,`16`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`grayscale`,1,`modal-context-target`,3,`bxContextMenu`],[`name`,`mouse-pointer-2`,`size`,`16`],[1,`menu-hint`],[`role`,`status`,1,`menu-status`],[`class`,`button-container`,4,`appModalFooter`],[`label`,`Edit details`,`icon`,`pencil`,3,`action`],[`label`,`Duplicate`,`icon`,`copy`,3,`action`],[`label`,`Copy link`,`icon`,`link`,3,`action`],[`label`,`Archive`,`icon`,`archive`,3,`action`],[`label`,`Delete`,`icon`,`trash-2`,3,`action`,`danger`],[1,`button-container`],[`bx-button`,``,`variant`,`filled`,`color`,`success`,3,`click`],[`bx-button`,``,`variant`,`filled`,`color`,`danger`,3,`click`]],template:function(t,i){if(t&1&&(q_(0,be,2,1,`div`,2),T(1,`div`,3)(2,`div`),we(3),k(),T(4,`section`,4)(5,`h3`),we(6,`Menus inside the modal`),k(),T(7,`button`,5),we(8,` Open actions`),_e$1(9,`bx-icon`,6),k(),T(10,`button`,7),_e$1(11,`bx-icon`,8),we(12,`Right-click or hold for more actions `),k(),T(13,`p`,9),we(14,`On touch screens, touch and hold for more actions. With a keyboard, focus the example and press Shift + F10. Escape closes the menu first.`),k(),T(15,`p`,10),we(16),k()()(),q_(17,ge,3,0,`ng-template`,null,0,cg)(19,ye,4,1,`ng-template`,null,1,cg)(21,Ce,5,0,`div`,11)),t&2){let a=rl(18),ue=rl(20);D(),Z(`ngClass`,SA(5,fe,i.isSideModal(),i.isCenteredModal())),D(2),Fr(` `,i.data.body,` `),D(4),Z(`bxDropdown`,a),D(3),Z(`bxContextMenu`,ue),D(6),Me(i.menuStatus())}},dependencies:[nn,tn,wR,Bp,Op,QE,qE,$E,Je],styles:[`
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
}`],changeDetection:1})};var F=class{layout=`right`;animate=!0;hasBackdrop=!0;showCloseButton=!0;title=``;headerText=``;disableClose=!1;disableCloseOnBackdropClick=!1;hasConfirmCloseGuard=!0;constructor(e){Object.assign(this,e)}};function he(r,e){if(r&1){let t=Xn();T(0,`div`,1)(1,`button`,2),de(`click`,function(){gn(t);let a=ne();return vn(a.confirm())}),we(2,`Confirm`),k(),T(3,`button`,3),de(`click`,function(){gn(t);let a=ne();return vn(a.close())}),we(4,`Cancel`),k()()}}var I=class r extends en{confirm(){this.modal?.close(`confirm`)}static ɵfac=(()=>{let e;return function(i){return(e||(e=An(r)))(i||r)}})();static ɵcmp=V({type:r,selectors:[[`app-confirm-close`]],features:[rt],decls:3,vars:1,consts:[[`class`,`button-container`,4,`appModalFooter`],[1,`button-container`],[`bx-button`,``,`variant`,`filled`,`color`,`success`,3,`click`],[`bx-button`,``,`variant`,`filled`,`color`,`danger`,3,`click`]],template:function(t,i){t&1&&(T(0,`div`),we(1),k(),q_(2,he,5,0,`div`,0)),t&2&&(D(),Fr(` `,i.data,`
`))},dependencies:[tn,Bp],styles:[`
.button-container[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 1rem;
}
.button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {
  cursor: pointer;
}`],changeDetection:1})};var xe=()=>({required:`Choose a layout.`});function _e(r,e){if(r&1&&(T(0,`bx-select`,23),MN(),k()),r&2){let t=e.$implicit,i=ne();Z(`clearable`,!1)(`label`,t)(`formControlName`,t)(`options`,i.breakpointSelectOptions),TN()}}var pe=class r{modals=p(fe$1);layoutOptions=[`center`,`right`,`left`,`bottom-sheet`];layoutSelectOptions=this.layoutOptions.map(e=>({label:e.split(`-`).map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(` `),value:e}));breakpointSelectOptions=[{label:`None`,value:`none`},...this.layoutSelectOptions];breakpointKeys=Object.keys(Ps);form;resultMessage=_(`Open a modal to preview its layout and close behavior.`);modalReadmePath=_(`assets/modal-readme/README.md`);codeFiles=[{title:`modal-usage.ts`,path:`assets/code-snippets/modal/modal-usage.ts.txt`,language:`typescript`},{title:`modal.ts`,path:`assets/code-snippets/modal/modal.ts.txt`,language:`typescript`},{title:`modal.html`,path:`assets/code-snippets/modal/modal.html.txt`,language:`html`},{title:`modal.scss`,path:`assets/code-snippets/modal/modal.scss.txt`,language:`scss`},{title:`confirm-close.ts`,path:`assets/code-snippets/modal/confirm-close-modal.ts.txt`,language:`typescript`},{title:`confirm-close.html`,path:`assets/code-snippets/modal/confirm-close-modal.html.txt`,language:`html`},{title:`confirm-close.scss`,path:`assets/code-snippets/modal/confirm-close-modal.scss.txt`,language:`scss`},{title:`styles.scss`,path:`assets/code-snippets/modal/styles.scss.txt`,language:`scss`}];openedCount=0;constructor(){let e={layout:new Hx(`right`),animate:new Hx(!0),hasBackdrop:new Hx(!0),showCloseButton:new Hx(!0),title:new Hx(`Review your changes`),headerText:new Hx(`Workspace settings`),disableClose:new Hx(!1),disableCloseOnBackdropClick:new Hx(!1),hasConfirmCloseGuard:new Hx(!0)};this.breakpointKeys.forEach(t=>{let i=`none`;t===`sm`&&(i=`bottom-sheet`),t===`xl`&&(i=`center`),e[t]=new Hx(i)}),this.form=new dp(e)}openModal(){let e=this.createRequest();if(!e)return;let t=e.headerText===``?null:e.headerText;this.modals.open(B,{header:t===void 0?void 0:{text:t,icon:{name:`info`,color:`text-info`,bgColor:`auto`}},data:{title:e.title,body:`This dialog shares the application theme and appearance settings. Confirm to apply the example, or cancel to return to the playground.`,openedCount:this.openedCount},style:{layout:e.layout,animate:e.animate,hasBackdrop:e.hasBackdrop,showCloseButton:e.showCloseButton,breakpoints:this.getBreakpointsFromRequest(e)},disableClose:e.disableClose,disableCloseOnBackdropClick:e.disableCloseOnBackdropClick,closeGuard:e.hasConfirmCloseGuard?new Ze(I,{data:`Are you sure you want to close the modal?`,header:{text:`Unsaved Changes`},style:{showCloseButton:!1}}):void 0}).afterClosed().subscribe(a=>{a.state===`confirm`&&a.data?(this.openedCount=a.data.openedCount,this.resultMessage.set(`Changes confirmed. This modal has been confirmed ${this.openedCount} time${this.openedCount===1?``:`s`}.`)):this.resultMessage.set(`Modal closed. No changes were applied.`)})}createRequest(){if(this.form.invalid)return;let e=this.form.getRawValue();return new F(Object.fromEntries(Object.entries(e).map(([i,a])=>[i,a===null?void 0:a])))}getBreakpointsFromRequest(e){let t={};return this.breakpointKeys.forEach(i=>{let a=e[i];a&&a!==`none`&&(t[i]=a)}),t}static ɵfac=function(t){return new(t||r)};static ɵcmp=V({type:r,selectors:[[`app-modal`]],decls:47,vars:10,consts:[[`configPanel`,``],[1,`page-heading`],[1,`eyebrow`],[1,`demo-container`],[3,`matchHeight`,`codeFiles`,`readmePath`],[`bxSurface`,``,1,`config-container`],[1,`config-header`],[1,`hint`],[`routerLink`,`/appearance`],[`role`,`status`,1,`hint`],[1,`config-form`,`form-section`,3,`formGroup`],[1,`form-section`],[`label`,`Default Layout`,`formControlName`,`layout`,`subscriptSizing`,`dynamic`,3,`clearable`,`errorMessages`,`options`],[`label`,`Header Text`,`formControlName`,`headerText`,`subscriptSizing`,`dynamic`],[`label`,`Title`,`formControlName`,`title`,`subscriptSizing`,`dynamic`],[1,`form-checkboxes`],[`label`,`Animate`,`formControlName`,`animate`,`subscriptSizing`,`dynamic`],[`label`,`Has Backdrop`,`formControlName`,`hasBackdrop`,`subscriptSizing`,`dynamic`],[`label`,`Show Close Button`,`formControlName`,`showCloseButton`,`subscriptSizing`,`dynamic`],[`label`,`Disable Close (Global)`,`formControlName`,`disableClose`,`tooltip`,`Prevents closing via ESC key or backdrop clicks.`,`subscriptSizing`,`dynamic`],[`label`,`Disable Backdrop Click`,`formControlName`,`disableCloseOnBackdropClick`,`subscriptSizing`,`dynamic`],[`label`,`Use Confirm Close Guard`,`formControlName`,`hasConfirmCloseGuard`,`tooltip`,`Intercepts the close event and prompts the user to confirm.`,`subscriptSizing`,`dynamic`],[1,`breakpoints-grid`],[`subscriptSizing`,`dynamic`,3,`clearable`,`label`,`formControlName`,`options`],[1,`actions`],[`bx-button`,``,`variant`,`filled`,`color`,`grayscale`,3,`click`,`disabled`]],template:function(t,i){if(t&1&&(T(0,`header`,1)(1,`p`,2),we(2,`Overlay components`),k(),T(3,`h1`),we(4,`Modals`),k(),T(5,`p`),we(6,`Configure dialogs, side panels, and sheets using the shared Blocks theme.`),k()(),T(7,`div`,3),_e$1(8,`app-component-info`,4),T(9,`div`,5,0)(11,`div`,6),we(12,`Configurator`),k(),T(13,`p`,7),we(14,`Uses your shared appearance. `),T(15,`a`,8),we(16,`Adjust appearance settings`),k()(),T(17,`p`,9),we(18),k(),T(19,`form`,10)(20,`div`,11)(21,`h3`),we(22,`General Style`),k(),T(23,`bx-select`,12),MN(),k(),T(24,`bx-input-field`,13),MN(),k(),T(25,`bx-input-field`,14),MN(),k()(),T(26,`div`,11)(27,`h3`),we(28,`Behavior & Toggles`),k(),T(29,`div`,15)(30,`bx-checkbox`,16),MN(),k(),T(31,`bx-checkbox`,17),MN(),k(),T(32,`bx-checkbox`,18),MN(),k(),T(33,`bx-checkbox`,19),MN(),k(),T(34,`bx-checkbox`,20),MN(),k(),T(35,`bx-checkbox`,21),MN(),k()()(),T(36,`div`,11)(37,`h3`),we(38,`Responsive Breakpoints`),k(),T(39,`p`,7),we(40,`Select 'none' to ignore that breakpoint.`),k(),T(41,`div`,22),Kn(42,_e,1,4,`bx-select`,23,ys),k()()(),T(44,`div`,24)(45,`button`,25),de(`click`,function(){return i.openModal()}),we(46,` Open Modal `),k()()()()),t&2){let a=rl(10);D(8),Z(`matchHeight`,a)(`codeFiles`,i.codeFiles)(`readmePath`,i.modalReadmePath()),D(10),Me(i.resultMessage()),D(),Z(`formGroup`,i.form),D(4),Z(`clearable`,!1)(`errorMessages`,_A(9,xe))(`options`,i.layoutSelectOptions),TN(),D(),TN(),D(),TN(),D(5),TN(),D(),TN(),D(),TN(),D(),TN(),D(),TN(),D(),TN(),D(7),Zn(i.breakpointKeys),D(3),Z(`disabled`,i.form.invalid)}},dependencies:[ct,GS,zD,X9,K9,G9,W9,Yv,DL,P,Bp,Ti,Qn,ki],styles:[`
[_nghost-%COMP%] {
  width: 100%;
}
.breakpoints-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 1rem;
}`],changeDetection:1})};export{pe as Modal};