# @filip.mazev/blocks

This package is used to provide the Angular Schematic for adding the blocks libraries.

The **Blocks** umbrella package is the official entry point and Angular Schematic for the Blocks UI ecosystem. It provides a seamless, zero-config installation experience, allowing you to integrate our core tools, modals, and toast notifications into your Angular workspace with a single command.

## Installation

To install the complete Blocks ecosystem and automatically configure your workspace, run:

```bash
ng add @filip.mazev/blocks
```

## What does ng add do?

When you run the command above, the Angular CLI will execute our custom schematic to handle the boilerplate for you:

* Interactive Theme Selection: You will be prompted to choose your preferred global theme.
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
        @include bx-theme($purple-light-theme);
    }

    [data-theme='dark'] {
        @include bx-theme($purple-dark-theme);
    }
}
```
