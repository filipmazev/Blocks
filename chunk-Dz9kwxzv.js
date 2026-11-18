import{I as xe,n as Bt}from"./chunk-0rSpyq6Z.js";import"./chunk-D2mL-a4s.js";import{$a as sd,$i as ka,Co as vo,J as Fr,Jr as bo,Jt as Pk,K as FT,Na as pb,Ro as xo,Yr as br,ha as mb,na as lA,pi as ee,ri as cl,rr as Xl,tt as Go,zr as al}from"./chunk-4Vch4aoV.js";var y=class x{args=ee.required();action=Pk();onAction(d,r){this.action.emit({name:d,payload:r})}static ɵfac=function(r){return new(r||x)};static ɵcmp=Fr({type:x,selectors:[[`app-swipe-actions-story`]],inputs:{args:[1,`args`]},outputs:{action:`action`},decls:18,vars:24,consts:[[`swipeRow`,`bxSwipeActions`],[`restoreFocus`,``],[`bxSwipeActions`,``,1,`mail-row`,3,`swipeDismissed`,`swipeAction`,`swipeActionError`,`swipeDismissFocus`,`swipeDisabled`,`swipeLoading`,`leftSwipeActions`,`rightSwipeActions`,`swipePreviousLabel`,`swipeNextLabel`,`swipeTooltipDwell`,`swipeFullAction`,`swipeCompletion`,`swipeRetryLabel`,`swipeLoadingLabel`,`swipeCompletedLabel`],[`type`,`button`,1,`message-row`,3,`click`,`disabled`],[`bxSwipeContent`,``,1,`message-copy`],[1,`message-meta`],[`aria-hidden`,`true`,1,`unread-dot`,3,`hidden`],[`id`,`swipe-preview-status`,1,`message-time`],[1,`message-heading`],[1,`message-subject`],[1,`message-preview`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,3,`click`]],template:function(r,e){if(r&1){let c=pb();bo(0,`div`,2,0),br(`swipeDismissed`,function(n){return e.onAction(`swipeDismissed`,n)})(`swipeAction`,function(n){return al(c),e.onAction(`swipeAction`,n),cl(n.action.id===`read`&&e.onAction(`rowUnreadChange`,!e.args().rowUnread))})(`swipeActionError`,function(n){return e.onAction(`swipeActionError`,n)}),bo(2,`button`,3),br(`click`,function(n){return e.onAction(`rowOpen`,n)}),bo(3,`span`,4)(4,`span`,5),sd(5,`span`,6),bo(6,`span`,7),lA(7),Go()(),bo(8,`strong`,8),lA(9),Go(),bo(10,`span`,9),lA(11),Go(),bo(12,`span`,10),lA(13),Go()()()(),bo(14,`span`,null,1)(16,`button`,11),br(`click`,function(){al(c);let n=FT(1);return cl(n.restoreSwipeRow())}),lA(17,`Restore row`),Go()()}if(r&2){let c=FT(15);ka(`inline-size`,e.args().rowWidth,`px`),xo(`swipeDismissFocus`,c)(`swipeDisabled`,e.args().swipeDisabled)(`swipeLoading`,e.args().swipeLoading)(`leftSwipeActions`,e.args().leftSwipeActions)(`rightSwipeActions`,e.args().rightSwipeActions)(`swipePreviousLabel`,e.args().swipePreviousLabel)(`swipeNextLabel`,e.args().swipeNextLabel)(`swipeTooltipDwell`,e.args().swipeTooltipDwell)(`swipeFullAction`,e.args().swipeFullAction)(`swipeCompletion`,e.args().swipeCompletion)(`swipeRetryLabel`,e.args().swipeRetryLabel)(`swipeLoadingLabel`,e.args().swipeLoadingLabel)(`swipeCompletedLabel`,e.args().swipeCompletedLabel),vo(`dir`,e.args().direction),Xl(2),xo(`disabled`,e.args().swipeDisabled||e.args().swipeLoading),vo(`aria-label`,e.args().rowLabel)(`aria-describedby`,`swipe-preview-status`),Xl(3),xo(`hidden`,!e.args().rowUnread),Xl(2),mb(` `,e.args().rowUnread?`Unread`:`Read`,` · Today`),Xl(2),mb(` `,e.args().rowLabel,` `),Xl(2),mb(` `,e.args().rowSubject,` `),Xl(2),mb(` `,e.args().rowPreview,` `)}},dependencies:[Bt,xe],styles:[`
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
}
[_nghost-%COMP%]    > bx-divider.is-vertical[_ngcontent-%COMP%] {
  align-self: center;
}
.resize-scene[_ngcontent-%COMP%], 
.drawer-scene[_ngcontent-%COMP%], 
.surface-scene[_ngcontent-%COMP%] {
  inline-size: 100%;
  min-inline-size: 0;
}
.resize-surface[_ngcontent-%COMP%] {
  padding: var(--%NS%bx-space-4, 1rem);
  box-sizing: border-box;
  border: 1px solid var(--%NS%bx-border-default);
  border-radius: var(--%NS%bx-rounded-lg, 0.75rem);
  background: var(--%NS%bx-bg-surface-alt);
}
.demo-resize-grip[_ngcontent-%COMP%] {
  outline: none;
}
.demo-resize-grip[_ngcontent-%COMP%]::before, 
.demo-resize-grip[_ngcontent-%COMP%]::after {
  transition-property:
    opacity,
    background-color,
    color;
  transition-duration: calc(var(--%NS%bx-resize-grip-duration, 150ms) * (1 - var(--%NS%bx-reduced-motion, 0)));
  transition-timing-function: ease;
  content: "";
  position: absolute;
  pointer-events: none;
  opacity: 0;
  border-radius: var(--%NS%bx-rounded-pill, 9999px);
}
.demo-resize-grip[_ngcontent-%COMP%]::before {
  background: var(--%NS%bx-resize-rail-color, var(--%NS%bx-resize-grip-background, var(--%NS%bx-bg-element)));
}
.demo-resize-grip[_ngcontent-%COMP%]::after {
  left: 50%;
  top: 50%;
  inline-size: var(--%NS%bx-space-2, 0.5rem);
  block-size: var(--%NS%bx-space-6, 1.5rem);
  box-sizing: border-box;
  transform: translate(-50%, -50%);
  border: var(--%NS%bx-border-width, 1px) var(--%NS%bx-border-style, solid) var(--%NS%bx-resize-grip-border, var(--%NS%bx-border-default));
  color: var(--%NS%bx-resize-grip-color, var(--%NS%bx-text-secondary));
  background-color: var(--%NS%bx-resize-grip-background, var(--%NS%bx-bg-element));
  background-image:
    radial-gradient(
      circle,
      currentcolor 1px,
      transparent 1.25px),
    radial-gradient(
      circle,
      currentcolor 1px,
      transparent 1.25px),
    radial-gradient(
      circle,
      currentcolor 1px,
      transparent 1.25px);
  background-size: 3px 3px;
  background-position:
    center calc(50% - 4px),
    center,
    center calc(50% + 4px);
  background-repeat: no-repeat;
}
.demo-resize-grip[data-bx-resize-axis=horizontal][_ngcontent-%COMP%]::before {
  inset-block: var(--%NS%bx-space-2, 0.5rem);
  left: 50%;
  inline-size: var(--%NS%bx-space-1, 0.25rem);
  transform: translateX(-50%);
}
.demo-resize-grip[data-bx-resize-axis=vertical][_ngcontent-%COMP%]::before {
  inset-inline: var(--%NS%bx-space-2, 0.5rem);
  top: 50%;
  block-size: var(--%NS%bx-space-1, 0.25rem);
  transform: translateY(-50%);
}
.demo-resize-grip[data-bx-resize-axis=vertical][_ngcontent-%COMP%]::after {
  transform: translate(-50%, -50%) rotate(90deg);
}
.demo-resize-grip.bx-resize-visible[_ngcontent-%COMP%]::after, 
.demo-resize-grip[_ngcontent-%COMP%]:focus-visible::before, 
.demo-resize-grip[_ngcontent-%COMP%]:focus-visible::after {
  opacity: 1;
}
.demo-resize-grip[_ngcontent-%COMP%]:hover::before, 
.demo-resize-grip.bx-resizing[_ngcontent-%COMP%]::before {
  opacity: 1;
}
.demo-resize-grip[_ngcontent-%COMP%]:hover::after, 
.demo-resize-grip.bx-resizing[_ngcontent-%COMP%]::after {
  opacity: 0;
}
.demo-resize-grip[_ngcontent-%COMP%]:focus-visible::before {
  outline: 2px solid var(--%NS%bx-border-brand);
  outline-offset: var(--%NS%bx-space-1, 0.25rem);
}
.demo-resize-grip.bx-resize-reduced-motion[_ngcontent-%COMP%]::before, 
.demo-resize-grip.bx-resize-reduced-motion[_ngcontent-%COMP%]::after {
  transition-duration: 0s;
}
@media (hover: none), (pointer: coarse), (forced-colors: active) {
  .demo-resize-grip[_ngcontent-%COMP%]::after {
    opacity: 1;
  }
}
@media (prefers-reduced-motion: reduce) {
  .demo-resize-grip[_ngcontent-%COMP%]::before, 
   .demo-resize-grip[_ngcontent-%COMP%]::after {
    transition-duration: 0s;
  }
}
@media (forced-colors: active) {
  .demo-resize-grip[_ngcontent-%COMP%]::before {
    background: CanvasText;
  }
  .demo-resize-grip[_ngcontent-%COMP%]::after {
    forced-color-adjust: none;
    background-color: Canvas;
    border-color: CanvasText;
    color: CanvasText;
  }
  .demo-resize-grip[_ngcontent-%COMP%]:focus-visible::before {
    outline-color: Highlight;
  }
}
.demo-resize-grip[_ngcontent-%COMP%] {
  position: absolute;
  inset-block: 0;
  inset-inline-end: 0;
  inline-size: var(--%NS%bx-space-6, 1.5rem);
}
.panel-scene-content[_ngcontent-%COMP%], 
.drawer-scene[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--%NS%bx-space-4, 1rem);
  padding: var(--%NS%bx-space-4, 1rem);
}
.drawer-scene[_ngcontent-%COMP%] {
  overflow: clip;
  box-sizing: border-box;
}
.surface-scene[_ngcontent-%COMP%] {
  position: relative;
  display: grid;
  gap: var(--%NS%bx-space-4, 1rem);
  padding: var(--%NS%bx-space-6, 1.5rem);
  box-sizing: border-box;
  isolation: isolate;
  background:
    repeating-linear-gradient(
      35deg,
      var(--%NS%bx-bg-surface-alt) 0 2rem,
      var(--%NS%bx-bg-element) 2rem 4rem);
  border-radius: var(--%NS%bx-rounded-lg, 0.75rem);
}
.surface-art[_ngcontent-%COMP%] {
  position: absolute;
  inset: 25% 10%;
  display: flex;
  justify-content: space-between;
  color: var(--%NS%bx-text-accent);
  z-index: -1;
}
.surface-sample[_ngcontent-%COMP%] {
  display: grid;
  gap: var(--%NS%bx-space-4, 1rem);
  padding: var(--%NS%bx-space-6, 1.5rem);
  border: 1px solid var(--%NS%bx-border-default);
  border-radius: var(--%NS%bx-rounded-lg, 0.75rem);
  background: color-mix(in srgb, var(--%NS%bx-bg-surface) 55%, transparent);
}
.signal-form-scene[_ngcontent-%COMP%] {
  display: grid;
  gap: var(--%NS%bx-space-4, 1rem);
  inline-size: min(100%, 32rem);
  min-inline-size: 0;
}`,`
.mail-row[_ngcontent-%COMP%] {
  display: block;
  min-inline-size: 0;
  max-inline-size: 100%;
  border-radius: var(--%NS%bx-swipe-row-radius, var(--%NS%bx-rounded-lg, 0.75rem));
}
.message-row[_ngcontent-%COMP%] {
  display: block;
  inline-size: 100%;
  padding: var(--%NS%bx-space-3, 0.75rem) var(--%NS%bx-space-4, 1rem);
  border: 0;
  border-radius: inherit;
  font: inherit;
  text-align: start;
  color: var(--%NS%bx-text-primary);
  background: transparent;
  cursor: pointer;
}
.message-row[_ngcontent-%COMP%]:hover:not(:disabled) {
  background: var(--%NS%bx-bg-element-hover);
}
.message-row[_ngcontent-%COMP%]:active:not(:disabled) {
  background: var(--%NS%bx-bg-element-active);
}
.message-row[_ngcontent-%COMP%]:focus-visible {
  outline: var(--%NS%bx-border-width) solid var(--%NS%bx-border-brand);
  outline-offset: calc(-1 * var(--%NS%bx-border-width));
}
.message-row[_ngcontent-%COMP%]:disabled {
  opacity: 0.55;
  cursor: default;
}
.message-copy[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: var(--%NS%bx-space-1, 0.25rem);
  min-inline-size: 0;
}
.message-meta[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: var(--%NS%bx-space-2, 0.5rem);
  margin-block-end: var(--%NS%bx-space-1, 0.25rem);
}
.message-time[_ngcontent-%COMP%] {
  margin-inline-start: auto;
}
.message-time[_ngcontent-%COMP%], 
.message-preview[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-secondary);
  font-size: 0.75rem;
}
.message-heading[_ngcontent-%COMP%], 
.message-subject[_ngcontent-%COMP%], 
.message-preview[_ngcontent-%COMP%] {
  display: block;
  max-inline-size: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.unread-dot[_ngcontent-%COMP%] {
  flex: none;
  inline-size: var(--%NS%bx-space-2, 0.5rem);
  block-size: var(--%NS%bx-space-2, 0.5rem);
  border-radius: var(--%NS%bx-rounded-pill, 9999px);
  background: var(--%NS%bx-color-blue-500);
}
.unread-dot[hidden][_ngcontent-%COMP%] {
  display: none;
}
@media (forced-colors: active) {
  .unread-dot[_ngcontent-%COMP%] {
    background: Highlight;
  }
}
.message-row[data-bx-swipe-active=true][_ngcontent-%COMP%]:not(:disabled, :active) {
  background: var(--%NS%bx-bg-element-hover);
}`]})};export{y as SwipeActionsStory};