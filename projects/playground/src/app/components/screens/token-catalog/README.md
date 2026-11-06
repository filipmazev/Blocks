# Tokens page

Browse and search Blocks colors, color companions, spacing, corner radii, shadows, stacking layers, effects, component properties, utility classes, and Sass
breakpoints at `/tokens`. The page uses Blocks search, multiselect, select, button, accordion, and card components. Only the first result section opens by
default. Collapse all beside Categories closes every result section. Category titles and Blocks dividers separate the matching groups; their labels follow the
category filter. With at least 48 displayed cards across expanded sections, cards mount in small batches near the viewport. Smaller displayed sets bypass
viewport observation and stay mounted. Distant batches release their component instances while preserving their measured space, and focused batches stay
mounted. Other groups mount their batch placeholders when opened. Dense cards keep shared themed styling with decorative surface effects disabled.

## Import

```ts
import {
    CSS_TOKEN_CATALOG,
    CSS_VARIABLES,
    CSS_VARIABLE_REFERENCES,
    SEMANTIC_PAIRS,
    UTILITY_CLASSES,
    getComplementaryToken,
    resolveTokenToCssVar
} from '@filip.mazev/blocks/core';
import type { Color, CssVariable, CssVariableReference, ICssToken } from '@filip.mazev/blocks/core';
```

Sass helpers are available through `@filip.mazev/blocks/core/styles/helpers`. Install the global Blocks styles and a theme as described in the
[Core guide](../../../../../../blocks/core/README.md).

## Usage

```scss
@use '@filip.mazev/blocks/core/styles/helpers' as *;

.notice {
    padding: var(--bx-space-4);
    border: 1px solid var(--bx-border-danger);
    border-radius: var(--bx-rounded-md);
    background: var(--bx-bg-danger);
    color: var(--bx-text-danger);
    box-shadow: var(--bx-shadow-sm);
}

@include respond-up(md) {
    .notice {
        padding: spacing(6);
    }
}
```

```ts
const color: Color = 'danger-500';
const reference: CssVariableReference = resolveTokenToCssVar(color); // var(--bx-color-danger-500)
const companion = getComplementaryToken(color); // danger-50
const localOverrides: readonly ICssToken[] = CSS_TOKEN_CATALOG.filter((token) => token.scope === 'local');
```

Use semantic roles for content that should adapt to the selected theme. `primary` and `accent` palette shades follow the chosen brand/accent palettes. Named
palettes such as `carbon`, `danger`, and `teal` expose their complete shade scales independently of the selected theme.

## API

| Export                                                                    | Purpose                                                                                                                                              |
| ------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `CSS_TOKEN_CATALOG`                                                       | Readonly `ICssToken` metadata for all discovered `--bx-*` variables, including declarations, fallbacks, selectors, sources, groups, and availability |
| `CSS_VARIABLES`, `CSS_VARIABLE_REFERENCES`                                | Names and `var(...)` references, with the corresponding `CssVariable` and `CssVariableReference` unions                                              |
| `SEMANTIC_COLOR_TOKENS`, `PALETTE_NAMES`, `SHADE_NUMBERS`, `COLOR_TOKENS` | Supported color inputs, palettes, and shade scales                                                                                                   |
| `SEMANTIC_PAIRS`, `getComplementaryToken()`                               | Explicit semantic companions and the shared palette/fallback companion rules                                                                         |
| `SPACING_VALUES`, `RADIUS_VALUES`, `SHADOW_VALUES`, `Z_INDEX_VALUES`      | Default Sass scale values serialized as CSS values                                                                                                   |
| `BREAKPOINTS`                                                             | Numeric pixel thresholds for Sass helpers and responsive services; these are not CSS custom properties                                               |
| `UTILITY_CLASSES` and family arrays                                       | Actual classes emitted by the global Sass entry point, including semantic color utilities                                                            |

Availability has explicit meaning:

- `global`: emitted globally by the Blocks utility or accessibility styles.
- `theme`: emitted by `bx-theme`; values follow the nearest theme.
- `local`: declared or given a fallback in a component/effect; it is not necessarily available on the document root.
- `runtime`: referenced or assigned by TypeScript without a static declaration or fallback. Some are internal rendering state, not supported application
  controls.

The catalog is a discovery inventory, not a promise that every runtime property is a public customization API. Consult the owning feature guide before setting a
local or runtime property. A `var(...)` reference without a fallback is valid only where that variable exists.

### Generator and maintenance

Run `npm run tools:generate-tokens` after changing Sass or variable usage. Library/playground build scripts and playground start/watch run it automatically.
`npm run tools:sync-theme-types` remains a compatibility alias. Generated data lives in Core's `tokens.constants.ts`, `token-catalog.constants.ts`, and
`theme-palettes.constants.ts`; types and interfaces are maintained in regular TypeScript files.

`$theme-palettes` in `_theme-engine.scss` is the source of theme IDs, labels, brand/accent palette assignments and optional preview order. Swatches derive from
those palettes' shade 500; theme classes derive from their IDs. `make-palette-theme()` uses the same assignments for light/dark themes. Generated
`THEME_PALETTE_ROLES` exposes the generated brand/accent assignments used to group palette colors and companions into theme sections. `THEME_PALETTE_IDS`
supplies the `BxThemeId` union, and `THEME_PALETTES` keeps the existing selector metadata contract.

`tools/tokens/catalog.scss` exports evaluated Sass maps through a Sass custom function. The source reader compiles global styles, component/directive styles,
and effects, collects custom-property declarations (including `@property` registration) and nested `var()` fallbacks, and scans TypeScript string literals for
runtime property usage. The data helper validates palettes, emitted foundation variables, breakpoint units, and semantic pairs. The writer uses the TypeScript
AST to emit data declarations, then applies the shared ESLint/formatting pipeline before writing. No TypeScript program is maintained inside generator strings.

Generation reports its source-reading and per-file validation stages, elapsed time, and updated/unchanged outputs. The shared writer formats before ESLint so
large inventories avoid expensive formatter-difference processing. Unchanged files keep their modification times to avoid unnecessary watch rebuilds.

The inventory follows statically discoverable Blocks names. Arbitrary application-defined properties and names constructed entirely at runtime are outside its
scope; registered dynamic effect properties are included through their CSS registrations. Values come from default library Sass configuration, so applications
that configure Sass maps can have different scale values. Run `npm run tools:build-docs` to update the bundled guide.

### Compatibility

`meta-brand-palette` and `meta-accent-palette` are Sass theme metadata and are no longer included in `Color` or `SEMANTIC_COLOR_TOKENS`: `bx-theme` never
emitted CSS variables for them. Use `ThemingService.palette()` and its palette definitions for application palette metadata; use `primary`/`accent` for themed
colors. Existing CSS-variable, scale, utility, and color-helper exports remain available. Variable/reference inventories now also include local and runtime
properties; filter `CSS_TOKEN_CATALOG` by scope when building a list of globally available values.

## Appearance and customization

Use the playground toolbar to change the palette, light/dark mode, high contrast, or appearance. Swatches and shape previews use CSS variables directly. Color
cards display the current HEX value; other global/theme cards display their current computed value and separate source defaults. Component/effect values show
their declarations and fallbacks instead of suggesting a document-level computed value. Borders are grouped with their semantic color roles; Blocks does not
currently emit a separate border-width or border-style scale.

Spacing and radius scales follow their numeric/source scale order. Color tiles stay compact; other tiles have wider columns and more padding. Radius samples are
large enough to distinguish the larger corners. Shadow samples use a light neutral preview canvas in both themes so the actual shadow remains visible.
Responsive Sass snippets use the playground code wrapper. Palette shades and companions are grouped together by their registered theme, such as Carbon / Cobalt;
primary/accent aliases use the short Primary / Accent heading, and remaining standalone palettes stay available separately. Trailing tags identify the current
theme, palette sections, and companion sections without long title prefixes.

## Behavior and accessibility

Search is case insensitive and matches every entered word against names, references, category, group, scope, default/fallback values, companions, and source
paths. Changing search or categories opens only the first matching section; other sections remain available to open individually. Choose multiple categories to
include any selected family, for example Colors and Color pairs. Clear the category selection to return to All tokens; All tokens is the absence of filtering
rather than a selectable option. Search and counts cover the complete catalog regardless of which batches are mounted.

Each expanded group initially exposes up to two 24-token chunks. Primitives' `InfiniteScrollDirective` progressively reveals another two chunks at the group
boundary, including filling a short viewport from this finite local dataset. A keyboard-accessible Show more action remains available while chunks remain.
Closing a group preserves its reveal count; changing search or categories resets the counts.

The shared `VirtualCollection` uses measured, bidirectional grid rows within each expanded group. Distant cards are unmounted, their height is retained with
spacers, and returning restores rows without retaining every previously visited tile. Responsive column/height changes preserve a stable scroll anchor, and a
focused row can remain mounted independently. Groups outside the overscan area retain their scroll extent without mounting their cards. This replaces the old
playground-only viewport/chunk observer. Color conversion reads only mounted items, including pinned focused rows.

A constrained catalog viewport occupies the content area below the top bar. The shared Scroll to top action is aligned to the results width near that viewport's
bottom-right corner, scrolls that container, and respects reduced motion. It has a keyboard/hover tooltip with touch long-press disabled.

Metadata expansion within an unloaded batch is recreated when it returns. Current color-value search uses a lazy index; ordinary browsing converts only mounted
batches. One canvas and a conversion cache are reused until theme/appearance changes. Documentation content mounts only while its section is open. Clear the
category selection to show all tokens. Blocks accordions provide heading navigation, expansion and focus restoration; source defaults and fallbacks use Blocks
collapsibles. Right-click a card, touch and hold, or use its **Copy…** button to open a Blocks menu with the applicable copy formats. Focused cards also support
Shift + F10 and the Context Menu key. CSS references copy `var(--bx-…)`; names copy only `--bx-…`. HEX uses eight digits when transparency is present; RGB uses
comma-separated channels and preserves transparency with `rgba(...)`; RGBA always includes explicit alpha. Pairs copy one value per line. Non-color variables
provide CSS-reference/name actions; utility classes and Sass breakpoints provide their respective copy actions. Menu choices follow live theme colors.

Card text suppresses selection and iOS callouts to keep long-press gestures predictable. Source-default collapsibles retain selectable text and native selection
menus. Copy-menu rows use local themed hover/pressed fills and focus outlines without illuminating the cards or accordion sections behind the opaque menu. Copy
actions report success/failure in a live region. Search and multiselect controls use dynamic subscript sizing and reserve no empty validation row.

Color pairs show both named tokens and adjacent swatches. They reflect `getComplementaryToken()` exactly: explicit semantic mappings, `bg-surface` for unmapped
roles, shade 50 for palette shades above 400, and shade 900 otherwise. They do not imply a guaranteed text contrast ratio. Labels identify colors without
relying on color alone. There is no catalog animation; reduced-motion and opaque/high-contrast preferences continue through the shared Blocks controls and
styles.

## Playground

Open `/tokens` from Tools. Search for `warning`, `danger`, `background`, `shadow`, `rounded`, `glass`, a component name, a source path, or a full CSS variable.
Choose **Color pairs** for the complete companion mapping, **Sass breakpoints** for responsive thresholds, or **Utility classes** for copyable class names.
