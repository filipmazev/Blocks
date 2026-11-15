import{p as Bn,y as ft}from"./main-ZZPER4U3.js";import"./chunk-1KtowfUg.js";import"./chunk-BEm-ihzG.js";import"./chunk-DE1qZ0OS.js";import"./chunk-1rrlZ2Ss.js";import{$r as fa,In as XT,Lt as Os,Sr as ba,bo as wk,i as $n,wr as br,zi as ke}from"./chunk-CVY9_LoB.js";var C=class p{args=ke.required();action=wk();onAction(r,t){this.action.emit({name:r,payload:t})}static ɵfac=function(t){return new(t||p)};static ɵcmp=$n({type:p,selectors:[[`app-stepper-story`]],inputs:{args:[1,`args`]},outputs:{action:`action`},decls:5,vars:21,consts:[[3,`stepRequested`,`selectionChanged`,`transitionFinished`,`completed`,`activeStepChange`,`mode`,`variant`,`size`,`orientation`,`responsive`,`showLabels`,`showDescriptions`,`indicatorInteractive`,`readOnly`,`readonly`,`linear`,`selectionMode`,`controls`,`contentPolicy`,`focusOnChange`,`progressValue`,`progressFormat`,`showPercentage`,`glassiness`,`surfaceEffects`,`activeStep`],[`id`,`details`,`label`,`Details`],[`id`,`review`,`label`,`Review`]],template:function(t,e){t&1&&(Os(0,`bx-stepper`,0),br(`stepRequested`,function(n){return e.onAction(`stepRequested`,n)})(`selectionChanged`,function(n){return e.onAction(`selectionChanged`,n)})(`transitionFinished`,function(n){return e.onAction(`transitionFinished`,n)})(`completed`,function(n){return e.onAction(`completed`,n)})(`activeStepChange`,function(n){return e.onAction(`activeStepChange`,n)}),Os(1,`bx-step`,1),XT(2,`Project details`),ba(),Os(3,`bx-step`,2),XT(4,`Review your project`),ba()()),t&2&&fa(`mode`,e.args().mode)(`variant`,e.args().variant)(`size`,e.args().size)(`orientation`,e.args().orientation)(`responsive`,e.args().responsive)(`showLabels`,e.args().showLabels)(`showDescriptions`,e.args().showDescriptions)(`indicatorInteractive`,e.args().indicatorInteractive)(`readOnly`,e.args().readOnly)(`readonly`,e.args().readonly)(`linear`,e.args().linear)(`selectionMode`,e.args().selectionMode)(`controls`,e.args().controls)(`contentPolicy`,e.args().contentPolicy)(`focusOnChange`,e.args().focusOnChange)(`progressValue`,e.args().progressValue)(`progressFormat`,e.args().progressFormat)(`showPercentage`,e.args().showPercentage)(`glassiness`,e.args().glassiness)(`surfaceEffects`,e.args().surfaceEffects)(`activeStep`,e.args().activeStep)},dependencies:[Bn,ft],styles:[`
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
}`]})};export{C as StepperStory};