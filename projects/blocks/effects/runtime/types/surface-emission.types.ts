/** Internal paint callback for a registered surface's self-emission layer. */
export type SurfaceEmissionPainter = (active: boolean, color: string | undefined, strength: number) => void;
