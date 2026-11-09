# Blocks Theme Studio

Design a Blocks theme while exploring real components. The toolbar opens a nonmodal editor on the physical right; the same draft and preview remain active
across playground pages. Open `/studio` for an integrated theme and token showcase.

## Import

Studio is playground tooling. Applications use its generated SCSS and public Blocks package:

```scss
@use '@filip.mazev/blocks' as bx;
```

Merge an existing Blocks import instead of loading global styles twice. Keep the effects stylesheet and normal high-contrast theme installed. See the
[package setup](../../../../../../blocks/README.md).

## Usage

1. Open Theme Studio from the toolbar or the [component preview](../../screens/theme-studio-demo/README.md).
2. Use the Light/Dark segmented selector and Theme palette dropdown at the top. Palette options and the selected value show the same paired swatches as
   Appearance. Below Explore Theme Studio, choose Corner radius, Base color, Menu color and Menu accent.
3. Adjust common colors with color pickers and opacity sliders. Advanced semantic roles remain available in a disclosure.
4. Choose Default, None, Small, Medium or Large corner radii; Layout also offers coordinated spacing and border settings.
5. Use Shadows to choose a target and edit color, opacity, blur, spread and X/Y offsets. All targets share the edited shadow when All resting shadows is
   selected.
6. Select **Copy / setup** for the Configure → Install → Apply theme stepper. Configure selects New/Existing project, package manager and Quick/Manual setup.
   The stepper stays in the modal header. Install provides commands, then Apply theme provides SCSS. Code previews and copy actions have explicit spacing;
   Back/Next/Done stay in a fixed footer.
7. Use **Import** to paste or upload Studio JSON or an unmodified SCSS export. Download JSON from Export to resume editing elsewhere.

Undo, Redo and Randomize stay in the fixed panel header while the editor scrolls, with the undo-2, redo-2 and dices icons. Closing the panel preserves draft and
preview. Preview off restores owned inline styles. Feedback occupies a fixed-height region above Live preview in the footer, so messages cannot overlap the
editor or shift the actions.

## API

`ThemeStudioService` owns sparse shared overrides, separate light/dark colors, editing text and a bounded session history. `ThemingService` remains the owner of
palette, mode and appearance. Undo restores the captured mode preference, including automatic mode; appearance, accessibility and panel preferences remain
independent. History retains at most 30 combined undo/redo entries and a 2 MiB estimated serialized UTF-16 budget; oldest undo entries and farthest redo entries
are evicted first. This bounds history storage without claiming a fixed JavaScript heap size. A typing session or slider drag is one change. Cancellation
restores the draft and retains redo history.

Pure helpers own validation, coordinated presets, shadow serialization, import and deterministic export. Preview ownership is separate. Supported document keys
still derive from `THEME_CSS_VARIABLES`; runtime lighting, focus rings, optical variables and component hooks are excluded.

### Coordinated controls

Corner radius changes all six ordinary radii together. Default removes radius overrides, None sets them to zero, and Small/Medium/Large use half, equal or
one-and-a-half times the generated Sass scale. Structural square and pill shapes retain their contracts. Custom imported scales remain intact and display Custom
values with an explanation until a preset is chosen. Unsupported Custom options are not offered in dropdown menus. Spacing presets apply the same multiplier to
every nonzero shared spacing step.

Base color uses generated neutral shade inventories for Carbon or Slate and updates surfaces, text and neutral borders in both modes. Default removes those
overrides. Theme chooses the existing built-in palette and preserves explicit overrides. Menu color controls shared surface tokens; Menu accent controls shared
hover/active tokens. These selectors also affect cards and other controls that consume those roles, as stated in the editor. They do not create a separate menu
theme or add private component hooks to the document.

The shadow editor supports All resting shadows, Controls, Surfaces, Cards, Modals and Toasts. It reads the current first layer and preserves imported lists
until a control is edited; editing replaces selected targets with one validated layer. Opacity is 0–100%, blur 0–64px, spread ±32px and offsets ±64px. Reduced
motion and semantic emission remain separate. Transparent shadows use a valid zero-opacity layer rather than `none` when composed with semantic light.

Randomize chooses a built-in palette, a coordinated neutral base and subtle menu fills with modest geometry and elevation changes. It resolves both modes from
shared semantic palette roles; generated color overrides use six-digit hex, or eight-digit hex when transparency is needed, including shadow colors. Contrast
checks use these serialized colors. Preview, JSON and SCSS retain the same values; Undo restores the preceding draft. Existing imported or manually entered
color formats remain supported. Inherited palette colors also prepopulate the editor in hex without becoming overrides. It does not certify overall
accessibility of a consumer's content.

### Import and export

JSON uses schema version 1, a supported `palette`, a `shared` override map, and `light`/`dark` color maps. Files and pasted input are limited to 64 KiB. Every
name, family and value is validated before atomically replacing the draft. Unknown versions, malformed data, unsupported tokens, duplicate SCSS declarations,
unsupported selectors and unreadable files leave the current draft unchanged. A successful import is one undoable change. Pending file reads cannot update a
destroyed dialog or replace a newer file selection.

SCSS import accepts the Studio export grammar: the Blocks `@use`, forced-colors guard, shared root block and the two `data-theme` blocks with matching built-in
base includes. Arbitrary Sass, third-party theme formats and executable snippets are not evaluated. JSON is the portable editing format; SCSS is the application
stylesheet format.

Export includes the named built-in base in both modes and sparse validated overrides, with stable ordering, LF and a final newline. Set `data-theme="light"` or
`data-theme="dark"` and `.high-contrast` on the root. Place declarations after existing palette rules. Commands initialize Blocks' built-in base using its
existing Angular schematic; paste the generated SCSS afterward to apply Studio customizations. There is no command that silently downloads a private draft.

Drafts and history last for the current application session. Reload starts a fresh draft. Palette, mode, appearance and catalog preferences keep their existing
storage behavior. There is no named-preset storage or cloud sharing.

## Appearance and customization

The Export tab renders live SCSS in the shared highlighted code preview, with spacing between its actions and code and a gutter beside nested scrollbars.

The editor uses Blocks forms, sliders, tabs, disclosures, SidePanel/SidePanelLayout and responsive Modal. It overlays on narrow screens and pushes at the shared
`2xl` breakpoint. Its initial width is 480px, with pointer/touch/keyboard resizing from 480px to 624px (30% larger); a smaller available container takes
precedence. The chosen width remains while navigating and reopening. The toolbar remains outside panel bounds. Header history, footer actions and the close
control stay outside the editor's scroll region. The editor has bottom padding so its final disclosure remains separated from the footer. The compact toolbar
preview action remains available when extreme spacing makes the editor difficult to use. Its tooltip explains how pausing restores the original theme without
discarding edits. Enabled preview uses the shared primary filled button treatment; paused preview uses a neutral tonal button.

Preset guidance lives in each select's information tooltip, available on hover, keyboard focus or a dedicated touch tap. The help actions stay present for both
preset and custom values, keeping the editor's rows stable when randomizing or importing a theme.

Colors accept literal hex, rgb/rgba, hsl/hsla, black, white or transparent. Imported geometry accepts bounded px/rem/em values; shadows accept up to four
literal layers. References, expressions and declaration delimiters are rejected. Invalid editing text retains the last valid preview and prevents export until
fixed or reset. Choosing a color preserves its alpha; opacity sliders change it explicitly.

## Behavior and accessibility

Reset returns to Carbon / Cobalt and clears all Studio overrides; mode and appearance preferences remain unchanged. Reset is undoable. Randomize chooses a
coordinated built-in palette and a curated recipe linking neutral base, menu treatment, interaction accent, corners and elevation. Current spacing overrides
remain unchanged so randomization preserves the layout's spacing. The recipes keep menu surfaces neutral and use one subtle brand or accent hue for interaction.
Menu presets reuse the same semantic roles as the manual controls. Candidate recipes check primary and secondary text at 4.5:1 against canvas, surfaces and
interaction fills in both modes. These checks cover the generated combinations, not every consumer-defined component state.

While Studio is open, Ctrl/Cmd+Z undoes a theme change and Ctrl/Cmd+Shift+Z redoes it. Text inputs, textareas, editable content and open modals retain their
normal keyboard behavior. At the retained history boundaries, focusable tooltip wrappers explain why Undo or Redo is unavailable. The Undo tooltip distinguishes
an empty history from older entries discarded by the 30-entry / 2 MiB bound.

The setup modal keeps a stable viewport-bounded frame across steps and patches its title and icon in place. On small screens it uses the shared bottom-sheet
layout. Its header and footer remain reachable while the body scrolls. The import editor is capped at eight rows and reserves a gutter beside nested scrollbars.

Named controls, keyboard-operable tabs, visible focus and live feedback follow Blocks mechanisms. The nonmodal sidebar does not trap focus or make the page
inert. Child dropdowns consume Escape first. Setup/import dialogs use the shared modal lifecycle and have accessible names. Their text regions and commands can
be selected with the keyboard. Import keeps confirmation and status in a fixed modal footer, and its Blocks button opens the native file chooser. Import, reset,
copy, download and randomize actions use tonal Blocks buttons with icons. Copy failures provide a manual route; download URLs and temporary anchors are cleaned
up on success and failure.

High contrast and forced colors suspend Studio overrides without erasing the draft. Reduced motion and transparency remain live, independent preferences.
Preview diffs only owned root custom properties, preserves previous inline values and priorities, and restores them on reset, preview off or destruction. If
another owner changes a property, Studio relinquishes it until preview is toggled or the token is reset. Baselines come from isolated palette scopes and
generated geometry, never previous preview overrides. Token catalog values, copy formats and search refresh with preview edits.

Opening Studio closes icon Filters/Details. Opening either catalog panel closes Studio while retaining its draft and preview. Catalog filtering and visit-local
icon settings keep their existing behavior.

## Playground

`/studio` presents integrated sections for semantic color roles, layout tokens, light/dark foreground pairs and export. A card, readonly field, mode tabs and
responsive dialog demonstrate the relevant tokens in context, without a separate component-preview route. The sidebar links here as **Explore Theme Studio**.
`/studio/new-project` provides Angular workspace initialization and Blocks setup commands for npm, pnpm, yarn and bun. Both are reachable from the Studio
workflow. Theme Studio appears directly below Appearance in the main navigation with its Palette icon. `/installation` renders the authoritative package setup
guide; documentation links no longer redirect installation requests to Home.

Commands and SCSS use the shared code-preview container with syntax highlighting and keyboard scrolling. The SCSS viewer has an inline gutter separating its
scrollbar from the modal scrollbar. The Studio editor fields and border slider retain explicit spacing around their controls.

Tabs inside the sidebar and dialogs keep inactive triggers transparent even when an enclosing material has a minimum-opacity floor. The traveling selection
therefore remains visible above the header backing, with labels above it, including when the header and page use different surface colors.

The toolbar action gradually lights up with a saturated rainbow rim and a diffuse halo when Studio overrides are being previewed. Pausing preview or resetting
the overrides fades the light out; resuming preview fades it back in. Both layers follow the button's shared radius. Four subdued light sources use the existing
Blocks lighting scene; colors, brightness and the border move together on the shared lazy frame clock. Frame work stops after fading out and while the document
or button is hidden. Reduced motion changes brightness immediately and leaves static colors; forced colors and high contrast remove the decoration and its light
sources while preserving the ordinary Blocks button and focus outline.
