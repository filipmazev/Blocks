# Utility page layout

Shared playground presentation for the six [utility examples](../../README.md). Route metadata selects the title, public API summary, guide, and source files.
The nested router outlet loads the selected example independently. Every page presents the demo above the documentation and code tabs.

## Import

Routes lazy-load `UtilityPage` from `@playground/components/screens/utilities/components/utility-page/utility-page`.

## Usage

Register utility metadata in `constants/utility-catalog.constants.ts`. The `/utilities` route uses this catalog for child routes, sidenav entries, and overview
cards.

## API

`IUtilityExample` connects each route ID, title, description, icon, public symbol, README, and lazy demo loader. Supporting declarations stay under the
utilities screen's category folders.

## Appearance and customization

The layout uses the shared Blocks PageContainer, automatic breadcrumbs, stacks, dividers, and component-info documentation tabs. The container resolves section
and page titles through NavigationService; descriptions come from the utility catalog. Shared semantic tokens keep it consistent with the active playground
appearance.

## Behavior and accessibility

A single page heading labels the article. Named demo and documentation sections appear in reading order. Each example owns cleanup of its resources.

## Playground

Reach this layout through any `/utilities/<utility>` route, such as `/utilities/viewport`.
