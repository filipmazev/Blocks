# Essential component examples

Shared demonstrations for the divider, popover, skeleton, autocomplete, chip, accordion, collapsible, alert, card, container, stack and grid catalog routes
under `/components`. Components are imported through the public package entry points.

These simple demos use English without language controls. Global appearance controls configure the shared theme and accessibility services.

The autocomplete mock owns its asynchronous state, cancels superseded queries, retains loaded suggestions on page failure and retries the same page explicitly.
The right-aligned page-size dropdown demonstrates the no-scrollbar action and overflow transitions. It shares a centered, wrapping row with the tonal danger
failure action, text reload action and readonly checkbox, and expands to a full row on narrow screens. Results use the same opaque option-panel treatment as
Select/MultiSelect. Load-more and retry use the same tonal accent buttons and shared footer padding as the select/multi-select demos. Choose **Fail next page**,
request another page and choose **Retry request** to exercise recovery.
