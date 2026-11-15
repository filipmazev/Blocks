import{J as ol,Q as rl}from"./chunk-DE1qZ0OS.js";import"./chunk-1rrlZ2Ss.js";import{$r as fa,In as XT,Lt as Os,Sr as ba,ar as Zy,bo as wk,i as $n,wr as br,xn as Ul,zi as ke}from"./chunk-CVY9_LoB.js";var C=class l{args=ke.required();action=wk();onAction(t,n){this.action.emit({name:t,payload:n})}static ɵfac=function(n){return new(n||l)};static ɵcmp=$n({type:l,selectors:[[`app-side-panel-story`]],inputs:{args:[1,`args`]},outputs:{action:`action`},decls:5,vars:22,consts:[[2,`block-size`,`18rem`],[3,`openChange`,`widthChange`,`open`,`placement`,`width`,`resizable`,`resizeMinWidth`,`resizeMaxWidth`,`resizeDisableShrink`,`resizeLabel`,`resizeIdleDelay`,`container`,`layoutMode`,`backdrop`,`closeOnBackdrop`,`closeOnEscape`,`showCloseButton`,`ariaLabel`,`closeLabel`,`labelledBy`,`autoFocus`,`restoreFocus`,`animationDuration`]],template:function(n,e){n&1&&(Os(0,`bx-side-panel-layout`,0)(1,`bx-side-panel`,1),br(`openChange`,function(o){return e.onAction(`openChange`,o)})(`widthChange`,function(o){return e.onAction(`widthChange`,o)}),XT(2),ba(),Os(3,`p`),XT(4,`Project content remains available beside the panel.`),ba()()),n&2&&(Ul(),fa(`open`,e.args().open)(`placement`,e.args().placement)(`width`,e.args().width)(`resizable`,e.args().resizable)(`resizeMinWidth`,e.args().resizeMinWidth)(`resizeMaxWidth`,e.args().resizeMaxWidth)(`resizeDisableShrink`,e.args().resizeDisableShrink)(`resizeLabel`,e.args().resizeLabel)(`resizeIdleDelay`,e.args().resizeIdleDelay)(`container`,e.args().container)(`layoutMode`,e.args().layoutMode)(`backdrop`,e.args().backdrop)(`closeOnBackdrop`,e.args().closeOnBackdrop)(`closeOnEscape`,e.args().closeOnEscape)(`showCloseButton`,e.args().showCloseButton)(`ariaLabel`,e.args().ariaLabel)(`closeLabel`,e.args().closeLabel)(`labelledBy`,e.args().labelledBy)(`autoFocus`,e.args().autoFocus)(`restoreFocus`,e.args().restoreFocus)(`animationDuration`,e.args().animationDuration),Ul(),Zy(e.args().content))},dependencies:[rl,ol],styles:[`
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
}`]})};export{C as SidePanelStory};