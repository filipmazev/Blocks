# @filip.mazev/blocks

This package is used to provide the Angular Schematic for adding the blocks libraries.

The **Blocks** umbrella package is the official entry point and Angular Schematic for the Blocks UI ecosystem. It provides a seamless, zero-config installation experience, allowing you to integrate our core tools, modals, and toast notifications into your Angular workspace with a single command.

## Installation

Requires Angular 22 and RxJS 7.8 or later within major 7.

To install the complete Blocks ecosystem and automatically configure your workspace, run:

```bash
ng add @filip.mazev/blocks
```

## What does ng add do?

When you run the command above, the Angular CLI will execute our custom schematic to handle the boilerplate for you:

* Palette selection: Carbon / Cobalt is the CLI default. Azure / Ember, Violet / Teal, Tangerine / Indigo, Brick Rose / Cyan, Lime / Violet, and Cyberpunk are also available. Use `--theme=azure-ember` to select Azure / Ember.
* Dependency Management: Automatically adds the latest versions of the Blocks ecosystem to your package.json and runs npm install.
* SCSS Injection: Intelligently locates your project's global stylesheet (styles.scss or styles.sass) and injects the required @use statements, mixins, and both light/dark mode CSS variables based on your theme selection.

## Manual Setup (Without Angular CLI)

If you prefer not to use `ng add` or are in an environment that doesn't support Angular Schematics, you can install the packages manually:

```bash
npm install @filip.mazev/blocks@latest
```

Then, manually configure your styles.scss:

```scss
@use '@filip.mazev/blocks' as *;

@layer base {
    :root {
        @include bx-theme($carbon-cobalt-light-theme);
    }

    [data-theme='dark'] {
        @include bx-theme($carbon-cobalt-dark-theme);
    }
}
```


## Palettes

Use paired palette IDs consistently in the CLI and `ThemingService.setPalette()`. For example:

```sh
ng add @filip.mazev/blocks --theme=azure-ember
```

The Sass exports use the same names: `$azure-ember-light-theme` and `$azure-ember-dark-theme`. Carbon / Cobalt is the installer default; the playground starts with Carbon / Cobalt. Only the current palette IDs and Sass names are supported.

Buttons and tabs accept `color="accent"` for the second tone. Icons and custom components can use semantic tokens such as `text-accent`, `accent-subtle`, `on-accent`, and `border-accent`. Canvas backgrounds stay neutral; status roles keep their meaning. See [the palette reference](../../documentation/appearance/README.md#palettes) for all seven pairs.

## Appearance

Version 1.4.0 integrates glass throughout Blocks using its existing semantic theme. Configure it application-wide through `ThemingService.setAppearance({ glassiness: 0.5 })`; use `resetAppearance()` for defaults. Existing controls receive their material automatically, including menus, dialogs and notifications.

Load `@filip.mazev/blocks/effects/effects.css` once globally alongside the Blocks Sass theme. `ng add` registers the stylesheet for new installations. `BxSurfaceDirective` from `@filip.mazev/blocks/effects` is available for custom containers and local overrides. The framework-independent engine is `@filip.mazev/blocks/effects/runtime`, included in the same package.

The source playground provides a dedicated README and working page for every component, with global appearance controls at `/appearance`.
