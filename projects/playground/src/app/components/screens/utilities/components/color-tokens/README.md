# Color-token helpers

Map typed colors to CSS references and inspect companion, inversion, and palette-validation helpers.

## Import

```typescript
import { getComplementaryToken, invertPaletteToken, isPaletteToken, isThemedColor, resolveThemeId, resolveTokenToCssVar } from '@filip.mazev/blocks/core';
```

## Usage

```typescript
resolveTokenToCssVar('primary'); // var(--bx-primary)
resolveTokenToCssVar('orange-500'); // var(--bx-color-orange-500)
getComplementaryToken('text-primary'); // bg-element
getComplementaryToken('orange-500'); // orange-50
invertPaletteToken('blue-100'); // blue-900
isPaletteToken('primary'); // false
isThemedColor({ light: 'primary', dark: 'accent' }); // true
resolveThemeId('carbon-cobalt'); // carbon-cobalt
resolveThemeId('retired-palette'); // undefined
```

## API

| Helper                         | Behavior                                                                                                               |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------------------- |
| `resolveTokenToCssVar(token)`  | Maps a typed semantic or palette color to a CSS `var(...)` reference; it does not resolve an RGB value                 |
| `isPaletteToken(token)`        | Recognizes supported palette names and numeric shades; accepts typed `Color` values                                    |
| `getComplementaryToken(token)` | Looks up semantic pairs (falling back to `bg-surface`) or chooses palette shade 50 for shades above 400, otherwise 900 |
| `invertPaletteToken(token)`    | Mirrors a palette shade, including 50→900 and 1000→50; leaves semantic tokens or unsupported results unchanged         |
| `isThemedColor(value)`         | Narrows non-null objects with a `light` member; does not validate individual token values or choose a theme            |
| `resolveThemeId(value)`        | Accepts current palette IDs; returns undefined for absent, unknown or retired IDs                                      |

These helpers do not guarantee contrast. `Color`, `ThemeColorToken`, `SemanticColorToken`, and `ThemedColor` describe typed consumer configuration. Prefer
semantic tokens for values that should follow theme and palette changes.

## Appearance and customization

The interactive example uses public Blocks components, semantic theme variables, and shared spacing and responsive helpers. It follows the active playground
appearance. Open the source tab for the component and template.

## Behavior and accessibility

The Blocks select updates every helper result reactively. Change the active playground theme to see semantic CSS variables update the decorative swatch; every
result is also shown as text.

Browse the [complete token catalog](../../../token-catalog/README.md) at `/tokens` for all CSS variables, companions, scales, and utility classes. Companion
mappings do not guarantee contrast.

## Playground

Open `/utilities/color-tokens` from **Core → Utilities → Color-token helpers**. The demo appears first, followed by separate documentation and code tabs.

Return to the [utilities overview](../../README.md) for the coverage audit and related feature guides.
