import{r as Ba}from"./chunk-BEm-ihzG.js";import"./chunk-DE1qZ0OS.js";import"./chunk-1rrlZ2Ss.js";import{$r as fa,In as XT,Lt as Os,Sr as ba,ar as Zy,bo as wk,i as $n,wr as br,xn as Ul,zi as ke}from"./chunk-CVY9_LoB.js";var _=class o{args=ke.required();action=wk();onAction(r,a){this.action.emit({name:r,payload:a})}static ɵfac=function(a){return new(a||o)};static ɵcmp=$n({type:o,selectors:[[`app-time-picker-story`]],inputs:{args:[1,`args`]},outputs:{action:`action`},decls:2,vars:70,consts:[[3,`valueCommit`,`openChange`,`timeZoneChange`,`slotRequest`,`slotRetry`,`touch`,`valueChange`,`interval`,`pickerIcon`,`openPickerLabel`,`timePresentation`,`presentation`,`locale`,`timeZone`,`hourCycle`,`precision`,`minuteStep`,`secondStep`,`millisecondStep`,`timeFormat`,`loopColumns`,`min`,`max`,`commitPolicy`,`closeOnSelect`,`clearable`,`showTimeZone`,`showTimeZoneLabel`,`loadingLabel`,`retryLabel`,`applyLabel`,`cancelLabel`,`clearLabel`,`nowLabel`,`clearTooltip`,`hourLabel`,`minuteLabel`,`secondLabel`,`millisecondLabel`,`periodLabel`,`timeZoneLabel`,`loadErrorMessage`,`invalidSelectionLabel`,`emptyLabel`,`errorWrap`,`value`,`id`,`label`,`placeholder`,`tooltip`,`hint`,`hintEnd`,`error`,`ariaLabel`,`ariaLabelledBy`,`ariaDescribedBy`,`dataTestId`,`name`,`invalid`,`pending`,`touched`,`dirty`,`disabled`,`readonly`,`readOnly`,`hidden`,`required`,`loading`,`submitted`,`errorPolicy`,`errorMode`,`appearance`,`floatLabel`,`hideRequiredMarker`,`subscriptSizing`,`tooltipOnTruncate`]],template:function(a,e){a&1&&(Os(0,`bx-time-picker`,0),br(`valueCommit`,function(n){return e.onAction(`valueCommit`,n)})(`openChange`,function(n){return e.onAction(`openChange`,n)})(`timeZoneChange`,function(n){return e.onAction(`timeZoneChange`,n)})(`slotRequest`,function(n){return e.onAction(`slotRequest`,n)})(`slotRetry`,function(n){return e.onAction(`slotRetry`,n)})(`touch`,function(n){return e.onAction(`touch`,n)})(`valueChange`,function(n){return e.onAction(`valueChange`,n)}),XT(1),ba()),a&2&&(fa(`interval`,e.args().interval)(`pickerIcon`,e.args().pickerIcon)(`openPickerLabel`,e.args().openPickerLabel)(`timePresentation`,e.args().timePresentation)(`presentation`,e.args().presentation)(`locale`,e.args().locale)(`timeZone`,e.args().timeZone)(`hourCycle`,e.args().hourCycle)(`precision`,e.args().precision)(`minuteStep`,e.args().minuteStep)(`secondStep`,e.args().secondStep)(`millisecondStep`,e.args().millisecondStep)(`timeFormat`,e.args().timeFormat)(`loopColumns`,e.args().loopColumns)(`min`,e.args().min)(`max`,e.args().max)(`commitPolicy`,e.args().commitPolicy)(`closeOnSelect`,e.args().closeOnSelect)(`clearable`,e.args().clearable)(`showTimeZone`,e.args().showTimeZone)(`showTimeZoneLabel`,e.args().showTimeZoneLabel)(`loadingLabel`,e.args().loadingLabel)(`retryLabel`,e.args().retryLabel)(`applyLabel`,e.args().applyLabel)(`cancelLabel`,e.args().cancelLabel)(`clearLabel`,e.args().clearLabel)(`nowLabel`,e.args().nowLabel)(`clearTooltip`,e.args().clearTooltip)(`hourLabel`,e.args().hourLabel)(`minuteLabel`,e.args().minuteLabel)(`secondLabel`,e.args().secondLabel)(`millisecondLabel`,e.args().millisecondLabel)(`periodLabel`,e.args().periodLabel)(`timeZoneLabel`,e.args().timeZoneLabel)(`loadErrorMessage`,e.args().loadErrorMessage)(`invalidSelectionLabel`,e.args().invalidSelectionLabel)(`emptyLabel`,e.args().emptyLabel)(`errorWrap`,e.args().errorWrap)(`value`,e.args().value)(`id`,e.args().id)(`label`,e.args().label)(`placeholder`,e.args().placeholder)(`tooltip`,e.args().tooltip)(`hint`,e.args().hint)(`hintEnd`,e.args().hintEnd)(`error`,e.args().error)(`ariaLabel`,e.args().ariaLabel)(`ariaLabelledBy`,e.args().ariaLabelledBy)(`ariaDescribedBy`,e.args().ariaDescribedBy)(`dataTestId`,e.args().dataTestId)(`name`,e.args().name)(`invalid`,e.args().invalid)(`pending`,e.args().pending)(`touched`,e.args().touched)(`dirty`,e.args().dirty)(`disabled`,e.args().disabled)(`readonly`,e.args().readonly)(`readOnly`,e.args().readOnly)(`hidden`,e.args().hidden)(`required`,e.args().required)(`loading`,e.args().loading)(`submitted`,e.args().submitted)(`errorPolicy`,e.args().errorPolicy)(`errorMode`,e.args().errorMode)(`appearance`,e.args().appearance)(`floatLabel`,e.args().floatLabel)(`hideRequiredMarker`,e.args().hideRequiredMarker)(`subscriptSizing`,e.args().subscriptSizing)(`tooltipOnTruncate`,e.args().tooltipOnTruncate),Ul(),Zy(e.args().content))},dependencies:[Ba],styles:[`
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
}`]})};export{_ as TimePickerStory};