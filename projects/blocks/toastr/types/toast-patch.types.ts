/** Shallow object updates; null is accepted only where declared by the application data contract. Arrays and primitive data are replaced.
 * @typeParam D - Application-owned toast data; nested objects are replaced rather than recursively merged.
 */
export type ToastDataPatch<D> = D extends readonly unknown[] ? D : D extends object ? Partial<D> : D;

/** Reference lifecycle. Queued notifications have no running lifetime until mounted. */
export type ToastState = 'queued' | 'open' | 'closing' | 'closed';
