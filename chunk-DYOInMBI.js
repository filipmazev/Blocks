import{Bn as pN,C as Cp,Fn as o5,Gt as c5,H as KD,In as o_,Kt as c_,Lt as _u,Nt as _T,Qn as s_,Rt as a5,S as Co,Sr as yk,Tn as l_,Tr as yx,W as LT,Xn as sA,Y as Mr,Yn as rt,Z as Nc,Zn as sN,_ as Bt,an as fi,bn as jt,cn as gk,cr as ur,dr as vo,f as BC,fn as hi,gn as it,gr as wp,gt as Tw,hr as wk,jn as nd,ln as gt,nt as Po,ot as S,pn as i5,pr as wE,s as $v,vt as Uv,w as Cx,xn as kT,xt as Vn,z as It,zn as p}from"./chunk-Cx6yy8Y4.js";import{i as j,n as ue,r as L,t as S$1}from"./main-5YIHW4HX.js";import"./chunk-CJ-pL4VN.js";import{a as nn,i as fe$1,n as Ze,o as tn,r as en}from"./chunk-CCKabNBP.js";import{t as R}from"./chunk-tYhMPkAg.js";var fe=(r,e)=>({"side-modal":r,"center-modal":e});function be(r,e){if(r&1&&(It(0,`div`),Co(1),Bt()),r&2){let t=ur();jt(),hi(` `,t.data.title,`
`)}}function Ce(r,e){if(r&1){let t=kT();It(0,`bx-menu`)(1,`bx-menu-item`,12),it(`action`,function(){Uv(t);let a=ur();return $v(a.selectAction(`Edit details`))}),Bt(),It(2,`bx-menu-item`,13),it(`action`,function(){Uv(t);let a=ur();return $v(a.selectAction(`Duplicate`))}),Bt()()}}function ge(r,e){if(r&1){let t=kT();It(0,`bx-menu`)(1,`bx-menu-item`,14),it(`action`,function(){Uv(t);let a=ur();return $v(a.selectAction(`Copy link`))}),Bt(),It(2,`bx-menu-item`,15),it(`action`,function(){Uv(t);let a=ur();return $v(a.selectAction(`Archive`))}),Bt(),It(3,`bx-menu-item`,16),it(`action`,function(){Uv(t);let a=ur();return $v(a.selectAction(`Delete`))}),Bt()()}r&2&&(jt(3),vo(`danger`,!0))}function ye(r,e){if(r&1){let t=kT();It(0,`div`,17)(1,`button`,18),it(`click`,function(){Uv(t);let a=ur();return $v(a.confirm())}),Co(2,`Confirm`),Bt(),It(3,`button`,19),it(`click`,function(){Uv(t);let a=ur();return $v(a.close())}),Co(4,`Cancel`),Bt()()}}var B=class r extends Ze{menuStatus=S(`Try either menu. Actions keep this modal open.`);isSideModal=S(!1);isCenteredModal=S(!1);onModalInit(){let e=this.modal?.modalConfig?.style.layout;this.isSideModal.set(e===`right`||e===`left`),this.isCenteredModal.set(e===`center`)}confirm(){this.modal?.close(`confirm`,{openedCount:this.data.openedCount+1})}selectAction(e){this.menuStatus.set(`${e} selected. The modal is still open.`)}static ɵfac=(()=>{let e;return function(i){return(e||(e=Vn(r)))(i||r)}})();static ɵcmp=gt({type:r,selectors:[[`app-demo-modal`]],features:[rt],decls:22,vars:8,consts:[[`dropdownActions`,``],[`contextActions`,``],[4,`appModalHeader`],[1,`demo-modal-content-class`,3,`ngClass`],[`aria-label`,`Menus inside this modal`,1,`modal-menu-demo`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`primary`,`placement`,`bottom`,3,`bxDropdown`],[`name`,`chevron-down`,`size`,`16`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`grayscale`,1,`modal-context-target`,3,`bxContextMenu`],[`name`,`mouse-pointer-2`,`size`,`16`],[1,`menu-hint`],[`role`,`status`,1,`menu-status`],[`class`,`button-container`,4,`appModalFooter`],[`label`,`Edit details`,`icon`,`pencil`,3,`action`],[`label`,`Duplicate`,`icon`,`copy`,3,`action`],[`label`,`Copy link`,`icon`,`link`,3,`action`],[`label`,`Archive`,`icon`,`archive`,3,`action`],[`label`,`Delete`,`icon`,`trash-2`,3,`action`,`danger`],[1,`button-container`],[`bx-button`,``,`variant`,`filled`,`color`,`success`,3,`click`],[`bx-button`,``,`variant`,`filled`,`color`,`danger`,3,`click`]],template:function(t,i){if(t&1&&(BC(0,be,2,1,`div`,2),It(1,`div`,3)(2,`div`),Co(3),Bt(),It(4,`section`,4)(5,`h3`),Co(6,`Menus inside the modal`),Bt(),It(7,`button`,5),Co(8,` Open actions`),fi(9,`bx-icon`,6),Bt(),It(10,`button`,7),fi(11,`bx-icon`,8),Co(12,`Right-click or hold for more actions `),Bt(),It(13,`p`,9),Co(14,`On touch screens, touch and hold for more actions. With a keyboard, focus the example and press Shift + F10. Escape closes the menu first.`),Bt(),It(15,`p`,10),Co(16),Bt()()(),BC(17,Ce,3,0,`ng-template`,null,0,wk)(19,ge,4,1,`ng-template`,null,1,wk)(21,ye,5,0,`div`,11)),t&2){let a=LT(18),ue=LT(20);jt(),vo(`ngClass`,yk(5,fe,i.isSideModal(),i.isCenteredModal())),jt(2),hi(` `,i.data.body,` `),jt(4),vo(`bxDropdown`,a),jt(3),vo(`bxContextMenu`,ue),jt(6),Nc(i.menuStatus())}},dependencies:[en,nn,sA,S$1,c_,l_,o_,s_,nd],styles:[`
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
}`],changeDetection:1})};var F=class{layout=`right`;animate=!0;hasBackdrop=!0;showCloseButton=!0;title=``;headerText=``;disableClose=!1;disableCloseOnBackdropClick=!1;hasConfirmCloseGuard=!0;constructor(e){Object.assign(this,e)}};function he(r,e){if(r&1){let t=kT();It(0,`div`,1)(1,`button`,2),it(`click`,function(){Uv(t);let a=ur();return $v(a.confirm())}),Co(2,`Confirm`),Bt(),It(3,`button`,3),it(`click`,function(){Uv(t);let a=ur();return $v(a.close())}),Co(4,`Cancel`),Bt()()}}var I=class r extends Ze{confirm(){this.modal?.close(`confirm`)}static ɵfac=(()=>{let e;return function(i){return(e||(e=Vn(r)))(i||r)}})();static ɵcmp=gt({type:r,selectors:[[`app-confirm-close`]],features:[rt],decls:3,vars:1,consts:[[`class`,`button-container`,4,`appModalFooter`],[1,`button-container`],[`bx-button`,``,`variant`,`filled`,`color`,`success`,3,`click`],[`bx-button`,``,`variant`,`filled`,`color`,`danger`,3,`click`]],template:function(t,i){t&1&&(It(0,`div`),Co(1),Bt(),BC(2,he,5,0,`div`,0)),t&2&&(jt(),hi(` `,i.data,`
`))},dependencies:[nn,S$1],styles:[`
.button-container[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 1rem;
}
.button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {
  cursor: pointer;
}`],changeDetection:1})};var xe=()=>({required:`Choose a layout.`});function _e(r,e){if(r&1&&(It(0,`bx-select`,23),yx(),Bt()),r&2){let t=e.$implicit,i=ur();vo(`label`,t)(`formControlName`,t)(`options`,i.breakpointSelectOptions),Cx()}}var pe=class r{modals=p(fe$1);layoutOptions=[`center`,`right`,`left`,`bottom-sheet`];layoutSelectOptions=this.layoutOptions.map(e=>({label:e.split(`-`).map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(` `),value:e}));breakpointSelectOptions=[{label:`None`,value:`none`},...this.layoutSelectOptions];breakpointKeys=Object.keys(Po);form;resultMessage=S(`Open a modal to preview its layout and close behavior.`);modalReadmePath=S(`assets/modal-readme/README.md`);codeFiles=[{title:`modal-usage.ts`,path:`assets/code-snippets/modal/modal-usage.ts.txt`,language:`typescript`},{title:`modal.ts`,path:`assets/code-snippets/modal/modal.ts.txt`,language:`typescript`},{title:`modal.html`,path:`assets/code-snippets/modal/modal.html.txt`,language:`html`},{title:`modal.scss`,path:`assets/code-snippets/modal/modal.scss.txt`,language:`scss`},{title:`confirm-close.ts`,path:`assets/code-snippets/modal/confirm-close-modal.ts.txt`,language:`typescript`},{title:`confirm-close.html`,path:`assets/code-snippets/modal/confirm-close-modal.html.txt`,language:`html`},{title:`confirm-close.scss`,path:`assets/code-snippets/modal/confirm-close-modal.scss.txt`,language:`scss`},{title:`styles.scss`,path:`assets/code-snippets/modal/styles.scss.txt`,language:`scss`}];openedCount=0;constructor(){let e={layout:new wE(`right`),animate:new wE(!0),hasBackdrop:new wE(!0),showCloseButton:new wE(!0),title:new wE(`Review your changes`),headerText:new wE(`Workspace settings`),disableClose:new wE(!1),disableCloseOnBackdropClick:new wE(!1),hasConfirmCloseGuard:new wE(!0)};this.breakpointKeys.forEach(t=>{let i=`none`;t===`sm`&&(i=`bottom-sheet`),t===`xl`&&(i=`center`),e[t]=new wE(i)}),this.form=new KD(e)}openModal(){let e=this.createRequest();if(!e)return;let t=e.headerText===``?null:e.headerText;this.modals.open(B,{header:t===void 0?void 0:{text:t,icon:{name:`info`,color:`text-info`,bgColor:`auto`}},data:{title:e.title,body:`This dialog shares the application theme and appearance settings. Confirm to apply the example, or cancel to return to the playground.`,openedCount:this.openedCount},style:{layout:e.layout,animate:e.animate,hasBackdrop:e.hasBackdrop,showCloseButton:e.showCloseButton,breakpoints:this.getBreakpointsFromRequest(e)},disableClose:e.disableClose,disableCloseOnBackdropClick:e.disableCloseOnBackdropClick,closeGuard:e.hasConfirmCloseGuard?new tn(I,{data:`Are you sure you want to close the modal?`,header:{text:`Unsaved Changes`},style:{showCloseButton:!1}}):void 0}).afterClosed().subscribe(a=>{a.state===`confirm`&&a.data?(this.openedCount=a.data.openedCount,this.resultMessage.set(`Changes confirmed. This modal has been confirmed ${this.openedCount} time${this.openedCount===1?``:`s`}.`)):this.resultMessage.set(`Modal closed. No changes were applied.`)})}createRequest(){if(this.form.invalid)return;let e=this.form.getRawValue();return new F(Object.fromEntries(Object.entries(e).map(([i,a])=>[i,a===null?void 0:a])))}getBreakpointsFromRequest(e){let t={};return this.breakpointKeys.forEach(i=>{let a=e[i];a&&a!==`none`&&(t[i]=a)}),t}static ɵfac=function(t){return new(t||r)};static ɵcmp=gt({type:r,selectors:[[`app-modal`]],decls:47,vars:9,consts:[[`configPanel`,``],[1,`page-heading`],[1,`eyebrow`],[1,`demo-container`],[3,`matchHeight`,`codeFiles`,`readmePath`],[`bxSurface`,``,1,`config-container`],[1,`config-header`],[1,`hint`],[`routerLink`,`/appearance`],[`role`,`status`,1,`hint`],[1,`config-form`,`form-section`,3,`formGroup`],[1,`form-section`],[`label`,`Default Layout`,`formControlName`,`layout`,3,`errorMessages`,`options`],[`label`,`Header Text`,`formControlName`,`headerText`],[`label`,`Title`,`formControlName`,`title`],[1,`form-checkboxes`],[`label`,`Animate`,`formControlName`,`animate`],[`label`,`Has Backdrop`,`formControlName`,`hasBackdrop`],[`label`,`Show Close Button`,`formControlName`,`showCloseButton`],[`label`,`Disable Close (Global)`,`formControlName`,`disableClose`,`tooltip`,`Prevents closing via ESC key or backdrop clicks.`],[`label`,`Disable Backdrop Click`,`formControlName`,`disableCloseOnBackdropClick`],[`label`,`Use Confirm Close Guard`,`formControlName`,`hasConfirmCloseGuard`,`tooltip`,`Intercepts the close event and prompts the user to confirm.`],[1,`breakpoints-grid`],[3,`label`,`formControlName`,`options`],[1,`actions`],[`bx-button`,``,`variant`,`filled`,`color`,`grayscale`,3,`click`,`disabled`]],template:function(t,i){if(t&1&&(It(0,`header`,1)(1,`p`,2),Co(2,`Overlay components`),Bt(),It(3,`h1`),Co(4,`Modals`),Bt(),It(5,`p`),Co(6,`Configure dialogs, side panels, and sheets using the shared Blocks theme.`),Bt()(),It(7,`div`,3),fi(8,`app-component-info`,4),It(9,`div`,5,0)(11,`div`,6),Co(12,`Configurator`),Bt(),It(13,`p`,7),Co(14,`Uses your shared appearance. `),It(15,`a`,8),Co(16,`Adjust appearance settings`),Bt()(),It(17,`p`,9),Co(18),Bt(),It(19,`form`,10)(20,`div`,11)(21,`h3`),Co(22,`General Style`),Bt(),It(23,`bx-select`,12),yx(),Bt(),It(24,`bx-input-field`,13),yx(),Bt(),It(25,`bx-input-field`,14),yx(),Bt()(),It(26,`div`,11)(27,`h3`),Co(28,`Behavior & Toggles`),Bt(),It(29,`div`,15)(30,`bx-checkbox`,16),yx(),Bt(),It(31,`bx-checkbox`,17),yx(),Bt(),It(32,`bx-checkbox`,18),yx(),Bt(),It(33,`bx-checkbox`,19),yx(),Bt(),It(34,`bx-checkbox`,20),yx(),Bt(),It(35,`bx-checkbox`,21),yx(),Bt()()(),It(36,`div`,11)(37,`h3`),Co(38,`Responsive Breakpoints`),Bt(),It(39,`p`,7),Co(40,`Select 'none' to ignore that breakpoint.`),Bt(),It(41,`div`,22),Cp(42,_e,1,3,`bx-select`,23,_T),Bt()()(),It(44,`div`,24)(45,`button`,25),it(`click`,function(){return i.openModal()}),Co(46,` Open Modal `),Bt()()()()),t&2){let a=LT(10);jt(8),vo(`matchHeight`,a)(`codeFiles`,i.codeFiles)(`readmePath`,i.modalReadmePath()),jt(10),Nc(i.resultMessage()),jt(),vo(`formGroup`,i.form),jt(4),vo(`errorMessages`,gk(8,xe))(`options`,i.layoutSelectOptions),Cx(),jt(),Cx(),jt(),Cx(),jt(5),Cx(),jt(),Cx(),jt(),Cx(),jt(),Cx(),jt(),Cx(),jt(),Cx(),jt(7),wp(i.breakpointKeys),jt(3),vo(`disabled`,i.form.invalid)}},dependencies:[Mr,_u,Tw,c5,a5,i5,o5,sN,pN,R,S$1,j,L,ue],styles:[`
[_nghost-%COMP%] {
  width: 100%;
}
.breakpoints-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 1rem;
}`],changeDetection:1})};export{pe as Modal};