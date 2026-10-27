# Blocks glass: delivery plan

## Product intent

Glass is a material and motion capability of Blocks. It uses the existing Blocks palette, semantic color tokens, spacing, radii, typography, modal and toast conventions. It does not introduce an independent visual language.

This iteration deliberately excludes dragging or repositioning controls. Its motion scope is connected emergence and return: a floating element appears to separate from its source, then rejoins it when closed. Rendering must remain usable across modern browsers, with capability-based enhancements and inexpensive fallbacks.

## Roles and delivery workflow

| Role | Responsibility |
| --- | --- |
| Product owner / business analyst | Preserve the user requirements, maintain the component inventory, write acceptance criteria, and identify scope gaps. |
| Delivery coordinator | Track the stories below, communicate cross-team dependencies, and collect implementation evidence. |
| Engine owner | Framework-independent rendering, lighting, bounded motion, and cleanup. |
| Theme/component owner | Existing theme engine integration, global settings, and library component adoption. |
| Playground/documentation owners | Complete discoverable demos, local documentation delivery, icon performance, and consistent application styling. |
| Independent acceptance reviewer | Review source and execution evidence without creating test files. |
| Integrator | Resolve cross-team issues, run available build checks, verify packaging, and produce the final ZIP. |

Assignment: `glass_engine_v2` owns the engine; `theme_components` owns library adoption and theming; `playground_shell` owns shell/home/appearance/icon screens and documentation bundling; `documentation_demos` owns component READMEs, routes, navigation and added examples; `build_validation` owns available build/parser checks; `product_acceptance` owns the requirements ledger and independent review; the integrator owns the remaining cross-team work and ZIP.

Work proceeds through inventory → implementation → integration → independent review → packaging. A story is accepted only when its implementation evidence and any remaining browser or environment limitation are recorded in `ACCEPTANCE.md`. “Implemented” is not a claim that a browser interaction has been verified.

## Epics, user stories, and tasks

| ID | Epic / user story | Tasks | Owner | Acceptance criteria |
| --- | --- | --- | --- | --- |
| G1 | As an application author, I can use glass without an Angular dependency. | Extend the native DOM engine; retain native content and event behavior; export documented APIs. | Engine | Standalone package contains no Angular runtime import; mounting, updating and disposal are explicit; no drag behavior. |
| G2 | As a user, I see reflections respond to the surrounding scene and interaction. | Add configurable scene light inputs; derive bounded directional highlights; observe relevant scene changes; gate higher-cost rendering by capability and preference. | Engine | Reflection position/intensity can change; documented light/background/foreground model is honest about approximations; solid and reduced-transparency rendering work. |
| G3 | As a user, I see a menu emerge from and merge back into its trigger. | Animate a connected material silhouette; keep blurred material inside that silhouette; support interruption/reversal; preserve native content sizing. | Engine + integrator | Opening and closing share continuous material geometry; blur moves with the visible skin; no floating static blur or scaled text; rapid open/close does not orphan a scene. |
| G4 | As a user on a modest device, I get responsive controls. | Share/cap scene work; stop idle animation; bound transient surfaces; honor reduced motion and quality settings. | Engine | No continuous RAF at rest; no unbounded screen capture or per-frame whole-document read; enhancement can be disabled. |
| T1 | As an application author, I configure appearance once for all Blocks components. | Add typed global configuration through the existing theme service; map material values to existing semantic tokens; propagate updates into overlays. | Theme/components | A single setting updates mounted components and already-open overlays; palette and light/dark changes remain live; defaults follow Blocks. |
| T2 | As a Blocks user, every existing component participates in glass. | Apply material backing to actual component surfaces; let labels/icons inherit foreground; audit states and shape consistency against modal/toast patterns. | Theme/components | Coverage inventory below has an implementation for each component; selected/disabled/error/focus states retain meaning; nested controls avoid unnecessary stacked blur. |
| P1 | As a developer, I can find and try every Blocks component. | Add missing pages and navigation entries; include real working examples; link component README content. | Playground/docs | Every public component has an addressable demo page or explicitly linked subcomponent page with working usage; no dead navigation or placeholder-only pages. |
| P2 | As a developer, I can browse icons without rendering the whole catalog. | Bound the visible icon count; search the names collection; lazy-load actual icon data; preserve size/stroke controls. | Playground | Visible DOM and icon resolution are bounded; query changes do not request every icon; current results and navigation are clear. |
| P3 | As a developer, documentation appears immediately on repeat navigation. | Bundle or precompile local documentation; remove per-instance README HTTP fetch; preserve syntax examples. | Playground/docs | First-party documentation is local to the application build; returning to a page does not refetch its Markdown document. |
| P4 | As a user, the complete playground demonstrates Blocks coherently. | Adapt shell, navigation, home, component demos and glass controls; use existing tokens and ThemingService; keep mobile navigation usable. | Playground | Global controls affect the application; page styles use Blocks semantic tokens; modal and toast demos retain functionality. |
| D1 | As a library consumer, I can understand each component without reading its implementation. | Write missing component READMEs; document imports, inputs, interactions, accessibility and glass behavior; generate documentation catalog if needed. | Documentation | Inventory has a README for every exported visual component and important public directive; examples match actual APIs. |
| D2 | As the maintainer, I receive a reviewable and truthful deliverable. | Record changes, acceptance evidence and limitations; remove test files from the delivery archive; align Angular toolchain dependencies; package source. | Integrator + acceptance | Archive has no test/spec files; build outcomes are stated accurately; naming is glass; the ZIP includes the source, docs and required generated assets. |

## Task board

| Task | Story | Concrete deliverable | Assigned owner | Status |
| --- | --- | --- | --- | --- |
| ENG-01 | G1 | Native glass API, declarations and documentation | glass_engine_v2 | Implemented; source reviewed |
| ENG-02 | G2 | Shared scene/light controller and rendering capability levels | glass_engine_v2 | Implemented; source reviewed |
| ENG-03 | G3 | Connected material geometry, moving blur and reversal cleanup | glass_engine_v2 | Implemented; source reviewed |
| ENG-04 | G4 | Bounded scheduling and accessibility/quality fallbacks | glass_engine_v2 | Implemented; source reviewed |
| LIB-01 | T1 | Typed global theme configuration and live overlay inheritance | theme_components | Implemented; source reviewed |
| LIB-02 | T2 | Component surface integration and semantic state audit | theme_components | Implemented; source reviewed |
| DEMO-01 | P1 | Component route catalog, navigation and interactive examples | documentation_demos | Implemented; inventory/API reviewed |
| DEMO-02 | P2 | Bounded icon catalog with name filtering | playground_shell | Implemented; source reviewed |
| DEMO-03 | P3 | Local documentation generator and cached display | playground_shell | Implemented; source reviewed |
| DEMO-04 | P4 | Coherent application shell, home and global appearance controls | playground_shell | Implemented; source reviewed |
| DOC-01 | D1 | Missing component and directive READMEs | documentation_demos | Implemented; inventory/API reviewed |
| QA-01 | D2 | Independent coverage, lifecycle and accessibility review | product_acceptance | Source review complete; browser checks pending |
| QA-02 | D2 | Available compilation/parser validation evidence | build_validation | Available checks passed; unavailable build/browser gates documented |
| PKG-01 | D2 | Updated source archive without test files | Integrator | Archive audited |

## Public component coverage inventory

The initial inventory is grounded in the `public-api.ts` entrypoints and component selectors. Decorative icons, structural wrappers, and backdrop components need compatible inheritance/composition rather than their own expensive blurred layer.

| Area | Public component / selector | Initial documentation/demo state |
| --- | --- | --- |
| Forms | Button — `bx-button`, `button[bx-button]`, `a[bx-button]` | Missing dedicated README/page |
| Forms | Checkbox — `bx-checkbox` | Missing dedicated README/page |
| Forms | FormField — `bx-form-field` | Missing dedicated README/page |
| Forms | InputField — `bx-input-field` | Missing dedicated README/page |
| Forms | Radio — `bx-radio` | Missing dedicated README/page |
| Forms | SearchInput — `bx-search-input` | Missing dedicated README/page |
| Forms | Select — `bx-select` | Missing dedicated README/page |
| Forms | SlideToggle — `bx-slide-toggle` | Missing dedicated README/page |
| Primitives | Menu — `bx-menu` | Used in glass demo; missing dedicated README/page |
| Primitives | MenuItem — `bx-menu-item` | Used in glass demo; missing dedicated README/page |
| Primitives | Tooltip — `bx-tooltip` | Missing dedicated README/page |
| Navigation | Breadcrumbs — `bx-breadcrumbs` | Missing dedicated README/page |
| Icons | Icon — `bx-icon` | Catalog exists; missing dedicated README |
| Modal | ModalCore — `bx-modal` | Package documentation and modal demo exist |
| Modal | ModalCentered — `bx-modal-centered` | Covered indirectly by modal demo; missing own README/page |
| Modal | ModalSide — `bx-modal-side` | Covered indirectly by modal demo; missing own README/page |
| Modal | ModalBottomSheet — `bx-modal-bottom-sheet` | Covered indirectly by modal demo; missing own README/page |
| Modal | ModalBackdrop — `bx-modal-backdrop` | Covered indirectly by modal demo; missing own README/page |
| Modal | ModalBanner — `bx-modal-banner` | Covered indirectly by modal demo; missing own README/page |
| Toastr | ToastCore — `bx-toast-core` | Package documentation and toast demo exist |
| Toastr | SimpleToast — `bx-simple-toast` | Covered indirectly by toast demo; missing own README/page |

Also track the public `bxDropdown`, `bxContextMenu`, `bxTooltip`, `bxSurface`, validation error, modal header/footer, navigation service and theme service APIs where their behavior is primarily directive/service-based.

## Non-goals and fidelity boundary

- No dragging, control repositioning, or physics that interferes with scrolling or text input.
- No claim of physically accurate arbitrary-HTML refraction or automatic 3D reconstruction. CSS backdrop filtering and explicit scene/light inputs are an approximation of optical behavior.
- No new test files. Validation uses available builds, source inspection and manual execution, with unsupported execution clearly recorded.
- No replacement of Blocks tokens with a new palette, radius system, or typography system.
- No claim of measured frame-rate or GPU cost without a corresponding browser measurement.

## Status

Requirements, component inventory, implementation and independent source review are complete. Review findings and their resolutions are tracked in `ACCEPTANCE.md`. Available checks and final archive integrity/content audit passed. Angular production compilation and browser appearance/performance remain separate acceptance gates; environment constraints and executed evidence are recorded in `VALIDATION.md`.
