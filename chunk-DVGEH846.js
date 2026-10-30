import{An as _,Ci as zr,E as Ex,Er as kx,Ft as Qm,G as If,K as Je,Kt as Sf,Mn as _t,O as Fe,Or as le,P as Gr,R as Hd,S as ED,Ut as S_,W as I9,Yn as f,Zn as fe$1,_r as je,a as A9,ar as gS,b as Dx,ct as Lv,dr as hn,dt as M9,ft as Me,gn as X,ht as N9,i as $u,it as LP,li as wn,ln as W,ni as tt,o as AA,oi as us,ot as Lk,p as Br,pt as Ms,qr as q0,ri as ue,sn as Vk,ui as wr,ut as M,vi as z0,vr as jr,xn as Ya,zr as of}from"./chunk-DQTC9SUR.js";import{b as Oi,w as Zn,y as Ni}from"./main-2QOMNNZQ.js";import{a as nn,i as fe$2,n as Ze,o as tn,r as en}from"./chunk-CRjzmzFF.js";import"./chunk-BLjMr5wS.js";import{t as P}from"./chunk-DEqA6Lvv.js";var fe=(r,e)=>({"side-modal":r,"center-modal":e});function be(r,e){if(r&1&&(W(0,`div`),je(1),X()),r&2){let t=ue();M(),wr(` `,t.data.title,`
`)}}function Ce(r,e){if(r&1){let t=us();W(0,`bx-menu`)(1,`bx-menu-item`,12),Me(`action`,function(){Br(t);let a=ue();return jr(a.selectAction(`Edit details`))}),X(),W(2,`bx-menu-item`,13),Me(`action`,function(){Br(t);let a=ue();return jr(a.selectAction(`Duplicate`))}),X()()}}function ge(r,e){if(r&1){let t=us();W(0,`bx-menu`)(1,`bx-menu-item`,14),Me(`action`,function(){Br(t);let a=ue();return jr(a.selectAction(`Copy link`))}),X(),W(2,`bx-menu-item`,15),Me(`action`,function(){Br(t);let a=ue();return jr(a.selectAction(`Archive`))}),X(),W(3,`bx-menu-item`,16),Me(`action`,function(){Br(t);let a=ue();return jr(a.selectAction(`Delete`))}),X()()}r&2&&(M(3),fe$1(`danger`,!0))}function ye(r,e){if(r&1){let t=us();W(0,`div`,17)(1,`button`,18),Me(`click`,function(){Br(t);let a=ue();return jr(a.confirm())}),je(2,`Confirm`),X(),W(3,`button`,19),Me(`click`,function(){Br(t);let a=ue();return jr(a.close())}),je(4,`Cancel`),X()()}}var B=class r extends en{menuStatus=_(`Try either menu. Actions keep this modal open.`);isSideModal=_(!1);isCenteredModal=_(!1);onModalInit(){let e=this.modal?.modalConfig?.style.layout;this.isSideModal.set(e===`right`||e===`left`),this.isCenteredModal.set(e===`center`)}confirm(){this.modal?.close(`confirm`,{openedCount:this.data.openedCount+1})}selectAction(e){this.menuStatus.set(`${e} selected. The modal is still open.`)}static ɵfac=(()=>{let e;return function(i){return(e||(e=wn(r)))(i||r)}})();static ɵcmp=le({type:r,selectors:[[`app-demo-modal`]],features:[Je],decls:22,vars:8,consts:[[`dropdownActions`,``],[`contextActions`,``],[4,`appModalHeader`],[1,`demo-modal-content-class`,3,`ngClass`],[`aria-label`,`Menus inside this modal`,1,`modal-menu-demo`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`primary`,`placement`,`bottom`,3,`bxDropdown`],[`name`,`chevron-down`,`size`,`16`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`grayscale`,1,`modal-context-target`,3,`bxContextMenu`],[`name`,`mouse-pointer-2`,`size`,`16`],[1,`menu-hint`],[`role`,`status`,1,`menu-status`],[`class`,`button-container`,4,`appModalFooter`],[`label`,`Edit details`,`icon`,`pencil`,3,`action`],[`label`,`Duplicate`,`icon`,`copy`,3,`action`],[`label`,`Copy link`,`icon`,`link`,3,`action`],[`label`,`Archive`,`icon`,`archive`,3,`action`],[`label`,`Delete`,`icon`,`trash-2`,3,`action`,`danger`],[1,`button-container`],[`bx-button`,``,`variant`,`filled`,`color`,`success`,3,`click`],[`bx-button`,``,`variant`,`filled`,`color`,`danger`,3,`click`]],template:function(t,i){if(t&1&&(S_(0,be,2,1,`div`,2),W(1,`div`,3)(2,`div`),je(3),X(),W(4,`section`,4)(5,`h3`),je(6,`Menus inside the modal`),X(),W(7,`button`,5),je(8,` Open actions`),Fe(9,`bx-icon`,6),X(),W(10,`button`,7),Fe(11,`bx-icon`,8),je(12,`Right-click or hold for more actions `),X(),W(13,`p`,9),je(14,`On touch screens, touch and hold for more actions. With a keyboard, focus the example and press Shift + F10. Escape closes the menu first.`),X(),W(15,`p`,10),je(16),X()()(),S_(17,Ce,3,0,`ng-template`,null,0,Qm)(19,ge,4,1,`ng-template`,null,1,Qm)(21,ye,5,0,`div`,11)),t&2){let a=Ya(18),ue=Ya(20);M(),fe$1(`ngClass`,Vk(5,fe,i.isSideModal(),i.isCenteredModal())),M(2),wr(` `,i.data.body,` `),M(4),fe$1(`bxDropdown`,a),M(3),fe$1(`bxContextMenu`,ue),M(6),tt(i.menuStatus())}},dependencies:[nn,tn,AA,If,Sf,kx,Dx,Ex,_t],styles:[`
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
}`],changeDetection:1})};var F=class{layout=`right`;animate=!0;hasBackdrop=!0;showCloseButton=!0;title=``;headerText=``;disableClose=!1;disableCloseOnBackdropClick=!1;hasConfirmCloseGuard=!0;constructor(e){Object.assign(this,e)}};function he(r,e){if(r&1){let t=us();W(0,`div`,1)(1,`button`,2),Me(`click`,function(){Br(t);let a=ue();return jr(a.confirm())}),je(2,`Confirm`),X(),W(3,`button`,3),Me(`click`,function(){Br(t);let a=ue();return jr(a.close())}),je(4,`Cancel`),X()()}}var I=class r extends en{confirm(){this.modal?.close(`confirm`)}static ɵfac=(()=>{let e;return function(i){return(e||(e=wn(r)))(i||r)}})();static ɵcmp=le({type:r,selectors:[[`app-confirm-close`]],features:[Je],decls:3,vars:1,consts:[[`class`,`button-container`,4,`appModalFooter`],[1,`button-container`],[`bx-button`,``,`variant`,`filled`,`color`,`success`,3,`click`],[`bx-button`,``,`variant`,`filled`,`color`,`danger`,3,`click`]],template:function(t,i){t&1&&(W(0,`div`),je(1),X(),S_(2,he,5,0,`div`,0)),t&2&&(M(),wr(` `,i.data,`
`))},dependencies:[tn,If],styles:[`
.button-container[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 1rem;
}
.button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {
  cursor: pointer;
}`],changeDetection:1})};var xe=()=>({required:`Choose a layout.`});function _e(r,e){if(r&1&&(W(0,`bx-select`,23),q0(),X()),r&2){let t=e.$implicit,i=ue();fe$1(`label`,t)(`formControlName`,t)(`options`,i.breakpointSelectOptions),z0()}}var pe=class r{modals=f(fe$2);layoutOptions=[`center`,`right`,`left`,`bottom-sheet`];layoutSelectOptions=this.layoutOptions.map(e=>({label:e.split(`-`).map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(` `),value:e}));breakpointSelectOptions=[{label:`None`,value:`none`},...this.layoutSelectOptions];breakpointKeys=Object.keys(Ms);form;resultMessage=_(`Open a modal to preview its layout and close behavior.`);modalReadmePath=_(`assets/modal-readme/README.md`);codeFiles=[{title:`modal-usage.ts`,path:`assets/code-snippets/modal/modal-usage.ts.txt`,language:`typescript`},{title:`modal.ts`,path:`assets/code-snippets/modal/modal.ts.txt`,language:`typescript`},{title:`modal.html`,path:`assets/code-snippets/modal/modal.html.txt`,language:`html`},{title:`modal.scss`,path:`assets/code-snippets/modal/modal.scss.txt`,language:`scss`},{title:`confirm-close.ts`,path:`assets/code-snippets/modal/confirm-close-modal.ts.txt`,language:`typescript`},{title:`confirm-close.html`,path:`assets/code-snippets/modal/confirm-close-modal.html.txt`,language:`html`},{title:`confirm-close.scss`,path:`assets/code-snippets/modal/confirm-close-modal.scss.txt`,language:`scss`},{title:`styles.scss`,path:`assets/code-snippets/modal/styles.scss.txt`,language:`scss`}];openedCount=0;constructor(){let e={layout:new gS(`right`),animate:new gS(!0),hasBackdrop:new gS(!0),showCloseButton:new gS(!0),title:new gS(`Review your changes`),headerText:new gS(`Workspace settings`),disableClose:new gS(!1),disableCloseOnBackdropClick:new gS(!1),hasConfirmCloseGuard:new gS(!0)};this.breakpointKeys.forEach(t=>{let i=`none`;t===`sm`&&(i=`bottom-sheet`),t===`xl`&&(i=`center`),e[t]=new gS(i)}),this.form=new of(e)}openModal(){let e=this.createRequest();if(!e)return;let t=e.headerText===``?null:e.headerText;this.modals.open(B,{header:t===void 0?void 0:{text:t,icon:{name:`info`,color:`text-info`,bgColor:`auto`}},data:{title:e.title,body:`This dialog shares the application theme and appearance settings. Confirm to apply the example, or cancel to return to the playground.`,openedCount:this.openedCount},style:{layout:e.layout,animate:e.animate,hasBackdrop:e.hasBackdrop,showCloseButton:e.showCloseButton,breakpoints:this.getBreakpointsFromRequest(e)},disableClose:e.disableClose,disableCloseOnBackdropClick:e.disableCloseOnBackdropClick,closeGuard:e.hasConfirmCloseGuard?new Ze(I,{data:`Are you sure you want to close the modal?`,header:{text:`Unsaved Changes`},style:{showCloseButton:!1}}):void 0}).afterClosed().subscribe(a=>{a.state===`confirm`&&a.data?(this.openedCount=a.data.openedCount,this.resultMessage.set(`Changes confirmed. This modal has been confirmed ${this.openedCount} time${this.openedCount===1?``:`s`}.`)):this.resultMessage.set(`Modal closed. No changes were applied.`)})}createRequest(){if(this.form.invalid)return;let e=this.form.getRawValue();return new F(Object.fromEntries(Object.entries(e).map(([i,a])=>[i,a===null?void 0:a])))}getBreakpointsFromRequest(e){let t={};return this.breakpointKeys.forEach(i=>{let a=e[i];a&&a!==`none`&&(t[i]=a)}),t}static ɵfac=function(t){return new(t||r)};static ɵcmp=le({type:r,selectors:[[`app-modal`]],decls:47,vars:9,consts:[[`configPanel`,``],[1,`page-heading`],[1,`eyebrow`],[1,`demo-container`],[3,`matchHeight`,`codeFiles`,`readmePath`],[`bxSurface`,``,1,`config-container`],[1,`config-header`],[1,`hint`],[`routerLink`,`/appearance`],[`role`,`status`,1,`hint`],[1,`config-form`,`form-section`,3,`formGroup`],[1,`form-section`],[`label`,`Default Layout`,`formControlName`,`layout`,3,`errorMessages`,`options`],[`label`,`Header Text`,`formControlName`,`headerText`],[`label`,`Title`,`formControlName`,`title`],[1,`form-checkboxes`],[`label`,`Animate`,`formControlName`,`animate`],[`label`,`Has Backdrop`,`formControlName`,`hasBackdrop`],[`label`,`Show Close Button`,`formControlName`,`showCloseButton`],[`label`,`Disable Close (Global)`,`formControlName`,`disableClose`,`tooltip`,`Prevents closing via ESC key or backdrop clicks.`],[`label`,`Disable Backdrop Click`,`formControlName`,`disableCloseOnBackdropClick`],[`label`,`Use Confirm Close Guard`,`formControlName`,`hasConfirmCloseGuard`,`tooltip`,`Intercepts the close event and prompts the user to confirm.`],[1,`breakpoints-grid`],[3,`label`,`formControlName`,`options`],[1,`actions`],[`bx-button`,``,`variant`,`filled`,`color`,`grayscale`,3,`click`,`disabled`]],template:function(t,i){if(t&1&&(W(0,`header`,1)(1,`p`,2),je(2,`Overlay components`),X(),W(3,`h1`),je(4,`Modals`),X(),W(5,`p`),je(6,`Configure dialogs, side panels, and sheets using the shared Blocks theme.`),X()(),W(7,`div`,3),Fe(8,`app-component-info`,4),W(9,`div`,5,0)(11,`div`,6),je(12,`Configurator`),X(),W(13,`p`,7),je(14,`Uses your shared appearance. `),W(15,`a`,8),je(16,`Adjust appearance settings`),X()(),W(17,`p`,9),je(18),X(),W(19,`form`,10)(20,`div`,11)(21,`h3`),je(22,`General Style`),X(),W(23,`bx-select`,12),q0(),X(),W(24,`bx-input-field`,13),q0(),X(),W(25,`bx-input-field`,14),q0(),X()(),W(26,`div`,11)(27,`h3`),je(28,`Behavior & Toggles`),X(),W(29,`div`,15)(30,`bx-checkbox`,16),q0(),X(),W(31,`bx-checkbox`,17),q0(),X(),W(32,`bx-checkbox`,18),q0(),X(),W(33,`bx-checkbox`,19),q0(),X(),W(34,`bx-checkbox`,20),q0(),X(),W(35,`bx-checkbox`,21),q0(),X()()(),W(36,`div`,11)(37,`h3`),je(38,`Responsive Breakpoints`),X(),W(39,`p`,7),je(40,`Select 'none' to ignore that breakpoint.`),X(),W(41,`div`,22),zr(42,_e,1,3,`bx-select`,23,$u),X()()(),W(44,`div`,24)(45,`button`,25),Me(`click`,function(){return i.openModal()}),je(46,` Open Modal `),X()()()()),t&2){let a=Ya(10);M(8),fe$1(`matchHeight`,a)(`codeFiles`,i.codeFiles)(`readmePath`,i.modalReadmePath()),M(10),tt(i.resultMessage()),M(),fe$1(`formGroup`,i.form),M(4),fe$1(`errorMessages`,Lk(8,xe))(`options`,i.layoutSelectOptions),z0(),M(),z0(),M(),z0(),M(5),z0(),M(),z0(),M(),z0(),M(),z0(),M(),z0(),M(),z0(),M(7),Gr(i.breakpointKeys),M(3),fe$1(`disabled`,i.form.invalid)}},dependencies:[hn,Hd,ED,A9,N9,M9,I9,Lv,LP,P,If,Ni,Zn,Oi],styles:[`
[_nghost-%COMP%] {
  width: 100%;
}
.breakpoints-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 1rem;
}`],changeDetection:1})};export{pe as Modal};