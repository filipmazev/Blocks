export interface IFileUploadStoryArgs {
  /** Allow a batch to include multiple files. */
  multiple: boolean;
  /** Send a selection as soon as it is accepted. */
  automatic: boolean;
  /** Maximum accepted files in each batch. */
  maxFiles: number;
  /** Maximum size of one file in bytes. */
  maxFileSize: number;
  /** Simulate an unknown total until the first polled progress update. */
  unknownProgress: boolean;
}
