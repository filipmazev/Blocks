/**
 * Describes the raster sample contract.
 */
export interface IRasterSample {
  /** Sampled raster pixels, or null when the source could not be read. */
  data: ImageData | null;
  /** Video playback time used to reuse a frame readback; omitted for non-video sources. */
  stamp?: number;
}
