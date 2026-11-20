import{G as xi}from"./chunk-BaHVKixO.js";import"./chunk-C1xhQ_ri.js";import{J as Fr,Jr as bo,Jt as Pk,Ro as xo,Yr as br,pi as ee,tt as Go}from"./chunk-zTlCv55u.js";var p=class t{args=ee.required();action=Pk();onNativeValue(r){let n=r.target;n instanceof HTMLInputElement&&this.onAction(`valueChange`,n.valueAsNumber)}onAction(r,n){this.action.emit({name:r,payload:n})}static ɵfac=function(n){return new(n||t)};static ɵcmp=Fr({type:t,selectors:[[`app-slider-story`]],inputs:{args:[1,`args`]},outputs:{action:`action`},decls:1,vars:7,consts:[[`type`,`range`,`bxSlider`,``,`aria-label`,`Volume`,3,`input`,`glassiness`,`discrete`,`showTickMarks`,`min`,`max`,`step`,`value`]],template:function(n,e){n&1&&(bo(0,`input`,0),br(`input`,function(b){return e.onNativeValue(b)}),Go()),n&2&&xo(`glassiness`,e.args().glassiness)(`discrete`,e.args().discrete)(`showTickMarks`,e.args().showTickMarks)(`min`,e.args().min)(`max`,e.args().max)(`step`,e.args().step)(`value`,e.args().value)},dependencies:[xi],styles:[`
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
}`]})};export{p as SliderStory};