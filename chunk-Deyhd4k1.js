import{An as rt,C as Bn,Cn as pe$1,Ct as VT,Dn as qo,F as Ei,Fn as vE,H as He,Ht as cd,It as _O,K as Jt,Kt as eS,Mn as tS,Nn as u6,On as re,P as Ea,Pn as us,Pt as Zo,Qt as gm,R as GD,Sn as p6,Tt as Vn,Ut as ce,Vt as c6,W as Ie,Xt as fn,Yt as f6,Z as Ke,an as hu,cn as it,ct as Pk,f as $d,gt as S,ht as Rk,i as j,j as Di,k as DA,mn as kS,n as fe$1,ot as Ow,p as $o,pn as kO,r as L,sn as ir,t as Se,tn as h,un as jT,ut as Q0,y as Ar,zn as we}from"./main-6SFMKCN2.js";import"./chunk-B1-mucoa.js";import{a as nn,i as fe$2,n as Ze,o as tn,r as en}from"./chunk-BsFJEm4K.js";import{t as P}from"./chunk-D_AbmyzM.js";var fe=(r,e)=>({"side-modal":r,"center-modal":e});function be(r,e){if(r&1&&(ce(0,`div`),Jt(1),pe$1()),r&2){let t=Ie();re(),ir(` `,t.data.title,`
`)}}function Ce(r,e){if(r&1){let t=Ea();ce(0,`bx-menu`)(1,`bx-menu-item`,12),He(`action`,function(){Di(t);let a=Ie();return Ei(a.selectAction(`Edit details`))}),pe$1(),ce(2,`bx-menu-item`,13),He(`action`,function(){Di(t);let a=Ie();return Ei(a.selectAction(`Duplicate`))}),pe$1()()}}function ge(r,e){if(r&1){let t=Ea();ce(0,`bx-menu`)(1,`bx-menu-item`,14),He(`action`,function(){Di(t);let a=Ie();return Ei(a.selectAction(`Copy link`))}),pe$1(),ce(2,`bx-menu-item`,15),He(`action`,function(){Di(t);let a=Ie();return Ei(a.selectAction(`Archive`))}),pe$1(),ce(3,`bx-menu-item`,16),He(`action`,function(){Di(t);let a=Ie();return Ei(a.selectAction(`Delete`))}),pe$1()()}r&2&&(re(3),Ke(`danger`,!0))}function ye(r,e){if(r&1){let t=Ea();ce(0,`div`,17)(1,`button`,18),He(`click`,function(){Di(t);let a=Ie();return Ei(a.confirm())}),Jt(2,`Confirm`),pe$1(),ce(3,`button`,19),He(`click`,function(){Di(t);let a=Ie();return Ei(a.close())}),Jt(4,`Cancel`),pe$1()()}}var B=class r extends Ze{menuStatus=S(`Try either menu. Actions keep this modal open.`);isSideModal=S(!1);isCenteredModal=S(!1);onModalInit(){let e=this.modal?.modalConfig?.style.layout;this.isSideModal.set(e===`right`||e===`left`),this.isCenteredModal.set(e===`center`)}confirm(){this.modal?.close(`confirm`,{openedCount:this.data.openedCount+1})}selectAction(e){this.menuStatus.set(`${e} selected. The modal is still open.`)}static ɵfac=(()=>{let e;return function(i){return(e||(e=fn(r)))(i||r)}})();static ɵcmp=we({type:r,selectors:[[`app-demo-modal`]],features:[rt],decls:22,vars:8,consts:[[`dropdownActions`,``],[`contextActions`,``],[4,`appModalHeader`],[1,`demo-modal-content-class`,3,`ngClass`],[`aria-label`,`Menus inside this modal`,1,`modal-menu-demo`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`primary`,`placement`,`bottom`,3,`bxDropdown`],[`name`,`chevron-down`,`size`,`16`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`grayscale`,1,`modal-context-target`,3,`bxContextMenu`],[`name`,`mouse-pointer-2`,`size`,`16`],[1,`menu-hint`],[`role`,`status`,1,`menu-status`],[`class`,`button-container`,4,`appModalFooter`],[`label`,`Edit details`,`icon`,`pencil`,3,`action`],[`label`,`Duplicate`,`icon`,`copy`,3,`action`],[`label`,`Copy link`,`icon`,`link`,3,`action`],[`label`,`Archive`,`icon`,`archive`,3,`action`],[`label`,`Delete`,`icon`,`trash-2`,3,`action`,`danger`],[1,`button-container`],[`bx-button`,``,`variant`,`filled`,`color`,`success`,3,`click`],[`bx-button`,``,`variant`,`filled`,`color`,`danger`,3,`click`]],template:function(t,i){if(t&1&&(Ow(0,be,2,1,`div`,2),ce(1,`div`,3)(2,`div`),Jt(3),pe$1(),ce(4,`section`,4)(5,`h3`),Jt(6,`Menus inside the modal`),pe$1(),ce(7,`button`,5),Jt(8,` Open actions`),it(9,`bx-icon`,6),pe$1(),ce(10,`button`,7),it(11,`bx-icon`,8),Jt(12,`Right-click or hold for more actions `),pe$1(),ce(13,`p`,9),Jt(14,`On touch screens, touch and hold for more actions. With a keyboard, focus the example and press Shift + F10. Escape closes the menu first.`),pe$1(),ce(15,`p`,10),Jt(16),pe$1()()(),Ow(17,Ce,3,0,`ng-template`,null,0,gm)(19,ge,4,1,`ng-template`,null,1,gm)(21,ye,5,0,`div`,11)),t&2){let a=Q0(18),ue=Q0(20);re(),Ke(`ngClass`,Pk(5,fe,i.isSideModal(),i.isCenteredModal())),re(2),ir(` `,i.data.body,` `),re(4),Ke(`bxDropdown`,a),re(3),Ke(`bxContextMenu`,ue),re(6),Ar(i.menuStatus())}},dependencies:[en,nn,DA,fe$1,$d,kS,eS,tS,Vn],styles:[`
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
}`],changeDetection:1})};var F=class{layout=`right`;animate=!0;hasBackdrop=!0;showCloseButton=!0;title=``;headerText=``;disableClose=!1;disableCloseOnBackdropClick=!1;hasConfirmCloseGuard=!0;constructor(e){Object.assign(this,e)}};function he(r,e){if(r&1){let t=Ea();ce(0,`div`,1)(1,`button`,2),He(`click`,function(){Di(t);let a=Ie();return Ei(a.confirm())}),Jt(2,`Confirm`),pe$1(),ce(3,`button`,3),He(`click`,function(){Di(t);let a=Ie();return Ei(a.close())}),Jt(4,`Cancel`),pe$1()()}}var I=class r extends Ze{confirm(){this.modal?.close(`confirm`)}static ɵfac=(()=>{let e;return function(i){return(e||(e=fn(r)))(i||r)}})();static ɵcmp=we({type:r,selectors:[[`app-confirm-close`]],features:[rt],decls:3,vars:1,consts:[[`class`,`button-container`,4,`appModalFooter`],[1,`button-container`],[`bx-button`,``,`variant`,`filled`,`color`,`success`,3,`click`],[`bx-button`,``,`variant`,`filled`,`color`,`danger`,3,`click`]],template:function(t,i){t&1&&(ce(0,`div`),Jt(1),pe$1(),Ow(2,he,5,0,`div`,0)),t&2&&(re(),ir(` `,i.data,`
`))},dependencies:[nn,fe$1],styles:[`
.button-container[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 1rem;
}
.button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {
  cursor: pointer;
}`],changeDetection:1})};var xe=()=>({required:`Choose a layout.`});function _e(r,e){if(r&1&&(ce(0,`bx-select`,23),VT(),pe$1()),r&2){let t=e.$implicit,i=Ie();Ke(`label`,t)(`formControlName`,t)(`options`,i.breakpointSelectOptions),jT()}}var pe=class r{modals=h(fe$2);layoutOptions=[`center`,`right`,`left`,`bottom-sheet`];layoutSelectOptions=this.layoutOptions.map(e=>({label:e.split(`-`).map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(` `),value:e}));breakpointSelectOptions=[{label:`None`,value:`none`},...this.layoutSelectOptions];breakpointKeys=Object.keys(us);form;resultMessage=S(`Open a modal to preview its layout and close behavior.`);modalReadmePath=S(`assets/modal-readme/README.md`);codeFiles=[{title:`modal-usage.ts`,path:`assets/code-snippets/modal/modal-usage.ts.txt`,language:`typescript`},{title:`modal.ts`,path:`assets/code-snippets/modal/modal.ts.txt`,language:`typescript`},{title:`modal.html`,path:`assets/code-snippets/modal/modal.html.txt`,language:`html`},{title:`modal.scss`,path:`assets/code-snippets/modal/modal.scss.txt`,language:`scss`},{title:`confirm-close.ts`,path:`assets/code-snippets/modal/confirm-close-modal.ts.txt`,language:`typescript`},{title:`confirm-close.html`,path:`assets/code-snippets/modal/confirm-close-modal.html.txt`,language:`html`},{title:`confirm-close.scss`,path:`assets/code-snippets/modal/confirm-close-modal.scss.txt`,language:`scss`},{title:`styles.scss`,path:`assets/code-snippets/modal/styles.scss.txt`,language:`scss`}];openedCount=0;constructor(){let e={layout:new vE(`right`),animate:new vE(!0),hasBackdrop:new vE(!0),showCloseButton:new vE(!0),title:new vE(`Review your changes`),headerText:new vE(`Workspace settings`),disableClose:new vE(!1),disableCloseOnBackdropClick:new vE(!1),hasConfirmCloseGuard:new vE(!0)};this.breakpointKeys.forEach(t=>{let i=`none`;t===`sm`&&(i=`bottom-sheet`),t===`xl`&&(i=`center`),e[t]=new vE(i)}),this.form=new GD(e)}openModal(){let e=this.createRequest();if(!e)return;let t=e.headerText===``?null:e.headerText;this.modals.open(B,{header:t===void 0?void 0:{text:t,icon:{name:`info`,color:`text-info`,bgColor:`auto`}},data:{title:e.title,body:`This dialog shares the application theme and appearance settings. Confirm to apply the example, or cancel to return to the playground.`,openedCount:this.openedCount},style:{layout:e.layout,animate:e.animate,hasBackdrop:e.hasBackdrop,showCloseButton:e.showCloseButton,breakpoints:this.getBreakpointsFromRequest(e)},disableClose:e.disableClose,disableCloseOnBackdropClick:e.disableCloseOnBackdropClick,closeGuard:e.hasConfirmCloseGuard?new tn(I,{data:`Are you sure you want to close the modal?`,header:{text:`Unsaved Changes`},style:{showCloseButton:!1}}):void 0}).afterClosed().subscribe(a=>{a.state===`confirm`&&a.data?(this.openedCount=a.data.openedCount,this.resultMessage.set(`Changes confirmed. This modal has been confirmed ${this.openedCount} time${this.openedCount===1?``:`s`}.`)):this.resultMessage.set(`Modal closed. No changes were applied.`)})}createRequest(){if(this.form.invalid)return;let e=this.form.getRawValue();return new F(Object.fromEntries(Object.entries(e).map(([i,a])=>[i,a===null?void 0:a])))}getBreakpointsFromRequest(e){let t={};return this.breakpointKeys.forEach(i=>{let a=e[i];a&&a!==`none`&&(t[i]=a)}),t}static ɵfac=function(t){return new(t||r)};static ɵcmp=we({type:r,selectors:[[`app-modal`]],decls:47,vars:9,consts:[[`configPanel`,``],[1,`page-heading`],[1,`eyebrow`],[1,`demo-container`],[3,`matchHeight`,`codeFiles`,`readmePath`],[`bxSurface`,``,1,`config-container`],[1,`config-header`],[1,`hint`],[`routerLink`,`/appearance`],[`role`,`status`,1,`hint`],[1,`config-form`,`form-section`,3,`formGroup`],[1,`form-section`],[`label`,`Default Layout`,`formControlName`,`layout`,3,`errorMessages`,`options`],[`label`,`Header Text`,`formControlName`,`headerText`],[`label`,`Title`,`formControlName`,`title`],[1,`form-checkboxes`],[`label`,`Animate`,`formControlName`,`animate`],[`label`,`Has Backdrop`,`formControlName`,`hasBackdrop`],[`label`,`Show Close Button`,`formControlName`,`showCloseButton`],[`label`,`Disable Close (Global)`,`formControlName`,`disableClose`,`tooltip`,`Prevents closing via ESC key or backdrop clicks.`],[`label`,`Disable Backdrop Click`,`formControlName`,`disableCloseOnBackdropClick`],[`label`,`Use Confirm Close Guard`,`formControlName`,`hasConfirmCloseGuard`,`tooltip`,`Intercepts the close event and prompts the user to confirm.`],[1,`breakpoints-grid`],[3,`label`,`formControlName`,`options`],[1,`actions`],[`bx-button`,``,`variant`,`filled`,`color`,`grayscale`,3,`click`,`disabled`]],template:function(t,i){if(t&1&&(ce(0,`header`,1)(1,`p`,2),Jt(2,`Overlay components`),pe$1(),ce(3,`h1`),Jt(4,`Modals`),pe$1(),ce(5,`p`),Jt(6,`Configure dialogs, side panels, and sheets using the shared Blocks theme.`),pe$1()(),ce(7,`div`,3),it(8,`app-component-info`,4),ce(9,`div`,5,0)(11,`div`,6),Jt(12,`Configurator`),pe$1(),ce(13,`p`,7),Jt(14,`Uses your shared appearance. `),ce(15,`a`,8),Jt(16,`Adjust appearance settings`),pe$1()(),ce(17,`p`,9),Jt(18),pe$1(),ce(19,`form`,10)(20,`div`,11)(21,`h3`),Jt(22,`General Style`),pe$1(),ce(23,`bx-select`,12),VT(),pe$1(),ce(24,`bx-input-field`,13),VT(),pe$1(),ce(25,`bx-input-field`,14),VT(),pe$1()(),ce(26,`div`,11)(27,`h3`),Jt(28,`Behavior & Toggles`),pe$1(),ce(29,`div`,15)(30,`bx-checkbox`,16),VT(),pe$1(),ce(31,`bx-checkbox`,17),VT(),pe$1(),ce(32,`bx-checkbox`,18),VT(),pe$1(),ce(33,`bx-checkbox`,19),VT(),pe$1(),ce(34,`bx-checkbox`,20),VT(),pe$1(),ce(35,`bx-checkbox`,21),VT(),pe$1()()(),ce(36,`div`,11)(37,`h3`),Jt(38,`Responsive Breakpoints`),pe$1(),ce(39,`p`,7),Jt(40,`Select 'none' to ignore that breakpoint.`),pe$1(),ce(41,`div`,22),$o(42,_e,1,3,`bx-select`,23,hu),pe$1()()(),ce(44,`div`,24)(45,`button`,25),He(`click`,function(){return i.openModal()}),Jt(46,` Open Modal `),pe$1()()()()),t&2){let a=Q0(10);re(8),Ke(`matchHeight`,a)(`codeFiles`,i.codeFiles)(`readmePath`,i.modalReadmePath()),re(10),Ar(i.resultMessage()),re(),Ke(`formGroup`,i.form),re(4),Ke(`errorMessages`,Rk(8,xe))(`options`,i.layoutSelectOptions),jT(),re(),jT(),re(),jT(),re(5),jT(),re(),jT(),re(),jT(),re(),jT(),re(),jT(),re(),jT(),re(7),qo(i.breakpointKeys),re(3),Ke(`disabled`,i.form.invalid)}},dependencies:[Bn,cd,Zo,p6,f6,c6,u6,_O,kO,P,fe$1,j,L,Se],styles:[`
[_nghost-%COMP%] {
  width: 100%;
}
.breakpoints-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 1rem;
}`],changeDetection:1})};export{pe as Modal};