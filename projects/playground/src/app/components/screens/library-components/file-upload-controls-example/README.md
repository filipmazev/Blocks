# Custom upload controls example

This example renders a custom file list with the public Blocks upload session API.

## Import

Import `FileUploadService` from `@filip.mazev/blocks/forms` to create the session.

## Usage

Select **Upload sample file**. The mock upload reports progress, fails once, then succeeds on retry. Its toasts use the session’s bottom-left override.

## API

Read `session.files()` for file state, capability flags, and file controls. The example binds these snapshots to a Blocks Progress Bar and regular Buttons.

## Playground

Open `/components/file-upload` and select **Examples**.
