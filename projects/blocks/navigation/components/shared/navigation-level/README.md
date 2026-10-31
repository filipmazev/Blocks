# Navigation level

Internal nested-list presentation shared by [SideNav](../../side-nav/README.md) and [TopNav](../../top-nav/README.md). The owner supplies one scoped state/focus service and chooses the surface: inline rail, side panel, or top dropdown.

The current parent remains a route link. Back, Escape, or the opposite arrow returns one level, while Up/Down and Home/End move through the list. The header and parent path remain above the scrolling list. Ancestor path buttons open their respective panels without route navigation, using Blocks text buttons and the owner’s focus/scroll restoration. The current parent heading remains a separate page link. Owners restore the matching scroll position and disclosure focus. Levels use the same short slide, disabled reactively by reduced-motion preferences.

Neither this view nor an item creates additional overlays. Theme, text resolution, route matching, and flat contextual search come from the shared navigation state. Consumer APIs and examples live with the public owners.
