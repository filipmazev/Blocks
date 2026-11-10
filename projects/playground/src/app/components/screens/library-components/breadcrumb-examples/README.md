# Breadcrumb examples

Interactive overflow controls for the public Blocks Breadcrumbs component.

## Import

The component catalog imports `BreadcrumbExamples` from `./breadcrumb-examples` and renders `<app-breadcrumb-examples />`.

## Usage

Change the visible count, display the complete trail, or disable hover opening. The five-entry explicit trail contains real playground routes. The second trail
continues to resolve from the current route metadata.

## API

This playground component has no public inputs. Its controls supply `items` and `breadcrumbConfig` to `Breadcrumbs`.

## Appearance and customization

Controls use Blocks InputField, Checkbox, and Stack. The breadcrumb and overflow menu inherit the current theme and shared appearance preferences.

## Behavior and accessibility

Hover, click/tap, and keyboard activation open hidden ancestors. Ancestor links navigate; Escape closes the menu and returns to the ellipsis. Use a narrow
layout to inspect wrapping and viewport-constrained overflow.

## Playground

Open `/components/breadcrumbs`. The authoritative API is in the library Breadcrumbs guide.
