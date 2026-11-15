import{I as cn}from"./chunk-DE1qZ0OS.js";import"./chunk-1rrlZ2Ss.js";import{$a as tm,$r as fa,Ba as rm,In as XT,Lt as Os,Sr as ba,bo as wk,i as $n,v as CT,wr as br,xn as Ul,zi as ke}from"./chunk-CVY9_LoB.js";var P=class l{args=ke.required();action=wk();onAction(r,i){this.action.emit({name:r,payload:i})}static ɵfac=function(i){return new(i||l)};static ɵcmp=$n({type:l,selectors:[[`app-resize-handle-story`]],inputs:{args:[1,`args`]},outputs:{action:`action`},decls:6,vars:16,consts:[[`container`,``],[`surface`,``],[2,`position`,`relative`,`inline-size`,`100%`,`min-block-size`,`12rem`],[2,`max-inline-size`,`100%`],[`bxResizeHandle`,``,3,`resizeStart`,`resizeEnd`,`resizeValueChange`,`resizeContainer`,`resizeTarget`,`resizeValue`,`resizeEdge`,`resizeMinSize`,`resizeMaxSize`,`resizeInitialSize`,`resizeDisableShrink`,`resizeDisabled`,`resizeLabel`,`resizeControls`,`resizeStep`,`resizeIdleDelay`]],template:function(i,e){if(i&1&&(Os(0,`div`,2,0)(2,`div`,3,1),XT(4),Os(5,`div`,4),br(`resizeStart`,function(n){return e.onAction(`resizeStart`,n)})(`resizeEnd`,function(n){return e.onAction(`resizeEnd`,n)})(`resizeValueChange`,function(n){return e.onAction(`resizeValueChange`,n)}),ba()()()),i&2){let t=CT(1),n=CT(3);Ul(2),tm(`inline-size`,e.args().resizeValue,`px`),Ul(2),rm(` `,e.args().content,` `),Ul(),fa(`resizeContainer`,t)(`resizeTarget`,n)(`resizeValue`,e.args().resizeValue)(`resizeEdge`,e.args().resizeEdge)(`resizeMinSize`,e.args().resizeMinSize)(`resizeMaxSize`,e.args().resizeMaxSize)(`resizeInitialSize`,e.args().resizeInitialSize)(`resizeDisableShrink`,e.args().resizeDisableShrink)(`resizeDisabled`,e.args().resizeDisabled)(`resizeLabel`,e.args().resizeLabel)(`resizeControls`,e.args().resizeControls)(`resizeStep`,e.args().resizeStep)(`resizeIdleDelay`,e.args().resizeIdleDelay)}},dependencies:[cn],styles:[`
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
}`]})};export{P as ResizeHandleStory};