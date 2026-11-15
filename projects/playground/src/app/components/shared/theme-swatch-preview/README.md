# Home theme preview

Shows Surface, Accent, and Primary samples. A local loupe reveals the opposite theme without changing application settings.

## Import

Private playground component `ThemeSwatchPreview`.

## Usage

```html
<app-theme-swatch-preview />
```

## API

There are no inputs. The preview reads the existing theme and Studio draft. The footer provides the loupe action.

## Appearance and customization

The sample order reverses the shared Studio color roles. Current samples receive light through `BxSurfaceDirective`; the clipped counterpart reads the same
Studio service's opposite-mode values. The SVG cover and other page sections remain separate previews.

## Behavior and accessibility

A precise pointer moves the loupe directly. The search-icon action pins it for keyboard and touch use; arrow keys move the pinned window and Escape closes it.
Touch users can pin the window, then tap a sample to move it while retaining native page scrolling. The action has an accessible name identifying the previewed
mode and exposes its pressed state. The duplicated visual layer is inert and hidden from assistive technology. Orby’s pod is in the separate hero illustration,
so the loupe cannot cover its wake target.

## Playground

Open `/` and find **Customize a shared theme**. Use `/studio` to edit the application theme.
