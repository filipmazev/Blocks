# Theme Studio import dialog

Validate and import Studio JSON or a Studio SCSS export without executing imported code. A Blocks button opens the native chooser and shows the selected
filename. The multiline text editor autosizes between four and eight rows, with space reserved between its scrollbar and the modal scrollbar. Import
confirmation and status stay in the fixed modal footer while the editor scrolls.

## Import

This is playground tooling using the public Blocks entry points. Open Theme Studio from the toolbar.

## Usage

Open `/studio`. The Studio toolbar and its Copy / setup and Import actions expose the complete workflow.

## API

Draft state belongs to `ThemeStudioService`; palette, mode and appearance remain owned by `ThemingService`. Controls use signals and OnPush.

## Appearance and customization

Uses shared semantic colors, spacing, radius, borders, shadows and existing Blocks components. The active theme applies to this view and its overlays.

## Behavior and accessibility

Controls have accessible labels and keyboard operation. Existing focus, modal dismissal, reduced-motion and high-contrast mechanisms remain authoritative.

## Playground

Open `/studio`. The authoritative Studio guide is available from the editor's Export tab.
