# Toast preview

Local catalog adapter for the actual `SimpleToast` and `ToastCore` components. Each instance owns a scoped `ToastRef` with deterministic content, no dismissal
timer, disabled animation and disabled swipe handling. It mounts content through the toast core's public `componentRef` contract without using the application
queue or adding a body overlay. Angular and ToastCore own view and reference teardown. Catalog cards set `core=true` for both notification entries so
SimpleToast appears with its actual material wrapper and close action. The shared PreviewFrame fits the complete notification into narrow cards.

`data` supplies distinct typed SimpleToast content. `duration` and `progress` optionally render ToastCore's real progress track; the local reference is paused
before mounting, so its lifetime does not run. The ToastCore card shows stacked upload and connection notifications, while SimpleToast shows one success toast.

`progressColor` defaults to `text-info` for the upload example and is passed through the real ToastRef configuration, so the progress track follows the same
semantic intent as its content instead of inheriting the application's neutral progress default.
