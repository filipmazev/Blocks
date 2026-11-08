# Theme Studio setup dialog

Copy an exported theme through a Blocks stepper: Configure the project/method, Install with the selected package manager, then Apply theme. The stepper stays in
the fixed modal header; Back/Next/Done and copy feedback stay in the footer. Each code preview and its copy action have explicit spacing. The modal uses a
stable viewport-bounded size across steps and opens as a bottom sheet at the shared small-screen breakpoint.

## Import

This is playground tooling using the public Blocks entry points. Open Theme Studio from the toolbar.

## Usage

Open `/studio`. The Studio toolbar and its Copy / setup and Import actions expose the complete workflow.

## API

Draft state belongs to `ThemeStudioService`; palette, mode and appearance remain owned by `ThemingService`. Controls use signals and OnPush.

## Appearance and customization

Uses shared semantic colors, spacing, radius, borders, shadows and existing Blocks components. The active theme applies to this view and its overlays.

## Behavior and accessibility

Step changes patch the existing modal title and icon through `ModalRef.patch()` without reopening it. Footer navigation focuses the new step heading; header
navigation retains the stepper’s keyboard focus. Project, package manager and method selections survive revisiting steps.

Controls have accessible labels and keyboard operation. Existing focus, modal dismissal, reduced-motion and high-contrast mechanisms remain authoritative.

## Playground

Open `/studio`. The authoritative Studio guide is available from the editor's Export tab.
