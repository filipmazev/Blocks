import{D as fe}from"./chunk-BEm-ihzG.js";import{X as qi,r as As,w as Wi}from"./chunk-DE1qZ0OS.js";import"./chunk-1rrlZ2Ss.js";import{$r as fa,Ao as y1,Gr as el,In as XT,Lt as Os,Sr as ba,Xt as Ql,ar as Zy,bo as wk,i as $n,it as Jc,k as Ey,rt as Jb,v as CT,wr as br,xn as Ul,zi as ke}from"./chunk-CVY9_LoB.js";function S(t,e){if(t&1){let n=Jb();Os(0,`bx-menu`)(1,`bx-menu-item`,2),br(`action`,function(i){Jc(n);let v=Ql();return el(v.onAction(`save`,i))}),ba()()}}var w=class t{args=ke.required();action=wk();onAction(e,n){this.action.emit({name:e,payload:n})}static ɵfac=function(n){return new(n||t)};static ɵcmp=$n({type:t,selectors:[[`app-dropdown-story`]],inputs:{args:[1,`args`]},outputs:{action:`action`},decls:4,vars:4,consts:[[`menu`,``],[`type`,`button`,`bx-button`,``,3,`bxDropdown`,`placement`,`bxTransition`],[`label`,`Save changes`,3,`action`]],template:function(n,o){if(n&1&&(Os(0,`button`,1),XT(1),ba(),Ey(2,S,2,0,`ng-template`,null,0,y1)),n&2){let i=CT(3);fa(`bxDropdown`,i)(`placement`,o.args().placement)(`bxTransition`,o.args().bxTransition),Ul(),Zy(o.args().content)}},dependencies:[As,qi,Wi,fe],styles:[`
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
}`]})};export{w as DropdownStory};