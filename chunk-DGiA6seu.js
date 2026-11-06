import{$t as Te,J as Hr,Vr as it,Yi as te,an as V,b as D,br as g,gi as ot,it as Jn,mt as Lm,ot as Ka,ra as ve,ta as v,vi as p}from"./chunk-DBDMpaTC.js";var x={"documentation/releases/1.4.20/README.md":`<h1>Blocks 1.4.20</h1>
<p>Published October 31, 2026 on the Release channel (<code>latest</code>). Install this exact version with <code>npm install @filip.mazev/blocks@1.4.20</code>.</p>
<p><a href="https://www.npmjs.com/package/@filip.mazev/blocks/v/1.4.20">View version 1.4.20 on NPM</a>.</p>
<p>Blocks 1.4.20 brings together the unified Angular UI package, semantic themes, appearance effects, forms, navigation, notifications and icons developed leading
up to this version. These cumulative notes include changes from earlier versions without their own notes, including 1.4.19, and the final side-navigation
refinements shipped in 1.4.20. They do not imply that every feature first appeared in this patch.</p>
<p>The documented source range is <code>f9bf13b2bb6914c26d11639076006bd1dcc5a851</code> through <code>b18ac855a86e7ad9fe77d1d4944f069ccde309ba</code>, NPM&#39;s recorded 1.4.20 source
commit. Features added after that endpoint are covered by the <a href="release-notes/1.5.0">1.5.0 Beta change notes</a>.</p>
<h2>Unified package and installation</h2>
<ul>
<li>Consolidated <code>@filip.mazev/blocks-core</code> and <code>@filip.mazev/modal</code> into <code>@filip.mazev/blocks</code>.</li>
<li>Added dedicated public entry points for <code>core</code>, <code>forms</code>, <code>primitives</code>, <code>navigation</code>, <code>icons</code>, <code>modal</code>, <code>toastr</code> and <code>effects</code>.</li>
<li>Added an interactive <code>ng add @filip.mazev/blocks</code> schematic with palette selection, global Sass configuration and effects stylesheet registration.</li>
<li>Updated Angular peer dependencies from Angular 21 to Angular 22.</li>
</ul>
<h2>Theming and customization</h2>
<ul>
<li>Reworked theming around semantic roles for backgrounds, text, borders, primary and accent colors, and status feedback.</li>
<li>Added typed color contracts, including <code>SemanticColorToken</code>, palette shade tokens and light/dark <code>ThemedColor</code> configurations.</li>
<li>Introduced seven duo-tone palettes: Carbon / Cobalt, Azure / Ember, Violet / Teal, Tangerine / Indigo, Brick Rose / Cyan, Lime / Violet and Cyberpunk.</li>
<li>Expanded <code>ThemingService</code> with runtime palette selection, high-contrast controls, appearance configuration and persisted preferences.</li>
<li>Added shared styling utilities and component CSS variables for more consistent customization of spacing, typography, surfaces and interaction states.</li>
<li>Preserved the connection between responsive Sass mixins and <code>WindowDimensionsService</code> breakpoints.</li>
</ul>
<p>See the <a href="appearance">appearance guide</a> for current application-wide configuration. Its API
continues to evolve after this release.</p>
<h2>Glass, physics and lighting</h2>
<ul>
<li>Added a shared glass material across components and overlays, configurable globally through <code>ThemingService.setAppearance()</code>.</li>
<li>Added numeric <code>glassiness</code> for tint and blur, automatic/baseline/enhanced rendering quality and reduced-transparency settings.</li>
<li>Added <code>BxSurfaceDirective</code> for applying Blocks materials to application-owned surfaces, with local appearance and interaction overrides.</li>
<li>Introduced spring-based press feedback and spatial lighting that responds to interaction and active states.</li>
<li>Added ambient edge tinting from nearby content, with depth and occlusion handling that respects overlay boundaries.</li>
<li>Added opaque fallbacks for forced colors, reduced transparency and unsupported backdrop filters.</li>
<li>Exposed a framework-independent DOM effects runtime through <code>@filip.mazev/blocks/effects/runtime</code>.</li>
</ul>
<p>Here <code>glassiness</code> is the numeric appearance preference used by 1.4.20; the later <code>translucency</code> name and refraction policy belong to subsequent versions.</p>
<h2>Forms and controls</h2>
<ul>
<li>Added buttons, form fields, text and numeric inputs, multiline inputs, search inputs, checkboxes, radio buttons and groups, switches, selects, multiselects,
native sliders and range sliders.</li>
<li>Added integration with Angular Signal Forms, Reactive Forms, template-driven forms and standalone value models.</li>
<li>Introduced shared validation presentation with configurable error messages, priorities, visibility policies, projected errors and application defaults.</li>
<li>Added composable prefixes, suffixes, hints, required markers, floating labels and filled/outlined field appearances.</li>
<li>Added native-control integration through <code>bxInput</code> and an extension contract for custom form-field controls.</li>
<li>Added distinct readonly behavior through both <code>readOnly</code> and Angular&#39;s lowercase <code>readonly</code> contract.</li>
<li>Added numeric parse-state handling, keyboard-accessible steppers, textarea autosizing and native input attribute forwarding.</li>
</ul>
<h2>Asynchronous selection and pagination</h2>
<ul>
<li>Added application-owned loading, searching, error and pagination state to selection controls.</li>
<li>Added searchable multiselects with tag presentation, overflow summaries, configurable templates and explicit select-all intent.</li>
<li>Introduced reusable <code>LoadMoreDirective</code> behavior with guarded scroll requests, a visible fallback action when content does not overflow, and explicit retry.</li>
<li>Distinguished scroll, button and retry request sources.</li>
<li>Added retained-content error states and separate feedback for initial loading, replacement searches and incremental loading.</li>
</ul>
<h2>Primitives and overlays</h2>
<ul>
<li>Added loading indicators, spinners and determinate/indeterminate progress bars.</li>
<li>Added tags and tabs with controlled selection, disabled states, per-tab colors and icons, keyboard navigation and lazy content templates.</li>
<li>Added menus, cascading submenus, dropdowns, context menus and tooltips.</li>
<li>Added shared overlay positioning, live theme inheritance, keyboard dismissal and focus behavior for these overlay controls.</li>
<li>Added <code>TruncateDirective</code>, <code>TruncatedTextPipe</code> and <code>truncatedText()</code> for reusable overflow detection and conditional tooltips.</li>
<li>Added configurable automatic truncation tooltips across supported controls.</li>
</ul>
<p>Cards, layout primitives, alerts, chips, collapsibles, accordions, skeletons and interactive popovers arrive in 1.5.0.</p>
<h2>Navigation foundation</h2>
<ul>
<li>Added <code>NavigationService</code>, route metadata helpers, breadcrumbs and shared navigation configuration.</li>
<li>Added <code>defineNavigation()</code> with typed section IDs and reusable route declarations.</li>
<li>Added route-driven side navigation with hierarchical browsing, contextual search and active-route handling.</li>
<li>Added compact side rails, responsive mobile drawers, configurable slots and persisted desktop navigation state.</li>
<li>Added access-adapter filtering, translated navigation metadata and focus/scroll restoration when navigating submenu levels.</li>
</ul>
<p>The following sections describe the side-navigation refinements included at the end of this cumulative range.</p>
<h2>Responsive submenu browsing</h2>
<ul>
<li>Added <code>submenuBreakpoint</code> (default <code>xl</code>) and <code>submenuMode</code> (<code>auto</code>, <code>inline</code>, or <code>flyout</code>) to control desktop submenu presentation independently of nesting
depth.</li>
<li>At or below the threshold, children replace the current list inside the rail. Inline navigation also measures its containing shell, so an embedded narrow rail
uses the appropriate layout even on a wide screen.</li>
<li>Above the threshold, children open in one adjacent opaque panel. Deeper levels reuse that panel instead of accumulating recursive overlays.</li>
<li>Mobile drawers always browse inside their own panel. Changing available width preserves the browsing path.</li>
<li>Added a persistent Back action, ancestor path, and a parent heading that links to the parent&#39;s page. Returning to a previous level restores its scroll
position and disclosure focus.</li>
<li>A compact rail temporarily expands when inline browsing needs space, while retaining the saved collapse preference.</li>
<li>Explicit level changes animate briefly; reduced motion removes that movement.</li>
</ul>
<h2>Page links, selection, and search</h2>
<ul>
<li>Kept labels as native route links and separated their child-disclosure controls. Clicking a label navigates; clicking its chevron browses descendants.</li>
<li>Required an explicit disclosure action for submenu opening. Hovering labels no longer opens navigation panels.</li>
<li>Added independent hover and focus surfaces to page links and disclosures. Selection belongs to the active page link; expanded ancestors and search matches do
not acquire selected styling.</li>
<li>Reworked search into a flat list of direct matches with translated parent paths in the main navigation. Searching does not open nested panels.</li>
<li>Search normalizes accents and case, ranks exact, subsequence, and keyword matches, and tolerates one edit in words of at least four characters.</li>
<li>Result labels navigate directly. Their disclosure leaves search and opens the chosen result&#39;s children. Clearing search restores the previous browsing level
and its scroll position.</li>
<li>Search temporarily expands a compact rail without changing its stored preference and searches only the currently supplied tree.</li>
<li>Added a monochrome guide for the best nested result, with a static alternative under reduced motion. Top-level results have no guide; <code>showSearchGuide: false</code>
hides it. This describes 1.4.20 behavior; later releases retire the guide.</li>
</ul>
<h2>Keyboard, focus, and mobile drawers</h2>
<ul>
<li>Preserved native links and menu/menuitem semantics with separate, named disclosure buttons.</li>
<li>Enter, Space, or the arrow toward a submenu opens children. Up/Down and Home/End move within the current menu.</li>
<li>Back, Escape, or the opposite arrow returns one level with focus and scroll restoration. At the root, Escape dismisses the mobile drawer.</li>
<li>Kept Tab within adjacent panels and mobile drawers, and restored the opening control&#39;s focus after closing.</li>
<li>Fixed mobile and inline preview presentation so layout changes establish the closed geometry immediately; explicit open/close actions animate the drawer.</li>
<li>Retained the mobile close action, click-to-close scrim, and shared scroll locking. Resizing out of mobile presentation closes the drawer and releases its
lock.</li>
<li>Kept embedded inline drawers and scrims inside their positioned preview shell without locking the page.</li>
</ul>
<h2>Shared menu overlays</h2>
<ul>
<li>Added <code>menuManual: true</code> to <code>MenuTriggerDirective</code> for owners coordinating a single overlay across multiple disclosure controls.</li>
<li>In manual mode, the owner supplies trigger interaction and ARIA semantics and calls <code>open()</code>/<code>close()</code>; automatic trigger handlers and host ARIA are omitted.</li>
<li>Extended <code>open(focus?, origin?)</code> with an optional per-opening positioning origin.</li>
<li>Preserved outside-click dismissal, focus trapping, keyboard dismissal, theme inheritance, overlay context, and origin visibility tracking.</li>
<li>Reused native CSS anchoring and the existing measured fallback. Panels close when their origins leave the viewport or clipping container.</li>
</ul>
<h2>Icons and notifications</h2>
<ul>
<li>Added Lucide SVG icon integration with asynchronous loading, typed names, configurable sizing and stroke width, and semantic colors.</li>
<li>Added custom icon definition helpers and decorative/meaningful icon semantics.</li>
<li>Added <code>ToastrService</code> with standard information, success, warning and danger notifications, plus custom content.</li>
<li>Added six notification positions, configurable duration, progress indicators, swipe dismissal, pause/resume controls and typed close results.</li>
<li>Added shared notification defaults and theme-aware notification surfaces.</li>
</ul>
<h2>Accessibility, translations and developer experience</h2>
<ul>
<li>Added <code>BxA11yService</code> for reactive reduced-motion preferences and application overrides.</li>
<li>Added optional <code>BX_I18N</code> integration and shared <code>ResolvableText</code> contracts for configurable text.</li>
<li>Added reactive translation updates through the adapter&#39;s version signal.</li>
<li>Added keyboard interaction, focus presentation, accessible labels, validation descriptions and RTL behavior across the new components.</li>
<li>Expanded public configuration interfaces, template customization points and component documentation.</li>
</ul>
<h2>Playground</h2>
<p>The playground application uses the shared <code>SideNav</code> with an expanded, text-focused menu. Its dedicated demo adds controls for comparing submenu presentations
and exercising a four-level tree, search, focus, and scroll restoration.</p>
<h2>Migration notes</h2>
<p>Applications upgrading from the separate packages should update their imports and theme setup:</p>
<table>
<thead>
<tr>
<th>Previous API or setup</th>
<th>Replacement in 1.4.20</th>
</tr>
</thead>
<tbody><tr>
<td><code>@filip.mazev/blocks-core</code> imports</td>
<td><code>@filip.mazev/blocks/core</code></td>
</tr>
<tr>
<td><code>@filip.mazev/modal</code> imports</td>
<td><code>@filip.mazev/blocks/modal</code></td>
</tr>
<tr>
<td>Deep Sass imports from the old packages</td>
<td><code>@use &#39;@filip.mazev/blocks&#39; as *;</code></td>
</tr>
<tr>
<td><code>core-theme(...)</code> and legacy theme maps</td>
<td><code>bx-theme(...)</code> with a current palette map</td>
</tr>
<tr>
<td>Custom <code>--fm-*</code> theme overrides</td>
<td>Review and migrate to the <code>--bx-*</code> semantic tokens</td>
</tr>
<tr>
<td>Modal <code>bannerText</code></td>
<td><code>header: { text: ... }</code>, with optional icon configuration</td>
</tr>
<tr>
<td>Angular 21 applications</td>
<td>Upgrade to Angular 22</td>
</tr>
</tbody></table>
<p>For manual installation, register <code>@filip.mazev/blocks/effects/effects.css</code> once alongside the global Blocks theme. The installation schematic configures this
automatically.</p>
<p>Existing <code>SideNav</code> consumers can retain automatic defaults. Set <code>submenuMode: &#39;inline&#39;</code> or <code>&#39;flyout&#39;</code> for an explicit desktop presentation, and customize Back
text through the existing translatable configuration. Applications relying on hover-to-open navigation should use the separate disclosure action. The former
<code>--bx-side-nav-item-highlight-background</code> no longer colors search rows. Generic menu triggers retain automatic handling unless <code>menuManual</code> is enabled.</p>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">bx-side-nav</span> [<span class="hljs-attr">config</span>]=<span class="hljs-string">&quot;{ submenuBreakpoint: &#x27;xl&#x27;, submenuMode: &#x27;auto&#x27;, backLabel: { key: &#x27;nav.back&#x27; } }&quot;</span> /&gt;</span></code></pre>
`,"documentation/releases/1.5.0/README.md":`<h1>Blocks 1.5.0 Beta change notes</h1>
<p>Published October 31, 2026 on the Beta channel. The exact NPM package version is <code>1.5.0</code>, without a <code>-beta</code> suffix. Install this historical version with
<code>npm install @filip.mazev/blocks@1.5.0</code>.</p>
<p><a href="https://www.npmjs.com/package/@filip.mazev/blocks/v/1.5.0">View version 1.5.0 on NPM</a>.</p>
<p>This version adds top navigation, editable autocomplete, layout and feedback primitives, interactive popovers, platform-aware shortcuts and refined surface
interaction. These notes cover only the changes after <a href="release-notes/1.4.20">1.4.20</a>, from <code>b18ac855a86e7ad9fe77d1d4944f069ccde309ba</code> through
<code>55b915c819525cfa365d4b59389a765233b2cd35</code>, NPM&#39;s recorded 1.5.0 source commit. The unified package, Angular 22 upgrade, semantic themes, existing forms,
notifications and initial glass runtime are documented in the cumulative 1.4.20 notes.</p>
<h2>Top navigation and shared navigation behavior</h2>
<ul>
<li>Added <code>TopNav</code> with a horizontal menubar, a responsive compact presentation and one shared submenu/search panel.</li>
<li>Added <code>bxTopNavBrand</code> and <code>bxTopNavActions</code> template slots, custom item content and typed <code>ITopNavConfig</code>, <code>ITopNavSlotContext</code> and shared navigation
contracts.</li>
<li>Added <code>compactBreakpoint</code> (default <code>lg</code>), an explicit <code>compact</code> override, sticky positioning and panel dimensions. Content overflow also switches to compact
navigation, keeping essential links reachable as translations, slots, fonts, zoom or available width change.</li>
<li>Shared hierarchical browsing, flat contextual search, active-route selection, translated labels and focus/scroll restoration between top and side navigation.</li>
<li>Added clickable ancestor paths that browse a level without navigating away; the current parent&#39;s heading remains a page link.</li>
<li>After selecting a search result, clearing search now opens its containing submenu and scrolls the selected row into view while keeping search-field focus.
Clearing without a successful selection restores the previous browsing location.</li>
<li>Added RTL-aware horizontal arrow navigation, Home/End and roving tab stops to the shared menu keyboard helper.</li>
<li>Removed floating search guides. The retained <code>showSearchGuide</code> option is deprecated and ignored; former guide CSS variables have no effect.</li>
<li>Updated the playground toolbar to use <code>TopNav</code>, with responsive examples and shared English, Spanish, French and German navigation fixtures.</li>
</ul>
<h2>Editable autocomplete</h2>
<ul>
<li>Added <code>Autocomplete</code>, <code>IAutocompleteOption</code> and <code>IAutocompleteOptionContext</code> through the forms entry point.</li>
<li>Added a <code>string | null</code> value model with valid free text, optional suggestions, disabled options and customizable option templates.</li>
<li>Added optional inline completion that remains uncommitted until accepted, keyboard selection, IME-aware editing and a clear action.</li>
<li>Reused the existing form-field, validation, disabled/readonly, translation and Angular forms integration contracts.</li>
<li>Added application-owned query/search/loading/error state and external filtering. Pagination reuses <code>LoadMoreDirective</code>, including retained-content failure,
explicit retry and the reachable action when there is no scrollbar.</li>
<li>Added delayed playground requests demonstrating search, empty results, incremental loading, failure and successful retry, with page-size controls.</li>
</ul>
<h2>Layout, feedback and disclosure primitives</h2>
<ul>
<li>Added <code>Card</code>, <code>Container</code>, <code>Stack</code>, <code>Grid</code> and <code>Divider</code>, with semantic surfaces, responsive layout settings and component CSS variables.</li>
<li>Added <code>Alert</code>, also available as <code>bx-banner</code>, with semantic tones, projected actions, optional announcements, dismissal and focus restoration.</li>
<li>Added alert emission controls that reuse the shared lighting engine and respect scene boundaries.</li>
<li>Added interactive <code>Chip</code> with controlled selection, activation and removal events, separate remove actions and disabled/readonly behavior.</li>
<li>Added <code>Collapsible</code> and coordinated <code>Accordion</code> expansion, keyboard-accessible headers and reduced-motion behavior.</li>
<li>Added <code>Skeleton</code> with configurable shapes and animation that respects reduced motion.</li>
<li>Added colocated guides and reachable playground examples for the new primitives.</li>
</ul>
<h2>Interactive popovers and menu overlays</h2>
<ul>
<li>Added <code>Popover</code>, <code>PopoverDirective</code>, <code>IPopoverConfig</code> and <code>BX_POPOVER_DEFAULTS</code> for interactive help, compact forms and contextual content.</li>
<li>Added nonmodal dialog semantics, configurable placement and dismissal, optional autofocus, translated accessible names and trigger-focus restoration.</li>
<li>Kept popover content scrollable within the viewport, with live theme inheritance and existing overlay/top-layer support.</li>
<li>Added <code>MenuTriggerDirective.menuPlacement</code> for dropdown placement while retaining side-aligned submenu defaults.</li>
<li>Added <code>menuClosing</code>, emitted before overlay detachment so navigation owners can preserve scroll and focus context.</li>
<li>Updated overlay theme inheritance to observe direction changes and propagate <code>dir</code> to mounted panels.</li>
</ul>
<h2>Platform-aware keyboard shortcuts</h2>
<ul>
<li>Expanded <code>BxShortcutService</code> with platform selection, normalized display tokens, <code>toAriaKeyshortcuts()</code> and application-owned event matching through
<code>matches()</code>.</li>
<li>Added portable <code>mod</code> combinations, common key aliases and explicit iOS/Android overrides through <code>IOSShortcut</code>, alongside <code>ShortcutPlatform</code> and
<code>IShortcutMatchOptions</code>.</li>
<li>Ignored handled, composing and AltGraph events, plus repeated keys and editable targets by default. Applications can explicitly allow repeat/editable matches.</li>
<li>Added valid <code>aria-keyshortcuts</code> metadata to menu items. Shortcut hints do not register global handlers; applications retain ownership of actions and scopes.</li>
<li>Improved iPadOS desktop-user-agent detection and desktop/mobile operating-system classification.</li>
</ul>
<h2>Press feedback, lighting and form presentation</h2>
<ul>
<li>Refined shared pressure feedback with a soft inset sheen and button-content compression while keeping hit areas, layout and overlay origins fixed.</li>
<li>Added a visible initial response for quick taps and cleanup on cancellation, key release, focus loss, hidden documents and teardown. Reduced motion uses
static feedback, and touch hover does not remain latched.</li>
<li>Kept editable fields illuminated for pointer focus while ordinary actions use keyboard focus. Expanded popup triggers retain light; plain layout expansion
alone does not mark a control selected.</li>
<li>Changed explicit scene-light selection to rank all eligible sources by visible contribution per receiver, with at most four selected lights, rather than
taking the first four registered sources.</li>
<li>Exposed <code>getGlassLightRoot()</code> for resolving existing light-scope boundaries.</li>
<li>Aligned checkbox/radio presentation and radio subscript sizing with shared form defaults, and reused common caret and opaque option-panel styling for Select
and Autocomplete.</li>
</ul>
<h2>Migration notes</h2>
<p>Existing 1.4.20 package imports, Angular 22 peer requirements, theme setup and effects stylesheet registration remain applicable. New components are available
through the existing public entry points.</p>
<p>Remove dependencies on side-navigation search guides and their CSS variables. <code>showSearchGuide</code> remains accepted for compatibility but no longer changes the
rendered navigation. Shortcut combinations use arrays such as <code>[&#39;mod&#39;, &#39;k&#39;]</code>; plain strings remain single display tokens. Continue handling shortcut actions in
the application, using <code>BxShortcutService.matches()</code> where needed.</p>
<p>The Beta channel describes this historical publication&#39;s intended maturity. Because <code>1.5.0</code> was already published as an exact version, it cannot later identify
a different stable package. Future prereleases should use a suffix such as <code>1.6.0-beta.1</code>, following <a href="https://semver.org/spec/v2.0.0.html">Semantic Versioning</a>.</p>
`,"documentation/releases/1.5.2/README.md":`<h1>Blocks 1.5.2</h1>
<p>Blocks 1.5.2 alpha adds opt-in glassiness, selectable cards and a more focused appearance page, with shared lighting fixes for themed controls.</p>
<p>Package version: <code>1.5.2</code>. Distribution channel: npm&#39;s <code>alpha</code> tag.</p>
<h2>Glassiness and surface appearance</h2>
<ul>
<li>Added SVG-backed refraction for explicitly selected surfaces on supported browsers, with the existing material as the fallback.</li>
<li>Added <code>glassiness</code> policies (<code>auto</code>, <code>off</code>, <code>on</code>) to surface configuration and opt-in controls. Global Off, device budgets and accessibility preferences take
precedence.</li>
<li>Added Automatic rendering with one refraction pass and Enhanced rendering with reflection and bevel layers. Shared geometry caches, bounded reflection regions
and paused offscreen work limit rendering costs.</li>
<li>Kept glassiness opt-in for controls and cards that benefit from it, including the appearance preview, overview feature cards and toast surfaces.</li>
<li>Renamed the numeric surface preference to <code>translucency</code>. Tint and blur use a nonlinear scale with a lighter default, a sharp minimum and a stronger finish at
the maximum. Reduce transparency remains the fully opaque presentation.</li>
<li>Kept text, placeholders and icons in their theme or component colors. A minimum tint backing provides readability without dynamic foreground switching.</li>
<li>Persisted rendering, glassiness, translucency and reduced transparency together, including Enhanced rendering across refreshes. Glassiness Off returns
Enhanced to Automatic.</li>
<li>Baseline temporarily switches Glassiness to Off and disables its controls, including browser opt-in. Returning to Automatic or Enhanced restores the previous
glassiness policy, including after a reload; an explicitly chosen Off stays Off. Enhanced remains available from Baseline when the remembered policy permits
it.</li>
<li>Preserved the material while scrolling under translucent surfaces and during overlay fades.</li>
</ul>
<h2>Selectable cards</h2>
<ul>
<li>Added clickable cards with controlled <code>selected</code> state, <code>selectedChange</code>, <code>activated</code>, disabled and readonly behavior.</li>
<li>Added the native <code>button[bx-card]</code> variant alongside <code>bx-card</code>.</li>
<li>Added configurable selection lighting through <code>highlightColor</code> and <code>--bx-card-highlight</code>, using the shared semantic lighting engine.</li>
<li>Preserved keyboard activation, visible focus and nested action behavior. Disabled cards cannot activate; readonly cards remain focusable and preserve their
selected state.</li>
</ul>
<h2>Lighting and form controls</h2>
<ul>
<li>Resolved emission colors in the source component&#39;s theme scope so accent-colored controls illuminate neighboring surfaces with the correct color.</li>
<li>Kept active borders painted as surfaces cross viewport edges or pass behind sticky headers, avoiding a visible fade on re-entry.</li>
<li>Kept surrounding light active while sources and receivers remain partly exposed, including inside clipped scrolling containers. A covered center or projected
corner no longer removes the entire effect; fully covered surfaces remain excluded.</li>
<li>Restored accent emission for form checkboxes, including checked and indeterminate states, hover and keyboard focus. Disabled and readonly checkboxes remain
passive.</li>
<li>Added the <code>Checkbox.emissive</code> input, defaulting to <code>true</code>, and the decorative <code>CheckboxIndicator.emissive</code> input, defaulting to <code>false</code>.</li>
<li>Kept multiselect option and select-all indicators non-emissive while retaining their themed faces and selection marks.</li>
<li>Aligned slide-toggle hints and errors with the control and added layout tokens for settings rows with labels and switches at opposite ends.</li>
</ul>
<h2>Accordion and collapsible headers</h2>
<ul>
<li>Matched hover highlights to the container&#39;s inner corner radius, including custom radius values.</li>
<li>Kept expanded headers rounded at the top and square at the bottom, and removed the divider between the header and content.</li>
</ul>
<h2>Appearance playground</h2>
<ul>
<li>Organized preferences into Appearance, Surfaces, Theme and Accessibility sections.</li>
<li>Added selectable Light, Dark and Auto preview cards built from Blocks components.</li>
<li>On smaller screens, Light and Dark cards sit side by side with portrait previews and an Automatic slide toggle below. Automatic highlights the active system
mode; choosing the other card switches to an explicit preference.</li>
<li>Moved the translucency slider into a padded pill below the surface demo, with a separate description and a Reset action. Advanced settings use the Blocks
collapsible component.</li>
<li>Kept the disabled glassiness controls synchronized with Baseline and the remembered rendering preferences.</li>
<li>Simplified the top bar to one Appearance action. Mode and palette controls live on the appearance page.</li>
<li>Added alpha channel labeling to the playground and release-note selector while preserving earlier version URLs.</li>
<li>Linked the overview&#39;s npm action to the newest version in the configured release channel.</li>
</ul>
<h2>Migration and configuration</h2>
<p>The numeric <code>glassiness</code> preference is now <code>translucency</code>; <code>glassiness</code> selects browser policy for refraction. Existing saved numeric preferences migrate
automatically. Applications using the old numeric API should update these names:</p>
<table>
<thead>
<tr>
<th>Previous numeric API</th>
<th>Replacement</th>
</tr>
</thead>
<tbody><tr>
<td><code>setAppearance({ glassiness: 0.5 })</code></td>
<td><code>setAppearance({ translucency: 0.5 })</code></td>
</tr>
<tr>
<td><code>bxSurfaceGlassiness</code> with a numeric value</td>
<td><code>bxSurfaceTranslucency</code></td>
</tr>
<tr>
<td><code>--bx-glassiness</code></td>
<td><code>--bx-translucency</code></td>
</tr>
</tbody></table>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { inject } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ThemingService</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/core&#x27;</span>;

<span class="hljs-keyword">const</span> themingService = <span class="hljs-title function_">inject</span>(<span class="hljs-title class_">ThemingService</span>);
themingService.<span class="hljs-title function_">setAppearance</span>({ <span class="hljs-attr">translucency</span>: <span class="hljs-number">0.5</span>, <span class="hljs-attr">glassiness</span>: <span class="hljs-string">&#x27;auto&#x27;</span> });</code></pre>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">bx-button</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;icon&quot;</span> <span class="hljs-attr">glassiness</span>=<span class="hljs-string">&quot;auto&quot;</span> <span class="hljs-attr">aria-label</span>=<span class="hljs-string">&quot;Open contents&quot;</span>&gt;</span>\u2026<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span> <span class="hljs-tag">&lt;<span class="hljs-name">bx-checkbox</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Receive updates&quot;</span> [<span class="hljs-attr">emissive</span>]=<span class="hljs-string">&quot;true&quot;</span> /&gt;</span></code></pre>
<p>Register the effects stylesheet once through the existing Blocks setup. Custom material and foreground overrides remain application-owned. See the
<a href="appearance">appearance guide</a>,
<a href="components/card">card documentation</a> and
<a href="components/checkbox">checkbox documentation</a> for the complete APIs.</p>
`,"documentation/releases/1.5.3-alpha/README.md":`<h1>Blocks 1.5.3-alpha</h1>
<p>Published Alpha change notes for <a href="https://www.npmjs.com/package/@filip.mazev/blocks/v/1.5.3-alpha">@filip.mazev/blocks@1.5.3-alpha</a>.</p>
<h2>Declarative side panel</h2>
<ul>
<li>Added standalone <code>SidePanel</code> (<code>bx-side-panel</code>) to <code>@filip.mazev/blocks/primitives</code>, controlled through the <code>open</code> boolean model and its <code>openChange</code> output.</li>
<li>Supports left/right placement, numeric or CSS-length widths, optional element containment, viewport bounds, scoped backdrops, and reactive configuration.</li>
<li>Added <code>SidePanelLayout</code> for stable CSS containment and real push slots beside page content. <code>layoutMode</code> defaults to overlay; optional typed <code>breakpoints</code>
resolve minimum-width modes through <code>WindowDimensionsService</code>, with the highest matching configured threshold winning. <code>currentLayoutMode()</code> exposes the
effective mode. Push and overlay changes retain the same panel and projected content.</li>
<li>Panels inside the layout no longer follow document-scroll rectangles or use deferred scroll-time positioning. Standalone/external-bound overlay presentation
remains supported; <code>container=&quot;viewport&quot;</code> explicitly escapes an enclosing layout. All four side-panel corners are square through shared Modal Side styles.</li>
<li>The panel provides the existing top-layer overlay context for nested selection controls, menus, popovers, and tooltips. Tooltips now honor that context and
use the shared synchronous origin tracker, avoiding clipping and panel-relative stacking failures.</li>
<li>Unhandled Escape is observed for the complete open lifetime, including after projected-content updates or focus moves to the surrounding page. Child overlays
retain first dismissal through their existing event handling; tooltip dismissal now marks Escape handled.</li>
<li>Added <code>SidePanelHeaderDirective</code>, <code>SidePanelFooterDirective</code>, and <code>SidePanelBannerDirective</code> for projected sections. Body content remains mounted across
closing and reopening; omitted sections reserve no space, and the body scrolls separately from header/footer actions.</li>
<li>Nonmodal complementary-region semantics preserve ordinary page interaction and keyboard navigation. Configurable focus entry/restoration, close controls,
Escape dismissal, translated accessible names, and mounted reduced-motion updates are supported without page scroll locking or focus trapping.</li>
<li>Shared panel-frame, header/footer, banner, and close-control Sass presentation with Modal Side. Existing modal services, layouts, backdrops, focus trapping,
scroll locks, nested modal handling, animations, and dismissal contracts remain in place.</li>
</ul>
<h2>Modal and panel presentation</h2>
<ul>
<li>Fixed centered modal content clipping on small screens, including nested dialogs. The content region scrolls while header and footer actions remain reachable.</li>
<li>Declarative SidePanel and left/right Modal Side surfaces use square corners on all four edges, including their material decorations.</li>
<li>Centered, side, and bottom-sheet modals share the declarative panel&#39;s translucent surface presentation. <code>--bx-modal-bg</code> / <code>--bx-modal-text</code> retain priority,
with shared panel and semantic surface/text fallbacks. Root dialogs retain the ordinary 0.52 opacity floor and their shared appearance preferences.</li>
<li>The root dialog paints dimming outside its border so its translucent surface samples the page without its own black scrim. Centered layouts keep viewport
dimming on an unscaled frame while the clear opening follows the dialog&#39;s zoom. The shared backdrop retains blur, pointer hit testing, and dismissal.</li>
<li>Nested dialogs use independent fixed backdrops, retaining the parent&#39;s material and backdrop. The first nested dialog uses a 0.9 minimum opacity; subsequent
nested levels use 1. <code>ModalGlobalSettingsService.nestedOpacityFloors</code> configures those floors reactively, with the final entry repeated at deeper levels. An
empty array disables depth adjustment. Appearance/accessibility settings may increase opacity further. Close guards and responsive layouts share the policy.</li>
<li>All built-in light-mode accents now use white foregrounds on contrast-safe semantic base/hover/active shades. Raw palette anchors and theme-picker swatches
remain unchanged. Other on-fill roles prefer white when it reaches 4.5:1 contrast, otherwise a dark foreground.</li>
<li>Corrected brand/accent text against its supported surfaces and secondary text against dark hover/pressed surfaces. Success, information, warning, and danger
retain their original foreground, border, and normal/hover/active fill shades. High-contrast definitions and explicit theme overrides retain control. Filled
chips preserve their semantic fill during hover and add an inset outline to retain on-fill contrast.</li>
<li>Declarative SidePanel headings share Modal Side&#39;s title/icon layout, wrapping, divider spacing, and compact 32px close controls. <code>SidePanel.headerIcon</code>
accepts optional <code>IIconData</code> with modal-banner size, semantic color, background, and stroke behavior. Projected headings and the separate top-banner slot
remain supported.</li>
</ul>
<h2>Reusable resizing</h2>
<ul>
<li>Added <code>ResizeHandleDirective</code> (<code>bxResizeHandle</code>) to Primitives with a numeric <code>resizeValue</code> model, physical left/right width and top/bottom height edges, and
typed <code>IResizeHandleEvent</code> lifecycle events. Owners apply sizes to their own layouts; no table/panel-specific state or target-style mutation is required.</li>
<li>Added explicit pixel minimum/maximum inputs, optional original-size references, and container observation. Default maximum is 50% of the container; the
relative minimum is 30% of original size. <code>resizeDisableShrink</code> defaults to true, retaining the original-size floor until shrinking is explicitly enabled.
Available container extent wins over conflicting bounds.</li>
<li>Pointer capture, frame-coalesced updates, final-position flushing, keyboard arrows/Home/End, Shift increments, and Escape cancellation share bounded values.
Listeners, capture, and temporary selection/cursor styles are cleaned up on completion, cancellation, disabling, focus loss, and destruction.</li>
<li>Added opt-in SidePanel width resizing with a handle on its inner edge. <code>width</code> is a model supporting <code>widthChange</code>; existing one-way bindings still work.
<code>resizable</code>, <code>resizeMinWidth</code>, <code>resizeMaxWidth</code>, <code>resizeDisableShrink</code>, and translatable <code>resizeLabel</code> configure interaction. CSS-length initial widths are
supported; completed adjustments write numeric pixels, and cancellation restores the original representation. Side panels resize horizontally only.</li>
<li>Added shared neutral resize-grip styling: a compact three-dot pill in a separate gutter and a full-edge line without dots on hover/drag. Pointer inactivity
fades the idle grip; focus, touch, reduced motion, and forced colors retain appropriate feedback. Push panels reserve the gutter. <code>resizeActivityContainer</code>
separates pointer activity from portal bounds, and <code>resizeIdleDelay</code> defaults to 2000ms with zero retaining a persistent idle grip.</li>
<li>Added <code>Chip.deselectable</code>, default true. False supports owner-coordinated single-choice chip groups without toggling the active choice off. Filled chip
material now defaults to an opaque semantic fill, configurable through <code>--bx-chip-fill-opacity</code>, so primary selection remains visible.</li>
</ul>
<h2>Scroll-boundary detection and shared loading</h2>
<ul>
<li>Added <code>InfiniteScrollDirective</code> (<code>bxInfiniteScroll</code>) to Primitives for detecting proximity to the end of arbitrary scroll containers or an ancestor/document
viewport. Inputs configure pixel thresholds, disabled/loading states, completion revisions, and an optional footer offset.</li>
<li>Detection remains separate from fetching, pagination, indicators, buttons, retries, and exhaustion. <code>scrollEnd</code> emits a guarded boundary event; <code>complete()</code>
acknowledges completion when the owner has no loading cycle or revision change. Read-only <code>overflowing()</code> exposes measured overflow.</li>
<li>Optional <code>infiniteScrollCheckOnRender</code> enables finite local progressive rendering to fill short viewports after initial render, content changes, and resizing.
It defaults to false to avoid uncontrolled remote request loops. Owners explicitly disable detection at exhaustion.</li>
<li>Exported <code>findScrollContainer</code>, <code>measureScrollBoundary</code>, <code>observeScrollBoundary</code>, and <code>IScrollBoundary</code> for reusable viewport discovery, geometry, and
disposable passive observation. Browser observers start after rendering, reconnect for container changes, and release removed content targets and listeners.</li>
<li>Refined <code>LoadMoreDirective</code> to use the same Core boundary measurement/observation helpers. Select and Multiselect retain one shared orchestration layer for
loading, no-scrollbar fallback actions, failure, explicit retry, and request-source payloads. Their public inputs and outputs remain unchanged.</li>
<li>Kept footer-excluded overflow measurement and explicit remote fallback behavior. Scroll request guards now run before entering Angular when no new request can
be emitted, avoiding redundant change-detection work while loading or awaiting completion.</li>
</ul>
<h2>Bidirectional virtual rendering</h2>
<ul>
<li>Added <code>VirtualCollection&lt;T&gt;</code> and typed <code>VirtualItemDirective&lt;T&gt;</code> to Primitives for a sliding row window independent of detection and data loading. List and
responsive multi-column grid modes mount overscan near the viewport and unmount distant items while preserving overall scroll extent with spacers.</li>
<li>Exported <code>IVirtualCollectionConfig</code>, <code>IVirtualItemContext&lt;T&gt;</code>, <code>IVirtualRange</code>, stable-key/track-by contracts, and layout types. Configuration covers
estimated row height, overscan pixels, and CSS or numeric minimum column width; <code>measurementRevision</code> invalidates cached geometry.</li>
<li>Measure dynamic rows with <code>ResizeObserver</code> and maintain a cached prefix-sum tree for efficient height updates and offset lookups. Width and column changes
regroup rows and retain a stable visible anchor. Scroll corrections run after spacer rendering, including when the browser clamps a shrinking scroll extent.</li>
<li>Exposed read-only <code>renderedRange()</code> and <code>renderedItems()</code> for bounded consumer presentation work, plus <code>scrollToIndex()</code>, <code>scrollToItem()</code>, and
<code>refreshMeasurements()</code>. Programmatic smooth scrolling respects reduced motion. Focused rows can remain independently mounted; responsive regrouping restores
their focused control when available. Measurement internals and coordination tokens remain outside public exports.</li>
</ul>
<h2>Icons and generated categories</h2>
<ul>
<li>Broadened <code>IconSize</code> to positive numeric pixel values or numeric strings and <code>number</code> to positive numeric values, enabling continuous customization. Existing
values remain valid. Runtime invalid dimensions use 24 pixels and invalid stroke widths use 1.5.</li>
<li>Ignore icon-load completions after input replacement or destruction.</li>
<li>Added <code>LUCIDE_CATEGORIES</code>, <code>LUCIDE_ICON_CATEGORIES</code>, and <code>LucideCategoryId</code> to the icons entry point. Category records are synchronized with the generated
icon names, support multiple assignments and upstream aliases, and use a predictable uncategorized fallback.</li>
<li>Extended the existing generation pipeline with an offline, release-pinned official Lucide snapshot. A controlled synchronization command resolves upstream
category inheritance and preserves attribution. Normal builds and runtime require no metadata network requests, and mismatched dependency/snapshot versions
fail with synchronization instructions.</li>
</ul>
<h2>Catalog navigation</h2>
<ul>
<li>Icons and Tokens show their scroll action only after scrolling 400 pixels past the results&#39; start. Reading documentation above the catalog does not trigger
it.</li>
<li>The action returns to the catalog results and focuses that region. Its tooltip and accessible name are <strong>Scroll to catalog top</strong>. Documentation expansion and
viewport changes update the threshold and destination; reduced motion remains supported.</li>
</ul>
<h2>Page layouts and breadcrumbs</h2>
<ul>
<li>Added <code>PageContainer</code>, <code>PageHeader</code>, <code>PageContent</code>, and <code>PageFooter</code> to primitives with public configuration and colocated guides.</li>
<li>Added responsive width/padding presets and <code>ResolvableText</code> support for section titles, page titles, explicit descriptions, breadcrumb labels, and the
breadcrumb navigation&#39;s accessible name. Already-rendered text reacts to the optional <code>BX_I18N</code> language revision.</li>
<li>Added <code>autoResolveTitlesFromNavigation</code>, default true, to infer undefined headings. Descriptions remain explicit; empty titles suppress automatic values.
Projected headers support additional content and configurable semantic heading levels.</li>
<li>Connected <code>provideNavigation()</code> and <code>NavigationService.page</code> to optional <code>BX_PAGE_NAVIGATION</code> without a dependency from primitives to navigation. Applications
can supply their own reactive <code>IPageNavigation</code> adapter or explicit headings and breadcrumb trails.</li>
<li>Added automatic breadcrumbs with a configurable <code>breadcrumbsAfter</code> threshold. The default hides root trails and shows ancestor links on child pages. Native
ordered links, current-page markers, focus indicators, and wrapping support narrow screens, translated labels, and RTL layouts.</li>
</ul>
<h2>Mobile navigation and scroll locking</h2>
<ul>
<li>Reused the shared backdrop in mobile side navigation, including blur and opaque accessibility fallbacks. Added a translatable dismissal label, tab-order
input, and presentation CSS variables.</li>
<li>Tied drawer <code>ScrollLockService</code> ownership to open overlay presentation and released its own lock on close, navigation, presentation changes, and destruction.
Embedded inline drawers retain their container-scoped behavior without a page lock.</li>
<li>Made scroll-lock ownership idempotent. Releasing one owner preserves other locks, recalculates touch/overflow requirements, and restores original inline body
styles only after the final owner releases its lock.</li>
</ul>
<h2>Window dimensions and responsive breakpoints</h2>
<ul>
<li>Expanded <code>WindowDimensionsService</code> with extra-small/small mobile, small laptop, large desktop, ultra-wide, and cumulative <code>*AndBelow</code> signals while retaining
<code>isMobile</code>, <code>isTablet</code>, and <code>isDesktop</code>.</li>
<li>Added <code>currentBreakpoint()</code> and <code>currentBreakpointValue()</code>, returning undefined outside the browser. The active breakpoint is the highest configured
minimum-width threshold not exceeding the viewport width.</li>
<li>Added typed <code>isAtLeast()</code>, <code>isBelow()</code>, <code>isBetween()</code>, and generic <code>resolveResponsiveValue()</code> with a caller-provided server fallback.</li>
<li>Centralized comparisons and improved first-render dimension detection. Resize updates are animation-frame-coalesced instead of debounced by 150 ms and clean
up automatically on destruction.</li>
</ul>
<h2>Navigation API</h2>
<ul>
<li>Replaced side-navigation submenu popups with nested lists at every screen size and depth. Back, ancestor navigation, scroll restoration, and temporary compact
rail expansion remain available.</li>
<li>Removed <code>submenuMode</code>, <code>submenuBreakpoint</code>, <code>SideNavSubmenuMode</code>, and <code>isInlineSubmenus()</code>. Nested browsing always uses the panel; obsolete submenu
width/height variables no longer apply.</li>
<li>Kept route selection separate from programmatic focus and focused the active route when entering its level. Ancestor navigation reveals the original entry and
scrolls only the navigation list. Section-only ancestors return directly to the navigation root.</li>
<li>Renamed <code>withNav</code> to <code>withInAppNavigation</code> without a deprecated alias.</li>
</ul>
<h2>Design tokens and theme palettes</h2>
<ul>
<li>Added generated Core inventories for CSS custom properties, references, design scales, breakpoints, and utility classes, covering semantic roles, palettes,
effects properties, component overrides, registered properties, and discoverable runtime values.</li>
<li>Exported <code>CSS_TOKEN_CATALOG</code>, <code>ICssToken</code>, and category/kind/scope contracts. Metadata distinguishes global, theme, local, and runtime availability and
records declarations and use-site fallbacks; local/runtime discovery does not imply a document-root value or supported override.</li>
<li>Centralized semantic companion mappings. <code>getComplementaryToken()</code> uses these mappings and the existing palette rule; <code>resolveTokenToCssVar()</code> returns
<code>CssVariableReference</code>. Palette guards validate supported palettes and shades.</li>
<li>Centralized theme IDs, labels, brand/accent assignments, and preview ordering in the Sass <code>$theme-palettes</code> registry; generated <code>THEME_PALETTES</code>,
<code>THEME_PALETTE_IDS</code>, and <code>BxThemeId</code> derive from it.</li>
<li>Added <code>make-palette-theme(id, dark?, overrides?)</code> while preserving existing palette IDs, labels, classes, and preview colors.</li>
</ul>
<h2>Shared primitive customization</h2>
<ul>
<li>Added <code>SearchInput.compact</code>, default false, for compact unlabeled search controls. Supplying a label automatically enables compact mode; existing search,
loading, readonly, and accessibility behavior remains available.</li>
<li>Fixed surface highlights changing when context menus open. Lighting visibility ignores fully transparent dismissal backdrops while retaining occlusion from
visible panels and opaque backdrops. Menu rows keep themed hover/pressed fills and focus without casting near-white light behind the panel.</li>
<li>Added <code>false</code> support to <code>BxSurfaceDirective.bxSurfaceEmission</code> and runtime <code>ISurfaceOptions.emission</code>. Automatic emission can be disabled independently of
press feedback and received lighting; an explicit focus-emission color still enables focus-only emission. Mounted hover state reacts to changes.</li>
<li>Made inherited overlay lighting directional, preserving overlay boundaries for semantic, explicit, reflected, and ambient sources. Exposure checks use
projected receiving locations and perimeter-based edge falloff.</li>
<li>Fixed number-only Tag proportions while preserving configurable horizontal padding and minimum diameter.</li>
<li>Added <code>Collapsible.titleTemplate</code>, <code>Collapsible.trailingTemplate</code>, and exported <code>ICollapsibleTitleContext</code> for translated, noninteractive heading content and
status while retaining shared disclosure/focus behavior and RTL support.</li>
<li>Added <code>Card.surfaceEffects</code>, default true, allowing dense collections to disable decorative controllers while preserving themed styling, slots, and
interaction.</li>
</ul>
<h2>Overlay positioning</h2>
<ul>
<li>Fixed selection-panel drift when a trigger inside a native top-layer popover moves in a nested scroller. Top-layer overlays use synchronous measured CDK
positioning; ordinary overlays retain native CSS anchoring where supported.</li>
<li>Preserved origin tracking cleanup, resize handling, visibility callbacks, and explicit <code>reposition()</code> in both positioning paths.</li>
<li>Release Select and Multiselect overlays after completed closes so reopening resolves the current ordinary/top-layer context. Values and search terms remain on
the control; reopening during exit reverses the existing transition.</li>
</ul>
<h2>Breaking changes and migration</h2>
<ul>
<li><p><code>InfiniteScrollDirective</code> now belongs to <code>@filip.mazev/blocks/primitives</code>. Update imports from the earlier Core location; no deprecated Core alias is
retained. Geometry and scroll-container helpers remain in Core as shared non-presentational utilities.</p>
</li>
<li><p>Replace <code>withNav(...)</code> with <code>withInAppNavigation(...)</code> in imports and navigation configuration.</p>
</li>
<li><p>Remove side-navigation submenu settings and <code>isInlineSubmenus()</code> calls; nested inline navigation is now the only presentation.</p>
</li>
<li><p><code>isDesktop()</code> begins at <code>xl</code> (1280 px). Use <code>isAtLeast(&#39;lg&#39;)</code> or <code>isSmallLaptop()</code> when the previous desktop threshold is needed. <code>isMobile()</code> and
<code>isTablet()</code> boundaries remain unchanged.</p>
</li>
<li><p><code>_dimensions</code> is private. Read the service&#39;s readonly <code>dimensions()</code> signal instead of setting it directly. Review expensive resize computations because
updates now occur per animation frame.</p>
</li>
<li><p><code>meta-brand-palette</code> and <code>meta-accent-palette</code> are Sass metadata and are excluded from <code>Color</code> and <code>SEMANTIC_COLOR_TOKENS</code>. Use <code>ThemingService.palette()</code> for
palette metadata and <code>primary</code>/<code>accent</code> for themed colors. Filter <code>CSS_TOKEN_CATALOG</code> by scope when globally available values are required.</p>
</li>
<li><p>Icon numeric contracts are broader; consumers enumerating <code>IconSize</code> or <code>number</code> as exhaustive unions should use their own preset arrays. Existing rendered
presets and defaults remain supported. No Select, Multiselect, load-more, or Modal public API was removed by the scroll/panel additions.</p>
</li>
</ul>
<h2>Documentation, tooling, and source organization</h2>
<ul>
<li>Colocated library guides with their owning entry points, components, and directives. Standardized guide sections, public imports, examples, Markdown
formatting, and documentation generation. Added a strict <code>lint:docs</code> gate.</li>
<li>Added <code>release.config.json</code> with optional <code>nextVersion</code> and shared package-version resolution. Unassigned targets increment the configured channel&#39;s patch;
explicit version overrides and publication retry remain supported. Registry request failure is not treated as proof of non-publication.</li>
<li>Applied entry-point category folders for types, interfaces, constants, helpers, services, classes, enums, and tokens, including secondary entry points. Moved
generated Lucide definitions under <code>icons/constants/lucide</code> with contracts in <code>icons/types</code> and updated generation/import paths.</li>
<li>Enforced full lower-camel injected class names, direct injected-member projection names, declaration organization, colocated guides, and descriptive public
JSDoc with parameter/type-parameter coverage.</li>
<li>Replaced theme-type synchronization with <code>tools:generate-tokens</code>, retaining its previous script alias. Token generation evaluates Sass maps and uses the
TypeScript AST, with generated-source banners, formatting, strict generation rules, and unchanged-output detection.</li>
</ul>
<p>Stable NPM installs continue using the <code>latest</code> tag; Alpha and Beta remain opt-in.</p>
`,"documentation/releases/1.5.4-alpha/README.md":`<h1>Blocks 1.5.4-alpha draft change notes</h1>
<p>Draft for the next Alpha publication of <code>@filip.mazev/blocks</code>. This version has not been published; these notes may change before release.</p>
<h2>Side navigation</h2>
<ul>
<li>Fixed missing label tooltips on compact submenu buttons. Parent icons now use the same shared hover, keyboard-focus, positioning, and theme behavior as
compact route links.</li>
<li>Stabilized expanded content at its final width while the panel opens, preventing labels from repeatedly wrapping into narrow columns during the transition.</li>
<li>Labels, search, and disclosure arrows fade in during the final <code>60ms</code> of the width transition. The delay uses the running transition&#39;s remaining time,
avoiding an additional wait after rendering. Initial expanded rendering and mobile drawers have no additional reveal delay.</li>
<li>Added <code>--bx-side-nav-label-duration</code>, defaulting to <code>90ms</code>, to customize the fade duration. Existing <code>--bx-side-nav-duration</code> and <code>--bx-side-nav-easing</code>
continue to configure the width transition.</li>
</ul>
<h2>Accessibility and lifecycle</h2>
<ul>
<li>Reduced motion removes the width animation, reveal delay, and fade. Changing the preference while the rail opens reveals content immediately.</li>
<li>Keyboard focus reveals content immediately. Accessible control names remain available while labels are visually fading; icons and focus indicators remain
independent of the text fade.</li>
<li>Pending reveal work is cancelled when the rail collapses, its presentation changes, or the component is destroyed. Browser measurements run after rendering
and are skipped during server rendering.</li>
</ul>
<h2>Compatibility and customization</h2>
<p>Existing navigation inputs, outputs, routes, and persistence contracts remain unchanged. Applications using the default templates receive the fixes directly.</p>
<p>Custom item, header, and footer templates can apply the shared reveal to their text using <code>opacity: var(--bx-side-nav-label-opacity, 1)</code> and an opacity
transition with <code>var(--bx-side-nav-label-transition-duration, 0ms)</code>. Keep icons and focus indicators outside the faded text. The inherited values follow the
navigation&#39;s reduced-motion and keyboard-focus behavior.</p>
`,"projects/blocks/README.md":`<h1>@filip.mazev/blocks</h1>
<p>Blocks is a modular Angular UI library with shared theming, accessibility, translations, form behavior and overlay infrastructure. Its public entry points ship
in one package, alongside the installation schematic.</p>
<p>Use the playground&#39;s generated component catalog for the current API reference and runnable examples. This guide covers installation and application-wide setup.</p>
<h2>Installation</h2>
<p>Requires Angular 22 and RxJS 7.8 or later within major 7.</p>
<p>To install the complete Blocks ecosystem and automatically configure your workspace, run:</p>
<pre class="playground-code-block" tabindex="0" aria-label="bash code example"><code class="hljs language-bash">ng add @filip.mazev/blocks</code></pre>
<h2>What does ng add do?</h2>
<p>When you run the command above, the Angular CLI will execute our custom schematic to handle the boilerplate for you:</p>
<ul>
<li>Palette selection: Carbon / Cobalt is the CLI default. Azure / Ember, Violet / Teal, Tangerine / Indigo, Brick Rose / Cyan, Lime / Violet, and Cyberpunk are
also available. Use <code>--theme=azure-ember</code> to select Azure / Ember.</li>
<li>Dependency Management: Automatically adds the latest versions of the Blocks ecosystem to your package.json and runs npm install.</li>
<li>SCSS Injection: Intelligently locates your project&#39;s global stylesheet (styles.scss or styles.sass) and injects the required @use statements, mixins, and both
light/dark mode CSS variables based on your theme selection.</li>
</ul>
<h2>Manual Setup (Without Angular CLI)</h2>
<p>If you prefer not to use <code>ng add</code> or are in an environment that doesn&#39;t support Angular Schematics, you can install the packages manually:</p>
<pre class="playground-code-block" tabindex="0" aria-label="bash code example"><code class="hljs language-bash">npm install @filip.mazev/blocks@latest</code></pre>
<p>Then, manually configure your styles.scss:</p>
<pre class="playground-code-block" tabindex="0" aria-label="scss code example"><code class="hljs language-scss"><span class="hljs-keyword">@use</span> <span class="hljs-string">&#x27;@filip.mazev/blocks&#x27;</span> as *;

<span class="hljs-keyword">@layer</span> base {
    <span class="hljs-selector-pseudo">:root</span> {
        <span class="hljs-keyword">@include</span> bx-theme(<span class="hljs-variable">$carbon-cobalt-light-theme</span>);
    }

    <span class="hljs-selector-attr">[data-theme=<span class="hljs-string">&#x27;dark&#x27;</span>]</span> {
        <span class="hljs-keyword">@include</span> bx-theme(<span class="hljs-variable">$carbon-cobalt-dark-theme</span>);
    }
}</code></pre>
<h2>Palettes</h2>
<p>Use paired palette IDs consistently in the CLI and <code>ThemingService.setPalette()</code>. For example:</p>
<pre class="playground-code-block" tabindex="0" aria-label="sh code example"><code class="hljs language-sh">ng add @filip.mazev/blocks --theme=azure-ember</code></pre>
<p>The Sass exports use the same names: <code>$azure-ember-light-theme</code> and <code>$azure-ember-dark-theme</code>. Carbon / Cobalt is the installer default; the playground starts
with Carbon / Cobalt. Only the current palette IDs and Sass names are supported.</p>
<p>Buttons and tabs accept <code>color=&quot;accent&quot;</code> for the second tone. Icons and custom components can use semantic tokens such as <code>text-accent</code>, <code>accent-subtle</code>,
<code>on-accent</code>, and <code>border-accent</code>. Canvas backgrounds stay neutral; status roles keep their meaning. See
<a href="appearance#palettes">the palette reference</a> for all seven pairs.</p>
<h2>Appearance</h2>
<p>Version 1.4.0 integrates glass throughout Blocks using its existing semantic theme. Configure it application-wide through
<code>ThemingService.setAppearance({ translucency: 0.5 })</code>; use <code>resetAppearance()</code> for defaults. Existing controls receive their material automatically, including
menus, dialogs and notifications.</p>
<p>Load <code>@filip.mazev/blocks/effects/effects.css</code> once globally alongside the Blocks Sass theme. <code>ng add</code> registers the stylesheet for new installations.
<code>BxSurfaceDirective</code> from <code>@filip.mazev/blocks/effects</code> is available for custom containers and local overrides. The framework-independent engine is
<code>@filip.mazev/blocks/effects/runtime</code>, included in the same package.</p>
<p>The source playground provides a dedicated README and working page for every component, with global appearance controls at <code>/appearance</code>.</p>
`,"projects/blocks/core/README.md":`<h1>Core</h1>
<p>Shared infrastructure for responsive, accessible, theme-aware Blocks applications: appearance, device and viewport signals, shortcuts, translations, overlay
positioning, design tokens, and scroll locking.</p>
<h2>Import</h2>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">BxA11</span>yService, <span class="hljs-title class_">BxShortcutService</span>, <span class="hljs-title class_">DeviceTypeService</span>, <span class="hljs-title class_">ScrollLockService</span>, <span class="hljs-title class_">ThemingService</span>, <span class="hljs-title class_">WindowDimensionsService</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/core&#x27;</span>;</code></pre>
<p>Follow the <a href="home">package setup</a>. Core is a secondary entry point of <code>@filip.mazev/blocks</code>; the old separate <code>blocks-core</code> package is not required.</p>
<h2>Usage</h2>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">ChangeDetectionStrategy</span>, <span class="hljs-title class_">Component</span>, computed, inject } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ThemingService</span>, <span class="hljs-title class_">WindowDimensionsService</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/core&#x27;</span>;

<span class="hljs-meta">@Component</span>({
    <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;app-responsive-example&#x27;</span>,
    <span class="hljs-attr">template</span>: <span class="hljs-string">&#x27;&lt;p&gt;{{ compact() ? &quot;Compact layout&quot; : &quot;Wide layout&quot; }}&lt;/p&gt;&#x27;</span>,
    <span class="hljs-attr">changeDetection</span>: <span class="hljs-title class_">ChangeDetectionStrategy</span>.<span class="hljs-property">OnPush</span>
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">ResponsiveExample</span> {
    <span class="hljs-keyword">private</span> <span class="hljs-keyword">readonly</span> windowDimensionsService = <span class="hljs-title function_">inject</span>(<span class="hljs-title class_">WindowDimensionsService</span>);

    <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> compact = <span class="hljs-title function_">computed</span>(<span class="hljs-function">() =&gt;</span> <span class="hljs-variable language_">this</span>.<span class="hljs-property">windowDimensionsService</span>.<span class="hljs-title function_">isBelow</span>(<span class="hljs-string">&#x27;sm&#x27;</span>));

    <span class="hljs-title function_">constructor</span>(<span class="hljs-params"></span>) {
        <span class="hljs-title function_">inject</span>(<span class="hljs-title class_">ThemingService</span>).<span class="hljs-title function_">setApplicationTheme</span>(<span class="hljs-literal">null</span>);
    }
}</code></pre>
<h2>API</h2>
<h3>Viewport, device, and accessibility</h3>
<p><code>WindowDimensionsService.dimensions()</code> exposes reactive dimensions and <code>breakpoints</code> shares thresholds with Sass:</p>
<table>
<thead>
<tr>
<th>Token</th>
<th>Pixels</th>
</tr>
</thead>
<tbody><tr>
<td><code>xs</code></td>
<td>360</td>
</tr>
<tr>
<td><code>sm</code></td>
<td>640</td>
</tr>
<tr>
<td><code>md</code></td>
<td>768</td>
</tr>
<tr>
<td><code>lg</code></td>
<td>1024</td>
</tr>
<tr>
<td><code>xl</code></td>
<td>1280</td>
</tr>
<tr>
<td><code>2xl</code></td>
<td>1536</td>
</tr>
<tr>
<td><code>3xl</code></td>
<td>1920</td>
</tr>
<tr>
<td><code>4xl</code></td>
<td>2560</td>
</tr>
</tbody></table>
<p><code>DeviceTypeService.getDeviceState()</code> reports mobile/tablet/desktop, desktop and mobile OS, Apple devices, and orientation. Use capabilities rather than assuming
that a device category determines interaction. <code>BxA11yService.isReducedMotion()</code> tracks the shared motion preference.</p>
<p><code>ThemingService</code> exposes application mode, active theme, palette, and appearance signals. Use <code>setApplicationTheme(&#39;light&#39; | &#39;dark&#39; | null)</code>, <code>setPalette(id)</code>,
and <code>setAppearance(partial)</code> to update mounted Blocks components and their overlays.</p>
<h3>Design tokens</h3>
<p>Browse the <a href="tokens">token catalog</a> at <code>/tokens</code> for semantic colors grouped by role, every palette
shade and color companion, spacing, corner radii, border colors, shadows, layers, effects, component variables, utility classes, and Sass breakpoints. Search by
name, role, value, or source; copy CSS references and preview the current toolbar theme. <code>CSS_TOKEN_CATALOG</code> exposes typed discovery metadata with explicit
global/theme/local/runtime availability. <code>CSS_VARIABLES</code> and <code>CSS_VARIABLE_REFERENCES</code> supply typed names and references. Local/runtime values are not
necessarily available on the document root; the owning feature guide defines supported customization.</p>
<p>Theme palette IDs, labels, brand/accent roles, and optional swatch preview order live in <code>$theme-palettes</code> in the Sass theme engine. <code>THEME_PALETTES</code> and
<code>THEME_PALETTE_IDS</code> are generated from that registry; the public <code>BxThemeId</code> union derives from the generated IDs. Existing theme variables use
<code>make-palette-theme(id, dark?, overrides?)</code>, preserving their public names and colors.</p>
<p>All built-in light-mode accent fills use white on-accent text. Their semantic base/hover/active shades move darker where needed to meet 4.5:1 text contrast; raw
palette anchors and picker swatches remain unchanged. Other on-fill foregrounds prefer white when it passes, with dark text for brighter fills. Semantic
brand/accent text and secondary text choose readable palette shades across their normal, hover, active, and neutral surfaces in both modes. Success,
information, warning, and danger retain their original status foreground, border, and interaction-fill shades. Explicit theme overrides and high-contrast
palettes retain control.</p>
<p>Sass is the source of truth. <code>npm run tools:generate-tokens</code> evaluates the maps and inventories compiled CSS plus TypeScript property usage; generated constants
pass the repository&#39;s lint/format pipeline. Maintain color/type contracts in ordinary TypeScript. See the catalog guide for generation, availability, and the
migration of <code>meta-*</code> Sass metadata out of the color-token union.</p>
<h3><code>BxShortcutService</code></h3>
<p>Shares shortcut definitions between menu hints and application-owned keyboard handlers. It resolves OS overrides, normalizes modifier aliases, formats platform
symbols, creates accessible key names and matches individual keyboard events.</p>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { inject } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">BxShortcutService</span>, <span class="hljs-title class_">ResolvableShortcut</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/core&#x27;</span>;

<span class="hljs-keyword">private</span> <span class="hljs-keyword">readonly</span> bxShortcutService = <span class="hljs-title function_">inject</span>(<span class="hljs-title class_">BxShortcutService</span>);
<span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> <span class="hljs-attr">openShortcut</span>: <span class="hljs-title class_">ResolvableShortcut</span> = [<span class="hljs-string">&#x27;mod&#x27;</span>, <span class="hljs-string">&#x27;shift&#x27;</span>, <span class="hljs-string">&#x27;k&#x27;</span>];

<span class="hljs-comment">// resolve() returns [&#x27;\u2318&#x27;, &#x27;\u21E7&#x27;, &#x27;K&#x27;] on Apple devices or [&#x27;Ctrl&#x27;, &#x27;Shift&#x27;, &#x27;K&#x27;] elsewhere.</span>
<span class="hljs-comment">// A second platform argument supports previews without changing device detection.</span>
<span class="hljs-variable language_">this</span>.<span class="hljs-property">bxShortcutService</span>.<span class="hljs-title function_">resolve</span>(<span class="hljs-variable language_">this</span>.<span class="hljs-property">openShortcut</span>, <span class="hljs-string">&#x27;mac&#x27;</span>);
<span class="hljs-variable language_">this</span>.<span class="hljs-property">bxShortcutService</span>.<span class="hljs-title function_">toAriaKeyshortcuts</span>(<span class="hljs-variable language_">this</span>.<span class="hljs-property">openShortcut</span>); <span class="hljs-comment">// Meta+Shift+K or Control+Shift+K</span>

<span class="hljs-comment">// Inside an application-owned keyboard handler:</span>
<span class="hljs-keyword">if</span> (<span class="hljs-variable language_">this</span>.<span class="hljs-property">bxShortcutService</span>.<span class="hljs-title function_">matches</span>(event, <span class="hljs-variable language_">this</span>.<span class="hljs-property">openShortcut</span>)) {
  event.<span class="hljs-title function_">preventDefault</span>();
  <span class="hljs-comment">// Invoke the action, or call menuTrigger.open(true).</span>
}</code></pre>
<p><code>mod</code> (also <code>primary</code>, <code>cmdorctrl</code>, <code>commandorcontrol</code>) means Command on macOS/iOS and Ctrl elsewhere. Explicit <code>command</code>/<code>cmd</code>/<code>meta</code>, <code>ctrl</code>/<code>control</code>,
<code>option</code>/<code>alt</code> and <code>shift</code> map to familiar platform labels, including \u2318 \u2303 \u2325 \u21E7 on Apple. Explicit Control stays Control on Apple. Letters are uppercase for
display; arrows, Enter, Escape, Tab, Backspace, Delete, Space and plus have defaults too. Unrecognized labels remain display tokens.</p>
<p><code>ResolvableShortcut</code> accepts a string, a readonly token array, or <code>IOSShortcut</code> (<code>OSShortcut</code> remains a compatible alias). An OS object requires <code>default</code> and
accepts optional <code>mac</code>, <code>windows</code>, <code>linux</code>, <code>ios</code>, <code>android</code> values. iOS/iPadOS falls back to <code>mac</code>, then <code>default</code>; all other absent overrides use <code>default</code>.
Tablet hardware keyboards receive mobile OS mappings. <code>ShortcutPlatform</code> includes those five platforms and <code>default</code>; unknown platforms and SSR use <code>default</code>
with Ctrl for <code>mod</code>.</p>
<p><code>matches(event, definition, options?)</code> requires exactly one ordinary key and the exact modifier state. It ignores handled, composing, AltGraph, repeat and
editable-target events by default; <code>IShortcutMatchOptions</code> allows <code>platform</code>, <code>allowRepeat</code> and <code>allowInEditable</code> overrides. Matching uses <code>KeyboardEvent.key</code>,
case insensitive, with layout-dependent characters. Arrays describe combinations, not sequential gestures; combined strings such as <code>&#39;Ctrl+K&#39;</code> remain custom
labels. The service does not register listeners, consume events, manage sequences or resolve shortcut conflicts. Applications own scopes, actions, disabled
guards and cleanup.</p>
<p>The <a href="components/menu-item">menu item documentation</a> contains the complete mapping table and a runnable component. Try
<code>/components/menu-item</code> or <code>/components/menu</code> for combinations and sequences opening menus, platform previews and guarded actions.</p>
<h3>Scroll locking</h3>
<p><code>ScrollLockService.disableScroll(usageId, config)</code> acquires a lock and <code>enableScroll(usageId)</code> releases only that owner&#39;s lock. Generate a stable ID with
<code>uuidv4()</code> for each owner and release it on close, presentation changes, and destruction. The service compensates for scrollbar removal and supports
touch/overflow options through <code>IScrollLockConfig</code>. Concurrent modal and navigation locks do not release one another. Repeated acquisition with the same ID
updates that owner without adding another lock. Touch/overflow requirements follow the remaining owners; the original inline body styles and priorities are
restored only after the final owner releases its lock.</p>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">const</span> scrollLockService = <span class="hljs-title function_">inject</span>(<span class="hljs-title class_">ScrollLockService</span>);
<span class="hljs-keyword">const</span> destroyRef = <span class="hljs-title function_">inject</span>(<span class="hljs-title class_">DestroyRef</span>);
<span class="hljs-keyword">const</span> lockId = <span class="hljs-title function_">uuidv4</span>();

scrollLockService.<span class="hljs-title function_">disableScroll</span>(lockId, { <span class="hljs-attr">handleTouchInput</span>: <span class="hljs-literal">false</span> });
destroyRef.<span class="hljs-title function_">onDestroy</span>(<span class="hljs-function">() =&gt;</span> scrollLockService.<span class="hljs-title function_">enableScroll</span>(lockId));
<span class="hljs-comment">// Also call scrollLockService.enableScroll(lockId) when the owning overlay closes.</span></code></pre>
<p>Import <code>DestroyRef</code> and <code>inject</code> from <code>@angular/core</code>, and <code>ScrollLockService</code>/<code>uuidv4</code> from the public core entry point. For a scrollable drawer, leave touch
input available inside its panel and contain overscroll at the scroll wrapper.</p>
<h3>Translation and overlays</h3>
<p><code>BX_I18N</code> optionally adapts application translation. Configurable text uses <code>ResolvableText</code>; resolve it in <code>computed()</code> with <code>resolveText(text, adapter)</code> so
adapter version changes update mounted content. Plain strings work without an adapter. Custom integrations can use <code>isTextWithKey()</code> and the adapter&#39;s
<code>translate()</code>.</p>
<p>Use <code>BxOverlayPositionService</code>, overlay-origin helpers, and shared theme inheritance when extending an existing overlay. Preserve the owning component&#39;s focus
and lifecycle behavior instead of positioning or recoloring its private DOM.</p>
<p><code>trackOverlayOrigin()</code> uses native CSS anchors where supported for ordinary overlays. Top-layer popovers use synchronous measured CDK positioning so nested
scrolling keeps the panel attached to its trigger. The same returned cleanup callback removes listeners and observers for either path; call its <code>reposition()</code>
method after application-owned layout changes.</p>
<h3>Scroll boundaries</h3>
<p>Use <a href="components/infinite-scroll">Primitives InfiniteScrollDirective</a> for guarded end detection and bounded local progressive rendering.
Core also exports <code>findScrollContainer()</code>, <code>measureScrollBoundary()</code>, <code>observeScrollBoundary()</code>, and <code>IScrollBoundary</code> for reusable viewport discovery and
disposable observation. Detection owns no fetching, pagination, buttons, or retry state. Forms&#39; <a href="components/load-more">LoadMoreDirective</a>
shares these helpers and retains remote request orchestration, loading feedback, fallback actions, and explicit retry.</p>
<h2>Appearance and customization</h2>
<p>Load global styles once through the established package entry point. Import reusable Sass definitions through the public helpers entry point:</p>
<pre class="playground-code-block" tabindex="0" aria-label="scss code example"><code class="hljs language-scss"><span class="hljs-keyword">@use</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/core/styles/helpers&#x27;</span> as *;

<span class="hljs-selector-class">.example</span> {
    <span class="hljs-attribute">padding</span>: <span class="hljs-built_in">spacing</span>(<span class="hljs-number">4</span>);
    <span class="hljs-attribute">border-radius</span>: <span class="hljs-built_in">radius</span>(md);
    <span class="hljs-attribute">color</span>: <span class="hljs-built_in">var</span>(--bx-text-primary);

    <span class="hljs-keyword">@include</span> respond-up(md) {
        <span class="hljs-attribute">padding</span>: <span class="hljs-built_in">spacing</span>(<span class="hljs-number">6</span>);
    }
}</code></pre>
<p>Use shared spacing, radius, elevation, motion, z-index, and responsive helpers. See the
<a href="appearance">appearance guide</a> for palette pairs, semantic colors, translucency, glassiness, and
application-wide rendering configuration.</p>
<h2>Behavior and accessibility</h2>
<p>Use injected shared services and signal derivation for updates under OnPush. Browser measurement and overlay work must wait for rendering and remain safe for
SSR. Clean up locks, observers, listeners, subscriptions, timers, and asynchronous work with their owning view. Respect reduced motion, reduced transparency,
forced colors, native semantics, focus visibility, and accessible naming in custom integrations.</p>
<h2>Playground</h2>
<p>Open <code>/utilities</code> for the cumulative <a href="utilities">utilities playground guide</a>, including viewport and
device detection, independent scroll-lock owners, UUIDs, color-token helpers, and overlay infrastructure. Open <code>/components</code> for the component catalog,
<code>/appearance</code> for shared preferences, <code>/components/menu-item</code> for shortcuts, and <code>/components/side-nav</code> or <code>/modal</code> for coordinated overlays.</p>
`,"projects/blocks/effects/README.md":`<h1>Appearance effects</h1>
<p>Blocks components use glass through the existing theme system. The <code>BxSurfaceDirective</code> applies the same material to custom containers. Labels, inputs and icon
paths retain their native rendering; decorative lighting and blur sit behind content.</p>
<h2>Global configuration</h2>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { inject } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ThemingService</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/core&#x27;</span>;

<span class="hljs-keyword">private</span> <span class="hljs-keyword">readonly</span> themingService = <span class="hljs-title function_">inject</span>(<span class="hljs-title class_">ThemingService</span>);

<span class="hljs-variable language_">this</span>.<span class="hljs-property">themingService</span>.<span class="hljs-title function_">setAppearance</span>({
  <span class="hljs-attr">translucency</span>: <span class="hljs-number">0.5</span>,    <span class="hljs-comment">// 0\u20131; the midpoint balances clarity and tint</span>
  <span class="hljs-attr">quality</span>: <span class="hljs-string">&#x27;auto&#x27;</span>,    <span class="hljs-comment">// auto | baseline | enhanced</span>
  <span class="hljs-attr">glassiness</span>: <span class="hljs-string">&#x27;auto&#x27;</span>, <span class="hljs-comment">// auto | off | on</span>
  <span class="hljs-attr">reducedTransparency</span>: <span class="hljs-literal">false</span>
});

<span class="hljs-comment">// Read the current configuration or return to defaults.</span>
<span class="hljs-keyword">const</span> current = <span class="hljs-variable language_">this</span>.<span class="hljs-property">themingService</span>.<span class="hljs-title function_">appearance</span>();
<span class="hljs-variable language_">this</span>.<span class="hljs-property">themingService</span>.<span class="hljs-title function_">resetAppearance</span>();</code></pre>
<p>Global settings apply throughout the application, including mounted controls and overlays. Color comes from the active Blocks palette and semantic tokens;
changing the palette does not require configuring a separate glass color scheme.</p>
<h2>Custom surfaces</h2>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">BxSurfaceDirective</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/effects&#x27;</span>;</code></pre>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">section</span> <span class="hljs-attr">bxSurface</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;custom-panel&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">h2</span>&gt;</span>Project settings<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>This surface inherits the global material.<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span></code></pre>
<p>Provide layout and padding using the existing Blocks styling helpers. The directive supplies the material and token-based default border and radius. Controls
and actionable surfaces get automatic hover/focus lighting; decorative containers receive nearby light without responding to hover themselves. Containing one
input does not turn a panel into an interactive surface. Wrappers inside <code>bx-form-field</code> retain field interaction; custom control wrappers outside a field can
opt in with <code>bxSurfaceInteractive</code>. Components can override the default border and radius with their existing tokens.</p>
<table>
<thead>
<tr>
<th>Input</th>
<th>Default</th>
<th>Local override</th>
</tr>
</thead>
<tbody><tr>
<td><code>bxSurfaceTranslucency</code></td>
<td>Global translucency</td>
<td>0\u20131</td>
</tr>
<tr>
<td><code>bxSurfaceGlassiness</code></td>
<td>Off unless selected</td>
<td><code>auto</code>, <code>off</code>, or <code>on</code>; baseline and accessibility settings take precedence</td>
</tr>
<tr>
<td><code>bxSurfaceInteractive</code></td>
<td>Automatic control/action detection</td>
<td>Boolean; explicitly enables or disables interaction lighting and press deformation</td>
</tr>
<tr>
<td><code>bxSurfaceEmission</code></td>
<td>Theme accent (error color in invalid fields)</td>
<td>CSS color override, or <code>false</code> to disable automatic emission while retaining press feedback</td>
</tr>
<tr>
<td><code>bxSurfaceFocusEmission</code></td>
<td>Fields: surface emission color; actions: keyboard focus only</td>
<td>Explicitly illuminate for any focus using this color</td>
</tr>
<tr>
<td><code>bxReducedTransparency</code></td>
<td>Global setting</td>
<td>Boolean</td>
</tr>
</tbody></table>
<p>Omit local inputs to keep the surface connected to application settings. A deliberate local override continues to take precedence until removed.</p>
<p>Disable automatic emission independently of press feedback and received lighting with <code>[bxSurfaceEmission]=&quot;false&quot;</code>. This also suppresses the default keyboard
focus emission. An explicit <code>bxSurfaceFocusEmission</code> can opt the surface back into focus-only emission. Hiding decoration with CSS opacity does not disable a
source in the lighting runtime.</p>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">bx-button</span> <span class="hljs-attr">bxSurface</span> [<span class="hljs-attr">surfaceEffects</span>]=<span class="hljs-string">&quot;false&quot;</span> [<span class="hljs-attr">bxSurfaceEmission</span>]=<span class="hljs-string">&quot;false&quot;</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;tonal&quot;</span>&gt;</span>Local interaction feedback<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span></code></pre>
<p>Here <code>[surfaceEffects]=&quot;false&quot;</code> lets the directive own the button&#39;s material without mounting a second surface. The <code>/components/surface</code> playground includes a
Blocks checkbox that switches automatic emission on and off.</p>
<h2>Glassiness and translucency</h2>
<p>Translucency controls tint and blur from 0 to 1, with a default of 0.5. Its material strength is <code>0.5 \xD7 value\xB2 + 0.35 \xD7 value\u2074</code>: zero retains the lightest
material tint, and the preceding midpoint now falls around 70% while both endpoints stay unchanged. The classic material ranges from 6% to about 72.5% tint;
active refraction uses the stronger readability floor described below. Reduce transparency remains the explicit opaque presentation.</p>
<p>Glassiness is an opt-in enhancement. Ordinary components keep the existing material. Select individual buttons or custom surfaces:</p>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">bx-button</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;icon&quot;</span> <span class="hljs-attr">glassiness</span>=<span class="hljs-string">&quot;auto&quot;</span> <span class="hljs-attr">aria-label</span>=<span class="hljs-string">&quot;Bookmark&quot;</span>&gt;</span>\u2026<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">section</span> <span class="hljs-attr">bxSurface</span> <span class="hljs-attr">bxSurfaceGlassiness</span>=<span class="hljs-string">&quot;auto&quot;</span>&gt;</span>\u2026<span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span></code></pre>
<p><code>themingService.setAppearance({ glassiness: &#39;auto&#39; })</code> sets the browser policy for selected elements; it never enables every surface. Automatic works on
supported browsers and preserves the existing look elsewhere. <code>off</code> is an application-wide switch. <code>on</code> allows testing SVG backdrop support on another browser
and bypasses automatic device hints; it cannot add missing rendering support. Enhanced returns to Automatic when Glassiness is Off, and the playground disables
that option until glassiness is enabled. Baseline, opaque intent fills, nested-surface guards and accessibility preferences still win. Asymmetric or elliptical
corners keep their existing material.</p>
<p>Automatic rendering uses one SVG backdrop pass per selected element, with the existing Blocks lighting. Enhanced adds the reference&#39;s reflection and bevel
layers. A surface can request <code>bxSurfaceQuality=&quot;enhanced&quot;</code>; the global baseline/device policy still applies. The overview&#39;s three feature cards and the toast
wrappers opt into Enhanced. Toasts are bounded by the existing maximum of four open notifications; applications can choose <code>glassQuality: &#39;auto&#39;</code> or
<code>glassiness: &#39;off&#39;</code> in toast settings. Hidden receivers suspend filter work, maps are shared by effective geometry, reflections reach at most 64 CSS pixels
beyond a surface, and reflection invalidation is rate limited.</p>
<p>Text, placeholders and icons retain their theme or component foreground colors as content moves underneath. Refraction uses a fixed readability backing instead
of sampling the backdrop to change text color. At the clearest slider setting its default tint is at least 72%, with 0.5px blur. Blur follows the slider from
0.5px through about 0.8px at the midpoint to 9.2px at maximum, preserving a sharper refractive appearance at low settings. Increasing translucency adds tint and
blur; the default midpoint is about 74.9% tint and the maximum about 89%. Active, selected and open-popup controls use at least 90% tint for their semantic
foregrounds. Component opacity constraints can request a stronger backing. Reduced transparency still supplies the fully opaque presentation.</p>
<p>Customize <code>--bx-refraction-min-opacity</code> (0.72), <code>--bx-refraction-min-blur</code> (0.5px), or <code>--bx-refraction-blur</code> for application-specific materials. Custom
backgrounds and foreground colors should preserve readability. Ambient edge lighting continues to sample the scene without changing text or icon colors.</p>
<p>Additional surface variables are <code>--bx-refraction-blur</code>, <code>--bx-refraction-saturation</code> (1.15), <code>--bx-refraction-reflection-opacity</code> (1), and the full renderer&#39;s
edge exposure variables. Existing <code>--bx-glass-blur</code>, <code>--bx-glass-surface</code>, <code>--bx-glass-opacity</code> and radius tokens still apply. CSS supplies the live backdrop;
TypeScript assembles cached grayscale PNG displacement maps in SVG. The Nordify MIT notice is retained. Standard and WebKit declarations are supplied, with
standard CSS for other engines.</p>
<p>The distributed <code>effects/effects.css</code> path is unchanged. Its source is <code>effects/effects.scss</code>; <code>npm run tools:build-effects</code> regenerates it, and normal build
scripts run this automatically. Explore the selected controls and slider at <code>/appearance</code>.</p>
<h3>Migration</h3>
<p>The former numeric <code>glassiness</code> setting is now <code>translucency</code>. Rename <code>bxSurfaceGlassiness</code> (numeric) to <code>bxSurfaceTranslucency</code>. The scalar CSS property is now
<code>--bx-translucency</code>. Persisted older preferences migrate automatically; normalized values use the new curve.</p>
<h2>Composition and motion</h2>
<p>Use a single backing per physical surface. For example, a menu owns the backing while menu-item content shares it; a form-field label does not need an extra
blurred card. Apply <code>bxTransition=&quot;fade&quot;</code> on a dropdown to fade its menu without resizing its contents. The fade runs on the material itself, preserving the
configured translucency and blur throughout the animation.</p>
<p>Buttons, links, native field surfaces and elements with actionable ARIA roles automatically illuminate their border and nearby surfaces on hover, press, or
keyboard focus. Editable field surfaces also illuminate for pointer focus; ordinary actions do not stay lit solely because a click left native focus on them.
Checked, pressed, selected, and current states keep the light enabled. Expanded popup triggers also retain light, while plain layout-disclosure controls do not
become selected just by expanding. Plain panels, sections and other decorative containers remain passive receivers, while their edges pick up subtle color from
nearby foreground and background content. The runtime samples CSS backgrounds and local pixels from visible images, video and canvas, then uses paint order,
depth and distance to shape the edge tint. Give a custom clickable element its appropriate role (such as <code>role=&quot;button&quot;</code>), or explicitly enable
<code>bxSurfaceInteractive</code> for a custom interaction. Use <code>bxSurfaceEmission</code> only to override the semantic color. The source is the element\u2019s geometry, never the
mouse coordinates.</p>
<p>Presses use the shared pressure spring for a soft inset sheen. Blocks buttons also compress their content inside a fixed hit area; quick taps still receive a
visible response. Pointer release/cancellation, keyboard release, focus loss, hidden documents, and teardown clear press state. Touch hover does not latch.
Reduced motion uses static press feedback.</p>
<p>There is no drag-to-reposition interaction in this iteration. Spatial highlights are a lightweight lighting approximation, while backdrop blur uses browser
compositing. These effects do not ray-trace arbitrary DOM content. Rendering quality can add supported enhancements, and baseline/solid modes remain available
for constrained devices.</p>
<h2>Accessibility and lifecycle</h2>
<p><code>BxA11yService</code> controls reduced motion. Reduced transparency, unsupported backdrop filters and forced colors use opaque surfaces. Give controls visible or
accessible labels independently of the glass decoration.</p>
<p>The directive initializes only in the browser, runs decorative updates outside Angular and tears down its resources when the host is destroyed. Do not directly
mount a second engine surface on a host already owned by the directive or a Blocks component.</p>
<h2>Framework independent engine</h2>
<p>The <code>@filip.mazev/blocks/effects/runtime</code> entry point included in Blocks exports the native DOM surface and transition APIs. Refer to its README for non-Angular
use. The native runtime does not import Angular.</p>
<h2>Playground</h2>
<p>Use <code>/appearance</code> to configure the entire application and <code>/components/surface</code> to inspect a custom surface.</p>
<p>Inputs, searches, selects, checkboxes, radio buttons and switches inherit automatic interaction lighting. Invalid fields use the error color. Projected native
controls wrapped in <code>bxSurface</code> inside <code>bx-form-field</code> receive the same field material, focus outline and invalid glow as packaged inputs. All emitters respect
overlay boundaries and occlusion; light does not pass through a modal into the page or another dialog.</p>
`,"projects/blocks/effects/directives/surface/README.md":`<h1>Custom appearance surfaces</h1>
<p>Apply Blocks&#39; shared decorative material to a custom container while preserving its native content and semantics.</p>
<h2>Import</h2>
<pre class="playground-code-block" tabindex="0" aria-label="typescript code example"><code class="hljs language-typescript"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">BxSurfaceDirective</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/effects&#x27;</span>;</code></pre>
<p>Add the directive to the consuming standalone component&#39;s imports.</p>
<h2>Usage</h2>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">section</span> <span class="hljs-attr">bxSurface</span> [<span class="hljs-attr">bxSurfaceTranslucency</span>]=<span class="hljs-string">&quot;0.5&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">h2</span>&gt;</span>Project settings<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>This panel inherits the active theme.<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span></code></pre>
<h2>API</h2>
<table>
<thead>
<tr>
<th>Input</th>
<th>Purpose</th>
</tr>
</thead>
<tbody><tr>
<td><code>bxSurfaceTranslucency</code></td>
<td>Optional local translucency on the shared 0\u20131 scale.</td>
</tr>
<tr>
<td><code>bxSurfaceGlassiness</code></td>
<td>Optional <code>auto</code>, <code>off</code>, or <code>on</code> refraction policy.</td>
</tr>
<tr>
<td><code>bxSurfaceQuality</code></td>
<td>Optional <code>auto</code>, <code>baseline</code>, or <code>enhanced</code> detail policy.</td>
</tr>
<tr>
<td><code>bxSurfaceInteractive</code></td>
<td>Optional override of automatic interaction feedback.</td>
</tr>
<tr>
<td><code>bxSurfaceEmission</code></td>
<td>Optional CSS color emitted toward nearby surfaces during interaction.</td>
</tr>
<tr>
<td><code>bxSurfaceFocusEmission</code></td>
<td>Optional CSS color emitted while a contained control has focus.</td>
</tr>
<tr>
<td><code>bxReducedTransparency</code></td>
<td>Optional opaque-material request.</td>
</tr>
</tbody></table>
<p>Omitted inputs inherit application/runtime policy. Export the directive as <code>bxSurface</code> when a template reference is needed.</p>
<h2>Appearance and customization</h2>
<p>Use shared semantic tokens and layout helpers for spacing, border, and radius. The <a href="components/surface">effects guide</a> describes material variables, global
configuration, browser policy, and refraction limits.</p>
<h2>Behavior and accessibility</h2>
<p>The directive mounts after browser rendering, updates when inputs or reduced-motion preferences change, and releases its controller on destruction. Decorative
feedback does not replace focus indicators or native control semantics. Global accessibility and rendering limits take precedence over requested effects.</p>
<h2>Playground</h2>
<p>Visit <code>/appearance</code> to configure and compare shared materials.</p>
`,"projects/blocks/effects/runtime/README.md":`<h1>Blocks effects runtime</h1>
<p>Framework independent glass surfaces, spatial lighting and overlay fades. Native DOM content keeps its layout, semantics and text rendering. This entry point
imports no Angular code; it is bundled inside Blocks alongside the Angular adapter and application-wide theme controls.</p>
<h2>Install and use</h2>
<pre class="playground-code-block" tabindex="0" aria-label="sh code example"><code class="hljs language-sh">npm install @filip.mazev/blocks</code></pre>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/effects/effects.css&#x27;</span>;
<span class="hljs-keyword">import</span> { configureAppearance, mountSurface, createGlassTransition } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/effects/runtime&#x27;</span>;

<span class="hljs-keyword">const</span> config = <span class="hljs-title function_">configureAppearance</span>(<span class="hljs-variable language_">document</span>.<span class="hljs-property">documentElement</span>, {
    <span class="hljs-attr">translucency</span>: <span class="hljs-number">0.5</span>,
    <span class="hljs-attr">quality</span>: <span class="hljs-string">&#x27;auto&#x27;</span>
});
<span class="hljs-keyword">const</span> buttonSkin = <span class="hljs-title function_">mountSurface</span>(button);
<span class="hljs-keyword">const</span> panelSkin = <span class="hljs-title function_">mountSurface</span>(panel);

<span class="hljs-comment">// The application or overlay library positions the panel before this call.</span>
<span class="hljs-keyword">const</span> transition = <span class="hljs-title function_">createGlassTransition</span>(button, panel);
<span class="hljs-keyword">await</span> transition.<span class="hljs-title function_">enter</span>();
config.<span class="hljs-title function_">update</span>({ <span class="hljs-attr">translucency</span>: <span class="hljs-number">0.45</span> }); <span class="hljs-comment">// All existing surfaces and body-mounted overlays update.</span>
<span class="hljs-keyword">const</span> result = <span class="hljs-keyword">await</span> transition.<span class="hljs-title function_">exit</span>();
<span class="hljs-keyword">if</span> (result === <span class="hljs-string">&#x27;finished&#x27;</span>) panel.<span class="hljs-property">hidden</span> = <span class="hljs-literal">true</span>;

<span class="hljs-comment">// At component/application teardown:</span>
transition.<span class="hljs-title function_">destroy</span>();
buttonSkin.<span class="hljs-title function_">destroy</span>();
panelSkin.<span class="hljs-title function_">destroy</span>();
config.<span class="hljs-title function_">destroy</span>();</code></pre>
<p><code>configureAppearance</code> owns one root scope, merges updates, and restores the attributes and inline properties it owned on destroy. Mount it on
<code>document.documentElement</code> to include overlays. Per-surface options override the global configuration; omitted options inherit it. There must be only one
configuration controller per root and one surface controller per element. <code>surface.update(options)</code> replaces that surface&#39;s local options so <code>{}</code> returns it to
global settings.</p>
<p>Setting application <code>quality: &#39;baseline&#39;</code> temporarily sets <code>glassiness: &#39;off&#39;</code>, including during initialization and partial updates. Switching back to
<code>quality: &#39;auto&#39;</code> or <code>&#39;enhanced&#39;</code> restores the requested glassiness policy. An explicit <code>glassiness</code> update replaces that preference, including while baseline
is selected. A previously requested <code>&#39;off&#39;</code> remains off and continues to prevent Enhanced rendering.</p>
<h2>Global material and theme contract</h2>
<p>The renderer defines no brand palette or spacing system. It uses the existing Blocks semantic tokens and preserves each component&#39;s border radius, size and
layout. Load the glass CSS once after your theme CSS, and set border radius on your native element when using the package outside Blocks.</p>
<p><code>mountSurface(element)</code> includes a default token-based border. Buttons, links, native field surfaces and actionable ARIA roles automatically illuminate their
border and nearby surfaces on interaction or an active ARIA state. Decorative containers receive nearby light without their own hover effect, even when they
contain a single input such as a slider. Only wrappers within <code>bx-form-field</code> infer interactivity from their input; other custom wrappers can opt in with
<code>interactive: true</code>. The default color is the theme accent, or the error color inside an invalid Blocks form field. Override <code>emission</code>/<code>focusEmission</code> for a
different semantic color; <code>interactive</code> explicitly overrides automatic control/action detection.</p>
<table>
<thead>
<tr>
<th>Setting</th>
<th>Values</th>
<th>Inherited CSS property</th>
</tr>
</thead>
<tbody><tr>
<td><code>translucency</code></td>
<td>0\u20131, default 0.5</td>
<td><code>--bx-translucency</code></td>
</tr>
<tr>
<td><code>quality</code></td>
<td><code>auto</code>, <code>baseline</code>, <code>enhanced</code></td>
<td>root <code>data-bx-glass-quality</code></td>
</tr>
<tr>
<td><code>glassiness</code></td>
<td><code>auto</code> (default), <code>off</code>, <code>on</code></td>
<td>root <code>data-bx-glassiness-mode</code>; only explicitly selected surfaces participate</td>
</tr>
<tr>
<td><code>reducedTransparency</code></td>
<td>boolean</td>
<td>root <code>data-bx-reduced-transparency</code></td>
</tr>
<tr>
<td><code>reducedMotion</code></td>
<td>boolean</td>
<td>root <code>data-bx-reduced-motion</code></td>
</tr>
</tbody></table>
<p>Translucency controls tint and blur together. Material strength is <code>m = 0.5 \xD7 translucency\xB2 + 0.35 \xD7 translucency\u2074</code>. Tint is <code>0.06 + 1.02m \u2212 0.28m\xB2</code>,
existing-material blur is <code>4 + 24m\xB2</code> px, and glassiness blur is <code>0.5 + 12m\xB2</code> px. The default translucency is 0.5; the preceding midpoint falls around 70% on
this scale. Both endpoints stay unchanged, and maximum classic tint is about 72.5%. Reduced transparency provides opaque surfaces without losing that
preference.</p>
<p>Opt in per element with <code>mountSurface(element, { glassiness: &#39;auto&#39; })</code>. Omitted surfaces keep their existing material.
<code>configureAppearance(root, { glassiness: &#39;auto&#39; })</code> is a browser policy for selected surfaces, not a global opt-in. Automatic uses one refraction pass on
supported browsers; unsupported engines keep the previous look. <code>on</code> permits testing another engine, while <code>off</code> disables selected enhancements. Local
<code>quality: &#39;enhanced&#39;</code> adds the full reflection/bevel treatment, subject to application baseline and device policy.</p>
<p>Foreground colors stay theme-owned. Refraction retains at least 72% tint for readable theme foregrounds. Blur ranges from 0.5px at the clearest setting to about
0.8px at the midpoint and 9.2px at maximum; low settings preserve sharper refraction while the tint supplies the backing. Component opacity constraints can
request more backing. No text-contrast sampling, foreground switching, grouping or per-control contrast subscriptions are mounted. The existing shared sampler
continues to supply decorative ambient edge lighting. See <a href="components/surface#glassiness-and-translucency">appearance effects</a> for material variables and
browser/accessibility fallbacks.</p>
<p>Local color aliases preserve component intent:</p>
<table>
<thead>
<tr>
<th>Glass alias</th>
<th>Blocks fallback</th>
</tr>
</thead>
<tbody><tr>
<td><code>--bx-glass-surface</code></td>
<td><code>--bx-bg-surface</code></td>
</tr>
<tr>
<td><code>--bx-glass-text</code></td>
<td><code>--bx-text-primary</code></td>
</tr>
<tr>
<td><code>--bx-glass-edge</code></td>
<td><code>--bx-border-subtle</code></td>
</tr>
<tr>
<td><code>--bx-glass-accent</code></td>
<td><code>--bx-primary</code></td>
</tr>
</tbody></table>
<p>For example, a success toast can set <code>--bx-glass-surface: var(--bx-bg-success)</code> and retain its established semantic appearance. Outside Blocks, system colors
supply neutral fallbacks.</p>
<h2>Spatial lighting and reflections</h2>
<p><code>getGlassLightRoot(element)</code> resolves the existing overlay or <code>data-bx-light-scope</code> boundary for passive emitters. Angular integrations can register and update
their emitters through <code>BxGlassLightingService</code>.</p>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { mountGlassScene } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/effects/runtime&#x27;</span>;

<span class="hljs-keyword">const</span> scene = <span class="hljs-title function_">mountGlassScene</span>(<span class="hljs-variable language_">document</span>.<span class="hljs-property">documentElement</span>, {
    <span class="hljs-attr">lights</span>: [{ <span class="hljs-attr">element</span>: lamp, <span class="hljs-attr">z</span>: <span class="hljs-number">180</span>, <span class="hljs-attr">color</span>: <span class="hljs-string">&#x27;var(--bx-primary)&#x27;</span>, <span class="hljs-attr">intensity</span>: <span class="hljs-number">1.2</span>, <span class="hljs-attr">radius</span>: <span class="hljs-number">640</span> }],
    <span class="hljs-attr">reflectors</span>: [
        { <span class="hljs-attr">element</span>: backgroundShape, <span class="hljs-attr">depth</span>: -<span class="hljs-number">100</span>, <span class="hljs-attr">intensity</span>: <span class="hljs-number">0.25</span> },
        { <span class="hljs-attr">element</span>: foregroundCard, <span class="hljs-attr">depth</span>: <span class="hljs-number">70</span>, <span class="hljs-attr">intensity</span>: <span class="hljs-number">0.35</span> }
    ]
});

<span class="hljs-comment">// After application code moves one of those elements:</span>
scene.<span class="hljs-title function_">refresh</span>();
<span class="hljs-comment">// Or replace the scene configuration:</span>
scene.<span class="hljs-title function_">update</span>({ <span class="hljs-attr">lights</span>: [{ <span class="hljs-attr">x</span>: <span class="hljs-number">300</span>, <span class="hljs-attr">y</span>: <span class="hljs-number">80</span>, <span class="hljs-attr">z</span>: <span class="hljs-number">220</span>, <span class="hljs-attr">intensity</span>: <span class="hljs-number">1</span> }] });
<span class="hljs-comment">// On teardown:</span>
scene.<span class="hljs-title function_">destroy</span>();</code></pre>
<p>Coordinates are viewport CSS pixels. An element supplies its live bounding-box center (<code>offsetX</code>/<code>offsetY</code>, from 0 to 1, can move the source within it); a
reflector uses its computed background color unless <code>color</code> is supplied. Signed <code>depth</code> places foreground and background reflection proxies relative to the
glass plane. Light distance, height and falloff affect the position and strength of the highlight. Scrolling, resizing, visibility changes and explicit
refreshes invalidate the scene; call <code>refresh()</code> after application-driven transforms or layout changes. For frequent updates that only move lights,
<code>reuseGeometry: true</code> in the scene options retains receiver measurements until those invalidations. Ordinary scene updates continue to remeasure receivers.</p>
<p>Every mounted glass surface also gets subtle, localized edge colors from the visible layers around its perimeter. Different sources keep their own colors;
ambient gradients crossfade beneath hover, focus, validation and explicit scene lights. The runtime samples nearby computed backgrounds and local pixels from
visible images, video and canvas, including <code>pointer-events: none</code> backdrops. Hit-test order and stacking layers distinguish foreground from background; depth
and distance reduce the contribution. CSS gradients are approximated from their color stops. If the browser blocks pixel access to cross-origin or tainted
media, the runtime falls back to the element&#39;s computed CSS colors. Asset loads, layout/scroll changes, and visual class/style changes refresh the samples; call
<code>refreshGlassLighting(element)</code> after application-driven changes to a custom surface&#39;s surroundings.</p>
<p>Portalled overlays can call <code>inheritGlassLighting(overlay, trigger)</code> before mounting their surfaces to receive light from the trigger&#39;s context. Call the
returned cleanup function after removing the overlay. Tooltips and menus use this connection to preserve dialog boundaries and receive nearby colors. Tooltips
remain transparent to pointer events.</p>
<p>For compound opaque shapes, <code>--bx-glass-unified-lighting: 1</code> exposes restrained samples of received lighting through <code>--bx-glass-lit-edge</code> and its <code>-top</code>,
<code>-right</code>, <code>-bottom</code>, and <code>-left</code> variants. Tooltip bodies retain their neutral backing and use a subtle spatial rim; arrows sample their facing side instead of
tinting the entire outline. Interior decorative lighting stays hidden to avoid coloring the fill or introducing seams.</p>
<p>This is a bounded, stylized lighting model. The browser&#39;s backdrop filter displays content behind glass; refraction rendering also displaces those pixels and
reflects surroundings into the edge. Raster lighting samples use a shared 32-by-32 scratch buffer cached across receivers and frames. The package does not
capture arbitrary DOM into a texture or implement ray tracing. Registered foreground/background objects remain available as explicit reflection proxies when a
more deliberate scene is needed. Gradient-backed reflectors can supply an explicit representative color.</p>
<h2>Overlay fades</h2>
<p>Overlays fade in over 180 ms and out over 140 ms using the Web Animations API. Their dimensions, clipping and text size remain unchanged. The fade composites
the material surface itself, keeping its configured blur and tint throughout. The surrounding positioning pane stays opaque so it does not create a backdrop
root that cuts off the page behind the glass. Native opacity interpolation avoids per-frame style mutations and lighting invalidation. Reversing an active fade
continues from its current opacity; the interrupted promise resolves to <code>cancelled</code>.</p>
<p>The transition temporarily owns the first material surface\u2019s <code>opacity</code> and the target\u2019s <code>visibility</code>. If no material is present, it fades the target. The
overlay positioner retains all geometry and transforms. Supply an already positioned target and destroy the transition when its overlay is removed. Both
endpoints must belong to the same document. <code>refresh()</code> remains a compatibility no-op because a fade requires no geometry measurements.</p>
<h2>Press feedback</h2>
<p>The delegated pointer and keyboard handlers drive the existing pressure spring, including a visible initial response for quick taps. A soft inset sheen sits
within the material\u2019s fixed clipping box. <code>--bx-glass-press</code> on the host exposes the current pressure to component content; Blocks buttons use it for a small
compression without moving their hit area or overlay origin. Controller-owned pressure writes are excluded from scene invalidation, so a press does not resample
the entire document every frame.</p>
<p>Pointer cancellation, matching key release, focus loss during a keyboard press, document/window blur, disabled state, and teardown clear pressure. Touch does
not latch hover emission, typing in a field does not activate keyboard pressure, and Space on a native link keeps its normal scrolling behavior. Reduced motion
applies static pressure feedback immediately and removes it on release.</p>
<h2>Performance and accessibility</h2>
<ul>
<li>One lazy animation clock and delegated press, hover-boundary and focus handling per document. Moving the pointer within an element does not change lighting.
Settled scenes schedule no animation frames.</li>
<li>Each receiver evaluates at most four explicit scene lights, chosen from all registered sources by visible contribution after exclusions, intensity and
distance falloff. Registration order does not discard nearby sources. Each scene retains a maximum of four reflectors, and at most 24 visible surfaces update
per frame. Interaction and active-state emitters share one delegated event stream and semantic-attribute observer; there is no observer per control.</li>
<li>Ambient geometry/style invalidations coalesce over 180 ms. A sampling frame handles at most four receivers, yielding after about 4 ms between receivers; a
single receiver/readback remains atomic. Sixteen perimeter probes discover nearby colors, and media inventories update on insertion rather than on each frame.</li>
<li>Static images and failed readbacks are cached until their assets change. Only media used by visible receivers is polled: live canvas/video checks begin at 500
ms and back off to 2 seconds while unchanged. Color-only changes reuse source bindings and geometry without hit testing; coverage or layout changes rediscover
the layers. Unchanged samples do not repaint. Image/video samples respect object fit and position.</li>
<li>Each surface uses two shared ambient edge layers for a 180 ms crossfade, instead of a DOM layer and animation per sample. Semantic lighting retains its
independent contributions and immediate interaction updates. Hidden documents, reduced-motion receivers and unused media stop live polling; removing the last
receiver tears down sampling. Static scenes schedule no polling or animation frames.</li>
<li>Nested surfaces retain their tint and reflection but skip additional backdrop filters.</li>
<li><code>baseline</code> uses one backdrop pass and a dynamic highlight. Supported <code>enhanced</code> rendering adds a narrow specular edge and colored reflection overlay; active
refraction adds SVG backdrop passes for refraction and rim reflection. <code>auto</code> chooses baseline for coarse pointers, data saving or low reported CPU
concurrency; capability checks guard enhancements. Hardware hints are conservative defaults, not measured frame-rate guarantees.</li>
<li>Operating-system reduced motion/transparency, increased contrast and forced colors receive simpler rendering. A global <code>reducedTransparency: false</code> leaves the
OS transparency preference enabled; explicit surface options can override it. An explicit reduced-motion setting takes precedence so Blocks can preserve its
existing manual accessibility override; omit it to follow the OS. Reduced motion finishes transitions immediately. Unsupported backdrop filtering or color
mixing produces an opaque fallback.</li>
<li>Backdrop filters still have a cost. Use one outer material for large sections, avoid full-screen stacked filtered panels, and profile actual target devices
before treating any frame-rate target as verified.</li>
</ul>
<p>See <code>../examples/index.html</code> for a native DOM demo. Serve the repository over HTTP after building the workspace; no framework runtime is required. Build with
<code>npm run build:blocks</code> at the workspace root; this builds all Blocks entry points and generates the native example\u2019s design tokens from Blocks. Browser
regressions live in <code>tools/browser</code>.</p>
<h3>Semantic lighting</h3>
<p><code>BxGlassLightingService</code> in the Angular adapter combines sources within a form or toast stack. Validation text illuminates nearby controls and removes its
source when the error clears. Toast light is anchored to the rendered progress bar\u2019s right edge, pauses with the toast, and illuminates adjacent notifications.
Its own glow uses that same measured edge; it has no independent progress animation. <code>excludeSource</code> or <code>excludeElement</code> lets a source render its own glow
separately. <code>observeGlassLighting</code> and <code>refreshGlassLighting</code> support custom decorative receivers, including the opaque circular slider thumb beside its native
range input.</p>
<p>A surface can opt into semantic emission with <code>mountSurface(element, { emission: &#39;var(--bx-primary)&#39; })</code>. Hover, press, or keyboard focus activates that element
as a source; its visible border and declared color determine the facing edges and corners of nearby surfaces. Source colors are resolved in the emitting element
before projection, so local custom properties and scoped themes retain their color on other receivers. Hover light has a 120 CSS-pixel falloff radius and stays
within the nearest main, aside, nav, dialog or overlay. Add <code>data-bx-light-scope</code> to isolate a custom region. Modal panels, native dialogs, popovers,
fixed/sticky panels, CDK overlays and toast stacks form separate lighting boundaries. Positioned stacking layers also constrain hover/focus light. Receiver hit
testing excludes covered surfaces, including rounded corners. Fully transparent CDK dismissal backdrops intercept input without occluding lighting; visible menu
panels and opaque backdrops still occlude. Opening or removing overlays invalidates prior highlights. Each source fades independently over 200 ms, including the
emitter\u2019s own colored border. Borders can combine several sources; retiring contributions fade out rather than jumping to a new source. Reduced motion applies
changes immediately. Source coordinates project directly into each receiver without a second position spring, pointer tracking, DOM capture, or a permanent
hover animation loop. Hover contributions use a bounded circular spread, so a large receiver does not stretch a small source across its entire border. Edge
falloff uses the distance to the receiver&#39;s perimeter even when a source projects inside its bounds.</p>
<p>Use <code>mountSurface(element, { emission: false })</code> to disable automatic hover, press, active-state and keyboard-focus emission while keeping press deformation and
received lighting. An explicit <code>focusEmission</code> still enables focus-only emission. Omission retains the existing theme accent/error default. Blocks menu rows use
local hover/pressed fills and focus outlines without becoming light sources.</p>
<p><code>inheritGlassLighting(overlay, origin)</code> shares incoming lighting with an overlay while retaining its physical boundary for outgoing sources. Controls inside an
overlay can illuminate nearby receivers in that overlay, but cannot cast light back into its trigger&#39;s page or parent overlay. This applies to dropdowns,
context menus, popovers, selection panels and passive tooltips. Theme inheritance remains independent of this direction of lighting.</p>
<p>Backdrop behavior follows the browser\u2019s <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/backdrop-filter">backdrop-root rules</a>. Visual
treatment follows <a href="https://developer.apple.com/design/human-interface-guidelines/materials">Apple\u2019s material guidance</a>: restrained highlights and readable
translucent layers.</p>
<p>Editable field surfaces emit while their native control has focus by default; action surfaces emit for keyboard focus only. An explicit <code>focusEmission</code> opts a
custom surface into illumination for any focus. Checked, pressed, selected, and current states retain emission. An expanded trigger retains emission when it
also declares <code>aria-haspopup</code>; ordinary layout expansion alone does not select a control. Focused fields remain active when a different button is hovered.
Decorative native-control receivers can pass their hit target as the third argument to <code>observeGlassLighting</code>.</p>
<p>Active borders stay painted when surfaces are partly clipped by the viewport, a scrolling container, or an overlapping header. Scrolling them back into view
preserves their lighting without a fade. A partly exposed source can still emit, but each receiving interior/edge location must be uncovered. A visible area
elsewhere on a receiver does not authorize light through an overlapping opaque panel. Fully covered surfaces remain excluded. Whole-source exposure checks share
a short-lived cache and use bounded fallback probes only when the preferred point is covered; projected receiver points use separate visibility checks.</p>
`,"projects/blocks/forms/README.md":`<h1>Forms</h1>
<p>Blocks fields use Angular 22 native signal control contracts and support Signal Forms, Reactive Forms, Template-driven Forms and standalone models. The library
supplies presentation, interaction and accessible feedback; Angular owns validation and submission.</p>
<h2>Import and basic usage</h2>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { signal } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { form, <span class="hljs-title class_">FormField</span> <span class="hljs-keyword">as</span> <span class="hljs-title class_">SignalFormField</span>, <span class="hljs-title class_">FormRoot</span>, required, email } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/forms/signals&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Button</span>, <span class="hljs-title class_">InputField</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/forms&#x27;</span>;

<span class="hljs-keyword">readonly</span> accountModel = <span class="hljs-title function_">signal</span>({ <span class="hljs-attr">email</span>: <span class="hljs-string">&#x27;&#x27;</span> });
<span class="hljs-keyword">readonly</span> account = <span class="hljs-title function_">form</span>(<span class="hljs-variable language_">this</span>.<span class="hljs-property">accountModel</span>, <span class="hljs-function">(<span class="hljs-params">p</span>) =&gt;</span> {
  <span class="hljs-title function_">required</span>(p.<span class="hljs-property">email</span>, { <span class="hljs-attr">message</span>: <span class="hljs-string">&#x27;Email is required.&#x27;</span> });
  <span class="hljs-title function_">email</span>(p.<span class="hljs-property">email</span>, { <span class="hljs-attr">message</span>: <span class="hljs-string">&#x27;Enter a valid email address.&#x27;</span> });
}, {
  <span class="hljs-attr">submission</span>: {
    <span class="hljs-attr">ignoreValidators</span>: <span class="hljs-string">&#x27;none&#x27;</span>,
    <span class="hljs-attr">action</span>: <span class="hljs-title function_">async</span> (field) =&gt; { <span class="hljs-keyword">await</span> <span class="hljs-variable language_">this</span>.<span class="hljs-property">api</span>.<span class="hljs-title function_">save</span>(<span class="hljs-title function_">field</span>().<span class="hljs-title function_">value</span>()); }
  }
});</code></pre>
<p>Import <code>SignalFormField</code>, <code>FormRoot</code>, and the used Blocks controls into the standalone component. Alias Angular&#39;s directive because Blocks also exports its
frame component as <code>FormField</code>.</p>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">form</span> [<span class="hljs-attr">formRoot</span>]=<span class="hljs-string">&quot;account&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">bx-input-field</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Email&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;email&quot;</span> [<span class="hljs-attr">formField</span>]=<span class="hljs-string">&quot;account.email&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">bx-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;submit&quot;</span> [<span class="hljs-attr">disabled</span>]=<span class="hljs-string">&quot;!account().valid()&quot;</span> [<span class="hljs-attr">loading</span>]=<span class="hljs-string">&quot;account().submitting()&quot;</span>&gt;</span>Save<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">form</span>&gt;</span></code></pre>
<h2>Validation and state</h2>
<p>Schema validation supplies <code>required</code>, numeric and length limits, pattern metadata, errors, pending, disabled and readonly state to compatible controls.
<code>valid()</code> is false while asynchronous validation is pending; <code>!invalid()</code> alone does not guarantee readiness.</p>
<p>Use <code>ignoreValidators: &#39;none&#39;</code> to gate the submission handler as well as the visible button while async validation is pending. Submission marks interactive
fields touched, prevents duplicate submissions, and applies returned server errors to their target fields.</p>
<p>Read field state through the Angular field tree. Derive UI with <code>computed()</code> and use <code>effect()</code> for side effects when validity or pending state changes.
Cross-field validators belong in the schema and can read related values. Blocks does not implement a second validation engine.</p>
<h2>Custom messages and visibility</h2>
<p>Shared inputs include <code>errorMessages</code>, <code>errorPriority</code>, <code>errorMode</code> (<code>first</code> or <code>all</code>), and <code>errorPolicy</code> (<code>touched</code>, <code>dirty</code>, <code>submitted</code>, <code>always</code>, or a
function receiving <code>IErrorState</code>). The default reveals invalid fields after touch or submission. A function can include custom group or application state. The
submitted policy tracks native form submission; when invoking submission programmatically outside the form element, pass the shared <code>submitted</code> input from
application state.</p>
<p>Message resolution prefers projected <code>bx-error</code> content, then field message overrides, schema messages, and configured defaults. <code>minlength</code>/<code>maxlength</code>
Reactive Forms keys and <code>minLength</code>/<code>maxLength</code> Signal Forms kinds are recognized. Resolvers receive the original error plus its parameter payload.</p>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">readonly</span> <span class="hljs-attr">messages</span>: <span class="hljs-title class_">ValidationMessages</span> = {
  <span class="hljs-attr">minLength</span>: <span class="hljs-function">(<span class="hljs-params">{ params }</span>) =&gt;</span> <span class="hljs-string">\`Use at least <span class="hljs-subst">\${params[<span class="hljs-string">&#x27;minLength&#x27;</span>] ?? params[<span class="hljs-string">&#x27;requiredLength&#x27;</span>]}</span> characters.\`</span>,
  <span class="hljs-attr">required</span>: { <span class="hljs-attr">key</span>: <span class="hljs-string">&#x27;validation.required&#x27;</span> }
};</code></pre>
<p>Put this declaration in the appropriate constants or types-supporting module according to the house rules. Translation-key overrides receive error parameters
through the existing adapter. Default messages can be replaced application-wide using <code>FormSettingsService.update()</code>; instance inputs take precedence. No
error-message map is mandatory when the schema supplies messages.</p>
<p>Projected <code>bx-error</code> supports rich content. <code>bx-hint</code>, <code>hint</code>, <code>hintEnd</code>, <code>bxPrefix</code>, and <code>bxSuffix</code> provide composable support and adornments. Supporting text
and errors are associated automatically through <code>aria-describedby</code>. Custom error regions announce changes politely.</p>
<h2>Compatibility and migration</h2>
<p>Existing <code>[formControl]</code>, <code>formControlName</code>, and <code>[(ngModel)]</code> component bindings remain supported. Text edits honor Reactive Forms blur and submit update
strategies. <code>reset()</code> on the owning field/form clears component interaction and parse state. Standalone value controls expose <code>[(value)]</code>; checkbox-style
controls expose <code>[(checked)]</code>.</p>
<p><code>BxBaseControl</code> remains available for existing external CVA subclasses; repeated touch reporting and schema error-message handling are corrected. New Blocks
controls use native signal contracts, without implementing CVA on the same component. The legacy individually bound radio remains available, while new forms
should bind a <code>RadioGroup</code> once around its options.</p>
<p>Native <code>input</code>, <code>textarea</code> and <code>select</code> elements can use <code>bxInput</code> inside <code>bx-form-field</code>. Consumer components can provide <code>BX_FORM_FIELD_CONTROL</code> with
<code>IFormFieldControl</code> to integrate their own state and focus behavior.</p>
<h2>Asynchronous options</h2>
<p>Single select and multiselect support application-owned requests, comparison, templates, incremental loading and error/retry behavior. Their scroll wrappers use
<code>LoadMoreDirective</code>, which can also be used by future paginated components. See the <a href="components/load-more">load-more guide</a> and
<a href="components/multi-select">multiselect guide</a>.</p>
<h2>Appearance and accessibility</h2>
<p>Controls follow Blocks semantic tokens, global theme/appearance configuration, reduced motion through <code>BxA11yService</code>, and reactive text resolution through
<code>BX_I18N</code>. Configuration supports filled/outlined appearance, label placement, required markers, floating-label behavior and supporting-text sizing. Readonly
and disabled states remain distinct in form state. All applicable controls accept <code>readOnly</code> as well as Angular Signal Forms&#39; lowercase <code>readonly</code> contract.
Either true value prevents edits while retaining focusability. Readonly controls use the default cursor and suppress pointer hover/click highlights and
interactive glass lighting while preserving their static appearance and keyboard focus styling. Focus origin uses the shared Angular CDK focus monitor. Changes
to readonly state update mounted surfaces, including projected native controls and grouped radios. Native select integration prevents interaction without
binding a nonexistent native readOnly property.</p>
<p>All existing form ellipsis and full-selection fit measurement use the public <code>TruncateDirective</code> from <code>@filip.mazev/blocks/primitives</code>. Set
<code>[tooltipOnTruncate]=&quot;false&quot;</code> on an input, search, select, or multiselect to retain truncation while supplying your own tooltip.
<code>FormSettingsService.update({ tooltipOnTruncate: false })</code> changes the application default; instance inputs take precedence. Tag and menu controls expose the
same opt-out. The public <code>TruncatedTextPipe</code> (<code>bxTruncatedText</code>) and <code>truncatedText()</code> helper support custom feedback. See the
<a href="components/truncate">shared truncation guide</a>.</p>
<h2>Playground</h2>
<p>Open <code>/components/signal-forms</code> for multiple controls, sync/async/cross-field rules, pending state, custom messages, server errors, disabled submission, dynamic
disabled/readonly, reset and reactive validation status. Use Fill valid data to exercise submission, or an email containing <code>server-error</code> to see a server
rejection.</p>
<p>The load-more and selection pages include fake APIs, failed requests, retry and small pages without scrollbars.</p>
`,"projects/blocks/forms/components/autocomplete/README.md":`<h1>Editable autocomplete</h1>
<p>An editable string control with optional suggestions. Free text remains valid; choosing a suggestion inserts its value. Integrates with the shared form-field
and signal, reactive and template-driven forms contracts.</p>
<h2>Public import</h2>
<pre class="playground-code-block" tabindex="0" aria-label="typescript code example"><code class="hljs language-typescript"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">Autocomplete</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/forms&#x27;</span>;</code></pre>
<h2>Usage</h2>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">bx-autocomplete</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Destination&quot;</span> [<span class="hljs-attr">options</span>]=<span class="hljs-string">&quot;suggestions&quot;</span> [(<span class="hljs-attr">value</span>)]=<span class="hljs-string">&quot;destination&quot;</span> /&gt;</span></code></pre>
<h2>API</h2>
<p><code>value</code> is a <code>string | null</code> model. <code>options</code> accepts <code>readonly IAutocompleteOption[]</code>, each with a unique string <code>value</code>, optional <code>ResolvableText label</code> and
optional <code>disabled</code>.</p>
<table>
<thead>
<tr>
<th>API</th>
<th>Default</th>
<th>Behavior</th>
</tr>
</thead>
<tbody><tr>
<td><code>externalFiltering</code></td>
<td>false</td>
<td>Application supplies filtered results</td>
</tr>
<tr>
<td><code>inlineCompletion</code></td>
<td>true</td>
<td>Shows an uncommitted gray suffix for the first matching suggestion</td>
</tr>
<tr>
<td><code>clearable</code></td>
<td>true</td>
<td>Shows the select-style clear action for nonempty text; hidden while readonly</td>
</tr>
<tr>
<td><code>clearLabel</code></td>
<td>Clear selection</td>
<td>Translated accessible name of the clear action</td>
</tr>
<tr>
<td><code>clearTooltip</code></td>
<td>clearLabel</td>
<td>Optional translated tooltip; empty string disables it</td>
</tr>
<tr>
<td><code>searching</code></td>
<td>false</td>
<td>Replaces stale results with a distinct loading state</td>
</tr>
<tr>
<td><code>loading</code></td>
<td>false</td>
<td>Application-owned initial/incremental request state</td>
</tr>
<tr>
<td><code>hasMore</code></td>
<td>false</td>
<td>Explicit remote exhaustion contract</td>
</tr>
<tr>
<td><code>loadError</code></td>
<td>absent</td>
<td>Retains options and offers explicit retry</td>
</tr>
<tr>
<td><code>loadMoreConfig / loadMoreTemplate</code></td>
<td>{} / absent</td>
<td>Shared <code>ILoadMoreConfig</code> and <code>ILoadMoreContext</code></td>
</tr>
<tr>
<td><code>loadMoreRevision</code></td>
<td>options array</td>
<td>Override the request-completion revision</td>
</tr>
<tr>
<td><code>optionTemplate</code></td>
<td>absent</td>
<td><code>TemplateRef&lt;IAutocompleteOptionContext&gt;</code>; keep its content noninteractive</td>
</tr>
<tr>
<td><code>emptyText / loadingText</code></td>
<td>descriptive text</td>
<td>Translatable status messages</td>
</tr>
<tr>
<td><code>autocomplete</code></td>
<td>off</td>
<td>Native browser autocomplete attribute</td>
</tr>
<tr>
<td><code>queryChange</code></td>
<td>\u2014</td>
<td>Text edits; application owns debounce and cancellation</td>
</tr>
<tr>
<td><code>optionSelected</code></td>
<td>\u2014</td>
<td>Selected <code>IAutocompleteOption</code></td>
</tr>
<tr>
<td><code>loadMore</code></td>
<td>\u2014</td>
<td><code>ILoadMoreRequest</code> with scroll, button or retry source</td>
</tr>
<tr>
<td><code>openedChange</code></td>
<td>\u2014</td>
<td>Boolean panel state changes</td>
</tr>
<tr>
<td><code>open() / close() / isOpen()</code></td>
<td>\u2014</td>
<td>Public panel controls</td>
</tr>
<tr>
<td><code>completeLoadMore()</code></td>
<td>\u2014</td>
<td>Releases a request with no loading cycle or revision change</td>
</tr>
<tr>
<td><code>clear()</code></td>
<td>\u2014</td>
<td>Clears text, marks touched, focuses the input and emits queryChange with an empty string; respects disabled/readonly</td>
</tr>
</tbody></table>
<p>Inherits labels, placeholders, hints, validation, disabled, lowercase <code>readonly</code> and consumer <code>readOnly</code>, focus and reset behavior. See the
<a href="components/signal-forms">forms guide</a>.</p>
<p>For a standalone component, import <code>Autocomplete</code> and declare:</p>
<pre class="playground-code-block" tabindex="0" aria-label="typescript code example"><code class="hljs language-typescript"><span class="hljs-keyword">public</span> <span class="hljs-attr">destination</span>: <span class="hljs-built_in">string</span> | <span class="hljs-literal">null</span> = <span class="hljs-string">&#x27;&#x27;</span>;
<span class="hljs-keyword">public</span> <span class="hljs-keyword">readonly</span> <span class="hljs-attr">suggestions</span>: <span class="hljs-keyword">readonly</span> <span class="hljs-title class_">IAutocompleteOption</span>[] = [
  { <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;Skopje&#x27;</span> }, { <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;Ohrid&#x27;</span> }, { <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;Unavailable&#x27;</span>, <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span> }
];</code></pre>
<p>Import <code>IAutocompleteOption</code> from the forms public entry point.</p>
<h2>Appearance and customization</h2>
<p><code>--bx-autocomplete-panel-height</code>, <code>--bx-autocomplete-panel-padding</code>, <code>--bx-autocomplete-background</code>, <code>--bx-autocomplete-radius</code> and
<code>--bx-autocomplete-completion-color</code>. The editable control reuses InputField&#39;s styling, including its height, typography, spacing, floating label, required
marker, focus state and filled/outlined appearance. Its inline completion shares the native input&#39;s metrics. Results use the same opaque backing and
backdrop-free option-panel styling as Select/MultiSelect. Options wrap, panel width follows the control, and height is constrained to the viewport. Custom
option templates receive the option, resolved label, active state and index.</p>
<h2>Behavior and accessibility</h2>
<p>Typing <code>Sk</code> can show a muted <code>opje</code> suffix for <code>Skopje</code>, without changing the form value. The hint appears only with the caret at the end, no selection, and an
available prefix match; it is hidden during replacement searches and IME composition. Accept it with the forward arrow (Right in LTR, Left in RTL), End or
Enter. The full selected suggestion becomes the value only on acceptance. Set <code>inlineCompletion</code> to false to use list suggestions alone.</p>
<p>Up/Down move between available suggestions while focus stays in the combobox; Enter selects; Escape closes. Other native editing keys retain their meaning. IME
composition does not issue partial searches. Tab visits the clear action when present, then the shared load-more/retry action, before continuing through the
page. Readonly preserves readable, focusable text and prevents editing.</p>
<p>The clear action reuses the shared field-clear appearance used by Select/MultiSelect. It remains disabled on disabled controls and is absent on readonly
controls. Clearing keeps focus in the editable input and lets the application refresh suggestions for the empty query. The trailing Blocks <code>chevron-down</code>
follows the open state and is replaced by a same-size decorative spinner during requests. Caret dimensions and gaps share Select&#39;s field-caret mixin; trailing
padding, clear-action placement and available text spacing match Select while preserving InputField&#39;s full height and vertical text padding.</p>
<p>For asynchronous results bind <code>[externalFiltering]=&quot;true&quot;</code>, <code>[searching]=&quot;searching()&quot;</code>, <code>[loading]=&quot;loading()&quot;</code>, <code>[hasMore]=&quot;hasMore()&quot;</code>,
<code>[loadError]=&quot;error()&quot;</code>, handle <code>(queryChange)</code> and forward <code>(loadMore)</code> to your request coordinator. Set loading before starting requests. Cancel or ignore
stale queries; retain loaded data and the failed cursor on failure; advance the cursor only on success. Clear errors when retrying. Searching suppresses old
results and pagination without implying exhaustion.</p>
<p>The shared LoadMoreDirective deduplicates requests, exposes an action when no scrollbar exists and preserves its button spinner during loading. Customize
normal/loading/retry text through <code>ILoadMoreConfig</code>; custom footer templates must use the guarded callback and preserve keyboard access.</p>
<p>The playground includes a runnable mock service with delayed initial/search/incremental requests, failure followed by explicit successful retry, empty results
and a compact page-size control for exercising overflow transitions. Its load-more/error/retry footer shares the select/multi-select styling, with tonal accent
actions. Source: <code>projects/playground/src/app/components/screens/library-components/essentials-examples/services/autocomplete-demo.service.ts</code>.</p>
<h2>Playground</h2>
<p><code>/components/autocomplete</code> includes live examples and shared appearance controls.</p>
`,"projects/blocks/forms/components/button/README.md":`<h1>Button</h1>
<p>An action control with Blocks intent colors, familiar variants and visible focus.</p>
<h2>Import</h2>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">Button</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/forms&#x27;</span>;</code></pre>
<p>Add the standalone component or directive to your component&#39;s <code>imports</code>.</p>
<h2>Usage</h2>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">bx-button</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;filled&quot;</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;save()&quot;</span>&gt;</span>Save changes<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span></code></pre>
<h2>API</h2>
<p><code>variant</code>: text, filled, tonal, icon, fab, mini-fab, extended-fab. <code>color</code>: primary, accent, success, danger, info, warn, grayscale. <code>outlined</code>, <code>elevated</code>,
<code>disabled</code>, and <code>interactive</code> control presentation and availability.</p>
<p><code>glassiness</code> is an explicit per-button opt-in: omitted buttons keep their existing material. Set <code>glassiness=&quot;auto&quot;</code> for supported browsers, or <code>&quot;on&quot;</code> to test
other engines. Application-wide Off, baseline quality, opaque intent fills and accessibility still take precedence. Automatic rendering uses one SVG backdrop
pass; Enhanced adds the full reflection/bevel treatment. Text and icons keep their semantic theme colors; active refraction maintains a minimum tint and blur
even at the clearest translucency setting.</p>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">bx-button</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;icon&quot;</span> <span class="hljs-attr">glassiness</span>=<span class="hljs-string">&quot;auto&quot;</span> <span class="hljs-attr">aria-label</span>=<span class="hljs-string">&quot;Bookmark&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">bx-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;bookmark&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span></code></pre>
<p>Use the active palette&#39;s second tone for supporting actions:</p>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">bx-button</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;tonal&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;accent&quot;</span>&gt;</span>Explore<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span></code></pre>
<h2>Appearance</h2>
<p>Appearance uses Blocks semantic colors, spacing, radius and motion tokens. Glass surfaces inherit the application configuration from <code>ThemingService</code>; adjusting
translucency updates existing components and overlays. Icon, tonal and outlined glass buttons follow the full translucency range without a minimum
button-specific tint. Content-only parts share their containing surface instead of adding another backdrop filter.</p>
<p>Interactive button variants illuminate their border and nearby glass on hover, press and keyboard focus. Text buttons do not emit light, but keep their
underline hover and focus outline. The same light remains active for <code>aria-pressed=&quot;true&quot;</code>, <code>aria-selected=&quot;true&quot;</code>, a current <code>aria-current</code> value, or an
expanded popup trigger (<code>aria-expanded=&quot;true&quot;</code> with <code>aria-haspopup</code>). Plain expansion controls, such as a rail collapse action, do not acquire selected styling
solely from <code>aria-expanded</code>. If an application used expansion as a toggle selection, use <code>aria-pressed</code> for that toggle instead. Primary and grayscale buttons
use the primary palette role; accent buttons use the second tone; success, danger, info and warning buttons use their semantic color. Disabled and
noninteractive buttons do not emit. Pointer focus alone does not keep an action illuminated after the pointer leaves; focus stays on the native control and
keyboard focus remains visible. Touch does not latch hover illumination. No additional effects directive or lighting configuration is needed.</p>
<p>Filled buttons retain their semantic background and paired foreground color across translucency settings and reduced transparency, including hover and press.
Filled actions use an opaque palette fill and a foreground matched to each interaction state. Surface lighting remains active; tonal and outlined actions retain
translucency. Text buttons have no background, border, shadow or backdrop blur; hover underlines the label and keyboard focus retains a visible outline. Tonal
and outlined buttons keep their glass backing.</p>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { inject } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ThemingService</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/core&#x27;</span>;

<span class="hljs-keyword">private</span> <span class="hljs-keyword">readonly</span> themingService = <span class="hljs-title function_">inject</span>(<span class="hljs-title class_">ThemingService</span>);

<span class="hljs-comment">// Application-wide, including open overlays.</span>
<span class="hljs-variable language_">this</span>.<span class="hljs-property">themingService</span>.<span class="hljs-title function_">setAppearance</span>({ <span class="hljs-attr">translucency</span>: <span class="hljs-number">0.5</span> });
<span class="hljs-comment">// Opaque presentation retains the same layout and component API.</span>
<span class="hljs-variable language_">this</span>.<span class="hljs-property">themingService</span>.<span class="hljs-title function_">setAppearance</span>({ <span class="hljs-attr">reducedTransparency</span>: <span class="hljs-literal">true</span> });</code></pre>
<p><code>BxA11yService</code> controls reduced motion; reduced transparency and forced colors receive opaque presentation. Glass is decorative and does not replace labels,
focus states, or semantic control states.</p>
<p>Press feedback applies to every <code>bx-button</code> variant. Translucent glass buttons deepen their inset reflection, gather a soft theme-colored sheen, and compress
their content slightly while held. Solid filled and floating actions use their semantic pressed color and the same content compression, without an extra sheen
or inset ring. The existing shared pressure spring returns the content and material to rest, including quick taps. The button\u2019s hit area, layout, and overlay
origin stay fixed. Mouse, touch, Enter, and Space activation use the same pressure state; release, cancellation, blur, or removal clears it. Text buttons and
<code>[surfaceEffects]=&quot;false&quot;</code> retain native press feedback without decorative lighting.</p>
<table>
<thead>
<tr>
<th>CSS variable</th>
<th>Default / behavior</th>
</tr>
</thead>
<tbody><tr>
<td><code>--bx-button-press-compression</code></td>
<td><code>0.035</code>; content shrinks by 3.5% at full pressure</td>
</tr>
<tr>
<td><code>--bx-button-press-offset</code></td>
<td><code>1px</code>; content moves down at full pressure</td>
</tr>
<tr>
<td><code>--bx-button-press-shadow</code></td>
<td>Semantic inset shadow for translucent buttons; <code>none</code> for solid filled/floating actions</td>
</tr>
<tr>
<td><code>--bx-glass-press-opacity</code></td>
<td><code>0.6</code> for translucent buttons; <code>0</code> for solid filled/floating actions</td>
</tr>
</tbody></table>
<p>Reduced motion keeps static pressed-color, inset, or underline feedback without compression or rebound. Reduced transparency retains each variant\u2019s pressed
appearance on the opaque surface. Forced colors uses a visible pressed outline, and disabled/noninteractive controls do not animate or illuminate.</p>
<h2>Behavior and accessibility</h2>
<p>Use the native <code>button[bx-button]</code> selector for actions and <code>a[bx-button]</code> with a real <code>href</code> for navigation. Give icon-only actions an accessible label.
Disabled actions do not emit an action through a click listener.</p>
<p><code>surfaceEffects</code> defaults to <code>true</code>. Set <code>[surfaceEffects]=&quot;false&quot;</code> for dense collections such as the icon catalog to retain Blocks button styling, theme
updates, focus, loading and disabled behavior without mounting per-button runtime glass lighting or deformation. It can be changed while mounted. An explicitly
applied <code>bxSurface</code> directive continues to own its surface independently.</p>
<h2>Playground</h2>
<p>Open <code>/components/button</code> for filled, tonal, text, icon, outlined, floating, disabled, and runtime-effects-disabled examples with observable action results.
Press and release with mouse, touch, Enter, or Space, then move the pointer away while leaving focus on the button to inspect its resting state. The global
Appearance controls also exercise theme, translucency, and reduced-motion changes.</p>
<h2>Asynchronous actions</h2>
<p><code>loading</code> enables a spinner, exposes <code>aria-busy</code>, and disables activation independently from the <code>disabled</code> input. When loading ends, the original disabled
state is retained. The spinner appears before the text and replaces a projected Blocks icon at its original size, including under page zoom or surface
transforms. An icon-only button retains its accessible name and dimensions.</p>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">bx-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;button&quot;</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;filled&quot;</span> [<span class="hljs-attr">loading</span>]=<span class="hljs-string">&quot;saving()&quot;</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;save()&quot;</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">bx-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;save&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;20&quot;</span> /&gt;</span>Save changes<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span></code></pre>
<p>For another icon implementation, import <code>ButtonIconDirective</code> and mark its element <code>bxButtonIcon</code>. Plain text buttons get an icon-sized spinner only during
loading. Spinner colors inherit the button foreground; <code>BxA11yService</code> removes rotation in reduced-motion mode.</p>
<p>Open <code>/components/button-loading</code> for fake asynchronous actions with and without icons. Application code owns the promise and loading state.</p>
`,"projects/blocks/forms/components/checkbox-indicator/README.md":`<h1>Checkbox indicator</h1>
<p>The reusable, decorative checkbox face used by Blocks checkbox controls and multiselect options. Supports unchecked, checked and partial selection using Blocks
surfaces and icons.</p>
<h2>Import</h2>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">CheckboxIndicator</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/forms&#x27;</span>;</code></pre>
<p>Add <code>CheckboxIndicator</code> to the standalone component&#39;s <code>imports</code>.</p>
<h2>Usage</h2>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;button&quot;</span> <span class="hljs-attr">role</span>=<span class="hljs-string">&quot;checkbox&quot;</span> [<span class="hljs-attr">attr.aria-checked</span>]=<span class="hljs-string">&quot;partial() ? &#x27;mixed&#x27; : selected()&quot;</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;toggleSelection()&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">bx-checkbox-indicator</span> [<span class="hljs-attr">checked</span>]=<span class="hljs-string">&quot;selected()&quot;</span> [<span class="hljs-attr">indeterminate</span>]=<span class="hljs-string">&quot;partial()&quot;</span> /&gt;</span>
    Select all locations
<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span></code></pre>
<p>Use <code>Checkbox</code> for a standalone form control. Use this indicator inside an existing interactive control whose semantics and events are already managed.</p>
<h2>API</h2>
<table>
<thead>
<tr>
<th>Input</th>
<th>Default</th>
<th>Behavior</th>
</tr>
</thead>
<tbody><tr>
<td><code>checked</code></td>
<td><code>false</code></td>
<td>Shows the Blocks check icon and accent face.</td>
</tr>
<tr>
<td><code>indeterminate</code></td>
<td><code>false</code></td>
<td>Shows the Blocks minus icon and accent face; takes precedence over checked.</td>
</tr>
<tr>
<td><code>invalid</code></td>
<td><code>false</code></td>
<td>Uses validation colors from the theme.</td>
</tr>
<tr>
<td><code>disabled</code></td>
<td><code>false</code></td>
<td>Suppresses the active surface finish; the owner provides disabled semantics and opacity.</td>
</tr>
<tr>
<td><code>emissive</code></td>
<td><code>false</code></td>
<td>Enables shared lighting for an owning interactive control. <code>Checkbox</code> enables it by default; multiselect indicators remain passive.</td>
</tr>
</tbody></table>
<h2>Appearance and customization</h2>
<p>Uses the same shared surface and choice finish as <code>Checkbox</code>. <code>--bx-checkbox-size</code> customizes its dimensions (default <code>1.125rem</code>). Semantic tokens control
colors and radius; theme and appearance changes update mounted indicators. Motion follows the shared accessibility styles. Forced colors and high contrast
flatten the decorative finish.</p>
<h2>Behavior and accessibility</h2>
<p>The indicator is always hidden from assistive technology, has no tab stop and does not handle pointer or keyboard input. With <code>emissive</code> enabled, its face
participates in hit testing so the shared engine can illuminate the owning control; events still reach that control. The owner must supply an accessible label,
visible focus, checked/mixed state, readonly/disabled handling and keyboard interaction. Multiselect uses listbox option semantics for each row and checkbox
semantics for the select-all action without nested interactive elements.</p>
<h2>Playground</h2>
<p>Open <code>/components/checkbox-indicator</code> for live unchecked, checked and partial states controlled by Blocks checkboxes. <code>/components/checkbox</code> and
<code>/components/multi-select</code> demonstrate its integration.</p>
`,"projects/blocks/forms/components/checkbox/README.md":`<h1>Checkbox</h1>
<p>A boolean choice integrated with Angular forms.</p>
<h2>Import</h2>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">Checkbox</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/forms&#x27;</span>;</code></pre>
<p>Add the standalone component or directive to your component&#39;s <code>imports</code>.</p>
<h2>Usage</h2>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">bx-checkbox</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Receive updates&quot;</span> [<span class="hljs-attr">formControl</span>]=<span class="hljs-string">&quot;updates&quot;</span> /&gt;</span></code></pre>
<h2>API</h2>
<p>The control uses Angular 22 native signal control contracts. Use <code>[formField]</code>, <code>[formControl]</code>, <code>formControlName</code>, <code>[(ngModel)]</code>, or standalone <code>[(checked)]</code>.
Shared presentation includes labels, hints, tooltips, required/readonly/disabled state, error policies and typed message resolvers. See the
<a href="components/signal-forms">forms guide</a> for validation, submission, translations and compatibility.</p>
<h2>Appearance</h2>
<p>Appearance uses Blocks semantic colors, spacing, radius and motion tokens. Glass surfaces inherit the application configuration from <code>ThemingService</code>; adjusting
translucency updates existing components and overlays. Content-only parts share their containing surface instead of adding another backdrop filter.</p>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { inject } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ThemingService</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/core&#x27;</span>;

<span class="hljs-keyword">private</span> <span class="hljs-keyword">readonly</span> themingService = <span class="hljs-title function_">inject</span>(<span class="hljs-title class_">ThemingService</span>);

<span class="hljs-comment">// Application-wide, including open overlays.</span>
<span class="hljs-variable language_">this</span>.<span class="hljs-property">themingService</span>.<span class="hljs-title function_">setAppearance</span>({ <span class="hljs-attr">translucency</span>: <span class="hljs-number">0.5</span> });
<span class="hljs-comment">// Opaque presentation retains the same layout and component API.</span>
<span class="hljs-variable language_">this</span>.<span class="hljs-property">themingService</span>.<span class="hljs-title function_">setAppearance</span>({ <span class="hljs-attr">reducedTransparency</span>: <span class="hljs-literal">true</span> });</code></pre>
<p><code>BxA11yService</code> controls reduced motion; reduced transparency and forced colors receive opaque presentation. Glass is decorative and does not replace labels,
focus states, or semantic control states.</p>
<h2>Behavior and accessibility</h2>
<p>Use a visible label. Space toggles the native input; focus and checked state remain visible in glass and solid modes. The control supports validation and
touched state.</p>
<h2>Playground</h2>
<p>Open <code>/components/checkbox</code> for a working example and its current value or action result.</p>
<h2>Selection configuration</h2>
<p><code>indeterminate</code> is a boolean model with <code>indeterminateChange</code>. <code>clickAction</code> supports <code>check-indeterminate</code> (default), <code>check</code>, and <code>noop</code>. <code>labelPosition</code> is
<code>before</code> or <code>after</code>. Use <code>checkedChange</code> or the Angular field value to observe changes. Required-true validation is reflected in required decoration and
accessible state.</p>
<p><code>emissive</code> defaults to <code>true</code>. Hover, keyboard focus, checked and indeterminate states use the shared accent lighting; invalid controls use validation colors.
Disabled and readonly checkboxes remain passive. Set <code>[emissive]=&quot;false&quot;</code> to keep the themed face without emitting light. Multiselect indicators are passive by
default and retain their row&#39;s selection appearance.</p>
<p>The checkbox face is shared with multiselect through the public <a href="components/checkbox-indicator">CheckboxIndicator</a> component. <code>--bx-checkbox-size</code> changes its
dimensions (default <code>1.125rem</code>).</p>
`,"projects/blocks/forms/components/error/README.md":`<h1>Error message</h1>
<p>A projected custom error message inside a form-field.</p>
<h2>Import</h2>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">BxError</span>, <span class="hljs-title class_">FormField</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/forms&#x27;</span>;</code></pre>
<p>Add the standalone component to your component&#39;s <code>imports</code>.</p>
<h2>Usage</h2>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">bx-form-field</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Reference&quot;</span> <span class="hljs-attr">forId</span>=<span class="hljs-string">&quot;reference&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;reference&quot;</span> <span class="hljs-attr">aria-describedby</span>=<span class="hljs-string">&quot;reference-error&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">bx-error</span> <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;reference-error&quot;</span>&gt;</span>Enter at least three characters.<span class="hljs-tag">&lt;/<span class="hljs-name">bx-error</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">bx-form-field</span>&gt;</span></code></pre>
<h2>API</h2>
<p><code>BxError</code> is a content projection component with selector <code>bx-error</code>. It has no inputs; the form field projects it into its error region.</p>
<h2>Appearance</h2>
<p>Appearance uses Blocks semantic colors, spacing, radius and motion tokens. Glass surfaces inherit the application configuration from <code>ThemingService</code>; adjusting
translucency updates existing components and overlays. Content-only parts share their containing surface instead of adding another backdrop filter.</p>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { inject } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ThemingService</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/core&#x27;</span>;

<span class="hljs-keyword">private</span> <span class="hljs-keyword">readonly</span> themingService = <span class="hljs-title function_">inject</span>(<span class="hljs-title class_">ThemingService</span>);

<span class="hljs-comment">// Application-wide, including open overlays.</span>
<span class="hljs-variable language_">this</span>.<span class="hljs-property">themingService</span>.<span class="hljs-title function_">setAppearance</span>({ <span class="hljs-attr">translucency</span>: <span class="hljs-number">0.5</span> });
<span class="hljs-comment">// Opaque presentation retains the same layout and component API.</span>
<span class="hljs-variable language_">this</span>.<span class="hljs-property">themingService</span>.<span class="hljs-title function_">setAppearance</span>({ <span class="hljs-attr">reducedTransparency</span>: <span class="hljs-literal">true</span> });</code></pre>
<p><code>BxA11yService</code> controls reduced motion; reduced transparency and forced colors receive opaque presentation. Glass is decorative and does not replace labels,
focus states, or semantic control states.</p>
<h2>Behavior and accessibility</h2>
<p>Render only when validation should be shown. Tie the input to the error ID with <code>aria-describedby</code> and update <code>aria-invalid</code> as needed. This component does not
run validation.</p>
<h2>Playground</h2>
<p>Open <code>/components/error</code> for a working example and its current value or action result.</p>
`,"projects/blocks/forms/components/form-field/README.md":`<h1>Form field</h1>
<p>A shared label, help text, validation and loading frame for controls.</p>
<h2>Import</h2>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">FormField</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/forms&#x27;</span>;</code></pre>
<p>Add the standalone component or directive to your component&#39;s <code>imports</code>.</p>
<h2>Usage</h2>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">bx-form-field</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Project name&quot;</span> <span class="hljs-attr">forId</span>=<span class="hljs-string">&quot;project&quot;</span> [<span class="hljs-attr">required</span>]=<span class="hljs-string">&quot;true&quot;</span> [<span class="hljs-attr">error</span>]=<span class="hljs-string">&quot;error&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;project&quot;</span> (<span class="hljs-attr">input</span>)=<span class="hljs-string">&quot;update($event)&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">bx-form-field</span>&gt;</span></code></pre>
<h2>API</h2>
<p><code>label</code>, <code>tooltip</code>, <code>error</code>: text or a translation key object. <code>forId</code>: the native input ID. <code>required</code>, <code>loading</code>: booleans. Projects the control and an
optional <code>bx-error</code>.</p>
<h2>Appearance</h2>
<p>Appearance uses Blocks semantic colors, spacing, radius and motion tokens. Glass surfaces inherit the application configuration from <code>ThemingService</code>; adjusting
translucency updates existing components and overlays. Content-only parts share their containing surface instead of adding another backdrop filter.</p>
<p><code>--bx-field-padding-bottom</code> overrides the field wrapper\u2019s bottom padding (default: <code>0</code>). Set it on a group of controls when additional row spacing is needed.</p>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { inject } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ThemingService</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/core&#x27;</span>;

<span class="hljs-keyword">private</span> <span class="hljs-keyword">readonly</span> themingService = <span class="hljs-title function_">inject</span>(<span class="hljs-title class_">ThemingService</span>);

<span class="hljs-comment">// Application-wide, including open overlays.</span>
<span class="hljs-variable language_">this</span>.<span class="hljs-property">themingService</span>.<span class="hljs-title function_">setAppearance</span>({ <span class="hljs-attr">translucency</span>: <span class="hljs-number">0.5</span> });
<span class="hljs-comment">// Opaque presentation retains the same layout and component API.</span>
<span class="hljs-variable language_">this</span>.<span class="hljs-property">themingService</span>.<span class="hljs-title function_">setAppearance</span>({ <span class="hljs-attr">reducedTransparency</span>: <span class="hljs-literal">true</span> });</code></pre>
<p><code>BxA11yService</code> controls reduced motion; reduced transparency and forced colors receive opaque presentation. Glass is decorative and does not replace labels,
focus states, or semantic control states.</p>
<h2>Behavior and accessibility</h2>
<p>Set <code>forId</code> to the actual input ID. Required decoration does not add validation to your control; apply the corresponding validator and native required
attribute. Associate custom error text with <code>aria-describedby</code> when projecting your own control.</p>
<p>The information button reveals short help on mouse hover or keyboard focus, and toggles it on touch tap. Tap elsewhere, scroll, or press Escape to dismiss it.
Its description also remains available to screen readers when the visual help is hidden. Keep essential field instructions visible rather than relying on the
help button.</p>
<h2>Playground</h2>
<p>Open <code>/components/form-field</code> for a working example and its current value or action result.</p>
<h2>Composable support and control registration</h2>
<p><code>hint</code>, <code>hintEnd</code>, projected <code>bx-hint</code>, <code>bxPrefix</code>, and <code>bxSuffix</code> add support and adornments. <code>subscriptSizing</code> selects fixed or dynamic reserved space.
Dynamic sizing collapses an empty supporting-text region and its gap, allowing controls to align with adjacent buttons and checkboxes. <code>hideRequiredMarker</code>
hides decoration without changing validation. <code>tooltipLabel</code> provides translated accessible help-button text.</p>
<p>A registered control supplies its state through <code>BX_FORM_FIELD_CONTROL</code> and <code>IFormFieldControl</code>, or the <code>control</code> input. The frame discovers projected
registrations, resolves error visibility, associates its supporting-text region and native control, and announces errors politely. The <code>bxInput</code> directive
supplies this registration for native controls.</p>
<p>Built-in convenience controls forward projected rich errors and hints into their internal frame. See the <a href="components/signal-forms">forms guide</a> for global error
policies, messages and form-system compatibility.</p>
`,"projects/blocks/forms/components/hint/README.md":`<h1>Field hint</h1>
<p>Composable content and native integration for the shared field frame.</p>
<h2>Import</h2>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">BxHint</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/forms&#x27;</span>;</code></pre>
<h2>Usage</h2>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">bx-input-field</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Reference&quot;</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">bx-hint</span>&gt;</span>Public identifier<span class="hljs-tag">&lt;/<span class="hljs-name">bx-hint</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">bx-input-field</span>&gt;</span></code></pre>
<h2>API and behavior</h2>
<p>Use <code>align=&quot;start&quot;</code> or <code>align=&quot;end&quot;</code> for projected supporting content. Convenience fields also accept <code>hint</code> and <code>hintEnd</code> as translated text. Descriptions are
connected automatically and replaced by visible errors.</p>
<h2>Appearance and accessibility</h2>
<p>Uses Blocks semantic tokens and the active <code>ThemingService</code> configuration. Customize through documented inputs, templates and CSS variables. Existing components
update when the application theme changes. Keyboard focus, forced colors, reduced transparency and <code>BxA11yService</code> reduced-motion preferences remain supported.</p>
<p>Text inputs accept <code>ResolvableText</code>: plain text or <code>{ key: &#39;translation.key&#39; }</code>. With <code>BX_I18N</code>, text is resolved reactively, including already-mounted controls
when the adapter&#39;s <code>version</code> signal changes. Plain text works without an adapter.</p>
<h2>Playground</h2>
<p>Open <code>/components/hint</code> for working field composition and compatibility examples.</p>
`,"projects/blocks/forms/components/input-field/README.md":`<h1>Input field</h1>
<p>A text, date or numeric input with a floating label and validation feedback.</p>
<h2>Import</h2>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">InputField</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/forms&#x27;</span>;</code></pre>
<p>Add the standalone component or directive to your component&#39;s <code>imports</code>.</p>
<h2>Usage</h2>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">bx-input-field</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Project name&quot;</span> [<span class="hljs-attr">formControl</span>]=<span class="hljs-string">&quot;name&quot;</span> /&gt;</span></code></pre>
<h2>API</h2>
<p>The control uses Angular 22 native signal control contracts. Use <code>[formField]</code>, <code>[formControl]</code>, <code>formControlName</code>, <code>[(ngModel)]</code>, or standalone <code>[(value)]</code>.
Shared presentation includes labels, hints, tooltips, required/readonly/disabled state, error policies and typed message resolvers. See the
<a href="components/signal-forms">forms guide</a> for validation, submission, translations and compatibility.</p>
<p><code>type</code>: text, password, email, number, date, time, datetime-local. Numeric controls accept <code>min</code>, <code>max</code>, and <code>step</code>.</p>
<h2>Appearance</h2>
<p>Appearance uses Blocks semantic colors, spacing, radius and motion tokens. Glass surfaces inherit the application configuration from <code>ThemingService</code>; adjusting
translucency updates existing components and overlays. Content-only parts share their containing surface instead of adding another backdrop filter.</p>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { inject } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ThemingService</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/core&#x27;</span>;

<span class="hljs-keyword">private</span> <span class="hljs-keyword">readonly</span> themingService = <span class="hljs-title function_">inject</span>(<span class="hljs-title class_">ThemingService</span>);

<span class="hljs-comment">// Application-wide, including open overlays.</span>
<span class="hljs-variable language_">this</span>.<span class="hljs-property">themingService</span>.<span class="hljs-title function_">setAppearance</span>({ <span class="hljs-attr">translucency</span>: <span class="hljs-number">0.5</span> });
<span class="hljs-comment">// Opaque presentation retains the same layout and component API.</span>
<span class="hljs-variable language_">this</span>.<span class="hljs-property">themingService</span>.<span class="hljs-title function_">setAppearance</span>({ <span class="hljs-attr">reducedTransparency</span>: <span class="hljs-literal">true</span> });</code></pre>
<p><code>BxA11yService</code> controls reduced motion; reduced transparency and forced colors receive opaque presentation. Glass is decorative and does not replace labels,
focus states, or semantic control states.</p>
<h2>Behavior and accessibility</h2>
<p>Use a label and an appropriate input type. Number input emits a number or null when empty. Validators should enforce application constraints, including minimum
and maximum values.</p>
<p>Labels stay on one line and truncate with an ellipsis when space is limited, without overlapping the value or trailing actions. A truncated label shows its full
text through the Blocks tooltip on hover, keyboard focus within the input, or a long press on the label. Resizing and language changes update truncation
automatically. The full label remains the input&#39;s accessible name, and required markers remain visible. Suffixes and numeric steppers share a trailing action
container aligned to the inline end.</p>
<p>Label ellipsis and measurement reuse the shared <a href="components/truncate">TruncateDirective</a>, including content, font, and viewport
updates. Set <code>[tooltipOnTruncate]=&quot;false&quot;</code> to disable the automatic label tooltip without disabling ellipsis. Its default inherits
<code>FormSettingsService.settings().tooltipOnTruncate</code>, then true.</p>
<h2>Playground</h2>
<p>Open <code>/components/input-field</code> for a working example and its current value or action result.</p>
<h2>Extended input API</h2>
<p><code>autocomplete</code>, <code>inputmode</code>, <code>spellcheck</code>, <code>name</code>, length and pattern constraints, <code>ariaLabelledBy</code>, <code>ariaDescribedBy</code> and explicit <code>id</code> reach the native
element. Supported text types include <code>tel</code>, <code>url</code> and <code>search</code>. <code>multiline</code> enables a textarea; <code>rows</code>, <code>autosize</code>, <code>minRows</code>, and <code>maxRows</code> configure it.
Composition input and autofill maintain floating-label behavior.</p>
<p>Number input preserves parse errors through Angular&#39;s <code>transformedValue</code>, keeps empty values as null, and supports keyboard-accessible steppers. <code>decreaseLabel</code>
and <code>increaseLabel</code> are translatable. <code>appearance</code> (<code>fill</code> or <code>outline</code>), <code>floatLabel</code>, <code>hideRequiredMarker</code>, <code>subscriptSizing</code>, <code>hint</code> and <code>hintEnd</code> customize
the frame. Prefix/suffix and rich errors can be projected directly into the convenience component.</p>
<p>Prefix/suffix content uses <code>--bx-field-adornment-padding</code> and <code>--bx-field-adornment-gap</code>, so text such as # and ID remains inset from the field edges.
Supporting text uses <code>--bx-field-support-padding</code>.</p>
`,"projects/blocks/forms/components/multi-select/README.md":`<h1>Multiselect</h1>
<p>Checkbox-style multiple selection with remote pagination and explicit select-all intent.</p>
<h2>Import</h2>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">MultiSelect</span>, <span class="hljs-title class_">IBxSelectOption</span>, <span class="hljs-title class_">ISelectAllChange</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/forms&#x27;</span>;</code></pre>
<h2>Usage</h2>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">bx-multi-select</span>
    <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Workspaces&quot;</span>
    [<span class="hljs-attr">options</span>]=<span class="hljs-string">&quot;options()&quot;</span>
    [<span class="hljs-attr">formField</span>]=<span class="hljs-string">&quot;account.workspaces&quot;</span>
    [<span class="hljs-attr">loading</span>]=<span class="hljs-string">&quot;loading()&quot;</span>
    [<span class="hljs-attr">hasMore</span>]=<span class="hljs-string">&quot;hasMore()&quot;</span>
    [<span class="hljs-attr">loadError</span>]=<span class="hljs-string">&quot;loadError()&quot;</span>
    [<span class="hljs-attr">isSearchable</span>]=<span class="hljs-string">&quot;true&quot;</span>
    [<span class="hljs-attr">externalFiltering</span>]=<span class="hljs-string">&quot;true&quot;</span>
    [<span class="hljs-attr">selectionScope</span>]=<span class="hljs-string">&quot;query()&quot;</span>
    (<span class="hljs-attr">search</span>)=<span class="hljs-string">&quot;search($event)&quot;</span>
    (<span class="hljs-attr">loadMore</span>)=<span class="hljs-string">&quot;loadNext($event)&quot;</span>
    (<span class="hljs-attr">selectAllIntentChange</span>)=<span class="hljs-string">&quot;handleSelectAll($event)&quot;</span> /&gt;</span></code></pre>
<h2>API</h2>
<p>Shares single-select options, comparison, templates, field presentation and pagination inputs. Bind <code>[formField]</code>, <code>[formControl]</code>, <code>formControlName</code>,
<code>[(ngModel)]</code>, or standalone <code>[(value)]</code>. Form models should initialize the field with <code>[]</code>.</p>
<p><code>showSelectAll</code> defaults to true. <code>selectAllLabel</code> is translatable. <code>selectAll</code> is a boolean model for intent; <code>selectAllChange</code> is its boolean model event.
<code>selectAllIntentChange</code> emits the detailed <code>ISelectAllChange&lt;T&gt;</code> with selected intent, scope, loaded values and reason. <code>selectionScope</code> defaults to the current
search term.</p>
<p><code>selectionChange</code> emits <code>{ value, source }</code>; sources distinguish <code>user</code>, <code>select-all</code>, and automatic <code>page</code> selection. Standard value changes remain available
through the chosen Angular form API or <code>valueChange</code>.</p>
<h2>Select-all semantics</h2>
<p>Enabling select all selects eligible loaded options. Future eligible options in the same scope are selected as pages arrive. Disabled options and disabled
groups are excluded.</p>
<p>Unchecking an option disables select-all intent, removes only that value, retains other selections, and emits an <code>item-deselected</code> intent event. Future pages
are no longer automatically selected. Explicitly turning select all off removes eligible current-scope selections while retaining unrelated selections.</p>
<p>A scope change ends select-all intent and emits <code>scope-change</code>, retaining explicit selections. Reset clears intent and emits <code>reset</code>. Loaded selected values are
finite: the application uses intent plus scope when an API needs to select the entire remote result set. Do not send the loaded array as if it enumerated every
remote record.</p>
<h2>Behavior</h2>
<p>The panel stays open while selecting. Arrow keys, Home/End, typeahead, Enter/Space, Escape and Tab support keyboard interaction. Visual checkboxes are
non-interactive indicators inside listbox options, avoiding nested checkbox focus targets. <code>compareWith</code> supports stable object-value identity across API
responses.</p>
<p>After the closing transition completes, the shared selection base releases the panel overlay and its tracking resources. Reopening resolves the current
ordinary/top-layer context while retaining the selected values and search term. Top-layer panels use measured positioning to follow nested scrolling.</p>
<p>Pagination and failure/retry use the shared <a href="components/load-more">load-more directive</a>. Existing items stay visible during incremental requests
and after failed pages. The application owns request cancellation and page/cursor state.</p>
<h2>Appearance and accessibility</h2>
<p>Uses Blocks semantic tokens and the active <code>ThemingService</code> configuration. Customize through documented inputs, templates and CSS variables. Existing components
update when the application theme changes. Keyboard focus, forced colors, reduced transparency and <code>BxA11yService</code> reduced-motion preferences remain supported.</p>
<p>Text inputs accept <code>ResolvableText</code>: plain text or <code>{ key: &#39;translation.key&#39; }</code>. With <code>BX_I18N</code>, text is resolved reactively, including already-mounted controls
when the adapter&#39;s <code>version</code> signal changes. Plain text works without an adapter.</p>
<h2>Playground</h2>
<p>Open <code>/components/multi-select</code>. Enable select all, load another page, deselect one item and load again. Selection and intent events are shown separately. The
page includes fake requests, failure/retry, page-size controls and live translation changes.</p>
<h2>Selected-value summaries</h2>
<p><code>allSelectedText</code> replaces the listed values while select-all intent is enabled, for example <code>All locations</code> or <code>{ key: &#39;locations.all&#39; }</code>. This is separate
from <code>selectAllLabel</code>, which names the select-all action inside the panel.</p>
<p><code>summaryThreshold</code> defaults to 2 and is clamped to a minimum of 2. More selections than the threshold use <code>selectedCountText</code>, whose default is
<code>{count} selected</code>. Supply <code>{count} locations selected</code> or a translation key; the translation adapter receives <code>{ count }</code>.</p>
<p>When at least two selected labels cannot fit the available width, the count summary is also used below the configured threshold. A tooltip on hover, keyboard
focus, or touch-and-hold exposes the full loaded selection. A custom <code>triggerTemplate</code> remains available for completely custom presentation.</p>
<p>The searchable playground includes 24 locations, tag-display controls and a summary-threshold control next to the page-size selector. Search terms remain
visible and consistent with their results after closing and reopening the panel. The trigger&#39;s caret slot displays busy state without changing its dimensions.</p>
<h2>Tags</h2>
<p>Set <code>selectionDisplay=&quot;tags&quot;</code> to use the separate Blocks <code>Tag</code> component for selected values. <code>visibleTagCount</code> defaults to one; additional selections are
represented by <code>tagOverflowText</code> (<code>+{count}</code> by default) with a tooltip listing their names. Customize ordinary tags with <code>tagConfig</code>, individual options with
<code>option.tagConfig</code>, and the overflow tag with <code>overflowTagConfig</code>. Embedded tags have no separate tab stop; the combobox supplies the full selection description
for keyboard access. <code>allSelectedText</code> remains the caption when select-all intent is active.</p>
<p>An ordinary tag automatically shows its full label on hover or touch-and-hold only when that label is clipped. Explicit tooltip descriptions and overflow-tag
lists remain available independently of clipping. The combobox retains the complete selection tooltip for keyboard users, including a single clipped tag. In tag
mode, touch tooltips belong to the tags so they do not overlap a parent tooltip. Labels, plain values, and the full-selection fit test all reuse
<code>TruncateDirective</code>. <code>[tooltipOnTruncate]=&quot;false&quot;</code> disables automatic selection/truncation tooltips while preserving clipping, summary behavior, and explicit
overflow-tag descriptions. This setting inherits <code>FormSettingsService</code> defaults and also suppresses automatic tooltips on ordinary embedded tags.</p>
<h2>Search loading</h2>
<p>The debounce/request period hides pagination actions and old results. Provide <code>loadingLabel</code> for centered loading text; without it, a simple centered spinner is
shown. <code>loadingAriaLabel</code> supplies a translatable accessible name. Once results arrive, filtered pages can be paginated normally.</p>
<h2>Option spacing</h2>
<p>Rounded option rows have a small gap, shared by select and multiselect. Set <code>--bx-select-option-gap</code> on the control to customize it (default: Blocks
<code>spacing(1)</code>). All built-in selection and caret icons use Blocks <code>Icon</code>; searching uses Blocks <code>SearchInput</code>.</p>
<p>Option and select-all checkboxes reuse the public <code>CheckboxIndicator</code> component, including its indeterminate state and themed finish. Indicators remain
non-emissive; the option button owns selection and interaction. Form checkboxes outside multiselect enable emission by default. <code>--bx-checkbox-size</code> customizes
indicator dimensions without changing keyboard behavior.</p>
<p>The select-all checkbox also shows checked when every selectable loaded row is individually selected, including deselecting and reselecting the last missing
row. Disabled rows and disabled groups do not contribute to this state. Clicking a checked header clears the eligible loaded rows. This finite visual state does
not activate remote select-all intent: future pages remain unselected unless the explicit select-all action enabled intent.</p>
<h2>Clearing selection</h2>
<p>A Blocks \xD7 icon button appears before the dropdown/loading indicator, with equal spacing between the action and the selected text/tags and between the two
icons, when a selection exists. Its reserved space prevents overlap with selected text or tags. Set <code>[clearable]=&quot;false&quot;</code> to hide it, or use <code>clearLabel</code>
(<code>ResolvableText</code>, default <code>&#39;Clear selection&#39;</code>) to customize its accessible name. <code>clearTooltip</code> accepts its own <code>ResolvableText</code>, defaults to the resolved
<code>clearLabel</code> when omitted, and can be set to an empty string to hide the tooltip.</p>
<p><code>clearSelection()</code> performs the same guarded action programmatically. Clearing closes the panel, marks the control touched and returns focus to the combobox; it
preserves Angular&#39;s blur/submit update policy. The action is hidden while readonly and disabled when the control is disabled. Keyboard users can Tab to the
action and activate it with Enter or Space.</p>
<p>Clearing writes <code>[]</code>, disables future-page select-all intent and emits <code>selectionChange</code> with <code>{ value: [], source: &#39;clear&#39; }</code>. If intent was enabled,
<code>selectAllIntentChange</code> also emits with <code>selected: false</code> and <code>reason: &#39;clear&#39;</code>. Required controls continue to use the existing validation policy.</p>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">bx-multi-select</span> [<span class="hljs-attr">options</span>]=<span class="hljs-string">&quot;locations&quot;</span> [<span class="hljs-attr">clearLabel</span>]=<span class="hljs-string">&quot;{ key: &#x27;locations.clearAction&#x27; }&quot;</span> [<span class="hljs-attr">clearTooltip</span>]=<span class="hljs-string">&quot;{ key: &#x27;locations.clearTooltip&#x27; }&quot;</span> /&gt;</span></code></pre>
<p>Use <code>[clearable]=&quot;false&quot;</code> for required selections that must retain a value or for lists with an explicit \u201CNone\u201D option. This input controls the clear action
independently of validation; <code>required</code> continues to enforce form validity. The select/multiselect playground includes an \u201CAllow clearing selection\u201D switch;
configuration controls such as page size deliberately hide the clear action.</p>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">bx-multi-select</span> [<span class="hljs-attr">options</span>]=<span class="hljs-string">&quot;options&quot;</span> [<span class="hljs-attr">clearable</span>]=<span class="hljs-string">&quot;false&quot;</span> /&gt;</span></code></pre>
<h2>Select-all tooltip</h2>
<p><code>allSelectedTooltip</code> accepts the tooltip text for active <code>selectAll</code> intent, including the trigger&#39;s keyboard tooltip and the \u201Call selected\u201D tag&#39;s hover/touch
tooltip. Pass <code>false</code> or an empty string to disable both. This also prevents the tag&#39;s automatic clipped-label tooltip or <code>tagConfig.tooltip</code> from replacing
disabled feedback. Ordinary finite selections keep their existing tooltip behavior when intent ends.</p>
<p>Omitting the input preserves the list of loaded selected labels, subject to <code>tooltipOnTruncate</code>. Those labels describe only loaded items. For remote \u201CALL\u201D
selection, disable that feedback or supply application-owned text representing the full selectable scope:</p>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">bx-multi-select</span> [<span class="hljs-attr">options</span>]=<span class="hljs-string">&quot;loadedLocations&quot;</span> [(<span class="hljs-attr">value</span>)]=<span class="hljs-string">&quot;selected&quot;</span> [(<span class="hljs-attr">selectAll</span>)]=<span class="hljs-string">&quot;allSelected&quot;</span> <span class="hljs-attr">allSelectedText</span>=<span class="hljs-string">&quot;All locations&quot;</span> [<span class="hljs-attr">allSelectedTooltip</span>]=<span class="hljs-string">&quot;false&quot;</span> /&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">bx-multi-select</span>
    [<span class="hljs-attr">options</span>]=<span class="hljs-string">&quot;loadedLocations&quot;</span>
    [(<span class="hljs-attr">value</span>)]=<span class="hljs-string">&quot;selected&quot;</span>
    [(<span class="hljs-attr">selectAll</span>)]=<span class="hljs-string">&quot;allSelected&quot;</span>
    <span class="hljs-attr">allSelectedText</span>=<span class="hljs-string">&quot;All locations&quot;</span>
    [<span class="hljs-attr">allSelectedTooltip</span>]=<span class="hljs-string">&quot;allLocationsTooltip()&quot;</span> /&gt;</span></code></pre>
<p>Compute <code>allLocationsTooltip</code> in the application using its API&#39;s total of selectable results. For example, return
<code>&#39;All &#39; + pagination.selectableTotal + &#39; locations&#39;</code> or call the application&#39;s translation service with the total. Exclude disabled options and disabled groups
across the whole result set, including unloaded pages. Do not subtract only the disabled items on the current page or substitute the loaded selected count for a
remote total. If the API does not provide enough information, disable the tooltip or use a general description such as \u201CAll matching locations\u201D.</p>
<p>The component accepts <code>ResolvableText</code>, so simple translation keys also work and react to <code>BX_I18N</code> version changes. Interpolation, pluralization, total
calculation and any more complex translation logic belong to the application; the component has no tooltip-parameters or pagination-total API. Updating the
supplied text refreshes mounted tooltips. Explicit custom tooltips work independently of automatic <code>tooltipOnTruncate</code> feedback; <code>false</code> disables only
select-all feedback.</p>
<p>The playground defaults to application-formatted text using the fake API&#39;s <code>selectableTotal</code>: 23 selectable locations across 24 results, excluding disabled
Vienna even before its page loads. The total follows search scope. <strong>Select-all tooltip</strong> also demonstrates custom finished text, disabled feedback and the
optional loaded-label compatibility behavior, in text and tag display.</p>
`,"projects/blocks/forms/components/radio-button/README.md":`<h1>Radio</h1>
<p>A single choice within a named group.</p>
<h2>Import</h2>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">Radio</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/forms&#x27;</span>;</code></pre>
<p>Add the standalone component or directive to your component&#39;s <code>imports</code>.</p>
<h2>Usage</h2>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">bx-radio</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Daily&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;frequency&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;daily&quot;</span> [<span class="hljs-attr">formControl</span>]=<span class="hljs-string">&quot;frequency&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">bx-radio</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Weekly&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;frequency&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;weekly&quot;</span> [<span class="hljs-attr">formControl</span>]=<span class="hljs-string">&quot;frequency&quot;</span> /&gt;</span></code></pre>
<h2>API</h2>
<p>Legacy individually bound radios support <code>[formControl]</code>, <code>formControlName</code>, and <code>[(ngModel)]</code>. For new forms, bind a <code>RadioGroup</code> with <code>[formField]</code> or an
existing Angular form directive, and keep each radio value as its option value. See the <a href="components/radio-group">radio-group guide</a>.</p>
<p><code>value</code> is required and identifies this option. <code>name</code> groups the native radio inputs.</p>
<h2>Appearance</h2>
<p>Appearance uses Blocks semantic colors, spacing, radius and motion tokens. Glass surfaces inherit the application configuration from <code>ThemingService</code>; adjusting
translucency updates existing components and overlays. Content-only parts share their containing surface instead of adding another backdrop filter.</p>
<p>Selected radios keep emitting the theme color after pointer release and blur. Hovering the circle or its label highlights the surface and emits color; disabled
controls do neither.</p>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { inject } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ThemingService</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/core&#x27;</span>;

<span class="hljs-keyword">private</span> <span class="hljs-keyword">readonly</span> themingService = <span class="hljs-title function_">inject</span>(<span class="hljs-title class_">ThemingService</span>);

<span class="hljs-comment">// Application-wide, including open overlays.</span>
<span class="hljs-variable language_">this</span>.<span class="hljs-property">themingService</span>.<span class="hljs-title function_">setAppearance</span>({ <span class="hljs-attr">translucency</span>: <span class="hljs-number">0.5</span> });
<span class="hljs-comment">// Opaque presentation retains the same layout and component API.</span>
<span class="hljs-variable language_">this</span>.<span class="hljs-property">themingService</span>.<span class="hljs-title function_">setAppearance</span>({ <span class="hljs-attr">reducedTransparency</span>: <span class="hljs-literal">true</span> });</code></pre>
<p><code>BxA11yService</code> controls reduced motion; reduced transparency and forced colors receive opaque presentation. Glass is decorative and does not replace labels,
focus states, or semantic control states.</p>
<h2>Behavior and accessibility</h2>
<p>Use the same form control and name for mutually exclusive options, distinct values, and visible labels. A fieldset with a legend gives the group an accessible
name.</p>
<h2>Playground</h2>
<p>Open <code>/components/radio</code> for a working example and its current value or action result.</p>
`,"projects/blocks/forms/components/radio-group/README.md":`<h1>Radio group</h1>
<p>Owns one typed form value, group labeling, validation and disabled/readonly state for radio options.</p>
<h2>Import</h2>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">RadioGroup</span>, <span class="hljs-title class_">Radio</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/forms&#x27;</span>;</code></pre>
<h2>Usage</h2>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">bx-radio-group</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Plan&quot;</span> [<span class="hljs-attr">formField</span>]=<span class="hljs-string">&quot;account.plan&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">bx-radio</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Personal&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;personal&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">bx-radio</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Team&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;team&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">bx-radio-group</span>&gt;</span></code></pre>
<h2>API</h2>
<p>Bind the group through <code>[formField]</code>, <code>[formControl]</code>, <code>formControlName</code>, <code>[(ngModel)]</code>, or standalone <code>[(value)]</code>. Individual options retain their option
<code>value</code>; avoid binding both the group and its children to form controls.</p>
<p>Shared field inputs configure labels, hints, errors, visibility policy, readonly and required state. The group generates a shared native name unless <code>name</code> is
provided. Legacy individually bound radio controls remain supported.</p>
<h2>Behavior</h2>
<p>Native radio semantics provide arrow navigation and one selected option. A disabled group disables its children; readonly blocks changes. Validation is
presented once at group level. Focus delegation targets an available native radio.</p>
<h2>Appearance and accessibility</h2>
<p>Uses Blocks semantic tokens and the active <code>ThemingService</code> configuration. Customize through documented inputs, templates and CSS variables. Existing components
update when the application theme changes. Keyboard focus, forced colors, reduced transparency and <code>BxA11yService</code> reduced-motion preferences remain supported.</p>
<p>Text inputs accept <code>ResolvableText</code>: plain text or <code>{ key: &#39;translation.key&#39; }</code>. With <code>BX_I18N</code>, text is resolved reactively, including already-mounted controls
when the adapter&#39;s <code>version</code> signal changes. Plain text works without an adapter.</p>
<h2>Playground</h2>
<p>Open <code>/components/radio-group</code>, where the group participates in the complete Signal Forms example.</p>
`,"projects/blocks/forms/components/range-slider/README.md":`<h1>Range slider</h1>
<p>Two constrained range thumbs bound to a <code>[number, number]</code> form value.</p>
<h2>Import</h2>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">RangeSlider</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/forms&#x27;</span>;</code></pre>
<h2>Usage</h2>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">bx-range-slider</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Budget&quot;</span> [(<span class="hljs-attr">value</span>)]=<span class="hljs-string">&quot;range&quot;</span> [<span class="hljs-attr">min</span>]=<span class="hljs-string">&quot;0&quot;</span> [<span class="hljs-attr">max</span>]=<span class="hljs-string">&quot;100&quot;</span> [<span class="hljs-attr">step</span>]=<span class="hljs-string">&quot;10&quot;</span> [<span class="hljs-attr">discrete</span>]=<span class="hljs-string">&quot;true&quot;</span> [<span class="hljs-attr">showTickMarks</span>]=<span class="hljs-string">&quot;true&quot;</span> /&gt;</span></code></pre>
<h2>API</h2>
<p>Supports Angular forms and standalone value binding. <code>min</code>, <code>max</code>, and <code>step</code> configure the range. <code>discrete</code> shows formatted values; <code>displayWith(value)</code>
customizes display and accessible value text. <code>startLabel</code> and <code>endLabel</code> are translatable thumb names. <code>showTickMarks</code> shows bounded tick indicators.</p>
<p>Ticks mark actual step values and are centered on the thumbs&#39; travel, including ranges where the step does not divide the span evenly. The selection fill uses
the same thumb centers in LTR and RTL. Set <code>--bx-slider-thumb-size</code> to customize both native and decorative thumbs together; it defaults to the shared
<code>spacing(6)</code> token, and the fill and tick insets follow that size.</p>
<p>Each bordered glass thumb magnifies and blurs the rail below it, including both selection boundaries when the thumbs are close. <code>--bx-slider-magnification</code>
controls the enlargement and defaults to <code>1.5</code>; <code>--bx-slider-lens-blur</code> sets the lens and backdrop blur and defaults to <code>1.5px</code>. The lens follows values,
resizing, theme changes and RTL without per-frame pixel sampling. Reduced transparency and increased contrast use the opaque fallback; forced colors keeps the
native thumbs.</p>
<p>Thumbs cannot cross. Each thumb retains native keyboard input and an accessible name. Initialize form values with a pair of numbers. Shared hints, errors,
readonly and disabled state are supported.</p>
<h2>Appearance and accessibility</h2>
<p>Uses Blocks semantic tokens and the active <code>ThemingService</code> configuration. Customize through documented inputs, templates and CSS variables. Existing components
update when the application theme changes. Keyboard focus, forced colors, reduced transparency and <code>BxA11yService</code> reduced-motion preferences remain supported.</p>
<p>Text inputs accept <code>ResolvableText</code>: plain text or <code>{ key: &#39;translation.key&#39; }</code>. With <code>BX_I18N</code>, text is resolved reactively, including already-mounted controls
when the adapter&#39;s <code>version</code> signal changes. Plain text works without an adapter.</p>
<h2>Playground</h2>
<p>Open <code>/components/range-slider</code> for a live pair, labels and ticks.</p>
<p>The rail shares the normal slider&#39;s border, inset shadow, neutral background and pill radius, with the selected interval filled between the two thumb centers.</p>
`,"projects/blocks/forms/components/search-input/README.md":`<h1>Search input</h1>
<p>A searchable text control with one clear action, request loading feedback, and an explicit retry action. Requests and results remain application-owned.</p>
<h2>Import</h2>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">SearchInput</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/forms&#x27;</span>;</code></pre>
<p>Add the standalone component or directive to your component&#39;s <code>imports</code>.</p>
<h2>Usage</h2>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">bx-search-input</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Find a component&quot;</span> [<span class="hljs-attr">formControl</span>]=<span class="hljs-string">&quot;query&quot;</span> (<span class="hljs-attr">search</span>)=<span class="hljs-string">&quot;filter($event)&quot;</span> /&gt;</span></code></pre>
<h2>API</h2>
<p>The control uses Angular 22 native signal control contracts. Use <code>[formField]</code>, <code>[formControl]</code>, <code>formControlName</code>, <code>[(ngModel)]</code>, or standalone <code>[(value)]</code>.
Shared presentation includes labels, hints, tooltips, required/readonly/disabled state, error policies and typed message resolvers. See the
<a href="components/signal-forms">forms guide</a> for validation, submission, translations and compatibility.</p>
<p>Search value/placeholder ellipsis uses the shared <code>TruncateDirective</code>; its native-input measurement accounts for the current font and inline padding.
<code>[tooltipOnTruncate]=&quot;false&quot;</code> disables automatic clipped-value tooltips while keeping ellipsis and measurement. The default inherits <code>FormSettingsService</code>, then
true.</p>
<p><code>search</code> emits the current string on input and clear. Public methods <code>clear()</code>, <code>focus()</code>, and <code>retrySearch()</code> support integration. <code>retrySearch()</code> emits
<code>retry</code> only when a request error exists and the control is editable and idle.</p>
<table>
<thead>
<tr>
<th>Input/output</th>
<th>Default</th>
<th>Behavior</th>
</tr>
</thead>
<tbody><tr>
<td><code>loading</code></td>
<td><code>false</code></td>
<td>Application-owned request state; replaces the search icon with the shared spinner.</td>
</tr>
<tr>
<td><code>pending</code></td>
<td><code>false</code></td>
<td>Form validation pending state; also shows busy feedback.</td>
</tr>
<tr>
<td><code>loadError</code></td>
<td><code>undefined</code></td>
<td><code>ResolvableText</code> request failure, independent of form validation. Reveals retry immediately.</td>
</tr>
<tr>
<td><code>loadingLabel</code></td>
<td><code>undefined</code></td>
<td>Optional visible <code>ResolvableText</code> loading message.</td>
</tr>
<tr>
<td><code>loadingAriaLabel</code></td>
<td><code>&#39;Searching&#39;</code></td>
<td><code>ResolvableText</code> announcement when no visible loading message is supplied.</td>
</tr>
<tr>
<td><code>retryLabel</code></td>
<td><code>&#39;Retry search&#39;</code></td>
<td><code>ResolvableText</code> retry button text. Remains stable during loading.</td>
</tr>
<tr>
<td><code>retryConfig</code></td>
<td><code>{}</code></td>
<td><code>ISearchRetryConfig</code>: optional accessible name, Blocks button variant/color, outline, and CSS classes.</td>
</tr>
<tr>
<td><code>clearLabel</code></td>
<td><code>&#39;Clear search&#39;</code></td>
<td><code>ResolvableText</code> accessible clear action name.</td>
</tr>
<tr>
<td><code>autocomplete</code></td>
<td><code>&#39;off&#39;</code></td>
<td>Native search autocomplete.</td>
</tr>
<tr>
<td><code>retry</code></td>
<td>\u2014</td>
<td>Emits the current query as a string when retry is requested. Does not also emit <code>search</code>.</td>
</tr>
<tr>
<td><code>compact</code></td>
<td><code>false</code></td>
<td>Controls compact field presentation. Automatically enabled when a label is provided; otherwise follows this setting.</td>
</tr>
</tbody></table>
<h3>Asynchronous requests</h3>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">bx-search-input</span>
    <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Find a component&quot;</span>
    [(<span class="hljs-attr">value</span>)]=<span class="hljs-string">&quot;query&quot;</span>
    [<span class="hljs-attr">loading</span>]=<span class="hljs-string">&quot;loading()&quot;</span>
    [<span class="hljs-attr">loadError</span>]=<span class="hljs-string">&quot;loadError()&quot;</span>
    <span class="hljs-attr">loadingAriaLabel</span>=<span class="hljs-string">&quot;Searching components&quot;</span>
    <span class="hljs-attr">retryLabel</span>=<span class="hljs-string">&quot;Try again&quot;</span>
    [<span class="hljs-attr">retryConfig</span>]=<span class="hljs-string">&quot;{ variant: &#x27;tonal&#x27;, color: &#x27;accent&#x27; }&quot;</span>
    (<span class="hljs-attr">search</span>)=<span class="hljs-string">&quot;runSearch($event)&quot;</span>
    (<span class="hljs-attr">retry</span>)=<span class="hljs-string">&quot;runSearch($event)&quot;</span> /&gt;</span></code></pre>
<p>For example, the application can coordinate a promise-returning API with cancellation:</p>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">private</span> <span class="hljs-keyword">readonly</span> destroyRef = <span class="hljs-title function_">inject</span>(<span class="hljs-title class_">DestroyRef</span>);
<span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> query = signal&lt;<span class="hljs-built_in">string</span> | <span class="hljs-literal">null</span>&gt;(<span class="hljs-string">&#x27;&#x27;</span>);
<span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> loading = <span class="hljs-title function_">signal</span>(<span class="hljs-literal">false</span>);
<span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> loadError = signal&lt;<span class="hljs-built_in">string</span> | <span class="hljs-literal">undefined</span>&gt;(<span class="hljs-literal">undefined</span>);
<span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> results = signal&lt;<span class="hljs-keyword">readonly</span> <span class="hljs-built_in">string</span>[]&gt;([]);
<span class="hljs-keyword">private</span> <span class="hljs-attr">request</span>?: <span class="hljs-title class_">AbortController</span>;

<span class="hljs-title function_">constructor</span>(<span class="hljs-params"></span>) {
  <span class="hljs-variable language_">this</span>.<span class="hljs-property">destroyRef</span>.<span class="hljs-title function_">onDestroy</span>(<span class="hljs-function">() =&gt;</span> <span class="hljs-variable language_">this</span>.<span class="hljs-property">request</span>?.<span class="hljs-title function_">abort</span>());
}

<span class="hljs-keyword">protected</span> <span class="hljs-keyword">async</span> <span class="hljs-title function_">runSearch</span>(<span class="hljs-attr">query</span>: <span class="hljs-built_in">string</span>): <span class="hljs-title class_">Promise</span>&lt;<span class="hljs-built_in">void</span>&gt; {
  <span class="hljs-variable language_">this</span>.<span class="hljs-property">request</span>?.<span class="hljs-title function_">abort</span>();
  <span class="hljs-keyword">const</span> request = <span class="hljs-keyword">new</span> <span class="hljs-title class_">AbortController</span>();
  <span class="hljs-variable language_">this</span>.<span class="hljs-property">request</span> = request;
  <span class="hljs-variable language_">this</span>.<span class="hljs-property">loading</span>.<span class="hljs-title function_">set</span>(<span class="hljs-literal">true</span>);
  <span class="hljs-variable language_">this</span>.<span class="hljs-property">loadError</span>.<span class="hljs-title function_">set</span>(<span class="hljs-literal">undefined</span>);

  <span class="hljs-keyword">try</span> {
    <span class="hljs-keyword">const</span> results = <span class="hljs-keyword">await</span> <span class="hljs-variable language_">this</span>.<span class="hljs-property">api</span>.<span class="hljs-title function_">search</span>(query, request.<span class="hljs-property">signal</span>);

    <span class="hljs-keyword">if</span> (!request.<span class="hljs-property">signal</span>.<span class="hljs-property">aborted</span>) <span class="hljs-variable language_">this</span>.<span class="hljs-property">results</span>.<span class="hljs-title function_">set</span>(results);
  } <span class="hljs-keyword">catch</span> {
    <span class="hljs-keyword">if</span> (!request.<span class="hljs-property">signal</span>.<span class="hljs-property">aborted</span>) <span class="hljs-variable language_">this</span>.<span class="hljs-property">loadError</span>.<span class="hljs-title function_">set</span>(<span class="hljs-string">&#x27;Search failed. Try again.&#x27;</span>);
  } <span class="hljs-keyword">finally</span> {
    <span class="hljs-keyword">if</span> (<span class="hljs-variable language_">this</span>.<span class="hljs-property">request</span> === request) <span class="hljs-variable language_">this</span>.<span class="hljs-property">loading</span>.<span class="hljs-title function_">set</span>(<span class="hljs-literal">false</span>);
  }
}</code></pre>
<p>Import <code>DestroyRef</code>, <code>inject</code>, and <code>signal</code> from <code>@angular/core</code>. Supply your application API&#39;s <code>search(query, signal): Promise&lt;readonly string[]&gt;</code>. Add
debouncing in the application when useful, and mark loading from the start of that debounce. Keep the previous results during a replacement request or failure;
replace them only when the latest request succeeds. A successful empty response is distinct from a failure. Set <code>loading</code> synchronously in the event handler and
clear <code>loadError</code> when starting a new attempt. The component makes no requests and has no pagination behavior.</p>
<h2>Appearance</h2>
<p>Appearance uses Blocks semantic colors, spacing, radius and motion tokens. Glass surfaces inherit the application configuration from <code>ThemingService</code>; adjusting
translucency updates existing components and overlays. Content-only parts share their containing surface instead of adding another backdrop filter.</p>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { inject } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ThemingService</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/core&#x27;</span>;

<span class="hljs-keyword">private</span> <span class="hljs-keyword">readonly</span> themingService = <span class="hljs-title function_">inject</span>(<span class="hljs-title class_">ThemingService</span>);

<span class="hljs-comment">// Application-wide, including open overlays.</span>
<span class="hljs-variable language_">this</span>.<span class="hljs-property">themingService</span>.<span class="hljs-title function_">setAppearance</span>({ <span class="hljs-attr">translucency</span>: <span class="hljs-number">0.5</span> });
<span class="hljs-comment">// Opaque presentation retains the same layout and component API.</span>
<span class="hljs-variable language_">this</span>.<span class="hljs-property">themingService</span>.<span class="hljs-title function_">setAppearance</span>({ <span class="hljs-attr">reducedTransparency</span>: <span class="hljs-literal">true</span> });</code></pre>
<p><code>BxA11yService</code> controls reduced motion; reduced transparency and forced colors receive opaque presentation. Glass is decorative and does not replace labels,
focus states, or semantic control states.</p>
<p>The retry action uses the same Blocks <code>Button</code> and <code>LoadingSpinner</code> as select request feedback. Import <code>ISearchRetryConfig</code> from <code>@filip.mazev/blocks/forms</code> for
typed presentation settings. Native browser search decorations are suppressed so only the named Blocks clear action appears. Set <code>--bx-search-feedback-gap</code> to
customize the space between the field and its visible status message; it defaults to the shared spacing-2 token and applies equally to initial loading, errors,
and retry loading.</p>
<h2>Behavior and accessibility</h2>
<p>The output is immediate; debounce expensive network searches in the application. Keep a visible or accessible label instead of relying only on placeholder text.</p>
<p>Busy feedback sets <code>aria-busy</code>, uses a polite status announcement, and preserves the input&#39;s dimensions. Feedback uses a status row followed by the retry
action. On retry, the error is replaced by <code>loadingLabel</code> or, when absent, <code>loadingAriaLabel</code> as visible searching text. The status row reserves space for both
messages so wrapping at narrow widths or zoom does not move the button. The retry button stays mounted in the same position and disabled during its request,
displaying its own spinner without a second input spinner. Retry focuses the input so successful completion keeps focus predictable. Loading allows further
editing and clearing to cancel or replace a request. Disabled and readonly state prevent clear and retry actions. Readonly mode hides the clear button while
keeping the text focusable and selectable. API failures are described by the input without marking the query invalid. Text inputs accept translation keys and
update with the active <code>BX_I18N</code> language.</p>
<h2>Playground</h2>
<p>Open <code>/components/search-input</code> for cancellable, debounced fake API requests, loading text, empty results, retained results on failure, retry through to
success, and readonly/disabled controls. Enabling Show loading text starts a preview request so the message is immediately observable.</p>
`,"projects/blocks/forms/components/select/README.md":`<h1>Select</h1>
<p>A typed single-value control with searchable, grouped options and remote pagination.</p>
<h2>Import</h2>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">Select</span>, <span class="hljs-title class_">IBxSelectOption</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/forms&#x27;</span>;</code></pre>
<h2>Usage</h2>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">bx-select</span>
    <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Workspace&quot;</span>
    [<span class="hljs-attr">options</span>]=<span class="hljs-string">&quot;options()&quot;</span>
    [<span class="hljs-attr">formField</span>]=<span class="hljs-string">&quot;account.workspace&quot;</span>
    [<span class="hljs-attr">isSearchable</span>]=<span class="hljs-string">&quot;true&quot;</span>
    [<span class="hljs-attr">externalFiltering</span>]=<span class="hljs-string">&quot;true&quot;</span>
    [<span class="hljs-attr">loading</span>]=<span class="hljs-string">&quot;loading()&quot;</span>
    [<span class="hljs-attr">hasMore</span>]=<span class="hljs-string">&quot;hasMore()&quot;</span>
    [<span class="hljs-attr">loadError</span>]=<span class="hljs-string">&quot;loadError()&quot;</span>
    [<span class="hljs-attr">loadMoreConfig</span>]=<span class="hljs-string">&quot;paginationAppearance&quot;</span>
    (<span class="hljs-attr">search</span>)=<span class="hljs-string">&quot;search($event)&quot;</span>
    (<span class="hljs-attr">loadMore</span>)=<span class="hljs-string">&quot;loadNext($event)&quot;</span> /&gt;</span></code></pre>
<h2>API</h2>
<p>Supports Signal Forms, Reactive Forms, Template-driven Forms, and standalone <code>[(value)]</code>. Existing <code>[formControl]</code> and <code>formControlName</code> bindings remain
available.</p>
<p>Options provide <code>label</code>, <code>value</code>, optional <code>disabled</code>, <code>icon</code>, <code>group</code> and <code>groupDisabled</code>. Labels and group headings accept translation keys.
<code>compareWith(a, b)</code> defaults to <code>Object.is</code>; supply a comparator for object values. Selected labels are retained when filtering replaces the visible results.
<code>searchValue</code> is a string model: the term and matching results persist together across panel close/reopen. Bind it when application code needs to clear or
replace a query.</p>
<p><code>isSearchable</code>, <code>externalFiltering</code>, <code>searchPlaceholder</code>, <code>searchDebounce</code>, and <code>emptyMessage</code> configure search. <code>search</code> emits debounced terms; external
filtering leaves request cancellation and results ownership with the application. <code>loadingLabel</code> names loading feedback.</p>
<p><code>optionTemplate</code> receives <code>$implicit</code> (option), <code>selected</code>, and <code>index</code>. <code>triggerTemplate</code> receives <code>$implicit</code> (form value) and resolved <code>labels</code>. <code>panelClass</code>
customizes the panel. <code>--bx-select-panel-background</code>, <code>--bx-select-panel-border</code>, and <code>--bx-select-panel-shadow</code> customize the opaque surface, contrast and
elevation independently from the form container. <code>--bx-select-panel-height</code> changes the maximum panel height, which is also constrained to the viewport.</p>
<p><code>selectionChange</code> emits <code>{ value, source: &#39;user&#39; }</code>. <code>openedChange</code> reports panel state. <code>open()</code>, <code>close()</code>, and <code>toggleOpen()</code> control the panel. Readonly
state prevents value changes without changing the form&#39;s disabled state.</p>
<h2>Pagination</h2>
<p><code>hasMore</code>, <code>loading</code>, <code>loadError</code>, <code>loadMoreConfig</code>, and <code>loadMoreTemplate</code> feed the shared <a href="components/load-more">load-more directive</a>.
<code>loadMore</code> distinguishes scroll, button and retry requests. Append pages rather than replacing previously loaded items during ordinary pagination. Retain items
and the failed cursor on error.</p>
<p>Small result pages expose a bottom-left action when no item scrollbar exists. A visible action stays present while loading. Errors show an explicit retry even
with overflow. Applications need not know the viewport size or reproduce fallback behavior.</p>
<h2>Behavior and accessibility</h2>
<p>Arrow keys, Home/End, typeahead, Enter/Space, Escape, Alt+ArrowUp and Tab support panel interaction. Focus returns appropriately when the panel closes. Field
error/hint descriptions and invalid/required states are connected automatically.</p>
<p>Panels retain the shared overlay positioning, theme inheritance and top-layer context behavior. Provide <code>BX_OVERLAY_CONTEXT</code> through the existing
overlay-context directive for custom top-layer containers.</p>
<p>Ordinary panels use native CSS anchors where supported. Panels promoted into the top layer use measured CDK positioning so nested scrolling and filtering
preserve their gap, focus and placement without a frame of anchor drift.</p>
<p>Completed closes release the panel&#39;s overlay and tracking resources. Reopening resolves the current overlay context, including after moving the control into or
out of a native popover. Selection and the application-owned search term remain on the control.</p>
<h2>Appearance and accessibility</h2>
<p>Uses Blocks semantic tokens and the active <code>ThemingService</code> configuration. Customize through documented inputs, templates and CSS variables. Existing components
update when the application theme changes. Keyboard focus, forced colors, reduced transparency and <code>BxA11yService</code> reduced-motion preferences remain supported.</p>
<p>Text inputs accept <code>ResolvableText</code>: plain text or <code>{ key: &#39;translation.key&#39; }</code>. With <code>BX_I18N</code>, text is resolved reactively, including already-mounted controls
when the adapter&#39;s <code>version</code> signal changes. Plain text works without an adapter.</p>
<h2>Playground</h2>
<p>Open <code>/components/select</code> for mock pagination, external filtering, loading, failed requests and retry. Switch page sizes to exercise the scroll and
fallback-action states.</p>
<h2>Busy presentation</h2>
<p>The trigger replaces its caret with a same-size spinner, preserving width. When a visible load-more or retry button starts a request, that button stays mounted
and shows its own spinner. The panel uses a row-aligned loading indicator only when no footer button is visible; the two loading presentations are mutually
exclusive.</p>
<h2>Tags and search feedback</h2>
<p><code>selectionDisplay=&quot;tags&quot;</code> renders the selected value through the standalone Blocks <code>Tag</code> component. <code>tagConfig</code> controls common appearance and
<code>option.tagConfig</code> provides per-option overrides. See the <a href="components/tag">tag guide</a>.</p>
<p>Clipped tag labels automatically expose their full text in a tooltip; fitting labels do not. Explicit option/tag tooltip descriptions retain their existing
behavior. The parent combobox supplies keyboard access to the complete selection without adding nested tab stops. Labels and plain values also use the shared
truncation directive. Set <code>[tooltipOnTruncate]=&quot;false&quot;</code> to disable automatic truncation tooltips, including ordinary selected tags, while retaining ellipsis and
custom templates. Per-tag configuration can disable the tag tooltip when the owner is enabled. The component inherits the shared <code>FormSettingsService</code> default.</p>
<p>While searching (including debounce and the external request), old results and load-more actions are suppressed. <code>loadingLabel</code> provides centered loading text;
without it, the panel displays a simple centered spinner named by <code>loadingAriaLabel</code>. Pagination becomes available for the filtered result set after the request
completes.</p>
<h2>Option spacing</h2>
<p>Rounded option rows have a small gap, shared by select and multiselect. Set <code>--bx-select-option-gap</code> on the control to customize it (default: Blocks
<code>spacing(1)</code>). All built-in selection and caret icons use Blocks <code>Icon</code>; searching uses Blocks <code>SearchInput</code>.</p>
<h2>Clearing selection</h2>
<p>A Blocks \xD7 icon button appears before the dropdown/loading indicator, with equal spacing between the action and the selected text/tags and between the two
icons, when a selection exists. Its reserved space prevents overlap with selected text or tags. Set <code>[clearable]=&quot;false&quot;</code> to hide it, or use <code>clearLabel</code>
(<code>ResolvableText</code>, default <code>&#39;Clear selection&#39;</code>) to customize its accessible name. <code>clearTooltip</code> accepts its own <code>ResolvableText</code>, defaults to the resolved
<code>clearLabel</code> when omitted, and can be set to an empty string to hide the tooltip.</p>
<p><code>clearSelection()</code> performs the same guarded action programmatically. Clearing closes the panel, marks the control touched and returns focus to the combobox; it
preserves Angular&#39;s blur/submit update policy. The action is hidden while readonly and disabled when the control is disabled. Keyboard users can Tab to the
action and activate it with Enter or Space.</p>
<p>Clearing writes <code>null</code> and emits <code>selectionChange</code> with <code>{ value: null, source: &#39;clear&#39; }</code>. Required controls report validation through the existing error
policy.</p>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">bx-select</span> [<span class="hljs-attr">options</span>]=<span class="hljs-string">&quot;locations&quot;</span> [<span class="hljs-attr">clearLabel</span>]=<span class="hljs-string">&quot;{ key: &#x27;locations.clearAction&#x27; }&quot;</span> [<span class="hljs-attr">clearTooltip</span>]=<span class="hljs-string">&quot;{ key: &#x27;locations.clearTooltip&#x27; }&quot;</span> /&gt;</span></code></pre>
<p>Use <code>[clearable]=&quot;false&quot;</code> for required selections that must retain a value or for lists with an explicit \u201CNone\u201D option. This input controls the clear action
independently of validation; <code>required</code> continues to enforce form validity. The select/multiselect playground includes an \u201CAllow clearing selection\u201D switch;
configuration controls such as page size deliberately hide the clear action.</p>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">bx-select</span> [<span class="hljs-attr">options</span>]=<span class="hljs-string">&quot;options&quot;</span> [<span class="hljs-attr">clearable</span>]=<span class="hljs-string">&quot;false&quot;</span> /&gt;</span></code></pre>
`,"projects/blocks/forms/components/shared/load-more/README.md":`<h1>Load-more footer</h1>
<p>Internal presentation used by <code>LoadMoreDirective</code>. Applications configure it through <code>ILoadMoreConfig</code> and <code>ILoadMoreContext</code>; it is not a separate public
construction API.</p>
<p>See the <a href="components/load-more">load-more directive</a> for imports, request ownership, error/retry behavior, templates, appearance and
accessibility. Its live page is <code>/components/load-more</code>.</p>
`,"projects/blocks/forms/components/slide-toggle/README.md":`<h1>Slide toggle</h1>
<p>A boolean preference that takes effect immediately.</p>
<h2>Import</h2>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">SlideToggle</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/forms&#x27;</span>;</code></pre>
<p>Add the standalone component or directive to your component&#39;s <code>imports</code>.</p>
<h2>Usage</h2>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">bx-slide-toggle</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Enable notifications&quot;</span> [<span class="hljs-attr">formControl</span>]=<span class="hljs-string">&quot;notifications&quot;</span> /&gt;</span></code></pre>
<h2>API</h2>
<p>The control uses Angular 22 native signal control contracts. Use <code>[formField]</code>, <code>[formControl]</code>, <code>formControlName</code>, <code>[(ngModel)]</code>, or standalone <code>[(checked)]</code>.
Shared presentation includes labels, hints, tooltips, required/readonly/disabled state, error policies and typed message resolvers. See the
<a href="components/signal-forms">forms guide</a> for validation, submission, translations and compatibility.</p>
<h2>Appearance</h2>
<p>Appearance uses Blocks semantic colors, spacing, radius and motion tokens. Glass surfaces inherit the application configuration from <code>ThemingService</code>; adjusting
translucency updates existing components and overlays. Content-only parts share their containing surface instead of adding another backdrop filter.</p>
<p>Hints and errors align with the control&#39;s inline start by default. <code>--bx-field-support-padding</code> overrides that support-text padding. For a full-width settings
row with the label at the start and the switch at the end, use <code>labelPosition=&quot;before&quot;</code> with <code>--bx-toggle-inline-size: 100%</code> and
<code>--bx-toggle-justify-content: space-between</code>. Their defaults are <code>auto</code> and <code>start</code>. Labels can wrap while the switch retains its size; logical layout also
follows RTL direction.</p>
<p>Toggles keep emitting the theme color while switched on, including values set through Angular forms. Hovering the track or its label highlights the surface and
emits color; disabled controls do neither.</p>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { inject } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ThemingService</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/core&#x27;</span>;

<span class="hljs-keyword">private</span> <span class="hljs-keyword">readonly</span> themingService = <span class="hljs-title function_">inject</span>(<span class="hljs-title class_">ThemingService</span>);

<span class="hljs-comment">// Application-wide, including open overlays.</span>
<span class="hljs-variable language_">this</span>.<span class="hljs-property">themingService</span>.<span class="hljs-title function_">setAppearance</span>({ <span class="hljs-attr">translucency</span>: <span class="hljs-number">0.5</span> });
<span class="hljs-comment">// Opaque presentation retains the same layout and component API.</span>
<span class="hljs-variable language_">this</span>.<span class="hljs-property">themingService</span>.<span class="hljs-title function_">setAppearance</span>({ <span class="hljs-attr">reducedTransparency</span>: <span class="hljs-literal">true</span> });</code></pre>
<p><code>BxA11yService</code> controls reduced motion; reduced transparency and forced colors receive opaque presentation. Glass is decorative and does not replace labels,
focus states, or semantic control states.</p>
<h2>Behavior and accessibility</h2>
<p>Use for immediate settings, with a label describing the enabled state. The native checkbox retains keyboard behavior and checked state.</p>
<h2>Playground</h2>
<p>Open <code>/components/slide-toggle</code> for a working example and its current value or action result.</p>
<h2>Switch semantics</h2>
<p>The internal checkbox exposes switch semantics. <code>labelPosition</code> supports before/after placement, and projected label content is supported. <code>checkedChange</code> is
available for standalone interaction. Readonly preserves the value while disabled state blocks interaction.</p>
`,"projects/blocks/forms/directives/button-icon/README.md":`<h1>Button icon slot</h1>
<p>Import <code>ButtonIconDirective</code> from <code>@filip.mazev/blocks/forms</code> and mark a custom projected icon element with <code>bxButtonIcon</code>. The loading button replaces that
element with a same-size spinner and restores it when the operation completes. Built-in <code>bx-icon</code> content is recognized automatically.</p>
<p>Provide the action name as button text or an accessible label, and mark decorative custom icons appropriately. See the parent
<a href="components/button">button guide</a> and <code>/components/button-loading</code> playground page.</p>
`,"projects/blocks/forms/directives/load-more/README.md":`<h1>Load more</h1>
<p>Shared incremental loading for a scroll container. The directive appends a footer at the bottom-left, inside the container&#39;s padding. Use it for paginated
option panels and future data tables or lists; attach it to their scroll wrapper rather than a native <code>table</code>, <code>tbody</code>, <code>ul</code> or <code>select</code> element.</p>
<h2>Import</h2>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">LoadMoreDirective</span>, <span class="hljs-title class_">ILoadMoreRequest</span>, <span class="hljs-title class_">ILoadMoreConfig</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/forms&#x27;</span>;</code></pre>
<h2>Usage</h2>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>
    <span class="hljs-attr">bxLoadMore</span>
    #<span class="hljs-attr">pager</span>=<span class="hljs-string">&quot;bxLoadMore&quot;</span>
    <span class="hljs-attr">role</span>=<span class="hljs-string">&quot;region&quot;</span>
    <span class="hljs-attr">aria-label</span>=<span class="hljs-string">&quot;Workspaces&quot;</span>
    <span class="hljs-attr">tabindex</span>=<span class="hljs-string">&quot;0&quot;</span>
    [<span class="hljs-attr">loadMoreHasMore</span>]=<span class="hljs-string">&quot;hasMore()&quot;</span>
    [<span class="hljs-attr">loadMoreLoading</span>]=<span class="hljs-string">&quot;loading()&quot;</span>
    [<span class="hljs-attr">loadMoreError</span>]=<span class="hljs-string">&quot;loadError()&quot;</span>
    [<span class="hljs-attr">loadMoreRevision</span>]=<span class="hljs-string">&quot;items()&quot;</span>
    [<span class="hljs-attr">loadMoreConfig</span>]=<span class="hljs-string">&quot;paginationAppearance&quot;</span>
    (<span class="hljs-attr">loadMore</span>)=<span class="hljs-string">&quot;loadNext($event)&quot;</span>&gt;</span>
    @for (item of items(); track item.id) {
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>{{ item.name }}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    }
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></code></pre>
<p>Give the wrapper a constrained maximum height and <code>overflow: auto</code>. Applications own API calls, cursors, cancellation and data accumulation. The directive never
fetches data itself.</p>
<h2>API</h2>
<ul>
<li><code>loadMoreHasMore</code>: whether another page exists; defaults to false.</li>
<li><code>loadMoreLoading</code>: application request state; defaults to false.</li>
<li><code>loadMoreError</code>: optional text or translation key describing a failed request. Failure reveals a retry action even when the container overflows. Without a
resolved retry label, it uses a retry icon with the supplied load-more text.</li>
<li><code>loadMoreSuppressed</code>: temporarily hides the footer and blocks page requests, for example during a search request.</li>
<li><code>loadMoreDisabled</code>: blocks requests without removing content.</li>
<li><code>loadMoreRevision</code>: pass the items array or a page revision to acknowledge new data.</li>
<li><code>loadMoreConfig</code>: <code>ILoadMoreConfig</code> controls action text, busy/retry text, accessible label, button variant/color/outline, custom button/footer classes,
scroll threshold and <code>buttonMode</code> (<code>auto</code> or <code>always</code>).</li>
<li><code>loadMoreTemplate</code>: optional <code>TemplateRef&lt;ILoadMoreContext&gt;</code> for a custom action. Its context includes the resolved label (<code>$implicit</code>), <code>loading</code>,
<code>disabled</code>, and guarded <code>request()</code> callback.</li>
<li><code>loadMore</code>: emits <code>{ source: &#39;scroll&#39; | &#39;button&#39; | &#39;retry&#39; }</code>.</li>
<li><code>complete()</code>: acknowledges completion when no loading-state cycle or items revision is available.</li>
<li><code>actionVisible()</code>: indicates whether the footer action is visible, allowing an owning component to avoid rendering a second loading indicator.</li>
<li><code>request(source?)</code>: invokes the same request guard from application code.</li>
</ul>
<p>Scroll geometry and passive content/resize observation use Core&#39;s <code>measureScrollBoundary()</code> and <code>observeScrollBoundary()</code> helpers, shared with
<code>InfiniteScrollDirective</code>. The orchestration remains here: it excludes its own footer when measuring overflow, exposes a reachable action, and guards remote
requests. Select and Multiselect continue using this one directive. No new Select/Multiselect API is required, and remote underfill never starts an automatic
fetch loop.</p>
<h2>Loading, failure and retry</h2>
<p>Set loading before starting the promise. Append data only on success. On failure retain the previous data and page/cursor, set <code>loadMoreError</code>, and clear
loading in <code>finally</code>. Retry the same page; advance its cursor only after success. Clear the error when a retry begins.</p>
<p>The button shows its loading spinner and becomes disabled while loading. A button visible before a request stays visible during it, including when newly
appended items create overflow. The error and retry remain reachable after failure, and scroll events cannot automatically retry a failing request. Request
guards prevent duplicates until a loading cycle completes, the revision changes, or <code>complete()</code> is called.</p>
<p>When more data exists without usable item overflow, auto mode displays the footer action. Container resizing, viewport/zoom resizing, and data changes
re-evaluate overflow. The footer itself does not count as item overflow, preventing show/hide oscillation. Always mode retains an explicit action even with a
scrollbar. There is no automatic fetch loop to fill the viewport.</p>
<h2>Custom action</h2>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> #<span class="hljs-attr">customAction</span> <span class="hljs-attr">let-label</span> <span class="hljs-attr">let-loading</span>=<span class="hljs-string">&quot;loading&quot;</span> <span class="hljs-attr">let-disabled</span>=<span class="hljs-string">&quot;disabled&quot;</span> <span class="hljs-attr">let-request</span>=<span class="hljs-string">&quot;request&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">bx-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;button&quot;</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;tonal&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;accent&quot;</span> [<span class="hljs-attr">loading</span>]=<span class="hljs-string">&quot;loading&quot;</span> [<span class="hljs-attr">disabled</span>]=<span class="hljs-string">&quot;disabled&quot;</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;request()&quot;</span>&gt;</span>{{ label }}<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span></code></pre>
<p>Pass the template through <code>loadMoreTemplate</code>. Keep the action keyboard-accessible and represent its busy/disabled states. <code>--bx-load-more-padding</code> changes
footer padding; the default has no additional horizontal inset. Button classes and semantic theme variables customize appearance without DOM access.</p>
<h2>Appearance and accessibility</h2>
<p>Uses Blocks semantic tokens and the active <code>ThemingService</code> configuration. Customize through documented inputs, templates and CSS variables. Existing components
update when the application theme changes. Keyboard focus, forced colors, reduced transparency and <code>BxA11yService</code> reduced-motion preferences remain supported.</p>
<p>Text inputs accept <code>ResolvableText</code>: plain text or <code>{ key: &#39;translation.key&#39; }</code>. With <code>BX_I18N</code>, text is resolved reactively, including already-mounted controls
when the adapter&#39;s <code>version</code> signal changes. Plain text works without an adapter.</p>
<h2>Playground</h2>
<p>Open <code>/components/load-more</code>. Fake API requests take 800ms. Use small pages for the no-scrollbar action, <strong>Fail next page now</strong> for a failed request, then
<strong>Retry request</strong>. The event log distinguishes loading, failed, retry and successful states.</p>
`,"projects/blocks/forms/directives/native-control/README.md":`<h1>Native control</h1>
<p>Composable content and native integration for the shared field frame.</p>
<h2>Import</h2>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">NativeControlDirective</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/forms&#x27;</span>;</code></pre>
<h2>Usage</h2>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">bx-form-field</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Notes&quot;</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">textarea</span> <span class="hljs-attr">bxInput</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Notes&quot;</span> [<span class="hljs-attr">formField</span>]=<span class="hljs-string">&quot;account.note&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">textarea</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">bx-form-field</span>&gt;</span></code></pre>
<h2>API and behavior</h2>
<p>Registers a native input, textarea or select with the field frame. Import the desired Angular forms directives separately. Native attributes and third-party
directives remain available. <code>BX_FORM_FIELD_CONTROL</code> and <code>IFormFieldControl</code> allow consumer controls to register their own state and focus contract.</p>
<h2>Appearance and accessibility</h2>
<p>Uses Blocks semantic tokens and the active <code>ThemingService</code> configuration. Customize through documented inputs, templates and CSS variables. Existing components
update when the application theme changes. Keyboard focus, forced colors, reduced transparency and <code>BxA11yService</code> reduced-motion preferences remain supported.</p>
<p>Text inputs accept <code>ResolvableText</code>: plain text or <code>{ key: &#39;translation.key&#39; }</code>. With <code>BX_I18N</code>, text is resolved reactively, including already-mounted controls
when the adapter&#39;s <code>version</code> signal changes. Plain text works without an adapter.</p>
<h2>Playground</h2>
<p>Open <code>/components/native-control</code> for working field composition and compatibility examples.</p>
`,"projects/blocks/forms/directives/prefix/README.md":`<h1>Field prefix</h1>
<p>Composable content and native integration for the shared field frame.</p>
<h2>Import</h2>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">PrefixDirective</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/forms&#x27;</span>;</code></pre>
<h2>Usage</h2>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">bx-input-field</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Amount&quot;</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">bxPrefix</span> <span class="hljs-attr">aria-hidden</span>=<span class="hljs-string">&quot;true&quot;</span>&gt;</span>$<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">bx-input-field</span>&gt;</span></code></pre>
<h2>API and behavior</h2>
<p>Projects custom content before the input. Keep decorative prefixes hidden from assistive technology; express meaningful units in the label or description.</p>
<h2>Appearance and accessibility</h2>
<p>Uses Blocks semantic tokens and the active <code>ThemingService</code> configuration. Customize through documented inputs, templates and CSS variables. Existing components
update when the application theme changes. Keyboard focus, forced colors, reduced transparency and <code>BxA11yService</code> reduced-motion preferences remain supported.</p>
<p>Text inputs accept <code>ResolvableText</code>: plain text or <code>{ key: &#39;translation.key&#39; }</code>. With <code>BX_I18N</code>, text is resolved reactively, including already-mounted controls
when the adapter&#39;s <code>version</code> signal changes. Plain text works without an adapter.</p>
<h2>Playground</h2>
<p>Open <code>/components/prefix</code> for working field composition and compatibility examples.</p>
`,"projects/blocks/forms/directives/slider/README.md":`<h1>Slider</h1>
<p><code>SliderDirective</code> gives a native range input a glass thumb, a recessed track, and a value fill. Native keyboard, touch, disabled, minimum, maximum, step, and
Angular forms behavior are preserved.</p>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">SliderDirective</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/forms&#x27;</span>;</code></pre>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">for</span>=<span class="hljs-string">&quot;volume&quot;</span>&gt;</span>Volume<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span> <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;volume&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;range&quot;</span> <span class="hljs-attr">bxSlider</span> <span class="hljs-attr">min</span>=<span class="hljs-string">&quot;0&quot;</span> <span class="hljs-attr">max</span>=<span class="hljs-string">&quot;100&quot;</span> [<span class="hljs-attr">formControl</span>]=<span class="hljs-string">&quot;volume&quot;</span> /&gt;</span></code></pre>
<p>Import the directive into your component and include the existing Blocks core stylesheet. The directive also supports <code>ngModel</code> or native <code>[value]</code> and
<code>(input)</code> bindings. It reads programmatic value changes after Angular renders, so resetting a form updates the fill too.</p>
<p>The slider inherits semantic theme colors. Solid material, reduced transparency, increased contrast, and unsupported backdrop filtering use an opaque thumb.
WebKit/Blink and Firefox have separate native thumb and track rules. Provide an associated label or <code>aria-label</code> for every slider.</p>
<p><code>--bx-slider-thumb-size</code> sets the native and decorative thumb diameter together, defaulting to <code>spacing(6)</code> from the shared tokens. The decorative thumb&#39;s
position follows the same travel distance as the native thumb.</p>
<p>The bordered glass thumb magnifies and blurs the rail beneath it. Set <code>--bx-slider-magnification</code> to adjust the enlargement from its default <code>1.5</code>, and
<code>--bx-slider-lens-blur</code> to adjust the lens and backdrop blur from <code>1.5px</code>. It uses the current rail colors and value, including RTL, without reading screen
pixels. Reduced transparency, increased contrast and unsupported backdrop filtering use an opaque thumb; forced colors retains the native thumb.</p>
<h2>Labels and ticks</h2>
<p>Native <code>[formField]</code> binding is supported alongside existing Angular form directives. <code>discrete</code> adds a formatted visible value; <code>displayWith(value)</code> controls
that label. <code>showTickMarks</code> adds bounded native tick metadata. For a pair of values use <a href="components/range-slider">RangeSlider</a>.</p>
`,"projects/blocks/forms/directives/suffix/README.md":`<h1>Field suffix</h1>
<p>Composable content and native integration for the shared field frame.</p>
<h2>Import</h2>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">SuffixDirective</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/forms&#x27;</span>;</code></pre>
<h2>Usage</h2>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">bx-input-field</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Weight&quot;</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">bxSuffix</span> <span class="hljs-attr">aria-hidden</span>=<span class="hljs-string">&quot;true&quot;</span>&gt;</span>kg<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">bx-input-field</span>&gt;</span></code></pre>
<h2>API and behavior</h2>
<p>Projects custom content after the input. Custom interactive suffix actions need accessible names and native button semantics.</p>
<h2>Appearance and accessibility</h2>
<p>Uses Blocks semantic tokens and the active <code>ThemingService</code> configuration. Customize through documented inputs, templates and CSS variables. Existing components
update when the application theme changes. Keyboard focus, forced colors, reduced transparency and <code>BxA11yService</code> reduced-motion preferences remain supported.</p>
<p>Text inputs accept <code>ResolvableText</code>: plain text or <code>{ key: &#39;translation.key&#39; }</code>. With <code>BX_I18N</code>, text is resolved reactively, including already-mounted controls
when the adapter&#39;s <code>version</code> signal changes. Plain text works without an adapter.</p>
<h2>Playground</h2>
<p>Open <code>/components/suffix</code> for working field composition and compatibility examples.</p>
`,"projects/blocks/icons/components/icon/README.md":`<h1>Icon</h1>
<p>An asynchronously loaded SVG icon using semantic foreground and background tokens.</p>
<h2>Import</h2>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">Icon</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/icons&#x27;</span>;</code></pre>
<p>Add the standalone component or directive to your component&#39;s <code>imports</code>.</p>
<h2>Usage</h2>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">bx-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;sparkles&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;32&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;text-primary&quot;</span> [<span class="hljs-attr">decorative</span>]=<span class="hljs-string">&quot;false&quot;</span> <span class="hljs-attr">ariaLabel</span>=<span class="hljs-string">&quot;Highlights&quot;</span> /&gt;</span></code></pre>
<h2>API</h2>
<p><code>name</code> is required. <code>size</code>, <code>strokeWidth</code>, <code>color</code>, <code>bgColor</code>, <code>decorative</code>, <code>ariaLabel</code> configure rendering. Color accepts a semantic token or themed color;
<code>bgColor=&quot;auto&quot;</code> derives a complementary token.</p>
<p><code>size</code> accepts positive finite numbers or numeric strings in CSS pixels, including <code>[size]=&quot;64&quot;</code>, <code>size=&quot;18&quot;</code>, and the existing presets. The default is <code>&#39;24&#39;</code>;
invalid dimensions fall back to 24. <code>strokeWidth</code> accepts positive finite numbers, including fractional values; omission or invalid values use 1.5. Icon
requests completing after an input change or destruction are ignored.</p>
<p>Generated <code>LUCIDE_CATEGORIES</code>, <code>LUCIDE_ICON_CATEGORIES</code>, and <code>LucideCategoryId</code> are available from the same public entry point. Categories come from a pinned
official upstream snapshot and include multiple assignments, resolved inheritance, aliases, and an uncategorized fallback. See the
<a href="../../../../../tools/icons/README.md">generator guide</a> for synchronization. The mapping contains only icons generated into Blocks.</p>
<h2>Appearance and customization</h2>
<p>Appearance uses Blocks semantic colors, spacing, radius and motion tokens. Glass surfaces inherit the application configuration from <code>ThemingService</code>; adjusting
translucency updates existing components and overlays. Content-only parts share their containing surface instead of adding another backdrop filter.</p>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { inject } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ThemingService</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/core&#x27;</span>;

<span class="hljs-keyword">private</span> <span class="hljs-keyword">readonly</span> themingService = <span class="hljs-title function_">inject</span>(<span class="hljs-title class_">ThemingService</span>);

<span class="hljs-comment">// Application-wide, including open overlays.</span>
<span class="hljs-variable language_">this</span>.<span class="hljs-property">themingService</span>.<span class="hljs-title function_">setAppearance</span>({ <span class="hljs-attr">translucency</span>: <span class="hljs-number">0.5</span> });
<span class="hljs-comment">// Opaque presentation retains the same layout and component API.</span>
<span class="hljs-variable language_">this</span>.<span class="hljs-property">themingService</span>.<span class="hljs-title function_">setAppearance</span>({ <span class="hljs-attr">reducedTransparency</span>: <span class="hljs-literal">true</span> });</code></pre>
<p><code>BxA11yService</code> controls reduced motion; reduced transparency and forced colors receive opaque presentation. Glass is decorative and does not replace labels,
focus states, or semantic control states.</p>
<h2>Behavior and accessibility</h2>
<p>Leave decorative icons hidden from assistive technology; meaningful standalone icons need <code>decorative=false</code> and <code>ariaLabel</code>. Label icon buttons on the button
itself. The catalog progressively renders icon previews in bounded batches.</p>
<h2>Playground</h2>
<p>Open <code>/components/icon</code> for a working example, or <code>/icons</code> for categories, persistent catalog preferences, and a live customization inspector.</p>
`,"projects/blocks/modal/README.md":`<h1>Modal</h1>
<p>Service-driven dialogs with typed content and results, centered and side layouts, responsive bottom sheets, close guards, and shared Blocks appearance.</p>
<h2>Import</h2>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">Modal</span>, <span class="hljs-title class_">ModalService</span>, <span class="hljs-title class_">ModalHeaderDirective</span>, <span class="hljs-title class_">ModalFooterDirective</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/modal&#x27;</span>;</code></pre>
<p>Install <code>@filip.mazev/blocks</code> and follow the <a href="home">package setup</a>. Modal is a secondary entry point of that package.</p>
<h2>Usage</h2>
<p>Create standalone content in <code>message-dialog.ts</code>:</p>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">ChangeDetectionStrategy</span>, <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Button</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/forms&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Modal</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/modal&#x27;</span>;

<span class="hljs-meta">@Component</span>({
    <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;app-message-dialog&#x27;</span>,
    <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">Button</span>],
    <span class="hljs-attr">template</span>: <span class="hljs-string">&#x27;&lt;p&gt;{{ data }}&lt;/p&gt;&lt;button bx-button (click)=&quot;confirm()&quot;&gt;Confirm&lt;/button&gt;&#x27;</span>,
    <span class="hljs-attr">changeDetection</span>: <span class="hljs-title class_">ChangeDetectionStrategy</span>.<span class="hljs-property">OnPush</span>
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">MessageDialog</span> <span class="hljs-keyword">extends</span> <span class="hljs-title class_ inherited__">Modal</span>&lt;<span class="hljs-built_in">string</span>, <span class="hljs-built_in">boolean</span>&gt; {
    <span class="hljs-keyword">protected</span> <span class="hljs-title function_">confirm</span>(): <span class="hljs-built_in">void</span> {
        <span class="hljs-variable language_">this</span>.<span class="hljs-property">modal</span>.<span class="hljs-title function_">close</span>(<span class="hljs-string">&#x27;confirm&#x27;</span>, <span class="hljs-literal">true</span>);
    }
}</code></pre>
<p>Open it from an application action:</p>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">ChangeDetectionStrategy</span>, <span class="hljs-title class_">Component</span>, <span class="hljs-title class_">DestroyRef</span>, inject } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { takeUntilDestroyed } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core/rxjs-interop&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Button</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/forms&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ModalService</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/modal&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">MessageDialog</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./message-dialog&#x27;</span>;

<span class="hljs-meta">@Component</span>({
    <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;app-example&#x27;</span>,
    <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">Button</span>],
    <span class="hljs-attr">template</span>: <span class="hljs-string">&#x27;&lt;button bx-button (click)=&quot;open()&quot;&gt;Open dialog&lt;/button&gt;&#x27;</span>,
    <span class="hljs-attr">changeDetection</span>: <span class="hljs-title class_">ChangeDetectionStrategy</span>.<span class="hljs-property">OnPush</span>
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">Example</span> {
    <span class="hljs-keyword">private</span> <span class="hljs-keyword">readonly</span> modalService = <span class="hljs-title function_">inject</span>(<span class="hljs-title class_">ModalService</span>);
    <span class="hljs-keyword">private</span> <span class="hljs-keyword">readonly</span> destroyRef = <span class="hljs-title function_">inject</span>(<span class="hljs-title class_">DestroyRef</span>);

    <span class="hljs-keyword">protected</span> <span class="hljs-title function_">open</span>(): <span class="hljs-built_in">void</span> {
        <span class="hljs-keyword">const</span> ref = <span class="hljs-variable language_">this</span>.<span class="hljs-property">modalService</span>.<span class="hljs-property">open</span>&lt;<span class="hljs-built_in">string</span>, <span class="hljs-built_in">boolean</span>&gt;(<span class="hljs-title class_">MessageDialog</span>, {
            <span class="hljs-attr">data</span>: <span class="hljs-string">&#x27;Save these changes?&#x27;</span>,
            <span class="hljs-attr">header</span>: { <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;Confirm changes&#x27;</span> },
            <span class="hljs-attr">style</span>: { <span class="hljs-attr">layout</span>: <span class="hljs-string">&#x27;center&#x27;</span>, <span class="hljs-attr">breakpoints</span>: { <span class="hljs-attr">sm</span>: <span class="hljs-string">&#x27;bottom-sheet&#x27;</span> } }
        });

        ref.<span class="hljs-title function_">afterClosed</span>()
            .<span class="hljs-title function_">pipe</span>(<span class="hljs-title function_">takeUntilDestroyed</span>(<span class="hljs-variable language_">this</span>.<span class="hljs-property">destroyRef</span>))
            .<span class="hljs-title function_">subscribe</span>(<span class="hljs-function">(<span class="hljs-params">result</span>) =&gt;</span> {
                <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(result.<span class="hljs-property">state</span>, result.<span class="hljs-property">data</span>);
            });
    }
}</code></pre>
<p>For custom header/footer content, add <code>ModalHeaderDirective</code> and <code>ModalFooterDirective</code> to the content component&#39;s imports and use <code>*appModalHeader</code> and
<code>*appModalFooter</code>. These existing selectors remain supported.</p>
<h2>API</h2>
<h3>Content and references</h3>
<p><code>Modal&lt;D, R&gt;</code> supplies typed <code>data</code>, the active <code>modal: ModalRef&lt;D, R&gt;</code>, <code>onModalInit()</code>, and <code>close(result?)</code> (cancel mode).
<code>ModalService.open&lt;D, R&gt;(ContentComponent, config?)</code> returns that reference.</p>
<table>
<thead>
<tr>
<th>Member</th>
<th>Behavior</th>
</tr>
</thead>
<tbody><tr>
<td><code>close(state?, result?, forceClose?)</code></td>
<td>Close with <code>confirm</code> or <code>cancel</code> mode; force closing bypasses guards.</td>
</tr>
<tr>
<td><code>modalState$()</code></td>
<td>Observe <code>OPENING</code>, <code>OPEN</code>, <code>CLOSING</code>, and <code>CLOSED</code>.</td>
</tr>
<tr>
<td><code>backdropClick()</code></td>
<td>Observe backdrop pointer events.</td>
</tr>
<tr>
<td><code>afterClosed()</code></td>
<td>Observe the final <code>IModalCloseResult&lt;R | undefined&gt;</code> with <code>state</code> and optional <code>data</code>.</td>
</tr>
<tr>
<td><code>modalConfig</code></td>
<td>Read the resolved configuration.</td>
</tr>
</tbody></table>
<p>Use supported configuration and slots to customize the dialog. Applications do not need to inspect its component references or DOM.</p>
<h3>Configuration</h3>
<p><code>IModalConfig&lt;D, R&gt;</code> accepts:</p>
<table>
<thead>
<tr>
<th>Property</th>
<th>Default and purpose</th>
</tr>
</thead>
<tbody><tr>
<td><code>data</code></td>
<td>Optional typed content payload.</td>
</tr>
<tr>
<td><code>header</code></td>
<td>Optional <code>{ text: ResolvableText, icon?: IIconData }</code>.</td>
</tr>
<tr>
<td><code>style</code></td>
<td>Optional <code>IModalStyleConfig</code> described below.</td>
</tr>
<tr>
<td><code>open</code></td>
<td><code>true</code>; initial open state.</td>
</tr>
<tr>
<td><code>disableClose</code></td>
<td><code>false</code>; prevent ordinary dismissal.</td>
</tr>
<tr>
<td><code>disableCloseOnBackdropClick</code></td>
<td><code>false</code>; restrict backdrop dismissal only.</td>
</tr>
<tr>
<td><code>disableCloseOnNavigation</code></td>
<td><code>false</code>; retain the dialog during navigation when enabled.</td>
</tr>
<tr>
<td><code>closeGuard</code></td>
<td>Optional <code>ModalCloseGuard</code>.</td>
</tr>
<tr>
<td><code>closeGuardOnlyOnCancel</code></td>
<td><code>true</code>; run the guard for cancellation only.</td>
</tr>
<tr>
<td><code>id</code></td>
<td>Generated unique identifier when omitted.</td>
</tr>
<tr>
<td><code>contentClasses</code>, <code>contentStyles</code></td>
<td>Optional content presentation overrides.</td>
</tr>
<tr>
<td><code>afterClose</code></td>
<td>Optional observable callback contract. Prefer <code>afterClosed()</code> for application result handling.</td>
</tr>
</tbody></table>
<p>Instance options override <code>ModalGlobalSettingsService</code> defaults. Its <code>update()</code> currently applies <code>animate</code>, <code>hasBackdrop</code>, and <code>disableCloseOnBackdropClick</code>;
other exposed default signals can be configured directly before opening.</p>
<h3>Close guards</h3>
<p>Extend <code>ModalCloseGuard</code> and implement <code>canClose(modalService)</code> returning a boolean, Promise, or Observable. A false result retains the dialog.
<code>ModalConfirmCloseGuard&lt;D, R&gt;(ConfirmationComponent, config)</code> opens a typed confirmation dialog and waits for its result. Keep application-owned unsaved state
in the application; provide the guard when opening its content. <code>forceClose: true</code> deliberately bypasses the guard.</p>
<h3>Declarative nonmodal panels</h3>
<p>For page-owned inspectors and filters, use <a href="components/side-panel">SidePanel</a> from the primitives entry point with its boolean <code>open</code>
model. It shares square panel corners, surface material, layout, and close-control presentation with Modal Side while keeping nonmodal behavior separate. Modal
continues to own its guarded service lifecycle, modal semantics, nested stacking, backdrops, focus trapping/restoration, and scroll locks.</p>
<h2>Appearance and customization</h2>
<p><code>IModalStyleConfig</code> supports <code>layout: &#39;center&#39; | &#39;left&#39; | &#39;right&#39; | &#39;bottom-sheet&#39;</code>, responsive <code>breakpoints</code>, <code>animate</code> (true), <code>hasBackdrop</code> (true),
<code>showCloseButton</code> (true), <code>closeDelay</code> (175 ms), <code>contentWrapper</code> (true), <code>overrideFullHeight</code> (false), and optional <code>wrapperClasses</code>/<code>wrapperStyles</code>.
<code>mobileConfig</code> accepts <code>downSwipeLimit</code> (3) and optional <code>customHeight</code> for bottom sheets.</p>
<p>Breakpoints use a max-width strategy: sort overrides from smallest to largest and apply the first matching threshold. Above all thresholds, use <code>layout</code>. Keys
match the <a href="components">core breakpoint tokens</a>: <code>xs</code>, <code>sm</code>, <code>md</code>, <code>lg</code>, <code>xl</code>, <code>2xl</code>, <code>3xl</code>, and <code>4xl</code>.</p>
<p>The dialog inherits palette, semantic tokens, and appearance from <code>ThemingService</code>. See the
<a href="appearance">appearance guide</a> for application-wide configuration.</p>
<p>All modal layouts share the declarative SidePanel&#39;s translucent surface material and semantic background tokens. <code>--bx-modal-bg</code> and <code>--bx-modal-text</code> remain
modal-specific overrides, falling back to <code>--bx-panel-bg</code> / <code>--bx-panel-text</code> and then <code>--bx-bg-surface</code> / <code>--bx-text-primary</code>. Root dialogs retain their normal
0.52 opacity floor and shared appearance preferences. Left/right modal panels have four square corners; centered dialogs and bottom sheets retain their shapes.</p>
<p>The first dialog paints dimming outside its surface, while the shared backdrop retains blur and pointer dismissal. This prevents the root surface from blending
with its own black scrim. Its centered animation keeps dimming on an unscaled frame, so the backdrop remains viewport-sized during zoom.</p>
<h3>Nested dialogs</h3>
<p>Each nested dialog restores an independent fixed backdrop and dims the parent normally. Opening or closing a child never changes the parent&#39;s material or turns
its backdrop off. The first nested dialog uses a minimum 0.9 material opacity; the next nested dialog and deeper levels use 1. More opaque application or
accessibility settings still take precedence. This policy applies to centered, side, and bottom-sheet layouts, including responsive layout changes and close
guards. Depth follows the mounted modal stack and updates when an intervening dialog is removed; a dialog remains mounted through its close animation.</p>
<p>Customize the floors through the shared settings service. Index zero is the first nested dialog; the last entry repeats for deeper levels. An empty array
retains ordinary material at every depth. Values clamp to 0.52\u20131; nonfinite entries use the defaults for their depth. Replace the array when updating it;
mounted modals respond reactively.</p>
<pre class="playground-code-block" tabindex="0" aria-label="typescript code example"><code class="hljs language-typescript"><span class="hljs-keyword">import</span> { inject } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ModalGlobalSettingsService</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/modal&#x27;</span>;

<span class="hljs-keyword">private</span> <span class="hljs-keyword">readonly</span> modalGlobalSettingsService = <span class="hljs-title function_">inject</span>(<span class="hljs-title class_">ModalGlobalSettingsService</span>);

<span class="hljs-comment">// First nested dialog: at least 90% opaque; further nesting: fully opaque.</span>
<span class="hljs-variable language_">this</span>.<span class="hljs-property">modalGlobalSettingsService</span>.<span class="hljs-property">nestedOpacityFloors</span>.<span class="hljs-title function_">set</span>([<span class="hljs-number">0.9</span>, <span class="hljs-number">1</span>]);</code></pre>
<p><code>hasBackdrop: false</code> keeps that dialog&#39;s backdrop off. Reduced-transparency and forced-color modes retain the opaque fallback.</p>
<h2>Behavior and accessibility</h2>
<p>Open content through <code>ModalService</code> so focus handling, Escape/backdrop dismissal, close guards, scroll locks, layout, and cleanup stay coordinated.
<code>ScrollLockService</code> keeps separate locks for concurrent overlays. Closing one overlay does not unlock another. Reduced motion takes precedence over requested
animation; reduced transparency and forced colors receive opaque backdrop presentation.</p>
<p>Centered dialogs constrain their content to the available viewport, including when nested on small screens. Their content region scrolls independently while the
header and footer remain reachable.</p>
<p>Header text accepts <code>ResolvableText</code> and updates through the optional <code>BX_I18N</code> adapter. Content components own the translation and accessible naming of their
custom actions, descriptions, errors, and form controls. Keep actions reachable in constrained viewports and preserve focus when completing asynchronous work.</p>
<h2>Playground</h2>
<p>The live dialog includes <strong>Open nested dialog</strong>, which can be used recursively to compare the root, 90% nested, and fully opaque deeper surfaces. Closing a
child returns to its parent. The confirm-close guard exercises the same independent backdrop and depth policy.</p>
<p>Open <code>/modal</code> for the configurator, <code>/components/modal-core</code> for the lifecycle host, or the centered, side, bottom-sheet, header, footer, and backdrop entries
in the component catalog. The examples demonstrate typed results and guarded dismissal.</p>
`,"projects/blocks/modal/components/modal-core/README.md":`<h1>Modal core</h1>
<p>The service-owned host that composes modal content and chooses the active layout.</p>
<h2>Import</h2>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">ModalCore</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/modal&#x27;</span>;</code></pre>
<p>Add the standalone component or directive to your component&#39;s <code>imports</code>.</p>
<h2>Usage</h2>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-comment">&lt;!-- Open from an action in your template --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">bx-button</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;openModal()&quot;</span>&gt;</span>Open modal core<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span></code></pre>
<h2>API</h2>
<p><code>ModalService.open(ContentComponent, config)</code> accepts data, header, style, close behavior and guards. Style <code>layout</code> selects center, left, right or
bottom-sheet; <code>animate</code>, <code>hasBackdrop</code>, and <code>showCloseButton</code> customize presentation. Observe <code>afterClosed()</code> for the close result.</p>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-variable language_">this</span>.<span class="hljs-property">modalService</span>.<span class="hljs-title function_">open</span>(<span class="hljs-title class_">DialogContent</span>, {
    <span class="hljs-attr">header</span>: { <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;Modal core&#x27;</span> },
    <span class="hljs-attr">style</span>: { <span class="hljs-attr">layout</span>: <span class="hljs-string">&#x27;center&#x27;</span>, <span class="hljs-attr">hasBackdrop</span>: <span class="hljs-literal">true</span> }
});</code></pre>
<h2>Appearance</h2>
<p>Appearance uses Blocks semantic colors, spacing, radius and motion tokens. Glass surfaces inherit the application configuration from <code>ThemingService</code>; adjusting
translucency updates existing components and overlays. Content-only parts share their containing surface instead of adding another backdrop filter.</p>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { inject } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ThemingService</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/core&#x27;</span>;

<span class="hljs-keyword">private</span> <span class="hljs-keyword">readonly</span> themingService = <span class="hljs-title function_">inject</span>(<span class="hljs-title class_">ThemingService</span>);

<span class="hljs-comment">// Application-wide, including open overlays.</span>
<span class="hljs-variable language_">this</span>.<span class="hljs-property">themingService</span>.<span class="hljs-title function_">setAppearance</span>({ <span class="hljs-attr">translucency</span>: <span class="hljs-number">0.5</span> });
<span class="hljs-comment">// Opaque presentation retains the same layout and component API.</span>
<span class="hljs-variable language_">this</span>.<span class="hljs-property">themingService</span>.<span class="hljs-title function_">setAppearance</span>({ <span class="hljs-attr">reducedTransparency</span>: <span class="hljs-literal">true</span> });</code></pre>
<p><code>BxA11yService</code> controls reduced motion; reduced transparency and forced colors receive opaque presentation. Glass is decorative and does not replace labels,
focus states, or semantic control states.</p>
<h2>Behavior and accessibility</h2>
<p>Open through <code>ModalService</code> so focus management, close guards, backdrop behavior, lifecycle and cleanup remain coordinated. <code>Modal</code> content receives its typed
data and <code>ModalRef</code>; call <code>modal.close(mode, result)</code> to return a result. Do not instantiate service-owned view wrappers as general page containers.</p>
<h2>Playground</h2>
<p>Open <code>/components/modal-core</code> for a working example and its current value or action result.</p>
`,"projects/blocks/modal/components/shared/ui/backdrop/README.md":`<h1>Modal backdrop</h1>
<p>The background scrim that separates an open modal from page content.</p>
<h2>Import</h2>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">ModalBackdrop</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/modal&#x27;</span>;</code></pre>
<p>Add the standalone component or directive to your component&#39;s <code>imports</code>.</p>
<h2>Usage</h2>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-comment">&lt;!-- Open from an action in your template --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">bx-button</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;openModal()&quot;</span>&gt;</span>Open modal backdrop<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span></code></pre>
<h2>API</h2>
<p>The reusable backdrop exposes <code>isAnimated</code> (false), <code>isOpen</code> (false), <code>label: ResolvableText</code> (&quot;Close dialog&quot;), and <code>tabIndex</code> (0), and emits
<code>click: MouseEvent</code>. Mobile side navigation uses the same component with its translated close label and tab index -1 because its panel supplies a close action.</p>
<p><code>ModalService.open(ContentComponent, config)</code> accepts data, header, style, close behavior and guards. Style <code>layout</code> selects center, left, right or
bottom-sheet; <code>animate</code>, <code>hasBackdrop</code>, and <code>showCloseButton</code> customize presentation. Observe <code>afterClosed()</code> for the close result.</p>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-variable language_">this</span>.<span class="hljs-property">modalService</span>.<span class="hljs-title function_">open</span>(<span class="hljs-title class_">DialogContent</span>, {
    <span class="hljs-attr">header</span>: { <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;Modal backdrop&#x27;</span> },
    <span class="hljs-attr">style</span>: { <span class="hljs-attr">layout</span>: <span class="hljs-string">&#x27;center&#x27;</span>, <span class="hljs-attr">hasBackdrop</span>: <span class="hljs-literal">true</span> }
});</code></pre>
<h2>Appearance</h2>
<p><code>--bx-modal-backdrop-position</code> defaults to <code>fixed</code>, <code>--bx-modal-backdrop-z-index</code> to the shared modal layer, and <code>--bx-modal-backdrop-background</code> to the shared
dim scrim. Owners can set these variables to contain or stack the backdrop without reaching into its DOM. Reduced-transparency and forced-color fallbacks take
precedence over the ordinary background override.</p>
<p>ModalService uses this same backdrop for centered, side, and bottom-sheet dialogs. In that composition the backdrop supplies blur and dismissal, while the root
surface paints dimming outside its own border to avoid a gray tint. Nested dialogs use independent filled backdrops with their own blur and dismissal; older
backdrop/material layers stay intact. Nested material becomes at least 90% opaque at the first nested level and fully opaque at deeper levels by default.
Standalone backdrops and mobile navigation retain their existing filled-scrim presentation.</p>
<p>Appearance uses Blocks semantic colors, spacing, radius and motion tokens. Glass surfaces inherit the application configuration from <code>ThemingService</code>; adjusting
translucency updates existing components and overlays. Content-only parts share their containing surface instead of adding another backdrop filter.</p>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { inject } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ThemingService</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/core&#x27;</span>;

<span class="hljs-keyword">private</span> <span class="hljs-keyword">readonly</span> themingService = <span class="hljs-title function_">inject</span>(<span class="hljs-title class_">ThemingService</span>);

<span class="hljs-comment">// Application-wide, including open overlays.</span>
<span class="hljs-variable language_">this</span>.<span class="hljs-property">themingService</span>.<span class="hljs-title function_">setAppearance</span>({ <span class="hljs-attr">translucency</span>: <span class="hljs-number">0.5</span> });
<span class="hljs-comment">// Opaque presentation retains the same layout and component API.</span>
<span class="hljs-variable language_">this</span>.<span class="hljs-property">themingService</span>.<span class="hljs-title function_">setAppearance</span>({ <span class="hljs-attr">reducedTransparency</span>: <span class="hljs-literal">true</span> });</code></pre>
<p><code>BxA11yService</code> controls reduced motion; reduced transparency and forced colors receive opaque presentation. Glass is decorative and does not replace labels,
focus states, or semantic control states.</p>
<h2>Behavior and accessibility</h2>
<p>Open through <code>ModalService</code> so focus management, close guards, backdrop behavior, lifecycle and cleanup remain coordinated. <code>Modal</code> content receives its typed
data and <code>ModalRef</code>; call <code>modal.close(mode, result)</code> to return a result. Do not instantiate service-owned view wrappers as general page containers.</p>
<h2>Playground</h2>
<p>Open <code>/components/modal-backdrop</code> for a working example and its current value or action result.</p>
`,"projects/blocks/modal/components/shared/ui/banner/README.md":`<h1>Modal banner</h1>
<p>The shared modal heading, semantic icon and close action.</p>
<h2>Import</h2>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">ModalBanner</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/modal&#x27;</span>;</code></pre>
<p>Add the standalone component or directive to your component&#39;s <code>imports</code>.</p>
<h2>Usage</h2>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">bx-modal-banner</span> [<span class="hljs-attr">header</span>]=<span class="hljs-string">&quot;{ text: &#x27;Project settings&#x27; }&quot;</span> [<span class="hljs-attr">showCloseButton</span>]=<span class="hljs-string">&quot;true&quot;</span> (<span class="hljs-attr">close</span>)=<span class="hljs-string">&quot;handleClose($event)&quot;</span> /&gt;</span></code></pre>
<h2>API</h2>
<p>Required inputs: <code>header</code> (header config or undefined), <code>showCloseButton</code> (boolean). <code>close</code> emits a modal close mode or undefined. Header supports text and an
optional icon configuration.</p>
<h2>Appearance</h2>
<p>Title/icon alignment, wrapping, divider spacing, and the compact close action use shared panel-banner Sass presentation. Declarative SidePanel headings reuse
the same styling and expose a matching <code>headerIcon: IIconData</code> contract.</p>
<p>Appearance uses Blocks semantic colors, spacing, radius and motion tokens. Glass surfaces inherit the application configuration from <code>ThemingService</code>; adjusting
translucency updates existing components and overlays. Content-only parts share their containing surface instead of adding another backdrop filter.</p>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { inject } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ThemingService</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/core&#x27;</span>;

<span class="hljs-keyword">private</span> <span class="hljs-keyword">readonly</span> themingService = <span class="hljs-title function_">inject</span>(<span class="hljs-title class_">ThemingService</span>);

<span class="hljs-comment">// Application-wide, including open overlays.</span>
<span class="hljs-variable language_">this</span>.<span class="hljs-property">themingService</span>.<span class="hljs-title function_">setAppearance</span>({ <span class="hljs-attr">translucency</span>: <span class="hljs-number">0.5</span> });
<span class="hljs-comment">// Opaque presentation retains the same layout and component API.</span>
<span class="hljs-variable language_">this</span>.<span class="hljs-property">themingService</span>.<span class="hljs-title function_">setAppearance</span>({ <span class="hljs-attr">reducedTransparency</span>: <span class="hljs-literal">true</span> });</code></pre>
<p><code>BxA11yService</code> controls reduced motion; reduced transparency and forced colors receive opaque presentation. Glass is decorative and does not replace labels,
focus states, or semantic control states.</p>
<h2>Behavior and accessibility</h2>
<p>Prefer configuring <code>header</code> on ModalService for a normal dialog. Direct use is available for custom composition; ensure the surrounding dialog has an accessible
name and handle close output.</p>
<h2>Playground</h2>
<p>Open <code>/components/modal-banner</code> for a working example and its current value or action result.</p>
`,"projects/blocks/modal/components/views/bottom-sheet/README.md":`<h1>Bottom sheet</h1>
<p>A bottom-aligned modal surface suitable for compact actions and mobile layouts.</p>
<h2>Import</h2>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">ModalBottomSheet</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/modal&#x27;</span>;</code></pre>
<p>Add the standalone component or directive to your component&#39;s <code>imports</code>.</p>
<h2>Usage</h2>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-comment">&lt;!-- Open from an action in your template --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">bx-button</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;openModal()&quot;</span>&gt;</span>Open bottom sheet<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span></code></pre>
<h2>API</h2>
<p><code>ModalService.open(ContentComponent, config)</code> accepts data, header, style, close behavior and guards. Style <code>layout</code> selects center, left, right or
bottom-sheet; <code>animate</code>, <code>hasBackdrop</code>, and <code>showCloseButton</code> customize presentation. Observe <code>afterClosed()</code> for the close result.</p>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-variable language_">this</span>.<span class="hljs-property">modalService</span>.<span class="hljs-title function_">open</span>(<span class="hljs-title class_">DialogContent</span>, {
    <span class="hljs-attr">header</span>: { <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;Bottom sheet&#x27;</span> },
    <span class="hljs-attr">style</span>: { <span class="hljs-attr">layout</span>: <span class="hljs-string">&#x27;bottom-sheet&#x27;</span>, <span class="hljs-attr">hasBackdrop</span>: <span class="hljs-literal">true</span> }
});</code></pre>
<h2>Appearance</h2>
<p>Appearance uses Blocks semantic colors, spacing, radius and motion tokens. Glass surfaces inherit the application configuration from <code>ThemingService</code>; adjusting
translucency updates existing components and overlays. Content-only parts share their containing surface instead of adding another backdrop filter.</p>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { inject } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ThemingService</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/core&#x27;</span>;

<span class="hljs-keyword">private</span> <span class="hljs-keyword">readonly</span> themingService = <span class="hljs-title function_">inject</span>(<span class="hljs-title class_">ThemingService</span>);

<span class="hljs-comment">// Application-wide, including open overlays.</span>
<span class="hljs-variable language_">this</span>.<span class="hljs-property">themingService</span>.<span class="hljs-title function_">setAppearance</span>({ <span class="hljs-attr">translucency</span>: <span class="hljs-number">0.5</span> });
<span class="hljs-comment">// Opaque presentation retains the same layout and component API.</span>
<span class="hljs-variable language_">this</span>.<span class="hljs-property">themingService</span>.<span class="hljs-title function_">setAppearance</span>({ <span class="hljs-attr">reducedTransparency</span>: <span class="hljs-literal">true</span> });</code></pre>
<p><code>BxA11yService</code> controls reduced motion; reduced transparency and forced colors receive opaque presentation. Glass is decorative and does not replace labels,
focus states, or semantic control states.</p>
<h2>Behavior and accessibility</h2>
<p>Open through <code>ModalService</code> so focus management, close guards, backdrop behavior, lifecycle and cleanup remain coordinated. <code>Modal</code> content receives its typed
data and <code>ModalRef</code>; call <code>modal.close(mode, result)</code> to return a result. Do not instantiate service-owned view wrappers as general page containers.</p>
<h2>Playground</h2>
<p>Open <code>/components/modal-bottom-sheet</code> for a working example and its current value or action result.</p>
`,"projects/blocks/modal/components/views/centered/README.md":`<h1>Centered modal</h1>
<p>A focused dialog centered in the available viewport.</p>
<h2>Import</h2>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">ModalCentered</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/modal&#x27;</span>;</code></pre>
<p>Add the standalone component or directive to your component&#39;s <code>imports</code>.</p>
<h2>Usage</h2>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-comment">&lt;!-- Open from an action in your template --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">bx-button</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;openModal()&quot;</span>&gt;</span>Open centered modal<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span></code></pre>
<h2>API</h2>
<p><code>ModalService.open(ContentComponent, config)</code> accepts data, header, style, close behavior and guards. Style <code>layout</code> selects center, left, right or
bottom-sheet; <code>animate</code>, <code>hasBackdrop</code>, and <code>showCloseButton</code> customize presentation. Observe <code>afterClosed()</code> for the close result.</p>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-variable language_">this</span>.<span class="hljs-property">modalService</span>.<span class="hljs-title function_">open</span>(<span class="hljs-title class_">DialogContent</span>, {
    <span class="hljs-attr">header</span>: { <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;Centered modal&#x27;</span> },
    <span class="hljs-attr">style</span>: { <span class="hljs-attr">layout</span>: <span class="hljs-string">&#x27;center&#x27;</span>, <span class="hljs-attr">hasBackdrop</span>: <span class="hljs-literal">true</span> }
});</code></pre>
<h2>Appearance</h2>
<p>Appearance uses Blocks semantic colors, spacing, radius and motion tokens. Glass surfaces inherit the application configuration from <code>ThemingService</code>; adjusting
translucency updates existing components and overlays. Content-only parts share their containing surface instead of adding another backdrop filter.</p>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { inject } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ThemingService</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/core&#x27;</span>;

<span class="hljs-keyword">private</span> <span class="hljs-keyword">readonly</span> themingService = <span class="hljs-title function_">inject</span>(<span class="hljs-title class_">ThemingService</span>);

<span class="hljs-comment">// Application-wide, including open overlays.</span>
<span class="hljs-variable language_">this</span>.<span class="hljs-property">themingService</span>.<span class="hljs-title function_">setAppearance</span>({ <span class="hljs-attr">translucency</span>: <span class="hljs-number">0.5</span> });
<span class="hljs-comment">// Opaque presentation retains the same layout and component API.</span>
<span class="hljs-variable language_">this</span>.<span class="hljs-property">themingService</span>.<span class="hljs-title function_">setAppearance</span>({ <span class="hljs-attr">reducedTransparency</span>: <span class="hljs-literal">true</span> });</code></pre>
<p><code>BxA11yService</code> controls reduced motion; reduced transparency and forced colors receive opaque presentation. Glass is decorative and does not replace labels,
focus states, or semantic control states.</p>
<h2>Behavior and accessibility</h2>
<p>Open through <code>ModalService</code> so focus management, close guards, backdrop behavior, lifecycle and cleanup remain coordinated. <code>Modal</code> content receives its typed
data and <code>ModalRef</code>; call <code>modal.close(mode, result)</code> to return a result. Do not instantiate service-owned view wrappers as general page containers.</p>
<h2>Playground</h2>
<p>Open <code>/components/modal-centered</code> for a working example and its current value or action result.</p>
`,"projects/blocks/modal/components/views/side/README.md":`<h1>Side modal</h1>
<p>A left or right panel for editing alongside the page context.</p>
<h2>Import</h2>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">ModalSide</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/modal&#x27;</span>;</code></pre>
<p>Add the standalone component or directive to your component&#39;s <code>imports</code>.</p>
<h2>Usage</h2>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-comment">&lt;!-- Open from an action in your template --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">bx-button</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;openModal()&quot;</span>&gt;</span>Open side modal<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span></code></pre>
<h2>API</h2>
<p><code>ModalService.open(ContentComponent, config)</code> accepts data, header, style, close behavior and guards. Style <code>layout</code> selects center, left, right or
bottom-sheet; <code>animate</code>, <code>hasBackdrop</code>, and <code>showCloseButton</code> customize presentation. Observe <code>afterClosed()</code> for the close result.</p>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-variable language_">this</span>.<span class="hljs-property">modalService</span>.<span class="hljs-title function_">open</span>(<span class="hljs-title class_">DialogContent</span>, {
    <span class="hljs-attr">header</span>: { <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;Side modal&#x27;</span> },
    <span class="hljs-attr">style</span>: { <span class="hljs-attr">layout</span>: <span class="hljs-string">&#x27;right&#x27;</span>, <span class="hljs-attr">hasBackdrop</span>: <span class="hljs-literal">true</span> }
});</code></pre>
<h2>Appearance</h2>
<p>Appearance uses Blocks semantic colors, spacing, radius and motion tokens. Glass surfaces inherit the application configuration from <code>ThemingService</code>; adjusting
translucency updates existing components and overlays. Content-only parts share their containing surface instead of adding another backdrop filter.</p>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { inject } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ThemingService</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/core&#x27;</span>;

<span class="hljs-keyword">private</span> <span class="hljs-keyword">readonly</span> themingService = <span class="hljs-title function_">inject</span>(<span class="hljs-title class_">ThemingService</span>);

<span class="hljs-comment">// Application-wide, including open overlays.</span>
<span class="hljs-variable language_">this</span>.<span class="hljs-property">themingService</span>.<span class="hljs-title function_">setAppearance</span>({ <span class="hljs-attr">translucency</span>: <span class="hljs-number">0.5</span> });
<span class="hljs-comment">// Opaque presentation retains the same layout and component API.</span>
<span class="hljs-variable language_">this</span>.<span class="hljs-property">themingService</span>.<span class="hljs-title function_">setAppearance</span>({ <span class="hljs-attr">reducedTransparency</span>: <span class="hljs-literal">true</span> });</code></pre>
<p><code>BxA11yService</code> controls reduced motion; reduced transparency and forced colors receive opaque presentation. Glass is decorative and does not replace labels,
focus states, or semantic control states.</p>
<h2>Behavior and accessibility</h2>
<p>Open through <code>ModalService</code> so focus management, close guards, backdrop behavior, lifecycle and cleanup remain coordinated. <code>Modal</code> content receives its typed
data and <code>ModalRef</code>; call <code>modal.close(mode, result)</code> to return a result. Do not instantiate service-owned view wrappers as general page containers.</p>
<h2>Playground</h2>
<p>Open <code>/components/modal-side</code> for a working example and its current value or action result.</p>
`,"projects/blocks/modal/directives/footer/README.md":`<h1>Modal footer</h1>
<p>Projects custom footer content into the active Blocks modal layout.</p>
<h2>Import</h2>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">ModalFooterDirective</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/modal&#x27;</span>;</code></pre>
<p>Add the standalone component or directive to your component&#39;s <code>imports</code>.</p>
<h2>Usage</h2>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> *<span class="hljs-attr">appModalFooter</span>&gt;</span>Custom footer content<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></code></pre>
<h2>API</h2>
<p>A standalone structural directive. It captures a TemplateRef and registers it with the owning ModalCore; it has no public inputs.</p>
<h2>Appearance</h2>
<p>Appearance uses Blocks semantic colors, spacing, radius and motion tokens. Glass surfaces inherit the application configuration from <code>ThemingService</code>; adjusting
translucency updates existing components and overlays. Content-only parts share their containing surface instead of adding another backdrop filter.</p>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { inject } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ThemingService</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/core&#x27;</span>;

<span class="hljs-keyword">private</span> <span class="hljs-keyword">readonly</span> themingService = <span class="hljs-title function_">inject</span>(<span class="hljs-title class_">ThemingService</span>);

<span class="hljs-comment">// Application-wide, including open overlays.</span>
<span class="hljs-variable language_">this</span>.<span class="hljs-property">themingService</span>.<span class="hljs-title function_">setAppearance</span>({ <span class="hljs-attr">translucency</span>: <span class="hljs-number">0.5</span> });
<span class="hljs-comment">// Opaque presentation retains the same layout and component API.</span>
<span class="hljs-variable language_">this</span>.<span class="hljs-property">themingService</span>.<span class="hljs-title function_">setAppearance</span>({ <span class="hljs-attr">reducedTransparency</span>: <span class="hljs-literal">true</span> });</code></pre>
<p><code>BxA11yService</code> controls reduced motion; reduced transparency and forced colors receive opaque presentation. Glass is decorative and does not replace labels,
focus states, or semantic control states.</p>
<h2>Behavior and accessibility</h2>
<p>Use only inside content opened by ModalService. The template moves to the active modal view. Keep action buttons keyboard accessible and use ModalRef to close
with a result. Outside a modal the directive emits a development warning.</p>
<h2>Playground</h2>
<p>Open <code>/components/modal-footer</code> for a working example and its current value or action result.</p>
`,"projects/blocks/modal/directives/header/README.md":`<h1>Modal header</h1>
<p>Projects custom header content into the active Blocks modal layout.</p>
<h2>Import</h2>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">ModalHeaderDirective</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/modal&#x27;</span>;</code></pre>
<p>Add the standalone component or directive to your component&#39;s <code>imports</code>.</p>
<h2>Usage</h2>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> *<span class="hljs-attr">appModalHeader</span>&gt;</span>Custom header content<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></code></pre>
<h2>API</h2>
<p>A standalone structural directive. It captures a TemplateRef and registers it with the owning ModalCore; it has no public inputs.</p>
<h2>Appearance</h2>
<p>Appearance uses Blocks semantic colors, spacing, radius and motion tokens. Glass surfaces inherit the application configuration from <code>ThemingService</code>; adjusting
translucency updates existing components and overlays. Content-only parts share their containing surface instead of adding another backdrop filter.</p>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { inject } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ThemingService</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/core&#x27;</span>;

<span class="hljs-keyword">private</span> <span class="hljs-keyword">readonly</span> themingService = <span class="hljs-title function_">inject</span>(<span class="hljs-title class_">ThemingService</span>);

<span class="hljs-comment">// Application-wide, including open overlays.</span>
<span class="hljs-variable language_">this</span>.<span class="hljs-property">themingService</span>.<span class="hljs-title function_">setAppearance</span>({ <span class="hljs-attr">translucency</span>: <span class="hljs-number">0.5</span> });
<span class="hljs-comment">// Opaque presentation retains the same layout and component API.</span>
<span class="hljs-variable language_">this</span>.<span class="hljs-property">themingService</span>.<span class="hljs-title function_">setAppearance</span>({ <span class="hljs-attr">reducedTransparency</span>: <span class="hljs-literal">true</span> });</code></pre>
<p><code>BxA11yService</code> controls reduced motion; reduced transparency and forced colors receive opaque presentation. Glass is decorative and does not replace labels,
focus states, or semantic control states.</p>
<h2>Behavior and accessibility</h2>
<p>Use only inside content opened by ModalService. The template moves to the active modal view. Keep action buttons keyboard accessible and use ModalRef to close
with a result. Outside a modal the directive emits a development warning.</p>
<h2>Playground</h2>
<p>Open <code>/components/modal-header</code> for a working example and its current value or action result.</p>
`,"projects/blocks/navigation/README.md":`<h1>Navigation</h1>
<p>Declare UI sections once with <code>defineNavigation</code>. Its <code>withInAppNavigation</code> helper restricts each route&#39;s <code>section</code> to the declared IDs and checks the remaining
navigation metadata. Declarations can live in <code>app.routes.ts</code> or a shared <code>app.navigation.ts</code> used by multiple route files.</p>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { defineNavigation } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/navigation&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Routes</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/router&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">const</span> navigation = <span class="hljs-title function_">defineNavigation</span>({
    <span class="hljs-attr">sections</span>: [
        { <span class="hljs-attr">id</span>: <span class="hljs-string">&#x27;start&#x27;</span>, <span class="hljs-attr">title</span>: <span class="hljs-string">&#x27;Get started&#x27;</span> },
        { <span class="hljs-attr">id</span>: <span class="hljs-string">&#x27;forms&#x27;</span>, <span class="hljs-attr">title</span>: <span class="hljs-string">&#x27;Form controls&#x27;</span> }
    ]
});

<span class="hljs-keyword">const</span> { withInAppNavigation } = navigation;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">const</span> <span class="hljs-attr">routes</span>: <span class="hljs-title class_">Routes</span> = [
    <span class="hljs-title function_">withInAppNavigation</span>({ <span class="hljs-attr">path</span>: <span class="hljs-string">&#x27;home&#x27;</span>, <span class="hljs-attr">loadComponent</span>: <span class="hljs-function">() =&gt;</span> <span class="hljs-keyword">import</span>(<span class="hljs-string">&#x27;./home&#x27;</span>).<span class="hljs-title function_">then</span>(<span class="hljs-function">(<span class="hljs-params">m</span>) =&gt;</span> m.<span class="hljs-property">Home</span>) }, { <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;Overview&#x27;</span>, <span class="hljs-attr">section</span>: <span class="hljs-string">&#x27;start&#x27;</span> })
];

<span class="hljs-comment">// withInAppNavigation({}, { section: &#x27;typo&#x27; }); // TypeScript error: undeclared section.</span></code></pre>
<p>Provide the same configuration in your application&#39;s providers:</p>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { provideNavigation } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/navigation&#x27;</span>;
<span class="hljs-keyword">import</span> { navigation } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./app.routes&#x27;</span>;

<span class="hljs-comment">// In ApplicationConfig.providers, alongside provideRouter(routes):</span>
<span class="hljs-title function_">provideNavigation</span>(navigation.<span class="hljs-property">config</span>);</code></pre>
<p><code>NavigationService.menuGroups()</code> returns nonempty <code>{ id, title, items }</code> groups. Sections follow declaration order unless their numeric <code>order</code> is specified;
sections with an order come first. Titles default to the section ID. Each group&#39;s items are flat entries from the menu tree, including descendants, with
existing route ordering, access checks, visibility and translations applied. Excluded parent containers do not become links. <code>menu()</code> continues to expose the
menu tree.</p>
<p>The standalone <code>withInAppNavigation</code> and <code>provideNavigation</code> helpers remain available. For these existing callers, undeclared sections appear after declared
sections with their ID as the title. Items without a section appear in a group with an empty ID and title. Type checking against a declaration applies when
using the <code>withInAppNavigation</code> returned by <code>defineNavigation</code>.</p>
<p>The UI can apply search to <code>menuGroups()</code> without defining section titles, ordering or flattening. Track groups by <code>id</code> and entries by <code>route</code>.</p>
<p>Run the grouping and metadata type checks with <code>npm run test:navigation</code>.</p>
<h2>Navigation views</h2>
<p><code>SideNav</code> and <code>TopNav</code> consume the same hierarchical route sections, metadata, access filtering, translation adapter, and most-specific active route. They share
item presentation, one-level-at-a-time browsing, flat contextual search, and focus/scroll restoration. Configure application defaults through <code>sideNav</code> and
<code>topNav</code> in <code>defineNavigation</code>; instance configuration overrides those settings.</p>
<p>See <a href="components/side-nav">side navigation</a> and <a href="components/top-nav">top navigation</a> for public imports, configuration, slots, accessibility,
and runnable examples. Their playground routes are <code>/components/side-nav</code> and <code>/components/top-nav</code>.</p>
<h2>Page layout integration</h2>
<p><code>provideNavigation()</code> also provides the optional <code>BX_PAGE_NAVIGATION</code> adapter from primitives. <code>NavigationService.page</code> exposes reactive section and page titles
plus breadcrumbs for <a href="components/layout/page-container">PageContainer</a>. Descriptions remain application-owned. Breadcrumbs appear after one
nesting by default and the threshold can be configured on each container. Existing Breadcrumbs components retain their own display settings.</p>
`,"projects/blocks/navigation/components/breadcrumbs/README.md":`<h1>Breadcrumbs</h1>
<p>A route-aware trail derived from Blocks navigation metadata.</p>
<h2>Import</h2>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">Breadcrumbs</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/navigation&#x27;</span>;</code></pre>
<p>Add the standalone component or directive to your component&#39;s <code>imports</code>.</p>
<h2>Usage</h2>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">bx-breadcrumbs</span> [<span class="hljs-attr">minimumBreadcrumbs</span>]=<span class="hljs-string">&quot;1&quot;</span> <span class="hljs-attr">divider</span>=<span class="hljs-string">&quot;chevron-right&quot;</span> /&gt;</span></code></pre>
<h2>API</h2>
<p><code>minimumBreadcrumbs</code> defaults to 2; values below 1 are clamped. <code>divider</code> accepts an icon name. Route labels come from <code>withInAppNavigation</code> metadata and
<code>NavigationService</code>.</p>
<h2>Appearance</h2>
<p>Appearance uses Blocks semantic colors, spacing, radius and motion tokens. Glass surfaces inherit the application configuration from <code>ThemingService</code>; adjusting
translucency updates existing components and overlays. Content-only parts share their containing surface instead of adding another backdrop filter.</p>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { inject } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ThemingService</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/core&#x27;</span>;

<span class="hljs-keyword">private</span> <span class="hljs-keyword">readonly</span> themingService = <span class="hljs-title function_">inject</span>(<span class="hljs-title class_">ThemingService</span>);

<span class="hljs-comment">// Application-wide, including open overlays.</span>
<span class="hljs-variable language_">this</span>.<span class="hljs-property">themingService</span>.<span class="hljs-title function_">setAppearance</span>({ <span class="hljs-attr">translucency</span>: <span class="hljs-number">0.5</span> });
<span class="hljs-comment">// Opaque presentation retains the same layout and component API.</span>
<span class="hljs-variable language_">this</span>.<span class="hljs-property">themingService</span>.<span class="hljs-title function_">setAppearance</span>({ <span class="hljs-attr">reducedTransparency</span>: <span class="hljs-literal">true</span> });</code></pre>
<p><code>BxA11yService</code> controls reduced motion; reduced transparency and forced colors receive opaque presentation. Glass is decorative and does not replace labels,
focus states, or semantic control states.</p>
<h2>Behavior and accessibility</h2>
<p>Register metadata with <code>withInAppNavigation</code> and provide navigation in application configuration. Breadcrumbs navigate using the router and update after
navigation. This demo lives under Components so the trail has a real parent route.</p>
<h2>Playground</h2>
<p>Open <code>/components/breadcrumbs</code> for a working example and its current value or action result.</p>
`,"projects/blocks/navigation/components/shared/navigation-item/README.md":`<h1>Navigation item</h1>
<p>Internal item presentation shared by <a href="components/side-nav">SideNav</a> and <a href="components/top-nav">TopNav</a>. Consumers configure the public owners rather
than importing this implementation component.</p>
<p>A native page link and a separate disclosure retain independent hover/focus surfaces. Only the most specific active route receives selected styling. Top-level
horizontal disclosures point down/up; vertical levels use a forward arrow. The scoped navigation state coordinates all requests through the owner&#39;s one submenu
panel.</p>
<p>Search results always retain their muted parent path, including custom templates. Search results have no floating guides or additional selection styling. The
established side-nav CSS variables remain supported; top navigation maps its own variables into the same shared styles.</p>
<p>Both public playground pages demonstrate these interactions, translation changes, disabled routes, and four levels of nesting.</p>
`,"projects/blocks/navigation/components/shared/navigation-level/README.md":`<h1>Navigation level</h1>
<p>Internal nested-list presentation shared by <a href="components/side-nav">SideNav</a> and <a href="components/top-nav">TopNav</a>. The owner supplies one scoped state/focus
service and chooses the surface: inline rail, side panel, or top dropdown.</p>
<p>The current parent remains a route link. Back, Escape, or the opposite arrow returns one level, while Up/Down and Home/End move through the list. The header and
parent path remain above the scrolling list. Ancestor path buttons open their respective panels without route navigation, using Blocks text buttons and the
owner\u2019s focus/scroll restoration. The current parent heading remains a separate page link. Owners restore the matching scroll position and disclosure focus.
Levels use the same short slide, disabled reactively by reduced-motion preferences.</p>
<p>Neither this view nor an item creates additional overlays. Theme, text resolution, route matching, and flat contextual search come from the shared navigation
state. Consumer APIs and examples live with the public owners.</p>
`,"projects/blocks/navigation/components/side-nav/README.md":`<h1>Side navigation</h1>
<p>A route-driven application rail with collapsible sections, a compact icon rail, nested browsing inside the panel, contextual fuzzy search, and a responsive
mobile drawer. It shares <code>NavigationService</code> with breadcrumbs and <code>TopNav</code>, and shares item, search, level, and focus behavior with top navigation. Theme,
surface, search, tag, and accessibility behavior follow the shared Blocks facilities.</p>
<h2>Public import</h2>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> {
    <span class="hljs-title class_">SideNav</span>,
    <span class="hljs-title class_">SideNavHeaderDirective</span>,
    <span class="hljs-title class_">SideNavFooterDirective</span>,
    defineNavigation,
    provideNavigation,
    <span class="hljs-title class_">ISideNavConfig</span>,
    <span class="hljs-title class_">ISideNavItemContext</span>,
    <span class="hljs-title class_">ISideNavLayout</span>,
    <span class="hljs-title class_">INavigationTreeGroup</span>,
    <span class="hljs-title class_">INavigationItem</span>
} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/navigation&#x27;</span>;</code></pre>
<p><code>SideNavConfig</code> aliases <code>ISideNavConfig</code>; <code>NavItem</code> aliases the resolved <code>INavigationItem</code> contract. Interfaces follow the library&#39;s <code>I</code> naming convention.
Import all three components/directives in the shell&#39;s Angular <code>imports</code>.</p>
<h2>Working usage and withInAppNavigation</h2>
<p>Declare sections once, attach metadata to Angular routes, and provide the same configuration to navigation. Nested routes inherit the parent&#39;s section;
assigning another section moves that branch to the named section. No component-specific copy of your routing configuration is required.</p>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">Routes</span>, provideRouter } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/router&#x27;</span>;
<span class="hljs-keyword">import</span> { defineNavigation, provideNavigation } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/navigation&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">const</span> navigation = <span class="hljs-title function_">defineNavigation</span>({
    <span class="hljs-attr">sections</span>: [
        { <span class="hljs-attr">id</span>: <span class="hljs-string">&#x27;workspace&#x27;</span>, <span class="hljs-attr">title</span>: <span class="hljs-string">&#x27;Workspace&#x27;</span>, <span class="hljs-attr">icon</span>: { <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;building-2&#x27;</span> }, <span class="hljs-attr">collapsible</span>: <span class="hljs-literal">true</span>, <span class="hljs-attr">showInBreadcrumbs</span>: <span class="hljs-literal">true</span> },
        { <span class="hljs-attr">id</span>: <span class="hljs-string">&#x27;admin&#x27;</span>, <span class="hljs-attr">title</span>: { <span class="hljs-attr">key</span>: <span class="hljs-string">&#x27;sections.admin&#x27;</span> }, <span class="hljs-attr">icon</span>: { <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;settings&#x27;</span> }, <span class="hljs-attr">collapsible</span>: <span class="hljs-literal">true</span>, <span class="hljs-attr">collapsed</span>: <span class="hljs-literal">true</span>, <span class="hljs-attr">showInBreadcrumbs</span>: <span class="hljs-literal">false</span> }
    ],
    <span class="hljs-attr">sideNav</span>: { <span class="hljs-attr">side</span>: <span class="hljs-string">&#x27;left&#x27;</span>, <span class="hljs-attr">persistenceKey</span>: <span class="hljs-string">&#x27;studio.navigation.v1&#x27;</span> }
});
<span class="hljs-keyword">const</span> { withInAppNavigation } = navigation;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">const</span> <span class="hljs-attr">routes</span>: <span class="hljs-title class_">Routes</span> = [
    <span class="hljs-title function_">withInAppNavigation</span>(
        {
            <span class="hljs-attr">path</span>: <span class="hljs-string">&#x27;projects&#x27;</span>,
            <span class="hljs-attr">children</span>: [
                <span class="hljs-title function_">withInAppNavigation</span>(
                    { <span class="hljs-attr">path</span>: <span class="hljs-string">&#x27;tokens&#x27;</span>, <span class="hljs-attr">loadComponent</span>: <span class="hljs-function">() =&gt;</span> <span class="hljs-keyword">import</span>(<span class="hljs-string">&#x27;./tokens&#x27;</span>).<span class="hljs-title function_">then</span>(<span class="hljs-function">(<span class="hljs-params">m</span>) =&gt;</span> m.<span class="hljs-property">Tokens</span>) },
                    {
                        <span class="hljs-attr">label</span>: { <span class="hljs-attr">key</span>: <span class="hljs-string">&#x27;nav.tokens&#x27;</span> },
                        <span class="hljs-attr">icon</span>: { <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;swatch-book&#x27;</span> },
                        <span class="hljs-attr">endIcon</span>: { <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;sparkles&#x27;</span> },
                        <span class="hljs-attr">keywords</span>: [<span class="hljs-string">&#x27;palette&#x27;</span>, <span class="hljs-string">&#x27;variables&#x27;</span>],
                        <span class="hljs-attr">tags</span>: [{ <span class="hljs-attr">text</span>: { <span class="hljs-attr">key</span>: <span class="hljs-string">&#x27;nav.new&#x27;</span> }, <span class="hljs-attr">config</span>: { <span class="hljs-attr">color</span>: <span class="hljs-string">&#x27;success&#x27;</span> } }],
                        <span class="hljs-attr">showInBreadcrumbs</span>: <span class="hljs-literal">false</span>
                    }
                )
            ]
        },
        { <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;Projects&#x27;</span>, <span class="hljs-attr">section</span>: <span class="hljs-string">&#x27;workspace&#x27;</span>, <span class="hljs-attr">icon</span>: { <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;folder&#x27;</span> } }
    )
];

<span class="hljs-comment">// In application providers:</span>
<span class="hljs-comment">// provideRouter(routes), ...provideNavigation(navigation.config)</span></code></pre>
<p>A route that only groups children can omit a component. Provide an empty child route if that group&#39;s own URL should render a page. Parent labels remain links;
their adjacent disclosure opens the child list inside the rail. In compact presentation, the parent icon temporarily expands the rail to show its children; the
heading link inside navigates to the parent&#39;s route.</p>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;application-shell&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">bx-side-nav</span> #<span class="hljs-attr">navigation</span> [<span class="hljs-attr">config</span>]=<span class="hljs-string">&quot;{ side: &#x27;left&#x27; }&quot;</span> [(<span class="hljs-attr">collapsed</span>)]=<span class="hljs-string">&quot;collapsed&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> <span class="hljs-attr">bxSideNavHeader</span> <span class="hljs-attr">let-compact</span> <span class="hljs-attr">let-mobile</span>=<span class="hljs-string">&quot;mobile&quot;</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">routerLink</span>=<span class="hljs-string">&quot;/home&quot;</span> <span class="hljs-attr">aria-label</span>=<span class="hljs-string">&quot;Studio home&quot;</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">bx-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;blocks&quot;</span> /&gt;</span>
                @if (!compact) { <span class="hljs-tag">&lt;<span class="hljs-name">strong</span>&gt;</span>Studio<span class="hljs-tag">&lt;/<span class="hljs-name">strong</span>&gt;</span> }
            <span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> <span class="hljs-attr">bxSideNavFooter</span> <span class="hljs-attr">let-compact</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">bx-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;circle-user-round&quot;</span> /&gt;</span>
            @if (!compact) { <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>Alex \xB7 Workspace admin<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span> }
        <span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">bx-side-nav</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">main</span>&gt;</span><span class="hljs-comment">&lt;!-- router outlet --&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">main</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></code></pre>
<p>Use <code>display: flex; min-width: 0</code> on your shell and <code>flex: 1; min-width: 0</code> on its content. The component reserves its own desktop width; the host adjusts its
flex order for the configured physical side, including RTL layouts. Mobile drawers reserve zero horizontal space. The built-in Blocks tonal hamburger is fixed
at the configured edge and hides while the drawer is open, leaving one close action in its header; reserve room for it in your toolbar. For exact alignment with
other toolbar actions, put an application-owned trigger in that toolbar\u2019s flex layout and disable the built-in trigger; bind its <code>aria-controls</code> to
<code>navigation.panelId</code>. A custom trigger can call <code>navigation.open($event)</code>, <code>close()</code>, or <code>toggle($event)</code> with <code>showMobileTrigger: false</code>. Passing the click
event or opening button ensures focus returns to it even in browsers that do not focus buttons on pointer activation.</p>
<p>Header/footer slots use the modal pattern: directives register <code>ng-template</code> references with their containing component. <code>$implicit</code> and <code>collapsed</code> contain the
effective compact presentation state; <code>mobile</code> identifies drawer presentation. Keep interactive projected content accessible and avoid fixed widths inside
compact slots.</p>
<h2>API</h2>
<table>
<thead>
<tr>
<th>Input/model/output</th>
<th>Contract</th>
</tr>
</thead>
<tbody><tr>
<td><code>config</code></td>
<td><code>ISideNavConfig</code>, optional per-instance overrides of <code>provideNavigation</code> defaults</td>
</tr>
<tr>
<td><code>groups</code></td>
<td>Optional readonly <code>INavigationTreeGroup[]</code>; otherwise <code>NavigationService.menuTreeGroups()</code></td>
</tr>
<tr>
<td><code>itemTemplate</code></td>
<td>Optional <code>TemplateRef&lt;ISideNavItemContext&gt;</code> for content inside the managed link/button</td>
</tr>
<tr>
<td><code>collapsed</code> / <code>collapsedChange</code></td>
<td>Optional controlled desktop state; defaults to persisted state, then configuration</td>
</tr>
<tr>
<td><code>mobileOpen</code> / <code>mobileOpenChange</code></td>
<td>Mobile openness, initially false; never persisted</td>
</tr>
<tr>
<td><code>itemSelected</code></td>
<td>Resolved <code>INavigationItem</code> selected by the user</td>
</tr>
<tr>
<td><code>layoutChange</code></td>
<td><code>ISideNavLayout</code>: physical side, current content offset, compact/mobile/open flags</td>
</tr>
<tr>
<td><code>panelId</code></td>
<td>Stable drawer ID for an application-owned trigger\u2019s <code>aria-controls</code></td>
</tr>
<tr>
<td><code>layout()</code></td>
<td>Readonly computed layout state for application shells</td>
</tr>
<tr>
<td><code>isMobile()</code>, <code>isCollapsed()</code>, <code>query()</code></td>
<td>Readonly current presentation and query state</td>
</tr>
<tr>
<td><code>search(query)</code></td>
<td>Set or clear search programmatically</td>
</tr>
<tr>
<td><code>toggleCollapsed()</code></td>
<td>Change the desktop state and update persistence</td>
</tr>
<tr>
<td><code>open(origin?)</code>, <code>close()</code>, <code>toggle(origin?)</code></td>
<td>Mobile drawer controls; pass a click event or opening element for reliable focus return</td>
</tr>
</tbody></table>
<p><code>collapsedChange</code> always emits a boolean, so <code>[(collapsed)]</code> works with an ordinary <code>signal(false)</code>. Omitting the input lets persistence/configuration own the
state; a bound value takes precedence.</p>
<p><code>config</code> options (all optional):</p>
<table>
<thead>
<tr>
<th>Option</th>
<th>Default / behavior</th>
</tr>
</thead>
<tbody><tr>
<td><code>side</code></td>
<td><code>&#39;left&#39;</code>; physical <code>&#39;right&#39;</code> changes drawer edge and hamburger placement</td>
</tr>
<tr>
<td><code>position</code></td>
<td><code>&#39;fixed&#39;</code>; <code>&#39;inline&#39;</code> participates in local layout, useful for previews</td>
</tr>
<tr>
<td><code>width</code>, <code>collapsedWidth</code></td>
<td><code>&#39;17rem&#39;</code>, <code>&#39;4.5rem&#39;</code>; viewport constrained</td>
</tr>
<tr>
<td><code>searchable</code>, <code>collapsible</code></td>
<td><code>true</code>, <code>true</code></td>
</tr>
<tr>
<td><code>showItemIcons</code>, <code>showSectionIcons</code></td>
<td><code>true</code>, <code>true</code>; hide leading icons in expanded rows/headings while compact triggers retain their icons</td>
</tr>
<tr>
<td><code>collapsed</code></td>
<td><code>false</code>; initial state, used when neither saved nor controlled state exists</td>
</tr>
<tr>
<td><code>persistenceKey</code></td>
<td>Unset; enables localStorage persistence for panel and section states</td>
</tr>
<tr>
<td><code>mobileBreakpoint</code></td>
<td><code>&#39;lg&#39;</code>, from <code>WindowDimensionsService.breakpoints</code>; controls the drawer independently of submenu presentation</td>
</tr>
<tr>
<td><code>showSearchGuide</code></td>
<td>Deprecated compatibility option; ignored because search guides have been removed</td>
</tr>
<tr>
<td><code>backLabel</code>, <code>pathLabel</code></td>
<td><code>&#39;Back&#39;</code>, <code>&#39;Navigation path&#39;</code>; both accept <code>ResolvableText</code></td>
</tr>
<tr>
<td><code>mobile</code></td>
<td>Unset; optional responsive override for embedded shells</td>
</tr>
<tr>
<td><code>showMobileTrigger</code></td>
<td><code>true</code>; disabling it requires an application trigger</td>
</tr>
<tr>
<td><code>ariaLabel</code></td>
<td><code>&#39;Main navigation&#39;</code></td>
</tr>
<tr>
<td><code>searchPlaceholder</code>, <code>searchLabel</code>, <code>clearSearchLabel</code></td>
<td><code>&#39;Search navigation\u2026&#39;</code>, <code>&#39;Search navigation&#39;</code>, <code>&#39;Clear search&#39;</code></td>
</tr>
<tr>
<td><code>emptyText</code></td>
<td><code>&#39;No matching pages.&#39;</code></td>
</tr>
<tr>
<td><code>openLabel</code>, <code>closeLabel</code></td>
<td><code>&#39;Open navigation&#39;</code>, <code>&#39;Close navigation&#39;</code></td>
</tr>
<tr>
<td><code>collapseLabel</code>, <code>expandLabel</code></td>
<td><code>&#39;Collapse navigation&#39;</code>, <code>&#39;Expand navigation&#39;</code></td>
</tr>
<tr>
<td><code>submenuLabel</code>, <code>resultLabel</code></td>
<td><code>&#39;Open submenu&#39;</code>, <code>&#39;Search result&#39;</code>; the resolved item label is appended</td>
</tr>
</tbody></table>
<p>Every configurable text accepts <code>ResolvableText</code>. Plain strings work without <code>BX_I18N</code>; keys fall back to their key when no adapter exists. Language changes
reactively update mounted labels, badges, search keywords, and action names when the adapter exposes its version signal. Function-valued <code>NavText</code> receives the
existing navigation context contract.</p>
<p>Section configuration supports <code>id</code>, translated <code>title</code>, <code>icon</code>, <code>order</code>, <code>collapsible</code>, initial <code>collapsed</code>, and <code>showInBreadcrumbs</code>. Route metadata supports
translated <code>label</code>/<code>breadcrumb</code>, <code>icon</code>, <code>endIcon</code>, <code>tags</code>, translated <code>keywords</code>, <code>disabled</code>, <code>section</code>, <code>order</code>, <code>root</code>, <code>menu</code>, <code>hidden</code>, <code>visible</code>, and
<code>showInBreadcrumbs</code>. A route&#39;s explicit breadcrumb setting overrides its section&#39;s setting; otherwise inclusion defaults to true. Breadcrumb suppression does
not prevent the route from being current or active.</p>
<p><code>hidden</code> now consistently prunes menu branches as well as suppressing breadcrumbs. If an application previously used <code>hidden</code> only to omit a breadcrumb, migrate
to <code>showInBreadcrumbs: false</code> to keep that menu item visible.</p>
<p><code>menu: false</code> promotes visible descendants; <code>hidden: true</code>, failed access checks, or <code>visible: () =&gt; false</code> hide the whole branch. The legacy flat
<code>menuGroups()</code> API remains available. <code>menuTreeGroups()</code> is the hierarchical API. Dynamic path parameters still need application-owned concrete route entries or
deliberate <code>menu: false</code>; the side-nav does not invent parameter values. Declare navigation-bearing routes in the eager route tree; unloaded <code>loadChildren</code>
configurations are not enumerated.</p>
<h2>Appearance and customization</h2>
<p>Use application-wide <code>sideNav</code> defaults in <code>defineNavigation</code>, then instance overrides. Nested configuration updates should preserve unrelated keys, e.g.
<code>config.update(value =&gt; ({ ...value, side: &#39;right&#39; }))</code>.</p>
<table>
<thead>
<tr>
<th>CSS variable</th>
<th>Default</th>
</tr>
</thead>
<tbody><tr>
<td><code>--bx-side-nav-width</code></td>
<td>Resolved <code>width</code> configuration</td>
</tr>
<tr>
<td><code>--bx-side-nav-collapsed-width</code></td>
<td>Resolved <code>collapsedWidth</code> configuration</td>
</tr>
<tr>
<td><code>--bx-side-nav-height</code></td>
<td><code>38rem</code> for inline panels</td>
</tr>
<tr>
<td><code>--bx-side-nav-item-radius</code></td>
<td>Shared medium radius</td>
</tr>
<tr>
<td><code>--bx-side-nav-item-background</code></td>
<td>Transparent, over the shared panel/menu surface</td>
</tr>
<tr>
<td><code>--bx-side-nav-item-hover-background</code>, <code>--bx-side-nav-item-active-background</code></td>
<td>Shared accent tonal surfaces; only the active route has the selected border</td>
</tr>
<tr>
<td><code>--bx-side-nav-item-gap</code></td>
<td>Shared spacing 2 (<code>0.5rem</code>) between adjacent items</td>
</tr>
<tr>
<td><code>--bx-side-nav-duration</code>, <code>--bx-side-nav-easing</code></td>
<td><code>250ms</code>, <code>ease</code>; reduced motion takes precedence</td>
</tr>
<tr>
<td><code>--bx-side-nav-label-duration</code></td>
<td><code>90ms</code> label fade as desktop expansion finishes; reduced motion skips it</td>
</tr>
<tr>
<td><code>--bx-side-nav-backdrop</code></td>
<td>Shared backdrop color with a neutral scrim fallback</td>
</tr>
</tbody></table>
<p>Route activity comes from Angular Router matching and updates after navigation, redirects, and browser history changes. Query parameters, matrix parameters, and
fragments do not clear selection. Only the most specific matching item receives the selected tonal background and border. For example,
<code>/components/side-nav/overview</code> selects Side navigation rather than also selecting <code>/components</code>. Its owning section uses accent text without a second selected
box, including custom trees whose child URLs do not share the parent URL. Only the exact current link receives <code>aria-current=&quot;page&quot;</code>.</p>
<p>The navigation region is the panel&#39;s sole vertical scroller. The compact rail reserves equal scrollbar gutters on both edges and centers icons in the remaining
space, aligned with header, search, and footer controls. Both direct links and submenu icons show their labels in tooltips when compact. Activating its search
icon expands the rail and focuses the search field without scrolling the page. The root and nested lists reserve their scrollbar gutters when content fits,
preventing width shifts. Horizontal overflow is constrained, and labels wrap within the available width.</p>
<p>Desktop expansion lays out content at its final width behind the panel&#39;s clipping edge, preventing labels from repeatedly wrapping as the rail opens. Labels and
disclosure arrows fade in with search during the final 60ms of the width transition, using its remaining running time. Initial expanded rendering and mobile
drawers have no label delay. Reduced motion removes both the delay and fade, including when the preference changes during expansion. Keyboard focus reveals
content immediately; accessible names remain available throughout. Pending reveal work is cancelled on collapse, presentation changes, and destruction.</p>
<p>Custom header/footer and item templates can follow the same reveal by setting <code>opacity: var(--bx-side-nav-label-opacity, 1)</code> on their text and transitioning
opacity with <code>var(--bx-side-nav-label-transition-duration, 0ms)</code>. These inherited values also handle reduced motion and keyboard focus; keep icons and focus
indicators outside the faded text.</p>
<p>The background and search use Blocks surfaces. Rows reuse their containing surface, and nested lists remain inside the same themed panel. Standard semantic
colors, focus styles, forced colors, reduced transparency, and opaque presentation remain available through Blocks. Programmatic row focus does not apply the
hover fill; keyboard focus keeps its visible outline, and route selection belongs only to the most-specific active item.</p>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> #<span class="hljs-attr">item</span> <span class="hljs-attr">let-entry</span> <span class="hljs-attr">let-active</span>=<span class="hljs-string">&quot;active&quot;</span> <span class="hljs-attr">let-compact</span>=<span class="hljs-string">&quot;collapsed&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">bx-icon</span> [<span class="hljs-attr">name</span>]=<span class="hljs-string">&quot;entry.icon?.name ?? &#x27;circle&#x27;&quot;</span> /&gt;</span>
    @if (!compact) { <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>{{ entry.label }}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span> }
<span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">bx-side-nav</span> [<span class="hljs-attr">itemTemplate</span>]=<span class="hljs-string">&quot;item&quot;</span> /&gt;</span></code></pre>
<p>Item templates should contain presentation only. The surrounding control owns the accessible interaction; avoid nested links/buttons. Application-owned <code>groups</code>
use stable unique item IDs and resolved section titles; item <code>data.label</code> and <code>data.keywords</code> may retain translation definitions. Update the groups input when
application-owned data changes. The route access adapter applies to service-generated groups; callers supplying groups own their visibility decisions.</p>
<h2>Behavior and accessibility</h2>
<p>Every label remains a native route link. Its separate chevron opens children without navigating. At every viewport width and nesting depth, children replace the
current list inside the sidebar. The navigation never creates an adjacent submenu popup.</p>
<p>Back and the ancestor path stay above the scrolling list. Each ancestor button returns to a browsing level without navigating to its page. The first,
section-labelled action returns directly to the full navigation root when the section was only a grouping label. For example, clicking Core after opening
Utilities from the main list restores all sections and reveals Utilities in the sidebar. The item that opened the branch receives focus; the page&#39;s scroll
position stays unchanged. If the section&#39;s own list was explicitly opened, such as from the compact rail, that action returns to the section level instead.
Other ancestor actions also reveal the child item used to enter the deeper branch. The current parent&#39;s heading remains a link to its own page. Returning to a
level restores its scroll position and focus.</p>
<p>Opening a new level focuses its active route when present, otherwise its first enabled item. Changing the available width preserves the browsing path. A compact
rail temporarily expands while browsing children without changing its saved collapse preference, and returns to the rail when browsing returns to the root.
Levels slide briefly on explicit browsing changes; reduced motion disables the slide. Opening a submenu requires a disclosure click, touch, or keyboard action.</p>
<p>Search normalizes accents and case, ranks exact/subsequence/keyword matches, and tolerates a single edit in words of at least four characters. It renders a flat
list of direct matches with translated parent paths in the main navigation, inside the sidebar. Searching never opens submenus. Labels navigate directly; result
disclosures leave search and browse the chosen item&#39;s children. After navigating to a search result, clearing search opens its containing submenu and scrolls
that result into view, preserving search-field focus. Clearing without a successful selection restores the previous browsing level and its scroll position.
Search temporarily expands a compact rail without changing its saved preference. Search covers the currently supplied tree, not unloaded or remote results.</p>
<p>Search results use muted parent paths without floating arrows, extra selection colors, or outlines. The page link and its separate disclosure have independent
hover and focus surfaces; selection belongs to the page link. The legacy <code>showSearchGuide</code> option is ignored, and the former guide CSS variables and
<code>--bx-side-nav-item-highlight-background</code> no longer affect the component.</p>
<p>Menus retain <code>menu</code>/<code>menuitem</code> semantics, accessible names, native links, and separate disclosure buttons. Enter/Space or the arrow towards the submenu opens
children. Up/Down and Home/End move within the current menu. Back, Escape, or the opposite arrow returns one level, restoring scroll and focus; Escape at the
root can dismiss the mobile drawer. Mobile drawers trap Tab; desktop navigation remains part of the page&#39;s normal tab order.</p>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-comment">&lt;!-- App-wide defaults can set the same options through defineNavigation(). --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">bx-side-nav</span> [<span class="hljs-attr">config</span>]=<span class="hljs-string">&quot;{ backLabel: { key: &#x27;nav.back&#x27; }, pathLabel: { key: &#x27;nav.path&#x27; } }&quot;</span> /&gt;</span></code></pre>
<h3>Migration from adjacent submenu panels</h3>
<p>Remove <code>submenuMode</code> and <code>submenuBreakpoint</code> from configuration and remove imports of <code>SideNavSubmenuMode</code>. These options and the type are no longer exposed;
all nested browsing uses the panel itself. Remove calls to <code>isInlineSubmenus()</code> because there is no submenu presentation switch. The retired
<code>--bx-side-nav-menu-width</code> and <code>--bx-side-nav-menu-max-height</code> variables no longer apply. Use <code>width</code> for the sidebar width and <code>--bx-side-nav-height</code> for an
embedded panel&#39;s height. Back and ancestor labels remain configurable through the shared text contract.</p>
<p>Fixed mobile navigation uses a labelled modal drawer with focus capture/trapping, scroll locking, the shared <code>ModalBackdrop</code> click-to-close scrim (including
blur and opaque accessibility fallbacks), a Blocks icon-only close button with hover feedback, and Escape dismissal. Closing restores the opening control&#39;s
focus. A submenu consumes Escape before the drawer does. Resizing out of mobile mode closes the drawer and releases its lock. Browser-only persistence and
viewport observation are guarded; unavailable/malformed storage falls back to usable defaults. Storage is scoped by your chosen key and is read when that key
changes, without cross-tab synchronization.</p>
<p>For an inline mobile preview, use a positioned shell (<code>position: relative</code>) with a minimum height and <code>overflow: hidden</code>. Its drawer and scrim stay inside that
shell and do not lock page scrolling. Off-screen drawer content is clipped without creating a scroll container, and focus capture uses <code>preventScroll</code> to keep
the surrounding content stationary during either slide direction. Keep the shell outside another <code>bxSurface</code>: Blocks intentionally disables blur for nested
glass. Presentation changes establish the closed layout immediately; explicit open/close actions animate the slide. Reduced motion disables that animation.</p>
<h2>Playground</h2>
<p>Visit <code>/components/side-nav</code>. The application shell also uses <code>SideNav</code> with real <code>withInAppNavigation</code> routes, a persistent collapsible icon rail, its Blocks
brand, and no footer. Components groups the five component categories, with Layout nested under Primitives; Tools groups the configurators behind its own
overview. Tokens, Icons, and Utilities remain separate root entries. Existing component and configurator URLs remain valid. The dedicated demo supplies a
four-level fixture tree so selections remain on the demo page, and exposes side, collapsed/mobile presentation, RTL, custom item content, panel height, optional
search, and a live language dropdown with English, Spanish, French, and German translations covering every menu item, section, action, demo control,
instruction, and selection result. The mobile checkbox explicitly controls the embedded presentation, independent of the application shell\u2019s responsive
navigation. Desktop and mobile browse the same nested lists. Try <code>dsgn tkns</code>, <code>palette</code>, <code>tokens</code>, or <code>Palette</code> for flat contextual results, clear the search,
and use the disclosures and Back control through all four levels.</p>
<p>The fixed drawer acquires its own <code>ScrollLockService</code> lock only while its mobile overlay presentation is open. Closing, route navigation, changing to desktop or
inline presentation, and destruction release that lock; a concurrently open modal keeps its own lock. <code>--bx-side-nav-backdrop</code> remains available for an explicit
scrim color. Embedded inline presentation uses the same backdrop inside its shell without locking the page.</p>
`,"projects/blocks/navigation/components/top-nav/README.md":`<h1>Top navigation</h1>
<p>A responsive horizontal route navigation bar with brand/action slots, a compact menu, contextual search, and one shared panel for every nesting level. It uses
the same route state, item views, Back behavior, search matching, focus/scroll bookmarks, and tonal styling as <code>SideNav</code>.</p>
<h2>Public import</h2>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> {
    <span class="hljs-title class_">TopNav</span>,
    <span class="hljs-title class_">TopNavBrandDirective</span>,
    <span class="hljs-title class_">TopNavActionsDirective</span>,
    <span class="hljs-title class_">ITopNavConfig</span>,
    <span class="hljs-title class_">ITopNavSlotContext</span>,
    <span class="hljs-title class_">INavigationItemContext</span>,
    defineNavigation,
    provideNavigation
} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/navigation&#x27;</span>;</code></pre>
<p>Import the component and any slot directives used by your standalone shell. Root links come from <code>NavigationService.menuTreeGroups()</code> unless the optional
<code>groups</code> input is supplied. An explicit empty array omits the primary menu control while preserving brand/actions; with search disabled this also serves as a
toolbar shell.</p>
<h2>Working usage</h2>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span>, signal } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">RouterLink</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/router&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">TopNav</span>, <span class="hljs-title class_">TopNavBrandDirective</span>, <span class="hljs-title class_">TopNavActionsDirective</span>, <span class="hljs-title class_">ITopNavConfig</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/navigation&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Button</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/forms&#x27;</span>;

<span class="hljs-meta">@Component</span>({
    <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;app-header&#x27;</span>,
    <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">RouterLink</span>, <span class="hljs-title class_">TopNav</span>, <span class="hljs-title class_">TopNavBrandDirective</span>, <span class="hljs-title class_">TopNavActionsDirective</span>, <span class="hljs-title class_">Button</span>],
    <span class="hljs-attr">template</span>: <span class="hljs-string">\`
        &lt;bx-top-nav [config]=&quot;config&quot; [(opened)]=&quot;menuOpen&quot;&gt;
            &lt;ng-template bxTopNavBrand let-compact&gt;
                &lt;a routerLink=&quot;/home&quot;&gt;Studio&lt;/a&gt;
            &lt;/ng-template&gt;
            &lt;ng-template bxTopNavActions&gt;
                &lt;a bx-button variant=&quot;tonal&quot; color=&quot;grayscale&quot; routerLink=&quot;/settings&quot;&gt;Settings&lt;/a&gt;
            &lt;/ng-template&gt;
        &lt;/bx-top-nav&gt;
    \`</span>
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">Header</span> {
    <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> menuOpen = <span class="hljs-title function_">signal</span>(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> <span class="hljs-attr">config</span>: <span class="hljs-title class_">ITopNavConfig</span> = { <span class="hljs-attr">compactBreakpoint</span>: <span class="hljs-string">&#x27;lg&#x27;</span>, <span class="hljs-attr">position</span>: <span class="hljs-string">&#x27;sticky&#x27;</span> };
}</code></pre>
<p>Declare the same route metadata used by side navigation and breadcrumbs:</p>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">const</span> navigation = <span class="hljs-title function_">defineNavigation</span>({
    <span class="hljs-attr">sections</span>: [{ <span class="hljs-attr">id</span>: <span class="hljs-string">&#x27;workspace&#x27;</span>, <span class="hljs-attr">title</span>: <span class="hljs-string">&#x27;Workspace&#x27;</span> }],
    <span class="hljs-attr">topNav</span>: { <span class="hljs-attr">searchable</span>: <span class="hljs-literal">true</span>, <span class="hljs-attr">ariaLabel</span>: { <span class="hljs-attr">key</span>: <span class="hljs-string">&#x27;navigation.primary&#x27;</span> } }
});
<span class="hljs-keyword">const</span> { withInAppNavigation } = navigation;
<span class="hljs-keyword">const</span> routes = [
    <span class="hljs-title function_">withInAppNavigation</span>(
        {
            <span class="hljs-attr">path</span>: <span class="hljs-string">&#x27;projects&#x27;</span>,
            <span class="hljs-attr">children</span>: [
                <span class="hljs-title function_">withInAppNavigation</span>(
                    { <span class="hljs-attr">path</span>: <span class="hljs-string">&#x27;tokens&#x27;</span>, <span class="hljs-attr">loadComponent</span>: <span class="hljs-function">() =&gt;</span> <span class="hljs-keyword">import</span>(<span class="hljs-string">&#x27;./tokens&#x27;</span>).<span class="hljs-title function_">then</span>(<span class="hljs-function">(<span class="hljs-params">m</span>) =&gt;</span> m.<span class="hljs-property">Tokens</span>) },
                    { <span class="hljs-attr">label</span>: { <span class="hljs-attr">key</span>: <span class="hljs-string">&#x27;navigation.tokens&#x27;</span> }, <span class="hljs-attr">icon</span>: { <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;swatch-book&#x27;</span> } }
                )
            ]
        },
        { <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;Projects&#x27;</span>, <span class="hljs-attr">section</span>: <span class="hljs-string">&#x27;workspace&#x27;</span>, <span class="hljs-attr">icon</span>: { <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;folder&#x27;</span> } }
    )
];
<span class="hljs-comment">// Application providers: provideRouter(routes), ...provideNavigation(navigation.config)</span></code></pre>
<p>A parent label always navigates to the parent&#39;s own route. Its separate chevron opens children without navigating. Declare an empty child route if the parent
URL should render its own page. Parameterized menu destinations still require concrete application-owned entries; navigation does not invent parameter values.</p>
<h2>API</h2>
<table>
<thead>
<tr>
<th>Input/model/output/method</th>
<th>Contract</th>
</tr>
</thead>
<tbody><tr>
<td><code>config</code></td>
<td>Optional <code>ITopNavConfig</code>; instance settings override <code>provideNavigation().topNav</code>, then library defaults</td>
</tr>
<tr>
<td><code>groups</code></td>
<td>Optional readonly <code>INavigationTreeGroup[]</code>; otherwise hierarchical route sections from <code>NavigationService</code></td>
</tr>
<tr>
<td><code>itemTemplate</code></td>
<td>Optional <code>TemplateRef&lt;INavigationItemContext&gt;</code> inside the managed page link/button; search paths remain visible</td>
</tr>
<tr>
<td><code>opened</code> / <code>openedChange</code></td>
<td>Two-way panel state, initially false, never persisted</td>
</tr>
<tr>
<td><code>itemSelected</code></td>
<td>The selected resolved <code>INavigationItem</code>; selecting a page closes the panel</td>
</tr>
<tr>
<td><code>isCompact()</code>, <code>query()</code></td>
<td>Readonly resolved presentation and current search query</td>
</tr>
<tr>
<td><code>panelId</code></td>
<td>Stable panel ID for an application-owned trigger&#39;s <code>aria-controls</code></td>
</tr>
<tr>
<td><code>open(origin?, focusSearch?)</code></td>
<td>Open the panel; pass a click event/element for positioning and focus return; the second argument optionally focuses search</td>
</tr>
<tr>
<td><code>close(restoreFocus?)</code></td>
<td>Close the panel; defaults to restoring the opening control&#39;s focus</td>
</tr>
<tr>
<td><code>toggle(origin?)</code></td>
<td>Toggle the panel from an optional click event or element</td>
</tr>
<tr>
<td><code>search(query)</code></td>
<td>Search programmatically, opening the panel if necessary; an empty query restores browsing</td>
</tr>
</tbody></table>
<p><code>ITopNavConfig</code> options are optional:</p>
<table>
<thead>
<tr>
<th>Option</th>
<th>Default / behavior</th>
</tr>
</thead>
<tbody><tr>
<td><code>position</code>, <code>top</code></td>
<td><code>&#39;sticky&#39;</code>, <code>&#39;0px&#39;</code>; <code>&#39;inline&#39;</code> leaves positioning to the containing layout</td>
</tr>
<tr>
<td><code>compactBreakpoint</code></td>
<td>Shared <code>&#39;lg&#39;</code> breakpoint, applied to both the viewport and the bar&#39;s available width</td>
</tr>
<tr>
<td><code>compact</code></td>
<td>Unset for automatic presentation; true forces compact, false bypasses the breakpoint. Content that does not fit always uses compact navigation</td>
</tr>
<tr>
<td><code>panelWidth</code>, <code>panelMaxHeight</code></td>
<td><code>&#39;24rem&#39;</code>, <code>&#39;32rem&#39;</code>; viewport constraints and the available space above/below the trigger take precedence</td>
</tr>
<tr>
<td><code>searchable</code></td>
<td><code>true</code>; the toolbar search button opens the same shared panel</td>
</tr>
<tr>
<td><code>showItemIcons</code>, <code>showSectionIcons</code></td>
<td><code>false</code>, <code>false</code>; optional leading item icons and panel section icons</td>
</tr>
<tr>
<td><code>showSearchGuide</code></td>
<td>Deprecated compatibility option; ignored because search guides have been removed</td>
</tr>
<tr>
<td><code>ariaLabel</code></td>
<td><code>&#39;Main navigation&#39;</code></td>
</tr>
<tr>
<td><code>searchPlaceholder</code>, <code>searchLabel</code>, <code>clearSearchLabel</code></td>
<td><code>&#39;Search navigation\u2026&#39;</code>, <code>&#39;Search navigation&#39;</code>, <code>&#39;Clear search&#39;</code></td>
</tr>
<tr>
<td><code>openLabel</code>, <code>closeLabel</code></td>
<td><code>&#39;Open navigation&#39;</code>, <code>&#39;Close navigation&#39;</code></td>
</tr>
<tr>
<td><code>emptyText</code></td>
<td><code>&#39;No matching pages.&#39;</code></td>
</tr>
<tr>
<td><code>submenuLabel</code>, <code>resultLabel</code></td>
<td><code>&#39;Open submenu&#39;</code>, <code>&#39;Search result&#39;</code></td>
</tr>
<tr>
<td><code>backLabel</code>, <code>pathLabel</code></td>
<td><code>&#39;Back&#39;</code>, <code>&#39;Navigation path&#39;</code></td>
</tr>
</tbody></table>
<p>All configurable text accepts <code>ResolvableText</code>. <code>BX_I18N</code> is optional; strings work without it, missing adapters fall back to translation keys, and an adapter
version signal refreshes mounted labels, badges, keywords, action names, and paths. Section titles supplied by application-owned <code>groups</code> are resolved strings,
so update that input when the language changes. The playground shares one live language adapter between its fixtures and navigation.</p>
<p><code>bxTopNavBrand</code> and <code>bxTopNavActions</code> register templates with their owner. Their <code>ITopNavSlotContext</code> contains <code>$implicit</code>/<code>compact</code> and <code>open</code>. Both slots
remain available in compact presentation. Keep projected controls responsive and provide accessible names for icon-only actions.</p>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> #<span class="hljs-attr">item</span> <span class="hljs-attr">let-entry</span> <span class="hljs-attr">let-active</span>=<span class="hljs-string">&quot;active&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>{{ entry.label }}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
    @if (active) { <span class="hljs-tag">&lt;<span class="hljs-name">small</span> <span class="hljs-attr">aria-hidden</span>=<span class="hljs-string">&quot;true&quot;</span>&gt;</span>\u2713<span class="hljs-tag">&lt;/<span class="hljs-name">small</span>&gt;</span> }
<span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">bx-top-nav</span> [<span class="hljs-attr">itemTemplate</span>]=<span class="hljs-string">&quot;item&quot;</span> /&gt;</span></code></pre>
<p>Custom item content is presentation only; do not place nested links/buttons inside it. Native links preserve modified-click and open-in-new-tab behavior.
Supplying new <code>groups</code> arrays updates mounted navigation without a transport dependency; applications own loading, access policy, and request lifecycle for
custom trees. Service-generated groups retain the existing route visibility/access adapter contracts.</p>
<h2>Appearance and customization</h2>
<p>The bar uses the shared Blocks surface. Its panel is an opaque menu surface with semantic colors and theme inheritance. It intentionally uses no nested backdrop
filter. Keep the component outside another <code>bxSurface</code> when demonstrating bar blur, since Blocks suppresses nested glass passes.</p>
<table>
<thead>
<tr>
<th>CSS variable</th>
<th>Default</th>
</tr>
</thead>
<tbody><tr>
<td><code>--bx-top-nav-top</code></td>
<td>Resolved sticky offset</td>
</tr>
<tr>
<td><code>--bx-top-nav-panel-width</code>, <code>--bx-top-nav-panel-max-height</code></td>
<td>Resolved width/height settings</td>
</tr>
<tr>
<td><code>--bx-top-nav-height</code>, <code>--bx-top-nav-gap</code></td>
<td><code>3.75rem</code> minimum height and shared spacing 2 between bar regions</td>
</tr>
<tr>
<td><code>--bx-top-nav-padding-inline</code>, <code>--bx-top-nav-padding-block</code></td>
<td>Shared spacing 3 and spacing 2</td>
</tr>
<tr>
<td><code>--bx-top-nav-radius</code></td>
<td>Shared medium radius</td>
</tr>
<tr>
<td><code>--bx-top-nav-item-radius</code>, <code>--bx-top-nav-item-gap</code></td>
<td>Shared medium radius, spacing 2</td>
</tr>
<tr>
<td><code>--bx-top-nav-item-background</code></td>
<td>Transparent</td>
</tr>
<tr>
<td><code>--bx-top-nav-item-hover-background</code>, <code>--bx-top-nav-item-active-background</code></td>
<td>Shared accent tonal surface</td>
</tr>
</tbody></table>
<p>Only the most specific matching route gets selected styling. Query parameters, matrix parameters, fragments, and redirect URLs do not produce multiple selected
routes. A horizontal ancestor may use accent text for context without acquiring the selected box. Section headings in the panel likewise use accent text. Page
links and disclosures have independent hover and focus surfaces.</p>
<h2>Behavior and accessibility</h2>
<p>The bar measures its primary links and remaining space after brand/actions. It switches to the compact menu at the configured breakpoint or whenever content
does not fit, including changes from translation, slot content, fonts, resizing, and browser zoom. Links are not left hidden behind an essential horizontal
scrollbar. A compact slot that shrinks its brand/actions does not cause repeated expand/collapse feedback.</p>
<p>Both presentations use one dropdown panel. The first disclosure opens it below the bar using <code>MenuTriggerDirective</code> and the existing overlay context. Further
disclosures replace its list; recursive overlays never accumulate. Back and the ancestor path remain above the scrolling list. The first, section-labelled
action returns to the full navigation root and reveals the item that opened the branch unless that section&#39;s own list was explicitly opened. Ancestor buttons
open their submenu panels without navigating to their pages, and the parent&#39;s heading remains a route link. Back restores the previous list&#39;s scroll and
disclosure focus. The browsing path survives presentation changes; the panel can reattach to the compact control when its former origin disappears.</p>
<p>Search always renders flat direct matches with muted parent paths. It does not open nested panels or color ancestors as selected. After navigating to a result,
clearing search opens its containing submenu and scrolls the selected row into view while retaining search-field focus. Without a successful selection it
restores the prior browsing location and scroll position. A result label navigates directly; its disclosure leaves search and browses the result&#39;s children.
Search results have no floating guides; the legacy <code>showSearchGuide</code> option is ignored and the former guide CSS variables no longer affect the component.</p>
<p>Horizontal links use a menubar with one tab stop, Left/Right movement respecting RTL, Home/End, and Down to open a parent&#39;s submenu. The panel uses native links
and menu semantics; Up/Down and Home/End navigate a list. Back, Escape, or the opposite arrow returns one nested level. Escape at the panel root or its close
action dismisses it and restores the opening control. Tab stays inside the open panel; outside clicks and route changes close it. Focus return uses
<code>preventScroll</code>.</p>
<p>The panel is nonmodal: it does not lock page scrolling. Shared native CSS anchoring follows scrolling and closes a panel whose origin becomes clipped/offscreen.
The bar&#39;s overlay context supports sticky headers and top-layer surfaces; theme, palette, opaque appearance, forced colors, and accessibility changes update
mounted controls and overlays. Resize/direction observers, subscriptions, focus traps, and overlays clean up with their owners. Browser measurements are
deferred until rendering and guarded for SSR.</p>
<h2>Playground</h2>
<p>Visit <code>/components/top-nav</code> (redirects to <code>/components/top-nav/overview</code>). The demo uses the same four-level fixture, keywords, tags, disabled item, and
language dropdown with English, Spanish, French, and German translations as side navigation. Page links stay on the top-nav demo route family, so route
highlighting and selection feedback remain observable.</p>
<p>Change preview width, force compact, add action controls, toggle icons/RTL/custom templates/sticky presentation, and switch languages. The preview uses the
shared <code>sm</code> breakpoint so both presentations can be exercised within the documentation layout; library defaults remain <code>lg</code>. Try <code>dsgn tkns</code>, <code>palette</code>,
<code>tokens</code>, or <code>Palette</code>, enter several levels, and use Back or clear search to inspect context and restoration. Appearance controls in the application toolbar
apply to this component and its open panel.</p>
<p>The playground application&#39;s own toolbar also uses <code>TopNav</code>: it supplies an empty <code>groups</code> array and disables search to retain the existing sidenav as the sole
primary navigation. The sidenav trigger lives in the brand slot; Appearance, palette, and theme-mode controls live in the actions slot. Their dropdowns retain
the existing overlay context.</p>
`,"projects/blocks/navigation/directives/side-nav-footer/README.md":`<h1>Side nav footer slot</h1>
<p>Provide custom footer content for <code>bx-side-nav</code> through a typed projected template.</p>
<h2>Import</h2>
<pre class="playground-code-block" tabindex="0" aria-label="typescript code example"><code class="hljs language-typescript"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">SideNav</span>, <span class="hljs-title class_">SideNavFooterDirective</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/navigation&#x27;</span>;</code></pre>
<p>Add these declarations to the consuming standalone component&#39;s imports.</p>
<h2>Usage</h2>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">bx-side-nav</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> <span class="hljs-attr">bxSideNavFooter</span> <span class="hljs-attr">let-collapsed</span>=<span class="hljs-string">&quot;collapsed&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>{{ collapsed ? &#x27;Blocks&#x27; : &#x27;Blocks workspace&#x27; }}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">bx-side-nav</span>&gt;</span></code></pre>
<h2>API</h2>
<p><code>SideNavFooterDirective</code> selects <code>[bxSideNavFooter]</code> and registers its <code>TemplateRef</code> with the containing <code>SideNav</code>. The template context exposes <code>collapsed</code> and
<code>mobile</code>; <code>$implicit</code> is equivalent to <code>collapsed</code>. There are no configurable directive inputs or outputs.</p>
<h2>Appearance and customization</h2>
<p>The template owns its content while the navigation component owns layout and material. Use Blocks controls and shared theme tokens inside the slot.</p>
<h2>Behavior and accessibility</h2>
<p>Place the template inside its owning navigation component. Registration is removed when the directive is destroyed. Interactive slot content must retain
accessible names and keyboard operation. Use the context to adapt content to the available space.</p>
<h2>Playground</h2>
<p>Visit <code>/components/side-nav</code> and see the <a href="components/side-nav">owning component guide</a>.</p>
`,"projects/blocks/navigation/directives/side-nav-header/README.md":`<h1>Side nav header slot</h1>
<p>Provide custom header content for <code>bx-side-nav</code> through a typed projected template.</p>
<h2>Import</h2>
<pre class="playground-code-block" tabindex="0" aria-label="typescript code example"><code class="hljs language-typescript"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">SideNav</span>, <span class="hljs-title class_">SideNavHeaderDirective</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/navigation&#x27;</span>;</code></pre>
<p>Add these declarations to the consuming standalone component&#39;s imports.</p>
<h2>Usage</h2>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">bx-side-nav</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> <span class="hljs-attr">bxSideNavHeader</span> <span class="hljs-attr">let-collapsed</span>=<span class="hljs-string">&quot;collapsed&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>{{ collapsed ? &#x27;Blocks&#x27; : &#x27;Blocks workspace&#x27; }}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">bx-side-nav</span>&gt;</span></code></pre>
<h2>API</h2>
<p><code>SideNavHeaderDirective</code> selects <code>[bxSideNavHeader]</code> and registers its <code>TemplateRef</code> with the containing <code>SideNav</code>. The template context exposes <code>collapsed</code> and
<code>mobile</code>; <code>$implicit</code> is equivalent to <code>collapsed</code>. There are no configurable directive inputs or outputs.</p>
<h2>Appearance and customization</h2>
<p>The template owns its content while the navigation component owns layout and material. Use Blocks controls and shared theme tokens inside the slot.</p>
<h2>Behavior and accessibility</h2>
<p>Place the template inside its owning navigation component. Registration is removed when the directive is destroyed. Interactive slot content must retain
accessible names and keyboard operation. Use the context to adapt content to the available space.</p>
<h2>Playground</h2>
<p>Visit <code>/components/side-nav</code> and see the <a href="components/side-nav">owning component guide</a>.</p>
`,"projects/blocks/navigation/directives/top-nav-actions/README.md":`<h1>Top nav actions slot</h1>
<p>Provide custom action content for <code>bx-top-nav</code> through a typed projected template.</p>
<h2>Import</h2>
<pre class="playground-code-block" tabindex="0" aria-label="typescript code example"><code class="hljs language-typescript"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">TopNav</span>, <span class="hljs-title class_">TopNavActionsDirective</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/navigation&#x27;</span>;</code></pre>
<p>Add these declarations to the consuming standalone component&#39;s imports.</p>
<h2>Usage</h2>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">bx-top-nav</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> <span class="hljs-attr">bxTopNavActions</span> <span class="hljs-attr">let-compact</span>=<span class="hljs-string">&quot;compact&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>{{ compact ? &#x27;Blocks&#x27; : &#x27;Blocks workspace&#x27; }}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">bx-top-nav</span>&gt;</span></code></pre>
<h2>API</h2>
<p><code>TopNavActionsDirective</code> selects <code>[bxTopNavActions]</code> and registers its <code>TemplateRef</code> with the containing <code>TopNav</code>. The template context exposes <code>compact</code> and
<code>open</code>; <code>$implicit</code> is equivalent to <code>compact</code>. There are no configurable directive inputs or outputs.</p>
<h2>Appearance and customization</h2>
<p>The template owns its content while the navigation component owns layout and material. Use Blocks controls and shared theme tokens inside the slot.</p>
<h2>Behavior and accessibility</h2>
<p>Place the template inside its owning navigation component. Registration is removed when the directive is destroyed. Interactive slot content must retain
accessible names and keyboard operation. Use the context to adapt content to the available space.</p>
<h2>Playground</h2>
<p>Visit <code>/components/top-nav</code> and see the <a href="components/top-nav">owning component guide</a>.</p>
`,"projects/blocks/navigation/directives/top-nav-brand/README.md":`<h1>Top nav brand slot</h1>
<p>Provide custom brand content for <code>bx-top-nav</code> through a typed projected template.</p>
<h2>Import</h2>
<pre class="playground-code-block" tabindex="0" aria-label="typescript code example"><code class="hljs language-typescript"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">TopNav</span>, <span class="hljs-title class_">TopNavBrandDirective</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/navigation&#x27;</span>;</code></pre>
<p>Add these declarations to the consuming standalone component&#39;s imports.</p>
<h2>Usage</h2>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">bx-top-nav</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> <span class="hljs-attr">bxTopNavBrand</span> <span class="hljs-attr">let-compact</span>=<span class="hljs-string">&quot;compact&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>{{ compact ? &#x27;Blocks&#x27; : &#x27;Blocks workspace&#x27; }}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">bx-top-nav</span>&gt;</span></code></pre>
<h2>API</h2>
<p><code>TopNavBrandDirective</code> selects <code>[bxTopNavBrand]</code> and registers its <code>TemplateRef</code> with the containing <code>TopNav</code>. The template context exposes <code>compact</code> and
<code>open</code>; <code>$implicit</code> is equivalent to <code>compact</code>. There are no configurable directive inputs or outputs.</p>
<h2>Appearance and customization</h2>
<p>The template owns its content while the navigation component owns layout and material. Use Blocks controls and shared theme tokens inside the slot.</p>
<h2>Behavior and accessibility</h2>
<p>Place the template inside its owning navigation component. Registration is removed when the directive is destroyed. Interactive slot content must retain
accessible names and keyboard operation. Use the context to adapt content to the available space.</p>
<h2>Playground</h2>
<p>Visit <code>/components/top-nav</code> and see the <a href="components/top-nav">owning component guide</a>.</p>
`,"projects/blocks/primitives/components/accordion/README.md":`<h1>Accordion</h1>
<p>Coordinates direct collapsible children into single or multiple expanded sections.</p>
<h2>Public import</h2>
<pre class="playground-code-block" tabindex="0" aria-label="typescript code example"><code class="hljs language-typescript"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">Accordion</span>, <span class="hljs-title class_">Collapsible</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/primitives&#x27;</span>;</code></pre>
<h2>Usage</h2>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">bx-accordion</span> [<span class="hljs-attr">multiple</span>]=<span class="hljs-string">&quot;false&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">bx-accordion-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Overview&quot;</span> [<span class="hljs-attr">expanded</span>]=<span class="hljs-string">&quot;true&quot;</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Project overview.<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">bx-accordion-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">bx-accordion-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Details&quot;</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Project details.<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">bx-accordion-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">bx-accordion</span>&gt;</span></code></pre>
<h2>API</h2>
<p><code>multiple</code> defaults to false. <code>collapseAll()</code> closes every child. Import <code>Collapsible</code> for the <code>bx-accordion-item</code> selector; it exposes the same inputs and
<code>expanded</code> model as <a href="components/collapsible">Collapsible</a>.</p>
<p>Use each item&#39;s <code>titleTemplate</code> to add noninteractive heading content such as number-only Blocks tags.</p>
<p>Use <code>trailingTemplate</code> for status tags or other noninteractive content at the heading&#39;s logical end, before its disclosure icon. It receives the same typed
context as <code>titleTemplate</code>. <code>/tokens</code> demonstrates compact palette headings with current-theme and companion tags.</p>
<p>Place items directly inside the accordion. Nested accordions coordinate their own items. Single mode reconciles programmatic expanded-state changes and
initially open children.</p>
<h2>Appearance and customization</h2>
<p><code>--bx-accordion-gap</code> controls spacing. Each child supports the collapsible surface variables. No parallel animation or theme configuration is introduced.</p>
<h2>Behavior and accessibility</h2>
<p>ArrowUp/ArrowDown wrap between enabled headings; Home/End choose the first/last heading. Enter/Space toggle the focused item. Disabled items are skipped;
readonly items stay focusable. Closing a section returns focus from its content to its heading. Panels have no motion dependency.</p>
<h2>Playground</h2>
<p><code>/components/accordion</code> includes live examples and shared appearance controls.</p>
`,"projects/blocks/primitives/components/alert/README.md":`<h1>Inline alert / banner</h1>
<p>Inline feedback and general banners for default, info, danger, warning and success states.</p>
<h2>Public import</h2>
<pre class="playground-code-block" tabindex="0" aria-label="typescript code example"><code class="hljs language-typescript"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">Alert</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/primitives&#x27;</span>;</code></pre>
<h2>Usage</h2>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">bx-alert</span> <span class="hljs-attr">tone</span>=<span class="hljs-string">&quot;success&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Saved&quot;</span> <span class="hljs-attr">message</span>=<span class="hljs-string">&quot;Your changes are ready.&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">bx-banner</span> <span class="hljs-attr">tone</span>=<span class="hljs-string">&quot;warning&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Review needed&quot;</span> [<span class="hljs-attr">dismissible</span>]=<span class="hljs-string">&quot;true&quot;</span> [(<span class="hljs-attr">visible</span>)]=<span class="hljs-string">&quot;visible&quot;</span> <span class="hljs-attr">dismissFocusTarget</span>=<span class="hljs-string">&quot;restore-banner&quot;</span>&gt;</span>
    Some settings need your attention.
<span class="hljs-tag">&lt;/<span class="hljs-name">bx-banner</span>&gt;</span>
@if (!visible) { <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;restore-banner&quot;</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;visible = true&quot;</span>&gt;</span>Restore banner<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span> }</code></pre>
<h2>API</h2>
<table>
<thead>
<tr>
<th>API</th>
<th>Default</th>
<th>Behavior</th>
</tr>
</thead>
<tbody><tr>
<td><code>tone</code></td>
<td>default</td>
<td><code>AlertTone</code></td>
</tr>
<tr>
<td><code>title / message</code></td>
<td>absent</td>
<td><code>ResolvableText</code>; projected content is also supported</td>
</tr>
<tr>
<td><code>dismissible</code></td>
<td>false</td>
<td>Shows a named native close action</td>
</tr>
<tr>
<td><code>dismissLabel</code></td>
<td>Dismiss notification</td>
<td>Translatable action name</td>
</tr>
<tr>
<td><code>emissive</code></td>
<td>true</td>
<td>Steady illumination of the banner and neighboring Blocks surfaces</td>
</tr>
<tr>
<td><code>emissionColor</code></td>
<td>tone text color</td>
<td>Optional semantic light-color override</td>
</tr>
<tr>
<td><code>emissionIntensity</code></td>
<td>0.6</td>
<td>Neighboring light strength, clamped to 0\u20134</td>
</tr>
<tr>
<td><code>emissionRadius</code></td>
<td>320</td>
<td>Neighboring light falloff in CSS pixels</td>
</tr>
<tr>
<td><code>visible</code></td>
<td>true</td>
<td>Two-way visibility model</td>
</tr>
<tr>
<td><code>announcement</code></td>
<td>off</td>
<td><code>AlertAnnouncement</code>: off, polite or assertive</td>
</tr>
<tr>
<td><code>dismissFocusTarget</code></td>
<td>absent</td>
<td>Optional element or element ID to focus after keyboard dismissal</td>
</tr>
<tr>
<td><code>dismissed</code></td>
<td>\u2014</td>
<td>Emitted on dismissal</td>
</tr>
<tr>
<td><code>dismiss()</code></td>
<td>\u2014</td>
<td>Respects dismissible and visible</td>
</tr>
</tbody></table>
<p><code>bx-banner</code> is an alternate selector for <code>Alert</code>. Project optional actions with <code>bxAlertActions</code>.</p>
<h2>Appearance and customization</h2>
<p><code>--bx-alert-background</code>, <code>--bx-alert-color</code>, <code>--bx-alert-border</code>, <code>--bx-alert-radius</code>, <code>--bx-alert-padding</code>, <code>--bx-alert-gap</code>, <code>--bx-alert-shadow</code>,
<code>--bx-alert-min-opacity</code>, <code>--bx-alert-light-opacity</code> and <code>--bx-alert-rim-opacity</code>. Borders use the tone color at 44.8% opacity by default; increased contrast
restores the full tone color, and <code>--bx-alert-border</code> always accepts an explicit override. Interior light opacity defaults to 0.32 and rim light opacity to 0.8
to keep illumination gentle while preserving the glass material. The shared glass surface follows application translucency and reduced transparency. Borders
have a uniform width; the old <code>--bx-alert-accent-width</code> is no longer used. The severity palette, icon, soft glow and steady light follow the same material and
emissive mechanisms as toasts, without entrance, exit or progress animations. Optional <code>data-bx-light-scope</code> on an owning container limits neighboring
illumination to that scene.</p>
<h2>Behavior and accessibility</h2>
<p>Static content is silent by default. Use polite for changing status and assertive for urgent errors; the live text excludes the action slot. Supply descriptive
text as well as a tone. Content and actions wrap at narrow widths. If dismissal removes the focused control, provide dismissFocusTarget or manage focus through
dismissed. Focus restoration waits for rendering, so the destination may be created conditionally after dismissal.</p>
<h2>Playground</h2>
<p><code>/components/alert</code> includes live examples and shared appearance controls.</p>
`,"projects/blocks/primitives/components/card/README.md":`<h1>Card</h1>
<p>A themed content surface with optional whole-card activation and controlled selection, using Blocks&#39; shared lighting and accessibility preferences.</p>
<h2>Public import</h2>
<pre class="playground-code-block" tabindex="0" aria-label="typescript code example"><code class="hljs language-typescript"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">Card</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/primitives&#x27;</span>;</code></pre>
<h2>Usage</h2>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">bx-card</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Project&quot;</span> <span class="hljs-attr">subtitle</span>=<span class="hljs-string">&quot;Updated recently&quot;</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;outlined&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Project content.<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">bxCardFooter</span>&gt;</span>Last updated today<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">bx-card</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">bx-card</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Open project&quot;</span> <span class="hljs-attr">ariaLabel</span>=<span class="hljs-string">&quot;Open project&quot;</span> (<span class="hljs-attr">activated</span>)=<span class="hljs-string">&quot;openProject()&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>A single native button action across the entire card.<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span></code></pre>
<p>For a selectable card, the consumer owns its selection:</p>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { signal } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;

<span class="hljs-keyword">readonly</span> selected = <span class="hljs-title function_">signal</span>(<span class="hljs-literal">false</span>);</code></pre>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">bx-card</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Workspace&quot;</span> [<span class="hljs-attr">clickable</span>]=<span class="hljs-string">&quot;true&quot;</span> [(<span class="hljs-attr">selected</span>)]=<span class="hljs-string">&quot;selected&quot;</span> <span class="hljs-attr">highlightColor</span>=<span class="hljs-string">&quot;accent&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Press anywhere to choose this workspace.<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">bx-card</span>&gt;</span></code></pre>
<p>For an exclusive choice, bind <code>[selected]</code> from the chosen value and update that value on <code>(activated)</code>. Activating an already selected choice keeps it
selected. Use <code>[(selected)]</code> when each activation should toggle selection.</p>
<h2>API</h2>
<table>
<thead>
<tr>
<th>API</th>
<th>Default</th>
<th>Behavior</th>
</tr>
</thead>
<tbody><tr>
<td><code>title</code>, <code>subtitle</code></td>
<td>absent</td>
<td>Translated <code>ResolvableText</code> content</td>
</tr>
<tr>
<td><code>headingLevel</code></td>
<td>3</td>
<td>Title heading level, clamped to 1\u20136</td>
</tr>
<tr>
<td><code>variant: CardVariant</code></td>
<td>outlined</td>
<td>Outlined, elevated or filled</td>
</tr>
<tr>
<td><code>surfaceEffects</code></td>
<td>true</td>
<td>Mount shared decorative surface effects; false keeps static themed styling for dense collections</td>
</tr>
<tr>
<td><code>opaque</code></td>
<td>inherited</td>
<td>Optional opaque presentation</td>
</tr>
<tr>
<td><code>clickable</code></td>
<td>false</td>
<td>Whole-card action; native <code>button[bx-card]</code> is always clickable</td>
</tr>
<tr>
<td><code>selected</code></td>
<td>absent</td>
<td>Controlled boolean selection; absence creates a plain action</td>
</tr>
<tr>
<td><code>selectedChange</code></td>
<td>\u2014</td>
<td>Requested next boolean selection, emitted only when <code>selected</code> is supplied; supports <code>[(selected)]</code></td>
</tr>
<tr>
<td><code>activated</code></td>
<td>\u2014</td>
<td>Enabled pointer, Enter or Space activation, and guarded <code>activate()</code> calls</td>
</tr>
<tr>
<td><code>highlightColor: Color</code></td>
<td>CSS/primary</td>
<td>Semantic or palette token for hover, focus and selected emission</td>
</tr>
<tr>
<td><code>disabled</code></td>
<td>false</td>
<td>Suppresses activation and excludes a clickable card from keyboard navigation</td>
</tr>
<tr>
<td><code>readonly</code>, <code>readOnly</code></td>
<td>false</td>
<td>Prevents activation while preserving focus and selected appearance</td>
</tr>
<tr>
<td><code>ariaLabel</code></td>
<td>content</td>
<td>Optional translated accessible name</td>
</tr>
<tr>
<td><code>ariaLabelledBy</code>, <code>ariaDescribedBy</code></td>
<td>absent</td>
<td>Optional labeling/description IDs</td>
</tr>
<tr>
<td><code>activate()</code></td>
<td>\u2014</td>
<td>Requests activation after checking current interactive state</td>
</tr>
<tr>
<td><code>focus(options?)</code></td>
<td>\u2014</td>
<td>Focuses an enabled clickable card</td>
</tr>
</tbody></table>
<p>Set <code>[surfaceEffects]=&quot;false&quot;</code> for dense static collections such as the token catalog. Theme variables, focus styling, content slots and actions remain
available.</p>
<p>Slots: <code>bxCardMedia</code>, <code>bxCardHeader</code>, default body and <code>bxCardFooter</code>. Header content follows the optional generated title/subtitle. Empty sections take no
space.</p>
<h2>Appearance and customization</h2>
<p>Existing variables: <code>--bx-card-background</code>, <code>--bx-card-color</code>, <code>--bx-card-border</code>, <code>--bx-card-radius</code>, <code>--bx-card-shadow</code>, <code>--bx-card-padding</code> and
<code>--bx-card-title-size</code>.</p>
<p>Interactive variables: <code>--bx-card-highlight</code> (defaults to <code>--bx-primary</code>), <code>--bx-card-selected-background</code> (element active), <code>--bx-card-selected-border</code>
(ordinary card border), <code>--bx-card-hover-background</code> (element hover), <code>--bx-card-pressed-background</code> (element active), <code>--bx-card-focus-color</code> (highlight), and
<code>--bx-card-disabled-opacity</code> (0.6).</p>
<p><code>highlightColor</code> overrides <code>--bx-card-highlight</code> with a typed Blocks token. Selected cards resolve their highlight in their own theme scope and emit the same
persistent border light as selected Blocks controls, without adding a second selection outline. Keyboard focus retains its own visible ring. Colors follow the
active palette, and mounted surfaces react to theme and appearance changes.</p>
<h2>Behavior and accessibility</h2>
<p>Ordinary cards remain containers whose links and buttons provide interaction. Prefer <code>button[bx-card]</code> for a native whole-card action; it uses <code>type=&quot;button&quot;</code>.
<code>bx-card[clickable]</code> adds button semantics and Enter/Space operation. Enter activates on keydown without repeats; Space activates on keyup and does not scroll
the page. <code>selected</code> supplies <code>aria-pressed</code>; selection is accompanied by material and emitted-light feedback. Add a visible check or other content indicator
when useful.</p>
<p>Use <code>activated</code> for guarded actions. Read-only cards remain focusable and announce that activation is unavailable. Disabled cards are removed from tab order and
retain a readable disabled presentation. Application-driven selection updates remain possible in either state.</p>
<p>A whole-card action should contain descriptive, noninteractive content. Use an ordinary card for multiple independent actions; nested controls do not activate
the card. Long content wraps. Combine with Grid and Container for responsive pages, and give images meaningful alternative text.</p>
<p>The surface engine respects reduced motion and transparency; forced colors uses a static selected border and visible keyboard focus. No decorative motion is
needed to identify selection.</p>
<h2>Playground</h2>
<p><code>/components/card</code> demonstrates native actions, controlled/two-way selection, configurable highlight tokens, disabled and read-only states, and ordinary content
cards. <code>/appearance</code> uses clickable cards for Light, Dark and Auto.</p>
`,"projects/blocks/primitives/components/chip/README.md":`<h1>Interactive chip</h1>
<p>A compact native action, toggle or removable token using Blocks semantic palettes.</p>
<h2>Public import</h2>
<pre class="playground-code-block" tabindex="0" aria-label="typescript code example"><code class="hljs language-typescript"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">Chip</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/primitives&#x27;</span>;</code></pre>
<h2>Usage</h2>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">bx-chip</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Design&quot;</span> [(<span class="hljs-attr">selected</span>)]=<span class="hljs-string">&quot;designSelected&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">bx-chip</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Angular&quot;</span> [<span class="hljs-attr">selectable</span>]=<span class="hljs-string">&quot;false&quot;</span> [<span class="hljs-attr">removable</span>]=<span class="hljs-string">&quot;true&quot;</span> (<span class="hljs-attr">removed</span>)=<span class="hljs-string">&quot;removeAngular()&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">bx-chip</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Fixed selection&quot;</span> [<span class="hljs-attr">selected</span>]=<span class="hljs-string">&quot;true&quot;</span> [<span class="hljs-attr">readOnly</span>]=<span class="hljs-string">&quot;true&quot;</span> /&gt;</span></code></pre>
<h2>API</h2>
<table>
<thead>
<tr>
<th>API</th>
<th>Default</th>
<th>Behavior</th>
</tr>
</thead>
<tbody><tr>
<td><code>label</code></td>
<td>required</td>
<td><code>ResolvableText</code></td>
</tr>
<tr>
<td><code>selected</code></td>
<td>false</td>
<td>Two-way selection model</td>
</tr>
<tr>
<td><code>selectable</code></td>
<td>true</td>
<td>Toggles selection and exposes aria-pressed</td>
</tr>
<tr>
<td><code>deselectable</code></td>
<td>true</td>
<td>Allows an active selectable chip to be deselected</td>
</tr>
<tr>
<td><code>removable</code></td>
<td>false</td>
<td>Separate accessible remove action</td>
</tr>
<tr>
<td><code>disabled</code></td>
<td>false</td>
<td>Removes both actions from normal focus</td>
</tr>
<tr>
<td><code>readonly / readOnly</code></td>
<td>false</td>
<td>Prevents activation and removal while retaining focus</td>
</tr>
<tr>
<td><code>config</code></td>
<td>{}</td>
<td><code>IChipConfig</code> appearance and remove label</td>
</tr>
<tr>
<td><code>activated</code></td>
<td>\u2014</td>
<td>Main action, after selection changes</td>
</tr>
<tr>
<td><code>removed</code></td>
<td>\u2014</td>
<td>Removal request; application owns the array</td>
</tr>
<tr>
<td><code>focus(options?)</code></td>
<td>\u2014</td>
<td>Focuses the main action</td>
</tr>
</tbody></table>
<p><code>deselectable</code> defaults to true. Set it to false for an application-coordinated single-choice group: activating an unselected chip selects it, while activating
an already selected chip leaves it selected. The owner clears selection on the other chips. <code>activated</code> still emits for each enabled activation.</p>
<p><code>IChipConfig</code> supports <code>color</code> (primary), <code>variant</code> (tonal), <code>size</code> (medium), optional <code>icon</code>, and translatable <code>removeLabel</code> (Remove {label}). Provide
<code>BX_CHIP_DEFAULTS</code> for shared values; instance configuration wins.</p>
<h2>Appearance and customization</h2>
<p><code>--bx-chip-background</code>, <code>--bx-chip-color</code>, <code>--bx-chip-border</code>, <code>--bx-chip-radius</code>, <code>--bx-chip-min-height</code>, <code>--bx-chip-hover-background</code> and
<code>--bx-chip-remove-background</code>, and <code>--bx-chip-fill-opacity</code> override the shared tag palette and spacing defaults. Main-action hover fills the entire chip behind
the separate circular remove action for tonal/outlined chips. Filled chips preserve their fill and use an inset hover outline, keeping the theme&#39;s on-fill text
contrast stable; <code>--bx-chip-hover-background</code> can override that behavior. Filled chips default to an opaque semantic fill (<code>--bx-chip-fill-opacity: 1</code>),
matching filled-button intent and keeping primary selection visible.</p>
<h2>Behavior and accessibility</h2>
<p>Enter and Space activate native buttons. Delete or Backspace on the main action requests removal when enabled. Selection has a check mark and inset outline. The
label wraps. The application should move focus to an adjacent chip or another action after removing the focused item; the playground demonstrates this. This
primitive is not a form field; use selectedChange to coordinate application or form state.</p>
<h2>Playground</h2>
<p><code>/components/chip</code> includes live examples and shared appearance controls.</p>
`,"projects/blocks/primitives/components/collapsible/README.md":`<h1>Collapsible</h1>
<p>A standalone disclosure. The same component also provides the bx-accordion-item selector.</p>
<h2>Public import</h2>
<pre class="playground-code-block" tabindex="0" aria-label="typescript code example"><code class="hljs language-typescript"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">Collapsible</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/primitives&#x27;</span>;</code></pre>
<h2>Usage</h2>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">bx-collapsible</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Project details&quot;</span> [(<span class="hljs-attr">expanded</span>)]=<span class="hljs-string">&quot;expanded&quot;</span> [<span class="hljs-attr">region</span>]=<span class="hljs-string">&quot;true&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Persistent content.<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">bx-collapsible</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">bx-collapsible</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Notifications&quot;</span> [<span class="hljs-attr">titleTemplate</span>]=<span class="hljs-string">&quot;heading&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> #<span class="hljs-attr">heading</span> <span class="hljs-attr">let-title</span> <span class="hljs-attr">let-expanded</span>=<span class="hljs-string">&quot;expanded&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>{{ title }} \xB7 {{ expanded ? &#x27;Open&#x27; : &#x27;Closed&#x27; }}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">bx-collapsible</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Notifications&quot;</span> [<span class="hljs-attr">trailingTemplate</span>]=<span class="hljs-string">&quot;status&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> #<span class="hljs-attr">status</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">bx-tag</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;Current theme&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;small&quot;</span> [<span class="hljs-attr">focusable</span>]=<span class="hljs-string">&quot;false&quot;</span> /&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">bx-collapsible</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Lazy content&quot;</span> [<span class="hljs-attr">contentTemplate</span>]=<span class="hljs-string">&quot;details&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> #<span class="hljs-attr">details</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Created only while expanded.<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span></code></pre>
<h2>API</h2>
<table>
<thead>
<tr>
<th>API</th>
<th>Default</th>
<th>Behavior</th>
</tr>
</thead>
<tbody><tr>
<td><code>title</code></td>
<td>required</td>
<td>Translated heading and button name</td>
</tr>
<tr>
<td><code>expanded</code></td>
<td>false</td>
<td>Two-way state model</td>
</tr>
<tr>
<td><code>disabled</code></td>
<td>false</td>
<td>Prevents toggling and heading focus</td>
</tr>
<tr>
<td><code>readonly / readOnly</code></td>
<td>false</td>
<td>Prevents user toggling while retaining focus</td>
</tr>
<tr>
<td><code>headingLevel</code></td>
<td>3</td>
<td>Heading level, clamped to 1\u20136</td>
</tr>
<tr>
<td><code>region</code></td>
<td>false</td>
<td>Adds a named region for substantial content</td>
</tr>
<tr>
<td><code>titleTemplate</code></td>
<td>absent</td>
<td>Noninteractive heading template with <code>ICollapsibleTitleContext</code>: <code>$implicit</code> translated title and <code>expanded</code> state</td>
</tr>
<tr>
<td><code>trailingTemplate</code></td>
<td>absent</td>
<td>Noninteractive content at the heading&#39;s logical end, before the chevron; receives the same context as <code>titleTemplate</code></td>
</tr>
<tr>
<td><code>contentTemplate</code></td>
<td>absent</td>
<td>Lazy template, recreated on expansion</td>
</tr>
<tr>
<td><code>id</code></td>
<td>generated</td>
<td>Base ID for the trigger and panel</td>
</tr>
<tr>
<td><code>toggle() / focus()</code></td>
<td>\u2014</td>
<td>Guarded toggle and heading focus</td>
</tr>
</tbody></table>
<p>Keep title templates noninteractive; the enclosing native button owns keyboard activation and the accessible name. Use a number-only <code>Tag</code> for counts.</p>
<p><code>trailingTemplate</code> places status text, tags, or icons on the right in LTR layouts and on the left in RTL layouts. Content can wrap on narrow screens. Import
<code>Tag</code> from the Primitives entry point for the example above. Keep trailing content noninteractive and set embedded tags to <code>[focusable]=&quot;false&quot;</code>; the heading
remains one disclosure button, and its accessible name includes the status content.</p>
<p>Projected content remains mounted while collapsed; lazy template state is recreated on reopening. Application-driven expanded changes remain possible for
disabled/readonly sections.</p>
<h2>Appearance and customization</h2>
<p><code>--bx-collapsible-background</code>, <code>--bx-collapsible-border</code>, <code>--bx-collapsible-radius</code>, <code>--bx-collapsible-padding</code> and <code>--bx-collapsible-content-padding</code> follow
shared semantic defaults.</p>
<p>The heading&#39;s hover background follows the surface&#39;s inner corners. Expanded headings keep rounded top corners and square bottom corners, with no divider
between the heading and content. Accordion items share this appearance.</p>
<h2>Behavior and accessibility</h2>
<p>Native button activation, aria-expanded and aria-controls connect the heading and panel. Hidden panels are inert. Programmatic collapse moves contained focus to
the heading. Optional regions avoid filling the page with unnecessary landmarks.</p>
<h2>Playground</h2>
<p><code>/components/collapsible</code> includes live examples and shared appearance controls.</p>
`,"projects/blocks/primitives/components/container/README.md":`<h1>Content container</h1>
<p>Centers content and constrains page width using the shared breakpoint scale.</p>
<h2>Public import</h2>
<pre class="playground-code-block" tabindex="0" aria-label="typescript code example"><code class="hljs language-typescript"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">Container</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/primitives&#x27;</span>;</code></pre>
<h2>Usage</h2>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">bx-container</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;lg&quot;</span> <span class="hljs-attr">landmark</span>=<span class="hljs-string">&quot;main&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">h1</span>&gt;</span>Workspace<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Main page content.<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">bx-container</span>&gt;</span></code></pre>
<h2>API</h2>
<p><code>size: ContainerSize</code> is sm, md, lg (default), xl or full. Optional <code>landmark</code> accepts main, region or complementary. <code>ariaLabel</code> accepts <code>ResolvableText</code> and
names a landmark when needed. The component adds no surface or scroll container.</p>
<h2>Appearance and customization</h2>
<p><code>--bx-container-max-width</code> and <code>--bx-container-padding</code> override width and logical gutters. Presets come from core/styles/helpers; full width stays within the
parent.</p>
<h2>Behavior and accessibility</h2>
<p>Use main once per page. Give regions descriptive names. Logical gutters and auto margins support RTL, narrow containers and zoom. Compose Stack, Grid and Card
inside it.</p>
<h2>Playground</h2>
<p><code>/components/layout/container</code> includes live examples and shared appearance controls.</p>
`,"projects/blocks/primitives/components/divider/README.md":`<h1>Divider</h1>
<p>Separates adjacent content with a horizontal or vertical rule and an optional translated label.</p>
<h2>Public import</h2>
<pre class="playground-code-block" tabindex="0" aria-label="typescript code example"><code class="hljs language-typescript"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">Divider</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/primitives&#x27;</span>;</code></pre>
<h2>Usage</h2>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">bx-divider</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">bx-divider</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Continue&quot;</span> <span class="hljs-attr">lineStyle</span>=<span class="hljs-string">&quot;dashed&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">bx-stack</span> <span class="hljs-attr">direction</span>=<span class="hljs-string">&quot;horizontal&quot;</span>&gt;</span> <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>Start<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">bx-divider</span> <span class="hljs-attr">orientation</span>=<span class="hljs-string">&quot;vertical&quot;</span> /&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>End<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span> <span class="hljs-tag">&lt;/<span class="hljs-name">bx-stack</span>&gt;</span></code></pre>
<h2>API</h2>
<table>
<thead>
<tr>
<th>Input</th>
<th>Default</th>
<th>Behavior</th>
</tr>
</thead>
<tbody><tr>
<td><code>orientation</code></td>
<td><code>horizontal</code></td>
<td><code>horizontal</code> or <code>vertical</code></td>
</tr>
<tr>
<td><code>lineStyle</code></td>
<td><code>solid</code></td>
<td><code>solid</code>, <code>dashed</code> or <code>dotted</code></td>
</tr>
<tr>
<td><code>label</code></td>
<td>absent</td>
<td><code>ResolvableText</code> between the two rule segments</td>
</tr>
<tr>
<td><code>decorative</code></td>
<td><code>false</code></td>
<td>Hides the rule and label from assistive technology</td>
</tr>
</tbody></table>
<p>Also exports <code>DividerOrientation</code> and <code>DividerStyle</code>. The stack example additionally imports <code>Stack</code>.</p>
<h2>Appearance and customization</h2>
<p><code>--bx-divider-color</code>, <code>--bx-divider-thickness</code>, <code>--bx-divider-margin</code>, <code>--bx-divider-gap</code>, <code>--bx-divider-text</code>, <code>--bx-divider-font-size</code> and
<code>--bx-divider-min-height</code> override shared defaults.</p>
<h2>Behavior and accessibility</h2>
<p>Uses separator semantics and reports its orientation. Labels wrap. Vertical dividers stretch within a flex row; give the row a meaningful height. No motion is
required.</p>
<h2>Playground</h2>
<p><code>/components/layout/divider</code> includes live examples and shared appearance controls.</p>
`,"projects/blocks/primitives/components/grid/README.md":`<h1>Grid layout</h1>
<p>Responsive CSS grid for cards and general content without a separate layout framework.</p>
<h2>Public import</h2>
<pre class="playground-code-block" tabindex="0" aria-label="typescript code example"><code class="hljs language-typescript"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">Grid</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/primitives&#x27;</span>;</code></pre>
<h2>Usage</h2>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">bx-grid</span> <span class="hljs-attr">minColumnWidth</span>=<span class="hljs-string">&quot;16rem&quot;</span> [<span class="hljs-attr">gap</span>]=<span class="hljs-string">&quot;4&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">bx-card</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Project one&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">bx-card</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Project two&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">bx-grid</span>&gt;</span></code></pre>
<h2>API</h2>
<p><code>minColumnWidth</code> defaults to 16rem and controls auto-fit columns. Optional <code>columns</code> selects a fixed count clamped to 1\u201324. <code>gap: LayoutGap</code> defaults to 4 and
uses the shared spacing scale. Fixed and automatic grids become one column below the shared sm breakpoint. The usage also imports <code>Card</code>.</p>
<h2>Appearance and customization</h2>
<p><code>--bx-grid-gap</code> overrides spacing. Minimum column width never exceeds the parent. Fixed columns use minmax(0, 1fr) to allow long content to shrink.</p>
<h2>Behavior and accessibility</h2>
<p>Keeps natural DOM order without adding roles or keyboard behavior. Place semantic sections and controls inside the grid. Text enlargement, narrow containers and
RTL use normal CSS layout.</p>
<h2>Playground</h2>
<p><code>/components/layout/grid</code> includes live examples and shared appearance controls.</p>
`,"projects/blocks/primitives/components/loading-indicator/README.md":`<h1>Loading indicator</h1>
<p>Reusable loading feedback integrated with Blocks themes and accessibility preferences.</p>
<h2>Import</h2>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">LoadingIndicator</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/primitives&#x27;</span>;</code></pre>
<h2>Usage</h2>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">bx-loading-indicator</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Fetching results&quot;</span> /&gt;</span></code></pre>
<h2>API</h2>
<p><code>label</code> accepts translated text; <code>size</code> controls its decorative spinner. The host is a polite busy status region. Project optional supporting content after the
status text. CSS variables: <code>--bx-loading-color</code>, <code>--bx-loading-gap</code>.</p>
<h2>Appearance and accessibility</h2>
<p>Uses Blocks semantic tokens and the active <code>ThemingService</code> configuration. Customize through documented inputs, templates and CSS variables. Existing components
update when the application theme changes. Keyboard focus, forced colors, reduced transparency and <code>BxA11yService</code> reduced-motion preferences remain supported.</p>
<p>Text inputs accept <code>ResolvableText</code>: plain text or <code>{ key: &#39;translation.key&#39; }</code>. With <code>BX_I18N</code>, text is resolved reactively, including already-mounted controls
when the adapter&#39;s <code>version</code> signal changes. Plain text works without an adapter.</p>
<h2>Playground</h2>
<p>Open <code>/components/loading-indicator</code>. Fake asynchronous requests demonstrate progress and loading buttons. Reduced-motion preferences remove continuous
animation while preserving status feedback.</p>
`,"projects/blocks/primitives/components/loading-spinner/README.md":`<h1>Loading spinner</h1>
<p>Reusable loading feedback integrated with Blocks themes and accessibility preferences.</p>
<h2>Import</h2>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">LoadingSpinner</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/primitives&#x27;</span>;</code></pre>
<h2>Usage</h2>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">bx-loading-spinner</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Fetching results&quot;</span> [<span class="hljs-attr">size</span>]=<span class="hljs-string">&quot;24&quot;</span> /&gt;</span></code></pre>
<h2>API</h2>
<p><code>size</code> is the diameter in pixels (20 by default). <code>label</code> is translatable. <code>decorative</code> defaults to false; set it to true when surrounding content already names
the operation. CSS variables: <code>--bx-spinner-color</code>, <code>--bx-spinner-stroke</code>, <code>--bx-spinner-size</code>.</p>
<h2>Appearance and accessibility</h2>
<p>Uses Blocks semantic tokens and the active <code>ThemingService</code> configuration. Customize through documented inputs, templates and CSS variables. Existing components
update when the application theme changes. Keyboard focus, forced colors, reduced transparency and <code>BxA11yService</code> reduced-motion preferences remain supported.</p>
<p>Text inputs accept <code>ResolvableText</code>: plain text or <code>{ key: &#39;translation.key&#39; }</code>. With <code>BX_I18N</code>, text is resolved reactively, including already-mounted controls
when the adapter&#39;s <code>version</code> signal changes. Plain text works without an adapter.</p>
<h2>Playground</h2>
<p>Open <code>/components/loading-spinner</code>. Fake asynchronous requests demonstrate progress and loading buttons. Reduced-motion preferences remove continuous animation
while preserving status feedback.</p>
`,"projects/blocks/primitives/components/menu-item/README.md":`<h1>Menu item</h1>
<p>A menu action with optional icons, a shortcut hint, and destructive intent.</p>
<h2>Import</h2>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">MenuItem</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/primitives&#x27;</span>;</code></pre>
<p>Add the standalone component or directive to your component&#39;s <code>imports</code>.</p>
<h2>Usage</h2>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">bx-menu-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Delete&quot;</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;trash-2&quot;</span> [<span class="hljs-attr">danger</span>]=<span class="hljs-string">&quot;true&quot;</span> (<span class="hljs-attr">action</span>)=<span class="hljs-string">&quot;remove()&quot;</span> /&gt;</span></code></pre>
<h2>API</h2>
<p><code>label</code>, <code>icon</code>, <code>endIcon</code>, <code>shortcut</code>, <code>disabled</code>, <code>danger</code>, and <code>wrapLabel</code>. Set <code>wrapLabel</code> to <code>true</code> when a menu item should wrap long content instead of
truncating it. <code>action</code> emits the mouse event for enabled items. Clipped labels and projected text use the shared <code>TruncateDirective</code> and receive an automatic
tooltip. <code>[tooltipOnTruncate]=&quot;false&quot;</code> disables that tooltip while retaining ellipsis, allowing application-owned feedback. <code>wrapLabel</code> disables truncation
itself.</p>
<h2>Shortcut definitions</h2>
<p><code>shortcut</code> accepts <code>ResolvableShortcut</code> from <code>@filip.mazev/blocks/core</code>:</p>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-comment">&lt;!-- A portable combination: \u2318 \u21E7 V on Apple, Ctrl Shift V elsewhere. --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">bx-menu-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Open view&quot;</span> [<span class="hljs-attr">shortcut</span>]=<span class="hljs-string">&quot;[&#x27;mod&#x27;, &#x27;shift&#x27;, &#x27;v&#x27;]&quot;</span> (<span class="hljs-attr">action</span>)=<span class="hljs-string">&quot;openView()&quot;</span> /&gt;</span>

<span class="hljs-comment">&lt;!-- Explicit OS differences; default is required. --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">bx-menu-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Duplicate&quot;</span> [<span class="hljs-attr">shortcut</span>]=<span class="hljs-string">&quot;duplicateShortcut&quot;</span> (<span class="hljs-attr">action</span>)=<span class="hljs-string">&quot;duplicate()&quot;</span> /&gt;</span></code></pre>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">ResolvableShortcut</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/core&#x27;</span>;

<span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> <span class="hljs-attr">duplicateShortcut</span>: <span class="hljs-title class_">ResolvableShortcut</span> = {
  <span class="hljs-attr">mac</span>: [<span class="hljs-string">&#x27;command&#x27;</span>, <span class="hljs-string">&#x27;shift&#x27;</span>, <span class="hljs-string">&#x27;d&#x27;</span>],
  <span class="hljs-attr">windows</span>: [<span class="hljs-string">&#x27;ctrl&#x27;</span>, <span class="hljs-string">&#x27;shift&#x27;</span>, <span class="hljs-string">&#x27;d&#x27;</span>],
  <span class="hljs-attr">linux</span>: [<span class="hljs-string">&#x27;alt&#x27;</span>, <span class="hljs-string">&#x27;shift&#x27;</span>, <span class="hljs-string">&#x27;d&#x27;</span>],
  <span class="hljs-attr">ios</span>: [<span class="hljs-string">&#x27;command&#x27;</span>, <span class="hljs-string">&#x27;shift&#x27;</span>, <span class="hljs-string">&#x27;d&#x27;</span>],
  <span class="hljs-attr">android</span>: [<span class="hljs-string">&#x27;ctrl&#x27;</span>, <span class="hljs-string">&#x27;shift&#x27;</span>, <span class="hljs-string">&#x27;d&#x27;</span>],
  <span class="hljs-attr">default</span>: [<span class="hljs-string">&#x27;mod&#x27;</span>, <span class="hljs-string">&#x27;shift&#x27;</span>, <span class="hljs-string">&#x27;d&#x27;</span>]
};</code></pre>
<p>A string is <strong>one token</strong>; use an array for a combination. <code>&#39;Ctrl+K&#39;</code> remains a single custom display token and is not parsed. <code>[&#39;mod&#39;, &#39;k&#39;, &#39;v&#39;]</code> displays
three tokens, but does not define a sequence or a valid single-event combination. To open a menu with Command/Ctrl+K followed by V, track two separate events;
the playground demonstrates application-owned sequence state with a two-second timeout, cancellation and cleanup.</p>
<table>
<thead>
<tr>
<th>Input aliases (case insensitive)</th>
<th>macOS / iOS / iPadOS</th>
<th>Windows</th>
<th>Linux / Unix</th>
<th>Android / unknown / SSR</th>
</tr>
</thead>
<tbody><tr>
<td><code>mod</code>, <code>primary</code>, <code>cmdorctrl</code>, <code>commandorcontrol</code></td>
<td>\u2318</td>
<td>Ctrl</td>
<td>Ctrl</td>
<td>Ctrl</td>
</tr>
<tr>
<td><code>command</code>, <code>cmd</code>, <code>meta</code>, <code>super</code>, <code>win</code>, <code>windows</code>, <code>\u2318</code></td>
<td>\u2318</td>
<td>Win</td>
<td>Super</td>
<td>Meta</td>
</tr>
<tr>
<td><code>ctrl</code>, <code>control</code>, <code>\u2303</code></td>
<td>\u2303</td>
<td>Ctrl</td>
<td>Ctrl</td>
<td>Ctrl</td>
</tr>
<tr>
<td><code>alt</code>, <code>option</code>, <code>opt</code>, <code>\u2325</code></td>
<td>\u2325</td>
<td>Alt</td>
<td>Alt</td>
<td>Alt</td>
</tr>
<tr>
<td><code>shift</code>, <code>\u21E7</code></td>
<td>\u21E7</td>
<td>Shift</td>
<td>Shift</td>
<td>Shift</td>
</tr>
<tr>
<td><code>enter</code>, <code>return</code></td>
<td>\u21A9</td>
<td>Enter</td>
<td>Enter</td>
<td>Enter</td>
</tr>
<tr>
<td><code>backspace</code> / <code>delete</code></td>
<td>\u232B / \u2326</td>
<td>Backspace / Delete</td>
<td>Backspace / Delete</td>
<td>Backspace / Delete</td>
</tr>
<tr>
<td><code>tab</code> / <code>escape</code>, <code>esc</code></td>
<td>\u21E5 / \u238B</td>
<td>Tab / Escape</td>
<td>Tab / Escape</td>
<td>Tab / Escape</td>
</tr>
<tr>
<td><code>up</code>, <code>down</code>, <code>left</code>, <code>right</code> (or <code>Arrow\u2026</code>)</td>
<td>\u2191 \u2193 \u2190 \u2192</td>
<td>\u2191 \u2193 \u2190 \u2192</td>
<td>\u2191 \u2193 \u2190 \u2192</td>
<td>\u2191 \u2193 \u2190 \u2192</td>
</tr>
</tbody></table>
<p>Letters display in uppercase. <code>space</code> becomes Space, and <code>plus</code> becomes +. Existing symbol tokens and unknown custom labels remain usable. Explicit <code>ctrl</code>
always means Control, including on Mac; use <code>mod</code> for Command/Control adaptation. <code>ios</code> falls back to <code>mac</code>, then <code>default</code>; other absent overrides use
<code>default</code>. Mobile mappings apply to hardware keyboards. Unknown platforms and server rendering use <code>default</code>, where <code>mod</code> means Control.</p>
<h2>Handling keyboard activation</h2>
<p>The component renders a hint and emits <code>action</code> for button activation. <strong>It does not attach a global keyboard listener or open a menu automatically.</strong>
<code>BxShortcutService</code> now shares platform selection, alias normalization, presentation, accessibility metadata and event matching, so the hint and application
handler use the same definition.</p>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span>, inject } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">BxShortcutService</span>, <span class="hljs-title class_">ResolvableShortcut</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">MenuItem</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/primitives&#x27;</span>;

<span class="hljs-meta">@Component</span>({
    <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;app-view-command&#x27;</span>,
    <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">MenuItem</span>],
    <span class="hljs-attr">template</span>: <span class="hljs-string">\`&lt;bx-menu-item label=&quot;Open view&quot; [shortcut]=&quot;viewShortcut&quot; (action)=&quot;openView()&quot; /&gt;\`</span>,
    <span class="hljs-attr">host</span>: { <span class="hljs-string">&#x27;(document:keydown)&#x27;</span>: <span class="hljs-string">&#x27;onKeydown($event)&#x27;</span> }
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">ViewCommand</span> {
    <span class="hljs-keyword">private</span> <span class="hljs-keyword">readonly</span> bxShortcutService = <span class="hljs-title function_">inject</span>(<span class="hljs-title class_">BxShortcutService</span>);
    <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> <span class="hljs-attr">viewShortcut</span>: <span class="hljs-title class_">ResolvableShortcut</span> = [<span class="hljs-string">&#x27;mod&#x27;</span>, <span class="hljs-string">&#x27;shift&#x27;</span>, <span class="hljs-string">&#x27;v&#x27;</span>];

    <span class="hljs-keyword">protected</span> <span class="hljs-title function_">onKeydown</span>(<span class="hljs-attr">event</span>: <span class="hljs-title class_">KeyboardEvent</span>): <span class="hljs-built_in">void</span> {
        <span class="hljs-keyword">if</span> (!<span class="hljs-variable language_">this</span>.<span class="hljs-property">bxShortcutService</span>.<span class="hljs-title function_">matches</span>(event, <span class="hljs-variable language_">this</span>.<span class="hljs-property">viewShortcut</span>)) <span class="hljs-keyword">return</span>;

        event.<span class="hljs-title function_">preventDefault</span>();
        <span class="hljs-variable language_">this</span>.<span class="hljs-title function_">openView</span>();
    }

    <span class="hljs-keyword">protected</span> <span class="hljs-title function_">openView</span>(): <span class="hljs-built_in">void</span> {
        <span class="hljs-comment">// Run the same application action used by the menu item.</span>
    }
}</code></pre>
<p>For opening a menu, call the public <code>MenuTriggerDirective.open(true)</code> method after a successful match. It opens with focus on the first enabled item; Escape
restores focus to the trigger. Angular removes the host listener when this example&#39;s component is destroyed. Choose a handler scope appropriate to your
application and enforce the same disabled/permission guards for pointer and keyboard activation.</p>
<table>
<thead>
<tr>
<th>Service API</th>
<th>Purpose</th>
</tr>
</thead>
<tbody><tr>
<td><code>platform(): ShortcutPlatform</code></td>
<td>Detect the platform through <code>DeviceTypeService</code>.</td>
</tr>
<tr>
<td><code>resolve(shortcut, platform?): string[] | undefined</code></td>
<td>Return display tokens; optionally preview another platform. Empty/absent shortcuts return undefined.</td>
</tr>
<tr>
<td><code>toAriaKeyshortcuts(shortcut, platform?): string | null</code></td>
<td>Return canonical names such as <code>Meta+Shift+V</code>; invalid/custom hints return null. Does not register a binding.</td>
</tr>
<tr>
<td><code>matches(event, shortcut, options?): boolean</code></td>
<td>Match one ordinary key plus the exact requested modifiers. Does not prevent defaults or invoke actions.</td>
</tr>
</tbody></table>
<p><code>IShortcutMatchOptions</code> exposes <code>platform</code>, <code>allowInEditable</code> (false), and <code>allowRepeat</code> (false). Matching always ignores already-handled, composing and
AltGraph events. By default it ignores input, textarea, select, contenteditable and textbox targets, including readonly inputs. Modifiers alone, duplicate
modifiers, multiple ordinary keys and custom labels are display-only. Matching uses <code>KeyboardEvent.key</code> (case insensitive), so keyboard layout matters;
Option/Alt characters must match the actual produced key. The service does not track pressed keys, sequences, global registrations, priority, or conflict
resolution.</p>
<h2>Appearance</h2>
<p>Appearance uses Blocks semantic colors, spacing, radius and motion tokens. Glass surfaces inherit the application configuration from <code>ThemingService</code>; adjusting
translucency updates existing components and overlays. Content-only parts share their containing surface instead of adding another backdrop filter.</p>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { inject } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ThemingService</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/core&#x27;</span>;

<span class="hljs-keyword">private</span> <span class="hljs-keyword">readonly</span> themingService = <span class="hljs-title function_">inject</span>(<span class="hljs-title class_">ThemingService</span>);

<span class="hljs-comment">// Application-wide, including open overlays.</span>
<span class="hljs-variable language_">this</span>.<span class="hljs-property">themingService</span>.<span class="hljs-title function_">setAppearance</span>({ <span class="hljs-attr">translucency</span>: <span class="hljs-number">0.5</span> });
<span class="hljs-comment">// Opaque presentation retains the same layout and component API.</span>
<span class="hljs-variable language_">this</span>.<span class="hljs-property">themingService</span>.<span class="hljs-title function_">setAppearance</span>({ <span class="hljs-attr">reducedTransparency</span>: <span class="hljs-literal">true</span> });</code></pre>
<p><code>BxA11yService</code> controls reduced motion; reduced transparency and forced colors receive opaque presentation. Glass is decorative and does not replace labels,
focus states, or semantic control states.</p>
<p>Rows share their menu&#39;s opaque backing. Hover and press use the themed normal/danger background tokens, keyboard focus retains its outline, and rows do not emit
light onto neighboring rows or surrounding page surfaces. Press deformation still follows application motion preferences.</p>
<h2>Behavior and accessibility</h2>
<p>Use <code>action</code> for activation and <code>disabled</code> for unavailable commands. Valid combinations expose <code>aria-keyshortcuts</code> on the internal button while visual keycaps
are hidden from its accessible name. Disabled items omit shortcut metadata; application handlers must also guard the disabled command. Only supply a binding
hint when the application actually implements it. Existing custom display hints remain supported, but do not generate keyboard metadata.</p>
<p>Browsers, operating systems and assistive technology may reserve key combinations. Keep actions reachable by button, choose suitable bindings for your audience,
and offer application-owned remapping where needed. See
<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-keyshortcuts">MDN&#39;s aria-keyshortcuts guidance</a>.</p>
<h2>Playground</h2>
<p>Open <code>/components/menu-item</code> or <code>/components/menu</code> for working menu-opening combinations and sequences, OS previews, disabled-command guards, an editable field,
and visible action results.</p>
`,"projects/blocks/primitives/components/menu/README.md":`<h1>Menu</h1>
<p>A shared surface for related menu actions.</p>
<h2>Import</h2>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">Menu</span>, <span class="hljs-title class_">MenuItem</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/primitives&#x27;</span>;</code></pre>
<p>Add the standalone component or directive to your component&#39;s <code>imports</code>.</p>
<h2>Usage</h2>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">bx-menu</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">bx-menu-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Duplicate&quot;</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;copy&quot;</span> (<span class="hljs-attr">action</span>)=<span class="hljs-string">&quot;duplicate()&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">bx-menu-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Archive&quot;</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;archive&quot;</span> (<span class="hljs-attr">action</span>)=<span class="hljs-string">&quot;archive()&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">bx-menu</span>&gt;</span></code></pre>
<h2>API</h2>
<p><code>Menu</code> projects its children and provides the menu surface. Use <code>MenuItem</code> for consistent action styling. Place it in <code>bxDropdown</code> for positioned dismissal and
keyboard behavior.</p>
<h2>Keyboard shortcuts</h2>
<p>Use <code>[shortcut]=&quot;[&#39;mod&#39;, &#39;shift&#39;, &#39;v&#39;]&quot;</code> on a <code>MenuItem</code> to display a platform-aware hint: Command on Apple devices, Ctrl elsewhere. Explicit <code>mac</code>, <code>windows</code>,
<code>linux</code>, <code>ios</code> and <code>android</code> overrides are also supported with a required <code>default</code> fallback. Hints do not register actions.</p>
<p>Use <code>BxShortcutService.matches(event, definition)</code> in an application-owned keyboard handler, then call <code>MenuTriggerDirective.open(true)</code> to open a positioned
menu with focus. Use the same definition for the hint and handler, and apply the same disabled guards as pointer activation. The service also formats
aliases/symbols and supplies <code>aria-keyshortcuts</code> names.</p>
<p>Command/Ctrl+K followed by V is a sequence of two combinations, requiring application-owned state and cancellation. An array such as <code>[&#39;mod&#39;, &#39;k&#39;, &#39;v&#39;]</code> is only
a hint with three tokens. See the <a href="components/menu-item">menu item README</a> for complete aliases, fallback rules, the service API and a working handler
example. Both menu playground routes demonstrate a combination and a timed sequence opening an overlay.</p>
<h2>Appearance</h2>
<p>Menus use an opaque themed backing with no container blur, reflections, or live lighting. Colors, spacing, radius, elevation and row interactions still follow
Blocks tokens. Rows provide local hover/pressed fills and visible keyboard focus without emitting light onto neighboring rows or the page. Press feedback and
trigger effects retain their application appearance settings.</p>
<p><code>BxA11yService</code> controls reduced motion. Forced colors preserve native contrast and focus states.</p>
<h2>Behavior and accessibility</h2>
<p>Keep menu labels action-oriented. The container provides one opaque backing for its items. Avoid nested interactive controls inside one item.</p>
<h2>Playground</h2>
<p>Open <code>/components/menu</code> for a working example and its current value or action result.</p>
`,"projects/blocks/primitives/components/page-container/README.md":`<h1>Page container</h1>
<p>A shared page layout with responsive gutters, a section label, title, description, content, and optional footer. The playground uses it on every page except
home. It preserves the existing eyebrow and large heading treatment while giving catalogs, examples, utilities, and configurators the same spacing.</p>
<h2>Import</h2>
<pre class="playground-code-block" tabindex="0" aria-label="typescript code example"><code class="hljs language-typescript"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">PageContainer</span>, <span class="hljs-title class_">PageHeader</span>, <span class="hljs-title class_">PageContent</span>, <span class="hljs-title class_">PageFooter</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/primitives&#x27;</span>;</code></pre>
<h2>Usage</h2>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">bx-page-container</span> <span class="hljs-attr">sectionTitle</span>=<span class="hljs-string">&quot;Workspace&quot;</span> <span class="hljs-attr">pageTitle</span>=<span class="hljs-string">&quot;Projects&quot;</span> <span class="hljs-attr">pageDescription</span>=<span class="hljs-string">&quot;Manage your active projects.&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">bx-page-content</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Your projects appear here.<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">bx-page-content</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">bx-page-footer</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">bx-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;button&quot;</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;createProject()&quot;</span>&gt;</span>Create project<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">bx-page-footer</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">bx-page-container</span>&gt;</span></code></pre>
<p>Content may also be projected directly without <code>PageContent</code>. Supply a <code>bx-page-header</code> when you need actions or other content below the default heading:</p>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">bx-page-container</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">bx-page-header</span> [<span class="hljs-attr">pageTitle</span>]=<span class="hljs-string">&quot;{ key: &#x27;projects.title&#x27; }&quot;</span> [<span class="hljs-attr">pageDescription</span>]=<span class="hljs-string">&quot;{ key: &#x27;projects.description&#x27; }&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">bx-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;button&quot;</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;createProject()&quot;</span>&gt;</span>Create project<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">bx-page-header</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">bx-page-content</span>&gt;</span>Project list<span class="hljs-tag">&lt;/<span class="hljs-name">bx-page-content</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">bx-page-container</span>&gt;</span></code></pre>
<h3>Automatic navigation</h3>
<p><code>provideNavigation()</code> from <code>@filip.mazev/blocks/navigation</code> installs <code>BX_PAGE_NAVIGATION</code>. The container and header consume this optional reactive adapter
without introducing a dependency from primitives to navigation. No router or navigation provider is needed when using explicit titles without breadcrumb links.</p>
<pre class="playground-code-block" tabindex="0" aria-label="typescript code example"><code class="hljs language-typescript"><span class="hljs-keyword">import</span> { defineNavigation, provideNavigation } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/navigation&#x27;</span>;

<span class="hljs-keyword">const</span> navigation = <span class="hljs-title function_">defineNavigation</span>({ <span class="hljs-attr">sections</span>: [{ <span class="hljs-attr">id</span>: <span class="hljs-string">&#x27;workspace&#x27;</span>, <span class="hljs-attr">title</span>: { <span class="hljs-attr">key</span>: <span class="hljs-string">&#x27;workspace.title&#x27;</span> } }] });
<span class="hljs-keyword">const</span> { withInAppNavigation } = navigation;

<span class="hljs-comment">// In application providers: provideRouter(routes), ...provideNavigation(navigation.config)</span>
<span class="hljs-keyword">const</span> routes = [
    <span class="hljs-title function_">withInAppNavigation</span>(
        {
            <span class="hljs-attr">path</span>: <span class="hljs-string">&#x27;projects&#x27;</span>,
            <span class="hljs-attr">children</span>: [
                <span class="hljs-title function_">withInAppNavigation</span>(
                    { <span class="hljs-attr">path</span>: <span class="hljs-string">&#x27;details&#x27;</span>, <span class="hljs-attr">loadComponent</span>: <span class="hljs-function">() =&gt;</span> <span class="hljs-keyword">import</span>(<span class="hljs-string">&#x27;./project-details&#x27;</span>).<span class="hljs-title function_">then</span>(<span class="hljs-function">(<span class="hljs-params"><span class="hljs-variable language_">module</span></span>) =&gt;</span> <span class="hljs-variable language_">module</span>.<span class="hljs-property">ProjectDetails</span>) },
                    { <span class="hljs-attr">label</span>: { <span class="hljs-attr">key</span>: <span class="hljs-string">&#x27;projects.details&#x27;</span> }, <span class="hljs-attr">menu</span>: <span class="hljs-literal">true</span> }
                )
            ]
        },
        { <span class="hljs-attr">label</span>: { <span class="hljs-attr">key</span>: <span class="hljs-string">&#x27;projects.title&#x27;</span> }, <span class="hljs-attr">section</span>: <span class="hljs-string">&#x27;workspace&#x27;</span>, <span class="hljs-attr">menu</span>: <span class="hljs-literal">true</span> }
    )
];</code></pre>
<p>At <code>/projects</code>, the default breadcrumb trail stays hidden. At <code>/projects/details</code>, it appears with a link back to Projects. Nesting counts breadcrumb entries
that participate in navigation, excluding routes without breadcrumb metadata. Set <code>[breadcrumbsAfter]=&quot;2&quot;</code> to wait until two nesting levels. Set it to zero to
show even a root entry, or set <code>[showBreadcrumbs]=&quot;false&quot;</code> to hide the trail. A custom <code>breadcrumbs</code> array follows the same threshold.</p>
<p>The default header resolves <code>sectionTitle</code> from the navigation section and <code>pageTitle</code> from the active breadcrumb label, falling back to its menu label.
Componentless routes and metadata-free child outlets retain the nearest route&#39;s heading. <code>pageDescription</code> is always manually supplied. Explicit empty title
strings suppress their automatic values. A projected <code>PageHeader</code> owns its own inputs; container heading inputs configure only the generated header.</p>
<h2>API</h2>
<table>
<thead>
<tr>
<th>Input</th>
<th>Default</th>
<th>Behavior</th>
</tr>
</thead>
<tbody><tr>
<td><code>size: ContainerSize</code></td>
<td><code>xl</code></td>
<td>Shared Container maximum-width preset: <code>sm</code>, <code>md</code>, <code>lg</code>, <code>xl</code>, or <code>full</code></td>
</tr>
<tr>
<td><code>sectionTitle?: ResolvableText</code></td>
<td>Navigation section</td>
<td>Small label above the title; empty string hides it</td>
</tr>
<tr>
<td><code>pageTitle?: ResolvableText</code></td>
<td>Navigation label</td>
<td>Page heading; empty string hides it</td>
</tr>
<tr>
<td><code>pageDescription?: ResolvableText</code></td>
<td>None</td>
<td>Explicit supporting text</td>
</tr>
<tr>
<td><code>autoResolveTitlesFromNavigation: boolean</code></td>
<td><code>true</code></td>
<td>Resolves undefined titles from navigation; breadcrumbs are independent</td>
</tr>
<tr>
<td><code>breadcrumbs?: readonly IPageBreadcrumb[]</code></td>
<td>Adapter trail</td>
<td>Explicit labels and absolute router URLs; an empty array suppresses automatic entries</td>
</tr>
<tr>
<td><code>breadcrumbsAfter: number</code></td>
<td><code>1</code></td>
<td>Minimum nesting before showing breadcrumbs; negative values clamp to zero</td>
</tr>
<tr>
<td><code>showBreadcrumbs: boolean</code></td>
<td><code>true</code></td>
<td>Enables the trail when its threshold is met</td>
</tr>
<tr>
<td><code>breadcrumbLabel: ResolvableText</code></td>
<td><code>Breadcrumbs</code></td>
<td>Accessible name for the navigation landmark</td>
</tr>
</tbody></table>
<p><code>PageHeader</code> accepts the same title, description, and <code>autoResolveTitlesFromNavigation</code> inputs, plus <code>headingLevel</code> (1\u20136, default 1). It projects additional
header content below the description. <code>PageContent</code> and <code>PageFooter</code> project content without introducing a new surface, landmark, or scrolling region.</p>
<p>Applications with custom navigation can provide <code>BX_PAGE_NAVIGATION</code> as a <code>Signal&lt;IPageNavigation&gt;</code>. Its optional titles and ordered <code>IPageBreadcrumb[]</code> support
<code>ResolvableText</code>; the final breadcrumb represents the current page. All layout text uses the optional <code>BX_I18N</code> adapter and reacts to its version signal.
Without an adapter, plain strings render unchanged and translation keys fall back to their keys.</p>
<h2>Appearance and customization</h2>
<table>
<thead>
<tr>
<th>CSS variable</th>
<th>Default</th>
</tr>
</thead>
<tbody><tr>
<td><code>--bx-container-max-width</code></td>
<td>Shared <code>size</code> preset (<code>xl</code>: 1280px)</td>
</tr>
<tr>
<td><code>--bx-page-padding-inline</code></td>
<td><code>clamp(1rem, 3vw, 2.5rem)</code> from shared spacing tokens</td>
</tr>
<tr>
<td><code>--bx-page-padding-block</code></td>
<td><code>clamp(1rem, 3vw, 2.5rem)</code> from shared spacing tokens</td>
</tr>
<tr>
<td><code>--bx-page-gap</code></td>
<td>Shared spacing 8</td>
</tr>
<tr>
<td><code>--bx-page-section-color</code></td>
<td><code>--bx-text-brand</code></td>
</tr>
<tr>
<td><code>--bx-page-title-color</code></td>
<td><code>--bx-text-heading</code></td>
</tr>
<tr>
<td><code>--bx-page-title-size</code></td>
<td><code>clamp(2rem, 4vw, 3rem)</code></td>
</tr>
<tr>
<td><code>--bx-page-description-width</code></td>
<td><code>48rem</code></td>
</tr>
<tr>
<td><code>--bx-page-description-color</code></td>
<td><code>--bx-text-secondary</code></td>
</tr>
</tbody></table>
<p>Use the shared theme and appearance configuration. Nesting a preview can override the padding variables without changing other page instances.</p>
<h2>Behavior and accessibility</h2>
<p>The layout does not create a second <code>main</code> landmark or a nested scroll area. Place it inside the application&#39;s existing <code>main</code>. The generated header uses one
native <code>h1</code>. For nested examples, project <code>PageHeader</code> with <code>[headingLevel]=&quot;2&quot;</code> or a deeper level.</p>
<p>Breadcrumbs use an ordered list in a named navigation landmark, keyboard-accessible router links, visible focus, and <code>aria-current=&quot;page&quot;</code> on the final label.
Links preserve the router&#39;s normal focus and scrolling policy. Gutters use logical properties; headings and trails wrap for translated content, RTL, narrow
containers, and zoom. Theme changes apply through semantic tokens; no motion is introduced.</p>
<h2>Playground</h2>
<p>Open <code>/components/layout/page-container</code> to change the title, description, breadcrumb depth, root/child trail, automatic navigation, and footer. The footer
action reports its result. <code>/components/layout</code> groups Page container, Content container, Stack layout, Grid layout, and Divider. Existing
<code>/components/container</code>, <code>/components/stack</code>, <code>/components/grid</code>, and <code>/components/divider</code> URLs redirect to their layout destinations.</p>
`,"projects/blocks/primitives/components/page-content/README.md":`<h1>Page content</h1>
<p>The content section of a page. It keeps projected content shrinkable and supports wrapping without adding a scroll surface.</p>
<h2>Import</h2>
<pre class="playground-code-block" tabindex="0" aria-label="typescript code example"><code class="hljs language-typescript"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">PageContent</span>, <span class="hljs-title class_">PageContainer</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/primitives&#x27;</span>;</code></pre>
<h2>Usage</h2>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">bx-page-container</span> <span class="hljs-attr">pageTitle</span>=<span class="hljs-string">&quot;Projects&quot;</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">bx-page-content</span>&gt;</span>Project list<span class="hljs-tag">&lt;/<span class="hljs-name">bx-page-content</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">bx-page-container</span>&gt;</span></code></pre>
<h2>API</h2>
<p>Projects application-owned content without inputs or outputs.</p>
<h2>Appearance and customization</h2>
<p>See the <a href="components/layout/page-container#appearance-and-customization">Page container CSS variables</a>. Additional projected content retains its owning component&#39;s
styles and uses shared theme tokens.</p>
<h2>Behavior and accessibility</h2>
<p>Adds no landmark, focus behavior, or scrolling region. Keep actions keyboard accessible and status announcements application-owned.</p>
<h2>Playground</h2>
<p><code>/components/layout/page-container</code> demonstrates this section with the other page components.</p>
`,"projects/blocks/primitives/components/page-footer/README.md":`<h1>Page footer</h1>
<p>An optional trailing section for page actions or status. The footer remains in the normal page flow.</p>
<h2>Import</h2>
<pre class="playground-code-block" tabindex="0" aria-label="typescript code example"><code class="hljs language-typescript"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">PageFooter</span>, <span class="hljs-title class_">PageContainer</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/primitives&#x27;</span>;</code></pre>
<h2>Usage</h2>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">bx-page-container</span> <span class="hljs-attr">pageTitle</span>=<span class="hljs-string">&quot;Projects&quot;</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">bx-page-content</span>&gt;</span>Project list<span class="hljs-tag">&lt;/<span class="hljs-name">bx-page-content</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">bx-page-footer</span>&gt;</span>Page status<span class="hljs-tag">&lt;/<span class="hljs-name">bx-page-footer</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">bx-page-container</span>&gt;</span></code></pre>
<h2>API</h2>
<p>Projects application-owned content without inputs or outputs.</p>
<h2>Appearance and customization</h2>
<p>See the <a href="components/layout/page-container#appearance-and-customization">Page container CSS variables</a>. Additional projected content retains its owning component&#39;s
styles and uses shared theme tokens.</p>
<h2>Behavior and accessibility</h2>
<p>Adds no landmark, focus behavior, or scrolling region. Keep actions keyboard accessible and status announcements application-owned.</p>
<h2>Playground</h2>
<p><code>/components/layout/page-container</code> demonstrates this section with the other page components.</p>
`,"projects/blocks/primitives/components/page-header/README.md":`<h1>Page header</h1>
<p>The title section of a page, with a translated eyebrow, heading, description, and projected actions.</p>
<h2>Import</h2>
<pre class="playground-code-block" tabindex="0" aria-label="typescript code example"><code class="hljs language-typescript"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">PageHeader</span>, <span class="hljs-title class_">PageContainer</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/primitives&#x27;</span>;</code></pre>
<h2>Usage</h2>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">bx-page-header</span> <span class="hljs-attr">sectionTitle</span>=<span class="hljs-string">&quot;Workspace&quot;</span> <span class="hljs-attr">pageTitle</span>=<span class="hljs-string">&quot;Projects&quot;</span> <span class="hljs-attr">pageDescription</span>=<span class="hljs-string">&quot;Manage your projects.&quot;</span> /&gt;</span></code></pre>
<h2>API</h2>
<p><code>sectionTitle</code>, <code>pageTitle</code>, and <code>pageDescription</code> accept optional <code>ResolvableText</code>. Undefined titles resolve from navigation when
<code>autoResolveTitlesFromNavigation</code> is true (the default). An empty string hides that title. Descriptions are explicit. <code>headingLevel</code> defaults to 1 and clamps to
1\u20136; use 2 for nested previews.</p>
<h2>Appearance and customization</h2>
<p>See the <a href="components/layout/page-container#appearance-and-customization">Page container CSS variables</a>. Additional projected content retains its owning component&#39;s
styles and uses shared theme tokens.</p>
<h2>Behavior and accessibility</h2>
<p>Uses a native heading and reacts to <code>BX_I18N</code> language updates. Plain strings work without an adapter.</p>
<h2>Playground</h2>
<p><code>/components/layout/page-container</code> demonstrates this section with the other page components.</p>
`,"projects/blocks/primitives/components/popover/README.md":`<h1>Popover</h1>
<p>A general content surface and trigger for interactive help, compact forms and contextual details. Uses the existing CDK overlay, theme inheritance and surface
engine.</p>
<h2>Public import</h2>
<pre class="playground-code-block" tabindex="0" aria-label="typescript code example"><code class="hljs language-typescript"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">Popover</span>, <span class="hljs-title class_">PopoverDirective</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/primitives&#x27;</span>;</code></pre>
<h2>Usage</h2>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">button</span> [<span class="hljs-attr">bxPopover</span>]=<span class="hljs-string">&quot;details&quot;</span> #<span class="hljs-attr">popover</span>=<span class="hljs-string">&quot;bxPopover&quot;</span> [<span class="hljs-attr">popoverConfig</span>]=<span class="hljs-string">&quot;{ ariaLabel: &#x27;Project details&#x27;, placement: &#x27;bottom&#x27; }&quot;</span>&gt;</span>Details<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> #<span class="hljs-attr">details</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">bx-popover</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Interactive content belongs here.<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">button</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;popover.close()&quot;</span>&gt;</span>Done<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">bx-popover</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span></code></pre>
<h2>API</h2>
<table>
<thead>
<tr>
<th>API</th>
<th>Default</th>
<th>Behavior</th>
</tr>
</thead>
<tbody><tr>
<td><code>[bxPopover]</code></td>
<td>required</td>
<td>Content <code>TemplateRef&lt;unknown&gt;</code></td>
</tr>
<tr>
<td><code>popoverConfig</code></td>
<td><code>{}</code></td>
<td><code>IPopoverConfig</code> overrides</td>
</tr>
<tr>
<td><code>popoverDisabled</code></td>
<td><code>false</code></td>
<td>Prevents opening and closes an open panel</td>
</tr>
<tr>
<td><code>isOpen()</code></td>
<td><code>false</code></td>
<td>Read-only trigger state</td>
</tr>
<tr>
<td><code>openedChange</code></td>
<td>\u2014</td>
<td>Emits a boolean after opening or closing</td>
</tr>
<tr>
<td><code>open() / close() / toggle()</code></td>
<td>\u2014</td>
<td>Programmatic trigger methods</td>
</tr>
<tr>
<td><code>close(false)</code></td>
<td>\u2014</td>
<td>Dismiss without restoring trigger focus</td>
</tr>
<tr>
<td><code>opaque</code> on <code>bx-popover</code></td>
<td>absent</td>
<td>Local reduced-transparency override</td>
</tr>
</tbody></table>
<p><code>IPopoverConfig</code>: <code>placement</code> (bottom), <code>offset</code> (8px), <code>ariaLabel</code> (Details), <code>autoFocus</code> (true), <code>closeOnOutside</code> (true), <code>closeOnEscape</code> (true),
<code>closeOnFocusOutside</code> (true). Labels accept <code>ResolvableText</code>.</p>
<p>Provide <code>{ provide: BX_POPOVER_DEFAULTS, useValue: { placement: &#39;top&#39; } }</code> for application defaults. Instance properties win, followed by shared defaults and
library defaults.</p>
<h2>Appearance and customization</h2>
<p><code>--bx-popover-width</code>, <code>--bx-popover-max-width</code>, <code>--bx-popover-padding</code>, <code>--bx-popover-background</code>, <code>--bx-popover-color</code>, <code>--bx-popover-border</code>,
<code>--bx-popover-radius</code> and <code>--bx-popover-shadow</code>. Use Blocks buttons and fields for controls inside the content. The material wrapper clips decorative layers; a
separate content region scrolls vertically only when its content exceeds the available viewport.</p>
<h2>Behavior and accessibility</h2>
<p>Use a native button trigger. The directive owns nonmodal dialog semantics and its translated accessible name. Focus moves to the first tabbable control or the
panel; Escape restores trigger focus. Tab exits at the panel boundary. Inside clicks stay open. Surface motion follows BxA11yService. Panels scroll within the
viewport and inherit live theme changes, including modal/top-layer contexts. For a modal interaction use the modal package.</p>
<h2>Playground</h2>
<p><code>/components/popover</code> includes live examples and shared appearance controls.</p>
`,"projects/blocks/primitives/components/progress-bar/README.md":`<h1>Progress bar</h1>
<p>Reusable loading feedback integrated with Blocks themes and accessibility preferences.</p>
<h2>Import</h2>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">ProgressBar</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/primitives&#x27;</span>;</code></pre>
<h2>Usage</h2>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">bx-progress-bar</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Upload progress&quot;</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;progress()&quot;</span> /&gt;</span></code></pre>
<h2>API</h2>
<p><code>mode</code> supports <code>determinate</code>, <code>indeterminate</code>, <code>buffer</code>, and <code>query</code>. <code>value</code> and <code>bufferValue</code> are clamped to 0\u2013100. Unknown progress omits <code>aria-valuenow</code>.
<code>label</code> accepts translations. CSS variables: <code>--bx-progress-color</code>, <code>--bx-progress-track</code>, <code>--bx-progress-height</code>, <code>--bx-progress-radius</code>.</p>
<h2>Appearance and accessibility</h2>
<p>Uses Blocks semantic tokens and the active <code>ThemingService</code> configuration. Customize through documented inputs, templates and CSS variables. Existing components
update when the application theme changes. Keyboard focus, forced colors, reduced transparency and <code>BxA11yService</code> reduced-motion preferences remain supported.</p>
<p>Text inputs accept <code>ResolvableText</code>: plain text or <code>{ key: &#39;translation.key&#39; }</code>. With <code>BX_I18N</code>, text is resolved reactively, including already-mounted controls
when the adapter&#39;s <code>version</code> signal changes. Plain text works without an adapter.</p>
<h2>Playground</h2>
<p>Open <code>/components/progress-bar</code>. Fake asynchronous requests demonstrate progress and loading buttons. Reduced-motion preferences remove continuous animation
while preserving status feedback.</p>
`,"projects/blocks/primitives/components/side-panel-layout/README.md":`<h1>Side panel layout</h1>
<p><code>SidePanelLayout</code> supplies stable bounds for declarative overlay and push panels alongside a page&#39;s content. It keeps containment in CSS and reserves real space
for push panels without reparenting or recreating their content when modes change.</p>
<h2>Import</h2>
<pre class="playground-code-block" tabindex="0" aria-label="typescript code example"><code class="hljs language-typescript"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">SidePanel</span>, <span class="hljs-title class_">SidePanelLayout</span>, <span class="hljs-title class_">SidePanelHeaderDirective</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/primitives&#x27;</span>;</code></pre>
<h2>Usage</h2>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">bx-side-panel-layout</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">bx-side-panel</span> [(<span class="hljs-attr">open</span>)]=<span class="hljs-string">&quot;filtersOpen&quot;</span> <span class="hljs-attr">placement</span>=<span class="hljs-string">&quot;left&quot;</span> [<span class="hljs-attr">breakpoints</span>]=<span class="hljs-string">&quot;{ &#x27;2xl&#x27;: &#x27;push&#x27; }&quot;</span> <span class="hljs-attr">ariaLabel</span>=<span class="hljs-string">&quot;Filters&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">h2</span> <span class="hljs-attr">bxSidePanelHeader</span>&gt;</span>Filters<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>
        <span class="hljs-comment">&lt;!-- Filter controls --&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">bx-side-panel</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">main</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;workspace-content&quot;</span>&gt;</span><span class="hljs-comment">&lt;!-- Page content; give its scroll wrapper overflow: auto. --&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">main</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">bx-side-panel-layout</span>&gt;</span></code></pre>
<p>Give the layout a definite available height or a constrained flex/grid slot. A page with a toolbar can use a column flex shell: the toolbar occupies its natural
height, and the layout fills <code>flex: 1</code> with <code>min-block-size: 0</code>. This keeps panels below the toolbar without numeric offsets or scroll-time rectangle tracking.</p>
<h2>API</h2>
<p>The layout has no configuration inputs. Direct <code>bx-side-panel</code> children occupy their physical left/right slots; all other content is projected into the flexible
middle region. A panel&#39;s <code>layoutMode</code>, <code>breakpoints</code>, <code>width</code>, <code>placement</code>, and <code>open</code> model determine its slot. Default mode is overlay. Breakpoint overrides
use the shared minimum-width <code>BreakpointKey</code> contract and <code>WindowDimensionsService</code>; the highest matching configured breakpoint wins.</p>
<h2>Appearance and customization</h2>
<p>The host is a positioned, isolated flex region with viewport-constrained clipping. Configure surfaces and projected sections on each panel. Size the host with
your existing Blocks layout tokens and keep the middle content&#39;s actual scroll wrapper constrained.</p>
<h2>Behavior and accessibility</h2>
<p>Push mode reserves space, while overlay mode leaves content width unchanged. Both preserve the same panel instance and projected form state. Mode and open
changes coordinate slot-width transitions with panel motion; reduced motion removes those transitions. The layout adds no focus trap, scroll lock, or modal
semantics. Child panels provide the existing top-layer overlay context for dropdowns and tooltips.</p>
<p>An explicit panel <code>container=&quot;viewport&quot;</code> escapes this layout and uses overlay mode. An arbitrary external element can still provide overlay bounds. Push mode
requires this layout host; standalone panels otherwise retain overlay behavior.</p>
<h2>Playground</h2>
<p>Open <code>/components/side-panel</code> to exercise containment and breakpoint behavior, or <code>/icons</code> for coordinated responsive panels and a resizing virtual grid.</p>
`,"projects/blocks/primitives/components/side-panel/README.md":`<h1>Declarative side panel</h1>
<p><code>SidePanel</code> is a persistent nonmodal surface controlled by its parent through <code>model&lt;boolean&gt;()</code>. It supports physical left/right placement, viewport or element
bounds, optional scoped backdrops, and projected header, footer, banner, and body content. It uses no modal service, focus trap, inert page content, or scroll
lock.</p>
<h2>Import</h2>
<pre class="playground-code-block" tabindex="0" aria-label="typescript code example"><code class="hljs language-typescript"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">SidePanel</span>, <span class="hljs-title class_">SidePanelBannerDirective</span>, <span class="hljs-title class_">SidePanelFooterDirective</span>, <span class="hljs-title class_">SidePanelHeaderDirective</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/primitives&#x27;</span>;</code></pre>
<p>Import the component and the slot directives used by the template.</p>
<h2>Usage</h2>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> #<span class="hljs-attr">contentContainer</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;content-region&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">bx-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;button&quot;</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;filtersOpen.set(true)&quot;</span>&gt;</span>Filters<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">bx-side-panel</span>
    [(<span class="hljs-attr">open</span>)]=<span class="hljs-string">&quot;filtersOpen&quot;</span>
    <span class="hljs-attr">placement</span>=<span class="hljs-string">&quot;left&quot;</span>
    [<span class="hljs-attr">container</span>]=<span class="hljs-string">&quot;contentContainer&quot;</span>
    [<span class="hljs-attr">width</span>]=<span class="hljs-string">&quot;400&quot;</span>
    <span class="hljs-attr">ariaLabel</span>=<span class="hljs-string">&quot;Filters&quot;</span>
    [<span class="hljs-attr">headerIcon</span>]=<span class="hljs-string">&quot;{ name: &#x27;sliders-horizontal&#x27;, color: &#x27;accent&#x27;, bgColor: &#x27;auto&#x27; }&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">h2</span> <span class="hljs-attr">bxSidePanelHeader</span>&gt;</span>Filters<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>
    <span class="hljs-comment">&lt;!-- Persistent filter controls --&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">bxSidePanelFooter</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">bx-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;button&quot;</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;filtersOpen.set(false)&quot;</span>&gt;</span>Done<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">bx-side-panel</span>&gt;</span></code></pre>
<p><code>filtersOpen</code> is a writable boolean signal. For stable page containment and responsive push behavior, use <a href="components/side-panel">SidePanelLayout</a>:</p>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">bx-side-panel-layout</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">bx-side-panel</span> [(<span class="hljs-attr">open</span>)]=<span class="hljs-string">&quot;filtersOpen&quot;</span> <span class="hljs-attr">placement</span>=<span class="hljs-string">&quot;left&quot;</span> [<span class="hljs-attr">breakpoints</span>]=<span class="hljs-string">&quot;{ &#x27;2xl&#x27;: &#x27;push&#x27; }&quot;</span> <span class="hljs-attr">ariaLabel</span>=<span class="hljs-string">&quot;Filters&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">h2</span> <span class="hljs-attr">bxSidePanelHeader</span>&gt;</span>Filters<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>
        <span class="hljs-comment">&lt;!-- Filter controls --&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">bx-side-panel</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;page-scroll-content&quot;</span>&gt;</span><span class="hljs-comment">&lt;!-- Adjacent page content --&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">bx-side-panel-layout</span>&gt;</span></code></pre>
<p>Give the layout a constrained height. Its page scroll wrapper can then use <code>overflow: auto</code>. A toolbar stays in its own natural-height flex/grid row above the
layout. The panel and its projected controls remain the same instances when mode changes; push reserves space and overlay leaves the content width unchanged.</p>
<p>The element&#39;s actual visible bounds determine the surface and backdrop area; no sidebar offsets or relative-position styles are required. Omit <code>container</code> for
viewport placement. Ensure an element-bound panel&#39;s container has meaningful height.</p>
<h3>Width resizing</h3>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">bx-side-panel</span> [(<span class="hljs-attr">open</span>)]=<span class="hljs-string">&quot;filtersOpen&quot;</span> <span class="hljs-attr">placement</span>=<span class="hljs-string">&quot;left&quot;</span> [<span class="hljs-attr">width</span>]=<span class="hljs-string">&quot;360&quot;</span> [<span class="hljs-attr">resizable</span>]=<span class="hljs-string">&quot;true&quot;</span> <span class="hljs-attr">ariaLabel</span>=<span class="hljs-string">&quot;Filters&quot;</span>&gt;</span>
    <span class="hljs-comment">&lt;!-- Persistent filter controls --&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">bx-side-panel</span>&gt;</span></code></pre>
<p><code>width</code> sets the initial width directly, including CSS lengths. It is now a model, so <code>[(width)]=&quot;panelWidth&quot;</code> can retain the user&#39;s width in application state;
use a <code>number | string</code> writable signal because user adjustments write numeric CSS pixels. Existing one-way <code>[width]</code> bindings remain supported. Escape
cancellation restores the pre-gesture width, including its original CSS-length representation.</p>
<p>Resizing is opt-in and uses <a href="components/resize-handle">ResizeHandleDirective</a>. A left panel resizes from its right edge; a right panel resizes
from its left edge. Side panels expose width resizing only, even though the underlying directive also supports top/bottom height resizing for other layouts.</p>
<p>The default maximum is 50% of the containing region, retaining an outside backdrop area. The initial width is constrained to that maximum when resizing is
enabled. <code>resizeDisableShrink</code> defaults to true: growth and return to the original rendered width are allowed. Set it to false to enable the default minimum of
30% of the original width. Supply <code>resizeMinWidth</code>/<code>resizeMaxWidth</code> to use explicit pixel limits; available container width always takes precedence. The
reference is the original rendered width at the first resize gesture. A custom initial width remains as simple as <code>[width]=&quot;360&quot;</code>.</p>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">bx-side-panel</span>
    [(<span class="hljs-attr">open</span>)]=<span class="hljs-string">&quot;editorOpen&quot;</span>
    [(<span class="hljs-attr">width</span>)]=<span class="hljs-string">&quot;editorWidth&quot;</span>
    [<span class="hljs-attr">resizable</span>]=<span class="hljs-string">&quot;true&quot;</span>
    [<span class="hljs-attr">resizeDisableShrink</span>]=<span class="hljs-string">&quot;false&quot;</span>
    [<span class="hljs-attr">resizeMinWidth</span>]=<span class="hljs-string">&quot;240&quot;</span>
    [<span class="hljs-attr">resizeMaxWidth</span>]=<span class="hljs-string">&quot;720&quot;</span>
    <span class="hljs-attr">resizeLabel</span>=<span class="hljs-string">&quot;Resize editor width&quot;</span>
    <span class="hljs-attr">ariaLabel</span>=<span class="hljs-string">&quot;Editor&quot;</span>&gt;</span>
    <span class="hljs-comment">&lt;!-- Editor content --&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">bx-side-panel</span>&gt;</span></code></pre>
<h2>API</h2>
<table>
<thead>
<tr>
<th>Input/model</th>
<th>Default</th>
<th>Purpose</th>
</tr>
</thead>
<tbody><tr>
<td><code>open</code> / <code>openChange</code></td>
<td><code>false</code></td>
<td>Parent-controlled model and user dismissal updates</td>
</tr>
<tr>
<td><code>panelId</code></td>
<td>Generated unique ID</td>
<td>Stable surface ID for <code>aria-controls</code></td>
</tr>
<tr>
<td><code>placement</code></td>
<td><code>&#39;right&#39;</code></td>
<td>Physical <code>&#39;left&#39;</code> or <code>&#39;right&#39;</code> edge</td>
</tr>
<tr>
<td><code>headerIcon</code></td>
<td><code>undefined</code></td>
<td>Decorative <code>IIconData</code> beside projected heading; defaults to 24px and supports semantic color/background/stroke</td>
</tr>
<tr>
<td><code>width</code> / <code>widthChange</code></td>
<td><code>400</code></td>
<td>Initial/current pixel or CSS-length width model; user resizing writes numeric pixels</td>
</tr>
<tr>
<td><code>resizable</code></td>
<td><code>false</code></td>
<td>Enable an inner-edge width separator</td>
</tr>
<tr>
<td><code>resizeMinWidth</code></td>
<td>Relative</td>
<td>Optional pixel minimum; defaults to 30% when shrinking is enabled</td>
</tr>
<tr>
<td><code>resizeMaxWidth</code></td>
<td>Relative</td>
<td>Optional pixel maximum; defaults to 50% of container</td>
</tr>
<tr>
<td><code>resizeDisableShrink</code></td>
<td><code>true</code></td>
<td>Prevent shrinking below the original rendered width</td>
</tr>
<tr>
<td><code>resizeLabel</code></td>
<td><code>&#39;Resize panel width&#39;</code></td>
<td>Translatable accessible handle name</td>
</tr>
<tr>
<td><code>resizeIdleDelay</code></td>
<td><code>2000</code></td>
<td>Milliseconds before the idle grip fades; zero keeps it revealed</td>
</tr>
<tr>
<td><code>container</code></td>
<td><code>undefined</code></td>
<td>Nearest SidePanelLayout, or viewport without one; explicit element bounds or &#39;viewport&#39; override this</td>
</tr>
<tr>
<td><code>layoutMode</code></td>
<td><code>&#39;overlay&#39;</code></td>
<td>Base push/overlay mode; push requires SidePanelLayout</td>
</tr>
<tr>
<td><code>breakpoints</code></td>
<td><code>undefined</code></td>
<td>Typed minimum-width modes; the highest matching configured threshold wins</td>
</tr>
<tr>
<td><code>currentLayoutMode()</code></td>
<td>Resolved</td>
<td>Effective mode after viewport resolution and layout availability</td>
</tr>
<tr>
<td><code>backdrop</code></td>
<td><code>false</code></td>
<td>Blocks pointer interaction inside the configured bounds</td>
</tr>
<tr>
<td><code>closeOnBackdrop</code></td>
<td><code>true</code></td>
<td>Backdrop activation requests model closure</td>
</tr>
<tr>
<td><code>closeOnEscape</code></td>
<td><code>true</code></td>
<td>Unhandled Escape closes the open panel, including focus on the surrounding page</td>
</tr>
<tr>
<td><code>showCloseButton</code></td>
<td><code>true</code></td>
<td>Built-in accessible close control</td>
</tr>
<tr>
<td><code>ariaLabel</code></td>
<td><code>&#39;Side panel&#39;</code></td>
<td><code>ResolvableText</code> accessible region name</td>
</tr>
<tr>
<td><code>labelledBy</code></td>
<td><code>undefined</code></td>
<td>Visible label element ID, taking precedence over <code>ariaLabel</code></td>
</tr>
<tr>
<td><code>closeLabel</code></td>
<td><code>&#39;Close panel&#39;</code></td>
<td><code>ResolvableText</code> close-control name</td>
</tr>
<tr>
<td><code>autoFocus</code></td>
<td><code>true</code></td>
<td>Focuses the surface once when opening</td>
</tr>
<tr>
<td><code>restoreFocus</code></td>
<td><code>true</code></td>
<td>Returns focus if it remains inside the closing surface</td>
</tr>
<tr>
<td><code>animationDuration</code></td>
<td><code>175</code></td>
<td>Entrance/exit milliseconds; reduced-motion preferences force zero</td>
</tr>
</tbody></table>
<p>Slots are <code>[bxSidePanelBanner]</code>, <code>[bxSidePanelHeader]</code>, <code>[bxSidePanelFooter]</code>, and unmarked body content. Omitted sections consume no spacing. The body scrolls
independently; header and footer stay reachable. The component has no imperative opening methods or separate lifecycle events; the open model is the state
contract.</p>
<h2>Appearance and customization</h2>
<p>The panel shares surface material, square corners, frame, header/footer, banner, and close-control presentation with Modal Side. Its <code>bxSurface</code> material
follows the existing <code>ThemingService</code>, lighting, transparency, contrast, and theme inheritance helpers. Existing modal lifecycle and presentation APIs remain
available.</p>
<p>The heading row uses the same banner presentation as Modal Side: aligned icon/text, shared title typography, divider spacing, and the compact 32px close button.
Set <code>headerIcon</code> to an <code>IIconData</code> value for the leading icon; <code>name</code>, optional <code>size</code> (24px), <code>color</code>, <code>bgColor</code>, and <code>strokeWidth</code> match modal banner icons.
The icon is decorative; projected text and <code>ariaLabel</code> / <code>labelledBy</code> provide the panel name. Projected headings remain application-owned; reset their margin to
zero and use <code>font: inherit</code> to retain the shared banner typography. The separate <code>bxSidePanelBanner</code> slot remains available above the heading.</p>
<p>Set these variables on the component or a theme scope:</p>
<table>
<thead>
<tr>
<th>Variable</th>
<th>Default</th>
</tr>
</thead>
<tbody><tr>
<td><code>--bx-panel-bg</code></td>
<td><code>--bx-modal-bg</code>, then <code>--bx-bg-surface</code></td>
</tr>
<tr>
<td><code>--bx-panel-text</code></td>
<td><code>--bx-modal-text</code>, then <code>--bx-text-primary</code></td>
</tr>
<tr>
<td><code>--bx-panel-padding</code></td>
<td>Shared spacing 4</td>
</tr>
<tr>
<td><code>--bx-panel-gap</code></td>
<td>Shared spacing 4</td>
</tr>
<tr>
<td><code>--bx-panel-z-index</code></td>
<td>Shared fixed layer, below modal overlays</td>
</tr>
<tr>
<td><code>--bx-panel-resize-gutter</code></td>
<td>Shared spacing 6; space between the panel and adjacent content for the grip</td>
</tr>
<tr>
<td><code>--bx-panel-backdrop</code></td>
<td>Shared backdrop fallback</td>
</tr>
</tbody></table>
<p>Projected content remains under the consumer&#39;s control. Use semantic tokens and Blocks controls; long content can wrap, and the panel shrinks to narrow bounds.</p>
<h2>Behavior and accessibility</h2>
<p>The panel is an accessible complementary region, not a modal dialog. It never sets <code>aria-modal</code>, traps focus, or makes surrounding content inert. An optional
backdrop blocks pointer interaction only inside its bounds; normal keyboard access to the page remains available. Use Modal when the task requires modal
semantics and focus trapping.</p>
<p>Nested Selects, Multiselects, dropdowns, popovers, and tooltips inherit <code>BX_OVERLAY_CONTEXT</code> with top-layer hosting, so floating content is not clipped or
hidden behind the panel. Explicit nested overlay contexts still follow their existing contract. All four surface corners are square, shared with Modal Side.</p>
<p>On opening, focus moves to the surface unless <code>autoFocus</code> is false. On closing, it returns to the opening element only if focus is still inside the panel;
interactions elsewhere retain their focus. The panel observes unhandled Escape for its complete open lifetime, including after icon/content updates and focus
changes. Child overlays can consume Escape first. The built-in close action remains keyboard-accessible on touch-sized surfaces. Supply an accessible
alternative if hiding it.</p>
<p>Content stays mounted and becomes inert and hidden from assistive technology while closed. CSS transitions respond directly to the model, allowing rapid
reversals without pending completion timers. <code>BxA11yService</code> preference changes update mounted motion immediately. Inside SidePanelLayout, CSS containment
anchors the layer without scroll-driven measurements or a body portal. The stable parent bounds stay below any toolbar outside that layout. Arbitrary external
element bounds use synchronous, ancestor-filtered positioning; viewport presentation remains available. Theme/lighting inheritance is applied when hosting
externally. Listeners, observers, inheritance, and externally hosted nodes are disposed on destruction.</p>
<p>Resize handles support mouse, pen, touch, and keyboard arrows with Home/End bounds. Pointer moves are frame-coalesced. Active resizing temporarily disables
panel/slot size motion so the edge tracks the pointer directly; normal entrance/exit motion resumes afterward. The handle has a touch-sized hit area around the
inner edge and remains outside the scrolling body. A spacing gutter holds a compact pill with three dots without overlapping the surface or adjacent content.
Push layout reserves the gutter alongside the panel. The grip fades after two seconds of pointer inactivity, reappears on movement within the panel&#39;s content
region, and uses a neutral full-height line without dots on hover or while dragging. Focus and touch retain a visible affordance; reduced motion removes fades.
Set <code>resizeIdleDelay</code> to configure the delay or zero to keep the idle grip visible. Escape first cancels resizing, then can dismiss the panel on the next
activation.</p>
<p>Text accepts plain strings without an adapter. Optional <code>BX_I18N</code> resolution tracks the adapter&#39;s language revision through computed state.</p>
<h2>Playground</h2>
<p>Open <code>/components/side-panel</code> to change placement, width, containment, and backdrop while open and verify persistent form content. <code>/icons</code> demonstrates
coordinated Filters and Details panels constrained to the main content region.</p>
`,"projects/blocks/primitives/components/skeleton/README.md":`<h1>Skeleton</h1>
<p>Reserves space while content loads, with text, rectangle and circle shapes.</p>
<h2>Public import</h2>
<pre class="playground-code-block" tabindex="0" aria-label="typescript code example"><code class="hljs language-typescript"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">Skeleton</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/primitives&#x27;</span>;</code></pre>
<h2>Usage</h2>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">bx-skeleton</span> [<span class="hljs-attr">lines</span>]=<span class="hljs-string">&quot;3&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">bx-skeleton</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;circle&quot;</span> <span class="hljs-attr">height</span>=<span class="hljs-string">&quot;3rem&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">bx-skeleton</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;rectangle&quot;</span> <span class="hljs-attr">height</span>=<span class="hljs-string">&quot;8rem&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">bx-skeleton</span> [<span class="hljs-attr">decorative</span>]=<span class="hljs-string">&quot;false&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Loading profile&quot;</span> /&gt;</span></code></pre>
<h2>API</h2>
<table>
<thead>
<tr>
<th>Input</th>
<th>Default</th>
<th>Behavior</th>
</tr>
</thead>
<tbody><tr>
<td><code>shape</code></td>
<td><code>text</code></td>
<td><code>SkeletonShape</code>: text, rectangle or circle</td>
</tr>
<tr>
<td><code>lines</code></td>
<td><code>1</code></td>
<td>Text rows, clamped to 1\u2013100</td>
</tr>
<tr>
<td><code>width / height</code></td>
<td>absent</td>
<td>Optional CSS dimensions</td>
</tr>
<tr>
<td><code>animated</code></td>
<td><code>true</code></td>
<td>Enables the pulse when motion preferences permit</td>
</tr>
<tr>
<td><code>decorative</code></td>
<td><code>true</code></td>
<td>Hides repeated placeholders from accessibility APIs</td>
</tr>
<tr>
<td><code>label</code></td>
<td>Loading content</td>
<td>Translatable status name when nondecorative</td>
</tr>
</tbody></table>
<h2>Appearance and customization</h2>
<p><code>--bx-skeleton-background</code>, <code>--bx-skeleton-height</code>, <code>--bx-skeleton-gap</code>, <code>--bx-skeleton-radius</code>, <code>--bx-skeleton-duration</code> and <code>--bx-skeleton-last-line-width</code>.
Defaults use semantic element colors.</p>
<h2>Behavior and accessibility</h2>
<p>Replace skeletons with real content when the application finishes loading. Use one named status for a group of decorative placeholders. BxA11yService changes
stop the pulse immediately, retaining the placeholder. Forced colors use a static system color.</p>
<h2>Playground</h2>
<p><code>/components/skeleton</code> includes live examples and shared appearance controls.</p>
`,"projects/blocks/primitives/components/stack/README.md":`<h1>Stack layout</h1>
<p>A small flex layout for vertical content, action rows and responsive groups.</p>
<h2>Public import</h2>
<pre class="playground-code-block" tabindex="0" aria-label="typescript code example"><code class="hljs language-typescript"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">Stack</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/primitives&#x27;</span>;</code></pre>
<h2>Usage</h2>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">bx-stack</span> <span class="hljs-attr">direction</span>=<span class="hljs-string">&quot;responsive&quot;</span> [<span class="hljs-attr">gap</span>]=<span class="hljs-string">&quot;4&quot;</span> <span class="hljs-attr">align</span>=<span class="hljs-string">&quot;center&quot;</span> <span class="hljs-attr">justify</span>=<span class="hljs-string">&quot;between&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>Project details<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>Updated today<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">bx-stack</span>&gt;</span></code></pre>
<h2>API</h2>
<p><code>direction: StackDirection</code> is vertical (default), horizontal or responsive. Responsive stacks vertically below the shared sm breakpoint. <code>gap: LayoutGap</code>
defaults to 4; supported shared spacing keys are 0, 1, 2, 3, 4, 5, 6, 8, 10 and 12. <code>align: LayoutAlign</code> is start, center, end or stretch (default).
<code>justify: LayoutJustify</code> is start (default), center, end or between. <code>wrap</code> defaults to false; enable it for action rows.</p>
<h2>Appearance and customization</h2>
<p><code>--bx-stack-gap</code> overrides token-based spacing. CSS flex properties remain available for application-specific proportions.</p>
<h2>Behavior and accessibility</h2>
<p>Adds no ARIA role or keyboard behavior. DOM order remains reading and tab order. Use wrapping horizontal stacks for long translated actions; use responsive
direction when content should stack on small screens.</p>
<h2>Playground</h2>
<p><code>/components/layout/stack</code> includes live examples and shared appearance controls.</p>
`,"projects/blocks/primitives/components/tab/README.md":`<h1>Tab</h1>
<p>Declares a labelled panel inside <a href="components/tabs"><code>Tabs</code></a>.</p>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">Tabs</span>, <span class="hljs-title class_">Tab</span>, <span class="hljs-title class_">TabContentDirective</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/primitives&#x27;</span>;</code></pre>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">bx-tabs</span> <span class="hljs-attr">ariaLabel</span>=<span class="hljs-string">&quot;Project details&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">bx-tab</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Overview&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;overview&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> <span class="hljs-attr">bxTabContent</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">app-overview</span> /&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">bx-tab</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">bx-tab</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Activity&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;activity&quot;</span> [<span class="hljs-attr">disabled</span>]=<span class="hljs-string">&quot;loading()&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> <span class="hljs-attr">bxTabContent</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">app-activity</span> /&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">bx-tab</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">bx-tabs</span>&gt;</span></code></pre>
<p><code>label</code> is required and accepts <code>ResolvableText</code>. <code>value</code> identifies selection and must be unique within its group; an omitted value is generated. <code>disabled</code>
removes the tab from selection and arrow-key navigation.</p>
<p><code>color</code> chooses a semantic palette role: <code>primary</code>, <code>accent</code>, <code>success</code>, <code>danger</code>, <code>info</code>, <code>warn</code>, or <code>grayscale</code>. The <code>accent</code> role follows the second tone of
the active palette. <code>textColor</code>, <code>highlightColor</code> and <code>contentColor</code> accept Blocks color tokens for the label, selected highlight/light and panel text. <code>icon</code>
and <code>endIcon</code> add leading and trailing Blocks icons.</p>
<p>Use direct content for simple panels, or <code>ng-template bxTabContent</code> to create the contents only while selected. The Tabs component renders the header and
accessible panel; <code>bx-tab</code> is the projected declaration.</p>
<p>See the Tabs documentation and <code>/components/tabs</code> for appearance, lifecycle, two-way selection and keyboard behavior.</p>
`,"projects/blocks/primitives/components/tabs/README.md":`<h1>Tabs</h1>
<p>Switch between related panels with themed segmented or underline tabs.</p>
<h2>Import</h2>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">Tabs</span>, <span class="hljs-title class_">Tab</span>, <span class="hljs-title class_">TabContentDirective</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/primitives&#x27;</span>;</code></pre>
<p>Add these standalone declarations to the consuming component&#39;s <code>imports</code>.</p>
<h2>Usage</h2>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">bx-tabs</span> <span class="hljs-attr">ariaLabel</span>=<span class="hljs-string">&quot;Project information&quot;</span> [(<span class="hljs-attr">selectedValue</span>)]=<span class="hljs-string">&quot;selectedTab&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">bx-tab</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Documentation&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;documentation&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> <span class="hljs-attr">bxTabContent</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">app-documentation</span> /&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">bx-tab</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">bx-tab</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Code Examples&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;code&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;accent&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> <span class="hljs-attr">bxTabContent</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">app-examples</span> /&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">bx-tab</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">bx-tab</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Unavailable&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;unavailable&quot;</span> [<span class="hljs-attr">disabled</span>]=<span class="hljs-string">&quot;true&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">bx-tabs</span>&gt;</span></code></pre>
<p>Initialize <code>selectedTab</code> to a tab&#39;s value or <code>null</code> to select the first enabled tab. Values must be unique within a group. Omitted values receive generated
identifiers.</p>
<p>Use <code>variant=&quot;underline&quot;</code> for file tabs or a full-width navigation strip. The default <code>segmented</code> variant groups the controls in a compact material.</p>
<h2>API</h2>
<table>
<thead>
<tr>
<th>Declaration</th>
<th>Input or method</th>
<th>Behavior</th>
</tr>
</thead>
<tbody><tr>
<td><code>Tabs</code></td>
<td><code>ariaLabel: ResolvableText</code></td>
<td>Accessible group name; defaults to <code>Tabs</code>.</td>
</tr>
<tr>
<td><code>Tabs</code></td>
<td><code>variant: TabsVariant</code></td>
<td><code>segmented</code> or <code>underline</code>.</td>
</tr>
<tr>
<td><code>Tabs</code></td>
<td><code>selectedValue: string | null</code></td>
<td>Two-way selection model with <code>selectedValueChange</code>.</td>
</tr>
<tr>
<td><code>Tabs</code></td>
<td><code>select(value: string)</code></td>
<td>Selects an enabled tab by value.</td>
</tr>
<tr>
<td><code>Tab</code></td>
<td><code>label: ResolvableText</code></td>
<td>Required visible and accessible label.</td>
</tr>
<tr>
<td><code>Tab</code></td>
<td><code>value: string</code></td>
<td>Unique selection value.</td>
</tr>
<tr>
<td><code>Tab</code></td>
<td><code>disabled: boolean</code></td>
<td>Removes the tab from selection and keyboard navigation.</td>
</tr>
<tr>
<td><code>Tab</code></td>
<td><code>color: TabColor</code></td>
<td><code>primary</code> (default), <code>accent</code>, <code>success</code>, <code>danger</code>, <code>info</code>, <code>warn</code>, or <code>grayscale</code>.</td>
</tr>
<tr>
<td><code>Tab</code></td>
<td><code>textColor: Color</code></td>
<td>Optional theme token for the header label and its icons.</td>
</tr>
<tr>
<td><code>Tab</code></td>
<td><code>highlightColor: Color</code></td>
<td>Overrides the selected tint, border, underline and emitted light. Defaults to the tab&#39;s color.</td>
</tr>
<tr>
<td><code>Tab</code></td>
<td><code>contentColor: Color</code></td>
<td>Optional inherited text color for the panel&#39;s content.</td>
</tr>
<tr>
<td><code>Tab</code></td>
<td><code>icon: IconName</code></td>
<td>Optional leading Blocks icon.</td>
</tr>
<tr>
<td><code>Tab</code></td>
<td><code>endIcon: IconName</code></td>
<td>Optional trailing Blocks icon.</td>
</tr>
<tr>
<td><code>TabContentDirective</code></td>
<td><code>ng-template[bxTabContent]</code></td>
<td>Defers construction until selection and destroys the view when deselected.</td>
</tr>
</tbody></table>
<p>Labels accept strings or <code>{ key: &#39;translation.key&#39; }</code> using <code>BX_I18N</code>. Removing or disabling the selected tab selects the first enabled tab. An empty or fully
disabled group has no selected panel and a <code>null</code> model.</p>
<h2>Per-tab colors and icons</h2>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">bx-tabs</span> <span class="hljs-attr">ariaLabel</span>=<span class="hljs-string">&quot;Workspace&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">bx-tab</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Overview&quot;</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;house&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>Overview content.<span class="hljs-tag">&lt;/<span class="hljs-name">bx-tab</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">bx-tab</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Checks&quot;</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;badge-check&quot;</span> <span class="hljs-attr">endIcon</span>=<span class="hljs-string">&quot;chevron-right&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;success&quot;</span>&gt;</span> All checks passed. <span class="hljs-tag">&lt;/<span class="hljs-name">bx-tab</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">bx-tab</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Activity&quot;</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;activity&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;info&quot;</span> <span class="hljs-attr">textColor</span>=<span class="hljs-string">&quot;text-warn&quot;</span> <span class="hljs-attr">highlightColor</span>=<span class="hljs-string">&quot;text-warn&quot;</span> <span class="hljs-attr">contentColor</span>=<span class="hljs-string">&quot;text-info&quot;</span>&gt;</span> Recent activity. <span class="hljs-tag">&lt;/<span class="hljs-name">bx-tab</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">bx-tabs</span>&gt;</span></code></pre>
<p>Color overrides use the existing Blocks <code>Color</code> tokens, including semantic tokens such as <code>text-success</code> and palette tokens such as <code>purple-500</code>. Tokens follow
the active theme. <code>textColor</code> styles the header in both selected and inactive states; <code>contentColor</code> supplies an inherited panel color without overriding
projected components&#39; own semantic styles. Icons are decorative and inherit the header&#39;s text color. Their leading/trailing placement follows the text
direction.</p>
<h2>Content lifecycle</h2>
<p>Direct content is supported for simple panels:</p>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">bx-tabs</span> <span class="hljs-attr">ariaLabel</span>=<span class="hljs-string">&quot;Project details&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">bx-tab</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Overview&quot;</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Project overview.<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">bx-tab</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">bx-tab</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Activity&quot;</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Recent updates.<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">bx-tab</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">bx-tabs</span>&gt;</span></code></pre>
<p>Angular constructs directly projected components eagerly. Use <code>ng-template bxTabContent</code> for lazy documentation, syntax highlighting or other work that should
run only for the selected panel. Panel-local state is recreated when revisiting a lazy panel; keep persistent state in the consuming component or a service.</p>
<h2>Appearance</h2>
<p>Tabs use Blocks semantic colors, spacing, radius, focus and surface effects. The shared glass header remains transmissive, while the selected tab has a
translucent tint and emits a restrained amount of its highlight color into nearby surfaces. The default highlight follows the primary palette role. Use
<code>color=&quot;accent&quot;</code> for the second tone, such as supporting Code Examples navigation. The initial render uses the same glass styling before the runtime mounts, and
transitions apply to later interactions. Appearance settings and reduced motion follow <code>ThemingService</code> and <code>BxA11yService</code>, like other primitives. Forced
colors use a visible selected outline.</p>
<p><code>--bx-tabs-panel-gap</code> customizes the space below the headers. Panels follow the page&#39;s natural scroll flow by default. For a bounded viewer, set
<code>--bx-tabs-panel-overflow: auto</code> together with <code>--bx-tabs-max-panel-height</code> or a constrained group height to keep headers visible while content scrolls. Let the
panel own scrolling instead of also adding scroll containers to nested code blocks. Header labels scroll horizontally only when they exceed the available width;
the glass decoration sits outside that scroll area.</p>
<h2>Keyboard and accessibility</h2>
<p>Tab enters the selected header; another Tab moves into its panel. Left and Right select and focus the next enabled header, wrapping at the ends and respecting
right-to-left layout. Home and End select the first and last enabled tabs. Native Enter and Space activation also work.</p>
<p>Each header has <code>role=&quot;tab&quot;</code>, roving <code>tabindex</code>, <code>aria-selected</code> and a matching <code>aria-controls</code>. Panels use <code>role=&quot;tabpanel&quot;</code>, a matching <code>aria-labelledby</code>, and
unique generated IDs. Nested groups maintain independent selection and keyboard handling.</p>
<h2>Playground</h2>
<p>Open <code>/components/tabs</code> for enabled and disabled tabs, dynamic selection, lazy content and both appearances. The modal and toast configurators also use Tabs for
Documentation, Code Examples and source files.</p>
`,"projects/blocks/primitives/components/tag/README.md":`<h1>Tag</h1>
<p>Informational labels with semantic colors, tonal/filled/outlined variants, optional icons and counts, disabled presentation, and accessible tooltips. Tags do
not imply a button or selection action.</p>
<h2>Import</h2>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">Tag</span>, <span class="hljs-title class_">ITagConfig</span>, <span class="hljs-title class_">TagColor</span>, <span class="hljs-title class_">TagVariant</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/primitives&#x27;</span>;</code></pre>
<h2>Usage</h2>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">bx-tag</span>
    [<span class="hljs-attr">text</span>]=<span class="hljs-string">&quot;{ key: &#x27;locations.skopje&#x27; }&quot;</span>
    <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;accent&quot;</span>
    <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;tonal&quot;</span>
    <span class="hljs-attr">leadingIcon</span>=<span class="hljs-string">&quot;map-pin&quot;</span>
    <span class="hljs-attr">trailingIcon</span>=<span class="hljs-string">&quot;chevron-right&quot;</span>
    [<span class="hljs-attr">trailingNumber</span>]=<span class="hljs-string">&quot;12&quot;</span>
    [<span class="hljs-attr">tooltip</span>]=<span class="hljs-string">&quot;{ key: &#x27;locations.description&#x27; }&quot;</span> /&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">bx-tag</span> [<span class="hljs-attr">leadingNumber</span>]=<span class="hljs-string">&quot;42&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;info&quot;</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;filled&quot;</span> <span class="hljs-attr">ariaLabel</span>=<span class="hljs-string">&quot;42 locations&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">bx-tag</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;Skopje&quot;</span> /&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">bx-tag</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;+2&quot;</span> <span class="hljs-attr">tooltip</span>=<span class="hljs-string">&quot;Ohrid, Bitola&quot;</span> /&gt;</span></code></pre>
<h2>API</h2>
<p><code>text</code>, <code>tooltip</code>, and <code>ariaLabel</code> accept <code>ResolvableText</code>. <code>color</code> selects primary, accent, success, danger, info, warn or neutral. <code>variant</code> is tonal
(default), filled or outlined. <code>size</code> is small or medium. <code>disabled</code> changes the visual/accessible presentation without inventing an action.</p>
<p><code>leadingIcon</code>, <code>trailingIcon</code>, and <code>iconSize</code> configure decorative icons. <code>leadingNumber</code> and <code>trailingNumber</code> accept numbers, strings such as <code>+2</code>, or null to
hide a count. Omit text for a number-only tag. Numeric values use <code>Intl.NumberFormat</code> with the optional <code>locale</code>; strings retain their prefixes.</p>
<p><code>config</code> accepts reusable <code>ITagConfig</code> appearance, icon, count and tooltip defaults. Direct inputs take precedence. <code>opaque</code> (also in <code>ITagConfig</code>) removes
translucency and backdrop blur when true; false or absent follows application appearance and accessibility preferences. Navigation badges use it to keep their
rows opaque. Consumer CSS variables can override the semantic palette without changing the component.</p>
<p>Without an explicit <code>tooltip</code>, a tag automatically shows its complete label only when its rendered text is truncated. Resizing, content/translation changes, and
loaded fonts update this condition through the shared <a href="components/truncate">TruncateDirective</a>. An explicit tooltip still describes the tag even
when its label fits, including overflow tags listing hidden selections. Set <code>[tooltipOnTruncate]=&quot;false&quot;</code> to retain truncation while supplying custom feedback.
<code>ITagConfig.tooltipOnTruncate</code> provides the reusable default, with the direct input taking precedence. <code>tooltip=&quot;&quot;</code> also suppresses the automatic tooltip. The
public <code>TruncateDirective</code>, <code>TruncatedTextPipe</code> (<code>bxTruncatedText</code>), and <code>truncatedText()</code> helper are available for application-owned text.</p>
<h2>Appearance</h2>
<p>Uses Blocks semantic theme colors and the shared glass surface. Tags inherit application translucency, receive surrounding emitted light, and follow
opaque/reduced-transparency preferences. They have no hover illumination or press effect because they are informational. Tooltip motion follows <code>BxA11yService</code>.</p>
<p>Text tags use small rounded corners. A single number without text or icons uses a circle that grows for longer counts. Override <code>--bx-tag-background</code>,
<code>--bx-tag-color</code>, <code>--bx-tag-border</code>, <code>--bx-tag-radius</code>, <code>--bx-tag-padding</code>, <code>--bx-tag-gap</code>, <code>--bx-tag-font-size</code>, <code>--bx-tag-shadow</code>,
<code>--bx-tag-counter-background</code>, <code>--bx-tag-counter-radius</code>, and <code>--bx-tag-disabled-opacity</code> as needed. <code>--bx-tag-number-size</code> and <code>--bx-tag-number-padding</code>
configure the minimum diameter and horizontal padding of number-only circles; vertical padding is zero so line height does not stretch them into ovals;
<code>--bx-tag-fill-opacity</code> and <code>--bx-tag-outline-opacity</code> tune the variant tints. Forced colors retain a visible boundary.</p>
<h2>Accessibility and translations</h2>
<p>Visible text remains available to assistive technology; decorative icons are hidden. An explicit <code>ariaLabel</code> names the tag group when the visible numbers need
context. Tooltip tags support hover, keyboard focus and touch-and-hold. <code>focusable</code> defaults to true for a tooltip-bearing standalone tag; set it false when a
surrounding interactive control supplies keyboard access to the same description.</p>
<p>Text resolves through <code>BX_I18N</code>, tracks its optional version signal, and falls back to keys without an adapter. Plain text works directly.</p>
<h2>Selected values</h2>
<p>Select and multiselect support <code>selectionDisplay=&quot;tags&quot;</code>. <code>tagConfig</code> sets shared tag appearance, and option <code>tagConfig</code> provides per-value overrides.
<code>visibleTagCount</code> defaults to one and is clamped to at least one. Remaining values become an overflow tag such as <code>+2</code>, with their translated names in its
tooltip. <code>tagOverflowText</code> and <code>overflowTagConfig</code> customize that tag.</p>
<p>The parent combobox exposes the complete selection for keyboard users; embedded tags do not introduce nested tab stops or actions. Multiselect&#39;s
<code>allSelectedText</code> still takes precedence when select-all intent is active.</p>
<h2>Playground</h2>
<p>Open <code>/components/tag</code> for configurable text, colors, variants, icons, both counters, number-only tags, disabled appearance, an English/Spanish/French/German
translation dropdown, and resizable conditional tooltips. <code>/components/truncate</code> demonstrates the shared directive directly. <code>/components/multi-select</code> includes
selected-tag mode, visible-tag limits, and a Skopje +2 style overflow example.</p>
`,"projects/blocks/primitives/components/tooltip/README.md":`<h1>Tooltip</h1>
<p>A short descriptive surface for supplementary help.</p>
<h2>Import</h2>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">Tooltip</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/primitives&#x27;</span>;</code></pre>
<p>Add the standalone component or directive to your component&#39;s <code>imports</code>.</p>
<h2>Usage</h2>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">bx-tooltip</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;Changes are saved automatically.&quot;</span> /&gt;</span></code></pre>
<h2>API</h2>
<p><code>text</code> is required and accepts plain text or a translation key object. For automatic positioning and trigger handling, use <code>TooltipDirective</code> instead.</p>
<h2>Appearance</h2>
<p>Appearance uses Blocks semantic colors, spacing, radius and motion tokens. Glass surfaces inherit the application configuration from <code>ThemingService</code>; adjusting
translucency updates existing components and overlays. Content-only parts share their containing surface instead of adding another backdrop filter.</p>
<p>Tooltips retain their neutral, opaque background while nearby emissive colors add a restrained, directional highlight to the facing border. The arrow shares the
body&#39;s background and samples the lighting on its side of the bubble. Positioned tooltips receive light from their trigger&#39;s context, including inside dialogs,
while remaining transparent to pointer events. The overview&#39;s wake-up hint and Bring home action include explanatory tooltips. The hint fades without changing
the layout and appears only while the orb is asleep in its pod.</p>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { inject } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ThemingService</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/core&#x27;</span>;

<span class="hljs-keyword">private</span> <span class="hljs-keyword">readonly</span> themingService = <span class="hljs-title function_">inject</span>(<span class="hljs-title class_">ThemingService</span>);

<span class="hljs-comment">// Application-wide, including open overlays.</span>
<span class="hljs-variable language_">this</span>.<span class="hljs-property">themingService</span>.<span class="hljs-title function_">setAppearance</span>({ <span class="hljs-attr">translucency</span>: <span class="hljs-number">0.5</span> });
<span class="hljs-comment">// Opaque presentation retains the same layout and component API.</span>
<span class="hljs-variable language_">this</span>.<span class="hljs-property">themingService</span>.<span class="hljs-title function_">setAppearance</span>({ <span class="hljs-attr">reducedTransparency</span>: <span class="hljs-literal">true</span> });</code></pre>
<p><code>BxA11yService</code> controls reduced motion; reduced transparency and forced colors receive opaque presentation. Glass is decorative and does not replace labels,
focus states, or semantic control states.</p>
<h2>Behavior and accessibility</h2>
<p>Do not put essential instructions only in a tooltip. Direct use requires the application to supply positioning, visibility and a relationship to its trigger.
Prefer the directive for interactive pages.</p>
<h2>Playground</h2>
<p>Open <code>/components/tooltip</code> for a working example and its current value or action result.</p>
`,"projects/blocks/primitives/components/virtual-collection/README.md":`<h1>Virtual collection</h1>
<p><code>VirtualCollection&lt;T&gt;</code> renders a bidirectional sliding window of measured rows. Responsive grids and vertical lists retain their scroll extent with spacers
while unmounting distant content. It is separate from scroll-end detection, progressive reveal counts, and asynchronous load-more orchestration.</p>
<h2>Import</h2>
<pre class="playground-code-block" tabindex="0" aria-label="typescript code example"><code class="hljs language-typescript"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">VirtualCollection</span>, <span class="hljs-title class_">VirtualItemDirective</span>, <span class="hljs-keyword">type</span> <span class="hljs-title class_">IVirtualCollectionConfig</span>, <span class="hljs-keyword">type</span> <span class="hljs-title class_">VirtualTrackBy</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/primitives&#x27;</span>;</code></pre>
<p>Import the standalone component and item-template directive.</p>
<h2>Usage</h2>
<pre class="playground-code-block" tabindex="0" aria-label="typescript code example"><code class="hljs language-typescript"><span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> <span class="hljs-attr">itemKey</span>: <span class="hljs-title class_">VirtualTrackBy</span>&lt;<span class="hljs-title class_">Workspace</span>&gt; = <span class="hljs-function">(<span class="hljs-params">item</span>) =&gt;</span> item.<span class="hljs-property">id</span>;
<span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> <span class="hljs-attr">virtualConfig</span>: <span class="hljs-title class_">IVirtualCollectionConfig</span> = {
    <span class="hljs-attr">layout</span>: <span class="hljs-string">&#x27;grid&#x27;</span>,
    <span class="hljs-attr">minColumnWidth</span>: <span class="hljs-string">&#x27;12rem&#x27;</span>,
    <span class="hljs-attr">estimatedRowHeight</span>: <span class="hljs-number">180</span>,
    <span class="hljs-attr">overscan</span>: <span class="hljs-number">800</span>
};</code></pre>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> #<span class="hljs-attr">viewport</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;results-viewport&quot;</span> <span class="hljs-attr">tabindex</span>=<span class="hljs-string">&quot;0&quot;</span> <span class="hljs-attr">role</span>=<span class="hljs-string">&quot;region&quot;</span> <span class="hljs-attr">aria-label</span>=<span class="hljs-string">&quot;Workspaces&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">bx-virtual-collection</span> #<span class="hljs-attr">collection</span> [<span class="hljs-attr">items</span>]=<span class="hljs-string">&quot;items()&quot;</span> [<span class="hljs-attr">trackBy</span>]=<span class="hljs-string">&quot;itemKey&quot;</span> [<span class="hljs-attr">config</span>]=<span class="hljs-string">&quot;virtualConfig&quot;</span> [<span class="hljs-attr">scrollContainer</span>]=<span class="hljs-string">&quot;viewport&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> [<span class="hljs-attr">bxVirtualItem</span>]=<span class="hljs-string">&quot;collection&quot;</span> <span class="hljs-attr">let-item</span> <span class="hljs-attr">let-index</span>=<span class="hljs-string">&quot;index&quot;</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">bx-card</span> [<span class="hljs-attr">title</span>]=<span class="hljs-string">&quot;item.name&quot;</span> [<span class="hljs-attr">surfaceEffects</span>]=<span class="hljs-string">&quot;false&quot;</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">bx-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;button&quot;</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;select(item)&quot;</span>&gt;</span>Open workspace {{ index + 1 }}<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">bx-card</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">bx-virtual-collection</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></code></pre>
<p>Constrain <code>.results-viewport</code> with a height and <code>overflow: auto</code>; set <code>overflow-anchor: none</code> so the collection owns scroll correction. The component can also
observe a scrolling ancestor or the document when <code>scrollContainer</code> is omitted. Use stable unique keys, immutable item arrays, and application-owned selection
and expanded/edit state. An unmounted item&#39;s component-local state is recreated when it returns.</p>
<p>For progressive loading, pass the supplied/revealed item prefix, and put <code>bxInfiniteScroll</code> or <code>bxLoadMore</code> on the actual scroll wrapper. Append data through
the owner. The virtual component never fetches, retries, infers exhaustion, or changes the supplied data. A future table can use list mode with
application-owned row templates, <code>role=&quot;rowgroup&quot;</code>, and <code>itemRole=&quot;row&quot;</code>; table semantics, headers, pagination, and selection remain the owner&#39;s responsibility.
Do not place its div-based rendering inside native elements with restricted children.</p>
<h2>API</h2>
<table>
<thead>
<tr>
<th>Member</th>
<th>Default</th>
<th>Purpose</th>
</tr>
</thead>
<tbody><tr>
<td><code>items</code></td>
<td><code>[]</code></td>
<td>Full supplied/revealed data, including temporarily unmounted items</td>
</tr>
<tr>
<td><code>trackBy</code></td>
<td>Required</td>
<td><code>(item, index) =&gt; string | number</code> stable unique identity</td>
</tr>
<tr>
<td><code>config.layout</code></td>
<td><code>&#39;list&#39;</code></td>
<td><code>&#39;list&#39;</code> or responsive row-based <code>&#39;grid&#39;</code></td>
</tr>
<tr>
<td><code>config.estimatedRowHeight</code></td>
<td><code>128</code></td>
<td>Positive CSS-pixel row-height estimate, excluding the row gap</td>
</tr>
<tr>
<td><code>config.overscan</code></td>
<td><code>800</code></td>
<td>Extra mounted pixels above and below the viewport</td>
</tr>
<tr>
<td><code>config.minColumnWidth</code></td>
<td><code>&#39;7rem&#39;</code></td>
<td>CSS length or pixel number used to resolve grid columns</td>
</tr>
<tr>
<td><code>scrollContainer</code></td>
<td>Discovered</td>
<td>Actual element or document scroll viewport</td>
</tr>
<tr>
<td><code>measurementRevision</code></td>
<td><code>undefined</code></td>
<td>Clear stale height estimates after size, density, or typography changes</td>
</tr>
<tr>
<td><code>itemRole</code></td>
<td><code>&#39;listitem&#39;</code></td>
<td>Accessible role on each item wrapper</td>
</tr>
<tr>
<td><code>renderedRange()</code></td>
<td>Measured</td>
<td>Contiguous <code>{ start, end, columns }</code> range; end is exclusive</td>
</tr>
<tr>
<td><code>renderedItems()</code></td>
<td>Measured</td>
<td>Mounted data, including an independently pinned focused row</td>
</tr>
<tr>
<td><code>scrollToIndex(index, behavior?)</code></td>
<td>Method</td>
<td>Scroll to a supplied item, clamping the index; pre-mount calls are deferred</td>
</tr>
<tr>
<td><code>scrollToItem(key, behavior?)</code></td>
<td>Method</td>
<td>Scroll to an existing supplied key; missing keys leave position unchanged</td>
</tr>
<tr>
<td><code>refreshMeasurements()</code></td>
<td>Method</td>
<td>Imperatively clear heights while retaining the visible anchor</td>
</tr>
</tbody></table>
<p>The typed <code>bxVirtualItem</code> context exposes <code>$implicit</code>, <code>index</code>, and <code>count</code>. Count describes supplied items rather than a complete remote result set.</p>
<h2>Appearance and customization</h2>
<p>The component supplies geometry and semantics; projected content supplies presentation. Use Blocks components and semantic tokens. Set <code>--bx-virtual-row-gap</code>
and <code>--bx-virtual-column-gap</code>; both default to shared spacing 3. <code>minColumnWidth</code> accepts font-relative lengths. Grid columns are measured from CSS, so
constrained containers, push panels, browser zoom, and text scaling participate in the same layout.</p>
<h2>Behavior and accessibility</h2>
<p>Rows use cached measured heights or the configured estimate. A shared <code>ResizeObserver</code> updates mounted rows, and a prefix-sum tree handles height updates and
offset lookups efficiently. Width/column changes and <code>measurementRevision</code> invalidate stale heights. Spacer changes apply scroll correction after rendering so
the first visible stable key remains anchored. Unknown distant heights remain estimates until visited; use a realistic estimate to minimize corrections.</p>
<p>Passive scroll events update the range synchronously, with pixel overscan in both directions. DOM size depends on viewport height, row sizes, columns, and
overscan rather than distance traveled. Far-offscreen collections can render only their placeholder extent. A focused row stays mounted independently without
rendering all rows between it and the viewport. Responsive regrouping restores the focused control within its stable item when available.</p>
<p>Item wrappers expose positions and counts, and interactive projected controls retain native focus and keyboard behavior. Label the actual viewport and provide
visible focus. Reduced-motion preferences override smooth programmatic scrolling. Observers and listeners disconnect on destruction; browser measurements start
after rendering. When <code>ResizeObserver</code> is unavailable, estimates still support windowed rendering, but dynamic height accuracy is limited.</p>
<h2>Playground</h2>
<p>Open <code>/components/virtual-collection</code> for 3,000 variable-height items, list/grid selection, width and density controls, expandable content, mounted counts, and
programmatic scrolling. <code>/icons</code> and <code>/tokens</code> combine this component with progressive local rendering and ordinary search/group controls.</p>
`,"projects/blocks/primitives/directives/context-menu/README.md":`<h1>Context menu</h1>
<p>A menu positioned at a context action\u2019s coordinates.</p>
<h2>Import</h2>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">BxOverlayContextDirective</span>, <span class="hljs-title class_">ContextMenuDirective</span>, <span class="hljs-title class_">Menu</span>, <span class="hljs-title class_">MenuItem</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/primitives&#x27;</span>;</code></pre>
<p>Add the standalone component or directive to your component&#39;s <code>imports</code>.</p>
<h2>Usage</h2>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> [<span class="hljs-attr">bxContextMenu</span>]=<span class="hljs-string">&quot;actions&quot;</span> <span class="hljs-attr">tabindex</span>=<span class="hljs-string">&quot;0&quot;</span>&gt;</span>Right-click or touch and hold here<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> #<span class="hljs-attr">actions</span>
    &gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">bx-menu</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">bx-menu-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Copy&quot;</span> (<span class="hljs-attr">action</span>)=<span class="hljs-string">&quot;copy()&quot;</span> /&gt;</span>&lt;/bx-menu
&gt;<span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span></code></pre>
<h2>API</h2>
<p><code>bxContextMenu</code> requires a TemplateRef. <code>open(event: MouseEvent)</code> positions the menu at the event coordinates.</p>
<p><code>bxContextMenuLongPress</code> defaults to <code>true</code>. Set it to <code>false</code> on targets where native touch selection or another hold gesture should take precedence. Mouse and
keyboard activation remain available.</p>
<h2>Overlay placement</h2>
<p>Menus use the normal application overlay layer by default. To let a menu escape a sticky header or another stacking context, provide a top-layer context on a
wrapper or directly on the trigger:</p>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">header</span> [<span class="hljs-attr">bxOverlayContext</span>]=<span class="hljs-string">&quot;{ useTopLayer: true }&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> [<span class="hljs-attr">bxDropdown</span>]=<span class="hljs-string">&quot;actions&quot;</span>&gt;</span>Actions<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> [<span class="hljs-attr">bxContextMenu</span>]=<span class="hljs-string">&quot;actions&quot;</span>&gt;</span>More actions<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">header</span>&gt;</span></code></pre>
<p>Import <code>BxOverlayContextDirective</code> alongside the menu directive. The context applies only to nested menu triggers; menus elsewhere keep their normal stacking
order. Angular components can also provide <code>BX_OVERLAY_CONTEXT</code> with <code>{ useTopLayer: true }</code> to scope the behavior to their view.</p>
<h2>Appearance</h2>
<p>The standard <code>bx-menu</code> container is opaque and uses Blocks colors, spacing, radius and elevation without container blur or live lighting. Rows use local themed
hover/pressed fills and keyboard focus outlines without casting light outside the panel. Press feedback follows application motion preferences. Custom emitting
controls inside the overlay retain its physical lighting boundary even though the panel inherits incoming lighting from its trigger.</p>
<p>The transparent dismissal backdrop blocks outside interaction without changing the surrounding surfaces&#39; lighting. The visible menu still occludes the content
under its panel; opaque backdrops retain their normal lighting behavior.</p>
<p><code>BxA11yService</code> controls reduced motion; enabling it skips the opening and closing fade.</p>
<h2>Behavior and accessibility</h2>
<p>Touch and hold for 500 ms to open the menu. Moving more than 10 CSS pixels, scrolling, adding another finger, releasing early, or cancelling the pointer cancels
the pending hold. Normal scrolling and pinch gestures are preserved. The release after a successful hold does not activate the target or a menu action, and a
browser-generated context menu does not reopen the menu.</p>
<p>Long press follows touch input on devices with both touch and mouse support. Inputs, text areas, selects, editable content, disabled controls, and existing text
selections keep their native touch behavior. Text selection is not disabled by the directive; dedicated non-selectable action targets can use
<code>user-select: none</code> and <code>-webkit-touch-callout: none</code> in their own styles.</p>
<p>Always offer the same actions through a visible button or menu; a hold gesture is not easily discoverable. A focusable trigger also supports Shift + F10 and the
Context Menu key. The playground includes a visible Open actions button and keyboard equivalent.</p>
<h2>Playground</h2>
<p>Open <code>/components/context-menu</code> for a working example and its current value or action result.</p>
`,"projects/blocks/primitives/directives/dropdown/README.md":`<h1>Dropdown</h1>
<p>A positioned menu that fades in and out without resizing its contents.</p>
<h2>Import</h2>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">BxOverlayContextDirective</span>, <span class="hljs-title class_">DropdownDirective</span>, <span class="hljs-title class_">Menu</span>, <span class="hljs-title class_">MenuItem</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/primitives&#x27;</span>;</code></pre>
<p>Add the standalone component or directive to your component&#39;s <code>imports</code>.</p>
<h2>Usage</h2>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">bx-button</span> [<span class="hljs-attr">bxDropdown</span>]=<span class="hljs-string">&quot;actions&quot;</span> <span class="hljs-attr">bxTransition</span>=<span class="hljs-string">&quot;fade&quot;</span>&gt;</span>Actions<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> #<span class="hljs-attr">actions</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">bx-menu</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">bx-menu-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Save&quot;</span> (<span class="hljs-attr">action</span>)=<span class="hljs-string">&quot;save()&quot;</span> /&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">bx-menu</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span></code></pre>
<h2>API</h2>
<p><code>bxDropdown</code>: required TemplateRef. <code>placement</code>: overlay placement. <code>bxTransition</code>: fade (default) or none; emerge remains a compatibility alias for fade.
Export as <code>bxDropdown</code>; call <code>open()</code>, <code>close()</code>, or <code>toggle()</code>. Read <code>isOpen()</code> and <code>state()</code> for lifecycle.</p>
<h2>Overlay placement</h2>
<p>Menus use the normal application overlay layer by default. To let a menu escape a sticky header or another stacking context, provide a top-layer context on a
wrapper or directly on the trigger:</p>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">header</span> [<span class="hljs-attr">bxOverlayContext</span>]=<span class="hljs-string">&quot;{ useTopLayer: true }&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> [<span class="hljs-attr">bxDropdown</span>]=<span class="hljs-string">&quot;actions&quot;</span>&gt;</span>Actions<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">header</span>&gt;</span></code></pre>
<p>Import <code>BxOverlayContextDirective</code> alongside the menu directive. The context applies only to nested menu triggers; menus elsewhere keep their normal stacking
order. Angular components can also provide <code>BX_OVERLAY_CONTEXT</code> with <code>{ useTopLayer: true }</code> to scope the behavior to their view.</p>
<p>Where supported, native CSS anchors keep ordinary menus attached to their triggers during document and nested scrolling. Top-layer popovers and other browsers
use synchronous measured CDK positioning, including when the trigger is inside a nested scroller.</p>
<h2>Appearance</h2>
<p>The standard <code>bx-menu</code> container is opaque and uses Blocks colors, spacing, radius and elevation without container blur or live lighting. Rows use local themed
hover/pressed fills and focus outlines without casting light onto the page. Press feedback and trigger effects follow application appearance settings.</p>
<p><code>BxA11yService</code> controls reduced motion; enabling it skips the opening and closing fade.</p>
<h2>Behavior and accessibility</h2>
<p>Use a real button trigger. The fade interaction supports trigger arrow keys, menu arrows, Home, End and Escape; focus returns on dismissal. Reduced motion skips
the fade. Content keeps its full dimensions and the overlay retains a solid backing throughout its lifetime.</p>
<h2>Playground</h2>
<p>Open <code>/components/dropdown</code> for a working example and its current value or action result.</p>
`,"projects/blocks/primitives/directives/infinite-scroll/README.md":`<h1>Infinite scroll detection</h1>
<p><code>InfiniteScrollDirective</code> detects the bottom boundary of arbitrary scrollable elements. It emits a guarded event without owning data, requests, pagination,
loading indicators, retry actions, or exhaustion. Use it for bounded local progressive rendering; use Forms&#39; shared load-more orchestration for remote paging.</p>
<h2>Import</h2>
<pre class="playground-code-block" tabindex="0" aria-label="typescript code example"><code class="hljs language-typescript"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">InfiniteScrollDirective</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/primitives&#x27;</span>;</code></pre>
<p>Add the standalone directive to the consuming component&#39;s imports.</p>
<h2>Usage</h2>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>
    <span class="hljs-attr">bxInfiniteScroll</span>
    <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;results&quot;</span>
    [<span class="hljs-attr">infiniteScrollThreshold</span>]=<span class="hljs-string">&quot;128&quot;</span>
    [<span class="hljs-attr">infiniteScrollDisabled</span>]=<span class="hljs-string">&quot;!hasMore()&quot;</span>
    [<span class="hljs-attr">infiniteScrollLoading</span>]=<span class="hljs-string">&quot;loading()&quot;</span>
    [<span class="hljs-attr">infiniteScrollRevision</span>]=<span class="hljs-string">&quot;items()&quot;</span>
    (<span class="hljs-attr">scrollEnd</span>)=<span class="hljs-string">&quot;requestNextPage()&quot;</span>&gt;</span>
    @for (item of items(); track item.id) {
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>{{ item.label }}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    }
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></code></pre>
<p>Give the wrapper a constrained height and <code>overflow: auto</code>. The owner sets loading before starting its promise, appends successful results, and disables the
detector when exhausted. The directive does not assume an HTTP service or cursor format. Pass the new items reference through <code>infiniteScrollRevision</code>, or call
<code>complete()</code> when completion has no loading cycle or revision change.</p>
<p>For content scrolled by an ancestor, bind that element to <code>infiniteScrollContainer</code>. <code>findScrollContainer(element)</code> finds a vertical scrolling ancestor or falls
back to the document scrolling element. The host&#39;s bottom remains the observed boundary, so unrelated content after the host does not delay rendering.</p>
<p>For finite, locally available data, enable <code>infiniteScrollCheckOnRender</code>. Initial rendering, appended content, and resizing then recheck the boundary. Append a
bounded batch on each event and disable when the local dataset is exhausted. This fills an initially short viewport without polling. Leave this option false for
remote data to prevent uncontrolled requests; the <a href="components/load-more">load-more directive</a> provides its reachable fallback and
explicit retry action.</p>
<h2>API</h2>
<table>
<thead>
<tr>
<th>Member</th>
<th>Default</th>
<th>Behavior</th>
</tr>
</thead>
<tbody><tr>
<td><code>infiniteScrollContainer</code></td>
<td>Host</td>
<td>Optional actual scroll viewport, including a document scrolling element</td>
</tr>
<tr>
<td><code>infiniteScrollThreshold</code></td>
<td><code>128</code></td>
<td>Distance from the end in CSS pixels</td>
</tr>
<tr>
<td><code>infiniteScrollDisabled</code></td>
<td><code>false</code></td>
<td>Suppresses events; owner decides exhaustion</td>
</tr>
<tr>
<td><code>infiniteScrollLoading</code></td>
<td><code>false</code></td>
<td>Suppresses events during owner-controlled loading</td>
</tr>
<tr>
<td><code>infiniteScrollRevision</code></td>
<td><code>undefined</code></td>
<td>New items reference or revision acknowledges the previous event</td>
</tr>
<tr>
<td><code>infiniteScrollCheckOnRender</code></td>
<td><code>false</code></td>
<td>Also checks initial/render/content/resize changes; opt in for bounded local data</td>
</tr>
<tr>
<td><code>infiniteScrollEndOffset</code></td>
<td><code>0</code></td>
<td>Excludes an owner-controlled footer height from measurement</td>
</tr>
<tr>
<td><code>overflowing()</code></td>
<td>Measured</td>
<td>Read-only overflow state, independent of event suppression</td>
</tr>
<tr>
<td><code>scrollEnd</code></td>
<td>Event</td>
<td>One boundary event until completion or leaving and reentering the boundary</td>
</tr>
<tr>
<td><code>complete()</code></td>
<td>Method</td>
<td>Acknowledges completion without initiating another event</td>
</tr>
</tbody></table>
<p><code>measureScrollBoundary(content, container?, endOffset?)</code> returns the distance, overflow, and viewport height in <code>IScrollBoundary</code>.
<code>observeScrollBoundary(content, container, onScroll, onResize)</code> installs disposable passive events and geometry observers. Both the directive and Forms&#39;
<code>LoadMoreDirective</code> use these helpers; Select and Multiselect continue sharing the same request guards, retry, loading, and fallback orchestration.</p>
<p><a href="components/virtual-collection">VirtualCollection</a> independently bounds the mounted DOM in both scroll directions. Give it the revealed items
and the actual scroll container; its placeholders preserve the scroll extent observed by this detector. Detection, virtual rendering, and remote orchestration
remain separate contracts.</p>
<h2>Appearance and customization</h2>
<p>The detector creates no DOM and supplies no presentation. Render normal, empty, loading, and error states with Blocks components and semantic tokens in the
owner. Footer offsets allow a separate orchestration layer to exclude its action without tying detection to a particular UI.</p>
<h2>Behavior and accessibility</h2>
<p>Scroll handling and measurements run outside Angular, with frame-coalesced detector events and change detection only when state changes or an event emits.
Observers reconnect for a different container, track appended and removed children, and disconnect on destruction. Browser work starts after rendering, so
server rendering does not access browser observers.</p>
<p>Appending preserves scroll position. Owners should use stable tracking keys, announce relevant asynchronous changes, retain existing items on failure, and
provide keyboard-accessible load/retry actions. The detector never retries errors or infers that the loaded page is the complete remote result set.</p>
<h2>Playground</h2>
<p>Open <code>/components/infinite-scroll</code> or the scrolling example on <code>/utilities</code>. Adjust the batch size and container height to exercise local underfill and overflow
transitions. The asynchronous example demonstrates 800 ms requests, retained results after failure, and explicit retry through success.</p>
`,"projects/blocks/primitives/directives/menu-trigger/README.md":`<h1>Nested menu trigger</h1>
<p><code>MenuTriggerDirective</code> opens a <code>bx-menu</code> template using Blocks&#39; overlay positioning and theme inheritance. Use it for arbitrary-depth opaque submenus; each
descendant receives the containing trigger through <code>menuParent</code>.</p>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">Menu</span>, <span class="hljs-title class_">MenuItem</span>, <span class="hljs-title class_">MenuTriggerDirective</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/primitives&#x27;</span>;</code></pre>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">button</span> [<span class="hljs-attr">bxMenuTrigger</span>]=<span class="hljs-string">&quot;menu&quot;</span> <span class="hljs-attr">menuLabel</span>=<span class="hljs-string">&quot;Projects&quot;</span> #<span class="hljs-attr">projects</span>=<span class="hljs-string">&quot;bxMenuTrigger&quot;</span>&gt;</span>Projects<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> #<span class="hljs-attr">menu</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">bx-menu</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">bx-menu-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Overview&quot;</span> /&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">role</span>=<span class="hljs-string">&quot;menuitem&quot;</span> [<span class="hljs-attr">bxMenuTrigger</span>]=<span class="hljs-string">&quot;children&quot;</span> [<span class="hljs-attr">menuParent</span>]=<span class="hljs-string">&quot;projects&quot;</span> <span class="hljs-attr">menuLabel</span>=<span class="hljs-string">&quot;Design&quot;</span>&gt;</span>Design<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">bx-menu</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> #<span class="hljs-attr">children</span>
    &gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">bx-menu</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">bx-menu-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Tokens&quot;</span> /&gt;</span>&lt;/bx-menu
&gt;<span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span></code></pre>
<p><code>bxMenuTrigger</code> is required. Optional inputs are <code>menuOrigin</code> (the full row when the trigger is a separate disclosure), <code>menuParent</code>, physical <code>menuSide</code>
(<code>right</code> by default), <code>menuHover</code> (true), <code>menuManual</code> (false), <code>menuLabel</code> (trigger label fallback), and <code>menuPinned</code> (false; keeps a search-revealed path open
during pointer movement). <code>menuOpened</code>/<code>menuClosed</code> report transitions. <code>isOpen()</code>, <code>open(focus?, origin?)</code>, <code>close(restoreFocus?)</code> and <code>toggle(event)</code> expose
explicit controls. Selection owners call <code>MenuCascadeService.closeAll()</code> after activating an action; this preserves parent disclosure clicks in recursive menus.</p>
<p>Native trigger semantics supply Enter/Space. Arrow towards the menu and Up/Down open it with focus. Up/Down/Home/End navigate within an open menu;
Escape/opposite arrow dismiss one layer, and Tab is trapped inside its surface. Click outside dismisses the entire path, including search-pinned menus. Hover
close has a short pointer-crossing delay and retains focused descendants. Cascades reuse the shared origin tracker&#39;s native CSS anchoring, refreshing dependent
descendants on geometry changes and using measured positions only as a fallback. Clipped or offscreen origins close their branch. Overlays, traps, listeners,
subscriptions, and timers are cleaned up on destruction. The trigger honors <code>bxOverlayContext</code> for top-layer positioning, as dropdowns and context menus do;
origins inside dialogs and existing top-layer overlays retain that context. Opening another branch closes siblings, and nested menus inherit live theme state.
Surfaces use the ordinary opaque <code>bx-menu</code> appearance, without added motion or glass effects.</p>
<p>The <a href="components/top-nav">top-navigation demo</a> at <code>/components/top-nav</code> demonstrates owner-coordinated navigation panels. Menu
width and scroll constraints belong to the owner. Side navigation browses nested lists inside its own panel.</p>
<p><code>bx-menu</code> accepts <code>--bx-menu-min-width</code> (default <code>12rem</code>). Constrained submenu owners set it to <code>0</code>, use border-box sizing, and reserve their vertical scrollbar
gutter.</p>
<p><code>menuManual: true</code> lets an owner coordinate one overlay for several disclosure controls. Automatic click, pointer, and trigger-key handling and the directive&#39;s
host ARIA attributes are omitted; the owner supplies its visible controls and accessible semantics and calls <code>open()</code>/<code>close()</code>. <code>open(focus?, origin?)</code>
optionally supplies the actual positioning origin for that opening, defaulting to <code>menuOrigin</code> and then the host. Overlay keyboard dismissal, focus trapping,
outside-click handling, theme inheritance, and origin tracking remain shared. Top navigation uses this mode for its shared submenu panel.</p>
<p><code>menuPlacement</code> optionally selects the existing dropdown placement strategy (<code>top</code>, <code>bottom</code>, <code>left</code>, or <code>right</code>). Omitting it retains physical side-aligned
submenu positioning. <code>TopNav</code> uses <code>bottom</code> for its shared panel. The shared tracker, top-layer context, focus handling, outside-click dismissal, and clipping
behavior are unchanged.</p>
<p><code>navigateMenuKey(event, menu, options?)</code> also accepts <code>IMenuKeyboardOptions</code>: vertical Up/Down navigation remains the default; horizontal orientation uses
Left/Right with optional RTL direction and a roving tab stop. This supports the top navigation menubar without introducing a separate keyboard implementation.</p>
<p><code>menuClosing</code> fires before DOM detachment (after the overlay enters its closing path), allowing owners to retain current scroll/focus context. <code>menuClosed</code>
still fires after cleanup.</p>
`,"projects/blocks/primitives/directives/overlay-context/README.md":`<h1>Overlay context</h1>
<p>Choose the overlay-hosting policy inherited by nested dropdowns, popovers, and other context-aware overlays.</p>
<h2>Import</h2>
<pre class="playground-code-block" tabindex="0" aria-label="typescript code example"><code class="hljs language-typescript"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">BxOverlayContextDirective</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/primitives&#x27;</span>;</code></pre>
<p>Add the directive to the consuming standalone component&#39;s imports.</p>
<h2>Usage</h2>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">section</span> [<span class="hljs-attr">bxOverlayContext</span>]=<span class="hljs-string">&quot;{ useTopLayer: true }&quot;</span>&gt;</span>
    <span class="hljs-comment">&lt;!-- Context-aware overlay triggers go here. --&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span></code></pre>
<h2>API</h2>
<p><code>bxOverlayContext</code> accepts <code>IBxOverlayContext</code> and defaults to <code>{}</code>. Its optional <code>useTopLayer</code> property selects browser top-layer hosting when supported by the
owning overlay. Omission leaves the overlay&#39;s default policy in effect. Advanced integrations can inject <code>BX_OVERLAY_CONTEXT</code> to read the nearest context.</p>
<h2>Appearance and customization</h2>
<p>The context controls hosting, not presentation. Configure appearance through the owning overlay&#39;s inputs and shared Blocks theme.</p>
<h2>Behavior and accessibility</h2>
<p>Nested consumers, including tooltips, inherit the nearest provided context. SidePanel provides a top-layer context automatically so floating controls escape its
clipping surface without component-specific z-index overrides. The owning overlay retains responsibility for focus, keyboard dismissal, positioning, and
cleanup.</p>
<h2>Playground</h2>
<p>See <code>/components/dropdown</code> and <code>/components/popover</code> for overlay interactions.</p>
`,"projects/blocks/primitives/directives/popover/README.md":`<h1>Popover trigger</h1>
<p>Import <code>PopoverDirective</code>, <code>Popover</code>, <code>IPopoverConfig</code> and optional <code>BX_POPOVER_DEFAULTS</code> from <code>@filip.mazev/blocks/primitives</code>.</p>
<p>The directive owns positioning, focus, dismissal, dialog semantics and theme inheritance; the component supplies the visual surface. Use a native button trigger
and a named dialog. See the <a href="components/popover">popover component guide</a> for working usage, API defaults, configuration, CSS variables and
accessibility behavior.</p>
<p>Playground: <code>/components/popover</code>.</p>
`,"projects/blocks/primitives/directives/resize-handle/README.md":`<h1>Resize handle</h1>
<p><code>ResizeHandleDirective</code> supplies a reusable, focusable resize separator. It adjusts an application-owned numeric size from pointer dragging or the keyboard,
without positioning elements, applying dimensions to targets, or owning table/list/panel data.</p>
<h2>Import</h2>
<pre class="playground-code-block" tabindex="0" aria-label="typescript code example"><code class="hljs language-typescript"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">ResizeHandleDirective</span>, <span class="hljs-keyword">type</span> <span class="hljs-title class_">IResizeHandleEvent</span>, <span class="hljs-keyword">type</span> <span class="hljs-title class_">ResizeHandleEdge</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/primitives&#x27;</span>;</code></pre>
<p>Add the standalone directive to the consuming component&#39;s imports.</p>
<h2>Usage</h2>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> #<span class="hljs-attr">container</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;workspace&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">section</span> #<span class="hljs-attr">surface</span> [<span class="hljs-attr">style.width.px</span>]=<span class="hljs-string">&quot;width()&quot;</span>&gt;</span>
        <span class="hljs-comment">&lt;!-- Content --&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span>
            <span class="hljs-attr">bxResizeHandle</span>
            <span class="hljs-attr">resizeEdge</span>=<span class="hljs-string">&quot;right&quot;</span>
            <span class="hljs-attr">resizeLabel</span>=<span class="hljs-string">&quot;Resize workspace width&quot;</span>
            [<span class="hljs-attr">resizeTarget</span>]=<span class="hljs-string">&quot;surface&quot;</span>
            [<span class="hljs-attr">resizeContainer</span>]=<span class="hljs-string">&quot;container&quot;</span>
            [(<span class="hljs-attr">resizeValue</span>)]=<span class="hljs-string">&quot;width&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></code></pre>
<p><code>width</code> is a writable numeric signal. Position and style the handle on the appropriate physical edge. A width handle usually spans the surface height; a height
handle spans its width. Use a reachable pointer/touch target and a visible focus indicator. Use <code>resizeEdge=&quot;top&quot;</code> or <code>&quot;bottom&quot;</code> with a height model for rows or
vertically stacked regions; <code>&quot;left&quot;</code> and <code>&quot;right&quot;</code> adjust width for columns or side-by-side regions.</p>
<h2>API</h2>
<table>
<thead>
<tr>
<th>Member</th>
<th>Default</th>
<th>Behavior</th>
</tr>
</thead>
<tbody><tr>
<td><code>resizeValue</code> / <code>resizeValueChange</code></td>
<td><code>0</code></td>
<td>Owner-controlled size in CSS pixels; never writes target styles</td>
</tr>
<tr>
<td><code>resizeEdge</code></td>
<td><code>&#39;right&#39;</code></td>
<td>Physical left/right width edge or top/bottom height edge</td>
</tr>
<tr>
<td><code>resizeTarget</code></td>
<td><code>undefined</code></td>
<td>Optional element providing the actual rendered size at gesture start</td>
</tr>
<tr>
<td><code>resizeContainer</code></td>
<td>Target parent, then handle parent</td>
<td>Available containing width/height for bounds</td>
</tr>
<tr>
<td><code>resizeActivityContainer</code></td>
<td>Bounds container</td>
<td>Optional pointer-activity region, independent of portal geometry</td>
</tr>
<tr>
<td><code>resizeMinSize</code></td>
<td>30% of original</td>
<td>Optional explicit pixel minimum; shrink prevention takes precedence</td>
</tr>
<tr>
<td><code>resizeMaxSize</code></td>
<td>50% of container</td>
<td>Optional explicit pixel maximum; never exceeds available container size</td>
</tr>
<tr>
<td><code>resizeInitialSize</code></td>
<td>First gesture&#39;s rendered size</td>
<td>Optional explicit reference for relative minimums and shrink prevention</td>
</tr>
<tr>
<td><code>resizeDisableShrink</code></td>
<td><code>true</code></td>
<td>Prevent sizes below the original; enlarged sizes can return to the original</td>
</tr>
<tr>
<td><code>resizeDisabled</code></td>
<td><code>false</code></td>
<td>Prevent interaction and cancel an active gesture</td>
</tr>
<tr>
<td><code>resizeLabel</code></td>
<td><code>&#39;Resize&#39;</code></td>
<td>Accessible <code>ResolvableText</code> name, resolved reactively through optional <code>BX_I18N</code></td>
</tr>
<tr>
<td><code>resizeControls</code></td>
<td>Target ID when available</td>
<td>Controlled element&#39;s ID for <code>aria-controls</code></td>
</tr>
<tr>
<td><code>resizeStep</code></td>
<td><code>10</code></td>
<td>Keyboard increment in CSS pixels; Shift multiplies it by five</td>
</tr>
<tr>
<td><code>resizeIdleDelay</code></td>
<td><code>2000</code></td>
<td>Milliseconds before the idle grip fades; zero keeps it revealed</td>
</tr>
<tr>
<td><code>indicatorVisible()</code></td>
<td>Computed</td>
<td>Recent container pointer activity or an active gesture; exposed as <code>.bx-resize-visible</code></td>
</tr>
<tr>
<td><code>resizing()</code></td>
<td><code>false</code></td>
<td>Read-only pointer/keyboard gesture state for suspending owner transitions</td>
</tr>
<tr>
<td><code>minSize()</code> / <code>maxSize()</code></td>
<td>Computed</td>
<td>Effective pixel bounds, including available container size</td>
</tr>
<tr>
<td><code>resizeStart</code> / <code>resizeEnd</code></td>
<td>Events</td>
<td><code>IResizeHandleEvent</code>: current/start size, source, and cancellation state</td>
</tr>
</tbody></table>
<p>The reference size is captured once at the first gesture unless <code>resizeInitialSize</code> is supplied. Changing between width and height axes resets the implicit
reference. Width/height are measured from the selected physical axis; the owner can set different explicit limits when changing axes.</p>
<p>By default shrinking below the original is disabled, so the effective minimum is the original size. To permit shrinking to the default 30% floor, set
<code>[resizeDisableShrink]=&quot;false&quot;</code>. Explicit minimum/maximum values replace the relative defaults. A smaller available container always wins over conflicting
minimum constraints. Container resizing updates bounds through <code>ResizeObserver</code>; the directive constrains emitted values rather than changing application-owned
sizes during unrelated layout changes.</p>
<h2>Appearance and customization</h2>
<p>The directive supplies separator semantics, cursor, pointer capture, and touch/selection behavior. It creates no markup or surface. Style its host using Blocks
semantic tokens; <code>.bx-resizing</code> marks active gestures. Layout owners should suspend width/height transitions while <code>resizing()</code> is true. The directive never
introduces a theme, fetches data, or manipulates table internals.</p>
<p>For the shared presentation used by SidePanel and the standalone demo, import <code>core/styles/helpers</code> and include <code>resize-grip</code> on the positioned handle. It uses
a compact 8 \xD7 24px pill with three dots. Hovering or dragging replaces the dots with a 4px rail running along the resized edge, inset by shared spacing 2 at
both ends so its pill-shaped caps remain visible. It uses the same background color as the dot grip. Top/bottom handles rotate the grip and run horizontally.
Keep the host&#39;s hit area at least 24px; the visual grip does not determine pointer target size.</p>
<p>The idle grip fades after <code>resizeIdleDelay</code> milliseconds without pointer activity in <code>resizeActivityContainer</code> (or the bounds container). Movement reveals it
again. Hover, focus, and active resizing retain a visible edge. Coarse-pointer/touch and forced-color modes keep a discovery grip visible. <code>BxA11yService</code> and
the system reduced-motion preference suppress fading. Activity listeners run outside Angular and timers/listeners are released when disabled, reconnected, or
destroyed.</p>
<p>Customize <code>--bx-resize-rail-color</code>, <code>--bx-resize-grip-background</code>, <code>--bx-resize-grip-color</code>, <code>--bx-resize-grip-border</code>, and <code>--bx-resize-grip-duration</code> through
the shared semantic theme.</p>
<h2>Behavior and accessibility</h2>
<p>The separator exposes orientation, current value, bounds, accessible name, and controlled surface. Left/right width handles are vertical separators; top/bottom
height handles are horizontal separators. Native pointer events support mouse, pen, and touch. Pointer moves are frame-coalesced, with the final position
committed before completion. Pointer capture/document listeners retain the gesture outside the original hit area. Selection and cursor styles are restored on
completion, cancellation, disabling, loss of capture/window focus, and destruction.</p>
<p>Arrow keys move the selected physical edge by <code>resizeStep</code>; Shift uses five times that step. Home and End select the effective minimum/maximum. Keyboard
gestures end on key release or blur. Escape cancels the current gesture and restores its starting size before any surrounding overlay handles Escape. Destroyed
handles release listeners and styles without emitting late events. Browser geometry starts after rendering, keeping server rendering safe.</p>
<h2>Playground</h2>
<p>Open <code>/components/resize-handle</code> for all four edges, default relative bounds, explicit pixel limits, shrink prevention, keyboard resizing, and event feedback.
<code>/components/side-panel</code> demonstrates width-model integration. <code>/icons</code> enables resizing only on Filters.</p>
`,"projects/blocks/primitives/directives/side-panel-banner/README.md":`<h1>Side panel banner slot</h1>
<p>Projects persistent banner content into <a href="components/side-panel">SidePanel</a>.</p>
<h2>Import</h2>
<pre class="playground-code-block" tabindex="0" aria-label="typescript code example"><code class="hljs language-typescript"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">SidePanelBannerDirective</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/primitives&#x27;</span>;</code></pre>
<p>Import the standalone slot directive together with <code>SidePanel</code>.</p>
<h2>Usage</h2>
<p>Apply <code>bxSidePanelBanner</code> to projected content inside <code>bx-side-panel</code>.</p>
<h2>API</h2>
<p>The marker has no inputs or outputs. Its presence controls whether the owning panel reserves section space.</p>
<h2>Appearance and customization</h2>
<p>Use the owning panel&#39;s CSS variables and Blocks semantic tokens.</p>
<h2>Behavior and accessibility</h2>
<p>Content stays mounted when closed. Include a meaningful heading or keyboard-accessible actions as appropriate.</p>
<h2>Playground</h2>
<p>Open <code>/components/side-panel</code>.</p>
`,"projects/blocks/primitives/directives/side-panel-footer/README.md":`<h1>Side panel footer slot</h1>
<p>Projects persistent footer content into <a href="components/side-panel">SidePanel</a>.</p>
<h2>Import</h2>
<pre class="playground-code-block" tabindex="0" aria-label="typescript code example"><code class="hljs language-typescript"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">SidePanelFooterDirective</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/primitives&#x27;</span>;</code></pre>
<p>Import the standalone slot directive together with <code>SidePanel</code>.</p>
<h2>Usage</h2>
<p>Apply <code>bxSidePanelFooter</code> to projected content inside <code>bx-side-panel</code>.</p>
<h2>API</h2>
<p>The marker has no inputs or outputs. Its presence controls whether the owning panel reserves section space.</p>
<h2>Appearance and customization</h2>
<p>Use the owning panel&#39;s CSS variables and Blocks semantic tokens.</p>
<h2>Behavior and accessibility</h2>
<p>Content stays mounted when closed. Include a meaningful heading or keyboard-accessible actions as appropriate.</p>
<h2>Playground</h2>
<p>Open <code>/components/side-panel</code>.</p>
`,"projects/blocks/primitives/directives/side-panel-header/README.md":`<h1>Side panel header slot</h1>
<p>Projects persistent header content into <a href="components/side-panel">SidePanel</a>.</p>
<h2>Import</h2>
<pre class="playground-code-block" tabindex="0" aria-label="typescript code example"><code class="hljs language-typescript"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">SidePanelHeaderDirective</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/primitives&#x27;</span>;</code></pre>
<p>Import the standalone slot directive together with <code>SidePanel</code>.</p>
<h2>Usage</h2>
<p>Apply <code>bxSidePanelHeader</code> to projected content inside <code>bx-side-panel</code>.</p>
<h2>API</h2>
<p>The marker has no inputs or outputs. Its presence controls whether the owning panel reserves section space.</p>
<h2>Appearance and customization</h2>
<p>The owning panel uses the shared modal-banner title and close-control styling. Reset a projected heading&#39;s margin to zero and use <code>font: inherit</code> for the shared
title typography. Set the panel&#39;s optional <code>headerIcon: IIconData</code> for a leading icon with configurable size, semantic color, background, and stroke.</p>
<h2>Behavior and accessibility</h2>
<p>Content stays mounted when closed. Include a meaningful heading or keyboard-accessible actions as appropriate.</p>
<h2>Playground</h2>
<p>Open <code>/components/side-panel</code>.</p>
`,"projects/blocks/primitives/directives/tab-content/README.md":`<h1>Lazy tab content</h1>
<p>Declare a tab panel as a template so its contents are instantiated only while that tab is selected.</p>
<h2>Import</h2>
<pre class="playground-code-block" tabindex="0" aria-label="typescript code example"><code class="hljs language-typescript"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">Tab</span>, <span class="hljs-title class_">TabContentDirective</span>, <span class="hljs-title class_">Tabs</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/primitives&#x27;</span>;</code></pre>
<p>Add these declarations to the consuming standalone component&#39;s imports.</p>
<h2>Usage</h2>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">bx-tabs</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">bx-tab</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Summary&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;summary&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> <span class="hljs-attr">bxTabContent</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Summary content is created when this tab is active.<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">bx-tab</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">bx-tab</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Details&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;details&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> <span class="hljs-attr">bxTabContent</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Details content is created when this tab is active.<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">bx-tab</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">bx-tabs</span>&gt;</span></code></pre>
<h2>API</h2>
<p><code>TabContentDirective</code> selects <code>ng-template[bxTabContent]</code>. Its readonly <code>templateRef</code> exposes the captured <code>TemplateRef&lt;unknown&gt;</code> to the owning <code>Tab</code>.</p>
<h2>Appearance and customization</h2>
<p>Style the projected content normally; the directive adds no wrapper or visual treatment. Configure the tab strip through <code>Tabs</code> and <code>Tab</code>.</p>
<h2>Behavior and accessibility</h2>
<p>Switching tabs destroys the inactive template&#39;s view. Keep state outside that view when it must survive selection changes. <code>Tabs</code> supplies panel relationships
and keyboard navigation; see the <a href="components/tabs">tabs guide</a>.</p>
<h2>Playground</h2>
<p>Visit <code>/components/tabs</code>.</p>
`,"projects/blocks/primitives/directives/tooltip/README.md":`<h1>Tooltip trigger</h1>
<p>Connects a help surface to a trigger using the overlay positioning system.</p>
<h2>Import</h2>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">TooltipDirective</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/primitives&#x27;</span>;</code></pre>
<p>Add the standalone component or directive to your component&#39;s <code>imports</code>.</p>
<h2>Usage</h2>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">bx-button</span> <span class="hljs-attr">bxTooltip</span>=<span class="hljs-string">&quot;Saves this project&quot;</span> <span class="hljs-attr">placement</span>=<span class="hljs-string">&quot;top&quot;</span>&gt;</span>Save<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span></code></pre>
<h2>API</h2>
<p><code>bxTooltip</code>: required text or translation key. <code>placement</code>: top, bottom, left, right, and supported aligned placements. <code>show()</code> and <code>hide()</code> expose explicit
lifecycle control.</p>
<p>Changing the text updates an open tooltip. Empty text dismisses it; restoring text while hovered or keyboard-focused reveals it again. This supports labels that
only need a tooltip while truncated.</p>
<p>Use the shared <a href="components/truncate">TruncateDirective</a> for ellipsis and reactive truncation detection instead of duplicating element-size observers. Pass
<code>resolvedText | bxTruncatedText: overflow.truncated()</code> to <code>bxTooltip</code> using the public <code>TruncatedTextPipe</code>; the owner supplies an appropriate focus target and
visible focus styling.</p>
<p><code>bxTooltipHover</code> defaults to <code>true</code>. Set it to <code>false</code> to keep the keyboard description while nested content supplies its own pointer tooltip, such as an
overflow tag within a select trigger.</p>
<p><code>bxTooltipTouch</code> defaults to <code>&#39;none&#39;</code>: normal touch taps activate the control without showing its tooltip. Set it to <code>&#39;longpress&#39;</code> for an optional
touch-and-hold hint, or <code>&#39;tap&#39;</code> on a dedicated information button that has no other action.</p>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;button&quot;</span> <span class="hljs-attr">bxTooltip</span>=<span class="hljs-string">&quot;Appearance settings apply to all components&quot;</span> <span class="hljs-attr">bxTooltipTouch</span>=<span class="hljs-string">&quot;tap&quot;</span> <span class="hljs-attr">aria-label</span>=<span class="hljs-string">&quot;More information&quot;</span>&gt;</span>\u24D8<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;button&quot;</span> <span class="hljs-attr">bxTooltip</span>=<span class="hljs-string">&quot;Optional extra context&quot;</span> <span class="hljs-attr">bxTooltipTouch</span>=<span class="hljs-string">&quot;longpress&quot;</span>&gt;</span>Hold for a hint<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span></code></pre>
<h2>Appearance</h2>
<p>Appearance uses Blocks semantic colors, spacing, radius and motion tokens. Glass surfaces inherit the application configuration from <code>ThemingService</code>; adjusting
translucency updates existing components and overlays. Content-only parts share their containing surface instead of adding another backdrop filter.</p>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { inject } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ThemingService</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/core&#x27;</span>;

<span class="hljs-keyword">private</span> <span class="hljs-keyword">readonly</span> themingService = <span class="hljs-title function_">inject</span>(<span class="hljs-title class_">ThemingService</span>);

<span class="hljs-comment">// Application-wide, including open overlays.</span>
<span class="hljs-variable language_">this</span>.<span class="hljs-property">themingService</span>.<span class="hljs-title function_">setAppearance</span>({ <span class="hljs-attr">translucency</span>: <span class="hljs-number">0.5</span> });
<span class="hljs-comment">// Opaque presentation retains the same layout and component API.</span>
<span class="hljs-variable language_">this</span>.<span class="hljs-property">themingService</span>.<span class="hljs-title function_">setAppearance</span>({ <span class="hljs-attr">reducedTransparency</span>: <span class="hljs-literal">true</span> });</code></pre>
<p><code>BxA11yService</code> controls reduced motion; reduced transparency and forced colors receive opaque presentation. Glass is decorative and does not replace labels,
focus states, or semantic control states.</p>
<h2>Behavior and accessibility</h2>
<p>Keep trigger text meaningful without its tooltip. Use short, non-interactive text; put interactive help in a menu or dialog.</p>
<p>Tooltips open on mouse hover and keyboard focus. Touch focus and compatibility mouse events do not show ordinary tooltips. Screen-reader descriptions remain
available while the visual tooltip is hidden, and existing <code>aria-describedby</code> references are preserved. Supply an accessible label independently for icon-only
controls.</p>
<p>Optional long press opens after 500 ms. Moving more than 10 CSS pixels, scrolling, another finger, cancellation, or releasing early cancels it. Releasing after
a successful hold does not click the control; the hint dismisses after 1.5 seconds, or on another press or scrolling. Editable controls and existing text
selections keep their native behavior. For dedicated non-selectable hold targets, apply <code>user-select: none</code> and <code>-webkit-touch-callout: none</code> in the target&#39;s
styles.</p>
<p>Long-press hints yield to a <code>bxContextMenu</code> directive on the trigger or an ancestor. Dedicated tap help remains available. Avoid assigning multiple hold
gestures to one target.</p>
<p>Tap mode is intended for dedicated help buttons, including the built-in form-field information buttons. Tap again, tap elsewhere, scroll, or press Escape to
dismiss the help. Use a separate popover or dialog for interactive or essential explanations rather than hiding them in a tooltip.</p>
<h2>Playground</h2>
<p>Open <code>/components/tooltip-directive</code> for a working example and its current value or action result.</p>
`,"projects/blocks/primitives/directives/truncate/README.md":`<h1>Truncated text</h1>
<p>Shared single-line ellipsis styling, reactive overflow detection, and conditional text selection. <code>TruncateDirective</code> measures the rendered element.
<code>TruncatedTextPipe</code> and <code>truncatedText()</code> use that measured state for tooltips or application-owned feedback. The pure pipe does not poll the DOM or own
observers.</p>
<h2>Import</h2>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">TruncateDirective</span>, <span class="hljs-title class_">TruncatedTextPipe</span>, <span class="hljs-title class_">TooltipDirective</span>, truncatedText } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/primitives&#x27;</span>;</code></pre>
<p>Add the standalone directive, pipe, and tooltip directive to the component&#39;s <code>imports</code> when composing a conditional tooltip. Include Blocks&#39; established
<code>core/styles/index</code> global entry once; it supplies the shared <code>.bx-truncate</code> utility used by the directive.</p>
<h2>Usage</h2>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;label-container&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span>
        <span class="hljs-attr">bxTruncate</span>
        #<span class="hljs-attr">overflow</span>=<span class="hljs-string">&quot;bxTruncate&quot;</span>
        [<span class="hljs-attr">bxTooltip</span>]=<span class="hljs-string">&quot;label() | bxTruncatedText: overflow.truncated()&quot;</span>
        [<span class="hljs-attr">attr.tabindex</span>]=<span class="hljs-string">&quot;overflow.truncated() ? 0 : null&quot;</span>
        <span class="hljs-attr">bxTooltipTouch</span>=<span class="hljs-string">&quot;longpress&quot;</span>
        <span class="hljs-attr">placement</span>=<span class="hljs-string">&quot;top&quot;</span>
        &gt;</span>{{ label() }}&lt;/span
    &gt;
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></code></pre>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { signal } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;

<span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> label = <span class="hljs-title function_">signal</span>(<span class="hljs-string">&#x27;A long location name that may not fit&#x27;</span>);</code></pre>
<p>Constrain the available width so overflow can occur:</p>
<pre class="playground-code-block" tabindex="0" aria-label="scss code example"><code class="hljs language-scss"><span class="hljs-selector-class">.label-container</span> {
    <span class="hljs-attribute">inline-size</span>: <span class="hljs-number">14rem</span>;
    <span class="hljs-attribute">max-inline-size</span>: <span class="hljs-number">100%</span>;
    <span class="hljs-attribute">min-inline-size</span>: <span class="hljs-number">0</span>;
}</code></pre>
<h2>API</h2>
<table>
<thead>
<tr>
<th>API</th>
<th>Default</th>
<th>Purpose</th>
</tr>
</thead>
<tbody><tr>
<td><code>[bxTruncate]</code></td>
<td><code>true</code></td>
<td>Enables block display and the shared ellipsis utility. False removes the directive&#39;s styling/class and reports no truncation.</td>
</tr>
<tr>
<td><code>#overflow=&quot;bxTruncate&quot;</code></td>
<td>\u2014</td>
<td>Exports the directive for template access.</td>
</tr>
<tr>
<td><code>truncated()</code></td>
<td><code>false</code></td>
<td>Readonly signal indicating overflow of the rendered content box. Remains false during server rendering.</td>
</tr>
<tr>
<td><code>text()</code></td>
<td><code>&#39;&#39;</code></td>
<td>Readonly signal with current DOM text or a native input&#39;s value/placeholder, refreshed after rendering. Useful for projected content.</td>
</tr>
<tr>
<td><code>truncatedChange</code></td>
<td>\u2014</td>
<td>Boolean event emitted when the measured state changes.</td>
</tr>
<tr>
<td><code>refresh()</code></td>
<td>\u2014</td>
<td>Immediately rechecks after an application-owned style or layout change outside normal Angular rendering. Safe before rendering or after destruction.</td>
</tr>
</tbody></table>
<h3>Public pipe and helper</h3>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-comment">&lt;!-- Empty text disables the existing tooltip when content fits or the feature is off. --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">bxTruncate</span> #<span class="hljs-attr">overflow</span>=<span class="hljs-string">&quot;bxTruncate&quot;</span> [<span class="hljs-attr">bxTooltip</span>]=<span class="hljs-string">&quot;label() | bxTruncatedText: overflow.truncated(): automaticTooltips()&quot;</span>&gt;</span>{{ label() }}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span></code></pre>
<p><code>bxTruncatedText</code> accepts text, the measured boolean, and an optional enabled boolean (default true). It returns the original string or translation-key object
when both booleans are true, otherwise an empty string. Null and undefined text become empty strings. It preserves <code>ResolvableText</code> for the existing translation
adapter.</p>
<p>The exported <code>truncatedText(text, truncated, enabled = true)</code> helper provides the same behavior in TypeScript. Read the directive signals directly when custom
behavior is more useful:</p>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { computed, signal, viewChild } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">TruncateDirective</span>, truncatedText } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/primitives&#x27;</span>;

<span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> overflow = <span class="hljs-title function_">viewChild</span>(<span class="hljs-title class_">TruncateDirective</span>);
<span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> label = <span class="hljs-title function_">signal</span>(<span class="hljs-string">&#x27;A long label&#x27;</span>);
<span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> automaticTooltips = <span class="hljs-title function_">signal</span>(<span class="hljs-literal">true</span>);
<span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> customFeedback = <span class="hljs-title function_">computed</span>(<span class="hljs-function">() =&gt;</span>
  <span class="hljs-title function_">truncatedText</span>(<span class="hljs-variable language_">this</span>.<span class="hljs-title function_">label</span>(), <span class="hljs-variable language_">this</span>.<span class="hljs-title function_">overflow</span>()?.<span class="hljs-title function_">truncated</span>() ?? <span class="hljs-literal">false</span>, <span class="hljs-variable language_">this</span>.<span class="hljs-title function_">automaticTooltips</span>())
);</code></pre>
<p>The pipe is pure: pass the current <code>truncated()</code> boolean rather than an element or directive object. This lets Angular update its result when measurement
changes.</p>
<h3>Disable automatic tooltips without disabling truncation</h3>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">bx-tag</span> [<span class="hljs-attr">text</span>]=<span class="hljs-string">&quot;label()&quot;</span> [<span class="hljs-attr">tooltipOnTruncate</span>]=<span class="hljs-string">&quot;false&quot;</span> <span class="hljs-attr">tooltip</span>=<span class="hljs-string">&quot;My application description&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">bx-menu-item</span> [<span class="hljs-attr">label</span>]=<span class="hljs-string">&quot;label()&quot;</span> [<span class="hljs-attr">tooltipOnTruncate</span>]=<span class="hljs-string">&quot;false&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">bx-input-field</span> [<span class="hljs-attr">label</span>]=<span class="hljs-string">&quot;label()&quot;</span> [<span class="hljs-attr">tooltipOnTruncate</span>]=<span class="hljs-string">&quot;false&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">bx-search-input</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;label()&quot;</span> [<span class="hljs-attr">tooltipOnTruncate</span>]=<span class="hljs-string">&quot;false&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">bx-select</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Location&quot;</span> [<span class="hljs-attr">options</span>]=<span class="hljs-string">&quot;options()&quot;</span> [<span class="hljs-attr">tooltipOnTruncate</span>]=<span class="hljs-string">&quot;false&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">bx-multi-select</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Locations&quot;</span> [<span class="hljs-attr">options</span>]=<span class="hljs-string">&quot;options()&quot;</span> [<span class="hljs-attr">tooltipOnTruncate</span>]=<span class="hljs-string">&quot;false&quot;</span> /&gt;</span></code></pre>
<p><code>tooltipOnTruncate</code> defaults to true. False suppresses the component&#39;s automatic ellipsis tooltip while retaining ellipsis and measurement, so an application
can attach its own tooltip. Explicit tag tooltip descriptions and overflow-tag lists are independent; they retain their existing contract.
<code>ITagConfig.tooltipOnTruncate</code> supplies a reusable tag default, and a direct tag input takes precedence.</p>
<p>Forms resolve the instance input, then shared application settings, then true:</p>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { inject } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">FormSettingsService</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/forms&#x27;</span>;

<span class="hljs-keyword">private</span> <span class="hljs-keyword">readonly</span> formSettingsService = <span class="hljs-title function_">inject</span>(<span class="hljs-title class_">FormSettingsService</span>);

<span class="hljs-comment">// For example, in application initialization:</span>
<span class="hljs-variable language_">this</span>.<span class="hljs-property">formSettingsService</span>.<span class="hljs-title function_">update</span>({ <span class="hljs-attr">tooltipOnTruncate</span>: <span class="hljs-literal">false</span> });</code></pre>
<p><code>[bxTruncate]=&quot;false&quot;</code> is a separate choice: it disables ellipsis itself on a custom text element. <code>tooltipOnTruncate</code> only disables automatic tooltips on an
owning component.</p>
<h2>Appearance and customization</h2>
<p>The directive supplies ellipsis mechanics rather than a theme or a tooltip. Keep widths, typography, colors, borders, and focus styling on the owning control or
container using Blocks tokens. Apply it to the text element rather than a wrapper containing icons, counters, or actions. The shared <code>truncate-text</code> Sass mixin
is available through <code>core/styles/helpers</code> for stylesheet-only integrations; the directive and existing components use that same utility.</p>
<p>All existing library ellipsis sites use the shared implementation: tag labels, menu-item content, floating input labels, search values/placeholders,
select/multiselect captions and values, and multiselect&#39;s full-selection measurement. Menu <code>wrapLabel</code> disables ellipsis through the same directive. The
appearance preview&#39;s clipped status text also uses it. Custom select trigger templates keep application-owned presentation.</p>
<h2>Behavior and accessibility</h2>
<p>Resize and content observers, Angular render callbacks, viewport changes, and font loading refresh measurement. Checks are coalesced into animation frames.
Observers, listeners, and pending frames are cleaned up on destruction; asynchronous font completion is guarded. Browser measurement starts after rendering.</p>
<p>Native single-line input values are measured with their current font and inline padding, since their rendered values are not DOM text nodes. Regular text uses
its content-box overflow metrics. Full-selection summary measurement uses a constrained, visually hidden copy of the text and the same directive.</p>
<p>The complete text stays in the DOM for assistive technology. The directive does not add focusability, roles, action semantics, or text of its own. The owner
provides keyboard access and a visible focus indicator when a tooltip needs an independent focus target. Use the existing <code>TooltipDirective</code> for hover, keyboard
focus, touch-and-hold, overlay theming, positioning, and reduced-motion behavior. Passing an empty tooltip while text fits also removes its description and
dismisses an open tooltip.</p>
<p>Translation stays in the caller: resolve <code>ResolvableText</code> through <code>BX_I18N</code> in a computation that reads the adapter&#39;s version, then render and pass that same
resolved string to the tooltip. Rendered language changes trigger new measurements.</p>
<h2>Playground</h2>
<p>Open <code>/components/truncate</code> for the short pipe example, helper/custom logic, application defaults, opt-out examples, and interactive previews across tags,
menus, input fields, search, select and multiselect. Edit text, adjust width, enlarge typography, disable automatic tooltips, or supply a custom tag/text
tooltip. <code>/components/tag</code> includes the same demo alongside tag customization.</p>
<p>Previews use an aligned responsive card grid. Width changes affect each example inside its card; preview areas and caption space stay reserved. Wrapped content
scrolls inside its preview rather than moving later examples.</p>
`,"projects/blocks/primitives/directives/virtual-item/README.md":`<h1>Virtual item template</h1>
<p>Typed projection for <a href="components/virtual-collection">VirtualCollection</a>. The collection mounts only the item templates in its sliding window.</p>
<h2>Import</h2>
<pre class="playground-code-block" tabindex="0" aria-label="typescript code example"><code class="hljs language-typescript"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">VirtualCollection</span>, <span class="hljs-title class_">VirtualItemDirective</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/primitives&#x27;</span>;</code></pre>
<h2>Usage</h2>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">bx-virtual-collection</span> #<span class="hljs-attr">collection</span> [<span class="hljs-attr">items</span>]=<span class="hljs-string">&quot;items()&quot;</span> [<span class="hljs-attr">trackBy</span>]=<span class="hljs-string">&quot;itemKey&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> [<span class="hljs-attr">bxVirtualItem</span>]=<span class="hljs-string">&quot;collection&quot;</span> <span class="hljs-attr">let-item</span> <span class="hljs-attr">let-index</span>=<span class="hljs-string">&quot;index&quot;</span>&gt;</span>{{ index + 1 }}. {{ item.label }}<span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">bx-virtual-collection</span>&gt;</span></code></pre>
<h2>API</h2>
<p>The required <code>bxVirtualItem</code> binding supplies its owning collection for generic type inference. <code>IVirtualItemContext&lt;T&gt;</code> exposes the item through <code>$implicit</code>,
its zero-based <code>index</code>, and the supplied item <code>count</code>.</p>
<h2>Appearance and customization</h2>
<p>Use Blocks controls and semantic tokens inside the projected template. The collection owns row geometry and gap variables.</p>
<h2>Behavior and accessibility</h2>
<p>Keep application state outside temporary item views. Stable keys preserve anchoring; template-local state is recreated after unmounting. Label interactive
controls and preserve ordinary keyboard behavior.</p>
<h2>Playground</h2>
<p>Open <code>/components/virtual-collection</code>, <code>/icons</code>, or <code>/tokens</code>.</p>
`,"projects/blocks/toastr/README.md":`<h1>Toastr</h1>
<p>Component-driven notifications with a bounded queue, typed custom content, semantic message helpers, progress, pause/resume, and swipe dismissal.</p>
<h2>Import</h2>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">Toast</span>, <span class="hljs-title class_">ToastrService</span>, <span class="hljs-title class_">ToastrGlobalSettingsService</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/toastr&#x27;</span>;</code></pre>
<p>Follow the <a href="home">package setup</a>. Toastr is a secondary entry point of <code>@filip.mazev/blocks</code>.</p>
<h2>Usage</h2>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">ChangeDetectionStrategy</span>, <span class="hljs-title class_">Component</span>, inject } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Button</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/forms&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ToastrService</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/toastr&#x27;</span>;

<span class="hljs-meta">@Component</span>({
    <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;app-save-notification&#x27;</span>,
    <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">Button</span>],
    <span class="hljs-attr">template</span>: <span class="hljs-string">&#x27;&lt;button bx-button (click)=&quot;notify()&quot;&gt;Show success&lt;/button&gt;&#x27;</span>,
    <span class="hljs-attr">changeDetection</span>: <span class="hljs-title class_">ChangeDetectionStrategy</span>.<span class="hljs-property">OnPush</span>
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">SaveNotification</span> {
    <span class="hljs-keyword">private</span> <span class="hljs-keyword">readonly</span> toastrService = <span class="hljs-title function_">inject</span>(<span class="hljs-title class_">ToastrService</span>);

    <span class="hljs-keyword">protected</span> <span class="hljs-title function_">notify</span>(): <span class="hljs-built_in">void</span> {
        <span class="hljs-variable language_">this</span>.<span class="hljs-property">toastrService</span>.<span class="hljs-title function_">queueSuccess</span>({ <span class="hljs-attr">title</span>: <span class="hljs-string">&#x27;Saved&#x27;</span>, <span class="hljs-attr">message</span>: <span class="hljs-string">&#x27;Your settings are up to date.&#x27;</span> });
    }
}</code></pre>
<h3>Custom content</h3>
<p>Create content in its own component file. The string payload keeps this example self-contained; place larger data interfaces in a dedicated <code>interfaces</code> folder.</p>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">ChangeDetectionStrategy</span>, <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Button</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/forms&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Toast</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/toastr&#x27;</span>;

<span class="hljs-meta">@Component</span>({
    <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;app-custom-toast&#x27;</span>,
    <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">Button</span>],
    <span class="hljs-attr">template</span>: <span class="hljs-string">&#x27;&lt;p&gt;{{ data }}&lt;/p&gt;&lt;button bx-button (click)=&quot;close()&quot;&gt;Dismiss&lt;/button&gt;&#x27;</span>,
    <span class="hljs-attr">changeDetection</span>: <span class="hljs-title class_">ChangeDetectionStrategy</span>.<span class="hljs-property">OnPush</span>
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">CustomToast</span> <span class="hljs-keyword">extends</span> <span class="hljs-title class_ inherited__">Toast</span>&lt;<span class="hljs-built_in">string</span>, <span class="hljs-literal">undefined</span>&gt; {}</code></pre>
<p>Inside an application action with an injected <code>ToastrService</code> and <code>CustomToast</code> imported from its defining file:</p>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">const</span> ref = <span class="hljs-variable language_">this</span>.<span class="hljs-property">toastrService</span>.<span class="hljs-title function_">queueToast</span>(<span class="hljs-title class_">CustomToast</span>, {
    <span class="hljs-attr">data</span>: <span class="hljs-string">&#x27;The export is ready.&#x27;</span>,
    <span class="hljs-attr">position</span>: <span class="hljs-string">&#x27;bottom-right&#x27;</span>,
    <span class="hljs-attr">durationInMs</span>: <span class="hljs-number">5000</span>,
    <span class="hljs-attr">swipeToDismiss</span>: <span class="hljs-literal">true</span>
});

ref.<span class="hljs-property">afterClosed$</span>.<span class="hljs-title function_">subscribe</span>(<span class="hljs-function">() =&gt;</span> <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#x27;Notification closed&#x27;</span>));</code></pre>
<h2>API</h2>
<h3>Queue and references</h3>
<p><code>queueInfo</code>, <code>queueSuccess</code>, <code>queueWarning</code>, and <code>queueDanger</code> accept <code>IQueueSimpleToastRequest</code> and return a typed <code>ToastRef</code>.
<code>queueToast(ContentComponent, config?)</code> queues custom content. Excess requests wait until an open slot becomes available; <code>maxOpened</code> defaults to four across
positions.</p>
<p><code>Toast&lt;D, R&gt;</code> provides typed <code>data</code>, the <code>toast</code> reference, <code>onToastInit()</code>, and <code>close(result?)</code>. <code>ToastRef&lt;D, R&gt;</code> exposes <code>close(result?)</code>, <code>pause()</code>,
<code>resume()</code>, resolved <code>config</code>, and <code>afterClosed$</code>, <code>onPause$</code>, and <code>onResume$</code> observables.</p>
<h3>Configuration</h3>
<table>
<thead>
<tr>
<th><code>IToastConfig&lt;D&gt;</code> property</th>
<th>Default and purpose</th>
</tr>
</thead>
<tbody><tr>
<td><code>data</code></td>
<td>Optional custom component payload.</td>
</tr>
<tr>
<td><code>position</code></td>
<td><code>top-right</code>; also top-left, top-center, bottom-left, bottom-center, bottom-right.</td>
</tr>
<tr>
<td><code>durationInMs</code></td>
<td><code>5000</code>; notification lifetime.</td>
</tr>
<tr>
<td><code>swipeToDismiss</code></td>
<td><code>true</code>; allow swipe dismissal.</td>
</tr>
<tr>
<td><code>animate</code></td>
<td><code>true</code>; reduced motion takes precedence.</td>
</tr>
<tr>
<td><code>showCloseButton</code>, <code>showProgressBar</code></td>
<td><code>true</code>; display the wrapper actions and progress.</td>
</tr>
<tr>
<td><code>closeButtonColor</code>, <code>progressBarColor</code></td>
<td><code>text-primary</code>; semantic colors.</td>
</tr>
<tr>
<td><code>wrapperClass</code></td>
<td>Optional wrapper class override.</td>
</tr>
<tr>
<td><code>hasDefaultBackground</code></td>
<td><code>true</code>; false also suppresses added glassiness.</td>
</tr>
<tr>
<td><code>glassiness</code></td>
<td><code>auto</code>; shared browser policy and accessibility settings still apply.</td>
</tr>
<tr>
<td><code>glassQuality</code></td>
<td><code>enhanced</code>; the application baseline and device budget take precedence.</td>
</tr>
</tbody></table>
<p>Simple requests require <code>message</code> and accept optional <code>title</code>, both with <code>ResolvableText</code>. The simple helper&#39;s progress option retains the existing spelling
<code>showProgessBar</code>; custom toast configuration and global settings use <code>showProgressBar</code>.</p>
<p><code>ToastrGlobalSettingsService.update(partial)</code> merges defaults without discarding unrelated settings. Per-toast configuration overrides these settings, followed
by library defaults. It also exposes <code>maxOpened</code> for queue capacity.</p>
<h2>Appearance and customization</h2>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { inject } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ToastrGlobalSettingsService</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/toastr&#x27;</span>;

<span class="hljs-keyword">const</span> toastrGlobalSettingsService = <span class="hljs-title function_">inject</span>(<span class="hljs-title class_">ToastrGlobalSettingsService</span>);
toastrGlobalSettingsService.<span class="hljs-title function_">update</span>({ <span class="hljs-attr">position</span>: <span class="hljs-string">&#x27;bottom-right&#x27;</span>, <span class="hljs-attr">maxOpened</span>: <span class="hljs-number">3</span>, <span class="hljs-attr">glassQuality</span>: <span class="hljs-string">&#x27;auto&#x27;</span> });</code></pre>
<p>Toast wrappers use Blocks semantic colors, spacing, radius, shared lighting, and the application appearance. Custom content shares its containing surface.
<code>ThemingService</code> updates mounted notifications when appearance changes. See the
<a href="appearance">appearance guide</a> for rendering policy and opaque fallbacks.</p>
<h2>Behavior and accessibility</h2>
<p>The service and wrapper coordinate queue capacity, lifetime, progress, pause/resume, dismissal, and cleanup. Give users enough time to read messages and retain
important outcomes outside transient notifications. Use an inline alert or modal when acknowledgment is required.</p>
<p>Reduced motion suppresses movement while preserving state; reduced transparency and forced colors use opaque presentation. Simple message text accepts strings
or translation keys through <code>BX_I18N</code>; custom components own translation, keyboard access, accessible names, and descriptions for their own content.</p>
<h2>Playground</h2>
<p>Open <code>/toastr</code> for the configurator, <code>/components/toast-core</code> for custom content, and <code>/components/simple-toast</code> for semantic notifications.</p>
`,"projects/blocks/toastr/components/toast-core/README.md":`<h1>Toast core</h1>
<p>The toast lifecycle host with progress, dismissal and content composition.</p>
<p>Toast wrappers opt into enhanced glassiness on supported browsers. The default maximum of four open notifications bounds the extra surfaces. The
application-wide baseline, automatic device budget, reduced transparency and high contrast still take precedence. Reflections have a bounded capture area and
throttled invalidation; hidden receivers suspend work.</p>
<p>Per-toast <code>IToastConfig</code> supports <code>glassiness</code> (<code>auto</code>, <code>off</code>, <code>on</code>), <code>glassQuality</code> (<code>auto</code>, <code>baseline</code>, <code>enhanced</code>). The same defaults can be set through
<code>ToastrGlobalSettingsService.update()</code>. Simple toast content keeps its semantic foreground colors while its material provides the backing. An explicit
<code>hasDefaultBackground: false</code> suppresses the added glassiness enhancement.</p>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">const</span> toastrGlobalSettingsService = <span class="hljs-title function_">inject</span>(<span class="hljs-title class_">ToastrGlobalSettingsService</span>);
toastrGlobalSettingsService.<span class="hljs-title function_">update</span>({ <span class="hljs-attr">glassQuality</span>: <span class="hljs-string">&#x27;auto&#x27;</span> }); <span class="hljs-comment">// One refraction pass for selected toasts.</span>
toastrGlobalSettingsService.<span class="hljs-title function_">update</span>({ <span class="hljs-attr">glassiness</span>: <span class="hljs-string">&#x27;off&#x27;</span> }); <span class="hljs-comment">// Existing material and lighting.</span></code></pre>
<h2>Import</h2>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">ToastCore</span>, <span class="hljs-title class_">ToastrService</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/toastr&#x27;</span>;</code></pre>
<p>Add the standalone component or directive to your component&#39;s <code>imports</code>.</p>
<h2>Usage</h2>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">bx-button</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;notify()&quot;</span>&gt;</span>Show notification<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span></code></pre>
<h2>API</h2>
<p>Use <code>ToastrService.queueToast(ContentComponent, config)</code> for custom content, or queueInfo, queueSuccess, queueWarning and queueDanger for common messages.
Config controls position, durationInMs, progress and close actions.</p>
<h2>Appearance</h2>
<p>Appearance uses Blocks semantic colors, spacing, radius and motion tokens. Glass surfaces inherit the application configuration from <code>ThemingService</code>; adjusting
translucency updates existing components and overlays. Content-only parts share their containing surface instead of adding another backdrop filter.</p>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { inject } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ThemingService</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/core&#x27;</span>;

<span class="hljs-keyword">private</span> <span class="hljs-keyword">readonly</span> themingService = <span class="hljs-title function_">inject</span>(<span class="hljs-title class_">ThemingService</span>);

<span class="hljs-comment">// Application-wide, including open overlays.</span>
<span class="hljs-variable language_">this</span>.<span class="hljs-property">themingService</span>.<span class="hljs-title function_">setAppearance</span>({ <span class="hljs-attr">translucency</span>: <span class="hljs-number">0.5</span> });
<span class="hljs-comment">// Opaque presentation retains the same layout and component API.</span>
<span class="hljs-variable language_">this</span>.<span class="hljs-property">themingService</span>.<span class="hljs-title function_">setAppearance</span>({ <span class="hljs-attr">reducedTransparency</span>: <span class="hljs-literal">true</span> });</code></pre>
<p><code>BxA11yService</code> controls reduced motion; reduced transparency and forced colors receive opaque presentation. Glass is decorative and does not replace labels,
focus states, or semantic control states.</p>
<h2>Behavior and accessibility</h2>
<p>Create notifications through the service; the wrapper owns timers, pause/resume and cleanup. Keep important information available outside transient messages.
The playground\u2019s toast page can show all four semantic intents.</p>
<h2>Playground</h2>
<p>Open <code>/components/toast-core</code> for a working example and its current value or action result.</p>
`,"projects/blocks/toastr/components/views/simple-toast/README.md":`<h1>Simple toast</h1>
<p>A notification with a semantic icon, optional title and message.</p>
<p>The toast wrapper uses enhanced glassiness on supported browsers, with shared translucency and accessibility preferences. Text retains its semantic foreground
as the background scrolls; the material keeps a minimum tint and blur for readability. Progress and border lighting retain the notification type. Use toast
configuration or global toast settings to select automatic detail, or disable glassiness.</p>
<h2>Import</h2>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">SimpleToast</span>, <span class="hljs-title class_">ToastrService</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/toastr&#x27;</span>;</code></pre>
<p>Add the standalone component or directive to your component&#39;s <code>imports</code>.</p>
<h2>Usage</h2>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">bx-button</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;notify()&quot;</span>&gt;</span>Show success<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span></code></pre>
<h2>API</h2>
<p>Use <code>toastrService.queueSuccess({ title: &quot;Saved&quot;, message: &quot;Your settings are up to date.&quot; })</code>. Equivalent methods queueInfo, queueWarning and queueDanger set
the semantic intent. Request fields include position, durationInMs, animate, showCloseButton and showProgessBar (existing API spelling).</p>
<h2>Appearance</h2>
<p>Appearance uses Blocks semantic colors, spacing, radius and motion tokens. Glass surfaces inherit the application configuration from <code>ThemingService</code>; adjusting
translucency updates existing components and overlays. Content-only parts share their containing surface instead of adding another backdrop filter.</p>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { inject } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ThemingService</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/core&#x27;</span>;

<span class="hljs-keyword">private</span> <span class="hljs-keyword">readonly</span> themingService = <span class="hljs-title function_">inject</span>(<span class="hljs-title class_">ThemingService</span>);

<span class="hljs-comment">// Application-wide, including open overlays.</span>
<span class="hljs-variable language_">this</span>.<span class="hljs-property">themingService</span>.<span class="hljs-title function_">setAppearance</span>({ <span class="hljs-attr">translucency</span>: <span class="hljs-number">0.5</span> });
<span class="hljs-comment">// Opaque presentation retains the same layout and component API.</span>
<span class="hljs-variable language_">this</span>.<span class="hljs-property">themingService</span>.<span class="hljs-title function_">setAppearance</span>({ <span class="hljs-attr">reducedTransparency</span>: <span class="hljs-literal">true</span> });</code></pre>
<p><code>BxA11yService</code> controls reduced motion; reduced transparency and forced colors receive opaque presentation. Glass is decorative and does not replace labels,
focus states, or semantic control states.</p>
<h2>Behavior and accessibility</h2>
<p>Write a concise message with a clear outcome. Use a modal or an inline message when acknowledgement or a long interaction is required. Simple toast content
shares the parent toast glass surface.</p>
<h2>Playground</h2>
<p>Open <code>/components/simple-toast</code> for a working example and its current value or action result.</p>
`,"projects/playground/src/app/components/screens/appearance/README.md":`<h1>Blocks appearance</h1>
<p>Glass is integrated into Blocks components and its existing theme engine. Surface colors, text, borders, radii and elevation come from Blocks tokens. Icons,
labels, validation messages and other structural content inherit their containing surface instead of adding redundant blurred boxes.</p>
<p>The <code>@filip.mazev/blocks/effects/runtime</code> entry point shipped inside Blocks provides the same material and motion primitives without Angular, CDK or RxJS.</p>
<h2>Import</h2>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">ThemingService</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">BxSurfaceDirective</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/effects&#x27;</span>;</code></pre>
<p>Use the core service to configure the application and the standalone surface directive for custom Angular surfaces.</p>
<h2>Usage</h2>
<p>Use an Angular 22 compatible Node version (22.22.3+, 24.15+, or 26+):</p>
<pre class="playground-code-block" tabindex="0" aria-label="sh code example"><code class="hljs language-sh">npm ci
npm start</code></pre>
<p>Open <a href="http://localhost:8080">http://localhost:8080</a>. The component catalogue links each component to its own demonstration and README. <code>/appearance</code> provides application-wide material
controls and spatial-lighting and fade demonstrations. <code>/icon-catalog</code> provides searchable, paginated icons.</p>
<p>The playground defaults to Carbon / Cobalt (<code>#292a2d</code> / <code>#356fe8</code>) when no valid saved palette is present; Reset returns to Carbon / Cobalt.</p>
<p>The appearance preview is a scrollable national-parks article with English copy and photos adapted from EcoProject24. Independent glass search, bookmark,
contents, and navigation controls stay over the article while its images and text scroll beneath them. Search filters the featured places, and the contents and
navigation controls jump within the preview. The opening image uses the original mountain photograph; responsive WebP copies up to 2400 pixels wide are loaded
eagerly, with smaller versions for narrow screens. The preview sits above a separate translucency card. A short scroll down and back plays once when the preview
comes into view, stops on interaction, and is skipped when reduced motion is enabled.</p>
<pre class="playground-code-block" tabindex="0" aria-label="sh code example"><code class="hljs language-sh">npm run build:playground
npm run build:blocks</code></pre>
<p>Documentation is generated automatically before serving/building the playground. After editing a README while the development server is already running, run
<code>npm run tools:build-docs</code> to regenerate its bundled content. Runtime documentation does not fetch Markdown files. Fenced README examples are highlighted during
generation with the same highlight.js engine used by live usage examples and configurator file tabs. Code blocks follow the active light/dark syntax theme and
support keyboard scrolling; short inline API names remain inline code.</p>
<p>Keep Angular packages, CLI, builder and ng-packagr on major 22 with TypeScript 6. The checked-in lockfile preserves compatible versions. Runtime Markdown and
Mermaid dependencies are no longer needed by the playground. Do not mix Angular 21 tooling with Angular 22.</p>
<h2>API</h2>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { inject } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ThemingService</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/core&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">Settings</span> {
    <span class="hljs-keyword">readonly</span> themingService = <span class="hljs-title function_">inject</span>(<span class="hljs-title class_">ThemingService</span>);

    <span class="hljs-title function_">setAppearance</span>(<span class="hljs-params"></span>) {
        <span class="hljs-variable language_">this</span>.<span class="hljs-property">themingService</span>.<span class="hljs-title function_">setAppearance</span>({
            <span class="hljs-attr">translucency</span>: <span class="hljs-number">0.5</span>,
            <span class="hljs-attr">quality</span>: <span class="hljs-string">&#x27;auto&#x27;</span>
        });
    }
}</code></pre>
<p>There is no global semantic-emission setting. Interactive lights use the color of the active control or status item; passive edge cues sample the surrounding
scene automatically. Neutral edges and restrained highlights define the material. Glass buttons follow the full translucency range; fields and filled actions
retain their own legibility constraints.</p>
<p><code>themingService.appearance()</code> is the current typed configuration; <code>themingService.resetAppearance()</code> restores defaults. Changes apply to existing components and
open overlays. <code>translucency</code> is 0\u20131, defaulting to the balanced midpoint of 0.5. It adjusts tint and blur together: the minimum is nearly clear with light
blur, while the maximum caps tint near 72.5% to retain a glassy appearance. <code>reducedTransparency: true</code> supplies fully opaque surfaces and preserves the chosen
translucency for when transparency is restored. Quality is <code>auto</code>, <code>baseline</code>, or <code>enhanced</code>. Reduced motion continues through <code>BxA11yService</code>; system
transparency and contrast preferences remain respected. Previously saved tint preferences migrate to translucency, and a saved solid preference becomes reduced
transparency.</p>
<p>The global styles are required once. <code>ng add @filip.mazev/blocks</code> adds the distributed material stylesheet to the application build. For an existing
application, add <code>node_modules/@filip.mazev/blocks/effects/effects.css</code> to <code>angular.json</code> styles before the application stylesheet, or import
<code>@filip.mazev/blocks/effects/effects.css</code> globally. Continue including the usual Blocks Sass theme once. The playground already does this.</p>
<h3>Framework-independent API</h3>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { configureAppearance, mountSurface, mountGlassScene, createGlassTransition } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/effects/runtime&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/effects/effects.css&#x27;</span>;

<span class="hljs-keyword">const</span> configuration = <span class="hljs-title function_">configureAppearance</span>(<span class="hljs-variable language_">document</span>.<span class="hljs-property">documentElement</span>, {
    <span class="hljs-attr">translucency</span>: <span class="hljs-number">0.5</span>,
    <span class="hljs-attr">quality</span>: <span class="hljs-string">&#x27;auto&#x27;</span>
});
<span class="hljs-keyword">const</span> surface = <span class="hljs-title function_">mountSurface</span>(button);
<span class="hljs-keyword">const</span> scene = <span class="hljs-title function_">mountGlassScene</span>(container, {
    <span class="hljs-attr">lights</span>: [{ <span class="hljs-attr">element</span>: lightMarker, <span class="hljs-attr">z</span>: <span class="hljs-number">180</span>, <span class="hljs-attr">intensity</span>: <span class="hljs-number">1</span>, <span class="hljs-attr">radius</span>: <span class="hljs-number">640</span> }],
    <span class="hljs-attr">reflectors</span>: [{ <span class="hljs-attr">element</span>: foreground, <span class="hljs-attr">depth</span>: <span class="hljs-number">80</span>, <span class="hljs-attr">intensity</span>: <span class="hljs-number">0.3</span> }]
});
<span class="hljs-comment">// Mount and lay out the panel first.</span>
<span class="hljs-keyword">const</span> panelSurface = <span class="hljs-title function_">mountSurface</span>(panel);
<span class="hljs-keyword">const</span> transition = <span class="hljs-title function_">createGlassTransition</span>(button, panel);
<span class="hljs-keyword">await</span> transition.<span class="hljs-title function_">enter</span>();
<span class="hljs-comment">// Later: await transition.exit(), then remove the panel.</span>
<span class="hljs-comment">// Call scene.refresh() after changing registered objects&#x27; position or appearance.</span>
<span class="hljs-comment">// On teardown: transition.destroy(); panelSurface.destroy(); surface.destroy();</span>
<span class="hljs-comment">// scene.destroy(); configuration.destroy();</span></code></pre>
<p>Transition promises resolve to <code>finished</code> or <code>cancelled</code>. Always guard asynchronous panel removal against a subsequent reopening. Controllers expose
update/refresh and destroy methods; dispose them with their owning view. The former transition export remains as a deprecated compatibility alias; new code uses
<code>createGlassTransition</code>.</p>
<p>The native example can be served without Angular:</p>
<pre class="playground-code-block" tabindex="0" aria-label="sh code example"><code class="hljs language-sh">npm run build:blocks
python3 -m http.server 8081</code></pre>
<p>Open <a href="http://localhost:8081/projects/blocks/effects/examples/">http://localhost:8081/projects/blocks/effects/examples/</a>.</p>
<h2>Appearance and customization</h2>
<h3>Palettes</h3>
<p>Each palette combines two tonal families. Choose one under <strong>Palettes</strong> in Appearance; the two swatches show its anchors. The same palette supplies both light
and dark appearances.</p>
<table>
<thead>
<tr>
<th>Palette</th>
<th>Anchors</th>
<th><code>ng add --theme</code> value</th>
</tr>
</thead>
<tbody><tr>
<td>Carbon / Cobalt</td>
<td><code>#292a2d</code> / <code>#356fe8</code></td>
<td><code>carbon-cobalt</code></td>
</tr>
<tr>
<td>Azure / Ember</td>
<td><code>#217eff</code> / <code>#d85a1a</code></td>
<td><code>azure-ember</code></td>
</tr>
<tr>
<td>Violet / Teal</td>
<td><code>#6d00ff</code> / <code>#0d9488</code></td>
<td><code>violet-teal</code></td>
</tr>
<tr>
<td>Tangerine / Indigo</td>
<td><code>#ff6900</code> / <code>#4f78f5</code></td>
<td><code>tangerine-indigo</code></td>
</tr>
<tr>
<td>Brick Rose / Cyan</td>
<td><code>#b64a50</code> / <code>#0891b2</code></td>
<td><code>brick-rose-cyan</code></td>
</tr>
<tr>
<td>Lime / Violet</td>
<td><code>#c4f53d</code> / <code>#6842a6</code></td>
<td><code>lime-violet</code></td>
</tr>
<tr>
<td>Cyberpunk</td>
<td><code>#3e5669</code> / <code>#e6da00</code></td>
<td><code>cyberpunk</code></td>
</tr>
</tbody></table>
<p>Primary roles identify main actions, links and field focus. Accent roles identify checked checkboxes, radios and switches, slider progress, selected options and
supporting actions. This follows Material&#39;s use of distinct color roles for emphasis while keeping broad surfaces neutral. For example, <code>color=&quot;accent&quot;</code> selects
the second tone on buttons and tabs; <code>text-accent</code> follows it on icons. Documentation uses the primary role and Code Examples uses the accent role. Success,
warning, danger and information retain their status meanings across palettes.</p>
<p>Canvas backgrounds stay neutral white or black, leaving application background styling to the consuming app. Cards, toolbars, navigation and default controls
use neutral white/black/gray surfaces. Explicit primary and accent actions retain their palette roles. Scrollbars use a solid primary shade. The playground&#39;s
Oddity canvas uses subtle tints from both tones over the neutral canvas. Cyberpunk retains yellow actions and blue-slate supporting controls over neutral
surfaces.</p>
<p>Carbon / Cobalt combines a deep neutral charcoal with a saturated cobalt-blue accent. Its dark appearance uses neutral off-white primary actions instead of a
pale colored tint. Azure / Ember pairs blue with burnt orange, while Brick Rose / Cyan pairs a muted rose-red with cyan. Their dark action shades are tuned
individually: Cobalt provides a clear blue accent, Ember stays orange, and Brick Rose stays deeper and more muted than the danger red. Status colors are
independent of these palette families.</p>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">const</span> themingService = <span class="hljs-title function_">inject</span>(<span class="hljs-title class_">ThemingService</span>);
themingService.<span class="hljs-title function_">setPalette</span>(<span class="hljs-string">&#x27;violet-teal&#x27;</span>);
themingService.<span class="hljs-title function_">setApplicationTheme</span>(<span class="hljs-string">&#x27;dark&#x27;</span>);</code></pre>
<p>Use the palette IDs above in <code>ThemingService.setPalette()</code> and <code>ng add --theme</code>. Sass exports follow the same names, such as <code>$carbon-cobalt-light-theme</code> and
<code>$carbon-cobalt-dark-theme</code>. High contrast overrides both expressive roles with contrast-first black/white values.</p>
<p>All light-mode accent fills use white text; semantic fill shades become darker where necessary to reach 4.5:1 contrast. Raw 500-level palette anchors and picker
swatches stay unchanged. Other filled-role foregrounds prefer white when it passes, with dark text on brighter fills that require it. Brand/accent and secondary
text also retain contrast on their supported neutral and normal/hover/active surfaces in both modes. High-contrast palettes and explicit theme overrides remain
supported.</p>
<h3>Glassiness and translucency</h3>
<p>The <strong>Translucency</strong> slider controls tint and blur. It defaults to 50%; the preceding midpoint now falls around 70% on the slider, with both endpoints
preserved. The classic material retains its clear minimum and caps tint near 72.5%; active refraction adds the stronger readability floor below. Use <strong>Reduce
transparency</strong> for opaque surfaces.</p>
<p><strong>Glassiness</strong> is a per-element enhancement on supported browsers. Ordinary components keep their existing material. Select individual controls:</p>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">bx-button</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;icon&quot;</span> <span class="hljs-attr">glassiness</span>=<span class="hljs-string">&quot;auto&quot;</span> <span class="hljs-attr">aria-label</span>=<span class="hljs-string">&quot;Bookmark&quot;</span>&gt;</span>\u2026<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">section</span> <span class="hljs-attr">bxSurface</span> <span class="hljs-attr">bxSurfaceGlassiness</span>=<span class="hljs-string">&quot;auto&quot;</span> <span class="hljs-attr">bxSurfaceQuality</span>=<span class="hljs-string">&quot;enhanced&quot;</span>&gt;</span>\u2026<span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span></code></pre>
<p><code>themingService.setAppearance({ translucency: 0.5, glassiness: &#39;auto&#39; })</code> sets the shared scale and browser policy. It does not select every component. Off
disables selected glassiness; browser opt-in allows testing future support. Automatic uses one refraction pass. Enhanced adds full reflection and bevel layers,
with a bounded reflection region and throttled invalidation. The five Appearance preview controls use the automatic path; the three overview feature cards and
toast wrappers request Enhanced. Device budgets, baseline quality and accessibility still take precedence.</p>
<p>Text, placeholders and icons keep their theme or component foreground colors while scrolling. Active refraction retains a default minimum of 72% tint for
readability, increasing to about 74.9% tint at the slider midpoint and 89% at maximum. Blur starts at 0.5px, reaches about 0.8px at the midpoint and 9.2px at
maximum, keeping low settings sharper. Active, selected and open-popup controls have a stronger 90% minimum backing, and existing component opacity constraints
can demand more. The sampler supplies decorative edge lighting; it never chooses text or icon colors. Custom material and foreground overrides remain
application-owned. See the <a href="components/surface#glassiness-and-translucency">effects README</a> for material variables and
browser/accessibility fallbacks.</p>
<p>The numeric <code>glassiness</code> API was renamed to <code>translucency</code>. The directive inputs are now <code>bxSurfaceTranslucency</code> and <code>bxSurfaceGlassiness</code>, and the scalar CSS
variable is <code>--bx-translucency</code>. Saved older preferences migrate automatically to the new names and curve.</p>
<h3>Existing components and custom surfaces</h3>
<p>Blocks components receive glass automatically. The <code>BxSurfaceDirective</code> remains useful for your own containers and local overrides:</p>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">section</span> <span class="hljs-attr">bxSurface</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">bx-button</span> [<span class="hljs-attr">bxDropdown</span>]=<span class="hljs-string">&quot;actions&quot;</span>&gt;</span>Actions<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> #<span class="hljs-attr">actions</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">bx-menu</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">bx-menu-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Edit&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">bx-menu-item</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">bx-menu-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Duplicate&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">bx-menu-item</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">bx-menu</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span></code></pre>
<p>Place custom surfaces on containers with measurable CSS boxes. Native replaced elements such as inputs and images need a wrapper for decoration; use the
dedicated <code>SliderDirective</code> (<code>input[type=range][bxSlider]</code>) for native ranges; Blocks form components already provide appropriate wrappers. Nested surfaces
retain tint and reflection while avoiding a second backdrop-filter pass.</p>
<h3>Overlay fades</h3>
<p>The engine fades the material surface itself in and out while preserving its full dimensions, blur, and translucency. The positioning pane remains at full
opacity so it does not interrupt backdrop filtering. Reopening reverses from the current opacity. Dropdowns use <code>bxTransition=&quot;fade&quot;</code> by default; the former
<code>emerge</code> value remains a compatibility alias.</p>
<p>Dropdowns expose <code>#actions=&quot;bxDropdown&quot;</code>, <code>open()</code>, <code>close()</code>, <code>toggle()</code>, <code>isOpen()</code> and <code>state()</code>. The adapter keeps an exiting panel inert and disposes it
after motion settles, with revision guards for reopening. Focus and keyboard behavior remain native. No dragging or repositioning behavior was added in this
iteration.</p>
<h2>Behavior and accessibility</h2>
<p>Appearance updates propagate through the shared theme and effects services to mounted components and overlays. Reduced motion takes precedence over requested
animation. Reduced transparency, high contrast, and forced colors preserve opaque, readable presentation. Keep semantic labels, focus indicators, and control
state independent of decorative glass and lighting. Destroy custom runtime controllers with their owning view.</p>
<h3>Lighting and rendering limits</h3>
<p>Lighting uses a bounded spatial model: up to four explicit lights and four foreground/background reflection proxies per scene. Every mounted glass surface also
samples a few points around its edge and picks up subtle color from nearby visible CSS backgrounds, images, video and canvas. Paint order separates foreground
from backdrop cues; depth and distance reduce their strength. Different sources retain localized edge colors, crossfading beneath existing semantic and explicit
lights. Real CSS backdrop filtering continues to display the pixels behind a surface.</p>
<p>These are deliberate optical approximations. Media sampling uses a small downscaled buffer at selected edge points; the engine does not capture arbitrary DOM
into a texture, ray trace the page, or infer a 3D scene. Refractive refraction and rim reflection use the browser&#39;s live backdrop pixels through SVG filters.
Register moving scene objects and call <code>scene.refresh()</code> when your application changes them; call <code>refreshGlassLighting(element)</code> after application-driven
changes around an automatically lit surface. Static scenes do no ongoing sampling. Layout changes are coalesced over 180 ms; visible live media shares the
existing adaptive polling loop and backs off when unchanged. Media pixels are cached and color-only changes reuse the existing edge positions without hit
testing. Hidden pages and reduced-motion receivers stop live media checks.</p>
<p>Baseline uses one material layer and directional lighting. Enhanced rendering adds colored reflection and a specular edge; active refraction also adds SVG
backdrop passes for refraction and edge reflection. Use Glassiness Off or Baseline when the added GPU cost is unsuitable. Auto mode considers CSS capability,
coarse-pointer devices, reduced-cost device signals and data-saving preference. Explicit enhanced mode still requires the relevant CSS support. Reduced
transparency, unsupported backdrop filters, and increased contrast provide opaque presentation.</p>
<p>Input and scene observation are shared per document. Scene updates batch a bounded number of visible surfaces; geometry reads precede writes. Animation frames
stop when springs settle. Background scrolling can still cause browser GPU work even while JavaScript is idle: measure the real target devices before choosing
high blur or putting glass over frequently changing content.</p>
<h2>Playground</h2>
<p>The <code>/appearance</code> page separates color mode, surfaces, theme palettes, and accessibility. Light and Dark select an explicit mode. Auto follows live system
color-scheme changes, including after a reload. Clickable Blocks cards choose the mode; their inert previews use Blocks components in the selected palette. The
selected card uses the shared emissive highlight, and Auto joins its light/dark preview halves without inner corner rounding.</p>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts">themingService.<span class="hljs-title function_">setApplicationTheme</span>(<span class="hljs-string">&#x27;dark&#x27;</span>);
themingService.<span class="hljs-title function_">setApplicationTheme</span>(<span class="hljs-literal">null</span>); <span class="hljs-comment">// Follow the system appearance.</span></code></pre>
<p>The Surfaces section places its Surface Appearance title beside the scrolling journal on wide layouts and above it on smaller screens. The padded pill slider
sits below the demo, followed by its description; Reset restores surface preferences. Its Blocks Advanced settings disclosure contains rendering and glassiness
options. Rendering, glassiness, translucency and reduced transparency are saved together in <code>blocks-appearance</code> and restored on refresh, including Enhanced.
Baseline temporarily sets Glassiness to Off and disables all glassiness choices, including browser opt-in. Switching back to Automatic or Enhanced restores the
previous Automatic or browser opt-in policy; an explicitly chosen Off remains Off. Enhanced stays available from Baseline when the remembered policy permits it.
This also applies to <code>themingService.setAppearance()</code> and restored preferences. <code>themingService.preferredGlassiness()</code> exposes the requested policy while
<code>themingService.appearance().glassiness</code> reflects the effective value. Turning Glassiness Off intentionally returns Enhanced to Automatic. Theme palettes and
accessibility preferences have independent sections; resetting surfaces changes only surface preferences.</p>
<p>The top bar provides a single Appearance link. On wide screens, selectable Blocks cards offer Light, Dark and Auto. On screens at the shared <code>sm</code> breakpoint or
narrower, Light and Dark appear side by side with portrait previews and an Automatic slide toggle below. Automatic highlights the currently active mode and
follows system changes; choosing the other card disables Auto, while choosing the already active card keeps it enabled. Turning Auto off preserves the current
mode. Mode and palette preferences remain available on this page and persist across refreshes.</p>
<p>Open <code>/appearance</code> to adjust the live application preferences and preview the material over scrollable content. Use <code>/components</code> to inspect individual controls
and their colocated API documentation. The playground screen, its template/styles, and this guide live together.</p>
`,"projects/playground/src/app/components/screens/appearance/appearance-mode-preview/README.md":`<h1>Appearance mode preview</h1>
<p>An inert miniature of Blocks Card, Tag, Icon and ProgressBar for the playground&#39;s appearance choices.</p>
<h2>Import and usage</h2>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">AppearanceModePreview</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./appearance-mode-preview/appearance-mode-preview&#x27;</span>;</code></pre>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">app-appearance-mode-preview</span> <span class="hljs-attr">mode</span>=<span class="hljs-string">&quot;light&quot;</span> /&gt;</span></code></pre>
<h2>API and appearance</h2>
<p><code>mode</code> is required and accepts <code>light</code> or <code>dark</code>. The miniature uses the selected palette&#39;s existing theme class, responds to palette/high-contrast changes, and
preserves its own color mode. The parent combines two previews for Auto.</p>
<h2>Accessibility and behavior</h2>
<p>The preview is inert, hidden from assistive technology and contains no working actions. Its parent clickable Card owns the mode action and accessible label. It
performs no animated demonstration.</p>
<h2>Playground</h2>
<p><code>/appearance</code>, in the Light, Dark and Auto choices.</p>
`,"projects/playground/src/app/components/screens/icon-catalog/README.md":`<h1>Lucide icon catalog</h1>
<p>Browse generated Lucide icons with search, official category filters, progressive rendering, and a nonmodal customization inspector. Catalog-wide preferences
survive navigation and reloads; per-icon inspector changes remain separate and last for the current visit.</p>
<h2>Import</h2>
<pre class="playground-code-block" tabindex="0" aria-label="typescript code example"><code class="hljs language-typescript"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">Icon</span>, <span class="hljs-variable constant_">LUCIDE_CATEGORIES</span>, <span class="hljs-variable constant_">LUCIDE_ICON_CATEGORIES</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/icons&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">InfiniteScrollDirective</span>, <span class="hljs-title class_">SidePanel</span>, <span class="hljs-title class_">SidePanelLayout</span>, <span class="hljs-title class_">VirtualCollection</span>, <span class="hljs-title class_">VirtualItemDirective</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/primitives&#x27;</span>;</code></pre>
<h2>Usage</h2>
<p>Open <code>/icons</code>. Search by icon identifier and select <strong>Filters</strong> for catalog size, stroke width, and the collapsible <strong>Category</strong> section. Existing Blocks chips
list all categories side by side, with a checkmark and opaque accent fill for the selected choice. Only one category is selected at a time. Activating the
selected chip retains that choice; selecting another replaces it. Reset all restores appearance and the unrestricted category default while keeping the search.
The Filters button has a plain label without an active-filter count.</p>
<p>Filters resizes from its right edge using the shared resize directive. Its initial width is 360px; the default maximum is 50% of the main-content container.
Shrinking below the original rendered width is disabled by default. Its width persists while the panel is closed/reopened during this visit. Details remains
non-resizable. Keyboard users can focus the separator and use arrows, Home/End, and Escape.</p>
<p>Select any icon for its right-side Details panel. The preview, semantic color picker, size/stroke sliders, background toggle, and Angular example update
reactively. Copy uses the exact displayed example and announces success or failure. Selecting another tile updates the current panel in place. The active tile
highlight and pressed state clear when Details closes or another panel opens. Inspector settings are retained independently per selected icon during the visit;
a new inspector starts at at least 64 pixels using the current catalog stroke width and the accent color, listed first in the color selector. Reset
customization restores those starting values.</p>
<h2>API</h2>
<p>The catalog uses public <a href="components/icon">Icon</a>,
<a href="components/side-panel">SidePanel</a>, and
<a href="components/infinite-scroll">InfiniteScrollDirective</a> APIs.</p>
<p>Generated category maps are imported directly. Runtime filtering performs lookups without name-based classification or network requests. Metadata comes from
<a href="https://github.com/lucide-icons/lucide">official Lucide source</a> through a pinned local build snapshot; the
<a href="../../../../../../../tools/icons/README.md">generator guide</a> documents synchronization.</p>
<p>Preferences use the versioned <code>blocks.icon-catalog.v1</code> local-storage record. Restore validates dimensions, stroke bounds, and current category identifiers;
malformed/unknown values fall back safely. Older records containing multiple categories restore only the first valid generated category. Writes are debounced
for 200 ms and flushed on navigation or page exit. Reset updates storage immediately. Storage denial and server rendering are supported without throwing. Search
and derived result lists are not persisted.</p>
<h2>Appearance and customization</h2>
<p>Filters and Details use the shared side-panel/modal-banner heading styles, themed leading icons through <code>headerIcon</code>, and the same compact close action.</p>
<p>All controls use Blocks components/directives and semantic spacing, color, border, radius, and responsive grid styling. Colors remain theme tokens rather than
fixed RGB values. Background customization uses the supported <code>bgColor=&quot;auto&quot;</code> icon API. Code omits default size/stroke properties and background when turned
off.</p>
<p>The catalogs use a constrained main-content viewport below the toolbar&#39;s natural-height row. SidePanelLayout contains both panels, excluding global navigation
and the toolbar without offsets or document-scroll tracking. Filters uses <code>{ &#39;2xl&#39;: &#39;push&#39; }</code>: larger screens reserve panel space and resize the virtual grid;
smaller screens use overlay mode. Details keeps its default overlay presentation. Each panel&#39;s breakpoint policy is independently configurable. Mode changes
retain the panel and its projected controls. The body scrolls independently from reachable fixed header/footer actions, including at narrow viewport widths.</p>
<h2>Behavior and accessibility</h2>
<p>The catalog initially reveals 72 icons, appending bounded batches near the bottom. VirtualCollection independently mounts a measured row window with 800-pixel
overscan, unmounts distant tiles in either direction, and restores them on return. Changing size invalidates row geometry with stable scroll anchoring; changing
stroke width updates only mounted SVGs. Grid columns recalculate when push panels, viewport widths, or zoom change. Local underfill checks continue only until
the finite result set fills the viewport or is exhausted. Search/category changes reset the reveal count, stable names track tiles, and append operations
preserve scroll position. A Show more button gives keyboard users an explicit route to the next batch. Empty results and result counts use status announcements.</p>
<p>Search matches case-insensitive partial words in any order, treating spaces, hyphens, and underscores as separators. For example, <code>arrow down</code>, <code>down arrow</code>,
and <code>arrow-down</code> find <code>arrow-down</code>; this follows the Tokens catalog&#39;s word-matching behavior.</p>
<p>A single active-panel signal coordinates Filters and Details. Closing preserves filter and inspector settings; tile highlighting is shown only while Details is
open. Panels use complementary region semantics, optional focus restoration, a close control, and Escape dismissal; the page remains interactive without focus
trapping, scroll locking, or modal semantics. Existing Blocks controls provide labeled keyboard-accessible sliders and selections. Setting information tooltips
support focus, hover, and touch tap.</p>
<p>Scroll to catalog top appears after scrolling 400 pixels past the start of the results in the actual scroll viewport, staying hidden while reading the
documentation above the catalog. Its threshold follows documentation expansion and viewport changes. It uses a Blocks tooltip without touch long-press and
respects shared reduced-motion preferences. It is aligned to the grid&#39;s actual horizontal bounds inside its positioned viewport. It remains visible beside push
panels and is hidden while an overlay panel is open to keep actions clear. Activation returns to the start of the results, leaving documentation above the
viewport. The Tokens catalog uses the same action; Utilities no longer renders it.</p>
<h2>Playground</h2>
<p>Open <code>/icons</code> from Tools. Related interactive infrastructure demos are <code>/components/side-panel</code>, <code>/components/infinite-scroll</code>, and <code>/utilities</code>.</p>
`,"projects/playground/src/app/components/screens/library-components/page-examples/README.md":`<h1>Page layout playground</h1>
<p>Interactive examples for the <a href="components/layout/page-container">Blocks page container</a>.</p>
<h2>Import</h2>
<p>The component catalog loads <code>PageExamples</code> through the page-container example.</p>
<h2>Usage</h2>
<p>Open <code>/components/layout/page-container</code>. Edit the title and description, choose a preview nesting, change the breadcrumb threshold, switch to the current
route, and toggle the footer. The footer button reports its result.</p>
<h2>API</h2>
<p>The example uses public <code>PageContainer</code>, <code>PageHeader</code>, <code>PageContent</code>, and <code>PageFooter</code> components with Blocks form controls.</p>
<h2>Appearance and customization</h2>
<p>The preview follows the current shared theme and appearance configuration. Its nested heading uses level 2.</p>
<h2>Behavior and accessibility</h2>
<p>Root and nested preview trails exercise the same threshold as automatic breadcrumbs. The footer action supports keyboard activation and announces its result.</p>
<h2>Playground</h2>
<p>Reach this example through <strong>Primitives \u2192 Layout \u2192 Page container</strong>.</p>
`,"projects/playground/src/app/components/screens/token-catalog/README.md":`<h1>Tokens page</h1>
<p>Browse and search Blocks colors, color companions, spacing, corner radii, shadows, stacking layers, effects, component properties, utility classes, and Sass
breakpoints at <code>/tokens</code>. The page uses Blocks search, multiselect, select, button, accordion, and card components. Only the first result section opens by
default. Collapse all beside Categories closes every result section. Category titles and Blocks dividers separate the matching groups; their labels follow the
category filter. With at least 48 displayed cards across expanded sections, cards mount in small batches near the viewport. Smaller displayed sets bypass
viewport observation and stay mounted. Distant batches release their component instances while preserving their measured space, and focused batches stay
mounted. Other groups mount their batch placeholders when opened. Dense cards keep shared themed styling with decorative surface effects disabled.</p>
<h2>Import</h2>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> {
    <span class="hljs-variable constant_">CSS_TOKEN_CATALOG</span>,
    <span class="hljs-variable constant_">CSS_VARIABLES</span>,
    <span class="hljs-variable constant_">CSS_VARIABLE_REFERENCES</span>,
    <span class="hljs-variable constant_">SEMANTIC_PAIRS</span>,
    <span class="hljs-variable constant_">UTILITY_CLASSES</span>,
    getComplementaryToken,
    resolveTokenToCssVar
} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/core&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">Color</span>, <span class="hljs-title class_">CssVariable</span>, <span class="hljs-title class_">CssVariableReference</span>, <span class="hljs-title class_">ICssToken</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/core&#x27;</span>;</code></pre>
<p>Sass helpers are available through <code>@filip.mazev/blocks/core/styles/helpers</code>. Install the global Blocks styles and a theme as described in the
<a href="components">Core guide</a>.</p>
<h2>Usage</h2>
<pre class="playground-code-block" tabindex="0" aria-label="scss code example"><code class="hljs language-scss"><span class="hljs-keyword">@use</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/core/styles/helpers&#x27;</span> as *;

<span class="hljs-selector-class">.notice</span> {
    <span class="hljs-attribute">padding</span>: <span class="hljs-built_in">var</span>(--bx-space-<span class="hljs-number">4</span>);
    <span class="hljs-attribute">border</span>: <span class="hljs-number">1px</span> solid <span class="hljs-built_in">var</span>(--bx-border-danger);
    <span class="hljs-attribute">border-radius</span>: <span class="hljs-built_in">var</span>(--bx-rounded-md);
    <span class="hljs-attribute">background</span>: <span class="hljs-built_in">var</span>(--bx-bg-danger);
    <span class="hljs-attribute">color</span>: <span class="hljs-built_in">var</span>(--bx-text-danger);
    <span class="hljs-attribute">box-shadow</span>: <span class="hljs-built_in">var</span>(--bx-shadow-sm);
}

<span class="hljs-keyword">@include</span> respond-up(md) {
    <span class="hljs-selector-class">.notice</span> {
        <span class="hljs-attribute">padding</span>: <span class="hljs-built_in">spacing</span>(<span class="hljs-number">6</span>);
    }
}</code></pre>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">const</span> <span class="hljs-attr">color</span>: <span class="hljs-title class_">Color</span> = <span class="hljs-string">&#x27;danger-500&#x27;</span>;
<span class="hljs-keyword">const</span> <span class="hljs-attr">reference</span>: <span class="hljs-title class_">CssVariableReference</span> = <span class="hljs-title function_">resolveTokenToCssVar</span>(color); <span class="hljs-comment">// var(--bx-color-danger-500)</span>
<span class="hljs-keyword">const</span> companion = <span class="hljs-title function_">getComplementaryToken</span>(color); <span class="hljs-comment">// danger-50</span>
<span class="hljs-keyword">const</span> <span class="hljs-attr">localOverrides</span>: <span class="hljs-keyword">readonly</span> <span class="hljs-title class_">ICssToken</span>[] = <span class="hljs-variable constant_">CSS_TOKEN_CATALOG</span>.<span class="hljs-title function_">filter</span>(<span class="hljs-function">(<span class="hljs-params">token</span>) =&gt;</span> token.<span class="hljs-property">scope</span> === <span class="hljs-string">&#x27;local&#x27;</span>);</code></pre>
<p>Use semantic roles for content that should adapt to the selected theme. <code>primary</code> and <code>accent</code> palette shades follow the chosen brand/accent palettes. Named
palettes such as <code>carbon</code>, <code>danger</code>, and <code>teal</code> expose their complete shade scales independently of the selected theme.</p>
<h2>API</h2>
<table>
<thead>
<tr>
<th>Export</th>
<th>Purpose</th>
</tr>
</thead>
<tbody><tr>
<td><code>CSS_TOKEN_CATALOG</code></td>
<td>Readonly <code>ICssToken</code> metadata for all discovered <code>--bx-*</code> variables, including declarations, fallbacks, selectors, sources, groups, and availability</td>
</tr>
<tr>
<td><code>CSS_VARIABLES</code>, <code>CSS_VARIABLE_REFERENCES</code></td>
<td>Names and <code>var(...)</code> references, with the corresponding <code>CssVariable</code> and <code>CssVariableReference</code> unions</td>
</tr>
<tr>
<td><code>SEMANTIC_COLOR_TOKENS</code>, <code>PALETTE_NAMES</code>, <code>SHADE_NUMBERS</code>, <code>COLOR_TOKENS</code></td>
<td>Supported color inputs, palettes, and shade scales</td>
</tr>
<tr>
<td><code>SEMANTIC_PAIRS</code>, <code>getComplementaryToken()</code></td>
<td>Explicit semantic companions and the shared palette/fallback companion rules</td>
</tr>
<tr>
<td><code>SPACING_VALUES</code>, <code>RADIUS_VALUES</code>, <code>SHADOW_VALUES</code>, <code>Z_INDEX_VALUES</code></td>
<td>Default Sass scale values serialized as CSS values</td>
</tr>
<tr>
<td><code>BREAKPOINTS</code></td>
<td>Numeric pixel thresholds for Sass helpers and responsive services; these are not CSS custom properties</td>
</tr>
<tr>
<td><code>UTILITY_CLASSES</code> and family arrays</td>
<td>Actual classes emitted by the global Sass entry point, including semantic color utilities</td>
</tr>
</tbody></table>
<p>Availability has explicit meaning:</p>
<ul>
<li><code>global</code>: emitted globally by the Blocks utility or accessibility styles.</li>
<li><code>theme</code>: emitted by <code>bx-theme</code>; values follow the nearest theme.</li>
<li><code>local</code>: declared or given a fallback in a component/effect; it is not necessarily available on the document root.</li>
<li><code>runtime</code>: referenced or assigned by TypeScript without a static declaration or fallback. Some are internal rendering state, not supported application
controls.</li>
</ul>
<p>The catalog is a discovery inventory, not a promise that every runtime property is a public customization API. Consult the owning feature guide before setting a
local or runtime property. A <code>var(...)</code> reference without a fallback is valid only where that variable exists.</p>
<h3>Generator and maintenance</h3>
<p>Run <code>npm run tools:generate-tokens</code> after changing Sass or variable usage. Library/playground build scripts and playground start/watch run it automatically.
<code>npm run tools:sync-theme-types</code> remains a compatibility alias. Generated data lives in Core&#39;s <code>tokens.constants.ts</code>, <code>token-catalog.constants.ts</code>, and
<code>theme-palettes.constants.ts</code>; types and interfaces are maintained in regular TypeScript files.</p>
<p><code>$theme-palettes</code> in <code>_theme-engine.scss</code> is the source of theme IDs, labels, brand/accent palette assignments and optional preview order. Swatches derive from
those palettes&#39; shade 500; theme classes derive from their IDs. <code>make-palette-theme()</code> uses the same assignments for light/dark themes. Generated
<code>THEME_PALETTE_ROLES</code> exposes the generated brand/accent assignments used to group palette colors and companions into theme sections. <code>THEME_PALETTE_IDS</code>
supplies the <code>BxThemeId</code> union, and <code>THEME_PALETTES</code> keeps the existing selector metadata contract.</p>
<p><code>tools/tokens/catalog.scss</code> exports evaluated Sass maps through a Sass custom function. The source reader compiles global styles, component/directive styles,
and effects, collects custom-property declarations (including <code>@property</code> registration) and nested <code>var()</code> fallbacks, and scans TypeScript string literals for
runtime property usage. The data helper validates palettes, emitted foundation variables, breakpoint units, and semantic pairs. The writer uses the TypeScript
AST to emit data declarations, then applies the shared ESLint/formatting pipeline before writing. No TypeScript program is maintained inside generator strings.</p>
<p>Generation reports its source-reading and per-file validation stages, elapsed time, and updated/unchanged outputs. The shared writer formats before ESLint so
large inventories avoid expensive formatter-difference processing. Unchanged files keep their modification times to avoid unnecessary watch rebuilds.</p>
<p>The inventory follows statically discoverable Blocks names. Arbitrary application-defined properties and names constructed entirely at runtime are outside its
scope; registered dynamic effect properties are included through their CSS registrations. Values come from default library Sass configuration, so applications
that configure Sass maps can have different scale values. Run <code>npm run tools:build-docs</code> to update the bundled guide.</p>
<h3>Compatibility</h3>
<p><code>meta-brand-palette</code> and <code>meta-accent-palette</code> are Sass theme metadata and are no longer included in <code>Color</code> or <code>SEMANTIC_COLOR_TOKENS</code>: <code>bx-theme</code> never
emitted CSS variables for them. Use <code>ThemingService.palette()</code> and its palette definitions for application palette metadata; use <code>primary</code>/<code>accent</code> for themed
colors. Existing CSS-variable, scale, utility, and color-helper exports remain available. Variable/reference inventories now also include local and runtime
properties; filter <code>CSS_TOKEN_CATALOG</code> by scope when building a list of globally available values.</p>
<h2>Appearance and customization</h2>
<p>Use the playground toolbar to change the palette, light/dark mode, high contrast, or appearance. Swatches and shape previews use CSS variables directly. Color
cards display the current HEX value; other global/theme cards display their current computed value and separate source defaults. Component/effect values show
their declarations and fallbacks instead of suggesting a document-level computed value. Borders are grouped with their semantic color roles; Blocks does not
currently emit a separate border-width or border-style scale.</p>
<p>Spacing and radius scales follow their numeric/source scale order. Color tiles stay compact; other tiles have wider columns and more padding. Radius samples are
large enough to distinguish the larger corners. Shadow samples use a light neutral preview canvas in both themes so the actual shadow remains visible.
Responsive Sass snippets use the playground code wrapper. Palette shades and companions are grouped together by their registered theme, such as Carbon / Cobalt;
primary/accent aliases use the short Primary / Accent heading, and remaining standalone palettes stay available separately. Trailing tags identify the current
theme, palette sections, and companion sections without long title prefixes.</p>
<h2>Behavior and accessibility</h2>
<p>Search is case insensitive and matches every entered word against names, references, category, group, scope, default/fallback values, companions, and source
paths. Changing search or categories opens only the first matching section; other sections remain available to open individually. Choose multiple categories to
include any selected family, for example Colors and Color pairs. Clear the category selection to return to All tokens; All tokens is the absence of filtering
rather than a selectable option. Search and counts cover the complete catalog regardless of which batches are mounted.</p>
<p>Each expanded group initially exposes up to two 24-token chunks. Primitives&#39; <code>InfiniteScrollDirective</code> progressively reveals another two chunks at the group
boundary, including filling a short viewport from this finite local dataset. A keyboard-accessible Show more action remains available while chunks remain.
Closing a group preserves its reveal count; changing search or categories resets the counts.</p>
<p>The shared <code>VirtualCollection</code> uses measured, bidirectional grid rows within each expanded group. Distant cards are unmounted, their height is retained with
spacers, and returning restores rows without retaining every previously visited tile. Responsive column/height changes preserve a stable scroll anchor, and a
focused row can remain mounted independently. Groups outside the overscan area retain their scroll extent without mounting their cards. This replaces the old
playground-only viewport/chunk observer. Color conversion reads only mounted items, including pinned focused rows.</p>
<p>A constrained catalog viewport occupies the content area below the top bar. The shared Scroll to catalog top action is aligned to the results width near that
viewport&#39;s bottom-right corner, scrolls that container to the start of the results, and respects reduced motion. Documentation remains above the viewport. It
has a keyboard/hover tooltip with touch long-press disabled. It appears only after scrolling 400 pixels past the start of the results, staying hidden while
reading the documentation above the catalog. Documentation expansion and viewport changes update the threshold.</p>
<p>Metadata expansion within an unloaded batch is recreated when it returns. Current color-value search uses a lazy index; ordinary browsing converts only mounted
batches. One canvas and a conversion cache are reused until theme/appearance changes. Documentation content mounts only while its section is open. Clear the
category selection to show all tokens. Blocks accordions provide heading navigation, expansion and focus restoration; source defaults and fallbacks use Blocks
collapsibles. Right-click a card, touch and hold, or use its <strong>Copy\u2026</strong> button to open a Blocks menu with the applicable copy formats. Focused cards also support
Shift + F10 and the Context Menu key. CSS references copy <code>var(--bx-\u2026)</code>; names copy only <code>--bx-\u2026</code>. HEX uses eight digits when transparency is present; RGB uses
comma-separated channels and preserves transparency with <code>rgba(...)</code>; RGBA always includes explicit alpha. Pairs copy one value per line. Non-color variables
provide CSS-reference/name actions; utility classes and Sass breakpoints provide their respective copy actions. Menu choices follow live theme colors.</p>
<p>Card text suppresses selection and iOS callouts to keep long-press gestures predictable. Source-default collapsibles retain selectable text and native selection
menus. Copy-menu rows use local themed hover/pressed fills and focus outlines without illuminating the cards or accordion sections behind the opaque menu. Copy
actions report success/failure in a live region. Search and multiselect controls use dynamic subscript sizing and reserve no empty validation row.</p>
<p>Color pairs show both named tokens and adjacent swatches. They reflect <code>getComplementaryToken()</code> exactly: explicit semantic mappings, <code>bg-surface</code> for unmapped
roles, shade 50 for palette shades above 400, and shade 900 otherwise. They do not imply a guaranteed text contrast ratio. Labels identify colors without
relying on color alone. There is no catalog animation; reduced-motion and opaque/high-contrast preferences continue through the shared Blocks controls and
styles.</p>
<h2>Playground</h2>
<p>Open <code>/tokens</code> from Tools. Search for <code>warning</code>, <code>danger</code>, <code>background</code>, <code>shadow</code>, <code>rounded</code>, <code>glass</code>, a component name, a source path, or a full CSS variable.
Choose <strong>Color pairs</strong> for the complete companion mapping, <strong>Sass breakpoints</strong> for responsive thresholds, or <strong>Utility classes</strong> for copyable class names.</p>
`,"projects/playground/src/app/components/screens/tools/README.md":`<h1>Playground tools</h1>
<p>The Tools overview groups the modal and toast configurators behind one navigation entry. Cards open the existing <code>/modal</code> and <code>/toastr</code> pages.</p>
<h2>Import</h2>
<p>The playground lazy-loads <code>Tools</code> from <code>tools.ts</code> at <code>/tools</code>.</p>
<h2>Usage</h2>
<p>Open Tools from the main navigation, then choose a configurator from its overview or open its navigation disclosure to browse the same destinations.</p>
<h2>API</h2>
<p>The overview reads the shared <code>NavigationService</code> Tools section, preserving route visibility and resolved labels. It has no component inputs or outputs.</p>
<h2>Appearance and customization</h2>
<p>Cards use Blocks surfaces, the responsive Grid component, and semantic color, spacing, and radius tokens. The active playground theme applies immediately.</p>
<h2>Behavior and accessibility</h2>
<p>Cards are native links with visible keyboard focus. The grid fits narrow containers and enlarged text. Existing configurator URLs remain unchanged.</p>
<h2>Playground</h2>
<p>Visit <code>/tools</code>, <code>/modal</code>, or <code>/toastr</code>.</p>
`,"projects/playground/src/app/components/screens/utilities/README.md":`<h1>Utilities playground</h1>
<p>Explore public Core utilities through focused interactive examples. Choose a utility from the overview or expand <strong>Core \u2192 Utilities</strong> in the sidenav. Each page
presents its demo first, then separate documentation and source tabs. The <a href="components">Core guide</a> remains the entry-point
reference.</p>
<h2>Import</h2>
<pre class="playground-code-block" tabindex="0" aria-label="typescript code example"><code class="hljs language-typescript"><span class="hljs-keyword">import</span> {
    <span class="hljs-title class_">DeviceTypeService</span>,
    findScrollContainer,
    measureScrollBoundary,
    observeScrollBoundary,
    <span class="hljs-title class_">ScrollLockService</span>,
    uuidv4,
    <span class="hljs-title class_">WindowDimensionsService</span>
} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">InfiniteScrollDirective</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/primitives&#x27;</span>;</code></pre>
<p>Services are provided in root; import the standalone scroll detector where used. Each utility guide documents its public imports, configuration, lifecycle, and
supporting types.</p>
<h2>Usage</h2>
<p>Search <code>/utilities</code> by utility or API name, then follow <strong>Explore utility</strong>. Direct URLs are supported, and the sidenav exposes the same six pages.</p>
<table>
<thead>
<tr>
<th>Utility</th>
<th>Playground</th>
<th>Guide</th>
</tr>
</thead>
<tbody><tr>
<td>Viewport and breakpoints</td>
<td><code>/utilities/viewport</code></td>
<td><a href="utilities/viewport">Viewport guide</a></td>
</tr>
<tr>
<td>Device detection</td>
<td><code>/utilities/device</code></td>
<td><a href="utilities/device">Device guide</a></td>
</tr>
<tr>
<td>Shared scroll locking</td>
<td><code>/utilities/scroll-lock</code></td>
<td><a href="utilities/scroll-lock">Scroll-lock guide</a></td>
</tr>
<tr>
<td>Stable identifiers</td>
<td><code>/utilities/identifiers</code></td>
<td><a href="utilities/identifiers">Identifier guide</a></td>
</tr>
<tr>
<td>Color-token helpers</td>
<td><code>/utilities/color-tokens</code></td>
<td><a href="utilities/color-tokens">Color-token guide</a></td>
</tr>
<tr>
<td>Overlay positioning</td>
<td><code>/utilities/overlay-positioning</code></td>
<td><a href="utilities/overlay-positioning">Overlay guide</a></td>
</tr>
</tbody></table>
<h2>API</h2>
<h3>Scroll boundaries</h3>
<p>The overview includes an interactive local scroll container with configurable batch size and height. It uses <code>InfiniteScrollDirective</code> to progressively expose
rows and reports boundary-event counts and measured overflow. The accompanying shared load-more demo shows asynchronous loading, retained-content failure, and
explicit retry through success. See the <a href="components/infinite-scroll">detector guide</a> and
<code>/components/infinite-scroll</code>.</p>
<table>
<thead>
<tr>
<th>API</th>
<th>Behavior</th>
</tr>
</thead>
<tbody><tr>
<td><code>findScrollContainer(element)</code></td>
<td>Finds the nearest vertical scrolling ancestor or the document viewport</td>
</tr>
<tr>
<td><code>measureScrollBoundary(content, container?, endOffset?)</code></td>
<td>Returns distance, overflow, and viewport height without changing scroll position</td>
</tr>
<tr>
<td><code>observeScrollBoundary(content, container, onScroll, onResize)</code></td>
<td>Passive scroll/geometry observation; returns mandatory cleanup</td>
</tr>
<tr>
<td><code>IScrollBoundary</code></td>
<td>Typed measurement contract in CSS pixels</td>
</tr>
</tbody></table>
<p>The <a href="components/virtual-collection">virtual collection guide</a> and <code>/components/virtual-collection</code> demonstrate
bidirectional list/grid rendering, dynamic heights, column changes, and programmatic scrolling. Scroll to top is available on Icons and Tokens, inside their own
content viewports.</p>
<h3>Coverage audit</h3>
<table>
<thead>
<tr>
<th>Utilities</th>
<th>Interactive coverage</th>
</tr>
</thead>
<tbody><tr>
<td><code>WindowDimensionsService</code>, <code>BREAKPOINTS</code></td>
<td>Live CSS-pixel dimensions, shared breakpoint tags, range queries, responsive columns</td>
</tr>
<tr>
<td><code>DeviceTypeService</code>, device/OS contracts</td>
<td>Device identity, platform flags, orientation events, explicit refresh</td>
</tr>
<tr>
<td><code>ScrollLockService</code>, <code>IScrollLockConfig</code></td>
<td>Independent owners, remaining-owner behavior, release actions, navigation cleanup</td>
</tr>
<tr>
<td>Scroll-boundary directive and helpers</td>
<td>Local batch/height controls, overflow status, asynchronous fallback/retry example; linked virtual collection coverage</td>
</tr>
<tr>
<td><code>uuidv4()</code></td>
<td>Regenerated UUID and stable instance ID comparison</td>
</tr>
<tr>
<td>Color-token helpers, <code>resolveThemeId()</code></td>
<td>Semantic/palette selection, CSS reference, complementary/inverted tokens, saved palette validation</td>
</tr>
<tr>
<td><code>BxOverlayPositionService</code>, origin/theme helpers</td>
<td>Preferred placement, viewport fallback, tracked origin, inherited theme, teardown</td>
</tr>
</tbody></table>
<p>The <a href="tokens">token catalog</a> at <code>/tokens</code> covers <code>CSS_TOKEN_CATALOG</code>, CSS reference types, utility classes, foundation scales, and all color
companions. Focused color-helper examples live in the utilities section above.</p>
<p>Other public utilities retain their established guides:</p>
<table>
<thead>
<tr>
<th>Utilities</th>
<th>Existing coverage</th>
</tr>
</thead>
<tbody><tr>
<td><code>ThemingService</code>, appearance/palette configuration</td>
<td><a href="appearance">Appearance</a>, <code>/appearance</code></td>
</tr>
<tr>
<td><code>BxA11yService</code> and reduced motion</td>
<td><a href="appearance#behavior-and-accessibility">Appearance accessibility preferences</a>, <code>/appearance</code></td>
</tr>
<tr>
<td><code>BxShortcutService</code>, shortcut helpers and contracts</td>
<td><a href="components/menu-item">Menu item</a>, <code>/components/menu-item</code></td>
</tr>
<tr>
<td><code>BX_I18N</code>, <code>ResolvableText</code>, <code>resolveText()</code>, <code>isTextWithKey()</code></td>
<td><a href="components#translation-and-overlays">Core translation integration</a> and <a href="components/signal-forms">Forms</a></td>
</tr>
<tr>
<td>Form state/defaults, <code>BxBaseControl</code>, <code>FormSettingsService</code></td>
<td><a href="components/signal-forms">Forms</a> and <a href="components/truncate">Truncate</a></td>
</tr>
<tr>
<td>Navigation, modal, notification and effects services</td>
<td>Their <a href="../../../../../../blocks/navigation/README.md">Navigation</a>, <a href="modal">Modal</a>, <a href="toastr">Toastr</a>, and <a href="components/surface">Effects</a> guides</td>
</tr>
</tbody></table>
<p>Internal coordination services, implementation classes, and type-only contracts do not receive separate playground pages.</p>
<h2>Appearance and customization</h2>
<p>The overview uses Blocks search, cards, grids, stacks, tags, icons, links styled as buttons, and alerts. Every demo uses public Blocks controls and shared theme
styles. Layouts shrink and wrap for narrow containers, zoom, and long content. Semantic HTML remains in use for headings, descriptions, definition lists, and
outputs.</p>
<h2>Behavior and accessibility</h2>
<p>Each utility loads independently. Leaving a demo tears down its owned listeners, scroll locks, and overlays. No demo changes global appearance preferences.
Interactive controls use Blocks keyboard and focus behavior, while status changes and generated identifiers use polite announcements. Viewport resizing avoids
repeated live announcements.</p>
<p>The overview and detail pages share <code>PageContainer</code> gutters and headings. Detail pages use automatic breadcrumbs to return to Utilities.</p>
<h2>Playground</h2>
<p>Open <code>/utilities</code> from <strong>Core \u2192 Utilities</strong>. Expand its sidenav item for all six utility pages, or use the overview search and links. On each page, the
interactive example precedes the documentation and source tabs.</p>
`,"projects/playground/src/app/components/screens/utilities/components/color-tokens/README.md":`<h1>Color-token helpers</h1>
<p>Map typed colors to CSS references and inspect companion, inversion, and palette-validation helpers.</p>
<h2>Import</h2>
<pre class="playground-code-block" tabindex="0" aria-label="typescript code example"><code class="hljs language-typescript"><span class="hljs-keyword">import</span> { getComplementaryToken, invertPaletteToken, isPaletteToken, isThemedColor, resolveThemeId, resolveTokenToCssVar } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/core&#x27;</span>;</code></pre>
<h2>Usage</h2>
<pre class="playground-code-block" tabindex="0" aria-label="typescript code example"><code class="hljs language-typescript"><span class="hljs-title function_">resolveTokenToCssVar</span>(<span class="hljs-string">&#x27;primary&#x27;</span>); <span class="hljs-comment">// var(--bx-primary)</span>
<span class="hljs-title function_">resolveTokenToCssVar</span>(<span class="hljs-string">&#x27;orange-500&#x27;</span>); <span class="hljs-comment">// var(--bx-color-orange-500)</span>
<span class="hljs-title function_">getComplementaryToken</span>(<span class="hljs-string">&#x27;text-primary&#x27;</span>); <span class="hljs-comment">// bg-element</span>
<span class="hljs-title function_">getComplementaryToken</span>(<span class="hljs-string">&#x27;orange-500&#x27;</span>); <span class="hljs-comment">// orange-50</span>
<span class="hljs-title function_">invertPaletteToken</span>(<span class="hljs-string">&#x27;blue-100&#x27;</span>); <span class="hljs-comment">// blue-900</span>
<span class="hljs-title function_">isPaletteToken</span>(<span class="hljs-string">&#x27;primary&#x27;</span>); <span class="hljs-comment">// false</span>
<span class="hljs-title function_">isThemedColor</span>({ <span class="hljs-attr">light</span>: <span class="hljs-string">&#x27;primary&#x27;</span>, <span class="hljs-attr">dark</span>: <span class="hljs-string">&#x27;accent&#x27;</span> }); <span class="hljs-comment">// true</span>
<span class="hljs-title function_">resolveThemeId</span>(<span class="hljs-string">&#x27;carbon-cobalt&#x27;</span>); <span class="hljs-comment">// carbon-cobalt</span>
<span class="hljs-title function_">resolveThemeId</span>(<span class="hljs-string">&#x27;retired-palette&#x27;</span>); <span class="hljs-comment">// undefined</span></code></pre>
<h2>API</h2>
<table>
<thead>
<tr>
<th>Helper</th>
<th>Behavior</th>
</tr>
</thead>
<tbody><tr>
<td><code>resolveTokenToCssVar(token)</code></td>
<td>Maps a typed semantic or palette color to a CSS <code>var(...)</code> reference; it does not resolve an RGB value</td>
</tr>
<tr>
<td><code>isPaletteToken(token)</code></td>
<td>Recognizes supported palette names and numeric shades; accepts typed <code>Color</code> values</td>
</tr>
<tr>
<td><code>getComplementaryToken(token)</code></td>
<td>Looks up semantic pairs (falling back to <code>bg-surface</code>) or chooses palette shade 50 for shades above 400, otherwise 900</td>
</tr>
<tr>
<td><code>invertPaletteToken(token)</code></td>
<td>Mirrors a palette shade, including 50\u2192900 and 1000\u219250; leaves semantic tokens or unsupported results unchanged</td>
</tr>
<tr>
<td><code>isThemedColor(value)</code></td>
<td>Narrows non-null objects with a <code>light</code> member; does not validate individual token values or choose a theme</td>
</tr>
<tr>
<td><code>resolveThemeId(value)</code></td>
<td>Accepts current palette IDs; returns undefined for absent, unknown or retired IDs</td>
</tr>
</tbody></table>
<p>These helpers do not guarantee contrast. <code>Color</code>, <code>ThemeColorToken</code>, <code>SemanticColorToken</code>, and <code>ThemedColor</code> describe typed consumer configuration. Prefer
semantic tokens for values that should follow theme and palette changes.</p>
<h2>Appearance and customization</h2>
<p>The interactive example uses public Blocks components, semantic theme variables, and shared spacing and responsive helpers. It follows the active playground
appearance. Open the source tab for the component and template.</p>
<h2>Behavior and accessibility</h2>
<p>The Blocks select updates every helper result reactively. Change the active playground theme to see semantic CSS variables update the decorative swatch; every
result is also shown as text.</p>
<p>Browse the <a href="tokens">complete token catalog</a> at <code>/tokens</code> for all CSS variables, companions, scales, and utility classes. Companion
mappings do not guarantee contrast.</p>
<h2>Playground</h2>
<p>Open <code>/utilities/color-tokens</code> from <strong>Core \u2192 Utilities \u2192 Color-token helpers</strong>. The demo appears first, followed by separate documentation and code tabs.</p>
<p>Return to the <a href="utilities">utilities overview</a> for the coverage audit and related feature guides.</p>
`,"projects/playground/src/app/components/screens/utilities/components/device/README.md":`<h1>Device detection</h1>
<p>Inspect browser device identity, operating-system hints, and screen orientation with <code>DeviceTypeService</code>.</p>
<h2>Import</h2>
<pre class="playground-code-block" tabindex="0" aria-label="typescript code example"><code class="hljs language-typescript"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">DeviceTypeService</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/core&#x27;</span>;</code></pre>
<h2>Usage</h2>
<pre class="playground-code-block" tabindex="0" aria-label="typescript code example"><code class="hljs language-typescript"><span class="hljs-keyword">import</span> { inject } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;

<span class="hljs-keyword">import</span> { <span class="hljs-title class_">DeviceTypeService</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/core&#x27;</span>;

<span class="hljs-keyword">const</span> deviceTypeService = <span class="hljs-title function_">inject</span>(<span class="hljs-title class_">DeviceTypeService</span>);
<span class="hljs-keyword">const</span> state = deviceTypeService.<span class="hljs-title function_">getDeviceState</span>();
<span class="hljs-keyword">const</span> isAppleDevice = state.<span class="hljs-property">isAppleDevice</span>;
<span class="hljs-keyword">const</span> landscape = state.<span class="hljs-title function_">isLandscapeOrientation</span>();</code></pre>
<p>Call <code>inject()</code> in an Angular injection context. Store the snapshot in a signal and refresh it from browser events when the view needs live updates.</p>
<h2>API</h2>
<p><code>getDeviceState(): IDeviceState</code> returns a snapshot of mobile/tablet/desktop and OS detection based on browser identity, including iPadOS desktop identity with
touch hardware. It exposes <code>isDesktop</code>, <code>isMobile</code>, <code>isTablet</code>, <code>desktopOS</code>, <code>mobileOS</code>, <code>isAppleDevice</code>, <code>isAndroidDevice</code>, <code>isWindowsDesktop</code>,
<code>isLinuxOrUnixDesktop</code>, and <code>isUnknownMobileDevice</code>.</p>
<p><code>isLandscapeOrientation()</code> and <code>isPortraitOrientation()</code> are available on both the service and the returned state. They read the latest tracked <strong>screen</strong>
orientation. They are ordinary methods, not Angular signals. This page refreshes its snapshot on Screen Orientation change events and offers an explicit refresh
action. Without that browser API, the service initializes orientation from a media query; live screen rotation is not tracked there.</p>
<p>Viewport resizing does not change device categories. Device detection is heuristic and browser identity can be overridden. Use capabilities for interaction
decisions and viewport signals for layout. During SSR, identity is unavailable: the current fallback reports desktop/unknown OS and portrait orientation.</p>
<h2>Appearance and customization</h2>
<p>The interactive example uses public Blocks components, semantic theme variables, and shared spacing and responsive helpers. It follows the active playground
appearance. Open the source tab for the component and template.</p>
<h2>Behavior and accessibility</h2>
<p>The demo uses Blocks cards, a tag, and a refresh button. Screen Orientation change events refresh the OnPush snapshot and the subscription is removed on
destruction.</p>
<p>Resizing does not change browser identity. Detection is heuristic; prefer capability checks for interaction decisions and viewport signals for layout.</p>
<h2>Playground</h2>
<p>Open <code>/utilities/device</code> from <strong>Core \u2192 Utilities \u2192 Device detection</strong>. The demo appears first, followed by separate documentation and code tabs.</p>
<p>Return to the <a href="utilities">utilities overview</a> for the coverage audit and related feature guides.</p>
`,"projects/playground/src/app/components/screens/utilities/components/identifiers/README.md":`<h1>Stable identifiers</h1>
<p>Create version-4 UUIDs for controls, overlays, and stable shared-resource ownership.</p>
<h2>Import</h2>
<pre class="playground-code-block" tabindex="0" aria-label="typescript code example"><code class="hljs language-typescript"><span class="hljs-keyword">import</span> { uuidv4 } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/core&#x27;</span>;</code></pre>
<h2>Usage</h2>
<pre class="playground-code-block" tabindex="0" aria-label="typescript code example"><code class="hljs language-typescript"><span class="hljs-keyword">import</span> { uuidv4 } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/core&#x27;</span>;

<span class="hljs-keyword">const</span> <span class="hljs-attr">ownerId</span>: <span class="hljs-built_in">string</span> = <span class="hljs-title function_">uuidv4</span>();
<span class="hljs-comment">// Reuse ownerId for acquisition and cleanup throughout this instance&#x27;s lifetime.</span></code></pre>
<h2>API</h2>
<p><code>uuidv4(): string</code> uses <code>crypto.getRandomValues()</code> to generate a version-4 UUID. It requires that runtime API. Generate once per owning instance; avoid calling
it from templates or computed values that may regenerate an owner ID. Coordinate server/client IDs explicitly when stable hydration identity is required.</p>
<h2>Appearance and customization</h2>
<p>The interactive example uses public Blocks components, semantic theme variables, and shared spacing and responsive helpers. It follows the active playground
appearance. Open the source tab for the component and template.</p>
<h2>Behavior and accessibility</h2>
<p>The Blocks button generates a fresh preview UUID. A separate instance ID remains unchanged for comparison. Updated previews are announced politely, and long
values wrap on narrow screens.</p>
<p>The helper needs <code>crypto.getRandomValues()</code>. Coordinate server/client IDs explicitly when hydration requires the same identity.</p>
<h2>Playground</h2>
<p>Open <code>/utilities/identifiers</code> from <strong>Core \u2192 Utilities \u2192 Stable identifiers</strong>. The demo appears first, followed by separate documentation and code tabs.</p>
<p>Return to the <a href="utilities">utilities overview</a> for the coverage audit and related feature guides.</p>
`,"projects/playground/src/app/components/screens/utilities/components/overlay-positioning/README.md":`<h1>Overlay positioning</h1>
<p>Extend Blocks overlays with shared connected positioning, visibility tracking, and live theme inheritance.</p>
<h2>Import</h2>
<pre class="playground-code-block" tabindex="0" aria-label="typescript code example"><code class="hljs language-typescript"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">BxOverlayPositionService</span>, inheritOverlayTheme, isOverlayOriginVisible, trackOverlayOrigin } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/core&#x27;</span>;</code></pre>
<h2>Usage</h2>
<pre class="playground-code-block" tabindex="0" aria-label="typescript code example"><code class="hljs language-typescript"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">Overlay</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/cdk/overlay&#x27;</span>;
<span class="hljs-keyword">import</span> { inject } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;

<span class="hljs-keyword">import</span> { <span class="hljs-title class_">BxOverlayPositionService</span>, inheritOverlayTheme, trackOverlayOrigin } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/core&#x27;</span>;

<span class="hljs-keyword">const</span> overlay = <span class="hljs-title function_">inject</span>(<span class="hljs-title class_">Overlay</span>);
<span class="hljs-keyword">const</span> bxOverlayPositionService = <span class="hljs-title function_">inject</span>(<span class="hljs-title class_">BxOverlayPositionService</span>);

<span class="hljs-comment">// Run after the origin is rendered and attach a portal before tracking.</span>
<span class="hljs-keyword">function</span> <span class="hljs-title function_">attachPreview</span>(<span class="hljs-params"><span class="hljs-attr">origin</span>: <span class="hljs-title class_">HTMLElement</span></span>) {
    <span class="hljs-keyword">const</span> overlayRef = overlay.<span class="hljs-title function_">create</span>({
        <span class="hljs-attr">positionStrategy</span>: bxOverlayPositionService.<span class="hljs-title function_">getElementStrategy</span>(origin, <span class="hljs-string">&#x27;bottom&#x27;</span>),
        <span class="hljs-attr">scrollStrategy</span>: overlay.<span class="hljs-property">scrollStrategies</span>.<span class="hljs-title function_">noop</span>()
    });

    <span class="hljs-keyword">return</span> overlayRef;
}</code></pre>
<p>The complete demo source shows portal attachment, theme inheritance, origin tracking, outside-pointer/Escape dismissal, and destruction cleanup.</p>
<h2>API</h2>
<table>
<thead>
<tr>
<th>Utility</th>
<th>Contract</th>
</tr>
</thead>
<tbody><tr>
<td><code>getElementStrategy(element, placement, offset = 8)</code></td>
<td>Connected CDK strategy with alternative sides, viewport push and an 8 CSS-pixel viewport margin</td>
</tr>
<tr>
<td><code>getSubmenuStrategy(element, side, offset = 4)</code></td>
<td>Physical left/right preference with opposite-side fallback and fixed dimensions</td>
</tr>
<tr>
<td><code>getCoordinateStrategy(x, y)</code></td>
<td>Client-coordinate anchor, initially below with a 2 CSS-pixel offset, then fallback positions</td>
</tr>
<tr>
<td><code>trackOverlayOrigin(overlay, origin, options?)</code></td>
<td>Tracks an attached connected overlay with native anchoring where available, otherwise measured fallback; returns callable cleanup with <code>reposition()</code></td>
</tr>
<tr>
<td><code>isOverlayOriginVisible(origin)</code></td>
<td>Checks viewport intersection and clipping ancestors; disconnected or zero-size origins return false</td>
</tr>
<tr>
<td><code>inheritOverlayTheme(source, pane)</code></td>
<td>Copies inherited theme/appearance context and observes relevant scope attributes; returns observer cleanup</td>
</tr>
</tbody></table>
<p><code>IOverlayOriginOptions</code> can disable native anchoring with <code>nativeAnchoring: false</code>, run <code>onPosition</code> after positioning, or run <code>onOriginHidden</code> when the anchor
leaves view. The owner decides whether to dismiss. Attach content before tracking so size measurement is meaningful. Call both returned cleanup functions before
disposing the overlay; the owner also cleans up its subscriptions and portal.</p>
<p>Top-layer popovers always use synchronous measured CDK positioning, including when native CSS anchors are available. This prevents a frame of drift while a
nested ancestor scrolls. The returned lifecycle and visibility callbacks work the same way in both paths.</p>
<p>The demo is an informational preview with focus kept on its trigger. It directly uses an element strategy, visibility guard, origin tracker and inherited theme.
Coordinate and submenu strategies are documented extension points; ready-made
<a href="components/context-menu">Context menu</a> and
<a href="components/menu">Menu</a> demonstrate their intended interactions. Prefer the public overlay components and
directives when their existing focus, dismissal and accessibility behavior meets your needs.</p>
<h2>Appearance and customization</h2>
<p>The interactive example uses public Blocks components, semantic theme variables, and shared spacing and responsive helpers. It follows the active playground
appearance. Open the source tab for the component and template.</p>
<h2>Behavior and accessibility</h2>
<p>Use the Blocks select and trigger to try each preferred side. Toggle <strong>Use top layer</strong> to compare the native-anchor and measured positioning paths; changing the
toggle closes an open preview. The preview is a Blocks card constrained to the viewport, with scrollable content at larger text sizes. It inherits mounted theme
and appearance changes.</p>
<p>Focus stays on the trigger. Escape, blur, outside pointer events, a hidden origin, and navigation close the preview. Reduced-motion and opaque appearances
follow the shared Blocks surface behavior.</p>
<h2>Playground</h2>
<p>Open <code>/utilities/overlay-positioning</code> from <strong>Core \u2192 Utilities \u2192 Overlay positioning</strong>. The demo appears first, followed by separate documentation and code tabs.</p>
<p>Return to the <a href="utilities">utilities overview</a> for the coverage audit and related feature guides.</p>
`,"projects/playground/src/app/components/screens/utilities/components/scroll-lock/README.md":`<h1>Shared scroll locking</h1>
<p>Coordinate page scroll locks across multiple owners without releasing another component&#39;s lock.</p>
<h2>Import</h2>
<pre class="playground-code-block" tabindex="0" aria-label="typescript code example"><code class="hljs language-typescript"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">ScrollLockService</span>, uuidv4 } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/core&#x27;</span>;</code></pre>
<h2>Usage</h2>
<pre class="playground-code-block" tabindex="0" aria-label="typescript code example"><code class="hljs language-typescript"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">ChangeDetectionStrategy</span>, <span class="hljs-title class_">Component</span>, <span class="hljs-title class_">DestroyRef</span>, inject } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;

<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ScrollLockService</span>, uuidv4 } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Button</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/forms&#x27;</span>;

<span class="hljs-meta">@Component</span>({
    <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;app-scroll-lock-example&#x27;</span>,
    <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">Button</span>],
    <span class="hljs-attr">template</span>: <span class="hljs-string">\`
        &lt;button bx-button type=&quot;button&quot; (click)=&quot;lock()&quot;&gt;Lock page&lt;/button&gt;
        &lt;button bx-button type=&quot;button&quot; (click)=&quot;unlock()&quot;&gt;Release my lock&lt;/button&gt;
    \`</span>,
    <span class="hljs-attr">changeDetection</span>: <span class="hljs-title class_">ChangeDetectionStrategy</span>.<span class="hljs-property">OnPush</span>
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">ScrollLockExample</span> {
    <span class="hljs-keyword">private</span> <span class="hljs-keyword">readonly</span> scrollLockService = <span class="hljs-title function_">inject</span>(<span class="hljs-title class_">ScrollLockService</span>);
    <span class="hljs-keyword">private</span> <span class="hljs-keyword">readonly</span> <span class="hljs-attr">lockId</span>: <span class="hljs-built_in">string</span> = <span class="hljs-title function_">uuidv4</span>();

    <span class="hljs-title function_">constructor</span>(<span class="hljs-params"></span>) {
        <span class="hljs-title function_">inject</span>(<span class="hljs-title class_">DestroyRef</span>).<span class="hljs-title function_">onDestroy</span>(<span class="hljs-function">() =&gt;</span> <span class="hljs-variable language_">this</span>.<span class="hljs-title function_">unlock</span>());
    }

    <span class="hljs-keyword">protected</span> <span class="hljs-title function_">lock</span>(): <span class="hljs-built_in">void</span> {
        <span class="hljs-variable language_">this</span>.<span class="hljs-property">scrollLockService</span>.<span class="hljs-title function_">disableScroll</span>(<span class="hljs-variable language_">this</span>.<span class="hljs-property">lockId</span>, { <span class="hljs-attr">handleTouchInput</span>: <span class="hljs-literal">false</span> });
    }

    <span class="hljs-keyword">protected</span> <span class="hljs-title function_">unlock</span>(): <span class="hljs-built_in">void</span> {
        <span class="hljs-variable language_">this</span>.<span class="hljs-property">scrollLockService</span>.<span class="hljs-title function_">enableScroll</span>(<span class="hljs-variable language_">this</span>.<span class="hljs-property">lockId</span>);
    }
}</code></pre>
<p>Keep release actions reachable while the page is locked. Release on close and presentation changes as well as destruction. Repeated acquisition with the same ID
updates that owner&#39;s lock. Releasing an unknown ID does nothing, and releasing your ID preserves other owners&#39; locks.</p>
<h2>API</h2>
<p><code>isScrollDisabled()</code> is a readonly signal indicating that any owner holds a lock. Observe it instead of writing to the backing signal.
<code>disableScroll(id, config)</code> requires an owner ID and configuration; <code>enableScroll(id)</code> releases that owner. The legacy optional second argument to
<code>enableScroll</code> is accepted but does not change final cleanup.</p>
<table>
<thead>
<tr>
<th><code>IScrollLockConfig</code> member</th>
<th>Purpose</th>
</tr>
</thead>
<tbody><tr>
<td><code>handleTouchInput</code></td>
<td><code>false</code> preserves touch gestures; <code>true</code> enables touchmove prevention. Omission still applies <code>touch-action: none</code>, without adding a touchmove listener by itself</td>
</tr>
<tr>
<td><code>allowTouchInputOn</code></td>
<td>Elements whose descendants may receive touch input; absent/empty lists permit targets through the touchmove handler</td>
</tr>
<tr>
<td><code>mobileOnlyTouchPrevention</code></td>
<td>Limits the touchmove handler to detected mobile devices; tablets use their separate category</td>
</tr>
<tr>
<td><code>handleExtremeOverflow</code></td>
<td>Adds global wheel/scroll prevention listeners; leave unset for ordinary pages and panels</td>
</tr>
<tr>
<td><code>animationDuration</code></td>
<td>Milliseconds before installing prevention listeners, plus the service&#39;s 10 ms coordination delay; omitted means zero before that delay</td>
</tr>
</tbody></table>
<p>Any active owner requesting touch/extreme prevention keeps it enabled. Touch allow-list details follow the most recently inserted owner whose <code>handleTouchInput</code>
is not false; reacquiring an existing ID updates its options without changing its insertion order. The maximum active animation duration controls listener
installation. Original inline body overflow, right padding, touch action and priorities are restored after the final lock releases.</p>
<p>The demo uses <code>{ handleTouchInput: false }</code> for both owners so touch users can reach every action. It does not enable extreme overflow handling. Lock
acquisition and release are no-ops during SSR.</p>
<h2>Appearance and customization</h2>
<p>The interactive example uses public Blocks components, semantic theme variables, and shared spacing and responsive helpers. It follows the active playground
appearance. Open the source tab for the component and template.</p>
<h2>Behavior and accessibility</h2>
<p>The compact Blocks control panel exposes pressed-state buttons for both owner cards. Acquire both locks and release one to inspect remaining-owner behavior. The
shared status is announced politely.</p>
<p>Before acquiring the first lock, the demo brings its controls into view without animation or moving focus. The panel is constrained to the viewport and can
scroll internally when text is enlarged. Touch gestures remain enabled and release actions stay reachable. Navigating to another utility releases both demo
locks. Locks held by navigation or other overlays remain active.</p>
<h2>Playground</h2>
<p>Open <code>/utilities/scroll-lock</code> from <strong>Core \u2192 Utilities \u2192 Shared scroll locking</strong>. The demo appears first, followed by separate documentation and code tabs.</p>
<p>Return to the <a href="utilities">utilities overview</a> for the coverage audit and related feature guides.</p>
`,"projects/playground/src/app/components/screens/utilities/components/utility-page/README.md":`<h1>Utility page layout</h1>
<p>Shared playground presentation for the six <a href="utilities">utility examples</a>. Route metadata selects the title, public API summary, guide, and source files.
The nested router outlet loads the selected example independently. Every page presents the demo above the documentation and code tabs.</p>
<h2>Import</h2>
<p>Routes lazy-load <code>UtilityPage</code> from <code>@playground/components/screens/utilities/components/utility-page/utility-page</code>.</p>
<h2>Usage</h2>
<p>Register utility metadata in <code>constants/utility-catalog.constants.ts</code>. The <code>/utilities</code> route uses this catalog for child routes, sidenav entries, and overview
cards.</p>
<h2>API</h2>
<p><code>IUtilityExample</code> connects each route ID, title, description, icon, public symbol, README, and lazy demo loader. Supporting declarations stay under the
utilities screen&#39;s category folders.</p>
<h2>Appearance and customization</h2>
<p>The layout uses the shared Blocks PageContainer, automatic breadcrumbs, stacks, dividers, and component-info documentation tabs. The container resolves section
and page titles through NavigationService; descriptions come from the utility catalog. Shared semantic tokens keep it consistent with the active playground
appearance.</p>
<h2>Behavior and accessibility</h2>
<p>A single page heading labels the article. Named demo and documentation sections appear in reading order. Each example owns cleanup of its resources.</p>
<h2>Playground</h2>
<p>Reach this layout through any <code>/utilities/&lt;utility&gt;</code> route, such as <code>/utilities/viewport</code>.</p>
`,"projects/playground/src/app/components/screens/utilities/components/viewport/README.md":`<h1>Viewport and breakpoints</h1>
<p>Build responsive layouts with live viewport signals and the shared Blocks breakpoint scale.</p>
<h2>Import</h2>
<pre class="playground-code-block" tabindex="0" aria-label="typescript code example"><code class="hljs language-typescript"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">WindowDimensionsService</span>, <span class="hljs-variable constant_">BREAKPOINTS</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/core&#x27;</span>;</code></pre>
<h2>Usage</h2>
<pre class="playground-code-block" tabindex="0" aria-label="typescript code example"><code class="hljs language-typescript"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">Signal</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;

<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ChangeDetectionStrategy</span>, <span class="hljs-title class_">Component</span>, computed, inject } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;

<span class="hljs-keyword">import</span> { <span class="hljs-title class_">WindowDimensionsService</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/core&#x27;</span>;

<span class="hljs-meta">@Component</span>({
    <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;app-responsive-summary&#x27;</span>,
    <span class="hljs-attr">template</span>: <span class="hljs-string">&#x27;&lt;p&gt;{{ width() }} CSS pixels \xB7 {{ columns() }} columns&lt;/p&gt;&#x27;</span>,
    <span class="hljs-attr">changeDetection</span>: <span class="hljs-title class_">ChangeDetectionStrategy</span>.<span class="hljs-property">OnPush</span>
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">ResponsiveSummary</span> {
    <span class="hljs-keyword">private</span> <span class="hljs-keyword">readonly</span> windowDimensionsService = <span class="hljs-title function_">inject</span>(<span class="hljs-title class_">WindowDimensionsService</span>);

    <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> <span class="hljs-attr">width</span>: <span class="hljs-title class_">Signal</span>&lt;<span class="hljs-built_in">number</span>&gt; = <span class="hljs-title function_">computed</span>(<span class="hljs-function">() =&gt;</span> <span class="hljs-variable language_">this</span>.<span class="hljs-property">windowDimensionsService</span>.<span class="hljs-title function_">dimensions</span>().<span class="hljs-property">width</span>);
    <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> <span class="hljs-attr">columns</span>: <span class="hljs-title class_">Signal</span>&lt;<span class="hljs-built_in">number</span>&gt; = <span class="hljs-title function_">computed</span>(<span class="hljs-function">() =&gt;</span> <span class="hljs-variable language_">this</span>.<span class="hljs-property">windowDimensionsService</span>.<span class="hljs-title function_">resolveResponsiveValue</span>({ <span class="hljs-attr">md</span>: <span class="hljs-number">2</span>, <span class="hljs-attr">xl</span>: <span class="hljs-number">3</span> }, <span class="hljs-number">1</span>));
}</code></pre>
<h2>API</h2>
<table>
<thead>
<tr>
<th>Member</th>
<th>Behavior</th>
</tr>
</thead>
<tbody><tr>
<td><code>dimensions(): IWindowDimensions</code></td>
<td>Readonly signal with <code>width</code> and <code>height</code> in CSS pixels; resize updates are coalesced to animation frames</td>
</tr>
<tr>
<td><code>breakpoints</code> / <code>BREAKPOINTS</code></td>
<td>Shared minimums: xs 360, sm 640, md 768, lg 1024, xl 1280, 2xl 1536, 3xl 1920, 4xl 2560</td>
</tr>
<tr>
<td><code>currentBreakpoint()</code></td>
<td>Largest matching breakpoint; widths below 360 still report <code>xs</code>; undefined during SSR</td>
</tr>
<tr>
<td><code>currentBreakpointValue()</code></td>
<td>Minimum for the reported breakpoint, not the actual viewport width; undefined during SSR</td>
</tr>
<tr>
<td><code>isBelow(key)</code> / <code>isAtLeast(key)</code></td>
<td>Strict upper bound / inclusive lower bound</td>
</tr>
<tr>
<td><code>isBetween(min, max)</code></td>
<td>Inclusive minimum and exclusive maximum</td>
</tr>
<tr>
<td><code>resolveResponsiveValue&lt;T&gt;(values, fallback)</code></td>
<td>Value at the highest configured matching breakpoint, otherwise the fallback; always the fallback during SSR</td>
</tr>
<tr>
<td><code>isBrowser</code></td>
<td>Whether browser viewport observation is available</td>
</tr>
</tbody></table>
<p>Convenience signals cover <code>isXsMobile</code> (below sm), <code>isSmMobile</code> (sm\u2013md), <code>isMobile</code> (below md), <code>isTablet</code> (md\u2013lg), <code>isSmallLaptop</code> (lg\u2013xl), <code>isDesktop</code>
(xl\u20132xl), <code>isLargeDesktop</code> (2xl\u20133xl), and <code>isUltraWide</code> (3xl and above). Upper bounds are exclusive. <code>isTabletAndBelow</code>, <code>isSmallLaptopAndBelow</code>,
<code>isDesktopAndBelow</code>, and <code>isLargeDesktopAndBelow</code> are below lg, xl, 2xl, and 3xl respectively.</p>
<p>SSR dimensions are zero. Simple range predicates compare against zero there; do not interpret them as actual device detection. Responsive values describe
viewport width, even when the component occupies a smaller container. Browser zoom can change CSS-pixel dimensions.</p>
<h2>Appearance and customization</h2>
<p>The interactive example uses public Blocks components, semantic theme variables, and shared spacing and responsive helpers. It follows the active playground
appearance. Open the source tab for the component and template.</p>
<h2>Behavior and accessibility</h2>
<p>Resize the browser or change zoom to observe width, height, breakpoint tags, and the responsive preview. Values use CSS pixels. The preview uses Blocks cards,
grids, and tags.</p>
<p>Viewport changes derive from signals under OnPush and are not announced on every resize. SSR dimensions are zero; responsive values use the fallback.</p>
<h2>Playground</h2>
<p>Open <code>/utilities/viewport</code> from <strong>Core \u2192 Utilities \u2192 Viewport and breakpoints</strong>. The demo appears first, followed by separate documentation and code tabs.</p>
<p>Return to the <a href="utilities">utilities overview</a> for the coverage audit and related feature guides.</p>
`,"projects/playground/src/app/components/shared/sidenav/README.md":`<h1>Playground navigation</h1>
<p>The playground shell uses Blocks SideNav for an expandable desktop sidebar, a compact icon rail, and a mobile drawer.</p>
<h2>Import</h2>
<p>The application shell imports <code>Sidenav</code> from <code>./components/shared/sidenav/sidenav</code>.</p>
<h2>Usage</h2>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">app-sidenav</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Blocks&quot;</span> /&gt;</span></code></pre>
<p>Use the desktop header control to collapse or expand the navigation. The preference persists across reloads. On mobile, use the toolbar menu button.</p>
<h2>API</h2>
<p><code>title</code> is required. <code>mobile()</code>, <code>open()</code>, <code>panelId()</code>, and <code>toggle(event)</code> connect the application&#39;s mobile trigger to the shared drawer.</p>
<p>The route-driven tree presents Home, Appearance, Components, Tokens, Icons, Utilities, Tools, and Release notes as separate entries with icons. Components
contains Primitives, Forms, Navigation, Modals, and Notifications; each category contains its component pages. Layout adds a third level under Primitives.
Category links open a filtered component index. Tools contains the modal and toast configurators and links to its own overview page. Release notes is the last
entry. Nested leaf pages use text-only rows; nested parents retain their icons.</p>
<h2>Appearance and customization</h2>
<p>The header shows the Blocks logo alone when compact and includes the title and release label when expanded. Shared SideNav controls all panel surfaces,
dimensions, icons, tooltips, search, and theme behavior.</p>
<h2>Behavior and accessibility</h2>
<p>The navigation retains the shared keyboard browsing, Back and ancestor actions, focus restoration, reduced-motion support, and mobile focus trap. Opening a
branch or search temporarily expands the icon rail without changing the saved preference. Existing component and configurator URLs remain valid. Desktop labels
retain their final layout while the panel expands, then fade in briefly. Reduced motion skips the delay and fade, including live preference changes. Keyboard
focus reveals labels immediately, and accessible names remain available during the visual transition.</p>
<h2>Playground</h2>
<p>The navigation is available on every playground page. Visit <code>/components</code>, <code>/components/category/forms</code>, <code>/components/layout</code>, and <code>/tools</code> to explore the
hierarchy.</p>
`};var w={"projects/blocks/forms/components/button/directives/README.md":`projects/blocks/forms/directives/button-icon/README.md`,"projects/blocks/forms/directives/error/README.md":`projects/blocks/forms/components/error/README.md`,"projects/blocks/forms/directives/hint/README.md":`projects/blocks/forms/components/hint/README.md`,"projects/blocks/icons/components/README.md":`projects/blocks/icons/components/icon/README.md`,"projects/blocks/modal/components/README.md":`projects/blocks/modal/components/modal-core/README.md`,"projects/blocks/toastr/components/README.md":`projects/blocks/toastr/components/toast-core/README.md`,"documentation/core/README.md":`projects/blocks/core/README.md`,"documentation/modal/README.md":`projects/blocks/modal/README.md`,"documentation/toastr/README.md":`projects/blocks/toastr/README.md`,"documentation/appearance/README.md":`projects/playground/src/app/components/screens/appearance/README.md`,"assets/modal-readme/README.md":`projects/blocks/modal/README.md`,"assets/toastr-readme/README.md":`projects/blocks/toastr/README.md`,"assets/blocks-core-readme/README.md":`projects/blocks/core/README.md`,"assets/core-readme/README.md":`projects/blocks/core/README.md`};var S={"assets/code-snippets/modal/confirm-close-modal.html.txt":`<div>
    {{ data }}
</div>

<div *appModalFooter class="button-container">
    <button type="button" bx-button variant="filled" color="success" (click)="confirm()">Confirm</button>
    <button type="button" bx-button variant="filled" color="danger" (click)="close()">Cancel</button>
</div>
`,"assets/code-snippets/modal/confirm-close-modal.scss.txt":`.button-container {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    gap: 1rem;

    & button {
        cursor: pointer;
    }
}
`,"assets/code-snippets/modal/confirm-close-modal.ts.txt":`import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Button } from '@filip.mazev/blocks/forms';
import { Modal } from '@filip.mazev/blocks/modal';
import { ModalFooterDirective } from '@filip.mazev/blocks/modal';

@Component({
  selector: 'app-confirm-close',
  imports: [ModalFooterDirective, Button],
  templateUrl: './confirm-close.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './confirm-close.scss'
})
export class ConfirmClose extends Modal<string, undefined> {
  protected confirm(): void {
    this.modal?.close('confirm');
  }
}
`,"assets/code-snippets/modal/modal-usage.ts.txt":`import { Component, inject, signal } from '@angular/core';
import { Button } from '@filip.mazev/blocks/forms';
import { ModalService, ModalConfirmCloseGuard } from '@filip.mazev/blocks/modal';
import { DemoModal } from './components/demo-modal/demo-modal';
import { ConfirmClose } from './components/confirm-close/confirm-close';
import { IDemoModalData } from './idemo-modal-data.interface';
import { IDemoModalResult } from './idemo-modal-result.interface';

@Component({
  selector: 'app-modal-example',
  imports: [Button],
  template: \`<button bx-button (click)="open()">Review changes</button>
    <p role="status">{{ status() }}</p>\`
})
export class ModalExample {
  private readonly modalService = inject(ModalService);
  protected readonly status = signal('');

  protected open(): void {
    const ref = this.modalService.open<IDemoModalData, IDemoModalResult>(DemoModal, {
      header: { text: 'Workspace settings' },
      data: { title: 'Review your changes', body: 'Confirm to apply the example.', openedCount: 0 },
      style: { layout: 'center', breakpoints: { sm: 'bottom-sheet' } },
      closeGuard: new ModalConfirmCloseGuard<string, undefined>(ConfirmClose, {
        data: 'Discard your changes?',
        header: { text: 'Unsaved changes' }
      })
    });
    ref.afterClosed().subscribe(result => {
      this.status.set(result.state === 'confirm' ? 'Changes confirmed.' : 'Modal closed.');
    });
  }
}
`,"assets/code-snippets/modal/modal.html.txt":`<div *appModalHeader>
    {{ data.title }}
</div>

<div
    class="demo-modal-content-class"
    [ngClass]="{
        'side-modal': isSideModal(),
        'center-modal': isCenteredModal()
    }">
    <div>
        {{ data.body }}
    </div>
    <section class="modal-menu-demo" aria-label="Menus inside this modal">
        <h3>Menus inside the modal</h3>
        <button bx-button type="button" variant="tonal" color="primary" placement="bottom" [bxDropdown]="dropdownActions">
            Open actions<bx-icon name="chevron-down" size="16" />
        </button>
        <button bx-button type="button" variant="tonal" color="grayscale" class="modal-context-target" [bxContextMenu]="contextActions">
            <bx-icon name="mouse-pointer-2" size="16" />Right-click or hold for more actions
        </button>
        <p class="menu-hint">
            On touch screens, touch and hold for more actions. With a keyboard, focus the example and press Shift + F10. Escape closes the menu first.
        </p>
        <p class="menu-status" role="status">{{ menuStatus() }}</p>
    </section>
    <section class="modal-nesting-demo" aria-label="Nested dialogs">
        <h3>Nested dialogs</h3>
        <p>Compare independent backdrops and increasing material opacity while the parent stays open.</p>
        <button bx-button type="button" variant="tonal" color="accent" (click)="openNested()">Open nested dialog</button>
    </section>
</div>

<ng-template #dropdownActions>
    <bx-menu>
        <bx-menu-item label="Edit details" icon="pencil" (action)="selectAction('Edit details')" />
        <bx-menu-item label="Duplicate" icon="copy" (action)="selectAction('Duplicate')" />
    </bx-menu>
</ng-template>
<ng-template #contextActions>
    <bx-menu>
        <bx-menu-item label="Copy link" icon="link" (action)="selectAction('Copy link')" />
        <bx-menu-item label="Archive" icon="archive" (action)="selectAction('Archive')" />
        <bx-menu-item label="Delete" icon="trash-2" [danger]="true" (action)="selectAction('Delete')" />
    </bx-menu>
</ng-template>

<div *appModalFooter class="button-container">
    <button type="button" bx-button variant="filled" color="success" (click)="confirm()">Confirm</button>
    <button type="button" bx-button variant="filled" color="danger" (click)="close()">Cancel</button>
</div>
`,"assets/code-snippets/modal/modal.scss.txt":`@use '@filip.mazev/blocks/core/styles/helpers' as *;

.demo-modal-content-class {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    overflow-y: auto;

    @include respond-up(xl) {
        &.side-modal {
            max-width: 30vw;
            max-width: 30dvw;
        }

        &.center-modal {
            max-width: 50vw;
            max-width: 50dvw;
        }
    }
}

.button-container {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    gap: 1rem;

    & button {
        cursor: pointer;
    }
}

.modal-menu-demo,
.modal-nesting-demo {
    display: grid;
    justify-items: start;
    gap: spacing(3);
    padding-top: spacing(4);
    border-top: 1px solid var(--bx-border-default);
}

.modal-menu-demo h3,
.modal-menu-demo p,
.modal-nesting-demo h3,
.modal-nesting-demo p {
    margin: 0;
}

.modal-context-target {
    border-style: dashed;
    /* stylelint-disable-next-line property-no-vendor-prefix -- Retain selection suppression in Safari. */
    -webkit-user-select: none;
    user-select: none;
    -webkit-touch-callout: none;
}

.menu-hint,
.menu-status {
    color: var(--bx-text-secondary);
    font-size: 0.875rem;
}

.menu-status {
    min-height: 2.5em;
}
`,"assets/code-snippets/modal/modal.ts.txt":`import type { WritableSignal } from '@angular/core';

import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';

import { Icon } from '@filip.mazev/blocks/icons';
import { ModalService } from '@filip.mazev/blocks/modal';
import { ContextMenuDirective, DropdownDirective, Menu, MenuItem } from '@filip.mazev/blocks/primitives';

import { Button } from '@filip.mazev/blocks/forms';
import { Modal } from '@filip.mazev/blocks/modal';
import { ModalFooterDirective } from '@filip.mazev/blocks/modal';
import { ModalHeaderDirective } from '@filip.mazev/blocks/modal';
import { IDemoModalData } from '@playground/interfaces/modals/data/idemo-modal-data.interface';
import { IDemoModalResult } from '@playground/interfaces/modals/result/idemo-modal-result.interface';

@Component({
  selector: 'app-demo-modal',
  imports: [ModalHeaderDirective, ModalFooterDirective, NgClass, Button, ContextMenuDirective, DropdownDirective, Menu, MenuItem, Icon],
  templateUrl: './demo-modal.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './demo-modal.scss'
})
export class DemoModal extends Modal<IDemoModalData, IDemoModalResult> {
  private readonly modalService = inject(ModalService);

  protected readonly menuStatus: WritableSignal<string> = signal('Try either menu. Actions keep this modal open.');

  protected readonly isSideModal: WritableSignal<boolean> = signal(false);
  protected readonly isCenteredModal: WritableSignal<boolean> = signal(false);

  public override onModalInit(): void {
    const layout = this.modal?.modalConfig?.style.layout;

    this.isSideModal.set(layout === 'right' || layout === 'left');
    this.isCenteredModal.set(layout === 'center');
  }

  protected confirm(): void {
    this.modal?.close('confirm', {
      openedCount: this.data.openedCount + 1
    });
  }

  protected selectAction(action: string): void {
    this.menuStatus.set(\`\${action} selected. The modal is still open.\`);
  }

  protected openNested(): void {
    this.modalService.open<IDemoModalData, IDemoModalResult>(DemoModal, {
      data: {
        ...this.data,
        title: 'Nested dialog',
        body: 'The first nested dialog uses at least 90% material opacity. Open another to see a fully opaque surface. Closing returns to the unchanged parent.'
      },
      header: { text: 'Nested dialog', icon: { name: 'layers', color: 'accent', bgColor: 'auto' } },
      style: { layout: 'center', hasBackdrop: true, animate: this.modal.modalConfig?.style.animate ?? true }
    });
  }
}
`,"assets/code-snippets/modal/styles.scss.txt":`@use '@filip.mazev/blocks/core/styles/index' as bx;
@import '@filip.mazev/blocks/effects/effects.css';

:root {
  @include bx.bx-theme(bx.$azure-ember-light-theme);
}

[data-theme='dark'] {
  @include bx.bx-theme(bx.$azure-ember-dark-theme);
}

// Modal and toast surfaces use the shared semantic theme.
// Configure material through ThemingService.setAppearance(...) application-wide.
`,"assets/code-snippets/toastr/demo-toast.html.txt":`<div class="notification">
    <div class="notification-content">
        <h4 class="notification-title">{{ data.title }}</h4>
        <p class="notification-message">{{ data.message }}</p>
    </div>
</div>
`,"assets/code-snippets/toastr/demo-toast.scss.txt":`@use '@filip.mazev/blocks/core/styles/helpers' as *;

.notification {
    display: flex;
    position: relative;
    padding: spacing(4);
    min-height: 2.5rem;
    color: var(--bx-text-primary);
}

.notification-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    flex: 1;
    padding-right: spacing(6);
}

.notification-title {
    margin: 0 0 spacing(1);
    font-size: 1rem;
    font-weight: 600;
}

.notification-message {
    margin: 0;
    font-size: 0.875rem;
    line-height: 1.5;
}
`,"assets/code-snippets/toastr/demo-toast.ts.txt":`import { ChangeDetectionStrategy, Component } from '@angular/core';

import { IDemoToastData } from '@playground/interfaces/toasts/data/idemo-toast-data.interface';
import { IDemoToastResult } from '@playground/interfaces/toasts/result/idemo-toast-result.interface';
import { Toast } from '@filip.mazev/blocks/toastr';

@Component({
  selector: 'app-demo-toast',
  templateUrl: './demo-toast.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './demo-toast.scss'
})
export class DemoToast extends Toast<IDemoToastData, IDemoToastResult> {
  protected dismiss(): void {
    this.toast?.close({
      openedCount: (this.data.openedCount ?? 0) + 1
    });
  }
}
`,"assets/code-snippets/toastr/toastr-usage.ts.txt":`import { Component, inject } from '@angular/core';
import { Button } from '@filip.mazev/blocks/forms';
import { ToastrService } from '@filip.mazev/blocks/toastr';
import { DemoToast } from './demo-toast';
import { IDemoToastData } from './idemo-toast-data.interface';
import { IDemoToastResult } from './idemo-toast-result.interface';

@Component({
  selector: 'app-toast-example',
  imports: [Button],
  template: \`<button bx-button (click)="showToast()">Queue notification</button>\`
})
export class ToastExample {
  private readonly toastrService = inject(ToastrService);

  protected showToast(): void {
    this.toastrService.queueToast<IDemoToastData, IDemoToastResult, DemoToast>(DemoToast, {
      position: 'top-right',
      durationInMs: 5000,
      animate: true,
      hasDefaultBackground: true,
      data: { title: 'Saved', message: 'Your preferences have been saved.', openedCount: 0 }
    });
    // For an intent-styled notification, use:
    // this.toastrService.queueSuccess({ title: 'Saved', message: 'Your preferences have been saved.' });
  }
}
`,"assets/code-snippets/utilities/components/color-tokens/color-tokens.html.txt":`<bx-stack [gap]="5">
    <bx-grid minColumnWidth="18rem">
        <bx-card title="Choose a color token">
            <bx-stack [gap]="4">
                <bx-select label="Color token" [options]="colorTokens" [value]="colorToken()" (valueChange)="setColorToken($event)" />
                <div class="token-swatch" aria-hidden="true" [style.background]="cssVariable()"></div>
                <code>{{ cssVariable() }}</code>
                <p>The swatch follows the active theme. Token mappings below remain available as text.</p>
                <a bx-button variant="tonal" routerLink="/tokens">Explore the complete token catalog</a>
            </bx-stack>
        </bx-card>
        <bx-card title="Helper results">
            <dl>
                <div>
                    <dt>Palette token</dt>
                    <dd>{{ paletteToken() ? 'Yes' : 'No' }}</dd>
                </div>
                <div>
                    <dt>Complementary token</dt>
                    <dd>{{ complementaryToken() }}</dd>
                </div>
                <div>
                    <dt>Inverted palette token</dt>
                    <dd>{{ invertedToken() }}</dd>
                </div>
                <div>
                    <dt>Recognizes light/dark object</dt>
                    <dd>{{ themedColor() ? 'Yes' : 'No' }}</dd>
                </div>
                <div>
                    <dt>Restore carbon-cobalt</dt>
                    <dd>{{ restoredPalette }}</dd>
                </div>
                <div>
                    <dt>Restore unknown-palette</dt>
                    <dd>{{ unknownPalette }}</dd>
                </div>
            </dl>
        </bx-card>
    </bx-grid>
    <bx-alert
        message="Companion and inverted mappings describe styling relationships. Check the contrast of your final foreground and background combination." />
</bx-stack>
`,"assets/code-snippets/utilities/components/color-tokens/color-tokens.ts.txt":`import type { Signal, WritableSignal } from '@angular/core';

import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import type { Color } from '@filip.mazev/blocks/core';

import { getComplementaryToken, invertPaletteToken, isPaletteToken, isThemedColor, resolveThemeId, resolveTokenToCssVar } from '@filip.mazev/blocks/core';
import { Button, Select } from '@filip.mazev/blocks/forms';
import { Alert, Card, Grid, Stack } from '@filip.mazev/blocks/primitives';

import { UTILITY_COLOR_TOKENS } from '@playground/components/screens/utilities/constants/utilities.constants';

@Component({
  selector: 'app-color-tokens',
  imports: [Alert, Button, Card, Grid, RouterLink, Select, Stack],
  templateUrl: './color-tokens.html',
  styleUrl: '../../utility-demo.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ColorTokens {
  protected readonly colorTokens: typeof UTILITY_COLOR_TOKENS = UTILITY_COLOR_TOKENS;
  protected readonly restoredPalette: string = resolveThemeId('carbon-cobalt') ?? 'Unrecognized palette';
  protected readonly unknownPalette: string = resolveThemeId('unknown-palette') ?? 'Unrecognized palette';

  protected readonly colorToken: WritableSignal<Color> = signal('primary');

  protected readonly cssVariable: Signal<string> = computed(() => resolveTokenToCssVar(this.colorToken()));
  protected readonly complementaryToken: Signal<Color> = computed(() => getComplementaryToken(this.colorToken()));
  protected readonly invertedToken: Signal<Color> = computed(() => invertPaletteToken(this.colorToken()));
  protected readonly paletteToken: Signal<boolean> = computed(() => isPaletteToken(this.colorToken()));
  protected readonly themedColor: Signal<boolean> = computed(() => isThemedColor({ light: this.colorToken(), dark: this.invertedToken() }));

  protected setColorToken(color: Color | null): void {
    this.colorToken.set(color ?? 'primary');
  }
}
`,"assets/code-snippets/utilities/components/device/device.html.txt":`<bx-stack [gap]="5">
    <bx-grid minColumnWidth="16rem">
        <bx-card title="Device snapshot">
            <bx-stack [gap]="4">
                <p class="metric" data-device-category>{{ deviceCategory() }}</p>
                <bx-tag leadingIcon="smartphone" data-orientation [text]="orientation() + ' screen'" [focusable]="false" />
                <dl>
                    <div>
                        <dt>Desktop OS</dt>
                        <dd>{{ deviceState().desktopOS ?? 'Not detected' }}</dd>
                    </div>
                    <div>
                        <dt>Mobile OS</dt>
                        <dd>{{ deviceState().mobileOS ?? 'Not detected' }}</dd>
                    </div>
                </dl>
                <bx-stack direction="horizontal">
                    <button bx-button type="button" variant="tonal" (click)="refreshDevice()">Refresh detection</button>
                </bx-stack>
            </bx-stack>
        </bx-card>
        <bx-card title="Platform hints">
            <dl>
                <div>
                    <dt>Apple device</dt>
                    <dd>{{ deviceState().isAppleDevice ? 'Yes' : 'No' }}</dd>
                </div>
                <div>
                    <dt>Android device</dt>
                    <dd>{{ deviceState().isAndroidDevice ? 'Yes' : 'No' }}</dd>
                </div>
                <div>
                    <dt>Windows desktop</dt>
                    <dd>{{ deviceState().isWindowsDesktop ? 'Yes' : 'No' }}</dd>
                </div>
                <div>
                    <dt>Linux or Unix desktop</dt>
                    <dd>{{ deviceState().isLinuxOrUnixDesktop ? 'Yes' : 'No' }}</dd>
                </div>
                <div>
                    <dt>Unknown mobile OS</dt>
                    <dd>{{ deviceState().isUnknownMobileDevice ? 'Yes' : 'No' }}</dd>
                </div>
            </dl>
        </bx-card>
    </bx-grid>
    <bx-alert
        title="Device identity and viewport size are separate"
        message="Resizing a desktop window changes its viewport, while its device category stays desktop. This demo refreshes on screen orientation changes; you can also refresh it manually." />
</bx-stack>
`,"assets/code-snippets/utilities/components/device/device.ts.txt":`import type { Signal, WritableSignal } from '@angular/core';

import { afterNextRender, ChangeDetectionStrategy, Component, computed, DestroyRef, DOCUMENT, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { fromEvent } from 'rxjs';

import type { IDeviceState } from '@filip.mazev/blocks/core';

import { DeviceTypeService } from '@filip.mazev/blocks/core';
import { Button } from '@filip.mazev/blocks/forms';
import { Alert, Card, Grid, Stack, Tag } from '@filip.mazev/blocks/primitives';

@Component({
  selector: 'app-device',
  imports: [Alert, Button, Card, Grid, Stack, Tag],
  templateUrl: './device.html',
  styleUrl: '../../utility-demo.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Device {
  private readonly destroyRef = inject(DestroyRef);
  private readonly deviceTypeService = inject(DeviceTypeService);
  private readonly document = inject(DOCUMENT);

  protected readonly deviceState: WritableSignal<IDeviceState> = signal(this.deviceTypeService.getDeviceState());

  protected readonly deviceCategory: Signal<string> = computed(() => {
    const state = this.deviceState();

    return state.isTablet ? 'Tablet' : state.isMobile ? 'Mobile' : 'Desktop';
  });
  protected readonly orientation: Signal<string> = computed(() => (this.deviceState().isLandscapeOrientation() ? 'Landscape' : 'Portrait'));

  constructor() {
    afterNextRender(() => {
      const orientation = this.document.defaultView?.screen.orientation;

      this.refreshDevice();

      if (orientation)
        fromEvent(orientation, 'change')
          .pipe(takeUntilDestroyed(this.destroyRef))
          .subscribe(() => this.refreshDevice());
    });
  }

  protected refreshDevice(): void {
    this.deviceState.set(this.deviceTypeService.getDeviceState());
  }
}
`,"assets/code-snippets/utilities/components/identifiers/identifiers.html.txt":`<bx-stack [gap]="5">
    <bx-card title="Generate a version-4 UUID">
        <bx-stack [gap]="4">
            <p>Create identifiers for controls, overlays, or shared lock owners.</p>
            <output class="identifier" aria-label="Generated UUID" aria-live="polite">{{ identifier() }}</output>
            <bx-stack direction="horizontal" [wrap]="true">
                <button bx-button type="button" variant="tonal" (click)="generateIdentifier()">Generate another UUID</button>
            </bx-stack>
        </bx-stack>
    </bx-card>
    <bx-card title="Stable instance identifier">
        <bx-stack [gap]="3">
            <code class="identifier" data-owner-id>{{ ownerId }}</code>
            <p>This ID is generated once for this demo instance. Generate another UUID above and compare: the owner ID stays the same.</p>
        </bx-stack>
    </bx-card>
    <bx-alert
        title="Generate once, reuse through cleanup"
        message="Keep owner IDs in instance fields. Generating them in a template or a derived computation can break the connection between acquisition and cleanup." />
</bx-stack>
`,"assets/code-snippets/utilities/components/identifiers/identifiers.ts.txt":`import type { WritableSignal } from '@angular/core';

import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

import { uuidv4 } from '@filip.mazev/blocks/core';
import { Button } from '@filip.mazev/blocks/forms';
import { Alert, Card, Stack } from '@filip.mazev/blocks/primitives';

@Component({
  selector: 'app-identifiers',
  imports: [Alert, Button, Card, Stack],
  templateUrl: './identifiers.html',
  styleUrl: '../../utility-demo.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Identifiers {
  protected readonly ownerId: string = uuidv4();

  protected readonly identifier: WritableSignal<string> = signal(uuidv4());

  protected generateIdentifier(): void {
    this.identifier.set(uuidv4());
  }
}
`,"assets/code-snippets/utilities/components/overlay-positioning/overlay-positioning.html.txt":`<bx-stack [gap]="5">
    <bx-card title="Connected overlay">
        <bx-stack [gap]="4">
            <p>Choose a preferred side, open the preview, then scroll or resize. The position strategy falls back when space is limited.</p>
            <bx-checkbox label="Use top layer" [checked]="useTopLayer()" (checkedChange)="setTopLayer($event)" />
            <bx-stack direction="responsive" align="center" [gap]="4">
                <bx-select label="Preferred placement" [options]="placements" [value]="placement()" (valueChange)="setPlacement($event)" />
                <button
                    bx-button
                    type="button"
                    variant="tonal"
                    [attr.aria-expanded]="overlayOpen()"
                    [attr.aria-describedby]="overlayOpen() ? overlayId : null"
                    (click)="toggleOverlay($event)"
                    (blur)="closeOverlay()">
                    {{ overlayOpen() ? 'Hide position preview' : 'Show position preview' }}
                </button>
            </bx-stack>
            <p>Focus stays on the trigger. Escape, moving focus away, an outside click, or scrolling the origin out of view closes the preview.</p>
            <p>Top-layer previews use measured positioning to follow scrolling. Ordinary previews use native CSS anchors where supported.</p>
        </bx-stack>
    </bx-card>
    <bx-alert
        title="Shared positioning and theme inheritance"
        message="The preview uses the public Core positioning, origin tracking, and theme helpers. Change the playground appearance while it is open to see theme inheritance." />
    <bx-stack direction="horizontal" [wrap]="true" [gap]="2">
        <a bx-button variant="text" routerLink="/components/popover">Popover</a>
        <a bx-button variant="text" routerLink="/components/dropdown">Dropdown</a>
        <a bx-button variant="text" routerLink="/components/tooltip-directive">Tooltip</a>
    </bx-stack>
</bx-stack>

<ng-template #overlayTemplate>
    <bx-card class="utility-overlay">
        <div role="tooltip" [id]="overlayId">
            <bx-stack [gap]="3">
                <strong>Positioned with Core utilities</strong>
                <p>This surface follows its origin and inherits the active Blocks theme. Preferred placement: {{ placement() }}.</p>
            </bx-stack>
        </div>
    </bx-card>
</ng-template>
`,"assets/code-snippets/utilities/components/overlay-positioning/overlay-positioning.ts.txt":`import type { Signal, TemplateRef, WritableSignal } from '@angular/core';

import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { ChangeDetectionStrategy, Component, DestroyRef, inject, signal, viewChild, ViewContainerRef } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';

import type { BxPlacement, OverlayOriginTracker } from '@filip.mazev/blocks/core';

import {
  BxOverlayPositionService,
  inheritOverlayTheme,
  isOverlayOriginVisible,
  trackOverlayOrigin,
  uuidv4,
  WindowDimensionsService
} from '@filip.mazev/blocks/core';
import { Button, Checkbox, Select } from '@filip.mazev/blocks/forms';
import { Alert, Card, Stack } from '@filip.mazev/blocks/primitives';

import { UTILITY_PLACEMENTS } from '@playground/components/screens/utilities/constants/utilities.constants';

@Component({
  selector: 'app-overlay-positioning',
  imports: [Alert, Button, Card, Checkbox, RouterLink, Select, Stack],
  templateUrl: './overlay-positioning.html',
  styleUrl: '../../utility-demo.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OverlayPositioning {
  private readonly bxOverlayPositionService = inject(BxOverlayPositionService);
  private readonly destroyRef = inject(DestroyRef);
  private readonly overlay = inject(Overlay);
  private readonly viewContainerRef = inject(ViewContainerRef);
  private readonly windowDimensionsService = inject(WindowDimensionsService);

  private readonly overlayTemplate: Signal<TemplateRef<unknown> | undefined> = viewChild<TemplateRef<unknown>>('overlayTemplate');

  protected readonly placements: typeof UTILITY_PLACEMENTS = UTILITY_PLACEMENTS;
  protected readonly overlayId: string = 'utilities-overlay-' + uuidv4();

  protected readonly overlayOpen: WritableSignal<boolean> = signal(false);
  protected readonly useTopLayer: WritableSignal<boolean> = signal(false);

  protected readonly placement: WritableSignal<BxPlacement> = signal('bottom');

  private overlayRef: OverlayRef | undefined;
  private disconnectOrigin: OverlayOriginTracker | undefined;
  private disconnectTheme: (() => void) | undefined;

  constructor() {
    this.destroyRef.onDestroy(() => this.closeOverlay());
  }

  protected setPlacement(placement: BxPlacement | null): void {
    this.closeOverlay();
    this.placement.set(placement ?? 'bottom');
  }

  protected setTopLayer(enabled: boolean): void {
    this.closeOverlay();
    this.useTopLayer.set(enabled);
  }

  protected toggleOverlay(event: MouseEvent): void {
    if (this.overlayOpen()) {
      this.closeOverlay();

      return;
    }

    const origin = event.currentTarget;
    const template = this.overlayTemplate();

    if (!(origin instanceof HTMLElement) || !template || !this.windowDimensionsService.isBrowser || !isOverlayOriginVisible(origin)) return;

    const overlayRef = this.overlay.create({
      usePopover: this.useTopLayer(),
      positionStrategy: this.bxOverlayPositionService.getElementStrategy(origin, this.placement()),
      scrollStrategy: this.overlay.scrollStrategies.noop()
    });

    this.overlayRef = overlayRef;
    this.overlayOpen.set(true);
    origin.focus({ preventScroll: true });

    const view = overlayRef.attach(new TemplatePortal(template, this.viewContainerRef));

    view.detectChanges();
    this.disconnectTheme = inheritOverlayTheme(origin, overlayRef.overlayElement);
    this.disconnectOrigin = trackOverlayOrigin(overlayRef, origin, { onOriginHidden: () => this.closeOverlay() });
    overlayRef
      .outsidePointerEvents()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((outsideEvent) => {
        if (outsideEvent.target instanceof Node && origin.contains(outsideEvent.target)) return;

        this.closeOverlay();
      });
    overlayRef
      .keydownEvents()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((event) => {
        if (event.key === 'Escape') {
          event.preventDefault();
          this.closeOverlay();
        }
      });
  }

  protected closeOverlay(): void {
    this.disconnectOrigin?.();
    this.disconnectTheme?.();
    this.overlayRef?.dispose();
    this.disconnectOrigin = undefined;
    this.disconnectTheme = undefined;
    this.overlayRef = undefined;
    this.overlayOpen.set(false);
  }
}
`,"assets/code-snippets/utilities/components/scroll-lock/scroll-lock.html.txt":`<bx-stack [gap]="5">
    <bx-alert
        title="Try two independent owners"
        message="Acquire both locks, then release one. Page scrolling stays locked until the final owner releases it. Release controls remain available below." />
    <bx-card #lockControls class="lock-controls" title="Control the demo locks">
        <bx-stack class="lock-controls-content" [gap]="4">
            <p role="status">Demo owners: {{ locks().length }}. Page scrolling: {{ scrollLockService.isScrollDisabled() ? 'locked' : 'available' }}.</p>
            <bx-stack direction="horizontal" role="group" aria-label="Demo scroll lock owners" [wrap]="true" [gap]="3">
                @for (owner of owners; track owner) {
                    <button bx-button type="button" variant="tonal" [attr.aria-pressed]="locks().includes(owner)" (click)="toggleLock(owner)">
                        {{ locks().includes(owner) ? 'Release ' + owner + ' lock' : 'Acquire ' + owner + ' lock' }}
                    </button>
                }
                <button bx-button type="button" variant="tonal" color="grayscale" [disabled]="locks().length === 0" (click)="releaseLocks()">
                    Release demo locks
                </button>
            </bx-stack>
        </bx-stack>
    </bx-card>
    <bx-grid minColumnWidth="16rem">
        @for (owner of owners; track owner) {
            <bx-card [title]="owner === 'first' ? 'First owner' : 'Second owner'">
                <bx-stack [gap]="4">
                    <bx-tag
                        [text]="locks().includes(owner) ? 'Lock acquired' : 'Lock released'"
                        [leadingIcon]="locks().includes(owner) ? 'lock' : 'lock-open'"
                        [color]="locks().includes(owner) ? 'warn' : 'neutral'"
                        [focusable]="false" />
                    <p>Each owner keeps a stable ID and releases only its own lock.</p>
                </bx-stack>
            </bx-card>
        }
    </bx-grid>
    <p>Touch input stays enabled. Leaving this example releases its two locks; other overlays keep their own locks.</p>
</bx-stack>
`,"assets/code-snippets/utilities/components/scroll-lock/scroll-lock.ts.txt":`import type { Signal, WritableSignal } from '@angular/core';

import { ChangeDetectionStrategy, Component, DestroyRef, ElementRef, inject, signal, viewChild } from '@angular/core';

import type { UtilityLockOwner } from '@playground/components/screens/utilities/types/utilities.types';

import { ScrollLockService, uuidv4 } from '@filip.mazev/blocks/core';
import { Button } from '@filip.mazev/blocks/forms';
import { Alert, Card, Grid, Stack, Tag } from '@filip.mazev/blocks/primitives';

@Component({
  selector: 'app-scroll-lock',
  imports: [Alert, Button, Card, Grid, Stack, Tag],
  templateUrl: './scroll-lock.html',
  styleUrl: '../../utility-demo.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScrollLock {
  protected readonly scrollLockService = inject(ScrollLockService);

  private readonly lockIds: Readonly<Record<UtilityLockOwner, string>> = { first: uuidv4(), second: uuidv4() };

  private readonly lockControls: Signal<ElementRef<HTMLElement> | undefined> = viewChild('lockControls', { read: ElementRef<HTMLElement> });

  protected readonly owners: readonly UtilityLockOwner[] = ['first', 'second'];

  protected readonly locks: WritableSignal<readonly UtilityLockOwner[]> = signal<readonly UtilityLockOwner[]>([]);

  constructor() {
    inject(DestroyRef).onDestroy(() => this.releaseLocks());
  }

  protected toggleLock(owner: UtilityLockOwner): void {
    if (this.locks().includes(owner)) {
      this.scrollLockService.enableScroll(this.lockIds[owner]);
      this.locks.update((owners) => owners.filter((current) => current !== owner));
    } else {
      if (!this.locks().length) this.lockControls()?.nativeElement.scrollIntoView({ block: 'center', inline: 'nearest', behavior: 'instant' });

      this.scrollLockService.disableScroll(this.lockIds[owner], { handleTouchInput: false });
      this.locks.update((owners) => [...owners, owner]);
    }
  }

  protected releaseLocks(): void {
    this.scrollLockService.enableScroll(this.lockIds.first);
    this.scrollLockService.enableScroll(this.lockIds.second);
    this.locks.set([]);
  }
}
`,"assets/code-snippets/utilities/components/utility-page/utility-page.html.txt":`<bx-page-container [pageDescription]="entry().description">
    <section class="demo-section" aria-labelledby="utility-demo-title">
        <bx-stack direction="responsive" align="center" justify="between" class="section-heading" [gap]="2">
            <h2 id="utility-demo-title">Interactive example</h2>
            <span>Uses your active palette</span>
        </bx-stack>
        <router-outlet />
    </section>

    <bx-divider [decorative]="true" />

    <section class="documentation-section" aria-labelledby="utility-documentation-title">
        <h2 id="utility-documentation-title">Documentation and source</h2>
        <app-component-info [readmePath]="entry().readme" [codeFiles]="codeFiles()" />
    </section>
</bx-page-container>
`,"assets/code-snippets/utilities/components/utility-page/utility-page.scss.txt":`@use '@filip.mazev/blocks/core/styles/helpers' as *;

:host {
    display: block;
    min-inline-size: 0;
}

h2 {
    margin: 0;
    color: var(--bx-text-heading);
    font-size: 1.125rem;
}

code,
.section-heading span {
    color: var(--bx-text-secondary);
    font-size: 0.8125rem;
}

.section-heading {
    margin-block-end: spacing(4);
}

.demo-section {
    margin-block-end: spacing(8);
}

.documentation-section {
    min-inline-size: 0;
    margin-block-start: spacing(8);

    h2 {
        margin-block-end: spacing(4);
    }
}
`,"assets/code-snippets/utilities/components/utility-page/utility-page.ts.txt":`import type { Signal } from '@angular/core';
import type { Data } from '@angular/router';

import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterOutlet } from '@angular/router';

import type { IUtilityExample } from '@playground/components/screens/utilities/interfaces/iutility-example.interface';
import type { ICodeFile } from '@playground/interfaces/icode-file.interface';

import { Divider, PageContainer, Stack } from '@filip.mazev/blocks/primitives';

import { UTILITY_EXAMPLES } from '@playground/components/screens/utilities/constants/utility-catalog.constants';
import { ComponentInfo } from '@playground/components/shared/component-info/component-info';

@Component({
  selector: 'app-utility-page',
  imports: [PageContainer, ComponentInfo, Divider, RouterOutlet, Stack],
  templateUrl: './utility-page.html',
  styleUrl: './utility-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UtilityPage {
  private readonly activatedRoute = inject(ActivatedRoute);

  private readonly routeData: Signal<Data> = toSignal(this.activatedRoute.data, { initialValue: this.activatedRoute.snapshot.data });

  protected readonly entry: Signal<IUtilityExample> = computed(
    () => UTILITY_EXAMPLES.find((entry) => entry.id === this.routeData()['utilityId']) ?? UTILITY_EXAMPLES[0]
  );
  protected readonly codeFiles: Signal<ICodeFile[]> = computed(() => {
    const id = this.entry().id;

    const files: ICodeFile[] = [
      { title: \`\${id}.ts\`, path: \`assets/code-snippets/utilities/components/\${id}/\${id}.ts.txt\`, language: 'typescript' },
      { title: \`\${id}.html\`, path: \`assets/code-snippets/utilities/components/\${id}/\${id}.html.txt\`, language: 'html' },
      { title: 'utility-demo.scss', path: 'assets/code-snippets/utilities/utility-demo.scss.txt', language: 'scss' }
    ];

    if (id === 'color-tokens' || id === 'overlay-positioning')
      files.push({
        title: 'utilities.constants.ts',
        path: 'assets/code-snippets/utilities/constants/utilities.constants.ts.txt',
        language: 'typescript'
      });

    if (id === 'scroll-lock')
      files.push({ title: 'utilities.types.ts', path: 'assets/code-snippets/utilities/types/utilities.types.ts.txt', language: 'typescript' });

    return files;
  });
}
`,"assets/code-snippets/utilities/components/viewport/viewport.html.txt":`<bx-stack [gap]="5">
    <bx-grid minColumnWidth="12rem">
        <bx-card>
            <p>Viewport width</p>
            <p class="metric" data-viewport-width>{{ windowDimensionsService.dimensions().width }} <small>px</small></p>
            <p>CSS pixels</p>
        </bx-card>
        <bx-card>
            <p>Viewport height</p>
            <p class="metric">{{ windowDimensionsService.dimensions().height }} <small>px</small></p>
            <p>CSS pixels</p>
        </bx-card>
        <bx-card>
            <p>Current breakpoint</p>
            <p class="metric" data-breakpoint>{{ windowDimensionsService.currentBreakpoint() ?? 'SSR' }}</p>
            <p>Minimum {{ windowDimensionsService.currentBreakpointValue() ?? 'Unavailable' }} px</p>
        </bx-card>
    </bx-grid>
    <bx-card title="Shared breakpoint scale">
        <bx-stack [gap]="4">
            <p>Resize the window or change browser zoom. The current breakpoint is marked with a check.</p>
            <bx-stack direction="horizontal" aria-label="Shared breakpoint minimums" [wrap]="true" [gap]="2">
                @for (entry of breakpointEntries; track entry[0]) {
                    <bx-tag
                        [text]="entry[0] + ' \xB7 ' + entry[1] + ' px'"
                        [color]="windowDimensionsService.currentBreakpoint() === entry[0] ? 'primary' : 'neutral'"
                        [leadingIcon]="windowDimensionsService.currentBreakpoint() === entry[0] ? 'check' : undefined"
                        [ariaLabel]="entry[0] + ': ' + entry[1] + ' pixels' + (windowDimensionsService.currentBreakpoint() === entry[0] ? ', current' : '')"
                        [focusable]="false" />
                }
            </bx-stack>
            <dl>
                <div>
                    <dt>Mobile viewport (below md)</dt>
                    <dd>{{ windowDimensionsService.isMobile() ? 'Yes' : 'No' }}</dd>
                </div>
                <div>
                    <dt>Between md and xl</dt>
                    <dd>{{ windowDimensionsService.isBetween('md', 'xl') ? 'Yes' : 'No' }}</dd>
                </div>
                <div>
                    <dt>At least lg</dt>
                    <dd>{{ windowDimensionsService.isAtLeast('lg') ? 'Yes' : 'No' }}</dd>
                </div>
            </dl>
        </bx-stack>
    </bx-card>
    <bx-card title="Responsive value">
        <bx-stack [gap]="4">
            <p>
                <code>resolveResponsiveValue({{ '{ md: 2, xl: 3 }' }}, 1)</code> selects {{ columns() }} columns.
            </p>
            <bx-grid [columns]="columns()" [gap]="3">
                @for (item of previewItems; track item) {
                    <span class="preview-cell">{{ item }}</span>
                }
            </bx-grid>
        </bx-stack>
    </bx-card>
    <bx-alert message="Viewport signals describe the browser window. Use container-aware layout when a component has less available space." />
</bx-stack>
`,"assets/code-snippets/utilities/components/viewport/viewport.ts.txt":`import type { Signal } from '@angular/core';

import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';

import { WindowDimensionsService } from '@filip.mazev/blocks/core';
import { Alert, Card, Grid, Stack, Tag } from '@filip.mazev/blocks/primitives';

@Component({
  selector: 'app-viewport',
  imports: [Alert, Card, Grid, Stack, Tag],
  templateUrl: './viewport.html',
  styleUrl: '../../utility-demo.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Viewport {
  protected readonly windowDimensionsService = inject(WindowDimensionsService);

  protected readonly breakpointEntries: [string, number][] = Object.entries(this.windowDimensionsService.breakpoints);
  protected readonly previewItems: readonly number[] = [1, 2, 3, 4, 5, 6];

  protected readonly columns: Signal<number> = computed(() => this.windowDimensionsService.resolveResponsiveValue({ md: 2, xl: 3 }, 1));
}
`,"assets/code-snippets/utilities/constants/utilities.constants.ts.txt":`import type { BxPlacement, Color } from '@filip.mazev/blocks/core';
import type { IBxSelectOption } from '@filip.mazev/blocks/forms';

export const UTILITY_PLACEMENTS: IBxSelectOption<BxPlacement>[] = [
  { label: 'Bottom', value: 'bottom' },
  { label: 'Top', value: 'top' },
  { label: 'Left', value: 'left' },
  { label: 'Right', value: 'right' }
];

export const UTILITY_COLOR_TOKENS: IBxSelectOption<Color>[] = [
  { label: 'Primary', value: 'primary' },
  { label: 'Accent', value: 'accent' },
  { label: 'Surface', value: 'bg-surface' },
  { label: 'Primary text', value: 'text-primary' },
  { label: 'Orange 500', value: 'orange-500' },
  { label: 'Blue 100', value: 'blue-100' }
];
`,"assets/code-snippets/utilities/constants/utility-catalog.constants.ts.txt":`import type { IUtilityExample } from '@playground/components/screens/utilities/interfaces/iutility-example.interface';

export const UTILITY_EXAMPLES: readonly IUtilityExample[] = [
  {
    id: 'viewport',
    title: 'Viewport and breakpoints',
    description: 'Watch viewport signals update and see shared breakpoints adapt a responsive layout.',
    symbol: 'WindowDimensionsService',
    icon: 'scan',
    readme: 'projects/playground/src/app/components/screens/utilities/components/viewport/README.md',
    loadComponent: () => import('@playground/components/screens/utilities/components/viewport/viewport').then((m) => m.Viewport)
  },
  {
    id: 'device',
    title: 'Device detection',
    description: 'Inspect device categories, operating systems, touch hints, and screen orientation.',
    symbol: 'DeviceTypeService',
    icon: 'smartphone',
    readme: 'projects/playground/src/app/components/screens/utilities/components/device/README.md',
    loadComponent: () => import('@playground/components/screens/utilities/components/device/device').then((m) => m.Device)
  },
  {
    id: 'scroll-lock',
    title: 'Scroll locking',
    description: 'Try independent lock owners and see how shared page scrolling is restored.',
    symbol: 'ScrollLockService',
    icon: 'lock',
    readme: 'projects/playground/src/app/components/screens/utilities/components/scroll-lock/README.md',
    loadComponent: () => import('@playground/components/screens/utilities/components/scroll-lock/scroll-lock').then((m) => m.ScrollLock)
  },
  {
    id: 'identifiers',
    title: 'Identifiers',
    description: 'Generate UUIDs and compare a changing preview with a stable instance identifier.',
    symbol: 'uuidv4()',
    icon: 'fingerprint',
    readme: 'projects/playground/src/app/components/screens/utilities/components/identifiers/README.md',
    loadComponent: () => import('@playground/components/screens/utilities/components/identifiers/identifiers').then((m) => m.Identifiers)
  },
  {
    id: 'color-tokens',
    title: 'Color-token helpers',
    description: 'Explore CSS references, complementary colors, palette inversion, and saved palette validation.',
    symbol: 'resolveTokenToCssVar() and color helpers',
    icon: 'palette',
    readme: 'projects/playground/src/app/components/screens/utilities/components/color-tokens/README.md',
    loadComponent: () => import('@playground/components/screens/utilities/components/color-tokens/color-tokens').then((m) => m.ColorTokens)
  },
  {
    id: 'overlay-positioning',
    title: 'Overlay positioning',
    description: 'Position a themed surface, track its origin, and try viewport-aware placement fallbacks.',
    symbol: 'BxOverlayPositionService and overlay helpers',
    icon: 'layers',
    readme: 'projects/playground/src/app/components/screens/utilities/components/overlay-positioning/README.md',
    loadComponent: () => import('@playground/components/screens/utilities/components/overlay-positioning/overlay-positioning').then((m) => m.OverlayPositioning)
  }
];
`,"assets/code-snippets/utilities/interfaces/iutility-example.interface.ts.txt":`import type { Route } from '@angular/router';

import type { IconName } from '@filip.mazev/blocks/icons';

/** A utility's navigation, interactive example, and colocated guide. */
export interface IUtilityExample {
  /** URL segment and demo folder below utilities. */
  id: string;
  /** Human-readable navigation and page title. */
  title: string;
  /** Summary shown on the overview and example page. */
  description: string;
  /** Public API names introduced by the example. */
  symbol: string;
  /** Icon accompanying the overview card. */
  icon: IconName;
  /** Repository path to the authoritative README. */
  readme: string;
  /** Lazy loader for the isolated interactive example. */
  loadComponent: NonNullable<Route['loadComponent']>;
}
`,"assets/code-snippets/utilities/types/utilities.types.ts.txt":`export type UtilityLockOwner = 'first' | 'second';
`,"assets/code-snippets/utilities/utilities.html.txt":`<bx-page-container pageDescription="Explore viewport signals, device detection, scroll locking, and shared helpers through focused examples.">
    <bx-stack [gap]="6">
        <bx-stack direction="responsive" align="center" justify="between" [gap]="3">
            <bx-search-input
                class="utility-search"
                ariaLabel="Search utilities"
                placeholder="Search utilities or API names\u2026"
                subscriptSizing="dynamic"
                [value]="query()"
                (valueChange)="query.set($event ?? '')" />
            <p class="result-count" role="status">{{ examples().length }} utilities</p>
        </bx-stack>

        <bx-grid minColumnWidth="20rem" [gap]="4">
            @for (entry of examples(); track entry.id) {
                <bx-card class="utility-card" [title]="entry.title" [headingLevel]="2">
                    <bx-stack [gap]="4">
                        <bx-stack direction="horizontal" align="center" [gap]="3">
                            <bx-icon size="24" [name]="entry.icon" />
                            <bx-tag text="Core" size="small" color="neutral" [focusable]="false" />
                        </bx-stack>
                        <p>{{ entry.description }}</p>
                        <code>{{ entry.symbol }}</code>
                    </bx-stack>
                    <a bxCardFooter bx-button variant="tonal" [routerLink]="['/utilities', entry.id]" [attr.aria-label]="'Explore ' + entry.title">
                        Explore utility <bx-icon name="arrow-right" size="16" />
                    </a>
                </bx-card>
            }
        </bx-grid>
        @if (!examples().length) {
            <bx-alert title="No utilities found" message="Try another name or clear your search to browse all utilities." />
            <button bx-button type="button" variant="tonal" (click)="query.set('')">Clear search</button>
        }

        <bx-alert
            title="Explore the foundations"
            message="All examples follow your active Blocks theme. Each utility has a dedicated demo and guide in the Utilities navigation." />

        <section aria-labelledby="utility-scroll-heading">
            <h2 id="utility-scroll-heading">Scroll boundaries and progressive rendering</h2>
            <app-infinite-scroll-examples />
        </section>

        <section class="utility-documentation" aria-label="Utilities guide and coverage">
            <app-readme path="projects/playground/src/app/components/screens/utilities/README.md" />
        </section>
    </bx-stack>
</bx-page-container>
`,"assets/code-snippets/utilities/utilities.scss.txt":`@use '@filip.mazev/blocks/core/styles/helpers' as *;

:host {
    display: block;
    min-inline-size: 0;
}

.utility-search {
    inline-size: 100%;
    max-inline-size: 32rem;
}

.result-count {
    flex-shrink: 0;
    margin: 0;
    color: var(--bx-text-secondary);
    font-size: 0.875rem;
}

.utility-card {
    --bx-card-padding: #{spacing(5)};

    p {
        margin: 0;
        color: var(--bx-text-secondary);
        line-height: 1.65;
    }

    code {
        font-size: 0.8125rem;
    }

    bx-icon {
        color: var(--bx-text-brand);
    }
}

.utility-documentation {
    min-inline-size: 0;
    margin-block-start: spacing(4);
}
`,"assets/code-snippets/utilities/utilities.ts.txt":`import type { Signal, WritableSignal } from '@angular/core';

import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import type { IUtilityExample } from '@playground/components/screens/utilities/interfaces/iutility-example.interface';

import { Button, SearchInput } from '@filip.mazev/blocks/forms';
import { Icon } from '@filip.mazev/blocks/icons';
import { Alert, Card, Grid, PageContainer, Stack, Tag } from '@filip.mazev/blocks/primitives';

import { InfiniteScrollExamples } from '@playground/components/screens/library-components/infinite-scroll-examples/infinite-scroll-examples';
import { UTILITY_EXAMPLES } from '@playground/components/screens/utilities/constants/utility-catalog.constants';
import { Readme } from '@playground/components/shared/readme/readme';

@Component({
  selector: 'app-utilities',
  imports: [PageContainer, Alert, Button, Card, Grid, Icon, Readme, RouterLink, SearchInput, Stack, Tag, InfiniteScrollExamples],
  templateUrl: './utilities.html',
  styleUrl: './utilities.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Utilities {
  protected readonly query: WritableSignal<string> = signal('');

  protected readonly examples: Signal<readonly IUtilityExample[]> = computed(() => {
    const term = this.query().trim().toLowerCase();

    return UTILITY_EXAMPLES.filter((entry) => !term || \`\${entry.title} \${entry.description} \${entry.symbol}\`.toLowerCase().includes(term));
  });
}
`,"assets/code-snippets/utilities/utility-demo.scss.txt":`@use '@filip.mazev/blocks/core/styles/helpers' as *;

:host {
    display: block;
    min-inline-size: 0;
}

bx-card {
    --bx-card-padding: #{spacing(5)};
}

h3,
p,
dl {
    margin: 0;
}

h3 {
    color: var(--bx-text-heading);
    font-size: 1rem;
}

p,
dt {
    color: var(--bx-text-secondary);
    line-height: 1.65;
}

dl {
    display: grid;
    gap: spacing(3);

    > div {
        display: flex;
        flex-wrap: wrap;
        align-items: baseline;
        justify-content: space-between;
        gap: spacing(1) spacing(4);
    }
}

dd {
    margin: 0;
    font-weight: 600;
    overflow-wrap: anywhere;
}

.metric {
    margin-block: spacing(2);
    color: var(--bx-text-heading);
    font-size: clamp(1.75rem, 4vw, 2.75rem);
    font-weight: 600;
    line-height: 1.25;
    font-variant-numeric: tabular-nums;
}

.preview-cell {
    display: block;
    padding: spacing(5);
    border-radius: radius(md);
    background: var(--bx-bg-element);
    color: var(--bx-text-brand);
    text-align: center;
    font-weight: 600;
}

.identifier {
    display: block;
    font-family: ui-monospace, SFMono-Regular, monospace;
    overflow-wrap: anywhere;
}

.token-swatch {
    block-size: spacing(16);
    border: 1px solid var(--bx-border-default);
    border-radius: radius(md);
    forced-color-adjust: none;
}

.utility-overlay {
    display: block;
    inline-size: min(22rem, calc(100vw - #{spacing(8)}));
    max-block-size: calc(100dvh - #{spacing(8)});
    overflow: auto;
}

.lock-controls-content {
    max-block-size: calc(100dvh - #{spacing(8)} - #{spacing(12)} - #{spacing(12)});
    padding: spacing(1);
    overflow: auto;
    overscroll-behavior: contain;
}
`};var k=class i{document=p(te);router=p(Hr);readmeContent=v(()=>{let e=this.path().replace(/^\/+/,``);return x[w[e]??e]??`<p>This documentation page is unavailable. Run npm run tools:build-docs after adding a README.</p>`});path=g.required();navigateDocumentation(e){if(e.defaultPrevented||e.button!==0||e.ctrlKey||e.metaKey||e.shiftKey||e.altKey)return;let s=e.target?.closest?.(`a[href]`);if(!s||s.hasAttribute(`download`)||s.target&&s.target!==`_self`)return;let a=new URL(s.href,this.document.baseURI),t=new URL(`.`,this.document.baseURI);if(a.origin!==t.origin||!a.pathname.startsWith(t.pathname))return;let c=a.pathname.slice(t.pathname.length);/^(?:home|glass|appearance|utilities(?:\/[^/?#]+)?|components(?:\/[^/?#]+)?|release-notes(?:\/[^/?#]+)?|modal|toastr|tokens|icons|icon-catalog)\/?$/.test(c)&&(e.preventDefault(),this.router.navigateByUrl(`/${c}${a.search}${a.hash}`))}static ɵfac=function(n){return new(n||i)};static ɵcmp=V({type:i,selectors:[[`app-readme`]],hostBindings:function(n,s){n&1&&ve(`click`,function(t){return s.navigateDocumentation(t)})},inputs:{path:[1,`path`]},decls:5,vars:1,consts:[[1,`readme-container`],[1,`readme-header`],[1,`readme-content`,3,`innerHTML`]],template:function(n,s){n&1&&(ot(0,`div`,0)(1,`div`,1)(2,`span`),Te(3,`Documentation`),it()(),Jn(4,`article`,2),it()),n&2&&(D(4),Ka(`innerHTML`,s.readmeContent(),Lm))},styles:[`
[_nghost-%COMP%] {
  display: block;
  min-width: 0;
}
.readme-container[_ngcontent-%COMP%] {
  min-width: 0;
}
.readme-header[_ngcontent-%COMP%] {
  font-size: 0.75rem;
  color: var(--%NS%bx-text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid var(--%NS%bx-border-default);
}
.readme-content[_ngcontent-%COMP%] {
  min-width: 0;
  color: var(--%NS%bx-text-primary);
  line-height: 1.7;
  overflow-wrap: anywhere;
}
.readme-content[_ngcontent-%COMP%]     h1 {
  font-size: 1.75rem;
  margin-top: 1.5rem;
}
.readme-content[_ngcontent-%COMP%]     h2 {
  font-size: 1.375rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--%NS%bx-border-default);
}
.readme-content[_ngcontent-%COMP%]     h3 {
  font-size: 1.125rem;
  margin-top: 1.5rem;
}
.readme-content[_ngcontent-%COMP%]     p {
  margin-bottom: 1rem;
}
.readme-content[_ngcontent-%COMP%]     ul, 
.readme-content[_ngcontent-%COMP%]     ol {
  padding-left: 1.5rem;
}
.readme-content[_ngcontent-%COMP%]     li {
  margin-bottom: 0.5rem;
}
.readme-content[_ngcontent-%COMP%]     img {
  max-width: 100%;
  height: auto;
}
.readme-content[_ngcontent-%COMP%]     table {
  display: block;
  max-width: 100%;
  width: max-content;
  overflow-x: auto;
  border-collapse: collapse;
  font-size: 0.875rem;
  margin-block: 1rem;
}
.readme-content[_ngcontent-%COMP%]     th, 
.readme-content[_ngcontent-%COMP%]     td {
  padding: 0.5rem 0.75rem;
  border: 1px solid var(--%NS%bx-border-default);
  text-align: left;
  vertical-align: top;
}
.readme-content[_ngcontent-%COMP%]     th {
  background: var(--%NS%bx-bg-surface-alt);
}
.readme-content[_ngcontent-%COMP%]     code:not(.hljs) {
  padding: 0.15em 0.35em;
  border-radius: 0.25rem;
  background: var(--%NS%bx-bg-surface-alt);
  font-size: 0.85em;
}
.readme-content[_ngcontent-%COMP%]     blockquote {
  margin-inline: 0;
  padding-left: 1rem;
  border-left: 3px solid var(--%NS%bx-border-brand);
  color: var(--%NS%bx-text-secondary);
}`]})};export{k as n,S as t};