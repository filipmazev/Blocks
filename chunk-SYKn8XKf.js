import{$n as sh,A as Ht,B as Kn,Mn as nc,Nt as Zn,Xn as re,Zt as ec,b as FA,f as CC,nr as tc,s as B,tt as Q,un as hs,zn as p}from"./chunk-BTQvnuSt.js";var x={"documentation/appearance/README.md":`<h1>Blocks appearance</h1>
<p>Glass is integrated into Blocks components and its existing theme engine. Surface colors, text, borders, radii and elevation come from Blocks tokens. Icons, labels, validation messages and other structural content inherit their containing surface instead of adding redundant blurred boxes.</p>
<p>The <code>@filip.mazev/blocks/effects/runtime</code> entry point shipped inside Blocks provides the same material and motion primitives without Angular, CDK or RxJS.</p>
<h2>Run and build</h2>
<p>Use an Angular 22 compatible Node version (22.22.3+, 24.15+, or 26+):</p>
<pre><code class="language-sh">npm ci
npm start
</code></pre>
<p>Open <a href="http://localhost:8080">http://localhost:8080</a>. The component catalogue links each component to its own demonstration and README. <code>/appearance</code> provides application-wide material controls and spatial-lighting and fade demonstrations. <code>/icon-catalog</code> provides searchable, paginated icons.</p>
<pre><code class="language-sh">npm run build:playground
npm run build:blocks
</code></pre>
<p>Documentation is generated automatically before serving/building the playground. After editing a README while the development server is already running, run <code>npm run tools:build-docs</code> to regenerate its bundled content. Runtime documentation does not fetch Markdown files.</p>
<p>Keep Angular packages, CLI, builder and ng-packagr on major 22 with TypeScript 6. The checked-in lockfile preserves compatible versions. Runtime Markdown and Mermaid dependencies are no longer needed by the playground. Do not mix Angular 21 tooling with Angular 22.</p>
<h2>Global configuration through Blocks</h2>
<pre><code class="language-ts">import { inject } from &#39;@angular/core&#39;;
import { ThemingService } from &#39;@filip.mazev/blocks/core&#39;;

export class Settings {
  readonly theme = inject(ThemingService);

  setAppearance() {
    this.theme.setAppearance({
      material: &#39;glass&#39;,
      blur: 10,
      tint: 0.5,
      quality: &#39;auto&#39;,
    });
  }
}
</code></pre>
<p>There is no global emission setting. Light comes only from explicitly colored borders and items. Neutral edges and restrained highlights define the material; semantic color remains available for selected controls and status content. Floating surfaces enforce a minimum tint density for legibility.</p>
<p><code>theme.appearance()</code> is the current typed configuration; <code>theme.resetAppearance()</code> restores defaults. Changes apply to existing components and open overlays. Material is <code>glass</code>, <code>frosted</code>, or <code>solid</code>; blur is 0\u201340 CSS pixels, tint is 0\u20131. Quality is <code>auto</code>, <code>baseline</code>, or <code>enhanced</code>. Reduced motion continues through <code>BxA11yService</code>; system transparency and contrast preferences remain respected.</p>
<p>The global styles are required once. <code>ng add @filip.mazev/blocks</code> adds the distributed material stylesheet to the application build. For an existing application, add <code>node_modules/@filip.mazev/blocks/effects/effects.css</code> to <code>angular.json</code> styles before the application stylesheet, or import <code>@filip.mazev/blocks/effects/effects.css</code> globally. Continue including the usual Blocks Sass theme once. The playground already does this.</p>
<h2>Existing components and custom surfaces</h2>
<p>Blocks components receive glass automatically. The <code>BxSurfaceDirective</code> remains useful for your own containers and local overrides:</p>
<pre><code class="language-html">&lt;section bxSurface&gt;
  &lt;button bx-button [bxDropdown]=&quot;actions&quot;&gt;Actions&lt;/button&gt;
&lt;/section&gt;
&lt;ng-template #actions&gt;
  &lt;bx-menu&gt;
    &lt;bx-menu-item label=&quot;Edit&quot;&gt;&lt;/bx-menu-item&gt;
    &lt;bx-menu-item label=&quot;Duplicate&quot;&gt;&lt;/bx-menu-item&gt;
  &lt;/bx-menu&gt;
&lt;/ng-template&gt;
</code></pre>
<p>Place custom surfaces on containers with measurable CSS boxes. Native replaced elements such as inputs and images need a wrapper for decoration; use the dedicated <code>SliderDirective</code> (<code>input[type=range][bxSlider]</code>) for native ranges; Blocks form components already provide appropriate wrappers. Nested surfaces retain tint and reflection while avoiding a second backdrop-filter pass.</p>
<h2>Overlay fades</h2>
<p>The engine fades overlays in and out while preserving their full dimensions. Their backing stays solid and theme-colored throughout the fade and at rest, avoiding delayed blur. Reopening reverses from the current opacity. Dropdowns use <code>bxTransition=&quot;fade&quot;</code> by default; the former <code>emerge</code> value remains a compatibility alias.</p>
<p>Dropdowns expose <code>#actions=&quot;bxDropdown&quot;</code>, <code>open()</code>, <code>close()</code>, <code>toggle()</code>, <code>isOpen()</code> and <code>state()</code>. The adapter keeps an exiting panel inert and disposes it after motion settles, with revision guards for reopening. Focus and keyboard behavior remain native. No dragging or repositioning behavior was added in this iteration.</p>
<h2>Framework-independent API</h2>
<pre><code class="language-ts">import {
  configureAppearance,
  mountSurface,
  mountGlassScene,
  createGlassTransition,
} from &#39;@filip.mazev/blocks/effects/runtime&#39;;
import &#39;@filip.mazev/blocks/effects/effects.css&#39;;

const configuration = configureAppearance(document.documentElement, {
  material: &#39;glass&#39;, blur: 10, tint: 0.5, quality: &#39;auto&#39;,
});
const surface = mountSurface(button);
const scene = mountGlassScene(container, {
  lights: [{ element: lightMarker, z: 180, intensity: 1, radius: 640 }],
  reflectors: [{ element: foreground, depth: 80, intensity: 0.3 }],
});
// Mount and lay out the panel first.
const panelSurface = mountSurface(panel);
const transition = createGlassTransition(button, panel);
await transition.enter();
// Later: await transition.exit(), then remove the panel.
// Call scene.refresh() after changing registered objects&#39; position or appearance.
// On teardown: transition.destroy(); panelSurface.destroy(); surface.destroy();
// scene.destroy(); configuration.destroy();
</code></pre>
<p>Transition promises resolve to <code>finished</code> or <code>cancelled</code>. Always guard asynchronous panel removal against a subsequent reopening. Controllers expose update/refresh and destroy methods; dispose them with their owning view. The former transition export remains as a deprecated compatibility alias; new code uses <code>createGlassTransition</code>.</p>
<p>The native example can be served without Angular:</p>
<pre><code class="language-sh">npm run build:blocks
python3 -m http.server 8081
</code></pre>
<p>Open <a href="http://localhost:8081/projects/blocks/effects/examples/">http://localhost:8081/projects/blocks/effects/examples/</a>.</p>
<h2>Lighting and rendering limits</h2>
<p>Lighting uses a bounded spatial model: up to four lights and four foreground/background reflection proxies per scene. Element positions, depth, intensity and colors influence the highlight and reflected tint. Real CSS backdrop filtering responds to the pixels behind a surface.</p>
<p>These are deliberate optical approximations. The engine does not capture arbitrary DOM into a texture, ray trace the page, infer a 3D scene, or physically refract all foreground/background content. Register moving scene objects and call <code>scene.refresh()</code> when your application changes them; there is no perpetual polling loop.</p>
<p>Baseline uses one material layer and directional lighting. Enhanced rendering adds a colored reflection and a specular edge without another backdrop-filter pass. Auto mode considers CSS capability, coarse-pointer devices, reduced-cost device signals and data-saving preference. Explicit enhanced mode still requires the relevant CSS support. Solid, unsupported-backdrop, increased-contrast and reduced-transparency modes provide opaque material.</p>
<p>Input and scene observation are shared per document. Scene updates batch a bounded number of visible surfaces; geometry reads precede writes. Animation frames stop when springs settle. Background scrolling can still cause browser GPU work even while JavaScript is idle: measure the real target devices before choosing high blur or putting glass over frequently changing content.</p>
`,"documentation/core/README.md":`<h1>@filip.mazev/blocks-core</h1>
<h2>Blocks - Core Library</h2>
<p><strong>Blocks Core</strong> is the foundational library for the Blocks ecosystem. It provides the essential infrastructure for building responsive, theme-aware Angular applications. It bridges the gap between TypeScript logic and SCSS styling, offering a unified system for breakpoints, device detection, scroll management and theming.</p>
<h2>Installation</h2>
<pre><code class="language-bash">npm i @filip.mazev/blocks-core@latest
</code></pre>
<p>Or with the global blocks <code>ng</code> command which adds all blocks packages and sets up your styles.scss</p>
<pre><code class="language-bash">ng add @filip.mazev/blocks@latest
</code></pre>
<h2>Styles &amp; Theming</h2>
<p>Blocks Core utilizes a robust SCSS architecture to manage design tokens and responsiveness.</p>
<h3>1. Theme Provider</h3>
<p>The library uses a CSS Variable system generated via SCSS maps. To initialize the core theme, use the <code>bx-theme</code> mixin in your global styles.</p>
<pre><code class="language-scss">@use &quot;@filip.mazev/blocks&quot; as *;

:root {
  // Initialize default light theme
  @include bx-theme(blocks.$purple-light-theme);
}

// Example: Switch to dark theme based on a class
body.dark-theme {
  @include bx-theme(blocks.$purple-dark-theme);
}
</code></pre>
<p>This generates CSS variables with the <code>--bx-</code> prefix (e.g.,<code>--bx-primary</code>, <code>--bx-bg-surface</code>, <code>--bx-bg-element</code>).</p>
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
<pre><code class="language-scss">@use &quot;@filip.mazev/blocks-core/src/lib/styles/mixins&quot; as *;

.my-element {
  width: 100%;

  // Applies when width &gt;= 768px
  @include respond-up(md) {
    width: 50%;
  }

  // Applies when width &lt;= 640px
  @include respond-down(sm) {
    display: none;
  }
}
</code></pre>
<h3>3. Design Tokens &amp; Utilities</h3>
<p>Blocks Core includes a strictly defined design system for spacing, border-radiuses, shadows, and z-indexes. This ensures visual consistency across all components and applications.</p>
<p>The library exposes these tokens in three different ways so you can use them wherever they fit best: <strong>SCSS Functions, HTML Utility Classes</strong>, and <strong>CSS Variables</strong>.</p>
<h4>Using SCSS Functions (Recommended for Component Styles)</h4>
<p>When writing custom component styles, use the provided SCSS functions to access the design tokens. This replaces hardcoded &quot;magic numbers&quot; (like <code>16px</code> or <code>1rem</code>) with standardized scale values.</p>
<pre><code class="language-scss">@use &quot;@filip.mazev/blocks-core/src/lib/styles/index&quot; as blocks;

.my-card-element {
    // Spacing
    padding: blocks.spacing(4) blocks.spacing(6); 
    margin-bottom: blocks.spacing(2);

    // Styling
    border-radius: blocks.radius(lg);
    box-shadow: blocks.shadow(md);

    // Z-Index
    z-index: blocks.z(dropdown);
}
</code></pre>
<h4>Using Utility Classes (Tailwind-Style)</h4>
<p>For rapid UI development directly in your templates, Blocks Core automatically generates utility classes prefixed with <code>.bx-</code>.</p>
<pre><code class="language-html">&lt;div class=&quot;bx-p-4 bx-my-2 bx-px-6&quot;&gt;...&lt;/div&gt;

&lt;div class=&quot;bx-rounded-md bx-rounded-t-lg&quot;&gt;...&lt;/div&gt;

&lt;div class=&quot;bx-shadow-modal bx-z-fixed&quot;&gt;...&lt;/div&gt;
</code></pre>
<h4>Using CSS Variables</h4>
<p>If you need to access tokens inline or outside of SCSS compilation, they are exposed globally on the <code>:root</code> element.</p>
<pre><code class="language-scss">.dynamic-element {
    padding: var(--bx-space-4);
    border-radius: var(--bx-rounded-pill);
    box-shadow: var(--bx-shadow-toast);
    z-index: var(--bx-z-modal);
}
</code></pre>
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
<pre><code class="language-typescript">export class MyComponent {
  protected readonly windowDimensionsService = inject(WindowDimensionsService);

  protected windowDimensions = this.windowDimensionsService.dimensions;
  protected breakpoints = this.windowDimensionsService.breakpoints;

  constructor() {
    effect(() =&gt; {
      const width = this.windowDimensions().width;
      const isOnSmallScreen = width &lt; this.breakpoints.sm;
      // handle logic for small screen for example
    });
  }
}
</code></pre>
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
<pre><code class="language-typescript">private scrollLockId: string = uuidv4();
</code></pre>
<pre><code class="language-typescript">// Lock scroll
this.scrollLockService.disableScroll(this.scrollLockId, {
  handleTouchInput: true,
  handleExtremeOverflow: false,
});

// Unlock
this.scrollLockService.enableScroll(this.scrollLockId);
</code></pre>
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
<pre><code class="language-bash">npm i @filip.mazev/blocks@latest
</code></pre>
<p>Or with the global blocks <code>ng</code> command which adds all blocks packages and sets up your styles.scss</p>
<pre><code class="language-bash">ng add @filip.mazev/blocks@latest
</code></pre>
<h2>Usage</h2>
<h3>Create a Modal Component</h3>
<p>Your modal content components must extend <code>IModal&lt;TData, TResult&gt;</code>:</p>
<p>Typescript:</p>
<pre><code class="language-typescript">import { Modal, ModalHeaderDirective, ModalFooterDirective } from &#39;@filip.mazev/modal&#39;;

@Component({
  selector: &#39;app-my-modal-component&#39;,
  imports: [
    ModalHeaderDirective, // optional (only if defining custom header)
    ModalFooterDirective // optional (only if defining custom footer)
  ],
  templateUrl: &#39;./my-modal-component.html&#39;,
  styleUrl: &#39;./my-modal-component.scss&#39;,
})
export class MyModalComponent extends Modal&lt;MyData, MyResult&gt; {

}
</code></pre>
<p>HTML (Template):</p>
<pre><code class="language-HTML">&lt;div *appModalHeader&gt;
    Example Header
&lt;/div&gt;

&lt;h1&gt;
 {{ data.Title }}
&lt;/h1&gt;

&lt;p&gt;
 {{ data.Body }}
&lt;/p&gt;

&lt;div *appModalFooter&gt;
    Example Footer
&lt;/div&gt;
</code></pre>
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
<pre><code class="language-typescript">private readonly modals = inject(ModalService);

...

const modalRef = this.modals.open&lt;MyData, MyResult&gt;(MyModalComponent, {
  data: { id: 1 }, // Must be of the type specified in MyData
  style: {
    layout: &#39;right&#39;, // Slide in from the right (left and center are also available options)
  },
  header: {
    title: &#39;Modal Title Here&#39;,
    icon: { // (optional) undefined or IconData
        name: &#39;chevron-right&#39;, // any IconName
        color: &#39;text-danger&#39;, // (optional) any ThemedColor, will default to currentColor
        bgColor: &#39;auto&#39;, // (optional) undefined, auto or ThemedColor, will default to no background
        size: &#39;24&#39;, // (optional) undefined or any IconSize, will default to &#39;24&#39;
        strokeWidth: &#39;1.5&#39; // (optional) undefined or any IconStrokeWidth, will default to &#39;1.5&#39;
    }
  }
});

modalRef.afterClosed().subscribe(result: IModalCloseResult&lt;MyData&gt; =&gt; {
    // result.state can be &#39;confirm&#39; or &#39;cancel&#39;
    console.log(&#39;Modal closed with action:&#39;, result.state); 

    // result.data is of type \`MyData\` |\`\` undefined\` since no data is returned on &#39;cancel&#39;
    if(result.data) {
        console.log(&#39;Modal Result value:&#39;, result.data);
    }
});
</code></pre>
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
<pre><code class="language-typescript">style: {
  layout: &#39;right&#39;, // Applied when width &gt; 1280px (Desktop)
  breakpoints: {
    &#39;sm&#39;: &#39;bottom-sheet&#39;, // Applied when width &lt;= 640px (Mobile)
    &#39;xl&#39;: &#39;center&#39;        // Applied when width &lt;= 1280px AND &gt; 640px (Tablet/Laptop)
  }
}
</code></pre>
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
<pre><code class="language-typescript">import { ModalCloseGuard, ModalService } from &#39;@filip.mazev/modal&#39;;
import { Observable, of } from &#39;rxjs&#39;;

export class UnsavedChangesGuard extends ModalCloseGuard {
  constructor(private hasUnsavedChanges: boolean) {
    super();
  }

  canClose(modalService: ModalService): boolean {
    if (this.hasUnsavedChanges) {
      return confirm(&#39;You have unsaved changes. Discard?&#39;); // Simple browser confirm
    }
    return true;
  }
}
</code></pre>
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
<pre><code class="language-typescript">import { ModalConfirmCloseGuard } from &#39;@filip.mazev/modal&#39;;

// Open the main modal
const modal = this.modals.open&lt;string, undefined&gt;(CenteredModal, {
  data: &quot;Hello from Modal!&quot;,
  
  // Attach the guard to the configuration
  closeGuard: new ModalConfirmCloseGuard&lt;ConfirmData, undefined&gt;(ConfirmCloseComponent, {
    // This configuration is strictly typed to ConfirmCloseComponent&#39;s data requirements
    data: {
      title: &#39;Unsaved Changes&#39;,
      message: &#39;Are you sure you want to close this modal?&#39;
    },
    style: {
      layout: &#39;center&#39;
    }
  })
});
</code></pre>
<h2>Global Modal Settings</h2>
<p>The library provides a global settings service (<code>ModalGlobalSettingsService</code>) that allows you to update default behaviors and styles for all modals in your application. These defaults are applied unless overridden by the <code>IModalConfig</code> you provide when opening a modal.</p>
<h3>Example Usage</h3>
<pre><code class="language-typescript">import { ModalGlobalSettingsService } from &#39;@filip.mazev/modal&#39;;

constructor(private readonly globalSettings: ModalGlobalSettingsService) {}

// Update global defaults at runtime
this.globalSettings.update({
  animate: false,               // Disable animations globally
  hasBackdrop: true,            // Ensure all modals have a backdrop
  disableCloseOnBackdropClick: true // Prevent closing on backdrop click
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
<pre><code class="language-bash">npm i @filip.mazev/blocks@latest
</code></pre>
<p>Or with the global blocks <code>ng</code> command which adds all blocks packages and sets up your styles.scss</p>
<pre><code class="language-bash">ng add @filip.mazev/blocks@latest
</code></pre>
<h2>Usage</h2>
<h3>Create a Toast Component</h3>
<p>Your custom toast components must extend the <code>Toast&lt;TData, TResult&gt;</code> base class (which implements <code>IToast&lt;D, R&gt;</code>).</p>
<p>Typescript:</p>
<pre><code class="language-typescript">import { Component } from &#39;@angular/core&#39;;
import { Toast } from &#39;@filip.mazev/toastr&#39;;
import { INotificationView } from &#39;@interfaces/ui/inotification-view.interface&#39;;

@Component({
  selector: &#39;app-custom-toast&#39;,
  templateUrl: &#39;./custom-toast.html&#39;,
  styleUrl: &#39;./custom-toast.scss&#39;
})
export class CustomToastComponent extends Toast&lt;INotificationView, undefined&gt; {
  
  // Example method to close the toast from within the component
  protected onDismiss(): void {
    this.close(); 
  }
}
</code></pre>
<p>HTML (Template):</p>
<pre><code class="language-HTML">&lt;div class=&quot;notification&quot;&gt;
    &lt;button class=&quot;notification-close-button&quot; (click)=&quot;onDismiss()&quot;&gt;\u2715&lt;/button&gt;
    &lt;div class=&quot;notification-content&quot;&gt;
        &lt;h3&gt;{{ data.title }}&lt;/h3&gt;
        &lt;p [class]=&quot;&#39;notification-&#39; + data.type&quot;&gt;{{ data.message }}&lt;/p&gt;
    &lt;/div&gt;
&lt;/div&gt;
</code></pre>
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
<pre><code class="language-typescript">import { Component, inject } from &#39;@angular/core&#39;;
import { ToastrService } from &#39;@filip.mazev/toastr&#39;;

@Component({ ... })
export class MyFeatureComponent {
    private readonly toastr = inject(ToastrService);

    public showNotification(view: INotificationView) {
        const toastRef = this.toastr.queueToast(CustomToastComponent, {
            data: view, // Strictly typed to INotificationView
            position: &#39;top-right&#39;,
            durationInMs: 5000,
            swipeToDismiss: true
        });

        toastRef.afterClosed$.subscribe(() =&gt; {
            console.log(&#39;Toast finished and removed from screen.&#39;);
        });
    }
}
</code></pre>
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
<pre><code class="language-typescript">import { Component, inject } from &#39;@angular/core&#39;;
import { ToastrGlobalSettingsService } from &#39;@filip.mazev/toastr&#39;;

@Component({ ... })
export class AppComponent {
  private readonly toastrGlobalSettings = inject(ToastrGlobalSettingsService);

  constructor() {
    // Update global defaults at runtime
    this.toastrGlobalSettings.update({
      position: &#39;bottom-right&#39;,       // Move all toasts to the bottom right
      durationInMs: 7500,             // Keep toasts open longer by default
      maxOpened: 3,                   // Only show 3 toasts at a time; queue the rest
      swipeToDismiss: true,           // Allow swipe gestures globally
      showCloseButton: false,          // Remove the default close button on all wrappers
      closeButtonColor: &#39;text-primary&#39;,
      showProgressBar: true,          // Visually track the 7500ms duration or set to false to disable this
      progressBarColor: &#39;text-primary&#39;
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
<pre><code class="language-typescript">import { Component, inject } from &#39;@angular/core&#39;;
import { ToastrService } from &#39;@filip.mazev/toastr&#39;;

@Component({ ... })
export class MyFeatureComponent {
    private readonly toastr = inject(ToastrService);

    public saveDocument() {
        // ... save logic ...

        // Fire a quick success toast
        this.toastr.queueSuccess({
            message: &#39;Your document was saved successfully.&#39;,
            title: &#39;Save Complete&#39; // Optional
        });
    }

    public reportIssue() {
        // Fire a quick danger toast with an overridden position
        this.toastr.queueDanger({
            message: &#39;Failed to connect to the server. Please try again later.&#39;,
            position: &#39;bottom-center&#39;, // Optional override
            durationInMs: 10000 // Optional override
        });
    }
}
</code></pre>
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
<pre><code class="language-bash">ng add @filip.mazev/blocks
</code></pre>
<h2>What does ng add do?</h2>
<p>When you run the command above, the Angular CLI will execute our custom schematic to handle the boilerplate for you:</p>
<ul>
<li>Theme selection: White is the default; Purple, Orange, Red, Green and Cyberpunk are also available. Use <code>--theme=white</code> to select White explicitly.</li>
<li>Dependency Management: Automatically adds the latest versions of the Blocks ecosystem to your package.json and runs npm install.</li>
<li>SCSS Injection: Intelligently locates your project&#39;s global stylesheet (styles.scss or styles.sass) and injects the required @use statements, mixins, and both light/dark mode CSS variables based on your theme selection.</li>
</ul>
<h2>Manual Setup (Without Angular CLI)</h2>
<p>If you prefer not to use <code>ng add</code> or are in an environment that doesn&#39;t support Angular Schematics, you can install the packages manually:</p>
<pre><code class="language-bash">npm install @filip.mazev/blocks@latest
</code></pre>
<p>Then, manually configure your styles.scss:</p>
<pre><code class="language-scss">@use &#39;@filip.mazev/blocks&#39; as *;

@layer base {
    :root {
        @include bx-theme($white-light-theme);
    }

    [data-theme=&#39;dark&#39;] {
        @include bx-theme($white-dark-theme);
    }
}
</code></pre>
<h2>Appearance</h2>
<p>Version 1.4.0 integrates glass throughout Blocks using its existing semantic theme. Configure it application-wide through <code>ThemingService.setAppearance({ material: &#39;glass&#39;, blur: 10, tint: 0.5 })</code>; use <code>resetAppearance()</code> for defaults. Existing controls receive their material automatically, including menus, dialogs and notifications.</p>
<p>Load <code>@filip.mazev/blocks/effects/effects.css</code> once globally alongside the Blocks Sass theme. <code>ng add</code> registers the stylesheet for new installations. <code>BxSurfaceDirective</code> from <code>@filip.mazev/blocks/effects</code> is available for custom containers and local overrides. The framework-independent engine is <code>@filip.mazev/blocks/effects/runtime</code>, included in the same package.</p>
<p>The source playground provides a dedicated README and working page for every component, with global appearance controls at <code>/appearance</code>.</p>
`,"projects/blocks/effects/README.md":`<h1>Appearance effects</h1>
<p>Blocks components use glass through the existing theme system. The <code>BxSurfaceDirective</code> applies the same material to custom containers. Labels, inputs and icon paths retain their native rendering; decorative lighting and blur sit behind content.</p>
<h2>Global configuration</h2>
<pre><code class="language-ts">import { inject } from &#39;@angular/core&#39;;
import { ThemingService } from &#39;@filip.mazev/blocks/core&#39;;

private readonly theme = inject(ThemingService);

this.theme.setAppearance({
  material: &#39;glass&#39;,  // glass | frosted | solid
  blur: 10,           // 0\u201340 pixels
  tint: 0.5,         // 0\u20131 opacity
  quality: &#39;auto&#39;,    // auto | baseline | enhanced
  reducedTransparency: false
});

// Read the current configuration or return to defaults.
const current = this.theme.appearance();
this.theme.resetAppearance();
</code></pre>
<p>Global settings apply throughout the application, including mounted controls and overlays. Color comes from the active Blocks palette and semantic tokens; changing the palette does not require configuring a separate glass color scheme.</p>
<h2>Custom surfaces</h2>
<pre><code class="language-ts">import { BxSurfaceDirective } from &#39;@filip.mazev/blocks/effects&#39;;
</code></pre>
<pre><code class="language-html">&lt;section bxSurface class=&quot;custom-panel&quot;&gt;
  &lt;h2&gt;Project settings&lt;/h2&gt;
  &lt;p&gt;This surface inherits the global material.&lt;/p&gt;
&lt;/section&gt;
</code></pre>
<p>Provide layout and padding using the existing Blocks styling helpers. The directive supplies the material and token-based default border and radius. Controls and actionable surfaces get automatic hover/focus lighting; decorative containers receive nearby light without responding to hover themselves. Components can override the default border and radius with their existing tokens.</p>
<table>
<thead>
<tr>
<th>Input</th>
<th>Default</th>
<th>Local override</th>
</tr>
</thead>
<tbody><tr>
<td><code>bxSurface</code></td>
<td>Global material</td>
<td><code>glass</code>, <code>frosted</code>, <code>solid</code></td>
</tr>
<tr>
<td><code>bxSurfaceBlur</code></td>
<td>Global blur</td>
<td>0\u201340 pixels</td>
</tr>
<tr>
<td><code>bxSurfaceTint</code></td>
<td>Global tint</td>
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
<td>Surface emission color</td>
<td>Override the color emitted while a contained or associated native control has focus</td>
</tr>
<tr>
<td><code>bxReducedTransparency</code></td>
<td>Global setting</td>
<td>Boolean</td>
</tr>
</tbody></table>
<p>Omit local inputs to keep the surface connected to application settings. A deliberate local override continues to take precedence until removed.</p>
<h2>Composition and motion</h2>
<p>Use a single backing per physical surface. For example, a menu owns the backing while menu-item content shares it; a form-field label does not need an extra blurred card. Apply <code>bxTransition=&quot;fade&quot;</code> on a dropdown to fade its menu without resizing its contents. Animated overlays keep a solid theme-colored backing throughout their lifetime, avoiding a blur/tint pop at the end of motion. Other surfaces remain translucent.</p>
<p>Buttons, links, native field surfaces and elements with actionable ARIA roles automatically illuminate their border and nearby surfaces on hover or focus. Active ARIA states keep the light enabled. Plain panels, sections and other decorative containers remain passive receivers. Give a custom clickable element its appropriate role (such as <code>role=&quot;button&quot;</code>), or explicitly enable <code>bxSurfaceInteractive</code> for a custom interaction. Use <code>bxSurfaceEmission</code> only to override the semantic color. The source is the element\u2019s geometry, never the mouse coordinates.</p>
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
<pre><code class="language-sh">npm install @filip.mazev/blocks
</code></pre>
<pre><code class="language-ts">import &#39;@filip.mazev/blocks/effects/effects.css&#39;;
import { configureAppearance, mountSurface, createGlassTransition } from &#39;@filip.mazev/blocks/effects/runtime&#39;;

const config = configureAppearance(document.documentElement, {
  material: &#39;glass&#39;, blur: 10, tint: 0.5,
  quality: &#39;auto&#39;,
});
const buttonSkin = mountSurface(button);
const panelSkin = mountSurface(panel);

// The application or overlay library positions the panel before this call.
const transition = createGlassTransition(button, panel);
await transition.enter();
config.update({ tint: .45 }); // All existing surfaces and body-mounted overlays update.
const result = await transition.exit();
if (result === &#39;finished&#39;) panel.hidden = true;

// At component/application teardown:
transition.destroy(); buttonSkin.destroy(); panelSkin.destroy(); config.destroy();
</code></pre>
<p><code>configureAppearance</code> owns one root scope, merges updates, and restores the attributes and inline properties it owned on destroy. Mount it on <code>document.documentElement</code> to include overlays. Per-surface options override the global configuration; omitted options inherit it. There must be only one configuration controller per root and one surface controller per element. <code>surface.update(options)</code> replaces that surface&#39;s local options so <code>{}</code> returns it to global settings.</p>
<h2>Global material and theme contract</h2>
<p>The renderer defines no brand palette or spacing system. It uses the existing Blocks semantic tokens and preserves each component&#39;s border radius, size and layout. Load the glass CSS once after your theme CSS, and set border radius on your native element when using the package outside Blocks.</p>
<p><code>mountSurface(element)</code> includes a default token-based border. Buttons, links, native field surfaces and actionable ARIA roles automatically illuminate their border and nearby surfaces on interaction or an active ARIA state. Decorative containers receive nearby light without their own hover effect. The default color is the theme accent, or the error color inside an invalid Blocks form field. Override <code>emission</code>/<code>focusEmission</code> for a different semantic color; <code>interactive</code> explicitly overrides automatic control/action detection.</p>
<table>
<thead>
<tr>
<th>Setting</th>
<th>Values</th>
<th>Inherited CSS property</th>
</tr>
</thead>
<tbody><tr>
<td><code>material</code></td>
<td><code>glass</code>, <code>frosted</code>, <code>solid</code></td>
<td>root <code>data-bx-glass-material</code></td>
</tr>
<tr>
<td><code>blur</code></td>
<td>0\u201340 CSS pixels</td>
<td><code>--bx-glass-blur</code></td>
</tr>
<tr>
<td><code>tint</code></td>
<td>0\u20131, larger means more opaque</td>
<td><code>--bx-glass-opacity</code></td>
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
<pre><code class="language-ts">import { mountGlassScene } from &#39;@filip.mazev/blocks/effects/runtime&#39;;

const scene = mountGlassScene(document.documentElement, {
  lights: [{ element: lamp, z: 180, color: &#39;var(--bx-primary)&#39;, intensity: 1.2, radius: 640 }],
  reflectors: [
    { element: backgroundShape, depth: -100, intensity: .25 },
    { element: foregroundCard, depth: 70, intensity: .35 },
  ],
});

// After application code moves one of those elements:
scene.refresh();
// Or replace the scene configuration:
scene.update({ lights: [{ x: 300, y: 80, z: 220, intensity: 1 }] });
// On teardown:
scene.destroy();
</code></pre>
<p>Coordinates are viewport CSS pixels. An element supplies its live bounding-box center (<code>offsetX</code>/<code>offsetY</code>, from 0 to 1, can move the source within it); a reflector uses its computed background color unless <code>color</code> is supplied. Signed <code>depth</code> places foreground and background reflection proxies relative to the glass plane. Light distance, height and falloff affect the position and strength of the highlight. Scrolling, resizing, visibility changes and explicit refreshes invalidate the scene; call <code>refresh()</code> after application-driven transforms or layout changes.</p>
<p>This is a bounded, stylized lighting model. Actual content behind glass contributes through the browser&#39;s backdrop filter. Registered foreground/background objects contribute colored reflection proxies; the package does <strong>not</strong> rasterize arbitrary HTML, implement ray tracing, or physically refract arbitrary page pixels. Gradient-backed reflectors should supply an explicit representative color.</p>
<h2>Overlay fades</h2>
<p>Overlays fade in over 180 ms and out over 140 ms. Their dimensions, clipping and text size remain unchanged. The backing stays opaque and theme-colored both during the fade and at rest, avoiding delayed backdrop blur. Other surfaces retain their normal glass material. Reversing an active fade continues from its current opacity; the interrupted promise resolves to <code>cancelled</code>.</p>
<p>The transition temporarily owns <code>opacity</code>, <code>visibility</code> and the backing\u2019s <code>data-bx-motion-material</code> attribute. The overlay positioner retains all geometry and transforms. Supply an already positioned target and destroy the transition when its overlay is removed. Both endpoints must belong to the same document. <code>refresh()</code> remains a compatibility no-op because a fade requires no geometry measurements. Version 0.1\u2019s <code>createLiquidTransition</code> and associated type names remain deprecated aliases for <code>createGlassTransition</code>.</p>
<h2>Performance and accessibility</h2>
<ul>
<li>One lazy animation clock and delegated press, hover-boundary and focus handling per document. Moving the pointer within an element does not change lighting. Settled scenes schedule no animation frames.</li>
<li>At most four explicit lights and four reflectors per scene, and 24 visible surface lighting updates per frame. Interaction and active-state emitters share one delegated event stream and semantic-attribute observer; there is no observer per control.</li>
<li>Geometry is cached between invalidations and measured before a batch writes lighting values. No screenshot capture, DOM mirroring, canvas renderer, permanent animation loop or drag handling.</li>
<li>Nested surfaces retain their tint and reflection but skip additional backdrop filters.</li>
<li><code>baseline</code> uses one backdrop pass and a dynamic highlight. Supported <code>enhanced</code> rendering adds a narrow specular edge and colored reflection overlay without another backdrop pass. <code>auto</code> chooses the baseline for coarse pointers, data saving or low reported CPU concurrency; capability checks guard enhancements. Hardware hints are conservative defaults, not measured frame-rate guarantees.</li>
<li>Operating-system reduced motion/transparency, increased contrast and forced colors receive simpler rendering. A global <code>reducedTransparency: false</code> leaves the OS transparency preference enabled; explicit surface options can override it. An explicit reduced-motion setting takes precedence so Blocks can preserve its existing manual accessibility override; omit it to follow the OS. Reduced motion finishes transitions immediately. Unsupported backdrop filtering or color mixing produces an opaque fallback.</li>
<li>Backdrop filters still have a cost. Use one outer material for large sections, avoid full-screen stacked filtered panels, and profile actual target devices before treating any frame-rate target as verified.</li>
</ul>
<p>See <code>../examples/index.html</code> for a native DOM demo. Serve the repository over HTTP after building the workspace; no framework runtime is required. Build with <code>npm run build:blocks</code> at the workspace root; this builds all Blocks entry points and generates the native example\u2019s design tokens from Blocks. Browser regressions live in <code>tools/browser</code>.</p>
<h3>Semantic lighting</h3>
<p><code>BxGlassLightingService</code> in the Angular adapter combines sources within a form or toast stack. Validation text illuminates nearby controls and removes its source when the error clears. Toast light is anchored to the rendered progress bar\u2019s right edge, pauses with the toast, and illuminates adjacent notifications. Its own glow uses that same measured edge; it has no independent progress animation. <code>excludeSource</code> or <code>excludeElement</code> lets a source render its own glow separately. <code>observeGlassLighting</code> and <code>refreshGlassLighting</code> support custom decorative receivers, including the opaque circular slider thumb beside its native range input.</p>
<p>A surface can opt into semantic emission with <code>mountSurface(element, { emission: &#39;var(--bx-primary)&#39; })</code>. Hover or keyboard focus activates that element as a source; its visible border and declared color determine the facing edges and corners of nearby surfaces. Hover light has a 120 CSS-pixel falloff radius and stays within the nearest main, aside, nav, dialog or overlay. Add <code>data-bx-light-scope</code> to isolate a custom region. Modal panels, native dialogs, popovers, fixed/sticky panels, CDK overlays and toast stacks form separate lighting boundaries. Positioned stacking layers also constrain hover/focus light. Receiver hit testing excludes covered surfaces, including rounded corners, and opening or removing overlays invalidates prior highlights. Each source fades independently over 200 ms, including the emitter\u2019s own colored border. Borders can combine several sources; retiring contributions fade out rather than jumping to a new source. Reduced motion applies changes immediately. Source coordinates project directly into each receiver without a second position spring, pointer tracking, DOM capture, or a permanent hover animation loop.</p>
<p>Backdrop behavior follows the browser\u2019s <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/backdrop-filter">backdrop-root rules</a>. Visual treatment follows <a href="https://developer.apple.com/design/human-interface-guidelines/materials">Apple\u2019s material guidance</a>: restrained highlights and readable translucent layers.</p>
<p>Use <code>focusEmission</code> for a field that should emit while its native control has focus. Focused fields remain active when a different button is hovered. Decorative native-control receivers can pass their hit target as the third argument to <code>observeGlassLighting</code>.</p>
`,"projects/blocks/forms/components/button/README.md":`<h1>Button</h1>
<p>An action control with Blocks intent colors, familiar variants and visible focus.</p>
<h2>Import</h2>
<pre><code class="language-ts">import { Button } from &#39;@filip.mazev/blocks/forms&#39;;
</code></pre>
<p>Add the standalone component or directive to your component&#39;s <code>imports</code>.</p>
<h2>Usage</h2>
<pre><code class="language-html">&lt;button bx-button variant=&quot;filled&quot; (click)=&quot;save()&quot;&gt;Save changes&lt;/button&gt;
</code></pre>
<h2>API</h2>
<p><code>variant</code>: text, filled, tonal, icon, fab, mini-fab, extended-fab. <code>color</code>: primary, success, danger, info, warn, grayscale. <code>outlined</code>, <code>elevated</code>, <code>disabled</code>, and <code>interactive</code> control presentation and availability.</p>
<h2>Appearance</h2>
<p>Appearance uses Blocks semantic colors, spacing, radius and motion tokens. Glass surfaces inherit the application configuration from <code>ThemingService</code>; changing material, blur, tint updates existing components and overlays. Content-only parts share their containing surface instead of adding another backdrop filter.</p>
<p>Interactive button variants illuminate their border and nearby glass on hover, press and keyboard focus. Text buttons do not emit light, but keep their underline hover and focus outline. The same light remains active for <code>aria-pressed=&quot;true&quot;</code>, <code>aria-selected=&quot;true&quot;</code>, <code>aria-expanded=&quot;true&quot;</code>, or a current <code>aria-current</code> value. Primary and grayscale buttons use the application&#39;s accent; success, danger, info and warning buttons use their semantic color. Disabled and noninteractive buttons do not emit. No additional effects directive or lighting configuration is needed.</p>
<p>Filled buttons retain their semantic background and paired foreground color in glass, frosted and solid materials, including hover and press. Glass and frosted fills keep a minimum tint for readable text while retaining translucency and surface lighting. Text buttons have no background, border, shadow or backdrop blur in any material; hover underlines the label and keyboard focus retains a visible outline. Tonal and outlined buttons keep their glass backing.</p>
<pre><code class="language-ts">import { inject } from &#39;@angular/core&#39;;
import { ThemingService } from &#39;@filip.mazev/blocks/core&#39;;

private readonly theme = inject(ThemingService);

// Application-wide, including open overlays.
this.theme.setAppearance({ material: &#39;glass&#39;, blur: 10, tint: 0.5 });
// Opaque presentation retains the same layout and component API.
this.theme.setAppearance({ material: &#39;solid&#39; });
</code></pre>
<p><code>BxA11yService</code> controls reduced motion; reduced transparency and forced colors receive opaque presentation. Glass is decorative and does not replace labels, focus states, or semantic control states.</p>
<h2>Behavior and accessibility</h2>
<p>Use the native <code>button[bx-button]</code> selector for actions and <code>a[bx-button]</code> with a real <code>href</code> for navigation. Give icon-only actions an accessible label. Disabled actions do not emit an action through a click listener.</p>
<h2>Playground</h2>
<p>Open <code>/components/button</code> for a working example and its current value or action result.</p>
`,"projects/blocks/forms/components/checkbox/README.md":`<h1>Checkbox</h1>
<p>A boolean choice integrated with Angular forms.</p>
<h2>Import</h2>
<pre><code class="language-ts">import { Checkbox } from &#39;@filip.mazev/blocks/forms&#39;;
</code></pre>
<p>Add the standalone component or directive to your component&#39;s <code>imports</code>.</p>
<h2>Usage</h2>
<pre><code class="language-html">&lt;bx-checkbox label=&quot;Receive updates&quot; [formControl]=&quot;updates&quot; /&gt;
</code></pre>
<h2>API</h2>
<p>The control implements Angular ControlValueAccessor. Use <code>[formControl]</code>, <code>formControlName</code>, or <code>[(ngModel)]</code>; do not bind a separate value input. Shared inputs: <code>label</code>, <code>placeholder</code>, <code>tooltip</code>, <code>required</code>, <code>loading</code>, <code>disabled</code>, <code>ariaLabel</code>, <code>dataTestId</code>, and <code>errorMessages</code>. Disable reactive controls through <code>control.disable()</code> to keep form state consistent.</p>
<h2>Appearance</h2>
<p>Appearance uses Blocks semantic colors, spacing, radius and motion tokens. Glass surfaces inherit the application configuration from <code>ThemingService</code>; changing material, blur, tint updates existing components and overlays. Content-only parts share their containing surface instead of adding another backdrop filter.</p>
<pre><code class="language-ts">import { inject } from &#39;@angular/core&#39;;
import { ThemingService } from &#39;@filip.mazev/blocks/core&#39;;

private readonly theme = inject(ThemingService);

// Application-wide, including open overlays.
this.theme.setAppearance({ material: &#39;glass&#39;, blur: 10, tint: 0.5 });
// Opaque presentation retains the same layout and component API.
this.theme.setAppearance({ material: &#39;solid&#39; });
</code></pre>
<p><code>BxA11yService</code> controls reduced motion; reduced transparency and forced colors receive opaque presentation. Glass is decorative and does not replace labels, focus states, or semantic control states.</p>
<h2>Behavior and accessibility</h2>
<p>Use a visible label. Space toggles the native input; focus and checked state remain visible in glass and solid modes. The control supports validation and touched state.</p>
<h2>Playground</h2>
<p>Open <code>/components/checkbox</code> for a working example and its current value or action result.</p>
`,"projects/blocks/forms/components/form-field/README.md":`<h1>Form field</h1>
<p>A shared label, help text, validation and loading frame for controls.</p>
<h2>Import</h2>
<pre><code class="language-ts">import { FormField } from &#39;@filip.mazev/blocks/forms&#39;;
</code></pre>
<p>Add the standalone component or directive to your component&#39;s <code>imports</code>.</p>
<h2>Usage</h2>
<pre><code class="language-html">&lt;bx-form-field label=&quot;Project name&quot; forId=&quot;project&quot; [required]=&quot;true&quot; [error]=&quot;error&quot;&gt;
  &lt;input id=&quot;project&quot; (input)=&quot;update($event)&quot; /&gt;
&lt;/bx-form-field&gt;
</code></pre>
<h2>API</h2>
<p><code>label</code>, <code>tooltip</code>, <code>error</code>: text or a translation key object. <code>forId</code>: the native input ID. <code>required</code>, <code>loading</code>: booleans. Projects the control and an optional <code>bx-error</code>.</p>
<h2>Appearance</h2>
<p>Appearance uses Blocks semantic colors, spacing, radius and motion tokens. Glass surfaces inherit the application configuration from <code>ThemingService</code>; changing material, blur, tint updates existing components and overlays. Content-only parts share their containing surface instead of adding another backdrop filter.</p>
<pre><code class="language-ts">import { inject } from &#39;@angular/core&#39;;
import { ThemingService } from &#39;@filip.mazev/blocks/core&#39;;

private readonly theme = inject(ThemingService);

// Application-wide, including open overlays.
this.theme.setAppearance({ material: &#39;glass&#39;, blur: 10, tint: 0.5 });
// Opaque presentation retains the same layout and component API.
this.theme.setAppearance({ material: &#39;solid&#39; });
</code></pre>
<p><code>BxA11yService</code> controls reduced motion; reduced transparency and forced colors receive opaque presentation. Glass is decorative and does not replace labels, focus states, or semantic control states.</p>
<h2>Behavior and accessibility</h2>
<p>Set <code>forId</code> to the actual input ID. Required decoration does not add validation to your control; apply the corresponding validator and native required attribute. Associate custom error text with <code>aria-describedby</code> when projecting your own control.</p>
<h2>Playground</h2>
<p>Open <code>/components/form-field</code> for a working example and its current value or action result.</p>
`,"projects/blocks/forms/components/input-field/README.md":`<h1>Input field</h1>
<p>A text, date or numeric input with a floating label and validation feedback.</p>
<h2>Import</h2>
<pre><code class="language-ts">import { InputField } from &#39;@filip.mazev/blocks/forms&#39;;
</code></pre>
<p>Add the standalone component or directive to your component&#39;s <code>imports</code>.</p>
<h2>Usage</h2>
<pre><code class="language-html">&lt;bx-input-field label=&quot;Project name&quot; [formControl]=&quot;name&quot; /&gt;
</code></pre>
<h2>API</h2>
<p>The control implements Angular ControlValueAccessor. Use <code>[formControl]</code>, <code>formControlName</code>, or <code>[(ngModel)]</code>; do not bind a separate value input. Shared inputs: <code>label</code>, <code>placeholder</code>, <code>tooltip</code>, <code>required</code>, <code>loading</code>, <code>disabled</code>, <code>ariaLabel</code>, <code>dataTestId</code>, and <code>errorMessages</code>. Disable reactive controls through <code>control.disable()</code> to keep form state consistent.</p>
<p><code>type</code>: text, password, email, number, date, time, datetime-local. Numeric controls accept <code>min</code>, <code>max</code>, and <code>step</code>.</p>
<h2>Appearance</h2>
<p>Appearance uses Blocks semantic colors, spacing, radius and motion tokens. Glass surfaces inherit the application configuration from <code>ThemingService</code>; changing material, blur, tint updates existing components and overlays. Content-only parts share their containing surface instead of adding another backdrop filter.</p>
<pre><code class="language-ts">import { inject } from &#39;@angular/core&#39;;
import { ThemingService } from &#39;@filip.mazev/blocks/core&#39;;

private readonly theme = inject(ThemingService);

// Application-wide, including open overlays.
this.theme.setAppearance({ material: &#39;glass&#39;, blur: 10, tint: 0.5 });
// Opaque presentation retains the same layout and component API.
this.theme.setAppearance({ material: &#39;solid&#39; });
</code></pre>
<p><code>BxA11yService</code> controls reduced motion; reduced transparency and forced colors receive opaque presentation. Glass is decorative and does not replace labels, focus states, or semantic control states.</p>
<h2>Behavior and accessibility</h2>
<p>Use a label and an appropriate input type. Number input emits a number or null when empty. Validators should enforce application constraints, including minimum and maximum values.</p>
<h2>Playground</h2>
<p>Open <code>/components/input-field</code> for a working example and its current value or action result.</p>
`,"projects/blocks/forms/components/radio-button/README.md":`<h1>Radio</h1>
<p>A single choice within a named group.</p>
<h2>Import</h2>
<pre><code class="language-ts">import { Radio } from &#39;@filip.mazev/blocks/forms&#39;;
</code></pre>
<p>Add the standalone component or directive to your component&#39;s <code>imports</code>.</p>
<h2>Usage</h2>
<pre><code class="language-html">&lt;bx-radio label=&quot;Daily&quot; name=&quot;frequency&quot; value=&quot;daily&quot; [formControl]=&quot;frequency&quot; /&gt;
&lt;bx-radio label=&quot;Weekly&quot; name=&quot;frequency&quot; value=&quot;weekly&quot; [formControl]=&quot;frequency&quot; /&gt;
</code></pre>
<h2>API</h2>
<p>The control implements Angular ControlValueAccessor. Use <code>[formControl]</code>, <code>formControlName</code>, or <code>[(ngModel)]</code>; do not bind a separate value input. Shared inputs: <code>label</code>, <code>placeholder</code>, <code>tooltip</code>, <code>required</code>, <code>loading</code>, <code>disabled</code>, <code>ariaLabel</code>, <code>dataTestId</code>, and <code>errorMessages</code>. Disable reactive controls through <code>control.disable()</code> to keep form state consistent.</p>
<p><code>value</code> is required and identifies this option. <code>name</code> groups the native radio inputs.</p>
<h2>Appearance</h2>
<p>Appearance uses Blocks semantic colors, spacing, radius and motion tokens. Glass surfaces inherit the application configuration from <code>ThemingService</code>; changing material, blur, tint updates existing components and overlays. Content-only parts share their containing surface instead of adding another backdrop filter.</p>
<pre><code class="language-ts">import { inject } from &#39;@angular/core&#39;;
import { ThemingService } from &#39;@filip.mazev/blocks/core&#39;;

private readonly theme = inject(ThemingService);

// Application-wide, including open overlays.
this.theme.setAppearance({ material: &#39;glass&#39;, blur: 10, tint: 0.5 });
// Opaque presentation retains the same layout and component API.
this.theme.setAppearance({ material: &#39;solid&#39; });
</code></pre>
<p><code>BxA11yService</code> controls reduced motion; reduced transparency and forced colors receive opaque presentation. Glass is decorative and does not replace labels, focus states, or semantic control states.</p>
<h2>Behavior and accessibility</h2>
<p>Use the same form control and name for mutually exclusive options, distinct values, and visible labels. A fieldset with a legend gives the group an accessible name.</p>
<h2>Playground</h2>
<p>Open <code>/components/radio</code> for a working example and its current value or action result.</p>
`,"projects/blocks/forms/components/search-input/README.md":`<h1>Search input</h1>
<p>A searchable text control with a clear action.</p>
<h2>Import</h2>
<pre><code class="language-ts">import { SearchInput } from &#39;@filip.mazev/blocks/forms&#39;;
</code></pre>
<p>Add the standalone component or directive to your component&#39;s <code>imports</code>.</p>
<h2>Usage</h2>
<pre><code class="language-html">&lt;bx-search-input label=&quot;Find a component&quot; [formControl]=&quot;query&quot; (search)=&quot;filter($event)&quot; /&gt;
</code></pre>
<h2>API</h2>
<p>The control implements Angular ControlValueAccessor. Use <code>[formControl]</code>, <code>formControlName</code>, or <code>[(ngModel)]</code>; do not bind a separate value input. Shared inputs: <code>label</code>, <code>placeholder</code>, <code>tooltip</code>, <code>required</code>, <code>loading</code>, <code>disabled</code>, <code>ariaLabel</code>, <code>dataTestId</code>, and <code>errorMessages</code>. Disable reactive controls through <code>control.disable()</code> to keep form state consistent.</p>
<p><code>search</code> emits the current string on input and clear. Public methods <code>clear()</code> and <code>focus()</code> support integration.</p>
<h2>Appearance</h2>
<p>Appearance uses Blocks semantic colors, spacing, radius and motion tokens. Glass surfaces inherit the application configuration from <code>ThemingService</code>; changing material, blur, tint updates existing components and overlays. Content-only parts share their containing surface instead of adding another backdrop filter.</p>
<pre><code class="language-ts">import { inject } from &#39;@angular/core&#39;;
import { ThemingService } from &#39;@filip.mazev/blocks/core&#39;;

private readonly theme = inject(ThemingService);

// Application-wide, including open overlays.
this.theme.setAppearance({ material: &#39;glass&#39;, blur: 10, tint: 0.5 });
// Opaque presentation retains the same layout and component API.
this.theme.setAppearance({ material: &#39;solid&#39; });
</code></pre>
<p><code>BxA11yService</code> controls reduced motion; reduced transparency and forced colors receive opaque presentation. Glass is decorative and does not replace labels, focus states, or semantic control states.</p>
<h2>Behavior and accessibility</h2>
<p>The output is immediate; debounce expensive network searches in the application. Keep a visible or accessible label instead of relying only on placeholder text.</p>
<h2>Playground</h2>
<p>Open <code>/components/search-input</code> for a working example and its current value or action result.</p>
`,"projects/blocks/forms/components/select/README.md":`<h1>Select</h1>
<p>A single-value selection control with a positioned options panel and optional search.</p>
<h2>Import</h2>
<pre><code class="language-ts">import { Select } from &#39;@filip.mazev/blocks/forms&#39;;
</code></pre>
<p>Add the standalone component or directive to your component&#39;s <code>imports</code>.</p>
<h2>Usage</h2>
<pre><code class="language-html">&lt;bx-select label=&quot;Destination&quot; [options]=&quot;options&quot; [isSearchable]=&quot;true&quot; [formControl]=&quot;destination&quot; /&gt;
</code></pre>
<h2>API</h2>
<p>The control implements Angular ControlValueAccessor. Use <code>[formControl]</code>, <code>formControlName</code>, or <code>[(ngModel)]</code>; do not bind a separate value input. Shared inputs: <code>label</code>, <code>placeholder</code>, <code>tooltip</code>, <code>required</code>, <code>loading</code>, <code>disabled</code>, <code>ariaLabel</code>, <code>dataTestId</code>, and <code>errorMessages</code>. Disable reactive controls through <code>control.disable()</code> to keep form state consistent.</p>
<p><code>options</code> is required: <code>{ label, value, disabled? }[]</code>. <code>isSearchable</code>, <code>externalFiltering</code>, <code>searchPlaceholder</code>, <code>emptyMessage</code> configure search. <code>search</code> emits debounced external filter terms. <code>toggleOpen()</code> and <code>close()</code> control the panel.</p>
<h2>Appearance</h2>
<p>Appearance uses Blocks semantic colors, spacing, radius and motion tokens. Glass surfaces inherit the application configuration from <code>ThemingService</code>; changing material, blur, tint updates existing components and overlays. Content-only parts share their containing surface instead of adding another backdrop filter.</p>
<pre><code class="language-ts">import { inject } from &#39;@angular/core&#39;;
import { ThemingService } from &#39;@filip.mazev/blocks/core&#39;;

private readonly theme = inject(ThemingService);

// Application-wide, including open overlays.
this.theme.setAppearance({ material: &#39;glass&#39;, blur: 10, tint: 0.5 });
// Opaque presentation retains the same layout and component API.
this.theme.setAppearance({ material: &#39;solid&#39; });
</code></pre>
<p><code>BxA11yService</code> controls reduced motion; reduced transparency and forced colors receive opaque presentation. Glass is decorative and does not replace labels, focus states, or semantic control states.</p>
<h2>Behavior and accessibility</h2>
<p>Use stable option values. For external filtering, update the options in response to <code>search</code>; the application owns request cancellation and loading state. Disabled options cannot be selected.</p>
<h2>Playground</h2>
<p>Open <code>/components/select</code> for a working example and its current value or action result.</p>
`,"projects/blocks/forms/components/slide-toggle/README.md":`<h1>Slide toggle</h1>
<p>A boolean preference that takes effect immediately.</p>
<h2>Import</h2>
<pre><code class="language-ts">import { SlideToggle } from &#39;@filip.mazev/blocks/forms&#39;;
</code></pre>
<p>Add the standalone component or directive to your component&#39;s <code>imports</code>.</p>
<h2>Usage</h2>
<pre><code class="language-html">&lt;bx-slide-toggle label=&quot;Enable notifications&quot; [formControl]=&quot;notifications&quot; /&gt;
</code></pre>
<h2>API</h2>
<p>The control implements Angular ControlValueAccessor. Use <code>[formControl]</code>, <code>formControlName</code>, or <code>[(ngModel)]</code>; do not bind a separate value input. Shared inputs: <code>label</code>, <code>placeholder</code>, <code>tooltip</code>, <code>required</code>, <code>loading</code>, <code>disabled</code>, <code>ariaLabel</code>, <code>dataTestId</code>, and <code>errorMessages</code>. Disable reactive controls through <code>control.disable()</code> to keep form state consistent.</p>
<h2>Appearance</h2>
<p>Appearance uses Blocks semantic colors, spacing, radius and motion tokens. Glass surfaces inherit the application configuration from <code>ThemingService</code>; changing material, blur, tint updates existing components and overlays. Content-only parts share their containing surface instead of adding another backdrop filter.</p>
<pre><code class="language-ts">import { inject } from &#39;@angular/core&#39;;
import { ThemingService } from &#39;@filip.mazev/blocks/core&#39;;

private readonly theme = inject(ThemingService);

// Application-wide, including open overlays.
this.theme.setAppearance({ material: &#39;glass&#39;, blur: 10, tint: 0.5 });
// Opaque presentation retains the same layout and component API.
this.theme.setAppearance({ material: &#39;solid&#39; });
</code></pre>
<p><code>BxA11yService</code> controls reduced motion; reduced transparency and forced colors receive opaque presentation. Glass is decorative and does not replace labels, focus states, or semantic control states.</p>
<h2>Behavior and accessibility</h2>
<p>Use for immediate settings, with a label describing the enabled state. The native checkbox retains keyboard behavior and checked state.</p>
<h2>Playground</h2>
<p>Open <code>/components/slide-toggle</code> for a working example and its current value or action result.</p>
`,"projects/blocks/forms/directives/error/README.md":`<h1>Error message</h1>
<p>A projected custom error message inside a form-field.</p>
<h2>Import</h2>
<pre><code class="language-ts">import { BxError, FormField } from &#39;@filip.mazev/blocks/forms&#39;;
</code></pre>
<p>Add the standalone component to your component&#39;s <code>imports</code>.</p>
<h2>Usage</h2>
<pre><code class="language-html">&lt;bx-form-field label=&quot;Reference&quot; forId=&quot;reference&quot;&gt;
  &lt;input id=&quot;reference&quot; aria-describedby=&quot;reference-error&quot; /&gt;
  &lt;bx-error id=&quot;reference-error&quot;&gt;Enter at least three characters.&lt;/bx-error&gt;
&lt;/bx-form-field&gt;
</code></pre>
<h2>API</h2>
<p><code>BxError</code> is a content projection component with selector <code>bx-error</code>. It has no inputs; the form field projects it into its error region.</p>
<h2>Appearance</h2>
<p>Appearance uses Blocks semantic colors, spacing, radius and motion tokens. Glass surfaces inherit the application configuration from <code>ThemingService</code>; changing material, blur, tint updates existing components and overlays. Content-only parts share their containing surface instead of adding another backdrop filter.</p>
<pre><code class="language-ts">import { inject } from &#39;@angular/core&#39;;
import { ThemingService } from &#39;@filip.mazev/blocks/core&#39;;

private readonly theme = inject(ThemingService);

// Application-wide, including open overlays.
this.theme.setAppearance({ material: &#39;glass&#39;, blur: 10, tint: 0.5 });
// Opaque presentation retains the same layout and component API.
this.theme.setAppearance({ material: &#39;solid&#39; });
</code></pre>
<p><code>BxA11yService</code> controls reduced motion; reduced transparency and forced colors receive opaque presentation. Glass is decorative and does not replace labels, focus states, or semantic control states.</p>
<h2>Behavior and accessibility</h2>
<p>Render only when validation should be shown. Tie the input to the error ID with <code>aria-describedby</code> and update <code>aria-invalid</code> as needed. This component does not run validation.</p>
<h2>Playground</h2>
<p>Open <code>/components/error</code> for a working example and its current value or action result.</p>
`,"projects/blocks/forms/directives/slider/README.md":`<h1>Slider</h1>
<p><code>SliderDirective</code> gives a native range input a glass thumb, a recessed track, and a value fill. Native keyboard, touch, disabled, minimum, maximum, step, and Angular forms behavior are preserved.</p>
<pre><code class="language-ts">import { SliderDirective } from &#39;@filip.mazev/blocks/forms&#39;;
</code></pre>
<pre><code class="language-html">&lt;label for=&quot;volume&quot;&gt;Volume&lt;/label&gt;
&lt;input id=&quot;volume&quot; type=&quot;range&quot; bxSlider min=&quot;0&quot; max=&quot;100&quot; [formControl]=&quot;volume&quot; /&gt;
</code></pre>
<p>Import the directive into your component and include the existing Blocks core stylesheet. The directive also supports <code>ngModel</code> or native <code>[value]</code> and <code>(input)</code> bindings. It reads programmatic value changes after Angular renders, so resetting a form updates the fill too.</p>
<p>The slider inherits semantic theme colors. Solid material, reduced transparency, increased contrast, and unsupported backdrop filtering use an opaque thumb. WebKit/Blink and Firefox have separate native thumb and track rules. Provide an associated label or <code>aria-label</code> for every slider.</p>
`,"projects/blocks/icons/components/README.md":`<h1>Icon</h1>
<p>An asynchronously loaded SVG icon using semantic foreground and background tokens.</p>
<h2>Import</h2>
<pre><code class="language-ts">import { Icon } from &#39;@filip.mazev/blocks/icons&#39;;
</code></pre>
<p>Add the standalone component or directive to your component&#39;s <code>imports</code>.</p>
<h2>Usage</h2>
<pre><code class="language-html">&lt;bx-icon name=&quot;sparkles&quot; size=&quot;32&quot; color=&quot;text-primary&quot; [decorative]=&quot;false&quot; ariaLabel=&quot;Highlights&quot; /&gt;
</code></pre>
<h2>API</h2>
<p><code>name</code> is required. <code>size</code>, <code>strokeWidth</code>, <code>color</code>, <code>bgColor</code>, <code>decorative</code>, <code>ariaLabel</code> configure rendering. Color accepts a semantic token or themed color; <code>bgColor=&quot;auto&quot;</code> derives a complementary token.</p>
<h2>Appearance</h2>
<p>Appearance uses Blocks semantic colors, spacing, radius and motion tokens. Glass surfaces inherit the application configuration from <code>ThemingService</code>; changing material, blur, tint updates existing components and overlays. Content-only parts share their containing surface instead of adding another backdrop filter.</p>
<pre><code class="language-ts">import { inject } from &#39;@angular/core&#39;;
import { ThemingService } from &#39;@filip.mazev/blocks/core&#39;;

private readonly theme = inject(ThemingService);

// Application-wide, including open overlays.
this.theme.setAppearance({ material: &#39;glass&#39;, blur: 10, tint: 0.5 });
// Opaque presentation retains the same layout and component API.
this.theme.setAppearance({ material: &#39;solid&#39; });
</code></pre>
<p><code>BxA11yService</code> controls reduced motion; reduced transparency and forced colors receive opaque presentation. Glass is decorative and does not replace labels, focus states, or semantic control states.</p>
<h2>Behavior and accessibility</h2>
<p>Leave decorative icons hidden from assistive technology; meaningful standalone icons need <code>decorative=false</code> and <code>ariaLabel</code>. Label icon buttons on the button itself. The catalog paginates icon previews to bound SVG work.</p>
<h2>Playground</h2>
<p>Open <code>/components/icon</code> for a working example and its current value or action result.</p>
`,"projects/blocks/modal/components/README.md":`<h1>Modal core</h1>
<p>The service-owned host that composes modal content and chooses the active layout.</p>
<h2>Import</h2>
<pre><code class="language-ts">import { ModalCore } from &#39;@filip.mazev/blocks/modal&#39;;
</code></pre>
<p>Add the standalone component or directive to your component&#39;s <code>imports</code>.</p>
<h2>Usage</h2>
<pre><code class="language-html">&lt;!-- Open from an action in your template --&gt;
&lt;button bx-button (click)=&quot;openModal()&quot;&gt;Open modal core&lt;/button&gt;
</code></pre>
<h2>API</h2>
<p><code>ModalService.open(ContentComponent, config)</code> accepts data, header, style, close behavior and guards. Style <code>layout</code> selects center, left, right or bottom-sheet; <code>animate</code>, <code>hasBackdrop</code>, and <code>showCloseButton</code> customize presentation. Observe <code>afterClosed()</code> for the close result.</p>
<pre><code class="language-ts">this.modals.open(DialogContent, {
  header: { text: &quot;Modal core&quot; },
  style: { layout: &quot;center&quot;, hasBackdrop: true }
});
</code></pre>
<h2>Appearance</h2>
<p>Appearance uses Blocks semantic colors, spacing, radius and motion tokens. Glass surfaces inherit the application configuration from <code>ThemingService</code>; changing material, blur, tint updates existing components and overlays. Content-only parts share their containing surface instead of adding another backdrop filter.</p>
<pre><code class="language-ts">import { inject } from &#39;@angular/core&#39;;
import { ThemingService } from &#39;@filip.mazev/blocks/core&#39;;

private readonly theme = inject(ThemingService);

// Application-wide, including open overlays.
this.theme.setAppearance({ material: &#39;glass&#39;, blur: 10, tint: 0.5 });
// Opaque presentation retains the same layout and component API.
this.theme.setAppearance({ material: &#39;solid&#39; });
</code></pre>
<p><code>BxA11yService</code> controls reduced motion; reduced transparency and forced colors receive opaque presentation. Glass is decorative and does not replace labels, focus states, or semantic control states.</p>
<h2>Behavior and accessibility</h2>
<p>Open through <code>ModalService</code> so focus management, close guards, backdrop behavior, lifecycle and cleanup remain coordinated. <code>Modal</code> content receives its typed data and <code>ModalRef</code>; call <code>modal.close(mode, result)</code> to return a result. Do not instantiate service-owned view wrappers as general page containers.</p>
<h2>Playground</h2>
<p>Open <code>/components/modal-core</code> for a working example and its current value or action result.</p>
`,"projects/blocks/modal/components/shared/ui/backdrop/README.md":`<h1>Modal backdrop</h1>
<p>The background scrim that separates an open modal from page content.</p>
<h2>Import</h2>
<pre><code class="language-ts">import { ModalBackdrop } from &#39;@filip.mazev/blocks/modal&#39;;
</code></pre>
<p>Add the standalone component or directive to your component&#39;s <code>imports</code>.</p>
<h2>Usage</h2>
<pre><code class="language-html">&lt;!-- Open from an action in your template --&gt;
&lt;button bx-button (click)=&quot;openModal()&quot;&gt;Open modal backdrop&lt;/button&gt;
</code></pre>
<h2>API</h2>
<p><code>ModalService.open(ContentComponent, config)</code> accepts data, header, style, close behavior and guards. Style <code>layout</code> selects center, left, right or bottom-sheet; <code>animate</code>, <code>hasBackdrop</code>, and <code>showCloseButton</code> customize presentation. Observe <code>afterClosed()</code> for the close result.</p>
<pre><code class="language-ts">this.modals.open(DialogContent, {
  header: { text: &quot;Modal backdrop&quot; },
  style: { layout: &quot;center&quot;, hasBackdrop: true }
});
</code></pre>
<h2>Appearance</h2>
<p>Appearance uses Blocks semantic colors, spacing, radius and motion tokens. Glass surfaces inherit the application configuration from <code>ThemingService</code>; changing material, blur, tint updates existing components and overlays. Content-only parts share their containing surface instead of adding another backdrop filter.</p>
<pre><code class="language-ts">import { inject } from &#39;@angular/core&#39;;
import { ThemingService } from &#39;@filip.mazev/blocks/core&#39;;

private readonly theme = inject(ThemingService);

// Application-wide, including open overlays.
this.theme.setAppearance({ material: &#39;glass&#39;, blur: 10, tint: 0.5 });
// Opaque presentation retains the same layout and component API.
this.theme.setAppearance({ material: &#39;solid&#39; });
</code></pre>
<p><code>BxA11yService</code> controls reduced motion; reduced transparency and forced colors receive opaque presentation. Glass is decorative and does not replace labels, focus states, or semantic control states.</p>
<h2>Behavior and accessibility</h2>
<p>Open through <code>ModalService</code> so focus management, close guards, backdrop behavior, lifecycle and cleanup remain coordinated. <code>Modal</code> content receives its typed data and <code>ModalRef</code>; call <code>modal.close(mode, result)</code> to return a result. Do not instantiate service-owned view wrappers as general page containers.</p>
<h2>Playground</h2>
<p>Open <code>/components/modal-backdrop</code> for a working example and its current value or action result.</p>
`,"projects/blocks/modal/components/shared/ui/banner/README.md":`<h1>Modal banner</h1>
<p>The shared modal heading, semantic icon and close action.</p>
<h2>Import</h2>
<pre><code class="language-ts">import { ModalBanner } from &#39;@filip.mazev/blocks/modal&#39;;
</code></pre>
<p>Add the standalone component or directive to your component&#39;s <code>imports</code>.</p>
<h2>Usage</h2>
<pre><code class="language-html">&lt;bx-modal-banner [header]=&quot;{ text: &#39;Project settings&#39; }&quot; [showCloseButton]=&quot;true&quot; (close)=&quot;handleClose($event)&quot; /&gt;
</code></pre>
<h2>API</h2>
<p>Required inputs: <code>header</code> (header config or undefined), <code>showCloseButton</code> (boolean). <code>close</code> emits a modal close mode or undefined. Header supports text and an optional icon configuration.</p>
<h2>Appearance</h2>
<p>Appearance uses Blocks semantic colors, spacing, radius and motion tokens. Glass surfaces inherit the application configuration from <code>ThemingService</code>; changing material, blur, tint updates existing components and overlays. Content-only parts share their containing surface instead of adding another backdrop filter.</p>
<pre><code class="language-ts">import { inject } from &#39;@angular/core&#39;;
import { ThemingService } from &#39;@filip.mazev/blocks/core&#39;;

private readonly theme = inject(ThemingService);

// Application-wide, including open overlays.
this.theme.setAppearance({ material: &#39;glass&#39;, blur: 10, tint: 0.5 });
// Opaque presentation retains the same layout and component API.
this.theme.setAppearance({ material: &#39;solid&#39; });
</code></pre>
<p><code>BxA11yService</code> controls reduced motion; reduced transparency and forced colors receive opaque presentation. Glass is decorative and does not replace labels, focus states, or semantic control states.</p>
<h2>Behavior and accessibility</h2>
<p>Prefer configuring <code>header</code> on ModalService for a normal dialog. Direct use is available for custom composition; ensure the surrounding dialog has an accessible name and handle close output.</p>
<h2>Playground</h2>
<p>Open <code>/components/modal-banner</code> for a working example and its current value or action result.</p>
`,"projects/blocks/modal/components/views/bottom-sheet/README.md":`<h1>Bottom sheet</h1>
<p>A bottom-aligned modal surface suitable for compact actions and mobile layouts.</p>
<h2>Import</h2>
<pre><code class="language-ts">import { ModalBottomSheet } from &#39;@filip.mazev/blocks/modal&#39;;
</code></pre>
<p>Add the standalone component or directive to your component&#39;s <code>imports</code>.</p>
<h2>Usage</h2>
<pre><code class="language-html">&lt;!-- Open from an action in your template --&gt;
&lt;button bx-button (click)=&quot;openModal()&quot;&gt;Open bottom sheet&lt;/button&gt;
</code></pre>
<h2>API</h2>
<p><code>ModalService.open(ContentComponent, config)</code> accepts data, header, style, close behavior and guards. Style <code>layout</code> selects center, left, right or bottom-sheet; <code>animate</code>, <code>hasBackdrop</code>, and <code>showCloseButton</code> customize presentation. Observe <code>afterClosed()</code> for the close result.</p>
<pre><code class="language-ts">this.modals.open(DialogContent, {
  header: { text: &quot;Bottom sheet&quot; },
  style: { layout: &quot;bottom-sheet&quot;, hasBackdrop: true }
});
</code></pre>
<h2>Appearance</h2>
<p>Appearance uses Blocks semantic colors, spacing, radius and motion tokens. Glass surfaces inherit the application configuration from <code>ThemingService</code>; changing material, blur, tint updates existing components and overlays. Content-only parts share their containing surface instead of adding another backdrop filter.</p>
<pre><code class="language-ts">import { inject } from &#39;@angular/core&#39;;
import { ThemingService } from &#39;@filip.mazev/blocks/core&#39;;

private readonly theme = inject(ThemingService);

// Application-wide, including open overlays.
this.theme.setAppearance({ material: &#39;glass&#39;, blur: 10, tint: 0.5 });
// Opaque presentation retains the same layout and component API.
this.theme.setAppearance({ material: &#39;solid&#39; });
</code></pre>
<p><code>BxA11yService</code> controls reduced motion; reduced transparency and forced colors receive opaque presentation. Glass is decorative and does not replace labels, focus states, or semantic control states.</p>
<h2>Behavior and accessibility</h2>
<p>Open through <code>ModalService</code> so focus management, close guards, backdrop behavior, lifecycle and cleanup remain coordinated. <code>Modal</code> content receives its typed data and <code>ModalRef</code>; call <code>modal.close(mode, result)</code> to return a result. Do not instantiate service-owned view wrappers as general page containers.</p>
<h2>Playground</h2>
<p>Open <code>/components/modal-bottom-sheet</code> for a working example and its current value or action result.</p>
`,"projects/blocks/modal/components/views/centered/README.md":`<h1>Centered modal</h1>
<p>A focused dialog centered in the available viewport.</p>
<h2>Import</h2>
<pre><code class="language-ts">import { ModalCentered } from &#39;@filip.mazev/blocks/modal&#39;;
</code></pre>
<p>Add the standalone component or directive to your component&#39;s <code>imports</code>.</p>
<h2>Usage</h2>
<pre><code class="language-html">&lt;!-- Open from an action in your template --&gt;
&lt;button bx-button (click)=&quot;openModal()&quot;&gt;Open centered modal&lt;/button&gt;
</code></pre>
<h2>API</h2>
<p><code>ModalService.open(ContentComponent, config)</code> accepts data, header, style, close behavior and guards. Style <code>layout</code> selects center, left, right or bottom-sheet; <code>animate</code>, <code>hasBackdrop</code>, and <code>showCloseButton</code> customize presentation. Observe <code>afterClosed()</code> for the close result.</p>
<pre><code class="language-ts">this.modals.open(DialogContent, {
  header: { text: &quot;Centered modal&quot; },
  style: { layout: &quot;center&quot;, hasBackdrop: true }
});
</code></pre>
<h2>Appearance</h2>
<p>Appearance uses Blocks semantic colors, spacing, radius and motion tokens. Glass surfaces inherit the application configuration from <code>ThemingService</code>; changing material, blur, tint updates existing components and overlays. Content-only parts share their containing surface instead of adding another backdrop filter.</p>
<pre><code class="language-ts">import { inject } from &#39;@angular/core&#39;;
import { ThemingService } from &#39;@filip.mazev/blocks/core&#39;;

private readonly theme = inject(ThemingService);

// Application-wide, including open overlays.
this.theme.setAppearance({ material: &#39;glass&#39;, blur: 10, tint: 0.5 });
// Opaque presentation retains the same layout and component API.
this.theme.setAppearance({ material: &#39;solid&#39; });
</code></pre>
<p><code>BxA11yService</code> controls reduced motion; reduced transparency and forced colors receive opaque presentation. Glass is decorative and does not replace labels, focus states, or semantic control states.</p>
<h2>Behavior and accessibility</h2>
<p>Open through <code>ModalService</code> so focus management, close guards, backdrop behavior, lifecycle and cleanup remain coordinated. <code>Modal</code> content receives its typed data and <code>ModalRef</code>; call <code>modal.close(mode, result)</code> to return a result. Do not instantiate service-owned view wrappers as general page containers.</p>
<h2>Playground</h2>
<p>Open <code>/components/modal-centered</code> for a working example and its current value or action result.</p>
`,"projects/blocks/modal/components/views/side/README.md":`<h1>Side modal</h1>
<p>A left or right panel for editing alongside the page context.</p>
<h2>Import</h2>
<pre><code class="language-ts">import { ModalSide } from &#39;@filip.mazev/blocks/modal&#39;;
</code></pre>
<p>Add the standalone component or directive to your component&#39;s <code>imports</code>.</p>
<h2>Usage</h2>
<pre><code class="language-html">&lt;!-- Open from an action in your template --&gt;
&lt;button bx-button (click)=&quot;openModal()&quot;&gt;Open side modal&lt;/button&gt;
</code></pre>
<h2>API</h2>
<p><code>ModalService.open(ContentComponent, config)</code> accepts data, header, style, close behavior and guards. Style <code>layout</code> selects center, left, right or bottom-sheet; <code>animate</code>, <code>hasBackdrop</code>, and <code>showCloseButton</code> customize presentation. Observe <code>afterClosed()</code> for the close result.</p>
<pre><code class="language-ts">this.modals.open(DialogContent, {
  header: { text: &quot;Side modal&quot; },
  style: { layout: &quot;right&quot;, hasBackdrop: true }
});
</code></pre>
<h2>Appearance</h2>
<p>Appearance uses Blocks semantic colors, spacing, radius and motion tokens. Glass surfaces inherit the application configuration from <code>ThemingService</code>; changing material, blur, tint updates existing components and overlays. Content-only parts share their containing surface instead of adding another backdrop filter.</p>
<pre><code class="language-ts">import { inject } from &#39;@angular/core&#39;;
import { ThemingService } from &#39;@filip.mazev/blocks/core&#39;;

private readonly theme = inject(ThemingService);

// Application-wide, including open overlays.
this.theme.setAppearance({ material: &#39;glass&#39;, blur: 10, tint: 0.5 });
// Opaque presentation retains the same layout and component API.
this.theme.setAppearance({ material: &#39;solid&#39; });
</code></pre>
<p><code>BxA11yService</code> controls reduced motion; reduced transparency and forced colors receive opaque presentation. Glass is decorative and does not replace labels, focus states, or semantic control states.</p>
<h2>Behavior and accessibility</h2>
<p>Open through <code>ModalService</code> so focus management, close guards, backdrop behavior, lifecycle and cleanup remain coordinated. <code>Modal</code> content receives its typed data and <code>ModalRef</code>; call <code>modal.close(mode, result)</code> to return a result. Do not instantiate service-owned view wrappers as general page containers.</p>
<h2>Playground</h2>
<p>Open <code>/components/modal-side</code> for a working example and its current value or action result.</p>
`,"projects/blocks/modal/directives/footer/README.md":`<h1>Modal footer</h1>
<p>Projects custom footer content into the active Blocks modal layout.</p>
<h2>Import</h2>
<pre><code class="language-ts">import { ModalFooterDirective } from &#39;@filip.mazev/blocks/modal&#39;;
</code></pre>
<p>Add the standalone component or directive to your component&#39;s <code>imports</code>.</p>
<h2>Usage</h2>
<pre><code class="language-html">&lt;div *appModalFooter&gt;Custom footer content&lt;/div&gt;
</code></pre>
<h2>API</h2>
<p>A standalone structural directive. It captures a TemplateRef and registers it with the owning ModalCore; it has no public inputs.</p>
<h2>Appearance</h2>
<p>Appearance uses Blocks semantic colors, spacing, radius and motion tokens. Glass surfaces inherit the application configuration from <code>ThemingService</code>; changing material, blur, tint updates existing components and overlays. Content-only parts share their containing surface instead of adding another backdrop filter.</p>
<pre><code class="language-ts">import { inject } from &#39;@angular/core&#39;;
import { ThemingService } from &#39;@filip.mazev/blocks/core&#39;;

private readonly theme = inject(ThemingService);

// Application-wide, including open overlays.
this.theme.setAppearance({ material: &#39;glass&#39;, blur: 10, tint: 0.5 });
// Opaque presentation retains the same layout and component API.
this.theme.setAppearance({ material: &#39;solid&#39; });
</code></pre>
<p><code>BxA11yService</code> controls reduced motion; reduced transparency and forced colors receive opaque presentation. Glass is decorative and does not replace labels, focus states, or semantic control states.</p>
<h2>Behavior and accessibility</h2>
<p>Use only inside content opened by ModalService. The template moves to the active modal view. Keep action buttons keyboard accessible and use ModalRef to close with a result. Outside a modal the directive emits a development warning.</p>
<h2>Playground</h2>
<p>Open <code>/components/modal-footer</code> for a working example and its current value or action result.</p>
`,"projects/blocks/modal/directives/header/README.md":`<h1>Modal header</h1>
<p>Projects custom header content into the active Blocks modal layout.</p>
<h2>Import</h2>
<pre><code class="language-ts">import { ModalHeaderDirective } from &#39;@filip.mazev/blocks/modal&#39;;
</code></pre>
<p>Add the standalone component or directive to your component&#39;s <code>imports</code>.</p>
<h2>Usage</h2>
<pre><code class="language-html">&lt;div *appModalHeader&gt;Custom header content&lt;/div&gt;
</code></pre>
<h2>API</h2>
<p>A standalone structural directive. It captures a TemplateRef and registers it with the owning ModalCore; it has no public inputs.</p>
<h2>Appearance</h2>
<p>Appearance uses Blocks semantic colors, spacing, radius and motion tokens. Glass surfaces inherit the application configuration from <code>ThemingService</code>; changing material, blur, tint updates existing components and overlays. Content-only parts share their containing surface instead of adding another backdrop filter.</p>
<pre><code class="language-ts">import { inject } from &#39;@angular/core&#39;;
import { ThemingService } from &#39;@filip.mazev/blocks/core&#39;;

private readonly theme = inject(ThemingService);

// Application-wide, including open overlays.
this.theme.setAppearance({ material: &#39;glass&#39;, blur: 10, tint: 0.5 });
// Opaque presentation retains the same layout and component API.
this.theme.setAppearance({ material: &#39;solid&#39; });
</code></pre>
<p><code>BxA11yService</code> controls reduced motion; reduced transparency and forced colors receive opaque presentation. Glass is decorative and does not replace labels, focus states, or semantic control states.</p>
<h2>Behavior and accessibility</h2>
<p>Use only inside content opened by ModalService. The template moves to the active modal view. Keep action buttons keyboard accessible and use ModalRef to close with a result. Outside a modal the directive emits a development warning.</p>
<h2>Playground</h2>
<p>Open <code>/components/modal-header</code> for a working example and its current value or action result.</p>
`,"projects/blocks/navigation/components/breadcrumbs/README.md":`<h1>Breadcrumbs</h1>
<p>A route-aware trail derived from Blocks navigation metadata.</p>
<h2>Import</h2>
<pre><code class="language-ts">import { Breadcrumbs } from &#39;@filip.mazev/blocks/navigation&#39;;
</code></pre>
<p>Add the standalone component or directive to your component&#39;s <code>imports</code>.</p>
<h2>Usage</h2>
<pre><code class="language-html">&lt;bx-breadcrumbs [minimumBreadcrumbs]=&quot;1&quot; divider=&quot;chevron-right&quot; /&gt;
</code></pre>
<h2>API</h2>
<p><code>minimumBreadcrumbs</code> defaults to 2; values below 1 are clamped. <code>divider</code> accepts an icon name. Route labels come from <code>withNav</code> metadata and <code>NavigationService</code>.</p>
<h2>Appearance</h2>
<p>Appearance uses Blocks semantic colors, spacing, radius and motion tokens. Glass surfaces inherit the application configuration from <code>ThemingService</code>; changing material, blur, tint updates existing components and overlays. Content-only parts share their containing surface instead of adding another backdrop filter.</p>
<pre><code class="language-ts">import { inject } from &#39;@angular/core&#39;;
import { ThemingService } from &#39;@filip.mazev/blocks/core&#39;;

private readonly theme = inject(ThemingService);

// Application-wide, including open overlays.
this.theme.setAppearance({ material: &#39;glass&#39;, blur: 10, tint: 0.5 });
// Opaque presentation retains the same layout and component API.
this.theme.setAppearance({ material: &#39;solid&#39; });
</code></pre>
<p><code>BxA11yService</code> controls reduced motion; reduced transparency and forced colors receive opaque presentation. Glass is decorative and does not replace labels, focus states, or semantic control states.</p>
<h2>Behavior and accessibility</h2>
<p>Register metadata with <code>withNav</code> and provide navigation in application configuration. Breadcrumbs navigate using the router and update after navigation. This demo lives under Components so the trail has a real parent route.</p>
<h2>Playground</h2>
<p>Open <code>/components/breadcrumbs</code> for a working example and its current value or action result.</p>
`,"projects/blocks/primitives/components/menu-item/README.md":`<h1>Menu item</h1>
<p>A menu action with optional icons, a shortcut hint, and destructive intent.</p>
<h2>Import</h2>
<pre><code class="language-ts">import { MenuItem } from &#39;@filip.mazev/blocks/primitives&#39;;
</code></pre>
<p>Add the standalone component or directive to your component&#39;s <code>imports</code>.</p>
<h2>Usage</h2>
<pre><code class="language-html">&lt;bx-menu-item label=&quot;Delete&quot; icon=&quot;trash-2&quot; [danger]=&quot;true&quot; (action)=&quot;remove()&quot; /&gt;
</code></pre>
<h2>API</h2>
<p><code>label</code>, <code>icon</code>, <code>endIcon</code>, <code>shortcut</code>, <code>disabled</code>, <code>danger</code>, and <code>wrapLabel</code>. Set <code>wrapLabel</code> to <code>true</code> when a menu item should wrap long content instead of truncating it. <code>action</code> emits the mouse event for enabled items.</p>
<h2>Appearance</h2>
<p>Appearance uses Blocks semantic colors, spacing, radius and motion tokens. Glass surfaces inherit the application configuration from <code>ThemingService</code>; changing material, blur, tint updates existing components and overlays. Content-only parts share their containing surface instead of adding another backdrop filter.</p>
<pre><code class="language-ts">import { inject } from &#39;@angular/core&#39;;
import { ThemingService } from &#39;@filip.mazev/blocks/core&#39;;

private readonly theme = inject(ThemingService);

// Application-wide, including open overlays.
this.theme.setAppearance({ material: &#39;glass&#39;, blur: 10, tint: 0.5 });
// Opaque presentation retains the same layout and component API.
this.theme.setAppearance({ material: &#39;solid&#39; });
</code></pre>
<p><code>BxA11yService</code> controls reduced motion; reduced transparency and forced colors receive opaque presentation. Glass is decorative and does not replace labels, focus states, or semantic control states.</p>
<h2>Behavior and accessibility</h2>
<p>Use <code>action</code> for activation and <code>disabled</code> for unavailable commands. Shortcut hints describe a binding; registering the actual shortcut remains the application\u2019s responsibility.</p>
<h2>Playground</h2>
<p>Open <code>/components/menu-item</code> for a working example and its current value or action result.</p>
`,"projects/blocks/primitives/components/menu/README.md":`<h1>Menu</h1>
<p>A shared surface for related menu actions.</p>
<h2>Import</h2>
<pre><code class="language-ts">import { Menu, MenuItem } from &#39;@filip.mazev/blocks/primitives&#39;;
</code></pre>
<p>Add the standalone component or directive to your component&#39;s <code>imports</code>.</p>
<h2>Usage</h2>
<pre><code class="language-html">&lt;bx-menu&gt;
  &lt;bx-menu-item label=&quot;Duplicate&quot; icon=&quot;copy&quot; (action)=&quot;duplicate()&quot; /&gt;
  &lt;bx-menu-item label=&quot;Archive&quot; icon=&quot;archive&quot; (action)=&quot;archive()&quot; /&gt;
&lt;/bx-menu&gt;
</code></pre>
<h2>API</h2>
<p><code>Menu</code> projects its children and provides the menu surface. Use <code>MenuItem</code> for consistent action styling. Place it in <code>bxDropdown</code> for positioned dismissal and keyboard behavior.</p>
<h2>Appearance</h2>
<p>Appearance uses Blocks semantic colors, spacing, radius and motion tokens. Glass surfaces inherit the application configuration from <code>ThemingService</code>; changing material, blur, tint updates existing components and overlays. Content-only parts share their containing surface instead of adding another backdrop filter.</p>
<pre><code class="language-ts">import { inject } from &#39;@angular/core&#39;;
import { ThemingService } from &#39;@filip.mazev/blocks/core&#39;;

private readonly theme = inject(ThemingService);

// Application-wide, including open overlays.
this.theme.setAppearance({ material: &#39;glass&#39;, blur: 10, tint: 0.5 });
// Opaque presentation retains the same layout and component API.
this.theme.setAppearance({ material: &#39;solid&#39; });
</code></pre>
<p><code>BxA11yService</code> controls reduced motion; reduced transparency and forced colors receive opaque presentation. Glass is decorative and does not replace labels, focus states, or semantic control states.</p>
<h2>Behavior and accessibility</h2>
<p>Keep menu labels action-oriented. The container shares one glass backing with its items, avoiding stacked blur. Avoid nested interactive controls inside one item.</p>
<h2>Playground</h2>
<p>Open <code>/components/menu</code> for a working example and its current value or action result.</p>
`,"projects/blocks/primitives/components/tooltip/README.md":`<h1>Tooltip</h1>
<p>A short descriptive surface for supplementary help.</p>
<h2>Import</h2>
<pre><code class="language-ts">import { Tooltip } from &#39;@filip.mazev/blocks/primitives&#39;;
</code></pre>
<p>Add the standalone component or directive to your component&#39;s <code>imports</code>.</p>
<h2>Usage</h2>
<pre><code class="language-html">&lt;bx-tooltip text=&quot;Changes are saved automatically.&quot; /&gt;
</code></pre>
<h2>API</h2>
<p><code>text</code> is required and accepts plain text or a translation key object. For automatic positioning and trigger handling, use <code>TooltipDirective</code> instead.</p>
<h2>Appearance</h2>
<p>Appearance uses Blocks semantic colors, spacing, radius and motion tokens. Glass surfaces inherit the application configuration from <code>ThemingService</code>; changing material, blur, tint updates existing components and overlays. Content-only parts share their containing surface instead of adding another backdrop filter.</p>
<pre><code class="language-ts">import { inject } from &#39;@angular/core&#39;;
import { ThemingService } from &#39;@filip.mazev/blocks/core&#39;;

private readonly theme = inject(ThemingService);

// Application-wide, including open overlays.
this.theme.setAppearance({ material: &#39;glass&#39;, blur: 10, tint: 0.5 });
// Opaque presentation retains the same layout and component API.
this.theme.setAppearance({ material: &#39;solid&#39; });
</code></pre>
<p><code>BxA11yService</code> controls reduced motion; reduced transparency and forced colors receive opaque presentation. Glass is decorative and does not replace labels, focus states, or semantic control states.</p>
<h2>Behavior and accessibility</h2>
<p>Do not put essential instructions only in a tooltip. Direct use requires the application to supply positioning, visibility and a relationship to its trigger. Prefer the directive for interactive pages.</p>
<h2>Playground</h2>
<p>Open <code>/components/tooltip</code> for a working example and its current value or action result.</p>
`,"projects/blocks/primitives/directives/context-menu/README.md":`<h1>Context menu</h1>
<p>A menu positioned at a context action\u2019s coordinates.</p>
<h2>Import</h2>
<pre><code class="language-ts">import { ContextMenuDirective, Menu, MenuItem } from &#39;@filip.mazev/blocks/primitives&#39;;
</code></pre>
<p>Add the standalone component or directive to your component&#39;s <code>imports</code>.</p>
<h2>Usage</h2>
<pre><code class="language-html">&lt;div [bxContextMenu]=&quot;actions&quot;&gt;Right-click here&lt;/div&gt;
&lt;ng-template #actions&gt;&lt;bx-menu&gt;&lt;bx-menu-item label=&quot;Copy&quot; (action)=&quot;copy()&quot; /&gt;&lt;/bx-menu&gt;&lt;/ng-template&gt;
</code></pre>
<h2>API</h2>
<p><code>bxContextMenu</code> requires a TemplateRef. <code>open(event: MouseEvent)</code> positions the menu at the event coordinates.</p>
<h2>Appearance</h2>
<p>Appearance uses Blocks semantic colors, spacing, radius and motion tokens. Glass surfaces inherit the application configuration from <code>ThemingService</code>; changing material, blur, tint updates existing components and overlays. Content-only parts share their containing surface instead of adding another backdrop filter.</p>
<pre><code class="language-ts">import { inject } from &#39;@angular/core&#39;;
import { ThemingService } from &#39;@filip.mazev/blocks/core&#39;;

private readonly theme = inject(ThemingService);

// Application-wide, including open overlays.
this.theme.setAppearance({ material: &#39;glass&#39;, blur: 10, tint: 0.5 });
// Opaque presentation retains the same layout and component API.
this.theme.setAppearance({ material: &#39;solid&#39; });
</code></pre>
<p><code>BxA11yService</code> controls reduced motion; reduced transparency and forced colors receive opaque presentation. Glass is decorative and does not replace labels, focus states, or semantic control states.</p>
<h2>Behavior and accessibility</h2>
<p>Always offer the same actions through a visible button or menu. Pointer context menus alone are not accessible on touch devices. The playground includes a visible Open actions button and keyboard equivalent.</p>
<h2>Playground</h2>
<p>Open <code>/components/context-menu</code> for a working example and its current value or action result.</p>
`,"projects/blocks/primitives/directives/dropdown/README.md":`<h1>Dropdown</h1>
<p>A positioned menu that fades in and out without resizing its contents.</p>
<h2>Import</h2>
<pre><code class="language-ts">import { DropdownDirective, Menu, MenuItem } from &#39;@filip.mazev/blocks/primitives&#39;;
</code></pre>
<p>Add the standalone component or directive to your component&#39;s <code>imports</code>.</p>
<h2>Usage</h2>
<pre><code class="language-html">&lt;button bx-button [bxDropdown]=&quot;actions&quot; bxTransition=&quot;fade&quot;&gt;Actions&lt;/button&gt;
&lt;ng-template #actions&gt;
  &lt;bx-menu&gt;&lt;bx-menu-item label=&quot;Save&quot; (action)=&quot;save()&quot; /&gt;&lt;/bx-menu&gt;
&lt;/ng-template&gt;
</code></pre>
<h2>API</h2>
<p><code>bxDropdown</code>: required TemplateRef. <code>placement</code>: overlay placement. <code>bxTransition</code>: fade (default) or none; emerge remains a compatibility alias for fade. Export as <code>bxDropdown</code>; call <code>open()</code>, <code>close()</code>, or <code>toggle()</code>. Read <code>isOpen()</code> and <code>state()</code> for lifecycle.</p>
<h2>Appearance</h2>
<p>Appearance uses Blocks semantic colors, spacing, radius and motion tokens. Glass surfaces inherit the application configuration from <code>ThemingService</code>; changing material, blur, tint updates existing components and overlays. Content-only parts share their containing surface instead of adding another backdrop filter.</p>
<pre><code class="language-ts">import { inject } from &#39;@angular/core&#39;;
import { ThemingService } from &#39;@filip.mazev/blocks/core&#39;;

private readonly theme = inject(ThemingService);

// Application-wide, including open overlays.
this.theme.setAppearance({ material: &#39;glass&#39;, blur: 10, tint: 0.5 });
// Opaque presentation retains the same layout and component API.
this.theme.setAppearance({ material: &#39;solid&#39; });
</code></pre>
<p><code>BxA11yService</code> controls reduced motion; reduced transparency and forced colors receive opaque presentation. Glass is decorative and does not replace labels, focus states, or semantic control states.</p>
<h2>Behavior and accessibility</h2>
<p>Use a real button trigger. The fade interaction supports trigger arrow keys, menu arrows, Home, End and Escape; focus returns on dismissal. Reduced motion skips the fade. Content keeps its full dimensions and the overlay retains a solid backing throughout its lifetime.</p>
<h2>Playground</h2>
<p>Open <code>/components/dropdown</code> for a working example and its current value or action result.</p>
`,"projects/blocks/primitives/directives/tooltip/README.md":`<h1>Tooltip trigger</h1>
<p>Connects a help surface to a trigger using the overlay positioning system.</p>
<h2>Import</h2>
<pre><code class="language-ts">import { TooltipDirective } from &#39;@filip.mazev/blocks/primitives&#39;;
</code></pre>
<p>Add the standalone component or directive to your component&#39;s <code>imports</code>.</p>
<h2>Usage</h2>
<pre><code class="language-html">&lt;button bx-button bxTooltip=&quot;Saves this project&quot; placement=&quot;top&quot;&gt;Save&lt;/button&gt;
</code></pre>
<h2>API</h2>
<p><code>bxTooltip</code>: required text or translation key. <code>placement</code>: top, bottom, left, right, and supported aligned placements. <code>show()</code> and <code>hide()</code> expose explicit lifecycle control.</p>
<h2>Appearance</h2>
<p>Appearance uses Blocks semantic colors, spacing, radius and motion tokens. Glass surfaces inherit the application configuration from <code>ThemingService</code>; changing material, blur, tint updates existing components and overlays. Content-only parts share their containing surface instead of adding another backdrop filter.</p>
<pre><code class="language-ts">import { inject } from &#39;@angular/core&#39;;
import { ThemingService } from &#39;@filip.mazev/blocks/core&#39;;

private readonly theme = inject(ThemingService);

// Application-wide, including open overlays.
this.theme.setAppearance({ material: &#39;glass&#39;, blur: 10, tint: 0.5 });
// Opaque presentation retains the same layout and component API.
this.theme.setAppearance({ material: &#39;solid&#39; });
</code></pre>
<p><code>BxA11yService</code> controls reduced motion; reduced transparency and forced colors receive opaque presentation. Glass is decorative and does not replace labels, focus states, or semantic control states.</p>
<h2>Behavior and accessibility</h2>
<p>Keep trigger text meaningful without its tooltip. Use short, non-interactive text; put interactive help in a menu or dialog.</p>
<h2>Playground</h2>
<p>Open <code>/components/tooltip-directive</code> for a working example and its current value or action result.</p>
`,"projects/blocks/toastr/components/README.md":`<h1>Toast core</h1>
<p>The toast lifecycle host with progress, dismissal and content composition.</p>
<h2>Import</h2>
<pre><code class="language-ts">import { ToastCore, ToastrService } from &#39;@filip.mazev/blocks/toastr&#39;;
</code></pre>
<p>Add the standalone component or directive to your component&#39;s <code>imports</code>.</p>
<h2>Usage</h2>
<pre><code class="language-html">&lt;button bx-button (click)=&quot;notify()&quot;&gt;Show notification&lt;/button&gt;
</code></pre>
<h2>API</h2>
<p>Use <code>ToastrService.queueToast(ContentComponent, config)</code> for custom content, or queueInfo, queueSuccess, queueWarning and queueDanger for common messages. Config controls position, durationInMs, progress and close actions.</p>
<h2>Appearance</h2>
<p>Appearance uses Blocks semantic colors, spacing, radius and motion tokens. Glass surfaces inherit the application configuration from <code>ThemingService</code>; changing material, blur, tint updates existing components and overlays. Content-only parts share their containing surface instead of adding another backdrop filter.</p>
<pre><code class="language-ts">import { inject } from &#39;@angular/core&#39;;
import { ThemingService } from &#39;@filip.mazev/blocks/core&#39;;

private readonly theme = inject(ThemingService);

// Application-wide, including open overlays.
this.theme.setAppearance({ material: &#39;glass&#39;, blur: 10, tint: 0.5 });
// Opaque presentation retains the same layout and component API.
this.theme.setAppearance({ material: &#39;solid&#39; });
</code></pre>
<p><code>BxA11yService</code> controls reduced motion; reduced transparency and forced colors receive opaque presentation. Glass is decorative and does not replace labels, focus states, or semantic control states.</p>
<h2>Behavior and accessibility</h2>
<p>Create notifications through the service; the wrapper owns timers, pause/resume and cleanup. Keep important information available outside transient messages. The playground\u2019s toast page can show all four semantic intents.</p>
<h2>Playground</h2>
<p>Open <code>/components/toast-core</code> for a working example and its current value or action result.</p>
`,"projects/blocks/toastr/components/views/simple-toast/README.md":`<h1>Simple toast</h1>
<p>A notification with a semantic icon, optional title and message.</p>
<h2>Import</h2>
<pre><code class="language-ts">import { SimpleToast, ToastrService } from &#39;@filip.mazev/blocks/toastr&#39;;
</code></pre>
<p>Add the standalone component or directive to your component&#39;s <code>imports</code>.</p>
<h2>Usage</h2>
<pre><code class="language-html">&lt;button bx-button (click)=&quot;notify()&quot;&gt;Show success&lt;/button&gt;
</code></pre>
<h2>API</h2>
<p>Use <code>toastr.queueSuccess({ title: &quot;Saved&quot;, message: &quot;Your settings are up to date.&quot; })</code>. Equivalent methods queueInfo, queueWarning and queueDanger set the semantic intent. Request fields include position, durationInMs, animate, showCloseButton and showProgessBar (existing API spelling).</p>
<h2>Appearance</h2>
<p>Appearance uses Blocks semantic colors, spacing, radius and motion tokens. Glass surfaces inherit the application configuration from <code>ThemingService</code>; changing material, blur, tint updates existing components and overlays. Content-only parts share their containing surface instead of adding another backdrop filter.</p>
<pre><code class="language-ts">import { inject } from &#39;@angular/core&#39;;
import { ThemingService } from &#39;@filip.mazev/blocks/core&#39;;

private readonly theme = inject(ThemingService);

// Application-wide, including open overlays.
this.theme.setAppearance({ material: &#39;glass&#39;, blur: 10, tint: 0.5 });
// Opaque presentation retains the same layout and component API.
this.theme.setAppearance({ material: &#39;solid&#39; });
</code></pre>
<p><code>BxA11yService</code> controls reduced motion; reduced transparency and forced colors receive opaque presentation. Glass is decorative and does not replace labels, focus states, or semantic control states.</p>
<h2>Behavior and accessibility</h2>
<p>Write a concise message with a clear outcome. Use a modal or an inline message when acknowledgement or a long interaction is required. Simple toast content shares the parent toast glass surface.</p>
<h2>Playground</h2>
<p>Open <code>/components/simple-toast</code> for a working example and its current value or action result.</p>
`};var w={"assets/modal-readme/README.md":`documentation/modal/README.md`,"assets/toastr-readme/README.md":`documentation/toastr/README.md`,"assets/blocks-core-readme/README.md":`documentation/core/README.md`,"assets/core-readme/README.md":`documentation/core/README.md`};var S={"assets/code-snippets/modal/confirm-close-modal.html.txt":`<div>
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
</div>

<div class="button-container" *appModalFooter>
    <button bx-button (click)="confirm()" variant="filled" color="success">Confirm</button>
    <button bx-button (click)="close()" variant="filled" color="danger">Cancel</button>
</div>`,"assets/code-snippets/modal/modal.scss.txt":`@use '@filip.mazev/blocks/core/styles/helpers' as *;

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
`,"assets/code-snippets/modal/modal.ts.txt":`import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { IDemoModalData } from '@playground/interfaces/modals/data/idemo-modal-data.interface';
import { IDemoModalResult } from '@playground/interfaces/modals/result/idemo-modal-result.interface';
import { NgClass } from '@angular/common';
import { ModalHeaderDirective } from '@filip.mazev/blocks/modal';
import { ModalFooterDirective } from '@filip.mazev/blocks/modal';
import { Modal } from '@filip.mazev/blocks/modal';
import { Button } from '@filip.mazev/blocks/forms';

@Component({
  selector: 'app-demo-modal',
  imports: [ModalHeaderDirective, ModalFooterDirective, NgClass, Button],
  templateUrl: './demo-modal.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './demo-modal.scss'
})
export class DemoModal extends Modal<IDemoModalData, IDemoModalResult> {
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
}
`,"assets/code-snippets/modal/styles.scss.txt":`@use '@filip.mazev/blocks/core/styles/index' as bx;
@import '@filip.mazev/blocks/effects/effects.css';

:root {
  @include bx.bx-theme(bx.$orange-light-theme);
}

[data-theme='dark'] {
  @include bx.bx-theme(bx.$orange-dark-theme);
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
`};var A=class s{document=p(B);router=p(Ht);readmeContent=Q(()=>{let e=this.path().replace(/^\/+/,``);return x[w[e]??e]??`<p>This documentation page is unavailable. Run npm run tools:build-docs after adding a README.</p>`});path=re.required();navigateDocumentation(e){if(e.defaultPrevented||e.button!==0||e.ctrlKey||e.metaKey||e.shiftKey||e.altKey)return;let o=e.target?.closest?.(`a[href]`);if(!o||o.hasAttribute(`download`)||o.target&&o.target!==`_self`)return;let n=new URL(o.href,this.document.baseURI),a=new URL(`.`,this.document.baseURI);if(n.origin!==a.origin||!n.pathname.startsWith(a.pathname))return;let c=n.pathname.slice(a.pathname.length);/^(?:home|glass|components(?:\/[^/?#]+)?|modal|toastr|icon-catalog)\/?$/.test(c)&&(e.preventDefault(),this.router.navigateByUrl(`/${c}${n.search}${n.hash}`))}static ɵfac=function(t){return new(t||s)};static ɵcmp=Zn({type:s,selectors:[[`app-readme`]],hostBindings:function(t,o){t&1&&Kn(`click`,function(a){return o.navigateDocumentation(a)})},inputs:{path:[1,`path`]},decls:5,vars:1,consts:[[1,`readme-container`],[1,`readme-header`],[1,`readme-content`,3,`innerHTML`]],template:function(t,o){t&1&&(ec(0,`div`,0)(1,`div`,1)(2,`span`),FA(3,`Documentation`),tc()(),hs(4,`article`,2),tc()),t&2&&(CC(4),nc(`innerHTML`,o.readmeContent(),sh))},styles:[`
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
.readme-content[_ngcontent-%COMP%]     code {
  padding: 0.15em 0.35em;
  border-radius: 0.25rem;
  background: var(--%NS%bx-bg-surface-alt);
  font-size: 0.85em;
}
.readme-content[_ngcontent-%COMP%]     pre {
  max-width: 100%;
  overflow-x: auto;
  border: 1px solid var(--%NS%bx-border-default);
  background: var(--%NS%bx-bg-surface);
  border-radius: 0.5rem;
  padding: 1rem;
  line-height: 1.6;
}
.readme-content[_ngcontent-%COMP%]     pre code {
  background: transparent;
  padding: 0;
  white-space: pre;
}
.readme-content[_ngcontent-%COMP%]     blockquote {
  margin-inline: 0;
  padding-left: 1rem;
  border-left: 3px solid var(--%NS%bx-border-brand);
  color: var(--%NS%bx-text-secondary);
}`]})};export{S as n,A as t};