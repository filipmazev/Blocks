import{w as Vt}from"./chunk-BEm-ihzG.js";import"./chunk-DE1qZ0OS.js";import"./chunk-1rrlZ2Ss.js";import{$r as fa,In as XT,Lt as Os,Sr as ba,ar as Zy,bo as wk,i as $n,wr as br,xn as Ul,zi as ke}from"./chunk-CVY9_LoB.js";var y=class o{args=ke.required();action=wk();onAction(t,a){this.action.emit({name:t,payload:a})}static ɵfac=function(a){return new(a||o)};static ɵcmp=$n({type:o,selectors:[[`app-select-story`]],inputs:{args:[1,`args`]},outputs:{action:`action`},decls:2,vars:50,consts:[[3,`selectionChange`,`search`,`loadMore`,`openedChange`,`touch`,`searchValueChange`,`valueChange`,`clearable`,`clearLabel`,`clearTooltip`,`selectionDisplay`,`visibleTagCount`,`tagOverflowText`,`options`,`isSearchable`,`externalFiltering`,`searchValue`,`searchDebounce`,`searchPlaceholder`,`emptyMessage`,`loadingLabel`,`loadingAriaLabel`,`hasMore`,`loadError`,`panelClass`,`value`,`id`,`label`,`placeholder`,`tooltip`,`hint`,`hintEnd`,`error`,`ariaLabel`,`ariaLabelledBy`,`ariaDescribedBy`,`dataTestId`,`name`,`invalid`,`pending`,`touched`,`dirty`,`disabled`,`readonly`,`readOnly`,`hidden`,`required`,`loading`,`submitted`,`errorPolicy`,`errorMode`,`appearance`,`floatLabel`,`hideRequiredMarker`,`subscriptSizing`,`tooltipOnTruncate`]],template:function(a,e){a&1&&(Os(0,`bx-select`,0),br(`selectionChange`,function(n){return e.onAction(`selectionChange`,n)})(`search`,function(n){return e.onAction(`search`,n)})(`loadMore`,function(n){return e.onAction(`loadMore`,n)})(`openedChange`,function(n){return e.onAction(`openedChange`,n)})(`touch`,function(n){return e.onAction(`touch`,n)})(`searchValueChange`,function(n){return e.onAction(`searchValueChange`,n)})(`valueChange`,function(n){return e.onAction(`valueChange`,n)}),XT(1),ba()),a&2&&(fa(`clearable`,e.args().clearable)(`clearLabel`,e.args().clearLabel)(`clearTooltip`,e.args().clearTooltip)(`selectionDisplay`,e.args().selectionDisplay)(`visibleTagCount`,e.args().visibleTagCount)(`tagOverflowText`,e.args().tagOverflowText)(`options`,e.args().options)(`isSearchable`,e.args().isSearchable)(`externalFiltering`,e.args().externalFiltering)(`searchValue`,e.args().searchValue)(`searchDebounce`,e.args().searchDebounce)(`searchPlaceholder`,e.args().searchPlaceholder)(`emptyMessage`,e.args().emptyMessage)(`loadingLabel`,e.args().loadingLabel)(`loadingAriaLabel`,e.args().loadingAriaLabel)(`hasMore`,e.args().hasMore)(`loadError`,e.args().loadError)(`panelClass`,e.args().panelClass)(`value`,e.args().value)(`id`,e.args().id)(`label`,e.args().label)(`placeholder`,e.args().placeholder)(`tooltip`,e.args().tooltip)(`hint`,e.args().hint)(`hintEnd`,e.args().hintEnd)(`error`,e.args().error)(`ariaLabel`,e.args().ariaLabel)(`ariaLabelledBy`,e.args().ariaLabelledBy)(`ariaDescribedBy`,e.args().ariaDescribedBy)(`dataTestId`,e.args().dataTestId)(`name`,e.args().name)(`invalid`,e.args().invalid)(`pending`,e.args().pending)(`touched`,e.args().touched)(`dirty`,e.args().dirty)(`disabled`,e.args().disabled)(`readonly`,e.args().readonly)(`readOnly`,e.args().readOnly)(`hidden`,e.args().hidden)(`required`,e.args().required)(`loading`,e.args().loading)(`submitted`,e.args().submitted)(`errorPolicy`,e.args().errorPolicy)(`errorMode`,e.args().errorMode)(`appearance`,e.args().appearance)(`floatLabel`,e.args().floatLabel)(`hideRequiredMarker`,e.args().hideRequiredMarker)(`subscriptSizing`,e.args().subscriptSizing)(`tooltipOnTruncate`,e.args().tooltipOnTruncate),Ul(),Zy(e.args().content))},dependencies:[Vt],styles:[`
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
}`]})};export{y as SelectStory};