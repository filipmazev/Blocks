# Blocks

**Blocks** is a comprehensive, modular UI ecosystem for Angular. It bridges the gap between TypeScript logic and SCSS styling to create highly responsive, theme-aware, and interactive applications.

The library consists of a foundational Core package that handles the "physics" of the application (dimensions, scrolling, theming) and a suite of feature-rich Components (like Modals) built on top of that foundation.

## Key Philosophy

### 1. Unified Responsiveness

Blocks treats responsiveness as a shared contract between TypeScript and CSS.

* **In TypeScript**: The WindowDimensionsService provides reactive streams for window size.

* **In SCSS: Mixins** like @include respond-down(sm) map perfectly to the TypeScript thresholds, ensuring your logic and layout never desync.

### 2. Deep Theming

Theming is not an afterthought; it is built into the core.

* Uses a CSS Variable system generated via SCSS maps.
* Supports distinct palettes through a robust token system.
* Easily switch between light, dark, or high-contrast brand themes at runtime.

### 3. Mobile-First Interaction

Components are designed with mobile fidelity in mind.

* Scroll Locking: The ScrollLockService handles complex edge cases (iOS touch chaining, scrollbar layout shifts) automatically when overlays are open.
* Gestures: Modals transform into bottom-sheets on mobile with native-feeling swipe-to-close physics.

## Appearance

Blocks 1.4.0 applies glass through the existing component and theme system. Configure materials, blur, tint and rendering quality application-wide through `ThemingService`. Components preserve their semantic colours, layout, accessibility and native interaction. The independent `@filip.mazev/blocks/effects/runtime` engine also works without Angular.

```sh
npm ci
npm start
```

Open http://localhost:8080 for the playground and component catalogue, or `/appearance` for global controls, color, light/dark mode, material and lighting controls. Documentation is rendered at build time and bundled with the playground. The icon catalogue renders a bounded page of results.

```sh
npm run build:playground
npm run build:blocks
```

Bundled documentation is generated before serving/building. Keep Angular framework, CLI and builder on major 22; this workspace uses TypeScript 6 and its lockfile records compatible dependencies. See [the appearance guide](documentation/appearance/README.md), [delivery plan](documentation/appearance/DELIVERY-PLAN.md), and [validation record](documentation/appearance/VALIDATION.md) for setup, coverage and verification limits.

Run ESLint across all TypeScript and Angular templates in both Blocks and the playground:

```sh
npm run lint
```

Use `npm run lint:blocks` or `npm run lint:playground` to check one project.


## Publish

From the workspace root, publish the library to npm with:

```sh
bash publish.sh
```

The script prompts privately for your npm token and checks authentication and account write access before incrementing the patch version. It then builds the complete Blocks package (including effects, Sass themes and the installer) and publishes it with public access. The token must also grant **Read and write (publish and stage)** access to `@filip.mazev/blocks` (or its scope), with **Bypass two-factor authentication** enabled. Account write access alone does not verify these token restrictions.

If a publish failed after the version was bumped, correct the token permissions and retry the same version:

```bash
bash publish.sh --retry
```

The retry rebuilds the package without another version bump and stops if that version is already published. If the package's publishing policy disallows tokens, use an interactive npm login and publish from `dist/blocks` instead.

Build and deploy the playground to the existing GitHub Pages target:

```sh
npm run deploy:playground
```

This generates the documentation, builds with `/Blocks/` as the base path, and pushes the output to the `gh-pages` branch of `origin`. Git authentication is required. The deployed site is `https://filipmazev.github.io/Blocks/`.
