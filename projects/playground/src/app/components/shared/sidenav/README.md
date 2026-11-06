# Playground navigation

The playground shell uses Blocks SideNav for an expandable desktop sidebar, a compact icon rail, and a mobile drawer.

## Import

The application shell imports `Sidenav` from `./components/shared/sidenav/sidenav`.

## Usage

```html
<app-sidenav title="Blocks" />
```

Use the desktop header control to collapse or expand the navigation. The preference persists across reloads. On mobile, use the toolbar menu button.

## API

`title` is required. `mobile()`, `open()`, `panelId()`, and `toggle(event)` connect the application's mobile trigger to the shared drawer.

The route-driven tree presents Home, Appearance, Components, Tokens, Icons, Utilities, Tools, and Release notes as separate entries with icons. Components
contains Primitives, Forms, Navigation, Modals, and Notifications; each category contains its component pages. Layout adds a third level under Primitives.
Category links open a filtered component index. Tools contains the modal and toast configurators and links to its own overview page. Release notes is the last
entry. Nested leaf pages use text-only rows; nested parents retain their icons.

## Appearance and customization

The header shows the Blocks logo alone when compact and includes the title and release label when expanded. Shared SideNav controls all panel surfaces,
dimensions, icons, tooltips, search, and theme behavior.

## Behavior and accessibility

The navigation retains the shared keyboard browsing, Back and ancestor actions, focus restoration, reduced-motion support, and mobile focus trap. Opening a
branch or search temporarily expands the icon rail without changing the saved preference. Existing component and configurator URLs remain valid. Desktop labels
retain their final layout while the panel expands, then fade in briefly. Reduced motion skips the delay and fade, including live preference changes. Keyboard
focus reveals labels immediately, and accessible names remain available during the visual transition.

## Playground

The navigation is available on every playground page. Visit `/components`, `/components/category/forms`, `/components/layout`, and `/tools` to explore the
hierarchy.
