# Side-nav branch

Internal recursive item presentation for [SideNav](../../README.md). Applications import `SideNav` from `@filip.mazev/blocks/navigation`; this implementation component is intentionally absent from the public barrel.

The owning side-nav supplies item data, configuration, translated text, and optional item templates through its scoped state service. Each branch renders the native route link, optional Blocks tags, a separate submenu disclosure, and a recursive `bx-menu` template. The shared menu trigger handles hover, keyboard focus, nesting, positioning, and live overlay theme inheritance.

Search reveals only the selected path and immediately scrolls the branch's own container to keep it visible. The pointer animates while motion is allowed and remains static with reduced motion. Rows reuse the shared panel/menu surface with semantic tonal interaction states and accept `--bx-side-nav-item-radius`, `--bx-side-nav-item-background`, `--bx-side-nav-menu-width`, and `--bx-side-nav-menu-max-height` from the owner.

The four-level demo at `/components/side-nav` exercises this component through its public owner, including custom templates, compact presentation, mobile, RTL, and translated target labels.
