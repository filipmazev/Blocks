import{$n as fs,Ct as Qn,Hn as ds,Lr as ps,Qr as se,Ur as qn,Xn as f,Zn as fm,bi as z,er as g,f as Ce,gi as y,qt as Ve,st as M}from"./chunk-C74CBOi9.js";var x={"documentation/appearance/README.md":`<h1>Blocks appearance</h1>
<p>Glass is integrated into Blocks components and its existing theme engine. Surface colors, text, borders, radii and elevation come from Blocks tokens. Icons, labels, validation messages and other structural content inherit their containing surface instead of adding redundant blurred boxes.</p>
<p>The <code>@filip.mazev/blocks/effects/runtime</code> entry point shipped inside Blocks provides the same material and motion primitives without Angular, CDK or RxJS.</p>
<h2>Run and build</h2>
<p>Use an Angular 22 compatible Node version (22.22.3+, 24.15+, or 26+):</p>
<pre class="playground-code-block" tabindex="0" aria-label="sh code example"><code class="hljs language-sh">npm ci
npm start</code></pre>
<p>Open <a href="http://localhost:8080">http://localhost:8080</a>. The component catalogue links each component to its own demonstration and README. <code>/appearance</code> provides application-wide material controls and spatial-lighting and fade demonstrations. <code>/icon-catalog</code> provides searchable, paginated icons.</p>
<p>The playground defaults to Carbon / Cobalt (<code>#292a2d</code> / <code>#356fe8</code>) when no valid saved palette is present; Reset returns to Carbon / Cobalt.</p>
<p>The appearance preview is a scrollable national-parks article with English copy and photos adapted from EcoProject24. Independent glass search, bookmark, contents, and navigation controls stay over the article while its images and text scroll beneath them. Search filters the featured places, and the contents and navigation controls jump within the preview. The opening image uses the original mountain photograph; responsive WebP copies up to 2400 pixels wide are loaded eagerly, with smaller versions for narrow screens. The preview sits above a separate glassiness card. A short scroll down and back plays once when the preview comes into view, stops on interaction, and is skipped when reduced motion is enabled.</p>
<pre class="playground-code-block" tabindex="0" aria-label="sh code example"><code class="hljs language-sh">npm run build:playground
npm run build:blocks</code></pre>
<p>Documentation is generated automatically before serving/building the playground. After editing a README while the development server is already running, run <code>npm run tools:build-docs</code> to regenerate its bundled content. Runtime documentation does not fetch Markdown files. Fenced README examples are highlighted during generation with the same highlight.js engine used by live usage examples and configurator file tabs. Code blocks follow the active light/dark syntax theme and support keyboard scrolling; short inline API names remain inline code.</p>
<p>Keep Angular packages, CLI, builder and ng-packagr on major 22 with TypeScript 6. The checked-in lockfile preserves compatible versions. Runtime Markdown and Mermaid dependencies are no longer needed by the playground. Do not mix Angular 21 tooling with Angular 22.</p>
<h2>Palettes</h2>
<p>Each palette combines two tonal families. Choose one under <strong>Palettes</strong> in Appearance; the two swatches show its anchors. The same palette supplies both light and dark appearances.</p>
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
<p>Primary roles identify main actions, links and field focus. Accent roles identify checked checkboxes, radios and switches, slider progress, selected options and supporting actions. This follows Material&#39;s use of distinct color roles for emphasis while keeping broad surfaces neutral. For example, <code>color=&quot;accent&quot;</code> selects the second tone on buttons and tabs; <code>text-accent</code> follows it on icons. Documentation uses the primary role and Code Examples uses the accent role. Success, warning, danger and information retain their status meanings across palettes.</p>
<p>Canvas backgrounds stay neutral white or black, leaving application background styling to the consuming app. Cards, toolbars, navigation and default controls use neutral white/black/gray surfaces. Explicit primary and accent actions retain their palette roles. Scrollbars use a solid primary shade. The playground&#39;s Oddity canvas uses subtle tints from both tones over the neutral canvas. Cyberpunk retains yellow actions and blue-slate supporting controls over neutral surfaces.</p>
<p>Carbon / Cobalt combines a deep neutral charcoal with a saturated cobalt-blue accent. Its dark appearance uses neutral off-white primary actions instead of a pale colored tint. Azure / Ember pairs blue with burnt orange, while Brick Rose / Cyan pairs a muted rose-red with cyan. Their dark action shades are tuned individually: Cobalt provides a clear blue accent, Ember stays orange, and Brick Rose stays deeper and more muted than the danger red. Status colors are independent of these palette families.</p>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">const</span> theme = <span class="hljs-title function_">inject</span>(<span class="hljs-title class_">ThemingService</span>);
theme.<span class="hljs-title function_">setPalette</span>(<span class="hljs-string">&#x27;violet-teal&#x27;</span>);
theme.<span class="hljs-title function_">setApplicationTheme</span>(<span class="hljs-string">&#x27;dark&#x27;</span>);</code></pre>
<p>Use the palette IDs above in <code>ThemingService.setPalette()</code> and <code>ng add --theme</code>. Sass exports follow the same names, such as <code>$carbon-cobalt-light-theme</code> and <code>$carbon-cobalt-dark-theme</code>. High contrast overrides both expressive roles with contrast-first black/white values.</p>
<h2>Global configuration through Blocks</h2>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { inject } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ThemingService</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/core&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">Settings</span> {
  <span class="hljs-keyword">readonly</span> theme = <span class="hljs-title function_">inject</span>(<span class="hljs-title class_">ThemingService</span>);

  <span class="hljs-title function_">setAppearance</span>(<span class="hljs-params"></span>) {
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">theme</span>.<span class="hljs-title function_">setAppearance</span>({
      <span class="hljs-attr">glassiness</span>: <span class="hljs-number">0.5</span>,
      <span class="hljs-attr">quality</span>: <span class="hljs-string">&#x27;auto&#x27;</span>,
    });
  }
}</code></pre>
<p>There is no global semantic-emission setting. Interactive lights use the color of the active control or status item; passive edge cues sample the surrounding scene automatically. Neutral edges and restrained highlights define the material. Glass buttons follow the full glassiness range; fields and filled actions retain their own legibility constraints.</p>
<p><code>theme.appearance()</code> is the current typed configuration; <code>theme.resetAppearance()</code> restores defaults. Changes apply to existing components and open overlays. <code>glassiness</code> is 0\u20131, defaulting to the balanced midpoint of 0.5. It adjusts tint and blur together: the minimum is nearly clear with light blur, while the maximum caps tint at 80% to retain a glassy appearance. There are no independent tint, blur, or material preset settings. <code>reducedTransparency: true</code> supplies fully opaque surfaces and preserves the chosen glassiness for when transparency is restored. Quality is <code>auto</code>, <code>baseline</code>, or <code>enhanced</code>. Reduced motion continues through <code>BxA11yService</code>; system transparency and contrast preferences remain respected. Previously saved tint preferences migrate to glassiness, and a saved solid preference becomes reduced transparency.</p>
<p>The global styles are required once. <code>ng add @filip.mazev/blocks</code> adds the distributed material stylesheet to the application build. For an existing application, add <code>node_modules/@filip.mazev/blocks/effects/effects.css</code> to <code>angular.json</code> styles before the application stylesheet, or import <code>@filip.mazev/blocks/effects/effects.css</code> globally. Continue including the usual Blocks Sass theme once. The playground already does this.</p>
<h2>Existing components and custom surfaces</h2>
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
<p>Place custom surfaces on containers with measurable CSS boxes. Native replaced elements such as inputs and images need a wrapper for decoration; use the dedicated <code>SliderDirective</code> (<code>input[type=range][bxSlider]</code>) for native ranges; Blocks form components already provide appropriate wrappers. Nested surfaces retain tint and reflection while avoiding a second backdrop-filter pass.</p>
<h2>Overlay fades</h2>
<p>The engine fades the material surface itself in and out while preserving its full dimensions, blur, and translucency. The positioning pane remains at full opacity so it does not interrupt backdrop filtering. Reopening reverses from the current opacity. Dropdowns use <code>bxTransition=&quot;fade&quot;</code> by default; the former <code>emerge</code> value remains a compatibility alias.</p>
<p>Dropdowns expose <code>#actions=&quot;bxDropdown&quot;</code>, <code>open()</code>, <code>close()</code>, <code>toggle()</code>, <code>isOpen()</code> and <code>state()</code>. The adapter keeps an exiting panel inert and disposes it after motion settles, with revision guards for reopening. Focus and keyboard behavior remain native. No dragging or repositioning behavior was added in this iteration.</p>
<h2>Framework-independent API</h2>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> {
  configureAppearance,
  mountSurface,
  mountGlassScene,
  createGlassTransition,
} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/effects/runtime&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/effects/effects.css&#x27;</span>;

<span class="hljs-keyword">const</span> configuration = <span class="hljs-title function_">configureAppearance</span>(<span class="hljs-variable language_">document</span>.<span class="hljs-property">documentElement</span>, {
  <span class="hljs-attr">glassiness</span>: <span class="hljs-number">0.5</span>, <span class="hljs-attr">quality</span>: <span class="hljs-string">&#x27;auto&#x27;</span>,
});
<span class="hljs-keyword">const</span> surface = <span class="hljs-title function_">mountSurface</span>(button);
<span class="hljs-keyword">const</span> scene = <span class="hljs-title function_">mountGlassScene</span>(container, {
  <span class="hljs-attr">lights</span>: [{ <span class="hljs-attr">element</span>: lightMarker, <span class="hljs-attr">z</span>: <span class="hljs-number">180</span>, <span class="hljs-attr">intensity</span>: <span class="hljs-number">1</span>, <span class="hljs-attr">radius</span>: <span class="hljs-number">640</span> }],
  <span class="hljs-attr">reflectors</span>: [{ <span class="hljs-attr">element</span>: foreground, <span class="hljs-attr">depth</span>: <span class="hljs-number">80</span>, <span class="hljs-attr">intensity</span>: <span class="hljs-number">0.3</span> }],
});
<span class="hljs-comment">// Mount and lay out the panel first.</span>
<span class="hljs-keyword">const</span> panelSurface = <span class="hljs-title function_">mountSurface</span>(panel);
<span class="hljs-keyword">const</span> transition = <span class="hljs-title function_">createGlassTransition</span>(button, panel);
<span class="hljs-keyword">await</span> transition.<span class="hljs-title function_">enter</span>();
<span class="hljs-comment">// Later: await transition.exit(), then remove the panel.</span>
<span class="hljs-comment">// Call scene.refresh() after changing registered objects&#x27; position or appearance.</span>
<span class="hljs-comment">// On teardown: transition.destroy(); panelSurface.destroy(); surface.destroy();</span>
<span class="hljs-comment">// scene.destroy(); configuration.destroy();</span></code></pre>
<p>Transition promises resolve to <code>finished</code> or <code>cancelled</code>. Always guard asynchronous panel removal against a subsequent reopening. Controllers expose update/refresh and destroy methods; dispose them with their owning view. The former transition export remains as a deprecated compatibility alias; new code uses <code>createGlassTransition</code>.</p>
<p>The native example can be served without Angular:</p>
<pre class="playground-code-block" tabindex="0" aria-label="sh code example"><code class="hljs language-sh">npm run build:blocks
python3 -m http.server 8081</code></pre>
<p>Open <a href="http://localhost:8081/projects/blocks/effects/examples/">http://localhost:8081/projects/blocks/effects/examples/</a>.</p>
<h2>Lighting and rendering limits</h2>
<p>Lighting uses a bounded spatial model: up to four explicit lights and four foreground/background reflection proxies per scene. Every mounted glass surface also samples a few points around its edge and picks up subtle color from nearby visible CSS backgrounds, images, video and canvas. Paint order separates foreground from backdrop cues; depth and distance reduce their strength. Different sources retain localized edge colors, crossfading beneath existing semantic and explicit lights. Real CSS backdrop filtering continues to display the pixels behind a surface.</p>
<p>These are deliberate optical approximations. Media sampling uses a small downscaled buffer at selected edge points; the engine does not capture or mirror the page or arbitrary DOM into a texture, ray trace the page, infer a 3D scene, or physically refract all foreground/background content. Register moving scene objects and call <code>scene.refresh()</code> when your application changes them; call <code>refreshGlassLighting(element)</code> after application-driven changes around an automatically lit surface. Static scenes do no ongoing sampling. Layout changes are coalesced over 180 ms; visible live media is checked every 500 ms, backing off to 2 seconds when unchanged. Media pixels are cached and color-only changes reuse the existing edge positions without hit testing. Hidden pages and reduced-motion receivers stop live media checks.</p>
<p>Baseline uses one material layer and directional lighting. Enhanced rendering adds a colored reflection and a specular edge without another backdrop-filter pass. Auto mode considers CSS capability, coarse-pointer devices, reduced-cost device signals and data-saving preference. Explicit enhanced mode still requires the relevant CSS support. Reduced transparency, unsupported backdrop filters, and increased contrast provide opaque presentation.</p>
<p>Input and scene observation are shared per document. Scene updates batch a bounded number of visible surfaces; geometry reads precede writes. Animation frames stop when springs settle. Background scrolling can still cause browser GPU work even while JavaScript is idle: measure the real target devices before choosing high blur or putting glass over frequently changing content.</p>
`,"documentation/core/README.md":`<h1>@filip.mazev/blocks-core</h1>
<h2>Blocks - Core Library</h2>
<p><strong>Blocks Core</strong> is the foundational library for the Blocks ecosystem. It provides the essential infrastructure for building responsive, theme-aware Angular applications. It bridges the gap between TypeScript logic and SCSS styling, offering a unified system for breakpoints, device detection, scroll management and theming.</p>
<h2>Installation</h2>
<pre class="playground-code-block" tabindex="0" aria-label="bash code example"><code class="hljs language-bash">npm i @filip.mazev/blocks-core@latest</code></pre>
<p>Or with the global blocks <code>ng</code> command which adds all blocks packages and sets up your styles.scss</p>
<pre class="playground-code-block" tabindex="0" aria-label="bash code example"><code class="hljs language-bash">ng add @filip.mazev/blocks@latest</code></pre>
<h2>Styles &amp; Theming</h2>
<p>Blocks Core utilizes a robust SCSS architecture to manage design tokens and responsiveness.</p>
<h3>1. Palette provider</h3>
<p>The library uses a CSS Variable system generated via SCSS maps. To initialize the core theme, use the <code>bx-theme</code> mixin in your global styles.</p>
<pre class="playground-code-block" tabindex="0" aria-label="scss code example"><code class="hljs language-scss"><span class="hljs-keyword">@use</span> <span class="hljs-string">&quot;@filip.mazev/blocks&quot;</span> as *;

<span class="hljs-selector-pseudo">:root</span> {
  <span class="hljs-comment">// Initialize default light theme</span>
  <span class="hljs-keyword">@include</span> bx-theme(<span class="hljs-variable">$violet-teal-light-theme</span>);
}

<span class="hljs-comment">// Example: Switch to dark theme based on a class</span>
<span class="hljs-selector-tag">body</span><span class="hljs-selector-class">.dark-theme</span> {
  <span class="hljs-keyword">@include</span> bx-theme(<span class="hljs-variable">$violet-teal-dark-theme</span>);
}</code></pre>
<p>This generates paired palette roles with the <code>--bx-</code> prefix: <code>--bx-primary</code>, <code>--bx-accent</code>, their <code>on-*</code> foregrounds, subtle containers, text and borders. <code>--bx-bg-canvas</code> stays neutral in light and dark appearances. See <a href="appearance#palettes">Palettes</a> for the available pairs, CLI IDs and usage.</p>
<h3>2. Responsive Mixins</h3>
<p>The library provides mixins that strictly align with the WindowDimensionsService breakpoints in TypeScript.</p>
<p>Available Breakpoints:</p>
<ul>
<li><code>xs</code>: 360px</li>
<li><code>sm</code>: 640px</li>
<li><code>md</code>: 768px</li>
<li><code>lg</code>: 1024px</li>
<li><code>xl</code>: 1280px</li>
<li><code>2xl</code>: 1536px</li>
<li><code>3xl</code>: 1920px</li>
<li><code>4xl</code>: 2560px</li>
</ul>
<p>Usage:</p>
<pre class="playground-code-block" tabindex="0" aria-label="scss code example"><code class="hljs language-scss"><span class="hljs-keyword">@use</span> <span class="hljs-string">&quot;@filip.mazev/blocks-core/src/lib/styles/mixins&quot;</span> as *;

<span class="hljs-selector-class">.my-element</span> {
  <span class="hljs-attribute">width</span>: <span class="hljs-number">100%</span>;

  <span class="hljs-comment">// Applies when width &gt;= 768px</span>
  <span class="hljs-keyword">@include</span> respond-up(md) {
    <span class="hljs-attribute">width</span>: <span class="hljs-number">50%</span>;
  }

  <span class="hljs-comment">// Applies when width &lt;= 640px</span>
  <span class="hljs-keyword">@include</span> respond-down(sm) {
    <span class="hljs-attribute">display</span>: none;
  }
}</code></pre>
<h3>3. Design Tokens &amp; Utilities</h3>
<p>Blocks Core includes a strictly defined design system for spacing, border-radiuses, shadows, and z-indexes. This ensures visual consistency across all components and applications.</p>
<p>The library exposes these tokens in three different ways so you can use them wherever they fit best: <strong>SCSS Functions, HTML Utility Classes</strong>, and <strong>CSS Variables</strong>.</p>
<h4>Using SCSS Functions (Recommended for Component Styles)</h4>
<p>When writing custom component styles, use the provided SCSS functions to access the design tokens. This replaces hardcoded &quot;magic numbers&quot; (like <code>16px</code> or <code>1rem</code>) with standardized scale values.</p>
<pre class="playground-code-block" tabindex="0" aria-label="scss code example"><code class="hljs language-scss"><span class="hljs-keyword">@use</span> <span class="hljs-string">&quot;@filip.mazev/blocks-core/src/lib/styles/index&quot;</span> as blocks;

<span class="hljs-selector-class">.my-card-element</span> {
    <span class="hljs-comment">// Spacing</span>
    <span class="hljs-attribute">padding</span>: blocks.<span class="hljs-built_in">spacing</span>(<span class="hljs-number">4</span>) blocks.<span class="hljs-built_in">spacing</span>(<span class="hljs-number">6</span>); 
    <span class="hljs-attribute">margin-bottom</span>: blocks.<span class="hljs-built_in">spacing</span>(<span class="hljs-number">2</span>);

    <span class="hljs-comment">// Styling</span>
    <span class="hljs-attribute">border-radius</span>: blocks.<span class="hljs-built_in">radius</span>(lg);
    <span class="hljs-attribute">box-shadow</span>: blocks.<span class="hljs-built_in">shadow</span>(md);

    <span class="hljs-comment">// Z-Index</span>
    <span class="hljs-attribute">z-index</span>: blocks.<span class="hljs-built_in">z</span>(dropdown);
}</code></pre>
<h4>Using Utility Classes (Tailwind-Style)</h4>
<p>For rapid UI development directly in your templates, Blocks Core automatically generates utility classes prefixed with <code>.bx-</code>.</p>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;bx-p-4 bx-my-2 bx-px-6&quot;</span>&gt;</span>...<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;bx-rounded-md bx-rounded-t-lg&quot;</span>&gt;</span>...<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;bx-shadow-modal bx-z-fixed&quot;</span>&gt;</span>...<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></code></pre>
<h4>Using CSS Variables</h4>
<p>If you need to access tokens inline or outside of SCSS compilation, they are exposed globally on the <code>:root</code> element.</p>
<pre class="playground-code-block" tabindex="0" aria-label="scss code example"><code class="hljs language-scss"><span class="hljs-selector-class">.dynamic-element</span> {
    <span class="hljs-attribute">padding</span>: <span class="hljs-built_in">var</span>(--bx-space-<span class="hljs-number">4</span>);
    <span class="hljs-attribute">border-radius</span>: <span class="hljs-built_in">var</span>(--bx-rounded-pill);
    <span class="hljs-attribute">box-shadow</span>: <span class="hljs-built_in">var</span>(--bx-shadow-toast);
    <span class="hljs-attribute">z-index</span>: <span class="hljs-built_in">var</span>(--bx-z-modal);
}</code></pre>
<h4>Available Scales Reference</h4>
<ul>
<li>Spacing Scale: <code>0</code>, <code>1</code> (0.25rem), <code>2</code> (0.5rem), <code>3</code> (0.75rem), <code>4</code> (1rem), <code>5</code> (1.25rem), <code>6</code> (1.5rem), <code>8</code> (2rem), <code>10</code> (2.5rem), <code>12</code> (3rem)</li>
<li>Radius Scale: <code>none</code>, <code>sm</code>, <code>md</code>, <code>lg</code>, <code>xl</code>, <code>2xl</code>, <code>3xl</code>, <code>pill</code></li>
<li>Shadow Scale: <code>sm</code>, <code>md</code>, <code>lg</code>, <code>xl</code>, <code>modal</code>, <code>toast</code></li>
<li>Z-Index Scale: <code>base</code> (1), <code>dropdown</code> (100), <code>sticky</code> (200), <code>fixed</code> (300), <code>modal</code> (400), <code>popover</code> (500), <code>tooltip</code> (600), <code>toast</code> (9999)</li>
</ul>
<h2>Core Services</h2>
<h3><code>WindowDimensionsService</code></h3>
<p>Bridges the gap between CSS media queries and TypeScript logic. It provides reactive access to window size and standard breakpoint thresholds.</p>
<pre class="playground-code-block" tabindex="0" aria-label="typescript code example"><code class="hljs language-typescript"><span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">MyComponent</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> windowDimensionsService = <span class="hljs-title function_">inject</span>(<span class="hljs-title class_">WindowDimensionsService</span>);

  <span class="hljs-keyword">protected</span> windowDimensions = <span class="hljs-variable language_">this</span>.<span class="hljs-property">windowDimensionsService</span>.<span class="hljs-property">dimensions</span>;
  <span class="hljs-keyword">protected</span> breakpoints = <span class="hljs-variable language_">this</span>.<span class="hljs-property">windowDimensionsService</span>.<span class="hljs-property">breakpoints</span>;

  <span class="hljs-title function_">constructor</span>(<span class="hljs-params"></span>) {
    <span class="hljs-title function_">effect</span>(<span class="hljs-function">() =&gt;</span> {
      <span class="hljs-keyword">const</span> width = <span class="hljs-variable language_">this</span>.<span class="hljs-title function_">windowDimensions</span>().<span class="hljs-property">width</span>;
      <span class="hljs-keyword">const</span> isOnSmallScreen = width &lt; <span class="hljs-variable language_">this</span>.<span class="hljs-property">breakpoints</span>.<span class="hljs-property">sm</span>;
      <span class="hljs-comment">// handle logic for small screen for example</span>
    });
  }
}</code></pre>
<h3><code>ThemingService</code></h3>
<p>Handles the detection of system preferences (Dark/Light mode) and manages the application-level theme state.</p>
<ul>
<li><code>getSystemTheme$()</code>: Observes the OS/Browser prefers-color-scheme.</li>
<li><code>getApplicationTheme$()</code>: Observes the manually set application theme.</li>
<li><code>setApplicationTheme(theme: DeviceTheme)</code>: Manually overrides the current theme (&#39;light&#39; | &#39;dark&#39;).</li>
</ul>
<h3><code>DeviceTypeService</code></h3>
<p>Provides detailed information about the user&#39;s device, OS, and orientation. Useful for logic that depends on specific hardware capabilities (e.g., touch handling on Windows tablets vs Android).</p>
<p><code>getDeviceState()</code> returns:</p>
<ul>
<li>isMobile / isTablet / isDesktop</li>
<li>desktopOS (Windows, Mac, Linux, Unix)</li>
<li>mobileOS (iOS, Android)</li>
<li>isAppleDevice (checks both iOS and MacOS)</li>
<li>isLandscapeOrientation / isPortraitOrientation</li>
</ul>
<h3><code>ScrollLockService</code></h3>
<p>A utility to prevent background scrolling when overlays (like Modals) are active. This service handles complex edge cases, including:</p>
<ul>
<li><p><strong>Scrollbar Compensation</strong>: Adds padding to the body to prevent layout shifts when the scrollbar disappears.</p>
</li>
<li><p><strong>Mobile Touch</strong>: Prevents &quot;scroll chaining&quot; on mobile devices.</p>
</li>
<li><p><strong>Extreme Overflow</strong>: Optionally disables wheel and touch events entirely for strict locking.</p>
</li>
</ul>
<p>To use the scroll locking service within a component, in order to prevent enabling the scroll from one instance when another is disabling it, a <code>scrollLockId</code> must be generated and passed to the <code>disableScroll</code> and <code>enableScroll</code> methods, the provided <code>uuidv4</code> method from this library is recommended to be used for this.</p>
<pre class="playground-code-block" tabindex="0" aria-label="typescript code example"><code class="hljs language-typescript"><span class="hljs-keyword">private</span> <span class="hljs-attr">scrollLockId</span>: <span class="hljs-built_in">string</span> = <span class="hljs-title function_">uuidv4</span>();</code></pre>
<pre class="playground-code-block" tabindex="0" aria-label="typescript code example"><code class="hljs language-typescript"><span class="hljs-comment">// Lock scroll</span>
<span class="hljs-variable language_">this</span>.<span class="hljs-property">scrollLockService</span>.<span class="hljs-title function_">disableScroll</span>(<span class="hljs-variable language_">this</span>.<span class="hljs-property">scrollLockId</span>, {
  <span class="hljs-attr">handleTouchInput</span>: <span class="hljs-literal">true</span>,
  <span class="hljs-attr">handleExtremeOverflow</span>: <span class="hljs-literal">false</span>,
});

<span class="hljs-comment">// Unlock</span>
<span class="hljs-variable language_">this</span>.<span class="hljs-property">scrollLockService</span>.<span class="hljs-title function_">enableScroll</span>(<span class="hljs-variable language_">this</span>.<span class="hljs-property">scrollLockId</span>);</code></pre>
`,"documentation/modal/README.md":`<h1>@filip.mazev/blocks/modal</h1>
<h2>Blocks - Modal Library</h2>
<p><strong>Blocks</strong> is a powerful Angular component library. Its flagship feature is a highly customizable, service-driven <strong>Modal</strong> system that supports dynamic content, various positions, mobile-optimized swipe gestures, and robust theming.</p>
<h2>Features</h2>
<ul>
<li>Service-Driven: Open and close modals from anywhere in your application using ModalService.</li>
<li>Flexible Layouts: Supports center, left, and right positioning.</li>
<li>Mobile Optimized: Native-feeling swipe-to-close gestures for mobile devices.</li>
<li>Dynamic Data: Pass data to modal components with full type safety.</li>
<li>Confirmation Flows: Built-in support for &quot;Confirm Close&quot; prompts to prevent accidental data loss.</li>
<li>Theming: Deeply integrated Scss theming system using CSS variables.</li>
</ul>
<h2>Installation</h2>
<pre class="playground-code-block" tabindex="0" aria-label="bash code example"><code class="hljs language-bash">npm i @filip.mazev/blocks@latest</code></pre>
<p>Or with the global blocks <code>ng</code> command which adds all blocks packages and sets up your styles.scss</p>
<pre class="playground-code-block" tabindex="0" aria-label="bash code example"><code class="hljs language-bash">ng add @filip.mazev/blocks@latest</code></pre>
<h2>Usage</h2>
<h3>Create a Modal Component</h3>
<p>Your modal content components must extend <code>IModal&lt;TData, TResult&gt;</code>:</p>
<p>Typescript:</p>
<pre class="playground-code-block" tabindex="0" aria-label="typescript code example"><code class="hljs language-typescript"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">Modal</span>, <span class="hljs-title class_">ModalHeaderDirective</span>, <span class="hljs-title class_">ModalFooterDirective</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/modal&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;app-my-modal-component&#x27;</span>,
  <span class="hljs-attr">imports</span>: [
    <span class="hljs-title class_">ModalHeaderDirective</span>, <span class="hljs-comment">// optional (only if defining custom header)</span>
    <span class="hljs-title class_">ModalFooterDirective</span> <span class="hljs-comment">// optional (only if defining custom footer)</span>
  ],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./my-modal-component.html&#x27;</span>,
  <span class="hljs-attr">styleUrl</span>: <span class="hljs-string">&#x27;./my-modal-component.scss&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">MyModalComponent</span> <span class="hljs-keyword">extends</span> <span class="hljs-title class_ inherited__">Modal</span>&lt;<span class="hljs-title class_">MyData</span>, <span class="hljs-title class_">MyResult</span>&gt; {

}</code></pre>
<p>HTML (Template):</p>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> *<span class="hljs-attr">appModalHeader</span>&gt;</span>
    Example Header
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">h1</span>&gt;</span>
 {{ data.Title }}
<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
 {{ data.Body }}
<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">div</span> *<span class="hljs-attr">appModalFooter</span>&gt;</span>
    Example Footer
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></code></pre>
<h3>About <code>ModalRef&lt;D, R&gt;</code></h3>
<p>Accessible via this.modal inside any component that extends Modal. This reference provides programmatic control over the active modal instance, access to its configuration, and observable streams for its lifecycle events.</p>
<h4>Methods</h4>
<ul>
<li><code>close(state?, result?, forceClose?)</code>: Closes the modal instance.</li>
<li><code>state</code> (ModalCloseMode): The state of the closing action (e.g., &#39;confirm&#39; or &#39;cancel&#39;). Defaults to &#39;cancel&#39;.</li>
<li><code>result</code> (R): Optional data to return to the component that opened the modal.</li>
<li><code>forceClose</code> (boolean): If true, bypasses any confirmCloseConfig checks or guards. Defaults to false.</li>
<li><code>modalState$()</code>: Returns an <code>Observable&lt;ModalState&gt;</code>. Emits the current lifecycle state of the modal (OPENING, OPEN, CLOSING, CLOSED).</li>
<li><code>backdropClick()</code>: Returns an <code>Observable&lt;MouseEvent&gt;</code>. Emits an event whenever the user clicks on the modal&#39;s backdrop.</li>
<li><code>afterClosed()</code>: Returns an <code>Observable&lt;IModalCloseResult&lt;R | undefined&gt;&gt;</code>. Emits the final result object (containing the state and data) once the modal has fully closed and animations have finished.</li>
</ul>
<h4>Properties</h4>
<ul>
<li><code>modalConfig: (ModalConfig&lt;D&gt; | undefined)</code> Access to the configuration object used to open this modal. Useful for retrieving custom options or identifying the modal.</li>
<li><code>componentRef: (ComponentRef&lt;C&gt;)</code> The Angular ComponentRef of the content component (your component) inside the modal.</li>
<li><code>modalContainerRef: (ComponentRef&lt;ModalComponent&gt;)</code> The Angular ComponentRef of the wrapper container (the shell responsible for the backdrop, animations, and layout).</li>
<li><code>modalContainerElement: (HTMLElement)</code> The native HTML element of the modal container.</li>
</ul>
<h4><code>IModalCloseResult</code></h4>
<p>The structure of the object returned when a modal closes, accessible via the observable from afterClosed(). Contains:</p>
<ul>
<li><code>data</code> |<code>R</code>|: (optional) The data payload returned by the modal (e.g., the form result or selected item). This is undefined if no data was passed during closure.</li>
<li><code>state</code> |<code>ModalCloseMode</code>|: (required) Indicates how the modal was closed. Common values include &#39;confirm&#39; (successful action) or &#39;cancel&#39; (dismissed via backdrop, close button, or cancel action).</li>
</ul>
<h3>2. Opening the Modal</h3>
<p>Use the ModalService to launch your component:</p>
<pre class="playground-code-block" tabindex="0" aria-label="typescript code example"><code class="hljs language-typescript"><span class="hljs-keyword">private</span> <span class="hljs-keyword">readonly</span> modals = <span class="hljs-title function_">inject</span>(<span class="hljs-title class_">ModalService</span>);

...

<span class="hljs-keyword">const</span> modalRef = <span class="hljs-variable language_">this</span>.<span class="hljs-property">modals</span>.<span class="hljs-property">open</span>&lt;<span class="hljs-title class_">MyData</span>, <span class="hljs-title class_">MyResult</span>&gt;(<span class="hljs-title class_">MyModalComponent</span>, {
  <span class="hljs-attr">data</span>: { <span class="hljs-attr">id</span>: <span class="hljs-number">1</span> }, <span class="hljs-comment">// Must be of the type specified in MyData</span>
  <span class="hljs-attr">style</span>: {
    <span class="hljs-attr">layout</span>: <span class="hljs-string">&#x27;right&#x27;</span>, <span class="hljs-comment">// Slide in from the right (left and center are also available options)</span>
  },
  <span class="hljs-attr">header</span>: {
    <span class="hljs-attr">title</span>: <span class="hljs-string">&#x27;Modal Title Here&#x27;</span>,
    <span class="hljs-attr">icon</span>: { <span class="hljs-comment">// (optional) undefined or IconData</span>
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;chevron-right&#x27;</span>, <span class="hljs-comment">// any IconName</span>
        <span class="hljs-attr">color</span>: <span class="hljs-string">&#x27;text-danger&#x27;</span>, <span class="hljs-comment">// (optional) any ThemedColor, will default to currentColor</span>
        <span class="hljs-attr">bgColor</span>: <span class="hljs-string">&#x27;auto&#x27;</span>, <span class="hljs-comment">// (optional) undefined, auto or ThemedColor, will default to no background</span>
        <span class="hljs-attr">size</span>: <span class="hljs-string">&#x27;24&#x27;</span>, <span class="hljs-comment">// (optional) undefined or any IconSize, will default to &#x27;24&#x27;</span>
        <span class="hljs-attr">strokeWidth</span>: <span class="hljs-string">&#x27;1.5&#x27;</span> <span class="hljs-comment">// (optional) undefined or any IconStrokeWidth, will default to &#x27;1.5&#x27;</span>
    }
  }
});

modalRef.<span class="hljs-title function_">afterClosed</span>().<span class="hljs-title function_">subscribe</span>(<span class="hljs-attr">result</span>: <span class="hljs-title class_">IModalCloseResult</span>&lt;<span class="hljs-title class_">MyData</span>&gt; =&gt; {
    <span class="hljs-comment">// result.state can be &#x27;confirm&#x27; or &#x27;cancel&#x27;</span>
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#x27;Modal closed with action:&#x27;</span>, result.<span class="hljs-property">state</span>); 

    <span class="hljs-comment">// result.data is of type \`MyData\` |\`\` undefined\` since no data is returned on &#x27;cancel&#x27;</span>
    <span class="hljs-keyword">if</span>(result.<span class="hljs-property">data</span>) {
        <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#x27;Modal Result value:&#x27;</span>, result.<span class="hljs-property">data</span>);
    }
});</code></pre>
<h2>Configuration Options</h2>
<h3><code>IModalConfig</code></h3>
<p>Controls the behavior and content of the modal container:</p>
<ul>
<li><code>open</code> |<code>boolean</code>|: (optional) Whether the modal should be open or not, will default to true.</li>
<li><code>afterClose</code> |<code>() =&gt; Observable&lt;IModalCloseResult&lt;R | undefined&gt;&gt;</code>|: (optional) The function to run after the modal closes.</li>
<li><code>closeGuard</code> |<code>ModalCloseGuard</code>| (optional) The guard that will determine whether the modal can be closed or not</li>
<li><code>closeGuardOnlyOnCancel</code> |<code>boolean</code>| (optional) Whether the close guard should only be checked on cancel actions, will default to true</li>
<li><code>disableClose</code> |<code>boolean</code>|: (optional) Whether the modal should be closable or not, will default to false. This applies to the close button, escape key, and backdrop.</li>
<li><code>disableCloseOnBackdropClick</code> |<code>boolean</code>|: (optional) Whether the modal shouldn&#39;t be closable specifically when the user clicks on the backdrop, will default to false.</li>
<li><code>disableCloseOnNavigation</code> |<code>boolean</code>|: (optional) Whether the modal should remain open when the user navigates away from the current page, will default to false.</li>
<li><code>data</code> |<code>TData</code>|: (optional) The data to pass to the component of the modal. The component needs to use the @Inject(MODAL_DATA) or <code>data = inject&lt;string&gt;(MODAL_DATA);</code> (modern syntax) decorator to receive this.</li>
<li><code>style</code> |<code>IModalStyleConfig</code>|: (optional) The visual style configuration for the modal (layout, backdrop, etc.), will default to an empty object.</li>
<li><code>heaeder</code> |<code>IModalHeaderConfig</code>|: (optional) Header to be shown</li>
<li><code>contentClasses</code> |<code>string</code>|: (optional) Custom CSS classes to apply directly to the content container of the modal.</li>
<li><code>contentStyles</code> |<code>string</code>|: (optional) Inline CSS styles to apply directly to the content container of the modal.</li>
<li><code>id</code> |<code>string</code>|: (optional) The unique identifier of the modal, will default to a random string if not provided.</li>
</ul>
<h3><code>IModalStyleConfig</code></h3>
<p>Controls the visual appearance:</p>
<ul>
<li><code>layout</code> |<code>ModalLayout</code>|: (optional) The layout of the modal (can be &#39;center&#39;, &#39;left&#39;, &#39;right&#39; or &#39;bottom-sheet&#39;), will default to &#39;center&#39;.</li>
<li><code>breakpoints</code> |<code>Partial&lt;Record&lt;BreakpointKey, ModalLayout&gt;&gt;</code>|: (optional) A map of responsive overrides. It defines specific layouts for screen widths less than or equal to specific breakpoints. Defaults to undefined.</li>
<li><code>animate</code> |<code>boolean</code>|: (optional) Whether the modal should have open/close animations or not, will default to true.</li>
<li><code>hasBackdrop</code> |<code>boolean</code>|: (optional) Whether the modal should have a dimmed backdrop or not, will default to true.</li>
<li><code>closeDelay</code> |<code>number</code>|: (optional) The delay in milliseconds before the modal actually closes after the close action is triggered, will default to <code>MODAL_DEFAULT_ANIM_DURATION</code> = 175.</li>
<li><code>showCloseButton</code> |<code>boolean</code>|: (optional) Whether the modal should show a close button or not, will default to true.</li>
<li><code>mobileConfig</code> |<code>IBottomSheetModalConfig</code>|: (optional) The configuration for the bottom sheet modal (swipe limits, height), will default to an empty object.</li>
<li><code>contentWrapper</code> |<code>boolean</code>|: (optional) Whether the content should be wrapped in a default-styled container (providing padding/background) or not, will default to true.</li>
<li><code>wrapperClasses</code> |<code>string</code>|: (optional) Custom CSS classes to apply to the wrapper of the modal.</li>
<li><code>wrapperStyles</code> |<code>string</code>|: (optional) Inline CSS styles to apply to the wrapper of the modal.</li>
<li><code>overrideFullHeight</code> |<code>boolean</code>|: (optional) Whether the modal should override the default full-height restriction or not, will default to false.</li>
</ul>
<h3><code>IModalHeaderConfig</code></h3>
<p>Controls the header appearance;</p>
<ul>
<li><code>text</code> |<code>ResolvableText</code>|: The text to be shown in the header as <code>ResolvableText</code>, this can be a string or an object with a translation key</li>
<li><code>icon</code> |<code>IconData</code>|: (optional) An icon to display to the left of the text, will default to undefined</li>
</ul>
<h3>The Breakpoints</h3>
<p>Logic: The system uses a &quot;Max-Width&quot; matching strategy.</p>
<ol>
<li>The library sorts your defined breakpoints by size (smallest to largest).</li>
<li>It checks the current window width against these breakpoints.</li>
<li>The first breakpoint that satisfies windowWidth &lt;= breakpointWidth is applied.</li>
<li>If the window width is larger than all defined breakpoints, the default layout property is used.</li>
</ol>
<p>Available Keys: xs (360px), sm (640px), md (768px), lg (1024px), xl (1280px), 2xl (1536px), 3xl (1920px), 4xl (2560px).</p>
<p><em>Note: Reference the documentation for @filip.mazev/blocks-core for up-to-date values for these breakpoints</em>  </p>
<ul>
<li>Example:</li>
</ul>
<pre class="playground-code-block" tabindex="0" aria-label="typescript code example"><code class="hljs language-typescript"><span class="hljs-attr">style</span>: {
  <span class="hljs-attr">layout</span>: <span class="hljs-string">&#x27;right&#x27;</span>, <span class="hljs-comment">// Applied when width &gt; 1280px (Desktop)</span>
  <span class="hljs-attr">breakpoints</span>: {
    <span class="hljs-string">&#x27;sm&#x27;</span>: <span class="hljs-string">&#x27;bottom-sheet&#x27;</span>, <span class="hljs-comment">// Applied when width &lt;= 640px (Mobile)</span>
    <span class="hljs-string">&#x27;xl&#x27;</span>: <span class="hljs-string">&#x27;center&#x27;</span>        <span class="hljs-comment">// Applied when width &lt;= 1280px AND &gt; 640px (Tablet/Laptop)</span>
  }
}</code></pre>
<h3><code>IBottomSheetModalConfig</code></h3>
<p>Configuration for the mobile-optimized bottom sheet modal (bottom sheet):</p>
<ul>
<li><code>downSwipeLimit</code> |<code>number</code>|: (optional) The limit for down swipe to close the modal (1/N of modal height needs to be reached to trigger close), will default to MODAL_DOWN_SWIPE_LIMIT = 3</li>
<li><code>customHeight</code> |<code>number</code>|: (optional) A specific maximum height (in pixels) for the bottom sheet modal. If provided, this overrides the default dynamic height behavior.</li>
</ul>
<h2>Close Guards</h2>
<p>Close Guards provide a powerful mechanism to intercept and control the modal closing process. Similar to Angular Route Guards, they allow you to run logic, validate state, or prompt the user before a modal is actually dismissed.</p>
<h3><code>ModalCloseGuard</code> (Abstract Base Class)</h3>
<p>To implement custom logic, extend the abstract ModalCloseGuard class. Your guard must implement the canClose method, which returns a boolean (or an Observable/Promise of a boolean).</p>
<ol>
<li>Return true: The modal closes normally.</li>
<li>Return false: The closing action is aborted, and the modal remains open.</li>
</ol>
<pre class="playground-code-block" tabindex="0" aria-label="typescript code example"><code class="hljs language-typescript"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">ModalCloseGuard</span>, <span class="hljs-title class_">ModalService</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/modal&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Observable</span>, <span class="hljs-keyword">of</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;rxjs&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">UnsavedChangesGuard</span> <span class="hljs-keyword">extends</span> <span class="hljs-title class_ inherited__">ModalCloseGuard</span> {
  <span class="hljs-title function_">constructor</span>(<span class="hljs-params"><span class="hljs-keyword">private</span> <span class="hljs-attr">hasUnsavedChanges</span>: <span class="hljs-built_in">boolean</span></span>) {
    <span class="hljs-variable language_">super</span>();
  }

  <span class="hljs-title function_">canClose</span>(<span class="hljs-attr">modalService</span>: <span class="hljs-title class_">ModalService</span>): <span class="hljs-built_in">boolean</span> {
    <span class="hljs-keyword">if</span> (<span class="hljs-variable language_">this</span>.<span class="hljs-property">hasUnsavedChanges</span>) {
      <span class="hljs-keyword">return</span> <span class="hljs-title function_">confirm</span>(<span class="hljs-string">&#x27;You have unsaved changes. Discard?&#x27;</span>); <span class="hljs-comment">// Simple browser confirm</span>
    }
    <span class="hljs-keyword">return</span> <span class="hljs-literal">true</span>;
  }
}</code></pre>
<h3><code>ModalConfirmCloseGuard</code></h3>
<p>The library provides a built-in ModalConfirmCloseGuard implementation designed to make &quot;Confirm Close&quot; workflows (e.g., &quot;Are you sure you want to discard unsaved changes?&quot;) completely type-safe and effortless.</p>
<p>Instead of using a browser alert, this guard automatically opens another modal (your specified confirm component) and waits for its result.</p>
<p>Parameters:</p>
<ol>
<li><code>component</code>: The component class to use for the confirmation dialog.</li>
<li><code>config</code>: The configuration object for that confirmation component (passed as IModalConfig).</li>
</ol>
<h3>Usage Example</h3>
<p>This example demonstrates a deeply nested, type-safe confirmation flow.</p>
<pre class="playground-code-block" tabindex="0" aria-label="typescript code example"><code class="hljs language-typescript"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">ModalConfirmCloseGuard</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/modal&#x27;</span>;

<span class="hljs-comment">// Open the main modal</span>
<span class="hljs-keyword">const</span> modal = <span class="hljs-variable language_">this</span>.<span class="hljs-property">modals</span>.<span class="hljs-property">open</span>&lt;<span class="hljs-built_in">string</span>, <span class="hljs-literal">undefined</span>&gt;(<span class="hljs-title class_">CenteredModal</span>, {
  <span class="hljs-attr">data</span>: <span class="hljs-string">&quot;Hello from Modal!&quot;</span>,
  
  <span class="hljs-comment">// Attach the guard to the configuration</span>
  <span class="hljs-attr">closeGuard</span>: <span class="hljs-keyword">new</span> <span class="hljs-title class_">ModalConfirmCloseGuard</span>&lt;<span class="hljs-title class_">ConfirmData</span>, <span class="hljs-literal">undefined</span>&gt;(<span class="hljs-title class_">ConfirmCloseComponent</span>, {
    <span class="hljs-comment">// This configuration is strictly typed to ConfirmCloseComponent&#x27;s data requirements</span>
    <span class="hljs-attr">data</span>: {
      <span class="hljs-attr">title</span>: <span class="hljs-string">&#x27;Unsaved Changes&#x27;</span>,
      <span class="hljs-attr">message</span>: <span class="hljs-string">&#x27;Are you sure you want to close this modal?&#x27;</span>
    },
    <span class="hljs-attr">style</span>: {
      <span class="hljs-attr">layout</span>: <span class="hljs-string">&#x27;center&#x27;</span>
    }
  })
});</code></pre>
<h2>Global Modal Settings</h2>
<p>The library provides a global settings service (<code>ModalGlobalSettingsService</code>) that allows you to update default behaviors and styles for all modals in your application. These defaults are applied unless overridden by the <code>IModalConfig</code> you provide when opening a modal.</p>
<h3>Example Usage</h3>
<pre class="playground-code-block" tabindex="0" aria-label="typescript code example"><code class="hljs language-typescript"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">ModalGlobalSettingsService</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/modal&#x27;</span>;

<span class="hljs-title function_">constructor</span>(<span class="hljs-params"><span class="hljs-keyword">private</span> <span class="hljs-keyword">readonly</span> <span class="hljs-attr">globalSettings</span>: <span class="hljs-title class_">ModalGlobalSettingsService</span></span>) {}

<span class="hljs-comment">// Update global defaults at runtime</span>
<span class="hljs-variable language_">this</span>.<span class="hljs-property">globalSettings</span>.<span class="hljs-title function_">update</span>({
  <span class="hljs-attr">animate</span>: <span class="hljs-literal">false</span>,               <span class="hljs-comment">// Disable animations globally</span>
  <span class="hljs-attr">hasBackdrop</span>: <span class="hljs-literal">true</span>,            <span class="hljs-comment">// Ensure all modals have a backdrop</span>
  <span class="hljs-attr">disableCloseOnBackdropClick</span>: <span class="hljs-literal">true</span> <span class="hljs-comment">// Prevent closing on backdrop click</span>
});
</code></pre>
<h3>How It Works</h3>
<ul>
<li>Each setting in ModalGlobalSettingsService is a reactive signal (<code>signal&lt;boolean&gt;</code> or <code>signal&lt;ModalLayout&gt;</code>).</li>
<li>When a modal is opened, the service automatically resolves effective defaults from these signals.</li>
<li>Individual modal configurations (IModalConfig) can still override the global defaults on a per-modal basis.</li>
</ul>
<p>This enables dynamic control of modal behavior, such as temporarily disabling animations, forcing bottom-sheet layouts on mobile, or preventing accidental dismissals, without modifying individual modal calls.</p>
`,"documentation/toastr/README.md":`<h1>@filip.mazev/blocks/toastr</h1>
<h2>Blocks - Toastr Library</h2>
<p><strong>Blocks</strong> is a powerful Angular component library. The <strong>Toastr</strong> package provides a highly customizable, component-driven toast notification system. It features robust queue management, swipe-to-dismiss gestures for mobile, flexible screen positioning, and full type safety for dynamic content.</p>
<h2>Features</h2>
<ul>
<li>Service-Driven &amp; Component-Based: Queue toasts from anywhere using ToastrService while rendering your own custom Angular components inside the toast wrappers.</li>
<li>Smart Queue Management: Automatically limits the number of visible toasts on screen (configurable) and queues the rest.</li>
<li>Flexible Positioning: Supports top/bottom and left/right/center placements, adjusting automatically for mobile viewports.</li>
<li>Mobile Optimized: Native-feeling vertical swipe-to-dismiss gestures built-in.</li>
<li>Auto-Dismiss: Configurable timeouts to automatically close notifications.</li>
<li>Built-in UI Controls: Out-of-the-box support for customizable close buttons directly on the toast wrapper.</li>
<li>Dynamic Data: Pass strictly typed data to your toast components and return results.</li>
</ul>
<h2>Installation</h2>
<pre class="playground-code-block" tabindex="0" aria-label="bash code example"><code class="hljs language-bash">npm i @filip.mazev/blocks@latest</code></pre>
<p>Or with the global blocks <code>ng</code> command which adds all blocks packages and sets up your styles.scss</p>
<pre class="playground-code-block" tabindex="0" aria-label="bash code example"><code class="hljs language-bash">ng add @filip.mazev/blocks@latest</code></pre>
<h2>Usage</h2>
<h3>Create a Toast Component</h3>
<p>Your custom toast components must extend the <code>Toast&lt;TData, TResult&gt;</code> base class (which implements <code>IToast&lt;D, R&gt;</code>).</p>
<p>Typescript:</p>
<pre class="playground-code-block" tabindex="0" aria-label="typescript code example"><code class="hljs language-typescript"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Toast</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/toastr&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">INotificationView</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@interfaces/ui/inotification-view.interface&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;app-custom-toast&#x27;</span>,
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./custom-toast.html&#x27;</span>,
  <span class="hljs-attr">styleUrl</span>: <span class="hljs-string">&#x27;./custom-toast.scss&#x27;</span>
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">CustomToastComponent</span> <span class="hljs-keyword">extends</span> <span class="hljs-title class_ inherited__">Toast</span>&lt;<span class="hljs-title class_">INotificationView</span>, <span class="hljs-literal">undefined</span>&gt; {
  
  <span class="hljs-comment">// Example method to close the toast from within the component</span>
  <span class="hljs-keyword">protected</span> <span class="hljs-title function_">onDismiss</span>(): <span class="hljs-built_in">void</span> {
    <span class="hljs-variable language_">this</span>.<span class="hljs-title function_">close</span>(); 
  }
}</code></pre>
<p>HTML (Template):</p>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;notification&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;notification-close-button&quot;</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;onDismiss()&quot;</span>&gt;</span>\u2715<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;notification-content&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>{{ data.title }}<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">p</span> [<span class="hljs-attr">class</span>]=<span class="hljs-string">&quot;&#x27;notification-&#x27; + data.type&quot;</span>&gt;</span>{{ data.message }}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></code></pre>
<h3>About <code>ToastRef&lt;D, R&gt;</code></h3>
<p>Accessible via <code>this.toast</code> inside any component that extends <code>Toast</code>. This reference provides programmatic control over the active toast instance.</p>
<h4>Methods &amp; Observables</h4>
<ul>
<li><code>close()</code>: Triggers the exit animation and safely removes the toast from the DOM, allowing the next queued toast to appear.</li>
<li><code>pause()</code>: Pauses the auto-dismiss timer, preventing the toast from closing until resumed.</li>
<li><code>resume()</code>: Resumes the auto-dismiss timer if it was previously paused.</li>
<li><code>config</code>: The resolved <code>IToastConfig&lt;D&gt;</code> for this toast instance, combining global defaults and any overrides provided during queuing.</li>
<li><code>afterClosed$</code>: An <code>Observable&lt;void&gt;</code> that emits once the toast has fully closed and animations have finished.</li>
<li><code>onPause$</code>: An <code>Observable&lt;void&gt;</code> that emits when the toast&#39;s auto-dismiss timer is paused (e.g., on mouse hover).</li>
<li><code>onResume$</code>: An <code>Observable&lt;void&gt;</code> that emits when the toast&#39;s auto-dismiss timer is resumed (e.g., on mouse leave).</li>
</ul>
<h3>2. Opening the Toast</h3>
<p>Use the <code>ToastrService</code> to launch your component. Unlike modals, toasts are &quot;queued&quot;, meaning if you exceed the <code>maxOpened</code> limit, they will wait their turn before displaying.</p>
<pre class="playground-code-block" tabindex="0" aria-label="typescript code example"><code class="hljs language-typescript"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span>, inject } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ToastrService</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/toastr&#x27;</span>;

<span class="hljs-meta">@Component</span>({ ... })
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">MyFeatureComponent</span> {
    <span class="hljs-keyword">private</span> <span class="hljs-keyword">readonly</span> toastr = <span class="hljs-title function_">inject</span>(<span class="hljs-title class_">ToastrService</span>);

    <span class="hljs-keyword">public</span> <span class="hljs-title function_">showNotification</span>(<span class="hljs-params"><span class="hljs-attr">view</span>: <span class="hljs-title class_">INotificationView</span></span>) {
        <span class="hljs-keyword">const</span> toastRef = <span class="hljs-variable language_">this</span>.<span class="hljs-property">toastr</span>.<span class="hljs-title function_">queueToast</span>(<span class="hljs-title class_">CustomToastComponent</span>, {
            <span class="hljs-attr">data</span>: view, <span class="hljs-comment">// Strictly typed to INotificationView</span>
            <span class="hljs-attr">position</span>: <span class="hljs-string">&#x27;top-right&#x27;</span>,
            <span class="hljs-attr">durationInMs</span>: <span class="hljs-number">5000</span>,
            <span class="hljs-attr">swipeToDismiss</span>: <span class="hljs-literal">true</span>
        });

        toastRef.<span class="hljs-property">afterClosed$</span>.<span class="hljs-title function_">subscribe</span>(<span class="hljs-function">() =&gt;</span> {
            <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#x27;Toast finished and removed from screen.&#x27;</span>);
        });
    }
}</code></pre>
<h2>Configuration Options</h2>
<h3><code>IToastConfig&lt;D&gt;</code></h3>
<p>Controls the behavior, data, and placement of an individual toast:</p>
<ul>
<li><code>data</code> |<code>D</code>|: (optional) The typed payload passed into the toast component.</li>
<li><code>position</code> |<code>ToastPosition</code>|: (optional) Where the toast should appear on the screen (&#39;top-right&#39;, &#39;top-left&#39;, &#39;top-center&#39;, &#39;bottom-right&#39;, &#39;bottom-left&#39;, &#39;bottom-center&#39;). Defaults to &#39;top-right&#39;.</li>
<li><code>durationInMs</code> |<code>number</code>|: (optional) The time in milliseconds before the toast automatically closes. Defaults to 5000.</li>
<li><code>swipeToDismiss</code> |<code>boolean</code>|: (optional) Whether the user can swipe vertically to dismiss the toast. Defaults to true.</li>
<li><code>animate</code> |<code>boolean</code>|: (optional) Whether the toast should animate in and out. Defaults to true.</li>
<li><code>wrapperClass</code> |<code>string</code>|: (optional) A custom CSS class to apply to the toast&#39;s outer wrapper container. If omitted, it uses &#39;default-wrapper&#39;.</li>
<li><code>hasDefaultBackground</code> |<code>boolean</code>|: (optional) If set to false, the default background color will be removed from the default wrapper</li>
<li><code>showCloseButton</code> |<code>boolean</code>|: (optional) Displays a built-in close icon in the top right corner of the wrapper. Defaults to true.</li>
<li><code>closeButtonColor</code> |<code>ThemedColor</code>|: (optional) Applies a specific theme color to the close button. Defaults to &#39;text-primary&#39;.</li>
<li><code>showProgressBar</code> |<code>boolean</code>|: (optional) Displays an animated progress bar at the bottom of the wrapper indicating remaining duration. Defaults to true.</li>
<li><code>progressBarColor</code> |<code>ThemedColor</code>|: (optional) Applies a specific theme color to the progress bar. Defaults to &#39;text-primary&#39;.</li>
</ul>
<h2>Global Toastr Settings</h2>
<p>Similar to the modal library (<code>@filip.mazev/modal</code>), you can manage application-wide defaults using the <code>ToastrGlobalSettingsService</code>. These defaults apply automatically unless overridden by the IToastConfig during the queueToast call. It also is the place where <code>maxOpened</code> is configured since this is a global configuration.</p>
<p>The toast wrapper natively provides a top-right close button and a bottom animated progress bar (which pauses on hover and resizes dynamically). You can toggle their visibility or change their semantic colors universally across the app or on a per-toast basis.</p>
<h3>Example Usage</h3>
<pre class="playground-code-block" tabindex="0" aria-label="typescript code example"><code class="hljs language-typescript"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span>, inject } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ToastrGlobalSettingsService</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/toastr&#x27;</span>;

<span class="hljs-meta">@Component</span>({ ... })
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">AppComponent</span> {
  <span class="hljs-keyword">private</span> <span class="hljs-keyword">readonly</span> toastrGlobalSettings = <span class="hljs-title function_">inject</span>(<span class="hljs-title class_">ToastrGlobalSettingsService</span>);

  <span class="hljs-title function_">constructor</span>(<span class="hljs-params"></span>) {
    <span class="hljs-comment">// Update global defaults at runtime</span>
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">toastrGlobalSettings</span>.<span class="hljs-title function_">update</span>({
      <span class="hljs-attr">position</span>: <span class="hljs-string">&#x27;bottom-right&#x27;</span>,       <span class="hljs-comment">// Move all toasts to the bottom right</span>
      <span class="hljs-attr">durationInMs</span>: <span class="hljs-number">7500</span>,             <span class="hljs-comment">// Keep toasts open longer by default</span>
      <span class="hljs-attr">maxOpened</span>: <span class="hljs-number">3</span>,                   <span class="hljs-comment">// Only show 3 toasts at a time; queue the rest</span>
      <span class="hljs-attr">swipeToDismiss</span>: <span class="hljs-literal">true</span>,           <span class="hljs-comment">// Allow swipe gestures globally</span>
      <span class="hljs-attr">showCloseButton</span>: <span class="hljs-literal">false</span>,          <span class="hljs-comment">// Remove the default close button on all wrappers</span>
      <span class="hljs-attr">closeButtonColor</span>: <span class="hljs-string">&#x27;text-primary&#x27;</span>,
      <span class="hljs-attr">showProgressBar</span>: <span class="hljs-literal">true</span>,          <span class="hljs-comment">// Visually track the 7500ms duration or set to false to disable this</span>
      <span class="hljs-attr">progressBarColor</span>: <span class="hljs-string">&#x27;text-primary&#x27;</span>
    });
  }
}
</code></pre>
<h3>How It Works</h3>
<ul>
<li>The <code>ToastrGlobalSettingsService</code> utilizes Angular Signals (<code>signal&lt;T&gt;</code>) for its internal state.</li>
<li>Whenever <code>ToastrService.queueToast()</code> is called, it resolves missing configuration options against these global signals.</li>
<li>You can dynamically alter these settings at any point in your application&#39;s lifecycle, affecting all subsequent toast notifications.</li>
</ul>
<h2>Quick Status Toasts (SimpleToast)</h2>
<p>While toastr excels at rendering highly customized components, it also provides a built-in <code>SimpleToast</code> component for standard status notifications. You don&#39;t need to create your own components to display basic success, info, warning, or danger messages.</p>
<p>The <code>ToastrService</code> exposes four convenience methods: <code>queueSuccess</code>, <code>queueInfo</code>, <code>queueWarning</code>, and <code>queueDanger</code>.</p>
<h3>SimpleToast Usage</h3>
<p>These methods accept an <code>IQueueSimpleToastRequest</code> object. They automatically inherit your global settings unless overridden.</p>
<pre class="playground-code-block" tabindex="0" aria-label="typescript code example"><code class="hljs language-typescript"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span>, inject } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ToastrService</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/toastr&#x27;</span>;

<span class="hljs-meta">@Component</span>({ ... })
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">MyFeatureComponent</span> {
    <span class="hljs-keyword">private</span> <span class="hljs-keyword">readonly</span> toastr = <span class="hljs-title function_">inject</span>(<span class="hljs-title class_">ToastrService</span>);

    <span class="hljs-keyword">public</span> <span class="hljs-title function_">saveDocument</span>(<span class="hljs-params"></span>) {
        <span class="hljs-comment">// ... save logic ...</span>

        <span class="hljs-comment">// Fire a quick success toast</span>
        <span class="hljs-variable language_">this</span>.<span class="hljs-property">toastr</span>.<span class="hljs-title function_">queueSuccess</span>({
            <span class="hljs-attr">message</span>: <span class="hljs-string">&#x27;Your document was saved successfully.&#x27;</span>,
            <span class="hljs-attr">title</span>: <span class="hljs-string">&#x27;Save Complete&#x27;</span> <span class="hljs-comment">// Optional</span>
        });
    }

    <span class="hljs-keyword">public</span> <span class="hljs-title function_">reportIssue</span>(<span class="hljs-params"></span>) {
        <span class="hljs-comment">// Fire a quick danger toast with an overridden position</span>
        <span class="hljs-variable language_">this</span>.<span class="hljs-property">toastr</span>.<span class="hljs-title function_">queueDanger</span>({
            <span class="hljs-attr">message</span>: <span class="hljs-string">&#x27;Failed to connect to the server. Please try again later.&#x27;</span>,
            <span class="hljs-attr">position</span>: <span class="hljs-string">&#x27;bottom-center&#x27;</span>, <span class="hljs-comment">// Optional override</span>
            <span class="hljs-attr">durationInMs</span>: <span class="hljs-number">10000</span> <span class="hljs-comment">// Optional override</span>
        });
    }
}</code></pre>
<h3>The <code>IQueueSimpleToastRequest</code> Interface</h3>
<p>When using the quick status methods, the configuration is streamlined to focus on the text content:</p>
<ul>
<li><code>title</code> |<code>ResolvableText</code>|: (optional) A bolded header for the toast as <code>ResolvableText</code>, this can be a string or an object with a translation key</li>
<li><code>message</code> |<code>ResolvableText</code>|: The main text body of the toast as <code>ResolvableText</code>, this can be a string or an object with a translation key. If no title is provided, this text is automatically scaled up slightly for better visibility.</li>
<li><code>position</code> |<code>ToastPosition</code>|: (optional) Overrides the globally configured screen position.</li>
<li><code>durationInMs</code> |<code>number</code>|: (optional) Overrides the globally configured auto-close timeout.</li>
</ul>
`,"projects/blocks/README.md":`<h1>@filip.mazev/blocks</h1>
<p>This package is used to provide the Angular Schematic for adding the blocks libraries.</p>
<p>The <strong>Blocks</strong> umbrella package is the official entry point and Angular Schematic for the Blocks UI ecosystem. It provides a seamless, zero-config installation experience, allowing you to integrate our core tools, modals, and toast notifications into your Angular workspace with a single command.</p>
<h2>Installation</h2>
<p>Requires Angular 22 and RxJS 7.8 or later within major 7.</p>
<p>To install the complete Blocks ecosystem and automatically configure your workspace, run:</p>
<pre class="playground-code-block" tabindex="0" aria-label="bash code example"><code class="hljs language-bash">ng add @filip.mazev/blocks</code></pre>
<h2>What does ng add do?</h2>
<p>When you run the command above, the Angular CLI will execute our custom schematic to handle the boilerplate for you:</p>
<ul>
<li>Palette selection: Carbon / Cobalt is the CLI default. Azure / Ember, Violet / Teal, Tangerine / Indigo, Brick Rose / Cyan, Lime / Violet, and Cyberpunk are also available. Use <code>--theme=azure-ember</code> to select Azure / Ember.</li>
<li>Dependency Management: Automatically adds the latest versions of the Blocks ecosystem to your package.json and runs npm install.</li>
<li>SCSS Injection: Intelligently locates your project&#39;s global stylesheet (styles.scss or styles.sass) and injects the required @use statements, mixins, and both light/dark mode CSS variables based on your theme selection.</li>
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
<p>The Sass exports use the same names: <code>$azure-ember-light-theme</code> and <code>$azure-ember-dark-theme</code>. Carbon / Cobalt is the installer default; the playground starts with Carbon / Cobalt. Only the current palette IDs and Sass names are supported.</p>
<p>Buttons and tabs accept <code>color=&quot;accent&quot;</code> for the second tone. Icons and custom components can use semantic tokens such as <code>text-accent</code>, <code>accent-subtle</code>, <code>on-accent</code>, and <code>border-accent</code>. Canvas backgrounds stay neutral; status roles keep their meaning. See <a href="appearance#palettes">the palette reference</a> for all seven pairs.</p>
<h2>Appearance</h2>
<p>Version 1.4.0 integrates glass throughout Blocks using its existing semantic theme. Configure it application-wide through <code>ThemingService.setAppearance({ glassiness: 0.5 })</code>; use <code>resetAppearance()</code> for defaults. Existing controls receive their material automatically, including menus, dialogs and notifications.</p>
<p>Load <code>@filip.mazev/blocks/effects/effects.css</code> once globally alongside the Blocks Sass theme. <code>ng add</code> registers the stylesheet for new installations. <code>BxSurfaceDirective</code> from <code>@filip.mazev/blocks/effects</code> is available for custom containers and local overrides. The framework-independent engine is <code>@filip.mazev/blocks/effects/runtime</code>, included in the same package.</p>
<p>The source playground provides a dedicated README and working page for every component, with global appearance controls at <code>/appearance</code>.</p>
`,"projects/blocks/effects/README.md":`<h1>Appearance effects</h1>
<p>Blocks components use glass through the existing theme system. The <code>BxSurfaceDirective</code> applies the same material to custom containers. Labels, inputs and icon paths retain their native rendering; decorative lighting and blur sit behind content.</p>
<h2>Global configuration</h2>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { inject } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ThemingService</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/core&#x27;</span>;

<span class="hljs-keyword">private</span> <span class="hljs-keyword">readonly</span> theme = <span class="hljs-title function_">inject</span>(<span class="hljs-title class_">ThemingService</span>);

<span class="hljs-variable language_">this</span>.<span class="hljs-property">theme</span>.<span class="hljs-title function_">setAppearance</span>({
  <span class="hljs-attr">glassiness</span>: <span class="hljs-number">0.5</span>,    <span class="hljs-comment">// 0\u20131; the midpoint balances clarity and tint</span>
  <span class="hljs-attr">quality</span>: <span class="hljs-string">&#x27;auto&#x27;</span>,    <span class="hljs-comment">// auto | baseline | enhanced</span>
  <span class="hljs-attr">reducedTransparency</span>: <span class="hljs-literal">false</span>
});

<span class="hljs-comment">// Read the current configuration or return to defaults.</span>
<span class="hljs-keyword">const</span> current = <span class="hljs-variable language_">this</span>.<span class="hljs-property">theme</span>.<span class="hljs-title function_">appearance</span>();
<span class="hljs-variable language_">this</span>.<span class="hljs-property">theme</span>.<span class="hljs-title function_">resetAppearance</span>();</code></pre>
<p>Global settings apply throughout the application, including mounted controls and overlays. Color comes from the active Blocks palette and semantic tokens; changing the palette does not require configuring a separate glass color scheme.</p>
<h2>Custom surfaces</h2>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">BxSurfaceDirective</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/effects&#x27;</span>;</code></pre>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">section</span> <span class="hljs-attr">bxSurface</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;custom-panel&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">h2</span>&gt;</span>Project settings<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>This surface inherits the global material.<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span></code></pre>
<p>Provide layout and padding using the existing Blocks styling helpers. The directive supplies the material and token-based default border and radius. Controls and actionable surfaces get automatic hover/focus lighting; decorative containers receive nearby light without responding to hover themselves. Containing one input does not turn a panel into an interactive surface. Wrappers inside <code>bx-form-field</code> retain field interaction; custom control wrappers outside a field can opt in with <code>bxSurfaceInteractive</code>. Components can override the default border and radius with their existing tokens.</p>
<table>
<thead>
<tr>
<th>Input</th>
<th>Default</th>
<th>Local override</th>
</tr>
</thead>
<tbody><tr>
<td><code>bxSurfaceGlassiness</code></td>
<td>Global glassiness</td>
<td>0\u20131</td>
</tr>
<tr>
<td><code>bxSurfaceInteractive</code></td>
<td>Automatic control/action detection</td>
<td>Boolean; explicitly enables or disables interaction lighting and press deformation</td>
</tr>
<tr>
<td><code>bxSurfaceEmission</code></td>
<td>Theme accent (error color in invalid fields)</td>
<td>Override the semantic color emitted on hover, press or an active state</td>
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
<h2>Composition and motion</h2>
<p>Use a single backing per physical surface. For example, a menu owns the backing while menu-item content shares it; a form-field label does not need an extra blurred card. Apply <code>bxTransition=&quot;fade&quot;</code> on a dropdown to fade its menu without resizing its contents. The fade runs on the material itself, preserving the configured translucency and blur throughout the animation.</p>
<p>Buttons, links, native field surfaces and elements with actionable ARIA roles automatically illuminate their border and nearby surfaces on hover, press, or keyboard focus. Editable field surfaces also illuminate for pointer focus; ordinary actions do not stay lit solely because a click left native focus on them. Checked, pressed, selected, and current states keep the light enabled. Expanded popup triggers also retain light, while plain layout-disclosure controls do not become selected just by expanding. Plain panels, sections and other decorative containers remain passive receivers, while their edges pick up subtle color from nearby foreground and background content. The runtime samples CSS backgrounds and local pixels from visible images, video and canvas, then uses paint order, depth and distance to shape the edge tint. Give a custom clickable element its appropriate role (such as <code>role=&quot;button&quot;</code>), or explicitly enable <code>bxSurfaceInteractive</code> for a custom interaction. Use <code>bxSurfaceEmission</code> only to override the semantic color. The source is the element\u2019s geometry, never the mouse coordinates.</p>
<p>Presses use the shared pressure spring for a soft inset sheen. Blocks buttons also compress their content inside a fixed hit area; quick taps still receive a visible response. Pointer release/cancellation, keyboard release, focus loss, hidden documents, and teardown clear press state. Touch hover does not latch. Reduced motion uses static press feedback.</p>
<p>There is no drag-to-reposition interaction in this iteration. Spatial highlights are a lightweight lighting approximation, while backdrop blur uses browser compositing. These effects do not ray-trace arbitrary DOM content. Rendering quality can add supported enhancements, and baseline/solid modes remain available for constrained devices.</p>
<h2>Accessibility and lifecycle</h2>
<p><code>BxA11yService</code> controls reduced motion. Reduced transparency, unsupported backdrop filters and forced colors use opaque surfaces. Give controls visible or accessible labels independently of the glass decoration.</p>
<p>The directive initializes only in the browser, runs decorative updates outside Angular and tears down its resources when the host is destroyed. Do not directly mount a second engine surface on a host already owned by the directive or a Blocks component.</p>
<h2>Framework independent engine</h2>
<p>The <code>@filip.mazev/blocks/effects/runtime</code> entry point included in Blocks exports the native DOM surface and transition APIs. Refer to its README for non-Angular use. The native runtime does not import Angular.</p>
<h2>Playground</h2>
<p>Use <code>/appearance</code> to configure the entire application and <code>/components/surface</code> to inspect a custom surface.</p>
<p>Inputs, searches, selects, checkboxes, radio buttons and switches inherit automatic interaction lighting. Invalid fields use the error color. Projected native controls wrapped in <code>bxSurface</code> inside <code>bx-form-field</code> receive the same field material, focus outline and invalid glow as packaged inputs. All emitters respect overlay boundaries and occlusion; light does not pass through a modal into the page or another dialog.</p>
`,"projects/blocks/effects/runtime/README.md":`<h1>Blocks effects runtime</h1>
<p>Framework independent glass surfaces, spatial lighting and overlay fades. Native DOM content keeps its layout, semantics and text rendering. This entry point imports no Angular code; it is bundled inside Blocks alongside the Angular adapter and application-wide theme controls.</p>
<h2>Install and use</h2>
<pre class="playground-code-block" tabindex="0" aria-label="sh code example"><code class="hljs language-sh">npm install @filip.mazev/blocks</code></pre>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/effects/effects.css&#x27;</span>;
<span class="hljs-keyword">import</span> { configureAppearance, mountSurface, createGlassTransition } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/effects/runtime&#x27;</span>;

<span class="hljs-keyword">const</span> config = <span class="hljs-title function_">configureAppearance</span>(<span class="hljs-variable language_">document</span>.<span class="hljs-property">documentElement</span>, {
  <span class="hljs-attr">glassiness</span>: <span class="hljs-number">0.5</span>,
  <span class="hljs-attr">quality</span>: <span class="hljs-string">&#x27;auto&#x27;</span>,
});
<span class="hljs-keyword">const</span> buttonSkin = <span class="hljs-title function_">mountSurface</span>(button);
<span class="hljs-keyword">const</span> panelSkin = <span class="hljs-title function_">mountSurface</span>(panel);

<span class="hljs-comment">// The application or overlay library positions the panel before this call.</span>
<span class="hljs-keyword">const</span> transition = <span class="hljs-title function_">createGlassTransition</span>(button, panel);
<span class="hljs-keyword">await</span> transition.<span class="hljs-title function_">enter</span>();
config.<span class="hljs-title function_">update</span>({ <span class="hljs-attr">glassiness</span>: <span class="hljs-number">.45</span> }); <span class="hljs-comment">// All existing surfaces and body-mounted overlays update.</span>
<span class="hljs-keyword">const</span> result = <span class="hljs-keyword">await</span> transition.<span class="hljs-title function_">exit</span>();
<span class="hljs-keyword">if</span> (result === <span class="hljs-string">&#x27;finished&#x27;</span>) panel.<span class="hljs-property">hidden</span> = <span class="hljs-literal">true</span>;

<span class="hljs-comment">// At component/application teardown:</span>
transition.<span class="hljs-title function_">destroy</span>(); buttonSkin.<span class="hljs-title function_">destroy</span>(); panelSkin.<span class="hljs-title function_">destroy</span>(); config.<span class="hljs-title function_">destroy</span>();</code></pre>
<p><code>configureAppearance</code> owns one root scope, merges updates, and restores the attributes and inline properties it owned on destroy. Mount it on <code>document.documentElement</code> to include overlays. Per-surface options override the global configuration; omitted options inherit it. There must be only one configuration controller per root and one surface controller per element. <code>surface.update(options)</code> replaces that surface&#39;s local options so <code>{}</code> returns it to global settings.</p>
<h2>Global material and theme contract</h2>
<p>The renderer defines no brand palette or spacing system. It uses the existing Blocks semantic tokens and preserves each component&#39;s border radius, size and layout. Load the glass CSS once after your theme CSS, and set border radius on your native element when using the package outside Blocks.</p>
<p><code>mountSurface(element)</code> includes a default token-based border. Buttons, links, native field surfaces and actionable ARIA roles automatically illuminate their border and nearby surfaces on interaction or an active ARIA state. Decorative containers receive nearby light without their own hover effect, even when they contain a single input such as a slider. Only wrappers within <code>bx-form-field</code> infer interactivity from their input; other custom wrappers can opt in with <code>interactive: true</code>. The default color is the theme accent, or the error color inside an invalid Blocks form field. Override <code>emission</code>/<code>focusEmission</code> for a different semantic color; <code>interactive</code> explicitly overrides automatic control/action detection.</p>
<table>
<thead>
<tr>
<th>Setting</th>
<th>Values</th>
<th>Inherited CSS property</th>
</tr>
</thead>
<tbody><tr>
<td><code>glassiness</code></td>
<td>0\u20131, balanced default 0.5</td>
<td><code>--bx-glassiness</code></td>
</tr>
<tr>
<td><code>quality</code></td>
<td><code>auto</code>, <code>baseline</code>, <code>enhanced</code></td>
<td>root <code>data-bx-glass-quality</code></td>
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
<p>Glassiness controls tint and blur together. Tint is <code>0.06 + 1.02 \xD7 glassiness \u2212 0.28 \xD7 glassiness\xB2</code>; blur is <code>4 + 24 \xD7 glassiness\xB2</code> CSS pixels. The minimum is nearly clear with a light blur, the midpoint uses 10 px blur and a balanced tint, and the maximum caps tint at 80% to remain glassy. Components retain their semantic minimum opacity where needed for readable controls. There are no selectable material presets or independent blur/tint options. Reduced transparency disables backdrop filtering and provides fully opaque surfaces without discarding the glassiness preference.</p>
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
<p>For example, a success toast can set <code>--bx-glass-surface: var(--bx-bg-success)</code> and retain its established semantic appearance. Outside Blocks, system colors supply neutral fallbacks.</p>
<h2>Spatial lighting and reflections</h2>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { mountGlassScene } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/effects/runtime&#x27;</span>;

<span class="hljs-keyword">const</span> scene = <span class="hljs-title function_">mountGlassScene</span>(<span class="hljs-variable language_">document</span>.<span class="hljs-property">documentElement</span>, {
  <span class="hljs-attr">lights</span>: [{ <span class="hljs-attr">element</span>: lamp, <span class="hljs-attr">z</span>: <span class="hljs-number">180</span>, <span class="hljs-attr">color</span>: <span class="hljs-string">&#x27;var(--bx-primary)&#x27;</span>, <span class="hljs-attr">intensity</span>: <span class="hljs-number">1.2</span>, <span class="hljs-attr">radius</span>: <span class="hljs-number">640</span> }],
  <span class="hljs-attr">reflectors</span>: [
    { <span class="hljs-attr">element</span>: backgroundShape, <span class="hljs-attr">depth</span>: -<span class="hljs-number">100</span>, <span class="hljs-attr">intensity</span>: <span class="hljs-number">.25</span> },
    { <span class="hljs-attr">element</span>: foregroundCard, <span class="hljs-attr">depth</span>: <span class="hljs-number">70</span>, <span class="hljs-attr">intensity</span>: <span class="hljs-number">.35</span> },
  ],
});

<span class="hljs-comment">// After application code moves one of those elements:</span>
scene.<span class="hljs-title function_">refresh</span>();
<span class="hljs-comment">// Or replace the scene configuration:</span>
scene.<span class="hljs-title function_">update</span>({ <span class="hljs-attr">lights</span>: [{ <span class="hljs-attr">x</span>: <span class="hljs-number">300</span>, <span class="hljs-attr">y</span>: <span class="hljs-number">80</span>, <span class="hljs-attr">z</span>: <span class="hljs-number">220</span>, <span class="hljs-attr">intensity</span>: <span class="hljs-number">1</span> }] });
<span class="hljs-comment">// On teardown:</span>
scene.<span class="hljs-title function_">destroy</span>();</code></pre>
<p>Coordinates are viewport CSS pixels. An element supplies its live bounding-box center (<code>offsetX</code>/<code>offsetY</code>, from 0 to 1, can move the source within it); a reflector uses its computed background color unless <code>color</code> is supplied. Signed <code>depth</code> places foreground and background reflection proxies relative to the glass plane. Light distance, height and falloff affect the position and strength of the highlight. Scrolling, resizing, visibility changes and explicit refreshes invalidate the scene; call <code>refresh()</code> after application-driven transforms or layout changes. For frequent updates that only move lights, <code>reuseGeometry: true</code> in the scene options retains receiver measurements until those invalidations. Ordinary scene updates continue to remeasure receivers.</p>
<p>Every mounted glass surface also gets subtle, localized edge colors from the visible layers around its perimeter. Different sources keep their own colors; ambient gradients crossfade beneath hover, focus, validation and explicit scene lights. The runtime samples nearby computed backgrounds and local pixels from visible images, video and canvas, including <code>pointer-events: none</code> backdrops. Hit-test order and stacking layers distinguish foreground from background; depth and distance reduce the contribution. CSS gradients are approximated from their color stops. If the browser blocks pixel access to cross-origin or tainted media, the runtime falls back to the element&#39;s computed CSS colors. Asset loads, layout/scroll changes, and visual class/style changes refresh the samples; call <code>refreshGlassLighting(element)</code> after application-driven changes to a custom surface&#39;s surroundings.</p>
<p>Portalled overlays can call <code>inheritGlassLighting(overlay, trigger)</code> before mounting their surfaces to receive light from the trigger&#39;s context. Call the returned cleanup function after removing the overlay. Tooltips and menus use this connection to preserve dialog boundaries and receive nearby colors. Tooltips remain transparent to pointer events.</p>
<p>For compound opaque shapes, <code>--bx-glass-unified-lighting: 1</code> exposes restrained samples of received lighting through <code>--bx-glass-lit-edge</code> and its <code>-top</code>, <code>-right</code>, <code>-bottom</code>, and <code>-left</code> variants. Tooltip bodies retain their neutral backing and use a subtle spatial rim; arrows sample their facing side instead of tinting the entire outline. Interior decorative lighting stays hidden to avoid coloring the fill or introducing seams.</p>
<p>This is a bounded, stylized lighting model. The browser&#39;s backdrop filter still displays content behind glass. Raster sampling uses a shared 32-by-32 scratch buffer and caches each source across receivers and frames; the package does <strong>not</strong> capture or mirror the page or arbitrary DOM into a texture, implement ray tracing, or physically refract page pixels. Registered foreground/background objects remain available as explicit reflection proxies when a more deliberate scene is needed. Gradient-backed reflectors can supply an explicit representative color.</p>
<h2>Overlay fades</h2>
<p>Overlays fade in over 180 ms and out over 140 ms using the Web Animations API. Their dimensions, clipping and text size remain unchanged. The fade composites the material surface itself, keeping its configured blur and tint throughout. The surrounding positioning pane stays opaque so it does not create a backdrop root that cuts off the page behind the glass. Native opacity interpolation avoids per-frame style mutations and lighting invalidation. Reversing an active fade continues from its current opacity; the interrupted promise resolves to <code>cancelled</code>.</p>
<p>The transition temporarily owns the first material surface\u2019s <code>opacity</code> and the target\u2019s <code>visibility</code>. If no material is present, it fades the target. The overlay positioner retains all geometry and transforms. Supply an already positioned target and destroy the transition when its overlay is removed. Both endpoints must belong to the same document. <code>refresh()</code> remains a compatibility no-op because a fade requires no geometry measurements. Version 0.1\u2019s <code>createLiquidTransition</code> and associated type names remain deprecated aliases for <code>createGlassTransition</code>.</p>
<h2>Press feedback</h2>
<p>The delegated pointer and keyboard handlers drive the existing pressure spring, including a visible initial response for quick taps. A soft inset sheen sits within the material\u2019s fixed clipping box. <code>--bx-glass-press</code> on the host exposes the current pressure to component content; Blocks buttons use it for a small compression without moving their hit area or overlay origin. Controller-owned pressure writes are excluded from scene invalidation, so a press does not resample the entire document every frame.</p>
<p>Pointer cancellation, matching key release, focus loss during a keyboard press, document/window blur, disabled state, and teardown clear pressure. Touch does not latch hover emission, typing in a field does not activate keyboard pressure, and Space on a native link keeps its normal scrolling behavior. Reduced motion applies static pressure feedback immediately and removes it on release.</p>
<h2>Performance and accessibility</h2>
<ul>
<li>One lazy animation clock and delegated press, hover-boundary and focus handling per document. Moving the pointer within an element does not change lighting. Settled scenes schedule no animation frames.</li>
<li>At most four explicit lights and four reflectors per scene, and 24 visible surface lighting updates per frame. Interaction and active-state emitters share one delegated event stream and semantic-attribute observer; there is no observer per control.</li>
<li>Ambient geometry/style invalidations coalesce over 180 ms. A sampling frame handles at most four receivers, yielding after about 4 ms between receivers; a single receiver/readback remains atomic. Sixteen perimeter probes discover nearby colors, and media inventories update on insertion rather than on each frame.</li>
<li>Static images and failed readbacks are cached until their assets change. Only media used by visible receivers is polled: live canvas/video checks begin at 500 ms and back off to 2 seconds while unchanged. Color-only changes reuse source bindings and geometry without hit testing; coverage or layout changes rediscover the layers. Unchanged samples do not repaint. Image/video samples respect object fit and position.</li>
<li>Each surface uses two shared ambient edge layers for a 180 ms crossfade, instead of a DOM layer and animation per sample. Semantic lighting retains its independent contributions and immediate interaction updates. Hidden documents, reduced-motion receivers and unused media stop live polling; removing the last receiver tears down sampling. Static scenes schedule no polling or animation frames.</li>
<li>Nested surfaces retain their tint and reflection but skip additional backdrop filters.</li>
<li><code>baseline</code> uses one backdrop pass and a dynamic highlight. Supported <code>enhanced</code> rendering adds a narrow specular edge and colored reflection overlay without another backdrop pass. <code>auto</code> chooses the baseline for coarse pointers, data saving or low reported CPU concurrency; capability checks guard enhancements. Hardware hints are conservative defaults, not measured frame-rate guarantees.</li>
<li>Operating-system reduced motion/transparency, increased contrast and forced colors receive simpler rendering. A global <code>reducedTransparency: false</code> leaves the OS transparency preference enabled; explicit surface options can override it. An explicit reduced-motion setting takes precedence so Blocks can preserve its existing manual accessibility override; omit it to follow the OS. Reduced motion finishes transitions immediately. Unsupported backdrop filtering or color mixing produces an opaque fallback.</li>
<li>Backdrop filters still have a cost. Use one outer material for large sections, avoid full-screen stacked filtered panels, and profile actual target devices before treating any frame-rate target as verified.</li>
</ul>
<p>See <code>../examples/index.html</code> for a native DOM demo. Serve the repository over HTTP after building the workspace; no framework runtime is required. Build with <code>npm run build:blocks</code> at the workspace root; this builds all Blocks entry points and generates the native example\u2019s design tokens from Blocks. Browser regressions live in <code>tools/browser</code>.</p>
<h3>Semantic lighting</h3>
<p><code>BxGlassLightingService</code> in the Angular adapter combines sources within a form or toast stack. Validation text illuminates nearby controls and removes its source when the error clears. Toast light is anchored to the rendered progress bar\u2019s right edge, pauses with the toast, and illuminates adjacent notifications. Its own glow uses that same measured edge; it has no independent progress animation. <code>excludeSource</code> or <code>excludeElement</code> lets a source render its own glow separately. <code>observeGlassLighting</code> and <code>refreshGlassLighting</code> support custom decorative receivers, including the opaque circular slider thumb beside its native range input.</p>
<p>A surface can opt into semantic emission with <code>mountSurface(element, { emission: &#39;var(--bx-primary)&#39; })</code>. Hover, press, or keyboard focus activates that element as a source; its visible border and declared color determine the facing edges and corners of nearby surfaces. Hover light has a 120 CSS-pixel falloff radius and stays within the nearest main, aside, nav, dialog or overlay. Add <code>data-bx-light-scope</code> to isolate a custom region. Modal panels, native dialogs, popovers, fixed/sticky panels, CDK overlays and toast stacks form separate lighting boundaries. Positioned stacking layers also constrain hover/focus light. Receiver hit testing excludes covered surfaces, including rounded corners, and opening or removing overlays invalidates prior highlights. Each source fades independently over 200 ms, including the emitter\u2019s own colored border. Borders can combine several sources; retiring contributions fade out rather than jumping to a new source. Reduced motion applies changes immediately. Source coordinates project directly into each receiver without a second position spring, pointer tracking, DOM capture, or a permanent hover animation loop.</p>
<p>Backdrop behavior follows the browser\u2019s <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/backdrop-filter">backdrop-root rules</a>. Visual treatment follows <a href="https://developer.apple.com/design/human-interface-guidelines/materials">Apple\u2019s material guidance</a>: restrained highlights and readable translucent layers.</p>
<p>Editable field surfaces emit while their native control has focus by default; action surfaces emit for keyboard focus only. An explicit <code>focusEmission</code> opts a custom surface into illumination for any focus. Checked, pressed, selected, and current states retain emission. An expanded trigger retains emission when it also declares <code>aria-haspopup</code>; ordinary layout expansion alone does not select a control. Focused fields remain active when a different button is hovered. Decorative native-control receivers can pass their hit target as the third argument to <code>observeGlassLighting</code>.</p>
`,"projects/blocks/forms/README.md":`<h1>Forms</h1>
<p>Blocks fields use Angular 22 native signal control contracts and support Signal Forms, Reactive Forms, Template-driven Forms and standalone models. The library supplies presentation, interaction and accessible feedback; Angular owns validation and submission.</p>
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
<p>Import <code>SignalFormField</code>, <code>FormRoot</code>, and the used Blocks controls into the standalone component. Alias Angular&#39;s directive because Blocks also exports its frame component as <code>FormField</code>.</p>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">form</span> [<span class="hljs-attr">formRoot</span>]=<span class="hljs-string">&quot;account&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">bx-input-field</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Email&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;email&quot;</span> [<span class="hljs-attr">formField</span>]=<span class="hljs-string">&quot;account.email&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">bx-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;submit&quot;</span> [<span class="hljs-attr">disabled</span>]=<span class="hljs-string">&quot;!account().valid()&quot;</span> [<span class="hljs-attr">loading</span>]=<span class="hljs-string">&quot;account().submitting()&quot;</span>&gt;</span>Save<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">form</span>&gt;</span></code></pre>
<h2>Validation and state</h2>
<p>Schema validation supplies <code>required</code>, numeric and length limits, pattern metadata, errors, pending, disabled and readonly state to compatible controls. <code>valid()</code> is false while asynchronous validation is pending; <code>!invalid()</code> alone does not guarantee readiness.</p>
<p>Use <code>ignoreValidators: &#39;none&#39;</code> to gate the submission handler as well as the visible button while async validation is pending. Submission marks interactive fields touched, prevents duplicate submissions, and applies returned server errors to their target fields.</p>
<p>Read field state through the Angular field tree. Derive UI with <code>computed()</code> and use <code>effect()</code> for side effects when validity or pending state changes. Cross-field validators belong in the schema and can read related values. Blocks does not implement a second validation engine.</p>
<h2>Custom messages and visibility</h2>
<p>Shared inputs include <code>errorMessages</code>, <code>errorPriority</code>, <code>errorMode</code> (<code>first</code> or <code>all</code>), and <code>errorPolicy</code> (<code>touched</code>, <code>dirty</code>, <code>submitted</code>, <code>always</code>, or a function receiving <code>IErrorState</code>). The default reveals invalid fields after touch or submission. A function can include custom group or application state. The submitted policy tracks native form submission; when invoking submission programmatically outside the form element, pass the shared <code>submitted</code> input from application state.</p>
<p>Message resolution prefers projected <code>bx-error</code> content, then field message overrides, schema messages, and configured defaults. <code>minlength</code>/<code>maxlength</code> Reactive Forms keys and <code>minLength</code>/<code>maxLength</code> Signal Forms kinds are recognized. Resolvers receive the original error plus its parameter payload.</p>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">readonly</span> <span class="hljs-attr">messages</span>: <span class="hljs-title class_">ValidationMessages</span> = {
  <span class="hljs-attr">minLength</span>: <span class="hljs-function">(<span class="hljs-params">{ params }</span>) =&gt;</span> <span class="hljs-string">\`Use at least <span class="hljs-subst">\${params[<span class="hljs-string">&#x27;minLength&#x27;</span>] ?? params[<span class="hljs-string">&#x27;requiredLength&#x27;</span>]}</span> characters.\`</span>,
  <span class="hljs-attr">required</span>: { <span class="hljs-attr">key</span>: <span class="hljs-string">&#x27;validation.required&#x27;</span> }
};</code></pre>
<p>Put this declaration in the appropriate constants or types-supporting module according to the house rules. Translation-key overrides receive error parameters through the existing adapter. Default messages can be replaced application-wide using <code>FormSettingsService.update()</code>; instance inputs take precedence. No error-message map is mandatory when the schema supplies messages.</p>
<p>Projected <code>bx-error</code> supports rich content. <code>bx-hint</code>, <code>hint</code>, <code>hintEnd</code>, <code>bxPrefix</code>, and <code>bxSuffix</code> provide composable support and adornments. Supporting text and errors are associated automatically through <code>aria-describedby</code>. Custom error regions announce changes politely.</p>
<h2>Compatibility and migration</h2>
<p>Existing <code>[formControl]</code>, <code>formControlName</code>, and <code>[(ngModel)]</code> component bindings remain supported. Text edits honor Reactive Forms blur and submit update strategies. <code>reset()</code> on the owning field/form clears component interaction and parse state. Standalone value controls expose <code>[(value)]</code>; checkbox-style controls expose <code>[(checked)]</code>.</p>
<p><code>BxBaseControl</code> remains available for existing external CVA subclasses; repeated touch reporting and schema error-message handling are corrected. New Blocks controls use native signal contracts, without implementing CVA on the same component. The legacy individually bound radio remains available, while new forms should bind a <code>RadioGroup</code> once around its options.</p>
<p>Native <code>input</code>, <code>textarea</code> and <code>select</code> elements can use <code>bxInput</code> inside <code>bx-form-field</code>. Consumer components can provide <code>BX_FORM_FIELD_CONTROL</code> with <code>IFormFieldControl</code> to integrate their own state and focus behavior.</p>
<h2>Asynchronous options</h2>
<p>Single select and multiselect support application-owned requests, comparison, templates, incremental loading and error/retry behavior. Their scroll wrappers use <code>LoadMoreDirective</code>, which can also be used by future paginated components. See the <a href="components/load-more">load-more guide</a> and <a href="components/multi-select">multiselect guide</a>.</p>
<h2>Appearance and accessibility</h2>
<p>Controls follow Blocks semantic tokens, global theme/appearance configuration, reduced motion through <code>BxA11yService</code>, and reactive text resolution through <code>BX_I18N</code>. Configuration supports filled/outlined appearance, label placement, required markers, floating-label behavior and supporting-text sizing. Readonly and disabled states remain distinct in form state. All applicable controls accept <code>readOnly</code> as well as Angular Signal Forms&#39; lowercase <code>readonly</code> contract. Either true value prevents edits while retaining focusability. Readonly controls use the default cursor and suppress pointer hover/click highlights and interactive glass lighting while preserving their static appearance and keyboard focus styling. Focus origin uses the shared Angular CDK focus monitor. Changes to readonly state update mounted surfaces, including projected native controls and grouped radios. Native select integration prevents interaction without binding a nonexistent native readOnly property.</p>
<p>All existing form ellipsis and full-selection fit measurement use the public <code>TruncateDirective</code> from <code>@filip.mazev/blocks/primitives</code>. Set <code>[tooltipOnTruncate]=&quot;false&quot;</code> on an input, search, select, or multiselect to retain truncation while supplying your own tooltip. <code>FormSettingsService.update({ tooltipOnTruncate: false })</code> changes the application default; instance inputs take precedence. Tag and menu controls expose the same opt-out. The public <code>TruncatedTextPipe</code> (<code>bxTruncatedText</code>) and <code>truncatedText()</code> helper support custom feedback. See the <a href="components/truncate">shared truncation guide</a>.</p>
<h2>Playground</h2>
<p>Open <code>/components/signal-forms</code> for multiple controls, sync/async/cross-field rules, pending state, custom messages, server errors, disabled submission, dynamic disabled/readonly, reset and reactive validation status. Use Fill valid data to exercise submission, or an email containing <code>server-error</code> to see a server rejection.</p>
<p>The load-more and selection pages include fake APIs, failed requests, retry and small pages without scrollbars.</p>
`,"projects/blocks/forms/components/button/README.md":`<h1>Button</h1>
<p>An action control with Blocks intent colors, familiar variants and visible focus.</p>
<h2>Import</h2>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">Button</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/forms&#x27;</span>;</code></pre>
<p>Add the standalone component or directive to your component&#39;s <code>imports</code>.</p>
<h2>Usage</h2>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">bx-button</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;filled&quot;</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;save()&quot;</span>&gt;</span>Save changes<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span></code></pre>
<h2>API</h2>
<p><code>variant</code>: text, filled, tonal, icon, fab, mini-fab, extended-fab. <code>color</code>: primary, accent, success, danger, info, warn, grayscale. <code>outlined</code>, <code>elevated</code>, <code>disabled</code>, and <code>interactive</code> control presentation and availability.</p>
<p>Use the active palette&#39;s second tone for supporting actions:</p>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">bx-button</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;tonal&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;accent&quot;</span>&gt;</span>Explore<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span></code></pre>
<h2>Appearance</h2>
<p>Appearance uses Blocks semantic colors, spacing, radius and motion tokens. Glass surfaces inherit the application configuration from <code>ThemingService</code>; adjusting glassiness updates existing components and overlays. Icon, tonal and outlined glass buttons follow the full glassiness range without a minimum button-specific tint. Content-only parts share their containing surface instead of adding another backdrop filter.</p>
<p>Interactive button variants illuminate their border and nearby glass on hover, press and keyboard focus. Text buttons do not emit light, but keep their underline hover and focus outline. The same light remains active for <code>aria-pressed=&quot;true&quot;</code>, <code>aria-selected=&quot;true&quot;</code>, a current <code>aria-current</code> value, or an expanded popup trigger (<code>aria-expanded=&quot;true&quot;</code> with <code>aria-haspopup</code>). Plain expansion controls, such as a rail collapse action, do not acquire selected styling solely from <code>aria-expanded</code>. If an application used expansion as a toggle selection, use <code>aria-pressed</code> for that toggle instead. Primary and grayscale buttons use the primary palette role; accent buttons use the second tone; success, danger, info and warning buttons use their semantic color. Disabled and noninteractive buttons do not emit. Pointer focus alone does not keep an action illuminated after the pointer leaves; focus stays on the native control and keyboard focus remains visible. Touch does not latch hover illumination. No additional effects directive or lighting configuration is needed.</p>
<p>Filled buttons retain their semantic background and paired foreground color across glassiness settings and reduced transparency, including hover and press. Filled actions use an opaque palette fill and a foreground matched to each interaction state. Surface lighting remains active; tonal and outlined actions retain translucency. Text buttons have no background, border, shadow or backdrop blur; hover underlines the label and keyboard focus retains a visible outline. Tonal and outlined buttons keep their glass backing.</p>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { inject } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ThemingService</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/core&#x27;</span>;

<span class="hljs-keyword">private</span> <span class="hljs-keyword">readonly</span> theme = <span class="hljs-title function_">inject</span>(<span class="hljs-title class_">ThemingService</span>);

<span class="hljs-comment">// Application-wide, including open overlays.</span>
<span class="hljs-variable language_">this</span>.<span class="hljs-property">theme</span>.<span class="hljs-title function_">setAppearance</span>({ <span class="hljs-attr">glassiness</span>: <span class="hljs-number">0.5</span> });
<span class="hljs-comment">// Opaque presentation retains the same layout and component API.</span>
<span class="hljs-variable language_">this</span>.<span class="hljs-property">theme</span>.<span class="hljs-title function_">setAppearance</span>({ <span class="hljs-attr">reducedTransparency</span>: <span class="hljs-literal">true</span> });</code></pre>
<p><code>BxA11yService</code> controls reduced motion; reduced transparency and forced colors receive opaque presentation. Glass is decorative and does not replace labels, focus states, or semantic control states.</p>
<p>Press feedback applies to every <code>bx-button</code> variant. Translucent glass buttons deepen their inset reflection, gather a soft theme-colored sheen, and compress their content slightly while held. Solid filled and floating actions use their semantic pressed color and the same content compression, without an extra sheen or inset ring. The existing shared pressure spring returns the content and material to rest, including quick taps. The button\u2019s hit area, layout, and overlay origin stay fixed. Mouse, touch, Enter, and Space activation use the same pressure state; release, cancellation, blur, or removal clears it. Text buttons and <code>[surfaceEffects]=&quot;false&quot;</code> retain native press feedback without decorative lighting.</p>
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
<p>Reduced motion keeps static pressed-color, inset, or underline feedback without compression or rebound. Reduced transparency retains each variant\u2019s pressed appearance on the opaque surface. Forced colors uses a visible pressed outline, and disabled/noninteractive controls do not animate or illuminate.</p>
<h2>Behavior and accessibility</h2>
<p>Use the native <code>button[bx-button]</code> selector for actions and <code>a[bx-button]</code> with a real <code>href</code> for navigation. Give icon-only actions an accessible label. Disabled actions do not emit an action through a click listener.</p>
<p><code>surfaceEffects</code> defaults to <code>true</code>. Set <code>[surfaceEffects]=&quot;false&quot;</code> for dense collections such as the icon catalog to retain Blocks button styling, theme updates, focus, loading and disabled behavior without mounting per-button runtime glass lighting or deformation. It can be changed while mounted. An explicitly applied <code>bxSurface</code> directive continues to own its surface independently.</p>
<h2>Playground</h2>
<p>Open <code>/components/button</code> for filled, tonal, text, icon, outlined, floating, disabled, and runtime-effects-disabled examples with observable action results. Press and release with mouse, touch, Enter, or Space, then move the pointer away while leaving focus on the button to inspect its resting state. The global Appearance controls also exercise theme, glassiness, and reduced-motion changes.</p>
<h2>Asynchronous actions</h2>
<p><code>loading</code> enables a spinner, exposes <code>aria-busy</code>, and disables activation independently from the <code>disabled</code> input. When loading ends, the original disabled state is retained. The spinner appears before the text and replaces a projected Blocks icon at its original size, including under page zoom or surface transforms. An icon-only button retains its accessible name and dimensions.</p>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">bx-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;button&quot;</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;filled&quot;</span> [<span class="hljs-attr">loading</span>]=<span class="hljs-string">&quot;saving()&quot;</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;save()&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">bx-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;save&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;20&quot;</span> /&gt;</span>Save changes
<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span></code></pre>
<p>For another icon implementation, import <code>ButtonIconDirective</code> and mark its element <code>bxButtonIcon</code>. Plain text buttons get an icon-sized spinner only during loading. Spinner colors inherit the button foreground; <code>BxA11yService</code> removes rotation in reduced-motion mode.</p>
<p>Open <code>/components/button-loading</code> for fake asynchronous actions with and without icons. Application code owns the promise and loading state.</p>
`,"projects/blocks/forms/components/button/directives/README.md":`<h1>Button icon slot</h1>
<p>Import <code>ButtonIconDirective</code> from <code>@filip.mazev/blocks/forms</code> and mark a custom projected icon element with <code>bxButtonIcon</code>. The loading button replaces that element with a same-size spinner and restores it when the operation completes. Built-in <code>bx-icon</code> content is recognized automatically.</p>
<p>Provide the action name as button text or an accessible label, and mark decorative custom icons appropriately. See the parent <a href="components/button">button guide</a> and <code>/components/button-loading</code> playground page.</p>
`,"projects/blocks/forms/components/checkbox-indicator/README.md":`<h1>Checkbox indicator</h1>
<p>The reusable, decorative checkbox face used by Blocks checkbox controls and multiselect options. Supports unchecked, checked and partial selection using Blocks surfaces and icons.</p>
<h2>Import</h2>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">CheckboxIndicator</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/forms&#x27;</span>;</code></pre>
<p>Add <code>CheckboxIndicator</code> to the standalone component&#39;s <code>imports</code>.</p>
<h2>Usage</h2>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;button&quot;</span> <span class="hljs-attr">role</span>=<span class="hljs-string">&quot;checkbox&quot;</span> [<span class="hljs-attr">attr.aria-checked</span>]=<span class="hljs-string">&quot;partial() ? &#x27;mixed&#x27; : selected()&quot;</span>
  (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;toggleSelection()&quot;</span>&gt;</span>
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
</tbody></table>
<h2>Appearance and customization</h2>
<p>Uses the same shared surface and choice finish as <code>Checkbox</code>. <code>--bx-checkbox-size</code> customizes its dimensions (default <code>1.125rem</code>). Semantic tokens control colors and radius; theme and appearance changes update mounted indicators. Motion follows the shared accessibility styles. Forced colors and high contrast flatten the decorative finish.</p>
<h2>Behavior and accessibility</h2>
<p>The indicator is always hidden from assistive technology, has no tab stop and does not handle pointer or keyboard input. The owner must supply an accessible label, visible focus, checked/mixed state, readonly/disabled handling and keyboard interaction. Multiselect uses listbox option semantics for each row and checkbox semantics for the select-all action without nested interactive elements.</p>
<h2>Playground</h2>
<p>Open <code>/components/checkbox-indicator</code> for live unchecked, checked and partial states controlled by Blocks checkboxes. <code>/components/checkbox</code> and <code>/components/multi-select</code> demonstrate its integration.</p>
`,"projects/blocks/forms/components/checkbox/README.md":`<h1>Checkbox</h1>
<p>A boolean choice integrated with Angular forms.</p>
<h2>Import</h2>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">Checkbox</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/forms&#x27;</span>;</code></pre>
<p>Add the standalone component or directive to your component&#39;s <code>imports</code>.</p>
<h2>Usage</h2>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">bx-checkbox</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Receive updates&quot;</span> [<span class="hljs-attr">formControl</span>]=<span class="hljs-string">&quot;updates&quot;</span> /&gt;</span></code></pre>
<h2>API</h2>
<p>The control uses Angular 22 native signal control contracts. Use <code>[formField]</code>, <code>[formControl]</code>, <code>formControlName</code>, <code>[(ngModel)]</code>, or standalone <code>[(checked)]</code>. Shared presentation includes labels, hints, tooltips, required/readonly/disabled state, error policies and typed message resolvers. See the <a href="components/signal-forms">forms guide</a> for validation, submission, translations and compatibility.</p>
<h2>Appearance</h2>
<p>Appearance uses Blocks semantic colors, spacing, radius and motion tokens. Glass surfaces inherit the application configuration from <code>ThemingService</code>; adjusting glassiness updates existing components and overlays. Content-only parts share their containing surface instead of adding another backdrop filter.</p>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { inject } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ThemingService</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/core&#x27;</span>;

<span class="hljs-keyword">private</span> <span class="hljs-keyword">readonly</span> theme = <span class="hljs-title function_">inject</span>(<span class="hljs-title class_">ThemingService</span>);

<span class="hljs-comment">// Application-wide, including open overlays.</span>
<span class="hljs-variable language_">this</span>.<span class="hljs-property">theme</span>.<span class="hljs-title function_">setAppearance</span>({ <span class="hljs-attr">glassiness</span>: <span class="hljs-number">0.5</span> });
<span class="hljs-comment">// Opaque presentation retains the same layout and component API.</span>
<span class="hljs-variable language_">this</span>.<span class="hljs-property">theme</span>.<span class="hljs-title function_">setAppearance</span>({ <span class="hljs-attr">reducedTransparency</span>: <span class="hljs-literal">true</span> });</code></pre>
<p><code>BxA11yService</code> controls reduced motion; reduced transparency and forced colors receive opaque presentation. Glass is decorative and does not replace labels, focus states, or semantic control states.</p>
<h2>Behavior and accessibility</h2>
<p>Use a visible label. Space toggles the native input; focus and checked state remain visible in glass and solid modes. The control supports validation and touched state.</p>
<h2>Playground</h2>
<p>Open <code>/components/checkbox</code> for a working example and its current value or action result.</p>
<h2>Selection configuration</h2>
<p><code>indeterminate</code> is a boolean model with <code>indeterminateChange</code>. <code>clickAction</code> supports <code>check-indeterminate</code> (default), <code>check</code>, and <code>noop</code>. <code>labelPosition</code> is <code>before</code> or <code>after</code>. Use <code>checkedChange</code> or the Angular field value to observe changes. Required-true validation is reflected in required decoration and accessible state.</p>
<p>The checkbox face is shared with multiselect through the public <a href="components/checkbox-indicator">CheckboxIndicator</a> component. <code>--bx-checkbox-size</code> changes its dimensions (default <code>1.125rem</code>).</p>
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
<p><code>label</code>, <code>tooltip</code>, <code>error</code>: text or a translation key object. <code>forId</code>: the native input ID. <code>required</code>, <code>loading</code>: booleans. Projects the control and an optional <code>bx-error</code>.</p>
<h2>Appearance</h2>
<p>Appearance uses Blocks semantic colors, spacing, radius and motion tokens. Glass surfaces inherit the application configuration from <code>ThemingService</code>; adjusting glassiness updates existing components and overlays. Content-only parts share their containing surface instead of adding another backdrop filter.</p>
<p><code>--bx-field-padding-bottom</code> overrides the field wrapper\u2019s bottom padding (default: <code>0</code>). Set it on a group of controls when additional row spacing is needed.</p>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { inject } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ThemingService</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/core&#x27;</span>;

<span class="hljs-keyword">private</span> <span class="hljs-keyword">readonly</span> theme = <span class="hljs-title function_">inject</span>(<span class="hljs-title class_">ThemingService</span>);

<span class="hljs-comment">// Application-wide, including open overlays.</span>
<span class="hljs-variable language_">this</span>.<span class="hljs-property">theme</span>.<span class="hljs-title function_">setAppearance</span>({ <span class="hljs-attr">glassiness</span>: <span class="hljs-number">0.5</span> });
<span class="hljs-comment">// Opaque presentation retains the same layout and component API.</span>
<span class="hljs-variable language_">this</span>.<span class="hljs-property">theme</span>.<span class="hljs-title function_">setAppearance</span>({ <span class="hljs-attr">reducedTransparency</span>: <span class="hljs-literal">true</span> });</code></pre>
<p><code>BxA11yService</code> controls reduced motion; reduced transparency and forced colors receive opaque presentation. Glass is decorative and does not replace labels, focus states, or semantic control states.</p>
<h2>Behavior and accessibility</h2>
<p>Set <code>forId</code> to the actual input ID. Required decoration does not add validation to your control; apply the corresponding validator and native required attribute. Associate custom error text with <code>aria-describedby</code> when projecting your own control.</p>
<p>The information button reveals short help on mouse hover or keyboard focus, and toggles it on touch tap. Tap elsewhere, scroll, or press Escape to dismiss it. Its description also remains available to screen readers when the visual help is hidden. Keep essential field instructions visible rather than relying on the help button.</p>
<h2>Playground</h2>
<p>Open <code>/components/form-field</code> for a working example and its current value or action result.</p>
<h2>Composable support and control registration</h2>
<p><code>hint</code>, <code>hintEnd</code>, projected <code>bx-hint</code>, <code>bxPrefix</code>, and <code>bxSuffix</code> add support and adornments. <code>subscriptSizing</code> selects fixed or dynamic reserved space. Dynamic sizing collapses an empty supporting-text region and its gap, allowing controls to align with adjacent buttons and checkboxes. <code>hideRequiredMarker</code> hides decoration without changing validation. <code>tooltipLabel</code> provides translated accessible help-button text.</p>
<p>A registered control supplies its state through <code>BX_FORM_FIELD_CONTROL</code> and <code>IFormFieldControl</code>, or the <code>control</code> input. The frame discovers projected registrations, resolves error visibility, associates its supporting-text region and native control, and announces errors politely. The <code>bxInput</code> directive supplies this registration for native controls.</p>
<p>Built-in convenience controls forward projected rich errors and hints into their internal frame. See the <a href="components/signal-forms">forms guide</a> for global error policies, messages and form-system compatibility.</p>
`,"projects/blocks/forms/components/input-field/README.md":`<h1>Input field</h1>
<p>A text, date or numeric input with a floating label and validation feedback.</p>
<h2>Import</h2>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">InputField</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/forms&#x27;</span>;</code></pre>
<p>Add the standalone component or directive to your component&#39;s <code>imports</code>.</p>
<h2>Usage</h2>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">bx-input-field</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Project name&quot;</span> [<span class="hljs-attr">formControl</span>]=<span class="hljs-string">&quot;name&quot;</span> /&gt;</span></code></pre>
<h2>API</h2>
<p>The control uses Angular 22 native signal control contracts. Use <code>[formField]</code>, <code>[formControl]</code>, <code>formControlName</code>, <code>[(ngModel)]</code>, or standalone <code>[(value)]</code>. Shared presentation includes labels, hints, tooltips, required/readonly/disabled state, error policies and typed message resolvers. See the <a href="components/signal-forms">forms guide</a> for validation, submission, translations and compatibility.</p>
<p><code>type</code>: text, password, email, number, date, time, datetime-local. Numeric controls accept <code>min</code>, <code>max</code>, and <code>step</code>.</p>
<h2>Appearance</h2>
<p>Appearance uses Blocks semantic colors, spacing, radius and motion tokens. Glass surfaces inherit the application configuration from <code>ThemingService</code>; adjusting glassiness updates existing components and overlays. Content-only parts share their containing surface instead of adding another backdrop filter.</p>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { inject } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ThemingService</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/core&#x27;</span>;

<span class="hljs-keyword">private</span> <span class="hljs-keyword">readonly</span> theme = <span class="hljs-title function_">inject</span>(<span class="hljs-title class_">ThemingService</span>);

<span class="hljs-comment">// Application-wide, including open overlays.</span>
<span class="hljs-variable language_">this</span>.<span class="hljs-property">theme</span>.<span class="hljs-title function_">setAppearance</span>({ <span class="hljs-attr">glassiness</span>: <span class="hljs-number">0.5</span> });
<span class="hljs-comment">// Opaque presentation retains the same layout and component API.</span>
<span class="hljs-variable language_">this</span>.<span class="hljs-property">theme</span>.<span class="hljs-title function_">setAppearance</span>({ <span class="hljs-attr">reducedTransparency</span>: <span class="hljs-literal">true</span> });</code></pre>
<p><code>BxA11yService</code> controls reduced motion; reduced transparency and forced colors receive opaque presentation. Glass is decorative and does not replace labels, focus states, or semantic control states.</p>
<h2>Behavior and accessibility</h2>
<p>Use a label and an appropriate input type. Number input emits a number or null when empty. Validators should enforce application constraints, including minimum and maximum values.</p>
<p>Labels stay on one line and truncate with an ellipsis when space is limited, without overlapping the value or trailing actions. A truncated label shows its full text through the Blocks tooltip on hover, keyboard focus within the input, or a long press on the label. Resizing and language changes update truncation automatically. The full label remains the input&#39;s accessible name, and required markers remain visible. Suffixes and numeric steppers share a trailing action container aligned to the inline end.</p>
<p>Label ellipsis and measurement reuse the shared <a href="components/truncate">TruncateDirective</a>, including content, font, and viewport updates. Set <code>[tooltipOnTruncate]=&quot;false&quot;</code> to disable the automatic label tooltip without disabling ellipsis. Its default inherits <code>FormSettingsService.settings().tooltipOnTruncate</code>, then true.</p>
<h2>Playground</h2>
<p>Open <code>/components/input-field</code> for a working example and its current value or action result.</p>
<h2>Extended input API</h2>
<p><code>autocomplete</code>, <code>inputmode</code>, <code>spellcheck</code>, <code>name</code>, length and pattern constraints, <code>ariaLabelledBy</code>, <code>ariaDescribedBy</code> and explicit <code>id</code> reach the native element. Supported text types include <code>tel</code>, <code>url</code> and <code>search</code>. <code>multiline</code> enables a textarea; <code>rows</code>, <code>autosize</code>, <code>minRows</code>, and <code>maxRows</code> configure it. Composition input and autofill maintain floating-label behavior.</p>
<p>Number input preserves parse errors through Angular&#39;s <code>transformedValue</code>, keeps empty values as null, and supports keyboard-accessible steppers. <code>decreaseLabel</code> and <code>increaseLabel</code> are translatable. <code>appearance</code> (<code>fill</code> or <code>outline</code>), <code>floatLabel</code>, <code>hideRequiredMarker</code>, <code>subscriptSizing</code>, <code>hint</code> and <code>hintEnd</code> customize the frame. Prefix/suffix and rich errors can be projected directly into the convenience component.</p>
<p>Prefix/suffix content uses <code>--bx-field-adornment-padding</code> and <code>--bx-field-adornment-gap</code>, so text such as # and ID remains inset from the field edges. Supporting text uses <code>--bx-field-support-padding</code>.</p>
`,"projects/blocks/forms/components/multi-select/README.md":`<h1>Multiselect</h1>
<p>Checkbox-style multiple selection with remote pagination and explicit select-all intent.</p>
<h2>Import</h2>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">MultiSelect</span>, <span class="hljs-title class_">IBxSelectOption</span>, <span class="hljs-title class_">ISelectAllChange</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/forms&#x27;</span>;</code></pre>
<h2>Usage</h2>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">bx-multi-select</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Workspaces&quot;</span> [<span class="hljs-attr">options</span>]=<span class="hljs-string">&quot;options()&quot;</span> [<span class="hljs-attr">formField</span>]=<span class="hljs-string">&quot;account.workspaces&quot;</span>
  [<span class="hljs-attr">loading</span>]=<span class="hljs-string">&quot;loading()&quot;</span> [<span class="hljs-attr">hasMore</span>]=<span class="hljs-string">&quot;hasMore()&quot;</span> [<span class="hljs-attr">loadError</span>]=<span class="hljs-string">&quot;loadError()&quot;</span>
  [<span class="hljs-attr">isSearchable</span>]=<span class="hljs-string">&quot;true&quot;</span> [<span class="hljs-attr">externalFiltering</span>]=<span class="hljs-string">&quot;true&quot;</span> [<span class="hljs-attr">selectionScope</span>]=<span class="hljs-string">&quot;query()&quot;</span>
  (<span class="hljs-attr">search</span>)=<span class="hljs-string">&quot;search($event)&quot;</span> (<span class="hljs-attr">loadMore</span>)=<span class="hljs-string">&quot;loadNext($event)&quot;</span>
  (<span class="hljs-attr">selectAllIntentChange</span>)=<span class="hljs-string">&quot;handleSelectAll($event)&quot;</span> /&gt;</span></code></pre>
<h2>API</h2>
<p>Shares single-select options, comparison, templates, field presentation and pagination inputs. Bind <code>[formField]</code>, <code>[formControl]</code>, <code>formControlName</code>, <code>[(ngModel)]</code>, or standalone <code>[(value)]</code>. Form models should initialize the field with <code>[]</code>.</p>
<p><code>showSelectAll</code> defaults to true. <code>selectAllLabel</code> is translatable. <code>selectAll</code> is a boolean model for intent; <code>selectAllChange</code> is its boolean model event. <code>selectAllIntentChange</code> emits the detailed <code>ISelectAllChange&lt;T&gt;</code> with selected intent, scope, loaded values and reason. <code>selectionScope</code> defaults to the current search term.</p>
<p><code>selectionChange</code> emits <code>{ value, source }</code>; sources distinguish <code>user</code>, <code>select-all</code>, and automatic <code>page</code> selection. Standard value changes remain available through the chosen Angular form API or <code>valueChange</code>.</p>
<h2>Select-all semantics</h2>
<p>Enabling select all selects eligible loaded options. Future eligible options in the same scope are selected as pages arrive. Disabled options and disabled groups are excluded.</p>
<p>Unchecking an option disables select-all intent, removes only that value, retains other selections, and emits an <code>item-deselected</code> intent event. Future pages are no longer automatically selected. Explicitly turning select all off removes eligible current-scope selections while retaining unrelated selections.</p>
<p>A scope change ends select-all intent and emits <code>scope-change</code>, retaining explicit selections. Reset clears intent and emits <code>reset</code>. Loaded selected values are finite: the application uses intent plus scope when an API needs to select the entire remote result set. Do not send the loaded array as if it enumerated every remote record.</p>
<h2>Behavior</h2>
<p>The panel stays open while selecting. Arrow keys, Home/End, typeahead, Enter/Space, Escape and Tab support keyboard interaction. Visual checkboxes are non-interactive indicators inside listbox options, avoiding nested checkbox focus targets. <code>compareWith</code> supports stable object-value identity across API responses.</p>
<p>Pagination and failure/retry use the shared <a href="components/load-more">load-more directive</a>. Existing items stay visible during incremental requests and after failed pages. The application owns request cancellation and page/cursor state.</p>
<h2>Appearance and accessibility</h2>
<p>Uses Blocks semantic tokens and the active <code>ThemingService</code> configuration. Customize through documented inputs, templates and CSS variables. Existing components update when the application theme changes. Keyboard focus, forced colors, reduced transparency and <code>BxA11yService</code> reduced-motion preferences remain supported.</p>
<p>Text inputs accept <code>ResolvableText</code>: plain text or <code>{ key: &#39;translation.key&#39; }</code>. With <code>BX_I18N</code>, text is resolved reactively, including already-mounted controls when the adapter&#39;s <code>version</code> signal changes. Plain text works without an adapter.</p>
<h2>Playground</h2>
<p>Open <code>/components/multi-select</code>. Enable select all, load another page, deselect one item and load again. Selection and intent events are shown separately. The page includes fake requests, failure/retry, page-size controls and live translation changes.</p>
<h2>Selected-value summaries</h2>
<p><code>allSelectedText</code> replaces the listed values while select-all intent is enabled, for example <code>All locations</code> or <code>{ key: &#39;locations.all&#39; }</code>. This is separate from <code>selectAllLabel</code>, which names the select-all action inside the panel.</p>
<p><code>summaryThreshold</code> defaults to 2 and is clamped to a minimum of 2. More selections than the threshold use <code>selectedCountText</code>, whose default is <code>{count} selected</code>. Supply <code>{count} locations selected</code> or a translation key; the translation adapter receives <code>{ count }</code>.</p>
<p>When at least two selected labels cannot fit the available width, the count summary is also used below the configured threshold. A tooltip on hover, keyboard focus, or touch-and-hold exposes the full loaded selection. A custom <code>triggerTemplate</code> remains available for completely custom presentation.</p>
<p>The searchable playground includes 24 locations, tag-display controls and a summary-threshold control next to the page-size selector. Search terms remain visible and consistent with their results after closing and reopening the panel. The trigger&#39;s caret slot displays busy state without changing its dimensions.</p>
<h2>Tags</h2>
<p>Set <code>selectionDisplay=&quot;tags&quot;</code> to use the separate Blocks <code>Tag</code> component for selected values. <code>visibleTagCount</code> defaults to one; additional selections are represented by <code>tagOverflowText</code> (<code>+{count}</code> by default) with a tooltip listing their names. Customize ordinary tags with <code>tagConfig</code>, individual options with <code>option.tagConfig</code>, and the overflow tag with <code>overflowTagConfig</code>. Embedded tags have no separate tab stop; the combobox supplies the full selection description for keyboard access. <code>allSelectedText</code> remains the caption when select-all intent is active.</p>
<p>An ordinary tag automatically shows its full label on hover or touch-and-hold only when that label is clipped. Explicit tooltip descriptions and overflow-tag lists remain available independently of clipping. The combobox retains the complete selection tooltip for keyboard users, including a single clipped tag. In tag mode, touch tooltips belong to the tags so they do not overlap a parent tooltip. Labels, plain values, and the full-selection fit test all reuse <code>TruncateDirective</code>. <code>[tooltipOnTruncate]=&quot;false&quot;</code> disables automatic selection/truncation tooltips while preserving clipping, summary behavior, and explicit overflow-tag descriptions. This setting inherits <code>FormSettingsService</code> defaults and also suppresses automatic tooltips on ordinary embedded tags.</p>
<h2>Search loading</h2>
<p>The debounce/request period hides pagination actions and old results. Provide <code>loadingLabel</code> for centered loading text; without it, a simple centered spinner is shown. <code>loadingAriaLabel</code> supplies a translatable accessible name. Once results arrive, filtered pages can be paginated normally.</p>
<h2>Option spacing</h2>
<p>Rounded option rows have a small gap, shared by select and multiselect. Set <code>--bx-select-option-gap</code> on the control to customize it (default: Blocks <code>spacing(1)</code>). All built-in selection and caret icons use Blocks <code>Icon</code>; searching uses Blocks <code>SearchInput</code>.</p>
<p>Option and select-all checkboxes reuse the public <code>CheckboxIndicator</code> component, including its indeterminate state and themed finish. The option button remains the interactive target. <code>--bx-checkbox-size</code> customizes indicator dimensions without changing keyboard behavior.</p>
<p>The select-all checkbox also shows checked when every selectable loaded row is individually selected, including deselecting and reselecting the last missing row. Disabled rows and disabled groups do not contribute to this state. Clicking a checked header clears the eligible loaded rows. This finite visual state does not activate remote select-all intent: future pages remain unselected unless the explicit select-all action enabled intent.</p>
<h2>Clearing selection</h2>
<p>A Blocks \xD7 icon button appears before the dropdown/loading indicator, with equal spacing between the action and the selected text/tags and between the two icons, when a selection exists. Its reserved space prevents overlap with selected text or tags. Set <code>[clearable]=&quot;false&quot;</code> to hide it, or use <code>clearLabel</code> (<code>ResolvableText</code>, default <code>&#39;Clear selection&#39;</code>) to customize its accessible name. <code>clearTooltip</code> accepts its own <code>ResolvableText</code>, defaults to the resolved <code>clearLabel</code> when omitted, and can be set to an empty string to hide the tooltip.</p>
<p><code>clearSelection()</code> performs the same guarded action programmatically. Clearing closes the panel, marks the control touched and returns focus to the combobox; it preserves Angular&#39;s blur/submit update policy. The action is hidden while readonly and disabled when the control is disabled. Keyboard users can Tab to the action and activate it with Enter or Space.</p>
<p>Clearing writes <code>[]</code>, disables future-page select-all intent and emits <code>selectionChange</code> with <code>{ value: [], source: &#39;clear&#39; }</code>. If intent was enabled, <code>selectAllIntentChange</code> also emits with <code>selected: false</code> and <code>reason: &#39;clear&#39;</code>. Required controls continue to use the existing validation policy.</p>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">bx-multi-select</span> [<span class="hljs-attr">options</span>]=<span class="hljs-string">&quot;locations&quot;</span> [<span class="hljs-attr">clearLabel</span>]=<span class="hljs-string">&quot;{ key: &#x27;locations.clearAction&#x27; }&quot;</span>
  [<span class="hljs-attr">clearTooltip</span>]=<span class="hljs-string">&quot;{ key: &#x27;locations.clearTooltip&#x27; }&quot;</span> /&gt;</span></code></pre>
<p>Use <code>[clearable]=&quot;false&quot;</code> for required selections that must retain a value or for lists with an explicit \u201CNone\u201D option. This input controls the clear action independently of validation; <code>required</code> continues to enforce form validity. The select/multiselect playground includes an \u201CAllow clearing selection\u201D switch; configuration controls such as page size deliberately hide the clear action.</p>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">bx-multi-select</span> [<span class="hljs-attr">options</span>]=<span class="hljs-string">&quot;options&quot;</span> [<span class="hljs-attr">clearable</span>]=<span class="hljs-string">&quot;false&quot;</span> /&gt;</span></code></pre>
<h2>Select-all tooltip</h2>
<p><code>allSelectedTooltip</code> accepts the tooltip text for active <code>selectAll</code> intent, including the trigger&#39;s keyboard tooltip and the \u201Call selected\u201D tag&#39;s hover/touch tooltip. Pass <code>false</code> or an empty string to disable both. This also prevents the tag&#39;s automatic clipped-label tooltip or <code>tagConfig.tooltip</code> from replacing disabled feedback. Ordinary finite selections keep their existing tooltip behavior when intent ends.</p>
<p>Omitting the input preserves the list of loaded selected labels, subject to <code>tooltipOnTruncate</code>. Those labels describe only loaded items. For remote \u201CALL\u201D selection, disable that feedback or supply application-owned text representing the full selectable scope:</p>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">bx-multi-select</span> [<span class="hljs-attr">options</span>]=<span class="hljs-string">&quot;loadedLocations&quot;</span> [(<span class="hljs-attr">value</span>)]=<span class="hljs-string">&quot;selected&quot;</span> [(<span class="hljs-attr">selectAll</span>)]=<span class="hljs-string">&quot;allSelected&quot;</span>
  <span class="hljs-attr">allSelectedText</span>=<span class="hljs-string">&quot;All locations&quot;</span> [<span class="hljs-attr">allSelectedTooltip</span>]=<span class="hljs-string">&quot;false&quot;</span> /&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">bx-multi-select</span> [<span class="hljs-attr">options</span>]=<span class="hljs-string">&quot;loadedLocations&quot;</span> [(<span class="hljs-attr">value</span>)]=<span class="hljs-string">&quot;selected&quot;</span> [(<span class="hljs-attr">selectAll</span>)]=<span class="hljs-string">&quot;allSelected&quot;</span>
  <span class="hljs-attr">allSelectedText</span>=<span class="hljs-string">&quot;All locations&quot;</span> [<span class="hljs-attr">allSelectedTooltip</span>]=<span class="hljs-string">&quot;allLocationsTooltip()&quot;</span> /&gt;</span></code></pre>
<p>Compute <code>allLocationsTooltip</code> in the application using its API&#39;s total of selectable results. For example, return <code>&#39;All &#39; + pagination.selectableTotal + &#39; locations&#39;</code> or call the application&#39;s translation service with the total. Exclude disabled options and disabled groups across the whole result set, including unloaded pages. Do not subtract only the disabled items on the current page or substitute the loaded selected count for a remote total. If the API does not provide enough information, disable the tooltip or use a general description such as \u201CAll matching locations\u201D.</p>
<p>The component accepts <code>ResolvableText</code>, so simple translation keys also work and react to <code>BX_I18N</code> version changes. Interpolation, pluralization, total calculation and any more complex translation logic belong to the application; the component has no tooltip-parameters or pagination-total API. Updating the supplied text refreshes mounted tooltips. Explicit custom tooltips work independently of automatic <code>tooltipOnTruncate</code> feedback; <code>false</code> disables only select-all feedback.</p>
<p>The playground defaults to application-formatted text using the fake API&#39;s <code>selectableTotal</code>: 23 selectable locations across 24 results, excluding disabled Vienna even before its page loads. The total follows search scope. <strong>Select-all tooltip</strong> also demonstrates custom finished text, disabled feedback and the optional loaded-label compatibility behavior, in text and tag display.</p>
`,"projects/blocks/forms/components/radio-button/README.md":`<h1>Radio</h1>
<p>A single choice within a named group.</p>
<h2>Import</h2>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">Radio</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/forms&#x27;</span>;</code></pre>
<p>Add the standalone component or directive to your component&#39;s <code>imports</code>.</p>
<h2>Usage</h2>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">bx-radio</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Daily&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;frequency&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;daily&quot;</span> [<span class="hljs-attr">formControl</span>]=<span class="hljs-string">&quot;frequency&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">bx-radio</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Weekly&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;frequency&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;weekly&quot;</span> [<span class="hljs-attr">formControl</span>]=<span class="hljs-string">&quot;frequency&quot;</span> /&gt;</span></code></pre>
<h2>API</h2>
<p>Legacy individually bound radios support <code>[formControl]</code>, <code>formControlName</code>, and <code>[(ngModel)]</code>. For new forms, bind a <code>RadioGroup</code> with <code>[formField]</code> or an existing Angular form directive, and keep each radio value as its option value. See the <a href="components/radio-group">radio-group guide</a>.</p>
<p><code>value</code> is required and identifies this option. <code>name</code> groups the native radio inputs.</p>
<h2>Appearance</h2>
<p>Appearance uses Blocks semantic colors, spacing, radius and motion tokens. Glass surfaces inherit the application configuration from <code>ThemingService</code>; adjusting glassiness updates existing components and overlays. Content-only parts share their containing surface instead of adding another backdrop filter.</p>
<p>Selected radios keep emitting the theme color after pointer release and blur. Hovering the circle or its label highlights the surface and emits color; disabled controls do neither.</p>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { inject } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ThemingService</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/core&#x27;</span>;

<span class="hljs-keyword">private</span> <span class="hljs-keyword">readonly</span> theme = <span class="hljs-title function_">inject</span>(<span class="hljs-title class_">ThemingService</span>);

<span class="hljs-comment">// Application-wide, including open overlays.</span>
<span class="hljs-variable language_">this</span>.<span class="hljs-property">theme</span>.<span class="hljs-title function_">setAppearance</span>({ <span class="hljs-attr">glassiness</span>: <span class="hljs-number">0.5</span> });
<span class="hljs-comment">// Opaque presentation retains the same layout and component API.</span>
<span class="hljs-variable language_">this</span>.<span class="hljs-property">theme</span>.<span class="hljs-title function_">setAppearance</span>({ <span class="hljs-attr">reducedTransparency</span>: <span class="hljs-literal">true</span> });</code></pre>
<p><code>BxA11yService</code> controls reduced motion; reduced transparency and forced colors receive opaque presentation. Glass is decorative and does not replace labels, focus states, or semantic control states.</p>
<h2>Behavior and accessibility</h2>
<p>Use the same form control and name for mutually exclusive options, distinct values, and visible labels. A fieldset with a legend gives the group an accessible name.</p>
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
<p>Bind the group through <code>[formField]</code>, <code>[formControl]</code>, <code>formControlName</code>, <code>[(ngModel)]</code>, or standalone <code>[(value)]</code>. Individual options retain their option <code>value</code>; avoid binding both the group and its children to form controls.</p>
<p>Shared field inputs configure labels, hints, errors, visibility policy, readonly and required state. The group generates a shared native name unless <code>name</code> is provided. Legacy individually bound radio controls remain supported.</p>
<h2>Behavior</h2>
<p>Native radio semantics provide arrow navigation and one selected option. A disabled group disables its children; readonly blocks changes. Validation is presented once at group level. Focus delegation targets an available native radio.</p>
<h2>Appearance and accessibility</h2>
<p>Uses Blocks semantic tokens and the active <code>ThemingService</code> configuration. Customize through documented inputs, templates and CSS variables. Existing components update when the application theme changes. Keyboard focus, forced colors, reduced transparency and <code>BxA11yService</code> reduced-motion preferences remain supported.</p>
<p>Text inputs accept <code>ResolvableText</code>: plain text or <code>{ key: &#39;translation.key&#39; }</code>. With <code>BX_I18N</code>, text is resolved reactively, including already-mounted controls when the adapter&#39;s <code>version</code> signal changes. Plain text works without an adapter.</p>
<h2>Playground</h2>
<p>Open <code>/components/radio-group</code>, where the group participates in the complete Signal Forms example.</p>
`,"projects/blocks/forms/components/range-slider/README.md":`<h1>Range slider</h1>
<p>Two constrained range thumbs bound to a <code>[number, number]</code> form value.</p>
<h2>Import</h2>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">RangeSlider</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/forms&#x27;</span>;</code></pre>
<h2>Usage</h2>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">bx-range-slider</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Budget&quot;</span> [(<span class="hljs-attr">value</span>)]=<span class="hljs-string">&quot;range&quot;</span> [<span class="hljs-attr">min</span>]=<span class="hljs-string">&quot;0&quot;</span> [<span class="hljs-attr">max</span>]=<span class="hljs-string">&quot;100&quot;</span>
  [<span class="hljs-attr">step</span>]=<span class="hljs-string">&quot;10&quot;</span> [<span class="hljs-attr">discrete</span>]=<span class="hljs-string">&quot;true&quot;</span> [<span class="hljs-attr">showTickMarks</span>]=<span class="hljs-string">&quot;true&quot;</span> /&gt;</span></code></pre>
<h2>API</h2>
<p>Supports Angular forms and standalone value binding. <code>min</code>, <code>max</code>, and <code>step</code> configure the range. <code>discrete</code> shows formatted values; <code>displayWith(value)</code> customizes display and accessible value text. <code>startLabel</code> and <code>endLabel</code> are translatable thumb names. <code>showTickMarks</code> shows bounded tick indicators.</p>
<p>Ticks mark actual step values and are centered on the thumbs&#39; travel, including ranges where the step does not divide the span evenly. The selection fill uses the same thumb centers in LTR and RTL. Set <code>--bx-slider-thumb-size</code> to customize both native and decorative thumbs together; it defaults to the shared <code>spacing(6)</code> token, and the fill and tick insets follow that size.</p>
<p>Each bordered glass thumb magnifies and blurs the rail below it, including both selection boundaries when the thumbs are close. <code>--bx-slider-magnification</code> controls the enlargement and defaults to <code>1.5</code>; <code>--bx-slider-lens-blur</code> sets the lens and backdrop blur and defaults to <code>1.5px</code>. The lens follows values, resizing, theme changes and RTL without per-frame pixel sampling. Reduced transparency and increased contrast use the opaque fallback; forced colors keeps the native thumbs.</p>
<p>Thumbs cannot cross. Each thumb retains native keyboard input and an accessible name. Initialize form values with a pair of numbers. Shared hints, errors, readonly and disabled state are supported.</p>
<h2>Appearance and accessibility</h2>
<p>Uses Blocks semantic tokens and the active <code>ThemingService</code> configuration. Customize through documented inputs, templates and CSS variables. Existing components update when the application theme changes. Keyboard focus, forced colors, reduced transparency and <code>BxA11yService</code> reduced-motion preferences remain supported.</p>
<p>Text inputs accept <code>ResolvableText</code>: plain text or <code>{ key: &#39;translation.key&#39; }</code>. With <code>BX_I18N</code>, text is resolved reactively, including already-mounted controls when the adapter&#39;s <code>version</code> signal changes. Plain text works without an adapter.</p>
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
<p>The control uses Angular 22 native signal control contracts. Use <code>[formField]</code>, <code>[formControl]</code>, <code>formControlName</code>, <code>[(ngModel)]</code>, or standalone <code>[(value)]</code>. Shared presentation includes labels, hints, tooltips, required/readonly/disabled state, error policies and typed message resolvers. See the <a href="components/signal-forms">forms guide</a> for validation, submission, translations and compatibility.</p>
<p>Search value/placeholder ellipsis uses the shared <code>TruncateDirective</code>; its native-input measurement accounts for the current font and inline padding. <code>[tooltipOnTruncate]=&quot;false&quot;</code> disables automatic clipped-value tooltips while keeping ellipsis and measurement. The default inherits <code>FormSettingsService</code>, then true.</p>
<p><code>search</code> emits the current string on input and clear. Public methods <code>clear()</code>, <code>focus()</code>, and <code>retrySearch()</code> support integration. <code>retrySearch()</code> emits <code>retry</code> only when a request error exists and the control is editable and idle.</p>
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
</tbody></table>
<h3>Asynchronous requests</h3>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">bx-search-input</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Find a component&quot;</span> [(<span class="hljs-attr">value</span>)]=<span class="hljs-string">&quot;query&quot;</span>
    [<span class="hljs-attr">loading</span>]=<span class="hljs-string">&quot;loading()&quot;</span> [<span class="hljs-attr">loadError</span>]=<span class="hljs-string">&quot;loadError()&quot;</span>
    <span class="hljs-attr">loadingAriaLabel</span>=<span class="hljs-string">&quot;Searching components&quot;</span> <span class="hljs-attr">retryLabel</span>=<span class="hljs-string">&quot;Try again&quot;</span>
    [<span class="hljs-attr">retryConfig</span>]=<span class="hljs-string">&quot;{ variant: &#x27;tonal&#x27;, color: &#x27;accent&#x27; }&quot;</span>
    (<span class="hljs-attr">search</span>)=<span class="hljs-string">&quot;runSearch($event)&quot;</span> (<span class="hljs-attr">retry</span>)=<span class="hljs-string">&quot;runSearch($event)&quot;</span> /&gt;</span></code></pre>
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
<p>Import <code>DestroyRef</code>, <code>inject</code>, and <code>signal</code> from <code>@angular/core</code>. Supply your application API&#39;s <code>search(query, signal): Promise&lt;readonly string[]&gt;</code>. Add debouncing in the application when useful, and mark loading from the start of that debounce. Keep the previous results during a replacement request or failure; replace them only when the latest request succeeds. A successful empty response is distinct from a failure. Set <code>loading</code> synchronously in the event handler and clear <code>loadError</code> when starting a new attempt. The component makes no requests and has no pagination behavior.</p>
<h2>Appearance</h2>
<p>Appearance uses Blocks semantic colors, spacing, radius and motion tokens. Glass surfaces inherit the application configuration from <code>ThemingService</code>; adjusting glassiness updates existing components and overlays. Content-only parts share their containing surface instead of adding another backdrop filter.</p>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { inject } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ThemingService</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/core&#x27;</span>;

<span class="hljs-keyword">private</span> <span class="hljs-keyword">readonly</span> theme = <span class="hljs-title function_">inject</span>(<span class="hljs-title class_">ThemingService</span>);

<span class="hljs-comment">// Application-wide, including open overlays.</span>
<span class="hljs-variable language_">this</span>.<span class="hljs-property">theme</span>.<span class="hljs-title function_">setAppearance</span>({ <span class="hljs-attr">glassiness</span>: <span class="hljs-number">0.5</span> });
<span class="hljs-comment">// Opaque presentation retains the same layout and component API.</span>
<span class="hljs-variable language_">this</span>.<span class="hljs-property">theme</span>.<span class="hljs-title function_">setAppearance</span>({ <span class="hljs-attr">reducedTransparency</span>: <span class="hljs-literal">true</span> });</code></pre>
<p><code>BxA11yService</code> controls reduced motion; reduced transparency and forced colors receive opaque presentation. Glass is decorative and does not replace labels, focus states, or semantic control states.</p>
<p>The retry action uses the same Blocks <code>Button</code> and <code>LoadingSpinner</code> as select request feedback. Import <code>ISearchRetryConfig</code> from <code>@filip.mazev/blocks/forms</code> for typed presentation settings. Native browser search decorations are suppressed so only the named Blocks clear action appears. Set <code>--bx-search-feedback-gap</code> to customize the space between the field and its visible status message; it defaults to the shared spacing-2 token and applies equally to initial loading, errors, and retry loading.</p>
<h2>Behavior and accessibility</h2>
<p>The output is immediate; debounce expensive network searches in the application. Keep a visible or accessible label instead of relying only on placeholder text.</p>
<p>Busy feedback sets <code>aria-busy</code>, uses a polite status announcement, and preserves the input&#39;s dimensions. Feedback uses a status row followed by the retry action. On retry, the error is replaced by <code>loadingLabel</code> or, when absent, <code>loadingAriaLabel</code> as visible searching text. The status row reserves space for both messages so wrapping at narrow widths or zoom does not move the button. The retry button stays mounted in the same position and disabled during its request, displaying its own spinner without a second input spinner. Retry focuses the input so successful completion keeps focus predictable. Loading allows further editing and clearing to cancel or replace a request. Disabled and readonly state prevent clear and retry actions. Readonly mode hides the clear button while keeping the text focusable and selectable. API failures are described by the input without marking the query invalid. Text inputs accept translation keys and update with the active <code>BX_I18N</code> language.</p>
<h2>Playground</h2>
<p>Open <code>/components/search-input</code> for cancellable, debounced fake API requests, loading text, empty results, retained results on failure, retry through to success, and readonly/disabled controls. Enabling Show loading text starts a preview request so the message is immediately observable.</p>
`,"projects/blocks/forms/components/select/README.md":`<h1>Select</h1>
<p>A typed single-value control with searchable, grouped options and remote pagination.</p>
<h2>Import</h2>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">Select</span>, <span class="hljs-title class_">IBxSelectOption</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/forms&#x27;</span>;</code></pre>
<h2>Usage</h2>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">bx-select</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Workspace&quot;</span> [<span class="hljs-attr">options</span>]=<span class="hljs-string">&quot;options()&quot;</span> [<span class="hljs-attr">formField</span>]=<span class="hljs-string">&quot;account.workspace&quot;</span>
  [<span class="hljs-attr">isSearchable</span>]=<span class="hljs-string">&quot;true&quot;</span> [<span class="hljs-attr">externalFiltering</span>]=<span class="hljs-string">&quot;true&quot;</span>
  [<span class="hljs-attr">loading</span>]=<span class="hljs-string">&quot;loading()&quot;</span> [<span class="hljs-attr">hasMore</span>]=<span class="hljs-string">&quot;hasMore()&quot;</span> [<span class="hljs-attr">loadError</span>]=<span class="hljs-string">&quot;loadError()&quot;</span>
  [<span class="hljs-attr">loadMoreConfig</span>]=<span class="hljs-string">&quot;paginationAppearance&quot;</span> (<span class="hljs-attr">search</span>)=<span class="hljs-string">&quot;search($event)&quot;</span> (<span class="hljs-attr">loadMore</span>)=<span class="hljs-string">&quot;loadNext($event)&quot;</span> /&gt;</span></code></pre>
<h2>API</h2>
<p>Supports Signal Forms, Reactive Forms, Template-driven Forms, and standalone <code>[(value)]</code>. Existing <code>[formControl]</code> and <code>formControlName</code> bindings remain available. <code>BxSelectOption</code> remains as a compatibility alias for <code>IBxSelectOption</code>.</p>
<p>Options provide <code>label</code>, <code>value</code>, optional <code>disabled</code>, <code>icon</code>, <code>group</code> and <code>groupDisabled</code>. Labels and group headings accept translation keys. <code>compareWith(a, b)</code> defaults to <code>Object.is</code>; supply a comparator for object values. Selected labels are retained when filtering replaces the visible results. <code>searchValue</code> is a string model: the term and matching results persist together across panel close/reopen. Bind it when application code needs to clear or replace a query.</p>
<p><code>isSearchable</code>, <code>externalFiltering</code>, <code>searchPlaceholder</code>, <code>searchDebounce</code>, and <code>emptyMessage</code> configure search. <code>search</code> emits debounced terms; external filtering leaves request cancellation and results ownership with the application. <code>loadingLabel</code> names loading feedback.</p>
<p><code>optionTemplate</code> receives <code>$implicit</code> (option), <code>selected</code>, and <code>index</code>. <code>triggerTemplate</code> receives <code>$implicit</code> (form value) and resolved <code>labels</code>. <code>panelClass</code> customizes the panel. <code>--bx-select-panel-background</code>, <code>--bx-select-panel-border</code>, and <code>--bx-select-panel-shadow</code> customize the opaque surface, contrast and elevation independently from the form container. <code>--bx-select-panel-height</code> changes the maximum panel height, which is also constrained to the viewport.</p>
<p><code>selectionChange</code> emits <code>{ value, source: &#39;user&#39; }</code>. <code>openedChange</code> reports panel state. <code>open()</code>, <code>close()</code>, and <code>toggleOpen()</code> control the panel. Readonly state prevents value changes without changing the form&#39;s disabled state.</p>
<h2>Pagination</h2>
<p><code>hasMore</code>, <code>loading</code>, <code>loadError</code>, <code>loadMoreConfig</code>, and <code>loadMoreTemplate</code> feed the shared <a href="components/load-more">load-more directive</a>. <code>loadMore</code> distinguishes scroll, button and retry requests. Append pages rather than replacing previously loaded items during ordinary pagination. Retain items and the failed cursor on error.</p>
<p>Small result pages expose a bottom-left action when no item scrollbar exists. A visible action stays present while loading. Errors show an explicit retry even with overflow. Applications need not know the viewport size or reproduce fallback behavior.</p>
<h2>Behavior and accessibility</h2>
<p>Arrow keys, Home/End, typeahead, Enter/Space, Escape, Alt+ArrowUp and Tab support panel interaction. Focus returns appropriately when the panel closes. Field error/hint descriptions and invalid/required states are connected automatically.</p>
<p>Panels retain the shared overlay positioning, theme inheritance and top-layer context behavior. Provide <code>BX_OVERLAY_CONTEXT</code> through the existing overlay-context directive for custom top-layer containers.</p>
<h2>Appearance and accessibility</h2>
<p>Uses Blocks semantic tokens and the active <code>ThemingService</code> configuration. Customize through documented inputs, templates and CSS variables. Existing components update when the application theme changes. Keyboard focus, forced colors, reduced transparency and <code>BxA11yService</code> reduced-motion preferences remain supported.</p>
<p>Text inputs accept <code>ResolvableText</code>: plain text or <code>{ key: &#39;translation.key&#39; }</code>. With <code>BX_I18N</code>, text is resolved reactively, including already-mounted controls when the adapter&#39;s <code>version</code> signal changes. Plain text works without an adapter.</p>
<h2>Playground</h2>
<p>Open <code>/components/select</code> for mock pagination, external filtering, loading, failed requests and retry. Switch page sizes to exercise the scroll and fallback-action states.</p>
<h2>Busy presentation</h2>
<p>The trigger replaces its caret with a same-size spinner, preserving width. When a visible load-more or retry button starts a request, that button stays mounted and shows its own spinner. The panel uses a row-aligned loading indicator only when no footer button is visible; the two loading presentations are mutually exclusive.</p>
<h2>Tags and search feedback</h2>
<p><code>selectionDisplay=&quot;tags&quot;</code> renders the selected value through the standalone Blocks <code>Tag</code> component. <code>tagConfig</code> controls common appearance and <code>option.tagConfig</code> provides per-option overrides. See the <a href="components/tag">tag guide</a>.</p>
<p>Clipped tag labels automatically expose their full text in a tooltip; fitting labels do not. Explicit option/tag tooltip descriptions retain their existing behavior. The parent combobox supplies keyboard access to the complete selection without adding nested tab stops. Labels and plain values also use the shared truncation directive. Set <code>[tooltipOnTruncate]=&quot;false&quot;</code> to disable automatic truncation tooltips, including ordinary selected tags, while retaining ellipsis and custom templates. Per-tag configuration can disable the tag tooltip when the owner is enabled. The component inherits the shared <code>FormSettingsService</code> default.</p>
<p>While searching (including debounce and the external request), old results and load-more actions are suppressed. <code>loadingLabel</code> provides centered loading text; without it, the panel displays a simple centered spinner named by <code>loadingAriaLabel</code>. Pagination becomes available for the filtered result set after the request completes.</p>
<h2>Option spacing</h2>
<p>Rounded option rows have a small gap, shared by select and multiselect. Set <code>--bx-select-option-gap</code> on the control to customize it (default: Blocks <code>spacing(1)</code>). All built-in selection and caret icons use Blocks <code>Icon</code>; searching uses Blocks <code>SearchInput</code>.</p>
<h2>Clearing selection</h2>
<p>A Blocks \xD7 icon button appears before the dropdown/loading indicator, with equal spacing between the action and the selected text/tags and between the two icons, when a selection exists. Its reserved space prevents overlap with selected text or tags. Set <code>[clearable]=&quot;false&quot;</code> to hide it, or use <code>clearLabel</code> (<code>ResolvableText</code>, default <code>&#39;Clear selection&#39;</code>) to customize its accessible name. <code>clearTooltip</code> accepts its own <code>ResolvableText</code>, defaults to the resolved <code>clearLabel</code> when omitted, and can be set to an empty string to hide the tooltip.</p>
<p><code>clearSelection()</code> performs the same guarded action programmatically. Clearing closes the panel, marks the control touched and returns focus to the combobox; it preserves Angular&#39;s blur/submit update policy. The action is hidden while readonly and disabled when the control is disabled. Keyboard users can Tab to the action and activate it with Enter or Space.</p>
<p>Clearing writes <code>null</code> and emits <code>selectionChange</code> with <code>{ value: null, source: &#39;clear&#39; }</code>. Required controls report validation through the existing error policy.</p>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">bx-select</span> [<span class="hljs-attr">options</span>]=<span class="hljs-string">&quot;locations&quot;</span> [<span class="hljs-attr">clearLabel</span>]=<span class="hljs-string">&quot;{ key: &#x27;locations.clearAction&#x27; }&quot;</span>
  [<span class="hljs-attr">clearTooltip</span>]=<span class="hljs-string">&quot;{ key: &#x27;locations.clearTooltip&#x27; }&quot;</span> /&gt;</span></code></pre>
<p>Use <code>[clearable]=&quot;false&quot;</code> for required selections that must retain a value or for lists with an explicit \u201CNone\u201D option. This input controls the clear action independently of validation; <code>required</code> continues to enforce form validity. The select/multiselect playground includes an \u201CAllow clearing selection\u201D switch; configuration controls such as page size deliberately hide the clear action.</p>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">bx-select</span> [<span class="hljs-attr">options</span>]=<span class="hljs-string">&quot;options&quot;</span> [<span class="hljs-attr">clearable</span>]=<span class="hljs-string">&quot;false&quot;</span> /&gt;</span></code></pre>
`,"projects/blocks/forms/components/shared/load-more/README.md":`<h1>Load-more footer</h1>
<p>Internal presentation used by <code>LoadMoreDirective</code>. Applications configure it through <code>ILoadMoreConfig</code> and <code>ILoadMoreContext</code>; it is not a separate public construction API.</p>
<p>See the <a href="components/load-more">load-more directive</a> for imports, request ownership, error/retry behavior, templates, appearance and accessibility. Its live page is <code>/components/load-more</code>.</p>
`,"projects/blocks/forms/components/slide-toggle/README.md":`<h1>Slide toggle</h1>
<p>A boolean preference that takes effect immediately.</p>
<h2>Import</h2>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">SlideToggle</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/forms&#x27;</span>;</code></pre>
<p>Add the standalone component or directive to your component&#39;s <code>imports</code>.</p>
<h2>Usage</h2>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">bx-slide-toggle</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Enable notifications&quot;</span> [<span class="hljs-attr">formControl</span>]=<span class="hljs-string">&quot;notifications&quot;</span> /&gt;</span></code></pre>
<h2>API</h2>
<p>The control uses Angular 22 native signal control contracts. Use <code>[formField]</code>, <code>[formControl]</code>, <code>formControlName</code>, <code>[(ngModel)]</code>, or standalone <code>[(checked)]</code>. Shared presentation includes labels, hints, tooltips, required/readonly/disabled state, error policies and typed message resolvers. See the <a href="components/signal-forms">forms guide</a> for validation, submission, translations and compatibility.</p>
<h2>Appearance</h2>
<p>Appearance uses Blocks semantic colors, spacing, radius and motion tokens. Glass surfaces inherit the application configuration from <code>ThemingService</code>; adjusting glassiness updates existing components and overlays. Content-only parts share their containing surface instead of adding another backdrop filter.</p>
<p>Toggles keep emitting the theme color while switched on, including values set through Angular forms. Hovering the track or its label highlights the surface and emits color; disabled controls do neither.</p>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { inject } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ThemingService</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/core&#x27;</span>;

<span class="hljs-keyword">private</span> <span class="hljs-keyword">readonly</span> theme = <span class="hljs-title function_">inject</span>(<span class="hljs-title class_">ThemingService</span>);

<span class="hljs-comment">// Application-wide, including open overlays.</span>
<span class="hljs-variable language_">this</span>.<span class="hljs-property">theme</span>.<span class="hljs-title function_">setAppearance</span>({ <span class="hljs-attr">glassiness</span>: <span class="hljs-number">0.5</span> });
<span class="hljs-comment">// Opaque presentation retains the same layout and component API.</span>
<span class="hljs-variable language_">this</span>.<span class="hljs-property">theme</span>.<span class="hljs-title function_">setAppearance</span>({ <span class="hljs-attr">reducedTransparency</span>: <span class="hljs-literal">true</span> });</code></pre>
<p><code>BxA11yService</code> controls reduced motion; reduced transparency and forced colors receive opaque presentation. Glass is decorative and does not replace labels, focus states, or semantic control states.</p>
<h2>Behavior and accessibility</h2>
<p>Use for immediate settings, with a label describing the enabled state. The native checkbox retains keyboard behavior and checked state.</p>
<h2>Playground</h2>
<p>Open <code>/components/slide-toggle</code> for a working example and its current value or action result.</p>
<h2>Switch semantics</h2>
<p>The internal checkbox exposes switch semantics. <code>labelPosition</code> supports before/after placement, and projected label content is supported. <code>checkedChange</code> is available for standalone interaction. Readonly preserves the value while disabled state blocks interaction.</p>
`,"projects/blocks/forms/directives/error/README.md":`<h1>Error message</h1>
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
<p>Appearance uses Blocks semantic colors, spacing, radius and motion tokens. Glass surfaces inherit the application configuration from <code>ThemingService</code>; adjusting glassiness updates existing components and overlays. Content-only parts share their containing surface instead of adding another backdrop filter.</p>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { inject } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ThemingService</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/core&#x27;</span>;

<span class="hljs-keyword">private</span> <span class="hljs-keyword">readonly</span> theme = <span class="hljs-title function_">inject</span>(<span class="hljs-title class_">ThemingService</span>);

<span class="hljs-comment">// Application-wide, including open overlays.</span>
<span class="hljs-variable language_">this</span>.<span class="hljs-property">theme</span>.<span class="hljs-title function_">setAppearance</span>({ <span class="hljs-attr">glassiness</span>: <span class="hljs-number">0.5</span> });
<span class="hljs-comment">// Opaque presentation retains the same layout and component API.</span>
<span class="hljs-variable language_">this</span>.<span class="hljs-property">theme</span>.<span class="hljs-title function_">setAppearance</span>({ <span class="hljs-attr">reducedTransparency</span>: <span class="hljs-literal">true</span> });</code></pre>
<p><code>BxA11yService</code> controls reduced motion; reduced transparency and forced colors receive opaque presentation. Glass is decorative and does not replace labels, focus states, or semantic control states.</p>
<h2>Behavior and accessibility</h2>
<p>Render only when validation should be shown. Tie the input to the error ID with <code>aria-describedby</code> and update <code>aria-invalid</code> as needed. This component does not run validation.</p>
<h2>Playground</h2>
<p>Open <code>/components/error</code> for a working example and its current value or action result.</p>
`,"projects/blocks/forms/directives/hint/README.md":`<h1>Field hint</h1>
<p>Composable content and native integration for the shared field frame.</p>
<h2>Import</h2>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">BxHint</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/forms&#x27;</span>;</code></pre>
<h2>Usage</h2>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">bx-input-field</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Reference&quot;</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">bx-hint</span>&gt;</span>Public identifier<span class="hljs-tag">&lt;/<span class="hljs-name">bx-hint</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">bx-input-field</span>&gt;</span></code></pre>
<h2>API and behavior</h2>
<p>Use <code>align=&quot;start&quot;</code> or <code>align=&quot;end&quot;</code> for projected supporting content. Convenience fields also accept <code>hint</code> and <code>hintEnd</code> as translated text. Descriptions are connected automatically and replaced by visible errors.</p>
<h2>Appearance and accessibility</h2>
<p>Uses Blocks semantic tokens and the active <code>ThemingService</code> configuration. Customize through documented inputs, templates and CSS variables. Existing components update when the application theme changes. Keyboard focus, forced colors, reduced transparency and <code>BxA11yService</code> reduced-motion preferences remain supported.</p>
<p>Text inputs accept <code>ResolvableText</code>: plain text or <code>{ key: &#39;translation.key&#39; }</code>. With <code>BX_I18N</code>, text is resolved reactively, including already-mounted controls when the adapter&#39;s <code>version</code> signal changes. Plain text works without an adapter.</p>
<h2>Playground</h2>
<p>Open <code>/components/hint</code> for working field composition and compatibility examples.</p>
`,"projects/blocks/forms/directives/load-more/README.md":`<h1>Load more</h1>
<p>Shared incremental loading for a scroll container. The directive appends a footer at the bottom-left, inside the container&#39;s padding. Use it for paginated option panels and future data tables or lists; attach it to their scroll wrapper rather than a native <code>table</code>, <code>tbody</code>, <code>ul</code> or <code>select</code> element.</p>
<h2>Import</h2>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">LoadMoreDirective</span>, <span class="hljs-title class_">ILoadMoreRequest</span>, <span class="hljs-title class_">ILoadMoreConfig</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/forms&#x27;</span>;</code></pre>
<h2>Usage</h2>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">bxLoadMore</span> #<span class="hljs-attr">pager</span>=<span class="hljs-string">&quot;bxLoadMore&quot;</span> <span class="hljs-attr">role</span>=<span class="hljs-string">&quot;region&quot;</span> <span class="hljs-attr">aria-label</span>=<span class="hljs-string">&quot;Workspaces&quot;</span> <span class="hljs-attr">tabindex</span>=<span class="hljs-string">&quot;0&quot;</span>
  [<span class="hljs-attr">loadMoreHasMore</span>]=<span class="hljs-string">&quot;hasMore()&quot;</span>
  [<span class="hljs-attr">loadMoreLoading</span>]=<span class="hljs-string">&quot;loading()&quot;</span>
  [<span class="hljs-attr">loadMoreError</span>]=<span class="hljs-string">&quot;loadError()&quot;</span>
  [<span class="hljs-attr">loadMoreRevision</span>]=<span class="hljs-string">&quot;items()&quot;</span>
  [<span class="hljs-attr">loadMoreConfig</span>]=<span class="hljs-string">&quot;paginationAppearance&quot;</span>
  (<span class="hljs-attr">loadMore</span>)=<span class="hljs-string">&quot;loadNext($event)&quot;</span>&gt;</span>
  @for (item of items(); track item.id) { <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>{{ item.name }}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span> }
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></code></pre>
<p>Give the wrapper a constrained maximum height and <code>overflow: auto</code>. Applications own API calls, cursors, cancellation and data accumulation. The directive never fetches data itself.</p>
<h2>API</h2>
<ul>
<li><code>loadMoreHasMore</code>: whether another page exists; defaults to false.</li>
<li><code>loadMoreLoading</code>: application request state; defaults to false.</li>
<li><code>loadMoreError</code>: optional text or translation key describing a failed request. Failure reveals a retry action even when the container overflows. Without a resolved retry label, it uses a retry icon with the supplied load-more text.</li>
<li><code>loadMoreSuppressed</code>: temporarily hides the footer and blocks page requests, for example during a search request.</li>
<li><code>loadMoreDisabled</code>: blocks requests without removing content.</li>
<li><code>loadMoreRevision</code>: pass the items array or a page revision to acknowledge new data.</li>
<li><code>loadMoreConfig</code>: <code>ILoadMoreConfig</code> controls action text, busy/retry text, accessible label, button variant/color/outline, custom button/footer classes, scroll threshold and <code>buttonMode</code> (<code>auto</code> or <code>always</code>).</li>
<li><code>loadMoreTemplate</code>: optional <code>TemplateRef&lt;ILoadMoreContext&gt;</code> for a custom action. Its context includes the resolved label (<code>$implicit</code>), <code>loading</code>, <code>disabled</code>, and guarded <code>request()</code> callback.</li>
<li><code>loadMore</code>: emits <code>{ source: &#39;scroll&#39; | &#39;button&#39; | &#39;retry&#39; }</code>.</li>
<li><code>complete()</code>: acknowledges completion when no loading-state cycle or items revision is available.</li>
<li><code>actionVisible()</code>: indicates whether the footer action is visible, allowing an owning component to avoid rendering a second loading indicator.</li>
<li><code>request(source?)</code>: invokes the same request guard from application code.</li>
</ul>
<h2>Loading, failure and retry</h2>
<p>Set loading before starting the promise. Append data only on success. On failure retain the previous data and page/cursor, set <code>loadMoreError</code>, and clear loading in <code>finally</code>. Retry the same page; advance its cursor only after success. Clear the error when a retry begins.</p>
<p>The button shows its loading spinner and becomes disabled while loading. A button visible before a request stays visible during it, including when newly appended items create overflow. The error and retry remain reachable after failure, and scroll events cannot automatically retry a failing request. Request guards prevent duplicates until a loading cycle completes, the revision changes, or <code>complete()</code> is called.</p>
<p>When more data exists without usable item overflow, auto mode displays the footer action. Container resizing, viewport/zoom resizing, and data changes re-evaluate overflow. The footer itself does not count as item overflow, preventing show/hide oscillation. Always mode retains an explicit action even with a scrollbar. There is no automatic fetch loop to fill the viewport.</p>
<h2>Custom action</h2>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> #<span class="hljs-attr">customAction</span> <span class="hljs-attr">let-label</span> <span class="hljs-attr">let-loading</span>=<span class="hljs-string">&quot;loading&quot;</span> <span class="hljs-attr">let-disabled</span>=<span class="hljs-string">&quot;disabled&quot;</span> <span class="hljs-attr">let-request</span>=<span class="hljs-string">&quot;request&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">bx-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;button&quot;</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;tonal&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;accent&quot;</span>
    [<span class="hljs-attr">loading</span>]=<span class="hljs-string">&quot;loading&quot;</span> [<span class="hljs-attr">disabled</span>]=<span class="hljs-string">&quot;disabled&quot;</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;request()&quot;</span>&gt;</span>{{ label }}<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span></code></pre>
<p>Pass the template through <code>loadMoreTemplate</code>. Keep the action keyboard-accessible and represent its busy/disabled states. <code>--bx-load-more-padding</code> changes footer padding; the default has no additional horizontal inset. Button classes and semantic theme variables customize appearance without DOM access.</p>
<h2>Appearance and accessibility</h2>
<p>Uses Blocks semantic tokens and the active <code>ThemingService</code> configuration. Customize through documented inputs, templates and CSS variables. Existing components update when the application theme changes. Keyboard focus, forced colors, reduced transparency and <code>BxA11yService</code> reduced-motion preferences remain supported.</p>
<p>Text inputs accept <code>ResolvableText</code>: plain text or <code>{ key: &#39;translation.key&#39; }</code>. With <code>BX_I18N</code>, text is resolved reactively, including already-mounted controls when the adapter&#39;s <code>version</code> signal changes. Plain text works without an adapter.</p>
<h2>Playground</h2>
<p>Open <code>/components/load-more</code>. Fake API requests take 800ms. Use small pages for the no-scrollbar action, <strong>Fail next page now</strong> for a failed request, then <strong>Retry request</strong>. The event log distinguishes loading, failed, retry and successful states.</p>
`,"projects/blocks/forms/directives/native-control/README.md":`<h1>Native control</h1>
<p>Composable content and native integration for the shared field frame.</p>
<h2>Import</h2>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">NativeControlDirective</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/forms&#x27;</span>;</code></pre>
<h2>Usage</h2>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">bx-form-field</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Notes&quot;</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">textarea</span> <span class="hljs-attr">bxInput</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Notes&quot;</span> [<span class="hljs-attr">formField</span>]=<span class="hljs-string">&quot;account.note&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">textarea</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">bx-form-field</span>&gt;</span></code></pre>
<h2>API and behavior</h2>
<p>Registers a native input, textarea or select with the field frame. Import the desired Angular forms directives separately. Native attributes and third-party directives remain available. <code>BX_FORM_FIELD_CONTROL</code> and <code>IFormFieldControl</code> allow consumer controls to register their own state and focus contract.</p>
<h2>Appearance and accessibility</h2>
<p>Uses Blocks semantic tokens and the active <code>ThemingService</code> configuration. Customize through documented inputs, templates and CSS variables. Existing components update when the application theme changes. Keyboard focus, forced colors, reduced transparency and <code>BxA11yService</code> reduced-motion preferences remain supported.</p>
<p>Text inputs accept <code>ResolvableText</code>: plain text or <code>{ key: &#39;translation.key&#39; }</code>. With <code>BX_I18N</code>, text is resolved reactively, including already-mounted controls when the adapter&#39;s <code>version</code> signal changes. Plain text works without an adapter.</p>
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
<p>Uses Blocks semantic tokens and the active <code>ThemingService</code> configuration. Customize through documented inputs, templates and CSS variables. Existing components update when the application theme changes. Keyboard focus, forced colors, reduced transparency and <code>BxA11yService</code> reduced-motion preferences remain supported.</p>
<p>Text inputs accept <code>ResolvableText</code>: plain text or <code>{ key: &#39;translation.key&#39; }</code>. With <code>BX_I18N</code>, text is resolved reactively, including already-mounted controls when the adapter&#39;s <code>version</code> signal changes. Plain text works without an adapter.</p>
<h2>Playground</h2>
<p>Open <code>/components/prefix</code> for working field composition and compatibility examples.</p>
`,"projects/blocks/forms/directives/slider/README.md":`<h1>Slider</h1>
<p><code>SliderDirective</code> gives a native range input a glass thumb, a recessed track, and a value fill. Native keyboard, touch, disabled, minimum, maximum, step, and Angular forms behavior are preserved.</p>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">SliderDirective</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/forms&#x27;</span>;</code></pre>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">for</span>=<span class="hljs-string">&quot;volume&quot;</span>&gt;</span>Volume<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;volume&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;range&quot;</span> <span class="hljs-attr">bxSlider</span> <span class="hljs-attr">min</span>=<span class="hljs-string">&quot;0&quot;</span> <span class="hljs-attr">max</span>=<span class="hljs-string">&quot;100&quot;</span> [<span class="hljs-attr">formControl</span>]=<span class="hljs-string">&quot;volume&quot;</span> /&gt;</span></code></pre>
<p>Import the directive into your component and include the existing Blocks core stylesheet. The directive also supports <code>ngModel</code> or native <code>[value]</code> and <code>(input)</code> bindings. It reads programmatic value changes after Angular renders, so resetting a form updates the fill too.</p>
<p>The slider inherits semantic theme colors. Solid material, reduced transparency, increased contrast, and unsupported backdrop filtering use an opaque thumb. WebKit/Blink and Firefox have separate native thumb and track rules. Provide an associated label or <code>aria-label</code> for every slider.</p>
<p><code>--bx-slider-thumb-size</code> sets the native and decorative thumb diameter together, defaulting to <code>spacing(6)</code> from the shared tokens. The decorative thumb&#39;s position follows the same travel distance as the native thumb.</p>
<p>The bordered glass thumb magnifies and blurs the rail beneath it. Set <code>--bx-slider-magnification</code> to adjust the enlargement from its default <code>1.5</code>, and <code>--bx-slider-lens-blur</code> to adjust the lens and backdrop blur from <code>1.5px</code>. It uses the current rail colors and value, including RTL, without reading screen pixels. Reduced transparency, increased contrast and unsupported backdrop filtering use an opaque thumb; forced colors retains the native thumb.</p>
<h2>Labels and ticks</h2>
<p>Native <code>[formField]</code> binding is supported alongside existing Angular form directives. <code>discrete</code> adds a formatted visible value; <code>displayWith(value)</code> controls that label. <code>showTickMarks</code> adds bounded native tick metadata. For a pair of values use <a href="components/range-slider">RangeSlider</a>.</p>
`,"projects/blocks/forms/directives/suffix/README.md":`<h1>Field suffix</h1>
<p>Composable content and native integration for the shared field frame.</p>
<h2>Import</h2>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">SuffixDirective</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/forms&#x27;</span>;</code></pre>
<h2>Usage</h2>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">bx-input-field</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Weight&quot;</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">bxSuffix</span> <span class="hljs-attr">aria-hidden</span>=<span class="hljs-string">&quot;true&quot;</span>&gt;</span>kg<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">bx-input-field</span>&gt;</span></code></pre>
<h2>API and behavior</h2>
<p>Projects custom content after the input. Custom interactive suffix actions need accessible names and native button semantics.</p>
<h2>Appearance and accessibility</h2>
<p>Uses Blocks semantic tokens and the active <code>ThemingService</code> configuration. Customize through documented inputs, templates and CSS variables. Existing components update when the application theme changes. Keyboard focus, forced colors, reduced transparency and <code>BxA11yService</code> reduced-motion preferences remain supported.</p>
<p>Text inputs accept <code>ResolvableText</code>: plain text or <code>{ key: &#39;translation.key&#39; }</code>. With <code>BX_I18N</code>, text is resolved reactively, including already-mounted controls when the adapter&#39;s <code>version</code> signal changes. Plain text works without an adapter.</p>
<h2>Playground</h2>
<p>Open <code>/components/suffix</code> for working field composition and compatibility examples.</p>
`,"projects/blocks/icons/components/README.md":`<h1>Icon</h1>
<p>An asynchronously loaded SVG icon using semantic foreground and background tokens.</p>
<h2>Import</h2>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">Icon</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/icons&#x27;</span>;</code></pre>
<p>Add the standalone component or directive to your component&#39;s <code>imports</code>.</p>
<h2>Usage</h2>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">bx-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;sparkles&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;32&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;text-primary&quot;</span> [<span class="hljs-attr">decorative</span>]=<span class="hljs-string">&quot;false&quot;</span> <span class="hljs-attr">ariaLabel</span>=<span class="hljs-string">&quot;Highlights&quot;</span> /&gt;</span></code></pre>
<h2>API</h2>
<p><code>name</code> is required. <code>size</code>, <code>strokeWidth</code>, <code>color</code>, <code>bgColor</code>, <code>decorative</code>, <code>ariaLabel</code> configure rendering. Color accepts a semantic token or themed color; <code>bgColor=&quot;auto&quot;</code> derives a complementary token.</p>
<h2>Appearance</h2>
<p>Appearance uses Blocks semantic colors, spacing, radius and motion tokens. Glass surfaces inherit the application configuration from <code>ThemingService</code>; adjusting glassiness updates existing components and overlays. Content-only parts share their containing surface instead of adding another backdrop filter.</p>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { inject } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ThemingService</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/core&#x27;</span>;

<span class="hljs-keyword">private</span> <span class="hljs-keyword">readonly</span> theme = <span class="hljs-title function_">inject</span>(<span class="hljs-title class_">ThemingService</span>);

<span class="hljs-comment">// Application-wide, including open overlays.</span>
<span class="hljs-variable language_">this</span>.<span class="hljs-property">theme</span>.<span class="hljs-title function_">setAppearance</span>({ <span class="hljs-attr">glassiness</span>: <span class="hljs-number">0.5</span> });
<span class="hljs-comment">// Opaque presentation retains the same layout and component API.</span>
<span class="hljs-variable language_">this</span>.<span class="hljs-property">theme</span>.<span class="hljs-title function_">setAppearance</span>({ <span class="hljs-attr">reducedTransparency</span>: <span class="hljs-literal">true</span> });</code></pre>
<p><code>BxA11yService</code> controls reduced motion; reduced transparency and forced colors receive opaque presentation. Glass is decorative and does not replace labels, focus states, or semantic control states.</p>
<h2>Behavior and accessibility</h2>
<p>Leave decorative icons hidden from assistive technology; meaningful standalone icons need <code>decorative=false</code> and <code>ariaLabel</code>. Label icon buttons on the button itself. The catalog paginates icon previews to bound SVG work.</p>
<h2>Playground</h2>
<p>Open <code>/components/icon</code> for a working example and its current value or action result.</p>
`,"projects/blocks/modal/components/README.md":`<h1>Modal core</h1>
<p>The service-owned host that composes modal content and chooses the active layout.</p>
<h2>Import</h2>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">ModalCore</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/modal&#x27;</span>;</code></pre>
<p>Add the standalone component or directive to your component&#39;s <code>imports</code>.</p>
<h2>Usage</h2>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-comment">&lt;!-- Open from an action in your template --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">bx-button</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;openModal()&quot;</span>&gt;</span>Open modal core<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span></code></pre>
<h2>API</h2>
<p><code>ModalService.open(ContentComponent, config)</code> accepts data, header, style, close behavior and guards. Style <code>layout</code> selects center, left, right or bottom-sheet; <code>animate</code>, <code>hasBackdrop</code>, and <code>showCloseButton</code> customize presentation. Observe <code>afterClosed()</code> for the close result.</p>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-variable language_">this</span>.<span class="hljs-property">modals</span>.<span class="hljs-title function_">open</span>(<span class="hljs-title class_">DialogContent</span>, {
  <span class="hljs-attr">header</span>: { <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;Modal core&quot;</span> },
  <span class="hljs-attr">style</span>: { <span class="hljs-attr">layout</span>: <span class="hljs-string">&quot;center&quot;</span>, <span class="hljs-attr">hasBackdrop</span>: <span class="hljs-literal">true</span> }
});</code></pre>
<h2>Appearance</h2>
<p>Appearance uses Blocks semantic colors, spacing, radius and motion tokens. Glass surfaces inherit the application configuration from <code>ThemingService</code>; adjusting glassiness updates existing components and overlays. Content-only parts share their containing surface instead of adding another backdrop filter.</p>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { inject } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ThemingService</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/core&#x27;</span>;

<span class="hljs-keyword">private</span> <span class="hljs-keyword">readonly</span> theme = <span class="hljs-title function_">inject</span>(<span class="hljs-title class_">ThemingService</span>);

<span class="hljs-comment">// Application-wide, including open overlays.</span>
<span class="hljs-variable language_">this</span>.<span class="hljs-property">theme</span>.<span class="hljs-title function_">setAppearance</span>({ <span class="hljs-attr">glassiness</span>: <span class="hljs-number">0.5</span> });
<span class="hljs-comment">// Opaque presentation retains the same layout and component API.</span>
<span class="hljs-variable language_">this</span>.<span class="hljs-property">theme</span>.<span class="hljs-title function_">setAppearance</span>({ <span class="hljs-attr">reducedTransparency</span>: <span class="hljs-literal">true</span> });</code></pre>
<p><code>BxA11yService</code> controls reduced motion; reduced transparency and forced colors receive opaque presentation. Glass is decorative and does not replace labels, focus states, or semantic control states.</p>
<h2>Behavior and accessibility</h2>
<p>Open through <code>ModalService</code> so focus management, close guards, backdrop behavior, lifecycle and cleanup remain coordinated. <code>Modal</code> content receives its typed data and <code>ModalRef</code>; call <code>modal.close(mode, result)</code> to return a result. Do not instantiate service-owned view wrappers as general page containers.</p>
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
<p><code>ModalService.open(ContentComponent, config)</code> accepts data, header, style, close behavior and guards. Style <code>layout</code> selects center, left, right or bottom-sheet; <code>animate</code>, <code>hasBackdrop</code>, and <code>showCloseButton</code> customize presentation. Observe <code>afterClosed()</code> for the close result.</p>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-variable language_">this</span>.<span class="hljs-property">modals</span>.<span class="hljs-title function_">open</span>(<span class="hljs-title class_">DialogContent</span>, {
  <span class="hljs-attr">header</span>: { <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;Modal backdrop&quot;</span> },
  <span class="hljs-attr">style</span>: { <span class="hljs-attr">layout</span>: <span class="hljs-string">&quot;center&quot;</span>, <span class="hljs-attr">hasBackdrop</span>: <span class="hljs-literal">true</span> }
});</code></pre>
<h2>Appearance</h2>
<p>Appearance uses Blocks semantic colors, spacing, radius and motion tokens. Glass surfaces inherit the application configuration from <code>ThemingService</code>; adjusting glassiness updates existing components and overlays. Content-only parts share their containing surface instead of adding another backdrop filter.</p>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { inject } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ThemingService</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/core&#x27;</span>;

<span class="hljs-keyword">private</span> <span class="hljs-keyword">readonly</span> theme = <span class="hljs-title function_">inject</span>(<span class="hljs-title class_">ThemingService</span>);

<span class="hljs-comment">// Application-wide, including open overlays.</span>
<span class="hljs-variable language_">this</span>.<span class="hljs-property">theme</span>.<span class="hljs-title function_">setAppearance</span>({ <span class="hljs-attr">glassiness</span>: <span class="hljs-number">0.5</span> });
<span class="hljs-comment">// Opaque presentation retains the same layout and component API.</span>
<span class="hljs-variable language_">this</span>.<span class="hljs-property">theme</span>.<span class="hljs-title function_">setAppearance</span>({ <span class="hljs-attr">reducedTransparency</span>: <span class="hljs-literal">true</span> });</code></pre>
<p><code>BxA11yService</code> controls reduced motion; reduced transparency and forced colors receive opaque presentation. Glass is decorative and does not replace labels, focus states, or semantic control states.</p>
<h2>Behavior and accessibility</h2>
<p>Open through <code>ModalService</code> so focus management, close guards, backdrop behavior, lifecycle and cleanup remain coordinated. <code>Modal</code> content receives its typed data and <code>ModalRef</code>; call <code>modal.close(mode, result)</code> to return a result. Do not instantiate service-owned view wrappers as general page containers.</p>
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
<p>Required inputs: <code>header</code> (header config or undefined), <code>showCloseButton</code> (boolean). <code>close</code> emits a modal close mode or undefined. Header supports text and an optional icon configuration.</p>
<h2>Appearance</h2>
<p>Appearance uses Blocks semantic colors, spacing, radius and motion tokens. Glass surfaces inherit the application configuration from <code>ThemingService</code>; adjusting glassiness updates existing components and overlays. Content-only parts share their containing surface instead of adding another backdrop filter.</p>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { inject } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ThemingService</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/core&#x27;</span>;

<span class="hljs-keyword">private</span> <span class="hljs-keyword">readonly</span> theme = <span class="hljs-title function_">inject</span>(<span class="hljs-title class_">ThemingService</span>);

<span class="hljs-comment">// Application-wide, including open overlays.</span>
<span class="hljs-variable language_">this</span>.<span class="hljs-property">theme</span>.<span class="hljs-title function_">setAppearance</span>({ <span class="hljs-attr">glassiness</span>: <span class="hljs-number">0.5</span> });
<span class="hljs-comment">// Opaque presentation retains the same layout and component API.</span>
<span class="hljs-variable language_">this</span>.<span class="hljs-property">theme</span>.<span class="hljs-title function_">setAppearance</span>({ <span class="hljs-attr">reducedTransparency</span>: <span class="hljs-literal">true</span> });</code></pre>
<p><code>BxA11yService</code> controls reduced motion; reduced transparency and forced colors receive opaque presentation. Glass is decorative and does not replace labels, focus states, or semantic control states.</p>
<h2>Behavior and accessibility</h2>
<p>Prefer configuring <code>header</code> on ModalService for a normal dialog. Direct use is available for custom composition; ensure the surrounding dialog has an accessible name and handle close output.</p>
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
<p><code>ModalService.open(ContentComponent, config)</code> accepts data, header, style, close behavior and guards. Style <code>layout</code> selects center, left, right or bottom-sheet; <code>animate</code>, <code>hasBackdrop</code>, and <code>showCloseButton</code> customize presentation. Observe <code>afterClosed()</code> for the close result.</p>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-variable language_">this</span>.<span class="hljs-property">modals</span>.<span class="hljs-title function_">open</span>(<span class="hljs-title class_">DialogContent</span>, {
  <span class="hljs-attr">header</span>: { <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;Bottom sheet&quot;</span> },
  <span class="hljs-attr">style</span>: { <span class="hljs-attr">layout</span>: <span class="hljs-string">&quot;bottom-sheet&quot;</span>, <span class="hljs-attr">hasBackdrop</span>: <span class="hljs-literal">true</span> }
});</code></pre>
<h2>Appearance</h2>
<p>Appearance uses Blocks semantic colors, spacing, radius and motion tokens. Glass surfaces inherit the application configuration from <code>ThemingService</code>; adjusting glassiness updates existing components and overlays. Content-only parts share their containing surface instead of adding another backdrop filter.</p>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { inject } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ThemingService</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/core&#x27;</span>;

<span class="hljs-keyword">private</span> <span class="hljs-keyword">readonly</span> theme = <span class="hljs-title function_">inject</span>(<span class="hljs-title class_">ThemingService</span>);

<span class="hljs-comment">// Application-wide, including open overlays.</span>
<span class="hljs-variable language_">this</span>.<span class="hljs-property">theme</span>.<span class="hljs-title function_">setAppearance</span>({ <span class="hljs-attr">glassiness</span>: <span class="hljs-number">0.5</span> });
<span class="hljs-comment">// Opaque presentation retains the same layout and component API.</span>
<span class="hljs-variable language_">this</span>.<span class="hljs-property">theme</span>.<span class="hljs-title function_">setAppearance</span>({ <span class="hljs-attr">reducedTransparency</span>: <span class="hljs-literal">true</span> });</code></pre>
<p><code>BxA11yService</code> controls reduced motion; reduced transparency and forced colors receive opaque presentation. Glass is decorative and does not replace labels, focus states, or semantic control states.</p>
<h2>Behavior and accessibility</h2>
<p>Open through <code>ModalService</code> so focus management, close guards, backdrop behavior, lifecycle and cleanup remain coordinated. <code>Modal</code> content receives its typed data and <code>ModalRef</code>; call <code>modal.close(mode, result)</code> to return a result. Do not instantiate service-owned view wrappers as general page containers.</p>
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
<p><code>ModalService.open(ContentComponent, config)</code> accepts data, header, style, close behavior and guards. Style <code>layout</code> selects center, left, right or bottom-sheet; <code>animate</code>, <code>hasBackdrop</code>, and <code>showCloseButton</code> customize presentation. Observe <code>afterClosed()</code> for the close result.</p>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-variable language_">this</span>.<span class="hljs-property">modals</span>.<span class="hljs-title function_">open</span>(<span class="hljs-title class_">DialogContent</span>, {
  <span class="hljs-attr">header</span>: { <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;Centered modal&quot;</span> },
  <span class="hljs-attr">style</span>: { <span class="hljs-attr">layout</span>: <span class="hljs-string">&quot;center&quot;</span>, <span class="hljs-attr">hasBackdrop</span>: <span class="hljs-literal">true</span> }
});</code></pre>
<h2>Appearance</h2>
<p>Appearance uses Blocks semantic colors, spacing, radius and motion tokens. Glass surfaces inherit the application configuration from <code>ThemingService</code>; adjusting glassiness updates existing components and overlays. Content-only parts share their containing surface instead of adding another backdrop filter.</p>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { inject } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ThemingService</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/core&#x27;</span>;

<span class="hljs-keyword">private</span> <span class="hljs-keyword">readonly</span> theme = <span class="hljs-title function_">inject</span>(<span class="hljs-title class_">ThemingService</span>);

<span class="hljs-comment">// Application-wide, including open overlays.</span>
<span class="hljs-variable language_">this</span>.<span class="hljs-property">theme</span>.<span class="hljs-title function_">setAppearance</span>({ <span class="hljs-attr">glassiness</span>: <span class="hljs-number">0.5</span> });
<span class="hljs-comment">// Opaque presentation retains the same layout and component API.</span>
<span class="hljs-variable language_">this</span>.<span class="hljs-property">theme</span>.<span class="hljs-title function_">setAppearance</span>({ <span class="hljs-attr">reducedTransparency</span>: <span class="hljs-literal">true</span> });</code></pre>
<p><code>BxA11yService</code> controls reduced motion; reduced transparency and forced colors receive opaque presentation. Glass is decorative and does not replace labels, focus states, or semantic control states.</p>
<h2>Behavior and accessibility</h2>
<p>Open through <code>ModalService</code> so focus management, close guards, backdrop behavior, lifecycle and cleanup remain coordinated. <code>Modal</code> content receives its typed data and <code>ModalRef</code>; call <code>modal.close(mode, result)</code> to return a result. Do not instantiate service-owned view wrappers as general page containers.</p>
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
<p><code>ModalService.open(ContentComponent, config)</code> accepts data, header, style, close behavior and guards. Style <code>layout</code> selects center, left, right or bottom-sheet; <code>animate</code>, <code>hasBackdrop</code>, and <code>showCloseButton</code> customize presentation. Observe <code>afterClosed()</code> for the close result.</p>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-variable language_">this</span>.<span class="hljs-property">modals</span>.<span class="hljs-title function_">open</span>(<span class="hljs-title class_">DialogContent</span>, {
  <span class="hljs-attr">header</span>: { <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;Side modal&quot;</span> },
  <span class="hljs-attr">style</span>: { <span class="hljs-attr">layout</span>: <span class="hljs-string">&quot;right&quot;</span>, <span class="hljs-attr">hasBackdrop</span>: <span class="hljs-literal">true</span> }
});</code></pre>
<h2>Appearance</h2>
<p>Appearance uses Blocks semantic colors, spacing, radius and motion tokens. Glass surfaces inherit the application configuration from <code>ThemingService</code>; adjusting glassiness updates existing components and overlays. Content-only parts share their containing surface instead of adding another backdrop filter.</p>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { inject } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ThemingService</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/core&#x27;</span>;

<span class="hljs-keyword">private</span> <span class="hljs-keyword">readonly</span> theme = <span class="hljs-title function_">inject</span>(<span class="hljs-title class_">ThemingService</span>);

<span class="hljs-comment">// Application-wide, including open overlays.</span>
<span class="hljs-variable language_">this</span>.<span class="hljs-property">theme</span>.<span class="hljs-title function_">setAppearance</span>({ <span class="hljs-attr">glassiness</span>: <span class="hljs-number">0.5</span> });
<span class="hljs-comment">// Opaque presentation retains the same layout and component API.</span>
<span class="hljs-variable language_">this</span>.<span class="hljs-property">theme</span>.<span class="hljs-title function_">setAppearance</span>({ <span class="hljs-attr">reducedTransparency</span>: <span class="hljs-literal">true</span> });</code></pre>
<p><code>BxA11yService</code> controls reduced motion; reduced transparency and forced colors receive opaque presentation. Glass is decorative and does not replace labels, focus states, or semantic control states.</p>
<h2>Behavior and accessibility</h2>
<p>Open through <code>ModalService</code> so focus management, close guards, backdrop behavior, lifecycle and cleanup remain coordinated. <code>Modal</code> content receives its typed data and <code>ModalRef</code>; call <code>modal.close(mode, result)</code> to return a result. Do not instantiate service-owned view wrappers as general page containers.</p>
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
<p>Appearance uses Blocks semantic colors, spacing, radius and motion tokens. Glass surfaces inherit the application configuration from <code>ThemingService</code>; adjusting glassiness updates existing components and overlays. Content-only parts share their containing surface instead of adding another backdrop filter.</p>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { inject } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ThemingService</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/core&#x27;</span>;

<span class="hljs-keyword">private</span> <span class="hljs-keyword">readonly</span> theme = <span class="hljs-title function_">inject</span>(<span class="hljs-title class_">ThemingService</span>);

<span class="hljs-comment">// Application-wide, including open overlays.</span>
<span class="hljs-variable language_">this</span>.<span class="hljs-property">theme</span>.<span class="hljs-title function_">setAppearance</span>({ <span class="hljs-attr">glassiness</span>: <span class="hljs-number">0.5</span> });
<span class="hljs-comment">// Opaque presentation retains the same layout and component API.</span>
<span class="hljs-variable language_">this</span>.<span class="hljs-property">theme</span>.<span class="hljs-title function_">setAppearance</span>({ <span class="hljs-attr">reducedTransparency</span>: <span class="hljs-literal">true</span> });</code></pre>
<p><code>BxA11yService</code> controls reduced motion; reduced transparency and forced colors receive opaque presentation. Glass is decorative and does not replace labels, focus states, or semantic control states.</p>
<h2>Behavior and accessibility</h2>
<p>Use only inside content opened by ModalService. The template moves to the active modal view. Keep action buttons keyboard accessible and use ModalRef to close with a result. Outside a modal the directive emits a development warning.</p>
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
<p>Appearance uses Blocks semantic colors, spacing, radius and motion tokens. Glass surfaces inherit the application configuration from <code>ThemingService</code>; adjusting glassiness updates existing components and overlays. Content-only parts share their containing surface instead of adding another backdrop filter.</p>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { inject } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ThemingService</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/core&#x27;</span>;

<span class="hljs-keyword">private</span> <span class="hljs-keyword">readonly</span> theme = <span class="hljs-title function_">inject</span>(<span class="hljs-title class_">ThemingService</span>);

<span class="hljs-comment">// Application-wide, including open overlays.</span>
<span class="hljs-variable language_">this</span>.<span class="hljs-property">theme</span>.<span class="hljs-title function_">setAppearance</span>({ <span class="hljs-attr">glassiness</span>: <span class="hljs-number">0.5</span> });
<span class="hljs-comment">// Opaque presentation retains the same layout and component API.</span>
<span class="hljs-variable language_">this</span>.<span class="hljs-property">theme</span>.<span class="hljs-title function_">setAppearance</span>({ <span class="hljs-attr">reducedTransparency</span>: <span class="hljs-literal">true</span> });</code></pre>
<p><code>BxA11yService</code> controls reduced motion; reduced transparency and forced colors receive opaque presentation. Glass is decorative and does not replace labels, focus states, or semantic control states.</p>
<h2>Behavior and accessibility</h2>
<p>Use only inside content opened by ModalService. The template moves to the active modal view. Keep action buttons keyboard accessible and use ModalRef to close with a result. Outside a modal the directive emits a development warning.</p>
<h2>Playground</h2>
<p>Open <code>/components/modal-header</code> for a working example and its current value or action result.</p>
`,"projects/blocks/navigation/README.md":`<h1>Navigation</h1>
<p>Declare UI sections once with <code>defineNavigation</code>. Its <code>withNav</code> helper restricts each route&#39;s <code>section</code> to the declared IDs and checks the remaining navigation metadata. Declarations can live in <code>app.routes.ts</code> or a shared <code>app.navigation.ts</code> used by multiple route files.</p>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { defineNavigation } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/navigation&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Routes</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/router&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">const</span> navigation = <span class="hljs-title function_">defineNavigation</span>({
  <span class="hljs-attr">sections</span>: [
    { <span class="hljs-attr">id</span>: <span class="hljs-string">&#x27;start&#x27;</span>, <span class="hljs-attr">title</span>: <span class="hljs-string">&#x27;Get started&#x27;</span> },
    { <span class="hljs-attr">id</span>: <span class="hljs-string">&#x27;forms&#x27;</span>, <span class="hljs-attr">title</span>: <span class="hljs-string">&#x27;Form controls&#x27;</span> }
  ]
});

<span class="hljs-keyword">const</span> { withNav } = navigation;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">const</span> <span class="hljs-attr">routes</span>: <span class="hljs-title class_">Routes</span> = [
  <span class="hljs-title function_">withNav</span>(
    { <span class="hljs-attr">path</span>: <span class="hljs-string">&#x27;home&#x27;</span>, <span class="hljs-attr">loadComponent</span>: <span class="hljs-function">() =&gt;</span> <span class="hljs-keyword">import</span>(<span class="hljs-string">&#x27;./home&#x27;</span>).<span class="hljs-title function_">then</span>(<span class="hljs-function"><span class="hljs-params">m</span> =&gt;</span> m.<span class="hljs-property">Home</span>) },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;Overview&#x27;</span>, <span class="hljs-attr">section</span>: <span class="hljs-string">&#x27;start&#x27;</span> }
  )
];

<span class="hljs-comment">// withNav({}, { section: &#x27;typo&#x27; }); // TypeScript error: undeclared section.</span></code></pre>
<p>Provide the same configuration in your application&#39;s providers:</p>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { provideNavigation } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/navigation&#x27;</span>;
<span class="hljs-keyword">import</span> { navigation } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./app.routes&#x27;</span>;

<span class="hljs-comment">// In ApplicationConfig.providers, alongside provideRouter(routes):</span>
<span class="hljs-title function_">provideNavigation</span>(navigation.<span class="hljs-property">config</span>)</code></pre>
<p><code>NavigationService.menuGroups()</code> returns nonempty <code>{ id, title, items }</code> groups. Sections follow declaration order unless their numeric <code>order</code> is specified; sections with an order come first. Titles default to the section ID. Each group&#39;s items are flat entries from the menu tree, including descendants, with existing route ordering, access checks, visibility and translations applied. Excluded parent containers do not become links. <code>menu()</code> continues to expose the menu tree.</p>
<p>The standalone <code>withNav</code> and <code>provideNavigation</code> helpers remain available. For these existing callers, undeclared sections appear after declared sections with their ID as the title. Items without a section appear in a group with an empty ID and title. Type checking against a declaration applies when using the <code>withNav</code> returned by <code>defineNavigation</code>.</p>
<p>The UI can apply search to <code>menuGroups()</code> without defining section titles, ordering or flattening. Track groups by <code>id</code> and entries by <code>route</code>.</p>
<p>Run the grouping and metadata type checks with <code>npm run test:navigation</code>.</p>
<h2>Navigation views</h2>
<p><code>SideNav</code> and <code>TopNav</code> consume the same hierarchical route sections, metadata, access filtering, translation adapter, and most-specific active route. They share item presentation, one-level-at-a-time browsing, flat contextual search, and focus/scroll restoration. Configure application defaults through <code>sideNav</code> and <code>topNav</code> in <code>defineNavigation</code>; instance configuration overrides those settings.</p>
<p>See <a href="components/side-nav">side navigation</a> and <a href="components/top-nav">top navigation</a> for public imports, configuration, slots, accessibility, and runnable examples. Their playground routes are <code>/components/side-nav</code> and <code>/components/top-nav</code>.</p>
`,"projects/blocks/navigation/components/breadcrumbs/README.md":`<h1>Breadcrumbs</h1>
<p>A route-aware trail derived from Blocks navigation metadata.</p>
<h2>Import</h2>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">Breadcrumbs</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/navigation&#x27;</span>;</code></pre>
<p>Add the standalone component or directive to your component&#39;s <code>imports</code>.</p>
<h2>Usage</h2>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">bx-breadcrumbs</span> [<span class="hljs-attr">minimumBreadcrumbs</span>]=<span class="hljs-string">&quot;1&quot;</span> <span class="hljs-attr">divider</span>=<span class="hljs-string">&quot;chevron-right&quot;</span> /&gt;</span></code></pre>
<h2>API</h2>
<p><code>minimumBreadcrumbs</code> defaults to 2; values below 1 are clamped. <code>divider</code> accepts an icon name. Route labels come from <code>withNav</code> metadata and <code>NavigationService</code>.</p>
<h2>Appearance</h2>
<p>Appearance uses Blocks semantic colors, spacing, radius and motion tokens. Glass surfaces inherit the application configuration from <code>ThemingService</code>; adjusting glassiness updates existing components and overlays. Content-only parts share their containing surface instead of adding another backdrop filter.</p>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { inject } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ThemingService</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/core&#x27;</span>;

<span class="hljs-keyword">private</span> <span class="hljs-keyword">readonly</span> theme = <span class="hljs-title function_">inject</span>(<span class="hljs-title class_">ThemingService</span>);

<span class="hljs-comment">// Application-wide, including open overlays.</span>
<span class="hljs-variable language_">this</span>.<span class="hljs-property">theme</span>.<span class="hljs-title function_">setAppearance</span>({ <span class="hljs-attr">glassiness</span>: <span class="hljs-number">0.5</span> });
<span class="hljs-comment">// Opaque presentation retains the same layout and component API.</span>
<span class="hljs-variable language_">this</span>.<span class="hljs-property">theme</span>.<span class="hljs-title function_">setAppearance</span>({ <span class="hljs-attr">reducedTransparency</span>: <span class="hljs-literal">true</span> });</code></pre>
<p><code>BxA11yService</code> controls reduced motion; reduced transparency and forced colors receive opaque presentation. Glass is decorative and does not replace labels, focus states, or semantic control states.</p>
<h2>Behavior and accessibility</h2>
<p>Register metadata with <code>withNav</code> and provide navigation in application configuration. Breadcrumbs navigate using the router and update after navigation. This demo lives under Components so the trail has a real parent route.</p>
<h2>Playground</h2>
<p>Open <code>/components/breadcrumbs</code> for a working example and its current value or action result.</p>
`,"projects/blocks/navigation/components/shared/navigation-item/README.md":`<h1>Navigation item</h1>
<p>Internal item presentation shared by <a href="components/side-nav">SideNav</a> and <a href="components/top-nav">TopNav</a>. Consumers configure the public owners rather than importing this implementation component.</p>
<p>A native page link and a separate disclosure retain independent hover/focus surfaces. Only the most specific active route receives selected styling. Top-level horizontal disclosures point down/up; vertical levels use a forward arrow. The scoped navigation state coordinates all requests through the owner&#39;s one submenu panel.</p>
<p>Search results always retain their muted parent path, including custom templates. Search results have no floating guides or additional selection styling. The established side-nav CSS variables remain supported; top navigation maps its own variables into the same shared styles.</p>
<p>Both public playground pages demonstrate these interactions, translation changes, disabled routes, and four levels of nesting.</p>
`,"projects/blocks/navigation/components/shared/navigation-level/README.md":`<h1>Navigation level</h1>
<p>Internal nested-list presentation shared by <a href="components/side-nav">SideNav</a> and <a href="components/top-nav">TopNav</a>. The owner supplies one scoped state/focus service and chooses the surface: inline rail, side panel, or top dropdown.</p>
<p>The current parent remains a route link. Back, Escape, or the opposite arrow returns one level, while Up/Down and Home/End move through the list. The header and parent path remain above the scrolling list. Ancestor path buttons open their respective panels without route navigation, using Blocks text buttons and the owner\u2019s focus/scroll restoration. The current parent heading remains a separate page link. Owners restore the matching scroll position and disclosure focus. Levels use the same short slide, disabled reactively by reduced-motion preferences.</p>
<p>Neither this view nor an item creates additional overlays. Theme, text resolution, route matching, and flat contextual search come from the shared navigation state. Consumer APIs and examples live with the public owners.</p>
`,"projects/blocks/navigation/components/side-nav/README.md":`<h1>Side navigation</h1>
<p>A route-driven application rail with collapsible sections, a compact icon rail, one shared submenu panel, contextual fuzzy search, and a responsive mobile drawer. It shares <code>NavigationService</code> with breadcrumbs and <code>TopNav</code>, and shares item, search, level, and focus behavior with top navigation and uses Blocks menu, overlay, theme, surface, search, tag, and accessibility facilities.</p>
<h2>Public import</h2>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> {
  <span class="hljs-title class_">SideNav</span>, <span class="hljs-title class_">SideNavHeaderDirective</span>, <span class="hljs-title class_">SideNavFooterDirective</span>,
  defineNavigation, provideNavigation,
  <span class="hljs-title class_">ISideNavConfig</span>, <span class="hljs-title class_">ISideNavItemContext</span>, <span class="hljs-title class_">ISideNavLayout</span>,
  <span class="hljs-title class_">INavigationTreeGroup</span>, <span class="hljs-title class_">INavigationItem</span>
} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/navigation&#x27;</span>;</code></pre>
<p><code>SideNavConfig</code> aliases <code>ISideNavConfig</code>; <code>NavItem</code> aliases the resolved <code>INavigationItem</code> contract. Interfaces follow the library&#39;s <code>I</code> naming convention. Import all three components/directives in the shell&#39;s Angular <code>imports</code>.</p>
<h2>Working usage and withNav</h2>
<p>Declare sections once, attach metadata to Angular routes, and provide the same configuration to navigation. Nested routes inherit the parent&#39;s section; assigning another section moves that branch to the named section. No component-specific copy of your routing configuration is required.</p>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">Routes</span>, provideRouter } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/router&#x27;</span>;
<span class="hljs-keyword">import</span> { defineNavigation, provideNavigation } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/navigation&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">const</span> navigation = <span class="hljs-title function_">defineNavigation</span>({
  <span class="hljs-attr">sections</span>: [
    { <span class="hljs-attr">id</span>: <span class="hljs-string">&#x27;workspace&#x27;</span>, <span class="hljs-attr">title</span>: <span class="hljs-string">&#x27;Workspace&#x27;</span>, <span class="hljs-attr">icon</span>: { <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;building-2&#x27;</span> },
      <span class="hljs-attr">collapsible</span>: <span class="hljs-literal">true</span>, <span class="hljs-attr">showInBreadcrumbs</span>: <span class="hljs-literal">true</span> },
    { <span class="hljs-attr">id</span>: <span class="hljs-string">&#x27;admin&#x27;</span>, <span class="hljs-attr">title</span>: { <span class="hljs-attr">key</span>: <span class="hljs-string">&#x27;sections.admin&#x27;</span> }, <span class="hljs-attr">icon</span>: { <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;settings&#x27;</span> },
      <span class="hljs-attr">collapsible</span>: <span class="hljs-literal">true</span>, <span class="hljs-attr">collapsed</span>: <span class="hljs-literal">true</span>, <span class="hljs-attr">showInBreadcrumbs</span>: <span class="hljs-literal">false</span> }
  ],
  <span class="hljs-attr">sideNav</span>: { <span class="hljs-attr">side</span>: <span class="hljs-string">&#x27;left&#x27;</span>, <span class="hljs-attr">persistenceKey</span>: <span class="hljs-string">&#x27;studio.navigation.v1&#x27;</span> }
});
<span class="hljs-keyword">const</span> { withNav } = navigation;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">const</span> <span class="hljs-attr">routes</span>: <span class="hljs-title class_">Routes</span> = [
  <span class="hljs-title function_">withNav</span>({ <span class="hljs-attr">path</span>: <span class="hljs-string">&#x27;projects&#x27;</span>, <span class="hljs-attr">children</span>: [
    <span class="hljs-title function_">withNav</span>({ <span class="hljs-attr">path</span>: <span class="hljs-string">&#x27;tokens&#x27;</span>, <span class="hljs-attr">loadComponent</span>: <span class="hljs-function">() =&gt;</span> <span class="hljs-keyword">import</span>(<span class="hljs-string">&#x27;./tokens&#x27;</span>).<span class="hljs-title function_">then</span>(<span class="hljs-function"><span class="hljs-params">m</span> =&gt;</span> m.<span class="hljs-property">Tokens</span>) }, {
      <span class="hljs-attr">label</span>: { <span class="hljs-attr">key</span>: <span class="hljs-string">&#x27;nav.tokens&#x27;</span> }, <span class="hljs-attr">icon</span>: { <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;swatch-book&#x27;</span> },
      <span class="hljs-attr">endIcon</span>: { <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;sparkles&#x27;</span> }, <span class="hljs-attr">keywords</span>: [<span class="hljs-string">&#x27;palette&#x27;</span>, <span class="hljs-string">&#x27;variables&#x27;</span>],
      <span class="hljs-attr">tags</span>: [{ <span class="hljs-attr">text</span>: { <span class="hljs-attr">key</span>: <span class="hljs-string">&#x27;nav.new&#x27;</span> }, <span class="hljs-attr">config</span>: { <span class="hljs-attr">color</span>: <span class="hljs-string">&#x27;success&#x27;</span> } }],
      <span class="hljs-attr">showInBreadcrumbs</span>: <span class="hljs-literal">false</span>
    })
  ] }, { <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;Projects&#x27;</span>, <span class="hljs-attr">section</span>: <span class="hljs-string">&#x27;workspace&#x27;</span>, <span class="hljs-attr">icon</span>: { <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;folder&#x27;</span> } })
];

<span class="hljs-comment">// In application providers:</span>
<span class="hljs-comment">// provideRouter(routes), ...provideNavigation(navigation.config)</span></code></pre>
<p>A route that only groups children can omit a component. Provide an empty child route if that group&#39;s own URL should render a page. Parent labels remain links; their adjacent disclosure opens the child menu. In the compact rail, the parent icon opens its menu and the heading link inside navigates to the parent&#39;s route.</p>
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
<p>Use <code>display: flex; min-width: 0</code> on your shell and <code>flex: 1; min-width: 0</code> on its content. The component reserves its own desktop width; the host adjusts its flex order for the configured physical side, including RTL layouts. Mobile drawers reserve zero horizontal space. The built-in Blocks tonal hamburger is fixed at the configured edge and hides while the drawer is open, leaving one close action in its header; reserve room for it in your toolbar. For exact alignment with other toolbar actions, put an application-owned trigger in that toolbar\u2019s flex layout and disable the built-in trigger; bind its <code>aria-controls</code> to <code>navigation.panelId</code>. A custom trigger can call <code>navigation.open($event)</code>, <code>close()</code>, or <code>toggle($event)</code> with <code>showMobileTrigger: false</code>. Passing the click event or opening button ensures focus returns to it even in browsers that do not focus buttons on pointer activation.</p>
<p>Header/footer slots use the modal pattern: directives register <code>ng-template</code> references with their containing component. <code>$implicit</code> and <code>collapsed</code> contain the effective compact presentation state; <code>mobile</code> identifies drawer presentation. Keep interactive projected content accessible and avoid fixed widths inside compact slots.</p>
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
<td><code>isMobile()</code>, <code>isCollapsed()</code>, <code>isInlineSubmenus()</code>, <code>query()</code></td>
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
<p><code>collapsedChange</code> always emits a boolean, so <code>[(collapsed)]</code> works with an ordinary <code>signal(false)</code>. Omitting the input lets persistence/configuration own the state; a bound value takes precedence.</p>
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
<td><code>&#39;left&#39;</code>; physical <code>&#39;right&#39;</code> changes drawer edge, hamburger placement, and preferred flyout side</td>
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
<td><code>submenuBreakpoint</code></td>
<td><code>&#39;xl&#39;</code>; automatic mode uses inline submenu levels at or below this shared breakpoint</td>
</tr>
<tr>
<td><code>submenuMode</code></td>
<td><code>&#39;auto&#39;</code>; <code>&#39;inline&#39;</code> keeps levels inside the rail, <code>&#39;flyout&#39;</code> explicitly uses one adjacent panel; mobile always uses inline levels</td>
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
<p>Every configurable text accepts <code>ResolvableText</code>. Plain strings work without <code>BX_I18N</code>; keys fall back to their key when no adapter exists. Language changes reactively update mounted labels, badges, search keywords, and action names when the adapter exposes its version signal. Function-valued <code>NavText</code> receives the existing navigation context contract.</p>
<p>Section configuration supports <code>id</code>, translated <code>title</code>, <code>icon</code>, <code>order</code>, <code>collapsible</code>, initial <code>collapsed</code>, and <code>showInBreadcrumbs</code>. Route metadata supports translated <code>label</code>/<code>breadcrumb</code>, <code>icon</code>, <code>endIcon</code>, <code>tags</code>, translated <code>keywords</code>, <code>disabled</code>, <code>section</code>, <code>order</code>, <code>root</code>, <code>menu</code>, <code>hidden</code>, <code>visible</code>, and <code>showInBreadcrumbs</code>. A route&#39;s explicit breadcrumb setting overrides its section&#39;s setting; otherwise inclusion defaults to true. Breadcrumb suppression does not prevent the route from being current or active.</p>
<p><code>hidden</code> now consistently prunes menu branches as well as suppressing breadcrumbs. If an application previously used <code>hidden</code> only to omit a breadcrumb, migrate to <code>showInBreadcrumbs: false</code> to keep that menu item visible.</p>
<p><code>menu: false</code> promotes visible descendants; <code>hidden: true</code>, failed access checks, or <code>visible: () =&gt; false</code> hide the whole branch. The legacy flat <code>menuGroups()</code> API remains available. <code>menuTreeGroups()</code> is the hierarchical API. Dynamic path parameters still need application-owned concrete route entries or deliberate <code>menu: false</code>; the side-nav does not invent parameter values. Declare navigation-bearing routes in the eager route tree; unloaded <code>loadChildren</code> configurations are not enumerated.</p>
<h2>Appearance and customization</h2>
<p>Use application-wide <code>sideNav</code> defaults in <code>defineNavigation</code>, then instance overrides. Nested configuration updates should preserve unrelated keys, e.g. <code>config.update(value =&gt; ({ ...value, side: &#39;right&#39; }))</code>.</p>
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
<td><code>--bx-side-nav-menu-width</code></td>
<td><code>17rem</code></td>
</tr>
<tr>
<td><code>--bx-side-nav-menu-max-height</code></td>
<td><code>32rem</code>, constrained to the viewport</td>
</tr>
<tr>
<td><code>--bx-side-nav-duration</code>, <code>--bx-side-nav-easing</code></td>
<td><code>250ms</code>, <code>ease</code>; reduced motion takes precedence</td>
</tr>
<tr>
<td><code>--bx-side-nav-backdrop</code></td>
<td>Shared backdrop color with a neutral scrim fallback</td>
</tr>
</tbody></table>
<p>Route activity comes from Angular Router matching and updates after navigation, redirects, and browser history changes. Query parameters, matrix parameters, and fragments do not clear selection. Only the most specific matching item receives the selected tonal background and border. For example, <code>/components/side-nav/overview</code> selects Side navigation rather than also selecting <code>/components</code>. Its owning section uses accent text without a second selected box, including custom trees whose child URLs do not share the parent URL. Only the exact current link receives <code>aria-current=&quot;page&quot;</code>.</p>
<p>The navigation region is the panel&#39;s sole vertical scroller. The compact rail reserves equal scrollbar gutters on both edges and centers icons in the remaining space, aligned with header, search, and footer controls. Activating its search icon expands the rail and focuses the search field without scrolling the page. Its scrollbar gutter and the flyouts&#39; gutters remain reserved when content fits, preventing width shifts. Horizontal overflow is constrained, and labels wrap within the available width.</p>
<p>The background and search use Blocks surfaces. Rows reuse their containing surface; the adjacent submenu panel is opaque, without backdrop filters. Theme inheritance keeps open overlays synchronized with their source. Standard semantic colors, focus styles, forced colors, reduced transparency, and opaque presentation remain available through Blocks.</p>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> #<span class="hljs-attr">item</span> <span class="hljs-attr">let-entry</span> <span class="hljs-attr">let-active</span>=<span class="hljs-string">&quot;active&quot;</span> <span class="hljs-attr">let-compact</span>=<span class="hljs-string">&quot;collapsed&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">bx-icon</span> [<span class="hljs-attr">name</span>]=<span class="hljs-string">&quot;entry.icon?.name ?? &#x27;circle&#x27;&quot;</span> /&gt;</span>
  @if (!compact) { <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>{{ entry.label }}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span> }
<span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">bx-side-nav</span> [<span class="hljs-attr">itemTemplate</span>]=<span class="hljs-string">&quot;item&quot;</span> /&gt;</span></code></pre>
<p>Item templates should contain presentation only. The surrounding control owns the accessible interaction; avoid nested links/buttons. Application-owned <code>groups</code> use stable unique item IDs and resolved section titles; item <code>data.label</code> and <code>data.keywords</code> may retain translation definitions. Update the groups input when application-owned data changes. The route access adapter applies to service-generated groups; callers supplying groups own their visibility decisions.</p>
<h2>Behavior and accessibility</h2>
<p>Every label remains a native route link. Its separate chevron opens children without navigating. The whole navigation chooses one submenu presentation, independent of branch depth:</p>
<ul>
<li>At <code>xl</code> and below, children replace the current list inside the rail. Inline layouts also measure their containing shell, so a narrow embedded preview uses this behavior on a wide viewport.</li>
<li>Above that threshold, one opaque adjacent panel opens. All deeper levels replace the list in that same panel; further overlays never accumulate or overlap.</li>
<li>Mobile drawers always browse inside the panel. <code>submenuMode: &#39;inline&#39;</code> forces this on desktop too; <code>submenuMode: &#39;flyout&#39;</code> is an explicit desktop override for previews or application layouts.</li>
</ul>
<p>Back and the clickable ancestor path stay above the scrolling list. Each ancestor button opens that submenu panel without navigating to its page; the section button opens its root list. The current parent&#39;s heading is also a link to its own page. Returning to a level restores its scroll position and disclosure focus. Changing the available width preserves the browsing path; a compact rail temporarily expands when it needs to display inline levels without changing its saved collapse preference. Levels slide briefly on explicit browsing changes; reduced motion disables the slide. Opening a submenu requires a disclosure click, touch, or keyboard action; hovering a label no longer opens menus.</p>
<p>Search normalizes accents and case, ranks exact/subsequence/keyword matches, and tolerates a single edit in words of at least four characters. It renders a flat list of direct matches with translated parent paths in the main navigation, with identical behavior in both presentations. Searching never opens submenus. Labels navigate directly; result disclosures leave search and browse the chosen item&#39;s children. After navigating to a search result, clearing search opens its containing submenu and scrolls that result into view, preserving search-field focus. Clearing without a successful selection restores the previous browsing level and its scroll position. Search temporarily expands a compact rail without changing its saved preference. Search covers the currently supplied tree, not unloaded or remote results.</p>
<p>Search results use muted parent paths without floating arrows, extra selection colors, or outlines. The page link and its separate disclosure have independent hover and focus surfaces; selection belongs to the page link. The legacy <code>showSearchGuide</code> option is ignored, and the former guide CSS variables and <code>--bx-side-nav-item-highlight-background</code> no longer affect the component.</p>
<p>Menus retain <code>menu</code>/<code>menuitem</code> semantics, accessible names, native links, and separate disclosure buttons. Enter/Space or the arrow towards the submenu opens children. Up/Down and Home/End move within the current menu. Back, Escape, or the opposite arrow returns one level, restoring scroll and focus; Escape at the root can dismiss the mobile drawer. Tab cycles inside the adjacent panel or mobile drawer. Clicking outside closes the adjacent panel.</p>
<p>The adjacent panel reuses <code>MenuTriggerDirective</code>, native CSS anchoring, origin visibility tracking, theme inheritance, and the measured fallback used by Blocks dropdowns. Scrolling does not write overlay positions when native anchoring is available. The panel closes when its origin leaves its clipping container or the viewport. It honors <code>bxOverlayContext</code>; menus opened from dialogs or top-layer overlays retain that layer.</p>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-comment">&lt;!-- App-wide defaults can set the same options through defineNavigation(). --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">bx-side-nav</span> [<span class="hljs-attr">config</span>]=<span class="hljs-string">&quot;{ submenuBreakpoint: &#x27;xl&#x27;, submenuMode: &#x27;auto&#x27;, backLabel: { key: &#x27;nav.back&#x27; } }&quot;</span> /&gt;</span></code></pre>
<p>Fixed mobile navigation uses a labelled modal drawer with focus capture/trapping, scroll locking, a click-to-close scrim, a Blocks icon-only close button with hover feedback, and Escape dismissal. Closing restores the opening control&#39;s focus. A submenu consumes Escape before the drawer does. Resizing out of mobile mode closes the drawer and releases its lock. Browser-only persistence and measurement are guarded; unavailable/malformed storage falls back to usable defaults. Storage is scoped by your chosen key and is read when that key changes, without cross-tab synchronization.</p>
<p>For an inline mobile preview, use a positioned shell (<code>position: relative</code>) with a minimum height and <code>overflow: hidden</code>. Its drawer and scrim stay inside that shell and do not lock page scrolling. Off-screen drawer content is clipped without creating a scroll container, and focus capture uses <code>preventScroll</code> to keep the surrounding content stationary during either slide direction. Keep the shell outside another <code>bxSurface</code>: Blocks intentionally disables blur for nested glass. Presentation changes establish the closed layout immediately; explicit open/close actions animate the slide. Reduced motion disables that animation.</p>
<h2>Playground</h2>
<p>Visit <code>/components/side-nav</code>. The application shell also uses <code>SideNav</code> with real <code>withNav</code> routes, an expanded text-only menu, its Blocks brand, and no footer. Its compact control and leading item/section icons are disabled; these remain available in the dedicated demo. The dedicated demo supplies a four-level fixture tree so selections remain on the demo page, and exposes side, collapsed/mobile presentation, RTL, custom item content, panel height, optional search, and a live language dropdown with English, Spanish, French, and German translations covering every menu item, section, action, demo control, instruction, and selection result. The mobile checkbox explicitly controls the embedded presentation, independent of the application shell\u2019s responsive navigation. Use the adjacent-panel control to compare the two desktop presentations. Try <code>dsgn tkns</code>, <code>palette</code>, <code>tokens</code>, or <code>Palette</code> for flat contextual results, clear the search, and use the disclosures and Back control through all four levels.</p>
`,"projects/blocks/navigation/components/top-nav/README.md":`<h1>Top navigation</h1>
<p>A responsive horizontal route navigation bar with brand/action slots, a compact menu, contextual search, and one shared panel for every nesting level. It uses the same route state, item views, Back behavior, search matching, focus/scroll bookmarks, and tonal styling as <code>SideNav</code>.</p>
<h2>Public import</h2>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> {
  <span class="hljs-title class_">TopNav</span>, <span class="hljs-title class_">TopNavBrandDirective</span>, <span class="hljs-title class_">TopNavActionsDirective</span>,
  <span class="hljs-title class_">ITopNavConfig</span>, <span class="hljs-title class_">ITopNavSlotContext</span>, <span class="hljs-title class_">INavigationItemContext</span>,
  defineNavigation, provideNavigation
} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/navigation&#x27;</span>;</code></pre>
<p>Import the component and any slot directives used by your standalone shell. Root links come from <code>NavigationService.menuTreeGroups()</code> unless the optional <code>groups</code> input is supplied. An explicit empty array omits the primary menu control while preserving brand/actions; with search disabled this also serves as a toolbar shell.</p>
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
<span class="hljs-keyword">const</span> { withNav } = navigation;
<span class="hljs-keyword">const</span> routes = [
  <span class="hljs-title function_">withNav</span>({ <span class="hljs-attr">path</span>: <span class="hljs-string">&#x27;projects&#x27;</span>, <span class="hljs-attr">children</span>: [
    <span class="hljs-title function_">withNav</span>({ <span class="hljs-attr">path</span>: <span class="hljs-string">&#x27;tokens&#x27;</span>, <span class="hljs-attr">loadComponent</span>: <span class="hljs-function">() =&gt;</span> <span class="hljs-keyword">import</span>(<span class="hljs-string">&#x27;./tokens&#x27;</span>).<span class="hljs-title function_">then</span>(<span class="hljs-function"><span class="hljs-params">m</span> =&gt;</span> m.<span class="hljs-property">Tokens</span>) },
      { <span class="hljs-attr">label</span>: { <span class="hljs-attr">key</span>: <span class="hljs-string">&#x27;navigation.tokens&#x27;</span> }, <span class="hljs-attr">icon</span>: { <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;swatch-book&#x27;</span> } })
  ] }, { <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;Projects&#x27;</span>, <span class="hljs-attr">section</span>: <span class="hljs-string">&#x27;workspace&#x27;</span>, <span class="hljs-attr">icon</span>: { <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;folder&#x27;</span> } })
];
<span class="hljs-comment">// Application providers: provideRouter(routes), ...provideNavigation(navigation.config)</span></code></pre>
<p>A parent label always navigates to the parent&#39;s own route. Its separate chevron opens children without navigating. Declare an empty child route if the parent URL should render its own page. Parameterized menu destinations still require concrete application-owned entries; navigation does not invent parameter values.</p>
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
<p>All configurable text accepts <code>ResolvableText</code>. <code>BX_I18N</code> is optional; strings work without it, missing adapters fall back to translation keys, and an adapter version signal refreshes mounted labels, badges, keywords, action names, and paths. Section titles supplied by application-owned <code>groups</code> are resolved strings, so update that input when the language changes. The playground shares one live language adapter between its fixtures and navigation.</p>
<p><code>bxTopNavBrand</code> and <code>bxTopNavActions</code> register templates with their owner. Their <code>ITopNavSlotContext</code> contains <code>$implicit</code>/<code>compact</code> and <code>open</code>. Both slots remain available in compact presentation. Keep projected controls responsive and provide accessible names for icon-only actions.</p>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> #<span class="hljs-attr">item</span> <span class="hljs-attr">let-entry</span> <span class="hljs-attr">let-active</span>=<span class="hljs-string">&quot;active&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>{{ entry.label }}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
  @if (active) { <span class="hljs-tag">&lt;<span class="hljs-name">small</span> <span class="hljs-attr">aria-hidden</span>=<span class="hljs-string">&quot;true&quot;</span>&gt;</span>\u2713<span class="hljs-tag">&lt;/<span class="hljs-name">small</span>&gt;</span> }
<span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">bx-top-nav</span> [<span class="hljs-attr">itemTemplate</span>]=<span class="hljs-string">&quot;item&quot;</span> /&gt;</span></code></pre>
<p>Custom item content is presentation only; do not place nested links/buttons inside it. Native links preserve modified-click and open-in-new-tab behavior. Supplying new <code>groups</code> arrays updates mounted navigation without a transport dependency; applications own loading, access policy, and request lifecycle for custom trees. Service-generated groups retain the existing route visibility/access adapter contracts.</p>
<h2>Appearance and customization</h2>
<p>The bar uses the shared Blocks surface. Its panel is an opaque menu surface with semantic colors and theme inheritance. It intentionally uses no nested backdrop filter. Keep the component outside another <code>bxSurface</code> when demonstrating bar blur, since Blocks suppresses nested glass passes.</p>
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
<p>Only the most specific matching route gets selected styling. Query parameters, matrix parameters, fragments, and redirect URLs do not produce multiple selected routes. A horizontal ancestor may use accent text for context without acquiring the selected box. Section headings in the panel likewise use accent text. Page links and disclosures have independent hover and focus surfaces.</p>
<h2>Behavior and accessibility</h2>
<p>The bar measures its primary links and remaining space after brand/actions. It switches to the compact menu at the configured breakpoint or whenever content does not fit, including changes from translation, slot content, fonts, resizing, and browser zoom. Links are not left hidden behind an essential horizontal scrollbar. A compact slot that shrinks its brand/actions does not cause repeated expand/collapse feedback.</p>
<p>Both presentations use one dropdown panel. The first disclosure opens it below the bar using <code>MenuTriggerDirective</code> and the existing overlay context. Further disclosures replace its list; recursive overlays never accumulate. Back and the clickable ancestor path remain above the scrolling list. Ancestor buttons open their submenu panels without navigating to their pages, and the parent&#39;s heading remains a route link. Back restores the previous list&#39;s scroll and disclosure focus. The browsing path survives presentation changes; the panel can reattach to the compact control when its former origin disappears.</p>
<p>Search always renders flat direct matches with muted parent paths. It does not open nested panels or color ancestors as selected. After navigating to a result, clearing search opens its containing submenu and scrolls the selected row into view while retaining search-field focus. Without a successful selection it restores the prior browsing location and scroll position. A result label navigates directly; its disclosure leaves search and browses the result&#39;s children. Search results have no floating guides; the legacy <code>showSearchGuide</code> option is ignored and the former guide CSS variables no longer affect the component.</p>
<p>Horizontal links use a menubar with one tab stop, Left/Right movement respecting RTL, Home/End, and Down to open a parent&#39;s submenu. The panel uses native links and menu semantics; Up/Down and Home/End navigate a list. Back, Escape, or the opposite arrow returns one nested level. Escape at the panel root or its close action dismisses it and restores the opening control. Tab stays inside the open panel; outside clicks and route changes close it. Focus return uses <code>preventScroll</code>.</p>
<p>The panel is nonmodal: it does not lock page scrolling. Shared native CSS anchoring follows scrolling and closes a panel whose origin becomes clipped/offscreen. The bar&#39;s overlay context supports sticky headers and top-layer surfaces; theme, palette, opaque appearance, forced colors, and accessibility changes update mounted controls and overlays. Resize/direction observers, subscriptions, focus traps, and overlays clean up with their owners. Browser measurements are deferred until rendering and guarded for SSR.</p>
<h2>Playground</h2>
<p>Visit <code>/components/top-nav</code> (redirects to <code>/components/top-nav/overview</code>). The demo uses the same four-level fixture, keywords, tags, disabled item, and language dropdown with English, Spanish, French, and German translations as side navigation. Page links stay on the top-nav demo route family, so route highlighting and selection feedback remain observable.</p>
<p>Change preview width, force compact, add action controls, toggle icons/RTL/custom templates/sticky presentation, and switch languages. The preview uses the shared <code>sm</code> breakpoint so both presentations can be exercised within the documentation layout; library defaults remain <code>lg</code>. Try <code>dsgn tkns</code>, <code>palette</code>, <code>tokens</code>, or <code>Palette</code>, enter several levels, and use Back or clear search to inspect context and restoration. Appearance controls in the application toolbar apply to this component and its open panel.</p>
<p>The playground application&#39;s own toolbar also uses <code>TopNav</code>: it supplies an empty <code>groups</code> array and disables search to retain the existing sidenav as the sole primary navigation. The sidenav trigger lives in the brand slot; Appearance, palette, and theme-mode controls live in the actions slot. Their dropdowns retain the existing overlay context.</p>
`,"projects/blocks/primitives/components/loading-indicator/README.md":`<h1>Loading indicator</h1>
<p>Reusable loading feedback integrated with Blocks themes and accessibility preferences.</p>
<h2>Import</h2>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">LoadingIndicator</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/primitives&#x27;</span>;</code></pre>
<h2>Usage</h2>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">bx-loading-indicator</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Fetching results&quot;</span> /&gt;</span></code></pre>
<h2>API</h2>
<p><code>label</code> accepts translated text; <code>size</code> controls its decorative spinner. The host is a polite busy status region. Project optional supporting content after the status text. CSS variables: <code>--bx-loading-color</code>, <code>--bx-loading-gap</code>.</p>
<h2>Appearance and accessibility</h2>
<p>Uses Blocks semantic tokens and the active <code>ThemingService</code> configuration. Customize through documented inputs, templates and CSS variables. Existing components update when the application theme changes. Keyboard focus, forced colors, reduced transparency and <code>BxA11yService</code> reduced-motion preferences remain supported.</p>
<p>Text inputs accept <code>ResolvableText</code>: plain text or <code>{ key: &#39;translation.key&#39; }</code>. With <code>BX_I18N</code>, text is resolved reactively, including already-mounted controls when the adapter&#39;s <code>version</code> signal changes. Plain text works without an adapter.</p>
<h2>Playground</h2>
<p>Open <code>/components/loading-indicator</code>. Fake asynchronous requests demonstrate progress and loading buttons. Reduced-motion preferences remove continuous animation while preserving status feedback.</p>
`,"projects/blocks/primitives/components/loading-spinner/README.md":`<h1>Loading spinner</h1>
<p>Reusable loading feedback integrated with Blocks themes and accessibility preferences.</p>
<h2>Import</h2>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">LoadingSpinner</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/primitives&#x27;</span>;</code></pre>
<h2>Usage</h2>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">bx-loading-spinner</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Fetching results&quot;</span> [<span class="hljs-attr">size</span>]=<span class="hljs-string">&quot;24&quot;</span> /&gt;</span></code></pre>
<h2>API</h2>
<p><code>size</code> is the diameter in pixels (20 by default). <code>label</code> is translatable. <code>decorative</code> defaults to false; set it to true when surrounding content already names the operation. CSS variables: <code>--bx-spinner-color</code>, <code>--bx-spinner-stroke</code>, <code>--bx-spinner-size</code>.</p>
<h2>Appearance and accessibility</h2>
<p>Uses Blocks semantic tokens and the active <code>ThemingService</code> configuration. Customize through documented inputs, templates and CSS variables. Existing components update when the application theme changes. Keyboard focus, forced colors, reduced transparency and <code>BxA11yService</code> reduced-motion preferences remain supported.</p>
<p>Text inputs accept <code>ResolvableText</code>: plain text or <code>{ key: &#39;translation.key&#39; }</code>. With <code>BX_I18N</code>, text is resolved reactively, including already-mounted controls when the adapter&#39;s <code>version</code> signal changes. Plain text works without an adapter.</p>
<h2>Playground</h2>
<p>Open <code>/components/loading-spinner</code>. Fake asynchronous requests demonstrate progress and loading buttons. Reduced-motion preferences remove continuous animation while preserving status feedback.</p>
`,"projects/blocks/primitives/components/menu-item/README.md":`<h1>Menu item</h1>
<p>A menu action with optional icons, a shortcut hint, and destructive intent.</p>
<h2>Import</h2>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">MenuItem</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/primitives&#x27;</span>;</code></pre>
<p>Add the standalone component or directive to your component&#39;s <code>imports</code>.</p>
<h2>Usage</h2>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">bx-menu-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Delete&quot;</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;trash-2&quot;</span> [<span class="hljs-attr">danger</span>]=<span class="hljs-string">&quot;true&quot;</span> (<span class="hljs-attr">action</span>)=<span class="hljs-string">&quot;remove()&quot;</span> /&gt;</span></code></pre>
<h2>API</h2>
<p><code>label</code>, <code>icon</code>, <code>endIcon</code>, <code>shortcut</code>, <code>disabled</code>, <code>danger</code>, and <code>wrapLabel</code>. Set <code>wrapLabel</code> to <code>true</code> when a menu item should wrap long content instead of truncating it. <code>action</code> emits the mouse event for enabled items. Clipped labels and projected text use the shared <code>TruncateDirective</code> and receive an automatic tooltip. <code>[tooltipOnTruncate]=&quot;false&quot;</code> disables that tooltip while retaining ellipsis, allowing application-owned feedback. <code>wrapLabel</code> disables truncation itself.</p>
<h2>Appearance</h2>
<p>Appearance uses Blocks semantic colors, spacing, radius and motion tokens. Glass surfaces inherit the application configuration from <code>ThemingService</code>; adjusting glassiness updates existing components and overlays. Content-only parts share their containing surface instead of adding another backdrop filter.</p>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { inject } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ThemingService</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/core&#x27;</span>;

<span class="hljs-keyword">private</span> <span class="hljs-keyword">readonly</span> theme = <span class="hljs-title function_">inject</span>(<span class="hljs-title class_">ThemingService</span>);

<span class="hljs-comment">// Application-wide, including open overlays.</span>
<span class="hljs-variable language_">this</span>.<span class="hljs-property">theme</span>.<span class="hljs-title function_">setAppearance</span>({ <span class="hljs-attr">glassiness</span>: <span class="hljs-number">0.5</span> });
<span class="hljs-comment">// Opaque presentation retains the same layout and component API.</span>
<span class="hljs-variable language_">this</span>.<span class="hljs-property">theme</span>.<span class="hljs-title function_">setAppearance</span>({ <span class="hljs-attr">reducedTransparency</span>: <span class="hljs-literal">true</span> });</code></pre>
<p><code>BxA11yService</code> controls reduced motion; reduced transparency and forced colors receive opaque presentation. Glass is decorative and does not replace labels, focus states, or semantic control states.</p>
<h2>Behavior and accessibility</h2>
<p>Use <code>action</code> for activation and <code>disabled</code> for unavailable commands. Shortcut hints describe a binding; registering the actual shortcut remains the application\u2019s responsibility.</p>
<h2>Playground</h2>
<p>Open <code>/components/menu-item</code> for a working example and its current value or action result.</p>
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
<p><code>Menu</code> projects its children and provides the menu surface. Use <code>MenuItem</code> for consistent action styling. Place it in <code>bxDropdown</code> for positioned dismissal and keyboard behavior.</p>
<h2>Appearance</h2>
<p>Menus use an opaque themed backing with no container blur, reflections, or live lighting. Colors, spacing, radius, elevation and row interactions still follow Blocks tokens. Trigger and row effects retain their application appearance settings.</p>
<p><code>BxA11yService</code> controls reduced motion. Forced colors preserve native contrast and focus states.</p>
<h2>Behavior and accessibility</h2>
<p>Keep menu labels action-oriented. The container provides one opaque backing for its items. Avoid nested interactive controls inside one item.</p>
<h2>Playground</h2>
<p>Open <code>/components/menu</code> for a working example and its current value or action result.</p>
`,"projects/blocks/primitives/components/progress-bar/README.md":`<h1>Progress bar</h1>
<p>Reusable loading feedback integrated with Blocks themes and accessibility preferences.</p>
<h2>Import</h2>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">ProgressBar</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/primitives&#x27;</span>;</code></pre>
<h2>Usage</h2>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">bx-progress-bar</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Upload progress&quot;</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;progress()&quot;</span> /&gt;</span></code></pre>
<h2>API</h2>
<p><code>mode</code> supports <code>determinate</code>, <code>indeterminate</code>, <code>buffer</code>, and <code>query</code>. <code>value</code> and <code>bufferValue</code> are clamped to 0\u2013100. Unknown progress omits <code>aria-valuenow</code>. <code>label</code> accepts translations. CSS variables: <code>--bx-progress-color</code>, <code>--bx-progress-track</code>, <code>--bx-progress-height</code>, <code>--bx-progress-radius</code>.</p>
<h2>Appearance and accessibility</h2>
<p>Uses Blocks semantic tokens and the active <code>ThemingService</code> configuration. Customize through documented inputs, templates and CSS variables. Existing components update when the application theme changes. Keyboard focus, forced colors, reduced transparency and <code>BxA11yService</code> reduced-motion preferences remain supported.</p>
<p>Text inputs accept <code>ResolvableText</code>: plain text or <code>{ key: &#39;translation.key&#39; }</code>. With <code>BX_I18N</code>, text is resolved reactively, including already-mounted controls when the adapter&#39;s <code>version</code> signal changes. Plain text works without an adapter.</p>
<h2>Playground</h2>
<p>Open <code>/components/progress-bar</code>. Fake asynchronous requests demonstrate progress and loading buttons. Reduced-motion preferences remove continuous animation while preserving status feedback.</p>
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
<p><code>label</code> is required and accepts <code>ResolvableText</code>. <code>value</code> identifies selection and must be unique within its group; an omitted value is generated. <code>disabled</code> removes the tab from selection and arrow-key navigation.</p>
<p><code>color</code> chooses a semantic palette role: <code>primary</code>, <code>accent</code>, <code>success</code>, <code>danger</code>, <code>info</code>, <code>warn</code>, or <code>grayscale</code>. The <code>accent</code> role follows the second tone of the active palette. <code>textColor</code>, <code>highlightColor</code> and <code>contentColor</code> accept Blocks color tokens for the label, selected highlight/light and panel text. <code>icon</code> and <code>endIcon</code> add leading and trailing Blocks icons.</p>
<p>Use direct content for simple panels, or <code>ng-template bxTabContent</code> to create the contents only while selected. The Tabs component renders the header and accessible panel; <code>bx-tab</code> is the projected declaration.</p>
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
<p>Initialize <code>selectedTab</code> to a tab&#39;s value or <code>null</code> to select the first enabled tab. Values must be unique within a group. Omitted values receive generated identifiers.</p>
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
<p>Labels accept strings or <code>{ key: &#39;translation.key&#39; }</code> using <code>BX_I18N</code>. Removing or disabling the selected tab selects the first enabled tab. An empty or fully disabled group has no selected panel and a <code>null</code> model.</p>
<h2>Per-tab colors and icons</h2>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">bx-tabs</span> <span class="hljs-attr">ariaLabel</span>=<span class="hljs-string">&quot;Workspace&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">bx-tab</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Overview&quot;</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;house&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>Overview content.<span class="hljs-tag">&lt;/<span class="hljs-name">bx-tab</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">bx-tab</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Checks&quot;</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;badge-check&quot;</span> <span class="hljs-attr">endIcon</span>=<span class="hljs-string">&quot;chevron-right&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;success&quot;</span>&gt;</span>
    All checks passed.
  <span class="hljs-tag">&lt;/<span class="hljs-name">bx-tab</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">bx-tab</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Activity&quot;</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;activity&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;info&quot;</span>
    <span class="hljs-attr">textColor</span>=<span class="hljs-string">&quot;text-warn&quot;</span> <span class="hljs-attr">highlightColor</span>=<span class="hljs-string">&quot;text-warn&quot;</span> <span class="hljs-attr">contentColor</span>=<span class="hljs-string">&quot;text-info&quot;</span>&gt;</span>
    Recent activity.
  <span class="hljs-tag">&lt;/<span class="hljs-name">bx-tab</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">bx-tabs</span>&gt;</span></code></pre>
<p>Color overrides use the existing Blocks <code>Color</code> tokens, including semantic tokens such as <code>text-success</code> and palette tokens such as <code>purple-500</code>. Tokens follow the active theme. <code>textColor</code> styles the header in both selected and inactive states; <code>contentColor</code> supplies an inherited panel color without overriding projected components&#39; own semantic styles. Icons are decorative and inherit the header&#39;s text color. Their leading/trailing placement follows the text direction.</p>
<h2>Content lifecycle</h2>
<p>Direct content is supported for simple panels:</p>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">bx-tabs</span> <span class="hljs-attr">ariaLabel</span>=<span class="hljs-string">&quot;Project details&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">bx-tab</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Overview&quot;</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Project overview.<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">bx-tab</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">bx-tab</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Activity&quot;</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Recent updates.<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">bx-tab</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">bx-tabs</span>&gt;</span></code></pre>
<p>Angular constructs directly projected components eagerly. Use <code>ng-template bxTabContent</code> for lazy documentation, syntax highlighting or other work that should run only for the selected panel. Panel-local state is recreated when revisiting a lazy panel; keep persistent state in the consuming component or a service.</p>
<h2>Appearance</h2>
<p>Tabs use Blocks semantic colors, spacing, radius, focus and surface effects. The shared glass header remains transmissive, while the selected tab has a translucent tint and emits a restrained amount of its highlight color into nearby surfaces. The default highlight follows the primary palette role. Use <code>color=&quot;accent&quot;</code> for the second tone, such as supporting Code Examples navigation. The initial render uses the same glass styling before the runtime mounts, and transitions apply to later interactions. Appearance settings and reduced motion follow <code>ThemingService</code> and <code>BxA11yService</code>, like other primitives. Forced colors use a visible selected outline.</p>
<p><code>--bx-tabs-panel-gap</code> customizes the space below the headers. Panels follow the page&#39;s natural scroll flow by default. For a bounded viewer, set <code>--bx-tabs-panel-overflow: auto</code> together with <code>--bx-tabs-max-panel-height</code> or a constrained group height to keep headers visible while content scrolls. Let the panel own scrolling instead of also adding scroll containers to nested code blocks. Header labels scroll horizontally only when they exceed the available width; the glass decoration sits outside that scroll area.</p>
<h2>Keyboard and accessibility</h2>
<p>Tab enters the selected header; another Tab moves into its panel. Left and Right select and focus the next enabled header, wrapping at the ends and respecting right-to-left layout. Home and End select the first and last enabled tabs. Native Enter and Space activation also work.</p>
<p>Each header has <code>role=&quot;tab&quot;</code>, roving <code>tabindex</code>, <code>aria-selected</code> and a matching <code>aria-controls</code>. Panels use <code>role=&quot;tabpanel&quot;</code>, a matching <code>aria-labelledby</code>, and unique generated IDs. Nested groups maintain independent selection and keyboard handling.</p>
<h2>Playground</h2>
<p>Open <code>/components/tabs</code> for enabled and disabled tabs, dynamic selection, lazy content and both appearances. The modal and toast configurators also use Tabs for Documentation, Code Examples and source files.</p>
`,"projects/blocks/primitives/components/tag/README.md":`<h1>Tag</h1>
<p>Informational labels with semantic colors, tonal/filled/outlined variants, optional icons and counts, disabled presentation, and accessible tooltips. Tags do not imply a button or selection action.</p>
<h2>Import</h2>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">Tag</span>, <span class="hljs-title class_">ITagConfig</span>, <span class="hljs-title class_">TagColor</span>, <span class="hljs-title class_">TagVariant</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/primitives&#x27;</span>;</code></pre>
<h2>Usage</h2>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">bx-tag</span> [<span class="hljs-attr">text</span>]=<span class="hljs-string">&quot;{ key: &#x27;locations.skopje&#x27; }&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;accent&quot;</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;tonal&quot;</span>
  <span class="hljs-attr">leadingIcon</span>=<span class="hljs-string">&quot;map-pin&quot;</span> <span class="hljs-attr">trailingIcon</span>=<span class="hljs-string">&quot;chevron-right&quot;</span> [<span class="hljs-attr">trailingNumber</span>]=<span class="hljs-string">&quot;12&quot;</span>
  [<span class="hljs-attr">tooltip</span>]=<span class="hljs-string">&quot;{ key: &#x27;locations.description&#x27; }&quot;</span> /&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">bx-tag</span> [<span class="hljs-attr">leadingNumber</span>]=<span class="hljs-string">&quot;42&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;info&quot;</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;filled&quot;</span> <span class="hljs-attr">ariaLabel</span>=<span class="hljs-string">&quot;42 locations&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">bx-tag</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;Skopje&quot;</span> /&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">bx-tag</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;+2&quot;</span> <span class="hljs-attr">tooltip</span>=<span class="hljs-string">&quot;Ohrid, Bitola&quot;</span> /&gt;</span></code></pre>
<h2>API</h2>
<p><code>text</code>, <code>tooltip</code>, and <code>ariaLabel</code> accept <code>ResolvableText</code>. <code>color</code> selects primary, accent, success, danger, info, warn or neutral. <code>variant</code> is tonal (default), filled or outlined. <code>size</code> is small or medium. <code>disabled</code> changes the visual/accessible presentation without inventing an action.</p>
<p><code>leadingIcon</code>, <code>trailingIcon</code>, and <code>iconSize</code> configure decorative icons. <code>leadingNumber</code> and <code>trailingNumber</code> accept numbers, strings such as <code>+2</code>, or null to hide a count. Omit text for a number-only tag. Numeric values use <code>Intl.NumberFormat</code> with the optional <code>locale</code>; strings retain their prefixes.</p>
<p><code>config</code> accepts reusable <code>ITagConfig</code> appearance, icon, count and tooltip defaults. Direct inputs take precedence. <code>opaque</code> (also in <code>ITagConfig</code>) removes translucency and backdrop blur when true; false or absent follows application appearance and accessibility preferences. Navigation badges use it to keep their rows opaque. Consumer CSS variables can override the semantic palette without changing the component.</p>
<p>Without an explicit <code>tooltip</code>, a tag automatically shows its complete label only when its rendered text is truncated. Resizing, content/translation changes, and loaded fonts update this condition through the shared <a href="components/truncate">TruncateDirective</a>. An explicit tooltip still describes the tag even when its label fits, including overflow tags listing hidden selections. Set <code>[tooltipOnTruncate]=&quot;false&quot;</code> to retain truncation while supplying custom feedback. <code>ITagConfig.tooltipOnTruncate</code> provides the reusable default, with the direct input taking precedence. <code>tooltip=&quot;&quot;</code> also suppresses the automatic tooltip. The public <code>TruncateDirective</code>, <code>TruncatedTextPipe</code> (<code>bxTruncatedText</code>), and <code>truncatedText()</code> helper are available for application-owned text.</p>
<h2>Appearance</h2>
<p>Uses Blocks semantic theme colors and the shared glass surface. Tags inherit application glassiness, receive surrounding emitted light, and follow opaque/reduced-transparency preferences. They have no hover illumination or press effect because they are informational. Tooltip motion follows <code>BxA11yService</code>.</p>
<p>Text tags use small rounded corners. A single number without text or icons uses a circle that grows for longer counts. Override <code>--bx-tag-background</code>, <code>--bx-tag-color</code>, <code>--bx-tag-border</code>, <code>--bx-tag-radius</code>, <code>--bx-tag-padding</code>, <code>--bx-tag-gap</code>, <code>--bx-tag-font-size</code>, <code>--bx-tag-shadow</code>, <code>--bx-tag-counter-background</code>, <code>--bx-tag-counter-radius</code>, and <code>--bx-tag-disabled-opacity</code> as needed. <code>--bx-tag-number-size</code> and <code>--bx-tag-number-padding</code> configure number-only circles; <code>--bx-tag-fill-opacity</code> and <code>--bx-tag-outline-opacity</code> tune the variant tints. Forced colors retain a visible boundary.</p>
<h2>Accessibility and translations</h2>
<p>Visible text remains available to assistive technology; decorative icons are hidden. An explicit <code>ariaLabel</code> names the tag group when the visible numbers need context. Tooltip tags support hover, keyboard focus and touch-and-hold. <code>focusable</code> defaults to true for a tooltip-bearing standalone tag; set it false when a surrounding interactive control supplies keyboard access to the same description.</p>
<p>Text resolves through <code>BX_I18N</code>, tracks its optional version signal, and falls back to keys without an adapter. Plain text works directly.</p>
<h2>Selected values</h2>
<p>Select and multiselect support <code>selectionDisplay=&quot;tags&quot;</code>. <code>tagConfig</code> sets shared tag appearance, and option <code>tagConfig</code> provides per-value overrides. <code>visibleTagCount</code> defaults to one and is clamped to at least one. Remaining values become an overflow tag such as <code>+2</code>, with their translated names in its tooltip. <code>tagOverflowText</code> and <code>overflowTagConfig</code> customize that tag.</p>
<p>The parent combobox exposes the complete selection for keyboard users; embedded tags do not introduce nested tab stops or actions. Multiselect&#39;s <code>allSelectedText</code> still takes precedence when select-all intent is active.</p>
<h2>Playground</h2>
<p>Open <code>/components/tag</code> for configurable text, colors, variants, icons, both counters, number-only tags, disabled appearance, an English/Spanish/French/German translation dropdown, and resizable conditional tooltips. <code>/components/truncate</code> demonstrates the shared directive directly. <code>/components/multi-select</code> includes selected-tag mode, visible-tag limits, and a Skopje +2 style overflow example.</p>
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
<p>Appearance uses Blocks semantic colors, spacing, radius and motion tokens. Glass surfaces inherit the application configuration from <code>ThemingService</code>; adjusting glassiness updates existing components and overlays. Content-only parts share their containing surface instead of adding another backdrop filter.</p>
<p>Tooltips retain their neutral, opaque background while nearby emissive colors add a restrained, directional highlight to the facing border. The arrow shares the body&#39;s background and samples the lighting on its side of the bubble. Positioned tooltips receive light from their trigger&#39;s context, including inside dialogs, while remaining transparent to pointer events. The overview&#39;s wake-up hint and Bring home action include explanatory tooltips. The hint fades without changing the layout and appears only while the orb is asleep in its pod.</p>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { inject } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ThemingService</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/core&#x27;</span>;

<span class="hljs-keyword">private</span> <span class="hljs-keyword">readonly</span> theme = <span class="hljs-title function_">inject</span>(<span class="hljs-title class_">ThemingService</span>);

<span class="hljs-comment">// Application-wide, including open overlays.</span>
<span class="hljs-variable language_">this</span>.<span class="hljs-property">theme</span>.<span class="hljs-title function_">setAppearance</span>({ <span class="hljs-attr">glassiness</span>: <span class="hljs-number">0.5</span> });
<span class="hljs-comment">// Opaque presentation retains the same layout and component API.</span>
<span class="hljs-variable language_">this</span>.<span class="hljs-property">theme</span>.<span class="hljs-title function_">setAppearance</span>({ <span class="hljs-attr">reducedTransparency</span>: <span class="hljs-literal">true</span> });</code></pre>
<p><code>BxA11yService</code> controls reduced motion; reduced transparency and forced colors receive opaque presentation. Glass is decorative and does not replace labels, focus states, or semantic control states.</p>
<h2>Behavior and accessibility</h2>
<p>Do not put essential instructions only in a tooltip. Direct use requires the application to supply positioning, visibility and a relationship to its trigger. Prefer the directive for interactive pages.</p>
<h2>Playground</h2>
<p>Open <code>/components/tooltip</code> for a working example and its current value or action result.</p>
`,"projects/blocks/primitives/directives/context-menu/README.md":`<h1>Context menu</h1>
<p>A menu positioned at a context action\u2019s coordinates.</p>
<h2>Import</h2>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">BxOverlayContextDirective</span>, <span class="hljs-title class_">ContextMenuDirective</span>, <span class="hljs-title class_">Menu</span>, <span class="hljs-title class_">MenuItem</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/primitives&#x27;</span>;</code></pre>
<p>Add the standalone component or directive to your component&#39;s <code>imports</code>.</p>
<h2>Usage</h2>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> [<span class="hljs-attr">bxContextMenu</span>]=<span class="hljs-string">&quot;actions&quot;</span> <span class="hljs-attr">tabindex</span>=<span class="hljs-string">&quot;0&quot;</span>&gt;</span>Right-click or touch and hold here<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> #<span class="hljs-attr">actions</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">bx-menu</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">bx-menu-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Copy&quot;</span> (<span class="hljs-attr">action</span>)=<span class="hljs-string">&quot;copy()&quot;</span> /&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">bx-menu</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span></code></pre>
<h2>API</h2>
<p><code>bxContextMenu</code> requires a TemplateRef. <code>open(event: MouseEvent)</code> positions the menu at the event coordinates.</p>
<p><code>bxContextMenuLongPress</code> defaults to <code>true</code>. Set it to <code>false</code> on targets where native touch selection or another hold gesture should take precedence. Mouse and keyboard activation remain available.</p>
<h2>Overlay placement</h2>
<p>Menus use the normal application overlay layer by default. To let a menu escape a sticky header or another stacking context, provide a top-layer context on a wrapper or directly on the trigger:</p>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">header</span> [<span class="hljs-attr">bxOverlayContext</span>]=<span class="hljs-string">&quot;{ useTopLayer: true }&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> [<span class="hljs-attr">bxDropdown</span>]=<span class="hljs-string">&quot;actions&quot;</span>&gt;</span>Actions<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> [<span class="hljs-attr">bxContextMenu</span>]=<span class="hljs-string">&quot;actions&quot;</span>&gt;</span>More actions<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">header</span>&gt;</span></code></pre>
<p>Import <code>BxOverlayContextDirective</code> alongside the menu directive. The context applies only to nested menu triggers; menus elsewhere keep their normal stacking order. Angular components can also provide <code>BX_OVERLAY_CONTEXT</code> with <code>{ useTopLayer: true }</code> to scope the behavior to their view.</p>
<h2>Appearance</h2>
<p>The standard <code>bx-menu</code> container is opaque and uses Blocks colors, spacing, radius and elevation without container blur or live lighting. Row effects retain their application appearance settings.</p>
<p><code>BxA11yService</code> controls reduced motion; enabling it skips the opening and closing fade.</p>
<h2>Behavior and accessibility</h2>
<p>Touch and hold for 500 ms to open the menu. Moving more than 10 CSS pixels, scrolling, adding another finger, releasing early, or cancelling the pointer cancels the pending hold. Normal scrolling and pinch gestures are preserved. The release after a successful hold does not activate the target or a menu action, and a browser-generated context menu does not reopen the menu.</p>
<p>Long press follows touch input on devices with both touch and mouse support. Inputs, text areas, selects, editable content, disabled controls, and existing text selections keep their native touch behavior. Text selection is not disabled by the directive; dedicated non-selectable action targets can use <code>user-select: none</code> and <code>-webkit-touch-callout: none</code> in their own styles.</p>
<p>Always offer the same actions through a visible button or menu; a hold gesture is not easily discoverable. A focusable trigger also supports Shift + F10 and the Context Menu key. The playground includes a visible Open actions button and keyboard equivalent.</p>
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
<p><code>bxDropdown</code>: required TemplateRef. <code>placement</code>: overlay placement. <code>bxTransition</code>: fade (default) or none; emerge remains a compatibility alias for fade. Export as <code>bxDropdown</code>; call <code>open()</code>, <code>close()</code>, or <code>toggle()</code>. Read <code>isOpen()</code> and <code>state()</code> for lifecycle.</p>
<h2>Overlay placement</h2>
<p>Menus use the normal application overlay layer by default. To let a menu escape a sticky header or another stacking context, provide a top-layer context on a wrapper or directly on the trigger:</p>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">header</span> [<span class="hljs-attr">bxOverlayContext</span>]=<span class="hljs-string">&quot;{ useTopLayer: true }&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> [<span class="hljs-attr">bxDropdown</span>]=<span class="hljs-string">&quot;actions&quot;</span>&gt;</span>Actions<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">header</span>&gt;</span></code></pre>
<p>Import <code>BxOverlayContextDirective</code> alongside the menu directive. The context applies only to nested menu triggers; menus elsewhere keep their normal stacking order. Angular components can also provide <code>BX_OVERLAY_CONTEXT</code> with <code>{ useTopLayer: true }</code> to scope the behavior to their view.</p>
<p>Where supported, native CSS anchors keep the menu attached to its trigger during document and nested scrolling. Other browsers use the CDK positioning fallback.</p>
<h2>Appearance</h2>
<p>The standard <code>bx-menu</code> container is opaque and uses Blocks colors, spacing, radius and elevation without container blur or live lighting. Trigger and row effects retain their application appearance settings.</p>
<p><code>BxA11yService</code> controls reduced motion; enabling it skips the opening and closing fade.</p>
<h2>Behavior and accessibility</h2>
<p>Use a real button trigger. The fade interaction supports trigger arrow keys, menu arrows, Home, End and Escape; focus returns on dismissal. Reduced motion skips the fade. Content keeps its full dimensions and the overlay retains a solid backing throughout its lifetime.</p>
<h2>Playground</h2>
<p>Open <code>/components/dropdown</code> for a working example and its current value or action result.</p>
`,"projects/blocks/primitives/directives/menu-trigger/README.md":`<h1>Nested menu trigger</h1>
<p><code>MenuTriggerDirective</code> opens a <code>bx-menu</code> template using Blocks&#39; overlay positioning and theme inheritance. Use it for arbitrary-depth opaque submenus; each descendant receives the containing trigger through <code>menuParent</code>.</p>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">Menu</span>, <span class="hljs-title class_">MenuItem</span>, <span class="hljs-title class_">MenuTriggerDirective</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/primitives&#x27;</span>;</code></pre>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">button</span> [<span class="hljs-attr">bxMenuTrigger</span>]=<span class="hljs-string">&quot;menu&quot;</span> <span class="hljs-attr">menuLabel</span>=<span class="hljs-string">&quot;Projects&quot;</span> #<span class="hljs-attr">projects</span>=<span class="hljs-string">&quot;bxMenuTrigger&quot;</span>&gt;</span>Projects<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> #<span class="hljs-attr">menu</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">bx-menu</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">bx-menu-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Overview&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">role</span>=<span class="hljs-string">&quot;menuitem&quot;</span> [<span class="hljs-attr">bxMenuTrigger</span>]=<span class="hljs-string">&quot;children&quot;</span> [<span class="hljs-attr">menuParent</span>]=<span class="hljs-string">&quot;projects&quot;</span> <span class="hljs-attr">menuLabel</span>=<span class="hljs-string">&quot;Design&quot;</span>&gt;</span>Design<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">bx-menu</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> #<span class="hljs-attr">children</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">bx-menu</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">bx-menu-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Tokens&quot;</span> /&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">bx-menu</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span></code></pre>
<p><code>bxMenuTrigger</code> is required. Optional inputs are <code>menuOrigin</code> (the full row when the trigger is a separate disclosure), <code>menuParent</code>, physical <code>menuSide</code> (<code>right</code> by default), <code>menuHover</code> (true), <code>menuManual</code> (false), <code>menuLabel</code> (trigger label fallback), and <code>menuPinned</code> (false; keeps a search-revealed path open during pointer movement). <code>menuOpened</code>/<code>menuClosed</code> report transitions. <code>isOpen()</code>, <code>open(focus?, origin?)</code>, <code>close(restoreFocus?)</code> and <code>toggle(event)</code> expose explicit controls. Selection owners call <code>MenuCascadeService.closeAll()</code> after activating an action; this preserves parent disclosure clicks in recursive menus.</p>
<p>Native trigger semantics supply Enter/Space. Arrow towards the menu and Up/Down open it with focus. Up/Down/Home/End navigate within an open menu; Escape/opposite arrow dismiss one layer, and Tab is trapped inside its surface. Click outside dismisses the entire path, including search-pinned menus. Hover close has a short pointer-crossing delay and retains focused descendants. Cascades reuse the shared origin tracker&#39;s native CSS anchoring, refreshing dependent descendants on geometry changes and using measured positions only as a fallback. Clipped or offscreen origins close their branch. Overlays, traps, listeners, subscriptions, and timers are cleaned up on destruction. The trigger honors <code>bxOverlayContext</code> for top-layer positioning, as dropdowns and context menus do; origins inside dialogs and existing top-layer overlays retain that context. Opening another branch closes siblings, and nested menus inherit live theme state. Surfaces use the ordinary opaque <code>bx-menu</code> appearance, without added motion or glass effects.</p>
<p>The side-navigation demo at <code>/components/side-nav</code> demonstrates nested hover, keyboard, and search-driven opening. Menu width and scroll constraints belong to the owner; the side-nav exposes <code>--bx-side-nav-menu-width</code>.</p>
<p><code>bx-menu</code> accepts <code>--bx-menu-min-width</code> (default <code>12rem</code>). Constrained submenu owners set it to <code>0</code>, use border-box sizing, and reserve their vertical scrollbar gutter.</p>
<p><code>menuManual: true</code> lets an owner coordinate one overlay for several disclosure controls. Automatic click, pointer, and trigger-key handling and the directive&#39;s host ARIA attributes are omitted; the owner supplies its visible controls and accessible semantics and calls <code>open()</code>/<code>close()</code>. <code>open(focus?, origin?)</code> optionally supplies the actual positioning origin for that opening, defaulting to <code>menuOrigin</code> and then the host. Overlay keyboard dismissal, focus trapping, outside-click handling, theme inheritance, and origin tracking remain shared. Side navigation uses this mode for its single adjacent panel.</p>
<p><code>menuPlacement</code> optionally selects the existing dropdown placement strategy (<code>top</code>, <code>bottom</code>, <code>left</code>, or <code>right</code>). Omitting it retains physical side-aligned submenu positioning. <code>TopNav</code> uses <code>bottom</code> for its one panel while <code>SideNav</code> retains its side placement. The shared tracker, top-layer context, focus handling, outside-click dismissal, and clipping behavior are unchanged.</p>
<p><code>navigateMenuKey(event, menu, options?)</code> also accepts <code>IMenuKeyboardOptions</code>: vertical Up/Down navigation remains the default; horizontal orientation uses Left/Right with optional RTL direction and a roving tab stop. This supports the top navigation menubar without introducing a separate keyboard implementation.</p>
<p><code>menuClosing</code> fires before DOM detachment (after the overlay enters its closing path), allowing owners to retain current scroll/focus context. <code>menuClosed</code> still fires after cleanup.</p>
`,"projects/blocks/primitives/directives/tooltip/README.md":`<h1>Tooltip trigger</h1>
<p>Connects a help surface to a trigger using the overlay positioning system.</p>
<h2>Import</h2>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">TooltipDirective</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/primitives&#x27;</span>;</code></pre>
<p>Add the standalone component or directive to your component&#39;s <code>imports</code>.</p>
<h2>Usage</h2>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">bx-button</span> <span class="hljs-attr">bxTooltip</span>=<span class="hljs-string">&quot;Saves this project&quot;</span> <span class="hljs-attr">placement</span>=<span class="hljs-string">&quot;top&quot;</span>&gt;</span>Save<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span></code></pre>
<h2>API</h2>
<p><code>bxTooltip</code>: required text or translation key. <code>placement</code>: top, bottom, left, right, and supported aligned placements. <code>show()</code> and <code>hide()</code> expose explicit lifecycle control.</p>
<p>Changing the text updates an open tooltip. Empty text dismisses it; restoring text while hovered or keyboard-focused reveals it again. This supports labels that only need a tooltip while truncated.</p>
<p>Use the shared <a href="components/truncate">TruncateDirective</a> for ellipsis and reactive truncation detection instead of duplicating element-size observers. Pass <code>resolvedText | bxTruncatedText: overflow.truncated()</code> to <code>bxTooltip</code> using the public <code>TruncatedTextPipe</code>; the owner supplies an appropriate focus target and visible focus styling.</p>
<p><code>bxTooltipHover</code> defaults to <code>true</code>. Set it to <code>false</code> to keep the keyboard description while nested content supplies its own pointer tooltip, such as an overflow tag within a select trigger.</p>
<p><code>bxTooltipTouch</code> defaults to <code>&#39;none&#39;</code>: normal touch taps activate the control without showing its tooltip. Set it to <code>&#39;longpress&#39;</code> for an optional touch-and-hold hint, or <code>&#39;tap&#39;</code> on a dedicated information button that has no other action.</p>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;button&quot;</span> <span class="hljs-attr">bxTooltip</span>=<span class="hljs-string">&quot;Appearance settings apply to all components&quot;</span> <span class="hljs-attr">bxTooltipTouch</span>=<span class="hljs-string">&quot;tap&quot;</span> <span class="hljs-attr">aria-label</span>=<span class="hljs-string">&quot;More information&quot;</span>&gt;</span>\u24D8<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;button&quot;</span> <span class="hljs-attr">bxTooltip</span>=<span class="hljs-string">&quot;Optional extra context&quot;</span> <span class="hljs-attr">bxTooltipTouch</span>=<span class="hljs-string">&quot;longpress&quot;</span>&gt;</span>Hold for a hint<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span></code></pre>
<h2>Appearance</h2>
<p>Appearance uses Blocks semantic colors, spacing, radius and motion tokens. Glass surfaces inherit the application configuration from <code>ThemingService</code>; adjusting glassiness updates existing components and overlays. Content-only parts share their containing surface instead of adding another backdrop filter.</p>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { inject } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ThemingService</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/core&#x27;</span>;

<span class="hljs-keyword">private</span> <span class="hljs-keyword">readonly</span> theme = <span class="hljs-title function_">inject</span>(<span class="hljs-title class_">ThemingService</span>);

<span class="hljs-comment">// Application-wide, including open overlays.</span>
<span class="hljs-variable language_">this</span>.<span class="hljs-property">theme</span>.<span class="hljs-title function_">setAppearance</span>({ <span class="hljs-attr">glassiness</span>: <span class="hljs-number">0.5</span> });
<span class="hljs-comment">// Opaque presentation retains the same layout and component API.</span>
<span class="hljs-variable language_">this</span>.<span class="hljs-property">theme</span>.<span class="hljs-title function_">setAppearance</span>({ <span class="hljs-attr">reducedTransparency</span>: <span class="hljs-literal">true</span> });</code></pre>
<p><code>BxA11yService</code> controls reduced motion; reduced transparency and forced colors receive opaque presentation. Glass is decorative and does not replace labels, focus states, or semantic control states.</p>
<h2>Behavior and accessibility</h2>
<p>Keep trigger text meaningful without its tooltip. Use short, non-interactive text; put interactive help in a menu or dialog.</p>
<p>Tooltips open on mouse hover and keyboard focus. Touch focus and compatibility mouse events do not show ordinary tooltips. Screen-reader descriptions remain available while the visual tooltip is hidden, and existing <code>aria-describedby</code> references are preserved. Supply an accessible label independently for icon-only controls.</p>
<p>Optional long press opens after 500 ms. Moving more than 10 CSS pixels, scrolling, another finger, cancellation, or releasing early cancels it. Releasing after a successful hold does not click the control; the hint dismisses after 1.5 seconds, or on another press or scrolling. Editable controls and existing text selections keep their native behavior. For dedicated non-selectable hold targets, apply <code>user-select: none</code> and <code>-webkit-touch-callout: none</code> in the target&#39;s styles.</p>
<p>Long-press hints yield to a <code>bxContextMenu</code> directive on the trigger or an ancestor. Dedicated tap help remains available. Avoid assigning multiple hold gestures to one target.</p>
<p>Tap mode is intended for dedicated help buttons, including the built-in form-field information buttons. Tap again, tap elsewhere, scroll, or press Escape to dismiss the help. Use a separate popover or dialog for interactive or essential explanations rather than hiding them in a tooltip.</p>
<h2>Playground</h2>
<p>Open <code>/components/tooltip-directive</code> for a working example and its current value or action result.</p>
`,"projects/blocks/primitives/directives/truncate/README.md":`<h1>Truncated text</h1>
<p>Shared single-line ellipsis styling, reactive overflow detection, and conditional text selection. <code>TruncateDirective</code> measures the rendered element. <code>TruncatedTextPipe</code> and <code>truncatedText()</code> use that measured state for tooltips or application-owned feedback. The pure pipe does not poll the DOM or own observers.</p>
<h2>Import</h2>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">TruncateDirective</span>, <span class="hljs-title class_">TruncatedTextPipe</span>, <span class="hljs-title class_">TooltipDirective</span>, truncatedText } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/primitives&#x27;</span>;</code></pre>
<p>Add the standalone directive, pipe, and tooltip directive to the component&#39;s <code>imports</code> when composing a conditional tooltip. Include Blocks&#39; established <code>core/styles/index</code> global entry once; it supplies the shared <code>.bx-truncate</code> utility used by the directive.</p>
<h2>Usage</h2>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;label-container&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">bxTruncate</span> #<span class="hljs-attr">overflow</span>=<span class="hljs-string">&quot;bxTruncate&quot;</span>
      [<span class="hljs-attr">bxTooltip</span>]=<span class="hljs-string">&quot;label() | bxTruncatedText: overflow.truncated()&quot;</span>
      [<span class="hljs-attr">attr.tabindex</span>]=<span class="hljs-string">&quot;overflow.truncated() ? 0 : null&quot;</span>
      <span class="hljs-attr">bxTooltipTouch</span>=<span class="hljs-string">&quot;longpress&quot;</span> <span class="hljs-attr">placement</span>=<span class="hljs-string">&quot;top&quot;</span>&gt;</span>{{ label() }}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
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
<span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">bxTruncate</span> #<span class="hljs-attr">overflow</span>=<span class="hljs-string">&quot;bxTruncate&quot;</span>
    [<span class="hljs-attr">bxTooltip</span>]=<span class="hljs-string">&quot;label() | bxTruncatedText: overflow.truncated(): automaticTooltips()&quot;</span>&gt;</span>{{ label() }}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span></code></pre>
<p><code>bxTruncatedText</code> accepts text, the measured boolean, and an optional enabled boolean (default true). It returns the original string or translation-key object when both booleans are true, otherwise an empty string. Null and undefined text become empty strings. It preserves <code>ResolvableText</code> for the existing translation adapter.</p>
<p>The exported <code>truncatedText(text, truncated, enabled = true)</code> helper provides the same behavior in TypeScript. Read the directive signals directly when custom behavior is more useful:</p>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { computed, signal, viewChild } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">TruncateDirective</span>, truncatedText } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/primitives&#x27;</span>;

<span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> overflow = <span class="hljs-title function_">viewChild</span>(<span class="hljs-title class_">TruncateDirective</span>);
<span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> label = <span class="hljs-title function_">signal</span>(<span class="hljs-string">&#x27;A long label&#x27;</span>);
<span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> automaticTooltips = <span class="hljs-title function_">signal</span>(<span class="hljs-literal">true</span>);
<span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> customFeedback = <span class="hljs-title function_">computed</span>(<span class="hljs-function">() =&gt;</span>
  <span class="hljs-title function_">truncatedText</span>(<span class="hljs-variable language_">this</span>.<span class="hljs-title function_">label</span>(), <span class="hljs-variable language_">this</span>.<span class="hljs-title function_">overflow</span>()?.<span class="hljs-title function_">truncated</span>() ?? <span class="hljs-literal">false</span>, <span class="hljs-variable language_">this</span>.<span class="hljs-title function_">automaticTooltips</span>())
);</code></pre>
<p>The pipe is pure: pass the current <code>truncated()</code> boolean rather than an element or directive object. This lets Angular update its result when measurement changes.</p>
<h3>Disable automatic tooltips without disabling truncation</h3>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">bx-tag</span> [<span class="hljs-attr">text</span>]=<span class="hljs-string">&quot;label()&quot;</span> [<span class="hljs-attr">tooltipOnTruncate</span>]=<span class="hljs-string">&quot;false&quot;</span> <span class="hljs-attr">tooltip</span>=<span class="hljs-string">&quot;My application description&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">bx-menu-item</span> [<span class="hljs-attr">label</span>]=<span class="hljs-string">&quot;label()&quot;</span> [<span class="hljs-attr">tooltipOnTruncate</span>]=<span class="hljs-string">&quot;false&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">bx-input-field</span> [<span class="hljs-attr">label</span>]=<span class="hljs-string">&quot;label()&quot;</span> [<span class="hljs-attr">tooltipOnTruncate</span>]=<span class="hljs-string">&quot;false&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">bx-search-input</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;label()&quot;</span> [<span class="hljs-attr">tooltipOnTruncate</span>]=<span class="hljs-string">&quot;false&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">bx-select</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Location&quot;</span> [<span class="hljs-attr">options</span>]=<span class="hljs-string">&quot;options()&quot;</span> [<span class="hljs-attr">tooltipOnTruncate</span>]=<span class="hljs-string">&quot;false&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">bx-multi-select</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Locations&quot;</span> [<span class="hljs-attr">options</span>]=<span class="hljs-string">&quot;options()&quot;</span> [<span class="hljs-attr">tooltipOnTruncate</span>]=<span class="hljs-string">&quot;false&quot;</span> /&gt;</span></code></pre>
<p><code>tooltipOnTruncate</code> defaults to true. False suppresses the component&#39;s automatic ellipsis tooltip while retaining ellipsis and measurement, so an application can attach its own tooltip. Explicit tag tooltip descriptions and overflow-tag lists are independent; they retain their existing contract. <code>ITagConfig.tooltipOnTruncate</code> supplies a reusable tag default, and a direct tag input takes precedence.</p>
<p>Forms resolve the instance input, then shared application settings, then true:</p>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { inject } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">FormSettingsService</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/forms&#x27;</span>;

<span class="hljs-keyword">private</span> <span class="hljs-keyword">readonly</span> formSettings = <span class="hljs-title function_">inject</span>(<span class="hljs-title class_">FormSettingsService</span>);

<span class="hljs-comment">// For example, in application initialization:</span>
<span class="hljs-variable language_">this</span>.<span class="hljs-property">formSettings</span>.<span class="hljs-title function_">update</span>({ <span class="hljs-attr">tooltipOnTruncate</span>: <span class="hljs-literal">false</span> });</code></pre>
<p><code>[bxTruncate]=&quot;false&quot;</code> is a separate choice: it disables ellipsis itself on a custom text element. <code>tooltipOnTruncate</code> only disables automatic tooltips on an owning component.</p>
<h2>Appearance and customization</h2>
<p>The directive supplies ellipsis mechanics rather than a theme or a tooltip. Keep widths, typography, colors, borders, and focus styling on the owning control or container using Blocks tokens. Apply it to the text element rather than a wrapper containing icons, counters, or actions. The shared <code>truncate-text</code> Sass mixin is available through <code>core/styles/helpers</code> for stylesheet-only integrations; the directive and existing components use that same utility.</p>
<p>All existing library ellipsis sites use the shared implementation: tag labels, menu-item content, floating input labels, search values/placeholders, select/multiselect captions and values, and multiselect&#39;s full-selection measurement. Menu <code>wrapLabel</code> disables ellipsis through the same directive. The appearance preview&#39;s clipped status text also uses it. Custom select trigger templates keep application-owned presentation.</p>
<h2>Behavior and accessibility</h2>
<p>Resize and content observers, Angular render callbacks, viewport changes, and font loading refresh measurement. Checks are coalesced into animation frames. Observers, listeners, and pending frames are cleaned up on destruction; asynchronous font completion is guarded. Browser measurement starts after rendering.</p>
<p>Native single-line input values are measured with their current font and inline padding, since their rendered values are not DOM text nodes. Regular text uses its content-box overflow metrics. Full-selection summary measurement uses a constrained, visually hidden copy of the text and the same directive.</p>
<p>The complete text stays in the DOM for assistive technology. The directive does not add focusability, roles, action semantics, or text of its own. The owner provides keyboard access and a visible focus indicator when a tooltip needs an independent focus target. Use the existing <code>TooltipDirective</code> for hover, keyboard focus, touch-and-hold, overlay theming, positioning, and reduced-motion behavior. Passing an empty tooltip while text fits also removes its description and dismisses an open tooltip.</p>
<p>Translation stays in the caller: resolve <code>ResolvableText</code> through <code>BX_I18N</code> in a computation that reads the adapter&#39;s version, then render and pass that same resolved string to the tooltip. Rendered language changes trigger new measurements.</p>
<h2>Playground</h2>
<p>Open <code>/components/truncate</code> for the short pipe example, helper/custom logic, application defaults, opt-out examples, and interactive previews across tags, menus, input fields, search, select and multiselect. Edit text, adjust width, enlarge typography, disable automatic tooltips, or supply a custom tag/text tooltip. <code>/components/tag</code> includes the same demo alongside tag customization.</p>
<p>Previews use an aligned responsive card grid. Width changes affect each example inside its card; preview areas and caption space stay reserved. Wrapped content scrolls inside its preview rather than moving later examples.</p>
`,"projects/blocks/toastr/components/README.md":`<h1>Toast core</h1>
<p>The toast lifecycle host with progress, dismissal and content composition.</p>
<h2>Import</h2>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">ToastCore</span>, <span class="hljs-title class_">ToastrService</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/toastr&#x27;</span>;</code></pre>
<p>Add the standalone component or directive to your component&#39;s <code>imports</code>.</p>
<h2>Usage</h2>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">bx-button</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;notify()&quot;</span>&gt;</span>Show notification<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span></code></pre>
<h2>API</h2>
<p>Use <code>ToastrService.queueToast(ContentComponent, config)</code> for custom content, or queueInfo, queueSuccess, queueWarning and queueDanger for common messages. Config controls position, durationInMs, progress and close actions.</p>
<h2>Appearance</h2>
<p>Appearance uses Blocks semantic colors, spacing, radius and motion tokens. Glass surfaces inherit the application configuration from <code>ThemingService</code>; adjusting glassiness updates existing components and overlays. Content-only parts share their containing surface instead of adding another backdrop filter.</p>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { inject } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ThemingService</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/core&#x27;</span>;

<span class="hljs-keyword">private</span> <span class="hljs-keyword">readonly</span> theme = <span class="hljs-title function_">inject</span>(<span class="hljs-title class_">ThemingService</span>);

<span class="hljs-comment">// Application-wide, including open overlays.</span>
<span class="hljs-variable language_">this</span>.<span class="hljs-property">theme</span>.<span class="hljs-title function_">setAppearance</span>({ <span class="hljs-attr">glassiness</span>: <span class="hljs-number">0.5</span> });
<span class="hljs-comment">// Opaque presentation retains the same layout and component API.</span>
<span class="hljs-variable language_">this</span>.<span class="hljs-property">theme</span>.<span class="hljs-title function_">setAppearance</span>({ <span class="hljs-attr">reducedTransparency</span>: <span class="hljs-literal">true</span> });</code></pre>
<p><code>BxA11yService</code> controls reduced motion; reduced transparency and forced colors receive opaque presentation. Glass is decorative and does not replace labels, focus states, or semantic control states.</p>
<h2>Behavior and accessibility</h2>
<p>Create notifications through the service; the wrapper owns timers, pause/resume and cleanup. Keep important information available outside transient messages. The playground\u2019s toast page can show all four semantic intents.</p>
<h2>Playground</h2>
<p>Open <code>/components/toast-core</code> for a working example and its current value or action result.</p>
`,"projects/blocks/toastr/components/views/simple-toast/README.md":`<h1>Simple toast</h1>
<p>A notification with a semantic icon, optional title and message.</p>
<h2>Import</h2>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">SimpleToast</span>, <span class="hljs-title class_">ToastrService</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/toastr&#x27;</span>;</code></pre>
<p>Add the standalone component or directive to your component&#39;s <code>imports</code>.</p>
<h2>Usage</h2>
<pre class="playground-code-block" tabindex="0" aria-label="html code example"><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">bx-button</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;notify()&quot;</span>&gt;</span>Show success<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span></code></pre>
<h2>API</h2>
<p>Use <code>toastr.queueSuccess({ title: &quot;Saved&quot;, message: &quot;Your settings are up to date.&quot; })</code>. Equivalent methods queueInfo, queueWarning and queueDanger set the semantic intent. Request fields include position, durationInMs, animate, showCloseButton and showProgessBar (existing API spelling).</p>
<h2>Appearance</h2>
<p>Appearance uses Blocks semantic colors, spacing, radius and motion tokens. Glass surfaces inherit the application configuration from <code>ThemingService</code>; adjusting glassiness updates existing components and overlays. Content-only parts share their containing surface instead of adding another backdrop filter.</p>
<pre class="playground-code-block" tabindex="0" aria-label="ts code example"><code class="hljs language-ts"><span class="hljs-keyword">import</span> { inject } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ThemingService</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@filip.mazev/blocks/core&#x27;</span>;

<span class="hljs-keyword">private</span> <span class="hljs-keyword">readonly</span> theme = <span class="hljs-title function_">inject</span>(<span class="hljs-title class_">ThemingService</span>);

<span class="hljs-comment">// Application-wide, including open overlays.</span>
<span class="hljs-variable language_">this</span>.<span class="hljs-property">theme</span>.<span class="hljs-title function_">setAppearance</span>({ <span class="hljs-attr">glassiness</span>: <span class="hljs-number">0.5</span> });
<span class="hljs-comment">// Opaque presentation retains the same layout and component API.</span>
<span class="hljs-variable language_">this</span>.<span class="hljs-property">theme</span>.<span class="hljs-title function_">setAppearance</span>({ <span class="hljs-attr">reducedTransparency</span>: <span class="hljs-literal">true</span> });</code></pre>
<p><code>BxA11yService</code> controls reduced motion; reduced transparency and forced colors receive opaque presentation. Glass is decorative and does not replace labels, focus states, or semantic control states.</p>
<h2>Behavior and accessibility</h2>
<p>Write a concise message with a clear outcome. Use a modal or an inline message when acknowledgement or a long interaction is required. Simple toast content shares the parent toast glass surface.</p>
<h2>Playground</h2>
<p>Open <code>/components/simple-toast</code> for a working example and its current value or action result.</p>
`};var k={"assets/modal-readme/README.md":`documentation/modal/README.md`,"assets/toastr-readme/README.md":`documentation/toastr/README.md`,"assets/blocks-core-readme/README.md":`documentation/core/README.md`,"assets/core-readme/README.md":`documentation/core/README.md`};var q={"assets/code-snippets/modal/confirm-close-modal.html.txt":`<div>
    {{ data }}
</div>

<div class="button-container" *appModalFooter>
    <button bx-button (click)="confirm()" variant="filled" color="success">Confirm</button>
    <button bx-button (click)="close()" variant="filled" color="danger">Cancel</button>
</div>`,"assets/code-snippets/modal/confirm-close-modal.scss.txt":`.button-container {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    gap: 1rem;

    & button {
        cursor: pointer;
    }
}
`,"assets/code-snippets/modal/confirm-close-modal.ts.txt":`import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Button } from '@filip.mazev/blocks/forms';
import { Modal } from '@filip.mazev/blocks/modal';
import { ModalFooterDirective } from '@filip.mazev/blocks/modal';

@Component({
  selector: 'app-confirm-close',
  imports: [ModalFooterDirective, Button],
  templateUrl: './confirm-close.html',
  changeDetection: ChangeDetectionStrategy.Eager,
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
  private readonly modals = inject(ModalService);
  protected readonly status = signal('');

  protected open(): void {
    const ref = this.modals.open<IDemoModalData, IDemoModalResult>(DemoModal, {
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

<div class="demo-modal-content-class" [ngClass]="{
    'side-modal': isSideModal(), 
    'center-modal': isCenteredModal() }">
    <div>
        {{ data.body }}
    </div>
    <section class="modal-menu-demo" aria-label="Menus inside this modal">
        <h3>Menus inside the modal</h3>
        <button bx-button type="button" variant="tonal" color="primary" [bxDropdown]="dropdownActions" placement="bottom">
            Open actions<bx-icon name="chevron-down" size="16" />
        </button>
        <button bx-button type="button" variant="tonal" color="grayscale" [bxContextMenu]="contextActions" class="modal-context-target">
            <bx-icon name="mouse-pointer-2" size="16" />Right-click or hold for more actions
        </button>
        <p class="menu-hint">On touch screens, touch and hold for more actions. With a keyboard, focus the example and press Shift + F10. Escape closes the menu first.</p>
        <p class="menu-status" role="status">{{ menuStatus() }}</p>
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

<div class="button-container" *appModalFooter>
    <button bx-button (click)="confirm()" variant="filled" color="success">Confirm</button>
    <button bx-button (click)="close()" variant="filled" color="danger">Cancel</button>
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

.modal-menu-demo {
    display: grid;
    justify-items: start;
    gap: spacing(3);
    padding-top: spacing(4);
    border-top: 1px solid var(--bx-border-default);
}

.modal-menu-demo h3,
.modal-menu-demo p {
    margin: 0;
}

.modal-context-target {
    border-style: dashed;
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
`,"assets/code-snippets/modal/modal.ts.txt":`import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { IDemoModalData } from '@playground/interfaces/modals/data/idemo-modal-data.interface';
import { IDemoModalResult } from '@playground/interfaces/modals/result/idemo-modal-result.interface';
import { NgClass } from '@angular/common';
import { ModalHeaderDirective } from '@filip.mazev/blocks/modal';
import { ModalFooterDirective } from '@filip.mazev/blocks/modal';
import { Modal } from '@filip.mazev/blocks/modal';
import { Button } from '@filip.mazev/blocks/forms';
import { ContextMenuDirective, DropdownDirective, Menu, MenuItem } from '@filip.mazev/blocks/primitives';
import { Icon } from '@filip.mazev/blocks/icons';

@Component({
  selector: 'app-demo-modal',
  imports: [ModalHeaderDirective, ModalFooterDirective, NgClass, Button, ContextMenuDirective, DropdownDirective, Menu, MenuItem, Icon],
  templateUrl: './demo-modal.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './demo-modal.scss'
})
export class DemoModal extends Modal<IDemoModalData, IDemoModalResult> {
  protected readonly menuStatus = signal('Try either menu. Actions keep this modal open.');

  protected isSideModal = signal(false);
  protected isCenteredModal = signal(false);

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
</div>`,"assets/code-snippets/toastr/demo-toast.scss.txt":`@use '@filip.mazev/blocks/core/styles/helpers' as *;

// The ToastCore owns the material. Keep projected toast content transparent.
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
`,"assets/code-snippets/toastr/demo-toast.ts.txt":`import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IDemoToastData } from '@playground/interfaces/toasts/data/idemo-toast-data.interface';
import { IDemoToastResult } from '@playground/interfaces/toasts/result/idemo-toast-result.interface';
import { Toast } from '@filip.mazev/blocks/toastr';

@Component({
  selector: 'app-demo-toast',
  templateUrl: './demo-toast.html',
  changeDetection: ChangeDetectionStrategy.Eager,
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
  private readonly toastr = inject(ToastrService);

  protected showToast(): void {
    this.toastr.queueToast<IDemoToastData, IDemoToastResult, DemoToast>(DemoToast, {
      position: 'top-right',
      durationInMs: 5000,
      animate: true,
      hasDefaultBackground: true,
      data: { title: 'Saved', message: 'Your preferences have been saved.', openedCount: 0 }
    });
    // For an intent-styled notification, use:
    // this.toastr.queueSuccess({ title: 'Saved', message: 'Your preferences have been saved.' });
  }
}
`};var w=class c{document=f(z);router=f(Qn);readmeContent=y(()=>{let e=this.path().replace(/^\/+/,``);return x[k[e]??e]??`<p>This documentation page is unavailable. Run npm run tools:build-docs after adding a README.</p>`});path=g.required();navigateDocumentation(e){if(e.defaultPrevented||e.button!==0||e.ctrlKey||e.metaKey||e.shiftKey||e.altKey)return;let s=e.target?.closest?.(`a[href]`);if(!s||s.hasAttribute(`download`)||s.target&&s.target!==`_self`)return;let n=new URL(s.href,this.document.baseURI),t=new URL(`.`,this.document.baseURI);if(n.origin!==t.origin||!n.pathname.startsWith(t.pathname))return;let i=n.pathname.slice(t.pathname.length);/^(?:home|glass|components(?:\/[^/?#]+)?|modal|toastr|icon-catalog)\/?$/.test(i)&&(e.preventDefault(),this.router.navigateByUrl(`/${i}${n.search}${n.hash}`))}static ɵfac=function(a){return new(a||c)};static ɵcmp=se({type:c,selectors:[[`app-readme`]],hostBindings:function(a,s){a&1&&Ce(`click`,function(t){return s.navigateDocumentation(t)})},inputs:{path:[1,`path`]},decls:5,vars:1,consts:[[1,`readme-container`],[1,`readme-header`],[1,`readme-content`,3,`innerHTML`]],template:function(a,s){a&1&&(ds(0,`div`,0)(1,`div`,1)(2,`span`),Ve(3,`Documentation`),fs()(),qn(4,`article`,2),fs()),a&2&&(M(4),ps(`innerHTML`,s.readmeContent(),fm))},styles:[`
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
}`]})};export{w as n,q as t};