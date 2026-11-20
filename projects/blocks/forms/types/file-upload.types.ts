import type { IFileUploadRequest } from '@forms/interfaces/ifile-upload-request.interface';

/** Current state of a file in the queue or a batch. */
export type FileUploadStatus = 'queued' | 'uploading' | 'uploaded' | 'failed' | 'canceled';

/** When staged files become an upload batch. */
export type FileUploadStartMode = 'manual' | 'automatic';

/** How a chosen file violated the selection rules. */
export type FileUploadRejectionReason = 'type' | 'size' | 'count';

/**
 * Application-owned upload or retry handler. A returned promise completes or fails any still-pending files when it settles.
 * Return void when an external event source will explicitly complete or fail every file.
 */
export type FileUploadHandler = (request: IFileUploadRequest) => void | Promise<void>;

/** Updates a transport or polling job's pause state. Resolve only after that state is confirmed, or reject to leave the previous state in place. */
export type FileUploadPauseHandler = (paused: boolean, signal: AbortSignal) => void | Promise<void>;

/** Presentation of the current progress or an individual batch outcome. */
export type FileUploadToastKind = 'progress' | 'success' | 'failure';
