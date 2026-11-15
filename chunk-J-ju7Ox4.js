import{w as Wi}from"./chunk-DE1qZ0OS.js";import"./chunk-1rrlZ2Ss.js";import{$r as fa,In as XT,Lt as Os,Sr as ba,ar as Zy,bo as wk,i as $n,wr as br,xn as Ul,zi as ke}from"./chunk-CVY9_LoB.js";var O=class o{args=ke.required();action=wk();onAction(e,t){this.action.emit({name:e,payload:t})}static ɵfac=function(t){return new(t||o)};static ɵcmp=$n({type:o,selectors:[[`app-menu-item-story`]],inputs:{args:[1,`args`]},outputs:{action:`action`},decls:2,vars:9,consts:[[3,`action`,`icon`,`endIcon`,`label`,`wrapLabel`,`tooltipOnTruncate`,`disabled`,`danger`,`shortcut`]],template:function(t,n){t&1&&(Os(0,`bx-menu-item`,0),br(`action`,function(_){return n.onAction(`action`,_)}),XT(1),ba()),t&2&&(fa(`icon`,n.args().icon)(`endIcon`,n.args().endIcon)(`label`,n.args().label)(`wrapLabel`,n.args().wrapLabel)(`tooltipOnTruncate`,n.args().tooltipOnTruncate)(`disabled`,n.args().disabled)(`danger`,n.args().danger)(`shortcut`,n.args().shortcut),Ul(),Zy(n.args().content))},dependencies:[Wi],styles:[`
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
}`]})};export{O as MenuItemStory};