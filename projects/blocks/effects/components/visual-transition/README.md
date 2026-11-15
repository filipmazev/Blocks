# Visual transition

`VisualTransition` crossfades committed icon, spinner and other small visual changes with the shared exact spring. Import it from `@filip.mazev/blocks/effects`.

```html
<bx-visual-transition [value]="loading()">
    <ng-template let-busy>
        @if (busy) {
        <bx-loading-spinner [decorative]="true" />
        } @else {
        <bx-icon name="check" />
        }
    </ng-template>
</bx-visual-transition>
```

`value` is required and uses `Object.is` identity. Pass an immutable value that represents the visual state, and render from the template's `let-value` context
so an outgoing layer retains its previous visual. `animated` defaults to true; false and live reduced-motion preferences show committed state immediately.
Initial rendering appears immediately. Changes retain at most the current and previous layers, and rapid reversals reuse existing layers and spring velocity.

The current layer determines layout; outgoing layers are absolutely positioned, inert and hidden from assistive technology immediately. They are removed once
hidden. Native state, labels, loading announcements, focus and application guards remain owned by the containing control. Project visual content only; keep
interactive controls and their labels outside this component. Constrain its dimensions when visual states have different intrinsic sizes.

The underlying [visual presence directive](../../directives/visual-presence/README.md) also supports persistent projected icons and opacity-only text. Custom
renderers can use `createVisualPresence`, `IVisualPresence` and `IVisualPresenceOptions` from `@filip.mazev/blocks/effects/runtime`. Controllers must receive
live reduced-motion updates and be destroyed with their view. No additional stylesheet or animation provider is required.

Built-in consumers include Icon, Button, Select, MultiSelect, SearchInput, DatePicker, TimePicker, modal banners and simple toasts. Review
`/components/button-loading`, `/toastr`, `/modal`, `/components/select` and `/components/stepper` in the Playground.
