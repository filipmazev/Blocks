import{l as Ft}from"./chunk-BEm-ihzG.js";import"./chunk-DE1qZ0OS.js";import"./chunk-1rrlZ2Ss.js";import{$r as fa,Lt as Os,Sr as ba,bo as wk,i as $n,wr as br,zi as ke}from"./chunk-CVY9_LoB.js";var m=class i{args=ke.required();action=wk();onNativeValue(t){let n=t.target;n instanceof HTMLInputElement&&this.onAction(`valueChange`,n.valueAsNumber)}onAction(t,n){this.action.emit({name:t,payload:n})}static ɵfac=function(n){return new(n||i)};static ɵcmp=$n({type:i,selectors:[[`app-slider-story`]],inputs:{args:[1,`args`]},outputs:{action:`action`},decls:1,vars:7,consts:[[`type`,`range`,`bxSlider`,``,`aria-label`,`Volume`,3,`input`,`glassiness`,`discrete`,`showTickMarks`,`min`,`max`,`step`,`value`]],template:function(n,e){n&1&&(Os(0,`input`,0),br(`input`,function(u){return e.onNativeValue(u)}),ba()),n&2&&fa(`glassiness`,e.args().glassiness)(`discrete`,e.args().discrete)(`showTickMarks`,e.args().showTickMarks)(`min`,e.args().min)(`max`,e.args().max)(`step`,e.args().step)(`value`,e.args().value)},dependencies:[Ft],styles:[`
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
}`]})};export{m as SliderStory};