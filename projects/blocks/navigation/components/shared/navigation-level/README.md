# Navigation level

Internal nested-list presentation shared by [SideNav](../../side-nav/README.md) and [TopNav](../../top-nav/README.md). The owner supplies one scoped state/focus
service and chooses the surface: inline rail, side panel, or top dropdown.

The current parent remains a route link. Back, Escape, or the opposite arrow returns one level, while Up/Down and Home/End move through the list. The header and
parent path remain above the scrolling list. Ancestor path buttons open their respective panels without route navigation, using Blocks text buttons and the
owner’s focus/scroll restoration. The current parent heading remains a separate page link. Owners restore the matching scroll position and disclosure focus.
Levels use the same short slide, disabled reactively by reduced-motion preferences.

Ancestor paths share the public owner’s `breadcrumbConfig`: the first and last two entries remain visible by default, with hidden ancestors in the horizontal
ellipsis menu. Its Blocks menu items retain the original browsing actions. The visible count, hover behavior, translated text, and placement are configurable;
`maxVisibleItems: null` removes the configured count limit; compact headers still condense ancestors to fit available width. Top navigation supplies its parent
menu so overflow retains the existing navigation panel.

Ancestor overflow and full-label feedback reuse the existing menu and tooltip overlays. Theme, text resolution, route matching, and flat contextual search come
from the shared navigation state. Consumer APIs and examples live with the public owners.

The header reserves a fixed two-line heading area at every level, with equal block padding around its contents. The search row contributes no extra bottom
padding while this header is present. Ancestor trails stay on one line and may reduce the configured visible count to fit their container, including when
`maxVisibleItems` is null. Long ancestor and current-parent labels truncate instead of growing the header; full names remain available on hover, keyboard focus,
or touch-and-hold. Hidden ancestors retain full wrapping labels in the existing overflow menu.

`--bx-nav-level-header-padding-block` defaults to spacing 2, `--bx-nav-level-line-size` to spacing 6, and `--bx-nav-level-heading-gap` to spacing 1. These
shared variables control both side- and top-navigation presentation without measuring text height or changing the list's starting position between levels.
