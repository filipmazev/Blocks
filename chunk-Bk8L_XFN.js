import{n as Ae}from"./chunk-BEm-ihzG.js";import"./chunk-DE1qZ0OS.js";import"./chunk-1rrlZ2Ss.js";import{$r as fa,In as XT,Lt as Os,Sr as ba,bo as wk,i as $n,wr as br,zi as ke}from"./chunk-CVY9_LoB.js";var p=class r{args=ke.required();action=wk();onAction(o,n){this.action.emit({name:o,payload:n})}static ɵfac=function(n){return new(n||r)};static ɵcmp=$n({type:r,selectors:[[`app-load-more-story`]],inputs:{args:[1,`args`]},outputs:{action:`action`},decls:3,vars:5,consts:[[`bxLoadMore`,``,2,`padding`,`1rem`,3,`loadMore`,`loadMoreHasMore`,`loadMoreLoading`,`loadMoreSuppressed`,`loadMoreDisabled`,`loadMoreError`]],template:function(n,e){n&1&&(Os(0,`div`,0),br(`loadMore`,function(_){return e.onAction(`loadMore`,_)}),Os(1,`p`),XT(2,`Loaded content`),ba()()),n&2&&fa(`loadMoreHasMore`,e.args().loadMoreHasMore)(`loadMoreLoading`,e.args().loadMoreLoading)(`loadMoreSuppressed`,e.args().loadMoreSuppressed)(`loadMoreDisabled`,e.args().loadMoreDisabled)(`loadMoreError`,e.args().loadMoreError)},dependencies:[Ae],styles:[`
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
}`]})};export{p as LoadMoreStory};