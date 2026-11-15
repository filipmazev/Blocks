import{nt as ul}from"./chunk-DE1qZ0OS.js";import"./chunk-1rrlZ2Ss.js";import{$r as fa,In as XT,Lt as Os,Sr as ba,ar as Zy,bo as wk,i as $n,wr as br,xn as Ul,zi as ke}from"./chunk-CVY9_LoB.js";var u=class i{args=ke.required();action=wk();onAction(o,t){this.action.emit({name:o,payload:t})}static ɵfac=function(t){return new(t||i)};static ɵcmp=$n({type:i,selectors:[[`app-calendar-story`]],inputs:{args:[1,`args`]},outputs:{action:`action`},decls:2,vars:34,consts:[[3,`viewChange`,`monthSelected`,`yearSelected`,`dateSelect`,`rangeStart`,`selectionRejected`,`visibleRangeChange`,`requestAvailability`,`retryAvailability`,`valueChange`,`viewDateChange`,`weekdayNameFormat`,`monthNameFormat`,`mode`,`value`,`viewDate`,`startView`,`locale`,`calendarId`,`timeZone`,`weekStartsOn`,`minimalDaysInFirstWeek`,`months`,`fixedWeeks`,`showWeekNumbers`,`showAdjacentDays`,`showToday`,`showTodayButton`,`min`,`max`,`blockUnverifiedAvailability`,`crossingPolicy`,`minRangeLength`,`maxRangeLength`,`allowSameDay`,`selectionLimit`,`readOnly`,`ariaLabel`,`loadingLabel`,`retryLabel`,`emptyLabel`,`previousLabel`,`nextLabel`,`todayLabel`]],template:function(t,e){t&1&&(Os(0,`bx-calendar`,0),br(`viewChange`,function(n){return e.onAction(`viewChange`,n)})(`monthSelected`,function(n){return e.onAction(`monthSelected`,n)})(`yearSelected`,function(n){return e.onAction(`yearSelected`,n)})(`dateSelect`,function(n){return e.onAction(`dateSelect`,n)})(`rangeStart`,function(n){return e.onAction(`rangeStart`,n)})(`selectionRejected`,function(n){return e.onAction(`selectionRejected`,n)})(`visibleRangeChange`,function(n){return e.onAction(`visibleRangeChange`,n)})(`requestAvailability`,function(n){return e.onAction(`requestAvailability`,n)})(`retryAvailability`,function(n){return e.onAction(`retryAvailability`,n)})(`valueChange`,function(n){return e.onAction(`valueChange`,n)})(`viewDateChange`,function(n){return e.onAction(`viewDateChange`,n)}),XT(1),ba()),t&2&&(fa(`weekdayNameFormat`,e.args().weekdayNameFormat)(`monthNameFormat`,e.args().monthNameFormat)(`mode`,e.args().mode)(`value`,e.args().value)(`viewDate`,e.args().viewDate)(`startView`,e.args().startView)(`locale`,e.args().locale)(`calendarId`,e.args().calendarId)(`timeZone`,e.args().timeZone)(`weekStartsOn`,e.args().weekStartsOn)(`minimalDaysInFirstWeek`,e.args().minimalDaysInFirstWeek)(`months`,e.args().months)(`fixedWeeks`,e.args().fixedWeeks)(`showWeekNumbers`,e.args().showWeekNumbers)(`showAdjacentDays`,e.args().showAdjacentDays)(`showToday`,e.args().showToday)(`showTodayButton`,e.args().showTodayButton)(`min`,e.args().min)(`max`,e.args().max)(`blockUnverifiedAvailability`,e.args().blockUnverifiedAvailability)(`crossingPolicy`,e.args().crossingPolicy)(`minRangeLength`,e.args().minRangeLength)(`maxRangeLength`,e.args().maxRangeLength)(`allowSameDay`,e.args().allowSameDay)(`selectionLimit`,e.args().selectionLimit)(`readOnly`,e.args().readOnly)(`ariaLabel`,e.args().ariaLabel)(`loadingLabel`,e.args().loadingLabel)(`retryLabel`,e.args().retryLabel)(`emptyLabel`,e.args().emptyLabel)(`previousLabel`,e.args().previousLabel)(`nextLabel`,e.args().nextLabel)(`todayLabel`,e.args().todayLabel),Ul(),Zy(e.args().content))},dependencies:[ul],styles:[`
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
}`]})};export{u as CalendarStory};