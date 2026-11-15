import{D as fe}from"./chunk-BEm-ihzG.js";import{g as Pt}from"./chunk-DE1qZ0OS.js";import"./chunk-1rrlZ2Ss.js";import{$r as fa,Ba as rm,In as XT,Lt as Os,Sr as ba,bo as wk,i as $n,xn as Ul,zi as ke}from"./chunk-CVY9_LoB.js";var C=class e{args=ke.required();action=wk();onAction(o,n){this.action.emit({name:o,payload:n})}static ɵfac=function(n){return new(n||e)};static ɵcmp=$n({type:e,selectors:[[`app-tooltip-directive-story`]],inputs:{args:[1,`args`]},outputs:{action:`action`},decls:2,vars:6,consts:[[`type`,`button`,`bx-button`,``,3,`bxTooltip`,`placement`,`bxTooltipTouch`,`bxTooltipHover`,`bxTooltipTruncatedOnly`]],template:function(n,t){n&1&&(Os(0,`button`,0),XT(1),ba()),n&2&&(fa(`bxTooltip`,t.args().bxTooltip)(`placement`,t.args().placement)(`bxTooltipTouch`,t.args().bxTooltipTouch)(`bxTooltipHover`,t.args().bxTooltipHover)(`bxTooltipTruncatedOnly`,t.args().bxTooltipTruncatedOnly),Ul(),rm(` `,t.args().content,`
`))},dependencies:[Pt,fe],styles:[`
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
}`]})};export{C as TooltipDirectiveStory};