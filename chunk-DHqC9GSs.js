import{D as fe}from"./chunk-BEm-ihzG.js";import"./chunk-DE1qZ0OS.js";import{t as U}from"./chunk-1rrlZ2Ss.js";import{$r as fa,Ba as rm,In as XT,Lt as Os,Sr as ba,Xt as Ql,ai as gT,b as Cy,bo as wk,i as $n,nn as Ro,wr as br,xn as Ul,xr as bT,zi as ke}from"./chunk-CVY9_LoB.js";function v(t,o){t&1&&Cy(0,`bx-icon`,1),t&2&&fa(`name`,o)}function x(t,o){if(t&1&&XT(0),t&2){let e=Ql();rm(` `,e.args().content,` `)}}var y=class t{args=ke.required();action=wk();onAction(o,e){this.action.emit({name:o,payload:e})}static ɵfac=function(e){return new(e||t)};static ɵcmp=$n({type:t,selectors:[[`app-button-story`]],inputs:{args:[1,`args`]},outputs:{action:`action`},decls:3,vars:12,consts:[[`type`,`button`,`bx-button`,``,3,`click`,`variant`,`color`,`outlined`,`elevated`,`disabled`,`loading`,`interactive`,`surfaceEffects`,`glassiness`],[3,`name`]],template:function(e,n){if(e&1&&(Os(0,`button`,0),br(`click`,function(h){return n.onAction(`click`,h)}),bT(1,v,1,1,`bx-icon`,1),bT(2,x,1,1),ba()),e&2){let i;fa(`variant`,n.args().variant)(`color`,n.args().color)(`outlined`,n.args().outlined)(`elevated`,n.args().elevated)(`disabled`,n.args().disabled)(`loading`,n.args().loading)(`interactive`,n.args().interactive)(`surfaceEffects`,n.args().surfaceEffects)(`glassiness`,n.args().glassiness),Ro(`aria-label`,n.args().content),Ul(),gT((i=n.args().icon)?1:-1,i),Ul(),gT(n.args().variant!==`icon`?2:-1)}},dependencies:[fe,U],styles:[`
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
}`]})};export{y as ButtonStory};