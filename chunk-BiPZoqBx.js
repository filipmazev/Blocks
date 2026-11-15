import{$ as sl,U as jn}from"./chunk-DE1qZ0OS.js";import"./chunk-1rrlZ2Ss.js";import{$r as fa,In as XT,Lt as Os,Sr as ba,ar as Zy,bo as wk,i as $n,k as Ey,v as CT,xn as Ul,zi as ke}from"./chunk-CVY9_LoB.js";function b(e,t){if(e&1&&XT(0),e&2){let n=t.$implicit;Zy(n)}}var P=class e{args=ke.required();action=wk();trackItem(t,n){return n}onAction(t,n){this.action.emit({name:t,payload:n})}static ɵfac=function(n){return new(n||e)};static ɵcmp=$n({type:e,selectors:[[`app-virtual-collection-story`]],inputs:{args:[1,`args`]},outputs:{action:`action`},decls:3,vars:4,consts:[[`collection`,``],[3,`items`,`itemRole`,`trackBy`],[3,`bxVirtualItem`]],template:function(n,o){if(n&1&&(Os(0,`bx-virtual-collection`,1,0),Ey(2,b,1,1,`ng-template`,2),ba()),n&2){let O=CT(1);fa(`items`,o.args().items)(`itemRole`,o.args().itemRole)(`trackBy`,o.trackItem),Ul(2),fa(`bxVirtualItem`,O)}},dependencies:[sl,jn],styles:[`
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
}`]})};export{P as VirtualCollectionStory};