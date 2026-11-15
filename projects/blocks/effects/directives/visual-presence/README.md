# Visual presence

`BxVisualPresenceDirective` fades a persistent visual layer using the effects runtime's exact snappy spring and shared lazy frame scheduler. Import it from
`@filip.mazev/blocks/effects`.

```html
<span [bxVisualPresence]="visible()">Decorative visual</span>
```

`bxVisualPresence` is required. `bxVisualPresenceEnter` defaults to false, keeping initial rendering immediate. Set it to true to reveal a newly created layer.
`bxVisualPresenceAnimated` defaults to true; false snaps immediately. Live `BxA11yService` reduced-motion preferences always take precedence.
`bxVisualPresenceScale` sets the initial hidden scale, clamped to 0–1 and defaulting to 0.9; use 1 for text. Configure it before creating the layer.
`presenceHidden` emits without a payload after a hidden destination settles, including an immediate update.

Opacity preserves layout and accessible text. The caller owns hit testing, focus and semantic hiding; do not use zero opacity to disable an interactive element.
Use a dedicated visual wrapper so transitions do not compete with other opacity or scale owners. Put centering/positioning transforms on an outer wrapper. Rapid
reversals retain current spring position and velocity. Teardown cancels frame work and restores owned inline styles. Rendering on the server schedules no
animation work.

Use [VisualTransition](../../components/visual-transition/README.md) to retain an outgoing visual while its replacement enters.
