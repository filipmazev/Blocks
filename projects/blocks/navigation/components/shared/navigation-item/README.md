# Navigation item

Internal item presentation shared by [SideNav](../../side-nav/README.md) and [TopNav](../../top-nav/README.md). Consumers configure the public owners rather
than importing this implementation component.

A native page link and a separate disclosure retain independent hover/focus surfaces. Expanded lists select only the most specific active route. The compact
side rail highlights the root of its retained browsing branch, falling back to the active route's root when no branch is retained. Only the exact current page
receives `aria-current="page"`; a collapsed branch does not claim its submenu is expanded. Top-level horizontal disclosures point down/up; vertical levels use a
forward arrow. The scoped navigation state coordinates all requests through the owner's one submenu panel.

Search results always retain their muted parent path, including custom templates. Iconless results use ordinary text padding even in mixed results. Paths align
with their result label and remain descriptive inside its native page link. Their labels and horizontal ellipsis never intercept clicks; hidden ancestors are
noninteractive tooltip text. Overflow uses the owner’s `breadcrumbConfig` and shared breadcrumb defaults. Search results have no floating guides or additional
selection styling. The established side-nav CSS variables remain supported; top navigation maps its own variables into the same shared styles.

Both public playground pages demonstrate these interactions, translation changes, disabled routes, and four levels of nesting.

Expanded links reserve trailing padding matching the leading icon-column inset, including tags and end icons. Iconless rows use ordinary text padding;
`--bx-nav-item-padding-inline-end` can override the trailing value. Compact rows keep their existing icon centering.

Search paths include their leading inset within the available content width. Long ancestor labels, including unbroken names, wrap inside the link's padded area
so their text cannot extend into the trailing inset.
