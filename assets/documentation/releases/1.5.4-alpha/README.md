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

## Reactive modal and toast configuration

- Added strongly typed `ModalRef.patch(IModalPatch)` and `ToastRef.patch(IToastPatch<D>)`, backed by one reactive configuration source per reference. Callers
  and mounted content can update supported properties without recreating the overlay, restarting its entrance animation, or resetting application content state.
- Modal patches merge heading, icon, dismissal policies, close-action visibility, and supported wrapper/content presentation. Undefined retains existing values;
  supported null values clear optional content or presentation. Layout, identity, mounting, initialization data, and lifecycle callbacks remain opening-time
  configuration.
- Added optional header and simple-toast icon loading, plus translatable accessible loading labels. The shared spinner temporarily replaces the retained icon,
  preserves its area, and respects reduced motion. Simple toasts now support configurable icons alongside their existing semantic type, title, and message.
- Toast patches shallow-merge plain-object content data and replace arrays, primitives, and nonplain objects. Translation, semantic surfaces, and derived
  presentation react to updates. Data nullability follows the application contract; simple-toast title and icon accept null to clear them.
- Explicit duration patches reset toast lifetime and progress, including repeated equal durations and duration zero for manual dismissal. Unrelated patches
  retain remaining time, paused toasts remain paused, and restoring a hidden progress indicator uses the current remaining fraction.
- Queued notifications receive patches before display without promotion or a running lifetime. Closing queued references cancels them without display. Closing
  and destroyed overlays ignore late patches; timers, subscriptions, progress controllers, and dismissal callbacks are cleaned up.
- Fixed modal close-action visibility to honor disabled dismissal and show-close-button settings consistently. Mounted modal motion responds to shared
  accessibility preferences; requested animation preferences are retained so reduced-motion changes can be applied reactively.
- Serialized toast queue processing to prevent reentrant content construction or initialization from exceeding capacity or changing queue order. Rechecked the
  current capacity and pause policy before each notification is mounted; configuration, progress, and lifetime remain instance-owned.
- Restricted Escape dismissal to the top registered modal, preventing background dialogs from closing or opening extra confirmations. Deduplicated pending close
  guards per dialog while retaining force-close behavior.
- Registered parent dialogs before constructing content so synchronously opened children retain correct stacking and depth. Failed content initialization
  releases the affected dialog, and bottom-sheet views remain mounted through their close animation.

## Reactive API migration

- Replace `ModalRef.modalConfig` with `ModalRef.config()`. `ModalCore.config` and `ToastCore.config` are now signals; `ToastRef.config` is read with `config()`.
  Use patch methods rather than mutating configuration snapshots. References are service-created; their construction/attachment lifecycle has changed.
- `Toast<D, R>.data` and the `IToast` data contract are now `Signal<D | undefined>`. Read `data()?.message` in templates or `this.data()?.message` in
  TypeScript. Custom toast implementations must expose reactive data and a read-only reference. `TOAST_DATA` remains an initialization snapshot; migrate to
  `ToastRef.data` for live updates. Modal initialization data is unchanged.
- Removed the unused `ModalRef.modalContainer` and `parentElement` properties. Mounted content/container getters are undefined after destruction. The toast host
  no longer replaces the reference's close method at runtime; service-created content can inject its typed reference directly.

## Stepper

- Added standalone `Stepper` (`bx-stepper`), declarative `Step` (`bx-step`), and content/label template directives to `@filip.mazev/blocks/navigation`. The same
  component supports passive progress indicators, application-owned section navigation, and guarded wizard workflows.
- Supports typed data-driven definitions or projected steps, stable-ID `activeStep` binding, optional and disabled steps, explicit completion/skipping,
  non-editable completed steps, and separate loading/error state. Visiting a step does not imply completion.
- Added `goTo`, `next`, `previous`, `skip`, `finish`, and `reset`, with typed request, selection, transition, and completion events. Synchronous, promise, and
  observable guards share validation, duplicate-request protection, cancellation, and stale-result checks. Failed saves retain the current selection and content
  for an explicit retry.
- Integrates with Reactive Forms and Signal Forms through a structural validation contract. Linear workflows enforce required predecessors, invalid forward
  attempts mark controls touched, optional steps can be skipped, and completion remains distinct from visiting the final step.
- Supports internal selection and application-confirmed wizard selection. Accepted controlled destinations show a clock marker, accent text, and translatable
  “Awaiting confirmation” feedback while the current step remains selected. Confirmation, reset, and superseding requests clear the waiting presentation.
- Added eager, retained, and active-only content policies, configurable wizard controls, custom label/content templates, and an application-owned completion
  view. Reset clears workflow progress without clearing application-owned form values.
- Added steps, segments, dots, progress, and cards in three sizes, horizontal/vertical layouts, and scroll, vertical, or compact responsive behavior. Connectors
  are solid and aligned with their markers; small markers and dots leave room around status symbols. Card text uses the same top alignment as alerts and
  banners.
- Replaced split connector pieces with one continuous connector per gap, positioned from marker bounds and updated on layout changes. Horizontal scrollbars have
  a reserved strip below the steps, keeping mobile WebKit overlay scrollbars clear of glass card surfaces and focus indicators.
- Added `progressFormat="fraction"` for completed/enabled step counts such as `1/3` alongside the default percentage format. Both use the existing
  `showPercentage` visibility input; explicit `progressValue` continues to override only the percentage and progress bar.
- Uses Blocks semantic colors, shared glass and lighting, translation support, and configurable CSS variables. Non-card variants keep transparent selected
  backgrounds with marker/label hover feedback. Disabled steps are visibly muted; read-only presentation retains focus and progress with neutral markers.
- Includes roving keyboard navigation, RTL support, accessible status descriptions, predictable wizard focus, and shared reduced-motion/transparency and
  forced-color behavior. Shared text defaults are configurable through `BX_STEPPER_DEFAULTS` and per-instance labels.
- Added the `/components/stepper` playground with appearance controls, section navigation, form validation, asynchronous save failure/retry, controlled
  confirmation and dynamic steps. Colocated guides and browser regression coverage document the supported integration patterns.

See the [Stepper guide](../../../projects/blocks/navigation/components/stepper/README.md) for public imports, runnable examples, configuration, and
accessibility.
