# Browser regression scenarios

`lighting.cjs` bundles the current framework-independent runtime in memory, serves a temporary local fixture and runs native browser regressions with Node's
test runner. It covers spatial colors, proximity, ambient/semantic layering, checked-control emission, label hover, disabled controls, canvas caching, mutation
coalescing, source removal, overlay boundaries, teardown, reduced motion, failed readbacks, image positioning and shadow-root media. Scrolling checks cover
prompt resampling, interpolated image pixels, continuously changing canvases, short environmental color blends and retained lighting on viewport re-entry.
Material shielding checks cover glass and solid containers, external CSS and passive canvas colors, retained local sources, reparenting and inherited portals.

Use an existing Playwright installation (the repository does not add a browser dependency):

```sh
BLOCKS_PLAYWRIGHT_PATH=/absolute/path/to/playwright node --test tools/browser/lighting.cjs
BLOCKS_PLAYWRIGHT_PATH=/absolute/path/to/playwright BLOCKS_BROWSER=webkit node --test tools/browser/lighting.cjs
```

Chrome uses the installed `chrome` channel. WebKit uses Playwright's browser installation; set `PLAYWRIGHT_BROWSERS_PATH` if it lives outside the default cache.
No playground server, package build, generated fixture or repository test-results directory is required.

Menu regressions run against a running playground and cover opaque containers, lightweight native select options, selected option semantics, document and nested
scrolling without pane style writes, above placement, content resizing, reopening, keyboard focus, the CDK fallback, context actions and native top-layer
popovers:

```sh
BLOCKS_PLAYWRIGHT_PATH=/absolute/path/to/playwright node --test tools/browser/menus.cjs
BLOCKS_PLAYWRIGHT_PATH=/absolute/path/to/playwright BLOCKS_BROWSER=webkit node --test tools/browser/menus.cjs
```

`BLOCKS_PLAYGROUND_URL` defaults to `http://localhost:8080`.

The menu suite also uses a mobile touch viewport to check scroll reversals, height changes while menus are open, search focus, filtering growth and cleanup on
reopen. Ordinary page menus use document coordinates so root scrolling needs no JavaScript repositioning or native anchor counter-scroll; fixed/sticky origins,
nested scrollers, backdrops and top-layer contexts retain their existing strategy. Playwright viewport resizing does not reproduce iOS Safari's browser chrome,
keyboard or rubber-band compositor behavior; confirm those on an iPhone.

Button translucency regressions cover the complete slider range (including the minimum tint/blur backing for active refraction and the classic fallback), light
and dark appearances, tint before surface mounting, reduced transparency, high contrast, solid filled actions and transparent text actions. With motion enabled,
they also check immediate material updates across visible surfaces and sustained image-color sampling on all four article controls during nested scrolling.
Selected button checks retain a contour or text underline with reduced transparency. The native runtime suite checks live OS preference changes, local opt-out
precedence, and independently resolved opaque colors on nested surfaces.

```sh
BLOCKS_PLAYWRIGHT_PATH=/absolute/path/to/playwright node --test tools/browser/buttons.cjs
BLOCKS_PLAYWRIGHT_PATH=/absolute/path/to/playwright BLOCKS_BROWSER=webkit node --test tools/browser/buttons.cjs
```

Tabs and the overview's Bring home control have a separate playground suite covering keyboard navigation, disabled and removed tabs, lazy panels, nested
source-file tabs, RTL, narrow layouts, horizontal touch gestures in Chrome and wheel scrolling in WebKit, natural panel flow, code blocks without nested
horizontal scrollers, selected lighting and the Blocks button integration.

The suite also switches reduced transparency on and off while tabs are mounted, checking the visible selection backing and geometry in both themes and variants.

```sh
BLOCKS_PLAYWRIGHT_PATH=/absolute/path/to/playwright node --test tools/browser/tabs.cjs
BLOCKS_PLAYWRIGHT_PATH=/absolute/path/to/playwright BLOCKS_BROWSER=webkit node --test tools/browser/tabs.cjs
```

The previous full run passed in Chrome and WebKit. Firefox could not launch in this local environment; real Safari pixel rendering was not certified by WebKit
snapshots. See the appearance validation record for details.

The overview orb has deterministic physics checks that require no browser:

```sh
node --test tools/browser/orb-physics.cjs
```

For the complete overview interactions, start the playground and run:

```sh
BLOCKS_PLAYWRIGHT_PATH=/absolute/path/to/playwright node --test tools/browser/orb.cjs
```

`BLOCKS_PLAYGROUND_URL` defaults to `http://localhost:8080`. `BLOCKS_BROWSER=webkit` selects WebKit. The checks cover the sleeping swatch and gradual wake-up,
flowing light projected inside glass, semantic mood colors, gentle nudges, flick direction and spin, wall/floor impacts, squash and stretch, anger and cooldown,
return-home controls, the full overview boundary, reduced motion, mobile touch input and lifecycle cleanup. The input model is checked at different frame rates
without a browser. Run GPU-heavy browser suites sequentially when profiling the demo so simultaneous animated backdrops do not compete for resources.

Select positioning regressions explicitly target the Location control and use the Page size control to load all 24 fixture options before measuring. They select
Skopje through the UI instead of relying on the demo's initial selection. Search assertions count option rows rather than pagination actions.

Select closing checks sample animation frames through DOM detachment, covering Escape and switching to a second selector so a completed fade cannot flash back
to full opacity before Angular removes its panel.

Multi-select hover checks cover leaving the menu with zero, one, or several selections: the backing hides or restores immediately without sweeping across
options. Selecting and deselecting a hovered row keeps the backing beneath that row. Keyboard navigation remains available after pointer exit.
