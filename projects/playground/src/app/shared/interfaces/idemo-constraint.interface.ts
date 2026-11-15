/** Optional numeric constraints and relationships that TypeScript cannot infer. */
export interface IDemoConstraint {
  minimum?: number;
  maximum?: number;
  integer?: boolean;
  minimumProperty?: string;
  maximumProperty?: string;
}
