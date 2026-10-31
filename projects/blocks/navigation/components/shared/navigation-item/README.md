# Navigation item

Internal item presentation shared by [SideNav](../../side-nav/README.md) and [TopNav](../../top-nav/README.md). Consumers configure the public owners rather than importing this implementation component.

A native page link and a separate disclosure retain independent hover/focus surfaces. Only the most specific active route receives selected styling. Top-level horizontal disclosures point down/up; vertical levels use a forward arrow. The scoped navigation state coordinates all requests through the owner's one submenu panel.

Search results always retain their muted parent path, including custom templates. Search results have no floating guides or additional selection styling. The established side-nav CSS variables remain supported; top navigation maps its own variables into the same shared styles.

Both public playground pages demonstrate these interactions, translation changes, disabled routes, and four levels of nesting.
