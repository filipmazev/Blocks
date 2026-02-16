# @filip.mazev/modal

## Blocks - Modal Library

**Blocks** is a powerful Angular component library. Its flagship feature is a highly customizable, service-driven **Modal** system that supports dynamic content, various positions, mobile-optimized swipe gestures, and robust theming.

## Features

* Service-Driven: Open and close modals from anywhere in your application using ModalService.
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

### Theme Configuration

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

## Usage

### Create a Modal Component

Your modal content components must extend `IModal<TData, TResult>`:

Typescript:

```typescript
import { Modal, ModalHeaderDirective, ModalFooterDirective } from '@filip.mazev/modal';

@Component({
  selector: 'app-my-modal-component',
  imports: [
    ModalHeaderDirective, // optional (only if defining custom header)
    ModalFooterDirective // optional (only if defining custom footer)
  ],
  templateUrl: './my-modal-component.html',
  styleUrl: './my-modal-component.scss',
})
export class MyModalComponent extends Modal<MyData, MyResult> {

}
```

HTML (Template):

```HTML
<div *appModalHeader>
    Example Header
</div>

<h1>
 {{ data.Title }}
</h1>

<p>
 {{ data.Body }}
</p>

<div *appModalFooter>
    Example Footer
</div>
```

### About `ModalRef<D, R>`

Accessible via this.modal inside any component that extends Modal. This reference provides programmatic control over the active modal instance, access to its configuration, and observable streams for its lifecycle events.

#### Methods

* `close(state?, result?, forceClose?)`: Closes the modal instance.
* `state` (ModalCloseMode): The state of the closing action (e.g., 'confirm' or 'cancel'). Defaults to 'cancel'.
* `result` (R): Optional data to return to the component that opened the modal.
* `forceClose` (boolean): If true, bypasses any confirmCloseConfig checks or guards. Defaults to false.
* `modalState$()`: Returns an `Observable<ModalState>`. Emits the current lifecycle state of the modal (OPENING, OPEN, CLOSING, CLOSED).
* `backdropClick()`: Returns an `Observable<MouseEvent>`. Emits an event whenever the user clicks on the modal's backdrop.
* `afterClosed()`: Returns an `Observable<IModalCloseResult<R | undefined>>`. Emits the final result object (containing the state and data) once the modal has fully closed and animations have finished.

#### Properties

* `modalConfig: (ModalConfig<D> | undefined)` Access to the configuration object used to open this modal. Useful for retrieving custom options or identifying the modal.
* `componentRef: (ComponentRef<C>)` The Angular ComponentRef of the content component (your component) inside the modal.
* `modalContainerRef: (ComponentRef<ModalComponent>)` The Angular ComponentRef of the wrapper container (the shell responsible for the backdrop, animations, and layout).
* `modalContainerElement: (HTMLElement)` The native HTML element of the modal container.

#### `IModalCloseResult`

The structure of the object returned when a modal closes, accessible via the observable from afterClosed(). Contains:

* `data` |`R`|: (optional) The data payload returned by the modal (e.g., the form result or selected item). This is undefined if no data was passed during closure.
* `state` |`ModalCloseMode`|: (required) Indicates how the modal was closed. Common values include 'confirm' (successful action) or 'cancel' (dismissed via backdrop, close button, or cancel action).

### 2. Opening the Modal

Use the ModalService to launch your component:

```typescript
private modals = inject(ModalService);

...

const modalRef = this.modals.open<MyData, MyResult>(MyModalComponent, {
  data: { id: 1 }, // Must be of the type specified in MyData
  style: {
    layout: 'right', // Slide in from the right (left and center are also available options)
  },
  bannerText: 'Modal Title Here'
});

modalRef.afterClosed().subscribe(result: IModalCloseResult<MyData> => {
    // result.state can be 'confirm' or 'cancel'
    console.log('Modal closed with action:', result.state); 

    // result.data is of type `MyData` |`` undefined` since no data is returned on 'cancel'
    if(result.data) {
        console.log('Modal Result value:', result.data);
    }
});
```

## Configuration Options

### `IModalConfig`

Controls the behavior and content of the modal container:

* `open` |`boolean`|: (optional) Whether the modal should be open or not, will default to true.
* `afterClose` |`() => Observable<IModalCloseResult<R | undefined>>`|: (optional) The function to run after the modal closes.
* `closeGuard` |`ModalCloseGuard`| (optional) The guard that will determine whether the modal can be closed or not
* `closeGuardOnlyOnCancel` |`boolean`| (optional) Whether the close guard should only be checked on cancel actions, will default to true
* `disableClose` |`boolean`|: (optional) Whether the modal should be closable or not, will default to false. This applies to the close button, escape key, and backdrop.
* `disableCloseOnBackdropClick` |`boolean`|: (optional) Whether the modal shouldn't be closable specifically when the user clicks on the backdrop, will default to false.
* `disableCloseOnNavigation` |`boolean`|: (optional) Whether the modal should remain open when the user navigates away from the current page, will default to false.
* `data` |`TData`|: (optional) The data to pass to the component of the modal. The component needs to use the @Inject(MODAL_DATA) or `data = inject<string>(MODAL_DATA);` (modern syntax) decorator to receive this.
* `style` |`IModalStyleConfig`|: (optional) The visual style configuration for the modal (layout, backdrop, etc.), will default to an empty object.
* `bannerText` |`string`|: (optional) The text to display in the header banner of the modal.
* `contentClasses` |`string`|: (optional) Custom CSS classes to apply directly to the content container of the modal.
* `contentStyles` |`string`|: (optional) Inline CSS styles to apply directly to the content container of the modal.
* `disableConsoleWarnings` |`boolean`|: (optional) Whether to suppress library warnings in the console, will default to false.
* `disableConsoleInfo` |`boolean`|: (optional) Whether to suppress library info logs in the console, will default to false.
* `id` |`string`|: (optional) The unique identifier of the modal, will default to a random string if not provided.

### `IModalStyleConfig`

Controls the visual appearance:

* `layout` |`ModalLayout`|: (optional) The layout of the modal (can be 'center', 'left', 'right' or 'bottom-sheet'), will default to 'center'.
* `breakpoints` |`Partial<Record<BreakpointKey, ModalLayout>>`|: (optional) A map of responsive overrides. It defines specific layouts for screen widths less than or equal to specific breakpoints. Defaults to undefined.
* `animate` |`boolean`|: (optional) Whether the modal should have open/close animations or not, will default to true.
* `hasBackdrop` |`boolean`|: (optional) Whether the modal should have a dimmed backdrop or not, will default to true.
* `closeDelay` |`number`|: (optional) The delay in milliseconds before the modal actually closes after the close action is triggered, will default to `MODAL_DEFAULT_ANIM_DURATION` = 175.
* `showCloseButton` |`boolean`|: (optional) Whether the modal should show a close button or not, will default to true.
* `mobileConfig` |`IBottomSheetModalConfig`|: (optional) The configuration for the bottom sheet modal (swipe limits, height), will default to an empty object.
* `contentWrapper` |`boolean`|: (optional) Whether the content should be wrapped in a default-styled container (providing padding/background) or not, will default to true.
* `wrapperClasses` |`string`|: (optional) Custom CSS classes to apply to the wrapper of the modal.
* `wrapperStyles` |`string`|: (optional) Inline CSS styles to apply to the wrapper of the modal.
* `overrideFullHeight` |`boolean`|: (optional) Whether the modal should override the default full-height restriction or not, will default to false.

### The Breakpoints

Logic: The system uses a "Max-Width" matching strategy.

1. The library sorts your defined breakpoints by size (smallest to largest).
2. It checks the current window width against these breakpoints.
3. The first breakpoint that satisfies windowWidth <= breakpointWidth is applied.
4. If the window width is larger than all defined breakpoints, the default layout property is used.

Available Keys: xs (360px), sm (640px), md (768px), lg (1024px), xl (1280px), 2xl (1536px), 3xl (1920px), 4xl (2560px).

_Note: Reference the documentation for @filip.mazev/blocks-core for up-to-date values for these breakpoints_  

* Example:

```typescript
style: {
  layout: 'right', // Applied when width > 1280px (Desktop)
  breakpoints: {
    'sm': 'bottom-sheet', // Applied when width <= 640px (Mobile)
    'xl': 'center'        // Applied when width <= 1280px AND > 640px (Tablet/Laptop)
  }
}
```

### `IBottomSheetModalConfig`

Configuration for the mobile-optimized bottom sheet modal (bottom sheet):

* `downSwipeLimit` |`number`|: (optional) The limit for down swipe to close the modal (1/N of modal height needs to be reached to trigger close), will default to MODAL_DOWN_SWIPE_LIMIT = 3
* `customHeight` |`number`|: (optional) A specific maximum height (in pixels) for the bottom sheet modal. If provided, this overrides the default dynamic height behavior.

## Close Guards

Close Guards provide a powerful mechanism to intercept and control the modal closing process. Similar to Angular Route Guards, they allow you to run logic, validate state, or prompt the user before a modal is actually dismissed.

### `ModalCloseGuard` (Abstract Base Class)

To implement custom logic, extend the abstract ModalCloseGuard class. Your guard must implement the canClose method, which returns a boolean (or an Observable/Promise of a boolean).

1. Return true: The modal closes normally.
2. Return false: The closing action is aborted, and the modal remains open.

```typescript
import { ModalCloseGuard, ModalService } from '@filip.mazev/modal';
import { Observable, of } from 'rxjs';

export class UnsavedChangesGuard extends ModalCloseGuard {
  constructor(private hasUnsavedChanges: boolean) {
    super();
  }

  canClose(modalService: ModalService): boolean {
    if (this.hasUnsavedChanges) {
      return confirm('You have unsaved changes. Discard?'); // Simple browser confirm
    }
    return true;
  }
}
```

### `ModalConfirmCloseGuard`

The library provides a built-in ModalConfirmCloseGuard implementation designed to make "Confirm Close" workflows (e.g., "Are you sure you want to discard unsaved changes?") completely type-safe and effortless.

Instead of using a browser alert, this guard automatically opens another modal (your specified confirm component) and waits for its result.

Parameters:

1. `component`: The component class to use for the confirmation dialog.
2. `config`: The configuration object for that confirmation component (passed as IModalConfig).

### Usage Example

This example demonstrates a deeply nested, type-safe confirmation flow.

```typescript
import { ModalConfirmCloseGuard } from '@filip.mazev/modal';

// Open the main modal
const modal = this.modals.open<string, undefined>(CenteredModal, {
  data: "Hello from Modal!",
  
  // Attach the guard to the configuration
  closeGuard: new ModalConfirmCloseGuard<ConfirmData, undefined>(ConfirmCloseComponent, {
    // This configuration is strictly typed to ConfirmCloseComponent's data requirements
    data: {
      title: 'Unsaved Changes',
      message: 'Are you sure you want to close this modal?'
    },
    style: {
      layout: 'center'
    }
  })
});
```
