import{t as D}from"./chunk-DBA60k9e.js";import"./chunk-DTPx3lgi.js";import{B as ge$1,C as Xn,H as ln,U as on,W as rn,p as Ci,v as Ni,z as an}from"./main-2GBJQHUZ.js";import{r as Z}from"./chunk-DUDY88j1.js";import{$ as JS,Ai as tt,Bi as wn,Bn as ar,C as Df,Cn as Xw,Di as te,Fn as _p,Ft as Pi,Gt as Ree,Ht as Qt,Jn as cb,Jr as m1,Jt as Se,Ki as xR,Ni as vO,Pi as vR,Rn as ab,Xi as xr,Xr as mO,Y as Iee,aa as zM,an as UF,ci as p,dn as Vf,ea as ye$1,in as U,ir as eI,jr as k,jt as PM,ki as to,l as Be,la as zt,lt as M,mt as Mee,na as yr,oi as oe,or as eo,ot as LM,pi as qa,tn as Tee,vt as Ne,wr as j,wt as OF,xr as iM,yi as rr,zn as ao}from"./chunk-CfQ5k3AW.js";var I=class{layout=`right`;animate=!0;hasBackdrop=!0;showCloseButton=!0;title=``;headerText=``;disableClose=!1;disableCloseOnBackdropClick=!1;hasConfirmCloseGuard=!0;constructor(e){Object.assign(this,e)}};function be(r,e){if(r&1){let t=Pi();te(0,`div`,1)(1,`button`,2),Ne(`click`,function(){eo(t);let a=U();return to(a.confirm())}),Se(2,`Confirm`),oe(),te(3,`button`,3),Ne(`click`,function(){eo(t);let a=U();return to(a.close())}),Se(4,`Cancel`),oe()()}}var B=class r extends an{confirm(){this.modal?.close(`confirm`)}static ɵfac=(()=>{let e;return function(o){return(e||(e=ao(r)))(o||r)}})();static ɵcmp=j({type:r,selectors:[[`app-confirm-close`]],features:[Qt],decls:3,vars:1,consts:[[`class`,`button-container`,4,`appModalFooter`],[1,`button-container`],[`type`,`button`,`bx-button`,``,`variant`,`filled`,`color`,`success`,3,`click`],[`type`,`button`,`bx-button`,``,`variant`,`filled`,`color`,`danger`,3,`click`]],template:function(t,o){t&1&&(te(0,`div`),Se(1),oe(),Xw(2,be,5,0,`div`,0)),t&2&&(k(),rr(` `,o.data,`
`))},dependencies:[rn,Z],styles:[`
.button-container[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 1rem;
}
.button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {
  cursor: pointer;
}`]})};var ye=(r,e)=>({"side-modal":r,"center-modal":e});function ge(r,e){if(r&1&&(te(0,`div`),Se(1),oe()),r&2){let t=U();k(),rr(` `,t.data.title,`
`)}}function Ce(r,e){if(r&1){let t=Pi();te(0,`bx-menu`)(1,`bx-menu-item`,12),Ne(`action`,function(){eo(t);let a=U();return to(a.selectAction(`Edit details`))}),oe(),te(2,`bx-menu-item`,13),Ne(`action`,function(){eo(t);let a=U();return to(a.selectAction(`Duplicate`))}),oe()()}}function xe(r,e){if(r&1){let t=Pi();te(0,`bx-menu`)(1,`bx-menu-item`,14),Ne(`action`,function(){eo(t);let a=U();return to(a.selectAction(`Copy link`))}),oe(),te(2,`bx-menu-item`,15),Ne(`action`,function(){eo(t);let a=U();return to(a.selectAction(`Archive`))}),oe(),te(3,`bx-menu-item`,16),Ne(`action`,function(){eo(t);let a=U();return to(a.selectAction(`Delete`))}),oe()()}r&2&&(k(3),ye$1(`danger`,!0))}function he(r,e){if(r&1){let t=Pi();te(0,`div`,17)(1,`button`,18),Ne(`click`,function(){eo(t);let a=U();return to(a.confirm())}),Se(2,`Confirm`),oe(),te(3,`button`,19),Ne(`click`,function(){eo(t);let a=U();return to(a.close())}),Se(4,`Cancel`),oe()()}}var F=class r extends an{menuStatus=M(`Try either menu. Actions keep this modal open.`);isSideModal=M(!1);isCenteredModal=M(!1);onModalInit(){let e=this.modal?.modalConfig?.style.layout;this.isSideModal.set(e===`right`||e===`left`),this.isCenteredModal.set(e===`center`)}confirm(){this.modal?.close(`confirm`,{openedCount:this.data.openedCount+1})}selectAction(e){this.menuStatus.set(`${e} selected. The modal is still open.`)}static ɵfac=(()=>{let e;return function(o){return(e||(e=ao(r)))(o||r)}})();static ɵcmp=j({type:r,selectors:[[`app-demo-modal`]],features:[Qt],decls:22,vars:8,consts:[[`dropdownActions`,``],[`contextActions`,``],[4,`appModalHeader`],[1,`demo-modal-content-class`,3,`ngClass`],[`aria-label`,`Menus inside this modal`,1,`modal-menu-demo`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`primary`,`placement`,`bottom`,3,`bxDropdown`],[`name`,`chevron-down`,`size`,`16`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`grayscale`,1,`modal-context-target`,3,`bxContextMenu`],[`name`,`mouse-pointer-2`,`size`,`16`],[1,`menu-hint`],[`role`,`status`,1,`menu-status`],[`class`,`button-container`,4,`appModalFooter`],[`label`,`Edit details`,`icon`,`pencil`,3,`action`],[`label`,`Duplicate`,`icon`,`copy`,3,`action`],[`label`,`Copy link`,`icon`,`link`,3,`action`],[`label`,`Archive`,`icon`,`archive`,3,`action`],[`label`,`Delete`,`icon`,`trash-2`,3,`action`,`danger`],[1,`button-container`],[`type`,`button`,`bx-button`,``,`variant`,`filled`,`color`,`success`,3,`click`],[`type`,`button`,`bx-button`,``,`variant`,`filled`,`color`,`danger`,3,`click`]],template:function(t,o){if(t&1&&(Xw(0,ge,2,1,`div`,2),te(1,`div`,3)(2,`div`),Se(3),oe(),te(4,`section`,4)(5,`h3`),Se(6,`Menus inside the modal`),oe(),te(7,`button`,5),Se(8,` Open actions`),tt(9,`bx-icon`,6),oe(),te(10,`button`,7),tt(11,`bx-icon`,8),Se(12,`Right-click or hold for more actions `),oe(),te(13,`p`,9),Se(14,` On touch screens, touch and hold for more actions. With a keyboard, focus the example and press Shift + F10. Escape closes the menu first. `),oe(),te(15,`p`,10),Se(16),oe()()(),Xw(17,Ce,3,0,`ng-template`,null,0,cb)(19,xe,4,1,`ng-template`,null,1,cb)(21,he,5,0,`div`,11)),t&2){let a=ab(18),fe=ab(20);k(),ye$1(`ngClass`,vO(5,ye,o.isSideModal(),o.isCenteredModal())),k(2),rr(` `,o.data.body,` `),k(4),ye$1(`bxDropdown`,a),k(3),ye$1(`bxContextMenu`,fe),k(6),Be(o.menuStatus())}},dependencies:[ln,rn,m1,Z,Vf,zM,LM,PM,wn],styles:[`
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
}`]})};var _e=()=>({required:`Choose a layout.`});function Me(r,e){if(r&1&&(te(0,`bx-select`,22),vR(),oe()),r&2){let t=e.$implicit,o=U();ye$1(`clearable`,!1)(`label`,t)(`formControlName`,t)(`options`,o.breakpointSelectOptions),xR()}}var ue=class r{modalService=p(ge$1);layoutOptions=[`center`,`right`,`left`,`bottom-sheet`];layoutSelectOptions=this.layoutOptions.map(e=>({label:e.split(`-`).map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(` `),value:e}));breakpointSelectOptions=[{label:`None`,value:`none`},...this.layoutSelectOptions];breakpointKeys=Object.keys(ar);form;resultMessage=M(`Open a modal to preview its layout and close behavior.`);modalReadmePath=M(`projects/blocks/modal/README.md`);codeFiles=[{title:`modal-usage.ts`,path:`assets/code-snippets/modal/modal-usage.ts.txt`,language:`typescript`},{title:`modal.ts`,path:`assets/code-snippets/modal/modal.ts.txt`,language:`typescript`},{title:`modal.html`,path:`assets/code-snippets/modal/modal.html.txt`,language:`html`},{title:`modal.scss`,path:`assets/code-snippets/modal/modal.scss.txt`,language:`scss`},{title:`confirm-close.ts`,path:`assets/code-snippets/modal/confirm-close-modal.ts.txt`,language:`typescript`},{title:`confirm-close.html`,path:`assets/code-snippets/modal/confirm-close-modal.html.txt`,language:`html`},{title:`confirm-close.scss`,path:`assets/code-snippets/modal/confirm-close-modal.scss.txt`,language:`scss`},{title:`styles.scss`,path:`assets/code-snippets/modal/styles.scss.txt`,language:`scss`}];openedCount=0;constructor(){let e={layout:new iM(`right`),animate:new iM(!0),hasBackdrop:new iM(!0),showCloseButton:new iM(!0),title:new iM(`Review your changes`),headerText:new iM(`Workspace settings`),disableClose:new iM(!1),disableCloseOnBackdropClick:new iM(!1),hasConfirmCloseGuard:new iM(!0)};this.breakpointKeys.forEach(t=>{let o=`none`;t===`sm`&&(o=`bottom-sheet`),t===`xl`&&(o=`center`),e[t]=new iM(o)}),this.form=new Df(e)}openModal(){let e=this.createRequest();if(!e)return;let t=e.headerText===``?null:e.headerText;this.modalService.open(F,{header:t===void 0?void 0:{text:t,icon:{name:`info`,color:`text-info`,bgColor:`auto`}},data:{title:e.title,body:`This dialog shares the application theme and appearance settings. Confirm to apply the example, or cancel to return to the playground.`,openedCount:this.openedCount},style:{layout:e.layout,animate:e.animate,hasBackdrop:e.hasBackdrop,showCloseButton:e.showCloseButton,breakpoints:this.getBreakpointsFromRequest(e)},disableClose:e.disableClose,disableCloseOnBackdropClick:e.disableCloseOnBackdropClick,closeGuard:e.hasConfirmCloseGuard?new on(B,{data:`Are you sure you want to close the modal?`,header:{text:`Unsaved Changes`},style:{showCloseButton:!1}}):void 0}).afterClosed().subscribe(a=>{a.state===`confirm`&&a.data?(this.openedCount=a.data.openedCount,this.resultMessage.set(`Changes confirmed. This modal has been confirmed ${this.openedCount} time${this.openedCount===1?``:`s`}.`)):this.resultMessage.set(`Modal closed. No changes were applied.`)})}createRequest(){if(this.form.invalid)return;let e=this.form.getRawValue();return new I(Object.fromEntries(Object.entries(e).map(([o,a])=>[o,a===null?void 0:a])))}getBreakpointsFromRequest(e){let t={};return this.breakpointKeys.forEach(o=>{let a=e[o];a&&a!==`none`&&(t[o]=a)}),t}static ɵfac=function(t){return new(t||r)};static ɵcmp=j({type:r,selectors:[[`app-modal`]],decls:41,vars:10,consts:[[`configPanel`,``],[`pageDescription`,`Configure modal layout, responsive behavior, close guards, and content using your shared appearance.`],[1,`demo-container`],[3,`matchHeight`,`codeFiles`,`readmePath`],[`bxSurface`,``,1,`config-container`],[1,`config-header`],[1,`hint`],[`routerLink`,`/appearance`],[`role`,`status`,1,`hint`],[1,`config-form`,`form-section`,3,`formGroup`],[1,`form-section`],[`label`,`Default Layout`,`formControlName`,`layout`,`subscriptSizing`,`dynamic`,3,`clearable`,`errorMessages`,`options`],[`label`,`Header Text`,`formControlName`,`headerText`,`subscriptSizing`,`dynamic`],[`label`,`Title`,`formControlName`,`title`,`subscriptSizing`,`dynamic`],[1,`form-checkboxes`],[`label`,`Animate`,`formControlName`,`animate`,`subscriptSizing`,`dynamic`],[`label`,`Has Backdrop`,`formControlName`,`hasBackdrop`,`subscriptSizing`,`dynamic`],[`label`,`Show Close Button`,`formControlName`,`showCloseButton`,`subscriptSizing`,`dynamic`],[`label`,`Disable Close (Global)`,`formControlName`,`disableClose`,`tooltip`,`Prevents closing via ESC key or backdrop clicks.`,`subscriptSizing`,`dynamic`],[`label`,`Disable Backdrop Click`,`formControlName`,`disableCloseOnBackdropClick`,`subscriptSizing`,`dynamic`],[`label`,`Use Confirm Close Guard`,`formControlName`,`hasConfirmCloseGuard`,`tooltip`,`Intercepts the close event and prompts the user to confirm.`,`subscriptSizing`,`dynamic`],[1,`breakpoints-grid`],[`subscriptSizing`,`dynamic`,3,`clearable`,`label`,`formControlName`,`options`],[1,`actions`],[`type`,`button`,`bx-button`,``,`variant`,`filled`,`color`,`grayscale`,3,`click`,`disabled`]],template:function(t,o){if(t&1&&(te(0,`bx-page-container`,1)(1,`div`,2),tt(2,`app-component-info`,3),te(3,`div`,4,0)(5,`div`,5),Se(6,`Configurator`),oe(),te(7,`p`,6),Se(8,`Uses your shared appearance. `),te(9,`a`,7),Se(10,`Adjust appearance settings`),oe()(),te(11,`p`,8),Se(12),oe(),te(13,`form`,9)(14,`div`,10)(15,`h3`),Se(16,`General Style`),oe(),te(17,`bx-select`,11),vR(),oe(),te(18,`bx-input-field`,12),vR(),oe(),te(19,`bx-input-field`,13),vR(),oe()(),te(20,`div`,10)(21,`h3`),Se(22,`Behavior & Toggles`),oe(),te(23,`div`,14)(24,`bx-checkbox`,15),vR(),oe(),te(25,`bx-checkbox`,16),vR(),oe(),te(26,`bx-checkbox`,17),vR(),oe(),te(27,`bx-checkbox`,18),vR(),oe(),te(28,`bx-checkbox`,19),vR(),oe(),te(29,`bx-checkbox`,20),vR(),oe()()(),te(30,`div`,10)(31,`h3`),Se(32,`Responsive Breakpoints`),oe(),te(33,`p`,6),Se(34,`Select 'none' to ignore that breakpoint.`),oe(),te(35,`div`,21),yr(36,Me,1,4,`bx-select`,22,qa),oe()()(),te(38,`div`,23)(39,`button`,24),Ne(`click`,function(){return o.openModal()}),Se(40,`Open Modal`),oe()()()()()),t&2){let a=ab(4);k(2),ye$1(`matchHeight`,a)(`codeFiles`,o.codeFiles)(`readmePath`,o.modalReadmePath()),k(10),Be(o.resultMessage()),k(),ye$1(`formGroup`,o.form),k(4),ye$1(`clearable`,!1)(`errorMessages`,mO(9,_e))(`options`,o.layoutSelectOptions),xR(),k(),xR(),k(),xR(),k(5),xR(),k(),xR(),k(),xR(),k(),xR(),k(),xR(),k(),xR(),k(7),xr(o.breakpointKeys),k(3),ye$1(`disabled`,o.form.invalid)}},dependencies:[eI,zt,_p,JS,Ree,Tee,Mee,Iee,OF,UF,D,Z,Ci,Xn,Ni],styles:[`
[_nghost-%COMP%] {
  display: block;
  min-inline-size: 0;
}
.breakpoints-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 1rem;
}`]})};export{ue as Modal};