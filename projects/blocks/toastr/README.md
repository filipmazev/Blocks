# Toastr

Component-driven notifications with a bounded queue, typed custom content, semantic message helpers, progress, pause/resume, and swipe dismissal.

## Import

```ts
import { Toast, ToastrService, ToastrGlobalSettingsService } from '@filip.mazev/blocks/toastr';
```

Follow the [package setup](../README.md). Toastr is a secondary entry point of `@filip.mazev/blocks`.

## Usage

```ts
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Button } from '@filip.mazev/blocks/forms';
import { ToastrService } from '@filip.mazev/blocks/toastr';

@Component({
    selector: 'app-save-notification',
    imports: [Button],
    template: '<button bx-button (click)="notify()">Show success</button>',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SaveNotification {
    private readonly toastrService = inject(ToastrService);

    protected notify(): void {
        this.toastrService.queueSuccess({ title: 'Saved', message: 'Your settings are up to date.' });
    }
}
```

### Custom content

Create content in its own component file. The string payload keeps this example self-contained; place larger data interfaces in a dedicated `interfaces` folder.

```ts
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Button } from '@filip.mazev/blocks/forms';
import { Toast } from '@filip.mazev/blocks/toastr';

@Component({
    selector: 'app-custom-toast',
    imports: [Button],
    template: '<p>{{ data() }}</p><button bx-button (click)="close()">Dismiss</button>',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomToast extends Toast<string, undefined> {}
```

Inside an application action with an injected `ToastrService` and `CustomToast` imported from its defining file:

```ts
const ref = this.toastrService.queueToast(CustomToast, {
    data: 'The export is ready.',
    position: 'bottom-right',
    durationInMs: 5000,
    swipeToDismiss: true
});

ref.afterClosed$.subscribe(() => console.log('Notification closed'));
```

## API

### Queue and references

`queueInfo`, `queueSuccess`, `queueWarning`, and `queueDanger` accept `IQueueSimpleToastRequest` and return a typed `ToastRef`.
`queueToast(ContentComponent, config?)` queues custom content. Excess requests wait until an open slot becomes available; `maxOpened` defaults to four across
positions.

`Toast<D, R>` provides typed reactive `data()`, the `toast` reference, `onToastInit()`, and `close(result?)`. `ToastRef<D, R>` exposes `close(result?)`,
`pause()`, `resume()`, reactive `config()` and `data()`, and `afterClosed$`, `onPause$`, and `onResume$` observables.

### Live configuration patching

`ToastRef.patch(patch: IToastPatch<D>): void` updates an existing queued or open notification. The returned reference and `this.toast` inside content share the
same state. It is also injectable as `inject<ToastRef<D, R>>(ToastRef)`. Read resolved settings with `config()`, content with `data()`, lifecycle with
`state()`, and the current pause preference with `paused()`.

```ts
const ref = this.toastrService.queueInfo({
    title: 'File upload',
    message: 'Uploading your file…',
    icon: { name: 'upload' },
    loading: true,
    durationInMs: 0
});

// In your application's successful request completion:
ref.patch({
    data: { message: 'Upload complete', type: 'success', icon: { name: 'check' }, loading: false },
    closeButtonColor: 'text-success',
    progressBarColor: 'text-success',
    durationInMs: 4000
});
```

The same operation inside custom content is `this.toast.patch(...)`. For example, a component extending `Toast<{ message: string }, undefined>` can call
`this.toast.patch({ data: { message: 'Updated from inside' } })` and render `{{ data()?.message }}`. Define application data interfaces in their own files.

| Patch property                                       | Behavior                                                                                                                            |
| ---------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `data`                                               | Shallow-merge plain-object members; replace arrays, primitives, and nonplain objects. Undefined members retain existing values.     |
| `durationInMs`                                       | Explicitly restart the lifetime in milliseconds, even when the number equals the previous value; zero disables automatic dismissal. |
| `showCloseButton`, `closeButtonColor`                | Update dismissal presentation; null clears the color override.                                                                      |
| `showProgressBar`, `progressBarColor`                | Update progress visibility/color without resetting time; null clears the color override.                                            |
| `wrapperClass`                                       | Replace wrapper classes; null restores the default wrapper. Include `default-wrapper` when extending its presentation.              |
| `hasDefaultBackground`, `glassiness`, `glassQuality` | Update the existing surface policy, subject to application and accessibility settings.                                              |

Undefined means no change. Null clears the optional presentation overrides listed above. Data nullability follows the declared `D` contract; simple-toast
`title` and `icon` explicitly accept null to clear them. Nested application objects are replaced, not recursively merged. Supply complete initial data for
required object members before applying partial data updates. Patches never mutate the original payload or perform application requests.

Simple-toast data also accepts `icon`, `loading`, and `loadingLabel`. Loading replaces only the icon with the shared spinner; the normal icon and its backing
retain their dimensions and return when loading becomes false. Explicit loading state without an icon reserves a default 24px area to avoid shifts. Icon size
follows `icon.size`; invalid sizes fall back to 24px. The optional accessible `loadingLabel` accepts `ResolvableText` and defaults to the shared `Loading`
label. Loading does not pause the toast or extend its lifetime: configure `durationInMs: 0` when the notification must remain open during an operation.

Changing semantic `type` updates simple-toast text, surface, and emission. Explicit close/progress colors remain independently configurable; patch them
alongside the type when they should change together, as in the example above.

#### Lifetime, queue, and dismissal

Patching message, icon, appearance, or visibility preserves the remaining time. A duration patch resets timer and progress together. A paused toast stays
paused, including when its duration is patched; resuming uses the new remaining lifetime. Hidden progress can be restored at the current remaining fraction.
Pause/resume calls are idempotent, and existing hover and swipe interactions continue to use the reference's pause state.

Each notification retains its own configuration, remaining lifetime, pause state, and dismissal controller. Queue processing serializes mounting, including when
content construction or initialization synchronously queues another notification. The current capacity and pause policy are rechecked before each mount.

Queued patches do not promote a toast or start a timer. The queue mounts the latest configuration and starts the lifetime on display. Closing a queued reference
removes it without rendering. Patches during closing or after destruction are ignored; asynchronous completions cannot reopen it. Progress animations, timers,
subscriptions, and wrapper callbacks are released on destruction.

Position, component type, mounting, animation, and swipe configuration remain opening-time options and are absent from `IToastPatch<D>`.

#### Reactive custom content and migration

`Toast<D, R>.data` is now a `Signal<D | undefined>`. Replace `data.message` with `data()?.message` in templates and `this.data.message` with
`this.data()?.message` in TypeScript. Use `computed()` to derive translated or formatted content. A one-time local copy of `data()` does not subscribe to future
patches. `IToast<D, R>` now requires this signal contract and a read-only reference; custom implementations can inject `ToastRef` and expose `toast.data`.

Replace `ref.config` with `ref.config()` and direct mutation with `ref.patch(...)`. Configuration and data snapshots must be treated as read-only. `TOAST_DATA`
remains a nonreactive initialization snapshot for direct token consumers; migrate to `ToastRef.data` or the `Toast` base class to receive updates. References
are created by `ToastrService`; the wrapper no longer replaces the reference's `close()` method during initialization.

### Configuration

| `IToastConfig<D>` property             | Default and purpose                                                               |
| -------------------------------------- | --------------------------------------------------------------------------------- |
| `data`                                 | Optional custom component payload.                                                |
| `position`                             | `top-right`; also top-left, top-center, bottom-left, bottom-center, bottom-right. |
| `durationInMs`                         | `5000`; notification lifetime.                                                    |
| `swipeToDismiss`                       | `true`; allow swipe dismissal.                                                    |
| `animate`                              | `true`; reduced motion takes precedence.                                          |
| `showCloseButton`, `showProgressBar`   | `true`; display the wrapper actions and progress.                                 |
| `closeButtonColor`, `progressBarColor` | `text-primary`; semantic colors.                                                  |
| `wrapperClass`                         | Optional wrapper class override.                                                  |
| `hasDefaultBackground`                 | `true`; false also suppresses added glassiness.                                   |
| `glassiness`                           | `auto`; shared browser policy and accessibility settings still apply.             |
| `glassQuality`                         | `enhanced`; the application baseline and device budget take precedence.           |

Simple requests require `message` and accept optional `title`, both with `ResolvableText`, plus optional icon, loading, and accessible loading label. The simple
helper's progress option retains the existing spelling `showProgessBar`; custom toast configuration and global settings use `showProgressBar`.

`ToastrGlobalSettingsService.update(partial)` merges defaults without discarding unrelated settings. Per-toast configuration overrides these settings, followed
by library defaults. It also exposes `maxOpened` for queue capacity.

## Appearance and customization

```ts
import { inject } from '@angular/core';
import { ToastrGlobalSettingsService } from '@filip.mazev/blocks/toastr';

const toastrGlobalSettingsService = inject(ToastrGlobalSettingsService);
toastrGlobalSettingsService.update({ position: 'bottom-right', maxOpened: 3, glassQuality: 'auto' });
```

Toast wrappers use Blocks semantic colors, spacing, radius, shared lighting, and the application appearance. Custom content shares its containing surface.
`ThemingService` updates mounted notifications when appearance changes. See the
[appearance guide](../../playground/src/app/components/screens/appearance/README.md) for rendering policy and opaque fallbacks.

## Behavior and accessibility

The service and wrapper coordinate queue capacity, lifetime, progress, pause/resume, dismissal, and cleanup. Give users enough time to read messages and retain
important outcomes outside transient notifications. Use an inline alert or modal when acknowledgment is required.

Reduced motion suppresses movement while preserving state; reduced transparency and forced colors use opaque presentation. Simple message text accepts strings
or translation keys through `BX_I18N`; custom components own translation, keyboard access, accessible names, and descriptions for their own content.

## Playground

Open `/toastr` for initial configuration, live content/type/icon/surface/progress updates, paused lifetime resets, a loading-to-success transition, and a
queued-patch example. Open `/components/toast-core` for custom content, and `/components/simple-toast` for semantic notifications.
