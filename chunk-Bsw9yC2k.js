import{W as ks,m as Ln,rt as zn}from"./chunk-DE1qZ0OS.js";import"./chunk-1rrlZ2Ss.js";import{$r as fa,In as XT,Lt as Os,Sr as ba,bo as wk,i as $n,k as Ey,wr as br,zi as ke}from"./chunk-CVY9_LoB.js";function M(n,t){n&1&&XT(0,`Project overview`)}function O(n,t){n&1&&XT(0,`Workspace settings`)}var u=class n{args=ke.required();action=wk();onAction(t,e){this.action.emit({name:t,payload:e})}static ɵfac=function(e){return new(e||n)};static ɵcmp=$n({type:n,selectors:[[`app-tabs-story`]],inputs:{args:[1,`args`]},outputs:{action:`action`},decls:5,vars:4,consts:[[3,`selectedValueChange`,`variant`,`ariaLabel`,`dragSelection`,`selectedValue`],[`label`,`Overview`,`value`,`overview`],[`bxTabContent`,``],[`label`,`Details`,`value`,`details`]],template:function(e,a){e&1&&(Os(0,`bx-tabs`,0),br(`selectedValueChange`,function(P){return a.onAction(`selectedValueChange`,P)}),Os(1,`bx-tab`,1),Ey(2,M,1,0,`ng-template`,2),ba(),Os(3,`bx-tab`,3),Ey(4,O,1,0,`ng-template`,2),ba()()),e&2&&fa(`variant`,a.args().variant)(`ariaLabel`,a.args().ariaLabel)(`dragSelection`,a.args().dragSelection)(`selectedValue`,a.args().selectedValue)},dependencies:[ks,zn,Ln],styles:[`
[_nghost-%COMP%] {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--%NS%bx-space-4, 1rem);
  box-sizing: border-box;
  inline-size: 100%;
  min-inline-size: 0;
  max-inline-size: 100%;
}
[_nghost-%COMP%]    > *[_ngcontent-%COMP%] {
  min-inline-size: 0;
}
[_nghost-%COMP%]    > [_ngcontent-%COMP%]:not(bx-container) {
  max-inline-size: 100%;
}
[_nghost-%COMP%]    > bx-form-field[_ngcontent-%COMP%], 
[_nghost-%COMP%]    > input[type=range][_ngcontent-%COMP%], 
[_nghost-%COMP%]    > bx-range-slider[_ngcontent-%COMP%], 
[_nghost-%COMP%]    > bx-input-field[_ngcontent-%COMP%], 
[_nghost-%COMP%]    > bx-select[_ngcontent-%COMP%], 
[_nghost-%COMP%]    > bx-multi-select[_ngcontent-%COMP%], 
[_nghost-%COMP%]    > bx-autocomplete[_ngcontent-%COMP%], 
[_nghost-%COMP%]    > bx-date-picker[_ngcontent-%COMP%], 
[_nghost-%COMP%]    > bx-time-picker[_ngcontent-%COMP%], 
[_nghost-%COMP%]    > bx-search-input[_ngcontent-%COMP%] {
  inline-size: min(100%, 26rem);
}
[_nghost-%COMP%]    > button[_ngcontent-%COMP%] {
  white-space: normal;
  overflow-wrap: anywhere;
}
[_nghost-%COMP%]    > bx-alert[_ngcontent-%COMP%], 
[_nghost-%COMP%]    > bx-modal-banner[_ngcontent-%COMP%], 
[_nghost-%COMP%]    > bx-card[_ngcontent-%COMP%], 
[_nghost-%COMP%]    > bx-collapsible[_ngcontent-%COMP%], 
[_nghost-%COMP%]    > bx-accordion[_ngcontent-%COMP%], 
[_nghost-%COMP%]    > bx-side-panel-layout[_ngcontent-%COMP%], 
[_nghost-%COMP%]    > bx-virtual-collection[_ngcontent-%COMP%], 
[_nghost-%COMP%]    > bx-page-container[_ngcontent-%COMP%], 
[_nghost-%COMP%]    > bx-container[_ngcontent-%COMP%], 
[_nghost-%COMP%]    > bx-stack[_ngcontent-%COMP%], 
[_nghost-%COMP%]    > bx-grid[_ngcontent-%COMP%], 
[_nghost-%COMP%]    > bx-stepper[_ngcontent-%COMP%], 
[_nghost-%COMP%]    > bx-top-nav[_ngcontent-%COMP%] {
  inline-size: 100%;
}`]})};export{u as TabsStory};