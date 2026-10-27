export interface ComponentExample {
  id: string;
  title: string;
  group: string;
  readme: string;
  symbol: string;
  package: string;
  selector: string;
  description: string;
  example: string;
}

export const COMPONENT_EXAMPLES: readonly ComponentExample[] = [
  {
    id: 'button',
    title: 'Button',
    group: 'Forms',
    readme: 'projects/blocks/forms/components/button/README.md',
    symbol: 'Button',
    package: '@filip.mazev/blocks/forms',
    selector: 'button[bx-button]',
    description: 'An action control with Blocks intent colors, familiar variants and visible focus.',
    example: '<button bx-button variant="filled" (click)="save()">Save changes</button>'
  },
  {
    id: 'checkbox',
    title: 'Checkbox',
    group: 'Forms',
    readme: 'projects/blocks/forms/components/checkbox/README.md',
    symbol: 'Checkbox',
    package: '@filip.mazev/blocks/forms',
    selector: 'bx-checkbox',
    description: 'A boolean choice integrated with Angular forms.',
    example: '<bx-checkbox label="Receive updates" [formControl]="updates" />'
  },
  {
    id: 'form-field',
    title: 'Form field',
    group: 'Forms',
    readme: 'projects/blocks/forms/components/form-field/README.md',
    symbol: 'FormField',
    package: '@filip.mazev/blocks/forms',
    selector: 'bx-form-field',
    description: 'A shared label, help text, validation and loading frame for controls.',
    example:
      '<bx-form-field label="Project name" forId="project" [required]="true" [error]="error">\n  <input id="project" (input)="update($event)" />\n</bx-form-field>'
  },
  {
    id: 'input-field',
    title: 'Input field',
    group: 'Forms',
    readme: 'projects/blocks/forms/components/input-field/README.md',
    symbol: 'InputField',
    package: '@filip.mazev/blocks/forms',
    selector: 'bx-input-field',
    description: 'A text, date or numeric input with a floating label and validation feedback.',
    example: '<bx-input-field label="Project name" [formControl]="name" />'
  },
  {
    id: 'radio',
    title: 'Radio',
    group: 'Forms',
    readme: 'projects/blocks/forms/components/radio-button/README.md',
    symbol: 'Radio',
    package: '@filip.mazev/blocks/forms',
    selector: 'bx-radio',
    description: 'A single choice within a named group.',
    example:
      '<bx-radio label="Daily" name="frequency" value="daily" [formControl]="frequency" />\n<bx-radio label="Weekly" name="frequency" value="weekly" [formControl]="frequency" />'
  },
  {
    id: 'search-input',
    title: 'Search input',
    group: 'Forms',
    readme: 'projects/blocks/forms/components/search-input/README.md',
    symbol: 'SearchInput',
    package: '@filip.mazev/blocks/forms',
    selector: 'bx-search-input',
    description: 'A searchable text control with a clear action.',
    example: '<bx-search-input label="Find a component" [formControl]="query" (search)="filter($event)" />'
  },
  {
    id: 'select',
    title: 'Select',
    group: 'Forms',
    readme: 'projects/blocks/forms/components/select/README.md',
    symbol: 'Select',
    package: '@filip.mazev/blocks/forms',
    selector: 'bx-select',
    description: 'A single-value selection control with a positioned options panel and optional search.',
    example: '<bx-select label="Destination" [options]="options" [isSearchable]="true" [formControl]="destination" />'
  },
  {
    id: 'slider',
    title: 'Slider',
    group: 'Forms',
    readme: 'projects/blocks/forms/directives/slider/README.md',
    symbol: 'SliderDirective',
    package: '@filip.mazev/blocks/forms',
    selector: 'input[type=range][bxSlider]',
    description: 'A native range input with an opaque circular thumb and theme-aware value fill.',
    example: '<label for="volume">Volume</label>\n<input id="volume" type="range" bxSlider min="0" max="100" [formControl]="volume" />'
  },
  {
    id: 'slide-toggle',
    title: 'Slide toggle',
    group: 'Forms',
    readme: 'projects/blocks/forms/components/slide-toggle/README.md',
    symbol: 'SlideToggle',
    package: '@filip.mazev/blocks/forms',
    selector: 'bx-slide-toggle',
    description: 'A boolean preference that takes effect immediately.',
    example: '<bx-slide-toggle label="Enable notifications" [formControl]="notifications" />'
  },
  {
    id: 'error',
    title: 'Error message',
    group: 'Forms',
    readme: 'projects/blocks/forms/directives/error/README.md',
    symbol: 'BxError, FormField',
    package: '@filip.mazev/blocks/forms',
    selector: 'bx-error',
    description: 'A projected custom error message inside a form-field.',
    example:
      '<bx-form-field label="Reference" forId="reference">\n  <input id="reference" aria-describedby="reference-error" />\n  <bx-error id="reference-error">Enter at least three characters.</bx-error>\n</bx-form-field>'
  },
  {
    id: 'menu',
    title: 'Menu',
    group: 'Primitives',
    readme: 'projects/blocks/primitives/components/menu/README.md',
    symbol: 'Menu, MenuItem',
    package: '@filip.mazev/blocks/primitives',
    selector: 'bx-menu',
    description: 'A shared surface for related menu actions.',
    example:
      '<bx-menu>\n  <bx-menu-item label="Duplicate" icon="copy" (action)="duplicate()" />\n  <bx-menu-item label="Archive" icon="archive" (action)="archive()" />\n</bx-menu>'
  },
  {
    id: 'menu-item',
    title: 'Menu item',
    group: 'Primitives',
    readme: 'projects/blocks/primitives/components/menu-item/README.md',
    symbol: 'MenuItem',
    package: '@filip.mazev/blocks/primitives',
    selector: 'bx-menu-item',
    description: 'A menu action with optional icons, a shortcut hint, and destructive intent.',
    example: '<bx-menu-item label="Delete" icon="trash-2" [danger]="true" (action)="remove()" />'
  },
  {
    id: 'tooltip',
    title: 'Tooltip',
    group: 'Primitives',
    readme: 'projects/blocks/primitives/components/tooltip/README.md',
    symbol: 'Tooltip',
    package: '@filip.mazev/blocks/primitives',
    selector: 'bx-tooltip',
    description: 'A short descriptive surface for supplementary help.',
    example: '<bx-tooltip text="Changes are saved automatically." />'
  },
  {
    id: 'dropdown',
    title: 'Dropdown',
    group: 'Primitives',
    readme: 'projects/blocks/primitives/directives/dropdown/README.md',
    symbol: 'DropdownDirective, Menu, MenuItem',
    package: '@filip.mazev/blocks/primitives',
    selector: '[bxDropdown]',
    description: 'A positioned menu that fades in and out without resizing its contents.',
    example:
      '<button bx-button [bxDropdown]="actions" bxTransition="fade">Actions</button>\n<ng-template #actions>\n  <bx-menu><bx-menu-item label="Save" (action)="save()" /></bx-menu>\n</ng-template>'
  },
  {
    id: 'context-menu',
    title: 'Context menu',
    group: 'Primitives',
    readme: 'projects/blocks/primitives/directives/context-menu/README.md',
    symbol: 'ContextMenuDirective, Menu, MenuItem',
    package: '@filip.mazev/blocks/primitives',
    selector: '[bxContextMenu]',
    description: 'A menu positioned at a context action’s coordinates.',
    example:
      '<div [bxContextMenu]="actions">Right-click here</div>\n<ng-template #actions><bx-menu><bx-menu-item label="Copy" (action)="copy()" /></bx-menu></ng-template>'
  },
  {
    id: 'tooltip-directive',
    title: 'Tooltip trigger',
    group: 'Primitives',
    readme: 'projects/blocks/primitives/directives/tooltip/README.md',
    symbol: 'TooltipDirective',
    package: '@filip.mazev/blocks/primitives',
    selector: '[bxTooltip]',
    description: 'Connects a help surface to a trigger using the overlay positioning system.',
    example: '<button bx-button bxTooltip="Saves this project" placement="top">Save</button>'
  },
  {
    id: 'breadcrumbs',
    title: 'Breadcrumbs',
    group: 'Navigation',
    readme: 'projects/blocks/navigation/components/breadcrumbs/README.md',
    symbol: 'Breadcrumbs',
    package: '@filip.mazev/blocks/navigation',
    selector: 'bx-breadcrumbs',
    description: 'A route-aware trail derived from Blocks navigation metadata.',
    example: '<bx-breadcrumbs [minimumBreadcrumbs]="1" divider="chevron-right" />'
  },
  {
    id: 'icon',
    title: 'Icon',
    group: 'Icons',
    readme: 'projects/blocks/icons/components/README.md',
    symbol: 'Icon',
    package: '@filip.mazev/blocks/icons',
    selector: 'bx-icon',
    description: 'An asynchronously loaded SVG icon using semantic foreground and background tokens.',
    example: '<bx-icon name="sparkles" size="32" color="text-primary" [decorative]="false" ariaLabel="Highlights" />'
  },
  {
    id: 'modal-core',
    title: 'Modal core',
    group: 'Modals',
    readme: 'projects/blocks/modal/components/README.md',
    symbol: 'ModalCore',
    package: '@filip.mazev/blocks/modal',
    selector: 'service-owned view',
    description: 'The service-owned host that composes modal content and chooses the active layout.',
    example: '<!-- Open from an action in your template -->\n<button bx-button (click)="openModal()">Open modal core</button>'
  },
  {
    id: 'modal-centered',
    title: 'Centered modal',
    group: 'Modals',
    readme: 'projects/blocks/modal/components/views/centered/README.md',
    symbol: 'ModalCentered',
    package: '@filip.mazev/blocks/modal',
    selector: 'service-owned view',
    description: 'A focused dialog centered in the available viewport.',
    example: '<!-- Open from an action in your template -->\n<button bx-button (click)="openModal()">Open centered modal</button>'
  },
  {
    id: 'modal-side',
    title: 'Side modal',
    group: 'Modals',
    readme: 'projects/blocks/modal/components/views/side/README.md',
    symbol: 'ModalSide',
    package: '@filip.mazev/blocks/modal',
    selector: 'service-owned view',
    description: 'A left or right panel for editing alongside the page context.',
    example: '<!-- Open from an action in your template -->\n<button bx-button (click)="openModal()">Open side modal</button>'
  },
  {
    id: 'modal-bottom-sheet',
    title: 'Bottom sheet',
    group: 'Modals',
    readme: 'projects/blocks/modal/components/views/bottom-sheet/README.md',
    symbol: 'ModalBottomSheet',
    package: '@filip.mazev/blocks/modal',
    selector: 'service-owned view',
    description: 'A bottom-aligned modal surface suitable for compact actions and mobile layouts.',
    example: '<!-- Open from an action in your template -->\n<button bx-button (click)="openModal()">Open bottom sheet</button>'
  },
  {
    id: 'modal-backdrop',
    title: 'Modal backdrop',
    group: 'Modals',
    readme: 'projects/blocks/modal/components/shared/ui/backdrop/README.md',
    symbol: 'ModalBackdrop',
    package: '@filip.mazev/blocks/modal',
    selector: 'service-owned view',
    description: 'The background scrim that separates an open modal from page content.',
    example: '<!-- Open from an action in your template -->\n<button bx-button (click)="openModal()">Open modal backdrop</button>'
  },
  {
    id: 'modal-banner',
    title: 'Modal banner',
    group: 'Modals',
    readme: 'projects/blocks/modal/components/shared/ui/banner/README.md',
    symbol: 'ModalBanner',
    package: '@filip.mazev/blocks/modal',
    selector: 'bx-modal-banner',
    description: 'The shared modal heading, semantic icon and close action.',
    example: '<bx-modal-banner [header]="{ text: \'Project settings\' }" [showCloseButton]="true" (close)="dismiss($event)" />'
  },
  {
    id: 'toast-core',
    title: 'Toast core',
    group: 'Notifications',
    readme: 'projects/blocks/toastr/components/README.md',
    symbol: 'ToastCore, ToastrService',
    package: '@filip.mazev/blocks/toastr',
    selector: 'service-owned view',
    description: 'The toast lifecycle host with progress, dismissal and content composition.',
    example: '<button bx-button (click)="notify()">Show notification</button>'
  },
  {
    id: 'simple-toast',
    title: 'Simple toast',
    group: 'Notifications',
    readme: 'projects/blocks/toastr/components/views/simple-toast/README.md',
    symbol: 'SimpleToast, ToastrService',
    package: '@filip.mazev/blocks/toastr',
    selector: 'service-owned view',
    description: 'A notification with a semantic icon, optional title and message.',
    example: '<button bx-button (click)="notify()">Show success</button>'
  },
  {
    id: 'surface',
    title: 'Surface effects',
    group: 'Primitives',
    readme: 'projects/blocks/effects/README.md',
    symbol: 'BxSurfaceDirective',
    package: '@filip.mazev/blocks/effects',
    selector: '[bxSurface]',
    description: 'Apply the shared glass material to a custom surface while inheriting application settings.',
    example: '<section bxSurface>Custom content follows the global appearance settings.</section>'
  },
  {
    id: 'modal-header',
    title: 'Modal header',
    group: 'Modals',
    readme: 'projects/blocks/modal/directives/header/README.md',
    symbol: 'ModalHeaderDirective',
    package: '@filip.mazev/blocks/modal',
    selector: '[appModalHeader]',
    description: 'Projects custom header content into the active Blocks modal layout.',
    example: '<div *appModalHeader>Custom header content</div>'
  },
  {
    id: 'modal-footer',
    title: 'Modal footer',
    group: 'Modals',
    readme: 'projects/blocks/modal/directives/footer/README.md',
    symbol: 'ModalFooterDirective',
    package: '@filip.mazev/blocks/modal',
    selector: '[appModalFooter]',
    description: 'Projects custom footer content into the active Blocks modal layout.',
    example: '<div *appModalFooter>Custom footer content</div>'
  }
];
