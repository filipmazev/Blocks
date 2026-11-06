# Playground tools

The Tools overview groups the modal and toast configurators behind one navigation entry. Cards open the existing `/modal` and `/toastr` pages.

## Import

The playground lazy-loads `Tools` from `tools.ts` at `/tools`.

## Usage

Open Tools from the main navigation, then choose a configurator from its overview or open its navigation disclosure to browse the same destinations.

## API

The overview reads the shared `NavigationService` Tools section, preserving route visibility and resolved labels. It has no component inputs or outputs.

## Appearance and customization

Cards use Blocks surfaces, the responsive Grid component, and semantic color, spacing, and radius tokens. The active playground theme applies immediately.

## Behavior and accessibility

Cards are native links with visible keyboard focus. The grid fits narrow containers and enlarged text. Existing configurator URLs remain unchanged.

## Playground

Visit `/tools`, `/modal`, or `/toastr`.
