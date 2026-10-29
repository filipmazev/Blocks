# Browser regression scenarios

`lighting.cjs` bundles the current framework-independent runtime in memory, serves a temporary local fixture and runs native browser regressions with Node's test runner. It covers spatial colors, proximity, ambient/semantic layering, checked-control emission, label hover, disabled controls, canvas caching, mutation coalescing, source removal, overlay boundaries, teardown, reduced motion, failed readbacks, image positioning and shadow-root media.

Use an existing Playwright installation (the repository does not add a browser dependency):

```sh
BLOCKS_PLAYWRIGHT_PATH=/absolute/path/to/playwright node --test tools/browser/lighting.cjs
BLOCKS_PLAYWRIGHT_PATH=/absolute/path/to/playwright BLOCKS_BROWSER=webkit node --test tools/browser/lighting.cjs
```

Chrome uses the installed `chrome` channel. WebKit uses Playwright's browser installation; set `PLAYWRIGHT_BROWSERS_PATH` if it lives outside the default cache. No playground server, package build, generated fixture or repository test-results directory is required.

Menu regressions run against a running playground and cover opaque containers, lightweight native select options, selected option semantics, document and nested scrolling without pane style writes, above placement, content resizing, reopening, keyboard focus, the CDK fallback, context actions and native top-layer popovers:

```sh
BLOCKS_PLAYWRIGHT_PATH=/absolute/path/to/playwright node --test tools/browser/menus.cjs
BLOCKS_PLAYWRIGHT_PATH=/absolute/path/to/playwright BLOCKS_BROWSER=webkit node --test tools/browser/menus.cjs
```

`BLOCKS_PLAYGROUND_URL` defaults to `http://localhost:8080`.

Button glassiness regressions cover the complete slider range (including values below 30%), light and dark appearances, tint before surface mounting, reduced transparency, high contrast, solid filled actions and transparent text actions:

```sh
BLOCKS_PLAYWRIGHT_PATH=/absolute/path/to/playwright node --test tools/browser/buttons.cjs
BLOCKS_PLAYWRIGHT_PATH=/absolute/path/to/playwright BLOCKS_BROWSER=webkit node --test tools/browser/buttons.cjs
```

Tabs and the overview's Bring home control have a separate playground suite covering keyboard navigation, disabled and removed tabs, lazy panels, nested source-file tabs, RTL, narrow layouts, horizontal touch gestures in Chrome and wheel scrolling in WebKit, natural panel flow, code blocks without nested horizontal scrollers, selected lighting and the Blocks button integration:

```sh
BLOCKS_PLAYWRIGHT_PATH=/absolute/path/to/playwright node --test tools/browser/tabs.cjs
BLOCKS_PLAYWRIGHT_PATH=/absolute/path/to/playwright BLOCKS_BROWSER=webkit node --test tools/browser/tabs.cjs
```

The previous full run passed in Chrome and WebKit. Firefox could not launch in this local environment; real Safari pixel rendering was not certified by WebKit snapshots. See the appearance validation record for details.

The overview orb has deterministic physics checks that require no browser:

```sh
node --test tools/browser/orb-physics.cjs
```

For the complete overview interactions, start the playground and run:

```sh
BLOCKS_PLAYWRIGHT_PATH=/absolute/path/to/playwright node --test tools/browser/orb.cjs
```

`BLOCKS_PLAYGROUND_URL` defaults to `http://localhost:8080`. `BLOCKS_BROWSER=webkit` selects WebKit. The checks cover the sleeping swatch and gradual wake-up, flowing light projected inside glass, semantic mood colors, gentle nudges, flick direction and spin, wall/floor impacts, squash and stretch, anger and cooldown, return-home controls, the full overview boundary, reduced motion, mobile touch input and lifecycle cleanup. The input model is checked at different frame rates without a browser. Run GPU-heavy browser suites sequentially when profiling the demo so simultaneous animated backdrops do not compete for resources.
