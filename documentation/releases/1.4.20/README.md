# Blocks 1.4.20

Published October 31, 2026 on the Release channel (`latest`). Install this exact version with `npm install @filip.mazev/blocks@1.4.20`.

[View version 1.4.20 on NPM](https://www.npmjs.com/package/@filip.mazev/blocks/v/1.4.20).

This release refines the side navigation introduced in 1.4.19. It makes deep navigation usable in constrained layouts, separates page links from submenu
controls, and improves contextual search, scroll restoration, keyboard interaction, and mobile drawers.

## Responsive submenu browsing

- Added `submenuBreakpoint` (default `xl`) and `submenuMode` (`auto`, `inline`, or `flyout`) to control desktop submenu presentation independently of nesting
  depth.
- At or below the threshold, children replace the current list inside the rail. Inline navigation also measures its containing shell, so an embedded narrow rail
  uses the appropriate layout even on a wide screen.
- Above the threshold, children open in one adjacent opaque panel. Deeper levels reuse that panel instead of accumulating recursive overlays.
- Mobile drawers always browse inside their own panel. Changing available width preserves the browsing path.
- Added a persistent Back action, ancestor path, and a parent heading that links to the parent's page. Returning to a previous level restores its scroll
  position and disclosure focus.
- A compact rail temporarily expands when inline browsing needs space, while retaining the saved collapse preference.
- Explicit level changes animate briefly; reduced motion removes that movement.

## Page links, selection, and search

- Kept labels as native route links and separated their child-disclosure controls. Clicking a label navigates; clicking its chevron browses descendants.
- Required an explicit disclosure action for submenu opening. Hovering labels no longer opens navigation panels.
- Added independent hover and focus surfaces to page links and disclosures. Selection belongs to the active page link; expanded ancestors and search matches do
  not acquire selected styling.
- Reworked search into a flat list of direct matches with translated parent paths in the main navigation. Searching does not open nested panels.
- Search normalizes accents and case, ranks exact, subsequence, and keyword matches, and tolerates one edit in words of at least four characters.
- Result labels navigate directly. Their disclosure leaves search and opens the chosen result's children. Clearing search restores the previous browsing level
  and its scroll position.
- Search temporarily expands a compact rail without changing its stored preference and searches only the currently supplied tree.
- Added a monochrome guide for the best nested result, with a static alternative under reduced motion. Top-level results have no guide; `showSearchGuide: false`
  hides it. This describes 1.4.20 behavior; later releases retire the guide.

## Keyboard, focus, and mobile drawers

- Preserved native links and menu/menuitem semantics with separate, named disclosure buttons.
- Enter, Space, or the arrow toward a submenu opens children. Up/Down and Home/End move within the current menu.
- Back, Escape, or the opposite arrow returns one level with focus and scroll restoration. At the root, Escape dismisses the mobile drawer.
- Kept Tab within adjacent panels and mobile drawers, and restored the opening control's focus after closing.
- Fixed mobile and inline preview presentation so layout changes establish the closed geometry immediately; explicit open/close actions animate the drawer.
- Retained the mobile close action, click-to-close scrim, and shared scroll locking. Resizing out of mobile presentation closes the drawer and releases its
  lock.
- Kept embedded inline drawers and scrims inside their positioned preview shell without locking the page.

## Shared menu overlays

- Added `menuManual: true` to `MenuTriggerDirective` for owners coordinating a single overlay across multiple disclosure controls.
- In manual mode, the owner supplies trigger interaction and ARIA semantics and calls `open()`/`close()`; automatic trigger handlers and host ARIA are omitted.
- Extended `open(focus?, origin?)` with an optional per-opening positioning origin.
- Preserved outside-click dismissal, focus trapping, keyboard dismissal, theme inheritance, overlay context, and origin visibility tracking.
- Reused native CSS anchoring and the existing measured fallback. Panels close when their origins leave the viewport or clipping container.

## Playground and migration

The playground application uses the shared `SideNav` with an expanded, text-focused menu. Its dedicated demo adds controls for comparing submenu presentations
and exercising a four-level tree, search, focus, and scroll restoration.

Existing `SideNav` consumers can retain automatic defaults. Set `submenuMode: 'inline'` or `'flyout'` for an explicit desktop presentation, and customize Back
text through the existing translatable configuration. Applications relying on hover-to-open navigation should use the separate disclosure action. The former
`--bx-side-nav-item-highlight-background` no longer colors search rows. Generic menu triggers retain automatic handling unless `menuManual` is enabled.

```html
<bx-side-nav [config]="{ submenuBreakpoint: 'xl', submenuMode: 'auto', backLabel: { key: 'nav.back' } }" />
```

These notes cover the published changes from `df09eebe3e867a2fbf83462164bb3bb8ace80b5b` (1.4.19) through `b18ac855a86e7ad9fe77d1d4944f069ccde309ba` (NPM's
recorded 1.4.20 source commit). The later top-navigation and effects changes are outside this release.
