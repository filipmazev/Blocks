# @filip.mazev/modal

## Blocks - Modal Library

**Blocks** is a powerful Angular component library. Its flagship feature is a highly customizable, service-driven **Modal** system that supports dynamic content, various positions, mobile-optimized swipe gestures, and robust theming.

## Features

* Service-Driven: Open and close modals from anywhere in your application using GenericModalService.
* Flexible Layouts: Supports center, left, and right positioning.
* Mobile Optimized: Native-feeling swipe-to-close gestures for mobile devices.
* Dynamic Data: Pass data to modal components with full type safety.
* Confirmation Flows: Built-in support for "Confirm Close" prompts to prevent accidental data loss.
* Theming: Deeply integrated Scss theming system using CSS variables.

## Installation

Please install both @filip.mazev/blocks-core and @filip.mazev/modal for propert functionality and full customization.

```bash
npm i @filip.mazev/blocks-core@latest @filip.mazev/modal@latest
```

### 1. Theme Configuration

To enable the library's stylization, import the theme provider in your global styles (styles.scss):

```scss
@use '@filip.mazev/blocks-core/src/lib/styles/index' as blocks;
@use '@filip.mazev/modal/lib/styles/index' as modal;

@layer base {
    :root {
        @include blocks.core-theme(blocks.$default-light-theme-config);

        @include modal.modal-theme((
            'modal-mobile-swipe-line-color': #cfcfcf,
        ));
    }

    [data-theme='dark'] {
        @include blocks.core-theme(blocks.$default-dark-theme-config);
        @include modal.modal-theme((
            'modal-mobile-swipe-line-color': #444444,
        ));
    }
}
```

You can also provide your own theme, please make sure that you follow the naming convention of the existing themes such as `default-light-theme-config` (found in `@filip.mazev/blocks-core/src/lib/styles/themes/default-theme`) for proper functionality.

Other themes are also available such as:

* `$orange-company-light-theme-config`
* `$orange-company-dark-theme-config`

### 2. Register the Service

In your root component (usually `app.component.ts` or `app.ts`), register the `ViewContainerRef` and `Renderer2` so the service knows where to attach modals:

```typescript
import { Component, inject, Renderer2, signal, ViewContainerRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GenericModalService } from '@filip.mazev/modal';

@Component({
  selector: 'app-root',
  imports: [
      RouterOutlet
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Your App Name');
  
  private viewContainerRef = inject(ViewContainerRef);
  private renderer2 = inject(Renderer2);

  private modals = inject(GenericModalService);
  
  constructor() {
    this.modals.register(this.viewContainerRef, this.renderer2);
  }
}
```

## Usage

### 1. Create a Modal Component

Your modal content components must extend `GenericModal<TData, TResult>`:

Typescript:

```typescript
import { GenericModal, GENERIC_MODAL_DATA, ModalHeaderDirective, ModalFooterDirective } from '@filip.mazev/modal';

@Component({
  selector: 'app-my-modal-component',
  imports: [
    ModalHeaderDirective, // optional (only if defining custom header)
    ModalFooterDirective // optional (only if defining custom footer)
  ],
  templateUrl: './my-modal-component.html',
  styleUrl: './my-modal-component.scss',
})
export class MyModalComponent extends GenericModal<MyData, MyResult> {
  protected data = inject<MyData>(GENERIC_MODAL_DATA);

  constructor() {
    super();
  }

  override afterModalGet(): void {
    // This is called after the modal service has returned the instance of the generated modal to this component. You can access this.modal only after this 
  }

  override onDestroy(): void {
    // Perform onDestroy logic here as this method is called on ngOnDestroy on GenericModal
  }
}
```

HTML (Template):

```HTML
<div *modalHeader>
    Example Header
</div>

<div>
   Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, iste voluptatum accusamus facere explicabo impedit exercitationem dolore...
</div>

<div *modalFooter>
    Example Footer
</div>
```

### About `GenericModalRef<D, R>`

Accessible via this.modal inside any component that extends GenericModal. This reference provides programmatic control over the active modal instance, access to its configuration, and observable streams for its lifecycle events.

#### Methods

* `close(state?, result?, forceClose?)`: Closes the modal instance.
* `state` (ModalCloseMode): The state of the closing action (e.g., 'confirm' or 'cancel'). Defaults to 'cancel'.
* `result` (R): Optional data to return to the component that opened the modal.
* `forceClose` (boolean): If true, bypasses any confirmCloseConfig checks or guards. Defaults to false.
* `modalState$()`: Returns an `Observable<GenericModalState>`. Emits the current lifecycle state of the modal (OPENING, OPEN, CLOSING, CLOSED).
* `backdropClick()`: Returns an `Observable<MouseEvent>`. Emits an event whenever the user clicks on the modal's backdrop.
* `afterClosed()`: Returns an `Observable<IGenericCloseResult<R>>`. Emits the final result object (containing the state and data) once the modal has fully closed and animations have finished.

#### Properties

* `modalConfig: (GenericModalConfig<D> | undefined)` Access to the configuration object used to open this modal. Useful for retrieving custom options or identifying the modal.
* `componentRef: (ComponentRef<C>)` The Angular ComponentRef of the content component (your component) inside the modal.
* `modalContainerRef: (ComponentRef<GenericModalComponent>)` The Angular ComponentRef of the wrapper container (the shell responsible for the backdrop, animations, and layout).
* `modalContainerElement: (HTMLElement)` The native HTML element of the modal container.
* `selfIdentifier: ({ constructor: Function })` An object identifying the constructor of the component, used internally for instance tracking.

#### `IGenericCloseResult`

The structure of the object returned when a modal closes, accessible via the observable from afterClosed(). Contains:

* `data` |`R`|: (optional) The data payload returned by the modal (e.g., the form result or selected item). This is undefined if no data was passed during closure.
* `state` |`ModalCloseMode`|: (required) Indicates how the modal was closed. Common values include 'confirm' (successful action) or 'cancel' (dismissed via backdrop, close button, or cancel action).

### 2. Opening the Modal

Use the GenericModalService to launch your component:

```typescript
private modals = inject(GenericModalService);

...

const modalRef = this.modals.open<MyData, MyResult>(MyModalComponent, {
  data: { id: 1 }, // Must be of the type specified in MyData
  style: {
    position: 'right', // Slide in from the right (left and center are also available options)
    handleMobile: true, // True by default, means that on smaller screens the modal will automatically go into a bottom sheet view
  },
  bannerText: 'Modal Title Here'
});

modalRef.afterClosed().subscribe(result: IGenericCloseResult<MyData> => {
    // result.state can be 'confirm' or 'cancel'
    console.log('Modal closed with action:', result.state); 

    // result.data is of type `MyData` |`` undefined` since no data is returned on 'cancel'
    if(result.data) {
        console.log('Modal Result value:', result.data);
    }
});
```

## Configuration Options

### `IGenericModalConfig`

Controls the behavior and content of the modal container:

* `open` |`boolean`|: (optional) Whether the modal should be open or not, will default to true.
* `afterClose` |``Function``|: (optional) The function to run after the modal closes.
* `confirmCloseConfig` |``IGenericConfirmCloseConfig<ConfirmComponentData, ConfirmComponent>``|: (optional) The configuration for the confirm close modal (e.g., a "Discard changes?" prompt), will default to `{ confirmClose: false }`. `ConfirmComponentData and ConfirmComponent` need to be specified.
* `disableClose` |`boolean`|: (optional) Whether the modal should be closable or not, will default to false. This applies to the close button, escape key, and backdrop.
* `disableCloseOnBackdropClick` |`boolean`|: (optional) Whether the modal shouldn't be closable specifically when the user clicks on the backdrop, will default to false.
* `disableCloseOnNavigation` |`boolean`|: (optional) Whether the modal should remain open when the user navigates away from the current page, will default to false.
* `enableExtremeOverflowHandling` |`boolean`|: (optional) Whether the modal should enable extreme overflow handling for complex scrolling scenarios (may cause issues with keypress registration), will default to false.
* `webkitOnlyOverflowMobileHandling` |`boolean`|: (optional) Whether the modal should only handle overflow for webkit browsers on mobile or for all browsers, will default to true. Webkite sometimes handles `overflow: hidden` poorly, this will ensure that scrolling is disabled totally for everything that is not within the modal while it is open.
* `data` |`TData`|: (optional) The data to pass to the component of the modal. The component needs to use the @Inject(GENERIC_MODAL_DATA) or `data = inject<string>(GENERIC_MODAL_DATA);` (modern syntax) decorator to receive this.
* `style` |`IGenericModalStyleConfig`|: (optional) The visual style configuration for the modal (position, backdrop, etc.), will default to an empty object.
* `bannerText` |`string`|: (optional) The text to display in the header banner of the modal.
* `bannerTextAnnotatedString` |`string`|: (optional) An annotated string (supporting bold styles) to display in the banner, will default to an empty string.
* `contentClasses` |`string`|: (optional) Custom CSS classes to apply directly to the content container of the modal.
* `contentStyles` |`string`|: (optional) Inline CSS styles to apply directly to the content container of the modal.
* `disableConsoleWarnings` |`boolean`|: (optional) Whether to suppress library warnings in the console, will default to false.
* `disableConsoleInfo` |`boolean`|: (optional) Whether to suppress library info logs in the console, will default to false.
* `id` |`string`|: (optional) The unique identifier of the modal, will default to a random string if not provided.

### `IGenericModalStyleConfig`

Controls the visual appearance:

* `position` |`ModalPoistion`|: (optional) The position of the modal (can be 'center', 'left', or 'right'), will default to 'center'.
* `handleMobile` |`boolean`|: (optional) Whether the modal should automatically switch to a mobile configuration (swipeable sheet) when the screen width drops below a certain breakpoint.
* `animate` |`boolean`|: (optional) Whether the modal should have open/close animations or not, will default to true.
* `hasBackdrop` |`boolean`|: (optional) Whether the modal should have a dimmed backdrop or not, will default to true.
* `closeDelay` |`number`|: (optional) The delay in milliseconds before the modal actually closes after the close action is triggered, will default to `GENERIC_MODAL_DEFAULT_ANIM_DURATION` = 175.
* `showCloseButton` |`boolean`|: (optional) Whether the modal should show a close button or not, will default to true.
* `mobileConfig` |`IGenericSwipeableModalConfig`|: (optional) The configuration for the swipeable modal (swipe limits, height), will default to an empty object.
* `contentWrapper` |`boolean`|: (optional) Whether the content should be wrapped in a default-styled container (providing padding/background) or not, will default to true.
* `wrapperClasses` |`string`|: (optional) Custom CSS classes to apply to the wrapper of the modal.
* `wrapperStyles` |`string`|: (optional) Inline CSS styles to apply to the wrapper of the modal.
* `overrideFullHeight` |`boolean`|: (optional) Whether the modal should override the default full-height restriction or not, will default to false.

### `IGenericConfirmCloseConfig`

Configuration for the confirmation modal triggered when a user attempts to close the parent modal (e.g., "Unsaved Changes"):

* `confirmModalComponent` |`ComponentType<ConfirmComponent>`|: (required) The component class to use for the confirmation modal.
* `confirmClose` |`boolean`|: (required) Whether the confirmation flow should be active. If false, the modal closes immediately without confirmation.
* `confirmOnSubmit` |`boolean`|: (optional) Whether the confirmation should also trigger when the modal is closed via a "submit" (success) action. Defaults to false (meaning confirmation is only required for 'cancel' or backdrop closure).
* `style` |`IGenericModalStyleConfig`|: (optional) The visual style configuration for the confirmation modal instance.
* `data` |`ConfirmComponentData`|: (optional) The data to pass to the confirmation component. The component needs to use the @Inject(GENERIC_MODAL_DATA) decorator to receive this.
* `bannerText` |`string`|: (optional) The text to display in the header banner of the confirmation modal.
* `bypassSelfCheck` |`boolean`|: (optional) Whether the modal should bypass the internal check that ensures the confirmation is attached to the specific closing modal. Defaults to false.

### `IGenericSwipeableModalConfig`

Configuration for the mobile-optimized swipeable modal (bottom sheet):

* `upSwipeLimit` |`number`|: (optional) The resistance factor for swiping upwards beyond the fully open state. Determines the maximum distance the modal can be over-scrolled upwards. A higher number results in a smaller allowed distance (calculated as windowHeight / upSwipeLimit).
* `downSwipeLimit` |`number`|: (optional) The threshold factor for swiping downwards to close the modal. Determines how far the user must swipe down before the modal closes automatically. (calculated as windowHeight / downSwipeLimit).
* `customHeight` |`number`|: (optional) A specific maximum height (in pixels) for the swipeable modal. If provided, this overrides the default dynamic height behavior.
