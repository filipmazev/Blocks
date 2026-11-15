# Component workbench

The Playground uses one Blocks-native workbench for component configuration, event inspection and copyable Angular examples. Storybook informs the interaction
model, not the styling or runtime. No Storybook dependency is installed.

## Import

The workbench is internal to the Playground. Consumer examples import components from the public `@filip.mazev/blocks/...` entry points.

```typescript
import { DemoWorkbench } from '@playground/components/shared/demo-workbench/demo-workbench';
```

## Usage

Open a component from the existing catalog. Playground, Examples and Documentation are separate Blocks tabs. The Examples tab retains specialized contextual
scenes such as asynchronous loading, validation, nested overlays and gesture demonstrations.

Edit properties and interact with the preview; configuration lives entirely in the properties panel. Reset story restores the initial arguments and
synchronously recreates an already-loaded preview. The wider properties panel can be closed, resized with pointer or keyboard, and reopened without losing
edits. Search and Controls/API stay visible while their contents scroll. Controls use the same built-in tooltip icons as Theme Studio, without per-field reset
actions.

Only component detail pages opt into `PageContainer` with `size="full"`, the existing `--bx-container-max-width: 120rem` override and shared spacing-4 inline
padding. They use more horizontal space while retaining centered margins on ultrawide screens. The component index, category catalogs and other pages retain
their defaults, and these overrides are reset at the page content boundary so nested previews keep their own container sizes and gutters.

The workbench fills the remaining page height, with a minimum usable panel height on short screens. Its segmented tabs pair Lucide icons with semantic theme
colors: green Code, blue Actions, and distinct accents for Playground, Examples and Documentation.

Code and Actions sit below the preview. The code file menu selects HTML, TypeScript and supporting files; Copy copies the selected file's current contents. A
shared horizontal resize handle adjusts the preview and results heights. Switching Code/Actions retains the chosen allocation instead of resizing the preview.
Results start at 320px, constrained by the space available for the preview, and remain resizable. The code viewer fills that allocation even for short files.
Only the snippet scrolls; the file picker and Copy stay visible at the top. Actions appears only when the generated preview or service adapter can emit events,
including native host events. Components without events show code directly without a tab bar. It retains a bounded history of event names and expandable payload
snapshots, with a Clear actions button. The counter displays `99+` after 99 events while retaining its bounded log.

## API

`actionsTemplate` exposes the workbench actions for placement in the owning page header. `storyId` selects an entry in the generated story registry. The
existing component catalog remains the source of route identifiers and public component names.

`tools/playground/generate-demo-stories.mjs` uses the TypeScript checker to discover inherited signal inputs, models, aliases, outputs, public members, types,
JSDoc descriptions, literal choices and resolvable defaults. Required inputs and unresolved defaults remain explicit. Templates, callbacks and other values that
cannot be represented safely by a control remain discoverable in API; they are not silently omitted.

`shared/constants/demo-recipes.constants.ts` supplies composition, initial arguments and configuration variants for export validation. Ordinary components use
inferred controls and a small recipe. Explicit overrides cover projected content, native host attributes, JSON editors, template references and service
adapters. The generator emits Angular components and templates, so the normal Angular build checks their bindings. JSON editors validate against schemas derived
from the same types; invalid edits retain the last valid preview and source and display an inline error.

Modal and Toast are specialized adapters inside the same workbench. Their argument interfaces describe the example configuration; their API views also include
public library configuration and patch contracts. The former `/modal` and `/toastr` routes redirect to the corresponding component stories. Opening, patching,
closing, queueing, pausing and resuming use the actual Blocks services. Opening-time settings are identified in the preview; an explicit Apply action changes
only the properties supported by the live patch API.

### Angular source synchronization guarantee

Controls, reset and controlled model outputs update one argument state. Export translates the generated preview template into ordinary Angular signal fields and
model bindings, serializing the current values including meaningful `false`, `0`, empty strings, nulls and omitted values. Bindings equal to library defaults
are omitted where safe; directive selector bindings remain. Workbench argument maps, event-log forwarding, `DemoInputs` and Playground imports are excluded.
Complex fields use the public component's input contract. Copy reads the current displayed file, not an original static example.

Export skeletons pass through the repository's ESLint autofix during generation. Live TypeScript and Angular HTML use lazily loaded Prettier parsers with
options generated from the repository configuration. Imports, signal-field spacing and empty Angular component declarations follow the same source rules.
Formatting keeps the panel and toolbar dimensions stable. Copy waits for the current formatted result; stale asynchronous results are discarded, and a formatter
failure exposes Retry without offering stale or unformatted code.

Service exports contain the configured `ModalService.open` or `ToastrService.queueToast` call and the minimal content/close-confirmation components needed for
that call. They return the real library reference for application-owned patching, closing, pausing and resuming. Toast close text reflects the selected language
without copying the Playground translation service. Specialized wizard, queue and lifecycle demonstrations remain interactive in the Playground but are not
bundled into the exported configuration.

This is an explicit Blocks contract. Storybook's [Source documentation](https://storybook.js.org/docs/api/doc-blocks/doc-block-source) distinguishes static
`code` from `dynamic` snippets; automatic selection depends on story arguments and framework support. Blocks does not assume those facilities generate correct
Angular examples. Static documentation snippets and contextual scenes are separate from the live workbench configuration.

Run the generator, lint and compiler checks after changing a recipe or component API:

```bash
npm run tools:generate:demo-stories
npm run tools:check:demo-stories
```

The check detects stale generated output, applies the actual repository ESLint configuration (including typed Angular rules and formatter plugins), and compiles
copied examples for every registered preset plus edited-state cases in a temporary Angular project. It checks long strings, quotes, backslashes, numeric and
boolean changes, imports, template bindings and supporting files without referencing Playground helpers. Temporary validation files are removed afterward.
Browser interaction checks are still needed for control changes, model feedback, resets, overlays and copying; compilation alone does not establish interaction
or accessibility conformance.

## Appearance and customization

The workbench uses Blocks SidePanelLayout, a resizable SidePanel, BottomDrawer, Tabs, menus, form controls, tooltips, collapsibles, buttons, icons and shared
surface effects. Reset and the icon-only Properties action sit at the far right of the component tab row. Property cells align vertically at their centers. It
inherits the active theme and appearance settings. The Properties panel reserves space on wide screens and opens as a modal bottom drawer on narrow screens,
with the same pinned search and inspection tabs. The preview, property list and results content scroll independently within their own bounds. Surface decoration
stays outside the preview scroll container so rims do not create scrollbars. Generated preview hosts use the existing examples’ wrapping, spacing and
constrained control widths. Compact components center horizontally and vertically; block content such as alerts, banners and accordions spans the available
preview width. Oversized previews remain scrollable from their leading edge. Full documentation is outside the workbench's constrained region.

Descriptions, types and defaults are disclosed through property tooltips and API entries rather than repeated beside every control. Supporting text wraps, code
has its own scrollbar, and the page header uses the existing page sizing tokens for a compact composition.

## Behavior and accessibility

Native semantics are retained for document structure; all interactive workbench controls use Blocks components or directives. The panel has a named
complementary region, a close action and a keyboard-accessible resize separator. Existing Blocks focus, tooltip, menu and tab behavior provides keyboard and
touch access. Shared components respect live reduced-motion and reduced-transparency preferences.

Async preview loading discards stale completions after navigation or destruction. A delayed Blocks skeleton appears only for an actual module load lasting more
than 200 ms; failures expose an inline retry action. Reset uses the cached component type without a loading flash and cleans up owned overlays and timers. Toast
examples restore their shared queue limit and language settings on teardown. Event snapshots avoid circular DOM objects and the log does not repeatedly announce
every emitted event. Successful copies use a neutral bottom-right Blocks toast shared with Theme Studio setup. Copy failures retain an inline status message.

## Playground

Every component catalog route includes the shared Playground tab. Start with `/components/button`, `/components/select`, `/components/modal-centered` and
`/components/simple-toast`. The icon catalog remains available at `/icons`; it is the reference for the existing bounded side-panel interaction.
