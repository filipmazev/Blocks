# Theme Studio showcase

Explore how shared theme tokens affect the interface, with focused component examples integrated into the explanation. Colors, layout, mode and export each have
their own section on `/studio`; there is no separate component-preview route or unrelated sample workspace.

## Import

Private playground screen using the public Blocks entry points and the existing `ThemeStudioService`.

## Usage

Open `/studio` and choose **Customize theme**. The editor stays available while you inspect the live color roles, spacing sample, field, foreground pairs and
inherited dialog. **Randomize theme** applies a coherent starting point through the existing service.

In the editor, color changes resolve an opposite-mode equivalent by default. Sun/moon icons identify both colors; the smaller strip previews the opposite mode.
Its pencil opens a second editor, and manually changing that value protects it from subsequent automatic updates. The switch beneath the section tabs disables
automatic resolution globally and shows both editors. The top Reset restores the current palette color and resolves its opposite; an Auto button releases a
differing opposite-mode manual override.

## API

Draft state belongs to `ThemeStudioService`; palette, mode and appearance remain owned by `ThemingService`. The screen introduces no parallel theme state.
Color-role metadata is defined in `theme-studio-showcase.constants.ts`. The exported SCSS is derived from the same draft as the sidebar and setup dialog.

## Appearance and customization

The introduction retains the [glass aperture](../../shared/theme-palette-preview/README.md) and current palette label. Four sections demonstrate the theme:

- **Colors:** six live swatches explain primary, accent, surface, text, border and hover roles, with their semantic CSS variable names.
- **Layout:** a Blocks card demonstrates shared corner radius, border and shadow tokens. Spacing bars show the 4, 8 and 12 steps; a readonly field remains
  focusable to inspect its outline. The dialog action demonstrates these tokens on a real overlay.
- **Preview:** Blocks tabs switch the application’s light/dark mode. Fill/foreground pairs show primary and accent combinations. Custom colors still require a
  contrast check; the page makes no automatic accessibility guarantee.
- **Export:** Copy / setup opens the existing setup modal; project initialization and package setup links retain their existing destinations. Generated SCSS and
  the detailed guide remain in closed collapsibles until requested.

Sections and the measurement card use Blocks `Divider` components. CSS borders remain only where they describe a component or color swatch contour. Grid columns
respond to available width, including when the editor pushes the page. All examples use the active semantic tokens rather than fixed sample palettes.

## Behavior and accessibility

The readonly sample field can receive focus and text selection without modifying state. Mode tabs, buttons, collapsibles and dialogs retain their existing
keyboard and focus behavior. Separator semantics come from `Divider`. Shared reduced-motion, reduced-transparency and forced-color behavior remains active. The
theme illustration pauses offscreen and is decorative.

Opening the dialog does not send data or create a project. Its sample field is local to that modal visit, and mounted overlays inherit live theme changes.
Export and setup reuse the existing workflow without changing draft persistence, history, validation or preview ownership.

## Playground

`/studio` is the showcase and the sidebar’s **Explore Theme Studio** destination. `/tokens` remains the full token catalog; `/studio/new-project` and
`/installation` provide project setup. The authoritative editor guide is available in the page and the sidebar’s Export tab.
