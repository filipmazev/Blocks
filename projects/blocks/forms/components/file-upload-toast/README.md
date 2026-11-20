# File upload toast

Internal notification content for the Blocks [file upload session](../file-upload/README.md).

## Usage

Configure notifications through `FileUploadService.createSession()`. The upload session patches one Toastr reference for progress and switches the same
notification to success when the batch settles with successful files. Failures get a separate notification through the same Toastr host.

## Behavior and accessibility

Progress uses the shared spinner and progress bar. The **Review files** action links to the upload screen when a return route is configured, or offers an
in-toast Retry icon with a translated accessible name and tooltip. Counts describe the current upload or retry request. The relevant filenames stay on one line
and show in full on hover, keyboard focus, or tap when clipped.
