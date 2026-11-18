# Workbench inspector modal

Presents the existing Properties template in a Blocks side modal on medium screens.

## Import

Internal Playground component, opened by DemoWorkbench through ModalService.

## Usage

Between the shared `md` and `xl` breakpoints, activate Properties on any component playground page. Desktop uses the persistent SidePanel; phones use
BottomDrawer.

## API

The modal data is the workbench inspector TemplateRef. State remains owned by DemoWorkbench; closing the modal updates the same properties-open signal.

## Appearance and customization

Uses the shared modal header, theme, focus stack, and right-side layout. Controls fill the bounded content width and scroll below pinned search and tabs.

## Behavior and accessibility

The shared modal supplies the named dialog, focus trap, Escape handling, background isolation, and focus restoration. Opening or changing responsive
presentation never creates a second Properties inspector.

## Playground

Open `/components/layout/page-container` at a medium viewport and activate Properties.
