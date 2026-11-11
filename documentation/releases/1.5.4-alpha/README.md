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
- Unified root and nested icon columns, item insets, and reserved scrollbar gutters. Scrollbar measurements now follow the rendered list, including direct entry
  into a nested level and changes between short and scrollable lists.
- Fixed iconless spacing: a row without a leading icon never reserves the icon column, so root, nested, and search lists all use ordinary text padding,
  including mixed lists. Result paths align with their labels. Trailing padding mirrors the leading icon inset so tags, end icons, and long ancestor text stay
  clear of the selected border.
- Header and footer slots automatically align their first leading visual with navigation icons, search, and collapse controls. Wrapped logos and differently
  sized icons no longer require consumer margin calculations. Text-only slots keep ordinary padding; optional header/footer inset variables and
  `data-bx-side-nav-leading` support deliberate custom layouts.
- Collapsing a nested level now preserves its browsing path and scroll position while showing the root rail. The originating root item or section remains
  highlighted; expanding restores the nested list. Selecting another root page clears the retained branch, while opening another parent replaces it. Ancestor
  highlights do not claim `aria-current="page"` or expose a hidden submenu as expanded.
- Nested side- and top-navigation headers reserve a consistent two-line heading area with equal container padding, keeping the list's starting position stable
  as ancestors appear. Long section, parent, and ancestor names truncate with full-name hover, keyboard-focus, and touch-and-hold feedback. Compact trails
  condense further on narrow panels; hidden ancestor labels wrap in the existing menu.
- Search-result paths remain descriptive inside their result's native page link. Neither visible ancestor labels nor the horizontal ellipsis intercept result
  activation; hidden search ancestors appear as noninteractive tooltip text. Long and unbroken path labels wrap within the padded content area.

## Breadcrumb trails and overflow

- Added reusable `BreadcrumbTrail` (`bx-breadcrumb-trail`) to `@filip.mazev/blocks/primitives`, with typed `IBreadcrumbTrailItem`, `IBreadcrumbTrailConfig`, and
  `IBreadcrumbTrailSelection` contracts. It supports native route links, browsing actions, descriptive entries, disabled state, translated text, and original
  item/index activation events.
- Long trails keep the first entry and the last two entries by default, using the horizontal `ellipsis` icon for the hidden middle ancestors. The existing
  Blocks menu surface and shared menu-item styling provide hover, click/tap, keyboard navigation, Escape dismissal, focus restoration, and viewport constraints.
  Top-navigation overflow retains its enclosing menu panel.
- Added configurable `maxVisibleItems`, `overflowLabel`, `overflowText`, `openOnHover`, and `placement`, plus optional application-wide
  `BX_BREADCRUMB_DEFAULTS`. The count excludes the ellipsis, clamps to at least two entries, and accepts null to remove the configured limit. Compact mode can
  still reduce the visible count to fit the container and exposes full labels through truncation tooltips.
- `Breadcrumbs` now accepts an explicit `items` trail, a translatable accessible `label`, and `breadcrumbConfig`, while retaining route-derived defaults and its
  existing minimum-count/divider inputs. `PageContainer` adds `breadcrumbConfig`; side- and top-navigation expose the same settings through
  `config.breadcrumbConfig`, merging application and instance settings property by property.
- The final page breadcrumb stays visible and retains `aria-current="page"`. Shared styles preserve RTL separation, constrained-container wrapping, live
  translations, and theme inheritance. Resize observers and tooltip/menu resources are cleaned up, and changed content or configuration closes stale overflow.

See the [Breadcrumbs guide](../../../projects/blocks/navigation/components/breadcrumbs/README.md),
[shared trail guide](../../../projects/blocks/primitives/components/breadcrumb-trail/README.md), and
[SideNav guide](../../../projects/blocks/navigation/components/side-nav/README.md) for configuration and integration examples.

## Accessibility and lifecycle

- Reduced-transparency tab triggers no longer cover the active selection surface. Stepper highlights retain a soft opaque tint instead of becoming solid accent
  blocks. Buttons expose persistent selected contours (text buttons use an underline), and selected cards default to the semantic brand border.
- Local `opaque: false` and surface `reducedTransparency: false` now defer to active application or OS accessibility preferences. Remove the owning preference
  to restore translucency; local options can still request opacity. Custom alpha-based materials can provide `--bx-glass-opaque-surface` for an opaque tint.
- Surface positioning now defaults through CSS instead of an inline runtime override, preserving absolutely positioned selection indicators when component
  styles arrive after surface initialization.

- Reduced motion removes the width animation, reveal delay, and fade. Changing the preference while the rail opens reveals content immediately.
- Keyboard focus reveals content immediately. Accessible control names remain available while labels are visually fading; icons and focus indicators remain
  independent of the text fade.
- Pending reveal work is cancelled when the rail collapses, its presentation changes, or the component is destroyed. Browser measurements run after rendering
  and are skipped during server rendering.

## Compatibility and customization

Existing navigation inputs, outputs, routes, and persistence contracts remain available. Explicit desktop collapse now retains the mounted browsing branch;
persistent storage continues to save only desktop and section-collapse preferences. Applications using the default templates receive the spacing and alignment
fixes directly. Remove manual header/footer leading-icon margins when adopting automatic slot alignment; documented padding variables provide explicit
overrides.

Breadcrumb overflow now defaults to three visible entries. Set `breadcrumbConfig.maxVisibleItems` to null, or provide that value through
`BX_BREADCRUMB_DEFAULTS`, to remove the configured count limit. Compact nested headers still condense to fit their available width. Search-result paths remain
noninteractive, while ordinary breadcrumb ancestors and nested browsing actions retain their navigation behavior.

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
  are solid and continuous between marker bounds and update on layout changes; small markers and dots leave room around status symbols. Card text uses the same
  top alignment as alerts and banners. Horizontal scrollbars have a reserved strip below the steps, keeping mobile WebKit overlay scrollbars clear of glass card
  surfaces and focus indicators.
- Supports percentage progress and `progressFormat="fraction"` for completed/enabled step counts such as `1/3`. The `showPercentage` input controls visibility
  for both formats; explicit `progressValue` overrides only the percentage and progress bar.
- Uses Blocks semantic colors, shared glass and lighting, translation support, and configurable CSS variables. Non-card variants keep transparent selected
  backgrounds with marker/label hover feedback. Disabled steps are visibly muted; read-only presentation retains focus and progress with neutral markers.
- Includes roving keyboard navigation, RTL support, accessible status descriptions, predictable wizard focus, and shared reduced-motion/transparency and
  forced-color behavior. Shared text defaults are configurable through `BX_STEPPER_DEFAULTS` and per-instance labels.
- Added the `/components/stepper` playground with appearance controls, section navigation, form validation, asynchronous save failure/retry, controlled
  confirmation and dynamic steps. Colocated guides and browser regression coverage document the supported integration patterns.

See the [Stepper guide](../../../projects/blocks/navigation/components/stepper/README.md) for public imports, runnable examples, configuration, and
accessibility.

## Material and motion refinement

- Stepper markers and connectors now receive the existing engine's directional and ambient light independently of their emission. Current filled indicators emit
  more strongly than tonal completed or neutral inactive indicators; errors receive restrained additional emphasis. Card surfaces retain their backing.
- Rounded stepper highlights use semantic color mixed with the theme surface instead of an enlarged dark hover shadow; the traveling accent has no drop shadow.
- Stepper selection halos resolve their translucency locally, so a stepper inside a modal or panel keeps the same soft accent tint instead of inheriting that
  surface's near-opaque material.
- The traveling stepper accent now measures layout geometry and snaps on container, orientation, and presentation changes: it stays centered on its marker
  inside a scaled dialog and no longer trails behind while the viewport resizes. Committed step changes keep their spring.
- Segment tracks retain a continuous, brighter fill without extra inner geometry. Descendant emission origins paint their registered rim as well as illuminating
  neighbors. Error contours take precedence over cached ambient tint; semantic changes request urgent marker-lighting refresh.
- Circular step indicators use the shared pressure spring for squash and recovery. A persistent selection accent travels between committed markers in both axes
  and stretches modestly along its velocity. Cards use an in-place border/rim response without travel across unconnected cards. Completion fills remain separate
  from active navigation. Rejected guards and unconfirmed controlled requests never advance the animated selection.
- Tabs use one persistent lit selection surface with spring position/size interpolation and bounded velocity stretch. Pointer/touch dragging previews the
  surface continuously and selects the nearest enabled tab on release. Escape, cancellation, outside release and stale gestures restore committed selection. New
  `dragSelection` defaults to true; false disables selection dragging; native touch swipe scrolling remains available with either setting. Click and keyboard
  selection remain available.
- Added optional `bxSurfaceEmissionStrength` / runtime `emissionStrength` (0–2, default 1) without changing reception, pressure feedback, or existing defaults.
  Added runtime `createSpringMotion`, `ISpringMotion`, `MOTION_PRESETS`, and `paintMotionStyles`, reusing the exact spring and shared lazy frame clock. Existing
  design tokens and theme scales remain intact; no dependency or competing lighting renderer was added.
- Live reduced motion snaps travel/fills and removes deformation. Reduced transparency independently uses existing opaque fallbacks. Native semantics, disabled
  states, focus outlines, and committed selection remain authoritative. Motion controllers and observers stop on teardown.
- Review `/components/stepper` and `/components/tabs`, including rapid selection, variable widths, overflow, dynamic tabs, guards, vertical layouts and the
  independent accessibility settings in `/appearance`. The reviewed pilot direction also informs the shared rollout below.

## Shared motion rollout

- Recorded the reviewed material and interaction principles in `AGENTS.md`. Segment steppers retain continuous, brighter fills; cards keep local feedback.
- Sliders and range sliders now use bounded velocity stretch and pressure recovery while preserving immediate native values and pointer precision. Range
  deformation decreases as thumbs approach. Thumb and fill use the same received-light context; no new lens or palette was introduced.
- Slide toggles retarget the shared checked-position spring, with bounded stretch, existing engine pressure response, stronger checked-state emission and RTL
  travel. Initial state and live reduced motion snap without entrance movement. Buttons keep labels/icons undistorted and refine material pressure feedback
  inside stationary hit areas.
- Added reusable runtime `mountSelectionMotion`, `ISelectionMotion`, and `ISelectionMotionOptions` for one lit surface behind enabled menu/option rows. Menus,
  selects, multi-selects and autocomplete share pointer/keyboard movement while preserving disabled states, selected values, checkmarks and focus outlines.
- Shared overlay motion now combines retargetable opacity with a restrained 0.985–1 scale, preserving collision-aware positioning transforms. Dropdowns, context
  menus, tooltips, select panels, autocomplete and popovers reuse the same controller. `IGlassTransitionOptions.scale: 1` retains opacity-only motion.
  Autocomplete/popover exit makes old panels inert immediately and cancels stale completion on reopening or destruction.
- Centered modals use restrained scale and opacity instead of growing content from zero. Larger side/sheet surfaces use a calmer shared curve; side entrance
  frames clean up on close and destruction. Toasts use smaller travel and restrained settling with their existing coordinated stack collapse.
- Collapsibles/accordions gain interruptible grid-height transitions, immediate inert/accessibility state, and local trigger material feedback. Initial
  rendering and reduced motion remain immediate. Passive tags keep their established shape; their actions and pagination controls inherit button feedback.
  Existing side-navigation width/reveal behavior remains the reference for larger navigation surfaces.
- Existing theme tokens, palette roles, async data ownership, guards, and public selection contracts are retained. Shared CSS curves live in the existing motion
  Sass helper; no dependency or parallel lighting system was added. Relevant guides and existing Playground examples document the behavior and review controls.

### Interaction review refinements

- Pointer hover on menu/option rows is immediate, with a clearly visible semantic danger backing. Keyboard focus can retain spatial settling; pointer hover
  never waits for a traveling spring.
- Removed button-label squeezing and offsets. The former `--bx-button-press-compression` and `--bx-button-press-offset` effects no longer apply; migrate their
  overrides to supported material settings. Text and icons remain undistorted while the backing/rim responds to pressure.
- Sliders and range sliders enlarge their existing magnifier while held, then spring back to a fully opaque resting thumb. Native values and centers remain
  direct. Range enlargement respects actual pixel clearance to the neighboring thumb, without measuring layout on each input event. Reduced motion and
  opaque-surface fallbacks remain independent.
- The held thumb's enlargement is clipped on the slider's own shell, so sliders inside scrolling panels no longer grow a horizontal scroll container.
  `--bx-slider-overflow-clip-margin` extends the painted region beyond the shell from its `0.75rem` default, keeping the focus ring and enlarged decoration
  visible. The thumb's resting box is also clamped inside the shell, so a stale track measurement cannot push it past the control.
- Side panels scroll in the block axis only. Content that paints past the panel's content box can no longer create a horizontal scrollbar inside the panel.

### Tab overflow and disclosure timing

- Isolated tab-selection deformation in a clipped decorative layer. A separate viewport scrolls the actual tab row, preventing artificial horizontal scrollbar
  changes during spring travel, including nested code-file tabs in the modal configurator. Genuine overflow, keyboard scrolling and drag edge scrolling remain
  available.
- Reduced collapsible/accordion height transitions from 220ms to 120ms. `--bx-collapsible-duration` optionally customizes the duration; live reduced motion
  still removes the transition immediately.

## Fluid interaction across the library

- Restored native horizontal touch scrolling in tabs. A short hold begins selection dragging; release uses bounded recent-velocity projection, with direct
  tracking, preserved spring velocity and continuous edge scrolling. Pausing removes flick momentum.
- Added shared `GestureVelocity`, `projectMotion`, `ISpringMotion.track`, and `subscribeFrame` APIs to the effects runtime. Gesture previews remain separate
  from committed state, guards, native scrolling and precise input values.
- Bottom-sheet handles now support touch, pen and mouse, with predicted release intent and spring recovery. Cancellation, lost capture, blur and Escape during
  dragging restore the sheet without dismissing it; accepted release requests still use the modal close guard.
- Shared surface pressure adapts to the input modality and preserves velocity through repeated presses. Reduced motion removes deformation and all CSS delays.
- Menu and option selection surfaces use a clipped decorative layer so spring overshoot cannot create scrolling. Field, disclosure and panel feedback uses
  shared motion curves. The runtime guide records interaction contracts and Playground review routes across component families.
