import{Et as Vn,Gn as yE,Ht as ce,I as EA,Jn as zo,Kt as en,L as Ea,M as DO,Mn as rt,Nn as tS,Ot as WD,P as Di,Pn as uY,Qt as gm,R as Ei,S as BT,T as Bn,Un as xe$1,Ut as dY,Vt as cd,W as HT,Wt as ds,Xt as fn,Y as J0,_n as me,an as ir,bn as nS,ct as Ok,en as h,f as $d,gn as mY,gt as S,h as AS,i as j,it as Lk,jn as re,jt as Xo,kn as qo,m as AO,n as ye$1,on as it,r as L,rn as hu,t as Se,tn as hY,tt as Ke,ut as Ow,v as Ar,wt as Ue,zn as we}from"./main-ERZQBNJW.js";import"./chunk-DA_pRWAu.js";import{a as nn,i as fe$1,n as Ze,o as tn,r as en$1}from"./chunk-CRG-iGgy.js";import{t as P}from"./chunk-BfXigtWT.js";var fe=(r,e)=>({"side-modal":r,"center-modal":e});function be(r,e){if(r&1&&(ce(0,`div`),en(1),me()),r&2){let t=xe$1();re(),ir(` `,t.data.title,`
`)}}function Ce(r,e){if(r&1){let t=Ea();ce(0,`bx-menu`)(1,`bx-menu-item`,12),Ue(`action`,function(){Di(t);let a=xe$1();return Ei(a.selectAction(`Edit details`))}),me(),ce(2,`bx-menu-item`,13),Ue(`action`,function(){Di(t);let a=xe$1();return Ei(a.selectAction(`Duplicate`))}),me()()}}function ge(r,e){if(r&1){let t=Ea();ce(0,`bx-menu`)(1,`bx-menu-item`,14),Ue(`action`,function(){Di(t);let a=xe$1();return Ei(a.selectAction(`Copy link`))}),me(),ce(2,`bx-menu-item`,15),Ue(`action`,function(){Di(t);let a=xe$1();return Ei(a.selectAction(`Archive`))}),me(),ce(3,`bx-menu-item`,16),Ue(`action`,function(){Di(t);let a=xe$1();return Ei(a.selectAction(`Delete`))}),me()()}r&2&&(re(3),Ke(`danger`,!0))}function ye(r,e){if(r&1){let t=Ea();ce(0,`div`,17)(1,`button`,18),Ue(`click`,function(){Di(t);let a=xe$1();return Ei(a.confirm())}),en(2,`Confirm`),me(),ce(3,`button`,19),Ue(`click`,function(){Di(t);let a=xe$1();return Ei(a.close())}),en(4,`Cancel`),me()()}}var B=class r extends Ze{menuStatus=S(`Try either menu. Actions keep this modal open.`);isSideModal=S(!1);isCenteredModal=S(!1);onModalInit(){let e=this.modal?.modalConfig?.style.layout;this.isSideModal.set(e===`right`||e===`left`),this.isCenteredModal.set(e===`center`)}confirm(){this.modal?.close(`confirm`,{openedCount:this.data.openedCount+1})}selectAction(e){this.menuStatus.set(`${e} selected. The modal is still open.`)}static ɵfac=(()=>{let e;return function(i){return(e||(e=fn(r)))(i||r)}})();static ɵcmp=we({type:r,selectors:[[`app-demo-modal`]],features:[rt],decls:22,vars:8,consts:[[`dropdownActions`,``],[`contextActions`,``],[4,`appModalHeader`],[1,`demo-modal-content-class`,3,`ngClass`],[`aria-label`,`Menus inside this modal`,1,`modal-menu-demo`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`primary`,`placement`,`bottom`,3,`bxDropdown`],[`name`,`chevron-down`,`size`,`16`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`grayscale`,1,`modal-context-target`,3,`bxContextMenu`],[`name`,`mouse-pointer-2`,`size`,`16`],[1,`menu-hint`],[`role`,`status`,1,`menu-status`],[`class`,`button-container`,4,`appModalFooter`],[`label`,`Edit details`,`icon`,`pencil`,3,`action`],[`label`,`Duplicate`,`icon`,`copy`,3,`action`],[`label`,`Copy link`,`icon`,`link`,3,`action`],[`label`,`Archive`,`icon`,`archive`,3,`action`],[`label`,`Delete`,`icon`,`trash-2`,3,`action`,`danger`],[1,`button-container`],[`bx-button`,``,`variant`,`filled`,`color`,`success`,3,`click`],[`bx-button`,``,`variant`,`filled`,`color`,`danger`,3,`click`]],template:function(t,i){if(t&1&&(Ow(0,be,2,1,`div`,2),ce(1,`div`,3)(2,`div`),en(3),me(),ce(4,`section`,4)(5,`h3`),en(6,`Menus inside the modal`),me(),ce(7,`button`,5),en(8,` Open actions`),it(9,`bx-icon`,6),me(),ce(10,`button`,7),it(11,`bx-icon`,8),en(12,`Right-click or hold for more actions `),me(),ce(13,`p`,9),en(14,`On touch screens, touch and hold for more actions. With a keyboard, focus the example and press Shift + F10. Escape closes the menu first.`),me(),ce(15,`p`,10),en(16),me()()(),Ow(17,Ce,3,0,`ng-template`,null,0,gm)(19,ge,4,1,`ng-template`,null,1,gm)(21,ye,5,0,`div`,11)),t&2){let a=J0(18),ue=J0(20);re(),Ke(`ngClass`,Lk(5,fe,i.isSideModal(),i.isCenteredModal())),re(2),ir(` `,i.data.body,` `),re(4),Ke(`bxDropdown`,a),re(3),Ke(`bxContextMenu`,ue),re(6),Ar(i.menuStatus())}},dependencies:[en$1,nn,EA,ye$1,$d,AS,tS,nS,Vn],styles:[`
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
}`],changeDetection:1})};var F=class{layout=`right`;animate=!0;hasBackdrop=!0;showCloseButton=!0;title=``;headerText=``;disableClose=!1;disableCloseOnBackdropClick=!1;hasConfirmCloseGuard=!0;constructor(e){Object.assign(this,e)}};function he(r,e){if(r&1){let t=Ea();ce(0,`div`,1)(1,`button`,2),Ue(`click`,function(){Di(t);let a=xe$1();return Ei(a.confirm())}),en(2,`Confirm`),me(),ce(3,`button`,3),Ue(`click`,function(){Di(t);let a=xe$1();return Ei(a.close())}),en(4,`Cancel`),me()()}}var I=class r extends Ze{confirm(){this.modal?.close(`confirm`)}static ɵfac=(()=>{let e;return function(i){return(e||(e=fn(r)))(i||r)}})();static ɵcmp=we({type:r,selectors:[[`app-confirm-close`]],features:[rt],decls:3,vars:1,consts:[[`class`,`button-container`,4,`appModalFooter`],[1,`button-container`],[`bx-button`,``,`variant`,`filled`,`color`,`success`,3,`click`],[`bx-button`,``,`variant`,`filled`,`color`,`danger`,3,`click`]],template:function(t,i){t&1&&(ce(0,`div`),en(1),me(),Ow(2,he,5,0,`div`,0)),t&2&&(re(),ir(` `,i.data,`
`))},dependencies:[nn,ye$1],styles:[`
.button-container[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 1rem;
}
.button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {
  cursor: pointer;
}`],changeDetection:1})};var xe=()=>({required:`Choose a layout.`});function _e(r,e){if(r&1&&(ce(0,`bx-select`,23),BT(),me()),r&2){let t=e.$implicit,i=xe$1();Ke(`label`,t)(`formControlName`,t)(`options`,i.breakpointSelectOptions),HT()}}var pe=class r{modals=h(fe$1);layoutOptions=[`center`,`right`,`left`,`bottom-sheet`];layoutSelectOptions=this.layoutOptions.map(e=>({label:e.split(`-`).map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(` `),value:e}));breakpointSelectOptions=[{label:`None`,value:`none`},...this.layoutSelectOptions];breakpointKeys=Object.keys(ds);form;resultMessage=S(`Open a modal to preview its layout and close behavior.`);modalReadmePath=S(`assets/modal-readme/README.md`);codeFiles=[{title:`modal-usage.ts`,path:`assets/code-snippets/modal/modal-usage.ts.txt`,language:`typescript`},{title:`modal.ts`,path:`assets/code-snippets/modal/modal.ts.txt`,language:`typescript`},{title:`modal.html`,path:`assets/code-snippets/modal/modal.html.txt`,language:`html`},{title:`modal.scss`,path:`assets/code-snippets/modal/modal.scss.txt`,language:`scss`},{title:`confirm-close.ts`,path:`assets/code-snippets/modal/confirm-close-modal.ts.txt`,language:`typescript`},{title:`confirm-close.html`,path:`assets/code-snippets/modal/confirm-close-modal.html.txt`,language:`html`},{title:`confirm-close.scss`,path:`assets/code-snippets/modal/confirm-close-modal.scss.txt`,language:`scss`},{title:`styles.scss`,path:`assets/code-snippets/modal/styles.scss.txt`,language:`scss`}];openedCount=0;constructor(){let e={layout:new yE(`right`),animate:new yE(!0),hasBackdrop:new yE(!0),showCloseButton:new yE(!0),title:new yE(`Review your changes`),headerText:new yE(`Workspace settings`),disableClose:new yE(!1),disableCloseOnBackdropClick:new yE(!1),hasConfirmCloseGuard:new yE(!0)};this.breakpointKeys.forEach(t=>{let i=`none`;t===`sm`&&(i=`bottom-sheet`),t===`xl`&&(i=`center`),e[t]=new yE(i)}),this.form=new WD(e)}openModal(){let e=this.createRequest();if(!e)return;let t=e.headerText===``?null:e.headerText;this.modals.open(B,{header:t===void 0?void 0:{text:t,icon:{name:`info`,color:`text-info`,bgColor:`auto`}},data:{title:e.title,body:`This dialog shares the application theme and appearance settings. Confirm to apply the example, or cancel to return to the playground.`,openedCount:this.openedCount},style:{layout:e.layout,animate:e.animate,hasBackdrop:e.hasBackdrop,showCloseButton:e.showCloseButton,breakpoints:this.getBreakpointsFromRequest(e)},disableClose:e.disableClose,disableCloseOnBackdropClick:e.disableCloseOnBackdropClick,closeGuard:e.hasConfirmCloseGuard?new tn(I,{data:`Are you sure you want to close the modal?`,header:{text:`Unsaved Changes`},style:{showCloseButton:!1}}):void 0}).afterClosed().subscribe(a=>{a.state===`confirm`&&a.data?(this.openedCount=a.data.openedCount,this.resultMessage.set(`Changes confirmed. This modal has been confirmed ${this.openedCount} time${this.openedCount===1?``:`s`}.`)):this.resultMessage.set(`Modal closed. No changes were applied.`)})}createRequest(){if(this.form.invalid)return;let e=this.form.getRawValue();return new F(Object.fromEntries(Object.entries(e).map(([i,a])=>[i,a===null?void 0:a])))}getBreakpointsFromRequest(e){let t={};return this.breakpointKeys.forEach(i=>{let a=e[i];a&&a!==`none`&&(t[i]=a)}),t}static ɵfac=function(t){return new(t||r)};static ɵcmp=we({type:r,selectors:[[`app-modal`]],decls:47,vars:9,consts:[[`configPanel`,``],[1,`page-heading`],[1,`eyebrow`],[1,`demo-container`],[3,`matchHeight`,`codeFiles`,`readmePath`],[`bxSurface`,``,1,`config-container`],[1,`config-header`],[1,`hint`],[`routerLink`,`/appearance`],[`role`,`status`,1,`hint`],[1,`config-form`,`form-section`,3,`formGroup`],[1,`form-section`],[`label`,`Default Layout`,`formControlName`,`layout`,3,`errorMessages`,`options`],[`label`,`Header Text`,`formControlName`,`headerText`],[`label`,`Title`,`formControlName`,`title`],[1,`form-checkboxes`],[`label`,`Animate`,`formControlName`,`animate`],[`label`,`Has Backdrop`,`formControlName`,`hasBackdrop`],[`label`,`Show Close Button`,`formControlName`,`showCloseButton`],[`label`,`Disable Close (Global)`,`formControlName`,`disableClose`,`tooltip`,`Prevents closing via ESC key or backdrop clicks.`],[`label`,`Disable Backdrop Click`,`formControlName`,`disableCloseOnBackdropClick`],[`label`,`Use Confirm Close Guard`,`formControlName`,`hasConfirmCloseGuard`,`tooltip`,`Intercepts the close event and prompts the user to confirm.`],[1,`breakpoints-grid`],[3,`label`,`formControlName`,`options`],[1,`actions`],[`bx-button`,``,`variant`,`filled`,`color`,`grayscale`,3,`click`,`disabled`]],template:function(t,i){if(t&1&&(ce(0,`header`,1)(1,`p`,2),en(2,`Overlay components`),me(),ce(3,`h1`),en(4,`Modals`),me(),ce(5,`p`),en(6,`Configure dialogs, side panels, and sheets using the shared Blocks theme.`),me()(),ce(7,`div`,3),it(8,`app-component-info`,4),ce(9,`div`,5,0)(11,`div`,6),en(12,`Configurator`),me(),ce(13,`p`,7),en(14,`Uses your shared appearance. `),ce(15,`a`,8),en(16,`Adjust appearance settings`),me()(),ce(17,`p`,9),en(18),me(),ce(19,`form`,10)(20,`div`,11)(21,`h3`),en(22,`General Style`),me(),ce(23,`bx-select`,12),BT(),me(),ce(24,`bx-input-field`,13),BT(),me(),ce(25,`bx-input-field`,14),BT(),me()(),ce(26,`div`,11)(27,`h3`),en(28,`Behavior & Toggles`),me(),ce(29,`div`,15)(30,`bx-checkbox`,16),BT(),me(),ce(31,`bx-checkbox`,17),BT(),me(),ce(32,`bx-checkbox`,18),BT(),me(),ce(33,`bx-checkbox`,19),BT(),me(),ce(34,`bx-checkbox`,20),BT(),me(),ce(35,`bx-checkbox`,21),BT(),me()()(),ce(36,`div`,11)(37,`h3`),en(38,`Responsive Breakpoints`),me(),ce(39,`p`,7),en(40,`Select 'none' to ignore that breakpoint.`),me(),ce(41,`div`,22),qo(42,_e,1,3,`bx-select`,23,hu),me()()(),ce(44,`div`,24)(45,`button`,25),Ue(`click`,function(){return i.openModal()}),en(46,` Open Modal `),me()()()()),t&2){let a=J0(10);re(8),Ke(`matchHeight`,a)(`codeFiles`,i.codeFiles)(`readmePath`,i.modalReadmePath()),re(10),Ar(i.resultMessage()),re(),Ke(`formGroup`,i.form),re(4),Ke(`errorMessages`,Ok(8,xe))(`options`,i.layoutSelectOptions),HT(),re(),HT(),re(),HT(),re(5),HT(),re(),HT(),re(),HT(),re(),HT(),re(),HT(),re(),HT(),re(7),zo(i.breakpointKeys),re(3),Ke(`disabled`,i.form.invalid)}},dependencies:[Bn,cd,Xo,mY,hY,uY,dY,DO,AO,P,ye$1,j,L,Se],styles:[`
[_nghost-%COMP%] {
  width: 100%;
}
.breakpoints-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 1rem;
}`],changeDetection:1})};export{pe as Modal};