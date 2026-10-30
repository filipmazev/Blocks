# Side-nav branch

Internal item presentation for [SideNav](../../README.md). Consumers import `SideNav` from `@filip.mazev/blocks/navigation`; this implementation component is intentionally absent from the public barrel.

The owning side-nav supplies translated item data, active-route state, and an optional item template through its scoped state service. Each row renders a native route link, Blocks tags, and a separate disclosure button. Click/touch, Enter/Space, or the forward arrow requests children from the owner. The owner chooses inline browsing or its one shared adjacent panel; rows never create recursive overlays.

Search results include a muted parent path even with custom item templates. Only the best nested result may have an external elongated monochrome arrow, using the shared overlay origin tracker and a gentle floating animation. Reduced motion keeps it static. Root results have no guide, and search does not add selected colors or outlines. The page link and disclosure button have separate hover and focus surfaces; only the page link receives route selection. Compact alignment and disabled semantics remain independent.

See `/components/side-nav` for the four-level fixture, compact presentation, inline/adjacent levels, mobile drawer, RTL, custom item content, and English/Macedonian labels.
