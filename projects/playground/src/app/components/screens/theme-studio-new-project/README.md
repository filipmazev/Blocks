# Initialize a Blocks project

Create an Angular 22 SCSS workspace and initialize Blocks with the selected built-in base.

## Import

This is playground tooling using the public Blocks entry points. Open Theme Studio from the toolbar.

## Usage

Open `/new-project`. The Studio toolbar and its Copy / setup and Import actions expose the complete workflow.

## API

Draft state belongs to `ThemeStudioService`; palette, mode and appearance remain owned by `ThemingService`. Controls use signals and OnPush.

## Appearance and customization

Uses shared semantic colors, spacing, radius, borders, shadows and existing Blocks components. The active theme applies to this view and its overlays.

## Behavior and accessibility

Controls have accessible labels and keyboard operation. Existing focus, modal dismissal, reduced-motion and high-contrast mechanisms remain authoritative.

## Playground

Open `/new-project`. The authoritative Studio guide is available from the editor's Export tab.
