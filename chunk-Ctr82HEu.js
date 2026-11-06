import{t as D}from"./chunk-DhQs7-_U.js";import"./chunk-DGiA6seu.js";import{D as wi,G as ln,H as an,K as on,U as he$1,q as rn,v as Qn,w as ki}from"./main-U2OBHRR6.js";import{r as Z}from"./chunk-Ugx93LBR.js";import{$t as Te,Bi as s_,Bn as aS,Cn as XF,Dr as gr,Er as go,Fr as i2,Ft as P1,Gi as ste,Hn as ae,Hr as ite,Jr as jn,Kr as je,Mr as hk,Nn as _,Nr as hr,Nt as Ot,On as Ya,U as Gk,Ur as j,Xn as bn,_i as ote,_n as Wf,an as V,b as D$1,c as AO,dn as Vn,fr as eM,ft as LR,ga as yb,hn as Wa,hr as fM,ia as vn,ir as cte,j as F,jt as Op,kt as OR,ln as Ve,nn as U,o as A1,ra as ve$1,u as Af,ui as nn,va as yr,vi as p,vr as fn,yn as Wk}from"./chunk-DBDMpaTC.js";import{n as s,t as r}from"./chunk-C9yOwMO6.js";var P=class{layout=`right`;animate=!0;hasBackdrop=!0;showCloseButton=!0;title=``;headerText=``;disableClose=!1;disableCloseOnBackdropClick=!1;hasConfirmCloseGuard=!0;constructor(e){Object.assign(this,e)}};function ye(r,e){if(r&1){let t=hr();j(0,`div`,1)(1,`button`,2),ve$1(`click`,function(){bn(t);let a=F();return vn(a.confirm())}),Te(2,`Confirm`),U(),j(3,`button`,3),ve$1(`click`,function(){bn(t);let a=F();return vn(a.close())}),Te(4,`Cancel`),U()()}}var B=class r extends an{confirm(){this.modal?.close(`confirm`)}static ɵfac=(()=>{let e;return function(i){return(e||(e=go(r)))(i||r)}})();static ɵcmp=V({type:r,selectors:[[`app-confirm-close`]],features:[nn],decls:3,vars:1,consts:[[`class`,`button-container`,4,`appModalFooter`],[1,`button-container`],[`type`,`button`,`bx-button`,``,`variant`,`filled`,`color`,`success`,3,`click`],[`type`,`button`,`bx-button`,``,`variant`,`filled`,`color`,`danger`,3,`click`]],template:function(t,i){t&1&&(j(0,`div`),Te(1),U(),aS(2,ye,5,0,`div`,0)),t&2&&(D$1(),gr(` `,i.data,`
`))},dependencies:[rn,Z],styles:[`
.button-container[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 1rem;
}
.button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {
  cursor: pointer;
}`]})};var Ce=(r,e)=>({"side-modal":r,"center-modal":e});function he(r,e){if(r&1&&(j(0,`div`),Te(1),U()),r&2){let t=F();D$1(),gr(` `,t.data.title,`
`)}}function xe(r,e){if(r&1){let t=hr();j(0,`bx-menu`)(1,`bx-menu-item`,14),ve$1(`action`,function(){bn(t);let a=F();return vn(a.selectAction(`Edit details`))}),U(),j(2,`bx-menu-item`,15),ve$1(`action`,function(){bn(t);let a=F();return vn(a.selectAction(`Duplicate`))}),U()()}}function _e(r,e){if(r&1){let t=hr();j(0,`bx-menu`)(1,`bx-menu-item`,16),ve$1(`action`,function(){bn(t);let a=F();return vn(a.selectAction(`Copy link`))}),U(),j(2,`bx-menu-item`,17),ve$1(`action`,function(){bn(t);let a=F();return vn(a.selectAction(`Archive`))}),U(),j(3,`bx-menu-item`,18),ve$1(`action`,function(){bn(t);let a=F();return vn(a.selectAction(`Delete`))}),U()()}r&2&&(D$1(3),ae(`danger`,!0))}function Me(r,e){if(r&1){let t=hr();j(0,`div`,19)(1,`button`,20),ve$1(`click`,function(){bn(t);let a=F();return vn(a.confirm())}),Te(2,`Confirm`),U(),j(3,`button`,21),ve$1(`click`,function(){bn(t);let a=F();return vn(a.close())}),Te(4,`Cancel`),U()()}}var T=class r$1 extends an{modalService=p(he$1);menuStatus=_(`Try either menu. Actions keep this modal open.`);isSideModal=_(!1);isCenteredModal=_(!1);onModalInit(){let e=this.modal?.modalConfig?.style.layout;this.isSideModal.set(e===`right`||e===`left`),this.isCenteredModal.set(e===`center`)}confirm(){this.modal?.close(`confirm`,{openedCount:this.data.openedCount+1})}selectAction(e){this.menuStatus.set(`${e} selected. The modal is still open.`)}openNested(){this.modalService.open(r$1,{data:s(r({},this.data),{title:`Nested dialog`,body:`The first nested dialog uses at least 90% material opacity. Open another to see a fully opaque surface. Closing returns to the unchanged parent.`}),header:{text:`Nested dialog`,icon:{name:`layers`,color:`accent`,bgColor:`auto`}},style:{layout:`center`,hasBackdrop:!0,animate:this.modal.modalConfig?.style.animate??!0}})}static ɵfac=(()=>{let e;return function(i){return(e||(e=go(r$1)))(i||r$1)}})();static ɵcmp=V({type:r$1,selectors:[[`app-demo-modal`]],features:[nn],decls:29,vars:8,consts:[[`dropdownActions`,``],[`contextActions`,``],[4,`appModalHeader`],[1,`demo-modal-content-class`,3,`ngClass`],[`aria-label`,`Menus inside this modal`,1,`modal-menu-demo`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`primary`,`placement`,`bottom`,3,`bxDropdown`],[`name`,`chevron-down`,`size`,`16`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`grayscale`,1,`modal-context-target`,3,`bxContextMenu`],[`name`,`mouse-pointer-2`,`size`,`16`],[1,`menu-hint`],[`role`,`status`,1,`menu-status`],[`aria-label`,`Nested dialogs`,1,`modal-nesting-demo`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`accent`,3,`click`],[`class`,`button-container`,4,`appModalFooter`],[`label`,`Edit details`,`icon`,`pencil`,3,`action`],[`label`,`Duplicate`,`icon`,`copy`,3,`action`],[`label`,`Copy link`,`icon`,`link`,3,`action`],[`label`,`Archive`,`icon`,`archive`,3,`action`],[`label`,`Delete`,`icon`,`trash-2`,3,`action`,`danger`],[1,`button-container`],[`type`,`button`,`bx-button`,``,`variant`,`filled`,`color`,`success`,3,`click`],[`type`,`button`,`bx-button`,``,`variant`,`filled`,`color`,`danger`,3,`click`]],template:function(t,i){if(t&1&&(aS(0,he,2,1,`div`,2),j(1,`div`,3)(2,`div`),Te(3),U(),j(4,`section`,4)(5,`h3`),Te(6,`Menus inside the modal`),U(),j(7,`button`,5),Te(8,` Open actions`),Ve(9,`bx-icon`,6),U(),j(10,`button`,7),Ve(11,`bx-icon`,8),Te(12,`Right-click or hold for more actions `),U(),j(13,`p`,9),Te(14,` On touch screens, touch and hold for more actions. With a keyboard, focus the example and press Shift + F10. Escape closes the menu first. `),U(),j(15,`p`,10),Te(16),U()(),j(17,`section`,11)(18,`h3`),Te(19,`Nested dialogs`),U(),j(20,`p`),Te(21,`Compare independent backdrops and increasing material opacity while the parent stays open.`),U(),j(22,`button`,12),ve$1(`click`,function(){return i.openNested()}),Te(23,`Open nested dialog`),U()()(),aS(24,xe,3,0,`ng-template`,null,0,yb)(26,_e,4,1,`ng-template`,null,1,yb)(28,Me,5,0,`div`,13)),t&2){let a=Ya(25),ge=Ya(27);D$1(),ae(`ngClass`,P1(5,Ce,i.isSideModal(),i.isCenteredModal())),D$1(2),gr(` `,i.data.body,` `),D$1(4),ae(`bxDropdown`,a),D$1(3),ae(`bxContextMenu`,ge),D$1(6),je(i.menuStatus())}},dependencies:[ln,rn,AO,Z,Wf,eM,Wk,Gk,fn],styles:[`
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
.modal-menu-demo[_ngcontent-%COMP%], 
.modal-nesting-demo[_ngcontent-%COMP%] {
  display: grid;
  justify-items: start;
  gap: 0.75rem;
  padding-top: 1rem;
  border-top: 1px solid var(--%NS%bx-border-default);
}
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
}`]})};var ve=()=>({required:`Choose a layout.`});function Se(r,e){if(r&1&&(j(0,`bx-select`,22),OR(),U()),r&2){let t=e.$implicit,i=F();ae(`clearable`,!1)(`label`,t)(`formControlName`,t)(`options`,i.breakpointSelectOptions),LR()}}var be=class r{modalService=p(he$1);layoutOptions=[`center`,`right`,`left`,`bottom-sheet`];layoutSelectOptions=this.layoutOptions.map(e=>({label:e.split(`-`).map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(` `),value:e}));breakpointSelectOptions=[{label:`None`,value:`none`},...this.layoutSelectOptions];breakpointKeys=Object.keys(yr);form;resultMessage=_(`Open a modal to preview its layout and close behavior.`);modalReadmePath=_(`projects/blocks/modal/README.md`);codeFiles=[{title:`modal-usage.ts`,path:`assets/code-snippets/modal/modal-usage.ts.txt`,language:`typescript`},{title:`modal.ts`,path:`assets/code-snippets/modal/modal.ts.txt`,language:`typescript`},{title:`modal.html`,path:`assets/code-snippets/modal/modal.html.txt`,language:`html`},{title:`modal.scss`,path:`assets/code-snippets/modal/modal.scss.txt`,language:`scss`},{title:`confirm-close.ts`,path:`assets/code-snippets/modal/confirm-close-modal.ts.txt`,language:`typescript`},{title:`confirm-close.html`,path:`assets/code-snippets/modal/confirm-close-modal.html.txt`,language:`html`},{title:`confirm-close.scss`,path:`assets/code-snippets/modal/confirm-close-modal.scss.txt`,language:`scss`},{title:`styles.scss`,path:`assets/code-snippets/modal/styles.scss.txt`,language:`scss`}];openedCount=0;constructor(){let e={layout:new hk(`right`),animate:new hk(!0),hasBackdrop:new hk(!0),showCloseButton:new hk(!0),title:new hk(`Review your changes`),headerText:new hk(`Workspace settings`),disableClose:new hk(!1),disableCloseOnBackdropClick:new hk(!1),hasConfirmCloseGuard:new hk(!0)};this.breakpointKeys.forEach(t=>{let i=`none`;t===`sm`&&(i=`bottom-sheet`),t===`xl`&&(i=`center`),e[t]=new hk(i)}),this.form=new Af(e)}openModal(){let e=this.createRequest();if(!e)return;let t=e.headerText===``?null:e.headerText;this.modalService.open(T,{header:t===void 0?void 0:{text:t,icon:{name:`info`,color:`text-info`,bgColor:`auto`}},data:{title:e.title,body:`This dialog shares the application theme and appearance settings. Confirm to apply the example, or cancel to return to the playground.`,openedCount:this.openedCount},style:{layout:e.layout,animate:e.animate,hasBackdrop:e.hasBackdrop,showCloseButton:e.showCloseButton,breakpoints:this.getBreakpointsFromRequest(e)},disableClose:e.disableClose,disableCloseOnBackdropClick:e.disableCloseOnBackdropClick,closeGuard:e.hasConfirmCloseGuard?new on(B,{data:`Are you sure you want to close the modal?`,header:{text:`Unsaved Changes`},style:{showCloseButton:!1}}):void 0}).afterClosed().subscribe(a=>{a.state===`confirm`&&a.data?(this.openedCount=a.data.openedCount,this.resultMessage.set(`Changes confirmed. This modal has been confirmed ${this.openedCount} time${this.openedCount===1?``:`s`}.`)):this.resultMessage.set(`Modal closed. No changes were applied.`)})}createRequest(){if(this.form.invalid)return;let e=this.form.getRawValue();return new P(Object.fromEntries(Object.entries(e).map(([i,a])=>[i,a===null?void 0:a])))}getBreakpointsFromRequest(e){let t={};return this.breakpointKeys.forEach(i=>{let a=e[i];a&&a!==`none`&&(t[i]=a)}),t}static ɵfac=function(t){return new(t||r)};static ɵcmp=V({type:r,selectors:[[`app-modal`]],decls:41,vars:10,consts:[[`configPanel`,``],[`pageDescription`,`Configure modal layout, responsive behavior, close guards, and content using your shared appearance.`],[1,`demo-container`],[3,`matchHeight`,`codeFiles`,`readmePath`],[`bxSurface`,``,1,`config-container`],[1,`config-header`],[1,`hint`],[`routerLink`,`/appearance`],[`role`,`status`,1,`hint`],[1,`config-form`,`form-section`,3,`formGroup`],[1,`form-section`],[`label`,`Default Layout`,`formControlName`,`layout`,`subscriptSizing`,`dynamic`,3,`clearable`,`errorMessages`,`options`],[`label`,`Header Text`,`formControlName`,`headerText`,`subscriptSizing`,`dynamic`],[`label`,`Title`,`formControlName`,`title`,`subscriptSizing`,`dynamic`],[1,`form-checkboxes`],[`label`,`Animate`,`formControlName`,`animate`,`subscriptSizing`,`dynamic`],[`label`,`Has Backdrop`,`formControlName`,`hasBackdrop`,`subscriptSizing`,`dynamic`],[`label`,`Show Close Button`,`formControlName`,`showCloseButton`,`subscriptSizing`,`dynamic`],[`label`,`Disable Close (Global)`,`formControlName`,`disableClose`,`tooltip`,`Prevents closing via ESC key or backdrop clicks.`,`subscriptSizing`,`dynamic`],[`label`,`Disable Backdrop Click`,`formControlName`,`disableCloseOnBackdropClick`,`subscriptSizing`,`dynamic`],[`label`,`Use Confirm Close Guard`,`formControlName`,`hasConfirmCloseGuard`,`tooltip`,`Intercepts the close event and prompts the user to confirm.`,`subscriptSizing`,`dynamic`],[1,`breakpoints-grid`],[`subscriptSizing`,`dynamic`,3,`clearable`,`label`,`formControlName`,`options`],[1,`actions`],[`type`,`button`,`bx-button`,``,`variant`,`filled`,`color`,`grayscale`,3,`click`,`disabled`]],template:function(t,i){if(t&1&&(j(0,`bx-page-container`,1)(1,`div`,2),Ve(2,`app-component-info`,3),j(3,`div`,4,0)(5,`div`,5),Te(6,`Configurator`),U(),j(7,`p`,6),Te(8,`Uses your shared appearance. `),j(9,`a`,7),Te(10,`Adjust appearance settings`),U()(),j(11,`p`,8),Te(12),U(),j(13,`form`,9)(14,`div`,10)(15,`h3`),Te(16,`General Style`),U(),j(17,`bx-select`,11),OR(),U(),j(18,`bx-input-field`,12),OR(),U(),j(19,`bx-input-field`,13),OR(),U()(),j(20,`div`,10)(21,`h3`),Te(22,`Behavior & Toggles`),U(),j(23,`div`,14)(24,`bx-checkbox`,15),OR(),U(),j(25,`bx-checkbox`,16),OR(),U(),j(26,`bx-checkbox`,17),OR(),U(),j(27,`bx-checkbox`,18),OR(),U(),j(28,`bx-checkbox`,19),OR(),U(),j(29,`bx-checkbox`,20),OR(),U()()(),j(30,`div`,10)(31,`h3`),Te(32,`Responsive Breakpoints`),U(),j(33,`p`,6),Te(34,`Select 'none' to ignore that breakpoint.`),U(),j(35,`div`,21),Vn(36,Se,1,4,`bx-select`,22,Wa),U()()(),j(38,`div`,23)(39,`button`,24),ve$1(`click`,function(){return i.openModal()}),Te(40,`Open Modal`),U()()()()()),t&2){let a=Ya(4);D$1(2),ae(`matchHeight`,a)(`codeFiles`,i.codeFiles)(`readmePath`,i.modalReadmePath()),D$1(10),je(i.resultMessage()),D$1(),ae(`formGroup`,i.form),D$1(4),ae(`clearable`,!1)(`errorMessages`,A1(9,ve))(`options`,i.layoutSelectOptions),LR(),D$1(),LR(),D$1(),LR(),D$1(5),LR(),D$1(),LR(),D$1(),LR(),D$1(),LR(),D$1(),LR(),D$1(),LR(),D$1(7),jn(i.breakpointKeys),D$1(3),ae(`disabled`,i.form.invalid)}},dependencies:[fM,Ot,Op,s_,cte,ste,ote,ite,XF,i2,D,Z,wi,Qn,ki],styles:[`
[_nghost-%COMP%] {
  display: block;
  min-inline-size: 0;
}
.breakpoints-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 1rem;
}`]})};export{be as Modal};