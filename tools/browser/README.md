# Browser regression scenarios

`lighting.cjs` bundles the current framework-independent runtime in memory, serves a temporary local fixture and runs native browser regressions with Node's test runner. It covers spatial colors, proximity, ambient/semantic layering, canvas caching, mutation coalescing, source removal, overlay boundaries, teardown, reduced motion, failed readbacks, image positioning and shadow-root media.

Use an existing Playwright installation (the repository does not add a browser dependency):

```sh
BLOCKS_PLAYWRIGHT_PATH=/absolute/path/to/playwright node --test tools/browser/lighting.cjs
BLOCKS_PLAYWRIGHT_PATH=/absolute/path/to/playwright BLOCKS_BROWSER=webkit node --test tools/browser/lighting.cjs
```

Chrome uses the installed `chrome` channel. WebKit uses Playwright's browser installation; set `PLAYWRIGHT_BROWSERS_PATH` if it lives outside the default cache. No playground server, package build, generated fixture or repository test-results directory is required.

The previous full run passed in Chrome and WebKit. Firefox could not launch in this local environment; real Safari pixel rendering was not certified by WebKit snapshots. See the appearance validation record for details.
