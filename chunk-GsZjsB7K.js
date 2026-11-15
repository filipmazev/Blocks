import{C as Vs}from"./chunk-DE1qZ0OS.js";import"./chunk-1rrlZ2Ss.js";import{$r as fa,In as XT,Lt as Os,Sr as ba,ar as Zy,bo as wk,i as $n,wr as br,xn as Ul,zi as ke}from"./chunk-CVY9_LoB.js";var u=class i{args=ke.required();action=wk();onAction(t,e){this.action.emit({name:t,payload:e})}static ɵfac=function(e){return new(e||i)};static ɵcmp=$n({type:i,selectors:[[`app-alert-story`]],inputs:{args:[1,`args`]},outputs:{action:`action`},decls:2,vars:13,consts:[[3,`dismissed`,`visibleChange`,`tone`,`title`,`message`,`dismissible`,`dismissLabel`,`emissive`,`emissionColor`,`emissionIntensity`,`emissionRadius`,`visible`,`announcement`,`dismissFocusTarget`]],template:function(e,n){e&1&&(Os(0,`bx-alert`,0),br(`dismissed`,function(s){return n.onAction(`dismissed`,s)})(`visibleChange`,function(s){return n.onAction(`visibleChange`,s)}),XT(1),ba()),e&2&&(fa(`tone`,n.args().tone)(`title`,n.args().title)(`message`,n.args().message)(`dismissible`,n.args().dismissible)(`dismissLabel`,n.args().dismissLabel)(`emissive`,n.args().emissive)(`emissionColor`,n.args().emissionColor)(`emissionIntensity`,n.args().emissionIntensity)(`emissionRadius`,n.args().emissionRadius)(`visible`,n.args().visible)(`announcement`,n.args().announcement)(`dismissFocusTarget`,n.args().dismissFocusTarget),Ul(),Zy(n.args().content))},dependencies:[Vs],styles:[`
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
}`]})};export{u as AlertStory};