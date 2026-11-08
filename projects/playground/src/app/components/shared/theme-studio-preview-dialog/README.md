# Theme Studio preview dialog

Inspect an actual centered Blocks modal and editable field using the current shared theme.

## Import

This is playground tooling using the public Blocks entry points. Open Theme Studio from the toolbar.

## Usage

Open `/studio` and choose **Inspect a themed dialog** in the Layout section. Edit the sample field or use **Done** to close it.

## API

Draft state belongs to `ThemeStudioService`; palette, mode and appearance remain owned by `ThemingService`. Controls use signals and OnPush.

## Appearance and customization

Uses shared semantic colors, spacing, radius, borders, shadows and existing Blocks components. The active theme applies while the modal remains open; reopening
is not required to receive preview changes.

## Behavior and accessibility

Controls have accessible labels and keyboard operation. Existing focus, modal dismissal, reduced-motion and high-contrast mechanisms remain authoritative.

## Playground

Open `/studio`. The authoritative Studio guide is available from the editor's Export tab.
