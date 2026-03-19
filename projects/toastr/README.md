# @filip.mazev/toastr

## Blocks - Toastr Library

**Blocks** is a powerful Angular component library. The **Toastr** package provides a highly customizable, component-driven toast notification system. It features robust queue management, swipe-to-dismiss gestures for mobile, flexible screen positioning, and full type safety for dynamic content.

## Features

* Service-Driven & Component-Based: Queue toasts from anywhere using ToastrService while rendering your own custom Angular components inside the toast wrappers.
* Smart Queue Management: Automatically limits the number of visible toasts on screen (configurable) and queues the rest.
* Flexible Positioning: Supports top/bottom and left/right/center placements, adjusting automatically for mobile viewports.
* Mobile Optimized: Native-feeling vertical swipe-to-dismiss gestures built-in.
* Auto-Dismiss: Configurable timeouts to automatically close notifications.
* Dynamic Data: Pass strictly typed data to your toast components and return results.

## Installation

```bash
npm i @filip.mazev/toastr@latest
```

Or with the global blocks `ng` command which adds all blocks packages and sets up your styles.scss

```bash
ng add @filip.mazev/blocks@latest
```

### Theme Configuration

To ensure the library's stylization works correctly, import the core theme provider in your global styles (`styles.scss`). The toast notifications utilize standard CSS variables for styling.

```scss
@use '@filip.mazev/blocks-core/src/lib/styles/index' as blocks;
@use '@filip.mazev/toastr/lib/styles/index' as toastr;

@layer base {
    :root {
        @include blocks.core-theme(blocks.$default-light-theme-config);

        // if you dont want to override themes, just use: 
        // @include toastr.toastr-theme(());

        @include toastr.toastr-theme((
            /* Optional: Override default Toast style variables */
          '--toast-bg': #ffffff,
          '--toast-text': #000000
        ));
    }

    [data-theme='dark'] {
        @include blocks.core-theme(blocks.$default-dark-theme-config);

        @include toastr.toastr-theme((
          /* Optional: Override default Toast wrapper variables */
          '--toast-bg': #000000,
          '--toast-text': #ffffff
        ));
    }
}
```

_Note: If you provide a custom wrapperClass in your toast configuration, you can bypass the default wrapper styling entirely and apply your own custom CSS classes._

## Usage

### Create a Toast Component

Your custom toast components must extend the `Toast<TData, TResult>` base class (which implements `IToast<D, R>`).

Typescript:

```typescript
import { Component } from '@angular/core';
import { Toast } from '@filip.mazev/toastr';
import { INotificationView } from '@interfaces/ui/inotification-view.interface';

@Component({
  selector: 'app-custom-toast',
  templateUrl: './custom-toast.html',
  styleUrl: './custom-toast.scss'
})
export class CustomToastComponent extends Toast<INotificationView, undefined> {
  
  // Example method to close the toast from within the component
  protected onDismiss(): void {
    this.close(); 
  }
}
```

HTML (Template):

```HTML
<div class="notification">
    <button class="notification-close-button" (click)="onDismiss()">✕</button>
    <div class="notification-content">
        <h3>{{ data.title }}</h3>
        <p [class]="'notification-' + data.type">{{ data.message }}</p>
    </div>
</div>
```

### About `ToastRef<D, R>`

Accessible via `this.toast` inside any component that extends `Toast`. This reference provides programmatic control over the active toast instance.

#### Methods & Observables

* `close()`: Triggers the exit animation and safely removes the toast from the DOM, allowing the next queued toast to appear.
* `pause()`: Pauses the auto-dismiss timer, preventing the toast from closing until resumed.
* `resume()`: Resumes the auto-dismiss timer if it was previously paused.
* `config`: The resolved `IToastConfig<D>` for this toast instance, combining global defaults and any overrides provided during queuing.
* `afterClosed$`: An `Observable<void>` that emits once the toast has fully closed and animations have finished.
* `onPause$`: An `Observable<void>` that emits when the toast's auto-dismiss timer is paused (e.g., on mouse hover).
* `onResume$`: An `Observable<void>` that emits when the toast's auto-dismiss timer is resumed (e.g., on mouse leave).

### 2. Opening the Toast

Use the `ToastrService` to launch your component. Unlike modals, toasts are "queued", meaning if you exceed the `maxOpened` limit, they will wait their turn before displaying.

```typescript
import { Component, inject } from '@angular/core';
import { ToastrService } from '@filip.mazev/toastr';

@Component({ ... })
export class MyFeatureComponent {
    private readonly toastr = inject(ToastrService);

    public showNotification(view: INotificationView) {
        const toastRef = this.toastr.queueToast(CustomToastComponent, {
            data: view, // Strictly typed to INotificationView
            position: 'top-right',
            durationInMs: 5000,
            swipeToDismiss: true
        });

        toastRef.afterClosed$.subscribe(() => {
            console.log('Toast finished and removed from screen.');
        });
    }
}
```

## Configuration Options

### `IToastConfig<D>`

Controls the behavior, data, and placement of an individual toast:

* `data` |`D`|: (optional) The typed payload passed into the toast component.
* `position` |`ToastPosition`|: (optional) Where the toast should appear on the screen ('top-right', 'top-left', 'top-center', 'bottom-right', 'bottom-left', 'bottom-center'). Defaults to 'top-right'.
* `durationInMs` |`number`|: (optional) The time in milliseconds before the toast automatically closes. Defaults to 5000.
* `swipeToDismiss` |`boolean`|: (optional) Whether the user can swipe vertically to dismiss the toast. Defaults to true.
* `animate` |`boolean`|: (optional) Whether the toast should animate in and out. Defaults to true.
* `wrapperClass` |`string`|: (optional) A custom CSS class to apply to the toast's outer wrapper container. If omitted, it uses 'default-wrapper'.
* `hasDefaultBackground` |`boolean`|: (optional) If set to false, the default background color will be removed from the default wrapper

## Global Toastr Settings

Similar to the modal library (`@filip.mazev/modal`), you can manage application-wide defaults using the `ToastrGlobalSettingsService`. These defaults apply automatically unless overridden by the IToastConfig during the queueToast call. It also is the place where `maxOpened` is configured since this is a global configuration.

### Example Usage

```typescript
import { Component, inject } from '@angular/core';
import { ToastrGlobalSettingsService } from '@filip.mazev/toastr';

@Component({ ... })
export class AppComponent {
  private readonly toastrGlobalSettings = inject(ToastrGlobalSettingsService);

  constructor() {
    // Update global defaults at runtime
    this.toastrGlobalSettings.update({
      position: 'bottom-right',   // Move all toasts to the bottom right
      durationInMs: 7500,         // Keep toasts open longer by default
      maxOpened: 3,               // Only show 3 toasts at a time; queue the rest
      swipeToDismiss: true
    });
  }
}
```

### How It Works

* The `ToastrGlobalSettingsService` utilizes Angular Signals (`signal<T>`) for its internal state.
* Whenever `ToastrService.queueToast()` is called, it resolves missing configuration options against these global signals.
* You can dynamically alter these settings at any point in your application's lifecycle, affecting all subsequent toast notifications.

## Quick Status Toasts (SimpleToast)

While toastr excels at rendering highly customized components, it also provides a built-in `SimpleToast` component for standard status notifications. You don't need to create your own components to display basic success, info, warning, or error messages.

The `ToastrService` exposes four convenience methods: `queueSuccess`, `queueInfo`, `queueWarning`, and `queueError`.

### SimpleToast Usage

These methods accept an `IQueueSimpleToastRequest` object. They automatically inherit your global settings unless overridden.

```typescript
import { Component, inject } from '@angular/core';
import { ToastrService } from '@filip.mazev/toastr';

@Component({ ... })
export class MyFeatureComponent {
    private readonly toastr = inject(ToastrService);

    public saveDocument() {
        // ... save logic ...

        // Fire a quick success toast
        this.toastr.queueSuccess({
            message: 'Your document was saved successfully.',
            title: 'Save Complete' // Optional
        });
    }

    public reportIssue() {
        // Fire a quick error toast with an overridden position
        this.toastr.queueError({
            message: 'Failed to connect to the server. Please try again later.',
            position: 'bottom-center', // Optional override
            durationInMs: 10000 // Optional override
        });
    }
}
```

### The `IQueueSimpleToastRequest` Interface

When using the quick status methods, the configuration is streamlined to focus on the text content:

* `message` |`string`|: The main text body of the toast. If no title is provided, this text is automatically scaled up slightly for better visibility.
* `title` |`string`|: (optional) A bolded header for the toast.
* `position` |`ToastPosition`|: (optional) Overrides the globally configured screen position.
* `durationInMs` |`number`|: (optional) Overrides the globally configured auto-close timeout.

### Styling the Simple Toasts

The `SimpleToast` component uses specific CSS variables for its status colors. To ensure they look correct in your application, define these variables in your global styles.scss theme configuration:

```scss
@use '@filip.mazev/blocks-core/src/lib/styles/index' as blocks;
@use '@filip.mazev/toastr/lib/styles/index' as toastr;

@layer base {
    :root {
        @include blocks.core-theme(blocks.$default-light-theme-config);

        @include toastr.toastr-theme((
          /* Optional: Override default Toast wrapper variables */
          '--simple-toast-info': #e3f2fd,
          '--simple-toast-success': #e8f5e9,
          '--simple-toast-warn': #fff3cd,
          '--simple-toast-error': #fdecea,
          'toast-text-warn': #d32f2f
        ));
    }
}
```
