# Playground home

Introduces Blocks and links to component examples, Theme Studio, Appearance, and the Figma UI kit.

## Import

Home uses Blocks buttons, cards, tags, alerts, time picker, icons, and surfaces, plus the private
[theme material preview](../../shared/theme-material-preview/README.md), [theme samples](../../shared/theme-swatch-preview/README.md),
[Figma cover](../../shared/figma-library-preview/README.md), and Appearance journal.

## Usage

Open `/`. Four alternating sections pair short descriptions with component, color, material, and Figma previews. Links open the corresponding playground pages.
Theme selectors and settings remain in Theme Studio and Appearance.

The Figma links use the shared library URL, preferring the published Community listing when registered. The supplied SVG is rendered directly as vector artwork.

## API

Theme and appearance preferences remain owned by the shared services. The examples inherit their semantic tokens without changing those preferences. The theme
loupe reveals the opposite mode locally; its search-icon button supports keyboard and touch exploration.

The Bring Orby home action stays aligned to the same Container width and horizontal gutters as page content, including its fixed mobile presentation. The
movement stage remains full-page.

Orby retains its wake, drag, fling, mood, recall, and keyboard interactions. Its stage spans the full home page outside the centered PageContainer, including
the page gutters and footer. The layer stays above the hero and section previews, including their floating tools. Its pod sits in the hero’s foreground glass
card, before the sections. Its automatic tour visits nearby visible sections, following the alternating layout without scrolling the page or moving focus. After
the reader scrolls and pauses, Orby catches up at a bounded speed and resumes its slower tour. Scrolling inside the glass preview does not trigger following.

Direct interaction interrupts the tour. A later pause in page scrolling can resume following once manipulation and mood recovery finish. Explicit recall keeps
Orby at home; keyboard focus, active gestures, and reduced motion remain authoritative.

## Appearance and customization

Home and Theme Studio share typography, section spacing, copy layout, alternating columns, and breakpoints through `shared/styles/_showcase.scss`. Narrow
layouts stack descriptions above previews. The first section is a compact meeting composition using real Blocks cards, tags, saved-state alert, and time-picker
field. The guest and time tiles tilt in opposite directions. The composition is inert and decorative, with no editable or focusable demo controls; Orby can
still illuminate its surfaces. Component changes flow directly into the showcase instead of being copied into custom mock controls.

The hero retains its miniature portfolio composition. The glass section reuses the Appearance journal with a repeating, visibility-aware scroll and pause
action. The compact Home journal pauses for 2.4 seconds with its title covered by the glass search bar. The Figma cover's decorative panels rotate and shrink on
hover or keyboard focus while its text stays fixed; their colors share the Studio aperture's semantic palette.

## Behavior and accessibility

Every section has a named heading. The orb's instructions remain available to assistive technology without a visible message block. Its button supports Enter,
arrow keys, and Escape; pointer and touch users can drag and fling it. Recall respects its existing mood guard.

Animation uses the shared frame scheduler and exact springs where appropriate. Reduced motion stops decorative travel and scrolling while preserving direct
positioning and the local theme peek. Hidden and offscreen previews stop animation work. Theme, transparency, and accessibility changes update mounted surfaces.
Listeners, observers, timers, animation effects, and scene controllers are released on navigation.

## Playground

Open `/`. See the [Theme Studio guide](../../shared/theme-studio/README.md) for editing, import, and export, the
[scroll preview guide](../../../directives/preview-scroll/README.md) for its presentation behavior, and the
[Figma publishing guide](../../../../../../../tools/figma/README.md) for Community releases.
