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
    private readonly toastr = inject(ToastrService);

    protected notify(): void {
        this.toastr.queueSuccess({ title: 'Saved', message: 'Your settings are up to date.' });
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
    template: '<p>{{ data }}</p><button bx-button (click)="close()">Dismiss</button>',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomToast extends Toast<string, undefined> {}
```

Inside an application action with an injected `ToastrService` and `CustomToast` imported from its defining file:

```ts
const ref = this.toastr.queueToast(CustomToast, {
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

`Toast<D, R>` provides typed `data`, the `toast` reference, `onToastInit()`, and `close(result?)`. `ToastRef<D, R>` exposes `close(result?)`, `pause()`,
`resume()`, resolved `config`, and `afterClosed$`, `onPause$`, and `onResume$` observables.

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

Simple requests require `message` and accept optional `title`, both with `ResolvableText`. The simple helper's progress option retains the existing spelling
`showProgessBar`; custom toast configuration and global settings use `showProgressBar`.

`ToastrGlobalSettingsService.update(partial)` merges defaults without discarding unrelated settings. Per-toast configuration overrides these settings, followed
by library defaults. It also exposes `maxOpened` for queue capacity.

## Appearance and customization

```ts
import { inject } from '@angular/core';
import { ToastrGlobalSettingsService } from '@filip.mazev/blocks/toastr';

const settings = inject(ToastrGlobalSettingsService);
settings.update({ position: 'bottom-right', maxOpened: 3, glassQuality: 'auto' });
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

Open `/toastr` for the configurator, `/components/toast-core` for custom content, and `/components/simple-toast` for semantic notifications.
