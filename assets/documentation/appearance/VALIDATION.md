# Validation record

## Border alignment and photo previews — 2026-10-27

- Surface reflections and decoration now share the host's actual border box and outer corner radius, including borderless and one-sided panels. Focus outlines sit inside that boundary. The circular slider's reflection uses its thumb border box.
- Overview and Appearance use the supplied mountain photograph. Appearance's backdrop positioning control pans the photograph; the old circular scenery and its light-source controls are removed.
- Both production builds passed. All 94 Chrome/WebKit regression scenarios passed, including the new light/dark highlight geometry check and existing modal overflow checks. Photo loading, panning and narrow-screen layouts passed a browser smoke check; light/dark screenshots were inspected.

## Appearance consolidation — 2026-10-27

- The library and playground production builds pass with the runtime included in `@filip.mazev/blocks/effects/runtime` and the Angular adapter in `@filip.mazev/blocks/effects`.
- All 92 existing Chrome/WebKit regression scenarios passed. Two slider checks were rerun with a numeric tolerance after changing the default blur/range. Additional checks in both browsers passed for White defaults, 10px blur, 40% tint, removed settings/actions, palette and mode synchronization/persistence, the functional material menu, reset, and mobile layout.
- Package export checks and an npm pack dry run confirm the runtime, effects stylesheet, White Sass theme and installer are included without a separate glass dependency or duplicated schematic assets.
- Installer checks passed for White (explicit and default) and all previously selectable themes, including Sass compilation, repeat installation and migration of legacy stylesheet paths.
- The publish script passed a mocked npm check for its token prompt, build/publish sequence and temporary authentication cleanup. No package version or registry was changed during validation.
- `npm run deploy:playground -- --dry-run` passed. The generated `/Blocks/` build passed a browser check for assets, Appearance defaults and mobile navigation; nothing was deployed.
- The existing 500kB initial bundle warning remains: the production bundle is 806.81kB. Error budgets are not exceeded.
- The root Playwright configuration and `test-results` folder are absent. Validation used temporary configuration and output under `/tmp`.

## Earlier rendering and interaction verification

Workspace regression pass: 2026-10-27. Blocks 1.4.0 with the integrated effects runtime.

## Completed checks

- `npm run build:blocks`: strict TypeScript compilation and synchronization of the stylesheet used by Angular packaging passed.
- `ng build blocks --configuration production`: all library entry points, Angular templates, Sass, declarations, and package assets compiled successfully.
- `ng build playground --configuration production`: optimized application build passed. The initial bundle is 798.34 kB against a 500 kB warning budget; the build error budget was not exceeded.
- Browser regression suite: **92 passed, no skips** (46 scenarios across Google Chrome and Playwright WebKit) in the complete final run. Console errors and uncaught page errors fail the suite.
- Visual review covered light/dark glass controls, sliders, desktop and mobile navigation, modal surfaces/backdrops, and notifications. The supplied recording was inspected as frame samples and the screenshots were used as defect references.

## Regressions covered

- Tooltip hover on nested icons, keyboard focus, Escape, rapid exit/reentry, accessibility-description cleanup, and viewport bounds.
- Form help uses the same CDK tooltip overlay instead of inline positioned legacy content.
- Mobile drawer hit testing above page controls, scrolling within the drawer, body scroll locking, and keyboard focus restoration.
- Centered dialogs, side panels, and bottom sheets retain readable tinted surfaces and blurred backdrops; panel content remains above its backdrop.
- All three modal layouts have zero horizontal overflow during held input presses, focus and long-value editing at 1440, 390 and 320 CSS-pixel widths in Chrome and WebKit. Saving the edited value still works.
- Select, dropdown and tooltip entry/exit are sampled on every animation frame: opacity changes while panel dimensions and text remain fixed; backing stays opaque and closing never flattens into a line. Both engines pass a striped-background pixel check for the solid overlay backing.
- Native range keyboard input, pointer input, RTL placement, application-wide blur/material updates, programmatic resets, and disabled/forced-color controls. The circular thumb is opaque and follows the actual native track center, including inputs with margins at desktop and mobile widths.
- Unchecked switch visibility, radio native/visual exclusivity, arrow-key selection and programmatic resets; disabled Angular form state survives initialization.
- Custom and semantic toasts retain glass, dismiss correctly, follow live appearance changes, illuminate neighbors, and anchor their light to the actual rendered progress edge (checked within 1.5 CSS pixels). Hover pauses both progress and its light.
- Neutral button edges and zero default emission in light/dark themes; reduced motion, forced colors, and the unsupported-backdrop fallback.

- Flush focus borders, padded search clearing, ellipsis with complete titles, plain breadcrumb links, inline help, and theme-colored icon backgrounds.
- Validation uses a muted one-pixel border and soft outer glow without a thick inset strip. Neighbor lighting fades with distance, disappears beyond its radius, and clears after recovery, including projected `bx-error` content. The focused validation checks pass in Chrome and WebKit.
- Documentation panels match configurator height and scroll internally at desktop/mobile widths.
- Pointer lighting is removed; numeric steppers inherit their container corners. Slider radius is generated through the shared Sass helper, and the decorative thumb receives scene lighting. The original native input retains hit testing, focus, forms and keyboard semantics.
- The radius/breakpoint audit includes inline component styles and the native example. Responsive CSS is generated through shared mixins; compiled styles contain no unresolved Sass helper calls.

- Semantic hover/focus lights only nearby facing sides and diagonal corners. Reflections and the emitting border fade in and out, including rapid changes between icons. Moving within the source leaves its light fixed; leaving, paging, and destroying a source clear it. Menu rows receive no independent reflections, navigation stays isolated, and button backgrounds remain neutral from the first frames after route changes.

- Added stacked-dialog checks for centered, side and bottom-sheet layouts; covered receivers and independent foreground layers; focused-field emission and blur cleanup; identical packaged/projected invalid styles; and tooltip arrow placement/color in both themes.

## Root causes corrected

Press deformation previously transformed the entire decoration clipping box, adding several pixels to an ancestor’s scrollable width. Only the highlights inside that fixed clipping box now deform. Border reflections also stay inside borderless surfaces, removing a separate one-pixel page overflow. The shared modal demo body stacks its description and input and can shrink to the available width.

CDK enables pane pointer events during attachment. Setting a tooltip pane to ignore pointer events before attachment was overwritten, so its emerging geometry intercepted the small trigger underneath. The setting now happens after attachment; Escape uses CDK's keyboard dispatcher. The invalid `keydown.escape` HostListener signature has been removed.

Backdrop filtering now belongs to the surface itself. Its decorative child supplies highlights only. This keeps filtering stable for scrollable/animated surfaces, while nested controls avoid additional blur passes. Modals, toasts, and navigation use minimum tint densities for readability; animated menus and tooltips use solid backing. Both standard and WebKit-prefixed filters are supplied, with opaque fallbacks.

Dropdowns, selects and tooltips use opacity fades with solid backing instead of liquid geometry. Source text never shrinks, clips or stacks during motion. Independent lighting contributions crossfade over 200 ms, while updates from the same source follow its actual geometry without another spatial spring. Hover emission comes from a visibly colored border, has a short 120 CSS-pixel reach, and stays within its navigation/content/dialog scope. Menu rows share their parent material and do not register as light receivers. Buttons apply neutral material before their first style read, avoiding legacy color flashes during navigation.

The shared FormControl updated native radios but left peer component signals stale. Radio groups now synchronize their visible state by shared control or native form/name group. The slider’s missing Sass helper import emitted an invalid literal `radius(pill)` declaration; that import and generated-CSS audit are now in place.

The mobile navigation host has its own stacking level above sticky page controls and below service overlays. Its material is outside the scrollable navigation content. The Glass Lab's colored light is scoped to the preview stage so it does not tint unrelated navigation and controls.

The canonical effects stylesheet now lives inside the library at `projects/blocks/effects/effects.css`, so ng-packagr includes it directly without a synchronization copy.

The effects runtime now compiles directly from `projects/blocks/effects/runtime`; the separate workspace package and its prebundling exclusion have been removed.

## Limits and reproduction

Firefox was installed and attempted, but its process exits before loading a page with `Could not find profile folder` on this macOS host. Canonical temporary paths and a temporary process-only sandbox workaround did not resolve the launch failure. Firefox interaction/rendering is **not verified** here; the Firefox test project remains available for a working host.

The macOS Playwright WebKit screenshot runner omits actual backdrop blur even on a static minimal HTML page with only a striped background and one filtered div. The same reproduction failed in headed and headless modes and after removing isolation/transforms. The current slider intentionally uses an opaque thumb; the suite no longer depends on a blur-only screenshot assertion. Its interactions, circular geometry, centering, opacity and the solid overlay pixel check run on both engines. Actual Safari pixel rendering is **not certified by these snapshots**. Related upstream [WebKit snapshot report](https://github.com/microsoft/playwright/issues/13605) and [Playwright rendering caveats](https://playwright.dev/docs/test-snapshots).

The fallback test activates the actual no-backdrop-filter CSS branch in current engines. This verifies its opaque material declaration, not an emulated historical browser. No physical-device GPU performance or exact native Apple rendering claim is made.

The root Playwright configuration and results folder were removed at the user’s request. Existing regression scenarios can use an external configuration and output directory. See [browser test setup](../../tools/browser/README.md). The local review server uses port 8081. These workspace checks supersede the earlier ZIP delivery's static-only validation.

The current lighting pass gives each modal panel its own scope, separates positioned hover/focus layers, and hit-tests receivers before adding light. Geometry is refreshed on emitter changes so modal opening transforms do not leave stale positions. Focus and hover have independent contributions. All field error visuals share the same Sass mixin. Tooltip arrows overlap the body edge with the same fill and only their outward borders are drawn.
