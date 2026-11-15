import{X as qi,w as Wi,y as Ui}from"./chunk-DE1qZ0OS.js";import"./chunk-1rrlZ2Ss.js";import{$r as fa,Ao as y1,Gr as el,In as XT,Lt as Os,Sr as ba,Xt as Ql,bo as wk,i as $n,it as Jc,k as Ey,rt as Jb,v as CT,wr as br,zi as ke}from"./chunk-CVY9_LoB.js";function D(t,e){if(t&1){let n=Jb();Os(0,`bx-menu`)(1,`bx-menu-item`,2),br(`action`,function(o){Jc(n);let f=Ql();return el(f.onAction(`copy`,o))}),ba()()}}var h=class t{args=ke.required();action=wk();onAction(e,n){this.action.emit({name:e,payload:n})}static ɵfac=function(n){return new(n||t)};static ɵcmp=$n({type:t,selectors:[[`app-context-menu-story`]],inputs:{args:[1,`args`]},outputs:{action:`action`},decls:4,vars:2,consts:[[`menu`,``],[`tabindex`,`0`,3,`bxContextMenu`,`bxContextMenuLongPress`],[`label`,`Copy`,3,`action`]],template:function(n,s){if(n&1&&(Os(0,`div`,1),XT(1,` Right-click, touch and hold, or press the context-menu key here.
`),ba(),Ey(2,D,2,0,`ng-template`,null,0,y1)),n&2){let o=CT(3);fa(`bxContextMenu`,o)(`bxContextMenuLongPress`,s.args().bxContextMenuLongPress)}},dependencies:[Ui,qi,Wi],styles:[`
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
}`]})};export{h as ContextMenuStory};