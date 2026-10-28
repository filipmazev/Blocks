import{A as JN,An as pr,B as Lu,Bn as st,Bt as dY,En as oy,Gt as fY,H as Mt,Hn as sy,Jn as uY,Kt as f_,Ln as rw,Lt as ck,Nn as rA,Nt as at,O as I$1,Rn as rx,St as YE,T as Gw,Tn as ox,Un as tA,Ut as f,V as Mo,Vt as dd,W as Np,_ as EE,_r as zN,ar as wk,cn as ko,fr as yi,gr as zA,hn as mk,i as $t,kt as _E,lt as V_,o as Ar,ot as Un,pn as mY,q as Op,qt as fd,st as Ut,tr as vi,vr as zc,wn as ot,yr as zo,zn as sA}from"./chunk-D44OVyuP.js";import{i as j,n as ue,r as L,t as S}from"./main-WUOVILFZ.js";import"./chunk-DXG8OZ8F.js";import{t as R}from"./chunk-CUuNmvvF.js";import{a as nn,i as fe$1,n as Ze,o as tn,r as en}from"./chunk-Cb0g5MzA.js";var fe=(r,e)=>({"side-modal":r,"center-modal":e});function be(r,e){if(r&1&&(Mt(0,`div`),ko(1),$t()),r&2){let t=pr();Ut(),yi(` `,t.data.title,`
`)}}function Ce(r,e){if(r&1){let t=mk();Mt(0,`bx-menu`)(1,`bx-menu-item`,12),at(`action`,function(){oy(t);let a=pr();return sy(a.selectAction(`Edit details`))}),$t(),Mt(2,`bx-menu-item`,13),at(`action`,function(){oy(t);let a=pr();return sy(a.selectAction(`Duplicate`))}),$t()()}}function ge(r,e){if(r&1){let t=mk();Mt(0,`bx-menu`)(1,`bx-menu-item`,14),at(`action`,function(){oy(t);let a=pr();return sy(a.selectAction(`Copy link`))}),$t(),Mt(2,`bx-menu-item`,15),at(`action`,function(){oy(t);let a=pr();return sy(a.selectAction(`Archive`))}),$t(),Mt(3,`bx-menu-item`,16),at(`action`,function(){oy(t);let a=pr();return sy(a.selectAction(`Delete`))}),$t()()}r&2&&(Ut(3),Mo(`danger`,!0))}function ye(r,e){if(r&1){let t=mk();Mt(0,`div`,17)(1,`button`,18),at(`click`,function(){oy(t);let a=pr();return sy(a.confirm())}),ko(2,`Confirm`),$t(),Mt(3,`button`,19),at(`click`,function(){oy(t);let a=pr();return sy(a.close())}),ko(4,`Cancel`),$t()()}}var B=class r extends Ze{menuStatus=I$1(`Try either menu. Actions keep this modal open.`);isSideModal=I$1(!1);isCenteredModal=I$1(!1);onModalInit(){let e=this.modal?.modalConfig?.style.layout;this.isSideModal.set(e===`right`||e===`left`),this.isCenteredModal.set(e===`center`)}confirm(){this.modal?.close(`confirm`,{openedCount:this.data.openedCount+1})}selectAction(e){this.menuStatus.set(`${e} selected. The modal is still open.`)}static ɵfac=(()=>{let e;return function(i){return(e||(e=Un(r)))(i||r)}})();static ɵcmp=ot({type:r,selectors:[[`app-demo-modal`]],features:[st],decls:22,vars:8,consts:[[`dropdownActions`,``],[`contextActions`,``],[4,`appModalHeader`],[1,`demo-modal-content-class`,3,`ngClass`],[`aria-label`,`Menus inside this modal`,1,`modal-menu-demo`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`primary`,`placement`,`bottom`,3,`bxDropdown`],[`name`,`chevron-down`,`size`,`16`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`grayscale`,1,`modal-context-target`,3,`bxContextMenu`],[`name`,`mouse-pointer-2`,`size`,`16`],[1,`menu-hint`],[`role`,`status`,1,`menu-status`],[`class`,`button-container`,4,`appModalFooter`],[`label`,`Edit details`,`icon`,`pencil`,3,`action`],[`label`,`Duplicate`,`icon`,`copy`,3,`action`],[`label`,`Copy link`,`icon`,`link`,3,`action`],[`label`,`Archive`,`icon`,`archive`,3,`action`],[`label`,`Delete`,`icon`,`trash-2`,3,`action`,`danger`],[1,`button-container`],[`bx-button`,``,`variant`,`filled`,`color`,`success`,3,`click`],[`bx-button`,``,`variant`,`filled`,`color`,`danger`,3,`click`]],template:function(t,i){if(t&1&&(rw(0,be,2,1,`div`,2),Mt(1,`div`,3)(2,`div`),ko(3),$t(),Mt(4,`section`,4)(5,`h3`),ko(6,`Menus inside the modal`),$t(),Mt(7,`button`,5),ko(8,` Open actions`),vi(9,`bx-icon`,6),$t(),Mt(10,`button`,7),vi(11,`bx-icon`,8),ko(12,`Right-click or hold for more actions `),$t(),Mt(13,`p`,9),ko(14,`On touch screens, touch and hold for more actions. With a keyboard, focus the example and press Shift + F10. Escape closes the menu first.`),$t(),Mt(15,`p`,10),ko(16),$t()()(),rw(17,Ce,3,0,`ng-template`,null,0,sA)(19,ge,4,1,`ng-template`,null,1,sA)(21,ye,5,0,`div`,11)),t&2){let a=wk(18),ue=wk(20);Ut(),Mo(`ngClass`,rA(5,fe,i.isSideModal(),i.isCenteredModal())),Ut(2),yi(` `,i.data.body,` `),Ut(4),Mo(`bxDropdown`,a),Ut(3),Mo(`bxContextMenu`,ue),Ut(6),zc(i.menuStatus())}},dependencies:[en,nn,zA,S,fd,YE,_E,EE,dd],styles:[`
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
}`],changeDetection:1})};var F=class{layout=`right`;animate=!0;hasBackdrop=!0;showCloseButton=!0;title=``;headerText=``;disableClose=!1;disableCloseOnBackdropClick=!1;hasConfirmCloseGuard=!0;constructor(e){Object.assign(this,e)}};function he(r,e){if(r&1){let t=mk();Mt(0,`div`,1)(1,`button`,2),at(`click`,function(){oy(t);let a=pr();return sy(a.confirm())}),ko(2,`Confirm`),$t(),Mt(3,`button`,3),at(`click`,function(){oy(t);let a=pr();return sy(a.close())}),ko(4,`Cancel`),$t()()}}var I=class r extends Ze{confirm(){this.modal?.close(`confirm`)}static ɵfac=(()=>{let e;return function(i){return(e||(e=Un(r)))(i||r)}})();static ɵcmp=ot({type:r,selectors:[[`app-confirm-close`]],features:[st],decls:3,vars:1,consts:[[`class`,`button-container`,4,`appModalFooter`],[1,`button-container`],[`bx-button`,``,`variant`,`filled`,`color`,`success`,3,`click`],[`bx-button`,``,`variant`,`filled`,`color`,`danger`,3,`click`]],template:function(t,i){t&1&&(Mt(0,`div`),ko(1),$t(),rw(2,he,5,0,`div`,0)),t&2&&(Ut(),yi(` `,i.data,`
`))},dependencies:[nn,S],styles:[`
.button-container[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 1rem;
}
.button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {
  cursor: pointer;
}`],changeDetection:1})};var xe=()=>({required:`Choose a layout.`});function _e(r,e){if(r&1&&(Mt(0,`bx-select`,23),rx(),$t()),r&2){let t=e.$implicit,i=pr();Mo(`label`,t)(`formControlName`,t)(`options`,i.breakpointSelectOptions),ox()}}var pe=class r{modals=f(fe$1);layoutOptions=[`center`,`right`,`left`,`bottom-sheet`];layoutSelectOptions=this.layoutOptions.map(e=>({label:e.split(`-`).map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(` `),value:e}));breakpointSelectOptions=[{label:`None`,value:`none`},...this.layoutSelectOptions];breakpointKeys=Object.keys(zo);form;resultMessage=I$1(`Open a modal to preview its layout and close behavior.`);modalReadmePath=I$1(`assets/modal-readme/README.md`);codeFiles=[{title:`modal-usage.ts`,path:`assets/code-snippets/modal/modal-usage.ts.txt`,language:`typescript`},{title:`modal.ts`,path:`assets/code-snippets/modal/modal.ts.txt`,language:`typescript`},{title:`modal.html`,path:`assets/code-snippets/modal/modal.html.txt`,language:`html`},{title:`modal.scss`,path:`assets/code-snippets/modal/modal.scss.txt`,language:`scss`},{title:`confirm-close.ts`,path:`assets/code-snippets/modal/confirm-close-modal.ts.txt`,language:`typescript`},{title:`confirm-close.html`,path:`assets/code-snippets/modal/confirm-close-modal.html.txt`,language:`html`},{title:`confirm-close.scss`,path:`assets/code-snippets/modal/confirm-close-modal.scss.txt`,language:`scss`},{title:`styles.scss`,path:`assets/code-snippets/modal/styles.scss.txt`,language:`scss`}];openedCount=0;constructor(){let e={layout:new V_(`right`),animate:new V_(!0),hasBackdrop:new V_(!0),showCloseButton:new V_(!0),title:new V_(`Review your changes`),headerText:new V_(`Workspace settings`),disableClose:new V_(!1),disableCloseOnBackdropClick:new V_(!1),hasConfirmCloseGuard:new V_(!0)};this.breakpointKeys.forEach(t=>{let i=`none`;t===`sm`&&(i=`bottom-sheet`),t===`xl`&&(i=`center`),e[t]=new V_(i)}),this.form=new f_(e)}openModal(){let e=this.createRequest();if(!e)return;let t=e.headerText===``?null:e.headerText;this.modals.open(B,{header:t===void 0?void 0:{text:t,icon:{name:`info`,color:`text-info`,bgColor:`auto`}},data:{title:e.title,body:`This dialog shares the application theme and appearance settings. Confirm to apply the example, or cancel to return to the playground.`,openedCount:this.openedCount},style:{layout:e.layout,animate:e.animate,hasBackdrop:e.hasBackdrop,showCloseButton:e.showCloseButton,breakpoints:this.getBreakpointsFromRequest(e)},disableClose:e.disableClose,disableCloseOnBackdropClick:e.disableCloseOnBackdropClick,closeGuard:e.hasConfirmCloseGuard?new tn(I,{data:`Are you sure you want to close the modal?`,header:{text:`Unsaved Changes`},style:{showCloseButton:!1}}):void 0}).afterClosed().subscribe(a=>{a.state===`confirm`&&a.data?(this.openedCount=a.data.openedCount,this.resultMessage.set(`Changes confirmed. This modal has been confirmed ${this.openedCount} time${this.openedCount===1?``:`s`}.`)):this.resultMessage.set(`Modal closed. No changes were applied.`)})}createRequest(){if(this.form.invalid)return;let e=this.form.getRawValue();return new F(Object.fromEntries(Object.entries(e).map(([i,a])=>[i,a===null?void 0:a])))}getBreakpointsFromRequest(e){let t={};return this.breakpointKeys.forEach(i=>{let a=e[i];a&&a!==`none`&&(t[i]=a)}),t}static ɵfac=function(t){return new(t||r)};static ɵcmp=ot({type:r,selectors:[[`app-modal`]],decls:47,vars:9,consts:[[`configPanel`,``],[1,`page-heading`],[1,`eyebrow`],[1,`demo-container`],[3,`matchHeight`,`codeFiles`,`readmePath`],[`bxSurface`,``,1,`config-container`],[1,`config-header`],[1,`hint`],[`routerLink`,`/appearance`],[`role`,`status`,1,`hint`],[1,`config-form`,`form-section`,3,`formGroup`],[1,`form-section`],[`label`,`Default Layout`,`formControlName`,`layout`,3,`errorMessages`,`options`],[`label`,`Header Text`,`formControlName`,`headerText`],[`label`,`Title`,`formControlName`,`title`],[1,`form-checkboxes`],[`label`,`Animate`,`formControlName`,`animate`],[`label`,`Has Backdrop`,`formControlName`,`hasBackdrop`],[`label`,`Show Close Button`,`formControlName`,`showCloseButton`],[`label`,`Disable Close (Global)`,`formControlName`,`disableClose`,`tooltip`,`Prevents closing via ESC key or backdrop clicks.`],[`label`,`Disable Backdrop Click`,`formControlName`,`disableCloseOnBackdropClick`],[`label`,`Use Confirm Close Guard`,`formControlName`,`hasConfirmCloseGuard`,`tooltip`,`Intercepts the close event and prompts the user to confirm.`],[1,`breakpoints-grid`],[3,`label`,`formControlName`,`options`],[1,`actions`],[`bx-button`,``,`variant`,`filled`,`color`,`grayscale`,3,`click`,`disabled`]],template:function(t,i){if(t&1&&(Mt(0,`header`,1)(1,`p`,2),ko(2,`Overlay components`),$t(),Mt(3,`h1`),ko(4,`Modals`),$t(),Mt(5,`p`),ko(6,`Configure dialogs, side panels, and sheets using the shared Blocks theme.`),$t()(),Mt(7,`div`,3),vi(8,`app-component-info`,4),Mt(9,`div`,5,0)(11,`div`,6),ko(12,`Configurator`),$t(),Mt(13,`p`,7),ko(14,`Uses your shared appearance. `),Mt(15,`a`,8),ko(16,`Adjust appearance settings`),$t()(),Mt(17,`p`,9),ko(18),$t(),Mt(19,`form`,10)(20,`div`,11)(21,`h3`),ko(22,`General Style`),$t(),Mt(23,`bx-select`,12),rx(),$t(),Mt(24,`bx-input-field`,13),rx(),$t(),Mt(25,`bx-input-field`,14),rx(),$t()(),Mt(26,`div`,11)(27,`h3`),ko(28,`Behavior & Toggles`),$t(),Mt(29,`div`,15)(30,`bx-checkbox`,16),rx(),$t(),Mt(31,`bx-checkbox`,17),rx(),$t(),Mt(32,`bx-checkbox`,18),rx(),$t(),Mt(33,`bx-checkbox`,19),rx(),$t(),Mt(34,`bx-checkbox`,20),rx(),$t(),Mt(35,`bx-checkbox`,21),rx(),$t()()(),Mt(36,`div`,11)(37,`h3`),ko(38,`Responsive Breakpoints`),$t(),Mt(39,`p`,7),ko(40,`Select 'none' to ignore that breakpoint.`),$t(),Mt(41,`div`,22),Np(42,_e,1,3,`bx-select`,23,ck),$t()()(),Mt(44,`div`,24)(45,`button`,25),at(`click`,function(){return i.openModal()}),ko(46,` Open Modal `),$t()()()()),t&2){let a=wk(10);Ut(8),Mo(`matchHeight`,a)(`codeFiles`,i.codeFiles)(`readmePath`,i.modalReadmePath()),Ut(10),zc(i.resultMessage()),Ut(),Mo(`formGroup`,i.form),Ut(4),Mo(`errorMessages`,tA(8,xe))(`options`,i.layoutSelectOptions),ox(),Ut(),ox(),Ut(),ox(),Ut(5),ox(),Ut(),ox(),Ut(),ox(),Ut(),ox(),Ut(),ox(),Ut(),ox(),Ut(7),Op(i.breakpointKeys),Ut(3),Mo(`disabled`,i.form.invalid)}},dependencies:[Ar,Lu,Gw,mY,fY,uY,dY,zN,JN,R,S,j,L,ue],styles:[`
[_nghost-%COMP%] {
  width: 100%;
}
.breakpoints-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 1rem;
}`],changeDetection:1})};export{pe as Modal};