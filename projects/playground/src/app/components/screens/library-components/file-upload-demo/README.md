# File upload demo

Interactive examples for the Blocks [file upload component](../../../../../../../blocks/forms/components/file-upload/README.md).

## Usage

Open the Playground tab to change selection settings and stage sample files. Open the Examples tab and use **Simulate upload** to start a two-file batch
immediately. The mock service completes one file and fails the file with the long name on its first attempt. Hover over the clipped filename in either tab or in
a notification to see the full name.

## API

The shared workbench controls multiple selection, automatic start, maximum file count and size, and the initial progress state. The Examples tab passes
`simulateImmediately` so its sample action can start the batch independently of the actual file picker's start mode.

## Behavior and accessibility

The demo uses an application-scoped session so progress and failures remain available after navigation. Select **Leave upload page** during a batch. Select
**Review files** in the failure toast to focus the first Retry action. Use the row icons to pause, resume, or cancel active files. Swipe queued rows right to
left to remove them, or use **Clear all** to empty the list.

## Playground

Open `/components/file-upload`.
