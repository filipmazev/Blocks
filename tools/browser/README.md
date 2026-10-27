# Browser regression scenarios

`glass.spec.ts` retains the existing interaction and rendering regression scenarios. The repository no longer supplies a Playwright configuration or creates a `test-results` directory. To run these scenarios, use an external Playwright configuration with `testDir` pointing here, an output directory outside the repository, and a base URL for a running playground. Build Blocks first for the native runtime fixture.

The previous full run passed in Chrome and WebKit. Firefox could not launch in this local environment; real Safari pixel rendering was not certified by WebKit snapshots. See the appearance validation record for details.
