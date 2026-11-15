import{P as al}from"./chunk-DE1qZ0OS.js";import"./chunk-1rrlZ2Ss.js";import{$r as fa,In as XT,Lt as Os,Sr as ba,b as Cy,bo as wk,i as $n,wr as br,zi as ke}from"./chunk-CVY9_LoB.js";var O=class r{args=ke.required();action=wk();onAction(i,n){this.action.emit({name:i,payload:n})}static ɵfac=function(n){return new(n||r)};static ɵcmp=$n({type:r,selectors:[[`app-infinite-scroll-story`]],inputs:{args:[1,`args`]},outputs:{action:`action`},decls:6,vars:5,consts:[[`bxInfiniteScroll`,``,`tabindex`,`0`,`aria-label`,`Scrollable example`,2,`max-block-size`,`12rem`,`overflow`,`auto`,3,`scrollEnd`,`infiniteScrollThreshold`,`infiniteScrollDisabled`,`infiniteScrollLoading`,`infiniteScrollCheckOnRender`,`infiniteScrollEndOffset`],[2,`block-size`,`20rem`]],template:function(n,e){n&1&&(Os(0,`div`,0),br(`scrollEnd`,function(C){return e.onAction(`scrollEnd`,C)}),Os(1,`p`),XT(2,`Scroll through this local content.`),ba(),Cy(3,`div`,1),Os(4,`p`),XT(5,`End of content`),ba()()),n&2&&fa(`infiniteScrollThreshold`,e.args().infiniteScrollThreshold)(`infiniteScrollDisabled`,e.args().infiniteScrollDisabled)(`infiniteScrollLoading`,e.args().infiniteScrollLoading)(`infiniteScrollCheckOnRender`,e.args().infiniteScrollCheckOnRender)(`infiniteScrollEndOffset`,e.args().infiniteScrollEndOffset)},dependencies:[al],styles:[`
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
}`]})};export{O as InfiniteScrollStory};