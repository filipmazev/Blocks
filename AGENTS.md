# Blocks house rules

These rules apply throughout this repository, including the library, playground, documentation, and tooling. Explicit instructions from the user take precedence. Existing files can contain older patterns; do not copy a pattern that conflicts with these rules. Apply the rules to new and changed code without reorganizing unrelated code.

## Design priorities

- Prioritize mobile responsiveness, accessibility, customization, theming, and developer experience in every API and interaction.
- Preserve Blocks' visual language and established architecture. Extend shared mechanisms instead of introducing a parallel styling, accessibility, translation, or configuration system.
- Provide useful defaults, typed extension points, and explicit behavior. Applications should not need to access component internals or manipulate the DOM to customize supported behavior.
- Separate orchestration, state, configuration, and presentation. Share behavior between variants while keeping their templates and styles focused.
- Where read-only behavior makes sense, expose it for the control and prevent edits without treating it as disabled. Preserve the framework's lowercase `readonly` form-state contract and support the consumer-facing `readOnly` input consistently.
- Preserve existing public contracts when practical. Document deliberate compatibility changes and provide a migration path where needed.

## File organization and naming

- Keep one primary component, directive, service, or class declaration per file. Do not place supporting interfaces, type aliases, enums, constants, free functions, or additional classes in that file, even when they are not exported.
- Place supporting declarations in dedicated folders under the owning component. For example, `components/component-name/types/component-name.types.ts`. Place declarations shared across components in a shared location within the owning feature's component hierarchy; use existing shared infrastructure rather than duplicating it.
- Use these declaration categories:

  | Declaration | Folder | Filename |
  | --- | --- | --- |
  | Types | `types` | `<logical-group>.types.ts` |
  | Constants | `constants` | `<logical-group>.constants.ts` |
  | Interfaces | `interfaces` | `i<description-in-kebab-case>.interface.ts` |
  | Shared functions | `helpers` | `<logical-group>.helpers.ts` |
  | Services | `services` | `<description>.service.ts` |
  | Classes | `classes` | `<description>.ts` |
  | Enums | `enums` | `<description>.enum.ts` |
  | Injection tokens | `tokens` | `<description>.token.ts` |

- Types and constants may be grouped by closely related purpose within their respective files. Do not mix declaration categories in the same file.
- Name interfaces with an uppercase `I` followed by a PascalCase description: `ISomethingHere` in `isomething-here.interface.ts`.
- Export supporting declarations from their defining files. Re-export through the owning package's `public-api.ts` only the declarations useful for consumer configuration, customization, integration, or extension. Split files when needed to keep internal and consumer-facing exports distinct.
- Give configuration interfaces a description and document each configurable property with JSDoc, including its purpose, optionality, defaults, and relevant behavior. Document event payloads and generic parameters when their meaning is not obvious.
- Extract named public configuration and data contracts instead of embedding substantial anonymous object types in component or service APIs.
- Put reusable, stateless functions in helpers when their logic is shared across components. Use services for dependency injection, shared state, lifecycle, or coordinated behavior. Keep component-specific implementation as private methods.
- Keep component implementation, template, styles, and `README.md` together. Use separate HTML and SCSS files for substantial views.
- Import internal dependencies directly from their defining files where appropriate; avoid importing an owning feature's public barrel back into itself and creating dependency cycles.

## Angular, configuration, and lifecycle

- Follow the existing standalone component and directive approach. Library selectors use `bx`; playground selectors use `app`.
- Prefer `inject()` for dependencies and signal-based inputs, outputs, models, and derived state where suitable. Use `computed()` for derivation and effects for side effects rather than copying derived state between signals.
- Select change detection according to actual update paths. Do not force a strategy that leaves imperative or asynchronous updates stale.
- Keep configuration typed and centralized. Resolve defaults in a predictable order: explicit instance configuration, shared application settings, then library defaults. Accessibility preferences take precedence over requested motion.
- Use nullish defaults where `false`, `0`, and empty values are meaningful. Merge partial updates without discarding unrelated configuration or mutating consumer-owned objects.
- Expose documented inputs, outputs, methods, configuration, and template slots for supported customization. Keep implementation state private or protected.
- Clean up subscriptions, listeners, observers, timers, overlays, and animation controllers. Use `DestroyRef` and `takeUntilDestroyed` where appropriate, and guard asynchronous completion after destruction or a newer operation.
- Keep browser-only operations safe for server rendering. Use the existing document/platform facilities and defer measurement until elements are rendered.

## Formatting and method organization

- Follow `eslint.config.js`, `tools/typescript-format-options.mjs`, and the repository's style formatting configuration. TypeScript formatting uses two spaces, single quotes, no trailing commas, and a 160-character print width; style formatting uses four spaces.
- Use explicit member accessibility, with no `public` modifier on constructors. Mark references `readonly` when they are not reassigned.
- Let ESLint dictate member ordering: injected/read-only properties, other properties, lifecycle methods, initialization/subscription methods, public methods, protected methods, then private methods, as specified by the configured groups.
- Keep private component methods inside `//#region Helpers` and `//#endregion`. Add nested regions such as `//#region Resolvers` when useful. Regions must respect ESLint's member ordering.
- Separate logical steps with blank lines. In particular, separate variable preparation from a following `if`, loop, or other control flow, and separate completed control-flow blocks from the next distinct step. Keep related assignments together without compressing unrelated operations.
- Use comments to explain contracts, intent, and non-obvious behavior. Do not disable lint rules broadly to avoid following the established structure.

## Mobile responsiveness and interaction

- Design for narrow screens and touch first, then extend the layout for larger screens. Use existing breakpoint tokens, responsive mixins, and dimension services rather than inventing independent breakpoints.
- Support browser zoom, text enlargement, long translated content, constrained containers, and RTL layouts. Prefer logical CSS properties and content that can wrap or shrink without hiding essential actions.
- Constrain surfaces to the available viewport and allow the appropriate content region to scroll. Keep actions reachable when viewport dimensions change.
- Give pointer, touch, and keyboard users equivalent access to functionality. Do not depend on hover, a scrollbar, or a precise pointer position for essential actions.

## Accessibility

- Integrate with `BxA11yService` for reduced-motion behavior and respect the existing shared accessibility styles. React to preference changes while the component is mounted.
- Preserve state and feedback when motion is reduced; provide a static alternative where movement conveys activity.
- Prefer native semantics and interactive elements. Provide accessible names, visible focus, correct keyboard operation, and disabled/readonly behavior appropriate to the control.
- Associate descriptions and errors with their controls. Announce relevant asynchronous and validation changes without excessive repeated announcements. Preserve accessible names during state transitions.
- Use text, icons, or structure as well as color to convey state. Support high contrast, forced colors, reduced transparency, and the existing opaque appearance fallbacks.
- Maintain predictable focus when content is opened, closed, replaced, appended, or reset. Reuse the existing overlay positioning, theme inheritance, stacking, and focus mechanisms.

## Theming and customization

- Use Blocks semantic CSS variables and shared Sass helpers for color, spacing, radius, elevation, motion, and responsive behavior. Do not hardcode a palette or create a separate theme system.
- Import Sass definitions through `core/styles/helpers`; include global styles only through the established global entry point, not repeatedly from component styles.
- Follow `ThemingService` and the shared surface/effects APIs. Theme and appearance changes must update mounted components and their overlays.
- Expose documented component CSS variables, configuration, and slots where consumers need customization. Defaults should fall back to shared semantic tokens.
- Preserve content readability and focus visibility in light/dark themes, alternate palettes, opaque presentation, and accessibility modes. Decorative effects must not carry essential information.

## Translations

- Integrate user-facing text with `BX_I18N`. Accept the shared `ResolvableText` contract for configurable text rather than adding a separate translation format.
- Inject the adapter optionally: `inject(BX_I18N, { optional: true })`. Plain strings must work without an adapter.
- Resolve text reactively in `computed()`. Read `this.i18n?.version?.()` inside the computation so changing the active language updates already-rendered content.
- Detect translation-key values through `isTextWithKey()`. Resolve keys with `translate(key, params)` where parameters are available and fall back to the key if no adapter is present. Return plain strings unchanged and handle absent text deliberately.
- Apply translation support to visible labels, placeholders, hints, errors, empty/loading states, actions, and accessible labels. Do not leave new internal action text or accessibility text hardcoded without a configurable translation path.
- Extract repeated resolution logic into a properly located helper or service. Keep the reactive version dependency in the caller's computation or in the reactive resolver itself.

## Asynchronous data and pagination

- Design data-rendering APIs for asynchronous sources and incremental data from the outset. Keep them usable with application-owned API requests and promises, without requiring a particular backend, transport, pagination format, or HTTP service.
- Expose typed data inputs, loading/error/exhausted state, and request/interaction events. Let consumers coordinate requests, cancellation, retry, and page or cursor state. Do not imply that loaded data represents the complete remote result set.
- Keep initial loading, incremental loading, empty results, request failure, and end-of-data behavior distinct. Retain existing items during incremental loading where appropriate.
- For paginated components, expose a scroll-end/load-more request and an explicit `hasMore` or equivalent contract. Deduplicate requests while loading or while the same request is outstanding; stop requesting when exhausted.
- If more data exists but the rendered content has no usable scrollbar, display a reachable load-more action at the bottom. Small pages, zoom changes, and large viewports must never make the next page inaccessible.
- Re-evaluate that fallback after data changes, rendering, container resizing, and viewport/zoom changes that affect overflow. Do not assume that a full page always creates a scrollbar or infer exhaustion from overflow alone.
- Implement reusable overflow/loading behavior through `load-more.directive.ts`. Render its customizable action at the bottom-left inside the container's padding, and keep a visible action present in its disabled loading state until its request completes.
- Route scrolling and the fallback action through the same loading guards and request contract. Do not create an uncontrolled auto-fetch loop to fill the viewport.
- Allow consumers to configure the fallback behavior and customize its label and presentation. Preserve an accessible route to more data when automatic loading is unavailable.
- Reuse `LoadMoreDirective` from `@filip.mazev/blocks/forms` for new paginated components instead of implementing separate overflow detection, scroll-end guards, footer buttons, or retry behavior. Apply `[bxLoadMore]` to the actual scroll wrapper; do not append its footer directly inside native elements with restricted children such as `table`, `tbody`, `ul`, or `select`.
- Connect application-owned state through `loadMoreHasMore`, `loadMoreLoading`, `loadMoreError`, and `loadMoreRevision`. Bind the items array or page revision to `loadMoreRevision`; call the exported directive's `complete()` when completion has no loading-state cycle or revision change. Forward its typed `loadMore` request event rather than making the directive perform API calls.
- Distinguish request sources (`scroll`, `button`, `retry`) when exposing request events. Set loading before starting an asynchronous request. Retain existing items and the failed page/cursor on failure, display the error, and offer an explicit retry. Advance the cursor only on success, and clear the error when a retry begins. Do not treat a request failure as end-of-data or automatically retry failing requests on scroll.
- Keep an action visible while its request is loading and show its own button spinner. Use `actionVisible()` to avoid displaying a second loading indicator at the same time. Busy feedback must not change the dimensions of the owning control; align in-panel feedback with its content rows.
- Use `loadMoreSuppressed` when an owner temporarily replaces its results, such as while a search is debouncing or awaiting a response. Provide a distinct, accessible loading state during suppression. Resume pagination when the results are ready, and show a separate incremental loading indicator only when `actionVisible()` is false.
- Expose the directive's `ILoadMoreConfig` and optional `ILoadMoreContext` template customization through the owning component. Consumers must be able to customize normal, loading, and retry text through `ResolvableText`, the accessible action name, and button/footer appearance. A custom template must preserve the guarded request callback, disabled/loading state, and keyboard accessibility.
- For every new pagination integration, demonstrate fake asynchronous requests in the playground, including ordinary load-more, visible loading, retained-content failure, explicit retry through to success, and the no-scrollbar fallback. Include page-size or container-size controls to exercise overflow transitions.

## Documentation and playground

- Every new component needs a colocated `README.md` and a reachable playground page. Update existing documentation and demos whenever their public API or behavior changes.
- Follow the established README structure: purpose, public import, working usage, API, appearance/customization, behavior/accessibility, and playground route. Include asynchronous integration and configuration examples when relevant.
- Use Blocks components and directives throughout the playground wherever an equivalent exists, including supporting demo controls such as actions, selection, numeric inputs, and range sliders. Native semantic content is appropriate where no Blocks equivalent exists or when explicitly demonstrating the native-control integration. Do not introduce a parallel set of native demo controls for features already provided by Blocks.
- Use the package's public entry points in consumer examples. Keep examples typed, runnable, and consistent with the implemented API.
- Register pages in the existing catalog/navigation flow and provide working examples with observable state or action results. Asynchronous features need mock requests demonstrating loading, empty/error states, and incremental data where applicable.
- Keep supporting playground interfaces, constants, services, and helpers separated by the same rules as library code.
- Generate documentation through `npm run tools:build-docs`; do not hand-edit generated documentation. Update the generator when changing the source structure it reads.

## Verification and delivery

- Do not leave new `.spec.ts` files, Vitest configurations, Playwright configurations, or task-only test scaffolding in the final output. Temporary validation may use these outside the deliverable; remove task-created temporary artifacts before finishing. Preserve pre-existing tests and tools.
- Verify behavior with appropriate temporary integration/browser checks and existing repository checks. Cover mobile/zoom, keyboard and focus, theme changes, translations, accessibility preferences, and asynchronous state when affected.
- Run relevant builds and lint checks. ESLint autofix may be run at the end of development; do not run it after every build or reformat unrelated files.
- Report what changed, the checks performed, and any remaining limitations accurately. Do not claim browser, accessibility, or compatibility verification that was not performed.
