# Blocks 1.5.4-alpha draft change notes

Draft for the next Alpha publication of `@filip.mazev/blocks`. This version has not been published; these notes may change before release.

## Side navigation

- Fixed missing label tooltips on compact submenu buttons. Parent icons now use the same shared hover, keyboard-focus, positioning, and theme behavior as
  compact route links.
- Stabilized expanded content at its final width while the panel opens, preventing labels from repeatedly wrapping into narrow columns during the transition.
- Labels, search, and disclosure arrows fade in during the final `60ms` of the width transition. The delay uses the running transition's remaining time,
  avoiding an additional wait after rendering. Initial expanded rendering and mobile drawers have no additional reveal delay.
- Added `--bx-side-nav-label-duration`, defaulting to `90ms`, to customize the fade duration. Existing `--bx-side-nav-duration` and `--bx-side-nav-easing`
  continue to configure the width transition.

## Accessibility and lifecycle

- Reduced motion removes the width animation, reveal delay, and fade. Changing the preference while the rail opens reveals content immediately.
- Keyboard focus reveals content immediately. Accessible control names remain available while labels are visually fading; icons and focus indicators remain
  independent of the text fade.
- Pending reveal work is cancelled when the rail collapses, its presentation changes, or the component is destroyed. Browser measurements run after rendering
  and are skipped during server rendering.

## Compatibility and customization

Existing navigation inputs, outputs, routes, and persistence contracts remain unchanged. Applications using the default templates receive the fixes directly.

Custom item, header, and footer templates can apply the shared reveal to their text using `opacity: var(--bx-side-nav-label-opacity, 1)` and an opacity
transition with `var(--bx-side-nav-label-transition-duration, 0ms)`. Keep icons and focus indicators outside the faded text. The inherited values follow the
navigation's reduced-motion and keyboard-focus behavior.
