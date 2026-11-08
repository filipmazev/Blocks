# Blocks house rules

These rules apply throughout this repository, including the library, playground, documentation, and tooling. Explicit instructions from the user take
precedence. Existing files can contain older patterns; do not copy a pattern that conflicts with these rules. Apply the rules to new and changed code without
reorganizing unrelated code.

## Design priorities

- Prioritize mobile responsiveness, accessibility, customization, theming, and developer experience in every API and interaction.
- Preserve Blocks' visual language and established architecture. Extend shared mechanisms instead of introducing a parallel styling, accessibility, translation,
  or configuration system.
- Provide useful defaults, typed extension points, and explicit behavior. Applications should not need to access component internals or manipulate the DOM to
  customize supported behavior.
- Separate orchestration, state, configuration, and presentation. Share behavior between variants while keeping their templates and styles focused.
- Where read-only behavior makes sense, expose it for the control and prevent edits without treating it as disabled. Preserve the framework's lowercase
  `readonly` form-state contract and support the consumer-facing `readOnly` input consistently.
- Preserve existing public contracts when practical. Document deliberate compatibility changes and provide a migration path where needed.

## File organization and naming

- Keep one primary component, directive, service, or class declaration per file. Do not place supporting interfaces, type aliases, enums, constants, free
  functions, or additional classes in that file, even when they are not exported.
- Place supporting declarations in the owning library entry point's top-level category folders, following Modal's structure. For example,
  `projects/blocks/primitives/types/dropdown.types.ts`, `primitives/interfaces/ibx-overlay-context.interface.ts`, and
  `primitives/tokens/overlay-context.token.ts`. Types, interfaces, constants, helpers, services, classes, enums, and tokens are siblings of `components` and
  `directives`; do not nest these category folders inside a component or directive folder. Related generated data may use a namespace inside its category, such
  as `icons/constants/lucide`. A secondary entry point such as `effects/runtime` owns its own category folders.
- Keep each concrete component or directive's implementation, template, styles, existing specs, and README together in its own folder below `components` or
  `directives`. Do not leave the implementation beside a separate documentation folder. Shared slot directives belong in the entry point's `directives` folder;
  form hint/error components belong in `components`, even if older filenames called them directives.
- Use these declaration categories:

    | Declaration      | Folder       | Filename                                    |
    | ---------------- | ------------ | ------------------------------------------- |
    | Types            | `types`      | `<logical-group>.types.ts`                  |
    | Constants        | `constants`  | `<logical-group>.constants.ts`              |
    | Interfaces       | `interfaces` | `i<description-in-kebab-case>.interface.ts` |
    | Shared functions | `helpers`    | `<logical-group>.helpers.ts`                |
    | Services         | `services`   | `<description>.service.ts`                  |
    | Classes          | `classes`    | `<description>.ts`                          |
    | Enums            | `enums`      | `<description>.enum.ts`                     |
    | Injection tokens | `tokens`     | `<description>.token.ts`                    |

- Types and constants may be grouped by closely related purpose within their respective files. Do not mix declaration categories in the same file.
- Name interfaces with an uppercase `I` followed by a PascalCase description: `ISomethingHere` in `isomething-here.interface.ts`.
- Export supporting declarations from their defining files. Re-export through the owning package's `public-api.ts` only the declarations useful for consumer
  configuration, customization, integration, or extension. Split files when needed to keep internal and consumer-facing exports distinct.
- Give exported library interfaces a descriptive JSDoc comment and document every member with JSDoc immediately above that member. For configuration properties,
  explain purpose, optionality, defaults, and relevant behavior. Use `@typeParam` for generic parameters; do not collect property descriptions in
  interface-level `@param` tags. Document event payloads when their meaning is not obvious.
- Document every public method, accessor, and property of exported library components, directives, and services with descriptive JSDoc immediately above the
  declaration. Explain purpose and observable behavior, rather than restating the member name. This includes signal inputs/models, outputs, public state,
  lifecycle hooks, and public injected references. Document property defaults, optionality, units, translation support, event payload meaning, and relevant
  disabled/readonly or asynchronous behavior where applicable.
- Document every exported library helper, including function-valued exports, with descriptive JSDoc. Public methods and exported helpers require a descriptive
  `@param` tag for each formal parameter and `@typeParam` for each generic parameter. Explain optional/default values and meaningful result/error behavior; add
  `@returns` when the result is not clear from the summary. Getter comments describe the readable value; setter comments also document the incoming parameter.
  Keep existing useful documentation, examples, and compatibility notes when extending comments. Review prose for accuracy; lint validates structure and
  parameter coverage, not whether a description matches the implementation.
- Extract named public configuration and data contracts instead of embedding substantial anonymous object types in component or service APIs.
- Put reusable, stateless functions in helpers when their logic is shared across components. Use services for dependency injection, shared state, lifecycle, or
  coordinated behavior. Keep component-specific implementation as private methods.
- Keep component implementation, template, styles, and `README.md` together. Use separate HTML and SCSS files for substantial views.
- Import internal dependencies directly from their defining files where appropriate; avoid importing an owning feature's public barrel back into itself and
  creating dependency cycles.
- Keep direct same-directory module imports relative (`./name`). Use the configured `@` aliases for parent folders and nested folders, including re-exports,
  dynamic imports, and import types. Add a typed path mapping in `tsconfig.json` when needed. Keep Angular template/style URLs and Sass paths in their native
  resource formats. Cross-library entry-point imports and consumer examples use `@filip.mazev/blocks/...`; do not import a feature's own public barrel back into
  itself.

## Angular, configuration, and lifecycle

- Follow the existing standalone component and directive approach. Library selectors use `bx`; playground selectors use `app`.
- Use `inject()` for Angular dependencies and mark injected fields `readonly`. Use signal-based `input()`, `model()`, `output()`, `viewChild()` and
  `viewChildren()` APIs instead of `@Input`, `@Output`, `@ViewChild` and `@ViewChildren`; use signal content queries too. Keep signal and output references
  `readonly` and use signals for component state that affects rendering. Use `computed()` for derivation and effects for side effects rather than copying
  derived state between signals.
- Name injected class references after the injected class in lower camel case, preserving the full name and suffix: `inject(PackageReleaseService)` is
  `packageReleaseService`, `inject(BxA11yService)` is `bxA11yService`, and `inject(ActivatedRoute)` is `activatedRoute`. Apply this to class fields and local
  variables, including aliased imports. Class-token references such as `ElementRef` and `ViewContainerRef` follow the same rule. Injection-token constants
  retain meaningful consumer names such as `i18n` for `BX_I18N`.
- Name direct injected member projections exactly after the projected member: `inject(BxA11yService).isReducedMotion` is `isReducedMotion`, and
  `inject(ElementRef).nativeElement` is `nativeElement`. Keep optional access and type assertions consistent with the same naming contract. Method invocation
  results are ordinary derived values, not direct member references. Reuse an inherited injected reference instead of redeclaring the same dependency under an
  alias. Update TypeScript references, templates, host bindings, examples, and generated documentation when renaming.
- Explicitly declare `ChangeDetectionStrategy.OnPush` in every new component and design its state and asynchronous updates for OnPush. This is a development
  rule, not an ESLint requirement. Preserve existing change detection until its update paths have been reviewed; do not switch existing components mechanically.
- Keep configuration typed and centralized. Resolve defaults in a predictable order: explicit instance configuration, shared application settings, then library
  defaults. Accessibility preferences take precedence over requested motion.
- Use nullish defaults where `false`, `0`, and empty values are meaningful. Merge partial updates without discarding unrelated configuration or mutating
  consumer-owned objects.
- Expose documented inputs, outputs, methods, configuration, and template slots for supported customization. Keep implementation state private or protected.
- Clean up subscriptions, listeners, observers, timers, overlays, and animation controllers. Use `DestroyRef` and `takeUntilDestroyed` where appropriate, and
  guard asynchronous completion after destruction or a newer operation.
- Keep browser-only operations safe for server rendering. Use the existing document/platform facilities and defer measurement until elements are rendered.

## Formatting and method organization

- Follow `eslint.config.js`, `prettier.config.mjs`, `tools/typescript-format-options.mjs`, and the repository's style formatting configuration. TypeScript and
  JavaScript formatting uses two spaces, single quotes, no trailing commas, LF line endings, and a 160-character print width; HTML, styles, JSON, Markdown, and
  YAML use four spaces. Generated TypeScript passes through the same ESLint autofix and formatting rules before being written. Generated CSS uses the same
  Prettier configuration; verify generators are idempotent and their output needs no second lint/format pass.
- Use explicit member accessibility, with no `public` modifier on constructors. Declare explicit types on class properties and signal fields; Angular `inject()`
  references may retain their inferred token types, including direct projections such as `inject(ElementRef).nativeElement`. Prefer specific types, generics, or
  `unknown` with narrowing over `any`. An unavoidable `any` needs a narrowly scoped lint suppression explaining the external constraint.
- Do not require underscores on private or protected names. Remove unused imports, locals, and private members, including unused entries in component `imports`.
  An unavoidable unused parameter or catch binding may use an `_` prefix; do not prefix used parameters or imports to evade checks. Protected/public members can
  be consumed by templates, subclasses, or applications, so review their usage before removal.
- Put readonly injections first, grouped private, protected, public. Group other readonly fields by visibility (private, protected, public), then by API purpose
  within that visibility: ordinary/derived state, inputs/models, outputs, singular view/content queries, plural view/content queries. This keeps private queries
  before protected state. Put mutable fields afterward, grouped public, protected, private. Recognize Angular APIs by initializer rather than property name. Do
  not reorder initializers without checking their dependencies.
- After fields, order the constructor, `ngOnChanges`, `ngOnInit`, `ngDoCheck`, `ngAfterContentInit`, `ngAfterContentChecked`, `ngAfterViewInit`,
  `ngAfterViewChecked`, `ngOnDestroy`, public methods/accessors, protected methods/accessors, then private methods/accessors. Initialization and subscription
  helpers follow their accessibility group. Keep related getter/setter pairs together.
- Keep private methods inside `//#region Helpers` and `//#endregion`. Add nested regions such as `//#region Resolvers` when useful. Leave an empty line after
  every region opening and before every region closing. Balance regions and keep Helpers inside its owning class; regions must respect member ordering.
- Group and alphabetize imports with ESLint: side effects, Node built-ins, Angular, RxJS, other external type imports, Blocks package imports, workspace
  aliases, other packages, then relative imports. Angular, RxJS, and relative type-only imports precede values in their respective groups. Keep intentional
  side-effect import order intact.
- Indent the contents of brace blocks by two spaces in TypeScript. Do not put empty lines immediately after a class opening brace or before its closing brace.
  Keep fields with the same visibility and initializer/API purpose together without empty lines; separate different groups and methods with one empty line.
  Nullable signal state, other signal value families, computed state, and queries form separate groups. ESLint automatically fixes indentation and member
  spacing.
- Separate logical steps with blank lines. In particular, separate variable preparation from a following `if`, loop, or other control flow, and separate
  completed control-flow blocks from the next distinct step. Keep related assignments together without compressing unrelated operations.
- Keep consecutive declarations of the same kind together, prefer `const` before `let` where initialization dependencies permit, and do not use `var`. Separate
  declaration-kind changes, declarations and other statements, control-flow starts/ends, and returns/throws with empty lines. Do not reorder dependent
  declarations merely for appearance.
- Use comments to explain contracts, intent, and non-obvious behavior. Do not disable lint rules broadly to avoid following the established structure.
- SCSS comments are limited to ESLint/Stylelint control directives and essential explanations of non-obvious styling constraints, browser behavior,
  accessibility, or required attribution. Prefix essential explanations with `IMPORTANT:`; do not add routine headings, narration, or redundant comments.
  Stylelint enforces this comment format; reviewers decide whether an explanation is essential.

## Mobile responsiveness and interaction

- Design for narrow screens and touch first, then extend the layout for larger screens. Use existing breakpoint tokens, responsive mixins, and dimension
  services rather than inventing independent breakpoints.
- Support browser zoom, text enlargement, long translated content, constrained containers, and RTL layouts. Prefer logical CSS properties and content that can
  wrap or shrink without hiding essential actions.
- Constrain surfaces to the available viewport and allow the appropriate content region to scroll. Keep actions reachable when viewport dimensions change.
- Give pointer, touch, and keyboard users equivalent access to functionality. Do not depend on hover, a scrollbar, or a precise pointer position for essential
  actions.

## Accessibility

- Integrate with `BxA11yService` for reduced-motion behavior and respect the existing shared accessibility styles. React to preference changes while the
  component is mounted.
- Preserve state and feedback when motion is reduced; provide a static alternative where movement conveys activity.
- Prefer native semantics and interactive elements. Provide accessible names, visible focus, correct keyboard operation, and disabled/readonly behavior
  appropriate to the control.
- Associate descriptions and errors with their controls. Announce relevant asynchronous and validation changes without excessive repeated announcements.
  Preserve accessible names during state transitions.
- Use text, icons, or structure as well as color to convey state. Support high contrast, forced colors, reduced transparency, and the existing opaque appearance
  fallbacks.
- Maintain predictable focus when content is opened, closed, replaced, appended, or reset. Reuse the existing overlay positioning, theme inheritance, stacking,
  and focus mechanisms.

## Theming and customization

- Use Blocks semantic CSS variables and shared Sass helpers for color, spacing, radius, elevation, motion, and responsive behavior. Do not hardcode a palette or
  create a separate theme system.
- Import Sass definitions through `core/styles/helpers`; include global styles only through the established global entry point, not repeatedly from component
  styles.
- Follow `ThemingService` and the shared surface/effects APIs. Theme and appearance changes must update mounted components and their overlays.
- Expose documented component CSS variables, configuration, and slots where consumers need customization. Defaults should fall back to shared semantic tokens.
- Preserve content readability and focus visibility in light/dark themes, alternate palettes, opaque presentation, and accessibility modes. Decorative effects
  must not carry essential information.

## Motion and lighting refinement

- Preserve each component's established silhouette and material. Calibrate existing fill, reception, and emission before adding inner rails, outlines, beams, or
  other decorative geometry. Thin progress tracks and segments should remain continuous and readable.
- Use traveling selection surfaces when their destinations share a clear spatial relationship, such as tabs or connected step indicators. Separate cards use
  local border, tint, rim, or pressure feedback instead of a surface traveling across the empty space between them.
- Treat motion as a response to committed state. Guards, validation, asynchronous confirmation, and disabled/readonly behavior remain authoritative. Rapid
  changes retarget current position and velocity rather than restarting an animation.
- Where a selection surface looks draggable, support direct pointer/touch manipulation alongside click and keyboard operation. Keep preview separate from
  committed selection, capture the gesture, and handle release, cancellation, Escape, stale data, overflow, and teardown predictably.
- Reuse the effects runtime's exact spring, motion presets, and shared lazy frame scheduler. Bound deformation, stop settled work, keep hit targets stable, and
  preserve pointer precision for controls such as sliders. Use local motion where spatial travel would imply a relationship the UI does not have.
- Keep the existing lighting engine authoritative. Received environmental light and emitted semantic light are independent. Emission should follow the visible
  material's geometry; registered descendant origins reuse their own surface renderer rather than adding another lighting layer.
- Highlights must read as light in every theme. Do not simulate stronger illumination by increasing a dark elevation shadow. Use semantic color, theme surfaces,
  and the engine's directional rim/reflection treatment, while keeping resting depth separate from illumination.
- Keep decorative selection layers out of scrollable overflow calculations. Spring stretch and overshoot must not create scrollbars or change header height;
  genuine tab/item overflow must remain reachable by pointer, touch, and keyboard. Keep routine disclosure transitions brief and interruptible.
- Pointer hover feedback must respond immediately; do not delay menu hover with a traveling spring. Keep danger hover visibly semantic. Keyboard selection may
  use spatial settling where it aids orientation, independently of immediate pointer feedback.
- Keep button text and icons undistorted. Apply pressure feedback to the material, rim, or backing rather than squeezing the label. Slider thumbs may enlarge
  into their existing magnifier treatment while held, then spring back to an opaque resting thumb; their value and center must track the pointer precisely.
- Semantic fill, foreground, and contour changes must agree immediately. Cached environmental/refraction tint must not visually retain the previous status over
  an error or other important semantic border. Refresh the existing renderer when committed semantic material changes and preserve semantic contour priority.
- Respect live reduced-motion and reduced-transparency preferences independently. Remove decorative travel/deformation under reduced motion while preserving
  direct manipulation and state feedback; adapt material opacity without disabling useful lighting.
- Validate the actual interaction in the Playground, including hold-and-drag, interruption, variable geometry, light/dark themes, narrow layouts, and semantic
  state changes. Visual feedback from review takes precedence over adding increasingly elaborate effects.

## Translations

- Integrate user-facing text with `BX_I18N`. Accept the shared `ResolvableText` contract for configurable text rather than adding a separate translation format.
- Inject the adapter optionally: `inject(BX_I18N, { optional: true })`. Plain strings must work without an adapter.
- Resolve text reactively in `computed()`. Read `this.i18n?.version?.()` inside the computation so changing the active language updates already-rendered
  content.
- Detect translation-key values through `isTextWithKey()`. Resolve keys with `translate(key, params)` where parameters are available and fall back to the key if
  no adapter is present. Return plain strings unchanged and handle absent text deliberately.
- Apply translation support to visible labels, placeholders, hints, errors, empty/loading states, actions, and accessible labels. Do not leave new internal
  action text or accessibility text hardcoded without a configurable translation path.
- Extract repeated resolution logic into a properly located helper or service. Keep the reactive version dependency in the caller's computation or in the
  reactive resolver itself.

## Asynchronous data and pagination

- Design data-rendering APIs for asynchronous sources and incremental data from the outset. Keep them usable with application-owned API requests and promises,
  without requiring a particular backend, transport, pagination format, or HTTP service.
- Expose typed data inputs, loading/error/exhausted state, and request/interaction events. Let consumers coordinate requests, cancellation, retry, and page or
  cursor state. Do not imply that loaded data represents the complete remote result set.
- Keep initial loading, incremental loading, empty results, request failure, and end-of-data behavior distinct. Retain existing items during incremental loading
  where appropriate.
- For paginated components, expose a scroll-end/load-more request and an explicit `hasMore` or equivalent contract. Deduplicate requests while loading or while
  the same request is outstanding; stop requesting when exhausted.
- If more data exists but the rendered content has no usable scrollbar, display a reachable load-more action at the bottom. Small pages, zoom changes, and large
  viewports must never make the next page inaccessible.
- Re-evaluate that fallback after data changes, rendering, container resizing, and viewport/zoom changes that affect overflow. Do not assume that a full page
  always creates a scrollbar or infer exhaustion from overflow alone.
- Implement reusable overflow/loading behavior through `load-more.directive.ts`. Render its customizable action at the bottom-left inside the container's
  padding, and keep a visible action present in its disabled loading state until its request completes.
- Route scrolling and the fallback action through the same loading guards and request contract. Do not create an uncontrolled auto-fetch loop to fill the
  viewport.
- Allow consumers to configure the fallback behavior and customize its label and presentation. Preserve an accessible route to more data when automatic loading
  is unavailable.
- Reuse `LoadMoreDirective` from `@filip.mazev/blocks/forms` for new paginated components instead of implementing separate overflow detection, scroll-end
  guards, footer buttons, or retry behavior. Apply `[bxLoadMore]` to the actual scroll wrapper; do not append its footer directly inside native elements with
  restricted children such as `table`, `tbody`, `ul`, or `select`.
- Connect application-owned state through `loadMoreHasMore`, `loadMoreLoading`, `loadMoreError`, and `loadMoreRevision`. Bind the items array or page revision
  to `loadMoreRevision`; call the exported directive's `complete()` when completion has no loading-state cycle or revision change. Forward its typed `loadMore`
  request event rather than making the directive perform API calls.
- Distinguish request sources (`scroll`, `button`, `retry`) when exposing request events. Set loading before starting an asynchronous request. Retain existing
  items and the failed page/cursor on failure, display the error, and offer an explicit retry. Advance the cursor only on success, and clear the error when a
  retry begins. Do not treat a request failure as end-of-data or automatically retry failing requests on scroll.
- Keep an action visible while its request is loading and show its own button spinner. Use `actionVisible()` to avoid displaying a second loading indicator at
  the same time. Busy feedback must not change the dimensions of the owning control; align in-panel feedback with its content rows.
- Use `loadMoreSuppressed` when an owner temporarily replaces its results, such as while a search is debouncing or awaiting a response. Provide a distinct,
  accessible loading state during suppression. Resume pagination when the results are ready, and show a separate incremental loading indicator only when
  `actionVisible()` is false.
- Expose the directive's `ILoadMoreConfig` and optional `ILoadMoreContext` template customization through the owning component. Consumers must be able to
  customize normal, loading, and retry text through `ResolvableText`, the accessible action name, and button/footer appearance. A custom template must preserve
  the guarded request callback, disabled/loading state, and keyboard accessibility.
- For every new pagination integration, demonstrate fake asynchronous requests in the playground, including ordinary load-more, visible loading,
  retained-content failure, explicit retry through to success, and the no-scrollbar fallback. Include page-size or container-size controls to exercise overflow
  transitions.

## Documentation and playground

- Colocate authoritative documentation with its owner. Library entry-point guides live at `projects/blocks/<entry-point>/README.md`, component/directive guides
  beside their implementation, and playground-only guides beside their screen. Core, modal, and toastr use their entry-point READMEs; appearance uses
  `projects/playground/src/app/components/screens/appearance/README.md`. Do not create parallel guides under `documentation/<feature>`.
- Reserve `documentation/releases/<exact-version>/README.md` for version-specific release notes. Begin every README with one descriptive H1, including release
  notes. Keep release notes accurate to the published source commits; mark unpublished notes as draft and link published releases to their exact NPM versions.
- Use the common guide order: purpose, Import, Usage, API, Appearance and customization, Behavior and accessibility, Playground. Feature-specific subsections
  may expand these sections. Keep public entry-point imports, selectors, examples, and relative links consistent with the implementation.
- Update documentation-generator discovery, route mappings, aliases, and consuming paths whenever a guide moves. Keep compatibility aliases where old lookup
  paths are supported. Regenerate bundled documentation instead of editing generated TypeScript.
- Format READMEs with repository Prettier settings and keep them compliant with `npm run lint:docs` (markdownlint). Wrap prose at 160 columns; fenced code and
  tables retain readable widths. Use named code-fence languages, consistent heading levels, unique headings, spaced lists, and four-space nested-list
  indentation.
- Keep the next playground build and default publish target derived from the same `release.config.json` resolver. An unassigned target increments the current
  package patch in its configured channel. Determine published status from NPM metadata; request failures are not proof that a version is unpublished.

- Every new component needs a colocated `README.md` and a reachable playground page. Update existing documentation and demos whenever their public API or
  behavior changes.
- When adding or changing public shared utilities without an existing focused guide/demo, update the cumulative utilities guide at
  `projects/playground/src/app/components/screens/utilities/README.md` and its `/utilities` playground page in the same folder. Keep its coverage audit, API,
  examples, interactive results, and generated documentation current. Link to established feature guides for utilities already covered there instead of creating
  separate pages for individual services or helpers.
- Follow the established README structure: purpose, public import, working usage, API, appearance/customization, behavior/accessibility, and playground route.
  Include asynchronous integration and configuration examples when relevant.
- Use Blocks components and directives throughout the playground wherever an equivalent exists, including supporting demo controls such as actions, selection,
  numeric inputs, and range sliders. Native semantic content is appropriate where no Blocks equivalent exists or when explicitly demonstrating the
  native-control integration. Do not introduce a parallel set of native demo controls for features already provided by Blocks.
- Use the package's public entry points in consumer examples. Keep examples typed, runnable, and consistent with the implemented API.
- Register pages in the existing catalog/navigation flow and provide working examples with observable state or action results. Asynchronous features need mock
  requests demonstrating loading, empty/error states, and incremental data where applicable.
- Add language-switching demos only for complex components with many nested text-bearing elements where they meaningfully demonstrate translation behavior. Use
  English, Spanish, French, and German for those demos; do not use Macedonian. Keep simple component demos in English without language controls. Library APIs
  must still support translation as described above.
- Keep supporting playground interfaces, constants, services, and helpers separated by the same rules as library code.
- Generate documentation through `npm run tools:build-docs`; do not hand-edit generated documentation. Update the generator when changing the source structure
  it reads.

## Verification and delivery

- Run `npm ci` (or `npm run prepare` after changing hooks) to install Husky hooks. Pre-commit runs read-only lint-staged checks against staged files, including
  HTML, styles and formatting; staged TypeScript/HTML also triggers the Angular compiler check for unused standalone imports. Pre-push runs the complete
  `npm run lint` gate. Warnings fail both gates. Hooks do not automatically rewrite or stage fixes.
- Use `npm run lint:fix` and `npm run format` only for an approved formatting/refactoring scope. New rules can expose existing violations; do not weaken them,
  add a baseline, or reformat the codebase without authorization. Hooks remain strict during migration.
- Add `.spec.ts` files only when explicitly requested. The requested component/service specs are colocated and follow the installed Angular CLI's generated
  TestBed setup and baseline creation test. Generate temporary component/service examples to verify the current template; supply generic type arguments where
  the existing class requires them. Keep behavior-specific tests and mocks for the later testing phase. Do not leave task-only Vitest/Playwright configurations
  or temporary test scaffolding in the deliverable. Temporary validation may use these outside the deliverable; remove task-created temporary artifacts before
  finishing. Preserve pre-existing tests and tools.
- VS Code uses this workspace's Prettier and ESLint configuration, with the ESLint working directory pinned to the repository root. Use the standalone Prettier
  extension for HTML/Angular HTML, TypeScript and SCSS instead of competing built-in formatters; keep `.editorconfig` consistent with Prettier. Run ESLint on
  typing so custom rule diagnostics appear in the editor.
- Verify behavior with appropriate temporary integration/browser checks and existing repository checks. Cover mobile/zoom, keyboard and focus, theme changes,
  translations, accessibility preferences, and asynchronous state when affected.
- Run relevant builds and lint checks. ESLint autofix may be run at the end of development; do not run it after every build or reformat unrelated files.
- Report what changed, the checks performed, and any remaining limitations accurately. Do not claim browser, accessibility, or compatibility verification that
  was not performed.
